<!-- lastmod 2022-08-03 -->
## MAX401 Evaluation Kit

## General Description

The MAX40100 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX40100  precision,  low-noise, low-drift  dual-operational  amplifier  in  a  6-bump  waferlevel package (WLP). The EV kit circuit is preconfigured as  noninverting  amplifiers,  but  can  be  adapted  to  other topologies by changing a few components.

The EV kit comes with a MAX40100AWT+ installed.

## Features

- Accommodates Multiple Op Amp Configurations
- Component Pads Allow for Sallen-Key Filter
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX40100 EV kit
- +1.8V to +5.5V, 20mA DC power supply (PS1)
- Precision voltage source
- Digital multimeter

Ordering Information appears at end of data sheet.

µ MAX is a registered trademark of Maxim Integrated Products, Inc.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU3) are in their default positions, as shown in Table 1.
- 2) Set the power supply to +5V. Connect the positive terminal of the power supply to V CC  and the negative terminal to GND and V SS .
- 3) Connect the positive terminal of the precision voltage source to INAP. Connect the negative terminal of the precision voltage source to GND. INAM is already connected to GND through jumper JU1.
- 4) Connect the DMM to monitor the voltage on OUTA. With the 10kΩ feedback resistors and 1kΩ series resistors, the gain of the noninverting amplifier is +11V/V.
- 5) Turn on the power supply.
- 6) Apply 100mV from the precision voltage sources. Observe the output at OUTA on the DMM that reads approximately +1.1V.

Note: For  dual-supply  operation,  a  ±0.9V  to  ±2.75V  can be applied to V DD  and V SS , respectively. The rest of the procedure remains the same as that of the single-supply operation.

To shutdown during dual-supply operation, please connect JU3 (pin 2) to V SS . Do not use JU3, 2-3 jumper placement.

<!-- image -->

Evaluates: MAX401

## MAX40100 Evaluation Kit

## Detailed Description of Hardware

The MAX40100 EV kit provides a proven layout for precision, low-noise,  low-drift  op  amp.  The  device  is  a  single/dualsupply op amp with rail-to-rail inputs and outputs, available in 6-bump WLP (1.1 x 0.76mm) space saving package.

The  default  configuration  for  the  device  in  the  EV  kit  is single-supply  operation  in  a  noninverting  configuration. However, the device can operate with a dual supply as long as the voltage across the V DD  and V SS  pins of the IC do not exceed the absolute maximum ratings. When operating with a single supply, short V SS  to GND.

## Op Amp Configurations

The device is a single/dual-supply op amp that is ideal for differential  sensing,  noninverting  amplification,  buffering, and filtering. A  few  common  configurations  are  shown  in the next few sections.

The following sections explain how to configure the op amp.

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

Evaluates: MAX40100

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. The Sallen-Key topology can be configured as a unity-gain buffer by replacing R5 with a 0Ω resistor and removing resistor R1. The signal is noninverting and applied to INAP. The filter component pads are R2-R7and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To configure the Sallen-Key as a lowpass filter,  remove the shunt from jumper JU1, populate the R2 and R8 pads with resistors, and populate the R3 and R7 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  SallenKey as a highpass filter, remove the shunt from jumper JU1,  populate  the  R3  and  R7  pads  with  resistors,  and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## MAX40100 Evaluation Kit

Bandpass  Sallen-Key  Filter: To  configure  the  SallenKey as a bandpass filter, remove the shunt from jumper JU1, replace R8, populate the R3 and R7 pads with resistors, and populate the C8 and R2 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Transimpedance Amplifier (TIA)

To configure the EV kit as a TIA, place a shunt on jumper JU2 and replace R1 with 0Ω resistors. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where:

I IN   is  the  input  current  source  applied  at  the  INAP test point

I BIAS  is the input bias current

VOS is the input offset voltage of the op amp

Use a capacitor and 0Ω resistor at location R10 or R17 (and C8, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. The  EV  kit  provides  C8  and  R6  pads  for  an  optional capacitive-load driving circuit. C8 simulates the capacitive load while R6 acts as an isolation resistor to improve the op amp's stability at higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin

Note: To balance out Input Bias current effects, please use R2 = R1││ R5 (Ω).

## Table 1. Jumper Descriptions (JU1-JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|-----------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects INAM from GND.                                      |
| JU1      | 1-2*             | Connects INAM to GND through R1 for noninverting configuration. |
| JU2      | Pin 1*           | Disconnects INAP from GND.                                      |
| JU2      | 1-2              | Connects INAP to GND through R2.                                |
| JU3      | 1-2*             | Connect SHDN to V DD to place the device into normal operation. |
| JU3      | 2-3              | Connect SHDN to GND to place into shutdown mode.                |

* Default position.

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- MAX40100 EV BOM
- MAX40100 EV PCB Layout
- MAX40100 EV Schematic

Evaluates: MAX40100

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40100EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX40100 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX40100

TITLE:

Bill of Materials

DATE:

03/22/2016

DESIGN:

max40100\_evkit\_a

## NOTE: DNI -- &gt; DO NOT INSTALL ; DNP -- &gt; DO NOT PROCURE

| REF_DES                             | DNI/ DNP   | QTY MFG PART #                                          | MNFCTR                                | VALUE      | DESCRIPTION                                                                                                             |
|-------------------------------------|------------|---------------------------------------------------------|---------------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------|
| 1 C1, C7                            | -          | 2 C0603X7R500 103JNP; C0603C103J5                       | KEMET                                 | 0.01UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; MODEL=X7R; TG= - 55 DEGC TO +125 DEGC; TC=+/                  |
| C2, C18                             | -          | 2 GRM31CR71 H475KA12                                    | MURATA                                | 4.7UF      | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; MODEL=; TG= 55 DEGC TO +125 DEGC; TC=X7R                      |
| 2 3 GND, TP0_GND, TP4_GND - TP6_GND | -          | 5 5011                                                  | ?                                     | 5011       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 4 JU1, JU2                          | -          | 2 PCC02SAAN                                             | SULLINS                               | N          | PCC02SAA CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC                      |
| 5 JU3                               | -          | 1 PCC03SAAN                                             | SULLINS                               | PCC03SAA N | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65 DEGC TO +125 DEGC                               |
| 6 R1                                | -          | 1 CRCW060310 01FK; ERJ - 3EKF1001V                      | VISHAY DALE; PANASONI C               | 1K         | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                       |
| 7 R2, R6, R8, R12                   | -          | 4 RC1608J000C S; CR0603 - J/ - 000ELF;RC06 03JR - 070RL | SAMSUNG ELECTRON ICS/BOUR NS/YAGEO PH |            | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                  |

| 8 R5                       | -   | 1               | CRCW060310 K0FK; 9C06031A100 2FK; ERJ - 3EKF1002   | VISHAY DALE/YAG EO PHICOMP /PANASO NIC   | 10K              | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                      |
|----------------------------|-----|-----------------|----------------------------------------------------|------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------|
| 9 S1 - S3                  | -   | 3               | STC02SYAN                                          | SULLINS ELECTRON ICS CORP.               | STC02SYA N       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |
| 10 TP1                     | -   | 1               | 5000                                               | KEYSTONE                                 | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| 11 TP_INM, TP_OUT, TP_INAP | -   | 3               | 5012 ?                                             | 5012 ?                                   | 5012             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 12 U1                      | -   | 1 MAX40100A WT+ | 1 MAX40100A WT+                                    | MAXIM                                    | MAX4010 0AWT+    | EVKIT PART - IC; OP AMP; LOW - POWER; ZERO - DRIFT OPERATIONAL - AMPLIFIER; PACKAGE CODE: N60D1 - 1; WLP6               |
| 13 VDD, VSS                | -   | 2               | 5010 KEYSTONE                                      | 5010 KEYSTONE                            | N/A              | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |
| 14 C3, C6, C8              | DNP | 0 N/A           | 0 N/A                                              | N/A                                      | OPEN             | PACKAGE OUTLINE 0603 NON - POLAR CAPACITOR                                                                              |
| 15 C4, C5, C9              | DNP | 0 N/A           | 0 N/A                                              | N/A                                      | SHORT            | PACKAGE OUTLINE 0603 NON - POLAR CAPACITOR                                                                              |
| 16 INM, INP, OUT           | DNP | 0               | CN - BNC - 011PG                                   | FIRST TECH ELECTRON ICS, CO.             | CN - BNC - 011PG | CONNECTOR; FEMALE; THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS                                                              |
| R3, R4, R7, R9 - R11       | DNP | 0               | N/A                                                | N/A                                      | OPEN             | PACKAGE OUTLINE 0603 RESISTOR                                                                                           |
| 17 18 PCB                  | -   | 1               | MAX                                                | MAXIM                                    | PCB              | PCB Board:MAX40100 EVALUATION KIT                                                                                       |
| TOTAL                      |     | 29              |                                                    |                                          |                  |                                                                                                                         |

<!-- image -->

<!-- image -->

## TOP SILKSCREEN

TOP

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

BOTTOM

<!-- image -->

<!-- image -->

## BOTTOM SILKSCREEN

<!-- image -->