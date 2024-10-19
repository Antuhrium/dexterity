import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        chakraLight: require("../assets/fonts/ChakraPetch/ChakraPetch-Light.ttf"),
        chakraRegular: require("../assets/fonts/ChakraPetch/ChakraPetch-Regular.ttf"),
        chakraMedium: require("../assets/fonts/ChakraPetch/ChakraPetch-Medium.ttf"),
        chakraSemiBold: require("../assets/fonts/ChakraPetch/ChakraPetch-SemiBold.ttf"),
        chakraBold: require("../assets/fonts/ChakraPetch/ChakraPetch-Bold.ttf"),
        interTightLight: require("../assets/fonts/InterTight/InterTight-Light.ttf"),
        interTightRegular: require("../assets/fonts/InterTight/InterTight-Regular.ttf"),
        interTightMedium: require("../assets/fonts/InterTight/InterTight-Medium.ttf"),
        interTightSemiBold: require("../assets/fonts/InterTight/InterTight-SemiBold.ttf"),
        interTightBold: require("../assets/fonts/InterTight/InterTight-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
