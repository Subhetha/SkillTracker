import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';

const ProfileScreen = ({ userEmail, userRole, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [portfolio, setPortfolio] = useState('https://nprcolleges.org/student/portfolio');

  // --- STUDENT VIEW ---
  const StudentProfile = () => (
    <View style={styles.content}>
      <View style={styles.photoCircle}><Text style={styles.photoTxt}>Student</Text></View>
      <Text style={styles.name}>{userEmail}</Text>
      <View style={styles.tag}><Text style={styles.tagTxt}>STUDENT</Text></View>

      <View style={styles.section}>
        <Text style={styles.label}>Portfolio & Projects</Text>
        {isEditing ? (
          <TextInput style={styles.input} value={portfolio} onChangeText={setPortfolio} />
        ) : (
          <Text style={styles.val}>{portfolio}</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>My Applied Skills</Text>
        <View style={styles.skillGrid}>
          {['Photographer', 'Anchor'].map(s => (
            <View key={s} style={styles.skillBadge}><Text style={styles.skillBadgeTxt}>{s}</Text></View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Participation History</Text>
        <Text style={styles.val}>✓ Tech Symposium 2026 (Applied)</Text>
        <Text style={styles.val}>✓ Annual Day (Participated)</Text>
      </View>
    </View>
  );

  // --- STAFF VIEW ---
  const StaffProfile = () => (
    <View style={styles.content}>
      <View style={[styles.photoCircle, {borderColor: '#1E293B'}]}><Text style={styles.photoTxt}>Staff</Text></View>
      <Text style={styles.name}>{userEmail}</Text>
      <View style={[styles.tag, {backgroundColor: '#1E293B'}]}><Text style={styles.tagTxt}>COORDINATOR</Text></View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>12</Text>
          <Text style={styles.statLab}>Events Posted</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>45</Text>
          <Text style={styles.statLab}>Total Registrations</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Manage Current Events</Text>
        <View style={styles.eventItem}>
          <Text style={styles.eventTitle}>Music Fest 2026</Text>
          <Text style={styles.eventSub}>15 Students Applied</Text>
          <TouchableOpacity onPress={() => Alert.alert("List", "Showing names of 15 students...")}>
            <Text style={styles.viewLink}>View Applicants →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Text style={styles.backBtn}>← Back</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>NPR Profile</Text>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
          <Text style={styles.editBtn}>{isEditing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {userRole === 'coordinator' ? <StaffProfile /> : <StudentProfile />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 50, borderBottomWidth: 1, borderColor: '#F1F5F9' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  backBtn: { color: '#2563EB', fontWeight: 'bold' },
  editBtn: { color: '#2563EB', fontWeight: 'bold' },
  content: { padding: 20, alignItems: 'center' },
  photoCircle: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#F8FAFC', borderWidth: 2, borderColor: '#2563EB', borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' },
  photoTxt: { fontSize: 10, color: '#94A3B8' },
  name: { fontSize: 20, fontWeight: 'bold', marginTop: 15 },
  tag: { backgroundColor: '#2563EB', paddingHorizontal: 15, paddingVertical: 4, borderRadius: 20, marginTop: 8 },
  tagTxt: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  section: { width: '100%', marginTop: 25 },
  label: { fontWeight: 'bold', color: '#94A3B8', fontSize: 11, textTransform: 'uppercase', marginBottom: 10 },
  val: { fontSize: 15, color: '#1E293B', marginBottom: 5 },
  input: { borderBottomWidth: 1, borderColor: '#2563EB', fontSize: 15, paddingVertical: 5 },
  skillGrid: { flexDirection: 'row', gap: 10 },
  skillBadge: { backgroundColor: '#DBEAFE', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15 },
  skillBadgeTxt: { color: '#1E40AF', fontSize: 12, fontWeight: '600' },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 },
  statBox: { backgroundColor: '#F8FAFC', padding: 15, borderRadius: 12, width: '48%', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0' },
  statNum: { fontSize: 22, fontWeight: 'bold', color: '#2563EB' },
  statLab: { fontSize: 11, color: '#64748B' },
  eventItem: { backgroundColor: '#F1F5F9', padding: 15, borderRadius: 10, width: '100%' },
  eventTitle: { fontWeight: 'bold', fontSize: 15 },
  eventSub: { fontSize: 13, color: '#64748B', marginVertical: 4 },
  viewLink: { color: '#2563EB', fontWeight: 'bold', fontSize: 12 }
});

export default ProfileScreen;