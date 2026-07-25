<!-- lastmod 2022-08-02 -->
## MAX17690 No-Opto Flyback Evaluation Kit

## General Description

The  MAX17690EVKITC is a fully  assembled  and  tested circuit board that demonstrates the working of an isolated 6W no-opto flyback DC-DC converter. This circuit uses a MAX17690 in a 16-pin TQFN package with an exposed pad. The data sheet must be read in conjunction with this quick start guide for demo circuit.

The EV kit output is configured for an isolated ±15V and provides  up  to  200mA  of  output  current  on  each  output. The MAX17690 switches at a 100kHz switching frequency. The  transformer  provides  the  galvanic  isolation  between input and output, up to 1500V RMS .

## Features

- 18V to 36V Input Range
- Isolated Output: ±15V/200mA On Each Output
- Compact Design with High Frequency (100kHz) Switching
- Minimum Number of External Components
- 90.5% Peak Efficiency
- Low-Cost Flyback Design
- Galvanic Isolation up to 1500V RMS
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17690

In Dual-Output Configuration

## Quick Start

## Recommended Equipment

- One 18V-36V DC, 1A Power Supply
- 2 no's of 3W resistive load with 200mA sink capacity
- Four digital multimeters (DMM)
- MAX17690EVKITC#

## Warning:

- Do not turn on the power supply until all connections are completed.
- Wear protective eye gear at all times.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting input power source before touching circuit parts.

## Equipment Setup and Test Procedure

- 1) Set the power supply to +24VDC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect one terminal of the first 200mA resistive load to the +15V PCB pad and the other terminal to the nearest GND0 PCB pad. Connect the one terminal of the second 200mA resistive load to the GND0 PCB pad and the other terminal to the nearest -15V PCB pad.
- 3) Connect a DMM configured in voltmeter mode across the +15V PCB pad and the nearest GND0 PCB pad. Connect another DMM configured in voltmeter mode across the -15V PCB pad and the nearest GND0 PCB pad.
- 4) Enable the power supply.
- 5) Verify that the output voltmeter displays ±15V with ±8% accuracy. If required, measure the output cur -rent using a DMM configured in Ammeter mode.
- 6) If required, vary the input voltage from 18V to 36V, and the load current from 0mA to 200mA and verify that output voltage is ±15V with ±8% accuracy.

<!-- image -->

## MAX17690 No-Opto Flyback Evaluation Kit

## Detailed Description

The  MAX17690EVKITC  provides  a  proven  design  to evaluate  the  MAX17690  high-efficiency  DC-DC  flyback converter. The MAX17690 uses a novel sampling technique to eliminate the optocoupler in the output voltage sensing

## Evaluates: MAX17690

## In Dual-Output Configuration

across  the  isolation  boundary.  The  transformer  design and the selection of different components are detailed in the MAX17690 data sheet.

This EV kit provides the programmable soft-start time to limit the inrush current. The IC has over current protection and thermal protection as well.

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER         | WEBSITE                |
|------------------|------------------------|
| Wurth Electronik | www.we-online.com      |
| Murata Americas  | www.murataamericas.com |
| Panasonic Corp.  | www.panasonic.com      |

Note: Indicate that you are using the MAX17690 when contacting these component suppliers.

<!-- image -->

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17690EVKITC# | EV Kit |

# Denotes RoHS compliant.

│

## MAX17690 No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit Bill of Materials

|   S.NO | DESIGNATION   | VALUE     |   QTY | DESCRIPTION                                                | MANUFACTURER PARTNUMBER                                 | MANUFACTURER                   |
|--------|---------------|-----------|-------|------------------------------------------------------------|---------------------------------------------------------|--------------------------------|
|      1 | C1            | 47UF      |     1 | (CASE_E); ALUMINUM- ELECTROLYTIC; 47UF; 50V; TOL=20%       | EEE-FK1H470P                                            | PANASONIC                      |
|      2 | C2, C3        | 10UF      |     2 | (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%;TC=X7R            | GRJ32ER71H106KE11                                       | MURATA                         |
|      3 | C4            | 0.01UF    |     1 | (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%;TC=X7R          | C0402C103K5RAC;GRM155R71H103KA88                        | KEMET/MURATA                   |
|      4 | C5            | 0.1UF     |     1 | (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%;TC=X7R           | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14 | TDK/MURATA                     |
|      5 | C6            | 1UF       |     1 | (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%;TC=X7R             | GRM21BR71H105KA12; CL21B105KBFNNNE; C2012X7R1H105K085AC | MURATA/SAMSUNG ELECTRONICS/TDK |
|      6 | C7            | 22000PF   |     1 | (0603); CERAMIC CHIP; 22000PF; 100V;TC=X7R                 | GRM188R72A223KAC4; C0603C223K1RAC; HMK107B7223KA        | MURATA/ KEMET/TAIYO YUDEN      |
|      7 | C8            | 0.022UF   |     1 | (0402); CERAMIC CHIP; 0.022UF; 50V; TOL=10%;TC=X7R         | GRM155R71H223KA12                                       | MURATA                         |
|      8 | C9            | 0.068UF   |     1 | (0402); CERAMIC CHIP; 0.068UF; 16V;TC=X7R                  | C0402X7R160-683KNE; C1005X7R1C683K050                   | VENKEL LTD/TDK                 |
|      9 | C11           | 470PF     |     1 | (0402); CERAMIC; 470pF; 50V; 10%; TC=X7R                   | C0402S471K5RAC; GRM155R71H471K                          | KEMET/MURATA                   |
|     10 | C12           | OPEN      |     1 | (0603)                                                     | N/A                                                     | N/A                            |
|     11 | C13           | 1000PF    |     1 | (1206); CERAMIC CHIP; 1000PF; 1500V;TC=X7R                 | 1206SC102KAT                                            | AVX                            |
|     12 | C14-C17       | 10UF      |     4 | (1210); CERAMIC CHIP; 10UF; 25V; TOL=10%;TC=X7R            | GCM32ER71E106KA57; CGA6P1X7R1E106K                      | MURATA/TDK                     |
|     13 | D1            | 200V/1A   |     1 | (POWERDI-123); PIV=200V; IF=1A                             | DFLS1200                                                | DIODES INCORPORATED            |
|     14 | D2, D3        | 100V/1A   |     2 | (POWERDI-123); PIV=100V; IF=1A                             | DFLS1100-7                                              | DIODES INCORPORATED            |
|     15 | Q1            | 100V/7.5A |     1 | (SO-8);N-CHANNEL 100V MOSFET; PD-(23W); I-(7.5A); V-(100V) | SIR698DP-T1-GE3                                         | VISHAY SILICONIX               |
|     16 | R1, R6        | 10K       |     2 | (0402); 10K OHM; 5%                                        | CRCW040210K0JN                                          | VISHAY DALE                    |
|     17 | R2            | 10.7K     |     1 | (0402); 10.7K OHM; 1%                                      | CRCW040210K7FK                                          | VISHAY                         |
|     18 | R3            | 280K      |     1 | (0402); 280K OHM; 1%                                       | CRCW0402280KFKEDHP                                      | VISHAY DRALORIC                |
|     19 | R4            | 0Ω        |     1 | (0603); 0Ω; 0%                                             | CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00             | VISHAY DALE/ROHM/PANASONIC     |
|     20 | R5            | 162K      |     1 | (0603); 162K OHM; 1%                                       | CRCW0603162KFK                                          | VISHAY DALE                    |
|     21 | R7            | 150K      |     1 | (0402), 150K OHM, 1%                                       | CRCW0402150KFK                                          | VISHAY DALE                    |
|     22 | R8            | 75K       |     1 | (0402); 75K OHM; 1%                                        | CRCW040275K0FK                                          | VISHAY DALE                    |
|     23 | R9            | 10K       |     1 | (1206); 10K; 1%; 100PPM; 1/4W                              | CRCW120610K0FK                                          | VISHAY DALE                    |
|     24 | R10           | 100K      |     1 | (0402); 100K OHM; 5%                                       | CRCW0402100KJN                                          | VISHAY DALE                    |
|     25 | R11           | 49.9K     |     1 | (0402); 49.9K; 1%                                          | CRCW040249K9FK; 9C04021A4992FLHF3                       | VISHAY DALE                    |
|     26 | R12           | 7.32K     |     1 | (0402); 7.32K OHM; 1%                                      | RK73H1ETTP7321F                                         | KOA SPEER ELECTRONICS INC.     |
|     27 | R13           | 2.2       |     1 | (0402), 2.2 OHM, 1%                                        | CRCW04022R20FK                                          | VISHAY DALE                    |
|     28 | R14           | OPEN      |     1 | (1206)                                                     | N/A                                                     | N/A                            |
|     29 | R16           | 0.04      |     1 | (1206); 0.04 OHM; 1%                                       | WSL1206R0400F                                           | VISHAY DALE                    |
|     30 | R17, R18      | 49.9      |     2 | (0603); 49.9 OHM; 1%                                       | CRCW060349R9FK                                          | VISHAY DALE                    |
|     31 | T1            | 33µH,2.2A |     1 | EP13,10-pin SMT, 33µH,2.2A,(2-1):(9- 10)=1:1               | 750343182                                               | WURTH ELECTRONICS INC.         |
|     32 | U1            |           |     1 | (TQFN16-EP)FLYBACK CONTORLLER;                             | MAX17690ATE+                                            | MAXIM                          |
|     33 | Z1, Z2        | 17V/0.01A |     2 | (SOD-123); PD=0.5W; IZ=0.01A; VZ=17V                       | DDZ17-7                                                 | DIODES INCORPORATED            |

## Evaluates: MAX17690 In Dual-Output Configuration

## MAX17690 No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit Schematic

<!-- image -->

│

## MAX17690 No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit PCB Layout Diagrams

MAX17690 EV Kit-Top Silkscreen

<!-- image -->

## Evaluates: MAX17690 In Dual-Output Configuration

MAX17690 EV Kit-Top

<!-- image -->

MAX17690 EV Kit-Bottom

<!-- image -->

│

## MAX17690 No-Opto Flyback Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                           | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/17            | Initial release                                                                                       | -               |
|                 1 | 9/17            | Corrected part number from MAX17690C to MAX17690, and EV kit number from MAX17690C to MAX17690EVKITC. | 1-6             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17690

In Dual-Output Configuration