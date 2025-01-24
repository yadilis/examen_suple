import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const LoanScreen = () => {
  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [clientName, setClientName] = useState('');

  const handleLoan = () => {
    if (!bookId || !bookName || !clientName) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    Alert.alert('Éxito', `Préstamo registrado:\nLibro: ${bookName}\nCliente: ${clientName}`);
    
    setBookId('');
    setBookName('');
    setClientName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Préstamos</Text>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHlE7WSGnXZ0Pamo4P2l5EHom_8WeGVN1boQ&s' }} 
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="ID del libro"
        value={bookId}
        onChangeText={setBookId}
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre del libro"
        value={bookName}
        onChangeText={setBookName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre del cliente"
        value={clientName}
        onChangeText={setClientName}
      />

      <Button title="Préstamo" onPress={handleLoan} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default LoanScreen;
