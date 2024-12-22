# Custom Modal for React Native

A flexible and animated modal component for React Native applications. Supports multiple positions (`center`, `bottom`, `left`, `right`) and customizable animations.

## Installation

Install the package via npm or yarn:

```bash
npm install react-native-advance-modal
# or
yarn add react-native-advance-modal
```

## Usage

Import and use the `CustomModal` component in your React Native project:

```tsx
import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import CustomModal from "react-native-advance-modal";

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <CustomModal
        type="center"
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        cardStyle={styles.modalCard}
        overlayStyle={styles.modalOverlay}
      >
        <Text style={styles.modalText}>Hello from the Modal!</Text>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default App;
```

## Props

| Prop                | Type                                                       | Default     | Description                                                      |
| ------------------- | ---------------------------------------------------------- | ----------- | ---------------------------------------------------------------- |
| `type`              | `'center'\| 'bottom'\| 'right'\| 'left'`                   | `'center'`  | Determines the modal's position.                                 |
| `visible`           | `boolean`                                                  | `false`     | Controls the visibility of the modal.                            |
| `onClose`           | `() => void`                                               | `undefined` | Callback function triggered when the modal is closed.            |
| `cardStyle`         | `StyleProp<ViewStyle>`                                     | `undefined` | Style for the modal's content card.                              |
| `overlayStyle`      | `StyleProp<ViewStyle>`                                     | `undefined` | Style for the overlay background.                                |
| `animationDuration` | `number`                                                   | `300`       | Duration (in ms) for the modal open/close animation.             |
| `animationStyle`    | `(translateValue: Animated.Value) => StyleProp<ViewStyle>` | `undefined` | Custom animation style function for the modal's opening/closing. |
| `children`          | `React.ReactNode`                                          | `undefined` | Content to render inside the modal.                              |

## Features

- Supports multiple modal types: `center`, `bottom`, `left`, `right`.
- Customizable animations using `animationStyle`.
- Overlay click to close functionality.
- Fully customizable styles for the modal card and overlay.

## Custom Animation Example

You can define your custom animation style using the `animationStyle` prop:

```tsx
<CustomModal
  type="center"
  visible={isModalVisible}
  onClose={() => setModalVisible(false)}
  animationStyle={(translateValue) => ({
    transform: [
      {
        scale: translateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1],
        }),
      },
    ],
  })}
>
  <Text>Your custom animation!</Text>
</CustomModal>
```

## Screenshots

### Center Modal

<img src="https://github.com/Mukthahar26/react-native-advance-modal/blob/main/src/assets/center.png?raw=true" alt="Center Modal Example" width="200" />

### Bottom Modal

<img src="https://github.com/Mukthahar26/react-native-advance-modal/blob/main/src/assets/bottom.png?raw=true" alt="Bottom Modal Example" width="200" />

### Left Modal

<img src="https://github.com/Mukthahar26/react-native-advance-modal/blob/main/src/assets/left.png?raw=true" alt="Left Modal Example" width="200" />

### Right Modal

<img src="https://github.com/Mukthahar26/react-native-advance-modal/blob/main/src/assets/right.png?raw=true" alt="Right Modal Example" width="200" />

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
