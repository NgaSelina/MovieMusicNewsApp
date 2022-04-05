import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HOME from './scr/screens/home/home';
import MOVIE from './scr/screens/movie/movies';
import MusicPlayer from './scr/screens/music/music';
import newsApp from './scr/screens/news/newsApp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={HOME} options={{ title: 'HOME', headerStyle: {backgroundColor: 'grey'}, headerTitleStyle:{color:'black'} }}/>
        <Stack.Screen name="Movie" component={MOVIE} options={{title: 'MOVIES',headerStyle: {backgroundColor: 'grey'}, headerTitleStyle:{color:'black'} }} />
        <Stack.Screen name="Music" component={MusicPlayer} options={{title: 'MUSIC PLAYER',headerStyle: {backgroundColor: '#222831'}, headerTitleStyle:{color:'black'}}} />
        <Stack.Screen name="News" component={newsApp} options={{title: 'NEWS',headerStyle: {backgroundColor: 'grey'}, headerTitleStyle:{color:'black'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

