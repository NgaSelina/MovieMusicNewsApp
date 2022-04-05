import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    title:{
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      backgroundColor:'#969696',
      padding: 10,
      textAlign: 'center',
      borderRadius: 10,
      marginBottom: 10,
    },
    renderitem:{
      flexDirection: 'column',
      alignSelf: 'center',
    },
    list: {
      marginBottom: 40,
    },
    image: {
      width: 330,
      height: 220,
      //backgroundColor: 'red',
    },
    input: {
      height: 50,
      margin: 24,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#fff'
    },
  });
export default styles;