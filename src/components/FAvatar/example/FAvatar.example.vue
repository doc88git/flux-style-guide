<template>
  <f-container>
    <f-avatar :src="image" />
  </f-container>
</template>

<script>
import { FContainer } from '@/components/FContainer'
import { FAvatar } from '@/components/FAvatar'

export default {
  components: {
    FContainer,
    FAvatar
  },
  data: () => ({
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e4/Elliot_Grieveson.png'
  })
}
</script>

<style lang="scss" scoped></style>
