import React, { useState } from "react";
import { 
  Image, 
  Text, 
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system'

import { FeedbackTypes } from "../../WidgetForm/WidgetForm";
import { Button } from "../../Button/Button";
import { ScreenshotButton } from "../../ScreenshotButton/ScreenshotButton";

import { ArrowLeft } from "phosphor-react-native";
import { feedbackTypes } from "../../../utils/feedbackTypes";
import { colors } from "../../../theme";
import { styles } from "./FeedbackContentStepStyles";
import { api } from "../../../libs/api";

interface Props {
  feedbackType: FeedbackTypes
  onFeedbackRestartRequest: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequest,
  onFeedbackSent
}: Props) {

  const [ screenshot, setScreenshot ] = useState<string | null>(null)
  const [ comment, setComment ] = useState('')
  const [ isSendingFeedback, setIsSendingFeedback ] = useState<boolean>(false)
  const feedbackTypeSeleted  = feedbackTypes[feedbackType]

  function handleScreenshot(){
    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }

  function handleScreenshotRemove(){
    setScreenshot(null)
  }

  async function handleSendFeedback(){
    if(isSendingFeedback){
      return;
    }

    setIsSendingFeedback(true)

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' })
    
    try {
      await api.put('feedbacks', {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64, ${screenshotBase64}`
      })
      onFeedbackSent()
      
    } catch (error) {
      console.log(error)
      setIsSendingFeedback(false)
    }
    
  }

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onFeedbackRestartRequest}
        >
          <ArrowLeft
            size={24}
            weight="bold"
            color={colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeSeleted.image}
            style={styles.image}
          />
          <Text style={styles.title}>
            {feedbackTypeSeleted.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={colors.text_secondary}
        onChangeText={setComment}
        autoCorrect={false}
      />
      <View style={styles.footer}>
        <ScreenshotButton 
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
        />
        <Button 
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}
        />
      </View>
    </>
  )
}