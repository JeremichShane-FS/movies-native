import { Link, useRouter } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ADD_MOVIE, MOVIE, MOVIES, ROOT } from "../constants/paths";
import { MoviesContext } from "../context/MoviesContext";
import { sortMoviesByYearAndTitle } from "../utils/sortMoviesByYearAndTitle";

export default function Dashboard() {
  const { movies, loading, error } = useContext(MoviesContext);
  const sortedMovies = sortMoviesByYearAndTitle(movies);
  const router = useRouter();

  const handleAddMovie = () => {
    router.push(`${MOVIES}${ADD_MOVIE}`);
  };

  return (
    <ScrollView style={styles.dashboard}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Movies Dashboard</Text>
          <Text style={styles.subtitle}>Click on movie to edit</Text>
        </View>
        <View style={styles.nav}>
          <Link href={ROOT} style={styles.link}>
            <Text>Home</Text>
          </Link>
          <Link href={ADD_MOVIE} style={styles.link}>
            <TouchableOpacity style={styles.button} onPress={handleAddMovie}>
              <Text style={styles.buttonText}>Add Movie</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <View style={styles.main}>
        {loading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <View style={styles.list}>
            {sortedMovies.map(movie => (
              <TouchableOpacity key={movie._id} style={styles.listItem}>
                <Link href={MOVIE(movie._id)} style={styles.movieLink}>
                  <Image source={{ uri: movie.poster }} style={styles.moviePoster} />
                  <View style={styles.movieInfo}>
                    <Text style={styles.movieTitle}>{movie.title}</Text>
                    <Text style={styles.movieYear}>{movie.releaseYear}</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    marginBottom: 16,
  },
  titleContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    color: "#9e9e9e",
    marginTop: 8,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  link: {
    color: "#007bff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontSize: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    padding: 8,
  },
  main: {
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    alignSelf: "center",
    width: "100%",
    marginBottom: 16,
  },
  movieLink: {
    display: "flex",
    alignItems: "center",
  },
  moviePoster: {
    width: 50,
    height: 75,
    borderRadius: 4,
    marginRight: 16,
  },
  movieInfo: {
    flexGrow: 1,
    padding: 16,
  },
  movieTitle: {
    fontSize: 16,
  },
  movieYear: {
    color: "#4a4a4a",
  },
  loading: {
    textAlign: "center",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
});
