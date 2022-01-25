<template>
  <div id="app">
    <h2>Parent knob1Value is:</h2>
    <h1>{{ knob1Value }}</h1>
    <button @click="knob1Value = 0">set to 0</button>
    <button @click="knob1Value = 20">set to 20</button>
    <button @click="knob1Value = 50">set to 50</button>
    <br>

    <h2>knob component adjusting parent state</h2>
    <WebAudioKnobVue msg="boo" v-bind:val="knob1Value" @changeKnobValue="knob1Value = $event"></WebAudioKnobVue>
    <!-- <WebAudioKnobVue msg="boo" :val.sync="knob1Value"  @changeKnobValue="knob1Value = $event"></WebAudioKnobVue> -->
    
    <h2>knob component adjusting global knob state</h2>
    <WebAudioKnobVue msg="boo" v-bind:val="$store.state.keyboardKeyGlobal" @changeKnobValue="$store.commit('setKeyboardKeyGlobal', $event)"></WebAudioKnobVue>
    
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WebAudioKnobVue from './components/WebAudioKnob.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    WebAudioKnobVue
  },
  data() {
    return {
      knob1Value: 50,
    };
  },
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
