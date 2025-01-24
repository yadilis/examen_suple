import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/Config';
import { useState } from 'react';

const AddBookScreen = ({ navigation }: any) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = async () => {
    const quantityInt = parseInt(quantity, 10);
    if (quantityInt <= 0) {
      Alert.alert('Error', 'La cantidad debe ser positiva');
      return;
    }

    try {
      await addDoc(collection(db, 'books'), { id, title, author, quantity: quantityInt, category });
      Alert.alert('Éxito', 'Libro agregado correctamente');
      setId('');
      setTitle('');
      setAuthor('');
      setQuantity('');
      setCategory('');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al agregar el libro.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OPERACIONES</Text>

      
      <Image
        source={{ uri: 'https://thumbs.dreamstime.com/b/icono-de-l%C3%ADnea-pago-signo-operaciones-comerciales-o-financieras-facturas-y-facturaci%C3%B3n-vectores-aislado-en-blanco-fondo-202291179.jpg' }} 
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={category}
        onChangeText={setCategory}
      />

      <View style={styles.buttonContainer}>
        <Button title="Guardar" onPress={handleAddBook} />
        <TouchableOpacity
          style={styles.booksButton}
          onPress={() => navigation.navigate('BooksListScreen')}>
          <Text style={styles.booksButtonText}>Ver Libros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  booksButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  booksButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddBookScreen;
