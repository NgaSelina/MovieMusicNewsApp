import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');
const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#222831"
    },
    mainContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer:{
        flexDirection:'row',
        borderTopColor: '#393E46',
        borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        justifyContent: 'space-around'
    },
    artworkWrapper:{
        width: 300,
        height: 340,
        marginBottom: 25,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius:3.84,
        elevation: 5
    },
    artworkImag:{
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    artist:{
        fontSize: 16,
        color: '#EEEEEE',
        fontWeight: '200',
        textAlign:'center',
    },
    title: {
        fontSize: 18,
        color: '#EEEEEE',
        fontWeight: '600',
        textAlign:'center',
    },
    progressContainer:{
        width: 350,
        height: 40,
        margin: 10,
        flexDirection: 'row'
    },
    lableContainer:{
        width: 340,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    lableContainerTxt:{
        color: '#fff'
    },
    musicControlls:{
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'center'
    },
    playSkip:{
        width: 20,
        height: 20,
    },
    playSkipSong:{
        width: 40,
        height: 40,
    },
    playSkipPauseSong:{
        width: 60,
        height: 60,
    }

});
export default styles;