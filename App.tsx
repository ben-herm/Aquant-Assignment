import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Home } from '@/screens';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Home />
    </GestureHandlerRootView>
  );
};

export default App;
