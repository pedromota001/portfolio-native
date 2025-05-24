import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Contact = () => {
    return(
            <ScrollView contentContainerStyle={styles.containerScrollView}>
                <View style={styles.cardContact}>
                    <Text style={styles.title}>Entre em contato</Text>
                    <View style={styles.contactLinks}>
                        <TouchableOpacity style={styles.rowLink} onPress={() => Linking.openURL('mailto:pedromotalindoso@gmail.com')}>
                            <FontAwesome name="envelope" size={24} color="#00BFFF" />
                            <Text style={styles.linkText}>Email</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.rowLink} onPress={() => Linking.openURL('https://www.linkedin.com/in/pedromotacarvalho/')}>
                            <FontAwesome name="linkedin-square" size={28} color="#00BFFF" />
                            <Text style={styles.linkText}>Linkedin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rowLink} onPress={() => Linking.openURL('https://github.com/pedromota001')}>
                            <FontAwesome name="github-square" size={30} color="#00BFFF" />
                            <Text style={styles.linkText}>Github</Text>
                        </TouchableOpacity>
                    
                    </View>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardContact: {
        backgroundColor: '#000',
        borderRadius: 30,
        width: 400,
        height: 500
    },
    title: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#00BFFF',
        fontSize: 18,
        fontWeight: 700
    },
    contactLinks: {
        marginTop: 40,
        marginLeft: 5,
        marginRight: 5
    },
    rowLink:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 18,
        padding: 15,
        backgroundColor: '#1A1A1A',
        borderRadius: 20,
        borderWidth: 10,

    },
    linkText: {
        marginTop: 2,
        fontSize: 18,
        fontWeight: 500,
        color: '#005f99'
    },
    containerScrollView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Contact