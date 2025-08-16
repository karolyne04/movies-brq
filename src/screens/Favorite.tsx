import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MovieCard from "../components/MovieCard";
import { useFavoritesStore } from "../store/favoritesStore";
import { colors } from "../theme/colors";

const Favorite = () => {
	const { favorites } = useFavoritesStore();
	const navigation = useNavigation();

	if (favorites.length === 0) {
		return (
			<View style={styles.emptyContainer}>
				<Text style={styles.emptyText}>Nenhum filme favoritado ainda.</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={favorites}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<MovieCard
					movie={item}
					onPress={() => navigation.navigate("MovieDetail", { movie: item })}
				/>
			)}
			contentContainerStyle={styles.list}
		/>
	);
};

export default Favorite;

const styles = StyleSheet.create({
	list: {
		padding: 16,
		backgroundColor: colors.neutral,
	},
	emptyContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.neutral,
	},
	emptyText: {
		color: colors.secondary,
		fontSize: 16,
	},
});
