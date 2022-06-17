import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import Colors from '../../vars/colors';

function DetailsScreen({ navigation, route }) {
  const item = route.params;

  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.header}>
        <Icon
          name='keyboard-backspace'
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Icon name='cart' size={30} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={item.img}
          style={{ resizeMode: 'contain', flex: 1 }}
        ></Image>
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <View style={styles.line} />
          <Text
            style={{ fontSize: 18, fontWeight: 'bold', color: Colors.orange }}
          >
            Most Sold
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.name}</Text>
          <View style={styles.priceTag}>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 14 }}>
              {parseInt(quantity) * parseInt(item.price)} JOD
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Product Description
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {item.description}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.borderBtn}>
                <Icon
                  name='minus-circle'
                  style={styles.borderBtnText}
                  onPress={() => (quantity > 1 ? setQuantity(quantity - 1) : 1)}
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}
              >
                {quantity}
              </Text>
              <View style={styles.borderBtn}>
                <Icon
                  name='plus-circle'
                  style={styles.borderBtnText}
                  onPress={() => setQuantity(quantity + 1)}
                />
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Buy Now</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: Colors.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 35,
    height: 2,
    backgroundColor: Colors.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: Colors.orange,
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },
  borderBtn: {
    borderColor: '#333',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  buyBtn: {
    backgroundColor: Colors.orange,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default DetailsScreen;
