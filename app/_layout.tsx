import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <SafeAreaProvider>
      <Navbar />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
};

export default Layout;
