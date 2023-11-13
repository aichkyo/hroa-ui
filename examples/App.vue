<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hrButton>123</hrButton>
    <hr-input @change="hrChange">input</hr-input>
  </div>
</template>

<script>
import hrButton from './packages/hr-button'
import HrInput from './packages/hr-input';

export default {
  name: 'App',
  components: {
    hrButton,
    HrInput,
  },
  methods: {
    hrChange(val){
      console.log(val);
    }
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
