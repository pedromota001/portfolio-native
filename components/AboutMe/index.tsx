import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          Pedro Mota, 19 anos, estudo na UNICAP e estagiário da Duo Technology, onde desenvolvo como full stack. Atualmente estou num projeto em
          <Text style={styles.highlight}> MENDIX</Text> e tenho facilidade com linguagens de back-end como
          <Text style={styles.highlight}> Java</Text> e
          <Text style={styles.highlight}> JavaScript</Text>, enquanto no front-end com <Text style={styles.highlight}>React. </Text> Possuo também 
          experiência em desenvolvimento web e inglês(nível pré-avançado).
        </Text>
      </View>
      <Text style={styles.techTitle}>Tecnologias</Text>
      <View style={styles.iconRow}>
        <MaterialCommunityIcons name="language-java" size={50} color="#f89820" />
        <FontAwesome5 name="js" size={50} color="#f7df1e" />
        <FontAwesome5 name="react" size={50} color="#61DBFB" />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#0D0D0D',
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 24,
  },
  text: {
    color: '#CCCCCC',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  highlight: {
    color: '#00BFFF',
    fontWeight: 'bold',
  },
  techTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
