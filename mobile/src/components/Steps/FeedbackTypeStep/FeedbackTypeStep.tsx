import React from "react";
import { Text, View } from "react-native";
import { feedbackTypes } from "../../../utils/feedbackTypes";
import { Option } from "../../Option/Option";
import { FeedbackTypes } from "../../WidgetForm/WidgetForm";
import { styles } from "./FeedbackTypeStepStyle";


interface Props {
    onFeedbackTypeChanged: (type: FeedbackTypes) => void
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Deixe seu feedback
            </Text>

            <View style={styles.options}>
                {Object.entries(feedbackTypes).map(([key, value]) => (
                    <Option
                        key={key}
                        title={value.title}
                        image={value.image}
                        onPress={() => onFeedbackTypeChanged(key as FeedbackTypes)}
                    />
                ))}
            </View>
        </View>
    )
}