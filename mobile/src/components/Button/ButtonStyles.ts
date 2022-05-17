import { StyleSheet } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        backgroundColor: colors.brand,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.medium,
        color: colors.text_on_brand_color
    }
})