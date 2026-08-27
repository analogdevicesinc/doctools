<!-- lastmod 2022-08-02 -->
## General Description

The MAX1708 evaluation kit (EV kit) is a step-up DC-DC switching regulator for 1- to 3-cell battery inputs as well as +2.5V or +3.3V regulated supply inputs. The EV kit accepts a positive input between 0.7V and VOUT, and converts it to a higher, pin-selectable output voltage.

Efficiency is up to 90% with output load currents to 2A. This EV kit operates at fixed 600kHz PWM frequency, allowing the use of a small inductor.

A movable jumper on the EV kit selects either a +3.3V or  +5V output voltage. Additional pads on the board accommodate the resistors for output adjustment. This EV kit uses surface-mount components and is fully assembled and tested for quick evaluation.

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C1, C4        |     0 | Not installed (D case)                                                           |
| C2            |     1 | 150µF, 6.3V low-ESR capacitor (D case) Sanyo 6TPB150M or Panasonic EEFUE0J151R   |
| C3            |     1 | 150µF, 6.3V 15m Ω low-ESR capacitor (D case) Panasonic EEFUE0J151R               |
| C5, C6, C10   |     3 | 0.1µF ceramic capacitors (1206)                                                  |
| C7            |     1 | 0.22µF ceramic capacitor (1206)                                                  |
| C8            |     1 | 1µF, 16V ceramic capacitor (1206) Taiyo Yuden EMK316BJ105KL or TDKC3216X7R1C105M |
| D1            |     1 | 5A Schottky diode (SMC case) Central Semiconductor CMSH5-20 or CMSH5-40          |

<!-- image -->

Features

- ♦ 0.7V to VOUT Input Voltage Range
- ♦ Pin-Selectable +3.3V or +5V Output Voltage (+5V as Shipped)
- ♦ Adjustable Output Voltage (+2.5V to +5.5V, External Divider)
- ♦ Up to 2A Output Current
- ♦ 600kHz PWM Operation
- ♦ Internal 5A MOSFET Switch
- ♦ 1µA IC Shutdown Current
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1708EVKIT | 0 ° C to +70 ° C | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------------------------|
| L1            |     1 | 2.2µH power inductor Coilcraft DO3316P-222HC (unshielded) or Coiltronics UP2B- 2R2 (unshielded) or Sumida CDRH104R-2R5 (2.5µH, shielded) |
| R1, R3        |     0 | Not installed (1206)                                                                                                                     |
| R2            |     0 | Not installed, (short PC trace) (1206)                                                                                                   |
| R4            |     1 | 2 Ω ±5% resistor (1206)                                                                                                                  |
| R5-R8         |     4 | 1M Ω ±5% resistors (1206)                                                                                                                |
| U1            |     1 | MAX1708EEE (16-pinQSOP)                                                                                                                  |
| JU1, JU2, JU3 |     3 | 2-pin headers                                                                                                                            |
| None          |     3 | Shunts                                                                                                                                   |
| None          |     1 | MAX1708 PC board                                                                                                                         |
| None          |     1 | MAX1708 EV kit data sheet                                                                                                                |
| None          |     1 | MAX1708 data sheet                                                                                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX1708 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 |
| Coilcraft             | 847-639-6400 | 847-639-1469 |
| Coiltronics           | 561-752-5000 | 561-742-0134 |
| Panasonic             | 714-373-7334 | 714-373-7323 |
| Sanyo                 | 619-661-6835 | 619-661-1055 |
| Sumida                | 847-545-6700 | 847-545-6720 |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 |
| TDK                   | 847-803-6100 | 847-390-4405 |

Note: Please indicate that you are using the MAX1708 when contacting these component suppliers.

## Quick Start

The MAX1708 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +3V supply to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Remove all the shunts from JU1, JU2, JU3.

## Table 1. Jumper Functions

| JUMPER   | SHUNT LOCATION   | PIN CONNECTION                                               | MAX1708 OPERATION                                                                                                                                                                                                 |
|----------|------------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Not Installed    | ONB connected to GND                                         | MAX1708 is enabled if ONA = V OUT                                                                                                                                                                                 |
| JU1      | Installed        | ONB connected to V OUT                                       | MAX1708 is disabled if ONA = GND                                                                                                                                                                                  |
| JU2      | Not Installed    | ONA connected to GND                                         | MAX1708 is disabled if ONB = V OUT                                                                                                                                                                                |
| JU2      | Installed        | ONA connected to V OUT                                       | MAX1708 is enabled if ONB = GND                                                                                                                                                                                   |
| JU3      | Not Installed    | 3.3 /5 connected to V OUT                                    | V OUT is set to 5V. FB pin must be connected to ground (R2 = short)                                                                                                                                               |
| JU3      | Installed        | 3.3 /5 connected to GND                                      | V OUT is set to 3.3V. FB pin must be connected to ground (R2 = short)                                                                                                                                             |
| JU3      | Installed        | 3.3 /5 connected to GND and resistor R1 and R2 are installed | V OUT = adjustable between +2.5V to +5.5V range. Refer to Setting the Output Voltage in the MAX1708 data sheet for instructions on selecting the feedback resistors R1 and R2. Also cut the PC trace, shorting R2 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 4) Turn on the power supply and verify that the output voltage is 5V. Refer to the MAX1708 data sheet for output load during start up.
- 5) For other output voltages, refer to Setting the Output Voltage in the MAX1708 data sheet for instructions on selecting the feedback resistors R1 and R2.

## Detailed Description

The MAX1708 EV kit provides a pin-selectable +3.3V or +5V output from a +0.7V to VOUT input voltage. The output voltage can also be adjusted with external resistors for voltages between +2.5V to +5.5V.

The MAX1708 includes an internal MOSFET switch with a typical peak current limit of 5A, and which can deliver loads up to 2A. Connecting an external resistor from SS/ILIM to GND (R3) can also reduce the current limit. Connecting a capacitor from SS/ILIM to GND (C6) sets the soft-start rate.

The EV kit operates at 600kHz switching frequency and allows the use of a small inductor value. The switching frequency can also be synchronized to an external clock ranging from 350kHz to 1MHz.

## Jumper Selection

Three jumpers on the PC board allow the user to select several configurations. Table 1 lists the jumpers and their functions.

## MAX1708 Evaluation Kit

<!-- image -->

Figure 1. MAX1708 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1708 Evaluation Kit

<!-- image -->

Figure 2. MAX1708 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1708 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1708 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4