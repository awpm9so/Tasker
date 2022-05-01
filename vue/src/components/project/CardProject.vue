<template>
    <div class="card-project">
        <h3><a href="#">{{project.title}}</a></h3>
        <p>{{project.main_image}}</p>
        <p>{{project.description}}</p>
        <p>{{project.creator}}</p>
    </div>
</template>

<script>
export default {
    name: 'CardProject',  
    props:{
        project:{
            type: Object,
            default(){
                return {}
            }
        }
    },
}

</script>

<style>
.card-project{
    background-color: deepskyblue;
    color: blue;
    margin: 10px;
}
</style>