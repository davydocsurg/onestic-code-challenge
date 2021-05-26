<template>
  <div class="banner" :class="bannerStyles">
    <div class="banner__wrapper">
      <div class="banner__image" v-if="backgroundMedia.type === 'image'">
        <img
          class="banner__image-asset"
          src="@/assets/media/pics.jpeg"
          :alt="text"
          :title="text"
        />
        <!-- :src="backgroundMedia.src" -->
      </div>
      <div class="banner__video" v-if="backgroundMedia.type === 'video'">
        <video class="banner__video-asset" autoplay controls muted>
          <source src="@/assets/media/vid.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="banner__text" v-if="text">
        <span class="banner__text-message">{{ text }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "./Banner.scss";
</style>
<script>
  export default {
    name: "Banner",
    props: {
      backgroundMedia: {
        type: Object,
        default: () => ({
          type: "image", // image/video
          src: "../../assets/media/pics.jpeg", //@/assets/media/vid.mp4
        }),
      },
      text: {
        type: String,
        default: null,
      },
      textDistribution: {
        type: String,
        default: "over", // top | over | bottom
      },
      textVerticalAlignment: {
        type: String,
        default: "center", // top | center | bottom
      },
      textHorizontalAlignment: {
        type: String,
        default: "center", // left || center || right
      },
    },
    computed: {
      bannerStyles() {
        return {
          "banner__text-distribution-over": this.textDistribution === "over",
          "banner__text-distribution-top": this.textDistribution === "top",
          "banner__text-distribution-bottom":
            this.textDistribution === "bottom",
          "banner__text-horizontal-left":
            this.textHorizontalAlignment === "left",
          "banner__text-horizontal-center":
            this.textHorizontalAlignment === "center",
          "banner__text-horizontal-right":
            this.textHorizontalAlignment === "right",
          "banner__text-vertical-top": this.textVerticalAlignment === "top",
          "banner__text-vertical-center":
            this.textVerticalAlignment === "center",
          "banner__text-vertical-bottom":
            this.textVerticalAlignment === "bottom",
        };
      },
    },
  };
</script>
