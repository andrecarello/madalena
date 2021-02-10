import Vue from 'vue';
import VueRouter from 'vue-router';
import { PROJECT_NAME } from '@/config/Settings';

// -> import views
import ViewController from '@/Controllers/ViewController';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: ViewController.load('Home'),
		meta: {
			KeepAlive: true, // Need to be cached?
			requiresAuth: false // Need to be logged
		}
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: ViewController.load('Checkout'),
    // redirect: 'checkout/telefone/:token?',
    children: [
      {
        name: 'CheckoutPhone',
        path: 'telefone/:token?',
        component: ViewController.load('Checkout/Phone')
      }
    ]
  }

	// FIX THIS USING ROUTERVIEW
	// {
	// 	path: '/login',
	// 	name: 'Auth',
	// 	component: ViewController.load('Auth'),
	// 	meta: {
	// 		KeepAlive: false, // Need to be cached?
	// 		requiresAuth: false
	// 	}
	// },
	// {
	// 	name: 'AuthMethod',
	// 	path: '/login/metodo',
	// 	component: ViewController.load('Auth/Method'),
	// 	meta: {
	// 		KeepAlive: false, // Need to be cached?
	// 		requiresAuth: false
	// 	}
	// },
	// {
	// 	name: 'AuthPin',
	// 	path: '/login/pin/:token',
	// 	component: ViewController.load('Auth/Pin'),
	// 	meta: {
	// 		KeepAlive: false, // Need to be cached?
	// 		requiresAuth: false
	// 	}
	// }
];

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: '_is:active',
	linkExactActiveClass: '_is:exact-active',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const { token } = _.model('auth');

	document.title = PROJECT_NAME;

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!token) {
			next({ name: 'Auth' });
		} else {
			next();
		}
	} else {
		next(); // make sure to always call next()!
	}
});

export default router;
