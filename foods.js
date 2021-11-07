const {
  BREAKFAST,
  LUNCH,
  DINNER,
  SNACK,
  STARCH,
  PROTEIN,
  FAT,
  MILK,
  VEGGIE
} = require('./constants');

const foods = [{
  name: 'Chorizo and Egg Tacos (x2)',
  meal: [BREAKFAST, LUNCH],
  satisfies: [STARCH, STARCH, PROTEIN, PROTEIN, PROTEIN, FAT]
}, {
  name: 'Almonds',
  meal: [BREAKFAST, LUNCH, DINNER, SNACK],
  satisfies: [FAT]
}, {
  name: 'Greek Yogurt',
  meal: [BREAKFAST, LUNCH, DINNER, SNACK],
  satisfies: [MILK]
}, {
  name: 'Carrots',
  meal: [BREAKFAST, LUNCH, DINNER, SNACK],
  satisfies: [VEGGIE]
}]

module.exports = foods;