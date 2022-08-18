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
        navigation.navigate('concertPage', props.item.id);
      }}
    >
      <View>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitleText}>{props.item.bandName}</Text>
        </View>
        <Text style={styles.cardItemInfo}>
          <Text style={styles.cardItemName}>Country:</Text> {props.item.country}
        </Text>
        <Text style={styles.cardItemInfo}>
          <Text style={styles.cardItemName}>City:</Text> {props.item.city}
        </Text>
        <Text style={styles.cardItemInfo}>
          <Text style={styles.cardItemName}>Date:</Text> {formattedDate}
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

  cardTitleContainer: {
    backgroundColor: '#fd7a00',
    marginBottom: 7,
  },

  cardTitleText: {
    color: '#fff',
    padding: 5,
    fontFamily: 'Jost_700Bold',
    fontSize: 16,
    textAlign: 'center',
  },

  cardItemName: {
    fontFamily: 'Jost_700Bold',
    fontSize: 14,
  },

  cardItemInfo: {
    fontFamily: 'Jost_400Regular',
    fontSize: 14,
  },
});
