import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function CategoriesMealsScreen (props) {

  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
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
