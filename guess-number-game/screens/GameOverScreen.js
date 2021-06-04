import React from 'react'
import { StyleSheet, Text, View , Button, Image} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <BodyText>Number of rounds: {props.roundNumber}</BodyText>
      <BodyText>Number war: {props.userNumber}</BodyText>
      <Button title="NE GAME" onPress={props.onRestart}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer:{
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%',
  }
})