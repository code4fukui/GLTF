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

### GLB2GLTF / GLTF2GLB by gltf-pipeline

setup
```sh
npm i
```

```sh
gltf-pipeline -i inoshi1-min.glb -o inoshi1-min.gltf
```

```sh
gltf-pipeline -i inoshi1-min2.gltf -o inoshi1-min2.glb
```


## sample data

- [VRイノシシ by PCN北はりま](https://fukuno.jig.jp/3883)
