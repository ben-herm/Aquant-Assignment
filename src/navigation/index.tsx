import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { theme } from '@/theme';
import { HomeNavigator } from '@/navigation/HomeNavigator';

export function RootNavigator() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme ?? 'light']}>
      { <HomeNavigator />}
    </NavigationContainer>
  );
}