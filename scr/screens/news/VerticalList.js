import React from "react";
import { StyleSheet, View} from 'react-native';
import Title from './Title';
import FlatCard from './FlatCard';

const VerticalList = ({title, data}) => {
    return (
        <View>
            <Title size={20}>{title}</Title>
            <View style={styles.container}>
                {data.map(item => (
                    <FlatCard item={item} key={item.id} />
                ))}
            </View>
        </View>
         
    );
};
 const styles = StyleSheet.create({
     container:{
         marginVertical: 10,
     }
 })

export default VerticalList;