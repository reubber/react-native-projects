import React from 'react'
import { OpaqueColorValue, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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

const tabScreenConfig = {
  Meals: { screen: MealsNavigator, navigationOptions: {
    tabBarLabel: 'Meals',
    tabBarIcon: (tabInfo: { tintColor: string | OpaqueColorValue }) => { 
      return (
        <Ionicons
          name='ios-restaurant'
          size={24}
          color={tabInfo.tintColor}
        />
      );
    },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: { screen: FavoritesScreen, navigationOptions: {
    tabBarLabel: 'Favorites!',
    tabBarIcon: (tabInfo: { tintColor: string | OpaqueColorValue }) => { 
      return (
        <Ionicons
          name='ios-star'
          size={24}
          color={tabInfo.tintColor}
        />
      );
    },
    tabBarColor: Colors.accentColor
  }}
}

const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: 'white',
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
  })
  : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  });

export default createAppContainer(MealsFavTabNavigator);