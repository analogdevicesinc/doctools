<!-- lastmod 2025-11-04 -->
<!-- image -->

## 25 MBPS Quad-Channel Digital Isolator

ADuM7442S

## 1.0 Scope

This  specification  documents  the  detailed  requirements  for  space  qualified  products  manufactured  on Analog Devices, Inc.'s QML certified line per MIL-PRF-38535 Level V except as modified herein.

The manufacturing flow described in the STANDARD SPACE LEVEL PRODUCTS PROGRAM brochure is to be considered a part of this specification.  http://www.analog.com/aeroinfo

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/ADuM7442

## 2.0 Part Number

The complete part number(s) of this specification follows:

Specific Part Number ADuM7442R703F

Description

25 MBPS Quad-Channel Digital Isolator

## 3.0 Case Outline

The case outline(s) are as designated in MIL-STD-1835 and as follows:

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish    | Package style           |
|------------------|--------------------------|-------------|----------------|-------------------------|
| X                | CDFP4-F16                | 16-Lead     | Hot Solder Dip | Bottom Brazed Flat Pack |

Tel: 800.262.5643

## ADuM7442S

Figure 1 - Terminal Connections

| Package: X   | Package: X      | Package: X     | Package: X                                             |
|--------------|-----------------|----------------|--------------------------------------------------------|
| Pin Number   | Terminal Symbol | PinType        | Pin Description                                        |
| 1            | V DD1A          | Power          | Supply Voltage A for Isolator Side 1. 1/, 2/           |
| 2            | GND 1           | Power          | Ground 1. Ground reference for Isolator Side 1. 3/, 6/ |
| 3            | V IA            | Digital Input  | Logic Input A                                          |
| 4            | V IB            | Digital Input  | Logic Input B                                          |
| 5            | V OC            | Digital Output | Logic Output C                                         |
| 6            | V OD            | Digital Output | Logic OutputD                                          |
| 7            | V DD1B          | Power          | Supply Voltage B for Isolator Side 1. 1/, 2/           |
| 8            | GND 1           | Power          | Ground 1. Ground reference for Isolator Side 1. 3/ 6/  |
| 9            | GND 2           | Power          | Ground 2. Ground reference for Isolator Side 2. 4/     |
| 10           | V DD2B          | Power          | Supply Voltage B for Isolator Side 2. 2/, 5/           |
| 11           | V ID            | Digital Input  | Logic InputD                                           |
| 12           | V IC            | Digital Input  | Logic Input C                                          |
| 13           | V OB            | Digital Output | Logic Output B                                         |
| 14           | V OA            | Digital Output | Logic Output A                                         |
| 15           | GND 2           | Power          | Ground 2. Ground reference for Isolator Side 2. 4/     |
| 16           | V DD2A          | Power          | Supply Voltage A for Isolator Side 2. 2/, 5/           |
| Lid          |                 | Power          | Metal Lid electrically connected to ground. (GND 1 )   |

1/ Pin 1 must be connected externally to Pin 7.

2 / Connect a ceramic bypass capacitor of value 0.01 μF to 0.1 μF between V DD1A (Pin 1) and GND1 (Pin 2), between VDD1B (Pin 7) and GND1 (Pin 8), between VDD2B (Pin 10) and GND2 (Pin 9), and between VDD2A (Pin 16) and GND2 (Pin 15).

3/ Pin 2 and Pin 8 are internally connected, and connecting both to GND1 is recommended.

4/ Pin 9 and Pin 15 are internally connected, and connecting both to GND2 is recommended.

5/ Pin 10 must be connected externally to Pin 16.

6/ Internally connected to Metal Lid.

## 4.0 Specifications

| Supply voltage (V DD1, V DD2 ) ...........................................................            | -0.5V to 7.0V                                        |
|-------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Input voltage (V IA, V IB, V IC, V ID ) ........................................................      | -0.5V to V DDI + 0.5V 2/ 3/                          |
| Output voltage (V OA, V OB, V OC, V OD ) ................................................             | -0.5V to V DDO + 0.5V2/ 3/                           |
| Storage temperature range ..........................................................                  | -65 ° C to +150 ° C                                  |
| Output current per pin (I O1 , I O2 ) ......................................................          | -10mA to +10mA                                       |
| Junction temperature maximum (T J ) ............................................                      | +150 ° C                                             |
| Lead temperature (soldering, 60 seconds) ..................................                           | +300 ° C                                             |
| Thermal resistance, junction-to-case ( θ JC ) ...................................                     | 60 ° C/W 4/                                          |
| Thermal resistance, junction-to-ambient ( θ JA ) ..............................                       | 98 ° C/W 4/                                          |
| 4.2.Recommended Operating Conditions                                                                  | 4.2.Recommended Operating Conditions                 |
| Supply voltage (V DDI ) ....................................................................          | +3.3 V to +5.0 V                                     |
| Ambient operating temperature range (T A )………………………….-55                                              | ° C to +125 ° C                                      |
| 4.3.Nominal Operating Performance Characteristics 5/                                                  | 4.3.Nominal Operating Performance Characteristics 5/ |
| Jitter .............................................................................................. | 2ns                                                  |
| Refresh Rate                                                                                          | Refresh Rate                                         |
| V DD1 =V DD2 = 5V .........................................................................           | 1.2 Mbps                                             |
| V DD1 =V DD2 = 3.3V ......................................................................            | 1.1 Mbps                                             |
| V DD1 = 5V, V DD2 = 3.3V ...............................................................              | 1.2 Mbps                                             |
| V DD1 = 3.3V, V DD2 = 5.0V ............................................................               | 1.1 Mbps                                             |
| Common Mode Transient Immunity &#124;CM&#124; ...................................15                   | kV/µs 6/                                             |
| Capacitance (Input-to-Output) .....................................................10pF               | 7/                                                   |
| Input Capacitance .........................................................................6pF        | 8/                                                   |

## 4.4 Radiation Features

Maximum total dose available (dose rate = 50 - 300 rads (Si)/s) ….100 k rads (Si)

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ VDDI and VDDO refer to the supply voltages on the input and output sides of a given channel, respectively. See the PC Board Layout section.

3/ See Figure 2 for maximum rated current values for various temperatures.

4/ Measurement taken under absolute worst-case condition and represent data taken with thermal camera for highest power density location. See MIL-STD1835 for average Θ JC number.

5/ All typical specifications are at TA = 25°C, VDD1 All typical specifications are at TA = 25°C, 3.6 V ≤ V DD1 ≤ 5. V, 3.3 V ≤ V DD2 ≤ 5.0 V, unless otherwise noted. Switching specifications are tested with CL = 15 pF and CMOS signal levels, unless otherwise noted.

6/ |CM| is the maximum common-mode voltage slew rate that can be sustained while maintaining VO &gt; 0.8 VDD, VIx = VDDx, VCM = 200 V. The commonmode voltage slew rates apply to both rising and falling common-mode voltage edges.

7/ The device is considered a 2-terminal device: Pin 1 through Pin 8 is shorted together and Pin 9 through Pin 16 are shorted together.

8/ Input capacitance is from any input data pin to ground.

## TABLE IA - ELECTRICAL PERFORMANCE CHARACTERISTICS - 5V OPERATION

| Parameter See notes at end of table              | Symbol                    | Conditions 1/ Unless otherwise specified   | Sub-Group                 | Limit Min                 | Limit Max                 | Units                     |
|--------------------------------------------------|---------------------------|--------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS                        | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                  | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate                                        | DR                        | Within PWDLimit                            | 9,10,11                   |                           | 25                        | Mbps                      |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 25                        | Mbps                      |
| Propagation Delay                                | t PHL , t PLH             | 50% input to 50% output                    | 9,10,11                   | 29                        | 50                        | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         | 29                        | 50                        | ns                        |
| Pulse Width Distortion                           | PWD                       | &#124;t PLH - t PHL &#124;                 | 9,10,11                   |                           | 5                         | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 5                         | ns                        |
| Pulse Width                                      | PW                        | Within PWDlimit                            | 9,10,11                   | 40                        |                           | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         | 40                        |                           | ns                        |
| Propagation Delay Skew 2/, 3/, 4/                | t PSK                     |                                            | 9,10,11                   |                           | 10                        | ns                        |
| Pulse Width Distortion Change vs. Temperature 3/ | ∆PWD                      |                                            | 10,11                     |                           | 30                        | ps/°C                     |
| Channel Matching                                 | t PSKCD                   |                                            | 9,10,11                   |                           | 4                         | ns                        |
| Codirection                                      |                           | M,D,P,L,R                                  | 9                         |                           | 4                         | ns                        |
| Channel Matching                                 | t PSKOD                   |                                            | 9,10,11                   |                           | 6                         | ns                        |
| Opposing-Direction                               |                           | M,D,P,L,R                                  | 9                         |                           | 6                         | ns                        |
| SUPPLY CURRENT                                   | SUPPLY CURRENT            | SUPPLY CURRENT                             | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            |
| Dynamic Supply Current                           | I DD1(D)                  | F = 2MBPS, 10MBPS, 25MBPS                  | 4, 5                      |                           | 20                        | mA                        |
|                                                  |                           |                                            | 6                         |                           | 22                        | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 4                         |                           | 20                        | mA                        |
|                                                  | I DD2(D)                  | F = 2MBPS, 10MBPS, 25MBPS                  | 4, 5                      |                           | 20                        | mA                        |
|                                                  |                           |                                            | 6                         |                           | 22                        | mA                        |
|                                                  | I DD1(Q)                  | M,D,P,L,R                                  | 4                         |                           | 20                        | mA                        |
| Quiescent Supply Current                         |                           |                                            | 1,2,3                     |                           | 3.8                       | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 3.8                       | mA                        |
|                                                  | DD2(Q)                    |                                            |                           |                           | 2.92                      |                           |
|                                                  | I                         |                                            | 2                         |                           |                           | mA                        |
|                                                  |                           |                                            | 1,3                       |                           | 3.4                       | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 3.4                       | mA                        |
| DC CHARACTERISTICS                               | DC CHARACTERISTICS        | DC CHARACTERISTICS                         | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        |
| Logic High Input Threshold                       | VIH                       | 7/                                         | 1,2,3                     | 0.7 V DDx                 |                           | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         | 0.7 V DDx                 |                           | V                         |
| Logic low Input Threshold                        | VIL                       | 7/                                         | 1,2,3                     |                           | 0.3 V DDx                 | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.3 V DDx                 | V                         |
| Logic High Output Voltages                       | VOH                       | I Ox = -20 μA, V Ix = V IxH 5/, 6/,7/      | 1,2,3                     | V DDx - 0.1               |                           | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         | V DDx - 0.1               |                           | V                         |
|                                                  |                           | Ox = -4 mA,V Ix =V IxH 5/, 6/,7/           | 1,2,3                     | V DDx - 0.4               |                           | V                         |
|                                                  |                           | I M,D,P,L,R                                | 1                         | V DDx - 0.4               |                           | V                         |
| Logic Low Output Voltages                        | VOL                       | I Ox = 20 μA, V Ix = V IxL 5/, 6/,7/       | 1,2,3                     |                           | 0.1                       | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.1                       | V                         |
|                                                  |                           | I Ox = 4 mA,V Ix =V IxL 5/, 6/,7/          | 1,2,3                     |                           | 0.4                       | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.4                       | V                         |
| Input Leakage Current per                        | I IH                      | V Ix = V DDx 5/, 6/,7/                     | 1,2,3                     | -10                       | +10                       | µA                        |
| Channel                                          |                           | M,D,P,L,R                                  | 1                         | -10                       | +10                       | µA                        |
|                                                  | I IL                      | V Ix = 0V 5/, 6/,7/                        | 1,2,3                     | -10                       | +10                       | µA                        |
|                                                  |                           | M,D,P,L,R                                  | 1                         | -10                       | +10                       | µA                        |
| AC CHARACTERISTICS                               | AC CHARACTERISTICS        | AC CHARACTERISTICS                         | AC CHARACTERISTICS        | AC CHARACTERISTICS        | AC CHARACTERISTICS        | AC CHARACTERISTICS        |
| Output Rise/Fall Time 2/, 3/                     | t R /t F                  | 10% to 90%                                 | 4                         |                           | 2.5                       | ns                        |
|                                                  |                           |                                            | 5                         |                           | 3                         |                           |
|                                                  |                           |                                            | 6                         |                           | 2                         |                           |

## TABLE IA NOTES:

- 1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted. VDDx nom = 5 V, VDDx max = 5.5V, VDDx min = 4.5V.
- 2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation.

- 4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.
- 5/ VIx refers to the voltage input signals of a given channel (A, B, C, or D).

6/ IOx refers to the output current of a given channel (A, B, C, or D).

- 7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).

## ADuM7442S

## TABLE IB - ELECTRICAL PERFORMANCE CHARACTERISTICS - 3.3V OPERATION

| Parameter See notes at end of table              | Symbol                    | Conditions 1/ Unless otherwise specified   | Sub- Group                | Limit Min                 | Limit Max                 | Units                     |
|--------------------------------------------------|---------------------------|--------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS                        | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                  | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate                                        | DR                        | Within PWDLimit                            | 9,10,11                   |                           | 25                        | Mbps                      |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 25                        | Mbps                      |
| Propagation Delay                                | t PHL , t PLH             | 50% input to 50% output                    | 9,10,11                   | 29                        | 66                        | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         | 29                        | 66                        | ns                        |
| Pulse Width Distortion                           | PWD                       | &#124;t PLH - tP HL &#124;                 | 9,11                      |                           | 5                         | ns                        |
|                                                  |                           |                                            | 10                        |                           | 9                         |                           |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 5                         | ns                        |
| Pulse Width                                      | PW                        | Within PWDlimit                            | 9,10,11                   | 40                        |                           | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         | 40                        |                           | ns                        |
| Propagation Delay Skew 2/, 3/, 4/                | t PSK                     |                                            | 9,10,11                   |                           | 10                        | ns                        |
| Pulse Width Distortion Change vs. Temperature 3/ | ∆PWD                      |                                            | 10,11                     |                           | 43                        | ps/°C                     |
| Channel Matching                                 | t PSKCD                   |                                            | 9,10,11                   |                           | 5                         | ns                        |
| Codirection                                      |                           | M,D,P,L,R                                  | 9                         |                           | 5                         | ns                        |
| Channel Matching                                 | t PSKOD                   |                                            | 9,10,11                   |                           | 7                         | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           |                           |                           |
| Opposing-Direction                               |                           |                                            |                           |                           | 7                         | ns                        |
| SUPPLY CURRENT                                   | SUPPLY CURRENT            | SUPPLY CURRENT                             | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            |
| Dynamic Supply Current                           | I DD1(D)                  | F = 2MBPS, 10MBPS, 25MBPS                  | 4                         |                           | 13                        | mA                        |
|                                                  |                           |                                            | 5,6                       |                           | 14                        |                           |
|                                                  |                           | M,D,P,L,R                                  | 4                         |                           | 13                        | mA                        |
|                                                  | I DD2(D)                  | F = 2MBPS, 10MBPS, 25MBPS                  | 4,5                       |                           | 13                        | mA                        |
|                                                  |                           |                                            | 6                         |                           | 15                        |                           |
|                                                  |                           | M,D,P,L,R                                  | 4                         |                           | 13                        | mA                        |
| Quiescent Supply                                 | I DD1(Q)                  |                                            | 1,2,3                     |                           | 2.4                       | mA                        |
| Current                                          |                           | M,D,P,L,R                                  | 1                         |                           | 2.4                       | mA                        |
|                                                  | I DD2(Q)                  |                                            | 1,2                       |                           | 2.3                       | mA                        |
|                                                  |                           |                                            | 3                         |                           | 2.4                       | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 2.3                       | mA                        |
| DC CHARACTERISTICS                               | DC CHARACTERISTICS        | DC CHARACTERISTICS                         | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        |
| Logic High Input                                 | VIH                       | 7/                                         | 1,2,3                     | 0.7 V DDx                 |                           | V                         |
| Threshold                                        |                           | M,D,P,L,R                                  | 1                         | 0.7 V DDx                 |                           | V                         |
| Logic low Input Threshold                        | VIL                       | 7/                                         | 1,2,3                     |                           | 0.3 V DDx                 | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.3 V DDx                 | V                         |
| Logic High Output                                | VOH                       | I Ox = -20 μA, V Ix = V IxH 5/, 6/,7/      | 1,2,3                     | V DDx - 0.1               |                           | V                         |
| Voltages                                         |                           | M,D,P,L,R                                  | 1                         | V DDx - 0.1               |                           | V                         |
|                                                  |                           | I Ox = -4 μA,V Ix =V IxH 5/, 6/,7/         | 1,2,3                     | V DDx - 0.4               |                           | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         | V DDx - 0.4               |                           | V                         |
| Logic Low Output                                 | VOL                       | I Ox = 20 μA, V Ix = V IxL 5/, 6/,7/       | 1,2,3                     |                           | 0.1                       | V                         |
| Voltages                                         |                           | M,D,P,L,R                                  | 1                         |                           | 0.1                       | V                         |
|                                                  |                           | I Ox = 4 mA,V Ix =V IxL 5/, 6/,7/          | 1,2,3                     |                           | 0.4                       | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.4                       | V                         |
| Input Leakage Current per                        | I IH                      | V Ix = V DDx 5/, 6/,7/                     | 1,2,3                     | -10                       | +10                       | µA                        |
| Channel                                          |                           | M,D,P,L,R                                  | 1                         | -10                       | +10                       | µA                        |
|                                                  | I IL                      | V Ix = 0V 5/, 6/,7/                        | 1,2,3                     | -10                       | +10                       |                           |
|                                                  |                           | M,D,P,L,R                                  | 1                         | -10                       | +10                       | µA µA                     |
| AC CHARACTERISTICS                               | AC CHARACTERISTICS        | AC CHARACTERISTICS                         | AC CHARACTERISTICS        | AC CHARACTERISTICS        | AC CHARACTERISTICS        | AC CHARACTERISTICS        |
| Output Rise/Fall Time                            | t R /t F                  | 10% to 90%                                 | 4                         |                           | 3                         | ns                        |
| 2/, 3/                                           |                           |                                            | 5                         |                           | 4                         |                           |
|                                                  |                           |                                            | 6                         |                           | 2.5                       |                           |

## TABLE IB NOTES:

- 1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted.  VDDx nom = 3.3 V, VDDx max = 3.6V, VDDx min = 3V.
- 2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation.

- 4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.
- 5/ VIx refers to the voltage input signals of a given channel (A, B, C, or D).
- 6 / IOx refers to the output current of a given channel (A, B, C, or D).
- 7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).

## ADuM7442S

## TABLE IC - ELECTRICAL PERFORMANCE CHARACTERISTICS - MIXED 5 V/3.3 V OPERATION

| Parameter See notes at end of table              | Symbol                    | Conditions 1/ Unless otherwise specified   | Sub- Group                | Limit Min                 | Limit Max                 | Units                     |
|--------------------------------------------------|---------------------------|--------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS                        | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                  | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate                                        | DR                        | Within PWDLimit                            | 9,10,11                   |                           | 25                        | Mbps                      |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 25                        | Mbps                      |
| Propagation Delay                                | t PHL , t PLH             | 50% input to 50% output                    | 9,11                      | 30                        | 55                        | ns                        |
|                                                  |                           |                                            | 10                        | 30                        | 57                        |                           |
|                                                  |                           | M,D,P,L,R                                  | 9                         | 30                        | 55                        | ns                        |
| Pulse Width Distortion                           | PWD                       | &#124;t PLH - tP HL &#124;                 | 9,11                      |                           | 5                         | ns                        |
|                                                  |                           |                                            | 10                        |                           | 7                         |                           |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 5                         | ns                        |
| Pulse Width                                      | PW                        | Within PWDlimit                            | 9,10,11                   | 40                        |                           | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         | 40                        |                           | ns                        |
| Propagation Delay Skew 2/, 3/, 4/                | t PSK                     |                                            | 9,10,11                   |                           | 10                        | ns                        |
| Pulse Width Distortion Change vs. Temperature 3/ | ∆PWD                      |                                            | 10,11                     |                           | 40                        | ps/°C                     |
| Channel Matching                                 | t PSKCD                   |                                            | 9,10,11                   |                           | 5                         | ns                        |
| Codirection                                      |                           | M,D,P,L,R                                  | 9                         |                           | 5                         | ns                        |
| Channel Matching                                 | t PSKOD                   |                                            | 9,10                      |                           | 9                         | ns                        |
| Opposing-Direction                               |                           |                                            | 11                        |                           | 12                        | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 9                         | ns                        |
| SUPPLY CURRENT                                   | SUPPLY CURRENT            | SUPPLY CURRENT                             | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            |
| Dynamic Supply Current                           | I DD1(D)                  | F = 2MBPS, 10MBPS, 25MBPS                  | 4,5,6                     |                           | 20                        | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 4                         |                           | 20                        | mA                        |
|                                                  | I DD2(D)                  | F = 2MBPS, 10MBPS, 25MBPS                  | 4,5                       |                           | 12                        | mA                        |
|                                                  |                           |                                            | 6                         |                           | 15                        |                           |
|                                                  |                           | M,D,P,L,R                                  | 4                         |                           | 12                        | mA                        |
| Quiescent Supply Current                         | I DD1(Q)                  |                                            | 1,2,3                     |                           | 3.8                       | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 3.8                       | mA                        |
|                                                  |                           |                                            | 1,2                       |                           | 2.3                       |                           |
|                                                  | I DD2(Q)                  |                                            |                           |                           |                           | mA                        |
|                                                  |                           |                                            | 3                         |                           | 2.4                       | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 2.3                       | mA                        |
| DC CHARACTERISTICS                               | DC CHARACTERISTICS        | DC CHARACTERISTICS                         | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        |
| Logic High Input Threshold                       | VIH                       | 7/                                         | 1,2,3                     | 0.7 V DDx                 |                           | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         | 0.7 V DDx                 |                           | V                         |
| Logic low Input Threshold                        | VIL                       | 7/                                         | 1,2,3                     |                           | 0.3 V DDx                 | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.3 V DDx                 | V                         |
| Logic High OutputVoltages                        | VOH                       | I Ox = -20 μA, V Ix = V IxH 5/, 6/,7/      | 1,2,3                     | V DDx - 0.1               |                           | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         | V DDx - 0.1               |                           | V                         |
|                                                  |                           | I Ox = -4 μA,V Ix =V IxH 5/, 6/,7/         | 1,2,3                     | V DDx - 0.4               |                           | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         | V DDx - 0.4               |                           | V                         |
| Logic Low Output Voltages                        | VOL                       | I Ox = 20 μA, V Ix = V IxL 5/, 6/,7/       | 1,2,3                     |                           | 0.1                       | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.1                       | V                         |
|                                                  |                           | I Ox = 4 mA,V Ix =V IxL 5/, 6/,7/          | 1,2,3                     |                           | 0.4                       | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.4                       | V                         |
| Input Leakage Current per                        | I IH                      | V Ix = V DDx 5/, 6/,7/                     | 1,2,3                     | -10                       | +10                       | µA                        |
| Channel                                          |                           | M,D,P,L,R                                  | 1                         | -10                       | +10                       | µA                        |
|                                                  | I IL                      | V Ix = 0V 5/, 6/,7/                        | 1,2,3                     | -10                       | +10                       | µA                        |
|                                                  |                           | M,D,P,L,R                                  | 1                         | -10                       | +10                       | µA                        |
| AC CHARACTERISTICS                               | AC CHARACTERISTICS        | AC CHARACTERISTICS                         | AC CHARACTERISTICS        | AC CHARACTERISTICS        | AC CHARACTERISTICS        | AC CHARACTERISTICS        |
| Output Rise/Fall Time                            | t R /t F                  | 10% to 90%                                 | 4                         |                           | 3                         | ns                        |
| 2/, 3/                                           |                           |                                            | 5                         |                           | 4                         |                           |
|                                                  |                           |                                            | 6                         |                           | 2.5                       |                           |

## TABLE IC NOTES:

- 1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted. VDD1 nom = 5 V, VDD1 max = 5.5V, VDD1 min = 4.5V / VDD2 nom = 3.3 V, VDD2 max = 3.6V, VDD2 min = 3V
- 2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation.

- 4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.
- 5/ VIx refers to the voltage input signals of a given channel (A, B, C, or D).
- 6/ IOx refers to the output current of a given channel (A, B, C, or D).
- 7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).

## ADuM7442S

## ADuM7442S

## TABLE ID - ELECTRICAL PERFORMANCE CHARACTERISTICS - MIXED 3.3 V/5 V OPERATION

| Parameter See notes at end of table              | Symbol                    | Conditions 1/ Unless otherwise specified   | Sub- Group                | Limit Min                 | Limit Max                 | Units                     |
|--------------------------------------------------|---------------------------|--------------------------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| SWITCHING CHARACTERISTICS                        | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS                  | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS | SWITCHING CHARACTERISTICS |
| Data Rate                                        | DR                        | Within PWDLimit                            | 9,10,11                   |                           | 25                        | Mbps                      |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 25                        | Mbps                      |
| Propagation Delay                                | t PHL , t PLH             | 50% input to 50% output                    | 9,10,11                   | 31                        | 60                        | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         | 31                        | 60                        | ns                        |
| Pulse Width                                      | PWD                       | &#124;t PLH - tP HL &#124;                 | 9, 11                     |                           | 5                         | ns                        |
| Distortion                                       |                           |                                            | 10                        |                           | 7                         |                           |
|                                                  |                           | M,D,P,L,R                                  | 9                         |                           | 5                         | ns                        |
| Pulse Width                                      | PW                        | Within PWDlimit                            | 9,10,11                   | 40                        |                           | ns                        |
|                                                  |                           | M,D,P,L,R                                  | 9                         | 40                        |                           | ns                        |
| Propagation Delay Skew 2/,3/,4/                  | t PSK                     |                                            | 9,10,11                   |                           | 10                        | ns                        |
| Pulse Width Distortion Change vs. Temperature 3/ | ∆PWD                      |                                            | 10,11                     |                           | 33                        | ps/°C                     |
| Channel Matching                                 | t PSKCD                   |                                            | 9,10,11                   |                           | 5                         | ns                        |
| Codirection                                      |                           | M,D,P,L,R                                  | 9                         |                           | 5                         | ns                        |
| Channel Matching                                 | t PSKOD                   |                                            | 9,10,11                   |                           | 9                         | ns                        |
| Opposing-Direction                               |                           | M,D,P,L,R                                  | 9                         |                           | 9                         | ns                        |
| SUPPLY CURRENT                                   | SUPPLY CURRENT            | SUPPLY CURRENT                             | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            | SUPPLY CURRENT            |
| Dynamic Supply                                   | I DD1(D)                  | F = 2MBPS, 10MBPS, 25MBPS                  | 4,5                       |                           | 13                        | mA                        |
| Current                                          |                           |                                            | 6                         |                           | 14.5                      | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 4                         |                           | 13                        | mA                        |
|                                                  | I DD2(D)                  | F = 2MBPS, 10MBPS, 25MBPS                  | 4,5                       |                           | 20                        | mA                        |
|                                                  |                           |                                            | 6                         |                           | 22                        | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 4                         |                           | 20                        | mA                        |
| Quiescent Supply                                 | I DD1(Q)                  |                                            | 1,2,3                     |                           | 2.4                       | mA                        |
| Current                                          |                           | M,D,P,L,R                                  | 1                         |                           | 2.4                       | mA                        |
|                                                  | I DD2(Q)                  |                                            | 2                         |                           | 2.92                      | mA                        |
|                                                  |                           |                                            | 1,3                       |                           | 3.5                       | mA                        |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 3.5                       | mA                        |
| DC CHARACTERISTICS                               | DC CHARACTERISTICS        | DC CHARACTERISTICS                         | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        | DC CHARACTERISTICS        |
| Logic High Input                                 | VIH                       | 7/                                         | 1,2,3                     | 0.7 V DDx                 |                           | V                         |
| Threshold                                        |                           | M,D,P,L,R                                  | 1                         | 0.7 V DDx                 |                           | V                         |
| Logic low Input                                  | VIL                       | 7/                                         | 1,2,3                     |                           | 0.3 V DDx                 | V                         |
| Threshold                                        |                           | M,D,P,L,R                                  | 1                         |                           | 0.3 V DDx                 | V                         |
| Logic High Output                                | VOH                       | I Ox = -20 μA, V Ix = V IxH 5/, 6/,7/      | 1,2,3                     | V DDx - 0.1               |                           | V                         |
| Voltages                                         |                           | M,D,P,L,R                                  | 1                         | V DDx - 0.1               |                           | V                         |
|                                                  |                           | I Ox = -4 μA,V Ix =V IxH 5/, 6/,7/         | 1,2,3                     | V DDx - 0.4               |                           | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         | V DDx - 0.4               |                           | V                         |
| Logic Low Output                                 | VOL                       | I Ox = 20 μA, V Ix = V IxL 5/, 6/,7/       | 1,2,3                     |                           | 0.1                       | V                         |
| Voltages                                         |                           | M,D,P,L,R                                  | 1                         |                           | 0.1                       | V                         |
|                                                  |                           | I Ox = 4 mA,V Ix =V IxL 5/, 6/,7/          | 1,2,3                     |                           | 0.4                       | V                         |
|                                                  |                           | M,D,P,L,R                                  | 1                         |                           | 0.4                       | V                         |

## ADuM7442S

| Parameter See notes at end of table   | Symbol             | Conditions 1/ Unless otherwise specified   | Conditions 1/ Unless otherwise specified   | Sub-Group          | Limit Min          | Limit Max          | Units              |
|---------------------------------------|--------------------|--------------------------------------------|--------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| Input Leakage Current                 | I IH               | V Ix = V DDx 5/, 6/,7/                     |                                            | 1,2,3              | -10                | +10                | µA                 |
| per Channel                           |                    |                                            | M,D,P,L,R                                  | 1                  | -10                | +10                | µA                 |
| per Channel                           | I IL               | V Ix = 0V 5/, 6/,7/                        |                                            | 1,2,3              | -10                | +10                | µA                 |
| per Channel                           |                    |                                            | M,D,P,L,R                                  | 1                  | -10                | +10                | µA                 |
| AC CHARACTERISTICS                    | AC CHARACTERISTICS | AC CHARACTERISTICS                         | AC CHARACTERISTICS                         | AC CHARACTERISTICS | AC CHARACTERISTICS | AC CHARACTERISTICS | AC CHARACTERISTICS |
| Output Rise/Fall Time                 | t R /t F           | 10% to 90%                                 |                                            | 4                  |                    | 3.5                | ns                 |
| 2/, 3/                                |                    |                                            |                                            | 5                  |                    | 4.5                |                    |
| 2/, 3/                                |                    |                                            |                                            | 6                  |                    | 3                  |                    |

## TABLE ID NOTES:

- 1/ TA nom = 25ºC, TA max = 125ºC, and TA min = -55ºC unless otherwise noted. Switching specifications are tested with CL = 15 pF, and CMOS signal levels, unless otherwise noted. VDD1 nom = 3.3 V, VDD1 max = 3.6V, VDD1 min = 3V / VDD2 nom = 5 V, VDD2 max = 5.5V, VDD2 min = 4.5V.
- 2/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.

3/ Parameter is not tested post irradiation.

- 4/ tPSK is the magnitude of the worst-case difference in tPHL or tPLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.
- 5/ VIx refers to the voltage input signals of a given channel (A, B, C, or D).
- 6/ IOx refers to the output current of a given channel (A, B, C, or D).
- 7/ VDDx refers to the power supply on either side of a given channel (A, B, C, or D).

## TABLE IE - ELECTRICAL PERFORMANCE CHARACTERISTICS- INSULATION AND SAFETY-RELATED SPECIFICATIONS

| Parameter                                      | Symbol   | Value   | Unit   | Conditions                                                                    |
|------------------------------------------------|----------|---------|--------|-------------------------------------------------------------------------------|
| Rated Dielectric Insulation Voltage 1/, 2/, 3/ | Iso      | 200     | Vpeak  | 1-minute duration                                                             |
| Maximum Continuous Working Voltage 1/, 2/, 3/  | CWV      | 100     | Vpeak  | Continuous voltage magnitude imposed across the isolation barrier. AC Bipolar |
| Resistance (Input-to-Output) 4/                | R I-O    | 10 12   | Ω      |                                                                               |

## TABLE IE NOTES:

- 1/ Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent wafer lots.
- 2/ Parameter is not tested post irradiation.
- 3/ Operation at this high voltage can lead to shortened isolation life.  Continuous working voltage exceeding the rated value may cause permanent damage.
- 4/ The device is considered a 2-terminal device: Pin 1 through Pin 8 is shorted together and Pin 9 through Pin 16 are shorted together.

Figure 2. Therma! Derating Curve, Dependence of Safety-Limiting Values with Case Temperature per DiN V VDE V 0884-10 See note 3/ at the end of Section 4.0 Specifications

<!-- image -->

ASD0016550 Rev. E | Page 11 of 19

## ADuM7442S

Figure 3 - Truth Table (Positive Logic)

| V Ix Input 1/   | V DDI State 2/   | V DDO State 3/   | V Ox Output 1/   | Description                                                                                                                                                                                  |
|-----------------|------------------|------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| H               | Powered          | Powered          | H                | Normal operation: data is high.                                                                                                                                                              |
| L               | Powered          | Powered          | L                | Normal operation: data is low.                                                                                                                                                               |
| X               | Unpowered        | Powered          | H                | Input unpowered. Outputs are in the default high state. Outputs return to input state within 1 μs of VDDI power restoration. See the pin function descriptions (Figure 1) for more details.  |
| X               | Powered          | Unpowered        | Z                | Output unpowered. Output pins are in high impedance state. Output return to input state within 1 μs of VDDOpower restoration. See the pin function descriptions (Figure 1) for more details. |

- 1/ VIx and VOx refer to the input and output signals of a given channel (A, B, C, or D).
- 2/ VDDI refers to the power supply on the input side of a given channel (A, B, C, or D).
- 3/ VDDO refers to the power supply on the output side of a given channel (A, B, C, or D).

Figure 4. Propagation Deiay Parareters

<!-- image -->

TABLE IIA - ELECTRICAL TEST REQUIREMENTS

| Table IIA                               | Table IIA                                               |
|-----------------------------------------|---------------------------------------------------------|
| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535, Table III) |
| Interim Electrical Parameters           | 1                                                       |
| Final Electrical Parameters             | 1, 2, 3, 4, 5, 6, 9, 10, 11 1/ 2/                       |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6, 9, 10, 11                             |
| Group C end-point electrical parameters | 1, 2, 3, 4, 5, 6, 9, 10, 11 2/                          |
| Group Dend-point electrical parameters  | 1, 2, 3, 4, 5, 6, 9, 10, 11                             |
| Group E end-point electrical parameters | 1, 4, 9, 3/                                             |

Table IIA Notes:

1/ PDA applies to Table I subgroup 1 and Table IIB delta parameters.

2/ See Table IIB for delta parameters

3/ Parameters noted in Table I are not tested post irradiation.

## TABLE IIB - LIFE TEST/BURN-IN DELTA LIMITS

| Table IIB                                                              | Table IIB   | Table IIB   | Table IIB   |
|------------------------------------------------------------------------|-------------|-------------|-------------|
| Parameter                                                              | Symbol      | Delta       | Units       |
| IDD1 Dynamic Supply Current V DD1 =V DD2 =5V, 25MBPS                   | I DD1(D)    | ±2.0        | mA          |
| IDD2 Dynamic Supply Current V DD1 =V DD2 =5V, 25MBPS                   | I DD2(D)    | ±2.0        | mA          |
| IDD1 Quiescent Supply CurrentVDD, V DD1 =V DD2 =5V                     | I DD1(Q)    | ±0.4        | mA          |
| IDD2 Quiescent Supply CurrentVDD, V DD1 =V DD2 =5V                     | I DD2(Q)    | ±0.35       | mA          |
| Input Current,V DD1 =V DD2 =5V,V Ix = 0V                               | I I         | ±0.5        | µA          |
| Input Current,V DD1 =V DD2 =5V,V Ix = 5V                               | I I         | ±0.5        | µA          |
| Logic High Output Voltages V DD1 =V DD2 =5V, I Ox = -20 µA,V Ix =V IxH | VOH         | ±100        | mV          |
| Logic Low Output Voltages V DD1 =V DD2 =5V, I Ox = 20 µA,V Ix =V IxL   | VOL         | ±7          | mV          |

## 5.0 Burn-In Life Test, and Radiation

## 5.1. Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuits shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition D of MIL -STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 5.2. Radiation Exposure Circuit

- 5.2.1.  The radiation exposure circuit shall be maintained by the manufacturer under document revision level control  and  shall  be  made  available  to  the  preparing  and  acquiring  activity  upon  request. Total  dose irradiation testing shall be performed in accordance with MIL-STD-883 method 1019, condition A.

## 6.0 MIL-PRF-38535 QMLV Exceptions

## 6.1. Wafer Fabrication

Wafer fabrication occurs at MIL-PRF-38535 QML Class Q certified facility.

## 6.2. Wafer Lot Acceptance (WLA)

Full WLA per MIL-STD-883 TM 5007 is not available for this product. SEM inspection per MIL-STD-883 TM2018 is  not  applicable  to  the  ADuM7442.  The  wafer  fabrication  process  is  manufactured  using  planarized metallization.

## ADuM7442S

## 7.0 Application Notes

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 5. Typical Supply Current per input Channel vs. Data Rate for 5V and3VOperation

<!-- image -->

Figure 7. Typical Supply Current per Output Channei vs. Data Rate for5 V and3VOperation(15pF Output Load)

<!-- image -->

## PC BOARD LAYOUT

The ADuM7442 digital isolator requires no external interface circuitry for the logic interfaces. Power supply bypassing is strongly recommended at the input and output supply pins (see Figure 9). A total of four bypass capacitors should be connected between Pin 1 and Pin 2 for VDD1A, between Pin 7 and Pin 8 for VDD1B, between Pin 9 and Pin 10 for VDD2B, and between Pin 15 and Pin 16 for VDD2A. Supply VDD1A Pin 1 and VDD1B Pin 7 should be connected together and supply VDD2B Pin 10 and VDD2A Pin 16 should be connected together. The capacitor values should be between 0.01 μ F and 0.1 μ F. The total lead length between both ends of the capacitor and the power supply pin should not exceed 20 mm.

Figure 6. Typical Supply Current per Output Channel vs. Data Rate for5V and3 V Operation (NoOutput Load)

<!-- image -->

Figure 8. Typical ADuM7442 Vso, or Vso2Suppiy Current vs. Data Rate for5Vand3VOperation

<!-- image -->

## where:

β is magnetic flux density (gauss).

rn is the radius of the nth turn in the receiving coil (cm).

N is the number of turns in the receiving coil.

Given the geometry of the receiving coil in the ADuM7442 and an imposed requirement that the induced voltage be, at most, 50% of the 0.5 V margin at the decoder, a maximum allowable magnetic field at a given frequency can be calculated. The result is shown in Figure 10.

Figure 9. Reco mmended Printed Crcuit Board Layout

<!-- image -->

In applications involving high common-mode transients, it is important to minimize board coupling across the isolation barrier. Furthermore, users should design the board layout so that any coupling that does occur equally affects all pins on a given component side. Failure to ensure this can cause voltage differentials between pins exceeding the absolute maximum ratings of the device, thereby leading to latch-up or permanent damage. See the AN-1109 Application Note for board layout guidelines.

## PROPAGATION DELAY-RELATED PARAMETERS

Propagation delay is a parameter that describes the time it takes a logic signal to propagate through a component. The input-to-output propagation delay time for a high-to-low transition may differ from the propagation delay time of a low-to-high transition. See Figure 4.

Pulse width distortion is the maximum difference between these two propagation delay values and an indication of how accurately the timing of the input signal is preserved.

Channel-to-channel matching refers to the maximum amount the propagation delay differs between channels within a single ADuM7442 component.  Propagation delay skew refers to the maximum amount the propagation delay differs between multiple ADuM7442 components operating under the same conditions.

## DC CORRECTNESS AND MAGNETIC FIELD IMMUNITY

Positive and negative logic transitions at the isolator input cause narrow (~1 ns) pulses to be sent to the decoder using the transformer. The decoder is bistable and is, therefore, either set or reset by the pulses, indicating input logic transitions. In the absence of logic transitions at the input for more than ~1 μ s, a periodic set of refresh pulses indicative of the correct input state is sent to ensure dc correctness at the output. If the decoder receives no internal pulses of more than approximately 5 μ s, the input side is assumed to be unpowered or nonfunctional, in which case the isolator output is forced to a default high state by the watchdog timer circuit. The magnetic field immunity of the ADuM7442 is determined by the changing magnetic field, which induces a voltage in the transformer's receiving coil large enough to either falsely set or reset the decoder. The following analysis defines the conditions under which this can occur. The 3 V operating condition of the ADuM7442 is examined because it represents the most susceptible mode of operation. The pulses at the transformer output have an amplitude greater than 1.0 V. The decoder has a sensing threshold at about 0.5 V, thus establishing a 0.5 V margin in which induced voltages can be tolerated. The voltage induced across the receiving coil is given by

<!-- formula-not-decoded -->

## ADuM7442S

Figure 10. Maximum Ajiowabie External Magnetic Fiux Density

<!-- image -->

For example, at a magnetic field frequency of 1 MHz, the maximum allowable magnetic field of 0.5 kgauss induces a voltage of 0.25 V at the receiving coil. This is about 50% of the sensing threshold and does not cause a faulty output transition. Similarly, if such an event occurred during a transmitted pulse (and was of the worst-case polarity), it would reduce the received pulse from &gt;1.0 V to 0.75 V, still well above the 0.5 V sensing threshold of the decoder.

The preceding magnetic flux density values correspond to specific current magnitudes at given distances from the ADuM7442 transformers. Figure 11 shows these allowable current magnitudes as a function of frequency for selected distances. As  shown,  the ADuM7442  is  extremely  immune  and  can  be  affected  only  by  extremely  large  currents operated at high frequency very close to the component. For the 1 MHz example noted previously, a 1.2 kA current would have to be placed 5 mm away from the ADuM7442 to affect the operation of the component.

Figure 1 1. Maximum Allowabie Current for Various Current-to-ADu/7442 Spacin gs

<!-- image -->

Note that at combinations of strong magnetic field and high frequency, any loops formed by printed circuit board traces can induce error voltages sufficiently large enough to trigger the thresholds of succeeding circuitry. Care should be taken in the layout of such traces to avoid this possibility.

## POWER CONSUMPTION

The supply current at a given channel of the ADuM7442 isolator is a function of the supply voltage, the data rate of the channel, and the output load of the channel.

For each input channel, the supply current is given by

| I DDI = I DDI (Q)                                                           | f ≤ 0.5 f r   |
|-----------------------------------------------------------------------------|---------------|
| I DDI = I DDI (D) × (2f - f r ) + I DDI (Q)                                 | f > 0.5 f r   |
| For each output channel, the supply current is given by                     |               |
| I DDO = I DDO (Q)                                                           | f ≤ 0.5 fr    |
| I DDO = (I DDO (D) + (0.5 × 10-3) × C L × V DDO ) × (2f - f r ) + I DDO (Q) | f > 0.5 fr    |

## where:

IDDI (D), IDDO (D) are the input and output dynamic supply currents per channel (mA/Mbps).

CL is the output load capacitance (pF).

VDDO is the output supply voltage (V).

f is the input logic signal frequency (MHz); it is half the input data rate, expressed in units of Mbps.

fr is the input stage refresh rate (Mbps).

IDDI (Q), IDDO (Q) are the specified input and output quiescent supply currents (mA).

To  calculate  the  total  VDD1  and  VDD2  supply  current,  the  supply  currents  for  each  input  and  output  channel corresponding to VDD1 and VDD2 are calculated and totaled. Figure 5 and Figure 6 show per-channel supply currents as a function of data rate for an unloaded output condition. Figure 7 shows the per-channel supply current as a function of data rate for a 15-pF output condition. Figure 8 shows the total VDD1 and VDD2 supply current as a function of data rate for the ADuM7442.

## LOW POWER SUPPLY OUTPUT GLITCH

When using the ADuM7442S with a power supply below 3.0V, a glitch may occur in the output. For more details, refer to Figure 5 in the AN-825 Application Note.

## ADuM7442S

## 8.0 Package Outline Dimensions

Figure 12. 16-Lead Bottom Brazed Flatpack

<!-- image -->

Dimensions shown in inches and (millimeters)

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description             | Package Option   |
|---------------|---------------------|---------------------------------|------------------|
| ADuM7442R703F | -55°C to +125°C     | 16 Lead Bottom Brazed Flat Pack | CDFP4-F16        |

## Revision History

| Revision History   | Revision History                                             | Revision History   |
|--------------------|--------------------------------------------------------------|--------------------|
| Rev                | Description of Change                                        | Date               |
| A                  | Initial Release                                              | 7/29/2016          |
| B                  | Format compliance changes                                    | 8/10/2016          |
| C                  | Add lead finish and specify terminal connection of metal lid | 01/03/2018         |
| D                  | Add applications note reference for low voltage glitch       | 09/25/2024         |
| E                  | UpdatedTable IIB                                             | 10/28/2025         |

<!-- image -->