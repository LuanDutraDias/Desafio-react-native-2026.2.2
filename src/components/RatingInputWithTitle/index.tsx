import { View, TextInput, Text, TextInputProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { styles } from "./styles";

type RatingInputWithTitleProps = TextInputProps & {
  title: string;
  editable?: boolean;
  rating?: string;
};

export default function RatingInputWithTitle({title, editable = true, rating, ...props}: RatingInputWithTitleProps) {

  return (
    <View style={styles.containerTitleInputAndIcon}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.containerInputAndIcon}>
          <TextInput
              {...props}
              editable={editable}
              keyboardType="decimal-pad"
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