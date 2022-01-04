import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MealList } from '../components'
import { MEALS } from '../data/dummy-data'
export function FavoritesScreen (props:any) {
  const favMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id ==='m2' )
  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation}
    />
  )
}

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
