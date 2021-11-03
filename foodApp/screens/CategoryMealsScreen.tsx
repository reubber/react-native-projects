import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export function CategoryMealsScreen (props: { navigation: any; }) {
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Button title="go to Meals detail" onPress={()=>{
        navigation.navigate({routeName: 'MealDetail'});
      }} />
      <Button title="Go back" onPress={()=> {
        navigation.goBack();
      }}
      />
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
