import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#D9653B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: '#262626',
    fontSize: 18
  }
})



