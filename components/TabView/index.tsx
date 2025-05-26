import * as React from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import About from '../AboutMe';
import Certificates from '../Certificates';
import Contact from '../Contact';
import Experience from '../Experience';
import PortfolioCards from '../PortfolioCards';


interface Route {
  key: string;
  title: string;
}

const ProjectsRoute = () => (
  <ScrollView>
    <PortfolioCards/>
  </ScrollView>
);

const AboutRoute = () => (
  <View style={styles.scene}>
    <About/>
  </View>
);

const ContactRoute = () => (
  <View style={styles.scene}>
    <Contact/>
  </View>
);

const ExperienceRoute = () => (
  <View style={styles.scene}>
    <Experience/>
  </View>
);

const CertificatesRoute = () => (
  <View style={styles.scene}>
    <Certificates/>
  </View>
);

export default function TabContainer() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    { key: 'about', title: 'Sobre mim' },
    { key: 'contact', title: 'Contato' },
    { key: 'certificates', title: 'Certificados' },
  ]);

  const renderScene = React.useMemo(
    () =>
      SceneMap({
        about: AboutRoute,
        contact: ContactRoute,
        certificates: CertificatesRoute,
      }),
    []
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ marginTop: 20 }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={styles.tabBar}
          tabStyle={styles.tabStyle}
          indicatorStyle={styles.indicator}
          labelStyle={styles.labelStyle}
          scrollEnabled={true}
          pressColor="#222"
          pressOpacity={0.7}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  text: {
    color: '#00BFFF',
    fontSize: 18,
  },
  tabBar: {
    backgroundColor: '#1A1A1A',
  },
  indicator: {
    backgroundColor: '#007AFF',
    height: 3,
  },
  tabStyle: {
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DDDDDD',
    textTransform: 'none',
  }
});
