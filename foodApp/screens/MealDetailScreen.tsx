import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation';

import { MEALS } from '../data/dummy-data'; 

export function MealDetailScreen (props: { navigation: { popToTop: () => void, 
getParam: (item: string) => string; }}) {
  const { navigation } = props
  const mealId = navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button title="Go back to Categories" onPress={()=> {
        props.navigation.popToTop(); // -- volta pra raiz da pilha navegacao
        // props.navigation.replace('CategoryMeals');  //<!> subtitui a navegacao e apaga historico a stack;
      }} />
    </View>
  )
}

MealDetailScreen.navigationOptions = (navigationData: any) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
