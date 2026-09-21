<!-- lastmod 2026-05-20 -->
<!-- image -->

## [ADM2795E-EP](https://www.analog.com/adm2795e)

## Robust 5kV RMS Isolated RS-485/RS-422 Transceiver with Level 4 EMC and Full ±42V Protection

## FEATURES

- 5kV rms isolated RS-485 transceiver
- ±42V AC/DC peak fault protection on RS-485 bus pins
- DO-160G Section 25 ESD protection: ±15kV air discharge
- Fully certified DO-160G EMC protection on RS-485 bus pins
- Section 22 lightning protection Waveform 3, Waveform 4/ Waveform 1, Waveform 5A Pin injection, Level 4 protection
- RS-485 A, B pins HBM ESD protection: &gt;±30kV
- [Safety and regulatory approvals](https://www.analog.com/en/lp/001/safety-and-regulatory-compliance-information.html?doc=adm2795e.pdf)
- DIN EN IEC 60747-17 (VDE 0884-17)
- VIORM = 849V peak
- UL 1577
- VISO = 5000V rms for 1 minute
- IEC/EN/CSA 60950-1
- IEC/CSA 60601-1
- IEC/CSA 61010-1
- CQC GB 4943.1
- TIA/EIA RS-485/RS-422 compliant over full supply range
- 3V to 5.5V operating voltage range on V DD2
- 1.7V to 5.5V operating voltage range on V DD1 logic supply
- Common-mode input range of -25V to +25V
- High common-mode transient immunity: &gt;75kV/μs
- Robust noise immunity (tested to the IEC 62132-4 standard)
- Passes EN55022 Class B radiated emissions by 6dBµV/m margin
- Receiver short-circuit, open-circuit, and floating input fail-safe
- Supports 256 bus nodes (96kΩ receiver input impedance)
- Glitch free power-up/power-down (hot swap)

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications (AQEC standard)
- Military -55°C to +125°C temperature range
- Controlled manufacturing baseline
- 1 assembly/test site
- Enhanced product change notification
- Qualification data available on request

## APPLICATIONS

- Military and aerospace (MILA) avionics for sensors, actuators, and engine control

## GENERAL DESCRIPTION

The ADM2795E-EP is a 5kV rms signal isolated RS-485 transceiver that features up to ±42V of AC/DC peak bus overvoltage fault protection on the RS-485 bus pins. The device integrates Analog Devices, Inc., i Coupler ®  technology to combine a 3-channel isolator, RS-485 transceiver, and IEC electromagnetic compatibility (EMC) transient protection in a single package. The ADM2795E-EP integrates fully certified DO-160G EMC protection on the RS-485 bus pins, with Section 22 lightning protection. The ADM2795E-EP also provides Section 25 ±15kV ESD air discharge protection. For Section 22 lightning, the ADM2795E-EP provides protection for Waveform 3, Waveform 4/ Waveform 1, and Waveform 5A to Level 4 using 33Ω or 47Ω current limiting resistors to GND 2 , or to Level 4 across the isolation barrier to GND 1 . This device has an extended common-mode input range of ±25V to improve data communication reliability in noisy environments. The ADM2795E-EP is capable of operating over wide power supply ranges, with a 1.7V to 5.5V VDD1 power supply range, allowing interfacing to low voltage logic supplies. The ADM2795E-EP is also fully TIA/EIA RS-485/RS-422 compliant when operated over a 3V to 5.5V V DD2 power supply. The device is fully characterized over an extended operating temperature range of -55°C to +125°C, and is available in a 16 -lead, wide-body SOIC package.

Additional application and technical information can be found in the ADM2795E data sheet.

## TABLE OF CONTENTS

| Features................................................................                                                                                                                   | 1                                                                                                                                                                                          | ESD Caution.......................................................8   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Enhanced Product Features..................................1                                                                                                                               | Pin Configuration and                                                                                                                                                                      | Function Descriptions........ 9                                       |
| Applications...........................................................                                                                                                                    | 1 Typical Performance                                                                                                                                                                      | Characteristics...................10                                  |
| General Description...............................................1                                                                                                                        | Test                                                                                                                                                                                       | Circuits.........................................................14   |
| Functional Block Diagram......................................3                                                                                                                            | Switching                                                                                                                                                                                  | Characteristics.................................15                    |
| Specifications........................................................                                                                                                                     | 4 Theory of                                                                                                                                                                                | Operation.............................................16              |
| Electrical Specifications......................................4                                                                                                                           | RS-485 With Added DO-160G                                                                                                                                                                  | EMC                                                                   |
| Timing Specifications......................................... 5                                                                                                                           | Robustness....................................................                                                                                                                             | 16                                                                    |
| Insulation Specifications.....................................5                                                                                                                            | Certified DO-160G EMC                                                                                                                                                                      | Protection................. 16                                        |
| Regulatory Information.......................................7                                                                                                                             | DO-160G ADM2795E-EP                                                                                                                                                                        | Test Details.............16                                           |
| Absolute Maximum Ratings...................................8                                                                                                                               | Outline                                                                                                                                                                                    | Dimensions............................................. 18            |
| Thermal Resistance........................................... 8                                                                                                                            | Ordering Guide.................................................18                                                                                                                          |                                                                       |
| Electrostatic Discharge (ESD) Ratings for ADM2795E-EP.................................................8                                                                                    | Evaluation Boards............................................18                                                                                                                            |                                                                       |
| Electrical Fast Transients (EFT) and Surge                                                                                                                                                 |                                                                                                                                                                                            |                                                                       |
| Ratings for ADM2795E-EP...............................8                                                                                                                                    |                                                                                                                                                                                            |                                                                       |
| REVISION HISTORY                                                                                                                                                                           |                                                                                                                                                                                            |                                                                       |
| 4/2026-Rev. 0 to Rev. A                                                                                                                                                                    |                                                                                                                                                                                            |                                                                       |
| Changes to Features Section..........................................................................................................................                                      | Changes to Features Section..........................................................................................................................                                      | 1                                                                     |
| Moved Figure 1................................................................................................................................................3                            | Moved Figure 1................................................................................................................................................3                            |                                                                       |
| Changes to Specifications Section..................................................................................................................                                        | Changes to Specifications Section..................................................................................................................                                        | 4                                                                     |
| Added Electrical Specifications Section...........................................................................................................4                                        | Added Electrical Specifications Section...........................................................................................................4                                        |                                                                       |
| Moved Table 1..................................................................................................................................................4                           | Moved Table 1..................................................................................................................................................4                           |                                                                       |
| Changes to Input Capacitance Parameter, Table 1.........................................................................................                                                   | Changes to Input Capacitance Parameter, Table 1.........................................................................................                                                   | 4                                                                     |
| Changed Insulation and Safety Related Specifications Section to Insulation                                                                                                                 | Changed Insulation and Safety Related Specifications Section to Insulation                                                                                                                 | Specifications Section..............5                                 |
| Changes to Insulation Specifications Section and Table 3..............................................................................                                                     | Changes to Insulation Specifications Section and Table 3..............................................................................                                                     | 5                                                                     |
| Moved Figure 2................................................................................................................................................6                            | Moved Figure 2................................................................................................................................................6                            |                                                                       |
| Changes to Figure 2 Caption...........................................................................................................................6                                    | Changes to Figure 2 Caption...........................................................................................................................6                                    |                                                                       |
| Deleted Package Characteristics Section and Table 4; Renumbered                                                                                                                            | Deleted Package Characteristics Section and Table 4; Renumbered                                                                                                                            | Sequentially.........................................6                |
| Changes to Regulatory Information Section and Table 4.................................................................................7                                                    | Changes to Regulatory Information Section and Table 4.................................................................................7                                                    |                                                                       |
| Deleted DIN V VDE V 0884-10 (VDE V 0884-10) Insulation Characteristics Section                                                                                                             | Deleted DIN V VDE V 0884-10 (VDE V 0884-10) Insulation Characteristics Section                                                                                                             | and Table 6..................7                                        |
| Changes to Table 5..........................................................................................................................................8                              | Changes to Table 5..........................................................................................................................................8                              |                                                                       |
| Deleted Table 8................................................................................................................................................8                           | Deleted Table 8................................................................................................................................................8                           |                                                                       |
| Added Electrostatic Discharge (ESD) Ratings for ADM2795E-EP Section and Table                                                                                                              | Added Electrostatic Discharge (ESD) Ratings for ADM2795E-EP Section and Table                                                                                                              | 7..................................8                                  |
| Electrical Fast Transients (EFT) and Surge Ratings for ADM2795E-EP                                                                                                                         | Electrical Fast Transients (EFT) and Surge Ratings for ADM2795E-EP                                                                                                                         |                                                                       |
| Added Section, Table 8, Table 9........................................................................................................................................................... | Added Section, Table 8, Table 9........................................................................................................................................................... | 8                                                                     |

7/2017-Revision 0: Initial Version

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. ADM2795E-EP Functional Block Diagram

<!-- image -->

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

1.7V ≤ V DD1 ≤ 5.5V, 3V ≤ V DD2 ≤ 5.5V, T A = -55°C to +125°C. All min/max specifications apply over the entire recommended operation range, unless otherwise noted. All typical specifications at T A = 25°C, V DD1 = V DD2 = 5.0V, unless otherwise noted.

Table 1. Electrical Characteristics

| Parameter                                                             | Symbol             | Min         |   Typ | Max          | Unit   | Test Conditions/Comments                                   |
|-----------------------------------------------------------------------|--------------------|-------------|-------|--------------|--------|------------------------------------------------------------|
| SUPPLY CURRENT                                                        |                    |             |       |              |        |                                                            |
| Power Supply Current                                                  |                    |             |       |              |        |                                                            |
| Logic Side                                                            | I DD1              |             |       | 10           | mA     | Unloaded output, DE = V DD1 , RE = 0V                      |
| TxD/RxD Data Rate = 2.5Mbps                                           |                    |             |       | 10           | mA     | Unloaded output, DE = V DD1 , RE = 0V                      |
| Bus Side                                                              | I DD2              |             |       | 12           | mA     | Unloaded output, DE = V DD1 , RE = 0V                      |
| TxD/RxD Data Rate = 2.5Mbps                                           |                    |             |       | 90           | mA     | Unloaded output, DE = V DD1 , RE = 0V                      |
|                                                                       |                    |             |       | 130          | mA     | DE = V DD1 , RE = 0V, V DD2 = 5.5V, R = 27Ω, see Figure 27 |
|                                                                       |                    |             |    94 |              | mA     | DE = V DD1 , RE = 0V, V DD2 = 5.5V, R = 27Ω, see Figure 27 |
|                                                                       |                    |             |    46 |              | mA     | DE = V DD1 , RE = 0V, V DD2 = 3.0V, R = 27Ω, see Figure 27 |
| Supply Current in Shutdown Mode                                       | I SHDN             |             |       | 10           | mA     | DE = 0V, RE = V DD1                                        |
| DRIVER                                                                |                    |             |       |              |        |                                                            |
| Differential Outputs                                                  |                    |             |       |              |        |                                                            |
| Differential Output Voltage                                           | &#124;V OD &#124;  | 1.5         |       | 5.0          | V      | V DD2 ≥ 3.0V, R = 27Ω or 50Ω, see Figure 27                |
|                                                                       |                    | 2.1         |       | 5.0          | V      | V DD2 ≥ 4.5V, R = 27Ω or 50Ω, see Figure 27                |
|                                                                       | &#124;V OD3 &#124; | 1.5         |       | 5.0          | V      | V DD2 ≥ 3.0V, V CM = -25V to +25V, see Figure 28           |
|                                                                       |                    | 2.1         |       | 5.0          | V      | V DD2 ≥ 4.5 V, V CM = -25V to +25V, see Figure 28          |
| Change in Differential Output Voltage for Complementary Output States | ∆&#124;V OD &#124; |             |       | 0.2          | V      | R = 27Ω or 50Ω, see Figure 27                              |
| Common-Mode Output Voltage                                            | V OC               |             |       | 3.0          | V      | R = 27Ω or 50Ω, see Figure 27                              |
| Change in Common-Mode Output Voltage for                              | ∆&#124; VOC &#124; |             |       | 0.2          | V      | R = 27Ω or 50Ω, see Figure 27                              |
| Complementary Output States                                           |                    |             |       |              |        |                                                            |
| Short-Circuit Output Current                                          |                    |             |       |              |        |                                                            |
| V OUT = Low                                                           | I OSL              | -250        |       | +250         | mA     | -42V ≤ V SC ≤ +42V 1                                       |
| V OUT = High                                                          | I OSH              | -250        |       | +250         | mA     | -42V ≤ V SC ≤ +42V 1                                       |
| Logic Inputs (DE, RE, TxD)                                            |                    |             |       |              |        |                                                            |
| Input Threshold Low                                                   | V IL               |             |       | 0.33 × V DD1 | V      | 1.7V ≤ V DD1 ≤ 5.5V                                        |
| Input Threshold High                                                  | V IH               | 0.7 V DD1   |       |              | V      | 1.7V ≤ V DD1 ≤ 5.5V                                        |
| Input Capacitance                                                     | C I                |             |   4.0 |              | pF     |                                                            |
| Input Current                                                         | I TxD              |             |       | +1           | µA     | 0V ≤ V IN ≤ V DD1                                          |
| RECEIVER                                                              |                    |             |       |              |        |                                                            |
| Differential Inputs                                                   |                    |             |       |              |        |                                                            |
| Differential Input Threshold Voltage                                  | V TH               | -200        |  -125 | -30          | mV     | -25V ≤ V CM ≤ +25V                                         |
| Input Voltage Hysteresis                                              | V HYS              |             |    30 |              | mV     | -25V ≤ V CM ≤ +25V                                         |
| Input Current (A, B)                                                  | I I                | -1.0        |       | +1.0         | mA     | DE = 0V, V DD2 = 0V/5V, V IN = ±25V                        |
| Input Capacitance (A, B)                                              | C AB               |             |   150 |              | pF     | T A = 25°C, see Figure 17                                  |
| Line Input Resistance                                                 | R IN               | 96          |       |              | kΩ     | -25V ≤ V CM ≤ +25V, up to 256 nodes supported              |
| Logic Outputs                                                         |                    |             |       |              |        |                                                            |
| Output Voltage Low                                                    | V OLRxD            |             |       | 0.2          | V      | I ORxD = 3.0mA, V A - V B = -0.2V                          |
| Output Voltage High                                                   | V OHRxD            | V DD1 - 0.2 |       |              | V      | I ORxD = -3. mA, V A - V B = 0.2V                          |

## SPECIFICATIONS

Table 1. Electrical Characteristics (Continued)

| Parameter                          | Symbol   |   Min |   Typ | Max   | Unit   | Test Conditions/Comments             |
|------------------------------------|----------|-------|-------|-------|--------|--------------------------------------|
| Short-Circuit Current              |          |       |       | 100   | mA     | V OUT = GND or V DD1 , RE = 0V       |
| Three-State Output Leakage Current | I OZR    |       |       | ±2    | µA     | RE = V DD1 , RxD = 0V or V DD1       |
| COMMON-MODE TRANSIENT IMMUNITY 2   |          |    75 |   125 |       | kV/µs  | V CM ≥1kV, transient magnitude ≥800V |

## TIMING SPECIFICATIONS

VDD1 = 1.7V to 5.5V, V DD2 = 3.0V to 5.5V, T A = T MIN to T MAX (-55°C to +125°C), unless otherwise noted.

Table 2. Timing Characteristics

| Parameter                          |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                        |
|------------------------------------|-------|-------|-------|--------|-----------------------------------------------------------------|
| DRIVER 1                           |       |       |       |        |                                                                 |
| Maximum Data Rate                  |   2.5 |       |       | Mbps   |                                                                 |
| Propagation Delay, t DPLH , t DPHL |       |    30 |   500 | ns     | R LDIFF = 54Ω, C L1 = C L2 = 100pF, see Figure 29 and Figure 33 |
| Differential Skew, t SKEW          |       |    10 |    50 | ns     | R LDIFF = 54Ω, C L1 = C L2 = 100pF, see Figure 29 and Figure 33 |
| Rise/Fall Times, t R , t F         |       |    40 |   130 | ns     | R LDIFF = 54Ω, C L1 = C L2 = 100pF, see Figure 29 and Figure 33 |
| Enable Time, t ZH , t ZL           |       |   500 |  2500 | ns     | R L = 110Ω, C L = 50pF, see Figure 30 and Figure 35             |
| Disable Time, t HZ , t LZ          |       |   500 |  2500 | ns     | R L = 110Ω, C L = 50pF, see Figure 30 and Figure 35             |
| RECEIVER 2                         |       |       |       |        |                                                                 |
| Propagation Delay, t PLH , t PHL   |       |   120 |   200 | ns     | C L = 15pF, see Figure 31 and Figure 34, 10, V ID ≥ ±1.5V       |
|                                    |       |   140 |   220 | ns     | C L = 15pF, see Figure 31 and Figure 34, V ID ≥ ±600mV          |
| Skew, t SKEW                       |       |     4 |    40 | ns     | C L = 15pF, see Figure 31 and Figure 34, V ID ≥ ±1.5 V          |
| Enable Time                        |       |    10 |    50 | ns     | R L = 1kΩ, C L = 15pF, see Figure 32 and Figure 36              |
| Disable Time                       |       |    10 |    50 | ns     | R L = 1kΩ, C L = 15pF, see Figure 32 and Figure 36              |
| RxD Pulse Width Distortion         |       |       |    40 | ns     | C L = 15pF, see Figure 31 and Figure 34, V ID ≥ ±1.5V           |

## INSULATION SPECIFICATIONS

The ADM2795E-EP is suitable for "safe electrical insulation" only within the safety limiting ratings. Compliance with the safety limiting ratings shall be ensured by means of suitable protective circuits.

Table 3. ADM2795E-EP 16-Lead Standard Small Outline Package [SOIC\_W] (RW-16) Insulation Characteristics

| Parameter                            | Symbol   | Value    | Unit   | Test Conditions/Comments                                                                         |
|--------------------------------------|----------|----------|--------|--------------------------------------------------------------------------------------------------|
| GENERAL                              |          |          |        |                                                                                                  |
| Minimum External Clearance Distance  | CLR      | 7.8      | mm     | Measured from input terminals to output terminals, shortest distance through air per IEC 60664-1 |
| Minimum External Creepage Distance   | CRP      | 7.8      | mm     | Measured from input terminals to output terminals, shortest distance along body per IEC 60664-1  |
| Distance Through Insulation          | DTI      | 29.0     | μm     | Minimum internal                                                                                 |
| Comparative Tracking Index           | CTI      | >400     | V      | Per IEC 60112                                                                                    |
| Material Group                       |          | II       |        | Per IEC 60664-1                                                                                  |
| Overvoltage Category per IEC 60664-1 |          | I to IV  |        | Rated mains voltage ≤ 300V rms                                                                   |
|                                      |          | I to III |        | Rated mains voltage ≤ 400V rms                                                                   |

## SPECIFICATIONS

Table 3. ADM2795E-EP 16-Lead Standard Small Outline Package [SOIC\_W] (RW-16) Insulation Characteristics (Continued)

| Parameter                                 | Symbol   | Value     | Unit   | Test Conditions/Comments                                                                                                                                                                     |
|-------------------------------------------|----------|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SAFETY LIMITING VALUES                    |          |           |        |                                                                                                                                                                                              |
| Maximum Ambient Safety Temperature        | T S      | 150       | °C     |                                                                                                                                                                                              |
| Maximum Total Power Dissipation           | P TOT    | 1.8       | W      | T A ≤ 25°C , P TOT = P SI = P SO                                                                                                                                                             |
| Derating Above Ambient (T A )             |          | 14.4      | mW/°C  | T A > 25°C, see Figure 2                                                                                                                                                                     |
| Junction-to-Air Thermal Impedance         | θ JA     | 59.7      | °C/W   | See the Thermal Resistance section                                                                                                                                                           |
| IEC 60747-17 (REINFORCED INSULATION)      |          |           |        |                                                                                                                                                                                              |
| Maximum Repetitive Peak Isolation Voltage | V IORM   | 849       | V peak |                                                                                                                                                                                              |
| Maximum Isolation Working Voltage         | V IOWM   | 600       | V rms  | AC voltage, end of life test, f = 60Hz                                                                                                                                                       |
|                                           |          | 849       | V peak | DC voltage                                                                                                                                                                                   |
| Maximum Transient Isolation Voltage       | V IOTM   | 7000      | V peak | V TEST ≥ 1.2 × V IOTM , t = 1s (100% production)                                                                                                                                             |
| Maximum Impulse Voltage                   | V IMP    | 7000      | V peak | Surge voltage in air, waveform per IEC 61000-4-5                                                                                                                                             |
| Maximum Surge Isolation Voltage           | V IOSM   | 12800     | V peak | V TEST ≥ 1.3 × V IMP minimum 10kV (type test), tested in oil, waveform per IEC 61000-4-5                                                                                                     |
| Apparent Charge                           | q pd     | ≤5        | pC     | Method a (sample test), V ini = V IOTM , t ini = 60s, V pd(m) = 1.6 × V IORM , t m = 10s Method b1 (100% production), V ini ≥ 1.2 × V IOTM , t ini = 1s, V pd(m) = 1.875 × V IORM , t m = 1s |
| Resistance (Input to Output) 1            | R IO     | >10 13    | Ω      | T A = 25°C, V TEST = 500V DC, t = 60s                                                                                                                                                        |
| Capacitance (Input to Output) 1           | C IO     | 2.2       | pF     | f TEST = 1MHz                                                                                                                                                                                |
| Climatic Category                         |          | 55/125/21 |        |                                                                                                                                                                                              |
| Pollution Degree                          |          | 2         |        | Per IEC 60664-1                                                                                                                                                                              |
| UL 1577                                   |          |           |        |                                                                                                                                                                                              |
| Maximum Withstanding Isolation Voltage    | V ISO    | 5000      | V rms  | V TEST = 1.2 × V ISO , t = 1s (100% production)                                                                                                                                              |

Figure 2. Thermal Derating Curve for 16-Lead Standard Small Outline Package [SOIC\_W] (RW-16) Package, Dependence of Safety Limiting Power with Ambient Temperature per IEC 60747-17

<!-- image -->

## SPECIFICATIONS

## REGULATORY INFORMATION

The ADM2795E-EP has been approved by the organizations listed in Table 4. Copies of the relevant certificates are available at Safety and Regulatory Certifications for Digital Isolation.

Table 4. ADM2795E-EP 16-Lead Standard Small Outline Package [SOIC\_W] (RW-16) Package Certifications

| Regulatory Agency   | Safety Standard/Rating                                                                                                                                                | File or Certificate Number   |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| UL                  | UL 1577 Single protection, 5000V rms isolation voltage                                                                                                                | File E214100                 |
| CSA 1               | CSA/EN/IEC 60950-1 Basic insulation at 780V rms Reinforced insulation at 390V rms CSA/IEC 60601-1 2 MOPP at 237.5V rms CSA/IEC 61010-1 Basic insulation at 600V rms 2 | File 205078                  |
| VDE                 | DIN EN IEC 60747-17 (VDE 0884-17) Reinforced insulation at 849V peak                                                                                                  | Certificate 40051926         |
| CQC                 | GB 4943.1 Basic insulation at 780V rms Reinforced insulation at 390V rms                                                                                              | Certificate CQC18001204896   |

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

Table 5.

| Parameter                                       | Rating                    |
|-------------------------------------------------|---------------------------|
| V DD1 V                                         | -0.5V to +7V -0.5V to +7V |
| DD2                                             |                           |
| Digital Input/Output Voltage (DE, RE, TxD, RxD) | -0.3V to V DD1 + 0.3V     |
| Driver Output/Receiver Input Voltage            | ±48V                      |
| Operating Temperature Range                     | -55°C to +125°C           |
| Storage Temperature Range                       | -65°C to +150°C           |
| Maximum Junction Temperature                    | 150°C                     |
| Continuous Total Power Dissipation              | 405mW                     |
| Lead Temperature                                | Lead Temperature          |
| Soldering (10 sec)                              | 300°C                     |
| Vapor Phase (60 sec)                            | 215°C                     |
| Infrared (15 sec)                               | 220°C                     |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junction to case thermal resistance.

Table 6. Thermal Resistance

| Package Type   |   θ JA 1 |   θ JC 1 | Unit   |
|----------------|----------|----------|--------|
| RW-16          |     59.7 |     28.3 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS FOR ADM2795E-EP

The following ESD information is provided for handling of ESD-sensitive devices in an ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

International Electrotechnical Commission (IEC) electromagnetic compatibility: Part 4-2 (IEC) per IEC 61000-4-2.

Air Discharge (DO-160G) per DO-160G Section 25 ESD Protection.

Table 7. ADM2795E-EP, 16-Lead Standard Small Outline Package [SOIC\_W] (RW-16) ESD Characteristics

| ESD Model   | Withstand Threshold (kV)                                                         | Class                                         |
|-------------|----------------------------------------------------------------------------------|-----------------------------------------------|
| HBM         | ≥±6 >±30                                                                         | 3A 1 3B 2                                     |
| CDM         | ±1.250                                                                           | C5 1                                          |
| IEC         | ±8 (contact) to GND 2 ±15 (air) to GND 2 ±9 (contact) to GND 1 ±8 (air) to GND 1 | Level 4 2 Level 4 2 Level 4 2, 3 Level 3 2, 3 |
| DO-160G     | ±15 (air) 2                                                                      |                                               |

## ELECTRICAL FAST TRANSIENTS (EFT) AND SURGE RATINGS FOR ADM2795E-EP

International Electrotechnical Commission (IEC) electromagnetic compatibility: Part 4-4 (IEC) per IEC 61000-4-4.

Table 8. ADM2795E-EP, 16-Lead Standard Small Outline Package [SOIC\_W] (RW-16) EFT Characteristics

| Model       | Withstand Threshold (kV)   | Repetition Frequency (kHz)   | Class     |
|-------------|----------------------------|------------------------------|-----------|
| IEC         | ±2 to GND 2                | 5 or 100                     | Level 4 1 |
| ±2 to GND 1 | 5 or                       | 100                          | Level 4 1 |

International Electrotechnical Commission (IEC) electromagnetic compatibility: Part 4-5 (IEC) per IEC 61000-4-5.

Table 9. ADM2795E-EP, 16-Lead Standard Small Outline Package [SOIC\_W] (RW-16) Surge Characteristics

| Model   | Withstand Threshold (kV)   | Class     |
|---------|----------------------------|-----------|
| IEC     | ±4 to GND 2                | Level 4 1 |
|         | ±4 to GND 1                | Level 4 1 |

## ESD CAUTION

## ESD (electrostatic discharge) sensitive device . Charged

<!-- image -->

devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 10. Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                                                                                                            |
|-----------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | V DD1      | 1.7V to 5.5V Flexible Logic Interface Supply.                                                                                                                                          |
|         2 | GND 1      | Ground 1, Logic Side.                                                                                                                                                                  |
|         3 | TxD        | Transmit Data Input. Data to be transmitted by the driver is applied to this input.                                                                                                    |
|         4 | DE         | Driver Output Enable. A high level on this pin enables the driver differential outputs, A and B. A low level places them into a high impedance state.                                  |
|         5 | RE         | Receiver Enable Input. This pin is an active low input. Driving this input low enables the receiver, and driving it high disables the receiver.                                        |
|         6 | RxD        | Receiver Output Data. This output is high when (A - B) > -30mV and low when (A - B) < -200mV.                                                                                          |
|         7 | NIC        | Not Internally Connected. This pin is not internally connected.                                                                                                                        |
|         8 | GND 1      | Ground 1, Logic Side.                                                                                                                                                                  |
|         9 | GND 2      | Isolated Ground 2, Bus Side.                                                                                                                                                           |
|        10 | GND 2      | Isolated Ground 2, Bus Side.                                                                                                                                                           |
|        11 | A          | Noninverting Driver Output/Receiver Input. When the driver is disabled, or when V DD1 or V DD2 is powered down, Pin A is put into a high impedance state to avoid overloading the bus. |
|        12 | GND 2      | Isolated Ground 2, Bus Side.                                                                                                                                                           |
|        13 | V DD2      | 3V to 5.5V Power Supply. Pin 13 must be connected externally to Pin 16.                                                                                                                |
|        14 | B          | Inverting Driver Output/Receiver Input. When the driver is disabled, or when V DD1 or V DD2 is powered down, Pin B is put into a high impedance state to avoid overloading the bus.    |
|        15 | GND 2      | Isolated Ground 2, Bus Side.                                                                                                                                                           |
|        16 | V DD2      | 3V to 5.5V Power Supply. Pin 16 must be connected externally to Pin 13.                                                                                                                |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. Supply Current (I CC ) vs. Temperature at R L = 54Ω, 120Ω, and No Load; Data Rate = 2.5Mbps, V DD1 = 5.5V, V DD2 = 5.5V

<!-- image -->

Figure 5. Supply Current (I CC ) vs. Temperature at R L = 54Ω, 120Ω, and No Load; Data Rate = 2.5Mbps, V DD1 = 1.7V, V DD2 = 3.0V

<!-- image -->

Figure 6. Driver Output Current vs. Differential Output Voltage

<!-- image -->

Figure 7. Driver Differential Output Voltage vs. Temperature

Figure 8. Driver Output Current vs. Driver Output High Voltage

<!-- image -->

Figure 9. Driver Output Current vs. Driver Output Low Voltage

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Driver Differential Propagation Delay vs. Temperature

<!-- image -->

Figure 11. Driver Propagation Delay (Oscilloscope)

<!-- image -->

Figure 12. Receiver Output Current vs. Receiver Output High Voltage

<!-- image -->

Figure 13. Receiver Output Current vs. Receiver Output Low Voltage

Figure 14. Receiver Output High Voltage vs. Temperature

<!-- image -->

Figure 15. Receiver Output Low Voltage vs. Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. Receiver Propagation Delay (Oscilloscope)

<!-- image -->

Figure 17. Input Capacitance (A, B) vs. Junction Temperature

<!-- image -->

Figure 18. Radiated Emissions Profile with 120pF Capacitor to GND 1 on the RxD Pin (Horizontal Scan, Data Rate = 2.5Mbps, V DD1 = V DD2 = 5.0V)

<!-- image -->

Figure 19. Receiver Propagation Delay vs. Temperature

Figure 20. Receiver Performance with Input Common-Mode Voltage of 25V

<!-- image -->

Figure 21. Short-Circuit Current over Fault Voltage Range

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 22. DPI IEC 62132-4 Noise Immunity with 100nF and 10µF Decoupling on V DD1

<!-- image -->

Figure 23. DPI IEC 62132-4 Noise Immunity with 100nF Decoupling on V DD1

<!-- image -->

Figure 24. DPI IEC 62132-4 Noise Immunity with 100nF and Decoupling on VDD2

Figure 25. Receiver Input Differential Voltage (V ID ) vs. Signaling Rate

<!-- image -->

Figure 26. Receiver Output (RxD) Rise/Fall Time vs. Load Capacitance

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 27. Driver Voltage Measurement

<!-- image -->

Figure 28. Driver Voltage Measurement over Common-Mode Voltage Range

<!-- image -->

Figure 29. Driver Propagation Delay

<!-- image -->

Figure 30. Driver Enable/Disable

Figure 31. Receiver Propagation Delay

<!-- image -->

Figure 32. Receiver Enable/Disable

<!-- image -->

## TEST CIRCUITS

## SWITCHING CHARACTERISTICS

<!-- image -->

Figure 33. Driver Propagation Delay, Rise/Fall Timing

Figure 35. Driver Enable/Disable Timing

<!-- image -->

<!-- image -->

Figure 36. Receiver Enable/Disable Timing

<!-- image -->

## THEORY OF OPERATION

## RS-485 WITH ADDED DO-160G EMC ROBUSTNESS

The ADM2795E-EP is a 3V to 5.5V RS-485 transceiver with added robustness that reduces system failures when operating in harsh application environments such as military and aerospace (MILA) avionics for sensors, actuators, and engine control.

Lightning strikes to jet airliners are common, about once every 1000 flight hours. The DO-160G standard, Environmental Conditions and Test Procedures for Airborne Equipment , is a standard for the environmental testing of avionics hardware. Many airplane manufacturers specify DO-160G Section 22, lightning induced transient susceptibility, as a requirement for critical systems, like guidance, radars, communications, engine control, and heat and air controls. Aircraft radome, wing tips, fin tips, nacelles, and landing gear are areas most likely to be hit by lightning strikes.

The ADM2795E-EP integrates fully certified DO-160G EMC protection on the RS-485 bus pins, with Section 22 lightning protection. The ADM2795E-EP also provides Section 25 ±15kV ESD air discharge protection. For Section 22 lightning, the ADM2795E-EP provides protection against Waveform 3, Waveform 4/Waveform 1, and Waveform 5A to Level 4 using 33Ω or 47Ω current limiting resistors to GND 2 , or to Level 4 across the isolation barrier to GND1.

## CERTIFIED DO-160G EMC PROTECTION

Table 11 details the open circuit voltage (V OC ) and short-circuit current (I SC ) as specified in the DO-160G Section 22 lightning induced transient susceptibility standard for Waveform 3, Waveform 4/Waveform 1, and Waveform 5A for pin injection testing. The peak currents for the DO-160G Level 4 tests are much greater than standard industrial surge IEC 61000-4-5 peak currents. The waveform shape and rise/decay times for the DO-160G standard are significantly longer than those specified by the IEC 61000-4-5 standard, as shown in Figure 37. Due to the high amounts of energy associated with the DO-160G Section 22 lightning standard, the ADM2795E-EP was tested using external 33Ω or 47Ω A pin and B pin bus current limiting resistors for testing to GND 2 . These resistors were required in addition to the ADM2795E-EP integrated EMC protection circuitry. However, when testing to GND 1 , no current limiting resistors are required. The ADM2795E-EP i Coupler isolation technology protects the device in the presence of these extreme transients.

Figure 37. DO-160G Section 22 Waveform 1 and Waveform 5A, and IEC61000-4-5 Surge Waveform

<!-- image -->

## DO-160G ADM2795E-EP TEST DETAILS

Figure 38 and Figure 39 show the Waveform 3 test setup coupling/decoupling network (CDN) and the Waveform 5A, Waveform 4/Waveform 1 CDN, respectively. For testing to RS -485 bus side, GND2, an additional 33Ω or 47Ω current limiting resistance is added on both A and B bus pins. DO-160G Section 22 testing is performed on one pin at a time. The test is not performed in common mode. Table 12 and Table 13 show a summary of the ADM2795E-EP certified test results.

Table 11. DO-160G Section 22 Pin Injection Level 4 and Level 3 Compared to IEC 61000-4-5 Lightning Level 4 and Level 3

|   Level | DO-160G Waveform 3   | DO-160G Waveform 4/Waveform 1   | DO-160G Waveform 5A   | IEC 61000-4-5   |
|---------|----------------------|---------------------------------|-----------------------|-----------------|
|       4 | 1500V, 60A           | 750V, 150A                      | 750V, 750A            | 4000V, 49A      |
|       3 | 600V, 24A            | 300V, 60A                       | 300V, 300A            | 2000V, 24.5A    |

## Table 12. DO-160G Section 22 Pin Injection Level 4 Certified Test Results

| Testing to GND x   | Current Limiting Resistor   | DO-160 Waveform 3; 1500V, 60A   | DO-160 Waveform 4/ Waveform 1; 750V, 150A   | DO-160 Waveform 5A; 750V ,750A   |
|--------------------|-----------------------------|---------------------------------|---------------------------------------------|----------------------------------|
| GND 1              | None                        | Pass                            | Pass                                        | Pass                             |
| GND 2              | 47Ω or 33Ω                  | Pass with 47Ω                   | Pass with 33Ω                               | Pass with 33Ω                    |

Table 13. DO-160G Section 22 Pin Injection Level 3 Certified Test Results

| Testing to GND x   | Current Limiting Resistor   | DO-160 Waveform 3; 600V, 24A   | DO-160 Waveform 4/ Waveform 1; 300V, 60A   | DO-160 Waveform 5A; 300V ,300A   |
|--------------------|-----------------------------|--------------------------------|--------------------------------------------|----------------------------------|
| GND 1              | None                        | Pass                           | Pass                                       | Pass                             |
| GND 2              | 33Ω                         | Pass                           | Pass                                       | Pass                             |

## THEORY OF OPERATION

Figure 38. DO-160G Section 22 Waveform 3 Test Setup CDN

<!-- image -->

Figure 39. DO-160G Section 22 Waveform 5A, Waveform 4/Waveform 1 Test Setup CDN

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

CONTROLLING DIMENSIONS ARE IN MILLIMETERS; INCH DIMENSIONS (IN PARENTHESES) ARE ROUNDED-OFF MILLIMETER EQUIVALENTS FOR REFERENCE ONLY AND ARE NOT APPROPRIATE FOR USE IN DESIGN. COMPLIANT TO JEDEC STANDARDS MS-013-AA

Figure 40. 16-Lead Standard Small Outline Package [SOIC\_W] Wide Body (RW-16) Dimensions shown in millimeters and (inches)

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                                      | Packing Quantity   | Package Option   |
|--------------------|---------------------|----------------------------------------------------------|--------------------|------------------|
| ADM2795ETRWZ-EP    | -55°C to +125°C     | 16-Lead Standard Small Outline Package [SOIC_W]          | Tube, 47           | RW-16            |
| ADM2795ETRWZ-EP-R7 | -55°C to +125°C     | 16-Lead Standard Small Outline Package [SOIC_W], 7' Reel | Reel, 400          | RW-16            |

## EVALUATION BOARDS

| Model 1           | Description      |
|-------------------|------------------|
| EVAL-ADM2795EEPBZ | Evaluation Board |

- 1 Z = RoHS Compliant Part.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.

03-27-2007-B