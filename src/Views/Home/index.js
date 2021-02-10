//core
import { mapGetters } from 'vuex';
import { hash } from '@/Helpers/Misc';

// components
import Header from '@/Components/Header/Default/index.vue';
import SafeTransaction from '@/Components/SafeTransaction/index.vue';
import Banners from '@/Components/Banners/Default/index.vue';

export default {
	name: 'Home',

	data() {
		return {
			limit: 35,
			token: ''
		};
	},

	mounted() {
		_.controller('recharge').getAll();
		_.controller('banner').getAll();
	},

	components: {
		'oston-header': Header,
		'oston-safe-transaction': SafeTransaction,
		'oston-banners': Banners
	},

	computed: mapGetters({
		recharges: 'RechargeModel/recharges',
		banners: 'BannerModel/banners'
	}),

	methods: {
		setToken: function() {
			const _hash = hash(120);

			// _.controller('auth').login({
			// 	urlToken: _hash
			// });
			this.$router.push({ name: 'CheckoutPhone', params: { token: _hash } });
		}
	}
};
