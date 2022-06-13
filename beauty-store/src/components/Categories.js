import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../vars/colors';

function Categories() {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const catagories = ['Sun Protection', 'moisturizer', 'Whitening'];

  return (
    <View style={styles.categoryContainer}>
      {catagories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setCategoryIndex(index)}
        >
          <Text
            style={[
              styles.categoryText,
              catergoryIndex === index && styles.categoryTextSelected,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    borderColor: Colors.orange,
    paddingBottom: 5,
    borderBottomWidth: 2,
    color: Colors.orange,
  },
});

export default Categories;
