import React from 'react'
import { useContext } from 'react'
import { RecepieContext } from './App'
import IngrediantsEdit from './IngrediantsEdit'
export default function RecepieEdit({recepie,handleRecepieSelect}) {
    const {handleRecepieChange}=useContext(RecepieContext)
    function handleIngredientChange(id,ingredient){
        const newIngrediants = [...recepie.ingrediants]
        const index = newIngrediants.findIndex(i=>i.id===id)
        newIngrediants[index]=ingredient;
        handleChange({ingrediants:newIngrediants})

    }
    function handleChange(changes){
        handleRecepieChange(recepie.id,{...recepie,...changes})
    }
    function handleIngredientAdd(){
        const newIngredient ={
            id:4,
            name:'',
            amount:''
        }
        handleChange({ingrediants:[...recepie.ingrediants,newIngredient]})
    }
    function handleIngredientDelete(id){
        console.log('handleIngredientDelete',id)
        handleChange({ingrediants:recepie.ingrediants.filter(i=>i.id!==id)})
      }
      
    return (
        <div className='recepie-edit'>
            <div className='close-edit-container' >
                <button onClick={()=>handleRecepieSelect(undefined)} className='close-edit' >&times;</button>
             </div>
         <div className='grid' >
            <label htmlFor='name' >Name</label>
            <input name='Name' id='name' onInput={e=>handleChange({name:e.target.value})} value={recepie.name} type="text"></input>
            <label htmlFor='cookTime' >CookTime</label>
            <input name='cookTime' id='cookTime' onInput={e=>handleChange({CookTime:e.target.value})} value={recepie.CookTime} type="text"></input>
            <label htmlFor='servings' >Servings</label>
            <input name='servings' id='servings' onInput={e=>handleChange({servings:parseInt(e.target.value)||''})} value={recepie.servings} type="text"></input>
            <label htmlFor='instructions' >Instructions</label>
            <textarea name="instructions" id="instructions" onInput={e=>{
                console.log(e.target.value)
                handleChange({instructions:e.target.value})}} value={recepie.instructions} ></textarea>
        </div>
        <label>Ingrediants</label>
        {console.log('recepie.ingrediants',recepie.ingrediants)}
        {recepie.ingrediants.map(element => {
         return <IngrediantsEdit ingrediant={element} handleIngredientChange={handleIngredientChange} handleIngredientDelete={handleIngredientDelete}/>
        })}
        <div>
            <button onClick={()=>handleIngredientAdd()} >Add Ingrediant</button>
        </div>
    </div>

    )
}
