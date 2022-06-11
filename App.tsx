import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import axios from 'axios';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{}}>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  title: {
    color: '#f0f8ff',
    fontSize: 32,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
