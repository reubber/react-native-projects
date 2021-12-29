import React from 'react'
import { StyleSheet, Text, View, Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { HeaderButton } from 'react-navigation-header-buttons'
import Colors from '../../../constants/Colors'


export function CustomHeaderButton (props: any) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={22}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}/>
  )
}

const styles = StyleSheet.create({})
