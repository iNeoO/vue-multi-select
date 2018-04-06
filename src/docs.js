import Vue from 'vue';
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.min.css';
import 'spectre.css/dist/spectre-exp.min.css';
import App from './app';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
