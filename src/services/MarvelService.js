class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=bf7a152fb52d1be51c5f46bf7dad913d';

    getResource = async (url) =>{
        let result = await fetch(url);

        if(!result.ok){
            throw new Error (`Could not feath ${url} , status : ${result.states}`)
        }
        return await result.json();
    }

    getAllCharacters = async () =>{
        const res = this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) =>{
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) =>{
        return {
            name: char.name,
            description : char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
        }
    }
}

export default MarvelService;