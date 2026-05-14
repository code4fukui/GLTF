# GLTF

GLTF/GLB用ユーティリティ

## 使い方

### GLTF

パース / テクスチャ取得
```javascript
import { GLTF } from "https://code4fukui.github.io/GLTF/GLTF.js";

const bin = await Deno.readFile("./inoshi1-min.gltf");
const gltf = GLTF.parse(bin);
console.log(gltf);
const img = GLTF.getTexture(gltf);
console.log(img);
await Deno.writeFile("test.jpg", img);
```
stringify / setTexture も利用可能です。

### GLB

エンコード / デコード
```javascript
import { GLB } from "https://code4fukui.github.io/GLTF/GLB.js";

const bin = await Deno.readFile("./inoshi1-min.glb");
const gltf = await GLB.decode(bin);
const glb = await GLB.encode(gltf)
console.log(glb);
```
[glTF Pipeline ES modules](https://github.com/code4fukui/gltf-pipeline/) を使用しています。

### gltf-pipeline による GLB2GLTF / GLTF2GLB

[glTF Pipeline ES modules](https://github.com/code4fukui/gltf-pipeline/)
```sh
glb2gltf inoshi1-min.gltf
```

```sh
gltf2glb inoshi1-min.glb
```

## サンプルデータ

- [VR Inoshi by PCN Harima](https://fukuno.jig.jp/3883)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
