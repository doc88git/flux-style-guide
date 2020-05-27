<template>
  <div style="p--base">
    <f-field label="Email" hint="Email is needed" rules="required|email">
      <f-input
        placeholder="Your email here"
        name="email"
        v-model="value"
        type="email"
      />
    </f-field>
    <ul>
      <li v-for="(e, i) in errors.items" :key="i">
        {{ e }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: ''
  })
}
</script>

<style lang="scss" scoped></style>
