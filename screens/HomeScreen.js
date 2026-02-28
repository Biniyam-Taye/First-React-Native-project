import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            {/* Dynamic Background Element */}
            <View style={styles.topBackground} />

            {/* Header / Logo */}
            <View style={[styles.header, { paddingTop: 16 + insets.top }]}>
                <MaterialCommunityIcons name="hexagon-multiple-outline" size={36} color="#1A1A1A" />
                <Text style={styles.logoText}>BineX</Text>
            </View>

            {/* Hero Icon Composition */}
            <View style={styles.heroContainer}>
                <View style={styles.iconCircleOuter}>
                    <View style={styles.iconCircleInner}>
                        <MaterialCommunityIcons name="rocket-launch" size={80} color="#FFFFFF" />
                    </View>
                </View>

                {/* Decorative floating dots */}
                <View style={[styles.dot, styles.dot1]} />
                <View style={[styles.dot, styles.dot2]} />
                <View style={[styles.dot, styles.dot3]} />
                <View style={[styles.dot, styles.dot4]} />
            </View>

            {/* Content Area */}
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Let's{'\n'}get started</Text>
                <Text style={styles.subtitle}>
                    Join our platform and experience the best features right at your fingertips.
                </Text>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => navigation.navigate('Welcome')}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.loginBtnText}>Log in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.signupBtn}
                        onPress={() => navigation.navigate('Register')}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.signupBtnText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topBackground: {
        position: 'absolute',
        top: -width * 0.4,
        right: -width * 0.2,
        width: width,
        height: width,
        backgroundColor: '#FFBE00',
        borderRadius: width / 2,
        opacity: 0.15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    logoText: {
        fontSize: 24,
        fontWeight: '900',
        letterSpacing: 2,
        color: '#1A1A1A',
        marginLeft: 10,
    },
    heroContainer: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    iconCircleOuter: {
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(255, 190, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCircleInner: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: '#FFBE00',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#FFBE00',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 8,
    },
    dot: {
        position: 'absolute',
        borderRadius: 20,
        backgroundColor: '#FFBE00',
    },
    dot1: { width: 16, height: 16, top: '20%', left: '20%', opacity: 0.6 },
    dot2: { width: 10, height: 10, top: '15%', right: '25%', opacity: 0.8 },
    dot3: { width: 24, height: 24, bottom: '25%', right: '15%', opacity: 0.4 },
    dot4: { width: 14, height: 14, bottom: '15%', left: '28%', opacity: 0.7 },

    contentContainer: {
        flex: 1,
        paddingHorizontal: 32,
        paddingBottom: 40,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 42,
        fontWeight: '900',
        color: '#1A1A1A',
        lineHeight: 48,
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 15,
        color: '#666666',
        fontWeight: '500',
        marginBottom: 40,
        lineHeight: 22,
    },
    buttonContainer: {
        gap: 16,
    },
    loginBtn: {
        backgroundColor: '#FFBE00',
        borderRadius: 14,
        paddingVertical: 18,
        alignItems: 'center',
        shadowColor: '#FFBE00',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    loginBtnText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1A1A1A',
    },
    signupBtn: {
        backgroundColor: '#333333',
        borderRadius: 14,
        paddingVertical: 18,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    signupBtnText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#FFFFFF',
    },
});
