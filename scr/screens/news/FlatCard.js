
import React from "react";
import {View, StyleSheet, Image} from 'react-native';
import SubTitle from "./SubTitle";
import Title from './Title'

const FlatCard = ({style, imagestyle, item}) => {
    const {thumbnail, title, desc} =item;
    return (
        <View style={[styles.container, style]}>
            <Image source={{uri: thumbnail}} style={[styles.image, imagestyle]}/>
            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <SubTitle>{desc}</SubTitle>
            </View>
        </View>
    )
};

export default FlatCard;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 10,
        height:100,
    },
    image:{
        flex: 0.35,
        height: '100%',
    },
    contentContainer:{
        flex: 0.65,
        paddingHorizontal: 5,
    }
})