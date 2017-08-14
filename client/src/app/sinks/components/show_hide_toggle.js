import React from 'react';

export const ShowHideToggle = ({label, toggleVisibility}) => (
    <button onClick={() => toggleVisibility()}>{label}</button>
);