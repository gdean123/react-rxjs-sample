import Rx from 'rxjs'

import {totalStream} from './total_stream';

const pokemonName = identifier => Rx.Observable.create(observer => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${identifier}`).then(function(response) {
        return response.json().then(function(json) {
            observer.next(json['forms'][0]['name']);
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }).catch(function(ex) {
        console.log('http request failed', ex)
    });
});

export default totalStream.flatMap(total => pokemonName(total));