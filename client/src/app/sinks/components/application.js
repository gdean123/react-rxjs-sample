import React from 'react';

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedPetIsVisible: true};
    }

    componentDidMount() {
        this.subscription = this.props.selectedPetVisibilityStream.subscribe(selectedPetIsVisible => this.setState({selectedPetIsVisible}));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return (
            <div>
                {this.props.petSelector}
                {this.props.showHideToggle}
                {this.state.selectedPetIsVisible && this.props.selectedPet}
            </div>
        )
    }
}