import React from 'react';
import { StyleSheet, Text, View, GestureResponderEvent, Platform, Pressable } from 'react-native';

interface CategoryGridTileProps {
  title: string,
  color: string,
  onSelect?: ((event: GestureResponderEvent ) => void) | undefined 
}

export const CategoryGridTile: React.FC<CategoryGridTileProps> = (props: CategoryGridTileProps) => {
  
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({pressed}: any) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={props.onSelect}>
        <View style={[styles.container, {backgroundColor: props.color}]}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',   // no ios é necessario pois a sombra
    elevation: 4,
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    borderRadius:8,
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color:  'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})
