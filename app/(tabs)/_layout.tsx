import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false, // Отключаем встроенные названия
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    switch (route.name) {
                        case "index":
                            iconName = focused
                                ? require("../../assets/images/tab-icons/home-active.png")
                                : require("../../assets/images/tab-icons/home.png");
                            break;
                        case "trade":
                            iconName = focused
                                ? require("../../assets/images/tab-icons/trade-active.png")
                                : require("../../assets/images/tab-icons/trade.png");
                            break;
                        case "markets":
                            iconName = focused
                                ? require("../../assets/images/tab-icons/markets-active.png")
                                : require("../../assets/images/tab-icons/markets.png");
                            break;
                        case "portfolio":
                            iconName = focused
                                ? require("../../assets/images/tab-icons/portfolio-active.png")
                                : require("../../assets/images/tab-icons/portfolio.png");
                            break;
                    }

                    return (
                        <View style={styles.tabIconContainer}>
                            <Image
                                source={iconName}
                                style={[styles.icon, focused ? styles.iconFocused : null]}
                            />
                            <Text style={[styles.tabText, focused ? styles.tabTextFocused : null]}>
                                {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                            </Text>
                        </View>
                    );
                },
                tabBarActiveTintColor: "#14ED85", 
                tabBarInactiveTintColor: "#52566F", 
                tabBarStyle: {
                    backgroundColor: "#090B25",
                    borderTopWidth: 0,
                    height: 60,
                },
            })}
        >
            <Tabs.Screen name="home" />
            <Tabs.Screen name="trade" />
            <Tabs.Screen name="markets" />
            <Tabs.Screen name="portfolio" />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabIconContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconFocused: {
        tintColor: "#14ED85", // Цвет активной иконки
    },
    tabText: {
        fontSize: 10,
        color: "#52566F", // Цвет неактивного текста
    },
    tabTextFocused: {
        color: "#14ED85", // Цвет активного текста
    },
});
