import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

export default function MoviesLayout() {
  const { movies } = useContext(MoviesContext);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Movies" }} />
      <Stack.Screen
        name="[id]"
        options={({ route }) => {
          const { id } = route.params || {};
          const movie = movies.find(movie => movie._id === id);

          if (movie) {
            return {
              title: movie.title,
            };
          }
          return {
            title: "Movies",
          };
        }}
      />
      <Stack.Screen name="add" options={{ title: "Add Movie" }} />
    </Stack>
  );
}
