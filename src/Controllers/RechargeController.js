import Controller from './Controller';
import Recharges from '../Recharges';

class RechargeController extends Controller {

  _model = 'recharge';

  getAll() {
    this.dispatch(this._model, 'recharges', Recharges);
  }
}

export default RechargeController;
