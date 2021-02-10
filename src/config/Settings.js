import Anonymous from '@/Helpers/Anonymous';
import Interactions from '@/Helpers/Interactions';
import Analytics from '@/Helpers/Analytics'

export const PROJECT_NAME = 'OI Conhecimento e Negócios';
export const PROJECT_SLUG_NAME = 'oi-conhecimento-e-negocios';
export const REFERER = 'OI_CONHECIMENTO_E_NEGOCIOS';
export const CLIENT_NAME = 'OI';
export const ANONYMOUS = 'uuid';
export const INTERACTIONS = false;
export const ANALYTICS = false;
export const TEST_EMAIL = '';
export const TEST_PASSWORD = '1808';
export const CLIENT_EMAIL_SUPPORT = '';

export const PROTOCOL = document.location.protocol;

export const CLUSTERS = {
	pre: 1,
	recarga: 2,
	controle: 3,
	exclusivo: 4
};

export default {
	title: (page = '') => {
		if (page) document.title = `${page} | ${PROJECT_NAME}`;
		else document.title = PROJECT_NAME;
	},

	anonymous: () => {
		if (!localStorage.getItem(ANONYMOUS)) return Anonymous.init();

		return null;
	},

	interactions: (schema) => {
		if (INTERACTIONS) return Interactions.init({ schema: schema });

		return null;
  },

  analytics: () => {
    if (ANALYTICS) return Analytics.init();
  }
};
