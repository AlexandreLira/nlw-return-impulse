import { View, Text } from "react-native";
import { styles } from "./copyrightStyles";

export function Copyright() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Feito com ♥ pela Rocketseat
            </Text>
        </View>
    )
}