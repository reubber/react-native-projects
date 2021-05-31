import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  
  const addGoalHandler = (goalTitle) => {
    
    if(goalTitle.length === 0) {
      return;
    }

    setCourseGoals((currentGoals)=> [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = goalId => {
    setCourseGoals((currentGoals => 
      currentGoals.filter((goal) => goal.id !== goalId)
    ))
  }

  const cancelAddGoalHandler = () => {
    setIsAddMode(false)
  }



  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={()=>setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelAddGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={ itemData => 
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />}  
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '14%'
  },
});
