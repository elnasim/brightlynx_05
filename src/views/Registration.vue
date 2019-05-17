<template>
  <div class="registration-page">
    <div class="container">
      <h1>Регистрация</h1>
      <RegistrationForm/>
    </div>
  </div>
</template>

<script>
  import RegistrationForm from '../components/RegistrationForm'

  export default {
    name: 'Registration',
    metaInfo: {
      title: 'Регистрация',
    },
    components: { RegistrationForm },
  }
</script>

<style scoped lang="scss">

  .registration-page {
    margin-top: 50px;
  }

  h1 {
    text-align: center;
  }

</style>
