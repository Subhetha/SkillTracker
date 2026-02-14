import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

const DashboardScreen = ({ onOpenProfile }) => {
  const skills = [
    "Content Creation", "Anchor", "Photographer", "Video Editing", "Photo Editing", 
    "Web Designs", "UI and UX Designs", "Poster Making", "Dance", "Singing", 
    "Create a Quiz", "Networking", "Event Decor", "Others"
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NPR Dashboard</Text>
        <TouchableOpacity onPress={onOpenProfile}><Text style={styles.dots}>⋮</Text></TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <Text style={styles.sectionTitle}>Available Skill Opportunities</Text>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillCard}>
            <Text style={styles.skillName}>{skill}</Text>
            <TouchableOpacity style={styles.applyBtn} onPress={() => Alert.alert("Success", `Applied for ${skill}`)}>
              <Text style={{color: '#FFF'}}>Apply</Text>
            </TouchableOpacity>
          </View>
        ))}
        {/* Certificate Section */}
        <View style={styles.certCard}>
          <Text style={styles.certTitle}>Completed Events</Text>
          <TouchableOpacity 
            style={styles.downloadBtn} 
            onPress={() => Alert.alert("Generating...", "Your E-Certificate is being prepared.")}
          >
            <Text style={{color: '#FFF'}}>Generate Certificate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 50, backgroundColor: '#FFF' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#2563EB' },
  dots: { fontSize: 28, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  skillCard: { backgroundColor: '#FFF', padding: 15, borderRadius: 12, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 2 },
  skillName: { fontSize: 15, fontWeight: '600' },
  applyBtn: { backgroundColor: '#2563EB', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 6 },
  certCard: { marginTop: 20, padding: 20, backgroundColor: '#DBEAFE', borderRadius: 12, borderStyle: 'dashed', borderWidth: 1, borderColor: '#2563EB' },
  certTitle: { fontWeight: 'bold', marginBottom: 10 },
  downloadBtn: { backgroundColor: '#059669', padding: 12, borderRadius: 8, alignItems: 'center' }
});

export default DashboardScreen;