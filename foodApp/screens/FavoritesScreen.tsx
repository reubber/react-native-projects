import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CustomHeaderButton, MealList } from '../components'
import { MEALS } from '../data/dummy-data'
import { navDataModel } from '../models/navData'
export function FavoritesScreen (props:any) {
  const favMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id ==='m2' )
  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation}
    />
  )
}

FavoritesScreen.navigationOptions = (navData: navDataModel) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
          title="Menu"
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )}};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
