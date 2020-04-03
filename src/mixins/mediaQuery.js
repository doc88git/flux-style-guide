export default {
  data: () => ({
    mobileMedia: window.matchMedia('(max-width: 413px)'),
    isMobile: false
  }),

  methods: {
    setBreakpoint() {
      this.isMobile = this.mobileMedia && this.mobileMedia.matches
    }
  },

  beforeDestroy() {
    this.mobileMedia.removeListener(this.setBreakpoint)
  },

  mounted() {
    this.mobileMedia.addListener(this.setBreakpoint)
    this.setBreakpoint()
  }
}
