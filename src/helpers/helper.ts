import { Dimensions, ViewStyle, StyleProp, Animated } from "react-native";

const { width, height } = Dimensions.get("window");

type ModalType = "center" | "bottom" | "right" | "left";

export const getModalStyle = (
  type: ModalType,
  translateValue: Animated.Value,
  animationStyle?: (translateValue: Animated.Value) => StyleProp<ViewStyle>
): {
  positionStyle: StyleProp<ViewStyle>;
  transformStyle: StyleProp<ViewStyle>;
} => {
  let positionStyle: StyleProp<ViewStyle> = {};
  let transformStyle: StyleProp<ViewStyle> = {};

  // Modal position styles
  switch (type) {
    case "center":
      positionStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -width * 0.4 }, { translateY: -200 / 2 }],
        width: "80%",
        minHeight: "5%",
        borderRadius: 8,
      };
      transformStyle = { opacity: translateValue };
      break;
    case "bottom":
      positionStyle = {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        width: "100%",
        minHeight: "5%",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      };
      transformStyle = {
        transform: [
          {
            translateY: translateValue.interpolate({
              inputRange: [0, 1],
              outputRange: [height, 0],
            }),
          },
        ],
      };
      break;
    case "right":
      positionStyle = {
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: "70%",
      };
      transformStyle = {
        transform: [
          {
            translateX: translateValue.interpolate({
              inputRange: [0, 1],
              outputRange: [width, 0],
            }),
          },
        ],
      };
      break;
    case "left":
      positionStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "70%",
      };
      transformStyle = {
        transform: [
          {
            translateX: translateValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, 0],
            }),
          },
        ],
      };
      break;
    default:
      positionStyle = {};
      transformStyle = {};
      break;
  }

  // Apply the custom animation style if provided
  if (animationStyle) {
    transformStyle = animationStyle(translateValue);
  }

  return { positionStyle, transformStyle };
};
