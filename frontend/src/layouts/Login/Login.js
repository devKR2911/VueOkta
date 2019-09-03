import BusinessTest from '@business/BusinessTest/BusinessTest.vue';
import colorChanger from '@directives/colorChanger';
import currency from '@filters/currency';
import data from '@mocks/test.json';
import loginHelper from './Login.helper';

export default {
  name: 'Dashboard',
  directives: {
    colorChanger,
  },
  filters: {
    currency,
  },
  data() {
    return {
      id: '',
      pageName: 'Dashboard',
      styleData: 'color',
      dummyData: data,
      password: '',
      username: '',
    };
  },
  methods: {
    loginUser() {
      loginHelper.login().then(res => {
        this.getUserList(res);
      });
    },
    getUserList(res) {
      console.log(res);
    },
  },
  watch: {},
  components: {
    BusinessTest,
  },
};
