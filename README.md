# webaudiocontrols inside a Vue 2 component
See HelloWorld.vue. Notice that the webaudiocontrols sprite sheets needs to be located in the public folder, not in the src folder. The build system will resolve automatically img src=./ but not with webaudio-knob, webaudio-switch etc. See source code (public dir with a subfolder for knobs, switches imgs), and look at HelloWorld.vue. In the src code, . means the public folder.

## New Features

![screenshot](doco/Screen%20Shot%202022-01-24%20at%2012.42.52%20pm.png)
- Added mounted handler and watchers so that webaudio controls affect vue state
  - 1st knob and can set keyboard note and vice versa
  - 2nd knob is independent
- Added vuex so that webaudio controls set and can respond to global state changes
  - 3rd knob, slider communicate via vuex global state, not local state
  - Regular buttons can set values of 0 or 50

Had to add `vue.config.js` to stop Module Error (from ./node_modules/eslint-loader/index.js): re `./src/lib/webaudio-controls.js`. Not sure this is the best fix but it worked.

```js
module.exports = {
    lintOnSave: false,
}
```

## Project setup
```
npm install
```
or
```
yarn
```

### Compiles and hot-reloads for development
```
npm run serve
Do it twice (the first time it will raise errors in the import of webaudiocontrols, ctrl-c then again npm run serve should be ok)
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## TODO

- Wrap each webaudio component properly so that each is in its own `.vue` file and has its own set of properties
