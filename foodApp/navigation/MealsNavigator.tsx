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
  Categories: { screen: CategoriesScreen },
  CategoryMeals: { screen: CategoryMealsScreen },
  MealDetail: { screen: MealDetailScreen, navigationOptions: { headerShown: false }
}}, optsNavigation);

export default createAppContainer(MealsNavigator);