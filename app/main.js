import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store/index.js';

Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
    el: '#app',
    render(h){
        return h(App);
    },
    store: new Vuex.Store(store)
});