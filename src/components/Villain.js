import React from 'react'

export default function Villain(props) {

    const handleClick = () => (props.villainCallback(props.villain))

    return (
        <li>
        {props.villain.name} - {props.villain.dangerLevel} - {props.villain.mo}
        <button onClick={handleClick}>Arrest</button>
        </li>
    )
}
