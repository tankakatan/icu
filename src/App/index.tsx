'use strict';

import * as React from 'react';

import './index.css';

import Eye from '../Eye';
import {ProvideEyeArrayContext, useEyeArrayContext} from './Context';

const EyeArray: React.FunctionComponent = () => {
    const {
        scale,
        width,
        height,
        eyesInRow,
        eyesInCol,
    } = useEyeArrayContext();

    const eyes = [];
    const scaledWidth = scale * width;
    const scaledHeight = scale * height;

    for (let i = 0; i < eyesInCol; i++) {
        for (let j = 0; j < eyesInRow; j++) {
            const index = `eye-${i}-${j}`;
            eyes.push(
                <Eye
                    key={index}
                    className={`eye ${index}`}
                    prefix={index}
                    style={{
                        transform: `scale(${scale})`,
                        top: `${(scaledHeight / 2) * (i - 1) - scale}px`,
                        left: `${scaledWidth * (j - (i % 2) / 2)}px`
                    }}
                />
            );
        }
    }

    return <div className='eye-array'>{eyes}</div>;
};

export default () => <ProvideEyeArrayContext><EyeArray/></ProvideEyeArrayContext>;
