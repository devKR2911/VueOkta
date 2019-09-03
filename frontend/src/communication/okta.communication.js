import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const baseUrl = 'https://dev-623833.oktapreview.com/api/v1/authn';

export const httpGetOkta = api => Vue.axios.get(api);

export const httpPostOkta = (api, params) => Vue.axios.post(baseUrl, params);
