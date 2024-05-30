<template>
  <div class="buttonArea">
    <v-btn depressed v-on:click="increment">You clicked me {{count}} times.</v-btn>
  </div>
</template>

<script>
export default {
  name: 'IncrementButton',
  data: function(){
    return {
    count: 0
    }
  },
  methods: {
    increment: function(){
      this.count++
    },
  }
}
</script>

<style scoped>


</style>
