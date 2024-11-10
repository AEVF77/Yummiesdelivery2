// pages/home.js
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Chinwe,</Text>
        <Text style={styles.question}>What would you like to <Text style={styles.highlight}>eat?</Text></Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.inputView}>
          <TextInput style={styles.searchInput} placeholder="Enter a dish name e.g. Egusi soup" />
          <FontAwesome name="microphone" size={24} color="#989898" style={{ position: 'absolute', right: 10, top: '25%' }} />
          <FontAwesome name="search" size={24} color="#989898" style={{ position: 'absolute', left: 10, top: '25%' }} />
        </View>
        <TouchableOpacity style={styles.filterIcon}>
          <MaterialIcons name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        <TouchableOpacity style={[styles.categoryButton, styles.activeButton]}>
          <Text style={[styles.categoryText, styles.activeText]}>Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Sides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Snacks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Drinks</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Special Offer */}
      <View style={styles.specialOfferView}>
        <View style={styles.specialOffer}>
          <Image style={styles.offerImage} source={{ uri: 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg' }} />
          <View style={styles.offerDetails}>
            <Text style={styles.offerTitle}>Yummies Special Burger</Text>
            <Text style={styles.offerPrice}>N1,800 <Text style={styles.discount}>(10% off)</Text></Text>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Popular Now */}
      <View style={styles.popularNow}>
        <Text style={styles.sectionTitle}>Popular Now</Text>
        <TouchableOpacity>
          <Text style={styles.fullMenu}>SEE FULL MENU &gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Items */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularItems}>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.itemImage} source={{ uri: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg' }} />
          <Text style={styles.itemName}>Beef Salad</Text>
          <Text style={styles.itemPrice}>N1,200</Text>
          <FontAwesome style={styles.heartIcon} name="heart-o" size={22} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.itemImage} source={{ uri: 'https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg' }} />
          <Text style={styles.itemName}>Spicy Noodles</Text>
          <Text style={styles.itemPrice}>N1,500</Text>
          <FontAwesome style={styles.heartIcon} name="heart" size={22} color="orange" />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#333" />
          <Text style={styles.navText}>Live Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#333" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Entypo name="home" size={24} color="#FF5722" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="menu-outline" size={24} color="#333" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="heart-o" size={24} color="#333" />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { marginBottom: 16 },
  greeting: { fontSize: 18, color: '#333', fontWeight: 'bold' },
  question: { fontSize: 34, fontWeight: 'bold' },
  highlight: { color: '#FF5722' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  inputView: {
    flex: 1,
    elevation: 3,
    borderRadius: 8,
    shadowColor: '#171717',
  },
  searchInput: { borderRadius: 8, padding: 10, paddingLeft: 45, paddingRight: 40, backgroundColor: 'white' },
  filterIcon: { marginLeft: 8, padding: 10, backgroundColor: '#FF5722', borderRadius: 8 },
  categories: {
    maxHeight: 50,
    marginBottom: 18,
  },
  categoryButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    paddingVertical: 7,
    paddingHorizontal: 16,
    height: 35,
    marginLeft: 4,
    marginRight: 4
  },
  activeButton: {
    backgroundColor: '#FF5722',
  },
  categoryText: {
    color: '#333',
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff',
  },
  specialOfferView: {
    elevation: 6,
    borderRadius: 30,
    shadowColor: '#171717',
    marginBottom: 16
  },
  specialOffer: { flexDirection: 'row', borderRadius: 30, backgroundColor: 'white' },
  offerImage: { width: '50%', height: 170, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 },
  offerDetails: { flex: 1, padding: 16, justifyContent: 'center' },
  offerTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  offerPrice: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  discount: { color: '#FF5722', fontSize: 12, fontWeight: 'bold' },
  addToCartButton: { marginTop: 8, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 8, backgroundColor: '#FF5722' },
  addToCartText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  popularNow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  fullMenu: { color: '#FF5722' },
  popularItems: { flexDirection: 'row' },
  item: { elevation: 3, marginRight: 8, marginLeft: 8, width: 180, height: 180, alignItems: 'center', justifyContent: 'center', borderRadius: 12, overflow: 'hidden', shadowColor: '#171717' },
  itemImage: { width: '100%', height: '100%' },
  itemName: { position: 'absolute', color: 'white', fontWeight: 'bold', bottom: 35, left: 15 },
  itemPrice: { position: 'absolute', color: 'white', fontWeight: 'bold', bottom: 15, left: 15 },
  heartIcon: { position: 'absolute', bottom: 15, right: 15 },
  bottomNav: { flexDirection: 'row', height: 60, borderTopColor: '#ddd', borderTopWidth: 1, alignItems: 'center', justifyContent: 'space-around', paddingBottom: 10 },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  navText: { color: '#333', fontSize: 12, marginTop: 4 },
  activeNavText: { color: '#FF5722' },
});
