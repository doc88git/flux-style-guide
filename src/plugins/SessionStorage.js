import { isSSR, client } from './Platform.js'
import { getEmptyStorage, getStorage } from '../utils/web-storage.js'

export default {
  install({ $f }) {
    const hasWebStorage = client.has.webStorage

    const storage =
      isSSR === true || hasWebStorage === false
        ? getEmptyStorage()
        : getStorage('session')

    $f.sessionStorage = storage
    Object.assign(this, storage)
  }
}
