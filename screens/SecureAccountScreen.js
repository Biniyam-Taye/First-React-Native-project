import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SecureAccountScreen({ navigation }) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('What was your first pet\'s name?');

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name="arrow-left" size={22} color="#1A1A1A" />
                        </TouchableOpacity>
                        <MaterialCommunityIcons name="shield-check-outline" size={58} color="rgba(255,255,255,0.3)" style={styles.headerIcon} />
                        <Text style={styles.headerTitle}>Secure Account</Text>
                        <Text style={styles.headerSubtitle}>Set up your account security details</Text>
                    </View>

                    {/* White Card */}
                    <View style={styles.card}>
                        {/* Birthday */}
                        <View style={styles.sectionHeader}>
                            <MaterialCommunityIcons name="cake-variant-outline" size={20} color="#FFBE00" />
                            <Text style={styles.sectionTitle}>Birthday</Text>
                        </View>
                        <View style={styles.birthdayRow}>
                            {['Day', 'Month', 'Year'].map((item) => (
                                <TouchableOpacity key={item} style={styles.birthdayBox}>
                                    <Text style={styles.birthdayText}>{item}</Text>
                                    <MaterialCommunityIcons name="chevron-down" size={18} color="#BBBBBB" />
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Password */}
                        <View style={styles.sectionHeader}>
                            <MaterialCommunityIcons name="lock-outline" size={20} color="#FFBE00" />
                            <Text style={styles.sectionTitle}>Password</Text>
                        </View>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="Create a strong password"
                                placeholderTextColor="#BBBBBB"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <MaterialCommunityIcons
                                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                    size={20}
                                    color="#BBBBBB"
                                    style={styles.inputIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* Password strength */}
                        {password.length > 0 && (
                            <View style={styles.strengthRow}>
                                {[1, 2, 3, 4].map((i) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.strengthBar,
                                            password.length >= i * 3 && styles.strengthBarActive,
                                            password.length >= 10 && i <= 4 && styles.strengthBarStrong,
                                        ]}
                                    />
                                ))}
                                <Text style={styles.strengthLabel}>
                                    {password.length < 6 ? 'Weak' : password.length < 10 ? 'Medium' : 'Strong'}
                                </Text>
                            </View>
                        )}

                        {/* Phone */}
                        <View style={styles.sectionHeader}>
                            <MaterialCommunityIcons name="phone-outline" size={20} color="#FFBE00" />
                            <Text style={styles.sectionTitle}>Phone Number</Text>
                        </View>
                        <View style={styles.inputRow}>
                            <TouchableOpacity style={styles.countryCode}>
                                <Text style={styles.countryCodeText}>🇪🇹 +251</Text>
                                <MaterialCommunityIcons name="chevron-down" size={14} color="#888" />
                            </TouchableOpacity>
                            <TextInput
                                style={[styles.input, { paddingLeft: 10 }]}
                                placeholder="9XX XXX XXXX"
                                placeholderTextColor="#BBBBBB"
                                value={phone}
                                onChangeText={setPhone}
                                keyboardType="phone-pad"
                            />
                            {phone.length >= 9 && (
                                <MaterialCommunityIcons name="check-circle" size={20} color="#4CAF50" style={styles.inputIcon} />
                            )}
                        </View>

                        {/* Security Question */}
                        <View style={styles.sectionHeader}>
                            <MaterialCommunityIcons name="help-circle-outline" size={20} color="#FFBE00" />
                            <Text style={styles.sectionTitle}>Security Question</Text>
                        </View>
                        <TouchableOpacity style={styles.dropdownBox}>
                            <Text style={styles.dropdownText} numberOfLines={1}>{question}</Text>
                            <MaterialCommunityIcons name="chevron-down" size={20} color="#BBBBBB" />
                        </TouchableOpacity>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="Your Answer..."
                                placeholderTextColor="#BBBBBB"
                                value={answer}
                                onChangeText={setAnswer}
                            />
                        </View>

                        {/* Progress */}
                        <View style={styles.progress}>
                            <View style={styles.dot} />
                            <View style={[styles.dot, styles.dotActive]} />
                        </View>
                        <Text style={styles.progressLabel}>Step 2 of 2</Text>

                        {/* Create Account */}
                        <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
                            <MaterialCommunityIcons name="account-check-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
                            <Text style={styles.primaryBtnText}>Create Account</Text>
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
        fontSize: 36,
        fontWeight: '900',
        color: '#1A1A1A',
        letterSpacing: 0.5,
    },
    headerSubtitle: {
        fontSize: 14,
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
        marginBottom: 12,
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#333',
        marginLeft: 8,
    },

    birthdayRow: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 22,
    },
    birthdayBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#EEEEEE',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    birthdayText: { fontSize: 14, color: '#BBBBBB' },

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

    strengthRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: -14,
        marginBottom: 18,
    },
    strengthBar: {
        height: 4,
        flex: 1,
        borderRadius: 2,
        backgroundColor: '#EEE',
    },
    strengthBarActive: { backgroundColor: '#FFBE00' },
    strengthBarStrong: { backgroundColor: '#4CAF50' },
    strengthLabel: { fontSize: 11, color: '#999', marginLeft: 4 },

    countryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        borderRightWidth: 1,
        borderRightColor: '#EEE',
        gap: 4,
    },
    countryCodeText: { fontSize: 14, color: '#333' },

    dropdownBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#EEEEEE',
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 14,
        marginBottom: 14,
    },
    dropdownText: { flex: 1, fontSize: 14, color: '#555' },

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
