import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SKILLTRACKER OF NPR</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="College Email" onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TouchableOpacity style={styles.loginBtn} onPress={() => onLogin(email, 'student')}>
          <Text style={styles.btnText}>Login as Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginBtn, {backgroundColor: '#1E293B'}]} onPress={() => onLogin(email, 'coordinator')}>
          <Text style={styles.btnText}>Login as Staff</Text>
        </TouchableOpacity>
        <Text style={styles.or}>─── OR ───</Text>
        <TouchableOpacity style={styles.googleBtn}>
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F1F5F9' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2563EB', textAlign: 'center', marginBottom: 30 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 15, elevation: 5 },
  input: { backgroundColor: '#F8FAFC', padding: 12, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#E2E8F0' },
  loginBtn: { backgroundColor: '#2563EB', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  btnText: { color: '#FFF', fontWeight: 'bold' },
  or: { textAlign: 'center', marginVertical: 15, color: '#94A3B8' },
  googleBtn: { borderWidth: 1, borderColor: '#CBD5E1', padding: 12, borderRadius: 8, alignItems: 'center' },
  googleText: { fontWeight: '600' }
});

export default LoginScreen;