<template>
  <div id="app">
    <v-app>
    <ExampleComponent/>
    <IncrementButton/>
    </v-app>
  </div>
</template>

<script>
import ExampleComponent from './components/ExampleComponent.vue'
import IncrementButton from './components/IncrementButton.vue'

export default {
  name: 'App',
  components: {
    ExampleComponent,
    IncrementButton
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
