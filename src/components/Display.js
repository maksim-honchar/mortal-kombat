import React from 'react'
import './Display.css'
import { nanoid } from 'nanoid'
import images from '../images'



function Display() {
    const [mark, setMark] = React.useState('Goro')

    const imageTile = images.map(item =>
        <div
            className='div-img'
            key={nanoid()}
        >
            <img
                className={item.id === mark ? 'pics-active' : 'pics-passive'}
                src={item.src}
                key={nanoid()}
                alt={item.id}
            />
        </div>
    )

    window.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
            console.log('ArrowRight')
        } else if (e.code === 'ArrowLeft') {
            console.log('ArrowLeft')
        }
    })

    return (
        <div className='display-wrapper'>
            {imageTile}
        </div>
    )
}

export default Display