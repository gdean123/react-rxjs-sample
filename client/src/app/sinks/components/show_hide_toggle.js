import React from 'react';
import {toggleVisibilityStream} from "../../sources/intents";
import {visibilityToggleLabelStream} from "../../streams/visibility_toggle_label_stream";
import {connect} from "../../support/connect";

const ShowHideToggle = ({label, toggleVisibility}) => (
    <button onClick={() => toggleVisibility()}>{label}</button>
);

export default connect(ShowHideToggle, {
    label: visibilityToggleLabelStream
}, {
    toggleVisibility: toggleVisibilityStream
});