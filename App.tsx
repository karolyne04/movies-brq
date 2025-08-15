import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { colors } from './src/theme/colors';
import { useFonts, Nunito_700Bold, Nunito_400Regular } from "@expo-google-fonts/nunito";

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

      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.secondary}
        translucent={false}
      />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
});
