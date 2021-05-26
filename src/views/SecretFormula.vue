<template>
  <div>
    <!-- <Banner
      :backgroundMedia="backgroundMedia"
      :text="text"
      :textDistribution="textDistribution"
    /> -->
    <!-- <h1 class="">Secret Formula Page</h1> -->
    <Banner :text="text" />
  </div>
</template>

<script>
  import Banner from "@/components/Banner/Banner";

  export default {
    components: {
      Banner,
    },

    data() {
      return {
        backgroundMedia: {
          type: "image",
          src: "../assets/media/pics.png",
        },
        text: "The Secret Formula",
      };
    },
  };
</script>
