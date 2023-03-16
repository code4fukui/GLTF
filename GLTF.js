import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

const parse = (bin) => {
  return JSON.parse(new TextDecoder().decode(bin));
};
const stringify = (gltf) => {
  return JSON.stringify(gltf, null, 2);
};

const head = "data:application/octet-stream;base64,";

const getTexture = (gltf) => {
  if (gltf.images.length == 0) {
    return null;
  }
  const imginfo = gltf.images[0];
  if (imginfo.mimeType != "image/jpeg") {
    return null;
  }
  const buf0 = gltf.buffers[0];
  const buffer = Base64.decode(buf0.uri.substring(head.length));
  if (buffer.length != buf0.byteLength) {
    throw new Error("length not match");
  }
  const imgview = gltf.bufferViews[imginfo.bufferView];
  const img = new Uint8Array(imgview.byteLength);
  for (let i = 0; i < img.length; i++) {
    img[i] = buffer[imgview.byteOffset + i];
  }
  return img;
};

const setTexture = (gltf, imgbin) => {
  if (gltf.images.length == 0) {
    return null;
  }
  const imginfo = gltf.images[0];
  if (imginfo.mimeType != "image/jpeg") {
    return null;
  }
  const buf0 = gltf.buffers[0];
  const buffer = Base64.decode(buf0.uri.substring(head.length));
  if (buffer.length != buf0.byteLength) {
    throw new Error("length not match");
  }

  const imgview = gltf.bufferViews[imginfo.bufferView];
  const newbuf = new Uint8Array(buffer.length - imgview.byteLength + imgbin.length);
  let idx = 0;
  for (let i = 0; i < gltf.bufferViews.length; i++) {
    const view = gltf.bufferViews[i];
    const newoffset = idx;
    if (i != imginfo.bufferView) {
      for (let j = 0; j < view.byteLength; j++) {
        newbuf[idx++] = buffer[view.byteOffset + j];
      }
    } else {
      for (let j = 0; j < imgbin.length; j++) {
        newbuf[idx++] = imgbin[j];
      }
      view.byteLength = imgbin.length;
    }
    view.byteOffset = newoffset;
  }
  buf0.uri = head + Base64.encode(newbuf);
  buf0.byteLength = newbuf.length;
  return gltf;
};

export const GLTF = { parse, stringify, getTexture, setTexture };
