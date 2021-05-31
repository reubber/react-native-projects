import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'



const generateRandomBetween = (min, max, exclude) =>  {
  min=Math.ceil(min)
  max=Math.floor(max)

  const rndNumber = Math.floor(Math.random() * (max - min))+min
  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  }else {
    return rndNumber
  }
}


export default function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, props.userChoice))
  return (
    <View></View>
  )
}

const styles = StyleSheet.create({})
