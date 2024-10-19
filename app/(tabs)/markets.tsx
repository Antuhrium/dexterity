import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

const MarketsScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<"coin" | "watchlist">(
        "watchlist"
    );
    // const chains = ["POL", "BNB", "ETH", "TRX", "TRX1", "TRX2"];
    const chains = [
        {
            name: "POL",
            icon: require("../../assets/images/crypto-icons/POL.png"),
        },
        {
            name: "BNB",
            icon: require("../../assets/images/crypto-icons/BNB.png"),
        },
        {
            name: "ETH",
            icon: require("../../assets/images/crypto-icons/ETH.png"),
        },
        {
            name: "TRX",
            icon: require("../../assets/images/crypto-icons/TRX.png"),
        },
        {
            name: "POL",
            icon: require("../../assets/images/crypto-icons/POL.png"),
        },
        {
            name: "BNB",
            icon: require("../../assets/images/crypto-icons/BNB.png"),
        },
        {
            name: "ETH",
            icon: require("../../assets/images/crypto-icons/ETH.png"),
        },
        {
            name: "TRX",
            icon: require("../../assets/images/crypto-icons/TRX.png"),
        },
    ];
    const cryptoList = [
        {
            name: "POL",
            shortName: "POL",
            icon: require("../../assets/images/crypto-icons/POL.png"),
            price: "296.6",
            change: "+15.85",
        },
        {
            name: "Binance Coin",
            shortName: "BNB",
            icon: require("../../assets/images/crypto-icons/BNB.png"),
            price: "434.5",
            change: "-17.41",
        },
        {
            name: "POL",
            shortName: "POL",
            icon: require("../../assets/images/crypto-icons/POL.png"),
            price: "296.6",
            change: "+15.85",
        },
        {
            name: "Binance Coin",
            shortName: "BNB",
            icon: require("../../assets/images/crypto-icons/BNB.png"),
            price: "434.5",
            change: "-17.41",
        },
        {
            name: "POL",
            shortName: "POL",
            icon: require("../../assets/images/crypto-icons/POL.png"),
            price: "296.6",
            change: "+15.85",
        },
        {
            name: "Binance Coin",
            shortName: "BNB",
            icon: require("../../assets/images/crypto-icons/BNB.png"),
            price: "434.5",
            change: "-17.41",
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.highlight}
                    source={require("../../assets/images/logo-glow.png")}
                    resizeMode="contain"
                />
                <Image
                    source={require("../../assets/images/Logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* Баланс и кнопка */}
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceTitle}>Total Balance</Text>
                <View style={styles.balanceContainerInner}>
                    <Text style={styles.balance}>$1500.49</Text>
                    <TouchableOpacity style={styles.button}>
                        <Image
                            source={require("../../assets/images/plus-icon.png")}
                            style={styles.buttonImg}
                            resizeMode="contain"
                        />
                        <Text style={styles.buttonText}>Add Funds</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Chains с горизонтальным скроллом */}
            <View style={styles.chainsContainer}>
                <Text style={styles.chainsTitle}>Chains</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.chainsContainerInner}
                >
                    {chains.map((crypto, index) => (
                        <View
                            key={`${crypto.name}-${index}`}
                            style={styles.chainItem}
                        >
                            <Image
                                source={crypto.icon}
                                style={styles.chainImg}
                                resizeMode="contain"
                            />
                            <Text style={styles.chainText}>{crypto.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.separator} />

            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setActiveTab("watchlist")}>
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === "watchlist" && styles.activeTabText,
                        ]}
                    >
                        Watchlist
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("coin")}>
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === "coin" && styles.activeTabText,
                        ]}
                    >
                        Coin
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Поле ввода для поиска криптовалют */}
            <View style={styles.searchContainer}>
                <Image
                    source={require(`../../assets/images/search-icon.png`)}
                    style={styles.searchImg}
                    resizeMode="contain"
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Coins"
                    placeholderTextColor="#52566F"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            {/* Список криптовалют */}
            <ScrollView style={styles.currlist}>
                {cryptoList
                    .filter((crypto) =>
                        crypto.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    )
                    .map((crypto, index) => (
                        <View
                            key={`${crypto.name}-${index}`}
                            style={styles.cryptoItem}
                        >
                            <Image
                                source={crypto.icon}
                                style={styles.cryptoImage}
                                resizeMode="cover"
                            />
                            <View style={styles.cryptoDetails}>
                                <Text style={styles.cryptoName}>
                                    {crypto.name}
                                </Text>
                                <Text style={styles.cryptoShortName}>
                                    {crypto.shortName}
                                </Text>
                            </View>
                            <View style={styles.cryptoStats}>
                                <Text
                                    style={[
                                        styles.cryptoPercentage,
                                        crypto.change.includes("-") &&
                                            styles.cryptoPercentageRed,
                                    ]}
                                >
                                    {crypto.change}%
                                </Text>
                                <Text style={styles.cryptoPrice}>
                                    ${crypto.price}
                                </Text>
                            </View>
                        </View>
                    ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#090B25",
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 60,
        position: "relative",
    },
    highlight: {
        position: "absolute",
        top: -200,
        zIndex: 1,
    },
    logo: {
        width: 32,
        height: 32,
        zIndex: 2,
    },
    balanceContainer: {
        marginTop: 28,
        flexDirection: "column",
        gap: 12,
    },
    balanceTitle: {
        fontSize: 16,
        lineHeight: 19.36,
        color: "#5B5E71",
        fontFamily: "InterTightRegular",
    },
    balanceContainerInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    balance: {
        fontSize: 32,
        lineHeight: 41.6,
        color: "#fff",
        fontFamily: "chakraSemiBold",
    },
    button: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "transaprent",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    buttonImg: {
        width: 16,
        height: 16,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 19,
        color: "#fff",
        fontFamily: "InterTightSemibold",
    },
    chainsContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    chainsTitle: {
        fontSize: 16,
        lineHeight: 19.36,
        color: "#52566F",
        fontFamily: "InterTightLight",
    },
    chainsContainerInner: {},
    chainItem: {
        marginRight: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    chainImg: {
        width: 24,
        height: 24,
    },
    chainText: {
        fontSize: 16,
        lineHeight: 19.36,
        color: "#fff",
        fontFamily: "interTightLight",
    },
    separator: {
        height: 1,
        backgroundColor: "#2B2E45",
        marginVertical: 28,
    },
    tabContainer: {
        flexDirection: "row",
        gap: 16,
    },

    tabText: {
        fontSize: 20,
        lineHeight: 20,
        fontFamily: "InterTightRegular",
        color: "#52566F",
    },
    activeTabText: {
        color: "#fff",
    },

    searchContainer: {
        position: "relative",
        marginTop: 16, // Убираем marginTop из searchInput
    },

    searchImg: {
        position: "absolute",
        zIndex: 2,
        left: 16,
        top: "50%", // Центрируем по вертикали
        transform: [{ translateY: -12 }], // Половина высоты изображения
        width: 24,
        height: 24,
    },
    searchInput: {
        zIndex: 1,
        backgroundColor: "#0F132F",
        paddingVertical: 14,
        paddingLeft: 50,
        fontFamily: "InterTightRegular",
        fontSize: 16,
        lineHeight: 19,
        color: "#FFFFFF",
    },

    currlist: {
        marginTop: 16,
        backgroundColor: "#0F132F",
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
    cryptoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#161A36",
    },

    cryptoImage: {
        width: 32,
        height: 32,
        marginRight: 16,
    },

    cryptoDetails: {
        flex: 1,
    },

    cryptoName: {
        fontSize: 16,
        lineHeight: 19,
        color: "#fff",
        fontFamily: "interTightSemiBold",
    },

    cryptoShortName: {
        fontSize: 14,
        lineHeight: 19,
        color: "#5B5E71",
        fontFamily: "InterTightRwgular",
    },

    cryptoStats: {
        alignItems: "flex-end",
    },

    cryptoPercentage: {
        fontSize: 16,
        lineHeight: 19,
        color: "#4C9D49",
        fontFamily: "interTightSemiBold",
    },
    cryptoPercentageRed: {
        color: "#F60239",
    },

    cryptoPrice: {
        fontSize: 14,
        lineHeight: 19,
        color: "#fff",
        fontFamily: "InterTightRegular",
    },
});

export default MarketsScreen;
