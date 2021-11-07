const _ = require('lodash');
const {BREAKFAST_REQUIREMENTS} =  require('./constants');
const foods = require('./foods');

const getRandomFood = (requirements) => {
  return _.sample(foods.filter(food => canFoodFitRequirements(food, requirements)));
}

const areRequirementsComplete = (requirements) => {
  return Object.values(requirements).every(v => v < 1);
}

const canFoodFitRequirements = (food, requirements) => {
  const remainingRequirements = _.cloneDeep(requirements);
  for (const requirement of food.satisfies) {
    remainingRequirements[requirement]--;
    
    //TODO overlap is OK but not desired
    if(remainingRequirements[requirement] < -1) {
      console.log(`${food.name} do not meet the remaining requirements`);
      return false;
    }
  }

  console.log(`${food.name} do meet the remaining requirements`);
  return true;
}

console.log('**** Starting Up ****');

// step one, make a breakfast
const breakfast = _.cloneDeep(BREAKFAST_REQUIREMENTS);
let outOfFood = false
const meal = [];
while(!areRequirementsComplete(breakfast) && !outOfFood) {
  const randomFood = getRandomFood(breakfast);
  console.log('random chosen food', randomFood);
  if(!randomFood) {
    console.log('we have no more food that will fit');
    outOfFood = true;
  } else {
    for (const requirement of randomFood.satisfies) {
      breakfast[requirement]--;
    }
    meal.push(randomFood);
  }
}

console.log('meal', meal.map(m => m.name), 'remaining ->' ,breakfast);