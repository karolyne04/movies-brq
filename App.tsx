import {
	Nunito_400Regular,
	Nunito_700Bold,
	useFonts,
} from "@expo-google-fonts/nunito";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import Routes from "./src/routes";
import { colors } from "./src/theme/colors";

export default function App() {
	const [fontsLoaded] = useFonts({
		Nunito_700Bold,
		Nunito_400Regular,
		Roboto_500Medium,
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			{Platform.OS === "android" && <View style={styles.statusBarBackground} />}

			<ExpoStatusBar style="light" />
			<Routes />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	statusBarBackground: {
		height: Platform.OS === "android" ? 24 : 0,
		backgroundColor: colors.neutral,
	},
});
