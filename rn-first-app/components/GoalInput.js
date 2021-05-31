import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Button, Modal } from 'react-native'


function GoalInput(props) {

  const [enteredGoals, setEnteredGoals] = useState('')
 

  const goalInputHandle = function (goal){
    setEnteredGoals(goal)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoals)
    setEnteredGoals('')
  }

  
  
  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.mainView}>
        <TextInput
          placeholder="Course goal"
          style={styles.goalsInput}
          onChangeText={goalInputHandle} 
          value={enteredGoals}
        />

        <View style={styles.nestedButtons}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancelGoal}/>
          </View>
        </View> 

      </View>
    </Modal>
  )}

  const styles = StyleSheet.create({
    mainView: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    goalsInput: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
    },

    button: {
      width: '40%'
      
    },

    nestedButtons: {
      flexDirection: 'row',
      justifyContent:'space-around',
      width: '60%'
    }
  })


export default GoalInput