import React from 'react'
import { 
  StyleSheet, 
  Text, View, 
  FlatList,  
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import { CategoryGridTile } from '../components';
import { atan } from 'react-native-reanimated';
export function CategoriesScreen (props: any) {
  const { navigation } = props;
  
  const renderGridItem = (itemData : any) => {
    return (
      <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={()=> {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            }
          })
        }}   
      />

    ) 
  }


  return (
    <FlatList
      keyExtractor={(item, index) => item.id }
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
 
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
})
