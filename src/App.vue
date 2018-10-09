<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Special+Elite');
  @import url('https://fonts.googleapis.com/css?family=Hind:700');

  .header {
    background-image: url('https://i.imgur.com/EFvir9K.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 150px;
  }

  .card {
    border: none;
  }

  body {
    background: rgba(0, 0, 0, 0.87);
    background-image: url('https://i.imgur.com/rk4iRlK.png');
    background-size: cover;
    background-position: left;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  .jumbotron {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.56);
  }

  .envelope {
    background-image: url('https://i.imgur.com/slVnOBa.jpg');
    background-size: cover;
    background-position: center;
    font-family: 'Special Elite', cursive;
    color: rgba(0, 0, 0, 0.87);
    text-align: left;
  }

  .btn {
    text-transform: uppercase;
    letter-spacing: .5px;
    text-align: center;
    font-size: 14px;
    border: none;
    background: #6d4141;
    &:hover {
      background: #422020;
    }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h5 {
    color: rgba(255, 255, 255, 0.56);
  }

  h1,
  h2,
  {
    color: rgba(255, 255, 255, 0.87);
    font-weight: normal;
  }
</style>