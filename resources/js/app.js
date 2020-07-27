import Vue from 'vue';
import App from './components/App.vue';
import vuescroll from 'vue-scroll';
window.domain_url= "https://eliasrenman.github.io/portfolio";  
Vue.use(vuescroll, {throttle: 600})

new Vue({
    render: (h) => h(App),
}).$mount('#app');