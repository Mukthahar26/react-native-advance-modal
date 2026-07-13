# react-native-advance-modal

A lightweight and customizable modal component for React Native with animated transitions and support for multiple positions.

## Installation

Install the package via npm or yarn:

```bash
npm install react-native-advance-modal
# or
yarn add react-native-advance-modal
```

## Usage

Import and use the default `AdvanceModal` component in your React Native project:

```tsx
import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import AdvanceModal from "react-native-advance-modal";

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <AdvanceModal
        type="center"
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        cardStyle={styles.modalCard}
        overlayStyle={styles.modalOverlay}
      >
        <Text style={styles.modalText}>Hello from the Modal!</Text>
      </AdvanceModal>
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

| Prop                        | Type                                                       | Default       | Description                                                                   |
| --------------------------- | ---------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------- | --------- | -------- | --------------------------------------- |
| `type`                      | `'center'` \\                                              | `'bottom'` \\ | `'left'` \\                                                                   | `'right'` | required | Modal position and animation direction. |
| `visible`                   | `boolean`                                                  | required      | Controls whether the modal is visible.                                        |
| `onClose`                   | `() => void`                                               | `undefined`   | Callback when the modal requests close.                                       |
| `cardStyle`                 | `StyleProp<ViewStyle>`                                     | `undefined`   | Styles applied to the modal content card.                                     |
| `overlayStyle`              | `StyleProp<ViewStyle>`                                     | `undefined`   | Styles applied to the backdrop overlay.                                       |
| `animationDuration`         | `number`                                                   | `300`         | Animation duration in milliseconds.                                           |
| `animationStyle`            | `(translateValue: Animated.Value) => StyleProp<ViewStyle>` | `undefined`   | Custom animation styles. Overrides the built-in animation for the modal card. |
| `onShow`                    | `() => void`                                               | `undefined`   | Called after the modal opens.                                                 |
| `onHide`                    | `() => void`                                               | `undefined`   | Called after the modal closes.                                                |
| `onOverlayPress`            | `() => void`                                               | `undefined`   | Called when the backdrop overlay is pressed.                                  |
| `shouldCloseOnClickOverlay` | `boolean`                                                  | `true`        | When `true`, pressing the overlay also calls `onClose`.                       |
| `closeOnAndroidBackPress`   | `boolean`                                                  | `true`        | When `true`, pressing Android back triggers `onClose`.                        |
| `testId`                    | `string`                                                   | `undefined`   | Test identifier applied to the modal and backdrop.                            |
| `accessibilityLabel`        | `string`                                                   | `undefined`   | Accessibility label for the modal and backdrop.                               |
| `children`                  | `React.ReactNode`                                          | required      | Content rendered inside the modal card.                                       |

## Behavior

- `type="center"` uses a centered opacity transition.
- `type="bottom"` slides the modal up from the bottom.
- `type="left"` slides the modal in from the left.
- `type="right"` slides the modal in from the right.
- `animationStyle` replaces the default transform style for the modal card.
- When `shouldCloseOnClickOverlay` is `false`, the overlay still calls `onOverlayPress` but does not close the modal.
- On Android, `closeOnAndroidBackPress` will call `onClose` when the hardware back button is pressed while the modal is visible.

## Custom Animation Example

```tsx
<AdvanceModal
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
</AdvanceModal>
```

## Development

Build the package with TypeScript:

```bash
npm run build
```

Watch source changes and publish using `yalc`:

```bash
npm run watch
```

## Contributing

Contributions are welcome. Feel free to open issues or pull requests.

## License

`react-native-advance-modal` is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
