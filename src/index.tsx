'use strict';

import * as React from 'react';
import * as ReactDom from 'react-dom/client';

import './reset.css';
import './index.css';

import App from './App';

ReactDom
    .createRoot(document.getElementById('app') as Element)
    .render(<App/>);
