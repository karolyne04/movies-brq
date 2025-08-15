import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";

const HeaderMovie = ({ title }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.group} onPress={() => console.log("Go back")}>
                <Icon name="arrowGo" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.group}>
                <Icon name="heart" size={24} color="#000" />
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    );
};

export default HeaderMovie;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#f5f5f5"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    group: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 8
    }
})