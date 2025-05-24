import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";


interface Tentativa {
  tentativa: string;
  bulls: number;
  cows: number;
}

function gerarSenhaSecreta(): string {
  const digitos: number[] = [];
  while (digitos.length < 4) {
    const numero = Math.floor(Math.random() * 10);
    if (!digitos.includes(numero)) digitos.push(numero);
  }
  return digitos.join("");
}


function calcularBullsECows(tentativa: string, senha: string) {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < tentativa.length; i++) {
    if (tentativa[i] === senha[i]) {
      bulls++;
    } else if (senha.includes(tentativa[i])) {
      cows++;
    }
  }
  return { bulls, cows };
}

export default function JogoSenhaMobile(): JSX.Element {
  const [senha, setSenha] = useState<string>("");
  const [tentativa, setTentativa] = useState<string>("");
  const [historico, setHistorico] = useState<Tentativa[]>([]);

  useEffect(() => {
    setSenha(gerarSenhaSecreta());
  }, []);

  const lidarComTentativa = (): void => {
    if (
      tentativa.length !== 4 ||
      new Set(tentativa).size !== 4 ||
      !/^[0-9]+$/.test(tentativa)
    ) {
      Alert.alert("Erro", "Digite 4 dígitos únicos (0-9)");
      return;
    }

    const resultado = calcularBullsECows(tentativa, senha);
    const novaTentativa: Tentativa = {
      tentativa,
      bulls: resultado.bulls,
      cows: resultado.cows
    };

    setHistorico((prev) => [novaTentativa, ...prev]);
    setTentativa("");

    if (resultado.bulls === 4) {
      Alert.alert("Parabéns!", "Você acertou a senha!");
      tentarNovamente()
    }
  };

  const tentarNovamente = (): void => {
    setSenha(gerarSenhaSecreta());
    setTentativa("");
    setHistorico([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Senha (Bulls and Cows)</Text>

      <TextInput
        style={styles.input}
        value={tentativa}
        onChangeText={setTentativa}
        maxLength={4}
        keyboardType="number-pad"
        placeholder="Digite 4 dígitos únicos"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button} onPress={lidarComTentativa}>
        <Text style={styles.buttonText}>Tentar</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => Alert.alert("Senha", senha)}
        >
          <Text style={styles.buttonText}>Ver Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={tentarNovamente}
        >
          <Text style={styles.buttonText}>Nova Senha</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Tentativas</Text>
      <FlatList
        data={historico}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>
            {item.tentativa} → {item.bulls} Bulls, {item.cows} Cows
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20
  },
  title: {
    color: "#00BFFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  subtitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 24,
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#00BFFF",
    borderRadius: 8,
    padding: 12,
    color: "#FFF",
    fontSize: 18,
    marginBottom: 12
  },
  button: {
    backgroundColor: "#00BFFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20
  },
  secondaryButton: {
    backgroundColor: "#1A1A1A",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#00BFFF"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  historyItem: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 8
  }
});
