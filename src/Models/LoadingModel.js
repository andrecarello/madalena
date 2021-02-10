export const defaultState = {
	loading: false,
	loadingReading: false
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		loading: (state) => state.loading,
		loadingReading: (state) => state.loadingReading
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveLoading({ commit }, value) {
			commit('setLoading', value);
		},
		saveLoadingReading({ commit }, value) {
			commit('setLoadingReading', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setLoading(state, value) {
			state.loading = value;
		},
		setLoadingReading(state, value) {
			state.loadingReading = value;
		}
	}
};
