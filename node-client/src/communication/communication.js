import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const baseUrl = 'http://localhost:3000/';

export const httpGet = api => Vue.axios.get(baseUrl + api);

export const httpPost = (api, payload) => Vue.axios.post(baseUrl + api, payload);