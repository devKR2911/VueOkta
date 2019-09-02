import BusinessTest from '@business/BusinessTest/BusinessTest.vue';
import colorChanger from '@directives/colorChanger';
import currency from '@filters/currency';
import data from '@mocks/test.json';

export default {
  name: 'Dashboard',
  directives: { colorChanger },
  filters: { currency },
  data() {
    return {
      id: '',
      pageName: 'Dashboard',
      styleData: 'color',
      dummyData: data,
    };
  },
  methods: {},
  watch: {},
  components: {
    BusinessTest,
  },
};
