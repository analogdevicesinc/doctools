<!-- lastmod 2026-02-18 -->
<!-- image -->

## Low Noise, Low Power, Wide Bandwidth, 3-Axis MEMS Accelerometer

## FEATURES

- Ultralow noise density: 20 µ g /√Hz (XY) and 27 µ g /√Hz (Z)
- Low power consumption
- High performance: 340 µA
- Ultra-low power: 33 µA
- Wide bandwidth: 4 kHz
- Relative flatness with digital correction (&lt;3.8 kHz): &lt;0.5 dB
- Relative flatness without digital correction (&lt;2.5 kHz): &lt;2 dB
- Low latency: group delay &lt;110 µs for I 2 S/TDM; &lt;50 µs for PDM
- Digital features
- 16-bit ADC
- Multiprotocol serial interfaces: SPI or I 2 C
- Multiprotocol audio data output: I 2 S, TDM, and PDM
- Programmable LPF and HPF
- Data synchronous or asynchronous sampling
- Output FIFO: 320 word
- Built-in features for system-level power savings
- Single tap, double tap, and triple tap detection
- Activity and inactivity detection
- Configurable interrupt modes
- Integrated temperature sensor
- Voltage range options
- VS with internal regulators: 2.25 V to 3.6 V (or V 1P8 at 1.8 V)
- VDDIO : 1.14 V to 3.6 V (1.62 V to 3.6 V for full temperature range)
- Electromechanical self test
- 10,000 g mechanical shock
- RoHS compliant
- Operating temperature range: -40°C to +125°C
- 14-terminal, 2.9 mm × 2.8 mm × 0.87 mm, LGA package

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1. Functional Block Diagram

## GENERAL DESCRIPTION

The ADXL380 is a low noise density, low power, 3-axis accelerometer with selectable measurement ranges. The ADXL380 supports the ±4 g , ±8 g , and ±16 g ranges.

The ADXL380 offers industry leading noise, enabling precision applications with minimal calibration. The low noise and low power ADXL380 enables accurate measurements of audio signals or heart sounds even in high vibration environments.

The ADXL380 multifunction pin names may be referenced only by their relevant function for either the serial peripheral interface (SPI) or inter-IC(I 2 C) interface, or these pin names can be referenced by their audio function (pulse density modulation (PDM), inter-IC sound (I 2 S), or time division multiplexing (TDM)).

In addition to its low power consumption, the ADXL380 has many features to enable true system level performance. These features include a built-in micropower temperature sensor, singletap, double tap, and triple tap detection, and a state machine to prevent false triggering. In addition, the ADXL380 has provisions for external control of the sampling time and/or an external clock.

The ADXL380 operates on a wide, 2.25 V to 3.6 V supply range (or 1.8 V supply) and can interface, if necessary, to a host operating on a separate supply voltage. The ADXL380 is available in a 14-terminal, 2.9 mm × 2.8 mm × 0.87 mm, LGA package.

## APPLICATIONS

- Audio and active noise cancellation (ANC)
- Robotics
- Wearables and low power motion detection
- Seismic imaging
- Condition-based monitoring

## TABLE OF CONTENTS

| Features................................................................   | 1                                                              |
|----------------------------------------------------------------------------|----------------------------------------------------------------|
| General Description...............................................1        |                                                                |
| Applications...........................................................    | 1                                                              |
| Functional Block Diagram......................................1            |                                                                |
| Specifications........................................................     | 6                                                              |
| Timing Specifications.........................................             | 9                                                              |
| Digital Timing Diagrams....................................11              |                                                                |
| Absolute Maximum Ratings.................................13                |                                                                |
| Thermal Resistance.........................................                | 13                                                             |
| Recommended Soldering Profile......................13                      |                                                                |
| ESD Caution.....................................................13         |                                                                |
| Pin Configuration and Function Descriptions......                          | 14                                                             |
| Typical Performance Characteristics...................15                   |                                                                |
| Theory of Operation.............................................23         |                                                                |
| Mechanical Device Operation..........................                      | 23                                                             |
| Operating Modes..............................................23            |                                                                |
| Standby Mode..................................................23           |                                                                |
| Measurement Mode.........................................                  | 23                                                             |
| Selectable Measurement Ranges....................23                        |                                                                |
| Digital Output....................................................23       |                                                                |
| Temperature Sensor.........................................24              |                                                                |
| Axes of Acceleration Sensitivity.......................                    | 24                                                             |
| Power Sequencing...........................................24              |                                                                |
| Power Supply Description................................25                 |                                                                |
| Overrange Protection.......................................25              |                                                                |
| Self Test............................................................25    |                                                                |
| Filter.................................................................    | 26                                                             |
| Noise................................................................30    |                                                                |
| Power Savings Features.....................................                | 31                                                             |
| Operating Modes..............................................31            |                                                                |
| Motion Detection..............................................             | 32                                                             |
| Activity Detection..............................................32         |                                                                |
| Inactivity Detection...........................................32          |                                                                |
| Linking Activity and Inactivity Detection...........                       | 33                                                             |
| FIFO....................................................................   | 34                                                             |
| System-Level Power Savings...........................34                    |                                                                |
| Data Recording and Event Context..................34                       |                                                                |
| FIFO Configuration...........................................35            |                                                                |
| FIFO Modes.....................................................            | 35                                                             |
| FIFO Interrupts.................................................35         |                                                                |
| FIFO Watermark...............................................35            |                                                                |
| FIFO Ready......................................................35         |                                                                |
| FIFO Overrun...................................................35          |                                                                |
| FIFO Full..........................................................        | 35                                                             |
| Communications..................................................36         |                                                                |
| SPI                                                                        | Instructions................................................36 |
| I 2 C Interface.....................................................       | 36                                                             |
| I 2 S/TDM Interface.............................................37         |                                                                |
| PDM Interface..................................................            | 39                                                             |

| Additional Features..............................................41                                                              |               |
|----------------------------------------------------------------------------------------------------------------------------------|---------------|
| Free Fall Detection...........................................41                                                                 |               |
| Tap Detection...................................................                                                                 | 41            |
| External Clock..................................................42                                                               |               |
| External Trigger................................................42                                                               |               |
| External Synchronization..................................42                                                                     |               |
| Self Test............................................................46                                                          |               |
| User Register Protection..................................46                                                                     |               |
| Concurrent Operating Modes...........................46                                                                          |               |
| Interrupts..........................................................46                                                           |               |
| Status Flags and Error Handling......................46                                                                          |               |
| Latency................................................................48                                                        |               |
| Low Latency Mode...........................................48                                                                    |               |
| Serial Communications........................................49                                                                  |               |
| SPI Bus Sharing...............................................49                                                                 |               |
| Register Map.......................................................                                                              | 50            |
| Analog Devices Device ID Register.................                                                                               | 52            |
| Analog Devices MEMS Device ID Register......53                                                                                   |               |
| Part ID Register................................................53                                                               |               |
| Part ID and Revision ID Register.....................                                                                            | 53            |
| Serial Number 0 Register.................................53                                                                      |               |
| Serial Number 1 Register.................................54                                                                      |               |
| Serial Number 2 Register.................................54                                                                      |               |
| Serial Number 3 Register.................................54                                                                      |               |
| Serial Number 4 Register.................................54                                                                      |               |
| Serial Number 5 Register.................................55                                                                      |               |
| Serial Number 6 Register.................................55                                                                      |               |
| Device Sensor Parameter Registers................55                                                                              |               |
| Status 0 Register (Clear on Read)...................57                                                                           |               |
| Status 1 Register (Clear on Read)...................58                                                                           |               |
| Status 2 Register (Clear on Read)...................59                                                                           |               |
| Status 3 Register (Clear on Read)...................60                                                                           |               |
| X Axis Data Output Read (High Byte, Bits[15:8]) Register.........................................60                              |               |
| X Axis Data Output Read (Low Byte, Bits[7:0]) Register...........................................61                              |               |
| Y Axis Data Output Read (High Byte, Bits[15:8]) Register.........................................61                              |               |
| Y Axis Data Output Read (Low Byte, Bits[7:0]) Register...........................................61                              |               |
| Z Axis Data Output Read (High Byte, Bits[15:8]) Register.........................................61                              |               |
| Z Axis Data Output Read (Low Byte, Bits[7:0]) Register...........................................62                              |               |
| Temperature Data Output Read (High Byte) Register..........................................................62                    |               |
| Temperature Data Output Read (Low Byte) and Sensor DSM Register..............................62 FIFO Read Data (from FIFO Block) | Register...63 |

## TABLE OF CONTENTS

| FIFO Status Registers......................................63                                                                                                                        |                                                                                                                                                                                      | Tap Threshold Register....................................83                                                                                                                         |                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Miscellaneous 0 (Read Only) Register.............63                                                                                                                                  |                                                                                                                                                                                      | Tap Duration Register.......................................84                                                                                                                       |                                                                                                                      |
| Miscellaneous 1 (Read Only) Register.............64                                                                                                                                  |                                                                                                                                                                                      | Tap Latency Wait Time Register.......................84                                                                                                                              |                                                                                                                      |
| Sensor DSM Register.......................................64                                                                                                                         |                                                                                                                                                                                      | Tap Window Register.......................................                                                                                                                           | 84                                                                                                                   |
| Clock Control Register.....................................                                                                                                                          | 65                                                                                                                                                                                   | Tap Configuration Register...............................85                                                                                                                          |                                                                                                                      |
| OP_MODE Register.........................................65                                                                                                                          |                                                                                                                                                                                      | Undervoltage and Overrange Configuration                                                                                                                                             |                                                                                                                      |
| Digital Enable Register.....................................66                                                                                                                       |                                                                                                                                                                                      | Register..........................................................86                                                                                                                 |                                                                                                                      |
| Data Ready and I 2 C Communication Port Configuration Register....................................67                                                                                 |                                                                                                                                                                                      | SAR Trigger and Digital Filter Configuration Register..........................................................87                                                                    |                                                                                                                      |
| NVM (EFUSE) User Control Register..............                                                                                                                                      | 68                                                                                                                                                                                   | X-Axis SAR User Offset Register.....................88                                                                                                                               |                                                                                                                      |
| Register Reset..................................................70                                                                                                                   |                                                                                                                                                                                      | Y-Axis SAR User Offset Register.....................                                                                                                                                 | 88                                                                                                                   |
| Interrupt Pin 0 Enables MAP0 Register............70                                                                                                                                  |                                                                                                                                                                                      | Z-Axis SAR User Offset Register.....................                                                                                                                                 | 88                                                                                                                   |
| Interrupt Pin 0 Enables MAP1 Register............71                                                                                                                                  |                                                                                                                                                                                      | X-Axis DSM User Offset Register....................                                                                                                                                  | 88                                                                                                                   |
| Interrupt Pin 1 Enables MAP0 Register............72                                                                                                                                  |                                                                                                                                                                                      | Y-Axis DSM User Offset Register.....................89                                                                                                                               |                                                                                                                      |
| Interrupt Pin 1 Enables MAP1 Register............73                                                                                                                                  |                                                                                                                                                                                      | Z-Axis DSM User Offset Register.....................89                                                                                                                               |                                                                                                                      |
| FIFO Configuration 0 Register.........................                                                                                                                               | 74                                                                                                                                                                                   | Digital Filter Configuration Register..................89                                                                                                                            |                                                                                                                      |
| FIFO Configuration 1 Register.........................                                                                                                                               | 75                                                                                                                                                                                   | User Temperature Sensor Control Registers...                                                                                                                                         | 91                                                                                                                   |
| Serial Port Configuration 0 Register.................75                                                                                                                              |                                                                                                                                                                                      | MISO and Gain Scaler Configuration                                                                                                                                                   |                                                                                                                      |
| Serial Port Configuration 1 Register.................76                                                                                                                              |                                                                                                                                                                                      | Register..........................................................92                                                                                                                 |                                                                                                                      |
| Serial Port Configuration 2 Register.................76                                                                                                                              |                                                                                                                                                                                      | S OUT0 Pad Control Register.............................                                                                                                                             | 92                                                                                                                   |
| SYNC and Serial Port Configuration Register..77                                                                                                                                      |                                                                                                                                                                                      | MCLK Pad Register..........................................93                                                                                                                        |                                                                                                                      |
| PDM Configuration Register.............................78                                                                                                                            |                                                                                                                                                                                      | BCLK Pad Register..........................................93                                                                                                                        |                                                                                                                      |
| Activity, Inactivity, and PDM Control Register..                                                                                                                                     | 78                                                                                                                                                                                   | FSYNC Pad and Resync Configuration                                                                                                                                                   |                                                                                                                      |
| Activity and Inactivity and Self Test Control Register..........................................................79                                                                   |                                                                                                                                                                                      | Register..........................................................94                                                                                                                 |                                                                                                                      |
| Activity Threshold (High Byte) Register............80                                                                                                                                |                                                                                                                                                                                      | INT0 Pad Control Register...............................95 INT1 Pad Control Register...............................96                                                                |                                                                                                                      |
| Activity Threshold (Low Byte) Register............                                                                                                                                   | 80                                                                                                                                                                                   | Applications Information......................................                                                                                                                       | 97                                                                                                                   |
| Timed Activity (High Byte, Bits[23:16])                                                                                                                                              |                                                                                                                                                                                      | Application Examples.......................................97                                                                                                                        |                                                                                                                      |
| Register..........................................................81                                                                                                                 |                                                                                                                                                                                      | Device Configuration........................................97                                                                                                                       |                                                                                                                      |
| Timed Activity (Mid Byte, Bits[15:7]) Register..                                                                                                                                     | 81                                                                                                                                                                                   | Power Supply Requirements..........................101                                                                                                                               |                                                                                                                      |
| Timed Activity (Low Byte, Bits[7:0]) Register...                                                                                                                                     | 81                                                                                                                                                                                   | Interrupts........................................................102                                                                                                                |                                                                                                                      |
| Inactivity Threshold (High Byte) Register.........82                                                                                                                                 |                                                                                                                                                                                      | Using an External Clock.................................103                                                                                                                          |                                                                                                                      |
| Inactivity Threshold (Low Byte) Register..........82                                                                                                                                 |                                                                                                                                                                                      | Mechanical Considerations for Mounting.......103                                                                                                                                     |                                                                                                                      |
| Timed Inactivity (High Byte, Bits[23:16]) Register..........................................................82                                                                       |                                                                                                                                                                                      | PCB Footprint.................................................103                                                                                                                    |                                                                                                                      |
| Timed Inactivity (Mid Byte, Bits[15:8])                                                                                                                                              |                                                                                                                                                                                      | Outline Dimensions........................................... Ordering Guide...............................................104                                                       | 104                                                                                                                  |
| Register..........................................................83                                                                                                                 |                                                                                                                                                                                      | Models, Measurement Range, and                                                                                                                                                       |                                                                                                                      |
| Timed Inactivity (Low Byte, Bits[7:0])                                                                                                                                               |                                                                                                                                                                                      | Communications Interface............................104                                                                                                                              |                                                                                                                      |
| Register..........................................................83                                                                                                                 |                                                                                                                                                                                      | Evaluation Boards..........................................104                                                                                                                       |                                                                                                                      |
| REVISION HISTORY                                                                                                                                                                     |                                                                                                                                                                                      |                                                                                                                                                                                      |                                                                                                                      |
| 10/2025-Rev. 0 to Rev. A                                                                                                                                                             |                                                                                                                                                                                      |                                                                                                                                                                                      |                                                                                                                      |
| Changes to Features Section..........................................................................................................................                                | Changes to Features Section..........................................................................................................................                                | Changes to Features Section..........................................................................................................................                                | 1                                                                                                                    |
| Changes to Table 1..........................................................................................................................................6                        | Changes to Table 1..........................................................................................................................................6                        | Changes to Table 1..........................................................................................................................................6                        |                                                                                                                      |
| Changes to Table 8........................................................................................................................................13                         | Changes to Table 8........................................................................................................................................13                         | Changes to Table 8........................................................................................................................................13                         |                                                                                                                      |
| Added Note 1 to Note 4, Table 9....................................................................................................................14 Changes to Figure 19 to Figure | Added Note 1 to Note 4, Table 9....................................................................................................................14 Changes to Figure 19 to Figure | Added Note 1 to Note 4, Table 9....................................................................................................................14 Changes to Figure 19 to Figure | 24................................................................................................................16 |
| Changes to Figure 25 Caption to Figure 27 Caption.....................................................................................                                               | Changes to Figure 25 Caption to Figure 27 Caption.....................................................................................                                               | Changes to Figure 25 Caption to Figure 27 Caption.....................................................................................                                               | 17                                                                                                                   |

## TABLE OF CONTENTS

| Changes to Figure 28 to Figure 30................................................................................................................17         |                                                                                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Changes to Figure 31 Caption to Figure 36 Caption.....................................................................................                      | 18                                                                                                                                           |
| Changes to Figure 37 Caption to Figure 42 Caption.....................................................................................                      | 19                                                                                                                                           |
| Changes to Figure 43 to Figure                                                                                                                              | 45................................................................................................................20                         |
| Changes to Theory of Operation Section.......................................................................................................23             |                                                                                                                                              |
| Changes to Selectable Measurement Ranges Section.................................................................................                           | 23                                                                                                                                           |
| Changes to Overrange Protection Section and Table                                                                                                           | 11...............................................................................25                                                          |
| Changes to Decimation Filters Section..........................................................................................................28           |                                                                                                                                              |
| Added Note 1, Table 15.................................................................................................................................     | 30                                                                                                                                           |
| Changes to Data Recording and Event Context Section and Table 19.........................................................                                   | 34                                                                                                                                           |
| Changes to FIFO Modes Section...................................................................................................................35          |                                                                                                                                              |
| Changes to FIFO Watermark Section............................................................................................................35             |                                                                                                                                              |
| Changes to SPI Instructions Section.............................................................................................................            | 36                                                                                                                                           |
| Changes to I 2 C Interface Section..................................................................................................................        | 36                                                                                                                                           |
| Changes to Note 5, Table 22.........................................................................................................................        | 38                                                                                                                                           |
| Changes to PDM Interface Section and Figure 72........................................................................................                      | 39                                                                                                                                           |
| Changes to No External Synchronization or Interpolation (SYNC_MODE = b'00) Section...........................43                                             |                                                                                                                                              |
| Change to External Synchronization with Interpolation (SYNC_MODE = b'10) Section...............................                                             | 45                                                                                                                                           |
| Changes to Interrupts Section.......................................................................................................................        | 46                                                                                                                                           |
| Changes to Overrange Section......................................................................................................................47        |                                                                                                                                              |
| Deleted Table 24; Renumbered Sequentially.................................................................................................47                |                                                                                                                                              |
| Changes to Figure 78....................................................................................................................................    | 48                                                                                                                                           |
| Added Note 1, Table 27.................................................................................................................................     | 49                                                                                                                                           |
| Changes to Table 30......................................................................................................................................50 |                                                                                                                                              |
| Changes to Part ID and Revision ID Register Section and Table 34.............................................................53                             |                                                                                                                                              |
| Changes to Serial Number 0 Register Section and Table                                                                                                       | 35.........................................................................53                                                                |
| Changes to Serial Number 1 Register Section and Table                                                                                                       | 36.........................................................................54                                                                |
| Changes to Serial Number 2 Register Section and Table 37.........................................................................54                         |                                                                                                                                              |
| Changes to Serial Number 3 Register Section and Table 38.........................................................................54                         |                                                                                                                                              |
| Changes to Serial Number 4 Register Section and Table 39.........................................................................54                         |                                                                                                                                              |
| Changes to Serial Number 5 Register Section and Table 40.........................................................................55                         |                                                                                                                                              |
| Changes to Serial Number 6 Register Section and Table 41.........................................................................55                         |                                                                                                                                              |
| Changes to Table                                                                                                                                            | 49......................................................................................................................................58   |
| Change to Table                                                                                                                                             | 51........................................................................................................................................60 |
| Changes to Table 58 and Table 59................................................................................................................            | 62                                                                                                                                           |
| Changes to Miscellaneous 0 (Read Only) Register Section and Table 63....................................................                                    | 63                                                                                                                                           |
| Changes to Miscellaneous 1 (Read Only) Register Section and Table 64....................................................                                    | 64                                                                                                                                           |
| Changes to Table 72......................................................................................................................................70 |                                                                                                                                              |
| Changes to Table                                                                                                                                            | 74......................................................................................................................................72   |
| Changes to Table 76......................................................................................................................................74 |                                                                                                                                              |
| Changes to Undervoltage and Overrange Configuration Register Section and Table 100............................86                                            |                                                                                                                                              |
| Changes to S OUT0 Pad Control Register Section and Table 112...................................................................                             | 92                                                                                                                                           |
| Change to Table                                                                                                                                             | 117......................................................................................................................................96  |
| Changes to Example: FIFO Mode Section....................................................................................................                   | 97                                                                                                                                           |
| Change to Example: PDM Mode Section......................................................................................................                   | 98                                                                                                                                           |
| Changes to Example: Activity and Inactivity Detection Mode Section...........................................................99                             |                                                                                                                                              |
| Boards....................................................................................................................                                  | 104                                                                                                                                          |
| Changes to Evaluation                                                                                                                                       |                                                                                                                                              |

## TABLE OF CONTENTS

## 8/2024-Revision 0: Initial Version

## SPECIFICATIONS

TA = 25°C, supply voltage (V S ) = 3.3 V, x-axis and y-axis acceleration = 0 g , z-axis acceleration = 1 g , and full-scale range = ±4 g , and high performance (HP) mode, unless otherwise noted.

Table 1. Specifications

| Parameter                                     | Test Conditions/ Comments                      | Min         | Typ   | Max   | Unit      |
|-----------------------------------------------|------------------------------------------------|-------------|-------|-------|-----------|
| SENSOR INPUT                                  | Each axis                                      |             |       |       |           |
| Full-Scale Range (FSR) 1                      | User selectable                                | ±4, ±8, ±16 |       |       | g         |
| Nonlinearity 2, 3                             | Percentage of full scale range (FSR)           |             |       |       |           |
|                                               | ±4 g , ±8 g                                    |             |       | ±0.15 | %FSR      |
| Total Harmonic Distortion (THD)               | ±16 g 3.57 g at 1 kHz                          |             | 0.1   | ±0.4  | %FSR %FSR |
| Cross-Axis Sensitivity 4                      |                                                |             | ±2    | ±2.5  | %         |
| Sensor Resonant Frequency 5                   | X-axis and Y-axis                              |             | 5.1   |       |           |
|                                               | Z-axis                                         |             | 3.8   |       | kHz kHz   |
| Quality Factor 5                              | X-axis and Y-axis                              |             | 2.2   |       |           |
|                                               | Z-axis                                         |             | 1.2   |       |           |
| SENSITIVITY 6                                 | Each axis                                      |             |       |       |           |
| Sensitivity                                   | ±4 g                                           |             | 7500  |       | LSB/ g    |
|                                               | ±8 g                                           |             | 3750  |       | LSB/ g    |
|                                               | ±16 g                                          |             | 1875  |       | LSB/ g    |
| Scale Factor                                  | ±4 g                                           |             | 133.3 |       | µ g /LSB  |
|                                               | ±8 g                                           |             | 266.7 |       | µ g /LSB  |
|                                               | ±16 g                                          |             | 533.3 |       | µ g /LSB  |
| Sensitivity Error at 25°C                     | X-axis and Y-axis                              |             | ±1.6  |       | %         |
|                                               | Z-axis                                         |             | ±1.8  |       | %         |
| Sensitivity Change due to Temperature         | T A = -40°C to +125°C                          |             | +0.02 |       | %/°C      |
| OUTPUT RESOLUTION                             | Each axis                                      |             |       |       |           |
| All g Ranges                                  | Σ-Δ modulator, DSM (high performance)          |             | 16    |       | Bits      |
|                                               | SAR (low power) 7                              |             | 12    |       | Bits      |
| 0 g OFFSET                                    | Each axis                                      |             |       |       |           |
| 0 g Output for X OUT , Y OUT , and Z OUT 2, 8 |                                                | -250        | ±60   | +250  | m g       |
| 0 g Offset vs. Temperature                    | T A = -40°C to +125°C                          |             | ±1.0  |       | m g /°C   |
| Bias Repeatability 9                          | X-axis                                         |             | 60    |       | m g       |
|                                               | Y-axis                                         |             | 110   |       | m g       |
| Vibration Rectification Error (VRE)           | Z-axis Offset due to 2.5 g RMS vibration, in 1 |             | 60    |       | m g       |
|                                               | g field                                        |             | 28    |       | m g       |
| NOISE PERFORMANCE                             |                                                |             |       |       |           |
| Noise Density                                 |                                                |             |       |       |           |
| High Performance (HP) Mode 10                 | X-axis and Y-axis                              |             | 20    |       | µ g /√Hz  |
|                                               | Z-axis                                         |             | 27    |       | µ g /√Hz  |
| Reduced Bandwidth (RBW) Mode                  | X-axis and Y-axis                              |             | 23    |       | µg/√Hz    |
|                                               | Z-axis                                         |             | 29    |       | µ g /√Hz  |
| Low Power (LP) Mode                           | X-axis and Y-axis                              |             | 39    |       | µ g /√Hz  |
|                                               | Z-axis                                         |             | 49    |       | µ g /√Hz  |
| Very Low Power (VLP) Mode                     | X-axis and Y-axis                              |             | 94    |       | µ g /√Hz  |
|                                               | Z-axis                                         |             | 97    |       | µ g /√Hz  |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                                | Test Conditions/ Comments               | Min   | Typ     | Max   | Unit                    |
|----------------------------------------------------------|-----------------------------------------|-------|---------|-------|-------------------------|
| Ultra-Low Power (ULP) Mode                               | X-axis and Y-axis                       |       | 160     |       | µ g /√Hz                |
|                                                          | Z-axis                                  |       | 160     |       | µ g /√Hz                |
| Heart Sounds (HS) Mode                                   | Z-axis                                  |       | 71      |       | µ g /√Hz                |
| Output Noise 11                                          |                                         |       |         |       |                         |
| HP Mode                                                  | X-axis and Y-axis                       |       | 1.3     |       | m g RMS                 |
|                                                          | Z-axis                                  |       | 1.7     |       | m g RMS                 |
| RBW Mode                                                 | X-axis and Y-axis                       |       | 1.0     |       | m g RMS                 |
|                                                          | Z-axis                                  |       | 1.3     |       | m g RMS                 |
| LP Mode                                                  | X-axis and Y-axis                       |       | 1.2     |       | m g RMS                 |
| VLP Mode                                                 | X-axis and Y-axis Z-axis                |       | 2.1 2.2 |       | m g RMS m g RMS m g RMS |
| ULP Mode                                                 | X-axis and Y-axis Z-axis                |       |         |       |                         |
|                                                          |                                         |       | 1.2     |       |                         |
|                                                          |                                         |       |         |       | m g                     |
|                                                          |                                         |       | 1.2     |       | RMS                     |
| HS Mode                                                  | Z-axis                                  |       | 1.6     |       | m g RMS                 |
| Velocity Random Walk (VRW)                               | X-axis and Y-axis                       |       | 14      |       | mm/sec/√hr              |
|                                                          | Z-axis                                  |       | 17      |       | mm/sec/√hr              |
| Bias Stability                                           | All axes                                |       | 6.5     |       |                         |
|                                                          |                                         |       |         |       | μ g                     |
| BANDWIDTH                                                | All configurable filters set to default |       |         |       |                         |
| Bandwidth (-3 dB Corner)                                 |                                         |       |         |       |                         |
| HP Mode                                                  |                                         |       | 4000    |       | Hz                      |
| RBW Mode                                                 |                                         |       | 2000    |       | Hz                      |
| LP Mode                                                  |                                         |       | 1000    |       | Hz                      |
| VLP Mode                                                 |                                         |       | 500     |       | Hz                      |
| ULP Mode                                                 |                                         |       | 50      |       | Hz                      |
| HS Mode                                                  |                                         |       | 400     |       | Hz                      |
| Relative Flatness                                        |                                         |       |         |       |                         |
| HP Mode                                                  |                                         |       |         |       |                         |
| Without Digital Correction (<2.5 kHz) 12                 | X-axis and Y-axis                       |       | 2       |       | dB                      |
|                                                          | Z-axis                                  |       | 2       |       | dB                      |
| With Digital Correction (<3.8 kHz) 12                    | X-axis and Y-axis                       |       | 0.5     |       | dB                      |
|                                                          | Z-axis                                  |       | 0.5     |       | dB                      |
| RBW Mode                                                 |                                         |       |         |       |                         |
| Without Digital Correction (<2 kHz) 12                   | X-axis and Y-axis                       |       | 0.5     |       | dB                      |
|                                                          | Z-axis                                  |       | 1       |       | dB                      |
| SELF TEST                                                |                                         |       |         |       |                         |
| Self Test Delta (STΔ) 13                                 | X-axis and Y-axis                       | 2.5   | 4.0     | 5.5   | g                       |
|                                                          | Z-axis                                  | 2.0   | 3.0     | 3.8   | g                       |
| POWER SUPPLY                                             |                                         |       |         |       |                         |
| Operating Voltage Range (V S )                           |                                         | 2.25  |         | 3.6   | V                       |
| Input and Output Voltage Range (V DDIO )                 | T A = -25°C to +85°C                    | +1.14 |         | +3.6  | V                       |
|                                                          | T A = -40°C to +125°C                   | +1.62 |         | +3.6  | V                       |
| V 1P8 with Internal Low Dropout Regulator (LDO) Bypassed | V SUPPLY = 0 V                          | 1.62  | 1.8     | 1.98  | V                       |
| Supply Reset Threshold (V RESET )                        |                                         |       |         | 1.22  | V                       |
| Hold Time                                                |                                         | 1     |         |       | ms                      |
| Rise Time                                                | 0 V to 90% of V S                       |       |         | 4     | ms                      |
| Supply Current 14                                        | LDO enabled                             |       |         |       |                         |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                   | Test Conditions/ Comments   | Min   | Typ   | Max   | Unit   |
|-----------------------------|-----------------------------|-------|-------|-------|--------|
| HP Mode                     |                             |       | 340   |       | µA     |
| RBW Mode                    |                             |       | 250   |       | µA     |
| LP Mode                     |                             |       | 140   |       | µA     |
| VLP Mode                    |                             |       | 44    |       | µA     |
| ULP Mode                    |                             |       | 33    |       | µA     |
| HS Mode                     |                             |       | 32    |       | µA     |
| Standby                     |                             |       | 6.8   |       | µA     |
| Turn-On Time 15             |                             |       |       |       |        |
| Standby to Valid Data Time  |                             |       |       | 2     | ms     |
| Power-Up to Standby         |                             |       |       | 3     | ms     |
| CLOCK                       |                             |       |       |       |        |
| Internal Oscillator         |                             |       | 512   |       | kHz    |
| DELAYS                      |                             |       |       |       |        |
| Group Delay 2               |                             |       |       |       |        |
| Default Mode                | X-axis and Y-axis           |       | 710   |       | µs     |
|                             | Z-axis                      |       | 750   |       | µs     |
| Low Latency Mode 16         |                             |       |       |       |        |
| I 2 S/TDM                   | X-axis and Y-axis           |       | 95    |       | µs     |
|                             | Z-axis                      |       | 110   |       | µs     |
| PDM                         | X-axis and Y-axis           |       | 35    |       | µs     |
|                             | Z-axis                      |       | 50    |       | µs     |
| TEMPERATURE SENSOR 2, 17    |                             |       |       |       |        |
| Output at 25°C              |                             |       | 550   |       | LSB    |
| Sensitivity                 |                             |       | 10.2  |       | LSB/°C |
| Sensitivity Error           |                             |       | 0.06  |       | %      |
| ENVIRONMENTAL               |                             |       |       |       |        |
| Operating Temperature Range |                             | -40   |       | +125  | °C     |

1 In PDM mode, ±8 g and ±16 g are the only valid ranges.

2 Typical value based on characterization, not tested in production.

3 Nonlinearity is measured with a DC input stimulus.

4 Cross-axis sensitivity is defined as coupling between any two axes. Typical value based on characterization, not tested in production.

5 Typical value defined based on design and simulation. It is not tested in production.

6 For PDM sensitivity, refer to the PDM Interface section. For low-power modes using 12-bit SAR (VLP, ULP, and HS) refer to the Example: Activity and Inactivity Detection Mode section for a reference sensitivity calculation under these conditions.

- 7 Note that the lower 4 bits of the SAR are zeros, which is to match the 16-bit DSM.
- 8 Different supplies and measurement range settings can cause a shift in performance.
- 9 Repeatability provides an estimate for long-term drift in the bias, as observed during 500 hours of high-temperature operating life (HTOL) at 105°C and 1000 cycles of temperature cycle testing (TCT). Repeatability represents the root sum square (RSS) of the bias drift associated with HTOL and TCT.
- 10 Noise density values with equalization filter enabled.

11 RMS noise with default bandwidth setting used for each power mode.

- 12 Digital correction is performed through the equalization filter. Refer to the Fourth-Order Equalizer Filter (EQ) section for more details.
- 13 Self test change is defined as the positive self test output (when the positive beam deflection is asserted) minus the negative self test output (when the negative beam deflection is asserted). Different supplies and g ranges cause different self test changes.
- 14 Supply current is measured with default configurations with XYZ channels enabled. Supply current may increase when additional features (temperature sensor, first in, first out (FIFO), or external analog-to-digital converter (ADC) for example) are enabled.

## SPECIFICATIONS

15 Refer to the Power Supply Requirements section for the minimum supply rise time requirement.

16 Low latency mode bypasses optional filters. See the Latency section for more information including configuration settings.

17 Nominal values for temperature sensor output with HIGH\_GAIN\_TEMP = 0.

## TIMING SPECIFICATIONS

Table 2. I 2 C Input and Output Levels and Timing (T A = 25°C, V S = 3.3 V, and V DDIO = 3.3 V) 1

|                                      |         | Test Conditions/                    | I2C_HSM_EN = 0 (Fast Mode)   | I2C_HSM_EN = 0 (Fast Mode)   | I2C_HSM_EN = 1 (High Speed Mode)   | I2C_HSM_EN = 1 (High Speed Mode)   | I2C_HSM_EN = 1 (High Speed Mode)   |
|--------------------------------------|---------|-------------------------------------|------------------------------|------------------------------|------------------------------------|------------------------------------|------------------------------------|
| Parameter                            | Symbol  | Comments                            | Min                          | Max                          | Min                                | Max                                | Unit                               |
| DC INPUT LEVELS Input Voltage        |         |                                     |                              |                              |                                    |                                    |                                    |
| Low Level                            | V IL    |                                     |                              | 0.3 × V DDIO                 |                                    | 0.3 × V DDIO                       | V                                  |
| High Level                           | V IH    |                                     | 0.7 × V DDIO                 |                              | 0.7 × V DDIO                       |                                    | V                                  |
| Hysteresis of Schmitt Trigger Inputs | V HYS   |                                     | 0.05 × V DDIO                |                              | 0.1 × V DDIO                       |                                    | V                                  |
| Input Current                        | I IL    | 0.1 × V DDIO < V IN < 0.9 × V DDIO  | -10                          | +10                          |                                    |                                    | µA                                 |
| DC OUTPUT LEVELS                     |         |                                     |                              |                              |                                    |                                    |                                    |
| Output Voltage                       | V OL    | Low level current (I OL ) = 7 mA    |                              |                              |                                    |                                    |                                    |
| Low Level                            | V OL1   | V DDIO > 2 V                        |                              | 0.4                          |                                    |                                    | V                                  |
|                                      | V OL2   | V DDIO ≤ 2 V                        |                              | 0.2 × V DDIO                 |                                    |                                    | V                                  |
| Output Current                       | V IH    |                                     | 0.7 × V DDIO                 |                              | 0.7 × V DDIO                       |                                    | V                                  |
| Low Level                            | I OL    | V OL = 0.4 V                        | 20                           |                              |                                    |                                    | mA                                 |
|                                      |         | V OL = 0.6 V                        | 6                            |                              |                                    |                                    | mA                                 |
| AC INPUT LEVELS                      |         |                                     |                              |                              |                                    |                                    |                                    |
| SCL Frequency                        |         |                                     | 0.01                         | 1                            | 0.01                               | 3.4                                | MHz                                |
| SCL High Time                        | t HIGH  |                                     | 260                          |                              | 60                                 |                                    | ns                                 |
| SCL Low Time                         | t LOW   |                                     | 500                          |                              | 160                                |                                    | ns                                 |
| Start Setup Time                     | t SUSTA |                                     | 260                          |                              | 160                                |                                    | ns                                 |
| Start Hold Time                      | t HDSTA |                                     | 260                          |                              | 160                                |                                    | ns                                 |
| SDA Setup Time                       | t SUDAT |                                     | 50                           |                              | 10                                 |                                    | ns                                 |
| SDA Hold Time                        | t HDDAT |                                     | 0                            |                              | 0                                  |                                    | ns                                 |
| Stop Setup Time                      | t SUSTO |                                     | 360                          |                              | 160                                |                                    | ns                                 |
| Bus Free Time                        | t BUF   |                                     | 500                          |                              |                                    |                                    | ns                                 |
| SCL Input Rise Time                  | t RCL   |                                     |                              | 120                          |                                    | 80                                 | ns                                 |
| SCL Input Fall Time                  | t FCL   |                                     |                              | 120                          |                                    | 80                                 | ns                                 |
| SDA Input Rise Time                  | t RDA   |                                     |                              | 120                          |                                    | 160                                | ns                                 |
| SDA Input Fall Time                  | t FDA   |                                     |                              | 120                          |                                    | 160                                | ns                                 |
| Width of Spike to Suppress           | t SP    | Not shown in Figure                 |                              | 50                           |                                    | 10                                 | ns                                 |
| AC OUTPUT LEVELS                     |         |                                     |                              |                              |                                    |                                    |                                    |
| Propagation Delay                    |         | Load capacitance (C LOAD ) = 500 pF |                              |                              |                                    |                                    |                                    |
| Data                                 | t VDDAT |                                     | 97                           | 450                          | 27                                 | 135                                | ns                                 |
| Acknowledge                          | t VDACK |                                     |                              | 450                          |                                    |                                    | ns                                 |
| Output Fall Time                     | t F     | Not shown in Figure                 | 20 × (V DDIO /5.5)           | 120                          |                                    |                                    | ns                                 |

## SPECIFICATIONS

Table 3. SPI Digital Input and Output (T A = 25°C, V S = 3.3 V, and V DDIO = 3.3 V)

|                           |        |                                | Limit 1      | Limit 1      |      |
|---------------------------|--------|--------------------------------|--------------|--------------|------|
| Parameter                 | Symbol | Test Conditions/Comments       | Min          | Max          | Unit |
| DIGITAL INPUT             |        |                                |              |              |      |
| Low Level Input Voltage   | V IL   |                                |              | 0.3 × V DDIO | V    |
| High Level Input Voltage  | V IH   |                                | 0.7 × V DDIO |              | V    |
| Low Level Input Current   | I IL   | Input voltage (V IN ) = V DDIO |              | -0.1         | µA   |
| High Level Input Current  | I IH   | V IN = 0 V                     | 0.1          |              | µA   |
| DIGITAL OUTPUT            |        |                                |              |              |      |
| Low Level Output Voltage  | V OL   | I OL = I OL, MIN               |              | 0.2 × V DDIO | V    |
| High Level Output Voltage | V OH   | I OH = I OH, MAX               | 0.8 × V DDIO |              | V    |
| Low Level Output Current  | I OL   | V OL = V OL, MAX               | 1            |              | mA   |
| High Level Output Current | I OH   | V OH = V OH, MIN               |              | -2           | mA   |

Table 4. SPI Timing (T A = 25°C, V S = 3.3 V, and V DDIO = 3.3 V)

| Parameter   | Limit 1, 2, 3   | Limit 1, 2, 3   | Unit   |                                                            |
|-------------|-----------------|-----------------|--------|------------------------------------------------------------|
| Parameter   | Min             | Max             | Unit   |                                                            |
| f CLK       | 0.1             | 8               | MHz    | Clock frequency                                            |
| t CSS       | 100             |                 | ns     | CS setup time                                              |
| t CSH       | 0.02            | 1000            | µs     | CS hold time                                               |
| t CSD       | 20              |                 | ns     | CS disable time                                            |
| t SU        | 20              |                 | ns     | Data setup time                                            |
| t HD        | 20              |                 | ns     | Data hold time                                             |
| t HIGH      | 50              |                 | ns     | Clock high time                                            |
| t LOW       | 50              |                 | ns     | Clock low time                                             |
| t CLE       | 25              |                 | ns     | Clock enable time                                          |
| t V         | 0               | 50              | ns     | Output valid from clock low (not shown in timing diagrams) |
| t DIS       | 0               | 25              | ns     | Output disable time (not shown in timing diagrams)         |

Figure 3. SPI Timing Diagram-Single-Byte Write

<!-- image -->

## SPECIFICATIONS

Figure 5. SPI Timing Diagram-Multibyte Write

<!-- image -->

Table 5. I 2 S, TDM, and PDM Timing (T A = 25°C, V S = 3.3 V, and V DDIO = 3.3 V)

| Parameter   | Min   | Max    | Unit   | Description                                                                                       |
|-------------|-------|--------|--------|---------------------------------------------------------------------------------------------------|
| SERIAL PORT |       |        |        |                                                                                                   |
| t BL        | 18    |        | ns     | BCLK low pulse width (controller and subordinate modes)                                           |
| t BH        | 18    |        | ns     | BCLK high pulse width (controller and subordinate modes)                                          |
| f BCLK      | 0.512 | 12.288 | MHz    | BCLK frequency                                                                                    |
| t LS        | 3     |        | ns     | FSYNC setup, time to BCLK rising (subordinate mode)                                               |
| t LH        | 5     |        | ns     | FSYNC hold, time from BCLK rising (subordinate mode)                                              |
| f SYNC      | 2     | 48     | kHz    | FSYNC frequency                                                                                   |
| t TS        |       | 6      | ns     | BCLK falling to FSYNC timing skew (controller mode)                                               |
| t SOD       | 0     | 30     | ns     | S OUTx delay, time from BCLK falling (controller and subordinate modes), V DDIO at 1.62 V minimum |
|             | 0     | 80     | ns     | S OUTx delay, time from BCLK falling (controller and subordinate modes), V DDIO at 1.14 V minimum |
| t SOTD      | 0     | 15     | ns     | BCLK falling to S OUTx driven in tristate mode                                                    |
| t SOTX      | 0     | 15     | ns     | BCLK falling to S OUTx tristated in tristate mode                                                 |
| PDM OUTPUT  |       |        |        |                                                                                                   |
| f PDM_CLK   | 0.512 | 12.288 | MHz    | PDM clock frequency                                                                               |
| t HOLD      | 35    | 46     | ns     | PDM data hold time                                                                                |

## DIGITAL TIMING DIAGRAMS

Figure 6. I 2 S/TDM Serial Output Port Timing Diagram

<!-- image -->

## SPECIFICATIONS

<!-- image -->

Figure 7. SPI Port Timing Diagram

<!-- image -->

Figure 8. Timing Diagram for SPI Send Instructions

Figure 9. I 2 C Port Timing Diagram

<!-- image -->

Figure 10. PDM Output Timing Diagram

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 6. Absolute Maximum Ratings

| Parameter                                                                                       | Rating                   |
|-------------------------------------------------------------------------------------------------|--------------------------|
| Mechanical Shock (Any Axis, 0.2 ms)                                                             | 10,000 g                 |
| V S                                                                                             | -0.3 V to +4.0 V         |
| V DDIO                                                                                          | -0.3 V to +4.0 V         |
| V 1P8 Configured as Input                                                                       | -0.3 V to +2.0 V         |
| Digital Inputs (FSYNC, SCLK/SCL, SDI/SDA, SDO/ASEL0, CS/ASEL1, S OUT0 , S OUT1 /MCLK, and BCLK) | -0.3 V to V DDIO + 0.3 V |
| Temperature Range (Storage)                                                                     | -55°C to +150°C          |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

Thermal resistance values specified in Table 7 are simulated based on JEDEC specs (unless specified otherwise) and should be used in compliance with JESD51-12.

θ JA is the natural convection junction-to-ambient thermal resistance measured in a one cubic foot sealed enclosure, θ JC is the junction-to-case thermal resistance, Ψ JT is the junction-to-top of the package thermal resistance, and Ψ JB is the junction-to-bottom of the package thermal resistance.

Table 7. Package Characteristics

| Package Type   |   θ JA |   θ JC |   Ψ JT |   Ψ JB | Unit   |
|----------------|--------|--------|--------|--------|--------|
| CC-14-3        |   71.3 |     46 |    2.9 |     47 | °C/W   |

## RECOMMENDED SOLDERING PROFILE

Figure 11 and Table 8 provide details about the recommended soldering profile.

Figure 11. Recommended Soldering Profile

<!-- image -->

Table 8. Recommended Soldering Profile

|                                                   | Condition         | Condition         |
|---------------------------------------------------|-------------------|-------------------|
| Profile Feature                                   | Sn63/Pb37         | Pb-Free           |
| Average Ramp Rate (T L to T P )                   | 3°C/sec maximum   | 3°C/sec maximum   |
| Preheat                                           |                   |                   |
| Minimum Temperature (T SMIN )                     | 100°C             | 150°C             |
| Maximum Temperature (T SMAX )                     | 150°C             | 200°C             |
| Time (T SMIN to T SMAX )(t S )                    | 60 sec to 120 sec | 60 sec to 180 sec |
| T SMAX to T L Ramp-Up Rate                        | 3°C/sec maximum   | 3°C/sec maximum   |
| Time Maintained Above                             |                   |                   |
| Liquidous Temperature (T L )                      | 183°C             | 217°C             |
| Time (t L )                                       | 60 sec to 150 sec | 60 sec to 150 sec |
| Peak Temperature (T P )                           | 240 ± 5°C         | 260 ± 5°C         |
| Time Within 5°C of Actual Peak Temperature (t P ) | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                    | 6°C/sec maximum   | 6°C/sec maximum   |
| Time 25°C to Peak Temperature                     | 6 minutes maximum | 8 minutes max     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 12. Pin Configuration (Top View)

<!-- image -->

Table 9. Pin Function Descriptions

|         |               | Description                                                     | Description                                                     | Description                                                     | Description                                                     |
|---------|---------------|-----------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|
| Pin No. | Mnemonic      | SPI                                                             | I 2 S/TDM                                                       | I 2 C                                                           | PDM                                                             |
| 1       | FSYNC         | Interrupt Input in FIFO Trigger Mode (Optional) 1               | Frame Sync (FSYNC)                                              | Interrupt Input in FIFO Trigger Mode (Optional) 1               | SOUT1                                                           |
| 2       | SCLK/SCL      | SPI, Clock (SCLK)                                               | Not Applicable                                                  | I 2 C, Serial Clock (SCL)                                       | Not Applicable                                                  |
| 3       | SDI/SDA       | SPI, Serial Data Input (SDI)                                    | Not Applicable                                                  | I 2 C, Serial Data (SDA)                                        | Not Applicable                                                  |
| 4       | SDO/ASEL0     | SPI, Serial Data Output (SDO)                                   | Not Applicable                                                  | I 2 C, Address Select 0 (ASEL0)                                 | Not Applicable                                                  |
| 5       | CS/ASEL1      | SPI, Chip Select 2                                              | Not Applicable                                                  | I 2 C, Address Select 1 (ASEL1)                                 | Not Applicable                                                  |
| 6       | INT0          | Interrupt 0                                                     | Interrupt 0                                                     | Interrupt 0                                                     | Interrupt 0                                                     |
| 7       | INT1          | Interrupt 1 1                                                   | Interrupt 1                                                     | Interrupt 1 1                                                   | Interrupt 1                                                     |
| 8       | V 1P8         | Internally Regulated Voltage (External 1.8 V When V S Grounded) | Internally Regulated Voltage (External 1.8 V When V S Grounded) | Internally Regulated Voltage (External 1.8 V When V S Grounded) | Internally Regulated Voltage (External 1.8 V When V S Grounded) |
| 9       | GND           | Ground                                                          | Ground                                                          | Ground                                                          | Ground                                                          |
| 10      | V S           | Supply Voltage                                                  | Supply Voltage                                                  | Supply Voltage                                                  | Supply Voltage                                                  |
| 11      | V DDIO        | Input and Output Supply                                         | Input and Output Supply                                         | Input and Output Supply                                         | Input and Output Supply                                         |
| 12      | S OUT0        | Not Applicable 2, 3                                             | Data Channel 0 (S OUT0 )                                        | Not Applicable 3                                                | Data Channel 0 (S OUT0 )                                        |
| 13      | S OUT1 / MCLK | Not Applicable 4                                                | MCLK or Data Channel 1 (S OUT1                                  | Not Applicable 4                                                | Not Applicable                                                  |
| 14      | BCLK          | Not Applicable 4                                                | Bit Clock (BCLK)                                                | Not Applicable 4                                                | Bit Clock (BCLK)                                                |

## TYPICAL PERFORMANCE CHARACTERISTICS

TA = 25°C, V S = 3.3 V, x-axis and y-axis acceleration = 0 g , z-axis acceleration = 1 g , full-scale range = ±4 g , and default settings for other registers, unless otherwise noted.

<!-- image -->

Figure 13. X-Axis Zero g Offset at 25°C, V S = 3.3 V

<!-- image -->

Figure 14. Y-Axis Zero g Offset at 25°C, V S = 3.3 V

<!-- image -->

Figure 15. Z-Axis Zero g Offset at 25°C, V S = 3.3 V

<!-- image -->

Figure 16. X-Axis Sensitivity at 25°C, V S = 3.3 V, ±4 g Range

Figure 17. Y-Axis Sensitivity at 25°C, V S = 3.3 V, ±4g Range

<!-- image -->

Figure 18. Z-Axis Sensitivity at 25°C, V S = 3.3 V, ±4 g Range

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 19. X-Axis Offset vs. Temperature, Measured Across 48 Samples, V S = 3.3 V

<!-- image -->

Figure 20. Y-Axis Offset vs. Temperature, Measured Across 48 Samples, V S = 3.3 V

<!-- image -->

Figure 21. Z-Axis Offset vs. Temperature, Measured Across 48 Samples, V S = 3.3 V

<!-- image -->

Figure 22. X-Axis Sensitivity Change vs. Temperature, Measured Across 48 Samples, V S = 3.3 V

Figure 23. Y-Axis Sensitivity Change vs. Temperature, Measured Across 48 Samples, V S = 3.3 V

<!-- image -->

Figure 24. Z-Axis Sensitivity Change vs. Temperature, Measured Across 48 Samples, V S = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 25. X-Axis Frequency Response at 25°C, Measured Across 15 Samples, V S = 3.3 V

<!-- image -->

Figure 26. Y-Axis Frequency Response at 25°C, Measured Across 15 Samples, V S = 3.3 V

<!-- image -->

Figure 27. Z-Axis Frequency Response at 25°C, Measured Across 15 Samples, V S = 3.3 V

<!-- image -->

Figure 28. X-Axis PDM Frequency Response at 25°C, Measured Across 9 Samples, V S = 3.3 V

Figure 29. Y-Axis PDM Frequency Response at 25°C, Measured Across 9 Samples, V S = 3.3 V

<!-- image -->

Figure 30. Z-Axis PDM Frequency Response at 25°C, Measured Across 9 Samples, V S = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 31. X-axis ±4 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

<!-- image -->

Figure 32. Y-Axis ±4 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

<!-- image -->

Figure 33. Z-Axis ±4 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

<!-- image -->

Figure 34. X-Axis ±8 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

Figure 35. Y-Axis ±8 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

<!-- image -->

Figure 36. Z-Axis ±8 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 37. X-Axis ±16 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

<!-- image -->

Figure 38. Y-Axis ±16 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

<!-- image -->

Figure 39. Z-Axis ±16 g Nonlinearity at 25°C, Measured Across 6 Samples, V S = 3.3 V

<!-- image -->

Figure 40. X-Axis Vibration Rectification Error, X-Axis in +1 g Field, ±4 g Range, Measured Across 8 Samples, V S = 3.3 V

Figure 41. Y-Axis Vibration Rectification Error, Y-Axis in +1 g Field, ±4 g Range, Measured Across 8 Samples, V S = 3.3 V

<!-- image -->

Figure 42. Z-Axis Vibration Rectification Error, Z-Axis in +1 g Field, ±4 g Range, Measured Across 8 Samples, V S = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 43. X-Axis Root Allan Variance at 25°C, Measured Across 12 Samples, VS  = 3.3 V

<!-- image -->

Figure 44. Y-Axis Root Allan Variance at 25°C, Measured Across 12 Samples, VS  = 3.3 V

<!-- image -->

Figure 45. Z-Axis Root Allan Variance at 25°C, Measured Across 12 Samples, VS  = 3.3 V

<!-- image -->

Figure 46. X-Axis Self Test Magnitude at 25°C,

VS  = 3.3 V

Figure 47. Y-Axis Self Test Magnitude at 25°C, VS  = 3.3 V

<!-- image -->

Figure 48. Z-Axis Self Test Magnitude at 25°C, VS  = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 49. Clock Deviation from Nominal at 25°C, V S = 3.3 V

<!-- image -->

Figure 50. HP Mode Supply Current at 25°C, 3-Axis, V S = 3.3 V

<!-- image -->

Figure 51. RBW Mode Supply Current at 25°C, 3-Axis, V S = 3.3 V

<!-- image -->

Figure 52. LP Mode Supply Current at 25°C, 3-Axis, V S = 3.3 V

Figure 53. VLP Mode Supply Current at 25°C, 3-Axis, V S = 3.3 V

<!-- image -->

Figure 54. ULP Mode Supply Current at 25°C, 3-Axis, V S = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 55. HS Mode Supply Current at 25°C, 1-Axis, V S = 3.3 V

Figure 56. Standby Mode Supply Current at 25°C, V S = 3.3 V

<!-- image -->

Figure 57. Temperature Sensor Output at 25°C, HIGH\_GAIN\_TEMP = 0, V S = 3.3 V

<!-- image -->

## THEORY OF OPERATION

The ADXL380 is a complete 3-axis acceleration measurement system. The device measures both dynamic accelerations resulting from motion, shock, and vibration as well as static acceleration such as tilt. Acceleration is reported digitally from the device using SPI or I 2 C protocols and/or I 2 S/TDM/PDM. Built-in digital logic enables autonomous operation and implements functionality that enhances system level power savings.

The micromachined, sensing elements are fully differential, comprising the lateral x-axis and y-axis sensor and the vertical, teeter totter z-axis sensors. The x-axis and y-axis sensors and the z-axis sensors go through separate signal paths that minimize offset drift and noise.

The ADXL380 include anti-aliasing filters before the high resolution Σ-Δ ADC and a decimation filter after. The following two signal paths are supported:

- High performance using the 16-bit DSM
- Low power using the 12-bit SAR

These signal paths can be used independently or concurrently (see the Concurrent Operating Modes section for more information). User-selectable output data rate (ODR) and filter corners are provided.

## MECHANICAL DEVICE OPERATION

The moving component of the sensor is a polysilicon surface-micromachined structure that is built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against acceleration forces.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the structure and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase sensitive demodulation determines the magnitude and polarity of the acceleration.

## OPERATING MODES

The ADXL380 has seven primary operating modes with more modes available when operating concurrently (see the Concurrent Operating Modes section for more information).

Table 10. Operating Modes

| Mode                   | Signal Path                                |
|------------------------|--------------------------------------------|
| Standby                | Not applicable                             |
| High Performance (HP)  | 16-bit DSM (high performance signal chain) |
| Reduce Bandwidth (RBW) | 16-bit DSM (high performance signal chain) |
| Low Power (LP)         | 16-bit DSM (high performance signal chain) |
| Very Low Power (VLP)   | 12-bit SAR (low power signal chain)        |
| Ultra-Low Power (ULP)  | 12-bit SAR (low power signal chain)        |
| Heart Sounds (HS)      | 12-bit SAR (low power signal chain)        |

## STANDBY MODE

Placing the ADXL380 in standby suspends measurement and reduces current consumption to 6.8 µA (typical). Standby mode is used for power conservation and device configuration. FIFO data is preserved and no new interrupts are generated (see Interrupts section for more details).

The ADXL380 powers up in standby with all sensor functions turned off. Note that any changes to the device configuration must be made with the device in standby. If changes are made while the ADXL380 is in measurement mode, these changes may be effective for only part of a measurement. Ensure that a change of the data capture configuration only occurs in standby mode.

## MEASUREMENT MODE

Measurement mode refers to any of the operating modes that use the DSM or SAR signal path (every mode except standby mode in Table 10). When operating in measurement mode, the user can choose between several power consumption modes or operate in concurrent mode (one DSM mode and one SAR mode operating concurrently).

Note that after entering measurement mode, a 2 ms wait time must be observed before reading acceleration data to allow the output time to settle after entering measurement mode.

## SELECTABLE MEASUREMENT RANGES

The ADXL380 has selectable measurement ranges of ±4 g , ±8 g , and ±16 g . When operating in PDM mode, only ±8 g , and ±16 g ranges are supported. Acceleration samples are always converted by an ADC. Therefore, sensitivity scales with g range and with the ADC resolution (16-bit DSM or 12-bit SAR). Ranges and corresponding sensitivity values are listed in Table 1. For sensitivity details specific to PDM mode, refer to the PDM Interface section. When the input exceeds the full-scale range, the output data may not be accurate temporarily. The sensor is not damaged as long as the acceleration remains less than the absolute maximum rating. Table 6 lists the absolute maximum ratings for acceleration, indicating the acceleration level that can cause permanent damage to the ADXL380.

## DIGITAL OUTPUT

Figure 58 shows the ADXL380 application circuit. The communications interface is either SPI or I 2 C for the configuration, and the serial data interface is either SPI/I 2 C, I 2 S, or PDM (see the Serial Communications section for additional information).

The ADXL380 includes an internal configurable digital band-pass filter. Both the high-pass and low-pass poles of the filter are adjustable, as detailed in the Filter section. The ADXL380 powers up in standby mode. A particular mode can be chosen by setting the OP\_MODE register (Register 0x26).

Figure 58 shows a 0.1 µF capacitor on the V S , V DDIO , and V 1P8 pins. If the power supply is noisy, additional filtering may be

## THEORY OF OPERATION

required. An additional 1 µF capacitor can be added to the V S and V DDIO supplies in parallel with the 0.1 µF capacitors.

Figure 58. ADXL380 Application Circuit

<!-- image -->

## TEMPERATURE SENSOR

The ADXL380 includes an integrated 12-bit temperature sensor, which the system designer can use to monitor the internal system temperature or to improve the temperature stability of the device via calibration.

The temperature sensor built in the ADXL380 is trimmed at room temperature before shipping; therefore, it can even be used to monitor the absolute temperature. To get even better accuracy, users can measure and calibrate the initial bias of the ADXL380 at some known temperature in mass production.

To use the temperature sensor for calibration of the acceleration signal, it is sufficient to correlate acceleration to temperature sensor output, rather than to absolute temperature. In this case, it is not necessary to convert the temperature reading to an absolute temperature; therefore, calibration of the initial bias is not required.

The designer can configure the device to save data from the temperature sensor in the FIFO. Temperature samples, whether read from the output registers or from the FIFO, update concurrently with acceleration (and ADC) samples, unless these samples are turned off. When the temperature channel is enabled, the ODR is always 100 Hz. If the ODR is faster than this on the other channels (x-axis, y-axis, or z-axis channels), temperature data is repeated until a new temperature sample is available.

## AXES OF ACCELERATION SENSITIVITY

Figure 59 shows the axes of acceleration sensitivity. Note that the digital output increases when accelerated along the sensitive axis.

Figure 59. Axes of Acceleration Sensitivity

<!-- image -->

Figure 60. Output Response vs. Orientation to Gravity

<!-- image -->

## POWER SEQUENCING

The ADXL380 uses internal LDO regulators to generate the 1.8 V power for the internal analog and digital supplies. This 1.8 V regulated voltage is sent to the V 1P8 pin as an output. When using the LDO regulator, connect V S to a voltage source between 2.25 V and 3.6 V.

To disable the internal LDO regulators, tie V S to ground before using an external 1.8 V supply to power V 1P8 . Refer to the Power Supply Requirements section for more information.

If necessary V 1P8 and V DDIO can be powered from the same external 1.8 V supply so that both are powered at the same time. In this case, proper decoupling and low frequency isolation are important to maintain the noise performance of the sensor.

VS , V DDIO , and V 1P8 (if enabled as inputs) can be powered up in any sequence.

## THEORY OF OPERATION

## POWER SUPPLY DESCRIPTION

The ADXL380 have three different power supply domains: V S , V 1P8 , and V DDIO . The internal analog and digital circuitry operates at 1.8 V nominal.

## VS

VS  is 2.25 V to 3.6 V, which is the input range to the two LDO regulators that generate the nominal 1.8 V outputs for V 1P8 (which requires a 100 nF capacitor). Connect V S to ground to disable the LDO regulators, which allows driving V 1P8 from an external source.

## V1P8

V1P8 is the supply voltage for the internal logic circuitry. A separate LDO regulator decouples the digital supply noise from the analog signal path. If this is driven by an external supply, it must be 1.8 V ± 10%, and V S must be grounded.

## VDDIO

The V DDIO value determines the logic high level for communication interface ports, as well as the interrupt pins.

VDDIO can operate as low as 1.14 V min (-25°C to +85°C) and 1.62 V min (for the full temperature range).

## OVERRANGE PROTECTION

To avoid electrostatic capture of the proof mass when the accelerometer is subject to input acceleration beyond its full-scale range, all sensor drive clocks turn off for 0.5 ms. The overrange protection activates when the input acceleration exceeds the threshold (see Table 11). Note that this threshold may vary from part to part (±25% from the nominal value).

When an overrange event occurs, the data are always invalid. The response is determined by the DIG\_OUT\_DURING\_OR bits in Register 0x48. During an overrange event, the data can be configured to remain at full-scale with the correct sign, hold the previous data before the overrange event, or do nothing to the invalid data. Invalid data fluctuate anywhere between minus and plus full scale and do not represent real acceleration.

Table 11. Overrange Protection Threshold

|   Range ( g ) |   X/Y Nominal Threshold ( g ) |   Z Nominal Threshold ( g ) |
|---------------|-------------------------------|-----------------------------|
|             4 |                            20 |                          15 |
|             8 |                            40 |                          25 |
|            16 |                            70 |                          50 |

## SELF TEST

The ADXL380 incorporates a self test feature that effectively tests the mechanical and electronic system. Enabling self test stimulates the sensor electrostatically to produce an output corresponding to the test signal applied as well as the mechanical force exerted. This feature must be enabled in the ±8 g range.

Take the following steps to run a self test measurement:

1. Set the ADXL380 operational mode (HP, RBW, LP, VLP, ULP, or HS) and configure the device in the ±8 g range. Both OP\_MODE and RANGE bits are in the OP\_MODE register (Register 0x26).
2. Enable the X, Y, and Z axes by setting the MODE\_CHANNE\_EN bits in the Register DIG\_EN register (Register 0x27). In HS operational mode, only enable a singular axis (X, Y, or Z).
3. Enable the positive self test force (ST POSITIVE ) by setting the ST\_MODE bit and ST\_FORCE bit to b'1 in the SNSR\_AX-IS\_EN register (Register 0x38).
4. Read the acceleration data for at least 25 samples. The user must record the acceleration data value.
5. Enable the negative self test force (ST NEGATIVE ) by changing self test direction, setting the ST\_DIR, ST\_FORCE, and ST\_MODE bits to b'1 in the SNSR\_AXIS\_EN register (Register 0x38).
6. Read the acceleration data for at least 25 samples. The user must record the acceleration data value.
7. Subtract the data collected in Step 6 from the data collected in Step 5 to determine the magnitude of the self test delta: STΔ = STPOSITIVE - ST NEGATIVE .
8. Compare the STΔ magnitude to the limits in Table 1. If the magnitudes are within the minimum and maximum specifications, the ADXL380 passed the self test. Otherwise, the ADXL380 failed and must be flagged for further investigation.

## THEORY OF OPERATION

## FILTER

The ADXL380 provides digital filtering options to maintain optimal noise performance. The user has access to seven different filter options for maximized user configurability. The filters available include the equalizer filter, digital low-pass filter, digital high-pass filter, low latency infinite impulse response filter, and decimation filters (sinc filter, droop compensation filter (DCF), and infinite impulse response filter).

The filter signal path is shown in Figure 61. Table 12 summarizes filters availability by operational modes. Refer to the Latency section for information on filter latency.

Table 12. ADXL380 Filter Options by Operational Mode

| Filter                                                | Operational Mode Supported   |
|-------------------------------------------------------|------------------------------|
| Equalizer (EQ) Filter                                 | HP                           |
| Low-Pass Filter (LPF)                                 | HP, RBW, or LP               |
| High-Pass Filter (HPF)                                | HP, RBW, LP, VLP, ULP, or HS |
| First-Order Infinite Impulse Response Filter (IIR1)   | HP, RBW, or LP               |
| Sinc Filter                                           | HP, RBW, or LP               |
| Droop Compensation Filter (DCF)                       | HP, RBW, or LP               |
| Seventh-Order Infinite Impulse Response Filter (IIR7) | HP, RBW, or LP               |

Figure 61. ADXL380 Filter Path

<!-- image -->

## THEORY OF OPERATION

## Fourth-Order Equalizer Filter (EQ)

The ADXL380 includes a fourth-order digital equalizer filter designed to flatten the sensor frequency response to increase the sensing bandwidth up to 4 kHz (see Figure 62).

The EQ feature is only available when operating in HP mode. The EQ is automatically bypassed in other operational modes. The EQ, IIR1, and LPF cannot be used concurrently.

The FILTER register (Register 0x50) is used to disable the EQ. In HP operational mode, the user must set the LPF\_MODE bits in

<!-- image -->

the FILTER register (Register 0x50, Bits[5:4]) to b'00 and set the IIR1\_EN bit in the TRIG\_CFG register (Register 0x49, Bit 5) to b'0 prior to enabling the EQ (default configuration). The EQ\_BYPASS bit in Register FILTER (Register 0x50, Bit 6) is set to b'0 by default to enable EQ. The user must set the EQ\_BYPASS bit to b'1 to bypass the EQ. The EQ is automatically bypassed in all other operational modes.

Figure 62. ADXL380 Filter Frequency Response-Equalizer Effect

<!-- image -->

## THEORY OF OPERATION

## Digital LPF

The digital LPF in the ADXL380 provides an improved noise performance in a reduced bandwidth setting. The LPF is a secondorder infinite impulse response filter that supports three different user-configurable cutoff frequencies: ¼ × ODR, 1/8 × ODR, and 1/16 × ODR. The LPF is disabled by default.

The LPF feature is only available when operating in the high-performance signal chain (HP, RBW, and LP operational modes). The EQ, IIR1, and LPF cannot be used concurrently.

The FILTER register (Register 0x50) is used to enable the LPF. In HP operational mode, the user must set the EQ\_BYPASS bit in the FILTER register (Register 0x50) to b'1 and set the IIR1\_EN bit to b'0 in the TRIG\_CFG register (Register 0x49) prior to enabling the LPF. In RBW and LP operational modes, the user must set the IIR1\_EN bit in the TRIG\_CFG register (Register 0x49) to b'0 prior to enabling the LPF.

The LPF is then enabled by setting the LPF\_MODE bits in the FILTER register (Register 0x50) to the desired value:

- No low-pass filtering (b'00)
- Cutoff frequency is 1/4 × ODR (b'01)
- Cutoff frequency is 1/8 × ODR (b'10)
- Cutoff frequency is 1/16 × ODR (b'11)

## Digital HPF

The digital HPF in the ADXL380 includes a programmable corner frequency. The HPF is disabled by default.

The FILTER register (Register 0x50) is used to enable the HPF. The HPF\_PATH bit in the FILTER register must be set to the desired signal path. When the HPF\_PATH bit is set to b'0, the HPF is set to the low power signal chain, and when the HPF\_PATH bit is set to b'1, the HPF is set to the high performance signal chain. Refer to the Operating Modes section for more details on high performance modes (DSM signal path) and low power modes (SAR signal chain). Once the HPF\_PATH bit is set, the HPF\_CORNER bits are set to the desired value. Table 13 shows the different available values for the HPF corner frequency.

Table 13. HPF Corner Frequency Values

| HPF_CORNER Bits Value   | Corner Frequency Value (Hz)             |
|-------------------------|-----------------------------------------|
| b'000                   | Not applicable (no high-pass filtering) |
| b'001                   | 24.7E-4 × ODR                           |
| b'010                   | 6.2084E-4 × ODR                         |
| b'011                   | 1.5545E-4 × ODR                         |
| b'100                   | 0.3862E-4 × ODR                         |
| b'101                   | 0.0954E-4 × ODR                         |
| b'110                   | 0.0238E-4 × ODR                         |

## First-Order Low Latency Infinite Impulse Response Filter (IIR1)

The first-order IIR1 in the ADXL380 provides an improved noise performance in a low group delay setting. The IIR1 supports a 5 kHz cutoff frequency and is disabled by default. Refer to the Latency section for more information on the latency with various filters enabled.

The IIR1 feature is only supported for the high performance signal chain (HP, RBW, or LP operational modes). The EQ, IIR1, and LPF cannot be used concurrently.

The TRIG\_CFG register (Register 0x49) is used to enable the IIR1. In HP operational mode, the user must set the EQ\_BYPASS bit to b'1 and the LPF\_MODE bits to b'00 in the FILTER register (Register 0x50) prior to enabling the IIR1. In RBW or LP operational modes, the user must set the LPF\_MODE bits in the FILTER register (Register 0x50) to b'00 prior to enabling the IIR1.

The IIR1 is then enabled by setting the IIR1\_EN bit in the TRIG\_CFG register (Register 0x49) to b'1.

## Decimation Filters

The decimation filters in the ADXL380 provide an improved noise performance to the customer. The ADC output is first decimated by a third-order sinc filter. Then, the DCF, a second-order FIR, is designed to correct for the drooping effect of the sinc filter. The signal is further decimated by a seven-order IIR filter. The output of the decimation filters is a variable ODR in function of the decimation occurring previously in the signal path. Note that by default, the ODR is twice the bandwidth, and the rounding method is configurable. Use the FLOOR rounding method to improve DC performance when using the HPF. The FLOOR rounding method minimizes the DC offset that is introduced when truncating the data to 16 bits and is defined as follows:

- If the signal is negative, it increments the data value by 1.
- If the signal is positive, the data is left unchanged.

Table 14 lists the ODR as a function of the different decimation filter settings. Table 14 also mentions the DOUBLE\_SPEED bit feature in the DIG\_EN register (Register 0x27, Bit 2) that affects the system clock of the ADXL380, and therefore, influences the final ODR. Refer to the Low Latency Mode section for more details, including register settings.

The decimation filters are only supported for the high-performance signal chain (HP, RBW, and LP operational modes). While Table 14 provides ODR values for HP mode (default 8 kHz), values for RBW and LP modes can be extrapolated by substituting the default ODR with 4 kHz and 2 kHz, respectively.

## THEORY OF OPERATION

Figure 63. Decimation Filter Architecture

<!-- image -->

Table 14. ADXL380 Decimation Filter-HP Mode

| DOUBLE _SPEED Bit,Register 0x27, Bit 2   |   A (kHz) | SINC _RATE Bit, Register 0x49, Bit 6   |   B (kHz) | DEC_2X_BYP ASS Bit, Register 0x49, Bit 7   |   C (kHz), ODR |
|------------------------------------------|-----------|----------------------------------------|-----------|--------------------------------------------|----------------|
| b'0                                      |       512 | b'0 (32×)                              |        16 | b'0                                        |              8 |
| b'0                                      |       512 | b'0 (32×)                              |        16 | b'1                                        |             16 |
| b'0                                      |       512 | b'1 (16×)                              |        32 | Not applicable                             |             32 |
| b'1                                      |      1024 | b'0 (32×)                              |        32 | b'0                                        |             16 |
| b'1                                      |      1024 | b'0 (32×)                              |        32 | b'1                                        |             32 |
| b'1                                      |      1024 | b'1 (16×)                              |        64 | Not applicable                             |             64 |

## Third-Order Sinc Filter (SINC)

The third-order sinc filter is designed to reduce the quantization noise of the Σ-Δ ADC. The sinc filter can be set either to 32× (default) or 16×. The user shall use the DCF filter to compensate for the droop of the SINC filter.

The TRIG\_CFG register (Register 0x49) is used to change the decimation of the sinc filter. By default, the SINC\_RATE bit in the TRIG\_CFG register (Register 0x49, Bit 6) is set to b'0 for a 32× decimation. The user must set the SINC\_RATE bit to b'1 to set the sinc filter to 16× decimation (see Table 14). When the SINC\_RATE bit is set to b'1, the IIR7 is bypassed automatically.

## Droop Compensation Filter (DCF)

The DCF is designed to compensate the droop of the sinc filter. The DCF is optimized for the 32× decimation of the sinc filter. Bypass the DCF if the sinc filter is set to a 16× decimation.

The FILTER register (Register 0x50) is used to disable the DCF. By default, the DCF\_BYPASS bit in the FILTER register (Register 0x50, Bit 7) is set to b'0 to compensate the droop of the sinc filter. The user must set the DCF\_BYPASS bit in the FILTER register to b'1 to bypass the DCF.

## Seventh-Order Infinite Impulse Response Filter (IIR7)

The IIR7 is designed to provide an improved noise performance to the customer. The IIR7 is a 2× decimation filter.

The TRIG\_CFG register (Register 0x49) is used to disable the IIR7. By default, the DEC\_2X\_BYPASS bit in the TRIG\_CFG register (Register 0x49, Bit 7) is set to b'0 for a 2× decimation. The user must set the DEC\_2X\_BYPASS bit to b'1 to bypass the IIR7 (see Table 14). When the SINC\_RATE bit in the TRIG\_CFG (Register 0x49, Bit 6) is set to b'1, the IIR7 is bypassed automatically.

## THEORY OF OPERATION

## NOISE

The ADXL380 has several operating modes and dynamic range options. Each of these impacts noise performance (see Table 15).

Table 15. Noise Performance vs. Dynamic Range and Operating Mode

|                              |                     | Noise Density (µ g /√Hz) RMS Output Noise (m g )   | Noise Density (µ g /√Hz) RMS Output Noise (m g )   | Noise Density (µ g /√Hz) RMS Output Noise (m g )   |     |
|------------------------------|---------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|-----|
| Operational Mode             | Dynamic Range ( g ) | XY                                                 | Z                                                  | XY                                                 | Z   |
| High Performance (HP)        | 4                   | 20                                                 | 27                                                 | 1.3                                                | 1.7 |
|                              | 8                   | 22                                                 | 28                                                 | 1.4                                                | 1.8 |
|                              | 16                  | 28                                                 | 30                                                 | 1.8                                                | 1.9 |
| Reduced Bandwidth (RBW)      | 4                   | 23                                                 | 29                                                 | 1.0                                                | 1.3 |
|                              | 8                   | 27                                                 | 30                                                 | 1.2                                                | 1.4 |
|                              | 16                  | 37                                                 | 34                                                 | 1.7                                                | 1.5 |
| Low Power (LP)               | 4                   | 39                                                 | 49                                                 | 1.2                                                | 1.5 |
|                              | 8                   | 44                                                 | 51                                                 | 1.4                                                | 1.6 |
|                              | 16                  | 57                                                 | 56                                                 | 1.8                                                | 1.8 |
| Very Low Power (VLP)         | 4                   | 94                                                 | 97                                                 | 2.1                                                | 2.2 |
|                              | 8                   | 170                                                | 180                                                | 3.7                                                | 3.9 |
|                              | 16                  | 340                                                | 270                                                | 7.5                                                | 6.1 |
| Ultra-Low Power (ULP)        | 4                   | 160                                                | 160                                                | 1.2                                                | 1.2 |
|                              | 8                   | 310                                                | 390                                                | 2.2                                                | 2.8 |
|                              | 16                  | 620                                                | 580                                                | 4.4                                                | 4.2 |
| Heart Sounds Mode (1-Axis) 1 | 4                   | 66                                                 | 71                                                 | 1.5                                                | 1.6 |
|                              | 8                   | 110                                                | 120                                                | 2.6                                                | 2.7 |
|                              | 16                  | 210                                                | 190                                                | 4.7                                                | 4.4 |

The ADXL380 offers many options for controlling the tradeoff between power consumption, dynamic range, and noise performance.

## POWER SAVINGS FEATURES

The ADXL380 includes several features (as described in the following sections) for enabling power savings at the system level, as well as at the device level.

## OPERATING MODES

The ADXL380 has seven standard operating modes:

- Standby
- High performance (HP)
- Reduced bandwidth (RBW)
- Low power (LP)
- Very low power (VLP)
- Ultra-low power (ULP)
- Heart sounds (HS)

## Table 16. Modes of Operation

| Operational Mode   | Bandwidth 1    | Signal Path    | System Clock   | FIFO   | SPI/I 2 C   | TDM   | OP_MODE (Register 0x26, Bits[3:0])   |
|--------------------|----------------|----------------|----------------|--------|-------------|-------|--------------------------------------|
| Standby            | Not applicable | Not applicable | Not applicable | No     | Yes         | No    | 4'b0000                              |
| HS (1-Axis)        | 400 Hz         | SAR            | 256 kHz        | Yes    | Yes         | No    | 4'b0001                              |
| ULP                | 50 Hz          | SAR            | 256 kHz        | Yes    | Yes         | No    | 4'b0010                              |
| VLP                | 500 Hz         | SAR            | 256 kHz        | Yes    | Yes         | No    | 4'b0011                              |
| LP                 | 1000 Hz        | Σ-Δ            | 512 kHz        | Yes    | Yes         | Yes   | 4'b0100                              |
| RBW                | 2000 Hz        | Σ-Δ            | 512 kHz        | Yes    | Yes         | Yes   | 4'b1000                              |
| HP                 | 4000 Hz        | Σ-Δ            | 512 kHz        | Yes    | Yes         | Yes   | 4'b1100                              |

When using modes concurrently, the 13 unique operating mode are available (for example, HP mode and ULP mode: OP\_MODE = 4'b1110). See the OP\_MODE bits, Bits[3:0] in the OP\_MODE register (Register 0x26) for more details about each mode.

The ADXL380 supports seven modes of operation to prioritize performance, low power, or bandwidth depending on the needs of the application. These modes are configured through the use of the four bits within the OP\_MODE bits.

Switching between any two modes must be first done by transitioning through standby mode, which must be done explicitly through register commands because the ADXL380 does not manage this aspect. Switching to standby ensures all clocks and datapaths are correctly configured and flushed to a known state.

## POWER SAVINGS FEATURES

## MOTION DETECTION

The ADXL380 features built-in logic that detects activity (presence of acceleration above a threshold) and inactivity (lack of acceleration above a threshold). Activity and inactivity events can be used as triggers to manage the accelerometer mode of operation, trigger an interrupt to a host processor, and/or autonomously drive a motion switch.

Detection of an activity or inactivity event is indicated in the STATUSx registers (Register 0x11 through Register 0x14) and can be configured to generate an interrupt. Note that motion detection (activity, inactivity, or tap detection) are only functional for the low power operational modes (VLP, ULP, and HS modes).

## ACTIVITY DETECTION

An activity event is detected when acceleration remains more than a specified threshold for a specified time period on any of the axes. If any axis exceeds the threshold, an activity event occurs unless that axis is disabled.

## Referenced and Absolute Configurations

Activity detection can be configured as referenced or absolute.

When using absolute activity detection, acceleration samples are compared to a user set threshold to determine whether motion is present. For example, if a threshold of 0.5 g is set, and the acceleration on the z-axis is 1 g for longer than the user defined activity time, the activity status asserts.

In many applications, it is advantageous for activity detection not to be based on an absolute threshold but to be based on a deviation from a reference point or orientation, which is particularly useful because it removes the effect on activity detection of the static 1 g imposed by gravity. When an accelerometer is stationary, its output can reach 1 g , even when it is not moving. In absolute activity, when the threshold is set to less than 1 g , activity is immediately detected in this case.

In the referenced configuration, activity is detected when acceleration samples are at least a user set amount more than an internally defined reference for the user defined amount of time, as described in the following equation:

ABS Acceleration - Reference &gt; Threshold (1) Consequently, activity is detected only when acceleration has deviated sufficiently from the initial orientation. The reference for activity detection is calculated when activity detection is engaged in the following scenarios:

- When the activity function is turned on and measurement mode is engaged
- If link mode is enabled when inactivity is detected and activity detection begins
- If link mode is not enabled when activity is detected and activity detection repeats

The referenced configuration results in a sensitive activity detection that detects even the most subtle motion events.

When using the referenced configuration, it is important to note that the ADXL380 still uses the absolute thresholds when it first enters measurement mode, which becomes important if an inactivity threshold &lt;1 g is desired. In this case, the device must enter measurement mode with a threshold greater than 1 g . The inactivity threshold can then be lowered to the desired level (while still in measurement mode), which allows the ADXL380 to set the thresholds around the 1 g offset on the z-axis.

## Fewer False Positives

Ideally, the intent of activity detection is to wake up a system only when motion is intentional, ignoring noise or small, unintentional movements. In addition to being sensitive to subtle motion events, the ADXL380 activity detection algorithm is designed to be robust in filtering out undesired triggers.

The ADXL380 activity detection functionality includes a timer to filter out unwanted motion and ensure that only sustained motion is recognized as activity. The duration of this timer, as well as the acceleration threshold, are user adjustable from one sample (that is, no timer) to up to 20 seconds of motion.

## INACTIVITY DETECTION

An inactivity event is detected when acceleration remains less than a specified threshold for a specified time on all the axes. All three axes (if enabled) must be less than the inactivity thresholds for an inactivity event to occur. Inactivity detection is also configurable as referenced or absolute.

When using absolute inactivity detection, acceleration samples are compared to a user set threshold for the user set time to determine the absence of motion. Inactivity is detected when enough consecutive samples are all less than the threshold. The absolute configuration of inactivity must be used for implementing free fall detection.

When using referenced inactivity detection, inactivity is detected when acceleration samples are within a user specified amount of an internally defined reference for a user defined amount of time, as described in the following equation: ABS Acceleration - Reference  &lt; Threshold (2) The reference for inactivity detection is calculated when:

- The inactivity function is turned on, and the ADXL380 enters measurement mode.
- An inactivity event is detected.

Each time an inactivity event is detected, the reference is updated, which becomes important when using an inactivity timer. The reference is not updated until the timer expires. In dynamic environments, the reference not being updated until the timer expires can

## POWER SAVINGS FEATURES

lead to the ADXL380 becoming stuck in a state where it is looking for inactivity, but the acceleration is outside the threshold limits.

## LINKING ACTIVITY AND INACTIVITY DETECTION

The activity and inactivity detection functions can be used concurrently and processed manually by a host processor, or these functions can be configured to interact in several other ways, which is explained in further detail in the following sections.

## Default Mode

The user must enable the activity and inactivity functions because these functions are not automatically enabled by default. After the user enables the activity and inactivity functions, the ADXL380 exhibits the following behavior when it enters default mode: both activity and inactivity detection remain enabled, and all interrupts must be serviced by a host processor; that is, a processor must read each interrupt before it is cleared and can be used again.

Default mode operation is illustrated in the flowchart in Figure 64.

Figure 64. Flowchart Illustrating Activity and Inactivity Operation in Default Mode

<!-- image -->

## Linked Mode

In linked mode, activity and inactivity detection are linked to each other in a way so that only one of the functions is enabled at any given time. As soon as activity is detected, the ADXL380 is assumed to be moving and stops looking for activity. Inactivity is expected as the next event. Therefore, only inactivity detection operates.

Similarly, when inactivity is detected, the ADXL380 is assumed to be stationary. Therefore, activity is expected as the next event, and only activity detection operates.

In linked mode, an activity interrupt is enabled first after power-up. Each interrupt must be serviced by a host processor before the next interrupt is enabled. Linked mode operation is shown in the flowchart in Figure 65.

Figure 65. Activity and Inactivity Operation in Linked Mode

<!-- image -->

In standby mode, linked mode must always be enabled. Switching from default mode to linked mode while in another operating mode (for example, HP, ULP, and so on) can cause the state machine to enter a fuzzy state where it is searching for both activity and inactivity simultaneously.

## Loop Mode

In loop mode, motion detection operates as described in the Linked Mode section; however, interrupts must not be serviced by a host processor. This configuration simplifies the implementation of commonly used motion detection and enhances power savings by reducing the amount of power used in bus communications.

Similar to linked mode, activity interrupt is enabled first after powerup in loop mode, which means the ADXL380 is currently waiting for an activity event. For immediate inactivity measurement, set a low activity threshold (for example, &lt;1 m g ). Then, adjust the threshold to the desired level for the application without going back to standby mode, which prevents the ADXL380 from getting stuck searching for activity upon power-up.

Loop mode operation is shown in the flowchart in Figure 66.

Figure 66. Activity and Inactivity in Loop Mode

<!-- image -->

## FIFO

The ADXL380 includes a 320-word FIFO buffer. The FIFO provides benefits primarily in two ways: system-level power savings and data recording and event context.

## SYSTEM-LEVEL POWER SAVINGS

Appropriate use of the FIFO enables system-level power savings by enabling the host processor to sleep for extended periods of time while the accelerometer collects data. Alternatively, using the FIFO to collect data can unburden the host while it tends to other tasks.

## DATA RECORDING AND EVENT CONTEXT

The FIFO can be used in a triggered mode to record all data leading up to an activity detection event, thereby providing context for the event. In the case of a system that identifies impact events, for example, the accelerometer can keep the entire system off while it stores acceleration data in its FIFO and looks for an activity event. When the impact event occurs, data that was collected prior to the event is frozen in the FIFO. The accelerometer can then wake the rest of the system and transfer this data to the host processor, thereby providing context for the impact event.

Generally, the more context available, the more intelligent decisions a system can achieve, making a deep FIFO especially useful. While operating in ULP mode (50 Hz output data rate), the ADXL380 FIFO can store up to more than 2.1 seconds of data, providing a clear picture of events prior to an activity trigger.

All FIFO modes of operation, as well as the structure of the FIFO and instructions for retrieving data from it, are described in further detail in the FIFO Modes section. Note that when retrieving data from the FIFO, each full sample, that is one set of all enabled axes, must be read in a burst (or multibyte) read operation to avoid data loss or misalignment. Optionally, a burst read can include multiple full samples, as outlined in the next paragraph.

The FIFO size changes to accommodate the number of enabled channels. If only three channels are enabled, the FIFO size is 318 instead of 320 (see Table 17), which ensures that the data stored in the FIFO is a whole data set (for example, the x-axis, y-axis, and z-axis and the temperature data). The address auto-increment function disables when the FIFO\_DATA address (Register 0x1D) is used, so that data can be read continuously from the FIFO as a multibyte transaction. In cases where the starting address of a multibyte transaction is less than the FIFO address, the address auto-increments until reaching the FIFO address, and then stops at the FIFO address.

Table 17. FIFO Location vs. Enabled Channels

| SRAM    | Enabled Channels 1   | Enabled Channels 1   | Enabled Channels 1   | Enabled Channels 1   | Enabled Channels 1   | Enabled Channels 1   |
|---------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Address | X                    | X/Y                  | X/T                  | X/Y/Z                | X/Y/T                | X/Y/Z/T              |
| 0       | X                    | X                    | X                    | X                    | X                    | X                    |
| 1       | X                    | Y                    | T                    | Y                    | Y                    | Y                    |
| 2       | X                    | X                    | X                    | Z                    | T                    | Z                    |
| 3       | X                    | Y                    | T                    | X                    | X                    | T                    |
| 4       | X                    | X                    | X                    | Y                    | Y                    | X                    |

Table 17. FIFO Location vs. Enabled Channels (Continued)

| SRAM Address   | Enabled Channels 1   | Enabled Channels 1   | Enabled Channels 1   | Enabled Channels 1   | Enabled Channels 1   | Enabled Channels 1   |
|----------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| SRAM Address   | X                    | X/Y                  | X/T                  | X/Y/Z                | X/Y/T                | X/Y/Z/T              |
| …              | …                    | …                    | …                    | …                    | …                    | …                    |
| 315            | X                    | Y                    | T                    | X                    | X                    | T                    |
| 316            | X                    | X                    | X                    | Y                    | Y                    | X                    |
| 317            | X                    | Y                    | T                    | Z                    | T                    | Y                    |
| 318            | X                    | X                    | X                    | Unused               | Unused               | Z                    |
| 319            | X                    | Y                    | T                    | Unused               | Unused               | T                    |

1 X is the X-axis, Y is the Y-axis, Z is the Z-Axis, and T is temperature.

The FIFO also has a channel ID function that can be enabled in Register 0x30 (FIFO\_CFG0), Bit 6 (FIFO\_CH\_ID). This channel ID precedes each data sample with a 2-bit identification describing what channel the next data sample is. The channel ID for each axis is shown in Table 18. This channel ID does not take up a FIFO SRAM location and can be read by reading Register 0x1D (FIFO\_DATA). A multibyte read of Register 0x1D gives the channel ID followed by the data sample for all enabled channels (see Table 19).

Table 18. FIFO Channel ID Description

| Channel             | Abbreviation   | Channel ID   |
|---------------------|----------------|--------------|
| X-Axis Acceleration | X              | 0b00         |
| Y-Axis Acceleration | Y              | 0b01         |
| Z-Axis Acceleration | Z              | 0b10         |
| Temperature         | T              | 0b11         |

Table 19. FIFO Location vs. Enabled Channels with Channel ID Enabled

|                | Enabled Channels with Channel ID Enabled   | Enabled Channels with Channel ID Enabled   |
|----------------|--------------------------------------------|--------------------------------------------|
| SRAM Address   | X/Y/Z                                      | X/Y/Z/T                                    |
| Not Applicable | X ID                                       | X ID                                       |
| 0              | X                                          | X                                          |
| Not Applicable | Y ID                                       | Y ID                                       |
| 1              | Y                                          | Y                                          |
| Not Applicable | Z ID                                       | Z ID                                       |
| 2              | Z                                          | Z                                          |
| Not Applicable | X ID                                       | T ID                                       |
| 3              | X                                          | T                                          |
| …              | …                                          | …                                          |
| Not Applicable | X ID                                       | T ID                                       |
| 315            | X                                          | T                                          |
| Not Applicable | Y ID                                       | X ID                                       |
| 316            | Y                                          | X                                          |
| Not Applicable | Z ID                                       | Y ID                                       |
| 317            | Z                                          | Y                                          |
| Not Applicable | Not applicable                             | Z ID                                       |
| 318            | Unused                                     | Z                                          |
| Not Applicable | Not applicable                             | T ID                                       |
| 319            | Unused                                     | T                                          |

## FIFO

## FIFO CONFIGURATION

The FIFO can be configured by writing to the FIFO configuration registers, FIFO\_CFG0 and FIFO\_CRG1 (Register 0x30 and Register 0x31). The FIFO mode, number of FIFO entries, and channel ID enable can all be configured to optimize performance in various applications.

## FIFO MODES

The ADXL380 has the following FIFO modes:

- FIFO disabled
- Normal (also referred to as oldest saved or First N)
- Stream (also referred to as Last N)
- Trigger

When the FIFO is disabled (Register 0x30, Bits[5:4] (FIFO\_MODE) = 0b00), no data samples are stored, and a FIFO read returns 0.

When in normal mode (Register 0x30, Bits[5:4] (FIFO\_MODE) = 0b01), the FIFO accumulates data until it is full and then stops, which is indicated by FIFO\_FULL (Register 0x11, Bit 1) = 1. When FIFO\_FULL = 1, the FIFO must be read while the device is in standby mode (OP\_MODE = 0).

When in stream mode (Register 0x30, Bits[5:4] (FIFO\_MODE) = 0b10), new data is continuously written to the FIFO whether it is full or not. When the FIFO is full, the oldest data set (for example, the X, Y, Z, and T data sample) is discarded to make room for the new data set. In this way, the most recent data is always preserved in the FIFO buffer. Stream mode is useful for unburdening a host processor. The processor can tend to other tasks while data is being collected in the FIFO. When the FIFO fills to a certain number of samples (specified by FIFO\_SAMPLES in Register 0x30, Bit 0 and Register 0x31, Bits[7:0]), it triggers a FIFO watermark interrupt, which must be enabled by the user. The host processor must respond to this interrupt and read the contents of the entire FIFO as soon as possible, to prevent any potential data loss. Then, it can return to its other tasks as the FIFO fills again. Stream mode is only supported in ULP and HS operating modes, and requires a minimum SPI clock frequency of 1 MHz and 4 MHz, respectively.

When in trigger mode (Register 0x30, Bits[5:4] (FIFO\_MODE) = 0b11), the FIFO saves samples before and after a trigger event. This trigger event can be either an activity event or an external interrupt. In this mode, new data samples are collected continuously whether the FIFO is full or not (similar to stream mode). Once a trigger event occurs (either an activity event or an external interrupt), the FIFO continues to collect a set number of data samples. The number of data samples it collects after the trigger event is set by the value in the FIFO\_SAMPLES bits (Register 0x30, Bit 0 and Register 0x31, Bits[7:0]).

To enable an external interrupt triggered FIFO mode, set the FIFO\_EXT\_TRIG bit (Register 0x30, Bit 3) to 1. Once this bit is set to 1, an external interrupt sent to the FSYNC pin triggers a

FIFO capture. The user must read all data from the FIFO after each capture, ensuring it is fully emptied before another trigger event can occur.

## FIFO INTERRUPTS

The FIFO has several interrupts that can be mapped to the INT0 and INT1 pins. Interrupt mapping is controlled by using Register 0x2B (INT0\_MAP0) through Register 0x2E (INT1\_MAP1).

## FIFO WATERMARK

The FIFO\_WATERMARK bit (Register 0x11, Bit 3) is set when the number of samples stored in the FIFO is equal to or exceeds the number of samples specified by the FIFO\_SAMPLES bits (Register 0x30, Bit 0 and Register 0x31, Bits[7:0]). In order for an interrupt to be triggered, the ADXL380 must be in either FIFO normal mode or FIFO stream mode, and the FIFO\_WATERMARK bit must be mapped to INT0 or INT1.

To clear the FIFO\_WATERMARK bit, the user must:

- Read enough samples from the FIFO buffer so that the number of remaining samples is lower than the threshold set by the user in the FIFO\_SAMPLES bits
- Read the FIFO\_WATERMARK bit in the STATUS0 register (Register 0x11, Bit 3)

## FIFO READY

The FIFO\_READY bit (Register 0x11, Bit 4) asserts if there is at least one valid sample available in the FIFO output buffer. This bit is cleared when no valid data is available in the FIFO.

## FIFO OVERRUN

The FIFO\_OVERRUN bit (Register 0x11, Bit 2) is set when the FIFO has overrun or overflow, indicating that new data has replaced unread data, which may indicate a full FIFO that has not yet been emptied or a clocking error caused by a slow SPI transaction. The FIFO\_OVERRUN bit is only available for FIFO normal mode and trigger mode.

The FIFO\_OVERRUN bit is cleared automatically when the contents of the FIFO are read. Likewise, when the FIFO is disabled, the FIFO\_OVERRUN bit is cleared.

## FIFO FULL

The FIFO\_FULL bit (Register 0x11, Bit 1) is set when the FIFO collects 320 samples (or 318 samples if exactly three channels are enabled; see Table 17).

## COMMUNICATIONS

## SPI INSTRUCTIONS

The digital interface of the ADXL380 is implemented with systemlevel power savings in mind. The following features enhance power savings:

- Burst reads and writes reduce the number of SPI communication cycles required to configure the ADXL380 and retrieve data.
- Concurrent operation of activity and inactivity detection enables set and forget operation. Loop mode further reduces communications power by enabling the clearing of interrupts without processor intervention.
- The FIFO is implemented such that consecutive samples can be read continuously via a multibyte read of unlimited length; therefore, a one read FIFO instruction can clear the entire contents of the FIFO. In many other accelerometers, each read instruction retrieves a single sample only.

For this device, the clock polarity and clock phase are both zero (CPOL = CPHA = 0), which means that data bits must be read on the rising clock edge, and data bits are transitioned on the falling clock edge. The chip select pin, CS, activates the SPI. As long as CS is high, the ADXL380 ignores any signals present on the SCLK or SDI pins, and the output SDO is in a high impedance state. When CS is in a low logic state, data can be transferred to and from the microcontroller. During transitions of CS from high to low or vice versa, SCLK is set to low by the microcontroller, ensuring that proper communication is initiated with the ADXL380.

The chip select pin (CS) is Pin 5 (see Table 9). Alternatively, Pin 12 can be used instead. In this case, connect Pin 5 to VDDIO and use Pin 12 as the standard CS pin. Note that, it takes three dummy SPI writes for the change to take effect.

## I 2 C INTERFACE

The ADXL380 conforms to the UM10204 I2C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor.

Figure 68. I 2 C Device Addressing (Read from Data Registers)

<!-- image -->

With the ASEL0 pin low and ASEL1 pin high, the 7-bit I 2 C address is 0x54 as shown in Figure 67. The I 2 C address is followed by the R/W bit as shown in Figure 68. This translates to 0xA8 for a write and 0xA9 for a read. Alternate I 2 C addresses are shown in Table 20.

Figure 67. I 2 C Example Connection Diagram (Address 0x54)

<!-- image -->

Table 20. I 2 C Address Selection

| ASEL0   | ASEL1   | I 2 C Address   |
|---------|---------|-----------------|
| Low     | Low     | 0x1D            |
| High    | Low     | 0x53            |
| Low     | High    | 0x54            |
| High    | High    | 0x55            |

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed V DDIO by more than 0.3 V. External pull-up resistors, R P , are necessary for proper I 2 C operation (see Figure 67). Refer to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, when selecting pull-up resistor values to ensure proper operation.

## COMMUNICATIONS

## I 2 S/TDM INTERFACE

The ADXL380 constantly streams data out of the I 2 S port. This protocol is suitable for obtaining high speed, synchronous accelerometer data. The ADXL380 can act as either a controller or a subordinate on the I 2 S bus. When operating as a controller, the BCLK and FSYNC pins are configured as output pins (see Figure 69). When operating as a subordinate, the BCLK and FSYNC pins are configured as input pins (see Figure 70).

Figure 69. I 2 S/TDM Wiring Diagram with ADXL380 in Controller Mode

<!-- image -->

Table 21. ADXL380 Supported Controller Modes (BCLK and FSYNC Are Outputs)

| Output Format   | Power Mode   |   BCLK Frequency (kHz) |   FSYNC Frequency (kHz) |   Word Width (Bit) |   ODR (kHz) | Data Output Pins   |
|-----------------|--------------|------------------------|-------------------------|--------------------|-------------|--------------------|
| I 2 S or TDM2   | HP           |                    512 |                      16 |                 16 |           8 | S OUT0 and S OUT1  |
| I 2 S or TDM2   | HP           |                    512 |                       8 |                 32 |           8 | S OUT0 and S OUT1  |
| I 2 S or TDM2   | HP           |                    256 |                       8 |                 16 |           8 | S OUT0 and S OUT1  |
| I 2 S or TDM2   | RBW          |                    256 |                       8 |                 16 |           4 | S OUT0 and S OUT1  |
| I 2 S or TDM2   | RBW          |                    256 |                       4 |                 32 |           4 | S OUT0 and S OUT1  |
| I 2 S or TDM2   | RBW          |                    128 |                       4 |                 16 |           4 | S OUT0 and S OUT1  |
| I 2 S or TDM2   | LP           |                    128 |                       4 |                 16 |           2 | S OUT0 and S OUT1  |
| I 2 S or TDM2   | LP           |                    128 |                       2 |                 32 |           2 | S OUT0 and S OUT1  |
| I 2 S or TDM2   | LP           |                     64 |                       2 |                 16 |           2 | S OUT0 and S OUT1  |
| TDM4            | HP           |                    512 |                       8 |                 16 |           8 | S OUT0 or S OUT1   |
| TDM4            | RBW          |                    256 |                       4 |                 16 |           4 | S OUT0 or S OUT1   |
| TDM4            | LP           |                    128 |                       2 |                 16 |           2 | S OUT0 or S OUT1   |

Figure 70. I 2 S/TDM Wiring Diagram with ADXL380 in Subordinate Mode

<!-- image -->

## Controller Mode (Internal Clock)

When in controller mode, the ADXL380 operates at a nominal clock speed of 512 kHz with a nominal frame frequency of 8 kHz. The BCLK and FYSNC pins are provided as outputs for other devices on the I 2 S bus. In this mode, the device supports a word width of 16 bits, 24 bits, or 32 bits. TDM2 and TDM4 are also supported. See Table 21 for a list of supported controller modes.

## COMMUNICATIONS

## Subordinate Mode (External Clocks)

When in subordinate mode, BCLK and FSYNC must be provided as inputs on their respective pins. The BCLK frequency must be an integer multiple of 512 kHz such that it can be divided down to 512 kHz by setting the EXT\_CLK\_RATE bits in the CLK\_CTRL register (Register 0x25, Bits[7:4]).

In this mode, the device supports a word width of 16 bits, 24 bits, or 32 bits. TDM2, TDM4, and TDM8 are also supported. See Table 22 for a list of example subordinate modes. Note that there are many more configurations that are also supported by the ADXL380. Table 22 is a list of a few examples for reference. If another combination of BCLK and FSYNC is required, the following rules must be followed:

- If BCLK is used as the system clock, it must be divisible to the required 512 kHz for the system clock.
- The supported FSYNC rates of 8 kHz, 16 kHz, 24 kHz, or 48 kHz (in HP mode) must be used. When using RBW or LP mode, note that, FSYNC scales.

Table 22. ADXL380 Example Subordinate Modes with No Empty Data Slots 1  (BCLK and FSYNC Are Inputs)

| Output Format 2   | Power Mode   |   BCLK Frequency 3 (kHz) |   FSYNC Frequency 4 (kHz) |   Word Width (Bit) |   ODR 5 (kHz) | Data Output Pins   |
|-------------------|--------------|--------------------------|---------------------------|--------------------|---------------|--------------------|
| I 2 S or TDM2     | HP           |                     3072 |                        48 |                 32 |             8 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | HP           |                     1536 |                        24 |                 32 |             8 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | RBW          |                     1536 |                        24 |                 32 |             4 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | HP           |                     1024 |                        16 |                 32 |             8 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | RBW          |                     1024 |                        16 |                 32 |             4 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | HP           |                      512 |                        16 |                 16 |             8 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | RBW          |                      512 |                        16 |                 16 |             4 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | HP           |                      512 |                         8 |                 32 |             8 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | RBW          |                      512 |                         8 |                 32 |             4 | S OUT0 and S OUT1  |
| I 2 S or TDM2     | LP           |                      512 |                         8 |                 32 |             2 | S OUT0 and S OUT1  |
| TDM4              | HP           |                     3072 |                        48 |                 16 |             8 | S OUT0 or S OUT1   |
| TDM4              | HP           |                     3072 |                        24 |                 32 |             8 | S OUT0 or S OUT1   |
| TDM4              | RBW          |                     3072 |                        24 |                 32 |             4 | S OUT0 or S OUT1   |
| TDM4              | HP           |                     1536 |                        24 |                 16 |             8 | S OUT0 or S OUT1   |
| TDM4              | HP           |                     1024 |                         8 |                 32 |             8 | S OUT0 or S OUT1   |
| TDM4              | RBW          |                     1024 |                         8 |                 32 |             4 | S OUT0 or S OUT1   |
| TDM4              | HP           |                      512 |                         8 |                 16 |             8 | S OUT0 or S OUT1   |
| TDM4              | RBW          |                      512 |                         8 |                 16 |             4 | S OUT0 or S OUT1   |
| TDM4              | LP           |                      512 |                         8 |                 16 |             2 | S OUT0 or S OUT1   |
| TDM8              | HP           |                     4096 |                        16 |                 32 |             8 | S OUT0 or S OUT1   |
| TDM8              | HP           |                     2048 |                         8 |                 32 |             8 | S OUT0 or S OUT1   |
| TDM8              | RBW          |                     2048 |                         8 |                 32 |             4 | S OUT0 or S OUT1   |
| TDM8              | HP           |                     1024 |                         8 |                 16 |             8 | S OUT0 or S OUT1   |
| TDM8              | RBW          |                     1024 |                         8 |                 16 |             4 | S OUT0 or S OUT1   |

## COMMUNICATIONS

## Signals

The ADXL380 uses a 3-wire or 4-wire I 2 S/TDM interface, comprising one continuous serial clock, one synchronization signal, and two serial data channels. There are numerous naming conventions for these channels. The ADXL380 uses the same terminology and symbols as the A 2 B family of transceivers from Analog Devices, Inc. See Table 23 for a comparison of the names used in the I 2 S specification against the names used in the ADXL380.

## Table 23. I 2 S Signal Names

| I 2 S Specification     | I 2 S Specification   | ADXL380         | ADXL380           |
|-------------------------|-----------------------|-----------------|-------------------|
| Full Name               | Symbol                | Pin Description | Mnemonic          |
| Continuous Serial Clock | SCLK                  | Bit clock       | BCLK              |
| Word Select             | WS                    | Frame sync      | FSYNC             |
| Serial Data             | SD                    | Data transmit   | S OUT0 and S OUT1 |

## BCLK

The bit clock (BCLK) line controls the timing of transactions between the controller (A 2 B transceiver or another controller) and subordinate (ADXL380). This clock can be supplied externally to the BCLK pin (Pin 14) or driven internally from the device. The incoming clock frequency must be a number such that it can be divided down to the expected internal clock for the ADXL380. Set the external clock divide factor (EXT\_CLK\_RATE in Register 0x25, Bits[7:4]) such that the incoming clock frequency can be divided to 512 kHz.

## Sync (FSYNC) Signal

In I 2 S, the FSYNC signal indicates the start of a new acceleration sample. The signal alternates between high and low states (with a 50% duty cycle) to indicate whether the sample is for the left or right channel. In TDM mode, the FSYNC signal has a single pulse that is one BCLK cycle wide (set SPT\_FSYNC\_MODE in the FIFO\_CFG0 register (Register 0x32, Bit 3) = 1). This pulse is then followed by up to eight data slots depending on the number of BCLK cycles sent and word width chosen.

## Data Transmit (SOUTx) Signal

In I 2 S mode, data is sent over both of the S OUT0 and S OUT1 pins. If enabled, S OUT0 contains the x-axis and y-axis data. If enabled, SOUT1 contains the z-axis and temperature data.

In TDM2 mode, data is sent over both of the S OUT0 and S OUT1 pins. In other TDM modes (for example, TDM4 or TDM8), data is sent over only one data pin (either the S OUT0 or S OUT1 pin, which is configured in the SPT\_SOUT\_SEL bit in the SPT\_CFG2 register (Register 0x34, Bit 7)). In this case, four data slots are required if the x-axis, y-axis, z-axis, and temperature data are enabled (see Register 0x27, DIG\_EN).

## PDM INTERFACE

The ADXL380 PDM port uses a 3-wire interface (see Figure 71): one clock line and two data lines. The two data lines are high performance, 1-bit PDM outputs (S OUT0 and FSYNC). The one-bit data is asserted on the data line on either the rising or falling edge of the system clock to allow the user to stream data from all three acceleration channels (x-axis, y-axis, and z-axis). As shown in Figure 72 (the example PDM data slot configuration), the S OUT0 pin contains the x-axis and y-axis data, and the FSYNC pin contains the z-axis data. Note that, in this example, there is no data on the falling edge for the FSYNC pin, and the output is set to high impedance.

Figure 71. PDM Wiring Diagram with ADXL380

<!-- image -->

Figure 72. Example PDM Port Data Format

<!-- image -->

The pulse density indicates acceleration magnitude and sign. For example, if the ADXL380 is configured in ±8 g mode, a 0% PDM density indicates a negative full-scale range (-8 g ). A 50% PDM density indicates 0 g and a 100% PDM density indicates a positive full scale range (+8 g ). The PDM\_POL bit (Register 0x37, Bit 7) inverts the polarity of the data so that 0% PDM density is a positive full-scale range.

In the PDM mode, ±8 g and ±16 g are the only valid ranges.

As shown in the functional block diagram (Figure 1), PDM bypasses all digital postprocessing, ensuring lowest possible latency. Consequently, it also skips certain digital gain stages that are applied in other modes (I 2 S, TDM, SPI, and I 2 C). These factors are the following:

► A fixed gain factor of 9/8 = 1.125.

## COMMUNICATIONS

- A gain scaler which is different depending on the axis.
- For x-axis and y-axis, it can be obtained from the GAIN\_SCALER\_XY bits in the MISC0 register (Register 0x20, Bits[4:0]) divided by 4. Its nominal value is 15 which leads to a nominal gain factor of 15/4 = 3.75.
- For z-axis, it can be obtained from the GAIN\_SCALER\_Z bits in the MISC1 register (Register 0x21, Bits[4:0]) divided by 4. Its nominal value is 9 which leads to a nominal gain factor of 9/4 = 2.25.
- A digital fine sensitivity trim, which also depends on the axis. It can be read from the XSENS\_DSM bits (Register 0x1C,bits [3:0]), the YSENS\_DSM bits (Register 0x24, Bits[7:4]), and the XSENS\_DSM bits (Register 0x24, Bits[3:0]). To use these bits, divide the value by 128 and then add 1.

All this can be mathematically expressed by the following formulas: Gain x = 9 8 × GAIN\_SCALER\_XY 4:0 4 × XSENS\_DSM 3:0 128 +1 (3) Gain y = 9 8 × GAIN\_SCALER\_XY 4:0 4 × YSENS\_DSM 3:0 128 +1 (4) Gain z = 9 8 × GAIN\_SCALER\_Z 4:0 4 × ZSENS\_DSM 3:0 128 +1 (5)

As a result, the XY data is approximately 4.22× lower (3.75 × 1.125) for PDM compared to other modes and the Z data is about 2.53× lower (2.25 × 1.125). This means that for the same acceleration input, the Z measurements appear 1.66× larger than the X and Y measurements. The user must apply these digital factors to match sensitivity values listed in Table 1.

The PDM data slots are configurable in Register 0x36 (PDM\_CFG). Slot B corresponds to the rising edge on BCLK, and Slot A corresponds to the falling edge on BCLK. The PDM\_SOUT0\_SLOTB and PDM\_SOUT0\_SLOTA bits configure which channels are enabled on the S OUT0 pin. The PDM\_FSYNC\_SLOTA and PDM\_FSYNC\_SLOTB bits configure which channels are enabled on the FSYNC pin. For example, to match the configuration shown in Figure 72, set Register 0x36 to a value of 0x31, which maps the x-axis to Slot B and the y-axis to Slot A on the S OUT0 pin, and the z-axis to Slot B on the FSYNC pin. See Figure 10 for the PDM timing requirements.

For PDM, the clock provided on the BLCK pin must meet the requirements in Table 5 for f PDM\_CLK , and the external clock divider must be set to a value that sets the ADXL380 clock to a valid value (either 512 kHz or 768 kHz).

If the BCLK is 3.072 MHz, set the EXT\_CLK\_RATE bits (Register 0x25, Bits[7:4]) to 0'b0011, which divides the 3.072 MHz clock by 4 to get to the 768 kHz system clock that the ADXL380 can operate at.

## ADDITIONAL FEATURES

## FREE FALL DETECTION

Many digital output accelerometers include a built-in free fall detection feature. In the ADXL380, this function can be implemented using an inactivity interrupt. Refer to the Example: Implementing Free Fall Detection section for more details, including suggested threshold and timing values.

## TAP DETECTION

The tap interrupt function is capable of detecting either single, double, or triple taps.

Note that when using a tap threshold less than 1 g , tilting the ADXL380 may also result in a tap event. The following parameters are shown in Figure 73 for a valid single, double, and triple tap event, respectively:

- The TAP\_THRESH register (Register 0x43) sets the acceleration threshold for a tap detection event.
- The maximum tap duration time is defined by the TAP\_DUR register (Register 0x44). The tap duration time represents the maximum time that an event must be more than the tap threshold set in TAP\_THRESH register (Register 0x43) to qualify as a tap event.
- The tap wait time is defined as the time where an event must be less than the threshold to be registered as a tap event. The tap wait time is 2.5 ms.
- The tap latency time is defined by the TAP\_LATENT register (Register 0x45). It is the waiting period from the end of the first tap until the start of the time window where a second tap can be detected.
- The TAP\_WINDOW register (Register 0x46) is the tap duration time where an additional tap can be detected (second or third tap). Although a second tap must begin after the latency time has expired, it does not have to finish before the end of the time defined by the TAP\_WINDOW register. If only a singular tap is required, set TAP\_WINDOW to 0.

Additionally, triple tap detection can be enabled by setting the TRIPLE\_TAP\_EN bit (Register 0x47, TAP\_CFG, Bit 2) to b'1. Tap detection can only be implemented on one axis. The tap detection axis is set by the TAP\_AXIS bits in the TAP\_CFG register (Register 0x47, Bits[1:0]).

The tap detection status is read with the SINGLE\_TAP, DOU-BLE\_TAP, and TRIPLE\_TAP bits located in the STATUS1 register (Register 0x12, Bit 0, Bit 1 and Bit 2, respectively). The tap detection behaves as follow:

- If only the single tap function is in use, the single tap interrupt is triggered when the acceleration goes to less than the threshold, if the value of time stored in the TAP\_DUR register (Register 0x44) has not been exceeded.
- If both single tap and double tap functions are in use, the single tap interrupt is triggered when the double tap event is either validated or invalidated.
- If single tap, double tap, and triple tap functions are in use, the single tap and double tap interrupts are triggered when the triple tap event is either validated or invalidated.

Figure 73. Tap Interrupt Function with Valid Single Tap, Double Tap, and Triple Tap

<!-- image -->

## ADDITIONAL FEATURES

## EXTERNAL CLOCK

The ADXL380 has a nominal clock frequency of 512 kHz that, by default, serves as the time base for internal operations.

An external clock can be used to improve clock frequency accuracy. To achieve tighter tolerances, a more accurate clock can be provided externally. Additionally, external clock is commonly used with features such as external sync.

The external clock can be provided on either MCLK or BCLK. This clock can range from 512 kHz to 12.288 MHz for the ADXL380. The clock must be an integer multiple of the nominal clock such that it can be divided down to fit the intended nominal clock frequency by setting the internal divider (EXT\_CLK\_RATE bits, Register 0x25, Bits[7:4]). The external clock must be divided down to the expected system clock (512 kHz if using HP, RBW, or LP modes or 256 kHz if using VLP, ULP, or HS modes). See Table 16 for more information.

Note that the external clock must only be configured when in standby mode, and this clock must be set before setting a mode of operation.

Refer to the Using an External Clock section for more details, including register settings and recommended external clock values.

## EXTERNAL TRIGGER

For applications that require a precisely timed acceleration measurement, the ADXL380 features an option to synchronize acceleration sampling to an external trigger. This feature is only supported for the low power signal chain (VLP, ULP, and HS operational modes). The external trigger can be used with either an internal or external clock.

When an external trigger pulse is sent, the ADXL380 outputs one sample data. The user can use this feature to sample data intermittently, which can enable system-level power savings.

The TRIG\_CFG register (Register 0x49) is used to set the external trigger features. The external trigger can be provided on either FSYNC or INT1 by using the TRIG\_SRC bit (Bit 1, Register 0x49). The external trigger feature is enabled by setting the TRIG\_MODE bit (Register 0x49, Bit 0) to 1.

When external triggering is enabled, it is up to the user to ensure that the sampling frequency meets system requirements.

Because of the internal timing requirements, the trigger signal applied must meet the following criteria:

- The trigger signal must be active high.
- When using the internal oscillator clock, the pulse width of the trigger signal must be at least 5.7 μs.
- Two consecutive trigger pulses must be at least 5.7 μs apart.
- The maximum sampling frequency that is supported must be equal to the maximum ODR.
- There is no minimum sampling frequency. However, to avoid aliasing, the user must not sample lower than the Nyquist frequency.

## EXTERNAL SYNCHRONIZATION

For applications that require a precisely timed acceleration measurement, the ADXL380 features an option to synchronize acceleration sampling to an external synchronization signal. This feature is only supported for the high-performance signal chain (HP, RBW, or LP operational modes). External synchronization can be used with either an internal or external clock.

When an external synchronization frequency is set, the ADXL380 shifts the phase of the data ready (DRDY) signal to match the external synchronization signal. The user can use this feature for systems requiring multiple sensors to have precisely synchronized data sampling. Furthermore, the user can use the interpolation feature to oversample or undersample with improved accuracy.

The SYNC\_CFG register (Register 0x35) is used to set the external synchronization features. The external synchronization signal can be provided on either FSYNC or INT1 by using the SYNC\_SRC bit in Register 0x35, Bit 6. The external synchronization feature is set by setting the SYNC\_MODE bit (Register 0x35, Bits[5:4]) to the desired value. External synchronization may require an external clock and DRDY. Refer to the External Clock section and the Interrupts section to map the DRDY signal to an interrupt pin.

The three possible synchronization options for the ADXL380 are no external synchronization (SYNC\_MODE = b'00), external synchronization (SYNC\_MODE = b'01), and external synchronization with an interpolation filter (SYNC\_MODE = b'10).

Because of internal timing requirements of the ADXL380, the external synchronization signal applied must meet the following criteria:

- The external synchronization signal must be active high.
- The pulse width of the external synchronization signal must be at least 5.7 μs.
- Two consecutive pulses must be at least 5.7 μs apart.

## ADDITIONAL FEATURES

## No External Synchronization or Interpolation (SYNC\_MODE = b'00)

When SYNC\_MODE bits in the SYNC\_CFG register (Register 0x35, Bits[5:4]) are set to 0, the ADXL380 is in its default external synchronization mode. The ADXL380 has no external synchronization and does not require an external signal to synchronize to. The ADXL380 data sampling is synchronized to the system clock. This mode supports an internal or external clock by using the CLK\_SRC bits in the CLK\_CTRL register (Register 0x25, Bits[1:0]).

This mode is commonly used when an external processor retrieves the data from the ADXL380 asynchronously. The device samples the data and outputs a DRDY signal each time a new sample becomes available (see Figure 74).

The DRDY bit is located in the STATUS3 register (Register 0x14, Bit 0). It can be routed externally through the following:

- The INT0 pin by setting the DATA\_RDY\_INT0 bit in the INT0\_MAP0 register (Register 0x2B, Bit 0) to 1
- The INT1 pin by setting the DATA\_RDY\_INT1 bit in the INT1\_MAP0 register (Register 0x2D, Bit 0) to 1
- The SOUT0 pin by setting the DRDY\_SEL bit in the SAR\_I2C register (Register 0x28, Bit 0) to 1

The user must read data when DRDY is high. Once reading begins, the user must complete reading all enabled channels (full sample) before any new data is updated. This ensures consistency across the full sample and prevents mixing data from different sample.

If a new sample arrives and the user has not started reading the previous one, the old sample is discarded and the most up-to-date full sample is available for reading. As a result, to avoid sample loss, the user must ensure that the communication speed is fast enough. For example at 64 kHz ODR, the reading must be completed in less than 15 μs. If using SPI at 8 MHz, a multibyte read from STATUS3 through TDATA\_L takes approximately 12 µs, which meets the timing requirement: (8 bits (address) + 9 bytes (data) × 8 bits)/8 MHz = 12 μs.

The DRDY interrupt is cleared when either the STATUS3 register (Register 0x14) or any of the data registers (Registers 0x15 to 0x1C) is read.

Figure 74. No External Synchronization (SYNC\_MODE = b'00)

<!-- image -->

## ADDITIONAL FEATURES

## External Synchronization with External Clock (SYNC\_MODE = b'01)

External synchronization requires an external synchronization signal to align the decimation filter output to a specific clock edge, which provides full external synchronization. In this mode, ODR must be an integer multiple of the synchronization signal frequency. The DRDY signal synchronizes with the external synchronization pulse (see Figure 75).

The user must provide an external clock that meets the timing requirements (see Table 119). Refer to the Using an External Clock section for more details on how to set up an external clock, including register settings and recommended external clock values.

The ADXL380 is synchronized to every sync pulse it receives, which means the sync signal can have a lower frequency than the internal ODR.

Figure 75. External Synchronization with External Clock (SYNC\_MODE = b'01)

<!-- image -->

## ADDITIONAL FEATURES

## External Synchronization with Interpolation (SYNC\_MODE = b'10)

Synchronization with the interpolation filter enabled (SYNC\_MODE = b'10, Register 0x35, Bits[5:4]) allows the user to sample asynchronously, oversample, or undersample with improved accuracy. This mode is commonly used when syncing is required, but no external clock can be provided. While not being required, an external clock can be used to improve clock frequency accuracy.

The data interpolation is calculated by computing a linear average between the previous two data samples at the time a sync pulse is active high (see Figure 76). Interpolation increases group delay relative to external sync with external clock mode; however, it guarantees a fixed 1/ODR delay (see Figure 77). The interpolation

## calculation delay of the interpolation filter is equal to 2.15 μs (see Figure 77).

Figure 76. Data Interpolation Scheme

<!-- image -->

Figure 77. External Synchronization with Interpolation (SYNC\_MODE = b'10)

<!-- image -->

## ADDITIONAL FEATURES

## SELF TEST

The ADXL380 incorporates a self test feature that effectively tests its mechanical and electronic systems simultaneously. When the self test function is invoked, an electrostatic force is applied to the mechanical sensor. This electrostatic force moves the mechanical sensing element in the same manner as acceleration, and it is an additive to the acceleration experienced by the ADXL380.

## USER REGISTER PROTECTION

The ADXL380 supports a single event upset (SEU) detection feature for user register protection. When the parity enable register bit (PARITY\_ERR, Register 0x20, Bit 5) is set high, the SEU detection feature is enabled on all controllable and /writable register bits (by iterating through all register addresses to calculate the 1-bit sum of all of the register bit positions). If there is a mismatch between the old (stored and valid) parity bit and the current (calculated and valid) parity bit, an SEU parity error generates.

Either a sticky event bit (PARITY\_ERR\_STICKY, Register 0x11, Bit 0) or a live event bit (PARITY\_ERR, Register 0x20, Bit 5) can be mapped to an interrupt pin if desired.

An internal 100 Hz clock is used to generate a periodic SEU detection event. Each of these events triggers a parity calculation if the PARITY\_EN bit (Register 0x27, Bit 0) is set high. The current and old parity bit are stored for comparison. If there is any mismatch between the valid current parity and the valid old parity, a parity error generates.

If a parity error occurs, perform a software or hardware reset.

## CONCURRENT OPERATING MODES

The SAR paths modes (ULP and VLP) can be combined with any one of the Σ-Δ modes (HP, RBW, and LP) for concurrent data sampling. In concurrent mode, the HP, RBW, and LP data is only available on the audio port (I 2 S/TDM/PDM) and the ULP and VLP data is accessed via the control port (SPI or I 2 C).

Note that the HPF is selectable for either the DSM or SAR signal path, but it is not available for both signal paths in concurrent mode.

It is possible to use external synchronization pulses (SYNC\_MODE (Register 0x35, Bits[5:4]) = 0b01 or 0b10) for the low noise signal path (HP, RBW, and LP modes), and the FIFO\_EXT\_TRIG bit (Register 0x30, Bit 3) pulses for the low power signal path (ULP, VLP, and HS modes) at the same time. Further details regarding this can be found in the External Trigger section.

## INTERRUPTS

Several of the built-in functions of the ADXL380 can trigger interrupts to alert the host processor of certain status conditions. Interrupts can be mapped to either (or both) of the two designated output pins, INT0 and INT1, by setting any of the appropriate bits in Register 0x2B to Register 0x2E. All functions can be used simultaneously. If multiple interrupts are mapped to one pin, the OR combination of the interrupts determines the status of the pin.

If no functions are mapped to an interrupt pin, that pin is automatically configured to a high impedance (high-Z) state. These INTx pins are also placed in a high-Z state when reset.

The INTx pins can be connected to the interrupt input of a host processor where interrupts are responded to with an interrupt routine.

Because multiple functions can be mapped to the same pin, the STATUSx registers (Register 0x11 to Register 0x14) can be used to determine which condition caused the interrupt to trigger.

Clear interrupts by one of the following ways:

- Reading the STATUSx registers clears interrupts (for example, activity, inactivity, undervoltage flag sticky, parity error sticky, or DRDY).
- Reading any of the data registers, Register 0x15 to Register 0x1C, clears the DRDY interrupt.
- Reading enough data from the FIFO buffer so that interrupt conditions are no longer met clears the FIFO ready and FIFO overrun interrupts. To clear the FIFO\_WATERMARK interrupt, the user must also read the FIFO\_WATERMARK bit in the STATUS0 register (Register 0x11, Bit 3).

Both interrupt pins are push and pull low impedance pins and have bus keepers when the pins are not internally driven.

To prevent interrupts from being falsely triggered during configuration, disable interrupts while their settings, such as thresholds, timings, or other values, are configured.

## STATUS FLAGS AND ERROR HANDLING

The ADXL380 supports several error and status flags that give information about register health, NVM status, FIFO status, activity and inactivity, tap detection, and mechanical overrange and undervoltage monitoring (STATUS0 to STATUS3, Registers 0x11 to Register 0x14).

## NVM Status

The EFUSE\_BUSY\_REGERR\_STICKY bit in the STATUS0 register (Register 0x11, Bit 5) indicates that a register write has occurred while the NVM was still busy. This bit stays asserted until the STATUS0 register is read. A software or hardware reset is required to clear this error.

The PARITY\_ERR\_STICKY bit in the STATUS0 register (Register 0x11, Bit 0) indicates that a SEU error has occurred. See the User Register Protection section for more information on handling this error.

The NVM\_IRQ bit in the STATUS1 register (Register 0x12, Bit 7) indicates that an uncorrectable error has been detected from the EFUSE controller checker or the external check enable. The

## ADDITIONAL FEATURES

NVM\_IRQ bit is an accumulation interrupt status of the EFUSE controller error or with the user NVM\_ECC\_DET bit and the user NVM\_CRC\_ERR bit interrupts in the STATUS2 register (Register 0x13, Bit 5 and Bit3, respectively); a user can invoke an EFUSE refresh, an error correcting code (ECC) check, and/or a cyclic redundancy check (CRC) using NVM\_CTL register (Register 0x29). A result of any errors can trigger interrupt alarm in the STATUS0 and STATUS2 registers.

An NVM error can be cleared by reading the STATUSx registers or performing a software or hardware reset.

## Overrange

Two bits are related to overrange protection on the ADXL380: OVER\_RANGE and OVER\_RANGE\_STICKY in the STATUS1 register (Register 0x12, Bit 3 and Bit 4, respectively). The OVER\_RANGE bit indicates that the acceleration input is currently exceeding the overrange threshold. This bit is live and asserts and de-asserts automatically. The OVER\_RANGE\_STICKY bit indicates that an overrange event has occurred at some point since the last time the STATUS1 register was read. Reading the STATUS1 register clears this bit. See the Overrange Protection section for more information about this protection and the overrange thresholds.

The user can configure what happens to the data output during an overrange event by setting the DIG\_OUT\_DURING\_OR bits in the OR\_CFG register (Register 0x48, Bits[1:0]) as follows:

- Full-scale code with correct sign (data is railed in the same direction as the input acceleration)
- Hold previous data value before overrange event (data is frozen at the value just before the overrange event occurred)
- Invalid internal value passed to digital output (in this case, the invalid data fluctuate anywhere between minus and plus full scale but do not represent real acceleration)

In PDM, there is not digital postprocessing (the DIG\_OUT\_DUR-ING\_OR bits have no effect). Output during overrange is invalid data.

## LATENCY

The ADXL380 offer several options for controlling the trade-off between output noise and latency (or group delay) to accommodate a wide range of system requirements.

There are several filters that can be enabled or bypassed to optimize latency. Using a filter with a lower cutoff frequency introduces more delay to the signal chain but improves output noise. Conversely, less aggressive filtering results in more output noise but less delay. The optimal compromise between these two parameters depends on system implementation.

Figure 78 shows three different configurations to optimize latency: default configuration, low latency + IIR1, and low latency mode. Note that Figure 78 shows the latency of the entire signal chain up to the last digital filter. When streaming data using I 2 S or TDM, there is also a serial port delay of up to one frame. For example, a 48 kHz FSYNC results in a serial port delay of up to 20.8 µs.

## LOW LATENCY MODE

The ADXL380 offers an option to lower latency by running the device at 768 kHz instead of 512 kHz. This mode is only supported with the use of an external clock. Refer to the Using an External Clock section for more details, including register settings. Low latency mode allows the ODR to go up to 48 kHz. Ensure that the provided BCLK and FSYNC signals are fast enough to support this data rate (for example, BCLK = 3.072 MHz and FSYNC = 48 kHz). Low latency mode increases power consumption; however, it significantly decreases latency.

To enable this mode on the ADXL380, set the DOUBLE\_SPEED bit in the DIG\_EN register (Register 0x27, Bit 2) to b'1, set the SINC\_RATE bit in the TRIG\_CFG register (Register 0x49, Bit 6) to b'1, and bypass the following filters: EQ, DCF, IIR7, and IIR1 (optional).

Figure 78. ADXL380 Latency vs. Filter Options

<!-- image -->

Table 24. Filter Latency in HP Mode

|              |                   |                   |   SINC (µs), SINC_RATE |   SINC (µs), SINC_RATE |           |           |             |              |          |           |              |
|--------------|-------------------|-------------------|------------------------|------------------------|-----------|-----------|-------------|--------------|----------|-----------|--------------|
| System Clock | MEMS and AFE (µs) | MEMS and AFE (µs) |                      0 |                      1 | EQ (µs) 1 | EQ (µs) 1 | IIR1 (µs) 1 | LPF (µs) 1   | DCF (µs) | IIR7 (µs) | HPF (µs)     |
| 512 kHz      | X/Y               | 25                |                    100 |                     60 | X/Y       | 190       | 160         | See Table 25 | 65       | 270       | See Table 25 |
|              | Z                 | 40                |                    100 |                     60 | Z         | 205       | 160         | See Table 25 | 65       | 270       | See Table 25 |
| 768 kHz      | X/Y               | 25                |                     70 |                     40 | X/Y       | 40        | 55          | See Table 25 | 45       | 180       | See Table 25 |
|              | Z                 | 40                |                     70 |                     40 | Z         | 50        | 55          | See Table 25 | 45       | 180       | See Table 25 |

1 The EQ, IIR1, and LPF filters all share the same filter engine. Only one can be enabled at a time.

Table 25. LPF and HPF Latency in HP Mode

|              | LPF (µs), LPF_MODE   |   LPF (µs), LPF_MODE |   LPF (µs), LPF_MODE |   LPF (µs), LPF_MODE | HPF (µs), HPF_CORNER   |   HPF (µs), HPF_CORNER |   HPF (µs), HPF_CORNER |   HPF (µs), HPF_CORNER |   HPF (µs), HPF_CORNER |   HPF (µs), HPF_CORNER |   HPF (µs), HPF_CORNER |
|--------------|----------------------|----------------------|----------------------|----------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
| System Clock | 0                    |                    1 |                    2 |                    3 | 0                      |                    1   |                    2   |                    3   |                   4    |                  5     |                  6     |
| 512 kHz      | Not applicable       |                  175 |                  270 |                  505 | Not applicable         |                    3.3 |                    0.8 |                    0.2 |                   0.05 |                  0.01  |                  0.003 |
| 768 kHz      | Not applicable       |                   60 |                   90 |                  170 | Not applicable         |                    2.2 |                    0.6 |                    0.1 |                   0.04 |                  0.009 |                  0.002 |

## SERIAL COMMUNICATIONS

## Table 26. SPI Write Command in Half Duplex

|         | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    |
|---------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| Command | 15     | 14     | 13     | 12     | 11     | 10     | 9      | 8      | 7      | 6      | 5      | 4      | 3      | 2      | 1      | 0      |
| SDI     | A6     | A5     | A4     | A3     | A2     | A1     | A0     | 0      | D7     | D6     | D5     | A4     | D3     | D2     | D1     | D0     |
| SDO     | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z |

## Table 27. SPI Read Command in Half Duplex

|         | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit    | Bit   | Bit   | Bit   | Bit   | Bit   | Bit   | Bit   | Bit   |
|---------|--------|--------|--------|--------|--------|--------|--------|--------|-------|-------|-------|-------|-------|-------|-------|-------|
| Command | 15     | 14     | 13     | 12     | 11     | 10     | 9      | 8      | 7     | 6     | 5     | 4     | 3     | 2     | 1     | 0     |
| SDI     | A6     | A5     | A4     | A3     | A2     | A1     | A0     | 1      | NE 1  | NE 1  | NE 1  | NE 1  | NE 1  | NE 1  | NE    | NE 1  |
| SDO     | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | High-Z | D7    | D6    | D5    | A4    | D3    | D2    | D1    | D0    |

## Table 28. SDO Command Bit Definitions

| Bit Name   | Position   | Description    | Definition                                                                                                                       |
|------------|------------|----------------|----------------------------------------------------------------------------------------------------------------------------------|
| A[6:0]     | 15…9       | Address field  | Defines the address of the register from which data is read or to which data is written.                                         |
| R/W        | 8          | Read/write bit | Differentiates the SDI command as either read or write. 1: read 0: write                                                         |
| D[7:0]     | 7…0        | Data field     | Write command: contains data to be written to the register at the [A6:A0] bits. Read command: no function, contents are ignored. |

## Table 29. SDO Response Bit Definitions

| Bit Name    | Position   | Description    | Definition                                                                        |
|-------------|------------|----------------|-----------------------------------------------------------------------------------|
| High-Z[7:0] | 15…8       | High impedance | Undriven bits.                                                                    |
| D[7:0]      | 7…0        | Data field     | This 8-bit data field contains the data from the register address in Bits[A6:A0]. |

## SPI BUS SHARING

When using the ADXL380 on the same SPI bus as another sensor, additional protection may be needed to maintain ultralow noise performance, which is especially important if the other device uses a SPI clock of 15 MHz or greater.

## REGISTER MAP

Table 30. ADXL380 Register Summary

| Reg   | Name             | Bits   | Bit 7            | Bit 6        | Bit 5                      | Bit 4 Bit 3                    | Bit 2         | Bit 1           | Bit 0              | Reset   | R/W   |
|-------|------------------|--------|------------------|--------------|----------------------------|--------------------------------|---------------|-----------------|--------------------|---------|-------|
| 0x00  | DEVID_AD         | [7:0]  |                  |              |                            | DEVID_AD                       |               |                 |                    | 0xAD    | R     |
| 0x01  | DEVID_MST        | [7:0]  |                  |              |                            | DEVID_MST                      |               |                 |                    | 0x1D    | R     |
| 0x02  | PART_ID          | [7:0]  |                  |              |                            | PART_ID[11:4]                  |               |                 |                    | 0x17    | R     |
| 0x03  | PART_ID_REV_I D  | [7:0]  |                  | PART_ID[3:0] |                            |                                |               | REV_ID          |                    | 0xC3    | R     |
| 0x04  | SERIAL_NUMBE R_0 | [7:0]  |                  |              |                            | SN0                            |               |                 |                    | 0x00    | R     |
| 0x05  | SERIAL_NUMBE R_1 | [7:0]  |                  |              |                            | SN1                            |               |                 |                    | 0x00    | R     |
| 0x06  | SERIAL_NUMBE R_2 | [7:0]  |                  |              |                            | SN2                            |               |                 |                    | 0x00    | R     |
| 0x07  | SERIAL_NUMBE R_3 | [7:0]  |                  |              |                            | SN3                            |               |                 |                    | 0x00    | R     |
| 0x08  | SERIAL_NUMBE R_4 | [7:0]  |                  |              |                            | SN4                            |               |                 |                    | 0x00    | R     |
| 0x09  | SERIAL_NUMBE R_5 | [7:0]  |                  |              |                            | SN5                            |               |                 |                    | 0x00    | R     |
| 0x0A  | SERIAL_NUMBE R_6 | [7:0]  |                  |              |                            | SN6                            |               |                 |                    | 0x00    | R     |
| 0x0B  | DEV_DELTA_Q_ X   | [7:0]  |                  |              |                            | DEV_DELTA_Q_X                  |               |                 |                    | 0x00    | R     |
| 0x0C  | DEV_DELTA_Q_ Y   | [7:0]  |                  |              |                            | DEV_DELTA_Q_Y                  |               |                 |                    | 0x00    | R     |
| 0x0D  | DEV_DELTA_Q_ Z   | [7:0]  |                  |              |                            | DEV_DELTA_Q_Z                  |               |                 |                    | 0x00    | R     |
| 0x0E  | DEV_DELTA_F0 _X  | [7:0]  |                  |              |                            | DEV_DELTA_F0_X                 |               |                 |                    | 0x00    | R     |
| 0x0F  | DEV_DELTA_F0 _Y  | [7:0]  |                  |              |                            | DEV_DELTA_F0_Y                 |               |                 |                    | 0x00    | R     |
| 0x10  | DEV_DELTA_F0 _Z  | [7:0]  |                  |              |                            | DEV_DELTA_F0_Z                 |               |                 |                    | 0x00    | R     |
| 0x11  | STATUS0          | [7:0]  | NVM_BUSY _STATUS | NVM_DONE     | EFUSE_BU SY_REGER R_STICKY | FIFO_READ Y FIFO_WATE RMARK    | FIFO_OVER RUN | FIFO_FULL       | PARITY_ER R_STICKY | 0x80    | R     |
| 0x12  | STATUS1          | [7:0]  | NVM_IRQ          | INACT        | ACT                        | OVER_RAN GE_STICKY OVER_RAN GE | TRIPLE_TA P   | DOUBLE_T AP     | SINGLE_TA P        | 0x00    | R     |
| 0x13  | STATUS2          | [7:0]  | NVM_ECC_ DONE    | RESERVED     | NVM_ECC_ DET               | NVM_CRC_ DONE NVM_CRC_ ERR     | RESERVED      | UV_FLAG_ STICKY | UV_FLAG            | 0x04    | R     |
| 0x14  | STATUS3          | [7:0]  |                  |              |                            | RESERVED                       |               |                 | DATA_REA DY        | 0x00    | R     |
| 0x15  | XDATA_H          | [7:0]  |                  |              |                            | XDATA_H                        |               |                 |                    | 0x00    | R     |
| 0x16  | XDATA_L          | [7:0]  |                  |              |                            | XDATA_L                        |               |                 |                    | 0x00    | R     |
| 0x17  | YDATA_H          | [7:0]  |                  |              |                            | YDATA_H                        |               |                 |                    | 0x00    | R     |
| 0x18  | YDATA_L          | [7:0]  |                  |              |                            | YDATA_L                        |               |                 |                    | 0x00    | R     |
| 0x19  | ZDATA_H          | [7:0]  |                  |              |                            | ZDATA_H                        |               |                 |                    | 0x00    | R     |
| 0x1A  | ZDATA_L          | [7:0]  |                  |              |                            | ZDATA_L                        |               |                 |                    | 0x00    | R     |
| 0x1B  | TDATA_H          | [7:0]  |                  |              |                            | TDATA_H                        |               |                 |                    | 0x00    | R     |
| 0x1C  | TDATA_L          | [7:0]  | TDATA_L          | TDATA_L      | TDATA_L                    |                                | XSENS_DSM     |                 |                    | 0x00    | R     |
| 0x1D  | FIFO_DATA        | [7:0]  |                  |              |                            | FIFO_DATA                      |               |                 |                    | 0x00    | R     |
| 0x1E  | FIFO_STATUS0     | [7:0]  |                  |              |                            | FIFO_ENTRIES[7:0]              |               |                 |                    | 0x00    | R     |

## REGISTER MAP

Table 30. ADXL380 Register Summary (Continued)

| Reg   | Name            | Bits                    | Bit 7                   | Bit 6                   | Bit 5                        | Bit 4                        | Bit 3                           | Bit 2                           | Bit 1                           | Bit 0            | Reset   | R/W   |
|-------|-----------------|-------------------------|-------------------------|-------------------------|------------------------------|------------------------------|---------------------------------|---------------------------------|---------------------------------|------------------|---------|-------|
| 0x1F  | FIFO_STATUS1    | [7:0]                   | [7:0]                   | [7:0]                   | [7:0]                        | RESERVED                     | RESERVED                        | RESERVED                        | RESERVED                        | FIFO_ENTR IES[8] | 0x00    | R     |
| 0x20  | MISC0           | [7:0]                   | XL382                   | PARITY_RE G             | PARITY_ER R                  | GAIN_SCALER_XY               | GAIN_SCALER_XY                  | GAIN_SCALER_XY                  | GAIN_SCALER_XY                  |                  | 0x0F 1  | R     |
| 0x21  | MISC1           | [7:0] RESERVED          | [7:0] RESERVED          | [7:0] RESERVED          | [7:0] RESERVED               | GAIN_SCALER_Z                | GAIN_SCALER_Z                   | GAIN_SCALER_Z                   | GAIN_SCALER_Z                   |                  | 0x09 1  | R     |
| 0x24  | SENS_DSM        | [7:0] YSENS_DSM         | [7:0] YSENS_DSM         | [7:0] YSENS_DSM         | [7:0] YSENS_DSM              |                              | ZSENS_DSM                       | ZSENS_DSM                       | ZSENS_DSM                       |                  | 0x00    | R     |
| 0x25  | CLK_CTRL        | [7:0] EXT_CLK_RATE      | [7:0] EXT_CLK_RATE      | [7:0] EXT_CLK_RATE      | [7:0] EXT_CLK_RATE           |                              | RESERVED                        | RESERVED                        | RESERVED                        | CLK_SRC          | 0x00    | R/W   |
| 0x26  | OP_MODE         | [7:0] RANGE             | [7:0] RANGE             | [7:0] RANGE             | PDM_MOD E                    | AUDIO_MO OP_MODE             | AUDIO_MO OP_MODE                | AUDIO_MO OP_MODE                | AUDIO_MO OP_MODE                |                  | 0x00    | R/W   |
| 0x27  | DIG_EN          | [7:0] MODE_CHANNEL_EN   | [7:0] MODE_CHANNEL_EN   | [7:0] MODE_CHANNEL_EN   | [7:0] MODE_CHANNEL_EN        | DE                           | FIFO_EN                         | DOUBLE_S PEED                   | INT01_EVE NT                    | PARITY_EN        | 0x00    | R/W   |
| 0x28  | SAR_I2C         | [7:0]                   | I2C_BYPAS S             | I2C_HSM_E N             | I2C_SDA_S LOW                |                              | RESERVED                        | RESERVED                        | RESERVED                        | DRDY_SEL         | 0x00    | R/W   |
| 0x29  | NVM_CTL         | [7:0]                   | NVM_CTL_ ECC_CHEC K     | NVM_CTL_ CRC_CHEC K     |                              |                              | RESERVED                        | RESERVED                        | RESERVED                        |                  | 0x00    | R/W   |
| 0x2A  | REG_RESET       | [7:0] RESERVED          | [7:0] RESERVED          | [7:0] RESERVED          | [7:0] RESERVED               | [7:0] RESERVED               | [7:0] RESERVED                  | [7:0] RESERVED                  | SOFT_RES ET                     | RESERVED         | 0x00    | R/W   |
| 0x2B  | INT0_MAP0       | [7:0]                   | NVM_BUSY _INT0          | INACT_INT0              | ACT_INT0                     | RESERVED                     | FIFO_WATE RMARK_IN T0           | FIFO_OVER RUN_INT0              | FIFO_FULL _INT0                 | DATA_RDY_ INT0   | 0x80    | R/W   |
| 0x2C  | INT0_MAP1       | [7:0]                   | NVM_DONE _INT0          | NVM_IRQ_I NT0           | UV_FLAG_I NT0                | OVER_RAN GE_INT0             | PARITY_ER R_INT0                | TRIPLE_TA P_INT0                | DOUBLE_T AP_INT0                | SINGLE_TA P_INT0 | 0x00    | R/W   |
| 0x2D  | INT1_MAP0       | [7:0]                   | NVM_BUSY _INT1          | INACT_INT1              | ACT_INT1                     | RESERVED                     | FIFO_WATE RMARK_IN T1           | FIFO_OVER RUN_INT1              | FIFO_FULL _INT1                 | DATA_RDY_ INT1   | 0x00    | R/W   |
| 0x2E  | INT1_MAP1       | [7:0]                   | NVM_DONE _INT1          | NVM_IRQ_I NT1           | UV_FLAG_I NT1                | OVER_RAN GE_INT1             | PARITY_ER R_INT1                | TRIPLE_TA P_INT1                | DOUBLE_T AP_INT1                | SINGLE_TA P_INT1 | 0x80    | R/W   |
| 0x30  | FIFO_CFG0       | [7:0]                   | FIFO_READ _RESET        | FIFO_CH_I D             | FIFO_MODE                    |                              | FIFO_EXT_ TRIG                  | RESERVED                        | RESERVED                        | FIFO_SAMP LES[8] | 0x00    | R/W   |
| 0x31  | FIFO_CFG1       | [7:0] FIFO_SAMPLES[7:0] | [7:0] FIFO_SAMPLES[7:0] | [7:0] FIFO_SAMPLES[7:0] | [7:0] FIFO_SAMPLES[7:0]      | [7:0] FIFO_SAMPLES[7:0]      | [7:0] FIFO_SAMPLES[7:0]         | [7:0] FIFO_SAMPLES[7:0]         | [7:0] FIFO_SAMPLES[7:0]         |                  | 0x00    | R/W   |
| 0x32  | SPT_CFG0        | [7:0] SPT_SLOT_WIDTH    | [7:0] SPT_SLOT_WIDTH    | [7:0] SPT_SLOT_WIDTH    | SPT_BCLK_ POL SPT_FSYN C_POL | SPT_BCLK_ POL SPT_FSYN C_POL | SPT_FSYN C_MODE SPT_DATA_FORMAT | SPT_FSYN C_MODE SPT_DATA_FORMAT | SPT_FSYN C_MODE SPT_DATA_FORMAT |                  | 0x00    | R/W   |
| 0x33  | SPT_CFG1        | [7:0]                   | SPT_XTRA_ SAMP          | SPT_TRI_S TATE          | SPT_Y_SLOT                   | SPT_Y_SLOT                   | SPT_X_SLOT                      | SPT_X_SLOT                      | SPT_X_SLOT                      |                  | 0x08    | R/W   |
| 0x34  | SPT_CFG2        | [7:0]                   | SPT_SOUT _SEL           | SPT_DUAL_ MODE          | SPT_TEMP_SLOT                | SPT_TEMP_SLOT                | SPT_Z_SLOT                      | SPT_Z_SLOT                      | SPT_Z_SLOT                      |                  | 0x1A    | R/W   |
| 0x35  | SYNC_CFG        | [7:0]                   | RESERVED                | SYNC_SRC                | SYNC_MODE                    | SYNC_MODE                    | BCLK_SRC                        | BCLK_SRC                        | FSYNC_SRC                       |                  | 0x00    | R/W   |
| 0x36  | PDM_CFG         | [7:0]                   | PDM_FSYNC_SLOTB         | PDM_FSYNC_SLOTB         | PDM_FSYNC_SLOTA              | PDM_FSYNC_SLOTA              | PDM_SOUT0_SLOTB                 | PDM_SOUT0_SLOTB                 | PDM_SOUT0_SLOTA                 |                  | 0x00    | R/W   |
| 0x37  | ACT_INACT_CT L  | [7:0]                   | PDM_POL                 | ACT_INACT _HPF          | LINKLOOP                     | LINKLOOP                     | INACT_EN                        | INACT_EN                        | ACT_EN                          |                  | 0x00    | R/W   |
| 0x38  | SNSR_AXIS_EN    | [7:0]                   | ST_MODE                 | ST_FORCE                | ST_DIR                       | RESERVED                     | RESERVED                        | ACT_INACT_AXIS_EN               | ACT_INACT_AXIS_EN               |                  | 0x00    | R/W   |
| 0x39  | THRESH_ACT_H    | [7:0]                   |                         |                         | RESERVED                     |                              |                                 | THRESH_ACT[10:8]                | THRESH_ACT[10:8]                |                  | 0x00    | R/W   |
| 0x3A  | THRESH_ACT_L    | [7:0]                   |                         |                         |                              | THRESH_ACT[7:0]              | THRESH_ACT[7:0]                 |                                 |                                 |                  | 0x00    | R/W   |
| 0x3B  | TIME_ACT_H      | [7:0]                   |                         |                         |                              | TIME_ACT[23:16]              | TIME_ACT[23:16]                 |                                 |                                 |                  | 0x00    | R/W   |
| 0x3C  | TIME_ACT_M      | [7:0]                   |                         |                         |                              | TIME_ACT[15:8]               | TIME_ACT[15:8]                  |                                 |                                 |                  | 0x00    | R/W   |
| 0x3D  | TIME_ACT_L      |                         |                         |                         |                              | TIME_ACT[7:0]                | TIME_ACT[7:0]                   |                                 |                                 |                  | 0x00    | R/W   |
| 0x3E  | THRESH_INACT _H | [7:0] [7:0]             |                         |                         | RESERVED                     |                              |                                 | THRESH_INACT[10:8]              | THRESH_INACT[10:8]              |                  | 0x00    | R/W   |
| 0x3F  | THRESH_INACT _L | [7:0]                   |                         |                         |                              | THRESH_INACT[7:0]            | THRESH_INACT[7:0]               |                                 |                                 |                  | 0x00    | R/W   |

## REGISTER MAP

## Table 30. ADXL380 Register Summary (Continued)

| Reg   | Name              | Bits           | Bit 7                    | Bit 6                 | Bit 5                 | Bit 4 Bit 3           | Bit 2                 | Bit 1             | Bit 0             | Reset   | R/W   |
|-------|-------------------|----------------|--------------------------|-----------------------|-----------------------|-----------------------|-----------------------|-------------------|-------------------|---------|-------|
| 0x40  | TIME_INACT_H      | [7:0]          |                          |                       |                       | TIME_INACT[23:16]     |                       |                   |                   | 0x00    | R/W   |
| 0x41  | TIME_INACT_M      | [7:0]          |                          |                       |                       | TIME_INACT[15:8]      |                       |                   |                   | 0x00    | R/W   |
| 0x42  | TIME_INACT_L      | [7:0]          |                          |                       |                       | TIME_INACT[7:0]       |                       |                   |                   | 0x00    | R/W   |
| 0x43  | TAP_THRESH        | [7:0]          |                          |                       |                       | TAP_THRESH_PRESCALE   |                       |                   |                   | 0x00    | R/W   |
| 0x44  | TAP_DUR           | [7:0]          |                          |                       |                       | TAP_DUR               |                       |                   |                   | 0x00    | R/W   |
| 0x45  | TAP_LATENT        | [7:0]          |                          |                       |                       | TAP_LATENT            |                       |                   |                   | 0x00    | R/W   |
| 0x46  | TAP_WINDOW        | [7:0]          |                          |                       |                       | TAP_WINDOW            |                       |                   |                   | 0x00    | R/W   |
| 0x47  | TAP_CFG           | [7:0]          |                          |                       | RESERVED              |                       | TRIPLE_TA P_EN        | TAP_AXIS          |                   | 0x00    | R/W   |
| 0x48  | OR_CFG            | [7:0]          | RESERVED                 | RESERVED              | RESERVED              | DIS_UV_DE T           | RESERVED              | DIG_OUT_DURING_OR | DIG_OUT_DURING_OR | 0x00    | R/W   |
| 0x49  | TRIG_CFG          | [7:0]          | DEC_2X_B YPASS           | SINC_RATE             | IIR1_EN               | RESERVED              | ROUND_M ODE           | TRIG_SRC          | TRIG_MOD E        | 0x00    | R/W   |
| 0x4A  | X_SAR_OFFSET      | [7:0]          | X_SAR_OFFSET             | X_SAR_OFFSET          | X_SAR_OFFSET          | X_SAR_OFFSET          | X_SAR_OFFSET          | X_SAR_OFFSET      | X_SAR_OFFSET      | 0x00    | R/W   |
| 0x4B  | Y_SAR_OFFSET      | [7:0]          | Y_SAR_OFFSET             | Y_SAR_OFFSET          | Y_SAR_OFFSET          | Y_SAR_OFFSET          | Y_SAR_OFFSET          | Y_SAR_OFFSET      | Y_SAR_OFFSET      | 0x00    | R/W   |
| 0x4C  | Z_SAR_OFFSET      | [7:0]          | Z_SAR_OFFSET             | Z_SAR_OFFSET          | Z_SAR_OFFSET          | Z_SAR_OFFSET          | Z_SAR_OFFSET          | Z_SAR_OFFSET      | Z_SAR_OFFSET      | 0x00    | R/W   |
| 0x4D  | X_DSM_OFFSET      | [7:0]          | X_DSM_OFFSET             | X_DSM_OFFSET          | X_DSM_OFFSET          | X_DSM_OFFSET          | X_DSM_OFFSET          | X_DSM_OFFSET      | X_DSM_OFFSET      | 0x00    | R/W   |
| 0x4E  | Y_DSM_OFFSET      | [7:0]          | Y_DSM_OFFSET             | Y_DSM_OFFSET          | Y_DSM_OFFSET          | Y_DSM_OFFSET          | Y_DSM_OFFSET          | Y_DSM_OFFSET      | Y_DSM_OFFSET      | 0x00    | R/W   |
| 0x4F  | Z_DSM_OFFSET      | [7:0]          | Z_DSM_OFFSET             | Z_DSM_OFFSET          | Z_DSM_OFFSET          | Z_DSM_OFFSET          | Z_DSM_OFFSET          | Z_DSM_OFFSET      | Z_DSM_OFFSET      | 0x00    | R/W   |
| 0x50  | FILTER            | [7:0]          | DCF_BYPA SS              | EQ_BYPAS S            | LPF_MODE              | HPF_PATH              | HPF_CORNER            | HPF_CORNER        | HPF_CORNER        | 0x00    | R/W   |
| 0x55  | USER_TEMP_S ENS_0 | [7:0] RESERVED | [7:0] RESERVED           | [7:0] RESERVED        | USER_TEMP_OFFSET      | USER_TEMP_OFFSET      | USER_TEMP_OFFSET      | USER_TEMP_OFFSET  | USER_TEMP_OFFSET  | 0x00    | R/W   |
| 0x56  | USER_TEMP_S ENS_1 | [7:0]          | USER_TEM P_TRIM_EN _TEMP | HIGH_GAIN RESERVED    | USER_TEMP_SENS        | USER_TEMP_SENS        | USER_TEMP_SENS        | USER_TEMP_SENS    | USER_TEMP_SENS    | 0x00    | R/W   |
| 0x58  | MISO              | [7:0]          | RESERVED ER_BYPAS S      | GAIN_SCAL             | RESERVED              | RESERVED              | RESERVED              | MISO_ASEL 0_PD    | MISO_ASEL 0_DRV   | 0x00    | R/W   |
| 0x59  | SOUT0             | [7:0] RESERVED | [7:0] RESERVED           | [7:0] RESERVED        | [7:0] RESERVED        | [7:0] RESERVED        | [7:0] RESERVED        | SOUT0_PD          | SOUT0_DR V        | 0x00    | R/W   |
| 0x5A  | MCLK              | [7:0]          | RESERVED                 | RESERVED              | RESERVED              | RESERVED              | RESERVED              | MCLK_PD           | MCLK_DRV          | 0x00    | R/W   |
| 0x5B  | BCLK              | [7:0]          | RESERVED                 | RESERVED              | RESERVED              | RESERVED              | RESERVED              | BCLK_PD           | BCLK_DRV          | 0x00    | R/W   |
| 0x5C  | FSYNC             | [7:0]          | SYNC_RES YNC RESERVED    | SYNC_RES YNC RESERVED | SYNC_RES YNC RESERVED | SYNC_RES YNC RESERVED | SYNC_RES YNC RESERVED | FSYNC_PD          | FSYNC_DR V        | 0x00    | R/W   |
| 0x5D  | INT0              | [7:0]          | INT0_POL                 | RESERVED              | RESERVED              | RESERVED              | RESERVED              | INT0_PD           | INT0_DRV          | 0x00    | R/W   |
| 0x5E  | INT1              | [7:0]          | INT1_POL                 | RESERVED              | RESERVED              | RESERVED              | RESERVED              | INT1_PD           | INT1_DRV          | 0x00    | R/W   |

## ANALOG DEVICES DEVICE ID REGISTER

Address: 0x00, Reset: 0xAD, Name: DEVID\_AD

<!-- image -->

Table 31. Bit Descriptions for DEVID\_AD

| Bits   | Bit Name   | Settings   | Description                                          | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------|---------|----------|
| [7:0]  | DEVID_AD   |            | This register contains the Analog Devices device ID. | 0xAD    | R        |

## REGISTER MAP

## ANALOG DEVICES MEMS DEVICE ID REGISTER

Address: 0x01, Reset: 0x1D, Name: DEVID\_MST

<!-- image -->

Table 32. Bit Descriptions for DEVID\_MST

| Bits   | Bit Name   | Settings   | Description                                               | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------|---------|----------|
| [7:0]  | DEVID_MST  |            | This register contains the Analog Devices MEMS device ID. | 0x1D    | R        |

## PART ID REGISTER

Address: 0x02, Reset: 0x17, Name: PART\_ID

<!-- image -->

## Table 33. Bit Descriptions for PART\_ID

<!-- image -->

| Bits   | Bit Name      | Settings   | Description                                              | Reset   | Access   |
|--------|---------------|------------|----------------------------------------------------------|---------|----------|
| [7:0]  | PART_ID[11:4] |            | This register contains the device ID (380 = 17C in hex). | 0x17    | R        |

## PART ID AND REVISION ID REGISTER

Address: 0x03, Reset: 0xC3, Name: PART\_ID\_REV\_ID

<!-- image -->

Table 34. Bit Descriptions for PART\_ID\_REV\_ID

| Bits   | Bit Name     | Settings   | Description                                        | Reset   | Access   |
|--------|--------------|------------|----------------------------------------------------|---------|----------|
| [7:4]  | PART_ID[3:0] |            | This register contains the device ID (17C in hex). | 0xC     | R        |
| [3:0]  | REV_ID       |            | This register contains the product revision ID.    | 0x3     | R        |

## SERIAL NUMBER 0 REGISTER

Address: 0x04, Reset: 0x00, Name: SERIAL\_NUMBER\_0

<!-- image -->

Table 35. Bit Descriptions for SERIAL\_NUMBER\_0

| Bits   | Bit Name   | Settings   | Description                                                                                   | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | SN0        |            | Serial Number First ASCII Character. This register is part of a 56-bit product serial number. | 0x0     | R        |

## REGISTER MAP

## SERIAL NUMBER 1 REGISTER

Address: 0x05, Reset: 0x00, Name: SERIAL\_NUMBER\_1

<!-- image -->

## Table 36. Bit Descriptions for SERIAL\_NUMBER\_1

| Bits   | Bit Name   | Settings   | Description                                                                                    | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | SN1        |            | Serial Number Second ASCII Character. This register is part of a 56-bit product serial number. | 0x0     | R        |

## SERIAL NUMBER 2 REGISTER

Address: 0x06, Reset: 0x00, Name: SERIAL\_NUMBER\_2

<!-- image -->

## Table 37. Bit Descriptions for SERIAL\_NUMBER\_2

| Bits   | Bit Name   | Settings   | Description                                                                                   | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | SN2        |            | Serial Number Third ASCII Character. This register is part of a 56-bit product serial number. | 0x0     | R        |

## SERIAL NUMBER 3 REGISTER

Address: 0x07, Reset: 0x00, Name: SERIAL\_NUMBER\_3

<!-- image -->

| Bits   | Bit Name   | Settings   | Description                                                                                   | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | SN3        |            | Serial Number Forth ASCII Character. This register is part of a 56-bit product serial number. | 0x0     | R        |

## Table 38. Bit Descriptions for SERIAL\_NUMBER\_3

## SERIAL NUMBER 4 REGISTER

Address: 0x08, Reset: 0x00, Name: SERIAL\_NUMBER\_4

<!-- image -->

Table 39. Bit Descriptions for SERIAL\_NUMBER\_4

| Bits   | Bit Name   | Settings   | Description                                                                                   | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------|---------|----------|
| [7;0]  | SN4        |            | Serial Number Fifth ASCII Character. This register is part of a 56-bit product serial number. | 0x0     | R        |

## REGISTER MAP

## SERIAL NUMBER 5 REGISTER

Address: 0x09, Reset: 0x00, Name: SERIAL\_NUMBER\_5

<!-- image -->

Table 40. Bit Descriptions for SERIAL\_NUMBER\_5

| Bits   | Bit Name   | Settings   | Description                                                                                   | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | SN5        |            | Serial Number Sixth ASCII Character. This register is part of a 56-bit product serial number. | 0x0     | R        |

## SERIAL NUMBER 6 REGISTER

Address: 0x0A, Reset: 0x00, Name: SERIAL\_NUMBER\_6

<!-- image -->

## Table 41. Bit Descriptions for SERIAL\_NUMBER\_6

| Bits   | Bit Name   | Settings   | Description                                                                                     | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | SN6        |            | Serial Number Seventh ASCII Character. This register is part of a 56-bit product serial number. | 0x0     | R        |

## DEVICE SENSOR PARAMETER REGISTERS

Address: 0x0B, Reset: 0x00, Name: DEV\_DELTA\_Q\_X

<!-- image -->

Table 42. Bit Descriptions for DEV\_DELTA\_Q\_X

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|---------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | DEV_DELTA_Q_X |            | Sensor Parameter. Deviation of X sensor quality factor from the nominal value. Data in twos complement format. Resolution = 0.007. The sensor quality factor at ambient temperature can be calculated by Q_XL380 = Q_NOMINAL + 0.007 × DEV_DELTA_Q. | 0x0     | R        |

Address: 0x0C, Reset: 0x00, Name: DEV\_DELTA\_Q\_Y

<!-- image -->

Table 43. Bit Descriptions for DEV\_DELTA\_Q\_Y

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|---------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | DEV_DELTA_Q_Y |            | Sensor Parameter. Deviation of Y sensor quality factor from the nominal value. Data in twos complement format. Resolution = 0.007. The sensor quality factor at ambient temperature can be calculated by Q_XL380 = Q_NOMINAL + 0.007 × DEV_DELTA_Q. | 0x0     | R        |

## REGISTER MAP

## Address: 0x0D, Reset: 0x00, Name: DEV\_DELTA\_Q\_Z

<!-- image -->

Table 44. Bit Descriptions for DEV\_DELTA\_Q\_Z

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|---------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | DEV_DELTA_Q_Z |            | Sensor Parameter. Deviation of Z sensor quality factor from the nominal value. Data in twos complement format. Resolution = 0.003. The sensor quality factor at ambient temperature can be calculated by Q_XL380 = Q_NOMINAL + 0.003 × DEV_DELTA_Q. | 0x0     | R        |

Address: 0x0E, Reset: 0x00, Name: DEV\_DELTA\_F0\_X

<!-- image -->

Table 45. Bit Descriptions for DEV\_DELTA\_F0\_X

| Bits   | Bit Name       | Settings   | Description                                                                                                                                                                                                                                                                                  | Reset   | Access   |
|--------|----------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | DEV_DELTA_F0_X |            | Sensor Parameter. Deviation of X sensor resonant frequency from the nominal value. Data in twos complement format. Resolution = 10 Hz. Refer to Table 1 for the Nominal F0 value. The sensor resonant frequency can be calculated by F0_XL380 (Hz) = F0_NOMINAL (Hz) + 10 Hz × DEV_DELTA_F0. | 0x0     | R        |

## Address: 0x0F, Reset: 0x00, Name: DEV\_DELTA\_F0\_Y

<!-- image -->

Table 46. Bit Descriptions for DEV\_DELTA\_F0\_Y

| Bits   | Bit Name       | Settings   | Description                                                                                                                                                                                                                                                                                  | Reset   | Access   |
|--------|----------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | DEV_DELTA_F0_Y |            | Sensor Parameter. Deviation of Y sensor resonant frequency from the nominal value. Data in twos complement format. Resolution = 10 Hz. Refer to Table 1 for the Nominal F0 value. The sensor resonant frequency can be calculated by F0_XL380 (Hz) = F0_NOMINAL (Hz) + 10 Hz × DEV_DELTA_F0. | 0x0     | R        |

Address: 0x10, Reset: 0x00, Name: DEV\_DELTA\_F0\_Z

<!-- image -->

Table 47. Bit Descriptions for DEV\_DELTA\_F0\_Z

| Bits   | Bit Name       | Settings   | Description                                                                                                                                                                                                                                                                                | Reset   | Access   |
|--------|----------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | DEV_DELTA_F0_Z |            | Sensor Parameter. Deviation of Z sensor resonant frequency from the nominal value. Data in twos complement format. Resolution = 7 Hz. Refer to Table 1 for the Nominal F0 value. The sensor resonant frequency can be calculated by F0_XL380 (Hz) = F0_NOMINAL (Hz) + 7 Hz × DEV_DELTA_F0. | 0x0     | R        |

## REGISTER MAP

## STATUS 0 REGISTER (CLEAR ON READ)

Address: 0x11, Reset: 0x80, Name: STATUS0

<!-- image -->

Table 48. Bit Descriptions for STATUS0

|   Bits | Bit Name                 | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Reset   | Access   |
|--------|--------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | NVM_BUSY_STATUS          |            | NVM EFUSE Busy Status (Read Only). When power-on-reset (POR) or a soft reset occurs, EFUSE is refreshed, which takes about 2.2 ms. When this refresh occurs, EFUSE is busy during refresh right after power is stable. The NVM_BUSY_STATUS bit is high (default) right out of POR or soft reset. It remains high until EFUSE refresh is complete. Once EFUSE refresh is completed, this bit is clear. The NVM_EFUSE_BUSY bit can be monitored at the INT0 pin out of reset. NVM_BUSY_STATUS is set again (default) during POR and soft reset. | 0x1     | R        |
|      6 | NVM_DONE                 |            | NVM EFUSE Done Status (Sticky). When POR or a soft reset occurs, EFUSE is refreshed which takes about 2.2 ms. When this is completed, it clears NVM_BUSY_STATUS to 0 and sets NVM_DONE to 1. Default value at POR is 1'b0. This NVM_DONE register bit is clear on read.                                                                                                                                                                                                                                                                       | 0x0     | R        |
|      5 | EFUSE_BUSY_REGERR_STICKY |            | EFUSE BUSY Register Error Sticky Status. When register write occurs during EFUSE_BUSY = 1, an alarm triggers and reports sticky status.                                                                                                                                                                                                                                                                                                                                                                                                       | 0x0     | R        |
|      4 | FIFO_READY               |            | FIFO Ready (Data Available). 1 indicates that there is at least one sample available in the FIFO output buffer.                                                                                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R        |
|      3 | FIFO_WATERMARK           |            | FIFO Watermark. 1 indicates that the FIFO contains at least the desired number of samples, as set in the FIFO_SAMPLES register. FIFO_WATERMARK is asserted when the next sample (above the value) is written to the FIFO. FIFO_WATERMARK behaves like an interrupt event which contributes to an interrupt output. It clears on read. If using SPI for the FIFO data read, the CS line must be deasserted as well to clear the FIFO_WATERMARK bit and interrupt (if mapped to an interrupt pin).                                              | 0x0     | R        |
|      2 | FIFO_OVERRUN             |            | FIFO Overrun Status. In FIFO stream and trigger mode, the assertion of FIFO_OVERRUN indicates FIFO contents are overwritten with most updated motion or thermal sensor data. FIFO read pointer is advanced to first axis of oldest sample set in the FIFO. The first time read after FIFO_OVERRUN assertion always returns the first axis data of the sample set. FIFO_OVERRUN is not specified in FIFO normal mode.                                                                                                                          | 0x0     | R        |
|      1 | FIFO_FULL                |            | FIFO Full. FIFO_FULL is set when the FIFO collects 320 samples (or 318 samples if exactly three channels are enabled).                                                                                                                                                                                                                                                                                                                                                                                                                        | 0x0     | R        |
|      0 | PARITY_ERR_STICKY        |            | Parity Error Sticky Status Bit. This bit can be trigger high by a Parity Error Event 0 →1or a parity error to its live status (PARITY_ERR) trigger. (The INT01_EVENT register bit can be used, and the default is to a live status trigger.) A single register read clears the parity error sticky bit.                                                                                                                                                                                                                                       | 0x0     | R        |

## REGISTER MAP

## STATUS 1 REGISTER (CLEAR ON READ)

Address: 0x12, Reset: 0x00, Name: STATUS1

<!-- image -->

Table 49. Bit Descriptions for STATUS1

|   Bits | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|-------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | NVM_IRQ           |            | NVM/EFUSE IRQ Status (Sticky). When uncorrectable error is detected from either EFUSE controller checker or external check enable, this bit is set. The NVM_IRQ register is an accumulation interrupt status of the EFUSE controller error or with User NVM_ECC_DET and User NVM_CRC_ERR interrupts. (A user can invoke an EFUSE refresh, an ECC check, and/or a CRC check using the NVM_CTL register.) A result of any errors can trigger an interrupt alarm in the STATUS0 and STATUS2 registers. | 0x0     | R        |
|      6 | INACT             |            | Inactivity. 1 indicates that the inactivity detection function has detected inactivity.                                                                                                                                                                                                                                                                                                                                                                                                             | 0x0     | R        |
|      5 | ACT               |            | Activity. 1 indicates that the activity detection function has detected an over threshold condition.                                                                                                                                                                                                                                                                                                                                                                                                | 0x0     | R        |
|      4 | OVER_RANGE_STICKY |            | Overrange Sticky Status Bit. Indicates that the acceleration input has exceeded the overrange threshold. The bit is sticky. (The INT01_EVENT register bit can be used, and the default is a live status trigger.) A single register read clears the overrange sticky bit.                                                                                                                                                                                                                           | 0x0     | R        |
|      3 | OVER_RANGE        |            | Overrange. Indicates that the current acceleration input exceeds the overrange threshold.                                                                                                                                                                                                                                                                                                                                                                                                           | 0x0     | R        |
|      2 | TRIPLE_TAP        |            | Triple TAP Status. The TRIPLE_TAP bit is set when TRIPLE_TAP_EN is set and three acceleration events that are greater than the value in the TAP_THRESH register occur for less time than is specified in the TAP_DUR register. The third tap starts after the time specified by the TAP_LATENT register plus the 2.5 ms settling time but within the time specified in the TAP_WINDOW register after the double tap is valid.                                                                       | 0x0     | R        |
|      1 | DOUBLE_TAP        |            | Double TAP Status. The DOUBLE_TAP is set when TAP_WINDOW and TAP_LATENT is greater than 0 and two acceleration events that are greater than the value in the TAP_THRESH register occur for less time than is specified in the TAP_DUR register. The second tap starts after the time specified by the TAP_LATENT register plus TAP settling time of 2.5 ms but within the time specified in the TAP_WINDOW register                                                                                 | 0x0     | R        |
|      0 | SINGLE_TAP        |            | Single TAP Status. The SINGLE_TAP bit is set when a single acceleration event that is greater than the value in the TAP_THRESH register occurs for less time than is specified in the TAP_DUR register.                                                                                                                                                                                                                                                                                             | 0x0     | R        |

## REGISTER MAP

## STATUS 2 REGISTER (CLEAR ON READ)

Address: 0x13, Reset: 0x04, Name: STATUS2

<!-- image -->

Table 50. Bit Descriptions for STATUS2

|   Bits | Bit Name       | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|----------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | NVM_ECC_DONE   |            | EFUSE ECC Done. When the NVM ECC done status bit is set high, it indicates that the NVM controller has completed the ECC check request. Disabling the NVM_CTL_ECC_CHECK bit in Register NVM_CTL, clears the NVM_ECC_DONE bit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | R        |
|      6 | RESERVED       |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 0x0     | R        |
|      5 | NVM_ECC_DET    |            | EFUSE ECC Corrected. When the NVM ECC detect status bit is set high, it indicates that the NVM controller has detected two single event upset (SEU) events, which is uncorrectable. In the event that the ECC error is detected with two SEU events, refresh the shadow registers by using the SOFT_RESET bit (Register REG_RESET). After a SOFT_RESET event, the NVM_ECC_DET is clear.                                                                                                                                                                                                                                                                                                                                                                                            | 0x0     | R        |
|      4 | NVM_CRC_DONE   |            | EFUSE CRC Done. When the NVM CRC done status bit is set high, it indicates that the NVM controller has completed the CRC check request. A clear of the NVM_CTL_CRC_CHECK bit (Register NVM_CTL), clears the NVM_CRC_DONE bit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | R        |
|      3 | NVM_CRC_ERR    |            | EFUSE CRC Error. When the NVM CRC error status bit is set high, it indicates that the NVM controller completed the CRC check with a CRC error event (an error syndrome was found).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 0x0     | R        |
|      2 | RESERVED       |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 0x1     | R        |
|      1 | UV_FLAG_STICKY |            | UV Flag Sticky Status Bit. The flag high indicating that a prebrownout event (the V 1P8 pin voltage falls to less than 1.5 V but still above the POR trigger point) has happened. (The INT01_EVENT register bit can be used, and the default is a live status trigger.) A single register read clears the undervoltage sticky bit. The UV flag detect can be disable by enabling the DIS_UV_DET bit (Register OR_CFG). The V1P8 pin (voltage) is the power supply voltage that is supplied to the core analog and digital circuitry (non-IO portion of the chip), nominally 1.8 V and always observable at the V 1P8 pin. In regulator mode, it is regulated down from the voltage supply. In overdrive mode, the 1.8 V core supply voltage is directly supplied by the V 1P8 pin. | 0x0     | R        |
|      0 | UV_FLAG        |            | UV Flag from Analog. This bit is the UV flag status bit. When the undervoltage detector is enabled, a live status flag is alarmed during a prebrownout event (the V IP8 pin voltage falls to less than 1.5 V; however, it is still more than the POR trigger point). The UV detector feature can be disabled through the DIS_UV_DET bit.                                                                                                                                                                                                                                                                                                                                                                                                                                           | 0x0     | R        |

## REGISTER MAP

## STATUS 3 REGISTER (CLEAR ON READ)

Address: 0x14, Reset: 0x00, Name: STATUS3

<!-- image -->

Table 51. Bit Descriptions for STATUS3

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:1]  | RESERVED   |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 0x0     | R        |
| 0      | DATA_READY |            | Data Ready. 1 indicates that a new valid sample is available to be read. This bit clears when a data read is performed. DATA_READY is set again when new valid data is available; if DATA_READY = 0 prior to a register read and new data becomes available after a complete sample is read. During the old sample register read, DATA_READY is set to 1 to indicate a new sample has arrived until the first byte of the new sample is read. If DATA_READY = 1 prior to a register read, but a newer sample has arrived, the newest sample is provided, and it is cleared at the start of the newest register read. The prior new data is discarded silently. When the read is complete, DATA_READY is cleared to 0. DATA_READY is also available at external pin (S OUT ) if the DRDY_SEL bit (Register SAR_I2C) is set to 1. DATA_READY is also available to contribute to an external output (INT0 or INT1) if the DATA_RDY_INT0 bit (Register INT0_MAP0) or the DATA_RDY_INT1 bit (Register INT1_MAP0) are set high. | 0x0     | R        |

## X AXIS DATA OUTPUT READ (HIGH BYTE, BITS[15:8]) REGISTER

Address: 0x15, Reset: 0x00, Name: XDATA\_H

<!-- image -->

Table 52. Bit Descriptions for XDATA\_H

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | XDATA_H    |            | X Axis Output Data High Byte. Resolution determined by dynamic range setting (see the Sensitivity specification in Table 1). When using the VLP, ULP, or HS modes, the four LSBs in this register are always zero because these modes use a 12-bit SAR. | 0x0     | R        |

## REGISTER MAP

## X AXIS DATA OUTPUT READ (LOW BYTE, BITS[7:0]) REGISTER

Address: 0x16, Reset: 0x00, Name: XDATA\_L

Table 53. Bit Descriptions for XDATA\_L

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                            | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | XDATA_L    |            | X Axis Output Data Low Byte. Resolution determined by dynamic range setting (see the Sensitivity specification in Table 1). When using the VLP, ULP, or HS modes, the four LSBs in this register are always zero because these modes use a 12-bit SAR. | 0x0     | R        |

## Y AXIS DATA OUTPUT READ (HIGH BYTE, BITS[15:8]) REGISTER

Address: 0x17, Reset: 0x00, Name: YDATA\_H

<!-- image -->

Table 54. Bit Descriptions for YDATA\_H

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | YDATA_H    |            | Y Axis Output Data High Byte. Resolution determined by dynamic range setting (see the Sensitivity specification in Table 1). When using the VLP, ULP, or HS modes, the four LSBs in this register are always zero because these modes use a 12-bit SAR. | 0x0     | R        |

## Y AXIS DATA OUTPUT READ (LOW BYTE, BITS[7:0]) REGISTER

Address: 0x18, Reset: 0x00, Name: YDATA\_L

Table 55. Bit Descriptions for YDATA\_L

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                            | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | YDATA_L    |            | Y Axis Output Data Low Byte. Resolution determined by dynamic range setting (see the Sensitivity specification in Table 1). When using the VLP, ULP, or HS modes, the four LSBs in this register are always zero because these modes use a 12-bit SAR. | 0x0     | R        |

## Z AXIS DATA OUTPUT READ (HIGH BYTE, BITS[15:8]) REGISTER

Address: 0x19, Reset: 0x00, Name: ZDATA\_H

<!-- image -->

<!-- image -->

<!-- image -->

## REGISTER MAP

## Table 56. Bit Descriptions for ZDATA\_H

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ZDATA_H    |            | Z Axis Output Data High Byte. Resolution determined by dynamic range setting (see the Sensitivity specification in Table 1). When using the VLP, ULP, or HS modes, the four LSBs in this register are always zero because these modes use a 12-bit SAR. | 0x0     | R        |

## Z AXIS DATA OUTPUT READ (LOW BYTE, BITS[7:0]) REGISTER

Address: 0x1A, Reset: 0x00, Name: ZDATA\_L

## Table 57. Bit Descriptions for ZDATA\_L

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                            | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ZDATA_L    |            | Z Axis Output Data Low Byte. Resolution determined by dynamic range setting (see the Sensitivity specification in Table 1). When using the VLP, ULP, or HS modes, the four LSBs in this register are always zero because these modes use a 12-bit SAR. | 0x0     | R        |

## TEMPERATURE DATA OUTPUT READ (HIGH BYTE) REGISTER

Address: 0x1B, Reset: 0x00, Name: TDATA\_H

Table 58. Bit Descriptions for TDATA\_H

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                       | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TDATA_H    |            | Temperature Output Data High Byte. Data is in twos complement format. Temperature sensor sensitivity for HIGH_GAIN_TEMP (Register USER_TEMP_SENS_1) = 0 is 10.2 LSB/°C and for HIGH_GAIN_TEMP = 1 is 16.5 LSB/°C. | 0x0     | R        |

## TEMPERATURE DATA OUTPUT READ (LOW BYTE) AND SENSOR DSM REGISTER

Address: 0x1C, Reset: 0x00, Name: TDATA\_L

<!-- image -->

Table 59. Bit Descriptions for TDATA\_L

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | TDATA_L    |            | Temperature Output Data Low Byte. Data is in twos complement format. Temperature sensor sensitivity for HIGH_GAIN_TEMP (Register USER_TEMP_SENS_1) = 0 is 10.2 LSB/°C and for HIGH_GAIN_TEMP = 1) is 16.5 LSB/°C.                                                                                                                                                                                                                                                                                                                  | 0x0     | R        |
| [3:0]  | XSENS_DSM  |            | Sensitivity Xsens (DSM Path). Read-only X-axis digital sensitivity (fine) trim for low noise signal path (HP, LP, or RBW mode). Data is in unsigned format. This sensitivity trim value is digitally multiplied with the signal path output, and the result is truncated by removing seven LSBs (/128) and then adding them back to the signal path. In PDM mode, this digital fine trim is not applied; therefore, the user must read back this value and apply the same digital multiplication and truncation to the PDM output. | 0x0     | R        |

<!-- image -->

<!-- image -->

## REGISTER MAP

## FIFO READ DATA (FROM FIFO BLOCK) REGISTER

Address: 0x1D, Reset: 0x00, Name: FIFO\_DATA

<!-- image -->

## Table 60. Bit Descriptions for FIFO\_DATA

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                       | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_DATA  |            | FIFO Data Value (from FIFO Block). When enabled, data can be stored in the FIFO. When reading the FIFO_DATA register, the data of each axes is provided in 16-bit signed numbers. | 0x0     | R        |

## FIFO STATUS REGISTERS

Address: 0x1E, Reset: 0x00, Name: FIFO\_STATUS0

<!-- image -->

## Table 61. Bit Descriptions for FIFO\_STATUS0

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                     | Reset   | Access   |
|--------|-------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_ENTRIES[7:0] |            | FIFO Current Entries (Write Pointer). FIFO_ENTRIES track the number of entries that the FIFO controller wrote into the FIFO memory. Users read FIFO_ENTRIES to know how many FIFO entries they must read to not overrun the FIFO write pointer. | 0x0     | R        |

## Address: 0x1F, Reset: 0x00, Name: FIFO\_STATUS1

<!-- image -->

Table 62. Bit Descriptions for FIFO\_STATUS1

| Bits   | Bit Name        | Settings   | Description                                                                                                                                                                                                                                     | Reset   | Access   |
|--------|-----------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:1]  | RESERVED        |            | Reserved.                                                                                                                                                                                                                                       | 0x0     | R        |
| 0      | FIFO_ENTRIES[8] |            | FIFO Current Entries (Write Pointer). FIFO_ENTRIES track the number of entries that the FIFO controller wrote into the FIFO memory. Users read FIFO_ENTRIES to know how many FIFO entries they must read to not overrun the FIFO write pointer. | 0x0     | R        |

## MISCELLANEOUS 0 (READ ONLY) REGISTER

Address: 0x20, Reset: 0x00, Name: MISC0

<!-- image -->

## REGISTER MAP

## Table 63. Bit Descriptions for MISC0

| Bits   | Bit Name       | Settings   | Description                                                                                                                                                                                                                                                                                                                     | Reset   | Access   |
|--------|----------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | XL382          |            | ADXL380 or ADXL382 Device (Different Sensors). When set, the device indicates the ADXL382 revision.                                                                                                                                                                                                                             | 0x0     | R        |
| 6      | PARITY_REG     |            | Parity Error Register. When the calculated parity value is not matched against the stored calculated parity value, a register of the parity error is set and remains set until the device is reset or until a register write occurs. The chip generates a start signal periodically if the parity check is enabled by the user. | 0x0     | R        |
| 5      | PARITY_ERR     |            | Parity Error Register. When the calculated parity value is not matched against the stored calculated parity value, this register of the parity error is set and remains set until the device is reset or until a register write occurs.                                                                                         | 0x0     | R        |
| [4:0]  | GAIN_SCALER_XY |            | Gain Scaler X and Y Axes. These bits are the Trim Gain Scaler X and Trim Gain Scaler Y axes values. The gain value is calculated by the register value/4. For example, setting these bits to a value of four represents a gain of 1.                                                                                            | 0xF 1   | R        |

## MISCELLANEOUS 1 (READ ONLY) REGISTER

Address: 0x21, Reset: 0x00, Name: MISC1

<!-- image -->

## Table 64. Bit Descriptions for MISC1

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                            | Reset   | Access   |
|--------|---------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | RESERVED      |            | Reserved.                                                                                                                                                                                              | 0x0     | R        |
| [4:0]  | GAIN_SCALER_Z |            | Gain Scaler Z Axis. These bits are the Trim Gain Scaler Z axis value. The gain value is calculated by the register value/4. For example, setting these bits to a value of four represents a gain of 1. | 0x9 1   | R        |

## SENSOR DSM REGISTER

Address: 0x24, Reset: 0x00, Name: SENS\_DSM

<!-- image -->

Table 65. Bit Descriptions for SENS\_DSM

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | YSENS_DSM  |            | Sensitivity Ysens (DSM Path). Read-only Y-axis digital sensitivity (fine) trim for low noise signal path (HP, LP, or RBW mode). Data is in unsigned format. This sensitivity trim value is digitally multiplied with the signal path output, and the result is truncated by removing seven LSBs (/128) and then adding them back to the signal path. In PDM mode, this digital fine trim is not applied; therefore, the user must read back this value and apply the same digital multiplication and truncation to the PDM output. | 0x0     | R        |
| [3:0]  | ZSENS_DSM  |            | Sensitivity Zsens (DSM Path). Read-only Z-axis digital sensitivity (fine) trim for low noise signal path (HP, LP, or RBW mode). Data is in unsigned format. This sensitivity trim value is digitally multiplied with the signal path output, and the result is truncated by removing seven LSBs (/128) and then adding them back to the signal path. In PDM mode, this digital fine trim is not applied;                                                                                                                           | 0x0     | R        |

## REGISTER MAP

## Table 65. Bit Descriptions for SENS\_DSM (Continued)

| Bits   | Bit Name   | Settings   | Description                                                                                                               | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |            |            | therefore, the user must read back this value and apply the same digital multiplication and truncation to the PDM output. |         |          |

## CLOCK CONTROL REGISTER

Address: 0x25, Reset: 0x00, Name: CLK\_CTRL

<!-- image -->

## Table 66. Bit Descriptions for CLK\_CTRL

| Bits   | Bit Name     | Settings   | Description                  | Reset   | Access   |
|--------|--------------|------------|------------------------------|---------|----------|
| [7:4]  | EXT_CLK_RATE |            | External Clock Rate.         | 0x0     | R/W      |
|        |              | 0000       | No Division (Direct Drive).  |         |          |
|        |              | 0001       | Divide External Clock by 2.  |         |          |
|        |              | 0010       | Divide External Clock by 3.  |         |          |
|        |              | 0011       | Divide External Clock by 4.  |         |          |
|        |              | 0100       | Divide External Clock by 6.  |         |          |
|        |              | 0101       | Divide External Clock by 8.  |         |          |
|        |              | 0110       | Divide External Clock by 12. |         |          |
|        |              | 0111       | Divide External Clock by 16. |         |          |
|        |              | 1000       | Divide External Clock by 24. |         |          |
| [3:2]  | RESERVED     |            | Reserved.                    | 0x0     | R        |
| [1:0]  | CLK_SRC      |            | Clock Source.                | 0x0     | R/W      |
|        |              | 00         | Use Internal Oscillator.     |         |          |
|        |              | 01         | Use External MCLK Pin.       |         |          |
|        |              | 10         | Use External BCLK Pin.       |         |          |

## OP\_MODE REGISTER

Address: 0x26, Reset: 0x00, Name: OP\_MODE

<!-- image -->

## REGISTER MAP

Table 67. Bit Descriptions for OP\_MODE

| Bits   | Bit Name   | Settings   | Description                                                                     | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RANGE      |            | Full Scale Range Settings. Available modes of operation are 4 g , 8 g , or 16 g | 0x0     | R/W      |
|        |            | 00         | 4 g.                                                                            |         |          |
|        |            | 01         | 8 g.                                                                            |         |          |
|        |            | 10         | 16 g.                                                                           |         |          |
|        |            | 11         | Not applicable.                                                                 |         |          |
| 5      | PDM_MODE   |            | PDM Mode. PDM mode on/off (active high).                                        | 0x0     | R/W      |
|        |            | 0          | PDM mode is disabled.                                                           |         |          |
|        |            | 1          | PDM mode is enabled.                                                            |         |          |
| 4      | AUDIO_MODE |            | Audio Mode for I 2 S/TDM. Audio mode on/off (I 2 S/TDM) active high.            | 0x0     | R/W      |
|        |            | 0          | Audio mode is disabled.                                                         |         |          |
|        |            | 1          | Audio mode is enabled.                                                          |         |          |
| [3:0]  | OP_MODE    |            | Mode of Operation.                                                              | 0x0     | R/W      |
|        |            | 0000       | Standby Mode.                                                                   |         |          |
|        |            | 0001       | Heart Sound Mode.                                                               |         |          |
|        |            | 0010       | Ultra Low Power Mode.                                                           |         |          |
|        |            | 0011       | Very Low Power Mode.                                                            |         |          |
|        |            | 0100       | Low Power Mode.                                                                 |         |          |
|        |            | 0101       | Nonvalid.                                                                       |         |          |
|        |            | 0110       | LP and ULP Mode. LP is on serial port.                                          |         |          |
|        |            | 0111       | LP and VLP Mode. LP is on serial port.                                          |         |          |
|        |            | 1000       | RBW Mode.                                                                       |         |          |
|        |            | 1001       | Nonvalid.                                                                       |         |          |
|        |            | 1010       | RBW and ULP Mode. RBW is on serial port.                                        |         |          |
|        |            | 1011       | RBW and VLP Mode. RBW is on serial port.                                        |         |          |
|        |            | 1100       | High Performance Mode.                                                          |         |          |
|        |            | 1101       | Nonvalid.                                                                       |         |          |
|        |            | 1110       | HP and ULP Mode. HP is on serial port.                                          |         |          |
|        |            | 1111       | HP and VLP Mode. HP is on serial port.                                          |         |          |

## DIGITAL ENABLE REGISTER

Address: 0x27, Reset: 0x00, Name: DIG\_EN

<!-- image -->

Table 68. Bit Descriptions for DIG\_EN

| Bits   | Bit Name        | Settings   | Description                                                                                                                                                                                                                                       | Reset   | Access   |
|--------|-----------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | MODE_CHANNEL_EN |            | Mode Channel Enable. Bit 4 or mode channel enable, Bit 0: X-axis enable. Bit 5 or mode channel enable, Bit 1: Y-axis enable. Bit 6 or mode channel enable, Bit 2: Z-axis enable. Bit 7 or mode channel enable, Bit 3: Temperature channel enable. | 0x0     | R/W      |

## REGISTER MAP

## Table 68. Bit Descriptions for DIG\_EN (Continued)

|   Bits | Bit Name     | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Reset   | Access   |
|--------|--------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      3 | FIFO_EN      | 0 1        | FIFO Enable. FIFO Disable (Default). When this bit is disabled, the FIFO is not in an operable mode, and all FIFO and memory clocks are off. FIFO Enable. When this bit is set, the FIFO can operate in normal mode. The FIFO clock is active and incurs power consumption.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R/W      |
|      2 | DOUBLE_SPEED | 0 1        | Double Speed. Clocking Mode. Set to 0 for 512 kHz system clock or 1 for 768 kHz system clock (external clock source only). 512 kHz System Clock. 768 kHz System Clock.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 0x0     | R/W      |
|      1 | INT01_EVENT  | 0          | INT0 and INT1 Event Contribution. When the INT01_EVENT bit is set, all interrupt sticky bits are set when its associated live bit triggers an event status from 0 →1. Otherwise, the interrupt stick bit is always set whenever the live bit is high. (This bit affects UV_FLAG_STICKY bit, OVER_RANGE_STICKY, and PARITY_ERR_STICKY bit in STATUS0, STATUS1, and STATUS2 registers.) Live status is used to contribute to the interrupt status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 0x0     | R/W      |
|      0 | PARITY_EN    | 1 0 1      | Event status is used to contribute to the interrupt status. Parity Enable. When the parity enable register bit is set high, the SEU detection feature is enabled on all controllable and writable register bits (by iterating through all register addresses to calculate the 1-bit sum of all of the register bit positions). If there is a mismatch between the old (stored and valid) parity bit and the current (calculated and valid) parity bit, an SEU parity error generates. (Either the sticky event bit or live event bit is selected via the INT01_EVENT bit. Default is live event.) An interrupt trigger sets a read only (STATUS0) register bit and/or external pins (INT0 or INT1, if an interrupt contribution is enabled). A read only live (PARITY_ERR bit) register bit and a read only parity value (PARITY register bit) are available for observation. A internal 100 Hz clock is used to generate a periodic SEU detection event. Each of these events triggers a parity calculation if PARITY_EN is set high (that is, it stores both the current and old parity bit and their valid bit for comparison. If there is any mismatch between the valid current parity and the valid old parity, a parity error generates.) When a new register write command occurs, any ongoing parity calculation is aborted, and both the old (stored for comparison) parity and the current parity are invalidated. Their parity bits are set to 0x0. Once the 100 Hz SEU detection event occurs, the current parity value and valid bit are stored in the old parity. Then, the current parity value is set to 0x0 before the iterative calculation through all of the register addresses to generate the new current parity value occurs and sets the current valid at its completion. The SEU detection is conclusive only if both the current parity valid and the old parity valid bits are set high. Disable Parity Check (Default). Enable Parity Check. | 0x0     | R/W      |

## DATA READY AND I 2 C COMMUNICATION PORT CONFIGURATION REGISTER

Address: 0x28, Reset: 0x00, Name: SAR\_I2C

## REGISTER MAP

<!-- image -->

Table 69. Bit Descriptions for SAR\_I2C

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|--------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | I2C_BYPASS   |            | I 2 C Bypass. I 2 C glitch filter bypass. Set this bit to 1 to disable the I 2 C glitch filter. The glitch filter is automatically disabled in the SPI variant.                                                                                         | 0x0     | R/W      |
|        |              | 0          | Normal Mode (No Bypass).                                                                                                                                                                                                                                |         |          |
|        |              | 1          | When set to 1, I 2 C is in bypass mode.                                                                                                                                                                                                                 |         |          |
| 6      | I2C_HSM_EN   |            | I 2 C HSM Register. I 2 C high speed mode enable. Setting this bit to 1 changes the glitch filter configuration (standard/FM/FM+ = 50 ns, HSM = 10 ns) and supports up to 3.4 MHz I 2 C operation.                                                      | 0x0     | R/W      |
|        |              | 0          | I 2 C Normal Speed Mode.                                                                                                                                                                                                                                |         |          |
|        |              | 1          | I 2 C High Speed Mode.                                                                                                                                                                                                                                  |         |          |
| 5      | I2C_SDA_SLOW |            | Adjustment of SDA Fall Slope. Slow down the slope driver, and it is recommended to enable this bit in low V DDIO operation. Adjustment of SDA fall slope by slowing down the output driver. Suggest to enable this bit in high V DDIO operation (>3.3V) | 0x0     | R/W      |
|        |              | 0          | I 2 C SDA Normal Mode.                                                                                                                                                                                                                                  |         |          |
|        |              | 1          | I 2 C SDA slow down the slope driver.                                                                                                                                                                                                                   |         |          |
| [4:1]  | RESERVED     |            | Reserved.                                                                                                                                                                                                                                               | 0x0     | R        |
| 0      | DRDY_SEL     |            | Data Ready Signal Select. Send DRDY signal to S OUT0 .                                                                                                                                                                                                  | 0x0     | R/W      |
|        |              |            | Send data ready signal to S OUT0 .                                                                                                                                                                                                                      |         |          |
|        |              | 1          |                                                                                                                                                                                                                                                         |         |          |

## NVM (EFUSE) USER CONTROL REGISTER

Address: 0x29, Reset: 0x00, Name: NVM\_CTL

<!-- image -->

Table 70. Bit Descriptions for NVM\_CTL

|   Bits | Bit Name          | Settings   | Description                                                                                                                                                                                                                                 | Reset   | Access   |
|--------|-------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | NVM_CTL_ECC_CHECK | 0 1        | NVM ECC Check Control Bit. When this bit is set, an NVM/EFUSE ECC checker starts and reports if there is any errors a few clock cycles after at STATUS2 register. The NVM controller waits in the background state. Starts the ECC checker. | 0x0     | R/W      |

## REGISTER MAP

## Table 70. Bit Descriptions for NVM\_CTL (Continued)

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                      | Reset   | Access   |
|--------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 6      | NVM_CTL_CRC_CHECK | 0          | NVM CRC Check Control Bit. When this bit set, an NVM/EFUSE CRC checker will start and report if there is any errors a few clock cycles after at STATUS2 register | 0x0     | R/W      |
|        |                   |            | The NVM controller waits in the background state.                                                                                                                |         |          |
|        |                   | 1          | Start CRC checker.                                                                                                                                               |         |          |
| [5:0]  | RESERVED          |            | Reserved.                                                                                                                                                        | 0x0     | R/W      |

## REGISTER MAP

## REGISTER RESET

Address: 0x2A, Reset: 0x00, Name: REG\_RESET

<!-- image -->

Table 71. Bit Descriptions for REG\_RESET

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | RESERVED   |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R        |
| 1      | SOFT_RESET | 0 1        | Software Reset. Write Code 0x52 (representing the letter R in ASCII or unicode) to this bit to immediately reset the ADXL380. All register settings are cleared, EFUSE is initialized, and the sensors are placed in standby mode. Interrupt pins are configured to a high output impedance mode. A latency of approximately 0.5 ms is required after soft reset for the initialization. During this time, only the write only bit is available and read data returns 0x0. The device operates in normal mode. When SOFT_RESET is set from 0 to 1, a software reset triggers, and the device is reset without powering down the device. | 0x0     | R/W      |
| 0      | RESERVED   |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R        |

## INTERRUPT PIN 0 ENABLES MAP0 REGISTER

Address: 0x2B, Reset: 0x80, Name: INT0\_MAP0

<!-- image -->

Table 72. Bit Descriptions for INT0\_MAP0

|   Bits | Bit Name      | Settings   | Description                                                                                                         | Reset   | Access   |
|--------|---------------|------------|---------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | NVM_BUSY_INT0 | 1 0        | NVM EFUSE Busy Status Interrupt 0. Maps the NVM_BUSY status to the INT0 pin. Enabled interrupt. Disabled interrupt. | 0x1     | R/W      |
|      6 | INACT_INT0    | 1 0        | Inactivity Interrupt 0. Maps the inactivity status to the INT0 pin. Enabled interrupt. Disabled interrupt.          | 0x0     | R/W      |

## REGISTER MAP

## Table 72. Bit Descriptions for INT0\_MAP0 (Continued)

| Bits   | Bit Name            | Settings   | Description                                                                     | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------------------------------|---------|----------|
| 5      | ACT_INT0            |            | Activity Interrupt 0. Enables the activity detected interrupt to the INT0 pin.  | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |
|        |                     | 0          | Disabled interrupt.                                                             |         |          |
| 4      | RESERVED            |            | Reserved.                                                                       | 0x0     | R/W      |
| 3      | FIFO_WATERMARK_INT0 |            | FIFO Watermark Interrupt 0. 1 = maps the FIFO watermark status to the INT0 pin. | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |
|        |                     | 0          | Disabled interrupt.                                                             |         |          |
| 2      | FIFO_OVERRUN_INT0   |            | FIFO Overrun Interrupt 0. 1 = maps the FIFO overrun status to the INT0 pin.     | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |
|        |                     | 0          | Disabled interrupt.                                                             |         |          |
| 1      | FIFO_FULL_INT0      |            | FIFO Full Interrupt 0.                                                          | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |
|        |                     | 0          | Disabled interrupt.                                                             |         |          |
| 0      | DATA_RDY_INT0       |            | DATA_READY Interrupt 0. Set to 1 to map DATA_READY to the INT0 pin.             | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |
|        |                     | 0          | Disabled interrupt.                                                             |         |          |

## INTERRUPT PIN 0 ENABLES MAP1 REGISTER

Address: 0x2C, Reset: 0x00, Name: INT0\_MAP1

<!-- image -->

Table 73. Bit Descriptions for INT0\_MAP1

| Bits   | Bit Name        | Settings   | Description                                                                                             | Reset   | Access   |
|--------|-----------------|------------|---------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | NVM_DONE_INT0   |            | NVM Done Interrupt 0. Maps the EFUSE done (NVM_DONE) status to the INT0 pin.                            | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                     |         |          |
| 6      | NVM_IRQ_INT0    |            | NVM IRQ Interrupt 0. Maps the NVM/EFUSE IRQ status to the INT0 pin.                                     | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                     |         |          |
| 5      | UV_FLAG_INT0    |            | UV Flag Interrupt 0. UV flag interrupt map to INT0. 1 = maps the UV_FLAG_STICKY status to the INT0 pin. | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                     |         |          |
| 4      | OVER_RANGE_INT0 |            | Overrange Interrupt 0. 1 = maps the OVER_RANGE_STICKY status to the INT0 pin.                           | 0x0     | R/W      |

## REGISTER MAP

## Table 73. Bit Descriptions for INT0\_MAP1 (Continued)

| Bits   | Bit Name        | Settings   | Description                                                                                               | Reset   | Access   |
|--------|-----------------|------------|-----------------------------------------------------------------------------------------------------------|---------|----------|
|        |                 | 1          | Enabled interrupt.                                                                                        |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                       |         |          |
| 3      | PARITY_ERR_INT0 |            | Parity Error Interrupt 0. Parity Error Interrupt map to INT0. 1 = maps the PARITY_ERR status to INT0 pin. | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                        |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                       |         |          |
| 2      | TRIPLE_TAP_INT0 |            | Triple Tap Interrupt 0. Map the triple tap interrupt to the INT0 pin.                                     | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                        |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                       |         |          |
| 1      | DOUBLE_TAP_INT0 |            | Double Tap Interrupt 0. Map the double tap interrupt to the INT0 pin.                                     | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                        |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                       |         |          |
| 0      | SINGLE_TAP_INT0 |            | Single Tap Interrupt 0. Map the single tap interrupt to the INT0 pin.                                     | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                        |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                       |         |          |

## INTERRUPT PIN 1 ENABLES MAP0 REGISTER

Address: 0x2D, Reset: 0x00, Name: INT1\_MAP0

<!-- image -->

Table 74. Bit Descriptions for INT1\_MAP0

| Bits   | Bit Name            | Settings   | Description                                                                     | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------------------------------|---------|----------|
| 7      | NVM_BUSY_INT1       |            | NVM Busy Interrupt 1. Maps the EFUSE busy status to the INT1 pin.               | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |
|        |                     | 0          | Disabled interrupt.                                                             |         |          |
| 6      | INACT_INT1          |            | Inactivity Interrupt 1. Maps the inactivity status to the INT1 pin.             | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |
|        |                     | 0          | Disabled interrupt.                                                             |         |          |
| 5      | ACT_INT1            |            | Activity Interrupt 1. Enables the activity detected interrupt to the INT1 pin.  | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |
|        |                     | 0          | Disabled interrupt.                                                             |         |          |
| 4      | RESERVED            |            | Reserved.                                                                       | 0x0     | R/W      |
| 3      | FIFO_WATERMARK_INT1 |            | FIFO Watermark Interrupt 1. Set to 1 to map the FIFO_WATERMARK to the INT1 pin. | 0x0     | R/W      |
|        |                     | 1          | Enabled interrupt.                                                              |         |          |

## REGISTER MAP

## Table 74. Bit Descriptions for INT1\_MAP0 (Continued)

| Bits   | Bit Name          | Settings   | Description                                                                 | Reset   | Access   |
|--------|-------------------|------------|-----------------------------------------------------------------------------|---------|----------|
|        |                   | 0          | Disabled interrupt.                                                         |         |          |
| 2      | FIFO_OVERRUN_INT1 |            | FIFO Overrun Interrupt 1. 1 = maps the FIFO overrun status to the INT1 pin. | 0x0     | R/W      |
|        |                   | 1          | Enabled interrupt.                                                          |         |          |
|        |                   | 0          | Disabled interrupt.                                                         |         |          |
| 1      | FIFO_FULL_INT1    |            | FIFO Full Interrupt 1.                                                      | 0x0     | R/W      |
|        |                   | 1          | Enabled interrupt.                                                          |         |          |
|        |                   | 0          | Disabled interrupt.                                                         |         |          |
| 0      | DATA_RDY_INT1     |            | DATA_READY Interrupt 1. Set to 1 to map DATA_READY to the INT1 pin.         | 0x0     | R/W      |
|        |                   | 1          | Enabled interrupt.                                                          |         |          |
|        |                   | 0          | Disabled interrupt.                                                         |         |          |

## INTERRUPT PIN 1 ENABLES MAP1 REGISTER

Address: 0x2E, Reset: 0x80, Name: INT1\_MAP1

<!-- image -->

Table 75. Bit Descriptions for INT1\_MAP1

| Bits   | Bit Name        | Settings   | Description                                                                                             | Reset   | Access   |
|--------|-----------------|------------|---------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | NVM_DONE_INT1   |            | NVM Done Interrupt 1. Maps the EFUSE done (NVM_DONE) status to the INT1 pin.                            | 0x1     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                     |         |          |
| 6      | NVM_IRQ_INT1    |            | NVM IRQ Interrupt 1. Maps the NVM/EFUSE IRQ status to the INT1 pin.                                     | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                     |         |          |
| 5      | UV_FLAG_INT1    |            | UV Flag Interrupt 1. UV flag interrupt map to INT1. 1 = maps the UV_FLAG_STICKY status to the INT1 pin. | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                     |         |          |
| 4      | OVER_RANGE_INT1 |            | Overrange Interrupt 1. 1 = maps the OVER_RANGE_STICKY status to the INT1 pin.                           | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                     |         |          |
| 3      | PARITY_ERR_INT1 |            | Parity Error Interrupt 1. 1 = maps the PARITY_ERR status to the INT1 pin.                               | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |
|        |                 | 0          | Disabled interrupt.                                                                                     |         |          |
| 2      | TRIPLE_TAP_INT1 |            | Triple Tap Interrupt 1. Maps the triple tap interrupt to the INT1 pin.                                  | 0x0     | R/W      |
|        |                 | 1          | Enabled interrupt.                                                                                      |         |          |

## REGISTER MAP

Table 75. Bit Descriptions for INT1\_MAP1 (Continued)

| Bits   | Bit Name        | Settings   | Description                                                                                                   | Reset   | Access   |
|--------|-----------------|------------|---------------------------------------------------------------------------------------------------------------|---------|----------|
|        |                 | 0          | Disabled interrupt.                                                                                           |         |          |
| 1      | DOUBLE_TAP_INT1 | 1 0        | Double Tap Interrupt 1. Maps the double tap interrupt to the INT1 pin. Enabled interrupt. Disabled interrupt. | 0x0     | R/W      |
| 0      | SINGLE_TAP_INT1 | 1 0        | Single Tap Interrupt 1. Maps the single tap interrupt to the INT1 pin. Enabled interrupt. Disabled interrupt. | 0x0     | R/W      |

## FIFO CONFIGURATION 0 REGISTER

Address: 0x30, Reset: 0x00, Name: FIFO\_CFG0

<!-- image -->

Table 76. Bit Descriptions for FIFO\_CFG0

| Bits   | Bit Name        | Settings   | Description                                                                                                                                                                                                                                                                   | Reset   | Access   |
|--------|-----------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | FIFO_READ_RESET |            | FIFO Read Reset. This is a debug register bit. When set, read point, write point, and read state machine are reset to default value 0x0.                                                                                                                                      | 0x0     | R/W      |
|        |                 | 0          | FIFO operates as normal.                                                                                                                                                                                                                                                      |         |          |
|        |                 | 1          | FIFO resets read pointer and write pointer.                                                                                                                                                                                                                                   |         |          |
| 6      | FIFO_CH_ID      |            | FIFO Channel ID Enable.                                                                                                                                                                                                                                                       | 0x0     | R/W      |
|        |                 | 1          | Enables prepending channel ID. When this bit is enabled, FIFO data is prepending 2-bit channel ID on the first prior its 16-bit data.                                                                                                                                         |         |          |
|        |                 | 0          | FIFO prepending channel ID disables. FIFO_DATA only provides 16-bit signed data for each channel without prepending its channel ID.                                                                                                                                           |         |          |
| [5:4]  | FIFO_MODE       |            | FIFO Mode.                                                                                                                                                                                                                                                                    | 0x0     | R/W      |
|        |                 | 00         | FIFO Disable Mode.                                                                                                                                                                                                                                                            |         |          |
|        |                 | 01         | FIFO Normal Mode.                                                                                                                                                                                                                                                             |         |          |
|        |                 | 10         | FIFO Stream Mode.                                                                                                                                                                                                                                                             |         |          |
|        |                 | 11         | FIFO Trigger Mode.                                                                                                                                                                                                                                                            |         |          |
| 3      | FIFO_EXT_TRIG   |            | FIFO External Trigger. The FIFO external trigger is used to monitor the external activity trigger. When enabled, the FIFO trigger uses the FSYNC input as its activity trigger. When disabled (default), the FIFO trigger monitors the internal activity trigger. This bit is | 0x0     | R/W      |
|        |                 | 1          | only valid in FIFO trigger mode (FIFO_MODE = 3). Enabled Interrupt. The FIFO monitor external trigger (FSYNC input pin) for an activity trigger in FIFO stream mode.                                                                                                          |         |          |
|        |                 | 0          | Disabled Interrupt. The FIFO internal trigger from the activity interrupt.                                                                                                                                                                                                    |         |          |
| [2:1]  | RESERVED        |            | Reserved.                                                                                                                                                                                                                                                                     | 0x0     | R        |
| 0      | FIFO_SAMPLES[8] |            | FIFO Samples. The FIFO samples are the number of FIFO entries that the FIFO_WATERMARK sets when the FIFO depth is larger or equal to the FIFO_SAMPLES.                                                                                                                        | 0x0     | R/W      |

## REGISTER MAP

## Table 76. Bit Descriptions for FIFO\_CFG0 (Continued)

| Bits   | Bit Name   | Settings   | Description                                                                                                                                     | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |            |            | Note that FIFO_WATERMARK is a clear on read. Once it is set, because the FIFO depth is at or larger than FIFO_SAMPLE, it must be read to clear. |         |          |

## FIFO CONFIGURATION 1 REGISTER

Address: 0x31, Reset: 0x00, Name: FIFO\_CFG1

Table 77. Bit Descriptions for FIFO\_CFG1

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|-------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_SAMPLES[7:0] |            | FIFO Samples. The FIFO samples are the number of FIFO entries that FIFO_WATERMARK sets when the FIFO depth is larger or equal to the FIFO_SAMPLES. Note that FIFO_WATERMARK is a clear on read. Once it is set, because the FIFO depth is at or larger than FIFO_SAMPLE, it must be read to clear. | 0x0     | R/W      |

## SERIAL PORT CONFIGURATION 0 REGISTER

Address: 0x32, Reset: 0x00, Name: SPT\_CFG0

<!-- image -->

Table 78. Bit Descriptions for SPT\_CFG0

| Bits   | Bit Name        | Settings   | Description                                                                     | Reset   | Access   |
|--------|-----------------|------------|---------------------------------------------------------------------------------|---------|----------|
| [7:6]  | SPT_SLOT_WIDTH  |            | Serial Port Slot Width.                                                         | 0x0     | R/W      |
|        |                 | 00         | 32 BCLKs per Slot.                                                              |         |          |
|        |                 | 01         | 16 BCLKs per Slot.                                                              |         |          |
|        |                 | 10         | 24 BCLKs per Slot.                                                              |         |          |
| 5      | SPT_BCLK_POL    |            | Serial Port Transmit BCLK Polarity.                                             | 0x0     | R/W      |
|        |                 | 0          | BCLK Normal Polarity.                                                           |         |          |
|        |                 | 1          | BCLK Inverted Polarity.                                                         |         |          |
| 4      | SPT_FSYNC_POL   |            | Serial Port FSYNC Polarity.                                                     | 0x0     | R/W      |
|        |                 | 0          | FSYNC Normal Polarity.                                                          |         |          |
|        |                 | 1          | FSYNC Inverted Polarity.                                                        |         |          |
| 3      | SPT_FSYNC_MODE  |            | Serial Port FSYNC Mode                                                          | 0x0     | R/W      |
|        |                 | 0          | Stereo. 50% duty-cycle frame clock (I 2 S, left justified, or right justified). |         |          |
|        |                 | 1          | TDM. Frame clock is single bit clock wide pulse.                                |         |          |
| [2:0]  | SPT_DATA_FORMAT |            | Serial Port Data Format.                                                        | 0x0     | R/W      |
|        |                 | 000        | Typical I 2 S Mode, Delay by 1.                                                 |         |          |
|        |                 | 001        | Left Justified, Delay by 0.                                                     |         |          |
|        |                 | 010        | Delay by 8.                                                                     |         |          |

<!-- image -->

## REGISTER MAP

## Table 78. Bit Descriptions for SPT\_CFG0 (Continued)

| Bits   | Bit Name   |   Settings | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
|        |            |        011 | Delay by 12.  |         |          |
|        |            |        100 | Delay by 16.  |         |          |

## SERIAL PORT CONFIGURATION 1 REGISTER

Address: 0x33, Reset: 0x08, Name: SPT\_CFG1

<!-- image -->

Table 79. Bit Descriptions for SPT\_CFG1

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                    | Reset   | Access   |
|--------|---------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SPT_XTRA_SAMP |            | Serial Port Selection for How to Fill Extra Samples.                                                                                                                                                                           | 0x0     | R/W      |
|        |               | 0          | Serial port outputs fresh data for one FSYNC frame and then sends zeros until the next data is ready.                                                                                                                          |         |          |
|        |               | 1          | Serial port outputs fresh data for one FSYNC frame and then repeats the same sample until the next data is ready.                                                                                                              |         |          |
| 6      | SPT_TRI_STATE |            | Serial Port Output, Tristate Enabled.                                                                                                                                                                                          | 0x0     | R/W      |
|        |               | 0          | Tristate Disabled.                                                                                                                                                                                                             |         |          |
|        |               | 1          | Tristate Enabled.                                                                                                                                                                                                              |         |          |
| [5:3]  | SPT_Y_SLOT    |            | Serial Port Time Slot Selection for Y-Axis Data. In I 2 S mode, set to 0/1 for the L/R channel on S OUT0 or 2/3 for the L/R channel on S OUT1 , respectively. In TDM mode, set to 0 to 7 to select the corresponding TDM slot. | 0x1     | R/W      |
| [2:0]  | SPT_X_SLOT    |            | Serial Port Time Slot Selection for X-Axis Data. In I 2 S mode, set to 0/1 for L/R channel on S OUT0 , or 2/3 for L/R channel on S OUT1 , respectively. In TDM mode, set to 0 to 7 to select the corresponding TDM slot.       | 0x0     | R/W      |

## SERIAL PORT CONFIGURATION 2 REGISTER

Address: 0x34, Reset: 0x1A, Name: SPT\_CFG2

<!-- image -->

## REGISTER MAP

Table 80. Bit Descriptions for SPT\_CFG2

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                         | Reset   | Access   |
|--------|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SPT_SOUT_SEL  |            | S OUT Pin Selection for I 2 S/TDM. The S OUT0 or S OUT1 pin selection for I 2 S/TDM output stream. Set to 0 for S OUT0 or 1 for S OUT1 .                                                                                            | 0x0     | R/W      |
|        |               | 0          | Serial Output on the S OUT0 Pin.                                                                                                                                                                                                    |         |          |
|        |               | 1          | Serial Output on the S OUT1 Pin.                                                                                                                                                                                                    |         |          |
| 6      | SPT_DUAL_MODE |            | Dual S OUTx Mode. Dual S OUTx mode for I 2 S/TDM output stream. When enabled, Slot 0 and Slot 1 output on S OUT0 , and Slot 2 and Slot 3 output on S OUT1 .                                                                         | 0x0     | R/W      |
|        |               | 0          | Standard Operation. Serial audio channels are output on the S OUT0 pin.                                                                                                                                                             |         |          |
|        |               | 1          | Dual Stereo Operation. In stereo mode, Channel 0 to Channel 1 are output on the S OUT0 pin and Channel 2 to Channel 3 are output on the MCLK pin.                                                                                   |         |          |
| [5:3]  | SPT_TEMP_SLOT |            | Serial Port Time Slot Selection for Temperature Data. In I 2 S mode, set to 0/1 for the L/R channel on S OUT0 or 2/3 for the L/R channel on S OUT1 , respectively. In TDM mode, set to 0 to 7 to select the corresponding TDM slot. | 0x3     | R/W      |
| [2:0]  | SPT_Z_SLOT    |            | Serial Port Time Slot Selection for Z-Axis Data. In I 2 S mode, set to 0/1 for the L/R channel on S OUT0 or 2/3 for the L/R channel on S OUT1 , respectively. In TDM mode, set to 0 to 7 to select the corresponding TDM slot.      | 0x2     | R/W      |

## SYNC AND SERIAL PORT CONFIGURATION REGISTER

Address: 0x35, Reset: 0x00, Name: SYNC\_CFG

<!-- image -->

Table 81. Bit Descriptions for SYNC\_CFG

| Bits   | Bit Name   | Settings   | Description                                                                                                   | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED   |            | Reserved.                                                                                                     | 0x0     | R        |
| 6      | SYNC_SRC   |            | SYNC Source. Sync source signal.                                                                              | 0x0     | R/W      |
|        |            | 0          | Use FSYNC pin as sync signal.                                                                                 |         |          |
|        |            | 1          | Use INT1 pin as sync signal.                                                                                  |         |          |
| [5:4]  | SYNC_MODE  |            | SYNC Mode.                                                                                                    | 0x0     | R/W      |
|        |            | 00         | No External Synchronization of DSM Path.                                                                      |         |          |
|        |            | 01         | Synchronizes DSM path operation and ODR to the external synchronization signal.                               |         |          |
|        |            | 10         | Interpolation mode provides interpolated output of the DSM path based on the external synchronization signal. |         |          |
| [3:2]  | BCLK_SRC   |            | BCLK Source.                                                                                                  | 0x0     | R/W      |
|        |            | 00         | External (Default).                                                                                           |         |          |
|        |            | 01         | Internal 512 kHz.                                                                                             |         |          |
|        |            | 10         | Internal 256 kHz.                                                                                             |         |          |
| [1:0]  | FSYNC_SRC  |            | FSYNC Source.                                                                                                 | 0x0     | R/W      |
|        |            | 00         | External (Default).                                                                                           |         |          |

## REGISTER MAP

## Table 81. Bit Descriptions for SYNC\_CFG (Continued)

| Bits   | Bit Name   |   Settings | Description      | Reset   | Access   |
|--------|------------|------------|------------------|---------|----------|
|        |            |         01 | Internal 8 kHz.  |         |          |
|        |            |         10 | Internal 16 kHz. |         |          |

## PDM CONFIGURATION REGISTER

Address: 0x36, Reset: 0x00, Name: PDM\_CFG

<!-- image -->

Table 82. Bit Descriptions for PDM\_CFG

| Bits   | Bit Name        | Settings   | Description                                                                                    | Reset   | Access   |
|--------|-----------------|------------|------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | PDM_FSYNC_SLOTB |            | PDM Channel Select. 2'b00: empty (zero). 2'b01: Channel X. 2'b10: Channel Y. 2'b11: Channel Z. | 0x0     | R/W      |
| [5:4]  | PDM_FSYNC_SLOTA |            | PDM Channel Select. 2'b00: empty (zero). 2'b01: Channel X. 2'b10: Channel Y. 2'b11: Channel Z  | 0x0     | R/W      |
| [3:2]  | PDM_SOUT0_SLOTB |            | PDM Channel Select. 2'b00: empty (zero). 2'b01: Channel X. 2'b10: Channel Y. 2'b11: Channel Z. | 0x0     | R/W      |
| [1:0]  | PDM_SOUT0_SLOTA |            | PDM Channel Select. 2'b00: empty (zero). 2'b01: Channel X. 2'b10: Channel Y. 2'b11: Channel Z. | 0x0     | R/W      |

## ACTIVITY, INACTIVITY, AND PDM CONTROL REGISTER

Address: 0x37, Reset: 0x00, Name: ACT\_INACT\_CTL

<!-- image -->

Table 83. Bit Descriptions for ACT\_INACT\_CTL

| Bits   | Bit Name      | Settings   | Description                                                                                                                           | Reset   | Access   |
|--------|---------------|------------|---------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | PDM_POL       |            | PDM Polarity. When set to 0, 0 corresponds to positive full scale and 1 corresponds to negative full scale. Set to 1 to invert.       | 0x0     | R/W      |
|        |               | 0          | PDM Normal Polarity.                                                                                                                  |         |          |
|        |               | 1          | PDM Inverted Polarity.                                                                                                                |         |          |
| 6      | ACT_INACT_HPF |            | Activity and Inactivity High-Pass Filter Enable.                                                                                      | 0x0     | R/W      |
|        |               | 0          | Disable. Unfiltered SAR data enters the activity and inactivity detectors.                                                            |         |          |
|        |               | 1          | Enable. SAR data passes through the high-pass filter per the FILTER register prior to entering the activity and inactivity detectors. |         |          |

## REGISTER MAP

## Table 83. Bit Descriptions for ACT\_INACT\_CTL (Continued)

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                       | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [5:4]  | LINKLOOP   |            | Link Loop. Enable and configuration settings for linking or looping detection modes as well as host microcontroller interrupt handling.                                                                                                           | 0x0     | R/W      |
|        |            | 00         | Default. Activity and inactivity detectors operate independently. Each detector requires its interrupt to be cleared before a new detection may occur.                                                                                            |         |          |
|        |            | 01         | Linked. Activity and inactivity detectors are linked sequentially. Each detector requires the other detector's interrupt to be cleared before a new detection may occur. Both detectors must be enabled via ACT_EN and INACT_EN to use this mode. |         |          |
|        |            | 10         | Default 2. Activity and inactivity detectors operate independently. Each requires its interrupt to be cleared before a new detection may occur.                                                                                                   |         |          |
|        |            | 11         | Looped. Activity and inactivity detectors are linked sequentially. Interrupts are generated but do not need to be cleared before a new detection may occur. Both detectors must be enabled via ACT_EN and INACT_EN to use this mode.              |         |          |
| [3:2]  | INACT_EN   |            | Inactivity Enable. Referenced or absolute (default) inactivity mode enable.                                                                                                                                                                       | 0x0     | R/W      |
|        |            | 00         | No inactivity detection enabled.                                                                                                                                                                                                                  |         |          |
|        |            | 01         | Inactivity enabled.                                                                                                                                                                                                                               |         |          |
|        |            | 10         | No inactivity detection enabled (same as 00).                                                                                                                                                                                                     |         |          |
|        |            | 11         | Referenced inactivity enabled.                                                                                                                                                                                                                    |         |          |
| [1:0]  | ACT_EN     |            | Activity Enable. This register bit enables the activity block feature. When disable, the activity block is disable, and there is no clock provided to the block.                                                                                  | 0x0     | R/W      |
|        |            | 00         | No activity detection.                                                                                                                                                                                                                            |         |          |
|        |            | 01         | Activity enabled.                                                                                                                                                                                                                                 |         |          |
|        |            | 10         | No activity detection (same as 00).                                                                                                                                                                                                               |         |          |
|        |            | 11         | Referenced activity enabled.                                                                                                                                                                                                                      |         |          |

## ACTIVITY AND INACTIVITY AND SELF TEST CONTROL REGISTER

Address: 0x38, Reset: 0x00, Name: SNSR\_AXIS\_EN

<!-- image -->

## Table 84. Bit Descriptions for SNSR\_AXIS\_EN

| Bits   | Bit Name   | Settings   | Description                                                                                                  | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | ST_MODE    |            | Self Test Mode. This bit configures the part in self test mode.                                              | 0x0     | R/W      |
|        |            | 0          | Disables ST_MODE feature.                                                                                    |         |          |
|        |            | 1          | Enables ST_MODE feature.                                                                                     |         |          |
| 6      | ST_FORCE   |            | Self Test Force Control Bit. Enables an electrostatic force applied to the mechanical                        | 0x0     | R/W      |
|        |            |            | sensor; therefore, it induces a change in the output.                                                        |         |          |
|        |            | 0          | Disables ST_FORCE feature.                                                                                   |         |          |
|        |            | 1          | Enables ST_FORCE feature.                                                                                    |         |          |
| 5      | ST_DIR     |            | Self Test Directional Bit. Flip the direction of the self test force being applied to the mechanical sensor. | 0x0     | R/W      |

## REGISTER MAP

Table 84. Bit Descriptions for SNSR\_AXIS\_EN (Continued)

| Bits   | Bit Name          | Settings   | Description                                      | Reset   | Access   |
|--------|-------------------|------------|--------------------------------------------------|---------|----------|
|        |                   | 0 1        | Disables ST_DIR feature. Enables ST_DIR feature. |         |          |
| [4:3]  | RESERVED          |            | Reserved.                                        | 0x0     | R        |
| [2:0]  | ACT_INACT_AXIS_EN |            | Activity and Inactivity Axis Enabled.            | 0x0     | R/W      |
| [2:0]  |                   | 000        | No axes enabled.                                 |         |          |
| [2:0]  |                   | 010        | Y axis enabled.                                  |         |          |
| [2:0]  |                   | 100        | Z axis enabled.                                  |         |          |
| [2:0]  |                   | 011        | X and Y axes enabled.                            |         |          |
| [2:0]  |                   | 101        | X and Z axes enabled.                            |         |          |
| [2:0]  |                   | 110        | Y and Z axes enabled.                            |         |          |
| [2:0]  |                   | 111        | X, Y, and Z axes enabled.                        |         |          |

## ACTIVITY THRESHOLD (HIGH BYTE) REGISTER

Address: 0x39, Reset: 0x00, Name: THRESH\_ACT\_H

<!-- image -->

Table 85. Bit Descriptions for THRESH\_ACT\_H

| Bits   | Bit Name         | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                    | Reset   | Access   |
|--------|------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | RESERVED         |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | R        |
| [2:0]  | THRESH_ACT[10:8] |            | Threshold Act Value. Activity threshold value. To detect activity, the ADXL380 compares the absolute value of the 12-bit (signed) SAR acceleration data with the 11-bit (unsigned) THRESH_ACT value. THRESH_ACT is set in SAR codes; the value in g depends on the measurement range setting that is selected. The 12-bit (signed) SAR is multiplied by 16 to compare (shift left toward MSB). | 0x0     | R/W      |

## ACTIVITY THRESHOLD (LOW BYTE) REGISTER

Address: 0x3A, Reset: 0x00, Name: THRESH\_ACT\_L

<!-- image -->

Table 86. Bit Descriptions for THRESH\_ACT\_L

| Bits   | Bit Name        | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                    | Reset   | Access   |
|--------|-----------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_ACT[7:0] |            | Threshold Act Value. Activity threshold value. To detect activity, the ADXL380 compares the absolute value of the 12-bit (signed) SAR acceleration data with the 11-bit (unsigned) THRESH_ACT value. THRESH_ACT is set in SAR codes; the value in g depends on the measurement range setting that is selected. The 12-bit (signed) SAR is multiplied by 16 to compare (shift left toward MSB). | 0x0     | R/W      |

## REGISTER MAP

## TIMED ACTIVITY (HIGH BYTE, BITS[23:16]) REGISTER

Address: 0x3B, Reset: 0x00, Name: TIME\_ACT\_H

<!-- image -->

Table 87. Bit Descriptions for TIME\_ACT\_H

| Bits   | Bit Name        | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|-----------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_ACT[23:16] |            | TIME_ACT Bit. Required activity time. The 24-bit activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used (TIME_ACT > 0), only sustained motion can trigger activity detection. The value in this register sets the amount of time that at least one axis must be greater than the activity threshold (set by THRESH_ACT) for an activity event to be detected. 1 LSB = 500 µs. | 0x0     | R/W      |

## TIMED ACTIVITY (MID BYTE, BITS[15:7]) REGISTER

Address: 0x3C, Reset: 0x00, Name: TIME\_ACT\_M

<!-- image -->

Table 88. Bit Descriptions for TIME\_ACT\_M

| Bits   | Bit Name       | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|----------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_ACT[15:8] |            | TIME_ACT Bit. Required activity time. The 24-bit activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used (TIME_ACT > 0), only sustained motion can trigger activity detection. The value in this register sets the amount of time that at least one axis must be greater than the activity threshold (set by THRESH_ACT) for an activity event to be detected. 1 LSB = 500 µs. | 0x0     | R/W      |

## TIMED ACTIVITY (LOW BYTE, BITS[7:0]) REGISTER

Address: 0x3D, Reset: 0x00, Name: TIME\_ACT\_L

<!-- image -->

Table 89. Bit Descriptions for TIME\_ACT\_L

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|---------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_ACT[7:0] |            | TIME_ACT Bit. Required activity time. The 24-bit activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used (TIME_ACT > 0), only sustained motion can trigger activity detection. The value in this register sets the amount of time that at least one axis must be greater than the activity threshold (set by THRESH_ACT) for an activity event to be detected. 1 LSB = 500 µs. | 0x0     | R/W      |

## REGISTER MAP

## INACTIVITY THRESHOLD (HIGH BYTE) REGISTER

Address: 0x3E, Reset: 0x00, Name: THRESH\_INACT\_H

<!-- image -->

Table 90. Bit Descriptions for THRESH\_INACT\_H

| Bits   | Bit Name           | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                   | Reset   | Access   |
|--------|--------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | RESERVED           |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                     | 0x0     | R        |
| [2:0]  | THRESH_INACT[10:8] |            | Threshold Inactivity Value. Inactivity threshold value. To detect inactivity, the ADXL380 compares the absolute value of the 12-bit (signed) SAR acceleration data with the 11-bit (unsigned) THRESH_INACT value. THRESH_INACT is set in SAR codes; the value in g depends on the measurement range setting that is selected. The 12-bit (signed) SAR is multiplied by 16 to compare (shift left toward MSB). | 0x0     | R/W      |

## INACTIVITY THRESHOLD (LOW BYTE) REGISTER

Address: 0x3F, Reset: 0x00, Name: THRESH\_INACT\_L

<!-- image -->

Table 91. Bit Descriptions for THRESH\_INACT\_L

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                   | Reset   | Access   |
|--------|-------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_INACT[7:0] |            | Threshold Inactivity Value. Inactivity threshold value. To detect inactivity, the ADXL380 compares the absolute value of the 12-bit (signed) SAR acceleration data with the 11-bit (unsigned) THRESH_INACT value. THRESH_INACT is set in SAR codes; the value in g depends on the measurement range setting that is selected. The 12-bit (signed) SAR is multiplied by 16 to compare (shift left toward MSB). | 0x0     | R/W      |

## TIMED INACTIVITY (HIGH BYTE, BITS[23:16]) REGISTER

Address: 0x40, Reset: 0x00, Name: TIME\_INACT\_H

Table 92. Bit Descriptions for TIME\_INACT\_H

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|-------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_INACT[23:16] |            | TIME_INACT Bit. Required inactivity time. The 24-bit activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used (TIME_INACT > 0), only sustained motion can trigger inactivity detection. The value in this register sets the amount of time that all axes must be lower than the inactivity threshold (set by THRESH_INACT) for an inactivity event to be detected. 1 LSB = 500 µs. | 0x0     | R/W      |

<!-- image -->

## REGISTER MAP

## TIMED INACTIVITY (MID BYTE, BITS[15:8]) REGISTER

Address: 0x41, Reset: 0x00, Name: TIME\_INACT\_M

<!-- image -->

Table 93. Bit Descriptions for TIME\_INACT\_M

| Bits   | Bit Name         | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_INACT[15:8] |            | TIME_INACT Bit. Required inactivity time. The 24-bit activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used (TIME_INACT > 0), only sustained motion can trigger inactivity detection. The value in this register sets the amount of time that all axes must be lower than the inactivity threshold (set by THRESH_INACT) for an inactivity event to be detected. 1 LSB = 500 µs. | 0x0     | R/W      |

## TIMED INACTIVITY (LOW BYTE, BITS[7:0]) REGISTER

Address: 0x42, Reset: 0x00, Name: TIME\_INACT\_L

<!-- image -->

## Table 94. Bit Descriptions for TIME\_INACT\_L

| Bits   | Bit Name        | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|-----------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_INACT[7:0] |            | TIME_INACT Bit. Required inactivity time. The 24-bit activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used (TIME_INACT > 0), only sustained motion can trigger inactivity detection. The value in this register sets the amount of time that all axes must be lower than the inactivity threshold (set by THRESH_INACT) for an inactivity event to be detected. 1 LSB = 500 µs. | 0x0     | R/W      |

## TAP THRESHOLD REGISTER

Address: 0x43, Reset: 0x00, Name: TAP\_THRESH

<!-- image -->

Table 95. Bit Descriptions for TAP\_THRESH

| Bits   | Bit Name            | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                    | Reset   | Access   |
|--------|---------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TAP_THRESH_PRESCALE |            | TAP Threshold Prescale Register. This register is eight bits and holds the threshold value for tap interrupts. The data format is unsigned; therefore, the magnitude of the tap event is compared with the value in TAP_THRESH for normal tap detection. The scale factor is 500 m g /LSB with a maximum value of 2 times the range value in gravity. A value of 0 disables both tap and double tap detection. | 0x0     | R/W      |

## REGISTER MAP

## TAP DURATION REGISTER

Address: 0x44, Reset: 0x00, Name: TAP\_DUR

<!-- image -->

Table 96. Bit Descriptions for TAP\_DUR

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TAP_DUR    |            | TAP_DUR Value. The TAP_DUR register is eight bits and contains an unsigned time value representing the maximum time that an event must be above the TAP_THRESH threshold to qualify as a tap event. The scale factor is 625 µs/LSB. | 0x0     | R/W      |

## TAP LATENCY WAIT TIME REGISTER

Address: 0x45, Reset: 0x00, Name: TAP\_LATENT

<!-- image -->

## Table 97. Bit Descriptions for TAP\_LATENT

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                       | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TAP_LATENT |            | TAP Latent Bit. The TAP_LATENT register is eight bits and contains an unsigned time value representing the wait time from the detection of a tap event to the start of the time window (defined by the window register) during which a possible second tap event can be detected. The scale factor is 1.25 ms/LSB. A value of 0 disables the double tap function. | 0x0     | R/W      |

## TAP WINDOW REGISTER

Address: 0x46, Reset: 0x00, Name: TAP\_WINDOW

<!-- image -->

## Table 98. Bit Descriptions for TAP\_WINDOW

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TAP_WINDOW |            | TAP Window. The TAP_WINDOW register is eight bits and contains an unsigned time value representing the amount of time after the expiration of the latency time (determined by the latent register) during which a second valid second tap (double tap) must be occur to be considered a valid double tap. The scale factor is 1.25 ms/LSB. | 0x0     | R/W      |

## REGISTER MAP

## TAP CONFIGURATION REGISTER

Address: 0x47, Reset: 0x00, Name: TAP\_CFG

<!-- image -->

Table 99. Bit Descriptions for TAP\_CFG

| Bits   | Bit Name      | Settings   | Description                                                              | Reset   | Access   |
|--------|---------------|------------|--------------------------------------------------------------------------|---------|----------|
| [7:3]  | RESERVED      |            | Reserved.                                                                | 0x0     | R        |
| 2      | TRIPLE_TAP_EN |            | Triple TAP Enable Bit.                                                   | 0x0     | R/W      |
|        |               | 0          | Disable Tap Enable.                                                      |         |          |
|        |               | 1          | Enable Triple Tap Feature.                                               |         |          |
| [1:0]  | TAP_AXIS      |            | TAP Axis Configuration. Selects which axis to look at for tap detection. | 0x0     | R/W      |
|        |               | 00         | X Axis.                                                                  |         |          |
|        |               | 01         | Y Axis.                                                                  |         |          |
|        |               | 10         | Z Axis.                                                                  |         |          |

## REGISTER MAP

## UNDERVOLTAGE AND OVERRANGE CONFIGURATION REGISTER

Address: 0x48, Reset: 0x00, Name: OR\_CFG

<!-- image -->

Table 100. Bit Descriptions for OR\_CFG

| Bits   | Bit Name          | Settings   | Description                                                                                                                 | Reset   | Access   |
|--------|-------------------|------------|-----------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | RESERVED          |            | Reserved.                                                                                                                   | 0x0     | R        |
| 4      | DIS_UV_DET        |            | Turns off undervoltage detector circuit that flags during prebrownout events. The default value is 0 (UV detector enabled). | 0x0     | R/W      |
|        |                   | 0          | UV Detect Normal Mode.                                                                                                      |         |          |
|        |                   | 1          | UV Detect Disabled.                                                                                                         |         |          |
| [3:2]  | RESERVED          |            | Reserved.                                                                                                                   | 0x0     | R        |
| [1:0]  | DIG_OUT_DURING_OR |            | Digital Output During an Overrange Event. Configures digital output during overrange event (not valid in PDM mode).         | 0x0     | R/W      |
|        |                   | 00         | Full-Scale Code with Correct Sign.                                                                                          |         |          |
|        |                   | 01         | Holds the previous data before overrange event.                                                                             |         |          |
|        |                   | 10         | Invalid internal value passed to digital output.                                                                            |         |          |

## REGISTER MAP

## SAR TRIGGER AND DIGITAL FILTER CONFIGURATION REGISTER

Address: 0x49, Reset: 0x00, Name: TRIG\_CFG

<!-- image -->

Table 101. Bit Descriptions for TRIG\_CFG

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                               | Reset   | Access   |
|--------|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | DEC_2X_BYPASS |            | Dec 2× Bypass. The DEC_2X_BYPASS bit controls the second stage 2× decimation filter (increases ODR by a factor of 2).                                                                                                                     | 0x0     | R/W      |
|        |               | 1          | Disables the second stage 2× decimation filter.                                                                                                                                                                                           |         |          |
|        |               | 0          | Enables the second stage 2× decimation filter (default).                                                                                                                                                                                  |         |          |
| 6      | SINC_RATE     |            | SINC Rate. SINC Rate controls the decimation rate of the first stage decimation filter, and the disabling of the second stage 2× decimation filter (increases ODR by a factor of 4).                                                      | 0x0     | R/W      |
|        |               | 0          | 32× Decimation Rate. 32× decimation rate for the first stage decimation filter, and second stage 2× decimation filter is controlled by DEC_2X_BYPASS (default).                                                                           |         |          |
|        |               | 1          | 16× Decimation Rate. 16× decimation rate for the first stage decimation filter, disable the second stage decimation filter                                                                                                                |         |          |
| 5      | IIR1_EN       |            | IIR1 Filter Enable. Enable the optional IIR1 filter. Used when low group delay mode is enabled. Repurpose the EQ filter module as an IIR1 filter. Assuming EQ_BYPASS is set under HP mode, or in RBW or LP mode, and LPF_MODE is not set. | 0x0     | R/W      |
|        |               | 0          | Disables the IIR1 filter (default).                                                                                                                                                                                                       |         |          |
|        |               | 1          | Enables the IIR1 filter.                                                                                                                                                                                                                  |         |          |
| [4:3]  | RESERVED      |            | Reserved.                                                                                                                                                                                                                                 | 0x0     | R        |
| 2      | ROUND_MODE    |            | Rounding Output Mode. Rounding mode selection for high-pass filter output.                                                                                                                                                                | 0x0     | R/W      |
|        |               | 0          | Default is truncation mode.                                                                                                                                                                                                               |         |          |
|        |               | 1          | Floor round the high-pass filter output when it gets truncated to 16 bit to minimize the DC offset introduced, which involves incrementing the data value by 1 if the signal is negative or leaving it alone if it is positive.           |         |          |
| 1      | TRIG_SRC      | 0          | TRIG Source. FSYNC. Use FSYNC pin as SAR trigger.                                                                                                                                                                                         | 0x0     | R/W      |
|        |               | 1          | INT1. Use INT1 pin as SAR trigger.                                                                                                                                                                                                        |         |          |
| 0      | TRIG_MODE     | 0          | Trigger Mode for SAR External Pin. Internal. No external trigger. SAR convert start signal generated internally (default).                                                                                                                | 0x0     | R/W      |
|        |               | 1          | External Trigger Mode. SAR convert start signal comes from pin specified by the TRIG_SRC register.                                                                                                                                        |         |          |

## REGISTER MAP

## X-AXIS SAR USER OFFSET REGISTER

Address: 0x4A, Reset: 0x00, Name: X\_SAR\_OFFSET

<!-- image -->

Table 102. Bit Descriptions for X\_SAR\_OFFSET

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|--------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | X_SAR_OFFSET |            | User X-Axis Offset Calibration. User X-axis offset calibration for low power signal path (ULP, VLP, or HS mode). Data is in twos complement format. Resolution (in m g /LSB) is equal to the resolution in the Data Register 0x15 to Data Register 0x1A divided by 8. | 0x0     | R/W      |

## Y-AXIS SAR USER OFFSET REGISTER

Address: 0x4B, Reset: 0x00, Name: Y\_SAR\_OFFSET

<!-- image -->

Table 103. Bit Descriptions for Y\_SAR\_OFFSET

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|--------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | Y_SAR_OFFSET |            | User Y-Axis Offset Calibration. User Y-axis offset calibration for low power signal path (ULP, VLP, or HS mode). Data is in twos complement format. Resolution (in m g /LSB) is equal to the resolution in the Data Register 0x15 to Data Register 0x1A divided by 8. | 0x0     | R/W      |

## Z-AXIS SAR USER OFFSET REGISTER

Address: 0x4C, Reset: 0x00, Name: Z\_SAR\_OFFSET

<!-- image -->

Table 104. Bit Descriptions for Z\_SAR\_OFFSET

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|--------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | Z_SAR_OFFSET |            | User Z-Axis Offset Calibration. User Z-axis offset calibration for low power signal path (ULP, VLP, or HS mode). Data is in twos complement format. Resolution (in m g /LSB) is equal to the resolution in the Data Register 0x15 to Data Register 0x1A divided by 8. | 0x0     | R/W      |

## X-AXIS DSM USER OFFSET REGISTER

Address: 0x4D, Reset: 0x00, Name: X\_DSM\_OFFSET

<!-- image -->

## REGISTER MAP

## Table 105. Bit Descriptions for X\_DSM\_OFFSET

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|--------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | X_DSM_OFFSET |            | User X-Axis Offset Calibration. User X-axis offset calibration for low noise signal path (HP, LP, or RBW mode). Data is in twos complement format. Resolution (in m g /LSB) is equal to the resolution in the Data Register 0x15 to Data Register 0x1A) divided by 8. | 0x0     | R/W      |

## Y-AXIS DSM USER OFFSET REGISTER

Address: 0x4E, Reset: 0x00, Name: Y\_DSM\_OFFSET

<!-- image -->

## Table 106. Bit Descriptions for Y\_DSM\_OFFSET

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                                                                                          | Reset   | Access   |
|--------|--------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | Y_DSM_OFFSET |            | User Y-Axis Offset Calibration. User Y-axis offset calibration for low noise signal path (HP, LP, or RBW mode). Data is in twos complement format. Resolution (in m g /LSB) is equal to the resolution in the Data Register 0x15 to Data Register 0x1A divided by 8. | 0x0     | R/W      |

## Z-AXIS DSM USER OFFSET REGISTER

Address: 0x4F, Reset: 0x00, Name: Z\_DSM\_OFFSET

<!-- image -->

## Table 107. Bit Descriptions for Z\_DSM\_OFFSET

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                                                                                          | Reset   | Access   |
|--------|--------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | Z_DSM_OFFSET |            | User Z-Axis Offset Calibration. User Z-axis offset calibration for low noise signal path (HP, LP, or RBW mode). Data is in twos complement format. Resolution (in m g /LSB) is equal to the resolution in the Data Register 0x15 to Data Register 0x1A divided by 8. | 0x0     | R/W      |

## DIGITAL FILTER CONFIGURATION REGISTER

Address: 0x50, Reset: 0x00, Name: FILTER

<!-- image -->

## REGISTER MAP

## Table 108. Bit Descriptions for FILTER

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                              | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | DCF_BYPASS |            | Droop Compensation Filter Bypass. This filter corrects the drooping effect of the first stage 32× decimation filter.                                                     | 0x0     | R/W      |
|        |            | 0          | Droop compensation filter is enabled.                                                                                                                                    |         |          |
|        |            | 1          | Bypass Droop Compensation Filter.                                                                                                                                        |         |          |
| 6      | EQ_BYPASS  |            | EQ Filter Bypass. Applicable to HP modes for OP_MODE. EQ filter is disabled in RBW or LP mode.                                                                           | 0x0     | R/W      |
|        |            | 0          | Normal EQ filter is in operation.                                                                                                                                        |         |          |
|        |            | 1          | Bypass EQ Filter.                                                                                                                                                        |         |          |
| [5:4]  | LPF_MODE   |            | Low-Pass Filter Mode. Second-order, low-pass filter mode. Repurpose the EQ filter module as a low-pass filter. DSM path only. EQ bypass must be set to 1 to use the LPF. | 0x0     | R/W      |
|        |            | 00         | No Low-Pass Filtering.                                                                                                                                                   |         |          |
|        |            | 01         | 1/4 × ODR.                                                                                                                                                               |         |          |
|        |            | 10         | 1/8 × ODR.                                                                                                                                                               |         |          |
|        |            | 11         | 1/16 × ODR.                                                                                                                                                              |         |          |
| 3      | HPF_PATH   |            | High-Pass Filter (HPF) Path Selection. First-order, HPF. Set to 0 to use HPF on SAR path, or 1 to use HPF on DSM path.                                                   | 0x0     | R/W      |
|        |            | 0          | HPF inserted in SAR Path.                                                                                                                                                |         |          |
|        |            | 1          | HPF inserted in DSM Path.                                                                                                                                                |         |          |
| [2:0]  | HPF_CORNER | 000        | High-Pass Filter Corner. First-order, HPF corner. No HPF.                                                                                                                | 0x0     | R/W      |
|        |            | 001        | 24.7E-4 × ODR                                                                                                                                                            |         |          |
|        |            | 010        | 6.2084E-4 × ODR                                                                                                                                                          |         |          |
|        |            | 011        | 1.5545E-4 × ODR                                                                                                                                                          |         |          |
|        |            | 101        | 0.0954E-4 × ODR                                                                                                                                                          |         |          |
|        |            | 110        | 0.0238E-4 × ODR                                                                                                                                                          |         |          |

## REGISTER MAP

## USER TEMPERATURE SENSOR CONTROL REGISTERS

Address: 0x55, Reset: 0x00, Name: USER\_TEMP\_SENS\_0

<!-- image -->

Table 109. Bit Descriptions for USER\_TEMP\_SENS\_0

| Bits   | Bit Name         | Settings   | Description                                                                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RESERVED         |            | Reserved.                                                                                                                                                                                                                                                                                               | 0x0     | R        |
| [5:0]  | USER_TEMP_OFFSET |            | User Temperature Offset Trim. When USER_TEMP_TRIM_EN is set high, the USER_TEMP_OFFSET overrides the default NVM trim settings. Data is in twos complement format. The significance of USER_TEMP_OFFSET, Bit 0, matches the significance of TDATA_x, Bit 2, so the offset trim step size is 4 LSB/step. | 0x0     | R/W      |

Address: 0x56, Reset: 0x00, Name: USER\_TEMP\_SENS\_1

Table 110. Bit Descriptions for USER\_TEMP\_SENS\_1

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                 | Reset   | Access   |
|--------|-------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | USER_TEMP_TRIM_EN | 0          | User Temperature Offset Trim. When USER_TEMP_TRIM_EN is set high, the USER_TEMP_OFFSET and USER_TEMP_SENS override the default NVM trim settings. Normal Operation (Temperature Sensitivity and Offset Trim Default Value).                                                 | 0x0     | R/W      |
| 6      | HIGH_GAIN_TEMP    | 0 1        | High Gain Temp Enable. Set to 1 to configure the temperature sensor to higher sensitivity (LSB/°C) mode. Normal Operation Mode. Temperature sensor sensitivity is 10.2 LSB/°C. Temp Sensor Higher Sensitivity (LSB/°C) Mode. Temperature sensor sensitivity is 16.5 LSB/°C. | 0x0     | R/W      |
| 5      | RESERVED          |            | Reserved.                                                                                                                                                                                                                                                                   | 0x0     | R        |
| [4:0]  | USER_TEMP_SENS    |            | User Temperature Sensitivity Trim. When USER_TEMP_TRIM_EN is set high, the USER_TEMP_SENS overrides the default NVM trim settings. Data is in twos complement format. The temperature sensitivity trim step size is 1/128 = 0.78125% per step.                              | 0x0     | R/W      |

## REGISTER MAP

## MISO AND GAIN SCALER CONFIGURATION REGISTER

Address: 0x58, Reset: 0x00, Name: MISO

<!-- image -->

Table 111. Bit Descriptions for MISO

| Bits   | Bit Name           | Settings   | Description                                                                                                              | Reset   | Access   |
|--------|--------------------|------------|--------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED           |            | Reserved.                                                                                                                | 0x0     | R        |
| 6      | GAIN_SCALER_BYPASS |            | Bypass Gain Scaler in DSM Path.                                                                                          | 0x0     | R/W      |
| [5:2]  | RESERVED           |            | Reserved.                                                                                                                | 0x0     | R        |
| 1      | MISO_ASEL0_PD      | 0 1        | MISO Pad Pull-Down. Enables a weak pull-down path (MΩ) on MISO to avoid pin floating. Normal Mode. Enable Pad Pull-Down. | 0x0     | R/W      |
| 0      | MISO_ASEL0_DRV     | 0          | MISO Pad Drive. Enables stronger output driver on MISO line. Recommended for high speed SPI operation. Normal Mode.      | 0x0     | R/W      |

## SOUT0 PAD CONTROL REGISTER

Address: 0x59, Reset: 0x00, Name: SOUT0

<!-- image -->

## Table 112. Bit Descriptions for SOUT0

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                     | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | RESERVED   |            | Reserved.                                                                                                                                                                                       | 0x0     | R        |
| 1      | SOUT0_PD   |            | SOUT0 Pad Pull-Up Disable. By default, an internal weak pull-up (MΩ) is enabled to avoid pin floating. Set this bit to 1 to disable the pull-up driver (recommended in I 2 S/TDM tristate mode) | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                                                                                               |         |          |
|        |            | 1          | Disable Pad Pull-Up.                                                                                                                                                                            |         |          |
| 0      | SOUT0_DRV  |            | SOUT Pad Drive. Enables stronger output driver on S OUT0 line. Recommended for high speed I 2 S/TDM/PDM operation.                                                                              | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                                                                                               |         |          |
|        |            | 1          | Enable Strong Pad Drive Strength.                                                                                                                                                               |         |          |

## REGISTER MAP

## MCLK PAD REGISTER

Address: 0x5A, Reset: 0x00, Name: MCLK

<!-- image -->

Table 113. Bit Descriptions for MCLK

| Bits   | Bit Name   | Settings   | Description                                                                                                      | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | RESERVED   |            | Reserved.                                                                                                        | 0x0     | R        |
| 1      | MCLK_PD    |            | MCLK Pad Pull-Down. Enables a weak pull-down path (MΩ) on MCLK to avoid pin floating.                            | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                |         |          |
|        |            | 1          | Enable Pad Pull-Down.                                                                                            |         |          |
| 0      | MCLK_DRV   |            | MCLK Pad Drive. Enables stronger output driver on MCLK line. Recommended for high speed I 2 S/TDM/PDM operation. | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                |         |          |
|        |            | 1          | Enable Pad Drive.                                                                                                |         |          |

## BCLK PAD REGISTER

Address: 0x5B, Reset: 0x00, Name: BCLK

<!-- image -->

Table 114. Bit Descriptions for BCLK

| Bits   | Bit Name   | Settings   | Description                                                                                                      | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | RESERVED   |            | Reserved.                                                                                                        | 0x0     | R        |
| 1      | BCLK _PD   |            | BCLK Pad Pull-Down. Enables a weak pull-down path (MΩ) on BCLK to avoid pin floating.                            | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                |         |          |
|        |            | 1          | Enable Pad Pull-Down.                                                                                            |         |          |
| 0      | BCLK_DRV   |            | BCLK Pad Drive. Enables stronger output driver on BCLK line. Recommended for high speed I 2 S/TDM/PDM operation. | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                |         |          |
|        |            | 1          | Enable Pad Drive.                                                                                                |         |          |

## REGISTER MAP

## FSYNC PAD AND RESYNC CONFIGURATION REGISTER

Address: 0x5C, Reset: 0x00, Name: FSYNC

<!-- image -->

Table 115. Bit Descriptions for FSYNC

| Bits   | Bit Name    | Settings   | Description                                                                                                                                                                                                                                                                                  | Reset   | Access   |
|--------|-------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SYNC_RESYNC |            | Force resync when user must maintain the same phase relationship. Force a resynchronization of the internal datapath logic to ensure consistent phase behavior of data output. Valid when using EXT_SYNC or AUDIO_MODE only. Toggle this bit to 1 then back to 0 to force resynchronization. | 0x0     | R/W      |
| [6:2]  | RESERVED    |            | Reserved.                                                                                                                                                                                                                                                                                    | 0x0     | R        |
| 1      | FSYNC_PD    |            | FSYNC Pad Pull-Down. Enables a weak pull-down path (MΩ) on FSYNC to avoid pin floating.                                                                                                                                                                                                      | 0x0     | R/W      |
|        |             | 0          | Normal Operation.                                                                                                                                                                                                                                                                            |         |          |
|        |             | 1          | Enable Pad Pull-Down.                                                                                                                                                                                                                                                                        |         |          |
| 0      | FSYNC_DRV   |            | FSYNC Pad Drive. Enables stronger output driver on FSYNC line. Recommended for high speed I 2 S/TDM/PDM operation.                                                                                                                                                                           | 0x0     | R/W      |
|        |             | 0          | Normal Operation.                                                                                                                                                                                                                                                                            |         |          |
|        |             | 1          | Enable Strong Pad Drive Strength.                                                                                                                                                                                                                                                            |         |          |

## REGISTER MAP

## INT0 PAD CONTROL REGISTER

Address: 0x5D, Reset: 0x00, Name: INT0

<!-- image -->

## Table 116. Bit Descriptions for INT0

| Bits   | Bit Name   | Settings   | Description                                                                                                      | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | INT0_POL   |            | INT0 Polarity. Configures whether the INT0 pin operates in active high (B7 low) or active low (B7 high) mode.    | 0x0     | R/W      |
|        |            | 0          | INT0 Active High Mode (Default)                                                                                  |         |          |
|        |            | 1          | INT0 Active Low Mode.                                                                                            |         |          |
| [6:2]  | RESERVED   |            | Reserved.                                                                                                        | 0x0     | R        |
| 1      | INT0 _PD   |            | INT0 Pad Pull-Down. Enables a weak pull-down path (MΩ) on INT0 to avoid pin floating.                            | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                |         |          |
|        |            | 1          | Enable Pad Pull-Down.                                                                                            |         |          |
| 0      | INT0_DRV   |            | INT0 Pad Drive. Enables stronger output driver on INT0 line. Recommended if the interrupt pin has heavy loading. | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                |         |          |
|        |            | 1          | Enable Strong Pad Drive Strength.                                                                                |         |          |

## REGISTER MAP

## INT1 PAD CONTROL REGISTER

Address: 0x5E, Reset: 0x00, Name: INT1

<!-- image -->

Table 117. Bit Descriptions for INT1

| Bits   | Bit Name   | Settings   | Description                                                                                                      | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | INT1_POL   |            | INT1 Polarity. Configures whether the INT1 pin operates in active high (B7 low) or active low (B7 high) mode.    | 0x0     | R/W      |
|        |            | 0          | INT1 Active High Mode (Default).                                                                                 |         |          |
|        |            | 1          | INT1 Active Low Mode.                                                                                            |         |          |
| [6:2]  | RESERVED   |            | Reserved.                                                                                                        | 0x0     | R        |
| 1      | INT1_PD    |            | INT1 Pad Pull-Down. Enables a weak pull-down path (MΩ) on INT1 to avoid pin floating.                            | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                |         |          |
|        |            | 1          | Enable Pad Pull-Down.                                                                                            |         |          |
| 0      | INT1_DRV   |            | INT1 Pad Drive. Enables stronger output driver on INT1 line. Recommended if the interrupt pin has heavy loading. | 0x0     | R/W      |
|        |            | 0          | Normal Operation.                                                                                                |         |          |
|        |            | 1          | Enable Strong Pad Drive Strength.                                                                                |         |          |

## APPLICATIONS INFORMATION

## APPLICATION EXAMPLES

This section includes several application examples and initialization sequences for the ADXL380. Use these sequences as a starting point and modify these sequences to suit individual application requirements.

## DEVICE CONFIGURATION

All configuration register writes must be completed with the ADXL380 in standby mode. The only exception to this is the activity and inactivity threshold registers (Register 0x39, Register 0x3A, Register 0x3E, and Register 0x3F). These registers must be set after entering the desired operation mode (see the OP\_MODE register, Register 0x26). See the following sections for example initialization sequences.

Settings for each of the registers vary based on application requirements. For more information, see the Analog Devices Device ID Register section through the INT1 Pad Control Register section.

## Start-Up Routine

The following start-up routine shows the most basic initialization sequence to start receiving data from the device (via SPI or I 2 C). Before sending this sequence, verify that SPI or I 2 C communication is working correctly by reading Register 0x00 to confirm that the correct response (0xAD) is received.

1. Write 0xF0 to Register 0x27 (DIG\_EN).
- Enables x, y, z, and temperature channels.
2. Write 0x0C to Register 0x26 (OP\_MODE).
- Enables HP mode.

## Example: FIFO Mode

The built-in FIFO can be enabled with the following example sequence:

1. Read 0x11 (STATUS0).
- Clears any FIFO status flag. Additionally, any other STATUS words can be read.
2. Write 0x78 to Register 0x27 (DIG\_EN).
- Enables x, y, and z channels and enables FIFO mode. Data will not start accumulating in the FIFO until standby mode is exited.
3. Write 0x60 to Register 0x30 (FIFO\_CFG0).
- Enables FIFO channel ID and FIFO stream mode.
4. Write 0x0C to Register 0x31 (FIFO\_CFG1).
- Sets FIFO\_SAMPLES (Register 0x30, Bit 0 and Register 0x31, Bits[7:0]) to 12. The FIFO\_WATERMARK bit (Register 0x11, Bit 3) asserts when four full samples (X, Y, and Z) are stored in the FIFO.
- This value can be changed to fit the application needs.
5. Write 0x08 to Register 0x2B (INT0\_MAP0).
- Maps the FIFO\_WATERMAK bit (Register 0x11, Bit 3) to the INT0 pin.
6. Write 0x01 to Register 0x58 (MISO).
- Increases drive strength of the MISO line which is recommended for high-speed SPI operation.
7. Write 0x02 to Register 0x26 (OP\_MODE).
- Enables ULP mode. Data now starts accumulating in the FIFO.

After entering ULP mode, use the watermark interrupt to trigger reading data from the FIFO. Read FIFO\_ENTRIES (Register 0x1E, Bits[7:0] and Register 0x1F, Bit 0) to determine the number of samples that are currently in the FIFO before each FIFO read. Use a multibyte read of Register 0x1D (FIFO\_DATA) to read the entire contents of the FIFO. Then, read the FIFO\_WATERMARK bit in the STATUS0 register. If needed, all the STATUS words can be read in a single multibyte read.

## Example: I 2 S Mode

I 2 S protocol for audio data is suitable for obtaining high speed, synchronous accelerometer data. Because latency is often important in audio applications, it is most common to set the system clock to 768 kHz as described in the Low Latency Mode section. This setting of the system clock requires setting up the clock divider (EXT\_CLK\_RATE, Register 0x25, Bits[7:4]) such that the BCLK divides down to 768 kHz.

See the example sequence that follows for a 3.072 MHz BCLK and 48 kHz FSYNC:

1. Write 0x00 to Register 0x32 (SPT\_CFG0).
- Sets the word width to 32 bits.
- Configures the device to expect stereo FSYNC (50% duty cycle).
2. Write 0x88 to Register 0x33 (SPT\_CFG1).
- Sets time slots for x-axis and y-axis data-words.
- Sets the output to repeat samples if ODR &lt; FSYNC rate.
3. Write 0x5A to Register 0x34 (SPT\_CFG2).
- Sets time slots for z-axis data-word.
4. Write 0x80 to Register 0x35 (SYNC\_CFG). ► Sets BCLK and FSYNC source (external).
5. Optional: write 0x01 to Register 0x59 (S OUT0 ) and 0x01 to Register 0x5A (MCLK).
- Increases drive strength of the data output pins.
6. Write 0xC0 to Register 0x49 (TRIG\_CFG).
- Sets the internal decimation and filter bypasses to select the output data rate of 48 kHz.
7. Write 0x32 to Register 0x25 (CLK\_CTRL).
- Sets the external clock and sets the clock divider (EXT\_CLK\_RATE is divide by 4), which divides the 3.072 MHz BCLK down to the expected system clock (768 kHz).
8. Write 0x40 to Register 0x50 (FILTER).

## APPLICATIONS INFORMATION

- Sets LPF and HPF settings and disables the EQ filter.
9. Write 0x74 to Register 0x27 (DIG\_EN).
- Enables x, y, and z channels and sets the DOUBLE\_SPEED bit in the DIG\_EN register (Register 0x27, Bit 2), which is required for low latency mode.
10. Write 0x1C to Register 0x26 (OP\_MODE).
- Enables HP mode and audio mode.

## Example: TDM Mode

Similar to the I 2 S protocol, the ADXL380 supports TDM protocol communication. Because latency is often important in audio applications, it is most common to set the ADXL380 system clock to 768 kHz as described in the Low Latency Mode section, which requires setting up the clock divider (EXT\_CLK\_RATE, Register 0x25, Bits[7:4]) such that the BCLK divides down to 768 kHz.

See the example sequence that follows for a 6.144 MHz BCLK and 48 kHz FSYNC:

1. Write 0x08 to Register 0x32 (SPT\_CFG0).
- Sets the word width to 32 bits.
- Configures the device to expect a sync pulse that is a single bit clock wide.
2. Write 0x88 to Register 0x33 (SPT\_CFG1).
- Sets time slots for x-axis and y-axis data-words.
- Sets the output to repeat samples if ODR &lt; FSYNC rate.
3. Write 0x1A to Register 0x34 (SPT\_CFG2).
- Sets time slots for z-axis data-word.
4. Write 0x80 to Register 0x35 (SYNC\_CFG).
- Sets BCLK and FSYNC source (external).
5. Optional: write 0x01 to Register 0x59 (S OUT0 ) and 0x01 to Register 0x5A (MCLK).
- Increases drive strength of the data output pins.
6. Write 0xC0 to Register 0x49 (TRIG\_CFG).
- Sets the internal decimation and filter bypasses to select the output data rate of 48 kHz.
7. Write 0x52 to Register 0x25 (CLK\_CTRL).
- Sets the external clock and sets the clock divider (EXT\_CLK\_RATE is divide by 8), which divides the 6.144 MHz BCLK down to the expected system clock (768 kHz).
8. Write 0x40 to Register 0x50 (FILTER).
- Sets LPF and HPF settings and disables the EQ filter.
9. Write 0x74 to Register 0x27 (DIG\_EN).
- Enables x, y, and z channels and sets the DOUBLE\_SPEED bit in the DIG\_EN register (Register 0x27, Bit 2), which is required for low latency mode.
10. Write 0x1C to Register 0x26 (OP\_MODE).
- Enables HP mode and audio mode.

## Example: PDM Mode

The PDM bypasses the digital filters and offers the best performance in terms of latency. Additional filtering and decimation may be required at the system level. See the example initialization sequence that follows:

1. Write 0x39 to Register 0x36 (PDM\_CFG).
- Configures x-data in Slot A, and y-data in Slot B (S OUT0 pin).
- Configures z-data in Slot A (FSYNC pin).
2. Optional: write 0x01 to Register 0x59 (SOUT0) and 0x01 to Register 0x5C (FSYNC).
- Increases drive strength of the data output pins.
3. Write 0x02 to Register 0x25 (CLK\_CTRL).
- Sets BCLK pin as the external clock source.
- Provide an external clock of 768 kHz on the BCLK pin. If a higher clock rate is required, choose an external clock divider such that the system clock remains at 768 kHz. For example, with a 6.144 MHz external clock, set EXT\_CLK\_RATE (Register 0x25, Bits[7:4]) to divide by 8.
4. Write 0x74 to Register 0x27 (DIG\_EN).
- Enables x, y, and z channels and sets the DOUBLE\_SPEED bit in the DIG\_EN register (Register 0x27, Bit 2), which is required for low latency mode.
5. Write 0x6C to Register 0x26 (OP\_MODE).
- Enables HP mode and enables PDM mode.

## Example: External Sync Mode

External synchronization allows the user to synchronize acceleration sampling to an external synchronization signal. This feature is only supported for the high performance signal chain (HP, RBW, or LP operational modes). In order to enable the external sync with the internal clock mode follow these steps:

1. Optional: write 0x00 to Register 0x25 (CLK\_CTRL).
- This setting configures the ADXL380 to use the internal clock. If an external clock is desired, write 0b10 to the CLK\_SRC bits (Register 0x25, Bits[1:0]). See the External Synchronization section for more details.
2. Write 0x10 to register 0x35 (SYNC\_CFG).
- SYNC\_MODE = 1. This setting synchronizes the output data rate of the ADXL380 with the external sync signal.
3. Write 0x70 to Register 0x27 (DIG\_EN).
- Enables x, y, and z channels.
4. Write 0x0C to Register 0x26 (OP\_MODE).
- Enables HP mode.

## APPLICATIONS INFORMATION

## Example: Heart Sounds Mode

The ADXL380 has a heart sounds mode that optimizes performance and power consumption. Heart sounds mode is a single channel mode (z-axis only) that has low noise density while maintaining low power consumption (see Table 1). Heart sounds mode can be activated with the following example sequence:

1. Write 0x10 to Register 0x27 (DIG\_EN).
- Enables z channel only.
2. Perform any configuration writes to the HPF settings if desired.
3. Write 0x01 to Register 0x26 (OP\_MODE).
- Enables HS mode.

## Example: Activity and Inactivity Detection Mode

The ADXL380 features built-in logic that detects activity (presence of acceleration more than a threshold) and inactivity (lack of acceleration more than a threshold). Activity and inactivity events can be used as triggers to manage the accelerometer mode of operation, trigger an interrupt to a host processor, and/or autonomously drive a motion switch.

See the example sequence that follows to configure activity and inactivity detection:

1. Write 0xA0 to Register 0x2B (INT0\_MAP0) and 0x00 to Register 0x2C (INT0\_MAP1) to map the activity interrupt to the INT0 pin.
2. Write 0x40 to Register 0x2D (INT1\_MAP0) and 0x00 to Register 0x2E (INT1\_MAP1), to map the inactivity interrupt to the INT1 pin.
3. Write 0x05 to Register 0x37 (ACT\_INACT\_CTL) to enable activity and inactivity detection.
4. Write 0x03 to Register 0x38 (SNSR\_AXIS\_EN) to enable x-axis and y-axis for activity and inactivity detection.
5. Write 0x00 to Register 0x3B (TIME\_ACT\_H), 0x00 to Register 0x3C (TIME\_ACT\_M), and 0xC8 to Register 0x3D (TIME\_ACT\_L) to set the activity time to 100 ms.
6. Write 0x00 to Register 0x40 (TIME\_INACT\_H), 0x00 to Register 0x41 (TIME\_INACT\_M), and 0xC8 to Register 0x42 (TIME\_IN-ACT\_L) to set the inactivity time to 100 ms.
7. Write 0x02 to Register 0x26 (OP\_MODE) to enable ULP mode.
8. Write 0x01 to Register 0x39 (THRESH\_ACT\_H) and 0x00 to Register 0x3A (THRESH\_ACT\_L) to set the activity threshold to 500 m g . Note that the sensitivity for the ULP range must be calculated using the 12-bit SAR ADC (for more details on low-power signal path, see Figure 1). For the ±4 g range, this results in a sensitivity of: 2 12 / (4 g × 2) = 512 LSB/ g . Because THRESH\_ACT = 0x100, the activity threshold is calculated as follows: 2 8 / 512 (LSB/ g ) = 500 m g .
9. Write 0x00 to Register 0x3E (THRESH\_INACT\_H) and 0x80 to Register 0x3F (THRESH\_INACT\_L) to set the inactivity threshold to 250 m g .

## Example: Tap Detection Mode

The ADXL380 have a built-in single, double, and triple tap detection. The tap threshold, duration, window, and latency can all be configured to fit the application needs (see Figure 73).

See the example sequence that follows to configure tap detection:

1. Write 0x01 to Register 0x2C (INT0\_MAP1). ► Maps the single tap detect interrupt to the INT0 pin.
2. Write 0x03 to Register 0x2E (INT1\_MAP1).
- Maps the double and triple tap detect interrupts to the INT1 pin. When multiple interrupt functions are mapped to the same interrupt pin, the logical OR of the two functions determines when the interrupt is asserted. A read of Register 0x12 (STATUS1) can determine which tap event (double or triple) has occurred.
3. Write 0x80 to Register 0x43 (TAP\_THRESH) to set the tap detect threshold to 4 g .
4. Write 0x40 to Register 0x44 (TAP\_DUR) to set the tap duration to 40 ms.
5. Write 0x20 to Register 0x45 (TAP\_LATENT) to set the latency time to 40 ms.
- A value of 0x00 in this register disables double and triple tap detection.
6. Write 0x7D to Register 0x46 (TAP\_WINDOW) to set the tap window duration to 320 ms, which sets the duration time where additional taps can be detected (second or third).
7. Write 0x06 to Register 0x48 (TAP\_CFG).
- This enables triple tap detection and sets the z-axis as the active tap detection axis.
8. Write 0x70 to Register 0x27 (DIG\_EN).
- Enables x, y, and z channels.
9. Write 0x03 to Register 0x26 (OP\_MODE).
- Enables VLP mode.

## APPLICATIONS INFORMATION

## Example: Implementing Free Fall Detection

The ADXL380 has built-in, free fall detection using an inactivity interrupt.

When an object is in true free fall, acceleration on all axes is 0 g . Therefore, free fall detection is achieved by looking for acceleration on all axes to fall to less than a certain threshold (close to 0 g ) for a certain amount of time. The inactivity detection functionality, when used in absolute mode, does exactly this.

To use inactivity to implement free fall detection, set the value in the THRESH\_INACT\_x register (Register 0x3E and Register 0x3F) to the desired free fall threshold. Values between 300 m g and 600 m g are recommended; the register setting for these values varies based on the g range setting of the ADXL380, as follows:

THRESH\_INACT\_x =

Threshold Value ( g ) × Scale Factor (LSB per g )

Set the value in the TIME\_INACT\_x register (Register 0x40 through Register 0x42) to implement the minimum amount of time that the acceleration on all axes must be less than the free fall threshold to generate a free fall condition. Values between 100 ms and 350 ms are recommended; the register setting for this varies based on the output data rate.

TIME\_INACT\_x = Time (sec) × Data Rate (Hz)

When a free fall condition is detected, the inactivity status is set to 1, and, if the function is mapped to an interrupt pin (INT0 or INT1), an inactivity interrupt triggers on that pin.

## APPLICATIONS INFORMATION

## POWER SUPPLY REQUIREMENTS

The ADXL380 operates using supply voltage rails ranging from 2.25 V to 3.6 V. The operating voltage range (V S ) specified in Table 1 ranges from 2.25 V to 3.6 V to account for inaccuracies and transients of up to ±10% on the supply voltage. When power cycling the ADXL380, it is highly recommended to fully discharge the device to ground level (V S = 0 V) on each power cycle. If this is not possible, care must be taken regarding the following specifications:

- Supply reset threshold (V RESET )
- Hold time
- Rise time

## Supply Reset Threshold

During start-up or power cycling of the ADXL380, V S must always be started up from less than V RESET . When the ADXL380 is operating, any time power is removed from the ADXL380 or falls to less than 2.25 V, V S must be discharged lower than V RESET .

## Hold Time

To ensure a successful power-on reset (POR), V S must be held to less than V RESET for at least 1 ms before reapplying the supply to the ADXL380 (see Figure 79).

## Rise Time

The supply voltage rise time is defined as the time from 0 V to 90% of V S , which is true regardless of what supply voltage is used (see Figure 79).

Figure 79. POR and Start-Up Requirements

<!-- image -->

To enable supply discharge, it is recommended to power the ADXL380 from a microcontroller general-purpose input and output (GPIO), connect a shutdown discharge switch to the supply, or use a voltage regulator with a shutdown discharge feature.

Following POR, the output requires 2 ms to settle after entering measurement mode.

## APPLICATIONS INFORMATION

## INTERRUPTS

Several of the built-in functions of the ADXL380 can trigger interrupts to alert the host processor of certain status conditions. See the Interrupt Pins section for further details.

## Interrupt Pins

Interrupts can be mapped to either (or both) of two designated output pins, INT0 and INT1. All functions can be used simultaneously. If multiple interrupts are mapped to one pin, the OR combination of the interrupts determines the status of the pin.

If no functions are mapped to an interrupt pin, that pin is automatically configured to a high impedance (high-Z) state. The pins are also placed in the high-Z state upon a reset.

When a certain status condition is detected, the pin that condition is mapped to is activated. The configuration of the pin is active

Table 118. Interrupt Pin Digital Output

|                                                                                                                                                      |                                                                | Limit 1          | Limit 1           |           |
|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|------------------|-------------------|-----------|
| Parameter                                                                                                                                            | Test Conditions                                                | Min              | Max               | Unit      |
| Digital Output Low Level Output Voltage (V OL ) High Level Output Voltage (V OH ) Low Level Output Current (I OL ) High Level Output Current (I OH ) | I OL = 500 µA I OH = -300 µA V OL = V OL, max V OH = V OH, min | 0.9 × V DDIO 500 | 0.1 × V DDIO -300 | V V µA µA |

high by default so that when it is activated, the pin goes high. However, this configuration can be switched to active low by setting the INTx\_POL bit in Register 0x5D, Bit 7 and Register 0x5E, Bit 7.

The INT pins can be connected to the interrupt input of a host processor where interrupts are responded to with an interrupt routine.

Both interrupt pins are push-pull low impedance pins with an output impedance of 50 Ω (typical) when being driven and digital output specifications, as shown in Table 118. Both pins have bus keepers when the pins are not internally driven.

To prevent interrupts from being falsely triggered during configuration, disable interrupts while their settings, such as thresholds, timings, or other values, are configured.

## APPLICATIONS INFORMATION

## USING AN EXTERNAL CLOCK

An external clock can be used to improve clock frequency accuracy or to enable additional features (for example, interpolation sync). The register CLK\_CTRL (Register 0x25) is used to set the external clock features.

The external clock can be provided on either MCLK or BCLK. The CLK\_SRC bits (Bits[1:0]) must be set to match the chosen clock source (internal, MCLK, or BCLK).

The order of operation for external clock usage is as follows:

1. Power on the ADXL380.
2. Set the CLK\_CTRL register (Register 0x25) to the desired value.
3. Enable acceleration and temperature channels by writing to the MODE\_CHANNEL\_EN bits in the DIG\_EN register (Register 0x27, Bits[7:4]).
4. Set the ADXL380 to the desired operational mode (HP, RBW, LP, or so on) by writing to the OP\_MODE bits in the OP\_MODE register (Register 0x26, Bits[3:0]).

The clock must be an integer multiple of the 512 kHz nominal clock frequency such that it can be divided down to fit the intended nominal clock frequency by setting the internal divider (EXT\_CLK\_RATE bits in the CLK\_CTRL register (Register 0x25, Bits[7:4]). The EXT\_CLK\_RATE bits must be set to the appropriate divider according to Table 119. The external clock must be divided down to the expected system clock (512 kHz if using HP, RBW, or LP modes or 256 kHz if using VLP, ULP, HS modes). See Table 16 for more information.

Table 119. External Clock Value Input and Corresponding Divider Settings (Register 0x25)

|   External Clock Value (MHz) | Divider Value   | EXT_CLK_RATE   |
|------------------------------|-----------------|----------------|
|                        0.512 | No Divider      | 4'b0000        |
|                        1.024 | Divide by 2     | 4'b0001        |
|                        1.536 | Divide by 3     | 4'b0010        |
|                        2.048 | Divide by 4     | 4'b0011        |
|                        3.072 | Divide by 6     | 4'b0100        |
|                        4.096 | Divide by 8     | 4'b0101        |
|                        6.144 | Divide by 12    | 4'b0110        |
|                        8.192 | Divide by 16    | 4'b0111        |
|                       12.288 | Divide by 24    | 4'b1000        |

Note that when the DOUBLE\_SPEED bit in the DIG\_EN register (Register 0x27, Bit 2) is set to 1, the external clock input must be double the value in Table 119.

## MECHANICAL CONSIDERATIONS FOR MOUNTING

Mount the ADXL380 on the PCB in a location that is close to a hard mounting point on the PCB to the case. Mounting the ADXL380 at an unsupported PCB location, as shown in Figure 80, can result in large, apparent measurement errors due to undampened PCB vibration. Locating the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is more than the mechanical sensor resonant frequency of the accelerometer and, therefore, effectively invisible to the accelerometer. Multiple mounting points, close to the sensor, and/or a thicker PCB can also help to reduce the effect of system resonance on the performance of the sensor.

Figure 80. Incorrectly Placed Accelerometers

<!-- image -->

## PCB FOOTPRINT

Figure 81 shows the recommended PCB footprint. The inner pads represent the ADXL380 pads (0.40 mm × 0.28 mm). The outer pads (0.50 mm × 0.38 mm) represent the footprint on the PCB (PCB pads). To minimize package level stress on the ADXL380, the following guidelines are outlined:

- All PCB pad dimensions must match the dimensions shown in Figure 81.
- PCB traces must be symmetric around the ADXL380, which means that the trace width must match the horizontally opposite traces and vertically opposite traces to minimize package stress when exposed to changing temperatures.
- Do not place a ground pad under the ADXL380.

Figure 81. Recommended PCB Footprint, Inner Pads Represent Pads on the ADXL380 Package, Outer Pads Represent the Footprint on the PCB, and All Dimensions in Millimeters

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description     |
|--------------------------|----------------|-------------------------|
| CC-14-3                  | LGA            | 14-Lead Land Grid Array |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1           | Temperature Range   | Package Description   | Packing Quantity   | Package Option   |
|-------------------|---------------------|-----------------------|--------------------|------------------|
| ADXL380-1BCCZ-RL  | -40°C to +125°C     | 14-Terminal LGA       | Reel, 5000         | CC-14-3          |
| ADXL380-1BCCZ-RL7 | -40°C to +125°C     | 14-Terminal LGA       | Reel, 1500         | CC-14-3          |
| ADXL380-2BCCZ-RL  | -40°C to +125°C     | 14-Terminal LGA       | Reel, 5000         | CC-14-3          |
| ADXL380-2BCCZ-RL7 | -40°C to +125°C     | 14-Terminal LGA       | Reel, 1500         | CC-14-3          |

## MODELS, MEASUREMENT RANGE, AND COMMUNICATIONS INTERFACE

Table 120. Models, Measurement Range, and Communications Interface

| Model 1           | Measurement Range ( g )   | Communications Interface   |
|-------------------|---------------------------|----------------------------|
| ADXL380-1BCCZ-RL7 | ±4, ±8, ±16               | SPI                        |
| ADXL380-1BCCZ-RL  | ±4, ±8, ±16               | SPI                        |
| ADXL380-2BCCZ-RL7 | ±4, ±8, ±16               | I 2 C                      |
| ADXL380-2BCCZ-RL  | ±4, ±8, ±16               | I 2 C                      |

## EVALUATION BOARDS

Table 121. Evaluation Boards

| Model 1         | Description                          |
|-----------------|--------------------------------------|
| EVAL-ADXL380-1Z | Breakout Board for the SPI Variant   |
| EVAL-ADXL380-2Z | Breakout Board for the I 2 C Variant |

<!-- image -->