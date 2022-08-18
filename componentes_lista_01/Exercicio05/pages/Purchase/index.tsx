import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { formattedPrice } from '../ConcertPage/FlatListItem';

const flatlistWidth: number = Dimensions.get('window').width - 70;

export default function Purchase({ route, navigation }) {
  const ticketsPurchased = route.params.ticketsSimulation.filter(
    (tck) => tck.amount !== 0
  );

  const totalPrice = ticketsPurchased.reduce((acc, item) => {
    acc += parseFloat(item.amount) * parseFloat(item.value);
    return acc;
  }, 0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.purchaseTicketInfo}>
        <Text style={styles.purchaseLabel}>{item.type}</Text>
        <Text style={styles.purchaseItem}>{formattedPrice(item.value)}</Text>
        <Text style={styles.purchaseItem}>{item.amount}</Text>
        <Text style={styles.purchaseItem}>
          {formattedPrice(item.amount * item.value)}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.purchaseContainer}>
      <Text style={styles.purchaseTitle}>Thanks for buying!</Text>
      <Text style={styles.purchaseSubTitle}>Concert info</Text>
      <View style={styles.purchaseBasicInfo}>
        <Text style={styles.purchaseLabel}>
          Band Name:{' '}
          <Text style={styles.purchaseItem}>{route.params.bandName}</Text>
        </Text>
        <Text style={styles.purchaseLabel}>
          Country:{' '}
          <Text style={styles.purchaseItem}>{route.params.country}</Text>
        </Text>
        <Text style={styles.purchaseLabel}>
          City: <Text style={styles.purchaseItem}>{route.params.city}</Text>
        </Text>
        <Text style={styles.purchaseLabel}>
          Date: <Text style={styles.purchaseItem}>{route.params.date}</Text>
        </Text>
      </View>
      <Text style={styles.purchaseSubTitle}>Purchase info</Text>
      <FlatList
        data={ticketsPurchased}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.purchaseFlatList}
        ListHeaderComponent={() => {
          return (
            <View style={styles.purchaseFlatItem}>
              <Text style={styles.purchaseFlatHeaderLabel}>Cat.</Text>
              <Text style={styles.purchaseFlatHeaderLabel}>Price</Text>
              <Text style={styles.purchaseFlatHeaderLabel}>Amount</Text>
              <Text style={styles.purchaseFlatHeaderLabel}>Total</Text>
            </View>
          );
        }}
      />
      <View style={styles.purchasePrice}>
        <Text style={styles.purchaseLabelPrice}>
          Total Price:{' '}
          <Text style={styles.purchaseItemPrice}>
            {formattedPrice(totalPrice)}
          </Text>
        </Text>
      </View>
      <View style={styles.purchasePrice}>
        <View style={styles.purchaseFinalPrice}>
          <Text style={styles.purchaseLabelFinalPrice}>
            Final Price, incl. 20% tax
          </Text>
          <Text style={styles.purchaseItemFinalPrice}>
            {formattedPrice(totalPrice * 1.2)}
          </Text>
        </View>
      </View>
      <View style={styles.purchasePrice}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.navigate('concerts');
          }}
        >
          <Text style={styles.backButtonText}>Back to Homepage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  purchaseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#073b4c',
  },
  purchaseTitle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 15,
    color: '#fd7a00',
  },
  purchaseSubTitle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 9,
  },
  purchaseBasicInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  purchaseLabel: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  purchaseItem: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
  purchaseFlatList: {
    marginHorizontal: 30,
    marginBottom: 20,
    flexGrow: 0,
    width: flatlistWidth,
  },

  purchaseFlatItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    textAlignVertical: 'center',
    paddingVertical: 8,
    alignItems: 'center',
  },

  purchaseFlatHeaderLabel: {
    fontWeight: '700',
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#fff',
  },

  purchaseTicketInfo: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 8,
    alignItems: 'center',
  },
  purchasePrice: {
    alignItems: 'center',
    marginVertical: 20,
  },

  purchaseLabelPrice: {
    color: '#fff',
    fontSize: 19,
    textAlign: 'center',
    fontWeight: '700',
  },
  purchaseItemPrice: {
    color: '#fff',
    fontSize: 19,
    textAlign: 'center',
    fontWeight: '400',
  },

  purchaseFinalPrice: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 8,
    width: '70%',
    paddingVertical: 15,
  },
  purchaseLabelFinalPrice: {
    color: '#fd7a00',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 5,
  },
  purchaseItemFinalPrice: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
  },
  backButton: {
    backgroundColor: '#fd7a00',
    width: 180,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  backButtonText: {
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
    textAlignVertical: 'center',
    lineHeight: 20,
    textAlign: 'center',
  },
});
