# GLTF

utils for GLTF/GLB

## Usage

### GLTF

parse / getTexture
```javascript
import { GLTF } from "https://code4fukui.github.io/GLTF/GLTF.js";

const bin = await Deno.readFile("./inoshi1-min.gltf");
const gltf = GLTF.parse(bin);
console.log(gltf);
const img = GLTF.getTexture(gltf);
console.log(img);
await Deno.writeFile("test.jpg", img);
```
also stringify / setTexture

### GLB

encode / decode
```javascript
import { GLB } from "https://code4fukui.github.io/GLTF/GLB.js";

const bin = await Deno.readFile("./inoshi1-min.glb");
const gltf = await GLB.decode(bin);
const glb = await GLB.decode(gltf)
console.log(glb);
```
with [glTF Pipeline ES modules](https://github.com/code4fukui/gltf-pipeline/)

### GLB2GLTF / GLTF2GLB by gltf-pipeline

[glTF Pipeline ES modules](https://github.com/code4fukui/gltf-pipeline/)
```sh
glb2gltf inoshi1-min.gltf
```

```sh
gltf2glb inoshi1-min.glb
```

## sample data

- [VRイノシシ by PCN北はりま](https://fukuno.jig.jp/3883)
