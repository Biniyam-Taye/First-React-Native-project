import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
                    {/* Yellow Header */}
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name="arrow-left" size={22} color="#1A1A1A" />
                        </TouchableOpacity>
                        <MaterialCommunityIcons name="account-plus-outline" size={58} color="rgba(255,255,255,0.3)" style={styles.headerIcon} />
                        <Text style={styles.headerTitle}>Join Us</Text>
                        <Text style={styles.headerSubtitle}>Create Free Account</Text>
                    </View>

                    {/* White Card */}
                    <View style={styles.card}>
                        <View style={styles.sectionHeader}>
                            <MaterialCommunityIcons name="account-details" size={22} color="#FFBE00" />
                            <Text style={styles.cardTitle}>Personal Info</Text>
                        </View>
                        <Text style={styles.cardSubtitle}>
                            Fill in your personal details to get started with your new account.
                        </Text>

                        {/* Name Row */}
                        <Text style={styles.label}>Your Name</Text>
                        <View style={styles.nameRow}>
                            <View style={[styles.inputRow, { flex: 1, marginRight: 10 }]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="First Name"
                                    placeholderTextColor="#BBBBBB"
                                    value={firstName}
                                    onChangeText={setFirstName}
                                />
                            </View>
                            <View style={[styles.inputRow, { flex: 1 }]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last Name"
                                    placeholderTextColor="#BBBBBB"
                                    value={lastName}
                                    onChangeText={setLastName}
                                />
                            </View>
                        </View>

                        {/* Email */}
                        <Text style={styles.label}>Email Address</Text>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="Your Email Address"
                                placeholderTextColor="#BBBBBB"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <MaterialCommunityIcons name="email-outline" size={20} color="#BBBBBB" style={styles.inputIcon} />
                        </View>

                        {/* Username */}
                        <Text style={styles.label}>Username</Text>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="example1234"
                                placeholderTextColor="#BBBBBB"
                                value={username}
                                onChangeText={setUsername}
                                autoCapitalize="none"
                            />
                            {username.length > 3 && (
                                <MaterialCommunityIcons name="check-circle" size={20} color="#4CAF50" style={styles.inputIcon} />
                            )}
                        </View>

                        {/* Progress Dots */}
                        <View style={styles.progress}>
                            <View style={[styles.dot, styles.dotActive]} />
                            <View style={styles.dot} />
                        </View>
                        <Text style={styles.progressLabel}>Step 1 of 2</Text>

                        {/* CTA Button */}
                        <TouchableOpacity
                            style={styles.primaryBtn}
                            onPress={() => navigation.navigate('SecureAccount')}
                            activeOpacity={0.85}
                        >
                            <Text style={styles.primaryBtnText}>Save & Continue</Text>
                            <MaterialCommunityIcons name="arrow-right" size={20} color="#fff" style={{ marginLeft: 8 }} />
                        </TouchableOpacity>

                        {/* Back to Login */}
                        <TouchableOpacity
                            style={styles.linkBtn}
                            onPress={() => navigation.navigate('Welcome')}
                        >
                            <MaterialCommunityIcons name="arrow-left" size={16} color="#FFBE00" />
                            <Text style={styles.linkText}> Back to Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#FFBE00' },
    scroll: { flexGrow: 1 },

    header: {
        backgroundColor: '#FFBE00',
        paddingTop: 16,
        paddingBottom: 48,
        paddingHorizontal: 24,
        position: 'relative',
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
    },
    headerIcon: { position: 'absolute', top: 20, right: 24 },
    headerTitle: {
        fontSize: 42,
        fontWeight: '900',
        color: '#1A1A1A',
        letterSpacing: 1,
    },
    headerSubtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#5A4300',
        marginTop: 4,
    },

    card: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        paddingHorizontal: 28,
        paddingTop: 32,
        paddingBottom: 48,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        gap: 8,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#1A1A1A',
        marginLeft: 6,
    },
    cardSubtitle: {
        fontSize: 13,
        color: '#AAAAAA',
        marginBottom: 24,
        lineHeight: 20,
    },

    label: {
        fontSize: 13,
        fontWeight: '700',
        color: '#444',
        marginBottom: 8,
        marginTop: 4,
    },
    nameRow: { flexDirection: 'row', marginBottom: 22 },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: '#EEEEEE',
        marginBottom: 22,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#1A1A1A',
        paddingVertical: 10,
    },
    inputIcon: { paddingHorizontal: 6 },

    progress: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 6,
        marginTop: 10,
    },
    dot: {
        width: 32,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#EEE',
    },
    dotActive: { backgroundColor: '#FFBE00', width: 48 },
    progressLabel: {
        textAlign: 'center',
        fontSize: 12,
        color: '#BBBBBB',
        marginBottom: 22,
    },

    primaryBtn: {
        backgroundColor: '#FFBE00',
        borderRadius: 14,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FFBE00',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 6,
        marginBottom: 18,
    },
    primaryBtnText: { fontSize: 16, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },

    linkBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: { fontSize: 14, color: '#FFBE00', fontWeight: '700' },
});
