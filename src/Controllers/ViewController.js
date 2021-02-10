class ViewController {
	static load(file) {
		return () => import(/* webpackChunkName: "[request]" */ '@/Views/' + file + '/index.vue');
	}

	// static component(file) {
	// 	return () => import(/* webpackChunkName: "[request]" */ '@/Views/_Components/' + file + '/index.vue');
	// }
}

export default ViewController;
