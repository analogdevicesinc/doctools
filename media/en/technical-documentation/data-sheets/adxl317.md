<!-- lastmod 2020-02-03 -->
<!-- image -->

## FEATURES

- 48 kHz I 2 S/TDM digital output
- High resolution: 14 bits
- Directly compatible with the AD2425W, AD2428W, and AD2429W A 2 B transceivers
- User selectable bandwidth: 500 Hz to 4 kHz
- Low latency: 90 µs typical at 4 kHz bandwidth
- Low noise
- 55 µ g /√Hz typical for x- and y-axes
- 120 µ g /√Hz typical for z-axis
- Operating temperature range: -40°C to +125°C
- Small, thin package: 5 mm × 5 mm × 1.45 mm LFCSP
- AEC-Q100 qualified for automotive applications

## APPLICATIONS

- Wideband ANC
- Adaptive suspension control

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## 3-Axis, ±16 g , I 2 S Digital Accelerometer

## GENERAL DESCRIPTION

The ADXL317 is a small, thin, low latency, 3-axis accelerometer with high resolution (14-bit) measurement up to ±16 g . Digital output data is formatted as an I 2 S/time-division multiplexing (TDM) signal. Additionally, an I 2 C digital interface is provided for user configuration.

The ADXL317 is well suited for wideband active noise control (ANC) applications. Featuring very low latency from the moment of acceleration to the transmission of digital output data, the ADXL317 is uniquely capable of responding quickly enough to allow wideband ANC systems sufficient time to respond to noise scenarios. The low noise of the ADXL317 enhances the ability of the device to accurately discriminate various external noise sources.

Due to the wide operating temperature range and high performance, the ADXL317 is ideal for other wheel well applications, such as adaptive suspension control.

The Automotive Audio Bus (A 2 B ® ) developed by Analog Devices, Inc., introduces system wide savings in cabling costs. The ADXL317 is designed to interface directly with the A 2 B product portfolio, such as the AD2425W, AD2428W, and AD2429W A 2 B transceivers.

The ADXL317 is supplied in a small, thin, 5 mm × 5 mm × 1.45 mm, 32-pin LFCSP package. The device is qualified for use in automotive applications over the entire operating temperature range of -40°C to +125°C.

Note that throughout this data sheet, multifunction pins, such as DTX1/TPC, are referred to either by the entire pin name or by a single function of the pin, for example, DTX1, when only that function is relevant.

## TABLE OF CONTENTS

| Features................................................................                                                                                                                                                                                                                                                | 1                                                                                                                                                                                                                                                                                                                       | Serial Communications........................................20                                                                                                                                                                                                                                                         |                                                                                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications........................................................... 1                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                         | I 2 S/TDM Interface.............................................20                                                                                                                                                                                                                                                      |                                                                                                                                                 |
| General Description...............................................1                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         | I 2 C Interface.....................................................                                                                                                                                                                                                                                                    | 23                                                                                                                                              |
| Functional Block Diagram......................................1                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                         | Filtering: Noise and Latency Considerations....25                                                                                                                                                                                                                                                                       |                                                                                                                                                 |
| Specifications........................................................                                                                                                                                                                                                                                                  | 3                                                                                                                                                                                                                                                                                                                       | Register Map.......................................................                                                                                                                                                                                                                                                     | 27                                                                                                                                              |
| Timing Specifications.........................................                                                                                                                                                                                                                                                          | 5                                                                                                                                                                                                                                                                                                                       | Register Details...................................................                                                                                                                                                                                                                                                     | 28                                                                                                                                              |
| Absolute Maximum Ratings...................................7                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                         | Device ID Registers..........................................28                                                                                                                                                                                                                                                         |                                                                                                                                                 |
| Thermal Resistance...........................................                                                                                                                                                                                                                                                           | 7                                                                                                                                                                                                                                                                                                                       | User Register Key Register (Address: 0x80,                                                                                                                                                                                                                                                                              |                                                                                                                                                 |
| ESD Caution.......................................................7                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         | Name: USER_REG_KEY, Reset: 0xBC)........30                                                                                                                                                                                                                                                                              |                                                                                                                                                 |
| Pin Configuration and Function Descriptions........                                                                                                                                                                                                                                                                     | 8                                                                                                                                                                                                                                                                                                                       | I 2 S Configuration Registers..............................30                                                                                                                                                                                                                                                           |                                                                                                                                                 |
| Typical Performance Characteristics.....................9                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                         | Clock Rate Register.........................................                                                                                                                                                                                                                                                            | 31                                                                                                                                              |
| Terminology.........................................................                                                                                                                                                                                                                                                    | 11                                                                                                                                                                                                                                                                                                                      | X-Axis Self Test Configuration Register...........                                                                                                                                                                                                                                                                      | 32                                                                                                                                              |
| Theory of Operation.............................................14                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                         | X-Axis Filter Configuration Register.................32                                                                                                                                                                                                                                                                 |                                                                                                                                                 |
| Overview..........................................................                                                                                                                                                                                                                                                      | 14                                                                                                                                                                                                                                                                                                                      | Y-Axis Self Test Configuration Register............33                                                                                                                                                                                                                                                                   |                                                                                                                                                 |
| Mechanical Device Operation..........................                                                                                                                                                                                                                                                                   | 14                                                                                                                                                                                                                                                                                                                      | Y-Axis Filter Configuration Register.................                                                                                                                                                                                                                                                                   | 33                                                                                                                                              |
| Noise and Latency Trade-Off...........................                                                                                                                                                                                                                                                                  | 14                                                                                                                                                                                                                                                                                                                      | Z-Axis Self Test Configuration Register............34                                                                                                                                                                                                                                                                   |                                                                                                                                                 |
| Applications Information......................................                                                                                                                                                                                                                                                          | 15                                                                                                                                                                                                                                                                                                                      | Z-Axis Filter Configuration Register.................                                                                                                                                                                                                                                                                   | 34                                                                                                                                              |
| Application Circuit.............................................15                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                         | X-Axis Accelerometer Data Registers..............35                                                                                                                                                                                                                                                                     |                                                                                                                                                 |
| Power...............................................................15                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                         | Y-Axis Accelerometer Data Registers..............                                                                                                                                                                                                                                                                       | 35                                                                                                                                              |
| Interfacing with A 2 B Transceivers....................                                                                                                                                                                                                                                                                 | 15                                                                                                                                                                                                                                                                                                                      | Z-Axis Accelerometer Data Registers..............35                                                                                                                                                                                                                                                                     |                                                                                                                                                 |
| Using Self Test.................................................                                                                                                                                                                                                                                                        | 16                                                                                                                                                                                                                                                                                                                      | Outline Dimensions.............................................                                                                                                                                                                                                                                                         | 37                                                                                                                                              |
| Mechanical Considerations for Mounting.........17                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                         | Ordering Guide.................................................37                                                                                                                                                                                                                                                       |                                                                                                                                                 |
| Solder Reflow Profile........................................18                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                         | Automotive Products........................................37                                                                                                                                                                                                                                                           |                                                                                                                                                 |
| Axes of Acceleration Sensitivity.......................                                                                                                                                                                                                                                                                 | 19                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                 |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                 |
| 5/2026-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                 |
| Changed Master to Controller and Slave to Subordinate (Throughout)...........................................................1                                                                                                                                                                                          | Changed Master to Controller and Slave to Subordinate (Throughout)...........................................................1                                                                                                                                                                                          | Changed Master to Controller and Slave to Subordinate (Throughout)...........................................................1                                                                                                                                                                                          |                                                                                                                                                 |
| Added Note 1, Table 1; Renumbered Sequentially..........................................................................................3                                                                                                                                                                               | Added Note 1, Table 1; Renumbered Sequentially..........................................................................................3                                                                                                                                                                               | Added Note 1, Table 1; Renumbered Sequentially..........................................................................................3                                                                                                                                                                               |                                                                                                                                                 |
| Changes to Sensitivity Parameter, Table 1......................................................................................................3                                                                                                                                                                        | Changes to Sensitivity Parameter, Table 1......................................................................................................3                                                                                                                                                                        | Changes to Sensitivity Parameter, Table 1......................................................................................................3                                                                                                                                                                        |                                                                                                                                                 |
| Changes to Figure 19....................................................................................................................................                                                                                                                                                                | Changes to Figure 19....................................................................................................................................                                                                                                                                                                | Changes to Figure 19....................................................................................................................................                                                                                                                                                                | 12                                                                                                                                              |
| Changes to Figure 21.................................................................................................................................... Changes to Using Self Test Section...............................................................................................................16            | Changes to Figure 21.................................................................................................................................... Changes to Using Self Test Section...............................................................................................................16            | Changes to Figure 21.................................................................................................................................... Changes to Using Self Test Section...............................................................................................................16            | 15                                                                                                                                              |
| Moved Mechanical Considerations for Mounting Section and Figure 26; Renumbered Sequentially...........                                                                                                                                                                                                                  | Moved Mechanical Considerations for Mounting Section and Figure 26; Renumbered Sequentially...........                                                                                                                                                                                                                  | Moved Mechanical Considerations for Mounting Section and Figure 26; Renumbered Sequentially...........                                                                                                                                                                                                                  | 17                                                                                                                                              |
| Moved Solder Reflow Profile Section, Figure 27, and Table 9; Renumbered Sequentially...........................                                                                                                                                                                                                         | Moved Solder Reflow Profile Section, Figure 27, and Table 9; Renumbered Sequentially...........................                                                                                                                                                                                                         | Moved Solder Reflow Profile Section, Figure 27, and Table 9; Renumbered Sequentially...........................                                                                                                                                                                                                         | 18                                                                                                                                              |
| Moved Axes of Acceleration Sensitivity Section, Figure 28, and Figure 29...................................................19                                                                                                                                                                                           | Moved Axes of Acceleration Sensitivity Section, Figure 28, and Figure 29...................................................19                                                                                                                                                                                           | Moved Axes of Acceleration Sensitivity Section, Figure 28, and Figure 29...................................................19                                                                                                                                                                                           |                                                                                                                                                 |
| Changes to Figure 28.................................................................................................................................... Change to Table                                                                                                                                                | Changes to Figure 28.................................................................................................................................... Change to Table                                                                                                                                                | Changes to Figure 28.................................................................................................................................... Change to Table                                                                                                                                                | 19 17........................................................................................................................................27 |
| Changes to Device ID Registers Section and Table 18.................................................................................28 Change to Variant Section.............................................................................................................................                           | Changes to Device ID Registers Section and Table 18.................................................................................28 Change to Variant Section.............................................................................................................................                           | Changes to Device ID Registers Section and Table 18.................................................................................28 Change to Variant Section.............................................................................................................................                           |                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                         | 29                                                                                                                                              |
| Changes to Table 25......................................................................................................................................30 Changes to Table 26......................................................................................................................................31 | Changes to Table 25......................................................................................................................................30 Changes to Table 26......................................................................................................................................31 | Changes to Table 25......................................................................................................................................30 Changes to Table 26......................................................................................................................................31 |                                                                                                                                                 |
| Changes to Ordering Guide...........................................................................................................................37                                                                                                                                                                  | Changes to Ordering Guide...........................................................................................................................37                                                                                                                                                                  | Changes to Ordering Guide...........................................................................................................................37                                                                                                                                                                  |                                                                                                                                                 |
| 12/2019-Revision 0: Initial Version                                                                                                                                                                                                                                                                                     | 12/2019-Revision 0: Initial Version                                                                                                                                                                                                                                                                                     | 12/2019-Revision 0: Initial Version                                                                                                                                                                                                                                                                                     | 12/2019-Revision 0: Initial Version                                                                                                             |

## SPECIFICATIONS

TA = 25 °C, V CC = 3.3 V, acceleration = 0 g , nominal clock set to 3.072 MHz or 6.144 MHz, unless otherwise specified. For complete definitions and conditions of all specifications, refer to the Terminology section.

Table 1. Accelerometer Specifications

| Parameter                             | Symbol   | Test Conditions/Comments                     | Typ   |   Max | Unit     |
|---------------------------------------|----------|----------------------------------------------|-------|-------|----------|
| SENSOR                                |          | Each axis                                    |       |       |          |
| Full-Scale Range 1                    | FSR      |                                              |       |       | g        |
| Nonlinearity                          |          | Percentage of full-scale range               | ±1    |       | %        |
| Cross Axis Sensitivity                |          |                                              | ±1    |       | %        |
| Resonant Frequency                    | f o      |                                              |       |       |          |
| X- and Y-Axes                         |          |                                              | 5.10  |       | kHz      |
| Z-Axis                                |          |                                              | 3.15  |       | kHz      |
| Quality Factor                        | Q        |                                              |       |       |          |
| X- and Y-Axes                         |          |                                              | 3.3   |       |          |
| Z-Axis                                |          |                                              | 1.75  |       |          |
| SENSITIVITY                           |          | Each axis                                    |       |       |          |
| Sensitivity 2                         |          | DC response                                  |       |       |          |
| 500 Hz Cascaded Filter                |          |                                              | 500   |   550 | LSB/ g   |
| 1 kHz Cascaded Filter                 |          |                                              | 492.0 | 541.1 | LSB/ g   |
| 2 kHz Cascaded Filter                 |          |                                              | 483.9 | 532.3 | LSB/ g   |
| 4 kHz Cascaded Filter                 |          |                                              | 438.6 | 482.4 | LSB/ g   |
| Sensitivity Change Due to Temperature |          | -40°C ≤ T A ≤ +25°C and +25°C ≤ T A ≤ +125°C |       |       |          |
| X- and Y-Axes                         |          | 1σ                                           | ±2.5  |       | %        |
| Z-Axis                                |          | 1σ                                           | ±4.5  |       | %        |
| RESOLUTION                            |          |                                              |       |       |          |
| Measurement Resolution                |          | All axes                                     | 14    |       | Bits     |
| ZERO g BIAS LEVEL                     |          | Each axis                                    |       |       |          |
| 0 g Bias Error                        |          | Over full operating temperature range        |       |  +1.5 | g        |
| Initial 0 g Output Deviation          |          |                                              |       |       |          |
| X- and Y-Axes                         |          |                                              | ±200  |       | m g      |
| Z-Axis                                |          |                                              | ±500  |       | m g      |
| FREQUENCY RESPONSE                    |          | User selectable                              |       |       |          |
| Cutoff (-3 dB) Frequency              |          | Filters only                                 |       |       |          |
| 500 Hz Cascaded Filter                |          |                                              | 506   |       | Hz       |
| 1 kHz Cascaded Filter                 |          |                                              | 1012  |       | Hz       |
| 2 kHz Cascaded Filter                 |          |                                              | 2025  |       | Hz       |
| 4 kHz Cascaded Filter                 |          |                                              | 4051  |       | Hz       |
| NOISE                                 |          |                                              |       |       |          |
| Noise Density 3                       |          |                                              |       |       |          |
| X- and Y-Axes                         |          |                                              | 55    |       | µ g /√Hz |
| Z-Axis                                |          |                                              | 120   |       | µ g /√Hz |
| Output Noise, X- and Y-Axes           |          |                                              |       |       |          |
| 500 Hz Cascaded Filter                |          |                                              | 2.5   |     4 | m g rms  |
| 1 kHz Cascaded Filter                 |          |                                              | 5.5   |    10 | m g rms  |
| 2 kHz Cascaded Filter                 |          |                                              | 22.5  |    35 | m g rms  |
| 4 kHz Cascaded Filter                 |          |                                              | 85    |   110 | m g rms  |

## SPECIFICATIONS

Table 1. Accelerometer Specifications (Continued)

| Parameter                            | Symbol   | Test Conditions/Comments                                                              | Typ    |   Max | Unit    |
|--------------------------------------|----------|---------------------------------------------------------------------------------------|--------|-------|---------|
| Output Noise Z-Axis                  |          |                                                                                       |        |       |         |
| 500 Hz Cascaded Filter               |          |                                                                                       | 4      |     9 | m g rms |
| 1 kHz Cascaded Filter                |          |                                                                                       | 7      |    12 | m g rms |
| 2 kHz Cascaded Filter                |          |                                                                                       | 30     |    40 | m g rms |
| 4 kHz Cascaded Filter                |          |                                                                                       | 120    |   135 | m g rms |
| SELF TEST                            |          |                                                                                       |        |       |         |
| Positive Self Test Output Change     | +STΔ     | DC self test magnitude                                                                |        |       |         |
| X- and Y-Axes                        |          |                                                                                       | 3.6    |  5.04 | g       |
| Z-Axis                               |          |                                                                                       | 6.8    |  9.52 | g       |
| Negative Self Test Output Change     | -STΔ     | DC self test magnitude                                                                |        |       |         |
| X- and Y-Axes                        |          |                                                                                       | -3.6   | -2.16 | g       |
| Z-Axis                               |          |                                                                                       | -6.8   | -4.08 | g       |
| SUPPLY                               |          |                                                                                       |        |       |         |
| Operating Voltage                    | V CC     |                                                                                       | 3.3    |   3.6 | V       |
| Regulated Input/Output (I/O) Voltage | V DD     |                                                                                       | 1.8    |       | V       |
| Quiescent Supply Current             |          |                                                                                       |        |     5 | mA      |
| Turn On Time                         |          |                                                                                       | 200    |       | µs      |
| I 2 S/TDM INTERFACE                  |          |                                                                                       |        |       |         |
| Frame Rate                           |          |                                                                                       | 48     |       | kHz     |
| Word Size                            |          |                                                                                       |        |       |         |
| I 2 S/TDM2                           |          |                                                                                       | 32     |       | Bits    |
| TDM4                                 |          |                                                                                       | 16, 32 |       | Bits    |
| TDM8                                 |          |                                                                                       | 16     |       | Bits    |
| Input Clock Frequency                |          | BCLK from controller device                                                           |        |       |         |
| I 2 S/TDM2                           |          | 32-bit word size                                                                      | 3.072  |       | MHz     |
| TDM4                                 |          | 16-bit word size                                                                      | 3.072  |       | MHz     |
|                                      |          | 32-bit word size                                                                      | 6.144  |       | MHz     |
| TDM8                                 |          | 16-bit word size                                                                      | 6.144  |       | MHz     |
| LATENCY                              |          |                                                                                       |        |       |         |
| Filter Delay                         |          | Filters only; does not include sense electronics or analog-to-digital converter (ADC) |        |       |         |
| 500 Hz Bandwidth                     |          |                                                                                       | 585    |       | µs      |
| 1 kHz Bandwidth                      |          |                                                                                       | 291    |       | µs      |
| 2 kHz Bandwidth                      |          |                                                                                       | 144    |       | µs      |
| 4 kHz Bandwidth                      |          |                                                                                       | 70.9   |       | µs      |
| Additional Latency                   |          | Sense electronics and ADC                                                             |        |       |         |
| X- and Y-Axes                        |          |                                                                                       | 13.8   |       | µs      |
| Z-Axis                               |          |                                                                                       | 20.4   |       | µs      |
| ENVIRONMENTAL                        |          |                                                                                       |        |       |         |
| Operating Temperature Range          |          |                                                                                       |        |  +125 | °C      |

1 Full-scale range with cascade disabled. Minimum full-scale range varies with filter corner setting.

2 Sensitivity varies with filter setting and deviation from nominal clock frequency. This specification assumes a nominal clock of 3.072 MHz or 6.144 MHz.

3 Noise density at 100 Hz with high-pass filter disabled (x\_HPF\_EN = 0). Noise density may vary across frequency.

## SPECIFICATIONS

## TIMING SPECIFICATIONS

## Table 2. I 2 C Digital Input/Output Characteristics

|                      |                            | Limit 1    | Limit 1    |      |
|----------------------|----------------------------|------------|------------|------|
| Parameter            | Test Conditions/Comments   | Min        | Max        | Unit |
| Digital Input        |                            |            |            |      |
| Input Voltage Level  |                            |            |            |      |
| Low (V IL )          |                            |            | 0.3 × V DD | V    |
| High (V IH )         |                            | 0.7 × V DD |            | V    |
| Input Current Level  |                            |            |            |      |
| Low (I IL )          | V IN = V DD                |            | 0.1        | µA   |
| High (I IH )         | V IN = 0 V                 | -0.1       |            | µA   |
| Digital Output       |                            |            |            |      |
| Output Voltage Level |                            |            |            |      |
| Low (V OL )          | V DD = 1.8 V, I OL = 3 mA  |            | 400        | mV   |
| Output Current Level |                            |            |            |      |
| Low (I OL )          | V OL = V OL, MAX           | 3          |            | mA   |
| Pin Capacitance      | f IN = 1 MHz, V IN = 2.5 V |            | 8          | pF   |
| Input Frequency      |                            |            | 100        | kHz  |

1 Limits are based on characterization results and are not production tested.

## Table 3. I 2 C Timing (T A = 25°C, V CC = 3.3 V)

| Parameter                                                 | Limit 1, 2                          | Limit 1, 2          | Unit                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------------------------------------|-------------------------------------|---------------------|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parameter                                                 | Min                                 | Max                 | Unit                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| f SCL t 1 t 2 t 3 t 4 t 5 t 6 3, 4, t 7 t 8 t 9 t 10 t 11 | 2.5 0.6 1.3 0.6 100 0 0.6 0.6 1.3 0 | 100 0.9 300 250 300 | kHz µs µs µs µs ns µs µs µs µs ns ns ns ns | SCL clock frequency SCL cycle time SCL high time SCL low time Start/repeated start condition hold time Data setup time Data hold time Repeated start condition setup time Stop condition setup time Bus-free time between a stop condition and a start condition Rise time of both SCL and SDA when receiving Rise time of both SCL and SDA when receiving or transmitting Fall time of SDA when receiving Fall time of both SCL and SDA when transmitting |

1 Limits are based on characterization results, with f SCL = 100 kHz, and are not production tested.

2 All values are in reference to the V IH and V IL levels shown in Table 2.

3 t 6 is the data hold time measured from the falling edge of SCL. t 6 applies to data transmission and acknowledge.

4 A transmitting device must internally provide an output hold time of at least 300 ns for the SDA signal (with respect to V IH, MIN of the SCL signal) to bridge the undefined region of the falling edge of SCL.

5 The maximum t 6 value must be met only if the device does not stretch the low period (t 3 ) of the SCL signal.

6 The maximum value for t 6 is a function of the clock low time (t 3 ), the clock rise time (t 10 ), and the minimum data setup time (t 5, MIN ). This value, t 6 , is calculated as t 6, MAX = t 3 - t 10 - t 5, MIN .

## SPECIFICATIONS

- 7 Cb  is the total capacitance of one bus line in picofarads.

Figure 2. I 2 C Single-Byte Register Write

Figure 3. I 2 C Multibyte Register Write

Figure 4. I 2 C Single-Byte Register Read

Figure 5. I 2 C Multibyte Register Read

<!-- image -->

Figure 6. I 2 C Timing Diagram

## ABSOLUTE MAXIMUM RATINGS

## Table 4. Absolute Maximum Ratings

| Parameter                        | Rating                     |
|----------------------------------|----------------------------|
| Mechanical Shock                 |                            |
| Any Axis, Unpowered              | ±4000 g (0.5 ms half sine) |
| Any Axis, Powered                | ±2000 g (0.5 ms half sine) |
| Voltage                          |                            |
| Supply Voltage                   | -0.3 V to +4.0 V           |
| Any Pin to Ground                | -0.3 V to V DD + 0.3 V     |
| Electrostatic Discharge (ESD)    |                            |
| Human Body Model (HBM), All Pins | 2 kV                       |
| Latch-Up Current                 | 100 mA                     |
| Storage Temperature Range        | -55°C to +150°C            |
| Operating Temperature Range      | -40°C to +125°C            |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junction to case thermal resistance.

## Table 5. Thermal Resistance

| Package Type   |   θ JA |   θ JC | Unit   |
|----------------|--------|--------|--------|
| CS-32-4 1      |   48.3 |   20.4 | °C/W   |

1 Test Condition 1: simulated thermal impedance values are based on a JEDEC 2S2P thermal test board with four thermal vias. See JEDEC JESD-51.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 7. Pin Configuration

<!-- image -->

Table 6. Pin Function Descriptions

| Pin No.   | Mnemonic     | Description                                                                                                                                               |
|-----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 to 4    | DNC          | Do Not Connect. Do not connect these pins. These pins must remain floating.                                                                               |
| 5         | DTX1/TPC     | I 2 S Data Channel 1/Test Pad C.                                                                                                                          |
| 6         | DTX0/TPB     | I 2 S Data Channel 0/Test Pad B.                                                                                                                          |
| 7         | SYNC/TPA     | I 2 S Sync/Test Pad A.                                                                                                                                    |
| 8         | BCLK         | I 2 S Clock.                                                                                                                                              |
| 9         | ALT_ADDR/TPD | I 2 C Address Select/Test Pad D. Connect this pin to ground to set the ADXL317 I 2 C address to 0x53. Connect this pin to VDD to set the address to 0x1D. |
| 10        | SCL          | I 2 C Serial Clock.                                                                                                                                       |
| 11        | SDA          | I 2 C Serial Data.                                                                                                                                        |
| 12 to 16  | DNC          | Do Not Connect. Do not connect these pins. These pins must remain floating.                                                                               |
| 17        | VCC          | Supply Voltage.                                                                                                                                           |
| 18        | VDD          | Internal Regulator Output Voltage. Use this pin for the I 2 C high reference.                                                                             |
| 19        | VSS          | Reference Voltage. Connect this pin to ground.                                                                                                            |
| 20 to 32  | DNC          | Do Not Connect. Do not connect these pins. These pins must remain floating.                                                                               |
|           | EP           | Exposed Pad. The exposed pad must be connected to ground.                                                                                                 |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. X-Axis Offset vs. Temperature

<!-- image -->

Figure 9. Y-Axis Offset vs. Temperature

<!-- image -->

Figure 10. Z-Axis Offset vs. Temperature

<!-- image -->

Figure 11. X-Axis Sensitivity vs. Temperature (500 Hz Cascaded Filter)

Figure 12. Y-Axis Sensitivity vs. Temperature (500 Hz Cascaded Filter)

<!-- image -->

Figure 13. Z-Axis Sensitivity vs. Temperature (500 Hz Cascaded Filter)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. X-Axis Linearity

Figure 15. Y-Axis Linearity

<!-- image -->

Figure 16. Z-Axis Linearity

<!-- image -->

## TERMINOLOGY

## Full-Scale Range (FSR)

The FSR of the ADXL317 is the guaranteed dynamic range at the output of the signal chain. FSR is specified as a minimum value and is guaranteed across all conditions. Acceleration measurement may be possible beyond this minimum value. However, performance characteristics are not guaranteed.

## Nonlinearity

Device nonlinearity is the maximum deviation of any sensor data point from the least squares linear fit of the acceleration data set at an equivalent input acceleration level. The acceleration data set can encompass any range of applied acceleration, up to the complete FSR of the ADXL317. Nonlinearity is defined mathematically as

<!-- formula-not-decoded -->

ACCMEAS is the measured acceleration at a defined g n . ACCFIT is the predicted acceleration at a defined g n . g n is the input acceleration level.

Figure 17. Accelerometer Linearity Error (Not to Scale)

<!-- image -->

## Cross Axis Sensitivity

Cross axis sensitivity is the measured output of the device in response to input stimuli orthogonal to the intended sense axis. It is measured as a percentage of the applied acceleration, as follows:

where:

<!-- formula-not-decoded -->

ACCMEAS(g x ) is the measured x-axis acceleration.

g z is the applied z-axis acceleration.

g y is the applied y-axis acceleration.

The cross axis sensitivity specification accounts for device level cross axis components only. These components include variations in sensor fabrication and the alignment of the sensor to the orthogonal axes of the package (also known as package alignment error). The cross axis specification does not account for system level sources of misalignment (for example, on the PCB or module).

## Resonant Frequency (fo)

f o is the natural frequency at which the MEMS element has a higher gain when subjected to acceleration events. Input acceleration at this resonant frequency causes the sensor to displace by an amount equal to the applied acceleration multiplied by the quality factor (Q).

The ADXL317 uses different sensor types for the horizontal (xand y-axes) and the vertical (z-axis) sensing axes. Therefore, the resonant frequency responses of these sensors are not the same.

## Quality Factor

The quality factor is a scalar factor that governs the increase or decrease in amplitude of an acceleration signal applied at the resonant frequency of a MEMS element.

## Sensitivity

Sensitivity is the slope of the line of best fit for the acceleration transfer function, as measured across the output FSR of the ADXL317. The sensitivity defines the change in output (LSB) per unit change of input ( g ). The inverse, scale factor, is in units of g /LSB.

Figure 18. Nominal Sensitivity Slope

<!-- image -->

## Measurement Resolution

Measurement resolution specifies the number of data bits in each acceleration data-word. For example, the 14-bit measurement of the ADXL317 has 16,384 bits of resolution. For an FSR of ±16 g (32 g total), this resolution yields a sensitivity of 500 LSB/ g and a scale factor of 2.0 m g /LSB.

## TERMINOLOGY

## Zero g Bias Error

The zero g bias error (also called offset) is any static error term on the output of the ADXL317. Zero g bias error is measured as the deviation from 0 g with no externally applied acceleration (including gravity).

To more accurately measure offset, take measurements at orientations of +1 g and -1 g and average the results. Each measurement must be taken over a sufficiently long time window to reduce the influence of external physical stimuli that may exist in the measurement system.

<!-- image -->

<!-- formula-not-decoded -->

Figure 19. Zero g Bias Error Measurement (X-Axis Example)

## Initial Zero g Output Deviation

Initial zero g output deviation is the error level at ambient conditions, measured immediately after completion of device manufacture. The initial zero g output deviation value denotes the standard deviation of the measured offset values across a large population of devices.

## Cutoff (-3 dB) Frequency

For applied ac acceleration, the cutoff (-3 dB) frequency (also referred to as bandwidth) is the frequency at which the input stimulus is attenuated in amplitude by 29.3% (1 - √2/2) at the output of the signal chain. The -3 dB corner is set according to the low-pass cascaded integrated comb (CIC) filter and the low-pass infinite impulse response (IIR) filter setting as selected by the user. A high-pass filter can also be turned on by the user but is disabled by default. All other signal chain elements have an appreciably high bandwidth and are not significant contributors to the cutoff frequency.

## Noise Density

Noise density is a measure of the inherent noise in the ADXL317 and is a combination of all internal noise sources. This density is fixed by the architecture of the device and is independent of bandwidth. See the Filtering: Noise and Latency Considerations section for more information on noise density.

## Output Noise

Output noise is the realized noise in reported measurements. Whereas noise density expresses the inherent noise in the device, output noise is the union of density and bandwidth. Filters with lower bandwidths provide more aggressive filtering and, therefore, greater noise reduction than filters with higher bandwidths.

## Self Test Output Change

The sensor self test is a diagnostic test. In this test, the sensor proof mass is deflected by an electrostatic force, thereby creating a measurable output change. For a self test routine to be evaluated properly, the change in output must be measured before and after applying the self test force. If this change is within the specified values shown in Table 1, it is considered successful.

The ADXL317 features positive, negative, and ac self test routines. AC self test toggles between positive and negative self test at a rate of 100 Hz. See the Using Self Test section for more information.

## Operating Voltage (VCC)

Operating voltage is the necessary voltage on the VCC pin for proper operation. Any voltages on the VCC pin outside the specified minimum and maximum values may cause the device to malfunction.

## Regulated I/O Voltage (VDD)

Regulated I/O voltage is the voltage reference for both on-chip digital communication interfaces: I 2 S and I 2 C. Operating these interfaces at other values from the regulated 1.8 V may result in miscommunication between the ADXL317 and controller device.

## Quiescent Supply Current

Quiescent supply current is the current draw of the device when no data is being transmitted and the device is operating within the minimum/maximum supply voltage (VCC).

## Turn On Time

Turn on time specifies the necessary time needed for the regulated I/O voltage (VDD) to settle to the final value. This settling indicates that the nonvolatile memory (NVM) contents have been loaded and have taken effect. Following a hardware reset, the user must wait for the specified turn on time before performing reads from or writes to the ADXL317.

## Inter-IC Sound (I 2 S) Protocol

The I 2 S protocol is a set of specifications for the transmission of digital audio signals along a bus. This bus consists of four signals: serial clock (BCLK), synchronization signal (SYNC), and two serial data channels (DTX[1:0]). The ADXL317 acts as a subordinate transmitter in this protocol.

## TERMINOLOGY

## Inter-IC (I 2 C) Protocol

The I 2 C protocol is a set of specifications for the transmission of data between multiple ICs along only two wires: serial data (SDA) and serial clock (SCL). These lines are shared between all devices on the bus. Each device on the bus is software addressable via a unique address.

## Latency

Latency is the time between an acceleration event hitting the ADXL317 and the measurement being available on the output channel. There are two components that define the total latency of the signal chain:

- Fixed latency imposed by the sense electronics and ADCs.
- Latency created by the adjustable low-pass (CIC and IIR) and high-pass filters.

These two components must be added together to determine the total latency of the ADXL317. Filter latency is dependent on bandwidth, with higher bandwidths requiring less time for the input signal to appear on the output of the device.

## THEORY OF OPERATION

## OVERVIEW

The ADXL317 is a complete, 3-axis acceleration measurement system designed to interface directly with the Analog Devices line of A 2 B transceivers, making the ADXL317 ideal for automotive noise cancellation applications. The wide range of selectable bandwidth settings, low output noise, and low latency make the ADXL317 appropriate for wideband noise sensing and adaptive suspension control.

The ADXL317 treats all three sensor channels independently. There are three analog channels in the ASIC die with separate analog signal processing for each accelerometer axis. Each analog channel is then sampled by separate digital signal processing blocks that process the samples for the common communications interface block. Therefore, if one sensor channel fails, transmission of acceleration data continues for the other axes.

## MECHANICAL DEVICE OPERATION

The ADXL317 contains three independent sensors, one for each axis of sensitivity. Each acceleration sensor is a polysilicon, surface micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide resistance against acceleration forces.

Deflection of the structure is measured using differential capacitors that consist of independent, fixed plates and plates attached to the moving mass. Acceleration deflects the beam and unbalances the differential capacitor, resulting in a sensor output with amplitude proportional to acceleration. Phase sensitive demodulation determines the magnitude and polarity of the acceleration.

Figure 20. Simplified View of One Sensor During Acceleration

<!-- image -->

## NOISE AND LATENCY TRADE-OFF

The ADXL317 offers several options for controlling the trade-off between output noise and latency (or delay) to accommodate a wide range of system requirements.

The ADXL317 features two cascaded, low-pass digital filters: a twopole CIC filter and a single-pole IIR filter, which remove unwanted high frequency content from the signal. More aggressive filtering (that is, using a filter with a lower cutoff frequency) introduces more delay to the signal chain, but decreases output noise. Conversely, less aggressive filtering results in more output noise but less delay. The optimal compromise between these two parameters depends on system implementation.

The ADXL317 features four settings for each filter, for a total of 16 combinations. The noise and delay associated with a subset of these settings are shown in Table 7. For more information, see the Filtering: Noise and Latency Considerations section.

Table 7. Output Noise and Delay vs. Filter Cutoff Frequency (T A = 25°C, V CC = 3.3 V)

|                       | Output Noise (m g rms)   | Output Noise (m g rms)   |            |
|-----------------------|--------------------------|--------------------------|------------|
| Cutoff Frequency (Hz) | X-/Y-Axes                | Z-Axis                   | Delay (µs) |
| 506                   | 2.5                      | 4                        | 585        |
| 1012                  | 5.5                      | 7                        | 291        |
| 2025                  | 22.5                     | 30                       | 144        |
| 4051                  | 85                       | 120                      | 70.9       |

## APPLICATIONS INFORMATION

## APPLICATION CIRCUIT

Figure 21 shows the recommended application circuit for the ADXL317. The operating power pin, VCC (Pin 17), requires a 100 nF bypass capacitor to ground (VSS, Pin 19) placed as close as possible to the pin. The voltage regulator output pin, VDD (Pin 18), requires a 1 µF capacitor. The two I 2 C lines, SCL (Pin 10) and SDA (Pin 11), each require a pull-up resistor to VDD. The value of these resistors is dependent on bus capacitance. Refer to UM10204 I 2 C-bus specification and user manual , Rev. 6-4 April 2014 (NXP Semiconductor) when selecting pull-up resistor values to ensure proper operation. The exposed pad on the bottom of the package must be connected to ground.

Figure 21. Recommended Application Circuit

<!-- image -->

## POWER

The ADXL317 has a single power input pin, VCC, which operates at a nominal voltage of 3.3 V. An internal regulator steps this voltage down to 1.8 V. The VCC pin must be properly bypassed, as shown in Figure 21, to remove ac fluctuations from the power supply.

VDD is the output of the internal voltage regulator, which holds the pin at a constant 1.8 V. This pin must also be decoupled from ac noise for stability. VDD must be used as the pull-up voltage for the I 2 C lines (SCL and SDA).

## INTERFACING WITH A 2 B TRANSCEIVERS

The ADXL317 is designed to interface directly with the AD2425W, or with an I 2 S capable A 2 B transceiver from Analog Devices. The connection between the ADXL317 and the AD2425W is shown in Figure 22. A generic A 2 B transceiver can be used. Refer to the appropriate transceiver data sheet for additional details.

## Power

The ADXL317 operates as a phantom powered subordinate device and, therefore, must derive power directly from the A 2 B transceiver. Connect one of the VOUT pins (3.3 V) from the transceiver to VCC on the ADXL317, being sure to properly decouple the supply on both ends.

## Communications

Directly connect the BCLK pin and the SYNC pin between the ADXL317 and the A 2 B transceiver. The DTX1 and DTX0 pins on the ADXL317 are outputs (data transmit) and must be connected to the corresponding DRX0 and DRX1 (data receive) pins on the transceiver. Adding small (~100 Ω) series resistors to these four lines may improve electromagnetic interference (EMI) performance. The exact value of these resistors depends on the observed EMI characteristics of the system.

SCL and SDA must also be connected directly between the two devices, taking care to choose appropriate pull-up resistors. Use VDD as the pull-up voltage for I 2 C.

Figure 22. ADXL317 to A 2 B Transceiver Connection Diagram

<!-- image -->

## APPLICATIONS INFORMATION

## USING SELF TEST

The ADXL317 features a flexible self test routine to evaluate the condition of the sensors. Self test can be activated in one of the three following modes:

- Positive self test mode. In this mode, a positive dc excitation is applied to the sensor along the desired axis. This excitation is approximately 3.6 g for the x- and y-axes, and 6.8 g for the z-axis, plus any excitation from the environment.
- Negative self test mode. In this mode, a negative dc excitation is applied to the sensor along the desired axis. This excitation is approximately -3.6 g for the x- and y-axes and -6.8 g for the z-axis, plus any excitation from the environment.
- AC self test mode. In this mode, a 100 Hz square wave is applied to the sensor along the desired axis. The upper and lower bounds of this square wave are equal to the values of the positive and negative self tests, respectively.

When first powering on the ADXL317, the user must use the positive and negative dc self test or the ac self test to achieve an accurate understanding of device health. Each axis is capable of controlling its self test independently of the other axes, resulting in many combinations of self test settings. These settings are configured in the X\_ST, Y\_ST, and Z\_ST registers and the corresponding x\_ST\_AC, x\_ST\_POS, and x\_ST\_NEG bits. Although any number of these bits for a given axis can be asserted simultaneously, only one such force can be applied to each axis at a time. If multiple bits are asserted, self test is disabled. The mapping of all possible settings of these bits and the resultant self test force is shown in Table 8.

Table 8. Self Test Settings Combinations

|   x_ST_AC |   x_ST_POS |   x_ST_NEG | Self Test Force       |
|-----------|------------|------------|-----------------------|
|         0 |          0 |          0 | Self test is disabled |
|         0 |          0 |          1 | Negative self test    |
|         0 |          1 |          0 | Positive self test    |
|         0 |          1 |          1 | Self test is disabled |
|         1 |          0 |          0 | AC self test          |
|         1 |          0 |          1 | Self test is disabled |
|         1 |          1 |          0 | Self test is disabled |
|         1 |          1 |          1 | Self test is disabled |

When a self test force is exerted along any axis, the value returned from the sensor is additive with any external force applied to the accelerometer, as shown in Figure 25. In this graphic, the accelerometer experiences a sine wave motion with an amplitude of 4 g . For simplicity, assume all axes receive the same input. The resultant measurement returned from the ADXL317 after applying self test is the sine wave added to the self test excitation.

Be sure to account for gravity in self test measurements. For example, applying positive self test to the z-axis with the accelerometer sitting flat on a table (that is, with the z-axis aligned with gravity) results in acceleration of 6.8 g from self test, plus 1 g from gravity, for a total of 7.8 g . Therefore, self test is best performed in the absence of any external acceleration, other than static, known sources like gravity that can be easily calibrated out.

Taking an accurate self test measurement involves a few steps. For the two dc self test modes, the following routine must be followed to accurately assess the results of self test:

1. Ensure all self test functionality is disabled. That is, set the X\_ST, Y\_ST, and Z\_ST registers (Address 0x84, Address 0x86, and Address 0x88, respectively) to 0x00.
2. Read acceleration data for the x-axis. It is recommended to take an average of 25 ms to reduce the influence of noise in the measurement.
3. Activate self test by asserting the X\_ST\_POS bit and wait for the output to transition to the maximum value.
4. Read acceleration data again for 25 ms.
5. Subtract the data collected in Step 2 from the data collected in Step 4 to determine the magnitude of the self test delta (STΔ).
6. Deactivate the X\_ST\_POS bit, activate the X\_ST\_NEG bit, and wait for the output to transition to the minimum value.
7. Read acceleration data again for 25 ms.
8. Compare the positive and negative STΔ magnitudes to the limits in Table 1. If both magnitudes are within the minimum and maximum specifications, the device passed the self test. Otherwise, the device failed and must be flagged for further investigation.
9. Repeat Step 1 to Step 8 for the y-axis and z-axis, sequentially.

Self test must be activated one channel at a time, meaning that Step 1 to Step 9 must be repeated for the x-, y-, and z-axis channels, sequentially.

Figure 23. DC Self Test Measurement

<!-- image -->

The same steps can be followed when taking an ac self test measurement. However, greater care must be taken in the timing between measurements. Additionally, it may be helpful to examine the frequency domain of the signal to determine if the sensor and signal chain are behaving as desired. For the ac self test mode, the following routine must be followed to accurately assess the results of self test:

## APPLICATIONS INFORMATION

1. Ensure all self test functionality is disabled. That is, set the X\_ST, Y\_ST, and Z\_ST registers (Address 0x84, Address 0x86, and Address 0x88, respectively) to 0x00.
2. Read acceleration data for the x-axis. It is recommended to take an average of 25 ms to reduce the influence of noise in the measurement.
3. Activate self test by asserting the X\_ST\_AC bit.
4. Read acceleration data for at least 40 ms with at least a 1 kHz data rate.
5. Determine the STΔ magnitudes using the procedure shown in Figure 24.
6. Compare the positive and negative STΔ magnitudes to the limits shown in Table 1. If both magnitudes are within the minimum and maximum specifications, the device passed the self test. Otherwise, the device failed and must be flagged for further investigation.
7. Repeat Step 1 to Step 6 for the y-axis and z-axis, sequentially.

Figure 24. AC Self Test Measurement

<!-- image -->

Figure 25. Self Test Settings and Resulting Output in Presence of 12.5 Hz Sinusoidal Input Acceleration

<!-- image -->

## MECHANICAL CONSIDERATIONS FOR MOUNTING

Care must be taken when mounting the ADXL317 to ensure the device is in a location immune to vibrations within the frequency range of desired measurements. Mount the ADXL317 on the PCB in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL317 at a poorly supported PCB location, as shown in Figure 26, may result in large apparent measurement errors due to undamped PCB vibrations. Locating the accelerometer near a hard mounting point ensures that any PCB vibrations at the accelerometer are above the resonant frequency of the mechanical sensors and, therefore, effectively invisible to the device. Multiple mounting points close to the sensor and/or a thicker PCB also reduce the effect of system resonance on the performance of the sensor.

Figure 26. Examples of Incorrectly Placed Accelerometers

<!-- image -->

## APPLICATIONS INFORMATION

## SOLDER REFLOW PROFILE

Figure 27 and Table 9 show the recommended solder profile and profile parameters for the ADXL317.

Figure 27. Pb-Free Solder Profile

<!-- image -->

Table 9. Solder Profile Parameters, per JEDEC J-STD-020D.1

| Profile Feature                                       | Symbol   | Small Body Pb-Free Assemblies   |
|-------------------------------------------------------|----------|---------------------------------|
| Preheat/Soak                                          |          |                                 |
| Temperature Minimum                                   | T SMIN   | 150°C                           |
| Temperature Maximum                                   | T SMAX   | 200°C                           |
| Time from T SMIN to T SMAX                            | t S      | 60 sec to 120 sec               |
| Liquidous Temperature                                 | T L      | 217 °C                          |
| Time Maintained Above T L                             | t L      | 60 sec to 150 sec               |
| Classification Temperature                            | T C      | 260 °C                          |
| Peak Package Body Temperature                         | T P      | T C -5 < T P < T C              |
| Ramp-Up Rate (T L to T P )                            |          | 3 °C/sec maximum                |
| Time Within 5 °C of Classification Temperature (T C ) | t P      | 30 sec maximum                  |
| Ramp-Down Rate (T P to T L )                          |          | 6 °C/sec maximum                |
| Time 25 °C to Peak Temperature                        |          | 8 minutes maximum               |

## APPLICATIONS INFORMATION

## AXES OF ACCELERATION SENSITIVITY

Figure 28 and Figure 29 show the default axes of sensitivity for the ADXL317.

Figure 28. Axes of Acceleration Sensitivity (Corresponding Output Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Figure 29. Output Response vs. Orientation to Gravity

<!-- image -->

## SERIAL COMMUNICATIONS

The ADXL317 communicates via both 4-wire I 2 S and 2-wire I 2 C digital communication interfaces. The I 2 S bus is the primary means of outputting data, and the I 2 C bus configures the register settings. In both cases, the ADXL317 operates as a subordinate device, receiving commands and responding with requested data. These two ports operate independently and use separate pins. Therefore, these ports can be used simultaneously.

## I 2 S/TDM INTERFACE

The ADXL317 constantly streams data out of the I 2 S port. This protocol is suitable for obtaining high speed, synchronous accelerometer data. The ADXL317 operates at a clock speed of 3.072 MHz or 6.144 MHz (typical) with a frame frequency of 48 kHz. The device supports 16-bit TDM4 and TDM8, as well as 32-bit I 2 S/TDM2 and TDM4.

Figure 30. I 2 S/TDM Wiring Diagram

<!-- image -->

## Signals

The ADXL317 uses a 4-wire I 2 S interface, comprising one continuous serial clock, one synchronization signal, and two serial data channels. There are numerous naming conventions for these channels. The ADXL317 uses the same terminology and symbols as the A 2 B family of transceivers from Analog Devices. See Table 10 for a comparison of the names used in the I 2 S specification against the names used in the ADXL317.

Table 10. I 2 S Signal Names

| I 2 S Specification     | I 2 S Specification   | ADXL317       | ADXL317   |
|-------------------------|-----------------------|---------------|-----------|
| Full Name               | Symbol                | Full Name     | Symbol    |
| Continuous Serial Clock | SCK                   | Bit clock     | BCLK      |
| Word Select             | WS                    | Sync          | SYNC      |
| Serial Data             | SD                    | Data transmit | DTX       |

## Bit Clock (BCLK)

The bit clock (BCLK) line controls the timing of transactions between the controller (A 2 B transceiver or other controller) and subordinate (ADXL317). This clock must be supplied externally to the BCLK pin (Pin 8) at a rate of either 3.072 MHz or 6.144 MHz. The incoming clock frequency must be specified in the CLOCK\_RATE register (Address 0x83).

The ADXL317 has no internal clock, and all timing is derived from BCLK. BCLK must be running at all times for the ADXL317 to operate, even when using I 2 C to read and/or write registers.

## Sync (SYNC) Signal

The SYNC line selects the channel being transmitted. By default, with SYNC high (set to 1), the right channel is transmitting. With SYNC low (set to 0), the left channel is transmitting (in TDM2 mode). This behavior can be reversed by asserting the INV bit in the I2S\_CFG0 register (Address 0x81). SYNC demarcates the boundary between the first and second halves of the frame.

The value of SYNC is latched on the rising edge of BCLK as long as INV (Address 0x81, Bit 7) = 0. After SYNC changes value, the timing of the transmission of the MSB of the data depends on the value of the early bit in the I2S\_CFG0 register. If early = 0, the SYNC pin changes in the same cycle as the MSB of the first data channel. If early = 1, the SYNC pin changes one cycle before the MSB of the first data channel.

By default, the SYNC pin changes value on the rising edge of BCLK. This change can be altered to occur on the falling edge by asserting the TXBCLKINV bit in the I2S\_CFG1 register.

## Data Transmit (DTX) Signal

The data transmit (DTX) lines send data from the ADXL317 to the controller device. Data is transmitted in twos complement format with the most significant bit (MSB) first. The position of the LSB in the transaction is dependent on the word length, as defined in the Packet Format section.

Data can be sent over one or both of the DTX pins, depending on the values of the TX0EN and TX1EN bits in the I2S\_CFG1 register, as well as the operating mode.

## Packet Format

The ADXL317 features four packet formats, depending on the input clock (BCLK) frequency and system requirements. At 3.072 MHz, 32-bit I 2 S/TDM2 and 16-bit TDM4 are supported. At 6.144 MHz, 32-bit TDM4 and 16-bit TDM8 are supported. Note that 32-bit I 2 S/ TDM2 mode requires two data pins, whereas the other three modes require only one.

Table 11. Required BCLK Frequencies for All Supported Output Formats

|               | BCLK Frequency   | BCLK Frequency   |             |
|---------------|------------------|------------------|-------------|
| Output Format | 16-Bit Mode      | 32-Bit Mode      | No. of Pins |
| I 2 S/TDM2    | Not applicable   | 3.072 MHz        | 2           |
| TDM4          | 3.072 MHz        | 6.144 MHz        | 1           |
| TDM8          | 6.144 MHz        | Not applicable   | 1           |

In I 2 S/TDM2 mode, the DTX0 pin transmits data from the x- and y-axes. The DTX1 pin transmits z-axis data followed by all zeros in the second half of the transmission. BCLK must be running at 3.072 MHz, and each axis comprises 32 bits.

## SERIAL COMMUNICATIONS

In TDM4 mode, data from all three axes is sent over a single pin, whereas the other pin remains at zero during the entire transaction. Each axis comprises 16 bits with BCLK running at 3.072 MHz and 32 bits at 6.144 MHz.

In TDM8 mode, the frame is further divided in eight segments. The first three segments on one pin contain data from all three axes, and the remaining segments are held at zero. BCLK must be running at 6.144 MHz, and each axis comprises 16 bits.

four, or eight). The ADXL317 has three channels, one for each axis. Therefore, all channels beyond the third are set entirely to 0. Table 12 through Table 15 shows how these channels align within each frame, and Figure 31 through Figure 34 show how the various I 2 S configuration settings affect the timing of each transaction. Note that these figures are not to scale, and clock rates differ.

The frame rate for all transactions is 48 kHz, which translates to 64 clock cycles at 3.072 MHz or 128 cycles at 6.144 MHz. The number of channels in each frame is always a power of two (two, For formats that only require one data pin, the TX0EN bit and the TX1EN bit in the I2S\_CFG1 register control which pin is actively outputting data. The inactive pin is pulled low during the entirety of the transaction.

Table 12. Two-Pin I 2 S/TDM2 Packet Format (3.072 MHz BCLK, 32-Bit Data, TX0EN = 1, TX1EN = 1)

| DTX0                                                                                     | DTX1                                                                                     | DTX1                                                                                     |
|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| X-Axis Data (32-Bit)                                                                     | Z-axis data (32-bit)                                                                     |                                                                                          |
| Y-Axis Data (32-Bit)                                                                     |                                                                                          | 0x00000000                                                                               |
| Table 13. One-Pin TDM4 Packet Format (3.072 MHz BCLK, 16-Bit Data, TX0EN = 1, TX1EN = 0) | Table 13. One-Pin TDM4 Packet Format (3.072 MHz BCLK, 16-Bit Data, TX0EN = 1, TX1EN = 0) | Table 13. One-Pin TDM4 Packet Format (3.072 MHz BCLK, 16-Bit Data, TX0EN = 1, TX1EN = 0) |
| DTX0                                                                                     |                                                                                          | DTX1                                                                                     |
| X-Axis Data (16-Bit)                                                                     |                                                                                          | 0x0000                                                                                   |
| Y-Axis Data (16-Bit)                                                                     |                                                                                          | 0x0000                                                                                   |
| Z-Axis Data (16-Bit)                                                                     |                                                                                          | 0x0000                                                                                   |
| 0x0000                                                                                   |                                                                                          | 0x0000                                                                                   |
| Table 14. One-Pin TDM4 Packet Format (6.144 MHz BCLK, 32-Bit Data, TX0EN = 1, TX1EN = 0) | Table 14. One-Pin TDM4 Packet Format (6.144 MHz BCLK, 32-Bit Data, TX0EN = 1, TX1EN = 0) | Table 14. One-Pin TDM4 Packet Format (6.144 MHz BCLK, 32-Bit Data, TX0EN = 1, TX1EN = 0) |
| DTX0                                                                                     | DTX1                                                                                     |                                                                                          |
| X-Axis Data (32-Bit)                                                                     |                                                                                          | 0x00000000 0x00000000                                                                    |
| Y-Axis Data (32-Bit)                                                                     |                                                                                          |                                                                                          |
| Z-Axis Data (32-Bit)                                                                     | 0x00000000                                                                               |                                                                                          |
| 0x00000000                                                                               | 0x00000000                                                                               |                                                                                          |
| Table 15. One-Pin TDM8 Packet Format (6.144 MHz BCLK, 16-Bit Data, TX0EN = 1, TX1EN = 0) | Table 15. One-Pin TDM8 Packet Format (6.144 MHz BCLK, 16-Bit Data, TX0EN = 1, TX1EN = 0) | Table 15. One-Pin TDM8 Packet Format (6.144 MHz BCLK, 16-Bit Data, TX0EN = 1, TX1EN = 0) |
| DTX0                                                                                     |                                                                                          | DTX1                                                                                     |
| X-Axis Data (16-Bit)                                                                     |                                                                                          | 0x0000                                                                                   |
| Y-Axis Data (16-Bit)                                                                     |                                                                                          | 0x0000                                                                                   |
| Z-Axis Data (16-Bit)                                                                     |                                                                                          | 0x0000                                                                                   |
| 0x0000                                                                                   |                                                                                          | 0x0000                                                                                   |
| 0x0000                                                                                   |                                                                                          | 0x0000                                                                                   |
| 0x0000                                                                                   |                                                                                          | 0x0000                                                                                   |
| 0x0000                                                                                   |                                                                                          | 0x0000                                                                                   |
| 0x0000                                                                                   |                                                                                          | 0x0000                                                                                   |

## SERIAL COMMUNICATIONS

<!-- image -->

Figure 31. 3.072 MHz I 2 S/TDM2 Timing (32-Bit Data)

Figure 32. 3.072 MHz TDM4 Timing (16-Bit Data)

<!-- image -->

Figure 33. 6.144 MHz TDM4 Timing (32-Bit Data)

<!-- image -->

## SERIAL COMMUNICATIONS

Figure 34. 6.144 MHz TDM8 Timing (16-Bit Data)

<!-- image -->

## SDA

SDA is the serial data line. SDA is bidirectional, with the ADXL317 and controller device each controlling the line during different slices of each transaction. SDA also requires a pull-up resistor.

## Definitions

A start condition is a transition of SDA from high to low while SCL is high.

A stop condition is a transition of SDA from low to high while SCL is high.

An acknowledge condition (ACK) occurs when the transmitter releases the SDA line during the acknowledge clock pulse (the ninth bit following and byte), and the receiver pulls SDA low during the entire high period of this clock pulse. This is denoted as A in the timing diagrams that follow.

A no acknowledge condition (NACK) is similar to an acknowledge, but the receiver pulls SDA high during the entire high period of the acknowledge clock pulse. This is denoted as NA in the timing diagrams that follow.

The ADXL317 device address depends on the wiring of the ALT\_ADDR pin. With this pin grounded, the address is 0x53. With this pin pulled to VDD, the address is 0x1D. All bytes are transmitted MSB first.

## Register Writes

All commands begin with the controller transmitting a start condition followed by the ADXL317 device address and the R/W bit. Because both reads and writes require writing the desired register address to the device, the R/W bit is always low (denoting a write condition) in this first portion of the communication. The ADXL317 responds to this request with an acknowledge condition. Next, the controller transmits the address of the register to be written. The ADXL317 again responds with an acknowledge. The controller then transmits

## I 2 C INTERFACE

The ADXL317 features a 2-wire I 2 C interface through which the user performs register reads and writes. These reads and writes configure the various device settings. The I 2 C interface conforms to UM10204 I 2 C-bus specification and user manual , Rev. 6-4 April 2014, available from NXP Semiconductor, and supports standard data transfer mode at 100 kHz if the bus parameters shown in Table 2 and Table 3 are met. The SCL and SDA lines require pull-up resistors (R P ). Refer to UM10204 I 2 C-bus specification and user manual , Rev. 6-4 April 2014 (NXP Semiconductor) when selecting pull-up resistor values to ensure proper operation. Singleand multi-byte reads and writes are supported, as shown in Figure 36. When communicating with the ADXL317 via I 2 C, BCLK must be provided with a valid clock signal.

Figure 35. I 2 C Wiring Diagram

<!-- image -->

## Signals

## SCL

SCL is the serial clock input to the ADXL317. SCL is generated by the controller device and requires a pull-up resistor.

## SERIAL COMMUNICATIONS

the data to be written to the specified register, and the ADXL317 responds one last time with an acknowledge. Finally, the transaction is terminated with the transmission of a stop condition from the controller.

Multibyte writes are also supported. To write to multiple consecutive registers, the controller continues to transmit data bytes between each acknowledge condition. The ADXL317 autoincrements the address and writes each byte to the subsequent register. Only after a stop condition is received does the ADXL317 stop writing.

See Figure 36 for a visual representation of the transactions described in this section. See Figure 2 and Figure 3 for waveforms.

## Register Reads

Reading from a register involves the same first few steps as writing to a register. The controller sends a start condition followed by the ADXL317 device address and the R/W bit low. After the ADXL317 responds with an acknowledge, the controller transmits the address of the register to read, to which the ADXL317 again responds with an acknowledge.

To differentiate this command from a register write, the controller next transmits a repeated start command, followed immediately by the ADXL317 device address, plus the R/W bit high to denote a read condition. The ADXL317 responds to this request with an acknowledge, followed by the contents of the desired register. The controller responds to the receipt of this data with a no acknowledge to prevent the ADXL317 from responding further, followed by a stop condition to terminate the transaction.

Multibyte reads are also supported. To read from multiple consecutive registers, the controller simply responds with an acknowledge instead of a no acknowledge following the receipt of data. The ADXL317 continues to auto-increment the register address and transmit the contents of each subsequent register until a no acknowledge and stop are received.

See Figure 36 for a visual representation of these transactions and Figure 4 and Figure 5 waveforms.

## Invalid Registers

The user accessible registers are located at Address 0x00 to Address 0x01 and Address 0x80 to Address 0x8F. See the Register Map section for details regarding the functionality of these registers. Attempting to read a register outside of these ranges returns all zeros. However, the device responds to the request with an acknowledge condition, which applies to both single- and multi-byte transactions.

Figure 36. I 2 C Communication Format

<!-- image -->

## SERIAL COMMUNICATIONS

## FILTERING: NOISE AND LATENCY CONSIDERATIONS

There are several filters in the signal chain of the ADXL317 that can be independently controlled. These filters are as follows:

- Low-pass CIC filter. This filter is always enabled, and the corner frequency can be set to 7.66 kHz, 3.83 kHz, 1.91 kHz, or 957 Hz.
- Low-pass IIR filter. This filter can be turned on or off and is enabled by default. The corner frequency can be set to 5.00 kHz, 2.50 kHz, 1.25 kHz, or 625 Hz.
- High-pass filter. This filter can be turned on or off and is disabled by default. The corner frequency can be set to 29.8 Hz, 7.46 Hz, 1.85 Hz, or 0.46 Hz.

By combining these settings, a wide variety of filter characteristics can be achieved. In addition to the nominal 4 kHz, 2 kHz, 1 kHz, and 500 Hz settings, obtained by matching the values in the x\_IIR\_CORNER and x\_CIC\_CORNER\_LPF fields, 12 other settings are possible (see Table 16).

In general, a higher cutoff (-3 dB) frequency results in less delay but more noise, whereas a lower cutoff frequency results in less noise but more delay. These trends are shown in Figure 37 through Figure 40. This phenomenon is not necessarily always the case. Therefore, take care when choosing filter settings to achieve the desired trade-off between noise and latency.

The resonant frequency of the sensor has an impact on the total signal chain response. Filter settings near resonance are shifted to higher frequencies, resulting in higher effective bandwidths. Also, the front-end electronics add a constant delay of approximately 14 µs for the x- and y-axes, and 20 µs for the z-axis.

<!-- image -->

Figure 37. X- and Y-Axes Group Delay vs. Frequency for All Filter Settings (See Table 16 for Specific Items in This Figure Marked with Circles)

<!-- image -->

Figure 38. X- and Y-Axes Noise vs. Frequency for All Filter Settings (See Table 16 for Specific Items in This Figure Marked with Circles)

Figure 39. Z-Axis Group Delay vs. Frequency for All Filter Settings (See Table 16 for Specific Items in This Figure Marked with Circles)

<!-- image -->

Figure 40. Z-Axis Noise vs. Frequency for All Filter Settings (See Table 16 for Specific Items in This Figure Marked with Circles)

<!-- image -->

## SERIAL COMMUNICATIONS

Table 16. Low-Pass Filter Settings Combinations (X- and Y-Axes) 1

| CIC Filter   | CIC Filter      | IIR Filter   | IIR Filter      | Cascaded Filters Only   | Cascaded Filters Only   | Entire Signal Chain   | Entire Signal Chain   | Entire Signal Chain   | Entire Signal Chain   | Entire Signal Chain   | Entire Signal Chain   |
|--------------|-----------------|--------------|-----------------|-------------------------|-------------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|
|              | -3 dB Frequency | Setting      | -3 dB Frequency | -3 dB Frequency (Hz) 2  | Group                   | -3 dB Frequency       | -3 dB Frequency       | Group Delay at 200 Hz | Group Delay at 200 Hz | RMS Noise             | RMS Noise             |
| Setting      | (Hz)            |              | (Hz)            |                         | Delay 200 Hz (µs) 3     | X- and Y- Axes (Hz)   | Z-Axis (Hz)           | X- and Y- Axes (µs)   | Z-Axis (µs)           | X- and Y- Axes (m g ) | Z-Axis (m             |
| 00           | 7668            | 00           | 5002            | 4051 4                  | 70.9 4                  | 6841 4                | 4691 4                | 84.7 4                | 91.3 4                | 85 m g 4              | 20 4                  |
| 00           | 7668            | 01           | 2501            | 2343                    | 103                     | 6297                  | 4314                  | 117                   | 123                   |                       |                       |
| 00           | 7668            | 10           | 1250            | 1229                    | 166                     | 1384                  | 3912                  | 180                   | 187                   |                       |                       |
| 00           | 7668            | 11           | 625             | 622                     | 294                     | 639                   | 668                   | 308                   | 314                   |                       |                       |
| 01           | 3829            | 00           | 5002            | 2926                    | 113                     | 6113                  | 4369                  | 126                   | 133                   |                       |                       |
| 01           | 3829            | 01           | 2501            | 2025 4                  | 144 4                   | 5747 4                | 4091 4                | 158 4                 | 165 4                 | 22.5 4                | 30 4                  |
| 01           | 3829            | 10           | 1250            | 1171                    | 208                     | 1295                  | 3754                  | 222                   | 228                   |                       |                       |
| 01           | 3829            | 11           | 625             | 614                     | 335                     | 630                   | 657                   | 349                   | 356                   |                       |                       |
| 10           | 1914            | 00           | 5002            | 1752                    | 196                     | 2100                  | 3642                  | 210                   | 216                   |                       |                       |
| 10           | 1914            | 01           | 2501            | 1463                    | 228                     | 1659                  | 3437                  | 242                   | 248                   |                       |                       |
| 10           | 1914            | 10           | 1250            | 1012 4                  | 291 4                   | 1078 4                | 1224 4                | 305 4                 | 312 4                 | 5.5 4                 | 7.0 4                 |
| 10           | 1914            | 11           | 625             | 586                     | 419                     | 599                   | 620                   | 433                   | 439                   |                       |                       |
| 11           | 957             | 00           | 5002            | 934                     | 363                     | 974                   | 1046                  | 376                   | 383                   |                       |                       |
| 11           | 957             | 01           | 2501            | 876                     | 394                     | 909                   | 968                   | 408                   | 415                   |                       |                       |
| 11           | 957             | 10           | 1250            | 731                     | 458                     | 752                   | 786                   | 472                   | 478                   |                       |                       |
| 11           | 957             | 11           | 625             | 506 4                   | 585 4                   | 513 4                 | 525 4                 | 599 4                 | 606 4                 | 2.5 4                 | 4.0 4                 |

1 A blank cell in this table indicates that the associated value is not measured for this setting.

2 The -3 dB frequencies shown in this table are from the combination of the CIC and IIR filters only. These frequencies do not include the effects of the resonant frequency of the sensor.

3 The group delay values shown in this table are from the cascaded filters only. These group delay values do not include the additional delay imposed by the front-end electronics or the ADC.

4 See the circles in Figure 37 through Figure 40 for more information.

## REGISTER MAP

## Table 17. Register Summary

| Addr.   | Name         | Bits   | Bit 7        | Bit 6        | Bit 5        | Bit 4        | Bit 3        | Bit 2        | Bit 1            | Bit 0            | Reset 1   | RW   |
|---------|--------------|--------|--------------|--------------|--------------|--------------|--------------|--------------|------------------|------------------|-----------|------|
| 0x00    | DEVICE_ID0   | [7:0]  | VARIANT[2:0] | VARIANT[2:0] | VARIANT[2:0] | REVID        | REVID        | REVID        | REVID            | REVID            | 0x22      | R    |
| 0x01    | DEVICE_ID1   | [7:0]  | XL_X         | XL_Y         | XL_Z         | YAW          | ROLL         | PITCH        | VARIANT[4:3]     | VARIANT[4:3]     | 0xE0      | R    |
| 0x80    | USER_REG_KEY | [7:0]  | USER_REG_KEY | USER_REG_KEY | USER_REG_KEY | USER_REG_KEY | USER_REG_KEY | USER_REG_KEY | USER_REG_KEY     | USER_REG_KEY     | 0xBC      | RW   |
| 0x81    | I2S_CFG0     | [7:0]  | INV          | Early        | ALT          | TDMSS        | RSVD         | RSVD         | TDMMODE          | TDMMODE          | 0x01      | RW   |
| 0x82    | I2S_CFG1     | [7:0]  | RSVD         | RSVD         | RSVD         | RSVD         | RSVD         | TXBCLKINV    | TX1EN            | TX0EN            | 0x00      | RW   |
| 0x83    | CLOCK_RATE   | [7:0]  | RSVD         | RSVD         | RSVD         | RSVD         | RSVD         | A2B_CLK_RATE | A2B_CLK_RATE     | A2B_CLK_RATE     | 0x00      | RW   |
| 0x84    | X_ST         | [7:0]  | RSVD         | RSVD         | RSVD         | RSVD         | RSVD         | X_ST_AC      | X_ST_POS         | X_ST_NEG         | 0x00      | RW   |
| 0x85    | X_FILT       | [7:0]  | X_HPF_EN     | X_IIR_EN     | X_HPF_CORNER | X_HPF_CORNER | X_IIR_CORNER | X_IIR_CORNER | X_CIC_CORNER_LPF | X_CIC_CORNER_LPF | 0x40      | RW   |
| 0x86    | Y_ST         | [7:0]  | RSVD         | RSVD         | RSVD         | RSVD         | RSVD         | Y_ST_AC      | Y_ST_NEG         | Y_ST_POS         | 0x00      | RW   |
| 0x87    | Y_FILT       | [7:0]  | Y_HPF_EN     | Y_IIR_EN     | Y_HPF_CORNER | Y_HPF_CORNER | Y_HPF_CORNER | Y_IIR_CORNER | Y_CIC_CORNER_LPF | Y_CIC_CORNER_LPF | 0x40      | RW   |
| 0x88    | Z_ST         | [7:0]  | RSVD         | RSVD         | RSVD         | RSVD         | RSVD         | Z_ST_AC      | Z_ST_POS         | Z_ST_NEG         | 0x00      | RW   |
| 0x89    | Z_FILT       | [7:0]  | Z_HPF_EN     | Z_IIR_EN     | Z_HPF_CORNER | Z_HPF_CORNER | Z_HPF_CORNER | Z_IIR_CORNER | Z_CIC_CORNER_LPF | Z_CIC_CORNER_LPF | 0x40      | RW   |
| 0x8A    | X_DATA_LO    | [7:0]  | X_DATA[7:0]  | X_DATA[7:0]  | X_DATA[7:0]  | X_DATA[7:0]  | X_DATA[7:0]  | X_DATA[7:0]  | X_DATA[7:0]      | X_DATA[7:0]      | N/A       | R    |
| 0x8B    | X_DATA_HI    | [7:0]  | X_DATA[15:8] | X_DATA[15:8] | X_DATA[15:8] | X_DATA[15:8] | X_DATA[15:8] | X_DATA[15:8] | X_DATA[15:8]     | X_DATA[15:8]     | N/A       | R    |
| 0x8C    | Y_DATA_LO    | [7:0]  | Y_DATA[7:0]  | Y_DATA[7:0]  | Y_DATA[7:0]  | Y_DATA[7:0]  | Y_DATA[7:0]  | Y_DATA[7:0]  | Y_DATA[7:0]      | Y_DATA[7:0]      | N/A       | R    |
| 0x8D    | Y_DATA_HI    | [7:0]  | Y_DATA[15:8] | Y_DATA[15:8] | Y_DATA[15:8] | Y_DATA[15:8] | Y_DATA[15:8] | Y_DATA[15:8] | Y_DATA[15:8]     | Y_DATA[15:8]     | N/A       | R    |
| 0x8E    | Z_DATA_LO    | [7:0]  | Z_DATA[7:0]  | Z_DATA[7:0]  | Z_DATA[7:0]  | Z_DATA[7:0]  | Z_DATA[7:0]  | Z_DATA[7:0]  | Z_DATA[7:0]      | Z_DATA[7:0]      | N/A       | R    |
| 0x8F    | Z_DATA_HI    | [7:0]  | Z_DATA[15:8] | Z_DATA[15:8] | Z_DATA[15:8] | Z_DATA[15:8] | Z_DATA[15:8] | Z_DATA[15:8] | Z_DATA[15:8]     | Z_DATA[15:8]     | N/A       | R    |

## REGISTER DETAILS

This section describes the functions of the ADXL317 registers. The ADXL317 powers up with the default register values shown in the Reset column of Table 17 in the Register Map section. Unless otherwise noted, values in the Settings and Reset columns of the tables in this section are in binary.

Registers with a value of R in the RW column are read only. Any attempt to write to these registers is ignored. Any bits labeled RSVD are reserved for use by Analog Devices only and must not be changed.

To make changes to any of the writeable registers, the user register key must first be written to the USER\_REG\_KEY register. See the USER\_REG\_KEY register explanation for details.

## DEVICE ID REGISTERS

The DEVICE\_IDx registers contain information necessary to distinguish the particular version of the ADXL317 device being implemented in the customer application. The device ID is implemented with sufficient flexibility to track the following types of information:

- Axes of sensitivity.
- Temperature range.
- Performance grade.
- SPI interface version.
- Major product revisions.

The device ID provides an electronically readable identification mechanism for the ADXL317. The specific function of each subset of the device ID is provided in this section. The device ID is implemented across the Analog Devices portfolio of inertial sensing components. It is not expected that all functions of the device ID be implemented for all products.

At the time of this data sheet release, the full device ID for the ADXL317 is 0xE022.

Table 18. DEVICE\_ID0 Register Summary (Address: 0x00, Name: DEVICE\_ID0, Reset: 0x22)

|              | Bits Bit Name Settings Description                                       |      |    |
|--------------|--------------------------------------------------------------------------|------|----|
| VARIANT[2:0] | [7:5] Analog Devices Variant Devices device variant lower three bits are | 001  | R  |
| REVID        | [4:0] Analog Devices Product product. This field identifies              | 0x02 | R  |
| REVID        | [4:0] Analog Devices Product product. This field identifies              | 0x02 | R  |
| REVID        | [4:0] Analog Devices Product product. This field identifies              | 0x02 | R  |
| REVID        | [4:0] Analog Devices Product product. This field identifies              | 0x02 | R  |
| REVID        | [4:0] Analog Devices Product product. This field identifies              | 0x02 | R  |
| REVID        | [4:0] Analog Devices Product product. This field identifies              | 0x02 | R  |
| REVID        | [4:0] Analog Devices Product product. This field identifies              | 0x02 | R  |

## REVID

REVID contains the customer revision ID for the ADXL317. This field is intended to store significant changes to the device revision throughout its lifetime. Examples include

- Prerelease: A sample, B sample, C sample, and so on.
- Postrelease: major changes to silicon (ASIC or MEMS).

At the time of this data sheet release, the REVID value is 0x02.

## REGISTER DETAILS

## Variant

The variant field provides an identification value that corresponds to the specific model number purchased by the customer. There is no significance to the value stored in the variant field, only that it is uniquely associated with a given model number. The variant field for the ADXL317 is 0x01.

## Pitch

The pitch field indicates if the inertial sensor is capable of sensing angular rate along the pitch axis of the package.

Table 19. Pitch Bit Settings

|   State | Pitch Angular Rate Sensitive   |
|---------|--------------------------------|
|       0 | No                             |
|       1 | Yes                            |

## Roll

The roll field indicates if the inertial sensor is capable of sensing angular rate along the roll axis of the package.

Table 20. Roll Bit Settings

|   State | Roll Angular Rate Sensitive   |
|---------|-------------------------------|
|       0 | No                            |
|       1 | Yes                           |

## Yaw

The yaw field indicates if the inertial sensor is capable of sensing angular rate along the yaw axis of the package.

Table 21. Yaw Bit Settings

|   State | Yaw Angular Rate Sensitive   |
|---------|------------------------------|
|       0 | No                           |
|       1 | Yes                          |

## XL\_Z

The XL\_Z field indicates if the inertial sensor is capable of sensing acceleration relative to the z-axis of the package.

Table 22. XL\_Z Bit Settings

|   State | Z-Axis Acceleration Sensitive   |
|---------|---------------------------------|
|       0 | No                              |
|       1 | Yes                             |

## XL\_Y

The XL\_Y field indicates if the inertial sensor is capable of sensing acceleration relative to the y-axis of the package.

## Table 23. XL\_Y Bit Settings

|   State | Y-Axis Acceleration Sensitive   |
|---------|---------------------------------|
|       0 | No                              |
|       1 | Yes                             |

## XL\_X

The XL\_X field indicates if the inertial sensor is capable of sensing acceleration relative to the x-axis of the package.

## REGISTER DETAILS

## Table 24. XL\_X Bit Settings

|   State | X-Axis Acceleration Sensitive   |
|---------|---------------------------------|
|       0 | No                              |
|       1 | Yes                             |

## Table 25. DEVICE\_ID1 Register Summary (Address: 0x01, Name: DEVICE\_ID1, Reset: 0xE0)

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                  |   Reset | Access   |
|--------|--------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | XL_X         |            | X-Sensitive Accelerometer.                                                                                                                                                                   |       1 | R        |
|        |              | 0          | The device does not contain an accelerometer sensitive to the x-axis.                                                                                                                        |         |          |
|        |              | 1          | The device contains an accelerometer sensitive to the x-axis.                                                                                                                                |         |          |
| 6      | XL_Y         |            | Y-Sensitive Accelerometer.                                                                                                                                                                   |       1 | R        |
|        |              | 0          | The device does not contain an accelerometer sensitive to the y-axis.                                                                                                                        |         |          |
|        |              | 1          | The device contains an accelerometer sensitive to the y-axis.                                                                                                                                |         |          |
| 5      | XL_Z         |            | Z-Sensitive Accelerometer.                                                                                                                                                                   |       1 | R        |
|        |              | 0          | The device does not contain an accelerometer sensitive to the z-axis.                                                                                                                        |         |          |
|        |              | 1          | The device contains an accelerometer sensitive to the z-axis.                                                                                                                                |         |          |
| 4      | YAW          |            | Yaw Sensitive Gyroscope.                                                                                                                                                                     |       0 | R        |
|        |              | 0          | The device does not contain a yaw sensitive gyroscope.                                                                                                                                       |         |          |
|        |              | 1          | The device contains a yaw sensitive gyroscope.                                                                                                                                               |         |          |
| 3      | ROLL         |            | Roll Sensitive Gyroscope.                                                                                                                                                                    |       0 | R        |
|        |              | 0          | The device does not contain a roll sensitive gyroscope.                                                                                                                                      |         |          |
|        |              | 1          | The device contains a roll sensitive gyroscope.                                                                                                                                              |         |          |
| 2      | PITCH        |            | Pitch Sensitive Gyroscope.                                                                                                                                                                   |       0 | R        |
|        |              | 0          | The device does not contain a pitch sensitive gyroscope.                                                                                                                                     |         |          |
|        |              | 1          | The device contains a pitch sensitive gyroscope.                                                                                                                                             |         |          |
| [1:0]  | VARIANT[4:3] |            | Analog Devices Variant Identification. This field contains the upper two bits of the Analog Devices device variant information. This 5-bit field is set to 0x11 (17 decimal). Therefore, the |      00 | R        |
|        |              | 00         | upper two bits are 10. ADXL317.                                                                                                                                                              |         |          |
|        |              |            | Not used.                                                                                                                                                                                    |         |          |
|        |              | 01 …11     |                                                                                                                                                                                              |         |          |

## USER REGISTER KEY REGISTER (ADDRESS: 0X80, NAME: USER\_REG\_KEY, RESET: 0XBC)

The user register key register is the lockout register for the ADXL317 and prevents unintended writes to the device during system power-up. When the ADXL317 first powers up, all attempts to write to any of the device registers are ignored until the proper key is written to the USER\_REG\_KEY register. This write protects the device from entering an unexpected state during potential transient activity on the I 2 C bus.

Before making changes to any of the subsequent registers, the following procedure must be completed:

1. Write 0xBC to the USER\_REG\_KEY register (Address 0x80).
2. Write 0x43 to the USER\_REG\_KEY register (Address 0x80).

After writing these two values, all writeable registers are unlocked and can be written to as normal. After being unlocked, the USER\_ REG\_KEY register returns 0xBC. The two writes to enter user test mode must be performed using two separate, single-byte writes. A multibyte write cannot be used to enter user test mode.

After entering test mode, the user must observe a wait time before reading the x\_DATA\_LO or x\_DATA\_HI registers (Address 0x8A to Address 0x8F). This wait time is equal to the group delay time shown in Table 16.

## I 2 S CONFIGURATION REGISTERS

The I 2 S configuration registers control various settings for the I 2 S bus of the ADXL317. For more information about how these settings affect the timing of the I 2 S output, see the I2S/TDM Interface section.

## REGISTER DETAILS

Table 26. I2S\_CFG0 Register Summary (Address: 0x81, Name: I2S\_CFG0, Reset: 0x00)

| Bits   | Bit Name   |   Settings | Description                                                                                                       |   Reset | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | INV        |            | I 2 S Clock Polarity. This bit sets the clock polarity for I 2 S communications.                                  |       0 | RW       |
|        |            |          0 | Audio frame begins on rising edge of SYNC signal.                                                                 |         |          |
|        |            |          1 | Audio frame begins on falling edge of SYNC signal.                                                                |         |          |
| 6      | Early      |            | I 2 S Early Sync. This bit sets the timing of the SYNC signal.                                                    |       0 | RW       |
|        |            |          0 | SYNC changes in same cycle as the MSB of the first data channel.                                                  |         |          |
|        |            |          1 | SYNC changes one cycle before the MSB of the first data channel.                                                  |         |          |
| 5      | ALT        |            | I 2 S Alternating Sync. This bit sets the behavior of the SYNC signal.                                            |       0 | RW       |
|        |            |          0 | SYNC is asserted for one BCLK cycle only.                                                                         |         |          |
|        |            |          1 | SYNC is asserted at the beginning of each sampling period and then toggled in the middle of each sampling period. |         |          |
| 4      | TDMSS      |            | I 2 S TDM Slot Size. This bit sets the size for each TDM slot.                                                    |       0 | RW       |
|        |            |          0 | Each slot transmits 32 bits of data.                                                                              |         |          |
|        |            |          1 | Each slot transmits 16 bits of data.                                                                              |         |          |
| [3:2]  | RSVD       |            | Reserved Bits.                                                                                                    |      00 | RW       |
| [1:0]  | TDMMODE    |            | I 2 S TDM Mode. This field sets the TDM mode for I 2 S communications.                                            |      01 | RW       |
|        |            |         00 | TDM2.                                                                                                             |         |          |
|        |            |         01 | TDM4.                                                                                                             |         |          |
|        |            |         10 | TDM8.                                                                                                             |         |          |

Table 27. I2S\_CFG1 Register Summary (Address: 0x82, Name: I2S\_CFG1, Reset: 0x00)

| Bits   | Bit Name   |   Settings | Description                                                                                            |   Reset | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | RSVD       |            | Reserved Bits.                                                                                         |    0000 | RW       |
| 2      | TXBCLKINV  |            | I 2 S Transmit Clock Inversion. This bit sets the edge of BCLK on which the data transmit pins change. |       0 | RW       |
|        |            |          0 | DTX0 and DTX1 pins change on the rising edge of BCLK.                                                  |         |          |
|        |            |          1 | DTX0 and DTX1 pins change on the falling edge of BCLK.                                                 |         |          |
| 1      | TX1EN      |            | I 2 S Channel 1 Enable. This bit enables the transmission of data on I 2 S Channel 1 (DTX1).           |       0 | RW       |
|        |            |          0 | Data transmission is disabled on Channel 1.                                                            |         |          |
|        |            |          1 | Data transmission is enabled on Channel 1.                                                             |         |          |
| 0      | TX0EN      |            | I 2 S Channel 0 Enable. This bit enables the transmission of data on I 2 S Channel 0 (DTX0).           |       0 | RW       |
|        |            |          0 | Data transmission is disabled on Channel 0.                                                            |         |          |
|        |            |          1 | Data transmission is enabled on Channel 0.                                                             |         |          |

## CLOCK RATE REGISTER

Table 28. I2S\_CFG1 Register Summary (Address: 0x83, Name: CLOCK\_RATE, Reset: 0x00)

| Bits   | Bit Name     | Settings   | Description                                                                                                                                                                                    | Reset   | Access   |
|--------|--------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | RSVD         |            | Reserved Bits.                                                                                                                                                                                 | 0x00    | RW       |
| [2:0]  | A2B_CLK_RATE |            | A 2 B Clock Rate Select. This field sets the rate of the BCLK signal. Supplying a clock that does not match the setting in this field may result in unpredictable behavior and incorrect data. | 000     | RW       |
|        |              | 000        | 6.144 MHz.                                                                                                                                                                                     |         |          |
|        |              | 001        | 3.072 MHz.                                                                                                                                                                                     |         |          |
|        |              | 010…111    | Not used.                                                                                                                                                                                      |         |          |

## REGISTER DETAILS

## X-AXIS SELF TEST CONFIGURATION REGISTER

The x-axis self test configuration register enables the self test functionality on the x-axis. Although the ADXL317 supports three types of self test on each axis (negative, positive, and ac), only one such test can be enabled at one time. The X\_ST\_AC, X\_ST\_POS, and X\_ST\_NEG bits are mutually exclusive. If more than one of these bits are asserted, self test is disabled. See Table 8 for a list of all possible combinations of settings for this register and how they affect the self test output. See the Using Self Test section for more information.

Table 29. X\_ST Register Summary (Address: 0x84, Name: X\_ST, Reset: 0x00)

| Bits   | Bit Name   |   Settings | Description                                                                                            |   Reset | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | RSVD       |            | Reserved Bits.                                                                                         |   00000 | RW       |
| 2      | X_ST_AC    |            | X-Axis AC Self Test Enable. This bit enables the ac self test functionality on the x-axis.             |       0 | RW       |
|        |            |          0 | AC self test is disabled on the x-axis.                                                                |         |          |
|        |            |          1 | A 100 Hz square wave self test is applied to the x-axis.                                               |         |          |
| 1      | X_ST_POS   |            | X-Axis Positive Self Test Enable. This bit enables the positive self test functionality on the x-axis. |       0 | RW       |
|        |            |          0 | Positive self test is disabled on the x-axis.                                                          |         |          |
|        |            |          1 | A positive (dc) self test is applied to the x-axis.                                                    |         |          |
| 0      | X_ST_NEG   |            | X-Axis Negative Self Test Enable. This bit enables the negative self test functionality on the x-axis. |       0 | RW       |
|        |            |          0 | Negative self test is disabled on the x-axis.                                                          |         |          |
|        |            |          1 | A negative (dc) self test is applied to the x-axis.                                                    |         |          |

## X-AXIS FILTER CONFIGURATION REGISTER

The x-axis filter configuration register controls the various filters along the x-axis signal chain in the ADXL317.

Table 30. X\_FILT Register Summary (Address: 0x85, Name: X\_FILT, Reset: 0x40)

| Bits   | Bit Name         |   Settings | Description                                                                                                                                      |   Reset | Access   |
|--------|------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | X_HPF_EN         |            | X-Axis High-Pass Filter Enable. This bit enables the high-pass filter in the x-axis signal chain. This filter is disabled by default.            |       0 | RW       |
|        |                  |          0 | The high-pass filter is disabled in the x-axis signal chain.                                                                                     |         |          |
|        |                  |          1 | The high-pass filter is enabled in the x-axis signal chain.                                                                                      |         |          |
| 6      | X_IIR_EN         |            | X-Axis IIR Filter Enable. This bit enables the IIR filter in the x-axis signal chain. This filter is enabled by default.                         |       1 | RW       |
|        |                  |          0 | The IIR filter is disabled in the x-axis signal chain.                                                                                           |         |          |
|        |                  |          1 | The IIR filter is enabled in the x-axis signal chain.                                                                                            |         |          |
| [5:4]  | X_HPF_CORNER     |            | X-Axis High-Pass Filter Corner Select. This field controls the corner frequency of the high- pass filter in the x-axis signal chain, if enabled. |      00 | RW       |
|        |                  |         00 | 29.8 Hz.                                                                                                                                         |         |          |
|        |                  |         01 | 7.46 Hz.                                                                                                                                         |         |          |
|        |                  |         10 | 1.85 Hz.                                                                                                                                         |         |          |
|        |                  |         11 | 0.46 Hz.                                                                                                                                         |         |          |
| [3:2]  | X_IIR_CORNER     |            | X-Axis IIR Filter Corner Select. This field controls the corner frequency of the IIR filter in the x-axis signal chain, if enabled.              |      00 | RW       |
|        |                  |         00 | 5002 Hz.                                                                                                                                         |         |          |
|        |                  |         01 | 2501 Hz.                                                                                                                                         |         |          |
|        |                  |         10 | 1250 Hz.                                                                                                                                         |         |          |
|        |                  |         11 | 625 Hz.                                                                                                                                          |         |          |
| [1:0]  | X_CIC_CORNER_LPF |            | X-Axis CIC Low-Pass Filter Corner Select. This field controls the corner frequency of the CIC low-pass filter in the x-axis signal chain.        |      00 | RW       |
|        |                  |         00 | 7668 Hz.                                                                                                                                         |         |          |

## REGISTER DETAILS

Table 30. X\_FILT Register Summary (Address: 0x85, Name: X\_FILT, Reset: 0x40) (Continued)

| Bits   | Bit Name   |   Settings | Description   | Reset   | Access   |
|--------|------------|------------|---------------|---------|----------|
|        |            |         01 | 3829 Hz.      |         |          |
|        |            |         10 | 1914 Hz.      |         |          |
|        |            |         11 | 957 Hz.       |         |          |

## Y-AXIS SELF TEST CONFIGURATION REGISTER

The y-axis self test configuration register enables self test functionality on the y-axis. Although the ADXL317 supports three types of self test on each axis (negative, positive, and ac), only one such test can be enabled at a time. The Y\_ST\_AC, Y\_ST\_POS, and Y\_ST\_NEG bits are mutually exclusive. If more than one of these bits are asserted, self test is disabled. See Table 8 for a list of all possible combinations of settings for this register and how they affect the self test output. See the Using Self Test section for more information.

Table 31. Y\_ST Register Summary (Address: 0x86, Name: Y\_ST, Reset: 0x00)

| Bits   | Bit Name   |   Settings | Description                                                                                            | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | RSVD       |            | Reserved Bits                                                                                          | 0x00    | RW       |
| 2      | Y_ST_AC    |            | Y-Axis AC Self Test Enable. This bit enables the ac self test functionality on the Y-axis.             | 0       | RW       |
|        |            |          0 | AC self test is disabled on the y-axis.                                                                |         |          |
|        |            |          1 | A 100 Hz square wave self test is applied to the y-axis.                                               |         |          |
| 1      | Y_ST_NEG   |            | Y-Axis Negative Self Test Enable. This bit enables the negative self test functionality on the y-axis. | 0       | RW       |
|        |            |          0 | Negative self test is disabled on the y-axis.                                                          |         |          |
|        |            |          1 | A negative (dc) self test is applied to the y-axis.                                                    |         |          |
| 0      | Y_ST_POS   |            | Y-Axis Positive Self Test Enable. This bit enables the positive self test functionality on the y-axis. | 0       | RW       |
|        |            |          0 | Positive self test is disabled on the y-axis.                                                          |         |          |
|        |            |          1 | A positive (dc) self test is applied to the y-axis.                                                    |         |          |

## Y-AXIS FILTER CONFIGURATION REGISTER

The y-axis filter configuration register controls the various filters along the y-axis signal chain in the ADXL317.

Table 32. Y\_FILT Register Summary (Address: 0x87, Name: Y\_FILT, Reset: 0x40)

| Bits   | Bit Name     |   Settings | Description                                                                                                                                      |   Reset | Access   |
|--------|--------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | Y_HPF_EN     |            | Y-Axis High-Pass Filter Enable. This bit enables the high-pass filter in the y-axis signal chain. This filter is disabled by default.            |       0 | RW       |
|        |              |          0 | The high-pass filter is disabled in the y-axis signal chain.                                                                                     |         |          |
|        |              |          1 | The high-pass filter is enabled in the y-axis signal chain.                                                                                      |         |          |
| 6      | Y_IIR_EN     |            | Y-Axis IIR Filter Enable. This bit enables the IIR filter in the y-axis signal chain. This filter is enabled by default.                         |       1 | RW       |
|        |              |          0 | The IIR filter is disabled in the y-axis signal chain.                                                                                           |         |          |
|        |              |          1 | The IIR filter is enabled in the y-axis signal chain.                                                                                            |         |          |
| [5:4]  | Y_HPF_CORNER |            | Y-Axis High-Pass Filter Corner Select. This field controls the corner frequency of the high- pass filter in the y-axis signal chain, if enabled. |      00 | RW       |
|        |              |         00 | 29.8 Hz.                                                                                                                                         |         |          |
|        |              |         01 | 7.46 Hz.                                                                                                                                         |         |          |
|        |              |         10 | 1.85 Hz.                                                                                                                                         |         |          |
|        |              |         11 | 0.46 Hz.                                                                                                                                         |         |          |
| [3:2]  | Y_IIR_CORNER |            | Y-Axis IIR Filter Corner Select. This field controls the corner frequency of the IIR filter in the y-axis signal chain, if enabled.              |      00 | RW       |
|        |              |         00 | 5002 Hz.                                                                                                                                         |         |          |

## REGISTER DETAILS

Table 32. Y\_FILT Register Summary (Address: 0x87, Name: Y\_FILT, Reset: 0x40) (Continued)

| Bits   | Bit Name         |   Settings | Description                                                                                                                               |   Reset | Access   |
|--------|------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |                  |         01 | 2501 Hz.                                                                                                                                  |         |          |
|        |                  |         10 | 1250 Hz.                                                                                                                                  |         |          |
|        |                  |         11 | 625 Hz.                                                                                                                                   |         |          |
| [1:0]  | Y_CIC_CORNER_LPF |            | Y-Axis CIC Low-Pass Filter Corner Select. This field controls the corner frequency of the CIC low-pass filter in the y-axis signal chain. |      00 | RW       |
|        |                  |         00 | 7668 Hz.                                                                                                                                  |         |          |
|        |                  |         01 | 3829 Hz.                                                                                                                                  |         |          |
|        |                  |         10 | 1914 Hz.                                                                                                                                  |         |          |
|        |                  |         11 | 957 Hz.                                                                                                                                   |         |          |

## Z-AXIS SELF TEST CONFIGURATION REGISTER

The z-axis self test configuration register enables self test functionality on the z-axis. Although the ADXL317 supports three types of self test on each axis (negative, positive, and ac), only one such test can be enabled at a time. The Z\_ST\_AC, Z\_ST\_POS, and Z\_ST\_NEG bits are mutually exclusive. If more than one of these bits are asserted, self test is disabled. See Table 8 for a list of all possible combinations of settings for this register and how they affect the self test output. See the Using Self Test section for more information.

Table 33. Z\_ST Register Summary (Address: 0x88, Name: Z\_ST, Reset: 0x00)

| Bits   | Bit Name   |   Settings | Description                                                                                            | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------|---------|----------|
| [7:3]  | RSVD       |            | Reserved Bits.                                                                                         | 0x00    | RW       |
| 2      | Z_ST_AC    |            | Z-Axis AC Self Test Enable. This bit enables the ac self test functionality on the z-axis.             | 0       | RW       |
|        |            |          0 | AC self test is disabled on the z-axis.                                                                |         |          |
|        |            |          1 | A 100 Hz square wave self test is applied to the z-axis.                                               |         |          |
| 1      | Z_ST_POS   |            | Z-Axis Positive Self test Enable. This bit enables the positive self test functionality on the z-axis. | 0       | RW       |
|        |            |          0 | Positive self test is disabled on the z-axis.                                                          |         |          |
|        |            |          1 | A positive (dc) self test is applied to the z-axis.                                                    |         |          |
| 0      | Z_ST_NEG   |            | Z-Axis Negative Self test Enable. This bit enables the negative self test functionality on the z-axis. | 0       | RW       |
|        |            |          0 | Negative self test is disabled on the z-axis.                                                          |         |          |
|        |            |          1 | A negative (dc) self test is applied to the z-axis.                                                    |         |          |

## Z-AXIS FILTER CONFIGURATION REGISTER

The z-axis filter configuration register controls the various filters along the z-axis signal chain in the ADXL317.

Table 34. Z\_FILT Register Summary (Address: 0x89, Name: Z\_FILT, Reset: 0x40)

| Bits   | Bit Name     |   Settings | Description                                                                                                                                      |   Reset | Access   |
|--------|--------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | Z_HPF_EN     |            | Z-Axis High-Pass Filter Enable. This bit enables the high-pass filter in the z-axis signal chain. This filter is disabled by default.            |       0 | RW       |
|        |              |          0 | The high-pass filter is disabled in the z-axis signal chain.                                                                                     |         |          |
|        |              |          1 | The high-pass filter is enabled in the z-axis signal chain.                                                                                      |         |          |
| 6      | Z_IIR_EN     |            | Z-Axis IIR Filter Enable. This bit enables the IIR filter in the z-axis signal chain. This filter is enabled by default.                         |       1 | RW       |
|        |              |          0 | The IIR filter is disabled in the z-axis signal chain.                                                                                           |         |          |
|        |              |          1 | The IIR filter is enabled in the z-axis signal chain.                                                                                            |         |          |
| [5:4]  | Z_HPF_CORNER |            | Z-Axis High-Pass Filter Corner Select. This field controls the corner frequency of the high- pass filter in the z-axis signal chain, if enabled. |      00 | RW       |
|        |              |         00 | 29.8 Hz.                                                                                                                                         |         |          |

## REGISTER DETAILS

Table 34. Z\_FILT Register Summary (Address: 0x89, Name: Z\_FILT, Reset: 0x40) (Continued)

| Bits   | Bit Name         | Settings   | Description                                                                                                                         |   Reset | Access   |
|--------|------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |                  | 01         | 7.46 Hz.                                                                                                                            |         |          |
|        |                  | 10         | 1.85 Hz.                                                                                                                            |         |          |
|        |                  | 11         | 0.46 Hz.                                                                                                                            |         |          |
| [3:2]  | Z_IIR_CORNER     |            | Z-Axis IIR Filter Corner Select. This field controls the corner frequency of the IIR filter in the z-axis signal chain, if enabled. |      00 | RW       |
|        |                  | 00         | 5002 Hz.                                                                                                                            |         |          |
|        |                  | 01         | 2501 Hz.                                                                                                                            |         |          |
|        |                  | 10         | 1250 Hz.                                                                                                                            |         |          |
|        |                  | 11         | 625 Hz.                                                                                                                             |         |          |
| [1:0]  | Z_CIC_CORNER_LPF |            | Z-Axis CIC Low-Pass Filter Corner Select. This field controls the corner frequency of the CIC                                       |      00 | RW       |
|        |                  |            | low-pass filter in the z-axis signal chain.                                                                                         |         |          |
|        |                  | 00         | 7668 Hz. 3829 Hz.                                                                                                                   |         |          |
|        |                  | 01 10      | 1914 Hz.                                                                                                                            |         |          |
|        |                  | 11         | 957                                                                                                                                 |         |          |
|        |                  |            | Hz.                                                                                                                                 |         |          |

## X-AXIS ACCELEROMETER DATA REGISTERS

The x-axis accelerometer data registers contain the 14-bit, zero padded, x-axis acceleration data. X\_DATA\_LO contains the 6 LSBs, and X\_DATA\_HI contains the 8 MSBs.

The 14-bit acceleration value is left justified, with Bit 0 and Bit 1 in the X\_DATA\_LO register fixed at 0. This setup mimics the format for 16-bit I 2 S data.

Table 35. X\_DATA\_LO Bit Map (Address: 0x8A, Reset: Not Applicable; B1 and B0 Are Fixed at 0)

| B7                                                                 | B6                                                                 | B5                                                                 | B4                                                                 | B3                                                                 | B2                                                                 | B1                                                                 | B0                                                                 |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | LSB                                                                | 0                                                                  | 0                                                                  |
| Table 36. X_DATA_HI Bit Map (Address: 0x8B, Reset: Not Applicable) | Table 36. X_DATA_HI Bit Map (Address: 0x8B, Reset: Not Applicable) | Table 36. X_DATA_HI Bit Map (Address: 0x8B, Reset: Not Applicable) | Table 36. X_DATA_HI Bit Map (Address: 0x8B, Reset: Not Applicable) | Table 36. X_DATA_HI Bit Map (Address: 0x8B, Reset: Not Applicable) | Table 36. X_DATA_HI Bit Map (Address: 0x8B, Reset: Not Applicable) | Table 36. X_DATA_HI Bit Map (Address: 0x8B, Reset: Not Applicable) | Table 36. X_DATA_HI Bit Map (Address: 0x8B, Reset: Not Applicable) |
| B7                                                                 | B6                                                                 | B5                                                                 | B4                                                                 | B3                                                                 | B2                                                                 | B1                                                                 | B0                                                                 |
| MSB                                                                | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  |

## Y-AXIS ACCELEROMETER DATA REGISTERS

The y-axis accelerometer data registers contain the 14-bit, zero padded y-axis acceleration data. Y\_DATA\_LO contains the 6 LSBs, and Y\_DATA\_HI contains the 8 MSBs.

The 14-bit acceleration value is left justified, with Bit 0 and Bit 1 in the Y\_DATA\_LO register fixed at 0. This setup mimics the format for 16-bit I 2 S data.

Table 37. Y\_DATA\_LO Bit Map (Address: 0x8C, Reset: Not Applicable; B1 and B0 Are Fixed at 0)

| B7                                                                 | B6                                                                 | B5                                                                 | B4                                                                 | B3                                                                 | B2                                                                 | B1                                                                 | B0                                                                 |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | LSB                                                                | 0                                                                  | 0                                                                  |
| Table 38. Y_DATA_HI Bit Map (Address: 0x8D, Reset: Not Applicable) | Table 38. Y_DATA_HI Bit Map (Address: 0x8D, Reset: Not Applicable) | Table 38. Y_DATA_HI Bit Map (Address: 0x8D, Reset: Not Applicable) | Table 38. Y_DATA_HI Bit Map (Address: 0x8D, Reset: Not Applicable) | Table 38. Y_DATA_HI Bit Map (Address: 0x8D, Reset: Not Applicable) | Table 38. Y_DATA_HI Bit Map (Address: 0x8D, Reset: Not Applicable) | Table 38. Y_DATA_HI Bit Map (Address: 0x8D, Reset: Not Applicable) | Table 38. Y_DATA_HI Bit Map (Address: 0x8D, Reset: Not Applicable) |
| B15                                                                | B14                                                                | B13                                                                | B12                                                                | B11                                                                | B10                                                                | B9                                                                 | B8                                                                 |
| MSB                                                                | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  |

## Z-AXIS ACCELEROMETER DATA REGISTERS

The z-axis accelerometer data registers contain the 14-bit, zero padded z-axis acceleration data. Z\_DATA\_LO contains the 6 LSBs, and Z\_DATA\_HI contains the 8 MSBs.

## REGISTER DETAILS

The 14-bit acceleration value is left justified, with Bit 0 and Bit 1 in the Z\_DATA\_LO register fixed at 0. This setup mimics the format for 16-bit I 2 S data.

| B7                                                                 | B6                                                                 | B5                                                                 | B4                                                                 | B3                                                                 | B2                                                                 | B1                                                                 | B0                                                                 |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | LSB                                                                | 0                                                                  | 0                                                                  |
| Table 40. Z_DATA_HI Bit Map (Address: 0x8F, Reset: Not Applicable) | Table 40. Z_DATA_HI Bit Map (Address: 0x8F, Reset: Not Applicable) | Table 40. Z_DATA_HI Bit Map (Address: 0x8F, Reset: Not Applicable) | Table 40. Z_DATA_HI Bit Map (Address: 0x8F, Reset: Not Applicable) | Table 40. Z_DATA_HI Bit Map (Address: 0x8F, Reset: Not Applicable) | Table 40. Z_DATA_HI Bit Map (Address: 0x8F, Reset: Not Applicable) | Table 40. Z_DATA_HI Bit Map (Address: 0x8F, Reset: Not Applicable) | Table 40. Z_DATA_HI Bit Map (Address: 0x8F, Reset: Not Applicable) |
| B15                                                                | B14                                                                | B13                                                                | B12                                                                | B11                                                                | B10                                                                | B9                                                                 | B8                                                                 |
| MSB                                                                | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  | 0                                                                  |

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                                          |
|----------------------------|----------------|--------------------------------------------------------------|
| CS-32-4                    | LFCSP_SS       | 32-Lead Frame Chip Scale Package, with Side Solderable Leads |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1, 2      | Temperature Range   | Package Description   | Package Option   |
|-----------------|---------------------|-----------------------|------------------|
| ADXL317BCSZ-RL  | -40°C to +125°C     | 32-Lead LFCSP_SS      | CS-32-4          |
| ADXL317BCSZ-RL7 | -40°C to +125°C     | 32-Lead LFCSP_SS      | CS-32-4          |
| ADXL317WBCSZ-RL | -40°C to +125°C     | 32-Lead LFCSP_SS      | CS-32-4          |

## AUTOMOTIVE PRODUCTS

The ADXL317W model is available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that this automotive model may have specifications that differ from the commercial models; therefore, designers should review the Specifications section of this data sheet carefully. Only the automotive grade product shown are available for use in automotive applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for this model.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.