const STARCH = 'starch';
const FRUIT = 'fruit';
const MILK = 'milk';
const PROTEIN = 'protein';
const FAT = 'fats';
const VEGGIE = 'veggie';

const BREAKFAST = 'breakfast';
const LUNCH = 'lunch';
const DINNER = 'dinner';
const SNACK = 'snack';

const BREAKFAST_REQUIREMENTS = {
  [STARCH]: 1,
  [FRUIT]: 1,
  [MILK]: 1,
  [PROTEIN]: 2,
  [FAT]: 2,
  [VEGGIE]: 0
}

const LUNCH_REQUIREMENTS = {
  [STARCH]: 2,
  [FRUIT]: 1,
  [MILK]: 0,
  [PROTEIN]: 3,
  [FAT]: 2,
  [VEGGIE]: 1
}

const DINNER_REQUIREMENTS = {
  [STARCH]: 2,
  [FRUIT]: 0,
  [MILK]: 1,
  [PROTEIN]: 2,
  [FAT]: 2,
  [VEGGIE]: 1
}

const SNACKS_REQUIREMENTS = {
  [STARCH]: [0,1],
  [FRUIT]: [0,1],
  [MILK]: [0,1],
  [PROTEIN]: [0,1],
  [FAT]: [0,1],
  [VEGGIE]: 0
}

module.exports = {
  STARCH,
  FRUIT,
  MILK,
  PROTEIN,
  FAT,
  VEGGIE,
  BREAKFAST,
  LUNCH,
  DINNER,
  SNACK,
  BREAKFAST_REQUIREMENTS,
  LUNCH_REQUIREMENTS,
  DINNER_REQUIREMENTS,
  SNACKS_REQUIREMENTS
}