import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity 
} from 'react-native';

import  successImg from '../../../assets/success.png'
import { styles } from './FeedbackSuccessStepStyles';

interface Props {
    onFeedbackRestartRequest: () => void
}

export function FeedbackSuccessStep({onFeedbackRestartRequest}: Props){
    return (
        <View style={styles.container}>
            <Image
                source={successImg}
                style={styles.image}
            />

            <Text style={styles.title}>
                Agradecemos o feedback!
            </Text>

            <TouchableOpacity 
                onPress={onFeedbackRestartRequest}
                style={styles.button}
            >
                <Text style={styles.buttonTitle}>
                    Quero enviar outro
                </Text>
            </TouchableOpacity>

        </View>
    )
}