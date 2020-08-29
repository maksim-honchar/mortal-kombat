import React from 'react'
import images from '../images'

function Display2(props) {

    const randomPlayer = Math.floor(Math.random() * (images.length + 0))

    return (
        <div>
            <h2>BATTLE</h2>
            <img src={images[props.player].src} />
            <img src={images[randomPlayer].src} />
        </div>
    )
}

export default Display2