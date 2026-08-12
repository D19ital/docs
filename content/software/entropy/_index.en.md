---
title: Entropy
bookCollapseSection: true
layout_lightbox: true
next: installation
cascade:
  type: docs
---

Entropy is a cross-platform Ergohaven application for configuring programmable keyboards and other input devices running Vial-QMK or Vial-RMK firmware

{{< layout-lightbox src="/images/entropy/overview.png" alt="Entropy interface" width="900" >}}

The application combines layout editing, firmware configuration, device testing, and desktop tools in one interface

{{< cards cols="2" >}}
  {{< card link="installation" title="Installation" subtitle="Windows, Linux, and macOS" >}}
  {{< card link="quick-start" title="Quick start" subtitle="Connection and navigation" >}}
  {{< card link="layouts" title="Layouts and layers" subtitle="Key assignment, import, and export" >}}
  {{< card link="features" title="Settings and features" subtitle="Macros, Combos, RGB, and more" >}}
  {{< card link="universal-symbols" title="Universal Symbols" subtitle="Consistent punctuation in EN and RU" >}}
  {{< card link="troubleshooting" title="Troubleshooting" subtitle="Connection, access, and diagnostics" >}}
{{< /cards >}}

## Compatibility

Entropy works with devices that expose a compatible Vial interface

- Vial-QMK and Vial-RMK
- Wired USB connections
- Bluetooth connections for compatible Vial-RMK devices
- Keyboards, macropads, trackballs, touchpads, encoders, and modular input devices
- Windows x86_64, Linux x86_64, and macOS on Apple Silicon or Intel

The available pages depend on firmware capabilities: Entropy hides settings that the connected device does not support

## Main features

- Key, layer, and encoder configuration
- Macros, Combos, Tap Dance, and Key Overrides
- Auto Shift, Tap-Hold, One Shot, Mouse Keys, Magic, and Grave Escape
- RGB, Layer LEDs, displays, modules, and pointing devices
- `.entlayout` import and export with compatible firmware settings, plus PNG, SVG, and PDF export
- Matrix Tester and the separate Layout Indicator window
- Text Expander and Typing Trainer
- Live integrations for time, volume, media, and the operating-system layout
- Universal Symbols for consistent punctuation in English and Russian layouts
- Automatic firmware update checks for supported Ergohaven RMK devices

The latest builds are available on [GitHub Releases](https://github.com/ergohaven/entropy/releases)
