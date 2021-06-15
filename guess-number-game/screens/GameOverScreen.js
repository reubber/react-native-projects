import React from 'react'
import { StyleSheet, Text, View , Button, Image} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          //source={require('../assets/success.png')}
          source={{uri:'https://cdn.ome.lt/nnGzO935tGN0kYssSL8z5n1gLQw=/770x0/smart/uploads/conteudo/fotos/Finish_Him.gif'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <BodyText>Number of rounds: {props.roundNumber}</BodyText>
      <BodyText>Number war: {props.userNumber}</BodyText>
      <MainButton onPress={props.onRestart}>New game</MainButton>
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
