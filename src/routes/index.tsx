import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favorite from "../screens/Favorite";
import Home from "../screens/Home";
import Login from "../screens/Login";
import MovieDetail from "../screens/MovieDetail";
import Splash from "../screens/Splash";

export type RootStackParamList = {
	Splash: undefined;
	Login: undefined;
	Home: undefined;
	Favorite: undefined;
	MovieDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash">
				<Stack.Screen
					name="Splash"
					component={Splash}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Favorite"
					component={Favorite}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="MovieDetail"
					component={MovieDetail}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
