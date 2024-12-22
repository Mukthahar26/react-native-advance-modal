import React, {useEffect, useState} from 'react';
import {Modal, Pressable, Animated} from 'react-native';
import {getModalStyle} from '../../helpers/helper';
import styles from './styles';
import {CustomModalProps} from '../../props';

const CustomModal: React.FC<CustomModalProps> = ({
  type,
  visible,
  onClose,
  cardStyle,
  overlayStyle,
  animationDuration = 300,
  animationStyle,
  children,
}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const translateValue = useState(new Animated.Value(0))[0];
  const {positionStyle, transformStyle} = getModalStyle(
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
      }).start();
    } else {
      Animated.timing(translateValue, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start(() => setModalVisible(false));
    }
  }, [visible, translateValue, animationDuration]);

  if (!modalVisible) return null;

  return (
    <Modal transparent visible={modalVisible} animationType="none">
      <Pressable style={[styles.overlay, overlayStyle]} onPress={onClose} />
      <Animated.View
        style={[styles.card, cardStyle, positionStyle, transformStyle]}>
        {children}
      </Animated.View>
    </Modal>
  );
};

export default CustomModal;
