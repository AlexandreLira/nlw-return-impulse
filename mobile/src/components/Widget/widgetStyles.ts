import { StyleSheet } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { colors } from "../../theme";


export const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: colors.brand,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 16,
        bottom: getBottomSpace() + 16,
    },
    modal: {
        backgroundColor: colors.surface_primary,
        paddingBottom: getBottomSpace() + 16,
    },
    indicator: {
        backgroundColor: colors.text_primary,
        width: 56,
        padding: 0,
    }
})