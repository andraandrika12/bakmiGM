import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Platform,
  ImageBackground,
} from "react-native";

const CardRefer = () => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={[
        styles.card,
        Platform.OS === "android" ? styles.androidShadow : styles.iosShadow,
      ]}
      onPress={() => {}}
    >
      <ImageBackground
        source={require("../Refer.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.cardContent}>
          <Text style={styles.referText}>
            Dapatkan 5 poin dengan mengajak teman kamu
          </Text>
          <TouchableHighlight
            underlayColor="#007bff"
            style={styles.referButton}
            onPress={() => {}}
          >
            <Text style={styles.referButtonText}>REFER NOW</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    overflow: "hidden", 
  },
  imageBackground: {
    flex: 1,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "blue", 
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 40, 
  },
  referText: {
    marginBottom: 18,
    color: "white", 
    textAlign: "right",
    fontWeight: "bold",
    right: -20
  },
  referButton: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    right: -20
  },
  referButtonText: {
    color: "#8a2be2",
    fontWeight: "bold",
    textAlign: "center",
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

export default CardRefer;
