import React from 'react'
import images from '../images'
import Icons from './Icons'

function FightPage(props) {

    const randomPlayer = Math.floor(Math.random() * (images.length + 0))

    return (
        <div className="display2-wrapper">
            <h2 className='fight'>FIGHT!</h2>
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

export default FightPage