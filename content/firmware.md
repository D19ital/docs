---
title: Прошивки
---

Актуальные прошивки для устройств ввода Ergohaven

{{< callout type="info" >}}
  Инструкцию по прошивке для вашего устройства смотрите в соответсвующей документации к вашему устройству
{{< /callout >}}

## RMK (беспроводные устройства)
| Устройство   | Стандартная раскладка                          |
| ------------ | ---------------------------------------------- |
| K:04         | [левая][r01] [правая][r02]                     |
| K:04 Mini    | [левая][r03] [правая][r04]                     |
| K:04 Micro   | [левая][r05] [правая][r06]                     |
| Trackball    | [mini v3.1][r41] [royale][r42]                 |

{{< details title="Предыдущие релизы" closed="true" >}}

| Устройство   | Стандартная раскладка                          |
| ------------ | ---------------------------------------------- |
| K:03 v4      | [левая][r80] [правая][r82]                     |
| Imperial44   | [левая][r90] [правая][r92]                     |
| OP36         | [левая][r50] [правая][r52]                     |
| Velvet v3    | [левая][r60] [правая][r62]                     |
| Velvet v3 UI | [левая][r70] [правая][r71]                     |
| Trackball    | [mini v3.0][r40]                               |

{{< /details >}}

[Прошивка сброса настроек для RMK устройств][r00]

[r00]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/rmk_settings_reset.uf2

[r01]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_k04_left.uf2
[r02]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_k04_right.uf2
[r03]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_k04_mini_left.uf2
[r04]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_k04_mini_right.uf2
[r05]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_k04_micro_left.uf2
[r06]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_k04_micro_right.uf2

[r40]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_trackball_mini_v3.0.uf2
[r41]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_trackball_mini_v3.1.uf2
[r42]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_trackball_royale.uf2

[r50]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_op36_left.uf2
[r52]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_op36_right.uf2

[r60]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_velvet_left.uf2
[r62]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_velvet_right.uf2

[r70]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_velvet_ui_left.uf2
[r71]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_velvet_ui_right.uf2

[r80]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_k03_left.uf2
[r82]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_k03_right.uf2

[r90]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_imperial44_left.uf2
[r92]: https://github.com/ergohaven/rmk-eh/releases/download/v0.1.1/0.1.1_imperial44_right.uf2

{{< cards >}}
  {{< card link="https://github.com/ergohaven/rmk-eh" title="RMK Source code" icon="" >}}
{{< /cards >}}

## QMK (проводные устройства)
| Актуальные модели                 |
| --------------------------------- |
| [Phenom][q29]                     |
| [Phenom Mini][q30]                |
| [Phenom Micro][q31]               |
| [M4CR0Pad v3][q27]                |
| [SM30][q28]                       |

{{< details title="Предыдущие релизы" closed="true" >}}

| Предыдущие ревизии                                  | Актуальные ревизии               |
| --------------------------------------------------- | --------------------------------- |
| [K:03 v1/v2][q05]                                   | [K:03 v3/v4][q19]                 |
| [Imperial44 v1/v2][q06]                             | [Imperial44 v3/v4][q24]           |
| [Planeta v1][q08]                                   | [Planeta v2][q09]                 |
| [M4CR0Pad v1][q10]</br>[M4CR0Pad v2][q11]           |                                   |
| [Velvet v1][q13]</br>[Velvet v2][q14]               | [Velvet v3][q17]                  |
| [Trackball v1][q15]                                 | [Trackball v2][q20]               |
| [K:03 PRO v1 43mm][q16]</br>[K:03 PRO v1 65mm][q18] | [K:03 PRO v2/v3][q25]             |
| [HPD v1][q04]                                       | [HPD v2 (no modules)][q21]        |
|                                                     | [HPD v2 (encoder/trackball)][q22] |
|                                                     | [HPD v2 (encoder/touch)][q23]     |
|                                                     | [HPD v2 (encoder/joystick)][q26]  |
| [K:02][q07]                                         |                                   |
| [Remnant][q12]                                      |                                   |

{{< /details >}}

[q04]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_hpd_v1.uf2
[q05]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_k03_v1_v2.uf2
[q06]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_imperial44_v1_v2.uf2
[q07]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_k02_v1.uf2
[q08]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_planeta_v1.uf2
[q09]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_planeta_v2.uf2
[q10]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_macropad_v1.uf2
[q11]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_macropad_v2.uf2
[q12]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_remnant_v1.uf2
[q13]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_velvet_v1.uf2
[q14]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_velvet_v2.uf2
[q15]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_trackball_v1.uf2
[q16]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_k03pro_43mm_v1.uf2
[q17]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_velvet_v3.uf2
[q18]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_k03pro_65mm_v1.uf2
[q19]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_k03_v3_v4.uf2
[q20]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_trackball_v2.uf2
[q21]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_hpd_v2.uf2
[q22]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_hpd_v2_enc_ball.uf2
[q23]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_hpd_v2_enc_touch.uf2
[q24]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_imperial44_v3_v4.uf2
[q25]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_k03pro_v2_v3.uf2
[q26]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_hpd_v2_enc_joy.uf2
[q27]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_macropad_v3.uf2
[q28]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_sm30_v1.uf2
[q29]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_phenom_v1.uf2
[q30]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_phenom_mini_v1.uf2
[q31]: https://github.com/ergohaven/vial-qmk/releases/download/4.0.5/4.0.5_phenom_micro_v1.uf2

{{< cards >}}
  {{< card link="https://github.com/ergohaven/vial-qmk" title="QMK Source code" icon="" >}}
{{< /cards >}}

{{< details title="ZMK (беспроводные)" closed="true" >}}

| Устройство          | Стандартная раскладка                          | RuEn раскладка                       |
| ------------------- | ---------------------------------------------- | ------------------------------------ |
| K:03 v4             | [левая][z80] [правая][z82]                     | [левая][z81] [правая][z82]             |
| K:03 v4 + Qube      | [левая][z83] [правая][z82] [qube][z84]         | [левая][z83] [правая][z82] [qube][z85] |
| Imperial44          | [левая][z90] [правая][z92]                     | [левая][z91] [правая][z92]             |
| Imperial44 + Qube   | [левая][z93] [правая][z92] [qube][z94]         | [левая][z93] [правая][z92] [qube][z95] |
| OP36                | [левая][z50] [правая][z52]                     | [левая][z51] [правая][z52]             |
| OP36 + Qube         | [левая][z53] [правая][z52] [qube][z54]         | [левая][z53] [правая][z52] [qube][z55] |
| Velvet v3           | [левая][z60] [правая][z62]                     | [левая][z61] [правая][z62]             |
| Velvet v3 + Qube    | [левая][z63] [правая][z62] [qube][z64]         | [левая][z63] [правая][z62] [qube][z65] |
| Velvet v3 UI        | [левая][z70] [правая][z71]                     | [левая][z70] [правая][z72]             |
| Velvet v3 UI + Qube | [левая][z70] [правая][z73] [qube][z74]         | [левая][z70] [правая][z73] [qube][z75] |
| Trackball           | [mini v3.0][z40] [mini v3.1][z41] [royale][z42] |                                      |


[Прошивка сброса настроек для ZMK устройств][z00]

[z00]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/settings_reset-ergohaven-zmk.uf2

[z40]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/trackball_v3.0-ergohaven-zmk.uf2
[z41]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/trackball_v3.1-ergohaven-zmk.uf2
[z42]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/trackball_royal-ergohaven-zmk.uf2

[z50]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/op36_left-ergohaven-zmk.uf2
[z51]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/op36_left_ruen-ergohaven-zmk.uf2
[z52]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/op36_right-ergohaven-zmk.uf2
[z53]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/op36_left_qube-ergohaven-zmk.uf2
[z54]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/op36_qube-ergohaven-zmk.uf2
[z55]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/op36_qube_ruen-ergohaven-zmk.uf2

[z60]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_left-ergohaven-zmk.uf2
[z61]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_left_ruen-ergohaven-zmk.uf2
[z62]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_right-ergohaven-zmk.uf2
[z63]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_left_qube-ergohaven-zmk.uf2
[z64]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_qube-ergohaven-zmk.uf2
[z65]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_qube_ruen-ergohaven-zmk.uf2

[z70]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_ui_left-ergohaven-zmk.uf2
[z71]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_ui_right-ergohaven-zmk.uf2
[z72]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_ui_right_ruen-ergohaven-zmk.uf2
[z73]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_ui_right_qube-ergohaven-zmk.uf2
[z74]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_ui_qube-ergohaven-zmk.uf2
[z75]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/velvet_v3_ui_qube_ruen-ergohaven-zmk.uf2

[z80]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/k03_left-ergohaven-zmk.uf2
[z81]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/k03_left_ruen-ergohaven-zmk.uf2
[z82]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/k03_right-ergohaven-zmk.uf2
[z83]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/k03_left_qube-ergohaven-zmk.uf2
[z84]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/k03_qube-ergohaven-zmk.uf2
[z85]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/k03_qube_ruen-ergohaven-zmk.uf2

[z90]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/imperial44_left-ergohaven-zmk.uf2
[z90]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/imperial44_left-ergohaven-zmk.uf2
[z91]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/imperial44_left_ruen-ergohaven-zmk.uf2
[z92]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/imperial44_right-ergohaven-zmk.uf2
[z93]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/imperial44_left_qube-ergohaven-zmk.uf2
[z94]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/imperial44_qube-ergohaven-zmk.uf2
[z95]: https://github.com/ergohaven/ergohaven-zmk/releases/download/2026.03.16/imperial44_qube_ruen-ergohaven-zmk.uf2

{{< cards >}}
  {{< card link="https://github.com/ergohaven/ergohaven-zmk" title="ZMK Source code" icon="" >}}
{{< /cards >}}

{{< /details >}}
