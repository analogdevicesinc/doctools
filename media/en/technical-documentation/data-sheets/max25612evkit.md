<!-- lastmod 2022-08-03 -->
## MAX25612 Evaluation Kit

## General Description

The MAX25612 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX25612  automotive  highvoltage,  high-brightness  LED  (HB  LED)  synchronous controller. The EV kit is set up for boost and buck-boost configurations and operates from a 6V-to-18V DC supply voltage. The EV kit is configured to deliver up to 2A to one string  of  LEDs.  The  total  voltage  of  the  string  can  vary from 3V to 48V.

## Features

- Configured for Boost or Buck-Boost Mode
- Synchronous Controller and Power Stage
- Analog Dimming Control
- Analog or Digital PWM Dimming

Ordering Information appears at end of data sheet.

Evaluates: MAX25612

## Quick Start

## Required Equipment

- MAX25612 EV kit
- 12V, 5A  DC power supply
- A series-connected LED string rated at 2A
- Oscilloscope with a current probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are made.

- 1) Verify that all jumpers (J1-J2) are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the IN PCB pad or the red banana plug receptacle.
- 3) Connect the negative terminal of the 12V supply to the GND PCB pad or the black banana plug recep -tacle.
- 4) Connect the LED string across the LED+ and LEDPCB pads on the EV kit for buck-boost configura -tion. For boost configuration, connect the LED string across the LED+ and GND PCB pads on the EV kit. The LED string voltage should be higher than the input voltage in this configuration.
- 5) Clip the current probe on the wire connected to the LED string.
- 6) Turn on the DC power supply.
- 7) Verify that the LEDs turn on.
- 8) Verify that the oscilloscope displays approximately 2A.

<!-- image -->

## Detailed Description

The MAX25612 EV kit provides a proven design to evaluate  the  MAX25612  synchronous  high-voltage  HB  LED driver  with  integrated  high-side  current  sense.  The  EV kit is set up for boost and buck-boost configurations and operates from a 6V-to-18V DC supply voltage. The EV kit is  configured to deliver up to 2A to a series LED string. The string forward voltage can vary from 3V to 48V.

## Analog Dimming Control (ICTRL)

When a shunt is installed across pins 1-2 of J2, the LED current is set by the R1/R2 resistor-divider. The LED current  is  linearly  proportional  to  the  voltage  on  the  ICTRL input. An ICTRL voltage of 200mV or less corresponds to ILED = 0A. An ICTRL voltage of 1.3V or more corresponds to I LED = 2.2A. Between 200mV and 1.3V, the LED current is linearly adjusted between 0A and 2.2A, respectively.

To set the LED current with an external reference, remove the shunt installed across J2, and apply a voltage across the ICTRL test point and the SGND pad.

## Table 1. Table Title here

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                      |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Analog voltage on the PWMDIM input of the device is controlled by the voltage divider of R13 and R18. Adjust R18 to vary the analog voltage on PWMDIM, which varies the LED pulse width using the internal 200Hz dimming signal. |
| J1       | 2-3              | PWMDIM input of the device is connected to ground. LEDs are off.                                                                                                                                                                 |
| J1       | Open             | PWMDIM input of the device is disconnected from the voltage divider. Apply a digital PWM signal across the PWMDIM test point and the SGND pad to control the LEDs.                                                               |
| J2       | 1-2*             | ICTRL pin is now connected to a voltage-divider from V CC to ground. Adjusting R2 allows programming the LED current from 0 to 2.2A.                                                                                             |
| J2       | Open             | Disconnects the ICTRL pin of the device from the external voltage divider on the V CC pin. Allows the user to apply an external voltage across the ICTRL test point and the SGND pad to set the LED current level.               |

* Default position.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25612EVKIT# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX25612

## Pulse-Dimming Input (PWMDIM)

When a shunt is installed across pins 1-2 of J1, the PWM duty cycle is set by the R13/R18 resistor-divider. In this mode of operation, an analog voltage between 0.2V and 3V generates an LED pulse duty cycle between 0% and 100%, respectively. The frequency of this LED pulse mod -ulation  is  200Hz,  which  is  generated  internally  from  the MAX25612 device. When a shunt is installed across pins 2-3 of J1, the PWMDIM input of the device is grounded and the LEDs are off.

Alternatively,  an  external  signal  (either  analog  or  digital PWM) can be applied directly across the PWMDIM test point  and  the  SGND  pad  to  control  the  LEDs.  The  J1 jumper should be left open when using an external source attached to the PWMDIM test point.

│

## MAX25612 EV Kit Bill of Materials

| REF_DES                          |   QTY | DESCRIPTION                                                                                                                                                              |
|----------------------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C19                          |     2 | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +125 DEGC; TC=X7R                                                            |
| C2, C16                          |     2 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                              |
| C3, C11-C13, C23                 |     5 | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                                                                        |
| C6                               |     1 | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                |
| C7, C48                          |     2 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                        |
| C9                               |     1 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                          |
| C20                              |     1 | CAPACITOR; THROUGH HOLE-RADIAL LEAD; ALUMINUM-ELECTROLYTIC; 47UF; 100V; TOL=20%; MODEL=KZE SERIES                                                                        |
| C21                              |     1 | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                                              |
| C50                              |     1 | CAPACITOR; SMT (0402); CERAMIC CHIP; 470PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                               |
| D1, D2                           |     2 | DIODE; SWT; SMT (SOD-323); PIV=75V; IF=0.3A                                                                                                                              |
| D9                               |     1 | DIODE; SCH; SMT (SOD-323F); PIV=100V; IF=0.25A                                                                                                                           |
| FB1                              |     1 | INDUCTOR; SMT (1210); FERRITE-BEAD; 1000 IMPEDANCE AT 100MHZ; TOL=+/-30%; 2A                                                                                             |
| FLTB, ICTRL, PWMDIM, VCC         |     4 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                   |
| GND, J3, J4, J6, LED+, LED-, VIN |     7 | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                 |
| J1                               |     1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                 |
| J2                               |     1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                 |
| L1                               |     1 | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 3.3UH; TOL=+/-20%; 5.9A                                                                                                         |
| L2                               |     1 | INDUCTOR; SMT; COMPOSITE CORE; 10UH; TOL=+/-20%; 8.7A                                                                                                                    |
| MH1-MH4                          |     4 | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                |
| N1                               |     1 | TRAN; NCH; POWERPAK8X8L; PD-(71W); I-(63A); V-(60V)                                                                                                                      |
| P1                               |     1 | TRAN; P-CHANNEL 60-V (D-S) MOSFET; PCH; POWERPAK1212-8; PD-(3.8W); I-(-5.7A); V-(-60V)                                                                                   |
| R1                               |     1 | RESISTOR; 0402; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                 |
| R2, R18                          |     2 | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM                     |
| R5                               |     1 | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                      |
| R6                               |     1 | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                   |
| R7                               |     1 | RESISTOR; 0402; 2.37K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                  |
| R8                               |     1 | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                      |
| R10                              |     1 | RES; SMT (0402); 475K; 1%; +/-100PPM/DEGC; 0.1W                                                                                                                          |
| R11, R19                         |     2 | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                   |
| R13                              |     1 | RESISTOR; 0402; 3K OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                  |
| R14                              |     1 | RESISTOR; 0402; 40.2K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                |
| R15                              |     1 | RESISTOR; 0402; 12.4K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                  |
| R17                              |     1 | RESISTOR; 0402; 86.6K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                  |
| R22                              |     1 | RESISTOR; 1206; 0.015 OHM; 1%; 75PPM; 1W; THICK FILM                                                                                                                     |
| R24                              |     1 | RESISTOR; 1206; 0.1 OHM; 1%; 100PPM; 1W; THICK FILM                                                                                                                      |
| R65                              |     1 | RESISTOR, 0402, 4.99 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                |
| SU1, SU2                         |     2 | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT=PHOSPHOR BRONZE                                                |
| TP1                              |     1 | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                                                         |
| TP2                              |     1 | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                                                                       |
| U1                               |     1 | Maxim MAX25612AUP/V+; AUTOMOTIVE SYNCHRONOUS HIGH VOLTAGE LED CONTROLLER; TSSOP20-EP; PACKAGE OUTLINE DRAWING: 21-100132; LAND PATTERN: 90-100049; PACKAGE CODE: U20E+3C |
| PCB                              |     1 | PCB:MAX25612                                                                                                                                                             |

Evaluates: MAX25612

## MAX25612 EV Kit Schematics

<!-- image -->

│

## MAX25612 EV Kit PCB Layouts

Silk Top

<!-- image -->

Top

<!-- image -->

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX25612