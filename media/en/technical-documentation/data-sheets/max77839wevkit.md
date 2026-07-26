<!-- lastmod 2022-08-02 -->
<!-- image -->

©

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX77839 in WLP Package

## General Description

The MAX77839 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX77839,  a  2.5A  buck-boost converter. The IC is capable of 1.8V to 5.5V input and is output voltage adjustable between 2.3V to 5.3V (through the  SEL  pin).  The  factory  default  output  voltage  of  this EV kit is set at 3.3V. Output voltage can be adjusted by changing  the  SEL  resistor  value  (R3).  The  GPIO  pin  is available to support the force PWM or power-OK (POK) function. The EV kit is compatible with any version of the MAX77839 WLP IC (MAX77839AEWL+ is the default).

## EV Kit Specifications and Default

## Configuration

With the default jumper settings listed in Table 2 and the EV kit component value R SEL (R3) = 0Ω, the MAX77839 EV kit is configured with the following settings:

- IC Part Number: MAX77839AEWL+T
- Switching Current Limit = 4.4A
- Active Discharge Enabled
- UVLO Rising = 1.8V, UVLO Falling = 1.73V

## Table 1. EV Kit Default Specifications

| SPECIFICATION          | TEST CONDITIONS                                |   MIN |   TYP |   MAX | UNIT   |
|------------------------|------------------------------------------------|-------|-------|-------|--------|
| Input Voltage          |                                                |   1.8 |       |   5.5 | V      |
| Output Voltage         | Configurable by SEL resistor R3 (see Table 3). |   2.3 |       |   5.3 | V      |
| Default Output Voltage |                                                |   3.3 |   3.3 |   3.3 | V      |
| Output Current         |                                                |     0 |       |   2.5 | A      |
| Switching Frequency    |                                                |   2.2 |   2.2 |   2.2 | MHz    |
| Current Limit          | A and B options                                |   4.4 |   4.4 |   4.4 | A      |
| Peak Efficiency        | 3.3V IN , 3.3V OUT , 500mA load                |       |       |  96.0 | %      |

<!-- image -->

319-100651; Rev 2; 10/21

One  Analog Way, Wilmington, MA 0187 U.S.A | Tel: 781.329470 | © 201  Analog Devices,  Inc.  All rights  reserved. 201 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX77839 Evaluation Kit

## Benefits and Features

- Sense Points for High-Accuracy Measurements
- Accessible Test Points for EN, POK, and OUTS
- Output Voltage Adjustable Using SEL
- FPWM and SKIP Mode Configurable (A and C options) (SKIP mode by default)
- POK Status Configurable (B and D options)
- Active Discharge Functionality
- UVLO Rising = 1.8V, UVLO Falling = 1.73V (MAX77839AEWL+)

Ordering Information appears at end of data sheet.

## Evaluates: MAX7839 in WLP Package

Figure 1. MAX77839 Evaluation Board

<!-- image -->

## Table 2. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | FUNCTION                                                                  |
|----------|--------------------|------------------|---------------------------------------------------------------------------|
| J1       | EN                 | 1-2*             | Connects EN to HI (MAX77839 is enabled by default)                        |
| J2       | GPIO               | 1-2              | POK selection (options B and D)                                           |
| J2       | GPIO               | 2-3*             | FPWM selection (options A and C)                                          |
| J3       | FPWM               | 1-2              | Enables FPWM function                                                     |
| J3       | FPWM               | 2-3*             | Enables SKIP mode function                                                |
| J4       | SEL                | 1-2*             | Configures output voltage using potentiometer R3. (0Ω = 3.3V OUT default) |
| J5       | LOGIC SUPPLY       | 1-2*             | Connects HI to VIN                                                        |
| J5       | LOGIC SUPPLY       | 2-3              | Connects HI to External Supply (EXT)                                      |

│

## MAX77839 Evaluation Kit

## Quick Start

## Required Equipment

- MAX77839 EV kit
- Adjustable DC power supply
- 1.8V DC power supply (optional)
- Digital multi-meters

## Setup Overview

A typical bench setup for the MAX77839 EV kit is shown in Figure 2.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation.  Use  twisted  wires  of appropriate gauge (20AWG) that are as short as possible to connect the load and power sources.

- 1) Ensure that the EV kit has the correct jumper settings, as shown in Table 2.
- 2) Connect a DVM to the VINS and PGNDS1 sense pins to measure input voltage.
- 3) Connect a DVM to the OUTS and PGNDS2 sense pins to measure output voltage.
- 4) Apply a power supply set to 0V (100mA current limit) across the VIN and PGND1 terminals of the EV kit. Turn the supply on and increase the voltage to 3.8V.
- 5) Confirm the DVM connected to OUTS and PGNDS\_ OUT reads the default output voltage of the EV kit (3.3V).

Figure 2. EV Kit Connection Block Diagram

<!-- image -->

## Evaluates: MAX7839 in WLP Package

## Table 3. MAX77839 R SEL Selection Table

|   V OUT (V) | R SEL (kΩ)   |
|-------------|--------------|
|         3.3 | Short (0Ω)   |
|         2.3 | 4.99         |
|         2.4 | 5.90         |
|         2.5 | 7.15         |
|         2.6 | 8.45         |
|         2.7 | 10.0         |
|         2.8 | 11.8         |
|         2.9 | 14.0         |
|         3.0 | 16.9         |
|         3.1 | 20.0         |
|         3.2 | 23.7         |
|         3.4 | 28.0         |
|         3.5 | 34.0         |
|         3.6 | 40.2         |
|         3.7 | 47.5         |
|         3.8 | 56.2         |
|         3.9 | 66.5         |
|         4.0 | 80.6         |
|         4.1 | 95.3         |
|         4.2 | 113          |
|         4.3 | 133          |
|         4.4 | 162          |
|         4.5 | 191          |
|         4.6 | 226          |
|         4.7 | 267          |
|         4.8 | 324          |
|         4.9 | 383          |
|         5.0 | 452          |
|         5.1 | 536          |
|         5.2 | 634          |
|         5.3 | 768          |
|        2.85 | 909 or Open  |

│

## MAX77839 Evaluation Kit

## Detailed Description of Hardware

The  MAX77839  EV  kit  demonstrates  the  MAX77839 buck-boost.  It  regulates  output  from  an  input  voltage range of 1.8V to 5.5V. The programmable output range is from 2.3V to 5.3V with 100mV steps. The EV kit is suited with a general DC input. Table 2 lists jumpers and associated functions that are available on the EV kit.

The  MAX77839  includes  an  SEL  pin  to  configure  the output  voltage  on  startup.  Resistors  with  tolerance  1% (or better) should be chosen for R3, with nominal values specified in Table 3.

## High Temperature Testing

The  MAX77839  is  rated  for  operation  under  ambient temperatures up to +125°C. Note that not all components on the EV kit are rated for temperatures that high. Some ceramic  capacitors  experience  extra  leakage  when  put under  temperatures  higher  than  they  are  rated,  and supply  current  readings  for  the  IC  might  be  larger  than expected. Double check the components on the EV kit if testing at +125°C ambient temperatures.

List of capacitors not rated for +125°C:

- C2 (output capacitor)
- C4 (VIN bulk capacitor)

Consider replacing these components if IC operation at +125°C ambient temperature is an important use case.

## Test Points and Critical Node Measurement (VOUT and LX)

The EV kit comes with sockets pre-soldered onto the board for  measuring  the  critical  nodes  VOUT,  LX1,  and  LX2. Use these probe sockets to eliminate as much noise as possible when measuring the critical nodes (see example shown in Figure 3). To ensure best results, use a very short ground wire from the ground sleeve of the scope probe to the GND side of the probe socket, and use the bare tip of the probe directly to the signal side of the probe socket.

## Table 4. Usage of Critical Test Points

| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, V OUT ACCURACY   | EFFICIENCY     | EFFICIENCY    | SWITCHING NODE   | SWITCHING NODE   |
|---------------------------------|----------------------------------------------------|----------------|---------------|------------------|------------------|
| LOAD TRANSIENT, OUTPUT RIPPLE   | LOAD REGULATION, LINE REGULATION, V OUT ACCURACY   | OUTPUT VOLTAGE | INPUT VOLTAGE | LX1              | LX2              |
| OUT2                            | OUT5                                               | OUT5           | VIN5          | LX1              | LX2              |

│

## Evaluates: MAX7839 in WLP Package

Following these guidelines gives the most accurate results when  measuring  parameters  like  output  voltage  ripple, switching waveforms, and load transient response.

## Evaluating Other MAX77839 Versions

The  MAX77839  natively  supports  the  FPWM  and  POK versions of the MAX77839. The EV kit is designed such that any version of the MAX77839 can be evaluated with the same hardware. To evaluate the POK versions of the MAX77839, replace the MAX77839 (U1) on the EV kit with the  MAX77839BEWL+  or  MAX77839DEWL+  IC  (refer to  the  IC  data  sheet's  Ordering  Information).  Remove J3 jumper  and  install  J2  jumper  (1-2).  No  other  component changes are required to evaluate the POK versions.

## PCB Layout Guideline

Careful  circuit  board  layout  is  critical  to  achieve  low switching power losses and clean, stable operation. Refer to  the  PCB  Layout  Guideline  section  of  the MAX77839 data sheet .

axim

Figure 3. Probing Critical Nodes

<!-- image -->

## MAX77839 Evaluation Kit

## Table 5. Component List

| PART                                                                                                         | QTY                                                                                                          | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | DESCRIPTION                                                                                                        |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| C1                                                                                                           | 1                                                                                                            | GRM188D71A106MA73                                                                                            | MURATA                                                                                                       | 10μF ±20%, 10V X7T CERAMIC CAPACITOR (0603)                                                                        |
| C2                                                                                                           | 1                                                                                                            | GRM188R60J476ME15                                                                                            | MURATA                                                                                                       | 47μF ±20%, 6.3V X5R CERAMIC CAPACITOR (0603)                                                                       |
| C3                                                                                                           | 1                                                                                                            | GRM155R70J105MA12                                                                                            | MURATA                                                                                                       | 1μF ±20%, 6.3V X7R CERAMIC CAPACITOR (0402)                                                                        |
| J1-J3, J5                                                                                                    | 2                                                                                                            | PBC03SAAN                                                                                                    | SULLINS ELECTRONICS CORP.                                                                                    | STRAIGHT CONNECTOR, 3 PINS                                                                                         |
| J4                                                                                                           | 1                                                                                                            | PBC02SAAN                                                                                                    | SULLINS ELECTRONICS CORP.                                                                                    | STRAIGHT CONNECTOR, 2 PINS                                                                                         |
| L1                                                                                                           | 1                                                                                                            | XAL4020-102ME                                                                                                | COILCRAFT                                                                                                    | 1μH ±20%, ISAT=9.6A, DCR=13.25mΩ                                                                                   |
| R2                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0Ω, RESISTOR (0402)                                                                                                |
| U1                                                                                                           | 1                                                                                                            | MAX77839AEWL+                                                                                                | MAXIM                                                                                                        | BUCK-BOOST (15 WLP), MAX77839AEWL+                                                                                 |
| Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen.       |
| L2                                                                                                           | 1                                                                                                            | CIGT252010EH1R0M                                                                                             | SAMSUNG ELECTRONICS                                                                                          | INDUCTOR; SMT (1008); MAGNETICALLY SHIELDED; 1UH; TOL=+/-20%; 4.3A                                                 |
| LX1, LX2, OUT2                                                                                               | 3                                                                                                            | SS-102-TT-2                                                                                                  | SAMTEC                                                                                                       | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                               |
| OUT1, PGND1, PGND2, VIN                                                                                      | 4                                                                                                            | 9020 BUSS                                                                                                    | WEICO WIRE                                                                                                   | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                           |
| OUTS, VINS                                                                                                   | 2                                                                                                            | 5000                                                                                                         | KEYSTONE                                                                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| PGNDS1, PGNDS2                                                                                               | 2                                                                                                            | 5001                                                                                                         | KEYSTONE                                                                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| PCB                                                                                                          | 1                                                                                                            | MAX77839 SOLDERDOWN                                                                                          | MAXIM                                                                                                        | PCB:MAX77839SOLDERDOWN                                                                                             |
| R3                                                                                                           | 1                                                                                                            | 3296Y-1-105LF                                                                                                | BOURNS                                                                                                       | RES; THROUGH HOLE-RADIAL LEAD; 1M; 10%; +/-100PPM/DEGC; 0.5W                                                       |
| R5                                                                                                           | 0                                                                                                            | CRCW040215K0FK                                                                                               | VISHAY DALE                                                                                                  | RESISTOR; 0402; 15K; 1%; 100PPM; 0.0625W; THICK FILM                                                               |

## Ordering Information

| PART            | U1 IC         | DEFAULT OUTPUT VOLTAGE   | UVLO FALLING   | UVLO RISING   |
|-----------------|---------------|--------------------------|----------------|---------------|
| MAX77839WEVKIT# | MAX77839AEWL+ | 3.3V                     | 1.73V          | 1.8V          |

│

Evaluates: MAX7839 in WLP Package

## MAX77839 EV Kit Bill of Materials

| ITEM   | REF_DES                 | DNI/DNP   |   QTY | MFG PART #                                                                 | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                                                                | COMMENTS   |
|--------|-------------------------|-----------|-------|----------------------------------------------------------------------------|---------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | AGND, GND1, GND2        | -         |     3 | 5011                                                                       | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                    |            |
| 2      | BIAS, EN, GPIO, SEL     | -         |     4 | 5002                                                                       | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                      |            |
| 3      | C1                      | -         |     1 | GRM188D71A106MA73                                                          | MURATA                                | 10UF          | CAP; SMT (0603); 10UF; 20%; 10V; X7T; CERAMIC                                                                                                              |            |
| 4      | C2                      | -         |     1 | GRM188R60J476ME15                                                          | MURATA                                | 47UF          | CAP; SMT (0603); 47UF; 20%; 6.3V; X5R; CERAMIC                                                                                                             |            |
| 5      | C3                      | -         |     1 | GRM155R70J105MA12                                                          | MURATA                                | 1UF           | CAP; SMT (0402); 1UF; 20%; 6.3V; X7R; CERAMIC                                                                                                              |            |
| 6      | C4                      | -         |     1 | C1210C107M9PAC; C1210X5R6R3-107MNE; GRM32ER60J107ME20; C3225X5R0J107M250AC | KEMET;VENKEL LTD.;MURATA;TDK          | 100UF         | CAP; SMT (1210); 100UF; 20%; 6.3V; X5R; CERAMIC                                                                                                            |            |
| 7      | EXT                     | -         |     1 | 5010                                                                       | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                      |            |
| 8      | J1-J3, J5               | -         |     4 | PBC03SAAN                                                                  | SULLINS                               | PBC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                           |            |
| 9      | J4                      | -         |     1 | PBC02SAAN                                                                  | SULLINS ELECTRONICS CORP.             | PBC02SAAN     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                                                               |            |
| 10     | L1                      | -         |     1 | XEL4020-102ME                                                              | COILCRAFT                             | 1UH           | EVKIT PART - INDUCTOR; SMT; COMPOSITE; 1UH; 20%; 9.6A;                                                                                                     |            |
| 11     | L2                      | -         |     1 | CIGT252010EH1R0M                                                           | SAMSUNG ELECTRONICS                   | 1UH           | INDUCTOR; SMT (1008); MAGNETICALLY SHIELDED; 1UH; TOL=+/-20%; 4.3A                                                                                         |            |
| 12     | OUT1, PGND1, PGND2, VIN | -         |     4 | 9020 BUSS                                                                  | WEICO WIRE                            | MAXIMPAD      | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                   |            |
| 13     | OUTS, VINS              | -         |     2 | 5000                                                                       | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                           |            |
| 14     | PGNDS1, PGNDS2          | -         |     2 | 5001                                                                       | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                         |            |
| 15     | R2                      | -         |     1 | RC0402JR-070RL; CR0402-16W-000RJT                                          | YAGEO PHYCOMP;VENKEL LTD.             | 0             | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                                                    |            |
| 16     | R3                      | -         |     1 | 3296Y-1-105LF                                                              | BOURNS                                | 1M            | RES; THROUGH HOLE-RADIAL LEAD; 1M; 10%; +/-100PPM/DEGC; 0.5W                                                                                               |            |
| 17     | R5                      | -         |     1 | CRCW040215K0FK                                                             | VISHAY DALE                           | 15K           | RES; SMT (0402); 15K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                                         |            |
| 18     | SU1-SU5                 | -         |     5 | S1100-B;SX1100-B;STC02SYAN                                                 | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                    |            |
| 19     | U1                      | -         |     1 | MAX77839EWLA+                                                              | MAXIM                                 | MAX77839EWLA+ | EVKIT PART - IC; 5.5V INPUT 4.4A/3.6A SWITCHING CURRENT 6MICRO-AMPERE IQ BUCK-BOOST CONVERTER; PACKAGE OUTLINE DRAWING 21- 100441; PACKAGE CODE: W151K2Z+1 |            |
| 20     | PCB                     | -         |     1 | MAX77839WLPSOLDERDOWN                                                      | MAXIM                                 | PCB           | PCB:MAX77839WLPSOLDERDOWN                                                                                                                                  |            |
| 21     | LX1, LX2, OUT2          | DNP       |     0 | SS-102-TT-2                                                                | SAMTEC                                | SS-102-TT-2   | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                                                                       |            |
| 22     | R1                      | DNP       |     0 | N/A                                                                        | N/A                                   | OPEN          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                           |            |
| TOTAL  |                         |           |    37 |                                                                            |                                       |               |                                                                                                                                                            |            |

## MAX77839 Evaluation Kit

## MAX77839 EV Kit Schematic

<!-- image -->

## MAX77839 Evaluation Kit

## MAX77839 EV Kit PCB Layouts

MAX77839 EV Kit Component Placement Guide - Top Side

<!-- image -->

MAX77839 EV Kit PCB Layout - Top Side

<!-- image -->

MAX77839 EV Kit PCB Layout - Layer 2

<!-- image -->

│

## MAX77839 Evaluation Kit

## MAX77839 EV Kit PCB Layouts (continued)

MAX77839 EV Kit PCB Layout - Layer 3

<!-- image -->

MAX77839 EV Kit PCB Layout - Bottom Layer

<!-- image -->

│

## MAX77839 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                          | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------|-----------------|
|                 0 | 12/20           | Initial release                                                      | -               |
|                 1 | 9/21            | Fixed typo in General Description and Benefits and Features sections | 1               |
|                 2 | 10/21           | Fixed typo in General Description and Benefits and Features sections | 1               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX7839 in WLP Package