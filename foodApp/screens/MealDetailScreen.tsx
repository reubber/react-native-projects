import React from 'react';
import { Button, StyleSheet, View, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components';

import { MEALS } from '../data/dummy-data'; 
import { Text } from '../components';

const ListItem = (props: { children:React.ReactNode}) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  )
}
export function MealDetailScreen (props: { navigation: { popToTop: () => void, 
getParam: (item: string) => string; }}) {
  const { navigation } = props
  const mealId = navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <ScrollView>
      <Image
        source={{uri: selectedMeal?.imageUrl}}
        style={styles.image} 
      />
      <View style={styles.details}>
        <Text>{selectedMeal?.duration}m</Text>
        <Text>{selectedMeal?.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal?.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal?.ingredients.map((value) => {
        return (
          <ListItem key={value}>{value}</ListItem>
        )
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map((value) => {
        return (
          <ListItem key={value}>{value}</ListItem>
        )
      })}
      <View style={styles.screen}>
        <Text>{selectedMeal?.title}</Text>
        <Button title="Go back to Categories" onPress={()=> {
          props.navigation.popToTop(); // -- volta pra raiz da pilha navegacao
          // props.navigation.replace('CategoryMeals');  //<!> subtitui a navegacao e apaga historico a stack;
        }} />
      </View>
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = (navigationData: any) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Favorite' iconName='ios-star' onPress={()=>{
        console.log('Mark as favorite ')
      }} />
    </HeaderButtons>
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
})
