import React from 'react'
import { 
  StyleSheet, 
  Text, View, 
  FlatList, 
  TouchableOpacity, 
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

export function CategoriesScreen (props: any) {
  const { navigation } = props;
  
  const renderGridItem = (itemData : any) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={ ()=> {
          navigation.navigate({routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
          }})
      }}> 
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  gridItem: {
    flex: 1,
  }
})
