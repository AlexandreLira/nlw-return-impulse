import { Camera, Trash } from "phosphor-react-native";
import { Image, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme";
import { styles } from "./ScreenshotButtonStyles";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot ? (
          <View>
            <Image 
              style={styles.image}
              source={{uri: screenshot}}
            />
            <Trash
              size={22}
              color={colors.text_primary}
              weight="fill"
              style={styles.removeIcon}
            />
          </View>
        ) : (
          <Camera
            size={24}
            color={colors.text_secondary}
            weight="bold"
          />
        )
      }
    </TouchableOpacity>
  )
}