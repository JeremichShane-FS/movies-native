import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MoviesContext } from "../../context/MoviesContext";

import API from "../../api";
import { MOVIES } from "../../constants/paths";
import AddForm from "./addForm";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const { movies, setMovies } = useContext(MoviesContext);
  const [movie, setMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const selectedMovie = movies.find(movie => movie._id === id);

    setMovie(selectedMovie);
  }, [id, movies]);

  const handleDelete = async () => {
    try {
      await API.deleteMovie(id);
      setMovies(prevState => prevState.filter(movie => movie._id !== id));
      router.push(MOVIES);
    } catch (err) {
      console.error("Failed to delete movie:", err);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmit = async formData => {
    try {
      await API.updateMovie(id, formData);
      setMovies(prevState =>
        prevState.map(movie => (movie._id === id ? { ...movie, ...formData } : movie))
      );
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update movie:", err);
    }
  };

  if (!movie) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.movieDetails}>
        <Image source={{ uri: movie.poster }} style={styles.poster} />
        <View style={styles.content}>
          <Text style={styles.genre}>{movie.genre}</Text>
          <Text style={styles.releaseYear}>{movie.releaseYear}</Text>
          <Text style={styles.description}>{movie.description}</Text>
          <View style={styles.actions}>
            <View>
              <TouchableOpacity onPress={handleDelete} style={styles.button}>
                <Text style={styles.buttonText}>Delete Movie</Text>
              </TouchableOpacity>

              {isEditing ? (
                <View>
                  <TouchableOpacity onPress={handleCancel} style={styles.buttonCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity onPress={handleEdit} style={styles.button}>
                    <Text style={styles.buttonText}>Edit Movie</Text>
                  </TouchableOpacity>
                </View>
              )}
              {isEditing && (
                <AddForm initialData={movie} onSubmit={handleSubmit} buttonText="Save Changes" />
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  movieDetails: {
    alignItems: "center",
    padding: 16,
    marginVertical: 16,
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 4,
    marginBottom: 20,
  },
  content: {
    padding: 16,
  },
  genre: {
    marginVertical: 8,
  },
  releaseYear: {
    marginVertical: 8,
  },
  description: {
    marginVertical: 8,
    color: "#757575",
  },
  actions: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
    justifyContent: "center",
  },
  button: {
    width: 125,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#007bff",
    borderRadius: 4,
    alignSelf: "center",
  },
  buttonCancel: {
    width: 125,
    padding: 10,
    backgroundColor: "#dc3545",
    borderRadius: 4,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
