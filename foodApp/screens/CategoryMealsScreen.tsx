import React from 'react'
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealList } from '../components';

export function CategoryMealsScreen (props: { navigation: any; }) {
  const { navigation } = props;
  const catId = navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meals => meals.categoryIds.indexOf(catId) >= 0)

  return (
    <MealList
      listData={displayedMeals}
      navigation={navigation}
    />
  )
}

CategoryMealsScreen.navigationOptions = (navigationData : NavigationStackScreenProps) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  
  return {
    headerTitle: selectedCategory?.title
  }
}

