<!-- lastmod 2025-02-24 -->
<!-- image -->

## Enhanced Product

## FEATURES

4 A peak output current

Precise timing characteristics

60 ns maximum isolator and driver propagation delay

5 ns maximum channel to channel matching High junction temperature operation: 125°C

3.3 V to 5 V input logic

7.6 V to 18 V output drive

Undervoltage lockout (UVLO) at 7.0 V V DD2

Thermal shutdown protection at &gt;150°C

Default low output

High frequency operation: dc to 1 MHz CMOS input logic levels

High common-mode transient immunity: 25 kV/µs

## Safety and regulatory approvals

UL recognition

2500 V rms for 1 minute per UL 1577 VDE certificate of conformity (pending) DIN V VDE V 0884-10 (VDE V 0884-10):2006-12 = 560 V peak

Small footprint and low profile 4.9 mm × 6 mm × 1.55 mm

CSA Component Acceptance Notice 5A (pending) VIORM Narrow-body, RoHS compliant, 8-lead SOIC

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard) Military temperature range: -55°C to +125°C Controlled manufacturing baseline 1 assembly/test site 1 fabrication site Enhanced product change notification

Qualification data available on request

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## Document Feedback

## Isolated, 4 A Dual-Channel Gate Driver

ADuM3221-EP

## APPLICATIONS

Isolated synchronous dc-to-dc converters MOSFET/IGBT gate drivers

## GENERAL DESCRIPTION

The ADuM3221-EP 1 is an isolated, 4 A dual-channel gate driver based on the Analog Devices, Inc., i Coupler® technology. Combining high speed CMOS and monolithic transformer technology, this isolation component provides outstanding performance characteristics superior to the alternatives, such as the combination of pulse transformers and gate drivers.

The ADuM3221-EP provides digital isolation in two independent isolation channels. It has a maximum propagation delay of 60 ns and 5 ns channel to channel matching. In comparison to gate drivers that employ high voltage level translation methodologies, the ADuM3221-EP offers the benefit of true, galvanic isolation between the input and each output, enabling voltage translation across the isolation barrier. The ADuM3221-EP allows both outputs to be on at the same time. This device offers a default output low characteristic as required for gate drive applications.

The ADuM3221-EP operates with an input supply voltage ranging from 3.0 V to 5.5 V, providing compatibility with lower voltage systems. The outputs of the ADuM3221-EP can be operated at supply voltages from 7.6 V to 18 V.

The junction temperature of the ADuM3221-EP is specified from -55°C to +125°C.

Additional application and technical information can be found in the ADuM3221 data sheet.

## ADuM3221-EP

## TABLE OF CONTENTS

| Features ..............................................................................................   |
|-----------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................                    |
| Applications.......................................................................................       |
| General Description.........................................................................              |
| Functional Block Diagram ..............................................................                   |
| Revision History ...............................................................................          |
| Specifications.....................................................................................       |
| Electrical Characteristics-5V Operation................................                                   |
| Electrical Characteristics-3.3 V Operation ............................                                   |
| Package Characteristics ...............................................................                   |
| Regulatory Information...............................................................                     |

## REVISION HISTORY

7/2016-Revision 0: Initial Version

| Insulation and Safety Related Specifications .............................5                      |
|--------------------------------------------------------------------------------------------------|
| DINVVDEV0884-10 (VDEV 0884-10) Insulation                                                        |
| Characteristics ...............................................................................6 |
| Recommended Operating Conditions .......................................6                        |
| Absolute Maximum Ratings ............................................................7           |
| ESD Caution...................................................................................7  |
| Pin Configuration and Function Descriptions..............................8                       |
| Typical Performance Characteristics ..............................................9              |
| Outline Dimensions....................................................................... 12     |
| Ordering Guide .......................................................................... 12     |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-5 V OPERATION

All voltages are relative to their respective ground. 4.5 V ≤ V DD1 ≤ 5.5 V , 7.6 V ≤ V DD2 ≤ 18 V, unless stated otherwise. All minimum/ maximum specifications apply over T J = -55°C to +125°C. All typical specifications are at T J = 25°C, V DD1 = 5 V, V DD2 = 10 V. Switching specifications are tested with CMOS signal levels.

## Table 1.

| Parameter                                   | Symbol              | Min         | Typ   | Max         | Unit    | Test Conditions/Comments                                            |
|---------------------------------------------|---------------------|-------------|-------|-------------|---------|---------------------------------------------------------------------|
| DC SPECIFICATIONS                           |                     |             |       |             |         |                                                                     |
| Input SupplyCurrent, TwoChannels, Quiescent | I DDI(Q)            |             | 1.2   | 1.5         | mA      |                                                                     |
| OutputSupplyCurrent, TwoChannels, Quiescent | I DDO(Q)            |             | 4.7   | 10          | mA      |                                                                     |
| Total Supply Current, Two Channels 1        |                     |             |       |             |         |                                                                     |
| V DD1 Supply Current                        | I DD1(Q)            |             | 1.4   | 1.7         | mA      | DC to 1 MHzlogic signal frequency DC to 1 MHzlogic signal frequency |
| V DD2 Supply Current                        | I DD2(Q)            |             | 11    | 17          | mA      |                                                                     |
| Input Currents                              | I IA , I IB         | -10         | +0.01 | +10         | µA      | 0 V ≤ V IA , V IB ≤ V DD1                                           |
| Logic High Input Threshold                  | V IH                | 0.7 × V DD1 |       |             | V V     |                                                                     |
| Logic Low Input Threshold                   | V IL V OAH , V OBH  | V DD2 - 0.1 | V DD2 | 0.3 × V DD1 | V       |                                                                     |
| Logic High Output Voltages                  |                     |             |       |             |         | I Ox 2 = -20 mA, V Ix = V IxH 3                                     |
| Logic Low Output Voltages                   | V OAL , V OBL       |             | 0.0   | 0.15        | V       | I Ox 2 = +20 mA, V Ix = V IxL 4                                     |
| Undervoltage Lockout, V DD2 Supply          |                     |             |       |             |         |                                                                     |
| Positive Going Threshold                    | V DD2UV+            |             | 7.0   | 7.5         | V       |                                                                     |
| Negative Going Threshold                    | V DD2UV-            | 6.0         | 6.5   |             | V       |                                                                     |
| Hysteresis                                  | V DD2UVH            |             | 0.5   |             | V       |                                                                     |
| Output Short-Circuit Pulsed Current 5       | I OA(SC) , I OB(SC) | 2.0         | 4.0   |             | A       | V DD2 = 10 V                                                        |
| Output Pulsed Source Resistance             | R OA , R OB         | 0.3         | 1.3   | 3.0         | Ω       | V DD2 = 10 V                                                        |
| Output Pulsed Sink Resistance               | R OA , R OB         | 0.3         | 0.9   | 3.0         | Ω       | V DD2 = 10 V                                                        |
| SWITCHING SPECIFICATIONS                    |                     |             |       |             |         |                                                                     |
| Pulse Width 6                               | PW                  | 50          |       |             | ns      | C L = 2 nF, V DD2 = 10 V                                            |
| Data Rate 7                                 |                     |             |       | 1           | MHz     | C L = 2 nF, V DD2 = 10 V                                            |
| Propagation Delay 8                         | t DLH , t DHL       | 35          | 45    | 60          | ns      | C L = 2 nF, V DD2 = 10 V                                            |
|                                             | t DLH , t DHL       | 36          | 50    | 68          | ns      | C L = 2 nF, V DD2 = 7.6 V                                           |
| Propagation Delay Skew 9                    | t PSK               |             |       | 12          | ns      | C L = 2 nF, V DD2 = 10 V                                            |
| Channel to Channel Matching 10              | t PSKCD             |             | 1     | 5           | ns      | C L = 2 nF, V DD2 = 10 V                                            |
|                                             | t PSKCD             |             | 1     | 7           | ns      | C L = 2 nF, V DD2 = 7.6 V                                           |
| Output Rise/Fall Time (10% to 90%)          | t R /t F            | 14          | 20    | 25          | ns      | C L = 2 nF, V DD2 = 10 V                                            |
| Dynamic Input Supply Current per Channel    | I DDI(D)            |             | 0.05  |             | mA/Mbps | V DD2 = 10 V                                                        |
| Dynamic Output Supply Current per Channel   | I DDO(D)            |             | 1.5   |             | mA/Mbps | V DD2 = 10 V                                                        |
| Refresh Rate                                | f r                 |             | 1.2   |             | Mbps    |                                                                     |

## ELECTRICAL CHARACTERISTICS-3.3 V OPERATION

All voltages are relative to their respective ground. 3.0 V ≤ V DD1 ≤ 3.6 V , 7.6 V ≤ V DD2 ≤ 18 V, unless stated otherwise. All minimum/ maximum specifications apply over T J = -55°C to +125°C. All typical specifications are at T J = 25°C, V DD1 = 3.3 V , V DD2 = 10 V. Switching specifications are tested with CMOS signal levels.

## Table 2.

| Parameter                                      | Symbol              | Min         | Typ   | Max         | Unit    | Test Conditions/Comments          |
|------------------------------------------------|---------------------|-------------|-------|-------------|---------|-----------------------------------|
| DC SPECIFICATIONS                              |                     |             |       |             |         |                                   |
| Input SupplyCurrent, TwoChannels, Quiescent    | I DDI(Q)            |             | 0.7   | 1.0         | mA      |                                   |
| Output Supply Current, Two Channels, Quiescent | I DDO(Q)            |             | 4.7   | 10          | mA      |                                   |
| Total Supply Current, Two Channels 1 DC to1MHz |                     |             |       |             |         |                                   |
| V DD1 Supply Current                           | I DD1(Q)            |             | 0.8   | 1.0         | mA      | DC to 1 MHzlogic signal frequency |
| V DD2 Supply Current                           | I DD2(Q)            |             | 11    | 17          | mA      | DC to 1 MHzlogic signal frequency |
| Input Currents                                 | I IA , I IB         | -10         | +0.01 | +10         | µA      | 0 V ≤ V IA , V IB ≤ V DD1         |
| Logic High Input Threshold                     | V IH                | 0.7 × V DD1 |       |             | V       |                                   |
| Logic Low Input Threshold                      | V IL                |             |       | 0.3 × V DD1 | V       |                                   |
| Logic High Output Voltages                     | V OAH , V OBH       | V DD2 - 0.1 | V DD2 |             | V       | I Ox 2 = -20 mA, V Ix = V IxH 3   |
| Logic Low Output Voltages                      | V OAL , V OBL       |             | 0.0   | 0.15        | V       | I Ox 2 = +20 mA, V Ix = V IxL 4   |
| Undervoltage Lockout, V DD2 Supply             |                     |             |       |             |         |                                   |
| Positive Going Threshold                       | V DD2UV+            |             | 7.0   | 7.5         | V       |                                   |
| Negative Going Threshold                       | V DD2UV-            | 6.0         | 6.5   |             | V       |                                   |
| Hysteresis                                     | V DD2UVH            |             | 0.5   |             | V       |                                   |
| Output Short-Circuit Pulsed Current 5          | I OA(SC) , I OB(SC) | 2.0         | 4.0   |             | A       | V DD2 = 10 V                      |
| Output Pulsed Source Resistance                | R OA , R OB         | 0.3         | 1.3   | 3.0         | Ω       | V DD2 = 10 V                      |
| Output Pulsed Sink Resistance                  | R OA , R OB         | 0.3         | 0.9   | 3.0         | Ω       | V DD2 = 10 V                      |
| SWITCHING SPECIFICATIONS                       |                     |             |       |             |         |                                   |
| Pulse Width 6                                  | PW                  | 50          |       |             | ns      | C L = 2 nF, V DD2 = 10 V          |
| Data Rate 7                                    |                     |             |       | 1           | MHz     | C L = 2 nF, V DD2 = 10 V          |
| Propagation Delay 8                            | t DLH , t DHL       | 36          | 48    | 62          | ns      | C L = 2 nF, V DD2 = 10 V          |
|                                                | t DLH , t DHL       | 37          | 53    | 72          | ns      | C L = 2 nF, V DD2 = 7.6 V         |
| Propagation Delay Skew 9                       | t PSK               |             |       | 12          | ns      | C L = 2 nF, V DD2 = 10 V          |
| Channel to Channel Matching 10                 | t PSKCD             |             | 1     | 5           | ns      | C L = 2 nF, V DD2 = 10 V          |
| Output Rise/Fall Time (10% to 90%)             | t R /t F            | 14          | 20    | 25          | ns      | C L = 2 nF, V DD2 = 10 V          |
|                                                | t R /t F            | 14          | 22    | 28          | ns      | C L = 2 nF, V DD2 = 7.6 V         |
| Dynamic Input Supply Current per Channel       | I DDI(D)            |             | 0.025 |             | mA/Mbps | V DD2 = 10 V                      |
| Dynamic Output Supply Current per Channel      | I DDO(D)            |             | 1.5   |             | mA/Mbps | V DD2 = 10 V                      |
| Refresh Rate                                   | f r                 |             | 1.1   |             | Mbps    |                                   |

## PACKAGE CHARACTERISTICS

Table 3.

| Parameter                                      | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                            |
|------------------------------------------------|----------|-------|-------|-------|--------|-----------------------------------------------------|
| Resistance (Input to Output) 1                 | R I-O    |       | 10 12 |       | Ω      |                                                     |
| Capacitance (Input to Output) 1                | C I-O    |       | 1.0   |       | pF     | f = 1MHz                                            |
| Input Capacitance                              | C I      |       | 4.0   |       | pF     |                                                     |
| IC Junction to Case Thermal Resistance, Side 1 | θ JCI    |       | 46    |       | °C/W   | Thermocouple located at center of package underside |
| IC Junction to Case Thermal Resistance, Side 2 | θ JCO    |       | 41    |       | °C/W   | Thermocouple located at center of package underside |
| IC Junction to AmbientThermal Resistance       | θ JA     |       | 85    |       | °C/W   | Thermocouple located at center of package underside |

## REGULATORY INFORMATION

The ADuM3221-EP is approved by the organizations listed in Table 4.

## Table 4.

| UL                                                                              | CSA(Pending)                                                                                                                                                                                              | VDE(Pending)                                                     |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Recognized Under UL 1577 Component Recognition Program 1 Single/Basic 2500V rms | Approved under CSA Component Acceptance Notice 5A                                                                                                                                                         | Certified according to DINVVDEV 0884-10 (VDEV 0884-10):2006-12 2 |
| Isolation Voltage                                                               | Basic insulation per CSA 60950-1-03 and IEC 60950-1, 400V rms (566V peak) maximum working voltage Functional insulation per CSA 60950-1-03 and IEC 60950-1, 800V rms (1131V peak) maximum working voltage | Reinforced insulation, 560V peak                                 |
| File E214100                                                                    | File 205078                                                                                                                                                                                               | File 2471900-4880-0001                                           |

## INSULATION AND SAFETY RELATED SPECIFICATIONS

## Table 5.

| Parameter                                        | Symbol   | Value     | Unit   | Test Conditions/Comments                                                             |
|--------------------------------------------------|----------|-----------|--------|--------------------------------------------------------------------------------------|
| Rated Dielectric Insulation Voltage              |          | 2500      | V rms  | 1 minute duration                                                                    |
| Minimum External Air Gap (Clearance)             | L(I01)   | 4.90 min  | mm     | Measured from input terminals to output terminals, shortest distance through air     |
| Minimum External Tracking (Creepage)             | L(I02)   | 4.01 min  | mm     | Measured from input terminals to output terminals, shortest distance path along body |
| Minimum Internal Gap (Internal Clearance)        |          | 0.017 min | mm     | Insulation distance through insulation                                               |
| Tracking Resistance (Comparative Tracking Index) | CTI      | >175      | V      | DIN IEC 112/VDE 0303 Part 1                                                          |
| Isolation Group                                  |          | IIIa      |        | Material Group (DINVDE 0110, 1/89, Table 1)                                          |

## DIN V VDE V 0884-10 (VDE V 0884-10) INSULATION CHARACTERISTICS

These isolators are suitable for reinforced isolation only within the safety limit data. Maintenance of the safety data is ensured by protective circuits. The asterisk (*) marking on the package denotes DIN V VDE V 0884-10 approval for a 560 V peak working voltage.

## Table 6.

Figure 2. Thermal Derating Curve; Dependence of Safety Limiting Values on Case Temperature, per DIN V VDE V 0884-10 (Safety Limiting Current Is Defined as the Average Current at Maximum V DD )

| Description                                                                                                                                                                                                                                              | Test Conditions/Comments                                                                                              | Symbol      | Characteristic                       | Unit          |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-------------|--------------------------------------|---------------|
| Installation Classification per DINVDE 0110 For Rated Mains Voltage ≤ 150V rms For Rated Mains Voltage ≤ 300V rms For Rated Mains Voltage ≤ 400V rms Climatic Classification Pollution Degree per DINVDE 0110, Table 1 MaximumWorking Insulation Voltage |                                                                                                                       |             | I to IV I to III I to II 40/105/21 2 |               |
| Input to Output Test Voltage, Method B1                                                                                                                                                                                                                  | V IORM × 1.875=V PR , 100% production test, t m = 1 sec, partial discharge < 5 pC                                     | V IORM V PR | 560 1050                             | V peak V peak |
| Input to Output Test Voltage, Method A After Environmental Tests Subgroup 1                                                                                                                                                                              | V IORM × 1.6=V PR , t m = 60 sec, partial discharge < 5 pC V IORM × 1.2=V PR , t m = 60 sec, partial discharge < 5 pC | V PR V      | 896 672                              | V peak V peak |
| After Input and/or Safety Tests Subgroup 2 and Subgroup 3 Highest Allowable Overvoltage Safety Limiting Values                                                                                                                                           | Transient overvoltage, t TR = 10 sec Maximum value allowed in the event of a failure                                  | PR V TR     | 4000                                 | V peak        |
| Case Temperature                                                                                                                                                                                                                                         | (see Figure 2)                                                                                                        | T S         | 150                                  | °C            |
| Side 1 Current                                                                                                                                                                                                                                           |                                                                                                                       | I           | 160                                  | mA            |
|                                                                                                                                                                                                                                                          |                                                                                                                       | S1          |                                      |               |
| Side 2 Current                                                                                                                                                                                                                                           |                                                                                                                       | I S2        | 47                                   | mA            |
| Insulation Resistance at T S                                                                                                                                                                                                                             | V IO = 500V                                                                                                           | R S         | >10 9                                | Ω             |

<!-- image -->

## RECOMMENDED OPERATING CONDITIONS

| Table 7. Parameter                             | Symbol      | Min     | Max    | Unit   |
|------------------------------------------------|-------------|---------|--------|--------|
| Operating Junction Temperature                 | T J         | -55     | +125   | °C     |
| Supply Voltages 1                              | V DD1 V DD2 | 3.0 7.6 | 5.5 18 | V V    |
| V DD1 Rise Time                                | t VDD1      |         | 1      | V/µs   |
| Common-ModeTransient Immunity, Input to Output |             | -25     | +25    | kV/µs  |
| Input Signal Rise and Fall Times               |             |         | 1      | ms     |

## ABSOLUTE MAXIMUM RATINGS

Ambient temperature = 25°C, unless otherwise noted.

## Table 8.

| Parameter                               | Rating                   |
|-----------------------------------------|--------------------------|
| Storage Temperature (T ST )             | -55°C to +150°C          |
| Operating Temperature (T J )            | -55°C to +150°C          |
| Supply Voltage Ranges 1                 |                          |
| V DD1                                   | -0.5V to +7.0V           |
| V DD2                                   | -0.5V to +20V            |
| Input Voltage Range (V IA ,V IB ) 1, 2  | -0.5V toV DDI + 0.5V     |
| Output Voltage Range (V OA ,V OB ) 1, 2 | -0.5V toV DDO + 0.5V     |
| Average Output Current per Pin (I O ) 3 | -23mAto+23mA             |
| Common-ModeTransients, (CM H ,CM L ) 4  | -100 kV/µs to +100 kV/µs |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Table 9. Maximum Continuous Working Voltage 1

| Parameter          |   Max | Unit   | Constraint              |
|--------------------|-------|--------|-------------------------|
| AC Bipolar Voltage |   565 | V peak | 50-year minimumlifetime |
| ACUnipolar Voltage |  1131 | V peak | 50-year minimumlifetime |
| DC Voltage         |  1131 | V peak | 50-year minimumlifetime |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Table 10. Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                   |
|-----------|------------|---------------------------------------------------------------|
|         1 | V DD1      | Supply Voltage for Isolator Side 1, 3.0V to 5.5 V.            |
|         2 | V IA       | Logic Input A.                                                |
|         3 | V IB       | Logic Input B.                                                |
|         4 | GND 1      | Ground 1. GND 1 is the ground reference for Isolator Side 1.  |
|         5 | GND 2      | Ground 2. GND 2 is the g round reference for Isolator Side 2. |
|         6 | V OB       | Logic Output B.                                               |
|         7 | V OA       | Logic Output A.                                               |
|         8 | V DD2      | Supply Voltage for Isolator Side 2, 7.6V to 18V.              |

Table 11. Truth Table (Positive Logic)

| V IA Input   | V IB Input   | V DD1 State   | V DD2 State   | V OA Output   | V OB Output   | Notes                                                                     |
|--------------|--------------|---------------|---------------|---------------|---------------|---------------------------------------------------------------------------|
| Low          | Low          | Powered       | Powered       | Low           | Low           |                                                                           |
| Low          | High         | Powered       | Powered       | Low           | High          |                                                                           |
| High         | Low          | Powered       | Powered       | High          | Low           |                                                                           |
| High         | High         | Powered       | Powered       | High          | High          |                                                                           |
| Don't care   | Don't care   | Unpowered     | Powered       | Low           | Low           | Outputs return to the input state within 1 µs of V DD1 power restoration. |
| Don't care   | Don't care   | Powered       | Unpowered     | Low           | Low           | Outputs return to the input state within 1 µs of V DD2 power restoration. |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. Output Waveform for 2 nF Load with 10 V Output Supply

<!-- image -->

Figure 5. Output Waveform for 1 nF Load with 10 V Output Supply

<!-- image -->

Figure 6. Output Waveform for 1 nF Load with 5 Ω Series Resistance and 10 V Output Supply

<!-- image -->

Figure 7. Maximum Load; Gate Charge vs. Switching Frequency (RGATE = 1 Ω)

<!-- image -->

14765-016

Figure 9. IDD2 Current vs. Frequency with 2 nF Load

<!-- image -->

<!-- image -->

Figure 10. Propagation Delay vs. Junction Temperature

<!-- image -->

Figure 11. Propagation Delay vs. Input Supply Voltage, V DD2 = 10 V

<!-- image -->

Figure 12. Propagation Delay vs. Output Supply Voltage, V DD1 = 5 V

<!-- image -->

Figure 13. Rise/Fall Time vs. Output Supply Voltage

Figure 14. Propagation Delay Channel to Channel Matching vs. Output Supply Voltage

<!-- image -->

Figure 15. Propagation Delay Channel to Channel Matching vs. Junction Temperature, V DD2 = 10 V

<!-- image -->

Figure 16. Output Source Resistance (R OUT ) vs. Output Supply Voltage

<!-- image -->

Figure 17. Maximum Source/Sink Current vs. Output Supply Voltage

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1            |   No. of Inputs,V DD1 Side |   Maximum Data Rate (MHz) |   Maximum Propagation Delay, 5 V(ns) |   MinimumV DD2 Operating Voltage (V) | Junction Temperature Range   | Package Description   | Package Option   |
|--------------------|----------------------------|---------------------------|--------------------------------------|--------------------------------------|------------------------------|-----------------------|------------------|
| ADuM3221TRZ-EP     |                          2 |                         1 |                                   60 |                                  7.6 | -55°C to +125°C              | 8-Lead SOIC_N         | R-8              |
| ADuM3221TRZ-EP-RL7 |                          2 |                         1 |                                   60 |                                  7.6 | -55°C to +125°C              | 8-Lead SOIC_N         | R-8              |

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MS-012-AA

CONTROLLING DIMENSIONS ARE IN MILLIMETERS; INCH DIMENSIONS (IN PARENTHESES) ARE ROUNDED-OFF MILLIMETER EQUIVALENTS FOR REFERENCE ONLY AND ARE NOT APPROPRIATE FOR USE IN DESIGN.

Figure 18. 8-Lead Standard Small Outline Package [SOIC\_N] Narrow Body (R-8)

Dimensions shown in millimeters and (inches)

<!-- image -->

012407-A