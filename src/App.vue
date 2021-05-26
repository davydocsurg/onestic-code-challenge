<template>
  <div id="app" :class="currentTheme">
    <Header :currentTheme="currentTheme" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<style lang="scss">
  @import "@/assets/styles/styles.scss";
</style>
<script>
  import Header from "@/components/Header/Header";

  export default {
    name: "App",
    components: {
      Header,
    },

    data() {
      return {
        // currentTheme: localStorage.getItem("theme"),
      };
    },

    computed: {
      currentTheme() {
        return localStorage.getItem("theme");
      },
    },
  };
</script>
