<!-- lastmod 2022-08-03 -->
## MAX4290 Evaluation Kit

## General Description

The MAX44290 evaluation kit (EV kit) provides a proven design to evaluate the MAX44290 low-offset, low-power, rail-to-rail  I/O  operational amplifier in a 6-pin wafer-level package  (WLP).  The  EV  kit  circuit  is  preconfigured  as noninverting  amplifiers,  but  can  be  adapted  to  other topologies by changing a few components.

The EV kit comes with a MAX44290ANT+ installed.

## Features

- Accommodates Multiple Op Amp Configurations
- Component Pads Allow for Sallen-Key Filter
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX44290 EV kit
- +1.8V to +5.5V, 10mA DC power supply
- Precision voltage source
- Digital multimeter

Ordering Information appears at end of data sheet.

µ MAX is a registered trademark of Maxim Integrated Products, Inc.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU3) are in their default positions, as shown in Table 1 .
- 2) Set the power supply to +5V. Connect the positive terminal of the power supply to V DD and the negative terminal to GND.
- 3) Connect the positive terminal of the precision voltage source to INP. Connect the negative terminal of the precision voltage source to GND. INM is already connected to GND through jumper JU1.
- 4) Connect the DMM to monitor the voltage on OUT. With the 10kΩ feedback resistors and 1kΩ series resistors, the gain of the noninverting amplifier is +11V/V.
- 5) Turn on the power supply.
- 6) Apply 100mV from the precision voltage sources. Observe the output at OUT on the DMM that reads approximately +1.1V.

<!-- image -->

Evaluates: MAX4290

## Detailed Description of Hardware

The  MAX44290  EV  kit  provides  a  proven  layout  for  the MAX44290 low-power op amp. The device is a single-supply op  amp  that  is  ideal  for  sensor  interfaces,  loop-powered systems, and various types of medical and data-acquisition instruments.

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

Evaluates: MAX44290

## Sallen-Key Configuration

The  Sallen-Key  topology  is  ideal  for  filtering  sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. The Sallen-Key topology can be configured as a unity-gain buffer by replacing R5 with a 0Ω resistor and removing resistor R1. The signal is noninverting and applied  to  INAP.  The  filter  component  pads  are  R2-R4 and R8, where some have to be populated with resistors and others with capacitors.

Lowpass Sallen-Key Filter: To configure the Sallen-Key as a lowpass filter,  remove the shunt from jumper JU1, populate the R2 and R8 pads with resistors, and populate the R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

Highpass  Sallen-Key  Filter: To  configure  the  SallenKey as a highpass filter, remove the shunt from jumper JU1,  populate  the  R3  and  R4  pads  with  resistors,  and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

│

## MAX44290 Evaluation Kit

Bandpass  Sallen-Key  Filter: To  configure  the  SallenKey as a bandpass filter, remove the shunt from jumper JU1, replace R8, populate the R3 and R4 pads with resistors, and populate the C8 and R2 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Transimpedance Amplifier (TIA)

To configure the EV kit as a TIA, place a shunt on jumper JU2 and replace R1 with 0Ω resistors. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where:

I IN  is the input current source applied at the INP test point

I BIAS is the input bias current

VOS is the input offset voltage of the op amp

Use a capacitor and 0Ω resistor at location R10 or R17 (and C8, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance.

## Capacitive Loads

Some applications require driving large capacitive loads. The  EV  kit  provides  C8  and  R6  pads  for  an  optional capacitive-load driving circuit. C8 simulates the capacitive load while R6 acts as an isolation resistor to improve the op amp's stability at higher capacitive loads. To improve the stability of the amplifier in such cases, replace R6 with a suitable resistor value to improve amplifier phase margin

## Evaluates: MAX44290

## . Table 1. Jumper Descriptions (JU1-JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                   |
|----------|------------------|---------------------------------------------------------------|
| JU1      | Pin 1            | Disconnects INM from GND                                      |
| JU1      | 1-2*             | Connects IN- to GND through R1 for noninverting configuration |
| JU2      | Pin 1*           | Disconnects INAP from GND                                     |
| JU2      | 1-2              | Connects IN+ to GND through R2                                |
| JU3      | 1-2*             | Connects SHDN to V DD to place device into normal operation   |
| JU3      | 2-3              | Connects SHDN to GND to place device into shutdown operation  |

* Default position.

│

## Component Information, PCB Layout, and Schematic

See the links below for component information, PCB layout diagrams, and schematic.

- MAX44290 EV BOM
- MAX44290 EV PCB Layout
- MAX44290 EV Schematic

Evaluates: MAX44290

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44290EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/15           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX44290

│

## MAX44290 Bill of Materials (BOM) Rev 0; 11 /15

<!-- image -->

| ITEM REF_DES                     | DNI/ DNP   | QTY                                                            | MFG PART #             | MANUFACTURER   | VALUE      | DESCRIPTION                                                                                                             | COMMENTS   |
|----------------------------------|------------|----------------------------------------------------------------|------------------------|----------------|------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1 C1                             | -          | 1 C1608C0G 1H103J; CGA3E2C0 G1H103J0 80AD; GRM1885 C1H103JA 01 | TDK;                   | MURATA         | 0.01UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC to +125 DEGC; TC=C0G                              |            |
| 2 C2                             | -          | 1 08053C10 5JAT2A                                              | AVX                    |                | 1UF        | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 25V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +85 DEGC; TC=+/-                       |            |
| 3 GND, TP0_GND, TP4_GND, TP6_GND | -          | 4 5011                                                         | ?                      |                | 5011       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 4 JU1, JU2                       | -          | 2 PCC02SAA N                                                   | SULLINS                |                | PCC02SAA N | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; 65 DEGC TO +125 DEGC                                 | -          |
| 5 JU3                            | -          | 1 PCC03SAA N                                                   | SULLINS                |                | PCC03SAA N | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; 65 DEGC TO +125 DEGC                                 | -          |
| 6 R1                             | -          | 1 CRCW060 31001FK; ERJ- 3EKF1001 V                             | VISHAY DALE; PANASONIC |                | 1K         | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                       |            |

<!-- image -->

| 7 R2, R6, R8, R12          | -   | 4 RC1608J0 00CS; 0603JR-                          | CR0603-J/- 000ELF;RC 070RL           | SAMSUNG ELECTRONICS/BOU RNS/YAGEO PH   |               | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                  |
|----------------------------|-----|---------------------------------------------------|--------------------------------------|----------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|
| 8 R5                       | -   | 1 CRCW060 310K0FK; 9C06031A 1002FK; ERJ- 3EKF1002 | VISHAY DALE/YAGEO PHICOMP/PANAS ONIC |                                        | 10K           | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                      |
| 9 S1-S3                    | -   | 3 STC02SYA N                                      | ELECTRONICS CORP.                    | SULLINS                                | STC02SYA N    | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |
| 10 TP1                     | -   | 1                                                 | 5000 KEYSTONE                        |                                        | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |
| 11 TP_INM, TP_OUT, TP_INAP | -   | 3                                                 | 5012 ?                               |                                        | 5012          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 12 U1                      | -   | 1 MAX4429 0AWT+                                   | 1 MAX4429 0AWT+                      | MAXIM                                  | MAX4429 0AWT+ | EVKIT PART - IC; MAX44290; WLP6; PKG. CODE: N60C1+1                                                                     |
| 13 VDD                     | -   | 1                                                 | 5010                                 | KEYSTONE                               | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |
| 14 C3, C6, C8              | DNP | 3 N/A                                             | 3 N/A                                | N/A                                    | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                |

| 15 C4, C5, C9         | DNP   | 3 N/A           | N/A                         | SHORT         | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                   |
|-----------------------|-------|-----------------|-----------------------------|---------------|------------------------------------------------------------|
| 16 INM, INP, OUT      | DNP   | 3 CN-BNC- 011PG | FIRST TECH ELECTRONICS, CO. | CN-BNC- 011PG | CONNECTOR; FEMALE; THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS |
| 17 R3, R4, R7, R9-R11 | DNP   | 6 N/A           | N/A                         | OPEN          | PACKAGE OUTLINE 0603 RESISTOR                              |

39 TOTAL

ART FILM - SILK\_TOP

<!-- image -->

<!-- image -->

ART FILM - TOP

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

ART FILM - BOTTOM

<!-- image -->

<!-- image -->