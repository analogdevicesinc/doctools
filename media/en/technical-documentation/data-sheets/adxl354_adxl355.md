<!-- lastmod 2025-06-29 -->
<!-- image -->

## Low Noise, Low Drift, Low Power, 3-Axis MEMS Accelerometers

## FEATURES

- Hermetic package offers optimal long-term stability
- 0 g offset vs. temperature (all axes): 0.15 m g /°C maximum
- Ultralow noise spectral density, all axes: 22.5 µ g /√Hz
- Low power, V SUPPLY (LDO regulator enabled)
- ADXL354 in measurement mode: 150 µA
- ADXL355 in measurement mode: 200 µA
- ADXL354/ADXL355 in standby mode: 21 µA
- ADXL354 has user adjustable analog output bandwidth
- ADXL355 digital output features
- Digital SPI and I 2 C interfaces supported
- 20-bit ADC
- Data interpolation routine for synchronous sampling
- Programmable high- and low-pass digital filters
- Electromechanical self test
- Integrated temperature sensor
- Voltage range options
- VSUPPLY with internal regulators: 2.25 V to 3.6 V
- V1P8ANA , V 1P8DIG with internal LDO regulator bypassed: 1.8 V typical ± 10%
- Operating temperature range: -40°C to +125°C
- 14-terminal, 6 mm × 5.6 mm × 2.2 mm, LCC package

## APPLICATIONS

- Inertial measurement units (IMUs)/attitude and heading reference systems (AHRSs)
- Platform stabilization systems
- Structural health monitoring
- Seismic imaging
- Tilt sensing
- Robotics
- Condition monitoring

## FUNCTIONAL BLOCK DIAGRAMS

Figure 1. ADXL354

<!-- image -->

Figure 2. ADXL355

<!-- image -->

## GENERAL DESCRIPTION

The analog output ADXL354 and the digital output ADXL355 1 are low noise density, low 0 g offset drift, low power, 3-axis accelerometers with selectable measurement ranges. The ADXL354B supports the ±2 g and ±4 g ranges, the ADXL354C supports the ±2 g and ±8 g ranges, and the ADXL355 supports the ±2 g , ±4 g , and ±8 g ranges. The ADXL354/ADXL355 offer industry leading noise, minimal offset drift over temperature, and long-term stability enabling precision applications with minimal calibration.

Highly integrated in a compact form factor, the low power ADXL355 is ideal in an Internet of Things (IoT) sensor node and other wireless product designs.

The ADXL355 multifunction pin names may be referenced by their relevant function only for either the serial peripheral interface (SPI) or I 2 C interface.

1 Protected by U.S. Patents 8,472,270; 9,041,462; 8,665,627; 8,917,099; 6,892,576; 9,297,825; and 7,956,621.

## TABLE OF CONTENTS

| Features................................................................                                                                                 | 1                                                                                                                                                        | FIFO_FULL......................................................                                                                                          | 32                                                                                                                                                       |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications...........................................................                                                                                  | 1                                                                                                                                                        | FIFO_OVR.......................................................                                                                                          | 32                                                                                                                                                       |
| Functional Block Diagrams....................................1                                                                                           |                                                                                                                                                          | Activity..............................................................32                                                                                 |                                                                                                                                                          |
| General Description...............................................1                                                                                      |                                                                                                                                                          | NVM_BUSY......................................................32                                                                                         |                                                                                                                                                          |
| Specifications........................................................                                                                                   | 4                                                                                                                                                        | External Synchronization and Interpolation......32                                                                                                       |                                                                                                                                                          |
| Analog Output for the ADXL354.........................4                                                                                                  |                                                                                                                                                          | ADXL355 Register Map.......................................35                                                                                            |                                                                                                                                                          |
| Digital Output for the ADXL355..........................5                                                                                                |                                                                                                                                                          | Register Definitions.............................................                                                                                        | 36                                                                                                                                                       |
| SPI Digital Interface Characteristics for the                                                                                                            |                                                                                                                                                          | Analog Devices ID Register.............................                                                                                                  | 36                                                                                                                                                       |
| ADXL355..........................................................7                                                                                       |                                                                                                                                                          | Analog Devices MEMS ID Register..................36                                                                                                      |                                                                                                                                                          |
| I 2 C Digital Interface Characteristics for the                                                                                                          |                                                                                                                                                          | Device ID Register...........................................                                                                                            | 36                                                                                                                                                       |
| ADXL355..........................................................8                                                                                       |                                                                                                                                                          | Product Revision ID Register...........................36                                                                                                |                                                                                                                                                          |
| Absolute Maximum Ratings.................................10                                                                                              |                                                                                                                                                          | Status Register.................................................36                                                                                       |                                                                                                                                                          |
| Thermal Resistance.........................................                                                                                              | 10                                                                                                                                                       | FIFO Entries Register.......................................37                                                                                           |                                                                                                                                                          |
| Recommended Soldering Profile......................10                                                                                                    |                                                                                                                                                          | Temperature Data Registers............................                                                                                                   | 37                                                                                                                                                       |
| ESD Caution.....................................................10                                                                                       |                                                                                                                                                          | X-Axis Data Registers......................................37                                                                                            |                                                                                                                                                          |
| Pin Configurations and Function Descriptions.....11                                                                                                      |                                                                                                                                                          | Y-Axis Data Registers......................................                                                                                              | 38                                                                                                                                                       |
| Typical Performance Characteristics...................13                                                                                                 |                                                                                                                                                          | Z-Axis Data Registers......................................                                                                                              | 38                                                                                                                                                       |
| Root Allan Variance (RAV) ADXL355 Characteristics................................................21                                                      |                                                                                                                                                          | FIFO Access Register......................................39 X-Axis Offset Trim Registers............................39                                  |                                                                                                                                                          |
| Theory of Operation.............................................22                                                                                       |                                                                                                                                                          | Y-Axis Offset Trim Registers............................                                                                                                 | 39                                                                                                                                                       |
| Applications Information......................................                                                                                           | 23                                                                                                                                                       | Z-Axis Offset Trim Registers............................                                                                                                 | 40                                                                                                                                                       |
| Analog Output..................................................                                                                                          | 23                                                                                                                                                       | Activity Enable Register...................................                                                                                              | 40                                                                                                                                                       |
| Digital Output....................................................23                                                                                     |                                                                                                                                                          | Activity Threshold Registers.............................40                                                                                              |                                                                                                                                                          |
| Axes of Acceleration Sensitivity.......................                                                                                                  | 24                                                                                                                                                       | Activity Count Register.....................................41                                                                                           |                                                                                                                                                          |
| Power Sequencing...........................................24                                                                                            |                                                                                                                                                          | Filter Settings Register.....................................41                                                                                          |                                                                                                                                                          |
| Power Supply Description................................24                                                                                               |                                                                                                                                                          | FIFO Samples Register....................................41                                                                                              |                                                                                                                                                          |
| Overrange Protection.......................................24                                                                                            |                                                                                                                                                          | Interrupt Pin (INTx) Function Map Register......42                                                                                                       |                                                                                                                                                          |
| Mechanical Headroom vs. Frequency..............25                                                                                                        |                                                                                                                                                          | Data Synchronization.......................................42 2                                                                                          |                                                                                                                                                          |
| Self Test............................................................25 Filter.................................................................          | 25                                                                                                                                                       | I C Speed, Interrupt Polarity, and Range Register..........................................................42                                            |                                                                                                                                                          |
| Serial Communications........................................28                                                                                          |                                                                                                                                                          | Power Control Register....................................43                                                                                             |                                                                                                                                                          |
| SPI Protocol.....................................................                                                                                        | 28                                                                                                                                                       | Self Test Register.............................................43                                                                                        |                                                                                                                                                          |
| SPI Bus Sharing...............................................28                                                                                         |                                                                                                                                                          | Reset Register..................................................43                                                                                       |                                                                                                                                                          |
| I 2 C Protocol......................................................29                                                                                   |                                                                                                                                                          | PCB Footprint Pattern.........................................                                                                                           | 44                                                                                                                                                       |
| Reading Acceleration or Temperature Data From the Interface..........................................29                                                  |                                                                                                                                                          | Outline Dimensions............................................. Ordering Guide.................................................45                        | 45                                                                                                                                                       |
| FIFO....................................................................                                                                                 | 31                                                                                                                                                       | Output Mode, Measurement Range, and                                                                                                                      |                                                                                                                                                          |
| Interrupts.............................................................                                                                                  | 32                                                                                                                                                       | Specified Voltage Options..............................45                                                                                                |                                                                                                                                                          |
| DATA_RDY.......................................................32                                                                                        |                                                                                                                                                          | Evaluation Boards............................................45                                                                                          |                                                                                                                                                          |
| DRDY Pin.........................................................32                                                                                      |                                                                                                                                                          |                                                                                                                                                          |                                                                                                                                                          |
| REVISION HISTORY                                                                                                                                         |                                                                                                                                                          |                                                                                                                                                          |                                                                                                                                                          |
| 6/2025-Rev. C to Rev. D                                                                                                                                  |                                                                                                                                                          |                                                                                                                                                          |                                                                                                                                                          |
| Change to 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z-Axis) Parameter, Table 1.................................4                                   | Change to 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z-Axis) Parameter, Table 1.................................4                                   | Change to 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z-Axis) Parameter, Table 1.................................4                                   | Change to 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z-Axis) Parameter, Table 1.................................4                                   |
| Change to 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z - Axis) Parameter, Table 2.................................5                                 | Change to 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z - Axis) Parameter, Table 2.................................5                                 | Change to 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z - Axis) Parameter, Table 2.................................5                                 |                                                                                                                                                          |
| 9/2024-Rev. B to Rev. C Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1 | 9/2024-Rev. B to Rev. C Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1 | 9/2024-Rev. B to Rev. C Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1 | 9/2024-Rev. B to Rev. C Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1 |

## TABLE OF CONTENTS

| Changes to Quality Factor Parameter, Table 1................................................................................................4                |    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Changes to Table 5........................................................................................................................................10 |    |
| Changes to Figure 58 and Figure 59.............................................................................................................23            |    |
| Changes to Power Sequencing Section........................................................................................................                  | 24 |
| Changes to Overrange Protection Section....................................................................................................                  | 24 |
| Added Figure 61; Renumbered Sequentially.................................................................................................25                  |    |
| Added Mechanical Headroom Vs. Frequency Section, Figure 62, and Figure 63.........................................25                                         |    |
| Change to EXT_SYNC = 00, EXT_CLK = 0-No External Synchronization or Interpolation Section...........33                                                       |    |
| Added Output Mode, Measurement Range, and Specified Voltage Options.................................................45                                       |    |
| Changes to Evaluation Boards......................................................................................................................           | 45 |

## SPECIFICATIONS

## ANALOG OUTPUT FOR THE ADXL354

TA = 25°C, V SUPPLY = 3.3 V, x-axis acceleration and y-axis acceleration = 0 g , and z-axis acceleration = 1 g , unless otherwise noted.

Table 1.

| Parameter                                                 | Test Conditions/Comments                                            | Min      | Typ    | Max   | Unit       |
|-----------------------------------------------------------|---------------------------------------------------------------------|----------|--------|-------|------------|
| SENSOR INPUT                                              | Each axis                                                           |          |        |       |            |
| Output Full-Scale Range (FSR)                             | ADXL354B supports two ranges                                        |          | ±2, ±4 |       | g          |
|                                                           | ADXL354C supports two ranges                                        |          | ±2, ±8 |       | g          |
| Resonant Frequency 1                                      |                                                                     |          | 2.4    |       | kHz        |
| Quality Factor                                            | X-axis and y-axis                                                   |          | 7.4    |       |            |
|                                                           | Z-axis                                                              |          | 1.5    |       |            |
| Nonlinearity                                              | ±2 g                                                                |          | 0.1    |       | %          |
|                                                           | ±8 g                                                                |          | 1.15   |       | %          |
| Cross Axis Sensitivity                                    |                                                                     |          | 1      |       | %          |
| SENSITIVITY                                               | Ratiometric to V 1P8ANA                                             |          |        |       |            |
| Sensitivity at X OUT , Y OUT , Z OUT                      | ±2 g                                                                | 368      | 400    | 432   | mV/ g      |
|                                                           | ±4 g                                                                | 184      | 200    | 216   | mV/ g      |
|                                                           | ±8 g                                                                | 92       | 100    | 108   | mV/ g      |
| Sensitivity Change Due to Temperature                     | -40°C to +125°C                                                     |          | ±0.01  |       | %/°C       |
| Repeatability 2                                           | X-axis and y-axis                                                   |          | 0.16   |       | %          |
|                                                           | Z-axis                                                              |          | 0.3    |       | %          |
| 0 g OFFSET                                                | Each axis, ±2 g                                                     |          |        |       |            |
| 0 g Output for X OUT , Y OUT , Z OUT                      | Referred to V 1P8ANA /2                                             | -75      | ±25    | +75   | m g        |
| 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z-Axis) 3 | -40°C to +125°C                                                     | -0.15    | ±0.2   | +0.15 | m g /°C    |
| Repeatability 2                                           | X-axis and y-axis                                                   |          | ±2     |       | m g        |
| Vibration Rectification Error (VRE) 4                     | ±2 g range, in a 1 g orientation, offset due to 2.5 g rms vibration |          | <0.4   |       | g          |
| NOISE                                                     |                                                                     |          |        |       |            |
| Spectral Density 5                                        |                                                                     |          |        |       |            |
| X-Axis, Y-Axis, and Z-Axis 6                              | ±2 g                                                                |          | 22.5   |       | µ g /√Hz   |
| Velocity Random Walk X-Axis and Y-Axis                    | ±2 g                                                                |          | 5.3    |       | mm/sec/ÖHr |
| Z-Axis                                                    |                                                                     |          | 7.7    |       | mm/sec/ÖHr |
| BANDWIDTH                                                 | 7                                                                   |          | 1.9    |       | kHz        |
| SELF TEST                                                 | 3 dB, overall transfer function                                     |          |        |       |            |
| Output Change 8                                           |                                                                     |          |        |       |            |
| X-Axis                                                    |                                                                     | 0.1      | 0.3    | 0.6   | g          |
| Y-Axis                                                    |                                                                     | 0.1      | 0.3    | 0.6   | g          |
| Z-Axis                                                    |                                                                     | 0.5      | 1.5    | 3.0   | g          |
| POWER SUPPLY                                              |                                                                     |          |        |       |            |
| Voltage Range                                             |                                                                     |          |        |       |            |
| V SUPPLY 9                                                |                                                                     | 2.25     | 2.5    | 3.6   | V          |
| V DDIO                                                    |                                                                     | V 1P8DIG | 2.5    | 3.6   | V          |
| V 1P8ANA , V 1P8DIG                                       | Internal low dropout (LDO) regulator bypassed, V SUPPLY = 0 V       | 1.62     | 1.8    | 1.98  | V          |
| Current                                                   |                                                                     |          |        |       |            |
| Measurement Mode                                          |                                                                     |          |        |       |            |
| V SUPPLY                                                  | LDO regulator enabled                                               |          | 150    |       | µA         |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                   | Test Conditions/Comments              | Min   | Typ   | Max             | Unit   |
|-----------------------------|---------------------------------------|-------|-------|-----------------|--------|
| V 1P8ANA                    | LDO regulator disabled                |       | 138   |                 | µA     |
| V 1P8DIG                    | LDO regulator disabled                |       | 12    |                 | µA     |
| Standby Mode                |                                       |       |       |                 |        |
| V SUPPLY                    | LDO regulator enabled                 |       | 21    |                 | µA     |
| V 1P8ANA                    | LDO regulator disabled                |       | 7     |                 | µA     |
| V 1P8DIG                    | LDO regulator disabled                |       | 10    |                 | µA     |
| Turn On Time 10             | 2 g range                             |       | <10   |                 | ms     |
|                             | Power-off to standby                  |       | <10   |                 | ms     |
| OUTPUT AMPLIFIER            | X OUT , Y OUT , Z OUT , and TEMP pins |       |       |                 |        |
| Swing                       | No load                               | 0.03  |       | V 1P8ANA - 0.03 | V      |
| Output Series Resistance    |                                       |       | 32    |                 | kΩ     |
| TEMPERATURE SENSOR          |                                       |       |       |                 |        |
| Output at 25°C              |                                       |       | 967   |                 | mV     |
| Scale Factor                |                                       |       | 3.0   |                 | mV/°C  |
| TEMPERATURE                 |                                       |       |       |                 |        |
| Operating Temperature Range |                                       | -40   |       | +125            | °C     |

1 The resonant frequency is a sensor characteristic.

2 Repeatability is predicted for a 10 year life and includes shifts due to the high temperature operating life test (HTOL) (T A = 150°C, V SUPPLY = 3.6 V, and 1000 hours), temperature cycling (-55°C to +125°C and 1000 cycles), velocity random walk, broadband noise, and temperature hysteresis. Repeatability in relation to time follows the square root law. For example, to obtain offset repeatability of the x-axis for 2.5 years, use the following equation: ±2 m g × √(2.5 years/10 years) = ±1 m g .

3 The temperature change is -40°C to +25°C, or +25°C to +125°C.

- 4 The VRE measurement is the shift in dc offset while the device is subject to 2.5 g rms of random vibration from 50 Hz to 2 kHz. The device under test (DUT) is configured for the ±2 g range and an output data rate of 4 kHz. The VRE scales with the range setting.

5 Based on characterization.

- 6 The noise spectral density for ±8 g range is estimated by design to be 50% more than that of the ±2 g range.
- 7 Overall transfer function includes the sensor mechanical response and all other filters on the signal chain.
- 8 The self test result converted to the acceleration value is independent of the selected range.
- 9 When V 1P8ANA and V 1P8DIG are generated internally, V SUPPLY is valid. To disable the LDO regulator and drive V 1P8ANA and V 1P8DIG externally, connect V SUPPLY to V SS .

10 Standby to measurement mode. This specification is valid when the output is within 1 m g of the final value.

## DIGITAL OUTPUT FOR THE ADXL355

TA = 25°C, V SUPPLY = 3.3 V, x-axis acceleration and y-axis acceleration = 0 g , and z-axis acceleration = 1 g , and output data rate (ODR) = 500 Hz, unless otherwise noted. Note that multifunction pin names may be referenced by their relevant function only.

| Parameter                               | Test Conditions/Comments               | Min     | Typ        | Max     | Unit     |
|-----------------------------------------|----------------------------------------|---------|------------|---------|----------|
| SENSOR INPUT                            | Each axis                              |         |            |         |          |
| Output Full-Scale Range (FSR)           | User selectable, supports three ranges |         | ±2, ±4, ±8 |         | g        |
| Nonlinearity                            | ±2 g                                   |         | 0.1        |         | %FS      |
| Nonlinearity                            | ±8 g                                   |         | 1.6        |         | %        |
| Cross Axis Sensitivity                  |                                        |         | 1          |         | %        |
| SENSITIVITY 1                           | Each axis                              |         |            |         |          |
| X-Axis, Y-Axis, and Z-Axis Sensitivity  | ±2 g                                   | 235,520 | 256,000    | 276,480 | LSB/ g   |
| X-Axis, Y-Axis, and Z-Axis Sensitivity  | ±4 g                                   | 117,760 | 128,000    | 138,240 | LSB/ g   |
| X-Axis, Y-Axis, and Z-Axis Sensitivity  | ±8 g                                   | 58,880  | 64,000     | 69,120  | LSB/ g   |
| X-Axis, Y-Axis, and Z-Axis Scale Factor | ±2 g                                   |         | 3.9        |         | µ g/ LSB |
| X-Axis, Y-Axis, and Z-Axis Scale Factor | ±4 g                                   |         | 7.8        |         | µ g/ LSB |

## SPECIFICATIONS

Table 2. (Continued)

| Parameter                                                              | Test Conditions/Comments                                            | Min      | Typ   | Max   | Unit       |
|------------------------------------------------------------------------|---------------------------------------------------------------------|----------|-------|-------|------------|
|                                                                        | ±8 g                                                                |          | 15.6  |       | µ g/ LSB   |
| Sensitivity Change due to Temperature                                  | -40°C to +125°C                                                     |          | ±0.01 |       | %/°C       |
| Repeatability 2                                                        | X-axis and y-axis                                                   |          | 0.16  |       | %          |
|                                                                        | Z-axis                                                              |          | 0.3   |       | %          |
| 0 g OFFSET                                                             | Each axis, ±2 g                                                     |          |       |       |            |
| X-Axis, Y-Axis, and Z-Axis 0 g Output                                  |                                                                     | -75      | ±25   | +75   | m g        |
| 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z - Axis) 3            | -40°C to +125°C                                                     | -0.15    | ±0.01 | +0.15 | m g /°C    |
| Repeatability 2                                                        | X-axis and y-axis                                                   |          | ±2    |       | m g        |
|                                                                        | Z-axis                                                              |          | ±3    |       | m g        |
| VRE 4                                                                  | ±2 g range, in a 1 g orientation, offset due to 2.5 g rms vibration |          | <0.4  |       | g          |
| NOISE                                                                  |                                                                     |          |       |       |            |
| Spectral Density 5                                                     |                                                                     |          |       |       |            |
| X-Axis, Y-Axis, and Z-Axis                                             | ±2 g                                                                |          | 22.5  |       | µ g /√Hz   |
|                                                                        | ±8 g                                                                |          | 25    |       | µ g /√Hz   |
| Velocity Random Walk                                                   | ±2 g                                                                |          |       |       |            |
| X-Axis and Y-Axis                                                      |                                                                     |          | 5.3   |       | mm/sec/ÖHr |
| Z-Axis                                                                 |                                                                     |          | 7.7   |       | mm/sec/ÖHr |
| BANDWIDTH AND OUTPUT DATA RATE                                         |                                                                     |          |       |       |            |
| Analog-to-Digital Converter (ADC) Resolution                           |                                                                     |          | 20    |       | Bits       |
| Low-Pass Filter Passband Frequency                                     | User programmable, Register 0x28                                    | 0.977    |       | 1000  | Hz         |
| High-Pass Filter Passband Frequency When Enabled (Disabled by Default) | User programmable, Register 0x28 for 4 kHz ODR                      | 0.0095   |       | 10    | Hz         |
| SELF TEST                                                              |                                                                     |          |       |       |            |
| Output Change 6                                                        |                                                                     |          |       |       |            |
| X-Axis                                                                 |                                                                     | 0.1      | 0.3   | 0.6   | g          |
| Y-Axis                                                                 |                                                                     | 0.1      | 0.3   | 0.6   | g          |
| Z-Axis                                                                 |                                                                     | 0.5      | 1.5   | 3.0   | g          |
| POWER SUPPLY                                                           |                                                                     |          |       |       |            |
| Voltage Range                                                          |                                                                     |          |       |       |            |
| V SUPPLY Operating 7                                                   |                                                                     | 2.25     | 2.5   | 3.6   | V          |
| V DDIO                                                                 |                                                                     | V 1P8DIG | 2.5   | 3.6   | V          |
| V 1P8ANA and V 1P8DIG                                                  | Internal LDO regulator bypassed, V SUPPLY = 0 V                     | 1.62     | 1.8   | 1.98  | V          |
| Current                                                                |                                                                     |          |       |       |            |
| Measurement Mode                                                       |                                                                     |          |       |       |            |
| V SUPPLY                                                               | LDO regulator enabled                                               |          | 200   |       | µA         |
| V 1P8ANA                                                               | LDO regulator disabled                                              |          | 160   |       | µA         |
| V 1P8DIG                                                               | LDO regulator disabled                                              |          | 35.5  |       | µA         |
| Standby Mode                                                           |                                                                     |          |       |       |            |
| V SUPPLY                                                               | LDO regulator enabled                                               |          | 21    |       | µA         |
| V 1P8ANA                                                               | LDO regulator disabled                                              |          | 7     |       | µA         |
| V 1P8DIG                                                               | LDO regulator disabled                                              |          | 10    |       | µA         |
| Turn On Time 8                                                         | 2 g range                                                           |          | <10   |       | ms         |
|                                                                        | Power-off to standby                                                |          | <10   |       | ms         |
| TEMPERATURE SENSOR                                                     |                                                                     |          |       |       |            |
| Output at 25°C                                                         |                                                                     |          | 1885  |       | LSB        |
| Scale Factor                                                           |                                                                     |          | -9.05 |       | LSB/°C     |

## SPECIFICATIONS

Table 2. (Continued)

| Parameter                   | Test Conditions/Comments   | Min   | Typ   | Max   | Unit   |
|-----------------------------|----------------------------|-------|-------|-------|--------|
| TEMPERATURE                 |                            |       |       |       |        |
| Operating Temperature Range |                            | -40   |       | +125  | °C     |

1 Characterized but not 100% tested.

2 Repeatability is predicted for a 10 year life and includes shifts due to the HTOL (T A = 150°C, V SUPPLY = 3.6 V, and 1000 hours), temperature cycling (-55°C to +125°C and 1000 cycles), velocity random walk, broadband noise, and temperature hysteresis. Repeatability in relation to time follows the square root law. For example, to obtain offset repeatability of the x-axis for 2.5 years, use the following equation: ±2 m g × √(2.5 years/10 years) = ±1 m g .

3 The temperature change is -40°C to +25°C or +25°C to +125°C.

- 4 The VRE measurement is the shift in dc offset while the device is subject to 2.5 g rms random vibration from 50 Hz to 2 kHz. The DUT is configured for the ±2 g range and an output data rate of 4 kHz. The VRE scales with the range setting.

5 Based on characterization.

- 6 The self test result converted to the acceleration value is independent of the selected range.
- 7 When V 1P8ANA and V 1P8DIG are generated internally, V SUPPLY is valid. To disable the LDO regulator and drive V 1P8ANA and V 1P8DIG externally, connect V SUPPLY to V SS .

8 Standby to measurement mode. This specification is valid when the output is within 1 m g of final value.

## SPI DIGITAL INTERFACE CHARACTERISTICS FOR THE ADXL355

Note that multifunction pin names may be referenced only by their relevant function.

Table 3.

| Parameter              | Symbol   | Test Conditions/Comments           | Min          | Max          | Unit   |
|------------------------|----------|------------------------------------|--------------|--------------|--------|
| DC INPUT LEVELS        |          |                                    |              |              |        |
| Input Voltage          |          |                                    |              |              |        |
| Low Level              | V IL     |                                    |              | 0.3 × V DDIO | V      |
| High Level             | V IH     |                                    | 0.7 × V DDIO |              | V      |
| Input Current          |          |                                    |              |              |        |
| Low Level              | I IL     | Input voltage (V IN ) = 0 V        | -0.2         |              | µA     |
| High Level             | I IH     | V IN = V DDIO                      |              | 0.2          | µA     |
| DC OUTPUT LEVELS       |          |                                    |              |              |        |
| Output Voltage         |          |                                    |              |              |        |
| Low Level              | V OL     | I OL = I OL, MIN                   |              | 0.2 × V DDIO | V      |
| High Level             | V OH     | I OH = I OH, MAX                   | 0.8 × V DDIO |              | V      |
| Output Current         |          |                                    |              |              |        |
| Low Level              | I OL     | V OL = V OL, MAX                   | -10          |              | mA     |
| High Level             | I OH     | V OH = V OH, MIN                   |              | 4            | mA     |
| AC INPUT LEVELS        |          |                                    |              |              |        |
| SCLK Frequency         |          |                                    | 0.1          | 10           | MHz    |
| SCLK High Time         | t HIGH   |                                    | 40           |              | ns     |
| SCLK Low Time          | t LOW    |                                    | 40           |              | ns     |
| Setup Time             | t CSS    |                                    | 20           |              | ns     |
| CS Hold Time           | t CSH    |                                    | 20           |              | ns     |
| CS Disable Time        | t CSD    |                                    | 40           |              | ns     |
| Rising SCLK Setup Time | t SCLKS  |                                    | 20           |              | ns     |
| MOSI Setup Time        | t SU     |                                    | 20           |              | ns     |
| MOSI Hold Time         | t HD     |                                    | 20           |              | ns     |
| AC OUTPUT LEVELS       |          |                                    |              |              |        |
| Propagation Delay      | t P      | Load capacitance (C LOAD ) = 30 pF |              | 30           | ns     |
| Enable MISO Time       | t EN     |                                    | 30           |              | ns     |
| Disable MISO Time      | t DIS    |                                    |              | 20           | ns     |

## SPECIFICATIONS

Figure 3. SPI Interface Timing Diagram

<!-- image -->

## I 2 C DIGITAL INTERFACE CHARACTERISTICS FOR THE ADXL355

Note that multifunction pin names may be referenced by their relevant function only.

## Table 4.

|                                                      |               | Test Conditions/                   | I2C_HS = 0 (Fast Mode)     | I2C_HS = 0 (Fast Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   |       |
|------------------------------------------------------|---------------|------------------------------------|----------------------------|--------------------------|--------------------------------|--------------------------------|--------------------------------|-------|
| Parameter                                            | Symbol        | Comments                           | Min                        | Max                      | Min                            | Typ                            | Max                            | Unit  |
| DC INPUT LEVELS                                      |               |                                    |                            |                          |                                |                                |                                |       |
| Low Level                                            | V IL          |                                    |                            | 0.3 × V DDIO             |                                |                                | 0.3 × V DDIO                   | V     |
| High Level                                           | V IH          |                                    | 0.7 × V DDIO 0.05 × V DDIO |                          | 0.7 × V DDIO 0.1 × V DDIO      |                                |                                | V V   |
| Hysteresis of Schmitt Triggered Inputs Input Current | V HYS I IL    | 0.1 × V DDIO < V IN < 0.9 × V DDIO | -10                        | +10                      |                                |                                |                                | µA    |
| DC OUTPUT LEVELS Output Voltage                      |               | I = 3 mA                           |                            |                          |                                |                                |                                |       |
| Low Level                                            | V OL1         | OL V DDIO > 2 V                    |                            | 0.4                      |                                |                                | 0.4                            | V     |
|                                                      | V OL2         | V DDIO ≤ 2 V                       |                            | 0.2 × V DDIO             |                                |                                | 0.2 × V DDIO                   | V     |
| Output Current Low Level                             | I OL          | V OL = 0.4 V V OL = 0.6 V          | 20 6                       |                          | 20 6                           |                                |                                | mA mA |
| AC INPUT LEVELS                                      |               |                                    |                            |                          |                                |                                |                                |       |
| SCL Frequency                                        |               |                                    | 0                          | 1                        | 0                              |                                | 3.4                            | MHz   |
| SCL High Time                                        | t HIGH        |                                    | 260                        |                          | 60                             |                                |                                | ns    |
| SCL Low Time                                         | t LOW         |                                    | 500                        |                          | 160                            |                                |                                | ns    |
| Start Setup Time Start Hold Time                     | t SUSTA t     |                                    | 260 260                    |                          | 160 160                        |                                |                                | ns    |
| SDA Setup Time                                       | HDSTA t SUDAT |                                    | 50                         |                          | 10                             |                                |                                | ns ns |
| SDA Hold Time                                        | t HDDAT       |                                    | 0                          |                          | 0                              |                                |                                | ns    |
| Stop Setup Time                                      | t SUSTO       |                                    | 260                        |                          | 160                            |                                |                                | ns    |
| Bus Free Time                                        | t BUF         |                                    | 500                        |                          |                                |                                |                                | ns    |
| SCL Input Rise Time                                  |               |                                    |                            | 120                      |                                |                                |                                |       |
|                                                      | t RCL         |                                    |                            |                          |                                |                                | 80                             | ns    |
| SCL Input Fall Time                                  | t FCL         |                                    |                            | 120                      |                                |                                | 80                             | ns    |
| SDA Input Rise Time                                  | t RDA         |                                    |                            | 120                      |                                |                                | 160                            | ns    |
| SDA Input Fall Time                                  | t FDA         |                                    |                            | 120                      |                                |                                | 160                            | ns    |
| Width of Spikes to Suppress                          | t SP          | Not shown in Figure 4              |                            | 50                       |                                |                                | 10                             | ns    |
| AC OUTPUT LEVELS                                     |               |                                    |                            |                          |                                |                                |                                |       |
| Propagation Delay                                    | t             | C LOAD = 500 pF                    | 97                         |                          |                                |                                |                                | ns    |
| Data                                                 | VDDAT t       |                                    |                            | 450                      | 27                             |                                | 135                            |       |
| Acknowledge                                          | VDACK         |                                    |                            | 450                      |                                |                                |                                | ns    |

## SPECIFICATIONS

## Table 4. (Continued)

Figure 4. I 2 C Interface Timing Diagram

|                  |        | Test Conditions/      | I2C_HS = 0 (Fast   | I2C_HS = 0 (Fast   | Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   |
|------------------|--------|-----------------------|--------------------|--------------------|---------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter        | Symbol | Comments              | Min                | Typ                | Max     | Min                            | Typ                            | Max                            | Unit                           |
| Output Fall Time | t F    | Not shown in Figure 4 | 20 × (V DD /5.5)   |                    | 120     |                                |                                |                                | ns                             |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                                                                   |                                                 |
|----------------------------------------------------------------------------|-------------------------------------------------|
| Parameter                                                                  | Rating                                          |
| Acceleration (Any Axis)                                                    |                                                 |
| Unpowered                                                                  | 5000 g peak, 0.5 ms pulse duration              |
| Powered                                                                    | 10000 g peak, 0.1 ms pulse duration             |
| Vibration (Any Axis, Powered, or Unpowered)                                | Per MIL-STD-883 Method 2007, Test Condition A 1 |
| V SUPPLY , V DDIO                                                          | 5.4 V                                           |
| V 1P8ANA , V 1P8DIG Configured as Inputs ADXL354                           | 1.98 V                                          |
| Digital Inputs (RANGE, ST1, ST2, STBY)                                     | -0.3 V to V DDIO + 0.3 V                        |
| Analog Outputs (X OUT , Y OUT , Z OUT , TEMP)                              | -0.3 V to V 1P8ANA + 0.3 V                      |
| Digital Pins (CS/SCL, SCLK/V SSIO , MOSI/SDA, MISO/ASEL, INT1, INT2, DRDY) | -0.3 V to V DDIO + 0.3 V                        |
| Operating Temperature Range                                                | -40°C to +125°C                                 |
| Storage Temperature Range                                                  | -55°C to +150°C                                 |

1 Sine-wave excitation swept logarithmically from 20 Hz to 2 kHz, 20 g peak amplitude. Sweep duration of 4 minutes. Repeat sweep four times per axis.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. ψ JB is the junction to board thermal resistance.

Table 6. Thermal Resistance

| Package Type   |   θ JA |   ψ JB | Unit   |
|----------------|--------|--------|--------|
| E-14-1 1       |     42 |   17.6 | °C/W   |

1 Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with four thermal vias. See JEDEC JESD51.

## RECOMMENDED SOLDERING PROFILE

Figure 5 and Table 7 provide details about the recommended soldering profile.

Figure 5. Recommended Soldering Profile

<!-- image -->

Table 7. Recommended Soldering Profile

|                                                                             | Condition         | Condition         |
|-----------------------------------------------------------------------------|-------------------|-------------------|
| Profile Feature                                                             | Sn63/Pb37         | Pb-Free           |
| Average Ramp Rate from Liquid Temperature (T L ) to Peak Temperature (T P ) | 3°C/sec maximum   | 3°C/sec maximum   |
| Preheat                                                                     |                   |                   |
| Minimum Temperature (T SMIN )                                               | 100°C             | 150°C             |
| Maximum Temperature (T SMAX )                                               | 150°C             | 200°C             |
| Time from T SMIN to T SMAX (t S )                                           | 60 sec to 120 sec | 60 sec to 180 sec |
| T SMAX to T L Ramp-Up Rate                                                  | 3°C/sec maximum   | 3°C/sec maximum   |
| Liquid Temperature (T L )                                                   | 183°C             | 217°C             |
| Time Maintained Above T L (t L )                                            | 60 sec to 150 sec | 60 sec to 150 sec |
| Peak Temperature (T P )                                                     | 240°C + 0°C/ -5°C | 260°C + 0°C/ -5°C |
| Time of Actual T P - 5°C (t P )                                             | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                                              | 6°C/sec maximum   | 6°C/sec maximum   |
| Time from 25°C to Peak Temperature (t 25°C TO PEAK )                        | 6 minutes maximum | 8 minutes maximum |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Figure 6. ADXL354 Pin Configuration

<!-- image -->

Table 8. ADXL354 Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                                                                                                                                 |
|-----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | RANGE      | Range Selection Pin. Set this pin to ground to select the ±2 g range, or set this pin to V DDIO to select the ±4 g or ±8 g range. This pin is model dependent (see the Ordering Guide section).             |
|         2 | ST1        | Self Test Pin 1. This pin enables self test mode. This pin must be forced low when not in self test mode.                                                                                                   |
|         3 | ST2        | Self Test Pin 2. This pin activates electromechanical self test actuation. This pin must be forced low when not in self test mode.                                                                          |
|         4 | TEMP       | Temperature Sensor Output.                                                                                                                                                                                  |
|         5 | V DDIO     | Digital Interface Supply Voltage.                                                                                                                                                                           |
|         6 | V SSIO     | Digital Ground.                                                                                                                                                                                             |
|         7 | STBY       | Standby or Measurement Mode Selection Pin. Set this pin to ground to enter standby mode, or set this pin to V DDIO to enter measurement mode.                                                               |
|         8 | V 1P8DIG   | Digital Supply. This pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to this pin externally.                                                                         |
|         9 | V SS       | Analog Ground.                                                                                                                                                                                              |
|        10 | V 1P8ANA   | Analog Supply. This pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to this pin externally.                                                                          |
|        11 | V SUPPLY   | Supply Voltage. When V SUPPLY equals 2.25 V to 3.6 V, V SUPPLY enables the internal LDO regulators to generate V 1P8DIG and V 1P8ANA . For V SUPPLY = V SS , V 1P8DIG and V 1P8ANA are externally supplied. |
|        12 | X OUT      | X-Axis Output.                                                                                                                                                                                              |
|        13 | Y OUT      | Y-Axis Output.                                                                                                                                                                                              |
|        14 | Z OUT      | Z-Axis Output.                                                                                                                                                                                              |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Figure 7. ADXL355 Pin Configuration

<!-- image -->

Table 9. ADXL355 Pin Function Descriptions

| Pin No.   | Mnemonic      | Description                                                                                                                                                                                               |
|-----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | CS/SCL        | Chip Select for SPI (CS). Serial Communications Clock for I 2 C (SCL).                                                                                                                                    |
| 2         | SCLK/V SSIO   | Serial Communications Clock for SPI (SCLK). I 2 C Mode Enable (V SSIO ). Connect this pin to Pin 6 (V SSIO ) to enable I 2 C mode.                                                                        |
| 3         | MOSI/SDA      | Main Output, Subordinate Input for SPI (MOSI). Serial Data for I 2 C (SDA).                                                                                                                               |
| 4         | MISO/ASEL     | Main Input, Subordinate Output for SPI (MISO). Alternate I 2 C Address Select for I 2 C (ASEL).                                                                                                           |
| 5         | V DDIO        | Digital Interface Supply Voltage.                                                                                                                                                                         |
| 6         | V SSIO        | Digital Ground.                                                                                                                                                                                           |
| 7         | RESERVED      | Reserved. This pin can be connected to ground or left open.                                                                                                                                               |
| 8 9       | V 1P8DIG V SS | Digital Supply. This pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to this pin externally. Analog Ground.                                                        |
| 10        | V 1P8ANA      | Analog Supply. This pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to this pin externally.                                                                        |
| 11        | V SUPPLY      | Supply Voltage. When V SUPPLY equals 2.25 V to 3.6 V, V SUPPLY enables the internal LDO regulators to generate V 1P8DIG and V 1P8ANA For V SUPPLY = V SS , V 1P8DIG and V 1P8ANA are externally supplied. |
| 12        | INT1          | Interrupt Pin 1.                                                                                                                                                                                          |
| 13        | INT2          | Interrupt Pin 2.                                                                                                                                                                                          |
| 14        | DRDY          | Data Ready Pin.                                                                                                                                                                                           |

## TYPICAL PERFORMANCE CHARACTERISTICS

All figures include data for multiple devices and multiple lots, and they were taken in the ±2 g range and T A = 25°C, unless otherwise noted. For Figure 52, the ODR is derived from a main clock, with a frequency of 1.024 MHz and ±1.4% device to device variation (similar to ODR device to device variation). For a given device, however, clock frequency variation over the temperature range (-40°C to +125°C) is no more than ±1.2%, guaranteed by design.

<!-- image -->

Figure 8. ADXL354 Frequency Response for X-Axis

<!-- image -->

Figure 9. ADXL354 Frequency Response for Y-Axis

<!-- image -->

Figure 10. ADXL354 Frequency Response for Z-Axis

<!-- image -->

Figure 11. ADXL355 Frequency Response for X-Axis at 4 kHz ODR

Figure 12. ADXL355 Frequency Response for Y-Axis at 4 kHz ODR

<!-- image -->

Figure 13. ADXL355 Frequency Response for Z-Axis at 4 kHz ODR

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. ADXL354 Zero g Offset Normalized Relative to 25°C vs. Temperature, X-Axis

<!-- image -->

Figure 15. ADXL354 Zero g Offset Normalized Relative to 25°C vs. Temperature, Y-Axis

<!-- image -->

Figure 16. ADXL354 Zero g Offset Normalized Relative to 25°C vs. Temperature, Z-Axis

<!-- image -->

Figure 17. ADXL354 Sensitivity Normalized Relative to 25°C vs. Temperature X-Axis

Figure 18. ADXL354 Sensitivity Normalized Relative to 25°C vs. Temperature Y-Axis

<!-- image -->

Figure 19. ADXL354 Sensitivity Normalized Relative to 25°C vs. Temperature Z-Axis

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 20. ADXL354 Zero g Offset Histogram at 25°C, X-Axis

<!-- image -->

Figure 21. ADXL354 Zero g Offset Histogram at 25°C, Y-Axis

<!-- image -->

Figure 22. ADXL354 Zero g Offset Histogram at 25°C, Z-Axis

<!-- image -->

Figure 23. ADXL354 Sensitivity Histogram at 25°C, X-Axis

Figure 24. ADXL354 Sensitivity Histogram at 25°C, Y-Axis

<!-- image -->

Figure 25. ADXL354 Sensitivity Histogram at 25°C, Z-Axis

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 26. ADXL354 VRE, X-Axis Offset from -1 g, ±2 g Range, X-Axis Orientation = -1 g

<!-- image -->

Figure 27. ADXL354 VRE, Y-Axis Offset from +1 g, ±2 g Range, Y-Axis Orientation = +1 g

<!-- image -->

Figure 28. ADXL354 VRE, Z-Axis Offset from +1 g, ±2 g Range, Z-Axis Orientation = +1 g

<!-- image -->

Figure 29. ADXL354 VRE, X-Axis Offset from -1 g, ±8 g Range, X-Axis Orientation = -1 g

Figure 30. ADXL354 VRE, Y-Axis Offset from +1 g, ±8 g Range, Y-Axis Orientation = +1 g

<!-- image -->

Figure 31. ADXL354 VRE, Z-Axis Offset from +1 g, ±8 g Range, Z-Axis Orientation = +1 g

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 32. ADXL355 Zero g Offset Normalized Relative to 25°C vs. Temperature, X-Axis

<!-- image -->

Figure 33. ADXL355 Zero g Offset Normalized Relative to 25°C vs. Temperature, Y-Axis

<!-- image -->

Figure 34. ADXL355 Zero g Offset Normalized Relative to 25°C vs. Temperature, Z-Axis

<!-- image -->

Figure 35. ADXL355 Sensitivity Normalized Relative to 25°C vs. Temperature X-Axis

Figure 36. ADXL355 Sensitivity Normalized Relative to 25°C vs. Temperature Y-Axis

<!-- image -->

Figure 37. ADXL355 Sensitivity Normalized Relative to 25°C vs. Temperature Z-Axis

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 38. ADXL355 Zero g Offset Histogram at 25°C, X-Axis

<!-- image -->

Figure 39. ADXL355 Zero g Offset Histogram at 25°C, Y-Axis

<!-- image -->

Figure 40. ADXL355 Zero g Offset Histogram at 25°C, Z-Axis

<!-- image -->

Figure 41. ADXL355 Sensitivity Histogram at 25°C, X-Axis

Figure 42. ADXL355 Sensitivity Histogram at 25°C, Y-Axis

<!-- image -->

Figure 43. ADXL355 Sensitivity Histogram at 25°C, Z-Axis

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 44. ADXL355 VRE, X-Axis Offset from -1 g, ±2 g Range, X-Axis Orientation = -1 g

<!-- image -->

Figure 45. ADXL355 VRE, Y-Axis Offset from +1 g, ±2 g Range, Y-Axis Orientation = +1 g

<!-- image -->

Figure 46. ADXL355 VRE, Z-Axis Offset from +1 g, ±2 g Range, Z-Axis Orientation = +1 g

<!-- image -->

Figure 47. ADXL355 VRE, X-Axis Offset from -1 g, ±8 g Range, X-Axis Orientation = -1 g

Figure 48. ADXL355 VRE, Y-Axis Offset from +1 g, ±8 g Range, Y-Axis Orientation = +1 g

<!-- image -->

Figure 49. ADXL355 VRE, Z-Axis Offset from +1 g, ±8 g Range, Z-Axis Orientation = +1 g

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 50. ADXL354 Temperature Sensor Output and Linear Offset vs. Temperature

<!-- image -->

Figure 51. ADXL354 Total Supply Current, 3.3 V

<!-- image -->

Figure 52. ADXL355 Output Data Rate (Internal Clock) Histogram

Figure 53. ADXL355 Temperature Sensor Output and Linear Offset vs. Temperature

<!-- image -->

Figure 54. ADXL355 Total Supply Current, 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## ROOT ALLAN VARIANCE (RAV) ADXL355 CHARACTERISTICS

All figures include data for multiple devices and multiple lots, and they were taken in the ±2 g range, unless otherwise noted.

<!-- image -->

Figure 55. ADXL355 RAV, X-Axis

Figure 56. ADXL355 RAV, Y-Axis

<!-- image -->

Figure 57. ADXL355 RAV, Z-Axis

<!-- image -->

## THEORY OF OPERATION

The ADXL354 is a complete 3-axis, ultralow noise and ultrastable offset microelectromechanical systems (MEMS) accelerometer with outputs ratiometric to the analog 1.8 V supply, V 1P8ANA . The ADXL355 adds three high resolution analog-to-digital converters (ADCs) that use the analog 1.8 V supply as a reference to provide digital outputs insensitive to the supply voltage. The ADXL354B is pin selectable for ±2 g or ±4 g full scale, the ADXL354C is pin selectable for ±2 g or ±8 g full scale, and the ADXL355 is programmable for ±2 g , ±4 g , or ±8 g full scale. The ADXL355 offers both SPI and I 2 C communications ports.

The micromachined, sensing elements are fully differential, comprising the lateral x-axis and y-axis sensors and the vertical, teeter totter z-axis sensors. The x-axis and y-axis sensors and the z-axis sensors go through separate signal paths that minimize offset drift and noise. The signal path is fully differential, except for a differential to single-ended conversion at the analog outputs of the ADXL354.

The analog accelerometer outputs of the ADXL354 are ratiometric to V 1P8ANA . Therefore, digitize them carefully. The temperature sensor output is not ratiometric. The X OUT , Y OUT , and Z OUT analog outputs are filtered internally with an antialiasing filter. These analog outputs also have an internal 32 kΩ series resistor that can be used with an external capacitor to set the bandwidth of the output.

The ADXL355 includes antialias filters before and after the high resolution Σ-Δ ADC. User-selectable output data rates and filter corners are provided. The temperature sensor is digitized with a 12-bit successive approximation register (SAR) ADC.

## APPLICATIONS INFORMATION

## ANALOG OUTPUT

Figure 58 shows the ADXL354 application circuit. The analog outputs (X OUT , Y OUT , and Z OUT ) are ratiometric to the 1.8 V analog voltage from the V 1P8ANA pin. V 1P8ANA can be powered with an on-chip LDO regulator that is powered from V SUPPLY . V 1P8ANA can also be supplied externally by forcing V SUPPLY to V SS , which disables the LDO regulator. Due to the ratiometric response, the analog output requires referencing to the V 1P8ANA supply when digitizing to achieve the inherent noise and offset performance of the ADXL354. The 0 g bias output is nominally equal to V 1P8ANA /2. The recommended option is to use the ADXL354 with a ratiometric ADC (for example, the Analog Devices, Inc., AD7682) and V 1P8ANA providing the voltage reference. This configuration results in self cancellation of errors due to minor supply variations.

The ADXL354 outputs two forms of filtering: internal anti-aliasing filtering with a cutoff frequency of approximately 1.5 kHz, and external filtering. The external filter uses a fixed, on-chip, 32 kΩ resistance in series with each output in conjunction with the external capacitors to implement the low-pass filter antialiasing and noise reduction prior to the external ADC. The antialias filter cutoff frequency must be significantly higher than the desired signal bandwidth. If the antialias filter corner is too low, ratiometricity can degrade where the signal attenuation is different from the reference attenuation.

## DIGITAL OUTPUT

Figure 59 shows the ADXL355 application circuit with the recommended bypass capacitors. The communications interface is either SPI or I 2 C (see the Serial Communications section for additional information).

The ADXL355 includes an internal configurable digital band-pass filter. Both the high-pass and low-pass poles of the filter are adjustable, as detailed in the Filter Settings Register section and Table 44. At power-up, the default conditions for the filters are as follows:

- High-pass filter (HPF) = dc (off)
- Low-pass filter (LPF) = 1000 Hz
- Output data rate = 4000 Hz

Figure 58. ADXL354 Application Circuit

<!-- image -->

Figure 59. ADXL355 Application Circuit

<!-- image -->

## APPLICATIONS INFORMATION

## AXES OF ACCELERATION SENSITIVITY

Figure 60 shows the axes of acceleration sensitivity. Note that the output voltage increases when accelerated along the sensitive axis.

Figure 60. Axes of Acceleration Sensitivity

<!-- image -->

## POWER SEQUENCING

There are two methods for applying power to the device. Typically, internal LDO regulators generate the 1.8 V power for the analog and digital supplies, V 1P8ANA and V 1P8DIG , respectively. Optionally, the internal LDO regulators can be disabled and V 1P8ANA and V1P8DIG are driven by external 1.8 V supplies.

When using the internal LDO regulators, connect V SUPPLY to a voltage source between 2.25 V and 3.6 V. In this case, the recommended power sequence is to apply power to V DDIO , followed by applying power to V SUPPLY approximately 10 µs later. If necessary, VSUPPLY and V DDIO can be powered from the same voltage source, so that both are powered at the same time. However, V SUPPLY cannot be powered before V DDIO .

To disable the internal LDO regulators, tie V SUPPLY to ground and use external 1.8 V supplies to power V 1P8ANA and V 1P8DIG . V 1P8ANA and V 1P8DIG must have the same voltage level. The maximum acceptable tolerance between the external V 1P8ANA and V 1P8DIG voltage levels is 50 mV. In the case of bypassing the LDO regulators, the recommended power sequence is to apply power to V DDIO , followed by applying power to V 1P8DIG approximately 10 µs later, and then applying power to V 1P8ANA approximately 10 µs later. If necessary, V 1P8DIG and V DDIO can be powered from the same external 1.8 V supply, which can also be tied to V 1P8ANA with proper isolation, so that all are powered at the same time. In this case, proper decoupling and low frequency isolation are important to maintain the noise performance of the sensor.

When power cycling the ADXL354/ADXL355, it is highly recommended to fully discharge the device to ground level (V SUPPLY and VDDIO = 0 V), for at least 200 ms, on each power cycle. It is also highly recommended to help the internal LDOs discharge properly by adding external resistors of approximately 100 kΩ between the LDO outputs (V 1P8ANA and V 1P8DIG ) and ground (0 V), especially when power cycling at temperatures below -20°C. See the recommended application circuits shown in Figure 58 and Figure 59 for reference. Not adhering to these power cycling recommendations can result on lost communications and/or erroneous output data.

## POWER SUPPLY DESCRIPTION

The ADXL354/ADXL355 have four different power supply domains: VSUPPLY , V 1P8ANA , V 1P8DIG , and V DDIO . The internal analog and digital circuitry operates at 1.8 V nominal.

## VSUPPLY

VSUPPLY is 2.25 V to 3.6 V, which is the input range to the two LDO regulators that generate the nominal 1.8 V outputs for V 1P8ANA and V1P8DIG . Connect V SUPPLY to V SS to disable the LDO regulators, which allows driving V 1P8ANA and V 1P8DIG from an external source.

## V1P8ANA

All sensor and analog signal processing circuitry operates in this domain. Offset and sensitivity of the analog output ADXL354 are ratiometric to this supply voltage. When using external ADCs, use V1P8ANA as the reference voltage The ADXL354 includes ADCs that are ratiometric to V 1P8ANA , thereby rendering the offset and sensitivity of the digital output ADXL354 insensitive to the value of V1P8ANA . V 1P8ANA can be an input or an output as defined by the state of the V SUPPLY voltage.

## V1P8DIG

V1P8DIG is the supply voltage for the internal logic circuitry. A separate LDO regulator decouples the digital supply noise from the analog signal path. V 1P8ANA can be an input or an output as defined by the state of the V SUPPLY voltage. If driven externally, V 1P8DIG must be the same voltage as the V 1P8ANA voltage.

## VDDIO

The V DDIO value determines the logic high levels. On the analog output ADXL354, V DDIO sets the logic high level for the self test pins, ST1 and ST2, as well as the \s\up5(\f(,STBY)) pin. On the digital output ADXL355, V DDIO sets the logic high level for communications interface ports, as well as the interrupt and DRDY outputs.

The LDO regulators are operational when V SUPPLY is between 2.25 V and 3.6 V. V 1P8ANA and V 1P8DIG are the regulator outputs in this mode. Alternatively, when tying V SUPPLY to V SS , V 1P8ANA and V1P8DIG are supply voltage inputs with a 1.62 V to 1.98 V range.

## OVERRANGE PROTECTION

The maximum nominal measurement range for the ADXL354/ ADXL355 is ±8 g . Do not subject the device to (or use the device in) applications or assembly processes that reasonably expect to exceed this level of acceleration, particularly for long durations or on an ongoing basis. In such applications, the ADXL354/ADXL355 offer higher g ranges that may be better suited for such applications.

## APPLICATIONS INFORMATION

To avoid electrostatic capture of the proof mass when the accelerometer is subject to input acceleration beyond its full-scale range, all sensor drive clocks turn off for 0.5 ms. In the ±2 g range setting, the overrange protection activates for input signals beyond approximately ±8 g (±25%), and for the ±4 g and ±8 g range settings, the threshold corresponds to about ±16 g (±25%).

When overrange protection occurs, the X OUT , Y OUT , and Z OUT pins on the ADXL354 begin to drive to midscale, whereas the ADXL355 floats toward zero, as shown in Figure 61.

Figure 61. ADXL355 Overrange Behavior, ODR = 4 kHz

<!-- image -->

## MECHANICAL HEADROOM VS. FREQUENCY

The mechanical headroom defines the level of acceleration at which the proof mass makes contact with the mechanical stops. Repetitive contact can introduce both operational and reliability problems. Figure 62 and Figure 63 provide the mechanical headroom over frequency for the ADXL354/ADXL355.

The ADXL354 and ADXL355 are not suitable for applications where the accelerometer is exposed to vibration operation conditions that exceed the limits described in the Absolute Maximum Ratings section.

Figure 62. X-Axis and Y-Axis Mechanical Headroom vs. Frequency for ADXL354/ADXL355

<!-- image -->

Figure 63. Z-Axis Mechanical Headroom vs. Frequency Comparison for ADXL354/ADXL355

<!-- image -->

## SELF TEST

The ADXL354 and ADXL355 incorporate a self test feature that effectively tests their mechanical and electronic systems simultaneously. Enabling self test stimulates the sensor electrostatically to produce an output corresponding to the test signal applied as well as the mechanical force exerted.

In the ADXL354, drive the ST1 pin to V DDIO to invoke self test mode. Then, by driving the ST2 pin to V DDIO , the ADXL354 applies an electrostatic force to the mechanical sensor and induces a change in output in response to the force. The self test delta (or response) is the difference in output voltages between when ST2 is high vs. ST2 is low, while ST1 is asserted. After the self test measurement is complete, bring both pins low to resume normal operation.

The self test operation is similar in the ADXL355, except ST1 and ST2 can be accessed through the SELF\_TEST register (Register 0x2E).

The self test feature rejects externally applied acceleration and only responds to the self test force, which allows an accurate measurement of the self test, even in the presence of external mechanical noise. When the self test feature is not used, both ST1 and ST2 must be kept low.

## FILTER

The ADXL354/ADXL355 use an analog, low-pass, antialiasing filter to reduce out of band noise and to limit bandwidth. The ADXL355 provides further digital filtering options to maintain optimal noise performance at various ODRs.

The analog, low-pass antialiasing filter in the ADXL354/ADXL355 provides a fixed 3 dB bandwidth of approximately 1.5 kHz, the frequency at which the voltage output response is attenuated by approximately 30%. The shape of the filter response in the frequency domain is that of a sinc filter. While the analog antialiasing filter attenuates the output response around and above its cutoff

## APPLICATIONS INFORMATION

frequency, the MEMS sensor has a resonance at 2.4 kHz and mechanically amplifies the output response at around 1 kHz and above. These competing trends are apparent in the overall transfer function of the ADXL354, as shown in Figure 8 to Figure 10. Therefore, the overall 3 dB bandwidth of the ADXL354 is 1.9 kHz.

The ADXL354 x-axis, y-axis, and z-axis analog outputs include an amplifier followed by a series 32 kΩ resistor and output to the X OUT , the Y OUT , and the Z OUT pins, respectively.

The ADXL355 provides an internal 20-bit, Σ-Δ ADC to digitize the filtered analog signal. Additional digital filtering (beyond the analog, low-pass, antialiasing filter) consists of a low-pass digital decimation filter and a bypassable high-pass filter that supports output data rates between 4 kHz and 3.9 Hz. The decimation filter consists of two stages. The first stage is fixed decimation with a 4 kHz ODR and a low-pass filter cutoff (3 dB) at about 1 kHz. A variable second stage decimation filter is used for the 2 kHz output data rate and below (it is bypassed for 4 kHz ODR). Figure 64 shows the low-pass filter response with a 1 kHz corner (4 kHz ODR) for the ADXL355. Note that Figure 64 does not include the fixed frequency analog, low-pass, antialiasing filter with a fixed 3 dB bandwidth of approximately 1.5 kHz.

The ADXL355 pass band of the signal path relates to the combined filter responses, including the analog filter previously described, and the digital decimation filter/ODR setting. Table 10 shows the delay associated with the decimation filter for each setting and provides the attenuation at the ODR/4 corner.

Figure 64. ADXL355 Digital LPF Response for 4 kHz ODR

<!-- image -->

The ADXL355 also includes an optional digital high-pass filter with a programmable corner frequency. By default, the high-pass filter is disabled. The high-pass corner frequency, where the output is attenuated by 50%, is related to the ODR, and the HPF\_CORNER

Table 10. Digital Filter Group Delay and Profile

|                     | Delay        | Delay     | Attenuation             | Attenuation             |
|---------------------|--------------|-----------|-------------------------|-------------------------|
| Programmed ODR (Hz) | ODR (Cycles) | Time (ms) | Decimator at ODR/4 (dB) | Full Path at ODR/4 (dB) |
| 4000                | 2.52         | 0.63      | -3.44                   | -3.63                   |
| 4000/2 = 2000       | 2.00         | 1.00      | -2.21                   | -2.26                   |

setting in the filter register (Register 0x28, Bits[6:4]). Table 11 shows the HPF\_CORNER response. Figure 65 and Figure 66 show the simulated high-pass filter pass-band and delay responses for a 9.88 Hz cutoff.

Figure 65. High-Pass Filter Pass-Band Response for a 4 kHz ODR and an HPF\_CORNER Setting of 001 (Register 0x28, Bits[6:4])

<!-- image -->

Figure 66. High-Pass Filter Delay Response for a 4 kHz ODR and an HPF\_CORNER Setting of 001 (Register 0x28, Bits[6:4])

<!-- image -->

The ADXL355 also includes an interpolation filter after the decimation filters that produces oversampled/upconverted data and provides an external synchronization option. See the Data Synchronization section for more details. Table 12 shows the delay and attenuation relative to the programmed ODR.

Group delay is the digital filter delay from the input to the ADC until data is available at the interface (see the Filter section). This delay is the largest component of the total delay from sensor to serial interface.

## APPLICATIONS INFORMATION

Table 10. Digital Filter Group Delay and Profile (Continued)

|                     | Delay        | Delay     | Attenuation             | Attenuation             |
|---------------------|--------------|-----------|-------------------------|-------------------------|
| Programmed ODR (Hz) | ODR (Cycles) | Time (ms) | Decimator at ODR/4 (dB) | Full Path at ODR/4 (dB) |
| 4000/4 = 1000       | 1.78         | 1.78      | -1.92                   | -1.93                   |
| 4000/8 = 500        | 1.63         | 3.26      | -1.83                   | -1.83                   |
| 4000/16 = 250       | 1.57         | 6.27      | -1.83                   | -1.83                   |
| 4000/32 = 125       | 1.54         | 12.34     | -1.83                   | -1.83                   |
| 4000/64 = 62.5      | 1.51         | 24.18     | -1.83                   | -1.83                   |
| 4000/128 ≈ 31       | 1.49         | 47.59     | -1.83                   | -1.83                   |
| 4000/256 ≈ 16       | 1.50         | 96.25     | -1.83                   | -1.83                   |
| 4000/512 ≈ 8        | 1.50         | 189.58    | -1.83                   | -1.83                   |
| 4000/1024 ≈ 4       | 1.50         | 384.31    | -1.83                   | -1.83                   |

## Table 11. Digital High-Pass Filter Response

|   HPF_CORNER Register Setting (Register 0x28, Bits[6:4]) | HPF_CORNER Frequency, -3 dB Point Relative to ODR Setting   | -3 dB at 4 kHz ODR (Hz)   |
|----------------------------------------------------------|-------------------------------------------------------------|---------------------------|
|                                                      000 | Not applicable, no high-pass filter enabled                 | Off                       |
|                                                      001 | 24.7 × 10 -4 × ODR                                          | 9.88                      |
|                                                      010 | 6.2084 × 10 -4 × ODR                                        | 2.48                      |
|                                                      011 | 1.5545 × 10 -4 × ODR                                        | 0.62                      |
|                                                      100 | 0.3862 × 10 -4 × ODR                                        | 0.1545                    |
|                                                      101 | 0.0954 × 10 -4 × ODR                                        | 0.03816                   |
|                                                      110 | 0.0238 × 10 -4 × ODR                                        | 0.00952                   |

Table 12. Combined Digital Interpolation Filter and Decimation Filter Response

| Interpolator Data Rate Resolution Relative to 64 × ODR (Hz)   |   Combined Interpolator/ Decimator Delay (ODR Cycles) |   Combined Interpolator/ Decimator Delay (ms) |   Combined Interpolator/Decimator Output Attenuation at ODR/4 (dB) |
|---------------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------|--------------------------------------------------------------------|
| 64 × 4000 = 256,000                                           |                                               3.51661 |                                          0.88 |                                                              -6.18 |
| 64 × 2000 = 128,000                                           |                                               3.0126  |                                          1.51 |                                                              -4.93 |
| 64 × 1000 = 64,000                                            |                                               2.752   |                                          2.75 |                                                              -4.66 |
| 64 × 500 = 32,000                                             |                                               2.6346  |                                          5.27 |                                                              -4.58 |
| 64 × 250 = 16,000                                             |                                               2.5773  |                                         10.31 |                                                              -4.55 |
| 64 × 125 = 8000                                               |                                               2.5473  |                                         20.38 |                                                              -4.55 |
| 64 × 62.5 = 4000                                              |                                               2.53257 |                                         40.52 |                                                              -4.55 |
| 64 × 31.25 = 2000                                             |                                               2.52452 |                                         80.78 |                                                              -4.55 |
| 64 × 15.625 = 1000                                            |                                               2.52045 |                                        161.31 |                                                              -4.55 |
| 64 × 7.8125 = 500                                             |                                               2.5194  |                                        322.48 |                                                              -4.55 |
| 64 × 3.90625 = 250                                            |                                               2.51714 |                                        644.39 |                                                              -4.55 |

## SERIAL COMMUNICATIONS

The 4-wire serial interface communicates in either the SPI or I 2 C protocol. The interface affectively autodetects the format being used, requiring no configuration control to select the format.

The ADXL355 multifunction pins are referred to by a single function of the pin, for example, CS, when only that function is relevant.

## SPI PROTOCOL

Wire the ADXL355 for SPI communication as shown in the connection diagram in Figure 67. The SPI protocol timing is shown in Figure 69 to Figure 72. The timing scheme follows the clock polarity (CPOL) = 0 and clock phase (CPHA) = 0. The SPI clock speed ranges from 100 kHz to 10 MHz.

<!-- image -->

Figure 67. 4-Wire SPI Connection

<!-- image -->

Figure 69. SPI Timing Diagram-Single-Byte Read

<!-- image -->

Figure 70. SPI Timing Diagram-Single-Byte Write

Figure 71. SPI Timing Diagram-Multibyte Read

<!-- image -->

Figure 72. SPI Timing Diagram-Multibyte Write

<!-- image -->

## SPI BUS SHARING

Use a gated buffer on the SCLK line for the ADXL355 device to achieve the ultralow noise performance and possibly offset shift when the ADXL355 must share a SPI bus with another subordinate device. This gated SCLK allows the clock signal through only when the chip select (CS) line is low. See Figure 68 for the example circuit that provides this type of protection.

Figure 68. SCLK Protection Example

<!-- image -->

## SERIAL COMMUNICATIONS

## I 2 C PROTOCOL

The ADXL355 supports point to point I 2 C communication. However, when sharing an SDA bus, the ADXL355 may prevent communication with other devices on that bus. If at any point, even when the ADXL355 is not being addressed, the 0x3A and 0x3B bytes (when the ADXL355 device address is set to 0x1D), or the 0xA6 and 0xA7 bytes (when the ADXL355 device address is set to 0x53) are transmitted on the SDA bus, the ADXL355 responds with an acknowledge bit and pulls the SDA line down. For example, this response can occur when reading or writing the data bytes (0x3A/0x3B or 0xA6/0xA7) to another sensor on the bus. When the ADXL355 pulls the SDA line down, communication with other devices on the bus may be interrupted. To resolve this interruption, the ADXL355 must be connected to a separate SDA bus, or the CS/SCL pin must be switched high when communication with the ADXL355 is not desired (it is normally grounded).

The ADXL355 supports standard (100 kHz), fast (up to 1 MHz) and high speed (up to 3.4 MHz) data transfer modes when the bus parameters in Table 4 are met. There is no minimum SCL frequency, with the exception that, when reading data, the clock must be fast enough to read an entire sample set before new data overwrites it. Single-byte or multiple byte reads/writes are supported. With the MISO/ASEL pin low, the I 2 C address for the device is 0x1D and an alternate I 2 C address of 0x53 can be chosen by pulling the MISO/ASEL pin high.

There are no internal pull-up or pull-down resistors for any unused pins. Therefore, there is no known state or default state for the pins if left floating or unconnected. It is required that SCLK/V SSIO be connected to ground when communicating to the ADXL355 using I 2 C.

Due to communication speed limitations, the maximum output data rate when using the 400 kHz I 2 C mode is 800 Hz, and it scales linearly with a change in the I 2 C communication speed. For example, using I 2 C at 100 kHz limits the maximum ODR to 200 Hz. Operation at an output data rate above the recommended maximum may result in an undesirable effect on the acceleration data, including missing samples or additional noise.

Figure 73 to Figure 75 detail the I 2 C protocol timing. The I 2 C interface can be used on most buses operating in I 2 C standard mode (100 kHz), fast mode (400 kHz), fast mode plus (1 MHz), and high speed mode (3.4 MHz). The ADXL355 I 2 C device ID is as follows:

- MISO/ASEL pin = 0, device address = 0x1D
- MISO/ASEL pin = 1, device address = 0x53

## READING ACCELERATION OR TEMPERATURE DATA FROM THE INTERFACE

Acceleration data is left justified and has a register address order of most significant data to least significant data, which allows the user to use multibyte transfers and to take only as much data as required-8 bits, 16 bits, or 20 bits, plus the marker. Temperature data is 12 bits unsigned, right justified. The ADXL355 temperature value is split over two bytes, but is not double buffered, meaning the value can update between readings of the two registers. The data in XDATA, YDATA, and ZDATA is always the most recent available. It is not guaranteed that XDATA, YDATA, and ZDATA form a set corresponding to one sample point in time. The routine used to retrieve the data from the device controls this data set continuity. If data transfers are initiated when the DATA\_RDY bit goes high and completes in a time approximately equal to 1/ODR, XDATA, YDATA, and ZDATA apply to the same data set.

For multibyte read or write transactions through either serial interface, the internal register address auto-increments. When the top of the register address range, 0x3FF, is reached, the auto-increment stops and does not wrap back to Address 0x00.

The address auto-increment function disables when the FIFO address is used, so that data can be read continuously from the FIFO as a multibyte transaction. In cases where the starting address of a multibyte transaction is less than the FIFO address, the address auto-increments until reaching the FIFO address, and then stops at the FIFO address.

<!-- image -->

## SERIAL COMMUNICATIONS

Figure 75. I 2 C Timing Diagram-Multibyte Write

<!-- image -->

## FIFO

The FIFO operates in a stream mode. That is, when the FIFO overruns, new data overwrites the oldest data in the FIFO. A read from the FIFO address guarantees that the three bytes associated with the acceleration measurement on an axis all pertain to the same measurement. The FIFO never overflows, and the data is always taken out in sets (multiples of three data points).

There are 96 21-bit locations in the FIFO. Each location contains 20 bits of data and a marker bit for the x-axis data. A single-byte read from the FIFO address pops one location from the FIFO. A multibyte read to the FIFO location pops the FIFO on the read of the first byte and every third byte read thereafter.

Figure 76 shows the organization of the data in the FIFO. The acceleration data is twos complement, 20-bit data. The FIFO control

Figure 76. FIFO Data Organization

<!-- image -->

logic inserts the two virtual bits (0b00) between the data bits and the empty indicator bit. Bit 1 indicates that an attempt was made to read an empty FIFO, and that the data is not valid acceleration data. Bit 0 is a marker bit to identify the x-axis, which allows a user to verify that the FIFO data was correctly read. An acceleration data point for a given axis occupies one FIFO location. The read pointer, RD\_PTR, points to the oldest stored data that was not read already from the interface (see Figure 76). There are no physical x-acceleration, y-acceleration, or z-acceleration data registers. The data read from data registers (Register 0x08 to Register 0x10) also comes directly from the most recent data set in the FIFO, which is pointed to by the z pointer, Z\_PTR, (see Figure 76).

## INTERRUPTS

The status register (Register 0x04) contains five individual bits, four of which can be mapped to the INT1 pin, the INT2 pin, or both. The polarity of the interrupt, active high or active low, is also selectable via the INT\_POL bit in the range (Register 0x2C) register. In general, the status register clears when read, but this is not the case if the condition that caused the interrupt persists after the read of the register. The definition of persist varies slightly in each case, but it is described in the DATA\_RDY, DRDY Pin, FIFO\_FULL, FIFO\_OVR, and Activity sections. The DRDY pin is similar to an interrupt pins (INTx) but clears differently. This case is also described.

## DATA\_RDY

The DATA\_RDY bit is set when new acceleration data is available to the interface and clears on a read of the status register. This bit is not set again until acceleration data that is newer than the status register read is available.

Special logic on the clearing of the DATA\_RDY bit covers the corner case where new data arrives during the read of the status register. In this case, the data ready condition may be missed completely. This logic results in a delay of the clearing of DATA\_RDY of up to four 512 kHz cycles.

## DRDY PIN

The DRDY pin is not a status register bit. DRDY instead behaves similar to an unmaskable interrupt. DRDY is set when new acceleration data is available to the interface. DRDY clears on a read of the FIFO, on a read of XDATA, YDATA, or ZDATA, or by an autoclear function that occurs approximately halfway between output acceleration data sets.

DRDY is always active high. The INT\_POL bit does not affect DRDY. In external synchronization modes (EXT\_SYNC = 01, EXT\_SYNC = 10), the first few DRDY pulses after initial synchronization can be lost or corrupted. The length of this potential corruption is equal to or less than the group delay. Therefore, the samples within one group delay is lost or corrupted after the first synchronization signal. Depending on the decimation setting and interpolation setting (see Table 12), between one and three samples after the first synchronization pulse is lost, provided that all the restrictions set in the External Synchronization and Interpolation section is met.

## FIFO\_FULL

The FIFO\_FULL bit is set when the entries in the FIFO are equal to the setting of the FIFO\_SAMPLES bits. FIFO\_FULL clears as follows:

- If the number of entries in the FIFO is less than the number of samples indicated by the FIFO\_SAMPLES bits, which is only the case if sufficient data is read from the FIFO.
- On a read of the status register, but only when the entries in the FIFO are less than the FIFO\_SAMPLES bits.

## FIFO\_OVR

The FIFO\_OVR bit is set when the FIFO is so far overrange that data is lost. The specified size of the FIFO is 96 locations. The FIFO\_OVR bit is set only when there is an attempt to write past this 96-location limit.

A read of the status register clears FIFO\_OVR. FIFO\_OVR is not set again until data is lost subsequent to this status register read.

## ACTIVITY

The activity bit (Register 0x04, Bit 3) is set when the measured acceleration on any axis is above the value set in the ACT\_ THRESH bits for ACT\_COUNT consecutive measurements. An overthreshold condition can shift from one axis to another on successive measurements and is still counted toward the consecutive ACT\_COUNT count.

A read of the status register clears the activity bit (Register 0x04, Bit 3), but the bit sets again at the end of the next measurement if the activity bit (Register 0x04, Bit 3) conditions are still satisfied.

## NVM\_BUSY

The NVM\_BUSY bit indicates that the nonvolatile memory (NVM) controller is busy and, therefore, the NVM cannot be accessed to read or write. The interrupt functionality requires the NVM\_BUSY bit to be cleared to function.

A status register read that occurs after the NVM controller is no longer busy clears NVM\_BUSY.

## EXTERNAL SYNCHRONIZATION AND INTERPOLATION

There are four possible synchronization options for the ADXL355, three of which are shown in Figure 77 to Figure 79. For clarity, the clock frequencies and delays are drawn to scale. The labels in Figure 77 to Figure 79 are defined as follows:

- Internal ODR is the alignment of the decimated output data based on the internal clock.
- ADC modulator clock shows the internal main clock rate.
- DRDY is an output indicator signaling a sample is ready.

The four possible synchronization options are as follows:

- No external synchronization (internal clocks used)
- Synchronization with an external synchronization signal and internal clock, interpolation filter enabled
- Synchronization with external synchronization and clock signals, no interpolation filter
- Synchronization with external synchronization and clock signals, interpolation filter enabled

## INTERRUPTS

## EXT\_SYNC = 00, EXT\_CLK = 0-No External Synchronization or Interpolation

This is the default mode of operation for the device. The sensor runs on an internal ODR and an internal clock that is generated by an internal oscillator. The internal ODR serves as the synchronization controller, which generates the data. Register 0x28 is used to program the ODR. No external signals are required, and this mode is used typically when the external processor retrieves data from the device asynchronously and absolute synchronization to an external source is not required.

The device outputs DRDY (active high) to signal that a new sample is available, and data is retrieved from the real-time registers or the FIFO. The group delay is based on the decimation setting, as shown in Table 10. This mode is shown in Figure 77.

## EXT\_SYNC = 10, EXT\_CLK = 0-External Synchronization With Interpolation

Synchronization using interpolation filters and an external ODR clock is commonly used when the external processor can provide a synchronization signal that is asynchronous to the internal clock, SYNC, at the desired ODR. In this case, an interpolation filter provides additional time resolution of 64 times the programmed ODR (see Table 12). Synchronization with the interpolation filter enabled (EXT\_SYNC = 10) allows the sensor to operate on an internal clock and output data most closely associated with the SYNC rising edge.

The advantage of this mode is that data is available at an arbitrary user defined SYNC sample rate and is asynchronous to the internal clock oscillator. The maximum sample rate cannot exceed 4000 SPS. The disadvantage of this mode is that the group delay is increased, with increased attenuation at the band edge. Additionally, because there is a limit to the time resolution, there is some distortion related to the mismatch of the external synchronization relative to the internal clock oscillator. This mismatch degrades spectral performance. The group delay is based on the decimation setting and interpolation setting (see Table 12). Figure 78 schematically shows the timings in this mode, and Table 13 shows the delay between the SYNC signal (input) and DRDY (output).

Table 13. EXT\_SYNC = 10, DRDY Delay

| ODR_LPF   |   SYNC to DRDY Delay (Oscillator Cycles) |
|-----------|------------------------------------------|
| 0x0       |                                        8 |
| 0x1       |                                       10 |
| 0x2       |                                       14 |
| 0x3       |                                       22 |
| 0x4       |                                       38 |
| 0x5       |                                       70 |
| 0x6       |                                      134 |

| Table 13. EXT_SYNC = 10, DRDY Delay (Continued)   | Table 13. EXT_SYNC = 10, DRDY Delay (Continued)   |
|---------------------------------------------------|---------------------------------------------------|
| ODR_LPF                                           | SYNC to DRDY Delay (Oscillator Cycles)            |
| 0x7                                               | 262                                               |
| 0x8                                               | 1031                                              |
| 0x9                                               | 2054                                              |
| 0xA                                               | 4102                                              |

## EXT\_SYNC = 01, EXT\_CLK = 1-External Synchronization and External Clock, No Interpolation Filter

When configured for EXT\_SYNC = 01 and EXT\_CLK = 1 (sync register, see Table 47), the user must supply an external clock (enabled via the EXT\_CLK bit) at 1.024 MHz on the INT2 pin (Pin 13) and an external synchronization signal, SYNC, on the DRDY pin (Pin 14), as shown in Table 14. If configured in this mode and an external clock is not supplied, the device does not process any data and reading from the output results in null values. This mode is schematically shown in Figure 79.

Special restrictions when using this mode include the following:

- The external clock frequency on INT2 (Pin 13, see Table 14) must be 1.024 MHz.
- The pulse width of the SYNC signal must be at least 3.91 µs, which represents four cycles of the external clock (4 ÷ 1.024 MHz = ~3.91 µs).
- The phase of SYNC must meet an approximate 25 ns setup time to the external clock rising edge.

When using the EXT\_SYNC mode and without providing the SYNC signal, the device runs on its own internal ODR. Similarly, after external synchronization, the device continues to run synchronized to the last SYNC pulse it received, which means that EXT\_SYNC = 01 mode can be used with only a single synchronization pulse.

For more information about the lost sample in Figure 79, see the DRDY Pin section.

## EXT\_SYNC = 10, EXT\_CLK = 1-External Synchronization and External Clock, With Interpolation Filter

This mode can be used to run the device on an external clock and synchronization with an arbitrary sample rate set by the SYNC signal rate. Conditions for external SYNC and external clock signals is the same as EXT\_SYNC = 01, EXT\_CLK = 1 mode. The interpolation filter provides a frequency resolution related to the ODR (see Table 12). In this case, the data provided corresponds to the external SYNC signal, which can be greater than the set ODR and less than 4000 SPS, but the output pass band remains the same it was prior to the interpolation filter.

## INTERRUPTS

Table 14. Multiplexing of INT2 and DRDY

| Register or Bit Fields   | Register or Bit Fields   | Register or Bit Fields   | Pins     | Pins          | EXT_CLK EXT_SYNC, Bits[1:0] INT_MAP, Bits[7:4] INT2                                                                                                               |
|--------------------------|--------------------------|--------------------------|----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                          |                          |                          | (Pin 13) | DRDY (Pin 14) | EXT_CLK EXT_SYNC, Bits[1:0] INT_MAP, Bits[7:4] INT2                                                                                                               |
| 0                        | 00                       | 0000                     | Low      | DRDY          | Synchronization is to the internal clocks, and there is no external clock synchronization.                                                                        |
| 0                        | 00                       | Not 0000                 | INT2     | DRDY          | Synchronization is to the internal clocks, and there is no external clock synchronization.                                                                        |
| 1                        | 00                       | 0000                     | EXT_CLK  | DRDY          | Synchronization is to the internal clocks, and there is no external clock synchronization.                                                                        |
| 1                        | 00                       | Not 0000 1               | EXT_CLK  | DRDY          | Synchronization is to the internal clocks, and there is no external clock synchronization.                                                                        |
| 0                        | 01                       | 0000                     | DRDY 2   | SYNC          | These options reset the digital filters on every synchronization pulse and are not recommended.                                                                   |
| 0                        | 01 3                     | Not 0000                 | INT2     | SYNC          | These options reset the digital filters on every synchronization pulse and are not recommended.                                                                   |
| 1                        | 01 3                     | 0000                     | EXT_CLK  | SYNC          | External synchronization, no interpolation filter, and DRDY (active high) signals that data is ready. Data represents a sample point group delay earlier in time. |
| 1                        | 01 3                     | Not 0000 1               | EXT_CLK  | SYNC          | External synchronization, no interpolation filter, and DRDY (active high) signals that data is ready. Data represents a sample point group delay earlier in time. |
| 0                        | 10                       | 0000                     | DRDY 2   | SYNC          | External synchronization, interpolation filter, and DRDY (active high) signals that data is ready. Data sample group delay earlier in time.                       |
| 0                        | 10 3                     | Not 0000                 | INT2     | SYNC          | External synchronization, interpolation filter, and DRDY (active high) signals that data is ready. Data sample group delay earlier in time.                       |
| 1                        | 10 3                     | 0000                     | EXT_CLK  | SYNC          | External synchronization, interpolation filter, and DRDY (active high) signals that data is ready. Data sample group delay earlier in time.                       |
| 1                        | 10 3                     | Not 0000                 | EXT_CLK  | SYNC          | External synchronization, interpolation filter, and DRDY (active high) signals that data is ready. Data sample group delay earlier in time.                       |

Figure 79. EXT\_SYNC = 01, EXT\_CLK = 1, External Synchronization, External Clock, No Interpolation Filter

<!-- image -->

## ADXL355 REGISTER MAP

Note that while configuring the ADXL355 in an application, all configuration registers must be programmed before enabling measurement mode in the POWER\_CTL register. When the ADXL355 is in measurement mode, only the following configurations can change: the HPF\_CORNER bits in the filter register, the INT\_MAP register, the ST1 and ST2 bits in the SELF\_TEST register, and the reset register.

Table 15. ADXL355 Register Map

| Hex. Addr.   | Register Name   | Bit 7                  | Bit 6                  | Bit 5                  | Bit 4                  | Bit 3                  | Bit 2                   | Bit 1                   | Bit 0                   | Reset     | R/W   |
|--------------|-----------------|------------------------|------------------------|------------------------|------------------------|------------------------|-------------------------|-------------------------|-------------------------|-----------|-------|
| 0x00         | DEVID_AD        | DEVID_AD               | DEVID_AD               | DEVID_AD               | DEVID_AD               | DEVID_AD               | DEVID_AD                | DEVID_AD                | DEVID_AD                | 0xAD      | R     |
| 0x01         | DEVID_MST       | DEVID_MST              | DEVID_MST              | DEVID_MST              | DEVID_MST              | DEVID_MST              | DEVID_MST               | DEVID_MST               | DEVID_MST               | 0x1D      | R     |
| 0x02         | PARTID          | PARTID                 | PARTID                 | PARTID                 | PARTID                 | PARTID                 | PARTID                  | PARTID                  | PARTID                  | 0xED      | R     |
| 0x03         | REVID           | REVID                  | REVID                  | REVID                  | REVID                  | REVID                  | REVID                   | REVID                   | REVID                   | 0x01      | R     |
| 0x04         | Status          |                        | Reserved               | Reserved               | NVM_BUSY               | Activity               | FIFO_OVR                | FIFO_FULL               | DATA_RDY                | 0x00      | R     |
| 0x05         | FIFO_ENTRIES    | Reserved               |                        |                        |                        | FIFO_ENTRIES           | FIFO_ENTRIES            | FIFO_ENTRIES            | FIFO_ENTRIES            | 0x00      | R     |
| 0x06         | TEMP2           | Reserved               | Reserved               | Reserved               | Reserved               |                        | Temperature, Bits[11:8] | Temperature, Bits[11:8] | Temperature, Bits[11:8] | 0x00      | R     |
| 0x07         | TEMP1           | Temperature, Bits[7:0] | Temperature, Bits[7:0] | Temperature, Bits[7:0] | Temperature, Bits[7:0] | Temperature, Bits[7:0] | Temperature, Bits[7:0]  | Temperature, Bits[7:0]  | Temperature, Bits[7:0]  | 0x00      | R     |
| 0x08         | XDATA3          | XDATA, Bits[19:12]     | XDATA, Bits[19:12]     | XDATA, Bits[19:12]     | XDATA, Bits[19:12]     | XDATA, Bits[19:12]     | XDATA, Bits[19:12]      | XDATA, Bits[19:12]      | XDATA, Bits[19:12]      | 0x00      | R     |
| 0x09         | XDATA2          | XDATA,                 | XDATA,                 | XDATA,                 | XDATA,                 | Bits[11:4]             | Bits[11:4]              | Bits[11:4]              | Bits[11:4]              | 0x00      | R R   |
| 0x0A         | XDATA1          | XDATA, Bits[3:0]       | XDATA, Bits[3:0]       | XDATA, Bits[3:0]       | XDATA, Bits[3:0]       |                        | Reserved                | Reserved                | Reserved                | 0x00      |       |
| 0x0B         | YDATA3          | YDATA,                 | YDATA,                 | YDATA,                 | YDATA,                 | Bits[19:12]            | Bits[19:12]             | Bits[19:12]             | Bits[19:12]             | 0x00      | R     |
| 0x0C         | YDATA2          |                        |                        |                        |                        | YDATA, Bits[11:4]      | YDATA, Bits[11:4]       | YDATA, Bits[11:4]       | YDATA, Bits[11:4]       | 0x00      | R     |
| 0x0D         | YDATA1          | YDATA, Bits[3:0]       | YDATA, Bits[3:0]       | YDATA, Bits[3:0]       | YDATA, Bits[3:0]       |                        | Reserved                | Reserved                | Reserved                | 0x00      | R     |
| 0x0E         | ZDATA3          |                        |                        |                        |                        | ZDATA, Bits[19:12]     | ZDATA, Bits[19:12]      | ZDATA, Bits[19:12]      | ZDATA, Bits[19:12]      | 0x00      | R     |
| 0x0F         | ZDATA2          |                        |                        |                        |                        | ZDATA, Bits[11:4]      | ZDATA, Bits[11:4]       | ZDATA, Bits[11:4]       | ZDATA, Bits[11:4]       | 0x00      | R     |
| 0x10         | ZDATA1          | ZDATA, Bits[3:0]       | ZDATA, Bits[3:0]       | ZDATA, Bits[3:0]       | ZDATA, Bits[3:0]       | Reserved               | Reserved                | Reserved                | Reserved                | 0x00      | R     |
| 0x11         | FIFO_DATA       |                        |                        |                        |                        | FIFO_DATA              | FIFO_DATA               | FIFO_DATA               | FIFO_DATA               | 0x00      | R     |
| 0x1E         | OFFSET_X_H      |                        |                        |                        |                        | OFFSET_X, Bits[15:8]   | OFFSET_X, Bits[15:8]    | OFFSET_X, Bits[15:8]    | OFFSET_X, Bits[15:8]    | 0x00      | R/W   |
| 0x1F         | OFFSET_X_L      |                        |                        |                        |                        | OFFSET_X, Bits[7:0]    | OFFSET_X, Bits[7:0]     | OFFSET_X, Bits[7:0]     | OFFSET_X, Bits[7:0]     | 0x00      | R/W   |
| 0x20         | OFFSET_Y_H      |                        |                        |                        |                        | OFFSET_Y, Bits[15:8]   | OFFSET_Y, Bits[15:8]    | OFFSET_Y, Bits[15:8]    | OFFSET_Y, Bits[15:8]    | 0x00      | R/W   |
| 0x21         | OFFSET_Y_L      |                        |                        |                        |                        | OFFSET_Y, Bits[7:0]    | OFFSET_Y, Bits[7:0]     | OFFSET_Y, Bits[7:0]     | OFFSET_Y, Bits[7:0]     | 0x00      | R/W   |
| 0x22         | OFFSET_Z_H      |                        |                        |                        |                        | OFFSET_Z, Bits[15:8]   | OFFSET_Z, Bits[15:8]    | OFFSET_Z, Bits[15:8]    | OFFSET_Z, Bits[15:8]    | 0x00      | R/W   |
| 0x23         | OFFSET_Z_L      |                        |                        |                        |                        | OFFSET_Z, Bits[7:0]    | OFFSET_Z, Bits[7:0]     | OFFSET_Z, Bits[7:0]     | OFFSET_Z, Bits[7:0]     | 0x00      | R/W   |
| 0x24         | ACT_EN          | Reserved               | Reserved               | Reserved               | Reserved               | ACT_Z                  | ACT_Z                   | ACT_Z                   | ACT_Z                   | 0x00      | R/W   |
|              | ACT_THRESH_H    |                        |                        |                        |                        |                        |                         | ACT_Y                   | ACT_X                   | 0x00      | R/W   |
| 0x25         | ACT_THRESH_L    | ACT_THRESH, Bits[15:8] | ACT_THRESH, Bits[15:8] | ACT_THRESH, Bits[15:8] | ACT_THRESH,            | Bits[7:0]              | ACT_THRESH, Bits[15:8]  | ACT_THRESH, Bits[15:8]  | ACT_THRESH, Bits[15:8]  |           | R/W   |
| 0x26 0x27    | ACT_COUNT       |                        |                        |                        |                        | ACT_COUNT              |                         |                         |                         | 0x00 0x01 | R/W   |
| 0x28         | Filter          | Reserved               |                        | HPF_CORNER             |                        | ODR_LPF                | ODR_LPF                 | ODR_LPF                 | ODR_LPF                 | 0x00      | R/W   |
| 0x29         | FIFO_SAMPLES    | Reserved               |                        |                        |                        | FIFO_SAMPLES           | FIFO_SAMPLES            | FIFO_SAMPLES            | FIFO_SAMPLES            | 0x60      | R/W   |
| 0x2A         | INT_MAP         | ACT_EN2                | OVR_EN2                | FULL_EN2               | RDY_EN2                | ACT_EN1                | OVR_EN1                 | FULL_EN1                | RDY_EN1                 | 0x00      | R/W   |
| 0x2B         | Sync            |                        |                        | Reserved               |                        |                        | EXT_CLK                 |                         | EXT_SYNC                | 0x00      | R/W   |
| 0x2C         | Range           | I2C_HS                 | INT_POL                |                        |                        | Reserved               | Reserved                |                         | Range                   | 0x81      | R/W   |
| 0x2D         | POWER_CTL       |                        |                        | Reserved               |                        |                        | DRDY_OFF                | TEMP_OFF                | Standby                 | 0x01      | R/W   |
| 0x2E         | SELF_TEST       | Reserved               | Reserved               | Reserved               | Reserved               |                        |                         | ST2                     | ST1                     | 0x00      | R/W   |
| 0x2F         | Reset           |                        |                        |                        |                        | Reset                  | Reset                   |                         |                         | 0x00      | W     |

## REGISTER DEFINITIONS

This section describes the functions of the ADXL355 registers. The ADXL355 powers up with the default register values, as shown in the reset column of Table 15.

## ANALOG DEVICES ID REGISTER

This register contains the Analog Devices ID, 0xAD.

## Address: 0x00, Reset: 0xAD, Name: DEVID\_AD

Table 16. Bit Descriptions for DEVID\_AD

| Bits   | Bit Name   | Settings   | Description       | Reset   | Access   |
|--------|------------|------------|-------------------|---------|----------|
| [7:0]  | DEVID_AD   |            | Analog Devices ID | 0xAD    | R        |

## ANALOG DEVICES MEMS ID REGISTER

This register contains the Analog Devices MEMS ID, 0x1D.

## Address: 0x01, Reset: 0x1D, Name: DEVID\_MST

Table 17. Bit Descriptions for DEVID\_MST

| Bits   | Bit Name   | Settings   | Description            | Reset   | Access   |
|--------|------------|------------|------------------------|---------|----------|
| [7:0]  | DEVID_MST  |            | Analog Devices MEMS ID | 0x1D    | R        |

## DEVICE ID REGISTER

This register contains the device ID, 0xED (355 octal).

## Address: 0x02, Reset: 0xED, Name: PARTID

Table 18. Bit Descriptions for PARTID

| Bits   | Bit Name   | Settings   | Description           | Reset   | Access   |
|--------|------------|------------|-----------------------|---------|----------|
| [7:0]  | PARTID     |            | Device ID (355 octal) | 0xED    | R        |

## PRODUCT REVISION ID REGISTER

This register contains the product revision ID, beginning with 0x00 and incrementing for each subsequent revision.

## Address: 0x03, Reset: 0x01, Name: REVID

Table 19. Bit Descriptions for REVID

| Bits   | Bit Name   | Settings   | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
| [7:0]  | REVID      |            | Mask revision | 0x01    | R        |

## STATUS REGISTER

This register includes bits that describe the various conditions of the ADXL355.

## Address: 0x04, Reset: 0x00, Name: Status

Table 20. Bit Descriptions for Status

| Bits   | Bit Name   | Settings   | Description                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | Reserved   |            | Reserved.                                                                           | 0x0     | R        |
| 4      | NVM_BUSY   |            | NVM controller is busy with a refresh, programming, or a built in self test (BIST). | 0x0     | R        |

## REGISTER DEFINITIONS

Table 20. Bit Descriptions for Status (Continued)

|   Bits | Bit Name   | Settings   | Description                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------|---------|----------|
|      3 | Activity   |            | Activity, as defined in the ACT_THRESH_x and ACT_COUNT registers, is detected.      | 0x0     | R        |
|      2 | FIFO_OVR   |            | FIFO has overrun, and the oldest data is lost.                                      | 0x0     | R        |
|      1 | FIFO_FULL  |            | FIFO watermark is reached.                                                          | 0x0     | R        |
|      0 | DATA_RDY   |            | A complete x-axis, y-axis, and z-axis measurement was made and results can be read. | 0x0     | R        |

## FIFO ENTRIES REGISTER

This register indicates the number of valid data samples present in the FIFO buffer. This number ranges from 0 to 96.

## Address: 0x05, Reset: 0x00, Name: FIFO\_ENTRIES

Table 21. Bit Descriptions for FIFO\_ENTRIES

| Bits   | Bit Name     | Settings   | Description                               | Reset   | Access   |
|--------|--------------|------------|-------------------------------------------|---------|----------|
| 7      | Reserved     |            | Reserved                                  | 0x0     | R        |
| [6:0]  | FIFO_ENTRIES |            | Number of data samples stored in the FIFO | 0x0     | R        |

## TEMPERATURE DATA REGISTERS

These two registers contain the uncalibrated temperature data. The nominal intercept is 1885 LSB at 25°C and the nominal slope is -9.05 LSB/°C. TEMP2 contains the four most significant bits, and TEMP1 contains the eight least significant bits of the 12-bit value. The ADXL355 temperature value is not double buffered, meaning the value can update between reading of the two registers.

## Address: 0x06, Reset: 0x00, Name: TEMP2

Table 22. Bit Descriptions for TEMP2

| Bits   | Bit Name                | Settings   | Description                   | Reset   | Access   |
|--------|-------------------------|------------|-------------------------------|---------|----------|
| [7:4]  | Reserved                |            | Reserved.                     |         |          |
| [3:0]  | Temperature, Bits[11:8] |            | Uncalibrated temperature data | 0x0     | R        |

## Address: 0x07, Reset: 0x00, Name: TEMP1

Table 23. Bit Descriptions for TEMP1

| Bits   | Bit Name               | Settings   | Description                   | Reset   | Access   |
|--------|------------------------|------------|-------------------------------|---------|----------|
| [7:0]  | Temperature, Bits[7:0] |            | Uncalibrated temperature data | 0x00    | R        |

## X-AXIS DATA REGISTERS

These three registers contain the x-axis acceleration data. Data is left justified and formatted as twos complement.

## Address: 0x08, Reset: 0x00, Name: XDATA3

Table 24. Bit Descriptions for XDATA3

| Bits   | Bit Name           | Settings   | Description   | Reset   | Access   |
|--------|--------------------|------------|---------------|---------|----------|
| [7:0]  | XDATA, Bits[19:12] |            | X-axis data   | 0x00    | R        |

## Address: 0x09, Reset: 0x00, Name: XDATA2

## Table 25. Bit Descriptions for XDATA2

| Bits   | Bit Name          | Settings   | Description   | Reset   | Access   |
|--------|-------------------|------------|---------------|---------|----------|
| [7:0]  | XDATA, Bits[11:4] |            | X-axis data   | 0x00    | R        |

## REGISTER DEFINITIONS

## Address: 0x0A, Reset: 0x00, Name: XDATA1

Table 26. Bit Descriptions for XDATA1

| Bits   | Bit Name         | Settings   | Description   | Reset   | Access   |
|--------|------------------|------------|---------------|---------|----------|
| [7:4]  | XDATA, Bits[3:0] |            | X-axis data   | 0x0     | R        |
| [3:0]  | Reserved         |            | Reserved      | 0x0     | R        |

## Y-AXIS DATA REGISTERS

These three registers contain the y-axis acceleration data. Data is left justified and formatted as twos complement.

## Address: 0x0B, Reset: 0x00, Name: YDATA3

Table 27. Bit Descriptions for YDATA3

| Bits   | Bit Name           | Settings   | Description   | Reset   | Access   |
|--------|--------------------|------------|---------------|---------|----------|
| [7:0]  | YDATA, Bits[19:12] |            | Y-axis data   | 0x00    | R        |

## Address: 0x0C, Reset: 0x00, Name: YDATA2

Table 28. Bit Descriptions for YDATA2

| Bits   | Bit Name          | Settings   | Description   | Reset   | Access   |
|--------|-------------------|------------|---------------|---------|----------|
| [7:0]  | YDATA, Bits[11:4] |            | Y-axis data   | 0x00    | R        |

## Address: 0x0D, Reset: 0x00, Name: YDATA1

Table 29. Bit Descriptions for YDATA1

| Bits   | Bit Name         | Settings   | Description   | Reset   | Access   |
|--------|------------------|------------|---------------|---------|----------|
| [7:4]  | YDATA, Bits[3:0] |            | Y-axis data   | 0x0     | R        |
| [3:0]  | Reserved         |            | Reserved      | 0x0     | R        |

## Z-AXIS DATA REGISTERS

These three registers contain the z-axis acceleration data. Data is left justified and formatted as twos complement.

## Address: 0x0E, Reset: 0x00, Name: ZDATA3

Table 30. Bit Descriptions for ZDATA3

| Bits   | Bit Name           | Settings   | Description   | Reset   | Access   |
|--------|--------------------|------------|---------------|---------|----------|
| [7:0]  | ZDATA, Bits[19:12] |            | Z-axis data   | 0x00    | R        |

## Address: 0x0F, Reset: 0x00, Name: ZDATA2

Table 31. Bit Descriptions for ZDATA2

| Bits   | Bit Name          | Settings   | Description   | Reset   | Access   |
|--------|-------------------|------------|---------------|---------|----------|
| [7:0]  | ZDATA, Bits[11:4] |            | Z-axis data   | 0x00    | R        |

## REGISTER DEFINITIONS

## Address: 0x10, Reset: 0x00, Name: ZDATA1

Table 32. Bit Descriptions for ZDATA1

| Bits   | Bit Name         | Settings   | Description   | Reset   | Access   |
|--------|------------------|------------|---------------|---------|----------|
| [7:4]  | ZDATA, Bits[3:0] |            | Z-axis data   | 0x0     | R        |
| [3:0]  | Reserved         |            | Reserved      | 0x0     | R        |

## FIFO ACCESS REGISTER

## Address: 0x11, Reset: 0x00, Name: FIFO\_DATA

Read this register to access data stored in the FIFO.

Table 33. Bit Descriptions for FIFO\_DATA

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_DATA  |            | FIFO data is formatted to 24 bits, three bytes, most significant byte first. A read to this address pops an effective three equal byte words of axis data from the FIFO. Two subsequent reads or a multibyte read completes the transaction of this data onto the interface. Continued reading or a sustained multibyte read of this field continues to pop the FIFO every third byte. Multibyte reads to this address do not increment the address pointer. If this address is read due to an auto-increment from the previous address, it does not pop the FIFO. Instead, it returns zeros and increments on to the next address. | 0x0     | R        |

## X-AXIS OFFSET TRIM REGISTERS

## Address: 0x1E, Reset: 0x00, Name: OFFSET\_X\_H

Table 34. Bit Descriptions for OFFSET\_X\_H

| Bits   | Bit Name             | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_X, Bits[15:8] |            | Offset added to x-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_X, Bits[15:0] matches the significance of XDATA, Bits[19:4]. | 0x0     | R/W      |

## Address: 0x1F, Reset: 0x00, Name: OFFSET\_X\_L

Table 35. Bit Descriptions for OFFSET\_X\_L

| Bits   | Bit Name            | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|---------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_X, Bits[7:0] |            | Offset added to x-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_X, Bits[15:0] matches the significance of XDATA, Bits[19:4]. | 0x0     | R/W      |

## Y-AXIS OFFSET TRIM REGISTERS

Address: 0x20, Reset: 0x00, Name: OFFSET\_Y\_H

Table 36. Bit Descriptions for OFFSET\_Y\_H

| Bits   | Bit Name             | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_Y, Bits[15:8] |            | Offset added to y-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_Y, Bits[15:0] matches the significance of YDATA, Bits[19:4]. | 0x0     | R/W      |

## Address: 0x21, Reset: 0x00, Name: OFFSET\_Y\_L

Table 37. Bit Descriptions for OFFSET\_Y\_L

| Bits   | Bit Name            | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|---------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_Y, Bits[7:0] |            | Offset added to y-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_Y, Bits[15:0] matches the significance of YDATA, Bits[19:4]. | 0x0     | R/W      |

## REGISTER DEFINITIONS

## Z-AXIS OFFSET TRIM REGISTERS

## Address: 0x22, Reset: 0x00, Name: OFFSET\_Z\_H

Table 38. Bit Descriptions for OFFSET\_Z\_H

| Bits   | Bit Name             | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_Z, Bits[15:8] |            | Offset added to z-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_Z, Bits[15:0] matches the significance of ZDATA, Bits[19:4]. | 0x0     | R/W      |

## Address: 0x23, Reset: 0x00, Name: OFFSET\_Z\_L

## Table 39. Bit Descriptions for OFFSET\_Z\_L

| Bits   | Bit Name            | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|---------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_Z, Bits[7:0] |            | Offset added to z-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_Z, Bits[15:0] matches the significance of ZDATA, Bits[19:4]. | 0x0     | R/W      |

## ACTIVITY ENABLE REGISTER

## Address: 0x24, Reset: 0x00, Name: ACT\_EN

Table 40. Bit Descriptions for ACT\_EN

| Bits   | Bit Name   | Settings   | Description                                                     | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------|---------|----------|
| [7:3]  | Reserved   |            | Reserved.                                                       | 0x0     | R        |
| 2      | ACT_Z      |            | Z-axis data is a component of the activity detection algorithm. | 0x0     | R/W      |
| 1      | ACT_Y      |            | Y-axis data is a component of the activity detection algorithm. | 0x0     | R/W      |
| 0      | ACT_X      |            | X-axis data is a component of the activity detection algorithm. | 0x0     | R/W      |

## ACTIVITY THRESHOLD REGISTERS

## Address: 0x25, Reset: 0x00, Name: ACT\_THRESH\_H

Table 41. Bit Descriptions for ACT\_THRESH\_H

| Bits   | Bit Name               | Settings   | Description                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ACT_THRESH, Bits[15:8] |            | Threshold for activity detection. Acceleration magnitude must be above ACT_THRESH to trigger the activity counter. ACT_THRESH is an unsigned magnitude. The significance of ACT_THRESH, Bits[15:0] matches the significance of Bits[18:3] of XDATA, YDATA, and ZDATA. | 0x0     | R/W      |

## Address: 0x26, Reset: 0x00, Name: ACT\_THRESH\_L

## Table 42. Bit Descriptions for ACT\_THRESH\_L

| Bits   | Bit Name              | Settings   | Description                                                                                                                                                                                                                                                                                   | Reset   | Access   |
|--------|-----------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ACT_THRESH, Bits[7:0] |            | Threshold for activity detection. The acceleration magnitude must be greater than the value in ACT_THRESH to trigger the activity counter. ACT_THRESH is an unsigned magnitude. The significance of ACT_THRESH, Bits[15:0] matches the significance of Bits[18:3] of XDATA, YDATA, and ZDATA. | 0x0     | R/W      |

## REGISTER DEFINITIONS

## ACTIVITY COUNT REGISTER

## Address: 0x27, Reset: 0x01, Name: ACT\_COUNT

Table 43. Bit Descriptions for ACT\_COUNT

| Bits   | Bit Name   | Settings   | Description                                                                                | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ACT_COUNT  |            | Number of consecutive events above threshold (from ACT_THRESH) required to detect activity | 0x1     | R/W      |

## FILTER SETTINGS REGISTER

## Address: 0x28, Reset: 0x00, Name: Filter

Use this register to specify parameters for the internal high-pass and low-pass filters.

## Table 44. Bit Descriptions for Filter

| Bits   | Bit Name   | Settings   | Description                                                                   | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------|---------|----------|
| 7      | Reserved   |            | Reserved                                                                      | 0x0     | R        |
| [6:4]  | HPF_CORNER |            | -3 dB filter corner for the first-order, high-pass filter relative to the ODR | 0x0     | R/W      |
|        |            | 000        | Not applicable, no high-pass filter enabled                                   |         |          |
|        |            | 001        | 24.7 × 10 -4 × ODR                                                            |         |          |
|        |            | 010        | 6.2084 × 10 -4 × ODR                                                          |         |          |
|        |            | 011        | 1.5545 × 10 -4 × ODR                                                          |         |          |
|        |            | 100        | 0.3862 × 10 -4 × ODR                                                          |         |          |
|        |            | 101        | 0.0954 × 10 -4 × ODR                                                          |         |          |
|        |            | 110        | 0.0238 × 10 -4 × ODR                                                          |         |          |
| [3:0]  | ODR_LPF    |            | ODR and low-pass filter corner                                                | 0x0     | R/W      |
|        |            | 0000       | 4000 Hz and 1000 Hz                                                           |         |          |
|        |            | 0001       | 2000 Hz and 500 Hz                                                            |         |          |
|        |            | 0010       | 1000 Hz and 250 Hz                                                            |         |          |
|        |            | 0011       | 500 Hz and 125 Hz                                                             |         |          |
|        |            | 0100       | 250 Hz and 62.5 Hz                                                            |         |          |
|        |            | 0101       | 125 Hz and 31.25 Hz                                                           |         |          |
|        |            | 0110       | 62.5 Hz and 15.625 Hz                                                         |         |          |
|        |            | 0111       | 31.25 Hz and 7.813 Hz                                                         |         |          |
|        |            | 1000       | 15.625 Hz and 3.906 Hz                                                        |         |          |
|        |            | 1001       | 7.813 Hz and 1.953 Hz                                                         |         |          |
|        |            | 1010       | 3.906 Hz and 0.977 Hz                                                         |         |          |

## FIFO SAMPLES REGISTER

## Address: 0x29, Reset: 0x60, Name: FIFO\_SAMPLES

Use the FIFO\_SAMPLES value to specify the number of samples to store in the FIFO. The default value of this register is 0x60 to avoid triggering the FIFO watermark interrupt.

Table 45. Bit Descriptions for FIFO\_SAMPLES

| Bits   | Bit Name     | Settings   | Description                                                                                                    | Reset   | Access   |
|--------|--------------|------------|----------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | Reserved     |            | Reserved.                                                                                                      | 0x0     | R        |
| [6:0]  | FIFO_SAMPLES |            | Watermark number of samples stored in the FIFO that triggers a FIFO_FULL condition. Values range from 1 to 96. | 0x60    | R/W      |

## REGISTER DEFINITIONS

## INTERRUPT PIN (INTX) FUNCTION MAP REGISTER

## Address: 0x2A, Reset: 0x00, Name: INT\_MAP

The INT\_MAP register configures the interrupt pins. Bits[7:0] select which functions generate an interrupt on the INT1 and INT2 pins. Multiple events can be configured. If the corresponding bit is set to 1, the function generates an interrupt on the interrupt pins.

Table 46. Bit Descriptions for INT\_MAP

|   Bits | Bit Name   | Settings   | Description                        | Reset   | Access   |
|--------|------------|------------|------------------------------------|---------|----------|
|      7 | ACT_EN2    |            | Activity interrupt enable on INT2  | 0x0     | R/W      |
|      6 | OVR_EN2    |            | FIFO_OVR interrupt enable on INT2  | 0x0     | R/W      |
|      5 | FULL_EN2   |            | FIFO_FULL interrupt enable on INT2 | 0x0     | R/W      |
|      4 | RDY_EN2    |            | DATA_RDY interrupt enable on INT2  | 0x0     | R/W      |
|      3 | ACT_EN1    |            | Activity interrupt enable on INT1  | 0x0     | R/W      |
|      2 | OVR_EN1    |            | FIFO_OVR interrupt enable on INT1  | 0x0     | R/W      |
|      1 | FULL_EN1   |            | FIFO_FULL interrupt enable on INT1 | 0x0     | R/W      |
|      0 | RDY_EN1    |            | DATA_RDY interrupt enable on INT1  | 0x0     | R/W      |

## DATA SYNCHRONIZATION

## Address: 0x2B, Reset: 0x00, Name: Sync

Use this register to control the external timing triggers.

## Table 47. Bit Descriptions for Sync

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | Reserved   |            | Reserved.                                                                                                                                                                                                                           | 0x0     | R        |
| 2      | EXT_CLK    |            | Enable external clock. See Table 14 for configuration details.                                                                                                                                                                      | 0x0     | R/W      |
| [1:0]  | EXT_SYNC   |            | Enable external synchronization control.                                                                                                                                                                                            | 0x0     | R/W      |
| [1:0]  |            | 00         | Internal synchronization.                                                                                                                                                                                                           |         |          |
| [1:0]  |            | 01         | External synchronization, no interpolation filter. After synchronization, and for EXT_SYNC within specification, DATA_RDY occurs on EXT_SYNC.                                                                                       |         |          |
| [1:0]  |            | 10         | External synchronization, interpolation filter, next available data indicated by DATA_RDY 14 to 8204 oscillator cycles later (longer delay for higher ODR_LPF setting), data represents a sample point group delay earlier in time. |         |          |
| [1:0]  |            | 11         | Reserved.                                                                                                                                                                                                                           |         |          |

## I 2 C SPEED, INTERRUPT POLARITY, AND RANGE REGISTER

Address: 0x2C, Reset: 0x81, Name: Range

Table 48. Bit Descriptions for Range

| Bits   | Bit Name   | Settings   | Description                                       | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------|---------|----------|
| 7      | I2C_HS     |            | I 2 C speed.                                      | 0x1     | R/W      |
| 6      | INT_POL    |            | Interrupt polarity. INT1 and INT2 are active low. | 0x0     | R/W      |
| [5:2]  | Reserved   |            | Reserved.                                         | 0x0     | R        |
| [1:0]  | Range      |            | Range. ±2 g .                                     | 0x1     | R/W      |

## REGISTER DEFINITIONS

Table 48. Bit Descriptions for Range (Continued)

| Bits   | Bit Name   |   Settings | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
|        |            |         10 | ±4 g . ±8 g . |         |          |
|        |            |         11 |               |         |          |

## POWER CONTROL REGISTER

Address: 0x2D, Reset: 0x01, Name: POWER\_CTL

Table 49. Bit Descriptions for POWER\_CTL

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                 | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | Reserved   |            | Reserved.                                                                                                                                                                                                                                                                                                                                                                   | 0x0     | R        |
| 2      | DRDY_OFF   |            | Set to 1 to force the DRDY output to 0 in modes where it is normally signal data ready.                                                                                                                                                                                                                                                                                     | 0x0     | R/W      |
| 1      | TEMP_OFF   |            | Set to 1 to disable temperature processing. Temperature processing is also disabled when standby = 1.                                                                                                                                                                                                                                                                       | 0x0     | R/W      |
| 0      | Standby    | 1          | Standby or measurement mode.                                                                                                                                                                                                                                                                                                                                                | 0x1     | R/W      |
|        |            | 0          | Standby mode. In standby mode, the device is in a low power state, and the temperature and acceleration datapaths are not operating. In addition, digital functions, including FIFO pointers, reset. Changes to the configuration setting of the device must be made when standby = 1. An exception is a high-pass filter that can be changed when the device is operating. |         |          |
|        |            |            | Measurement mode.                                                                                                                                                                                                                                                                                                                                                           |         |          |

## SELF TEST REGISTER

## Address: 0x2E, Reset: 0x00, Name: SELF\_TEST

Refer to the Self Test section for more information on the operation of the self test feature.

## Table 50. Bit Descriptions for SELF\_TEST

| Bits   | Bit Name   | Settings   | Description                        | Reset   | Access   |
|--------|------------|------------|------------------------------------|---------|----------|
| [7:2]  | Reserved   |            | Reserved.                          | 0x0     | R        |
| 1      | ST2        |            | Set to 1 to enable self test force | 0x0     | R/W      |
| 0      | ST1        |            | Set to 1 to enable self test mode  | 0x0     | R/W      |

## RESET REGISTER

## Address: 0x2F, Reset: 0x00, Name: Reset

Table 51. Bit Descriptions for Reset

| Bits   | Bit Name   | Settings   | Description                                                            | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------|---------|----------|
| [7:0]  | Reset      |            | Write Code 0x52 to reset the device, similar to a power-on reset (POR) | 0x0     | W        |

In case of a software reset, an unlikely race condition may occur in products with REVID = 0x01 or earlier. If the race condition occurs, some factory settings in the NVM load incorrectly to shadow registers (the registers from which the internal logic configures the sensor and calculates the output after a power-on or a software reset). The incorrect loading of the NVM affects overall performance of the sensor, such as an incorrect 0 g bias and other performance issues. The incorrect loading of NVM does not occur from a power-on or after a power cycle. To guarantee reliable operation of the sensor after a software reset, the user can access the shadow registers after a power-on, read and store the values on the host microprocessor, and compare the values read from the same shadow registers after a software reset. This method guarantees proper operation in all devices and under all conditions. The recommended steps are as follows:

1. Read the shadow registers, Register 0x50 to Register 0x54 (five 8-bit registers) after power-up, but before any software reset.
2. Store these values in a host device (for example, a host microprocessor).
3. After each software reset, read the same five registers. If the values differ, perform a software reset again until they match.

## PCB FOOTPRINT PATTERN

Figure 80 shows the PCB footprint pattern and dimensions in millimeters.

Figure 80. PCB Footprint Pattern and Dimensions in Millimeters

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                       |
|----------------------------|----------------|-------------------------------------------|
| E-14-1                     | LCC            | 14-Terminal Ceramic Leadless Chip Carrier |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1        | Temperature Range   | Package Description   | Packing Quantity   | Package Option   |
|----------------|---------------------|-----------------------|--------------------|------------------|
| ADXL354BEZ     | -40°C to +125°C     | 14-Terminal LCC       | Tray, 280          | E-14-1           |
| ADXL354BEZ-RL  | -40°C to +125°C     | 14-Terminal LCC       | Reel, 2000         | E-14-1           |
| ADXL354BEZ-RL7 | -40°C to +125°C     | 14-Terminal LCC       | Reel, 500          | E-14-1           |
| ADXL354CEZ     | -40°C to +125°C     | 14-Terminal LCC       | Tray, 280          | E-14-1           |
| ADXL354CEZ-RL  | -40°C to +125°C     | 14-Terminal LCC       | Reel, 2000         | E-14-1           |
| ADXL354CEZ-RL7 | -40°C to +125°C     | 14-Terminal LCC       | Reel, 500          | E-14-1           |
| ADXL355BEZ     | -40°C to +125°C     | 14-Terminal LCC       | Tray, 280          | E-14-1           |
| ADXL355BEZ-RL  | -40°C to +125°C     | 14-Terminal LCC       | Reel, 2000         | E-14-1           |
| ADXL355BEZ-RL7 | -40°C to +125°C     | 14-Terminal LCC       | Reel, 500          | E-14-1           |

## OUTPUT MODE, MEASUREMENT RANGE, AND SPECIFIED VOLTAGE OPTIONS

| Model 1        | Output Mode   | Measurement Range ( g )   |   Specified Voltage (V) |
|----------------|---------------|---------------------------|-------------------------|
| ADXL354BEZ     | Analog        | ±2, ±4                    |                     3.3 |
| ADXL354BEZ-RL  | Analog        | ±2, ±4                    |                     3.3 |
| ADXL354BEZ-RL7 | Analog        | ±2, ±4                    |                     3.3 |
| ADXL354CEZ     | Analog        | ±2, ±8                    |                     3.3 |
| ADXL354CEZ-RL  | Analog        | ±2, ±8                    |                     3.3 |
| ADXL354CEZ-RL7 | Analog        | ±2, ±8                    |                     3.3 |
| ADXL355BEZ     | Digital       | ±2, ±4, ±8                |                     3.3 |
| ADXL355BEZ-RL  | Digital       | ±2, ±4, ±8                |                     3.3 |
| ADXL355BEZ-RL7 | Digital       | ±2, ±4, ±8                |                     3.3 |

## EVALUATION BOARDS

| Model 1          | Description                        |
|------------------|------------------------------------|
| EVAL-ADXL354BZ   | Evaluation Board for ADXL354BEZ    |
| EVAL-ADXL354CZ   | Evaluation Board for ADXL354CEZ    |
| EVAL-ADXL355Z    | Evaluation Board for ADXL355BEZ    |
| EVAL-ADXL355-SDP | ADXL355 Customer Evaluation System |

<!-- image -->