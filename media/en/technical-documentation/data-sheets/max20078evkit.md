<!-- lastmod 2022-08-03 -->
## MAX20078 Evaluation Kit

## General Description

The MAX20078 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX20078  synchronous  buck controller  for  high-power,  high-brightness  (HB)  LED drivers. The EV kit is  set  up  as  a  buck  LED  driver  and operates  from  a  4.5V  to  65V  DC  supply  voltage.  The EV kit is  configured to deliver up to 2A to one string of LEDs. The total voltage of the string can vary from 3V to 55V. The anode of the LED string should be connected to the LED+ terminal and the cathode of the LED string connected to PGND.

## Features

- 4.5V to 65V Input Voltage
- Drives 1 to 16 LEDs
- 0A to 2A LED Current
- Demonstrates UVLO, Output Short Protection, and Overload
- Demonstrates Current-Limit and Thermal-Shutdown Features
- Proven PCB Layout and Thermal Design
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX20078 EV kit
- 5V to 65V, 4A DC power supply
- Two digital voltmeters (DVM1, DVM2)
- Series-connected HB LED string rated to no less than 2.5A
- Current probe to measure the HB LED current
- Potentiometer
- Small flat-blade screwdriver to turn the potentiometer wiper-adjustment pin

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are complete.

- 1) Verify  that  all  jumpers  (J1,  JU1-JU4)  are  in  their default positions, as shown in Table 1.
- 2) Connect the HB LED string anode to the LED+ PCB pad and the cathode to the PGND PCB pad.
- 3) Connect  DVM1  across  the  LED+  and  PGND  PCB pads.
- 4) Connect  DVM2  across  the  REFI  and  AGND  test points.
- 5) Connect the power supply to the VIN PCB pad and the power supply's ground to the PGND PCB pad.
- 6) Clip the current probe across the wire connecting the HB LED string to the EV kit.
- 7) Turn on the power supply and set to a voltage greater than the maximum HB LED string voltage, but less than the 65V maximum input voltage.
- 8) Use  the  screwdriver  to  turn  the  potentiometer  until DVM2 reads 1.2V.
- 9) Measure the HB LED current using the current probe and verify that current is 2A.
- 10) Verify DVM1 shows the expected LED string voltage.
- 11) Use  the  screwdriver  to  turn  the  potentiometer  until DVM2 reads 0.7V.
- 12) Measure the HB LED current using the current probe and verify that current is 1A.

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX20078

Table 1. MAX20078 EV Kit Jumper Descriptions (J1, JU1-JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                          |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2              | Allows the connection of an external 5V (4.5V to 5.5V) supply to V CC . The internal LDO is not used.                                                                |
| J1       | 2-3*             | The internal V CC LDO is powered from the input voltage applied on IN pin of the device.                                                                             |
| J1       | Open             | V CC unconnected. Do not leave J1 open.                                                                                                                              |
| JU1      | 1-2*             | REFI pin is now connected to a voltage-divider from V CC to ground. Adjusting R8 allows programming the LED current from 0 to 2.2A.                                  |
| JU1      | Open             | Disconnects the REFI pin of the device from the external voltage-divider on the V CC pin. Allows the user to apply an external voltage to set the LED current level. |
| JU2      | Open*            | No HUD application. Turning on Q3 does not short the output.                                                                                                         |
| JU2      | 1-2              | Allows testing of the device in HUD applications. Allows shorting the output by turning on Q3.                                                                       |
| JU3      | 1-2*             | DIM pin pulled up to V CC through a 10kΩ resistor.                                                                                                                   |
| JU3      | 2-3              | DIM pin pulled up to V IN through a 10kΩ resistor.                                                                                                                   |
| JU3      | Open             | DIM pin of the device not connected.                                                                                                                                 |
| JU4      | Open*            | DIM pin of the device not synchronized to HUD_PWM signal.                                                                                                            |
| JU4      | 1-2              | DIM pin of the device synchronized to HUD_PWM signal.                                                                                                                |

## Detailed Description

The  MAX20078  EV  kit  demonstrates  the  MAX20078 synchronous  buck  controller  for  high-power  HB  LED drivers. The buck controller consists of a fully synchronous step-down converter with external MOSFETs, and can drive a  series  string  of  LEDs  at  currents  as  high  as  30A.  The buck controller uses a proprietary average current-modecontrol scheme to regulate the inductor current. This control method  does  not  need  any  control-loop  compensation, while  maintaining  nearly  constant  switching  frequency. Inductor current sense is achieved by sensing the current in the bottom synchronous n-channel MOSFET. It does not require any current sense at high voltages. The buck controller offers both analog and PWM dimming. The EV kit is configured to deliver up to 2A to a series LED string. The string forward voltage can vary from 3V to 55V.

Evaluates: MAX20078

## Analog Dimming Control (ICTRL)

The  EV  kit  demonstrates  the  analog  dimming  feature of the buck controller. R7 and R8 form a resistor-divider between V CC and AGND. R7 is a 10kΩ resistor and R8 is a 10kΩ potentiometer, with the wiper shorted to the high side of the potentiometer. Install the shunt on JU1 (see Table 1 for jumper descriptions). Using a flat-blade screwdriver, turn the wiper-adjustment pin clockwise to increase the voltage on the REFI input. Turn the wiper-adjustment pin counterclockwise to decrease the voltage on the REFI input.  The  REFI  input  allows  for  analog  dimming  of  the HB LED string. A REFI input voltage of ≤ 0.2V turns off the LED driver, an input voltage between 0.2V and 1.2V provides  linear  dimming  of  the  HB  LED  string,    and  an input  voltage  &gt;  1.2V  sets  the  HB  LED  string  current  to maximum current (based on the current-sense resistor).

Alternatively,  the  analog  dimming  input  can  be  set  with a power supply. Remove the shunt on JU1 and connect an external power supply directly to the REFI PCB pad to perform analog dimming with a power supply. Do not violate  the  absolute  maximum  voltage  rating  of  V CC   + 0.3V (refer to the Absolute Maximum Ratings section in the MAX20078 IC data sheet).

│

## Pulse-Dimming Input (DIM)

The  EV  kit  demonstrates  the  PWM  dimming  feature  of the buck controller. Install a shunt across pins 1-2 on JU3; JU3 pins 2-3 should be open. Connect a PWM signal to the  PWM  PCB  pad.  Vary  the  duty  cycle  to  increase  or decrease  the  intensity  of  the  HB  LED  string.  The  DIM input of the device has a 2V (max) rising threshold and a 0.8V (min) falling threshold, and is compatible with 3.3V and  5V  logic-level  signals.  The  DIM  input  is  pulled  up to V CC through the external 10kΩ resistor on the EV kit when JU3 is installed across pins 1-2. The DIM input can also be pulled up to V IN  by moving the jumper on JU3 to pins 2-3 (see Table 1 for jumper descriptions).

## Fault Indicator

The EV kit demonstrates the fault-protection features of the buck controller, which offer shorted-LED, open-LED, and  overtemperature  protection.  The FLT output  is  an open-drain,  active-low  fault  indicator.  Refer  to  the FLT Flag section  in  the  MAX20078  IC  data  sheet  for  more information.

## Current Monitor Output

The  EV  kit also demonstrates the current-monitor output feature of the buck controller. Refer to the Current Monitor section in the MAX20078 IC data sheet for more information.

## External VCC input

The EV kit demonstrates operation of the buck controller  with  an  external  V CC   input.  In  this  case,  the internal LDO is not used. Move the shunt to pins 1-2 on J1 (the  IN and V CC  pins of the buck controller are shorted together). Apply  an  external  power  supply  between  4.6V and 5.5V on the VCC PCB pad to allow switching of the device.

## HUD Applications

The  EV  kit  can  also  be  tested  for  HUD  applications. Remove  capacitor  C17  and  any  pulsating  signals  on the DIM PCB pad and install a shunt across pins 1-2 on JU2. The output capacitor is now reduced to 0.1µF. The LEDs can be turned on and off extremely fast by applying the PWM signal on the HUD\_PWM PCB pad instead of the DIM PCB pad. The jumper on JU3 should be placed across  pins  2-3.  The  DIM  input  of  the  device  can  be synchronized  to  the  leading  edge  of  the  HUD\_PWM signal by installing a jumper across pins 1-2 on JU4 (see Table 1 for jumper descriptions).

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20078EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX20078 EV Kit Bill of Materials

| DESIGNATION             |   QTY | DESCRIPTION                                                                                    |
|-------------------------|-------|------------------------------------------------------------------------------------------------|
| C1                      |     1 | 0.1uF ±10%, 250V X7R ceramic capacitors (1210) Murata GRM32DR72E104KW01L                       |
| C2                      |     1 | 2.2uF ±10%, 10V X7R ceramic capacitor (0603)                                                   |
| C3                      |     1 | 470pF ±5%, 50V C0G ceramic capacitor (0603) AVX 06035A471JAT2A                                 |
| C4                      |     1 | 0.22uF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H224K080                           |
| C5                      |     1 | 0.1uF ±10%, 100V X7R ceramic capacitors (0805)                                                 |
| C6, C10                 |     2 | 1.0uF ±10%, 10V X7R ceramic capacitor (0603)                                                   |
| C7                      |     1 | 2200pF ±10%, 50V X7R ceramic capacitors (0603)                                                 |
| C8, C19                 |     2 | 2.2uF ±10%, 100V X7R ceramic capacitors (1210) Murata GRM32ER72A225KA35 TDK CGA6N3X7R2A225K230 |
| C9, C18                 |     2 | 0.1uF ±10%, 50V X7R ceramic capacitors (0603)                                                  |
| C11, C12, C13, C14, C15 |     0 | Not installed capacitor (0603)                                                                 |
| C17                     |     1 | 1.0uF ±10%, 100V X7R ceramic capacitor (1206) Murata GRM31CR72A105KA01 TDK C3216X7R2A105K160   |
| D1                      |     1 | 80V, 1A schottky diode (SMA) Diodes Inc. B180-13-F                                             |
| D2                      |     1 | 100V, 1A schottky diode (DO-214) Micro Commercial Components SS110-TP                          |
| D3                      |       | 75V, 0.3A Diode (SOD-323) Diodes Inc 1N4148WS-7-F                                              |
| J1, JU3                 |     2 | 3 pin header                                                                                   |
| JU1, JU2, JU4           |     3 | 2 pin header                                                                                   |
| L1                      |     1 | 47 uH, 5.4A ferrite core inductor Coilcraft MSS1278T-473ML                                     |
| Q1, Q2                  |     2 | 80V, 0.107 ohm Logic Level MOSFET (LFPAK) NXP BUK9Y107-80E                                     |
| Q3                      |     1 | 60V, 4A N-channel Logic Level MOSFET (SOT-223) Fairchild Semiconductor NDT3055L                |
| R1                      |     1 | 47.5k ±1% resistor (0603)                                                                      |
| R2, R3                  |     2 | 4.7ohm ±5% resistor (0603)                                                                     |
| R4                      |     1 | 0.1 ±1% sense resistor (1206) Panasonic ERJ8BWFR100                                            |
| R5                      |     1 | 453k ±1% resistor (0603)                                                                       |
| R6                      |     1 | 24.9k ±1% resistor (0603)                                                                      |
| R7, R9, R10, R12        |     4 | 10k ±1% resistor (0603)                                                                        |
| R8                      |     1 | 10k potentiometer, through hole radial lead Bourns 3296W-1-103LF                               |
| R11                     |     1 | 1.0 ohm ±1% resistor (0603)                                                                    |
| R13                     |     1 | 100 ohm ±5% resistor (0603)                                                                    |
| R14, R15                |     0 | Not installed resistor (0603)                                                                  |
| R16, R17, R18           |     3 | 0ohm jumper (0603)                                                                             |
| U1                      |     1 | Synchronous Buck Controller for High-Power HB LED Drivers (TQFN16-EP) Maxim MAX20078ATE/V+     |
| U3                      |     1 | 7A Sink, 3A Source, 12ns, SOT23 MOSFET Drivers (SOT23-6) Maxim MAX15070AAUT/V+                 |
| -                       |     5 | Shunts                                                                                         |
| -                       |     1 | PCB: MAX20078 EVKIT                                                                            |

Evaluates: MAX20078

## MAX20078 EV Kit Schematic

<!-- image -->

Evaluates: MAX20078

## MAX20078 EV Kit PCB Layouts

<!-- image -->

MAX20078 EV Kit Component Placement Guide-Component Side

MAX20078 EV Kit PCB Layout-Component Side

<!-- image -->

│

## MAX20078 EV Kit PCB Layouts (continued)

MAX20078 EV Kit PCB Layout-AGND Layer 2

<!-- image -->

MAX20078 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX20078 EV Kit PCB Layouts (continued)

MAX20078 EV Kit PCB Layout-Solder Side

<!-- image -->

Evaluates: MAX20078

## MAX20078 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim ,ntegrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

<!-- image -->

│

Evaluates: MAX20078