// core
import { Masks } from '@/Helpers/Mask';
import { validateMsisdn } from '@/Helpers/Msisdn';
import { Toast as toast } from '@/Helpers/Toast';

export default {
	name: 'CheckoutPhone',

	data() {
		return {
			Masks,

			form: {
				msisdn: ''
			},

			errors: {
				msisdn: false
			}
		};
	},

	methods: {
		submit: function() {},

		validate: function(type, value) {
			const val = Masks.unset(value);

			if (!val) return;

			if (type === 'msisdn') {
				this.errors.msisdn = val.length > 10 ? !validateMsisdn(val).status : false;
			}
		}
	}
};
