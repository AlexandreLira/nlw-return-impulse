import React, { useRef } from "react";
import { Text, TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { styles } from "./widgetStyles";
import { colors } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { WidgetForm } from "../WidgetForm/WidgetForm";

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >

        <WidgetForm/>

      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget);