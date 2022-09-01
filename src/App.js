import './App.css';
import foods from './foods.json';
import { FoodBox } from './components/FoodBox'



function App() {
  return (
    <div className = "food-list">
      <h1> Food List</h1>

      <div className = "food-box">
      {foods.map((updatedFood) => {
        return ( 
          <div className = "box">
        <FoodBox food= {updatedFood}
        image = {updatedFood.image}
        name = {updatedFood.name}
        calories = {updatedFood.calories}
        servings = {updatedFood.servings} 
         />
        </div>
        );
      })}
      </div>
   </div>
  );
}

export default App;
