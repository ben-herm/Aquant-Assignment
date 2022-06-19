import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';
import CustomText from './CustomText';
import {typography } from '@/theme';
import { getRandomColor } from '@/utils/ui_utils';
const { width, height } = Dimensions.get('window');
interface ArticleScreenCardProps {
    item: {
        name: string
        description: string
    },
    onPress?: () => void | null,
    backgroundColor?: string
}

export const ArticleScreenCard:React.FC<ArticleScreenCardProps> = ({ item }: any) => {
    const { description, ...rest } = item
    
    return (
        <View style={{
            margin: 20,
            borderRadius: 15,
            backgroundColor: getRandomColor(),
            height: height,
            overflow: 'hidden',
            elevation: 3
        }}>
            {Object.keys(rest).map(key => {
                return <CustomText txt={`${key}: ${item[key]}`} />
            })}
            <Text  style={{
           width: width,
           marginHorizontal: width * 0.03,
           marginVertical: width * 0.03,
           fontSize: typography.caption.fontSize,
           fontWeight: 'bold',
           color: 'black',
           maxWidth: width * 0.85
        }}>{'Description: ' + description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.15,
    },
    descriptionTextStyle: {
        width: width,
        marginHorizontal: width * 0.03,
        marginVertical: width * 0.03,
        fontSize: typography.caption,
        fontWeight: 'bold',
        color: 'black',
        maxWidth: width * 0.85
    },
    desc: {
        width: width,
        marginTop: 5,
        marginHorizontal: width * 0.03,
        color: 'gray',
        maxWidth: width * 0.8
    }
})

