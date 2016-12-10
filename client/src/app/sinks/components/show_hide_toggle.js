import React from 'react';

export class ShowHideToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'Hide'
        }
    }

    componentDidMount() {
        this.subscription = this.props.visibilityToggleLabelStream.subscribe(label => this.setState({label}));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <button onClick={() => this.props.toggleVisibilityStream.next()}>{this.state.label}</button>
        )
    }
}