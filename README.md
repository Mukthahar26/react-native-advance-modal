# react-native-advance-modal

A lightweight and customizable modal component for React Native with smooth animated transitions and support for multiple modal positions.

## Features

- 🚀 Lightweight and dependency-free
- 🎨 Fully customizable modal and backdrop styles
- 📱 Multiple modal positions (Center, Bottom, Left, Right)
- ✨ Smooth animated transitions
- 👆 Close by tapping the backdrop
- 🔙 Android hardware back button support
- 🎯 Custom animation support
- ♿ Accessibility support
- 🧪 Test ID support
- ⚡ TypeScript support

## Installation

Install the package using npm or yarn.

```bash
npm install react-native-advance-modal
```

or

```bash
yarn add react-native-advance-modal
```

## Usage

```tsx
import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import AdvanceModal from "react-native-advance-modal";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <AdvanceModal
        type="center"
        visible={visible}
        onClose={() => setVisible(false)}
        cardStyle={styles.card}
        overlayStyle={styles.overlay}
      >
        <Text style={styles.title}>Hello 👋</Text>
      </AdvanceModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
```

## Props

| Prop                                   | Type                                                                           | Default           | Description                                                |
| -------------------------------------- | ------------------------------------------------------------------------------ | ----------------- | ---------------------------------------------------------- |
| <code>type</code>                      | <code>"center" \| "bottom" \| "left" \| "right"</code>                         | **Required**      | Modal position and animation direction.                    |
| <code>visible</code>                   | <code>boolean</code>                                                           | **Required**      | Controls modal visibility.                                 |
| <code>onClose</code>                   | <code>() => void</code>                                                        | -                 | Called when the modal should close.                        |
| <code>cardStyle</code>                 | <code>StyleProp&lt;ViewStyle&gt;</code>                                        | -                 | Style applied to the modal container.                      |
| <code>overlayStyle</code>              | <code>StyleProp&lt;ViewStyle&gt;</code>                                        | -                 | Style applied to the backdrop overlay.                     |
| <code>animationDuration</code>         | <code>number</code>                                                            | <code>300</code>  | Animation duration in milliseconds.                        |
| <code>animationStyle</code>            | <code>(translateValue: Animated.Value) =&gt; StyleProp&lt;ViewStyle&gt;</code> | -                 | Custom animation for the modal content.                    |
| <code>shouldCloseOnClickOverlay</code> | <code>boolean</code>                                                           | <code>true</code> | Whether tapping the backdrop closes the modal.             |
| <code>closeOnAndroidBackPress</code>   | <code>boolean</code>                                                           | <code>true</code> | Whether pressing the Android back button closes the modal. |
| <code>onShow</code>                    | <code>() =&gt; void</code>                                                     | -                 | Called after the modal opens.                              |
| <code>onHide</code>                    | <code>() =&gt; void</code>                                                     | -                 | Called after the modal closes.                             |
| <code>onBackDropPress</code>           | <code>() =&gt; void</code>                                                     | -                 | Called when the backdrop is pressed.                       |
| <code>testId</code>                    | <code>string</code>                                                            | -                 | Test identifier for testing libraries.                     |
| <code>accessibilityLabel</code>        | <code>string</code>                                                            | -                 | Accessibility label.                                       |
| <code>children</code>                  | <code>React.ReactNode</code>                                                   | **Required**      | Content displayed inside the modal.                        |

---

## Modal Types

### Center

```tsx
<AdvanceModal type="center" visible={visible} onClose={() => setVisible(false)}>
  <Text>Center Modal</Text>
</AdvanceModal>
```

<img src="https://github.com/Mukthahar26/react-native-advance-modal/blob/main/src/assets/center.png?raw=true" alt="Center Modal Example" width="200" />

### Bottom

```tsx
<AdvanceModal type="bottom" visible={visible} onClose={() => setVisible(false)}>
  <Text>Bottom Modal</Text>
</AdvanceModal>
```

<img src="https://github.com/Mukthahar26/react-native-advance-modal/blob/main/src/assets/bottom.png?raw=true" alt="Bottom Modal Example" width="200" />

### Left

```tsx
<AdvanceModal type="left" visible={visible} onClose={() => setVisible(false)}>
  <Text>Left Modal</Text>
</AdvanceModal>
```

<img src="https://github.com/Mukthahar26/react-native-advance-modal/blob/main/src/assets/left.png?raw=true" alt="Left Modal Example" width="200" />

### Right

```tsx
<AdvanceModal type="right" visible={visible} onClose={() => setVisible(false)}>
  <Text>Right Modal</Text>
</AdvanceModal>
```

<img src="https://github.com/Mukthahar26/react-native-advance-modal/blob/main/src/assets/right.png?raw=true" alt="Right Modal Example" width="200" />

---

## Custom Animation

```tsx
<AdvanceModal
  type="center"
  visible={visible}
  onClose={() => setVisible(false)}
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
  <Text>Custom Animation</Text>
</AdvanceModal>
```

---

## Behavior

- Supports **Center**, **Bottom**, **Left**, and **Right** modal positions.
- Smooth opening and closing animations.
- Tap outside the modal to close.
- Supports Android hardware back button.
- Allows completely custom animations.
- Fully customizable backdrop and modal styles.

---

## Contributing

Contributions, issues, and feature requests are welcome.

If you find a bug or have an idea for improvement, feel free to open an issue or submit a pull request.

---

## License

MIT © react-native-advance-modal
