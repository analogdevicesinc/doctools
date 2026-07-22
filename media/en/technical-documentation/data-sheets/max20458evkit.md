<!-- lastmod 2022-08-02 -->
## MAX20458 Evaluation Kit

## General Description

The MAX20458 evaluation kit (EV kit) is a fully assembled and tested application circuit that simplifies the evaluation of  the  MAX20458 400kHz/2.1MHz, 36V boost controller and buck converter in a 28-pin side-wettable TQFN package. All installed components are rated for the automotive temperature range. Various test points and jumpers are included for evaluation.

The standard EV kit comes with the MAX20458ATIA/VY+ installed  (3.3V/ADJ,  2.1MHz)  but  can  also  be  used  to evaluate other MAX20458 variants with minimal component changes discussed in the Evaluating Other Variants section.

## Table 1. Default Jumper Settings

| JUMPER     | SHUNT POSITION   | FUNCTION                                                 |
|------------|------------------|----------------------------------------------------------|
| JU3_EN1    | PIN1-2           | Buck1 controller enabled                                 |
| JU1_EN2    | PIN1-2           | Boost controller enabled                                 |
| JU4_FSYNC  | PIN1-2           | FSYNC is pulled to V BIAS enabling FPWM mode             |
| JU_PGOOD1  | Installed        | PGOOD1 is pulled up to V BIAS when OUT1 is in regulation |
| JU5_EXTVCC | PIN2-3           | EXTVCC is connected to GND                               |

## Features

- High-Voltage Step-Down Converter with Integrated Power FETs to Minimize Board-Area-Occupancy
- Asynchronous Boost Controller
- 3.5V to 40V Input Supply Range
- Input Supply Range Extended down to 2V with Pre-Boost Enabled
- 10V Fixed Boost Output Voltage (Separate Option Provides Adjustable Output Voltage)
- Buck Provides 5V/3.3V Output up to 3.5A Output Current
- Buck Output Voltages Adjustable between 1V and 10V using External Resistors
- ±2% Buck Output Voltage Accuracy
- Frequency-Synchronization Input
- Independent Enable Inputs
- Voltage-Monitoring PGOOD1 Output
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX20458

## Quick Start

## Required Equipment

- MAX20458 EV kit
- Adjustable DC power supply (PS1)
- One digital multimeter (DMM1)
- One electronic load (EL)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions as shown in Table 1.
- 2) Connect the positive and negative terminals of PS1 to the V BATTF  and GND test pads, respectively.
- 3) Connect  the  positive  terminal  of  DMM1  to  V OUT1 ; connect the negative terminal of DMM1 to PGND1.
- 4) Connect  the  positive terminal of  EL  to  VOUT1; connect the negative terminal of EL to PGND1.
- 5) Set the power supply to 14V and 3A limit.
- 6) The DMM1  voltmeter should display an output voltage of 3.3V when connected to V OUT1 .

## Detailed Description

The  MAX20458  EV  kit  provides  a  fully  developed  and proven layout for evaluating all variants of the MAX20458 family. The IC accepts input supply voltages as high as 36V and input supply transients up to 40V.

## Switching Frequency and External Synchronization

The IC can operate in two modes: forced-PWM or skip mode. Skip mode offers improved efficiency over PWM during light-load conditions. When FSYNC is pulled low, the device operates in skip mode for light loads, and in PWM mode for larger loads. When FSYNC is pulled high, the  device  is  forced  to  operate  in  PWM  across  all  load conditions. The EV kit default configuration uses a shunt on JU4\_FSYNC to hold FSYNC high, resulting in forcedPWM mode operation.

The FSYNC pin can be used to synchronize the switching frequency of the IC to an external source by applying an external clock signal. The device is forced to operate in PWM when FSYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD1)

The  EV  kit  provides  output  test  points  (PGOOD1)  to monitor the status of the buck output voltage on V OUT1 . PGOOD1 is high impedance when the output voltage is in regulation. PGOOD1 is low impedance when the output voltage drops below 93.5% (typ) of its nominal regulated voltage.

To  obtain  logic  signal,  pull  up  PGOOD1  to  V BIAS   by installing the shunt on jumper JU\_PGOOD1.

## Setting the Output Voltage in Buck Converter

The  EV  Kit  comes  pre-assembled  to  provide  a  fixed 3.3V  voltage  regulation  on  V OUT1 .  To  externally  adjust the voltage at V OUT1 , remove R1 and place appropriate resistors in positions R3 and R4 according to the following equation:

<!-- formula-not-decoded -->

where V FB1 = 1V (typ) and R4 = 50kΩ.

## Selecting EXTVCC

The MAX20458 IC provides an internal low-dropout linear regulator  (LDO)  that  supplies  voltage  available  on  the BIAS  pin.  This  LDO  can  be  bypassed  when  a  voltage source is detected at the EXTVCC pin. The EV kit provides  jumper  JU5\_EXTVCC,  which  allows  shunts  to  be installed connecting EXTVCC to either V OUT1  or ground. Bypassing  the  internal  LDO  and  using  the  switching converter output to supply V CC  increases efficiency over enabling the LDO. As assembled, the default position for the  JU5\_EXTVCC  shunt  connects  EXTVCC  to  ground, forcing the internal LDO to supply VCC at the BIAS pin.

When the voltage source on EXTVCC drops below the detection level, the internal LDO is enabled to supply V CC and BIAS.

│

## Setting Boost Output Voltage

The EV kit comes installed with the MAX20458ATIA/VY+, which provides an adjustable 10V output voltage. To program V OUT2  voltage, place appropriate resistors in positions R17 and R18 according to the following equation:

R17 = R18(VOUT2/VFB2 - 1.005)

where V FB2 = 1V (typ) and R18 = 100kΩ.

## Ordering Information

| PART           | TYPE                  |
|----------------|-----------------------|
| MAX20458EVKIT# | 3.3VADJ/2.1MHz EV Kit |

# Denotes RoHS Compliant

Evaluates: MAX20458

## Evaluating Other Variants

The  EV  kit  comes  installed  with  the  3.3V/2.1MHz  variant  (MAX20458ATIA/VY+).  The  other  variants  can  be installed  with  minimal  component  changes.  To  use  the 400kHz devices with the EV kit, change inductor L1 to 10µH,  increase  L3  to  2.2µH,  and  increase  capacitors C7 and C8 to 47µF. Contact Maxim Integrated for more information on ordering additional variants of MAX20458.

│

## MAX20458 EV Kit Bill of Materials

|   ITEM |   QTY | MFG PART #                                    | REF DES                                      | DESCRIPTION                                                                                          |
|--------|-------|-----------------------------------------------|----------------------------------------------|------------------------------------------------------------------------------------------------------|
|      1 |     1 | TDK CGA3E2X7R1H104K080AE                      | C2                                           | 0.1UF; 50V; TOL=10%; CAPACITOR; SMT (0603); CERAMIC CHIP;                                            |
|      2 |     2 | Murata GRM31CR71A226KE15;                     | C7, C8                                       | 22UF; 10V; TOL=10%; CAPACITOR; SMT (1206); CERAMIC CHIP;                                             |
|      3 |     1 | TDK CGA2B3X7R1H104K050BB;                     | C11                                          | 0.1UF; 50V; TOL=10%; CAPACITOR; SMT (0402); CERAMIC CHIP;                                            |
|      4 |     1 | TDK CGA3E1X7R0J225K080AC                      | C13                                          | 2.2UF; 6.3V; TOL=10%; CAPACITOR; SMT (0603); CERAMIC;                                                |
|      5 |     1 | Murata GRM188Z71C475KE21                      | C15                                          | 4.7UF ; 16V; TOL=10%; CAPACITOR; SMT (0603); CERAMIC CHIP;                                           |
|      6 |     8 | TDK CGA5L3X7R1H475K160AB                      | C1, C3, C5, C6, C16, C23, C17, C19           | 4.7UF ; 50V; TOL=10%; CAPACITOR; SMT (1206); CERAMIC CHIP;                                           |
|      7 |     1 | Murata GCM1885C2A220JA16                      | C18                                          | 22PF; 100V; TOL=5%; CAPACITOR; SMT (0603); CERAMIC CHIP;                                             |
|      8 |     1 | TDK CGA3E1C0G2A472J080AC                      | C20                                          | 4700PF; 100V; TOL=5%; CAPACITOR; SMT (0603); CERAMIC CHIP;                                           |
|      9 |     1 | Panasonic EEE-FT1H470AP                       | C21                                          | 47UF; 50V; TOL=20%;CAPACITOR; SMT (CASE_D); ALUMINUM-ELECTROLYTIC;                                   |
|     10 |     1 | Panasonic EEH-ZC1H101V                        | C25                                          | 100UF; 20%; 50V;CAPACITOR; SMT (CASE_G);; ALUMINUM-ELECTROLYTIC                                      |
|     11 |     1 | Vishay V12PM12-M3                             | D3                                           | EVKIT PART - DIODE; SCH; TO-277A; PIV=120V; IF=12A;                                                  |
|     14 |     1 | Coilcraft XAL5030-222ME                       | L1                                           | 2.2UH; 20%; 9.70A;INDUCTOR; SMT; COMPOSITE;                                                          |
|     15 |     1 | Vishay IHLP2525CZERR47M01                     | L3                                           | 0.47UH; TOL=+/-20%; 17.5A INDUCTOR; SMT; SHIELDED;                                                   |
|     16 |     1 | Wurth 742792141                               | L4                                           | INDUCTOR; SMT (1206); FERRITE-BEAD; 1000; TOL=+/-25%; 1A                                             |
|     12 |     4 | Samtech TSW-103-07-T-S                        | JU1_EN2, JU3_EN1, JU4_FSYNC, JU5_EXTVCC      | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                     |
|     13 |     1 | Samtech TSW-102-07-T-S                        | JU_PGOOD1                                    | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS;                                    |
|     17 |     1 | Vishay SIS862DN-T1-GE3                        | Q1                                           | N-CHANNEL MOSFET 60V (D-S) MOSFET; NCH; POWERPAK1212-8; PD-(52W); I-(40A); V-(60V)                   |
|     18 |     5 | Vishay CRCW06030000Z0                         | R1, R2, R20, R3, R4                          | 0 OHM; 0%; RESISTOR; 0603; ; JUMPER; 0.1W; THICK FILM                                                |
|     19 |     1 | Vishay CRCW04020000Z0EDHP                     | R9                                           | 0 OHM; 0%; RESISTOR; 0402; JUMPER; 0.2W; THICK FILM                                                  |
|     20 |     1 | Susumu KRL2012E-M-R007-F                      | R11                                          | 0.007 OHM; 1%; 50PPM RESISTOR; 0508; ; 1W; METAL FOIL                                                |
|     21 |     2 | Vishay CRCW060351K1FK; Panasonic ERJ-3EKF5112 | R5, R7                                       | 0603;51.1K;1%;100PPM RESISTOR; 0.10W;THICKFILM                                                       |
|     22 |     1 | Vishay CRCW0603909KFKEA                       | R17                                          | 909k OHMS ±1% 0.1W, 1/10W CHIP RESISTOR 0603 THICK FILM                                              |
|     23 |     1 | Vishay CRCW0603100KFKEA                       | R18                                          | 100k OHMS ±1% 0.1W, 1/10W CHIP RESISTOR 0603 THICK FILM                                              |
|     24 |     5 | Keystone 5010                                 | TP_BIAS, TP_EN1, TP_EN2, TP_FSYNC, TP_PGOOD1 | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                   |
|     25 |     1 | MAXIM MAX20458ATIA/VY+                        | U1                                           | EVKIT PART-IC; MAX20458; QFN28-EP; PACKAGE OUTLINE DRAWING: 21-100130; PACKAGE LAND PATTERN: 90-0027 |
|     26 |     1 | MAXIM MAX20458EVKIT#                          | PCB                                          | PCB:MAX20458EVKIT#                                                                                   |

Evaluates: MAX20458

## MAX20458 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX20458

## MAX20458 EV Kit PCB Layout Diagrams

MAX20458 EV Kit Component Placement - Top

<!-- image -->

MAX20458 EV Kit PCB Layout - Internal Layer 2

<!-- image -->

MAX20458 EV Kit PCB Layout - Internal Layer 3

<!-- image -->

MAX20458 EV EV Kit Component Placement - Bottom

<!-- image -->

│

## MAX20458 EV Kit PCB Layout Diagrams (continued)

MAX20458 EV Kit Silkscreen Top

<!-- image -->

MAX20458 EV Kit Silkscreen Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------|-----------------|
|                 0 | 7/19            | Initial release              | -               |
|                 1 | 7/19            | Updated Detailed Description | 2, 3            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves the riJht to chanJe the circuitry and specifications Zithout notice at any time.

<!-- image -->

│

Evaluates: MAX20458