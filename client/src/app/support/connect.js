import React from 'react';
import _ from 'lodash'
import {combineLatestObject} from '../operators/combine_latest_object'

const createStatefulComponent = (StatelessComponent, requiresState, getInitialState, currentStateStream, actions) => {
    return class extends React.Component {
        constructor(properties) {
            super(properties);
            this.state = getInitialState();
            this.properties = properties
        }

        componentDidMount() {
            this.subscription = currentStateStream.subscribe(valueMap => {
                this.setState(valueMap)
            });
        }

        componentWillUnmount() {
            this.subscription.unsubscribe();
        }

        render() {
            if (requiresState && this.state === null) {
                return null
            } else {
                return (
                    <StatelessComponent {...this.properties} {...this.state} {...actions}/>
                );
            }
        }
    };
};

const storeInitialState = (currentStateStream) => {
    let initialState = null;
    currentStateStream.subscribe(valueMap => initialState = valueMap);

    return () => initialState;
};

const createActions = (actionMap) => (
    _.mapValues(actionMap, (stream) => (
        (value) => stream.next(value)
    ))
);

export const connect = (StatelessComponent, stateMap, actionMap) => {
    const currentStateStream = combineLatestObject(stateMap);
    const getInitialState = storeInitialState(currentStateStream);
    const actions = createActions(actionMap);
    const requiresState = !_.isEmpty(stateMap);

    return createStatefulComponent(StatelessComponent, requiresState, getInitialState, currentStateStream, actions)
};