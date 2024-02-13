import React, { useState } from "react";
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardPrivileges() {
  const platinumMember = require("../platinumMember.jpg");
  const goldMember = require("../goldMember.jpg");
  const birthdayReward = require("../birthdayMember.jpg");
  const redeemPoint = require("../redeemVoucher.jpg");
  const signupReward = require("../signupReward.jpg");
  const benefitGMania = require("../benefit.jpg");
  const faqMember = require("../faq.jpg");

  const data = [
    { _id: 1, name: "Platinum Member💎", exp: "Exp. 31 Dec 2024", image: platinumMember },
    { _id: 2, name: "Gold Member✨", exp: "Exp. 31 Dec 2024", image: goldMember },
    { _id: 3, name: "Birthday Reward🎂", exp: "Exp. 31 Dec 2024", image: birthdayReward },
    { _id: 4, name: "Redeem Point💰", exp: "Exp. 31 Dec 2024", image: redeemPoint },
    { _id: 5, name: "Sign Up Reward💰", exp: "Exp. 31 Dec 2024", image: signupReward },
    { _id: 6, name: "Benefit GMania💰", exp: "Exp. 31 Dec 2024", image: benefitGMania },
    { _id: 7, name: "FAQ MEMBER🎂", exp: "Exp. 31 Dec 2024", image: faqMember },
  ];

  const [numColumns, setNumColumns] = useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Privileges</Text>
      </View>
      <Text style={styles.earnMore}>Keep discovering our promo and news</Text>
      <FlatList
        key={numColumns} 
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.card,
              index % numColumns === numColumns - 1 && { marginRight: 0 }, 
            ]}
            onPress={() => console.log("Card pressed:", item.name)}
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.exp}>{item.exp}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
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
  cardContainer: {
    paddingHorizontal: 20,
  },
  card: {
    width: "48%",
    marginBottom: 20,
    marginRight: 15, 
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderRadius: 7,
    overflow: "hidden",
  },
  imageContainer: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  exp: {
    color: "grey",
    fontWeight: "bold",
    marginBottom: 5,
  },
  earnMore: {
    marginTop: -10,
    marginBottom: 13,
    paddingHorizontal: 20,
    fontSize: 15,
  },
});
