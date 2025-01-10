import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export const Header = () => {
  const Logo = require('../../../assets/Logo.png')
  return (
    <View style={styles.header}>
      <Image source={Logo} />
    </View>
  )
}