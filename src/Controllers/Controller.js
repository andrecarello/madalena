import store from '../Store';
import axios from 'axios';

/**
 * In all cases prefer use camelcase
 *
 * PRIVATE FUNCTIONS USE _{NAME}
 * PRIVATE CONST/LET USE _{NAME}
 *
 * GLOBAL FUNCTIONS OR VARS USE {NAME}
 *
 */
class Controller {
	constructor() {
		self.store = this.store = store;
		self.state = this.state = store.state;
  }

  baseUrl = 'https://dev.recarga.oston.io/api/';

	request(method, url, data) {
		if (method === 'get') return axios.get(url);
		else if (method === 'post') return axios.post(url, data);
		else if (method === 'delete') return axios.delete(url, data);
	}

	_dispatch(model, key, value) {
    if (key === 'reset') {
      this.store.dispatch(_.upperFirst(model) + 'Model/' + key);
    } else {
      this.store.dispatch(_.upperFirst(model) + 'Model/save' + _.upperFirst(key), value);
    }
	}

	dispatch(model, key, value = null) {
		if (typeof key === 'object' && value === null) {
			const obj = key;
			Object.keys(obj).map((k) => this._dispatch(model, k, obj[k]));
		} else {
			this._dispatch(model, key, value);
		}
	}
}

export default Controller;
