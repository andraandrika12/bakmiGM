import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CardMember = ({ title, progress, status }) => {
  let progressBarColor;
  if (progress <= 25) progressBarColor = "red";
  else if (progress <= 50) progressBarColor = "orange";
  else if (progress <= 75) progressBarColor = "yellow";
  else progressBarColor = "green";

  let displayText;
  if (status === "New Member") {
    displayText = "0 Spend";
  } else if (status === "Gold Target") {
    displayText = (
      <Text>
        Spend <Text style={styles.bold}>3,500,001</Text> by{" "}
        <Text style={styles.bold}>23 Nov 2024</Text> to reach{" "}
        <Text style={styles.bold}>Gold</Text>
      </Text>
    );
  }
  const progressDot = (
    <View
      style={[
        styles.progressDot,
        { right: 0, backgroundColor: 'gold', opacity: progress === 100 ? 0 : 1 },
      ]}
    />
  );

  return (
    <TouchableHighlight 
      underlayColor='transparent'
      style={[styles.card, Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow]}
      onPress={() => {}}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.projectTitle}>{title}</Text>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {}}
            style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>LEARN MORE</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="crown-circle" size={40} color="silver" style={styles.crownIcon} />
          <Text style={styles.crownSeparator}>   -   </Text>
          <MaterialCommunityIcons name="crown-circle" size={40} color="gold" style={styles.crownIcon} />
          <Text style={styles.crownSeparator}>   -   </Text>
          <MaterialCommunityIcons name="crown-circle" size={40} color="black" style={styles.crownIcon} />
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={{
              ...styles.progressBarFill,
              width: `${progress}%`,
              backgroundColor: progressBarColor,
            }}></View>
          {progressDot}
        </View>
        <Text style={styles.progressLabel}>{displayText}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginTop: -85,
    borderWidth: 0.5,
    borderColor: "#ccc",
    padding: 15,
    backgroundColor: "white",
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  learnMoreButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  learnMoreText: {
    color: 'orange',
    fontSize: 12,
    fontWeight: "bold"
  },
  progressLabel: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
  },
  progressBarContainer: {
    position: 'relative',
    height: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  crownIcon: {
    marginRight: 5,
  },
  crownSeparator: {
    fontSize: 30,
    color: '#ccc',
  },
  bold: {
    fontWeight: "bold",
  },
  androidShadow: {
    elevation: 3, // Android
  },
  iosShadow: {
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default CardMember;
