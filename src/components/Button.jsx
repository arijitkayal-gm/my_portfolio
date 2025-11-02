import React, { useRef } from 'react'
import { gsap, Power4, Elastic } from 'gsap'

const Button = ({
    btnName,
    btnFunction,
    className = '',
    textClassName = '',
    style = {},
    textStyle = {} }) => {
    const magnetoB = useRef()
    const magnetoT = useRef()

    const magnetoStrength = 50;
    const magnetoTextStrength = 100;
    //Mouse enter animation
    const activateMagneto = (e) => {
        let boundBox = e.target.getBoundingClientRect();
        const newX = ((e.clientX - boundBox.left) / e.target.offsetWidth) - 0.5;
        const newY = ((e.clientY - boundBox.top) / e.target.offsetHeight) - 0.5;

        //Move
        gsap.to(magnetoB.current, {
            x: newX * magnetoStrength,
            y: newY * magnetoStrength,
            duration: 1,
            ease: Power4.easeOut,
        })
        gsap.to(magnetoT.current, {
            x: newX * magnetoTextStrength,
            y: newY * magnetoTextStrength,
            duration: 1,
            ease: Power4.easeOut,
        })
    }

    //Mouse leave animation
    const resetMagneto = (e) => {
        //Move back to original position
        gsap.to(magnetoB.current, {
            x: 0,
            y: 0,
            duration: 1,
            ease: Elastic.easeOut,
        })
        gsap.to(magnetoT.current, {
            x: 0,
            y: 0,
            duration: 1,
            ease: Elastic.easeOut,
        })

    }

    return (
        <button className={`magneto-button ${className}`} style={style} ref={magnetoB} onClick={btnFunction} onMouseMove={activateMagneto} onMouseLeave={resetMagneto}>
            <span ref={magnetoT} style={textStyle} className={`magneto-text ${textClassName}`}>{btnName}</span>
        </button>
    )
}

export default Button
