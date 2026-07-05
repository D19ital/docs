---
title: "Macropad"
sidebar:
  exclude: true
---

![image](/images/layouts/macropad_ru.png)  

Macropad is a wired, programmable mechanical macropad with an encoder and a hot-swap system for quick replacement of MX-compatible switches.

## Macropad hardware

{{% details title="Macropad v3" closed="true" %}}
![image](/images/macropad/macropad_v3.png)
1. RESET button
2. BOOT button
3. Silicone feet
4. Service cutout/window for disassembling the macropad case
5. USB‑C port
6. 240×280 IPS display
7. Encoder
{{% /details %}}

{{% details title="Macropad v2" closed="true" %}}
![image](/images/macropad/macropad_v2.png)
1. BOOT button
2. RESET button
3. Silicone feet
4. Service cutout/window for disassembling the macropad case
5. USB‑C port
6. 240×280 IPS display
7. Encoder
{{% /details %}}

## Connection
- The macropad works with devices running Windows, macOS, Linux, Android, and iOS.
- The macropad connects via Plug and Play (PnP); no additional driver installation is required.
- When connecting to a device, make sure the USB‑C cable is firmly inserted into the macropad’s port.

## Macropad setup  
Please refer to the [Vial software article](/qmk/vial).

{{% details title="Macropad v3 — RGB lighting setup in Vial" closed="true" %}}
In **Vial**, you can customize key lighting in the **Lighting** tab by changing the effect, color, brightness, and animation speed.  
>**Macropad v1 and v2 do not have RGB lighting!**
![image](/images/macropad/macropad_v3_rgb.gif)
- **RGB Effect** - choose different animations or a static color
- **RGB Color** - set the backlight color
- **RGB Brightness** - adjust backlight brightness
- **RGB Speed** - adjust animation speed
After setting all RGB parameters, click "Save" in the bottom-right corner of Vial to apply and save the changes.
{{% /details %}}


## Firmware update
{{< callout type="warning" >}}
The firmware version must match your macropad version, otherwise the macropad may work incorrectly.
{{< /callout >}}

### Preparation  
* Download the latest firmware for your macropad version [here](https://github.com/ergohaven/keymap_hub).
* Save your layout in Vial: "File" > "Save current layout".

### Installation
To reflash/update the macropad firmware, you need to put it into bootloader mode. You can do this in several ways (choose one):  
1. **Bootmagic:**
    - Hold the top-left key (key 9 in the default layout) and connect the USB power cable.
    - Wait until the controller enters bootloader mode and a mass-storage drive opens.

2. **Using the RESET button:**
    - Connect the USB power cable and quickly press the RESET button twice on the bottom of the macropad.
    - Wait until the controller enters bootloader mode and a mass-storage drive opens.

3. **Using the BOOT button:**
    - Hold the BOOT button on the bottom of the macropad and connect the USB power cable.
    - Wait until the controller enters bootloader mode and a mass-storage drive opens.

- Copy or drag-and-drop the UF2 file; the controller should reboot immediately and start working in normal mode.
- Import your layout into Vial: "File" > "Load saved layout".

