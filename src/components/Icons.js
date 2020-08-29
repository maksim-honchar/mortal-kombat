import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const CUBES = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]


function Icons() {
    const [darts, setDarts] = React.useState({ id: 0, number: 0 })

    const dice = CUBES.map((item, index) =>
        <FontAwesomeIcon
            icon={darts.id === index ? CUBES[darts.number] : item}
            size='5x'
        />
    )

    function random() {
        return Math.floor(Math.random() * (CUBES.length + 0))
    }


    function handleChange(e) {
        if (e.code === 'KeyQ') {
            setDarts({ id: 0, number: random() })
        } else if (e.code === 'KeyW') {
            setDarts({ id: 1, number: random() })
        } else if (e.code === 'KeyE') {
            setDarts({ id: 2, number: random() })
        } else if (e.code === 'KeyR') {
            setDarts({ id: 3, number: random() })
        } else if (e.code === 'KeyT') {
            setDarts({ id: 4, number: random() })
        } else if (e.code === 'KeyY') {
            setDarts({ id: 5, number: random() })
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
            <div className='cubes'>
                {dice}
            </div>
        </div>
    )
}

export default Icons


//  <FontAwesomeIcon icon={CUBES[dice]} size='3x'/> 