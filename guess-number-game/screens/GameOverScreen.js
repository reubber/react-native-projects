import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native'

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>the Game is Over</Text>
      <Text>Number of rounds: {props.roundNumber}</Text>
      <Text>Number war: {props.userNumber}</Text>
      <Button title="NE GAME" onPress={props.onRestart}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
