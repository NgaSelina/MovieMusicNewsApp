import React from "react";
import { Text,SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./home_styles";


const HOME = () => {

    const { navigate } = useNavigation();

  return (
      <SafeAreaView>
          <TouchableOpacity  onPress = { () => {navigate('Movie')}}>
              <Text style={styles.click}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress = { () => {navigate('Music')}}>
              <Text style={styles.click}>Musics</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress = { () => {navigate('News')}}>
              <Text style={styles.click}>News</Text>
          </TouchableOpacity>

      </SafeAreaView>
  );
};

export default HOME;