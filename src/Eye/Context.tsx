'use strict';

import * as React from 'react';
import {
    createContext,
    useContext,
    useEffect,
    RefObject,
    useRef,
    HTMLAttributes,
    FunctionComponent,
} from 'react';

export type EyeProps = HTMLAttributes<SVGElement> & {
    prefix?: string;
};

export type EyeContext = {
    irisColor: string,
    skinColor: string,
    pupilScale: number,
    corneaCenterX: number,
    corneaCenterY: number,
    upperEyelidBlink: RefObject<SVGAnimateElement>;
    lowerEyelidBlink: RefObject<SVGAnimateElement>;
    idPrefix: string;
};

export const EyeContext = createContext<EyeContext>({
    irisColor: '',
    skinColor: '',
    pupilScale: 1,
    corneaCenterX: 0,
    corneaCenterY: 0,
    upperEyelidBlink: {current: null},
    lowerEyelidBlink: {current: null},
    idPrefix: ''
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

export const rescale = (x: number, xMin: number, xMax: number, yMin: number, yMax: number) => (
    ((x - xMin) * (yMax - yMin) / (xMax - xMin)) + yMin
);

export const ProvideEyeContext: FunctionComponent<EyeProps> = ({children, prefix}) => {
    const idPrefix = `svg-eye-${prefix}`;
    const irisColor = irisColors[Math.floor(Math.random() * irisColors.length)];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];

    const pupilScale = Number(rescale(Math.random(), 0, 1, 0.25, 1).toFixed(2));
    const corneaCenterX = 0;
    const corneaCenterY = 0;

    useEffect(() => {
        addEventListener('click', (event: MouseEvent) => {
            if (!(event.target as HTMLElement)?.closest(`#${idPrefix}-eye-group`)) {
                return;
            }

            upperEyelidBlink.current?.beginElement();
            lowerEyelidBlink.current?.beginElement();
        });
    }, []);

    const upperEyelidBlink = useRef<SVGAnimateElement>(null);
    const lowerEyelidBlink = useRef<SVGAnimateElement>(null);

    const context = {
        irisColor,
        skinColor,
        pupilScale,
        corneaCenterX,
        corneaCenterY,
        upperEyelidBlink,
        lowerEyelidBlink,
        idPrefix,
    };

    return <EyeContext.Provider value={context}>{children}</EyeContext.Provider>;
};
