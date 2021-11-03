import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export function MealDetailScreen (props: { navigation: { popToTop: () => void; }; }) {

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Button title="Go back to Categories" onPress={()=> {
        props.navigation.popToTop(); // -- volta pra raiz da pilha navegacao
        // props.navigation.replace('CategoryMeals');  //<!> subtitui a navegacao e apaga historico a stack;
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
