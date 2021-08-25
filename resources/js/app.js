require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'
import {
    App as InertiaApp,
    plugin as InertiaPlugin
} from "@inertiajs/inertia-vue";
import { InertiaProgress } from '@inertiajs/progress';
import Vuetify from "vuetify";

Vue.mixin({ methods: { route } });
Vue.use(InertiaPlugin);
Vue.use(Vuetify);




new Vue({
    vuetify: new Vuetify(),
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => require(`./Pages/${name}`).default
            }
        })
}).$mount(app);

 InertiaProgress.init({ color: '#4B5563' });
