import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TODOItems = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#4ac959',
    borderColor: '#455A64',
    borderWidth: 1
  }
});

export default TODOItems;
