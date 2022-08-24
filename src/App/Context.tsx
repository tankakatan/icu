'use strict';

import * as React from 'react';
import {createContext, ReactNode, useState, useContext, useCallback} from 'react';

export type EyeArrayProps = {
    scale: number;
    width: number;
    height: number;
    eyesInRow: number;
    eyesInCol: number;
    setScale: (_: number) => void;
};

export const EyeArrayContext = createContext<EyeArrayProps>({
    scale: 1,
    width: 88,
    height: 44,
    eyesInRow: 1,
    eyesInCol: 1,
    setScale: () => undefined
});

export const useEyeArrayContext = () => useContext(EyeArrayContext);

export const ProvideEyeArrayContext= ({children}: {children: ReactNode}) => {
    const width = 88;
    const height = 44;
    const getEyesInRow = useCallback(() => Math.ceil(
        window.innerWidth / (scale * width) + 1
    ), [width]);

    const getEyesInCol = useCallback(() => Math.ceil(
        2 * window.innerHeight / (scale * height) + 1
    ), [height]);

    const [scale, setScale] = useState<number>(2);
    const [eyesInRow, setEyesInRow] = useState<number>(getEyesInRow());
    const [eyesInCol, setEyesInCol] = useState<number>(getEyesInCol());

    window.onresize = useCallback(() => {
        setEyesInRow(getEyesInRow());
        setEyesInCol(getEyesInCol());
    }, []);

    const context = {
        scale,
        setScale,
        width,
        height,
        eyesInRow,
        eyesInCol
    };

    return <EyeArrayContext.Provider value={context}>{children}</EyeArrayContext.Provider>;
};
