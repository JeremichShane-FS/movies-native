import { Platform, Text, View } from "react-native";

export default function Heading({ children, level }) {
  const accessibilityRole = Platform.OS === "android" ? "header" : `h${level}`;

  return (
    <View>
      <Text accessibilityRole={accessibilityRole}>{children}</Text>
    </View>
  );
}
