import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../theme/colors";

type ButtonProps = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
};

const Button = ({ title, onPress, disabled = false }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled ? styles.buttonDisabled : styles.buttonEnabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.buttonText, disabled && styles.textDisabled]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 328,
        height: 40,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonEnabled: {
        backgroundColor: colors.primary,
    },
    buttonDisabled: {
        backgroundColor: colors.gray,
    },
    buttonText: {
        fontWeight: "500",
        color: colors.secondary,
        fontFamily: "Roboto_500Medium",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        textAlign: "center",
        textAlignVertical: "center",

    },
    textDisabled: {
        color: colors.tertiary,
    },
});

export default Button;
