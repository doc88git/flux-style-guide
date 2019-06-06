<template>
  <f-container class="content">
    <div class="flux-logo"><span>[</span>Flux<span>]</span>Style Guide</div>

    <f-card
      header-bg="https://altitude-community.aircanada.com/app/webroot/img/default-bg-card.png"
    >
      <f-card-title>Where does it come from?</f-card-title>
      <f-card-body>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </f-card-body>
      <f-card-separator />
      <f-card-actions>
        <f-button label="Ver mais" icon="list" outline color="blue"></f-button>
        <f-button label="Cancelar" icon="close" flat color="green"></f-button>
        <f-button label="Cancelar" icon="close"></f-button>
      </f-card-actions>
    </f-card>

    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index">
        <a target="_blank" :href="item.url">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </f-container>
</template>

<script>
import { FContainer } from "@/components/FContainer";
import { FButton } from "@/components/FButton";
import {
  FCard,
  FCardActions,
  FCardBody,
  FCardTitle,
  FCardSeparator
} from "@/components/FCard";

export default {
  components: {
    FContainer,
    FCard,
    FCardActions,
    FCardBody,
    FCardTitle,
    FCardSeparator,
    FButton
  },
  data: () => ({
    menuItems: [
      {
        name: "Documentation",
        url: "https://github.com/doc88git/flux-style-guide"
      },
      {
        name: "Widget Base",
        url: "https://github.com/doc88git/flux-widget-base"
      },
      {
        name: "Flux-CLI",
        url: "https://github.com/doc88git/flux-cli"
      },
      {
        name: "Doc88",
        url: "http://doc88.com.br"
      }
    ]
  })
};
</script>

<style lang="scss">
.content {
  @apply flex flex-wrap mx-auto items-center justify-center h-screen;
  .flux-logo {
    @apply w-full text-center m-0 text-5xl text-primary;
    span {
      @apply text-6xl mx-2 text-secondary;
    }
  }
  ul.menu {
    @apply w-full text-center uppercase;
    li {
      @apply inline mx-10 text-primary;
      a:hover {
        @apply text-primary-lighter;
      }
    }
  }
}
</style>
