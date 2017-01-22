import React from 'react';

export const connect = (StatelessComponent, componentName, stateStream) => {
    return class extends React.Component {
        componentDidMount() {
            this.subscription = stateStream.subscribe(state => {
                console.log("Component " + componentName + " receiving state: " + JSON.stringify(state));
                this.setState(state)
            });
        }

        componentWillUnmount() {
            this.subscription.unsubscribe();
        }

        render() {
            console.log("Rendering component " + componentName + " with props " + JSON.stringify(this.props.keys) + " and state " + JSON.stringify(this.state))
            return (
                <StatelessComponent {...this.props} {...this.state} />
            )
        }
    };
};