<template>
  <div class="auth-page">
    <div class="container">
      <h1>Авторизация</h1>
      <AuthForm/>
    </div>
  </div>
</template>

<script>
  import AuthForm from '../components/AuthForm'
  export default {
    name: 'Auth',
    metaInfo: {
      title: 'Авторизация',
    },
    components: { AuthForm },
  }
</script>

<style scoped lang="scss">
  .auth-page {
    margin-top: 50px;
  }

  h1 {
    text-align: center;
  }
</style>
