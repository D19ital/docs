---
title: "K:03 – Wireless Edition"
sidebar:
  exclude: true
---

![image](/images/layouts/K03WE_en.png)

**K:03 – Wireless Edition** is a wireless, ergonomic, mechanical split keyboard with a hot-swap system for quick replacement of MX-compatible switches and the ability to install up to 3 hot-swap encoders on each half.

## Overview

![image](/images/k03_we/k03_we_en.png)

1. Button: single press — reset, double press (quickly) — bootloader
2. Integrated MagSafe ring for wireless charging
3. Silicone feet
4. Auxiliary window for disassembling the keyboard case
5. Keyboard power switch
6. Transparent panel
7. Slot for MX switch or hot-swap encoder
8. USB-C connector

## Connection

- K:03 – Wireless Edition works with devices running Windows, macOS, Linux, Android, iOS
- The keyboard connects via Plug and Play (PnP) — no additional driver installation required
- The keyboard comes ready to connect to your device with the firmware current at the time of purchase

{{% details title="Wired connection" closed="true" %}}

The keyboard supports wired connection via USB-C connector. Use the included cable or any other USB-C cable with data transfer support.
{{< callout type="info" >}}
  The **left half** of K:03 – Wireless Edition is the **master** and is intended for wired connection.
{{< /callout >}}
{{% /details %}}

{{% details title="Wireless connection (without Ergohaven's Qube)" closed="true" %}}
1. **Turn on both halves of the keyboard** — the halves are already synchronized with each other
2. **Select a connection profile on the keyboard** — if you need to connect to multiple devices, you can skip this step for the first connection
3. **Connect the keyboard to your device** — enable Bluetooth on the device, then pair it in the device settings
{{% /details %}}


{{% details title="Connection via Ergohaven's Qube" closed="true" %}}
**Ergohaven's Qube** is a universal dongle for Ergohaven wireless keyboards that displays useful information and reduces keyboard power consumption.

1.  **Connect Ergohaven's Qube to your computer using a Type-C cable** and wait for the Qube to boot
2.  **Turn on the left half of the keyboard** — it will automatically connect to the Qube
3.  **Turn on the right half** — it will also connect to the Qube, completing the setup
{{% /details %}}

{{% details title="Connecting additional devices" closed="true" %}}

1. Enable Bluetooth on the device you want to connect the keyboard to
2. Turn on the keyboard by switching the power switches on the bottom covers of both halves to the *ON* position — the keyboard will enter pairing mode
3. Switch the BT profile on the keyboard using the corresponding keys (layer 3 in the default layout)
4. Start a Bluetooth search on your device and find the keyboard in the list
5. Connect the keyboard to your device
{{< callout type="info" >}}
   [Adding wireless connection to devices via Qube](https://docs.eh.industries/device/archive/qube/)
{{< /callout >}}
{{% /details %}}

## Charging and Battery Monitoring

Refer to the corresponding section of the article [First Steps with a ZMK Keyboard](https://docs.eh.industries/software/zmk/zmk-keyboards/)
{{< callout type="warning" >}}
  To charge the keyboard battery, the power switch on the bottom of the half must be in the **On** position.
{{< /callout >}}

## Configuration
Refer to the article [Keyboard Configuration in ZMK keymap-editor](/software/zmk/keymap-editor)

## Ruen Mode
Refer to the article [RuEn Layout for Wireless Keyboards](/software/zmk/zmk-ruen)

## Firmware

Firmware update is required when:
- A new firmware version has been released on [keymap_hub](https://github.com/ergohaven/keymap_hub)
- You need to restore the keyboard to factory settings
- You are using custom firmware settings via a [fork](https://docs.eh.industries/software/zmk/fork-sync/)

{{% steps %}}

### Preparing for Firmware Update

Download the latest firmware files *settings_reset* and *K:03 v4* for the left and right halves from [keymap_hub](https://github.com/ergohaven/keymap_hub)

### Settings Reset Firmware

Connect the left half of the keyboard to your computer (PC, laptop, etc.) using a USB-C cable, then double-press the *Reset* button on the back of the keyboard.

{{< callout type="info" >}}
  The keyboard will enter bootloader mode and a storage folder will open (if auto-run for connected drives is disabled on your device, navigate to the storage folder manually).
{{< /callout >}}

Copy or drag the *settings_reset* Uf2 file — the keyboard should reboot automatically.

{{< callout type="info" >}}
  The settings_reset firmware is used to wipe the keyboard's internal memory. It resets connection profiles and half-synchronization settings.
{{< /callout >}}

{{< callout type="important" >}}
  Repeat the same steps for the right half.
{{< /callout >}}


### Completing the Firmware Update

Double-press the *Reset* button on the back of the left half again and wait for it to enter bootloader mode (the storage folder will open).

Copy or drag the *K:03 v4* Uf2 firmware file for the left half — it should reboot automatically.
{{< callout type="info" >}}
  If a copy error dialog appears during firmware upload, simply ignore it.
{{< /callout >}}

{{< callout type="important" >}}
  Repeat the same steps for the **right** half, but use the *K:03 v4* Uf2 firmware file for the **right** half.
{{< /callout >}}

{{% /steps %}}

Firmware update is complete — you can now connect the keyboard to your device!

### Firmware Update via [Ergohaven's Qube](https://docs.eh.industries/device/archive/qube/)

## Care and Maintenance

- Periodically clean the case from dust and dirt using a dry or slightly damp cloth.

{{< callout type="error" >}}
  Do not use aggressive cleaning agents (alcohol, acetone, gasoline, solvents, concentrated acids or alkalis)!
{{< /callout >}}

{{< callout type="warning" >}}
  Do not allow liquid to get inside the device!
{{< /callout >}}

## Support

The keyboard comes with a *3-year warranty and service support*.

If you have any questions about setup, firmware, or operation, please contact [the Ergohaven Telegram group](https://t.me/c/1464748383/8323) or [knowledge base](https://docs.eh.industries/)
