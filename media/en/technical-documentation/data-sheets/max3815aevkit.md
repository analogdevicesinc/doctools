<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX3815A Evaluation Kit for HDMI Cables

## General Description

The  MAX3815A  evaluation  kit  (EV  kit)  is  an  assembled  demonstration  board  that  allows  in-system  evaluation of the MAX3815A TMDS M cable equalizer and the MAX3816A DDC extender. The input and output connections  are  made  through  Molex  HDMI™  connectors  for direct connection to HDMI cables.

The  DDC  signals  SDA  and  SCL  are  assisted  by  the MAX3816A.  Hot-plug  detect,  +5V,  DDC/CEC  ground, and CEC simply pass through the board.

Power is delivered to the board through an external wallplug transformer, which is included with this EV kit.

## Ordering Information

| PART               | TYPE   |
|--------------------|--------|
| MAX3815AEVKIT-HDMI | EV Kit |

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                |
|----------------------|-------|--------------------------------------------|
| C1                   |     1 | 0.033 F F Q 10% ceramic capacitor (0402)   |
| C2-C9                |     8 | 0.1 F F Q 10% ceramic capacitors (0402)    |
| C11, C12             |     2 | 2.2 F F Q 20% tantalum capacitors (B case) |
| C13, C14             |     2 | 10 F F Q 10% ceramic capacitors (0805)     |
| D1, D2               |     2 | Red LEDs                                   |
| J1, J2               |     2 | HDMI connectors Molex 500254-1927          |
| J3                   |     1 | 2.5mm power jack CUI PJ-002B               |
| J4, J5               |     2 | Test points                                |
| L1                   |     1 | Ferrite bead (0603) Murata BLM18HG102      |
| P1                   |     1 | 5k I dial potentiometer                    |
| Q1                   |     1 | pnp transistor (SOT23) Zetex FMMT591A      |
| R1, R10, R11, R18    |     0 | Not installed, resistors                   |
| R2, R3, R4, R20, R21 |     5 | 4.7k I Q 5% resistors (0402)               |

TMDS is a registered trademark of Silicon Image, Inc.

HDMI is a trademark of HDMI Licensing, LLC.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| R7, R8        |     2 | 200 I Q 5% resistors (0402)                                                                  |
| R12           |     1 | 4.99k I Q 1% resistor (0402)                                                                 |
| R13-R16       |     4 | 267 I Q 1% resistors (0402)                                                                  |
| R17, R19      |     2 | 10k I Q 5% resistors (0402)                                                                  |
| R22, R23      |     2 | 3.3k I Q 5% resistors (0402)                                                                 |
| SW1, SW2, SW4 |     3 | SPDT switches                                                                                |
| U1            |     1 | TMDS digital video equalizer for DVI/HDMI cables (48 TQFP-EP*) Maxim MAX3815ACCM+            |
| U2            |     1 | I 2 C 2-wire extender for DDC in DVI, HDMI, and VGA interfaces Maxim MAX3816ACUE+ (16 TSSOP) |
| U3            |     1 | 20 I , 300MHz bandwidth, dual SPDT analog switch (10 F MAX M ) Maxim MAX4719EUB+             |
| U4            |     1 | Low-dropout, 300mA linear regulator (8 F MAX) Maxim MAX8860EUA33+                            |
| -             |     1 | PCB: MAX3815A-HDMI EVKIT+ REV A                                                              |

## Features

- S 2.25Gbps, HDMI 1.3 Deep Color Operation
- S Extends 2.25Gbps TMDS Interface Length 0 to 35 Meters Over HDMI Cable, 24 AWG 0 to 22 Meters Over HDMI Cable, 28 AWG
- S Extends 1.65Gbps TMDS Interface Length 0 to 40 Meters Over HDMI Cable, 24 AWG 0 to 28 Meters Over HDMI Cable, 28 AWG
- S +3.3V Power-Supply Operation
- S Includes Wall-Plug Power Supply
- S Molex HDMI Connectors
- S Fully Assembled and Tested

1

## MAX3815A Evaluation Kit for HDMI Cables

## Component Suppliers

| SUPPLIER             | PHONE        | WEBSITE         |
|----------------------|--------------|-----------------|
| AVX Corporation      | 843-946-0238 | www.avxcorp.com |
| Zetex Semiconductors | 631-543-7100 | www.zetex.com   |

Note: Indicate that you are using the MAX3815A when contacting these component suppliers.

## Quick Start

For evaluation of the MAX3815A and MAX3816A, configure the EV kit as follows:

- 1)    Connect  the  included  wall-plug  power  supply  to the power jack at J3. Supply requirements: +5VDC, 300mA or greater, 2.5mm plug.
- 2)    If no cable is attached at J2 (CABLE INPUT), the red LED at D1 should be illuminated (CLK LOSS). This indicates that no TMDS clock signal is detected by the MAX3815A.
- 3)    Set  the  equalizer  to  automatic  equalization  by  setting  SW4  (EQ  CONTROL)  to  the  rightmost  position (AUTO).
- 4)    Enable the MAX3816A by setting SW1 to the leftmost position (EN).
- 5)    Set the MAX3816A to parallel mode (PAR) by setting SW2 to the leftmost position. Refer to the MAX3816A IC  data  sheet  for  more  information  on  operational modes.
- 6)    Connect an HDMI source to J1 (CABLE INPUT) and an HDMI monitor or HDMI receiver to J2 (OUTPUT).
- 7)    Once  the  HDMI  source has begun transmitting, the red  LED  (CLK  LOSS)  is  no  longer  illuminated.  This indicates  that  the  MAX3815A  is  sensing  an  active TMDS clock signal.
- 8)    To manually set equalization boost on the MAX3815A, set switch SW4 to the leftmost position. Use potentiometer P1 to adjust the boost level. Turn the potentiometer clockwise to increase boost for long cables and  counter  clockwise  to  decrease  boost  for  short cables.

## Table 1. Adjustment and Control Descriptions (see the Quick Start section first)

| COMPONENT   | NAME            | FUNCTION                                                                                                                                                                                                                                                                                                                                       |
|-------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1          | CLK LOSS        | This LED turns on when the MAX3815A does not detect a TMDS clock signal.                                                                                                                                                                                                                                                                       |
| D2          | POWER           | This LED turns on when power is supplied to the EV kit.                                                                                                                                                                                                                                                                                        |
| J3          | -               | 2.5mm power supply jack for wall-plug AC-DC transformer.                                                                                                                                                                                                                                                                                       |
| J4          | +5V             | If the plug-in DC power supply is not used, a +5V power supply can be connected at J4 (+5V) and J5 (GND).                                                                                                                                                                                                                                      |
| J5          | GND             | See above.                                                                                                                                                                                                                                                                                                                                     |
| P1          | MANUAL EQ SET   | When manual control of the equalizer has been selected using SW4, the level of equalization can be controlled using P1. Turning the potentiometer clockwise increases the amount of high-frequency boost applied to the input signal. Turning the potentiometer counterclockwise reduces the high-frequency boost applied to the input signal. |
| SW1         | MAX3816A ENABLE | This switch enables/disables the MAX3816A. If the MAX3816A is disabled, SW2 (MAX3816A CONFIG) should be set to parallel mode (PAR) in order for the DDC signals to pass through the board.                                                                                                                                                     |
| SW2         | MAX3816A CONFIG | This switch configures the MAX3816A's MODE pin and the routing of the SDA and SCL signals through the board. In parallel mode (PAR), the signals pass through the board as well as connect to the MAX3816A. Refer to the MAX3816A IC data sheet for more information on parallel (PAR) and series (SER) modes.                                 |
| SW4         | EQ CONTROL      | Slide the switch to the left (MANUAL) to manually control the level of equalization of the MAX3815A. Slide it to the right (AUTO) to have the MAX3815A automatically control the level of equalization.                                                                                                                                        |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3815A Evaluation Kit for HDMI Cables

<!-- image -->

Figure 1. MAX3815A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3815A Evaluation Kit for HDMI Cables

Figure 2. MAX3815A EV Kit Component Placement Guide-Component Side

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3815A Evaluation Kit for HDMI Cables

Figure 3. MAX3815A EV Kit PCB Layout-Top Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3815A Evaluation Kit for HDMI Cables

Figure 4. MAX3815A EV Kit PCB Layout-Ground Plane

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3815A Evaluation Kit for HDMI Cables

<!-- image -->

Figure 5. MAX3815A EV Kit PCB Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3815A Evaluation Kit for HDMI Cables

Figure 6. MAX3815A EV Kit PCB Layout-Solder Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3815A Evaluation Kit for HDMI Cables

Figure 7. MAX3815A EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

9