<!-- lastmod 2024-11-04 -->
<!-- image -->

## Micropower, 3-Axis, ±2 g /±4 g /±8 g Digital Output MEMS Accelerometer

## FEATURES

- Supply voltage range
- Single-cell battery operation: 1.1 V to 3.6 V
- Internal power supply regulation for high PSRR
- Ultralow power
- 0.89 µA at 100 Hz ODR, 2.0 V supply
- 180 nA motion activated wake-up mode
- 40 nA standby current
- High resolution: 0.25 m g /LSB
- Built-in features for system level power savings
- Single-tap and double-tap detection with only 35 nA of added current
- Adjustable threshold sleep and wake-up modes for motion activation
- Autonomous interrupt processing, without need for microcontroller intervention, to allow the rest of the system to be turned off completely
- Deep 512 sample embedded FIFO minimizes host processor load
- Awake state output enables implementation of motion activated switch
- Low noise to 170 µ g /√Hz
- Acceleration sample synchronization via external trigger
- On-chip temperature sensor
- Internal two-pole antialias filter
- SPI (4-wire) and I 2 C digital interfaces
- Small and thin 2.2 mm × 2.3 mm × 0.87 mm package

## APPLICATIONS

- 24/7 sensing
- Hearing aids
- Vital signs monitoring devices
- Motion-enabled power save switches
- Motion-enabled metering devices
- Smart watch with single-cell operation
- Smart home

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The ADXL367 is an ultralow power, 3-axis microelectromechanical systems (MEMS) accelerometer that consumes only 0.89 µA at a 100 Hz output data rate and 180 nA when in motion-triggered wake-up mode. Unlike accelerometers that use power duty cycling to achieve low power consumption, the ADXL367 does not alias input signals by undersampling, but samples the full bandwidth of the sensor at all data rates.

The ADXL367 always provides 14-bit output resolution. 8-bit formatted data is offered for more efficient single-byte transfers when a lower resolution is sufficient. 12-bit formatted data is also provided for ADXL362 design compatibility. Notice that the low and high bytes are inverted, compared with the ADXL362 word formatting. Measurement ranges of ±2 g , ±4 g , and ±8 g are available, with a resolution of 0.25 m g /LSB on the ±2 g range.

In addition to its ultralow power consumption, the ADXL367 has many features to enable true system level power reduction. It includes a deep multimode output first in, first out (FIFO), a built-in micropower temperature sensor, an internal analog-to-digital converter (ADC) for synchronous conversion of an additional analog input with interrupt capability, single-tap and double-tap detection that can operate at any output data rate with only an added 35 nA of current, and a state machine to prevent a false triggering. In addition, the ADXL367 has provisions for external control of the sampling time and/or an external clock.

The ADXL367 operates on a wide 1.1 V to 3.6 V supply range, and can interface, if necessary, to a host operating on a separate supply voltage. The ADXL367 is available in a 2.2 mm × 2.3 mm × 0.87 mm package.

## TABLE OF CONTENTS

| Features................................................................   | 1                                                 |
|----------------------------------------------------------------------------|---------------------------------------------------|
| Applications...........................................................    | 1                                                 |
| Functional Block Diagram......................................1            |                                                   |
| General Description...............................................1        |                                                   |
| Specifications........................................................     | 5                                                 |
| Timing Specifications.........................................             | 7                                                 |
| Absolute Maximum Ratings                                                   | ................................12                |
| Thermal Resistance.........................................                | 12                                                |
| Electrostatic Discharge (ESD) Ratings.............12                       |                                                   |
| Recommended Soldering Profile......................12                      |                                                   |
| ESD Caution.....................................................12         |                                                   |
| Pin Configuration and Function Descriptions......                          | 13                                                |
| Typical Performance Characteristics...................14                   |                                                   |
| Theory of Operation.............................................18         |                                                   |
| Mechanical Device Operation..........................                      | 18                                                |
| Operating Modes..............................................18            |                                                   |
| Selectable Measurement Ranges....................19                        |                                                   |
| Selectable Output Data Rates..........................19                   |                                                   |
| Power/Noise Tradeoff.......................................19              |                                                   |
| Temperature Sensor.........................................19              |                                                   |
| External ADC....................................................19         |                                                   |
| Power Savings Features.....................................                | 21                                                |
| Ultralow Power Consumption in All Modes......                              | 21                                                |
| External ADC Interrupt.....................................21              |                                                   |
| Motion Detection..............................................             | 21                                                |
| FIFO.................................................................24    |                                                   |
| Communications...............................................24            |                                                   |
| Additional Features..............................................26        |                                                   |
| Free Fall Detection...........................................26           |                                                   |
| Tap Detection...................................................           | 26                                                |
| External Clock..................................................26         |                                                   |
| External Trigger                                                           | ...............................................26 |
| Self Test............................................................27    |                                                   |
| User Register Protection..................................27               |                                                   |
| Serial Communications........................................28            |                                                   |
| SPI Commands................................................28             |                                                   |
| Multibyte Transfers...........................................28           |                                                   |
| Invalid Addresses and Address Aliasing..........28                         |                                                   |
| Latency Restrictions.........................................28            |                                                   |
| Invalid Commands............................................28             |                                                   |
| SPI Bus Sharing...............................................29           |                                                   |
| I 2 C....................................................................  | 29                                                |
| Register Map.......................................................        | 30                                                |
| Register Details...................................................        | 32                                                |
| ADI Device ID Register....................................                 | 32                                                |
| MEMS Device ID                                                             | Register................................32        |
| Part ID Register................................................32         |                                                   |
| Revision ID Register.........................................32            |                                                   |
| XID Registers...................................................32         |                                                   |

| X-Data Bits[13:6] Register................................33       |    |
|--------------------------------------------------------------------|----|
| Y-Data Bits[13:6] Register................................34       |    |
| Z-Data Bits[13:6] Register................................34       |    |
| Status Register.................................................34 |    |
| FIFO Entries Bits[7:0] Register.........................35         |    |
| FIFO Entries Bits[9:8] Register.........................35         |    |
| X-Data Bits[13:6] Register................................35       |    |
| X-Data Bits[5:0] Register..................................36      |    |
| Y-Data Bits[13:6] Register................................36       |    |
| Y-Data Bits[5:0] Register..................................36      |    |
| Z-Data Bits[13:6] Register................................36       |    |
| Z-Data Bits[5:0] Register..................................37      |    |
| Temperate Data Bits[13:6] Register.................                | 37 |
| Temperate Data Bits[5:0] Register...................               | 37 |
| ADC Data Bits[13:6] Register...........................37          |    |
| ADC Data Bits[5:0] Register.............................38         |    |
| I 2 C FIFO Data Register....................................38     |    |
| Soft Reset Register..........................................38    |    |
| Threshold Activity Bits[12:6] Register...............39            |    |
| Threshold Activity Bits[5:0] Register.................39           |    |
| Timed Activity Register.....................................39     |    |
| Threshold Inactivity Bits[12:6] Register............40             |    |
| Threshold Inactivity Bits[5:0] Register..............40            |    |
| Timed Inactivity Bits[15:8] Register..................40           |    |
| Timed Inactivity Bits[7:0] Register....................41          |    |
| Activity Inactivity Control Register....................41         |    |
| FIFO Control Register......................................41      |    |
| FIFO Sample Register......................................43       |    |
| Interrupt Pin 1 Enables (Lower) Register.........43                |    |
| Interrupt Pin 2 Enables (Lower) Register.........44                |    |
| Filter Control Register......................................      | 44 |
| Power Control Register....................................45       |    |
| User Self Test Register.....................................46     |    |
| Tap Threshold Register....................................46       |    |
| Tap Duration Register.......................................46     |    |
| Tap Latency Register........................................47     |    |
| Tap Window Register.......................................         | 47 |
| X-Axis User Offset Register.............................           | 47 |
| Y-Axis User Offset Register..............................47        |    |
| Z-Axis User Offset Register..............................48        |    |
| X-Axis User Sensitivity Register.......................48          |    |
| Y-Axis User Sensitivity Register.......................48          |    |
| Z-Axis User Sensitivity Register.......................49          |    |
| Timer Control Register.....................................        | 49 |
| Interrupt Pin 1 Enables (Upper) Register.........50                |    |
| Interrupt Pin 2 Enables (Upper) Register.........50                |    |
| ADC Control Register.......................................51      |    |
| TEMP_ADC_ACT_THRSH_HIGH                                            |    |
| Register.....52                                                    |    |

## TABLE OF CONTENTS

| TEMP_ADC_ACT_THRSH_LOW Register......52                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                | FIFO Modes.....................................................                                                                                                                                                                                                                                                                | 59                                                                                                                                                                                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TEMP_ADC_INACT_THRSH_HIGH                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                | FIFO Configuration...........................................59                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                |
| Register..........................................................53                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                | Interrupts..........................................................61                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                |
| TEMP_ADC_INACT_THRSH_LOW Register..53                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                | Using External Trigger......................................62                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                |
| Temperature Activity Inactivity Timer                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                | Using an External Clock...................................63                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                |
| Register..........................................................53                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                | Using Self Test ................................................                                                                                                                                                                                                                                                               | 63                                                                                                                                                                                                                                                                                                                             |
| Axis Mask Register...........................................54                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                | Operation at Voltages Other Than 2.0 V..........63                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                |
| Status Copy Register.......................................                                                                                                                                                                                                                                                                    | 54                                                                                                                                                                                                                                                                                                                             | Mechanical Considerations for Mounting.........63                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                |
| Status 2 Register..............................................55                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                | Axes of Acceleration Sensitivity.......................                                                                                                                                                                                                                                                                        | 64                                                                                                                                                                                                                                                                                                                             |
| Applications Information......................................                                                                                                                                                                                                                                                                 | 56                                                                                                                                                                                                                                                                                                                             | Outline Dimensions.............................................                                                                                                                                                                                                                                                                | 65                                                                                                                                                                                                                                                                                                                             |
| Application Examples.......................................56                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                | Ordering Guide.................................................65                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                |
| Power Supply Requirements............................58                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                | Evaluation Boards............................................65                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                               | REVISION HISTORY                                                                                                                                                                                                                                                                                                               | REVISION HISTORY                                                                                                                                                                                                                                                                                                               | REVISION HISTORY                                                                                                                                                                                                                                                                                                               |
| 10/2024-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                       | 10/2024-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                       | 10/2024-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                       | 10/2024-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                       |
| Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1                                                                                                                                                                                               | Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1                                                                                                                                                                                               | Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1                                                                                                                                                                                               | Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1                                                                                                                                                                                               |
| Changes to General Description Section.........................................................................................................1                                                                                                                                                                               | Changes to General Description Section.........................................................................................................1                                                                                                                                                                               | Changes to General Description Section.........................................................................................................1                                                                                                                                                                               | Changes to General Description Section.........................................................................................................1                                                                                                                                                                               |
| Changes to Table 1..........................................................................................................................................5 Deleted Figure 10 and Figure 15; Renumbered Sequentially........................................................................10                               | Changes to Table 1..........................................................................................................................................5 Deleted Figure 10 and Figure 15; Renumbered Sequentially........................................................................10                               | Changes to Table 1..........................................................................................................................................5 Deleted Figure 10 and Figure 15; Renumbered Sequentially........................................................................10                               | Changes to Table 1..........................................................................................................................................5 Deleted Figure 10 and Figure 15; Renumbered Sequentially........................................................................10                               |
| Changes to Wake-Up Mode Section..............................................................................................................18                                                                                                                                                                                | Changes to Wake-Up Mode Section..............................................................................................................18                                                                                                                                                                                | Changes to Wake-Up Mode Section..............................................................................................................18                                                                                                                                                                                | Changes to Wake-Up Mode Section..............................................................................................................18                                                                                                                                                                                |
| Change to Selectable Measurement Ranges Section...................................................................................19                                                                                                                                                                                           | Change to Selectable Measurement Ranges Section...................................................................................19                                                                                                                                                                                           | Change to Selectable Measurement Ranges Section...................................................................................19                                                                                                                                                                                           | Change to Selectable Measurement Ranges Section...................................................................................19                                                                                                                                                                                           |
| Changes to External ADC Section.................................................................................................................19                                                                                                                                                                             | Changes to External ADC Section.................................................................................................................19                                                                                                                                                                             | Changes to External ADC Section.................................................................................................................19                                                                                                                                                                             | Changes to External ADC Section.................................................................................................................19                                                                                                                                                                             |
| Changes to Analog Inputs Section.................................................................................................................20                                                                                                                                                                            | Changes to Analog Inputs Section.................................................................................................................20                                                                                                                                                                            | Changes to Analog Inputs Section.................................................................................................................20                                                                                                                                                                            | Changes to Analog Inputs Section.................................................................................................................20                                                                                                                                                                            |
| Added Figure 42; Renumbered Sequentially.................................................................................................20                                                                                                                                                                                    | Added Figure 42; Renumbered Sequentially.................................................................................................20                                                                                                                                                                                    | Added Figure 42; Renumbered Sequentially.................................................................................................20                                                                                                                                                                                    | Added Figure 42; Renumbered Sequentially.................................................................................................20                                                                                                                                                                                    |
| Changes to Motion Detection Section............................................................................................................21                                                                                                                                                                              | Changes to Motion Detection Section............................................................................................................21                                                                                                                                                                              | Changes to Motion Detection Section............................................................................................................21                                                                                                                                                                              | Changes to Motion Detection Section............................................................................................................21                                                                                                                                                                              |
| Changes to Inactivity Detection Section........................................................................................................ 22                                                                                                                                                                             | Changes to Inactivity Detection Section........................................................................................................ 22                                                                                                                                                                             | Changes to Inactivity Detection Section........................................................................................................ 22                                                                                                                                                                             | Changes to Inactivity Detection Section........................................................................................................ 22                                                                                                                                                                             |
| Changes to Loop Mode Section.....................................................................................................................23                                                                                                                                                                            | Changes to Loop Mode Section.....................................................................................................................23                                                                                                                                                                            | Changes to Loop Mode Section.....................................................................................................................23                                                                                                                                                                            | Changes to Loop Mode Section.....................................................................................................................23                                                                                                                                                                            |
| Changes to Looped Mode Start-Up Routine Section.....................................................................................23                                                                                                                                                                                         | Changes to Looped Mode Start-Up Routine Section.....................................................................................23                                                                                                                                                                                         | Changes to Looped Mode Start-Up Routine Section.....................................................................................23                                                                                                                                                                                         | Changes to Looped Mode Start-Up Routine Section.....................................................................................23                                                                                                                                                                                         |
| Change to Using the AWAKE Bit Section...................................................................................................... 24                                                                                                                                                                                 | Change to Using the AWAKE Bit Section...................................................................................................... 24                                                                                                                                                                                 | Change to Using the AWAKE Bit Section...................................................................................................... 24                                                                                                                                                                                 | Change to Using the AWAKE Bit Section...................................................................................................... 24                                                                                                                                                                                 |
| Changes to Tap Detection Section and Figure 49......................................................................................... 26                                                                                                                                                                                     | Changes to Tap Detection Section and Figure 49......................................................................................... 26                                                                                                                                                                                     | Changes to Tap Detection Section and Figure 49......................................................................................... 26                                                                                                                                                                                     | Changes to Tap Detection Section and Figure 49......................................................................................... 26                                                                                                                                                                                     |
| Changes to Table 11...................................................................................................................................... 30                                                                                                                                                                   | Changes to Table 11...................................................................................................................................... 30                                                                                                                                                                   | Changes to Table 11...................................................................................................................................... 30                                                                                                                                                                   | Changes to Table 11...................................................................................................................................... 30                                                                                                                                                                   |
| Changes to Revision ID Register Figure and Table 15..................................................................................32                                                                                                                                                                                        | Changes to Revision ID Register Figure and Table 15..................................................................................32                                                                                                                                                                                        | Changes to Revision ID Register Figure and Table 15..................................................................................32                                                                                                                                                                                        | Changes to Revision ID Register Figure and Table 15..................................................................................32                                                                                                                                                                                        |
| Changes to FIFO Control Register Figure and Table 46................................................................................41                                                                                                                                                                                         | Changes to FIFO Control Register Figure and Table 46................................................................................41                                                                                                                                                                                         | Changes to FIFO Control Register Figure and Table 46................................................................................41                                                                                                                                                                                         | Changes to FIFO Control Register Figure and Table 46................................................................................41                                                                                                                                                                                         |
| Changes to Tap Threshold Register Figure and Table 53..............................................................................46                                                                                                                                                                                          | Changes to Tap Threshold Register Figure and Table 53..............................................................................46                                                                                                                                                                                          | Changes to Tap Threshold Register Figure and Table 53..............................................................................46                                                                                                                                                                                          | Changes to Tap Threshold Register Figure and Table 53..............................................................................46                                                                                                                                                                                          |
| Changes to Table 66......................................................................................................................................51                                                                                                                                                                    | Changes to Table 66......................................................................................................................................51                                                                                                                                                                    | Changes to Table 66......................................................................................................................................51                                                                                                                                                                    | Changes to Table 66......................................................................................................................................51                                                                                                                                                                    |
| Changed Autonomous Motion Switch Section to Motion Switch Section...................................................... 56                                                                                                                                                                                                     | Changed Autonomous Motion Switch Section to Motion Switch Section...................................................... 56                                                                                                                                                                                                     | Changed Autonomous Motion Switch Section to Motion Switch Section...................................................... 56                                                                                                                                                                                                     | Changed Autonomous Motion Switch Section to Motion Switch Section...................................................... 56                                                                                                                                                                                                     |
| Changes to Figure 55.................................................................................................................................... 56                                                                                                                                                                    | Changes to Figure 55.................................................................................................................................... 56                                                                                                                                                                    | Changes to Figure 55.................................................................................................................................... 56                                                                                                                                                                    | Changes to Figure 55.................................................................................................................................... 56                                                                                                                                                                    |
| Deleted Start-Up Routine Section..................................................................................................................56                                                                                                                                                                           | Deleted Start-Up Routine Section..................................................................................................................56                                                                                                                                                                           | Deleted Start-Up Routine Section..................................................................................................................56                                                                                                                                                                           | Deleted Start-Up Routine Section..................................................................................................................56                                                                                                                                                                           |
| Changed Example: Implementing Free Fall Detection Section to Implementing Free Fall Detection                                                                                                                                                                                                                                  | Changed Example: Implementing Free Fall Detection Section to Implementing Free Fall Detection                                                                                                                                                                                                                                  | Changed Example: Implementing Free Fall Detection Section to Implementing Free Fall Detection                                                                                                                                                                                                                                  | Changed Example: Implementing Free Fall Detection Section to Implementing Free Fall Detection                                                                                                                                                                                                                                  |
| Start-Up Routine Section to Free Fall Start-Up Routine Section....................................................57                                                                                                                                                                                                           | Start-Up Routine Section to Free Fall Start-Up Routine Section....................................................57                                                                                                                                                                                                           | Start-Up Routine Section to Free Fall Start-Up Routine Section....................................................57                                                                                                                                                                                                           | Start-Up Routine Section to Free Fall Start-Up Routine Section....................................................57                                                                                                                                                                                                           |
| Section.........................................................................................................................................................57 Changed Changes to Table 77 and Table 80................................................................................................................ 60 | Section.........................................................................................................................................................57 Changed Changes to Table 77 and Table 80................................................................................................................ 60 | Section.........................................................................................................................................................57 Changed Changes to Table 77 and Table 80................................................................................................................ 60 | Section.........................................................................................................................................................57 Changed Changes to Table 77 and Table 80................................................................................................................ 60 |
| Changes to Interrupt Pins Section.................................................................................................................61                                                                                                                                                                           | Changes to Interrupt Pins Section.................................................................................................................61                                                                                                                                                                           | Changes to Interrupt Pins Section.................................................................................................................61                                                                                                                                                                           | Changes to Interrupt Pins Section.................................................................................................................61                                                                                                                                                                           |
| Change to Evaluation Boards........................................................................................................................65                                                                                                                                                                          | Change to Evaluation Boards........................................................................................................................65                                                                                                                                                                          | Change to Evaluation Boards........................................................................................................................65                                                                                                                                                                          | Change to Evaluation Boards........................................................................................................................65                                                                                                                                                                          |

9/2023-Rev. 0 to Rev. A

## TABLE OF CONTENTS

| Changes to Table 1..........................................................................................................................................5   |    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Changes to External ADC Interrupt Section..................................................................................................                     | 21 |
| Changes to Table 37......................................................................................................................................38     |    |
| Changes to Table 51......................................................................................................................................45     |    |
| Changes to Ordering Guide...........................................................................................................................65          |    |
| Change to Evaluation Boards........................................................................................................................65           |    |

## 3/2022-Revision 0: Initial Version

<!-- image -->

## SPECIFICATIONS

TA = 25°C, V S = 2.0 V, V DDIO = 2.0 V, 100 Hz ODR, ±2 g range, acceleration = 0 g , default settings for other registers, unless otherwise noted.

Table 1.

| Parameter 1                                        | Test Conditions/Comments             | Min   | Typ        | Max   | Unit     |
|----------------------------------------------------|--------------------------------------|-------|------------|-------|----------|
| SENSOR INPUT                                       | Each axis                            |       |            |       |          |
| Measurement Range                                  | User selectable                      |       | ±2, ±4, ±8 |       | g        |
| Nonlinearity                                       | Percentage of full scale-range (FSR) |       |            |       |          |
| X-axis, Y-axis                                     | FSR = 2 g                            |       | 0.5        |       | %        |
| Z-axis                                             | FSR = 2 g                            |       | 1.8        |       | %        |
| X-axis, Y-axis                                     | FSR = 8 g , ADXL367U8-BCCZ           |       | 4.1        |       | %        |
| Z-axis                                             | FSR = 8 g , ADXL367U8-BCCZ           |       | 9.4        |       | %        |
| Sensor Resonant Frequency                          | X-axis, y-axis 2                     |       | 2170       |       | Hz       |
|                                                    | Z-axis 3                             |       | 3000       |       | Hz       |
| Cross Axis Sensitivity 4                           |                                      |       | 0.8        |       | %        |
| OUTPUT RESOLUTION                                  | Each axis                            |       |            |       |          |
| All g Ranges                                       |                                      |       | 14         |       | Bits     |
| SENSITIVITY                                        | Each axis                            |       |            |       |          |
| Scale Factor                                       | 2 g range                            |       | 0.25       |       | m g /LSB |
|                                                    | 4 g range                            |       | 0.5        |       | m g /LSB |
|                                                    | 8 g range                            |       | 1          |       | m g /LSB |
| Sensitivity                                        | 2 g range                            |       | 4000       |       | LSB/ g   |
|                                                    | 4 g range                            |       | 2000       |       | LSB/ g   |
|                                                    | 8 g range                            |       | 1000       |       | LSB/ g   |
| Sensitivity Change Due to Temperature 5 0 g OFFSET | Each axis                            |       | 0.05       |       | %/°C     |
| 0 g Output 6, 7                                    | X OUT , Y OUT                        | -150  | ±35        | +150  | m g      |
|                                                    | Z OUT                                | -250  | ±50        | +250  | m g      |
| 0 g Offset vs. Temperature 8                       | 2 g range                            |       | ±0.68      |       | m g /°C  |
|                                                    |                                      |       | ±1.28      |       | m g /°C  |
|                                                    | 4 g range 8 g range                  |       | ±2.5       |       | m g /°C  |
| 0 g Offset vs. Power Supply Voltage 9              |                                      |       | -3.4       |       | m g /V   |
| X-Axis and Y-Axis                                  |                                      |       |            |       | m g /V   |
| Noise Density                                      |                                      |       |            |       |          |
| Normal Operation                                   | 2 g range                            |       | 370        |       | µ g /√Hz |
| Low Noise Mode                                     | 2 g range                            |       | 200        |       | µ g /√Hz |
|                                                    | 2 g range, 400 ODR                   |       | 170        |       | µ g /√Hz |
| Normal Operation                                   | 8 g range, ADXL367U8-BCCZ            |       | 1230       |       | µ g /√Hz |
| Low Noise Mode                                     | 8 g range, ADXL367U8-BCCZ            |       | 700        |       | µ g /√Hz |
| BANDWIDTH                                          |                                      |       |            |       |          |
| Low Pass (Antialiasing) Filter, -3 dB Corner       | 2-pole filter                        |       | ODR/2      |       | Hz       |
| Output Data Rate (ODR)                             | User selectable in 8 steps           | 12.5  |            | 400   | Hz       |
| SELF TEST                                          |                                      |       |            |       |          |
| Output Change 10                                   | X OUT                                | 90    | 180        | 270   | m g      |
| POWER SUPPLY                                       |                                      |       |            |       |          |
| Operating Voltage Range (V S )                     |                                      | 1.1   | 2.0        | 3.6   | V        |
| I/O Voltage Range (V DDIO )                        |                                      | 1.1   | 2.0        | 3.6   | V        |
| Supply Reset Threshold (V RESET )                  |                                      |       |            | 50    | mV       |
| Supply Current 11                                  |                                      |       |            |       |          |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter 1                                  | Test Conditions/Comments                                                                           | Min     | Typ   | Max       | Unit   |
|----------------------------------------------|----------------------------------------------------------------------------------------------------|---------|-------|-----------|--------|
| Measurement Mode 12                          | 100 Hz ODR (50 Hz bandwidth)                                                                       |         |       |           |        |
| Normal Operation                             |                                                                                                    |         | 0.89  |           | µA     |
| Low Noise Mode                               |                                                                                                    |         | 1.77  |           | µA     |
| Wake-Up Mode 13                              |                                                                                                    |         | 181   |           | nA     |
| Standby                                      |                                                                                                    |         | 40    |           | nA     |
| Power Supply Rejection Ratio (PSRR)          | External capacitors removed, input is 100 mV sine wave on the supply voltage on the V S pin (V S ) |         |       |           |        |
| Input Frequency 100 Hz to 1 kHz              |                                                                                                    |         | -59   |           | dB     |
| Input Frequency 1 kHz to 250 kHz             |                                                                                                    |         | -47   |           | dB     |
| Turn-On Time 14                              | 100 Hz ODR (50 Hz bandwidth)                                                                       |         |       |           |        |
| Power-Up to Standby                          |                                                                                                    |         | 9     |           | ms     |
| Hold Time                                    |                                                                                                    | 300     |       |           | ms     |
| Rise Time                                    | 0 V to 90% of V S                                                                                  | 4       |       |           | ms     |
| Measurement Mode Instruction to First Sample |                                                                                                    |         | 100   |           | ms     |
| TEMPERATURE SENSOR                           |                                                                                                    |         |       |           |        |
| Bias Average                                 | At 25°C                                                                                            |         | 165   |           | LSB    |
| Standard Deviation                           |                                                                                                    |         | 428   |           | LSB    |
| Sensitivity Average                          |                                                                                                    |         | 54    |           | LSB/°C |
| Standard Deviation                           |                                                                                                    |         | 0.72  |           | LSB/°C |
| Resolution                                   |                                                                                                    |         | 14    |           | Bits   |
| EXTERNAL ADC INPUT                           |                                                                                                    |         |       |           |        |
| Input Range                                  |                                                                                                    | 0 (GND) |       | V REG_OUT | V      |
| Bias 15                                      |                                                                                                    |         | -8030 |           | LSB    |
| Gain                                         |                                                                                                    |         | 15301 |           | LSB/V  |
| Noise RMS                                    | ODR = 100Hz                                                                                        |         | 3     |           | LSB    |
| Signal-to-Noise Ratio (SNR)                  |                                                                                                    |         | 70    |           | dB     |
| ENVIRONMENTAL                                |                                                                                                    |         |       |           |        |
| Operating Temperature Range                  |                                                                                                    | -40     |       | +85       | °C     |

1 All minimum and maximum specifications are guaranteed. Typical specifications may not be guaranteed.

2 Typical value based on characterization, not tested in production.

3 Typical value defined based on design/simulation. It is not tested in production.

4 Cross axis sensitivity is defined as coupling between any two axes. Typical value based on characterization, not tested in production.

5 Change from ambient (0°C to 25°C or 25°C to 60°C).

6 0 g offset shifts with different supplies and measurement range settings.

7 This specification applies for the ADXL367U8-BCCZ when it is configured in the 8 g range.

8 Change from ambient (-40°C to +25°C or 25°C to 85°C).

9 See the Operation at Voltages Other Than 2.0 V section.

10 Self test change is defined as the output change in g when self test is asserted.

11 Supply current may increase when temperature sensor, FIFO, or external ADC are enabled.

12 Tested under 2.0 V V S and V DDIO .

13 Wake-up mode current consumption when sampling at 1.5625 samples per second. This can be configured in the WAKEUP\_RATE bit field in Register 0x39.

14 Refer to the Power Supply Requirements section for the minimum supply rise time requirement in details

15 The ADC data format is signed and the input signal is single-ended with respective to V REG\_OUT /2, so code equal to 0 LSB is approximately 0.53 V.

## SPECIFICATIONS

## TIMING SPECIFICATIONS

Table 2. SPI Digital Input/Output

|                                   |                          | Limit 1      | Limit 1      |      |
|-----------------------------------|--------------------------|--------------|--------------|------|
| Parameter                         | Test Conditions/Comments | Min          | Max          | Unit |
| Digital Input                     |                          |              |              |      |
| Low Level Input Voltage (V IL )   |                          |              | 0.3 × V DDIO | V    |
| High Level Input Voltage (V IH )  |                          | 0.7 × V DDIO |              | V    |
| Low Level Input Current (I IL )   | V IN = V DDIO            |              | 0.1          | µA   |
| High Level Input Current (I IH )  | V IN = 0 V               | -0.1         |              | µA   |
| Digital Output                    |                          |              |              |      |
| Low Level Output Voltage (V OL )  | I OL = 10 mA             |              | 0.2 × V DDIO | V    |
| High Level Output Voltage (V OH ) | I OH = -4 mA             | 0.8 × V DDIO |              | V    |
| Low Level Output Current (I OL )  | V OL = V OL, max         | 10           |              | mA   |
| High Level Output Current (I OH ) | V OH = V OH, min         |              | -4           | mA   |

Table 3. SPI Timing (T A = 25°C, V S = 2.0 V, V DDIO = 2.0 V)

| Parameter   | Limit   | Limit   | Unit   | Description                  |
|-------------|---------|---------|--------|------------------------------|
| Parameter   | Min     | Max     | Unit   | Description                  |
| f CLK       | 0.1     | 8       | MHz    | Clock Frequency.             |
| t CSS       | 100     |         | ns     | CS Setup Time.               |
| t CSH       | 0.02    | 1000    | µs     | CS Hold Time.                |
| t CSD       | 20      |         | ns     | CS Disable Time.             |
| t SU        | 20      |         | ns     | Data Setup Time.             |
| t HD        | 20      |         | ns     | Data Hold Time.              |
| t HIGH      | 50      |         | ns     | Clock High Time.             |
| t LOW       | 50      |         | ns     | Clock Low Time.              |
| t CLE       | 25      |         | ns     | Clock Enable Time.           |
| t V         | 0       | 50      | ns     | Output Valid from Clock Low. |
| t DIS       | 0       | 25      | ns     | Output Disable Time.         |

Table 4. I 2 C Timing (T A = 25°C, V S = 2.0 V, V DDIO = 2.0 V)

|                                                                                               |                 | Test Conditions/                   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   |        |
|-----------------------------------------------------------------------------------------------|-----------------|------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------------|--------------------------------|--------------------------------|--------|
| Parameter                                                                                     | Symbol          | Comments                           | Min                      | Typ                      | Max                      | Min                            | Typ                            | Max                            | Unit   |
| DC INPUT LEVELS Input Voltage Low Level High Level Hysteresis of Trigger Inputs Input Current | V IL V IH V HYS |                                    | 0.7 × 0.05               |                          | 0.3 × V DDIO             | 0.7 ×                          |                                | 0.3 × V DDIO                   | V V µA |
| Schmitt                                                                                       | I IL            | 0.1 × V DDIO < V IN < 0.9 × V DDIO | -10                      |                          | +10                      | 0.1 × V DDIO                   |                                |                                | µA     |
| DC OUTPUT LEVELS Output Voltage Low Level                                                     | V OL1           | I OL = 7 mA V DDIO > 2 V           |                          |                          | 0.4                      |                                |                                |                                | V      |

## SPECIFICATIONS

Table 4. I 2 C Timing (T A = 25°C, V S = 2.0 V, V DDIO = 2.0 V) (Continued)

|                           |         | Test Conditions/          | I2C_HS = 0 (Fast Mode)   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   |        |
|---------------------------|---------|---------------------------|--------------------------|--------------------------|--------------------------|--------------------------------|--------------------------------|--------------------------------|--------|
| Parameter                 | Symbol  | Comments                  | Min                      | Typ                      | Max                      | Min                            | Typ                            | Max                            | Unit   |
| Output Current Low Level  | V OL2   | V DDIO ≤ 2 V              |                          |                          | 0.2 × V DDIO             |                                |                                |                                | V      |
| INPUT                     | I OL    | V OL = 0.4 V V OL = 0.6 V | 20 6                     |                          |                          |                                |                                |                                | mA mA  |
| AC LEVELS SCLK Frequency  |         |                           | 0                        |                          | 1                        | 0                              |                                | 3.4                            | MHz ns |
| SCL High Time             | t HIGH  |                           | 260                      |                          |                          | 60                             |                                |                                |        |
| SCL Low Time              | t LOW   |                           | 500                      |                          |                          | 160                            |                                |                                | ns     |
| Start Setup Time          | t SUSTA |                           | 260                      |                          |                          | 160                            |                                |                                | ns     |
| Start Hold Time           | t HDSTA |                           | 260                      |                          |                          | 160                            |                                |                                | ns     |
| SDA Setup Time            | t SUDAT |                           | 50                       |                          |                          | 10                             |                                |                                | ns     |
| SDA Hold Time             | t HDDAT |                           | 0                        |                          |                          | 0                              |                                |                                | ns     |
| Stop Setup Time           | t SUSTO |                           | 260                      |                          |                          | 160                            |                                |                                | ns     |
| Bus Free Time             | t BUF   |                           | 500                      |                          |                          |                                |                                |                                | ns     |
| SCL Input Rise Time       | t RCL   |                           |                          |                          | 120                      |                                |                                | 80                             | ns     |
| SCL Input Fall Time       | t FCL   |                           |                          |                          | 120                      |                                |                                | 80                             | ns     |
| SDA Input Rise Time       | t RDA   |                           |                          |                          | 120                      |                                |                                | 160                            | ns     |
| SDA Input Fall Time       | t FDA   |                           |                          |                          | 120                      |                                |                                | 160                            | ns     |
| Width of Spikes to        | t SP    | Not shown in Figure 15    |                          |                          | 50                       |                                |                                | 10                             | ns     |
| Suppress AC OUTPUT LEVELS |         |                           |                          |                          |                          |                                |                                |                                |        |
| Propagation Delay         |         | C LOAD = 500 pF           |                          |                          |                          |                                |                                |                                |        |
| Data                      | t VDDAT |                           | 97                       |                          | 450                      | 27                             |                                | 135                            | ns     |
| Acknowledge               | t VDACK |                           |                          |                          | 450                      |                                |                                |                                | ns     |
| Output Fall Time          | t F     | Not shown in Figure 15    | 20 × (V                  | DDIO /5.5)               | 120                      |                                |                                |                                | ns     |

<!-- image -->

Figure 2. Register Read

Figure 3. Register Write (Receive Instruction Only)

<!-- image -->

## SPECIFICATIONS

Figure 8. SPI FIFO Read (N 12-Bit Packed Words)

<!-- image -->

## SPECIFICATIONS

<!-- image -->

Figure 9. SPI FIFO Read (N 8-Bit Packed Words)

<!-- image -->

Figure 10. Timing Diagram for SPI Receive Instructions

<!-- image -->

Figure 11. Timing Diagram for SPI Send Instructions

<!-- image -->

Figure 12. I 2 C FIFO Read (N 16-Bit Words)

Figure 13. I 2 C FIFO Read (N 8-Bit Words)

<!-- image -->

Figure 14. I 2 C FIFO Read (N 12-Bit Words)

<!-- image -->

## SPECIFICATIONS

Figure 15. I 2 C Interface Timing Diagram

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                                          |                  |
|---------------------------------------------------|------------------|
| Parameter                                         | Rating           |
| Acceleration (Any Axis, Unpowered)                | 5000 g           |
| Acceleration (Any Axis, Powered)                  | 5000 g           |
| V S                                               | -0.3 V to +4.0 V |
| V DDIO                                            | -0.3 V to +4.0 V |
| All Other Pins                                    | -0.3 V to V DDIO |
| Output Short-Circuit Duration (Any Pin to Ground) | Indefinite       |
| Temperature Range (Storage)                       | -50°C to +150°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal resistance values specified in Table 6 are simulated based on JEDEC specs (unless specified otherwise) and should be used in compliance with JESD51-12.

## Table 6. Thermal Resistance

| Package Type   | θ JA       | θ JC       | Psi JT    | Psi JB     | Device Weight   |
|----------------|------------|------------|-----------|------------|-----------------|
| CC-12-4        | 177.8 °C/W | 116.7 °C/W | 11.1°C/ W | 127.8 °C/W | 9.04 mg         |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

Table 7. ADXL367, 12-Terminal LGA

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                      2000 | 2       |
| CDM         |                      1250 | C3      |

## RECOMMENDED SOLDERING PROFILE

Table 8 provides details about the recommended soldering profile.

Figure 16. Recommended Soldering Profile

<!-- image -->

Table 8. Recommended Soldering Profile

|                                                                                 | Condition           | Condition           |
|---------------------------------------------------------------------------------|---------------------|---------------------|
| Profile Feature                                                                 | Sn63/Pb37           | Pb-Free             |
| Average Ramp Rate (T L to T P ) Preheat                                         | 3°C/sec max         | 3°C/sec max         |
| Minimum Soldering Temperature (T SMIN )                                         | 100°C               | 150°C               |
| Maximum Soldering Temperature (T SMAX )                                         | 150°C               | 200°C               |
| Soldering Time (T SMIN to T SMAX )(t S )                                        | 60 sec to 120 sec   | 60 sec to 180 sec   |
| T SMAX to T L Ramp-Up Rate                                                      | 3°C/sec maximum     | 3°C/sec maximum     |
| Time Maintained Above Liquidous Temperature (T L ) Liquidous Temperature (T L ) | 183°C 60 sec to 150 | 217°C 60 sec to 150 |
| Liquidous Time (t L )                                                           | sec                 | sec                 |
| Peak Temperature (T P )                                                         | 240 + 0°C/-5°C      | 260 + 0°C/-5°C      |
| Time Within 5°C of Actual Peak Temperature (t P )                               | 10 sec to 30 sec    | 20 sec to 40 sec    |
| Ramp-Down Rate                                                                  | 6°C/sec maximum     | 6°C/sec maximum     |
| Time at 25°C to Peak Temperature                                                | 6 minutes maximum   | 8 minutes maximum   |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 17. Pin Configuration

<!-- image -->

Table 9. Pin Function Descriptions

|   Pin No. | Mnemonic    | Description                                                                  |
|-----------|-------------|------------------------------------------------------------------------------|
|         1 | SCLK        | SPI Communication Clock. Tied low for I 2 C.                                 |
|         2 | MOSI/SDA    | Main Output, Subordinate Input (MOSI), I 2 C Serial Data (SDA).              |
|         3 | MISO/ASEL   | Main Input, Subordinate Output (MISO), I 2 C Address Select (ASEL).          |
|         4 | CS/SCL      | SPI Chip Select, Active Low (CS), I 2 C Clock (SCL).                         |
|         5 | INT1        | Interrupt 1 Output. INT1 also serves as an input for external clocking.      |
|         6 | INT2        | Interrupt 2 Output. INT2 also serves as an input for synchronized sampling.  |
|         7 | GND         | Ground. This pin must be grounded.                                           |
|         8 | ADC_IN      | ADC Input Pin. Can be left unconnected, or connected to Pin 7 and/or Pin 11. |
|         9 | V REG_OUT 1 | Internally Regulated Voltage.                                                |
|        10 | V S         | Supply Voltage.                                                              |
|        11 | GND         | Ground. This pin must be grounded.                                           |
|        12 | V DDIO      | Supply Voltage for Digital I/O.                                              |

## TYPICAL PERFORMANCE CHARACTERISTICS

TA = 25°C, V S = 2.0 V, V DDIO = 2.0 V, 100 Hz ODR, ±2 g range, acceleration = 0 g , default settings for other registers, unless otherwise noted.

<!-- image -->

Figure 18. X-Axis Zero g Offset at 25°C, V S = 2 V

<!-- image -->

Figure 19. Y-Axis Zero g Offset at 25°C, V S = 2 V

<!-- image -->

Figure 20. Z-Axis Zero g Offset at 25°C, V S = 2 V

<!-- image -->

Figure 21. X-Axis Sensitivity at 25°C, V S = 2 V, ±2 g Range

Figure 22. Y-Axis Sensitivity at 25°C, V S = 2 V, ±2 g Range

<!-- image -->

Figure 23. Z-Axis Sensitivity at 25°C, V S = 2 V, ±2 g Range

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 24. X-Axis Zero g Offset Temperature Coefficient, V S = 2 V

<!-- image -->

Figure 25. Y-Axis Zero g Offset Temperature Coefficient, V S = 2 V

<!-- image -->

Figure 26. Z-Axis Zero g Offset Temperature Coefficient, V S = 2 V

<!-- image -->

Figure 27. X-Axis Offset Normalized vs. Temperature, 16 ADXL367 Devices Soldered to PCB, ODR = 100 Hz, V S = 2 V

Figure 28. Y-Axis Offset Normalized vs. Temperature, 16 ADXL367 Devices Soldered to PCB, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 29. Z-Axis Offset Normalized vs. Temperature, 16 ADXL367 Devices Soldered to PCB, ODR = 100 Hz, V S = 2 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 30. Sensitivity Deviation from 25°C vs. Temperature, 16 ADXL367 Devices Soldered to PCB, ODR = 100 Hz, V S = 2 V, X-Axis

<!-- image -->

Figure 31. Sensitivity Deviation from 25°C vs. Temperature, 16 ADXL367 Devices Soldered to PCB, ODR = 100 Hz, V S = 2 V, Y-Axis

<!-- image -->

Figure 32. Sensitivity Deviation from 25°C vs. Temperature, 16 ADXL367 Devices Soldered to PCB, ODR = 100 Hz, V S = 2 V, Z-Axis

<!-- image -->

Figure 33. X-Axis Self Test Response at 25°C, V S = 2 V

Figure 34. Current Consumption at 25°C, Normal Mode, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 35. Current Consumption at 25°C, Low Noise Mode, ODR = 100 Hz, V S = 2 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 36. Current Consumption at 25°C, Wake-Up Mode, V S = 2 V

<!-- image -->

Figure 37. Temperature Sensor Response at 25°C, V S = 2 V

Figure 38. Temperature Sensor Scale Factor, V S = 2 V

<!-- image -->

Figure 39. Clock Frequency Deviation from Ideal at 25°C, V S = 2 V

<!-- image -->

## THEORY OF OPERATION

The ADXL367 is a complete 3-axis acceleration measurement system that operates at extremely low power consumption levels. The ADXL367 measures both dynamic acceleration, resulting from motion or shock, and static acceleration, such as tilt. Acceleration is reported digitally and the device communicates via either the SPI or the I 2 C protocol. Built-in digital logic enables autonomous operation and implements functionality that enhances system level power savings.

## MECHANICAL DEVICE OPERATION

The moving component of the sensor is a polysilicon surface-micromachined structure that is built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against acceleration forces.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the structure and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase sensitive demodulation determines the magnitude and polarity of the acceleration.

## OPERATING MODES

The ADXL367 has the following three operating modes:

- Measurement mode for continuous, wide bandwidth sensing
- Wake-up mode for limited bandwidth activity detection
- Standby mode for power conservation

## Measurement Mode

Measurement mode is the normal operating mode of the ADXL367. In this mode, acceleration data is read continuously and the accelerometer consumes less than 1.3 µA across its entire range of output data rates of up to 400 Hz on a single button-cell battery (at 25°C). All features described in this data sheet are available when operating the ADXL367 in this mode.

The ADXL367 is a true ultra low power accelerometer because its supply current is 0.8 µA at 100 Hz ODR. Other accelerometers derive low current by using a specific low power mode that power cycles acceleration sensing. The resulting undersampling can lead aliasing of the input acceleration. The ADXL367 does not undersample the input signal at any of its output data rates when in measure mode.

Note that after entering measurement mode, a 100 ms wait time must be observed before reading acceleration data. This allows the output time to settle after entering measurement mode.

## Wake-Up Mode

Wake-up mode reduces current consumption to a very low level by sampling the input periodically, and turning the accelerometer electronics off between measurements. This mode is often used to distinguish between the presence and absence of motion, but can also be used as a live data stream.

The ADXL367 offers 4 user-selectable wake-up rates ranging from approximately 12.5 samples per second to approximately 1.5 samples per second. In wake-up mode, acceleration is measured at regular intervals. Between samples, the accelerometer electronics are in a lower power state (see Figure 40).

Figure 40. Acceleration Sampling

<!-- image -->

Wake-up mode is ideal for implementation of a motion-activated on/off switch. For many systems, a few measurements per second are sufficient to detect movements that can wake up the system. After the system is awake, it can switch into a higher data rate mode for more precise motion measurements. Note that time duration for the first wake-up is longer than subsequent.

In wake-up mode, if motion is detected, the accelerometer can respond in any the following ways:

- Remain in wake-up mode and continue to sample data, when activity interrupt is not triggered
- Switch into full bandwidth measurement mode, when activity interrupt is triggered
- Signal an interrupt to a microcontroller
- Wake-up downstream circuitry, depending on the configuration

The response of the accelerometer is configurable via register settings. Note that the time duration for the first wake-up data point is up to 10 ms slower than subsequent data points. Wake-up mode is not supported in low noise (LN) mode.

## Standby

Placing the ADXL367 in standby suspends measurement and reduces current consumption to 40 nA (typical). Pending interrupts and data are preserved and no new interrupts are generated.

The ADXL367 powers up in standby with all sensor functions turned off. Note that any changes to the registers before the POWER\_CTL register (Register 0x00 to Register 0x2D) must be made with the device in standby. If changes are made while the ADXL367 is in measurement mode, they may be effective for only part of a measurement. Ensure the change of data capture configuration only occurs in standby mode.

## THEORY OF OPERATION

## SELECTABLE MEASUREMENT RANGES

The ADXL367 has selectable measurement ranges of ±2 g , ±4 g , and ±8 g . Acceleration samples are always converted by a 14-bit ADC. Therefore, sensitivity scales with g range. Ranges and corresponding sensitivity values are listed in Table 1. When the input exceeds the full-scale range, the output data may not be accurate temporarily. The sensor is not damaged as long as the acceleration remains below the absolute maximum rating. Table 5 lists the absolute maximum ratings for acceleration, indicating the acceleration level that can cause permanent damage to the device.

## SELECTABLE OUTPUT DATA RATES

The ADXL367 can report acceleration data at various data rates ranging from 12.5 Hz to 400 Hz. The internal low-pass filter corner is automatically set to ensure the Nyquist sampling criterion is met and no aliasing occurs.

Current consumption varies somewhat with output data rate, as shown in Figure 41, remaining below 1.3 µA over the entire range of data rates and operating voltages.

Figure 41. Current Consumption vs. Output Data Rate at Several Supply Voltages

<!-- image -->

## Antialiasing

The ADC of the ADXL367 samples at the user selected output data rate. Without a proper antialias filter, input signals above half the data rate are aliased into the signal band. To mitigate this, a 2-pole low-pass filter is provided at the input of the ADC. The 2-pole filter is set to ODR/2 for optimum bandwidth and antialiasing for the user selected output data rate.

## POWER/NOISE TRADEOFF

The ADXL367 offers two options for decreasing noise at the expense of only a small increase in current consumption.

The noise performance of the ADXL367 in normal operation, typically 11 LSB rms (±2 g mode) at 100 Hz ODR (50 Hz bandwidth), is adequate for most applications, depending on bandwidth and the desired resolution. For cases where lower noise is needed, the ADXL367 provides a lower noise operating mode that trades reduced noise for a somewhat higher current consumption.

Table 10 lists the current consumption and noise densities obtained for normal operation and low noise mode at a typical 2.0 V supply.

Table 10. Noise and Current Consumption: Normal Operation and Low Noise Mode at V S = 2.0 V, ODR = 100 Hz

| Mode             |   Noise (µg/√Hz) Typical |   Current Consumption (µA) Typical |
|------------------|--------------------------|------------------------------------|
| Normal Operation |                      370 |                               0.89 |
| Low Noise        |                      200 |                               1.77 |

## TEMPERATURE SENSOR

The ADXL367 includes an integrated 14-bit temperature sensor, which the system designer can use to monitor internal system temperature or to improve the temperature stability of the device via calibration. For example, acceleration outputs vary with the temperature at a rate of ±0.5 m g /°C (typical), but the relationship of the outputs to temperature is repeatable and the designer can, therefore, use the temperature sensor output to calibrate the acceleration temperature drift.

The temperature sensor built in ADXL367 is trimmed at room temperature before shipping, so it can also be used to monitor the absolute temperature. To get even better accuracy, the user can measure and calibrate its initial bias at some known temperature in mass production.

To use the temperature sensor for calibration of the acceleration signal, it is sufficient to correlate acceleration to temperature sensor output, rather than to absolute temperature. In this case, it is not necessary to convert the temperature reading to an absolute temperature. Therefore, calibration of initial bias is not required.

The designer can configure the device to save data from the temperature sensor in the FIFO. Temperature samples, whether read from the output registers or from the FIFO, updates concurrently with acceleration (and ADC) samples unless it is turned off.

## EXTERNAL ADC

In addition to a built-in accelerometer and temperature sensor, the ADXL367 incorporates an additional 14-bit ADC input for digitization of any external analog signal. This additional ADC input is sampled at the same output data rate (ODR) as the acceleration and temperature data.

Use of the ADC adds approximately 50 nA to the total current consumption when operating at 100 Hz ODR. The ADXL367 enables the user to power down the ADC to save power when it is not needed.

The external ADC specification can be found on Table 1.

## THEORY OF OPERATION

## Analog Inputs

The ADXL367 ADC can convert analog inputs ranging from 0 V (GND) to the internally regulated voltage (V REG\_OUT ) and the input range of the external ADC is limited to a maximum of 1 V by the internally regulated voltage.

The Figure 42 shows the typical ADC output vs. input voltage. Notice that the ADC data format is signed and the input signal is single ended with respective to V REG\_OUT /2. Therefore, the code equal to 0 LSB is approximately 0.53 V.

Figure 42. External ADC Output vs. Voltage Input

<!-- image -->

Figure 43 shows an equivalent circuit of the input structure of the ADXL367. The two diodes, D1 and D2, provide ESD protection for the analog input (ADC\_IN).

During the acquisition phase, the impedance of the analog input (ADC\_IN) can be modeled by the series connection of input resistance (R IN ) and input capacitance (C IN ). R IN is typically 20 kΩ and is a lumped component made up of some serial resistors and the on resistance of the switches. C IN is typically 650 fF and is mainly the ADC sampling capacitor.

The acquisition time required is calculated using the following formula:

<!-- formula-not-decoded -->

where RSOURCE is the source impedance.

For 14-bit settling, t ACQ must be less than 15 µs. The acquisition time (t ACQ ) sets an upper limit on the source impedance (R SOURCE ) of approximately 2 MΩ. R IN and C IN make a one-pole, low-pass filter that reduces undesirable aliasing effects and limits the noise.

Figure 43. Equivalent Analog Input Circuit

<!-- image -->

## POWER SAVINGS FEATURES

Designed for the most power conscious applications, the ADXL367 includes several features for enabling power savings at the system level, as well as at the device level.

## ULTRALOW POWER CONSUMPTION IN ALL MODES

At the device level, the most obvious power saving feature of the ADXL367 is its ultralow current consumption in all configurations. The ADXL367 consumes between 0.8 µA (typical) and 1.4 µA (typical) across all data rates up to 400 Hz and all supply voltages up to 3.6 V (see Figure 41). At an even lower power of 160 nA (typical), a motion triggered wake-up mode is provided for simple motion detection applications that require a power consumption lower than 0.2 µA.

At these current levels, the accelerometer consumes less power in full operation than the standby currents of many other system components, and is, therefore, optimal for applications that require continuous acceleration monitoring and very long battery life. Because the accelerometer is always on, it can act as a motion activation switch. The accelerometer signals to the rest of the system when to turn on, thereby managing power at the system level.

As important as its low operating current, the 40 nA (typical) standby current of the ADXL367 contributes to a much longer battery life in applications that spend most of their time in a sleep state and wake-up via an external trigger.

## EXTERNAL ADC INTERRUPT

The ADXL367 incorporates a 14-bit ADC for digitization of an external analog input. An interrupt can be generated based on a user set threshold of the external system battery supply (the ADC can be used to monitor the supply voltage). If the supply voltage falls below the specified threshold, an interrupt can be generated to alert the end user to charge or change the battery. By using this function, the host processor does not need to use another ADC to check the power supply periodically.

## MOTION DETECTION

The ADXL367 features built-in logic that detects activity (presence of acceleration greater than a threshold) and inactivity (lack of acceleration greater than a threshold). Activity and inactivity events can be used as triggers to manage the accelerometer mode of operation or trigger an interrupt to a host processor..

Detection of an activity or inactivity event is indicated in the status register and can be configured to generate an interrupt. In addition, the activity status of the device, that is, whether it is moving or stationary, is indicated by the AWAKE bit, described in the Using the AWAKE Bit section.

Activity and inactivity detection can be used when the accelerometer is in either measurement mode or wake-up mode.

## Activity Detection

An activity event is detected when acceleration remains greater than a specified threshold for a specified time period on any of the axes. If any axis exceeds the threshold, an activity event occurs (unless that axis is disabled).

## Referenced and Absolute Configurations

Activity detection can be configured as referenced or absolute.

When using absolute activity detection, acceleration samples are compared to a user set threshold to determine whether motion is present. For example, if a threshold of 0.5 g is set and the acceleration on the z-axis is 1 g for longer than the user defined activity time, the activity status asserts.

In many applications, it is advantageous for activity detection to be based not on an absolute threshold, but on a deviation from a reference point or orientation. This is particularly useful because it removes the effect on activity detection of the static 1 g imposed by gravity. When an accelerometer is stationary, its output can reach 1 g , even when it is not moving. In absolute activity, when the threshold is set to less than 1 g , activity is immediately detected in this case.

The ADXL367 is in referenced configuration when one or both of the activity and inactivity enables are set to referenced mode (INACT\_EN = 11 or ACT\_EN = 11 in Register 0x27). In referenced configuration, activity is detected when acceleration samples are at least a user set amount greater than an internally defined reference for the user defined amount of time, as described in Equation 2.

## ABS ( Acceleration -Reference ) &gt; Threshold

(2)

Consequently, activity is detected only when the acceleration has deviated sufficiently from the initial orientation. The reference for activity detection is calculated when activity detection is engaged in the following scenarios:

- When the activity function is turned on and measurement mode is engaged
- If link mode is enabled: when inactivity is detected and activity detection begins
- If link mode is not enabled: when activity is detected and activity detection repeats

The referenced configuration results in a very sensitive activity detection that detects even the most subtle motion events.

When using the referenced configuration, it is important to note that the device still uses the absolute thresholds when it first enters measurement mode. This becomes important if an inactivity threshold &lt;1 g is desired. In this case, the device must enter measurement mode with a threshold greater than 1 g . The inactivity threshold can then be lowered to the desired level (while still in measurement mode). This allows the device to set the thresholds around the 1 g offset on the z-axis.

## POWER SAVINGS FEATURES

## Fewer False Positives

Ideally, the intent of activity detection is to wake-up a system only when motion is intentional, ignoring noise or small, unintentional movements. In addition to being sensitive to subtle motion events, the ADXL367 activity detection algorithm is designed to be robust in filtering out undesired triggers.

The ADXL367 activity detection functionality includes a timer to filter out unwanted motion and ensure that only sustained motion is recognized as activity. The duration of this timer, as well as the acceleration threshold, are user adjustable from one sample (that is, no timer) to up to 20 seconds of motion.

Note that the activity timer is operational in measurement mode and wake-up mode. In wake-up mode, one sample activity detection is used.

## Inactivity Detection

An inactivity event is detected when acceleration remains below a specified threshold for a specified time on all the axes. All three axes (if enabled) must be below the inactivity thresholds for an inactivity event to occur. Inactivity detection is also configurable as referenced or absolute.

When using absolute inactivity detection, acceleration samples are compared to a user set threshold for the user set time to determine the absence of motion. Inactivity is detected when enough consecutive samples are all below the threshold. The absolute configuration of inactivity must be used for implementing free fall detection.

Referenced inactivity, like referenced activity, is particularly useful for eliminating the effects of the static acceleration due to gravity. With absolute inactivity, if the inactivity threshold is set lower than 1 g , a device resting motionless may never detect inactivity. With referenced inactivity, the same device under the same configuration detects inactivity.

When using referenced inactivity detection, inactivity is detected when acceleration samples are within a user specified amount of an internally defined reference (as described by Equation 3) for a user defined amount of time.

<!-- formula-not-decoded -->

The reference for inactivity detection is calculated when either of the following events occurs:

- The inactivity function is turned on and the device enters measurement mode
- An inactivity event is detected

A requirement for inactivity detection is that for whatever period of time the inactivity timer has been configured, the accelerometer detects inactivity only when it has been stationary for that amount of time. The inactivity timer can be set anywhere from 2.5 ms (a single sample at 400 Hz ODR) to almost 90 minutes (65,535 samples at 12.5 Hz ODR) of inactivity. The reference is not updated until the timer expires. In dynamic environments, this can lead to the device becoming stuck in a state where it is looking for inactivity, but the acceleration is outside the threshold limits. This applies for all modes of operation, default, linked and looped mode.

The following settings prove an example for enabling referenced inactivity, in default mode:

- 2 g , ODR = 100 Hz
- Referenced inactivity threshold = 250 m g
- Inactivity timer = 100 samples

►

With the inactivity timer setting, this means that the device updates the inactivity reference once every second (because ODR is 100 Hz and the timer is 100 samples). This is shown in Figure 44. In Figure 45, the acceleration exceeds the inactivity threshold before the time expires. Therefore, inactivity is not detected. However, this now means that the reference thresholds are not updated. If the acceleration stays above the thresholds, the device is stuck in a loop of searching for inactivity but acceleration is outside of the limits. Even though the device may not be moving, inactivity is not detected.

Figure 44. Referenced Inactivity Thresholds, Slow Change in Acceleration

<!-- image -->

Figure 45. Referenced Inactivity Thresholds, Fast Change in Acceleration

<!-- image -->

Note that in linked and looped mode, the inactivity event detection is liked sequentially to activity. This means that inactivity threshold cannot be continuously update as in default mode ( Figure 44). Changing the mode in previous example to looped mode, if the acceleration changes so that an activity is detected, the accelerometer does not detect inactivity until the acceleration input returns to within the inactivity threshold, as shown in the

## POWER SAVINGS FEATURES

## Linking Activity and Inactivity Detection

The activity and inactivity detection functions can be used concurrently and processed manually by a host processor, or they can be configured to interact in several other ways, shown in the Default Mode section, Linked Mode section, Loop Mode section, and Autosleep section.

## Default Mode

The user must enable the activity and inactivity functions because these functions are not automatically enabled by default. After the user enables the activity and inactivity functions, both activity and inactivity detection remain enabled and all interrupts must be serviced by a host processor, that is, a processor must read each interrupt before it is cleared and can be used again.

Default mode operation is shown in the flowchart in Figure 46.

Figure 46. Flowchart Illustrating Activity and Inactivity Operation in Default Mode

<!-- image -->

## Linked Mode

In linked mode, activity and inactivity detection are linked to each other in a way so that only one of the functions is enabled at any given time. As soon as activity is detected, the device is assumed to be moving (or awake) and stops looking for activity. Inactivity is expected as the next event. Therefore, only inactivity detection operates.

Similarly, when inactivity is detected, the device is assumed to be stationary (or asleep). Therefore, activity is expected as the next event and only activity detection operates.

In linked mode, activity interrupt is enabled first after power-up. Each interrupt must be serviced by a host processor before the next interrupt is enabled.

Please note that the AWAKE bit is defined as follows:

- On power-up, AWAKE = 1
- If inactivity is detected and inactivity interrupt is cleared, AWAKE = 0
- If activity is detected and activity interrupt is cleared, AWAKE = 1

It is important to note that in linked mode, the host processor must read the status register to update the activity and inactivity thresholds in referenced mode. Otherwise, the thresholds do not update as the acceleration changes.

Linked mode operation is shown in the flowchart in Figure 47.

Figure 47. Flowchart Illustrating Activity and Inactivity Operation in Linked Mode

<!-- image -->

## Loop Mode

In loop mode, motion detection operates as described in the Linked Mode section, but interrupts do not need to be serviced by a host processor. This configuration simplifies the implementation of commonly used motion detection and enhances power savings by reducing the amount of power used in bus communication.

Similar to linked mode, activity interrupt is enabled first after powerup in loop mode. Loop mode operation is shown in the flowchart in Figure 48.

Figure 48. Flowchart Illustrating Activity and Inactivity Operation in Loop Mode

<!-- image -->

## Looped Mode Start-Up Routine

When using loop mode, it is important to note that the AWAKE bit is always asserted when the device first enters measurement mode. The device is currently waiting for an activity event. Therefore, this AWAKE bit remains asserted until activity is detected and an inactivity event is detected. To avoid this, the device must enter measurement mode with an activity threshold below the noise level of the ADXL367 and an inactivity threshold greater than 1 g . This allows the device to deassert the AWAKE bit immediately after entering measurement mode. The activity threshold can then be raised to the desired level (while still in measurement mode).

## POWER SAVINGS FEATURES

The steps below show an example of the loop mode initialization routine:

1. Set activity threshold below the noise level of the accelerometer, for example 1 LSB:
- a. Write 0x00 to the THRESH\_ACT\_H register (Register 0x20)
- b. Write 0x04 to the THRESH\_ACT\_L register (Register 0x21)
2. Set activity timer to zero:
- a. Write 0x00 to the TIMER\_ACT register (Register 0x22)
3. Set inactivity threshold greater than 1 g , for example Full Scale Range (FSR):
- a. Write 0x7F to the THRESH\_INACT\_H register (Register 0x23)
- b. Write 0xFC to the THRESH\_INACT\_L register (Register 0x24)
4. Set inactivity timer to zero:
- a. Write 0x00 to the TIMER\_INACT\_H register (Register 0x25)
- b. Write 0x00 to the TIMER\_INACT\_L register (Register 0x26)
5. Enable activity and inactivity in referenced mode and looped mode: write 0x3F to the ACT\_INACT\_CTL register (Register 0x27).
6. Other customer settings.
7. Enter to measurement mode and auto-sleep mode: write 0x07 to the POWER\_CTL register (0x2D).
8. Wait for the AWAKE bit to go LOW. This happens in approximately 100 ms + 1/ODR. This is the time it takes to the first data sample when switching from Standby to Measurement mode, as specified on Table 1.
9. Reconfigure activity and inactivity thresholds and timers to the desired values, Register 0x20 to Register 0x26.

## Autosleep

When in linked mode or loop mode, enabling autosleep causes the device to enter wake-up mode autonomously (see the Wake-Up Mode section) when inactivity is detected while interrupt is serviced and to re-enter measurement mode when activity is detected and interrupt is serviced.

The autosleep configuration is active only if linked mode or loop mode are enabled. In the default mode, the autosleep setting is ignored. Autosleep mode is not supported in low noise mode.

## Using the AWAKE Bit

The AWAKE bit is a status bit that indicates whether the ADXL367 is awake or asleep. The device is awake when it has experienced an activity condition, and it is asleep when it has experienced an inactivity condition.

The awake signal can be mapped to the INT1 pin or INT2 pin, allowing the pin to serve as a status output to connect or disconnect power to downstream circuitry based on the awake status of the ac- celerometer. Used in conjunction with loop mode, this configuration implements a trivial motion activated switch, as shown in Figure 55.

This motion switch configuration can save significant system level power by eliminating the standby current consumption of the remainder of the application.

## FIFO

The ADXL367 includes a deep 512-sample FIFO buffer. The FIFO provides benefits primarily in two ways, system level power savings and data recording/event context.

## System Level Power Savings

Appropriate use of the FIFO enables system level power savings by enabling the host processor to sleep for extended periods of time while the accelerometer collects data. Alternatively, using the FIFO to collect data can unburden the host while it tends to other tasks.

## Data Recording/Event Context

The FIFO can be used in a triggered mode to record all data leading up to an activity detection event, thereby providing context for the event. For example, in the case of a system that identifies impact events, the accelerometer can keep the entire system off while it stores acceleration data in its FIFO and looks for an activity event. When the impact event occurs, data that was collected prior to the event is frozen in the FIFO. The accelerometer can then wake the rest of the system and transfer this data to the host processor, thereby providing context for the impact event.

Generally, the more context that is available, the more intelligent decisions a system can achieve, making a deep FIFO especially useful. The ADXL367 FIFO can store up to more than 13 seconds of data, providing a clear picture of events prior to an activity trigger.

All FIFO modes of operation, as well as the structure of the FIFO and instructions for retrieving data from it, are described in further detail in the FIFO Modes section. Note that when retrieving data from FIFO, all axes of interest must be read in a burst (or multiple byte) read operation to avoid data loss or misalignment.

FIFO is not supported in wakeup and autosleep mode.

## COMMUNICATIONS

## SPI Instructions

The digital interface of the ADXL367 is implemented with system level power savings in mind. The following features enhance power savings:

- Burst reads and writes reduce the number of SPI communication cycles required to configure the device and retrieve data.
- Concurrent operation of activity and inactivity detection enables motion activated operation that requires minimal input from the

## POWER SAVINGS FEATURES

processor. Loop mode further reduces communications power by enabling the clearing of interrupts without processor intervention.

- The FIFO is implemented in a way so that consecutive samples can be read continuously via a multibyte read of unlimited length. Therefore, one read FIFO instruction can clear the entire contents of the FIFO. In many other accelerometers, each read instruction retrieves a single sample only.

## I 2 C Interface

The ADXL367 also offers an I 2 C interface for the platforms with limited GPIO resources. The ADXL367 conforms to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor.

## Bus Keepers

The ADXL367 includes bus keepers on the SCLK, INT1, and INT2 pins that may be configured as digital inputs. Bus keepers are used to prevent tristate bus lines from floating when nothing is driving them, preventing through current in any gate inputs that are on the bus.

## MSB Registers

Acceleration and temperature measurements are converted to 14bit values and transmitted via SPI or I 2 C using two registers per measurement. To read a full sample set of 3-axis acceleration data, six registers must be read.

Many applications do not require the accuracy that 14-bit data provides and prefer, instead, to save system level power. The MSB registers, XDATA, YDATA, and ZDATA, enable this tradeoff. These registers contain the eight MSBs of the x-axis, y-axis, and z-axis acceleration data. Reading them effectively provides 8-bit acceleration values. Importantly, only three (consecutive) registers must be read to retrieve a full data set, significantly reducing the time during which the SPI or I 2 C bus is active and drawing current.

14-bit, 12-bit, and 8-bit data are available simultaneously so that all data formats can be used in a single application, depending on the needs of the application at a given time. For example, the processor can read 14-bit data when higher resolution is required, and switch to 8-bit data (simply by reading a different set of registers) when application requirements change.

## ADDITIONAL FEATURES

## FREE FALL DETECTION

Many digital output accelerometers include a built-in free fall detection feature. In the ADXL367, this function can be implemented using the inactivity interrupt. Refer to the Applications Information section for more details, including suggested threshold and timing values.

## TAP DETECTION

The tap interrupt function is capable of detecting either single or double taps. The following parameters are shown in Figure 49 for a valid single and valid double tap event:

- The tap detection threshold is defined by the THRESH\_TAP register. (Address 0x2F)
- The maximum tap duration time is defined by the TAP\_DUR register. (Address 0x30)
- The tap latency time is defined by the TAP\_LATENT register (Address 0x31) and is the waiting period from the end of the first tap until the start of the time window, when a second tap can be detected, which is determined by the value in the TAP\_WINDOW register (Address 0x32).
- The interval after the latency time (set by the TAP\_LATENT register) is defined by the window register. Although a second tap must begin after the latency time has expired, it does not have to finish before the end of the time defined by the TAP\_WINDOW register.

Figure 49. Tap Interrupt Function with Valid Single and Double Taps

<!-- image -->

If only the single tap function is in use, the single tap interrupt is triggered when the acceleration goes below the threshold, as long as the value of time stored in the TAP\_DUR register has not been exceeded. If both single and double tap functions are in use, the single tap interrupt is triggered when the double tap event has been either validated or invalidated and the single tap events must be cleared (by reading the STATUS2 register) to allow the next tap/double tap events to be detected.

Note that when using a tap threshold (THRESH\_TAP) less than 1 g , tilting the device may also result in a tap event.

## EXTERNAL CLOCK

The ADXL367 has a built-in 102.4 kHz (typical) clock that, by default, serves as the time base for internal operations.

ODR and bandwidth scale proportionally with the clock. The ADXL367 provides a discrete number of options for ODR, such as 100 Hz, 50 Hz, and 25 Hz, in factors of 2. To achieve data rates other than those provided, an external clock can be used at the appropriate clock frequency. The output data rate scales with the clock frequency, as shown in Equation 4.

For example, to achieve an 80 Hz ODR, select the 100 Hz ODR setting and provide a clock frequency that is 80% of nominal, or 81.92 kHz.

<!-- formula-not-decoded -->

The ADXL367 can operate with external clock frequencies ranging from the nominal 102.4 kHz down to 51.2 kHz to allow the user to achieve any desired output data rate.

Alternatively, an external clock can be used to improve clock frequency accuracy. To achieve tighter tolerances, a more accurate clock can be provided externally.

Power consumption also scales with clock frequency. Higher clock rates increase power consumption. Figure 50 shows how power consumption varies with clock rate.

Note that the external clock must only be configured when in standby mode and be running before the measurement mode command is issued.

Figure 50. Current Consumption vs. External Clock Rate

<!-- image -->

## EXTERNAL TRIGGER

For applications that require a precisely timed acceleration measurement, the ADXL367 features an option to synchronize acceleration sampling to an external trigger. Note that synchronized data sampling (external trigger) is not supported in the ADXL367 when in wake-up mode.

## ADDITIONAL FEATURES

Refer to the Using External Trigger section for more information.

## SELF TEST

The ADXL367 incorporates a self test feature that effectively tests its mechanical and electronic systems simultaneously. When the self test function is invoked, an electrostatic force is applied to the mechanical sensor. This electrostatic force moves the mechanical sensing element in the same manner as acceleration, and it is additive to the acceleration experienced by the device. This added electrostatic force results in an output change only on x-axis channel. Any reading made on the y-axis channel and z-axis channel during self test is invalid.

## USER REGISTER PROTECTION

The ADXL367 includes user register protection for single event upsets (SEUs). An SEU is a change of state caused by ions or electromagnetic radiation striking a sensitive node in a microelectronic device. The state change is a result of the free charge created by ionization in or close to an important node of a logic element (for example, a memory bit). The SEU, itself, is not considered permanently damaging to transistor or circuit functionality, but it can create erroneous register values. The ADXL367 registers that are protected from SEU are Register 0x00 to Register 0x43 with a 242 bit checker.

SEU protection is implemented via a 99-bit error correcting (Hamming-type) code that detects both single-bit and double-bit errors. The check bits are recomputed any time a write to any of the protected registers occurs. At any time, if the stored version of the check bits is not in agreement with the current check bit calculation, the ERR\_USER\_REGS status bit is set (Register 0x0B and Register 0x44).

The ERR\_USER\_REGS bit in the status registers (Register 0x0B and Register 0x44) is set on power-up prior to device configuration. It clears on the first register write to that device.

## SERIAL COMMUNICATIONS

The ADXL367 communicates via a 4-wire SPI or I 2 C and operates as a subordinate. Ignore data that is transmitted from the ADXL367 to the main device during writes to the ADXL367.

As shown in Figure 2 to Figure 7, the MISO pin is in a high impedance state (held by a bus keeper) except when the ADXL367 is sending read data. This is done to conserve bus power.

Wire the ADXL367 for SPI communication, as shown in the connection diagram in Figure 51. The recommended SPI clock speeds are 1 MHz to 8 MHz, with 12 pF maximum loading.

The ADXL367 uses an SPI mode with a clock polarity (CPOL) of zero and a clock phase (CPHA) of zero.

For correct operation of the device, the logic thresholds and timing parameters in Table 2 and Table 3 must be met at all times. Refer to Figure 10 and Figure 11 for visual diagrams of the timing parameters.

Figure 51. 4-Wire SPI Connection Diagram

<!-- image -->

## SPI COMMANDS

The SPI port uses a multibyte structure where the first byte is a command. The ADXL367 command set is as follows:

- 0x0A: write register

- 0x0B: read register

- 0x0D: read FIFO

## Read and Write Register Commands

The command structure for the read register and write register commands is &lt;/CS down&gt; &lt;command byte (0x0A or 0x0B)&gt; &lt;address byte&gt; &lt;data byte&gt; &lt;additional data bytes for multi-byte&gt; … &lt;/CS up&gt;

The read and write register commands support multibyte (burst) read/write access. The waveform diagrams for multibyte read and write commands are shown in Figure 2 and Figure 3.

## Read FIFO Command

Reading from the FIFO buffer is a command structure that does not have an address, &lt;/CS down&gt; &lt;command byte (0x0D)&gt; &lt;data byte&gt; &lt;data byte&gt; … &lt;/CS up&gt;.

It is recommended that a full sample set be read (using a multibyte transaction). If a full sample set is not read using a multibyte transaction, FIFO can get discarded and the channel ID can slip out of synchronization. Data is presented most significant byte first, followed by the least significant byte.

## MULTIBYTE TRANSFERS

Multibyte transfers, also known as burst transfers, are supported for all SPI commands (register read, register write, and FIFO read commands). It is recommended that data be read using multibyte transfers to ensure that a concurrent and complete set of x-axis, y-axis, and z-axis acceleration (and temperature, where applicable) data is read.

The FIFO runs on the serial port clock during FIFO reads and can sustain bursting at the SPI clock rate as long as the SPI clock is fast enough to pop data faster than it is being written to the FIFO (depends on ODR).

## Register Read/Write Auto-Increment

A register read or write command begins with the address specified in the command and auto-increments for each additional byte in the transfer. Register 0x00 to Register 0x45 are user accessible. A multibyte register read that extends past Register 0x45 gives valid data only up to Register 0x45. Any attempt to read a higher register may result in invalid data.

## INVALID ADDRESSES AND ADDRESS ALIASING

The ADXL367 has a 7-bit address bus, mapping only 128 registers in the possible 256 register address space. Address 0x00 to Address 0x45 are for customer access, as described in Table 11. Address 0x46 to Address 0x7F are reserved for factory use. Any attempt to read beyond Register 0x7F results in invalid data.

## LATENCY RESTRICTIONS

Reading any of the data registers (Address 0x08 to Address 0x0A or Address 0x0E to Address 0x17) clears the data ready interrupt. There can be as much as a 120 µs delay from reading a register to the clearing of the data ready interrupt. This delay can increase to 420 μs in wake-up mode. Same delay applies to clear any other interrupt on STATUS, STATUS\_COPY, and STATUS2 registers.

Other register reads, register writes, and FIFO reads have no latency restrictions.

## INVALID COMMANDS

There are only three valid SPI commands for the ADXL367, 0x0A, 0x0B, and 0x0D. All other commands are invalid and must be avoided. When not receiving a valid command, the MISO output remains in a high impedance state, and the bus keeper holds the MISO line at its last value.

## SERIAL COMMUNICATIONS

## SPI BUS SHARING

When using the ADXL367 on the same SPI bus as another sensor, additional protection may be needed to maintain ultralow noise performance. This is especially important if the other devices use an SPI clock of 15 MHz or greater. Use a gated buffer on the SCLK line for the ADXL367 device. This gated SCLK allows the clock signal through only when the chip select (CS) line is low. See Figure 52 for the example circuit that provides this type of protection.

Figure 52. SCLK Protection Example

<!-- image -->

## I 2 C

With SCLK tied low to ground, the ADXL367 is in I 2 C mode, requiring a 2-wire connection, as shown in Figure 53. The ADXL367 conforms to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor. The ADXL367 meets this standard with the exception that it does not support dynamic switching into high speed mode. It supports standard (100 kHz) and fast (400 kHz) data transfer modes if the bus parameters given in Table 4 are met.

With the ASEL pin high, the 7-bit I 2 C address for the device is 0x53, followed by the R/W bit, as shown in Figure 53. This translates to

0xA6 for a write and 0xA7 for a read. An alternate I 2 C address of 0x1D (followed by the R/W bit) can be chosen by grounding the ASEL pin. This translates to 0x3A for a write and 0x3B for a read.

Single-byte or multiple-byte reads/writes are supported, as shown in Figure 54. More detailed FIFO read protocol information is described in Figure 12.

There are no internal pull-up or pull-down resistors for any unused pins. Therefore, there is no known state or default state for the ASEL pin if it is left floating or unconnected. It is required that the ASEL pin be connected to either V DDIO or ground when using I 2 C.

Figure 53. I 2 C Connection Diagram (Address 0x53)

<!-- image -->

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed V DDIO by more than 0.3 V. External pull-up resistors (R P ) are necessary for proper I 2 C operation. Refer to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, when selecting pull-up resistor values to ensure proper operation.

Figure 54. I 2 C Device Addressing (Read from Data Registers)

<!-- image -->

## REGISTER MAP

Table 11. Register Map

| Regist er   | Name                         | Bits        | Bit 7                        | Bit 6                           | Bit 5                           | Bit 4                           | Bit 3                           | Bit 2                           | Bit 1               | Bit 0               | Reset     | R/W     |
|-------------|------------------------------|-------------|------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------|---------------------|-----------|---------|
| 0x00        | DEVID_AD                     | [7:0]       | DEVID_AD                     | DEVID_AD                        | DEVID_AD                        | DEVID_AD                        | DEVID_AD                        | DEVID_AD                        | DEVID_AD            | DEVID_AD            | 0xAD      | R       |
| 0x01        | DEVID_MST                    | [7:0]       | DEVID_MST                    | DEVID_MST                       | DEVID_MST                       | DEVID_MST                       | DEVID_MST                       | DEVID_MST                       | DEVID_MST           | DEVID_MST           | 0x1D      | R       |
| 0x02        | PART_ID                      | [7:0]       | PART_ID                      | PART_ID                         | PART_ID                         | PART_ID                         | PART_ID                         | PART_ID                         | PART_ID             | PART_ID             | 0xF7      | R       |
| 0x03        | REV_ID                       | [7:0]       | REV_ID                       | REV_ID                          | REV_ID                          | REV_ID                          | REV_ID                          | REV_ID                          | REV_ID              | REV_ID              | 0x03      | R       |
| 0x04        | RESERVED                     | [7:0]       | RESERVED                     | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED            | RESERVED            | 0x00      | R       |
| 0x05        | SERIAL_NUMBE R_2             | [7:0]       | RESERVED                     | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED            | SERIAL_N UMBER[16 ] | 0x00      | R       |
| 0x06        | SERIAL_NUMBE R_1             | [7:0]       | SERIAL_NUMBER[15:8]          | SERIAL_NUMBER[15:8]             | SERIAL_NUMBER[15:8]             | SERIAL_NUMBER[15:8]             | SERIAL_NUMBER[15:8]             | SERIAL_NUMBER[15:8]             | SERIAL_NUMBER[15:8] | SERIAL_NUMBER[15:8] | 0x00      | R       |
| 0x07        | SERIAL_NUMBE R_0             | [7:0]       | SERIAL_NUMBER[7:0]           | SERIAL_NUMBER[7:0]              | SERIAL_NUMBER[7:0]              | SERIAL_NUMBER[7:0]              | SERIAL_NUMBER[7:0]              | SERIAL_NUMBER[7:0]              | SERIAL_NUMBER[7:0]  | SERIAL_NUMBER[7:0]  | 0x00      | R       |
| 0x08        | XDATA                        | [7:0]       | XDATA_H                      | XDATA_H                         | XDATA_H                         | XDATA_H                         | XDATA_H                         | XDATA_H                         | XDATA_H             | XDATA_H             | 0x00      | R       |
| 0x09        | YDATA                        | [7:0]       | YDATA_H                      | YDATA_H                         | YDATA_H                         | YDATA_H                         | YDATA_H                         | YDATA_H                         | YDATA_H             | YDATA_H             | 0x00      | R       |
| 0x0A        | ZDATA                        | [7:0]       | ZDATA_H                      | ZDATA_H                         | ZDATA_H                         | ZDATA_H                         | ZDATA_H                         | ZDATA_H                         | ZDATA_H             | ZDATA_H             | 0x00      | R       |
| 0x0B        | STATUS                       | [7:0]       | ERR_US ER_RE GS              | AWAKE                           | INACT                           | ACT                             | FIFO_OVER_ RUN                  | FIFO_WATER _MARK                | FIFO_REA DY         | DATA_RE ADY         | 0x40      | R       |
| 0x0C        | FIFO_ENTRIES_ L              | [7:0]       | FIFO_ENTRIES[7:0]            | FIFO_ENTRIES[7:0]               | FIFO_ENTRIES[7:0]               | FIFO_ENTRIES[7:0]               | FIFO_ENTRIES[7:0]               | FIFO_ENTRIES[7:0]               | FIFO_ENTRIES[7:0]   | FIFO_ENTRIES[7:0]   | 0x00      | R       |
| 0x0D        | FIFO_ENTRIES_ H              | [7:0]       | RESERVED                     | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED                        | FIFO_ENTRIES[9:8]   | FIFO_ENTRIES[9:8]   | 0x00      | R       |
| 0x0E        | XDATA_H                      | [7:0]       | XDATA[13:6]                  | XDATA[13:6]                     | XDATA[13:6]                     | XDATA[13:6]                     | XDATA[13:6]                     | XDATA[13:6]                     | XDATA[13:6]         | XDATA[13:6]         | 0x00      | R       |
| 0x0F        | XDATA_L                      | [7:0]       | XDATA[5:0]                   | XDATA[5:0]                      | XDATA[5:0]                      | XDATA[5:0]                      | XDATA[5:0]                      | XDATA[5:0]                      | RESERVED            | RESERVED            | 0x00      | R       |
| 0x10        | YDATA_H                      | [7:0]       | YDATA[13:6]                  | YDATA[13:6]                     | YDATA[13:6]                     | YDATA[13:6]                     | YDATA[13:6]                     | YDATA[13:6]                     |                     |                     | 0x00      | R       |
| 0x11        | YDATA_L                      | [7:0]       | YDATA[5:0]                   | YDATA[5:0]                      | YDATA[5:0]                      | YDATA[5:0]                      | YDATA[5:0]                      | YDATA[5:0]                      | RESERVED            | RESERVED            | 0x00      | R       |
| 0x12        | ZDATA_H                      | [7:0]       | ZDATA[13:6]                  | ZDATA[13:6]                     | ZDATA[13:6]                     | ZDATA[13:6]                     | ZDATA[13:6]                     | ZDATA[13:6]                     |                     |                     | 0x00      | R       |
| 0x13        | ZDATA_L                      | [7:0]       | ZDATA[5:0]                   | ZDATA[5:0]                      | ZDATA[5:0]                      | ZDATA[5:0]                      | ZDATA[5:0]                      | ZDATA[5:0]                      | RESERVED            | RESERVED            | 0x00      | R       |
| 0x14        | TEMP_H                       | [7:0]       | TEMP_DATA[13:6]              | TEMP_DATA[13:6]                 | TEMP_DATA[13:6]                 | TEMP_DATA[13:6]                 | TEMP_DATA[13:6]                 | TEMP_DATA[13:6]                 |                     |                     | 0x00      | R       |
| 0x15        | TEMP_L                       | [7:0]       | TEMP_DATA[5:0]               | TEMP_DATA[5:0]                  | TEMP_DATA[5:0]                  | TEMP_DATA[5:0]                  | TEMP_DATA[5:0]                  | TEMP_DATA[5:0]                  | RESERVED            | RESERVED            | 0x00      | R       |
| 0x16        | EX_ADC_H                     | [7:0]       | EX_ADC_DATA[13:6]            | EX_ADC_DATA[13:6]               | EX_ADC_DATA[13:6]               | EX_ADC_DATA[13:6]               | EX_ADC_DATA[13:6]               | EX_ADC_DATA[13:6]               |                     |                     | 0x00      | R       |
| 0x17        | EX_ADC_L                     | [7:0]       | EX_ADC_DATA[5:0]             | EX_ADC_DATA[5:0]                | EX_ADC_DATA[5:0]                | EX_ADC_DATA[5:0]                | EX_ADC_DATA[5:0]                | EX_ADC_DATA[5:0]                | RESERVED            | RESERVED            | 0x00      | R       |
| 0x18        | I2C_FIFO_DATA                | [7:0]       | I2C_FIFO_DATA                | I2C_FIFO_DATA                   | I2C_FIFO_DATA                   | I2C_FIFO_DATA                   | I2C_FIFO_DATA                   | I2C_FIFO_DATA                   |                     |                     | 0x00      | R       |
| 0x1F        | SOFT_RESET                   | [7:0]       | RESERVED                     | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED                        | RESERVED                        | SOFT_RE SET         | RESERVE D           | 0x52      | W       |
| 0x20        | THRESH_ACT_ H                | [7:0]       | RESER THRESH_ACT[12:6]       | RESER THRESH_ACT[12:6]          | RESER THRESH_ACT[12:6]          | RESER THRESH_ACT[12:6]          | RESER THRESH_ACT[12:6]          | RESER THRESH_ACT[12:6]          |                     |                     | 0x00      | R/W     |
|             |                              |             | VED                          | VED                             | VED                             | VED                             | VED                             | VED                             | RESERVED            | RESERVED            | 0x00      |         |
| 0x21        | THRESH_ACT_L                 | [7:0]       | THRESH_ACT[5:0] TIME_ACT     | THRESH_ACT[5:0] TIME_ACT        | THRESH_ACT[5:0] TIME_ACT        | THRESH_ACT[5:0] TIME_ACT        | THRESH_ACT[5:0] TIME_ACT        | THRESH_ACT[5:0] TIME_ACT        |                     |                     |           | R/W     |
| 0x22        | TIME_ACT                     | [7:0] [7:0] | RESER VED THRESH_INACT[12:6] | RESER VED THRESH_INACT[12:6]    | RESER VED THRESH_INACT[12:6]    | RESER VED THRESH_INACT[12:6]    | RESER VED THRESH_INACT[12:6]    | RESER VED THRESH_INACT[12:6]    |                     |                     | 0x00      | R/W R/W |
| 0x23 0x24   | THRESH_INACT _H THRESH_INACT | [7:0]       | THRESH_INACT[5:0]            | THRESH_INACT[5:0]               | THRESH_INACT[5:0]               | THRESH_INACT[5:0]               | THRESH_INACT[5:0]               | THRESH_INACT[5:0]               |                     | RESERVED            | 0x00 0x00 | R/W     |
|             | _L TIME_INACT_H              |             |                              |                                 |                                 |                                 |                                 |                                 |                     |                     |           |         |
| 0x25        |                              | [7:0]       | TIME_INACT[15:8]             | TIME_INACT[15:8]                | TIME_INACT[15:8]                | TIME_INACT[15:8]                | TIME_INACT[15:8]                | TIME_INACT[15:8]                |                     |                     | 0x00      | R/W     |
| 0x26        | TIME_INACT_L                 | [7:0] [7:0] | TIME_INACT[7:0]              | TIME_INACT[7:0]                 | TIME_INACT[7:0]                 | TIME_INACT[7:0]                 | TIME_INACT[7:0]                 | TIME_INACT[7:0]                 |                     |                     | 0x00 0x00 | R/W R/W |
| 0x27        | ACT_INACT_CT L               |             | RESERVED LINKLOOP INACT_EN   | RESERVED LINKLOOP INACT_EN      | RESERVED LINKLOOP INACT_EN      | RESERVED LINKLOOP INACT_EN      | RESERVED LINKLOOP INACT_EN      | RESERVED LINKLOOP INACT_EN      | ACT_EN FIFO_MODE    | ACT_EN FIFO_MODE    |           | R/W     |
| 0x28        | FIFO_CONTROL                 | [7:0]       | RESER VED                    | CHANNEL_SELECT FIFO_SAMPL ES[8] | CHANNEL_SELECT FIFO_SAMPL ES[8] | CHANNEL_SELECT FIFO_SAMPL ES[8] | CHANNEL_SELECT FIFO_SAMPL ES[8] | CHANNEL_SELECT FIFO_SAMPL ES[8] |                     |                     | 0x00      |         |

## REGISTER MAP

Table 11. Register Map (Continued)

| Regist er                                 | Name                                      | Bits                                        | Bit 7                                       | Bit 6                                       | Bit 5                                       | Bit 4                                       | Bit 3                                       | Bit 2                                       | Bit 1 Bit 0                                 | Reset   | R/W   |
|-------------------------------------------|-------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------|-------|
| 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0] | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0] | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0]   | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0]   | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0]   | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0]   | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0]   | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0]   | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0]   | 0x29 FIFO_SAMPLES [7:0] FIFO_SAMPLES[7:0]   | 0x80    | R/W   |
| 0x2A                                      | INTMAP1_LOWE R                            | [7:0] INT_LO W_INT1                         | AWAKE_INT1                                  | INACT_INT1                                  | ACT_INT1                                    | FIFO_OVERR UN_INT1                          | FIFO_WATER MARK_INT1                        | FIFO_RDY _INT1                              | DATA_RD Y_INT1                              | 0x00    | R/W   |
| 0x2B                                      | INTMAP2_LOWE R                            | [7:0] INT_LO W_INT2                         | AWAKE_INT2                                  | INACT_INT2                                  | ACT_INT2                                    | FIFO_OVERR UN_INT2                          | FIFO_WATER MARK_INT2                        | FIFO_RDY _INT2                              | DATA_RD Y_INT2                              | 0x00    | R/W   |
| 0x2C                                      | FILTER_CTL                                | [7:0] RANGE                                 | [7:0] RANGE                                 | I2C_HS                                      | RESERVED                                    | EXT_SAMPL E                                 |                                             | ODR                                         |                                             | 0x23    | R/W   |
| 0x2D                                      | POWER_CTL                                 | [7:0] RESER VED                             | EXT_CLK                                     |                                             | NOISE                                       | WAKEUP                                      | AUTOSLEEP                                   | MEASURE                                     | MEASURE                                     | 0x00    | R/W   |
| 0x2E                                      | SELF_TEST                                 | [7:0] RESERVED                              | [7:0] RESERVED                              | [7:0] RESERVED                              | [7:0] RESERVED                              | [7:0] RESERVED                              | [7:0] RESERVED                              | ST_FORC E                                   | ST                                          | 0x00    | R/W   |
| 0x2F                                      | TAP_THRESH                                | [7:0] TAP_THRESH                            | [7:0] TAP_THRESH                            | [7:0] TAP_THRESH                            | [7:0] TAP_THRESH                            | [7:0] TAP_THRESH                            | [7:0] TAP_THRESH                            | [7:0] TAP_THRESH                            | [7:0] TAP_THRESH                            | 0x00    | R/W   |
| 0x30                                      | TAP_DUR                                   | [7:0] TAP_DUR                               | [7:0] TAP_DUR                               | [7:0] TAP_DUR                               | [7:0] TAP_DUR                               | [7:0] TAP_DUR                               | [7:0] TAP_DUR                               | [7:0] TAP_DUR                               | [7:0] TAP_DUR                               | 0x00    | R/W   |
| 0x31                                      | TAP_LATENT                                | [7:0] TAP_LATENT                            | [7:0] TAP_LATENT                            | [7:0] TAP_LATENT                            | [7:0] TAP_LATENT                            | [7:0] TAP_LATENT                            | [7:0] TAP_LATENT                            | [7:0] TAP_LATENT                            | [7:0] TAP_LATENT                            | 0x00    | R/W   |
| 0x32                                      | TAP_WINDOW                                | [7:0] TAP_WINDOW                            | [7:0] TAP_WINDOW                            | [7:0] TAP_WINDOW                            | [7:0] TAP_WINDOW                            | [7:0] TAP_WINDOW                            | [7:0] TAP_WINDOW                            | [7:0] TAP_WINDOW                            | [7:0] TAP_WINDOW                            | 0x00    | R/W   |
| 0x33                                      | X_OFFSET                                  | [7:0] RESERVED X_USER_OFFSET                | [7:0] RESERVED X_USER_OFFSET                | [7:0] RESERVED X_USER_OFFSET                | [7:0] RESERVED X_USER_OFFSET                | [7:0] RESERVED X_USER_OFFSET                | [7:0] RESERVED X_USER_OFFSET                | [7:0] RESERVED X_USER_OFFSET                | [7:0] RESERVED X_USER_OFFSET                | 0x00    | R/W   |
| 0x34                                      | Y_OFFSET                                  | [7:0] RESERVED Y_USER_OFFSET                | [7:0] RESERVED Y_USER_OFFSET                | [7:0] RESERVED Y_USER_OFFSET                | [7:0] RESERVED Y_USER_OFFSET                | [7:0] RESERVED Y_USER_OFFSET                | [7:0] RESERVED Y_USER_OFFSET                | [7:0] RESERVED Y_USER_OFFSET                | [7:0] RESERVED Y_USER_OFFSET                | 0x00    | R/W   |
| 0x35                                      | Z_OFFSET                                  | [7:0] RESERVED Z_USER_OFFSET                | [7:0] RESERVED Z_USER_OFFSET                | [7:0] RESERVED Z_USER_OFFSET                | [7:0] RESERVED Z_USER_OFFSET                | [7:0] RESERVED Z_USER_OFFSET                | [7:0] RESERVED Z_USER_OFFSET                | [7:0] RESERVED Z_USER_OFFSET                | [7:0] RESERVED Z_USER_OFFSET                | 0x00    | R/W   |
| 0x36                                      | X_SENS                                    | [7:0] RESERVED X_USER_SENS                  | [7:0] RESERVED X_USER_SENS                  | [7:0] RESERVED X_USER_SENS                  | [7:0] RESERVED X_USER_SENS                  | [7:0] RESERVED X_USER_SENS                  | [7:0] RESERVED X_USER_SENS                  | [7:0] RESERVED X_USER_SENS                  | [7:0] RESERVED X_USER_SENS                  | 0x00    | R/W   |
| 0x37                                      | Y_SENS                                    | [7:0] RESERVED Y_USER_SENS                  | [7:0] RESERVED Y_USER_SENS                  | [7:0] RESERVED Y_USER_SENS                  | [7:0] RESERVED Y_USER_SENS                  | [7:0] RESERVED Y_USER_SENS                  | [7:0] RESERVED Y_USER_SENS                  | [7:0] RESERVED Y_USER_SENS                  | [7:0] RESERVED Y_USER_SENS                  | 0x00    | R/W   |
| 0x38                                      | Z_SENS                                    | [7:0] RESERVED Z_USER_SENS                  | [7:0] RESERVED Z_USER_SENS                  | [7:0] RESERVED Z_USER_SENS                  | [7:0] RESERVED Z_USER_SENS                  | [7:0] RESERVED Z_USER_SENS                  | [7:0] RESERVED Z_USER_SENS                  | [7:0] RESERVED Z_USER_SENS                  | [7:0] RESERVED Z_USER_SENS                  | 0x00    | R/W   |
| 0x39                                      | TIMER_CTL                                 | [7:0] WAKEUP_RATE RESERVED TIMER_KEEP_ALIVE | [7:0] WAKEUP_RATE RESERVED TIMER_KEEP_ALIVE | [7:0] WAKEUP_RATE RESERVED TIMER_KEEP_ALIVE | [7:0] WAKEUP_RATE RESERVED TIMER_KEEP_ALIVE | [7:0] WAKEUP_RATE RESERVED TIMER_KEEP_ALIVE | [7:0] WAKEUP_RATE RESERVED TIMER_KEEP_ALIVE | [7:0] WAKEUP_RATE RESERVED TIMER_KEEP_ALIVE | [7:0] WAKEUP_RATE RESERVED TIMER_KEEP_ALIVE | 0x00    | R/W   |
| 0x3A                                      | INTMAP1_UPPE R                            | [7:0] ERR_FU SE_INT1                        | ERR_USER_R EGS_INT1                         | RESERVED                                    | KPALV_TIME R_INT1                           | TEMP_ADC_ HI_INT1                           | TEMP_ADC_L OW_INT1                          | TAP_TWO _INT1                               | TAP_ONE _INT1                               | 0x00    | R/W   |
| 0x3B                                      | INTMAP2_UPPE R                            | [7:0]                                       | ERR_FU SE_INT2 ERR_USER_R EGS_INT2          | RESERVED                                    | KPALV_TIME R_INT2                           | TEMP_ADC_ HI_INT2                           | TEMP_ADC_L OW_INT2                          | TAP_TWO _INT2                               | TAP_ONE _INT2                               | 0x00    | R/W   |
| 0x3C                                      | ADC_CTL                                   | [7:0]                                       | FIFO_8_12BIT                                | RESERVED                                    | RESERVED                                    | ADC_INACT_ EN                               | RESERVED                                    | ADC_ACT _EN                                 | ADC_EN                                      | 0xC0    | R/W   |
| 0x3D                                      | TEMP_CTL                                  | [7:0] RESERVED                              | [7:0] RESERVED                              | [7:0] RESERVED                              | [7:0] RESERVED                              | TEMP_INACT _EN                              | RESERVED                                    | TEMP_AC T_EN                                | TEMP_EN                                     | 0x00    | R/W   |
| 0x3E                                      | TEMP_ADC_OV ER_THRSH_H                    | [7:0] RESER VED TEMP_ADC_THRESH_HIGH[12:6]  | [7:0] RESER VED TEMP_ADC_THRESH_HIGH[12:6]  | [7:0] RESER VED TEMP_ADC_THRESH_HIGH[12:6]  | [7:0] RESER VED TEMP_ADC_THRESH_HIGH[12:6]  | [7:0] RESER VED TEMP_ADC_THRESH_HIGH[12:6]  | [7:0] RESER VED TEMP_ADC_THRESH_HIGH[12:6]  | [7:0] RESER VED TEMP_ADC_THRESH_HIGH[12:6]  | [7:0] RESER VED TEMP_ADC_THRESH_HIGH[12:6]  | 0x00    | R/W   |
| 0x3F TEMP_ADC_OV ER_THRSH_L               | [7:0]                                     | TEMP_ADC_THRESH_HIGH[5:0]                   | TEMP_ADC_THRESH_HIGH[5:0]                   | TEMP_ADC_THRESH_HIGH[5:0]                   | TEMP_ADC_THRESH_HIGH[5:0]                   | TEMP_ADC_THRESH_HIGH[5:0]                   | TEMP_ADC_THRESH_HIGH[5:0]                   | RESERVED                                    | RESERVED                                    | 0x00    | R/W   |
| 0x40                                      | TEMP_ADC_UN DER_THRSH_H                   | [7:0] RESER VED TEMP_ADC_THRESH_LOW[12:6]   | [7:0] RESER VED TEMP_ADC_THRESH_LOW[12:6]   | [7:0] RESER VED TEMP_ADC_THRESH_LOW[12:6]   | [7:0] RESER VED TEMP_ADC_THRESH_LOW[12:6]   | [7:0] RESER VED TEMP_ADC_THRESH_LOW[12:6]   | [7:0] RESER VED TEMP_ADC_THRESH_LOW[12:6]   | [7:0] RESER VED TEMP_ADC_THRESH_LOW[12:6]   | [7:0] RESER VED TEMP_ADC_THRESH_LOW[12:6]   | 0x00    | R/W   |
| 0x41                                      | TEMP_ADC_UN DER_THRSH_L                   | [7:0] TEMP_ADC_THRESH_LOW[5:0]              | [7:0] TEMP_ADC_THRESH_LOW[5:0]              | [7:0] TEMP_ADC_THRESH_LOW[5:0]              | [7:0] TEMP_ADC_THRESH_LOW[5:0]              | [7:0] TEMP_ADC_THRESH_LOW[5:0]              | [7:0] TEMP_ADC_THRESH_LOW[5:0]              | RESERVED                                    | RESERVED                                    | 0x00    | R/W   |
| 0x42                                      | TEMP_ADC_TIM ER                           | [7:0] TIMER_TEMP_ADC_INACT                  | [7:0] TIMER_TEMP_ADC_INACT                  | [7:0] TIMER_TEMP_ADC_INACT                  | [7:0] TIMER_TEMP_ADC_INACT                  | TIMER_TEMP_ADC_ACT                          | TIMER_TEMP_ADC_ACT                          | TIMER_TEMP_ADC_ACT                          | TIMER_TEMP_ADC_ACT                          | 0x00    | R/W   |
| 0x43 AXIS_MASK                            | [7:0]                                     | RESERVED TAP_AXIS                           | RESERVED TAP_AXIS                           | RESERVED TAP_AXIS                           | RESERVED TAP_AXIS                           | RESERVED                                    | ACT_INACT_ Z                                | ACT_INAC T_Y                                | ACT_INAC T_X                                | 0x00    | R/W   |
| 0x44                                      | STATUS_COPY                               | [7:0] ERR_US ER_RE GS                       | AWAKE                                       | INACT                                       | ACT                                         | FIFO_OVER_ RUN                              | FIFO_WATER _MARK                            | FIFO_REA DY                                 | DATA_RE ADY                                 | 0x40    | R     |
| 0x45                                      | STATUS_2                                  | [7:0] ERR_FU SE_REG S                       | FUSE_REFRE SH                               | RESERVED                                    | TIMER                                       | TEMP_ADC_ HI                                | TEMP_ADC_L OW                               | TAP_TWO                                     | TAP_ONE                                     | 0x00    | R     |

## REGISTER DETAILS

This section describes the functions of the ADXL367 registers. The ADXL367 powers up with the default register values i shown in Table 13.

Note that any changes to the registers before the POWER\_CTL register (Register 0x00 to Register 0x2C) must be made with the

## ADI DEVICE ID REGISTER

Address: 0x00, Reset: 0xAD, Name: DEVID\_AD

<!-- image -->

## Table 12. Bit Descriptions for DEVID\_AD

<!-- image -->

| Bits   | Bit Name   | Settings   | Description                                         | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------|---------|----------|
| [7:0]  | DEVID_AD   |            | This register contains the Analog Devices device ID | 0xAD    | R        |

## MEMS DEVICE ID REGISTER

Address: 0x01, Reset: 0x1D, Name: DEVID\_MST

<!-- image -->

## Table 13. Bit Descriptions for DEVID\_MST

<!-- image -->

| Bits   | Bit Name   | Settings   | Description                                              | Reset   | Access   |
|--------|------------|------------|----------------------------------------------------------|---------|----------|
| [7:0]  | DEVID_MST  |            | This register contains the Analog Devices MEMS device ID | 0x1D    | R        |

## PART ID REGISTER

Address: 0x02, Reset: 0xF7, Name: PART\_ID

## Table 14. Bit Descriptions for PART\_ID

<!-- image -->

| Bits   | Bit Name   | Settings   | Description                          | Reset   | Access   |
|--------|------------|------------|--------------------------------------|---------|----------|
| [7:0]  | PART_ID    |            | This register contains the device ID | 0xF7    | R        |

## REVISION ID REGISTER

Address: 0x03, Reset: 0x03, Name: REV\_ID

## Table 15. Bit Descriptions for REV\_ID

<!-- image -->

| Bits   | Bit Name   | Settings   | Description                                    | Reset   | Access   |
|--------|------------|------------|------------------------------------------------|---------|----------|
| [7:0]  | REV_ID     |            | This register contains the product revision ID | 0x03    | R        |

## XID REGISTERS

Address: 0x04, Reset: 0x00, Name: SERIAL\_NUMBER\_3

device in standby. If changes are made while the ADXL367 is in measurement mode, they may be effective for only part of a measurement.

<!-- image -->

## REGISTER DETAILS

<!-- image -->

Table 16. Bit Descriptions for SERIAL\_NUMBER\_3

| Bits   | Bit Name             | Settings   | Description                                             | Reset   | Access   |
|--------|----------------------|------------|---------------------------------------------------------|---------|----------|
| [7:4]  | RESERVED             |            | Reserved.                                               | 0x0     | R        |
| [3:0]  | SERIAL_NUMBER[27:24] |            | This register contains the 31-bit product serial number | 0x0     | R        |

Address: 0x05, Reset: 0x00, Name: SERIAL\_NUMBER\_2

<!-- image -->

Table 17. Bit Descriptions for SERIAL\_NUMBER\_2

| Bits   | Bit Name             | Settings   | Description                                             | Reset   | Access   |
|--------|----------------------|------------|---------------------------------------------------------|---------|----------|
| [7:0]  | SERIAL_NUMBER[23:16] |            | This register contains the 31-bit product serial number | 0x0     | R        |

Address: 0x06, Reset: 0x00, Name: SERIAL\_NUMBER\_1

<!-- image -->

## Table 18. Bit Descriptions for SERIAL\_NUMBER\_1

<!-- image -->

| Bits   | Bit Name            | Settings   | Description                                             | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------|---------|----------|
| [7:0]  | SERIAL_NUMBER[15:8] |            | This register contains the 31-bit product serial number | 0x0     | R        |

Address: 0x07, Reset: 0x00, Name: SERIAL\_NUMBER\_0

<!-- image -->

## Table 19. Bit Descriptions for SERIAL\_NUMBER\_0

| Bits   | Bit Name           | Settings   | Description                                             | Reset   | Access   |
|--------|--------------------|------------|---------------------------------------------------------|---------|----------|
| [7:0]  | SERIAL_NUMBER[7:0] |            | This register contains the 31-bit product serial number | 0x0     | R        |

## X-DATA BITS[13:6] REGISTER

Address: 0x08, Reset: 0x00, Name: XDATA

## Table 20. Bit Descriptions for XDATA

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                     | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | XDATA_H    |            | This register holds the eight most significant bits of the x-axis acceleration data. This limited resolution data register is used in power conscious applications where eight bits of data are sufficient: energy can be conserved by reading only one byte of data per axis, rather than two. | 0x0     | R        |

<!-- image -->

## REGISTER DETAILS

## Y-DATA BITS[13:6] REGISTER

Address: 0x09, Reset: 0x00, Name: YDATA

Table 21. Bit Descriptions for YDATA

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                     | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | YDATA_H    |            | This register holds the eight most significant bits of the y-axis acceleration data. This limited resolution data register is used in power conscious applications where eight bits of data are sufficient: energy can be conserved by reading only one byte of data per axis, rather than two. | 0x0     | R        |

## Z-DATA BITS[13:6] REGISTER

Address: 0x0A, Reset: 0x00, Name: ZDATA

Table 22. Bit Descriptions for ZDATA

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                     | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ZDATA_H    |            | This register holds the eight most significant bits of the z-axis acceleration data. This limited resolution data register is used in power conscious applications where eight bits of data are sufficient: energy can be conserved by reading only one byte of data per axis, rather than two. | 0x0     | R        |

## STATUS REGISTER

## Address: 0x0B, Reset: 0x40, Name: STATUS

<!-- image -->

Table 23. Bit Descriptions for STATUS

|   Bits | Bit Name      | Description                                                                                                                                                                                                                                                                                                                                                                                                   | Reset   | Access   |
|--------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | ERR_USER_REGS | SEU Error Detect. A 1 indicates one of two conditions: either an SEU event, such as an alpha particle of a power glitch, has disturbed a user register setting or the ADXL367 is not configured. This bit is high on both startup and soft reset, and resets as soon as any register write commands are performed.                                                                                            | 0x0     | R        |
|      6 | AWAKE         | Indicates whether the accelerometer is in an active (AWAKE = 1) or inactive (AWAKE = 0) state, based on the activity and inactivity functionality. To enable autosleep, activity and inactivity detection must be in linked mode or loop mode (LINKLOOP bits in the ACT_INACT_CTL register). Otherwise, this bit defaults to 1 and must be ignored. 0: device is inactive. 1: device is active (reset state). | 0x1     | R        |
|      5 | INACT         | Inactivity. A 1 indicates that the inactivity detection function has detected an inactivity or a free fall condition.                                                                                                                                                                                                                                                                                         | 0x0     | R        |
|      4 | ACT           | Activity. A 1 indicates that the activity detection function has detected an overthreshold condition.                                                                                                                                                                                                                                                                                                         | 0x0     | R        |

<!-- image -->

<!-- image -->

## REGISTER DETAILS

## Table 23. Bit Descriptions for STATUS (Continued)

|   Bits | Bit Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      3 | FIFO_OVER_RUN   | FIFO Overrun. A 1 indicates that the FIFO has overrun or overflowed. No new data is written to the FIFO until a FIFO read has occurred to free up some space for new data. FIFO_OVER_RUN is only available in FIFO_MODE = oldest saved mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 0x0     | R        |
|      2 | FIFO_WATER_MARK | FIFO Watermark. A 1 indicates that the FIFO contains at least the desired number of samples, as set in the FIFO_SAMPLES register. FIFO_WATER_MARK is asserted when the next sample (greater than the value) is written to the FIFO.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 0x0     | R        |
|      1 | FIFO_READY      | FIFO Ready. A 1 indicates that there is at least one sample available in the FIFO output buffer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 0x0     | R        |
|      0 | DATA_READY      | Data Ready. A 1 indicates that a new valid sample is available to be read. This bit clears when a DATA read is performed. DATA_READY is set when new valid data is available, it is cleared when no new data is available. The DATA_READY bit is not set while any of the data registers, Address 0x08 to Address 0x0A and Address 0x0E to Address 0x17, are being read. If DATA_READY = 0 prior to a register read and new data becomes available during the register read, DATA_READY remains at 0 until the read is complete and, only then, is set to 1. If DATA_READY = 1 prior to a register read, it is cleared at the start of the register read. If DATA_READY = 1 prior to a register read and new data becomes available during the register read, DATA_READY is cleared to 0 at the start of the register read and remains at 0 throughout the read. When the read is complete, DATA_READY is set to 1. | 0x0     | R        |

## FIFO ENTRIES BITS[7:0] REGISTER

Address: 0x0C, Reset: 0x00, Name: FIFO\_ENTRIES\_L

<!-- image -->

## Table 24. Bit Descriptions for FIFO\_ENTRIES\_L

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                                                                  | Reset   | Access   |
|--------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_ENTRIES[7:0] |            | These registers indicate the number of valid data samples present in the FIFO buffer. This number ranges from 0 to 512 or 0x00 to 0x200. FIFO_ENTRIES_L contains the least significant byte. FIFO_ENTRIES_H contains the two most significant bits. Bits[15:10] of FIFO_ENTRIES_H are unused (represented as X = don't care) | 0x0     | R        |

## FIFO ENTRIES BITS[9:8] REGISTER

Address: 0x0D, Reset: 0x00, Name: FIFO\_ENTRIES\_H

<!-- image -->

## Table 25. Bit Descriptions for FIFO\_ENTRIES\_H

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                                                                  | Reset   | Access   |
|--------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | RESERVED          |            | Reserved.                                                                                                                                                                                                                                                                                                                    | 0x0     | R        |
| [1:0]  | FIFO_ENTRIES[9:8] |            | These registers indicate the number of valid data samples present in the FIFO buffer. This number ranges from 0 to 512 or 0x00 to 0x200. FIFO_ENTRIES_L contains the least significant byte. FIFO_ENTRIES_H contains the two most significant bits. Bits[15:10] of FIFO_ENTRIES_H are unused (represented as X = don't care) | 0x0     | R        |

## X-DATA BITS[13:6] REGISTER

Address: 0x0E, Reset: 0x00, Name: XDATA\_H

<!-- image -->

## REGISTER DETAILS

## Table 26. Bit Descriptions for XDATA\_H

| Bits   | Bit Name    | Settings   | Description                                                                                                                                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|-------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | XDATA[13:6] |            | These two registers contain the sign extended (X) x-axis acceleration data. XDATA_H contains the eight most significant bits (MSBs), and XDATA_L contains the six least significant bits (LSBs) of the 14-bit value. Note that Register 0x0F must always be read immediately after this register to clear data ready. If 8-bit data is desired, read Register 0x08. | 0x0     | R        |

## X-DATA BITS[5:0] REGISTER

Address: 0x0F, Reset: 0x00, Name: XDATA\_L

<!-- image -->

## Table 27. Bit Descriptions for XDATA\_L

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | XDATA[5:0] |            | These two registers contain the sign extended (X) x-axis acceleration data. XDATA_H contains the eight MSBs, and XDATA_L contains the six LSBs of the 14-bit value. | 0x0     | R        |
| [1:0]  | RESERVED   |            | Reserved.                                                                                                                                                           | 0x0     | R        |

## Y-DATA BITS[13:6] REGISTER

Address: 0x10, Reset: 0x00, Name: YDATA\_H

<!-- image -->

## Table 28. Bit Descriptions for YDATA\_H

| Bits   | Bit Name    | Settings   | Description                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|-------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | YDATA[13:6] |            | These two registers contain the sign extended (Y) y-axis acceleration data. YDATA_H contains the eight MSBs, and YDATA_L contains the six LSBs of the 14-bit value. Note that Register 0x11 must always be read immediately after this register to clear data ready. If 8-bit data is desired, read Register 0x09. | 0x0     | R        |

## Y-DATA BITS[5:0] REGISTER

Address: 0x11, Reset: 0x00, Name: YDATA\_L

<!-- image -->

## Table 29. Bit Descriptions for YDATA\_L

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | YDATA[5:0] |            | These two registers contain the sign extended (Y) y-axis acceleration data. YDATA_H contains the eight MSBs, and YDATA_L contains the six LSBs of the 14-bit value. | 0x0     | R        |
| [1:0]  | RESERVED   |            | Reserved.                                                                                                                                                           | 0x0     | R        |

## Z-DATA BITS[13:6] REGISTER

Address: 0x12, Reset: 0x00, Name: ZDATA\_H

## REGISTER DETAILS

Table 30. Bit Descriptions for ZDATA\_H

| Bits   | Bit Name    | Settings   | Description                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|-------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ZDATA[13:6] |            | These two registers contain the sign extended (Z) z-axis acceleration data. ZDATA_H contains the eight MSBs, and ZDATA_L contains the six LSBs of the 14-bit value. Note that Register 0x13 must always be read immediately after this register to clear data ready. If 8-bit data is desired, read Register 0x0A. | 0x0     | R        |

## Z-DATA BITS[5:0] REGISTER

Address: 0x13, Reset: 0x00, Name: ZDATA\_L

<!-- image -->

## Table 31. Bit Descriptions for ZDATA\_L

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | ZDATA[5:0] |            | These two registers contain the sign extended (Z) z-axis acceleration data. ZDATA_H contains the eight MSBs, and ZDATA_L contains the six LSBs of the 14-bit value. | 0x0     | R        |
| [1:0]  | RESERVED   |            | Reserved.                                                                                                                                                           | 0x0     | R        |

## TEMPERATE DATA BITS[13:6] REGISTER

Address: 0x14, Reset: 0x00, Name: TEMP\_H

<!-- image -->

## Table 32. Bit Descriptions for TEMP\_H

| Bits   | Bit Name        | Settings   | Description                                                                                                                                             | Reset   | Access   |
|--------|-----------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TEMP_DATA[13:6] |            | These two registers contain the sign extended (T) temperate data. TEMP_H contains the eight MSBs, and TEMP_L contains the six LSBs of the 14-bit value. | 0x0     | R        |

## TEMPERATE DATA BITS[5:0] REGISTER

Address: 0x15, Reset: 0x00, Name: TEMP\_L

<!-- image -->

## Table 33. Bit Descriptions for TEMP\_L

| Bits   | Bit Name       | Settings   | Description                                                                                                                                             | Reset   | Access   |
|--------|----------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | TEMP_DATA[5:0] |            | These two registers contain the sign extended (T) temperate data. TEMP_H contains the eight MSBs, and TEMP_L contains the six LSBs of the 14-bit value. | 0x0     | R        |
| [1:0]  | RESERVED       |            | Reserved.                                                                                                                                               | 0x0     | R        |

## ADC DATA BITS[13:6] REGISTER

Address: 0x16, Reset: 0x00, Name: EX\_ADC\_H

<!-- image -->

## REGISTER DETAILS

Table 36. Bit Descriptions for I2C\_FIFO\_DATA

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Reset   | Access   |
|--------|---------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | I2C_FIFO_DATA |            | I 2 C FIFO Data Read Address. A read to this address pops an effective words of axis data from the FIFO. Two subsequent reads or a multibyte read completes the transaction of this data onto the interface. Continued reading or a sustained multibyte read of this field continues to pop the FIFO. Multibyte reads to this address do not increment the address pointer. If this address is read due to an auto-increment from the previous address, it does not pop the FIFO. Instead, it skips over this address. | 0x0     | R        |

## SOFT RESET REGISTER

Address: 0x1F, Reset: 0x52, Name: SOFT\_RESET

<!-- image -->

Table 37. Bit Descriptions for SOFT\_RESET

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                   | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | RESERVED   |            | Reserved.                                                                                                                                                                                                     | 0x14    | R        |
| 1      | SOFT_RESET |            | Writing code 0x52 (representing the letter R in ASCII or unicode) to this register immediately resets the ADXL367. All register settings are cleared, and the sensor is placed in standby. Interrupt pins are | 0x1     | W        |

<!-- image -->

Table 34. Bit Descriptions for EX\_ADC\_H

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                      | Reset   | Access   |
|--------|-------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | EX_ADC_DATA[13:6] |            | These two registers contain the sign extended (ADC) external connected input ADC data. EX_ADC_H contains the eight MSBs, and EX_ADC_L contains the six LSBs of the 14-bit value. | 0x0     | R        |

## ADC DATA BITS[5:0] REGISTER

Address: 0x17, Reset: 0x00, Name: EX\_ADC\_L

<!-- image -->

Table 35. Bit Descriptions for EX\_ADC\_L

| Bits   | Bit Name         | Settings   | Description                                                                                                                                                                      | Reset   | Access   |
|--------|------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | EX_ADC_DATA[5:0] |            | These two registers contain the sign extended (ADC) external connected input ADC data. EX_ADC_H contains the eight MSBs, and EX_ADC_L contains the six LSBs of the 14-bit value. | 0x0     | R        |
| [1:0]  | RESERVED         |            | Reserved.                                                                                                                                                                        | 0x0     | R        |

## I 2 C FIFO DATA REGISTER

Address: 0x18, Reset: 0x00, Name: I2C\_FIFO\_DATA

<!-- image -->

## REGISTER DETAILS

## Table 37. Bit Descriptions for SOFT\_RESET (Continued)

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                      | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |            |            | configured to a high output impedance mode and held to a valid state by bus keepers when not being internally driven. This is a write-only register. If read, data in it is always 0x00. A latency of 7.5 ms is required after a software reset. |         |          |
| 0      | RESERVED   |            | Reserved.                                                                                                                                                                                                                                        | 0x0     | R        |

## THRESHOLD ACTIVITY BITS[12:6] REGISTER

Address: 0x20, Reset: 0x00, Name: THRESH\_ACT\_H

<!-- image -->

Table 38. Bit Descriptions for THRESH\_ACT\_H

| Bits   | Bit Name         | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Reset   | Access   |
|--------|------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED         |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 0x0     | R        |
| [6:0]  | THRESH_ACT[12:6] |            | To detect activity, the ADXL367 compares the absolute value of the 14-bit (signed) acceleration data with the 13-bit (unsigned) THRESH_ACT value. See the Motion Detection section for more information on activity detection. The term, THRESH_ACT, refers to an 13-bit unsigned value comprised of the THRESH_ACT_L register, which holds its six LSBs (THRESH_ACT[5:0]), and the THRESH_ACT_H register, which holds its seven MSBs (THRESH_ACT[12:6]). THRESH_ACT is set in codes. The value in g depends on the measurement range setting that is selected. | 0x0     | R/W      |

## THRESHOLD ACTIVITY BITS[5:0] REGISTER

Address: 0x21, Reset: 0x00, Name: THRESH\_ACT\_L

## Table 39. Bit Descriptions for THRESH\_ACT\_L

| Bits   | Bit Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Reset   | Access   |
|--------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | THRESH_ACT[5:0] | To detect activity, the ADXL367 compares the absolute value of the 14-bit (signed) acceleration data with the 13-bit (unsigned) THRESH_ACT value. See the Motion Detection section for more information on activity detection. The term, THRESH_ACT, refers to a 13-bit unsigned value comprised of the THRESH_ACT_L register, which holds its six LSBs (THRESH_ACT[5:0]), and the THRESH_ACT_H register, which holds its seven MSBs (THRESH_ACT[12:6]). THRESH_ACT is set in codes. The value in g depends on the measurement range setting that is selected. | 0x0     | R/W      |
| [1:0]  | RESERVED        | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | R        |

## TIMED ACTIVITY REGISTER

Address: 0x22, Reset: 0x00, Name: TIME\_ACT

<!-- image -->

Table 40. Bit Descriptions for TIME\_ACT

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                     | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_ACT   |            | The activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used, only sustained motion can trigger activity detection. Refer to the Fewer False | 0x0     | R/W      |

## REGISTER DETAILS

Table 40. Bit Descriptions for TIME\_ACT (Continued)

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                    | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |            |            | Positives section for additional information. The value in this register sets the number of consecutive samples that must have at least one axis greater than the activity threshold (set by THRESH_ACT) for an activity event to be detected. |         |          |

## THRESHOLD INACTIVITY BITS[12:6] REGISTER

Address: 0x23, Reset: 0x00, Name: THRESH\_INACT\_H

Table 41. Bit Descriptions for THRESH\_INACT\_H

| Bits   | Bit Name           | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Reset   | Access   |
|--------|--------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED           |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 0x0     | R        |
| [6:0]  | THRESH_INACT[12:6] |            | To detect inactivity, the absolute value of the 14-bit acceleration data is compared with the 13-bit (unsigned) THRESH_INACT value, inactivity = acceleration < acceleration. See the Motion Detection section for more information. The term, THRESH_INACT, refers to a 13-bit unsigned value comprised of the THRESH_INACT_L registers, which holds its six LSBs (THRESH_INACT[5:0]) and the THRESH_INACT_H register, which holds its seven MSBs (THRESH_INACT[12:6]). | 0x0     | R/W      |

## THRESHOLD INACTIVITY BITS[5:0] REGISTER

Address: 0x24, Reset: 0x00, Name: THRESH\_INACT\_L

Table 42. Bit Descriptions for THRESH\_INACT\_L

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|-------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | THRESH_INACT[5:0] |            | To detect inactivity, the absolute value of the 14-bit acceleration data is compared with the 13-bit (unsigned) THRESH_INACT value, inactivity = acceleration < acceleration. See the Motion Detection section for more information. The term, THRESH_INACT, refers to a 13-bit unsigned value comprised of the THRESH_INACT_L register, which holds its six LSBs (THRESH_INACT[5:0]) and the THRESH_INACT_H register, which holds its seven MSBs (THRESH_INACT[12:6]). | 0x0     | R/W      |
| [1:0]  | RESERVED          |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R        |

## TIMED INACTIVITY BITS[15:8] REGISTER

Address: 0x25, Reset: 0x00, Name: TIME\_INACT\_H

Table 43. Bit Descriptions for TIME\_INACT\_H

| Bits   | Bit Name         | Settings   | Description                                                                                                                                                                                          | Reset   | Access   |
|--------|------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_INACT[15:8] |            | The 16-bit value in these registers sets the number of consecutive samples that must have all axes lower than the inactivity threshold (set by THRESH_INACT) for an inactivity event to be detected. | 0x0     | R/W      |

<!-- image -->

## REGISTER DETAILS

## TIMED INACTIVITY BITS[7:0] REGISTER

Address: 0x26, Reset: 0x00, Name: TIME\_INACT\_L

<!-- image -->

Table 44. Bit Descriptions for TIME\_INACT\_L

| Bits   | Bit Name        | Settings   | Description                                                                                                                                                                                          | Reset   | Access   |
|--------|-----------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TIME_INACT[7:0] |            | The 16-bit value in these registers sets the number of consecutive samples that must have all axes lower than the inactivity threshold (set by THRESH_INACT) for an inactivity event to be detected. | 0x0     | R/W      |

## ACTIVITY INACTIVITY CONTROL REGISTER

Address: 0x27, Reset: 0x00, Name: ACT\_INACT\_CTL

<!-- image -->

Table 45. Bit Descriptions for ACT\_INACT\_CTL

| Bits   | Bit Name   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Reset   | Access   |
|--------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RESERVED   | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 0x0     | R        |
| [5:4]  | LINKLOOP   | Enable and configuration settings for linking or looping detection modes as well as host microcontroller interrupt handling. 00: activity and inactivity detection are both enabled, and their interrupts (if mapped) must be acknowledged by the host processor by reading the STATUS register. Autosleep is disabled in this mode. Use this mode for free fall detection applications. Activity on temperature or ADC is only supported in this mode. 01: activity and inactivity detection are linked sequentially so that only one is enabled at a time. Their interrupts (if mapped) must be acknowledged by the host processor by reading the STATUS register. This setting only affects x-channel, y-channel, and z-channel configuration, it has no effect on temperature or ADC. 10: activity and inactivity detection are both enabled, and their interrupts (if mapped) must be acknowledged by the host processor by reading the STATUS register. Autosleep is disabled in this mode. Use this mode for free fall detection applications. Activity on temperature or ADC is only supported in this mode. 11: activity and inactivity detection are linked sequentially so that only one is enabled at a time, and their interrupts are internally acknowledged (do not need to be serviced by the host processor). To use either linked or looped mode, both ACT_EN (Bits[1:0]) and INACT_EN (Bits[3:2]) must be set to 1. Otherwise, the default mode is used. For additional information, refer to the Linking Activity and Inactivity Detection section. This setting only effects x-channel, y-channel, and z-channel configuration, it has no effect on temperature or ADC. | 0x0     | R/W      |
| [3:2]  | INACT_EN   | Referenced or Absolute (Default) Inactivity Mode Enable. 00: no inactivity detection enabled. 01: inactivity enable. 10: no inactivity detection enabled. 11: Referenced inactivity enable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 0x0     | R/W      |
| [1:0]  | ACT_EN     | Activity Enable. 00: no activity detection. 01: activity enable. 10: no activity detection. 11: referenced activity enable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 0x0     | R/W      |

## FIFO CONTROL REGISTER

Address: 0x28, Reset: 0x00, Name: FIFO\_CONTROL

## REGISTER DETAILS

<!-- image -->

Table 46. Bit Descriptions for FIFO\_CONTROL

| Bits   | Bit Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Reset   | Access   |
|--------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED        | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 0x0     | R/W      |
| [6:3]  | CHANNEL_SELECT  | Enables Selectable Axis Conversions. 0000: converts all three axis (x, y, z). This is the default mode. 0001: only x-axis data is converted. 0010: only y-axis data is converted. 0011: only z-axis data is converted. 0100: x-axis, y-axis, and z-axis data along with temperature is converted. The TEMP_EN bit (Register 0x3D) must be set to enable the temperature measurement. 0101: x-axis data along with temperature is converted. The TEMP_EN bit must be set to enable the temperature measurement. 0110: y-axis data along with temperature is converted. The TEMP_EN bit must be set to enable the temperature measurement. 0111: z-axis data along with temperature is converted. The TEMP_EN bit must be set to enable the temperature measurement. 1000: x-axis, y-axis, and z-axis data along with the external ADC is converted. The ADC_EN bit (Register 0x3C) must be set to enable the external ADC measurement. 1001: x-axis data along with the external ADC is converted. The ADC_EN bit must be set to enable the external ADC measurement. 1010: y-axis data along with the external ADC is converted. The ADC_EN bit must be set to enable the external ADC measurement. 1011: z-axis data along with the external ADC is converted. The ADC_EN bit must be set to enable the external ADC measurement. 1100: Do not use this setting. 1101: Do not use this setting. 1110: Do not use this setting.                                                        | 0x0     | R/W      |
| 2      | FIFO_SAMPLES[8] | The value in this register specifies the number of samples set to store in the FIFO. If the x-axis, y-axis, and z-axis are configured to be stored in the FIFO and a value of 2 is written to the FIFO samples, 6 samples are written into the FIFO. The full range of FIFO samples is 0 to 511. The default value of this register is 0x80 to avoid triggering the FIFO watermark interrupt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 0x0     | R/W      |
| [1:0]  | FIFO_MODE       | FIFO Mode Settings. Any changes to this setting must be made in standby mode only. To change from one mode to another, it is strongly recommended to go to mode = 00 (FIFO disabled) between modes to ensure no partial resets or samples occur. 00: FIFO disabled. 01: in oldest saved mode, the FIFO accumulates data until it is full and then stops. Additional data is collected only when space is made available by reading samples out of the FIFO buffer (this mode of operation is sometimes referred to as first N). 10: in stream mode, the FIFO always contains the most recent data. The oldest sample is discarded when space is needed to make room for a newer sample (this mode of operation is sometimes referred to as last N). Stream mode is useful for unburdening a host processor. The processor can tend to other tasks while data is being collected in the FIFO. When the FIFO fills to a certain number of samples (specified by the FIFO_SAMPLES register along with the FIFO_SAMPLES_MSB bit in the FIFO_CTL register), it triggers a FIFO watermark interrupt (if this interrupt is enabled). At this point, the host processor can read the contents of the entire FIFO and then return to its other tasks as the FIFO fills again. 11: in triggered mode, the FIFO saves samples surrounding an activity event. The operation is similar to a one time run trigger on an oscilloscope. The number of samples to be saved prior to the activity event | 0x0     | R/W      |

## REGISTER DETAILS

## Table 46. Bit Descriptions for FIFO\_CONTROL (Continued)

| Bits   | Bit Name   | Description                                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |            | is specified in FIFO_SAMPLES register, along with the FIFO_SAMPLES[8] bit in this FIFO_CONTROL register. When an activity event triggers the FIFO to start filling, the desired number of samples are stored, and the FIFO_WATER_MARK interrupt is activated (if mapped to an interrupt pin), a FIFO read must be taken before another interrupt can be activated. |         |          |

## FIFO SAMPLE REGISTER

Address: 0x29, Reset: 0x80, Name: FIFO\_SAMPLES

Table 47. Bit Descriptions for FIFO\_SAMPLES

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|-------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_SAMPLES[7:0] |            | The value in this register specifies the number of samples sets to store in the FIFO. If the x-axis, y-axis, and z-axis are configured to be stored in the FIFO and a value of 2 is written to the FIFO samples, then 6 samples are written into the FIFO. The full range of FIFO samples is 0 to 511. The default value of this register is 0x80 to avoid triggering the FIFO watermark interrupt. | 0x80    | R/W      |

## INTERRUPT PIN 1 ENABLES (LOWER) REGISTER

Address: 0x2A, Reset: 0x00, Name: INTMAP1\_LOWER

<!-- image -->

Table 48. Bit Descriptions for INTMAP1\_LOWER

|   Bits | Bit Name            | Description                                                                                                                                  | Reset   | Access   |
|--------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | INT_LOW_INT1        | Configures whether the pin operates in active high (Bit 7 low) or active low (Bit 7 high) mode. 1: interrupt enabled. 0: interrupt disabled. | 0x0     | R/W      |
|      6 | AWAKE_INT1          | 1 = maps the awake status to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                                      | 0x0     | R/W      |
|      5 | INACT_INT1          | 1 = maps the inactivity status to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                                 | 0x0     | R/W      |
|      4 | ACT_INT1            | Enable the activity detected interrupt to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                         | 0x0     | R/W      |
|      3 | FIFO_OVERRUN_INT1   | 1 = maps the FIFO overrun status to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                               | 0x0     | R/W      |
|      2 | FIFO_WATERMARK_INT1 | 1 = maps the FIFO watermark status to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                             | 0x0     | R/W      |

<!-- image -->

## REGISTER DETAILS

## Table 48. Bit Descriptions for INTMAP1\_LOWER (Continued)

|   Bits | Bit Name      | Description                                                                                                                        | Reset   | Access   |
|--------|---------------|------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      1 | FIFO_RDY_INT1 | 1 = maps the FIFO ready status to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                       | 0x0     | R/W      |
|      0 | DATA_RDY_INT1 | Set to 1 to map the DATA_READY bit (Register 0x0B and Register 0x44) to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled. | 0x0     | R/W      |

## INTERRUPT PIN 2 ENABLES (LOWER) REGISTER

Address: 0x2B, Reset: 0x00, Name: INTMAP2\_LOWER

<!-- image -->

Table 49. Bit Descriptions for INTMAP2\_LOWER

|   Bits | Bit Name            | Description                                                                                                                                  | Reset   | Access   |
|--------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | INT_LOW_INT2        | Configures whether the pin operates in active high (Bit 7 low) or active low (Bit 7 high) mode. 1: interrupt enabled. 0: interrupt disabled. | 0x0     | R/W      |
|      6 | AWAKE_INT2          | Set to 1 to map awake mode to the INT2 pin. 1: interrupt enabled. 0: interrupt disabled.                                                     | 0x0     | R/W      |
|      5 | INACT_INT2          | Set to 1 to map the inactivity status to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                          | 0x0     | R/W      |
|      4 | ACT_INT2            | Enable activity detected interrupt to the INT2 pin. 1: interrupt enabled. 0: interrupt disabled.                                             | 0x0     | R/W      |
|      3 | FIFO_OVERRUN_INT2   | Set to 1 to map the FIFO overrun status to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                        | 0x0     | R/W      |
|      2 | FIFO_WATERMARK_INT2 | Set to 1 to map the FIFO_WATER_MARK bit (Register 0x0B and Register 0x44) to the INT2 pin. 1: interrupt enabled. 0: interrupt disabled.      | 0x0     | R/W      |
|      1 | FIFO_RDY_INT2       | Set to 1 to map the FIFO ready status to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                          | 0x0     | R/W      |
|      0 | DATA_RDY_INT2       | Set to 1 to map the DATA_READY bit (Register 0x0B and Register 0x44) to the INT2 pin. 1: interrupt enabled. 0: interrupt disabled.           | 0x0     | R/W      |

## FILTER CONTROL REGISTER

Address: 0x2C, Reset: 0x23, Name: FILTER\_CTL

## REGISTER DETAILS

<!-- image -->

Table 50. Bit Descriptions for FILTER\_CTL

| Bits   | Bit Name   | Description                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RANGE      | 00: ±2 g (reset default). 01: ±4 g . 10: ±8 g . 11: reserved.                                                                                                                                                                                                                                                                                      | 0x0     | R/W      |
| 5      | I2C_HS     | High Speed I 2 C Mode. Default is on and its only recommended to change this bit from 1 to 0 (in standby mode). A soft reset or POR must be used to switch back to high speed mode. The ADXL367 does not comply with one of the I 2 C specifications (the 00001XXX command for switching from standard mode to high speed mode is not recognized). | 0x1     | R/W      |
| 4      | RESERVED   | Reserved.                                                                                                                                                                                                                                                                                                                                          | 0x0     | R        |
| 3      | EXT_SAMPLE | External Sampling Trigger. 1 = the INT2 pin is used for external conversion timing control. Refer to the Using External Trigger section for more information.                                                                                                                                                                                      | 0x0     | R/W      |
| [2:0]  | ODR        | Sets output data and configures internal filter to ODR/2. 000: 12.5 Hz ODR. 001: 25 Hz ODR. 010: 50 Hz ODR. 011: 100 Hz ODR. 100: 200 Hz ODR. 101: 400 Hz ODR.                                                                                                                                                                                     | 0x3     | R/W      |

## POWER CONTROL REGISTER

Address: 0x2D, Reset: 0x00, Name: POWER\_CTL

<!-- image -->

Table 51. Bit Descriptions for POWER\_CTL

| Bits   | Bit Name   | Description                                                                                                                                                                                                                  | Reset   | Access   |
|--------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED   | Reserved.                                                                                                                                                                                                                    | 0x0     | R        |
| 6      | EXT_CLK    | External Clock. See the Using an External Clock section for additional details.                                                                                                                                              | 0x0     | R/W      |
| [5:4]  | NOISE      | Noise Mode Configuration. 00: normal operation low power operation mode (reset default). 01: low noise mode (see the Power/Noise Tradeoff section for more information). 10: reserved. 11: reserved.                         | 0x0     | R/W      |
| 3      | WAKEUP     | Wake-Up Mode. See the Operating Modes section for a detailed description of wake-up mode.                                                                                                                                    | 0x0     | R/W      |
| 2      | AUTOSLEEP  | Autosleep. Activity and inactivity detection must be in linked mode or loop mode (LINKLOOP bits in ACT_INACT_CTL register) to enable autosleep. Otherwise, the bit is ignored. See the Motion Detection section for details. | 0x0     | R/W      |
| [1:0]  | MEASURE    | Configures device into standby or measurement operating mode. 00: standby mode.                                                                                                                                              | 0x0     | R/W      |

## REGISTER DETAILS

## Table 51. Bit Descriptions for POWER\_CTL (Continued)

| Bits   | Bit Name   | Description                                       | Reset   | Access   |
|--------|------------|---------------------------------------------------|---------|----------|
|        |            | 01: reserved. 10: measurement mode. 11: reserved. |         |          |

## USER SELF TEST REGISTER

Address: 0x2E, Reset: 0x00, Name: SELF\_TEST

<!-- image -->

## Table 52. Bit Descriptions for SELF\_TEST

| Bits   | Bit Name   | Description      | Reset   | Access   |
|--------|------------|------------------|---------|----------|
| [7:2]  | RESERVED   | Reserved.        | 0x0     | R        |
| 1      | ST_FORCE   | Force Self Test. | 0x0     | R/W      |
| 0      | ST         | Self Test.       | 0x0     | R/W      |

## TAP THRESHOLD REGISTER

Address: 0x2F, Reset: 0x00, Name: TAP\_THRESH

<!-- image -->

Table 53. Bit Descriptions for TAP\_THRESH

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TAP_THRESH |            | The TAP_THRESH register is eight bits and holds the threshold value for tap interrupts. The data format is unsigned. Therefore, the magnitude of the tap event is compared with the value in TAP_THRESH for normal tap detection. The tap threshold scale factor is 31.25 m g /LSB (that is, 0xFF = 8 g ). Note that for 4 g , Bit 7 is ignored and for the 2 g range, Bits [7:6] are ignored. For example, for the 4 g range, if the tap threshold is set to 5 g (TAP_THRESH = 0xA0), the sensor ignores the value of Bit 7 and interprets the value as TAP_THRESH = 0x20, which is equal to 1 g . A value of 0 disables both tap and double tap detection. | 0x0     | R/W      |

## TAP DURATION REGISTER

Address: 0x30, Reset: 0x00, Name: TAP\_DUR

<!-- image -->

Table 54. Bit Descriptions for TAP\_DUR

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                      | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TAP_DUR    |            | The TAP_DUR register is 8 bits and contains an unsigned time value representing the maximum time that an event must be above the TAP_THRESH threshold to qualify as a tap event. The scale factor is 625 μs/LSB. | 0x0     | R/W      |

## REGISTER DETAILS

## TAP LATENCY REGISTER

Address: 0x31, Reset: 0x00, Name: TAP\_LATENT

<!-- image -->

Table 55. Bit Descriptions for TAP\_LATENT

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                        | Reset   | Access   |
|--------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TAP_LATENT |            | The TAP_LATENT register is 8 bits and contains an unsigned time value representing the wait time from the detection of a tap event to the start of the time window (defined by the tap window register), during which a possible second tap event can be detected. The scale factor is 1.25 ms/LSB. A value of 0 disables the double tap function. | 0x0     | R/W      |

## TAP WINDOW REGISTER

Address: 0x32, Reset: 0x00, Name: TAP\_WINDOW

<!-- image -->

Table 56. Bit Descriptions for TAP\_WINDOW

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | TAP_WINDOW |            | The TAP_WINDOW register is 8 bits and contains an unsigned time value representing the amount of time after the expiration of the latency time (determined by the latent register) during which a second valid second tap (double tap) must occur to be considered a valid double tap. The scale factor is 1.25 ms/LSB. | 0x0     | R/W      |

## X-AXIS USER OFFSET REGISTER

Address: 0x33, Reset: 0x00, Name: X\_OFFSET

<!-- image -->

Table 57. Bit Descriptions for X\_OFFSET

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | RESERVED      |            | Reserved.                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R        |
| [4:0]  | X_USER_OFFSET |            | User X-Axis Offset Calibration, Using a 15 m g /LSB Scale Factor. This is in a twos complement format where Bit 4 is the sign bit. This can be used to shift the offset of the device. Note that this trim setting shares the same headroom as the factory trim setting. In other words, a device with a high offset may have less room available for the user to trim. | 0x0     | R/W      |

## Y-AXIS USER OFFSET REGISTER

Address: 0x34, Reset: 0x00, Name: Y\_OFFSET

<!-- image -->

Table 58. Bit Descriptions for Y\_OFFSET

| Bits   | Bit Name   | Settings   | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
| [7:5]  | RESERVED   |            | Reserved.     | 0x0     | R        |

## REGISTER DETAILS

## Table 58. Bit Descriptions for Y\_OFFSET (Continued)

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [4:0]  | Y_USER_OFFSET |            | User Y-Axis Offset Calibration, Using a 15 m g /LSB Scale Factor. This is in a twos complement format where Bit 4 is the sign bit. This can be used to shift the offset of the device. Note that this trim setting shares the same headroom as the factory trim setting. In other words, a device with a high offset may have less room available for the user to trim. | 0x0     | R/W      |

## Z-AXIS USER OFFSET REGISTER

Address: 0x35, Reset: 0x00, Name: Z\_OFFSET

<!-- image -->

Table 59. Bit Descriptions for Z\_OFFSET

| Bits   | Bit Name      | Settings   | Description                                                                                                                                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | RESERVED      |            | Reserved.                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R        |
| [4:0]  | Z_USER_OFFSET |            | User Z-Axis Offset Calibration, Using a 15 m g /LSB Scale Factor. This is in a twos complement format where Bit 4 is the sign bit. This can be used to shift the offset of the device. Note that this trim setting shares the same headroom as the factory trim setting. In other words, a device with a high offset may have less room available for the user to trim. | 0x0     | R/W      |

## X-AXIS USER SENSITIVITY REGISTER

Address: 0x36, Reset: 0x00, Name: X\_SENS

<!-- image -->

Table 60. Bit Descriptions for X\_SENS

| Bits   | Bit Name    | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                    | Reset   | Access   |
|--------|-------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RESERVED    |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | R        |
| [5:0]  | X_USER_SENS |            | User X-Axis Gain Calibration, Using a 1.56%/LSB Scale Factor. This is in a twos complement format where Bit 5 is the sign bit. This can be used to adjust the sensitivity of the device. Note that this trim setting shares the same headroom as the factory trim setting. In other words, a device with a high sensitivity may have less room available for the user to trim. | 0x0     | R/W      |

## Y-AXIS USER SENSITIVITY REGISTER

Address: 0x37, Reset: 0x00, Name: Y\_SENS

<!-- image -->

## Table 61. Bit Descriptions for Y\_SENS

| Bits   | Bit Name    | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                  | Reset   | Access   |
|--------|-------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RESERVED    |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                    | 0x0     | R        |
| [5:0]  | Y_USER_SENS |            | User Y-axis Gain Calibration, Using a 1.56%/LSB Scale Factor. This is in a twos complement format where Bit 5 is the sign bit. This can be used to adjust the sensitivity of the device. Note that this trim setting shares the same headroom as the factory trim setting. In other words, a part with a high sensitivity may have less room available for the user to trim. | 0x0     | R/W      |

## REGISTER DETAILS

## Z-AXIS USER SENSITIVITY REGISTER

Address: 0x38, Reset: 0x00, Name: Z\_SENS

<!-- image -->

Table 62. Bit Descriptions for Z\_SENS

| Bits   | Bit Name    | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                    | Reset   | Access   |
|--------|-------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RESERVED    |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | R        |
| [5:0]  | Z_USER_SENS |            | User Z-Axis Gain Calibration, Using a 1.56%/LSB Scale Factor. This is in a twos complement format where Bit 5 is the sign bit. This can be used to adjust the sensitivity of the device. Note that this trim setting shares the same headroom as the factory trim setting. In other words, a device with a high sensitivity may have less room available for the user to trim. | 0x0     | R/W      |

## TIMER CONTROL REGISTER

Address: 0x39, Reset: 0x00, Name: TIMER\_CTL

<!-- image -->

Table 63. Bit Descriptions for TIMER\_CTL

| Bits   | Bit Name         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Reset   | Access   |
|--------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | WAKEUP_RATE      | Indicates when the wake-up ADXL367 timer expires. 00: 12 samples per second. 80 ms between samples (reset default). 01: 6 samples per second. 160 ms between samples. 10: 3 samples per second. 320 ms between samples. 11: 1.5 samples per second. 640 ms between samples.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R/W      |
| 5      | RESERVED         | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 0x0     | R/W      |
| [4:0]  | TIMER_KEEP_ALIVE | When the timer expires, Bit 4 of the STATUS2 register is set, and a read of STATUS2 clears this bit. This status is also mappable to either interrupt pin. 00000: timer is off. 00001: timer expires after 160 ms. 00010: timer expires after 320 ms. 00011: timer expires after 640 ms. 00100: timer expires after 1.28 seconds. 00101: timer expires after 2.56 seconds. 00110: timer expires after 5.12 seconds. 00111: timer expires after 10.24 seconds. 01000: timer expires after 20.48 seconds. 01001: timer expires after 40.96 seconds. 01010: timer expires after 81.92 seconds. 01011: timer expires after 163.9 seconds. 01100: timer expires after 5.45 minutes. 01101: timer expires after 11 minutes. 01110: timer expires after 21.8 minutes. 01111: timer expires after 43.7 minutes. 10000: timer expires after 1.45 hours. 10001: timer expires after 3 hours. 10010: timer expires after 5.83 hours. | 0x0     | R/W      |

## REGISTER DETAILS

Table 63. Bit Descriptions for TIMER\_CTL (Continued)

| Bits   | Bit Name   | Description                                                                    | Reset   | Access   |
|--------|------------|--------------------------------------------------------------------------------|---------|----------|
|        |            | 10011: timer expires after 11.65 hours. 10100: timer expires after 23.2 hours. |         |          |

## INTERRUPT PIN 1 ENABLES (UPPER) REGISTER

Address: 0x3A, Reset: 0x00, Name: INTMAP1\_UPPER

Maps interrupts to INT1 pin.

<!-- image -->

Table 64. Bit Descriptions for INTMAP1\_UPPER

|   Bits | Bit Name           | Description                                                                                                                                                                      | Reset   | Access   |
|--------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | ERR_FUSE_INT1      | Configures whether fuse error is mapped to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                                                            | 0x0     | R/W      |
|      6 | ERR_USER_REGS_INT1 | Configures whether user register error is mapped to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                                                                   | 0x0     | R/W      |
|      5 | RESERVED           | Reserved.                                                                                                                                                                        | 0x0     | R        |
|      4 | KPALV_TIMER_INT1   | A setting of 1 maps the keep alive timer to the INT1 pin. A setting of 0 does not map this interrupt to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.               | 0x0     | R/W      |
|      3 | TEMP_ADC_HI_INT1   | A setting of 1 maps the temperature activity detection to the INT1 pin. A setting of 0 does not map this interrupt to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled. | 0x0     | R/W      |
|      2 | TEMP_ADC_LOW_INT1  | A setting of 1 maps the temperature inactivity to the INT1 pin. A setting of 0 does not map this interrupt to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.         | 0x0     | R/W      |
|      1 | TAP_TWO_INT1       | A setting of 1 maps double tap detection to the INT1 pin. A setting of 0 does not map this interrupt to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.               | 0x0     | R/W      |
|      0 | TAP_ONE_INT1       | A setting of 1 maps tap detection to the INT1 pin. A setting of 0 does not map this interrupt to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.                      | 0x0     | R/W      |

## INTERRUPT PIN 2 ENABLES (UPPER) REGISTER

Address: 0x3B, Reset: 0x00, Name: INTMAP2\_UPPER

Maps interrupts to INT2 pin.

## REGISTER DETAILS

<!-- image -->

Table 65. Bit Descriptions for INTMAP2\_UPPER

|   Bits | Bit Name           | Description                                                                                                                                                                      | Reset   | Access   |
|--------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | ERR_FUSE_INT2      | Configures whether the fuse error is mapped to an INT2 pin. 1: interrupt enabled. 0: interrupt disabled.                                                                         | 0x0     | R/W      |
|      6 | ERR_USER_REGS_INT2 | Configures whether user register error is mapped to INT2 pin. 1: interrupt enabled. 0: interrupt disabled.                                                                       | 0x0     | R/W      |
|      5 | RESERVED           | Reserved.                                                                                                                                                                        | 0x0     | R        |
|      4 | KPALV_TIMER_INT2   | A setting of 1 maps the keep alive timer to the INT1 pin. A setting of 0 does not map this interrupt to the INT1 pin. 1: interrupt enabled. 0: interrupt disabled.               | 0x0     | R/W      |
|      3 | TEMP_ADC_HI_INT2   | A setting of 1 maps the temperature activity detection to the INT2 pin. A setting of 0 does not map this interrupt to the INT2 pin. 1: interrupt enabled. 0: interrupt disabled. | 0x0     | R/W      |
|      2 | TEMP_ADC_LOW_INT2  | A setting of 1 maps temperature inactivity to the INT2 pin. A setting of 0 does not map this interrupt to the INT2 pin. 1: interrupt enabled. 0: interrupt disabled.             | 0x0     | R/W      |
|      1 | TAP_TWO_INT2       | A setting of 1 maps double tap detection to the INT2 pin. A setting of 0 does not map this interrupt to the INT2 pin. 1: interrupt enabled. 0: interrupt disabled.               | 0x0     | R/W      |
|      0 | TAP_ONE_INT2       | A setting of 1 maps tap detection to the INT2 pin. A setting of 0 does not map this interrupt to the INT2 pin. 1: interrupt enabled. 0: interrupt disabled.                      | 0x0     | R/W      |

## ADC CONTROL REGISTER

Address: 0x3C, Reset: 0xC0, Name: ADC\_CTL

<!-- image -->

Table 66. Bit Descriptions for ADC\_CTL

| Bits   | Bit Name     | Description                                                                                                                                                                                           | Reset   | Access   |
|--------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | FIFO_8_12BIT | This 2-bit field defines how data is read out of the FIFO. The data is written into the FIFO in full 14-bit mode and the read out mode is determined by these bits. 00: FIFO data ADXL362 standard. 1 | 0x3     | R/W      |

## REGISTER DETAILS

Table 66. Bit Descriptions for ADC\_CTL (Continued)

| Bits   | Bit Name     | Description                                                                                                                                                                             | Reset   | Access   |
|--------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |              | 01: 8-bit FIFO data (no channel ID, upper 8 bits of data sent out). 10: 12-bit FIFO data (no channel ID, upper 12 bits of data sent out). 11: FIFO data default (14 bits + channel ID). |         |          |
| [5:4]  | RESERVED     | Reserved.                                                                                                                                                                               | 0x0     | R        |
| 3      | ADC_INACT_EN | Inactivity detection enabled on external ADC channel.                                                                                                                                   | 0x0     | R/W      |
| 2      | RESERVED     | Reserved.                                                                                                                                                                               | 0x0     | R/W      |
| 1      | ADC_ACT_EN   | Activity detection enabled on external ADC channel.                                                                                                                                     | 0x0     | R/W      |
| 0      | ADC_EN       | Enable External ADC. If the TEMP_EN bit (Register 0x3D) = 1, the ADC is not enabled and this bit has no effect.                                                                         | 0x0     | R/W      |

## TEMPERATURE CONFIGURATION REGISTER

Address: 0x3D, Reset: 0x00, Name: TEMP\_CTL

<!-- image -->

Table 67. Bit Descriptions for TEMP\_CTL

| Bits   | Bit Name      | Description                                                                                                                                                   | Reset   | Access   |
|--------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | RESERVED      | Reserved.                                                                                                                                                     | 0x0     | R        |
| 3      | TEMP_INACT_EN | A setting of 1 in the TEMP_INACT_EN bit enables inactivity detection on the temperature channel. A setting of 0 disables this feature.                        | 0x0     | R/W      |
| 2      | RESERVED      | Reserved.                                                                                                                                                     | 0x0     | R/W      |
| 1      | TEMP_ACT_EN   | A setting of 1 in the TEMP_ACT_EN bit enables activity detection on the temperature channel. A setting of 0 disables this feature.                            | 0x0     | R/W      |
| 0      | TEMP_EN       | A setting of 1 in the TEMP_EN bit enables a temperature conversion to occur along with acceleration at the ODR setting. A setting of 0 disables this feature. | 0x0     | R/W      |

## TEMP\_ADC\_ACT\_THRSH\_HIGH REGISTER

Address: 0x3E, Reset: 0x00, Name: TEMP\_ADC\_OVER\_THRSH\_H

<!-- image -->

Table 68. Bit Descriptions for TEMP\_ADC\_OVER\_THRSH\_H

| Bits   | Bit Name                   | Settings   | Description                                                                                                                                                                                                                                                                                                                | Reset   | Access   |
|--------|----------------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED                   |            | Reserved.                                                                                                                                                                                                                                                                                                                  | 0x0     | R        |
| [6:0]  | TEMP_ADC_THRESH_HIGH[12:6] |            | To detect activity on the external ADC or temperature channel, the ADXL367 compares the absolute value of the 14-bit (signed) data with the 13-bit (unsigned) TEMP_ADC_THRESH_HIGH value. TEMP_ADC_THRESH_HIGH is set in codes (1 LSB = 1 code). The value in g depends on the measurement range setting that is selected. | 0x0     | R/W      |

## TEMP\_ADC\_ACT\_THRSH\_LOW REGISTER

Address: 0x3F, Reset: 0x00, Name: TEMP\_ADC\_OVER\_THRSH\_L

## REGISTER DETAILS

<!-- image -->

Table 69. Bit Descriptions for TEMP\_ADC\_OVER\_THRSH\_L

| Bits   | Bit Name                  | Settings   | Description                                                                                                                                                                                                                                                                                                             | Reset   | Access   |
|--------|---------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | TEMP_ADC_THRESH_HIGH[5:0] |            | To detect activity on the external ADC Or temperature channel, the ADXL367 compares the absolute value of the 14-bit (signed) data with the 13-bit (unsigned) TEMP_ADC_THRESH_HIGH value. TEMP_ADC_THRESH_HIGH is set in codes (1 LSB = 1 code). The value g depends on the measurement range setting that is selected. | 0x0     | R/W      |
| [1:0]  | RESERVED                  |            | Reserved.                                                                                                                                                                                                                                                                                                               | 0x0     | R        |

## TEMP\_ADC\_INACT\_THRSH\_HIGH REGISTER

Address: 0x40, Reset: 0x00, Name: TEMP\_ADC\_UNDER\_THRSH\_H

<!-- image -->

Table 70. Bit Descriptions for TEMP\_ADC\_UNDER\_THRSH\_H

| Bits   | Bit Name                  | Settings   | Description                                                                                                                                                                                                                                                                                                              | Reset   | Access   |
|--------|---------------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED                  |            | Reserved.                                                                                                                                                                                                                                                                                                                | 0x0     | R        |
| [6:0]  | TEMP_ADC_THRESH_LOW[12:6] |            | To detect inactivity on the external ADC or temperature channel, the ADXL367 compares the absolute value of the 14-bit (signed) data with the 13-bit (unsigned) TEMP_ADC_THRESH_HIGH value. TEMP_ADC_THRESH_LOW is set in codes (1 LSB = 1 code). The value g depends on the measurement range setting that is selected. | 0x0     | R/W      |

## TEMP\_ADC\_INACT\_THRSH\_LOW REGISTER

Address: 0x41, Reset: 0x00, Name: TEMP\_ADC\_UNDER\_THRSH\_L

Table 71. Bit Descriptions for TEMP\_ADC\_UNDER\_THRSH\_L

| Bits   | Bit Name                 | Settings   | Description                                                                                                                                                                                                                                                                                                                 | Reset   | Access   |
|--------|--------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | TEMP_ADC_THRESH_LOW[5:0] |            | To detect inactivity on the external ADC or temperature channel, the ADXL367 compares the absolute value of the 14-bit (signed) data with the 13-bit (unsigned) TEMP_ADC_THRESH_HIGH value. TEMP_ADC_THRESH_LOW is set in codes (1 LSB = 1 code). The value in g depends on the measurement range setting that is selected. | 0x0     | R/W      |
| [1:0]  | RESERVED                 |            | Reserved.                                                                                                                                                                                                                                                                                                                   | 0x0     | R        |

## TEMPERATURE ACTIVITY INACTIVITY TIMER REGISTER

Address: 0x42, Reset: 0x00, Name: TEMP\_ADC\_TIMER

<!-- image -->

## REGISTER DETAILS

Table 72. Bit Descriptions for TEMP\_ADC\_TIMER

| Bits   | Bit Name             | Settings   | Description                                                                                                                                                                                     | Reset   | Access   |
|--------|----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | TIMER_TEMP_ADC_INACT |            | The value in this bit field sets the number of consecutive samples that must have a value less than the activity threshold (set by TEMP_ADC_THRESH_LOW) for an inactivity event to be detected. | 0x0     | R/W      |
| [3:0]  | TIMER_TEMP_ADC_ACT   |            | The value in this bit field sets the number of consecutive samples that must have a value greater than the activity threshold (set by TEMP_ADC_THRESH_HI) for an activity event to be detected. | 0x0     | R/W      |

## AXIS MASK REGISTER

Address: 0x43, Reset: 0x00, Name: AXIS\_MASK

<!-- image -->

Table 73. Bit Descriptions for AXIS\_MASK

| Bits   | Bit Name    | Description                                                                               | Reset   | Access   |
|--------|-------------|-------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RESERVED    | Reserved.                                                                                 | 0x0     | R        |
| [5:4]  | TAP_AXIS    | Select which axis to be looked at for tap detection. 00: x-axis 01: y-axis 10: Z-axis     | 0x0     | R/W      |
| 3      | RESERVED    | Reserved.                                                                                 | 0x0     | R        |
| 2      | ACT_INACT_Z | Set to 1 to block activity and inactivity checking on the z-axis, checking on by default. | 0x0     | R/W      |
| 1      | ACT_INACT_Y | Set to 1 to block activity and inactivity checking on the y-axis, checking on by default. | 0x0     | R/W      |
| 0      | ACT_INACT_X | Set to 1 to block activity and inactivity checking on the x-axis, checking on by default. | 0x0     | R/W      |

## STATUS COPY REGISTER

Address: 0x44, Reset: 0x40, Name: STATUS\_COPY

<!-- image -->

Table 74. Bit Descriptions for STATUS\_COPY

|   Bits | Bit Name      | Description                                                                                                                                                                                                                                                                                                                                                                                                   | Reset   | Access   |
|--------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | ERR_USER_REGS | SEU Error Detect. 1 indicates one of two conditions: either an SEU event, such as an alpha particle of a power glitch, has disturbed a user register setting or the ADXL367 is not configured. This bit is high on both startup and soft reset, and resets as soon as any register write commands are performed.                                                                                              | 0x0     | R        |
|      6 | AWAKE         | Indicates whether the accelerometer is in an active (AWAKE = 1) or inactive (AWAKE = 0) state, based on the activity and inactivity functionality. To enable autosleep, activity and inactivity detection must be in linked mode or loop mode (LINKLOOP bits in the ACT_INACT_CTL register). Otherwise, this bit defaults to 1 and must be ignored. 0: device is inactive. 1: device is active (reset state). | 0x1     | R        |

## REGISTER DETAILS

Table 74. Bit Descriptions for STATUS\_COPY (Continued)

|   Bits | Bit Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Reset   | Access   |
|--------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      5 | INACT           | Inactivity. 1 indicates that the inactivity detection function has detected an inactivity or a free fall condition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R        |
|      4 | ACT             | Activity. 1 indicates that the activity detection function has detected an overthreshold condition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 0x0     | R        |
|      3 | FIFO_OVER_RUN   | FIFO Overrun. 1 indicates that the FIFO has overrun or overflowed. No new data is written to the FIFO until a FIFO read has occurred to free up some space for new data. FIFO_OVER_RUN is only available in FIFO_MODE = oldest saved mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 0x0     | R        |
|      2 | FIFO_WATER_MARK | FIFO Watermark. 1 indicates that the FIFO contains at least the desired number of samples, as set in the FIFO_SAMPLES register. FIFO_WATER_MARK is asserted when the next sample (greater than the value) is written to the FIFO.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 0x0     | R        |
|      1 | FIFO_READY      | FIFO Ready. 1 indicates that there is at least one sample available in the FIFO output buffer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 0x0     | R        |
|      0 | DATA_READY      | Data Ready. 1 indicates that a new valid sample is available to be read. This bit clears when a DATA read is performed. DATA_READY is set when new valid data is available. It is cleared when no new data is available. The DATA_READY bit is not set while any of the data registers, Address 0x08 to Address 0x0A and Address 0x0E to Address 0x17, are being read. If DATA_READY = 0 prior to a register read and new data becomes available during the register read, DATA_READY remains at 0 until the read is complete and, only then, is set to 1. If DATA_READY = 1 prior to a register read, it is cleared at the start of the register read. If DATA_READY = 1 prior to a register read and new data becomes available during the register read, DATA_READY is cleared to 0 at the start of the register read and remains at 0 throughout the read. When the read is complete, DATA_READY is set to 1. | 0x0     | R        |

## STATUS 2 REGISTER

## Address: 0x45, Reset: 0x00, Name: STATUS2

Status 2 Register.

<!-- image -->

Table 75. Bit Descriptions for STATUS2

|   Bits | Bit Name      | Settings   | Description                                                                                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|---------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | ERR_FUSE_REGS |            | Fuse Error Detect. A 1 indicates that multiple fuses have been corrupted and the correction engine cannot repair them.                                                                                                                                                                                              | 0x0     | R        |
|      6 | FUSE_REFRESH  |            | A 1 indicates that the nonvolatile memory (NVM) has had to reload. A software or hardware reset is recommended. Reading the STATUS2 register clears this bit.                                                                                                                                                       | 0x0     | R        |
|      5 | RESERVED      |            | Reserved.                                                                                                                                                                                                                                                                                                           | 0x0     | R        |
|      4 | TIMER         |            | A 1 indicates that the keep alive timer has expired. Reading the STATUS2 register clears the timer interrupt and reset timer.                                                                                                                                                                                       | 0x0     | R        |
|      3 | TEMP_ADC_HI   |            | Over threshold is detected on either the temperature or external ADC channel. If TEMP_EN = 1, this bit indicates that a temperature over threshold event has been detected.                                                                                                                                         | 0x0     | R        |
|      2 | TEMP_ADC_LOW  |            | Under threshold is detected on either the temperature sensor or external ADC. If TEMP_EN = 1, this bit indicates that a temperature under threshold event has been detected.                                                                                                                                        | 0x0     | R        |
|      1 | TAP_TWO       |            | The TAP_TWO bit is set when two acceleration events that are greater than the value in the THRESH_TAP register occur for less time than is specified in the TAP_DUR register. The second tap starts after the time specified by the TAP_LATENCY register, but within the time specified in the TAP_WINDOW register. | 0x0     | R        |
|      0 | TAP_ONE       |            | The TAP_ONE bit is set when a single acceleration event that is greater than the value in the THRESH_TAP register occurs for less time than is specified in the TAP_DUR register.                                                                                                                                   | 0x0     | R        |

## APPLICATIONS INFORMATION

## APPLICATION EXAMPLES

The Device Configuration section, Motion Switch section, Using External Timing Triggers section, and Implementing Free Fall Detection section include a few application circuits, highlighting useful features of the ADXL367.

## Device Configuration

This section outlines the procedure for configuring the device and acquiring data. In general, the procedure follows the sequence of the register map, starting with Register 0x20 (THRESH\_ACT\_L). The following is a general sequence for configuration:

1. Set activity and inactivity thresholds and timers by writing to Register 0x20 to Register 0x26. To minimize false positive motion triggers, set the TIME\_ACT register greater than 1.
2. Configure activity and inactivity functions by writing to Register 0x27.
3. Configure FIFO by writing to Register 0x28 and Register 0x29.
4. Map the interrupts by writing to Register 0x2A and Register 0x2B.
5. Configure general device settings by writing to Register 0x2C.
6. Enter measurement mode by writing 10 to the MEASURE bit field in Register 0x2D.

Settings for each of the registers vary based on application requirements. For more information, see the Register Details section.

## Motion Switch

The ultra-low power of the ADXL367, combined with the auto-sleep feature, makes it ideal for use as a motion switch, allowing the host processor to intelligently manage system power when no motion is detected. In the example in Figure 55, in the presence of motion, the ADXL367 AWAKE signal (mapped to the INT1 pin) wakes up the host processor to control power to the downstream circuitry by driving the ADP195 high-side power switch.

Figure 55. Awake Signal to Control Power to Downstream Circuitry

<!-- image -->

The flow diagram of Figure 56 shows a logic implementation example of the motion switch.

The flow diagram assumes a ±2 g measurement range, operation in looped mode, the AWAKE bit mapped to INT1 (as shown in Figure 55) activity and inactivity in referenced mode. The following sequence is an example routine to configure the ADXL367 as a motion switch, but note that the threshold settings depend on the specific application use case:

1. Follow the Looped start-up routing as described on Looped Mode Start-Up Routine
2. At this point the host processor is asleep and accelerometer is looking for a motion event to occur.
3. When motion event exceeds the activity thresholds, the ADXL367 AWAKE bit toggles to a logic 1, which means that INT1 is now HIGH, waking up the host processor.
4. The host processor must immediately execute the following routine, that forces activity and inactivity references to update:
- a. Set activity threshold below the noise level of the accelerometer, for example 1LSB
1. write 0x00 to THRESH\_ACT\_H register (0x20)
2. write 0x04 to THRESH\_ACT\_L register (0x21)
- b. Set activity timer to zero
1. write 0x00 to TIMER\_ACT register (0x22)
- c. Set inactivity threshold greater than 1g, for example Full Scale Range (FSR)
1. write 0x7F to THRESH\_INACT\_H register (0x23)
2. write 0xFC to THRESH\_INACT\_L register (0x24)
- d. Set inactivity timer to zero:
1. write 0x00 to TIMER\_INACT\_H register (0x25)
2. write 0x00 to TIMER\_INACT\_L register (0x26)
- e. Wait for inactivity and activity event to be detected, which ensures the activity and inactivity references have been updated. This takes to 1/ODR seconds, since the timers for activity and inactivity are set to 0 and the thresholds previously set will always trigger the interrupt. Another way to implement this would be as follows:
1. while (AWAKE == 1){do nothing}
2. while (AWAKE == 0){do nothing}
- f. Reconfigure activity and inactivity thresholds and timers to the desired values (registers 0x20 to 0x26). Notice that this step should be performed on a AWAKE = HIGH condition.
5. Customer code is executed until ADXL367 detects inactivity. The host processor goes back to sleep.

## APPLICATIONS INFORMATION

Figure 56. Motion Switch Flow Diagram Example

<!-- image -->

## Using External Timing Triggers

Figure 57 shows an application diagram for using the INT1 pin as the input for an external clock. In this mode, the external clock determines all accelerometer timing, including the output data rate and bandwidth.

To enable this feature, during configuration (while in standby mode), set Bit 6 in the POWER\_CTL register. For example, write 0x42 to the POWER\_CTL register to enable the use of an external clock and place the accelerometer into measurement mode.

Figure 57. INT1 Pin as the Input for the External Clock

<!-- image -->

Figure 58 is an application circuit to use the INT2 pin as a trigger for synchronized sampling. Acceleration samples are produced every time this trigger is activated. To enable this feature, near the end of the desired start-up routine, set Bit 3 in the FILTER\_CTL register. For example, write 0x6B to the FILTER\_CTL register to enable the trigger and configure the accelerometer for a ±4 g measurement range and 100 Hz ODR.

Figure 58. Using the INT2 Pin to Trigger Synchronized Sampling

<!-- image -->

## Implementing Free Fall Detection

Many digital output accelerometers include a built-in free fall detection feature. In the ADXL367, implement this function by using the inactivity interrupt.

When an object is in true free fall, acceleration on all axes is 0 g . Therefore, free fall detection is achieved by looking for acceleration on all axes to fall below a certain threshold (close to 0 g ) for a certain amount of time. The inactivity detection functionality, when used in absolute mode, monitors the acceleration to watch for all three axes to drop to 0 g .

To use inactivity to implement free fall detection, set the value in the THRESH\_INACT bits (Register 0x23 and Register 0x24) to the desired free fall threshold. Values between 300 m g and 600 m g are recommended. The register setting for these values varies based on the g range setting of the device, as shown in Equation 5.

<!-- formula-not-decoded -->

Set the value in the TIME\_INACT bits (Register 0x25 and Register 0x26) to implement the minimum amount of time that the acceleration on all axes must be less than the free fall threshold to generate a free fall condition. Values between 100 ms and 350 ms are recommended. The register setting for free fall detection varies based on the output data rate. Equation 6 dictates which TIME\_INACT bits setting the user must choose. In Equation 6, Time represents the time that all acceleration axes must be below the inactivity threshold for free fall to be detected.

<!-- formula-not-decoded -->

When a free fall condition is detected, the inactivity status is set to 1 and, if the function is mapped to an interrupt pin, an inactivity interrupt triggers on that pin.

## Free Fall Start-Up Routine

The following start-up routine configures the ADXL367 for a typical free fall application. This routine assumes a ±8 g measurement range and 100 Hz output data rate. Thresholds and timing values can be modified to suit particular application needs. Use the following procedure for start-up:

## APPLICATIONS INFORMATION

1. Write 0x18 to Register 0x24 and 0x09 to Register 0x23, to set the free fall threshold to 600 m g .
2. Write 0x03 to Register 0x26 to set the free fall time to 30 ms.
3. Write 0x04 to Register 0x27 to enable absolute inactivity detection.
4. Write 0x20 to Register 0x2A or Register 0x2B to map the inactivity interrupt to the INT1 pin or INT2 pin, respectively.
5. Write 0x83 to Register 0x2C to configure the accelerometer to the ±8 g range and 100 Hz ODR.
6. Write 0x02 to Register 0x2D: enter measurement mode. Note that a 100 ms wait time must be observed before the acceleration data becomes valid.

## POWER SUPPLY REQUIREMENTS

The ADXL367 operates using supply voltage rails ranging from 1.1 V to 3.6 V. The operating voltage range (V S ) specified in Table 1 ranges from 1.1 V to 3.6 V to account for inaccuracies and transients of up to ±10% on the supply voltage. Although the run time supply current is much lower, during power up or software reset the supply current must be greater than 250 μA. This ensures that the internal fuses are loaded correctly. When power cycling the ADXL367, it is highly recommended to fully discharge the device to ground level (V S = 0 V) on each power cycle. If this is not possible, care must be taken regarding the following specifications:

- Supply reset threshold (V RESET )
- Hold time
- Rise time

## Supply Reset Threshold

During start-up or power cycling of the ADXL367, the V S supply value must be increased from its previous value, which was less than V RESET . When the device is in operation, any time power is removed from the ADXL367 or falls below 1.1 V, the V S supply must be discharged to a value less than V RESET .

## Hold Time

To ensure a successful power-on reset, the V S supply must be held at a value that is less than V RESET for at least 300 ms before reapplying the supply to the device (see Figure 59).

## Rise Time

The supply voltage rise time is defined as the time from 0 V to 90% of V S . This is true regardless of what supply voltage is used (see the Power Supply Requirements section).

Figure 59. Power Supply Reset and Start-Up Requirements

<!-- image -->

To enable supply discharge, it is recommended to power the device from a microcontroller GPIO, connect a shutdown discharge switch to the supply, or use a voltage regulator with a shutdown discharge feature.

Following power-on reset (POR), the output requires 100 ms to settle after entering measurement mode.

## Power Supply Decoupling

Figure 60 shows the recommended bypass capacitors for use with the ADXL367.

Figure 60. Recommended Bypass Capacitors

<!-- image -->

A 0.1 µF ceramic capacitor (named C S ) at the V S pin and a 0.1 µF ceramic capacitor (named C IO ) at the V DDIO pin are placed as close as possible to the ADXL367. Supply pins are recommended to adequately decouple the accelerometer from noise on the power supply. It is also recommended that V S and V DDIO be separate supplies to minimize digital clocking noise on the V S supply. If this is not possible, additional filtering of the supplies may be necessary.

If additional decoupling is necessary, place a resistor or ferrite bead, no larger than 100 Ω, in series with V S . Additionally, increasing the bypass capacitance on V S to a 1 µF tantalum capacitor in parallel with a 0.1 µF ceramic capacitor may also improve noise. Note that increasing the resistor and capacitor values increases the RC time constant. This affects the reset time of the device. This means the user needs a longer reset time. Turn-on time may also be slower.

Ensure that the connection from the ADXL367 ground to the power supply ground has low impedance because noise transmitted

## APPLICATIONS INFORMATION

through ground has an effect similar to noise transmitted through VS .

For single supply condition, the decoupling schematics, as shown in Figure 61, can be considered if additional decoupling is necessary. The resistance between V S and V DDIO must be no greater than 10 Ω.

Figure 61. Recommended Decoupling Schematics for Single Supply

<!-- image -->

## FIFO MODES

The FIFO is a 512-sample memory buffer that can be used to save power, unburden the host processor, and autonomously record data. Note that to guarantee inertial data from the same sample, the user must read a complete set of data (for example, x-channel, y-channel, z-channel, temperature) consecutively. If the channels are not read consecutively, there is a chance of missing data.

The FIFO operates in one of the four modes described in the FIFO Disabled section, Oldest Saved Mode section, Stream Mode section, and Triggered Mode section.

## FIFO Disabled

When the FIFO is disabled, no data is stored in it and any data already stored in it is cleared.

The FIFO is disabled by setting the FIFO\_MODE bits in the FIFO\_CONTROL register (Address 0x28) to the Binary Value 0b00.

## Oldest Saved Mode

In oldest saved mode, the FIFO accumulates data until it is full and then stops. Additional data is collected only when space is made available by reading samples out of the FIFO buffer (this mode of operation is sometimes referred to as first N)

The FIFO is placed into oldest saved mode by setting the FIFO\_MODE bits in the FIFO\_CONTROL register (Address 0x28) to Binary Value 0b01.

## Stream Mode

In stream mode, the FIFO always contains the most recent data. The oldest sample is discarded when space is needed to make room for a newer sample (this mode of operation is sometimes referred to as last N).

Stream mode is useful for unburdening a host processor. The processor can tend to other tasks while data is being collected in the FIFO. When the FIFO fills to a certain number of samples (specified by the FIFO\_SAMPLES register along with the FIFO\_SAMPLE bit in the FIFO\_CONTROL register), it triggers a FIFO watermark interrupt (if this interrupt is enabled). At this point, the host processor can read the contents of the entire FIFO and then return to its other tasks as the FIFO fills again.

The FIFO is placed into stream mode by setting the FIFO\_MODE bits in the FIFO\_CONTROL register (Address 0x28) to Binary Value 0b10.

## Triggered Mode

In triggered mode, the FIFO saves samples surrounding an activity detection event. The operation is similar to a one-time run trigger on an oscilloscope. The number of samples to be saved prior to the activity event is specified in FIFO\_SAMPLES (Register 0x29, along with the FIFO\_SAMPLE bit in the FIFO\_CONTROL register, Address 0x28).

Place the FIFO into triggered mode by setting the FIFO\_MODE bits in the FIFO\_CONTROL register (Address 0x28) to Binary Value 0b11.

## FIFO CONFIGURATION

The FIFO mode is configured via Register 0x28 and Register 0x29. The FIFO data structure is configured via Register 0x3C. Settings are described in detail in the Register Details section.

## FIFO Interrupts

The FIFO can generate interrupts to indicate when samples are available, when a specified number of samples has been collected, and when the FIFO overflows and samples are lost. See the Using FIFO Interrupts section for more information.

## Retrieving Data from FIFO

FIFO data is read by issuing a FIFO read command, described in the Serial Communications section. The ADXL367 FIFO can support 14 bits or 12 bits with data type information available, as shown in Table 76 and Table 77.

## Table 76. 14-Bit Data

| Bits     | Bit Name   | Settings                                                       |
|----------|------------|----------------------------------------------------------------|
| D[15:14] | Data Type  | 00: x-axis 01: y-axis 10: z-axis 11: temperature/ external ADC |
| D[13]    | MSB        |                                                                |
| D[12:1]  | Data       |                                                                |
| D[0]     | LSB        |                                                                |

## APPLICATIONS INFORMATION

## Table 77. 12-Bit Data

| Bits    | Bit Name       | Settings         |
|---------|----------------|------------------|
| D[15:8] | Data[7:LSB]    |                  |
| D[7:6]  | Channel ID     | 00: x-axis       |
|         |                | 01: y-axis       |
|         |                | 10: z-axis       |
|         |                | 11: temperature/ |
|         |                | external ADC     |
| D[5:4]  | Sign Extension |                  |
| D[3:0]  | Data[MSB:8]    |                  |

The ADXL367 also supports data packed mode to increase data throughput and save system power. An 8-bit data word is provided for readback. In 8-bit mode, only the upper 8 bits of a sample are sent out, and no channel ID is prepended. Therefore, the user can get the most efficient data transfer, just 8 bits per stored sample (at the cost of full data resolution). A 12-bit data word is provided for readback. In 12-bit mode, only the upper 12 bits of a sample are sent out, no channel ID is prepended. Therefore, the user can get a more efficient data transfer, 2 words (24 bits) into 3 bytes. There is still a resolution cost associated because only 12 bits per stored sample are being sent. The data format for the packed modes is shown in Table 78 and Table 79.

Table 78. 8-Bit Packed Format

| Byte   | Byte Name   |   Number of Bits |
|--------|-------------|------------------|
| Byte 1 | Sample 1    |                8 |
| Byte 0 | Sample 0    |                8 |

## Table 79. 12-Bit Packed Format

| Byte   | Byte Name   |
|--------|-------------|

## Table 80. FIFO Data Structure

| CHANNEL_SELECT Value   | Sample Set Size (Channels)   | Sample Set Stored in FIFO (Axis Acceleration Channels)   |
|------------------------|------------------------------|----------------------------------------------------------|
| 0000 (default)         | 3                            | X, Y, Z                                                  |
| 0001                   | 1                            | only X-axis data is converted                            |
| 0010                   | 1                            | only Y-axis data is converted                            |
| 0011                   | 1                            | only Z-axis data is converted                            |
| 0100 1                 | 4                            | X, Y, Z, temperature                                     |
| 0101 1                 | 2                            | X, temperature                                           |
| 0110 1                 | 2                            | Y, temperature                                           |
| 0111 1                 | 2                            | Z, temperature                                           |
| 1000 1                 | 4                            | X, Y, Z, external ADC                                    |
| 1001 1                 | 2                            | X, external ADC                                          |
| 1010 1                 | 2                            | Y, external ADC                                          |
| 1011 1                 | 2                            | Z, external ADC                                          |
| 11xx                   | x                            | Not used                                                 |

Table 79. 12-Bit Packed Format (Continued)

| Byte        | Byte Name      |
|-------------|----------------|
| Byte 2      | Sample 1[11:4] |
| Byte 1[7:4] | Sample 1[3:0]  |
| Byte 1[3:0] | Sample 0[11:8] |
| Byte 0      | Sample 0[7:0]  |

The FIFO can store up to 513 data entries. There is a 512-sample memory buffer plus one data holding register, which are divided into repeating data sets. A data set contains one sample of data for each selected measurement. The measurements include the following:

- Acceleration: any one axis or all three axes can be stored in the FIFO. This selection is made in the FIFO\_CTL register.
- Temperature: temperature can either be stored in the FIFO or not, as specified in the FIFO\_CTL register.
- ADC: ADC can either be stored in the FIFO or not, as specified in the FIFO\_CTL register.

The 513 FIFO samples can be allocated in several ways, such as the following:

- 513 sample sets of single-axis data
- 256 sample sets of concurrent 2-channel data
- 171 sample sets of concurrent 3-channel data
- 128 sample sets of concurrent 4-channel data
- Note that the FIFO conversion channel must be configured in standby mode.

## APPLICATIONS INFORMATION

## INTERRUPTS

Several of the built-in functions of the ADXL367 can trigger interrupts to alert the host processor of certain status conditions. The Interrupt Pins section, Alternate Functions of Interrupt Pins section, Activity and Inactivity Interrupts section, External ADC Interrupt section, and Data Ready Interrupt section describes the functionality of these interrupts.

## Interrupt Pins

Interrupts can be mapped to either (or both) of two designated output pins, INT1 and INT2, by setting the appropriate bits in the INTMAP1\_LOWER, INTMAP1\_UPPER, INTMAP2\_LOWER, and INTMAP2\_UPPER registers, respectively. All functions can be used simultaneously. If multiple interrupts are mapped to one pin, the OR combination of the interrupts determines the status of the pin.

If no functions are mapped to an interrupt pin, that pin is automatically configured to a high impedance (high-Z) state. The pins are also placed in the high-Z state on a reset.

When a certain status condition is detected, the pin that condition is mapped to is activated. The configuration of the pin is active high by default so that when it is activated, the pin goes high. However, this configuration can be switched to active low by setting the INT\_LOW bit in the appropriate INTMAP1\_x and INTMAP2\_x registers.

Table 81. Interrupt Pin Digital Output

The INTx pins can be connected to the interrupt input of a host processor where interrupts are responded to with an interrupt routine. Because multiple functions can be mapped to the same pin, the STATUS register can be used to determine which condition caused the interrupt to trigger.

The latency to clear any interrupt is typically 120 µs. Clear interrupts in one of the following ways:

- Reading the STATUS or STATUS\_COPY registers clears activity and inactivity interrupts.
- Reading the STATUS2 register clears tap and double interrupts.
- Reading from the data registers, Address 0x08 to Address 0x0A or Address 0x0E to Address 0x15, clears the data ready interrupt.
- Reading enough data from the FIFO buffer so that interrupt conditions are no longer met clears the FIFO ready, FIFO watermark, and FIFO overrun interrupts.

Both interrupt pins are push and pull low impedance pins with an output impedance of 50 Ω (typical at V DDIO = 2 V) when being driven and following the digital output specifications, as shown in Table 81. Both pins have bus keepers when the pins are not internally driven.

To prevent interrupts from being falsely triggered during configuration, disable interrupts while their settings, such as thresholds, timings, or other values, are configured.

|                                   |                  | Limit 1      | Limit 1      |      |
|-----------------------------------|------------------|--------------|--------------|------|
| Parameter                         | Test Conditions  | Min          | Max          | Unit |
| Digital Output                    |                  |              |              |      |
| Low Level Output Voltage (V OL )  | I OL = 500 µA    |              | 0.1 × V DDIO | V    |
| High Level Output Voltage (V OH ) | I OH = -300 µA   | 0.9 × V DDIO |              | V    |
| Low Level Output Current (I OL )  | V OL = V OL, MAX | 500          |              | µA   |
| High Level Output Current (I OH ) | V OH = V OH, MIN |              | -300         | µA   |

1 Limits based on design, not production tested.

## APPLICATIONS INFORMATION

## Alternate Functions of Interrupt Pins

The INT1 pin and INT2 pin can be configured for use as input pins instead of for signaling interrupts. INT1 is used as an external clock input when the EXT\_CLK bit (Bit 6) in the POWER\_CTL register (Address 0x2D) is set. INT2 is used as the trigger input for synchronized sampling when the EXT\_SAMPLE bit (Bit 3) in the FILTER\_CTL register (Address 0x2C) is set. One or both of these alternate functions can be used concurrently. However, if an alternate function of an interrupt pin is used, the interrupt pin cannot simultaneously be used for its primary function, to signal interrupts.

External clocking and data synchronization are described in the Applications Information section.

## Activity and Inactivity Interrupts

The ACT bit (Bit 4) and INACT bit (Bit 5) in the STATUS register are set when activity and inactivity are detected, respectively. Detection procedures and criteria are described in the Motion Detection section.

## External ADC Interrupt

The ADXL367 incorporates a 14-bit ADC for digitization of an external analog input. An interrupt can be generated based on the user set threshold of the external ADC. For the battery powered device, the external ADC can be used to monitor the supply voltage. After the supply voltage is lower than the specified threshold, an interrupt can be generated to alert the end user to charge/change the battery. By using this function, the host processor does not have to use one more ADC to check the power supply periodically.

## Data Ready Interrupt

The DATA\_READY bit (Register 0x0B, Bit 0) is set when new valid data is available, and it is cleared when no new data is available.

The DATA\_READY bit is not set while any of the data registers, Address 0x08 to Address 0x0A and Address 0x0E to Address 0x15, are being read. If DATA\_READY = 0 prior to a register read and new data becomes available during the register read, DA-TA\_READY remains at 0 until the read is complete and, only then, is set to 1.

If DATA\_READY = 1 prior to a register read, it is cleared at the start of the register read.

If DATA\_READY = 1 prior to a register read and new data becomes available during the register read, DATA\_READY is cleared to 0 at the start of the register read and remains at 0 throughout the read. When the read is complete, DATA\_READY is set to 1.

## Using FIFO Interrupts

## FIFO Watermark

The FIFO\_WATERMARK bit (Register 0x0B, Bit 2) is set when the number of samples stored in the FIFO is equal to or exceeds the number of samples specified in the FIFO\_SAMPLES register (Address 0x29) together with the FIFO\_SAMPLES bit in the FIFO\_CONTROL register (Bit 2, Address 0x28). The FIFO\_WA-TERMARK bit is cleared automatically when enough samples are read from the FIFO so that the number of samples remaining is lower than the value set by the user in the FIFO\_SAMPLES bit field.

If the number of FIFO samples is set to 0, the FIFO watermark interrupt is set. To avoid unexpectedly triggering this interrupt, the default value of the FIFO\_SAMPLES register is 0x80.

## FIFO Ready

The FIFO\_READY bit (Register 0x44, Bit 1) is set when there is at least one valid sample available in the FIFO output buffer. This bit is cleared when no valid data is available in the FIFO.

## Overrun

The FIFO\_OVERRUN bit (Register 0x44, Bit 3) is set when the FIFO has overrun or overflowed, indicating that new data has replaced unread data. This may indicate a full FIFO that has not yet been emptied or a clocking error caused by a slow SPI transaction. If the FIFO is configured to oldest saved mode, an overrun event indicates that there is insufficient space available for a new sample.

The FIFO\_OVERRUN bit is cleared automatically when the contents of the FIFO are read. Likewise, when the FIFO is disabled, the FIFO\_OVERRUN bit is cleared.

## USING EXTERNAL TRIGGER

For applications that require a precisely timed acceleration measurement, the ADXL367 features an option to synchronize acceleration sampling to an external trigger. The EXT\_SAMPLE bit (Bit 3) in the FILTER\_CTL register (Address 0x2C) enables this feature. When the EXT\_SAMPLE bit is set to 1, the INT2 pin is automatically reconfigured for use as the synchronization trigger input. Note that the external trigger only works in measurement mode.

When external triggering is enabled, it is up to the system designer to ensure that the sampling frequency meets system requirements. Sampling too infrequently causes aliasing. Noise can be lowered by oversampling. However, sampling at too high a frequency may not allow enough time for the accelerometer to process the acceleration data and convert it to valid digital output.

When Nyquist criteria are met, signal integrity is maintained. An internal antialiasing filter is available in the ADXL367 and can assist the system designer in maintaining signal integrity. To prevent aliasing, set the filter bandwidth to a frequency no greater than ½

## APPLICATIONS INFORMATION

the sampling rate. For example, when sampling at 100 Hz, set the filter pole to no higher than 50 Hz. The filter pole is set via the ODR bits in the FILTER\_CTL register (Address 0x2C). The filter bandwidth is set to ½ the ODR and is set via the ODR bits. Even though the ODR is ignored (because the data rate is set by the external trigger), the filter is still applied at the specified bandwidth.

Because of internal timing requirements, the trigger signal applied to the INT2 pin must meet the following criteria:

- The trigger signal is active high.
- The pulse width of the trigger signal must be at least 80 µs.
- The trigger must be deasserted for at least 120 µs before it is reasserted.
- The maximum sampling frequency that is supported is 625 Hz (typical).
- The minimum sampling frequency is set only by system requirements. Samples do not have to be polled at any minimum rate. However, if samples are polled at a rate lower than the bandwidth set by the antialiasing filter, aliasing may occur.

## USING AN EXTERNAL CLOCK

The ADXL367 has a built-in clock that, by default, is used for clocked internal operations. If desired, an external clock can be provided and used.

To use an external clock, the EXT\_CLK bit (Bit 6) in the POW-ER\_CTL register (Address 0x2D) must be set. Setting this bit reconfigures the INT1 pin to an input pin on which the clock can be provided. The external clock must operate between 51.2 kHz and 102.4 kHz. Further information is provided in the External Clock section.

## USING SELF TEST

The ADXL367 has a two-step process to correctly record the self test signal levels. The self test function, described in the Self Test section, is enabled via the ST and ST\_FORCE bits in the SELF\_TEST register (Address 0x2E). The recommended procedure for using the self test functionality is as follows:

1. Enter measurement mode and wait 100 ms for output to settle.
2. Enable self test mode by setting the ST bit in the SELF\_TEST register (Address 0x2E).
3. Wait 4/ODR for the output to settle to its new value.
4. Read acceleration data for the x-axis.
5. Apply self test force by setting the ST\_FORCE bit in the SELF\_TEST register (Address 0x2E).
6. Wait 4/ODR for the output to settle to its new value.
7. Read acceleration data for the x-axis.
8. Compare to the values from Step 3, and convert the difference from LSB to m g by multiplying by the sensitivity. If the observed difference falls within the self test output change specification listed in Table 1, the device passes self test and is deemed operational.
9. Disable self test by clearing the ST and ST\_FORCE bits in the SELF\_TEST register (Address 0x2E).

The self test output change specification shown in Table 1 is only given for V S = 2.0 V and the test conditions listed in the Specifications section. Self test response in g is not proportional to the supply voltage because of the internal 1 V regulator. Due to the low supply voltage of the device, the x-axis self test force is approximately 0.17 g and a more robust ST reading can be made by averaging the x-axis output readings to lower the noise. It is recommended to average 4 to 16 samples to get the acceleration for self test force on and self test force off to alleviate the influence from noise. The self test reading in LSB varies with measurement range (±2 g , ±4 g , ±8 g ), but does not vary significantly with the operation mode (normal operation or low noise mode) and bandwidth setting (ODR).

Note that self test is most accurate in the ±2 g range and is recommended to be used. Anything other than the ±2 g range may be inaccurate due to the low signal levels.

## OPERATION AT VOLTAGES OTHER THAN 2.0 V

The ADXL367 is tested and specified at a supply voltage of V S = 2.0 V. However, the ADXL367 can be powered with a V S as high as 3.6 V or as low as 1.1 V. Some performance parameters change as the supply voltage changes, including the supply current (see Figure 41), noise (see Table 10 and Table 2), offset, sensitivity, and self test output change.

Figure 62 shows the potential effect on 0 g offset at varying supply voltages. Data for Figure 62 was calibrated to show 0 m g offset at 2.0 V.

Figure 62. 0 g Offset vs. Supply Voltage (V S )

<!-- image -->

## MECHANICAL CONSIDERATIONS FOR MOUNTING

Mount the ADXL367 on the PCB in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL367 at an unsupported PCB location, as shown in Figure 63, can result in large, apparent measurement errors due to undampened PCB

## APPLICATIONS INFORMATION

vibration. Locating the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is greater than the mechanical sensor resonant frequency of the accelerometer and, therefore, effectively invisible to the accelerometer. Multiple mounting points, close to the sensor, and/or a thicker PCB also help to reduce the effect of system resonance on the performance of the sensor.

Figure 63. Incorrectly Placed Accelerometers

<!-- image -->

## Layout and Design Recommendations

Figure 64 shows the recommended PCB land pattern.

Figure 64. Recommended PCB Land Pattern

<!-- image -->

## AXES OF ACCELERATION SENSITIVITY

Figure 65. Axes of Acceleration Sensitivity (Corresponding Output Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Figure 66. Output Response vs. Orientation to Gravity

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description         |
|----------------------------|----------------|-----------------------------|
| CC-12-4                    | LGA            | 12-Terminal Land Grid Array |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description        | Packing Quantity   | Package Option   |
|--------------------|---------------------|----------------------------|--------------------|------------------|
| ADXL367BCCZ        | -40°C to +85°C      | LGA/CASON/CH ARRY SO NO LD |                    | CC-12-4          |
| ADXL367BCCZ-RL     | -40°C to +85°C      | LGA/CASON/CH ARRY SO NO LD | Reel, 5000         | CC-12-4          |
| ADXL367BCCZ-RL7    | -40°C to +85°C      | LGA/CASON/CH ARRY SO NO LD | Reel, 1500         | CC-12-4          |
| ADXL367U8-BCCZ     | -40°C to +85°C      | LGA/CASON/CH ARRY SO NO LD |                    | CC-12-4          |
| ADXL367U8-BCCZ-RL  | -40°C to +85°C      | LGA/CASON/CH ARRY SO NO LD | Reel, 5000         | CC-12-4          |
| ADXL367U8-BCCZ-RL7 | -40°C to +85°C      | LGA/CASON/CH ARRY SO NO LD | Reel, 1500         | CC-12-4          |

## EVALUATION BOARDS

| Evaluation Board 1   | Description                |
|----------------------|----------------------------|
| EVAL-ADXL367Z        | Breakout Board             |
| EVAL-ADXL367-SDP     | Customer Evaluation System |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->

Updated: September 20, 2023