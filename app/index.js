import { Image, StyleSheet, Text, View } from "react-native";
import heroImage from "../assets/images/movies.jpg";

// TODO:  Implement functionality to reset the Movies Tab navigation state when switching away from the tab and returning.
// TODO:  Separate the Styles from their respective components into a separate file.
// TODO:  Fix addForm Navigation
// TODO:  Fix the bug where I delete a movie and the header still tries to navigate to the deleted movie.

export default function Home() {
  return (
    <View style={styles.home}>
      <View style={styles.hero}>
        <Image source={heroImage} style={styles.heroImage} />
        <View style={styles.heroContent}>
          <Text style={styles.motto}>Your Ultimate Movie Database</Text>
          <Text style={styles.description}>
            Discover, explore, and keep track of your favorite movies. Join our community and dive
            into the world of cinema.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  hero: {
    position: "relative",
    color: "#ffffff",
    alignItems: "center",
  },
  heroImage: {
    opacity: 0.8,
  },
  heroContent: {
    position: "absolute",
    top: "25%",

    backgroundColor: "rgba(0, 0, 0, 0.85)",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  motto: {
    fontSize: 32,
    color: "#ffffff",
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    color: "#ffffff",
  },
});
