<template>
  <div class="hello">
    <webaudio-knob
      ref="knobRef"
      src="./assetsForWebAudioControls/knobs/Jambalaya.png"
      height="50"
      width="50"
      sprites="100"
      min="0"
      max="50"
      step="1"
      midilearn="true"
      value="0.5"
      id="/GuitarAmpSim60s/Bass"
    ></webaudio-knob>
    <div class="props">PROPS: msg= "{{ msg }}" val={{ val }}</div>
  </div>
</template>

<script>
import "../lib/webaudio-controls.js";

export default {
  name: "WebAudioKnob",
  props: {
    msg: String,
    val: Number,
    height: {
      type: Number,
      default: 50
    },
    width: {
      type: Number,
      default: 50
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    let self = this  // for inside the handlers
    this.$refs.knobRef.addEventListener('input', function (e) {
      self.$emit('changeKnobValue', e.target.value)
    });
  },
  watch: {
    val: function (newVal) {  // watch the prop 'val'
      this.$refs.knobRef.setValue(newVal)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.value {
  background-color: grey;
  color: white;
}
div.props {
  background-color: lightsalmon;
  color: black;
}
</style>
