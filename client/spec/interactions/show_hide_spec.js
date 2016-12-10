import React from 'react';

import {createApplication} from '../../src/app/factories/application';
import {renderShowHideToggle} from '../components/show_hide_toggle';
import {renderApplication} from '../components/application';

describe('clicking the toggle', () => {
    let application, showHideToggle, applicationComponent;

    beforeEach(() => {
        application = createApplication();

        showHideToggle = renderShowHideToggle(application.components.showHideToggle);
        applicationComponent = renderApplication(application.components.application);
    });

    it('toggles the button name', () => {
        expect(showHideToggle.buttonLabel()).toEqual('Hide');

        showHideToggle.toggleVisibility();
        expect(showHideToggle.buttonLabel()).toEqual('Show');

        showHideToggle.toggleVisibility();
        expect(showHideToggle.buttonLabel()).toEqual('Hide');
    });

    it('toggles the visibility of the selected pet', () => {
        expect(applicationComponent.selectedPetIsShown()).toBeTruthy();

        showHideToggle.toggleVisibility();
        expect(applicationComponent.selectedPetIsShown()).toBeFalsy();

        showHideToggle.toggleVisibility();
        expect(applicationComponent.selectedPetIsShown()).toBeTruthy();
    });
});