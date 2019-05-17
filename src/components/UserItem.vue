<template>
  <div class="user-item">
    <div class="user-item__col">{{userName}}</div>
    <div class="user-item__col">{{password}}</div>
  </div>
</template>

<script>
  export default {
    name: 'UserItem',
    props: ['userName', 'password'],
  }
</script>

<style scoped lang="scss">
  .user-item {
    display: flex;
  }

  .user-item__col {
    flex: 1;
    text-align: center;
    border: 1px solid #000;
    padding: 10px;
  }
</style>
