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

	async getAllCharacters() {
		const res = await this.getResource('/?page=5')
		return res.map(this._transformCharacter);
	}

	async getCharacter(id) {
		const character = await this.getResource(`/${id}`);
		const res = await this._transformCharacter(character);
		return res;
	}

	_transformCharacter(char){
		const name = char.name ? char.name : 'unknown name';
		const gender = char.gender ? char.gender : 'unknown gender';
		const born = char.born ? char.born : 'unknown born';
		const died = char.died ? char.died : 'unknown died';
		const culture = char.culture ? char.culture : 'unknown culture';
		const url = char.url;

		return {
			name: name,
			gender: gender,
			born: born,
			died: died,
			culture: culture,
			url: url
		};
	}
}
