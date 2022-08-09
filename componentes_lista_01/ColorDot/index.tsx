import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function ColorDot() {
  const [colorHex, setColorHex] = useState<string>("");
  const [colorDot, setColorDot] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (input: string) => {
    const colorRegex = new RegExp(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);

    if (colorRegex.test(input)) {
      setError("");
      setColorDot(true);

      setTimeout(() => {
        setColorHex("");
      }, 1000);
    } else {
      setError("Cor inválida!");
      setColorDot(false);
      setColorHex("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite uma cor no formato HEX:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: fab123"
        value={colorHex}
        onChangeText={setColorHex}
        onSubmitEditing={() => {
          setColorHex;
          handleSubmit(colorHex);
        }}
      />
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 60 / 2,
          backgroundColor: `#${colorDot ? colorHex : "FFF"}`,
          marginVertical: 30,
        }}
      />
      {error ? <Text>{error}</Text> : null}
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
