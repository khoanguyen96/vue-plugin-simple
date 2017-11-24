import HelloWorld from './components/HelloWorld.vue';

const components = {
  HelloWorld,
};

Object.keys(components).forEach((name) => {
  // in browsers ~
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(name, components[name]);
  }
});

export default HelloWorld;