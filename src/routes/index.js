import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}