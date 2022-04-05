import React from "react";
import {View , StyleSheet, Dimensions} from 'react-native';

import BlockCard from "./BlockCard";

const {width} = Dimensions.get('window')

const SmallCard = ({item}) => {
    return  <BlockCard item={item} style={styles.container} imagestyle={styles.image}/>
}

const styles = StyleSheet.create({
    container:{
        width: width/2,
        marginRight: 10,
        height: 250,
    },
    image: {
        height: 150,
    }
})

export default SmallCard;