import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskManager from './src/components/TaskManager';
import CardList from './src/components/CardList';

const Stack = createNativeStackNavigator();
const NavigationPage=()=>{
    return(
         <NavigationContainer>
            <Stack.Navigator>
            
             
                <Stack.Screen name="CreatePage" component={ TaskManager } options={{headerShown:false}}/>
                <Stack.Screen name="ListPage" component={CardList} options={{headerShown:false}}/>

              
                

            </Stack.Navigator>
         </NavigationContainer>
    );
};
export default NavigationPage