import RecipeList from "./RecipeList";
import React, {useEffect, useState} from 'react'
import RecepieEdit from "./RecepieEdit";

const LocalStorageKey = 'cookingWithReact.recepies'
export const RecepieContext =  React.createContext()
function App() {
  const [recepies, setrecepies] = useState(samplerecipies)
  const [slectedrecepieId, setslectedrecepieId] = useState()
  console.log("slectedrecepieId",slectedrecepieId)
  let SelectedRecepie
  if(slectedrecepieId){
    SelectedRecepie = recepies.find(recepie=>recepie.id === slectedrecepieId)
  } 
  console.log("SelectedRecepie",SelectedRecepie)
  useEffect(()=>{
    const recepieJson = localStorage.getItem(LocalStorageKey)
    if(recepieJson!=null){
      setrecepies(JSON.parse(recepieJson))
    }
    else{
      setrecepies(samplerecipies)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem(LocalStorageKey,JSON.stringify(recepies))
  },[recepies])
  
  const RecepieContextValue = {
    handleRecepieAdd,
    handleRecepieDelete,
    handleRecepieSelect,
    handleRecepieChange
  }
  function handleRecepieAdd(){
   const newRecepie={
     id:new Date(),
     name:'',
     servings:1,
     CookTime:'',
     instructions:[],
     ingrediants:[
       {
         id:1,
         name:'',
         amount:''
       },
       {
         id:2,
         name:'',
         amount:''
       }
     ]
 }
 setslectedrecepieId(newRecepie.id)
 setrecepies([...recepies,newRecepie])

}
    
    function handleRecepieDelete(id){
      setrecepies(prevstate=>prevstate.filter(recepie=>recepie.id!==id));
    }
   
    function handleRecepieSelect(id){
      console.log(id)
      setslectedrecepieId(id)
    }
    function handleRecepieChange(id,recepie){
      const newRecepies = [...recepies]
      const index = newRecepies.findIndex(r=>r.id===id)
      newRecepies[index]=recepie
      setrecepies(newRecepies);
    }
  return (
    <RecepieContext.Provider value={RecepieContextValue}>
      <div className='MainFlex'>
      <RecipeList recepies={recepies}/>
      {SelectedRecepie && <RecepieEdit recepie={SelectedRecepie} handleRecepieSelect={handleRecepieSelect}/>}
      </div>
    </RecepieContext.Provider>
  )
}

const samplerecipies = [
  {
      id:1,
      name:'Raw Chicken',
      servings:3,
      CookTime:'1.45hr',
      instructions:["1.Put Salt on chicken ","2.Put chicken on oven ","3.Eat Chicken"],
      ingrediants:[
        {
          id:1,
          name:'Chicken',
          amount:'2 kg'
        },
        {
          id:2,
          name:'Salt',
          amount:'100g'
        }
      ]
  },
  {
      id:2,
      name:'Plain Pork',
      servings:3,
      CookTime:'1.45hr',
      instructions:["1.Put Salt on Pork ","2.Put Pork on oven ","3.Eat Pork "],
      ingrediants:[
        {
          id:1,
          name:'Pork',
          amount:'2 kg'
        },
        {
          id:2,
          name:'Salt',
          amount:'100g'
        }
      ]
  },
  {
      id:3,
      name:'Salard',
      servings:3,
      CookTime:'0.3hr',
      instructions:["1.Cut Vegetables ","2.Add mayoneese ","3.Eat salard "],
      ingrediants:[
        {
          id:1,
          name:'Cabbage',
          amount:'500g'
        },
        {
          id:2,
          name:'carrot',
          amount:'500g'
        },
        {
          id:3,
          name:'Mayyoneese',
          amount:'500g'
        }
      ]
  }
]

export default App;
