import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const CUBES = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]


function Icons() {
    const [darts, setDarts] = React.useState({ id: 0, number: 0 })

    const dice = CUBES.map((item, index) =>
        <FontAwesomeIcon
            icon={darts.id === index ? CUBES[darts.number] : item}
            size='3x'
        />
    )

    function random() {
        return Math.floor(Math.random() * (6 + 0))
    }


    function handleChange(e) {
        if (e.code === 'KeyQ') {
            setDarts({ id: 0, number: random() })
        }
    }



    React.useEffect(() => {
        window.addEventListener('keydown', handleChange)

        return () => {
            window.removeEventListener('keydown', handleChange)
        }
    }, [handleChange, darts])


    console.log(darts)
    return (
        <div>
            <h2>icons</h2>
            <div className='cubes'>
                {dice}
            </div>
        </div>
    )
}

export default Icons


//  <FontAwesomeIcon icon={CUBES[dice]} size='3x'/> 