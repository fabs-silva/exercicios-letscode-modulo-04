import { format } from 'date-fns';
import { useState } from 'react';

import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TicketInfoProps } from '../../assets/ticketInfo';

export function ConcertCard(props: { ticketInfo: TicketInfoProps }) {
  const formattedDate = format(props.ticketInfo.date, 'dd/MM/yyyy');

  const [price, setPrice] = useState<number>(0);

  return (
    <View style={styles.cardContainer}>
      <View>
        <Text>
          Band Name: <Text>{props.ticketInfo.bandName}</Text>
        </Text>
        <Text>
          Country: <Text>{props.ticketInfo.country}</Text>
        </Text>
        <Text>
          City: <Text>{props.ticketInfo.city}</Text>
        </Text>
        <Text>
          Date: <Text>{formattedDate}</Text>
        </Text>
      </View>
      <View>
        <View>
          <Text>Category</Text>
          <Text>Price</Text>
          <Text>Amount</Text>
        </View>
      </View>
      <FlatList
        data={props.ticketInfo.ticketsSimulation}
        renderItem={{ title: 'Title Text', key: 'item1' }}
        keyExtractor={(item) => item.type}
        extraData={price}
      ></FlatList>
      <View>
        <Text>
          Total Price: <Text>{price}</Text>
        </Text>
      </View>
      <View
        style={{
          width: Dimensions.get('window').width,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity>
          <Text>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 10,
    backgroundColor: '#fff',
    marginVertical: 20,
    justifyContent: 'center',
  },
});
