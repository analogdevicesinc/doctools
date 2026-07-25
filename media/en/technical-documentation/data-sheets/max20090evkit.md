<!-- lastmod 2022-08-03 -->
## MAX20090 Evaluation Kit

## General Description

The MAX20090 evaluation kit (EV kit) provides a proven design to  evaluate  the  MAX20090 automotive high-voltage,  high-brightness  LED  (HB  LED)  controller.  The  EV kit is set up for boost and buck-boost configurations and operates from a 6V to 18V DC supply voltage. The EV kit is  configured  to  deliver  up  to  1A  to  one  string  of  LEDs. The total voltage of the string can vary from 3V to 36V. The  anode  of  the  LED  string  should  be  connected  to the  LED+  terminal.  The  cathode  of  the  LED  string  can be connected either to PGND (boost mode) or IN (buckboost mode). In the case of boost mode, the input voltage should not exceed the LED string voltage.

## Features

- Configured for a Boost and Buck-Boost Mode
- Analog Dimming Control
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX20090 EV kit
- 12V, 5A DC power supply
- A series-connected LED string rated at 1A
- Oscilloscope with a current probe

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply until all connections are made.

- 1) Verify  that  all  jumpers  (J1-J4)  are  in  their  default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the IN PCB pad and the negative terminal to the nearest GND1 PCB pad.
- 3) Connect the LED  string across the  LED+  and LED-  PCB  pads  on  the  EV  kit for buck-boost configuration.  For  boost  configuration,  connect  the LED string across the LED+ and GND2 PCB pads on the EV kit. The LED string voltage should be higher than the input voltage in this configuration.
- 4) Clip the current probe on the wire connected to the LED string.
- 5) Turn on the DC power supply.
- 6) Verify that the LEDs turn on.
- 7) Verify that the oscilloscope displays approximately 1A.

## Detailed Description

The  MAX20090  EV  kit  provides  a  proven  design  to evaluate the MAX20090 high-voltage HB LED driver with integrated high-side current sense. The EV kit is set up for boost and buck-boost configurations and operates from a 6V to 18V DC supply voltage. The EV kit is configured to deliver up to 1A to a series LED string. The string-forward voltage can vary from 3V to 36V.

<!-- image -->

Evaluates: MAX20090

Table 1. MAX20090 EV Kit Jumper Descriptions (J1-J4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                         |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Connects the PWMDIM pin of the device to VCC through a 4.99kΩ resistor. The LEDs turn on when the input voltage goes above the UVLO level if J4 is open.                                                            |
| J1       | 2-3              | Connects the PWMDIM pin to ground through a 4.99kΩ resistor. Need to apply an external PWM signal or a DC voltage on the PWMDIM PCB pad to turn on the LEDs when the input voltage on IN is in the operating range. |
| J1       | Open             | Connects the PWMDIM pin to ground if J4 is installed; otherwise, PWMDIM pin is unconnected.                                                                                                                         |
| J2       | 1-2              | Connects VCC to the ICTRL pin. LED current is at the maximum value of 1.1A in this configuration.                                                                                                                   |
| J2       | 2-3*             | ICTRL pin is now connected to a voltage-divider from VCC to ground. Adjusting R2 allows programming the LED current from 0 to 1.1A.                                                                                 |
| J2       | Open             | Disconnects the ICTRL pin of the device from the external voltage-divider on the VCC pin. Allows the user to apply an external voltage to set the LED current level.                                                |
| J3       | 1-2*             | Connects the FLT pin to VCC through a 10kΩ resistor.                                                                                                                                                                |
| J3       | Open             | No pullup on FLT pin.                                                                                                                                                                                               |
| J4       | Open*            | PWMDIM pin is controlled by the jumper J1 setting only.                                                                                                                                                             |
| J4       | 1-2*             | Analog voltage on PWMDIM pin controlled by the voltage-divider of R13 and R18. Adjust R18 to vary the analog voltage on PWMDIM. Jumper J1 should be in default position.                                            |

* Default position.

## Analog Dimming Control (ICTRL)

When J2 is installed across pins 1-2, the LED current is set at the maximum current. The ICTRL pin is connected to VCC and in this case, the LED current is given by the following equation:

<!-- formula-not-decoded -->

When J2 is  installed  across  pins  2-3,  the  ICTRL  pin  is connected to the voltage-divider of R1 and R2, which sets the voltage at ICTRL

In the case of the EV kit, I LED  is set to 1A. If V ICTRL  &lt; 1.2V, then V ICTRL  sets the LED current level.

Alternatively,  the  analog  dimming  can  be  controlled  by removing the shunt on J2 and applying a voltage between 0 and 5.5V on the ICTRL PCB pad on the EV kit.

## Pulse-Dimming Input (PWMDIM)

Pulse dimming can be achieved by applying a pulsating voltage source on the PWMDIM PCB pad on the EV kit. When PWMDIM is pulled low, DIMOUT is pulled high and the  pulse-width-modulated  (PWM) switching is disabled.

Evaluates: MAX20090

This  can  be  done  by  installing  the  shunt  on  J1  across pins  2-3,  without  applying  any  external  voltage  on  the PWMDIM PCB pad. The PWMDIM pin can also be controlled by an analog DC voltage on the PWMDIM pin. In this case, the dimming frequency is internally set at 200Hz. This can be achieved by installing the shunt on J1 across pins 1-2, the shunt on J4 installed across pins 1-2, and adjusting potentiometer R18. The dimming duty cycle can be adjusted from 0 to 100% duty cycle by adjusting the voltage on the PWMDIM pin from 0.2V to 3.25V.

Alternatively, PWM dimming can be achieved by applying a  DC voltage between 0.2V and 3.3V on the PWMDIM PCB pad, with J1 and J4 open.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20090EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX20090 EV Kit Component List

| PART                 |   QTY | DESCRIPTION                                                              |
|----------------------|-------|--------------------------------------------------------------------------|
| C1, C6, C9           |     3 | 1uF ±10%, 16V X7R ceramic capacitors (0603)                              |
| C2, C7, C8, C10      |     4 | 0.1uF ±10%, 50V X7R ceramic capacitors (0603)                            |
| C3, C14              |     2 | 0.01uF ±10%, 100V X7R ceramic capacitors (0603)                          |
| C4, C5, C11-C13, C15 |     6 | 4.7uF ±10% 100V X7R ceramic capacitors (1210) TDK CGA6M3X7S2A475K200AE   |
| C16                  |     1 | 0.022uF ±10%, 100V X7R ceramic capacitors (0603)                         |
| C17                  |     1 | 1000pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H102FA01    |
| C18                  |     0 | Not installed capacitor (0603)                                           |
| D1                   |     1 | 100V, 3A Schottky diode (SMC) Diodes Inc. B3100-13-F                     |
| D2                   |     0 | Not installed diode                                                      |
| J1, J2               |     2 | 3 pin headers                                                            |
| J3, J4               |     2 | 2 pin headers                                                            |
| L1                   |     1 | 10uH, 5.7A ferrite core inductor Coilcraft MSS1278-103ML                 |
| Q1                   |     1 | 100V, 42A n-channel MOSFET (DPAK) International Rectifier IRLR3110ZPbF   |
| Q2                   |     1 | 80V, 2.1A p-channel MOSFET (SSOT-6) Fairchild Semiconductor FDC3535      |
| Q3                   |     1 | Small signal pnp transistor (SOT23) Fairchild Semiconductor MMBT2907A    |
| R1                   |     1 | 24.9k ±1% resistor (0603)                                                |
| R2, R18              |     2 | 10k potentiometers (9.53mmx4.83mmx10.03mm)                               |
| R3                   |     1 | 40.2k ±1% resistor (0603)                                                |
| R4                   |     1 | 12.4k ±1% resistor (0603)                                                |
| R5                   |     1 | 86.6k ±1% resistor (0603)                                                |
| R6                   |     1 | 18.2 ±1% resistor (0603)                                                 |
| R7                   |     1 | 2.49k ±1% resistor (0603)                                                |
| R8, R16, R17         |     3 | 0ohm jumpers (0603)                                                      |
| R9                   |     1 | 0.025 ±1% sense resistor (2512) Vishay Dale WSL2512R0250F                |
| R10                  |     1 | 475k ±1% resistor (0603)                                                 |
| R11, R12             |     2 | 10.0k ±1% resistors (0603)                                               |
| R13                  |     1 | 4.99k ±1% resistor (0603)                                                |
| R14                  |     1 | 0.2 ±1% sense resistor (2512) Vishay Dale WSL2512R2000F                  |
| R15                  |     1 | 1.00k ±1% resistor (0603)                                                |
| R19, R20             |     2 | 499k ±1% resistors (0603)                                                |
| U1                   |     1 | Automotive High Voltage LED Controller (20 TQFN-EP) Maxim MAX20090ATP/V+ |
| -                    |     3 | Shunts                                                                   |
| -                    |     1 | PCB: MAX20090 EVALUATION KIT                                             |

Evaluates: MAX20090

│

## MAX20090 EV Kit Schematics

<!-- image -->

## MAX20090 EV Kit PCB Layouts

Component Placement Guide-Top

<!-- image -->

Evaluates: MAX20090

## MAX20090 EV Kit PCB Layouts (continued)

PCB Layout-Top

<!-- image -->

## MAX20090 EV Kit PCB Layouts (continued)

PCB Layout-Bottom

<!-- image -->

## MAX20090 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. MaxiP Integrated reserves the right to change the circuitry and specifications Zithout notice at any tiPe.

│

Evaluates: MAX20090