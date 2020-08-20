export default class GotService {
	constructor() {
		this._apiBase = 'https://anapioficeandfire.com/api/characters';
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch: ${url}, status: ${res.status}`);
		}
		return res.json();
	};

	getAllCharacters() {
		return this.getResource('/?page=5')
	}

	getCharacter(id) {
		return this.getResource(`/${id}`)
	}
}
