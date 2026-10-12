<!-- lastmod 2022-08-02 -->
## MAX25603 Evaluation Kit

## General Description

The MAX25603 evaluation kit (EV kit) provides a proven design to  evaluate  the  MAX25603  automotive  highvoltage,  high-brightness  LED  buck-boost  controller.  The EV kit operates from a 5V to 60V DC supply voltage. The EV kit is configured to deliver up to 1A to one or two strings of 1 to 15 LEDs. The total voltage of each string can vary from 0V to 60V. The anode of the LED strings should go to LED1+ or LED2+ terminals and the cathodes to the GND terminal.  Shunting  FETs  are  provided to emulate  a combination headlamp in which a single LED string can contain the clearance lamp (CLL), low beam (LB), and high beam (HB) all in one. Each can be independently turned on or off by shorting across the appropriate segments of the LED string.

## Features

- 5V to 60V Input Voltage Range
- Demonstrates  Use  in  Combination  Headlamps  and Multistring, Time-Sharing Applications
- Analog and Digital Dimming Control
- Input Current Limit
- LED Current Clamp Function
- Output Discharge for Faster Transient Time
- LED Short and Open Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## EV Kit Photo

Evaluates: MAX25603

## Quick Start

## Required Equipment

- MAX25603 EV kit
- 12V, 5A DC power supply
- Signal generator
- Series-connected LED strings rated to at least 1.5A
- Oscilloscope with a current probe

## Procedure

The EV kit is fully assembled and tested. Use the following steps below to verify board operation:

Caution:  Do  not turn on  power  supply  until all connections are made. Be sure not to violate power ratings if modifying component values.

1. Verify that all jumpers are in their default positions, as shown in Table 1 .
2. Connect  the  positive  terminal  of  the  12V  supply  to VINP1 and the negative terminal to the PGND.
3. Connect  the  anode  a  LED  string  to  LED1+  and  the cathode to GND on the EV kit.
4. Clip the current probe on the wire connected to the LED string.
5. Turn on the DC power supply.
6. Apply 5V to EN1.
7. Verify that the LEDs turn on.
8. Adjust  potentiometer  R3  until  the  LED  current  is approximately 1A.

<!-- image -->

<!-- image -->

Table 1. Jumper Connection Guide

| JUMPER   | SHUNT POSITION   | FEATURE                                                                                               |
|----------|------------------|-------------------------------------------------------------------------------------------------------|
| J1       | Open             | Apply an external DC voltage between 0.2V to 1.2V for setting the LED current.                        |
| J1       | Closed           | Uses the resistive divider from VCC and the potentiometer R3 to set the LED current.                  |
| J2       | Open             | Uses the resistive divider from VCC and the potentiometer R3 to set the LED current.                  |
| J2       | 1-2              | R4 is placed in series with R3 to lower the LED current when EN2 is high.                             |
| J2       | 2-3              | R4 is placed in series with R3 to lower the LED current when EN1 is high.                             |
| J3       | Open             | Apply an external 0 to 5V signal on the SHUNT pin.                                                    |
| J3       | 1-2              | SHUNT pin is tied to VCC. The error amplifier will always be connected to COMP2.                      |
| J3       | 2-3              | SHUNT pin is tied to GND. The error amplifier will always be connected to COMP1.                      |
| J4       | Open             | Apply an external 0 to 5V PWM clock source for PWM dimming on Q6.                                     |
| J4       | 1-2              | EN2 pin pulled to VCC for 100% duty on Q6.                                                            |
| J4       | 2-3              | EN2 pin pulled to GND to turn off Q6.                                                                 |
| J5       | Open             | Apply an external 0 to 5V PWM clock source for PWM dimming on Q5.                                     |
| J5       | 1-2              | EN1 pin pulled to VCC for 100% duty on Q5.                                                            |
| J5       | 2-3              | EN1 pin pulled to GND to turn off Q5.                                                                 |
| J6       | Open             | Disconnects the source of shunting FET Q7 from LED2+.                                                 |
| J6       | Closed           | Connects the source of shunting FET Q7 to LED2+.                                                      |
| J7       | Open             | Disconnects the drain of shunting FET Q7 from LB+.                                                    |
| J7       | Closed           | Connects the drain of shunting FET Q7 to LB+.                                                         |
| J8       | Open             | Overvoltage protection threshold is set by the resistive divider from VOUTCAP.                        |
| J8       | 1-2              | R49 is placed in parallel with R46 and lowered the overvoltage protection threshold when EN2 is high. |
| J8       | 2-3              | R49 is placed in parallel with R46 and lowered the overvoltage protection threshold when EN1 is high. |
| J10      | Open             | LED2+ LEDs are driven through the Q6.                                                                 |
| J10      | Closed           | Bypasses Q6. Use to compare performance without the LED current clamp.                                |
| J11      | Open             | LED1+ LEDs are driven through Q5.                                                                     |
| J11      | Closed           | Bypasses Q5. Use to compare performance without the LED current clamp.                                |

Default options appear in bold.

## Setup and Operation

1. Verify that all jumpers are in their default positions, as shown in Table 1 .
2. Connect the positive terminal of the 12V supply to VINP1 and the negative terminal to the PGND.
3. Connect the anode a LED string to LED1+ and the cathode to GND on the EV Kit.
4. Clip the current probe on the wire connected to the LED string.
5. Turn on the DC power supply.
6. Apply 5V to EN1.
7. Verify that the LEDs turn on.
8. Adjust potentiometer R3 until the LED current is approximately 1A.

## Clearance Lamp (CCL), Low Beam (LB), High Beam (HB)

Shunting FETs Q7, Q9, Q10, and Q11 are provided to emulate an application in which a single MAX25603 device can drive the clearance lamp, daytime running lamps, low beam, and high beam functions all from a single LED string. The following procedure describes how to configure this EV kit to drive the LED configuration shown in Typical Application Circuit .

<!-- image -->

9. With jumper J6 closed, connect the daytime running lamp LEDs between LED2+ and DRL-. The clearance lamp LEDs are connected between DRL- and LB.
10. Short  LED1+ to LB+. The  low beam LEDs are connected between LB+ and HB. The high beam LEDs are connected between HB and GND.
11. Controlling each individual segment is done by driving the gates of the appropriate shunting FETs high or low. The clearance lamp and daytime running lamps can be dimmed simultaneously by applying a 5V 200Hz PWM signal at EN1. While EN1 is low, EN2 must be high to conduct the clearance and daytime running lamps. A level shifter is provided for driving the gate of the Q7 pMOS.
12. Apply a 5V signal to the gate of Q8 to turn the daytime running lamps off. If desired, the SHUNT pin can be tied to EN1. When SHUNT is low, the error amplifier of the MAX25603 uses the compensation network on COMP1. COMP2 is connected to the error amplifier when SHUNT is high. Using the SHUNT pin also enables the output discharge feature.

## Detailed Description of Hardware

This evaluation kit should be used with the following documents:

- MAX25603 data sheet
- MAX25603 EV kit data sheet (this document)

These  documents,  or  links  to  them,  are  included  on  the  MAX25603  EV  kit  package.  For  the  latest  versions  of  the documents listed above, use the following link: www.maximintegrated.com/MAX25603

## EN1 and EN2-PWM Dimming

EN1 and EN2 are input signals that control GTP1 and GTP2, respectively, as well as the switching of MAX25603. If both EN1 and EN2 are low, the MAX25603 is in the off state. If both EN1 and EN2 are high, EN1 has priority, and GTP1 is on while GTP2 is off. PWM dimming can be achieved on either channel by keeping the respective jumper J4 or J5 open and applying an external PWM signal to either EN1 or EN2. Move either jumper to position 1-2 keeps that channel on 100% and moving that jumper to 2-3 keeps that channel off. If simultaneously toggling between EN1 and EN2, ensure that there is  at  least  a  1µs  deadtime between  the  falling  edge  of  one  EN  and  the  rising  edge  of  the  other  EN.  For  the  typical application circuit in Figure 1, keep EN2 high and toggle EN1 to implement PWM dimming on the CLL and DRL LEDs.

## Analog Dimming Control (ICTRL)

When J1 is closed, the LED current is set by resistive divider from VCC. The equation to set the LED current is:

<!-- formula-not-decoded -->

Use a screwdriver to turn the potentiometer R3 to adjust ICTRL. If ICTRL is greater than 1.3V, the LED current is limited to:

<!-- formula-not-decoded -->

For time sharing applications in which EN1 and EN2 are alternately dimmed, a different LED current setting can be desired on each string. R4 and Q1 are provided to lower the programmed current. Place jumper J2 in position 1-2 for a lower LED current on the EN2 or in position 2-3 for a lower LED on the EN1 string. By default, J2 is open and the LED current is the same for both strings.

## LED Current Clamp and Output Discharge

When closing any of the shunting FETs, the total LED string voltage is initially too high that causes the LEDs to conduct a  large  amount of current until  the  output  capacitor  decreases  to  the  appropriate  value  for  the  desired  programmed current. A unique feature with the MAX25603 is the ability to drive the PMOS on GTP1 and GTP2 as linear current clamps to limit the LED current and protect the LEDs. This clamp level is set to 25% greater than the current set by ICTRL. If the current clamp is triggered concurrently to a rising edge on the SHUNT pin, the MAX25603 switches in a hysteretic mode to  provide  negative  inductor  current  and  discharge  the  output  capacitor  back  to  the  supply.  The  LED  current  clamp improves robustness of the system while utilizing the dual compensation and output discharge of SHUNT pin greatly improves transient performance.

## Input-Current Limit

The MAX25603 features circuitry that limits the input current during line dropouts. Refer to the MAX25603 IC data sheet for details on setting the input current limit. The input current is given by the following equation:

<!-- formula-not-decoded -->

This circuitry can be disabled by replacing RN1 and RN2 with 0Ω resistors.

## Open LED

The MAX25603 features an adjustable overvoltage threshold used for open LED detection. The threshold is determined by the voltage divider on the FB pin and is given by the following equation:

<!-- formula-not-decoded -->

The overvoltage threshold level should be set to approximately 25% above the expected LED forward voltage. When driving the LEDs with a very narrow PWM duty cycle, overvoltage may not be detected if the overvoltage level is set too high and the output cannot slew up to it within the PWM on-time. This can arise when driving two strings with a largely different  number  of  LEDs.  R49  and  Q3  are  provided  as  way  to  lower  the  threshold.  By  default,  J8  is  open  and  the overvoltage threshold is set to 35V for both EN1 and EN2. Select an appropriate value for R49 and short jumper J8 between 1-2 or 2-3 depending on if either EN1 or EN2 requires the lower threshold.

When an open is detected, switching stops and FLT is pulled low. Switching resumes only when the voltage on the FB drops by 70mV and EN1 or EN2 is high. FLT goes high only if EN1 or EN2 is high and V(ISP-ISN) is greater than 20mV.

## Short LED

A short-circuit condition across the LED string is detected when the voltage on ISP falls below 4.7V for at least 10ms. After 10ms the regulation point of the voltage across the LED current-sense resistor is determined by the lower of 320mV or ICTRL. A short-circuit does not assert FLT. The short-circuit condition is cleared when ISP rises above 4.8V.

## Typical Application Circuit

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25603EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX25603 EV Kit Bill of Materials

| PART                  |   QTY | DESCRIPTION                                                                                                            |
|-----------------------|-------|------------------------------------------------------------------------------------------------------------------------|
| C1, C5, C17, C43      |     4 | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                         |
| C2, C3, C18-C20, C44  |     6 | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                         |
| C4                    |     1 | CAP; SMT (CASE_F); 68UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                               |
| C6, C16, C21          |     3 | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                         |
| C7                    |     1 | CAP; SMT (0603); 2.2UF; 10%; 25V; X5R; CERAMIC                                                                         |
| C8                    |     1 | CAP; SMT (0603); 1000PF; 5%; 100V; C0G; CERAMIC                                                                        |
| C10, C31, C33         |     3 | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                        |
| C12                   |     1 | CAP; SMT (0603); 0.1UF; 10%; 35V; X7R; CERAMIC                                                                         |
| C13-C15, C36-C41      |     9 | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                                         |
| C23, C24              |     2 | CAP; SMT (0603); 2200PF; 5%; 50V; C0G; CERAMIC                                                                         |
| C27                   |     1 | CAP; SMT (1210); 10UF; 10%; 100V; X7S; CERAMIC                                                                         |
| C32, C34              |     2 | CAP; SMT (0603); 0.01UF; 5%; 50V; C0G; CERAMIC                                                                         |
| C35                   |     1 | CAP; SMT (0603); 100PF; 5%; 50V; C0G; CERAMIC                                                                          |
| C42                   |     1 | CAP; SMT (0603); 470PF; 10%; 100V; X7R; CERAMIC                                                                        |
| D1-D4, D7-D9, D11-D13 |    10 | DIODE; SWT; SMT (SOD-123); PIV=100V; IF=0.3A; -65 DEGC TO +150 DEGC                                                    |
| D10                   |     1 | DIODE; ZNR; SMT (SOT23-3); VZ=12V; IZ=0.005A                                                                           |
| FLTB, VCC             |     2 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| J1, J6, J7, J10, J11  |     5 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                               |
| J2-J5, J8             |     5 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                               |
| L1                    |     1 | INDUCTOR; SMT (1806); FERRITE- BEAD; 56 IMPEDANCE AT 100MHZ; 6A                                                        |
| L2                    |     1 | INDUCTOR; SMT; SHIELDED; 1UH; TOL=+/-20%; 11.1A                                                                        |
| L3, L9-L11            |     4 | INDUCTOR; SMT (1206); FERRITE- BEAD; 1000; TOL=25%; 2A                                                                 |
| L7                    |     1 | INDUCTOR; SMT; FERRITE CORE; 10UH; TOL=+/-20%; 5.7A                                                                    |

## MAX25603 Evaluation Kit

| L8                           |   1 | RES; SMT (0805); 0; JUMPER; JUMPER; 0.5000W                                                                                                          |
|------------------------------|-----|------------------------------------------------------------------------------------------------------------------------------------------------------|
| MTH1-MTH4                    |   4 | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                            |
| Q1, Q3, Q8                   |   3 | TRAN; ; NCH; SOT-23; PD-(0.33W); IC- (0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                                                       |
| Q2, Q22                      |   2 | TRAN; DUAL N-CHANNEL POWER MOSFET; NCH; SO-8FL; PD-(19W); I-(26A); V-(60V)                                                                           |
| Q5, Q6                       |   2 | TRAN; P-CHANNEL 60-V (D-S) MOSFET; PCH; POWERPAK1212-8; PD- (3.8W); I-(-5.7A); V-(-60V)                                                              |
| Q7                           |   1 | TRAN; AUTOMOTIVE P-CHANNEL MOSFET; PCH; SOT-23; PD-(2W); I-(-1.7A); V-(-60V)                                                                         |
| Q9-Q11                       |   3 | TRAN; SMALL SIGNAL MOSFET; NCH; SOT-346; PD-(1W); IC-(3A); VDSS-(60V)                                                                                |
| Q12                          |   1 | TRAN; NPN SMALL SIGNAL SURFACE MOUNT TRANSISTOR; NPN; SOT-23; PD-(0.3W); I-(0.5A); V-(80V)                                                           |
| R1                           |   1 | RES; SMT (0805); 1; 1%; +/-100PPM/DEGC; 0.1250W                                                                                                      |
| R2, R7, R9-R11               |   5 | RES; SMT (0603); 10K; 5%; +/-200PPM/DEGC; 0.0630W                                                                                                    |
| R3                           |   1 | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
| R4, R49                      |   2 | RES; SMT (0603); 806; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                    |
| R5                           |   1 | RES; SMT (0603); 100; 1%; 100PPM; 0.2500W                                                                                                            |
| R6                           |   1 | RES; SMT (0603); 75; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                     |
| R8, R31, R36, R39, R42, R50  |   6 | RES; SMT (0603); 1M; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                     |
| R12                          |   1 | RES; SMT (0603); 100; 0.10%; +/-25PPM/DEGC; 0.1000W                                                                                                  |
| R13                          |   1 | RES; SMT (0603); 49.9; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                   |
| R14, R19, R26, R27, R43, R44 |   6 | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                          |
| R15, R16, R21, R22           |   4 | RES; SMT (0603); 5.62; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                   |
| R17, R20                     |   2 | RES; SMT (1206); 1.5; 5%; +600/- 100PPMDEGC; 0.6600W                                                                                                 |
| R18                          |   1 | RES; SMT (0603); 1.27K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                  |
| R24, R25                     |   2 | RES; SMT (1206); 0.4; 1%; +/-300PPM/DEGC; 0.25W                                                                                                      |
| R28                          |   1 | RES; SMT (0603); 2.49K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                  |

## MAX25603 Evaluation Kit

Evaluates: MAX25603

| R29               |   1 | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                      |
|-------------------|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R32-R34, R37, R40 |   5 | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                       |
| R35, R38, R41     |   3 | RES; SMT (0603); 4.22K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                    |
| R45               |   1 | RES; SMT (0603); 330K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                     |
| R46               |   1 | RES; SMT (0603); 12.1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                    |
| R47               |   1 | RES; SMT (0603); 20K; 5%; +/-200PPM/DEGK; 0.1000W                                                                                                                                                      |
| R48               |   1 | RES; SMT (0603); 30K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                      |
| R51               |   1 | RES; SMT (0603); 0; JUMPER; JUMPER; 0.2500W                                                                                                                                                            |
| RN1, RN2          |   2 | RES; SMT (1206); 0.024; 1%; +/-150PPM/DEGC; 1W                                                                                                                                                         |
| RS1, RS2          |   2 | RES; SMT (1206); 0.02; 1%; +/-75PPM/DEGC; 1W                                                                                                                                                           |
| SU1               |   1 | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT=PHOSPHOR BRONZE                                                                              |
| TP1               |   1 | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                                                                                                     |
| TP2               |   1 | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                                                                                       |
| U1                |   1 | EVKIT PART - IC; MAX25603; AUTOMOTIVE FOUR-SWITCH BUCK- BOOST LED CONTROLLER FOR COMBINATION HEAD LIGHTS; TSSOP28-EP; PACKAGE CODE U28+1C; LAND PATTERN: 90-100069; PACKAGE OUTLINE DRAWING: 21-100182 |
| PCB               |   1 | PCB:MAX25603                                                                                                                                                                                           |
| C9, C11           |   0 | CAP; SMT (0603); 1500PF; 10%; 50V; C0G; CERAMIC                                                                                                                                                        |
| C22               |   0 | CAP; SMT (0603); 100PF; 5%; 100V; C0G; CERAMIC                                                                                                                                                         |
| C25               |   0 | CAP; SMT (1210); 4.7UF; 10%; 100V; X7S; CERAMIC                                                                                                                                                        |
| C26               |   0 | CAP; SMT (1210); 10UF; 10%; 100V; X7S; CERAMIC                                                                                                                                                         |
| C28, C29          |   0 | CAP; SMT (1206); 0.022UF; 10%; 50V; X7R; CERAMIC                                                                                                                                                       |
| C30               |   0 | CAP; SMT (1206); 1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                                          |
| D5, D6            |   0 | DIODE; SCH; SMA (DO-214AC); PIV=50V; IF=3A                                                                                                                                                             |

| R23   | 0   | RES; SMT (0603); 3.3; 1%; +/-100PPM/DEGC; 0.1000W   |
|-------|-----|-----------------------------------------------------|

## MAX25603 EV Kit Schematic

<!-- image -->

## MAX25603 EV Kit PCB Layout

MAX25603 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25603 EV Kit PCB Layout-Top

<!-- image -->

MAX25603 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX25603 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX25603 EV Kit PCB Layout (continued)

MAX25603 EV Kit PCB Layout-Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/21           | Initial release | -               |