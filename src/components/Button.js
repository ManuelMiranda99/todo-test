import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ label, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 8,
  },
  label: {
    color: "white",
  },
});
