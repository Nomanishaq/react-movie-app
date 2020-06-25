import React from 'react'

export default function Movie({name,price}) {
    return (
        <div><br/>
            <ul>
                <li>Name:  {name}<br/>Price:  ${price}</li>
            </ul>
        </div>
    )
}
