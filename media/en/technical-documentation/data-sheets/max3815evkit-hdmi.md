<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX3815 Evaluation Kit for HDMI Cables

## General Description

The MAX3815 evaluation kit (EV kit) is an assembled demonstration board that allows in-system evaluation of the  MAX3815  TMDS ® cable  equalizer  and  the MAX3816A DDC extender. The input and output connections are made through Molex HDMI™ connectors for direct connection to HDMI cables.

The DDC signals SDA and SCL are assisted by the MAX3816A. Hot-plug detect, +5V, DDC/CEC ground, and CEC simply pass through the board.

Power is delivered to the board through an external wall-plug transformer, which is included with this EV kit.

| DESIGNATION      |   QTY | DESCRIPTION                              |
|------------------|-------|------------------------------------------|
| C1               |     1 | 0.033µF ± 10% ceramic capacitor (0402)   |
| C2-C9            |     8 | 0.1µF ± 10% ceramic capacitors (0402)    |
| C11, C12         |     2 | 2.2µF ± 20% tantalum capacitors (B case) |
| C13, C14         |     2 | 10µF ± 10% ceramic capacitors (0805)     |
| D1, D2           |     2 | Red LEDs                                 |
| J1, J2           |     2 | HDMI connectors Molex 500254-1927        |
| J3               |     1 | 2.5mm power jack CUI PJ-002B             |
| J4, J5           |     2 | Test points                              |
| L1               |     1 | Ferrite bead (0603) Murata BLM18HG102    |
| P1               |     1 | 5k dial potentiometer                    |
| Q1               |     1 | pnp transistor (SOT23) Zetex FMMT591A    |
| R1, R10, R13-R16 |     6 | Not installed                            |
| R2, R3, R4       |     3 | 4.7k ± 5% resistors (0402)               |

TMDS is a registered trademark of Silicon Image, Inc. HDMI is a trademark of HDMI Licensing, LLC. DVI is a trademark of Digital Display Working Group (DDWG). µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Features

- ♦ Extends TMDS Interface Length as Follows 0 to 50 meters over HDMI Cable, 24 AWG STP (Shielded Twisted Pair)

0 to 36 meters over HDMI Cable, 28 AWG STP

0 to 30 meters over HDMI Cable, 30 AWG STP

- ♦ +3.3V Power-Supply Operation
- ♦ Includes Wall-Plug Power Supply
- ♦ Molex HDMI Connectors
- ♦ Fully Assembled and Tested

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX3815EVKIT-HDMI | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| R7, R8        |     2 | 200 ± 5% resistors (0402)                                                                    |
| R11, R18      |     2 | 0 resistors (0402)                                                                           |
| R12           |     1 | 4.99k ± 1% resistor (0603)                                                                   |
| R17, R19      |     2 | 10k ± 5% resistors (0402)                                                                    |
| R20, R21      |     2 | 47k ± 5% resistors (0402)                                                                    |
| R22, R23      |     2 | 3.3k ± 5% resistors (0402)                                                                   |
| SW1, SW2, SW4 |     3 | SPDT switches                                                                                |
| U1            |     1 | TMDS digital video equalizer for DVI™/HDMI cables (48 TQFP) Maxim MAX3815CCM+                |
| U2            |     1 | I 2 C 2-wire extender for DDC in DVI, HDMI, and VGA interfaces Maxim MAX3816ACUE+ (16 TSSOP) |
| U3            |     1 | 20 , 300MHz bandwidth, dual SPDT analog switch (10 µMAX ® ) Maxim MAX4719EUB+                |
| U4            |     1 | Low-dropout, 300mA linear regulator (8 µMAX) Maxim MAX8860EUA33+                             |
| None          |     1 | PCB: MAX3815EVKIT-HDMI Board, Rev B                                                          |

## MAX3815 Evaluation Kit for HDMI Cables

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE         |
|-----------------|--------------|-----------------|
| AVX Corporation | 803-946-0238 | www.avxcorp.com |
| Zetex           | 613-543-7100 | www.zetex.com   |

Note: Indicate that you are using the MAX3815 when contacting these component suppliers.

## Quick Start

For evaluation of the MAX3815 and MAX3816A, configure the EV kit as follows:

- 1) Connect the included wall-plug power supply to the power jack at J3. Supply requirements: +5VDC, 300mA or greater, 2.5mm plug.
- 2) If  no  cable  is  attached  at  J2  (CABLE  INPUT),  the red LED at D1 should be illuminated (CLK LOSS). This indicates that no TMDS clock signal is detected by the MAX3815.
- 3) Set the equalizer to automatic equalization by setting SW4 (EQ CONTROL) to the rightmost position (AUTO).
- 4) Enable the MAX3816A by setting SW1 to the leftmost position (EN).
- 5) Set the MAX3816A to parallel mode (PAR) by setting SW2 to the leftmost position. Refer to the MAX3816A IC data sheet for more information on operational modes.
- 6) Connect an HDMI source to J1 (CABLE INPUT) and an HDMI monitor or HDMI receiver to J2 (OUTPUT).
- 7) Once the HDMI source has begun transmitting, the red LED (CLK LOSS) is no longer illuminated. This indicates that the MAX3815 is sensing an active TMDS clock signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 8) To  manually  set  equalization  boost  on  the MAX3815, set switch SW4 to the leftmost position. Use potentiometer P1 to adjust the boost level. Turn the potentiometer clockwise to increase boost for long cables and counterclockwise to decrease boost for short cables.

## High-Frequency Layout

The following is a list  of  recommendations to maintain good signal integrity with the MAX3815:

- Use controlled impedance transmission lines for the clock and data channels. Make them differentially coupled 100 Ω impedance.
- Use an uninterrupted ground plane below the clock and data transmission lines.
- Do not use vias on the clock and data transmission lines on the input side of the MAX3815.
- Keep the data transmission lines as short as possible.
- Place power-supply decoupling capacitors close to the MAX3815 on pins 1, 4; 5, 8; 9, 12; and 13 and 16.

<!-- image -->

## MAX3815 Evaluation Kit for HDMI Cables

Table 1. Adjustment and Control Descriptions (see Quick Start first)

| COMPONENT   | NAME           | FUNCTION                                                                                                                                                                                                                                                                                                                                       |
|-------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1          | CLK LOSS       | This LED turns on when the MAX3815 does not detect a TMDS clock signal.                                                                                                                                                                                                                                                                        |
| D2          | POWER          | This LED turns on when power is supplied to the EV kit.                                                                                                                                                                                                                                                                                        |
| J3          | -              | 2.5mm power-supply jack for wall-plug AC-DC transformer.                                                                                                                                                                                                                                                                                       |
| J4          | +5V            | If the plug-in DC power supply is not used, a +5V power supply can be connected at J4 (+5V) and J5 (GND).                                                                                                                                                                                                                                      |
| J5          | GND            | See above.                                                                                                                                                                                                                                                                                                                                     |
| P1          | MANUAL EQ SET  | When manual control of the equalizer has been selected using SW4, the level of equalization can be controlled using P1. Turning the potentiometer clockwise increases the amount of high-frequency boost applied to the input signal. Turning the potentiometer counterclockwise reduces the high-frequency boost applied to the input signal. |
| SW1         | MAX3816 ENABLE | This switch enables/disables the MAX3816A. If the MAX3816A is disabled, SW2 (MAX3816 CONFIG) should be set to parallel mode (PAR) in order for the DDC signals to pass through the board.                                                                                                                                                      |
| SW2         | MAX3816 CONFIG | This switch configures the MAX3816A's MODE pin and the routing of the SDA and SCL signals through the board. In parallel mode (PAR), the signals pass through the board as well as connect to the MAX3816A. Refer to the MAX3816A IC data sheet for more information on parallel (PAR) and series (SER) modes.                                 |
| SW4         | EQ CONTROL     | Slide the switch to the left (MANUAL) to manually control the level of equalization of the MAX3815. Slide it to the right (AUTO) to have the MAX3815 automatically control the level of equalization.                                                                                                                                          |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for HDMI Cables

<!-- image -->

Figure 1. MAX3815 EV Kit Schematic

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for HDMI Cables

<!-- image -->

Figure 2. MAX3815 EV Kit PC Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for HDMI Cables

Figure 3. MAX3815 EV Kit PCB Layout-Top Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for HDMI Cables

<!-- image -->

Figure 4. MAX3815 EV Kit PCB Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for HDMI Cables

Figure 5. MAX3815 EV Kit PCB Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for HDMI Cables

<!-- image -->

Figure 6. MAX3815 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for HDMI Cables

Figure 7. MAX3815 EV Kit PC Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600