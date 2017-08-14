import React from 'react';

import {createApplication} from '../../src/app/factories/application';
import {renderShowHideToggle} from '../components/show_hide_toggle';
import {renderApplication} from '../components/application';

describe('showing and hiding the selected pet', () => {
    let application, showHideToggle, applicationComponent;

    beforeEach(() => {
        application = createApplication();

        showHideToggle = renderShowHideToggle(application.components.showHideToggle);
        applicationComponent = renderApplication(application.components.application);
    });

    it('hides the selected pet initially', () => {
        expect(applicationComponent.selectedPetIsShown()).toBe(false);
    });

    it('shows the hide button', () => {
        expect(showHideToggle.buttonLabel()).toEqual('Hide');
    });

    describe('when the request for the selected pet completes', () => {
        beforeEach(() => {
            application.sources.didReceivePet.next({name: 'Pillowfight', disposition: 'Sleepy'});
        });

        it('shows the selected pet', () => {
            expect(applicationComponent.selectedPetIsShown()).toBe(true);
        });

        describe('clicking the toggle', () => {
            it('toggles the button name', () => {
                showHideToggle.toggleVisibility();
                expect(showHideToggle.buttonLabel()).toEqual('Show');

                showHideToggle.toggleVisibility();
                expect(showHideToggle.buttonLabel()).toEqual('Hide');
            });

            it('toggles the visibility of the selected pet', () => {
                showHideToggle.toggleVisibility();
                expect(applicationComponent.selectedPetIsShown()).toBeFalsy();

                showHideToggle.toggleVisibility();
                expect(applicationComponent.selectedPetIsShown()).toBeTruthy();
            });
        });
    });
});