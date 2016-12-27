import React from 'react';

export const connect = (StatelessComponent, stateStream) => {
    return class extends React.Component {
        componentDidMount() {
            this.subscription = stateStream.subscribe(state => this.setState(state));
        }

        componentWillUnmount() {
            this.subscription.unsubscribe();
        }

        render() {
            return (
                <StatelessComponent {...this.props} {...this.state} />
            )
        }
    };
};