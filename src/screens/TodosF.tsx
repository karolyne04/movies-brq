import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, View, StyleSheet } from "react-native";
import { getPopularMovies, Movie } from "../service/tmdb";
import MovieCard from "../components/MovieCard";
import { useNavigation } from "@react-navigation/native";

const TodosF = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        async function load() {
            try {
                console.log("Carregando filmes...");
                const data = await getPopularMovies();
                console.log("Filmes recebidos:", data.length);
                setMovies(data);
            } catch (err: any) {
                console.error("Erro no load():", err.message);
                Alert.alert("Erro", "Não foi possível carregar os filmes");
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    const handlePressMovie = (movie: Movie) => {
        // navigation.navigate("MovieDetail" as never, { movieId: movie.id } as never);
        navigation.navigate("MovieDetail", { movie });

    };


    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

    return (
        <View style={{ flex: 1, paddingVertical: 8 }}>
            <FlatList
                data={movies}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <MovieCard movie={item} onPress={handlePressMovie} />}
                numColumns={2} // grid 2 colunas
                contentContainerStyle={styles.list}
                columnWrapperStyle={styles.row} // espaço entre colunas
            />
        </View>
    );
};

export default TodosF;

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 8,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 16,
    },
});
