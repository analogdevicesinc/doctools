<!-- lastmod 2020-10-26 -->
<!-- image -->

## 1.0 Scope

This  specification  documents  the  detail  requirements  for  space  qualified  product  manufactured  on  Analog Devices, Inc.'s QML certified line per MIL-PRF-38535 Level V except as modified herein.

The manufacturing flow described in the STANDARD SPACE LEVEL PRODUCTS PROGRAM brochure is to be considered a part of this specification.  http://www.analog.com/aeroinfo

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/ADuM141

## 2.0 Part Number

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADuM141E1L703F

150 MBPS Quad-Channel Digital Isolator

## 3.0 Case Outline

The case outline(s) are as designated in MIL-STD-1835 and as follows:

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish    | Package style           |
|------------------|--------------------------|-------------|----------------|-------------------------|
| X                | CDFP4-F16                | 16 lead     | Hot Solder Dip | Bottom Brazed Flat Pack |

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## 150 MBPS Quad-Channel Digital Isolator

## ADuM141ES

## ADuM141ES

Figure 1 - Terminal Connections

| Package:X   | Package:X       | Package:X      | Package:X                                              |
|-------------|-----------------|----------------|--------------------------------------------------------|
| Pin Number  | Terminal Symbol | Pin Type       | Pin Description                                        |
| 1           | VDD1            | Power          | Supply Voltage for Isolator Side 1 1/                  |
| 2           | GND1            | Power          | Ground 1. Ground reference for Isolator Side 1. 2/     |
| 3           | VIA             | Digital Input  | Logic Input A.                                         |
| 4           | VIB             | Digital Input  | Logic Input B                                          |
| 5           | VIC             | Digital Input  | Logic Input C                                          |
| 6           | VOD             | Digital Output | Logic OutputD                                          |
| 7           | VE1             | Digital Input  | Output Enable for side 1. Active high logic input      |
| 8           | GND1            | Power          | Ground 1. Ground reference for Isolator Side 1. 2/, 4/ |
| 9           | GND2            | Power          | Ground 2. Ground reference for Isolator Side 2. 3/     |
| 10          | VE2             | Digital Input  | Output Enable for side 2. Active high logic input      |
| 11          | VID             | Digital Input  | Logic Input D.                                         |
| 12          | VOC             | Digital Output | Logic Output C                                         |
| 13          | VOB             | Digital Output | Logic Output B                                         |
| 14          | VOA             | Digital Output | Logic Output A                                         |
| 15          | GND2            | Power          | Ground 2. Ground reference for Isolator Side 2. 3/     |
| 16          | VDD2            | Power          | Supply Voltage for Isolator Side 2 1/                  |
| Lid         |                 | Power          | Metal Lid electrically connected to ground (GND1)      |

1/ Connect a ceramic bypass capacitor of value 0.01 μF to 0.1 μF between VDD1 (Pin 1) and GND1 (Pin 2), and between VDD2 (Pin 16) and GND2 (Pin 15)

2/ Pin 2 and Pin 8 are internally connected, and connecting both to GND1 is recommended.

3/ Pin 9 and Pin 15 are internally connected, and connecting both to GND2 is recommended.

4/ Internally connected to Metal Lid.

## 4.0 Specifications

## 4.1. Absolute Maximum Ratings 1/

Supply voltage (VDD1 , VDD2)   ..........................................................  -0.5V to 7.0V

Input voltage (VIA, VIB, VIC, VID, VE1, VE2) ..........................................  -0.5V to VDDI + 0.5V 2/

Output voltage (VOA, VOB, VOC, VOD) ................................................  -0.5V to VDDO + 0.5V2/

Storage temperature range  ..........................................................  -65 ° C to +150 ° C

Output current per pin (IO1, IO2) ...................................................... -10mA to +10mA

Junction temperature maximum (TJ)  ............................................  +150 ° C

Lead temperature (soldering, 60 seconds)  ..................................  +300

° C

Thermal resistance, junction-to-case (

θ

JC)  ...................................  72

°

C/W 3/

Thermal resistance, junction-to-ambient (

θ

JA)  ..............................  162

°

C/W 3/

ESD Sensitivity (HBM)………………………………………………... Class 2

## 4.2. Recommended Operating Conditions

Supply voltage (VDDI)  ....................................................................  +1.8 V to +5.0 V

Ambient operating temperature range (TA)……………………….… -55 ° C to +125 ° C

## 4.3. Nominal Operating Performance Characteristics  4/

Jitter

Peak-to-Peak  ..............................................................................  800ps

RMS  ............................................................................................  190ps

Capacitance (Input-to-Output) ....................................................... 14pF 5/

Input Capacitance .......................................................................... 4pF 6/

## 4.4.  Radiation Features

Maximum total dose available (dose rate = 50 - 300 rads(Si)/s)…… 50k rads(Si)

Single event phenomenon (SEP):

No single event latchup (SEL) occurs at effective linear energy

transfer (LET):   ………………...……………………. ≤ 80MeV -cm2/mg 7/

1/  Stresses  above  those  listed  under  Absolute  Maximum  Ratings  may  cause  permanent  damage  to  the  device.    This  is  a  stress  rating  only;  functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ VDDI and VDDO refer to the supply voltages on the input and output sides of a given channel, respectively.

3/ Measurement taken under absolute worst case condition and represent data taken with thermal camera for highest power density location. See MIL-STD1835 for average ΘJC number.

4 / All typical specifications are at TA = 25°C, 3.6 V ≤ VDD1 ≤ 5. V, 3.3 V ≤ VDD2 ≤ 5.0 V, unless otherwise noted. Switching s pecifications are tested with CL = 15 pF and CMOS signal levels, unless otherwise noted.

5/ The device is considered a 2-terminal device: Pin 1 through Pin 8 are shorted together and Pin 9 through Pin 16 are shorted together.

6/ Input capacitance is from any input data pin to ground.

7/ Limits are characterized at initial qualification and after any design or process changes that may affect the SEP characteristics, but are not production lot tested unless specified by the customer through the purchase order or contract.  For more information on single event effect (SEE) test results, customers are requested to contact ADI.  SEL test report is available on the external website: www.analog.com.

TABLE IA - ELECTRICAL PERFORMANCE CHARACTERISTICS - 5V OPERATION

| Parameter See notes at end of table                  | Symbol                    | Conditions 1/ 9/ Unless otherwise specified   | Conditions 1/ 9/ Unless otherwise specified   | Sub-Group                 | Limit Min                 | Limit Max                 | Units                     |
|------------------------------------------------------|---------------------------|-----------------------------------------------|-----------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS                            | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                     | SWITCHING CHARACTERISTICS                     | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate 8/                                         | DR                        | Within PWDLimit                               |                                               | 9,10,11                   |                           | 150                       | Mbps                      |
|                                                      |                           |                                               | D,P,L                                         | 9                         |                           | 150                       | Mbps                      |
| Propagation Delay                                    | t PHL , t PLH             | 50% input to 50%                              | output                                        | 9                         | 4.8                       | 13.5                      | ns                        |
|                                                      |                           |                                               |                                               | 10                        | 4.8                       | 13.5                      | ns                        |
|                                                      |                           |                                               |                                               | 11                        | 4.2                       | 13.5                      | ns                        |
|                                                      |                           |                                               | D,P,L                                         | 9                         | 4.8                       | 13.5                      | ns                        |
| Pulse Width Distortion                               | PWD                       | &#124;t PLH - t PHL &#124;                    |                                               | 9,10,11                   |                           | 3                         | ns                        |
|                                                      |                           |                                               | D,P,L                                         | 9                         |                           | 3                         | ns                        |
| Pulse Width                                          | PW                        | Within PWDlimit                               |                                               | 9,10,11                   | 6.6                       |                           | ns                        |
|                                                      | t PSK                     |                                               | D,P,L                                         | 9 9,10,11                 | 6.6                       | 6.1                       | ns                        |
| Propagation Delay Skew 3/, 4/ Pulse Width Distortion | ΔPWD                      |                                               |                                               | 10,11                     | -25                       | 25                        | ps/°C                     |
| Change vs. Temperature 3/ Channel Matching           | t PSKCD                   |                                               |                                               | 9,10,11                   |                           | 3                         | ns                        |
| Codirection                                          | t PSKOD                   |                                               | D,P,L                                         | 9 9,10,11                 |                           | 3                         | ns                        |
| Channel Matching                                     |                           |                                               |                                               |                           |                           | 3                         | ns                        |
| Opposing-Direction                                   | t t                       | 10% to 90%                                    | D,P,L                                         | 9                         |                           | 3                         | ns                        |
| Output Rise/Fall Time 2/,                            | R / F                     |                                               |                                               | 9                         |                           | 4                         | ns                        |
| 3/                                                   |                           |                                               |                                               | 10                        |                           | 4.5                       | ns                        |
|                                                      |                           |                                               |                                               | 11                        |                           | 3.5                       | ns                        |
| SUPPLY CURRENT                                       | SUPPLY CURRENT            | SUPPLY CURRENT                                | SUPPLY CURRENT                                | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            |
| Dynamic Supply Current                               | I DD1(D)                  | F = 1MBPS                                     |                                               | 4,5,6                     |                           | 10.3                      | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 4                         |                           | 10.3                      | mA                        |
|                                                      |                           | F = 25MBPS                                    |                                               | 4,5,6                     |                           | 10.9                      | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 4                         |                           | 10.9                      | mA                        |
|                                                      |                           | F = 100MBPS                                   |                                               | 4,5,6                     |                           | 15.9                      | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 4                         |                           | 15.9                      | mA                        |
|                                                      |                           | F = 150MBPS                                   |                                               | 4,5,6                     |                           | 17                        | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 4                         |                           | 17                        | mA                        |
|                                                      | I DD2(D)                  | F = 1MBPS                                     |                                               | 4,5,6                     |                           | 6.85                      | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 4                         |                           | 6.85                      | mA                        |
|                                                      |                           | F = 25MBPS                                    |                                               | 4,5,6                     |                           | 8.5                       | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 4                         |                           | 8.5                       | mA                        |
|                                                      |                           | F = 100MBPS                                   |                                               | 4,5,6                     |                           | 14                        | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 4                         |                           | 14                        | mA                        |
|                                                      |                           | F = 150MBPS                                   |                                               | 4,5,6                     |                           | 17.5                      | mA                        |
|                                                      |                           |                                               |                                               |                           |                           | 17.5                      | mA                        |
| Quiescent Supply Current                             | I                         |                                               | D,P,L                                         | 4 1,2,3                   |                           | 2.46                      | mA                        |
|                                                      | DD1(Q)                    | V Ix = 1 5/                                   | D,P,L                                         | 1                         |                           | 2.46                      | mA                        |
|                                                      |                           | V Ix = 0 5/                                   |                                               | 1,2,3                     |                           | 17                        | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 1                         |                           | 17                        | mA                        |
| Quiescent Supply                                     | I DD2(Q)                  | V Ix = 1 5/                                   |                                               | 1,2,3                     |                           | 2.62                      | mA                        |
| Current                                              |                           |                                               | D,P,L                                         | 1                         |                           | 2.62                      | mA                        |
|                                                      |                           |                                               | D,P,L                                         | 1                         |                           | 10                        | mA                        |
| DC CHARACTERISTICS                                   |                           |                                               |                                               |                           |                           |                           | mA                        |

## ADuM141ES

| Parameter See notes at end of table          | Symbol   | Conditions 1/ 9/ Unless otherwise specified   | Sub-Group   | Limit Min   | Limit Max   | Units   |
|----------------------------------------------|----------|-----------------------------------------------|-------------|-------------|-------------|---------|
| Logic High Input Threshold                   | V IH     | 7/                                            | 1,2,3       | 0.7 V DDx   |             | V       |
| Logic High Input Threshold                   |          | D,P,L                                         | 1           | 0.7 V DDx   |             |         |
| Logic Low Input Threshold                    | V IL     | 7/                                            | 1,2,3       |             | 0.3 V DDx   | V       |
| Logic Low Input Threshold                    |          | D,P,L                                         | 1           |             | 0.3 V DDx   |         |
| Logic High Output Voltages                   | V OH     | I Ox = -20 μA, V Ix = V IxH 5/, 6/,7/         | 1,2,3       | V DDx - 0.1 |             | V       |
| Logic High Output Voltages                   |          | D,P,L                                         | 1           | V DDx - 0.1 |             |         |
| Logic High Output Voltages                   |          | I Ox = -4 mA, VIx = V IxH 5/, 6/,7/           | 1,2,3       | V DDx - 0.4 |             |         |
| Logic High Output Voltages                   |          | D,P,L                                         | 1           | V DDx - 0.4 |             |         |
| Logic Low Output Voltages                    | V OL     | I Ox = 20 μA, V Ix = V IxL 5/, 6/,7/          | 1,2,3       |             | 0.1         | V       |
| Logic Low Output Voltages                    |          | D,P,L                                         | 1           |             | 0.1         |         |
| Logic Low Output Voltages                    |          | I Ox = 4 mA, V Ix = V IxL 5/, 6/,7/           | 1,2,3       |             | 0.4         |         |
| Logic Low Output Voltages                    |          | D,P,L                                         | 1           |             | 0.4         |         |
| Input Current per Channel                    | I I      | V Ix = V DDx and V Ix = 0V 5/, 6/,7/          | 1,2,3       | -10         | +10         | µA      |
| Input Current per Channel                    |          | D,P,L                                         | 1           | -10         | +10         |         |
| Enable Pull-Up Current                       | I PU     | V Ex = 0 V 10/                                | 1,2,3       | -10         |             | µA      |
| Enable Pull-Up Current                       |          | D,P,L                                         | 1           | -10         |             |         |
| Enable Pull-Down Current                     | I PD     | V Ex = V DDx 7/,10/                           | 1,2,3       |             | 15          | µA      |
| Enable Pull-Down Current                     |          | D,P,L                                         | 1           |             | 15          |         |
| Tristate Output Current per                  | I OZ     | 0 V ≤ V Ox ≤ V DDx 7/                         | 1,2,3       | -10         | 10          | µA      |
| Channel                                      |          | D,P,L                                         | 1           | -20         | 20          |         |
| Undervoltage Lockout Positive VDDX Threshold | V DDxUV+ |                                               | 1,2         |             | 1.75        | V       |
| Undervoltage Lockout Positive VDDX Threshold |          |                                               | 3           |             | 1.71        |         |
| Undervoltage Lockout Positive VDDX Threshold |          | D,P,L                                         | 1           |             | 1.75        |         |
| Undervoltage Lockout                         | V DDxUV- |                                               | 1,2,3       | 1.35        |             | V       |
| Negative VDDX Threshold                      |          | D,P,L                                         | 1           | 1.35        |             |         |
| Undervoltage Lockout                         | V DDxUVH |                                               | 1,2,3       |             | 0.4         | V       |
| VDDX Hysteresis                              |          | D,P,L                                         | 1           |             | 0.4         |         |

## TABLE IA NOTES:

1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted, VDDx nom = 5 V, VDDx max = 5.5V, VDDx min = 4.5V.

2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation

4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.

5/ VIx refer to the input voltage.

6/ IOx refer to the output current of a given channel (A, B, C, or D).

7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).

8/ 150 Mbps is the highest data rate that can be guaranteed, although higher data rates are possible

9/ Do not exceed VDDxnom where VDD1 = VDD2 = 5V at T = -55°C when all four channels are running in parallel.  Device instability may occur.

10/ VEx refers to VE1 and VE2

## TABLE IB - ELECTRICAL PERFORMANCE CHARACTERISTICS - 3.3V OPERATION

| Parameter See notes at end of table   | Symbol                    | Conditions 1/ Unless otherwise specified   | Sub-Group                 | Limit Min                 | Limit Max                 | Units                     |
|---------------------------------------|---------------------------|--------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS             | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                  | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate 8/                          | DR                        | Within PWDLimit                            | 9,10,11                   |                           | 150                       | Mbps                      |
|                                       |                           | D,P,L                                      | 9                         |                           | 150                       |                           |
| Propagation Delay                     | t PHL , t PLH             | 50% input to 50% output                    | 9,10                      | 4                         | 14                        | ns                        |
|                                       |                           |                                            | 11                        | 3.6                       | 14                        |                           |
|                                       |                           | D,P,L                                      | 9                         | 4                         | 14                        |                           |

## ADuM141ES

| Parameter See notes at end of table   | Symbol    | Conditions 1/ Unless otherwise specified   |                 | Sub-Group   | Limit Min   | Limit Max   | Units   |
|---------------------------------------|-----------|--------------------------------------------|-----------------|-------------|-------------|-------------|---------|
| Pulse Width Distortion                | PWD       | &#124;t PLH - t PHL &#124;                 |                 | 9,10,11     |             | 3           | ns      |
|                                       |           |                                            | D,P,L           | 9           |             | 3           |         |
| Pulse Width                           | PW        | Within PWDlimit                            |                 | 9,10,11     | 6.6         |             | ns      |
|                                       |           |                                            | D,P,L           | 9           | 6.6         |             |         |
| Propagation Delay Skew                | t PSK     |                                            |                 | 9,10,11     |             | 7.5         | ns      |
| 3/, 4/                                |           |                                            |                 |             |             |             |         |
| Pulse Width Distortion                | ΔPWD      |                                            |                 | 10,11       | -25         | 25          | ps/°C   |
| Change vs. Temperature 3/             |           |                                            |                 |             |             |             |         |
| Channel Matching                      | t PSKCD   |                                            |                 | 9,10,11     |             | 3           | ns      |
| Codirection                           |           |                                            | D,P,L           | 9           |             | 3           |         |
| Channel Matching                      | t PSKOD   |                                            |                 | 9,10,11     |             | 3           | ns      |
| Opposing-Direction                    |           |                                            | D,P,L           | 9           |             | 3           |         |
| Output Rise/Fall Time 2/,             | t R / t F | 10% to 90%                                 |                 | 9           |             | 4           | ns      |
| 3/                                    |           |                                            |                 | 10          |             | 4.5         |         |
|                                       |           |                                            |                 | 11          |             | 3.5         |         |
| SUPPLY CURRENT                        |           |                                            |                 |             |             |             |         |
| Dynamic Supply Current                | I DD1(D)  | F = 1MBPS                                  |                 | 4,5,6       |             | 10.1        | mA      |
|                                       |           |                                            | D,P,L           | 4           |             | 10.1        |         |
|                                       |           | F = 25MBPS                                 |                 | 4,5,6       |             | 10.5        |         |
|                                       |           |                                            | D,P,L           | 4           |             | 10.5        |         |
|                                       |           | F = 100MBPS                                |                 | 4,5,6       |             | 14.9        |         |
|                                       |           |                                            | D,P,L           | 4           |             | 14.9        |         |
|                                       |           | F = 150MBPS                                |                 | 4,5,6       |             | 14.9        |         |
|                                       |           |                                            | D,P,L           | 4           |             | 14.9        |         |
|                                       | I DD2(D)  | F = 1MBPS                                  |                 | 4,5,6       |             | 6.65        |         |
|                                       |           |                                            | D,P,L           | 4           |             | 6.65        |         |
|                                       |           | F = 25MBPS                                 |                 | 4,5,6       |             | 8           |         |
|                                       |           |                                            | D,P,L           | 4           |             | 8           |         |
|                                       |           |                                            |                 | 4,5,6       |             | 12.8        |         |
|                                       |           | F = 100MBPS                                |                 | 4           |             | 12.8        |         |
|                                       |           | F = 150MBPS                                | D,P,L           | 4,5,6       |             | 14.5        |         |
|                                       |           |                                            | D,P,L           | 4           |             |             |         |
| Quiescent Supply Current              |           |                                            |                 |             |             | 14.5        |         |
|                                       | I DD1(Q)  | V Ix = 1 5/                                |                 | 1,2,3       |             | 2.36        | mA      |
|                                       |           |                                            | D,P,L           | 1           |             | 2.36        |         |
|                                       |           | V Ix = 0 5/                                |                 | 1,2,3       |             | 16.7        |         |
|                                       |           |                                            | D,P,L           | 1           |             | 16.7        |         |
| Quiescent Supply                      | I DD2(Q)  | V Ix = 1 5/                                |                 | 1,2,3       |             | 2.52        | mA      |
| Current                               |           |                                            | D,P,L           | 1           |             | 2.52        |         |
|                                       |           | V Ix = 0 5/                                |                 | 1,2,3       |             | 9.7         |         |
|                                       |           |                                            | D,P,L           | 1           |             | 9.7         |         |
| DC CHARACTERISTICS                    |           |                                            |                 |             |             |             |         |
| Logic High Input Threshold            | V IH      | 7/                                         |                 | 1,2,3       | 0.7 V DDx   |             | V       |
|                                       |           |                                            | D,P,L           | 1           | 0.7 V DDx   |             |         |
| Logic Low Input Threshold             | V IL      | 7/                                         |                 | 1,2,3       |             | 0.3 V DDx   | V       |
|                                       |           |                                            | D,P,L           | 1           |             | 0.3 V DDx   |         |
| Logic High Output                     | V OH      | I Ox = -20 μA, V Ix = V IxH                | 5/, 6/,7/       | 1,2,3       | V DDx - 0.1 |             | V       |
| Voltages                              |           |                                            | D,P,L           | 1           | V DDx - 0.1 |             |         |
|                                       |           | I Ox = -4 mA, VIx =                        | V IxH 5/, 6/,7/ | 1,2,3       | V DDx - 0.4 |             |         |
|                                       |           |                                            | D,P,L           | 1           | V DDx - 0.4 |             |         |
| Logic Low Output Voltages             | V OL      | I Ox = 20 μA, V Ix =                       | V IxL 5/, 6/,7/ | 1,2,3       |             | 0.1         | V       |
|                                       |           |                                            | D,P,L           | 1           |             | 0.1         |         |
|                                       |           | I Ox = 4 mA, V Ix = V                      | IxL 5/, 6/,7/   | 1,2,3       |             | 0.4         |         |

## TABLE IC - ELECTRICAL PERFORMANCE CHARACTERISTICS - 2.5V OPERATION

## ADuM141ES

| Parameter See notes at end of table   | Symbol   | Conditions 1/ Unless otherwise specified   | Sub-Group   |   Limit Min |   Limit Max | Units   |
|---------------------------------------|----------|--------------------------------------------|-------------|-------------|-------------|---------|
|                                       |          | D,P,L                                      | 1           |             |         0.4 |         |
| Input Current per Channel             | I I      | V Ix = V DDx and V Ix = 0V 5/, 6/,7/       | 1,2,3       |         -10 |         +10 | µA      |
|                                       |          | D,P,L                                      | 1           |         -10 |         +10 |         |
| Enable Pull-Up Current                | I PU     | V Ex = 0 V 9/                              | 1,2,3       |         -10 |             | µA      |
|                                       |          | D,P,L                                      | 1           |         -10 |             |         |
| Enable Pull-Down Current              | I PD     | V Ex = V DDx 7/,9/                         | 1,2,3       |             |          15 | µA      |
| Enable Pull-Down Current              |          | D,P,L                                      | 1           |             |          15 |         |
| Tristate Output Current per           | I OZ     | 0 V ≤ V Ox ≤ V DDx 7/                      | 1,2,3       |         -10 |          10 | µA      |
| Channel                               |          | D,P,L                                      | 1           |         -20 |          20 |         |
| Undervoltage Lockout                  | V DDxUV+ |                                            | 1,2         |             |        1.75 | V       |
| Positive VDDX Threshold               |          |                                            | 3           |             |        1.71 |         |
| Undervoltage Lockout                  |          | D,P,L                                      | 1           |             |        1.75 |         |
| Undervoltage Lockout                  | V        | DDxUV-                                     | 1,2,3       |        1.35 |             | V       |
| Negative VDDX Threshold               |          | D,P,L                                      | 1           |        1.35 |             |         |
| Undervoltage Lockout                  | V DDxUVH |                                            | 1,2,3       |             |         0.4 | V       |
| VDDX Hysteresis                       |          | D,P,L                                      | 1           |             |         0.4 |         |

## TABLE IB NOTES:

1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted. VDDx nom = 3.3 V, VDDx max = 3.6V, VDDx min = 3V

- 2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation

4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.

5/ VIx refer to the input voltage.

- 6/ IOx refer to the output current of a given channel (A, B, C, or D).
- 7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).
- 8/ 150 Mbps is the highest data rate that can be guaranteed, although higher data rates are possible.

9/ VEx refers to VE1 and VE2

| Parameter See notes at end of table              | Symbol                    | Conditions 1/ Unless otherwise specified   | Sub-Group                 | Limit Min                 | Limit Max                 | Units                     |
|--------------------------------------------------|---------------------------|--------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS                        | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                  | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate 8/                                     | DR                        | Within PWDLimit                            | 9,10,11                   |                           | 150                       | Mbps                      |
|                                                  | DR                        | D,P,L                                      | 9                         |                           | 150                       | Mbps                      |
| Propagation Delay                                | t PHL , t PLH             | 50% input to 50% output                    | 9                         | 4.7                       | 14                        | ns                        |
|                                                  | t PHL , t PLH             | 50% input to 50% output                    | 10                        | 4.7                       | 14                        | ns                        |
|                                                  | t PHL , t PLH             | 50% input to 50% output                    | 11                        | 4                         | 14                        | ns                        |
|                                                  | t PHL , t PLH             | D,P,L                                      | 9                         | 4.7                       | 14                        | ns                        |
| Pulse Width Distortion                           | PWD                       | &#124;t PLH - t PHL &#124;                 | 9,10,11                   |                           | 3                         | ns                        |
| Pulse Width Distortion                           | PWD                       | D,P,L                                      | 9                         |                           | 3                         | ns                        |
| Pulse Width                                      | PW                        | Within PWDlimit                            | 9,10,11                   | 6.6                       |                           | ns                        |
| Pulse Width                                      | PW                        | D,P,L                                      | 9                         | 6.6                       |                           | ns                        |
| Propagation Delay Skew 3/, 4/                    | t PSK                     |                                            | 9,10,11                   |                           | 6.8                       | ns                        |
| Pulse Width Distortion Change vs. Temperature 3/ | ΔPWD                      |                                            | 10,11                     | -25                       | 25                        | ps/°C                     |
| Channel Matching                                 | t PSKCD                   |                                            | 9,10,11                   |                           | 3                         | ns                        |
| Codirection                                      | t PSKCD                   | D,P,L                                      | 9                         |                           | 3                         | ns                        |
| Channel Matching                                 | t PSKOD                   |                                            | 9,10,11                   |                           | 3                         | ns                        |
| Opposing-Direction                               | t PSKOD                   | D,P,L                                      | 9                         |                           | 3                         | ns                        |

## ADuM141ES

| Parameter See notes at end of table          | Symbol   | Conditions 1/ Unless otherwise specified   | Sub-Group       | Limit Min   | Limit Max   | Units   |
|----------------------------------------------|----------|--------------------------------------------|-----------------|-------------|-------------|---------|
| Output Rise/Fall Time 2/,                    | t R /t F | 10% to 90%                                 | 9               |             | 4           | ns      |
| 3/                                           |          |                                            | 10              |             | 4.5         |         |
|                                              |          |                                            | 11              |             | 3.5         |         |
| SUPPLY CURRENT                               |          |                                            |                 |             |             |         |
| Dynamic Supply Current                       | I DD1(D) | F = 1MBPS                                  | 4, 5, 6         |             | 10          | mA      |
|                                              |          | D,P,L                                      | 4               |             | 10          |         |
|                                              |          | F = 25MBPS                                 | 4, 5, 6         |             | 10.4        |         |
|                                              |          | D,P,L                                      | 4               |             | 10.4        |         |
|                                              |          | F = 100MBPS                                | 4, 5, 6         |             | 14.5        |         |
|                                              |          | D,P,L                                      | 4               |             | 14.5        |         |
|                                              |          | F = 150MBPS                                | 4, 5, 6         |             | 14.5        |         |
|                                              |          | D,P,L                                      | 4               |             |             |         |
|                                              |          |                                            |                 |             | 14.5        |         |
|                                              | I DD2(D) | F = 1MBPS                                  | 4,5,6           |             | 6.55        |         |
|                                              |          | D,P,L                                      | 4               |             | 6.55        |         |
|                                              |          | = 25MBPS                                   | 4,5,6           |             | 7.7         |         |
|                                              |          | F D,P,L                                    | 4               |             |             |         |
|                                              |          |                                            |                 |             | 7.7         |         |
|                                              |          | F = 100MBPS D,P,L F                        | 4,5,6 4 4, 5, 6 |             | 11.5 11.5   |         |
|                                              |          | = 150MBPS D,P,L                            | 4               |             | 13 13       |         |
| Quiescent Supply Current                     | I DD1(Q) | V Ix = 1 5/                                | 1,2,3           |             | 2.32        | mA      |
|                                              |          | D,P,L                                      | 1               |             | 2.32        |         |
|                                              |          | V Ix = 0 5/                                | 1,2,3           |             | 16.6        |         |
|                                              |          | D,P,L                                      |                 |             | 16.6        |         |
| Quiescent Supply                             |          |                                            | 1               |             | 2.47        | mA      |
|                                              | I DD2(Q) | V Ix = 1 5/ D,P,L                          | 1,2,3 1         |             | 2.47        |         |
| Current                                      |          | V Ix = 0                                   |                 |             | 9.67        |         |
|                                              |          | 5/                                         | 1,2,3           |             |             |         |
|                                              |          | D,P,L                                      | 1               |             | 9.67        |         |
| DC CHARACTERISTICS                           |          |                                            |                 |             |             |         |
| Logic High Input Threshold                   | V IH     | 7/                                         | 1,2,3           | 0.7 V DDx   |             | V       |
|                                              |          | D,P,L                                      | 1               | 0.7 V DDx   |             |         |
| Logic Low Input Threshold                    | V IL     | 7/                                         | 1,2,3           |             | 0.3 V DDx   | V       |
|                                              |          | D,P,L                                      | 1               |             | 0.3 V DDx   |         |
| Logic High Output                            | V OH     | I Ox = -20 μA, V Ix = V IxH 5/, 6/,7/      | 1,2,3           | V DDx - 0.1 |             | V       |
| Voltages                                     |          | D,P,L                                      | 1               | V DDx - 0.1 |             |         |
|                                              |          | I Ox = -4 mA, VIx = V IxH 5/, 6/,7/        | 1,2,3           | V DDx - 0.4 |             |         |
|                                              |          | D,P,L                                      | 1               | V DDx - 0.4 |             |         |
| Logic Low Output Voltages                    | V OL     | I Ox = 20 μA, V Ix = V IxL 5/, 6/,7/       | 1,2,3           |             | 0.1         | V       |
|                                              |          | D,P,L                                      | 1               |             | 0.1         |         |
|                                              |          | I Ox = 4 mA, V Ix = V IxL 5/, 6/,7/        | 1,2,3           |             | 0.4         |         |
|                                              |          | D,P,L                                      | 1               |             | 0.4         |         |
| Input Current per Channel                    | I I      | V Ix = V DDx and V Ix = 0V 5/, 6/,7/       | 1,2,3           | -10         | +10         | µA      |
|                                              |          | D,P,L                                      | 1               | -10         | +10         |         |
| Enable Pull-Up Current                       | I PU     | V Ex = 0 V 9/                              | 1,2,3           | -10         |             | µA      |
|                                              |          | D,P,L                                      | 1               | -10         |             |         |
| Enable Pull-Down Current                     | I PD     | V Ex = V DDx 7/,9/                         | 1,2,3           |             | 15          | µA      |
|                                              |          | D,P,L                                      | 1               |             | 15          |         |
| Tristate Output Current per                  | I OZ     | 0 V ≤ V Ox ≤ V DDx 7/                      | 1,2,3           | -10         | 10          | µA      |
| Channel                                      |          | D,P,L                                      | 1               | -20         | 20          |         |
| Undervoltage Lockout Positive VDDX Threshold | V DDxUV+ |                                            | 1,2 3           |             | 1.75 1.71   | V       |
|                                              |          | D,P,L                                      | 1               |             | 1.75        |         |

## TABLE ID - ELECTRICAL PERFORMANCE CHARACTERISTICS -1.8V OPERATION

## ADuM141ES

| Parameter See notes at end of table   | Symbol   | Conditions 1/ Unless otherwise specified   | Sub-Group   |   Limit Min |   Limit Max | Units   |
|---------------------------------------|----------|--------------------------------------------|-------------|-------------|-------------|---------|
| Undervoltage Lockout                  | V DDxUV- |                                            | 1,2,3       |        1.35 |             | V       |
| Negative VDDX Threshold               |          | D,P,L                                      | 1           |        1.35 |             |         |
| Undervoltage Lockout                  | V DDxUVH |                                            | 1,2,3       |             |         0.4 | V       |
| VDDX Hysteresis                       |          | D,P,L                                      | 1           |             |         0.4 |         |

## TABLE IC NOTES:

- 1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted. VDDx nom = 2.5 V, VDDx max = 2.75V, VDDx min = 2.25V
- 2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.
- 3/ Parameter is not tested post irradiation
- 4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.
- 5/ VIx refer to the input voltage.
- 6/ IOx refer to the output current of a given channel (A, B, C, or D).
- 7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).
- 8/ 150 Mbps is the highest data rate that can be guaranteed, although higher data rates are possible

9/ VEx refers to VE1 and VE2

| Parameter See notes at end of table   | Symbol                    | Conditions 1/ Unless otherwise specified   |                           | Sub-Group Limit Min       | Limit Max                 | Units                     |
|---------------------------------------|---------------------------|--------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS             | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                  | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate 8/                          | DR                        | Within PWDLimit                            |                           | 9,10,11                   | 150                       | Mbps                      |
| Data Rate 8/                          |                           |                                            | D,P,L                     | 9                         | 150                       |                           |
| Propagation Delay                     | t PHL , t PLH             | 50% input to 50%                           | output                    | 9                         | 4.8 15                    | ns                        |
| Propagation Delay                     |                           |                                            |                           | 10                        | 5.8 15                    |                           |
| Propagation Delay                     |                           |                                            |                           | 11                        | 5.4 15                    |                           |
| Propagation Delay                     |                           |                                            | D,P,L                     | 9                         | 4.8 15                    |                           |
| Pulse Width Distortion                | PWD                       | &#124;t PLH - t PHL &#124;                 |                           | 9,10,11                   | 3                         | ns                        |
| Pulse Width Distortion                |                           |                                            | D,P,L                     | 9                         | 3                         |                           |
| Pulse Width                           | PW                        | Within PWDlimit                            |                           | 9,10,11                   | 6.6                       | ns                        |
|                                       |                           |                                            | D,P,L                     | 9                         | 6.6                       |                           |
| Propagation Delay Skew                | t PSK                     |                                            |                           | 9,10,11                   | 7.0                       | ns                        |
| 3/, 4/ Pulse Width Distortion         |                           |                                            |                           |                           |                           |                           |
| Change vs. Temperature 3/             | ΔPWD                      |                                            |                           | 10,11                     | -25 25                    | ps/°C                     |
| Channel Matching                      | t PSKCD                   |                                            |                           | 9,10,11                   | 3                         | ns                        |
| Codirection                           |                           |                                            | D,P,L                     | 9                         | 3                         |                           |
| Channel Matching                      | t PSKOD                   |                                            |                           | 9,10,11                   | 3                         | ns                        |
| Opposing-Direction                    |                           |                                            | D,P,L                     | 9                         | 3                         |                           |
| Output Rise/Fall Time 2/,             | t R /t F                  | 10% to 90%                                 |                           | 9                         | 4                         | ns                        |
| 3/                                    |                           |                                            |                           | 10                        | 4.5                       |                           |
|                                       |                           |                                            |                           | 11                        | 3.5                       |                           |
| SUPPLY CURRENT                        | SUPPLY CURRENT            | SUPPLY CURRENT                             | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            |
| Dynamic Supply Current                | I DD1(D)                  | F = 1MBPS                                  |                           | 4, 5, 6                   | 9.1                       | mA                        |
|                                       |                           |                                            | D,P,L                     | 4                         | 9.1                       |                           |
|                                       |                           | F = 25MBPS                                 |                           | 4, 5, 6                   | 10                        |                           |
|                                       |                           |                                            | D,P,L                     | 4                         | 10                        |                           |
|                                       |                           | F = 100MBPS                                |                           | 4, 5, 6                   | 14                        |                           |
|                                       |                           |                                            | D,P,L                     | 4                         | 14                        |                           |
|                                       |                           | F = 150MBPS                                |                           | 4, 5, 6                   | 14                        |                           |
|                                       |                           |                                            | D,P,L                     | 4                         | 14                        |                           |

## ADuM141ES

| Parameter See notes at end of table   | Symbol             | Conditions 1/ Unless otherwise specified   | Conditions 1/ Unless otherwise specified   | Sub-Group          | Limit Min               | Limit Max           | Units              |
|---------------------------------------|--------------------|--------------------------------------------|--------------------------------------------|--------------------|-------------------------|---------------------|--------------------|
|                                       | I DD2(D)           | F = 1MBPS                                  |                                            | 4, 5, 6            |                         | 6.45                |                    |
|                                       |                    |                                            | D,P,L                                      | 4                  |                         | 6.45                |                    |
|                                       |                    | F = 25MBPS                                 |                                            | 4, 5, 6            |                         | 7.5                 |                    |
|                                       |                    |                                            | D,P,L                                      | 4                  |                         | 7.5                 |                    |
|                                       |                    | F = 100MBPS                                |                                            | 4, 5, 6            |                         | 11.2                |                    |
|                                       |                    |                                            | D,P,L                                      | 4                  |                         | 11.2                |                    |
|                                       |                    | F = 150MBPS                                |                                            | 4, 5, 6            |                         | 13                  |                    |
|                                       |                    |                                            | D,P,L                                      | 4                  |                         | 13                  |                    |
| Quiescent Supply Current              | I DD1(Q)           | V Ix = 1 5/                                |                                            | 1,2,3              |                         | 2.28                | mA                 |
| Quiescent Supply Current              |                    |                                            | D,P,L                                      | 1                  |                         | 2.28                | mA                 |
| Quiescent Supply Current              |                    | V Ix = 0 5/                                |                                            | 1,2,3              |                         | 16.5                | mA                 |
| Quiescent Supply Current              |                    |                                            | D,P,L                                      | 1                  |                         | 16.5                | mA                 |
| Quiescent Supply                      | I DD2(Q)           | V Ix = 1 5/                                |                                            | 1,2,3              |                         | 2.45                | mA                 |
| Current                               |                    |                                            | D,P,L                                      | 1                  |                         | 2.45                | mA                 |
| Current                               |                    | V Ix = 0 5/                                |                                            | 1,2,3              |                         | 9.6                 | mA                 |
| Current                               |                    |                                            | D,P,L                                      | 1                  |                         | 9.6                 | mA                 |
| DC CHARACTERISTICS                    | DC CHARACTERISTICS | DC CHARACTERISTICS                         | DC CHARACTERISTICS                         | DC CHARACTERISTICS | DC CHARACTERISTICS      | DC CHARACTERISTICS  | DC CHARACTERISTICS |
| Logic High Input Threshold            | V IH               | 7/                                         |                                            | 1,2,3              | 0.7 V DDx               |                     | V                  |
|                                       |                    |                                            | D,P,L                                      | 1                  | 0.7 V DDx               |                     | V                  |
| Logic Low Input Threshold             | V IL               | 7/                                         | D,P,L                                      | 1,2,3 1            |                         | 0.3 V DDx 0.3 V DDx |                    |
| Logic High Output                     | V OH               |                                            | 5/, 6/,7/                                  | 1,2,3              | V DDx - 0.1             |                     | V                  |
| Voltages                              |                    | I Ox = -20 μA, V Ix =                      | V IxH                                      |                    |                         |                     | V                  |
| Voltages                              |                    |                                            | D,P,L                                      | 1                  | V DDx - 0.1             |                     | V                  |
| Voltages                              |                    | I Ox = -4 mA, VIx                          | = V IxH 5/, 6/,7/ D,P,L                    | 1,2,3 1            | V DDx - 0.4 V DDx - 0.4 |                     | V                  |
| Logic Low Output Voltages             | V OL               | I Ox = 20 μA, V Ix = V                     | IxL 5/, 6/,7/                              | 1,2,3              |                         | 0.1                 | V                  |
| Logic Low Output Voltages             |                    |                                            | D,P,L                                      | 1                  |                         | 0.1                 | V                  |
| Logic Low Output Voltages             |                    | I Ox = 4 mA, V Ix = V                      | IxL 5/, 6/,7/                              | 1,2,3              |                         | 0.4                 | V                  |
| Logic Low Output Voltages             |                    |                                            | D,P,L                                      | 1                  |                         | 0.4                 | V                  |
| Input Current per Channel             | I I                | V Ix = V DDx and V Ix                      | = 0V 5/, 6/,7/                             | 1,2,3              | -10                     | +10                 | µA                 |
|                                       |                    |                                            | D,P,L                                      | 1                  | -10                     | +10                 | µA                 |
| Enable Pull-Up Current                | I PU               | V Ex = 0 V 9/                              |                                            | 1,2,3              | -10                     |                     | µA                 |
|                                       |                    |                                            | D,P,L                                      | 1                  | -10                     |                     | µA                 |
| Enable Pull-Down Current              | I PD               | V Ex = V DDx 7/,9/                         |                                            | 1,2,3              |                         | 15                  | µA                 |
|                                       |                    |                                            | D,P,L                                      | 1                  |                         | 15                  | µA                 |
| Tristate Output Current per           | I OZ               | 0 V ≤ V Ox ≤ V DDx                         | 7/                                         | 1,2,3              | -10                     | 10                  | µA                 |
| Channel                               |                    |                                            | D,P,L                                      | 1                  | -20                     | 20                  | µA                 |
| Undervoltage Lockout                  | V DDxUV+           |                                            |                                            | 1,2                |                         | 1.75                | V                  |
| Positive VDDX Threshold               |                    |                                            |                                            | 3                  |                         | 1.71                | V                  |
|                                       |                    |                                            | D,P,L                                      | 1                  |                         | 1.75                | V                  |
| Undervoltage Lockout                  | V DDxUV-           |                                            |                                            | 1,2,3              | 1.35                    |                     | V                  |
| Negative VDDX Threshold               |                    |                                            | D,P,L                                      | 1 1,2,3            | 1.35                    |                     | V                  |
| Undervoltage Lockout VDDX Hysteresis  | V DDxUVH           |                                            | D,P,L                                      | 1                  |                         | 0.4 0.4             |                    |

- 7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).

8/ 150 Mbps is the highest data rate that can be guaranteed, although higher data rates are possible 9/ VEx refers to VE1 and VE2

## ADuM141ES

## ADuM141ES

## TABLE IE - ELECTRICAL PERFORMANCE CHARACTERISTICS - MIXED 5V / 1.8V OPERATION

| Parameter See notes at end of table   | Symbol                        | Conditions 1/9/ Unless otherwise specified   |                               | Sub-Group                     | Limit Min                     | Limit                         | Units                         |
|---------------------------------------|-------------------------------|----------------------------------------------|-------------------------------|-------------------------------|-------------------------------|-------------------------------|-------------------------------|
| Max SWITCHING CHARACTERISTICS         | Max SWITCHING CHARACTERISTICS | Max SWITCHING CHARACTERISTICS                | Max SWITCHING CHARACTERISTICS | Max SWITCHING CHARACTERISTICS | Max SWITCHING CHARACTERISTICS | Max SWITCHING CHARACTERISTICS | Max SWITCHING CHARACTERISTICS |
| Data Rate 8/                          | DR                            | Within PWDLimit                              |                               | 9,10,11                       |                               | 150                           | Mbps                          |
|                                       |                               |                                              | D,P,L                         | 9                             |                               | 150                           |                               |
| Propagation Delay                     | t PHL , t PLH                 | 50% input to 50%                             | output                        | 9                             | 4.8                           | 13                            | ns                            |
|                                       |                               |                                              |                               | 10                            | 4.8                           | 14.5                          |                               |
|                                       |                               |                                              |                               | 11                            | 4.2                           | 13                            |                               |
|                                       |                               |                                              | D,P,L                         | 9                             | 4.8                           | 13                            |                               |
| Pulse Width Distortion                | PWD                           | &#124;t PLH - t PHL &#124;                   |                               | 9,10,11                       |                               | 3                             | ns                            |
|                                       |                               |                                              | D,P,L                         | 9                             |                               | 3                             |                               |
| Pulse Width                           | PW                            | Within PWDlimit                              |                               | 9,10,11                       | 6.6                           |                               | ns                            |
|                                       |                               |                                              | D,P,L                         | 9                             | 6.6                           |                               |                               |
| Propagation Delay Skew 3/, 4/         | t PSK                         |                                              |                               | 9,10,11                       |                               | 7.0                           | ns                            |
| Pulse Width Distortion 3/             |                               |                                              |                               |                               |                               |                               |                               |
|                                       | ΔPWD                          |                                              |                               | 10,11                         | -25                           | 25                            | ps/°C                         |
| Change vs. Temperature                |                               |                                              |                               |                               |                               |                               |                               |
| Channel Matching                      | t PSKCD                       |                                              |                               | 9,10,11                       |                               | 3                             | ns                            |
| Codirection                           |                               |                                              | D,P,L                         | 9                             |                               | 3                             |                               |
| Channel Matching                      | t PSKOD                       |                                              |                               | 9                             |                               | 4                             | ns                            |
|                                       |                               |                                              |                               | 10                            |                               | 4.3                           |                               |
|                                       |                               |                                              |                               | 11                            |                               | 3.8                           |                               |
| Opposing-Direction                    |                               |                                              | D,P,L                         | 9                             |                               | 4                             |                               |
| Output Rise/Fall Time 2/,             | t R /t F                      | 10% to 90%                                   |                               | 9                             |                               | 4                             | ns                            |
| 3/                                    |                               |                                              |                               | 10                            |                               | 4.5                           |                               |
|                                       |                               |                                              |                               | 11                            |                               | 3.5                           |                               |
| SUPPLY CURRENT                        | SUPPLY CURRENT                | SUPPLY CURRENT                               | SUPPLY CURRENT                | SUPPLY CURRENT                | SUPPLY CURRENT                | SUPPLY CURRENT                | SUPPLY CURRENT                |
| Dynamic Supply Current                | I DD1(D)                      | F = 1MBPS                                    |                               | 4, 5, 6                       |                               | 10.3                          | mA                            |
|                                       |                               |                                              | D,P,L                         | 4                             |                               | 10.3                          |                               |
|                                       |                               | F = 25MBPS                                   |                               | 4, 5, 6                       |                               | 10.9                          |                               |
|                                       |                               |                                              | D,P,L                         | 4                             |                               | 10.9                          |                               |
|                                       |                               | F = 100MBPS                                  |                               | 4, 5, 6                       |                               | 15.9                          |                               |
|                                       |                               |                                              | D,P,L                         | 4                             |                               | 15.9                          |                               |
|                                       |                               | F = 150MBPS                                  |                               | 4, 5, 6                       |                               | 17                            |                               |
|                                       |                               |                                              | D,P,L                         | 4                             |                               | 17                            |                               |
|                                       | I DD2(D)                      | F = 1MBPS                                    |                               | 4, 5, 6                       |                               | 6.45                          |                               |
|                                       |                               |                                              | D,P,L                         | 4                             |                               | 6.45                          |                               |
|                                       |                               | F = 25MBPS                                   |                               | 4, 5, 6                       |                               | 7.5                           |                               |
|                                       |                               |                                              | D,P,L                         | 4                             |                               | 7.5                           |                               |
|                                       |                               | F =                                          |                               | 4, 5, 6                       |                               | 11.2                          |                               |
|                                       |                               | 100MBPS                                      | D,P,L                         | 4                             |                               | 11.2                          |                               |
|                                       |                               | F = 150MBPS                                  |                               | 4, 5, 6                       |                               | 13                            |                               |
|                                       |                               |                                              |                               | 4                             |                               | 13                            |                               |
|                                       |                               |                                              | D,P,L                         |                               |                               |                               |                               |
| Quiescent Supply Current              | I DD1(Q)                      | V Ix = 1 5/                                  |                               | 1,2,3                         |                               | 2.46                          | mA                            |
|                                       |                               |                                              | D,P,L                         | 1                             |                               | 2.46                          |                               |
|                                       |                               | V Ix = 0 5/                                  |                               | 1,2,3                         |                               | 17                            |                               |
|                                       |                               |                                              | D,P,L                         | 1                             |                               | 17                            |                               |
| Quiescent Supply                      | I DD2(Q)                      | V Ix = 1 5/                                  |                               | 1,2,3                         |                               | 2.45                          | mA                            |
| Current                               |                               |                                              | D,P,L                         | 1                             |                               | 2.45                          |                               |
|                                       |                               | V Ix = 0 5/                                  |                               | 1,2,3                         |                               | 9.6                           |                               |
| DC CHARACTERISTICS                    |                               |                                              | D,P,L                         | 1                             |                               | 9.6                           |                               |

## ADuM141ES

| Parameter See notes at end of table          | Symbol   | Conditions 1/9/ Unless otherwise specified   | Sub-Group   | Limit Min   | Limit Max   | Units   |
|----------------------------------------------|----------|----------------------------------------------|-------------|-------------|-------------|---------|
| Logic High Input Threshold                   | V IH     | 7/                                           | 1,2,3       | 0.7 V DDx   |             | V       |
|                                              |          | D,P,L                                        | 1           | 0.7 V DDx   |             | V       |
| Logic Low Input Threshold                    | V IL     | 7/                                           | 1,2,3       |             | 0.3 V DDx   | V       |
| Logic Low Input Threshold                    |          | D,P,L                                        | 1           |             | 0.3 V DDx   |         |
| Logic High Output Voltages                   | V OH     | I Ox = -20 μA, V Ix = V IxH 5/, 6/,7/        | 1,2,3       | V DDx - 0.1 |             | V       |
| Logic High Output Voltages                   |          | D,P,L                                        | 1           | V DDx - 0.1 |             |         |
| Logic High Output Voltages                   |          | I Ox = -4 mA, VIx = V IxH 5/, 6/,7/          | 1,2,3       | V DDx - 0.4 |             |         |
| Logic High Output Voltages                   |          | D,P,L                                        | 1           | V DDx - 0.4 |             |         |
| Logic Low Output Voltages                    | V OL     | I Ox = 20 μA, V Ix = V IxL 5/, 6/,7/         | 1,2,3       |             | 0.1         | V       |
| Logic Low Output Voltages                    |          | D,P,L                                        | 1           |             | 0.1         |         |
| Logic Low Output Voltages                    |          | I Ox = 4 mA, V Ix = V IxL 5/, 6/,7/          | 1,2,3       |             | 0.4         |         |
| Logic Low Output Voltages                    |          | D,P,L                                        | 1           |             | 0.4         |         |
| Input Current per Channel                    | I I      | V Ix = V DDx and V Ix = 0V 5/, 6/,7/         | 1,2,3       | -10         | +10         | µA      |
| Input Current per Channel                    |          | D,P,L                                        | 1           | -10         | +10         |         |
| Enable Pull-Up Current                       | I PU     | V Ex = 0 V 10/                               | 1,2,3       | -10         |             | µA      |
| Enable Pull-Up Current                       |          | D,P,L                                        | 1           | -10         |             |         |
| Enable Pull-Down Current                     | I PD     | V Ex = V DDx 7/, 10/                         | 1,2,3       |             | 15          | µA      |
| Enable Pull-Down Current                     |          | D,P,L                                        | 1           |             | 15          |         |
| Tristate Output Current per                  | I OZ     | 0 V ≤ V Ox ≤ V DDx 7/                        | 1,2,3       | -10         | 10          | µA      |
| Channel                                      |          | D,P,L                                        | 1           | -20         | 20          |         |
| Undervoltage Lockout Positive VDDX Threshold | V DDxUV+ |                                              | 1,2         |             | 1.75        | V       |
| Undervoltage Lockout Positive VDDX Threshold |          |                                              | 3           |             | 1.71        |         |
| Undervoltage Lockout Positive VDDX Threshold |          | D,P,L                                        | 1           |             | 1.75        |         |
| Undervoltage Lockout                         | V DDxUV- |                                              | 1,2,3       | 1.35        |             | V       |
| Negative VDDX Threshold                      |          | D,P,L                                        | 1           | 1.35        |             |         |
| Undervoltage Lockout                         | V DDxUVH |                                              | 1,2,3       |             | 0.4         | V       |
| VDDX Hysteresis                              |          | D,P,L                                        | 1           |             | 0.4         |         |

## TABLE IE NOTES:

1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted VDD1 nom = 5 V, VDD1 max = 5.5V, VDD1 min = 4.5V and VDD2 nom = 1.8 V, VDD2 max = 1.9V, VDD2 min = 1.7V.

2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation

4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.

5/ VIx refer to the input voltage.

6/ IOx refer to the output current of a given channel (A, B, C, or D).

7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).

8/ 150 Mbps is the highest data rate that can be guaranteed, although higher data rates are possible

9/ Do not exceed Do not exceed VDD1nom where VDD1 = 5V at T = -55°C when all four channels are running in parallel.  Device instability may occur.

10/ VEx refers to VE1 and VE2

## ADuM141ES

## TABLE IF - ELECTRICAL PERFORMANCE CHARACTERISTICS - MIXED 1.8V / 5V OPERATION

| Parameter See notes at end of table   | Symbol                    | Conditions 1/9/ Unless otherwise specified   | Sub-Group                 | Limit Min                 | Limit Max                 | Units                     |
|---------------------------------------|---------------------------|----------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS             | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                    | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate 8/                          | DR                        | Within PWDLimit                              | 9,10,11                   |                           | 150                       | Mbps                      |
|                                       |                           | D,P,L                                        | 9                         |                           | 150                       |                           |
| Propagation Delay                     | t PHL , t PLH             | 50% input to 50% output                      | 9,10                      | 4.8                       | 14.5                      | ns                        |
|                                       |                           |                                              | 11                        | 4.5                       | 14.5                      |                           |
|                                       |                           | D,P,L                                        | 9                         | 4.8                       | 14.5                      |                           |
| Pulse Width Distortion                | PWD                       | &#124;t PLH - t PHL &#124;                   | 9,10,11                   |                           | 3                         | ns                        |
|                                       |                           | D,P,L                                        | 9                         |                           | 3                         |                           |
| Pulse Width                           | PW                        | Within PWDlimit                              | 9,10,11                   | 6.6                       |                           | ns                        |
|                                       |                           | D,P,L                                        | 9                         | 6.6                       |                           |                           |
| Propagation Delay Skew 3/, 4/         | t PSK                     |                                              | 9,10,11                   |                           | 7.0                       | ns                        |
| Pulse Width Distortion 3/             | ΔPWD                      |                                              | 10,11                     | -25                       | 25                        | ps/°C                     |
| Change vs. Temperature                |                           |                                              | 9,10,11                   |                           | 3                         | ns                        |
| Channel Matching Codirection          | t PSKCD                   | D,P,L                                        | 9                         |                           | 3                         |                           |
|                                       |                           |                                              | 9                         |                           | 4                         | ns                        |
| Channel Matching                      | t PSKOD                   |                                              |                           |                           | 4.5                       |                           |
|                                       |                           |                                              | 10                        |                           |                           |                           |
| Opposing-Direction                    |                           | D,P,L                                        | 11 9                      |                           | 4 4                       |                           |
| Output Rise/Fall Time 2/,             | t R /t F                  | 10% to 90%                                   | 9                         |                           | 4                         | ns                        |
| 3/                                    |                           |                                              | 10                        |                           | 4.5                       |                           |
|                                       |                           |                                              | 11                        |                           | 3.5                       |                           |
| SUPPLY CURRENT                        | SUPPLY CURRENT            | SUPPLY CURRENT                               | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            |
| Dynamic Supply Current                | I DD1(D)                  | F = 1MBPS                                    | 4, 5, 6                   |                           | 9.1                       | mA                        |
|                                       |                           | D,P,L                                        | 4                         |                           | 9.1                       |                           |
|                                       |                           | F = 25MBPS                                   | 4, 5, 6                   |                           | 10                        |                           |
|                                       |                           | D,P,L                                        | 4                         |                           | 10                        |                           |
|                                       |                           | F = 100MBPS                                  | 4, 5, 6                   |                           | 14                        |                           |
|                                       |                           | D,P,L                                        | 4                         |                           | 14                        |                           |
|                                       |                           | F = 150MBPS                                  | 4, 5, 6                   |                           | 14                        |                           |
|                                       |                           | D,P,L                                        | 4                         |                           | 14                        |                           |
|                                       | I DD2(D)                  | F = 1MBPS                                    | 4,5,6                     |                           | 6.85 6.85                 |                           |
|                                       |                           | D,P,L                                        | 4                         |                           |                           |                           |
|                                       |                           | F = 25MBPS                                   | 4, 5, 6                   |                           | 8.5                       |                           |
|                                       |                           | D,P,L                                        | 4                         |                           | 8.5                       |                           |
|                                       |                           | F = 100MBPS D,P,L                            | 4                         |                           | 14                        |                           |
|                                       |                           | F = 150MBPS                                  | 4, 5, 6                   |                           | 17                        |                           |
|                                       |                           | D,P,L                                        | 4                         |                           | 17                        |                           |
| Quiescent Supply Current              | I DD1(Q)                  | V Ix = 1 5/                                  | 1,2,3                     |                           | 2.28                      | mA                        |
|                                       |                           | D,P,L                                        | 1                         |                           | 2.28                      |                           |
|                                       |                           | V Ix = 0 5/                                  | 1,2,3                     |                           | 16.5                      |                           |
|                                       |                           | D,P,L                                        | 1                         |                           | 16.5                      |                           |
|                                       | I DD2(Q)                  | V Ix = 1 5/                                  | 1,2,3 1                   |                           | 2.8                       |                           |
| Quiescent Supply Current              |                           | D,P,L V Ix = 0 5/                            | 1,2,3                     |                           | 2.8 10                    | mA                        |
|                                       |                           |                                              |                           |                           | 10                        |                           |
|                                       |                           | D,P,L                                        | 1                         |                           |                           |                           |
| DC CHARACTERISTICS                    | DC CHARACTERISTICS        | DC CHARACTERISTICS                           | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        |

## ADuM141ES

| Parameter See notes at end of table          | Symbol   | Conditions 1/9/ Unless otherwise specified   | Sub-Group   | Limit Min   | Limit Max   | Units   |
|----------------------------------------------|----------|----------------------------------------------|-------------|-------------|-------------|---------|
|                                              |          | D,P,L                                        | 1           | 0.7 V DDx   |             |         |
| Logic Low Input Threshold                    | V IL     | 7/                                           | 1,2,3       |             | 0.3 V DDx   | V       |
| Logic Low Input Threshold                    |          | D,P,L                                        | 1           |             | 0.3 V DDx   |         |
| Logic High Output Voltages                   | V OH     | I Ox = -20 μA, V Ix = V IxH 5/, 6/,7/        | 1,2,3       | V DDx - 0.1 |             | V       |
| Logic High Output Voltages                   |          | D,P,L                                        | 1           | V DDx - 0.1 |             |         |
| Logic High Output Voltages                   |          | I Ox = -4 mA, VIx = V IxH 5/, 6/,7/          | 1,2,3       | V DDx - 0.4 |             |         |
| Logic High Output Voltages                   |          | D,P,L                                        | 1           | V DDx - 0.4 |             |         |
| Logic Low Output Voltages                    | V OL     | I Ox = 20 μA, V Ix = V IxL 5/, 6/,7/         | 1,2,3       |             | 0.1         | V       |
| Logic Low Output Voltages                    |          | D,P,L                                        | 1           |             | 0.1         |         |
| Logic Low Output Voltages                    |          | I Ox = 4 mA, V Ix = V IxL 5/, 6/,7/          | 1,2,3       |             | 0.4         |         |
| Logic Low Output Voltages                    |          | D,P,L                                        | 1           |             | 0.4         |         |
| Input Current per Channel                    | I I      | V Ix = V DDx and V Ix = 0V 5/, 6/,7/         | 1,2,3       | -10         | +10         | µA      |
| Input Current per Channel                    |          | D,P,L                                        | 1           | -10         | +10         |         |
| Enable Pull-Up Current                       | I PU     | V Ex = 0 V 10/                               | 1,2,3       | -10         |             | µA      |
| Enable Pull-Up Current                       |          | D,P,L                                        | 1           | -10         |             |         |
| Enable Pull-Down Current                     | I PD     | V Ex = V DDx 7/,10/                          | 1,2,3       |             | 15          | µA      |
| Enable Pull-Down Current                     |          | D,P,L                                        | 1           |             | 15          |         |
| Tristate Output Current per                  | I OZ     | 0 V ≤ V Ox ≤ V DDx 7/                        | 1,2,3       | -10         | 10          | µA      |
| Channel                                      |          | D,P,L                                        | 1           | -20         | 20          |         |
| Undervoltage Lockout Positive VDDX Threshold | V DDxUV+ |                                              | 1,2         |             | 1.75        | V       |
| Undervoltage Lockout Positive VDDX Threshold |          |                                              | 3           |             | 1.71        |         |
| Undervoltage Lockout Positive VDDX Threshold |          | D,P,L                                        | 1           |             | 1.75        |         |
| Undervoltage Lockout                         | V DDxUV- |                                              | 1,2,3       | 1.35        |             | V       |
| Negative VDDX Threshold                      |          | D,P,L                                        | 1           | 1.35        |             |         |
| Undervoltage Lockout                         | V DDxUVH |                                              | 1,2,3       |             | 0.4         | V       |
| VDDX Hysteresis                              |          | D,P,L                                        | 1           |             | 0.4         |         |

## TABLE IF NOTES:

1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted VDD1 nom = 1.8 V, VDD1 max = 1.9V, VDD1 min = 1.7V and VDD2 nom = 5 V, VDD2 max = 5.5 V, VDD2 min = 4.5V .

2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation

4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.

5/ VIx refer to the voltage input signals of a given channel (A, B, C, or D).

6/ IOx refer to the output current of a given channel (A, B, C, or D).

7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).

8/ 150 Mbps is the highest data rate that can be guaranteed, although higher data rates are possible

9/ Do not exceed Do not exceed VDD2nom where VDD2 = 5V at T = -55°C when all four channels are running in parallel.  Device instability may occur.

10/ VEx refers to VE1 and VE2

## ADuM141ES

## TABLE IG - ELECTRICAL PERFORMANCE CHARACTERISTICS- INSULATION AND SAFETY-RELATED SPECIFICATIONS 1/,2/

| Parameter                              | Symbol          | Value   | Unit   | Conditions                                           |
|----------------------------------------|-----------------|---------|--------|------------------------------------------------------|
| Rated Dielectric Insulation Voltage 3/ | Iso             | 400     | Vrms   | 1-minute duration                                    |
| Resistance (Input-to-Output) 4/        | R I-O           | 10 9    | Ω      |                                                      |
| Maximum Working Insulation Voltage 5/  | CWV             | 393     | Vpeak  | 1ppm for 30-year minimum lifetime 6/                 |
| Common-Mode Transient Immunity 7/      | &#124;CMH&#124; | 70      | KV/µs  | VIx = VDDx,VCM = 1000 V, transient magnitude = 800 V |
| Common-Mode Transient Immunity 7/      | &#124;CML&#124; | 50      | KV/µs  | VIx = 0 V, VCM=1000 V, transient magnitude = 800 V   |

## TABLE IG NOTES:

- 1/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.
- 2/ Parameter is not tested post irradiation
- 3/ Operation at this high voltage can lead to shortened isolation life.  Continuous working voltage exceeding the rated value may cause permanent damage.
- 4/ The device is considered a 2-terminal device: Pin 1 through Pin 8 are shorted together and Pin 9 through Pin 16 are shorted together.
- 5/ Refers to continuous voltage magnitude imposed across the isolation barrier. Long term operation at this high voltage can lead to shortened isolation life. Continuous working voltage exceeding the rated value may cause permanent damage.
- 6/ For Bipolar AC Voltage environment which is worst case condition for i Coupler products.
- 7/ |CMH| is the maximum common-mode voltage slew rate that can be sustained while maintaining the voltage output (VO) &gt; 0.8 VDDx. |CML| is the maximum common-mode voltage slew rate that can be sustained while maintaining VO &gt; 0.8 V. The common-mode voltage slew rates apply to both rising and falling common-mode voltage edges.
- 1/  L means low, H means high, X means don't care, NC means not connected, and Z means high impedance.
- 2/  VIX and VOX refer to the input and output signals of a given channel (A, B, C, or D). Vex refers to the output enable signal on the same side as the VOX outputs. VDDI and VDDO refer to the supply voltages on the input and output sides of the given channel, respectively.
- 3/  Input pins (VIX, VE1 and VE2) on the same side as an unpowered supply must be in a low state  to avoid powering the device through its ESD protection circuitry.

Figure 2 - Truth Table (Positive Logic)

| V Ix Input 1/2   | V Ex Input 1/2   | V DDI State 2/   | V DDO State 2/   | Default High (E1),V Ox Output 1/2/   | Description      |
|------------------|------------------|------------------|------------------|--------------------------------------|------------------|
| L                | Hor NC           | Powered          | Powered          | L                                    | Normal operation |
| H                | Hor NC           | Powered          | Powered          | H                                    | Normal operation |
| X                | L                | Powered          | Powered          | Z                                    | Outputs disabled |
| L                | Hor NC           | Unpowered        | Powered          | H                                    | Fail-safe output |
| X 3              | L 3              | Unpowered        | Powered          | Z                                    | Outputs disabled |
| X 3              | X 3              | Powered          | Unpowered        | Indeterminate                        |                  |

<!-- image -->

Figure 3 - Propagation Delay Parameters

## TABLE IIA - ELECTRICAL TEST REQUIREMENTS:

| Table IIA                               | Table IIA                                               |
|-----------------------------------------|---------------------------------------------------------|
| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535, Table III) |
| Interim Electrical Parameters           | 1                                                       |
| Final Electrical Parameters             | 1, 2, 3, 4, 5, 6, 9, 10, 11 1/ 2/                       |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6, 9, 10, 11                             |
| Group C end-point electrical parameters | 1, 2, 3, 4, 5, 6, 9, 10, 11 2/                          |
| Group Dend-point electrical parameters  | 1, 2, 3, 4, 5, 6, 9, 10, 11                             |
| Group E end-point electrical parameters | 1, 4, 9 3/                                              |

TABLE IIB - LIFE TEST/BURN-IN DELTA LIMITS

| Table IIB                                              | Table IIB   | Table IIB   | Table IIB   |
|--------------------------------------------------------|-------------|-------------|-------------|
| Parameter                                              | Symbol      | Delta       | Units       |
| IDD1 Dynamic Supply Current VDD1=VDD2=5V, 150MBPS      | I DD1(D)    | 0.7         | mA          |
| IDD2 Dynamic Supply Current VDD1=VDD2=5V, 150MBPS      | I DD2(D)    | 0.7         | mA          |
| IDD1 Quiescent Supply Current VDD, VDD1=VDD2=5V Vi = 1 | I DD1(Q)    | 0.05        | mA          |
| IDD2 Quiescent Supply Current VDD, VDD1=VDD2=5V Vi = 1 | I DD2(Q)    | 0.05        | mA          |
| IDD1 Quiescent Supply Current VDD, VDD1=VDD2=5V Vi = 0 | I DD1(Q)    | 0.08        | mA          |
| IDD2 Quiescent Supply Current VDD, VDD1=VDD2=5V Vi = 0 | I DD2(Q)    | 0.08        | mA          |
| Input Current, VDD1=VDD2=5V, V Ix = 0V                 | I I         | 0.2         | µA          |
| Input Current, VDD1=VDD2=5V, V Ix = 5V                 | I I         | 0.2         | µA          |
| Logic High Output Voltages VDD1=VDD2=5V, Iox = 20uA    | VOH         | 2           | mV          |
| Logic Low Output Voltages VDD1=VDD2=5V, Iox = 20uA     | VOL         | 2           | mV          |

## 5.0 Burn-In Life Test, and Radiation

## 5.1. Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition D of MIL -STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 5.2. Radiation Exposure Circuit

- 5.2.1.  The radiation exposure circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing and acquiring activity upon request. Total dose irradiation testing shall be performed in accordance with MIL-STD-883 method 1019, condition A.

## 6.0 MIL-PRF-38535 QMLV Exceptions

- 6.1. Wafer Fabrication

Wafer fabrication occurs at MIL-PRF-38535 QML Class Q certified facility.

## 6.2. Wafer Lot Acceptance (WLA)

Full  WLA  per  MIL-STD-883  TM  5007  is  not  available  for  this  product.  SEM  inspection  per  MIL-STD-883 TM2018  is  not  applicable  to  the  ADuM141E1S.  The  wafer  fabrication  process  is  manufactured  using planarized metallization.

- 6.3.  Device contains bi-metallic wire bonds (Gold bond wires on Aluminum die pads).

## 7.0 Application Notes

## OVERVIEW

The ADuM141E1S use a high frequency carrier to transmit data across the isolation barrier using iCoupler chip scale transformer  coils  separated  by  layers  of  polyimide  isolation.  Using  an  on/off  keying  (OOK)  technique  and  the differential  architecture  shown  in  Figure  4,  the  ADuM141E1S  have  very  low  propagation  delay  and  high  speed. Internal regulators and input/output design techniques allow logic and supply voltages over a wide range from 1.7 V to 5.5 V, offering voltage translation of 1.8 V, 2.5 V, 3.3 V, and 5 V logic. The architecture is designed for high commonmode transient immunity and high immunity to electrical noise and magnetic interference. Radiated emissions are minimized with a spread spectrum OOK carrier and other techniques.

For  the  ADuM141E1S that  have  a  high  fail-safe  output  state,  Figure  4  illustrates  the  conditions  where  the  carrier waveform is off when the input state is high. When the input side is off or not operating, the fail-safe output state of high (ADuM141E1S) sets the output to high.

Figure 4 - Operational Block Diagram of a Single Channel with a High Fail-Safe Output State

<!-- image -->

ASD0016568C | Page 18 of 21

## PC BOARD LAYOUT

The  ADuM141E1S  digital  isolator  requires  no  external  interface  circuitry  for  the  logic  interfaces.  Power  supply bypassing is strongly recommended at the input and output supply pins (see Figure 5).Bypass capacitors are most conveniently  connected  between  Pin  1  and  Pin  2  for  VDD1  and  between  Pin  15  and  Pin  16  for  VDD2.  The recommended bypass capaci tor value is between 0.01 μF and 0.1 μF. The total lead length between both ends of the capacitor and the input power supply pin must not exceed 10 mm. Bypassing between Pin 1 and Pin 8 and between Pin 9 and Pin 16 must also be considered, unless the ground pair on each package side is connected close to the package.

Figure 5 - Recommended Printed Circuit Board Layout

<!-- image -->

In  applications  involving  high  common-mode  transients,  ensure  that  board  coupling  across  the  isolation  barrier  is minimized. Furthermore, design the board layout such that any coupling that does occur equally affects all pins on a given component side. Failure to ensure this can cause voltage differentials between pins exceeding the Absolute Maximum Ratings of the device, thereby leading to latch-up or permanent damage. See the AN-1109 Application Note for board layout guidelines.

## PROPAGATION DELAY-RELATED PARAMETERS

Propagation delay is a parameter that describes the time it takes a logic signal to propagate through a component. The input-to-output propagation delay time for a high-to-low transition may differ from the propagation delay time of a low-to-high transition. See Figure 3.

Pulse width distortion is the maximum difference between these two propagation delay values and an indication of how accurately the timing of the input signal is preserved.

Channel-to-channel matching refers to the maximum amount the propagation delay differs between channels within a single  ADuM141E1S  component.    Propagation  delay  skew  refers  to  the  maximum  amount  the  propagation  delay differs between multiple ADuM141E1S components operating under the same conditions.

## ADuM141ES

## 8.0 Package Outline Dimensions

Figure 6. 16-Lead Bottom Brazed Flatpack

<!-- image -->

Dimensions shown in inches and (millimeters)

## 9.0 ORDERING GUIDE

| Model          | Temperature Range   | Package Description             | Package Option   |
|----------------|---------------------|---------------------------------|------------------|
| ADuM141E1L703F | -55°C to +125°C     | 16 Lead Bottom Brazed Flat Pack | CDFP4-F16        |

## 10.0 Revision History

| Revision History   | Revision History                                                                                       | Revision History   |
|--------------------|--------------------------------------------------------------------------------------------------------|--------------------|
| Rev                | Description of Change                                                                                  | Date               |
| A                  | Initial Release                                                                                        | 8/30/18            |
| B                  | Correct page 1 block diagram error                                                                     | 10/26/18           |
| C                  | Update and move Maximum Working Voltage and CommonModeTransient Immunity from Section 4.3 to Table IG. | 7/20/20            |

<!-- image -->