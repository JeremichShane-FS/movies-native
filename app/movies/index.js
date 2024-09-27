import { Link } from "expo-router";
import { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { MovieCard } from "../../components";
import { MoviesContext } from "../../context/MoviesContext";

import { MOVIE } from "../../constants/paths";
import { sortMoviesByYearAndTitle } from "../../utils/sortMoviesByYearAndTitle";

const Movies = () => {
  const { movies, loading, error } = useContext(MoviesContext);
  const sortedMovies = sortMoviesByYearAndTitle(movies);

  return (
    <View style={styles.movies}>
      <ScrollView contentContainerStyle={styles.list}>
        {loading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          sortedMovies.map(movie => (
            <Link href={`${MOVIE(movie._id)}`} key={movie._id} style={styles.listItem}>
              <MovieCard
                title={movie.title}
                releaseYear={movie.releaseYear}
                poster={movie.poster}
              />
            </Link>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  movies: {
    flex: 1,
    padding: 20,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 30,
  },
  listItem: {
    width: "45%",
    marginBottom: 20,
  },
});

export default Movies;
