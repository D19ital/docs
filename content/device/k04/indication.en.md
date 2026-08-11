---
title: LED indication
weight: 2
---

Each half of K:04, K:04 Mini, and K:04 Micro has an RGB indicator. Brightness and colors are configured in [Entropy](/software/entropy/). Set **LED brightness** to 0 to turn the indicators off

## Without Qube

Normally, the indicators show the color of the active layer 0–15. **LED timeout** applies to the base layer; set it to 0 to disable the timeout. Other layers stay lit while they are active

- **Switching BT profiles** — the indicator shows the selected profile color for one second. Defaults: BT0 — red, BT1 — blue, BT2 — yellow, BT3 — green, BT4 — purple
- **Cyan blinking** — the keyboard is ready to pair with a new device
- **White blinking** — the keyboard is reconnecting to a known device
- **Yellow blinking** — a half is searching for the other half
- **Green for one second** — the other half or the computer has connected
- **BT Battery key** — each half shows its own charge level for one second: 0–20% in red, 21–40% in orange, 41–74% in yellow, and 75–100% in green
- **Short red blink every two seconds** — the half has 20% charge or less and is not connected via USB-C
- **Charging via USB-C** — the indicator is yellow, then turns green at 95% or higher. A non-base layer color takes priority
- **Sleep mode** — the indicator turns off unless the half is connected via USB-C

After a temporary signal, the indicators return to the active layer color

## With Qube

Only the main signals are shown on the halves:

- **Active layer color**
- **Yellow blinking** — a half is searching for Qube
- **Green for one second** — a half has connected to Qube
- **Charging via USB-C** — the indicator is yellow, then turns green at 95% or higher. A non-base layer color takes priority
- **Sleep mode** — the indicator is off
- **Qube was not found** — the indicator turns off when the search ends

The **BT Battery** key refreshes battery levels on the Qube display. The LEDs on the halves do not show BT profiles, Bluetooth status, the battery-level color scale, or low-battery warnings. **LED timeout** is not used with Qube
