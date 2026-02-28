import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header / Logo */}
            <View style={styles.header}>
                <MaterialCommunityIcons name="alpha-n-box-outline" size={28} color="#1A1A1A" />
                <Text style={styles.logoText}>NORCO</Text>
            </View>

            {/* Hero Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }}
                    style={styles.heroImage}
                    resizeMode="contain"
                />
            </View>

            {/* Content Area */}
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Let's{'\n'}get started</Text>
                <Text style={styles.subtitle}>Everything start from here</Text>

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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
    },
    logoText: {
        fontSize: 18,
        fontWeight: '900',
        letterSpacing: 1,
        color: '#1A1A1A',
        marginLeft: 4,
        fontStyle: 'italic',
    },
    imageContainer: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    heroImage: {
        width: width * 0.9,
        height: width * 0.7,
    },
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
    },
    buttonContainer: {
        gap: 16,
    },
    loginBtn: {
        backgroundColor: '#FFBE00',
        borderRadius: 30,
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
        fontWeight: '700',
        color: '#1A1A1A',
    },
    signupBtn: {
        backgroundColor: '#333333',
        borderRadius: 30,
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
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
