import { isSSR, client } from './Platform.js'
import { getEmptyStorage, getStorage } from '../utils/web-storage.js'

export default {
  install({ $f }) {
    const storage =
      isSSR === true || client.has.webStorage === false
        ? getEmptyStorage()
        : getStorage('local')

    $f.localStorage = storage
    Object.assign(this, storage)
  }
}
