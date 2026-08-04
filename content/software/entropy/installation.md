---
title: Установка
weight: 1
prev: /software/entropy
next: quick-start
---

Скачайте Entropy на странице [GitHub Releases](https://github.com/ergohaven/entropy/releases) и выберите файл для своей операционной системы

| Операционная система | Файл |
| --- | --- |
| Windows x86_64 | `entropy-<версия>-windows-x86_64.exe` |
| Linux x86_64 | `entropy-<версия>-x86_64.AppImage` |
| macOS Apple Silicon | `entropy-<версия>-macos-arm64.dmg` |
| macOS Intel | `entropy-<версия>-macos-x86_64.dmg` |

{{< callout type="warning" >}}
Сборки Windows и macOS пока не подписаны, поэтому операционная система может показать предупреждение безопасности
{{< /callout >}}

{{< tabs items="Windows,Linux,macOS" >}}
  {{< tab >}}

1. Скачайте файл `windows-x86_64.exe`
2. Переместите его в удобную постоянную папку
3. Запустите файл
4. Если появился Microsoft Defender SmartScreen, нажмите **Подробнее**, затем **Выполнить в любом случае**

Entropy для Windows распространяется как переносимое приложение и не требует установки

Чтобы Live-интеграции и Text Expander продолжали работать после закрытия окна, включите **Настройки → Настройки приложения → Работать в фоне**

  {{< /tab >}}
  {{< tab >}}

1. Скачайте файл `x86_64.AppImage`
2. Разрешите его выполнение в свойствах файла или командой:

   ```bash
   chmod +x entropy-<версия>-x86_64.AppImage
   ```

3. Запустите AppImage

Если устройство не открывается, перейдите в **Настройки → Настройки приложения → Доступ к Vial** и нажмите **Установить rules**, затем переподключите устройство

Vial использует `hidraw`, поэтому правило udev необходимо для доступа к устройству без запуска Entropy от имени root

Для Text Expander на Linux дополнительно установите IBus и его Python-компоненты, например в Debian или Ubuntu:

```bash
sudo apt-get install ibus python3-gi gir1.2-ibus-1.0
```

После этого откройте **Дополнительно → Экспандер текста → Настройка бэкенда**, установите Entropy IBus и добавьте нужную раскладку **Entropy Text Expander** в источники ввода системы

  {{< /tab >}}
  {{< tab >}}

1. Выберите сборку `macos-arm64` для Apple Silicon или `macos-x86_64` для Intel
2. Откройте файл `.dmg`
3. Перетащите `Entropy.app` в папку `/Applications`
4. Откройте Terminal и снимите quarantine-флаг:

   ```bash
   xattr -dr com.apple.quarantine /Applications/Entropy.app
   ```

5. Запустите Entropy:

   ```bash
   open /Applications/Entropy.app
   ```

Для Text Expander разрешите Entropy доступ в **System Settings → Privacy & Security → Accessibility** и **Input Monitoring**

Если Entropy не видит Bluetooth-устройство, также проверьте разрешение **Input Monitoring**, полностью закройте приложение и запустите его снова

  {{< /tab >}}
{{< /tabs >}}

## Обновление

Откройте **Настройки → Об Entropy**, чтобы проверить наличие новой версии и перейти к её загрузке

Скачайте новый файл для своей платформы и замените предыдущую сборку, пользовательские настройки хранятся отдельно и сохраняются при обновлении

Перед крупным обновлением можно создать резервные копии через **Экспорт настроек** и **Раскладка → Экспорт раскладки**

## Удаление

- Windows: закройте Entropy и удалите файл `.exe`
- Linux: закройте Entropy и удалите AppImage
- macOS: переместите `Entropy.app` из `/Applications` в корзину

Пользовательские настройки и правила Text Expander удаляются отдельно из каталога конфигурации Entropy
