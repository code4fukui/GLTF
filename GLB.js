import { gltfToGlb } from "https://code4fukui.github.io/gltf-pipeline/lib/gltfToGlb.js";
import { glbToGltf } from "https://code4fukui.github.io/gltf-pipeline/lib/glbToGltf.js";

const decode = async (bin) => {
  return (await glbToGltf(bin)).gltf;
};
const encode = async (gltf) => {
  return (await gltfToGlb(gltf)).glb;
};

export const GLB = { encode, decode };
