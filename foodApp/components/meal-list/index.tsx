import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { IMeal } from '../../models/meal';
import { MealItem } from '../meal-item';

export function MealList(props:any) {
  const renderMealItem = (itemData: IMeal) => {
  const { navigation } = props;  

    return (
      <MealItem 
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelectMeal={()=>{
          navigation.navigate({routeName: 'MealDetail',
          params: {
            mealId: itemData.item.id
          }});
        }} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    )
  } 
  
  return (




    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, _) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
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
});
