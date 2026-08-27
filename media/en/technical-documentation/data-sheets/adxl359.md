<!-- lastmod 2022-06-30 -->
<!-- image -->

## FEATURES

- 0 g offset vs. temperature (all axes): 0.45 m g /°C typical
- Ultralow noise density (all axes): 80 µ g /√Hz
- Low power, V SUPPLY (LDO enabled)
- In measurement mode: 200 µA
- In standby mode: 21 µA
- Digital output features
- Digital SPI and limited I 2 C interfaces supported
- 20-bit ADC
- Data interpolation routine for synchronous sampling
- Programmable high-pass and low-pass digital filters
- Integrated temperature sensor
- Voltage range options
- VSUPPLY with internal regulators: 2.25 V to 3.6 V
- V1P8ANA , V 1P8DIG with internal LDO regulator bypassed: 1.8 V typical ± 10%
- Operating temperature range: -40°C to +125°C
- 14-terminal, 4 mm × 4 mm × 1.04 mm, LGA package

## APPLICATIONS

- IMUs and altitude and heading reference systems (AHRSs)
- Platform stabilization systems
- Vibration sensing
- Structural health monitoring
- Tilt sensing
- Robotics
- Condition monitoring

1 Protected by U.S. Patents 8,472,270; 9,041,462; 8,665,627; 8,917,099; 6,892,576; 9,297,825; and 7,956,621.

## Low Noise, Low Drift, Low Power 3-Axis MEMS Accelerometer

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The digital output ADXL359 1 is a low noise density, low 0 g offset drift, low power, 3-axis microelectromechanical system (MEMS) accelerometer with selectable measurement ranges. The ADXL359 supports the ±10 g , ±20 g , and ±40 g ranges.

The ADXL359 offers industry leading noise, minimal offset drift over temperature, and long-term stability, enabling precision applications with minimal calibration.

The low drift, low noise, and low power ADXL359 enables accurate tilt measurement in an environment with high vibration, such as airborne inertial measurement units (IMUs). The low noise over higher frequencies is ideal for wireless condition monitoring.

The ADXL359 multifunction pin names may be referenced only by their relevant function for either the serial peripheral interface (SPI) or limited I 2 C interface.

## TABLE OF CONTENTS

| Features................................................................                                 | 1                                            |
|----------------------------------------------------------------------------------------------------------|----------------------------------------------|
| Applications...........................................................                                  | 1                                            |
| Functional Block Diagram......................................1                                          |                                              |
| General Description...............................................1                                      |                                              |
| Specifications........................................................                                   | 3                                            |
| Digital Output......................................................3                                    |                                              |
| SPI Characteristics.............................................4                                        |                                              |
| I 2 C Digital Interface Characteristics...................                                               | 5                                            |
| Absolute Maximum Ratings...................................7                                             |                                              |
| Thermal Resistance...........................................                                            | 7                                            |
| Electrostatic Discharge (ESD) Ratings...............7                                                    |                                              |
| ESD Caution.......................................................7                                      |                                              |
| Pin Configuration and Function Descriptions........                                                      | 8                                            |
| Typical Performance Characteristics.....................9                                                |                                              |
| Theory of Operation.............................................13                                       |                                              |
| Applications Information......................................                                           | 14                                           |
| Digital Output....................................................14                                     |                                              |
| Axes of Acceleration Sensitivity.......................                                                  | 14                                           |
| Power Sequencing                                                                                         | ..........................................14 |
| Power Supply Description................................14                                               |                                              |
| Overrange Protection.......................................14                                            |                                              |
| Self Test............................................................15                                  |                                              |
| Filter.................................................................                                  | 15                                           |
| Serial Communications........................................18                                          |                                              |
| SPI Protocol.....................................................                                        | 18                                           |
| I 2 C Protocol......................................................19                                   |                                              |
| Reading Acceleration or Temperature Data from the Interface...........................................19 |                                              |
| FIFO....................................................................                                 | 21                                           |
| Interrupts.............................................................                                  | 22                                           |
| DATA_RDY.......................................................22                                        |                                              |
| DRDY Pin.........................................................22                                      |                                              |
| FIFO_FULL......................................................                                          | 22                                           |
| FIFO_OVR.......................................................                                          | 22                                           |
| Activity..............................................................22                                 |                                              |
| NVM_BUSY......................................................22                                         |                                              |

## REVISION HISTORY

6/2022-Revision 0: Initial Version

| External Synchronization and Interpolation......22                                                              |    |
|-----------------------------------------------------------------------------------------------------------------|----|
| Register Map.......................................................                                             | 25 |
| Register Definitions.............................................                                               | 26 |
| Analog Devices ID Register.............................                                                         | 26 |
| Analog Devices MEMS ID Register..................26                                                             |    |
| Device ID Register...........................................                                                   | 26 |
| Product Revision ID Register...........................26                                                       |    |
| Status Register.................................................26                                              |    |
| FIFO Entries Register.......................................27                                                  |    |
| Temperature Data Registers............................                                                          | 27 |
| X-Axis Data Registers......................................27                                                   |    |
| Y-Axis Data Registers......................................                                                     | 28 |
| Z-Axis Data Registers......................................                                                     | 28 |
| FIFO Access Register......................................29                                                    |    |
| X-Axis Offset Trim Registers............................29                                                      |    |
| Y-Axis Offset Trim Registers............................                                                        | 29 |
| Z-Axis Offset Trim Registers............................                                                        | 30 |
| Activity Enable Register...................................                                                     | 30 |
| Activity Threshold Registers.............................30                                                     |    |
| Activity Count Register.....................................31                                                  |    |
| Filter Settings Register.....................................31                                                 |    |
| FIFO Samples Register....................................31                                                     |    |
| Interrupt Pin (INTx) Function Map Register......32                                                              |    |
| Data Synchronization.......................................32                                                   |    |
| I 2 C Speed, Interrupt Polarity, and Range Register..........................................................32 |    |
| Power Control Register....................................33                                                    |    |
| Self Test Register.............................................33                                               |    |
| Reset Register..................................................33                                              |    |
| Recommended Soldering Profile.........................34                                                        |    |
| PCB Footprint Pattern.........................................                                                  | 35 |
| Outline Dimensions.............................................                                                 | 36 |
| Ordering Guide.................................................36                                               |    |
| Output Mode, Measurement Range, and Specified Voltage Options..............................36                   |    |
| Evaluation Boards............................................36                                                 |    |

## SPECIFICATIONS

## DIGITAL OUTPUT

TA = 25°C, V SUPPLY = 3.3 V, x-axis acceleration and y-axis acceleration = 0 g , z-axis acceleration = 1 g , full-scale range = ±10 g , and output data rate (ODR) = 500 Hz, unless otherwise noted. Note that multifunction pin names may be referenced only by their relevant function.

Table 1.

| Parameter                                                                     | Test Conditions/Comments                                             | Min      | Typ    |   Max | Unit     |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------|----------|--------|-------|----------|
| SENSOR INPUT                                                                  | Each axis                                                            |          |        |       |          |
| Output Full-Scale Range (FSR)                                                 | User selectable                                                      |          | ±10    |       | g        |
|                                                                               |                                                                      |          | ±20    |       | g        |
|                                                                               |                                                                      |          | ±40    |       | g        |
| Nonlinearity                                                                  | ±10 g                                                                |          | 0.1    |       | %FSR     |
| Cross Axis Sensitivity                                                        |                                                                      |          | 1.5    |       | %        |
| SENSITIVITY                                                                   | Each Axis                                                            |          |        |       |          |
| X-Axis, Y-Axis, and Z-Axis Sensitivity                                        | ±10 g                                                                |          | 51,200 |       | LSB/ g   |
|                                                                               | ±20 g                                                                |          | 25,600 |       | LSB/ g   |
|                                                                               | ±40 g                                                                |          | 12,800 |       | LSB/ g   |
| X-Axis, Y-Axis, and Z-Axis Scale Factor                                       | ±10 g                                                                |          | 19.5   |       | µ g /LSB |
|                                                                               | ±20 g                                                                |          | 39     |       | µ g /LSB |
|                                                                               | ±40 g                                                                |          | 78     |       | µ g /LSB |
| Sensitivity Change due to Temperature                                         | T A = -40°C to +125°C                                                |          | ±0.015 |       | %/°C     |
| 0 g OFFSET                                                                    | Each axis, ±10 g                                                     |          |        |       |          |
| X-Axis, Y-Axis, and Z-Axis 0 g Output                                         |                                                                      |          | ±125   |       | m g      |
| 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z-Axis) 1                     | T A = -40°C to +125°C                                                |          | ±0.45  |       | m g /°C  |
| Vibration Rectification Error (VRE) 2                                         | Offset due to 7.5 g rms vibration, ±10 g range, in a 1 g orientation |          | <0.1   |       | g        |
| NOISE DENSITY                                                                 | ±10 g                                                                |          |        |       |          |
| OUTPUT DATA RATE AND BANDWIDTH                                                |                                                                      |          |        |       |          |
| Analog-to-Digital Converter (ADC) Resolution                                  |                                                                      |          | 20     |       | Bits     |
| Low-Pass Filter (LPF) Pass Band Frequency                                     | User programmable, Register 0x28                                     | 1 0.0095 |        |  1000 | Hz       |
| High-Pass Filter (HPF) Pass Band Frequency When Enabled (Disabled by Default) | User programmable, Register 0x28 for 4 kHz ODR                       |          |        |    10 | Hz       |
| SELF TEST                                                                     |                                                                      |          |        |       |          |
| Output Change                                                                 |                                                                      |          |        |       |          |
| X-Axis                                                                        | ±10 g range                                                          | 0.05     | 0.23   |   0.4 | g        |
| Y-Axis                                                                        | ±10 g range                                                          | 0.05     | 0.23   |   0.4 | g        |
| Z-Axis                                                                        | ±10 g range                                                          | 1.0      | 1.64   |   2.2 | g        |
| POWER SUPPLY                                                                  |                                                                      |          |        |       |          |
| Voltage Range                                                                 |                                                                      |          |        |       |          |
| V SUPPLY Operating 3                                                          |                                                                      | 2.25     | 2.5    |   3.6 | V        |
| V DDIO                                                                        |                                                                      | V 1P8DIG | 2.5    |   3.6 | V        |
| V 1P8ANA and V 1P8DIG with Internal Low Dropout (LDO)                         | V SUPPLY = 0 V                                                       | 1.62     | 1.8    |  1.98 | V        |
| Regulator Bypassed Current                                                    |                                                                      |          |        |       |          |
| Measurement Mode                                                              |                                                                      |          |        |       |          |
| V SUPPLY (LDO Enabled)                                                        |                                                                      |          | 200    |       | µA       |
| V 1P8ANA (LDO Disabled)                                                       |                                                                      |          | 160    |       | µA       |
| V 1P8DIG (LDO Disabled)                                                       |                                                                      |          | 35.5   |       | µA       |
| Standby Mode                                                                  |                                                                      |          |        |       |          |
| V SUPPLY (LDO Enabled)                                                        |                                                                      |          | 21     |       | µA       |

## SPECIFICATIONS

| Table 1. Parameter                | Typ   |   Max | Unit   |
|-----------------------------------|-------|-------|--------|
| V 1P8ANA (LDO Disabled)           | 7     |       | µA     |
| V 1P8DIG (LDO Disabled)           | 10    |       | µA     |
| Turn-On Time 4                    | <10   |       | ms     |
|                                   | <10   |       | ms     |
| TEMPERATURE SENSOR Output at 25°C | 1852  |       | LSB    |
| Scale Factor                      | -9.05 |       | LSB/°C |
| TEMPERATURE                       |       |       | °C     |
| Operating Range                   |       |  +125 |        |

1 The temperature change is -40°C to +25°C or +25°C to +125°C.

2 The VRE measurement is the shift in dc offset while the device is subject to 12.5 g rms random vibration from 50 Hz to 2 kHz. The device under test (DUT) is configured for the ±2 g range and an ODR of 4 kHz. The VRE scales with the range setting.

3 When V 1P8ANA and V 1P8DIG are generated internally, V SUPPLY is valid. To disable the LDO regulator and drive V 1P8ANA and V 1P8DIG externally, connect V SUPPLY to V SS .

4 Standby to measurement mode; valid when the output is within 1 m g of the final value.

## SPI CHARACTERISTICS

Table 2.

| Parameter               | Symbols   | Test Conditions/Comments           | Min          | Max          | Unit   |
|-------------------------|-----------|------------------------------------|--------------|--------------|--------|
| DC INPUT LEVELS         |           |                                    |              |              |        |
| Input Voltage Low Level | V IL      |                                    |              | 0.3 × V DDIO | V      |
| High Level              | V IH      |                                    | 0.7 × V DDIO |              | V      |
| Input Current           |           |                                    |              |              |        |
| Low Level               | I IL      | Input voltage (V IN ) = 0 V        | -0.1         |              | µA     |
| High Level              | I IH      | V IN = V DDIO                      |              | 0.1          | µA     |
| DC OUTPUT LEVELS        |           |                                    |              |              |        |
| Output Voltage          |           |                                    |              |              |        |
| Low Level               | V OL      | I OL = I OL, MIN                   |              | 0.2 × V DDIO | V      |
| High Level              | V OH      | I OH = I OH, MAX                   | 0.8 × V DDIO |              | V      |
| Output Current          |           |                                    |              |              |        |
| Low Level               | I OL      | V OL = V OL, MAX                   | -10          |              | mA     |
| High Level              | I OH      | V OH = V OH, MIN                   |              | 4            | mA     |
| AC INPUT LEVELS         |           |                                    |              |              |        |
| SCLK Frequency          |           |                                    | 0.1          | 10           | MHz    |
| SCLK High Time          | t HIGH    |                                    | 40           |              | ns     |
| SCLK Low Time           | t LOW     |                                    | 40           |              | ns     |
| CS Setup Time           | t CSS     |                                    | 20           |              | ns     |
| CS Hold Time            | t CSH     |                                    | 20           |              | ns     |
| CS Disable Time         | t CSD     |                                    | 40           |              | ns     |
| Rising SCLK Setup Time  | t SCLKS   |                                    | 20           |              | ns     |
| MOSI Setup Time         | t SU      |                                    | 20           |              | ns     |
| MOSI Hold Time          | t HD      |                                    | 20           |              | ns     |
| AC OUTPUT LEVELS        |           |                                    |              |              |        |
| Propagation Delay       | t P       | Load capacitance (C LOAD ) = 30 pF |              | 30           | ns     |
| Enable MISO Time        | t EN      |                                    | 30           |              | ns     |
| Disable MISO Time       | t DIS     |                                    |              | 20           | ns     |

## SPECIFICATIONS

Figure 2. SPI Timing Diagram

<!-- image -->

## I 2 C DIGITAL INTERFACE CHARACTERISTICS

Note that multifunction pin names may be referenced only by their relevant function.

## Table 3.

|                                        |         | Test Conditions/                   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   |      |
|----------------------------------------|---------|------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------------|--------------------------------|--------------------------------|------|
| Parameter                              | Symbol  | Comments                           | Min                      | Typ                      | Max                      | Min                            | Typ                            | Max                            | Unit |
| DC INPUT LEVELS                        |         |                                    |                          |                          |                          |                                |                                |                                |      |
| Input Voltage Low Level                | V IL    |                                    |                          |                          | 0.3 × V DDIO             |                                |                                | 0.3 × V DDIO                   | V    |
| High Level                             | V IH    |                                    | 0.7 × V DDIO             |                          |                          | 0.7 × V DDIO                   |                                |                                | V    |
| Hysteresis of Schmitt Triggered Inputs | V HYS   |                                    | 0.05 × V DDIO            |                          |                          | 0.1 × V DDIO                   |                                |                                | V    |
| Input Current                          | I IL    | 0.1 × V DDIO < V IN < 0.9 × V DDIO | -10                      |                          | +10                      |                                |                                |                                | µA   |
| DC OUTPUT LEVELS                       |         |                                    |                          |                          |                          |                                |                                |                                |      |
| Output Voltage Low Level               | V OL1   | I OL = 3 mA V DDIO > 2 V           |                          |                          | 0.4                      |                                |                                | 0.4                            | V    |
|                                        | V OL2   | V DDIO ≤ 2 V                       |                          |                          | 0.2 × V DDIO             |                                |                                | 0.2 × V DDIO                   | V    |
| Output Current Low Level               | I OL    | V OL = 0.4 V V OL = 0.6 V          | 20 6                     |                          |                          | 20                             |                                |                                | mA   |
|                                        |         |                                    | 0                        |                          |                          | 6                              |                                |                                | mA   |
| AC INPUT LEVELS                        |         |                                    |                          |                          |                          |                                |                                |                                |      |
| SCL Frequency                          |         |                                    |                          |                          | 1                        | 0                              |                                | 3.4                            | MHz  |
| SCL High Time                          | t HIGH  |                                    | 260                      |                          |                          | 60                             |                                |                                | ns   |
| SCL Low Time                           | t LOW   |                                    | 500                      |                          |                          | 160                            |                                |                                | ns   |
| Start Setup Time                       | t SUSTA |                                    | 260                      |                          |                          | 160                            |                                |                                | ns   |
| Start Hold Time                        | t HDSTA |                                    | 260                      |                          |                          | 160                            |                                |                                | ns   |
| SDA Setup Time                         | t SUDAT |                                    | 50                       |                          |                          | 10                             |                                |                                | ns   |
| SDA Hold Time                          | t HDDAT |                                    | 0                        |                          |                          | 0                              |                                |                                | ns   |
| Stop Setup Time                        | t SUSTO |                                    | 260                      |                          |                          | 160                            |                                |                                | ns   |
| Bus Free Time                          | t BUF   |                                    | 500                      |                          |                          |                                |                                |                                | ns   |
| SCL Input Rise Time                    | t RCL   |                                    |                          |                          | 120                      |                                |                                | 80                             | ns   |
| SCL Input Fall Time                    | t FCL   |                                    |                          |                          | 120                      |                                |                                | 80                             | ns   |
| SDA Input Rise Time                    | t RDA   |                                    |                          |                          | 120                      |                                |                                | 160                            | ns   |
| SDA Input Fall Time                    | t FDA   |                                    |                          |                          | 120                      |                                |                                | 160                            | ns   |
| Width of Spikes to Suppress            | t SP    | Not shown in Figure 3              |                          |                          | 50                       |                                |                                | 10                             | ns   |
| AC OUTPUT LEVELS                       |         |                                    |                          |                          |                          |                                |                                |                                |      |
| Propagation Delay                      |         | C LOAD = 500 pF                    |                          |                          |                          |                                |                                |                                |      |
| Data                                   | t VDDAT |                                    | 97                       |                          | 450                      | 27                             |                                | 135                            | ns   |

## SPECIFICATIONS

## Table 3.

Figure 3. I 2 C Timing Diagram

|                  |         | Test Conditions/      | I2C_HS = 0 (Fast Mode)   | I2C_HS = 0 (Fast Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   | I2C_HS = 1 (High Speed Mode)   |
|------------------|---------|-----------------------|--------------------------|--------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Parameter        | Symbol  | Comments              | Min                      | Max                      | Min                            | Typ                            | Max                            | Unit                           |
| Acknowledge      | t VDACK |                       |                          | 450                      |                                |                                |                                | ns                             |
| Output Fall Time | t F     | Not shown in Figure 3 | 20 × (V DDIO /5.5)       | 120                      |                                |                                |                                | ns                             |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                                                                  |                          |
|---------------------------------------------------------------------------|--------------------------|
| Parameter                                                                 | Rating                   |
| Acceleration (Any Axis, 0.1 ms)                                           | 5000 g                   |
| V SUPPLY and V DDIO                                                       | 5.4 V                    |
| V 1P8ANA and V 1P8DIG Configured as Inputs                                | 1.98 V                   |
| Digital Pins (CS/SCL, SCLK/V SSIO , MOSI/SDA, MISO/ASEL, INT1, IN2, DRDY) | -0.3 V to V DDIO + 0.3 V |
| Temperature Range                                                         |                          |
| Operating                                                                 | -40°C to +125°C          |
| Storage                                                                   | -55°C to +150°C          |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. ψ JB is the junction to board thermal resistance.

Table 5. Thermal Resistance

| Package Type 1   |   θ JA |   ψ JB | Unit   |
|------------------|--------|--------|--------|
| CC-14-2          |  79.10 |  41.76 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in and ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JESD22-A114.

Field induced charged-device model (FICDM) per ANSI/ESDA/JEDEC JESD22-C101.

## ESD Ratings for the ADXL359

Table 6. ADXL359, 14-Terminal LGA

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| FICDM       | ±1250                     | IV      |
| HBM         | ±3500                     | 2       |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 4. Pin Configuration

<!-- image -->

Table 7. Pin Function Descriptions

|   Pin No. | Mnemonic    | Description                                                                                                                                                                                               |
|-----------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | CS/SCL      | Chip Select for SPI (CS). Serial Communications Clock for I 2 C (SCL).                                                                                                                                    |
|         2 | SCLK/V SSIO | Serial Communications Clock for SPI (SCLK). I 2 C Mode Enable (V SSIO ). Connect this pin to Pin 6 (V SSIO ) to enable I 2 C mode.                                                                        |
|         3 | MOSI/SDA    | Controller Output, Subordinate Input for SPI (MOSI). Serial Data for I 2 C (SDA).                                                                                                                         |
|         4 | MISO/ASEL   | Controller Input, Subordinate Output for SPI (MISO). Alternate I 2 C Address Select for I 2 C (ASEL).                                                                                                     |
|         5 | V DDIO      | Digital Interface Supply Voltage.                                                                                                                                                                         |
|         6 | V SSIO      | Digital Ground.                                                                                                                                                                                           |
|         7 | RESERVED    | Reserved. This pin can be connected to ground or left open.                                                                                                                                               |
|         8 | V 1P8DIG    | Digital Supply. This pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to this pin externally.                                                                       |
|         9 | V SS        | Analog Ground.                                                                                                                                                                                            |
|        10 | V 1P8ANA    | Analog Supply. This pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to this pin externally.                                                                        |
|        11 | V SUPPLY    | Supply Voltage. When V SUPPLY equals 2.25 V to 3.6 V, V SUPPLY enables the internal LDO regulators to generate V 1P8DIG and V 1P8ANA For V SUPPLY = V SS , V 1P8DIG and V 1P8ANA are externally supplied. |
|        12 | INT1        | Interrupt Pin 1.                                                                                                                                                                                          |
|        13 | INT2        | Interrupt Pin 2.                                                                                                                                                                                          |
|        14 | DRDY        | Data Ready Pin.                                                                                                                                                                                           |

## TYPICAL PERFORMANCE CHARACTERISTICS

All figures include data for multiple devices and multiple lots, and these figures were taken in the ±10 g range, unless otherwise noted.

<!-- image -->

Figure 5. Normalized Frequency Response for X-Axis at 4 kHz ODR

<!-- image -->

Figure 6. Normalized Frequency Response for Y-Axis at 4 kHz ODR

<!-- image -->

Figure 7. Normalized Frequency Response for Z-Axis at 4 kHz ODR

<!-- image -->

Figure 8. X-Axis Zero g Offset Normalized Relative to 25°C vs. Temperature

Figure 9. Y-Axis Zero g Offset Normalized Relative to 25°C vs. Temperature

<!-- image -->

Figure 10. Z-Axis Zero g Offset Normalized Relative to 25°C vs. Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 11. X-Axis Change in Sensitivity Relative to 25°C vs. Temperature

<!-- image -->

Figure 12. Y-Axis Change in Sensitivity Relative to 25°C vs. Temperature

<!-- image -->

Figure 13. Z-Axis Change in Sensitivity Relative to 25°C vs. Temperature

<!-- image -->

Figure 14. Zero g Offset Histogram at 25°C, X-Axis

Figure 15. Zero g Offset Histogram at 25°C, Y-Axis

<!-- image -->

Figure 16. Zero g Offset Histogram at 25°C, Z-Axis

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 17. Sensitivity Histogram at 25°C, X-Axis

<!-- image -->

Figure 18. Sensitivity Histogram at 25°C, Y-Axis

<!-- image -->

Figure 19. Sensitivity Histogram at 25°C, Z-Axis

<!-- image -->

Figure 20. VRE, X-Axis Offset from +1 g, ±10 g Range, X-Axis Orientation = -1 g

Figure 21. VRE, Y-Axis Offset from +1 g, ±10 g Range, Y-Axis Orientation = -1 g

<!-- image -->

Figure 22. VRE, Z-Axis Offset from +1 g, ±10 g Range, Z-Axis Orientation = -1 g

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 23. VRE, X-Axis Offset from +1 g, ±40 g Range, X-Axis Orientation = -1 g

<!-- image -->

Figure 24. VRE, Y-Axis Offset from +1 g, ±40 g Range, Y-Axis Orientation = -1 g

<!-- image -->

Figure 25. VRE, Z-Axis Offset from +1 g, ±40 g Range, Z-Axis Orientation = -1 g

<!-- image -->

Figure 26. Internal ODR Frequency Histogram

<!-- image -->

Figure 27. Temperature Sensor Output and Linearity Offset vs. Temperature

<!-- image -->

## THEORY OF OPERATION

The ADXL359 is a complete 3-axis, ultralow noise and ultrastable offset MEMS accelerometer with outputs ratiometric to the analog 1.8 V supply, V 1P8ANA . The ADXL359 includes three high resolution ADCs that use the analog 1.8 V supply as a reference to provide digital outputs insensitive to the supply voltage. The ADXL359 is programmable for ±10 g , ±20 g , and ±40 g full scale. The ADXL359 offers both SPI and I 2 C communications ports.

The micromachined, sensing elements are fully differential, comprising the lateral x-axis and y-axis sensors and the vertical, teeter totter z-axis sensors. The x-axis and y-axis sensors and the z-axis sensors go through separate signal paths that minimize offset drift and noise. The signal path is fully differential.

The ADXL359 includes antialias filters before and after the high resolution Σ-Δ ADC. User-selectable output data rates and filter corners are provided. The temperature sensor is digitized with a 12-bit successive approximation register (SAR) ADC.

## APPLICATIONS INFORMATION

## DIGITAL OUTPUT

The ADXL359 includes an internal configurable digital band-pass filter. Both the high-pass and low-pass poles of the filter are adjustable, as detailed in the Filter Settings Register section and Table 42. At power-up, the default conditions for the filters are as follows:

- HPF = dc (off)
- LPF = 1000 Hz
- ODR = 4000 Hz

Figure 29. Application Circuit

<!-- image -->

## AXES OF ACCELERATION SENSITIVITY

Figure 30 shows the axes of acceleration sensitivity. Note that the output voltage increases when accelerated along the sensitive axis.

Figure 30. Axes of Acceleration Sensitivity

<!-- image -->

## POWER SEQUENCING

There are two methods for applying power to the device. Typically, internal LDO regulators generate the 1.8 V power for the analog and digital supplies, V 1P8ANA and V 1P8DIG , respectively. Optionally, connecting V SUPPLY to V SS and driving V 1P8ANA and V 1P8DIG with an external supply can supply V 1P8ANA and V 1P8DIG .

When using the internal LDO regulators, connect V SUPPLY to a voltage source between 2.25 V to 3.6 V. In this case, V DDIO and VSUPPLY can be powered in parallel. V SUPPLY must not exceed the VDDIO voltage by greater than 0.5 V. If necessary, V DDIO can be powered before V SUPPLY .

When disabling the internal LDO regulators and using an external 1.8 V supply to power V 1P8ANA and V 1P8DIG , tie V SUPPLY to ground and set V 1P8ANA and V 1P8DIG to the same final voltage level. In the case of bypassing the LDO regulators, the recommended power sequence is to apply power to V DDIO , followed by V 1P8DIG approximately 10 µs after, and then V 1P8ANA approximately 10 µs later. If necessary, V 1P8DIG and V DDIO can be powered from the same 1.8 V supply, which can also be tied to V 1P8ANA with proper isolation. In this case, proper decoupling and low frequency isolation are important to maintain the noise performance of the sensor.

## POWER SUPPLY DESCRIPTION

The ADXL359 has four different power supply domains: V SUPPLY , V1P8ANA , V 1P8DIG , and V DDIO . The internal analog and digital circuitry operates at 1.8 V nominal.

## VSUPPLY

VSUPPLY is 2.25 V to 3.6 V, which is the input range to the two LDO regulators that generate the nominal 1.8 V outputs for V 1P8ANA and V1P8DIG . Connect V SUPPLY to V SS to disable the LDO regulators, which allows driving V 1P8ANA and V 1P8DIG from an external source.

## V1P8ANA

All sensor and analog signal processing circuitry operates in this domain. The digital output ADXL359 includes ADCs that are ratiometric to V 1P8ANA , thereby rendering offset and sensitivity insensitive to the value of V 1P8ANA . V 1P8ANA can be an input or an output as defined by the state of the V SUPPLY voltage.

## V1P8DIG

V1P8DIG is the supply voltage for the internal logic circuitry. A separate LDO regulator decouples the digital supply noise from the analog signal path. V 1P8ANA can be an input or an output as defined by the state of the V SUPPLY voltage. If driven externally, V 1P8DIG must be the same voltage as the V 1P8ANA voltage.

## VDDIO

The V DDIO value determines the logic high levels. For the digital outputs of the ADXL359, V DDIO sets the logic high level for communications interface ports, as well as the interrupt and DRDY outputs.

The LDO regulators are operational when V SUPPLY is between 2.25 V and 3.6 V. V 1P8ANA and V 1P8DIG are the regulator outputs in this mode. Alternatively, when tying V SUPPLY to V SS , V 1P8ANA and V1P8DIG are supply voltage inputs with a 1.62 V to 1.98 V range.

## OVERRANGE PROTECTION

To avoid electrostatic capture of the proof mass when the accelerometer is subject to input acceleration beyond its full-scale range, all sensor drive clocks turn off for 0.5 ms. In the ±10 g range setting, the overrange protection activates for input signals beyond approximately ±40 g (±25%), and for the ±20 g and ±40 g range settings, the threshold corresponds to about ±80 g (±25%).

## APPLICATIONS INFORMATION

When overrange protection occurs, the ADXL359 output floats toward zero, and the first in, first out (FIFO) buffer begins filling with this data.

## SELF TEST

The ADXL359 incorporates a self test feature that effectively tests the mechanical and electronic system. Enabling self test stimulates the sensor electrostatically to produce an output corresponding to the test signal applied as well as the mechanical force exerted. Only the z-axis response is specified to validate the device functionality.

To perform a self test, set the ST1 bit in the SELF\_TEST register (Register 0x2E) to invoke self test mode. For the initial self test value, with the ST2 bit set to Logic 0 (low), record the output. Then, by setting the ST2 bit to Logic 1 (high), record the output to produce the second self test value. With the ST2 and ST1 bits set to Logic 1, the ADXL359 applies an electrostatic force to the mechanical sensor and induces a change in output in response to the force. The self test delta (or response) is the difference in output of the z-axis when ST2 is high vs. ST2 is low. After the self test measurement is complete, clear both register bits low to resume normal operation.

The self test feature rejects externally applied acceleration and only responds to the self test force, which allows an accurate measurement of the self test, even in the presence of external mechanical noise.

## FILTER

The ADXL359 uses an analog, low-pass, antialiasing filter to reduce out of band noise and to limit bandwidth at the output of the sensor. The ADXL359 provides further digital filtering options to maintain excellent noise performance at various ODRs.

The internal analog, low-pass antialiasing filter in the ADXL359 provides a fixed bandwidth of approximately 1.5 kHz, the frequency at which the output response is attenuated by approximately 50%. The shape of the filter response in the frequency domain is that of a sinc3 filter.

The ADXL359 provides an internal 20-bit, Σ-Δ ADC to digitize the filtered analog signal. Additional digital filtering (beyond the analog, low-pass, antialiasing filter) consists of a low-pass digital decimation filter and a bypassable high-pass filter that supports output data rates between 4 kHz and 3.906 Hz. The decimation filter consists of two stages. The first stage is fixed decimation with a 4 kHz ODR with a LPF cutoff (50% reduction in output response) at 1 kHz. A variable second stage decimation filter is used for the 2 kHz ODR and below (it is bypassed for 4 kHz ODR). Figure 31 shows the LPF response with a 1 kHz corner (4 kHz ODR) for the ADXL359. Note that Figure 31 does not include the fixed frequency analog, low-pass, antialiasing filter with a fixed bandwidth of approximately 1.5 kHz.

Figure 31. Digital LPF Response for 4 kHz ODR

<!-- image -->

The ADXL359 pass band of the signal path relates to the combined filter responses, including the analog filter previously described, and the digital decimation filter/ODR setting. Table 8 shows the delay associated with the decimation filter for each setting and provides the attenuation at the ODR/4 corner.

The ADXL359 also includes an optional digital high-pass filter with a programmable corner frequency. By default, the high-pass filter is disabled. The high-pass corner frequency, where the output is attenuated by 50%, is related to the ODR, and the HPF\_CORNER setting in the filter register (Register 0x28, Bits[6:4]). Table 9 shows the HPF\_CORNER response. Figure 32 and Figure 33 show the simulated high-pass filter response and delay for a 10 Hz cutoff.

The ADXL359 also includes an interpolation filter, after the decimation filters, that produces oversampled and upconverted data and provides an external synchronization option. See the Data Synchronization section for more details. Table 10 shows the delay and attenuation relative to the programmed ODR.

Figure 32. HPF Pass-Band Response for a 4 kHz ODR and an HPF\_CORNER Setting of 001 (Register 0x28, Bits[6:4])

<!-- image -->

Group delay is the digital filter delay from the input to the ADC until data is available at the interface.

This delay is the largest component of the total delay from sensor to serial interface.

## APPLICATIONS INFORMATION

Figure 33. HPF Delay Response for a 4 kHz ODR and an HPF\_CORNER Setting of 001 (Register 0x28, Bits[6:4])

<!-- image -->

Table 8. Digital Filter Group Delay and Profile

|                     | Delay        | Delay     | Attenuation             | Attenuation             |
|---------------------|--------------|-----------|-------------------------|-------------------------|
| Programmed ODR (Hz) | ODR (Cycles) | Time (ms) | Decimator at ODR/4 (dB) | Full Path at ODR/4 (dB) |
| 4000                | 2.52         | 0.63      | -3.44                   | -3.63                   |
| 4000/2 = 2000       | 2.00         | 1.00      | -2.21                   | -2.26                   |
| 4000/4 = 1000       | 1.78         | 1.78      | -1.92                   | -1.93                   |
| 4000/8 = 500        | 1.63         | 3.26      | -1.83                   | -1.83                   |
| 4000/16 = 250       | 1.57         | 6.27      | -1.83                   | -1.83                   |
| 4000/32 = 125       | 1.54         | 12.34     | -1.83                   | -1.83                   |
| 4000/64 = 62.5      | 1.51         | 24.18     | -1.83                   | -1.83                   |
| 4000/128 ~ 31       | 1.49         | 47.59     | -1.83                   | -1.83                   |
| 4000/256 ~ 16       | 1.50         | 96.25     | -1.83                   | -1.83                   |
| 4000/512 ~ 8        | 1.50         | 189.58    | -1.83                   | -1.83                   |
| 4000/1024 ~ 4       | 1.50         | 384.31    | -1.83                   | -1.83                   |

## Table 9. Digital High-Pass Filter Response

|   HPF_CORNER Register Setting (Register 0x28, Bits[6:4]) | HPF_CORNER Frequency, -3 dB Point Relative to ODR Setting   | -3 dB at 4 kHz ODR (Hz)   |
|----------------------------------------------------------|-------------------------------------------------------------|---------------------------|
|                                                      000 | Not applicable, no high-pass filter enabled                 | Off                       |
|                                                      001 | 24.7 × 10 -4 × ODR                                          | 9.88                      |
|                                                      010 | 6.2084 × 10 -4 × ODR                                        | 2.48                      |
|                                                      011 | 1.5545 × 10 -4 × ODR                                        | 0.62                      |
|                                                      100 | 0.3862 × 10 -4 × ODR                                        | 0.1545                    |
|                                                      101 | 0.0954 × 10 -4 × ODR                                        | 0.03816                   |
|                                                      110 | 0.0238 × 10 -4 × ODR                                        | 0.00952                   |

Table 10. Combined Digital Interpolation Filter and Decimation Filter Response

| Interpolator Data Rate Resolution Relative 64 × ODR (Hz)   |   Combined Interpolator/Decimator Delay (ODR Cycles) |   Combined Interpolator/ Decimator Delay (ms) |   Combined Interpolator/Decimator Output Attenuation at ODR/4 (dB) |
|------------------------------------------------------------|------------------------------------------------------|-----------------------------------------------|--------------------------------------------------------------------|
| 64 × 4000 = 256000                                         |                                              3.51661 |                                          0.88 |                                                              -6.18 |
| 64 × 2000 = 128000                                         |                                               3.0126 |                                          1.51 |                                                              -4.93 |
| 64 × 1000 = 64000                                          |                                                2.752 |                                          2.75 |                                                              -4.66 |
| 64 × 500 = 32000                                           |                                               2.6346 |                                          5.27 |                                                              -4.58 |
| 64 × 250 = 16000                                           |                                               2.5773 |                                         10.31 |                                                              -4.55 |
| 64 × 125 = 8000                                            |                                               2.5473 |                                         20.38 |                                                              -4.55 |
| 64 × 62.5 = 4000                                           |                                              2.53257 |                                         40.52 |                                                              -4.55 |
| 64 × 31.25 = 2000                                          |                                              2.52452 |                                         80.78 |                                                              -4.55 |
| 64 × 15.625 = 1000                                         |                                              2.52045 |                                        161.31 |                                                              -4.55 |

## APPLICATIONS INFORMATION

Table 10. Combined Digital Interpolation Filter and Decimation Filter Response

| Interpolator Data Rate Resolution Relative 64 × ODR (Hz)   |   Combined Interpolator/ Decimator Delay (ODR Cycles) |   Combined Interpolator/ Decimator Delay (ms) |   Combined Interpolator/Decimator Output Attenuation at ODR/4 (dB) |
|------------------------------------------------------------|-------------------------------------------------------|-----------------------------------------------|--------------------------------------------------------------------|
| 64 × 7.8125 = 500                                          |                                                2.5194 |                                        322.48 |                                                              -4.55 |
| 64 × 3.90625 = 250                                         |                                               2.51714 |                                        644.39 |                                                              -4.55 |

<!-- image -->

## SERIAL COMMUNICATIONS

The 4-wire serial interface communicates in either the SPI or I 2 C protocol. It affectively autodetects the format being used, requiring no configuration control to select the format.

## SPI PROTOCOL

Wire the ADXL359 for SPI communication as shown in the connection diagram in Figure 34. The SPI protocol timing is shown in Figure 35 to Figure 38. The timing scheme follows the clock polarity (CPOL) = 0 and clock phase (CPHA) = 0. The SPI clock speed ranges from 100 kHz to 10 MHz.

Figure 34. 4-Wire SPI Connection

<!-- image -->

Figure 38. SPI Timing Diagram-MultiByte Write

<!-- image -->

## SERIAL COMMUNICATIONS

## I 2 C PROTOCOL

The ADXL359 supports point to point I 2 C communication. However, when sharing an SDA bus, the ADXL359 may prevent communication with other devices on that bus. If at any point, even when the ADXL359 is not being addressed, the 0x3A and 0x3B bytes (when the ADXL359 device ID is set to 0x1D) or the 0xA6 and 0xA7 bytes (when the ADXL359 device ID is set to 0x53) are transmitted on the SDA bus, the ADXL359 responds with an acknowledge bit and pulls the SDA line down. For example, this response can occur when reading or writing the data bytes (0x3A and 0x3B or 0xA6 and 0xA7) to another sensor on the bus. When the ADXL359 pulls the SDA line down, communication with other devices on the bus may be interrupted. To resolve this, the ADXL359 must be connected to a separate SDA bus, or the SCL pin must be switched high when communication with the ADXL359 is not desired (it is normally grounded).

The ADXL359 supports standard (100 kHz), fast (up to 1 MHz) and high speed (up to 3.4 MHz) data transfer modes when the bus parameters in Table 3 are met. There is no minimum SCL frequency, with the exception that, when reading data, the clock must be fast enough to read an entire sample set before new data overwrites it. Single- or multiple-byte reads and /writes are supported. With the ASEL pin low, the I 2 C address for the device is 0x1D, and an alternate I 2 C address of 0x53 can be chosen by pulling the ASEL pin high.

There are no internal pull-up or pull-down resistors for any unused pins; therefore, there is no known state or default state for the pins if left floating or unconnected. It is required that SCLK/V SSIO be connected to ground when communicating to the ADXL359 using I 2 C.

Due to communication speed limitations, the maximum output data rate when using the 400 kHz I 2 C mode is 800 Hz, and it scales linearly with a change in the I 2 C communication speed. For example, using I 2 C at 100 kHz limits the maximum ODR to 200 Hz. Operation at an ODR more than the recommended maximum may result in an undesirable effect on the acceleration data, including missing samples or additional noise.

Figure 39 to Figure 41 detail the I 2 C protocol timing. The I 2 C interface can be used on most buses operating in I 2 C standard mode (100 kHz), fast mode (400 kHz), fast mode plus (1 MHz), and high speed mode (3.4 MHz). The ADXL359 I 2 C device ID is as follows:

- ASEL (pin) = 0, device address = 0x1D
- ASEL (pin) = 1, device address = 0x53

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed V DDIO by more than 0.3 V. External pull-up resistors, R P , are necessary for proper I 2 C operation.

## READING ACCELERATION OR TEMPERATURE DATA FROM THE INTERFACE

Acceleration data is left justified and has a register address order of the most significant data to the least significant data, which allows the user to use multibyte transfers and to take only as much data as required-either 8 bits, 16 bits, or 20 bits, plus the marker. Temperature data is 12 bits unsigned, right justified.

The ADXL359 temperature value is split over two bytes but is not double buffered, meaning the value can update between readings of the two registers. The data in XDATA, YDATA, and ZDATA registers is always the most recent available. It is not guaranteed that XDATA, YDATA, and ZDATA form a set corresponding to one sample point in time. The routine used to retrieve the data from the device controls this data set continuity. If data transfers are initiated when the DATA\_RDY bit goes high and completes in a time approximately equal to 1/ODR, XDATA, YDATA, and ZDATA apply to the same data set.

For multibyte read or write transactions through either serial interface, the internal register address auto-increments. When the top of the register address range (0x3FF) is reached, the auto-increment stops and does not wrap back to Hexadecimal Address 0x00.

The address auto-increment function disables when the FIFO address is used so that data can be read continuously from the FIFO as a multibyte transaction. In cases where the starting address of a multibyte transaction is less than the FIFO address, the address auto-increments until reaching the FIFO address, and then stops at the FIFO address.

Figure 40. I 2 C Timing Diagram-Single-Byte Write

<!-- image -->

## SERIAL COMMUNICATIONS

Figure 41. I 2 C Timing Diagram-MultiByte Write

<!-- image -->

## FIFO

The FIFO operates in stream mode; that is, when the FIFO overruns new data overwrites the oldest data in the FIFO. A read from the FIFO address guarantees that the three bytes associated with the acceleration measurement on an axis all pertain to the same measurement. If the FIFO never overflows, the data is always taken out in sets (multiples of three data points).

There are 96 21-bit locations in the FIFO. Each location contains 20 bits of data and a marker bit for the x-axis data. A single-byte read from the FIFO address pops one location from the FIFO. A multibyte read to the FIFO location pops the FIFO on the read of the first byte and every third byte read thereafter.

Figure 42 shows the organization of the data in the FIFO. The acceleration data is twos complement, 20-bit data. The FIFO control logic inserts the two virtual bits (0b00) between the data bits and the empty indicator bit. Bit 1 indicates that an attempt was made to read an empty FIFO, and that the data is not valid acceleration data. Bit 0 is a marker bit to identify the x-axis, which allows a user to verify that the FIFO data was correctly read. An acceleration data point for a given axis occupies one FIFO location. The read pointer, RD\_PTR, points to the oldest stored data that was not read already from the interface (see Figure 42). There are no physical x-acceleration, y-acceleration, or z-acceleration data registers. This data also comes directly from the most recent data set in the FIFO, which is pointed to by the z pointer, Z\_PTR (see Figure 42).

Figure 42. FIFO Data Organization

<!-- image -->

## INTERRUPTS

The status register (Register 0x04) contains five individual bits, four of which can be mapped to either the INT1 pin, the INT2 pin, or both. The polarity of the interrupt, active high or active low, is also selectable via the INT\_POL bit in the range (Register 0x2C) register. In general, the status register clears when read, but this is not the case if the condition that caused the interrupt persists after the read of the register. The definition of persist varies slightly in each case, but it is described in the DATA\_RDY, DRDY Pin, FIFO\_FULL, FIFO\_OVR, and Activity sections.

The DRDY pin is similar to the interrupt pins (INTx) but clears very differently, which is also described.

## DATA\_RDY

The DATA\_RDY bit (Register 0x04, Bit 0) is set when new acceleration data is available to the interface. It clears on a read of the status register. It is not set again until acceleration data that is newer than the status register read is available.

Special logic on the clear of the DATA\_RDY bit covers the corner case where new data arrives during the read of the status register. In this case, the data ready condition may be missed completely. This logic results in a delay of the clearing of the DATA\_RDY bit of up to four 512 kHz cycles.

## DRDY PIN

The DRDY pin (Pin 14) is not a status register bit. This pin instead behaves similar to an unmaskable interrupt. DRDY is set when new acceleration data is available to the interface. This pin clears on a read of the FIFO, on a read of the XDATA, YDATA, or ZDATA register, or by an autoclear function that occurs approximately halfway between output acceleration data sets.

DRDY is always active high. The INT\_POL bit does not affect DRDY. In external sync modes (EXT\_SYNC = 01, EXT\_SYNC = 10), the first few DRDY pulses after initial synchronization can be lost or corrupted. The length of this potential corruption is less than the group delay.

## FIFO\_FULL

The FIFO\_FULL bit (Register 0x04, Bit 1) is set when the entries in the FIFO are equal to the setting of the FIFO\_SAMPLES bits. The bit clears as follows:

- If the number of entries in the FIFO is less than the number of samples indicated by the FIFO\_SAMPLES bits, which is only the case if sufficient data is read from the FIFO.
- On a read of the status register, but only when the entries in the FIFO are less than the FIFO\_SAMPLES bits.

## FIFO\_OVR

The FIFO\_OVR bit (Register 0x04, Bit 2) is set when the FIFO is so far overrange that data is lost. The specified size of the FIFO is 96 locations. The FIFO\_OVR is set only when there is an attempt to write past this 96 location limit.

A read of the status register clears FIFO\_OVR. It is not set again until data is lost subsequent to this data register read.

## ACTIVITY

The activity bit (Register 0x04, Bit 3) is set when the measured acceleration on any axis is more than the ACT\_THRESH bits, Bits[15:0], for ACT\_COUNT, Bits[7:0], consecutive measurements. An overthreshold condition can shift from one axis to another on successive measurements and is still counted toward the consecutive ACT\_COUNT count.

A read of the status register clears the activity bit, but it sets again at the end of the next measurement if the activity bit conditions are still satisfied.

## NVM\_BUSY

The NVM\_BUSY bit (Register 0x04, Bit 1) indicates that the nonvolatile memory (NVM) controller is busy, and it cannot be accessed to read, write, or generate an interrupt.

A status register read that occurs after the NVM controller is no longer busy clears NVM\_BUSY.

## EXTERNAL SYNCHRONIZATION AND INTERPOLATION

There are three possible synchronization options for the ADXL359, shown in Figure 43 to Figure 45. For clarity, the clock frequencies and delays are drawn to scale. The labels in Figure 43 to Figure 45 are defined as follows:

- Internal ODR is the alignment of the decimated output data based on the internal clock.
- ADC CLK shows the internal controller clock rate
- DRDY is an output indicator signaling a sample is ready.

The three modes are as follows:

- No external synchronization (internal clocks used)
- Synchronization with interpolation filter enabled .
- Sync with an external sync and clock signals, no interpolation filter

## EXT\_SYNC = 00-No External Sync or Interpolation

For this case, an internal clock that serves as the synchronization controller generates the data. No external signals are required, and this is used commonly when the external processor retrieves data from the device asynchronously and absolute synchronization to an external source is not required. Use Register 0x28 to program the ODR.

The device outputs a DRDY (active high) to signal that a new sample is available, and data is retrieved from the real-time registers or the FIFO. The group delay is based on the decimation setting as shown in Table 8.

## INTERRUPTS

## EXT\_SYNC = 10-External Sync with Interpolation

In this case, the internal clock generates data; however, an interpolation filter provides additional time resolution of 64 times the programmed ODR. Synchronization using interpolation filters and an external ODR clock is commonly used when the external processor can provide a synchronization signal (which is asynchronous to the internal clock) at the desired ODR. Synchronization with the interpolation filter enabled (EXT\_SYNC = 10) allows the nonsynchronous external clock to output data most closely associated with the external clock rising edge. The interpolation filter provides a frequency resolution related to ODR (see Table 10).

The advantage of this mode is that data is available at a user defined sample rate and is asynchronous to the internal oscillator. The disadvantage of this mode is that the group delay is increased, with increased attenuation at the band edge. Additionally, because there is a limit to the time resolution, there is some distortion related to the mismatch of the external sync relative to the internal oscillator. This mismatch degrades spectral performance. The group delay is based on the decimation setting and interpolation setting (see Table 10). Table 11 shows the delay between the SYNC signal (input) to DRDY (output).

## Table 11. EXT\_SYNC = 10, DRDY Delay

| ODR_LPF   |   SYNC to DRDY Delay (Oscillator Cycles) |
|-----------|------------------------------------------|
| 0x0       |                                        8 |
| 0x1       |                                       10 |
| 0x2       |                                       14 |
| 0x3       |                                       22 |
| 0x4       |                                       38 |
| 0x5       |                                       70 |
| 0x6       |                                      134 |
| 0x7       |                                      262 |
| 0x8       |                                     1031 |
| 0x9       |                                     2054 |
| 0x10      |                                     4102 |

## Table 12. Multiplexing of INT2 and DRDY

| Register or Bit Fields   | Register or Bit Fields   | Register or Bit Fields   | Pins          | Pins          |                                                                                                                                                                   |
|--------------------------|--------------------------|--------------------------|---------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EXT_CLK                  | EXT_SYNC, Bits[1:0]      | INT_MAP, Bits[7:4]       | INT2 (Pin 13) | DRDY (Pin 14) | Comments                                                                                                                                                          |
| 0                        | 00                       | 0000                     | Low           | DRDY          | Synchronization is to the internal clocks, and there is no external clock synchronization.                                                                        |
| 0                        | 00                       | Not 0000                 | INT2          | DRDY          | Synchronization is to the internal clocks, and there is no external clock synchronization.                                                                        |
| 1                        | 00                       | 0000                     | EXT_CLK       | DRDY          | Synchronization is to the internal clocks, and there is no external clock synchronization.                                                                        |
| 1                        | 00                       | Not 0000 1               | EXT_CLK       | DRDY          | Synchronization is to the internal clocks, and there is no external clock synchronization.                                                                        |
| 0                        | 01                       | 0000                     | DRDY 2        | SYNC          | These options reset the digital filters on every synchronization pulse and are not recommended.                                                                   |
| 0                        | 01 3                     | Not 0000                 | INT2          | SYNC          | These options reset the digital filters on every synchronization pulse and are not recommended.                                                                   |
| 1                        | 01 3                     | 0000                     | EXT_CLK       | SYNC          | External synchronization, no interpolation filter, and DRDY (active high) signals that data is ready. Data represents a sample point group delay earlier in time. |
| 1                        | 01 3                     | Not 0000 1               | EXT_CLK       | SYNC          | External synchronization, no interpolation filter, and DRDY (active high) signals that data is ready. Data represents a sample point group delay earlier in time. |
| 0                        | 10                       | 0000                     | DRDY 2        | SYNC          | External synchronization, interpolation filter, and DRDY (active high) signals that data is ready. Data sample group delay earlier in time.                       |
| 0                        | 10 3                     | Not 0000                 | INT2          | SYNC          | External synchronization, interpolation filter, and DRDY (active high) signals that data is ready. Data sample group delay earlier in time.                       |

## EXT\_SYNC = 01-External Sync and External Clock, No Interpolation Filter

In this case, an external source provides an external clock at a frequency of 4 × 64 × ODR. The external clock becomes the controller clock source for the device. In addition, an external synchronization signal is needed to align the decimation filter output to a specific clock edge, which provides full external synchronization and is commonly used when a fixed external clock captures and processes data, and asynchronous clocks are not allowed. When using multiple sensors, synchronization with an external controller clock is beneficial and requires time alignment.

When configured for EXT\_SYNC = 01 with an ODR of 4 kHz, the user must supply an external clock at 1.024 MHz (64 × 4 × 4 kHz) on the INT2 pin (Pin 13), and an external synchronization on DRDY pin (Pin 14), as shown in Table 12.

Special restrictions when using this mode include the following:

- An external clock (EXT\_CLK) must be provided as well as an external sync.
- The frequency of EXT\_CLK must be exactly 4 × 64 × ODR.
- The width of synchronization must be a minimum of four EXT\_CLK periods.
- The phase of synchronization must meet an approximate 25 ns setup time to the EXT\_CLK rising edge.

When using the EXT\_SYNC mode and without providing synchronization, the device runs on its own synchronization. Similarly, after synchronization, the device continues to run synchronized to the last synchronization pulse it received, which means that EXT\_SYNC = 01 mode can be used with only a single synchronization pulse.

The interpolation filter provides a frequency resolution related to the ODR (see Table 10). In this case, the data provided corresponds to the external signal, which can be greater than the set ODR, but the output pass band remains the same it was prior to the interpolation filter.

## INTERRUPTS

Table 12. Multiplexing of INT2 and DRDY

| Register or Bit Fields   | Register or Bit Fields   | Register or Bit Fields   | Pins          | Pins          |    |
|--------------------------|--------------------------|--------------------------|---------------|---------------|----|
| EXT_CLK                  | EXT_SYNC, Bits[1:0]      | INT_MAP, Bits[7:4]       | INT2 (Pin 13) | DRDY (Pin 14) |    |
|                          | 10 3                     | 0000                     | EXT_CLK       | SYNC          |  1 |
|                          | 10 3                     | Not 0000                 | EXT_CLK       | SYNC          |  1 |

2 DRDY routing through the INT\_MAP register takes precedence over the default, per Table 12.

3 No DRDY.

<!-- image -->

## REGISTER MAP

Note that while configuring the ADXL359 in an application, all configuration registers must be programmed before enabling measurement mode in the POWER\_CTL register. When the ADXL359 is in measurement mode, only the following configurations can

## Table 13. Register Map

| Hex. Addr.   | Register Name   | Bit 7                  | Bit 6                  | Bit 5                  | Bit 4                  | Bit 3                   | Bit 2                   | Bit 1                   | Bit 0                   | Reset   | R/W   |
|--------------|-----------------|------------------------|------------------------|------------------------|------------------------|-------------------------|-------------------------|-------------------------|-------------------------|---------|-------|
| 0x00         | DEVID_AD        | DEVID_AD               | DEVID_AD               | DEVID_AD               | DEVID_AD               | DEVID_AD                | DEVID_AD                | DEVID_AD                | DEVID_AD                | 0xAD    | R     |
| 0x01         | DEVID_MST       | DEVID_MST              | DEVID_MST              | DEVID_MST              | DEVID_MST              | DEVID_MST               | DEVID_MST               | DEVID_MST               | DEVID_MST               | 0x1D    | R     |
| 0x02         | PARTID          | PARTID                 | PARTID                 | PARTID                 | PARTID                 | PARTID                  | PARTID                  | PARTID                  | PARTID                  | 0xE9    | R     |
| 0x03         | REVID           | REVID                  | REVID                  | REVID                  | REVID                  | REVID                   | REVID                   | REVID                   | REVID                   | 0x01    | R     |
| 0x04         | Status          | Reserved               | Reserved               | Reserved               | NVM_ BUSY              | Activity                | FIFO_OVR                | FIFO_FULL               | DATA_RDY                | 0x00    | R     |
| 0x05         | FIFO_ENTRIES    | Reserved               | Reserved               | Reserved               | Reserved               | FIFO_ENTRIES            | FIFO_ENTRIES            | FIFO_ENTRIES            | FIFO_ENTRIES            | 0x00    | R     |
| 0x06         | TEMP2           |                        | Reserved               |                        |                        | Temperature, Bits[11:8] | Temperature, Bits[11:8] | Temperature, Bits[11:8] | Temperature, Bits[11:8] | 0x00    | R     |
| 0x07         | TEMP1           | Temperature, Bits[7:0] | Temperature, Bits[7:0] | Temperature, Bits[7:0] | Temperature, Bits[7:0] | Temperature, Bits[7:0]  | Temperature, Bits[7:0]  | Temperature, Bits[7:0]  | Temperature, Bits[7:0]  | 0x00    | R     |
| 0x08         | XDATA3          | XDATA, Bits[19:12]     | XDATA, Bits[19:12]     | XDATA, Bits[19:12]     | XDATA, Bits[19:12]     | XDATA, Bits[19:12]      | XDATA, Bits[19:12]      | XDATA, Bits[19:12]      | XDATA, Bits[19:12]      | 0x00    | R     |
| 0x09         | XDATA2          | XDATA,                 | XDATA,                 | XDATA,                 | XDATA,                 | Bits[11:4]              | Bits[11:4]              | Bits[11:4]              | Bits[11:4]              | 0x00    | R     |
| 0x0A         | XDATA1          |                        | XDATA,                 | Bits[3:0]              |                        | Reserved                | Reserved                | Reserved                | Reserved                | 0x00    | R     |
| 0x0B         | YDATA3          | YDATA, Bits[19:12]     | YDATA, Bits[19:12]     | YDATA, Bits[19:12]     | YDATA, Bits[19:12]     | YDATA, Bits[19:12]      | YDATA, Bits[19:12]      | YDATA, Bits[19:12]      | YDATA, Bits[19:12]      | 0x00    | R     |
| 0x0C         | YDATA2          | YDATA, Bits[11:4]      | YDATA, Bits[11:4]      | YDATA, Bits[11:4]      | YDATA, Bits[11:4]      | YDATA, Bits[11:4]       | YDATA, Bits[11:4]       | YDATA, Bits[11:4]       | YDATA, Bits[11:4]       | 0x00    | R     |
| 0x0D         | YDATA1          | Bits[3:0]              | Bits[3:0]              | Bits[3:0]              | Bits[3:0]              | Reserved                | Reserved                | Reserved                | Reserved                | 0x00    | R     |
| 0x0E         | ZDATA3          | ZDATA, Bits[19:12]     | ZDATA, Bits[19:12]     | ZDATA, Bits[19:12]     | ZDATA, Bits[19:12]     | ZDATA, Bits[19:12]      | ZDATA, Bits[19:12]      | ZDATA, Bits[19:12]      | ZDATA, Bits[19:12]      | 0x00    | R     |
| 0x0F         | ZDATA2          | ZDATA, Bits[11:4]      | ZDATA, Bits[11:4]      | ZDATA, Bits[11:4]      | ZDATA, Bits[11:4]      | ZDATA, Bits[11:4]       | ZDATA, Bits[11:4]       | ZDATA, Bits[11:4]       | ZDATA, Bits[11:4]       | 0x00    | R     |
| 0x10         | ZDATA1          |                        | ZDATA,                 | Bits[3:0]              |                        | Reserved                | Reserved                | Reserved                | Reserved                | 0x00    | R     |
| 0x11         | FIFO_DATA       | FIFO_DATA              | FIFO_DATA              | FIFO_DATA              | FIFO_DATA              |                         |                         |                         |                         | 0x00    | R     |
| 0x1E         | OFFSET_X_H      | OFFSET_X, Bits[15:8]   | OFFSET_X, Bits[15:8]   | OFFSET_X, Bits[15:8]   | OFFSET_X, Bits[15:8]   | OFFSET_X, Bits[15:8]    | OFFSET_X, Bits[15:8]    | OFFSET_X, Bits[15:8]    | OFFSET_X, Bits[15:8]    | 0x00    | R/W   |
| 0x1F         | OFFSET_X_L      | OFFSET_X, Bits[7:0]    | OFFSET_X, Bits[7:0]    | OFFSET_X, Bits[7:0]    | OFFSET_X, Bits[7:0]    | OFFSET_X, Bits[7:0]     | OFFSET_X, Bits[7:0]     | OFFSET_X, Bits[7:0]     | OFFSET_X, Bits[7:0]     | 0x00    | R/W   |
| 0x20         | OFFSET_Y_H      | OFFSET_Y, Bits[15:8]   | OFFSET_Y, Bits[15:8]   | OFFSET_Y, Bits[15:8]   | OFFSET_Y, Bits[15:8]   | OFFSET_Y, Bits[15:8]    | OFFSET_Y, Bits[15:8]    | OFFSET_Y, Bits[15:8]    | OFFSET_Y, Bits[15:8]    | 0x00    | R/W   |
| 0x21         | OFFSET_Y_L      | OFFSET_Y, Bits[7:0]    | OFFSET_Y, Bits[7:0]    | OFFSET_Y, Bits[7:0]    | OFFSET_Y, Bits[7:0]    | OFFSET_Y, Bits[7:0]     | OFFSET_Y, Bits[7:0]     | OFFSET_Y, Bits[7:0]     | OFFSET_Y, Bits[7:0]     | 0x00    | R/W   |
| 0x22         | OFFSET_Z_H      | OFFSET_Z, Bits[15:8]   | OFFSET_Z, Bits[15:8]   | OFFSET_Z, Bits[15:8]   | OFFSET_Z, Bits[15:8]   | OFFSET_Z, Bits[15:8]    | OFFSET_Z, Bits[15:8]    | OFFSET_Z, Bits[15:8]    | OFFSET_Z, Bits[15:8]    | 0x00    | R/W   |
| 0x23         | OFFSET_Z_L      | OFFSET_Z, Bits[7:0]    | OFFSET_Z, Bits[7:0]    | OFFSET_Z, Bits[7:0]    | OFFSET_Z, Bits[7:0]    | OFFSET_Z, Bits[7:0]     | OFFSET_Z, Bits[7:0]     | OFFSET_Z, Bits[7:0]     | OFFSET_Z, Bits[7:0]     | 0x00    | R/W   |
| 0x24         | ACT_EN          | ACT_Z ACT_Y ACT_X      | ACT_Z ACT_Y ACT_X      | ACT_Z ACT_Y ACT_X      | ACT_Z ACT_Y ACT_X      | ACT_Z ACT_Y ACT_X       | ACT_Z ACT_Y ACT_X       | ACT_Z ACT_Y ACT_X       | ACT_Z ACT_Y ACT_X       | 0x00    | R/W   |
| 0x25         | ACT_THRESH_H    | ACT_THRESH, Bits[15:8] | ACT_THRESH, Bits[15:8] | ACT_THRESH, Bits[15:8] | ACT_THRESH, Bits[15:8] | ACT_THRESH, Bits[15:8]  | ACT_THRESH, Bits[15:8]  | ACT_THRESH, Bits[15:8]  | ACT_THRESH, Bits[15:8]  | 0x00    | R/W   |
| 0x26         | ACT_THRESH_L    | ACT_THRESH, Bits[7:0]  | ACT_THRESH, Bits[7:0]  | ACT_THRESH, Bits[7:0]  | ACT_THRESH, Bits[7:0]  | ACT_THRESH, Bits[7:0]   | ACT_THRESH, Bits[7:0]   | ACT_THRESH, Bits[7:0]   | ACT_THRESH, Bits[7:0]   | 0x00    | R/W   |
| 0x27         | ACT_COUNT       | ACT_COUNT              | ACT_COUNT              | ACT_COUNT              | ACT_COUNT              | ACT_COUNT               | ACT_COUNT               | ACT_COUNT               | ACT_COUNT               | 0x01    | R/W   |
| 0x28         | Filter          | Reserved ODR_LPF       | Reserved ODR_LPF       | HPF_CORNER             | Reserved ODR_LPF       | Reserved ODR_LPF        | Reserved ODR_LPF        | Reserved ODR_LPF        | Reserved ODR_LPF        | 0x00    | R/W   |
| 0x29         | FIFO_SAMPLES    | Reserved               |                        |                        |                        | FIFO_SAMPLES            | FIFO_SAMPLES            | FIFO_SAMPLES            | FIFO_SAMPLES            | 0x60    | R/W   |
| 0x2A         | INT_MAP         | ACT_EN2                | OVR_EN2                | FULL_EN2               | RDY_EN2                | ACT_EN1                 | OVR_EN1                 | FULL_EN1                | RDY_EN1                 | 0x00    | R/W   |
| 0x2B         | Sync            |                        |                        | Reserved               |                        |                         | EXT_CLK                 | EXT_SYNC                |                         | 0x00    | R/W   |
| 0x2C         | Range           | I2C_HS                 | INT_POL                |                        | Reserved               |                         |                         | Range                   | Range                   | 0x81    | R/W   |
| 0x2D         |                 |                        |                        | Reserved               |                        |                         | DRDY_OFF                | TEMP_OFF                | Standby                 | 0x01    | R/W   |
| 0x2E         | POWER_CTL       |                        |                        |                        |                        |                         |                         | ST2                     |                         |         | R/W   |
|              | SELF_TEST       |                        |                        | Reserved               |                        |                         |                         |                         | ST1                     | 0x00    |       |
| 0x2F         | Reset           | Reset                  | Reset                  | Reset                  | Reset                  | Reset                   | Reset                   | Reset                   | Reset                   | 0x00    | W     |

change: the HPF\_CORNER bits in the filter register, the INT\_MAP register, the ST1 and ST2 bits in the SELF\_TEST register, and the reset register.

## REGISTER DEFINITIONS

This section describes the functions of the ADXL359 registers. The ADXL359 powers up with the default register values, as shown in the reset column of Table 13.

## ANALOG DEVICES ID REGISTER

This register contains the Analog Devices ID, 0xAD.

## Address: 0x00, Reset: 0xAD, Name: DEVID\_AD

Table 14. Bit Descriptions for DEVID\_AD

| Bits   | Bit Name   | Settings   | Description       | Reset   | Access   |
|--------|------------|------------|-------------------|---------|----------|
| [7:0]  | DEVID_AD   |            | Analog Devices ID | 0xAD    | R        |

## ANALOG DEVICES MEMS ID REGISTER

This register contains the Analog Devices MEMS ID, 0x1D.

## Address: 0x01, Reset: 0x1D, Name: DEVID\_MST

Table 15. Bit Descriptions for DEVID\_MST

| Bits   | Bit Name   | Settings   | Description            | Reset   | Access   |
|--------|------------|------------|------------------------|---------|----------|
| [7:0]  | DEVID_MST  |            | Analog Devices MEMS ID | 0x1D    | R        |

## DEVICE ID REGISTER

This register contains the device ID, 0xE9 (351 octal).

Address: 0x02, Reset: 0xE9, Name: PARTID

Table 16. Bit Descriptions for PARTID

| Bits   | Bit Name   | Settings   | Description           | Reset   | Access   |
|--------|------------|------------|-----------------------|---------|----------|
| [7:0]  | PARTID     |            | Device ID (351 octal) | 0xE9    | R        |

## PRODUCT REVISION ID REGISTER

This register contains the product revision ID, beginning with 0x00 and incrementing for each subsequent revision.

## Address: 0x03, Reset: 0x01, Name: REVID

Table 17. Bit Descriptions for REVID

| Bits   | Bit Name   | Settings   | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
| [7:0]  | REVID      |            | Mask revision | 0x01    | R        |

## STATUS REGISTER

This register includes bits that describe the various conditions of the ADXL359.

## Address: 0x04, Reset: 0x00, Name: Status

Table 18. Bit Descriptions for Status

| Bits   | Bit Name   | Settings   | Description                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------|---------|----------|
| [7:5]  | Reserved   |            | Reserved.                                                                           | 0x0     | R        |
| 4      | NVM_BUSY   |            | NVM controller is busy with a refresh, programming, or a built in self test (BIST). | 0x0     | R        |
| 3      | Activity   |            | Activity, as defined in the ACT_THRESH_x and ACT_COUNT registers, is detected.      | 0x0     | R        |
| 2      | FIFO_OVR   |            | FIFO has overrun, and the oldest data is lost.                                      | 0x0     | R        |

## REGISTER DEFINITIONS

Table 18. Bit Descriptions for Status

|   Bits | Bit Name   | Settings   | Description                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------|---------|----------|
|      1 | FIFO_FULL  |            | FIFO watermark is reached.                                                          | 0x0     | R        |
|      0 | DATA_RDY   |            | A complete x-axis, y-axis, and z-axis measurement was made and results can be read. | 0x0     | R        |

## FIFO ENTRIES REGISTER

This register indicates the number of valid data samples present in the FIFO buffer. This number ranges from 0 to 96.

## Address: 0x05, Reset: 0x00, Name: FIFO\_ENTRIES

Table 19. Bit Descriptions for FIFO\_ENTRIES

| Bits   | Bit Name     | Settings   | Description                               | Reset   | Access   |
|--------|--------------|------------|-------------------------------------------|---------|----------|
| 7      | Reserved     |            | Reserved                                  | 0x0     | R        |
| [6:0]  | FIFO_ENTRIES |            | Number of data samples stored in the FIFO | 0x0     | R        |

## TEMPERATURE DATA REGISTERS

These two registers contain the uncalibrated temperature data. The nominal intercept is 1885 LSB at 25°C and the nominal slope is -9.05 LSB/°C. TEMP2 contains the four most significant bits, and TEMP1 contains the eight least significant bits of the 12-bit value. The ADXL359 temperature value is not double buffered, meaning the value can update between reading of the two registers.

## Address: 0x06, Reset: 0x00, Name: TEMP2

Table 20. Bit Descriptions for TEMP2

| Bits   | Bit Name                | Settings   | Description                   | Reset   | Access   |
|--------|-------------------------|------------|-------------------------------|---------|----------|
| [7:4]  | Reserved                |            | Reserved                      |         |          |
| [3:0]  | Temperature, Bits[11:8] |            | Uncalibrated temperature data | 0x0     | R        |

## Address: 0x07, Reset: 0x00, Name: TEMP1

Table 21. Bit Descriptions for TEMP1

| Bits   | Bit Name               | Settings   | Description                   | Reset   | Access   |
|--------|------------------------|------------|-------------------------------|---------|----------|
| [7:0]  | Temperature, Bits[7:0] |            | Uncalibrated temperature data | 0x00    | R        |

## X-AXIS DATA REGISTERS

These three registers contain the x-axis acceleration data. Data is left justified and formatted as twos complement.

## Address: 0x08, Reset: 0x00, Name: XDATA3

Table 22. Bit Descriptions for XDATA3

| Bits   | Bit Name           | Settings   | Description   | Reset   | Access   |
|--------|--------------------|------------|---------------|---------|----------|
| [7:0]  | XDATA, Bits[19:12] |            | X-axis data   | 0x00    | R        |

## Address: 0x09, Reset: 0x00, Name: XDATA2

Table 23. Bit Descriptions for XDATA2

| Bits   | Bit Name          | Settings   | Description   | Reset   | Access   |
|--------|-------------------|------------|---------------|---------|----------|
| [7:0]  | XDATA, Bits[11:4] |            | X-axis data   | 0x00    | R        |

## REGISTER DEFINITIONS

## Address: 0x0A, Reset: 0x00, Name: XDATA1

Table 24. Bit Descriptions for XDATA1

| Bits   | Bit Name         | Settings   | Description   | Reset   | Access   |
|--------|------------------|------------|---------------|---------|----------|
| [7:4]  | XDATA, Bits[3:0] |            | X-axis data   | 0x0     | R        |
| [3:0]  | Reserved         |            | Reserved      | 0x0     | R        |

## Y-AXIS DATA REGISTERS

These three registers contain the y-axis acceleration data. Data is left justified and formatted as twos complement.

## Address: 0x0B, Reset: 0x00, Name: YDATA3

Table 25. Bit Descriptions for YDATA3

| Bits   | Bit Name           | Settings   | Description   | Reset   | Access   |
|--------|--------------------|------------|---------------|---------|----------|
| [7:0]  | YDATA, Bits[19:12] |            | Y-axis data   | 0x00    | R        |

## Address: 0x0C, Reset: 0x00, Name: YDATA2

Table 26. Bit Descriptions for YDATA2

| Bits   | Bit Name          | Settings   | Description   | Reset   | Access   |
|--------|-------------------|------------|---------------|---------|----------|
| [7:0]  | YDATA, Bits[11:4] |            | Y-axis data   | 0x00    | R        |

## Address: 0x0D, Reset: 0x00, Name: YDATA1

Table 27. Bit Descriptions for YDATA1

| Bits   | Bit Name         | Settings   | Description   | Reset   | Access   |
|--------|------------------|------------|---------------|---------|----------|
| [7:4]  | YDATA, Bits[3:0] |            | Y-axis data   | 0x0     | R        |
| [3:0]  | Reserved         |            | Reserved      | 0x0     | R        |

## Z-AXIS DATA REGISTERS

These three registers contain the z-axis acceleration data. Data is left justified and formatted as twos complement.

## Address: 0x0E, Reset: 0x00, Name: ZDATA3

Table 28. Bit Descriptions for ZDATA3

| Bits   | Bit Name           | Settings   | Description   | Reset   | Access   |
|--------|--------------------|------------|---------------|---------|----------|
| [7:0]  | ZDATA, Bits[19:12] |            | Z-axis data   | 0x00    | R        |

## Address: 0x0F, Reset: 0x00, Name: ZDATA2

Table 29. Bit Descriptions for ZDATA2

| Bits   | Bit Name          | Settings   | Description   | Reset   | Access   |
|--------|-------------------|------------|---------------|---------|----------|
| [7:0]  | ZDATA, Bits[11:4] |            | Z-axis data   | 0x00    | R        |

## Address: 0x10, Reset: 0x00, Name: ZDATA1

Table 30. Bit Descriptions for ZDATA1

| Bits   | Bit Name         | Settings   | Description   | Reset   | Access   |
|--------|------------------|------------|---------------|---------|----------|
| [7:4]  | ZDATA, Bits[3:0] |            | Z-axis data   | 0x0     | R        |
| [3:0]  | Reserved         |            | Reserved      | 0x0     | R        |

## REGISTER DEFINITIONS

## FIFO ACCESS REGISTER

## Address: 0x11, Reset: 0x00, Name: FIFO\_DATA

Read this register to access data stored in the FIFO.

Table 31. Bit Descriptions for FIFO\_DATA

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | FIFO_DATA  |            | FIFO data is formatted to 24 bits, three bytes, most significant byte first. A read to this address pops an effective three equal byte words of axis data from the FIFO. Two subsequent reads or a multibyte read completes the transaction of this data onto the interface. Continued reading or a sustained multibyte read of this field continues to pop the FIFO every third byte. Multibyte reads to this address do not increment the address pointer. If this address is read due to an auto-increment from the previous address, it does not pop the FIFO. Instead, it returns zeros and increments on to the next address. | 0x0     | R        |

## X-AXIS OFFSET TRIM REGISTERS

## Address: 0x1E, Reset: 0x00, Name: OFFSET\_X\_H

Table 32. Bit Descriptions for OFFSET\_X\_H

| Bits   | Bit Name             | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_X, Bits[15:8] |            | Offset added to x-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_X, Bits[15:0] matches the significance of XDATA, Bits[19:4]. | 0x0     | R/W      |

## Address: 0x1F, Reset: 0x00, Name: OFFSET\_X\_L

Table 33. Bit Descriptions for OFFSET\_X\_L

| Bits   | Bit Name            | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|---------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_X, Bits[7:0] |            | Offset added to x-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_X, Bits[15:0] matches the significance of XDATA, Bits[19:4]. | 0x0     | R/W      |

## Y-AXIS OFFSET TRIM REGISTERS

## Address: 0x20, Reset: 0x00, Name: OFFSET\_Y\_H

Table 34. Bit Descriptions for OFFSET\_Y\_H

| Bits   | Bit Name             | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_Y, Bits[15:8] |            | Offset added to y-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_Y, Bits[15:0] matches the significance of YDATA, Bits[19:4]. | 0x0     | R/W      |

## Address: 0x21, Reset: 0x00, Name: OFFSET\_Y\_L

Table 35. Bit Descriptions for OFFSET\_Y\_L

| Bits   | Bit Name            | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|---------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_Y, Bits[7:0] |            | Offset added to y-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_Y, Bits[15:0] matches the significance of YDATA, Bits[19:4]. | 0x0     | R/W      |

## REGISTER DEFINITIONS

## Z-AXIS OFFSET TRIM REGISTERS

Address: 0x22, Reset: 0x00, Name: OFFSET\_Z\_H

Table 36. Bit Descriptions for OFFSET\_Z\_H

| Bits   | Bit Name             | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|----------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_Z, Bits[15:8] |            | Offset added to z-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_Z, Bits[15:0] matches the significance of ZDATA, Bits[19:4]. | 0x0     | R/W      |

## Address: 0x23, Reset: 0x00, Name: OFFSET\_Z\_L

## Table 37. Bit Descriptions for OFFSET\_Z\_L

| Bits   | Bit Name            | Settings   | Description                                                                                                                                                                               | Reset   | Access   |
|--------|---------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | OFFSET_Z, Bits[7:0] |            | Offset added to z-axis data after all other signal processing. Data is in twos complement format. The significance of OFFSET_Z, Bits[15:0] matches the significance of ZDATA, Bits[19:4]. | 0x0     | R/W      |

## ACTIVITY ENABLE REGISTER

## Address: 0x24, Reset: 0x00, Name: ACT\_EN

Table 38. Bit Descriptions for ACT\_EN

| Bits   | Bit Name   | Settings   | Description                                                     | Reset   | Access   |
|--------|------------|------------|-----------------------------------------------------------------|---------|----------|
| [7:3]  | Reserved   |            | Reserved.                                                       | 0x0     | R        |
| 2      | ACT_Z      |            | Z-axis data is a component of the activity detection algorithm. | 0x0     | R/W      |
| 1      | ACT_Y      |            | Y-axis data is a component of the activity detection algorithm. | 0x0     | R/W      |
| 0      | ACT_X      |            | X-axis data is a component of the activity detection algorithm. | 0x0     | R/W      |

## ACTIVITY THRESHOLD REGISTERS

## Address: 0x25, Reset: 0x00, Name: ACT\_THRESH\_H

Table 39. Bit Descriptions for ACT\_THRESH\_H

| Bits   | Bit Name               | Settings   | Description                                                                                                                                                                                                                                                           | Reset   | Access   |
|--------|------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ACT_THRESH, Bits[15:8] |            | Threshold for activity detection. Acceleration magnitude must be above ACT_THRESH to trigger the activity counter. ACT_THRESH is an unsigned magnitude. The significance of ACT_THRESH, Bits[15:0] matches the significance of Bits[18:3] of XDATA, YDATA, and ZDATA. | 0x0     | R/W      |

## Address: 0x26, Reset: 0x00, Name: ACT\_THRESH\_L

## Table 40. Bit Descriptions for ACT\_THRESH\_L

| Bits   | Bit Name              | Settings   | Description                                                                                                                                                                                                                                                                                   | Reset   | Access   |
|--------|-----------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ACT_THRESH, Bits[7:0] |            | Threshold for activity detection. The acceleration magnitude must be greater than the value in ACT_THRESH to trigger the activity counter. ACT_THRESH is an unsigned magnitude. The significance of ACT_THRESH, Bits[15:0] matches the significance of Bits[18:3] of XDATA, YDATA, and ZDATA. | 0x0     | R/W      |

## REGISTER DEFINITIONS

## ACTIVITY COUNT REGISTER

## Address: 0x27, Reset: 0x01, Name: ACT\_COUNT

Table 41. Bit Descriptions for ACT\_COUNT

| Bits   | Bit Name   | Settings   | Description                                                                                | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------|---------|----------|
| [7:0]  | ACT_COUNT  |            | Number of consecutive events above threshold (from ACT_THRESH) required to detect activity | 0x1     | R/W      |

## FILTER SETTINGS REGISTER

## Address: 0x28, Reset: 0x00, Name: Filter

Use this register to specify parameters for the internal high-pass and low-pass filters.

Table 42. Bit Descriptions for Filter

| Bits   | Bit Name   |   Settings | Description                                                                   | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------|---------|----------|
| 7      | Reserved   |            | Reserved                                                                      | 0x0     | R        |
| [6:4]  | HPF_CORNER |            | -3 dB filter corner for the first-order, high-pass filter relative to the ODR | 0x0     | R/W      |
|        |            |        000 | Not applicable, no high-pass filter enabled                                   |         |          |
|        |            |        001 | 24.7 × 10 -4 × ODR                                                            |         |          |
|        |            |        010 | 6.2084 × 10 -4 × ODR                                                          |         |          |
|        |            |        011 | 1.5545 × 10 -4 × ODR                                                          |         |          |
|        |            |        100 | 0.3862 × 10 -4 × ODR                                                          |         |          |
|        |            |        101 | 0.0954 × 10 -4 × ODR                                                          |         |          |
|        |            |        110 | 0.0238 × 10 -4 × ODR                                                          |         |          |
| [3:0]  | ODR_LPF    |            | ODR and low-pass filter corner                                                | 0x0     | R/W      |
|        |            |       0000 | 4000 Hz and 1000 Hz                                                           |         |          |
|        |            |       0001 | 2000 Hz and 500 Hz                                                            |         |          |
|        |            |       0010 | 1000 Hz and 250 Hz                                                            |         |          |
|        |            |       0011 | 500 Hz and 125 Hz                                                             |         |          |
|        |            |       0100 | 250 Hz and 62.5 Hz                                                            |         |          |
|        |            |       0101 | 125 Hz and 31.25 Hz                                                           |         |          |
|        |            |       0110 | 62.5 Hz and 15.625 Hz                                                         |         |          |
|        |            |       0111 | 31.25 Hz and 7.813 Hz                                                         |         |          |
|        |            |       1000 | 15.625 Hz and 3.906 Hz                                                        |         |          |
|        |            |       1001 | 7.813 Hz and 1.953 Hz                                                         |         |          |
|        |            |       1010 | 3.906 Hz and 0.977 Hz                                                         |         |          |

## FIFO SAMPLES REGISTER

## Address: 0x29, Reset: 0x60, Name: FIFO\_SAMPLES

Use the FIFO\_SAMPLES value to specify the number of samples to store in the FIFO. The default value of this register is 0x60 to avoid triggering the FIFO watermark interrupt.

## Table 43. Bit Descriptions for FIFO\_SAMPLES

| Bits   | Bit Name     | Settings   | Description                                                                                                    | Reset   | Access   |
|--------|--------------|------------|----------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | Reserved     |            | Reserved.                                                                                                      | 0x0     | R        |
| [6:0]  | FIFO_SAMPLES |            | Watermark number of samples stored in the FIFO that triggers a FIFO_FULL condition. Values range from 1 to 96. | 0x60    | R/W      |

## REGISTER DEFINITIONS

## INTERRUPT PIN (INTX) FUNCTION MAP REGISTER

## Address: 0x2A, Reset: 0x00, Name: INT\_MAP

The INT\_MAP register configures the interrupt pins. Bits[7:0] select which functions generate an interrupt on the INT1 and INT2 pins. Multiple events can be configured. If the corresponding bit is set to 1, the function generates an interrupt on the interrupt pins.

Table 44. Bit Descriptions for INT\_MAP

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

Table 45. Bit Descriptions for Sync

| Bits   | Bit Name   |   Settings | Description                                                                                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | Reserved   |            | Reserved.                                                                                                                                                                                                                           | 0x0     | R        |
| 2      | EXT_CLK    |            | Enable external clock. See Table 12 for configuration details.                                                                                                                                                                      | 0x0     | R/W      |
| [1:0]  | EXT_SYNC   |            | Enable external synchronization control.                                                                                                                                                                                            | 0x0     | R/W      |
| [1:0]  |            |         00 | Internal synchronization.                                                                                                                                                                                                           |         |          |
| [1:0]  |            |         01 | External synchronization, no interpolation filter. After synchronization, and for EXT_SYNC within specification, DATA_RDY occurs on EXT_SYNC.                                                                                       |         |          |
| [1:0]  |            |         10 | External synchronization, interpolation filter, next available data indicated by DATA_RDY 14 to 8204 oscillator cycles later (longer delay for higher ODR_LPF setting), data represents a sample point group delay earlier in time. |         |          |
| [1:0]  |            |         11 | Reserved.                                                                                                                                                                                                                           |         |          |

## I 2 C SPEED, INTERRUPT POLARITY, AND RANGE REGISTER

## Address: 0x2C, Reset: 0x81, Name: Range

Table 46. Bit Descriptions for Range

| Bits   | Bit Name   | Settings   | Description                                                                      | Reset   | Access   |
|--------|------------|------------|----------------------------------------------------------------------------------|---------|----------|
| 7      | I2C_HS     |            | I 2 C speed.                                                                     | 0x1     | R/W      |
| 6      | INT_POL    |            | Interrupt polarity. INT1 and INT2 are active low. INT1 and INT2 are active high. | 0x0     | R/W      |
| [5:2]  | Reserved   |            | Reserved.                                                                        | 0x0     | R        |
| [1:0]  | Range      |            | Range. ±10 g .                                                                   | 0x1     | R/W      |

## REGISTER DEFINITIONS

## Table 46. Bit Descriptions for Range

| Bits   | Bit Name   | Settings   | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
|        |            |            | 11 ±40 g .    |         |          |

## POWER CONTROL REGISTER

## Address: 0x2D, Reset: 0x01, Name: POWER\_CTL

## Table 47. Bit Descriptions for POWER\_CTL

| Bits   | Bit Name   | Settings   | Description                                                                                           | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | Reserved   |            | Reserved.                                                                                             | 0x0     | R        |
| 2      | DRDY_OFF   |            | Set to 1 to force the DRDY output to 0 in modes where it is normally signal data ready.               | 0x0     | R/W      |
| 1      | TEMP_OFF   |            | Set to 1 to disable temperature processing. Temperature processing is also disabled when standby = 1. | 0x0     | R/W      |
| 0      | Standby    |            | Standby or measurement mode.                                                                          | 0x1     | R/W      |

## SELF TEST REGISTER

Address: 0x2E, Reset: 0x00, Name: SELF\_TEST

Refer to the Self Test section for more information on the operation of the self test feature.

## Table 48. Bit Descriptions for SELF\_TEST

| Bits   | Bit Name   | Settings   | Description                        | Reset   | Access   |
|--------|------------|------------|------------------------------------|---------|----------|
| [7:2]  | Reserved   |            | Reserved.                          | 0x0     | R        |
| 1      | ST2        |            | Set to 1 to enable self test force | 0x0     | R/W      |
| 0      | ST1        |            | Set to 1 to enable self test mode  | 0x0     | R/W      |

## RESET REGISTER

## Address: 0x2F, Reset: 0x00, Name: Reset

## Table 49. Bit Descriptions for Reset

| Bits   | Bit Name   | Settings   | Description                                                            | Reset   | Access   |
|--------|------------|------------|------------------------------------------------------------------------|---------|----------|
| [7:0]  | Reset      |            | Write Code 0x52 to reset the device, similar to a power-on reset (POR) | 0x0     | W        |

In case of a software reset, an unlikely race condition may occur in products with REVID = 0x01 or earlier. If the race condition occurs, some factory settings in the NVM load incorrectly to shadow registers (the registers from which the internal logic configures the sensor and calculates the output after a power-on or a software reset). The incorrect loading of the NVM affects overall performance of the sensor, such as an incorrect 0 g bias and other performance issues. The incorrect loading of NVM does not occur from a power-on or after a power cycle. To guarantee reliable operation of the sensor after a software reset, the user can access the shadow registers after a power-on, read and store the values on the host microprocessor, and compare the values read from the same shadow registers after a software reset. This method guarantees proper operation in all devices and under all conditions. The recommended steps are as follows:

1. Read the shadow registers, Register 0x50 to Register 0x54 (five 8-bit registers) after power-up, but before any software reset.
2. Store these values in a host device (for example, a host microprocessor).
3. After each software reset, read the same five registers. If the values differ, perform a software reset again until they match.

## RECOMMENDED SOLDERING PROFILE

Figure 46 and Table 50 provide details about the recommended soldering profile.

Figure 46. Recommended Soldering Profile

<!-- image -->

Table 50. Recommended Soldering Profile

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
| Peak Temperature (T P )                                                     | 240°C + 0°C/-5°C  | 260°C + 0°C/-5°C  |
| Time of Actual T P - 5°C (t P )                                             | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                                              | 6°C/sec maximum   | 6°C/sec maximum   |
| Time from 25°C to Peak Temperature (t 25°C TO PEAK )                        | 6 minutes maximum | 8 minutes maximum |

## PCB FOOTPRINT PATTERN

Figure 47 shows the PCB footprint pattern and dimensions in millimeters.

Figure 47. PCB Footprint Pattern and Dimensions in Millimeters

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description               | Packing Quantity   | Package Option   |
|-----------------|---------------------|-----------------------------------|--------------------|------------------|
| ADXL359BCCZ     | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] |                    | CC-14-2          |
| ADXL359BCCZ-RL  | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] | Reel, 4000         | CC-14-2          |
| ADXL359BCCZ-RL7 | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] | Reel, 1000         | CC-14-2          |

## OUTPUT MODE, MEASUREMENT RANGE, AND SPECIFIED VOLTAGE OPTIONS

Table 51. Output Mode, Measurement Range, and Specified Voltage Options

| Model 1         | Output Mode   | Measurement Mode ( g )   |   Specified Voltage (V) |
|-----------------|---------------|--------------------------|-------------------------|
| ADXL359BCCZ     | Digital       | ±10, ±20, ±40            |                     3.3 |
| ADXL359BCCZ-RL  | Digital       | ±10, ±20, ±40            |                     3.3 |
| ADXL359BCCZ-RL7 | Digital       | ±10, ±20, ±40            |                     3.3 |

## EVALUATION BOARDS

| Model 1       | Description      |
|---------------|------------------|
| EVAL-ADXL359Z | Evaluation Board |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->

Figure 48. 14-Terminal Land Grid Array [LGA] (CC-14-2) Dimensions shown in millimeters

<!-- image -->

Updated: June 03, 2022