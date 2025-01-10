import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "transparent",
    marginHorizontal: 30,
    marginTop: -27,
    flexDirection: "row",
    zIndex: 1,
  },
  input: {
    backgroundColor: "#262626",
    borderColor: "#1E6F9F",
    flex: 1,
    marginRight: 6,
    borderRadius: 6,
    height: 54,
    padding: 12,
    color: "#FFF",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  base: {
    backgroundColor: "#1A1A1A",
    flex: 1,
    marginTop: -34,
    width: "100%",
  },
});
