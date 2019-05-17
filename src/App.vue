<template>
  <section>
    <div
      class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p class="font-bold">Be Warned</p>
      <p>Something not ideal might be happening.</p>
    </div>
    <div>
      <!-- <i class="material-icons md-light">
        account_balance_wallet
      </i>
      <i class="material-icons">
        account_balance_wallet

      outlined: "material-icons-outlined",
      sharp: "material-icons-sharp",
      twoTone: "material-icons-two-tone",
      roud: "material-icons-roud",
      default: ""


      </i> -->
    </div>
    <div>
      outlined
      <f-icon name="extension" type="outlined" lib="material" />
    </div>
    <div>
      sharp
      <f-icon name="extension" type="sharp" lib="material" />
    </div>
    <div>
      twoTone
      <f-icon name="extension" type="twoTone" lib="material" />
    </div>
    <div>
      round
      <f-icon name="extension" type="round" lib="material" />
    </div>
    <div>
      default
      <f-icon name="extension" type="default" lib="material" />
    </div>
  </section>
</template>

<script>
import FIcon from "@/components/FIcon/FIcon";

export default {
  components: {
    FIcon
  }
};
</script>

<style lang="scss" src="@/assets/f-style-guide.scss"></style>
