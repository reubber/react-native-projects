class Meal {
  id: number;
  categoryIds: Array<string>;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: string;
  ingredients: Array<any>;
  steps: string;
  isGlutenFree: boolean;
  isVegan:boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
