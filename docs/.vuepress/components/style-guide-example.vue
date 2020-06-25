<template>
  <div class="VueExample">
    <template v-if="!playgroundOnly">
      <f-tab :options="options">
        <template slot="content-1">
          <ClientOnly>
            <component
              class="VueExample__content"
              v-if="dynamicComponent"
              :is="dynamicComponent"
            />
          </ClientOnly>
          <!-- <ExampleResult
            v-if="shouldRenderResult"
            :name="name"
            v-bind="compatBlocks"
          /> -->
        </template>
        <template slot="content-2">
          <div v-for="(code, lang) in blocks" :key="lang">
            <CodeBlock
              v-if="code"
              :lang="lang"
              :code="code"
              :disabled="codeBlockDisabled(lang)"
            />
          </div>
        </template>
        <!-- <template slot="content-3">Content C</template> -->
      </f-tab>
    </template>
    <!-- <PlaygroundButton v-if="shouldRenderResult" :name="name" v-bind="blocks" /> -->
  </div>
</template>

<script>
import CodeBlock from './core/code-block'
import ExampleResult from './core/example-result'
// import PlaygroundButton from './core/playground-button'
import store from '@store'

export default {
  name: 'style-guide-example',
  components: {
    CodeBlock,
    ExampleResult
    // PlaygroundButton
  },
  props: {
    name: {
      type: String,
      required: true
    },
    html: {
      type: String,
      default: ''
    },
    es5Js: {
      type: String,
      default: ''
    },
    modernJs: {
      type: String,
      default: ''
    },
    css: {
      type: String,
      default: ''
    },
    fluxJs: String,
    fluxCss: String,
    htmlDisabled: {
      type: Boolean,
      default: false
    },
    jsDisabled: {
      type: Boolean,
      default: false
    },
    cssDisabled: {
      type: Boolean,
      default: false
    },
    htmlOnly: {
      type: Boolean,
      default: false
    },
    jsOnly: {
      type: Boolean,
      default: false
    },
    cssOnly: {
      type: Boolean,
      default: false
    },
    resultDisabled: {
      type: Boolean,
      default: false
    },
    resultOnly: {
      type: Boolean,
      default: false
    },
    playgroundOnly: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dynamicComponent: null
  }),
  computed: {
    options() {
      let arr = [{ label: 'Example', value: 1 }]

      if (!this.resultOnly) {
        arr.push({ label: 'Code', value: 2 })
      }

      return arr
    },
    langVariants() {
      return {
        html: {
          default: this.unsanitize(this.html)
        },
        js: {
          es5: this.unsanitize(this.es5Js),
          modern: this.unsanitize(this.modernJs)
        },
        css: {
          default: this.unsanitize(this.css)
        }
      }
    },
    blocks() {
      return {
        html: this.formatDirectives(this.langVariants.html.default),
        js: this.formatDirectives(this.langVariants.js[store.jsStyle]),
        css: this.langVariants.css.default
      }
    },
    compatBlocks() {
      return {
        html: this.langVariants.html.default,
        js: this.langVariants.js.es5,
        css: this.langVariants.css.default
      }
    },
    shouldRenderResult() {
      return (
        !this.resultDisabled && !this.htmlOnly && !this.jsOnly && !this.cssOnly
      )
    }
  },
  mounted() {
    this.importComponent(`./${this.name}.example.vue`)
  },
  methods: {
    async importComponent(path) {
      let m
      try {
        m = await import(`./${this.name}.example.vue`)
      } catch (e) {
        m = await import(`./examples/${this.name}.example.vue`)
      }
      this.dynamicComponent = m.default
    },
    unsanitize(code) {
      return code
        .replace(/&quot;/g, '"')
        .replace(/\[\[/g, '{{')
        .replace(/\]\]/g, '}}')
    },
    codeBlockDisabled(lang) {
      return (
        this[`${lang}Disabled`] ||
        (this.htmlOnly && lang !== 'html') ||
        (this.jsOnly && lang !== 'js') ||
        (this.cssOnly && lang !== 'css') ||
        this.resultOnly
      )
    },
    formatDirectives(code) {
      return store.useDirectiveShorthands
        ? code.replace(/\bv-bind:\b/g, ':').replace(/\bv-on:\b/g, '@')
        : code
    }
  }
}
</script>

<style lang="scss" scoped>
.VueExample {
  margin: 20px 0;
  &__content {
    padding: 16px 8px;
  }
}
</style>
