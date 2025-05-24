import { ScrollView, StyleSheet, Text, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const certificates = [
    { title: 'Tempest Academy Conference', year: '2023' },
    { title: 'Tempest Academy Conference', year: '2024' },
    { title: 'Java: consumindo API, gravando arquivos e lidando com erros' },
    { title: 'Java: trabalhando com lambdas, streams e Spring Framework' },
    { title: 'Java: persistência de dados e consultas com Spring Data JPA' },
    { title: 'Java: criando sua primeira API e conectando ao front' },
]



const Certificates = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Meus certificados</Text>
            {certificates.map((certificate, index) => (
                <View key={index} style={styles.card}>
                    <FontAwesome name="certificate" size={20} color="#00BFFF" style={{ marginRight: 10 }} />
                    <View>
                        <Text style={styles.titleCert}>
                            {certificate.title}
                        </Text>
                        {certificate.year && <Text style={styles.textYear}>{certificate.year}</Text>}
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#00BFFF',
        fontSize: 25,
        fontWeight: 700
    },
    card: {
        backgroundColor: '#1A1A1A',
        borderRadius: 16,
        padding: 18,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        elevation: 5,
        shadowRadius: 6,
        marginTop: 18,
        flexDirection: 'row'
    },
    container: {
        backgroundColor: '#0D0D0D'
    },
    titleCert: {
        fontSize: 16,
        color: '#CCCCCC',
        width: 350
    },
    textYear: {
        color: '#888888',
        fontSize: 12,
        marginTop: 4,    
    }
    
})

export default Certificates