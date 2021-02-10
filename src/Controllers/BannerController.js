import Controller from './Controller';

class BannerController extends Controller {
	getAll() {
		this.request('get', 'https://stage.cupomedia.com.br/api/services/6/banners').then(({ data }) => {
			this.dispatch('banner', 'banners', data);
		});
	}
}

export default BannerController;
