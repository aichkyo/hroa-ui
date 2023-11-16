<template>
  <div>
    <span>label</span>
    <input :type="type" :value="value" @change="change" :class="['hroa-input',type]" >
  </div>
</template>

<script>
export default {
  name: 'hr-input',
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    change(e){
      const value = e.target.value
      console.log('源文件')
      this.$emit('change', value)
    }
  }
}
</script>

<style >
.hroa-input{
  border: 1px solid #7d55fe;
}
</style>