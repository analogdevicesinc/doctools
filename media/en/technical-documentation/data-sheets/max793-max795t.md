<!-- lastmod 2022-08-04 -->
<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

## General Description

The MAX793/MAX794/MAX795 microprocessor (µP) supervisory circuits monitor and control the activities of +3.0V/+3.3V µPs by providing backup-battery switchover, among other features such as low-line indication, µP reset, write protection for CMOS RAM, and a watchdog (see the Selector Guide below). The backup-battery voltage can exceed VCC, permitting the use of 3.6V lithium batteries in systems using 3.0V to 3.3V for VCC.

The MAX793/MAX795 offer a choice of reset threshold voltage range (denoted by suffix letter): 3.00V to 3.15V (T),  2.85V to 3.00V (S), and 2.55V to 2.70V (R). The MAX794's reset threshold is set externally with a resistor divider. The MAX793/MAX794 are available in 16-pin DIP and narrow SO packages, and the MAX795 comes in 8-pin DIP and SO packages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Selector Guide

| FEATURE                       | MAX793    | MAX794    | MAX795   |
|-------------------------------|-----------|-----------|----------|
| Active-Low Reset              | ✔         | ✔         | ✔        |
| Active-High Reset             | ✔         | ✔         |          |
| Programmable Reset Threshold  |           | ✔         |          |
| Low-Line Early Warning Output | ✔         | ✔         |          |
| Backup-Battery Switchover     | ✔         | ✔         | ✔        |
| External Switch Driver        | ✔         | ✔         | ✔        |
| Power-Fail Comparator         | ✔         | ✔         |          |
| Battery OK Output             | ✔         |           |          |
| Watchdog Input                | ✔         | ✔         |          |
| Battery Freshness Seal        | ✔         | ✔         |          |
| Manual Reset Input            | ✔         | ✔         |          |
| Chip-Enable Gating            | ✔         | ✔         | ✔        |
| Pin-Package                   | 16-DIP/SO | 16-DIP/SO | 8-DIP/SO |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Battery-Powered Computers and Controllers

Embedded Controllers Intelligent Controllers Critical µP Power Monitoring

Portable Equipment

Pin Configurations appear at end of data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

## MAX793/MAX794/MAX795

- ♦ Precision Supply-Voltage Monitor: Fixed Reset Trip Voltage (MAX793/MAX795) Adjustable Reset Trip Voltage (MAX794)
- ♦ Guaranteed Reset Assertion to VCC = 1V
- ♦ Backup-Battery Power Switching-Battery Voltage Can Exceed VCC
- ♦ On-Board Gating of Chip-Enable Signals-7ns Max Propagation Delay

## MAX793/MAX794 Only

- ♦ Battery Freshness Seal
- ♦ Battery OK Output (MAX793)
- ♦ Uncommitted Voltage Monitor for Power-Fail or Low-Battery Warning
- ♦ Independent Watchdog Timer (1.6s timeout)
- ♦ Manual Reset Input

## Ordering Information

| PART*       | TEMP RANGE   | PIN- PACKAGE   |
|-------------|--------------|----------------|
| MAX793 _CPE | 0°C to +70°C | 16 Plastic DIP |
| MAX793_CSE  | 0°C to +70°C | 16 Narrow SO   |

## Ordering Information continued at end of data sheet.

*The MAX793/MAX795 offer a choice of reset threshold voltage. Select the letter corresponding to the desired reset threshold voltage range (T = 3.00V to 3.15V,  S = 2.85V to 3.00V, R = 2.55V to 2.70V) and insert it into the blank to complete the part number.  The MAX794's reset threshold is adjustable.

Devices are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering.

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

## ABSOLUTE MAXIMUM RATINGS

Terminal Voltage (with respect to GND)

VCC......................................................................-0.3V to +6.0V

VBATT...................................................................-0.3V to +6.0V

All Other Inputs ..................-0.3V to the higher of VCC or VBATT

Continuous Input Current

VCC .................................................................................200mA

VBATT ................................................................................50mA

GND..................................................................................20mA

Output Current

VOUT................................................................................200mA

All Other Outputs ..............................................................20mA

Continuous Power Dissipation (TA = +70°C)

8-Pin Plastic DIP (derate 9.09mW/°C above +70°C) .....727mW 8-Pin SO (derate 5.88mW/°C above +70°C)..................471mW 16-Pin Plastic DIP (derate 10.53mW/°C above +70°C) .842mW 16-Pin Narrow SO (derate 9.52mW/°C above +70°C) ...696mW

- [ ] Operating Temperature Ranges

MAX793\_C\_ \_/MAX794C\_ \_/MAX795\_C\_ \_......... 0°C to +70°C

MAX793\_E\_ \_/MAX794E\_ \_/MAX795\_E\_ \_........-40°C to +85°C

Storage Temperature Range.............................-65°C to +160°C

Lead Temperature (soldering, 10s) .................................+300°C

Soldering Temperature (reflow) .......................................+260°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = 3.17V to 5.5V for the MAX793T/MAX795T, VCC = 3.02V to 5.5V for the MAX793S/MAX795S, VCC = 2.72V to 5.5V for the MAX793R/MAX794/MAX795R, VBATT = 3.6V, TA = TMIN to TMAX, unless otherwise noted.  Typical values are at TA = +25°C.)

| PARAMETER                                                     | SYMBOL        | CONDITIONS                                                                     | CONDITIONS                                                                     | MIN          | TYP            |   MAX | UNITS   |
|---------------------------------------------------------------|---------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------|----------------|-------|---------|
| Operating Voltage Range, V CC , V BATT (Note 1)               |               | MAX79_C                                                                        | MAX79_C                                                                        | 1.0          | 1.0            |   5.5 | V       |
| Operating Voltage Range, V CC , V BATT (Note 1)               |               | MAX79_E                                                                        | MAX79_E                                                                        | 1.1          | 1.1            |   5.5 | V       |
| V CC Supply Current (excluding I OUT , I CE OUT )             | I SUPPLY      | MAX793/MAX794, MR = V CC                                                       | V CC < 3.6V                                                                    |              | 46             |    60 | µA µA   |
| V CC Supply Current (excluding I OUT , I CE OUT )             | I SUPPLY      | MAX793/MAX794, MR = V CC                                                       | V CC < 5.5V                                                                    |              | 62             |    80 | µA µA   |
| V CC Supply Current (excluding I OUT , I CE OUT )             | I SUPPLY      | MAX795                                                                         | V CC < 3.6V                                                                    |              | 35             |    50 | µA µA   |
| V CC Supply Current (excluding I OUT , I CE OUT )             | I SUPPLY      | MAX795                                                                         | V CC < 5.5V                                                                    |              | 49             |    70 | µA µA   |
| V CC Supply Current in Battery-Backup Mode (excluding I OUT ) | I SUPPLY      | V CC = 2.1V, V BATT = 2.3V                                                     | MAX793/MAX794                                                                  |              | 32             |    45 | µA      |
| V CC Supply Current in Battery-Backup Mode (excluding I OUT ) | I SUPPLY      | V CC = 2.1V, V BATT = 2.3V                                                     | MAX795                                                                         |              | 24             |    35 | µA      |
| BATT Supply Current (excluding I OUT ) (Note 2)               |               |                                                                                |                                                                                |              |                |     1 | µA      |
| BATT Leakage Current, Freshness Seal Enabled                  |               | V CC = 0V, V OUT = 0V                                                          | V CC = 0V, V OUT = 0V                                                          |              |                |     1 | µA      |
| Battery Leakage Current (Note 3)                              |               |                                                                                |                                                                                |              |                |   0.5 | µA      |
| OUT Output Voltage in Normal Mode                             | V OUT         | I OUT = 75mA                                                                   | I OUT = 75mA                                                                   | V CC - 0.3   | V CC - 0.125   |       | V       |
| OUT Output Voltage in Normal Mode                             | V OUT         | I OUT = 30mA (Note 4)                                                          | I OUT = 30mA (Note 4)                                                          | V CC - 0.12  | V CC - 0.050   |       | V       |
| OUT Output Voltage in Normal Mode                             | V OUT         | I OUT = 250µA (Note 4)                                                         | I OUT = 250µA (Note 4)                                                         | V CC - 0.001 | V CC - 0.5mV   |       | V       |
| OUT Output Voltage in Battery-Backup Mode                     | V OUT         | V BATT = 2.3V                                                                  | I OUT = 250µA                                                                  | V BATT - 0.1 | V BATT - 0.034 |       | V       |
| OUT Output Voltage in Battery-Backup Mode                     | V OUT         | V BATT = 2.3V                                                                  | I OUT = 1mA                                                                    |              | V BATT - 0.14  |       | V       |
| Battery Switch Threshold (V CC falling)                       | V CC - V BATT | V SW > V CC > 1.75V (Note 5)                                                   | V SW > V CC > 1.75V (Note 5)                                                   |              | 20             |    65 | mV      |
| Battery Switch Threshold (V CC falling)                       | V SW          | V BATT > V CC (Note 6)                                                         | MAX793T/MAX795T                                                                | 2.69         | 2.82           |  2.95 | V       |
| Battery Switch Threshold (V CC falling)                       | V SW          | V BATT > V CC (Note 6)                                                         | MAX793S/MAX795S                                                                | 2.55         | 2.68           |  2.80 | V       |
| Battery Switch Threshold (V CC falling)                       | V SW          | V BATT > V CC (Note 6)                                                         | MAX793R/MAX795R/ MAX794                                                        | 2.30         | 2.41           |  2.52 | V       |
| Battery Switch Threshold (V CC rising) (Note 7)               | V CC - V BATT | This value is identical to the reset threshold, V CC rising for V BATT > V RST | This value is identical to the reset threshold, V CC rising for V BATT > V RST |              |                |       |         |
| Battery Switch Threshold (V CC rising) (Note 7)               | V CC - V BATT | V BATT < V RST                                                                 | V BATT < V RST                                                                 |              | 25             |    65 | mV      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = 3.17V to 5.5V for the MAX793T/MAX795T, VCC = 3.02V to 5.5V for the MAX793S/MAX795S, VCC = 2.72V to 5.5V for the MAX793R/MAX794/MAX795R, VBATT = 3.6V, TA = TMIN to TMAX, unless otherwise noted.  Typical values are at TA = +25°C.)

| PARAMETER                                             | SYMBOL                  | CONDITIONS                                                                                     |                         | MIN                     | TYP                     | MAX                     | UNITS                   |
|-------------------------------------------------------|-------------------------|------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| Reset Threshold (Note 8)                              | V RST                   | V CC falling                                                                                   | MAX793T/MAX795T         | 3.00                    | 3.075                   | 3.15                    | V                       |
|                                                       |                         | V CC falling                                                                                   | MAX793S/MAX795S         | 2.85                    | 2.925                   | 3.00                    | V                       |
|                                                       |                         | V CC falling                                                                                   | MAX793R/MAX795R         | 2.55                    | 2.625                   | 2.70                    | V                       |
|                                                       |                         | V CC rising                                                                                    | MAX793T/MAX795T         | 3.00                    | 3.085                   | 3.17                    | V                       |
|                                                       |                         | V CC rising                                                                                    | MAX793S/MAX795S         | 2.85                    | 2.935                   | 3.02                    | V                       |
|                                                       |                         | V CC rising                                                                                    | MAX793R/MAX795R         | 2.55                    | 2.635                   | 2.72                    | V                       |
| RESET IN Threshold (MAX794 only)                      | V RST IN                | V CC falling                                                                                   |                         | 1.212                   | 1.240                   | 1.262                   | V                       |
| RESET IN Threshold (MAX794 only)                      | V RST IN                | V CC rising                                                                                    |                         | 1.212                   | 1.250                   | 1.282                   | V                       |
| RESET IN Leakage Current (MAX794 only)                |                         |                                                                                                |                         | -25                     | 2                       | 25                      | nA                      |
| Reset Timeout Period                                  | t RP                    | V CC < 3.6V                                                                                    |                         | 140                     | 200                     | 280                     | ms                      |
| LOWLINE -to-Reset Threshold, (V LOWLINE -             | V LR                    | MAX793                                                                                         |                         | 30                      | 45                      | 60                      | mV                      |
| V RST ), V CC Falling                                 | V LR                    | MAX794                                                                                         |                         | 5                       | 15                      | 25                      | mV                      |
| Low-Line Comparator                                   |                         | MAX793                                                                                         |                         |                         | 10                      |                         | mV                      |
| Hysteresis                                            |                         | MAX794                                                                                         |                         |                         | 10                      |                         | mV                      |
| LOWLINE Threshold, V CC Rising                        | V LL                    | MAX793T/MAX795T                                                                                |                         |                         |                         | 3.23                    | V                       |
| LOWLINE Threshold, V CC Rising                        | V LL                    | MAX793S/MAX795S                                                                                |                         |                         |                         | 3.08                    | V                       |
| LOWLINE Threshold, V CC Rising                        | V LL                    | MAX793R/MAX795R                                                                                |                         |                         |                         | 2.78                    | V                       |
| LOWLINE Threshold, V CC Rising                        | V LL                    | MAX794                                                                                         |                         |                         |                         | 1.317                   |                         |
| PFI Input Threshold                                   | V                       | V PFI falling                                                                                  |                         | 1.212                   | 1.240                   | 1.262                   | V                       |
|                                                       | TH                      | V PFI rising                                                                                   |                         | 1.212                   | 1.250                   | 1.287                   |                         |
| PFI Input Current                                     |                         |                                                                                                |                         | -25                     | 2                       | 25                      | nA                      |
| PFI Hysteresis, PFI Rising                            |                         |                                                                                                |                         |                         | 10                      | 20                      | mV                      |
| BATT OK Threshold (MAX793)                            | V BOK                   |                                                                                                |                         | 2.00                    | 2.25                    | 2.50                    | V                       |
| INPUT AND OUTPUT LEVELS                               | INPUT AND OUTPUT LEVELS | INPUT AND OUTPUT LEVELS                                                                        | INPUT AND OUTPUT LEVELS | INPUT AND OUTPUT LEVELS | INPUT AND OUTPUT LEVELS | INPUT AND OUTPUT LEVELS | INPUT AND OUTPUT LEVELS |
| RESET Output-Voltage High                             | V OH                    | I SOURCE = 300µA, V CC = V RST min                                                             |                         | 0.8V CC                 | 0.86V CC                |                         | V                       |
| BATT OK, BATT ON, WDO , LOWLINE Output-Voltage High   | V OH                    | I SOURCE = 300µA, V CC = V RST                                                                 | max                     | 0.8V CC                 | 0.86V CC                |                         | V                       |
| PFO Output-Voltage High                               | V OH                    | I SOURCE = 65µA, V CC = V RST                                                                  | max                     | 0.8V CC                 |                         |                         | V                       |
| BATT ON Output- Voltage High                          | V OH                    | I SOURCE = 100µA, V CC = 2.3V, V =                                                             | BATT 3V                 | 0.8V BATT               |                         |                         | V                       |
| RESET Output Leakage Current (Note 9)                 | I LEAK                  | V CC = V RST max                                                                               |                         | -1                      |                         | -1                      | µA                      |
| PFO Output Short to GND Current                       | I SC                    | V CC = 3.3V, V PFO =                                                                           | 0V                      |                         | 180                     | 500                     | µA                      |
| PFO , RESET , RESET, WDO , LOWLINE Output-Voltage Low | V OL                    | I SINK = 1.2mA; RESET , with V CC = V RST min; RESET, BATTOK, WDO tested with V CC = V RST max | LOWLINE tested          | 0.08                    |                         | 0.2V CC                 | V                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = 3.17V to 5.5V for the MAX793T/MAX795T, VCC = 3.02V to 5.5V for the MAX793S/MAX795S, VCC = 2.72V to 5.5V for the MAX793R/MAX794/MAX795R, VBATT = 3.6V, TA = TMIN to TMAX, unless otherwise noted.  Typical values are at TA = +25°C.)

| PARAMETER                                 | SYMBOL                        | CONDITIONS                                                                                 | MIN                           | TYP                           | MAX                           | UNITS                         |
|-------------------------------------------|-------------------------------|--------------------------------------------------------------------------------------------|-------------------------------|-------------------------------|-------------------------------|-------------------------------|
| RESET Output-Voltage Low                  | V OL                          | MAX79_E, V BATT = V CC = 1.2V, I SINK = 200µA MAX79_C, V BATT = V CC = 1.0V, I SINK = 40µA |                               | 0.17 0.13                     | 0.3 0.3                       | V                             |
| BATT ON Output- Voltage Low               | V OL                          | I SINK = 3.2mA, V CC = V RST max                                                           |                               |                               | 0.2V CC                       | V                             |
| All Inputs Including PFO (Note 10)        | V IH                          | V RST max < V CC < 5.5V                                                                    |                               |                               | 0.7V CC                       | V                             |
| All Inputs Including PFO (Note 10)        | V IL                          | V RST max < V CC < 5.5V                                                                    | 0.3V CC                       |                               |                               | V                             |
| MANUAL RESET INPUT                        | MANUAL RESET INPUT            | MANUAL RESET INPUT                                                                         | MANUAL RESET INPUT            | MANUAL RESET INPUT            | MANUAL RESET INPUT            | MANUAL RESET INPUT            |
| MR Pulse Width                            | t MR                          | MAX793/MAX794 only                                                                         | 100                           |                               |                               | ns                            |
| MR -to-Reset Delay                        | t MD                          | MAX793/MAX794 only                                                                         |                               | 75                            | 250                           | ns                            |
| MR Pullup Current                         |                               | MAX793/MAX794 only, MR = 0V                                                                | 25                            | 70                            | 250                           | µA                            |
| CHIP-ENABLE GATING                        | CHIP-ENABLE GATING            | CHIP-ENABLE GATING                                                                         | CHIP-ENABLE GATING            | CHIP-ENABLE GATING            | CHIP-ENABLE GATING            | CHIP-ENABLE GATING            |
| CE IN Leakage Current                     | I LEAK                        | Disable mode                                                                               |                               | ±10                           |                               | nA                            |
| CE IN-to- CE OUT Resistance               |                               | Enable mode, V CC = V RST max                                                              |                               | 46                            |                               | Ω                             |
| CE IN-to- CE OUT Propagation Delay        |                               | V CC = V RST max, Figure 9                                                                 |                               | 2                             | 7                             | ns                            |
| CE OUT Drive from CE IN                   | V OH                          | V CC = V RST max, I OUT = -1mA, V CE IN = V CC                                             | 0.8V CC                       |                               |                               | V                             |
| CE OUT Drive from CE IN                   | V OL                          | V CC = V RST max, I OUT = 1.6mA, V CE IN = 0V                                              |                               |                               | 0.2V CC                       | V                             |
| Reset to CE OUT High Delay                |                               |                                                                                            |                               | 10                            |                               | µs                            |
| CE OUT Output-Voltage High (reset active) | V OH                          | I OH = 500µA, V CC < 2.3V                                                                  | 0.8V BATT                     |                               |                               | V                             |
| WATCHDOG (MAX793/MAX794 only)             | WATCHDOG (MAX793/MAX794 only) | WATCHDOG (MAX793/MAX794 only)                                                              | WATCHDOG (MAX793/MAX794 only) | WATCHDOG (MAX793/MAX794 only) | WATCHDOG (MAX793/MAX794 only) | WATCHDOG (MAX793/MAX794 only) |
| WDI Input Current                         |                               | 0V < V CC < 5.5V                                                                           | -1                            | 0.01                          | 1                             | µA                            |
| Watchdog Timeout Period                   | tWD                           |                                                                                            | 1.00                          | 1.60                          | 2.25                          | s                             |
| WDI Pulse Width                           |                               |                                                                                            | 100                           |                               |                               | ns                            |

Note 1: VCC supply current, logic-input leakage, watchdog functionality (MAX793/MAX794), MR functionality (MAX793/MAX794), PFI functionality (MAX793/MAX794), and state of RESET and RESET (MAX793/MAX794) tested at VBATT = 3.6V and VCC = 5.5V.  The state of RESET is tested at VCC = VCC min.

Note 2: Tested at VBATT = 3.6V, VCC = 3.5V and 0V.  The battery current rises to 10µA over a narrow transition window around VCC = 1.9V.

Note 3: Leakage current into the battery is tested under the worst-case conditions at VCC = 5.5V, VBATT = 1.8V and VCC = 1.5V, VBATT = 1.0V.

Note 4: Guaranteed by design.

Note 5: When VSW &gt; VCC &gt; VBATT, OUT remains connected to VCC until VCC drops below VBATT.  The VCC-to-VBATT comparator has a small 15mV typical hysteresis to prevent oscillation. For VCC &lt; 1.75V (typical), OUT switches to BATT regardless of VBATT.

Note 6: When VBATT &gt; VCC &gt; VSW, OUT remains connected to VCC until VCC drops below the battery switch threshold (VSW).

Note 7: OUT switches from BATT to VCC when VCC rises above the reset threshold, if VBATT &gt; VRST.  In this case, switchover back to VCC occurs at the exact voltage that causes reset to be asserted,  however, switchover occurs 200ms prior to reset.  If VBATT &lt; VRST, OUT switches from BATT to VCC when VCC exceeds VBATT.

Note 8: The reset threshold tolerance is wider for VCC rising than for VCC falling to accommodate the 10mV typical hysteresis, which prevents internal oscillation.

Note 9: The leakage current into or out of the RESET pin is tested with RESET not asserted (RESET output high impedance).

Note 10: PFO is normally an output, but is used as an input when activating the battery freshness seal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V/Adjustable Microprocessor Supervisory Circuits

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(TA = +25°C, unless otherwise noted.)

<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(TA = +25°C, unless otherwise noted.)

MAX794

<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN            | PIN    |                   |                                                                                                                                                                                                                                                                                                                          |
|----------------|--------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX793/ MAX794 | MAX795 | NAME              | FUNCTION                                                                                                                                                                                                                                                                                                                 |
| 1              | 1      | OUT               | Supply Output for CMOS RAM. When V CC rises above the reset threshold or above V BATT , OUT is connected to V CC through an internal p-channel MOSFET switch. When V CC falls below V SW and V BATT , BATT connects to OUT.                                                                                              |
| 2              | 2      | V CC              | Main Supply Input                                                                                                                                                                                                                                                                                                        |
| 3              | -      | BATT OK (MAX793)  | Battery Status Output. High in normal operating mode when V BATT exceeds V BOK , other- wise low. V BATT is checked continuously. Disabled and logic low while V CC is below V SW .                                                                                                                                      |
| 3              | -      | RESET IN (MAX794) | Reset Input. Connect to an external resistor-divider to select the reset threshold. The reset threshold can be programmed anywhere in the V SW to 5.5V range.                                                                                                                                                            |
| 4              | -      | PFI               | Power-Fail Comparator Input. When PFI is less than V PFT or when V CC falls below V SW , PFO goes low; otherwise, PFO remains high (see Power-Fail Comparator section). Connect to V CC if unused.                                                                                                                       |
| 5              | 3      | BATT ON           | Logic Output/External Bypass Switch-Driver Output. High when OUT switches to BATT. Low when OUT switches to V CC . Connect the base/gate of PNP/PMOS transistor to BATT ON for I OUT requirements exceeding 75mA.                                                                                                        |
| 6              | 4      | GND               | Ground                                                                                                                                                                                                                                                                                                                   |
| 7              | -      | PFO               | Power-Fail Comparator Output. When PFI is less than V PFT or when V CC falls below V SW , PFO goes low; otherwise, PFO remains high. PFO is also used to enable the bat- tery freshness seal (see Battery Freshness Seal and Power-Fail Comparator sections).                                                            |
| 8              | -      | MR                | Manual Reset Input. A logic low on MR asserts reset. Reset remains asserted as long as MR is low and for 200ms after MR returns high. The active-low input has an internal 70µA pullup current. It can be driven from a TTL- or CMOS-logic line or shorted to ground with a switch. Leave open if unused.                |
| 9              | -      | WDO               | Watchdog Output. WDO goes low if WDI remains either high or low for longer than the watchdog timeout period. WDO returns high on the next transition of WDI. WDO is a logic high for V SW < V CC < V RST , and low when V CC is below V SW .                                                                             |
| 10             | -      | WDI               | Watchdog Input. If WDI remains either high or low for longer than the watchdog timeout period, the internal watchdog timer runs out and WDO goes low. WDO returns high on the next transition of WDI. Connect WDO to MR to generate a reset due to a watchdog fault.                                                     |
| 11             | 5      | CE IN             | Chip-Enable Input. The input to the chip-enable gating circuit. Connect to GND if unused.                                                                                                                                                                                                                                |
| 12             | 6      | CE OUT            | Chip-Enable Output. CE OUT goes low only when CE IN is low and reset is not asserted. If CE IN is low when reset is asserted, CE OUT remains low for 10µs or until CE IN goes high, whichever occurs first. CE OUT is pulled up to OUT.                                                                                  |
| 13             | -      | RESET             | Active-High Reset Output. Sources and sinks current. RESET is the inverse of RESET .                                                                                                                                                                                                                                     |
| 14             | -      | LOWLINE           | Early Power-Fail Warning Output. Low when V CC falls to V LR . This output can be used to generate an NMI to provide early warning of imminent power failure.                                                                                                                                                            |
| 15             | 7      | RESET             | Open-Drain, Active-Low Reset Output. Pulses low for 200ms when triggered, and stays low whenever V CC is below the reset threshold or when MR is a logic low. It remains low for 200ms after either V CC rises above the reset threshold, the watchdog triggers a reset ( WDO connected to MR ), or MR goes low to high. |
| 16             | 8      | BATT              | Backup-Battery Input. When V CC falls below V SW and V BATT , OUT switches from V CC to BATT. When V CC rises above the reset threshold or above V BATT , OUT reconnects to V CC . V BATT can exceed V CC . Connect V CC , OUT, and BATT together if no battery is used.                                                 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## General Timing Characteristics

The MAX793/MAX794/MAX795 are designed for 3.3V and 3V systems, and provide a number of supervisory functions (see the Selector Guide on the front page). Figures 1 and 2 show the typical timing relationships of the  various  outputs  during  power-up and power-down with typical VCC rise and fall times.

## Manual Reset Input (MAX793/MAX794)

Many microprocessor-based products require manualreset capability, allowing the operator, a test technician, or external logic circuitry to initiate a reset. On the MAX793/MAX794, a logic low on MR asserts reset. Reset remains asserted while MR is  low,  and for tRP (200ms) after it returns high.  During the first half of the reset time- out period (tRP), the state of MR is ignored if PFO is externally forced low to facilitate enabling the battery freshness seal. MR has an internal 70µA pullup current, so it can be left open if it is not used.  This input can be driven with TTL- or CMOS-logic levels, or with open-drain/collector outputs.  Connect a normally open momentary switch from MR to GND to create a manual-reset function; external debounce circuitry is not required. If MR is  driven from long cables or the device is used in a noisy environment, connect a 0.1µF capacitor from MR to  ground to provide additional noise immunity.

## Reset Outputs

A microprocessor's (µP's) reset input starts the µP in a known state.  These MAX793/MAX794/MAX795 µP supervisory circuits assert a reset to prevent code execution errors during power-up, power-down, and

Figure 1.  Timing Diagram, VCC Rising

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

brownout conditions.  RESET is guaranteed to be a logic low for 0V &lt; VCC &lt; VRST, provided VBATT is greater than 1V. Without a backup battery (VBATT = VCC = VOUT), RESET is guaranteed valid for VCC ≥ 1V. Once VCC exceeds the reset threshold, an internal timer keeps RESET low for the reset timeout period (tRP);  after  this  interval, RESET becomes high impedance (Figure 2). RESET is  an  open-drain  output,  and requires a pullup resistor to VCC (Figure 3). Use a 4.7k Ω to  1M Ω pullup resistor that provides sufficient current to assure the proper logic levels to the µP.

If  a  brownout  condition occurs (VCC dips below the reset threshold), RESET goes low. Each time RESET is asserted, it stays low for the reset timeout period. Any time VCC goes below the reset threshold, the internal timer restarts.

The watchdog output ( WDO ) can also be used to initiate a reset. See the Watchdog Output section.

The RESET output is the inverse of the RESET output, and it can both source and sink current.

<!-- image -->

Figure 2.  Timing Diagram, VCC Falling

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 3.  MAX794 Standard Application Circuit

<!-- image -->

## Reset Threshold

The MAX793T/MAX795T are intended for 3.3V systems with a ±5% power-supply tolerance and a 10% systems tolerance.  Except when MR is asserted, reset does not assert as long as the power supply remains above 3.15V (3.3V - 5%). Reset is guaranteed to assert before the power supply falls below 3.0V (3.3V - 10%).

The MAX793S/MAX795S are designed for 3.3V ±10% power supplies.  Except when MR is asserted, they are guaranteed not to assert reset as long as the supply remains above 3.0V (3.0V is just above 3.3V - 10%). Reset is guaranteed to assert before the power supply falls below 2.85V (3.3V - 14%).

The MAX793R/MAX795R are optimized to monitor 3.0V ±10% power supplies.  Reset does not occur until VCC falls  below  2.7V (3.0V - 10%), but is guaranteed to occur before the supply falls below 2.55V (3.0V - 15%).

Program the MAX794's reset threshold with an external voltage divider to RESET IN. The reset-threshold tolerance is a combination of the RESET IN tolerance and the tolerance of the resistors used to make the external voltage divider. Calculate the reset threshold as follows:

<!-- formula-not-decoded -->

Figure 4.  Battery Freshness Seal Enable Timing

<!-- image -->

Using the standard application circuit (Figure 3), the reset threshold can be programmed anywhere in the range of VSW (the battery switch threshold) to 5.5V. Reset is asserted when VCC falls below VSW.

## Battery Freshness Seal

The MAX793/MAX794's battery freshness seal disconnects the backup battery from internal circuitry until it is needed.  This allows an OEM to ensure that the backup battery connected to BATT is fresh when the final product is put to use. To enable the freshness seal, connect a  battery  to  BATT,  ground PFO ,  bring  VCC above the reset threshold, and hold it there until reset is deasserted following the reset timeout period, then bring VCC back down again (Figure 4). Once the battery freshness seal is enabled (disconnecting the backup battery from the internal circuitry and anything connected to OUT), it remains enabled until VCC is brought above VRST. Note that connecting PFO to MR does not interfere with battery freshness seal operation.

## BATT OK Output (MAX793)

BATT OK indicates the status of the backup battery. When reset is not asserted, the MAX793 checks the battery voltage continuously. If VBATT is  below  VBOK (2.0V min), BATT OK goes low; otherwise, it remains pulled up to VCC. BATT OK also goes low when VCC goes below VSW.

## Watchdog Input (MAX793/MAX794)

In the MAX793/MAX794, the watchdog circuit monitors the µP's activity. If the µP does not toggle the watchdog input (WDI) within 1.6s, WDO goes low. The internal 1.6s timer is cleared and WDO returns high either when

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 5.  Watchdog Timing Relationship

<!-- image -->

a reset occurs or when a transition (low-to-high or highto-low) takes place at WDI. As long as reset is asserted, the timer remains cleared and does not count. As soon as reset is released or WDI changes state, the timer starts counting (Figure 5). WDI can detect pulses as short as 100ns. Unlike the 5V MAX690 family, the watchdog function cannot be disabled.

## Watchdog Output (MAX793/MAX794)

In  the  MAX793/MAX794, WDO remains high ( WDO is pulled up to VCC) if there is a transition or pulse at WDI during the watchdog timeout period. WDO goes low if no transition occurs at WDI during the watchdog timeout period. The watchdog function is disabled and WDO is a logic high when reset is asserted if VCC is above VSW. WDO is a logic low when VCC is below VSW.

If  a  system  reset  is  desired  on  every  watchdog  fault, simply diode-OR connect WDO to MR (Figure 6). When a watchdog fault occurs in this mode, WDO goes low, pulling MR low, which causes a reset pulse to be issued. Ten microseconds after reset is asserted, the watchdog timer clears and WDO returns high. This delay results in a 10µs pulse at WDO , allowing external circuitry to capture a watchdog fault indication.  A continuous high or low on WDI causes 200ms reset pulses to be issued every 1.6s.

<!-- image -->

Figure 6.  Generating a Reset on Each Watchdog Fault

<!-- image -->

## Chip-Enable Signal Gating

Internal gating of chip-enable (CE) signals prevents erroneous data from corrupting CMOS RAM in the event of an undervoltage condition. The MAX793/MAX794/MAX795 use a series transmission gate from CE IN to CE OUT During normal operation (reset not asserted), the CE transmission gate is enabled and passes all CE transitions. When reset is asserted, this path becomes disabled, preventing erroneous data from corrupting the CMOS RAM. The short CE propagation delay from CE IN to CE OUT enables these µP supervisors to be used with most µPs. If CE IN is low when reset asserts, CE OUT remains low for typically 10µs to permit completion of the current write cycle.

## Chip-Enable Input

The CE transmission gate is disabled and CE IN is high impedance (disabled mode) while reset is asserted. During a power-down sequence when VCC passes the reset threshold, the CE transmission gate disables and CE IN immediately becomes high impedance if the voltage at CE IN is high. If CE IN is low when reset asserts, the CE transmission gate disables at the moment CE IN goes high, or 10µs after reset asserts, whichever occurs first (Figure 8). This permits the current write cycle to complete during power-down.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 7.  Chip-Enable Transmission Gate

<!-- image -->

The CE transmission gate remains disabled and CE IN remains high impedance (regardless of CE IN activity) for the first half of the reset timeout period (tRP / 2), any time a reset is generated. While disabled, CE IN is high impedance. When the CE transmission gate is enabled, the impedance of CE IN appears as a 46 Ω resistor  in series with the load at CE OUT.

The propagation delay through the CE transmission gate depends on VCC, the source impedance of the drive connected to CE IN, and the loading on CE OUT. The CE propagation delay is production tested from the 50% point on CE IN to the 50% point on CE OUT using a 50 Ω driver and 50pF of load capacitance (Figure 9). For minimum propagation delay, minimize the capacitive  load  at CE OUT and use a low-output-impedance driver.

## Chip-Enable Output

When the CE transmission gate is enabled, the impedance of CE OUT is equivalent to a 46 Ω resistor in series with  the  source  driving CE IN.  In  the  disabled  mode, the  transmission gate is off and an active pullup connects CE OUT to OUT (Figure 8). This pullup turns off when the transmission gate is enabled.

## Early Power-Fail Warning (MAX793/MAX794)

Critical systems often require an early warning indicating that power is failing.  This warning provides time for the µP to store vital data and take care of any additional 'housekeeping' functions, before the power supply gets too far out of tolerance for the µP to operate reliably. The MAX793/MAX794 offer two methods of achieving this early warning. If access to the unregulated supply is feasible, the power-fail comparator input (PFI) can be connected to the unregulated supply through a voltage divider, with the power-fail comparator  output  ( PFO )  providing  the  NMI  to  the  µP  (Figure

Figure 8.  Chip-Enable Timing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 9.  CE Propagation Delay Test Circuit

<!-- image -->

10). If there is no easy access to the unregulated supply,  the LOWLINE output can be used to generate an NMI to the µP (see LOWLINE Output section).

## LOWLINE Output (MAX793/MAX794)

The low-line comparator monitors VCC with a threshold voltage typically 45mV above the reset threshold (10mV of hysteresis) for the MAX793, and 15mV above RESET IN (4mV of hysteresis) for the MAX794. For normal operation (VCC above the reset threshold), LOWLINE is pulled to VCC. Use LOWLINE to provide an NMI to the µP when power begins to fall.

<!-- image -->

Figure 10.  Using the Power-Fail Comparator to Generate Power-Fail Warning

<!-- image -->

In  most battery-operated portable systems, reserve energy in the battery provides ample time to complete the shutdown routine once the low-line warning is encountered and before reset asserts.  If the system must also contend with a more rapid VCC fall time, such as when the main battery is disconnected or a highside switch is opened during normal operation, use capacitance on the VCC line to provide time to execute the shutdown routine (Figure 11).

First,  calculate the worst-case time required for the system to perform its shutdown routine. Then, with the worstcase shutdown time, the worst-case load current, and the minimum low-line to reset threshold (VLR min), calculate the amount of capacitance required to allow the shutdown routine to complete before reset is asserted:

## CHOLD &gt; ILOAD x tSHDN / VLR

where ILOAD is the current being drained from the capacitor, VLR is the low-line to reset threshold difference (VLL - VRST), and tSHDN is the time required for the system to complete an orderly shutdown routine.

## Power-Fail Comparator (MAX793/MAX794)

The MAX793/MAX794's PFI input is compared to an internal reference. If PFI is less than the power-fail threshold (VPFT), PFO goes low. The power-fail comparator is intended for use as an undervoltage detector to  signal  a  failing  power  supply  (Figure  12).  However, the comparator does not need to be dedicated to this function because it is completely separate from the rest of the circuitry.

Figure 11.  Using LOWLINE to Provide Power-Fail Warning to the µP

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 12.  Using the Power-Fail Comparator to Monitor an Additional Power Supply:  (a) VIN Is Negative, (b) VIN Is Positive

<!-- image -->

The power-fail comparator turns off and PFO goes low when VCC falls below VSW on power-down. During the first half of the reset timeout period (tRP), PFO is forced high, irrespective of VPFI. At the beginning of the second half of tRP, the power-fail comparator is enabled and PFO follows PFI. If the comparator is unused, connect PFI to VCC and leave PFO unconnected. PFO can be connected to MR so that a low voltage on PFI generates a reset (Figure 12b). In this configuration, when the monitored voltage causes PFI to fall below VPFT, PFO pulls MR low, causing a reset to be asserted. Reset remains asserted as long as PFO holds MR low, and for 200ms after PFO pulls MR high when the monitored supply is above the programmed threshold.

## Backup-Battery Switchover

In  the  event  of  a  brownout  or  power failure,  it  may  be necessary to preserve the contents of RAM. With a backup battery installed at BATT, the devices automatically switch RAM to backup power when VCC falls.  In order to allow the backup battery (e.g., a 3.6V lithium cell) to have a higher voltage than VCC, this family of µP supervisors (designed for 3.3V and 3V systems) does not always connect BATT to OUT when VBATT is greater than VCC. BATT connects to OUT (through a 140 Ω switch) either when VCC falls below VSW and VBATT is greater than VCC, or when VCC falls below 1.75V (typ) regardless of the BATT voltage.

Switchover at VSW ensures that battery-backup mode is entered before VOUT gets too close to the 2.0V minimum required to reliably retain data in most CMOS RAM, (switchover at higher VCC voltages would decrease backup-battery life). When VCC recovers, switchover is deferred either until VCC crosses VBATT if VBATT is below VRST, or when VCC rises above the reset threshold (VRST) if VBATT is  above VRST. This power-up switchover technique prevents VCC from charging the backup battery through OUT when using an external transistor driven by BATT ON. OUT connects to VCC through a 4 Ω (max) PMOS power switch when VCC crosses the reset threshold (Figure 13).

## BATT ON (MAX793/MAX794)

BATT ON is high when OUT is connected to BATT. Although BATT ON can be used as a logic output to indicate the battery switchover status, it is most often used as a gate or base drive for an external pass transistor  for  high-current applications (see Driving an External Switch with BATT ON in the Applications Information section). When VCC exceeds VRST on power-up, BATT ON sinks 3.2mA at 0.4V.  In batterybackup mode, this terminal sources 100µA from BATT.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 13.  Battery Switchover Timing

<!-- image -->

## Table 1.  Input and Output Status in Battery-Backup Mode

| PIN NAME   | STATUS                                             |
|------------|----------------------------------------------------|
| OUT        | Connected to BATT through an internal 140 Ω switch |
| V CC       | Disconnected from OUT                              |
| BATT ON    | Pulled up to BATT                                  |
| BATT OK    | Logic low                                          |
| PFI        | Disabled                                           |
| PFO        | Logic low                                          |
| MR         | Disabled, but still pulled up to V CC              |
| WDO        | Logic low                                          |
| WDI        | Disabled                                           |
| RESET      | Logic low                                          |
| RESET      | Pulled up to V CC                                  |
| BATT       | Connected to OUT                                   |
| LOWLINE    | Logic low                                          |
| CE IN      | High impedance                                     |
| CE OUT     | Pulled to BATT                                     |

## \_\_\_\_\_\_\_\_\_\_Applications Information

These µP supervisory circuits are not short-circuit protected. Shorting VOUT to ground, excluding power-up transients such as charging a decoupling capacitor, destroys the device. Decouple both VCC and BATT pins to ground by placing 0.1µF ceramic capacitors as close to the device as possible.

## Driving an External Switch with BATT ON

BATT ON can be directly connected to the base of a PNP transistor or the gate of a PMOS transistor. The PNP connection is straightforward:  connect the emitter

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

to VCC, the collector to OUT, and the base to BATT ON (Figure 14a). No current-limiting resistor is required, but a resistor connecting the base of the PNP to BATT ON can be used to limit the current drawn from VCC, prolonging battery life in portable equipment.

If you are using a PMOS transistor, however, it must be connected backwards from the traditional method. Connect the gate to BATT ON, the drain to VCC, and the source to OUT (Figure 14b). This method orients the body diode from VCC to OUT and prevents the backup battery from discharging through the FET when its  gate  is  high.  Two  PMOS  transistors  in  the  Siliconix LITTLE FOOT ® series are specified with VGS down to -2.7V. The Si9433DY has a maximum 100m Ω drainsource on-resistance with 2.7V of gate drive and a 2A drain-source current. The Si9434DY specifies a 60m Ω drain-source on-resistance with 2.7V of gate drive and a 5.1A drain-source current.

## Using a Super Cap as a Backup Power Source

Super caps are capacitors with extremely high capacitance values (e.g., order of 0.47F) for their size.  Figure 15 shows two ways to use a super cap as a backup power source. The super cap can be connected through a diode to the 3V input (Figure 15a); or, if a 5V supply is also available, the super cap can be charged up to the 5V supply (Figure 15b), allowing a longer backup period. Since VBATT can exceed VCC while VCC is above the reset threshold, there are no special precautions when using these µP supervisors with a super cap.

## Operation without a Backup Power Source

These µP supervisors were designed for batterybacked applications. If a backup battery is not used, connect BATT, OUT, and VCC together, or use a different µP supervisor.

## Replacing the Backup Battery

The backup power source can be removed while VCC remains valid, without danger of triggering a reset pulse, provided that BATT is decoupled with a 0.1µF capacitor to ground. As long as VCC stays above the reset threshold, battery-backup mode cannot be entered.

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 14.  Driving an External Transistor with BATT ON

<!-- image -->

Figure 15.  Using a Super Cap as a Backup Source

<!-- image -->

## Adding Hysteresis to the Power-Fail Comparator (MAX793/MAX794)

The power-fail comparator has a typical input hysteresis  of  10mV. This is sufficient for most applications where a power-supply line is being monitored through an external voltage divider (see the section Monitoring an Additional Power Supply).

If additional noise margin is desired, connect a resistor between PFO and PFI as shown in Figure 16a. Select the  ratio  of  R1  and  R2  such  that  PFI  sees  VPFT when VIN falls to its trip point (VTRIP). R3 adds the additional hysteresis and should typically be more than 10 times the value of R1 or R2.  The hysteresis window extends both above (VH) and below (VL) the original trip point (VTRIP).

Connecting an ordinary signal diode in series with R3, as shown in Figure 16b, causes the lower trip point (VL) to coincide with the trip point without hysteresis (VTRIP), so the entire hysteresis window occurs above VTRIP. This method provides additional noise margin without compromising the accuracy of the power-fail threshold when the monitored voltage is falling. It is useful for accurately detecting when a voltage falls past a threshold. The current through R1 and R2 should be at least 1µA to ensure that the 25nA (max over temperature) PFI input current does not shift the trip point. R3 should be larger than 82k Ω so it does not load down the PFO pin.  Capacitor C1 is optional, and adds noise rejection.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 16.  Adding Hysteresis to the Power-Fail Comparator:  (a) Symmetrical Hysteresis, (b) Hysteresis Only on Rising VIN

<!-- image -->

## Monitoring an Additional Power Supply

These µP supervisors can monitor either positive or negative supplies using a resistor voltage divider to PFI. PFO can be used to generate an interrupt to the µP or to cause reset to assert (Figure 12).

## Interfacing to µPs with Bidirectional Reset Pins

Since the RESET output is open drain, the MAX793/ MAX794/MAX795 interface easily with µPs that have bidirectional reset pins, such as the Motorola 68HC11. Connecting the RESET output of the µP supervisor directly to the RESET input of the microcontroller with a single pullup resistor allows either device to assert reset (Figure 17).

## Negative-Going VCC Transients

These supervisors are relatively immune to short-duration negative-going VCC transients (glitches) while issuing resets to the µP during power-up, power-down, and brownout conditions. Therefore, resetting the µP when VCC experiences only small glitches is usually not recommended.

<!-- image -->

Figure 17.  Interfacing to µPs with Bidirectional Reset I/O

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

Figure 18 shows maximum transient duration vs. resetcomparator overdrive, for which reset pulses are not generated. The graph was produced using negativegoing VCC pulses, starting at 3.3V and ending below the reset threshold by the magnitude indicated (reset comparator overdrive). The graph shows the maximum pulse width a negative-going VCC transient can typically have without causing a reset pulse to be issued.  As the amplitude of the transient increases (i.e., goes farther below the reset threshold), the maximum allowable pulse width decreases. Typically, a VCC transient that goes 40mV below the reset threshold and lasts for 10µs or less does not cause a reset pulse to be issued.

A 0.1µF bypass capacitor mounted close to the VCC pin provides additional transient immunity.

Figure 18.  Maximum Transient Duration without Causing a Reset Pulse vs. Reset Comparator Overdrive

<!-- image -->

## Watchdog Software Considerations

There is a way to help the watchdog timer monitor software execution more closely, which involves setting and resetting the watchdog input at different points in the program rather than pulsing the watchdog input high-low-high or low-high-low. This technique avoids a stuck loop, in which the watchdog timer would continue to be reset within the loop, keeping the watchdog from timing out. Figure 19 shows an example of a flow diagram where the I/O driving the watchdog input is set high at the beginning of the program, set low at the beginning of every subroutine or loop, then set high again when the program returns to the beginning. If the program should hang in any subroutine, the problem would quickly be corrected, since the I/O is continually set low and the watchdog timer is allowed to time out, causing a reset or interrupt to be issued.

Figure 19.  Watchdog Flow Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

## \_Ordering Information (continued)

| PART*       | TEMP RANGE     | PIN- PACKAGE   |
|-------------|----------------|----------------|
| MAX793_EPE  | -40°C to +85°C | 16 Plastic DIP |
| MAX793_ESE  | -40°C to +85°C | 16 Narrow SO   |
| MAX794 CPE  | 0°C to +70°C   | 16 Plastic DIP |
| MAX794CSE   | 0°C to +70°C   | 16 Narrow SO   |
| MAX794EPE   | -40°C to +85°C | 16 Plastic DIP |
| MAX794ESE   | -40°C to +85°C | 16 Narrow SO   |
| MAX795 _CPA | 0°C to +70°C   | 8 Plastic DIP  |
| MAX795_CSA  | 0°C to +70°C   | 8 SO           |
| MAX795_EPA  | -40°C to +85°C | 8 Plastic DIP  |
| MAX795_ESA  | -40°C to +85°C | 8 SO           |

Devices are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering.

## Chip Information

TRANSISTOR COUNT:  1271

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configurations

<!-- image -->

## Package Information

For the latest package outline information and land patterns, go to www.maxim-ic.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 8 SO           | S8-2           | 21-0041        |
| 8 Plastic Dip  | R8-1           | 21-0043        |
| 16 Plastic Dip | P16-1          | 21-0043        |
| 16 Narrow SO   | S16-1          | 21-0041        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.0V/3.3V Adjustable Microprocessor Supervisory Circuits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                     | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------|-----------------|
|                 0 | 2/95            | Initial release                                                 | -               |
|                 5 | 2/07            | Revised Electrical Characteristics .                            | 4               |
|                 6 | 3/10            | Revised Absolute Maximum Ratings and Chip-Enable Input section. | 1, 2            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.