import { theme } from '@/theme';
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    TouchableNativeFeedback,
} from 'react-native';
import { getRandomColor } from '@/utils/ui_utils'
const { width, height } = Dimensions.get('window');

export const ArticleCard = ({ item, onPress,backgroundColor }: any) => {
    return (
        <View>
            <TouchableNativeFeedback onPress={onPress}>
                <View style={{
                    margin: 20,
                    borderRadius: 15,
                    backgroundColor: backgroundColor,
                    height: 290,
                    overflow: 'hidden',
                    elevation: 3
                }}>

                    <Text style={{
                        width: width,
                        marginHorizontal: width * 0.03,
                        marginVertical: width * 0.03,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: theme.light.colors.primary,
                        maxWidth: width * 0.85
                    }} numberOfLines={2}>{item.name}</Text>
                    <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}
const styles = StyleSheet.create({
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

