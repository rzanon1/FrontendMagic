import React from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#5F5A59'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/Icone.png')}
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
            <Text style={styles.inputLabel}>Email</Text>

            <TextInput 
              style={styles.inputControl}
              placeholder="***********"
              placeholderTextColor="#AFAFAF"
              value={form.password}
              onChangeText={password => setForm({... form, password})}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => {
              Alert.alert('Login realizado com sucesso')
            }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 24,
   flex: 1,
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
    color: '#C0B8B7',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 500,
    color: '#AD4639',
    textAlign: 'center',
  },
  input: {},
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },

});


