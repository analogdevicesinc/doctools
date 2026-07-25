<!-- lastmod 2022-08-03 -->
## MAX25612B Evaluation Kit

## General Description

The MAX25612B evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX25612B  automotive  highvoltage, high-brightness LED (HB LED) synchronous controller. The EV kit is set up for a SEPIC configuration and operates from a 6V to 18V DC supply voltage. The EV kit is configured to deliver up to 2A to one string of LEDs. The total voltage of the string can vary from 3V to 24V.

## Features

- Configured for SEPIC Mode
- Synchronous Controller and Power Stage
- Analog Dimming Control
- Analog or Digital PWM Dimming

Ordering Information appears at end of data sheet.

Evaluates: MAX25612B

## Quick Start

## Required Equipment

- MAX25612B EV kit
- 12V, 5A  DC power supply
- A series-connected LED string rated at 2A
- Oscilloscope with a current probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are made.

- 1) Verify that all jumpers (J1-J2) are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the IN PCB pad or the red banana plug receptacle.
- 3) Connect the negative terminal of the 12V supply to the GND PCB pad or the black banana plug receptacle.
- 4) Connect the LED string across the LED+ and GND PCB pads on the EV kit for SEPIC configuration. The LED string voltage should be between the minimum and maximum input voltage in this configuration.
- 5) Clip the current probe on the wire connected to the LED string.
- 6) Turn on the DC power supply.
- 7) Verify that the LEDs turn on.
- 8) Verify that the oscilloscope displays approximately 2A.

<!-- image -->

## Detailed Description

The MAX25612B EV kit provides a proven design to evaluate the MAX25612B synchronous high-voltage HB LED driver with integrated high-side current sense. The EV kit is set up for a SEPIC configuration and operates from a 6V to 18V DC supply voltage. The EV kit is configured to deliver up to 2A to a series LED string. The string forward voltage can vary from 3V to 24V.

## Analog Dimming Control (ICTRL)

When a shunt is installed across pins 1-2 of J2, the LED current is set by the R1/R2 resistor-divider. The LED current  is  linearly  proportional  to  the  voltage  on  the  ICTRL input. An ICTRL voltage of 200mV or less corresponds to I LED = 0A. An ICTRL voltage of 1.3V or more corresponds to I LED  = 2.2A. Between 200mV and 1.3V, the LED current is linearly adjusted between 0A and 2.2A, respectively.

Evaluates: MAX25612B

## Pulse-Dimming Input (PWMDIM)

When  a  shunt  is  installed  across  pins  1-2  of  J1,  the PWM duty cycle is  set  by  the  R13/R18  resistor-divider. In  this  mode  of  operation,  an  analog  voltage  between 0.2V and 3V generates an LED pulse duty cycle between 0% and 100%, respectively. The  frequency  of  this  LED pulse modulation is 200Hz, which is generated internally from the MAX25612B device. When a shunt is installed across pins 2-3 of J1, the PWMDIM input of the device is grounded and the LEDs are off.

Alternatively,  an  external  signal  (either  analog  or  digital PWM) can be applied directly across the PWMDIM test point  and  the  SGND  pad  to  control  the  LEDs.  The  J1 jumper should be left open when using an external source attached to the PWMDIM test point.

To set the LED current with an external reference, remove the shunt installed across J2, and apply a voltage across the ICTRL test point and the SGND pad.

Table 1. MAX25612B EV Kit Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                      |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Analog voltage on the PWMDIM input of the device is controlled by the voltage divider of R13 and R18. Adjust R18 to vary the analog voltage on PWMDIM, which varies the LED pulse width using the internal 200Hz dimming signal. |
| J1       | 2-3              | PWMDIM input of the device is connected to ground. LEDs are off.                                                                                                                                                                 |
| J1       | Open             | PWMDIM input of the device is disconnected from the voltage divider. Apply a digital PWM signal across the PWMDIM test point and the SGND pad to control the LEDs.                                                               |
| J2       | 1-2*             | ICTRL pin is now connected to a voltage-divider from V CC to ground. Adjusting R2 allows programming the LED current from 0 to 2.2A.                                                                                             |
| J2       | Open             | Disconnects the ICTRL pin of the device from the external voltage divider on the V CC pin. Allows the user to apply an external voltage across the ICTRL test point and the SGND pad to set the LED current level.               |

* Default position.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX25612BEVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX25612B EV Kit Bill of Materials

|   ITEM | REF_DES                    |   QTY | MFG PART #                                                                                                                                   | MANUFACTURER                                     | VALUE        | DESCRIPTION                                                                                                            | COMMENTS   |
|--------|----------------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C19                    |     2 | GRM32ER72A225KA35; CGA6N3X7R2A225K230AB;CC1 210KKX7R0BB225; HMK325B7225KM                                                                    | MURATA;TDK;YAGEO; TAIYO YUDEN                    | 2.2UF        | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +125 DEGC; TC=X7R          |            |
|      2 | C2, C16, C25               |     3 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                                                        | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC;TAIYO YUDEN | 0.01UF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |            |
|      3 | C3, C5, C8, C10-C13, C15   |     8 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10                                                                                      | MURATA;MURATA; MURATA                            | 4.7UF        | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |            |
|      4 | C4, C22, C24               |     3 | C0603C471K1RAC; 06031C471KAT2A                                                                                                               | KEMET;AVX                                        | 470PF        | CAPACITOR; SMT; 0603; CERAMIC; 470pF; 100V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC            |            |
|      5 | C6                         |     1 | C1005X5R1A475K050                                                                                                                            | TDK                                              | 4.7UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |            |
|      6 | C7, C17, C48               |     3 | C0402C104J4RAC; GCM155R71C104JA55                                                                                                            | KEMET;MURATA                                     | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                      |            |
|      7 | C9                         |     1 | C0402X5R100-105KNE; GRM155R61A105KE15                                                                                                        | VENKEL LTD.;MURATA                               | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                        |            |
|      8 | C14                        |     1 | C0805C224K5RAC; GRM21BR71H224KA01; CGJ4J2X7R1H224K125AA; UMK212B7224KG; C2012X7R1H224K125AA                                                  | KEMET;MURATA;TDK; TAIYO YUDEN;TDK                | 0.22UF       | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |            |
|      9 | C18                        |     1 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; CGA2B3X7R1H104K050BE | TDK;TDK;MURATA; MURATA;TDK;TAIYO YUDEN;TDK       | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
|     10 | C20                        |     1 | EKZE101ELL470MJC5S                                                                                                                           | NIPPON CHEMI-CON                                 | 47UF         | CAPACITOR; THROUGH HOLE-RADIAL LEAD; ALUMINUM-ELECTROLYTIC; 47UF; 100V; TOL=20%; MODEL=KZE SERIES                      |            |
|     11 | C21                        |     1 | CGA3E3X7S2A104K080AB; C1608X7S2A104K080AB                                                                                                    | TDK;TDK                                          | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                            |            |
|     12 | C23                        |     1 | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB; GCM32DC72A475KE02                                                                                | TDK;TDK;MURATA                                   | 4.7UF        | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                      |            |
|     13 | C50                        |     1 | C0402S471K5RAC; GRM155R71H471K; GRM155R71H471KA01; C1005X7R1H471K050BA                                                                       | KEMET;MURATA; MURATA;TDK                         | 470PF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 470PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
|     14 | D1, D2                     |     2 | 1N4148WS-7                                                                                                                                   | DIODES INCORPORATED                              | 1N4148WS-7-F | DIODE; SWT; SMT (SOD-323); PIV=75V; IF=0.3A                                                                            |            |
|     15 | D3                         |     1 | BZT52C10S-7-F                                                                                                                                | DIODES INCORPORATED                              | 10V          | DIODE; ZNR; SMT (SOD-323); VZ=10V; IZ=0.005A                                                                           |            |
|     16 | D9                         |     1 | BAT46WJ                                                                                                                                      | NXP                                              | BAT46WJ,115  | DIODE; SCH; SMT (SOD-323F); PIV=100V; IF=0.25A                                                                         |            |
|     17 | FB1, FB2                   |     2 | BLM21PG220SN1                                                                                                                                | MURATA                                           |              | 22 INDUCTOR; SMT (0805); FERRITE-BEAD; 22; TOL=+/-25%; 6A; -55 DEGC TO +125 DEGC                                       |            |
|     18 | FLTB, ICTRL, PWMDIM, VCC   |     4 | 5007                                                                                                                                         | KEYSTONE                                         | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     19 | GND, J3, J4, J6, LED+, VIN |     6 | 9020 BUSS                                                                                                                                    | WEICO WIRE                                       | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                               |            |
|     20 | J1                         |     1 | PCC03SAAN                                                                                                                                    | SULLINS                                          | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                               |            |

Evaluates: MAX25612B

## MAX25612B EV Kit Bill of Materials (continued)

| ITEM     | REF_DES   | QTY   | MFG PART #                                    | MANUFACTURER                        | VALUE                                                       | DESCRIPTION                                                                                                                                                                          | COMMENTS   |
|----------|-----------|-------|-----------------------------------------------|-------------------------------------|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 21       | J2        | 1     | PCC02SAAN                                     | SULLINS                             | PCC02SAAN                                                   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                             |            |
| 22       | L1, L2    | 2     | XAL8080-103ME                                 | COILCRAFT                           | 10UH                                                        | INDUCTOR; SMT; COMPOSITE CORE; 10UH; TOL=+/-20%; 8.7A                                                                                                                                | DNP        |
| 23       | L3        | 1     | MSD1278T-103ML                                | COILCRAFT                           | MSD1278T-103ML                                              | INDUCTOR; SMT; FERRITE; MSD1278T-103ML; 20%; 3.62A                                                                                                                                   |            |
| 24       | L4        | 1     | XAL5030-332ME                                 | COILCRAFT                           | 3.3UH                                                       | INDUCTOR; SMT; CORE MATERIAL= COMPOSITE; 3.3UH; TOL=+/-20%; 5.9A                                                                                                                     |            |
| 25       | L5        | 1     | BLM31KN601SH1                                 | MURATA                              | 600                                                         | INDUCTOR; SMT (1206); FERRITE-BEAD; 600; TOL=25%; 2.9A                                                                                                                               |            |
| 26       | MH1-MH4   | 4     | 9032                                          | KEYSTONE                            | 9032                                                        | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                            |            |
| 27       | N1        | 1     | SQJQ960EL-T1_GE3                              | VISHAY                              | SQJQ960EL-T1_GE3                                            | TRAN; NCH; POWERPAK8X8L; PD-(71W); I-(63A); V-(60V)                                                                                                                                  |            |
| 28       | P1        | 1     | SI7415DN-T1-GE3                               | VISHAY SILICONIX                    | SI7415DN-T1-GE3                                             | TRAN; P-CHANNEL 60-V (D-S) MOSFET; PCH; POWERPAK1212-8; PD-(3.8W); I-(- 5.7A); V-(-60V)                                                                                              |            |
| 29       | R1        | 1     | ERJ-2RKF2492                                  | PANASONIC                           | 24.9K                                                       | RESISTOR; 0402; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                             |            |
| 30       | R2, R18   | 2     | 3296W-1-103LF                                 | BOURNS                              | 10K                                                         | RESISTOR; THROUGH- HOLE-RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM                                |            |
| 31       | R3        | 1     | CRCW06034K99FK; ERJ-3EKF4991                  | VISHAY DALE; PANASONIC              | 4.99K                                                       | RESISTOR; 0603; 4.99K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                 |            |
| 32       | R5        | 1     | CRCW04021M00FK                                | VISHAY DALE                         | 1M                                                          | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                  |            |
| 33       | R6        | 1     | ERJ-2RKF49R9                                  | PANASONIC                           | 49.9 RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.1W; THICK FILM | 49.9 RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                          |            |
| 34       | R7        | 1     | ERJ-2RKF2371                                  | PANASONIC                           | 2.37K                                                       | RESISTOR; 0402; 2.37K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                              |            |
| 35       | R8        | 1     | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001 | VISHAY DALE;YAGEO PHICOMP;ROHM SEMI | 1K                                                          | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                  |            |
| 36       | R10       | 1     | CRCW0603330KFK                                | VISHAY DALE                         | 330K                                                        | RESISTOR, 0603, 330K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                              |            |
| 37       | R11, R19  | 2     | ERJ-2RKF1002                                  | PANASONIC                           | 10K                                                         | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                               |            |
| 38       | R13       | 1     | CRCW04023K00FK                                | VISHAY DALE                         | 3K                                                          | RESISTOR; 0402; 3K OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                              |            |
| 39       | R14       | 1     | CRCW040240K2FK                                | VISHAY DALE                         | 40.2K                                                       | RESISTOR; 0402; 40.2K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                            |            |
| 40       | R15       | 1     | ERJ-2RKF1242                                  | PANASONIC                           | 12.4K                                                       | RESISTOR; 0402; 12.4K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                              |            |
| 41       | R17       | 1     | CRCW040286K6FK                                | VISHAY DALE                         | 86.6K                                                       | RESISTOR; 0402; 86.6K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                            |            |
| 42       | R22       | 1     | ERJ-8CWFR015                                  | PANASONIC                           | 0.015                                                       | RESISTOR; 1206; 0.015 OHM; 1%; 75PPM; 1W; THICK FILM                                                                                                                                 |            |
| 43       | R24       | 1     | ERJ-8BWFR100                                  | PANASONIC                           | 0.1                                                         | RESISTOR; 1206; 0.1 OHM; 1%; 100PPM; 1W; THICK FILM                                                                                                                                  |            |
| 44       | R65       | 1     | CRCW04024R99FK; RK73H1ELTP4991F               | VISHAY DALE;KOA SPEER ELECTRONICS   | 4.99                                                        | RESISTOR, 0402, 4.99 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                            |            |
| 45       | SU1, SU2  | 2     | SNT-100-BK-G                                  | SAMTEC                              | SNT-100-BK-G                                                | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT=PHOSPHOR BRONZE                                                            |            |
| 46       | TP1       | 1     | 7006                                          | KEYSTONE                            | 7006                                                        | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                                                                     |            |
| 47       | TP2       | 1     | 7007                                          | KEYSTONE                            | 7007                                                        | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                                                                                   |            |
| 48       | U1        | 1     | MAX25612BATP/VY+                              | MAXIM                               | MAX25612BATP/VY+                                            | EVKIT PART - IC; MAX25612BATP/VY+; AUTOMOTIVE SYNCHRONOUS HIGH VOLTAGE LED CONTROLLER; TQFN20-EP; PACKAGE OUTLINE DRAWING: 21-100068; LAND PATTERN: 90-0037; PACKAGE CODE: T2044Y+3C |            |
| 49 TOTAL | PCB       | 1 80  | MAX25612B                                     | MAXIM                               | PCB                                                         | PCB:MAX25612B                                                                                                                                                                        | -          |

## MAX25612B EV Kit Schematics

<!-- image -->

Evaluates: MAX25612B

## MAX25612B EV Kit PCB Layouts

MAX25612B EV Kit PCB Layout-Silk Top

<!-- image -->

MAX25612B EV Kit PCB Layout-Top

<!-- image -->

MAX25612B EV Kit PCB Layout-Bottom

<!-- image -->

MAX25612B EV Kit PCB Layout-Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/20            | Initial release | -               |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time.

<!-- image -->

│

Evaluates: MAX25612B