<template>
  <div class="hello">
    <webaudio-keyboard ref="keyboardRef" keys="25" id="mykeyboard"></webaudio-keyboard>

    <webaudio-knob
      ref="knob1Ref"
      src="./assetsForWebAudioControls/knobs/Jambalaya.png"
      height="50"
      width="50"
      sprites="100"
      min="0"
      max="24"
      step="1"
      midilearn="true"
      value="0.5"
      id="/GuitarAmpSim60s/Bass"
    ></webaudio-knob>
    <div class="value">{{ keyboardKey }}</div>

    <br />

    <webaudio-knob
      ref="knob2Ref"
      src="./assetsForWebAudioControls/knobs/greenish_sloped.png"
      midilearn="true"
      height="50"
      width="50"
      sprites="100"
      min="0"
      max="24"
      step="1"
      value="0"
      id="/BigMuff/Input"
      style="height: 50px"
    ></webaudio-knob>
    <div class="value">{{ knob2Value }}</div>

    <br />

    <webaudio-switch
      ref="switchRef"
      src="./assetsForWebAudioControls/switches/switch_1.png"
      midilearn="true"
      height="32"
      width="55"
      id="/BigMuff/bypass"
    ></webaudio-switch>
    <div class="value">{{ switchState }}</div>

    <h1>Global State</h1>

    <button @click="setGlobalTo(0)">set to 0</button>
    <button @click="setGlobalTo(50)">set to 50</button>

    <webaudio-knob
      ref="knobGlobalRef"
      src="./assetsForWebAudioControls/knobs/LittlePhatty.png"
      min="0"
      max="100"
      sprites="100"
    ></webaudio-knob>

    <webaudio-slider
      ref="sliderGlobalRef"
      id="sli2"
      src="./assetsForWebAudioControls/sliders/hsliderbody.png"
      knobsrc="./assetsForWebAudioControls/sliders/hsliderknob.png"
      width="300"
      height="30"
    ></webaudio-slider>

    <div class="value">{{ $store.state.knobValGlobal }}</div>
  </div>
</template>

<script>
import "../lib/webaudio-controls.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      keyboardKey: 0,
      knob2Value: 0,
      switchState: false,
    };
  },
  methods: {
    setGlobalTo(value) {
      this.$store.commit("setKnobValGlobal", value);
    },
  },
  mounted() {
    let self = this  // for inside the handlers

    console.log('this.$store.state.knobValGlobal', this.$store.state.knobValGlobal)
    this.$store.commit("setKnobValGlobal", 2);
    console.log('this.$store.state.knobValGlobal', this.$store.state.knobValGlobal)

    this.$refs.keyboardRef.addEventListener('change', function (e) {
      if (e.note[0]) {
        console.log("Note-On:" + e.note[1])
        self.keyboardKey = e.note[1]
      }
      else
        console.log("Note-Off:" + e.note[1])
    });
    this.$refs.knob1Ref.addEventListener('input', function (e) {
      self.keyboardKey = e.target.value
    });
    this.$refs.knob2Ref.addEventListener('input', function (e) {
      self.knob2Value = e.target.value
    });
    this.$refs.switchRef.addEventListener('change', function (e) {
      self.switchState = e.target.value ? true : false
    });
    this.$refs.knobGlobalRef.addEventListener('input', function (e) {
      self.$store.commit("setKnobValGlobal", e.target.value);
      console.log('knobGlobalRef', e.target.value)
    });
    this.$refs.sliderGlobalRef.addEventListener('input', function (e) {
      self.$store.commit("setKnobValGlobal", e.target.value);
      console.log('sliderGlobalRef', e.target.value)
    });
  },
  watch: {
    keyboardKey: function (newVal, oldVal) {
      console.log('keyboardKey changed from ' + oldVal + ' to ' + newVal)
      this.$refs.keyboardRef.setNote(false, oldVal)
      this.$refs.keyboardRef.setNote(true, newVal)
      this.$refs.knob1Ref.setValue(newVal)
    },
    '$store.state.knobValGlobal': function (newVal, oldVal) {
      console.log('global watch from', newVal, 'to', oldVal)
      this.$refs.knobGlobalRef.setValue(newVal)
      this.$refs.sliderGlobalRef.setValue(newVal)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div.value {
  color: darkcyan;
}
</style>
