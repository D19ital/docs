---
title: Quick start and navigation
weight: 2
video_lightbox: true
prev: installation
next: layouts
---

## First connection

1. Connect a compatible device over USB or Bluetooth
2. Launch Entropy
3. Open the **Layout** menu at the top of the window
4. Select the device from the list
5. Wait for the first layout and the remaining background data to load

Entropy may connect automatically when only one device is available

For Bluetooth, pair the device in the operating-system settings first, then select it in Entropy

{{< callout type="info" >}}
Pages and menu items appear only when the connected firmware reports support for the corresponding feature
{{< /callout >}}

## Main sections

The top of the window contains three main sections

- **Layout** — device map, connection selection, layers, import, and export
- **Advanced** — Text Expander, Typing Trainer, and advanced firmware features
- **Config** — Entropy preferences and available device settings

{{< video autoplay="true" loop="true" muted="true" src="/video/entropy/navigation-en.mp4" >}}

### Layout

The center of the window shows the keys and encoders on the selected layer

- Arrows beside the layer name switch between layers
- The mouse wheel and `Left`/`Right` keys also switch layers
- Clicking the layer name lets you rename it
- Left-clicking a key opens the key picker
- Right-clicking a layer key opens its target layer
- `Esc` or right-click returns to the previous screen
- The bottom line shows contextual hints

If the device reports battery levels, they appear below the layer name for each half

### Layout menu

Open **Layout** to access these actions

- Select a USB or Bluetooth connection
- Switch the EN/RU legend order
- Run layer operations
- Import or export `.entlayout`
- Export an image or PDF
- Open Layout Indicator
- View device information

{{< video autoplay="true" loop="true" muted="true" src="/video/entropy/device-menu-en.mp4" >}}

### Advanced

This menu contains features that are not part of the layout map itself

- Text Expander
- Typing Trainer
- Combos
- Auto Shift
- Key Overrides

The available items depend on the connected firmware

### Config

This menu contains application preferences and firmware features

- App settings
- Matrix Tester
- RGB and Layer LEDs
- Encoders, displays, modules, touchpad, and Bluetooth
- Live Features
- Magic and Tap-Hold/One Shot
- Vial lock or unlock
- Entropy version information

## Interactive tour

Entropy displays a short tour of the main interface areas on first launch

Run it again through **Config → App settings → Interactive tour → Show tour**

{{< video autoplay="true" loop="true" muted="true" src="/video/entropy/onboarding-en.mp4" >}}

## Saving changes

Key assignments and most settings are written to the device immediately or through a short save queue

If a page displays **Saving**, **Saved**, or **Failed**, do not disconnect the device until the write finishes

The **Undo** action in the upper-left corner reverts the latest supported layout change

## Scale and theme

- The `−`, `100%`, and `+` controls in the upper-right corner change the UI scale
- The control in the lower-right corner switches between light and dark themes
- Accent color is configured under **App settings**
