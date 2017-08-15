import Rx from 'rxjs'

export const PetRepository = {
    get: identifier => {
        return Rx.Observable
            .ajax({ url: `/pets/${identifier}`, method: 'GET' })
            .map(ajaxResponse => ajaxResponse.response);
    }
};