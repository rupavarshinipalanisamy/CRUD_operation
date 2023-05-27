import { View, Text,FlatList,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../reducers/taskSlice';


const CardList = () => {
  
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const [editingTask, setEditingTask] = useState(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleDeleteTask = id => {
        dispatch(deleteTask(id));
      };

      const handleEditTask = task => {
        setEditingTask(task);
        setName(task.name);
        setAge(task.age);

      };
 
      
      const handleUpdateTask = () => {
        if (editingTask && name.trim() !== '' && age.trim() !== '') {
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
      
  return (
    <View style={styles.container}>

           {editingTask ? ( <View style={styles.card}>
            <TextInput placeholder='name'
            value={name}
            onChangeText={setName}
            ></TextInput>
            <TextInput placeholder='age'
             value={age}
             onChangeText={setAge}
            ></TextInput>
            <TouchableOpacity  onPress={handleUpdateTask}>
                <Text style={styles.updatebtn}>Update</Text>
            </TouchableOpacity>
    
          </View>
         
       
      ) : (
        null
      )}
        <FlatList
        data={tasks}
         keyExtractor={item => item.id}
         renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <TouchableOpacity style={styles.deletebtn} onPress={() => handleDeleteTask(item.id)}>
              <Text style={styles.deletetxt}>DELETE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editbtn} onPress={() => handleEditTask(item)}>
              <Text style={styles.deletetxt}>EDIT</Text>
            </TouchableOpacity>
          </View>
        )}
        
      /> 
    </View>
  )
}

export default CardList
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
      width:300,
      borderColor:'white',
      borderWidth:2,
      marginTop:25,
      marginLeft:50
  
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
    },
    container:{
        flex:1,
        backgroundColor:'pink'
    },
    updatebtn:{

    }

  })
