import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { AppNavigator } from '@/navigation/AppNavigator';
import { theme } from '@/theme';

export function RootNavigator() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme ?? 'light']} >
      <AppNavigator />
    </NavigationContainer>
  );
}
