import { GLTF } from "./GLTF.js";

//const txt = await Deno.readTextFile("./inoshi1.gltf");
//const gltf = JSON.parse(bin);
const basefn = "./inoshi1-min";
//const basefn = "./inoshi1";
const bin = await Deno.readFile(basefn + ".gltf");
const gltf = GLTF.parse(bin);
console.log(gltf);
const img = GLTF.getTexture(gltf);
console.log(img);
await Deno.writeFile("test.jpg", img);

const newimg = new Uint8Array(await Deno.readFile("test2.jpg"));
GLTF.setTexture(gltf, newimg);
await Deno.writeTextFile(basefn + "_mt.gltf", GLTF.stringify(gltf));

const img2 = GLTF.getTexture(gltf);
await Deno.writeFile("test2-chk.jpg", img2);
