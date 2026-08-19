import{recipes} from './Data.js';

export function App(){
  const recName = recipes.map(person=>
    <div>
       <h2>{person.name}</h2>
       <ul>
        {person.ingredients.map((ing) => (
          <li key={person.id}>{ing}</li>
        ))}
       </ul>
    </div>
   
  )
  return(
    <>
    <h1>Recipe</h1>
    <h2>{recName}</h2>
    </>
  )
}

export default App;