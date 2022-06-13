import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../vars/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width / 2 - 30;

function Card({ item }) {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={{ alignItems: 'flex-end' }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: item.like
                ? 'rgba(245,42,42,0.2)'
                : 'rgba(0,0,0,0.2)',
            }}
          >
            <Icon
              name='cards-heart'
              size={25}
              color={item.like ? Colors.red : Colors.dark}
            />
          </View>
        </View>
        <View
          style={{
            height: 100,
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode: 'contain',
            }}
            source={item.img}
          />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 15 }}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 17 }}>{item.price}</Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: Colors.orange,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{ fontSize: 22, color: Colors.dark, fontWeight: 'bold' }}
            >
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 225,
    marginHorizontal: 2,
    backgroundColor: Colors.light,
    width,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Card;
