import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, GestureResponderEvent } from 'react-native';

interface CategoryGridTileProps {
  title: string,
  color: string,
  onSelect: ((event: GestureResponderEvent) => void) | undefined 
}

export function CategoryGridTile(props: CategoryGridTileProps) {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={props.onSelect}>
      <View style={{...styles.container,...{ backgroundColor: props.color }}}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius:10,
    elevation:3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    color:  'white',
    fontSize: 20
  }
})
