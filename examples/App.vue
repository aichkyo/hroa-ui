<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hrButton>123</hrButton>
  </div>
</template>

<script>
import hrButton from './packages/hr-button'

export default {
  name: 'App',
  components: {
    hrButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
