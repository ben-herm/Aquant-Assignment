import React from 'react';
import { ScrollView, } from 'react-native';
import { ArticleScreenCard } from '@/components/ArticleScreenCard';
import { theme } from '@/theme';
import { useTheme } from '@react-navigation/native';

export const Article = ({ route }: any) => {
    const { item } = route.params;
    const { colors } = useTheme();
    return (
        <ScrollView style={{ backgroundColor: colors.background, }}>
            <ArticleScreenCard item={item} />
        </ScrollView>
    )
}
