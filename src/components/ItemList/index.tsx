import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const ItemList = ({ item, onRemove, onComplete }: any) => {
  const trash = require('../../../assets/trash.png')
  const check = require('../../../assets/check.png')
  const uncheck = require('../../../assets/uncheck.png')
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => onComplete(item.id)}
      >
        <Image
          source={item?.complete ? check : uncheck}
        />
      </TouchableOpacity>
      <Text style={styles.label}>
        {item?.value}
      </Text>
      <TouchableOpacity
        onPress={() => onRemove(item.id)}
      >
        <Image
          source={trash}
        />
      </TouchableOpacity>
    </View >
  )
}