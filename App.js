import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

import Button from './src/components/button/button.jsx';

export default function App() {
  return (
    <View>
      <Text style={styles.textos}>Bem vindo</Text>

      <Button title="Salvar"/>
    </View>
  );
}