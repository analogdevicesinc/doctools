<!-- lastmod 2022-08-03 -->
## MAX40108 Evaluation Kit

## General Description

The MAX40108 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX40108  precision,  low-noise, low-drift  dual-operational  amplifier  in  a  6-bump  waferlevel package (WLP). The EV kit circuit is preconfigured as  noninverting  amplifiers,  but  can  be  adapted  to  other topologies by changing a few components.

The EV kit comes with a MAX40108ANT+ installed.

## Features

- Accommodates Multiple Op Amp Configurations
- Component Pads Allow for Sallen-Key Filter
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX40108 EV kit
- +0.9V to +3.6V, 20mA DC power supply (PS1)
- Precision voltage source
- Digital multimeter

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU3) are in their default positions, as shown in Table 1 .
- 2) Set  the  power  supply  to  1.5V.  Connect  the  positive terminal of the power supply to V CC and the negative terminal to GND and V SS.
- 3) Connect  the  positive  terminal  of  the  precision  voltage source to INP. Connect the negative terminal of the precision voltage source to GND. INM is already connected to GND through jumper JU1.
- 4) Connect the DMM to monitor the voltage on OUT. With the 10kΩ feedback resistors and 1kΩ series resistors, the gain of the noninverting amplifier is +11V/V.
- 5) Turn on the power supply.
- 6) Apply  100mV  from  the  precision  voltage  sources. Observe the output at OUT on the DMM that reads approximately +1.1V.

Note: For  dual-supply operation, a ±0.45V to ±1.8V sup -ply can be applied to V DD and V SS , respectively. The rest of the procedure remains the same as that of the singlesupply operation.

To shut down during dual-supply operation, connect JU3 (pin 2) to V SS . Do not use the JU3, 2-3 jumper placement.

<!-- image -->

Evaluates: MAX40108

## Detailed Description of Hardware

The MAX40108 EV kit provides a proven layout for precision, low-noise,  low-drift  op  amp.  The  device  is  a  single/dualsupply op amp with rail-to-rail  inputs  and  outputs,  available in 6-bump WLP (1.22mm x 0.92mm) space-saving package.

The  default  configuration  for  the  device  in  the  EV  kit  is single-supply  operation  in  a  noninverting  configuration. However, the device can operate with a dual supply as long as the voltage across the V DD and V SS  pins of the IC do not exceed the absolute maximum ratings. When operating with a single supply, short V SS to GND.

## Op Amp Configurations

The device is a single/dual-supply op amp that is ideal for differential  sensing,  noninverting  amplification,  buffering, and  filtering.  A  few  common  op  amp  configurations  are explained in the next few sections.

## Noninverting Configuration

The EV kit comes preconfigured as a noninverting amplifier. The  gain  is  set  by  the  ratio  of  R5  and  R1.  The  EV  kit comes  preconfigured  for  a  gain  of  +11V/V.  The  output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier, remove the shunt on jumper JU1, install a shunt on jumper JU2, and feed an input signal on the INM PCB pad.

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3 and R5 with appropriate resistors. When R1 = R2 and  R3  =  R5,  the  CMRR  of  the  differential  amplifier  is determined by the matching of the resistor ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. The Sallen-Key topology can be configured

as a unity-gain buffer by replacing R5 with a 0Ω resistor and removing resistor R1. The signal is noninverting and applied to INP. The filter component pads are R2-R7 and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To configure the Sallen-Key as a lowpass filter,  remove the shunt from jumper JU1, populate the R2 and R8 pads with resistors, and populate the R3 and R7 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  SallenKey as a highpass filter, remove the shunt from jumper JU1,  populate  the  R3  and  R7  pads  with  resistors,  and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Bandpass  Sallen-Key  Filter: To  configure  the  SallenKey as a bandpass filter, remove the shunt from jumper JU1, replace R8, populate the R3 and R7 pads with resistors, and populate the C8 and R2 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

│

## MAX40108 Evaluation Kit

## Transimpedance Amplifier (TIA)

To configure the EV kit as a TIA, place a shunt on jumper JU2 and replace R1 with 0Ω resistors. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where:

I IN  is the input current source applied at the INP test point

I BIAS is the input bias current

VOS is the input offset voltage of the op amp

Use a capacitor and 0Ω resistor at location R10 or R17 (and C8, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. The  EV  kit  provides  C8  and  R6  pads  for  an  optional capacitive-load driving circuit. C8 simulates the capacitive load, while R6 acts as an isolation resistor to improve the op amp's stability at higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin

Note: To  balance  out  input  bias  current  effects,  use R2 = R1││ R5 (Ω).

Evaluates: MAX40108

## Table 1. Jumper Descriptions (JU1-JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|-----------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects INM from GND.                                       |
| JU1      | 1-2*             | Connects INM to GND through R1 for noninverting configuration.  |
| JU2      | Pin 1*           | Disconnects INP from GND.                                       |
| JU2      | 1-2              | Connects INP to GND through R2.                                 |
| JU3      | 1-2*             | Connect SHDN to V DD to place the device into normal operation. |
| JU3      | 2-3              | Connect SHDN to GND to place into shutdown mode.                |

* Default position.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40108EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX40108 Evaluation Kit

## MAX40108 EV Kit Bill of Materials

|   ITEM | REF_DES                       | DNI/DNP   |   QTY | MFG PART #                                              | MANUFACTURER                           | VALUE        | DESCRIPTION                                                                                                                            |
|--------|-------------------------------|-----------|-------|---------------------------------------------------------|----------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C7                        | -         |     2 | C0603X7R500103JNP; C0603C103J5RAC                       | VENKEL LTD; KEMET                      | 0.01µF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01µF; 50V; TOL = 5%; MODEL = X7R; TG = -55°C TO +125°C; TC=+/                                   |
|      2 | C2, C18                       | -         |     2 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10 | MURATA; MURATA; MURATA                 | 4.7µF        | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7µF; 50V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R                                    |
|      3 | GND, TP0_GND, TP4_GND-TP6_GND | -         |     5 | 5011                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH =0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;           |
|      4 | JU1, JU2                      | -         |     2 | PCC02SAAN                                               | SULLINS                                | PCC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65°C TO +125°C                                                     |
|      5 | JU3                           | -         |     1 | PCC03SAAN                                               | SULLINS                                | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65°C TO +125°C                                                     |
|      6 | R1                            | -         |     1 | CRCW06031K00FK; ERJ-3EKF1001                            | VISHAY DALE; PANASONIC                 | 1K           | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                      |
|      7 | R2, R6, R8, R12               | -         |     4 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL          | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH  | 0            | RESISTOR; 0603; 0 Ω ; 5%; JUMPER; 0.10W; THICK FILM                                                                                    |
|      8 | R5                            | -         |     1 | CRCW060310K0FK; ERJ-3EKF1002                            | VISHAY DALE; PANASONIC                 | 10K          | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                     |
|      9 | S1-S3                         | -         |     3 | S1100-B;SX1100-B; STC02SYAN                             | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED                         |
|     10 | TP1                           | -         |     1 | 5000                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                   |
|     11 | TP_INAP, TP_INM, TP_OUT       | -         |     3 | 5012                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;          |
|     12 | U1                            | -         |     1 | MAX40108ANT+                                            | MAXIM                                  | MAX40108ANT+ | EVKIT PART - IC; MAX40108ANT+; 1V LOW-POWER PRECISION OPERATIONAL AMPLIFIER; PACKAGE OUTLINE DRAWING: 21-100427; PACKAGE CODE: N60M1+1 |
|     13 | VDD, VSS                      | -         |     2 | 5010                                                    | KEYSTONE                               | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                            |
|     14 | PCB                           | -         |     1 | MAX40108                                                | MAXIM                                  | PCB          | PCB:MAX40108                                                                                                                           |
|     15 | C3, C6, C8                    | DNP       |     0 | N/A                                                     | N/A                                    | OPEN         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                               |
|     16 | C4, C5, C9                    | DNP       |     0 | N/A                                                     | N/A                                    | SHORT        | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                               |
|     17 | INM, INP, OUT                 | DNP       |     0 | CN-BNC-011PG                                            | FIRST TECH ELECTRONICS, CO.            | CN-BNC-011PG | CONNECTOR; FEMALE; THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS                                                                             |
|     18 | R3, R4, R7, R9-R11            | DNP       |     0 | N/A                                                     | N/A                                    | OPEN         | PACKAGE OUTLINE 0603 RESISTOR                                                                                                          |

│

TOTAL

29

Evaluates: MAX40108

## MAX40108 EV Kit Schematic Diagram

<!-- image -->

## MAX40108 EV Kit PCB Layout Diagrams

MAX40108 EV Kit-Top Silkscreen

<!-- image -->

MAX40108 EV Kit-Top View

<!-- image -->

MAX40108 EV Kit-Bottom View

<!-- image -->

MAX40108 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX40108 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX40108

│