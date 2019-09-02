import Vue from 'vue';

const CurrencyFilter = value => {
  if (!value) return '';
  return `$ ${value}`;
};

Vue.filter('toCurrency', CurrencyFilter);

export default CurrencyFilter;
