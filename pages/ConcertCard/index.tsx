import { format } from 'date-fns';
import { useState } from 'react';

import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  FlatListItem,
  formattedPrice,
  Ticket,
  TicketsSimulation,
} from './FlatListItem';

export type TicketInfoProps = {
  bandName: string;
  country: string;
  city: string;
  date: Date;
  tickets: Ticket[];
  ticketsSimulation: TicketsSimulation[];
};
const cardContainerHeight: number = Dimensions.get('window').height - 50;
const flatlistWidth: number = Dimensions.get('window').width - 70;

export function ConcertCard(props: { ticketInfo: TicketInfoProps }) {
  const formattedDate = format(props.ticketInfo.date, 'dd/MM/yyyy');

  const [price, setPrice] = useState<number>(0);

  const renderItem: ListRenderItem<TicketsSimulation> = ({ item }) => {
    return <FlatListItem ticket={item} price={price} setPrice={setPrice} />;
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardBasicInfo}>
        <Text style={styles.label}>
          Band Name:{' '}
          <Text style={styles.item}>{props.ticketInfo.bandName}</Text>
        </Text>
        <Text style={styles.label}>
          Country: <Text style={styles.item}>{props.ticketInfo.country}</Text>
        </Text>
        <Text style={styles.label}>
          City: <Text style={styles.item}>{props.ticketInfo.city}</Text>
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
        data={props.ticketInfo.ticketsSimulation}
        renderItem={renderItem}
        keyExtractor={(item) => item.type}
        style={styles.flatList}
        extraData={price}
      ></FlatList>
      <View style={styles.cardPrice}>
        <Text style={styles.label}>
          Total Price: <Text style={styles.item}>{formattedPrice(price)}</Text>
        </Text>
      </View>
      <View
        style={{
          width: Dimensions.get('window').width,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity style={styles.buyButton}>
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
    marginVertical: 20,
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
