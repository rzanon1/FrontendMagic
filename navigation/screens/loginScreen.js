import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from './homeScreen';




export default function LoginScreen() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  

  const handleLogin = () => {
    Alert.alert('Login realizado com sucesso');
    navigation.navigate('HomeScreen');
  };
  


  return (
  <View style={styles.container}>
    <ImageBackground
    source={require('../imagens/Nicol.png')} 
    style={styles.backgroundImage}
  >
    <SafeAreaView style={{flex: 1,}}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Image source={require('../imagens/Icone.png')}
          style={styles.headerImg}
          alt="Logo"
          />

          <Text style={styles.title}>Seja bem-vindo a tela de login!</Text>

          <Text style={styles.subtitle}>Acesse e organize seus deck de Magic: The Gathering™</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email</Text>

            <TextInput 
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={styles.inputControl}
              placeholder="joao@exemplo.com"
              placeholderTextColor="#AFAFAF"
              value={form.email}
              onChangeText={email => setForm({... form, email})}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Senha</Text>

            <TextInput 
              style={styles.inputControl}
              placeholder="***********"
              placeholderTextColor="#AFAFAF"
              value={form.password}
              onChangeText={password => setForm({... form, password})}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.formAction}>
          <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableOpacity>
          </View> 
          <TouchableOpacity 
            style={{marginTop: 'auto'}}
            onPress={() => {}}>
           <Text style={styles.formFooter}>
            Não possui uma conta ?{' '}
            <Text style={{ textDecorationLine: 'underline'}}>Criar conta</Text>            
            </Text>     
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0C004A'
  },

  innerContainer: {
   padding: 24,
   flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.7
    
  },

  header: {
    marginVertical:36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#B3B1AF',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    color: '#AD4639',
    textAlign: 'center',
  },
  input: {
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    padding: 10,
    alignSelf: 'center',
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    alignSelf: 'center'
  },

  form:{
    marginBottom: 24,
    flex: 1,
    padding: 20,
  },

  formAction:{
    marginVertical: 24,
  },

  formFooter:{
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.1,
  },

  button: {
    backgroundColor: '#FD8D00',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    maxWidth: 100,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#fff',
  },
});
