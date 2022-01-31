import React from 'react'
import { OpaqueColorValue, Platform, StatusBar, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import { CategoriesScreen } from '../screens/CategoriesScreen';
import { CategoryMealsScreen } from '../screens/CategoryMealsScreen';
import { MealDetailScreen } from '../screens/MealDetailScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';


const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
  headerTitle: 'Screen'
};

const optsNavigation = {
  
  initialRouteName: "Categories",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
    headerTitle: 'Screen'
  },
  module: 'modal',  //mode = animation
}

const MealsNavigator = createStackNavigator({
  Categories: { screen: CategoriesScreen, navigationOptions: { headerShown: true } },
  CategoryMeals: { screen: CategoryMealsScreen, navigationOptions: { headerShown: true } },
  MealDetail: { screen: MealDetailScreen, navigationOptions: { headerShown: true }
}}, optsNavigation);

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen  
}, { defaultNavigationOptions: defaultStackNavOptions });


const tabScreenConfig = {
  Meals: { screen: MealsNavigator, navigationOptions: {
    tabBarLabel: Platform.OS ==='android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>: 'Meals',
    tabBarIcon: (tabInfo: { tintColor: string | OpaqueColorValue }) => { 
      return (
        <Ionicons
          name='ios-restaurant'
          size={24}
          color={tabInfo.tintColor}
        />
      );
    },
      tabBarColor: Colors.primaryColor,
    }
  },
  Favorites: { screen: FavNavigator, navigationOptions: {
    tabBarLabel: Platform.OS ==='android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text>: 'Meals',
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
      labelStyle: {
        fontFamily: 'open-sans-bold'
      },
      activeTintColor: Colors.accentColor
    }
  });

  const FiltersNavigator = createStackNavigator(
    {
      Filters: FiltersScreen
    }, 
    { 
      // navigationOptions: {
      //   drawerLabel: 'Filters!!'
      // },
      defaultNavigationOptions: defaultStackNavOptions 
    }
  );

const MainNavigator = createDrawerNavigator({
  MealsFavs: { screen: MealsFavTabNavigator, navigationOptions:
    {
    drawerLabel: 'Meals'
    }
  },
  Filters: { screen: FiltersNavigator, navigationOptions: 
    {
    drawerLabel: 'Filters'
    }
  }
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    itemsContainerStyle: {
      marginTop: StatusBar.currentHeight
    }
  }
})

export default createAppContainer(MainNavigator);