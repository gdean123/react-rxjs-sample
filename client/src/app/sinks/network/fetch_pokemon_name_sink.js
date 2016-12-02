import {totalStream} from '../../streams/total_stream';
import {didReceivePokemonName} from '../../sources/network';

export default totalStream.subscribe(identifier => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${identifier}`).then(function(response) {
        return response.json().then(function(json) {
            didReceivePokemonName.next(json['forms'][0]['name']);
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }).catch(function(ex) {
        console.log('http request failed', ex)
    });
});