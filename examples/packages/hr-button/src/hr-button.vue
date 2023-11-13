<!--
 * @Author       : HR-OA-KTS 黄强 670604@ky-tech.com.cn
 * @Date         : 2023-11-07 16:47:16
 * @Description  : 
-->
<template>
  <div class="hr-button">
    <button class="button"
            @click="handleBtnClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>

  export default {
    name: "hr-button",
    props: {},
    data () {
      return {

      }
    },
    methods: {
      handleBtnClick () {
        console.log('别看我长得丑，我有内涵的');
      }
    }
  }
</script>

<style scoped>
  .button {
    padding: 6px 10px;
  }
</style>