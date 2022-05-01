<template>
  <div class="list-project">
    <CardProject
      v-for="project in PROJECTS"
      :key="project.id"
      :project="project"
    >
    </CardProject>
  </div>
</template>

<script>
import CardProject from "../components/project/CardProject.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ListProject",
  components: {
    CardProject,
  },
  data() {
    return {};
  },
  mounted() {
    this.getProjects();
  },
  computed: {
    ...mapGetters(["PROJECTS"]),
  },
  methods: {
    ...mapActions(["getProjects"]),
  },
};
</script>

<style>
.list-project{
  display: flex;
}
</style>