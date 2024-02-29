<template>
  <Header />
  <main>
    <vue-page-transition name="zoom"
      ><router-view @item="item = $event" :itemSelected="this.item"
    /></vue-page-transition>
  </main>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      item: null,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/General.scss";
</style>
