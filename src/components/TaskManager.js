import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../reducers/taskSlice';

const TaskManager = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  
const handleCreateTask = () => {
    if (name.trim() !== '' && age.trim() !== '') { //textinput should not be empty
      const newTask = {
        id: Date.now().toString(),
        name: name.trim(),
        age: age.trim(),
      };
  
      dispatch(addTask(newTask));
      setName(''); // after creating handle task to make an txtinput empty
      setAge('');
     
      
    }
  };

  // const handleCreateTask = () => {
  //   dispatch(addTask({id:Date.now.toString(),name,age}));
  //   setName('');
  //   setAge('');
   
  // };

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
        <TouchableOpacity 
        style={styles.createbtn}
        onPress={handleCreateTask}>
          <Text>CREATE</Text>
        </TouchableOpacity> 
   
      <TouchableOpacity style={styles.createbtn}
      onPress={()=>{navigation.navigate('ListPage')}}
      >
        <Text>List</Text>
        </TouchableOpacity>
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


