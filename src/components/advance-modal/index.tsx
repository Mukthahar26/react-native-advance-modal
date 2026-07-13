import React, { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  Animated,
  View,
  BackHandler,
  Platform,
} from "react-native";
import { getModalStyle } from "../../helpers/helper";
import styles from "./styles";
import { CustomModalProps } from "../../props";

const CustomModal: React.FC<CustomModalProps> = ({
  type,
  visible,
  onClose,
  cardStyle,
  overlayStyle,
  animationDuration = 300,
  animationStyle,
  shouldCloseOnClickOverlay = true,
  onShow,
  onHide,
  onOverlayPress,
  closeOnAndroidBackPress = true,
  testId,
  accessibilityLabel,
  children,
}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const translateValue = useState(new Animated.Value(0))[0];
  const { positionStyle, transformStyle } = getModalStyle(
    type,
    translateValue,
    animationStyle,
  );

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.timing(translateValue, {
        toValue: 1,
        duration: animationDuration,
        useNativeDriver: true,
      }).start(() => {
        onShow?.();
      });
    } else {
      Animated.timing(translateValue, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
        onHide?.();
      });
    }
  }, [visible, translateValue, animationDuration, onShow, onHide]);

  useEffect(() => {
    if (Platform.OS !== "android" || !visible || !closeOnAndroidBackPress) {
      return;
    }

    const handleBackPress = () => {
      if (onClose) {
        onClose();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress,
    );

    return () => subscription.remove();
  }, [visible, closeOnAndroidBackPress, onClose]);

  const onCloseOverlay = () => {
    onOverlayPress?.();

    if (shouldCloseOnClickOverlay && onClose) {
      onClose();
    }
  };

  if (!modalVisible) return null;

  return (
    <Modal
      transparent
      visible={modalVisible}
      animationType="none"
      onRequestClose={() => {
        if (closeOnAndroidBackPress) {
          onClose?.();
        }
      }}
      testID={testId}
      accessibilityLabel={accessibilityLabel}
    >
      <Pressable
        style={[styles.overlay, overlayStyle]}
        onPress={onCloseOverlay}
        testID={testId ? `${testId}-backdrop` : undefined}
        accessibilityLabel={accessibilityLabel}
      />

      {type === "center" ? (
        <View style={styles.centerContainer}>
          <Animated.View
            style={[styles.card, positionStyle, transformStyle, cardStyle]}
          >
            {children}
          </Animated.View>
        </View>
      ) : (
        <Animated.View
          style={[styles.card, positionStyle, transformStyle, cardStyle]}
        >
          {children}
        </Animated.View>
      )}
    </Modal>
  );
};

export default CustomModal;
