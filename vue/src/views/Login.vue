<template>
  
  <form action="">
    <div>
      <label for="login">Логин</label>
      <input id="login" name="login" type="text">
    </div>
    <div>
      <label for="email">Эл. почта</label>
      <input id="email" name="email" type="email">
    </div>
    <div>
      <label for="password">Пароль</label>
      <input id="password" name="password" type="password">
    </div>
  </form>



</template>

<script>
export default{
    name: 'Login'
}
</script>

<style>
label{
  padding: 10px;
}
</style>
