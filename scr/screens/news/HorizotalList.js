import React from "react";
import { FlatList} from 'react-native';
import Title from './Title';
import SmallCard from './SmallCard';

const HorizotalList = ({title, data}) => {
    return (
        <>
            <Title size={20}>{title}</Title>
            <FlatList data={data} 
                keyExtractor={item =>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=><SmallCard item={item}/>}/>
        </>
         
    )
}

export default HorizotalList;