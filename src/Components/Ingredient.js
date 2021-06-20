import React from 'react'

export default function Ingredient({ingrediant}) {
    return (
        <div>
            <span>{ingrediant.name}: </span>
            <span>{ingrediant.amount}</span>
        </div>
    )
}
