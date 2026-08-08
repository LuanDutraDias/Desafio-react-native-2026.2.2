import { View, TextInput, Text, TextInputProps } from "react-native";
import { colors } from "@/constants/colors";
import { styles } from "./styles";
import { useState } from "react";

type CommentInputWithTitleProps = TextInputProps & {
  title: string;
  comment?: string;
};

export default function CommentInputWithTitle({title, comment, ...props}: CommentInputWithTitleProps) {

  const [stateComment, setStateComment] = useState("");

  return (
    <View style={styles.containerTitleAndInput}>
      <Text style={styles.title}>
        {title}
      </Text>
      <TextInput
        {...props}
        placeholderTextColor={colors.inputPlaceHolder}
        maxLength={200}
        onChangeText={setStateComment}
        multiline
        style={styles.input}
        textAlignVertical="top"
      />
      <Text style={styles.caracterCounter}>
        {stateComment.length}/200
      </Text>
    </View>
  );
}