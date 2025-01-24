
import { View, Text, TextInput, Button, Alert } from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';
import { useState } from 'react';

const LoginScreen = ({ navigation }:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Éxito', 'Inicio de sesión correcto');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
