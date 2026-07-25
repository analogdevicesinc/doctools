<!-- lastmod 2022-08-03 -->
## MAX40662 Evaluation Kit

## General Description

The MAX40662 evaluation kit (EV kit) is a fully assembled electrical demonstration kit that provides a proven design to evaluate the MAX40662 quad transimpedance amplifiers.

Note  that  the  MAX40662  EV  kit  provides  an  electrical interface  to  the  IC  that  is  similar,  but  not  identical,  to  a photodiode.

The MAX40662 EV kit printed circuit board (PCB) comes with a MAX40662ATE/VY+ installed.

## Features and Benefits

- Easy Electrical Evaluation of the MAX40662
- EV Kit Designed for 50Ω Interfaces
- -40°C to +125°C Temperature Range
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40662

## MAX40662 EV Kit Photo

<!-- image -->

<!-- image -->

## MAX40662 Evaluation Kit

## Quick Start

## Required Equipment

- +3.6V, 100mA DC Power Supply
- Signal Source Up to 1GHz
- 500MHz to 2.5GHz Oscilloscope

## Procedure

The  MAX40662  EV  kit  is  fully  assembled  and  tested. Follow the below to verify board operation:

Caution: Do not turn on the power supply or the electronic load until all the connections are complete.

- 1) Connect a +3.3V supply and ground to VCC connec -tor and GND return pad of the EV kit, respectively. Disable the output of the power supply.
- 2) Verify all the shunts are in default positions, as shown in Table 1 .
- 3) Connect a signal source to the IN1 edge-mount SMA input. Set the signal amplitude to 12.5mV P-P (4.4mVrms or -34dBm), which corresponds to 5μA P-P . Set the frequency to 100MHz. Disable the signal generator output.
- 4) Connect the OUTP and OUTN edge-mount SMA out -puts to the 50Ω inputs of a high-speed oscilloscope.
- 5) Enable the power supply and signal generator output. Observe the outputs from OUTP and OUTN on the oscilloscope.

## Detailed Description of Hardware

The MAX40662 accepts AC- and DC-coupled input from a  high-speed  photodiode.  The  EV  kit  facilitates  evalu -ation  of  the  MAX40662  TIA  without  a  photodiode.  The MAX40662 TIA is designed to be used with optical transceiver  systems  when  the  detector's  (APD,  PIN  diodes) cathode is connected to the IN\_ pin of the IC. The device is  to  be used when AC input currents are flowing out of the device at the IN\_ pin of the IC.

When an APD with negative bias voltage is connected to the TIA input, the signal current flows out of the amplifier's summing node. The input current flows through an inter -nal load resistor to develop a voltage that is then applied to the input of the second stage. An internal clamp circuit protects against input currents up to 100mA up to 100ns and up to 2A for 10ns pulses at low duty cycles. For more information about the device, refer to the IC data sheet.

## Channel Selection

The MAX40662 EV kit uses jumpers J3 and J4 to select the input channel to pass to the outputs. Table 2 provides the four combinations to select the desired channels.

## Table 1. MAX40662 Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|------------------|-----------------------------------------------------|
| J1       | 1-2              | High Gain Mode Selected (50kΩ Transimpedance)       |
| J1       | 2-3*             | Low Gain Mode Selected (25kΩ Transimpedance)        |
| J2       | 1-2              | Disable Mode. Disables U1 or low power.             |
| J2       | 1-3              | Connects to LP SMA.                                 |
| J2       | 1-4*             | Active Mode. Enables U1.                            |
| J3       | 1-2*             | Channel Selection Input SEL0. Connects to ground.   |
| J3       | 1-3              | Channel Selection Input SEL0. Connects to SEL0 SMA. |
| J3       | 1-4              | Channel Selection Input SEL0. Connects VCC.         |
| J4       | 1-2*             | Channel Selection Input SEL1. Connects to ground.   |
| J4       | 1-3              | Channel Selection Input SEL1. Connects to SEL1 SMA. |
| J4       | 1-4              | Channel Selection Input SEL1. Connects VCC.         |

*Default position.

## Table 2. Jumper Description for Channel Selection

|   INPUT CHANNEL | JUMPER J4 (SEL1) SHUNT POSITION   | JUMPER J3 (SEL0) SHUNT POSITION   |
|-----------------|-----------------------------------|-----------------------------------|
|               1 | 1-2*                              | 1-2*                              |
|               2 | 1-2                               | 1-4                               |
|               3 | 1-4                               | 1-2                               |
|               4 | 1-4                               | 1-4                               |

│

Evaluates: MAX40662

## MAX40662 Evaluation Kit

## Theory of Operation

The  MAX40662  EV  kit  provides  photodiode  emulation using a simplified electrical photodiode model. The model provides a 50Ω electrical input termination, and resistors that  convert  the  high-speed  input  voltage  to  high-speed current. A DC path is provided to model the average pho -todiode current.

## Test Interface

The  MAX40662  outputs  are  back-terminated  with  50Ω. When  terminating  the  outputs  to  a  50Ω  oscilloscope, AC-coupling capacitors C10 and C11 are present and resistor R0 is not installed. When interfacing with subsequent amplifiers  or  LVDS  capable  devices,  AC-coupling  capacitors C10 and C11 are present and 100Ω at resistor R0 is installed.

## Current Pulse Measurements

To perform pulse measurements, the current pulses are created by providing a voltage pulse at IN\_ edge-mount SMAs.  The  input  IN1  series  resistance  combination (R1+R2)  respectively  determines  the  amplitude  of  the current pulse. Note: The same concept applies to all input

## Evaluates: MAX40662

channels: resistors R3 and R4 for input IN2, resistors R5 and R6 for input IN3, and resistors R7 and R8 for input IN4.

Both AC- and DC-coupling at the IN1 input may be used for this test. When using DC-blocking capacitors, CIN1 and CIN2 are used in conjunction with the test. When provid -ing the input voltage pulse at the IN\_ edge-mount SMA, the DC-blocking capacitors CIN1 and CIN2 are replaced with a 0Ω short to DC-couple the input to the MAX40662. Note:  The  same  concept  applies  to  all  input  channels: DC-blocking  capacitors  CIN3  and  CIN4  for  input  IN2, DC-blocking capacitors CIN5 and CIN6 for input IN3, and DC-blocking capacitors CIN7 and CIN8 for input IN4.

The  following  resistor  setting  R S =  (R1+R2)  is  shown in  Table  3  to  create  the  large-signal  current  amplitude pulses.

## Noise Measurements

Remove  the  input  resistors  and  shunt  capacitor  before attempting  noise  measurement.  With  the  input  resistors and shunt capacitor removed, the total capacitance at the IN input is equal to 0.5pF.

Table 3. Different Values of RS (R1+R2) for Different Input Current Pulse Amplitudes

|   INPUT SERIES RESISTANCE R S (Ω) |   GENERATOR INPUT HIGH VOLTAGE (V) |   GENERATOR INPUT LOW VOLTAGE (V) |   GENERATED INPUT CURRENT STEP FROM IN1 (mA) |
|-----------------------------------|------------------------------------|-----------------------------------|----------------------------------------------|
|                                 1 |                              0.855 |                              0.15 |                                           10 |
|                                 1 |                              0.855 |                              -0.9 |                                           50 |
|                                 1 |                              0.855 |                              -2.2 |                                          100 |
|                                 1 |                              0.855 |                              -3.3 |                                          150 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40662EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX40662 Evaluation Kit

## MAX40662 EV Kit Bill of Materials

|   ITEM | REF_DES                  | DNI/DNP   |   QTY | MFG PART #                                                                                                      | MANUFACTURER                                            | VALUE        | DESCRIPTION                                                                                                                                                                                           | COMMENTS   |
|--------|--------------------------|-----------|-------|-----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1                       | -         |     1 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA | KEMET;NIC COMPONENTS CORP.;YAGEO PHICOMP;MURATA;TDK;TDK | 100PF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                             |            |
|      2 | C2                       | -         |     1 | C0402X7R500-222KNE; GRM155R71H222KA01                                                                           | VENKEL LTD.;MURATA                                      | 2200PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                           |            |
|      3 | C3                       | -         |     1 | C0402X5R100-105KNE; GRM155R61A105KE15                                                                           | VENKEL LTD.;MURATA                                      | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                       |            |
|      4 | C4, C10, C11             | -         |     3 | GRM155R61C104KA88                                                                                               | MURATA                                                  | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R                                                                                                |            |
|      5 | C5                       | -         |     1 | C0402X5R6R3-225MNP; C0402C225M9PAC; GRM155R60J225ME15; JMK105BJ225MV                                            | VENKEL;KEMET;MURATA; TAIYO YUDEN                        | 2.2UF        | CAPACITOR; SMT; 0402; CERAMIC; 2.2uF; 6.3V; 20%; X5R; -55degC to + 85degC; 0 +/-15% degC MAX.                                                                                                         |            |
|      6 | CIN1, CIN3, CIN5, CIN7   | -         |     4 | C0402C101K5GAC; C1005C0G1H101K050BA                                                                             | KEMET;TDK                                               | 100PF        | CAPACITOR; SMT; 0402; CERAMIC; 100pF; 50V; 10%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                                                                                            |            |
|      7 | CIN2, CIN4, CIN6, CIN8   | -         |     4 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                                    | MURATA;TDK;TAIYO YUDEN;TDK                              | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                          |            |
|      8 | GND1, GND2, VCC          | -         |     3 | 9020 BUSS                                                                                                       | WEICO WIRE                                              | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                              |            |
|      9 | IN1-IN4, OUTN, OUTP      | -         |     6 | 32K243-40ML5                                                                                                    | ROSENBERGER                                             | 32K243-40ML5 | CONNECTOR; FEMALE; SMT; SMA JACK PCB; RIGHT ANGLE; 2PINS                                                                                                                                              |            |
|     10 | I_OFFSET, LP, SEL0, SEL1 | -         |     4 | 131-3701-266                                                                                                    | JOHNSON COMPONENTS                                      | 131-3701-266 | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                                                                                                                           |            |
|     11 | J1                       | -         |     1 | PCC03SAAN                                                                                                       | SULLINS                                                 | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                                              |            |
|     12 | J2-J4                    | -         |     3 | PEC04SAAN                                                                                                       | SULLINS ELECTRONICS CORP.                               | PEC04SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                             |            |
|     13 | L1                       | -         |     1 | BLM15BD601SN1                                                                                                   | MURATA                                                  | 600          | INDUCTOR; SMT (0402); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                                                                                                                             |            |
|     14 | MH1-MH4                  | -         |     4 | P440.375                                                                                                        | GENERIC PART                                            | N/A          | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                                                                                                     |            |
|     15 | MH1-MH4                  | -         |     4 | 1902B                                                                                                           | GENERIC PART                                            | N/A          | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                                                                                                  |            |
|     16 | R1-R8                    | -         |     8 | ERJ-2RKF1241                                                                                                    | PANASONIC                                               | 1.24K        | RESISTOR; 0402; 1.24K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                              |            |
|     17 | R9, RCL                  | -         |     2 | ERJ-2GE0R00                                                                                                     | PANASONIC                                               |              | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                |            |
|     18 | RT1-RT4                  | -         |     4 | TNPW040249R9BE; RG1005P-49R9-B-T; ERA-2AEB49R9                                                                  | SUSUMU CO LTD.;PANASONIC; VISHAY                        | 49.9         | RESISTOR; 0402; 49.9 OHM; 0.1%; 25PPM; 0.063W; THICK FILM                                                                                                                                             |            |
|     19 | SU1-SU4                  | -         |     4 | S1100-B;SX1100-B; STC02SYAN                                                                                     | KYCON;KYCON;SULLINS ELECTRONICS CORP.                   | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                               |            |
|     20 | U1                       | -         |     1 | MAX40662                                                                                                        | MAXIM                                                   | MAX40662     | EVKIT PART - IC; AMP; QUAD TRANSIMPEDANCE AMPLIFIER WITH INPUT CURRENT CLAMP AND MULTIPLEXER FOR LIDAR; PACKAGE OUTLINE DRAWING: 21-100204; PACKAGE CODE: T1644Y+5C; LAND PATTERN: 90-0070; TQFN16-EP |            |
|     21 | PCB                      | -         |     1 | MAX40662                                                                                                        | MAXIM                                                   | PCB          | PCB:MAX40662                                                                                                                                                                                          |            |
|     22 | C6, C9, C14              | DNP       |     0 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA | KEMET;NIC COMPONENTS CORP.;YAGEO PHICOMP;MURATA;TDK;TDK | 100PF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                             |            |
|     23 | C7, C13                  | DNP       |     0 | C0402X7R500-222KNE; GRM155R71H222KA01                                                                           | VENKEL LTD.;MURATA                                      | 2200PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                           |            |
|     24 | C8, C12                  | DNP       |     0 | C0402X5R100-105KNE; GRM155R61A105KE15                                                                           | VENKEL LTD.;MURATA                                      | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                       |            |
|     25 | C15-C18                  | DNP       |     0 | GRM155R61C104KA88                                                                                               | MURATA                                                  | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R                                                                                                |            |
|     26 | CD1-CD4                  | DNP       |     0 | N/A                                                                                                             | N/A                                                     | OPEN         | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                                                                                              |            |
|     27 | R0                       | DNP       |     0 | ERJ-2RKF1000                                                                                                    | PANASONIC                                               | 100          | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                |            |

Evaluates: MAX40662

## MAX40662 EV Kit Schematic

<!-- image -->

## MAX40662 EV Kit PCB Layout Diagrams

Silk Top

<!-- image -->

Top

<!-- image -->

GND2

<!-- image -->

GND3

<!-- image -->

│

## MAX40662 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

Bottom

Silk Top

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX40662