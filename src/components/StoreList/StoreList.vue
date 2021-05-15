<template>
  <div class="store-list">
    <p>
      Here you can find all of our restaurants. We have {{ storesCount }} stores
      right now!
    </p>
    <div class="form-group my-2">
      <label for="Filter Restaurants">Filter Restaurants</label>
      <input
        type="text"
        v-model="filterText"
        class="form-control form-control-sm"
        placeholder="Type to filter..."
      />
    </div>
    <div class="row">
      <Store
        class="store-list__item col-lg-3 col-md-4 col-sm-12"
        :title="store.name"
        :photo="store.image"
        :location="store.location"
        v-for="store in filterStores"
        :key="store.id"
      />
    </div>
  </div>
</template>
<style lang="scss">
  @import "./StoreList.scss";
</style>
<script>
  import Store from "@/components/Store/Store";
  import _ from "lodash";

  export default {
    name: "StoreList",
    components: {
      Store,
    },
    data() {
      return {
        filterText: "",
        currentPage: 0,
        itemsPerPage: 2,
        resultCount: 0,
      };
    },
    props: {
      stores: {
        type: Array,
        default: () => [],
      },
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
  };
  // return _.map(
  //   this.stores,
  //   ((store) => {
  //     store["image"] =
  //       "https://via.placeholder.com/300?text=" + store.name;
  //     // return store;
  //   }).filter((el) => {
  //     return el.match(this.filterText);
  //   })
  // );
</script>
