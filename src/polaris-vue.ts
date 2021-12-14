import _Vue from 'vue';
import {
  Checkbox,
  Choice,
  InlineError,
  VisuallyHidden,
  Icon,
  UnstyledLink,
  Link,
  List,
  ListItem,
} from './components';

const components = [
  Checkbox,
  Choice,
  InlineError,
  VisuallyHidden,
  Icon,
  UnstyledLink,
  Link,
  List,
  ListItem,
];

const PolarisVue = {
  name: 'PolarisVue',
  install(Vue: typeof _Vue) {
    // Define each component to the whole package
    components.forEach((c) => {
      Vue.component(c.name, c);
    });
  },
};

// Export all
export default PolarisVue;

// Export single component
export {
  Checkbox,
  Choice,
  InlineError,
  VisuallyHidden,
  Icon,
  UnstyledLink,
  Link,
  List,
  ListItem,
};
