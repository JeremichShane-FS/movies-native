import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContextProvider } from "../context/index";

import headerImage from "../assets/favicon.png";

export default function AppLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppContextProvider>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              headerTitle: () => (
                <View style={styles.headerTitle}>
                  <Image source={headerImage} style={styles.headerImage} />
                  <Text style={styles.headerText}>MoviesDB</Text>
                </View>
              ),
              title: "Home",
              tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
            }}
          />
          <Tabs.Screen
            name="movies"
            options={{
              title: "Movies",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="videocamera" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="dashboard"
            options={{
              title: "Dashboard",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="dashboard" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </AppContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
