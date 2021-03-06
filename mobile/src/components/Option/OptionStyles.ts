import { StyleSheet } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 112,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: colors.surface_secondary
    },
    image: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 14,
        marginTop: 8,
        fontFamily: fonts.medium,
        color: colors.text_primary
    }
})