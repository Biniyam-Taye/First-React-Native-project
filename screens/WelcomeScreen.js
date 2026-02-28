import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, ScrollView, KeyboardAvoidingView,
    Platform, Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [savePassword, setSavePassword] = useState(false);

    return (
        <View style={[styles.safeArea, { paddingTop: insets.top }]}>
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
                        <MaterialCommunityIcons name="account-circle" size={64} color="rgba(255,255,255,0.35)" style={styles.headerIcon} />
                        <Text style={styles.headerTitle}>Hello</Text>
                        <Text style={styles.headerSubtitle}>Welcome Back!</Text>
                    </View>

                    {/* White Card */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Login Account</Text>
                        <Text style={styles.cardSubtitle}>
                            Sign in to continue and access your personalized experience.
                        </Text>

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
                            <MaterialCommunityIcons name="account-outline" size={20} color="#BBBBBB" style={styles.inputIcon} />
                        </View>

                        {/* Password */}
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="••••••••••••"
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

                        {/* Save & Forgot */}
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.rowLeft} onPress={() => setSavePassword(!savePassword)}>
                                <View style={[styles.checkbox, savePassword && styles.checkboxActive]}>
                                    {savePassword && <MaterialCommunityIcons name="check" size={13} color="#fff" />}
                                </View>
                                <Text style={styles.saveText}>Save Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.forgotText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Login Button */}
                        <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
                            <MaterialCommunityIcons name="login" size={20} color="#fff" style={{ marginRight: 8 }} />
                            <Text style={styles.primaryBtnText}>Login Account</Text>
                        </TouchableOpacity>

                        {/* Divider */}
                        <View style={styles.divider}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>or</Text>
                            <View style={styles.dividerLine} />
                        </View>

                        {/* Create Account */}
                        <TouchableOpacity
                            style={styles.secondaryBtn}
                            onPress={() => navigation.navigate('Register')}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.secondaryBtnText}>Create New Account</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#FFBE00' },
    scroll: { flexGrow: 1 },

    header: {
        backgroundColor: '#FFBE00',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 50,
        position: 'relative',
    },
    backBtn: {
        position: 'absolute',
        top: 20,
        left: 24,
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    headerIcon: { position: 'absolute', top: 20, right: 24 },
    headerTitle: {
        fontSize: 46,
        fontWeight: '900',
        color: '#1A1A1A',
        letterSpacing: 1,
    },
    headerSubtitle: {
        fontSize: 16,
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
        paddingTop: 36,
        paddingBottom: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 10,
    },
    cardTitle: {
        fontSize: 26,
        fontWeight: '800',
        color: '#1A1A1A',
        marginBottom: 6,
    },
    cardSubtitle: {
        fontSize: 13,
        color: '#AAAAAA',
        marginBottom: 28,
        lineHeight: 20,
    },

    label: {
        fontSize: 13,
        fontWeight: '700',
        color: '#444',
        marginBottom: 8,
        marginTop: 4,
    },
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

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 28,
    },
    rowLeft: { flexDirection: 'row', alignItems: 'center' },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#FFBE00',
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxActive: { backgroundColor: '#FFBE00', borderColor: '#FFBE00' },
    saveText: { fontSize: 13, color: '#555' },
    forgotText: { fontSize: 13, color: '#FFBE00', fontWeight: '700' },

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
    },
    primaryBtnText: { fontSize: 16, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },

    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 22,
    },
    dividerLine: { flex: 1, height: 1, backgroundColor: '#EEEEEE' },
    dividerText: { marginHorizontal: 12, color: '#BBBBBB', fontSize: 13 },

    secondaryBtn: {
        borderWidth: 2,
        borderColor: '#FFBE00',
        borderRadius: 14,
        paddingVertical: 15,
        alignItems: 'center',
    },
    secondaryBtnText: { fontSize: 15, fontWeight: '800', color: '#FFBE00' },
});
