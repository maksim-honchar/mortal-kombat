import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const CUBES = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]


function Icons() {
    const [diceOne, setDiceOne] = React.useState(0)
    const [diceTwo, setDiceTwo] = React.useState(0)
    const [diceThree, setDiceThree] = React.useState(0)
    const [diceFour, setDiceFour] = React.useState(0)
    const [diceFive, setDiceFive] = React.useState(0)
    const [diceSix, setDiceSix] = React.useState(0)

    function handleChange(e) {
        if (e.code === 'KeyQ' && diceOne < 5) {
            setDiceOne(diceOne + 1)
        } else if (e.code === 'KeyQ' && diceOne === 5) {
            setDiceOne(0)
        } else if (e.code === 'KeyW' && diceTwo < 5) {
            setDiceTwo(diceTwo + 1)
        } else if (e.code === 'KeyW' && diceTwo === 5) {
            setDiceTwo(0)
        } else if (e.code === 'KeyE' && diceThree < 5) {
            setDiceThree(diceThree + 1)
        } else if (e.code === 'KeyE' && diceThree === 5) {
            setDiceThree(0)
        } else if (e.code === 'KeyR' && diceFour < 5) {
            setDiceFour(diceFour + 1)
        } else if (e.code === 'KeyR' && diceFour === 5) {
            setDiceFour(0)
        } else if (e.code === 'KeyT' && diceFive < 5) {
            setDiceFive(diceFive + 1)
        } else if (e.code === 'KeyT' && diceFive === 5) {
            setDiceFive(0)
        } else if (e.code === 'KeyY' && diceSix < 5) {
            setDiceSix(diceSix + 1)
        } else if (e.code === 'KeyY' && diceSix === 5) {
            setDiceSix(0)
        }

    }


    React.useEffect(() => {
        window.addEventListener('keydown', handleChange)

        return () => {
            window.removeEventListener('keydown', handleChange)
        }
    }, [handleChange])

    return (
        <div className='cubes'>
            <div className='div-icon'>
                <FontAwesomeIcon
                    icon={CUBES[diceOne]}
                    size='5x'
                />
            </div>
            <div className='div-icon'>
                <FontAwesomeIcon
                    icon={CUBES[diceTwo]}
                    size='5x'
                />
            </div>
            <div className='div-icon'>
                <FontAwesomeIcon
                    icon={CUBES[diceThree]}
                    size='5x'
                />
            </div>
            <div className='div-icon'>
                <FontAwesomeIcon
                    icon={CUBES[diceFour]}
                    size='5x'
                />
            </div>
            <div className='div-icon'>
                <FontAwesomeIcon
                    icon={CUBES[diceFive]}
                    size='5x'
                />
            </div>
            <div className='div-icon'>
                <FontAwesomeIcon
                    icon={CUBES[diceSix]}
                    size='5x'
                />
            </div>
        </div>
    )
}

export default Icons



