<!-- lastmod 2022-08-02 -->
## General Description

The MAX8650 evaluation kit (EV kit) contains a fully assembled and tested circuit using the MAX8650 synchronous PWM step-down controller. The EV kit is designed to operate at 500kHz from a 10V to 24V input and provide an adjustable 3.3V output at up to 15A. It also allows the evaluation of other output voltages in the 0.7V to 5.5V range.

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 10µF ±20%, 25V X5R ceramic capacitors (1210) TDK C3225X5R1E106M                |
| C4            |     1 | 0.01µF ±20%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H103M               |
| C5, C6        |     2 | 0.1µF ±20%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104M               |
| C7            |     1 | 220pF ±5%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H221J                 |
| C8, C17       |     0 | Not installed, ceramic capacitors (0603)                                       |
| C9, C10       |     2 | 150µF ±20%, 4V, 7m Ω low-ESR polymer capacitors (D-case) Panasonic EEFSD0G151R |
| C11, C14      |     2 | 0.47µF ±20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A474M              |
| C12           |     1 | 100pF ±5%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H101J                 |
| C13           |     1 | 4.7µF ±20%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A475M                |

- ♦ Up to 15A Output Current Capability
- ♦ 10V to 24V Input Voltage Range
- ♦ 3.3V Output Voltage (Adjustable 0.7V to 5.5V)
- ♦ 500kHz Switching Frequency
- ♦ Adjustable Output Overvoltage Protection
- ♦ On-Board Selectable Latch-Off or Automatic Recovery
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8650EVKIT | 0°C to +70°C | 24 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C15, C16      |     2 | 1µF ±20%, 25V X5R ceramic capacitors (0603) TDK C1608X5R1E105M    |
| C18           |     0 | Not installed, electrolytic capacitor (10mm x 12.5mm)             |
| C19           |     0 | Not installed, polymer capacitor (D-case)                         |
| D1            |     1 | 250mA, 100V switching diode (SOD-123) Central CMHD4448            |
| D2            |     1 | 200mA, 40V Schottky diode (SOD-523) Central CMOSH-4E              |
| JU1           |     1 | 2-pin header                                                      |
| JU2, JU3      |     2 | 3-pin headers                                                     |
| L1            |     1 | 1.2µH, 18A power inductor TOKO FDA1254-1R2M or Cooper HCF1305-1R2 |
| N1            |     1 | n-channel MOSFET (SO-8) Fairchild FDS7296N3                       |
| N2            |     1 | n-channel MOSFET (SO-8) Fairchild FDS7088SN3                      |
| R1            |     1 | 51.1k Ω ±1% resistor (0603)                                       |
| R2            |     1 | 100k Ω ±5% resistor (0603)                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

## MAX8650 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                               |
|---------------|-------|-------------------------------------------|
| R3, R17       |     0 | Not installed, shorted by PC trace (0603) |
| R4, R16       |     0 | Not installed, resistors (0603)           |
| R5            |     1 | 17.4k Ω ±1% resistor (0603)               |
| R6            |     1 | 130k Ω ±1% resistor (0603)                |
| R7            |     1 | 20 Ω ±5% resistor (0603)                  |
| R8            |     1 | 220k Ω ±5% resistor (0603)                |
| R9, R11       |     2 | 7.5k Ω ±1% resistors (0603)               |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Copper                | 561-752-5000 | www.cooperet.com      |
| Fairchild             | 888-522-5372 | www.fairchildsemi.com |
| Panasonic             | 714-373-7366 | www.panasonic.com     |
| TDK                   | 847-803-6100 | www.component.tdk.com |
| TOKO                  | 847-297-0070 | www.tokoam.com        |

Note: Indicate that you are using the MAX8650 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Power supply capable of supplying 10V to 24V at 6A
- Load (up to 15A)
- Voltmeter

## Procedure

The MAX8650 evaluation kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify  that  there  is  a  shunt  across  JU1  (REFIN  = high, internal reference selected).
- 2) Verify that there is a shunt across JU2 pins 2 and 3 (MODE = low, automatic recovery current limit selected).
- 3) Verify that there is a shunt across JU3 pins 1 and 2 (EN = high, output enabled).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                 |
|---------------|-------|-----------------------------|
| R10, R12      |     2 | 28k Ω ±1% resistors (0603)  |
| R13           |     1 | 39.2k Ω ±1% resistor (0603) |
| R14           |     1 | 2.4k Ω ±5% resistor (0603)  |
| R15           |     1 | 3.9k Ω ±5% resistor (0603)  |
| U1            |     1 | MAX8650EEG+ (24-pin QSOP)   |
| -             |     3 | Shunts                      |
| -             |     1 | MAX8650 EV kit PC board     |

- 4) Connect a voltmeter and load (if any) from OUT to GND closest to the OUT pads.
- 5) Connect a 10V to 24V supply to the pads marked PIN and GND closest to the PIN pads.
- 6) Turn on the power supply and verify that the output voltage is 3.3V.

## Detailed Description

## Enable/Shutdown Selection

Jumper JU3 enables or disables the MAX8650. See Table 1 for JU3 settings.

## Table 1. JU3 Settings (EN)

| SHUNT LOCATION    | MAX8650 OUTPUT           |
|-------------------|--------------------------|
| Pin 1-2 (default) | Enabled, V OUT = 3.3V    |
| Pin 2-3           | Disabled (shutdown mode) |

## Current-Limit Operating Mode Selection

JU2 selects between automatic recovery current-limit and latch-off current-limit modes. To restart the EV kit after it latches off, cycle the input supply off then on. Refer to the MAX8650 IC data sheet for details of valley current limit and MODE operation. See Table 2 for JU2 settings.

## Table 2. JU2 Settings (MODE)

| SHUNT LOCATION    | CURRENT-LIMIT MODE   |
|-------------------|----------------------|
| Pin 2-3 (default) | Autorecovery mode    |
| Pin 1-2           | Latch-off mode       |

<!-- image -->

## Reference Input

JU1 provides the options to set the MAX8650 with an internal or an external reference. See Table 3 for JU1 settings.

## Table 3. JU1 Settings (REFIN)

| SHUNT LOCATION      | REFIN PIN                                                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------------------------------------|
| Installed (default) | Connected to AVL, internal reference.                                                                                      |
| Not installed       | Connected to REF_IN pad through a 20 Ω resistor, external reference (connect the external reference signal to REF_IN pad). |

## POK

POK is an open-drain output on the MAX8650 that monitors the output voltage. When the output is above 92% of  its  nominal  regulation  voltage,  POK  is  high  impedance. When the output drops below 89% of its nominal regulation voltage, POK is pulled low. POK is also pulled low when the MAX8650 is shut down. To allow POK to be used as a logic-level output, a 100k Ω pullup resistor from POK to AVL is included in the EV kit.

## EX\_VL

The default setting of the MAX8650 EV kit accepts a 10V to  24V voltage input source. The MAX8650 operates from 4.8V to 28V input. Install a 220µF/35V electrolytic capacitor at C18 for input voltage from 25V to 28V. To

<!-- image -->

## MAX8650 Evaluation Kit

use an external VL, cut open the short on R17. To reduce the power dissipation at high input voltages, an external source can provide the high-side gate-drive current through the EX\_VL pad with a voltage source from 4.5V to 6.5V with the R17 trace cut open.

## Output Voltage

The default output voltage is set at 3.3V. To set the output voltage other than 3.3V, select R9 between 8k Ω and 14k Ω , then calculate R10 with the following equation:

<!-- formula-not-decoded -->

where VFB is 0.7V.

Refer to the MAX8650 data sheet for selecting output inductor, capacitors, and compensation components for optimized performance. If using OVP, make the OVP setting match the new output voltage.

## Frequency Setting and External Synchronization

The switching frequency of the EV kit is set to 500kHz. To change the operating frequency, change the value for R1. Refer to the Switching Frequency and Synchronization section in the MAX8650 IC data sheet. Recalculate the input and output filter values as well as new compensation values. When using an external synchronization, connect the external clock to FSY pad. If the signal is present at start, R1 and D1 can be eliminated, replace D1 with a short.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8650 Evaluation Kit

Figure 1. MAX8650 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX8650 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8650 Evaluation Kit

Figure 3. MAX8650 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8650 Evaluation Kit

Figure 4. MAX8650 EV Kit PC Board Layout- Layer 2

<!-- image -->

6

Figure 5. MAX8650 EV Kit PC Board Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8650 Evaluation Kit

Figure 6. MAX8650 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Springer

7