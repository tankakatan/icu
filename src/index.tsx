'use strict';

import * as React from 'react';
import * as ReactDom from 'react-dom/client';

import './reset.css'

ReactDom
    .createRoot(document.getElementById('app') as Element)
    .render(<div/>);
