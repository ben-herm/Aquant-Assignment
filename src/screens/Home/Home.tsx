import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';
import {NewsController } from '@/controllers/newsController';

export function Home() {
  const { colors } = useTheme();
  const newsController = new NewsController();

  useEffect(()=> {
    newsController.getNews()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={[typography.title, { color: colors.text }]}>
        {'Welcome'} {'Home'}
      </Text>
    </View>
  );
}