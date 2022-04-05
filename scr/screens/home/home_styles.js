import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    click: {
      fontSize: 20,
      fontWeight: "bold",
      width: 350,
      backgroundColor: 'black',
      color: 'white', 
      padding: 15,
      margin: 20,
      alignSelf:'center',
      textAlign: 'center'
    }
  });
  export default styles;