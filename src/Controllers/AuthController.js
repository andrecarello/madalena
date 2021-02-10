import axios from 'axios';

// -> import default controller
import Controller from './Controller';

import { hash } from '@/Helpers/Misc';

class AuthController extends Controller {
	// set constants
	_model = 'auth';
	_loading = 'loading';

  setToken() {
    this.dispatch(this._model, 'token', hash(180))
  }
}

export default AuthController;
