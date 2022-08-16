import { format } from 'date-fns';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TicketInfoProps } from '../../assets/ticketInfo';

export function ConcertCard(props: { item: TicketInfoProps }) {
  const navigation = useNavigation();
  const formattedDate = format(props.item.date, 'dd/MM/yyyy');

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.5}
      onPress={() => {
        console.log(props.item.id);
        navigation.navigate('concertPage', props.item.id);
      }}
    >
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
    </TouchableOpacity>
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
