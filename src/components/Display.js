import React from 'react'
import './Display.css'
import { nanoid } from 'nanoid'
import images from '../images'

function Display() {
    const imageTile = images.map(item =>
        <div
            className='div-img'
            key={nanoid()}
        >
            <img
                className={item.active ? 'pics-active' : 'pics-passive'}
                src={item.src}
                key={nanoid()}
                alt={item.id}
            />
        </div>
    )


    return (
        <div className='display-wrapper'>
            {imageTile}
        </div>
    )
}

export default Display