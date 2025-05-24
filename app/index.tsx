import PersonalSection from '@/components/PersonalSection';
import TabContainer from '@/components/TabView';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PersonalSection/>
      <TabContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#0D0D0D',
    paddingTop: 40
  },
});
