export const Masks = {
	/**
   * Remove os caracteres especiais da string deixando apenas os números
   *
   * @param {String} value
   */
	unset: function(value) {
		return value.replace(/\D/g, '');
	},

	/**
   * Adiciona a mascara de input do tipo numero
   *
   * @param {String} value
   */
	number: function(value) {
		let __regEx = value.replace(/\D/g, '').replace(/(.\d{3})\d+?$/, '$1');

		return __regEx;
	},

	/**
   * Adiciona a máscara de input do tipo telefone
   *
   * @param {String} value
   */
	msisdn: function(value) {
		let __regEx = value
			.replace(/\D/g, '')
			.replace(/(\d{2})(\d)/, '( $1 ) $2')
			.replace(/(\d{5})(\d)/, '$1.$2')
			.replace(/(\d{5}).(\d{4})\d+?$/, '$1.$2');

		return __regEx;
  },

  /**
   * Add pin mask
   *
   * @param {String} value
   */
  pin: function (value) {
		let __regEx = value
					.replace(/\D/g, '')
          .replace(/(\d{1})(\d)/, '$1     $2')
          .replace(/(\d{1})(\d)/, '$1     $2')
          .replace(/(\d{1})(\d)/, '$1     $2')
          .replace(/(\d{1})(\d)+?$/, '$1')

		return __regEx;
  },

	/**
   * Adiciona a máscara de input do tipo cartão de crédito
   *
   * @param {String} value
   */
	creditCard: function(value) {
		let __regEx = value
			.replace(/\D/g, '')
			.replace(/(\d{4})(\d)/, '$1 $2')
			.replace(/(\d{4})(\d)/, '$1 $2')
			.replace(/(\d{4})(\d)/, '$1 $2')
			.replace(/(.\d{4})\d+?$/, '$1');

		return __regEx;
	},

	/**
   * Adiciona a máscara de input do tipo cpf
   *
   * @param {String} value
   */
	cpf: function(value) {
		let __regEx = value
			.replace(/\D/g, '')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})/, '$1-$2')
			.replace(/(-\d{2})\d+?$/, '$1');

		return __regEx;
	},

	/**
   * Adiciona a máscara de input do tipo aniversario
   *
   * @param {String} value
   */
	birthday: function(value) {
		let __regEx = value
			.replace(/\D/g, '')
			.replace(/(\d{2})(\d)/, '$1 / $2')
			.replace(/(\d{2})(\d)/, '$1 / $2')
			.replace(/( \/ \d{4})\d+?$/, '$1');

		return __regEx;
	},

	/**
   * Adiciona a máscara de input do tipo cep
   *
   * @param {String} value
   */
	cep: function(value) {
		let __regEx = value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1 - $2').replace(/( - \d{3})\d+?$/, '$1');

		return __regEx;
	}
};
