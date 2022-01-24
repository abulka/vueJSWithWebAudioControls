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
  mounted() {
    let self = this  // for inside the handlers

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

  },
  watch: {
    keyboardKey: function (newVal, oldVal) {
      console.log('keyboardKey changed from ' + oldVal + ' to ' + newVal)
      this.$refs.keyboardRef.setNote(false, oldVal)
      this.$refs.keyboardRef.setNote(true, newVal)
      this.$refs.knob1Ref.setValue(newVal)
    },
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
