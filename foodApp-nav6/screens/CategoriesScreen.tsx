import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data'
import { CategoryGridTile } from '../components'
import { Category } from '../models/category'

type itemCategory = {
  item: Category
}

function renderCategoryItem(itemData: itemCategory) {
  const { item } = itemData;
  return <CategoryGridTile
    title={item.title}
    color={item.color}     
  />
}

export function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({})