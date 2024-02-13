import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Platform,
  SafeAreaView,
} from "react-native";

const CardPoints = ({ title, status }) => {
  let displayText;
  if (status === "New Member") {
    displayText = "0 Spend";
  } else if (status === "Points") {
    displayText = (
      <Text>
        <Text style={styles.bold}>40</Text> points will expire on{" "}
        <Text style={styles.bold}>22 Feb 2024.</Text>{" "}
        <Text style={[styles.bold, styles.seeDetails]}>See Details</Text>
      </Text>
    );
  }

  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={[
        styles.card,
        Platform.OS === "android" ? styles.androidShadow : styles.iosShadow,
      ]}
      onPress={() => {}}
    >
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.projectTitle}>{title}</Text>
          <Text style={styles.points}>40</Text>
        </View>
        <Text style={styles.progressLabel}>{displayText}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: "#ccc",
    padding: 15,
    backgroundColor: "white",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  points: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  progressLabel: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
  },
  seeDetails: {
    textDecorationLine: "underline",
    color: "blue",
  },
  bold: {
    fontWeight: "bold",
  },
  androidShadow: {
    elevation: 3, // Android
  },
  iosShadow: {
    shadowColor: "#000", // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default CardPoints;
