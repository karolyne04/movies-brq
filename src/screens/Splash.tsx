import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";

const Splash = () => {
	const navigation = useNavigation();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.replace("Login");
		}, 3000);

		return () => clearTimeout(timer);
	}, [navigation]);

	return (
		<View style={styles.container}>
			<Image source={require("../assets/img/logo.png")} style={styles.logo} />
		</View>
	);
};

export default Splash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.neutral,
	},
	logo: {
		width: 224,
		height: 224,
		resizeMode: "contain",
	},
});
