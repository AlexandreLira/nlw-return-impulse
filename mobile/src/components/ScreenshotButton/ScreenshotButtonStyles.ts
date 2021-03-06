import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 4,
        backgroundColor: colors.surface_secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        position: "relative"
    },
    removeIcon: {
        position: "absolute",
        bottom: 2,
        right: 2,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 4,
    }
})