import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

import {styles} from "./styles";
import { colors } from "@/constants/colors";

import { Ionicons } from "@expo/vector-icons";
import CloseModalButton from "@/components/CloseModalButton";

type ModalProps = {
    visible: boolean,
    onClose: () => void;
}

export default function ModalTermsOfUse({visible, onClose}: ModalProps){
    return (
        <Modal visible={visible} transparent> 
            <Pressable style={styles.overlay} onPress={onClose}>
                <Pressable style={styles.modal} onPress={() => {}}>
                    <CloseModalButton
                        onClose={onClose}
                    />
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>
                            Termos de Uso
                        </Text>
                    </View>

                    <Text style={styles.text}>
                    • Utilize o aplicativo de forma responsável.

                    {"\n\n"}

                    • Respeite os demais usuários ao publicar avaliações.

                    {"\n\n"}

                    • Não publique conteúdos ofensivos, ilegais ou discriminatórios.

                    {"\n\n"}

                    • Avaliações podem ser removidas caso violem estes termos.

                    {"\n\n"}

                    • Ao utilizar o aplicativo, você concorda com estas condições.
                    </Text>
                </Pressable>
            </Pressable>
        </Modal>
    )
}