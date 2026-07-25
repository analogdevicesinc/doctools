<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX3815 Evaluation Kit for DVI Cables

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The  MAX3815  evaluation  kit  (EV  kit)  is  an  assembled demonstration board that provides in-system evaluation of the MAX3815 TMDS® cable equalizer. The input and output  connections  are  made  through  Molex  DVI™ connectors for direct connection to DVI cables.

Single-link  and  dual-link  DVI  cables  can  be  connected but  only  the  single-link  data  path  is  equalized  and passed to the output connector.

In this version of the EV kit, the DDC signals are simply passed through the board. Also passed through are HotPlug  Detect,  +5V,  R,  G,  B,  HSync,  VSync,  and  DDC Ground.

A battery holder is included along with DC-DC conversion  circuitry  to  allow  operation  from  two  AA batteries.  Note:  The  battery  pack  is  for  ease  of  use without  an  external  power  supply.  Operational  time  will be limited when using batteries.

TMDS is a registered trademark of Silicon Image, Inc. DVI is a trademark of Digital Display Working Group.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION               |   QTY | DESCRIPTION                                                     |
|---------------------------|-------|-----------------------------------------------------------------|
| B1                        |     1 | Keystone AA battery holder                                      |
| C1, C9                    |     2 | 100 μ F ± 10% tantalum capacitors (C case) AVX TPSC107K010R0100 |
| C2-C5, C8, C10, C11, C12  |     8 | 0.1 μ F ± 10% ceramic capacitors (0402)                         |
| C7                        |     1 | 1 μ F ± 10% ceramic capacitor (0402)                            |
| C15, C16                  |     2 | 10 μ F ± 5% ceramic capacitors (0805)                           |
| D1                        |     1 | LED, red                                                        |
| J1, J2                    |     2 | DVI connectors, Molex 74320-1000                                |
| J3, J4                    |     2 | Test points                                                     |
| JU1, JU3, JU4             |     3 | 3-pin headers, 0.1in centers                                    |
| L1                        |     1 | 22 μ H inductor TDK SLF6028T-220MR77                            |
| L2                        |     1 | Ferrite bead TDK MMZ1608S601 (0603)                             |
| Q1                        |     1 | PNP transistor (SOT23) Zetex FMMT591A                           |
| R2-R5, R19, R21, R23, R24 |     0 | Not installed, resistors                                        |
| R6                        |     1 | 4.7k Ω ± 5% resistor (0402)                                     |
| R7                        |     1 | 200 Ω ± 5% resistor (0402)                                      |
| R8, R16, R17, R18         |     4 | 10k Ω ± 5% resistors (0402)                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- Extends TMDS Interface Length as Follows:
- 0 to 50m over DVI-Cable, 24 AWG STP (Shielded Twisted Pair)
- 0 to 36m over DVI-Cable, 28 AWG STP
- 0 to 30m over DVI-Cable, 30 AWG STP
- Fully Assembled and Tested
- +3.3V Power-Supply Operation
- Includes AA Battery Supply Option
- Includes On-Board +15kV ESD Protection*
- Pass-Through of Analog Video

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART             | TEMP RANGE   |
|------------------|--------------|
| MAX3815EVKIT-DVI | 0°C to +70°C |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| R11           |     1 | 1k Ω variable resistor                                            |
| R12           |     1 | 1k Ω ± 5% resistor (0402)                                         |
| R13           |     1 | 300k Ω ± 5% resistor (0402)                                       |
| R14           |     1 | 180k Ω ± 5% resistor (0402)                                       |
| R15           |     1 | 1M Ω ± 5% resistor (0402)                                         |
| SW2           |     2 | 0 Ω resistors (0603) soldered across bottom two vias of each lane |
| SW4           |     1 | SPDT switch                                                       |
| U1, U2, U3    |     3 | MAX3208EAUB ± 15kV ESD protection ICs                             |
| U4            |     1 | MAX3815CCM                                                        |
| U5            |     1 | MAX1796EUA                                                        |
| U6            |     0 | Not installed                                                     |
| -             |     1 | MAX3815DVI board, rev A                                           |
| -             |     3 | Shunts                                                            |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Zetex      | 516-543-7100 | 516-864-7630 |

Note: Indicate that you are using the MAX3815 when contacting these component suppliers.

*Human Body Model.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3815 Evaluation Kit for DVI Cables

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

For  evaluation  of  the  MAX3815,  configure  the  evaluation kit as follows:

- 1) If  power  is  supplied  to  the  MAX3815  through  the battery  pack,  place  two  AA  batteries  in  the  battery holder and place a shunt on the bottom two pins of JU1.
- 2) If  power  is  supplied  by  an  external  source,  set  the power  supply's  current  limit  to  300mA  and  connect +3.3V at J3 and ground at J4. Then place a shunt on the top two pins of JU1.
- 3) If  no cable is attached at J2 (INPUT FROM CABLE), the red LED at D1 should be illuminated (CLK LOSS).

This indicates that no clock signal is being detected by the MAX3815. If the LED does not illuminate and no cable is attached at J2, check to make sure the batteries  are  getting  proper  contact.  Alternatively,  if external  power  is  used,  ensure  that  it  is  supplying +3.3V.

- 4) Set the equalizer to automatic equalization by switching SW4 to AUTO.
- 5) Connect a DVI source to J2 (INPUT FROM CABLE) and a DVI monitor or DVI receiver at J1 (OUTPUT).
- 6) Once  the  DVI  source  has  begun  transmitting,  the red LED (CLK LOSS) will no longer be illuminated. This indicates that the  DVI  source  has  begun transmitting video.

If manual control of the equalizer is desired, switch SW4 to  MANUAL.  To  increase  the  amount  of  equalization (long  cables),  turn  R12  clockwise.  To  decrease  the amount of equalization (short cables), turn R12 counterclockwise.  Note  that  during  manual  equalization,  all three  data  channels  will  be  set  to  the  same  level  of equalization.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ESD Protection

The  MAX3208 provides  15kV  of  ESD  protection  for  the DVI interface. It is designed to provide protection to the differential lines while maintaining a low capacitance for minimal effects on signal transmission. Three MAX3208 devices are included on the reference design board on the cable side of the MAX3815.

## Table 1. Adjustment and Control Descriptions (see Quick Start)

| COMPONENT   | NAME              | FUNCTION                                                                                                                                                                                                                                                                         |
|-------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1          | CLK LOSS          | This LED turns on when the MAX3815 does not detect clock signal.                                                                                                                                                                                                                 |
| J3          | +3.3V             | External power-supply positive connection.                                                                                                                                                                                                                                       |
| J4          | GND               | External power-supply ground connection.                                                                                                                                                                                                                                         |
| JU1         | POWER             | Placing a shunt across the top two pins connects the MAX3815 to the supply connectors J3 and J4 so an external power supply can be used. Place a shunt across the bottom two pins to supply the MAX3815 from the battery pack (requires two AA batteries).                       |
| JU3         | DRVR_EN           | For future functionality.                                                                                                                                                                                                                                                        |
| JU4         | CPL_EN            | For future functionality.                                                                                                                                                                                                                                                        |
| R12         | MANUAL EQ SET     | When manual control of the equalizer has been selected using SW4, the level of equalization can be controlled using R12. Turning the potentiometer clockwise increases the amount of equalization applied to the input signal. The voltage at EQ CONTROL can be measured at TP3. |
| SB1         | SQUELCH           | Short SB1 with solder to squelch the outputs when no clock signal is detected.                                                                                                                                                                                                   |
| SB2         | OUTLEVEL          | Short SB2 with solder to set the outputs to transmit one-half normal amplitude signals (500mVP-P differential).                                                                                                                                                                  |
| SB3         | MAX3816 VDD       | For future functionality.                                                                                                                                                                                                                                                        |
| SB4         | DDC Ground Return | To connect the display-side DDC return ground to the cable-side DDC return ground, short the left two pads of SB4. To connect the display-side DDC return ground to the EV kit ground short the right two pads of SB4.                                                           |
| SW2         | MAX3816           | For future functionality. This switch is replaced by two 0 Ω resistors that set the DDC clock and data signals to pass directly through the board.                                                                                                                               |
| SW4         | EQ CONTROL        | Slide the switch to the left to manually control the level of equalization of the MAX3815. Slide it to the right to have the MAX3815 automatically control the level of equalization.                                                                                            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for DVI Cables

<!-- image -->

Figure 1. MAX3815 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for DVI Cables

Figure 2. MAX3815 EV Kit PC Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_

## High Frequency Layout

The following is a list of recommendations to maintain good signal integrity with the MAX3815.

- Use controlled impedance transmission lines for the clock and data channels. Make them differentially coupled 100 Ω impedance.
- Use an uninterrupted ground plane below the clock and data transmission lines.
- Do not use vias on the clock and data transmission lines on the input side of the MAX3815.
- Keep  the  data  transmission  lines  as  short  as possible.
- Place  power-supply  decoupling  capacitors  close to the MAX3815 on pins 1, 4 and 5, 8 and 9, and 12 and 13.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX3815 EV Kit PC Board Layout-Top Side

<!-- image -->

## MAX3815 Evaluation Kit for DVI Cables

Figure 4. MAX3815 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5. MAX3815 EV Kit PC Board Layout-Power Plane

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3815 Evaluation Kit for DVI Cables

Figure 6. MAX3815 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 7. MAX3815 EV Kit PC Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->