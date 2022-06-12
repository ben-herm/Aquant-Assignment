import * as React from 'react';
import { Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
const { width } = Dimensions.get('window');
const CustomText = ({ txt }: any) => {
    return (
        <Text style={{
            width: width,
            marginHorizontal: width * 0.03,
            marginVertical: width * 0.03,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            maxWidth: width * 0.85
        }} numberOfLines={2}>{txt}</Text>
    );
};

export default CustomText;