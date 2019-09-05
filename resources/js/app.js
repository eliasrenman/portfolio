import Vue from 'vue';
import App from './components/App.vue';
import vuescroll from 'vue-scroll';

Vue.use(vuescroll, {throttle: 600})

new Vue({
    render: (h) => h(App),
}).$mount('#app');