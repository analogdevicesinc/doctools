<!-- lastmod 2025-09-25 -->
<!-- image -->

## FEATURES

- iso Power integrated, isolated DC-to-DC converter
- 100 mA output supply
- Meets CISPR 32/EN55032 Class B emission limits up to 5 Mbps at full load on a 2-layer PCB
- Dual DC to 100 Mbps signal isolation channels
- 28-lead, fine pitch, SOIC with 8.3 mm minimum creepage
- High temperature operation: 125°C maximum
- High common-mode transient immunity: 100 kV/µs
- Safety and regulatory approvals
- UL 1577 ► VISO = 5000 V rms for 1 minute
- IEC/EN/CSA 62368-1
- IEC/CSA 60601-1
- IEC/CSA 61010-1
- CQC GB 4943.1
- DIN EN IEC 60747-17 (VDE 0884-17) (pending)
- VIORM = 596 V peak

## APPLICATIONS

- RS-232 transceivers
- Power supply start-up bias and gate drives
- Isolated sensor interfaces
- Automotive on-board charger (OBC) and DC-to-DC
- Industrial programmable logic controllers (PLCs)

## GENERAL DESCRIPTION

The ADuM6221A is a dual-channel digital isolators with an iso Power ® , integrated, isolated DC-to-DC converter. Based on the Analog Devices, Inc., i Coupler ®  technology, the DC-to-DC converter provides regulated, isolated power that meets CISPR 32/EN 55032 Class B limits at full load on a 2-layer printed circuit board (PCB) with ferrites. Popular voltage combinations and the associated output current levels are listed in Table 1.

The ADuM6221A eliminates the need for a separate, isolated DC-to-DC converter in 500 mW, isolated designs. The i Coupler chip scale transformer technology is used for isolated logic signals and for the magnetic components of the DC-to-DC converter. The result is a small form factor and total isolation solution.

The ADuM6221A isolators provide two independent isolation channels (for more details, see the Pin Configurations and Function Descriptions section).

Rev. B

DOCUMENT FEEDBACK

TECHNICAL SUPPORT

## Dual-Channel Isolator with Integrated DC-to-DC Converter

## Table 1. ADuM6221A Output Current Levels

|             |           | ISO Current, I ISO (mA)   | ISO Current, I ISO (mA)   | ISO Current, I ISO (mA)   |
|-------------|-----------|---------------------------|---------------------------|---------------------------|
| V DDP (V) 1 | V ISO (V) | 85°C                      | 105°C                     | 125°C                     |
| 5           | 5         | 100                       | 65                        | 30                        |
| 5           | 3.3       | 100                       | 65                        | 30                        |
| 3.3         | 3.3       | 60                        | 60                        | 20                        |

- 1 The ADUM6221ABRNZ3 is to be used in the 3.3 V to 3.3. V configuration. The ADuM6221ABRNZ5 is to be used in the 5 V to 3.3 V and 5 V to 5 V configurations.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................ 1                                                                                                                                                                                                                                                        | Package Characteristics...................................10                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications........................................................... 1                                                                                                                                                                                                                                                         | Regulatory Approvals.......................................10                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                   |
| General Description...............................................1                                                                                                                                                                                                                                                               | Insulation and Safety Related Specifications...                                                                                                                                                                                                                                                                                   | 11                                                                                                                                                                                                                                                                                                                                |
| Functional Block Diagram......................................1                                                                                                                                                                                                                                                                   | DIN EN IEC 60747-17 (VDE 0884-17)                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                   |
| Specifications........................................................ 3                                                                                                                                                                                                                                                          | Insulation Characteristics...............................                                                                                                                                                                                                                                                                         | 11                                                                                                                                                                                                                                                                                                                                |
| Electrical Characteristics-5 V Primary                                                                                                                                                                                                                                                                                            | Absolute Maximum Ratings.................................13                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                   |
| Input Supply/5 V Secondary Isolated                                                                                                                                                                                                                                                                                               | ESD Caution.....................................................13                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                   |
| Supply.............................................................. 3                                                                                                                                                                                                                                                            | Maximum Continuous Working Voltage...........                                                                                                                                                                                                                                                                                     | 13                                                                                                                                                                                                                                                                                                                                |
| Electrical Characteristics-5 V Primary                                                                                                                                                                                                                                                                                            | Pin Configurations and Function Descriptions.....14                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                   |
| Input Supply/3.3 V Secondary Isolated                                                                                                                                                                                                                                                                                             | Truth Table.......................................................                                                                                                                                                                                                                                                                | 15                                                                                                                                                                                                                                                                                                                                |
| Supply.............................................................. 3                                                                                                                                                                                                                                                            | Typical Performance Characteristics...................16                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                   |
| Electrical Characteristics-3.3 V Primary                                                                                                                                                                                                                                                                                          | Terminology.........................................................                                                                                                                                                                                                                                                              | 19                                                                                                                                                                                                                                                                                                                                |
| Input Supply/3.3 V Secondary Isolated                                                                                                                                                                                                                                                                                             | Theory of Operation ............................................20                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                   |
| Supply.............................................................. 4                                                                                                                                                                                                                                                            | Applications Information......................................                                                                                                                                                                                                                                                                    | 21                                                                                                                                                                                                                                                                                                                                |
| Electrical Characteristics-5.0 V Operation                                                                                                                                                                                                                                                                                        | PCB Layout......................................................21                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                   |
| Digital Isolator Channels Only..........................4                                                                                                                                                                                                                                                                         | Thermal Analysis..............................................22                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                   |
| Electrical Characteristics-3.3 V Operation                                                                                                                                                                                                                                                                                        | Propagation Delay Related Parameters...........22                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                   |
| Digital Isolator Channels Only..........................6                                                                                                                                                                                                                                                                         | Electromagnetic Compatibility..........................22                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                   |
| Electrical Characteristics-2.5 V Operation                                                                                                                                                                                                                                                                                        | Power Consumption.........................................22                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                   |
| Digital Isolator Channels Only..........................7                                                                                                                                                                                                                                                                         | Outline Dimensions.............................................                                                                                                                                                                                                                                                                   | 23                                                                                                                                                                                                                                                                                                                                |
| Electrical Characteristics-1.8 V Operation                                                                                                                                                                                                                                                                                        | Ordering Guide.................................................23                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                   |
| Digital Isolator Channels Only..........................8                                                                                                                                                                                                                                                                         | Evaluation Boards............................................23                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                   |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                  | REVISION HISTORY                                                                                                                                                                                                                                                                                                                  | REVISION HISTORY                                                                                                                                                                                                                                                                                                                  |
| 9/2025-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                           | 9/2025-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                           | 9/2025-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                           |
| Changes to Features Section.......................................................................................................................... 1 Changes to Table 18......................................................................................................................................10               | Changes to Features Section.......................................................................................................................... 1 Changes to Table 18......................................................................................................................................10               | Changes to Features Section.......................................................................................................................... 1 Changes to Table 18......................................................................................................................................10               |
| Changes to Features Section.......................................................................................................................... 1                                                                                                                                                                           | Changes to Features Section.......................................................................................................................... 1                                                                                                                                                                           | Changes to Features Section.......................................................................................................................... 1                                                                                                                                                                           |
| Changes to Regulatory Approvals Section and Table 18...............................................................................10                                                                                                                                                                                             | Changes to Regulatory Approvals Section and Table 18...............................................................................10                                                                                                                                                                                             | Changes to Regulatory Approvals Section and Table 18...............................................................................10                                                                                                                                                                                             |
| Changes to Table 19...................................................................................................................................... 11                                                                                                                                                                      | Changes to Table 19...................................................................................................................................... 11                                                                                                                                                                      | Changes to Table 19...................................................................................................................................... 11                                                                                                                                                                      |
| Changed IEC 60747-17 Insulation Characteristics Section to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section................................................................................................................11                                                                                 | Changed IEC 60747-17 Insulation Characteristics Section to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section................................................................................................................11                                                                                 | Changed IEC 60747-17 Insulation Characteristics Section to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section................................................................................................................11                                                                                 |
| Changes to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section, Table 20, and                                                                                                                                                                                                                                    | Changes to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section, Table 20, and                                                                                                                                                                                                                                    | Changes to DIN EN IEC 60747-17 (VDE 0884-17) Insulation Characteristics Section, Table 20, and                                                                                                                                                                                                                                    |
| Figure 2 Caption...........................................................................................................................................11                                                                                                                                                                     | Figure 2 Caption...........................................................................................................................................11                                                                                                                                                                     | Figure 2 Caption...........................................................................................................................................11                                                                                                                                                                     |
| Added Maximum Continuous Working Voltage Section and Table 22; Renumbered Sequentially................13 Deleted Insulation Lifetime Section, Surface Tracking Section, Insulation Wear Out Section, Calculation and Use of Parameters Example Section, and Figure 23; Renumbered Sequentially................................ 22 | Added Maximum Continuous Working Voltage Section and Table 22; Renumbered Sequentially................13 Deleted Insulation Lifetime Section, Surface Tracking Section, Insulation Wear Out Section, Calculation and Use of Parameters Example Section, and Figure 23; Renumbered Sequentially................................ 22 | Added Maximum Continuous Working Voltage Section and Table 22; Renumbered Sequentially................13 Deleted Insulation Lifetime Section, Surface Tracking Section, Insulation Wear Out Section, Calculation and Use of Parameters Example Section, and Figure 23; Renumbered Sequentially................................ 22 |

3/2024-Revision 0: Initial Version

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-5 V PRIMARY INPUT SUPPLY/5 V SECONDARY ISOLATED SUPPLY

All typical specifications are at T A = 25°C, V DDP = V ISO = 5 V. Minimum and maximum specifications apply over the entire recommended operation range, which is 4.5 V ≤ V DDP , V ISO ≤ 5.5 V and -40°C ≤ T A ≤ +125°C, unless otherwise noted.

Table 2. DC-to-DC Converters Static Specifications

| Parameter                              | Symbol        | Min    | Typ   | Max   | Unit   | Test Conditions/Comments                                                                   |
|----------------------------------------|---------------|--------|-------|-------|--------|--------------------------------------------------------------------------------------------|
| DC-TO-DC CONVERTERS SUPPLY             |               |        |       |       |        |                                                                                            |
| Set Point                              | V ISO         | 4.75   | 5.0   | 5.25  | V      | ISO current (I ISO ) = 10 mA                                                               |
| Line Regulation                        | V ISO (LINE)  |        | 20    |       | mV/V   | I ISO = 50 mA, V DDP = 4.5 V to 5.5 V                                                      |
| Load Regulation                        | V ISO (LOAD)  |        | 1     | 5     | %      | I ISO = 10 mA to 90 mA                                                                     |
| Output Ripple                          | V ISO (RIP)   |        | 75    |       | mV p-p | 20 MHz bandwidth, bulk output capacitance (C BO ) = 0.1 µF&#124;&#124;10 µF, I ISO = 90 mA |
| Output Noise                           | V ISO (NOISE) |        | 200   |       | mV p-p | C BO = 0.1 µF&#124;&#124;10 µF, I ISO = 90 mA                                              |
| Switching Frequency                    | f OSC         |        | 180   |       | MHz    |                                                                                            |
| Pulse-Width Modulation (PWM) Frequency | f PWM         |        | 625   |       | kHz    |                                                                                            |
| Output Supply 1                        | I ISO (MAX)   | 100 50 |       |       | mA mA  | 4.5 V < V ISO < 5.25 V 4.75 V < V ISO < 5.25 V                                             |
| Efficiency at I ISO (MAX) 1            |               |        | 33    |       | %      | I ISO = 100 mA                                                                             |
| V DD1 Supply Current                   |               |        |       |       |        |                                                                                            |
| No V ISO Load                          | I DDP (Q)     |        | 14    | 25    | mA     |                                                                                            |
| Full V ISO Load                        | I DDP (MAX)   |        | 310   |       | mA     |                                                                                            |
| Thermal Shutdown                       |               |        |       |       |        |                                                                                            |
| Shutdown Temperature                   |               |        | 154   |       | °C     |                                                                                            |
| Thermal Hysteresis                     |               |        | 10    |       | °C     |                                                                                            |

## ELECTRICAL CHARACTERISTICS-5 V PRIMARY INPUT SUPPLY/3.3 V SECONDARY ISOLATED SUPPLY

All typical specifications are at T A = 25°C, V DDP = 5.0 V, V ISO = 3.3 V. Minimum and maximum specifications apply over the entire recommended operation range, which is 4.5 V ≤ V DDP ≤ 5.5 V, 3.0 V ≤ V ISO ≤ 3.6 V, and -40°C ≤ T A ≤ +125°C, unless otherwise noted.

Table 3. DC-to-DC Converters Static Specifications

| Parameter                   | Symbol        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                        |
|-----------------------------|---------------|-------|-------|-------|--------|-----------------------------------------------------------------|
| DC-TO-DC CONVERTERS SUPPLY  |               |       |       |       |        |                                                                 |
| Set Point                   | V ISO         | 3.135 | 3.3   | 3.465 | V      | I ISO = 10 mA                                                   |
| Line Regulation             | V ISO (LINE)  |       | 20    |       | mV/V   | I ISO = 50 mA, V DDP = 3.0 V to 3.6 V                           |
| Load Regulation             | V ISO (LOAD)  |       | 1     | 5     | %      | I ISO = 10 mA to 90 mA                                          |
| Output Ripple               | V ISO (RIP)   |       | 50    |       | mV p-p | 20 MHz bandwidth, C BO = 0.1 µF&#124;&#124;10 µF, I ISO = 90 mA |
| Output Noise                | V ISO (NOISE) |       | 130   |       | mV p-p | C BO = 0.1 µF&#124;&#124;10 µF, I ISO = 90 mA                   |
| Switching Frequency         | f OSC         |       | 180   |       | MHz    |                                                                 |
| PWM Frequency               | f PWM         |       | 625   |       | kHz    |                                                                 |
| Output Supply 1             | I ISO (MAX)   | 100   |       |       | mA     | 3.0 V < V ISO < 3.4 V                                           |
|                             |               | 50    |       |       | mA     | 3.135 V < V ISO < 3.465 V                                       |
| Efficiency at I ISO (MAX) 1 |               |       | 27    |       | %      | I ISO = 100 mA                                                  |
| V DDP Supply Current        |               |       |       |       |        |                                                                 |
| No V ISO Load               | I DDP (Q)     |       | 14    | 20    | mA     |                                                                 |
| Full V ISO Load             | I DDP (MAX)   |       | 250   |       | mA     |                                                                 |

## SPECIFICATIONS

Table 3. DC-to-DC Converters Static Specifications (Continued)

| Parameter            | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|----------------------|----------|-------|-------|-------|--------|----------------------------|
| Thermal Shutdown     |          |       |       |       |        |                            |
| Shutdown Temperature |          |       | 154   |       | °C     |                            |
| Thermal Hysteresis   |          |       | 10    |       | °C     |                            |

## ELECTRICAL CHARACTERISTICS-3.3 V PRIMARY INPUT SUPPLY/3.3 V SECONDARY ISOLATED SUPPLY

All typical specifications are at T A = 25°C, V DDP = V ISO = 3.3 V. Minimum and maximum specifications apply over the entire recommended operation range, which is 3.0 V ≤ V DDP , V ISO ≤ 3.6 V, and -40°C ≤ T A ≤ +125°C, unless otherwise noted.

Table 4. DC-to-DC Converters Static Specifications

| Parameter                   | Symbol                     | Min                        | Typ                        | Max                        | Unit                       | Test Conditions/Comments                                        |
|-----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|-----------------------------------------------------------------|
| DC-TO-DC CONVERTERS SUPPLY  | DC-TO-DC CONVERTERS SUPPLY | DC-TO-DC CONVERTERS SUPPLY | DC-TO-DC CONVERTERS SUPPLY | DC-TO-DC CONVERTERS SUPPLY | DC-TO-DC CONVERTERS SUPPLY | DC-TO-DC CONVERTERS SUPPLY                                      |
| Set Point                   | V ISO                      | 3.135                      | 3.3                        | 3.465                      | V                          | I ISO = 10 mA                                                   |
| Line Regulation             | V ISO (LINE)               |                            | 20                         |                            | mV/V                       | I ISO = 30 mA, V DDP = 3.0 V to 3.6 V                           |
| Load Regulation             | V ISO (LOAD)               |                            | 1                          | 5                          | %                          | I ISO = 6 mA to 54 mA                                           |
| Output Ripple               | V ISO (RIP)                |                            | 50                         |                            | mV p-p                     | 20 MHz bandwidth, C BO = 0.1 µF&#124;&#124;10 µF, I ISO = 60 mA |
| Output Noise                | V ISO (NOISE)              |                            | 130                        |                            | mV p-p                     | C BO = 0.1 µF&#124;&#124;10 µF, I ISO = 60 mA                   |
| Switching Frequency         | f OSC                      |                            | 180                        |                            | MHz                        |                                                                 |
| PWM Frequency               | f PWM                      |                            | 625                        |                            | kHz                        |                                                                 |
| Output Supply 1             | I ISO (MAX)                | 60                         |                            |                            | mA                         | 3.0 V < V ISO < 3.465 V                                         |
| Efficiency at I ISO (MAX) 1 |                            |                            | 34                         |                            | %                          | I ISO = 60 mA                                                   |
| V DDP Supply Current        |                            |                            |                            |                            |                            |                                                                 |
| No V ISO Load               | I DDP (Q)                  |                            | 14                         | 20                         | mA                         |                                                                 |
| Full V ISO Load             | I DDP (MAX)                |                            | 190                        |                            | mA                         |                                                                 |
| Thermal Shutdown            | Thermal Shutdown           | Thermal Shutdown           | Thermal Shutdown           | Thermal Shutdown           | Thermal Shutdown           | Thermal Shutdown                                                |
| Shutdown Temperature        |                            |                            | 154                        |                            | °C                         |                                                                 |
| Thermal Hysteresis          |                            |                            | 10                         |                            | °C                         |                                                                 |

## ELECTRICAL CHARACTERISTICS-5.0 V OPERATION DIGITAL ISOLATOR CHANNELS ONLY

All typical specifications are at T A = 25°C, V DD1 = V DD2 = 5.0 V. Minimum and maximum specifications apply over the entire recommended operation range: 4.5 V ≤ V DD1 , V DD2 ≤ 5.5 V and -40°C ≤ T A ≤ +125°C, unless otherwise noted. Switching specifications are tested with C L = 15 pF and CMOS signal levels, unless otherwise noted. Supply currents are specified with 50% duty cycle signals.

Table 5. Data Channel Supply Current Specifications

|                               |        | 1 Mbps   | 1 Mbps   | 1 Mbps   | 10 Mbps   | 10 Mbps   | 10 Mbps   | 100 Mbps   | 100 Mbps   | 100 Mbps   |      |                          |
|-------------------------------|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|------------|------|--------------------------|
| Parameter                     | Symbol | Min      | Typ      | Max      | Min       | Typ       | Max       | Min        | Typ        | Max        | Unit | Test Conditions/Comments |
| SUPPLY CURRENT ADuM6221ABRNZ5 |        |          |          |          |           |           |           |            |            |            |      | C L = 0 pF               |
|                               | I DD1  |          | 4.2      | 8.4      |           | 4.5       | 8.5       |            | 8.0        | 12.0       | mA   |                          |
|                               | I DD2  |          | 2.3      | 4.5      |           | 2.8       | 5.7       |            | 8.8        | 12.0       | mA   |                          |
| ADuM6221ABRNZ3                |        |          |          |          |           |           |           |            |            |            |      |                          |
|                               | I DD1  |          | 4.2      | 8.4      |           | 4.5       | 8.5       |            | 8.0        | 12.0       | mA   |                          |
|                               | I DD2  |          | 2.3      | 4.5      |           | 2.8       | 5.7       |            | 9.4        | 15.0       | mA   |                          |

## SPECIFICATIONS

## Table 6. Switching Specifications

| Parameter                | Symbol        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                         |
|--------------------------|---------------|-------|-------|-------|--------|------------------------------------------------------------------|
| SWITCHING SPECIFICATIONS |               |       |       |       |        |                                                                  |
| Pulse Width              | PW            | 10    |       |       | ns     | Within pulse-width distortion (PWD) limit                        |
| Data Rate                |               |       |       | 100   | Mbps   | Within PWD limit                                                 |
| Propagation Delay        | t PHL , t PLH | 7.0   | 10    | 15    | ns     | 50% input to 50% output                                          |
| Pulse-Width Distortion   | PWD           |       | 1     | 5     | ns     | &#124;t PLH - t PHL &#124;                                       |
| Change vs. Temperature   |               |       | 1.5   |       | ps/°C  |                                                                  |
| Propagation Delay Skew   | t PSK         |       |       | 8.0   | ns     | Between any two units at the same temperature, voltage, and load |
| Channel Matching         |               |       | 1     | 5.0   | ns     |                                                                  |
| Jitter                   |               |       | 816   |       | ps p-p |                                                                  |

## Table 7. Input and Output Characteristics

| Parameter                                                                     | Symbol            | Min                     | Typ               | Max         | Unit    | Test Conditions/Comments                                         |
|-------------------------------------------------------------------------------|-------------------|-------------------------|-------------------|-------------|---------|------------------------------------------------------------------|
| DC SPECIFICATIONS                                                             |                   |                         |                   |             |         |                                                                  |
| Logic High                                                                    | V IH              | 0.7 × V DDx             |                   |             | V       |                                                                  |
| Logic Low                                                                     | V IL              |                         |                   | 0.3 × V DDx | V       |                                                                  |
| Output Voltage                                                                |                   |                         |                   |             |         |                                                                  |
| Logic High                                                                    | V OH              | V DDx - 0.2 V DDx - 0.5 | V DDx V DDx - 0.2 |             | V V     | I Ox 1 = -20 µA, V Ix = V IxH 2 I Ox 1 = -3.2 mA, V Ix = V IxH 2 |
| Logic Low                                                                     | V OL              |                         | 0.0               | 0.1         | V       | I Ox 1 = 20 µA, V Ix = V IxL 3                                   |
|                                                                               |                   |                         | 0.0               | 0.4         | V       | I Ox 1 = 3.2 mA, V Ix = V IxL 3                                  |
| Undervoltage Lockout                                                          | UVLO              |                         |                   |             |         | V DD1 , V DD2 , and V DDP supply                                 |
| Positive Going Threshold                                                      | V UV+             |                         | 1.6               |             | V       |                                                                  |
| Negative Going Threshold                                                      | V UV-             |                         | 1.5               |             | V       |                                                                  |
| Hysteresis                                                                    | V UVH             |                         | 0.1               |             | V       |                                                                  |
| Input Current per Channel                                                     | I I               | -10                     | +0.01             | +10         | µA      | 0 V ≤ V Ix ≤ V DDx                                               |
| Quiescent Supply Current                                                      |                   |                         |                   |             |         |                                                                  |
|                                                                               | I DD1 (Q)         |                         | 0.5               | 1.4         | mA      | V Ix = Logic 0                                                   |
|                                                                               | I DD2 (Q)         |                         | 0.9               | 1.5         | mA      | V Ix = Logic 0                                                   |
|                                                                               | I DD1 (Q)         |                         | 7.5               | 14          | mA      | V Ix = Logic 1                                                   |
|                                                                               | I DD2 (Q)         |                         | 3.3               | 6.2         | mA      | V Ix = Logic 1                                                   |
| Dynamic Supply Current                                                        |                   |                         |                   |             |         |                                                                  |
| Input                                                                         | I DDI (D)         |                         | 0.01              |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| Output                                                                        | I DDO (D)         |                         | 0.02              |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| AC SPECIFICATIONS Output Rise Time/Fall Time Common-Mode Transient Immunity 4 | &#124;CM L &#124; | 75                      | 100               |             | kV/µs   | V CM = 1000 V V Ix = 0 V, V CM = 1000 V                          |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-3.3 V OPERATION DIGITAL ISOLATOR CHANNELS ONLY

All typical specifications are at T A = 25°C, V DD1 = V DD2 = 3.3 V. Minimum and maximum specifications apply over the entire recommended operation range: 3.0 V ≤ V DD1 , V DD2 ≤ 3.6 V, and -40°C ≤ T A ≤ +125°C, unless otherwise noted. Switching specifications are tested with C L = 15 pF and CMOS signal levels, unless otherwise noted. Supply currents are specified with 50% duty cycle signals.

## Table 8. Data Channel Supply Current Specifications

|                               |        | 1 Mbps   | 1 Mbps   | 1 Mbps   | 10 Mbps   | 10 Mbps   | 10 Mbps   | 100 Mbps   | 100 Mbps   | 100 Mbps   |      |                          |
|-------------------------------|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|------------|------|--------------------------|
| Parameter                     | Symbol | Min      | Typ      | Max      | Min       | Typ       | Max       | Min        | Typ        | Max        | Unit | Test Conditions/Comments |
| SUPPLY CURRENT ADuM6221ABRNZ5 | I DD1  |          | 4.0      | 8.3      |           | 4.3       | 8.4       |            | 7.1        | 11.6       | mA   | C L = 0 pF               |
| ADuM6221ABRNZ3                | I DD2  |          | 2.1      | 4.4      |           | 2.7       | 5.6       |            | 8.0        | 11.6       | mA   |                          |
|                               | I DD1  |          | 4.0      | 8.3      |           | 4.3       | 8.4       |            | 7.1        | 11.6       | mA   |                          |
|                               | I DD2  |          | 2.1      | 4.4      |           | 2.7       | 5.6       |            | 8.0        | 12.0       | mA   |                          |

## Table 9. Switching Specifications

| Parameter                | Symbol        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                         |
|--------------------------|---------------|-------|-------|-------|--------|------------------------------------------------------------------|
| SWITCHING SPECIFICATIONS |               |       |       |       |        |                                                                  |
| Pulse Width              | PW            | 10    |       |       | ns     | Within PWD limit                                                 |
| Data Rate                |               |       |       | 100   | Mbps   | Within PWD limit                                                 |
| Propagation Delay        | t PHL , t PLH | 7.0   | 10    | 16    | ns     | 50% input to 50% output                                          |
| Pulse-Width Distortion   | PWD           |       | 1.0   | 5.0   | ns     | &#124;t PLH - t PHL &#124;                                       |
| Change vs. Temperature   |               |       | 1.5   |       | ps/°C  |                                                                  |
| Propagation Delay Skew   | t PSK         |       |       | 8.0   | ns     | Between any two units at the same temperature, voltage, and load |
| Channel Matching         |               |       | 1     | 5.0   | ns     |                                                                  |
| Jitter                   |               |       | 816   |       | ps p-p |                                                                  |

## Table 10. Input and Output Characteristics

| Parameter                         | Symbol    | Min                     | Typ               | Max         | Unit   | Test Conditions/Comments                                         |
|-----------------------------------|-----------|-------------------------|-------------------|-------------|--------|------------------------------------------------------------------|
| DC SPECIFICATIONS Input Threshold |           |                         |                   |             |        |                                                                  |
| Logic High                        | V IH      | 0.7 × V DDx             |                   |             | V      |                                                                  |
| Logic Low                         | V IL      |                         |                   | 0.3 × V DDx | V      |                                                                  |
| Output Voltage                    |           |                         |                   |             |        |                                                                  |
| Logic High                        | V OH      | V DDx - 0.2 V DDx - 0.5 | V DDx V DDx - 0.2 |             | V V    | I Ox 1 = -20 µA, V Ix = V IxH 2 I Ox 1 = -3.2 mA, V Ix = V IxH 2 |
| Logic Low                         | V OL      |                         | 0.0 0.0           | 0.1 0.4     | V V    | I Ox 1 = 20 µA, V Ix = V IxL 3 I Ox 1 = 3.2 mA, V Ix = V IxL 3   |
| Undervoltage Lockout              | UVLO      |                         |                   |             |        | V DD1 , V DD2 , and V DDP supply                                 |
| Positive Going Threshold          | V UV+     |                         | 1.6               |             | V      |                                                                  |
| Negative Going Threshold          | V UV-     |                         | 1.5               |             | V      |                                                                  |
| Hysteresis                        | V UVH     |                         | 0.1               |             | V      |                                                                  |
| Input Current per Channel         | I I       | -10                     | +0.01             | +10         | µA     | 0 V ≤ V Ix ≤ V DDx                                               |
| Quiescent Supply Current          | I DD1 (Q) |                         | 0.48              | 1.1         | mA     | V Ix = Logic 0                                                   |
| Quiescent Supply Current          | I DD2 (Q) |                         | 0.8               | 1.5         | mA     | V Ix = Logic 0                                                   |
| Quiescent Supply Current          | I DD1 (Q) |                         | 7.4               | 13.5        | mA     | V Ix = Logic 1                                                   |
| Quiescent Supply Current          | I DD2 (Q) |                         | 3.2               | 6.2         | mA     | V Ix = Logic 1                                                   |

## SPECIFICATIONS

## Table 10. Input and Output Characteristics (Continued)

| Parameter                        | Symbol            | Min   | Typ   | Max   | Unit    | Test Conditions/Comments              |
|----------------------------------|-------------------|-------|-------|-------|---------|---------------------------------------|
| Dynamic Supply Current           |                   |       |       |       |         |                                       |
| Dynamic Input                    | I DDI (D)         |       | 0.01  |       | mA/Mbps | Inputs switching, 50% duty cycle      |
| Dynamic Output                   | I DDO (D)         |       | 0.01  |       | mA/Mbps | Inputs switching, 50% duty cycle      |
| AC SPECIFICATIONS                |                   |       |       |       |         |                                       |
| Output Rise/Fall Time            | t R /t F          |       | 2.5   |       | ns      | 10% to 90%                            |
| Common-Mode Transient Immunity 4 | &#124;CM H &#124; | 75    | 100   |       | kV/µs   | V Ix = V DD1 or V ISO , V CM = 1000 V |
| Common-Mode Transient Immunity 4 | &#124;CM L &#124; | 75    | 100   |       | kV/µs   | V Ix = 0 V, V CM = 1000 V             |

## ELECTRICAL CHARACTERISTICS-2.5 V OPERATION DIGITAL ISOLATOR CHANNELS ONLY

All typical specifications are at T A = 25°C, V DD1 = V DD2 = 2.5 V. Minimum and maximum specifications apply over the entire recommended operation range: 2.25 V ≤ V DD1 , V DD2 ≤ 2.75 V, and -40°C ≤ T A ≤ +125°C, unless otherwise noted. Switching specifications are tested with C L = 15 pF and CMOS signal levels, unless otherwise noted. Supply currents are specified with 50% duty cycle signals.

## Table 11. Data Channel Supply Current Specifications

|                                                  |        | 1 Mbps   | 1 Mbps   | 1 Mbps   | 10 Mbps   | 10 Mbps   | 10 Mbps   | 100 Mbps   | 100 Mbps   | 100 Mbps   |      |                          |
|--------------------------------------------------|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|------------|------|--------------------------|
| Parameter                                        | Symbol | Min      | Typ      | Max      | Min       | Typ       | Max       | Min        | Typ        | Max        | Unit | Test Conditions/Comments |
| SUPPLY CURRENT ADuM6221ABRNZ5 and ADuM6221ABRNZ3 | I DD1  |          | 4.2      | 8.0      |           | 4.4       | 8.2       |            | 6.7        | 11.5       | mA   | C L = 0 pF               |
|                                                  | I DD2  |          | 2.3      | 4.4      |           | 2.4       | 5.4       |            | 6.5        | 10.0       | mA   |                          |

## Table 12. Switching Specifications

| Parameter                | Symbol        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                         |
|--------------------------|---------------|-------|-------|-------|--------|------------------------------------------------------------------|
| SWITCHING SPECIFICATIONS |               |       |       |       |        |                                                                  |
| Pulse Width              | PW            | 10    |       |       | ns     | Within PWD limit                                                 |
| Data Rate                |               |       |       | 100   | Mbps   | Within PWD limit                                                 |
| Propagation Delay        | t PHL , t PLH | 8.0   | 11    | 16    | ns     | 50% input to 50% output                                          |
| Pulse-Width Distortion   | PWD           |       | 1.0   | 5.0   | ns     | &#124;t PLH - t PHL &#124;                                       |
| Change vs. Temperature   |               |       | 1.5   |       | ps/°C  |                                                                  |
| Propagation Delay Skew   | t PSK         |       |       | 8.0   | ns     | Between any two units at the same temperature, voltage, and load |
| Channel Matching         |               |       | 1     | 5.0   | ns     |                                                                  |
| Jitter                   |               |       | 816   |       | ps p-p |                                                                  |

## Table 13. Input and Output Characteristics

| Parameter                                              | Symbol   | Min         | Typ   | Max         | Unit   | Test Conditions/Comments   |
|--------------------------------------------------------|----------|-------------|-------|-------------|--------|----------------------------|
| DC SPECIFICATIONS Input Threshold Logic High Logic Low | V IH     | 0.7 × V DDx |       |             | V      |                            |
|                                                        | V IL     |             |       | 0.3 × V DDx | V      |                            |

## SPECIFICATIONS

Table 13. Input and Output Characteristics (Continued)

| Parameter                 | Symbol            | Min                     | Typ               | Max     | Unit    | Test Conditions/Comments                                         |
|---------------------------|-------------------|-------------------------|-------------------|---------|---------|------------------------------------------------------------------|
| Output Voltage            |                   |                         |                   |         |         |                                                                  |
| Logic High                | V OH              | V DDx - 0.2 V DDx - 0.5 | V DDx V DDx - 0.2 |         | V V     | I Ox 1 = -20 µA, V Ix = V IxH 2 I Ox 1 = -3.2 mA, V Ix = V IxH 2 |
| Logic Low                 | V OL              |                         | 0.0 0.0           | 0.1 0.4 | V V     | I Ox 1 = 20 µA, V Ix = V IxL 3 I Ox 1 = 3.2 mA, V Ix = V IxL 3   |
| Undervoltage Lockout      | UVLO              |                         |                   |         |         | V DD1 , V DD2 , and V DDP supply                                 |
| Positive Going Threshold  | V UV+             |                         | 1.6               |         | V       |                                                                  |
| Negative Going Threshold  | V UV-             |                         | 1.5               |         | V       |                                                                  |
| Hysteresis                | V UVH             |                         | 0.1               |         | V       |                                                                  |
| Input Current per Channel | I I               | -10                     | +0.01             | +10     | µA      | 0 V ≤ V Ix ≤ V DDx                                               |
| Quiescent Supply Current  | I DD1 (Q)         |                         | 0.5               | 1.0     | mA      | V Ix = Logic 0                                                   |
|                           | I DD2 (Q)         |                         | 0.9               | 1.5     | mA      | V Ix = Logic 0                                                   |
|                           | I DD1 (Q)         |                         | 7.4               | 13.5    | mA      | V Ix = Logic 1                                                   |
|                           | I DD2 (Q)         |                         | 3.2               | 6.2     | mA      | V Ix = Logic 1                                                   |
| Dynamic Supply Current    |                   |                         |                   |         |         |                                                                  |
| Dynamic Input             | I DDI (D)         |                         | 0.01              |         | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| Dynamic Output            | I DDO (D)         |                         | 0.01              |         | mA/Mbps | Inputs switching, 50% duty cycle                                 |
|                           | &#124;CM L &#124; | 75                      | 100               |         | kV/µs   | V Ix = 0 V, V CM = 1000 V                                        |

## ELECTRICAL CHARACTERISTICS-1.8 V OPERATION DIGITAL ISOLATOR CHANNELS ONLY

All typical specifications are at T A = 25°C, V DD1 = V DD2 = 1.8 V. Minimum and maximum specifications apply over the entire recommended operation range: 1.7 V ≤ V DD1 , V DD2 ≤ 1.9 V, and -40°C ≤ T A ≤ +125°C, unless otherwise noted. Switching specifications are tested with C L = 15 pF and CMOS signal levels, unless otherwise noted. Supply currents are specified with 50% duty cycle signals.

Table 14. Data Channel Supply Current Specifications

|                                                  |        | 1 Mbps   | 1 Mbps   | 1 Mbps   | 10 Mbps   | 10 Mbps   | 10 Mbps   | 100 Mbps   | 100 Mbps   | 100 Mbps   |      |                          |
|--------------------------------------------------|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|------------|------|--------------------------|
| Parameter                                        | Symbol | Min      | Typ      | Max      | Min       | Typ       | Max       | Min        | Typ        | Max        | Unit | Test Conditions/Comments |
| SUPPLY CURRENT ADuM6221ABRNZ5 and ADuM6221ABRNZ3 | I DD1  |          | 4.1      | 8.0      |           | 4.4       | 8.0       |            | 6.7        | 11.5       | mA   | C L = 0 pF               |
| SUPPLY CURRENT ADuM6221ABRNZ5 and ADuM6221ABRNZ3 | I DD2  |          | 2.3      | 4.4      |           | 2.6       | 5.3       |            | 6.5        | 9.5        | mA   |                          |

## SPECIFICATIONS

## Table 15. Switching Specifications

| Parameter                | Symbol        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                         |
|--------------------------|---------------|-------|-------|-------|--------|------------------------------------------------------------------|
| SWITCHING SPECIFICATIONS |               |       |       |       |        |                                                                  |
| Pulse Width              | PW            | 10    |       |       | ns     | Within PWD limit                                                 |
| Data Rate                |               |       |       | 100   | Mbps   | Within PWD limit                                                 |
| Propagation Delay        | t PHL , t PLH | 8.0   | 12    | 17    | ns     | 50% input to 50% output                                          |
| Pulse-Width Distortion   | PWD           |       | 1.0   | 5.0   | ns     | &#124;t PLH - t PHL &#124;                                       |
| Change vs. Temperature   |               |       | 1.5   |       | ps/°C  |                                                                  |
| Propagation Delay Skew   | t PSK         |       |       | 8.0   | ns     | Between any two units at the same temperature, voltage, and load |
| Channel Matching         |               |       | 1     | 5.0   | ns     |                                                                  |
| Jitter                   |               |       | 816   |       | ps p-p |                                                                  |

## Table 16. Input and Output Characteristics

| Parameter                        | Symbol            | Min                     | Typ               | Max         | Unit    | Test Conditions/Comments                                         |
|----------------------------------|-------------------|-------------------------|-------------------|-------------|---------|------------------------------------------------------------------|
| DC SPECIFICATIONS                |                   |                         |                   |             |         |                                                                  |
| Input Threshold                  |                   |                         |                   |             |         |                                                                  |
| Logic High                       | V IH              | 0.7 × V DDx             |                   |             | V       |                                                                  |
| Logic Low                        | V IL              |                         |                   | 0.3 × V DDx | V       |                                                                  |
| Output Voltages                  |                   |                         |                   |             |         |                                                                  |
| Logic High                       | V OH              | V DDx - 0.1 V DDx - 0.4 | V DDx V DDx - 0.2 |             | V V     | I Ox 1 = -20 µA, V Ix = V IxH 2 I Ox 1 = -3.2 mA, V Ix = V IxH 2 |
| Logic Low                        | V OL              |                         | 0.0               | 0.1         | V       | I Ox 1 = 20 µA, V Ix = V IxL 3                                   |
|                                  |                   |                         | 0.2               | 0.4         | V       | I Ox 1 = 3.2 mA, V Ix = V IxL 3                                  |
| Undervoltage Lockout             | UVLO              |                         |                   |             |         | V DD1 , V DD2 , and V DDP supply                                 |
| Positive Going Threshold         | V UV+             |                         | 1.6               |             | V       |                                                                  |
| Negative Going Threshold         | V UV-             |                         | 1.5               |             | V       |                                                                  |
| Hysteresis                       | V UVH             |                         | 0.1               |             | V       |                                                                  |
| Input Current per Channel        | I I               | -10                     | +0.01             | +10         | µA      | 0 V ≤ V Ix ≤ V DDx                                               |
| Quiescent Supply Current         |                   |                         |                   |             |         |                                                                  |
| Quiescent Supply Current         | I DD1 (Q)         |                         | 0.5               | 1.0         | mA      | V Ix = Logic 0                                                   |
| Quiescent Supply Current         | I DD2 (Q)         |                         | 0.9               | 1.4         | mA      | V Ix = Logic 0                                                   |
| Quiescent Supply Current         | I DD1 (Q)         |                         | 7.5               | 13.5        | mA      | V Ix = Logic 1                                                   |
| Quiescent Supply Current         | I DD2 (Q)         |                         | 3.2               | 6.2         | mA      | V Ix = Logic 1                                                   |
| Dynamic Supply Current           |                   |                         |                   |             |         |                                                                  |
| Input                            | I DDI (D)         |                         | 0.01              |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| Output                           | I DDO (D)         |                         | 0.01              |             | mA/Mbps | Inputs switching, 50% duty cycle                                 |
| AC SPECIFICATIONS                |                   |                         |                   |             |         |                                                                  |
| Output Rise/Fall Time            | t R /t F          |                         | 2.5               |             | ns      | 10% to 90%                                                       |
| Common-Mode Transient Immunity 4 | &#124;CM H &#124; | 75                      | 100               |             | kV/µs   | V Ix = V DD1 or V ISO , V CM = 1000 V                            |
| Common-Mode Transient Immunity 4 | &#124;CM L &#124; | 75                      | 100               |             | kV/µs   | V Ix = 0 V, V CM = 1000 V                                        |

## SPECIFICATIONS

## PACKAGE CHARACTERISTICS

Table 17. Thermal and Isolation Characteristics

| Parameter                                 | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                                                |
|-------------------------------------------|----------|-------|-------|-------|--------|---------------------------------------------------------------------------------------------------------|
| Resistance (Input to Output) 1            | R I-O    |       | 10 13 |       | Ω      |                                                                                                         |
| Capacitance (Input to Output) 1           | C I-O    |       | 2.2   |       | pF     | Frequency = 1 MHz                                                                                       |
| Input Capacitance 2                       | C I      |       | 4.0   |       | pF     |                                                                                                         |
| IC Junction to Ambient Thermal Resistance | θ JA     |       | 45    |       | °C/W   | Thermocouple located at center of package underside, test conducted on 4-layer board with thin traces 3 |

## REGULATORY APPROVALS

The ADuM6221A certification approvals are listed in Table 18.

Table 18. Regulatory Approvals

| Regulatory Agency                                      | Standard Certification/Approval                                                                                                                                                                                                                                                                                                                                                                                | File                                                                                     |
|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| UL VDE (Pending) CSA 3 TÜV Süd (Pending) CQC (Pending) | 1577 Single protection, 5000 V rms 1 DIN EN IEC 60747-17 (VDE 0884-17) Reinforced insulation, V IORM = 596 V peak IEC/EN/CSA 62368-1 Basic insulation, 830 V rms Reinforced insulation, 415 V rms IEC/CSA 61010-1 Basic insulation, 600 V rms Reinforced insulation, 300 V rms IEC/CSA 60601-1 Basic insulation (1 MOPP), 519 V rms Certified as component level device EN 62368-1: 2020+A11:2020 CQC GB4943.1 | E214100 Certificate No. (pending) File No. 205078 Pending Certificate No. CQC22001370855 |

## SPECIFICATIONS

## INSULATION AND SAFETY RELATED SPECIFICATIONS

Table 19. Critical Safety Related Dimensions and Material Properties

| Parameter                                        | Symbol   | Value   | Unit   | Test Conditions/Comments                                                                                                   |
|--------------------------------------------------|----------|---------|--------|----------------------------------------------------------------------------------------------------------------------------|
| Rated Dielectric Insulation Voltage              |          | 5000    | V rms  | 1-minute duration                                                                                                          |
| Minimum External Air Gap (Clearance) 1, 2        | L(I01)   | 8.3     | mm     | Measured from input terminals to output terminals, shortest distance through air                                           |
| Minimum External Tracking (Creepage)             | L(I02)   | 8.3     | mm     | Measured from input terminals to output terminals, shortest distance path along body                                       |
| Minimum Clearance in the Plane of the PCB        | L (PCB)  | 8.3     | mm     | Measured from input terminals to output terminals, shortest distance through air, line of sight, in the PCB mounting plane |
| Minimum Internal Gap (Internal Clearance)        |          | 21.5    | μm     | Minimum distance through insulation                                                                                        |
| Tracking Resistance (Comparative Tracking Index) | CTI      | >600    | V      | DIN IEC 112/VDE 0303, Part 1                                                                                               |
| Material Group                                   |          | I       |        | Material group per IEC 60664-1                                                                                             |

## DIN EN IEC 60747-17 (VDE 0884-17) INSULATION CHARACTERISTICS

These isolators are suitable for reinforced electrical isolation only within the safety limit data. Maintenance of the safety data is ensured by the protective circuits. The asterisk (*) marking on packages denotes DIN EN IEC 60747-17 (VDE 0884-17) approval.

## Table 20. VDE Characteristics

| Description                                              | Test Conditions/Comments                                                               | Symbol   | Characteristic   | Unit   |
|----------------------------------------------------------|----------------------------------------------------------------------------------------|----------|------------------|--------|
| Overvoltage Category per IEC 60664-1                     |                                                                                        |          |                  |        |
| For Rated Mains Voltage ≤ 150 V rms                      |                                                                                        |          | I to IV          |        |
| For Rated Mains Voltage ≤ 300 V rms                      |                                                                                        |          | I to IV          |        |
| For Rated Mains Voltage ≤ 400 V rms                      |                                                                                        |          | I to IV          |        |
| Climatic Classification                                  |                                                                                        |          | 40/125/21        |        |
| Pollution Degree per DIN VDE 0110, Table 1               |                                                                                        |          | 2                |        |
| Maximum Repetitive Isolation Voltage                     |                                                                                        | V IORM   | 596              | V peak |
| Maximum Working Insulation Voltage                       |                                                                                        | V IOWM   | 421              | V rms  |
| Input to Output Test Voltage, Method b1                  | V IORM × 1.875 = V pd(m) , 100% production test, t m = 1 sec, partial discharge < 5 pC | V pd(m)  | 1118             | V peak |
| Input to Output Test Voltage, Method a                   |                                                                                        |          |                  |        |
| After Environmental Tests Subgroup 1                     | V IORM × 1.6 = V pd(m) , t ini = 60 sec, t m = 10 sec, partial discharge 5 pC          | V pd(m)  | 954              | V peak |
| After Input and/or Safety Test Subgroup 2 and Subgroup 3 | V IORM × 1.2 = V pd(m) , t ini = 60 sec, t m = 10 sec, partial discharge 5 pC          | V pd(m)  | 715              | V peak |
| Maximum Transient Isolation Voltage                      | V TEST = 1.2 × V IOTM , t = 1 sec (100% production)                                    | V IOTM   | 8000             | V peak |
| Maximum Impulse Voltage                                  | Surge voltage in air, waveform per IEC 61000-4-5                                       | V IMP    | 8000             | V peak |
| Withstand Isolation Voltage                              | 1-minute withstand rating                                                              | V ISO    | 5000             | V rms  |
| Maximum Surge Isolation Voltage                          | V TEST ≥ 1.3 × V IMP (sample test), tested in oil, waveform per IEC 61000-4-5          | V IOSM   | 12,800           | V peak |
| Safety Limiting Values                                   |                                                                                        |          |                  |        |
|                                                          | Maximum value allowed in the event of a failure 2)                                     |          |                  |        |
|                                                          | (see Figure                                                                            |          |                  |        |
| Case Temperature                                         |                                                                                        | T S      | 150              | °C     |
| Total Power Dissipation at 25°C                          |                                                                                        | P S1     | 2.78             | W      |
| Insulation Resistance at T S                             | V IO = 500 V                                                                           | R S      | >10 9            | Ω      |

## SPECIFICATIONS

Figure 2. Thermal Derating Curve, Dependence of Safety Limiting Values on Case Temperature, per DIN EN IEC 60747-17 (VDE 0884-17)

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

Table 21. Absolute Maximum Ratings

| Parameter                                          | Rating                   |
|----------------------------------------------------|--------------------------|
| Supply Voltages (V DD1 , V DDP , V DD2 , V ISO ) 1 | -0.5 V to +7.0 V         |
| V ISO Supply Current 2                             | 100 mA                   |
| Input Voltage (V IA , V IB ,V SEL , PDIS) 1, 3     | -0.5 V to V DDI + 0.5 V  |
| Output Voltage (V OA , V OB ) 1, 3                 | -0.5 V to V DDO + 0.5 V  |
| Average Output Current Per Data Output Pin 4       | -10 mA to +10 mA         |
| Common-Mode Transients 5                           | -200 kV/µs to +200 kV/µs |
| Temperature                                        |                          |
| Storage (T ST )                                    | -55°C to +150°C          |
| Ambient Operating                                  | -40°C to +125°C          |

- 2 The V ISO pin may provide current for DC and dynamic loads when connected to V DD2 . This current must be included when determining the total V ISO supply current. For ambient temperatures between 85°C and 125°C, the maximum allowed current is reduced.
- 3 VDDI and V DDO refer to the supply voltages on the input and output sides of a given channel, respectively. For more details, see the PCB Layout section.
- 4 For the maximum rated current values for various temperatures, see Figure 2.
- 5 Common-mode transients refer to common-mode transients across the insulation barrier. Common-mode transients exceeding the absolute maximum ratings may cause latch-up or permanent damage.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## MAXIMUM CONTINUOUS WORKING VOLTAGE

Table 22. ADuM6221A Maximum Continuous Working Voltage 1

| Parameter                   |   Rating | Unit   | Applicable Certification                                    |
|-----------------------------|----------|--------|-------------------------------------------------------------|
| AC Voltage Bipolar Waveform |      596 | V peak | Reinforced insulation rating per IEC 60747-17 (VDE 0884-17) |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Figure 3. ADuM6221A Pin Configuration

<!-- image -->

Table 23. ADuM6221A Pin Function Descriptions

| Pin Number                | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                         |
|---------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                         | V DD1      | Power Supply for the Side 1 Logic Circuits of the Device. V DD1 requires a 0.10 µF bypass capacitor to GND 1 . V DD1 is independent of V DDP and can operate with power supply voltages between 1.7 V and 5.5 V.                                                                                                                    |
| 2, 3, 4, 5, 8, 10, 12, 14 | GND 1      | Ground 1. Ground references for the primary isolator. Pin 2, Pin 3, Pin 4, Pin 5, Pin 8, Pin 10, Pin 12, and Pin 14 are internally connected, and it is recommended to connect the GND 1 pins to a common ground.                                                                                                                   |
| 6                         | V IA       | Logic Input A.                                                                                                                                                                                                                                                                                                                      |
| 7                         | V OB       | Logic Output B.                                                                                                                                                                                                                                                                                                                     |
| 9                         | PDIS       | Power Disable. When PDIS is connected to GND 1 , the power converter is active. When a logic high voltage is applied to PDIS, the power supply enters low power standby mode.                                                                                                                                                       |
| 11                        | V DDP      | DC-to-DC Converter Supply Voltage. 3.0 V to 5.5 V. V DDP requires 0.10 µF and 10 µF bypass capacitors to GND 1 . ADuM6221ABRNZ3 is to be used in the 3.3 V to 3.3 V configuration. ADuM6221ABRNZ5 is to be used in the 5 V to 3.3 V and 5 V to 5 V configuration.                                                                   |
| 13, 16                    | NIC        | Not Internally Connected. These pins are not connected internally.                                                                                                                                                                                                                                                                  |
| 15, 17, 19                | GND ISO    | Grounds for the Isolated DC-to-DC Converter. For low EMI, see recommendations listed under PCB layout. The GND ISO pins are internally isolated from GND 2 .                                                                                                                                                                        |
| 18                        | V ISO      | Secondary Supply Voltage Output for External Loads. V ISO requires 0.10 µF and 10 µF capacitors to GND ISO . For low EMI, see the recommendations shown in the PCB Layout section. ADuM6221ABRNZ3 is to be used in the 3.3 V to 3.3 V configuration. ADuM6221ABRNZ5 is to be used in the 5 V to 3.3 V and 5 V to 5 V configuration. |
| 20                        | V SEL      | Output Voltage Select Input. Connect V SEL to V ISO for a 5 V output or to GND ISO for a 3.3 V output.                                                                                                                                                                                                                              |
| 21, 26, 27                | GND 2      | Ground References for V DD2 on Side 2. It is recommended that the GND 2 pins be connected together. The GND 2 pins are internally isolated from GND ISO .                                                                                                                                                                           |
| 22                        | V IB       | Logic Input B.                                                                                                                                                                                                                                                                                                                      |
| 23                        | V OA       | Logic Output A.                                                                                                                                                                                                                                                                                                                     |
| 24, 25                    | NC         | No Connect.                                                                                                                                                                                                                                                                                                                         |
| 28                        | V DD2      | Power Supply for the Side 2 Logic Circuits of the Device. V DD2 requires a 100 nF bypass capacitor. V DD2 is independent of V ISO and can operate with power supply voltages between 1.7 V and 5.5 V.                                                                                                                               |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

## TRUTH TABLE

Table 24. Data Section Truth Table (Positive Logic)

| V DDI State 1   | V Ix Input 1   | V DDO State 1   | V Ox Output 1   | Notes                                                                                                                                                        |
|-----------------|----------------|-----------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Powered         | High           | Powered         | High            | Normal operation, data is high.                                                                                                                              |
| Powered         | Low            | Powered         | Low             | Normal operation, data is low.                                                                                                                               |
| Do not care     | Do not care    | Unpowered       | High-Z          | Output is off.                                                                                                                                               |
| Unpowered       | Low            | Powered         | Low             | Output default low.                                                                                                                                          |
| Unpowered       | High           | Powered         | Indeterminate   | If a high level is applied to an input when no supply is present, the input can parasitically power the input side, which may cause unpredictable operation. |

## Table 25. Power Section Truth Table (Positive Logic)

|   V DDP (V) | V SEL Input   | PDIS Input   | V ISO (V)               |
|-------------|---------------|--------------|-------------------------|
|         5   | High          | Low          | 5                       |
|         5   | Do not care   | High         | 0                       |
|         5   | Low           | Low          | 3.3                     |
|         3.3 | Low           | Low          | 3.3                     |
|         3.3 | High          | Low          | Condition not supported |
|         3.3 | Do not care   | High         | 0                       |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. Power Supply Efficiency in Supported Power Configurations

<!-- image -->

Figure 5. I ISO Output Current vs. Input Current in Supported Power Configurations

<!-- image -->

Figure 6. Total Power Dissipation vs. I ISO Output Current in Supported Power Configurations

<!-- image -->

Figure 7. Short-Circuit Input Current (I DDP ) and Power Dissipation vs. V DDP

Figure 8. V ISO Transient Load Response, 5 V Output, 10% to 90% Load Step

<!-- image -->

Figure 9. V ISO Transient Load Response, 5 V Input, 3.3 V Output, 10% to 90% Load Step

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. V ISO vs. I ISO Output Current, Input = 5 V, V ISO = 5 V

<!-- image -->

Figure 11. V ISO vs. I ISO Output Current, Input = 5 V, V ISO = 3.3 V

<!-- image -->

Figure 12. V ISO vs. Temperature, Input = 5 V, V ISO = 5 V

<!-- image -->

Figure 13. V ISO vs. Temperature, Input = 3.3 V, V ISO = 3.3 V

Figure 14. Output Voltage Ripple at 90% Load, V ISO = 5 V

<!-- image -->

Figure 15. Output Voltage Ripple at 90% Load, V ISO = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 16. 5 V Input to 5 V Output V ISO Start-Up Transient at 10% and 90% Load

<!-- image -->

Figure 17. 5 V Input to 3.3 V Output V ISO Start-Up Transient at 10% and 90% Load

<!-- image -->

## TERMINOLOGY

## IDD1

I DD1 is the supply current required for the primary side of the digital isolator.

## IDD2

I DD2 is the supply current required for the secondary side of the digital isolator.

## IDDP

I DDP is the supply current required for the primary side of the isolated DC-to-DC converter.

## I ISO

I ISO is the available isolated current supply available to an external load.

## Propagation Delay, tPHL

t PHL is measured from the 50% level of the falling edge of the V Ix signal to the 50% level of the falling edge of the V Ox signal.

## Propagation Delay, tPLH

t PLH is measured from the 50% level of the rising edge of the V Ix signal to the 50% level of the rising edge of the V Ox signal.

## Propagation Delay Skew, tPSK

t PSK is the magnitude of the worst-case difference in t PHL and/or t PLH that is measured between units at the same operating temperature, supply voltages, and output load within the recommended operating conditions.

## Minimum Pulse Width

The minimum pulse width is the shortest pulse width at which the specified pulse width distortion is guaranteed.

## Maximum Data Rate

The maximum data rate is the fastest data rate at which the specified pulse width distortion is guaranteed.

## THEORY OF OPERATION

The DC-to-DC converter section of the ADuM6221A works on principles that are common to most modern power supplies. The ADuM6221A have a split controller architecture with isolated PWM feedback. V DDP power is supplied to an oscillating circuit that switches current into a chip scale, air core transformer. Power transferred to the secondary side is rectified and regulated to a value of 3.3 V or 5 V, which depends on the setting of the V SEL pin. The secondary (V ISO ) side controller regulates the output by creating a PWM control signal that is sent to the primary (V DDP ) side by a dedicated i Coupler data channel. The PWM modulates the oscillator circuit to control the power being sent to the secondary side. Feedback allows for significantly higher power and efficiency.

The ADuM6221A implement undervoltage lockout (UVLO) with hysteresis on the primary and the secondary side input and output pins as well as the V DDP power input. This feature ensures that the converter does not enter oscillation due to noisy input power or slow power-on ramp rates.

The digital isolator channels use a high frequency carrier to transmit data across the isolation barrier using i Coupler chip scale transformer coils separated by layers of polyimide isolation. Using an on/off keying technique and the differential architecture shown in Figure 18, the digital isolator channels have low propagation delay and high speed. Internal regulators and input and output design techniques allow logic and supply voltages over a wide range from 1.7 V to 5.5 V, which offers the voltage translation of 1.8 V, 2.5 V, 3.3 V, and 5 V logic. The architecture is designed for high common-mode transient immunity and high immunity to electrical noise and magnetic interference. Radiated emissions are minimized with a spread spectrum on/off keying carrier and other techniques.

Figure 18 shows the waveforms of the digital isolator channels that have the condition of the fail-safe output state equal to low, where the carrier waveform is off when the input state is low. If the input side is off or not operating, the low fail-safe output state sets the output to low.

Figure 18. Operational Block Diagram of a Single Channel with a Low Fail-Safe Output State, V IN is the Input Voltage and V OUT is the Output Voltage

<!-- image -->

## APPLICATIONS INFORMATION

## PCB LAYOUT

The ADuM6221A digital isolator with an iso Power integrated DC-toDC converter require no external interface circuitry for the logic interfaces. Power supply bypassing is required at the input and output supply pins (see Figure 19, Figure 20, and Figure 21). For proper data channel operation, low equivalent series resistance (ESR) bypass capacitors of 0.01 µF to 0.1 µF are required between the V DD1 and GND 1 pins as close to the chip pads as possible. Low ESR bypass capacitors of 0.1 µF or 0.22 µF are required between the V ISO and GND ISO pins as close to the chip pads as possible (see the C ISO notes in Figure 20 and Figure 21). Installing the bypass capacitor with traces more than 2 mm in length may result in data corruption. The iso Power inputs require several passive components to bypass the power effectively, as well as set the output voltage.

Figure 19. V DD1 and V DDP Bias and Bypass Components

<!-- image -->

Figure 20. V DD2 and V ISO Bias and Bypass Components

<!-- image -->

The power supply section of the ADuM6221A use a 180 MHz oscillator frequency to efficiently pass power through the chip scale transformers. Bypass capacitors are required for several operating frequencies. Noise suppression requires a low inductance and high frequency capacitor. Ripple suppression and proper regulation require a large value capacitor. These capacitors are connected between the V DDP and GND 1 pins and between the V ISO and GND ISO pins. To suppress noise and reduce ripple, a parallel combination of at least two capacitors is required. The required capacitor values are 0.1 µF and 10 µF for V DD1 . The smaller capacitor must have a low ESR. For example, use of a ceramic capacitor is advised. The total lead length between the ends of the low ESR capacitor and the input power supply pin must not exceed 2 mm.

To reduce the level of electromagnetic radiation, the impedance to high frequency currents between the V ISO and the GND ISO pins and the PCB trace connections can be increased. Using this method of electromagnetic interference (EMI) suppression controls the radiating signal at the signal source by placing surface-mount ferrite beads in series with the V ISO and GND ISO pins, as seen in Figure 21. Note that if ferrite beads are used, all guaranteed electrical specifications may not be met due to the additional series resistance (DCR). The impedance of the ferrite beads must be approximately 1.8 kΩ between the 100 MHz and 1 GHz frequency range to reduce the emissions at the 180 MHz primary switching frequency and the 360 MHz secondary side, which rectifies frequency and harmonics. For examples of appropriate surface-mount ferrite beads, see Table 26.

Table 26. Surface-Mount Ferrite Bead Examples

| Manufacturer       | Part Number    |   Size |   DCR (Ω) |
|--------------------|----------------|--------|-----------|
| Taiyo Yuden        | BKH1005LM182-T |   0402 |       2   |
| Murata Electronics | BLM15HD182SN1  |   0402 |       2.2 |
| Murata Electronics | BLM18HE152SN1  |   0603 |       0.5 |

Figure 21. Recommended PCB Layout

<!-- image -->

In applications involving high common-mode transients, ensure that the board coupling across the isolation barrier is minimized. Furthermore, design the board layout such that any coupling that does occur equally affects all pins on a given component side. Failure to ensure these steps can cause voltage differentials between pins, which exceeds the absolute maximum ratings specified in Table 21, thereby leading to latch-up and/or permanent damage.

## APPLICATIONS INFORMATION

## THERMAL ANALYSIS

The ADuM6221A consists of five internal die attached to a split lead frame with two die attach pads. For the purposes of thermal analysis, the die is treated as a thermal unit, with the highest junction temperature reflected in the θ JA value from Table 17. The value of θ JA is based on measurements taken with the devices mounted on a JEDEC standard, 4-layer board with fine width traces and still air. Under normal operating conditions, the ADuM6221A can operate at full load. However, at temperatures above 85°C, derating the output current may be needed, as shown in Figure 2.

## PROPAGATION DELAY RELATED PARAMETERS

Propagation delay is a parameter that describes the time it takes a logic signal to propagate through a component (see Figure 22). The propagation delay to a logic low output may differ from the propagation delay to a logic high.

Figure 22. Propagation Delay Parameters

<!-- image -->

PWD is the maximum difference between these two propagation delay values and is an indication of how accurately the input signal timing is preserved.

Channel-to-channel matching refers to the maximum amount the propagation delay differs between channels within a single ADuM6221A component.

Propagation delay skew refers to the maximum amount the propagation delay differs between multiple ADuM6221A components operating under the same conditions.

## ELECTROMAGNETIC COMPATIBILITY

The DC-to-DC converter section of the ADuM6221A components must, of necessity, operate at a high frequency to allow efficient power transfer through the small transformers, which creates high frequency currents that can propagate in circuit board ground and power planes, which requires proper power supply bypassing at the input and output supply pins (see Figure 21). Using proper layout and bypassing techniques, the DC-to-DC converter is designed to provide regulated and isolated power that is below CISPR 32/EN 55032 Class B limits up to 5 Mbps at full load on a 2-layer PCB with ferrites.

## POWER CONSUMPTION

The V DDP power supply input only provides power to the converter. Power for the data channels is provided through V DD1 and V DD2 . These power supplies can be connected to V DDP and V ISO if required, or the supplies can receive power from an independent source. Treat the converter as a standalone supply to be utilized at the discretion of the designer.

The V DD1 or V DD2 supply current at a given channel of the ADuM6221A isolator is a function of the supply voltage, the data rate of the channel, and the output load of the channel.

The V DD1 and V DD2 supply current and the total supply currents as a function of data rate for the ADuM6221A for an unloaded output condition are shown under typical supply and room temperature conditions in the figures shown in the Typical Performance Characteristics section. The total I ISO output current as a function of input current for the ADuM6221A is shown in Figure 5. In addition, the total power dissipation as a function of output current is shown in Figure 6.

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                                         |
|----------------------------|----------------|-------------------------------------------------------------|
| RN-28-1                    | SOIC_W_FP      | 28-Lead Standard Small Outline, Wide Body, with Finer Pitch |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1           | Temperature Range   | Package Description   | Packing Quantity   | Package Option   |
|-------------------|---------------------|-----------------------|--------------------|------------------|
| ADuM6221ABRNZ3    | -40°C to +125°C     | 28-Lead SOIC_W_FP     |                    | RN-28-1          |
| ADuM6221ABRNZ3-RL | -40°C to +125°C     | 28-Lead SOIC_W_FP     | Reel, 1000         | RN-28-1          |
| ADuM6221ABRNZ5    | -40°C to +125°C     | 28-Lead SOIC_W_FP     |                    | RN-28-1          |
| ADuM6221ABRNZ5-RL | -40°C to +125°C     | 28-Lead SOIC_W_FP     | Reel, 1000         | RN-28-1          |

## EVALUATION BOARDS

| Model 1, 2         | Description      |
|--------------------|------------------|
| EVAL-ADuM6421AURNZ | Evaluation Board |

<!-- image -->

Updated: February 05, 2024