<template>
  <div class="store-list">
    <p>
      Here you can find all of our restaurants. We have {{ storesCount }} stores
      right now!
    </p>
    <button @click="fetchJokes" class="btn btn-sm btn-outline-info">
      Joke
    </button>
    <div class="form-group my-5">
      <label for="Filter Restaurants">Filter Restaurants</label>
      <input
        type="text"
        v-model="filterText"
        class="form-control form-control-sm"
        placeholder="Type to filter..."
      />
    </div>
    <div class="row pb-4">
      <Store
        class="store-list__item col-lg-3 col-md-4 col-sm-12"
        :title="store.name"
        :photo="store.image"
        :location="store.location"
        :joke="joke"
        v-for="store in filterStores"
        :key="store.id"
      />
      <!-- :joke="store.joke" -->
    </div>
  </div>
</template>
<style lang="scss">
  @import "./StoreList.scss";
  @import "bootstrap/scss/bootstrap.scss";
</style>
<script>
  // import "bootstrap/dist/css/bootstrap.css";

  import Store from "@/components/Store/Store";
  import _ from "lodash";
  import axios from "axios";

  export default {
    name: "StoreList",
    components: {
      Store,
    },
    data() {
      return {
        filterText: "",
        joke: "",
      };
    },
    props: {
      stores: {
        type: Array,
        default: () => [],
      },
    },
    mounted() {
      this.fetchJokes();
    },
    computed: {
      storesWithImages() {
        return _.map(this.stores, function(store) {
          store["image"] = "https://via.placeholder.com/300?text=" + store.name;

          return store;
        });
      },
      filterStores() {
        return this.storesWithImages.filter((el) => {
          return el.name.match(this.filterText);
        });
      },
      storesCount() {
        return _.size(this.stores);
      },
    },
    methods: {
      fetchJokes() {
        axios
          .get("https://api.jokes.one/jod?category=knock-knock")
          .then((res) => {
            console.log(res.data.contents.jokes[0].joke.title);
            this.joke = res.data.contents.jokes[0].joke.text;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
</script>
