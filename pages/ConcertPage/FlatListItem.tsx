import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TicketsSimulation } from '../../assets/ticketInfo';

export const formattedPrice = (value: number) => {
  return `R$ ${value.toFixed(2)}`;
};

export type TicketPurchase = {
  ticketId: number;
  purchaseInfo: {
    category: string;
    price: number;
    amount: number;
    total: number;
  }[];
};

export function FlatListItem(props: {
  ticket: TicketsSimulation;
  ticketPurchase: TicketPurchase;
  setTicketPurchase: (ticketPurchase: TicketPurchase) => void;
}) {
  const [newAmount, setNewAmount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const updateList = () => {
    const newList = props.ticketPurchase.purchaseInfo.filter(
      (t) => t.category !== props.ticket.type
    );
    const purchase = {
      category: props.ticket.type,
      price: props.ticket.value,
      amount: newAmount,
      total: price,
    };
    newList.push(purchase);
    props.setTicketPurchase({
      ticketId: props.ticketPurchase.ticketId,
      purchaseInfo: newList,
    });
  };

  return (
    <View style={styles.flatItem}>
      <Text style={styles.flatLabel}>{props.ticket.type}</Text>
      <Text style={styles.flatTextPrice}>
        {formattedPrice(props.ticket.value)}
      </Text>
      <View style={styles.flatContainerAmount}>
        <TouchableOpacity
          style={styles.flatButtonAmount}
          onPress={() => {
            if (newAmount <= 0) {
              return;
            }
            setNewAmount(newAmount - 1);
            setPrice(price - props.ticket.value);
            updateList();
          }}
        >
          <Text style={styles.flatButtonAmountText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.flatTextAmount}>{newAmount}</Text>
        <TouchableOpacity
          style={styles.flatButtonAmount}
          onPress={() => {
            setNewAmount(newAmount + 1);
            setPrice(price + props.ticket.value);
            updateList();
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
