import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView>
      <Image source={require("../iconBakmiGM.png")} style={styles.logo} />
      <AntDesign name="qrcode" size={35} color="black" style={styles.qrCode} />
      <MaterialCommunityIcons
        name="email-outline"
        size={35}
        color="black"
        style={styles.mail}
      />
      <Entypo
        name="dots-three-vertical"
        size={25}
        color="black"
        style={styles.dots}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 70,
    left: 8,
    bottom: -3
  },
  qrCode: {
    left: 220,
    bottom: 50,
  },
  mail: {
    left: 290,
    bottom: 85,
  },
  dots: {
    left: 360,
    bottom: 115,
  },
});
