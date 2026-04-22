<!-- lastmod 2024-08-29 -->
<!-- image -->

## FEATURES

- ±200 g measurement range
- 200 Hz to 3200 Hz user selectable bandwidth with 4-pole antialiasing filter
- Selectable oversampling ratio
- Adjustable high-pass filter
- Ultralow power
- Power can be derived from a coin cell battery
- 22 µA at 3200 Hz ODR, 2.5 V supply
- Low power, wake-up mode for low g activity detection
- 1.4 µA instant on mode with adjustable threshold
- &lt;0.1 µA standby mode
- Built in features for system level power savings
- Autonomous interrupt processing without processor intervention
- Deep embedded FIFO to minimize host processor load
- Ultralow power event monitoring detects impacts and wakes up fast enough to capture the transient events
- Ability to capture and store peak acceleration values of events
- Adjustable, low g threshold activity and inactivity detection
- Wide supply range: 1.6 V to 3.5 V
- Acceleration sample synchronization via external trigger
- SPI digital interface and limited I 2 C interface format support
- 12-bit output at 100 m g /LSB scale factor
- Wide temperature range: -40°C to +105°C
- Small, thin, 3 mm × 3.25 mm × 1.06 mm package

## APPLICATIONS

- Impact and shock detection
- Asset health assessment
- Portable Internet of Things (IoT) edge nodes
- Concussion and head trauma detection

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## Micropower, 3-Axis, ±200 g Digital Output, MEMS Accelerometer

## GENERAL DESCRIPTION

The ADXL372 is an ultralow power, 3-axis, ±200 g MEMS accelerometer that consumes 22 µA at a 3200 Hz output data rate (ODR). The ADXL372 does not power cycle its front end to achieve its low power operation and therefore does not run the risk of aliasing the output of the sensor.

In addition to its ultralow power consumption, the ADXL372 has many features to enable impact detection while providing system level power reduction. The device includes a deep multimode output first in, first out (FIFO), several activity detection modes, and a method for capturing only the peak acceleration of over threshold events.

Two additional lower power modes with interrupt driven, wake-up features are available for monitoring motion during periods of inactivity. In wake-up mode, acceleration data can be averaged to obtain a low enough output noise to trigger on low g thresholds. In instant on mode, the ADXL372 consumes 1.4 µA while continuously monitoring the environment for impacts. When an impact event that exceeds the internally set threshold is detected, the device switches to normal operating mode fast enough to record the event.

High g applications tend to experience acceleration content over a wide range of frequencies. The ADXL372 includes a 4-pole low-pass antialiasing filter to attenuate out of band signals that are common in high g applications. The ADXL372 also incorporates a high-pass filter to eliminate initial and slow changing errors, such as ambient temperature drift.

The ADXL372 provides 12-bit output data at 100 m g /LSB scale factor. The user can access configuration and data registers via the serial peripheral interface (SPI) or limited I 2 C protocol. The ADXL372 operates over a wide supply voltage range and is available in a 3 mm × 3.25 mm × 1.06 mm package.

Multifunction pin names may be referenced by their relevant function only.

## TABLE OF CONTENTS

| Features................................................................                                          | 1                                                  |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| Applications...........................................................                                           | 1                                                  |
| General Description...............................................1                                               |                                                    |
| Functional Block Diagram......................................1                                                   |                                                    |
| Specifications........................................................                                            | 4                                                  |
| SPI Specifications..............................................                                                  | 5                                                  |
| I 2 C Specifications...............................................6                                              |                                                    |
| Absolute Maximum Ratings                                                                                          | ..................................8                |
| Thermal Resistance...........................................                                                     | 8                                                  |
| Recommended Soldering Profile........................8                                                            |                                                    |
| ESD Caution.......................................................8                                               |                                                    |
| Pin Configuration and Function Descriptions........                                                               | 9                                                  |
| Typical Performance Characteristics...................10                                                          |                                                    |
| Theory of Operation.............................................15                                                |                                                    |
| Mechanical Device Operation..........................                                                             | 15                                                 |
| Operating Modes..............................................15                                                   |                                                    |
| Bandwidth.........................................................15                                              |                                                    |
| Power/Noise Trade-Off.....................................16                                                      |                                                    |
| Power Savings.................................................                                                    | 17                                                 |
| Autonomous Event Detection..............................18                                                        |                                                    |
| Activity and Inactivity........................................18                                                 |                                                    |
| Motion Warning................................................                                                    | 20                                                 |
| Impact Detection Features..................................                                                       | 21                                                 |
| Wide Bandwidth...............................................                                                     | 21                                                 |
| Instant On Impact Detection.............................21                                                        |                                                    |
| Capturing Impact Events..................................21                                                       |                                                    |
| FIFO....................................................................                                          | 23                                                 |
| Benefits of the FIFO.........................................23                                                   |                                                    |
| Using the FIFO.................................................23                                                 |                                                    |
| Retrieving Data from FIFO...............................23                                                        |                                                    |
| Interrupts.............................................................                                           | 25                                                 |
| Interrupt Pins....................................................25                                              |                                                    |
| Types of Interrupts............................................25                                                 |                                                    |
| Additional Features..............................................27                                               |                                                    |
| Using an External Clock...................................27                                                      |                                                    |
| Synchronized Data Sampling...........................27                                                           |                                                    |
| Self Test............................................................27                                           |                                                    |
| User Register Protection..................................27                                                      |                                                    |
| User Offset Trims.............................................                                                    | 28                                                 |
| Serial Communications........................................29                                                   |                                                    |
| Serial Interface                                                                                                  | ................................................29 |
| Multibyte Transfers...........................................29                                                  |                                                    |
| Invalid Addresses and Address Folding...........30                                                                |                                                    |
| Register Map.......................................................                                               | 31                                                 |
| Register Details...................................................                                               | 33                                                 |
| Analog Devices ID Register.............................                                                           | 33                                                 |
| Analog Devices MEMS ID Register..................33 Device ID Register........................................... | 33                                                 |
| Product Revision ID Register...........................33                                                         |                                                    |

Status Register.................................................34

Activity Status Register.................................... 34

FIFO Entries Register, MSB.............................35

FIFO Entries Register, LSB .............................35

X-Axis Data Register, MSB.............................. 36

X-Axis Data Register, LSB............................... 36

Y-Axis Data Register, MSB...............................36

Y-Axis Data Register, LSB ...............................36

Z-Axis Data Register, MSB...............................37

Z-Axis Data Register, LSB ...............................37

Highest Peak Data Registers........................... 37

X-Axis Highest Peak Data Register, MSB........37

X-Axis Highest Peak Data Register, LSB.........38

Y-Axis Highest Peak Data Register, MSB........ 38

Y-Axis Highest Peak Data Register, LSB......... 38

Z-Axis Highest Peak Data Register, MSB........ 39

Z-Axis Highest Peak Data Register, LSB......... 39

Offset Trim Registers........................................39

X-Axis Offset Trim Register, LSB..................... 39

Y-Axis Offset Trim Register, LSB......................40

Z-Axis Offset Trim Register, LSB......................40

X-Axis Activity Threshold Register, MSB..........40

X-Axis of Activity Threshold Register, LSB.......41

Y-Axis Activity Threshold Register, MSB..........41

Y-Axis of Activity Threshold Register, LSB.......41

Z-Axis Activity Threshold Register, MSB..........42

Z-Axis of Activity Threshold Register, LSB.......42

Activity Time Register.......................................43

X-Axis Inactivity Threshold Register, MSB.......43

X-Axis of Inactivity Threshold Register, LSB....43

Y-Axis Inactivity Threshold Register, MSB....... 44

Y-Axis of Inactivity Threshold Register, LSB.... 44

Z-Axis Inactivity Threshold Register, MSB....... 45

Z-Axis of Inactivity Threshold Register, LSB.... 45

Inactivity Time Registers.................................. 45

Inactivity Timer Register, MSB......................... 46

Inactivity Timer Register, LSB.......................... 46

X-Axis Motion Warning Threshold Register,

MSB................................................................46

X-Axis of Motion Warning Notification

Register, LSB................................................. 47

Y-Axis Motion Warning Notification

Threshold Register, MSB............................... 47

Y-Axis of Motion Warning Notification

Register, LSB................................................. 47

Z-Axis Motion Warning Notification

Threshold Register, MSB............................... 48

Z-Axis Motion Warning Notification Register,

LSB.................................................................48

## TABLE OF CONTENTS

| High-Pass Filter Settings Register...................                                                                                                                                                                                                  | 49                                                                                                                                                                                                                                                     | Application Examples.......................................56                                                                                                                                                                                          |    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| FIFO Samples Register....................................49                                                                                                                                                                                            |                                                                                                                                                                                                                                                        | Operation at Voltages Other Than 2.5 V..........57                                                                                                                                                                                                     |    |
| FIFO Control Register......................................50                                                                                                                                                                                          |                                                                                                                                                                                                                                                        | Operation at Temperatures Other Than                                                                                                                                                                                                                   |    |
| Interrupt Pin Function Map Registers...............50                                                                                                                                                                                                  |                                                                                                                                                                                                                                                        | Ambient..........................................................57                                                                                                                                                                                    |    |
| INT2 Function Map Register............................                                                                                                                                                                                                 | 51                                                                                                                                                                                                                                                     | Mechanical Considerations for Mounting.........57                                                                                                                                                                                                      |    |
| External Timing Control Register.....................                                                                                                                                                                                                  | 52                                                                                                                                                                                                                                                     | Axes of Acceleration Sensitivity.......................                                                                                                                                                                                                | 57 |
| Measurement Control Register........................                                                                                                                                                                                                   | 52                                                                                                                                                                                                                                                     | Layout and Design Recommendations............                                                                                                                                                                                                          | 58 |
| Power Control Register....................................53                                                                                                                                                                                           |                                                                                                                                                                                                                                                        | Silicon Anomaly...................................................59                                                                                                                                                                                   |    |
| Self Test Register.............................................54                                                                                                                                                                                      |                                                                                                                                                                                                                                                        | ADXL372 Functionality Issues.........................                                                                                                                                                                                                  | 59 |
| RESET (Clears) Register, Part in Standby                                                                                                                                                                                                               |                                                                                                                                                                                                                                                        | Functionality Issues..........................................59                                                                                                                                                                                       |    |
| Mode..............................................................                                                                                                                                                                                     | 55                                                                                                                                                                                                                                                     | Outline Dimensions.............................................                                                                                                                                                                                        | 61 |
| FIFO Access Register......................................55                                                                                                                                                                                           |                                                                                                                                                                                                                                                        | Ordering Guide.................................................61                                                                                                                                                                                      |    |
| Applications Information......................................                                                                                                                                                                                         | 56                                                                                                                                                                                                                                                     | Evaluation Boards............................................61                                                                                                                                                                                        |    |
| REVISION HISTORY                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                        |    |
| 9/2022-Rev. B to Rev. C                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                        |    |
| Added SPI Specifications Section....................................................................................................................5                                                                                                  | Added SPI Specifications Section....................................................................................................................5                                                                                                  | Added SPI Specifications Section....................................................................................................................5                                                                                                  |    |
| Moved Table 2..................................................................................................................................................5                                                                                       | Moved Table 2..................................................................................................................................................5                                                                                       | Moved Table 2..................................................................................................................................................5                                                                                       |    |
| Added I 2 C Specifications Section....................................................................................................................                                                                                                 | Added I 2 C Specifications Section....................................................................................................................                                                                                                 | Added I 2 C Specifications Section....................................................................................................................                                                                                                 | 6  |
| Moved SPI Timing Diagrams Section and Figure 2 to Figure 6.......................................................................6                                                                                                                     | Moved SPI Timing Diagrams Section and Figure 2 to Figure 6.......................................................................6                                                                                                                     | Moved SPI Timing Diagrams Section and Figure 2 to Figure 6.......................................................................6                                                                                                                     |    |
| Moved Table 3..................................................................................................................................................6                                                                                       | Moved Table 3..................................................................................................................................................6                                                                                       | Moved Table 3..................................................................................................................................................6                                                                                       |    |
| Moved I 2 C Timing Diagrams Section and Figure 7 to Figure 10......................................................................7                                                                                                                   | Moved I 2 C Timing Diagrams Section and Figure 7 to Figure 10......................................................................7                                                                                                                   | Moved I 2 C Timing Diagrams Section and Figure 7 to Figure 10......................................................................7                                                                                                                   |    |
| Changes to Instant On Impact Detection Section..........................................................................................21                                                                                                             | Changes to Instant On Impact Detection Section..........................................................................................21                                                                                                             | Changes to Instant On Impact Detection Section..........................................................................................21                                                                                                             |    |
| Changes to Capturing Impact Events Section...............................................................................................21                                                                                                            | Changes to Capturing Impact Events Section...............................................................................................21                                                                                                            | Changes to Capturing Impact Events Section...............................................................................................21                                                                                                            |    |
| Changes to Figure 44....................................................................................................................................                                                                                               | Changes to Figure 44....................................................................................................................................                                                                                               | Changes to Figure 44....................................................................................................................................                                                                                               | 21 |
| Added Figure 45; Renumbered Sequentially.................................................................................................21                                                                                                            | Added Figure 45; Renumbered Sequentially.................................................................................................21                                                                                                            | Added Figure 45; Renumbered Sequentially.................................................................................................21                                                                                                            |    |
| Added Limitations Section.............................................................................................................................                                                                                                 | Added Limitations Section.............................................................................................................................                                                                                                 | Added Limitations Section.............................................................................................................................                                                                                                 | 22 |
| Changes to Figure 47....................................................................................................................................                                                                                               | Changes to Figure 47....................................................................................................................................                                                                                               | Changes to Figure 47....................................................................................................................................                                                                                               | 29 |
| Changes to SPI Protocol Section...................................................................................................................29                                                                                                   | Changes to SPI Protocol Section...................................................................................................................29                                                                                                   | Changes to SPI Protocol Section...................................................................................................................29                                                                                                   |    |
| Changes to Figure 100 and Table 67.............................................................................................................54                                                                                                      | Changes to Figure 100 and Table 67.............................................................................................................54                                                                                                      | Changes to Figure 100 and Table 67.............................................................................................................54                                                                                                      |    |
| Added Silicon Anomaly Section.....................................................................................................................59                                                                                                   | Added Silicon Anomaly Section.....................................................................................................................59                                                                                                   | Added Silicon Anomaly Section.....................................................................................................................59                                                                                                   |    |
| Added ADXL372 Functionality Issues Section and Table 71; Renumbered Sequentially..............................59                                                                                                                                       | Added ADXL372 Functionality Issues Section and Table 71; Renumbered Sequentially..............................59                                                                                                                                       | Added ADXL372 Functionality Issues Section and Table 71; Renumbered Sequentially..............................59                                                                                                                                       |    |
| Added Functionality Issues Section, Table 72, Figure 112, and Table 73; Renumbered Sequentially.......... Added Figure 113, Table 74, and Table 75.................................................................................................... | Added Functionality Issues Section, Table 72, Figure 112, and Table 73; Renumbered Sequentially.......... Added Figure 113, Table 74, and Table 75.................................................................................................... | Added Functionality Issues Section, Table 72, Figure 112, and Table 73; Renumbered Sequentially.......... Added Figure 113, Table 74, and Table 75.................................................................................................... | 59 |

## SPECIFICATIONS

TA = 25°C, V S = 2.5 V, V DDI/O = 2.5 V, 3200 Hz ODR, 1600 Hz bandwidth, acceleration = 0 g , default register settings, unless otherwise noted. All minimum and maximum specifications are guaranteed. Typical specifications may not be guaranteed.

Table 1.

| Parameter                                      | Test Conditions/Comments                     | Min   | Typ   | Max   | Unit     |
|------------------------------------------------|----------------------------------------------|-------|-------|-------|----------|
| SENSOR INPUT                                   | Each axis                                    |       |       |       |          |
| Measurement Range                              |                                              |       | ±200  |       | g        |
| Nonlinearity                                   | Percentage of full scale                     |       | ±0.5  |       | %        |
| Sensor Resonant Frequency                      |                                              |       | 16    |       | kHz      |
| Cross Axis Sensitivity 1                       |                                              |       | ±2.5  |       | %        |
| OUTPUT RESOLUTION                              | Each axis                                    |       |       |       |          |
| All Operating Modes                            |                                              |       | 12    |       | Bits     |
| SCALE FACTOR                                   | Each axis                                    |       |       |       |          |
| Scale Factor Calibration Error                 |                                              |       |       | ±10   | %        |
| Scale Factor at X OUT , Y OUT , Z OUT          | Expressed in m g /LSB                        |       | 100   |       | m g /LSB |
|                                                | Expressed in LSB/ g                          |       | 10    |       | LSB/ g   |
| Scale Factor Change Due to Temperature 2       |                                              |       | 0.1   |       | %/°C     |
| 0 g OFFSET                                     | Each axis                                    |       |       |       |          |
| 0 g Output                                     | X OUT , Y OUT , Z OUT                        |       |       |       |          |
|                                                | At V S = 2.5 V                               | -3    | ±1    | +3    | g        |
|                                                | 1.6 V ≤ V S ≤ 3.5 V                          | -7    | ±1    | +7    | g        |
| 0 g Offset vs. Temperature 2                   |                                              |       |       |       |          |
| Normal Operation                               | X OUT , Y OUT , Z OUT                        |       | ±50   |       | m g /°C  |
| Low Noise Mode                                 | X OUT , Y OUT , Z OUT                        |       | ±35   |       | m g /°C  |
| NOISE PERFORMANCE                              |                                              |       |       |       |          |
| RMS Noise                                      | Each axis                                    |       |       |       |          |
| Normal Operation                               |                                              |       | 3.5   |       | LSB      |
| Low Noise Mode                                 |                                              |       | 3     |       | LSB      |
| BANDWIDTH                                      | User selectable                              |       |       |       |          |
| ODR                                            |                                              | 400   |       | 6400  | Hz       |
| High-Pass Filter, -3 dB Corner 3               |                                              | 0.24  |       | 30.48 | Hz       |
| Low-Pass (Antialiasing) Filter, -3 dB Corner 4 | 4-pole low-pass filter                       | 200   |       | ODR/2 | Hz       |
| POWER SUPPLY                                   |                                              |       |       |       |          |
| Operating Voltage Range (V S )                 |                                              | 1.6   | 2.5   | 3.5   | V        |
| Input/Output Voltage Range (V DDI/O )          |                                              | 1.6   | 2.5   | V S   | V        |
| Supply Current                                 |                                              |       |       |       |          |
| Measurement Mode                               | 3200 Hz ODR                                  |       |       |       |          |
| Normal Operation                               |                                              |       | 22    |       | µA       |
| Low Noise Mode                                 |                                              |       | 33    |       | µA       |
| Instant On Mode                                |                                              |       | 1.4   |       | µA       |
| Wake-Up Mode                                   | Varies with wake-up rate                     |       |       |       |          |
|                                                | At slowest wake-up rate                      |       | 0.77  |       | µA       |
| Standby                                        | C S = 1.1 µF, C IO = 1.1 µF, input is 100 mV |       | <0.1  |       | µA       |
| Input Frequency                                |                                              |       |       |       |          |
| 100 Hz to 1 kHz                                |                                              |       | -20   |       | dB       |
| 1 kHz to 250 kHz                               |                                              |       | -17   |       | dB       |
| Turn-On Time                                   | 3200 Hz ODR                                  |       |       |       |          |
| Power-Up to Standby                            | C S = 1.1 µF, C IO = 1.1 µF                  |       | 5     |       | ms       |
| Measurement Mode Instruction to Valid Data     | Filter settle bit = 1                        |       | 16    |       | ms       |

## SPECIFICATIONS

Table 1.

| Parameter                                             | Test Conditions/Comments   | Min   | Typ   | Max   | Unit   |
|-------------------------------------------------------|----------------------------|-------|-------|-------|--------|
| Instant On ULP Monitoring to Full Bandwidth Data      | Filter settle bit = 0      |       | 370 1 |       | ms ms  |
| ENVIRONMENTAL TEMPERATURE Operating Temperature Range |                            | -40   |       | +105  | °C     |

## SPI SPECIFICATIONS

TA = 25°C, V S = 2.5 V, V DDI/O = 2.5 V, unless otherwise noted.

## Table 2. SPI Logic Levels and Timing

| Parameter        | Description                                 | Min           | Max           | Unit   |
|------------------|---------------------------------------------|---------------|---------------|--------|
| INPUT DC LEVELS  |                                             |               |               |        |
| V IL             | Low level input voltage                     | 0.7 × V DDI/O | 0.3 × V DDI/O | V      |
| V IH             | High level input voltage                    |               |               | V      |
| I IL             | Low level input current, V IN = 0 V         | -0.1          |               | µA     |
| I IH             | High level input current, V IN = V DDI/O    |               | 0.1           | µA     |
| OUTPUT DC LEVELS |                                             |               |               |        |
| V OL             | Low level output voltage, I OL = I OL, MIN  |               | 0.2 × V DDI/O | V      |
| V OH             | High level output voltage, I OL = I OH, MAX | 0.8 × V DDI/O |               | V      |
| I OL             | Low level output current, V OL = V OL, MAX  | -10           |               | mA     |
| I OH             | High level output current, V OL = V OH, MIN |               | 4             | mA     |
| INPUT AC         |                                             |               |               |        |
| SCLK Frequency   |                                             | 0.1           | 10            | MHz    |
| t HIGH           | SCLK high time                              | 40            |               | ns     |
| t LOW            | SCLK low time                               | 40            |               | ns     |
| t CSS            | CS setup time                               | 20            |               | ns     |
| t CSH            | CS hold time                                | 20            |               | ns     |
| t CSD            | CS disable time                             | 40            |               | ns     |
| t SCLKS          | Rising SCLK setup time                      | 20            |               | ns     |
| t SU             | MOSI setup time                             | 20            |               | ns     |
| t HD             | MOSI hold time                              | 20            |               | ns     |
| OUTPUT AC        |                                             |               |               |        |
| t P              | Propagation delay, C LOAD = 30 pF           |               | 30            | ns     |
| t EN             | Enable MISO time                            | 30            |               | ns     |
| t DIS            | Disable MISO time                           |               | 20            | ns     |

## SPECIFICATIONS

## SPI Timing Diagrams

Figure 6. SPI Timing Diagram, Multibyte Write

<!-- image -->

## I 2 C SPECIFICATIONS

TA = 25°C, V S = 2.5 V, V DDI/O = 1.8 V, unless otherwise noted.

Table 3. I 2 C Logic Level and Timing

|                |                | I2C_HSM_EN = 0   | I2C_HSM_EN = 0   | I2C_HSM_EN = 0   | I2C_HSM_EN = 1   | I2C_HSM_EN = 1   | I2C_HSM_EN = 1   | I2C_HSM_EN = 1   |
|----------------|----------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|
| Parameter      | Description    | Min              | Typ              | Max              | Min              | Typ              | Max              | Unit             |
| INPUT AC       |                |                  |                  |                  |                  |                  |                  |                  |
| SCLK Frequency |                | 0                |                  | 1                | 0                |                  | 3.4              | MHz              |
| t HIGH         | SCLK high time | 260              |                  |                  | 120              |                  |                  | ns               |

## SPECIFICATIONS

## Table 3. I 2 C Logic Level and Timing

|           |                     | I2C_HSM_EN = 0   | I2C_HSM_EN = 0   | I2C_HSM_EN = 0   | I2C_HSM_EN = 1   | I2C_HSM_EN = 1   | I2C_HSM_EN = 1   | I2C_HSM_EN = 1   |
|-----------|---------------------|------------------|------------------|------------------|------------------|------------------|------------------|------------------|
| Parameter | Description         | Min              | Typ              | Max              | Min              | Typ              | Max              | Unit             |
| t LOW     | SCLK low time       | 500              |                  |                  | 320              |                  |                  | ns               |
| t SUSTA   | Start setup time    | 260              |                  |                  | 160              |                  |                  | ns               |
| t HDSTA   | Start hold time     | 260              |                  |                  | 160              |                  |                  | ns               |
| t SUDAT   | Data setup time     | 50               |                  |                  | 10               |                  |                  | ns               |
| t HDDAT   | Data hold time      | 0                |                  |                  | 0                |                  | 150              | ns               |
| t SUSTO   | Stop setup time     | 260              |                  |                  | 160              |                  |                  | ns               |
| t BUF     | Bus free time       | 500              |                  |                  |                  |                  |                  | ns               |
| t RCL     | SCL input rise time |                  |                  | 120              | 20               |                  | 80               | ns               |
| t FCL     | SCL input fall time | 20 × (V DD /5.5) |                  | 120              | 20               |                  | 80               | ns               |
| t RDA     | SDA input rise time |                  |                  | 120              | 20               |                  | 160              | ns               |
| t FDA     | SDA input fall time | 20 × (V DD /5.5) |                  | 120              | 20               |                  | 160              | ns               |
| OUTPUT AC |                     |                  |                  |                  |                  |                  |                  |                  |
| C LOAD    |                     |                  |                  | 550              |                  |                  | 400              | pF               |

## I 2 C Timing Diagrams

Figure 10. I 2 C Timing Diagram, Multibyte Write

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                                          |                  |
|---------------------------------------------------|------------------|
| Acceleration                                      | Rating           |
| Any Axis, Unpowered                               | 10000 g          |
| Any Axis, Powered                                 | 10000 g          |
| V S                                               | -0.3 V to +3.6 V |
| V DDI/O                                           | -0.3 V to +3.6 V |
| All Other Pins                                    | -0.3 V to V S    |
| Output Short-Circuit Duration (Any Pin to Ground) | Indefinite       |
| ESD, Human Body Model (HBM)                       | 2000 V           |
| Temperature Range (Storage)                       | -50°C to +150°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

| Table 5. Package   |   θ JA |   θ JC | Unit   | Device Weight   |
|--------------------|--------|--------|--------|-----------------|
| CC-16-4            |    150 |     85 | °C/W   | 18 m g          |

1 Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with four thermal vias. See JEDEC JESD51.

## RECOMMENDED SOLDERING PROFILE

Figure 11 and Table 6 provide details about the recommended soldering profile.

Figure 11. Recommended Soldering Profile

<!-- image -->

Table 6. Recommended Soldering Profile

|                                                                                 | Condition        | Condition        |
|---------------------------------------------------------------------------------|------------------|------------------|
| Profile Feature                                                                 | Sn63/Pb37        | Pb-Free          |
| Average Ramp Rate (T L to T P )                                                 | 3°C/sec max      | 3°C/sec max      |
| Preheat                                                                         |                  |                  |
| Minimum Temperature (T SMIN )                                                   | 100°C            | 150°C            |
| Maximum Temperature (T SMAX )                                                   | 150°C            | 200°C            |
| Time (T SMIN to T SMAX ) (t S )                                                 | 60 sec to        | 60 sec to        |
|                                                                                 | 120 sec          | 180 sec          |
| T SMAX to T L                                                                   |                  |                  |
| Ramp-Up Rate                                                                    | 3°C/sec max      | 3°C/sec max      |
| Time Maintained Above Liquidous (T L ) Liquidous Temperature (T L ) Time (t L ) | 183°C 60 sec to  | 217°C 60 sec to  |
| Peak Temperature (T P )                                                         | 240 + 0/-5°C     | 260 + 0/-5°C     |
| Time Within 5°C of Actual Peak                                                  | 10 sec to 30 sec | 20 sec to 40 sec |
| P )                                                                             |                  | 6°C/sec max      |
| Temperature (t                                                                  |                  |                  |
| Ramp-Down Rate                                                                  | 6°C/sec max      |                  |
| Time 25°C to Peak Temperature                                                   | 6 minutes max    | 8 minutes max    |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 12. Pin Configuration (Top View)

<!-- image -->

Table 7. Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                     |
|-----------|------------|---------------------------------------------------------------------------------|
|         1 | V DDI/O    | Supply Voltage for Digital Input/Output.                                        |
|         2 | NIC        | No Connect. This pin is not internally connected.                               |
|         3 | RESERVED   | Reserved. This pin may be left unconnected or connected to GND.                 |
|         4 | SCLK       | SPI Serial Communications Clock.                                                |
|         5 | RESERVED   | Reserved. This pin may be left unconnected or connected to GND.                 |
|         6 | MOSI/SDA   | SPI Master Output, Slave Input (MOSI). I 2 C Serial Data (SDA).                 |
|         7 | MISO       | SPI Master Input, Slave Output.                                                 |
|         8 | CS/SCL     | SPI Chip Select (CS). I 2 C Serial Communications Clock (SCL).                  |
|         9 | INT2       | Interrupt 2 Output. This pin also serves as an input for synchronized sampling. |
|        10 | RESERVED   | Reserved. This pin may be left unconnected or connected to GND.                 |
|        11 | INT1       | Interrupt 1 Output. This pin also serves as an input for external clocking.     |
|        12 | GND        | Ground. This pin must be connected to ground.                                   |
|        13 | GND        | Ground. This pin must be connected to ground.                                   |
|        14 | V S        | Supply Voltage.                                                                 |
|        15 | NIC        | No Connect. This pin is not internally connected.                               |
|        16 | GND        | Ground. This pin must be connected to ground.                                   |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 13. X-Axis Zero g Offset at 25°C, V S = 2.5 V

<!-- image -->

Figure 14. Y-Axis Zero g Offset at 25°C, V S = 2.5 V

<!-- image -->

Figure 15. Z-Axis Zero g Offset at 25°C, V S = 2.5 V

<!-- image -->

Figure 16. X-Axis Sensitivity at 25°C, V S = 2.5 V

Figure 17. Y-Axis Sensitivity at 25°C, V S = 2.5 V

<!-- image -->

Figure 18. Z-Axis Sensitivity at 25°C, V S = 2.5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 19. X-Axis Zero g Offset Temperature Coefficient, V S = 2.5 V

<!-- image -->

Figure 20. Y-Axis Zero g Offset Temperature Coefficient, V S = 2.5 V

<!-- image -->

Figure 21. Z-Axis Zero g Offset Temperature Coefficient, V S = 2.5 V

<!-- image -->

Figure 22. X-Axis Zero g Normalized Offset vs. Temperature, 36 Parts Soldered to PCB, ODR = 3200 Hz

Figure 23. Y-Axis Zero g Normalized Offset vs. Temperature, 36 Parts Soldered to PCB, ODR = 3200 Hz

<!-- image -->

Figure 24. Z-Axis Zero g Normalized Offset vs. Temperature, 36 Parts Soldered to PCB, ODR = 3200 Hz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 25. X-Axis Normalized Sensitivity Deviation from 25°C vs. Temperature, 18 Parts Soldered to PCB, ODR = 3200 Hz

<!-- image -->

Figure 26. Y-Axis Normalized Sensitivity Deviation from 25°C vs. Temperature, 17 Parts Soldered to PCB, ODR = 3200 Hz

<!-- image -->

Figure 27. Z-Axis Normalized Sensitivity Deviation from 25°C vs. Temperature, 18 Parts Soldered to PCB, ODR = 3200 Hz

<!-- image -->

Figure 28. Current Consumption at 25°C, Normal Mode, 3200 Hz Output Data Rate, V S = 2.5 V

Figure 29. Current Consumption at 25°C, Low Noise Mode, 3200 Hz Output Data Rate, V S = 2.5 V

<!-- image -->

Figure 30. Current Consumption at 25°C, Instant On Mode, V S = 2.5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 31. Current Consumption at 25°C, Wake-Up Mode, V S = 2.5 V

<!-- image -->

Figure 32. Clock Frequency Deviation from Ideal at 25°C, ODR = 3200 Hz, V S = 2.5 V

<!-- image -->

Figure 33. Clock Frequency Deviation from Ideal at 25°C, ODR = 6400Hz, V S = 2.5 V

<!-- image -->

Figure 34. Current Consumption at 25°C, Standby Mode, V S = 2.5 V

Figure 35. Standby Current vs. Temperature

<!-- image -->

Figure 36. Measurement Mode Current vs. Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 37. Instant On Current vs. Temperature

<!-- image -->

Figure 38. Wake-Up Current vs. Temperature

<!-- image -->

## THEORY OF OPERATION

The ADXL372 is a complete 3-axis acceleration measurement system that operates at extremely low power levels. Acceleration is reported digitally, and the device communicates via the SPI and I 2 C protocols. Built in digital logic enables autonomous operation and implements functions that enhance system level power savings.

## MECHANICAL DEVICE OPERATION

The moving component of the sensor is a polysilicon surface micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against acceleration forces.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the structure and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase sensitive demodulation determines the magnitude and polarity of the acceleration.

## OPERATING MODES

The ADXL372 has three operating modes: measurement mode for continuous, wide bandwidth sensing; an instant on mode for low power impact detection; and wake-up mode for limited bandwidth low g activity detection. Measurement can be suspended by placing the device in standby mode.

## Measurement Mode

Measurement mode is the default operating mode of the ADXL372. In this mode, acceleration data is read continuously, and the accelerometer consumes 22 µA (typical) at an ODR of 3200 Hz using a 2.5 V supply. Actual current consumption is dependent on the ODR chosen. All features described in this data sheet are available when operating the ADXL372 in this mode.

## Instant On Mode

Instant on mode enables extremely low power impact detection. In this mode, the accelerometer constantly monitors the environment while consuming a very low current of 1.4 µA (typical). When an event that exceeds an internal threshold is detected, the device switches into measurement mode to record the event. The target default threshold is 10 g ±5 g . A register option allows the threshold to be increased to a target of 30 g ±10 g if the default threshold is too low.

To save power, no new digital acceleration data is made available until the accelerometer switches into normal operation. However, all registers have normal read/write functionality.

## Wake-Up Mode

Wake-up mode is ideal for simple detection of the presence or absence of motion at an extremely low power consumption. Wakeup mode is particularly useful for the implementation of a low g motion activated on/off switch, allowing the rest of the system to be powered down until sustained activity is detected.

In wake-up mode, the device is powered down for a duration of time equal to the wake-up timer, set by the WAKEUP\_RATE bits in the TIMING register, and then turns on for a duration equal to the filter settling time (see the Filter Settling Time section). The current drawn in this mode is determined by both these parameters.

## Table 8. Wake-Up Current in µA at Different Wake-Up Timer and Filter Settings

|                    | Filter Settling Time   | Filter Settling Time   |
|--------------------|------------------------|------------------------|
| Wake-Up Timer (ms) | 16 ms                  | 370 ms                 |
| 52                 | 5.8 µA                 | 19.4 µA                |
| 104                | 3.6 µA                 | 17.3 µA                |
| 208                | 2.3 µA                 | 14.4 µA                |
| 512                | 1.4 µA                 | 9.7 µA                 |
| 2048               | 0.91 µA                | 4 µA                   |
| 4096               | 0.83 µA                | 2.5 µA                 |
| 8192               | 0.79 µA                | 1.7 µA                 |
| 24576              | 0.77 µA                | 1.1 µA                 |

If motion is detected, the accelerometer can respond autonomously in several ways, depending on the device configuration, such as the following:

- Switch into full bandwidth measurement mode.
- Signal an interrupt to a microcontroller.
- Wake up downstream circuitry.

While in wake-up mode, all registers and the FIFO have normal read/write functionality, and real-time data can be read from the data registers at the reduced wake-up rate. However, no new data is stored in the FIFO during wake-up mode, and there are no interrupts available in wake-up mode.

## Standby

Placing the ADXL372 in standby mode suspends measurement and reduces current consumption to less than 100 nA. All interrupts are cleared, and no new interrupts are generated. The ADXL372 powers up in standby mode with all sensor functions turned off.

## BANDWIDTH

## Low-Pass Antialiasing Filter

High g events often include acceleration content over a wide range of frequencies. The analog-to-digital converter (ADC) of the ADXL372 samples the input acceleration at the user selected ODR. In the absence of antialiasing filters, input signals whose frequency is more than half the ODR alias or that fold into the measurement bandwidth can lead to inaccurate measurements. To mitigate this inaccuracy, a four-pole, low-pass filter is provided at the input of the ADC. The filter bandwidth is user selectable, and the default bandwidth is 200 Hz. The maximum bandwidth is constrained to

## THEORY OF OPERATION

at most half of the ODR, to ensure that the Nyquist criteria is not violated.

## High-Pass Filter

The ADXL372 offers a one-pole, high-pass filter with a user selectable -3 dB frequency. Applications that do not require dc acceleration measurements can use the high-pass filter to minimize constant or slow varying offset errors including initial bias, bias drift due to temperature, and bias drift due to supply voltage.

The high-pass filter is a first-order infinite impulse response (IIR) filter. T able 9 lists the available -3 dB frequencies, which are user selectable and dependent on the output data rate. The high-pass and low-pass filters can be used simultaneously to set up a bandpass option.

Table 9. High-Pass Filter -3 dB Corner Frequencies

|         |   ODR (Hz) |   ODR (Hz) |   ODR (Hz) |   ODR (Hz) |   ODR (Hz) |
|---------|------------|------------|------------|------------|------------|
| Setting |    6400    |    3200    |    1600    |     800    |     400    |
| 00      |      30.48 |      15.24 |       7.61 |       3.81 |       1.9  |
| 01      |      15.58 |       7.79 |       3.89 |       1.94 |       0.97 |
| 10      |       7.88 |       3.94 |       1.97 |       0.98 |       0.49 |
| 11      |       3.96 |       1.98 |       0.99 |       0.49 |       0.24 |

## Filter Settling Time

After entering measurement mode, the first output value does not appear until after the filter settling time has passed. This time is selectable using the FILTER\_SETTLE bit in the POWER\_CTL register. The recommended (and default) settling time to acquire valid data when using either the high-pass filter or the low-pass activity detect filter is 370 ms. The filter settling time of 16 ms is ideal for when both the high-pass filter and low-pass activity detect filter are disabled.

## Selectable ODR

The ADXL372 can report acceleration data at 400 Hz, 800 Hz, 1600 Hz, 3200 Hz, or 6400 Hz. The ODR is user selectable and the default is 400 Hz. In the event that the user selects an anti-aliasing

Table 10. Noise and Current Consumption for V S = 2.5 V

filter bandwidth greater than half the ODR, the device defaults the bandwidth to half the ODR. Increasing or decreasing the ODR increases or decreases the current consumption accordingly, as shown in Figure 39.

Figure 39. Measurement Mode Current vs. ODR for Five Parts

<!-- image -->

## POWER/NOISE TRADE-OFF

The noise performance of the ADXL372 in normal operation, typically 3.5 LSB rms at 3200 Hz ODR and 1600 Hz bandwidth, is adequate for most applications, depending on bandwidth and the desired resolution. For cases where lower noise is needed, the ADXL372 provides a lower noise operating mode that trades reduced noise for a somewhat higher current consumption. In all cases, operating at a higher bandwidth setting increases the rms noise and operating with a lower bandwidth decreases the noise. Table 10 lists the current consumption and noise densities obtained for normal operation and the lower noise mode at a typical 2.5 V supply.

Operating the ADXL372 at a higher supply voltage also decreases noise. Table 11 lists the current consumption and noise densities obtained for normal operation and the lower noise mode at the highest recommended supply, 3.5 V.

| Mode             |   Typical RMS Noise (LSB) |   Typical Current Consumption (µA) |
|------------------|---------------------------|------------------------------------|
| Normal Operation |                       3.5 |                                 22 |
| Low Noise 1      |                       3   |                                 33 |

Table 11. Noise and Current Consumption for V S = 3.5 V

| Mode             |   Typical RMS Noise (LSB) |   Typical Current Consumption (µA) |
|------------------|---------------------------|------------------------------------|
| Normal Operation |                       3   |                                 32 |
| Low Noise 1      |                       2.5 |                                 44 |

## THEORY OF OPERATION

## POWER SAVINGS

The digital interface of the ADXL372 is implemented with system level power savings in mind. The following features enhance power savings:

- Burst reads and writes reduce the number of SPI communication cycles required to configure the device and retrieve data.
- Concurrent operation of activity and inactivity detection enables set it and forget it operation. Loop modes further reduce communications power by enabling the clearing of interrupts without processor intervention.
- The FIFO is implemented such that consecutive samples can be read continuously via a multibyte read of unlimited length; thus, one FIFO read instruction can clear the entire contents of the FIFO. The ADXL372 FIFO construction also allows the use of direct memory access (DMA) to read the FIFO contents.

## AUTONOMOUS EVENT DETECTION

## ACTIVITY AND INACTIVITY

The ADXL372 features built in logic that detects activity (defined as acceleration above a user set threshold) and inactivity (defined as acceleration below a user set threshold). Activity and inactivity events can be used as triggers to manage the accelerometer operating mode, trigger an interrupt to a host processor, and/or autonomously drive a motion switch.

Detection of an activity or inactivity event is indicated in the STATUS2 register and can be configured to generate an interrupt. In addition, the activity status of the device, that is, whether it is moving or stationary, is indicated by the AWAKE bit, described in the Using the AWAKE Bit section.

Activity and inactivity detection can be used when the accelerometer is in either measurement mode or wake-up mode. However, the activity and inactivity interrupts are not available in wake-up mode because the device is inherently looking for activity in this mode, and any changes to activity or inactivity detection features must be made while the device is in standby mode.

## Low-Pass Activity Detect Filter

The ADXL372 combines high g impact detection and low g movement detection in one device. For low g detection, an internal low-pass filter with a -3 dB corner of approximately 10 Hz averages data to reduce the rms noise, allowing accurate detection of activity or inactivity thresholds as low as 500 m g . For high g impact detection, the low-pass activity detect filter can be turned off through a register setting. When using both the low-pass activity detect filter and the high-pass filter, the user must select a high-pass filter corner that does not exceed 10 Hz; otherwise, activity detection data is severely attenuated.

## Activity Detection

An activity event is detected when acceleration in at least one enabled axis remains above a specified threshold for a specified time. Enabled axes, thresholds, and time are user selected. Each axis has its own activity threshold, but the activity timer is shared among all three axes. When multiple axes are selected, an over-threshold event on any one enabled axis triggers the activity detection.

## Referenced and Absolute Configurations

Activity detection can be configured as referenced or absolute mode for all axes through the ACT\_REF bit in the THRESH\_ ACT\_X\_L register.

When using absolute activity detection, acceleration samples are compared directly to a user set threshold to determine whether motion is present. For example, if a threshold of 0.5 g is set and the acceleration on the z-axis is 1 g longer than the user defined activity time, the activity status asserts.

In many applications, it is advantageous for activity detection to be based not on an absolute threshold, but on a deviation from a reference point or orientation. The referenced activity detection is particularly useful because it removes the effect on activity detection of the static 1 g imposed by gravity as well as any static offset errors, which can be up to several g . In absolute activity detection, when the threshold is set to less than 1 g , activity is immediately detected in this case.

In the referenced configuration, activity is detected when acceleration samples are above an internally defined reference by a user defined amount for the user defined amount of time, as described by

Abs ( Acceleration -Reference ) &gt; Threshold where Abs is the absolute value.

Consequently, activity is detected only when the acceleration has deviated sufficiently from the initial orientation. The default setting for the accelerometer is in absolute mode. After it is placed in referenced mode through the appropriate register setting, the reference for activity detection is calculated as soon as full bandwidth measurement mode is turned on. To reset the reference, it is necessary to put the device back into absolute mode and then back to referenced mode. The new reference is set as soon as the device enters full bandwidth measurement mode again. If using both activity and inactivity detection in referenced mode, both must be set back to absolute mode before the reference can be reset.

## Activity Timer

Ideally, the intent of activity detection is to wake up a system only when motion is intentional, ignoring noise or small, unintentional movements. In addition to being sensitive to low g events, the ADXL372 activity detection algorithm is robust in filtering out undesired triggers.

The ADXL372 activity detection functionality includes a timer to filter out unwanted motion and ensure that only sustained motion is recognized as activity. The timer period depends on the ODR selected. At 3200 Hz and below, it is ~6.6 ms; at 6400 Hz, it is ~3.3 ms. For activity detection to trigger, above threshold activity must be sustained for a time equal to the number of activity timer periods specified in the activity time register. For example, a setting of 10 in this register means that above threshold activity must be sustained for 66 ms at 3200 Hz ODR. A register value of zero results in single sample activity detection. The maximum allowable activity time is ~1.68 sec (or 841.5 ms at 6400 Hz ODR). Note that the activity timer is operational in measurement mode only.

## Activity Detection in Wake-Up Mode

If activity detection is enabled while the device is in wake-up mode, the device uses single sample activity detection, no matter the activity time register setting. If activity is detected, the device automatically returns to full bandwidth measurement mode. However, the activity interrupt is not generated unless the activity time setting is zero. If it is not zero, after entering measurement mode, the

## AUTONOMOUS EVENT DETECTION

interrupt is not generated until the device sees sustained activity for the amount of time given in the activity time register. The awake interrupt automatically goes high upon entering measurement mode if the device is in default mode or autosleep mode. If it is in linked or loop mode (but not autosleep), it is linked to the activity interrupt, which behaves as previously mentioned.

After the device automatically enters measurement mode due to activity detection, if autosleep is not on, it must be placed manually back into wake-up mode.

## Inactivity Detection

An inactivity event is detected when acceleration in all enabled axes remains below a specified threshold for a specified time. Enabled axes, threshold, and time are user selected. Each axis has its own inactivity threshold, but the inactivity timer is shared among all three axes. When multiple axes are selected, all enabled axes must stay under the threshold for the required amount of time to trigger inactivity detection.

## Referenced and Absolute Configurations

Inactivity detection is also configurable as referenced or absolute through the INACT\_REF bit in the THRESH\_INACT\_X\_L register. When using absolute inactivity detection, acceleration samples are compared directly to a user set threshold for the user set time to determine the absence of motion. Inactivity is detected when enough consecutive samples are all below the threshold.

When using referenced inactivity detection, inactivity is detected when acceleration samples are within a user specified amount from an internally defined reference for a user defined amount of time.

Abs ( Acceleration -Reference ) &lt; Threshold

Referenced inactivity, like referenced activity, is particularly useful for eliminating the effects of the static acceleration due to gravity, as well as other static offsets. With absolute inactivity, if the inactivity threshold is set lower than 1 g , a device resting motionless may never detect inactivity. With referenced inactivity, the same device under the same configuration detects inactivity. The default setting for the accelerometer is in absolute mode. After it is placed in referenced mode through the appropriate register setting, the reference for inactivity detection is calculated as soon as full bandwidth measurement mode is turned on. To reset the reference, it is necessary to put the device back into absolute mode and then back to referenced mode. The new reference is set as soon as the device enters full bandwidth measurement mode again. If using both inactivity and activity detection in referenced mode, both must be set back to absolute mode before the reference can be reset.

## Inactivity Timer

The ADXL372 inactivity detect functionality includes a timer to allow detection of sustained inactivity. The timer period depends on the ODR selected. At 3200 Hz and below, it is ~26 ms; at 6400 Hz, it is

~13 ms. For inactivity detection to trigger, below threshold inactivity must be sustained for a time equal to the number of inactivity timer periods specified in the inactivity time registers. For example, a setting of 10 in these registers means that below threshold inactivity must be sustained for 260 ms at 3200 Hz ODR. A value of zero in these registers results in single sample, inactivity detection. The maximum allowable inactivity time is ~28.4 minutes at 3200 Hz ODR (or ~14.2 minutes at 6400 Hz ODR).

## Linking Activity and Inactivity Detection

When in measurement mode or wake-up mode, the activity and inactivity detection functions can be used concurrently and processed manually by a host processor, or they can be configured to interact in several other ways, such as those that follow.

## Default Mode

In default mode, activity and inactivity detection are both available simultaneously, and all interrupts must be serviced by a host processor; that is, a processor must read each interrupt before it is cleared and can be used again. Refer to the Interrupts section for information on clearing interrupts.

The flowchart in Figure 40 illustrates default mode operation.

Figure 40. Flowchart Illustrating Activity and Inactivity Operation in Default Mode

<!-- image -->

## Linked Mode

In linked mode, activity and inactivity detection are linked to each other such that only one of the functions is enabled at any given time. As soon as activity is detected, the device is assumed to be moving (or awake) and stops looking for activity; rather, inactivity is expected as the next event. Therefore, only inactivity detection operates.

Similarly, when inactivity is detected, the device is assumed to be stationary (or asleep). Thus, activity is expected as the next event; therefore, only activity detection operates.

## AUTONOMOUS EVENT DETECTION

In linked mode, each interrupt must be serviced by a host processor before the next interrupt is enabled.

The flowchart in Figure 41 illustrates linked mode operation.

Figure 41. Flowchart Illustrating Activity and Inactivity Operation in Linked Mode

<!-- image -->

## Loop Mode

In loop mode, motion detection operates as described in the Linked Mode section, but interrupts do not need to be serviced by a host processor. This configuration simplifies the implementation of commonly used motion detection and enhances power savings by reducing the amount of power used in bus communication.

The flowchart in Figure 42 illustrates loop mode operation.

Figure 42. Flowchart Illustrating Activity and Inactivity Operation in Loop Mode

<!-- image -->

## Autosleep

If autosleep is selected, after the device is placed in wake-up mode (see the Wake-Up Mode section), it automatically sets to loop mode and begins looking for activity. When activity is detected, the device automatically enters measurement mode and immediately begins looking for inactivity. When inactivity is detected, the device automatically re-enters wake-up mode. Note that the device must be manually placed in wake-up mode before autosleep can begin functioning. It does not automatically enter wake-up mode if the device is started up manually in measurement mode.

## Using the AWAKE Bit

The AWAKE bit is a status bit that indicates whether the ADXL372 is awake or asleep. In default mode or autosleep mode, the AWAKE bit is high whenever the device is in measurement mode. In linked or loop mode, the AWAKE bit is high whenever the device experiences an activity condition, and it is low when the device experiences an inactivity condition.

The awake signal can be mapped to the INT1 or the INT2 pin allowing the pin to serve as a status output to connect or disconnect power to downstream circuitry based on the awake status of the accelerometer. Used in conjunction with loop mode, this configuration implements a simple, autonomous motion activated switch.

If the turn-on time of downstream circuitry can be tolerated, this motion switch configuration can save significant system level power by eliminating the standby current consumption of the remainder of the application circuit. This standby current can often exceed the full operating current of the ADXL372.

## MOTION WARNING

In addition to the activity threshold previously described, the ADXL372 offers a secondary threshold. This second threshold, the motion warning threshold, can be set independently of the activity threshold. It does not have any functionality related to autosleep, linked, or loop mode, or the device awake status. The purpose of the motion warning functionality is to issue a notification to the system, via the status bit and/or interrupt, that the observed acceleration has exceeded the second threshold. It is controlled by the THRESH\_ACT2\_x\_x registers, and by the ACTIVITY2 interrupt, which is sent only to the INT2 pin. Each axis has its own motion warning threshold. However, the motion warning activity interrupt does not have an activity timer. It is only used for single sample, activity detection. The motion warning threshold also shares the same referenced vs. absolute configuration as the primary activity detection.

## IMPACT DETECTION FEATURES

Impact detection applications often require high g and high bandwidth acceleration measurements, and the ADXL372 is designed with these applications in mind. Several features are included that target impact detection and aim to simplify the system design.

## WIDE BANDWIDTH

An impact is a transient event that produces an acceleration pulse with frequency content over a wide range. A sufficiently wide bandwidth is needed to capture the impact event because lowering bandwidth has the effect of reducing the magnitude of the recorded signal, resulting in measurement inaccuracy.

The ADXL372 can operate with bandwidths of up to 3200 Hz at extremely low power levels. A steep filter roll-off is also useful for effective suppression of out of band content, and the ADXL372 incorporates a four-pole, low-pass antialiasing filter for this purpose.

## INSTANT ON IMPACT DETECTION

The ADXL372 instant on mode is an ultra low power mode that continuously monitors the environment for impact events that exceed a built in threshold. When an impact is detected, the device switches into full measurement mode and captures the impact profile.

The user must enter instant on mode from full bandwidth measurement mode. No digital data is available in this mode of operation. The user can set the instant on threshold to either low (10 g ± 5 g ) or high (30 g ± 10 g ) by using the INSTANT\_ON\_ THRESH bit in the POWER\_CTL register. When an impact beyond the selected threshold is detected, the ADXL372 switches to full bandwidth measurement mode and begins outputting digital data.

Figure 43. Instant On Mode Using Default Threshold

<!-- image -->

After the accelerometer is in full bandwidth measurement mode, it must be set back into instant on mode manually. It cannot return to instant on mode automatically.

## CAPTURING IMPACT EVENTS

In certain applications, a single (3-axis) acceleration sample at the peak of an impact event contains sufficient information about the event, and the full acceleration history is not required. For these applications, the ADXL372 provides the capability to store only the peak acceleration of each impact event. The ADXL372 peak detection function considers an impact event as an acceleration signal that occurs within an activity interrupt and the next inactivity interrupt. The peak of an impact event is defined as the x, y, and z acceleration sample that has the highest magnitude of all other values within an impact event, as shown in Figure 44. The magnitude of each sample set is calculated as x 2 + y 2 + z 2 .

Figure 44. Capturing Impact Events

<!-- image -->

The peak detection feature stores the peak acceleration in the MAXPEAK\_x\_x registers (Register 0x15 to Register 0x1A). MAX-PEAK\_x\_x registers are cleared when read. If MAXPEAK\_x\_x registers were not read after an impact event and another impact event with a higher peak occurs, the MAXPEAK\_x\_x registers are automatically updated with the higher peak acceleration values. On the contrary, if the next peak magnitude is lower than the current peak stored in the MAXPEAK\_x\_x registers, the MAXPEAK\_x\_x registers are not updated. In the example of Figure 45, if the MAXPEAK\_x\_x registers are read after Impact Event 4, their values correspond to the peak detected during Impact Event 3, which was the highest peak of all four impact events.

Figure 45. Capturing Highest Peak Within Multiple Impact Events

<!-- image -->

Follow these steps to enable peak detection:

1. Configure the FIFO\_CTL register for peak detect mode (b0011100X to Register 0x3A).
2. Set the desired activity threshold and time settings (Register 0x23 to Register 0x29).
3. Set the desired inactivity threshold and time settings (Register 0x2A to Register 0x31).
4. Set the activity mode to linked or loop mode (Register 0x3E).

The FIFO provides additional flexibility for the peak detection feature, allowing its use in applications that require keeping record of the peak of all impact events that occurred within a period of time,

## IMPACT DETECTION FEATURES

with minimal intervention from the host processor. To enable FIFO and peak detection, follow these steps:

1. Configure the FIFO\_CTL register for peak detect mode and stream mode (b0011101X to Register 0x3A).
2. Set the desired activity threshold and time settings (Register 0x23 to Register 0x29).
3. Set the desired inactivity threshold and time settings (Register 0x2A to Register 0x31).
4. Set the activity mode to linked or loop mode (Register 0x3E).

Always read acceleration data from MAXPEAK\_x\_x registers and from the FIFO memory using multibyte transfer to ensure a concurrent and complete set of x, y, and z acceleration data is read.

## Limitations

The user must be aware that the ADXL372 cannot properly capture impact events of higher frequency than the user selected bandwidth. As a rule, the ADXL372 must be able to capture at least two samples from the moment the activity interrupt is triggered to the moment the peak acceleration occurs. If this requirement is not met, significantly lower acceleration values than the actual peak, or even zeros, may be stored in the MAXPEAK\_x\_x registers.

The peak detection function determines the peak of an event by comparing the sum square of each set of x, y, and z acceleration samples within an impact event. The sum square is performed internally using 7-bit multipliers, and because the acceleration data is 12-bit resolution, a maximum error of approximately ±3 g can occur on the determination of the peak.

## FIFO

The ADXL372 includes a deep, 512-sample FIFO buffer.

## BENEFITS OF THE FIFO

The FIFO buffer is an important feature in ultralow power applications in two ways: system level power savings and data recording/event context.

## System Level Power Savings

Appropriate use of the FIFO enables system level power savings by enabling the host processor to sleep for extended periods while the accelerometer autonomously collects data. Alternatively, using the FIFO to collect data can unburden the host while it tends to other tasks.

## Data Recording/Event Context

The FIFO can be used in a triggered mode to record all data leading up to an activity detection event, thereby providing context for the event. In the case of a system that identifies impact events, for example, the accelerometer can keep the entire system off while it stores acceleration data in its FIFO and looks for an activity event. When the impact event occurs, data collected prior to the event is frozen in the FIFO. The accelerometer can now wake the rest of the system and transfer this data to the host processor, thereby providing context for the impact event.

Generally, the more context available, the more intelligent decisions a system can achieve, making a deep FIFO especially useful. For example, the ADXL372 FIFO can store up to 512 1-axis samples at 400 Hz ODR, providing a 1.28 sec window, or 170 3-axis samples at 3200 Hz to provide a 50 ms window, which is a typical duration for impact events.

## USING THE FIFO

The FIFO is a 512-sample memory buffer that can save power, unburden the host processor, and autonomously record data.

FIFO operation is configured via Register 0x39 and Register 0x3A. The 512 FIFO samples can be allotted in several ways, such as the following:

- 170 sample sets of concurrent 3-axis data
- 256 sample sets of concurrent 2-axis data (user selectable)
- 512 sample sets of single-axis data
- 170 sets of impact event peak (x, y, z)

All FIFO modes must be configured while in standby mode. When reading data from multiple axes from the FIFO, to ensure that data is not overwritten and stored out of order, at least one sample set must be left in the FIFO after every read (therefore, a set of 3-axis data must have 169 samples at most).

The FIFO operates in one of the following four modes: FIFO disabled, oldest saved mode (first N), stream mode (last N), and triggered mode.

## FIFO Disabled

When the FIFO is disabled, no new data is stored in it, and any data already in it is cleared.

The FIFO is disabled by setting the FIFO\_MODE bits in the FIFO\_CTL register (Register 0x3A) to 0b00.

## Oldest Saved Mode (First N)

In oldest saved mode, the FIFO accumulates data until it is full and then stops. After reading the data, the FIFO must be disabled and re-enabled to save a new set of data. One possible use case for this mode is to enable it right after entering instant on mode. After a shock is detected, the data immediately stores in the FIFO to be read whenever convenient.

The FIFO is placed into oldest saved mode by setting the FIFO\_MODE bits in the FIFO\_CTL register (Register 0x3A) to 0b11.

## Stream Mode (Last N)

In stream mode, the FIFO always contains the most recent data. The oldest sample is discarded when space is needed to make room for a newer sample.

Stream mode is useful for unburdening a host processor. The processor can tend to other tasks while data is being collected in the FIFO. When the FIFO fills to a certain number of samples (specified by the FIFO\_SAMPLES register along with Bit 0 in the FIFO\_CTL register), it triggers a watermark interrupt (if this interrupt is enabled). At this point, the host processor can read the contents of the entire FIFO and then return to its other tasks as the FIFO fills again.

The FIFO is placed into stream mode by setting the FIFO\_MODE bits in the FIFO\_CTL register (Register 0x3A) to 0b01.

## Triggered Mode

In triggered mode, the FIFO operates as in stream mode until an activity detection event, after which it saves the samples surrounding that event. The operation is similar to a one-time run trigger on an oscilloscope. The number of samples to be saved after the activity event is specified in FIFO\_SAMPLES (Register 0x39[7:0], along with Bit 0 in the FIFO\_CTL register, Register 0x3A). For example if the FIFO\_SAMPLE is set to 12, there are 500 samples before the trigger and 12 after the trigger. The trigger can be reset by clearing the activity interrupt and reading all 512 locations of the FIFO. If this is not complete, future FIFO data reads may contain invalid data. Place the FIFO into triggered mode by setting the FIFO\_MODE bits in the FIFO\_CTL register (Register 0x3A) to 0b10.

## RETRIEVING DATA FROM FIFO

Access FIFO data by reading the FIFO\_DATA register. A multibyte read to this register does not auto-increment the address, and

## FIFO

instead continues to pop data from the FIFO. Data is left justified and formatted as shown in Table 12.

When reading data, the most significant byte (Bits[B15:B8]) is read first, followed by the least significant byte (Bits[B7:B0]).

Table 12. FIFO Buffer Data Format-Bits[B15:B8]

Bits[B15:B4] represent the 12-bit, twos complement acceleration data. Bit 0 serves as a series start indicator: only the first data byte of a series contains a 1 in this bit, and the remaining items contain a 0.

| B15 (MSB)                                     | B14                                           | B13                                           | B12                                           | B11                                           | B10                                           | B9                                            | B8                                            |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
|                                               |                                               |                                               |                                               |                                               | Data                                          |                                               |                                               |
| Table 13. FIFO Buffer Data Format-Bits[B7:B0] | Table 13. FIFO Buffer Data Format-Bits[B7:B0] | Table 13. FIFO Buffer Data Format-Bits[B7:B0] | Table 13. FIFO Buffer Data Format-Bits[B7:B0] | Table 13. FIFO Buffer Data Format-Bits[B7:B0] | Table 13. FIFO Buffer Data Format-Bits[B7:B0] | Table 13. FIFO Buffer Data Format-Bits[B7:B0] | Table 13. FIFO Buffer Data Format-Bits[B7:B0] |
| B7                                            | B6                                            | B5                                            | B4                                            | B3                                            | B2                                            | B1                                            | B0                                            |
| Data                                          | Data                                          | Data                                          | Data                                          | Data                                          | Reserved                                      | Reserved                                      | Series start indicator                        |

## INTERRUPTS

Several of the built in functions of the ADXL372 can trigger interrupts to alert the host processor of certain status conditions. The functionality of these interrupts is described in this section.

## INTERRUPT PINS

Interrupts can be mapped to either (or both) of two designated output pins, INT1 and INT2, by setting the appropriate bits in the INT1\_MAP register and INT2\_MAP register, respectively. All functions can be used simultaneously. If multiple interrupts are mapped to one pin, the OR combination of the interrupts determines the status of the pin.

If no functions are mapped to an interrupt pin, that pin is automatically configured to a high impedance (high-Z) state. The pins are also placed in the high-Z state upon a reset.

When a certain status condition is detected, the pin that condition is mapped to is activated. The configuration of the pin is active high by default so when it is activated, the pin goes high. However, this configuration can be switched to active low by setting the INTx\_LOW bit in the appropriate INTx\_MAP register.

The INTx pins can connect to the interrupt input of a host processor where interrupts are responded to with an interrupt routine. Because multiple functions can be mapped to the same pin, the STATUS register can determine which condition caused the interrupt to trigger.

Interrupts are cleared in several of the following ways:

- Reading the STATUS2 register clears ACTIVITY and INACT interrupts. However, if activity detection is operating in default mode, and the activity or inactivity timers are set to 0, the only way to clear the activity or inactivity bits, respectively, is to set the device into standby mode and restart full bandwidth measurement mode.
- Setting the device into standby mode and back into full bandwidth measurement mode clears the ACTIVITY2 interrupt.
- Reading from the data registers clears the DATA\_RDY interrupt.
- Reading enough data from the FIFO buffer so that interrupt conditions are no longer met, and then reading the STATUS register (Register 0x04) clears the FIFO\_RDY, FIFO\_FULL, and FIFO\_OVR interrupts.

Both interrupt pins are push-pull low impedance pins with an output impedance of about 500 Ω (typical) and digital output specifications as shown in Table 14. Both have bus keepers that hold them to a valid logic state when they are in a high impedance mode.

To prevent interrupts from being falsely triggered during configuration, disable interrupts while their settings, such as thresholds, timings, or other values, are configured.

## Alternate Functions

The INT1 and INT2 pins can be configured for use as input pins instead of for signaling interrupts. INT1 is used as an external clock input when the EXT\_CLK bit in the TIMING register is set. INT2 is used as the trigger input for synchronized sampling when the EXT\_SYNC bit in the TIMING register is set. One or both of these alternate functions can be used concurrently; however, if an interrupt pin is used for its alternate function, it cannot simultaneously be used to signal interrupts.

## TYPES OF INTERRUPTS

## Activity and Inactivity Interrupts

The ACTIVITY bit and INACT bit are set when activity and inactivity are detected, respectively. Detection procedures and criteria are described in the Autonomous Event Detection section.

## Data Ready Interrupt

The DATA\_RDY bit is set when new valid data is available, and it is cleared when no new data is available.

The DATA\_RDY bit does not set while any of the data registers are being read. If DATA\_RDY = 0 prior to a register read and new data becomes available during the register read, DATA\_RDY remains 0 until the read is complete and only then sets to 1.

If DATA\_RDY = 1 prior to a register read, it is cleared at the start of the register read.

If DATA\_RDY = 1 prior to a register read and new data becomes available during the register read, DATA\_RDY is cleared to 0 at the start of the register read and remains 0 throughout the read. When the read is complete, DATA\_RDY is set to 1.

## FIFO Interrupts

## FIFO Watermark

The FIFO\_FULL bit is set when the number of samples stored in the FIFO is equal to or exceeds the number specified in FIFO\_SAMPLES (Register 0x39 together with Bit 0 in the FIFO\_CTL register). The FIFO\_FULL bit is cleared automatically when enough samples are read from the FIFO, such that the number of samples remaining is lower than that specified.

If the number of FIFO samples is set to 0, the watermark interrupt is set. To avoid unexpectedly triggering this interrupt, the default value of the FIFO\_SAMPLES register is 0x80.

## FIFO Ready

The FIFO\_RDY bit is set when there is at least one valid sample available in the FIFO output buffer. This bit is cleared when no valid data is available in the FIFO. In FIFO triggered mode, it is only set after the activity interrupt is detected, and the data surrounding the event is saved in the FIFO.

## INTERRUPTS

## Overrun

The FIFO\_OVR bit is set when the FIFO has overrun or overflowed, such that new data replaces unread data, which may indicate a full FIFO that has not yet been emptied or a clocking error caused by a slow SPI transaction. If the FIFO is configured to oldest saved

Table 14. Interrupt Pin Digital Output

|                                               |                                           | Limit 1       | Limit 1       | Limit 1   |
|-----------------------------------------------|-------------------------------------------|---------------|---------------|-----------|
| Parameter                                     | Test Conditions                           | Min           | Max           | Unit      |
| Digital Output                                |                                           |               |               |           |
| Low Level Output Voltage (V OL )              | I OL = 500 µA                             |               | 0.2 × V DDI/O | V         |
| High Level Output Voltage (V OH )             | I OH = -300 µA                            | 0.8 × V DDI/O |               | V         |
| Low Level Output Current (I OL ) Current (I ) | V OL = V OL, MAX                          | 500           | -300          | µA        |
| High Level Output OH Pin Capacitance          | V OH = V OH, MIN f IN = 1 MHz, V IN = 2.0 |               | 8             | µA pF     |
| Rise/Fall Time                                |                                           |               |               |           |
| Rise Time (t R ) 2                            | C LOAD = 150 pF                           |               | 210           | ns        |
| Fall Time (t F ) 3                            | C LOAD = 150 pF                           |               | 150           | ns        |

1 Limits based on characterization results, not production tested.

2 Rise time is measured as the transition time from V OL, MAX to V OH, MIN of the interrupt pin.

3 Fall time is measured as the transition time from V OH, MIN to V OL, MAX of the interrupt pin.

mode, an overrun event indicates that there is insufficient space available for a new sample.

The FIFO\_OVR bit is cleared when both the contents of the FIFO and the STATUS register are read. It is also cleared when the FIFO is disabled.

## ADDITIONAL FEATURES

## USING AN EXTERNAL CLOCK

When operating at 3200 Hz ODR or lower, the ADXL372 has a built in 307.2 kHz (typical) clock that, by default, serves as the time base for internal operations. At 6400 Hz ODR, this clock speed increases to 614.4 kHz (typical). If desired, an external clock can be provided instead, for either improved clock frequency accuracy or for control of the output data rate. To use an external clock, set the EXT\_CLK bit (Bit 1) in the TIMING register (Register 0x3D) and apply a clock to the INT1 pin.

The external clock can operate at the nominal 307.2 kHz or slower (when using ODR ≤ 3200 Hz), or 614.4 kHz or slower (when using ODR = 6400 Hz) to allow the user to achieve any desired output data rate. Lower external clock rates must be used with caution because it may result in aliasing of high frequency signals that may be present in certain applications.

ODR and bandwidth scale proportionally with the clock. The ADXL372 provides a discrete number of options for ODR. ODRs other than those provided are achieved by selecting an appropriate clock frequency. For example, to achieve a 2560 Hz ODR, use the 3200 Hz setting with a clock frequency that is 80% of nominal, or 245.76 kHz. Bandwidth also scales by the same ratio, so if a 400 Hz bandwidth is selected, the resulting bandwidth is 320 Hz.

## SYNCHRONIZED DATA SAMPLING

For applications that require a precisely timed acceleration measurement, the ADXL372 features an option to synchronize acceleration sampling to an external trigger. The EXT\_SYNC bit in the TIMING register enables this feature. When the EXT\_SYNC bit is set to 1, the INT2 pin automatically reconfigures for use as the sync trigger input.

When external triggering is enabled, it is up to the system designer to ensure that the sampling frequency meets system requirements. Sampling too infrequently causes aliasing. Noise can be lowered by oversampling; however, sampling at too high a frequency may not allow enough time for the accelerometer to process the acceleration data and convert it to valid digital output data.

When the Nyquist criterion is met, signal integrity is maintained. An internal antialiasing filter is available in the ADXL372 and can assist the system designer in maintaining signal integrity. To prevent aliasing, set the filter bandwidth to a frequency no greater than half the sampling rate. For example, when sampling at 1600 Hz, set the filter bandwidth to no higher than 800 Hz.

Because of internal timing requirements, the maximum allowable external trigger frequencies are as follows:

- 1-axis data = 3100 Hz
- 2-axis data = 2700 Hz
- 3-axis data = 2200 Hz

These values are doubled when an ODR rate of 6400 Hz is selected. Additionally, the trigger signal applied to the INT2 pin must meet the following criteria:

- The trigger signal must be active high.
- The pulse width of the trigger signal must be at least 53 µs.
- The minimum sampling frequency is set only by system requirements. Samples need not be polled at any minimum rate; however, if samples are polled at a rate lower than the bandwidth set by the antialiasing filter, aliasing may occur.

The EXT\_SYNC is an active high signal. Due to the asynchronous nature of the internal clock and external sync, there may be a one ODR clock cycle difference between consecutive external sync pulses. The external sync sets the ODR of the system. For example, if sending an external sync at a 2 kHz rate, all 3 axes (if enabled) are sampled in that 2 kHz window.

## SELF TEST

The ADXL372 incorporates a pass or fail self test feature that effectively tests its mechanical and electronic systems simultaneously. When the self test function is invoked, an electrostatic force is applied to the mechanical sensor. This electrostatic force moves the mechanical sensing element in the same manner as acceleration, and the acceleration experienced by the device increases because of this force.

## Self Test Procedure

The self test function is enabled via the ST bit in the SELF\_TEST register, Register 0x40. The recommended procedure for using the self test functionality is as follows:

1. Place the device into measurement mode.
2. Make sure the low-pass activity filter is enabled.
3. Assert self test by setting the ST bit in the SELF\_TEST register (Register 0x40).

Read the self test status bits, ST\_DONE and USER\_ST, after approximately 300 ms to check the pass or fail condition.

## USER REGISTER PROTECTION

The ADXL372 includes user register protection for single event upsets (SEUs). An SEU is a change of state caused by ions or electromagnetic radiation striking a sensitive node in a microelectronic device. The state change is a result of the free charge created by ionization in or close to an important node of a logic element (for example, a memory bit). The SEU itself is not considered permanently damaging to transistor or circuit functionality, but can create erroneous register values. The registers protected from SEU are Register 0x20 to Register 0x3F.

Protection is implemented via a 99-bit error correcting (Hamming type) code and detects both single bit and double bit errors. The check bits are recomputed any time a write to any of the protected registers occurs. At any time, if the stored version of the check

## ADDITIONAL FEATURES

bits is not in agreement with the current check bit calculation, the ERR\_USER\_REGS status bit is set.

The ERR\_USER\_REGS bit in the STATUS register starts high when set on an unconfigured device and clears upon the first register write.

## USER OFFSET TRIMS

The ADXL372 has a 4-bit offset trim for each axis that allows users to add positive or negative offset to the default static acceleration values and correct any deviations from ideal that may result as a consequence of varying the operating parameters of the device. The offset trims have a full-scale range of about ±60 LSB with a trim profile as shown in Figure 46.

Figure 46. User Offset Trim Profile

<!-- image -->

## SERIAL COMMUNICATIONS

## SERIAL INTERFACE

The ADXL372 is designed to communicate in either the SPI or the I 2 C protocol. It autodetects the format being used, requiring no configuration control to select the format.

## SPI Protocol

The timing scheme is as follows: CPHA = CPOL = 0. The ADXL372 supports a SCLK frequency up to 10 MHz. Wire the ADXL372 for SPI communication as shown in Figure 47. There are no internal pull-up or pull-down resistors for any unused pins. Therefore, there is no known state or default state for the pins if left floating or unconnected. For successful communication, follow the logic thresholds and timing parameters in Table 2. The command structure for the read register and write register are shown in Figure 3 and Figure 4, respectively. The read and write register commands support multibyte (burst) read/write access. The waveform diagrams for multibyte read and write commands are shown in Figure 5 and Figure 6, respectively.

Ignore data transmitted from the ADXL372 to the master device during writes to the ADXL372.

Figure 47. 4-Wire SPI Connection Diagram

<!-- image -->

## I 2 C Protocol

The ADXL372 supports point to point I 2 C communication. However, for devices with REVID = 0x02, when sharing an SDA bus, the ADXL372 may prevent communication with other devices on that bus. If at any point, even when the ADXL372 is not being addressed, the 0x3A or 0x3B bytes (when the ADXL372 Device ID is set to 0x1D), or the 0xA6 or 0xA7 bytes (when the ADXL372 Device ID is set to 0x53) are transmitted on the SDA bus, the ADXL372 responds with an acknowledge bit and pulls the SDA line down. For example, this can happen when reading or writing the data bytes to another sensor on the bus. When the ADXL372 pulls the SDA line down, communication with other devices on the bus may be interrupted. To work around this issue, the ADXL372 must be connected to a separate SDA bus, or the SCLK pin must be switched high when communication with the ADXL372 is not desired (it must be normally grounded).

The ADXL372 supports standard (100 kHz), fast (up to 1 MHz), and high speed (up to 3.4 MHz) data transfer modes if the bus parameters given in Table 3 are met. There is no minimum SCL frequency, with the exception that when reading data, the clock must be fast enough to read an entire sample set before new data overwrites it. Single byte or multibyte reads/writes are supported. With the MISO pin low, the I 2 C address for the device is 0x1D, and an alternate I 2 C address of 0x53 can be chosen by pulling the MISO pin high.

There are no internal pull-up or pull-down resistors for any unused pins; therefore, there is no known state or default state for the pins if left floating or unconnected. It is a requirement that SCLK be connected to ground when communicating to the ADXL372 using the I 2 C.

Due to communication speed limitations, the maximum output data rate when using 400 kHz I 2 C is 800 Hz and scales linearly with a change in the I 2 C communication speed. For example, using I 2 C at 100 kHz limits the maximum ODR to 200 Hz. Operation at an output data rate above the recommended maximum can result in undesirable effect on the acceleration data, including missing samples or additional noise.

Figure 48. I 2 C Connection Diagram (ADXL372 Device ID = 0x53)

<!-- image -->

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed V DDI/O by more than 0.3 V. External pull-up resistors, R P , are necessary for proper I 2 C operation. Single byte or multibyte reads/writes are supported, as shown from Figure 8 to Figure 10.

## MULTIBYTE TRANSFERS

Both the SPI and I 2 C protocols support multibyte transfers, also known as burst transfers. A register read or write begins with the address specified in the command and auto-increments for each additional byte in the transfer. Always read acceleration data using multibyte transfers to ensure a concurrent and complete set of x-, y-, and z-acceleration data is read.

The FIFO runs on the serial port clock during FIFO reads and can sustain bursting at the SPI clock rate as long as the SPI clock is 1 MHz or faster.

The address auto-increment function is disabled when the FIFO address is used, which is so that data can be read continuously from the FIFO as a multibyte transaction. In cases where the starting address of a multibyte transaction is less than the FIFO

## SERIAL COMMUNICATIONS

address, the address auto-increments until the FIFO address is reached, and then it stops at the FIFO address.

When writing data to the ADXL372 in I 2 C mode, the no acknowledge (NACK) is never generated. Instead, the acknowledge (ACK) bit is sent after every received byte because it is not known how many bytes are included in the transfer. The master decides how many bytes are sent and ends the transaction with the stop condition.

## INVALID ADDRESSES AND ADDRESS FOLDING

The ADXL372 has a 6-bit address bus, mapping only 104 registers in the possible 256 register address space. The addresses do not fold to repeat the registers at addresses above 0x104. Attempted access to register addresses above 0x104 are mapped to the invalid register at 0x67 and have no functional effect.

Register 0x00 to Register 0x42 are for customer access, as described in Table 15. Register 0x43 to Register 0x67 are reserved for factory use.

## REGISTER MAP

Table 15. Register Map

| Reg                            | Name                       | Bits                                                | Bit 7                                               | Bit 6 Bit                                           | 5 Bit 4                                             | Bit 3                                               | Bit 2                                               | Bit 1                                               | Bit 0                                               | Reset     | RW      |
|--------------------------------|----------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------|---------|
| 0x00 DEVID_AD                  | [7:0]                      | DEVID_AD                                            | DEVID_AD                                            | DEVID_AD                                            | DEVID_AD                                            | DEVID_AD                                            | DEVID_AD                                            | DEVID_AD                                            | DEVID_AD                                            | 0xAD      | R       |
| 0x01 DEVID_MST                 | [7:0]                      | DEVID_MST                                           | DEVID_MST                                           | DEVID_MST                                           | DEVID_MST                                           | DEVID_MST                                           | DEVID_MST                                           | DEVID_MST                                           | DEVID_MST                                           | 0x1D      | R       |
| 0x02 PARTID                    | [7:0]                      | DEVID_PRODUCT                                       | DEVID_PRODUCT                                       | DEVID_PRODUCT                                       | DEVID_PRODUCT                                       | DEVID_PRODUCT                                       | DEVID_PRODUCT                                       | DEVID_PRODUCT                                       | DEVID_PRODUCT                                       | 0xFA      | R       |
| 0x03 REVID                     | [7:0]                      | REVID                                               | REVID                                               | REVID                                               | REVID                                               | REVID                                               | REVID                                               | REVID                                               | REVID                                               | 0x03 1    | R       |
| 0x04 STATUS                    | [7:0]                      | ERR_ USER_ REGS                                     | AWAKE                                               | USER_NVM_ BUSY                                      | RESERVED                                            | FIFO_OVR                                            | FIFO_FULL                                           | FIFO_ RDY                                           | DATA_RDY                                            | 0xA0      | R       |
| 0x05 STATUS2                   | [7:0]                      | RESERVED ACTIVITY2 ACTIVITY INACT RESERVED          | RESERVED ACTIVITY2 ACTIVITY INACT RESERVED          | RESERVED ACTIVITY2 ACTIVITY INACT RESERVED          | RESERVED ACTIVITY2 ACTIVITY INACT RESERVED          | RESERVED ACTIVITY2 ACTIVITY INACT RESERVED          | RESERVED ACTIVITY2 ACTIVITY INACT RESERVED          | RESERVED ACTIVITY2 ACTIVITY INACT RESERVED          | RESERVED ACTIVITY2 ACTIVITY INACT RESERVED          | 0x00      | R       |
| 0x06 FIFO_ENTRIES2             | [7:0]                      | RESERVED FIFO_ENTRIES[9:8]                          | RESERVED FIFO_ENTRIES[9:8]                          | RESERVED FIFO_ENTRIES[9:8]                          | RESERVED FIFO_ENTRIES[9:8]                          | RESERVED FIFO_ENTRIES[9:8]                          | RESERVED FIFO_ENTRIES[9:8]                          | RESERVED FIFO_ENTRIES[9:8]                          | RESERVED FIFO_ENTRIES[9:8]                          | 0x00      | R       |
| 0x07 FIFO_ENTRIES              | [7:0]                      | FIFO_ENTRIES[7:0]                                   | FIFO_ENTRIES[7:0]                                   | FIFO_ENTRIES[7:0]                                   | FIFO_ENTRIES[7:0]                                   | FIFO_ENTRIES[7:0]                                   | FIFO_ENTRIES[7:0]                                   | FIFO_ENTRIES[7:0]                                   | FIFO_ENTRIES[7:0]                                   | 0x00      | R       |
| 0x08 XDATA_H                   | [7:0]                      | XDATA[11:4]                                         | XDATA[11:4]                                         | XDATA[11:4]                                         | XDATA[11:4]                                         | XDATA[11:4]                                         | XDATA[11:4]                                         | XDATA[11:4]                                         | XDATA[11:4]                                         | 0x00      | R       |
| 0x09 XDATA_L                   | [7:0]                      | XDATA[3:0]                                          | XDATA[3:0]                                          | XDATA[3:0]                                          | XDATA[3:0]                                          | XDATA[3:0]                                          | RESERVED                                            | RESERVED                                            | RESERVED                                            | 0x00      | R       |
| 0x0A YDATA_H                   | [7:0]                      | YDATA[11:4]                                         | YDATA[11:4]                                         | YDATA[11:4]                                         | YDATA[11:4]                                         | YDATA[11:4]                                         |                                                     |                                                     |                                                     | 0x00      | R       |
| 0x0B YDATA_L                   | [7:0]                      | YDATA[3:0]                                          | YDATA[3:0]                                          | YDATA[3:0]                                          | YDATA[3:0]                                          | YDATA[3:0]                                          | RESERVED                                            | RESERVED                                            | RESERVED                                            | 0x00      | R       |
| 0x0C ZDATA_H                   | [7:0]                      | ZDATA[11:4]                                         | ZDATA[11:4]                                         | ZDATA[11:4]                                         | ZDATA[11:4]                                         | ZDATA[11:4]                                         |                                                     |                                                     |                                                     | 0x00      | R       |
| 0x0D ZDATA_L                   | [7:0]                      | ZDATA[3:0]                                          | ZDATA[3:0]                                          | ZDATA[3:0]                                          | ZDATA[3:0]                                          | ZDATA[3:0]                                          | RESERVED                                            | RESERVED                                            | RESERVED                                            | 0x00      | R       |
| 0x15 MAXPEAK_X_H               | [7:0]                      | MAXPEAK_X[11:4]                                     | MAXPEAK_X[11:4]                                     | MAXPEAK_X[11:4]                                     | MAXPEAK_X[11:4]                                     | MAXPEAK_X[11:4]                                     |                                                     |                                                     |                                                     | 0x00      | R       |
| 0x16 MAXPEAK_X_L               | [7:0]                      | MAXPEAK_X[3:0]                                      | MAXPEAK_X[3:0]                                      | MAXPEAK_X[3:0]                                      | MAXPEAK_X[3:0]                                      | MAXPEAK_X[3:0]                                      | RESERVED                                            | RESERVED                                            | RESERVED                                            | 0x00      | R       |
| 0x17                           | [7:0]                      | MAXPEAK_Y[11:4]                                     | MAXPEAK_Y[11:4]                                     | MAXPEAK_Y[11:4]                                     | MAXPEAK_Y[11:4]                                     | MAXPEAK_Y[11:4]                                     |                                                     |                                                     |                                                     | 0x00      | R       |
| 0x18 MAXPEAK_Y_L               | MAXPEAK_Y_H [7:0]          | MAXPEAK_Y[3:0]                                      | MAXPEAK_Y[3:0]                                      | MAXPEAK_Y[3:0]                                      | MAXPEAK_Y[3:0]                                      | MAXPEAK_Y[3:0]                                      | RESERVED                                            | RESERVED                                            | RESERVED                                            | 0x00      | R       |
| 0x19 MAXPEAK_Z_H               | [7:0]                      | MAXPEAK_Z[11:4]                                     | MAXPEAK_Z[11:4]                                     | MAXPEAK_Z[11:4]                                     | MAXPEAK_Z[11:4]                                     | MAXPEAK_Z[11:4]                                     |                                                     |                                                     |                                                     | 0x00      | R       |
| 0x1A                           | MAXPEAK_Z_L                | [7:0] MAXPEAK_Z[3:0]                                | [7:0] MAXPEAK_Z[3:0]                                | [7:0] MAXPEAK_Z[3:0]                                | [7:0] MAXPEAK_Z[3:0]                                | [7:0] MAXPEAK_Z[3:0]                                | RESERVED                                            | RESERVED                                            | RESERVED                                            | 0x00      | R       |
| 0x20 OFFSET_X                  | [7:0]                      | RESERVED                                            | RESERVED                                            | RESERVED                                            | RESERVED                                            | RESERVED                                            | OFFSET_X                                            | OFFSET_X                                            | OFFSET_X                                            | 0x00      | R/W     |
| 0x21 OFFSET_Y                  | [7:0]                      | RESERVED                                            | RESERVED                                            | RESERVED                                            | RESERVED                                            | RESERVED                                            | OFFSET_Y                                            | OFFSET_Y                                            | OFFSET_Y                                            | 0x00      | R/W     |
| 0x22 OFFSET_Z                  |                            |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |           |         |
|                                | [7:0]                      | RESERVED                                            | RESERVED                                            | RESERVED                                            | RESERVED                                            | RESERVED                                            | OFFSET_Z                                            | OFFSET_Z                                            | OFFSET_Z                                            | 0x00      | R/W     |
| 0x23                           | THRESH_ACT_X_H [7:0]       | THRESH_ACT_X[10:3]                                  | THRESH_ACT_X[10:3]                                  | THRESH_ACT_X[10:3]                                  | THRESH_ACT_X[10:3]                                  | THRESH_ACT_X[10:3]                                  |                                                     |                                                     |                                                     | 0x00      | R/W     |
| 0x24                           | THRESH_ACT_X_L [7:0]       | THRESH_ACT_X[2:0] RESERVED                          | THRESH_ACT_X[2:0] RESERVED                          | THRESH_ACT_X[2:0] RESERVED                          | THRESH_ACT_X[2:0] RESERVED                          | THRESH_ACT_X[2:0] RESERVED                          |                                                     | ACT_REF                                             | ACT_X_EN                                            | 0x00      | R/W     |
| 0x25 THRESH_ACT_Y_H            | [7:0]                      | THRESH_ACT_Y[10:3]                                  | THRESH_ACT_Y[10:3]                                  | THRESH_ACT_Y[10:3]                                  | THRESH_ACT_Y[10:3]                                  | THRESH_ACT_Y[10:3]                                  |                                                     |                                                     |                                                     | 0x00      | R/W     |
| 0x26 THRESH_ACT_Y_L            | [7:0]                      | THRESH_ACT_Y[2:0] RESERVED                          | THRESH_ACT_Y[2:0] RESERVED                          | THRESH_ACT_Y[2:0] RESERVED                          | THRESH_ACT_Y[2:0] RESERVED                          | THRESH_ACT_Y[2:0] RESERVED                          | ACT_Y_EN                                            | ACT_Y_EN                                            | ACT_Y_EN                                            | 0x00      | R/W     |
| 0x27 THRESH_ACT_Z_H            | [7:0]                      | THRESH_ACT_Z[10:3]                                  | THRESH_ACT_Z[10:3]                                  | THRESH_ACT_Z[10:3]                                  | THRESH_ACT_Z[10:3]                                  | THRESH_ACT_Z[10:3]                                  |                                                     |                                                     |                                                     | 0x00      | R/W     |
| 0x28 THRESH_ACT_Z_L            | [7:0]                      | THRESH_ACT_Z[2:0] RESERVED                          | THRESH_ACT_Z[2:0] RESERVED                          | THRESH_ACT_Z[2:0] RESERVED                          | THRESH_ACT_Z[2:0] RESERVED                          | THRESH_ACT_Z[2:0] RESERVED                          | ACT_Z_EN                                            | ACT_Z_EN                                            | ACT_Z_EN                                            | 0x00      | R/W     |
| 0x29 TIME_ACT                  | [7:0]                      | ACT_COUNT                                           | ACT_COUNT                                           | ACT_COUNT                                           | ACT_COUNT                                           | ACT_COUNT                                           |                                                     |                                                     |                                                     | 0x00      | R/W     |
| 0x2A THRESH_INACT_X _H 0x2B _L | [7:0] THRESH_INACT_X [7:0] | THRESH_INACT_X[2:0] RESERVED                        | THRESH_INACT_X[2:0] RESERVED                        | THRESH_INACT_X[2:0] RESERVED                        | THRESH_INACT_X[2:0] RESERVED                        | THRESH_INACT_X[2:0] RESERVED                        |                                                     | INACT_R EF                                          | INACT_X_E N                                         | 0x00 0x00 | R/W R/W |
| 0x2C THRESH_INACT_Y _H         | [7:0]                      | THRESH_INACT_Y[10:3]                                | THRESH_INACT_Y[10:3]                                | THRESH_INACT_Y[10:3]                                | THRESH_INACT_Y[10:3]                                | THRESH_INACT_Y[10:3]                                |                                                     |                                                     |                                                     | 0x00      | R/W     |
| 0x2D                           | [7:0]                      |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |           | R/W     |
| THRESH_INACT_Y _L              |                            | THRESH_INACT_Y[2:0] RESERVED N THRESH_INACT_Z[10:3] | THRESH_INACT_Y[2:0] RESERVED N THRESH_INACT_Z[10:3] | THRESH_INACT_Y[2:0] RESERVED N THRESH_INACT_Z[10:3] | THRESH_INACT_Y[2:0] RESERVED N THRESH_INACT_Z[10:3] | THRESH_INACT_Y[2:0] RESERVED N THRESH_INACT_Z[10:3] | THRESH_INACT_Y[2:0] RESERVED N THRESH_INACT_Z[10:3] | THRESH_INACT_Y[2:0] RESERVED N THRESH_INACT_Z[10:3] | THRESH_INACT_Y[2:0] RESERVED N THRESH_INACT_Z[10:3] | 0x00      |         |
|                                |                            | INACT_Y_E                                           | INACT_Y_E                                           | INACT_Y_E                                           | INACT_Y_E                                           | INACT_Y_E                                           | INACT_Y_E                                           | INACT_Y_E                                           | INACT_Y_E                                           |           |         |
| 0x2E _H                        | THRESH_INACT_Z [7:0]       |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     | 0x00      | R/W     |
| 0x2F _L                        | THRESH_INACT_Z [7:0]       | THRESH_INACT_Z[2:0] RESERVED INACT_Z_E N            | THRESH_INACT_Z[2:0] RESERVED INACT_Z_E N            | THRESH_INACT_Z[2:0] RESERVED INACT_Z_E N            | THRESH_INACT_Z[2:0] RESERVED INACT_Z_E N            | THRESH_INACT_Z[2:0] RESERVED INACT_Z_E N            | THRESH_INACT_Z[2:0] RESERVED INACT_Z_E N            | THRESH_INACT_Z[2:0] RESERVED INACT_Z_E N            | THRESH_INACT_Z[2:0] RESERVED INACT_Z_E N            | 0x00      | R/W     |
| 0x30 TIME_INACT_H              | [7:0]                      | INACT_COUNT[15:8]                                   | INACT_COUNT[15:8]                                   | INACT_COUNT[15:8]                                   | INACT_COUNT[15:8]                                   | INACT_COUNT[15:8]                                   | INACT_COUNT[15:8]                                   | INACT_COUNT[15:8]                                   | INACT_COUNT[15:8]                                   | 0x00      | R/W     |
| 0x31 TIME_INACT_L              | [7:0]                      | THRESH_ACT2_X[10:3]                                 | THRESH_ACT2_X[10:3]                                 | THRESH_ACT2_X[10:3]                                 | THRESH_ACT2_X[10:3]                                 | THRESH_ACT2_X[10:3]                                 | THRESH_ACT2_X[10:3]                                 | THRESH_ACT2_X[10:3]                                 | THRESH_ACT2_X[10:3]                                 | 0x00      | R/W     |
| 0x32 H                         | THRESH_ACT2_X_ [7:0]       |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     | 0x00      | R/W     |

## REGISTER MAP

## Table 15. Register Map

| Reg               | Name                 | Bits                      | Bit 7                     | Bit 6                     | Bit 5                     | Bit 4                     | Bit 3                     | Bit 2                     | Bit 1                     | Bit 0                     | Reset   | RW   |
|-------------------|----------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------|------|
| 0x33 L            | THRESH_ACT2_X_       | [7:0] THRESH_ACT2_X[2:0]  | [7:0] THRESH_ACT2_X[2:0]  | [7:0] THRESH_ACT2_X[2:0]  | [7:0] THRESH_ACT2_X[2:0]  | RESERVED                  | RESERVED                  | RESERVED                  | ACT2_RE F                 | ACT2_X_E N                | 0x00    | R/W  |
| 0x34              | THRESH_ACT2_Y_       | [7:0] THRESH_ACT2_Y[10:3] | [7:0] THRESH_ACT2_Y[10:3] | [7:0] THRESH_ACT2_Y[10:3] | [7:0] THRESH_ACT2_Y[10:3] | [7:0] THRESH_ACT2_Y[10:3] | [7:0] THRESH_ACT2_Y[10:3] | [7:0] THRESH_ACT2_Y[10:3] | [7:0] THRESH_ACT2_Y[10:3] | [7:0] THRESH_ACT2_Y[10:3] | 0x00    | R/W  |
| 0x35 L            | THRESH_ACT2_Y_ [7:0] | THRESH_ACT2_Y[2:0]        | THRESH_ACT2_Y[2:0]        | THRESH_ACT2_Y[2:0]        | THRESH_ACT2_Y[2:0]        | RESERVED                  | RESERVED                  | RESERVED                  | RESERVED                  | ACT2_Y_E N                | 0x00    | R/W  |
| 0x36              | THRESH_ACT2_Z_ [7:0] | THRESH_ACT2_Z[10:3]       | THRESH_ACT2_Z[10:3]       | THRESH_ACT2_Z[10:3]       | THRESH_ACT2_Z[10:3]       | THRESH_ACT2_Z[10:3]       | THRESH_ACT2_Z[10:3]       | THRESH_ACT2_Z[10:3]       | THRESH_ACT2_Z[10:3]       | THRESH_ACT2_Z[10:3]       | 0x00    | R/W  |
| 0x37 L            | THRESH_ACT2_Z_ [7:0] | THRESH_ACT2_Z[2:0]        | THRESH_ACT2_Z[2:0]        | THRESH_ACT2_Z[2:0]        | THRESH_ACT2_Z[2:0]        | RESERVED                  | RESERVED                  | RESERVED                  | RESERVED                  | ACT2_Z_E N                | 0x00    | R/W  |
| 0x38 HPF          | [7:0]                | RESERVED                  | RESERVED                  | RESERVED                  | RESERVED                  | RESERVED                  | RESERVED                  | RESERVED                  | HPF_CORNER                | HPF_CORNER                | 0x00    | R/W  |
| 0x39 FIFO_SAMPLES | [7:0]                | FIFO_SAMPLES[7:0]         | FIFO_SAMPLES[7:0]         | FIFO_SAMPLES[7:0]         | FIFO_SAMPLES[7:0]         | FIFO_SAMPLES[7:0]         | FIFO_SAMPLES[7:0]         | FIFO_SAMPLES[7:0]         | FIFO_SAMPLES[7:0]         | FIFO_SAMPLES[7:0]         | 0x80    | R/W  |
| 0x3A FIFO_CTL     | [7:0]                | RESERVED                  | RESERVED                  | RESERVED                  | FIFO_FORMAT               | FIFO_FORMAT               | FIFO_FORMAT               | FIFO_MODE                 | FIFO_MODE                 | FIFO_SAM PLES[8]          | 0x00    | R/W  |
| 0x3B INT1_MAP     | [7:0]                | INT1_ LOW                 | AWAKE_ INT1               | ACT_INT1                  | INACT_INT1                | FIFO_ OVR_ INT1           | FIFO_ FULL_ INT1          |                           | FIFO_ RDY_ INT1           | DATA_ RDY_ INT1           | 0x00    | R/W  |
| 0x3C INT2_MAP     | [7:0]                | INT2_LOW                  | AWAKE_ INT2               | ACT2_INT2                 | INACT_INT2                | FIFO_ OVR_ INT2           | FIFO_ FULL_ INT2          |                           | FIFO_ RDY_ INT2           | DATA_ RDY_ INT2           | 0x00    | R/W  |
| 0x3D              | TIMING               | [7:0]                     |                           | ODR                       |                           | WAKEUP_RATE               | WAKEUP_RATE               | WAKEUP_RATE               | EXT_CLK                   | EXT_SYNC                  | 0x00    | R/W  |
| 0x3E              | MEASURE              | [7:0] USER_ OR_ DISABLE   | AUTOSLE EP                | LINKLOOP                  | LINKLOOP                  | LOW_ NOISE                | LOW_ NOISE                | BANDWIDTH                 | BANDWIDTH                 | BANDWIDTH                 | 0x00    | R/W  |
| 0x3F              | POWER_CTL            | [7:0] I2C_ HSM_ EN        | RESERVE D                 | INSTANT_ ON_ THRESH       | FILTER_ SETTLE            | LPF_                      | DISABLE                   | HPF_ DISABLE              | MODE                      | MODE                      | 0x00    | R/W  |
| 0x40              | SELF_TEST            | [7:0]                     |                           |                           | RESERVED                  |                           |                           | USER_ST                   | ST_DONE                   | ST                        | 0x00    | R/W  |
| 0x41              | RESET                | [7:0] RESET               | [7:0] RESET               | [7:0] RESET               | [7:0] RESET               | [7:0] RESET               | [7:0] RESET               | [7:0] RESET               | [7:0] RESET               | [7:0] RESET               | 0x00    | W    |
| 0x42              | FIFO_DATA            | [7:0] FIFO_DATA           | [7:0] FIFO_DATA           | [7:0] FIFO_DATA           | [7:0] FIFO_DATA           | [7:0] FIFO_DATA           | [7:0] FIFO_DATA           | [7:0] FIFO_DATA           | [7:0] FIFO_DATA           | [7:0] FIFO_DATA           | 0x00    | R    |

## REGISTER DETAILS

## ANALOG DEVICES ID REGISTER

Address: 0x00, Reset: 0xAD, Name: DEVID\_AD

This register contains the Analog Devices, Inc., ID, 0xAD.

Figure 49.

<!-- image -->

Table 16. Bit Descriptions for DEVID\_AD

| Bits   | Bit Name   | Settings   | Description              | Reset   | Access   |
|--------|------------|------------|--------------------------|---------|----------|
| [7:0]  | DEVID_AD   |            | Analog Devices ID, 0xAD. | 0xAD    | R        |

## ANALOG DEVICES MEMS ID REGISTER

Address: 0x01, Reset: 0x1D, Name: DEVID\_MST

This register contains the Analog Devices MEMS ID, 0x1D.

Figure 50.

<!-- image -->

## Table 17. Bit Descriptions for DEVID\_MST

| Bits   | Bit Name   | Settings   | Description                   | Reset   | Access   |
|--------|------------|------------|-------------------------------|---------|----------|
| [7:0]  | DEVID_MST  |            | Analog Devices MEMS ID, 0x1D. | 0x1D    | R        |

## DEVICE ID REGISTER

Address: 0x02, Reset: 0xFA, Name: PARTID

This register contains the device ID, 0xFA (372 octal).

Figure 51.

<!-- image -->

Table 18. Bit Descriptions for PARTID

| Bits   | Bit Name      | Settings   | Description                  | Reset   | Access   |
|--------|---------------|------------|------------------------------|---------|----------|
| [7:0]  | DEVID_PRODUCT |            | Device ID, 0xFA (372 Octal). | 0xFA    | R        |

## PRODUCT REVISION ID REGISTER

Address: 0x03, Reset: 0x02, Name: REVID

This register contains the mask revision ID, beginning with 0x00 and incrementing for each subsequent revision.

## REGISTER DETAILS

## Table 19. Bit Descriptions for REVID

<!-- image -->

Figure 52.

| Bits   | Bit Name   | Settings   | Description    | Reset   | Access   |
|--------|------------|------------|----------------|---------|----------|
| [7:0]  | REVID      |            | Mask revision. | 0x2     | R        |

## STATUS REGISTER

## Address: 0x04, Reset: 0xA0, Name: STATUS

This register includes the following bits that describe various conditions of the ADXL372.

Figure 53.

<!-- image -->

## Table 20. Bit Descriptions for STATUS

|   Bits | Bit Name      | Settings   | Description                                                                                                                                                                                             | Reset   | Access   |
|--------|---------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | ERR_USER_REGS |            | SEU Event. An SEU event has been detected in a user register.                                                                                                                                           | 0x1     | R        |
|      6 | AWAKE         |            | Awake Status. Activity has been detected and the device is moving.                                                                                                                                      | 0x0     | R        |
|      5 | USER_NVM_BUSY |            | 1 = nonvolatile memory (NVM) is busy programming fuses.                                                                                                                                                 | 0x1     | R        |
|      4 | RESERVED      |            | Reserved.                                                                                                                                                                                               | 0x0     | R        |
|      3 | FIFO_OVR      |            | FIFO Overrun. FIFO has overflowed, and data has been lost.                                                                                                                                              | 0x0     | R        |
|      2 | FIFO_FULL     |            | FIFO Watermark. The FIFO watermark level, specified in FIFO_SAMPLES, has been reached.                                                                                                                  | 0x0     | R        |
|      1 | FIFO_RDY      |            | FIFO Ready. At least one valid sample is available in the FIFO.                                                                                                                                         | 0x0     | R        |
|      0 | DATA_RDY      |            | Data ready status includes data written to user data registers or FIFO. Status is high after the full data set has completed. A complete x, y, and z measurement has been made and results can be read. | 0x0     | R        |

## ACTIVITY STATUS REGISTER

Address: 0x05, Reset: 0x00, Name: STATUS2

## REGISTER DETAILS

## Table 21. Bit Descriptions for STATUS2

| Bits   | Bit Name   | Settings   | Description                               | Reset   | Access   |
|--------|------------|------------|-------------------------------------------|---------|----------|
| 7      | RESERVED   |            | Reserved.                                 | 0x0     | R        |
| 6      | ACTIVITY2  |            | Status of ACTIVITY2.                      | 0x0     | R        |
| 5      | ACTIVITY   |            | Activity. Activity has been detected.     | 0x0     | R        |
| 4      | INACT      |            | Inactivity. Inactivity has been detected. | 0x0     | R        |
| [3:0]  | RESERVED   |            | Reserved.                                 | 0x0     | R        |

## FIFO ENTRIES REGISTER, MSB

## Address: 0x06, Reset: 0x00, Name: FIFO\_ENTRIES2

The FIFO\_ENTRIES2 and FIFO\_ENTRIES registers indicate the number of valid data samples present in the FIFO buffer. The number ranges from 0 to 512 or 0x00 to 0x200. FIFO\_ENTRIES contains the least significant byte, and FIFO\_ENTRIES2 contains the two most significant bits.

Figure 55.

<!-- image -->

Table 22. Bit Descriptions for FIFO\_ENTRIES2

| Bits   | Bit Name          | Settings   | Description                                | Reset   | Access   |
|--------|-------------------|------------|--------------------------------------------|---------|----------|
| [7:2]  | RESERVED          |            | Reserved.                                  | 0x0     | R        |
| [1:0]  | FIFO_ENTRIES[9:8] |            | Number of data samples stored in the FIFO. | 0x0     | R        |

## FIFO ENTRIES REGISTER, LSB

Address: 0x07, Reset: 0x00, Name: FIFO\_ENTRIES

Figure 56.

<!-- image -->

Table 23. Bit Descriptions for FIFO\_ENTRIES

| Bits   | Bit Name          | Settings   | Description                                | Reset   | Access   |
|--------|-------------------|------------|--------------------------------------------|---------|----------|
| [7:0]  | FIFO_ENTRIES[7:0] |            | Number of data samples stored in the FIFO. | 0x0     | R        |

Figure 54.

<!-- image -->

## REGISTER DETAILS

## X-AXIS DATA REGISTER, MSB

Address: 0x08, Reset: 0x00, Name: XDATA\_H

These two registers contain the x-axis acceleration data. Data is left justified and formatted as twos complement. XDATA\_H contains the eight most significant bits (MSBs), and XDATA\_L contains the four least significant bits (LSBs) of the 12-bit value.

Figure 57.

<!-- image -->

## Table 24. Bit Descriptions for XDATA\_H

| Bits   | Bit Name    | Settings   | Description   | Reset   | Access   |
|--------|-------------|------------|---------------|---------|----------|
| [7:0]  | XDATA[11:4] |            | X-axis data.  | 0x0     | R        |

## X-AXIS DATA REGISTER, LSB

Address: 0x09, Reset: 0x00, Name: XDATA\_L

<!-- image -->

Figure 58.

| Bits   | Bit Name   | Settings   | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
| [7:4]  | XDATA[3:0] |            | X-axis data.  | 0x0     | R        |
| [3:0]  | RESERVED   |            | Reserved.     | 0x0     | R        |

## Table 25. Bit descriptions for XDATA\_L

## Y-AXIS DATA REGISTER, MSB

## Address: 0x0A, Reset: 0x00, Name: YDATA\_H

The YDATA\_H and YDATA\_L registers contain the y-axis, LSB acceleration data. Data is left justified and formatted as twos complement. YDATA\_H contains the eight most significant bits (MSBs), and YDATA\_L contains the four least significant bits (LSBs) of the 12-bit value.

YDATA\_L latches on a read of YDATA\_H to ensure data integrity.

Figure 59.

<!-- image -->

## Table 26. Bit Descriptions for YDATA\_H

| Bits   | Bit Name    | Settings   | Description   | Reset   | Access   |
|--------|-------------|------------|---------------|---------|----------|
| [7:0]  | YDATA[11:4] |            | Y-axis data.  | 0x0     | R        |

## Y-AXIS DATA REGISTER, LSB

Address: 0x0B, Reset: 0x00, Name: YDATA\_L

## REGISTER DETAILS

## Table 27. Bit Descriptions for YDATA\_L

| Bits   | Bit Name   | Settings   | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
| [7:4]  | YDATA[3:0] |            | Y-axis data.  | 0x0     | R        |
| [3:0]  | RESERVED   |            | Reserved.     | 0x0     | R        |

## Z-AXIS DATA REGISTER, MSB

Address: 0x0C, Reset: 0x00, Name: ZDATA\_H

These two registers contain the z-axis acceleration data. Data is left justified and formatted as twos complement. ZDATA\_H contains the eight most significant bits (MSBs), and ZDATA\_L contains the four least significant bits (LSBs) of the 12-bit value.

<!-- image -->

Figure 61.

| Bits   | Bit Name    | Settings   | Description   | Reset   | Access   |
|--------|-------------|------------|---------------|---------|----------|
| [7:0]  | ZDATA[11:4] |            | Z-axis data.  | 0x0     | R        |

## Table 28. Bit Descriptions for ZDATA\_H

## Z-AXIS DATA REGISTER, LSB

Address: 0x0D, Reset: 0x00, Name: ZDATA\_L

<!-- image -->

Figure 62.

| Bits   | Bit Name   | Settings   | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
| [7:4]  | ZDATA[3:0] |            | Z-axis data.  | 0x0     | R        |
| [3:0]  | RESERVED   |            | Reserved.     | 0x0     | R        |

## Table 29. Bit Descriptions for ZDATA\_L

## HIGHEST PEAK DATA REGISTERS

The highest peak data registers contain the acceleration data corresponding to the highest magnitude sample recorded since the last read of this register. Data is left justified and formatted as twos complement.

## X-AXIS HIGHEST PEAK DATA REGISTER, MSB

Address: 0x15, Reset: 0x00, Name: MAXPEAK\_X\_H

Figure 60.

<!-- image -->

## REGISTER DETAILS

Table 30. Bit Descriptions for MAXPEAK\_X\_H

| Bits   | Bit Name        | Settings   | Description                                                                 | Reset   | Access   |
|--------|-----------------|------------|-----------------------------------------------------------------------------|---------|----------|
| [7:0]  | MAXPEAK_X[11:4] |            | Stores the highest magnitude observed since the last read of this register. | 0x0     | R        |
|        |                 |            | The 8 MSBs of the x-axis value.                                             |         |          |

## X-AXIS HIGHEST PEAK DATA REGISTER, LSB

Address: 0x16, Reset: 0x00, Name: MAXPEAK\_X\_L

Figure 64.

<!-- image -->

Table 31. Bit Descriptions for MAXPEAK\_X\_L

| Bits   | Bit Name       | Settings   | Description                                                                 | Reset   | Access   |
|--------|----------------|------------|-----------------------------------------------------------------------------|---------|----------|
| [7:4]  | MAXPEAK_X[3:0] |            | Stores the highest magnitude observed since the last read of this register. | 0x0     | R        |
|        |                |            | The 4 LSBs of the x-axis value.                                             |         |          |
| [3:0]  | RESERVED       |            | Reserved.                                                                   | 0x0     | R        |

## Y-AXIS HIGHEST PEAK DATA REGISTER, MSB

Address: 0x17, Reset: 0x00, Name: MAXPEAK\_Y\_H

Table 32. Bit Descriptions for MAXPEAK\_Y\_H

| Bits   | Bit Name        | Settings   | Description                                                                 | Reset   | Access   |
|--------|-----------------|------------|-----------------------------------------------------------------------------|---------|----------|
| [7:0]  | MAXPEAK_Y[11:4] |            | Stores the highest magnitude observed since the last read of this register. | 0x0     | R        |
|        |                 |            | The 8 MSBs of the y-axis value.                                             |         |          |

## Y-AXIS HIGHEST PEAK DATA REGISTER, LSB

Address: 0x18, Reset: 0x00, Name: MAXPEAK\_Y\_L

<!-- image -->

Figure 66.

Figure 63.

<!-- image -->

Figure 65.

<!-- image -->

## REGISTER DETAILS

Table 33. Bit Descriptions for MAXPEAK\_Y\_L

| Bits   | Bit Name       | Settings   | Description                                                                 | Reset   | Access   |
|--------|----------------|------------|-----------------------------------------------------------------------------|---------|----------|
| [7:4]  | MAXPEAK_Y[3:0] |            | Stores the highest magnitude observed since the last read of this register. | 0x0     | R        |
| [3:0]  | RESERVED       |            | Reserved.                                                                   | 0x0     | R        |

## Z-AXIS HIGHEST PEAK DATA REGISTER, MSB

Address: 0x19, Reset: 0x00, Name: MAXPEAK\_Z\_H

Table 34. Bit Descriptions for MAXPEAK\_Z\_H

| Bits   | Bit Name        | Settings   | Description                                                                 | Reset   | Access   |
|--------|-----------------|------------|-----------------------------------------------------------------------------|---------|----------|
| [7:0]  | MAXPEAK_Z[11:4] |            | Stores the highest magnitude observed since the last read of this register. | 0x0     | R        |

## Z-AXIS HIGHEST PEAK DATA REGISTER, LSB

Address: 0x1A, Reset: 0x00, Name: MAXPEAK\_Z\_L

Figure 68.

<!-- image -->

Table 35. Bit Descriptions for MAXPEAK\_Z\_L

| Bits   | Bit Name       | Settings   | Description                                                                 | Reset   | Access   |
|--------|----------------|------------|-----------------------------------------------------------------------------|---------|----------|
| [7:4]  | MAXPEAK_Z[3:0] |            | Stores the highest magnitude observed since the last read of this register. | 0x0     | R        |
|        |                |            | The 4 LSBs of the z-axis value.                                             |         |          |
| [3:0]  | RESERVED       |            | Reserved.                                                                   | 0x0     | R        |

## OFFSET TRIM REGISTERS

Offset trim registers are each four bits and offer user set, offset adjustments in twos complement format. The scale factor of these registers is shown in Figure 46.

## X-AXIS OFFSET TRIM REGISTER, LSB

Address: 0x20, Reset: 0x00, Name: OFFSET\_X

Figure 69.

<!-- image -->

Figure 67.

<!-- image -->

## REGISTER DETAILS

## Table 36. Bit Descriptions for OFFSET\_X

| Bits   | Bit Name   | Settings   | Description                  | Reset   | Access   |
|--------|------------|------------|------------------------------|---------|----------|
| [7:4]  | RESERVED   |            | Reserved.                    | 0x0     | R        |
| [3:0]  | OFFSET_X   |            | Offset added to x-axis data. | 0x0     | R/W      |

## Y-AXIS OFFSET TRIM REGISTER, LSB

Address: 0x21, Reset: 0x00, Name: OFFSET\_Y

Figure 70.

<!-- image -->

Table 37. Bit Descriptions for OFFSET\_Y

| Bits   | Bit Name   | Settings   | Description                  | Reset   | Access   |
|--------|------------|------------|------------------------------|---------|----------|
| [7:4]  | RESERVED   |            | Reserved.                    | 0x0     | R        |
| [3:0]  | OFFSET_Y   |            | Offset added to y-axis data. | 0x0     | R/W      |

## Z-AXIS OFFSET TRIM REGISTER, LSB

Address: 0x22, Reset: 0x00, Name: OFFSET\_Z

Figure 71.

<!-- image -->

## Table 38. Bit Descriptions for OFFSET\_Z

| Bits   | Bit Name   | Settings   | Description                  | Reset   | Access   |
|--------|------------|------------|------------------------------|---------|----------|
| [7:4]  | RESERVED   |            | Reserved.                    | 0x0     | R        |
| [3:0]  | OFFSET_Z   |            | Offset added to z-axis data. | 0x0     | R/W      |

## X-AXIS ACTIVITY THRESHOLD REGISTER, MSB

## Address: 0x23, Reset: 0x00, Name: THRESH\_ACT\_X\_H

This 11-bit unsigned value sets the threshold for activity detection. This value is set in codes and the scale factor is 100 m g /code. To detect activity, the absolute value of the 12-bit acceleration data is compared with the 11-bit (unsigned) activity threshold value. The THRESH\_ACT\_x\_L register contains the least significant bits and the THRESH\_ACT\_x\_H register contains the most significant byte of the activity threshold value.

Figure 72.

<!-- image -->

## Table 39. Bit Descriptions for THRESH\_ACT\_X\_H

| Bits   | Bit Name           | Settings   | Description                                                       | Reset   | Access   |
|--------|--------------------|------------|-------------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_ACT_X[10:3] |            | Threshold for activity detection. The 8 MSBs of x-axis threshold. | 0x0     | R/W      |

## REGISTER DETAILS

## X-AXIS OF ACTIVITY THRESHOLD REGISTER, LSB

Address: 0x24, Reset: 0x00, Name: THRESH\_ACT\_X\_L

Figure 73.

<!-- image -->

Table 40. Bit Descriptions for THRESH\_ACT\_X\_L

| Bits   | Bit Name          | Settings   | Description                                                       | Reset   | Access   |
|--------|-------------------|------------|-------------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_ACT_X[2:0] |            | Threshold for activity detection. The 3 LSBs of x-axis threshold. | 0x0     | R/W      |
| [4:2]  | RESERVED          |            | Reserved.                                                         | 0x0     | R        |
| 1      | ACT_REF           |            | Selects referenced or absolute activity processing.               | 0x0     | R/W      |
|        |                   | 1          | Referenced activity processing.                                   |         |          |
|        |                   | 0          | Absolute activity processing.                                     |         |          |
| 0      | ACT_X_EN          |            | Enable activity detection using X-axis data.                      | 0x0     | R/W      |
|        |                   | 0          | X-axis ignored.                                                   |         |          |
|        |                   | 1          | X-axis used.                                                      |         |          |

## Y-AXIS ACTIVITY THRESHOLD REGISTER, MSB

Address: 0x25, Reset: 0x00, Name: THRESH\_ACT\_Y\_H

Figure 74.

<!-- image -->

## Table 41. Bit Descriptions for THRESH\_ACT\_Y\_H

| Bits   | Bit Name           | Settings   | Description                                                       | Reset   | Access   |
|--------|--------------------|------------|-------------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_ACT_Y[10:3] |            | Threshold for activity detection. The 8 MSBs of y-axis threshold. | 0x0     | R/W      |

## Y-AXIS OF ACTIVITY THRESHOLD REGISTER, LSB

Address: 0x26, Reset: 0x00, Name: THRESH\_ACT\_Y\_L

## REGISTER DETAILS

Figure 75.

<!-- image -->

Table 42. Bit Descriptions for THRESH\_ACT\_Y\_L

| Bits   | Bit Name          | Settings   | Description                                                       | Reset   | Access   |
|--------|-------------------|------------|-------------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_ACT_Y[2:0] |            | Threshold for activity detection. The 3 LSBs of y-axis threshold. | 0x0     | R/W      |
| [4:1]  | RESERVED          |            | Reserved.                                                         | 0x0     | R        |
| 0      | ACT_Y_EN          |            | Enable activity detection using y-axis data.                      | 0x0     | R/W      |
|        |                   | 0          | Y-axis ignored.                                                   |         |          |
|        |                   | 1          | Y-axis used.                                                      |         |          |

## Z-AXIS ACTIVITY THRESHOLD REGISTER, MSB

Address: 0x27, Reset: 0x00, Name: THRESH\_ACT\_Z\_H

Figure 76.

<!-- image -->

Table 43. Bit Descriptions for THRESH\_ACT\_Z\_H

| Bits   | Bit Name           | Settings   | Description                                                       | Reset   | Access   |
|--------|--------------------|------------|-------------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_ACT_Z[10:3] |            | Threshold for activity detection. The 8 MSBs of z-axis threshold. | 0x0     | R/W      |

## Z-AXIS OF ACTIVITY THRESHOLD REGISTER, LSB

Address: 0x28, Reset: 0x00, Name: THRESH\_ACT\_Z\_L

Figure 77.

<!-- image -->

Table 44. Bit Descriptions for THRESH\_ACT\_Z\_L

| Bits   | Bit Name          | Settings   | Description                                                       | Reset   | Access   |
|--------|-------------------|------------|-------------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_ACT_Z[2:0] |            | Threshold for activity detection. The 3 LSBs of z-axis threshold. | 0x0     | R/W      |
| [4:1]  | RESERVED          |            | Reserved.                                                         | 0x0     | R        |
| 0      | ACT_Z_EN          |            | Enable activity detection using Z-axis data.                      | 0x0     | R/W      |
|        |                   | 0          | Z-axis ignored.                                                   |         |          |
|        |                   | 1          | Z-axis used.                                                      |         |          |

## REGISTER DETAILS

## ACTIVITY TIME REGISTER

## Address: 0x29, Reset: 0x00, Name: TIME\_ACT

The activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used, only sustained motion can trigger activity detection. The time (in milliseconds) is given by the following equation:

Time = TIME\_ACT × 3.3 ms per code

## where:

3.3 ms per code is the scale factor of the TIME\_ACT register for ODR = 6400 Hz. It is 6.6 ms per code for ODR = 3200 Hz and below. See the Activity Timer section for more information.

Figure 78.

<!-- image -->

TIME\_ACT is the value set in this register.

Table 45. Bit Descriptions for TIME\_ACT

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                     | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ACT_COUNT  |            | Number of multiples of 3.3 ms activity timer for which above threshold acceleration is required to detect activity. It is 3.3 ms per code for 6400 Hz ODR, and it is 6.6 ms per code for 3200 Hz ODR and below. | 0x0     | R/W      |

## X-AXIS INACTIVITY THRESHOLD REGISTER, MSB

## Address: 0x2A, Reset: 0x00, Name: THRESH\_INACT\_X\_H

This 11-bit unsigned value sets the threshold for inactivity detection. This value is set in codes and the scale factor is 100 m g /code. To detect inactivity, the absolute value of the 12-bit acceleration data is compared with the 11-bit (unsigned) inactivity threshold value. The THRESH\_INACT\_x\_L register contains the least significant bits and the THRESH\_INACT\_x\_H register contains the most significant byte of the inactivity threshold value.

<!-- image -->

Table 46. Bit Descriptions for THRESH\_INACT\_X\_H

| Bits   | Bit Name             | Settings   | Description                                               | Reset   | Access   |
|--------|----------------------|------------|-----------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_INACT_X[10:3] |            | Threshold for inactivity detection. The 8 MSBs of x-axis. | 0x0     | R/W      |

## X-AXIS OF INACTIVITY THRESHOLD REGISTER, LSB

Address: 0x2B, Reset: 0x00, Name: THRESH\_INACT\_X\_L

## REGISTER DETAILS

Figure 80.

<!-- image -->

Table 47. Bit Descriptions for THRESH\_INACT\_X\_L

| Bits   | Bit Name            | Settings   | Description                                                   | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_INACT_X[2:0] |            | Threshold for inactivity detection. The 3 LSBs of the x-axis. | 0x0     | R/W      |
| [4:2]  | RESERVED            |            | Reserved.                                                     | 0x0     | R        |
| 1      | INACT_REF           |            | Selects referenced or absolute inactivity processing.         | 0x0     | R/W      |
|        |                     | 1          | Referenced inactivity processing.                             |         |          |
|        |                     | 0          | Absolute inactivity processing.                               |         |          |
| 0      | INACT_X_EN          |            | X-axis masked from participating in inactivity detection.     | 0x0     | R/W      |
|        |                     | 0          | X-axis ignored.                                               |         |          |
|        |                     | 1          | X-axis used.                                                  |         |          |

## Y-AXIS INACTIVITY THRESHOLD REGISTER, MSB

Address: 0x2C, Reset: 0x00, Name: THRESH\_INACT\_Y\_H

Figure 81.

<!-- image -->

Table 48. Bit Descriptions for THRESH\_INACT\_Y\_H

| Bits   | Bit Name             | Settings   | Description                                                   | Reset   | Access   |
|--------|----------------------|------------|---------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_INACT_Y[10:3] |            | Threshold for inactivity detection. The 8 MSBs of the y-axis. | 0x0     | R/W      |

## Y-AXIS OF INACTIVITY THRESHOLD REGISTER, LSB

Address: 0x2D, Reset: 0x00, Name: THRESH\_INACT\_Y\_L

Figure 82.

<!-- image -->

## REGISTER DETAILS

## Table 49. Bit Descriptions for THRESH\_INACT\_Y\_L

| Bits   | Bit Name            | Settings   | Description                                                   | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_INACT_Y[2:0] |            | Threshold for inactivity detection. The 3 LSBs of the y-axis. | 0x0     | R/W      |
| [4:1]  | RESERVED            |            | Reserved.                                                     | 0x0     | R        |
| 0      | INACT_Y_EN          |            | Y-axis masked from participating in inactivity detection.     | 0x0     | R/W      |
|        |                     | 0          | Y-axis ignored.                                               |         |          |
|        |                     | 1          | Y-axis used.                                                  |         |          |

## Z-AXIS INACTIVITY THRESHOLD REGISTER, MSB

Address: 0x2E, Reset: 0x00, Name: THRESH\_INACT\_Z\_H

Figure 83.

<!-- image -->

## Table 50. Bit Descriptions for THRESH\_INACT\_Z\_H

| Bits   | Bit Name             | Settings   | Description                                                   | Reset   | Access   |
|--------|----------------------|------------|---------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_INACT_Z[10:3] |            | Threshold for inactivity detection. The 8 MSBs of the z-axis. | 0x0     | R/W      |

## Z-AXIS OF INACTIVITY THRESHOLD REGISTER, LSB

Address: 0x2F, Reset: 0x00, Name: THRESH\_INACT\_Z\_L

Figure 84.

<!-- image -->

Table 51. Bit Descriptions for THRESH\_INACT\_Z\_L

| Bits   | Bit Name            | Settings   | Description                                                   | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_INACT_Z[2:0] |            | Threshold for inactivity detection. The 3 LSBs of the z-axis. | 0x0     | R/W      |
| [4:1]  | RESERVED            |            | Reserved.                                                     | 0x0     | R        |
| 0      | INACT_Z_EN          |            | Z-axis masked from participating in inactivity detection.     | 0x0     | R/W      |
|        |                     | 0          | Z-axis ignored.                                               |         |          |
|        |                     | 1          | Z-axis used.                                                  |         |          |

## INACTIVITY TIME REGISTERS

The 16-bit value in these registers sets the time that all enabled axes must be lower than the inactivity threshold for an inactivity event to be detected. The TIME\_INACT\_L register holds the eight LSBs, and the TIME\_INACT\_H register holds the eight MSBs of the 16-bit TIME\_INACT value.

Calculate the time as follows:

Time = TIME\_INACT × 26 ms per code where:

## REGISTER DETAILS

TIME\_INACT is the 16-bit value set by the TIME\_INACT\_L register (eight LSBs) and the TIME\_INACT\_H register (eight MSBs). 26 ms per code is the scale factor of the TIME\_INACT\_L and TIME\_INACT\_H registers for 3200 Hz and below. It is 13 ms per code of ODR = 6400 Hz. See the Inactivity Timer section for more information.

## INACTIVITY TIMER REGISTER, MSB

Address: 0x30, Reset: 0x00, Name: TIME\_INACT\_H

Table 52. Bit Descriptions for TIME\_INACT\_H

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                      | Reset   | Access   |
|--------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | INACT_COUNT[15:8] |            | Number of multiples of 26 ms inactivity timer for which below threshold acceleration is required to detect inactivity. It is 26 ms per code for 3200 Hz ODR and below, and it is 13 ms per code for 6400 Hz ODR. | 0x0     | R/W      |

## INACTIVITY TIMER REGISTER, LSB

Address: 0x31, Reset: 0x00, Name: TIME\_INACT\_L

Table 53. Bit Descriptions for TIME\_INACT\_L

| Bits   | Bit Name         | Settings   | Description                                                                                                            | Reset   | Access   |
|--------|------------------|------------|------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | INACT_COUNT[7:0] |            | Number of multiples of 26 ms inactivity timer for which below threshold acceleration is required to detect inactivity. | 0x0     | R/W      |

## X-AXIS MOTION WARNING THRESHOLD REGISTER, MSB

Address: 0x32, Reset: 0x00, Name: THRESH\_ACT2\_X\_H

This 11-bit unsigned value sets the threshold for motion detection. This value is set in codes and the scale factor is 100 m g /code. To detect motion, the absolute value of the 12-bit acceleration data is compared with the 11-bit (unsigned) ACTIVITY2 threshold value. The THRESH\_ACT2\_x\_L register contains the least significant bits and the THRESH\_ACT2\_x\_H register contains the most significant byte of the ACTIVITY2 threshold value.

Figure 87.

<!-- image -->

Table 54. Bit Descriptions for THRESH\_ACT2\_X\_H

| Bits   | Bit Name            | Settings   | Description 1                                                                   | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_ACT2_X[10:3] |            | OTN Threshold. The 8 MSBs of the x-axis threshold for motion warning interrupt. | 0x0     | R/W      |

<!-- image -->

Figure 85.

<!-- image -->

Figure 86.

## REGISTER DETAILS

1 OTN stands for other threshold notification.

## X-AXIS OF MOTION WARNING NOTIFICATION REGISTER, LSB

Address: 0x33, Reset: 0x00, Name: THRESH\_ACT2\_X\_L

Figure 88.

<!-- image -->

Table 55. Bit Descriptions for THRESH\_ACT2\_X\_L

| Bits   | Bit Name           | Settings   | Description 1                                                                                        | Reset   | Access   |
|--------|--------------------|------------|------------------------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_ACT2_X[2:0] |            | OTN Threshold. The 3 LSBs of the x-axis threshold for motion warning interrupt.                      | 0x0     | R/W      |
| [4:2]  | RESERVED           |            | Reserved.                                                                                            | 0x0     | R        |
| 1      | ACT2_REF           |            | Selects referenced or absolute motion warning notification processing.                               | 0x0     | R/W      |
|        |                    | 1          | Referenced activity processing.                                                                      |         |          |
|        |                    | 0          | Absolute activity processing.                                                                        |         |          |
| 0      | ACT2_X_EN          |            | X-axis ACT2 enable. When set to 1, the x-axis participates in motion warning notification detection. | 0x0     | R/W      |
|        |                    | 0          | X-axis ignored.                                                                                      |         |          |
|        |                    | 1          | X-axis used.                                                                                         |         |          |

## Y-AXIS MOTION WARNING NOTIFICATION THRESHOLD REGISTER, MSB

Address: 0x34, Reset: 0x00, Name: THRESH\_ACT2\_Y\_H

Figure 89.

<!-- image -->

Table 56. Bit Descriptions for THRESH\_ACT2\_Y\_H

| Bits   | Bit Name            | Settings   | Description 1                                                                   | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_ACT2_Y[10:3] |            | OTN Threshold. The 8 MSBs of the y-axis threshold for motion warning interrupt. | 0x0     | R/W      |

## Y-AXIS OF MOTION WARNING NOTIFICATION REGISTER, LSB

Address: 0x35, Reset: 0x00, Name: THRESH\_ACT2\_Y\_L

## REGISTER DETAILS

Figure 90.

<!-- image -->

Table 57. Bit Descriptions for THRESH\_ACT2\_Y\_L

| Bits   | Bit Name           | Settings   | Description 1                                                                                 | Reset   | Access   |
|--------|--------------------|------------|-----------------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_ACT2_Y[2:0] |            | OTN Threshold. The 3 LSBs of the y-axis threshold for motion warning interrupt.               | 0x0     | R/W      |
| [4:1]  | RESERVED           |            | Reserved.                                                                                     | 0x0     | R        |
| 0      | ACT2_Y_EN          |            | Y-axis ACT2 enable. When 1, the y-axis participates in motion warning notification detection. | 0x0     | R/W      |
|        |                    | 0          | Y-axis ignored.                                                                               |         |          |
|        |                    | 1          | Y-axis used.                                                                                  |         |          |

## Z-AXIS MOTION WARNING NOTIFICATION THRESHOLD REGISTER, MSB

Address: 0x36, Reset: 0x00, Name: THRESH\_ACT2\_Z\_H

Figure 91.

<!-- image -->

Table 58. Bit Descriptions for THRESH\_ACT2\_Z\_H

| Bits   | Bit Name            | Settings   | Description 1                                                                   | Reset   | Access   |
|--------|---------------------|------------|---------------------------------------------------------------------------------|---------|----------|
| [7:0]  | THRESH_ACT2_Z[10:3] |            | OTN Threshold. The 8 MSBs of the z-axis threshold for motion warning interrupt. | 0x0     | R/W      |

## Z-AXIS MOTION WARNING NOTIFICATION REGISTER, LSB

Address: 0x37, Reset: 0x00, Name: THRESH\_ACT2\_Z\_L

Figure 92.

<!-- image -->

Table 59. Bit Descriptions for THRESH\_ACT2\_Z\_L

| Bits   | Bit Name           | Settings   | Description 1                                                                                 | Reset   | Access   |
|--------|--------------------|------------|-----------------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | THRESH_ACT2_Z[2:0] |            | OTN Threshold. The 3 LSBs of the z-axis threshold for motion warning interrupt.               | 0x0     | R/W      |
| [4:1]  | RESERVED           |            | Reserved.                                                                                     | 0x0     | R        |
| 0      | ACT2_Z_EN          |            | Z-axis ACT2 enable. When 1, the z-axis participates in motion warning notification detection. | 0x0     | R/W      |
|        |                    | 0          | Z-axis ignored.                                                                               |         |          |

## REGISTER DETAILS

Table 59. Bit Descriptions for THRESH\_ACT2\_Z\_L

| Bits   | Bit Name   | Settings Description   | Reset   | Access   |
|--------|------------|------------------------|---------|----------|
|        |            | 1 Z-axis used.         |         |          |

## HIGH-PASS FILTER SETTINGS REGISTER

Address: 0x38, Reset: 0x00, Name: HPF

Use this register to specify parameters for the internal high-pass filter.

<!-- image -->

Figure 93.

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                      | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:2]  | RESERVED   |            | Reserved.                                                                                                                                                        | 0x0     | R        |
| [1:0]  | HPF_CORNER |            | High-Pass Filter Corner Frequency Selection.                                                                                                                     | 0x0     | R/W      |
|        |            | 00         | High Pass Filter Corner 0. At ODR 6400 Hz = 30.48 Hz, at ODR 3200 Hz = 15.24 Hz, at ODR 1600 Hz = 7.61 Hz, at ODR 800 Hz = 3.81 Hz, and at ODR 400 Hz = 1.90 Hz. |         |          |
|        |            | 01         | High Pass Filter Corner 1. At ODR 6400 Hz = 15.58 Hz, at ODR 3200 Hz = 7.79 Hz, at ODR 1600 Hz = 3.89 Hz, at ODR 800 Hz = 1.94 Hz, and at ODR 400 Hz = 0.97 Hz.  |         |          |
|        |            | 10         | High Pass Filter Corner 2. At ODR 6400 Hz = 7.88 Hz, at ODR 3200 Hz = 3.94 Hz, at ODR 1600 Hz = 1.97 Hz, at ODR 800 Hz = 0.98 Hz, and at ODR 400 Hz = 0.49 Hz.   |         |          |
|        |            | 11         | High Pass Filter Corner 3. At ODR 6400 Hz = 3.96 Hz, at ODR 3200 Hz = 1.98 Hz, at ODR 1600 Hz = 0.99 Hz, at ODR 800 Hz = 0.49 Hz, and at ODR 400 Hz = 0.24 Hz.   |         |          |

## Table 60. Bit Descriptions for HPF

## FIFO SAMPLES REGISTER

## Address: 0x39, Reset: 0x80, Name: FIFO\_SAMPLES

Use the FIFO\_SAMPLES value to specify the number of samples to store in the FIFO. The 8 least significant bits (LSBs) of the FIFO\_SAMPLES value are stored in this register. The most significant bit (MSB) of the FIFO\_SAMPLES value is Bit 0 of the FIFO\_CTL register.

The default value of this register is 0x80 to avoid triggering the FIFO watermark interrupt (see the FIFO Watermark section for more information). In trigger FIFO mode, FIFO\_SAMPLES program the number of samples to be saved after the trigger is detected.

Figure 94.

<!-- image -->

Table 61. Bit Descriptions for FIFO\_SAMPLES

| Bits   | Bit Name          | Settings   | Description                                                                                                                  | Reset   | Access   |
|--------|-------------------|------------|------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_SAMPLES[7:0] |            | FIFO Samples. Watermark number of FIFO samples that triggers a FIFO_FULL condition when reached. Values range from 0 to 512. | 0x80    | R/W      |

## REGISTER DETAILS

## FIFO CONTROL REGISTER

Address: 0x3A, Reset: 0x00, Name: FIFO\_CTL

Use this register to specify the operating parameters for the FIFO.

Figure 95.

<!-- image -->

## Table 62. Bit Descriptions for FIFO\_CTL

| Bits   | Bit Name        | Settings   | Description                                                                                                                  | Reset   | Access   |
|--------|-----------------|------------|------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RESERVED        |            | Reserved.                                                                                                                    | 0x0     | R        |
| [5:3]  | FIFO_FORMAT     |            | FIFO Format. Specifies which data is stored in the FIFO buffer.                                                              | 0x0     | R/W      |
|        |                 | 111        | FIFO stores peak acceleration (x, y, and z) of every over threshold event.                                                   |         |          |
|        |                 | 001        | FIFO stores x-axis acceleration data only.                                                                                   |         |          |
|        |                 | 010        | FIFO stores y-axis acceleration data only.                                                                                   |         |          |
|        |                 | 011        | FIFO stores x- and y-axis acceleration data.                                                                                 |         |          |
|        |                 | 100        | FIFO stores z-axis acceleration data only.                                                                                   |         |          |
|        |                 | 101        | FIFO stores x- and z-axis acceleration data.                                                                                 |         |          |
|        |                 | 110        | FIFO stores y- and z-axis acceleration data.                                                                                 |         |          |
|        |                 | 000        | FIFO stores x-, y- and z-axis acceleration data.                                                                             |         |          |
| [2:1]  | FIFO_MODE       |            | FIFO Mode. Specifies FIFO operating mode.                                                                                    | 0x0     | R/W      |
|        |                 | 0          | FIFO is bypassed.                                                                                                            |         |          |
|        |                 | 1          | FIFO operates in stream mode.                                                                                                |         |          |
|        |                 | 10         | FIFO operates in trigger mode.                                                                                               |         |          |
|        |                 | 11         | FIFO operates in oldest saved mode.                                                                                          |         |          |
| 0      | FIFO_SAMPLES[8] |            | FIFO Samples. Watermark number of FIFO samples that triggers a FIFO_FULL condition when reached. Values range from 0 to 512. | 0x0     | R/W      |

## INTERRUPT PIN FUNCTION MAP REGISTERS

## Address: 0x3B, Reset: 0x00, Name: INT1\_MAP

The INT1\_MAP and INT2\_MAP registers configure the INT1 and INT2 interrupt pins, respectively. Bits[6:0] select which function(s) generate an interrupt on the pin. If its corresponding bit is set to 1, the function generates an interrupt on the INTx pin. Bit B7 configures whether the pin operates in active high (B7 low) or active low (B7 high) mode. Any number of functions can be selected simultaneously for each pin. If multiple functions are selected, their conditions are OR'ed together to determine the INTx pin state. The status of each function can be determined by reading the status register. If no interrupts are mapped to an INTx pin, the pin remains in a high impedance state.

## REGISTER DETAILS

Figure 96.

<!-- image -->

Table 63. Bit Descriptions for INT1\_MAP

|   Bits | Bit Name       | Settings   | Description                               | Reset   | Access   |
|--------|----------------|------------|-------------------------------------------|---------|----------|
|      7 | INT1_LOW       |            | Configures INT1 for active low operation. | 0x0     | R/W      |
|      6 | AWAKE_INT1     |            | Map awake interrupt onto INT1.            | 0x0     | R/W      |
|      5 | ACT_INT1       |            | Map activity interrupt onto INT1.         | 0x0     | R/W      |
|      4 | INACT_INT1     |            | Map inactivity interrupt onto INT1.       | 0x0     | R/W      |
|      3 | FIFO_OVR_INT1  |            | Map FIFO_OVERRUN interrupt onto INT1.     | 0x0     | R/W      |
|      2 | FIFO_FULL_INT1 |            | Map FIFO_FULL interrupt onto INT1.        | 0x0     | R/W      |
|      1 | FIFO_RDY_INT1  |            | Map FIFO_READY interrupt onto INT1.       | 0x0     | R/W      |
|      0 | DATA_RDY_INT1  |            | Map data ready interrupt onto INT1.       | 0x0     | R/W      |

## INT2 FUNCTION MAP REGISTER

Address: 0x3C, Reset: 0x00, Name: INT2\_MAP

Figure 97.

<!-- image -->

Table 64. Bit Descriptions for INT2\_MAP

|   Bits | Bit Name       | Settings   | Description                                          | Reset   | Access   |
|--------|----------------|------------|------------------------------------------------------|---------|----------|
|      7 | INT2_LOW       |            | Configures INT2 for active low operation.            | 0x0     | R/W      |
|      6 | AWAKE_INT2     |            | Map awake interrupt onto INT2.                       | 0x0     | R/W      |
|      5 | ACT2_INT2      |            | Map Activity 2 (motion warning) interrupt onto INT2. | 0x0     | R/W      |
|      4 | INACT_INT2     |            | Map inactivity interrupt onto INT2.                  | 0x0     | R/W      |
|      3 | FIFO_OVR_INT2  |            | Map FIFO_OVERRUN interrupt onto INT2.                | 0x0     | R/W      |
|      2 | FIFO_FULL_INT2 |            | Map FIFO_FULL interrupt onto INT2.                   | 0x0     | R/W      |
|      1 | FIFO_RDY_INT2  |            | Map FIFO_READY interrupt onto INT2.                  | 0x0     | R/W      |
|      0 | DATA_RDY_INT2  |            | Map data ready interrupt onto INT2.                  | 0x0     | R/W      |

## REGISTER DETAILS

## EXTERNAL TIMING CONTROL REGISTER

## Address: 0x3D, Reset: 0x00, Name: TIMING

Use this register to control the ADXL372 timing parameters: ODR and external timing triggers.

Figure 98.

<!-- image -->

Table 65. Bit Descriptions for TIMING

| Bits   | Bit Name    | Description                  | Reset   | Access   |
|--------|-------------|------------------------------|---------|----------|
| [7:5]  | ODR         | Output data rate.            | 0x0     | R/W      |
|        |             | 000 400 Hz ODR.              |         |          |
|        |             | 001 800 Hz ODR.              |         |          |
|        |             | 010 1600 Hz ODR.             |         |          |
|        |             | 011 3200 Hz ODR.             |         |          |
|        |             | 100 6400 Hz ODR.             |         |          |
| [4:2]  | WAKEUP_RATE | Timer Rate for Wake-Up Mode. | 0x0     | R/W      |
|        |             | 0 52 ms.                     |         |          |
|        |             | 1 104 ms.                    |         |          |
|        |             | 10 208 ms.                   |         |          |
|        |             | 11 512 ms.                   |         |          |
|        |             | 100 2048 ms.                 |         |          |
|        |             | 101 4096 ms.                 |         |          |
|        |             | 110 8192 ms.                 |         |          |
|        |             | 111 24576 ms.                |         |          |
| 1      | EXT_CLK     | Enable external clock.       | 0x0     | R/W      |
| 0      | EXT_SYNC    | Enable external trigger.     | 0x0     | R/W      |

## MEASUREMENT CONTROL REGISTER

Address: 0x3E, Reset: 0x00, Name: MEASURE

Use this register to control several measurement settings.

## REGISTER DETAILS

Figure 99.

<!-- image -->

Table 66. Bit Descriptions for MEASURE

| Bits   | Bit Name        | Settings   | Description                                                                                                                                                                                                                                                                                                                               | Reset   | Access   |
|--------|-----------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | USER_OR_DISABLE |            | User overange disable.                                                                                                                                                                                                                                                                                                                    | 0x0     | R/W      |
| 6      | AUTOSLEEP       |            | Autosleep. When set to 1, autosleep is enabled, and the device enters wake-up mode automatically upon detection of inactivity. Activity and inactivity detection must be in linked mode or loop mode (the LINKLOOP bits in the MEASURE register) to enable autosleep; otherwise, the bit is ignored.                                      | 0x0     | R/W      |
| [5:4]  | LINKLOOP        |            | Link/Loop Activity Processing. These bits select how activity and inactivity processing are linked. Default Mode. Activity and inactivity detection, when enabled, operate simultaneously and their interrupts (if mapped) must be acknowledged by the host processor by reading the status register. Autosleep is disabled in this mode. | 0x0     | R/W      |
| 3      | LOW_NOISE       |            | Low Noise. Selects low noise operation. Normal operation. Device operates at the normal noise level and ultralow current consumption                                                                                                                                                                                                      | 0x0     | R/W      |
| [2:0]  | BANDWIDTH       |            | Low noise operation. Device operates at ~1/3 the normal noise level. Bandwidth. Select the desired output signal bandwidth. A 4-pole low-pass filter at the selected frequency limits the signal bandwidth. 200 Hz Bandwidth. 400 Hz Bandwidth. 800 Hz Bandwidth. 1600 Hz Bandwidth. 3200 Hz Bandwidth.                                   | 0x0     | R/W      |

## POWER CONTROL REGISTER

Address: 0x3F, Reset: 0x00, Name: POWER\_CTL

## REGISTER DETAILS

Figure 100.

<!-- image -->

Table 67. Bit Descriptions for POWER\_CTL

| Bits   | Bit Name          | Settings   | Description                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|-------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | I2C_HSM_EN        |            | I 2 C speed select. 1 = high speed mode.                                                                                                                                                                                                              | 0x0     | R/W      |
| 6      | RESERVED          |            | Reserved.                                                                                                                                                                                                                                             | 0x0     | R        |
| 5      | INSTANT_ON_THRESH | 0 1        | User selectable instant on threshold select. 0 = low threshold, 1 = high threshold. Selects the low instant on threshold.                                                                                                                             | 0x0     | R/W      |
| 4      | FILTER_SETTLE     | 0 1        | User selectable filter settling period. 0 = 370 ms settle period, and 1 = 16 ms settle period. Filter settling set to 370 ms. Filter settling set to 16 ms. Ideal for when the high-pass filter and the low-pass activity detect filter are disabled. | 0x0     | R/W      |
| 3      | LPF_DISABLE       |            | Disables the digital low-pass activity detect filter.                                                                                                                                                                                                 | 0x0     | R/W      |
| 2      | HPF_DISABLE       |            | Disables the digital high-pass filter.                                                                                                                                                                                                                | 0x0     | R/W      |
| [1:0]  | MODE              |            | Mode of operation.                                                                                                                                                                                                                                    | 0x0     | R/W      |
|        |                   | 11         | Full bandwidth measurement mode.                                                                                                                                                                                                                      |         |          |
|        |                   | 10 01      | Instant on mode. Wake up mode.                                                                                                                                                                                                                        |         |          |
|        |                   | 00         | Standby.                                                                                                                                                                                                                                              |         |          |

## SELF TEST REGISTER

## Address: 0x40, Reset: 0x00, Name: SELF\_TEST

Refer to the Self Test section for information on the operation of the self test feature, and see the Self Test Procedure section for guidelines on how to use this functionality.

Figure 101.

<!-- image -->

## REGISTER DETAILS

## Table 68. Bit Descriptions for SELF\_TEST

| Bits   | Bit Name   | Settings   | Description                                                                           | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | RESERVED   |            | Reserved.                                                                             | 0x0     | R        |
| 2      | USER_ST    |            | User self test pass if = 1.                                                           | 0x0     | R        |
| 1      | ST_DONE    |            | Self test finished.                                                                   | 0x0     | R        |
| 0      | ST         |            | Self test. Writing a 1 to this bit initiates self test. Writing a 0 clears self test. | 0x0     | R/W1     |

## RESET (CLEARS) REGISTER, PART IN STANDBY MODE

Address: 0x41, Reset: 0x00, Name: RESET

## Table 69. Bit Descriptions for RESET

<!-- image -->

Figure 102.

| Bits   | Bit Name   | Settings   | Description                          | Reset   | Access   |
|--------|------------|------------|--------------------------------------|---------|----------|
| [7:0]  | Reset      |            | Writing code 0x52 resets the device. | 0x0     | W        |

## FIFO ACCESS REGISTER

## Address: 0x42, Reset: 0x00, Name: FIFO\_DATA

Read this register to access data stored in the FIFO.

Figure 103.

<!-- image -->

## Table 70. Bit Descriptions for FIFO\_DATA

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Reset   | Access   |
|--------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_DATA  |            | FIFO Data. A read to this address pops a 2-byte word of axis data from the FIFO. FIFO data is formatted to 2 bytes (16 bits), most significant byte first. Two subsequent reads complete the transaction of this data onto the interface. Continued reading of this field continues to pop the FIFO every third read. Multibyte reads to this address do not increment the address pointer. If this address is read due to an auto-increment from the previous address, it does not pop the FIFO. It returns zeros and increment on to the next address. | 0x0     | R        |

## APPLICATIONS INFORMATION

## APPLICATION EXAMPLES

This section includes a few application circuits, highlighting useful features of the ADXL372.

## Power Supply Decoupling

Figure 104 shows the recommended bypass capacitors for use with the ADXL372.

Figure 104. Recommended Bypass Capacitors

<!-- image -->

A 0.1 µF ceramic capacitor (C S ) at V S and a 0.1 µF ceramic capacitor (C IO ) at V DDI/O placed as close as possible to the ADXL372 supply pins are recommended to adequately decouple the accelerometer from noise on the power supply. It is recommended that V S and V DDI/O be separate supplies to minimize digital clocking noise on the V S supply. If this is not possible, additional filtering of the supplies may be necessary.

If additional decoupling is necessary, a resistor or ferrite bead, no larger than 100 Ω, in series with V S , is recommended. Additionally, increasing the bypass capacitance on V S to a 1 µF tantalum capacitor in parallel with a 0.1 µF ceramic capacitor may also improve noise.

Ensure that the connection from the ADXL372 ground to the power supply ground has low impedance because noise transmitted through ground has an effect similar to noise transmitted through VS .

## Power Supply Requirements

The ADXL372 is designed to operate using supply voltage rails ranging from 1.6 V to 3.6 V. The operating voltage range (V S ) ranges from 1.6 V to 3.3 V to account for inaccuracies and transients of up to ±10% on the supply voltage.

Always start up the ADXL372 from 0 V. When the device is in operation, any time power is removed from the ADXL372, or falls below the operating voltage range, discharge the supplies (VS, VDD I/O, and any bypass capacitors) completely before power is reapplied. To enable supply discharge, it is recommended to power the device from a micro-controller GPIO, connect a shutdown discharge switch to the supply , or use a voltage regulator with a shutdown discharge feature, such as the ADP160.

When power cycling, if the ADXL372 cannot be discharged fully to 0 V, care must be taken regarding the following specifications:

- VRESET
- Hold time
- Rise time

## VRESET

During start-up or power cycling of the ADXL372, any time power is removed from the ADXL372 or falls to less than 1.6 V, the V S and VDD I/O supply must be discharged to a reset voltage (V RESET ) ≤ 100 mV before powering back up. The V RESET specification is a mandatory requirement.

## Hold Time

VS  and V DD I/O supplies must be held below V RESET for at least 200 ms before powering back up.

## Rise Time

For the worst case scenario (V RESET = 100 mV and hold time = 200 ms), the V S and V DD I/O supply rise time must be linear and within 250 μs to reach 1.6 V (see Figure 105).

Figure 105. Power Cycling Requirements

<!-- image -->

Note that fully discharging the power supply to the ground level allows a longer rise time, ≤600 µs, from 0 V to 1.6 V for a 200 ms hold time.

## Using External Timing Triggers

Figure 106 shows an application diagram for using the INT1 pin as the input for an external clock. In this mode, the external clock determines all accelerometer timing, including the output data rate and bandwidth.

Set the EXT\_CLK bit in the TIMING register to enable this feature.

## APPLICATIONS INFORMATION

Figure 106. INT1 Pin as Input for External Clock

<!-- image -->

Figure 107 is an application diagram for using the INT2 pin as a trigger for synchronized sampling. Acceleration samples are produced every time this trigger is activated. Set the EXT\_SYNC bit in the TIMING register to enable this feature.

Figure 107. Using the INT2 Pin to Trigger Synchronized Sampling

<!-- image -->

## OPERATION AT VOLTAGES OTHER THAN 2.5 V

The ADXL372 is tested and specified at a supply voltage of V S = 2.5 V; however, it can be powered with a V S as high as 3.5 V or as low as 1.6 V. Some performance parameters change as the supply voltage changes, including the supply current, noise, offset, and sensitivity.

## OPERATION AT TEMPERATURES OTHER THAN AMBIENT

The ADXL372 is tested and specified at an ambient temperature; however, it is rated for temperatures between -40°C and +105°C.

Figure 109. Axes of Acceleration Sensitivity (Corresponding Output Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Some performance parameters change along with temperature, such as offset, sensitivity, clock performance, and current. Some of these temperature variations are characterized in Table 1, and others are shown in the figures within the Typical Performance Characteristics section.

## MECHANICAL CONSIDERATIONS FOR MOUNTING

Mount the ADXL372 on the PCB in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL372 at an unsupported PCB location, as shown in Figure 108, can result in large, apparent measurement errors due to undamped PCB vibration. Locating the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is above the mechanical sensor resonant frequency of the accelerometer and, therefore, effectively invisible to the accelerometer. Multiple mounting points, close to the sensor, and/or a thicker PCB also help to reduce the effect of system resonance on the performance of the sensor.

Figure 108. Incorrectly Placed Accelerometers

<!-- image -->

AXES OF ACCELERATION SENSITIVITY

## APPLICATIONS INFORMATION

Figure 110. Output Response vs. Orientation to Gravity

<!-- image -->

## LAYOUT AND DESIGN RECOMMENDATIONS

Figure 111 shows the recommended printed wiring board land pattern.

Figure 111. Recommended Printed Wiring Board Land Pattern (Dimensions Shown in Millimeters)

<!-- image -->

## SILICON ANOMALY

This anomaly list describes the known bugs, anomalies, and workarounds for the ADXL372.

Analog Devices, Inc., is committed, through future silicon revisions, to continuously improving silicon functionality. Analog Devices tries to ensure that these future silicon revisions remain compatible with your present software/systems by implementing the recommended workarounds outlined here.

## ADXL372 FUNCTIONALITY ISSUES

Table 71. ADXL372 Functionality Issues

| Silicon Revision Identifier   | Silicon Status   | Anomaly Sheet   |   Number of Reported Anomalies |
|-------------------------------|------------------|-----------------|--------------------------------|
| 0x03                          | Released         | Rev. 0          |                              3 |

## FUNCTIONALITY ISSUES

## Table 72. Automated Self Test [er001]

## Table 73. FIFO Error [er002]

| Background   | Data must be stored in the FIFO as an x, y, z, x, y, z, …sequence.                                                                             |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Issue        | In all FIFO modes, data misalignment occurs. Data may be stored in the FIFO as a y, z, x, y, z, x, …sequence or a z, x, y, z, x, y,… sequence. |

Figure 112. Self Test Waveform

| Background     | The automated self test returns the USER_ST bit equal to Logic 1 on when the self test is successful (for example, the MEMS mechanical structure reacted as expected to the self test stimulus), and a Logic 0 when self test has failed (for example, the sensor is stuck).                                                                                                                                                                                                                                                                              |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Issue          | The automated self test returns the USER_ST bit equal to Logic 0 even when the device is fully functional (for example, sensor moves freely and acceleration data is accurate).                                                                                                                                                                                                                                                                                                                                                                           |
| Workaround     | Implement a software routine to determine the self test results by analyzing the z-axis acceleration data (Register 0x0C and Register 0x0D) from the moment the ST bit is set (self test starts) until ST_DONE is asserted (self test function has been completed). Figure 112 describes the self test profile from when the self test function is initiated (ST bit = 1) until it has been completed (ST_DONE = 1). The self test is considered successful if &#124;∆ST&#124; is greater than 5 LSBs. The recommended self test procedure is as follows: |
|                | 1. Reset the ADXL372.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                | 2. Ensure that the low-pass filter is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                | 3. Place the device in measurement mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                | 4. Wait until the filter settling time passes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                | 5. Start the self test by setting the ST bit in the SELF_TEST register (Register 0x40). High-pass automatically disables.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                | 6. Read the acceleration data from the z-axis (Register 0x0C and Register 0x0D) and store the data until the self test completes (ST_DONE goes high).                                                                                                                                                                                                                                                                                                                                                                                                     |
|                | 7. Average the first 50 ms of data right after ST is set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                | 8. Average the last 50 ms of data right before ST_DONE goes high.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                | 9. If the absolute value of the difference between the two averaged values is greater than 5 LSB, the self test passes.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Related Issues | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

<!-- image -->

## SILICON ANOMALY

## Table 73. FIFO Error [er002]

## Table 74. 1/5 of ODR Tone Error [er003]

| Workaround     | Leverage the external trigger synchronization function to disable the sensor ADC before accessing the FIFO (see Figure 113 for an implementation example).   |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                | To initialize, follow these steps:                                                                                                                           |
|                | 1. Set the desired FIFO mode and other desired configurations.                                                                                               |
|                | 2. Set the timing register (0x3D) to external sync along with the ODR. Do not apply an external trigger signal to INT2 to keep the ADC off.                  |
|                | 3. Set the device to measurement mode.                                                                                                                       |
|                | For the main loop, follow these steps:                                                                                                                       |
|                | 1. Set the timing register (0x3D) to internal sync along with the ODR.                                                                                       |
|                | 2. Wait for the FIFO_FULL interrupt from INT1.                                                                                                               |
|                | 3. Set the timing register (0x3D) to external sync along with the ODR.                                                                                       |
|                | 4. Read the entire content of the FIFO.                                                                                                                      |
|                | 5. Clear the FIFO (bypass mode).                                                                                                                             |
|                | 6. Set the desired FIFO mode.                                                                                                                                |
| Related Issues | None.                                                                                                                                                        |

<!-- image -->

Figure 113. FIFO Workaround Implementation Example

| Background     | The ADXL372 must not present any tones within the bandwidth selected.                                                                                                                                                       |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Issue          | The ADXL372 presents a tone at 1/5 of the output data rate.                                                                                                                                                                 |
| Workaround     | RMS noise is specified considering the magnitude of the tone issue. For applications that require frequency analysis, use the ADXL371. The tone issue is resolved in the ADXL371 and it is pin compatible with the ADXL372. |
| Related Issues | None.                                                                                                                                                                                                                       |

## Table 75. ADXL372 Functionality Issues

| Reference Number   | Description                                                                                                | Status     |
|--------------------|------------------------------------------------------------------------------------------------------------|------------|
| er001              | The automated self test returns the USER_ST bit equal to Logic 0 even when the device is fully functional. | Identified |
| er002              | In all FIFO modes, data misalignment occurs.                                                               | Identified |
| er003              | 1/5 of ODR tone error.                                                                                     | Identified |

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description        | Packing Quantity   | Package Option   |
|-----------------|---------------------|----------------------------|--------------------|------------------|
| ADXL372BCCZ-RL  | -40°C to +105°C     | 16-Lead LGA (3mm x 3.25mm) | Reel, 5000         | CC-16-4          |
| ADXL372BCCZ-RL7 | -40°C to +105°C     | 16-Lead LGA (3mm x 3.25mm) | Reel, 1500         | CC-16-4          |

## EVALUATION BOARDS

| Model 1       | Description    |
|---------------|----------------|
| EVAL-ADXL372Z | Breakout Board |

<!-- image -->

Figure 114. 16-Terminal Land Grid Array [LGA] (CC-16-4) Dimensions shown in millimeters

<!-- image -->

Updated: September 07, 2022