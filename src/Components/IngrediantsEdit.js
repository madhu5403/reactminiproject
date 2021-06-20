import React from 'react'
import { RecepieContext } from './App'
import { useContext } from 'react'

export default function IngrediantsEdit({ingrediant,handleIngredientChange,handleIngredientDelete}) {
    console.log('ingrediant',ingrediant)
    function handleChange(changes){
        handleIngredientChange(ingrediant.id,{...ingrediant,...changes})
    }
    return (
            <div className='Ingrediant-container'>
             <div>Name</div>
             <div>Amount</div>
             <div></div>
             <input onInput={e=>handleChange({name:e.target.value})} value={ingrediant.name} />
             <input onInput={e=>handleChange({amount:e.target.value})} value={ingrediant.amount} />
             <button onClick={()=>handleIngredientDelete(ingrediant.id)} className='btn-delete' >&times;</button>
            </div>
    )
}
