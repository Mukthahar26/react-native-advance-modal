import { Animated, StyleProp, ViewStyle } from "react-native";
type ModalType = "center" | "bottom" | "right" | "left";
export type CustomModalProps = {
    type: ModalType;
    visible: boolean;
    onClose?: () => void;
    cardStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    animationDuration?: number;
    animationStyle?: (translateValue: Animated.Value) => StyleProp<ViewStyle>;
    children: React.ReactNode;
};
export {};
