import React from 'react'
import { Switch, StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Text, CustomHeaderButton } from '../components';
import { navDataModel } from '../models/navData';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return(
    <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          trackColor={{
            true: Colors.primaryColor
          }}
          thumbColor={Colors.primaryColor}
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
  )
}
export default function FiltersScreen() {
  const [isGlutenFree, setIsGlutenFree] = React.useState(false);
  const [isLactoseFree, setIsLactoseFree] = React.useState(false)
  const [isVeganoFree, setIsVeganoFree] = React.useState(false)
  const [isVegetarianoFree, setIsVegetarianoFree] = React.useState(false)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filtros / Restrições</Text>
      <FilterSwitch 
        state={isGlutenFree}
        onChange={(newValue: boolean) => setIsGlutenFree(newValue)}
        label="Gluten-free"
      />
      <FilterSwitch 
        state={isLactoseFree}
        onChange={(newValue: boolean) => setIsLactoseFree(newValue)}
        label="Lactose-free"
      /> 
      <FilterSwitch 
        state={isVeganoFree}
        onChange={(newValue: boolean) => setIsVeganoFree(newValue)}
        label="Vegano"
      /> 
      <FilterSwitch 
        state={isVegetarianoFree}
        onChange={(newValue: boolean) => setIsVegetarianoFree(newValue)}
        label="Vegetariano"
      />  
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 5
  }

})
