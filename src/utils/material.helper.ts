import { Material } from "generated/graphql";

export const countMaterials = (materials: Material[]): { materialName: string; amount: number }[] => {
  const counts: { [key: string]: number } = {};

  for (const num of materials?.map(m => m.type.name) || []) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  return Object.keys(counts).map(key => ({ key: key, materialName: key, amount: counts[key] })) || [];
}