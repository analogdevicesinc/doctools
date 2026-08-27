<!-- lastmod 2020-10-16 -->
<!-- image -->

## FEATURES

- 5.7kV rms signal isolated CAN FD transceiver
- 1.7V to 5.5V supply and logic side levels
- 4.5V to 5.5V supply on bus side
- ISO 11898-2:2016-compliant CAN FD
- Data rates up to 12Mbps for CAN FD
- Low maximum loop propagation delay: 145ns
- Extended common-mode range (V CANx ): ±25V
- Bus fault protection (CANH, CANL): ±40V
- Passes EN 55022, Class B by 6dB
- [Safety and regulatory approvals](https://www.analog.com/icouplersafety?doc=ADM3050E-EP.pdf)
- DIN EN IEC 60747-17 (VDE 0884-17) ► VIORM = 849V peak
- UL 1577
- VISO = 5700V rms for 1 minute
- IEC/EN/CSA 62368-1
- IEC/CSA 60601-1
- IEC/CSA 61010-1
- CQC GB 4943.1
- High CMTI: &gt;75kV/µs

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications (AQEC standard)
- Military temperature range (-55°C to +125°C)
- Controlled manufacturing baseline
- 1 assembly/test site
- 1 fabrication site
- Product change notification
- Qualification data available on request

## APPLICATIONS

- CANOpen, DeviceNet, and other CAN bus implementations
- Industrial automation
- Military and aerospace (MILA) avionics for sensors, actuators, and engine control

## 5.7kV rms, Signal Isolated, Basic CAN FD Transceiver

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. ADM3050E-EP Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADM3050E-EP is a 5.7kV rms isolated controller area network (CAN) physical layer transceiver with a high performance, basic feature set. The ADM3050E-EP fully meets the CAN flexible data rate (CAN FD) ISO 11898-2:2016 requirements and is further capable of supporting data rates as high as 12Mbps.

The device employs Analog Devices, Inc., i Coupler ®  technology to combine a 2-channel isolator and a CAN transceiver into a single small outline integrated circuit (SOIC) surface-mount package. The ADM3050E-EP is a fully isolated solution for CAN and CAN FD applications. The ADM3050E-EP provides isolation between the CAN controller and physical layer bus. Safety and regulatory approvals for a 5.7kV rms withstand voltage, an 849V peak working voltage, and a 12.8kV surge test, ensure that the ADM3050E-EP meets application isolation requirements.

Low loop propagation delays and the extended common-mode range of ±25V support robust communication on longer bus cables. Dominant timeout functionality protects against bus lock up in a fault condition, and current limiting and thermal shutdown features protect against output short circuits. The CAN bus input and output pins are protected to ±40V against accidental connection to a +24V bus supply. The device is fully specified over the -55°C to +125°C industrial temperature range.

Additional application and technical information can be found in the ADM3050E data sheet.

## TABLE OF CONTENTS

| Features................................................................                                                                                                                                                                                      | 1 Thermal Characteristics..................................... 8                                                                                                                                                                                              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features..................................1                                                                                                                                                                                                  | ESD Ratings for ADM3050E-EP........................8                                                                                                                                                                                                          |
| Applications........................................................... 1                                                                                                                                                                                     | ESD Caution.......................................................8                                                                                                                                                                                           |
| Functional Block Diagram......................................1                                                                                                                                                                                               | Pin Configuration and Function Descriptions........ 9                                                                                                                                                                                                         |
| General Description...............................................1                                                                                                                                                                                           | Operational Truth Table......................................9                                                                                                                                                                                                |
| Specifications........................................................ 3                                                                                                                                                                                      | Typical Performance Characteristics...................10                                                                                                                                                                                                      |
| Electrical Specifications......................................3                                                                                                                                                                                              | Test Circuits.........................................................12                                                                                                                                                                                      |
| Timing Specifications......................................... 5                                                                                                                                                                                              | Outline Dimensions............................................. 13                                                                                                                                                                                            |
| Insulation Specifications.....................................6                                                                                                                                                                                               | Ordering Guide.................................................13                                                                                                                                                                                             |
| Regulatory Information.......................................7                                                                                                                                                                                                | Evaluation Boards............................................13                                                                                                                                                                                               |
| Absolute Maximum Ratings...................................8                                                                                                                                                                                                  |                                                                                                                                                                                                                                                               |
| REVISION HISTORY                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                               |
| 3/2026-Rev. 0 to Rev. A                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                               |
| Changes to Features Section.......................................................................................................................... 1                                                                                                       | Changes to Features Section.......................................................................................................................... 1                                                                                                       |
| Changes to Figure 1........................................................................................................................................ 1                                                                                                 | Changes to Figure 1........................................................................................................................................ 1                                                                                                 |
| Change to General Description Section...........................................................................................................1                                                                                                             | Change to General Description Section...........................................................................................................1                                                                                                             |
| Added Electrical Specifications Section and Table 1 Title............................................................................... 3                                                                                                                    | Added Electrical Specifications Section and Table 1 Title............................................................................... 3                                                                                                                    |
| Added Table 2 Title.......................................................................................................................................... 5                                                                                               | Added Table 2 Title.......................................................................................................................................... 5                                                                                               |
| Changes to Insulation Specifications Section and Table 3.............................................................................. 6                                                                                                                      | Changes to Insulation Specifications Section and Table 3.............................................................................. 6                                                                                                                      |
| Moved Figure 4................................................................................................................................................7                                                                                               | Moved Figure 4................................................................................................................................................7                                                                                               |
| Changes to Figure 4........................................................................................................................................ 7                                                                                                 | Changes to Figure 4........................................................................................................................................ 7                                                                                                 |
| Deleted Package Characteristics Section and Table 4; Renumbered Sequentially.........................................7                                                                                                                                        | Deleted Package Characteristics Section and Table 4; Renumbered Sequentially.........................................7                                                                                                                                        |
| Changes to Regulatory Information Section and Table 4.................................................................................7                                                                                                                       | Changes to Regulatory Information Section and Table 4.................................................................................7                                                                                                                       |
| Deleted DIN V VDE V 0884-10 (VDE V 0884-10) Insulation Characteristics (Pending) Section and Table                                                                                                                                                            | Deleted DIN V VDE V 0884-10 (VDE V 0884-10) Insulation Characteristics (Pending) Section and Table                                                                                                                                                            |
|                                                                                                                                                                                                                                                               | 6........................................................................................................................................................... 7                                                                                                |
| Changes to Absolute Maximum Ratings Section and Table 5.........................................................................8 Changed Thermal Resistance Section to Thermal Characteristics Section.................................................... 8 | Changes to Absolute Maximum Ratings Section and Table 5.........................................................................8 Changed Thermal Resistance Section to Thermal Characteristics Section.................................................... 8 |
| Changes to Thermal Characteristics Section and Table 6...............................................................................8                                                                                                                        | Changes to Thermal Characteristics Section and Table 6...............................................................................8                                                                                                                        |
| Added ESD Ratings for ADM3050E-EP and Table 7; Renumbered Sequentially........................................... 8                                                                                                                                           | Added ESD Ratings for ADM3050E-EP and Table 7; Renumbered Sequentially........................................... 8                                                                                                                                           |
| Deleted Table 9................................................................................................................................................8                                                                                              | Deleted Table 9................................................................................................................................................8                                                                                              |

## 2/2019-Revision 0: Initial Version

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

All voltages are relative to their respective ground, 1.7V ≤ V DD1 ≤ 5.5V, 4.5V ≤ V DD2 ≤ 5.5V, and -55°C ≤ T A ≤ +125°C, unless otherwise noted. Typical specifications are at V DD1 = V DD2 = 5V and T A = 25°C, unless otherwise noted.

Table 1. Electrical Characteristics

| Parameter                                                           | Symbol                               | Min          |   Typ | Max          | Unit   | Test Conditions/Comments                                                                 |
|---------------------------------------------------------------------|--------------------------------------|--------------|-------|--------------|--------|------------------------------------------------------------------------------------------|
| SUPPLY CURRENT                                                      |                                      |              |       |              |        |                                                                                          |
| Bus Side                                                            | I DD2                                |              |       |              |        |                                                                                          |
| Recessive State                                                     |                                      |              |   5.3 | 7            | mA     | TXD high, load resistance (R L ) = 60Ω                                                   |
| Dominant State                                                      |                                      |              |    63 | 75           | mA     | Limited by transmit dominant timeout (t DT ), R L = 60Ω                                  |
|                                                                     |                                      |              |       | 73           | mA     | Limited by t DT , R L = 60Ω, 4.75V ≤ V DD2 ≤ 5.25V                                       |
| 70% Dominant/30% Recessive                                          |                                      |              |       |              |        | Worst case, R L = 60Ω                                                                    |
| 1 Mbps                                                              |                                      |              |    45 | 58           | mA     |                                                                                          |
| 5 Mbps                                                              |                                      |              |    49 | 60           | mA     |                                                                                          |
| 12 Mbps                                                             |                                      |              |    58 | 65           | mA     |                                                                                          |
| Logic Side i Coupler Current                                        | I DD1                                |              |       | 5.5          | mA     | TXD high, low, or switching                                                              |
| DRIVER                                                              |                                      |              |       |              |        |                                                                                          |
| Differential Outputs                                                |                                      |              |       |              |        | See Figure 18                                                                            |
| Recessive State Voltage                                             |                                      |              |       |              |        | TXD high, R L , and common-mode filter capacitor (C F ) open                             |
| CANH, CANL                                                          | V CANL , V CANH                      | 2.0          |       | 3.0          | V      |                                                                                          |
| Differential Output                                                 | V OD                                 | -500         |       | +50          | mV     |                                                                                          |
| Dominant State Voltage                                              |                                      |              |       |              |        | TXD low, C F open                                                                        |
| CANH                                                                | V CANH                               | 2.75         |       | 4.5          | V      | 50Ω ≤ R L ≤ 65Ω                                                                          |
| CANL                                                                | V CANL                               | 0.5          |       | 2.0          | V      | 50Ω ≤ R L ≤ 65Ω                                                                          |
| Differential Output                                                 | V OD                                 | 1.5          |       | 3.0          | V      | 50Ω ≤ R L ≤ 65Ω                                                                          |
|                                                                     |                                      | 1.4          |       | 3.3          | V      | 45Ω ≤ R L ≤ 70Ω                                                                          |
|                                                                     |                                      | 1.5          |       | 5.0          | V      | R L = 2240Ω                                                                              |
| Output Symmetry (V DD2 - V CANH to V CANL )                         | V SYM                                | -0.55        |       | +0.55        | V      | R L = 60Ω, C F = 4.7nF                                                                   |
| Short-Circuit Current                                               | &#124;I SC &#124;                    |              |       |              |        | R L open                                                                                 |
| Absolute                                                            |                                      |              |       |              |        |                                                                                          |
| CANH                                                                |                                      |              |       | 115          | mA     | V CANH = -3V                                                                             |
| CANL                                                                |                                      |              |       | 115          | mA     | V CANL = 18V                                                                             |
| Steady State                                                        |                                      |              |       |              |        |                                                                                          |
| CANH                                                                |                                      |              |       | 115          | mA     | V CANH = -24V                                                                            |
| CANL                                                                |                                      |              |       | 115          | mA     | V CANL = 24V                                                                             |
| Logic Input TXD                                                     |                                      |              |       |              |        |                                                                                          |
| Input Voltage                                                       |                                      |              |       |              |        |                                                                                          |
| High                                                                | V IH                                 | 0.65 × V DD1 |       |              | V      |                                                                                          |
| Low                                                                 | V IL                                 |              |       | 0.35 × V DD1 | V      |                                                                                          |
| Complementary Metal-Oxide Semiconductor (CMOS) Logic Input Currents | &#124;I IH &#124;, &#124;I IL &#124; |              |       | 10           | µA     | Input high or low                                                                        |
| RECEIVER                                                            |                                      |              |       |              |        |                                                                                          |
| Differential Inputs                                                 |                                      |              |       |              |        |                                                                                          |
| Differential Input Voltage Range                                    | V ID                                 |              |       |              |        | See Figure 19, RXD capacitance (C RXD ) open, -25V < V CANL < +25V, -25V < V CANH < +25V |
| Recessive                                                           |                                      | -1.0         |       | +0.5         | V      |                                                                                          |
| Dominant                                                            |                                      | 0.9          |       | 5.0          | V      |                                                                                          |
| Input Voltage Hysteresis                                            | V HYS                                |              |   150 |              | mV     |                                                                                          |

## SPECIFICATIONS

Table 1. Electrical Characteristics (Continued)

| Parameter                               | Symbol                  | Min         |   Typ |   Max | Unit   | Test Conditions/Comments                                      |
|-----------------------------------------|-------------------------|-------------|-------|-------|--------|---------------------------------------------------------------|
| Unpowered Input Leakage Current         | &#124;I IN (OFF) &#124; |             |       |    10 | µA     | V CANH , V CANL = 5V, V DD2 = 0V                              |
| Input Resistance                        |                         |             |       |       |        |                                                               |
| CANH, CANL                              | R INH , R INL           | 6           |       |    25 | kΩ     |                                                               |
| Differential                            | R DIFF                  | 20          |       |   100 | kΩ     |                                                               |
| Input Resistance Matching               | m R                     | -0.03       |       | +0.03 |        | m R = 2 × (R INH - R INL )/(R INH + R INL )                   |
| CANH, CANL Input Capacitance            | C INH , C INL           |             |    35 |       | pF     |                                                               |
| Differential Input Capacitance          | C DIFF                  |             |    12 |       | pF     |                                                               |
| Logic Output (RXD)                      |                         |             |       |       |        |                                                               |
| Output Voltage                          |                         |             |       |       |        |                                                               |
| Low                                     | V OL                    |             |   0.2 |   0.4 | V      | Output impedance (I OUT ) = 2mA                               |
| High                                    | V OH                    | V DD1 - 0.2 |       |       | V      | I OUT = -2mA                                                  |
| Short-Circuit Current                   | I OS                    | 7           |       |    85 | mA     | Output voltage (V OUT ) = GND 1 or V DD1                      |
| COMMON-MODE TRANSIENT IMMUNITY (CMTI) 1 |                         |             |       |       |        | Common-mode voltage (V CM ) ≥ 1kV, transient magnitude ≥ 800V |
| Input High, Recessive                   | &#124;CM H &#124;       | 75          |   100 |       | kV/µs  | Input voltage (V IN ) = V DD1 (TXD) or CANH/CANL recessive    |
| Input Low, Dominant                     | &#124;CM L &#124;       | 75          |   100 |       | kV/µs  | V IN = 0V (TXD) or CANH/CANL dominant                         |

1 |CMH | is the maximum common-mode voltage slew rate that can be sustained while maintaining CANH/CANL recessive or RXD ≥ V DD1 - 0.2V. |CM L | is the maximum common-mode voltage slew rate that can be sustained while maintaining CANH/CANL dominant or RXD ≤ 0.4V. The common-mode voltage slew rates apply to both rising and falling common-mode voltage edges.

## SPECIFICATIONS

## TIMING SPECIFICATIONS

All voltages are relative to their respective ground, 1.7V ≤ V DD1 ≤ 5.5V, 4.5V ≤ V DD2 ≤ 5.5V, and -55°C ≤ T A ≤ +125°C, unless otherwise noted. Typical specifications are at V DD1 = V DD2 = 5V and T A = 25°C, unless otherwise noted. See the ADM3050E data sheet for information about t BIT\_BUS .

Table 2. Timing Characteristics

| Parameter                                                 | Symbol      |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                                            |
|-----------------------------------------------------------|-------------|-------|-------|-------|--------|-------------------------------------------------------------------------------------|
| DRIVER                                                    |             |       |       |       |        | See Figure 2 and Figure 18, t BIT_TXD = 200ns, R L = 60Ω, C L = 100pF               |
| Maximum Data Rate                                         |             |    12 |       |       | Mbps   |                                                                                     |
| Propagation Delay from TXD to Bus (Recessive to Dominant) | t TXD_DOM   |       |    35 |    60 | ns     |                                                                                     |
| Propagation Delay from TXD to Bus (Dominant to Recessive) | t TXD_REC   |       |    45 |    70 | ns     |                                                                                     |
| Transmit Dominant Timeout                                 | t DT        |  1175 |       |  4000 | µs     | TXD low, see Figure 3                                                               |
| RECEIVER                                                  |             |       |       |       |        | See Figure 2 and Figure 20, t BIT_TXD = 200ns, R L = 60Ω, C L = 100pF, C RXD = 15pF |
| Falling Edge Loop Propagation Delay (TXD to RXD)          | t LOOP_FALL |       |       |   145 | ns     |                                                                                     |
| Rising Edge Loop Propagation Delay (TXD to RXD)           | t LOOP_RISE |       |       |   145 | ns     |                                                                                     |
| Loop Delay Symmetry (Minimum Recessive Bit Width)         | t BIT_RXD   |       |       |       |        |                                                                                     |
| 2Mbps                                                     |             |   450 |       |   550 | ns     | t BIT_TXD = 500ns                                                                   |
| 5Mbps                                                     |             |   160 |       |   220 | ns     | t BIT_TXD = 200ns                                                                   |
| 8Mbps                                                     |             |    85 |       |   140 | ns     | t BIT_TXD = 125ns                                                                   |
| 12Mbps                                                    |             |    50 |       |  91.6 | ns     | t BIT_TXD = 83.3ns                                                                  |

## Timing Diagrams

<!-- image -->

Figure 2. Transceiver Timing Diagram

<!-- image -->

## SPECIFICATIONS

## INSULATION SPECIFICATIONS

The ADM3050E-EP is suitable for "safe electrical insulation" only within the safety limiting ratings. Compliance with the safety limiting ratings shall be ensured by means of suitable protective circuits.

Table 3. ADM3050E-EP 16-Lead Standard Small Outline Package, Wide Body [SOIC\_W] (RW-16) Insulation Characteristics

| Parameter                                 | Symbol      | Value        | Unit         | Test Conditions/Comments                                                                                                                                                                     |
|-------------------------------------------|-------------|--------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GENERAL                                   |             |              |              |                                                                                                                                                                                              |
| Minimum External Clearance Distance       | CLR         | 7.8          | mm           | Measured from input terminals to output terminals, shortest distance through air per IEC 60664-1                                                                                             |
| Minimum External Creepage Distance        | CRP         | 7.8          | mm           | Measured from input terminals to output terminals, shortest distance along body per IEC 60664-1                                                                                              |
| Distance Through Insulation               | DTI         | 29           | μm           | Minimum internal                                                                                                                                                                             |
| Comparative Tracking Index                | CTI         | >600         | V            | Per IEC 60112                                                                                                                                                                                |
| Material Group                            |             | I            |              | Per IEC 60664-1                                                                                                                                                                              |
| Overvoltage Category per IEC 60664-1      |             | I to IV      |              | Rated mains voltage ≤ 600V rms                                                                                                                                                               |
| SAFETY LIMITING VALUES                    |             |              |              |                                                                                                                                                                                              |
| Maximum Ambient Safety Temperature        | T S         | 150          | °C           |                                                                                                                                                                                              |
| Maximum Total Power Dissipation           | P TOT       | 1.68         | W            | T A ≤ 25°C , P TOT = P SI = P SO                                                                                                                                                             |
| Derating Above Ambient (T A )             |             | 13.44        | mW/°C        | T A > 25°C, see Figure 4                                                                                                                                                                     |
| Junction-to-Air Thermal Impedance         | θ JA        | 74.1         | °C/W         | See the Table 6 section                                                                                                                                                                      |
| IEC 60747-17 (REINFORCED INSULATION)      |             |              |              |                                                                                                                                                                                              |
| Maximum Repetitive Peak Isolation Voltage | V IORM      | 849          | V peak       |                                                                                                                                                                                              |
| Maximum Isolation Working Voltage         | V IOWM      | 600 849      | V rms V peak | AC voltage, end of life test, f = 60Hz DC voltage                                                                                                                                            |
| Maximum Transient Isolation Voltage       | V IOTM      | 8000         | V peak       | V TEST ≥ 1.2 × V IOTM , t = 1s (100% production)                                                                                                                                             |
| Maximum Impulse Voltage                   | V IMP       | 8000         | V peak       | Surge voltage in air, waveform per IEC 61000-4-5                                                                                                                                             |
| Maximum Surge Isolation Voltage           | V IOSM      | 12800        | V peak       | V TEST ≥ 1.3 × V IMP minimum 10kV (type test), tested in oil, waveform per IEC 61000-4-5                                                                                                     |
| Apparent Charge                           | q pd        | ≤5           | pC           | Method a (sample test), V ini = V IOTM , t ini = 60s, V pd(m) = 1.6 × V IORM , t m = 10s Method b1 (100% production), V ini ≥ 1.2 × V IOTM , t ini = 1s, V pd(m) = 1.875 × V IORM , t m = 1s |
| Resistance (Input to Output) 1            | R IO R IO_S | >10 13 >10 9 | Ω Ω          | T A = 25°C, V TEST = 500V DC, t = 60s T A = T S , V TEST = 500V DC, t = 60s                                                                                                                  |
| Capacitance (Input to Output)             | C IO        | 4            | pF           | f TEST = 1MHz                                                                                                                                                                                |
| Climatic Category                         |             | 55/125/21    |              |                                                                                                                                                                                              |
| Pollution Degree                          |             | 2            |              | Per IEC 60664-1                                                                                                                                                                              |
| UL 1577                                   |             |              |              |                                                                                                                                                                                              |
| Maximum Withstanding Isolation Voltage    | V ISO       | 5700         | V rms        | V TEST = 1.2 × V ISO , t = 1s (100% production)                                                                                                                                              |

1 Device measured as a 2-terminal device with Pin 1 to Pin 4 connected and Pin 5 to Pin 8 connected.

## SPECIFICATIONS

Figure 4. Thermal Derating Curve for 16-Lead Standard Small Outline Package, Wide Body [SOIC\_W] (RW-16) Package, Dependence of Safety Limiting Power with Ambient Temperature per IEC 60747-17

<!-- image -->

## REGULATORY INFORMATION

The ADM3050E-EP has been approved by the organizations listed in Table 4. Copies of the relevant certificates are available at Safety and Regulatory Certifications for Digital Isolation.

Table 4. ADM3050E-EP 16-Lead Standard Small Outline Package, Wide Body [SOIC\_W] (RW-16) Package Certifications

| Regulatory Agency   | Safety Standard/Rating                                                                                                                                                                                          | File or Certificate Number   |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| UL                  | UL 1577 Single protection, 5700V rms isolation voltage                                                                                                                                                          | File E214100                 |
| CSA 1               | CSA 14-18 CSA/EN/IEC 62368-1 Basic insulation at 780V rms Reinforced insulation at 390V rms CSA/IEC 60601-1 2 MOPP at 237.5V rms CSA/IEC 61010-1 Basic insulation at 600V rms Reinforced insulation at 300V rms | File 205078                  |
| VDE                 | DIN EN IEC 60747-17 (VDE 0884-17) Reinforced insulation at 849V peak                                                                                                                                            | Certificate 40051926         |
| CQC                 | GB 4943.1 Basic insulation at 760V rms Reinforced insulation at 380V rms                                                                                                                                        | Certificate CQC19001229559   |

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                                       |                       |
|------------------------------------------------|-----------------------|
| Parameter                                      | Rating                |
| V DD1 to GND 1 / V DD2 to GND 2                | -0.5V to +6V          |
| Logic Side Input and Output: TXD, RXD to GND 1 | -0.5V to V DD1 + 0.5V |
| CANH, CANL to GND 2                            | -40V to +40V          |
| Operating Temperature Range                    | -55°C to +125°C       |
| Storage Temperature Range                      | -65°C to +150°C       |
| Maximum Junction Temperature (T J )            | 150°C                 |
| Moisture Sensitivity Level (MSL)               | MSL3                  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL CHARACTERISTICS

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

Thermal resistance and characterization parameter values specified in Table 6 are defined and calculated based on the JEDEC JESD51 standards. For more details on their definition and usage, see JEDEC JESD51-12 and the Thermal Analysis section of the ADM3050E datasheet.

## Table 6. Package Thermal Data

| Package Type   |   θ JA |   θ JB |   Ψ JB |   Ψ JT | Unit   |
|----------------|--------|--------|--------|--------|--------|
| RW-16 1        |   74.1 |   50.6 |   53.8 |    7.8 | °C/W   |

- 1 Thermal impedance simulated values are based on JEDEC 2S2P thermal test board with no vias and still air.

## ESD RATINGS FOR ADM3050E-EP

The following ESD information is provided for handling of ESD-sensitive devices in an ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

International Electrotechnical Commission (IEC) electromagnetic compatibility: Part 4-2 (IEC) per IEC 61000-4-2.

## Table 7. ADM3050E-EP ESD Ratings

| ESD Model   | Withstand Threshold (kV)                                                                              | Class                   |
|-------------|-------------------------------------------------------------------------------------------------------|-------------------------|
| HBM 1       | ±4                                                                                                    | 3A                      |
| IEC 2       | ±8 3 (contact discharge) to GND 2 ±15 (air discharge) to GND 2 ±8 (contact, across isolation barrier) | Level 4 Level 4 Level 4 |

## ESD CAUTION

## ESD (electrostatic discharge) sensitive device . Charged

<!-- image -->

devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 5. Pin Configuration

<!-- image -->

## Table 8. Pin Function Descriptions

| Pin No.      | Mnemonic   | Description                                                                             |
|--------------|------------|-----------------------------------------------------------------------------------------|
| 1            | V DD1      | Power Supply, Logic Side, 1.7V to 5.5V. This pin requires a 0.1µF decoupling capacitor. |
| 2, 7, 8      | GND 1      | Ground, Logic Side.                                                                     |
| 3            | RXD        | Receiver Output Data.                                                                   |
| 4, 5, 11, 14 | NC         | No Connect. No internal connection to IC.                                               |
| 6            | TXD        | Driver Input Data.                                                                      |
| 9, 10, 15    | GND 2      | Ground, Bus Side.                                                                       |
| 12           | CANL       | CAN Low Input and Output.                                                               |
| 13           | CANH       | CAN High Input and Output.                                                              |
| 16           | V DD2      | Power Supply, Bus Side, 4.5V to 5.5V. This pin requires a 0.1µF decoupling capacitor.   |

## OPERATIONAL TRUTH TABLE

## Table 9. Truth Table

| V DD1   | V DD2   | TXD        | Mode            | RXD           | CANH/CANL                   |
|---------|---------|------------|-----------------|---------------|-----------------------------|
| On      | On      | Low        | Normal          | Low           | Dominant (limited by t DT ) |
| On      | On      | High       | Normal          | High per bus  | Recessive and set by bus    |
| Off     | On      | Don't care | Normal          | Indeterminate | Recessive and set by bus    |
| On      | Off     | Don't care | Transceiver off | High          | High-Z                      |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 6. Supply Current (I DD1 ) vs. Data Rate

<!-- image -->

Figure 7. Supply Current (I DD2 ) vs. Data Rate

<!-- image -->

Figure 8. Receiver Input Hysteresis vs. Temperature

<!-- image -->

Figure 9. t TXD\_DOM vs. Temperature

Figure 10. t TXD\_REC vs. Temperature

<!-- image -->

Figure 11. t LOOP\_RISE vs. Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 12. t LOOP\_FALL vs. Temperature

<!-- image -->

Figure 13. Differential Output Voltage vs. Temperature, R L = 60Ω

<!-- image -->

Figure 14. Differential Output Voltage vs. Supply Voltage (V DD2 ), R L = 60Ω

<!-- image -->

Figure 15. Supply Current (I DD1 ) vs. Temperature

Figure 16. Supply Current (I DD2 ) vs. Temperature

<!-- image -->

Figure 17. Dominant Timeout (t DT ) vs. Temperature

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 18. Driver Voltage Measurement

<!-- image -->

Figure 19. Receiver Voltage Measurement

<!-- image -->

Figure 20. Switching Characteristics Measurements

Figure 21. R DIFF and C DIFF Measured in Recessive State, Bus Disconnected

<!-- image -->

Figure 22. Input Resistance (R INx ) and Input Capacitance (C INx ) Measured in Recessive State, Bus Disconnected

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                    |
|----------------------------|----------------|----------------------------------------|
| RW-16                      | SOIC_W         | 16-Lead Standard Small Outline Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                             | Package Option   |
|--------------------|---------------------|-------------------------------------------------|------------------|
| ADM3050ETRWZ-EP    | -55°C to +125°C     | 16-Lead Standard Small Outline Package [SOIC_W] | RW-16            |
| ADM3050ETRWZ-EP-RL | -55°C to +125°C     | 16-Lead Standard Small Outline Package [SOIC_W] | RW-16            |

## EVALUATION BOARDS

| Model 1          | Description      |
|------------------|------------------|
| EVAL-ADM3050EEBZ | Evaluation Board |

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.