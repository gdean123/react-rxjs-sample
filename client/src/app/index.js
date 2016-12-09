import React from 'react';
import ReactDOM from 'react-dom';

import {createApplication} from './factories/application'

const application = createApplication();

ReactDOM.render(application.components.application, document.getElementById('app'));

application.sinks.fetchPet.start();