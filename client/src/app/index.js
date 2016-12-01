import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.didClickIncrementStream = new Rx.Subject();
        this.didClickDecrementStream = new Rx.Subject();

        this.state = {total: 0};
    }

    componentDidMount() {
        const incrementStream = this.didClickIncrementStream.mapTo(1);
        const decrementStream = this.didClickDecrementStream.mapTo(-1);

        this.subscription = Rx.Observable.merge(incrementStream, decrementStream)
            .scan((accumulator, currentValue) => accumulator + currentValue, 0)
            .subscribe(total => {
                this.setState({total})
            });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                <button onClick={() => this.didClickIncrementStream.next()}>Increment</button>
                <button onClick={() => this.didClickDecrementStream.next()}>Decrement</button>
                <p>{this.state.total}</p>
            </div>
        )
    }
}

const App = () => (
    <Counter/>
);

ReactDOM.render(<App/>, document.getElementById('app'));