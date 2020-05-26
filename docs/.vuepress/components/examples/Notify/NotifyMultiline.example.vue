<template>
  <div class="p--base">
    <f-button
      v-for="(pos, index) in positions"
      :key="index"
      size="small"
      @click="showNotifWithPositioning(pos)"
      :label="pos"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    positions: [
      'top-left',
      'top',
      'top-right',
      'left',
      'center',
      'right',
      'bottom-left',
      'bottom',
      'bottom-right'
    ]
  }),
  methods: {
    showNotifWithPositioning(position) {
      const alerts = [
        {
          color: 'red',
          message: 'Woah! Danger! You are getting good at this!',
          icon: 'report_problem'
        },
        { message: 'You need to know about this!', icon: 'warning' },
        { message: 'Wow! Nice job!', icon: 'thumb_up' },
        { color: 'teal', message: 'Quasar is cool! Right?', icon: 'tag_faces' },
        {
          color: 'purple',
          message: 'Jim just pinged you',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
        },
        {
          multiLine: true,
          message:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.'
        }
      ]

      const { color, textColor, multiLine, icon, message, avatar } = alerts[
        Math.floor(Math.random(alerts.length) * 10) % alerts.length
      ]
      const random = Math.random() * 100

      const twoActions = random > 70
      const buttonColor = color ? 'white' : void 0

      this.$f.notify({
        color,
        textColor,
        icon: random > 30 ? icon : null,
        message,
        position,
        avatar,
        multiLine,
        actions: twoActions
          ? [
              {
                label: 'Reply',
                color: buttonColor,
                handler: () => {
                  /* console.log('wooow') */
                }
              },
              {
                label: 'Dismiss',
                color: 'yellow',
                handler: () => {
                  /* console.log('wooow') */
                }
              }
            ]
          : random > 40
          ? [
              {
                label: 'Reply',
                color: buttonColor,
                handler: () => {
                  /* console.log('wooow') */
                }
              }
            ]
          : null,
        timeout: Math.random() * 5000 + 3000
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
