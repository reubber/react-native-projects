import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export function CategoriesScreen (props: any) {
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button title="go to Meals" onPress={()=>{
        navigation.navigate({routeName: 'CategoryMeals'});
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
