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
  @import url('https://fonts.googleapis.com/css?family=Teko:600&effect=decaying');

  .download {
    max-width: 34px;
    margin: 8px;
    transition: ease-in-out 0.1s;
    &:hover {
      transform: scale(1.05);
    }
  }

  iframe {
    border: none;
    height: 100vh;
  }

  .header {
    background-image: url('https://i.imgur.com/aLfLyY7.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 115px;
    line-height: 125px;
  }

  .header-title {
    letter-spacing: 0.4rem;
    font-family: 'Teko', sans-serif;
    color: black;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 426px) {
    .header-title {
      letter-spacing: 0.1rem;
      font-size: 42px;
    }
  }

  @media only screen and (min-width:427px) {
    .header-title {
      font-size: 52px;
    }
  }

  @media only screen and (min-width: 852px) {
    .header-title {
      font-size: 72px;
    }
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
    padding: 16px 32px;
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