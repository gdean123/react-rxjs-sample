import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.incrementStream = new Rx.BehaviorSubject();
        this.decrementStream = new Rx.BehaviorSubject();

        this.state = {total: 0};
    }

    componentDidMount() {
        this.incrementStream.next(1);
        this.decrementStream.next(-1);

        this.subscription = Rx.Observable.merge(this.incrementStream, this.decrementStream)
            .scan((accumulator, currentValue) => accumulator + currentValue, 0)
            .subscribe(total => {
                this.setState({total})
            });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        const {total} = this.state;

        return (
            <div>
                <button onClick={() => this.incrementStream.next(1) }>Increment</button>
                <button onClick={() => this.decrementStream.next(-1) }>Decrement</button>
                <p>{total}</p>
            </div>
        )
    }
}

const App = () => (
    <Counter/>
);

ReactDOM.render(<App/>, document.getElementById('app'));