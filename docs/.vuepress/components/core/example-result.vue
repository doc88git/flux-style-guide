<template>
  <div :class="$style.result" v-html="resultIFrameHtml" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    html: {
      type: String,
      required: true
    },
    js: {
      type: String,
      required: true
    },
    css: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showResult: false
    }
  },
  computed: {
    resultIFrameHtml() {
      if (typeof document === 'undefined') return ''

      const iframe = document.createElement('iframe')
      iframe.src=`/${this.name}`
      iframe.srcdoc = `
        <!DOCTYPE html>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>
          <script src="/chunk-vendors.js"><\/script>
          <script src="/app.js"><\/script>
          <link rel="stylesheet" href="/app.css">
        </head>
        <body>
          ${this.html}
          <script>${this.js}<\/script>
          <script>
            (function(){
              var appNum = 1
              if (app instanceof Vue) {
                while(window.parent.window['app' + appNum] != null) {
                  appNum += 1
                }
                window.parent.window['app' + appNum] = app
                var appNoticeEl = document.createElement('div')
                appNoticeEl.style = 'position:fixed;top:0;right:0;color:rgba(0,0,0,0.5);font-size:12px;font-family:arial;cursor:default'
                appNoticeEl.textContent = 'app' + appNum
                document.body.appendChild(appNoticeEl)
              }
            })()
          <\/script>
          <style>
            ${this.css}
          </style>
        </body>
      `
      iframe.name = this.name
      return iframe.outerHTML
    }
  }
}
</script>

<style lang="scss" module>
.result {
  width: 100%;

  iframe {
    width: 100%;
    border: none;
  }
}

.button {
  width: 100%;
}
</style>
