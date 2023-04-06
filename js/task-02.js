
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElList = document.getElementById('ingredients');

const ingredientEl = ingredients.map(ingredient => {

  const ingredientsList = document.createElement('li');

  ingredientsList.textContent = `${ingredient}`;
  ingredientsList.classList.add('item');

  return ingredientsList;
}
);

console.log(ingredientEl);


ingredientsElList.append(...ingredientEl);
  

