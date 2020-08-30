import React from 'react'
import './components.css'
import images from '../images'

function StartPage(props) {
    const [mark, setMark] = React.useState(0)

    const imageTile = images.map(item => (
        <div
            className='div-img'
            key={item.index}
        >
            <img
                className={item.index === mark ? 'pics-active' : 'pics-passive'}
                src={item.src}
                key={item.id}
                alt={item.id}
            />
        </div>
    ))


    const handleChange = e => {
        if (e.code === 'Enter') {
            props.display(mark)
        } else if (e.code === 'ArrowRight' && mark !== images.length - 1) {
            setMark(mark + 1)
        } else if (e.code === 'ArrowLeft' && mark !== 0) {
            setMark(mark - 1)
        } else if (e.code === 'ArrowDown' && mark < 15) {
            setMark(mark + 5)
        } else if (e.code === 'ArrowUp' && mark > 4) {
            setMark(mark - 5)
        }
    }



    React.useEffect(() => {
        window.addEventListener('keydown', handleChange)

        return () => {
            window.removeEventListener('keydown', handleChange)
        }
    }, [handleChange])

    return (
        <div>
            <h2 className='select-fighter'>SELECT YOUR FIGHTER</h2>
            <div className='display-wrapper'>
                {imageTile}
            </div>
        </div>
    )
}

export default StartPage
