import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./src/components/constant/style";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import AuthContent from "./src/components/Auth/AuthContent";
import IconButton from "./src/components/ui/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoaderKit from 'react-native-loader-kit'


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext)
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
        headerRight: ({ tintColor }) => <IconButton icon="exit" color={tintColor} size={24}
          onPress={authCtx.logout} />
      }} />
    </Stack.Navigator>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true)
  const authCtx = useContext(AuthContext)
  useEffect(() => {
    async function fetchToken() {

      const StoredToken = await AsyncStorage.getItem('token')
      if (StoredToken) {
        authCtx.authenicate(StoredToken)
      }
      setIsTryingLogin(false)
    }
    fetchToken()
  }, [])
  if (isTryingLogin) {
    return <LoaderKit
      style={{ width: 50, height: 50 }}
      name={'BallPulse'}
      color={'#390449f8'}
    />
  }

  return <Navigation />

}


function Navigation() {

  const authCtx = useContext(AuthContext)

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}

    </NavigationContainer>

  );
}

export default function App() {

  return (
    <>
      <StatusBar barStyle='light-content' />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
