<template>
  <div class="store" v-if="isVisible">
    <div class="store__wrapper">
      <h2 class="store__title">{{ title }}</h2>
      <span class="store__location">{{ location }}</span>
      <img :src="photo" :alt="title" :title="title" />
      <p class="store__joke py-2 font-style-italic">{{ joke }}</p>
    </div>
  </div>
</template>
<style lang="scss">
  @import "./Store.scss";
</style>
<script>
  export default {
    name: "Store",
    props: {
      title: {
        type: String,
        default: null,
      },
      location: {
        type: String,
        default: null,
      },
      photo: {
        type: String,
        default: null,
      },
      joke: {
        type: String,
        default: null,
      },
    },
    computed: {
      isVisible() {
        return !!this.title && !!this.location;
      },
    },
  };
</script>
