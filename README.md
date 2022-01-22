# webaudio
See HelloWorld.vue. Notice that the webaudiocontrols sprite sheets needs to be located in the public folder, not in the src folder. The build system will resolve automatically img src=./ but not with webaudio-knob, webaudio-switch etc. See source code (public dir with a subfolder for knobs, switches imgs), and look at HelloWorld.vue. In the src code, . means the public folder.
## Project setup
```
npm install
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
