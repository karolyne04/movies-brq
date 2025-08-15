import { View, Text, StyleSheet } from "react-native";
import Icon from "../components/Icon";
import { colors } from "../theme/colors";

const Card = ({ icon, value, label }: { icon: string; value: string | number; label: string }) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Icon name={icon} size={24} color={styles.icon.color} />
            <Text style={styles.label}>{label}</Text>

        </View>
        <Text style={styles.value}>{value}</Text>
    </View>
);

export default Card;

const styles = StyleSheet.create({
    container: {
        width: 156,
        height: 76,
        backgroundColor: colors.tertiary,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        gap: 4,
    },
    icon: {
        color: colors.primary
    },
    label: {
        color: colors.primary,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 4,
    },
    value: {
        color: colors.secondary,
        marginTop: 5
    }
})