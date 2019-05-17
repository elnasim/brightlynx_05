<template>
  <div class="header">
    <div class="container">
      <div class="nav">
        <router-link to="/" class="nav__link">Главная</router-link>
        <router-link to="/registration" class="nav__link">Регистрация</router-link>
        <router-link to="/auth" class="nav__link">Авторизация</router-link>
        <router-link to="/users" class="nav__link">Пользователи</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style scoped lang="scss">

  .header {
    background-color: #000;
  }

  .nav {
    display: flex;
  }

  .nav__link {
    color: #ffffff;
    display: block;
    text-transform: uppercase;
    padding: 20px;

    &.router-link-exact-active {
      background-color: red;
    }
  }

</style>
