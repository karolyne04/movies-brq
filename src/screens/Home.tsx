import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import { colors } from "../theme/colors";
import { useState } from "react";
import TodosF from "./AllMovies";
import Favorite from "./Favorite";
import AllMovies from "./AllMovies";

export default function Home() {
    const [activeTab, setActiveTab] = useState('todos');

    return (
        <View style={styles.container} >
            <Header />

            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('todos')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'todos' && styles.tabTextActive
                    ]}>
                        Todos os Filmes
                    </Text>
                    {activeTab === 'todos' && <View style={styles.tabIndicator} />}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('favoritos')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'favoritos' && styles.tabTextActive
                    ]}>
                        Filmes Favoritos
                    </Text>
                    {activeTab === 'favoritos' && <View style={styles.tabIndicator} />}
                </TouchableOpacity>
            </View>
            {activeTab === 'todos' ? (
                <AllMovies />
            ) : (
                <Favorite />
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral,
        alignItems: "center",
    },
    tabsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    tab: {
        alignItems: 'center',
        paddingVertical: 10,
        flex: 1,
    },
    tabText: {
        color: colors.gray,
        fontSize: 16,
        fontFamily: "Nunito_700Bold",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
    },
    tabTextActive: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    tabIndicator: {
        marginTop: 4,
        height: 2,
        width: '100%',
        backgroundColor: colors.primary,
    },
});