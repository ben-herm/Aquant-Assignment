import React from 'react';
import { RootNavigator } from '@/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
const App: React.FC = () => {
  return (
      <PaperProvider>
          <RootNavigator />
      </PaperProvider>
  );
};
export default App;
