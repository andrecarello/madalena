export const defaultState = {
	recharges: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		recharges: (state) => state.recharges
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveRecharges({ commit }, value) {
			commit('setRecharges', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				if (key !== 'term') {
					state[key] = defaultState[key];
				}
			});
		},
		setRecharges(state, value) {
			state.recharges = value;
		}
	}
};
