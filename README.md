# GLB

utils for GLB/GLTF

## Usage

```javascript
import { GLTF } from "https://code4fukui.github.io/GLB/GLTF.js";

const bin = await Deno.readFile("./inoshi1-min.gltf");
const gltf = GLTF.parse(bin);
console.log(gltf);
const img = GLTF.getTexture(gltf);
console.log(img);
await Deno.writeFile("test.jpg", img);
```

## sample data

- [VRイノシシ by PCN北はりま](https://fukuno.jig.jp/3883)
