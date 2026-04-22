<!-- lastmod 2022-12-16 -->
19-0433; Rev 4; 11/05

<!-- image -->

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## General Description

The MAX807 microprocessor (µP) supervisory circuit reduces the complexity and number of components needed to monitor power-supply and battery-control functions in µP systems. A 70µA supply current makes the MAX807 ideal for use in portable equipment, while a 2ns chip-enable propagation delay and 250mA output current capability (20mA in battery-backup mode) make it suitable for larger, higher-performance equipment.

The MAX807 comes in 16-pin DIP, SO, and TSSOP packages, and provides the following functions:

- µP reset. The active-low RESET output is asserted during power-up, power-down, and brownout conditions, and is guaranteed to be in the correct state for V CC down to 1V.
- Active-high RESET output.
- Manual-reset input.
- Two-stage power-fail warning. A separate low-line comparator compares V CC to a threshold 52mV above the reset threshold. This low-line comparator is more accurate than those in previous µP supervisors.
- Backup-battery switchover for CMOS RAM, real-time clocks, µPs, or other low-power logic.
- Write protection of CMOS RAM or EEPROM.
- 2.275V threshold detector provides for power-fail warning and low-battery detection, or monitors a power supply other than +5V.
- BATT OK status flag indicates that the backup-battery voltage is above +2.275V.
- Watchdog-fault output-asserted if the watchdog input has not been toggled within a preset timeout period.

Applications

Features

- ♦ Precision 4.675V (MAX807L), 4.425V (MAX807M), or 4.575V (MAX807N) Voltage Monitoring
- ♦ 200ms Power-OK/Reset Time Delay
- ♦ RESET and RESET Outputs
- ♦ Independent Watchdog Timer
- ♦ 1µA Standby Current
- ♦ Power Switching 250mA in VCC Mode 20mA in Battery-Backup Mode
- ♦ On-Board Gating of Chip-Enable Signals; 2ns CE Gate Propagation Delay
- ♦ MaxCap® and SuperCap® Compatible
- ♦ Voltage Monitor for Power Fail
- ♦ Backup-Battery Monitor
- ♦ Guaranteed RESET Valid to V CC = 1V
- ♦ ±1.5% Low-Line Threshold Accuracy 52mV above Reset Threshold

## Pin Configuration

<!-- image -->

Computers

Controllers

Intelligent Instruments

Critical µP Power Monitoring

Portable/Battery-Powered Equipment

Ordering Information and Typical Operating Circuit appear at end of data sheet.

SuperCap is a registered trademark of Baknor Industries.  MaxCap is a registered trademark of Cesiwid, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## ABSOLUTE MAXIMUM RATINGS

Input Voltages (with respect to GND)

VCC ..........................................................................-0.3V to 6V

VBATT .......................................................................-0.3V to 6V

All Other Inputs......................................-0.3V to (VOUT + 0.3V)

Input Current

VCC Peak ...........................................................................1.0A

VCC Continuous .............................................................500mA

I BATT Peak......................................................................250mA

I BATT Continuous .............................................................50mA

GND.................................................................................50mA

All Other Inputs ................................................................50mA

| Continuous Power Dissipation (T A = +70°C)                                   |
|------------------------------------------------------------------------------|
| Plastic DIP (derate 10.53mW/°C above +70°C) ..........842mW                  |
| Wide SO (derate 9.52mW/°C above +70°C)................762mW                  |
| CERDIP (derate 10.00mW/°C above +70°C)...............800mW                   |
| TSSOP (derate 6.70 mW/°C above +70°C) .................533mW                 |
| Operating Temperature Ranges                                                 |
| MAX807_C_E......................................................0°C to +70°C |
| MAX807_E_E ...................................................-40°C to +85°C |
| MAX807_MJE ................................................-55°C to +125°C   |
| Storage Temperature Range.............................-65°C to +160°C        |
| Lead Temperature (soldering, 10s) .................................+300°C    |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = 4.60V to 5.5V for the MAX807L, VCC = 4.50V to 5.5V for the MAX807N, VCC = 4.35V to 5.5V for the MAX807M, VBATT = 2.8V, VPFI = 0V, TA = TMIN to TMAX. Typical values are tested with VCC = 5V and TA = +25°C, unless otherwise noted.)

| PARAMETER                                                         | SYMBOL   | CONDITIONS                                 | CONDITIONS                                 | MIN           | TYP           | MAX   | UNITS   |
|-------------------------------------------------------------------|----------|--------------------------------------------|--------------------------------------------|---------------|---------------|-------|---------|
| Operating Voltage Range V BATT , V CC (Note 1)                    |          |                                            |                                            | 0             |               | 5.5   | V       |
| V OUT in Normal Operating                                         |          | V CC = 4.5V                                | I OUT = 25mA                               |               | V CC - 0.02   |       | V       |
| V OUT in Normal Operating                                         |          | V CC = 4.5V                                | I OUT = 250mA, MAX807C/E                   | V CC - 0.35   | V CC - 0.22   |       | V       |
| Mode                                                              |          | V CC = 4.5V                                | I OUT = 250mA, MAX807M                     | V CC - 0.45   |               |       | V       |
| V OUT in Normal Operating                                         |          | V CC = 3V, V BATT = 2.8V, I OUT = 100mA    | V CC = 3V, V BATT = 2.8V, I OUT = 100mA    | V CC - 0.25   | V CC - 0.12   |       |         |
| V CC to OUT On-Resistance                                         |          | V CC = 4.5V, I OUT = 250mA                 | MAX807C/E                                  |               | 1.0           | 1.4   | Ω       |
| V CC to OUT On-Resistance                                         |          | V CC = 4.5V, I OUT = 250mA                 | MAX807M                                    |               |               | 1.8   | Ω       |
| V CC to OUT On-Resistance                                         |          | V CC = 3V, I OUT = 100mA                   | V CC = 3V, I OUT = 100mA                   |               | 1.2           | 2.5   | Ω       |
| V OUT in Battery-Backup Mode                                      |          | V BATT = 4.5V, I OUT = 20mA, V CC = 0V     | V BATT = 4.5V, I OUT = 20mA, V CC = 0V     |               | V BATT - 0.17 |       |         |
| V OUT in Battery-Backup Mode                                      |          | V BATT = 2.8V, I OUT = 10mA, V CC = 0V     | V BATT = 2.8V, I OUT = 10mA, V CC = 0V     | V BATT - 0.25 | V BATT - 0.12 |       | V       |
| V OUT in Battery-Backup Mode                                      |          | V BATT = 2.0V, I OUT = 5mA, V CC = 0V      | V BATT = 2.0V, I OUT = 5mA, V CC = 0V      | V BATT - 0.20 | V BATT - 0.08 |       | V       |
| BATT to OUT On-Resistance                                         |          | V BATT = 4.5V, I OUT = 20mA                | V BATT = 4.5V, I OUT = 20mA                |               | 8.5           |       |         |
| BATT to OUT On-Resistance                                         |          | V BATT = 2.8V, I OUT = 10mA                | V BATT = 2.8V, I OUT = 10mA                |               | 12            | 25    | Ω       |
| BATT to OUT On-Resistance                                         |          | V BATT = 2.0V, I OUT = 5mA                 | V BATT = 2.0V, I OUT = 5mA                 |               | 16            | 40    |         |
| Supply Current in Normal Operating Mode (excludes I OUT )         |          |                                            |                                            |               | 70            | 110   | µA      |
| Supply Current in Battery- Backup Mode (excludes I OUT ) (Note 2) |          | V CC = 0V, V BATT = 2.8V                   | T A = +25°C                                |               | 0.4           | 1     | µA      |
| Supply Current in Battery- Backup Mode (excludes I OUT ) (Note 2) |          | V CC = 0V, V BATT = 2.8V                   | MAX807C/E                                  |               |               | 5     | µA      |
| Supply Current in Battery- Backup Mode (excludes I OUT ) (Note 2) |          | V CC = 0V, V BATT = 2.8V                   | MAX807M                                    |               |               | 50    | µA      |
| BATT Standby Current (Note 3)                                     |          | V BATT = 2.8V, V CC = 3.0V                 | T A = +25°C                                | -0.1          |               | 0.1   | µA      |
| BATT Standby Current (Note 3)                                     |          | V BATT = 2.8V, V CC = 3.0V                 | T A = T MIN to T MAX                       | -1.0          |               | 1.0   | µA      |
| Battery-Switchover Threshold                                      |          | V BATT = 2.8V                              | Power up                                   |               | V BATT + 0.05 |       | V       |
| Battery-Switchover Threshold                                      |          | V BATT = 2.8V                              | Power down                                 |               | V BATT        |       | V       |
| Battery-Switchover Hysteresis                                     |          |                                            |                                            |               | 50            |       | mV      |
| BATT ON Output, Low Voltage                                       |          | V RST (max) , I SINK = 3.2mA               | V RST (max) , I SINK = 3.2mA               |               | 0.1           | 0.4   | V       |
| BATT ON Output, High Voltage                                      |          | V CC = 0V, I SOURCE = 0.1mA, V BATT = 2.8V | V CC = 0V, I SOURCE = 0.1mA, V BATT = 2.8V | 2             | 2.7           |       | V       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = 4.60V to 5.5V for the MAX807L, VCC = 4.50V to 5.5V for the MAX807N, VCC = 4.35V to 5.5V for the MAX807M, VBATT = 2.8V, VPFI = 0V, TA = TMIN to TMAX. Typical values are tested with VCC = 5V and TA = +25°C, unless otherwise noted.)

| PARAMETER                                   | SYMBOL                              | CONDITIONS                               | CONDITIONS                               | MIN                                 | TYP                                 | MAX                                 | UNITS                               |
|---------------------------------------------|-------------------------------------|------------------------------------------|------------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| BATT ON Output                              |                                     | Sink current                             | Sink current                             |                                     | 70                                  |                                     | mA                                  |
| Short-Circuit Current                       |                                     | Source current, V CC = 0V, V BATT = 2.8V | Source current, V CC = 0V, V BATT = 2.8V |                                     | 5                                   |                                     | mA                                  |
| RESET, LOW LINE, AND WATCHDOG TIMER         | RESET, LOW LINE, AND WATCHDOG TIMER | RESET, LOW LINE, AND WATCHDOG TIMER      | RESET, LOW LINE, AND WATCHDOG TIMER      | RESET, LOW LINE, AND WATCHDOG TIMER | RESET, LOW LINE, AND WATCHDOG TIMER | RESET, LOW LINE, AND WATCHDOG TIMER | RESET, LOW LINE, AND WATCHDOG TIMER |
| Reset Threshold                             | V RST                               | V CC rising and falling                  | MAX807L                                  | 4.600                               | 4.675                               | 4.750                               | V                                   |
| Reset Threshold                             | V RST                               | V CC rising and falling                  | MAX807N                                  | 4.500                               | 4.575                               | 4.650                               | V                                   |
| Reset Threshold                             | V RST                               | V CC rising and falling                  | MAX807M                                  | 4.350                               | 4.425                               | 4.500                               | V                                   |
| Reset Threshold Hysteresis                  |                                     |                                          |                                          |                                     | 13                                  |                                     | mV                                  |
| LOW LINE to RESET Threshold Voltage         | V LR                                | V CC falling                             | V CC falling                             | 30                                  | 52                                  | 70                                  | mV                                  |
| LOW LINE Threshold, V CC Rising             | V LL                                | MAX807L                                  | MAX807L                                  |                                     | 4.73                                | 4.81                                | V                                   |
|                                             | V LL                                | MAX807N                                  | MAX807N                                  |                                     | 4.63                                | 4.71                                | V                                   |
|                                             | V LL                                | MAX807M                                  | MAX807M                                  |                                     | 4.48                                | 4.56                                | V                                   |
| V CC to RESET Delay                         |                                     | V CC falling at 1mV/µs                   | V CC falling at 1mV/µs                   |                                     | 26                                  |                                     | µs                                  |
| V CC to LOW LINE Delay                      |                                     | V CC falling at 1mV/µs                   | V CC falling at 1mV/µs                   |                                     | 24                                  |                                     | µs                                  |
| RESET Active-Timeout Period                 | t RP                                | V CC rising                              | V CC rising                              | 140                                 | 200                                 | 280                                 | ms                                  |
| Watchdog-Timeout Period                     | tWD                                 |                                          |                                          | 1.12                                | 1.6                                 | 2.24                                | s                                   |
| Minimum Watchdog Input Pulse Width          |                                     | V IL = 0.8V, V IH = 0.75 x V CC          | V IL = 0.8V, V IH = 0.75 x V CC          | 100                                 |                                     |                                     | ns                                  |
| RESET Output Voltage                        |                                     | I SINK = 50µA, V BATT = 0V, V CC falling | V CC = 1V, MAX807_C                      |                                     |                                     | 0.3                                 | V                                   |
| RESET Output Voltage                        |                                     | I SINK = 50µA, V BATT = 0V, V CC falling | V CC = 1.2V, MAX807_E/M                  |                                     |                                     | 0.3                                 | V                                   |
| RESET Output Voltage                        |                                     | I SINK = 3.2mA, V CC = 4.25V             | I SINK = 3.2mA, V CC = 4.25V             |                                     | 0.1                                 | 0.4                                 | V                                   |
| RESET Output Voltage                        |                                     | I SOURCE = 0.1mA                         | I SOURCE = 0.1mA                         | V CC - 1.5 V CC - 0.1               | V CC - 1.5 V CC - 0.1               | V CC - 1.5 V CC - 0.1               | V                                   |
| RESET Output                                |                                     | Output sink current, V CC = 4.25V        | Output sink current, V CC = 4.25V        |                                     | 60                                  |                                     | mA                                  |
| Short-Circuit Current                       | I SC                                | Output source current                    | Output source current                    |                                     | 1.6                                 |                                     |                                     |
| RESET Output Voltage                        |                                     | I SINK = 3.2mA                           | I SINK = 3.2mA                           |                                     |                                     | 0.4                                 | V                                   |
| RESET Output                                |                                     | I SOURCE = 5mA                           | I SOURCE = 5mA                           | V CC - 1.5                          |                                     |                                     | mA                                  |
|                                             |                                     | Output sink current                      | Output sink current                      |                                     | 60                                  |                                     | mA                                  |
| Short-Circuit Current                       | I SC                                | Output source current, V CC = 4.25V      | Output source current, V CC = 4.25V      |                                     | 15                                  |                                     |                                     |
| LOW LINE Output Voltage                     |                                     | I SINK = 3.2mA, V CC = 4.25V             | I SINK = 3.2mA, V CC = 4.25V             |                                     |                                     | 0.4                                 |                                     |
|                                             |                                     | I SOURCE = 5mA                           | I SOURCE = 5mA                           | V CC - 1.5                          |                                     |                                     | V                                   |
| LOW LINE Output                             |                                     | Output sink current, V CC = 4.25V        | Output sink current, V CC = 4.25V        |                                     | 28                                  |                                     | mA                                  |
| Short-Circuit Current                       | I SC                                | Output source current                    | Output source current                    |                                     | 20                                  |                                     |                                     |
| WDO Output Voltage                          |                                     | I SINK = 3.2mA                           | I SINK = 3.2mA                           |                                     |                                     | 0.4                                 | V                                   |
| WDO Output                                  |                                     | I SOURCE = 5mA                           | I SOURCE = 5mA                           | V CC - 1.5                          | V CC - 1.5                          |                                     |                                     |
|                                             | I SC                                | Output sink current                      | Output sink current                      | 35 20                               | 35 20                               |                                     | mA                                  |
| Short-Circuit Current WDI Threshold Voltage | V IH                                | Output source current                    | Output source current                    |                                     |                                     |                                     |                                     |
| (Note 4)                                    | V IL                                |                                          |                                          | 0.75 x V CC                         | 0.75 x V CC                         | 0.8                                 | V                                   |
| WDI Input Current                           | V IH                                |                                          | 0V                                       | -50 -10                             | -50 -10                             | 50                                  | µA                                  |
|                                             |                                     | Reset deasserted, WDI = V CC             | Reset deasserted, WDI = V CC             | 16                                  | 16                                  |                                     |                                     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = 4.60V to 5.5V for the MAX807L, VCC = 4.50V to 5.5V for the MAX807N, VCC = 4.35V to 5.5V for the MAX807M, VBATT = 2.8V, VPFI = 0V, TA = TMIN to TMAX. Typical values are tested with VCC = 5V and TA = +25°C, unless otherwise noted.)

| PARAMETER                                   | SYMBOL             | CONDITIONS                                            | CONDITIONS                                            | MIN                | TYP                | MAX                | UNITS              |
|---------------------------------------------|--------------------|-------------------------------------------------------|-------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| PFI Input Threshold                         | V PFT              | V PFI falling                                         | V PFI falling                                         | 2.20               | 2.265              | 2.33               | V                  |
|                                             | V PFT              | V PFI rising                                          | V PFI rising                                          | 2.22               | 2.285              | 2.35               | V                  |
| PFI Hysteresis                              |                    |                                                       |                                                       |                    | 20                 |                    | mV                 |
| PFI Leakage Current                         |                    |                                                       |                                                       |                    | ±0.005             | ±40                | nA                 |
| PFI to PFO Delay (Note 5)                   |                    | V OD = 30mV, V PFI falling                            | V OD = 30mV, V PFI falling                            |                    | 14                 |                    | µs                 |
| CHIP-ENABLE GATING                          |                    |                                                       |                                                       |                    |                    |                    |                    |
| CE IN Leakage Current                       |                    | Disabled mode, MR = 0V                                | Disabled mode, MR = 0V                                |                    | ±0.00002           | ±1                 | µA                 |
| CE IN to CE OUT Resistance (Note 6)         |                    | Enabled mode, V CC = V RST (max)                      | Enabled mode, V CC = V RST (max)                      |                    | 75                 | 150                | Ω                  |
| CE OUT Short-Circuit Current (RESET Active) |                    | V CC = 5V, disabled mode, CE OUT = 0, MR = 0V         | V CC = 5V, disabled mode, CE OUT = 0, MR = 0V         |                    | 17                 |                    | mA                 |
| CE IN to CE OUT Propagation Delay (Note 7)  |                    | V CC = 5V, CLOAD = 50pF, 50 Ω source impedance driver | V CC = 5V, CLOAD = 50pF, 50 Ω source impedance driver |                    | 2                  | 8                  | ns                 |
| CE OUT Output Voltage High (RESET Active)   |                    | Disabled mode, MR = 0V                                | V CC = 5V, I OUT = 2mA                                | 3.5                |                    |                    | V                  |
| CE OUT Output Voltage High (RESET Active)   |                    | Disabled mode, MR = 0V                                | V CC = 0V, I OUT = 10µA                               | V BATT - 0.1       | V BATT             |                    | V                  |
| RESET to CE OUT Delay                       |                    | V CC falling                                          | V CC falling                                          |                    | 28                 |                    | µs                 |
| MANUAL RESET INPUT                          | MANUAL RESET INPUT | MANUAL RESET INPUT                                    | MANUAL RESET INPUT                                    | MANUAL RESET INPUT | MANUAL RESET INPUT | MANUAL RESET INPUT | MANUAL RESET INPUT |
| MR Minimum Pulse Input                      |                    |                                                       |                                                       | 1                  |                    |                    | µs                 |
| MR-to-RESET Propagation Delay               |                    |                                                       |                                                       |                    | 170                |                    | ns                 |
| MR Threshold                                | V IH               |                                                       |                                                       | 2.4                |                    |                    | V                  |
| MR Threshold                                | V IL               |                                                       |                                                       |                    |                    | 0.8                | V                  |
| MR Pullup Current                           |                    | MR = 0V                                               | MR = 0V                                               | 50                 | 100                | 200                | µA                 |
| BATT OK COMPARATOR                          |                    |                                                       |                                                       |                    |                    |                    |                    |
| BATT OK Threshold                           | V BOK              |                                                       |                                                       | 2.200              | 2.265              | 2.350              | V                  |
| BATT OK Hysteresis                          |                    |                                                       |                                                       |                    | 20                 |                    | mV                 |
| LOGIC OUTPUTS                               |                    |                                                       |                                                       |                    |                    |                    |                    |
| Output Voltage (PFO, BATT OK)               | V OL               | I SINK = 3.2mA                                        | I SINK = 3.2mA                                        |                    |                    | 0.4                | V                  |
| Output Voltage (PFO, BATT OK)               | V OH               | I SOURCE = 5mA                                        | I SOURCE = 5mA                                        | V CC - 1.5         |                    |                    | V                  |
| Output Short-Circuit Current                |                    | Output sink current                                   | Output sink current                                   |                    | 35                 |                    | mA                 |
| Output Short-Circuit Current                | I SC               | Output source current                                 | Output source current                                 |                    | 20                 |                    | mA                 |

Note 2: The supply current drawn by the MAX807 from the battery (excluding IOUT) typically goes to 15µA when (VBATT - 0.1V)

&lt; VCC &lt; VBATT. In most applications, this is a brief period as VCC falls through this region (see

Note 3: '+'= battery discharging current, '-'= battery charging current.

Note 4: WDI is internally connected to a voltage-divider between VCC and GND. If unconnected, WDI is driven to 1.8V (typical), disabling the watchdog function.

- Note 5: Overdrive (VOD) is measured from center of hysteresis band.

Note 6: The chip-enable resistance is tested with VCE IN = VCC/2, and ICE IN = 1mA.

Note 7: The chip-enable propagation delay is measured from the 50% point at CE IN to the 50% point at CE OUT.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Typical Operating Characteristics

).

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(VCC = 5V, VBATT = 2.8V, PFI = 0, no load, TA = +25°C, unless otherwise noted.)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## Typical Operating Characteristics (contiued)

(VCC = 5V, VBATT = 2.8V, PFI = 0, no load, TA = +25°C, unless otherwise noted.)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## Pin Description

|   PIN | NAME     | FUNCTION                                                                                                                                                                                                                                                                                                                                                               |
|-------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | PFI      | Power-Fail Input. When PFI is less than V PFT (2.265V), PFO goes low. Connect to ground when unused.                                                                                                                                                                                                                                                                   |
|     2 | PFO      | Power-Fail Output. This CMOS-logic output goes low when PFI is less than V PFT (2.265V). Valid for V CC ≥ 4V. PFO swings between V CC and GND.                                                                                                                                                                                                                         |
|     3 | V CC     | Input Supply Voltage, nominally +5V. Bypass with a 0.1µF capacitor to GND.                                                                                                                                                                                                                                                                                             |
|     4 | WDI      | Watchdog Input. If WDI remains high or low longer than the watchdog-timeout period (1.6s, typ), WDO goes low. Leave unconnected to disable the watchdog function.                                                                                                                                                                                                      |
|     5 | GND      | Ground                                                                                                                                                                                                                                                                                                                                                                 |
|     6 | MR       | Manual-Reset Input. A logic low on MR asserts reset. Reset remains asserted as long as MR remains low and for 200ms after MR returns high. MR is an active-low input with an internal pullup to V CC . It can be driven using TTL or CMOS logic, or shorted to ground with a switch. Connect to V CC , or leave uncon- nected if not used.                             |
|     7 | LOW LINE | Low-Line Comparator Output. This CMOS-logic output goes low when V CC falls to 52mV above the reset threshold. Use this output to generate an NMI to initiate an orderly shutdown routine when V CC is falling. LOW LINE swings between V CC and GND.                                                                                                                  |
|     8 | RESET    | Active-High Reset Output. RESET is the inverse of RESET. It is a CMOS output that sources and sinks current. RESET swings between V CC and GND.                                                                                                                                                                                                                        |
|     9 | RESET    | Active-Low Reset Output. RESET is triggered and stays low when V CC is below the reset threshold or when MR is low. It remains low 200ms after V CC rises above the reset threshold or MR returns high. RESET has a strong pulldown but a relatively weak pullup, and can be wire-OR connected to logic gates. Valid for V CC ≥ 1V. RESET swings between V CC and GND. |
|    10 | WDO      | Watchdog Output. This CMOS-logic output goes low if WDI remains high or low longer than the watch- dog-timeout period (t WD), and remains low until the next transition of WDI. WDO remains high if WDI is unconnected. WDO is high during reset. WDO swings between V CC and GND. Connect WDO to MR to generate resets during watchdog faults.                        |
|    11 | CE OUT   | Chip-Enable Output. Output to the chip-enable gating circuit. CE OUT is pulled up to the higher of V CC or V BATT , when the chip-enable gate is disabled.                                                                                                                                                                                                             |
|    12 | CE IN    | Chip-Enable Input                                                                                                                                                                                                                                                                                                                                                      |
|    13 | BATT ON  | Battery-On Output. CMOS-logic output/external bypass switch driver. High when OUT is connected to BATT and low when OUT is connected to V CC . Connect the base of a PNP transistor or gate of a PMOS transistor to BATT ON for I OUT requirements exceeding 250mA. BATT ON swings between the higher of V CC and V BATT and GND.                                      |
|    14 | BATT     | Backup-Battery Input. When V CC falls below the reset threshold and V BATT , OUT switches from V CC to BATT. V BATT may exceed V CC . The battery can be removed while the MAX807 is powered-up, provided BATT is bypassed with a 0.1µF capacitor to GND. If no battery is used, connect BATT to ground, and connect V CC and OUT together.                            |
|    15 | BATT OK  | Battery-OK Signal Output. High in normal operating mode when V BATT exceeds V BOK (2.265V). Valid for V CC ≥ 4V.                                                                                                                                                                                                                                                       |
|    16 | OUT      | Output Supply Voltage to CMOS RAM. When V CC exceeds the reset threshold or V CC > V BATT , OUT is connected to V CC . When V CC falls below the reset threshold and V BATT , OUT connects to BATT. Bypass OUT with a 0.1µF capacitor to GND.                                                                                                                          |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## Detailed Description

The MAX807 µP supervisory circuit provides powersupply monitoring, backup-battery switchover, and program execution watchdog functions in µP systems (Figure 1). Use of BiCMOS technology results in an improved 1.5% reset-threshold precision, while keeping supply currents typically below 70µA. The MAX807 is intended for battery-powered applications that require high reset-threshold precision, allowing a wide powersupply operating range while preventing the system from operating below its specified voltage range.

## RESET and RESET Outputs

The MAX807's RESET output ensures that the µP powers up in a known state, and prevents code execution errors  during  power-down and brownout conditions. It accomplishes this by resetting the µP, terminating program execution when VCC dips below the reset threshold or MR is pulled low. Each time RESET is asserted it stays low for the 200ms reset timeout period, which is set by an internal timer to ensure the µP has adequate time to return to an initial state. Any time VCC goes below the reset threshold before the reset-timeout period is completed, the internal timer restarts. The watchdog timer can also initiate a reset if WDO is connected to MR (see the Watchdog Input section).

Figure 1. Block Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

Figure 2a. Timing Diagram, VCC Rising

<!-- image -->

The RESET output is active low and implemented with a strong pulldown/relatively weak pullup structure. It is guaranteed to be a logic low for 0 &lt; VCC &lt; VRST, provided VBATT is greater than 2V. Without a backup battery, RESET is guaranteed valid for VCC ≥ 1. It typically sinks 3.2mA at 0.1V saturation voltage in its active state.

The RESET output is the inverse of the RESET output; it both sources and sinks current and cannot be wire-OR connected. Figure 2a shows a timing diagram with VCC rising and Figure 2b shows VCC falling.

## Manual Reset Input

Many µP-based products require manual-reset capability  to  allow  an  operator  or  test  technician  to  initiate  a reset. The Manual Reset (MR) input permits the generation of a reset in response to a logic low from a switch, WDO, or external circuitry. Reset remains asserted while MR is low, and for 200ms after MR returns high.

MR has an internal 50µA to 200µA pullup current, so it can be left open if it is not used. MR can be driven with TTL or CMOS-logic levels, or with open-drain/collector outputs. Connect a normally open momentary switch from MR to GND to create a manual-reset function; external debounce circuitry is not required. If MR is driven from long cables or if the device is used in a noisy environment, connect a 0.1µF capacitor from MR to ground to provide additional noise immunity. As shown in  Figure  3,  diode-ORed connections can be used to allow manual resets from multiple sources. Figure 4 shows the reset timing.

<!-- image -->

Figure 2b. Timing Diagram, VCC Falling

<!-- image -->

Figure 3. Diode 'OR' Connections Allow Multiple Reset Sources to Connect to MR

<!-- image -->

## Watchdog Timer

## Watchdog Input

The watchdog circuit monitors the µP's activity. If the µP does not toggle the watchdog input (WDI) within 1.6s, WDO goes low. The internal 1.6s timer is cleared and WDO returns high when reset is asserted or when a  transition  (low-to-high  or  high-to-low)  occurs  at  WDI while RESET is high. As long as reset is asserted, the timer remains cleared and does not count. As soon as reset is  released,  the  timer  starts  counting  (Figure  5). Supply current is typically reduced by 10µA when WDI is at a valid logic level.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

Figure 4. Manual-Reset Timing Diagram

<!-- image -->

## Watchdog Output

WDO remains high if there is a transition or pulse at WDI during the watchdog-timeout period. WDO goes low if no transition occurs at WDI during the watchdogtimeout period. The watchdog function is disabled and WDO is a logic high when VCC is below the reset threshold or WDI is an open circuit. To generate a system reset on every watchdog fault, diode-OR connect WDO to MR (Figure 6). When a watchdog fault occurs in this mode, WDO goes low, which pulls MR low, causing a reset pulse to be issued. As soon as reset is asserted, the watchdog timer clears and WDO returns high. With WDO connected to MR, a continuous high or low on WDI will cause 200ms reset pulses to be issued every 1.6s.

Figure 5. Watchdog Timing Relationship

<!-- image -->

## Chip-Enable Signal Gating

The MAX807 provides internal gating of chip-enable (CE) signals to prevent erroneous data from corrupting the CMOS RAM in the event of a power failure. During normal operation, the CE gate is enabled and passes all  CE  transitions.  When reset is asserted, this path becomes disabled, preventing erroneous data from corrupting the CMOS RAM. The MAX807 uses a series transmission gate from the Chip-Enable Input (CE IN) to the Chip-Enable Output (CE OUT) (Figure 1).

The 8ns (max) chip-enable propagation from CE IN to CE OUT enables the MAX807 to be used with most µPs.

## Chip-Enable Input

CE IN is high impedance (disabled mode) while RESET is asserted. During a power-down sequence when VCC passes the reset threshold, the CE transmission gate disables and CE IN becomes high impedance 28µs after  reset  is  asserted  (Figure  7).  During  a  power-up sequence, CE IN remains high impedance (regardless of CE IN activity) until reset is deasserted following the reset-timeout period.

In the high-impedance mode, the leakage currents into this input are ±1µA (max) over temperature. In the lowimpedance mode, the impedance of CE IN appears as a 75 Ω resistor in series with the load at CE OUT.

The propagation delay through the CE transmission gate depends on both the source impedance of the drive to CE IN and the capacitive loading on CE OUT

Figure 6. Generating a Reset on Each Watchdog Fault

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

Figure 7. Reset and Chip-Enable Timing

<!-- image -->

(see the Chip-Enable Propagation Delay vs. CE OUT Load Capacitance graph in the Typical Operating Characteristics ).  The  CE propagation delay is production  tested  from  the  50%  point  on  CE IN to the 50% point on CE OUT using a 50 Ω driver and 50pF of load capacitance (Figure 8). For minimum propagation delay, minimize the capacitive load at CE OUT and use a low output-impedance driver.

## Chip-Enable Output

In the enabled mode, the impedance of CE OUT is equivalent to 75 Ω in series with the source driving CE IN. In the disabled mode, the 75 Ω transmission gate is off and CE OUT is actively pulled to the higher of VCC or VBATT. This source turns off when the transmission gate is enabled.

## Low-Line Comparator

The low-line comparator monitors VCC with a threshold voltage typically 52mV above the reset threshold, with 13mV of hysteresis. Use LOW LINE to provide a nonmaskable interrupt (NMI) to the µP when power begins to fall to initiate an orderly software shutdown routine.

In most battery-operated portable systems, reserve energy in the battery provides ample time to complete the shutdown routine once the low-line warning is encountered, and before reset asserts. If the system must contend with a more rapid VCC fall time-such as when the main battery is disconnected, a DC-DC converter shuts down, or a high-side switch is opened during normal operation-use capacitance on the VCC line to provide time to execute the shutdown routine (Figure 9). First calculate the worst-case time required for the system to perform its shutdown routine. Then, with the

<!-- image -->

Figure 8. CE Propagation Delay Test Circuit

<!-- image -->

Figure 9. Using LOW LINE to Provide a Power-Fail Warning to the µP

<!-- image -->

worst-case shutdown time, the worst-case load current, and the minimum low-line to reset threshold (VLR(min)), calculate the amount of capacitance required to allow the shutdown routine to complete before reset is asserted:

<!-- formula-not-decoded -->

where tSHDN is the time required for the system to complete the shutdown routine, and includes the VCC to low-line propagation delay; and where ILOAD is the current  being drained from the capacitor, VLR is the lowline to reset threshold.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

Figure 10. Using the Power-Fail Comparator to Monitor an Additional Power Supply: a) VIN is Negative, b) VIN is Positive

<!-- image -->

Figure 11. a) If the preregulated supply is inaccessible, LOW LINE generates the NMI for the µP. b) Use PFO to generate the µP NMI if the preregulated supply is accessible.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power-Fail Comparator

PFI is  the  noninverting  input  to  an  uncommitted  comparator. If PFI is less than VPFT (2.265V), PFO goes low. The power-fail comparator is intended to monitor the preregulated input of the power supply, providing an early  power-fail  warning so software can conduct an orderly shutdown. It can also be used to monitor supplies other than 5V. Set the power-fail threshold with a resistor-divider, as shown in Figure 10.

## Power-Fail Input

PFI is the input to the power-fail comparator. The typical comparator delay is 14µs from VIL to VOL (power failing), and 32µs from VIH to VOH (power being restored). If unused, connect this input to ground.

## Power-Fail Output

The Power-Fail Output (PFO) goes low when PFI goes below VPFT. It typically sinks 3.2mA with a saturation voltage of 0.1V. With PFI above VPFT, PFO is actively pulled to VCC. Connecting PFI through a voltagedivider to a preregulated supply allows PFO to generate an NMI as the preregulated power begins to fall (Figure 11b). If the preregulated supply is inaccessible, use LOW LINE to generate the NMI (Figure 11a). The LOW LINE threshold is typically 52mV above the reset threshold (see the Low-Line Comparator section).

<!-- image -->

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## Table 1. Input and Output Status in Battery-Backup Mode

|   PIN | NAME     | FUNCTION                                                                                                    |
|-------|----------|-------------------------------------------------------------------------------------------------------------|
|     1 | PFI      | The power-fail comparator remains active in battery-backup mode for V CC ≥ 4V.                              |
|     2 | PFO      | The power-fail comparator remains active in battery-backup mode for V CC ≥ 4V. Below 4V, PFO is forced low. |
|     3 | V CC     | Battery switchover comparator monitors V CC for active switchover.                                          |
|     4 | WDI      | WDI is ignored and goes high impedance                                                                      |
|     5 | GND      | Ground-0V reference for all signals                                                                         |
|     6 | MR       | MR is ignored                                                                                               |
|     7 | LOW LINE | Logic low                                                                                                   |
|     8 | RESET    | Logic high; the open-circuit output voltage is equal to V CC .                                              |
|     9 | RESET    | Logic low                                                                                                   |
|    10 | WDO      | Logic high. The open-circuit output voltage is equal to V CC .                                              |
|    11 | CE OUT   | Logic high. The open-circuit output voltage is equal to V BATT .                                            |
|    12 | CE IN    | High impedance                                                                                              |
|    13 | BATT ON  | Logic high. The open-circuit output voltage is equal to V BATT .                                            |
|    14 | BATT     | Supply current is 1µA maximum for V BATT ≤ 2.8V.                                                            |
|    15 | BATT OK  | Logic high when V BATT exceeds 2.285V. Valid for V CC ≥ 4V. Below 4V, BATT OK is forced low.                |
|    16 | OUT      | OUT is connected to BATT through two internal PMOS switches in series.                                      |

Figure 12. VCC and BATT-to-OUT Switch

<!-- image -->

## Battery-Backup Mode

Battery backup preserves the contents of RAM in the event of a brownout or power failure. With a backup battery installed at BATT, the MAX807 automatically switches RAM to backup power when VCC falls. Two conditions are required for switchover to battery-backup mode: 1) VCC must be below the reset threshold; 2) VCC must be below VBATT. Table 1 lists the status of inputs and outputs during battery-backup mode.

<!-- image -->

## Backup-Battery Input

The BATT input is similar to VCC, except the PMOS switch is much smaller. This input is designed to conduct up to 20mA to OUT during battery backup. The on-resistance of the PMOS switch is approximately 13 Ω .  Figure  12  shows the two series pass elements between the BATT input and OUT that facilitate UL approval. VBATT can exceed VCC during normal operation without causing a reset.

## Output Supply Voltage

The output supply (OUT) transfers power from VCC or BATT to the µP, RAM, and other external circuitry. At the maximum source current of 250mA, VOUT will typically be 260mV below VCC. Decouple this terminal with a 0.1µF capacitor.

## BATT ON Output

The battery on (BATT ON) output indicates the status of the internal battery switchover comparator, which controls  the  internal  VCC and BATT switches. For VCC greater than VBATT (ignoring the small hysteresis effect), BATT ON typically sinks 3.2mA at 0.4V. In battery-backup mode, this output sources approximately 5mA. Use BATT ON to indicate battery switchover status, or to supply gate or base drive for an external pass transistor for higher current applications (see the Typical Operating Circuit ).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## BATT OK Output

The BATT OK comparator monitors the backup battery voltage, comparing it with a 2.265V reference (VCC ≥ 4V). BATT OK remains high as long as the backup battery  voltage  remains above 2.265V, signaling that the backup battery has sufficient voltage to maintain the memory of static RAM. When the battery voltage drops below 2.265V, the BATT OK output drops low, signaling that the backup battery needs to be changed.

## Applications Information

The MAX807 is not short-circuit protected. Shorting OUT to ground, other than power-up transients such as charging a decoupling capacitor, may destroy the device. If long leads connect to the IC's inputs, ensure that  these lines are free from ringing and other conditions that would forward bias the IC's protection diodes.

There are two distinct modes of operation:

- 1) Normal Operating Mode, with all circuitry powered up. Typical supply current from VCC is 70µA, while only leakage currents flow from the battery.
- 2) Battery-Backup Mode, where VCC is below VBATT and VRST. The supply current from the battery is typically less than 1µA.

## Using SuperCaps or MaxCaps with the MAX807

BATT has the same operating voltage range as VCC, and the battery-switchover threshold voltage is typically VBATT when VCC is decreasing or VBATT + 0.06V when VCC is increasing. This hysteresis allows use of a

Figure 13. SuperCap or MaxCap on BATT

<!-- image -->

SuperCap (e.g., order of 0.47F) and a simple charging circuit as a backup source (Figure 13). Since VBATT can exceed VCC while VCC is above the reset threshold, there are no special precautions when using these µP supervisors with a SuperCap.

## Alternative Chip-Enable Gating

Using memory devices with CE and CE inputs allows the MAX807 CE loop to be bypassed. To do this, connect CE IN to ground, pull up CE OUT to OUT, and connect CE OUT to the CE input of each memory device (Figure 14). The CE input of each part then connects directly to the chip-select logic, which does not have to be gated by the MAX807.

## Adding Hysteresis to the Power-Fail Comparator

The power-fail comparator has a typical input hysteresis  of  20mV. This is sufficient for most applications where a power-supply line is being monitored through an external voltage-divider (Figure 10).

Figure 15 shows how to add hysteresis to the power-fail comparator. Select the ratio of R1 and R2 such that PFI sees 2.265V when VIN falls to the desired trip point (VTRIP). Resistor R3 adds hysteresis. It will typically be an order of magnitude greater than R1 or R2. The current through R1 and R2 should be at least 1µA to ensure that the 25nA (max) PFI input current does not shift  the  trip  point.  R3  should  be  larger  than  10k Ω to prevent it from loading down the PFO pin. Capacitor C1 adds additional noise rejection.

Figure 14. Alternate CE Gating

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## Backup-Battery Replacement

The backup battery may be disconnected while VCC is above the reset threshold, provided BATT is bypassed with  a  0.1µF  capacitor  to  ground.  No  precautions  are necessary to avoid spurious reset pulses.

## Negative-Going VCC Transients

While issuing resets to the µP during power-up, powerdown, and brownout conditions, these supervisors are relatively immune to short-duration negative-going VCC transients (glitches). It  is  usually  undesirable  to  reset the µP when VCC experiences only small glitches.

The Typical Operating Characteristics show Maximum Transient Duration vs. Reset Comparator Overdrive, for which reset pulses are not generated. The graph was produced using negative-going VCC pulses, starting at 5V and ending below the reset threshold by the magnitude indicated (reset comparator overdrive). The graph shows the maximum pulse width that a negative-going VCC transient may typically have without causing a reset pulse to be issued. As the amplitude of the transient increases (i.e., goes farther below the reset threshold), the maximum allowable pulse width decreases.

Typically, a VCC transient that goes 40mV below the reset threshold and lasts for 3µs or less will not cause a reset pulse to be issued.

Figure 15. Adding Hysteresis to the Power-Fail Comparator

<!-- image -->

Figure 16. Watchdog Flow Diagram

<!-- image -->

A 0.1µF bypass capacitor mounted close to the VCC pin provides additional transient immunity.

## Watchdog Software Considerations

To help the watchdog timer keep a closer watch on software execution, you can use the method of setting and resetting the watchdog input at different points in the program, rather than 'pulsing' the watchdog input highlow-high or low-high-low. This technique avoids a 'stuck' loop where the watchdog timer continues to be reset within the loop, keeping the watchdog from timing out.

Figure 16 shows an example flow diagram where the I/O driving the watchdog input is set high at the beginning of the program, set low at the beginning of every subroutine or loop, then set high again when the program returns to the beginning. If the program should 'hang' in any subroutine, the I/O is continually set low and the watchdog timer is allowed to time out, causing a reset or interrupt to be issued.

## Maximum VCC Fall Time

The VCC fall time is limited by the propagation delay of the battery switchover comparator and should not exceed 0.03V/µs. A standard rule for filter capacitance on most regulators is on the order of 100µF per amp of current. When the power supply is shut off or the main battery is  disconnected, the associated initial VCC fall rate  is  just  the  inverse  or  1A  /  100µF  =  0.01V/µs.  The VCC fall rate decreases with time as VCC falls exponentially,  which  more  than  satisfies  the  maximum  fall-time requirement.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Full-Featured µP Supervisory Circuit with ±1.5% Reset Accuracy

## Typical Operating Circuit

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT:  984

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->

## Ordering Information

| PART †     | TEMP RANGE      | PIN-PACKAGE    |
|------------|-----------------|----------------|
| MAX807_CPE | 0°C to +70°C    | 16 Plastic DIP |
| MAX807_CUE | 0°C to +70°C    | 16 TSSOP       |
| MAX807_CWE | 0°C to +70°C    | 16 Wide SO     |
| MAX807_EPE | -40°C to +85°C  | 16 Plastic DIP |
| MAX807_EUE | -40°C to +85°C  | 16 TSSOP       |
| MAX807_EWE | -40°C to +85°C  | 16 Wide SO     |
| MAX807_MJE | -55°C to +125°C | 16 CERDIP      |

† This part offers a choice of reset threshold voltage. From the table below, select the suffix corresponding to the desired threshold and insert it into the blank to complete the part number.

Devices in PDIP, SO and TSSOP packages are available in both leaded and lead-free packaging. Specify lead free by adding the + symbol at the end of the part number when ordering. Lead free not available for CERDIP package.

| SUFFIX   | RESET THRESHOLD (V)   | RESET THRESHOLD (V)   | RESET THRESHOLD (V)   |
|----------|-----------------------|-----------------------|-----------------------|
| SUFFIX   | MIN                   | TYP                   | MAX                   |
| L        | 4.60                  | 4.675                 | 4.75                  |
| N        | 4.50                  | 4.575                 | 4.65                  |
| M        | 4.35                  | 4.425                 | 4.50                  |