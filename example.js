import { GLTF } from "./GLTF.js";

//const txt = await Deno.readTextFile("./inoshi1-min.gltf");
//const gltf = JSON.parse(bin);
const bin = await Deno.readFile("./inoshi1-min.gltf");
const gltf = GLTF.parse(bin);
console.log(gltf);
const img = GLTF.getTexture(gltf);
console.log(img);
await Deno.writeFile("test.jpg", img);

const newimg = new Uint8Array(await Deno.readFile("test2.jpg"));
GLTF.setTexture(gltf, newimg);
await Deno.writeTextFile("./inoshi1-min2.gltf", GLTF.stringify(gltf));

const img2 = GLTF.getTexture(gltf);
await Deno.writeFile("test2-chk.jpg", img2);
