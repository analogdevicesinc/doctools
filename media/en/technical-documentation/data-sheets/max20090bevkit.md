<!-- lastmod 2022-08-03 -->
## MAX20090B Evaluation Kit

## General Description

The  MAX20090B  evaluation  kit  (EV  kit)  provides  a proven  design  to  evaluate  the  MAX20090B  automotive high-voltage,  high-brightness  LED  (HB  LED)  controller. The EV kit  is  set  up  for  SEPIC  configuration  and  oper -ates  from  a  6V  to  18V  DC  supply  voltage.  The  EV  kit is  configured  to  deliver  up  to  1A  to  one  string  of  LEDs. The total voltage of the string can vary from 3V to 24V. The anode of the LED string should be connected to the LED+ terminal. The cathode of the LED string should be connected to PGND.

## Features

- Configured for SEPIC Mode
- Analog Dimming Control
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX20090B EV kit
- 12V, 5A DC power supply
- A series-connected LED string rated at 1A
- Oscilloscope with a current probe

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply until all connections are made.

- 1) Verify  that  all  jumpers  (J1-J4)  are  in  their  default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the IN PCB pad and the negative terminal to the nearest GND1 PCB pad.
- 3) Connect the LED string across the LED+ and GND2 PCB pads on the EV kit for SEPIC configuration. The LED string voltage should be between the minimum and maximum input voltage in this configuration.
- 4) Clip the current probe on the wire connected to the LED string.
- 5) Turn on the DC power supply.
- 6) Verify that the LEDs turn on.
- 7) Verify that the oscilloscope displays approximately 1A.

## Detailed Description

The MAX20090B EV kit provides a proven design to evaluate  the  MAX20090B  high-voltage  HB  LED  driver  with integrated high-side current sense. The EV kit is set up for SEPIC configuration and operates from a 6V to 18V DC supply voltage. The EV kit is configured to deliver up to 1A to a series LED string. The string-forward voltage can vary from 3V to 24V.

<!-- image -->

Evaluates: MAX20090B

Table 1. MAX20090B EV Kit Jumper Descriptions (J1-J4)

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

## Analog Dimming Control (ICTRL)

When J2 is installed across pins 1-2, the LED current is set at the maximum current. The ICTRL pin is connected to VCC and in this case, the LED current is given by the following equation:

<!-- formula-not-decoded -->

When J2 is  installed  across  pins  2-3,  the  ICTRL  pin  is connected to the voltage-divider of R1 and R2, which sets the voltage at ICTRL

In the case of the EV kit, I LED  is set to 1A. If V ICTRL  &lt; 1.2V, then V ICTRL  sets the LED current level.

Alternatively,  the  analog  dimming  can  be  controlled  by removing the shunt on J2 and applying a voltage between 0 and 5.5V on the ICTRL PCB pad on the EV kit.

## Pulse-Dimming Input (PWMDIM)

Pulse dimming can be achieved by applying a pulsating voltage source on the PWMDIM PCB pad on the EV kit. When PWMDIM is pulled low, DIMOUT is pulled high and the  pulse-width-modulated  (PWM) switching is disabled.

This  can  be  done  by  installing  the  shunt  on  J1  across pins  2-3,  without  applying  any  external  voltage  on  the PWMDIM PCB pad. The PWMDIM pin can also be controlled by an analog DC voltage on the PWMDIM pin. In this case, the dimming frequency is internally set at 200Hz. This can be achieved by installing the shunt on J1 across pins 1-2, the shunt on J4 installed across pins 1-2, and adjusting potentiometer R18. The dimming duty cycle can be adjusted from 0 to 100% duty cycle by adjusting the voltage on the PWMDIM pin from 0.2V to 3.25V.

Alternatively, PWM dimming can be achieved by applying a  DC voltage between 0.2V and 3.3V on the PWMDIM PCB pad, with J1 and J4 open.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20090BEVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX20090B EV Kit Bill of Materials

|   ITEM | REF_DES                                                                    |   QTY | MFG PART #                                                                                                    | MANUFACTURER                             | VALUE          | DESCRIPTION                                                                                                           | COMMENTS      |
|--------|----------------------------------------------------------------------------|-------|---------------------------------------------------------------------------------------------------------------|------------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------|---------------|
|      1 | C1, C6, C9                                                                 |     3 | C0603C105K4RAC; GRM188R71C105KA12;C1608X7 R1C105K080AC;EMK107B7105KA ;GCM188R71C105KA64;CGA3E1 X7R1C105K080AC | KEMET;MURATA;TDK; TAIYO YUDEN;MURATA;TDK | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                      |               |
|      2 | C2, C7, C8, C10                                                            |     4 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA                                                       | MURATA;MURATA;TDK                        | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                      |               |
|      3 | C3                                                                         |     1 | CGA3EANP02A103J080AC                                                                                          | TDK                                      | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=5%; MODEL=MULTILAYER CERAMIC CHIP CAPACITOR; TC=NPO            |               |
|      4 | C4, C5, C11, C15, C19, C20, C12, C13                                       |     8 | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB                                                                    | TDK;TDK                                  | 4.7UF          | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                     | (C12,C13:DNI) |
|      5 | C14                                                                        |     1 | CGA3E2X7R2A103K; C0603C103K1RA;GRM188R72A1 03KA01                                                             | TDK;KEMET;MURATA                         | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC= USE 20- 00u01-M8 |               |
|      6 | C16                                                                        |     1 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                                     | MURATA;TDK;MURATA                        | 1000PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                                    |               |
|      7 | C17, C18                                                                   |     2 | GRM1885C1H102FA01                                                                                             | MURATA                                   | 1000PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=1%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=C0G          |               |
|      8 | C100                                                                       |     1 | GRM32DF51H106ZA01L                                                                                            | MURATA                                   | 10UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=+80%-20%; MODEL=Y5V; TG=- 30 DEGC TO +85 DEGC; TC                 |               |
|      9 | C101                                                                       |     1 | UMK325BJ106KM-T                                                                                               | TAIYO YUDEN                              | 10UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R            |               |
|     10 | D1                                                                         |     1 | B3100-13-F                                                                                                    | DIODES INCORPORATED                      | B3100-13-F     | DIODE; RECT; SMC; PIV=100V; IF=3A                                                                                     |               |
|     11 | D2                                                                         |     1 | 1N4148W-7-F                                                                                                   | DIODES INCORPORATED                      | 1N4148W-7-F    | DIODE; SWT; SMT (SOD-123); PIV=100V; IF=0.3A; -65 DEGC TO +150 DEGC                                                   |               |
|     12 | FLT, GND1-GND3, HIGHBEAMOFF, ICTRL, IN1, IN2, LED+, LED-, PWMDIM, V7V, VCC |    13 | 9020 BUSS                                                                                                     | WEICO WIRE                               | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                              |               |
|     13 | J1, J2                                                                     |     2 | PCC03SAAN                                                                                                     | SULLINS                                  | PCC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                              |               |
|     14 | J3, J4                                                                     |     2 | PCC02SAAN                                                                                                     | SULLINS                                  | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                              |               |
|     15 | L1                                                                         |     1 | MSS1278-103ML                                                                                                 | COILCRAFT                                | 10UH           | INDUCTOR; SMT; FERRITE CORE; 10UH; TOL=+/-20%; 5.7A                                                                   | DNI           |
|     16 | L2                                                                         |     1 | MSS6132T-153ML                                                                                                | COILCRAFT                                | 15UH           | INDUCTOR; SMT; FERRITE; 15UH; 20%; 2.20A                                                                              | DNI           |
|     17 | L3                                                                         |     1 | MSD1278T-153ML                                                                                                | COILCRAFT                                | MSD1278T-153ML | INDUCTOR; SMT; FERRITE; MSD1278T-153M; 20%; 3.25A                                                                     |               |
|     18 | Q1                                                                         |     1 | IRLR3110ZTRPBF                                                                                                | INTERNATIONAL RECTIFIER                  | IRLR3110ZTRPBF | TRAN; HEXFET POWER MOSFET; NCH; DPAK; PD-(140W); I- (63A); V-(100V)                                                   |               |
|     19 | Q2                                                                         |     1 | FDC3535                                                                                                       | FAIRCHILD SEMICONDUCTOR                  | FDC3535        | TRAN; P-CHANNEL POWER TRENCH MOSFET; PCH; SSOT-6; PD-(1.6W); I-(-2.1A); V-(-                                          |               |
|     20 | Q3                                                                         |     1 | MMBT2907A                                                                                                     | FAIRCHILD SEMICONDUCTOR                  | MMBT2907A      | TRAN; SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD- (0.35W); IC-(-0.6A); VCEO-(-60V)                                      |               |

Evaluates: MAX20090B

## MAX20090B EV Kit Bill of Materials (continued)

|   ITEM | REF_DES         |   QTY | MFG PART                                       | MANUFACTURER                 | VALUE           | DESCRIPTION                                                                                                                                                                                | COMMENTS   |
|--------|-----------------|-------|------------------------------------------------|------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|     21 | Q4              |     1 | FDC3512                                        | ON SEMICONDUCTOR             | FDC3512         | TRAN; N-CHANNEL POWERTRENCH MOSFET; NCH; SUPERSOT-6; PD-(1.6W); I-(3A); V- (80V)                                                                                                           |            |
|     22 | R1              |     1 | CRCW060324K9FK; ERJ-3EKF2492                   | VISHAY DALE; PANASONIC       | 24.9K           | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                   |            |
|     23 | R2, R18         |     2 | 3296W-1-103LF                                  | BOURNS                       | 10K             | RESISTOR; THROUGH-HOLE- RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM                                      |            |
|     24 | R3              |     1 | CRCW060340K2FK; RC0603FR-0740K2L; ERJ-3EKF4022 | VISHAY DALE;YAGEO; PANASONIC | 40.2K           | RESISTOR; 0603; 40.2K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                       |            |
|     25 | R4              |     1 | ERJ-3EKF1242                                   | PANASONIC                    | 12.4K           | RESISTOR; 0603; 12.4K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                   |            |
|     26 | R5              |     1 | CRCW060386K6FK                                 | VISHAY DALE                  | 86.6K           | RESISTOR; 0603; 86.6K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                   |            |
|     27 | R6              |     1 | CRCW060349R9FK                                 | VISHAY DALE                  | 49.9            | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                    |            |
|     28 | R7              |     1 | CRCW06032K49FK; CR0603-FX-2491                 | VISHAY DALE;BOURNS           | 2.49K           | RESISTOR; 0603; 2.49K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                       |            |
|     29 | R8              |     1 | CRCW06034R99FK                                 | VISHAY DALE                  | 4.99            | RESISTOR; 0603; 4.99 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                     |            |
|     30 | R9              |     1 | WSL2512R0250F                                  | VISHAY DALE                  | 0.025           | RESISTOR; 2512; 0.025 OHM; 1%; 75PPM; 1.0W; METAL FILM                                                                                                                                     |            |
|     31 | R10             |     1 | CRCW0603475KFK                                 | VISHAY DALE                  | 475K            | RESISTOR; 0603; 475K OHM; 0.1%; 100PPM; 0.1W; THICK FILM                                                                                                                                   |            |
|     32 | R11, R12        |     2 | CRCW060310K0FK; ERJ-3EKF1002                   | VISHAY DALE; PANASONIC       | 10K             | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                         |            |
|     33 | R13             |     1 | CRCW06034K99FK; ERJ-3EKF4991                   | VISHAY DALE; PANASONIC       | 4.99K           | RESISTOR; 0603; 4.99K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                       |            |
|     34 | R14             |     1 | WSL2512R2000F                                  | VISHAY DALE                  | 0.2             | RESISTOR; 2512; 0.2 OHM; 1%; 75PPM; 1.0W; THICK FILM                                                                                                                                       |            |
|     35 | R15             |     1 | CRCW06031K00FK; ERJ-3EKF1001                   | VISHAY DALE; PANASONIC       | 1K              | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                          |            |
|     36 | R16, R17        |     2 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00     | VISHAY DALE;ROHM; PANASONIC  |                 | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                     |            |
|     37 | R19, R20        |     2 | CRCW0603499KFK; ERJ-3EKF4993                   | VISHAY DALE; PANASONIC       | 499K            | RESISTOR; 0603; 499K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                     |            |
|     38 | R100            |     1 | 301-10K-RC                                     | XICON                        | 10K             | RESISTOR, 0603, 10K OHM, 5%, 200PPM, 1/16W, THICK FILM                                                                                                                                     |            |
|     39 | R101            |     1 | TNPW080510R0BE; CRT0805-BY-10R0ELF             | VISHAY DALE;BOURNS           |                 | 10 RESISTOR; 0805; 10 OHM; 0.1%; 25PPM; 0.125W; THICK FILM                                                                                                                                 |            |
|     40 | SPACER1-SPACER4 |     4 | 9032                                           | KEYSTONE                     | 9032            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                  |            |
|     41 | SU1-SU4         |     4 | SNT-100-BK-G                                   | SAMTEC                       | SNT-100-BK-G    | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT=PHOSPHOR BRONZE                                                                  |            |
|     42 | U1              |     1 | MAX20090BAUP/V+                                | MAXIM                        | MAX20090BAUP/V+ | EVKIT PART - IC; MAX20090BAUP/V+; AUTOMOTIVE HIGH-VOLTAGE; HIGH- BRIGHTNESS LED CONTROLLER; PACKAGE CODE: U20E+3C; PACKAGE OUTLINE: 21-100132; PACKAGE LAND PATTERN: 90- 100049; TQFN20-EP |            |
|     43 | PCB             |     1 | MAX20090B                                      | MAXIM                        | PCB             | PCB:MAX20090B                                                                                                                                                                              |            |

Evaluates: MAX20090B

## MAX20090B EV Kit Schematics

<!-- image -->

Evaluates: MAX20090B

## MAX20090B EV Kit PCB Layouts

Silk Top

<!-- image -->

Top

<!-- image -->

Evaluates: MAX20090B

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX20090B