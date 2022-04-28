<template>
  <header>
    <div class="top-menu">
      <router-link class="item-menu" to="/">Main</router-link>
      <router-link class="item-menu" to="/project">Проекты</router-link>
      <router-link class="item-menu" to="/other">Что-то еще</router-link>
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