import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Ticket = {
  type: 'standard' | 'vip' | 'platinum';
  value: number;
};

export type TicketsSimulation = Ticket & {
  amount: number;
};

export const formattedPrice = (value: number) => {
  return `R$ ${value.toFixed(2)}`;
};

export function FlatListItem(props: {
  ticket: TicketsSimulation;
  price: number;
  setPrice: (price: number) => void;
}) {
  const [newAmount, setNewAmount] = useState<number>(0);

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
            props.setPrice(props.price - props.ticket.value);
          }}
        >
          <Text style={styles.flatButtonAmountText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.flatTextAmount}>{newAmount}</Text>
        <TouchableOpacity
          style={styles.flatButtonAmount}
          onPress={() => {
            setNewAmount(newAmount + 1);
            props.setPrice(props.price + props.ticket.value);
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
