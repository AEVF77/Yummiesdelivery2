import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.greeting}>Hello Chinwe,</Text>
        <Text style={styles.question}>What would you like to <Text style={styles.highlight}>eat?</Text></Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Enter a dish name e.g. Egusi soup" />
          <TouchableOpacity style={styles.searchIcon}>
            <FontAwesome name="search" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsIcon}>
            <FontAwesome name="cog" size={20} color="orange" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenedor con fondo gris */}
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Today's Special Offer</Text>
        <View style={styles.specialOfferContainer}>
          <Image source={{ uri: 'https://example.com/burger.jpg' }} style={styles.offerImage} />
          <View style={styles.offerDetails}>
            <Text style={styles.offerTitle}>Yummies Special Burger</Text>
            <Text style={styles.offerPrice}>Now N1,800 <Text style={styles.discount}>(10% off)</Text></Text>
            <TouchableOpacity style={styles.outlineButton}>
              <Text style={styles.outlineButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Popular Now</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productCard}>
            <Image source={{ uri: 'https://example.com/beef-salad.jpg' }} style={styles.productImage} />
            <TouchableOpacity style={styles.heartIcon}>
              <FontAwesome name="heart-o" size={18} color="orange" />
            </TouchableOpacity>
            <Text style={styles.productName}>Beef Salad</Text>
            <Text style={styles.productPrice}>N1,200</Text>
          </View>
          <View style={styles.productCard}>
            <Image source={{ uri: 'https://example.com/spicy-noodles.jpg' }} style={styles.productImage} />
            <TouchableOpacity style={styles.heartIcon}>
              <FontAwesome name="heart-o" size={18} color="orange" />
            </TouchableOpacity>
            <Text style={styles.productName}>Spicy Noodles</Text>
            <Text style={styles.productPrice}>N1,500</Text>
          </View>
          {/* Agrega más productos si es necesario */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  greeting: {
    fontSize: 18,
    color: 'gray',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  highlight: {
    color: 'orange',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  settingsIcon: {
    marginHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Fondo gris suave
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  specialOfferContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 2,
  },
  offerImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  offerDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  discount: {
    fontSize: 12,
    color: 'gray',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  outlineButtonText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 120,
    marginRight: 10,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  productName: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

