<template>
  <header>
    <div class="top-menu">
      <router-link class="item-menu" to="/">Главная</router-link>
      <router-link class="item-menu" to="/projects">Проекты</router-link>
      <router-link class="item-menu" to="/other">Что-то еще</router-link>
      <router-link class="item-menu" to="/admin">Адимнка</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
header {
  background-color: aqua;
  width: 100%;
  height: 50px;
}

 .item-menu {
  padding: 20px;
} 
</style>