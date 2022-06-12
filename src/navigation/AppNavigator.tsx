import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';
import { Article } from '@/screens/Article/Article';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false }} name={NAVIGATION.home} component={Home} />
      <Stack.Screen options={{ title: '' }} name={NAVIGATION.article} component={Article} />
    </Stack.Navigator>
  );
}
