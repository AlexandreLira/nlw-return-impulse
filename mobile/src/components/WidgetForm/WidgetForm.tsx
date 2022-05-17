import React, { useState } from "react";
import {
  View,
} from "react-native";
import { styles } from "./widgetFormStyle";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright/copyright";

import { FeedbackTypeStep } from "../Steps/FeedbackTypeStep/FeedbackTypeStep";
import { FeedbackContentStep } from "../Steps/FeedbackContentStep/FeedbackContentStep";
import { FeedbackSuccessStep } from "../Steps/FeedbackSuccessStep/FeedbackSuccessStep";

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)


  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSent(false)
  }
  return (
    <View style={styles.container}>
      {
        feedbackSent ? (
          <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
        ) : (
          <>
            {
              !feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
              ) : (
                <FeedbackContentStep
                  feedbackType={feedbackType}
                  onFeedbackSent={() => setFeedbackSent(true)}
                  onFeedbackRestartRequest={handleRestartFeedback}
                />
              )
            }
          </>
        )
      }


      <Copyright />
    </View>
  )
}