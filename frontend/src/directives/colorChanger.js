import Vue from 'vue';

const colorChanger = {
  bind(el, binding) {
    /* eslint-disable no-param-reassign */
    el.style[binding.arg] = binding.value.color;
    el.style['font-weight'] = binding.value.weight;
  },
};

Vue.directive('colorChange', colorChanger);

export default colorChanger;
