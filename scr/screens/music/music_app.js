import React from "react";
import { View ,StyleSheet, StatusBar} from "react-native";
import { exp } from "react-native/Libraries/Animated/Easing";

import MusicPlayer from "./music";

const AppMusic = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <MusicPlayer/>
        </View>
    );
};
export default AppMusic;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})