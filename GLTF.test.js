import * as t from "https://deno.land/std/testing/asserts.ts";
import { GLTF } from "./GLTF.js";

Deno.test("simple", async () => {
  const bin = await Deno.readFile("./inoshi1-min.gltf");
  const gltf = GLTF.parse(bin);
  const newimg = new Uint8Array(await Deno.readFile("test2.jpg"));
  GLTF.setTexture(gltf, newimg);
  const img2 = GLTF.getTexture(gltf);
  t.assertEquals(newimg, img2);
});
