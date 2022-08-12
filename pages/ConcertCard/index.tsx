import { format } from 'date-fns';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TicketInfoProps } from '../../assets/ticketInfo';

export function ConcertCard(props: { item: TicketInfoProps }) {
  const formattedDate = format(props.item.date, 'dd/MM/yyyy');

  return (
    <View style={styles.cardContainer}>
      <View>
        <Text>
          <Text>{props.item.bandName}</Text>
        </Text>
        <Text>
          Country: <Text>{props.item.country}</Text>
        </Text>
        <Text>
          City: <Text>{props.item.city}</Text>
        </Text>
        <Text>
          Date: <Text>{formattedDate}</Text>
        </Text>
      </View>
      <TouchableOpacity>
        <Text>More info</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 170,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
