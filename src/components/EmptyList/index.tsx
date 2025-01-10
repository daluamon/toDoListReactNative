import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export const EmptyList = () => {
  const File = require('../../../assets/File.png')
  return (
    <View style={styles.wrapper}>
      <Image
        source={File}
        style={styles.image}
      />
      <Text style={{
        ...styles.label,
        fontWeight: 'bold'
      }}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.label}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}