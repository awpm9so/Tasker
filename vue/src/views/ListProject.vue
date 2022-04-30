<template>
  <div>
    <CardProject />
    <button v-on:click="getProjects">Загрузить</button>
    {{projects}}
  </div>
</template>

<script>
import CardProject from "../components/project/CardProject.vue";

export default {
  name: "ListProject",
  data() {
    return {
      projects: [],
    };
  },
  components: {
    CardProject,
  },
  methods: {
    getProjects: function () {
      return fetch("http://localhost:8000/api/projects", {})
        .then((response) => {  
          return response.json();
        })
        .then((data) => {
          this.projects = data;
          console.log(data);
        });
    },
  },
};
</script>

<style lang="scss">
</style>