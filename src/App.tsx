/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserList from './components/user/userList';
import UserProfile from './components/user/userProfile';
import ChartFollower from './components/user/chartFollowers';

const Stack = createStackNavigator();

const withArrowLeft = {
  headerBackImage: () => <Text style={{color: '#FFF'}}>Atras</Text>
}

function App(): React.JSX.Element {
 
  return (
    <NavigationContainer>
        <StatusBar
          backgroundColor='#111'
          barStyle="light-content"
        />
        <Stack.Navigator initialRouteName="userList"
          screenOptions={{
            headerStyle: {
              elevation: 0,
              backgroundColor: '#111',
              borderBottomWidth: 0,
              shadowOpacity: 0
            },
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            cardStyle: { backgroundColor: '#FFF' }
          }}
        >
          <Stack.Screen name="userList" component={UserList} options={{ title: 'Double V Users' }} />
          <Stack.Screen name="profile" component={UserProfile} options={{ title: 'Double V User',...withArrowLeft }} />
          <Stack.Screen name="chartFollower" component={ChartFollower} options={{ title: 'Double V Seguidores',...withArrowLeft }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
