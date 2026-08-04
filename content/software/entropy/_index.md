---
title: Entropy
bookCollapseSection: true
layout_lightbox: true
next: installation
cascade:
  type: docs
---

Entropy — кроссплатформенное приложение Ergohaven для настройки программируемых клавиатур и других устройств ввода с прошивками Vial-QMK и Vial-RMK

{{< layout-lightbox src="/images/entropy/overview.png" alt="Интерфейс Entropy" width="900" >}}

Приложение объединяет редактор раскладки, настройку функций прошивки, тестирование устройства и дополнительные инструменты в одном интерфейсе

{{< cards cols="2" >}}
  {{< card link="installation" title="Установка" subtitle="Windows, Linux и macOS" >}}
  {{< card link="quick-start" title="Быстрый старт" subtitle="Подключение и навигация" >}}
  {{< card link="layouts" title="Раскладки и слои" subtitle="Назначение клавиш, импорт и экспорт" >}}
  {{< card link="features" title="Настройки и возможности" subtitle="Макросы, Combo, RGB и другие функции" >}}
  {{< card link="universal-symbols" title="Универсальные символы" subtitle="Одинаковая пунктуация в EN и RU" >}}
  {{< card link="troubleshooting" title="Решение проблем" subtitle="Подключение, доступ и диагностика" >}}
{{< /cards >}}

## Совместимость

Entropy работает с устройствами, которые предоставляют совместимый интерфейс Vial

- Vial-QMK и Vial-RMK
- Проводное подключение по USB
- Bluetooth-подключение совместимых Vial-RMK устройств
- Клавиатуры, макропады, трекболы, тачпады, энкодеры и модульные устройства
- Windows x86_64, Linux x86_64 и macOS на Apple Silicon или Intel

Набор доступных страниц зависит от возможностей прошивки: Entropy скрывает настройки, которые подключённое устройство не поддерживает

{{< callout type="info" >}}
Документация подготовлена для Entropy `v0.3.2-rc.1`
{{< /callout >}}

## Основные возможности

- Настройка клавиш, слоёв и энкодеров
- Макросы, Combo, Tap Dance и Key Overrides
- Auto Shift, Tap-Hold, One Shot, Mouse Keys, Magic и Grave Escape
- RGB, подсветка слоёв, дисплеи, модули и указательные устройства
- Импорт и экспорт `.entlayout`, экспорт PNG, SVG и PDF
- Matrix Tester и отдельное окно Layout Indicator
- Text Expander и тренажёр печати
- Live-интеграции с данными времени, громкости, медиа и раскладки ОС
- Универсальные символы для одинакового ввода пунктуации в английской и русской раскладках

Последние сборки доступны на странице [GitHub Releases](https://github.com/ergohaven/entropy/releases)
