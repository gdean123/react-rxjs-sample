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

    it('shows the selected pet initially', () => {
        expect(applicationComponent.selectedPetIsShown()).toBeTruthy();
    });

    it('shows the hide button initially', () => {
        expect(showHideToggle.buttonLabel()).toEqual('Hide');
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