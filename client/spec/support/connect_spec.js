import React from 'react';
import Rx from 'rxjs'
import {mount} from 'enzyme';

import {connect} from '../../src/app/support/connect';

describe('connect', () => {
    describe('receiving stream values', () => {
        let StatefulComponent, favoriteColorStream;

        beforeEach(() => {
            favoriteColorStream = new Rx.Subject();

            const StatelessComponent = ({favoriteColor}) => (
                <div>{favoriteColor}</div>
            );

            StatefulComponent = connect(StatelessComponent,
                {favoriteColor: favoriteColorStream}
            );
        });

        it('re-renders stateless components when values are emitted on a dependent stream', () => {
            const mountedComponent = mount(<StatefulComponent/>);
            favoriteColorStream.next('blue');
            expect(mountedComponent.text()).toEqual('blue');
        });

        it('sets the initial state of components when they are mounted after a value has been emitted', () => {
            favoriteColorStream.next('red');
            const mountedComponent = mount(<StatefulComponent/>);
            expect(mountedComponent.text()).toEqual('red');
        });
    });

    describe('receiving property values', () => {
        let StatefulComponent;

        beforeEach(() => {
            const StatelessComponent = ({favoriteCity}) => (
                <div>{favoriteCity}</div>
            );

            StatefulComponent = connect(StatelessComponent);
        });

        it('passes through properties', () => {
            const mountedComponent = mount(<StatefulComponent favoriteCity="Santa Monica"/>);
            expect(mountedComponent.text()).toEqual('Santa Monica');
        });
    });

    describe('taking actions', () => {
        let StatefulComponent, didChangeFavoriteColorStream;

        beforeEach(() => {
            didChangeFavoriteColorStream = new Rx.Subject();

            const StatelessComponent = ({didChangeFavoriteColor}) => (
                <button onClick={didChangeFavoriteColor('violet')}/>
            );

            StatefulComponent = connect(StatelessComponent, {},
                {didChangeFavoriteColor: didChangeFavoriteColorStream}
            );
        });

        it('presents actions to the component as easy to use callbacks', () => {
            let receivedFavoriteColor = 'unknown';
            didChangeFavoriteColorStream.subscribe(newFavoriteColor => {
                receivedFavoriteColor = newFavoriteColor;
            });

            const mountedComponent = mount(<StatefulComponent/>);
            mountedComponent.find('button').simulate('click');
            expect(receivedFavoriteColor).toEqual('violet');
        });
    });

    describe('initial rendering', () => {
        describe('when the component has dependent streams', () => {
            let StatefulComponent, favoriteColorStream, favoriteCityStream;

            beforeEach(() => {
                favoriteColorStream = new Rx.Subject();
                favoriteCityStream = new Rx.Subject();

                const StatelessComponent = ({favoriteColor, favoriteCity}) => (
                    <div>
                        <span>Rendered!</span>
                        <div>{favoriteColor}</div>
                        <div>{favoriteCity}</div>
                    </div>
                );

                StatefulComponent = connect(StatelessComponent, {
                    favoriteColor: favoriteColorStream,
                    favoriteCity: favoriteCityStream
                });
            });

            it('does not render the component until all dependent streams have emitted', () => {
                const mountedComponent = mount(<StatefulComponent/>);
                expect(mountedComponent.html()).toEqual(null);

                favoriteColorStream.next('red');
                expect(mountedComponent.html()).toEqual(null);

                favoriteCityStream.next('Santa Monica');
                expect(mountedComponent.text()).toContain('Rendered!');
            });
        });

        describe('when the component does not have dependent streams', () => {
            let StatefulComponent;

            beforeEach(() => {
                const StatelessComponent = () => (
                    <span>Rendered!</span>
                );

                StatefulComponent = connect(StatelessComponent);
            });


            it('renders the component immediately when the state map is {}', () => {
                const mountedComponent = mount(<StatefulComponent/>, {});
                expect(mountedComponent.text()).toContain('Rendered!');
            });

            it('renders the component immediately when the state map is undefined', () => {
                const mountedComponent = mount(<StatefulComponent/>);
                expect(mountedComponent.text()).toContain('Rendered!');
            });
        });
    });
});