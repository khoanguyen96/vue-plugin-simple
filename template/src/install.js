import each from 'lodash/each';
import { components } from './main';

each(components, (component, name) => {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(name, components[name]);
  } else {
    Vue.component(name, component);
  }
});
