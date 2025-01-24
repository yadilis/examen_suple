
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la Biblioteca</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.registerButton]} 
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={[styles.buttonText, styles.registerButtonText]}>Registro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40, 
    color: '#333', 
  },
  button: {
    backgroundColor: '#007BFF', 
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#28a745', 
  },
  registerButtonText: {
    color: '#fff',
  },
});

export default WelcomeScreen;
