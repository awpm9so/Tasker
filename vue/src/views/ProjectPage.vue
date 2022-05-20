<template>
    <div>
        <h1>{{PROJECTS}}</h1>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default{
    name: 'ProjectPage',
    computed:{
        ...mapGetters(["PROJECTS"]),
    }
}
</script>

<style>

</style>
