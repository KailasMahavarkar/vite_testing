import { useState } from 'react'
import './App.css'

const Point = ({ x, y }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: `${y}%`,
                left: `${x}%`,
                height: '10px',
                width: '10px',
                backgroundColor: 'red',
                borderRadius: '50%',
            }}
        />
    )
}


const CustomSvg = () => (
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 588 184">
        <style type="text/css">
            {`.st0{fill:url(#Line-4-Copy-2_00000040550446336344194000000009569027143447130002_);}`}
        </style>
        <g id="used-car">
            <g
                id="Cw-Used-Car-Desktop-New-Price-Guide-Fair-Price-more-than-Average"
                transform="translate(-220, -288)"
            >
                <g id="Group-4" transform="translate(219, 249)">
                    <linearGradient
                        id="Line-4-Copy-2_00000179619607021991673240000004393678196887028151_"
                        gradientUnits="userSpaceOnUse"
                        x1="295"
                        y1="221.5"
                        x2="295"
                        y2="39.5"
                    >
                        <stop offset="0" style={{ stopColor: '#F9F9F9' }} />
                        <stop offset="0.07082123" style={{ stopColor: '#F8F1E8' }} />
                        <stop offset="0.5312" style={{ stopColor: '#F3C081' }} />
                        <stop offset="0.8505" style={{ stopColor: '#F0A13F' }} />
                        <stop offset="1" style={{ stopColor: '#EF9526' }} />
                    </linearGradient>
                    <path
                        id="Line-4-Copy-2"
                        style={{
                            fill: 'url(#Line-4-Copy-2_00000179619607021991673240000004393678196887028151_)',
                        }}
                        d="M2,221.5 c108.1,0,125.6-182,195.6-182c97.4,0,289.9,182,390.4,182"
                    />
                </g>
            </g>
        </g>
    </svg>
);


const Playground = () => {
    return (
        <div style={{
            display: 'flex',
            width: '586px',
            height: '200px',
            justifyContent: 'center',
            alignItems: 'center',
            border: '3px solid cyan',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <CustomSvg />
            {
                [0, 1, 2, 3].map((x) => {
                    return (
                        <div style={{
                            position: 'absolute',
                            top: '0%',
                            left: `${x * 25}%`,
                            height: '100%',
                            width: '25%',
                            border: '1px solid green',
                        }}>
                            Card
                        </div>
                    )
                })
            }
            <Point x={10} y={82} />
            <Point x={37} y={2} />
            <Point x={57} y={31} />
            <Point x={65} y={46} />
            <Point x={85} y={82} />

        </div>
    )
}

function App() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
        }}>
            <Playground />
        </div>
    )
}

export default App
