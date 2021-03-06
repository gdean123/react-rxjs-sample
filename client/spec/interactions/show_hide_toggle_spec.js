import React from 'react';

import {renderShowHideToggle} from '../page_objects/show_hide_toggle';
import {renderApplication} from '../page_objects/application';

describe('ShowHideToggle', () => {
    let showHideToggle, applicationComponent;

    beforeEach(() => {
        showHideToggle = renderShowHideToggle();
        applicationComponent = renderApplication();
    });

    it('shows the selected pet', () => {
        expect(applicationComponent.selectedPetIsShown()).toBe(true);
    });

    it('shows the hide button', () => {
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