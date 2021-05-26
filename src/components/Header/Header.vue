<template>
  <div class="header">
    <ul class="header__navigation" :class="currentTheme">
      <li class="header__navigation-item">
        <router-link to="/" class="header__navigation-item-link"
          >Home</router-link
        >
      </li>
      <li class="header__navigation-item">
        <router-link to="/meals" class="header__navigation-item-link"
          >Carbonara Meals Calculator</router-link
        >
      </li>
      <li class="header__navigation-item">
        <router-link to="/restaurants" class="header__navigation-item-link"
          >Our Restaurants</router-link
        >
      </li>
      <!-- theme toggler -->
      <li class="header__navigation-item">
        <div class="theme-toggler-wrap">
          <div
            class="theme-toggler "
            :class="{ active: currentTheme === 'dark-theme' }"
            @click="toggleTheme"
          >
            <div class="toggle-path">
              <div class="toggle-handle"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  @import "./Header.scss";
</style>
<script>
  export default {
    name: "Header",

    props: {
      currentTheme: {
        type: String,
      },
    },

    computed: {
      // getters: {
      //   currentTheme,
      // },
      // currentThemeVal() {
      //   return this.currentTheme;
      // },
    },

    methods: {
      toggleTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark-theme") {
          localStorage.setItem("theme", "light-theme");
          this.currentTheme = localStorage.getItem("theme");
        } else {
          localStorage.setItem("theme", "dark-theme");
          this.currentTheme = localStorage.getItem("theme");
        }
        location.reload();
      },
    },
  };
</script>
