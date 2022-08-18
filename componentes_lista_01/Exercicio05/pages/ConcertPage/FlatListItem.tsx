import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TicketsSimulation } from '../../assets/ticketInfo';

export const formattedPrice = (value: number) => {
  return `R$ ${value.toFixed(2)}`;
};

export type TicketPurchase = {
  ticketId: number;
  purchaseInfo: TicketsSimulation[];
};

export function FlatListItem(props: { state; dispatch; type }) {
  const item = props.state.ticketsSimulation.find(
    (tp) => tp.type === props.type
  );

  return (
    <View style={styles.flatItem}>
      <Text style={styles.flatLabel}>{item?.type}</Text>
      <Text style={styles.flatTextPrice}>{formattedPrice(item?.value)}</Text>
      <View style={styles.flatContainerAmount}>
        <TouchableOpacity
          style={styles.flatButtonAmount}
          onPress={() => {
            if (item?.amount <= 0) {
              return;
            }

            const filteredList = props.state.ticketsSimulation.filter(
              (tp) => tp.type !== props.type
            );

            const newTicketSimulation = [
              ...filteredList,
              {
                ...item,
                amount: item.amount - 1,
              },
            ];

            props.dispatch({
              type: 'CHANGE_STATE',
              payload: newTicketSimulation,
            });
          }}
        >
          <Text style={styles.flatButtonAmountText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.flatTextAmount}>{item?.amount}</Text>
        <TouchableOpacity
          style={styles.flatButtonAmount}
          onPress={() => {
            const filteredList = props.state.ticketsSimulation.filter(
              (tp) => tp.type !== props.type
            );

            const newTicketSimulation = [
              ...filteredList,
              {
                ...item,
                amount: item.amount + 1,
              },
            ];

            props.dispatch({
              type: 'CHANGE_STATE',
              payload: newTicketSimulation,
            });
          }}
        >
          <Text style={styles.flatButtonAmountText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    textAlignVertical: 'center',
    paddingVertical: 8,
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
});
