import { Text, View } from "react-native"
import { styles } from "./styles"

export const HeaderLabel = ({
  label,
  value,
  color,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={{
        ...styles.label,
        color
      }}>
        {label}
      </Text>
      <View style={styles.badge}>
        <Text style={styles.badgeLabel}>
          {value}
        </Text>
      </View>
    </View>
  )
}