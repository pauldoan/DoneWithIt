import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./Text";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "33%",
  },
  label: {
    marginTop: 10,
    textAlign: "center",
  },
});
