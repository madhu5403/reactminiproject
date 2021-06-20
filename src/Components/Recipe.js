import React from 'react'
import IngredientsList from './IngredientsList'
import { RecepieContext } from './App'
import { useContext } from 'react'

export default function Recipe(props) {
    const {handleRecepieDelete} = useContext(RecepieContext)
    const {handleRecepieSelect} = useContext(RecepieContext)

    return (
        <>
        <div className='recepie'>
            <div className='recepie-header' >
                <h1>{props.name}</h1>
                <div>
                <button id={props.id} className='btn-edit' onClick={e=>handleRecepieSelect(Number(e.target.id))} >Edit</button>
                <button id={props.id} onClick={e=>handleRecepieDelete(parseInt(e.target.id))} className='btn-delete' >Delete</button>
                </div>
            </div>
           
        </div>
        <div>
            <span>CookTime: </span>
            <span>{props.CookTime}</span>
        </div>
        <div>
            <span>Servings: </span>
            <span>{props.servings}</span>
        </div>
        <div>
            <span>Instructions: </span>
            {props.instructions}
        </div>
        <div>
            <span>Ingrediants: </span>
            <div>
                <IngredientsList ingrediants={props.ingrediants} />
            </div>
        </div>
        </>
    )
}
