import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";
import Icon from "./Icon";

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);
	const navigation = useNavigation();
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};
	const handleLogout = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: "Login" }],
		});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>BRQ Movies</Text>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				{/* Botão dos 3 pontinhos */}
				<TouchableOpacity
					style={[styles.circle, menuActive && styles.circleActive]}
					onPress={toggleMenu}
				>
					<Icon
						name="tra"
						color={menuActive ? colors.neutral : colors.secondary}
					/>
				</TouchableOpacity>

				{/* Botão que aparece ao clicar */}
				{menuActive && (
					<TouchableOpacity
						style={styles.secondaryButton}
						onPress={handleLogout}
					>
						<Icon name="logout" color={colors.secondary} />
						<Text style={styles.secondaryButtonText}>Sair</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginTop: 32,
		width: "100%",
		backgroundColor: colors.neutral,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		color: colors.secondary,
		fontFamily: "Nunito_400Regular",
		fontSize: 22,
		lineHeight: 28,
		letterSpacing: 0,
		textAlignVertical: "center",
	},
	circle: {
		width: 36,
		height: 36,
		borderRadius: 18,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "transparent",
	},
	circleActive: {
		backgroundColor: colors.primary,
		color: colors.neutral,
	},
	secondaryButton: {
		flexDirection: "row",
		alignItems: "center",
		width: 117,
		height: 44,
		justifyContent: "center",
		marginLeft: 8,
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 6,
		backgroundColor: colors.tertiary,
	},
	secondaryButtonText: {
		color: colors.secondary,
		fontSize: 14,
		fontWeight: "bold",
	},
});
