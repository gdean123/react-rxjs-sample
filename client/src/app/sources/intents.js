import Rx from 'rxjs'

export const createNextStream = () => new Rx.Subject();
export const createPreviousStream = () => new Rx.Subject();
export const createToggleVisibilityStream = () => new Rx.Subject();