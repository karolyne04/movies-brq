import { Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import InputUsuario from "../components/Input";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes"; // ajuste o caminho
import { useState } from "react";
import Input from "../components/Input";

type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Login"
>;

const Login = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ usuario: "", senha: "" });

    const handleLogin = () => {
        let newErrors = { usuario: "", senha: "" };

        if (!username) {
            newErrors.usuario = "Usuário é obrigatório";
        }

        if (!password) {
            newErrors.senha = "Senha é obrigatória";
        } else if (!/^\d+$/.test(password)) {
            newErrors.senha = "A senha deve conter apenas números";
        }

        setErrors(newErrors);

        // Se não tiver erros, tenta logar
        if (!newErrors.usuario && !newErrors.senha) {
            if (username === "user" && password === "123") {
                Alert.alert("Sucesso", "Login realizado com sucesso!");
                navigation.navigate("Home");
            } else {
                setErrors({ ...newErrors, senha: "Usuário ou senha inválidos" });
            }
        }
    };

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >

            <Image source={require('../assets/img/logo.png')} style={styles.logo} />
            <Input
                label="Usuário"
                iconName="user"
                value={username}
                onChangeText={setUsername}

            />
            {errors.usuario ? (
                <Text style={styles.errorText}>{errors.usuario}</Text>
            ) : null}
            <Input
                label="Senha"
                iconName="lock"
                value={password}
                onChangeText={setPassword}

                secureTextEntry
            />
            {errors.senha ? (
                <Text style={styles.errorText}>{errors.senha}</Text>
            ) : null}
            <Button
                title="Entrar"
                onPress={handleLogin}
                disabled={username.trim() === "" || password.trim() === ""}
            />

            <Text style={styles.forgotPassword}
            >Esqueci a Senha</Text>

        </KeyboardAvoidingView>
    );
};

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.neutral,
        gap: 20
    },
    logo: {
        width: 224,
        height: 224,
    },
    forgotPassword: {
        color: colors.secondary,
        marginTop: 12,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    errorText: {
        color: "red",
        fontSize: 12,
        alignSelf: "center",
        marginLeft: 5,
    },
});
