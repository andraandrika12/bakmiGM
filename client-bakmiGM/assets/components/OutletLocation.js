import React from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function OutletLocation() {
  const data = [
    { _id: 1, name: "Citra Garden 6", address: "Food Junction Citra 6 Blok L2-A Citra Garden City, Jakarta Barat", distance: "2.4 km" },
    { _id: 2, name: "Emporium Mall", address: "Emporium Pluit Mall Lt.2 jalan Pluit Selatan Raya, Jakarta Utara", distance: "6.3 km" },
    { _id: 3, name: "Puri Indah Mall", address: "Bakmi GM Puri Indah Mall, Mall Puri Indah Lt. I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat", distance: "6.4 km" },
    { _id: 4, name: "LIppo Mall Puri", address: "Bakmi GM Lippo Mall Puri, Food Avenue Unit FSC-07, Gedung St. Moritz Lippo Mall Puri Lantai I, Jl. Puri Indah Boulevard Blok UI, Jakarta Barat", distance: "6.6 km" },
    { _id: 5, name: "Terminal 3 Ultimate", address: "Bandara Soekarno Hatta Terminal 3 Ultimate Domestic Landside, lantai 2 Ultimate Food Terminal, Tangerang", distance: "7.7 km" },
  ];

  const renderListItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => console.log("Card pressed:", item.name)}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <View style={styles.distanceContainer}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.distance}>{item.distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Outlet Location</Text>
      </View>
      <Text style={styles.earnMore}>Explore your options</Text>
      <View style={styles.tableContainer}>
        {data.map(item => (
          <View key={item._id} style={styles.row}>
            {renderListItem({ item })}
          </View>
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>SEE ALL</Text>
      </TouchableOpacity>
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
  tableContainer: {
    paddingHorizontal: 20,
  },
  row: {
    borderBottomWidth: 1, 
    borderBottomColor: "#ccc", 
    paddingBottom: 10, 
  },
  card: {
    padding: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
  address: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
  earnMore: {
    marginTop: -10,
    marginBottom: 13,
    paddingHorizontal: 20,
    fontSize: 15,
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  distance: {
    color: "grey",
    fontSize: 12,
    marginLeft: 5,
  },
  seeAllText: {
    marginTop: 5,
    marginBottom: 13,
    color: "orange",
    fontWeight: "bold",
    fontSize: 16,
    bottom: -10,
    left: 30
  },
});
