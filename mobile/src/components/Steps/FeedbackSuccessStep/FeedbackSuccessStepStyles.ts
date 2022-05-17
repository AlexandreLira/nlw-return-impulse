import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        width: 36,
        height: 36,
        marginTop: 42,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 24,
        fontFamily: fonts.medium,
        color: colors.text_primary
    },
    button: {
        height: 40,
        backgroundColor: colors.surface_secondary,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 34
    },
    buttonTitle: {
        fontSize: 14,
        fontFamily: fonts.medium,
        color: colors.text_primary
    }
})