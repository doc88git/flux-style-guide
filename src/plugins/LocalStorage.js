import { isSSR, hasWebStorage } from "./Platform.js";
import { getEmptyStorage, getStorage } from "../utils/web-storage.js";

export default {
  install({ $f }) {
    const storage =
      isSSR === true || hasWebStorage() === false
        ? getEmptyStorage()
        : getStorage("local");

    $f.localStorage = storage;
    Object.assign(this, storage);
  }
};
