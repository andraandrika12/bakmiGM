import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

const images = [
  "https://www.bakmigm.com/cfind/source/thumb/images/promo/cover_w1112_h572_tw2307_th1187_x110_y15_paw_1112x572.png",
  "https://www.bakmigm.com/cfind/source/thumb/images/promo/cover_w1112_h572_tw2312_th1190_x13_y13_website_february_paket-padu_1112x572.png",
  "https://www.bakmigm.com/cfind/source/thumb/images/promo/cover_w1112_h572_tw2315_th1189_x13_y13_website_february_cny-hampers_1112x572.png",
];

export default function HorizontalSlider() {
  const [imgActive, setImgActive] = useState(0);

  onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: 412,
    height: 300,
    bottom: 40
  },
  wrapDot: {
    position: "absolute",
    bottom: 80,
    flexDirection: "row",
    alignSelf: "center"
  },
  dotActive: {
    margin: 3,
    color: "white"
  },
  dot: {
    margin: 3,
    color: "#888"
  },
});
