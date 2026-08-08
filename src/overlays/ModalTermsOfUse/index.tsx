import { Modal, Text, TouchableOpacity, View } from "react-native";

import {styles} from "./styles";
import { colors } from "@/constants/colors";

import { Ionicons } from "@expo/vector-icons";

type ModalProps = {
    visible: boolean,
    onClose: () => void;
}

export default function ModalTermsOfUse({visible, onClose}: ModalProps){
    return (
        <Modal visible={visible} transparent> 
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>
                            Termos de Uso
                        </Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons
                                name="close-circle"
                                size={30}
                                color={colors.primary1}
                            />
                        </TouchableOpacity>
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
                </View>
            </View>
        </Modal>
    )
}