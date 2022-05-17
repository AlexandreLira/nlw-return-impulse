import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.medium,
        color: colors.text_primary,
        marginBottom: 32
    },
    options: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 48
    }
})