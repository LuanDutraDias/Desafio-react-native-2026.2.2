import { View, TextInput, Text, TextInputProps } from "react-native";
import { colors } from "@/constants/colors";
import { styles } from "./styles";
import { useState } from "react";

type CommentInputWithTitleProps = TextInputProps & {
  title: string;
  comment: string;
  commentLength?: number;
};

export default function CommentInputWithTitle({title, comment, commentLength, ...props}: CommentInputWithTitleProps) {

  return (
    <View style={styles.containerTitleAndInput}>
      <Text style={styles.title}>
        {title}
      </Text>
      <TextInput
        {...props}
        value={comment}
        placeholderTextColor={colors.inputPlaceHolder}
        maxLength={200}
        multiline
        style={styles.input}
        textAlignVertical="top"
      />
      <Text style={styles.caracterCounter}>
          {commentLength ? commentLength: comment.length}/200
      </Text>
    </View>
  );
}