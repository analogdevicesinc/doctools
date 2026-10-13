<!-- lastmod 2022-08-04 -->
<!-- image -->

WIXVW

## MAX3845/MAX4814E Evaluation Kit

## General Description

The MAX3845/MAX4814E evaluation kit (EV kit) is an assembled demonstration board that provides in-system evaluation of the MAX3845 DVI™/HDMI™ 2:4 TMDS ® fanout/buffer and the MAX4814E 2:4 low-frequency switch. The input and output connections are made through Molex DVI and HDMI connectors for direct connection to DVI and HDMI cables.

An AC-to-DC wall-plug power adapter is included to provide power for the board. The board contains DC-DC conversion circuitry to allow operation of the +3.3V-supplied MAX3845 from the +5V DC wall-plug source.

## Ordering Information

| PART               | TYPE   |
|--------------------|--------|
| MAX3845/4814EEVKIT | EV Kit |

## Features

- ♦ Full 4-Output Fanout
- ♦ Independent DDC Routing to Any Output from Each Input with Priority to Input 1
- ♦ DVI-I and HDMI Connectors
- ♦ Supports Full 1080p and 1920 x 1200 Resolutions
- ♦ Input 2 Includes MAX3815 for Extended Cable Usage Up to 60 Meters
- ♦ Independent Selection of Preemphasis Level on Each Output
- ♦ All TMDS I/Os Feature 15kV HBM ESD Protection
- ♦ Wall-Plug Power-Supply Operation
- ♦ Fully Assembled and Tested

## Block Diagram

<!-- image -->

DVI is a trademark of Digital Display Working Group. HDMI is a trademark of HDMI Licensing, LLC.

TMDS is a registered trademark of Silicon Image, Inc.

## MAXI

## MAX3845/MAX4814E Evaluation Kit

| DESIGNATION                            |   QTY | DESCRIPTION                            |
|----------------------------------------|-------|----------------------------------------|
| C1-C8, C13                             |     9 | 0.01μF ±10% ceramic capacitors (0402)  |
| C9                                     |     1 | 0.47μF ±10% ceramic capacitor (0402)   |
| C10                                    |     1 | 1000pF ±10% ceramic capacitor (0402)   |
| C11, C24                               |     2 | 22μF ±10% ceramic capacitors (1206)    |
| C12                                    |     1 | 10μF ±10% ceramic capacitor (1206)     |
| C14-C23, C25-C35                       |    21 | 0.1μF ±10% ceramic capacitors (0402)   |
| D3-D6                                  |     4 | LEDs, dual color                       |
| D7-D10                                 |     4 | Switching diodes                       |
| D11                                    |     1 | LED red                                |
| J1, J3                                 |     2 | HDMI connectors                        |
| J2, J4, J5, J6                         |     4 | DVI connectors                         |
| J9                                     |     1 | Power jack, 2.1mm                      |
| JU1, JU2                               |     2 | 1 x 2 pin headers (0.1in centers)      |
| JU3                                    |     1 | 1 x 3 pin header (0.1in center)        |
| L1                                     |     1 | 3.3μH inductor Coilcraft MSS5131-332MX |
| L2                                     |     1 | Ferrite bead Murata BLM18EG601         |
| Q1                                     |     1 | PNP transistor Zetex FMMT591A          |
| R1-R16, R34                            |    17 | 200 ±5% resistors (0402)               |
| R17-R20                                |     4 | 47.5k ±1% resistors (0402)             |
| R21-R24, R47                           |     5 | 100 ±5% resistors (0402)               |
| R29, R30, R32, R33, R35, R36, R44, R45 |     8 | 121 ±1% resistors (0402)               |

## Component List

| DESIGNATION                            |   QTY | DESCRIPTION                             |
|----------------------------------------|-------|-----------------------------------------|
| R31, R37, R38, R46, R51, R54-R59, R62  |    12 | 4.7k ±5% resistors (0402)               |
| R39, R40, R43, R48, R63, R64           |     6 | 10k ±5% resistors (0402)                |
| R49                                    |     1 | 2.21k ±1% resistor (0402)               |
| R50                                    |     1 | 1k potentiometer                        |
| R60                                    |     1 | 0 resistor (0402)                       |
| R61                                    |     1 | OPEN                                    |
| S1-S8                                  |     8 | SP3T switches                           |
| S9, S10                                |     2 | BCD dial switches                       |
| SW1-SW4, SW13, SW14, SW19, SW20        |     8 | SPDT switches                           |
| TP1-TP10                               |    10 | Test points                             |
| U1                                     |     1 | MAX3845UCQ+                             |
| U2, U3, U5-U9, U11, U19, U22, U28, U29 |    12 | MAX3208EAUB+                            |
| U4                                     |     1 | 74ACT32P                                |
| U10                                    |     1 | MAX1556ETB+                             |
| U12                                    |     1 | MAX3815CCM+                             |
| U15-U18                                |     4 | Dual BJT transistors Zetex ZXTD6717E6   |
| U20                                    |     1 | MAX4814EECB+                            |
| U24                                    |     1 | MAX6346XR46+T                           |
| None                                   |     4 | Bumpers                                 |
| None                                   |     3 | Shunts                                  |
| None                                   |     1 | Wall-plug transformer, 120V AC to 5V DC |
| None                                   |     1 | PCB: MAX3845 Board, Rev D               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3845/MAX4814E Evaluation Kit

## Quick Start

For evaluation of the MAX3845 and MAX4814E, configure the board as follows:

- 1) Ensure that jumpers are placed on JU1 and JU2 to allow use of the wall-plug power supply. Shunt the bottom two pins of JU3 to allow direct control of the MAX4814E using BCD switches S9 and S10.
- 2) Plug the power supply into the 120V AC socket and plug the other end into J9. The output LEDs should light up. The Clock Loss LED (D11) should light up red if the MAX3815 is powered (SW20 switch set to the ON position).
- 3) Since the board has back termination resistors installed on the board by default, set the OUTPUT LEVEL switch (SW13) to HIGH. This sets the output swing to the normal HDMI/DVI range even with the back termination resistors in place.
- 4) Connect DVI/HDMI sources and sinks to the inputs and outputs on the EV kit. The LEDs turn green when a powered device is connected to the outputs. This is done by detecting the +5V signal at HOTPLUG.

Note: The DVI connectors on the board allow singlelink and dual-link DVI cables with DVI-D (digital only) and DVI-I (digital and analog) connectors, but only digital single-link video passes through the board.

- 5) If a long DVI cable is used to connect to a source, connect it to INPUT 2. This input has the MAX3815 equalizer on it to compensate for high-frequency losses on long cables.
- 6) If  a  source  is  connected  to  INPUT 2, be sure to power up the MAX3815 by switching SW20 to ON and SW19 to AUTO.
- 7) Route the DDC signals through the board using the S9 and S10 rotary switches. Switch S9 routes the DDC signals from input 1, and switch S10 routes the DDC signals from input 2.

<!-- image -->

Note: INPUT 1 DDC has priority, so if INPUT 1 and INPUT 2 are connected to the same output, the DDC connections from INPUT 2 are opened.

- 8) Select the input that you want to appear at outputs 1  to  4  by  using  the  input  select  switches  (S2,  S4, S5, S7).
- 9) Select the amount of preemphasis (0dB, 3dB, 6dB) you want to appear at each output using the preemphasis switches (S1, S3, S6, S8).

If  manual control of the MAX3815 equalizer is desired, switch SW19 to MANUAL. To increase the amount of equalization (long cables), turn R50 clockwise. To decrease the amount of equalization (short cables), turn  R50 counterclockwise. Note that during manual equalization, all  three  TMDS data channels are set to the same level of equalization.

## ESD Protection

The MAX3845 provides 2kV of ESD protection on all pins. If a higher level of ESD protection is desired, the MAX3208E provides 15kV of ESD protection for DVI and HDMI interfaces. It is designed to provide protection for differential lines while maintaining a low capacitance for minimal effects on signal transmission.

Twelve MAX3208E devices are included in this EV kit  to  protect  all  TMDS  I/O  connections.  For  samples, contact the Maxim Samples Department at www.maxim-ic.com/samples or call (888) 629-4642.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3845/MAX4814E Evaluation Kit

## Table 1. Adjustment and Control Descriptions (see Quick Start first)

| COMPONENT      | NAME               | FUNCTION                                                                                                                                                                                                                                                                                                                                                  |
|----------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU3            | MODE               | Short the bottom two pins of JU3 to control the MAX4814E using the rotary switches S9 and S10. Short the top two pins to control the MAX4814E through I 2 C using TP8 (SDA) and TP9 (SCL).                                                                                                                                                                |
| R50            | EQ ADJ             | When manual control of the equalizer has been selected using SW19, the level of equalization on the MAX3815 is controlled by R50.                                                                                                                                                                                                                         |
| S1, S3, S6, S8 | PREEMPHASIS        | These switches are used to set the level of preemphasis on the MAX3845's output drivers (0dB, 3dB, or 6dB).                                                                                                                                                                                                                                               |
| S2, S4, S5, S7 | INPUT SELECT       | These switches are used to select which input signal appears for each output. The middle position powers down the output.                                                                                                                                                                                                                                 |
| S9, S10        | DDC SWITCHING      | These rotary switches are used to connect the DDC signals (SDA, SCL, HOTPLUG, and +5V) from one input to one output.                                                                                                                                                                                                                                      |
| SW1-SW4        | HOTPLUG DETECTION  | These switches allow the HOTPLUG signals from the DVI sinks to power up and power down the MAX3845 outputs. To force operation of an output regardless of the HOTPLUG signal, slide the switch down.                                                                                                                                                      |
| SW13           | OUTPUT LEVEL       | This switch sets all the MAX3845's outputs to increased current drive (HIGH) or normal current drive (LOW). The increased current drive setting allows for 200 back termination resistors to be used (installed as default on the board).                                                                                                                 |
| SW14           | POWER DOWN         | This switch powers down input 1 when slid down. Note that any output selected to that input would be powered down as well. The PWRDWN_2 pin is controlled by the loss-of- clock circuit on the MAX3815. If the MAX3815 detects a signal at its RXC_IN input, it powers up input 2 of the MAX3845. If no clock signal is detected, it powers down input 2. |
| SW19           | EQ MODE            | Slide the switch up to manually control the level of equalization of the MAX3815. Slide it down to have the MAX3815 automatically control the level of equalization.                                                                                                                                                                                      |
| SW20           | MAX3815 POWER DOWN | This switch powers down the MAX3815 when slid down.                                                                                                                                                                                                                                                                                                       |
| TP2            | TEMP SENSE         | When the MAX3845 is powered up, the die junction temperature can be estimated by measuring the voltage on TP2 relative to GND. For more information, refer to the MAX3845 data sheet.                                                                                                                                                                     |
| TP8            | SDA                | Connect an I 2 C source to TP8 (SDA) and TP9 (SCL) to control the MAX4814E.                                                                                                                                                                                                                                                                               |
| TP9            | SCL                | Connect an I 2 C source to TP8 (SDA) and TP9 (SCL) to control the MAX4814E.                                                                                                                                                                                                                                                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3845/MAX4814E Evaluation Kit

Figure 1. MAX3845/MAX4814E EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3845/MAX4814E Evaluation Kit

Figure 2. MAX3845/MAX4814E EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3845/MAX4814E Evaluation Kit

<!-- image -->

Figure 3. MAX3845/MAX4814E EV Kit Assembly Drawing-Top Side

<!-- image -->

Figure 4. MAX3845/MAX4814E EV Kit Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3845/MAX4814E Evaluation Kit

Figure 5. MAX3845/MAX4814E EV Kit Layout-Ground Plane

<!-- image -->

Figure 6. MAX3845/MAX4814E EV Kit Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3845/MAX4814E Evaluation Kit

Figure 8. MAX3845/MAX4814E EV Kit Assembly Drawing-Bottom Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9