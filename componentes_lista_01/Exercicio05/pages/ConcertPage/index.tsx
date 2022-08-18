import { format } from 'date-fns';
import { useReducer } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ticketsInfo } from '../../assets/ticketInfo';
import { ticketReducer } from '../../ticketReducer';
import { FlatListItem, formattedPrice } from './FlatListItem';

const cardContainerHeight: number = Dimensions.get('window').height - 50;
const flatlistWidth: number = Dimensions.get('window').width - 70;

export function ConcertPage({ route, navigation }) {
  const ticketInfo = ticketsInfo.find((ticket) => ticket.id === route.params);
  const [state, dispatch] = useReducer(ticketReducer, ticketInfo);
  const formattedDate = ticketInfo && format(state.date, 'dd/MM/yyyy');

  const renderItem = ({ item }) => {
    return <FlatListItem state={state} dispatch={dispatch} type={item.type} />;
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardBasicInfo}>
        <Text style={styles.label}>
          Band Name: <Text style={styles.item}>{state.bandName}</Text>
        </Text>
        <Text style={styles.label}>
          Country: <Text style={styles.item}>{state.country}</Text>
        </Text>
        <Text style={styles.label}>
          City: <Text style={styles.item}>{state.city}</Text>
        </Text>
        <Text style={styles.label}>
          Date: <Text style={styles.item}>{formattedDate}</Text>
        </Text>
      </View>
      <View style={styles.flatHeader}>
        <View style={styles.flatItem}>
          <Text style={styles.flatHeaderLabel}>Category</Text>
          <Text style={styles.flatHeaderLabel}>Price</Text>
          <Text style={styles.flatHeaderAmount}>Amount</Text>
        </View>
      </View>
      <FlatList
        data={state.ticketsSimulation.sort((a, b) => a.id - b.id)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      ></FlatList>
      <View style={styles.cardPrice}>
        <Text style={styles.label}>
          Total Price:{' '}
          <Text style={styles.item}>
            {formattedPrice(
              state.ticketsSimulation.reduce((acc, item) => {
                acc += parseFloat(item.amount) * parseFloat(item.value);
                return acc;
              }, 0)
            )}
          </Text>
        </Text>
      </View>
      <View
        style={{
          width: Dimensions.get('window').width,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => {
            const passState = {
              ...state,
              date: formattedDate,
            };
            navigation.navigate('purchase', passState);
          }}
        >
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: cardContainerHeight,
    backgroundColor: '#fff',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  cardBasicInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 5,
    color: '#117864',
  },
  item: {
    fontWeight: '400',
    color: 'black',
  },
  flatHeader: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    textAlignVertical: 'center',
    flexGrow: 0,
    width: flatlistWidth,
    textAlign: 'center',
  },

  flatList: {
    marginHorizontal: 30,
    marginBottom: 20,
    flexGrow: 0,
    width: flatlistWidth,
  },

  flatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    textAlignVertical: 'center',
    paddingVertical: 8,
  },

  flatHeaderLabel: {
    fontWeight: '700',
    fontSize: 18,
    width: '30%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  flatHeaderAmount: {
    fontWeight: '700',
    fontSize: 18,
    width: '40%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  flatLabel: {
    fontWeight: '700',
    fontSize: 18,
    color: '#117864',
    width: '30%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  flatText: {
    fontWeight: '400',
    fontSize: 16,
    textAlignVertical: 'center',
  },

  flatTextPrice: {
    fontWeight: '400',
    fontSize: 16,
    textAlignVertical: 'center',
    width: '30%',
    textAlign: 'center',
  },

  flatContainerAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '40%',
  },

  flatButtonAmount: {
    backgroundColor: '#fd7a00',
    width: 25,
    height: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flatButtonAmountText: {
    fontWeight: '900',
    fontSize: 18,
    color: 'white',
    textAlignVertical: 'center',
    lineHeight: 20,
  },

  flatTextAmount: {
    fontWeight: '400',
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  cardPrice: {
    alignItems: 'center',
    marginTop: 20,
  },
  buyButton: {
    backgroundColor: '#fd7a00',
    width: 100,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buyButtonText: {
    fontWeight: '400',
    fontSize: 18,
    color: 'white',
    textAlignVertical: 'center',
    lineHeight: 20,
  },
});
