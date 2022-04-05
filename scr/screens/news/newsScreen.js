
import React from "react";
import {View, StyleSheet, ScrollView} from 'react-native';

const Screen = ({children}) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
};

export default Screen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: 'grey',
        flex: 1,
    },
})