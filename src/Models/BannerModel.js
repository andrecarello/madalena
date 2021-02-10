export const defaultState = {
	banners: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		banners: (state) => state.banners
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveBanners({ commit }, value) {
			commit('setBanners', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setBanners(state, value) {
			state.banners = value;
		}
	}
};
