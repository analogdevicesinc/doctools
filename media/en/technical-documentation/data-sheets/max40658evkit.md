<!-- lastmod 2022-08-03 -->
## MAX40658 Evaluation Kit

## General Description

The MAX40658 evaluation kit (EV kit) is a fully assembled electrical demonstration kit that provides a proven design to evaluate the MAX40658 and MAX40659 transimpedance amplifier.

Note  that  the  MAX40658  EV  kit  provides  an  electrical interface to the IC that is similar, but not identical to, a photodiode.

The MAX40658 EV kit PCB comes with a MAX40658AETA+ 18.3kΩ transimpedance device installed. To evaluate the MAX40659AETA+  (36.6kΩ  transimpedance),  contact  the factory for free samples of the pin-compatible device.

## Features

- Easy +3.3V Electrical Evaluation of MAX40658
- EV Kit Designed for 50Ω Interfaces
- -40°C to +85°C Temperature Range
- Evaluated 8-TDFN-EP MAX40658AETA+ Device
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40658/MAX40569

## Quick Start

## Required Equipment

- MAX40658 EV kit
- +3.6V, 100mA DC power supply
- Signal source up to 1GHz
- A minimum 500MHz to 2.5GHz oscilloscope

## Procedure

The  MAX40658  EV  kit  is  fully  assembled  and  tested. Follow the below to verify board operation:

Caution: Do not turn on the power supply or the electronic load until all the connections are complete.

- 1) Connect a +3.3V supply and ground to V1\_Supply connector.
- 2) Connect a signal source to J2. Set the signal amplitude to 20mV P-P (7.07mV RMS or -30dBm). (Corresponding to 3.6μA P-P ). Set the frequency to 100MHz.
- 3) Apply 1μA to the J11 DC input using a DC current source to emulate the DC component of the input signal. A voltage source connected from J11 to GND may be used if a DC current source is not available.
- 4) Connect OUT1+ (J10) and OUT- (J7) to the 50Ω inputs of a high-speed oscilloscope.
- 5) Verify all the shunts are in default positions as shown in Table 1 .
- 6) The differential signal at the oscilloscope should be approximately 43mV P-P at 100MHz.

<!-- image -->

## Detailed Description of Hardware

The MAX40658 accepts a DC-coupled input from a highspeed  photodiode.  The  MAX40658  evaluation  board facilitates evaluation of MAX40658 TIA without a photodiode. The MAX40658 EV kit comes from the factory with a low input current and a high input current setup.

## Theory of Operation

The MAX40658 EV kit comes with an 8-TDFN EP with circuit providing photodiode emulation using a simplified electrical  photodiode model. The model provides a 50Ω electrical input termination, resistors that convert the highspeed input voltage to high-speed current. A DC path is provided to model the average photodiode current.

## Test Interface

The MAX40658 outputs are back-terminated with 75Ω. To facilitate interface with 50Ω equipment, the MAX40658 EV kit places external 150Ω termination resistors in parallel with each output so that the EV kit will match a 50Ω environment.

Note that the output load has a direct effect on the overall gain  and  output  signal  swing.  Because  of  the  external 150Ω  resistors  and  the  50Ω  environments,  the  overall gain is reduced by 33%. If matching a 50Ω environment is not critical, higher gain can be achieved by increasing the load resistance.

## Current Pulse Measurements

To perform pulse measurements, the current pulses are created  by  providing  a  voltage  pulse  at  J1  or  J2  input. The  input  series  resistance  combination  (R5  +  R7)  or (R6 + R8), respectively, determines the amplitude of the current pulse.

For best performance, when providing the input voltage pulse at J1, remove the DC blocking capacitors C1 and C2 and replace them with a 0Ω short to DC couple the input to the MAX40658. Remove R3.

Use the following resistor combinations as shown in Table 1 to create the respective current amplitude pulses.

## Current Pulse Measurements

To perform pulse measurements, the current pulses are created by providing a voltage pulse at J1 or J2 input. The input series resistance combination (R5+R7) or (R6+R8) respectively  determines  the  amplitude  of  the  current pulse.

For best performance, when providing the input voltage pulse at J1, remove the DC blocking capacitors C1 and C2 and replace them with a 0Ω short to DC couple the input to the MAX40658. Remove R3.

Use the following resistor combinations as shown in the table  below  to  create  the  respective  current  amplitude pulses.

## Noise measurements

Remove  the  input  resistors  and  shunt  capacitor  before attempting  noise  measurement.  With  the  input  resistors and shunt capacitor removed, the total capacitance at the IN-input 0.5pF.

## Evaluation of the MAX40659

This  EV  kit  ships  with  the  MAX40658ETA+  included. To  evaluate  the  MAX40659ETA+,  contact  the  factory  to obtain a MAX40659ETA+ to evaluate with this EV kit.

## Table 1. Different Values of Rs (R5+R7) for Different Input Current Pulse Amplitudes.

|   INPUT SERIES RESISTANCER S (Ω) |   GENERATOR INPUTAMPLITUDE STEP (V) |   GENERATED INPUT CURRENT STEP (MA) |
|----------------------------------|-------------------------------------|-------------------------------------|
|                             2200 |                                0.55 |                                 0.1 |
|                              100 |                                0.35 |                                   1 |
|                              9.4 |                                 4.6 |                                  92 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40658EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX40658 EV Kit Bill of Materials

| ITEM   | REF_DES                              | DNI/DNP   |   QTY | MFG PART #                                                                              | MANUFACTURER                                         | VALUE        | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|--------------------------------------|-----------|-------|-----------------------------------------------------------------------------------------|------------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C3, C5, C7, C8, C24              | -         |     6 | GRM155R61C104KA88                                                                       | MURATA                                               | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R                  |            |
| 2      | C2, C6, C17, C18                     | -         |     4 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050 | KEMET/NIC COMPONENTS CORP./ YAGEO PHICOMP/MURATA/TDK | 100PF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                               |            |
| 3      | C4, C23                              | -         |     2 | C0402X5R6R3-225MNP; C0402C225M9PAC; GRM155R60J225ME; JMK105BJ225MV                      | VENKEL/KEMET/MURATA/ TAIYO YUDEN                     | 2.2UF        | CAPACITOR; SMT; 0402; CERAMIC; 2.2uF; 6.3V; 20%; X5R; -55degC to + 85degC; 0 +/-15% degC MAX.                           |            |
| 4      | C11, C12                             | -         |     2 | C0402X7R500-222KNE; GRM155R71H222KA01                                                   | VENKEL LTD./MURATA                                   | 2200PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
| 5      | C13-C16, C19-C22, C25, C26           | -         |    10 | C0402X5R100-105KNE; GRM155R61A105KE15                                                   | VENKEL LTD./MURATA                                   | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                         |            |
| 6      | J1, J2, J7-J10                       | -         |     6 | 32K243-40ML5                                                                            | ROSENBERGER                                          | 32K243-40ML5 | CONNECTOR; FEMALE; SMT; SMA JACK PCB; RIGHT ANGLE; 2PINS                                                                |            |
| 7      | J3, J5, J11, J12                     | -         |     4 | 131-3701-266                                                                            | JOHNSON COMPONENTS                                   | 131-3701-266 | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                                             |            |
| 8      | L1, L2                               | -         |     2 | BLM15BD601SN1                                                                           | MURATA                                               |              | 600 INDUCTOR; SMT (0402); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                                           |            |
| 9      | OUT+_U1, OUT+_U2, OUT-_U1, OUT-_U2   | -         |     4 |                                                                                         | 5012 KEYSTONE                                        | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 10     | R1, R2                               | -         |     2 | TNPW040249R9BE; RG1005P-49R9-B-T; ERA-2AEB49R9X                                         | SUSUMU CO LTD./PANASONIC/ VISHAY                     |              | 49.9 RESISTOR; 0402; 49.9 OHM; 0.1%; 25PPM; 0.063W; THICK FILM                                                          |            |
| 11     | R3, R4                               | -         |     2 | CRCW04025K10FK                                                                          | VISHAY DALE                                          | 5.1K         | RESISTOR; 0402; 5.1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |            |
| 12     | R5, R7                               | -         |     2 | RG1005P-101-B-T5; ERA-2AEB101X                                                          | SUSUMU CO LTD./PANASONIC                             |              | 100 RESISTOR, 0402, 100 OHM, 0.1%, 25PPM, 0.0625W, THICK FILM                                                           |            |
| 13     | R6, R8                               | -         |     2 | CRCW04022K55FK                                                                          | VISHAY DALE                                          | 2.55K        | RESISTOR, 0402, 2.55K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                              |            |
| 14     | R9, R10                              | -         |     2 | ERJ-2RKF4992X                                                                           | PANASONIC                                            | 49.9K        | RESISTOR; 0402; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                |            |
| 15     | R11-R14                              | -         |     4 | CRCW0402150RFK; 9C04021A1500FL                                                          | VISHAY DALE                                          |              | 150 RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                            |            |
| 16     | U1, U2                               | -         |     2 | MAX40658                                                                                | MAXIM                                                | MAX40658     | EVKIT PART-IC; PACKAGE OUTLINE: 21-0137                                                                                 |            |
| 17     | V1_GND, V2_GND, V1_SUPPLY, V2_SUPPLY | -         |     4 | 9020 BUSS                                                                               | WEICO WIRE                                           | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |            |
| 18     | PCB                                  | -         |     1 | MAX40658                                                                                | MAXIM                                                | PCB          | PCB:MAX40658                                                                                                            |            |
| 19     | C9, C10                              | DNP       |     0 | C0402C109C1GAC                                                                          | KEMET                                                | 1PF          | CAPACITOR; SMT; 0402; CERAMIC; 1pF; 100V; 0.25pF; C0G; -55degC to + 125degC;                                            |            |
| TOTAL  |                                      |           |    61 |                                                                                         |                                                      |              |                                                                                                                         |            |

## MAX40658 EV Kit Schematic

<!-- image -->

## MAX40658 EV Kit PCB Layout Diagrams

MAX40658 EV Kit-Top Silkscreen

<!-- image -->

MAX40658 EV Kit-Top

<!-- image -->

│

## MAX40658 EV Kit PCB Layout Diagrams (continued)

MAX40658 EV Kit-GND2

<!-- image -->

MAX40658 EV Kit-GND3

<!-- image -->

│

## MAX40658 EV Kit PCB Layout Diagrams (continued)

MAX40658 EV Kit-Bottom

<!-- image -->

│

## MAX40658 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                    | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------|-----------------|
|                 0 | 7/17            | Initial release                                | -               |
|                 1 | 10/18           | Updated evaluation options to include MAX40659 | 1-8             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX40658/MAX40659