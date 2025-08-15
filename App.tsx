import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, StatusBar as RNStatusBar } from 'react-native';
import Routes from './src/routes';

import { colors } from './src/theme/colors';
import { useFonts, Nunito_700Bold, Nunito_400Regular } from "@expo-google-fonts/nunito";

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { Roboto_500Medium } from "@expo-google-fonts/roboto";


export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_700Bold, // corresponde ao font-weight: 700
    Nunito_400Regular, // corresponde ao font-weight: 400
    Roboto_500Medium, // corresponde ao font-weight: 500
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {Platform.OS === 'android' && (
        <View style={styles.statusBarBackground} />
      )}

      {/* StatusBar do Expo */}
      <ExpoStatusBar
        style="light" // 'light' se fundo escuro

      />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
  statusBarBackground: {
    height: Platform.OS === 'android' ? 24 : 0, // altura aproximada da StatusBar
    backgroundColor: colors.neutral, // mesma cor que no design
  },
});
