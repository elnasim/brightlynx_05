<template>
  <div class="home">
    <div class="container">
      <h1>Главная страница</h1>
      <p>Hello world!</p>
      <div class="images">
        <img src="@/assets/images/1.jpg" class="images__item" alt="">
        <img src="@/assets/images/2.jpg" class="images__item" alt="">
        <img src="@/assets/images/3.jpg" class="images__item" alt="">
        <img src="@/assets/images/4.jpg" class="images__item" alt="">
      </div>
      <div class="youtube">
        <iframe src="https://www.youtube.com/embed/Ku6MnDx4BI8?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    metaInfo: {
      title: 'Главная',
    },
  }
</script>

<style lang="scss" scoped>
  .images {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .images__item {
    width: 25%;
    display: block;
  }

  .youtube {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #000;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
