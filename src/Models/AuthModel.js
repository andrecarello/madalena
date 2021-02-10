export const defaultState = {
	msisdn: '',
	cpf: '',
	pin: '',
	token: '',
	urlToken: '',
	method: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		msisdn: (state) => state.msisdn,
		cpf: (state) => state.cpf,
		pin: (state) => state.pin,
		token: (state) => state.token,
		urlToken: (state) => state.urlToken,
		method: (state) => state.method
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveMsisdn({ commit }, value) {
			commit('setMsisdn', value);
		},
		saveCpf({ commit }, value) {
			commit('setCpf', value);
		},
		savepin({ commit }, value) {
			commit('setPin', value);
		},
		saveToken({ commit }, value) {
			commit('setToken', value);
		},
		saveUrlToken({ commit }, value) {
			commit('setUrlToken', value);
		},
		saveMethod({ commit }, value) {
			commit('setMethod', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setMsisdn(state, value) {
			state.msisdn = value;
		},
		setCpf(state, value) {
			state.cpf = value;
		},
		setPin(state, value) {
			state.pin = value;
		},
		setToken(state, value) {
			state.token = value;
		},
		setUrlToken(state, value) {
			state.urlToken = value;
		},
		setMethod(state, value) {
			state.method = value;
		}
	}
};
