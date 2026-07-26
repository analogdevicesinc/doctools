<!-- lastmod 2022-08-03 -->
## MAX40110 Evaluation Kit

## General Description

The MAX40110 evaluation kit (EV kit) provides a proven design to evaluate the MAX40110 low-noise, low-power, low-bias-current  operational  amplifier  in  a  6-pin  µDFN package. The EV kit circuit is preconfigured as noninvert -ing amplifiers, but can be adapted to other topologies by changing a few components.

The EV kit comes with a MAX40110AYT+ installed.

## Features

- Accommodates Multiple Op Amp Configurations
- Component Pads Allow for Sallen-Key Filter
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX40110 EV kit
- 1.7V to 5.5V, 10mA DC power supply
- Precision voltage source
- Digital multimeter

## EV Kit Photo

## Procedure

The EV kit is fully assembled and tested. Use the follow -ing steps to verify board operation:

- 1) Verify that all jumpers (JU1-JU4) are in their default positions, as shown in Table 1.
- 2) Set the power supply to +5V. Connect the positive terminal of the power supply to V DD and the negative terminal to GND.
- 3) Connect the positive terminal of the precision voltage source to INP. Connect the negative terminal of the precision voltage source to GND. INM is already connected to GND through jumper JU1.
- 4) Connect the DMM to monitor the voltage on OUT. With the 10kΩ feedback resistors and 1kΩ series resistors, the gain of the noninverting amplifier is +11V/V.
- 5) Turn on the power supply.
- 6) Apply 100mV from the precision voltage sources. Observe the output at OUT on the DMM that reads approximately +1.1V.

Ordering Information appears at end of data sheet.

Evaluates: MAX40110

<!-- image -->

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Detailed Description of Hardware

The  MAX40110  EV  kit  provides  a  proven  layout  for  the MAX40110 low-power op amp. The device is a single-supply op  amp  that  is  ideal  for  sensor  interfaces,  loop-powered systems, and various types of medical and data-acquisition instruments.

The default configuration for the device in the EV kit is in a noninverting configuration.

## Op-Amp Configurations

The  device  is  a  single-supply  op  amp  that  is  ideal  for differential  sensing,  noninverting  amplification,  buffering, and filtering. A  few  common  configurations  are  shown  in the next few sections.

The  following  sections  explain  how  to  configure  the  op amp.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The  gain  is  set  by  the  ratio  of  R5  and  R1.  The  EV  kit comes  preconfigured  for  a  gain  of  +11V/V.  The  output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the  shunt  on  jumper  JU1  and  install  a  shunt  on  jumper JU2 and feed an input signal on the INAM PCB pad.

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3 and R5 with appropriate resistors. When R1 = R2 and  R3  =  R5,  the  CMRR  of  the  differential  amplifier  is determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. The Sallen-Key topology can be configured as a unity-gain buffer by replacing R5 with a 0Ω resistor and removing resistor R1. The signal is noninverting and applied to INAP. The filter component pads are R2-R3 and R7-R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To configure the Sallen-Key as a lowpass filter,  remove the shunt from jumper JU1, populate the R2 and R8 pads with resistors, and populate the R3 and R7 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  SallenKey as a highpass filter, remove the shunt from jumper JU1,  populate  the  R3  and  R7  pads  with  resistors,  and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

│

## MAX40110 Evaluation Kit

Bandpass  Sallen-Key  Filter: To  configure  the  SallenKey as a bandpass filter, remove the shunt from jumper JU1, replace R8, populate the R3 and R7 pads with resistors, and populate the C8 and R2 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Transimpedance Amplifier (TIA)

To configure the EV kit as a TIA, place a shunt on jumper JU2 and replace R1 with 0Ω resistors. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where:

I IN  is the input current source applied at the INM test point

I BIAS  is the input bias current

VOS is the input offset voltage of the op amp

Use a  capacitor  and  0Ω  resistor  at  location  R4  or  R10 (and C8, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. The EV kit provides C8 and R6 pads for an optional capac -itive-load driving circuit. C8 simulates the capacitive load while  R6  acts  as  an  isolation  resistor  to  improve  the  op amp's stability at higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin.

## Table 1. Jumper Descriptions (JU1-JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                   |
|----------|------------------|---------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects INM from GND                                      |
| JU1      | 1-2*             | Connects IN- to GND through R1 for noninverting configuration |
| JU2      | Pin 1*           | Disconnects INP from GND                                      |
| JU2      | 1-2              | Connects IN+ to GND through R2                                |
| JU3      | 1-2*             | Connects SHDN to V DD to place device into normal operation   |
| JU3      | 2-3              | Connects SHDN to GND to place device into shutdown operation  |
| JU4      | 1-2*             | Connect VSS to GND                                            |
| JU4      | 1                | Disconnect VSS to GND                                         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40110EVKIT# | EV Kit |

#Denotes RoHS compliance.

│

## MAX40110 EV Kit Bill of Materials

|   ITEM | REF_DES                       | DNI/DNP   |   QTY | MFG PART #                                                                                  | MANUFACTURER                              | VALUE            | DESCRIPTION                                                                                                             |
|--------|-------------------------------|-----------|-------|---------------------------------------------------------------------------------------------|-------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C7                        | -         |     2 | C0603X7R500103JNP; C0603C103J5RAC                                                           | VENKEL LTD;KEMET                          | 0.01UF           | CAP; SMT (0603); 0.01UF; 5%; 50V; X7R; CERAMIC                                                                          |
|      2 | C2, C10                       | -         |     2 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L | MURATA;MURATA; MURATA;TAIYO YUDEN; MURATA | 4.7UF            | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                          |
|      3 | GND, TP0_GND, TP4_GND-TP6_GND | -         |     5 | 5011                                                                                        | KEYSTONE                                  | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      4 | JU1, JU2, JU4                 | -         |     3 | PCC02SAAN                                                                                   | SULLINS                                   | PCC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                |
|      5 | JU3                           | -         |     1 | PCC03SAAN                                                                                   | SULLINS                                   | PCC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |
|      6 | MH1-MH4                       | -         |     4 | 9032 KEYSTONE                                                                               | 9032 KEYSTONE                             | 9032             | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                               |
|      7 | R1                            | -         |     1 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                             | VISHAY; PANASONIC; BOURNS                 | 1K               | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
|      8 | R2, R6, R8, R12               | -         |     4 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                              | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH      | 0 RES;           | SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                      |
|      9 | R5                            | -         |     1 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                               | VISHAY DALE; PANASONIC;YAGEO              | 10K              | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
|     10 | SU1-SU4                       | -         |     4 | S1100-B;SX1100-B; STC02SYAN                                                                 | KYCON;KYCON; SULLINS ELECTRONICS CORP.    | SX1100-B         | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                 |
|     11 | TP1, TP2                      | -         |     2 | 5000 KEYSTONE                                                                               | 5000 KEYSTONE                             | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
|     12 | TP_INM, TP_INP, TP_OUT        | -         |     3 | 5012                                                                                        | KEYSTONE                                  | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     13 | U1                            | -         |     1 | MAX40110AYT+                                                                                | MAXIM                                     | MAX40110AYT+     | EVKIT PART - IC; PACKAGE OUTLINE DRAWING: 21-0190; LAND PATTERN NUMBER: 90-0233; PACKAGE CODE: Y61A1+1; LGA6            |
|     14 | VDD, VSS                      | -         |     2 |                                                                                             | 5010 KEYSTONE                             | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |
|     15 | PCB                           | -         |     1 | MAX40110                                                                                    | MAXIM                                     | PCB              | PCB:MAX40110                                                                                                            |
|     16 | INM, INP, OUT                 | DNP       |     0 | CN-BNC-011PG                                                                                | FIRST TECH ELECTRONICS,                   | CO. CN-BNC-011PG | CONNECTOR; FEMALE; THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS                                                              |
|     17 | C3, C6, C8                    | DNP       |     0 | N/A                                                                                         | N/A                                       | OPEN             | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                |
|     18 | C4, C5, C9                    | DNP       |     0 | N/A                                                                                         | N/A                                       | SHORT            | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                |
|     19 | R3, R4, R7, R9-R11            | DNP       |     0 | N/A                                                                                         | N/A                                       | OPEN             | PACKAGE OUTLINE 0603 RESISTOR                                                                                           |

Evaluates: MAX40110

## MAX40110 EV Kit Schematic

<!-- image -->

## MAX40110 Evaluation Kit

## MAX40110 EV Kit PCB Layout

MAX40110 EV Kit PCB Layout-Silk Top

<!-- image -->

MAX40110 EV Kit PCB Layout-Top

<!-- image -->

MAX40110 EV Kit PCB Layout-Bottom

<!-- image -->

│

## MAX40110 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX40110

│