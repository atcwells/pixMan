/*
    Libraries
 */
import Vue from './lib/vue.esm.browser.js';
import Vuex from './lib/vuex.esm.browser.js';
import VueRouter from './lib/vue-router.esm.browser.js';
import store from './lib/Store.js';
/*
    Components
 */
import LoginForm from './Components/LoginForm/LoginForm.js';

/*
    Bootstrap
 */
Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    store,
    components: {LoginForm}
});
