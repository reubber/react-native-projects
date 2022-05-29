import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, GestureResponderEvent, TouchableNativeFeedback, Platform } from 'react-native';

interface CategoryGridTileProps {
  title: string,
  color: string,
  onSelect?: ((event: GestureResponderEvent ) => void) | undefined 
}

export const CategoryGridTile: React.FC<CategoryGridTileProps> = (props: CategoryGridTileProps) => {
  
  const TouchableCmp: React.ElementType = 
  Platform.OS === 'android' && Platform.Version >= 21 ? 
    TouchableNativeFeedback
    : TouchableOpacity;
  
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
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation:5,
  },
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    borderRadius:10,
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    
    color:  'white',
    fontSize: 20
  }
})
