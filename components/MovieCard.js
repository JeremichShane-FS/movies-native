import { Image, StyleSheet, Text, View } from "react-native";

const MovieCard = ({ title, releaseYear, poster }) => {
  return (
    <View style={styles.movieCard}>
      <Image source={{ uri: poster }} style={styles.poster} resizeMode="contain" />
      <View style={styles.details}>
        <View style={styles.item}>
          <Text style={styles.term}>Title:</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.term}>Release Year:</Text>
          <Text style={styles.releaseYear}>{releaseYear}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    width: 125,
  },
  poster: {
    width: "100%",
    height: 200,
  },
  item: {
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  term: {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
  },
  title: {
    fontWeight: "bold",
    color: "#000000",
  },
  releaseYear: {
    color: "#757575",
  },
});

export default MovieCard;
