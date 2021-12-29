import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/Colors';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { IMeal } from '../models/meal';
import { MealItem } from '../components';

export function CategoryMealsScreen (props: { navigation: any; }) {
  const { navigation } = props;
  const catId = navigation.getParam('categoryId');

  const renderMealItem = (itemData: IMeal) => {
    
    return (
      <MealItem 
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelectMeal={()=>{
          navigation.navigate({routeName: 'MealDetail',
          params: {
            mealId: itemData.item.id
          }});
        }} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    )
  } 
  
  const displayMeals = MEALS.filter(
    meals => meals.categoryIds.indexOf(catId) >= 0)

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, _) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = (navigationData : NavigationStackScreenProps) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  
  return {
    headerTitle: selectedCategory?.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
