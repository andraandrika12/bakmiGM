import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function HorizontalCard() {
  const esTehManisImage = require("../esTehManis.jpg");
  const lemonEsTehImage = require("../esLemonTeh.png");
  const souvenirImage = require("../souvenir.jpg");

  const data = [
    { _id: 1, name: "Es Teh Manis", points: "40 Pts", image: esTehManisImage },
    { _id: 2, name: "Lemon Es Teh", points: "45 Pts", image: lemonEsTehImage },
    { _id: 3, name: "Souvenir", points: "155 Pts", image: souvenirImage },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Redeem Your Rewards</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.earnMore}>Earn more to get your rewards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        {data.map((item) => (
          <View key={item._id} style={styles.card}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{item.name}</Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.itemLocation}>{item.points}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: -10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 15,
  },
  carousel: {
    flexDirection: "row",
  },
  card: {
    paddingHorizontal: 20,
    width: 190,
    height: 300,
    marginRight: -10,
  },
  imageContainer: {
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderRadius: 7,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  courseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  courseTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 10,
  },
  itemLocation: {
    color: "orange",
    fontWeight: "bold",
  },
  earnMore: {
    marginTop: -10,
    marginBottom: 13,
    paddingHorizontal: 20,
    fontSize: 15,
  },
});
