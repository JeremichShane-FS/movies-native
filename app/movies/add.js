import { useRouter } from "expo-router";
import { useContext } from "react";
import { ScrollView } from "react-native";
import { MoviesContext } from "../../context/MoviesContext";
import AddForm from "./addForm";

import API from "../../api";
import { DASHBOARD } from "../../constants/paths";

export default function AddMovie() {
  const router = useRouter();
  const { refreshMovies } = useContext(MoviesContext);

  const handleSubmit = async formData => {
    try {
      await API.addMovie(formData);
      refreshMovies();
      router.push(DASHBOARD);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    <ScrollView>
      <AddForm initialData={null} onSubmit={handleSubmit} buttonText="Add Movie" />
    </ScrollView>
  );
}
