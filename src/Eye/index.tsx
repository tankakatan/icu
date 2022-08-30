'use strict';

import * as React from 'react';
import {
    EyeProps,
    ProvideEyeContext,
    useEyeContext
} from './Context';

import './index.css';

const Eye: React.FunctionComponent<EyeProps> = (props) => {
    const {
        irisColor,
        skinColor,
        pupilScale,
        upperEyelidBlink,
        lowerEyelidBlink,
        idPrefix
    } = useEyeContext();

    return (
        <svg
            width={88}
            height={46}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <g id={`${idPrefix}-eye-group`}>
                <path
                    d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                    fill='#fff'
                />
                <path
                    d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                    fill={`url(#${idPrefix}_a)`}
                />
                <path
                    d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                    fill={`url(#${idPrefix}_b)`}
                />
                <mask
                    id={`${idPrefix}_c`}
                    style={{
                        maskType: 'alpha',
                    }}
                    maskUnits='userSpaceOnUse'
                    x={0}
                    y={1}
                    width={88}
                    height={44}
                >
                <path
                    d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                    fill='#fff'
                />
                </mask>
                <g mask={`url(#${idPrefix}_c)`}>
                    <circle cx={44} cy={23} r={22} fill={irisColor}/>
                    <circle cx={44} cy={23} r={22} fill={`url(#${idPrefix}_d)`} />
                    <path
                        style={{
                            // transform: `scale(${pupilScale})`,
                            transformOrigin: 'center'
                        }}
                        d='m44 1 .837 6.024L46.3 1.12l.203 6.078 2.071-5.718-.433 6.066 2.657-5.47-1.065 5.987 3.215-5.162-1.685 5.843L55 3.947l-2.287 5.636 4.218-4.381-2.863 5.365 4.653-3.916-3.408 5.036 5.036-3.408-3.916 4.653 5.365-2.863-4.38 4.218L63.052 12l-4.798 3.737 5.843-1.685-5.162 3.215 5.987-1.065-5.47 2.657 6.066-.433-5.718 2.071 6.078.203-5.903 1.463L66 23l-6.023.837 5.902 1.463-6.078.203 5.718 2.071-6.066-.433 5.47 2.657-5.987-1.065 5.162 3.215-5.843-1.685L63.053 34l-5.636-2.287 4.381 4.218-5.365-2.863 3.916 4.653-5.036-3.408 3.408 5.036-4.653-3.916 2.863 5.365-4.218-4.38L55 42.052l-3.737-4.798 1.685 5.843-3.215-5.162 1.065 5.987-2.657-5.47.433 6.066-2.071-5.718-.203 6.078-1.463-5.902L44 45l-.837-6.023L41.7 44.88l-.203-6.079-2.071 5.718.433-6.066-2.657 5.47 1.065-5.987-3.215 5.162 1.685-5.843L33 42.053l2.287-5.636-4.218 4.381 2.863-5.365-4.653 3.916 3.408-5.036-5.036 3.408 3.916-4.653-5.365 2.863 4.38-4.218L24.948 34l4.798-3.737-5.843 1.685 5.162-3.215-5.987 1.065 5.47-2.657-6.066.433 5.718-2.071-6.079-.203 5.903-1.463L22 23l6.023-.837-5.902-1.463 6.078-.203-5.718-2.071 6.066.433-5.47-2.657 5.987 1.065-5.162-3.215 5.843 1.685L24.947 12l5.636 2.287-4.381-4.218 5.365 2.863-3.916-4.653 5.036 3.408-3.408-5.036 4.653 3.916-2.863-5.365 4.218 4.38L33 3.948l3.737 4.798-1.685-5.843 3.215 5.162-1.065-5.987 2.657 5.47-.433-6.066 2.071 5.718.203-6.078 1.463 5.903L44 1Z'
                        fill={`url(#${idPrefix}_e)`}
                    />
                    <circle
                        className='pupil'
                        cx={44}
                        cy={23}
                        r={Math.round(16 * pupilScale)}
                        fill='#000'
                    />
                    <circle
                        className='pupil_overlay'
                        cx={44}
                        cy={23}
                        r={Math.round(16 * pupilScale)}
                        fill={`url(#${idPrefix}_f)`}
                    />
                </g>
                <circle cx={34} cy={35} r={2} fill='#fff' fillOpacity={0.64} />
                <circle cx={52} cy={13} r={4} fill='#fff' fillOpacity={0.75} />
                <path d='M79 21s5 2 7 2c-2 0-7 2-7 2v-4Z' fill='#FBB' />
                <path d='M79 21s5 2 7 2c-2 0-7 2-7 2v-4Z' fill='#000' fillOpacity={0.125} />
                <circle cx={79} cy={23} r={2} fill='#FBB' />
                <circle cx={79} cy={23} r={2} fill={`url(#${idPrefix}_g)`} />
                <circle cx={80} cy={22} r={1} fill='#fff' fillOpacity={0.75} />
                <g className='lower_eyelid'>
                    <use
                        href={`#${idPrefix}-lower-eyelid`}
                        xlinkHref={`#${idPrefix}-lower-eyelid`}
                        fill={skinColor}
                    />
                    <use
                        href={`#${idPrefix}-lower-eyelid`}
                        xlinkHref={`#${idPrefix}-lower-eyelid`}
                        fill={`url(#${idPrefix}_h)`}
                    />
                </g>
                <g className='upper_eyelid'>
                    <use
                        href={`#${idPrefix}-upper-eyelid`}
                        xlinkHref={`#${idPrefix}-upper-eyelid`}
                        fill={skinColor}
                    />
                    <use
                        href={`#${idPrefix}-upper-eyelid`}
                        xlinkHref={`#${idPrefix}-upper-eyelid`}
                        fill={`url(#${idPrefix}_i)`}
                    />
                </g>
                <g className='outline'>
                    <path
                        d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                        stroke={skinColor}
                    />
                    <path
                        d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                        stroke='#000'
                        strokeOpacity={0.2}
                    />
                </g>
                <defs>
                    <radialGradient
                        id={`${idPrefix}_a`}
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='matrix(-29.5 0 0 -27.7888 44 23)'
                    >
                        <stop offset={0.339} stopColor='red' stopOpacity={0} />
                        <stop offset={1} stopColor='red' stopOpacity={0.125} />
                    </radialGradient>
                    <radialGradient
                        id={`${idPrefix}_b`}
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='matrix(-29.5 0 0 -27.7888 44 23)'
                    >
                        <stop offset={0.339} stopOpacity={0} />
                        <stop offset={1} stopOpacity={0.125} />
                    </radialGradient>
                    <radialGradient
                        id={`${idPrefix}_d`}
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='matrix(0 22 -22 0 44 23)'
                    >
                        <stop offset={0.901} stopColor='#fff' stopOpacity={0} />
                        <stop offset={0.977} stopColor='#fff' stopOpacity={0.25} />
                    </radialGradient>
                    <radialGradient
                        id={`${idPrefix}_e`}
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='matrix(0 22 -43.9499 0 44 23)'
                    >
                        <stop stopColor='gold' stopOpacity={0.28} />
                        <stop offset={1} stopColor='red' stopOpacity={0} />
                    </radialGradient>
                    <radialGradient
                        id={`${idPrefix}_f`}
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='matrix(0 16 -16 0 44 23)'
                    >
                        <stop offset={0.719} stopColor='#fff' stopOpacity={0} />
                        <stop offset={1} stopColor='#fff' stopOpacity={0.125} />
                    </radialGradient>
                    <radialGradient
                        id={`${idPrefix}_g`}
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='matrix(0 2 -2 0 79 23)'
                    >
                        <stop stopColor='#fff' stopOpacity={0.25} />
                        <stop offset={1} stopOpacity={0.125} />
                    </radialGradient>
                    <radialGradient
                        id={`${idPrefix}_h`}
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='matrix(0 22 -44 0 44 23)'
                    >
                        <stop stopColor='#fff' stopOpacity={0} />
                        <stop offset={1} stopOpacity={0.25} />
                    </radialGradient>
                    <radialGradient
                        id={`${idPrefix}_i`}
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='matrix(0 -22 44 0 44 23)'
                    >
                        <stop stopColor='#fff' stopOpacity={0} />
                        <stop offset={1} stopOpacity={0.25} />
                    </radialGradient>
                    <path
                        id={`${idPrefix}-lower-eyelid`}
                        d="M44 45C28 45 16 23 0 23C16 23 28 43 44 43C60 43 72 23 88 23C72 23 60 45 44 45Z"
                    >
                        <animate
                            ref={lowerEyelidBlink}
                            attributeName='d'
                            dur='500ms'
                            begin='indefinite'
                            repeatCount='none'
                            keyTimes='0;0.5;1'
                            calcMode='spline'
                            keySplines={
                                '0.5 0.0 0.5 1.0;'+
                                '0.5 0.0 0.5 1.0;'
                            }
                            values={
                                'M44 45C28 45 16 23 0 23C16 23 28 43 44 43C60 43 72 23 88 23C72 23 60 45 44 45Z;'+
                                'M44 45C28 45 16 23 0 23C16 23 28 37 44 37C60 37 72 23 88 23C72 23 60 45 44 45Z;'+
                                'M44 45C28 45 16 23 0 23C16 23 28 43 44 43C60 43 72 23 88 23C72 23 60 45 44 45Z;'
                            }
                        />
                    </path>
                    <path
                        id={`${idPrefix}-upper-eyelid`}
                        d="M44 1C28 1 16 23 0 23C16 23 28 9 44 9C60 9 72 23 88 23C72 23 60 1 44 1Z"
                    >
                        <animate
                            ref={upperEyelidBlink}
                            attributeName='d'
                            dur='500ms'
                            begin='indefinite'
                            repeatCount='none'
                            keyTimes='0;0.5;1'
                            calcMode='spline'
                            keySplines={
                                '0.42 0.0 0.58 1.0;'+
                                '0.42 0.0 0.58 1.0;'
                            }
                            values={
                                'M44 1C28 1 16 23 0 23C16 23 28 9 44 9C60 9 72 23 88 23C72 23 60 1 44 1Z;'+
                                'M44 1C28 1 16 23 0 23C16 23 28 37 44 37C60 37 72 23 88 23C72 23 60 1 44 1Z;'+
                                'M44 1C28 1 16 23 0 23C16 23 28 9 44 9C60 9 72 23 88 23C72 23 60 1 44 1Z;'
                            }
                        />
                    </path>
                </defs>
            </g>
        </svg>
    );
};

export default (props: EyeProps) => <ProvideEyeContext {...props}><Eye {...props}/></ProvideEyeContext>;
