<template>
    <section class="create-form">
       <div class="create-form__item">
           <input type="text" v-model="title" placeholder="Enter the project name" required>
       </div>
       <div class="create-form__item">
           <input type="text" v-model="description" placeholder="Enter the project description" required>
       </div>
       <div class="create-form__item">
           <input type="text" v-model="main_image" placeholder="Insert a picture of the project">
       </div>
       <div>
           <input @click.prevent="createProject({title, description, main_image, creator: 'admin'})" type="submit" value="Create">
       </div>
    </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'CreateProject',
    data(){
        return{
            title: null,
            description: null,
            main_image: null
        }
    },
    methods:{
        ...mapActions(['createProject'])
    }
}
</script>

<style lang="scss">
.create-form__item
{
    margin: 10px;
    padding: 10px;
}
</style>