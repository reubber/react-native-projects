import React from 'react'
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';

import { CategoriesScreen } from '../screens/CategoriesScreen';
import { CategoryMealsScreen } from '../screens/CategoryMealsScreen';
import { MealDetailScreen } from '../screens/MealDetailScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';

const optsNavigation = {
  
  initialRouteName: "Categories",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
    headerTitle: 'Screen'
  },
  module: 'modal'  //mode = animation
}

const MealsNavigator = createStackNavigator({
  Categories: { screen: CategoriesScreen, navigationOptions: { headerShown: true } },
  CategoryMeals: { screen: CategoryMealsScreen, navigationOptions: { headerShown: true } },
  MealDetail: { screen: MealDetailScreen, navigationOptions: { headerShown: true }
}}, optsNavigation);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: { screen: MealsNavigator, navigationOptions: {
    tabBarLabel: 'Meals',
    tabBarIcon: (tabInfo) => { 
      return (
        <Ionicons
          name='ios-restaurant'
          size={24}
          color={tabInfo.tintColor}
        />
      )}
  }},
  Favorites: { screen: FavoritesScreen, navigationOptions: {
    tabBarLabel: 'Favorites!',
    tabBarIcon: (tabInfo) => { 
      return (
        <Ionicons
          name='ios-star'
          size={24}
          color={tabInfo.tintColor}
        />
      )}
  }}
}, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
}
);

export default createAppContainer(MealsFavTabNavigator);