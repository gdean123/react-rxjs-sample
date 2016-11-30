import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs'

const incrementStream = new Rx.BehaviorSubject();
const decrementStream = new Rx.BehaviorSubject();

incrementStream.next(1);
decrementStream.next(-1);

const Counter = ({total, incrementStream, decrementStream}) => (
    <div>
        <button onClick={() => incrementStream.next(1) }>Increment</button>
        <button onClick={() => decrementStream.next(-1) }>Decrement</button>
        <p>{total}</p>
    </div>

);

const App = ({total, incrementStream, decrementStream}) => (
    <Counter total={total}
             incrementStream={incrementStream}
             decrementStream={decrementStream}/>
);

Rx.Observable.merge(incrementStream, decrementStream)
    .scan((accumulator, currentValue) => accumulator + currentValue, 0)
    .subscribe(total => {
        ReactDOM.render(<App {...{total, incrementStream, decrementStream}}/>, document.getElementById('app'));
    });