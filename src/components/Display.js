import React from 'react'
import './Display.css'
import images from '../images'

function Display() {
    const [mark, setMark] = React.useState(0)

    const imageTile = images.map((item, index) => (
        <div className='div-img' key={item.id}>
            <img
                className={index === mark ? 'pics-active' : 'pics-passive'}
                src={item.src}
                key={item.id}
                alt={item.id}
            />
        </div>
    ))

    const handleChange = (e) => {
        if (e.code === 'ArrowRight') {
            setMark(mark + 1)
        } else if (e.code === 'ArrowLeft') {
            setMark(mark - 1)
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleChange)

        return () => {
            window.removeEventListener('keydown', handleChange)
        }
    })

    return (
        <div className='display-wrapper'>{imageTile}</div>
    )
}

export default Display
