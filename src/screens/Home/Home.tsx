import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';

export function Home() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[typography.title, { color: colors.text }]}>
        {'Welcome'} {'Home'}
      </Text>
    </View>
  );
}