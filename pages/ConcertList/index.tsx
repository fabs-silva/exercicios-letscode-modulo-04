import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TicketInfoProps } from '../../assets/ticketInfo';

const cardContainerHeight: number = Dimensions.get('window').height - 50;

export function ConcertList(props: { concerts: TicketInfoProps[] }) {
  return (
    <View style={styles.cardListContainer}>
      {props.concerts.map((concert) => {
        return (
          <View>
            <Text>{concert.bandName}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cardListContainer: {
    flex: 1,
    height: cardContainerHeight,
    backgroundColor: '#fff',
    marginVertical: 20,
    justifyContent: 'center',
  },
});
