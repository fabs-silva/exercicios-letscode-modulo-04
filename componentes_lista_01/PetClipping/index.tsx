import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type ClippingInfo = {
  size: string;
  price: number;
  time: number;
};

export function PetClipping() {
  const clippingInfo: ClippingInfo[] = [
    {
      size: "pequeno",
      price: 15,
      time: 20,
    },
    {
      size: "medio",
      price: 24,
      time: 35,
    },
    {
      size: "grande",
      price: 35,
      time: 50,
    },
  ];

  const [petSize, setPetSize] = useState<string>("");
  const [petInfo, setPetInfo] = useState<ClippingInfo | undefined>();

  const findPetInfo = (input: string) => {
    const animalInfo = clippingInfo.find((info) => input === info.size);

    if (!animalInfo) {
      return;
    }

    setPetInfo(animalInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Qual o porte do seu animal?</Text>
      <TextInput
        style={styles.input}
        placeholder="Porte do animal"
        value={petSize}
        onChangeText={setPetSize}
        onSubmitEditing={() => findPetInfo(petSize)}
      />
      {petInfo !== undefined ? (
        <View>
          <Text style={styles.label}>
            Para animais com porte {petInfo.size}:
          </Text>
          <Text>
            O preço da tosa é R$ {petInfo.price} e o tempo estimado do serviço
            será de {petInfo.time} minutos.
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "700",
  },
  input: {
    fontWeight: "400",
  },
});
