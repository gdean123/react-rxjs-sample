import React from 'react';
import {toggleVisibilityStream} from "../domain/sources/intents";
import {visibilityToggleLabelStream} from "../domain/streams/visibility_toggle_label_stream";
import {connect} from "./connect";

const ShowHideToggle = ({label, didToggleVisibility}) => (
    <button onClick={didToggleVisibility}>{label}</button>
);

export default connect(ShowHideToggle, {
    label: visibilityToggleLabelStream
}, {
    didToggleVisibility: toggleVisibilityStream
});