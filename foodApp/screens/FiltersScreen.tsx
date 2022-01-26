import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components';
import { navDataModel } from '../models/navData';

export default function FiltersScreen() {
  return (
    <View>
      <Text>the Filter Screen</Text>
    </View>
  )
}

FiltersScreen.navigationOptions = (navData: navDataModel) => {
  return {
  headerTitle: 'Filter Meals',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item 
        title="Menu"
        iconName='ios-menu'
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>)
}};

const styles = StyleSheet.create({})
