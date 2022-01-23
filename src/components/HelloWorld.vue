<template>
  <div class="hello">
    <webaudio-keyboard ref="keyboardRef" keys="25" id="mykeyboard"></webaudio-keyboard>
    {{ keyboardKey }}
    <br />
    <webaudio-knob
      src="./assetsForWebAudioControls/knobs/greenish_sloped.png"
      midilearn="true"
      height="50"
      width="50"
      sprites="100"
      min="-24"
      max="12"
      step="0.1"
      value="0"
      id="/BigMuff/Input"
      style="height: 50px"
    ></webaudio-knob>
    <webaudio-knob
      src="./assetsForWebAudioControls/knobs/Jambalaya.png"
      height="50"
      width="50"
      sprites="100"
      min="0"
      max="1"
      step="0.01"
      midilearn="true"
      value="0.5"
      id="/GuitarAmpSim60s/Bass"
    ></webaudio-knob>
    <br />
    <webaudio-switch
      src="./assetsForWebAudioControls/switches/switch_1.png"
      midilearn="true"
      height="32"
      width="55"
      id="/BigMuff/bypass"
    ></webaudio-switch>
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
      knob1Value: 0,
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

  },
  watch: {
    keyboardKey: function (newVal, oldVal) {
      console.log('keyboardKey changed from ' + oldVal + ' to ' + newVal)
      this.$refs.keyboardRef.setNote(true, newVal)
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
</style>
