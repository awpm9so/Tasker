<template>
    <div>
        <h1>{{PROJECT.title}}</h1>
        <p>{{PROJECT.main_image}}</p>
        <p>{{PROJECT.description}}</p>
        <p>{{PROJECT.creator}}</p>
        <p>Создан: {{getNiceDate(PROJECT.created_at)}}</p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default{
    name: 'ProjectPage',
    computed:{
        ...mapGetters(["PROJECT"]),
    },
    mounted(){
        this.getProject(this.$route.params.id)
    },
    methods:{
        ...mapActions(['getProject']),

        getNiceDate: function(date) {
            let niceDate = new Date(date);
            var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timezone: 'UTC',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                    };
            return niceDate.toLocaleString('ru', options)
        }
    }
}
</script>

<style>

</style>
