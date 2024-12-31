import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const FlatListSolution = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      keyExtractor={(item) => item}
      windowSize={10} // Adjust as needed
      removeClippedSubviews={true} // Optimize rendering
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default FlatListSolution;