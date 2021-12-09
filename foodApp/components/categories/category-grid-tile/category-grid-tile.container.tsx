import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, GestureResponderEvent, TouchableNativeFeedback, Platform } from 'react-native';

interface CategoryGridTileProps {
  title: string,
  color: string,
  onSelect: ((event: GestureResponderEvent) => void) | undefined 
}

export function CategoryGridTile(props: CategoryGridTileProps) {
  let TouchableCmp = TouchableOpacity

  if(Platform.OS === 'android' && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback;
  }
  
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{flex: 1,}}
        onPress={props.onSelect}>
        <View style={{...styles.container,...{ backgroundColor: props.color }}}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
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
    
    color:  'white',
    fontSize: 20
  }
})
