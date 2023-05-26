// components/TaskManager.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../reducers/taskSlice';

const TaskManager = ({navigation}) => {
  // const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const handleCreateTask = ({navigation}) => {
    if (name.trim() !== '' && age.trim() !== '') {
      const newTask = {
        id: Date.now().toString(),
        name: name.trim(),
        age: age.trim(),
      };
      dispatch(addTask(newTask));
      setName('');
      setAge('');
     
      
    }
  };

  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = task => {
    setEditingTask(task);
    setName(task.name);
    setAge(task.age);
  };

  const handleUpdateTask = () => {
    if (name.trim() !== '' && age.trim() !== '') {
      const updatedTask = {
        id: editingTask.id,
        name: name.trim(),
        age: age.trim(),
      };
      dispatch(updateTask(updatedTask));
      setEditingTask(null);
      setName('');
      setAge('');
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setName('');
    setAge('');
  };

  const handleReadTask = () => {
    console.log(tasks);
  };

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.inp_1}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter name"
      />
      <TextInput
        style={styles.inp_2}
        value={age}
        onChangeText={text => setAge(text)}
        placeholder="Enter age"
        keyboardType="numeric"
      />
      {editingTask ? (
        <View>
          <Button title="Update" onPress={handleUpdateTask} />
          <Button title="Cancel" onPress={handleCancelEdit} />
        </View>
      ) : (
        <TouchableOpacity 
        style={styles.createbtn}
        onPress={handleCreateTask}>
          <Text>CREATE</Text>
        </TouchableOpacity> 
      )}
      <TouchableOpacity style={styles.createbtn}
      onPress={()=>{navigation.navigate('ListPage')}}
      >
        <Text>List</Text>
        </TouchableOpacity>

      {/* <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
        
          <View style={styles.card}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <TouchableOpacity   style={styles.deletebtn}
    
              onPress={() => handleDeleteTask(item.id)}>
                <Text style={styles. deletetxt}>DELETE</Text>
              </TouchableOpacity>
               <TouchableOpacity      style={styles.editbtn} 
               onPress={() => handleEditTask(item)} >
                <Text style={styles. deletetxt}>EDIT</Text>
                </TouchableOpacity>
          </View>
         
        )}
      /> */}
    </View>
  );
};

export default TaskManager;

const styles= StyleSheet.create({
  createbtn:{
    height:50,
    width:300,
    backgroundColor:'white',
    marginTop:20,
    borderRadius:20,
    paddingTop:15,
    paddingLeft:120,
    marginLeft:35
  },
  container:{
    flex:1,
    padding:20,
    backgroundColor:'pink'
  },
  inp_1:{
    // marginTop:210,
    borderWidth:1,
    borderColor:'white',
    marginBottom:20,
    borderRadius:8

  },
  inp_2:{
    borderWidth:1,
    borderColor:'white',
    borderRadius:8

  },
  card:{
    height:120,
    width:200,
    borderColor:'white',
    borderWidth:2,
    marginTop:25,
    marginLeft:80

  },
  editbtn:{
    backgroundColor:'white',
    height:35,
    marginTop:5
  },
  deletebtn:{
    backgroundColor:'white',
    height:35,
    marginTop:5

  },
  deletetxt:{
    textAlign:'center'
  }
})


