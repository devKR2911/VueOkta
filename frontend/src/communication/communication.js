import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export const httpGet = api =>
  Vue.axios.get(api).then(response => {
    return response.data;
  });

export const httpPost = api =>
  Vue.axios.get(api).then(response => {
    return response.data;
  });
