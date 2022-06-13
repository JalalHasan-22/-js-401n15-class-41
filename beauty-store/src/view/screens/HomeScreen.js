import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../vars/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import CategoryList from '../../components/Categories';
import Items from '../../vars/items';
import Card from '../../components/Card';

function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: Colors.white }}
    >
      <View style={styles.header}>
        <View>
          <Text
            style={{ fontSize: 38, fontWeight: 'bold', color: Colors.orange }}
          >
            Beauty Store
          </Text>
        </View>

        <Icon name='cart' size={30} />
      </View>
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={styles.searchContainer}>
          <Icon name='card-search' size={30} style={{ marginLeft: 20 }} />
          <TextInput placeholder='Search' style={styles.input} />
        </View>

        <View style={styles.sortBtn}>
          <Icon name='sort-variant' size={20} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={Items}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <Card item={item} />}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 40,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: Colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: Colors.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
