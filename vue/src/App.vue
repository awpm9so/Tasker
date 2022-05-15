<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <ProgressBar></ProgressBar>

    <button v-on:click="getProgress">ЖМЯКАЙ</button>
    <button v-on:click="test">ТЕСТ</button>
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
  methods: {
    ...mapActions(["test"]),

    getProgress: async function () {
      fetch("http://localhost:8000/api/progress",{
        method: 'POST'
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    },
    test: async function () {
      fetch("http://localhost:8000/api/test",{
        method: 'POST'
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>

<style>
</style>
