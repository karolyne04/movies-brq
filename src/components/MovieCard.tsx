import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";
import { Movie } from "../service/api";
import { colors } from "../theme/colors";

interface MovieCardProps {
    movie: Movie;
    onPress: (movie: Movie) => void;
}

const MovieCard = ({ movie, onPress }: MovieCardProps) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(movie)}>
            <Image
                source={{
                    uri: movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/120x180?text=Sem+Imagem",
                }}
                style={styles.image}
            />
            <Text style={styles.title} numberOfLines={1}>
                {movie.title}
            </Text>
        </TouchableOpacity>
    );
};

export default MovieCard;

const styles = StyleSheet.create({
    card: {
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
    },
    image: {
        width: 120,
        height: 180,
        borderRadius: 8,
    },
    title: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        width: 120,
        color: colors.secondary
    },
});
