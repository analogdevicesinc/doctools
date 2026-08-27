<!-- lastmod 2022-08-03 -->
## MAX2560 Evaluation Kit

## General Description

The MAX25600 evaluation kit (EV kit) provides a reliable platform  for  validating  designs  that  use  the  MAX25600 automotive high-voltage, high-brightness LED (HB LED) buck boost controller. The EV kit operates from 8V to 48V DC supply voltage. The EV kit is configured to deliver up to 1.5A to one string of one to fifteen LEDs. The total volt -age of the string can vary from 3V to 60V.

## Benefits and Features

- 8V to 48V Input Voltage Range
- Demonstrates Analog Dimming Control, Digital Dimming Control
- Demonstrates Input Current Limit
- Demonstrates LED Current Monitoring function
- Demonstrates LED Short and Open Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX2560

## Quick Start

## Required Equipment

- MAX25600 EV kit
- 12V, 5A DC power supply
- A series-connected LED string rated at least 1.5A
- Oscilloscope with a current probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are made.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the VINP1 board PCB pad and the negative terminal to the GND1\_board PCB pad.
- 3) Connect the LED string across the LED+ and LEDPCB pads on the EV kit. The Anode of the LED string should go to the LED+ PCB pad and Cathode of the LED string to LED- PCB pad.
- 4) Clip the current probe on the wire connected to the LED string.
- 5) Turn on the DC power supply.
- 6) Verify that the LEDs turn on.
- 7) Verify that the oscilloscope displays approximately 1.5A.

<!-- image -->

## MAX25600 Evaluation Kit

## Detailed Description

The MAX25600 evaluation kit (EV kit) provides a reliable platform  for  validating  designs  that  use  the  MAX25600 automotive high-voltage, high-brightness LED (HB LED) buck boost controller. The EV kit operates from 8V to 48V DC supply voltage. The EV kit is configured to deliver up to  1.5A  to  one  string  of  LEDs.  The  total  voltage  of  the string can vary from 3V to 60V.

## Analog Dimming Control (ICTRL)

When J2 is closed, the LED current is set by the resistive divider from VCC. The equation to set the LED current is

<!-- formula-not-decoded -->

## PWM Dimming

The EV kit demonstrates the PWM dimming feature of the MAX25600 using either an external PWM signal, or a DC voltage at the PWMDIM pin.

## External PWM dimming:

Keep  J4  open  and  remove  the  0.1uF  C55  capacitor (installed by default). Connect an external PWM signal to the PWMDIM test point. Vary the duty cycle to increase or  decrease  the  intensity  of  the  HB  LED  string.  The PWMDIM input of the device has a 2V (max) rising threshold and a 0.4V (min) falling threshold and is compatible with 3.3V and 5V logic-level signals.

## Analog-to-PWM dimming:

In the case of the EV kit, ILED is set to 1.5A. Use a screw driver on the potentiometer R21 to adjust the LED current.

Keep  J4  open  and  keep  the  0.1uF  C55  (installed  by default). The PWM dimming duty cycle is set by the voltage at PWMDIM between 0.2V (0% duty) and 3.2V (100% duty). Drive the PWMDIM test point with an external DC source. PWMDIM voltages above 3.2V set the dimming duty cycle to 100%.

## Table 1. MAX25600 EV Kit Jumper Descriptions

| JUMPE R   | SHUNT POSITION   | DESCRIPTION                                                                                                                    |
|-----------|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| J1        | Closed           | Short the PMOS PWM dimming switch.                                                                                             |
| J1        | Open*            | PWM dimming done with the PMOS switch                                                                                          |
| J2        | Closed           | Uses the resistive divider from VCC and the potentiometer R21 to set the LED current.                                          |
| J2        | Open             | Apply an external DC voltage between 0.2V to 1.2V for setting LED current.                                                     |
| J3        | Open             | Connect an external power supply for the IN pin of the IC, using the IN_IC PAD.                                                |
| J3        | 1-2*             | Connect the IN input of the IC to the VIN power supply connected on VINP1 PAD.                                                 |
| J3        | 2-3              | The IN and VCC inputs of the IC are shorted and should be driven with an external 5V supply.                                   |
| J4        | Open             | Apply an external PWM clock source for PWM dimming or apply an external DC source between 0.2V to 3.2V for analog PWM dimming. |
| J4        | 1-2*             | PWMDIM pin pulled to VCC for 100% duty.                                                                                        |
| J4        | 2-3              | PWMDIM pin pulled to GND to turn OFF.                                                                                          |

│

Evaluates: MAX25600

## Current Monitor Output

The  EV  kit  also  demonstrates  the  current-monitor  output feature of the buck boost controller. The MAX25600 includes a current monitor on the IOUTV pin. The IOUTV voltage is an analog voltage indication of the LED current when DIM is high. The voltage on the IOUTV pin is given by the following equation:

<!-- formula-not-decoded -->

## Input-Current Limit

The MAX25600 features circuitry that limits the input current  during  line  dropouts.  Refer  to  the  IC  datasheet  for details on setting the input current limit.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25600EVKIT# | EV Kit |

# Denotes RoHS compliant.

## External VCC input

The EV kit demonstrates operation of the buck boost controller with an external VCC input. In this case, the internal LDO is not used. Move the shunt to pins 2-3 on J3 (the IN and VCC pins of the buck controller are shorted together). Apply an external power supply between 4.6V and 5.5V on the IN\_IC PCB pad to allow switching of the device.

## Faults

## Open and Short LEDs:

The IC detects the open and short fault conditions of the LEDs and the fault  pin  is  pulled  low.  The  fault  pin  also goes low when there is an overtemperature condition. The fault pin is an open-drain output and is active low.

## MAX25600 EV Kit Bill of Materials

| ITEM   | QTY   | REF DES                                                    | MFG PART #                                                                                              | MANUFACTURER                                                      | VALUE           | DESCRIPTION                                                                                                                                          |
|--------|-------|------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | 9     | AGND, ICTRL, IN_IC, LED+, LED-, PGND, PGND1, PWMDIM, VINP1 | 9020 BUSS                                                                                               | WEICO WIRE                                                        | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFTDRAWN BUS TYPE-S; 20AWG                                                              |
| 2      | 6     | C1, C4, C20, C22, C24, C55                                 | 885012206071;CGJ3E2X7R1E104K080AA; C1608X7R1E104K080AA;C0603C104K3RAC; GRM188R71E104KA01;C1608X7R1E104K | WURTH ELECTRONICS INC;TDK; TDK;KEMET                              | 0.1UF           | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC                                           |
| 3      | 9     | C2, C3, C6, C7, C9, C10, C12, C13, C15                     | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB                                                              | TDK;TDK                                                           | 4.7UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                                                    |
| 4      | 1     | C5                                                         | CGA3E3X7S2A104K080AB                                                                                    | TDK                                                               | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                          |
| 5      | 3     | C8, C14, C21                                               | CC0603KRX7R0BB104;GRM188R72A104KA35; GCJ188R72A104KA01;HMK107B7104KA; 06031C104KAT2A                    | YAGEO;MURATA;MURATA; TAIYO YUDEN;AVX                              | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                          |
| 6      | 1     | C11                                                        | EEV-FK2A680Q                                                                                            | PANASONIC                                                         | 68UF            | CAPACITOR; SMT (CASE_H13); ALUMINUM- ELECTROLYTIC; 68UF; 100V; TOL=20%; MODEL=EEV SERIES                                                             |
| 7      | 1     | C17                                                        | C0603C471K1RAC; 06031C471KAT2A                                                                          | KEMET;AVX                                                         | 470PF           | CAPACITOR; SMT; 0603; CERAMIC; 470pF; 100V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC                                          |
| 8      | 1     | C18                                                        | C0603X5R160-105KNP;EMK107BJ105KA; C1608X5R1C105K080AA;GRM188R61C105K; 0603YD105KAT2A;CL10A105KO8NNN     | VENKEL LTD.;TAIYO YUDEN; TDK;MURATA;AVX;SAMSUNG ELECTRO-MECHANICS | 1UF             | CAPACITOR; SMT; 0603; CERAMIC; 1uF; 16V; 10%; X5R; -55degC to + 85degC; 0 +/-15% degC MAX.USE 20-0001u- 63 FOR NEW DESIGN                            |
| 9      | 1     | C19                                                        | C1608C0G1E103J080AA                                                                                     | TDK                                                               | 0.01UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                   |
| 10     | 1     | C23                                                        | C1608X5R1E225K;TMK107ABJ225KA; TMK107BJ225KA;GRM188R61E225KA12                                          | TDK;TAIYO YUDEN; TAIYO YUDEN;MURATA                               | 2.2UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                    |
| 11     | 1     | C25                                                        | C0603H102J1GAC                                                                                          | KEMET                                                             | 1000PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=5%; MODEL=HT SERIES; TG=-55 DEGC TO +200 DEGC; TC=C0G                                         |
| 12     | 1     | C51                                                        | CGA3E2X8R1E104K080AE                                                                                    | TDK                                                               | 0.1UF           | CAP; SMT (0603); 0.1UF; 10%; 25V; X8R; CERAMIC CHIP                                                                                                  |
| 13     | 4     | D1, D2, D5, D6                                             | 1N4148W-7-F                                                                                             | DIODES INCORPORATED                                               | 1N4148W-7-F     | DIODE; SWT; SMT (SOD-123); PIV=100V; IF=0.3A; -65 DEGC TO +150 DEGC                                                                                  |
| 14     | 2     | D7, D8                                                     | BAT46WJ                                                                                                 | NXP                                                               | BAT46WJ,115     | DIODE; SCH; SMT (SOD-323F); PIV=100V; IF=0.25A                                                                                                       |
| 15     | 1     | FB1                                                        | HF70ACB322513                                                                                           | TDK                                                               | 52              | INDUCTOR; SMT (1210); FERRITE-BEAD; 52; TOL=+/-25%; 0.4A; -40 DEGC TO +125 DEGC                                                                      |
| 16     | 3     | FLTB, IOUTV, VCC                                           | 5007                                                                                                    | KEYSTONE                                                          | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                               |
| 17     | 2     | J1, J2                                                     | PCC02SAAN                                                                                               | SULLINS                                                           | PCC02SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                             |
| 18     | 2     | J3, J4                                                     | PCC03SAAN                                                                                               | SULLINS                                                           | PCC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                             |
| 19     | 1     | L1                                                         | MSS1278-103ML                                                                                           | COILCRAFT                                                         | 10UH            | INDUCTOR; SMT; FERRITE CORE; 10UH; TOL=+/-20%; 5.7A                                                                                                  |
| 20     | 1     | L2                                                         | MSS1278T-472ML                                                                                          | COILCRAFT                                                         | 4.7UH           | INDUCTOR; SMT; FERRITE BOBBIN CORE; 4.7UH; TOL=+/-0.2; 6.2A; -40 DEGC TO +125 DEGC                                                                   |
| 21     | 2     | Q1, Q3                                                     | SQJA84EP-T1_GE3                                                                                         | VISHAY SILICONIX                                                  | SQJA84EP-T1_GE3 | TRAN; AUTOMOTIVE N-CHANNEL MOSFET ; NCH; SO-8L; PD-(55W); I-(46A); V-(80V)                                                                           |
| 22     | 1     | Q2                                                         | BUK9Y72-80E                                                                                             | NEXPERIA                                                          | BUK9Y72-80E     | TRAN; N-CH LOGIC LEVEL MOSFET ; NCH; LFPAK; PD-(45W); I-(15A); V-(80V)                                                                               |
| 23     | 1     | Q4                                                         | BUK9Y25-80E                                                                                             | NEXPERIA                                                          | BUK9Y25-80E     | TRAN; N-CH LOGIC LEVEL MOSFET ; NCH; LFPAK; PD-(95W); I-(37A); V-(80V)                                                                               |
| 24     | 1     | Q5                                                         | SI7415DN-T1-GE3                                                                                         | VISHAY SILICONIX                                                  | SI7415DN-T1-GE3 | TRAN; P-CHANNEL 60-V (D-S) MOSFET; PCH; POWERPAK1212-8; PD-(3.8W); I-(-5.7A); V-(-60V)                                                               |
| 25     | 10    | R1, R3, R4, R6-R8, R13, R25, R27, R28                      | CRCW06030000Z0                                                                                          | VISHAY DALE                                                       | 0               | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                  |
| 26     | 2     | R2, R12                                                    | CRCW06035R62FK                                                                                          | VISHAY DALE                                                       | 5.62            | RESISTOR; 0603; 5.62 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                              |
| 27 28  | 5     | R5, R11, R17, R19, R20 R9                                  | 301-10K-RC CSR1206FTR130                                                                                | XICON STACKPOLE ELECTRONICS INC                                   | 10K 0.13        | RESISTOR, 0603, 10K OHM, 5%, 200PPM, 1/16W, THICK FILM RESISTOR; 1206; 0.13 OHM; 1%; 100PPM; 0.5W; THICK FILM                                        |
| 29     | 1 1   | R10                                                        | ERJ-3EKF5113                                                                                            | PANASONIC                                                         | 511K            | RESISTOR; 0603; 511K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                               |
| 30     | 1     | R16                                                        | CRCW060354K9FK                                                                                          | VISHAY DALE                                                       | 54.9K           | RES; SMT (0603); 54.9K; 1%; +/-100PPM/DEGC; 0.1W                                                                                                     |
| 31     | 1     | R18                                                        | 288-0603-49.9K-RC                                                                                       | XICON                                                             | 49.9K           | RESISTOR, 0603, 49.9K OHM, 0.1%, 10PPM, 1/16W, THIN FILM                                                                                             |
| 32     | 1     | R21                                                        | 3296W-1-103LF                                                                                           | BOURNS                                                            | 10K 560         | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
| 33     | 1     | R22                                                        | CRCW0603560RFK                                                                                          | VISHAY DALE                                                       |                 | RESISTOR, 0603, 560 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                               |
| 34     | 1     | R23                                                        | RG1608P-101-B;ERA-3YEB101V                                                                              | SUSUMU CO LTD.;PANASONIC                                          | 100             | RESISTOR; 0603; 100 OHM; 0.1%; 25PPM; 0.1W; THICK FILM                                                                                               |
| 35     | 1     | R24 R26                                                    | RCS060312R0FK                                                                                           | VISHAY DALE                                                       | 12              | RESISTOR; 0603; 12 OHM; 1%; 100PPM; 0.25W; THICK FILM                                                                                                |
| 36 37  | 1     | R55                                                        | CRCW060349R9FK                                                                                          | VISHAY DALE VISHAY DALE                                           | 49.9 1          | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0805; 1 OHM; 1%; 100PPM; 0.125W; THICK                                             |
| 38     | 1 2   | RN1, RN2                                                   | CRCW08051R00FK ERJ-8BWFR024                                                                             | PANASONIC                                                         | 0.024           | FILM RES; SMT (1206); 0.024; 1%; +/-150PPM/DEGC; 1W                                                                                                  |
|        |       | RS2                                                        |                                                                                                         | TE CONNECTIVITY                                                   |                 | RES; SMT (1206); 0.012; 1%; +/-100PPM/DEGC; 0.5W;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                                                          |
| 39     | 2     | RS1,                                                       | TLM2BER012F                                                                                             |                                                                   | 0.012           |                                                                                                                                                      |
| 40     |       | TP1                                                        |                                                                                                         | KEYSTONE                                                          |                 | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK CONNECTOR; PANELMOUNT; BINDING POST;                                              |
| 41     | 1 1   | TP10                                                       | 7007 7006                                                                                               | KEYSTONE                                                          | 7007 7006       |                                                                                                                                                      |
| 42     | 1     | U1                                                         | MAX25600                                                                                                | MAXIM                                                             | MAX25600        | STRAIGHT THROUGH; 1PIN; RED EVKIT PART-IC; MAX25600; QFN28-EP; PACKAGE OUTLINE DRAWING: 21-100130; PACKAGE CODE: T2855+5C                            |
| 43     | 1     | PCB                                                        | MAX25600                                                                                                | MAXIM                                                             | PCB             | PCB:MAX25600                                                                                                                                         |
| TOTAL  | 91    |                                                            |                                                                                                         |                                                                   |                 |                                                                                                                                                      |

Evaluates: MAX25600

## MAX25600 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX25600

## MAX25600 EV Kit PCB Layout Diagrams

MAX25600 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25600 EV Kit PCB Layout-Top View

<!-- image -->

Evaluates: MAX25600

│

## MAX25600 EV Kit PCB Layout Diagrams (continued)

MAX25600 EV Kit PCB Layout-Internal2

<!-- image -->

MAX25600 EV Kit PCB Layout-Internal3

<!-- image -->

│

## MAX25600 EV Kit PCB Layout Diagrams (continued)

MAX25600 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX25600 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any tiPe.

<!-- image -->

│

Evaluates: MAX25600