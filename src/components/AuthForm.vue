<template>
  <div class="form">
    <label class="form__label">
      <input class="form__input" type="text" placeholder="Имя" v-model="userName"/>
      <span class="form__error" v-if="userNameValidate">Поле не может быть пустым</span>
    </label>
    <label class="form__label">
      <input class="form__input" type="text" placeholder="Пароль" v-model="password"/>
      <span class="form__error" v-if="passwordValidate">Поле не может быть пустым</span>
    </label>
    <button class="form__button" @click="_click" v-if="!loading">Авторизация</button>
    <button class="form__button form__button--disable" @click.prevent v-else>Авторизация...</button>
  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'AuthForm',
    data () {
      return {
        userName: '',
        password: '',
        userNameValidate: false,
        passwordValidate: false,
      }
    },
    computed: {
      ...mapState(['loading']),
    },
    methods: {
      _click () {
        if (this.userName.length > 0 && this.password.length > 0) {
          this.$store.dispatch('auth', { userName: this.userName, password: this.password })
        }
        if (this.userName.length === 0) {
          this.userNameValidate = true
        } else {
          this.userNameValidate = false
        }
        if (this.password.length === 0) {
          this.passwordValidate = true
        } else {
          this.passwordValidate = false
        }
      },
    },
  }
</script>

<style scoped lang="scss">

  .form {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 2px;
  }

  .form__label {
    margin-bottom: 20px;
    display: block;
  }

  .form__input {
    width: 100%;
    font-size: 20px;
    padding: 10px;
  }

  .form__button {
    border: none;
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: red;
    color: #ffffff;
    cursor: pointer;
  }

  .form__button--disable {
    opacity: .4;
    cursor: default;
  }

  .form__error {
    background-color: red;
    text-align: center;
    color: #ffffff;
    padding: 5px;
    display: block;
  }


</style>
