import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';

interface Book {
  id: string | number;
  titulo: string;
  detalles: {
    imagen_portada: string;
  };
}

const UpcomingBooksScreen = () => {
  const [books, setBooks] = useState<Book[]>([]); 
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://jritsqmet.github.io/web-api/libros.json');
        const data = await response.json();
        setBooks(data.libros);
      } catch (error) {
        Alert.alert('Error', 'No se pudo cargar la lista de libros.');
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximos Libros</Text>
      {books.length === 0 ? (
        <Text>Cargando libros...</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedBook(item)} style={styles.bookItem}>
              <Image
                source={{ uri: item.detalles.imagen_portada }}
                style={styles.bookImage}
              />
              <Text style={styles.bookTitle}>{item.titulo}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {selectedBook && selectedBook.titulo && selectedBook.detalles.imagen_portada ? (
        <View style={styles.selectedBookContainer}>
          <Text style={styles.selectedBookTitle}>{selectedBook.titulo}</Text>
          <Image
            source={{ uri: selectedBook.detalles.imagen_portada }}
            style={styles.selectedBookImage}
          />
        </View>
      ) : (
        selectedBook && (
          <Text style={styles.noDetails}>No hay detalles disponibles para este libro.</Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookImage: {
    width: 60,
    height: 90,
    marginRight: 15,
    borderRadius: 5,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  selectedBookContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedBookTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedBookImage: {
    width: 150,
    height: 220,
    borderRadius: 10,
  },
  noDetails: {
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default UpcomingBooksScreen;
