<template>
  <div class="avatar-list">
    <transition-group
      name="avatar-list__inner"
      class="avatar-list__inner"
      tag="div"
    >
      <f-tooltip
        v-for="(avatar, index) in displayAvatars"
        :key="getAvatarKey(avatar)"
        position="bottom"
        aligned="center"
        bg-color="primary"
        class="avatar-list__avatarTooltip"
      >
        <f-avatar
          :src="avatar.photo || fallbackAvatar"
          :size="30"
          class="avatar-list__avatar"
        />

        <template slot="content">{{ avatar.label }}</template>
      </f-tooltip>
    </transition-group>

    <div v-if="avatars.length > showLimit" class="avatar-list__remainingCount">
      <span class="avatar-list__remainingCount--text">
        {{ remainingAvatars }}
      </span>
    </div>
  </div>
</template>

<script>
import { FAvatar } from '../../FAvatar'
import { FTooltip } from '../../FTooltip'

export default {
  name: 'AvatarList',

  components: { FAvatar, FTooltip },

  props: {
    avatars: {
      type: Array,
      required: true
    },
    fallbackAvatar: {
      type: String,
      default: ''
    }
  },

  data: () => ({ showLimit: 0 }),

  computed: {
    displayAvatars() {
      return this.avatars.slice(0, this.showLimit)
    },
    remainingAvatars() {
      return `${(this.avatars || []).length - this.showLimit}`
    }
  },

  methods: {
    getAvatarKey(avatar) {
      return JSON.stringify(avatar)
    }
  },

  mounted() {
    const resizeObs = new ResizeObserver(([{ contentRect }]) => {
      // (Root element width minus __remainingCount div width) divided by
      // (each avatar width plus margin)
      this.showLimit = Math.floor((contentRect.width - 35) / 35)
    })

    resizeObs.observe(this.$el)
  }
}
</script>

<style lang="scss">
.avatar-list {
  display: flex;
  overflow: hidden;

  &__inner {
    display: flex;
    flex-wrap: nowrap;
    margin-right: 5px;

    &-enter-active,
    &-leave-active {
      transition: opacity 100ms, width 200ms;
    }

    &-enter,
    &-leave-to {
      overflow: hidden;
      opacity: 0;
      width: 0px !important;
    }
  }

  &__avatarTooltip {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  &__avatar {
    border: 0;
    padding: 0 !important;
  }

  &__remainingCount {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    flex-shrink: 0;

    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: var(--color-primary);

    &--text {
      color: var(--color-white);
      font-weight: 300;
      font-size: 14px;
    }
  }
}
</style>
