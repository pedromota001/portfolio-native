import { FontAwesome } from '@expo/vector-icons';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type PropsPortfolioCard = {
  title: string;
  description: string;
  url: string;
};

const PortfolioCard = ({ title, description, url }: PropsPortfolioCard) => {
  return (
    <View style={styles.card}>
      <FontAwesome name="laptop" size={24} color="#005f99" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      
      <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.linkButton}>
        <Text style={styles.linkText}>Ver projeto ↗</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#005f99',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#CCCCCC',
    marginBottom: 12,
    lineHeight: 22,
  },
  linkButton: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#00BFFF',
    borderRadius: 8,
  },
  linkText: {
    color: '#0D0D0D',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
