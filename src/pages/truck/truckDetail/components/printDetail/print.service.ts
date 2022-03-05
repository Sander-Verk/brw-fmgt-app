import { Compartment } from "generated/graphql";
import { countMaterials } from "utils/material.helper";
import { v4 as uuidv4 } from "uuid";

export enum PrintBlockType {
  COMPARTMENT = "COMPARTMENT",
  SECTION = "SECTION",
}

export interface PrintBlock {
  key: string;
  type: PrintBlockType;
  content?: any;
}

export const calculatePrintBlocks = (compartments: Compartment[]): PrintBlock[] => {
  const blocks: PrintBlock[] = [];

  for (const compartment of compartments) {
    blocks.push({
      key: compartment.id,
      type: PrintBlockType.COMPARTMENT,
      content: {
        title: compartment.name
      }
    });

    for (const section of compartment.sections) {
      const materials = countMaterials(section.materials || []);
    
      blocks.push({
        key: uuidv4(),
        type: PrintBlockType.SECTION,
        content: {
          title: section.name,
          materials,
          imageUrl: section.imageUrl
        }
      });
    }
  }

  return blocks;
}