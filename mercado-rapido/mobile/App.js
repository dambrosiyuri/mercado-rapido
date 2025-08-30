import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`${Constants.expoConfig.extra.apiBaseUrl}/`)
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(err => setStatus('❌ Backend offline'));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mercado Rápido</Text>
      <Text>Status: {status}</Text>
      <FlatList
        data={[{ key: 'Leite' }, { key: 'Arroz' }, { key: 'Banana' }]}
        renderItem={({ item }) => <Text>🛒 {item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
