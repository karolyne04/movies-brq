import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import { colors } from "../theme/colors";
import { useState } from "react";
import TodosF from "./TodosF";
import Favorite from "./Favorite";

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
                <TodosF />
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
        color: '#aaa',
        fontSize: 16,
        fontFamily: "Nunito_700Bold", // fonte + peso 700

        lineHeight: 24, // line-height
        letterSpacing: 0, // letter-spacing
        textAlign: "center", // centralizado horizontalmente
    },
    tabTextActive: {
        color: colors.primary, // cor ativa
        fontWeight: 'bold',
    },
    tabIndicator: {
        marginTop: 4,
        height: 2,
        width: '100%',
        backgroundColor: '#FFA500',
    },
});