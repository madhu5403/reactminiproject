import React,{useContext} from 'react'
import Recipe from './Recipe'
import { RecepieContext } from './App'

export default function RecipeList({recepies}) {
    const {handleRecepieAdd} = useContext(RecepieContext)
    return (
        <div className='recepie-list'>
            <div>
            {
                recepies.map(recipie=>{
                    return <Recipe key={recipie.id} id={recipie.id}
                    name={recipie.name} servings={recipie.servings} CookTime={recipie.CookTime} 
                    instructions={recipie.instructions} ingrediants={recipie.ingrediants}
                     />
                })
            }
            </div>
            <div onClick={handleRecepieAdd} className='Add-recepie-btn-container' >
                <button className="Add-recepie-btn">Add Recepie</button>
            </div>
        </div>
    )
}

