import { Category, CategoryClass } from "./category";

export interface MealModel {
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
  isVegeterian: boolean;
  isLactoseFree: boolean;
}

export class Meal {
  id: number;
  categoryIds: Array<string>;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: string;
  ingredients: Array<string>;
  steps: string;
  isGlutenFree: boolean;
  isVegan:boolean;
  isVegeterian: boolean;
  isLactoseFree: boolean;
  constructor(public props: MealModel) {
    this.id = props.id
    this.categoryIds = props.categoryIds;
    this.title = props.title
    this.affordability = props.affordability
    this.complexity = props.complexity
    this.imageUrl = props.imageUrl
    this.duration = props.duration
    this.ingredients = props.ingredients
    this.steps = props.steps
    this.isGlutenFree = props.isGlutenFree
    this.isLactoseFree = props.isLactoseFree
    this.isVegan = props.isVegan
    this.isVegeterian = props.isVegeterian
  }
}