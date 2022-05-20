<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import ProgressBar from "./components/progress-bar/ProgressBar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Header,
    ProgressBar,
  },
}
</script>

<style>
</style>
