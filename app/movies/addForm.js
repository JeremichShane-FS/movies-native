import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MOVIES } from "../../constants/paths";

export default function AddForm({ initialData, onSubmit, buttonText }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    description: "",
    poster: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    onSubmit(formData);
  };

  const handleGoBack = () => {
    router.push(MOVIES);
  };

  return (
    <ScrollView>
      <View style={styles.addForm}>
        <View style={styles.group}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={formData.title}
            onChangeText={value => handleChange("title", value)}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Genre</Text>
          <TextInput
            style={styles.input}
            value={formData.genre}
            onChangeText={value => handleChange("genre", value)}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Release Year</Text>
          <TextInput
            style={styles.input}
            value={formData.releaseYear ? formData.releaseYear.toString() : ""}
            onChangeText={value => handleChange("releaseYear", value)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            value={formData.description}
            onChangeText={value => handleChange("description", value)}
            multiline
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Poster URL</Text>
          <TextInput
            style={styles.input}
            value={formData.poster}
            onChangeText={value => handleChange("poster", value)}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoBack} style={styles.button}>
          <Text style={styles.buttonText}>Movies List</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addForm: {
    backgroundColor: "#ffffff",
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginVertical: 16,
  },
  group: {
    marginBottom: 24,
  },
  label: {
    color: "#1a1a1a",
    marginBottom: 8,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 4,
  },
  textarea: {
    height: 100,
  },
  button: {
    width: 150,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    borderRadius: 4,
    alignSelf: "center",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});
