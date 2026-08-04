---
title: Installation
weight: 1
layout_lightbox: true
prev: /software/entropy
next: quick-start
---

Download Entropy from [GitHub Releases](https://github.com/ergohaven/entropy/releases) and select the file for your operating system

| Operating system | File |
| --- | --- |
| Windows x86_64 | `entropy-<version>-windows-x86_64.exe` |
| Linux x86_64 | `entropy-<version>-x86_64.AppImage` |
| macOS Apple Silicon | `entropy-<version>-macos-arm64.dmg` |
| macOS Intel | `entropy-<version>-macos-x86_64.dmg` |

{{< callout type="warning" >}}
Windows and macOS builds are currently unsigned, so the operating system may display a security warning
{{< /callout >}}

{{< tabs items="Windows,Linux,macOS" >}}
  {{< tab >}}

1. Download the `windows-x86_64.exe` file
2. Move it to a permanent folder of your choice
3. Run the file
4. If Microsoft Defender SmartScreen appears, click **More info**, then **Run anyway**

Entropy for Windows is distributed as a portable application and does not require installation

To keep Live Features and Text Expander active after closing the window, enable **Config → App settings → Run in background**

  {{< /tab >}}
  {{< tab >}}

1. Download the `x86_64.AppImage` file
2. Allow the file to run in its properties or with this command:

   ```bash
   chmod +x entropy-<version>-x86_64.AppImage
   ```

3. Run the AppImage

If Entropy cannot open the device, go to **Config → App settings → Vial access**, click **Install rules**, and reconnect the device

Vial uses `hidraw`, so a udev rule is required to access the device without running Entropy as root

For Text Expander on Linux, also install IBus and its Python components, for example on Debian or Ubuntu:

```bash
sudo apt-get install ibus python3-gi gir1.2-ibus-1.0
```

Then open **Advanced → Text Expander → Backend setup**, install Entropy IBus, and add the required **Entropy Text Expander** layout to the system input sources

  {{< /tab >}}
  {{< tab >}}

1. Choose `macos-arm64` for Apple Silicon or `macos-x86_64` for Intel
2. Open the `.dmg` file
3. Drag `Entropy.app` to `/Applications`
4. Open Terminal and remove the quarantine flag:

   ```bash
   xattr -dr com.apple.quarantine /Applications/Entropy.app
   ```

5. Launch Entropy:

   ```bash
   open /Applications/Entropy.app
   ```

For Text Expander, allow Entropy in **System Settings → Privacy & Security → Accessibility** and **Input Monitoring**

If Entropy cannot see a Bluetooth device, also check **Input Monitoring**, fully quit the application, and launch it again

  {{< /tab >}}
{{< /tabs >}}

## Updating

Open **Config → About Entropy** to check for a new version and open its download page

{{< layout-lightbox src="/images/entropy/settings-about.png" alt="About Entropy page" width="900" >}}

Download the new file for your platform and replace the previous build, user settings are stored separately and remain available after an update

Before a major update, create backups with **Export settings** and **Layout → Export layout**

## Uninstalling

- Windows: quit Entropy and delete the `.exe` file
- Linux: quit Entropy and delete the AppImage
- macOS: move `Entropy.app` from `/Applications` to Trash

User settings and Text Expander rules are removed separately from the Entropy configuration directory
