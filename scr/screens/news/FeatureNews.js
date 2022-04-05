import React from "react";
import {StyleSheet} from 'react-native';
import { exp } from "react-native/Libraries/Animated/Easing";
import BlockCard from "./BlockCard";

const FeatureNews = ({item}) => {
    return <BlockCard item={item}/>
}

export default FeatureNews;