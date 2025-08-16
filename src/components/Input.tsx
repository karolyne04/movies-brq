import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Animated, TextInputProps } from "react-native";
import { colors } from "../theme/colors";
import Icon from "./Icon";

interface InputProps extends TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    iconName?: string;
    secureTextEntry?: boolean;
}
export default function Input({
    label,
    value,
    onChangeText,
    iconName,
    secureTextEntry = false,
    ...rest
}: InputProps
) {
    const [isFocused, setIsFocused] = useState(false);

    const labelAnim = useRef(new Animated.Value(value ? 1 : 0)).current;


    useEffect(() => {
        Animated.timing(labelAnim, {
            toValue: isFocused || value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    const labelStyle = {
        position: "absolute",
        left: 44,
        top: labelAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 3], // posição placeholder → posição label
        }),
        fontSize: labelAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12], // tamanho 16 → tamanho 12
        }),
        color: isFocused ? colors.primary : colors.secondary,
    };

    return (
        <View style={[styles.container, isFocused && styles.focused]}>
            <Icon name={iconName} size={24} color={colors.secondary} />

            <Animated.Text style={labelStyle}>
                {label}
            </Animated.Text>

            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onFocus={() => setIsFocused(true)}

                onBlur={() => setIsFocused(false)}
            />
            <TouchableOpacity onPress={() => onChangeText("")} style={styles.clearButton}>
                <Icon name="close" size={20} color={colors.secondary} />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: 325,
        height: 56,
        gap: 5,
        borderRadius: 4,
        backgroundColor: colors.tertiary,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        position: "relative",
        borderBottomWidth: 2,
        borderBottomColor: colors.secondary,
    },
    focused: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
    },
    input: {
        flex: 1,
        color: colors.secondary,
        fontSize: 16,
    },
    clearButton: {
        marginLeft: 8,
    },
});
