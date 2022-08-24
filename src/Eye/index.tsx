'use strict';

import * as React from 'react';
import {HTMLAttributes} from 'react';
import {ProvideEyeContext, useEyeContext} from './Context';

export type EyeProps = HTMLAttributes<SVGElement> & {
    prefix?: string;
};

const Eye: React.FunctionComponent<EyeProps> = ({prefix='eye', ...props}) => {
    const {
        irisColor,
        skinColor,
        pupilScale,
        corneaCenterX,
        corneaCenterY
    } = useEyeContext();

    return (
        <svg
            width={88}
            height={46}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path
                d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                fill='#fff'
            />
            <path
                d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                fill={`url(#svg_part_id_${prefix}_a)`}
            />
            <path
                d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                fill={`url(#svg_part_id_${prefix}_b)`}
            />
            <mask
                id={`svg_part_id_${prefix}_c`}
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
            <g mask={`url(#svg_part_id_${prefix}_c)`}>
                <circle cx={44} cy={23} r={22} fill={irisColor}/>
                <circle cx={44} cy={23} r={22} fill={`url(#svg_part_id_${prefix}_d)`} />
                <path
                    style={{
                        // transform: `scale(${pupilScale})`,
                        transformOrigin: 'center'
                    }}
                    d='m44 1 .837 6.024L46.3 1.12l.203 6.078 2.071-5.718-.433 6.066 2.657-5.47-1.065 5.987 3.215-5.162-1.685 5.843L55 3.947l-2.287 5.636 4.218-4.381-2.863 5.365 4.653-3.916-3.408 5.036 5.036-3.408-3.916 4.653 5.365-2.863-4.38 4.218L63.052 12l-4.798 3.737 5.843-1.685-5.162 3.215 5.987-1.065-5.47 2.657 6.066-.433-5.718 2.071 6.078.203-5.903 1.463L66 23l-6.023.837 5.902 1.463-6.078.203 5.718 2.071-6.066-.433 5.47 2.657-5.987-1.065 5.162 3.215-5.843-1.685L63.053 34l-5.636-2.287 4.381 4.218-5.365-2.863 3.916 4.653-5.036-3.408 3.408 5.036-4.653-3.916 2.863 5.365-4.218-4.38L55 42.052l-3.737-4.798 1.685 5.843-3.215-5.162 1.065 5.987-2.657-5.47.433 6.066-2.071-5.718-.203 6.078-1.463-5.902L44 45l-.837-6.023L41.7 44.88l-.203-6.079-2.071 5.718.433-6.066-2.657 5.47 1.065-5.987-3.215 5.162 1.685-5.843L33 42.053l2.287-5.636-4.218 4.381 2.863-5.365-4.653 3.916 3.408-5.036-5.036 3.408 3.916-4.653-5.365 2.863 4.38-4.218L24.948 34l4.798-3.737-5.843 1.685 5.162-3.215-5.987 1.065 5.47-2.657-6.066.433 5.718-2.071-6.079-.203 5.903-1.463L22 23l6.023-.837-5.902-1.463 6.078-.203-5.718-2.071 6.066.433-5.47-2.657 5.987 1.065-5.162-3.215 5.843 1.685L24.947 12l5.636 2.287-4.381-4.218 5.365 2.863-3.916-4.653 5.036 3.408-3.408-5.036 4.653 3.916-2.863-5.365 4.218 4.38L33 3.948l3.737 4.798-1.685-5.843 3.215 5.162-1.065-5.987 2.657 5.47-.433-6.066 2.071 5.718.203-6.078 1.463 5.903L44 1Z'
                    fill={`url(#svg_part_id_${prefix}_e)`}
                />
                <circle cx={44} cy={23} r={Math.round(16 * pupilScale)} fill='#000' />
                <circle cx={44} cy={23} r={Math.round(16 * pupilScale)} fill={`url(#svg_part_id_${prefix}_f)`} />
            </g>
            <circle cx={34} cy={35} r={2} fill='#fff' fillOpacity={0.64} />
            <circle cx={52} cy={13} r={4} fill='#fff' fillOpacity={0.75} />
            <path d='M79 21s5 2 7 2c-2 0-7 2-7 2v-4Z' fill='#FBB' />
            <path d='M79 21s5 2 7 2c-2 0-7 2-7 2v-4Z' fill='#000' fillOpacity={0.125} />
            <circle cx={79} cy={23} r={2} fill='#FBB' />
            <circle cx={79} cy={23} r={2} fill={`url(#svg_part_id_${prefix}_g)`} />
            <circle cx={80} cy={22} r={1} fill='#fff' fillOpacity={0.75} />
            <path
                d='M44 45C28 45 16 23 0 23c16 0 28 20 44 20s28-20 44-20c-16 0-28 22-44 22Z'
                fill={skinColor}
            />
            <path
                d='M44 45C28 45 16 23 0 23c16 0 28 20 44 20s28-20 44-20c-16 0-28 22-44 22Z'
                fill={`url(#svg_part_id_${prefix}_h)`}
            />
            <path
                d='M44 1C28 1 16 23 0 23 16 23 28 9 44 9s28 14 44 14C72 23 60 1 44 1Z'
                fill={skinColor}
            />
            <path
                d='M44 1C28 1 16 23 0 23 16 23 28 9 44 9s28 14 44 14C72 23 60 1 44 1Z'
                fill={`url(#svg_part_id_${prefix}_i)`}
            />
            <path
                d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                stroke={skinColor}
            />
            <path
                d='M44 1C28 1 16 23 0 23c16 0 28 22 44 22s28-22 44-22C72 23 60 1 44 1Z'
                stroke='#000'
                strokeOpacity={0.2}
            />
            <defs>
                <radialGradient
                    id={`svg_part_id_${prefix}_a`}
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
                    id={`svg_part_id_${prefix}_b`}
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
                    id={`svg_part_id_${prefix}_d`}
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
                    id={`svg_part_id_${prefix}_e`}
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
                    id={`svg_part_id_${prefix}_f`}
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
                    id={`svg_part_id_${prefix}_g`}
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
                    id={`svg_part_id_${prefix}_h`}
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
                    id={`svg_part_id_${prefix}_i`}
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='matrix(0 -22 44 0 44 23)'
                >
                    <stop stopColor='#fff' stopOpacity={0} />
                    <stop offset={1} stopOpacity={0.25} />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default (props: EyeProps) => <ProvideEyeContext><Eye {...props}/></ProvideEyeContext>;
