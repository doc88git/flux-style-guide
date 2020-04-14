<template>
  <div class="p--base">
    <div class="m-b--xl">
      Browser User Agent: "<strong>{{ $f.platform.userAgent }}</strong
      >"
    </div>

    <table>
      <thead>
        <tr>
          <th class="text-left">Property</th>
          <th class="text-left">Value</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(value, prop) in $f.platform.is" :key="prop">
          <td>{{ prop }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>

    <div class="m-t--xl">
      The device which you are using to view this website
      <strong>{{ touch }}</strong> touch capability.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    touch () {
      return this.$f.platform.has.touch ? 'has' : 'does not have'
    }
  }
}
</script>

<style lang="scss" scoped></style>
