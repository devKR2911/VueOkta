import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export function httpGet(url) {
    return Vue.axios.get(url);
}