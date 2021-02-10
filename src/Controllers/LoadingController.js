import Controller from './Controller';

class LoadingController extends Controller {
	set(state, value = '') {
		let key = state;

		if (typeof state === 'boolean') this.dispatch('loading', 'loading', state);
		else this.dispatch('loading', 'loading' + _.capitalize(key), value);
	}
}

export default LoadingController;
