import React from 'react'
import images from '../images'
import Icons from './Icons'

function Display2(props) {

    const randomPlayer = Math.floor(Math.random() * (images.length + 0))

    return (
        <div>
            <h2>BATTLE</h2>
            <div className="div-big-images">
                <img src={images[props.player].src} alt={images.id} />
                <img src={images[randomPlayer].src} alt={images.id} />
            </div>
            <div>
                <Icons />
            </div>
        </div>
    )
}

export default Display2