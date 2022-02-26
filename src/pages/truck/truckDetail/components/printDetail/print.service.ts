import { Compartment } from "generated/graphql";
import { countMaterials } from "utils/material.helper";
import { v4 as uuidv4 } from "uuid";

export enum PrintBlockType {
  COMPARTMENT = "COMPARTMENT",
  SECTION = "SECTION",
  PAGEBREAK = "PAGEBREAK"
}

export interface PrintBlock {
  key: string;
  type: PrintBlockType;
  content?: any;
}

export const calculatePrintBlocks = (compartments: Compartment[]): PrintBlock[] => {
  const blocks: PrintBlock[] = [];
  let currentCount = 0;

  const addBlock = (block: PrintBlock, height: number) => {
    if ((currentCount + height) < 980) {
      blocks.push(block);
      currentCount = currentCount + height;
    } else {
      blocks.push({
        key: "pageBreak",
        type: PrintBlockType.PAGEBREAK,
      });
      blocks.push(block);
      currentCount = height;
    }
  }

  for (const compartment of compartments) {
    addBlock({
      key: compartment.id,
      type: PrintBlockType.COMPARTMENT,
      content: {
        title: compartment.name
      }
    }, 50);

    for (const section of compartment.sections) {
      const materials = countMaterials(section.materials || []);
      const imageHeight = section.imageSize ? (270 / (section.imageSize.width || 0)) * (section.imageSize.height || 0) : 0;
      const calculatedHeight = 50 + Math.max(materials.length * 55, imageHeight) + 20; // 55px for the section title, 20px for the margin, 55px for each material line

      addBlock({
        key: uuidv4(),
        type: PrintBlockType.SECTION,
        content: {
          title: section.name,
          materials,
          imageUrl: section.imageUrl
        }
      }, calculatedHeight);
    }
  }

  return blocks;
}