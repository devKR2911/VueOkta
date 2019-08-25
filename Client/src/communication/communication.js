import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const baseUrl = 'http://localhost:3000/';

export function httpGet(url) {
    return Vue.axios.get(baseUrl + url);
}