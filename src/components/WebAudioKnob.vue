<template>
  <div class="hello">
    <webaudio-knob
      ref="knobRef"
      src="./assetsForWebAudioControls/knobs/Jambalaya.png"
      height="50"
      width="50"
      sprites="100"
      :min="min"
      :max="max"
      :step="step"
      midilearn="true"
      :value="val"
      id="/GuitarAmpSim60s/Bass"
    ></webaudio-knob>

    <div
      class="props"
    >PROPS: msg= "{{ msg }}" val={{ val }} step={{ step }} min={{ min }} max={{ max }}</div>
  </div>
</template>

<script>
import "../lib/webaudio-controls.js";

export default {
  name: "WebAudioKnob",
  props: {
    msg: String,
    val: Number,
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
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
      self.$emit('update:val', e.target.value)
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
