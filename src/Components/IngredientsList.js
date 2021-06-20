import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientsList({ingrediants}) {
    
    return (
        <>
         {
            ingrediants.map(ingrediant=>{
                return <Ingredient key={ingrediant.id} ingrediant={ingrediant}/>
            })
         }
         </>
        
    )
}
