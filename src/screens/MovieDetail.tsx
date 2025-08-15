import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Movie } from "../service/tmdb";
import { colors } from "../theme/colors";
import Icon from "../components/Icon";
import Card from "../components/Card";
import { useFavoritesStore } from "../store/favoritesStore";

type MovieDetailRouteProp = {
    params: {
        movie: Movie;
    };
};

const MovieDetail = () => {
    const route = useRoute<MovieDetailRouteProp>();
    const navigation = useNavigation();
    const { movie } = route.params;
    const [scrolled, setScrolled] = useState(false);
    const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
    const fav = isFavorite(movie.id);

    const handleScroll = (event) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        setScrolled(yOffset > 50);
    };

    return (
        <View style={styles.container}>

            <View
                style={[
                    styles.header,
                    { backgroundColor: scrolled ? colors.tertiary : "transparent" },
                ]}
            >
                <TouchableOpacity
                    style={[
                        styles.iconButton,
                        { backgroundColor: scrolled ? colors.neutral : colors.neutral },
                    ]}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="arrowGo"
                        size={12}
                        color={scrolled ? colors.primary : colors.secondary}
                    />
                </TouchableOpacity>

                {scrolled && <Text style={styles.headerTitle}>{movie.title}</Text>}

                <TouchableOpacity
                    style={[
                        styles.iconButton,
                        { backgroundColor: scrolled ? colors.primary : colors.secondary },
                    ]}
                    onPress={() => {
                        fav ? removeFavorite(movie.id) : addFavorite(movie);
                    }}
                >
                    <Icon
                        name="heartCircle"
                        size={12}
                        color={scrolled ? colors.neutral : colors.neutral}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
                {/* Poster */}
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={styles.poster}
                />

                {/* Detalhes */}
                <View style={styles.details}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.subtitle}>SINOPSE</Text>
                    <Text style={styles.overview}>{movie.overview}</Text>

                    <View style={styles.row}>
                        <Card icon="calendar" value={movie.release_date} label="Data de Lançamento" />
                        <Card icon="star" value={movie.vote_average} label="Avaliação" />
                    </View>

                    <View style={styles.row}>
                        <Card icon="heart" value={movie.vote_count} label="Favoritos" />
                        <Card icon="notification" value={movie.poster_path} label="Notificações" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default MovieDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral,
        justifyContent: "space-between",
        gap: 20
    },
    poster: {
        width: "100%",
        height: 400,
    },
    header: {
        height: 106,
        paddingHorizontal: 16,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
        paddingTop: 40,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.secondary,
    },
    iconButton: {
        padding: 8,
        borderRadius: 20,
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    details: {
        padding: 16,
    },
    title: {

        fontWeight: "bold",
        marginBottom: 16,
        color: colors.secondary,
        fontFamily: "Nunito_700Bold", // fonte + peso
        fontSize: 28, // font-size
        lineHeight: 36, // line-height
        textAlignVertical: "center", // vertical-align: middle
        letterSpacing: 0, // letter-spacing
    },
    subtitle: {
        color: colors.primary,
        fontWeight: "bold",
        marginBottom: 8,
        fontFamily: "Nunito_700Bold",
        fontSize: 14,
    },
    overview: {
        fontSize: 16,

        color: colors.secondary,
        fontFamily: "Nunito_400Regular", // fonte + peso 400

        lineHeight: 24, // line-height
        letterSpacing: 0, // letter-spacing
        textAlignVertical: "center", // vertical-align: middle
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
});
