import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableNativeFeedback,
    GestureResponderEvent,
} from 'react-native';
import CustomText from './CustomText';
const { width, height } = Dimensions.get('window');

interface ArticalCardProps {
    item: {
        name: string
        description: string
    },
    onPress: () => void,
    backgroundColor: string
}

export const ArticleCard: React.FC<ArticalCardProps> = ({ item, onPress, backgroundColor }) => {
    return (
        <View>
            <TouchableNativeFeedback onPress={onPress}>
                <View style={{ ...styles.container, backgroundColor: backgroundColor, }}>
                    <CustomText txt={`name: ${item.name}`} />
                    <Text style={styles.desc}>{item.description}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}
const styles = StyleSheet.create({
    container:
    {
        margin: 20,
        padding:10,
        borderRadius: 15,
        height: 220,
        overflow: 'hidden',
        elevation: 3
    },
    image: {
        width: width,
        height: height * 0.15,
    },
    author: {
        width: width,
        marginTop: -10,
        marginHorizontal: width * 0.03,
        color: 'darkgray'
    },
    desc: {
        width: width,
        marginTop: 5,
        marginHorizontal: width * 0.03,
        color: 'gray',
        maxWidth: width * 0.8
    }
})

