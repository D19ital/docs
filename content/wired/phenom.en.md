---
title: "Phenom"
sidebar:
  exclude: true
---

{{< details title="Phenom" closed="true" >}}

![image](/images/layouts/phenom_layout_en.png)

**Phenom** — an ergonomic programmable split keyboard with a 3D case, modular hot-swap system, 58 customizable keys, and support for a trackball, touchpad, or encoder on either half

{{< /details >}}

{{< details title="Phenom Mini" closed="true" >}}

![image](/images/layouts/phenom_mini_layout_en.png)

**Phenom Mini** — a compact version of the ergonomic split-keyboard Phenom with 46 customizable keys and support for a trackball, touchpad, or encoder on either half

{{< /details >}}

{{< details title="Phenom Micro" closed="true" >}}

![image](/images/layouts/phenom_micro_layout_en.png)

**Phenom Micro** - an ultra-compact version of the Phenom keyboard, with just 40 customizable keys and support for a trackball, touchpad, or encoder on either half.

{{< /details >}}

## Connection

- Phenom works with devices running Windows, macOS/iOS, Linux/Android
- The keyboard uses Plug and Play (PnP), so no additional driver installation is required
- The keyboard ships ready to use with the firmware current at the time of purchase
- Before connecting to a computer, make sure the USB-C cable between the halves is firmly plugged in
- When connecting to a computer, make sure the USB-C cable is firmly inserted into the keyboard's interface connector

{{< callout type="info" >}}
The keyboard can be connected to a computer through either half
{{< /callout >}}

## Modules

Phenom supports a modular system for both halves of the keyboard

{{< tabs items="Trackball,Touchpad,Encoder" >}}
  {{< tab >}}
- Ball size: 38 mm
- Scroll Mode for smooth scrolling
- Sniper Mode for precise cursor control
- Text Mode for convenient text navigation
  {{< /tab >}}
  {{< tab >}}
- Active area: 43×40 mm
- Scroll Mode for smooth scrolling
- Sniper Mode for precise cursor control
- Text Mode for convenient text navigation
- Gestures (tap/swipe): one finger (left click/move), two fingers (right click/scroll)
  {{< /tab >}}
  {{< tab >}}
- Sensor type: mechanical
- Rotation range: 360 degrees
- Use cases: volume control, brightness, navigation
  {{< /tab >}}
{{< /tabs >}}

### Modular system connection features
- modules support hot swapping
- modules can be installed in the connectors on either half without reflashing
- when one module is replaced with another, the configuration in Vial is preserved
- identical modules can be used on both halves
- if no module is installed, the connector is covered with a neat blank
- each module is configured separately, and the active layer is shown by indicator lighting

## Keyboard setup
Please refer to the [Vial software article](/qmk/vial)

## RuEn mode
Please refer to the [RuEn layout](/zmk/zmk-ruen)

## Firmware update
### Preparation:
- Download the latest firmware version [here](http://github.com/ergohaven/keymap_hub)
- Save your layout in Vial by opening **File** and selecting **Save current layout**

### Installation
To reflash/update the firmware, the keyboard needs to be put into bootloader mode. You can do this in several ways, choose one:

1. **Bootmagic:**
    - ***Left half:*** hold the top-left key and connect the USB power cable to the left half
    - ***Right half:*** hold the top-right key and connect the USB power cable to the right half
    - Wait until the controller enters bootloader mode and the mass storage folder opens

2. **Using the RESET button:**
    - Connect the USB power cable and quickly press the RESET button twice on the bottom of the keyboard
    - Wait until the controller enters bootloader mode and the mass storage folder opens

3. **Using the BOOT button:**
    - Hold the BOOT button on the bottom of the keyboard and connect the USB power cable
    - Wait until the controller enters bootloader mode and the mass storage folder opens

- Copy or drag and drop the UF2 file, after which the controller should reboot immediately and start working in normal mode
- Import the layout into Vial by opening **File** and selecting **Load saved layout**

## Care and maintenance

- Periodically clean the case from dust and dirt with a dry or slightly damp cloth
- **For the trackball module:** keep the ball, ceramic bearings, and ball cavity clean

{{< callout type="info" >}}
To remove the ball, pull it in the opposite direction relative to the trackball base
{{< /callout >}}

{{< callout type="error" >}}
  Do not use aggressive cleaning agents (acetone, gasoline, solvents (646, white spirit), concentrated acids, or alkalis)!
{{< /callout >}}

{{< callout type="warning" >}}
  Do not allow liquid to enter the device!
{{< /callout >}}

## Support

The keyboard comes with a 3-year warranty and service support

If you have any questions about setup, firmware, or operation, please contact [the Ergohaven Telegram group](https://t.me/c/1464748383/8323) or [knowledge base](https://docs.ergohaven.xyz/en/)
