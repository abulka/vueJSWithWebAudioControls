<template>
  <div id="app">
    <h2>Parent Component</h2>
    <p>knob1Value is: {{ knob1Value }}</p>
    <button @click="knob1Value = 0">set to 0</button>
    <button @click="knob1Value = 20">set to 20</button>
    <button @click="knob1Value = 50">set to 50</button>
    <br />

    <h2>Child Component WebAudioKnobVue</h2>
    <p>knob adjusts parent state ⬆️</p>
    <WebAudioKnobVue msg="boo" :val.sync="knob1Value" :step=10 :max=50></WebAudioKnobVue>

    <h2>Child Component WebAudioKnobVue</h2>
    <p>knob component adjusting global knob state ⤵️</p>
    <WebAudioKnobVue msg="boo" :val.sync="knobValGlobal"></WebAudioKnobVue>

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
      knob1Value: 15,
    };
  },
  computed: {
    knobValGlobal: {
      get() {
        return this.$store.state.knobValGlobal
      },
      set(value) {
        // need a setter method to support :val.sync="knobValGlobal" usage, since more complex to set global state
        this.$store.commit('setKnobValGlobal', value)
      }
    }
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
