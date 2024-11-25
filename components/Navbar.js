import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <View style={styles.navbar}>
      {!isHome && (
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>DigiFlix</Text>
      <View style={{ width: 60 }} /> {/* Espaço para alinhar o título no centro */}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#4F46E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  backText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Navbar;