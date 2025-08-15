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
        backgroundColor: colors.primary, // cor ativa (ex: laranja)
    },
    buttonDisabled: {
        backgroundColor: colors.gray, // cor inativa (cinza)
    },
    buttonText: {
        fontWeight: "500",
        color: colors.secondary, // cor do texto
        fontFamily: "Roboto_500Medium", // fonte + peso
        fontSize: 14, // font-size
        lineHeight: 20, // line-height
        letterSpacing: 0.1, // letter-spacing em pontos
        textAlign: "center", // centralizado horizontalmente
        textAlignVertical: "center", // vertical-align (Android)
        // ...Platform.select({
        //     ios: { includeFontPadding: false }, // remove padding extra no iOS
        // }),
    },
    textDisabled: {
        color: colors.tertiary,
    },
});

export default Button;
