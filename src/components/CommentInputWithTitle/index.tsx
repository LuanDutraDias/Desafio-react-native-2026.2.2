import { View, TextInput, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { styles } from "./styles";
import { useState } from "react";

type CommentInputWithTitleProps = {
  title: string;
  value?: string;
  editable?: boolean;
};

export default function CommentInputWithTitle({title, value, editable = true}: CommentInputWithTitleProps) {

  const [comment, setComment] = useState("");

  return (
    <View style={styles.containerTitleAndInput}>
      <Text style={styles.title}>
        {title}
      </Text>
      <TextInput
        value={value}
        editable={editable}
        placeholder="O que achou do jogo?"
        placeholderTextColor={colors.inputPlaceHolder}
        maxLength={200}
        onChangeText={setComment}
        multiline
        style={styles.input}
        textAlignVertical="top"
      />
      <Text style={styles.caracterCounter}>
        {comment.length}/200
      </Text>
    </View>
  );
}