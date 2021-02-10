window._ = require('lodash');

import Vue from 'vue';
import App from '@/App.vue';
import Router from '@/Router';
import Store from '@/Store';

// config
Vue.config.productionTip = false;

// controllers
import { _CONTROLLER } from '@/bootstrap';
_.controller = _CONTROLLER;
_.controllers = [];

const files = require.context('@/Controllers/', true, /\.js$/i);
files.keys().map((key) => {
	const name = key.split('/').pop().split('.')[0];
	_.controllers.push(name);
});

// project exclusive imports
import VueFormulate from '@braid/vue-formulate';
import { pt } from '@braid/vue-formulate-i18n';

// global components
import Layout from '@/Layout/index.vue';
import Image from '@/Components/Image/index.vue';
import InterseptedImage from '@/Components/Image/Intersepted/index.vue';
import Container from '@/Components/Container/index.vue';

// settings
import Settings, { ANONYMOUS, INTERACTIONS, ANALYTICS } from '@/config/Settings';
if (!localStorage.getItem(ANONYMOUS)) {
	Settings.anonymous();
}
if (INTERACTIONS) {
	Settings.interactions();
}
if (ANALYTICS) {
	Settings.analytics();
}

// uses
Vue.use(VueFormulate, {
	useInputDecorators: false,
	plugins: [ pt ]
});

// components
Vue.component('oston-layout', Layout);
Vue.component('oston-container', Container);
Vue.component('oston-image', Image);
Vue.component('oston-intersepted-image', InterseptedImage);

new Vue({
	router: Router,
	store: Store,
	render: (h) => h(App)
}).$mount('#app');
