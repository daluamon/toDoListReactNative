import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  badge: {
    height: 22,
    backgroundColor: "#333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeLabel: {
    color: "#FFF",
  },
});
