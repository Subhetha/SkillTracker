import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

const StaffScreen = ({ onLogout, onOpenProfile }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Staff Control</Text>
        <TouchableOpacity onPress={onOpenProfile}><Text style={styles.dots}>⋮</Text></TouchableOpacity>
      </View>
      <ScrollView style={{padding: 20}}>
        <View style={styles.card}>
          <Text style={styles.label}>Event Name</Text>
          <TextInput style={styles.input} placeholder="e.g., Annual Fest" />
          <Text style={styles.label}>Required Skill</Text>
          <TextInput style={styles.input} placeholder="e.g., Photographer" />
          <Text style={styles.label}>Members Needed</Text>
          <TextInput style={styles.input} placeholder="5" keyboardType="numeric" />
          <Text style={styles.label}>Event Date</Text>
          <TextInput style={styles.input} placeholder="25-02-2026" />
          
          <TouchableOpacity style={styles.postBtn} onPress={() => Alert.alert("Success", "Notifications sent to matching students!")}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>Post & Notify</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onLogout} style={{marginTop: 20}}><Text style={{color: 'red', textAlign: 'center'}}>Logout</Text></TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F5F9' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 50, backgroundColor: '#FFF' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  dots: { fontSize: 28 },
  card: { backgroundColor: '#FFF', padding: 20, borderRadius: 12, elevation: 3 },
  label: { fontWeight: 'bold', marginBottom: 5 },
  input: { backgroundColor: '#F8FAFC', padding: 10, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#E2E8F0' },
  postBtn: { backgroundColor: '#2563EB', padding: 15, borderRadius: 8, alignItems: 'center' }
});

export default StaffScreen;