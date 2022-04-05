
import React from "react";
import { Text} from 'react-native';

const Title = ({children,  numberOfLine = 2, size =18}) => {
    return (
        <Text numberOfLines={numberOfLine} style={{fontWeight: 'bold' ,fontSize: size}}>
            {children}
        </Text>
    )
};

export default Title;
