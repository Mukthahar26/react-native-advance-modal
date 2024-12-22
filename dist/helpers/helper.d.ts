import { ViewStyle, StyleProp, Animated } from "react-native";
type ModalType = "center" | "bottom" | "right" | "left";
export declare const getModalStyle: (type: ModalType, translateValue: Animated.Value, animationStyle?: (translateValue: Animated.Value) => StyleProp<ViewStyle>) => {
    positionStyle: StyleProp<ViewStyle>;
    transformStyle: StyleProp<ViewStyle>;
};
export {};
