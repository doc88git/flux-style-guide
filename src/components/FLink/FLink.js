const vueTag = {
  vue: 'router-link',
  nuxt: 'nuxt-link'
}

const generateLink = $props => {
  let attrs = {}
  let props = {}

  if ($props.link) {
    attrs = { href: $props.link }
  }

  if ($props.to) {
    props = { ...$props }
  }

  return {
    attrs,
    props
  }
}

export default {
  name: 'FLink',
  props: {
    label: String,
    to: String,
    link: String
  },
  render(h) {
    let tag = 'a'

    const linkComponent =
      this.$f && this.$f.linkComponent ? this.$f.linkComponent : null

    if (this.to) tag = vueTag[linkComponent] || vueTag.vue

    let options = generateLink(this.$props)
    let slot = [this.label, this.$slots.default]

    return h(tag, options, slot)
  }
}
