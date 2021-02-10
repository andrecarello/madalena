export const defaultState = {};

export default {
	namespaced: true,

	state: defaultState,

	getters: {},

	actions: {
		reset({ commit }) {
			commit('reset');
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		}
	}
};
