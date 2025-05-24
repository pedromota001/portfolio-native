import { StyleSheet, Text, View } from "react-native"

const experiences = [
    {
        title: 'Duo Technology',
        role: 'Estagiário Full Stack',
        period: '2024 - Atualmente',
        description: 'Atuação no desenvolvimento de projeto em Mendix, realizando integrações com sistemas externos e contribuindo ativamente tanto no frontend quanto no backend.',
        techs: ['Typescript', 'Mendix', 'Git', 'PostgreSQL', 'API REST']
    }
]


const Experience = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Experiências</Text>
            {experiences.map((exp, index) => (
                <View key={index} style={styles.cardExp}>
                    <Text style={styles.titleExp}>{exp.title}</Text>
                    <Text style={styles.period}>{exp.role} • {exp.period}</Text>
                    <Text style={styles.description}>{exp.description}</Text>
                    <View style={styles.techRow}>
                        {exp.techs.map((tech, index) => (
                            <Text key={index} style={styles.tech}>{tech}</Text>
                        ))}
                    </View>
                </View>
                
            ))}
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0D0D0D'
    },
    title: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#00BFFF',
        fontSize: 25,
        fontWeight: 700
    },
    titleExp: {
        color: 'white',
        fontWeight: 600,
        fontSize: 20,
        marginBottom: 6
    },
    cardExp: {
        backgroundColor: '#1A1A1A',
        borderRadius: 16,
        padding: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        marginBottom: 24,
        marginTop: 20
    },
    period: {
        fontSize: 14,
        fontWeight: 400,
        color: '#AAAAAA',
        marginBottom: 12
    },
    description: {
        fontSize: 14,
        color: '#fff',
    },
    tech: {
        backgroundColor: '#00BFFF33',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 8,
        color: '#00BFFF'
    }, 
    techRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        marginTop: 15,
        flexWrap: 'wrap'
    }
    
})

export default Experience