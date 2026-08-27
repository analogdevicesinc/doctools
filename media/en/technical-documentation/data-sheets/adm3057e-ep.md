<!-- lastmod 2019-02-15 -->
<!-- image -->

## [ADM3057E-EP](https://www.analog.com/adm3057e)

## 3kV rms Signal and Power Isolated CAN Transceiver for CAN FD

## FEATURES

- 3kV rms signal and power isolated CAN transceiver
- iso Power integrated isolated dc-to-dc converter
- VIO pin for 1.7V to 5.5V logic levels
- ISO 11898-2:2016 compliant (CAN FD)
- Data rates up to 12Mbps for CAN FD
- Low maximum loop propagation delay: 150ns
- Extended common-mode range (V CANx ): ±25V
- Bus fault protection: ±40V on CANH and CANL pins
- Low power standby support remote wake request
- Extra isolated signal for control (such as termination switches)
- Passes EN 55022 Class B by 6dB
- Slope control for reduced EMI
- [Safety and regulatory approvals](https://www.analog.com/icouplersafety?doc=ADM3057E-ep.pdf)
- DIN EN IEC 60747-17 (VDE 0884-17)
- VIORM = 595V peak
- UL1577
- VISO = 3750V rms for 1 minute
- IEC/EN/CSA 62368-1
- IEC/CSA 60601-1
- IEC/CSA 61010-1
- CQC GB4943.1
- Creepage and clearance
- 7.8mm minimum with 20-lead SOIC\_W
- High common-mode transient immunity: &gt;75kV/µs

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications (AQEC standard)
- Military temperature range: -55°C to +105°C
- Controlled manufacturing baseline
- 1 assembly/test site
- Product change notification
- Qualification data available on request

## APPLICATIONS

- CANOpen, DeviceNet, and other CAN bus implementations
- Industrial automation
- Military and aerospace (MILA) avionics for sensors, actuators, and engine control

## GENERAL DESCRIPTION

The ADM3057E-EP is a 3kV rms isolated controller area network (CAN) physical layer transceiver with integrated isolated dc-to-dc converter. The ADM3057E-EP meets flexible data rate (CAN FD) requirements for operation to 5Mbps and higher and complies with the ISO 11898-2: 2016 standard. The ADM3057E-EP is capable of supporting data rates as high as 12Mbps.

The device employs Analog Devices, Inc., i Coupler ®  technology to combine a 3-channel isolator, a CAN transceiver, and an Analog Devices iso Power ®  dc-to-dc converter into a single, surface-mount, small outline integrated circuit (SOIC) package. The device is powered by a single 5V supply, realizing a fully isolated solution for CAN and CAN FD. Radiated emissions from the high frequency switching of the DC to DC convertors are kept below EN 55022 Class B limits by continuous adjustments to the switching frequency.

The ADM3057E-EP provides complete isolation between the CAN controller and physical layer bus. Safety and regulatory approvals for 3kV rms isolation voltage, 10kV surge test, and 7.8mm creepage and clearance ensure the ADM3057E-EP meets application reinforced isolation requirements.

Low propagation delays through the isolation support longer bus cables. Slope control mode is available for standard CAN at low data rates. Standby mode minimizes power consumption when the bus is idle or if the node goes offline. Silent mode allows the TXD input to be ignored for listen only mode.

Dominant timeout functionality protects against bus lockup in a fault condition. The current limiting and thermal shutdown features protect against output short circuits. The device is fully specified over a temperature range of -55°C to +105°C.

Additional application and technical information can be found in the ADM3057E data sheet.

## TABLE OF CONTENTS

| Features................................................................                                                                                        | 1                                                                                                                                                               | Thermal Characteristics....................................11                      |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| Enhanced Product Features..................................1                                                                                                    | ESD Ratings for                                                                                                                                                 | ADM3057E-EP...................... 11                                               |
| Applications........................................................... 1                                                                                       | ESD Caution.....................................................11                                                                                              |                                                                                    |
| General Description...............................................1                                                                                             | Pin Configuration and                                                                                                                                           | Function Descriptions...... 12                                                     |
| Functional Block Diagram......................................3                                                                                                 | Operational Truth                                                                                                                                               | Table....................................13                                        |
| Specifications........................................................                                                                                          | 4 Typical                                                                                                                                                       | Performance Characteristics...................14                                   |
| Electrical Specifications......................................4                                                                                                | Test Circuits.........................................................18                                                                                        |                                                                                    |
| Timing Specifications.........................................                                                                                                  | 6                                                                                                                                                               | Dimensions............................................. 19                         |
| Insulation Specifications.....................................8                                                                                                 | Outline Ordering                                                                                                                                                | Guide.................................................19                           |
| Regulatory Information.....................................10                                                                                                   | Evaluation                                                                                                                                                      | Boards............................................19                               |
| Absolute Maximum Ratings.................................11                                                                                                     |                                                                                                                                                                 |                                                                                    |
| REVISION HISTORY                                                                                                                                                |                                                                                                                                                                 |                                                                                    |
| 8/2026-Rev. 0 to Rev. A                                                                                                                                         |                                                                                                                                                                 |                                                                                    |
| Changes to Features Section..........................................................................................................................           | Changes to Features Section..........................................................................................................................           | 1                                                                                  |
| Change to General Description Section...........................................................................................................1               | Change to General Description Section...........................................................................................................1               |                                                                                    |
| Moved Figure 1................................................................................................................................................3 | Moved Figure 1................................................................................................................................................3 |                                                                                    |
| Changes to Functional Block Diagram Section................................................................................................3                    | Changes to Functional Block Diagram Section................................................................................................3                    |                                                                                    |
| Changes to Specifications Section..................................................................................................................             | Changes to Specifications Section..................................................................................................................             | 4                                                                                  |
| Added Electrical Specifications Section...........................................................................................................4             | Added Electrical Specifications Section...........................................................................................................4             |                                                                                    |
| Changes to Isolated Supply Voltage Parameter and Logic                                                                                                          | Changes to Isolated Supply Voltage Parameter and Logic                                                                                                          |                                                                                    |
| Parameter, Table 1.........................................................................................................................................4    | Parameter, Table 1.........................................................................................................................................4    |                                                                                    |
| Changed Insulation and Safety Related Specifications Section                                                                                                    | to Insulation                                                                                                                                                   | Specifications Section..............8                                              |
| Changes to Insulation Specifications Section..................................................................................................8                 | Changes to Insulation Specifications Section..................................................................................................8                 |                                                                                    |
| Replaced Table 3.............................................................................................................................................8  | Replaced Table 3.............................................................................................................................................8  |                                                                                    |
| Moved Figure 6................................................................................................................................................9 | Moved Figure 6................................................................................................................................................9 |                                                                                    |
| Changes to Figure 6 Caption...........................................................................................................................9         | Changes to Figure 6 Caption...........................................................................................................................9         |                                                                                    |
| Deleted Package Characteristics Section and Table 4; Renumbered                                                                                                 | Deleted Package Characteristics Section and Table 4; Renumbered                                                                                                 | Sequentially.........................................9                             |
| Changes to Regulatory Information Section and Table                                                                                                             | Changes to Regulatory Information Section and Table                                                                                                             | 4...............................................................................10 |
| Deleted DIN V VDE V 0884-10 (VDE V 0884-10) Insulation                                                                                                          | Characteristics Section                                                                                                                                         | and Table 6................10                                                      |
| Changes to Table 5........................................................................................................................................      | Changes to Table 5........................................................................................................................................      | 11                                                                                 |
| Changed Thermal Resistance Section to Thermal Characteristics                                                                                                   | Changed Thermal Resistance Section to Thermal Characteristics                                                                                                   | Section...................................................11                       |
| Changes to Thermal Characteristics Section and Table 6.............................................................................                             | Changes to Thermal Characteristics Section and Table 6.............................................................................                             | 11                                                                                 |
| Added ESD Ratings for ADM3057E-EP Section and Table                                                                                                             | 7; Renumbered                                                                                                                                                   | Sequentially.............................11                                        |
| Deleted Table 9..............................................................................................................................................   | Deleted Table 9..............................................................................................................................................   | 11                                                                                 |
| Changes to Figure 26....................................................................................................................................        | Changes to Figure 26....................................................................................................................................        | 17                                                                                 |

2/2019-Revision 0: Initial Version

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. ADM3057E-EP Functional Block Diagram

<!-- image -->

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

All voltages are relative to their respective ground. 4.5V ≤ V CC ≤ 5.5V, 1.7V ≤ V IO ≤ 5.5V, -55°C ≤ T A ≤ +105°C, and STBY low, unless otherwise noted. Typical specifications are at V CC = V IO = 5V and T A = 25°C, unless otherwise noted.

Table 1. Electrical Characteristics

| Parameter                                  | Symbol            | Min         |   Typ | Max         | Unit   | Test Conditions/Comments                                   |
|--------------------------------------------|-------------------|-------------|-------|-------------|--------|------------------------------------------------------------|
| SUPPLY CURRENT                             |                   |             |       |             |        |                                                            |
| Logic Side iso Power Current               | I CC              |             |       |             |        |                                                            |
| Standby                                    |                   |             |  13.5 | 30          | mA     | STBY high, AUX IN low, load resistance (R L ) = 60Ω        |
| Recessive State (or Silent)                |                   |             |    27 | 40          | mA     | TXD and/or SILENT high, R L = 60Ω                          |
| Dominant State                             |                   |             |   180 | 260         | mA     | Fault condition, R L = 60Ω                                 |
| 70% Dominant/30% Recessive                 |                   |             |       |             |        | Worst case, R L = 60Ω                                      |
| 1Mbps                                      |                   |             |   138 |             | mA     |                                                            |
| 5Mbps                                      |                   |             |   151 | 200         | mA     |                                                            |
| 12Mbps                                     |                   |             |   177 | 220         | mA     |                                                            |
| Switching Frequency                        | f OSC             |             |   180 |             | MHz    | Frequency hopping center                                   |
| Logic Side i Coupler Current               | I IO              |             |       |             |        |                                                            |
| Normal Mode                                |                   |             |   3.6 | 5           | mA     | TXD high, low or switching, AUX IN low                     |
| Standby Mode                               |                   |             |   1.2 | 2           | mA     | STBY high                                                  |
| Isolated Supply Voltage                    | V ISO             |             |   5.0 |             | V      |                                                            |
| DRIVER                                     |                   |             |       |             |        |                                                            |
| Differential Outputs                       |                   |             |       |             |        | See Figure 27                                              |
| Recessive State, Normal Mode               |                   |             |       |             |        | TXD high, R L and common-mode filter capacitor (C F ) open |
| CANH, CANL Voltage                         | V CANL , V CANH   | 2.0         |       | 3.0         | V      |                                                            |
| Differential Output Voltage                | V OD              | -500        |       | +50         | mV     |                                                            |
| Dominant State, Normal Mode                |                   |             |       |             |        | TXD and SILENT low, C F open                               |
| CANH Voltage                               | V CANH            | 2.75        |       | 4.5         | V      | 50Ω ≤ R L ≤ 65Ω                                            |
| CANL Voltage                               | V CANL            | 0.5         |       | 2.0         | V      | 50Ω ≤ R L ≤ 65Ω                                            |
| Differential Output Voltage                | V OD              | 1.5         |       | 3.0         | V      | 50Ω ≤ R L ≤ 65Ω                                            |
|                                            |                   | 1.4         |       | 3.3         | V      | 45Ω ≤ R L ≤ 70Ω                                            |
|                                            |                   | 1.5         |       | 5.0         | V      | R L = 2240Ω                                                |
| Standby Mode                               |                   |             |       |             |        | STBY high, R L and C F open                                |
| CANH, CANL Voltage                         | V CANL , V CANH   | -0.1        |       | +0.1        | V      |                                                            |
| Differential Output Voltage                | V OD              | -200        |       | +200        | mV     |                                                            |
| Output Symmetry (V ISOIN - V CANH - V CANL | V SYM             | -0.55       |       | +0.55       | V      | R L = 60Ω, C F = 4.7nF, RS low                             |
| Short-Circuit Current                      | &#124;I SC &#124; |             |       |             |        | R L open                                                   |
| Absolute                                   |                   |             |       |             |        |                                                            |
| CANH                                       |                   |             |       | 115         | mA     | V CANH = -3V                                               |
| CANL                                       |                   |             |       | 115         | mA     | V CANL = 18V                                               |
| Steady State                               |                   |             |       |             |        |                                                            |
| CANH                                       |                   |             |       | 115         | mA     | V CANH = -24V                                              |
| CANL                                       |                   |             |       | 115         | mA     | V CANL = 24V                                               |
| Logic Inputs (TXD, SILENT, STBY, AUX IN )  |                   |             |       |             |        |                                                            |
| Input Voltage                              |                   |             |       |             |        |                                                            |
| High                                       | V IH              | 0.65 × V IO |       |             | V      |                                                            |
| Low                                        | V IL              |             |       | 0.35 × V IO | V      |                                                            |
| Capacitance                                | C IN              |             |     4 |             | pF     |                                                            |

## SPECIFICATIONS

Table 1. Electrical Characteristics (Continued)

| Parameter                                                           | Symbol                               | Min           |   Typ | Max       | Unit   | Test Conditions/Comments                                              |
|---------------------------------------------------------------------|--------------------------------------|---------------|-------|-----------|--------|-----------------------------------------------------------------------|
| Complementary Metal-Oxide Semiconductor (CMOS) Logic Input Currents | &#124;I IH &#124;, &#124;I IL &#124; |               |       | 10        | µA     | Input high or low                                                     |
| RECEIVER                                                            |                                      |               |       |           |        |                                                                       |
| Differential Inputs                                                 |                                      |               |       |           |        |                                                                       |
| Differential Input Voltage Range                                    | V ID                                 |               |       |           |        | See Figure 28, C RXD open, -25V < V CANL < +25V, -25V < V CANH < +25V |
| Recessive                                                           |                                      | -1.0 -1.0 0.9 |       | +0.5 +0.4 | V V V  | STBY high                                                             |
| Dominant                                                            |                                      |               |       | 5.0       |        |                                                                       |
|                                                                     |                                      | 1.15          |       | 5.0       | V      | STBY high                                                             |
| Input Voltage Hysteresis                                            | V HYS                                |               |   150 |           | mV     |                                                                       |
| Unpowered Input Leakage Current                                     | &#124;I IN (OFF) &#124;              |               |       | 10        | µA     | V CANH , V CANL = 5V, V CC = 0V                                       |
| Input Resistance                                                    |                                      |               |       |           |        |                                                                       |
| CANH, CANL                                                          | R INH , R INL                        | 6             |       | 25        | kΩ     |                                                                       |
| Differential                                                        | R DIFF                               | 20            |       | 100       | kΩ     |                                                                       |
| Matching                                                            | m R                                  | -0.03         |       | +0.03     | Ω/Ω    | m R = 2 × (R INH - R INL )/(R INH + R INL )                           |
| Input Capacitance                                                   |                                      |               |       |           |        |                                                                       |
| CANH, CANL                                                          | C INH , C INL                        |               |    35 |           | pF     |                                                                       |
| Differential                                                        | C DIFF                               |               |    12 |           | pF     |                                                                       |
| Logic Outputs (RXD, AUX OUT )                                       |                                      |               |       |           |        |                                                                       |
| Output Voltage                                                      |                                      |               |       |           |        |                                                                       |
| Low                                                                 | V OL                                 |               |   0.2 | 0.4       | V      | Output current (I OUT ) = 2mA                                         |
| High                                                                | V OH                                 |               |       |           |        |                                                                       |
| RXD                                                                 |                                      | V IO - 0.2    |       |           | V      | I OUT = -2mA                                                          |
| AUX OUT                                                             |                                      | +2.4          |       |           | V      | I OUT = -2mA                                                          |
| Short-Circuit Current                                               | I OS                                 |               |       |           |        |                                                                       |
| RXD                                                                 |                                      | 7             |       | 85        | mA     | Output voltage (V OUT ) = GND 1 or V IO                               |
| COMMON-MODE TRANSIENT IMMUNITY 1                                    |                                      |               |       |           |        | Common-mode voltage (V CM ) ≥ 1kV, transient magnitude ≥ 800V         |
| Input High, Recessive                                               | &#124;CM H &#124;                    | 75            |   100 |           | kV/µs  | V IN = V IO (AUX IN , TXD) or CANH/CANL recessive                     |
| Input Low, Dominant                                                 | &#124;CM L &#124;                    | 75            |   100 |           | kV/µs  | V IN = 0V (AUX IN , TXD) or CANH/CANL dominant                        |
| SLOPE CONTROL                                                       |                                      |               |       |           |        |                                                                       |
| Input Voltage for Standby Mode                                      | V STB                                | 4.0           |       |           | V      |                                                                       |
| Current for Slope Control Mode                                      | I SLOPE                              |               |       | -240      | µA     | RS voltage (V RS ) = 0V                                               |
| Slope Control Mode Voltage                                          | V SLOPE                              | 2.1           |       |           | V      | RS current (I RS ) = 10µA                                             |

1 |CMH | is the maximum common-mode voltage slew rate that can be sustained while maintaining AUX OUT ≥ 2.4V, CANH/CANL recessive, or RXD ≥ V IO - 0.2V. |CM L | is the maximum common-mode voltage slew rate that can be sustained while maintaining AUX OUT ≤ 0.4V, CANH/CANL dominant, or RXD ≤ 0.4V. The common-mode voltage slew rates apply to both rising and falling common-mode voltage edges.

## SPECIFICATIONS

## TIMING SPECIFICATIONS

All voltages are relative to their respective ground. 4.5V ≤ V CC ≤ 5.5V, 1.7V ≤ V IO ≤ 5.5V, -55°C ≤ T A ≤ +105°C, and STBY low, unless otherwise noted. Typical specifications are at V CC = V IO = 5V and T A = 25°C, unless otherwise noted.

Table 2. Timing Characteristics

| Parameter                                                 | Symbol         |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                                                                                                                                                                |
|-----------------------------------------------------------|----------------|-------|-------|-------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DRIVER                                                    |                |       |       |       |        | SILENT low, bit time on the TXD pin as transmitted by the CAN controller (t BIT_TXD ) = 200ns, see Figure 2 and Figure 29, slope resistance (R SLOPE ) = 0Ω, R L = 60Ω, load capacitance (C L ) = 100pF |
| Maximum Data Rate                                         |                |    12 |       |       | Mbps   |                                                                                                                                                                                                         |
| Propagation Delay from TXD to Bus (Recessive to Dominant) | t TXD_DOM      |       |    35 |    60 | ns     |                                                                                                                                                                                                         |
| Propagation Delay from TXD to Bus (Dominant to Recessive) | t TXD_REC      |       |    46 |    70 | ns     |                                                                                                                                                                                                         |
| Transmit Dominant Timeout                                 | t DT           |  1175 |       |  4000 | µs     | TXD low, see Figure 5                                                                                                                                                                                   |
| RECEIVER                                                  |                |       |       |       |        | SILENT low, see Figure 2 and Figure 29, R L = 60Ω, C L = 100pF, RXD capacitance (C RXD ) = 15pF                                                                                                         |
| Falling Edge Loop Propagation Delay (TXD to RXD)          | t LOOP_FALL    |       |       |       |        |                                                                                                                                                                                                         |
| Full Speed Mode                                           |                |       |       |   150 | ns     | R SLOPE = 0Ω, t BIT_TXD = 200ns                                                                                                                                                                         |
| Slope Control Mode                                        |                |       |       |   300 | ns     | R SLOPE = 47kΩ, t BIT_TXD = 1µs                                                                                                                                                                         |
| Rising Edge Loop Propagation Delay (TXD to RXD)           | t LOOP_RISE    |       |       |       |        |                                                                                                                                                                                                         |
| Full Speed Mode                                           |                |       |       |   150 | ns     | R SLOPE = 0Ω, t BIT_TXD = 200ns                                                                                                                                                                         |
| Slope Control Mode                                        |                |       |       |   300 | ns     | R SLOPE = 47kΩ, t BIT_TXD = 1µs                                                                                                                                                                         |
| Loop Delay Symmetry (Minimum Recessive Bit Width)         | t BIT_RXD      |       |       |       |        |                                                                                                                                                                                                         |
| 2Mbps                                                     |                |   450 |       |   550 | ns     | t BIT_TXD = 500ns                                                                                                                                                                                       |
| 5Mbps                                                     |                |   160 |       |   220 | ns     | t BIT_TXD = 200ns                                                                                                                                                                                       |
| 8Mbps                                                     |                |    85 |       |   140 | ns     | t BIT_TXD = 125ns                                                                                                                                                                                       |
| 12Mbps                                                    |                |    50 |       |  91.6 | ns     | t BIT_TXD = 83.3ns                                                                                                                                                                                      |
| CANH, CANL SLEW RATE                                      | &#124;SR&#124; |       |     7 |       | V/µs   | SILENT low, see Figure 29, R L = 60Ω, C L = 100pF, R SLOPE = 47kΩ                                                                                                                                       |
| STANDBY MODE                                              |                |       |       |       |        |                                                                                                                                                                                                         |
| Minimum Pulse Width Detected (Receiver Filter             | t FILTER       |     1 |       |     5 | µs     | STBY high, see Figure 4                                                                                                                                                                                 |
| Time)                                                     |                |       |       |       |        |                                                                                                                                                                                                         |
| Wake-Up Pattern Detection Reset Time                      | t WUPR         |  1175 |       |  4000 | µs     | STBY high, see Figure 4                                                                                                                                                                                 |
| Normal Mode to Standby Mode Time                          | t STBY_ON      |       |       |    25 | µs     |                                                                                                                                                                                                         |
| Standby Mode to Normal Mode Time                          | t STBY_OFF     |       |       |    25 | µs     | Time until RXD valid                                                                                                                                                                                    |
| AUXILIARY SIGNAL                                          |                |       |       |       |        |                                                                                                                                                                                                         |
| Maximum Switching Rate                                    | f AUX          |    20 |       |       | kHz    |                                                                                                                                                                                                         |
| AUX IN to AUX OUT Propagation Delay                       | t AUX          |       |       |    25 | µs     |                                                                                                                                                                                                         |
| SILENT MODE                                               |                |       |       |       |        |                                                                                                                                                                                                         |
| Normal Mode to Silent Mode Time                           | t SILENT_ON    |       |    40 |   100 | ns     | TXD low, R SLOPE = 0Ω, see Figure 3                                                                                                                                                                     |
| Silent Mode to Normal Mode Time                           | t SILENT_OFF   |       |    50 |   100 | ns     | TXD low, R SLOPE = 0Ω, see Figure 3                                                                                                                                                                     |

## SPECIFICATIONS

## Timing Diagrams

<!-- image -->

Figure 2. Transceiver Timing Diagram

<!-- image -->

Figure 3. Silent Mode Timing Diagram

Figure 4. Wake-Up Pattern Detection and Filtered RXD in Standby Mode Timing Diagram

<!-- image -->

Figure 5. Dominant Timeout

<!-- image -->

## SPECIFICATIONS

## INSULATION SPECIFICATIONS

The ADM3057E-EP is suitable for "safe electrical insulation" only within the safety limiting ratings. Compliance with the safety limiting ratings shall be ensured by means of suitable protective circuits.

Table 3. ADM3057E-EP 20-Lead Wide SOIC [SOIC\_W] (RW-20) Insulation Characteristics

| Parameter                                                       | Symbol      | Value        | Unit         | Test Conditions/Comments                                                                                                                                                                                                |
|-----------------------------------------------------------------|-------------|--------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GENERAL                                                         |             |              |              |                                                                                                                                                                                                                         |
| Minimum External Clearance Distance                             | CLR         | 7.8          | mm           | Measured from input terminals to output terminals, shortest distance through air per IEC 60664-1                                                                                                                        |
| Minimum External Creepage Distance                              | CRP         | 7.8          | mm           | Measured from input terminals to output terminals, shortest distance along body per IEC 60664-1                                                                                                                         |
| Distance Through Insulation                                     | DTI         | 29           | μm           | Minimum internal                                                                                                                                                                                                        |
| Comparative Tracking Index                                      | CTI         | >600         | V            | Per IEC 60112                                                                                                                                                                                                           |
| SAFETY LIMITING VALUES                                          |             |              |              |                                                                                                                                                                                                                         |
| Maximum Ambient Safety Temperature                              | T S         | 150          | °C           |                                                                                                                                                                                                                         |
| Maximum Total Power Dissipation                                 | P TOT       | 2.35         | W            | T A ≤ 25°C , P TOT = P SI = P SO                                                                                                                                                                                        |
| Derating Above Ambient (T A ) Junction-to-Air Thermal Impedance | θ JA        | 18.8 53      | mW/°C °C/W   | T A > 25°C, see Figure 6 See the Thermal Characteristics section                                                                                                                                                        |
| IEC 60747-17 (REINFORCED INSULATION)                            |             |              |              |                                                                                                                                                                                                                         |
| Maximum Repetitive Peak Isolation Voltage                       | V IORM      | 595          | V peak       |                                                                                                                                                                                                                         |
| Maximum Isolation Working Voltage                               | V IOWM      | 420 595      | V rms V peak | AC voltage, end of life test, f = 60Hz DC voltage                                                                                                                                                                       |
| Maximum Transient Isolation Voltage                             | V IOTM      | 6000         | V peak       | V TEST ≥ 1.2 × V IOTM , t = 1s (100% production)                                                                                                                                                                        |
| Maximum Impulse Voltage                                         | V IMP       | 6000         | V peak       | Surge voltage in air, waveform per IEC 61000-4-5                                                                                                                                                                        |
| Apparent Charge                                                 | q pd        | ≤5           | pC           | waveform per IEC 61000-4-5 Method a (sample test), V ini = V IOTM , t ini = 60s, V pd(m) = 1.6 × V IORM , t m = 10s Method b1 (100% production), V ini ≥ 1.2 × V IOTM , t ini = 1s, V pd(m) = 1.875 × V IORM , t m = 1s |
| Resistance (Input to Output) 1                                  | R IO R IO_S | >10 13 >10 9 | Ω Ω          | T A = 25°C, V TEST = 500V DC, t = 60s T A = T S , V TEST = 500V DC, t = 60s                                                                                                                                             |
| Capacitance (Input to Output) 1                                 | IO          | 3.7          |              | f TEST = 1MHz                                                                                                                                                                                                           |
| Climatic Category Pollution Degree                              | C           | 55/105/21    | pF           |                                                                                                                                                                                                                         |
| 1577                                                            |             | 2            |              | Per IEC 60664-1                                                                                                                                                                                                         |
| UL                                                              |             |              |              |                                                                                                                                                                                                                         |
| Maximum Withstanding Isolation Voltage                          | V ISO       | 3750         | V rms        | V TEST = 1.2 × V ISO , t = 1s (100% production)                                                                                                                                                                         |

1 Device measured as a 2-terminal device with Pin 1 to Pin 10 connected and Pin 11 to Pin 20 connected.

## SPECIFICATIONS

Figure 6. ADM3057E-EP Thermal Derating Curve for 20-Lead Wide SOIC [SOIC\_W] (RW-20) Package, Dependence of Safety Limiting Power with Ambient Temperature per IEC 60747-17

<!-- image -->

## SPECIFICATIONS

## REGULATORY INFORMATION

The ADM3057E-EP has been approved by the organizations listed in Table 4. Copies of the relevant certificates are available at Safety and Regulatory Certifications for Digital Isolation.

Table 4. ADM3057E-EP 20-Lead Wide SOIC [SOIC\_W] (RW-20) Package Certifications

| Regulatory Agency   | Safety Standard/Rating                                                                                                                                                                                          | File or Certificate Number   |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| UL                  | UL 1577 Single protection, 3750V rms isolation voltage                                                                                                                                                          | File E214100                 |
| CSA 1               | CSA 14-18 CSA/EN/IEC 62368-1 Basic insulation at 780V rms Reinforced insulation at 390V rms CSA/IEC 60601-1 2 MOPP at 237.5V rms CSA/IEC 61010-1 Basic insulation at 600V rms Reinforced insulation at 300V rms | File 205078                  |
| TÜV SÜD 2           | EN/IEC 62368-1 Basic insulation at 780V rms Reinforced insulation at 390V rms                                                                                                                                   | Certificate B 056232 0021    |
| VDE                 | DIN EN IEC 60747-17 (VDE 0884-17) Reinforced insulation at 595V peak                                                                                                                                            | Certificate 40011599         |
| CQC                 | GB 4943.1 Basic insulation at 780V rms Reinforced insulation at 390V rms                                                                                                                                        | Certificate CQC19001229560   |

## ABSOLUTE MAXIMUM RATINGS

Pin voltages with respect to GND x are on the same side, unless otherwise noted.

Table 5.

| Parameter                                                | Rating                  |
|----------------------------------------------------------|-------------------------|
| V CC                                                     | -0.5V to +6V            |
| V IO                                                     | -0.5V to +6V            |
| Logic Side Input/Output: TXD, RXD, AUX IN , SILENT, STBY | -0.5V to V IO + 0.5V    |
| CANH, CANL                                               | -40V to +40V            |
| AUX OUT , RS                                             | -0.5V to V ISOIN + 0.5V |
| Ambient Operating Temperature Range                      | -55°C to +105°C         |
| Storage Temperature Range                                | -65°C to +150°C         |
| Junction Temperature (T J Maximum)                       | 150°C                   |
| Moisture Sensitivity Level (MSL)                         | 3                       |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL CHARACTERISTICS

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

The thermal resistance and characterization parameter values specified in Table 6 are defined and calculated based on the JEDEC JESD51 standards. For more details on their definition and usage, see JEDEC JESD51-12 and the Thermal Analysis section of the ADM3057E datasheet.

## Table 6. Package Thermal Data

| Package Type 1   |   θ JA |   θ JB |   Ψ JB |   Ψ JT | Unit   |
|------------------|--------|--------|--------|--------|--------|
| RW-20            |     53 |   47.9 |   30.8 |   10.0 | °C/W   |

## ESD RATINGS FOR ADM3057E-EP

The following ESD information is provided for handling of ESD-sensitive devices in an ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

International Electrotechnical Commission (IEC) electromagnetic compatibility: Part 4-2 (IEC) per IEC 61000-4-2.

## Table 7. ADM3057E-EP ESD Ratings

| ESD Model   | Withstand Threshold (kV)                        | Class   |
|-------------|-------------------------------------------------|---------|
| HBM 1       | ±4                                              | 3A      |
| IEC 2       | ±8 (contact discharge) to GND 2                 | Level 4 |
|             | ±15 (air discharge) to GND 2                    | Level 4 |
|             | ±8 (contact, across isolation barrier) to GND 1 | Level 4 |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 7. Pin Configuration

<!-- image -->

Table 8. Pin Function Descriptions

| Pin No.          | Mnemonic   | Description                                                                                                                                                                                                        |
|------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 10 3 4 5 6 | GND 1      | Ground, Logic Side. iso Power Power Supply, 4.5V to 5.5V. This pin requires 0.1µF and 10µF decoupling capacitors. i                                                                                                |
|                  | V CC       |                                                                                                                                                                                                                    |
|                  | V IO       | Coupler Power Supply, 1.7V to 5.5V. This pin requires 0.01µF and 0.1µF decoupling capacitors.                                                                                                                      |
|                  | RXD        | Receiver Output Data.                                                                                                                                                                                              |
|                  | SILENT     | Silent Mode Select with Input High. Bring this input low or leave the pin unconnected (internal pull-down) for normal mode.                                                                                        |
| 7                | TXD        | Driver Input Data. This pin has a weak internal pull-up resistor to V IO .                                                                                                                                         |
| 8                | STBY       | Standby Mode Select with Input High. Bring this input low or leave the pin unconnected (internal pull-down) for normal mode.                                                                                       |
| 9                | AUX IN     | Auxiliary Channel Input. This pin sets the AUX OUT output.                                                                                                                                                         |
| 11, 15           | GND 2      | Ground, Bus Side.                                                                                                                                                                                                  |
| 12               | RS         | Slope Control Pin. Short this pin to ground for full speed operation or use a weak pull-down resistor (for example, 47kΩ) for slope control mode. An input high signal places the CAN transceiver in standby mode. |
| 13               | CANL       | CAN Low Input/Output.                                                                                                                                                                                              |
| 14               | CANH       | CAN High Input/Output.                                                                                                                                                                                             |
| 16               | V ISOIN    | Isolated Power Supply Input for the CAN Transceiver Bus Side Digital Isolator. This pin requires 0.01µF and 0.1µF decoupling capacitors.                                                                           |
| 17               | AUX OUT    | Isolated Auxiliary Channel Output. The state of AUX OUT is latched when STBY is high. By default, AUX OUT is low at startup or when V IO is unpowered.                                                             |
| 18, 20           | GND ISO    | Ground for the Isolated DC-to-DC Converter. Connect these pins together through one ferrite bead to PCB ground (bus side).                                                                                         |
| 19               | V ISOOUT   | Isolated Power Supply Output. This pin requires 0.22µF and 10µF capacitors to GND ISO . Connect this pin through a ferrite bead and short the PCB trace to V ISOIN for operation.                                  |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## OPERATIONAL TRUTH TABLE

Table 9. Truth Table

| Power   | Power   |          |        | Inputs 1, 2   |                |                   | Outputs 2         | Outputs 2   | Input/Output              |
|---------|---------|----------|--------|---------------|----------------|-------------------|-------------------|-------------|---------------------------|
| V CC    | V IO    | TXD      | SILENT | STBY AUX      | IN RS          | Mode              | RXD 3             | AUX OUT     | CANH/CANL                 |
| On      | On      | Low Low  | Low    | Low           | Low/pull- down | Normal/slope mode | Low               | Low         | Dominant 4                |
| On      | On      | Low Low  | Low    | High          | Low/pull- down | Normal/slope mode | Low               | High        | Dominant 4                |
| On      | On      | High Low | Low    | Low           | Low/pull- down | Normal/slope mode | High/per bus      | Low         | Recessive/set by bus      |
| On      | On      | High Low | Low    | High          | Low/pull- down | Normal/slope mode | High/per bus      | High        | Recessive/set by bus      |
| On      | On      | X High   | Low    | Low           | X              | Listen only       | High/per bus      | Low         | Recessive/set by bus      |
| On      | On      | X High   | Low    | High          | X              | Listen only       | High/per bus      | High        | Recessive/set by bus      |
| On      | On      | X X      | High   | X             | X              | Standby           | High/WUP/filtered | Last state  | Bias to GND 2 /set by bus |
| On      | On      | X X      | X      | Low           | Pull-up        | Standby 5         | High/WUP/filtered | Low         | Bias to GND 2 /set by bus |
| On      | On      | X X      | X      | High          | Pull-up        | Standby 5         | High/WUP/filtered | High        | Bias to GND 2 /set by bus |
| On      | Off     | Z Z      | Z      | Z             | Low/pull- down | Normal/slope mode | Z                 | Low         | Recessive/set by bus      |
| Off     | On      | X X      | X      | X             | X              | Transceiver off   | High              | Z           | High impedance/set by bus |
| Off     | Off     | Z Z      | Z      | Z             | Z              | Transceiver off   | Z                 | Z           | High impedance/set by bus |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. Supply Current, I IO vs. Data Rate

<!-- image -->

Figure 9. Supply Current, I CC vs. Data Rate

<!-- image -->

Figure 10. Supply Current, I IO vs. Temperature (Inputs Idle)

<!-- image -->

Figure 11. Single-Ended Slew Rate vs. R SLOPE

Figure 12. Receiver Input Hysteresis vs. Temperature

<!-- image -->

Figure 13. t TXD\_DOM vs. Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. t TXD\_REC vs. Temperature

<!-- image -->

Figure 15. t LOOP\_FALL vs. Temperature (R SLOPE = 0Ω)

<!-- image -->

Figure 16. t LOOP\_FALL vs. Temperature (R SLOPE = 47kΩ)

<!-- image -->

Figure 17. t LOOP\_RISE vs. Temperature (R SLOPE = 0Ω)

Figure 18. t LOOP\_RISE vs. Temperature (R SLOPE = 47kΩ)

<!-- image -->

Figure 19. Differential Output Voltage (V OD ) vs. Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 20. Supply Current, I CC vs. Temperature

<!-- image -->

Figure 21. Supply Current, I IO vs. Temperature, RS = 0Ω, 1Mbps

<!-- image -->

Figure 22. Supply Current, I CC vs. Supply Voltage, V CC , RS = 0Ω, 1Mbps

<!-- image -->

Figure 23. Supply Current, I IO vs. Supply Voltage, V IO , Data Rate = 1Mbps

Figure 24. Dominant Timeout, t DT vs. Temperature

<!-- image -->

Figure 25. Supply Current, I CC vs. Supply Voltage, V CC (V ISOOUT Shorted to GNDISO )

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 26. Supply Current, I CC vs. Transmitted Data Rate

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 27. Driver Voltage Measurement

<!-- image -->

Figure 28. Receiver Voltage Measurement

<!-- image -->

Figure 29. Switching Characteristics Measurements

Figure 30. R DIFF and C DIFF Measured in Recessive State, Bus Disconnected

<!-- image -->

Figure 31. R INx and C INx Measured in Recessive State, Bus Disconnected

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                    |
|----------------------------|----------------|----------------------------------------|
| RW-20                      | SOIC_W         | 20-Lead Standard Small Outline Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

Table 10.

| Model 1            | Temperature Range   | Package Description                             | Package Option   |
|--------------------|---------------------|-------------------------------------------------|------------------|
| ADM3057ETRWZ-EP    | -55°C to +105°C     | 20-Lead Standard Small Outline Package [SOIC_W] | RW-20            |
| ADM3057ETRWZ-EP-RL | -55°C to +105°C     | 20-Lead Standard Small Outline Package [SOIC_W] | RW-20            |

## EVALUATION BOARDS

Table 11.

| Model 1, 2       | Package Description       |
|------------------|---------------------------|
| EVAL-ADM3055EEBZ | ADM3055E Evaluation Board |

## Legal Terms and Conditions

Analog Devices, Inc. ('ADI') believes the information in this data sheet is accurate and reliable as of its date of publication and provides it 'as is' without any representation or warranty of any kind. ADI reserves the right to make changes, corrections, modifications, enhancements, improvements, and other updates to the information described in this data sheet, with use of the product subject to ADI's Terms and Conditions of Sale, available on Analog.com. ANALOG DEVICES word mark and logo, AD, and ADI are registered trademarks and trademarks owned by ADI. This data sheet, trademarks, and its content are owned by ADI and may not be reproduced, distributed, or used except with ADI's prior written authorization. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ADI BE LIABLE FOR ANY DAMAGES WHATSOEVER, WHETHER DIRECT OR INDIRECT, ARISING OUT OF OR IN CONNECTION WITH THE USE OF, INABILITY TO USE, OR RELIANCE UPON THIS DATA SHEET OR THE INFORMATION CONTAINED HEREIN.