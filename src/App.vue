<template>
  <div id="app">
    <Header/>
    <div class="main-section">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }
  body {
    background: #e1e1e1;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .main-section {
    width: 1400px;
    margin: 15px auto;
    background: white;
    border-radius: 3px;
  }


</style>
