export const Toast = (type, content, config = {}) => {
	let base = {
		html: true || config.html,
		time: 5000 || config.time
	};


	const create = () => {
		const element = document.createElement('DIV');

		element.id = 'toast';
		element.className = 'toast';
		element.className = type;

		if (base.html) element.innerHTML = content;
		else element.innerText = content;

		return element;
	};

	const remove = (el) => el.remove();

	const init = () => {

		if (!document.querySelector('#toast')) {
			document.querySelector('#app').appendChild(create());

			const container = document.querySelector('#toast');


			setTimeout(() => container.classList.add('active'), 200);
			setTimeout(() => container.classList.remove('active'), base.time - 400);
			setTimeout(() => remove(container), base.time);
		}
	};

	init();
};
