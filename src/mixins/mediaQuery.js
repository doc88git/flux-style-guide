export default {
  data: () => ({
    mobileMedia: window.matchMedia('(max-width: 413px)'),
    isMobile: false
  }),

  methods: {
    __setBreakpoint() {
      this.isMobile = this.mobileMedia && this.mobileMedia.matches
    }
  },

  beforeDestroy() {
    this.mobileMedia.removeListener(this.__setBreakpoint)
  },

  mounted() {
    this.mobileMedia.addListener(this.__setBreakpoint)
    this.__setBreakpoint()
  }
}
