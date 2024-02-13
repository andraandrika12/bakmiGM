import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../screens/Header";
import HorizontalSlider from "../components/HorizontalSlider";
import CardMember from "../components/CardMember";
import CardPoints from "../components/CardPoints";
import ButtonGrid from "../components/ButtonGrid";
import OrderIcon from "../receipt.png";
import RedeemIcon from "../online-shop.png";
import VoucherIcon from "../voucher.png";
import PrivilegeIcon from "../price-tag.png";
import HistoryIcon from "../shopping-bag.png";
import ContactIcon from "../speech-bubble.png";
import CardRefer from "../components/CardRefer";
import HorizontalCard from "../components/HorizontalCard";
import CardPrivileges from "../components/CardPrivileges";
import OutletLocation from "../components/OutletLocation";

export default function Home() {
  const insets = useSafeAreaInsets();

  const buttonItems = [
    {
      icon: OrderIcon,
      label: "Order",
      size: 60,
      onPress: () => {
        // Navigasi 
      },
    },
    {
      icon: RedeemIcon,
      label: "Redeem",
      size: 60,
      onPress: () => {
        // Navigasi
      },
    },
    {
      icon: VoucherIcon,
      label: "My Vouchers",
      size: 60,
      onPress: () => {
        // Navigasi 
      },
    },
    {
      icon: PrivilegeIcon,
      label: "Privilege",
      size: 60,
      onPress: () => {
        // Navigasi 
      },
    },
    {
      icon: HistoryIcon,
      label: "History",
      size: 60,
      onPress: () => {
        // Navigasi
      },
    },
    {
      icon: ContactIcon,
      label: "Contact Us",
      size: 60,
      onPress: () => {
        // Navigasi 
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HorizontalSlider />
        <CardMember title="Your Level" progress={0} status="Gold Target" />
        <CardPoints title="Bakmi GM Points" status="Points" />
        <ButtonGrid items={buttonItems} />
        <CardRefer/>
        <HorizontalCard/>
        <CardPrivileges/>
        <OutletLocation/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "white",
    height: 100,
    borderRadius: 10,
    elevation: 3,
  },
  scrollContent: {
    paddingTop: 180, 
    backgroundColor: "white"
  },
});
