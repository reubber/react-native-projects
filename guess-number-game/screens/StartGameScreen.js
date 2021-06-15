import React, {useState} from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Button,
  Alert

} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'


export default function StartGameScreen(props) {
  const [confirmed, setConfirmed] = useState(false)
  const [enteredValue, setEnteredValue] = useState('')
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if ( isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
      Alert.alert(
        'invalid number!',
        'number has to be a number between 1 an 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return
    } 
    setConfirmed(true)
    setSelectedNumber(parseInt(chosenNumber))
    setEnteredValue('')
    Keyboard.dismiss()
  }

  let confimedOutPut;

  if(confirmed){
    confimedOutPut = (
    <Card style={styles.summaryContainer}>
      <BodyText>You selected</BodyText>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <MainButton 
        onPress={()=>props.onStartGame(selectedNumber)}>
          Start Game
      </MainButton>
    </Card>
    )}

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.screen}>
        <TitleText style={styles.title}> Start a new Game </TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2} 
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
        
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button style={styles.button} title="Reset" onPress={resetInputHandler} color={Colors.secondary} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primaryStrong}/>
            </View>
          </View>
        </Card>
        {confimedOutPut}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily:'open-sans-bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
})
