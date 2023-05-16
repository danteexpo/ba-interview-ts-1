import './style.css';
import { Data, User } from './types';

(() => {
	let randomUsers: User[] = [];
	const myList = document.querySelector<HTMLButtonElement>('#list')!;
	const myButton = document.querySelector<HTMLButtonElement>('#fetch')!;

	const getData = async () => {
		try {
			const res = await fetch('https://randomuser.me/api/');
			const data: Data = await res.json();
			randomUsers.push(data.results[0]);
			myList.innerHTML = randomUsers
				.map(
					(user) =>
						`<li><img src=${user.picture.thumbnail} alt='' /><p>${user.name.first} ${user.name.last}</p></li>`
				)
				.join('');
		} catch (error) {
			console.error(error);
		}
	};

	myButton.addEventListener('click', () => getData());
})();
