import { typography } from '@/theme';
import * as React from 'react';
import { Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
const { width } = Dimensions.get('window');
const CustomText = ({ txt, numberOfLines }: any) => {
    return (
        <Text style={{
            width: width,
            marginHorizontal: width * 0.03,
            marginVertical: width * 0.03,
            fontSize: typography.title.fontSize,
            fontWeight: 'bold',
            color: 'black',
            maxWidth: width * 0.85
        }}>{txt}</Text>
    );
};

export default CustomText;