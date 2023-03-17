import * as t from "https://deno.land/std/testing/asserts.ts";
import { GLB } from "./GLB.js";

Deno.test("simple", async () => {
  const bin = await Deno.readFile("./inoshi1.glb");
  const gltf = await GLB.decode(bin);
  //console.log(gltf);
  const bin2 = await GLB.encode(gltf);
  //console.log(bin2.length, bin.length);
  const gltf2 = await GLB.decode(bin2);
  const gltf0 = await GLB.decode(bin);
  //console.log(bin, bin2)
  //t.assertEquals(bin, bin2);
  t.assertEquals(gltf0, gltf2);
});
