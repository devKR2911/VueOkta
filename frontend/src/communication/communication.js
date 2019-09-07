import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const baseUrl = 'http://localhost:3000/';

export const httpGet = api =>
  Vue.axios.get(baseUrl + api).then(response => {
    return response.data;
  });

export const httpPost = (api, postParams) =>
  Vue.axios.post(baseUrl + api, postParams).then(response => {
    return response.data;
  });
