<!-- lastmod 2022-08-03 -->
## General Description

The MAX9940 evaluation kit (EV kit) is an assembled and tested PCB used to evaluate the MAX9940 highvoltage signal-line protector for microcontroller ports. The MAX9940 EV kit demonstrates that microcontroller ports are protected against high-voltage faults.

The EV kit comes with a MAX9940AXK+ installed.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1, C7, C9    |     3 | 10µF ±10%, 16V X5R ceramic capacitors (0805) KEMET C0805C106K4PACTU |
| C2, C3, C4    |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K    |
| C8            |     1 | 1µF ±10%, 16V X5R ceramic capacitor (0603) TDK C1608X5R1C105K       |
| C5, C6        |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J   |
| D1            |     1 | Green LED (0603)                                                    |
| D2, D3, D4    |     3 | Red LEDs (0603)                                                     |
| D5            |     0 | Not installed, Schottky diode (3 SOT23) Fairchild BAT54C            |
| H1            |     0 | Not installed, 2 x 5-pin JTAG header                                |
| JU1           |     1 | 3-pin header                                                        |
| R1            |     1 | 2k ±5% resistor (0603)                                              |

<!-- image -->

## MAX9940 Evaluation Kit

## Features

- ♦ Output Connection to 1-Wire ® Device (DS2413)
- ♦ Pushbutton that Initiates High-Voltage Fault
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9940EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| R2, R3        |     2 | 220 ±5% resistors (0603)                                      |
| R4            |     1 | 3k ±5% resistor (0603)                                        |
| R5            |     0 | Not installed, resistor (0603)                                |
| SW1, SW2, SW3 |     3 | Pushbutton switches                                           |
| U1            |     1 | High-voltage signal-line protector (5 SC70) Maxim MAX9940AXK+ |
| U2            |     1 | Microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+              |
| U3            |     1 | LDO regulator (5 SC70) Maxim MAX8511EXK25+                    |
| U4            |     1 | Addressable switch (6 TSOC) Maxim DS2413P+                    |
| Y1            |     1 | 16MHz crystal Hong Kong X'tals SSM1600000E18FAF               |
| -             |     1 | Shunt                                                         |
| -             |     1 | PCB: MAX9940 Evaluation Kit+                                  |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Hong Kong X'tals Ltd.                  | 852-35112388 | www.hongkongcrystal.com     |
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9940 when contacting these component suppliers.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

## MAX9940 Evaluation Kit

## Quick Start

## Recommended Equipment

- 3.3V DC power supply
- 28V DC power supply

## Procedure

The MAX9940 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Connect the 3.3V DC power supply to the VCC and GND pads on the EV kit.
- 2) Connect the 28V DC power supply to the FAULT and GND pads on the EV kit.
- 3) Verify that a shunt is installed in the 1-2 position on jumper JU1.
- 4) Turn on both supplies.
- 5) Press the START pushbutton (SW2) momentarily and observe as the green LED (D1) continuously turns on and off every 500ms for 30 cycles.
- 6) While the green LED is still blinking, press the FAULT pushbutton (SW1) and observe as the red LEDs (D2, D3, and D4) turn on. Once SW1 is deactivated,  the  red  LEDs  turn  off  and  the  green  LED continues blinking until it reaches the end of its sequence.

## Table 1. VCC Selection (JU1)

| SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                              |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2*             | Connects the MAX9940 to the +3.3V supply. Before changing shunt positions, press the STOP pushbutton (SW3).                                                                                                                                                                                                                                                              |
| 2-3              | Enables the MAX9940 using the MAXQ2000's GPIO pin, which is used for power saving. Power is only applied when the START pushbutton (SW2) is pressed. Power is disabled when the MAXQ2000 is done communicating with the DS2413. Before changing shunt positions, press the STOP pushbutton (SW3). Note: The MAX9940 can withstand fault voltages even when its V CC = 0. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The MAX9940 EV kit is an assembled and tested PCB used to evaluate the MAX9940 high-voltage signal-line protector for microcontroller ports. The MAX9940 EV kit demonstrates that microcontroller ports are protected against high-voltage faults.

## START Pushbutton

Press the START pushbutton (SW2) to start communicating with the DS2413, dual-channel addressable switch. The on-board microcontroller commands the DS2413 to continuously blink the green LED for 30 cycles.

## STOP Pushbutton

Press the STOP pushbutton (SW3) to stop communicating with the DS2413. The green LED should stop blinking if  the  STOP pushbutton is pressed. If JU1 is in the 2-3 position, then the MAX9940 is also disabled.

## FAULT Pushbutton

Press the FAULT pushbutton (SW1) while the microcontroller is communicating with the DS2413. The red LEDs indicate that a voltage is applied to the EXT pin of the MAX9940.

The absolute maximum voltage of the DATA signal of the microcontroller (U2) is specified to be (VDDIO + 0.5)V, i.e., 3.8V.

When the MAX9940 detects a voltage greater than (VCC + 0.3)V, it automatically turns off, presenting the high voltage fault signal on its EXT pin from appearing on the DATA signal line, thus protecting the microcontroller from damage.

<!-- image -->

## MAX9940 Evaluation Kit

Figure 1a. MAX9940 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9940 Evaluation Kit

Figure 1b. MAX9940 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX9940 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9940 Evaluation Kit

Figure 3. MAX9940 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9940 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5

## Evaluates:  MAX9940