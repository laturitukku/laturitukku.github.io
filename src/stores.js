import { writable } from 'svelte/store';


function navPages() {
	const { subscribe, set} = writable('tuotteet');

	return {
		subscribe,
		tuotteet: () => set('tuotteet'),
		ostoskori: () => set('ostoskori'),
		tietoa: () => set('tietoa')
	};
}
export const page = navPages();

export const current ={
	page: 'tuotteet',
  }

export const user = writable({
  name: "Tiago Vilas Boas",
  phone: "11 972393003",
  email: "tcarvalhovb@gmail.com"
})



