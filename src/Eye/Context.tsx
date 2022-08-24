'use strict';

import * as React from 'react';
import {createContext, useContext, ReactNode} from 'react';

export const EyeContext = createContext({
    irisColor: '',
    skinColor: '',
    pupilScale: 1,
    corneaCenterX: 0,
    corneaCenterY: 0,
});

export const useEyeContext = () => useContext(EyeContext);

const irisColors = [
    '#8BACDD',
    '#9393aa',
    '#828288',
    '#8f8fad',
    '#949476',
    '#859476',
    '#768294',
    '#634e34',
    '#497665',
    '#5e481e',
    '#451800',
    '#63390f',
    '#3c1414',
];

const skinColors = [
    '#FBDCAE',
    '#c58c85',
    '#ecbcb4',
    '#a1665e',
    '#592f2a',
    '#70361c',
    '#714937',
    '#492816',
    '#321b0f',
    '#ffad60',
    '#ffcd94',
    '#ffe0bd',
    '#eac086',
    '#bf9169',
    '#8c644d',
    '#593123',
];

export const ProvideEyeContext = ({children}: {children: ReactNode}) => {
    const irisColor = irisColors[Math.floor(Math.random() * irisColors.length)];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];

    const pupilScale = Math.min(1, Math.max(0.25, Number(Math.random().toFixed(2))));
    const corneaCenterX = 0;
    const corneaCenterY = 0;

    const context = {
        irisColor,
        skinColor,
        pupilScale,
        corneaCenterX,
        corneaCenterY,
    };

    return <EyeContext.Provider value={context}>{children}</EyeContext.Provider>;
};
