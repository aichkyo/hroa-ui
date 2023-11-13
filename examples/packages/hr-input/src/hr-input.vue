<template>
  <div>
    <input :type="type" :value="value" @change="change" >
  </div>
</template>

<script>
export default {
  name: 'hr-button',
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
      this.$emit('change', value)
    }
  }
}
</script>

<style>

</style>