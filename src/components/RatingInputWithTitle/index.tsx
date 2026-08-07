import { View, TextInput, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { styles } from "./styles";

type RatingInputWithTitleProps = {
  title: string;
  value?: string;
  editable?: boolean;
};

export default function RatingInputWithTitle({title, value, editable = true}: RatingInputWithTitleProps) {

  return (
    <View style={styles.containerTitleInputAndIcon}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.containerInputAndIcon}>
          <TextInput
              value={value}
              editable={editable}
              keyboardType="decimal-pad"
              placeholder="0.0"
              placeholderTextColor={colors.inputPlaceHolder}
              maxLength={4}
              style={styles.input}
          />
          <AntDesign
            name="star"
            size={24}
            color={colors.rating}
          />
      </View>
    </View>
  );
}