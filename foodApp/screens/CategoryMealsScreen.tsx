import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/Colors';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { IMeal } from '../models/meal';


export function CategoryMealsScreen (props: { navigation: any; }) {
  const { navigation } = props;
  const catId = navigation.getParam('categoryId');

  const renderMealItem = (itemData: IMeal) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    )
  } 
  

  const displayMeals = MEALS.filter(
    meals => meals.categoryIds.indexOf(catId) >= 0)

  return (
    <View style={styles.screen}>
      <FlatList data={displayMeals}
        keyExtractor={(item, _) => item.id}
        renderItem={renderMealItem}
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
