---
title: "Imperial44 – Wireless Edition"
sidebar:
  exclude: true
---

![image](/images/layouts/imperial44_ru.png)

Imperial44 Wireless Edition is a wireless, programmable mechanical split keyboard with a hot-swap system for quick replacement of MX-compatible switches and the option to install one hot-swap encoder on each half.

## Keyboard hardware

![image](/images/imperial_we/imperial_we.png)

1. RESET button
2. Integrated MagSafe ring for WPC
3. Silicone feet
4. Service cutout/window for disassembling the keyboard case
5. Keyboard power switch
6. Transparent panel
7. Slot for installing an MX switch or a hot-swap encoder
8. USB‑C port

## First connection

- The Imperial44 – Wireless Edition keyboard works with devices running Windows, macOS, Linux, Android, and iOS.
- The keyboard connects via Plug and Play (PnP); no additional driver installation is required.
- The keyboard ships ready to connect to your device with the firmware version current at the time of purchase.

{{% details title="Direct connection (without Ergohaven's Qube)" closed="true" %}}
1. **Turn on power on the left and right halves of the keyboard** — the halves are already synchronized with each other.
2. **Select a connection profile on the keyboard** — if you’re connecting to only one device for the first time, you can skip this step.
3. **Connect the keyboard to your device** — enable Bluetooth on the device, then complete pairing in the device settings.
{{% /details %}}

{{% details title="Connection via Ergohaven's Qube" closed="true" %}}
**Ergohaven's Qube** is a universal dongle for Ergohaven wireless keyboards that displays useful information and reduces the keyboard’s power consumption.

1. **Connect Ergohaven's Qube to your computer using a USB Type‑C cable** and wait for Qube to boot.
2. **Turn on power on the left half of the keyboard** — it will connect to Qube automatically.
3. **Turn on power on the right half** — it will also connect to Qube, completing the setup.
{{% /details %}}

## Keyboard configuration  
Please refer to the article [Keyboard configuration in ZMK keymap-editor](/zmk/keymap-editor).

## RuEn mode  
Please refer to the article [RuEn layout for wireless keyboards](/zmk/zmk-ruen).

## Firmware update

{{% details title="Firmware for a keyboard without Ergohaven's Qube" closed="true" %}}
- Download the [settings reset firmware](https://github.com/ergohaven/ergohaven-zmk/releases/download/2025.11.30/settings_reset-ergohaven-zmk.uf2) and the latest firmware for the [left](https://github.com/ergohaven/ergohaven-zmk/releases/download/2025.11.30/imperial44_left-ergohaven-zmk.uf2) and [right](https://github.com/ergohaven/ergohaven-zmk/releases/download/2025.11.30/imperial44_right-ergohaven-zmk.uf2) halves.

- Turn off both halves using the switch on the back of the keyboard.

1. Connect the USB power cable to the left half, then press the Reset button on the back of the keyboard twice.
2. Wait until the controller enters bootloader mode and a mass-storage drive opens (if autorun for removable drives is disabled on your device, open the drive manually).
3. Copy or drag-and-drop the UF2 file with the “settings reset” firmware; the controller should reboot immediately.  
> The reset firmware is used to wipe the keyboard’s internal memory. It resets connection profiles and half synchronization settings.
4. Press the Reset button on the back of the keyboard twice again and wait until the controller enters bootloader mode (the mass-storage drive opens).
5. Copy or drag-and-drop the UF2 firmware file for the left half; the controller should reboot immediately.

- Repeat steps 1–5 for the right half.

- Turn on both halves using the switch on the back of the keyboard.
- Press and release the Reset buttons on both halves at the same time — this will synchronize the halves with each other.
- Connect the keyboard to your device.
{{% /details %}}

{{% details title="Firmware for a keyboard with Ergohaven's Qube" closed="true" %}}
- Download the [settings reset firmware](https://github.com/ergohaven/ergohaven-zmk/releases/download/2025.11.30/settings_reset-ergohaven-zmk.uf2) and the latest firmware for [Qube](https://github.com/ergohaven/ergohaven-zmk/releases/download/2025.11.30/imperial44_qube-ergohaven-zmk.uf2), the [left half](https://github.com/ergohaven/ergohaven-zmk/releases/download/2025.11.30/imperial44_left_qube-ergohaven-zmk.uf2), and the [right half](https://github.com/ergohaven/ergohaven-zmk/releases/download/2025.11.30/imperial44_right-ergohaven-zmk.uf2).

- Turn off both halves using the switch on the back of the keyboard.

- Connect the USB power cable to Qube, then press the Reset button on the back of Qube twice.
- Wait until the controller enters bootloader mode and a mass-storage drive opens (if autorun for removable drives is disabled on your device, open the drive manually).
- Copy or drag-and-drop the UF2 file with the “settings reset” firmware; the controller should reboot immediately.  
> The reset firmware is used to wipe Qube’s and the keyboard’s internal memory. It resets half-to-half synchronization and Qube pairing settings.
- Press the Reset button on the back of Qube twice again and wait until the controller enters bootloader mode (the mass-storage drive opens).
- Copy or drag-and-drop the UF2 firmware file for Qube; the controller should reboot immediately.

1. Connect the USB power cable to the left half, then press the Reset button on the back of the keyboard twice.
2. Wait until the controller enters bootloader mode and a mass-storage drive opens (if autorun for removable drives is disabled on your device, open the drive manually).
3. Copy or drag-and-drop the UF2 file with the “settings reset” firmware; the controller should reboot immediately.
4. Press the Reset button on the back of the keyboard twice again and wait until the controller enters bootloader mode (the mass-storage drive opens).
5. Copy or drag-and-drop the UF2 firmware file for the left half; the controller should reboot immediately.

- Repeat steps 1–5 for the right half.

1. Connect Qube to your device and wait for Qube to boot.
2. Turn on the left half using the switch on the back of the keyboard and wait for it to sync with Qube.  
> It is important to follow the left-then-right connection order when pairing to Qube, because Qube synchronizes sequentially: first with the left half, then with the right half.
3. Turn on the right half using the switch on the back of the keyboard and wait for it to sync with Qube.
{{% /details %}}

