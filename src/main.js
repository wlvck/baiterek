import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import store from './store/index';

import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import directives from '@/directives';
import components from '@/components/';

const app = createApp(App);

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

app.component('DatePicker', Datepicker);

import Maska from 'maska';

components.forEach(component => {
  // console.log(component);
  app.component(component.name, component);
});
// directives.forEach(directive => {
//   app.directive(directive.name, directive);
// });

app.use(Maska).use(router).use(store).use(vuetify).use(loadFonts);
app.mount('#app');
