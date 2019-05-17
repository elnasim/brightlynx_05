<template>
  <div class="users-page container">
    <div v-if="users" class="users">
      <div class="users-head">
        <div class="users-head__col">Логин</div>
        <div class="users-head__col">Пароль</div>
      </div>
      <UserItem v-for="item in users" :key="item.userName"
                :userName="item.userName"
                :password="item.password"
      />
    </div>

    <Loading v-else/>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import UserItem from '../components/UserItem'
  import Loading from '../components/Loading'

  export default {
    name: 'Users',
    metaInfo: {
      title: 'Пользователи',
    },
    components: { Loading, UserItem },
    computed: {
      ...mapState(['users']),
    },
    methods: {
      ...mapActions(['getUsers']),
    },
    created () {
      this.getUsers()
    },
  }
</script>

<style scoped lang="scss">
  .users-page {
    margin-top: 50px;
  }

  .users {
    border: 1px solid #000;
  }

  .users-head {
    display: flex;
    font-weight: bold;
    font-size: 20px;
  }

  .users-head__col {
    flex: 1;
    text-align: center;
    border: 1px solid #000;
    padding: 10px;
  }
</style>
