import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { CategoriesScreen } from '../screens/CategoriesScreen';
import { CategoryMealsScreen } from '../screens/CategoryMealsScreen';
import { MealDetailScreen } from '../screens/MealDetailScreen';

const optsNavigation = {
  initialRouteName: "Categories"
}
const MealsNavigator = createStackNavigator({
  Categories: { screen: CategoriesScreen },
  CategoryMeals: { screen: CategoryMealsScreen },
  MealDetail: { screen: MealDetailScreen, navigationOptions: { headerShown: false }

}}, optsNavigation);

export default createAppContainer(MealsNavigator);