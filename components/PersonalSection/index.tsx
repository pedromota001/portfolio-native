import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const PersonalSection = () => {
    const navigation = useNavigation();
    const router = useRouter();
    return(
        <View style={styles.divPersonal}>
            <Image
                source={{uri: 'https://github.com/pedromota001.png'}}
                style={{ width: 100, height: 100, borderRadius: 50}}
            />
            <Text style={styles.title}>Pedro Mota</Text>
            <Text style={styles.subTitle}>Desenvolvedor full stack</Text>
            <Text style={styles.description}>
                Desenvolvedor full stack Java, Spring Boot, React, Javascript e Mendix.
            </Text>
            <TouchableOpacity activeOpacity={0.6}style={styles.buttonGame} onPress={() => router.push('/jogoSenha')}>
                <Text style={styles.textButton}>Ir para o Jogo da Senha</Text>
            </TouchableOpacity>
        </View>
        
    )
}

    const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    subTitle:{
        fontSize: 16,
        color: 'grey',
    },
    description:{
        fontSize: 16,
        color:'#fff',
        textAlign: 'center',
        paddingHorizontal: 50
    },
    divPersonal:{
        alignItems: 'center',
        marginTop: 30
    },
    buttonGame: {
        backgroundColor: '#007AFF',
        borderRadius: 12,
        padding: 12,
        marginTop: 16
    },
    textButton: {
        color: '#fff',
        fontWeight: 600
    },
    });


export default PersonalSection;