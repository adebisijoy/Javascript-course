function removeEgg(foods) {
  const reversedFood = foods.reverse();

  const result = [];
  let eggRemoved = 0;

  for (let i = 0; i < reversedFood.length; i++) {
     if (foods[i] === 'egg' && eggRemoved < 2) {
          eggRemoved++;
          continue;
     }
     result.push(foods[i]);
  }
  return result.reverse();
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));