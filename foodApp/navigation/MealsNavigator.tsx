import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';

import { CategoriesScreen } from '../screens/CategoriesScreen';
import { CategoryMealsScreen } from '../screens/CategoryMealsScreen';
import { MealDetailScreen } from '../screens/MealDetailScreen';

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

export default createAppContainer(MealsNavigator);