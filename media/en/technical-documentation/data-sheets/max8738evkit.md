<!-- lastmod 2022-08-04 -->
## General Description

The MAX8738 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX8738 programmable VCOM-adjustment solution for thin-film transistor  (TFT),  liquid-crystal  displays  (LCDs).  The  EV kit  is  designed  to  be  used  as  a  replacement  for  the labor-intensive VCOM-adjustment process usually done by setting potentiometers mechanically. The EV kit includes an optical encoder and a pushbutton that are used to adjust the VCOM voltage and save this voltage setting into the MAX8738's internal EEPROM.

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| C1            |     1 | 0.01µF ±10%, X7R 50V capacitor (0603) TDK C1608X7R1H103K |
| C2-C9         |     8 | 0.1µF ±10%, X7R 50V capacitors (0603) TDK C1608X7R1H104K |
| C10           |     1 | 10µF ±20%, 10V capacitor (1206) TDK X5R C3216X5R1A106M   |
| C11           |     1 | 2.2µF ±10%, X7R 25V capacitor (1206) TDK C3216X7R1E225K  |
| C12, C13      |     2 | 18pF ±5%, 50V C0G capacitors (0603) TDK C1608C0G1H180J   |
| D1-D4         |     4 | Green LEDs Kingbright L934GT                             |
| J1            |     1 | 2 x 5 right-angle receptacle (2mm) Sullins PPWN052FJFN   |
| R1, R2        |     2 | 3.9k Ω ±5% resistors (0603)                              |
| R3            |     1 | 24.9k Ω ±1% resistor (0805)                              |
| R4            |     1 | 51.1k Ω ±1% resistor (0805)                              |
| R5            |     1 | 64.9k Ω ±1% resistor (0805)                              |
| R6, R7        |     2 | 8.2k Ω ±5% resistors (0603)                              |

- ♦ Proven PC Board Layout
- ♦ Optical Encoder for Easy VCOM Adjustments
- ♦ Restores VCOM Settings on Power-Up
- ♦ Momentary Pushbutton for Internal EEPROM Programming
- ♦ LEDs for User Feedback
- ♦ Terminals for External I 2 C Bus Control
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8738EVKIT | 0°C to +70°C | 8 µMAX       |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| R8-R11        |     4 | 150 Ω ±5% resistors (0603)                                   |
| R12-R15       |     4 | 10k Ω ±5% resistors (0603)                                   |
| R16           |     1 | 10 Ω ±5% resistor (0603)                                     |
| SW1           |     1 | 32-position optical encoder Grayhill 61C11-01-08-01          |
| SW2           |     1 | Momentary pushbutton switch OMRON B3S-1000                   |
| U1            |     1 | TFT LCD calibrator (I 2 C interface) MAX8738EUA (8-pin µMax) |
| U2            |     1 | Ultra-high-speed microcontroller DS89C420-ECL (44-pin TQFP)  |
| U3            |     1 | 300mA, LDO, 3.3V regulator MAX8887EZK33-T (5-pin SOT23)      |
| Y1            |     1 | 6MHz crystal Citizen HC49US6.000MABJ                         |
| None          |     1 | MAX8738 EV kit PC board                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

## MAX8738 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                |
|------------|--------------|------------------------|
| Citizen    | 949-428-3700 | www.citizencrystal.com |
| TDK        | 847-803-6100 | www.component.tdk.com  |

Note: Indicate you are using the MAX8738 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 3 power supplies:
- a) 16.1V or higher (up to 28V) at 10mA for VGON
- b) 9V at 10mA for AVDD
- c) 5V at 250mA for VCC
- 1 digital voltmeter (DVM)

## Procedure

## Do not turn on the power supplies until all connections are made:

- 1) Connect the 5V power supply between the VCC and GND pads.
- 2) Connect the 16.1V or higher power supply between the VGON and GND pads.
- 3) Connect the 9V power supply between the AVDD and GND pads.
- 4) Turn on all three power supplies.
- 5) Measure the voltage at VOUT. It should be approximately 3.73V.

## Detailed Description

The MAX8738 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX8738 programmable VCOM-adjustment solution for TFT LCDs. On the PC board, the unbuffered VCOM adjustment signal (VOUT) is available on the VOUT pad.

The EV kit is designed to output a typical VOUT voltage between 3.48V and 3.97V (with AVDD at 9V) with 7-bit resolution. For this, the AVDD voltage should be 9V. If a different  VOUT range is desired or if a different AVDD voltage is used, the user may need to change R3, R4, and R5. The pads for these resistors are designed for standard 0805 case sizes. Refer to the Setting the VCOM Adjustment Range section in the MAX8738 data sheet for instructions about how to select these resistors.

Note that the VGON input voltage must be between 16.1V and 28V to supply the high voltage needed for internal EEPROM programming.

An optical encoder (SW1) is used to send VCOM adjustment commands to the MAX8738. When the user turns the knob on the optical encoder, the on-board microcontroller (U2) sends an I 2 C command byte (0xFF or 0x00) to the MAX8738. Turning the knob clockwise decreases the VOUT voltage, while turning the knob counterclockwise increases the VCOM voltage. As the knob on the optical encoder is turned, a different LED lights indicating the direction of change of the VOUT voltage.

The momentary pushbutton switch (SW2) on the EV kit is used to save the MAX8738's DAC setting to its internal EEPROM. When the button is pressed, the on-board microcontroller (U2) sends an I 2 C command byte (0xAA) to the MAX8738. The LEDs flash on and off quickly, indicating that the DAC setting has been saved.

The MAX8738 supports additional I 2 C command bytes not supported by this EV kit such as 0x55 (reload DAC setting from EEPROM) and 0x11 (program-specific value of the DAC). The SDA and SCL pads on the EV kit can be used to connect to an I 2 C controller where these commands (or any of the commands supported by the MAX8738) can be transmitted.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8738 Evaluation Kit

<!-- image -->

Figure 1. MAX8738 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8738 Evaluation Kit

<!-- image -->

Figure 2. MAX8738 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8738 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8738 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600