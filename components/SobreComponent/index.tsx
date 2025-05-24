import { ScrollView, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SobreProjeto = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <FontAwesome5 name="mobile-alt" size={20} color="#00BFFF" />
        <Text style={styles.title}>Sobre o Projeto – Portfólio Mobile</Text>
      </View>
      <Text style={styles.paragraph}>
        Este aplicativo foi desenvolvido com o objetivo de apresentar, de forma moderna e interativa, o portfólio pessoal de Pedro Mota, incluindo suas habilidades, experiências, certificados e um projeto prático interativo.
        A aplicação foi construída utilizando tecnologias modernas do ecossistema React Native, com foco em performance, modularidade e boa experiência do usuário.
      </Text>

      <View style={styles.row}>
        <FontAwesome5 name="tools" size={18} color="#00BFFF" />
        <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
      </View>
      <Text style={styles.listItem}>• React Native com Expo</Text>
      <Text style={styles.listItem}>• TypeScript</Text>
      <Text style={styles.listItem}>• Expo Router</Text>
      <Text style={styles.listItem}>• React Navigation</Text>
      <Text style={styles.listItem}>• Expo Font</Text>
      <Text style={styles.listItem}>• react-native-vector-icons</Text>

      <View style={styles.row}>
        <FontAwesome5 name="icons" size={18} color="#00BFFF" />
        <Text style={styles.sectionTitle}>Ícones e Visual</Text>
      </View>
      <Text style={styles.paragraph}>
        A biblioteca <Text style={styles.highlight}>react-native-vector-icons</Text> foi utilizada para aplicar ícones visuais em seções, títulos, botões e navegação, trazendo clareza e estética ao app. Ícones como <Text style={styles.highlight}>FontAwesome5</Text> foram aplicados de forma consistente, como em "Sobre Mim", "Contato" e "Experiências".
      </Text>

      <View style={styles.row}>
        <FontAwesome5 name="folder-open" size={18} color="#00BFFF" />
        <Text style={styles.sectionTitle}>Estrutura de Diretórios</Text>
      </View>
      <Text style={styles.listItem}>• /app – Páginas principais</Text>
      <Text style={styles.listItem}>• /components – Componentes reutilizáveis</Text>
      <Text style={styles.listItem}>• /constants – Cores, textos e dados fixos</Text>
      <Text style={styles.listItem}>• /hooks – Hooks personalizados</Text>
      <Text style={styles.listItem}>• /assets – Imagens e fontes</Text>

      <View style={styles.row}>
        <FontAwesome5 name="puzzle-piece" size={18} color="#00BFFF" />
        <Text style={styles.sectionTitle}>Funcionalidades do App</Text>
      </View>
      <Text style={styles.listItem}>• Tela de Apresentação</Text>
      <Text style={styles.listItem}>• Projetos</Text>
      <Text style={styles.listItem}>• Sobre Mim</Text>
      <Text style={styles.listItem}>• Contato</Text>
      <Text style={styles.listItem}>• Certificados</Text>
      <Text style={styles.listItem}>• Experiências</Text>
      <Text style={styles.listItem}>• Jogo da Senha (Bulls and Cows)</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#0D0D0D',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00BFFF',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    color: '#00BFFF',
    marginLeft: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#CCCCCC',
    lineHeight: 22,
    marginTop: 6,
  },
  listItem: {
    fontSize: 16,
    color: '#AAAAAA',
    paddingLeft: 10,
    lineHeight: 24,
  },
  highlight: {
    color: '#00BFFF',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default SobreProjeto;
