<!-- lastmod 2022-08-04 -->
## General Description

The MAX1709 evaluation kit (EV kit) is a step-up DC-DC switching regulator for 1- to 3-cell battery inputs as well as 2.5V or 3.3V regulated supply inputs. The EV kit accepts a positive input between 0.7V and VOUT and converts it to a higher, pin-selectable output voltage.

Efficiency is up to 87% with output load currents to 4A. This EV kit operates at a fixed 600kHz PWM frequency, allowing the use of a small inductor.

A movable jumper on the EV kit selects either a 3.3V or 5V output voltage. Additional pads on the board accommodate the resistors for output adjustment. This EV kit uses surface-mount components and is fully assembled and tested for quick evaluation.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 150µF, 6.3V low-ESR capacitors Sanyo 6TPB150M or Panasonic EEFUE0J151R                                                               |
| C4, C5        |     2 | 150µF, 6.3V , 15m Ω l ow - E S R cap aci tor s Panasonic EEFUE0J151R                                                                 |
| C6            |     0 | Not installed                                                                                                                        |
| C7            |     1 | 0.22µF ceramic capacitor (1206)                                                                                                      |
| C8            |     1 | 1µF, 16V ceramic capacitor (1206) Taiyo Yuden EMK316BJ105KL TDK C3216X7R1C105M                                                       |
| C9, C10, C12  |     3 | 0.1µF ceramic capacitors (1206)                                                                                                      |
| D1            |     1 | 10A Schottky diode (DPAK) Central Semiconductor CSHD10-45L ON Semiconductor (Motorola) MBRD1035CTL or STM-Microelectronics STPS8L30B |
| JU1, JU2, JU3 |     3 | 2-pin headers                                                                                                                        |
| L1            |     1 | 1µH, 10A power inductor Coilcraft DO3316P-102HC or Coiltronics UP2B-1R0                                                              |
| R1, R2, R3    |     0 | Not installed                                                                                                                        |
| R4            |     1 | 2 Ω ±5% resistor (1206)                                                                                                              |
| R5-R8         |     4 | 1M Ω ±5% resistors (1206)                                                                                                            |
| U1            |     1 | MAX1709EUI 28-pin TSSOP-EP                                                                                                           |
| None          |     3 | Shunts                                                                                                                               |
| None          |     1 | MAX1709 PC board                                                                                                                     |
| None          |     1 | MAX1709EV kit data sheet                                                                                                             |
| None          |     1 | MAX1709 data sheet                                                                                                                   |

## MAXIM

## Component Suppliers

| SUPPLIER                    | PHONE        | FAX          |
|-----------------------------|--------------|--------------|
| Central Semiconductor       | 516-435-1110 | 516-435-1824 |
| Coilcraft                   | 708-639-6400 | 708-639-1469 |
| Coiltronics                 | 561-241-7876 | 561-241-9339 |
| Dale- Vishay                | 402-564-3131 | 402-563-6418 |
| ON Semiconductor (Motorola) | 602-303-5454 | 602-994-6430 |
| Panasonic                   | 714-373-7939 | 714-373-7183 |
| Sanyo                       | 619-661-6835 | 619-661-1055 |
| STM- Microelectronics       | 617-259-0300 | 617-259-9442 |
| Sumida                      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden                 | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1709 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ 0.7V to VOUT Input Voltage Range
- ♦ Pin-Selectable 3.3V or 5V Output Voltage (5V as Shipped)
- ♦ Adjustable Output Voltage (2.5V to 5.5V, External Divider)
- ♦ Up to 4A Output Current
- ♦ 600kHz PWM Operation
- ♦ Internal 10A MOSFET Switch
- ♦ 4µA IC Shutdown Current
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE       |
|--------------|--------------|------------------|
| MAX1709EVKIT | 0°C to +70°C | 28-Pin TSSOP-EP* |

1

## MAX1709 Evaluation Kit

## Quick Start Reference

The MAX1709 EV kit is fully assembled and tested. Follow  these  steps  to  verify  board  operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a voltmeter to the VOUT pad.
- 2) Connect a 3V supply to the VIN pad. Connect ground to the GND pad.
- 3) Remove all the shunts from JU1, JU2, and JU3. Turn on the power supply and verify that the output voltage is  5V.  Refer  to  the  MAX1709  data  sheet  for  output load during startup.
- 4) For other output voltages, refer to the Setting the Output Voltage section in the MAX1709 data sheet for  instructions  on  selecting  feedback  resistors  R1 and R2.

## Table 1. Jumper Functions

| JUMPER   | SHUNT LOCATION   | PIN CONNECTION                                             | MAX1709 OPERATION                                                                                                                                                                                            |
|----------|------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Not installed    | ONB connected to GND                                       | MAX1709 is enabled if ONA = VOUT.                                                                                                                                                                            |
| JU1      | Installed        | ONB connected to VOUT                                      | MAX1709 is disabled if ONA = GND.                                                                                                                                                                            |
| JU2      | Not installed    | ONA connected to GND                                       | MAX1709 is disabled if ONB = VOUT.                                                                                                                                                                           |
| JU2      | Installed        | ONA connected to VOUT                                      | MAX1709 is enabled if ONB = GND.                                                                                                                                                                             |
| JU3      | Not installed    | 3.3 /5 connected to VOUT                                   | VOUT is set to 5V. FB pin must be connected to ground (R2 = short).                                                                                                                                          |
| JU3      | Installed        | 3.3 /5 connected to GND                                    | VOUT is set to 3.3V. FB pin must be connected to ground (R2 = short).                                                                                                                                        |
| JU3      | Installed        | 3.3 /5 connected to GND and resistors R1, R2 are installed | VOUT = adjustable between 2.5V to 5.5V. Refer to the Setting the Output Voltage section in the MAX1709 data sheet for instructions on selecting feedback resistors R1 and R2. Also cut PC trace shorting R2. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

The MAX1709 EV kit provides a pin-selectable 3.3V or 5V output from a 0.7V to VOUT input voltage. The output voltage can also be adjusted with external resistors for voltages between 2.5V and 5.5V.

The MAX1709 includes an internal MOSFET switch with a typical peak current limit of 10A and can deliver loads up to 4A. Connecting an external resistor from SS/LIM to  GND  (R3)  can  also  reduce  the  current  limit. Connecting a capacitor from SS/LIM to GND (C10) sets the soft-start rate.

The EV kit operates at a 600kHz switching frequency and allows the use of a small inductor value. The switching frequency can also be synchronized to an external clock ranging from 350kHz to 1MHz.

## Jumper Selection

Three jumpers on the PC board allow user selection of several configurations. Table 1 lists the jumpers and their functions.

## MAX1709 Evaluation Kit

<!-- image -->

Figure 1. MAX1709 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1709 Evaluation Kit

<!-- image -->

Figure 2. MAX1709 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1709 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1709 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600