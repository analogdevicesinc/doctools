<!-- lastmod 2025-01-27 -->
<!-- image -->

## FEATURES

- High common-mode transient immunity: 100 kV/µs
- High robustness to radiated and conducted noise
- Low propagation delay
- 13 ns maximum for 5 V operation
- 15 ns maximum for 1.8 V operation
- 150 Mbps maximum data rate
- Safety and regulatory approvals
- UL 1577 ► VISO = 5000 V rms for 1 minute
- IEC/EN/CSA 60950-1
- IEC/CSA 60601-1
- IEC/CSA 61010-1
- CQC GB 4943.1 (pending)
- DIN EN IEC 60747-17 (VDE 0884-17)
- VIORM = 849 V peak
- Low dynamic power consumption
- 1.8 V to 5 V level translation
- High temperature operation: 125°C maximum
- Fail-safe high or low options
- 8-lead, RoHS-compliant, SOIC\_IC package

## APPLICATIONS

- General-purpose single-channel isolation
- Industrial field bus isolation

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

1 Protected by U.S. Patents 5,952,849; 6,873,065; 6,903,578; and 7,075,329. Other patents are pending.

Rev. A

DOCUMENT FEEDBACK

## 3 kV rms, Single-Channel Digital Isolator

## GENERAL DESCRIPTION

The ADuM210N 1  is a single-channel digital isolator based on Analog Devices, Inc., i Coupler ®  technology. Combining high speed, complementary metal-oxide semiconductor (CMOS) and monolithic air core transformer technology, this isolation component provides outstanding performance characteristics, superior to alternatives such as optocoupler devices and other integrated couplers. The maximum propagation delay is 13 ns with a pulse width distortion of less than 3 ns at 5 V operation.

The ADuM210N supports data rates as high as 150 Mbps with a withstand voltage rating of 5.0 kV rms (see the Ordering Guide). The device operates with the supply voltage on either side ranging from 1.8 V to 5 V, providing compatibility with lower voltage systems as well as enabling voltage translation functionality across the isolation barrier.

Unlike other optocoupler alternatives, dc correctness is ensured in the absence of input logic transitions. Two different fail-safe options are available, in which the outputs transition to a pre-determined state when the input power supply is not applied or the inputs are disabled.

## TABLE OF CONTENTS

| Features................................................................ 1                                                                                                                                                                                    | ESD Caution.....................................................10                                                                                                                                                                                            |                                                                                                                                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications...........................................................                                                                                                                                                                                       | 1                                                                                                                                                                                                                                                             | Maximum Continuous Working Voltage........... 10                                                                                                                                                                                                              |
| General Description...............................................1                                                                                                                                                                                           |                                                                                                                                                                                                                                                               | Truth Table....................................................... 10                                                                                                                                                                                         |
| Functional Block Diagram......................................1                                                                                                                                                                                               | Pin                                                                                                                                                                                                                                                           | Configuration and Function Descriptions.......11                                                                                                                                                                                                              |
| Specifications........................................................ 3                                                                                                                                                                                      | Typical Performance                                                                                                                                                                                                                                           | Characteristics...................12                                                                                                                                                                                                                          |
| Electrical Characteristics-5 V Operation..........3                                                                                                                                                                                                           |                                                                                                                                                                                                                                                               | Applications Information...................................... 13                                                                                                                                                                                             |
| Electrical Characteristics-3.3 V Operation.......4                                                                                                                                                                                                            | Overview..........................................................                                                                                                                                                                                            | 13                                                                                                                                                                                                                                                            |
| Electrical Characteristics-2.5 V Operation.......5                                                                                                                                                                                                            | PCB                                                                                                                                                                                                                                                           | Layout......................................................13                                                                                                                                                                                                |
| Electrical Characteristics-1.8 V Operation.......6                                                                                                                                                                                                            | Propagation                                                                                                                                                                                                                                                   | Delay Related Parameters...........14                                                                                                                                                                                                                         |
| Insulation and Safety Related Specifications.....7                                                                                                                                                                                                            | Jitter                                                                                                                                                                                                                                                        | Measurement...........................................14                                                                                                                                                                                                      |
| Package Characteristics.....................................8                                                                                                                                                                                                 | Insulation                                                                                                                                                                                                                                                    | Lifetime............................................ 14                                                                                                                                                                                                       |
| Regulatory Information.......................................8                                                                                                                                                                                                | Outline Dimensions.............................................                                                                                                                                                                                               | 16                                                                                                                                                                                                                                                            |
| DIN EN IEC 60747-17 (VDE 0884-17)                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                               | Ordering Guide.................................................16                                                                                                                                                                                             |
| Insulation Characteristics.................................9                                                                                                                                                                                                  |                                                                                                                                                                                                                                                               | Number of Inputs, Withstand Voltage                                                                                                                                                                                                                           |
| Recommended Operating Conditions................9                                                                                                                                                                                                             |                                                                                                                                                                                                                                                               | Rating, and Fail-Safe Output State Options...16                                                                                                                                                                                                               |
| Absolute Maximum Ratings.................................10                                                                                                                                                                                                   |                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                               |
| REVISION HISTORY                                                                                                                                                                                                                                              | REVISION HISTORY                                                                                                                                                                                                                                              | REVISION HISTORY                                                                                                                                                                                                                                              |
| 12/2024-Rev. 0 to Rev. A Changes to Features Section.......................................................................................................................... 1                                                                              | 12/2024-Rev. 0 to Rev. A Changes to Features Section.......................................................................................................................... 1                                                                              | 12/2024-Rev. 0 to Rev. A Changes to Features Section.......................................................................................................................... 1                                                                              |
| Changes to Table 9..........................................................................................................................................7                                                                                                 | Changes to Table 9..........................................................................................................................................7                                                                                                 | Changes to Table 9..........................................................................................................................................7                                                                                                 |
| Changed DIN V VDE V 0884-10 (VDE V 0884-10) Insulation Characteristics Section to DIN EN IEC                                                                                                                                                                  | Changed DIN V VDE V 0884-10 (VDE V 0884-10) Insulation Characteristics Section to DIN EN IEC                                                                                                                                                                  | Changed DIN V VDE V 0884-10 (VDE V 0884-10) Insulation Characteristics Section to DIN EN IEC                                                                                                                                                                  |
| 60747-17 (VDE 0884-17) Insulation Characteristics Section.........................................................................9                                                                                                                           | 60747-17 (VDE 0884-17) Insulation Characteristics Section.........................................................................9                                                                                                                           | 60747-17 (VDE 0884-17) Insulation Characteristics Section.........................................................................9                                                                                                                           |
| Changes to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section, Table 12, and Figure 2 Caption............................................................................................................................................ 9 | Changes to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section, Table 12, and Figure 2 Caption............................................................................................................................................ 9 | Changes to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section, Table 12, and Figure 2 Caption............................................................................................................................................ 9 |
| Changes to Table 15......................................................................................................................................10                                                                                                   | Changes to Table 15......................................................................................................................................10                                                                                                   | Changes to Table 15......................................................................................................................................10                                                                                                   |
| Changes to Calculation and Use of Parameters Example Section................................................................15 Added Number of Inputs, Withstand Voltage Rating, and Fail-Safe Output State Options............................16             | Changes to Calculation and Use of Parameters Example Section................................................................15 Added Number of Inputs, Withstand Voltage Rating, and Fail-Safe Output State Options............................16             | Changes to Calculation and Use of Parameters Example Section................................................................15 Added Number of Inputs, Withstand Voltage Rating, and Fail-Safe Output State Options............................16             |

4/2016-Revision 0: Initial Version

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-5 V OPERATION

All typical specifications are at T A = 25°C, V DD1 = V DD2 = 5 V. Minimum/maximum specifications apply over the entire recommended operation range of 4.5 V ≤ V DD1 ≤ 5.5 V, 4.5 V ≤ V DD2 ≤ 5.5 V, and -40°C ≤ T A ≤ +125°C, unless otherwise noted. Switching specifications are tested with CL  = 15 pF and CMOS signal levels, unless otherwise noted. Supply currents are specified with 50% duty cycle signals.

Table 1.

| Parameter                        | Symbol            | Min         | Typ         | Max         | Unit    | Test Conditions/Comments                                         |
|----------------------------------|-------------------|-------------|-------------|-------------|---------|------------------------------------------------------------------|
| SWITCHING SPECIFICATIONS         |                   |             |             |             |         |                                                                  |
| Pulse Width                      | PW                | 6.6         |             |             | ns      | Within pulse width distortion (PWD) limit                        |
| Data Rate                        |                   | 150         |             |             | Mbps    | Within PWD limit                                                 |
| Propagation Delay                | t PHL , t PLH     | 4.8         | 7.2         | 13          | ns      | 50% input to 50% output                                          |
| Pulse Width Distortion           | PWD               |             | 0.5         | 3           | ns      | &#124;t PLH - t PHL &#124;                                       |
| Change vs. Temperature           |                   |             | 1.5         |             | ps/°C   |                                                                  |
| Propagation Delay Skew           | t PSK             |             |             | 6.0         | ns      | Between any two units at the same temperature, voltage, and load |
| Jitter                           |                   |             | 380         |             | ps p-p  | See the Jitter Measurement section                               |
|                                  |                   |             | 55          |             | ps rms  | See the Jitter Measurement section                               |
| DC SPECIFICATIONS                |                   |             |             |             |         |                                                                  |
| Input Threshold                  |                   |             |             |             |         |                                                                  |
| Logic High                       | V IH              | 0.7 × V DD1 |             |             | V       |                                                                  |
| Logic Low                        | V IL              |             |             | 0.3 × V DD1 | V       |                                                                  |
| Output Voltage                   |                   |             |             |             |         |                                                                  |
| Logic High                       | V OH              | V DD2 - 0.1 | V DD2       |             | V       | Output load (I O ) = -20 µA, V I = V IH                          |
|                                  |                   | V DD2 - 0.4 | V DD2 - 0.2 |             | V       | I O = -4 mA, V I = V IH                                          |
| Logic Low                        | V OL              |             | 0.0         | 0.1         | V       | I O = 20 µA, V I = V IL                                          |
|                                  |                   |             | 0.2         | 0.4         | V       | I O = 4 mA, V I = V IL                                           |
| Input Current per Channel        | I I               | -10         | +0.01       | +10         | µA      | 0 V ≤ V I ≤ V DD1                                                |
| Quiescent Supply Current         | I DD1 (Q)         |             | 0.9         | 1.4         | mA      | V I = 0 (N0), 1 (N1) 1                                           |
|                                  | I DD2 (Q)         |             | 1.0         | 1.3         | mA      | V I = 0 (N0), 1 (N1) 1                                           |
|                                  | I DD1 (Q)         |             | 3.6         | 6.0         | mA      | V I = 1 (N0), 0 (N1) 1                                           |
|                                  | I DD2 (Q)         |             | 1.0         | 1.4         | mA      | V I = 1 (N0), 0 (N1) 1                                           |
| Dynamic Supply Current           |                   |             |             |             |         |                                                                  |
| Dynamic Input                    | I DDI (D)         |             | 0.01        |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| Dynamic Output                   | I DDO (D)         |             | 0.02        |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| Undervoltage Lockout             | UVLO              |             |             |             |         |                                                                  |
| Positive V DDx Threshold         | V DDxUV+          |             | 1.6         |             | V       |                                                                  |
| Negative V DDx Threshold         | V DDxUV-          |             | 1.5         |             | V       |                                                                  |
| V DDx Hysteresis                 | V DDxUVH          |             | 0.1         |             | V       |                                                                  |
| AC SPECIFICATIONS                |                   |             |             |             |         |                                                                  |
| Output Rise/Fall Time            | t R /t F          |             | 2.5         |             | ns      | 10% to 90%                                                       |
| Common-Mode Transient Immunity 2 | &#124;CM H &#124; | 75          | 100         |             | kV/µs   | V I = V DD1 , V CM = 1000 V, transient magnitude = 800 V         |
|                                  | &#124;CM L &#124; | 75          | 100         |             | kV/µs   | V I = 0 V, V CM = 1000 V, transient magnitude = 800 V            |

1 N0 indicates the ADuM210N0 models and N1 indicates the ADuM210N1 models. See the Ordering Guide.

2 |CMH | is the maximum common-mode voltage slew rate that can be sustained while maintaining the voltage output (V O ) &gt; 0.8 × V DD2 . |CM L | is the maximum common-mode voltage slew rate that can be sustained while maintaining V O  &gt; 0.8 V. The common-mode voltage slew rates apply to both the rising and falling common-mode voltage edges.

## SPECIFICATIONS

Table 2. Total Supply Current vs. Data Throughput-5 V Operation

|                       |        | 1 Mbps   | 1 Mbps   | 1 Mbps   | 25 Mbps   | 25 Mbps   | 25 Mbps   | 100 Mbps   | 100 Mbps   | 100 Mbps   |      |
|-----------------------|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|------------|------|
| Parameter             | Symbol | Min      | Typ      | Max      | Min       | Typ       | Max       | Min        | Typ        | Max        | Unit |
| SUPPLY CURRENT        |        |          |          |          |           |           |           |            |            |            |      |
| Supply Current Side 1 | I DD1  |          | 2.2      | 3.7      |           | 2.5       | 3.9       |            | 3.6        | 4.9        | mA   |
| Supply Current Side 2 | I DD2  |          | 1.1      | 1.6      |           | 1.6       | 2.3       |            | 3.1        | 4.6        | mA   |

## ELECTRICAL CHARACTERISTICS-3.3 V OPERATION

All typical specifications are at T A = 25°C, V DD1 = V DD2 = 3.3 V. Minimum/maximum specifications apply over the entire recommended operation range: 3.0 V ≤ V DD1 ≤ 3.6 V, 3.0 V ≤ V DD2 ≤ 3.6 V, and -40°C ≤ T A ≤ +125°C, unless otherwise noted. Switching specifications are tested with CL  = 15 pF and CMOS signal levels, unless otherwise noted. Supply currents are specified with 50% duty cycle signals.

Table 3.

| Parameter                         | Symbol        | Min         | Typ       | Max         | Unit    | Test Conditions/Comments                                         |
|-----------------------------------|---------------|-------------|-----------|-------------|---------|------------------------------------------------------------------|
| SWITCHING SPECIFICATIONS          |               |             |           |             |         |                                                                  |
| Pulse Width                       | PW            | 6.6         |           |             | ns      | Within PWD limit                                                 |
| Data Rate                         |               | 150         |           |             | Mbps    | Within PWD limit                                                 |
| Propagation Delay                 | t PHL , t PLH | 4.8         | 6.8       | 14          | ns      | 50% input to 50% output                                          |
| Pulse Width Distortion            | PWD           |             | 0.7       | 3           | ns      | &#124;t PLH - t PHL &#124;                                       |
| Change vs. Temperature            |               |             | 1.5       |             | ps/°C   |                                                                  |
| Propagation Delay Skew            | t PSK         |             |           | 7.0         | ns      | Between any two units at the same temperature, voltage, and load |
| Jitter                            |               |             | 290       |             | ps p-p  | See the Jitter Measurement section                               |
|                                   |               |             | 45        |             | ps rms  | See the Jitter Measurement section                               |
| DC SPECIFICATIONS Input Threshold |               |             |           |             |         |                                                                  |
| Logic High                        | V IH          | 0.7 × V DD1 |           |             | V       |                                                                  |
| Logic Low                         | V IL          |             |           | 0.3 × V DD1 | V       |                                                                  |
| Output Voltage                    |               |             |           |             |         |                                                                  |
| Logic High                        | V OH          | V DD2 - 0.1 | V DD2 0.2 |             | V       | I O = -20 µA, V I = V IH                                         |
|                                   |               | V DD2 - 0.4 | V DD2 -   |             | V       | I O = -2 mA, V I = V IH                                          |
| Logic Low                         | V OL          |             | 0.0       | 0.1         | V       | I O = 20 µA, V I = V IL                                          |
|                                   |               |             | 0.2       | 0.4         | V       | I O = 2 mA, V I = V IL                                           |
| Input Current per Channel         | I I           | -10         | +0.01     | +10         | µA      | 0 V ≤ V I ≤ V DD1                                                |
| Quiescent Supply Current          | I DD1 (Q)     |             | 0.8       | 1.3         | mA      | V I = 0 (N0), 1 (N1) 1                                           |
|                                   | I DD2 (Q)     |             | 0.9       | 1.4         | mA      | V I = 0 (N0), 1 (N1) 1                                           |
|                                   | I DD1 (Q)     |             | 3.6       | 5.8         | mA      | V I = 1 (N0), 0 (N1) 1                                           |
|                                   | I DD2 (Q)     |             | 0.9       | 1.4         | mA      | V I = 1 (N0), 0 (N1) 1                                           |
| Dynamic Supply Current            |               |             |           |             |         |                                                                  |
| Dynamic Input                     | I DDI (D)     |             | 0.01      |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| Dynamic Output                    | I DDO (D)     |             | 0.01      |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| Undervoltage Lockout              | UVLO          |             |           |             |         |                                                                  |
| Positive V DDx Threshold          | V DDxUV+      |             | 1.6       |             | V       |                                                                  |
| Negative V DDx Threshold          | V DDxUV-      |             | 1.5       |             | V       |                                                                  |
| V DDx Hysteresis                  | V DDxUVH      |             | 0.1       |             | V       |                                                                  |
| AC SPECIFICATIONS                 |               |             |           |             |         |                                                                  |
| Output Rise/Fall Time             | t R /t F      |             | 2.5       |             | ns      | 10% to 90%                                                       |

## SPECIFICATIONS

## Table 3. (Continued)

| Parameter                        | Symbol            |   Min |   Typ | Max   | Unit   | Test Conditions/Comments                                 |
|----------------------------------|-------------------|-------|-------|-------|--------|----------------------------------------------------------|
| Common-Mode Transient Immunity 2 | &#124;CM H &#124; |    75 |   100 |       | kV/µs  | V I = V DD1 , V CM = 1000 V, transient magnitude = 800 V |
|                                  | &#124;CM L &#124; |    75 |   100 |       | kV/µs  | V I = 0 V, V CM = 1000 V, transient magnitude = 800 V    |

Table 4. Total Supply Current vs. Data Throughput-3.3 V Operation

|                       |        | 1 Mbps   | 1 Mbps   | 1 Mbps   | 25 Mbps   | 25 Mbps   | 25 Mbps   | 100 Mbps   | 100 Mbps   | 100 Mbps   |      |
|-----------------------|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|------------|------|
| Parameter             | Symbol | Min      | Typ      | Max      | Min       | Typ       | Max       | Min        | Typ        | Max        | Unit |
| SUPPLY CURRENT        |        |          |          |          |           |           |           |            |            |            |      |
| Supply Current Side 1 | I DD1  |          | 2.2      | 3.5      |           | 2.4       | 3.6       |            | 3.2        | 4.6        | mA   |
| Supply Current Side 2 | I DD2  |          | 0.9      | 1.5      |           | 1.4       | 2.0       |            | 2.8        | 4.3        | mA   |

## ELECTRICAL CHARACTERISTICS-2.5 V OPERATION

All typical specifications are at T A = 25°C, V DD1 = V DD2 = 2.5 V. Minimum/maximum specifications apply over the entire recommended operation range: 2.25 V ≤ V DD1 ≤ 2.75 V, 2.25 V ≤ V DD2 ≤ 2.75 V, -40°C ≤ T A ≤ +125°C, unless otherwise noted. Switching specifications are tested with CL  = 15 pF and CMOS signal levels, unless otherwise noted. Supply currents are specified with 50% duty cycle signals.

Table 5.

| Parameter                 | Symbol        | Min         | Typ         | Max         | Unit    | Test Conditions/Comments                                         |
|---------------------------|---------------|-------------|-------------|-------------|---------|------------------------------------------------------------------|
| SWITCHING SPECIFICATIONS  |               |             |             |             |         |                                                                  |
| Pulse Width               | PW            | 6.6         |             |             | ns      | Within PWD limit                                                 |
| Data Rate                 |               | 150         |             |             | Mbps    | Within PWD limit                                                 |
| Propagation Delay         | t PHL , t PLH | 5.0         | 7.0         | 14          | ns      | 50% input to 50% output                                          |
| Pulse Width Distortion    | PWD           |             | 0.7         | 3           | ns      | &#124;t PLH - t PHL &#124;                                       |
| Change vs. Temperature    |               |             | 1.5         |             | ps/°C   |                                                                  |
| Propagation Delay Skew    | t PSK         |             |             | 7.0         | ns      | Between any two units at the same temperature, voltage, and load |
| Jitter                    |               |             | 320         |             | ps p-p  | See the Jitter Measurement section                               |
| DC SPECIFICATIONS         |               |             |             |             |         |                                                                  |
| Input Threshold           |               |             |             |             |         |                                                                  |
| Logic High                | V IH          | 0.7 × V DD1 |             |             | V       |                                                                  |
| Logic Low                 | V IL          |             |             | 0.3 × V DD1 | V       |                                                                  |
| Output Voltage            |               |             |             |             |         |                                                                  |
| Logic High                | V OH          | V DD2 - 0.1 | V DD2       |             | V       | I O = -20 µA, V I = V IH                                         |
|                           |               | V DD2 - 0.4 | V DD2 - 0.2 |             | V       | I O = -2 mA, V I = V IH                                          |
| Logic Low                 | V OL          |             | 0.0         | 0.1         | V       | I O = 20 µA, V I = V IL                                          |
|                           |               |             | 0.2         | 0.4         | V       | I O = 2 mA, V I = V IL                                           |
| Input Current per Channel | I I           | -10         | +0.01       | +10         | µA      | 0 V ≤ V I ≤ V DD1                                                |
| Quiescent Supply Current  | I DD1 (Q)     |             | 0.8         | 1.1         | mA      | V I = 0 (N0), 1 (N1) 1                                           |
|                           | I DD2 (Q)     |             | 0.9         | 1.2         | mA      | V I = 0 (N0), 1 (N1) 1                                           |
|                           | I DD1 (Q)     |             | 3.5         | 5.6         | mA      | V I = 1 (N0), 0 (N1) 1                                           |
|                           | I DD2 (Q)     |             | 1.0         | 1.2         | mA      | V I = 1 (N0), 0 (N1) 1                                           |
| Dynamic Supply Current    |               |             |             |             |         |                                                                  |
| Dynamic Input             | I DDI (D)     |             | 0.01        |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |

## SPECIFICATIONS

## Table 5. (Continued)

| Parameter                        | Symbol            | Min   | Typ   | Unit    | Test Conditions/Comments                                 |
|----------------------------------|-------------------|-------|-------|---------|----------------------------------------------------------|
| Dynamic Output                   | I DDO (D)         |       | 0.01  | mA/Mbps | Inputs switching, 50% duty cycle                         |
| Undervoltage Lockout             | UVLO              |       |       |         |                                                          |
| Positive V DDx Threshold         | V DDxUV+          |       | 1.6   | V       |                                                          |
| Negative V DDx Threshold         | V DDxUV-          |       | 1.5   | V       |                                                          |
| V DDx Hysteresis                 | V DDxUVH          |       | 0.1   | V       |                                                          |
| AC SPECIFICATIONS                |                   |       |       |         |                                                          |
| Output Rise/Fall Time            | t R /t F          |       | 2.5   | ns      | 10% to 90%                                               |
| Common-Mode Transient Immunity 2 | &#124;CM H &#124; | 75    | 100   | kV/µs   | V I = V DD1 , V CM = 1000 V, transient magnitude = 800 V |
| Common-Mode Transient Immunity 2 | &#124;CM L &#124; | 75    | 100   | kV/µs   | V I = 0 V, V CM = 1000 V, transient magnitude = 800 V    |

1 N0 indicates the ADuM210N0 models and N1 indicates the ADuM210N1 models. See the Ordering Guide.

2 |CMH | is the maximum common-mode voltage slew rate that can be sustained while maintaining the voltage output (V O ) &gt; 0.8 × V DD2 . |CM L | is the maximum common-mode voltage slew rate that can be sustained while maintaining V O  &gt; 0.8 V. The common-mode voltage slew rates apply to both rising and falling common-mode voltage edges.

Table 6. Total Supply Current vs. Data Throughput-2.5 V Operation

|                       |        | 1 Mbps   | 1 Mbps   | 1 Mbps   | 25 Mbps   | 25 Mbps   | 25 Mbps   | 100 Mbps   | 100 Mbps   | 100 Mbps   |      |
|-----------------------|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|------------|------|
| Parameter             | Symbol | Min      | Typ      | Max      | Min       | Typ       | Max       | Min        | Typ        | Max        | Unit |
| SUPPLY CURRENT        |        |          |          |          |           |           |           |            |            |            |      |
| Supply Current Side 1 | I DD1  |          | 2.2      | 3.4      |           | 2.4       | 3.6       |            | 3.2        | 4.3        | mA   |
| Supply Current Side 2 | I DD2  |          | 0.9      | 1.4      |           | 1.3       | 1.8       |            | 2.3        | 3.5        | mA   |

## ELECTRICAL CHARACTERISTICS-1.8 V OPERATION

All typical specifications are at T A = 25°C, V DD1 = V DD2 = 1.8 V. Minimum/maximum specifications apply over the entire recommended operation range: 1.7 V ≤ V DD1 ≤ 1.9 V, 1.7 V ≤ V DD2 ≤ 1.9 V, and -40°C ≤ T A ≤ +125°C, unless otherwise noted. Switching specifications are tested with CL  = 15 pF and CMOS signal levels, unless otherwise noted. Supply currents are specified with 50% duty cycle signals.

Table 7.

| Parameter                | Symbol         | Min            | Typ            | Max            | Unit           | Test Conditions/Comments                                              |
|--------------------------|----------------|----------------|----------------|----------------|----------------|-----------------------------------------------------------------------|
| SWITCHING SPECIFICATIONS |                |                |                |                |                |                                                                       |
| Pulse Width              | PW             | 6.6            |                |                | ns             | Within PWD limit                                                      |
| Data Rate                |                | 150            |                |                | Mbps           | Within PWD limit                                                      |
| Propagation Delay        | t PHL , t PLH  | 5.8            | 8.7            | 15             | ns             | 50% input to 50% output                                               |
| Pulse Width Distortion   | PWD            |                | 0.7            | 3              | ns             | &#124;t PLH - t PHL &#124;                                            |
| Change vs. Temperature   |                |                | 1.5            |                | ps/°C          |                                                                       |
| Propagation Delay Skew   | t PSK          |                |                | 7.0            | ns             | Between any two units at the same temperature, voltage, and load      |
| Jitter                   |                |                | 630 190        |                | ps p-p ps rms  | See the Jitter Measurement section See the Jitter Measurement section |
| DC SPECIFICATIONS        |                |                |                |                |                |                                                                       |
| Logic High               | V IH           | 0.7 × V DD1    |                |                | V              |                                                                       |
| Logic Low                | V IL           |                |                | 0.3 × V DD1    | V              |                                                                       |
| Output Voltage           | Output Voltage | Output Voltage | Output Voltage | Output Voltage | Output Voltage | Output Voltage                                                        |
| Logic High               | V OH           | V DD2 - 0.1    | V DD2          |                | V              | I O = -20 µA, V I = V IH                                              |
|                          |                | V DD2 - 0.4    | V DD2 - 0.2    |                | V              | I O = -2 mA, V I = V IH                                               |
| Logic Low                | V OL           |                | 0.0            | 0.1            | V              | I O = 20 µA, V I = V IL                                               |
| Logic Low                |                |                | 0.2            | 0.4            | V              | I O = 2 mA, V I = V IL                                                |

## SPECIFICATIONS

Table 7. (Continued)

| Parameter                        | Symbol            | Min   | Typ   | Max   | Unit    | Test Conditions/Comments                                 |
|----------------------------------|-------------------|-------|-------|-------|---------|----------------------------------------------------------|
| Input Current per Channel        | I I               | -10   | +0.01 | +10   | µA      | 0 V ≤ V I ≤ V DD1                                        |
| Quiescent Supply Current         | I DD1 (Q)         |       | 0.7   | 1.1   | mA      | V I = 0 (N0), 1 (N1) 1                                   |
|                                  | I DD2 (Q)         |       | 0.9   | 1.2   | mA      | V I = 0 (N0), 1 (N1) 1                                   |
|                                  | I DD1 (Q)         |       | 3.4   | 5.4   | mA      | V I = 1 (N0), 0 (N1) 1                                   |
|                                  | I DD2 (Q)         |       | 0.9   | 1.2   | mA      | V I = 1 (N0), 0 (N1) 1                                   |
| Dynamic Supply Current           |                   |       |       |       |         |                                                          |
| Dynamic Input                    | I DDI (D)         |       | 0.01  |       | mA/Mbps | Inputs switching, 50% duty cycle                         |
| Dynamic Output                   | I DDO (D)         |       | 0.01  |       | mA/Mbps | Inputs switching, 50% duty cycle                         |
| Undervoltage Lockout             | UVLO              |       |       |       |         |                                                          |
| Positive V DDx Threshold         | V DDxUV+          |       | 1.6   |       | V       |                                                          |
| Negative V DDx Threshold         | V DDxUV-          |       | 1.5   |       | V       |                                                          |
| V DDx Hysteresis                 | V DDxUVH          |       | 0.1   |       | V       |                                                          |
| AC SPECIFICATIONS                |                   |       |       |       |         |                                                          |
| Output Rise/Fall Time            | t R /t F          |       | 2.5   |       | ns      | 10% to 90%                                               |
| Common-Mode Transient Immunity 2 | &#124;CM H &#124; | 75    | 100   |       | kV/µs   | V I = V DD1 , V CM = 1000 V, transient magnitude = 800 V |
|                                  | &#124;CM L &#124; | 75    | 100   |       | kV/µs   | V 1 = 0 V, V CM = 1000 V, transient magnitude = 800 V    |

2 |CMH | is the maximum common-mode voltage slew rate that can be sustained while maintaining the voltage output (V O ) &gt; 0.8 × V DD2 . |CM L | is the maximum common-mode voltage slew rate that can be sustained while maintaining V O  &gt; 0.8 V. The common-mode voltage slew rates apply to both rising and falling common-mode voltage edges.

Table 8. Total Supply Current vs. Data Throughput-1.8 V Operation

|                       |        | 1 Mbps   | 1 Mbps   | 1 Mbps   | 25 Mbps   | 25 Mbps   | 25 Mbps   | 100 Mbps   | 100 Mbps   | 100 Mbps   |      |
|-----------------------|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|------------|------|
| Parameter             | Symbol | Min      | Typ      | Max      | Min       | Typ       | Max       | Min        | Typ        | Max        | Unit |
| SUPPLY CURRENT        |        |          |          |          |           |           |           |            |            |            |      |
| Supply Current Side 1 | I DD1  |          | 2.1      | 3.1      |           | 2.3       | 3.4       |            | 3.0        | 4.2        | mA   |
| Supply Current Side 2 | I DD2  |          | 0.9      | 1.2      |           | 1.2       | 1.6       |            | 2.2        | 3.2        | mA   |

## INSULATION AND SAFETY RELATED SPECIFICATIONS

For additional information, see www.analog.com/icouplersafety.

Table 9. ADuM210N Insulation and Safety Related Specifications Table

| Parameter                                                                   | Symbol   | Value   | Unit   | Test Conditions/Comments                                                                                                   |
|-----------------------------------------------------------------------------|----------|---------|--------|----------------------------------------------------------------------------------------------------------------------------|
| Rated Dielectric Insulation Voltage                                         |          | 5000    | V rms  | 1-minute duration                                                                                                          |
| Minimum External Air Gap (Clearance)                                        | L (I01)  | 8.3 1   | mm     | Measured from input terminals to output terminals, shortest distance through air                                           |
| Minimum External Tracking (Creepage)                                        | L (I02)  | 8.3     | mm     | Measured from input terminals to output terminals, shortest distance path along body                                       |
| Minimum Clearance in the Plane of the Printed Circuit Board (PCB Clearance) | L (PCB)  | 8.3 2   | mm     | Measured from input terminals to output terminals, shortest distance through air, line of sight, in the PCB mounting plane |
| Minimum Internal Gap (Internal Clearance)                                   |          | 29      | μm     | Insulation distance through insulation                                                                                     |
| Tracking Resistance (Comparative Tracking Index)                            | CTI      | >400    | V      | DIN IEC 112/VDE 0303 Part 1                                                                                                |
| Material Group                                                              |          | II      |        | Material Group per IEC 60664-1                                                                                             |

## SPECIFICATIONS

## PACKAGE CHARACTERISTICS

| Table 10. Parameter                       | Symbol   | Typ   | Max   | Unit   | Test Conditions/Comments                            |
|-------------------------------------------|----------|-------|-------|--------|-----------------------------------------------------|
| Resistance (Input to Output) 1            | R I-O    | 10 13 |       | Ω      |                                                     |
| Capacitance (Input to Output) 1           | C I-O    | 2     |       | pF     | f = 1 MHz                                           |
| Input Capacitance 2                       | C I      | 4.0   |       | pF     |                                                     |
| IC Junction to Ambient Thermal Resistance | θ JA     | 80    |       | °C/W   | Thermocouple located at center of package underside |

## REGULATORY INFORMATION

The ADuM210N certification approvals are listed in Table 11.

Table 11.

| UL                                      | CSA                                                                                                                                                                                                                                                                       | VDE                                                                   | CQC (Pending)                                                             |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------------------|
| UL 1577 1 Single Protection, 5000 V rms | IEC/EN/CSA 60950-1 Basic insulation, 830 V rms Reinforced insulation, 415 V rms IEC/CSA 60601-1 Reinforced insulation (2 MOPP), 250 V rms IEC/CSA 61010-1 Basic insulation, 600 V rms, overvoltage category IV Reinforced insulation, 300 V rms, overvoltage category III | DIN EN IEC 60747-17 (VDE 0884-17) 2 Reinforced insulation, 849 V peak | CQC GB4943.1 Basic insulation, 800 V rms Reinforced insulation, 400 V rms |
| File E214100                            | File No. 205078                                                                                                                                                                                                                                                           | Certificate No. 40051926                                              | Certificate No. (pending)                                                 |

## SPECIFICATIONS

## DIN EN IEC 60747-17 (VDE 0884-17) INSULATION CHARACTERISTICS

This isolator is suitable for reinforced electrical isolation only within the safety limit data. Protective circuits ensure the maintenance of the safety data. The * marking on packages denotes DIN EN IEC 60747-17 (VDE 0884-17) approval.

Table 12.

Figure 2. Thermal Derating Curve, Dependence of Safety Limiting Values with Ambient Temperature per DIN EN IEC 60747-17 (VDE 0884-17)

| Description                                              | Test Conditions/Comments                                                               | Symbol   | Characteristic   | Unit   |
|----------------------------------------------------------|----------------------------------------------------------------------------------------|----------|------------------|--------|
| Overvoltage Category per IEC 60664-1                     |                                                                                        |          |                  |        |
| ≤ 150 V rms                                              |                                                                                        |          | I to IV          |        |
| ≤ 300 V rms                                              |                                                                                        |          | I to III         |        |
| ≤ 400 V rms                                              |                                                                                        |          | I to III         |        |
| Climatic Classification                                  |                                                                                        |          | 40/105/21        |        |
| Pollution Degree per DIN VDE 0110, Table 1               |                                                                                        |          | 2                |        |
| Maximum Repetitive Isolation Voltage                     |                                                                                        | V IORM   | 849              | V peak |
| Maximum Working Insulation Voltage                       |                                                                                        | V IOWM   | 600              | V rms  |
| Input to Output Test Voltage, Method B1                  | V IORM × 1.875 = V pd(m) , 100% production test, t m = 1 sec, partial discharge < 5 pC | V pd(m)  | 1592             | V peak |
| Input to Output Test Voltage, Method A                   |                                                                                        |          |                  |        |
| After Environmental Tests Subgroup 1                     | V IORM × 1.6 = V pd(m) , t m = 60 sec, partial discharge < 5 pC                        | V pd(m)  | 1358             | V peak |
| After Input and/or Safety Test Subgroup 2 and Subgroup 3 | V IORM × 1.2 = V pd(m) , t m = 60 sec, partial discharge < 5 pC                        | V pd(m)  | 1019             | V peak |
| Maximum Transient Isolation Voltage                      | V TEST = 1.2 × V IOTM , t = 1 s (100% production)                                      | V IOTM   | 8000             | V peak |
| Maximum Impulse Voltage                                  | Surge voltage in air, waveform per IEC 61000-4-5                                       | V IMP    | 8000             | V peak |
| Maximum Surge Isolation Voltage                          | V TEST ≥ 1.3 × V IMP (sample test), tested in oil, waveform per IEC 61000-4-5          | V IOSM   | 10000            | V peak |
| Safety Limiting Values                                   | Maximum value allowed in the event of a failure (see Figure 2)                         |          |                  |        |
| Maximum Junction Temperature                             |                                                                                        | T S      | 150              | °C     |
| Total Power Dissipation at 25°C                          |                                                                                        | P S      | 0.98             | W      |
| Insulation Resistance at T S                             | V IO = 500 V                                                                           | R S      | >10 9            | Ω      |

<!-- image -->

## RECOMMENDED OPERATING CONDITIONS

| Table 13.                        | Symbol        | Rating          |
|----------------------------------|---------------|-----------------|
| Operating Temperature            | T A           | -40°C to +125°C |
| Supply Voltages                  | V DD1 , V DD2 | 1.7 V to 5.5 V  |
| Input Signal Rise and Fall Times |               | 1.0 ms          |

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

| Table 14.                                                      |                           |
|----------------------------------------------------------------|---------------------------|
| Parameter                                                      | Rating                    |
| Storage Temperature (T ST ) Range                              | -65°C to +150°C           |
| Ambient Operating Temperature (T A ) Range                     | -40°C to +125°C           |
| Supply Voltages (V DD1 , V DD2 )                               | -0.5 V to +7.0 V          |
| Input Voltage (V I )                                           | -0.5 V to V DDI 1 + 0.5 V |
| Output Voltage (V O )                                          | -0.5 V to V DDO 2 + 0.5 V |
| Average Output Current per Pin 3 Side 2 Output Current (I O2 ) | -10 mA to +10 mA          |
| Common-Mode Transients 4                                       | -150 kV/μs to +150 kV/μs  |

## MAXIMUM CONTINUOUS WORKING VOLTAGE

Table 15. Maximum Continuous Working Voltage 1

| Parameter        | Max   | Unit   | Applicable Certification                                    |
|------------------|-------|--------|-------------------------------------------------------------|
| AC Voltage       |       |        |                                                             |
| Bipolar Waveform | 849   | V peak | Reinforced insulation rating per IEC 60747-17 (VDE 0884-17) |

## TRUTH TABLE

Table 16. Truth Table (Positive Logic)

<!-- image -->

| V I Input 1   | V DDI State   | V DD2 State   | Default Low (N0), V O Output 2   | Default High (N1), V O Output 2   | Test Conditions/Comments   |
|---------------|---------------|---------------|----------------------------------|-----------------------------------|----------------------------|
| Low           | Powered       | Powered       | Low                              | Low                               | Normal operation           |
| High          | Powered       | Powered       | High                             | High                              | Normal operation           |
| X 3           | Unpowered     | Powered       | Low                              | High                              | Fail-safe output           |
| X 3           | Powered       | Unpowered     | Indeterminate                    | Indeterminate                     |                            |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 17. Pin Function Descriptions 1

|   Pin No. | Mnemonic   | Description                                                                                                                      |
|-----------|------------|----------------------------------------------------------------------------------------------------------------------------------|
|         1 | V DD1      | Supply Voltage for Isolator Side 1. Pin 1 and Pin 3 are internally connected. Either or both may be used for V DD1 .             |
|         2 | V I        | Logic Input.                                                                                                                     |
|         3 | V DD1      | Supply Voltage for Isolator Side 1. Pin 1 and Pin 3 are internally connected. Either or both may be used for V DD1 .             |
|         4 | GND 1      | Ground 1. Ground reference for Isolator Side 1.                                                                                  |
|         5 | GND 2      | Ground 2. Ground reference for Isolator Side 2. Pin 5 and Pin 7 are internally connected. Either or both may be used for GND 2 . |
|         6 | V O        | Logic Output.                                                                                                                    |
|         7 | GND 2      | Ground 2. Ground reference for Isolator Side 2. Pin 5 and Pin 7 are internally connected. Either or both may be used for GND 2   |
|         8 | V DD2      | Supply Voltage for Isolator Side 2.                                                                                              |

1 Reference the AN-1109 Application Note for specific layout guidelines.

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. I DD1 Total Supply Current vs. Data Rate at Various Voltages

<!-- image -->

Figure 5. I DD2 Total Supply Current vs. Data Rate at Various Voltages

Figure 6. Propagation Delay, t PLH vs. Temperature at Various Voltages

<!-- image -->

Figure 7. Propagation Delay, t PHL vs. Temperature at Various Voltages

<!-- image -->

## APPLICATIONS INFORMATION

## OVERVIEW

The ADuM210N uses a high frequency carrier to transmit data across the isolation barrier using i Coupler chip scale transformer coils separated by layers of polyimide isolation. With an on/off keying (OOK) technique and the differential architecture shown in Figure 9 and Figure 10, the ADuM210N has very low propagation delay and high speed. Internal regulators and input/output design techniques allow logic and supply voltages over a wide range from 1.7 V to 5.5 V, offering voltage translation of 1.8 V, 2.5 V, 3.3 V, and 5 V logic. The architecture is designed for high common-mode transient immunity and high immunity to electrical noise and magnetic interference. Radiated emissions are minimized with a spread spectrum OOK carrier and other techniques.

Figure 9 shows the waveforms for the ADuM210N0 models, which have the condition of the fail-safe output state equal to low, where the carrier waveform is off when the input state is low. If the input side is off or not operating, the fail-safe output state of low (noted by a 0 in the model number) sets the output to low. For the ADuM210N1 models, which have a fail-safe output state of high, Figure 10 shows the conditions where the carrier waveform is off when the input state is high. When the input side is off or not operating, the fail-safe output state of high (noted by a 1 in the model number) sets the output to high. See the Ordering Guide for the model numbers that have the fail-safe output state of low or the fail-safe output state of high.

## PCB LAYOUT

The ADuM210N digital isolator requires no external interface circuitry for the logic interfaces. Power supply bypassing is strongly recommended at the input and output supply pins (see Figure 8). Bypass capacitors are most conveniently connected between Pin 1 and Pin 4 for V DD1 and between Pin 5 and Pin 8 for V DD2 . The recommended bypass capacitor value is between 0.01 µF and 0.1 µF. The total lead length between both ends of the capacitor and the input power supply pin must not exceed 10 mm.

Figure 8. Recommended Printed Circuit Board Layout

<!-- image -->

In applications involving high common-mode transients, ensure that board coupling across the isolation barrier is minimized. Furthermore, design the board layout such that any coupling that does occur equally affects all pins on a given component side. Failure to ensure this can cause voltage differentials between pins exceeding the Absolute Maximum Ratings of the device, thereby leading to latch-up or permanent damage.

See the AN-1109 Application Note for PCB layout guidelines.

Figure 9. Operational Block Diagram of a Single Channel with a Low Fail-Safe Output State

<!-- image -->

Figure 10. Operational Block Diagram of a Single Channel with a High Fail-Safe Output State

<!-- image -->

## APPLICATIONS INFORMATION

## PROPAGATION DELAY RELATED PARAMETERS

Propagation delay is a parameter that describes the time it takes a logic signal to propagate through a component. The propagation delay to a Logic 0 output may differ from the propagation delay to a Logic 1 output.

Figure 11. Propagation Delay Parameters

<!-- image -->

Pulse width distortion is the maximum difference between these two propagation delay values and is an indication of how accurately the timing of the input signal is preserved.

Propagation delay skew is the maximum amount the propagation delay differs between multiple ADuM210N components operating under the same conditions.

## JITTER MEASUREMENT

Figure 12 shows the eye diagram for the ADuM210N. The measurement was taken using an Agilent 81110A pulse pattern generator at 150 Mbps with pseudorandom bit sequences (PRBS) 2(n - 1), n = 14, for 5 V supplies. Jitter was measured with the Tektronix Model 5104B oscilloscope, 1 GHz, 10 GS/sec with the DPOJET jitter and eye diagram analysis tools. The result shows a typical measurement on the ADuM210N with 380 ps p-p jitter.

Figure 12. Eye Diagram

<!-- image -->

## INSULATION LIFETIME

All insulation structures eventually break down when subjected to voltage stress over a sufficiently long period. The rate of insulation degradation is dependent on the characteristics of the voltage waveform applied across the insulation as well as on the materials and material interfaces.

The two types of insulation degradation of primary interest are breakdown along surfaces exposed to the air and insulation wear out. Surface breakdown is the phenomenon of surface tracking, and the primary determinant of surface creepage requirements in system level standards. Insulation wear out is the phenomenon where charge injection or displacement currents inside the insulation material cause long-term insulation degradation.

## Surface Tracking

Surface tracking is addressed in electrical safety standards by setting a minimum surface creepage based on the working voltage, the environmental conditions, and the properties of the insulation material. Safety agencies perform characterization testing on the surface insulation of components that allows the components to be categorized in different material groups. Lower material group ratings are more resistant to surface tracking and, therefore, can provide adequate lifetime with smaller creepage. The minimum creepage for a given working voltage and material group is in each system level standard and is based on the total rms voltage across the isolation, pollution degree, and material group. The material group and creepage for the ADuM210N isolators are presented in Table 9.

## Insulation Wear Out

The lifetime of insulation caused by wear out is determined by its thickness, material properties, and the voltage stress applied. It is important to verify that the product lifetime is adequate at the application working voltage. The working voltage supported by an isolator for wear out may not be the same as the working voltage supported for tracking. It is the working voltage applicable to tracking that is specified in most standards.

Testing and modeling show that the primary driver of long-term degradation is displacement current in the polyimide insulation causing incremental damage. The stress on the insulation can be broken down into broad categories, such as dc stress, which causes very little wear out because there is no displacement current, and an ac component time varying voltage stress, which causes wear out.

The ratings in certification documents are usually based on 60 Hz sinusoidal stress because this reflects isolation from line voltage. However, many practical applications have combinations of 60 Hz ac and dc across the barrier as shown in Equation 1. Because only the ac portion of the stress causes wear out, the equation can be rearranged to solve for the ac rms voltage, as is shown in Equation 2. For insulation wear out with the polyimide materials used in these products, the ac rms voltage determines the product lifetime.

<!-- formula-not-decoded -->

## APPLICATIONS INFORMATION

VRMS is the total rms working voltage. VAC RMS is the time varying portion of the working voltage. VDC is the dc offset of the working voltage.

## Calculation and Use of Parameters Example

The following example frequently arises in power conversion applications. Assume that the line voltage on one side of the isolation is 240 V AC RMS and a 400 V DC bus voltage is present on the other side of the isolation barrier. The isolator material is polyimide. To establish the critical voltages in determining the creepage, clearance and lifetime of a device, see Figure 13 and the following equations.

Figure 13. Critical Voltage Example

<!-- image -->

The working voltage across the barrier from Equation 1 is

<!-- formula-not-decoded -->

This is the working voltage used together with the material group and pollution degree when looking up the creepage required by a system standard.

To determine if the lifetime is adequate, obtain the time varying portion of the working voltage. To obtain the ac rms voltage, use Equation 2.

In this case, the ac rms voltage is simply the line voltage of 240 V rms. This calculation is more relevant when the waveform is not sinusoidal. The value is compared to the limits for working voltage in Table 15.

<!-- formula-not-decoded -->

Note that the dc working voltage limit in Table 15 is set by the creepage of the package as specified in IEC 60664-1. This value can differ for specific system level standards.

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                                            |
|----------------------------|----------------|----------------------------------------------------------------|
| RI-8-1                     | SOIC_IC        | 8-Lead Standard Small Outline Package, with Increased Creepage |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description   | Packing Quantity   | Package Option   |
|------------------|---------------------|-----------------------|--------------------|------------------|
| ADuM210N1BRIZ    | -40°C to +125°C     | 8-Lead SOIC_IC        | Tube, 80           | RI-8-1           |
| ADuM210N1BRIZ-RL | -40°C to +125°C     | 8-Lead SOIC_IC        | Reel, 1500         | RI-8-1           |
| ADuM210N0BRIZ    | -40°C to +125°C     | 8-Lead SOIC_IC        | Tube, 80           | RI-8-1           |
| ADuM210N0BRIZ-RL | -40°C to +125°C     | 8-Lead SOIC_IC        | Reel, 1500         | RI-8-1           |

## NUMBER OF INPUTS, WITHSTAND VOLTAGE RATING, AND FAIL-SAFE OUTPUT STATE OPTIONS

|                  |                           | Withstand Voltage Rating (kV   | Withstand Voltage Rating (kV   | Withstand Voltage Rating (kV   |
|------------------|---------------------------|--------------------------------|--------------------------------|--------------------------------|
| Model 1          | No. of Inputs, V DD1 Side | No. of Inputs, V DD2 Side      | rms)                           | Fail-Safe Output State         |
| ADuM210N1BRIZ    | 1                         | 0                              | 5.0                            | High                           |
| ADuM210N1BRIZ-RL | 1                         | 0                              | 5.0                            | High                           |
| ADuM210N0BRIZ    | 1                         | 0                              | 5.0                            | Low                            |
| ADuM210N0BRIZ-RL | 1                         | 0                              | 5.0                            | Low                            |

<!-- image -->