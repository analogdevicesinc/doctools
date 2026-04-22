<!-- lastmod 2023-11-13 -->
<!-- image -->

## General Description

The MAX42410 evaluation kit (EV kit) provide a proven design  to  evaluate  the  MAX42410  synchronous  buck converter with 10μA quiescent current. The EV kit comes with  a  MAX42410AFOB+ (1.5MHz) installed,  as  well  as various test points and jumpers for evaluation. The EV kit output voltage is variable and is set to 3.3V. It can be easily configured to 0.8V to 6V (1.5MHz) or up to 10V (400kHz) with minimum component changes. The EV kit is designed to deliver up to 10A with input voltage 4.5V to 36V. The output voltage quality can be monitored by observing the PGOOD signal.

## Benefits and Features

- Input Supply Range from 4.5V to 36V
- Adjustable output voltage from 0.8V to 6V (1.5MHz)
- Delivers Up to 8A/10A
- Frequency-Synchronization Input
- Enable Input
- Voltage Monitoring PGOOD Output Available
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet .

319-101037; Rev 0; 11/23

## MAX42410 Evaluation Kit

Evaluates: MAX42408/MAX42410

## Quick Start

## Required Equipment

- MAX42410 EV kit
- 36V, 10A DC power supply (PS)
- Appropriate  resistive  load,  or  an  electronic  load  that can sink 10A
- Digital multimeter (DMM)
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Do the following steps to verify board operation:

1.  Verify that all jumpers are in their default positions, as shown in Table 1 .
2.  Connect  the  positive  and  negative  terminals  of  the power  supply  to  the  VSUP  and  GND  test  pads, respectively.
3.  Set the power-supply voltage to 14V.
4.  Turn on the power supply.
5.  Using the DMM, verify the OUT is approximately 3.3V.
6.  Verify  that  the  switching  frequency  is  approximately 1.5MHz by monitoring the inductor  switching  voltage with the oscilloscope.
7.  Turn off the power supply.
8.  Connect  the  positive  and  negative  terminals  of  the electronic load to VOUT and GND2, respectively.
9.  Set  the  electronic  load  to  the  required  current  at  or below 10A or use an equivalent resistive load with an appropriate power rating.
10.  Adjust current-limit on the power supply as necessary.
11.  Turn on the power supply and electronic load.
12.  Verify that voltage across the VOUT and GND2 PCB pads is 3.3V ± 2%.

## EV Kit Board Photos

Figure 1. MAX42410 EV Kit Board Photo -Top

<!-- image -->

Figure 2. MAX42410 EV Kit Board Photo -Bottom

<!-- image -->

## Detailed Description of Hardware

This MAX42410 EV kit data sheet must be used with the MAX42408/MAX42410 IC data sheet.

The MAX42410 EV kit provides a proven layout for the MAX42408/MAX42410 synchronous buck regulator IC. The IC accepts input voltages as high as 36V and delivers up to 10A. The EV kit can handle an input supply transient up to 42V. Various test points are included for evaluation.

## External Synchronization

The IC can operate in two modes: forced pulse-width modulation (FPWM) or skip mode. Skip mode has better efficiency for light load conditions. When SYNC is pulled low, the IC operates in skip mode for light loads and FPWM mode for larger loads. When SYNC is pulled high, the IC is forced to operate in FPWM mode across all load conditions. SYNC can be used to synchronize with external clock if a clock source is present. The IC is forced to operate in FPWM mode when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD)

The EV kit provides a power-good output test point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is pulled to high when the output is on regulation. It is pulled to ground when the output voltage drops below 7% (typ) of its nominal regulated voltage.

## Programming Buck Output Voltage

The EV kit comes installed with MAX42410AFOB+ (1.5MHz), which provides an adjustable 0.8V to 6V output voltage. To program VOUT voltage, removing R5 and place appropriate resistors in the positions R7 and R8 according to the following equation:

Equation 1 :

Where typically V FB = 0.8V and R8 = 10kΩ.

For C16 value, refer to the CFF  (pF) column in Table 2. Recommended  Component  Selection of the MAX42408/MAX42410 IC data sheet.

## Evaluating Other Variants

The EV kit comes installed with a 1.5MHz, 10A variant (MAX42410AFOB+). A 400kHz, 10A (MAX42410AFOA+) variant is also available on the board together with a corresponding inductor for 3V to 5V output voltage. The other variants can be installed with minimal component changes.

## Evaluation Data

<!-- image -->

<!-- formula-not-decoded -->

<!-- image -->

<!-- image -->

Table 1. Jumper Connection Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                  |
|----------|----------------------|--------------------------|
| ENABLE   | 1-2                  | Buck enabled             |
| J1       | 1-2                  | Forced PWM               |
| J2       | Installed            | PGOOD pulled up to BIAS. |

## Ordering Information

| PART           | TYPE               |
|----------------|--------------------|
| MAX42410EVKIT# | 3.3V/1.5MHz EV kit |

#Denotes RoHS-compliant.

## MAX42410 EV Kit Bill of Materials

| PART                                                                     | MFG PART #           | MANUFACTURER   | VALUE     | DESCRIPTION                                                                                                             |
|--------------------------------------------------------------------------|----------------------|----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|
| 2.2UH                                                                    | XGL6060-222ME        | COILCRAFT      | 2.2UH     | INDUCTOR; SMT; COMPOSITE; 2.2UH; 20%; 17.2A                                                                             |
| BIAS, FBR, GND2, GNDS, GNDS1- GNDS3, PGOOD, SYNCOUT, VEA, VOUT_TP, VSUPS | 5012                 | KEYSTONE       | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| C0, C1                                                                   | CC0603KRX7R0BB104    | YAGEO          | 0.1UF     | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                         |
| C2                                                                       | CGA4J3X7R1H225M125AE | TDK            | 2.2UF     | CAP; SMT (0805); 2.2UF; 20%; 50V; X7R; CERAMIC                                                                          |
| C3                                                                       | EEH-ZA1H101P         | PANASONIC      | 100UF     | CAP; SMT (CASE_G); 100UF; 20%; 50V; ALUMINUM- ELECTROLYTIC                                                              |
| C4, C5                                                                   | CGA5L3X7R1H475K160AB | TDK            | 4.7UF     | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                          |
| C6, C9, C17                                                              | GCJ188R71H104KA12    | MURATA         | 0.1UF     | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                          |
| C7, C8, C10                                                              | CGA2B3X7R1H104M050BB | TDK            | 0.1UF     | CAP; SMT (0402); 0.1UF; 20%; 50V; X7R; CERAMIC                                                                          |
| C11                                                                      | GRM188R71A225KE15    | MURATA         | 2.2UF     | CAP; SMT (0603); 2.2UF; 10%; 10V; X7R; CERAMIC                                                                          |
| C12, C13, C15                                                            | GCM32ER71C226ME15    | MURATA         | 22UF      | CAP; SMT (1210); 22UF; 20%; 16V; X7R; CERAMIC                                                                           |
| C16                                                                      | 04025C470KAT2A       | AVX            | 47PF      | CAP; SMT (0402); 47PF; 10%; 50V; X7R; CERAMIC                                                                           |
| ENABLE, J1                                                               | PEC03SAAN            | SULLINS        | PEC03SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |
| GND, GND3, VOUT, VSUP_FILTER                                             | 575-4                | KEYSTONE       | 575-4     | RECEPTACLE; JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN [5.5MM] L; 0.203D/0.218L; NICKEL PLATED BRASS                   |

## MAX42410 EV Kit Bill of Materials (continued)

| PART          | MFG PART #       | MANUFACTURER         | VALUE         | DESCRIPTION                                                    |
|---------------|------------------|----------------------|---------------|----------------------------------------------------------------|
| J2            | PEC02SAAN        | SULLINS              | PEC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS      |
| L0            | FBMJ4516HS720N   | TAIYO YUDEN          | 72            | INDUCTOR; SMT (1806); FERRITE-BEAD; 72 IMPEDANCE AT 100MHZ; 6A |
| L1            | XEL6030-222ME    | COILCRAFT            | 2.2UH         | INDUCTOR; SMT; COMPOSITE; 2.2UH; 20%; 10A                      |
| L2            | XGL6060-681ME    | COILCRAFT            | 0.68UH        | INDUCTOR; SMT; COMPOSITE; 0.68UH; 20%; 22.7A                   |
| MAX42410AFOA+ | MAX42410AFOA+    | ANALOG DEVICES, INC. | MAX42410AFOA+ | EVKIT PART - IC; MAX42410AFOA+; FC2QFN17                       |
| R2            | ERA-2AEB103      | PANASONIC            | 10K           | RES; SMT (0402); 10K; 0.10%; +/-25PPM/DEGK; 0.0630W            |
| R4, R6        | RC0402JR-070RL   | YAGEO PHYCOMP        | 0             | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                        |
| R7            | CRCW060349K9FK   | VISHAY DALE          | 49.9K         | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W            |
| R8            | AC0603FR-0715K8L | YAGEO                | 15.8K         | RES; SMT (0603); 15.8K; 1%; +/-100PPM/DEGC; 0.1000W            |
| U1            | MAX42410AFOB+    | ANALOG DEVICES, INC. | MAX42410AFOB+ | EVKIT PART - IC; MAX42410AFOB+; FC2QFN17                       |

## MAX42410 EV Kit Schematic

<!-- image -->

## MAX42410 EV Kit PCB Layout

<!-- image -->

MAX42410 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX42410 EV Kit PCB Layout -Top

MAX42410 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX42410 EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX42410 EV Kit PCB Layout (Continued)

MAX42410 EV Kit PCB Layout -Bottom

<!-- image -->

## Revision History

MAX42410 EV Kit Component Placement Guide -Bottom Silkscreen

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/23           | Initial release | -               |

<!-- image -->

<!-- image -->

ASSUMED BY ANALOG DEVICES FOR ITS USE, NOR FOR ANY INFRINGEMENTS OF PATENTS OR OTHER RIGHTS OF THIRD PARTIES THAT MAY RESULT FROM ITS USE. SPECIFICATIONS ARE SUBJECT TO CHANGE WITHOUT NOTICE. NO LICENCE, EITHER EXPRESSED OR IMPLIED, IS GRANTED UNDER ANY ADI PATENT RIGHT, COPYRIGHT, MASK WORK RIGHT, OR ANY OTHER ADI INTELLECTUAL PROPERTY RIGHT RELATING TO ANY COMBINATION, MACHINE, OR PROCESS WHICH ADI PRODUCTS ALL INFORMATION CONTAINED HEREIN IS PROVIDED 'AS IS' WITHOUT REPRESENTATION OR WARRANTY. NO RESPONSIBILITY IS OR SERVICES ARE USED. TRADEMARKS AND REGISTERED TRADEMARKS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS.