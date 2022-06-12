import React from 'react';
import { ScrollView, } from 'react-native';
import { ArticleScreenCard } from '@/components/ArticleScreenCard';
import { theme } from '@/theme';

export const Article = ({ route }: any) => {
    const { item } = route.params;
    return (
        <ScrollView style={{ backgroundColor:theme.light.colors.background, }}>
            <ArticleScreenCard item={item} />
        </ScrollView>
    )
}
