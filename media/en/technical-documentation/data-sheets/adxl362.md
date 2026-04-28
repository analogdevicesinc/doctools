<!-- lastmod 2023-06-01 -->
<!-- image -->

## Micropower, 3-Axis, ±2 g/±4 g/±8 g Digital Output MEMS Accelerometer

## FEATURES

- Ultra low power
- Power can be derived from coin cell battery
- 1.8 µA at 100 Hz ODR, 2.0 V supply
- 3.0 µA at 400 Hz ODR, 2.0 V supply
- 270 nA motion activated wake-up mode
- 10 nA standby current
- High resolution: 1 m g /LSB
- Built-in features for system level power savings:
- Adjustable threshold sleep/wake modes for motion activation
- Autonomous interrupt processing, without need for microcontroller intervention, to allow the rest of the system to be turned off completely
- Deep embedded FIFO minimizes host processor load
- Awake state output enables implementation of standalone, motion activated switch
- Low noise down to 175 µ g /√Hz
- Wide supply and I/O voltage ranges: 1.6 V to 3.5 V ► Operates off 1.8 V to 3.3 V rails
- Acceleration sample synchronization via external trigger
- On-chip temperature sensor
- SPI digital interface
- Measurement ranges selectable via SPI command
- Small and thin 3 mm × 3.25 mm × 1.06 mm package

## APPLICATIONS

- Hearing aids
- Home healthcare devices
- Motion enabled power save switches
- Wireless sensors
- Motion enabled metering devices

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The ADXL362 is an ultralow power, 3-axis MEMS accelerometer that consumes less than 2 µA at a 100 Hz output data rate and 270 nA when in motion triggered wake-up mode. Unlike accelerometers that use power duty cycling to achieve low power consumption, the ADXL362 does not alias input signals by undersampling; it samples the full bandwidth of the sensor at all data rates.

The ADXL362 always provides 12-bit output resolution; 8 bit formatted data is also provided for more efficient single byte transfers when a lower resolution is sufficient. Measurement ranges of ±2 g , ±4 g , and ±8 g are available, with a resolution of 1 m g /LSB on the ±2 g range. For applications where a noise level lower than the normal 550 µ g /√Hz of the ADXL362 is desired, either of two lower noise modes (down to 175 µ g /√Hz typical) can be selected at minimal increase in supply current.

In addition to its ultra low power consumption, the ADXL362 has many features to enable true system level power reduction. It includes a deep multimode output FIFO, a built-in micropower temperature sensor, and several activity detection modes including adjustable threshold sleep and wake-up operation that can run as low as 270 nA at a 6 Hz (approximate) measurement rate. A pin output is provided to directly control an external switch when activity is detected, if desired. In addition, the ADXL362 has provisions for external control of sampling time and/or an external clock.

The ADXL362 operates on a wide 1.6 V to 3.5 V supply range, and can interface, if necessary, to a host operating on a separate, lower supply voltage. The ADXL362 is available in a 3 mm × 3.25 mm × 1.06 mm package.

## TABLE OF CONTENTS

| Features................................................................                                                                                                                                                                                                                           | 1                                                                                                                                                                                                                                                                                                  | Device ID: 0x1D Register.................................26                                                                                                                                                                                                                                        |                    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| Applications...........................................................                                                                                                                                                                                                                            | 1                                                                                                                                                                                                                                                                                                  | Part ID: 0xF2 Register......................................26                                                                                                                                                                                                                                     |                    |
| General Description...............................................1                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                    | Silicon Revision ID Register.............................26                                                                                                                                                                                                                                        |                    |
| Functional Block Diagram......................................1                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                    | X-Axis Data (8 MSB) Register..........................26                                                                                                                                                                                                                                           |                    |
| Specifications........................................................                                                                                                                                                                                                                             | 4                                                                                                                                                                                                                                                                                                  | Y-Axis Data (8 MSB) Register..........................26                                                                                                                                                                                                                                           |                    |
| Absolute Maximum Ratings ..................................6                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                    | Z-Axis Data (8 MSB) Register..........................26                                                                                                                                                                                                                                           |                    |
| Thermal Resistance...........................................                                                                                                                                                                                                                                      | 6                                                                                                                                                                                                                                                                                                  | Status Register.................................................27                                                                                                                                                                                                                                 |                    |
| Package Information..........................................                                                                                                                                                                                                                                      | 6                                                                                                                                                                                                                                                                                                  | FIFO Entries Registers.....................................28                                                                                                                                                                                                                                      |                    |
| Recommended Soldering Profile........................6                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                    | X-Axis Data Registers......................................28                                                                                                                                                                                                                                      |                    |
| ESD Caution.......................................................6                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                    | Y-Axis Data Registers......................................                                                                                                                                                                                                                                        | 28                 |
| Pin Configuration and Function Descriptions........                                                                                                                                                                                                                                                | 7                                                                                                                                                                                                                                                                                                  | Z-Axis Data Registers......................................                                                                                                                                                                                                                                        | 28                 |
| Typical Performance Characteristics.....................8                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                    | Temperature Data Registers............................                                                                                                                                                                                                                                             | 28                 |
| Theory of Operation.............................................13                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                    | Soft Reset Register..........................................28                                                                                                                                                                                                                                    |                    |
| Mechanical Device Operation..........................                                                                                                                                                                                                                                              | 13                                                                                                                                                                                                                                                                                                 | Activity Threshold Registers.............................29                                                                                                                                                                                                                                        |                    |
| Operating Modes..............................................13                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                    | Activity Time Register.......................................29                                                                                                                                                                                                                                    |                    |
| Selectable Measurement Ranges....................13                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                    | Inactivity Threshold Registers..........................29                                                                                                                                                                                                                                         |                    |
| Selectable Output Data Rates..........................13                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                    | Inactivity Time Registers..................................                                                                                                                                                                                                                                        | 29                 |
| Power/Noise Tradeoff.......................................14                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                    | Activity/Inactivity Control Register....................31                                                                                                                                                                                                                                         |                    |
| Power Savings Features.....................................                                                                                                                                                                                                                                        | 15                                                                                                                                                                                                                                                                                                 | FIFO Control Register......................................32                                                                                                                                                                                                                                      |                    |
| Ultra Low Power Consumption in All Modes....15                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                    | FIFO Samples Register....................................33                                                                                                                                                                                                                                        |                    |
| Motion Detection..............................................                                                                                                                                                                                                                                     | 15                                                                                                                                                                                                                                                                                                 | INT1/INT2 Function Map Registers..................33                                                                                                                                                                                                                                               |                    |
| FIFO.................................................................17                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                    | Filter Control Register......................................                                                                                                                                                                                                                                      | 35                 |
| Communications...............................................17                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                    | Power Control Register....................................36                                                                                                                                                                                                                                       |                    |
| Additional Features..............................................19                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                    | Self Test Register.............................................37                                                                                                                                                                                                                                  |                    |
| Free Fall Detection...........................................19                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                    | Applications Information......................................                                                                                                                                                                                                                                     | 38                 |
| External                                                                                                                                                                                                                                                                                           | Clock..................................................19                                                                                                                                                                                                                                          | Application Examples.......................................38                                                                                                                                                                                                                                      |                    |
| Synchronized Data Sampling...........................19                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                    | Power...............................................................39                                                                                                                                                                                                                             |                    |
| Self Test............................................................19                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                    | FIFO Modes.....................................................                                                                                                                                                                                                                                    | 40                 |
| User Register Protection..................................19                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                    | Interrupts..........................................................42                                                                                                                                                                                                                             |                    |
| Temperature Sensor.........................................20                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                    | Using Synchronized Data Sampling                                                                                                                                                                                                                                                                   | ................43 |
| Serial Communications........................................21                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                    | Using an External Clock...................................44                                                                                                                                                                                                                                       |                    |
| SPI Commands................................................21                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                    | Using Self Test ................................................                                                                                                                                                                                                                                   | 44                 |
| Multibyte Transfers...........................................21                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                    | Mechanical Considerations for Mounting.........44                                                                                                                                                                                                                                                  |                    |
| Invalid Addresses and Address Folding...........21                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                    | Operation at Voltages Other Than 2.0                                                                                                                                                                                                                                                               | V..........44      |
| Latency Restrictions.........................................21                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                    | Axes of Acceleration Sensitivity.......................                                                                                                                                                                                                                                            | 45                 |
| Invalid Commands............................................21                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                    | Layout and Design Recommendations............                                                                                                                                                                                                                                                      | 46                 |
| Register Map.......................................................                                                                                                                                                                                                                                | 25                                                                                                                                                                                                                                                                                                 | Outline Dimensions.............................................                                                                                                                                                                                                                                    | 47                 |
| Register Details...................................................                                                                                                                                                                                                                                | 26                                                                                                                                                                                                                                                                                                 | Ordering Guide.................................................47                                                                                                                                                                                                                                  |                    |
| Device ID Register...........................................                                                                                                                                                                                                                                      | 26                                                                                                                                                                                                                                                                                                 | Evaluation Boards............................................47                                                                                                                                                                                                                                    |                    |
| REVISION HISTORY                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                    |                    |
| 5/2023-Rev. F to Rev. G                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                    |                    |
| Change to Sensitivity at X OUT , Y OUT , Z OUT Parameter, Table 1.......................................................................4                                                                                                                                                          | Change to Sensitivity at X OUT , Y OUT , Z OUT Parameter, Table 1.......................................................................4                                                                                                                                                          | Change to Sensitivity at X OUT , Y OUT , Z OUT Parameter, Table 1.......................................................................4                                                                                                                                                          |                    |
| Changes to Power Supply Requirements Section.........................................................................................40 Added V RESET Section...................................................................................................................................40 | Changes to Power Supply Requirements Section.........................................................................................40 Added V RESET Section...................................................................................................................................40 | Changes to Power Supply Requirements Section.........................................................................................40 Added V RESET Section...................................................................................................................................40 |                    |
| Added Hold Time Section..............................................................................................................................                                                                                                                                              | Added Hold Time Section..............................................................................................................................                                                                                                                                              | Added Hold Time Section..............................................................................................................................                                                                                                                                              | 40                 |
| Added Rise Time Section and Figure 48; Renumbered Sequentially............................................................40                                                                                                                                                                       | Added Rise Time Section and Figure 48; Renumbered Sequentially............................................................40                                                                                                                                                                       | Added Rise Time Section and Figure 48; Renumbered Sequentially............................................................40                                                                                                                                                                       |                    |
| Changes to Using Self Test Section...............................................................................................................44                                                                                                                                                | Changes to Using Self Test Section...............................................................................................................44                                                                                                                                                | Changes to Using Self Test Section...............................................................................................................44                                                                                                                                                |                    |

Data Sheet

## TABLE OF CONTENTS

Updated Outline Dimensions......................................................................................................................... 47

## SPECIFICATIONS

TA = 25°C, V S = 2.0 V, V DD I/O = 2.0 V, 100 Hz ODR, HALF\_BW = 0, ±2 g range, acceleration = 0 g , default settings for other registers, unless otherwise noted. All minimum and maximum specifications are guaranteed. Typical specifications may not be guaranteed.

Table 1.

| Parameter                                    | Test Conditions/Comments       | Min   | Typ        | Max   | Unit     |
|----------------------------------------------|--------------------------------|-------|------------|-------|----------|
| SENSOR INPUT                                 | Each axis                      |       |            |       |          |
| Measurement Range                            | User selectable                |       | ±2, ±4, ±8 |       | g        |
| Nonlinearity                                 | Percentage of full scale       |       | ±0.5       |       | %        |
| Sensor Resonant Frequency                    |                                |       | 3000       |       | Hz       |
| Cross Axis Sensitivity 1                     |                                |       | ±1.5       |       | %        |
| OUTPUT RESOLUTION                            | Each axis                      |       |            |       |          |
| All g Ranges                                 |                                |       | 12         |       | Bits     |
| SENSITIVITY                                  | Each axis                      |       |            |       |          |
| Sensitivity Calibration Error                |                                |       |            | ±10   | %        |
| Sensitivity at X OUT , Y OUT , Z OUT         | 2 g range                      |       | 1          |       | m g /LSB |
|                                              | 4 g range                      |       | 2          |       | m g /LSB |
|                                              | 8 g range                      |       | 4.255      |       | m g /LSB |
| Scale Factor at X OUT , Y OUT , Z OUT        | 2 g range                      |       | 1000       |       | LSB/ g   |
|                                              | 4 g range                      |       | 500        |       | LSB/ g   |
|                                              | 8 g range                      |       |            |       | LSB/ g   |
| Temperature 2                                |                                |       | 235        |       | %/°C     |
| Sensitivity Change Due to                    | -40°C to +85°C                 |       | 0.05       |       |          |
| 0 g OFFSET                                   | Each axis                      |       |            |       |          |
| 0 g Output 3                                 | X OUT , Y OUT                  | -150  |            | +150  | m g      |
|                                              | Z OUT                          | -250  |            | +250  | m g      |
| 0 g Offset vs. Temperature 2                 |                                |       |            |       |          |
| Normal Operation                             | X OUT , Y OUT                  |       | ±0.5       |       | m g /°C  |
|                                              | Z OUT                          |       | ±0.6       |       | m g /°C  |
| Low Noise Mode and Ultra Low Noise Mode      | X OUT , Y OUT , Z OUT          |       | ±0.35      |       | m g /°C  |
| NOISE PERFORMANCE                            |                                |       |            |       |          |
| Noise Density                                |                                |       |            |       |          |
| Normal Operation                             | X OUT , Y OUT                  |       | 550        |       | µ g /√Hz |
|                                              | Z OUT                          |       | 920        |       | µ g /√Hz |
| Low Noise Mode                               | X OUT , Y OUT                  |       | 400        |       | µ g /√Hz |
|                                              | Z OUT                          |       | 550        |       | µ g /√Hz |
| Ultra Low Noise Mode                         | X OUT , Y OUT                  |       | 250        |       | µ g /√Hz |
|                                              | Z OUT                          |       | 350        |       | µ g /√Hz |
|                                              | V S = 3.5 V; X OUT , Y OUT     |       | 175        |       | µ g /√Hz |
|                                              | V S = 3.5 V; Z OUT             |       | 250        |       | µ g /√Hz |
| BANDWIDTH                                    |                                |       |            |       |          |
| Low Pass (Antialiasing) Filter, -3 dB Corner | HALF_BW = 0                    |       | ODR/2      |       | Hz       |
|                                              | HALF_BW = 1                    |       | ODR/4      |       | Hz       |
| Output Data Rate (ODR)                       | User selectable in 8 steps     | 12.5  |            | 400   | Hz       |
| SELF TEST                                    |                                |       |            |       |          |
| Output Change 4                              | X OUT                          | 230   | 550        | 870   | m g      |
|                                              | Y OUT                          | -870  | -550       | -230  | m g      |
|                                              | Z OUT                          | 270   | 535        | 800   | m g      |
| POWER SUPPLY                                 |                                |       |            |       |          |
| Operating Voltage Range (V S )               |                                | 1.6   | 2.0        | 3.5   | V        |
| I/O Voltage Range (V DD I/O )                |                                | 1.6   | 2.0        | V S   | V        |
| Supply Current                               |                                |       |            |       |          |
| Measurement Mode                             | 100 Hz ODR (50 Hz bandwidth) 5 |       |            |       |          |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                  | Test Conditions/Comments                                                   | Min   | Typ    | Max   | Unit   |
|--------------------------------------------|----------------------------------------------------------------------------|-------|--------|-------|--------|
| Normal Operation                           |                                                                            |       | 1.8    |       | µA     |
| Low Noise Mode                             |                                                                            |       | 3.3    |       | µA     |
| Ultra Low Noise Mode                       |                                                                            |       | 13     |       | µA     |
| Wake-Up Mode                               |                                                                            |       | 0.27   |       | µA     |
| Standby                                    |                                                                            |       | 0.01   |       | µA     |
| Power Supply Rejection Ratio (PSRR)        | C S = 1.0 µF, R S = 100 Ω, C IO = 1.1 µF, input is 100 mV sine wave on V S |       |        |       |        |
| Input Frequency 100 Hz to 1 kHz            |                                                                            |       | -13    |       | dB     |
| Input Frequency 1 kHz to 250 kHz           |                                                                            |       | -20    |       | dB     |
| Turn On Time                               | 100 Hz ODR (50 Hz bandwidth)                                               |       |        |       |        |
| Power Up to Standby                        |                                                                            |       | 5      |       | ms     |
| Measurement Mode Instruction to Valid Data |                                                                            |       | 4/ODR  |       |        |
| TEMPERATURE SENSOR                         |                                                                            |       |        |       |        |
| Bias Average                               | @25°C                                                                      |       | 350    |       | LSB    |
| Standard Deviation                         |                                                                            |       | 290    |       | LSB    |
| Sensitivity Average                        |                                                                            |       | 0.065  |       | °C/LSB |
| Standard Deviation                         |                                                                            |       | 0.0025 |       | °C/LSB |
| Sensitivity Repeatability                  |                                                                            |       | ±0.5   |       | °C     |
| Resolution                                 |                                                                            |       | 12     |       | Bits   |
| ENVIRONMENTAL                              |                                                                            |       |        |       |        |
| Operating Temperature Range                |                                                                            | -40   |        | +85   | °C     |

1 Cross axis sensitivity is defined as coupling between any two axes.

2 -40°C to +25°C or +25°C to +85°C.

3 Different processes may cause the typical offset to vary from lot to lot. For operation at different voltages, see offset performance across voltage in Figure 50.

4 Self test change is defined as the output change in g when self test is asserted. Different supplies cause different self test changes. These limits apply to the specific test conditions stated in Table 1. For variations over the full V s supply range, see Table 22.

5 Refer to Figure 30 for current consumption at other bandwidth settings.

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                         | Rating           |
|---------------------------------------------------|------------------|
| Acceleration (Any Axis, Unpowered)                | 5000 g           |
| Acceleration (Any Axis, Powered)                  | 5000 g           |
| V S                                               | -0.3 V to +3.6 V |
| V DD I/O                                          | -0.3 V to +3.6 V |
| All Other Pins                                    | -0.3 V to V S    |
| Output Short-Circuit Duration (Any Pin to Ground) | Indefinite       |
| ESD                                               | 2000 V (HBM)     |
| Short Term Maximum Temperature                    |                  |
| Four Hours                                        | 150°C            |
| One Minute                                        | 260°C            |
| Temperature Range (Powered)                       | -50°C to +150°C  |
| Temperature Range (Storage)                       | -50°C to +150°C  |

Stresses at or above those listed under absolute maximum ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

## Table 3. Package Characteristics

| Package Type    | θ JA    | θ JC   | Device Weight   |
|-----------------|---------|--------|-----------------|
| 16-Terminal LGA | 150°C/W | 85°C/W | 18 mg           |

## PACKAGE INFORMATION

Figure 2 and Table 4 provide details about the package branding for the ADXL362. For a complete listing of product availability, see the Ordering Guide section.

Figure 2. Product Information on Package (Top View)

<!-- image -->

Table 4. Package Branding Information

| Branding Key   | Field Description                     |
|----------------|---------------------------------------|
| •362B          | Pin 1 indicator and device identifier |
| #yww           | Pb-free designator (#) and date code  |
| vvvv           | Factory lot code                      |

## RECOMMENDED SOLDERING PROFILE

Figure 3 and Table 5 provide details about the recommended soldering profile.

Figure 3. Recommended Soldering Profile

<!-- image -->

Table 5. Recommended Soldering Profile

|                                                   | Condition         | Condition         |
|---------------------------------------------------|-------------------|-------------------|
| Profile Feature                                   | Sn63/Pb37         | Pb-Free           |
| Average Ramp Rate (T L to T P )                   | 3°C/sec max       | 3°C/sec max       |
| Preheat                                           |                   |                   |
| Minimum Temperature (T SMIN )                     | 100°C             | 150°C             |
| Maximum Temperature (T SMAX )                     | 150°C             | 200°C             |
| Time (T SMIN to T SMAX ) (t S )                   | 60 sec to 120 sec | 60 sec to 180 sec |
| T SMAX to T L Ramp-Up Rate                        | 3°C/sec max       | 3°C/sec max       |
| Time Maintained Above Liquidous (T L )            |                   |                   |
| Liquidous Temperature (T L )                      | 183°C             | 217°C             |
| Time (t L )                                       | 60 sec to 150 sec | 60 sec to 150 sec |
| Peak Temperature (T P )                           | 240 + 0/-5°C      | 260 + 0/-5°C      |
| Time Within 5°C of Actual Peak Temperature (t P ) | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                    | 6°C/sec max       | 6°C/sec max       |
| Time 25°C to Peak Temperature                     | 6 minutes max     | 8 minutes max     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 4. Pin Configuration (Top View)

<!-- image -->

## Table 6. Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                 |
|-----------|------------|-----------------------------------------------------------------------------|
|         1 | V DD I/O   | Supply Voltage for Digital I/O.                                             |
|         2 | NC         | No Connect. Not internally connected.                                       |
|         3 | Reserved   | Reserved. Can be left unconnected or connected to GND.                      |
|         4 | SCLK       | SPI Communications Clock.                                                   |
|         5 | Reserved   | Reserved. Can be left unconnected or connected to GND.                      |
|         6 | MOSI       | Master Output, Slave Input. SPI serial data input.                          |
|         7 | MISO       | Master Input, Slave Output. SPI serial data output.                         |
|         8 | CS         | SPI Chip Select, Active Low. Must be low during SPI communications.         |
|         9 | INT2       | Interrupt 2 Output. INT2 also serves as an input for synchronized sampling. |
|        10 | Reserved   | Reserved. Can be left unconnected, or connected to GND.                     |
|        11 | INT1       | Interrupt 1 Output. INT1 also serves as an input for external clocking.     |
|        12 | GND        | Ground. This pin must be grounded.                                          |
|        13 | GND        | Ground. This pin must be grounded.                                          |
|        14 | V S        | Supply Voltage.                                                             |
|        15 | NC         | No Connect. Not internally connected.                                       |
|        16 | GND        | Ground. This pin must be grounded.                                          |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 5. X-Axis Zero g Offset at 25°C, V S = 2 V

<!-- image -->

Figure 6. Y-Axis Zero g Offset at 25°C, V S = 2 V

<!-- image -->

Figure 7. Z-Axis Zero g Offset at 25°C, V S = 2 V

<!-- image -->

Figure 8. X-Axis Sensitivity at 25°C, V S = 2 V, ±2 g Range

Figure 9. Y-Axis Sensitivity at 25°C, V S = 2 V, ±2 g Range

<!-- image -->

Figure 10. Z-Axis Sensitivity at 25°C, V S = 2 V, ±2 g Range

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 11. X-Axis Zero g Offset Temperature Coefficient, V S = 2 V

<!-- image -->

Figure 12. Y-Axis Zero g Offset Temperature Coefficient, V S = 2 V

<!-- image -->

Figure 13. Z-Axis Zero g Offset Temperature Coefficient, V S = 2 V

<!-- image -->

Figure 14. X-Axis Zero g Offset vs. Temperature16 Parts Soldered to PCB, ODR = 100 Hz, V S = 2 V

Figure 15. Y-Axis Zero g Offset vs. Temperature16 Parts Soldered to PCB, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 16. Z-Axis Zero g Offset vs. Temperature16 Parts Soldered to PCB, ODR = 100 Hz, V S = 2 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 17. X-Axis Sensitivity Deviation from 25°C vs. Temperature16 Parts Soldered to PCB, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 18. Y-Axis Sensitivity Deviation from 25°C vs. Temperature16 Parts Soldered to PCB, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 19. Z-Axis Sensitivity Deviation from 25°C vs. Temperature16 Parts Soldered to PCB, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 20. X-Axis Self Test Response at 25°C, V S = 2 V

Figure 21. Y-Axis Self Test Response at 25°C, V S = 2 V

<!-- image -->

Figure 22. Z-Axis Self Test Response at 25°C, V S = 2 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 23. Current Consumption at 25°C, Normal Mode, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 24. Current Consumption at 25°C, Low Noise Mode, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 25. Current Consumption at 25°C, Ultralow Noise Mode, ODR = 100 Hz, V S = 2 V

<!-- image -->

Figure 26. Current Consumption at 25°C, Wake-Up Mode, V S = 2 V

Figure 27. Temperature Sensor Response at 25°C, V S = 2 V

<!-- image -->

Figure 28. Temperature Sensor Scale Factor, V S = 2 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 29. Clock Frequency Deviation from Ideal at 25°C, V S = 2 V

<!-- image -->

## THEORY OF OPERATION

The ADXL362 is a complete 3-axis acceleration measurement system that operates at extremely low power consumption levels. It measures both dynamic acceleration, resulting from motion or shock, and static acceleration, such as tilt. Acceleration is reported digitally and the device communicates via the SPI protocol. Built-in digital logic enables autonomous operation and implements functionality that enhances system level power savings.

## MECHANICAL DEVICE OPERATION

The moving component of the sensor is a polysilicon surface micromachined structure that is built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against acceleration forces.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the structure and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase sensitive demodulation determines the magnitude and polarity of the acceleration.

## OPERATING MODES

The ADXL362 has two operating modes: measurement mode for continuous, wide bandwidth sensing; and wake-up mode for limited bandwidth activity detection. In addition, measurement can be suspended altogether by placing the device in standby.

## Measurement Mode

Measurement mode is the normal operating mode of the ADXL362. In this mode, acceleration data is read continuously and the accelerometer consumes less than 3 µA (typical) across its entire range of output data rates of up to 400 Hz using a 2.0 V supply. All features described in this data sheet are available when operating the ADXL362 in this mode.

The ability to continuously output data from the minimum 12.5 Hz to the maximum 400 Hz data rate while still delivering less than 3 µA (typical) of current consumption is what defines the ADXL362 as an ultra low power accelerometer. Other accelerometers derive low current by using a specific low power mode that power cycles acceleration sensing. The result is a small effective bandwidth in the low power modes and undersampling of input data; therefore, unwanted aliasing can occur. Under-sampling and aliasing do not occur with the ADXL362 because it continuously samples the full bandwidth of its sensor at all data rates.

## Wake-Up Mode

Wake-up mode is ideal for simple detection of the presence or absence of motion at extremely low power consumption (270 nA at a 2.0 V supply voltage). Wake-up mode is useful particularly for implementation of a motion activated on/off switch, allowing the rest of the system to be powered down until activity is detected.

Wake-up mode reduces current consumption to a very low level by measuring acceleration only about six times per second to determine whether motion is present. If motion is detected, the accelerometer can respond autonomously in the following ways:

- Switch into full bandwidth measurement mode
- Signal an interrupt to a microcontroller
- Wake up downstream circuitry, depending on the configuration
- In wake-up mode, all accelerometer features are available with the exception of the activity timer. All registers can be accessed, and real-time data can be read and/or stored in the FIFO.

## Standby

Placing the ADXL362 in standby suspends measurement and reduces current consumption to 10 nA (typical). Pending interrupts and data are preserved and no new interrupts are generated.

The ADXL362 powers up in standby with all sensor functions turned off.

## SELECTABLE MEASUREMENT RANGES

The ADXL362 has selectable measurement ranges of ±2 g , ±4 g , and ±8 g . Acceleration samples are always converted by a 12-bit ADC; therefore, sensitivity scales with g range. Ranges and corresponding sensitivity values are listed in Table 1. Data can temporarily not represent maximum gees while over ranging but no damage is caused to the accelerometer when acceleration exceeds the corresponding range maximum. Table 2 lists the absolute maximum ratings for acceleration, indicating the acceleration level that can cause permanent damage to the device.

## SELECTABLE OUTPUT DATA RATES

The ADXL362 can report acceleration data at various data rates ranging from 12.5 Hz to 400 Hz. The internal low-pass filter pole is automatically set to ¼ or ½ the selected ODR (based on the HALF\_BW setting) to ensure that the Nyquist sampling criterion is met and no aliasing occurs.

Current consumption varies somewhat with output data rate as shown in Figure 30, remaining below 5.0 µA over the entire range of data rates and operating voltages.

## THEORY OF OPERATION

Figure 30. Current Consumption vs. Output Data Rate at Several Supply Voltages

<!-- image -->

## Antialiasing

The analog-to-digital converter (ADC) of the ADXL362 samples at the (user selected) output data rate. In the absence of antialiasing filtering, it aliases any input signals whose frequency is more than half the data rate. To mitigate this, a two-pole low-pass filter is provided at the input of the ADC.

The user can set this antialiasing filter to a bandwidth that is at ½ the data rate or ¼ the data rate. Setting the antialiasing filter pole to ½ of the output data rate provides less aggressive antialiasing filtering, but maximizes bandwidth and is adequate for most applications. Setting the pole to ¼ of the data rate reduces bandwidth for a given data rate, but provides more aggressive antialiasing.

The antialiasing filter of the ADXL362 defaults to the more conservative setting, where bandwidth is set to one-fourth the output data rate.

## POWER/NOISE TRADEOFF

The ADXL362 offers a few options for decreasing noise at the expense of only a small increase in current consumption.

The noise performance of the ADXL362 in normal operation, typically 7 LSB rms at 100 Hz bandwidth, is adequate for most applications, depending upon bandwidth and the desired resolution. For cases where lower noise is needed, the ADXL362 provides two lower noise operating modes that trade reduced noise for a somewhat higher current consumption.

Table 7 lists the current consumption and noise densities obtained for normal operation and the two lower noise modes at a typical 2.0 V supply.

Table 7. Noise and Current Consumption: Normal Operation, Low Noise Mode, and Ultra Low Noise Mode at V S = 2.0 V, ODR = 100 Hz

| Mode             |   Noise (µ g /√Hz) Typical |   Current Consumption (µA) Typical |
|------------------|----------------------------|------------------------------------|
| Normal Operation |                        550 |                                1.8 |

Table 7. Noise and Current Consumption: Normal Operation, Low Noise Mode, and Ultra Low Noise Mode at V S = 2.0 V, ODR = 100 Hz (Continued)

| Mode            |   Noise (µ g /√Hz) Typical |   Current Consumption (µA) Typical |
|-----------------|----------------------------|------------------------------------|
| Low Noise       |                        400 |                                3.3 |
| Ultra low Noise |                        250 |                               13   |

Operating the ADXL362 at a higher supply voltage also decreases noise. Table 8 lists the current consumption and noise densities obtained for normal operation and the two lower noise modes at the highest recommended supply, 3.3 V.

Table 8. Noise and Current Consumption: Normal Operation, Low Noise Mode, and Ultra Low Noise Mode at V S = 3.3 V, ODR = 100 Hz

| Mode             |   Noise (µ g /√Hz) Typical |   Current Consumption (µA) Typical |
|------------------|----------------------------|------------------------------------|
| Normal Operation |                        380 |                                2.7 |
| Low Noise        |                        280 |                                4.5 |
| Ultra low Noise  |                        175 |                               15   |

## POWER SAVINGS FEATURES

Designed for the most power conscious applications, the ADXL362 includes several features (as described in this section) for enabling power savings at the system level, as well as at the device level.

## ULTRA LOW POWER CONSUMPTION IN ALL MODES

At the device level, the most obvious power saving feature of the ADXL362 is its ultralow current consumption in all configurations. The ADXL362 consumes between 1.1 µA (typical) and 5 µA (typical) across all data rates up to 400 Hz and all supply voltages up to 3.5 V (see Figure 30). An even lower power, 270 nA (typical) motion triggered wake-up mode is provided for simple motion detection applications that require a power consumption lower than 1 µA.

At these current levels, the accelerometer consumes less power in full operation than the standby currents of many other system components, and is, therefore, optimal for applications that require continuous acceleration monitoring and very long battery life. Because the accelerometer is always on, it can act as a motion activation switch. The accelerometer signals to the rest of the system when to turn on, thereby managing power at the system level.

As important as its low operating current, the 10 nA (typical) standby current of the ADXL362 contributes to a much longer battery life in applications that spend most of their time in a sleep state and wake up via an external trigger.

## MOTION DETECTION

The ADXL362 features built-in logic that detects activity (presence of acceleration above a threshold) and inactivity (lack of acceleration above a threshold). Activity and inactivity events can be used as triggers to manage the accelerometer mode of operation, trigger an interrupt to a host processor, and/or autonomously drive a motion switch.

Detection of an activity or inactivity event is indicated in the status register and can be configured to generate an interrupt. In addition, the activity status of the device, that is, whether it is moving or stationary, is indicated by the AWAKE bit, described in the Using the AWAKE Bit section.

Activity and inactivity detection can be used when the accelerometer is in either measurement mode or wake-up mode.

## Activity Detection

An activity event is detected when acceleration remains above a specified threshold for a specified time period.

## Referenced and Absolute Configurations

Activity detection can be configured as referenced or absolute.

When using absolute activity detection, acceleration samples are compared to a user set threshold to determine whether motion is present. For example, if a threshold of 0.5 g is set and the acceleration on the z-axis is 1 g for longer than the user defined activity time, the activity status asserts.

In many applications, it is advantageous for activity detection to be based not on an absolute threshold, but on a deviation from a reference point or orientation. This is particularly useful because it removes the effect on activity detection of the static 1 g imposed by gravity. When an accelerometer is stationary, its output can reach 1 g , even when it is not moving. In absolute activity, when the threshold is set to less than 1 g , activity is immediately detected in this case.

In the referenced configuration, activity is detected when acceleration samples are at least a user set amount above an internally defined reference for the user defined amount of time, as described in Equation 1.

## ABS ( Acceleration -Reference ) &gt; Threshold

(1)

Consequently, activity is detected only when the acceleration has deviated sufficiently from the initial orientation. The reference for activity detection is calculated when activity detection is engaged in the following scenarios:

- When the activity function is turned on and measurement mode is engaged;
- If link mode is enabled: when inactivity is detected and activity detection begins; or
- If link mode is not enabled: when activity is detected and activity detection repeats.

The referenced configuration results in a very sensitive activity detection that detects even the most subtle motion events.

## Fewer False Positives

Ideally, the intent of activity detection is to wake up a system only when motion is intentional, ignoring noise or small, unintentional movements. In addition to being sensitive to subtle motion events, the ADXL362 activity detection algorithm is designed to be robust in filtering out undesired triggers.

The ADXL362 activity detection functionality includes a timer to filter out unwanted motion and ensure that only sustained motion is recognized as activity. The duration of this timer, as well as the acceleration threshold, are user adjustable from one sample (that is, no timer) to up to 20 seconds of motion.

Note that the activity timer is operational in measurement mode only. In wake-up mode, one sample activity detection is used.

## Inactivity Detection

An inactivity event is detected when acceleration remains below a specified threshold for a specified time. Inactivity detection is also configurable as referenced or absolute.

When using absolute inactivity detection, acceleration samples are compared to a user set threshold for the user set time to determine

## POWER SAVINGS FEATURES

the absence of motion. Inactivity is detected when enough consecutive samples are all below the threshold. The absolute configuration of inactivity must be used for implementing free fall detection.

When using referenced inactivity detection, inactivity is detected when acceleration samples are within a user specified amount of an internally defined reference (as described by Equation 2) for a user defined amount of time.

ABS ( Acceleration -Reference ) &lt; Threshold

<!-- formula-not-decoded -->

Referenced inactivity, like referenced activity, is particularly useful for eliminating the effects of the static acceleration due to gravity. With absolute inactivity, if the inactivity threshold is set lower than 1 g , a device resting motionless may never detect inactivity. With referenced inactivity, the same device under the same configuration detects inactivity.

The inactivity timer can be set to anywhere from 2.5 ms (a single sample at 400 Hz ODR) to almost 90 minutes (65,535 samples at 12.5 Hz ODR) of inactivity. A requirement for inactivity detection is that for whatever period of time the inactivity timer has been configured, the accelerometer detects inactivity only when it has been stationary for that amount of time.

For example, if the accelerometer has been configured for 90 minutes, the accelerometer detects inactivity when it has been stationary for 90 minutes. The wide range of timer settings means that in applications where power conservation is critical, the system can be put to sleep after very short periods of inactivity. In applications where continuous operation is critical, the system stays on for as long as any motion is present.

## Linking Activity and Inactivity Detection

The activity and inactivity detection functions can be used concurrently and processed manually by a host processor, or they can be configured to interact in several other ways, as follows.

## Default Mode

The user must enable the activity and inactivity functions because these functions are not automatically enabled by default. After the user enables the activity and inactivity functions, the ADXL362 exhibits the following behavior when it enters default mode: Both activity and inactivity detection remain enabled and all interrupts must be serviced by a host processor; that is, a processor must read each interrupt before it is cleared and can be used again.

Default mode operation is illustrated in the flowchart in Figure 31.

## Linked Mode

In linked mode, activity and inactivity detection are linked to each other such that only one of the functions is enabled at any given time. As soon as activity is detected, the device is assumed to be moving (or awake) and stops looking for activity; rather, inactivity is expected as the next event. Therefore, only inactivity detection operates.

Similarly, when inactivity is detected, the device is assumed to be stationary (or asleep). Thus, activity is expected as the next event; therefore, only activity detection operates.

Figure 31. Flowchart Illustrating Activity and Inactivity Operation in Default Mode

<!-- image -->

In linked mode, each interrupt must be serviced by a host processor before the next interrupt is enabled.

Linked mode operation is illustrated in the flowchart in Figure 32.

Figure 32. Flowchart Illustrating Activity and Inactivity Operation in Linked Mode

<!-- image -->

## Loop Mode

In loop mode, motion detection operates as described in the Linked Mode section, but interrupts do not need to be serviced by a host processor. This configuration simplifies the implementation of commonly used motion detection and enhances power savings by reducing the amount of power used in bus communication.

Loop mode operation is illustrated in the flowchart in Figure 33.

## POWER SAVINGS FEATURES

Figure 33. Flowchart Illustrating Activity and Inactivity Operation in Loop Mode

<!-- image -->

## Autosleep

When in linked or loop mode, enabling autosleep causes the device to enter wake-up mode autonomously (see the Wake-Up Mode section) when inactivity is detected, and to reenter measurement mode when activity is detected.

The autosleep configuration is active only if linked or loop modes are enabled. In the default mode, the autosleep setting is ignored.

## Using the AWAKE Bit

The AWAKE bit is a status bit that indicates whether the ADXL362 is awake or asleep. The device is awake when it has experienced an activity condition, and it is asleep when it has experienced an inactivity condition.

The awake signal can be mapped to the INT1 or INT2 pin, allowing the pin to serve as a status output to connect or disconnect power to downstream circuitry based on the awake status of the accelerometer. Used in conjunction with loop mode, this configuration implements a trivial, autonomous motion activated switch, as shown in Figure 43.

If the turn-on time of downstream circuitry can be tolerated, this motion switch configuration can save significant system level power by eliminating the standby current consumption of the remainder of the application. This standby current can often exceed the full operating current of the ADXL362.

## FIFO

The ADXL362 includes a deep 512-sample first in, first out (FIFO) buffer. The FIFO provides benefits primarily in two ways, as follows.

## System Level Power Savings

Appropriate use of the FIFO enables system level power savings by enabling the host processor to sleep for extended periods of time while the accelerometer autonomously collects data. Alternatively, using the FIFO to collect data can unburden the host while it tends to other tasks.

## Data Recording/Event Context

The FIFO can be used in a triggered mode to record all data leading up to an activity detection event, thereby providing context for the event. In the case of a system that identifies impact events, for example, the accelerometer can keep the entire system off while it stores acceleration data in its FIFO and looks for an activity event. When the impact event occurs, data that was collected prior to the event is frozen in the FIFO. The accelerometer can then wake the rest of the system and transfer this data to the host processor, thereby providing context for the impact event.

Generally, the more context available, the more intelligent decisions a system can achieve, making a deep FIFO especially useful. The ADXL362 FIFO can store up to more than 13 seconds of data, providing a clear picture of events prior to an activity trigger.

All FIFO modes of operation, as well as the structure of the FIFO and instructions for retrieving data from it, are described in further detail in the FIFO Modes section of this data sheet.

## COMMUNICATIONS

## SPI Instructions

The digital interface of the ADXL362 is implemented with system level power savings in mind. The following features enhance power savings:

- Burst reads and writes reduce the number of SPI communication cycles required to configure the device and retrieve data.
- Concurrent operation of activity and inactivity detection enables set it and forget it operation. Loop mode further reduces communications power by enabling the clearing of interrupts without processor intervention.
- The FIFO is implemented such that consecutive samples can be read continuously via a multibyte read of unlimited length; thus, one read FIFO instruction can clear the entire contents of the FIFO. In many other accelerometers, each read instruction retrieves a single sample only. In addition, the ADXL362 FIFO construction allows the use of direct memory access (DMA) to read the FIFO contents.

## Bus Keepers

The ADXL362 includes bus keepers on all pins that can be configured as digital inputs: MOSI, SCLK, CS, INT1, and INT2. Bus keepers prevent tristate bus lines from floating when nothing is driving them, thus preventing through current in any gate inputs that are on the bus.

## MSB Registers

Acceleration and temperature measurements are converted to 12bit values and transmitted via SPI using two registers per measurement. To read a full sample set of 3-axis acceleration data, six registers must be read.

## POWER SAVINGS FEATURES

Many applications do not require the accuracy that 12-bit data provides and prefers, instead, to save system level power. The MSB registers XDATA, YDATA, and ZDATA enable this tradeoff. These registers contain the eight MSBs of the x-, y-, and z-axis acceleration data; reading them effectively provides 8-bit acceleration values. Importantly, only three (consecutive) registers must be read to retrieve a full data set, significantly reducing the time during which the SPI bus is active and drawing current.

12-bit and 8-bit data are available simultaneously so that both data formats can be used in a single application, depending on the needs of the application at a given time. For example, the processor can read 12-bit data when higher resolution is required, and switch to 8-bit data (simply by reading a different set of registers) when application requirements change.

## ADDITIONAL FEATURES

## FREE FALL DETECTION

Many digital output accelerometers include a built-in free fall detection feature. In the ADXL362, this function can be implemented using the inactivity interrupt. Refer to the Applications Information section for more details, including suggested threshold and timing values.

## EXTERNAL CLOCK

The ADXL362 has a built-in 51.2 kHz (typical) clock that, by default, serves as the time base for internal operations.

ODR and bandwidth scale proportionally with the clock. The ADXL362 provides a discrete number of options for ODR, such as 100 Hz, 50 Hz, 25 Hz, and so forth, in factors of 2, (see the Filter Control Register section for a complete listing). To achieve data rates other than those provided, an external clock can be used at the appropriate clock frequency. The output data rate scales with the clock frequency, as shown in Equation 3.

For example, to achieve an 80 Hz ODR, select the 100 Hz ODR setting and provide a clock frequency that is 80% of nominal, or 41.0 kHz.

<!-- formula-not-decoded -->

The ADXL362 can operate with external clock frequencies ranging from the nominal 51.2 kHz down to 25.6 kHz to allow the user to achieve any desired output data rate.

Alternatively, an external clock can improve clock frequency accuracy. The distribution of clock frequencies among a sampling of &gt;1000 parts has a standard deviation of approximately 3%. To achieve tighter tolerances, a more accurate clock can be provided externally.

Bandwidth automatically scales to ½ or ¼ of the ODR (based on the HALF\_BW setting), and this ratio is preserved, regardless of clock frequency. Power consumption also scales with clock frequency: higher clock rates increase power consumption. Figure 34 shows how power consumption varies with clock rate.

Figure 34. Current Consumption vs. External Clock Rate

<!-- image -->

## SYNCHRONIZED DATA SAMPLING

For applications that require a precisely timed acceleration measurement, the ADXL362 features an option to synchronize acceleration sampling to an external trigger.

## SELF TEST

The ADXL362 incorporates a self test feature that effectively tests its mechanical and electronic systems simultaneously. When the self test function is invoked, an electrostatic force is applied to the mechanical sensor. This electrostatic force moves the mechanical sensing element in the same manner as acceleration, and it is additive to the acceleration experienced by the device. This added electrostatic force results in an output change on all three axes.

## USER REGISTER PROTECTION

The ADXL362 includes user register protection for single event upsets (SEUs). An SEU is a change of state caused by ions or electromagnetic radiation striking a sensitive node in a microelectronic device. The state change is a result of the free charge created by ionization in or close to an important node of a logic element (for example, a memory bit). The SEU, itself, is not considered permanently damaging to transistor or circuit functionality, but it can create erroneous register values. The ADXL362 registers that are protected from SEU are Register 0x20 to Register 0x2E.

SEU protection is implemented via a 99-bit error correcting (Hamming-type) code that detects both single- and double-bit errors. The check bits are recomputed any time a write to any of the protected registers occurs. At any time, if the stored version of the check bits is not in agreement with the current check bit calculation, the ERR\_USER\_REGS status bit is set.

The SEU bit in the status register is set on power-up prior to device configuration; it clears upon the first register write to that device.

## ADDITIONAL FEATURES

## TEMPERATURE SENSOR

The ADXL362 includes an integrated temperature sensor that can monitor internal system temperature or improve the temperature stability of the device via calibration. For example, acceleration outputs vary with temperature at a rate of ±0.5 m g /°C (typical), but the relationship to temperature is repeatable and can be calibrated.

To use the temperature sensor to monitor absolute temperature, it is recommended that its initial bias (its output at some known temperature) is measured and calibrated.

## SERIAL COMMUNICATIONS

The ADXL362 communicates via a 4-wire SPI and operates as a slave. Ignore data that is transmitted from the ADXL362 to the master device during writes to the ADXL362.

As shown in Figure 36 to Figure 40, the MISO pin is in a high impedance state, held by a bus keeper, except when the ADXL362 is sending read data (to conserve bus power).

Wire the ADXL362 for SPI communication as shown in the connection diagram in Figure 35. The recommended SPI clock speeds are 1 MHz to 8 MHz, with 12 pF maximum loading.

The SPI timing scheme follows CPHA = CPOL = 0.

For correct operation of the device, the logic thresholds and timing parameters in Table 9 and Table 10 must be met at all times. Refer to Figure 41 and Figure 42 for visual diagrams of the timing parameters.

Figure 35. 4-Wire SPI Connection Diagram

<!-- image -->

## SPI COMMANDS

The SPI port uses a multibyte structure wherein the first byte is a command. The ADXL362 command set is

- 0x0A: write register

- 0x0B: read register

- 0x0D: read FIFO

## Read and Write Register Commands

The command structure for the read register and write register commands is as follows (see Figure 36 and Figure 37):

## &lt;/CS down&gt; &lt;command byte (0x0A or 0x0B)&gt; &lt;address byte&gt; &lt;data byte&gt; &lt;additional data bytes for multi-byte&gt; … &lt;/CS up&gt;

The read and write register commands support multibyte (burst) read/write access. The waveform diagrams for multi-byte read and write commands are shown in Figure 38 and Figure 39.

## Read FIFO Command

Reading from the FIFO buffer is a command structure that does not have an address.

## &lt;/CS down&gt; &lt;command byte (0x0D)&gt; &lt;data byte&gt; &lt;data byte&gt; … &lt;/CS up&gt;

It is recommended that an even number of bytes be read (using a multibyte transaction) because each sample consists of two bytes:

2 bits of axis information and 14 bits of data. If an odd number of bytes is read, it is assumed that the desired data was read; therefore, the second half of the last sample is discarded so a read from the FIFO always starts on a properly aligned even-byte boundary. Data is presented least significant byte first, followed by the most significant byte.

## MULTIBYTE TRANSFERS

Multibyte transfers, also known as burst transfers, are supported for all SPI commands: register read, register write, and FIFO read commands. It is recommended that data be read using multibyte transfers to ensure that a concurrent and complete set of x-, y-, and z-acceleration (and temperature, where applicable) data is read.

The FIFO runs on the serial port clock during FIFO reads and can sustain bursting at the SPI clock rate as long as the SPI clock is 1 MHz or faster.

## Register Read/Write Auto-Increment

A register read or write command begins with the address specified in the command and auto-increments for each additional byte in the transfer. To avoid address wrapping and side effects of reading registers multiple times, the auto-increment halts at the invalid Register Address 63 (0x3F).

## INVALID ADDRESSES AND ADDRESS FOLDING

The ADXL362 has a 6-bit address bus, mapping only 64 registers in the possible 256 register address space. The addresses do not fold to repeat the registers at addresses above 64. Attempted access to register addresses above 64 are mapped to the invalid register at 63 (0x3F) and have no functional effect.

Address 0x00 to Address 0x2E are for customer access, as described in the register map. Address 0x2F to Address 0x3F are reserved for factory use.

## LATENCY RESTRICTIONS

Reading any of the data registers (0x08 to 0x0A or 0x0E to 0x15) clears the data ready interrupt. There can be as much as an 80 µs delay from reading a register to the clearing of the data ready interrupt.

Other register reads, register writes, and FIFO reads have no latency restrictions.

## INVALID COMMANDS

Commands other than 0x0A, 0x0B, and 0x0D have no effect. The MISO output remains in a high impedance state, and the bus keeper holds the MISO line at its last value.

## SERIAL COMMUNICATIONS

<!-- image -->

## SERIAL COMMUNICATIONS

Figure 41. Timing Diagram for SPI Receive Instructions

<!-- image -->

Figure 42. Timing Diagram for SPI Send Instructions (Shaded Portions of Figure 36, Figure 38, and Figure 40)

<!-- image -->

Table 9. SPI Digital Input/Output

|                                   |                          | Limit 1        | Limit 1        |      |
|-----------------------------------|--------------------------|----------------|----------------|------|
| Parameter                         | Test Conditions/Comments | Min            | Max            | Unit |
| Digital Input                     |                          |                |                |      |
| Low Level Input Voltage (V IL )   |                          |                | 0.3 × V DD I/O | V    |
| High Level Input Voltage (V IH )  |                          | 0.7 × V DD I/O |                | V    |
| Low Level Input Current (I IL )   | V IN = V DD I/O          |                | 0.1            | µA   |
| High Level Input Current (I IH )  | V IN = 0 V               | -0.1           |                | µA   |
| Digital Output                    |                          |                |                |      |
| Low Level Output Voltage (V OL )  | I OL = 10 mA             |                | 0.2 × V DD I/O | V    |
| High Level Output Voltage (V OH ) | I OH = -4 mA             | 0.8 × V DD I/O |                | V    |
| Low Level Output Current (I OL )  | V OL = V OL, max         | 10             |                | mA   |
| High Level Output Current (I OH ) | V OH = V OH, min         |                | -4             | mA   |

Table 10. SPI Timing (T A = 25°C, V S = 2.0 V, V DD I/O = 2.0 V)

| Parameter   | Limit 1, 2   | Limit 1, 2   |      |                   |
|-------------|--------------|--------------|------|-------------------|
| Parameter   | Min          | Max          | Unit | Description       |
| f CLK 3     | 2.4          | 8000         | kHz  | Clock Frequency   |
| C SS        | 100          |              | ns   | CS Setup Time     |
| t CSH       | 20           |              | ns   | CS Hold Time      |
| t CSD       | 20           |              | ns   | CS Disable Time   |
| t SU        | 20           |              | ns   | Data Setup Time   |
| t HD        | 20           |              | ns   | Data Hold Time    |
| t HIGH      | 50           |              | ns   | Clock High Time   |
| t LOW       | 50           |              | ns   | Clock Low Time    |
| t CLE       | 25           |              | ns   | Clock Enable Time |

## SERIAL COMMUNICATIONS

Table 10. SPI Timing (T A = 25°C, V S = 2.0 V, V DD I/O = 2.0 V) (Continued)

| Parameter   | Limit 1, 2   | Limit 1, 2   | Unit   | Description                 |
|-------------|--------------|--------------|--------|-----------------------------|
| Parameter   | Min          | Max          | Unit   | Description                 |
| t V         | 0            | 35           | ns     | Output Valid from Clock Low |
| t DIS       | 0            | 25           | ns     | Output Disable Time         |

## REGISTER MAP

Table 11. Register Summary

| Reg   | Name                      | Bits                                                                                                 | Bit 7                                                                                                | Bit 6                                                                                                | Bit 5                                                                                                | Bit 4                                                                                                | Bit 3                                                                                                | Bit 2                                                                                                | Bit 1                                                                                                | Bit 0                                                                                                | Reset     | RW    |
|-------|---------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-----------|-------|
| 0x00  | DEVID_AD [7:0]            | DEVID_AD[7:0]                                                                                        | DEVID_AD[7:0]                                                                                        | DEVID_AD[7:0]                                                                                        | DEVID_AD[7:0]                                                                                        | DEVID_AD[7:0]                                                                                        | DEVID_AD[7:0]                                                                                        | DEVID_AD[7:0]                                                                                        | DEVID_AD[7:0]                                                                                        | DEVID_AD[7:0]                                                                                        | 0xAD      | R     |
| 0x01  | DEVID_MST                 | [7:0] DEVID_MST[7:0]                                                                                 | [7:0] DEVID_MST[7:0]                                                                                 | [7:0] DEVID_MST[7:0]                                                                                 | [7:0] DEVID_MST[7:0]                                                                                 | [7:0] DEVID_MST[7:0]                                                                                 | [7:0] DEVID_MST[7:0]                                                                                 | [7:0] DEVID_MST[7:0]                                                                                 | [7:0] DEVID_MST[7:0]                                                                                 | [7:0] DEVID_MST[7:0]                                                                                 | 0x1D      | R     |
| 0x02  | PARTID                    | [7:0] PARTID[7:0]                                                                                    | [7:0] PARTID[7:0]                                                                                    | [7:0] PARTID[7:0]                                                                                    | [7:0] PARTID[7:0]                                                                                    | [7:0] PARTID[7:0]                                                                                    | [7:0] PARTID[7:0]                                                                                    | [7:0] PARTID[7:0]                                                                                    | [7:0] PARTID[7:0]                                                                                    | [7:0] PARTID[7:0]                                                                                    | 0xF2      | R     |
| 0x03  | REVID                     | [7:0] REVID[7:0]                                                                                     | [7:0] REVID[7:0]                                                                                     | [7:0] REVID[7:0]                                                                                     | [7:0] REVID[7:0]                                                                                     | [7:0] REVID[7:0]                                                                                     | [7:0] REVID[7:0]                                                                                     | [7:0] REVID[7:0]                                                                                     | [7:0] REVID[7:0]                                                                                     | [7:0] REVID[7:0]                                                                                     | 0x01      | R     |
| 0x08  | XDATA [7:0]               | XDATA[7:0]                                                                                           | XDATA[7:0]                                                                                           | XDATA[7:0]                                                                                           | XDATA[7:0]                                                                                           | XDATA[7:0]                                                                                           | XDATA[7:0]                                                                                           | XDATA[7:0]                                                                                           | XDATA[7:0]                                                                                           | XDATA[7:0]                                                                                           | 0x00      | R     |
| 0x09  | YDATA                     | [7:0] YDATA[7:0]                                                                                     | [7:0] YDATA[7:0]                                                                                     | [7:0] YDATA[7:0]                                                                                     | [7:0] YDATA[7:0]                                                                                     | [7:0] YDATA[7:0]                                                                                     | [7:0] YDATA[7:0]                                                                                     | [7:0] YDATA[7:0]                                                                                     | [7:0] YDATA[7:0]                                                                                     | [7:0] YDATA[7:0]                                                                                     | 0x00      | R     |
| 0x0A  | ZDATA                     | [7:0] ZDATA[7:0]                                                                                     | [7:0] ZDATA[7:0]                                                                                     | [7:0] ZDATA[7:0]                                                                                     | [7:0] ZDATA[7:0]                                                                                     | [7:0] ZDATA[7:0]                                                                                     | [7:0] ZDATA[7:0]                                                                                     | [7:0] ZDATA[7:0]                                                                                     | [7:0] ZDATA[7:0]                                                                                     | [7:0] ZDATA[7:0]                                                                                     | 0x00      | R     |
| 0x0B  | STATUS                    | [7:0]                                                                                                | ERR_USE R_ REGS                                                                                      | AWAKE                                                                                                | INACT                                                                                                | ACT                                                                                                  | FIFO_OVER -RUN                                                                                       | FIFO_WATE R-MARK                                                                                     | FIFO_READ Y                                                                                          | DATA_READ Y                                                                                          | 0x40      | R     |
| 0x0C  | FIFO_ENTRIES_ L           | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | [7:0] FIFO_ENTRIES_L[7:0]                                                                            | 0x00      | R     |
| 0x0D  | FIFO_ENTRIES_ H           | [7:0] UNUSED                                                                                         | [7:0] UNUSED                                                                                         | [7:0] UNUSED                                                                                         | [7:0] UNUSED                                                                                         | [7:0] UNUSED                                                                                         | [7:0] UNUSED                                                                                         | [7:0] UNUSED                                                                                         | FIFO_ENTRIES_H[1:0]                                                                                  | FIFO_ENTRIES_H[1:0]                                                                                  | 0x00      | R     |
| 0x0E  | XDATA_L                   | [7:0] XDATA_L[7:0]                                                                                   | [7:0] XDATA_L[7:0]                                                                                   | [7:0] XDATA_L[7:0]                                                                                   | [7:0] XDATA_L[7:0]                                                                                   | [7:0] XDATA_L[7:0]                                                                                   | [7:0] XDATA_L[7:0]                                                                                   | [7:0] XDATA_L[7:0]                                                                                   | [7:0] XDATA_L[7:0]                                                                                   | [7:0] XDATA_L[7:0]                                                                                   | 0x00      | R     |
| 0x0F  | XDATA_H                   | [7:0] SX                                                                                             | [7:0] SX                                                                                             | [7:0] SX                                                                                             | [7:0] SX                                                                                             | [7:0] SX                                                                                             | [7:0] SX                                                                                             | [7:0] SX                                                                                             | [7:0] SX                                                                                             | [7:0] SX                                                                                             | 0x00      | R     |
| 0x10  | YDATA_L [7:0]             | XDATA_H[3:0] YDATA_L[7:0]                                                                            | XDATA_H[3:0] YDATA_L[7:0]                                                                            | XDATA_H[3:0] YDATA_L[7:0]                                                                            | XDATA_H[3:0] YDATA_L[7:0]                                                                            | XDATA_H[3:0] YDATA_L[7:0]                                                                            | XDATA_H[3:0] YDATA_L[7:0]                                                                            | XDATA_H[3:0] YDATA_L[7:0]                                                                            | XDATA_H[3:0] YDATA_L[7:0]                                                                            | XDATA_H[3:0] YDATA_L[7:0]                                                                            | 0x00      | R     |
| 0x11  | YDATA_H [7:0]             |                                                                                                      |                                                                                                      |                                                                                                      | SX                                                                                                   |                                                                                                      |                                                                                                      |                                                                                                      |                                                                                                      |                                                                                                      | 0x00      | R     |
| 0x12  | ZDATA_L                   | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | YDATA_H[3:0] [7:0] ZDATA_L[7:0]                                                                      | 0x00      | R     |
| 0x13  | ZDATA_H                   | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | SX                                                                                                   | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | ZDATA_H[3:0]                                                                                         | [7:0]                                                                                                | 0x00      | R     |
| 0x14  | TEMP_L                    | [7:0] TEMP_L[7:0]                                                                                    | [7:0] TEMP_L[7:0]                                                                                    | [7:0] TEMP_L[7:0]                                                                                    | [7:0] TEMP_L[7:0]                                                                                    | [7:0] TEMP_L[7:0]                                                                                    | [7:0] TEMP_L[7:0]                                                                                    | [7:0] TEMP_L[7:0]                                                                                    | [7:0] TEMP_L[7:0]                                                                                    | [7:0] TEMP_L[7:0]                                                                                    | 0x00      | R     |
| 0x15  | TEMP_H [7:0]              | SX TEMP_H[3:0]                                                                                       | SX TEMP_H[3:0]                                                                                       | SX TEMP_H[3:0]                                                                                       | SX TEMP_H[3:0]                                                                                       | SX TEMP_H[3:0]                                                                                       | SX TEMP_H[3:0]                                                                                       | SX TEMP_H[3:0]                                                                                       | SX TEMP_H[3:0]                                                                                       | SX TEMP_H[3:0]                                                                                       | 0x00      | R     |
| 0x16  | Reserved                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | 0x00      | R     |
| 0x17  | Reserved                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | [7:0] Reserved[7:0]                                                                                  | 0x00      | R     |
| 0x1F  | SOFT_RESET [7:0]          | SOFT_RESET[7:0]                                                                                      | SOFT_RESET[7:0]                                                                                      | SOFT_RESET[7:0]                                                                                      | SOFT_RESET[7:0]                                                                                      | SOFT_RESET[7:0]                                                                                      | SOFT_RESET[7:0]                                                                                      | SOFT_RESET[7:0]                                                                                      | SOFT_RESET[7:0]                                                                                      | SOFT_RESET[7:0]                                                                                      | 0x00      | W     |
| 0x20  | THRESH_ACT_L              | [7:0] THRESH_ACT_L[7:0]                                                                              | [7:0] THRESH_ACT_L[7:0]                                                                              | [7:0] THRESH_ACT_L[7:0]                                                                              | [7:0] THRESH_ACT_L[7:0]                                                                              | [7:0] THRESH_ACT_L[7:0]                                                                              | [7:0] THRESH_ACT_L[7:0]                                                                              | [7:0] THRESH_ACT_L[7:0]                                                                              | [7:0] THRESH_ACT_L[7:0]                                                                              | [7:0] THRESH_ACT_L[7:0]                                                                              | 0x00      | RW    |
| 0x21  | THRESH_ACT_H              | [7:0] THRESH_ACT_H[2:0]                                                                              | [7:0] THRESH_ACT_H[2:0]                                                                              | [7:0] THRESH_ACT_H[2:0]                                                                              | UNUSED                                                                                               | [7:0] THRESH_ACT_H[2:0]                                                                              | [7:0] THRESH_ACT_H[2:0]                                                                              | [7:0] THRESH_ACT_H[2:0]                                                                              | [7:0] THRESH_ACT_H[2:0]                                                                              | [7:0] THRESH_ACT_H[2:0]                                                                              | 0x00      | RW    |
| 0x22  | TIME_ACT                  | TIME_ACT[7:0]                                                                                        | TIME_ACT[7:0]                                                                                        | TIME_ACT[7:0]                                                                                        | TIME_ACT[7:0]                                                                                        | TIME_ACT[7:0]                                                                                        | TIME_ACT[7:0]                                                                                        | TIME_ACT[7:0]                                                                                        | TIME_ACT[7:0]                                                                                        | TIME_ACT[7:0]                                                                                        | 0x00      | RW    |
| 0x23  | [7:0] THRESH_INACT_ [7:0] | THRESH_INACT_L[7:0]                                                                                  | THRESH_INACT_L[7:0]                                                                                  | THRESH_INACT_L[7:0]                                                                                  | THRESH_INACT_L[7:0]                                                                                  | THRESH_INACT_L[7:0]                                                                                  | THRESH_INACT_L[7:0]                                                                                  | THRESH_INACT_L[7:0]                                                                                  | THRESH_INACT_L[7:0]                                                                                  | THRESH_INACT_L[7:0]                                                                                  | 0x00      | RW    |
| 0x24  | THRESH_INACT_ H           | [7:0] THRESH_INACT_H[2:0]                                                                            | [7:0] THRESH_INACT_H[2:0]                                                                            | [7:0] THRESH_INACT_H[2:0]                                                                            | UNUSED                                                                                               | [7:0] THRESH_INACT_H[2:0]                                                                            | [7:0] THRESH_INACT_H[2:0]                                                                            | [7:0] THRESH_INACT_H[2:0]                                                                            | [7:0] THRESH_INACT_H[2:0]                                                                            | [7:0] THRESH_INACT_H[2:0]                                                                            | 0x00      | RW    |
| 0x25  | TIME_INACT_L              | [7:0] TIME_INACT_L[7:0]                                                                              | [7:0] TIME_INACT_L[7:0]                                                                              | [7:0] TIME_INACT_L[7:0]                                                                              | [7:0] TIME_INACT_L[7:0]                                                                              | [7:0] TIME_INACT_L[7:0]                                                                              | [7:0] TIME_INACT_L[7:0]                                                                              | [7:0] TIME_INACT_L[7:0]                                                                              | [7:0] TIME_INACT_L[7:0]                                                                              | [7:0] TIME_INACT_L[7:0]                                                                              | 0x00      | RW    |
| 0x26  | TIME_INACT_H              | [7:0] TIME_INACT_H[7:0]                                                                              | [7:0] TIME_INACT_H[7:0]                                                                              | [7:0] TIME_INACT_H[7:0]                                                                              | [7:0] TIME_INACT_H[7:0]                                                                              | [7:0] TIME_INACT_H[7:0]                                                                              | [7:0] TIME_INACT_H[7:0]                                                                              | [7:0] TIME_INACT_H[7:0]                                                                              | [7:0] TIME_INACT_H[7:0]                                                                              | [7:0] TIME_INACT_H[7:0]                                                                              |           | RW    |
|       |                           | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | 0x00 0x00 |       |
| 0x27  | ACT_INACT_CTL             | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | RES LINKLOOP INACT_REF INACT_EN ACT_REF ACT_EN [7:0] UNUSED AH FIFO_TEMP FIFO_MODE FIFO_SAMPLES[7:0] | 0x00      | RW RW |
| 0x2A  | INTMAP1                   |                                                                                                      |                                                                                                      |                                                                                                      |                                                                                                      | ACT                                                                                                  |                                                                                                      | FIFO_WATE                                                                                            |                                                                                                      |                                                                                                      |           |       |
| 0x28  | FIFO_CONTROL              | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | [7:0]                                                                                                | 0x80      | RW    |
| 0x29  | FIFO_SAMPLES              | [7:0]                                                                                                | INT_LOW                                                                                              | AWAKE                                                                                                | INACT                                                                                                |                                                                                                      | FIFO_OVER -RUN                                                                                       | R-MARK                                                                                               | FIFO_READ Y                                                                                          | DATA_READ Y                                                                                          | 0x00      | RW    |
| 0x2B  | INTMAP2                   | [7:0] INT_LOW                                                                                        | AWAKE                                                                                                | AWAKE                                                                                                | INACT                                                                                                | ACT                                                                                                  | FIFO_OVER -RUN                                                                                       | FIFO_WATE R-MARK                                                                                     | FIFO_READ Y                                                                                          | DATA_READ Y                                                                                          | 0x00      | RW    |
| 0x2C  | FILTER_CTL                | [7:0] RANGE                                                                                          | [7:0] RANGE                                                                                          | [7:0] RANGE                                                                                          | RES                                                                                                  | HALF_BW                                                                                              | EXT_SAMPL E                                                                                          |                                                                                                      | ODR                                                                                                  | ODR                                                                                                  | 0x13      | RW    |
| 0x2D  | POWER_CTL                 | [7:0]                                                                                                | RES                                                                                                  | EXT_CLK                                                                                              | LOW_NOISE WAKEUP                                                                                     | LOW_NOISE WAKEUP                                                                                     | LOW_NOISE WAKEUP                                                                                     | AUTOSLEEP                                                                                            | MEASURE                                                                                              | MEASURE                                                                                              | 0x00      | RW    |
| 0x2E  | SELF_TEST                 | [7:0]                                                                                                | UNUSED                                                                                               | UNUSED                                                                                               | UNUSED                                                                                               | UNUSED                                                                                               | UNUSED                                                                                               | ST                                                                                                   | ST                                                                                                   | ST                                                                                                   | 0x00      | RW    |

## REGISTER DETAILS

This section describes the functions of the ADXL362 registers. The ADXL362 powers up with default register values in the as shown in the Reset column of Table 11 in the Register Map section.

Note that any changes to the registers before the POWER\_CTL register (Register 0x00 to Register 0x2C) must be made with the device in standby. If changes are made while the ADXL362 is in measurement mode, they can be effective for only part of a measurement.

## DEVICE ID REGISTER

Address: 0x00, Reset: 0xAD, Name: DEVID\_AD

This register contains the Analog Devices device ID, 0xAD.

<!-- image -->

## DEVICE ID: 0X1D REGISTER

Address: 0x01, Reset: 0x1D, Name: DEVID\_MST

This register contains the Analog Devices MEMS device ID, 0x1D.

<!-- image -->

## PART ID: 0XF2 REGISTER

Address: 0x02, Reset: 0xF2, Name: PARTID

This register contains the device ID, 0xF2 (362 octal).

<!-- image -->

## SILICON REVISION ID REGISTER

Address: 0x03, Reset: 0x01, Name: REVID

This register contains the product revision ID, beginning with 0x01 and incrementing for each subsequent revision.

<!-- image -->

## X-AXIS DATA (8 MSB) REGISTER

Address: 0x08, Reset: 0x00, Name: XDATA

This register holds the eight most significant bits of the x-axis acceleration data. This limited resolution data register is used in power conscious applications where eight bits of data are sufficient: energy can be conserved by reading only one byte of data per axis, rather than two.

<!-- image -->

## Y-AXIS DATA (8 MSB) REGISTER

Address: 0x09, Reset: 0x00, Name: YDATA

This register holds the eight most significant bits of the y-axis acceleration data. This limited resolution data register is used in power conscious applications where eight bits of data are sufficient: energy can be conserved by reading only one byte of data per axis, rather than two.

<!-- image -->

## Z-AXIS DATA (8 MSB) REGISTER

Address: 0x0A, Reset: 0x00, Name: ZDATA

This register holds the eight most significant bits of the z-axis acceleration data. This limited resolution data register is used in power conscious applications where eight bits of data are sufficient: energy can be conserved by reading only one byte of data per axis, rather than two.

<!-- image -->

## REGISTER DETAILS

## STATUS REGISTER

## Address: 0x0B, Reset: 0x40, Name: STATUS

This register includes the following bits that describe various conditions of the ADXL362

<!-- image -->

Table 12. Bit Descriptions for STATUS

|   Bits | Bit Name       | Settings   | Description                                                                                                                                                                                                                                                                                                                                          | Reset   | Access   |
|--------|----------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|      7 | ERR_USER_REGS  |            | SEU Error Detect. 1 indicates one of two conditions: either an SEU event, such as an alpha particle of a power glitch, has disturbed a user register setting or the ADXL362 is not configured. This bit is high upon both startup and soft reset, and resets as soon as any register write commands are performed.                                   | 0x0     | R        |
|      6 | AWAKE          |            | Indicates whether the accelerometer is in an active (AWAKE = 1) or inactive (AWAKE = 0) state, based on the activity and inactivity functionality. To enable autosleep, activity and inactivity detection must be in linked mode or loop mode (LINK/LOOP bits in the ACT_INACT_CTL register); otherwise, this bit defaults to 1 and must be ignored. | 0x1     | R        |
|      5 | INACT          |            | Inactivity. 1 indicates that the inactivity detection function has detected an inactivity or a free fall condition.                                                                                                                                                                                                                                  | 0x0     | R        |
|      4 | ACT            |            | Activity. 1 indicates that the activity detection function has detected an overthreshold condition.                                                                                                                                                                                                                                                  | 0x0     | R        |
|      3 | FIFO_OVERRUN   |            | FIFO Overrun. 1 indicates that the FIFO has overrun or overflowed, such that new data replaces unread data. See the Using FIFO Interrupts section for details.                                                                                                                                                                                       | 0x0     | R        |
|      2 | FIFO_WATERMARK |            | FIFO Watermark. 1 indicates that the FIFO contains at least the desired number of samples, as set in the FIFO_SAMPLES register. See the Using FIFO Interrupts section for details.                                                                                                                                                                   | 0x0     | R        |
|      1 | FIFO_READY     |            | FIFO Ready. 1 indicates that there is at least one sample available in the FIFO output buffer. See the Using FIFO Interrupts section for details.                                                                                                                                                                                                    | 0x0     | R        |
|      0 | DATA_READY     |            | Data Ready. 1 indicates that a new valid sample is available to be read. This bit clears when a FIFO read is performed. See the Data Ready Interrupt section for more details.                                                                                                                                                                       | 0x0     | R        |

## REGISTER DETAILS

## FIFO ENTRIES REGISTERS

These registers indicate the number of valid data samples present in the FIFO buffer. This number ranges from 0 to 512 or 0x00 to 0x200. FIFO\_ENTRIES\_L contains the least significant byte. FIFO\_ENTRIES\_H contains the two most significant bits. Bits[15:10] of FIFO\_ENTRIES\_H are unused (represented as X = don't care).

Address: 0x0C, Reset: 0x00, Name: FIFO\_ENTRIES\_L

<!-- image -->

Address: 0x0D, Reset: 0x00, Name: FIFO\_ENTRIES\_H

<!-- image -->

## X-AXIS DATA REGISTERS

These two registers contain the sign extended (SX) x-axis acceleration data. XDATA\_L contains the eight least significant bits (LSBs), and XDATA\_H contains the four most significant bits (MSBs) of the 12-bit value.

The sign extension bits (B[15:12], denoted as SX in the XDATA\_H bit map that follows) have the same value as the MSB (B11).

Address: 0x0E, Reset: 0x00, Name: XDATA\_L

<!-- image -->

Address: 0x0F, Reset: 0x00, Name: XDATA\_H

<!-- image -->

## Y-AXIS DATA REGISTERS

These two registers contain the sign extended (SX) y-axis acceleration data. YDATA\_L contains the eight LSBs and YDATA\_H contains the four MSBs of the 12-bit value.

The sign extension bits (B[15:12], denoted as SX in the YDATA\_H bit map that follows) have the same value as the MSB (B11).

Address: 0x10, Reset: 0x00, Name: YDATA\_L

<!-- image -->

Address: 0x11, Reset: 0x00, Name: YDATA\_H

<!-- image -->

## Z-AXIS DATA REGISTERS

These two registers contain the sign extended (SX) z-axis acceleration data. ZDATA\_L contains the eight LSBs, and ZDATA\_H contains the four MSBs of the 12-bit value.

The sign extension bits (B[15:12], denoted as SX in the ZDATA\_H bit map that follows) have the same value as the MSB (B11).

Address: 0x12, Reset: 0x00, Name: ZDATA\_L

<!-- image -->

Address: 0x13, Reset: 0x00, Name: ZDATA\_H

<!-- image -->

## TEMPERATURE DATA REGISTERS

These two registers contain the sign extended (SX) temperature sensor output data. TEMP\_L contains the eight LSBs, and TEMP\_H contains the four MSBs of the 12-bit value. The value is sign extended; therefore, Bits[B15:B12] of TEMP\_H are all 0s or all 1s, based on the value of Bit B11.

The sign extension bits (B[15:12], denoted as SX in the TEMP\_H bit map that follows) have the same value as the MSB (B11).

Address: 0x14, Reset: 0x00, Name: TEMP\_L

<!-- image -->

Address: 0x15, Reset: 0x00, Name: TEMP\_H

<!-- image -->

## SOFT RESET REGISTER

Address: 0x1F, Reset: 0x00, Name: SOFT\_RESET

Writing Code 0x52 (representing the letter, R, in ASCII or unicode) to this register immediately resets the ADXL362. All register settings are cleared, and the sensor is placed in standby. Interrupt pins are configured to a high output impedance mode and held to a valid state by bus keepers.

This is a write-only register. If read, data in it is always 0x00.

A latency of approximately 0.5 ms is required after soft reset.

## REGISTER DETAILS

<!-- image -->

## ACTIVITY THRESHOLD REGISTERS

To detect activity, the ADXL362 compares the absolute value of the 12-bit (signed) acceleration data with the 11-bit (unsigned) THRESH\_ACT value. See the Motion Detection section for more information on activity detection.

The term, THRESH\_ACT, refers to an 11-bit unsigned value comprising the THRESH\_ACT\_L register, which holds its eight LSBs; and the THRESH\_ACT\_H register, which holds its three MSBs.

THRESH\_ACT is set in codes; the value in g depends on the measurement range setting that is selected.

THRESH\_ACT [ g ] = THRESH\_ACT [codes]/ Sensitivity [codes per g ]

Address: 0x20, Reset: 0x00, Name: THRESH\_ACT\_L

<!-- image -->

Address: 0x21, Reset: 0x00, Name: THRESH\_ACT\_H

<!-- image -->

| B15   | B14   | B13   | B12   | B11   | B10   |   B9 |   B8 |
|-------|-------|-------|-------|-------|-------|------|------|
|       |       |       |       | X     |       |    0 |    0 |

## ACTIVITY TIME REGISTER

## Address: 0x22, Reset: 0x00, Name: TIME\_ACT

The activity timer implements a robust activity detection that minimizes false positive motion triggers. When the timer is used, only sustained motion can trigger activity detection. Refer to the Fewer False Positives section for additional information.

The value in this register sets the number of consecutive samples that must have at least one axis greater than the activity threshold (set by THRESH\_ACT) for an activity event to be detected.

The time (in seconds) is given by the following equation:

Time = TIME\_ACT / ODR

where:

dress 0x2C).

TIME\_ACT is the value set in this register. ODR is the output data rate set in the FILTER\_CTL register (Ad-

Setting the activity time to 0x00 has the same result as setting this time to 0x01: Activity is detected when a single acceleration sample has at least one axis greater than the activity threshold (THRESH\_ACT).

When the accelerometer is in wake-up mode, the TIME\_ACT value is ignored and activity is detected based on a single acceleration sample.

<!-- image -->

## INACTIVITY THRESHOLD REGISTERS

To detect inactivity, the absolute value of the 12-bit acceleration data is compared with the 11-bit (unsigned) THRESH\_INACT value. See the Motion Detection section for more information.

The term, THRESH\_INACT, refers to an 11-bit unsigned value comprised of the THRESH\_INACT\_L registers, which holds its eight LSBs and the THRESH\_INACT\_H register, which holds its three MSBs.

This 11-bit unsigned value sets the threshold for inactivity detection. This value is set in codes; the value (in g ) depends on the measurement range setting selected:

THRESH\_INACT [ g ] = THRESH\_INACT [codes]/ Sensitivity [codes per g ]

Address: 0x23, Reset: 0x00, Name: THRESH\_INACT\_L

<!-- image -->

Address: 0x24, Reset: 0x00, Name: THRESH\_INACT\_H

<!-- image -->

| B15   | B14   | B13   | B12   | B11   | B10   |   B9 |   B8 |
|-------|-------|-------|-------|-------|-------|------|------|
| X     | X     | X     | X     |       |       |    0 |    0 |

## INACTIVITY TIME REGISTERS

The 16-bit value in these registers sets the number of consecutive samples that must have all axes lower than the inactivity threshold (set by THRESH\_INACT) for an inactivity event to be detected.

The TIME\_INACT\_L register holds the eight LSBs and the TIME\_INACT\_H register holds the eight MSBs of the 16-bit TIME\_INACT value.

The time in seconds can be calculated as

Time = TIME\_INACT / ODR

## where:

TIME\_INACT is the 16-bit value set by the TIME\_INACT\_L register (eight LSBs) and the TIME\_INACT\_H register (eight MSBs). ODR is the output data rate set in the FILTER\_CTL register (Address 0x2C).

The 16-bit value allows for long inactivity detection times. The maximum value is 0xFFFF or 65,535 samples. At the lowest output data rate, 12.5 Hz, this equates to almost 90 minutes. In this

## REGISTER DETAILS

configuration, the accelerometer must be stationary for 90 minutes before putting its system to sleep.

Setting the inactivity time to 0x00 has the same result as setting this time to 0x01: Inactivity is detected when a single acceleration sample has all axes lower than the inactivity threshold (THRESH\_IN-ACT).

Address: 0x25, Reset: 0x00, Name: TIME\_INACT\_L

<!-- image -->

Address: 0x26, Reset: 0x00, Name: TIME\_INACT\_H

<!-- image -->

## REGISTER DETAILS

## ACTIVITY/INACTIVITY CONTROL REGISTER

Address: 0x27, Reset: 0x00, Name: ACT\_INACT\_CTL

<!-- image -->

Table 13. Bit Descriptions for ACT\_INACT\_CTL

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Reset   | Access   |
|--------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | UNUSED     |            | Unused Bits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | RW       |
| [5:4]  | LINK/LOOP  | X0 01 11   | Default Mode. Activity and inactivity detection are both enabled, and their interrupts (if mapped) must be acknowledged by the host processor by reading the STATUS register. Autosleep is disabled in this mode. Use this mode for free fall detection applications. Linked Mode. Activity and inactivity detection are linked sequentially such that only one is enabled at a time. Their interrupts (if mapped) must be acknowledged by the host processor by reading the STATUS register. Loop Mode. Activity and inactivity detection are linked sequentially such that only one is enabled at a time, and their interrupts are internally acknowledged (do not need to be serviced by the host processor). To use either linked or looped mode, both ACT_EN (Bit 0) and INACT_EN (Bit 2) must be set to 1; otherwise, the default mode is used. For additional information, refer to the Linking Activity and Inactivity Detection section. | 0x0     | RW       |
| 3      | INACT_REF  |            | Referenced/Absolute Inactivity Select. 1 = inactivity detection function operates in referenced mode. 0= inactivity detection function operates in absolute mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 0x0     | RW       |
| 2      | INACT_EN   |            | Inactivity Enable. 1 = enables the inactivity (underthreshold) functionality.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 0x0     | RW       |
| 1      | ACT_REF    |            | Referenced/Absolute Activity Select. 1 = activity detection function operates in referenced mode. 0 = activity detection function operates in absolute mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | RW       |
| 0      | ACT_EN     |            | Activity Enable. 1 = enables the activity (overthreshold) functionality.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 0x0     | RW       |

## REGISTER DETAILS

## FIFO CONTROL REGISTER

Address: 0x28, Reset: 0x00, Name: FIFO\_CONTROL

<!-- image -->

Table 14. Bit Descriptions for FIFO\_CONTROL

| Bits   | Bit Name   | Settings   | Description                                                                                                                    | Reset   | Access   |
|--------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | UNUSED     |            | Unused Bits.                                                                                                                   | 0x0     | RW       |
| 3      | AH         |            | Above Half. This bit is the MSB of the FIFO_SAMPLES register, allowing FIFO samples a range of 0 to 511.                       | 0x0     | RW       |
| 2      | FIFO_TEMP  |            | Store Temperature Data to FIFO. 1 = temperature data is stored in the FIFO together with x-, y-, and z-axis acceleration data. | 0x0     | RW       |
| [1:0]  | FIFO_MODE  |            | Enable FIFO and Mode Selection.                                                                                                | 0x0     | RW       |
|        |            | 00         | FIFO is disabled.                                                                                                              |         |          |
|        |            | 01         | Oldest saved mode.                                                                                                             |         |          |
|        |            | 10         | Stream mode.                                                                                                                   |         |          |
|        |            | 11         | Triggered mode.                                                                                                                |         |          |

## REGISTER DETAILS

## FIFO SAMPLES REGISTER

## Address: 0x29, Reset: 0x80, Name: FIFO\_SAMPLES

The value in this register specifies the number of samples to store in the FIFO. The AH bit in the FIFO\_CONTROL register (Address 0x28) is used as the MSB of this value. The full range of FIFO samples is 0 to 511.

The default value of this register is 0x80 to avoid triggering the FIFO watermark interrupt (see the FIFO Watermark section for more information).

<!-- image -->

The following bit map is duplicated from the FIFO Control Register section to indicate the AH bit.

<!-- image -->

AH

## Address: 0x2A, Reset: 0x00, Name: INTMAP1

[7] INT\_LOW (RW) Interrupt Active Low

[6] AWAKE  (RW) Awake Interrupt

[5] INACT (RW) Inactivity Interrupt

[4] ACT (RW) Activity Interrupt

Table 15. Bit Descriptions for INTMAP1

|   Bits | Bit Name       | Settings   | Description                                     | Reset   | Access   |
|--------|----------------|------------|-------------------------------------------------|---------|----------|
|      7 | INT_LOW        |            | 1 = INT1 pin is active low.                     | 0x0     | RW       |
|      6 | AWAKE          |            | 1 = maps the awake status to INT1 pin.          | 0x0     | RW       |
|      5 | INACT          |            | 1 = maps the inactivity status to INT1 pin.     | 0x0     | RW       |
|      4 | ACT            |            | 1 = maps the activity status to INT1 pin.       | 0x0     | RW       |
|      3 | FIFO_OVERRUN   |            | 1 = maps the FIFO overrun status to INT1 pin.   | 0x0     | RW       |
|      2 | FIFO_WATERMARK |            | 1 = maps the FIFO watermark status to INT1 pin. | 0x0     | RW       |
|      1 | FIFO_READY     |            | 1 = maps the FIFO ready status to INT1 pin.     | 0x0     | RW       |
|      0 | DATA_READY     |            | 1 = maps the data ready status to INT1 pin.     | 0x0     | RW       |

<!-- image -->

## INT1/INT2 FUNCTION MAP REGISTERS

The INT1 and INT2 registers configure the INT1/INT2 interrupt pins, respectively. Bits[B6:B0] select which function(s) generate an interrupt on the pin. If its corresponding bit is set to 1, the function generates an interrupt on the INT pin. Bit B7 configures whether the pin operates in active high (B7 low) or active low (B7 high) mode.

Any number of functions can be selected simultaneously for each pin. If multiple functions are selected, their conditions are OR'ed together to determine the INT pin state. The status of each individual function can be determined by reading the STATUS register. If no interrupts are mapped to an INT pin, the pin remains in a high impedance state, held to a valid logic state by a bus keeper.

## REGISTER DETAILS

## Address: 0x2B, Reset: 0x00, Name: INTMAP2

[7] INT\_LOW (RW) Interrupt Active Low

[6]AWAKE (RW) Awake Interrupt

[5] INACT (RW) Inactivity Interrupt

[4] ACT (RW) Activity Interrupt

Table 16. Bit Descriptions for INTMAP2

|   Bits | Bit Name       | Settings   | Description                                     | Reset   | Access   |
|--------|----------------|------------|-------------------------------------------------|---------|----------|
|      7 | INT_LOW        |            | 1 = INT2 pin is active low.                     | 0x0     | RW       |
|      6 | AWAKE          |            | 1 = maps the awake status to INT2 pin.          | 0x0     | RW       |
|      5 | INACT          |            | 1 = maps the inactivity status to INT2 pin.     | 0x0     | RW       |
|      4 | ACT            |            | 1 = maps the activity status to INT2 pin.       | 0x0     | RW       |
|      3 | FIFO_OVERRUN   |            | 1 = maps the FIFO overrun status to INT2 pin.   | 0x0     | RW       |
|      2 | FIFO_WATERMARK |            | 1 = maps the FIFO watermark status to INT2 pin. | 0x0     | RW       |
|      1 | FIFO_READY     |            | 1 = maps the FIFO ready status to INT2 pin.     | 0x0     | RW       |
|      0 | DATA_READY     |            | 1 = maps the data ready status to INT2 pin.     | 0x0     | RW       |

<!-- image -->

## REGISTER DETAILS

## FILTER CONTROL REGISTER

Address: 0x2C, Reset: 0x13, Name: FILTER\_CTL

<!-- image -->

Table 17. Bit Descriptions for FILTER\_CTL

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                                                                                                                                         | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:6]  | RANGE      |            | Measurement Range Selection.                                                                                                                                                                                                                                                        | 0x0     | RW       |
|        |            | 00         | ±2 g (reset default)                                                                                                                                                                                                                                                                |         |          |
|        |            | 01         | ±4 g                                                                                                                                                                                                                                                                                |         |          |
|        |            | 1X         | ±8 g                                                                                                                                                                                                                                                                                |         |          |
| 5      | RES        |            | Reserved.                                                                                                                                                                                                                                                                           | 0x0     | RW       |
| 4      | HALF_BW    |            | Halved Bandwidth. Additional information is provided in the Antialiasing section. 1 = the bandwidth of the antialiasing filters is set to ¼ the output data rate (ODR) for more conservative filtering. 0 = the bandwidth of the filters is set to ½ the ODR for a wider bandwidth. | 0x1     |          |
| 3      | EXT_SAMPLE |            | External Sampling Trigger. 1 = the INT2 pin is used for external conversion timing control. Refer to the Using Synchronized Data Sampling section for more information.                                                                                                             | 0x0     | RW       |
| [2:0]  | ODR        |            | Output Data Rate. Selects ODR and configures internal filters to a bandwidth of ½ or ¼ the selected ODR, depending on the HALF_BW bit setting.                                                                                                                                      | 0x3     | RW       |
|        |            | 000        | 12.5 Hz                                                                                                                                                                                                                                                                             |         |          |
|        |            | 001        | 25 Hz                                                                                                                                                                                                                                                                               |         |          |
|        |            | 010        | 50 Hz                                                                                                                                                                                                                                                                               |         |          |
|        |            | 011        | 100 Hz (reset default)                                                                                                                                                                                                                                                              |         |          |
|        |            | 100        | 200 Hz                                                                                                                                                                                                                                                                              |         |          |
|        |            | 101…111    | 400 Hz                                                                                                                                                                                                                                                                              |         |          |

## REGISTER DETAILS

## POWER CONTROL REGISTER

Address: 0x2D, Reset: 0x00, Name: POWER\_CTL

<!-- image -->

Table 18. Bit Descriptions for POWER\_CTL

| Bits   | Bit Name   | Settings   | Description                                                                                                                                                 | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | Reserved   |            | Reserved.                                                                                                                                                   | 0x0     | RW       |
| 6      | EXT_CLK    |            | External Clock. See the Using an External Clock section for additional details. 1 = the accelerometer runs off the external clock provided on the INT1 pin. | 0x0     | RW       |
| [5:4]  | LOW_NOISE  |            | Selects Power vs. Noise Tradeoff:                                                                                                                           | 0x0     | RW       |
|        |            | 00         | Normal operation (reset default).                                                                                                                           |         |          |
|        |            | 01         | Low noise mode.                                                                                                                                             |         |          |
|        |            | 10         | Ultralow noise mode.                                                                                                                                        |         |          |
|        |            | 11         | Reserved.                                                                                                                                                   |         |          |
| 3      | WAKEUP     |            | Wake-Up Mode. See the Operating Modes section for a detailed description of wake-up mode.                                                                   | 0x0     | RW       |
|        |            |            | 1 = the part operates in wake-up mode.                                                                                                                      |         |          |
| 2      | AUTOSLEEP  |            | Autosleep. Activity and inactivity detection must be in linked mode or loop mode (LINK/ ignored.                                                            | 0x0     | RW       |
|        |            |            | LOOP bits in ACT_INACT_CTL register) to enable autosleep; otherwise, the bit is See the Motion Detection section for details.                               |         |          |
|        |            |            | 1 = autosleep is enabled, and the device enters wake-up mode automatically upon detection of inactivity.                                                    |         |          |
| [1:0]  | MEASURE    |            | Selects Measurement Mode or Standby.                                                                                                                        | 0x0     | RW       |
|        |            | 00         | Standby.                                                                                                                                                    |         |          |
|        |            | 01         | Reserved.                                                                                                                                                   |         |          |
|        |            | 10         | Measurement mode.                                                                                                                                           |         |          |
|        |            | 11         | Reserved.                                                                                                                                                   |         |          |

## REGISTER DETAILS

## SELF TEST REGISTER

Address: 0x2E, Reset: 0x00, Name: SELF\_TEST

Refer to the Self Test section for information on the operation of the self test feature, and see the Using Self Test section for guidelines on how to use this functionality.

<!-- image -->

Table 19. Bit Descriptions for SELF\_TEST

| Bits   | Bit Name   | Settings   | Description                                                 | Reset   | Access   |
|--------|------------|------------|-------------------------------------------------------------|---------|----------|
| [7:1]  | UNUSED     |            |                                                             | 0x0     | RW       |
| 0      | ST         |            | Self Test.                                                  | 0x0     | RW       |
|        |            |            | 1 = a self test force is applied to the x-, y-, and z-axes. |         |          |

## APPLICATIONS INFORMATION

## APPLICATION EXAMPLES

This section includes a few application circuits, highlighting useful features of the ADXL362.

## Device Configuration

This section outlines the procedure for configuring the device and acquiring data. In general, the procedure follows the sequence of the register map, starting with Register 0x20, THRESH\_ACT\_L.

1. Set activity and inactivity thresholds and timers.
- a. Write to Register 0x20 to Register 0x26.
- b. To minimize false positive motion triggers, set the TIME\_ACT register greater than 1.
2. Configure activity and inactivity functions.
- a. Write to Register 0x27.
3. Configure FIFO.
- a. Write to Register 0x28 and Register 0x29.
4. Map interrupts.
- a. Write to Register 0x2A and Register 0x2B.
5. Configure general device settings.
- a. Write to Register 0x2C.
6. Turn measurement on.
- a. Write to Register 0x2D.

Settings for each of the registers vary based on application requirements. For more information, see the Register Details section.

## Autonomous Motion Switch

The features of the ADXL362 make it ideal for use as an autonomous motion switch. The example outlined here implements a switch that, once configured, operates without the intervention of a host processor to intelligently manage system power. In this example, the awake signal, mapped to the INT2 pin, drives a high-side power switch, such as the ADP195, to control power to the downstream circuitry.

Figure 43. Awake Signal to Control Power to Downstream Circuitry

<!-- image -->

## Start-up Routine

This routine assumes a ±2 g measurement range and operation in wake-up mode.

1. Write 250 decimal (0xFA) to Register 0x20, and write 0 to Register 0x21: sets activity threshold to 250 m g .
2. Write 150 decimal (0x96) to Register 0x23, and write 0 to Register 0x24: sets inactivity threshold to 150 m g .
3. Write 30 decimal (0x1E) to Register 0x25: sets inactivity timer to 30 samples or about 5 seconds.
4. Write 0x3F to Register 0x27: configures motion detection in loop mode and enables referenced activity and inactivity detection.
5. Write 0x40 to Register 0x2B: map the AWAKE bit to INT2. The INT2 pin is tied to the gate of the switch.
6. Write 0x0A to Register 0x2D: begins the measurement in wakeup mode.

## Using External Timing Triggers

Figure 44 shows an application diagram for using the INT1 pin as the input for an external clock. In this mode, the external clock determines all accelerometer timing, including the output data rate and bandwidth.

To enable this feature, at the end of the desired start-up routine, set Bit 6 in the POWER\_CTL register; for example, write 0x42 to this register to enable the use of an external clock and place the accelerometer into measurement mode.

## APPLICATIONS INFORMATION

Figure 44. INT1 Pin as the Input for the External Clock

<!-- image -->

Figure 45 is an application diagram for using the INT2 pin as a trigger for synchronized sampling. Acceleration samples are produced every time this trigger is activated. To enable this feature, near the end of the desired start-up routine, set Bit 3 in the FILTER\_CTL register; for example, write 0x4B to this register to enable the trigger and configure the accelerometer for ±8 g measurement range and 100 Hz ODR.

Figure 45. Using the INT2 Pin to Trigger Synchronized Sampling

<!-- image -->

## Example: Implementing Free Fall Detection

Many digital output accelerometers include a built-in free fall detection feature. In the ADXL362, implement this function using the inactivity interrupt.

When an object is in true free fall, acceleration on all axes is 0 g . Thus, free fall detection is achieved by looking for acceleration on all axes to fall below a certain threshold (close to 0 g ) for a certain amount of time. The inactivity detection functionality, when used in absolute mode, does exactly this.

To use inactivity to implement free fall detection, set the value in THRESH\_INACT to the desired free fall threshold. Values between 300 m g and 600 m g are recommended; the register setting for these values varies based on the g range setting of the device, as follows:

```
THRESH_INACT = Threshold Value [ g ] × Scale Factor [LSB per g ]
```

Set the value in TIME\_INACT to implement the minimum amount of time that the acceleration on all axes must be less than the free fall threshold to generate a free fall condition. Values between 100 ms and 350 ms are recommended; the register setting for this varies based on the output data rate.

## TIME\_INACT = Time [sec] × Data Rate [Hz]

When a free fall condition is detected, the inactivity status is set to 1 and, if the function is mapped to an interrupt pin, an inactivity interrupt triggers on that pin.

## Start-Up Routine

The following start-up routine configures the ADXL362 for a typical free fall application. This routine assumes a ±8 g measurement range and 100 Hz output data rate. Thresholds and timing values can be modified to suit particular application needs.

1. Write 0x96 (150 codes) to Register 0x23: sets free fall threshold to 600 m g .
2. Write 0x03 to Register 0x25: sets free fall time to 30 ms.
3. Write 0x04 to Register 0x27: enables absolute inactivity detection.
4. Write 0x20 to Register 0x2A or Register 0x2B to map the inactivity interrupt to INT1 or INT2, respectively.
5. Write 0x83 to Register 0x2C: configures the accelerometer to ±8 g range, 100 Hz ODR (output data rate).
6. Write 0x02 to Register 0x2D to begin measurement.

## POWER

## Power Supply Decoupling

Figure 46 shows the recommended bypass capacitors for use with the ADXL362.

Figure 46. Recommended Bypass Capacitors

<!-- image -->

A 0.1 µF ceramic capacitor (C S ) at V S and a 0.1 µF ceramic capacitor (C IO ) at V DD I/O placed as close as possible to the ADXL362. Supply pins are recommended to adequately decouple the accelerometer from noise on the power supply. It is also recommended that V S and V DD I/O be separate supplies to minimize digital clocking noise on the V S supply. If this is not possible, additional filtering of the supplies may be necessary.

If additional decoupling is necessary, place a resistor or ferrite bead, no larger than 100 Ω, in series with V S . Additionally, increasing the bypass capacitance on V S to a 1 µF tantalum capacitor in parallel with a 0.1 µF ceramic capacitor can also improve noise.

Ensure that the connection from the ADXL362 ground to the power supply ground has low impedance because noise transmitted

## APPLICATIONS INFORMATION

through ground has an effect similar to noise transmitted through VS .

## Power Supply Requirements

Always start up the ADXL362 from 0 V. When the device is in operation, any time power is removed from the ADXL362, or falls below the operating voltage range, discharge the supplies (V S , V DD I/O , and any bypass capacitors) completely before power is reapplied. To enable supply discharge, it is recommended to power the device from a microcontroller GPIO, connect a shutdown discharge switch to the supply (see Figure 47), or use a voltage regulator with a shutdown discharge feature, such as the ADP160.

Figure 47. Using a Switch to Discharge the ADXL362 Supplies

<!-- image -->

When power cycling, if the ADXL362 cannot be discharged fully to 0 V, care must be taken regarding the following specifications:

- VRESET
- Hold time
- Rise time

## VRESET

During start-up or power cycling of the ADXL362, any time power is removed from the ADXL362 or falls to less than 1.6 V, the V S and VDD I/O supply must be discharged to a voltage V RESET ≤ 100 mV before powering back up. The V RESET specification is a mandatory requirement.

## Hold Time

VS  and V DD I/O supplies must be held below V RESET for at least 200 ms before powering back up.

## Rise Time

For the worst case scenario (V RESET = 100 mV and hold time = 200 ms), the V S and V DD I/O supply rise time must be linear and within 250 μs to reach 1.6 V (see Figure 48).

Figure 48. Power Cycling Requirements

<!-- image -->

Notice that fully discharging the power supply to the ground level allows a longer rise time, ≤600 µs, from 0 V to 1.6 V for a 200 ms hold time.

## FIFO MODES

The FIFO is a 512-sample memory buffer that can save power, unburden the host processor, and autonomously record data.

The 512 FIFO samples can be allotted as either:

- 170 sample sets of concurrent 3-axis data; or
- 128 sample sets of concurrent 3-axis and temperature data

The FIFO operates in one of the four modes described in this section.

## FIFO Disabled

When the FIFO is disabled, no data is stored in it and any data already stored in it is cleared.

The FIFO is disabled by setting the FIFO\_MODE bits in the FIFO\_CONTROL register (Address 0x28) to Binary Value 0b00.

## Oldest Saved Mode

In oldest saved mode, the FIFO accumulates data until it is full and then stops. Additional data is collected only when space is made available by reading samples out of the FIFO buffer. (This mode of operation is sometimes referred to as 'First N.')

The FIFO is placed into oldest saved mode by setting the FIFO\_MODE bits in the FIFO\_CONTROL register (Address 0x28) to Binary Value 0b01.

## Stream Mode

In stream mode, the FIFO always contains the most recent data. The oldest sample is discarded when space is needed to make room for a newer sample. (This mode of operation is sometimes referred to as 'Last N.')

## APPLICATIONS INFORMATION

Stream mode is useful for unburdening a host processor. The processor can tend to other tasks while data is being collected in the FIFO. When the FIFO fills to a certain number of samples (specified by the FIFO\_SAMPLES register along with the AH bit in the FIFO\_CONTROL register), it triggers a FIFO watermark interrupt (if this interrupt is enabled). At this point, the host processor can read the contents of the entire FIFO and then return to its other tasks as the FIFO fills again.

The FIFO is placed into stream mode by setting the FIFO\_MODE bits in the FIFO\_CONTROL register (Address 0x28) to Binary Value 0b10.

## Triggered Mode

In triggered mode, the FIFO saves samples surrounding an activity detection event. The operation is similar to a one-time run trigger on an oscilloscope. The number of samples to be saved prior to the activity event is specified in FIFO\_SAMPLES (Register 0x29, along with the AH bit in the FIFO\_CONTROL register, Address 0x28).

Place the FIFO into triggered mode by setting the FIFO\_MODE bits in the FIFO\_CONTROL register (Address 0x28) to Binary Value 0b11.

Table 20. FIFO Buffer Data Format

| B15        | B14        | B13            | B12            | B11   | B10   | B9   | B8   | B7   | B6   | B5   | B4   | B3   | B2   | B1   | B0   |
|------------|------------|----------------|----------------|-------|-------|------|------|------|------|------|------|------|------|------|------|
| Data Type: | Data Type: | Sign Extension | Sign Extension | MSB   |       |      |      |      |      | Data |      |      |      |      | LSB  |

## FIFO Configuration

The FIFO is configured via Register 0x28 and Register 0x29. Settings are described in detail in the FIFO Control Register section.

## FIFO Interrupts

The FIFO can generate interrupts to indicate when samples are available, when a specified number of samples has been collected, and when the FIFO overflows and samples are lost. See the Using FIFO Interrupts section for more information.

## Retrieving Data from FIFO

FIFO data is read by issuing a FIFO read command, described in the SPI Commands section. Data is formatted as a 16-bit value as represented in Table 20.

When reading data, the least significant byte (Bits[B7:B0]) is read first, followed by the most significant byte (Bits[B15:B8]). Bits[B11:B0] represent the 12-bit, twos complement acceleration or temperature data. Bits[B13:B12] are sign extension bits, and Bits[B15:B14] indicate the type of data, as listed in Table 20.

## APPLICATIONS INFORMATION

Because the data format is 16-bit, the data must be read from the FIFO two bytes at a time. When a multibyte read is performed, the number of bytes read must always be an even number. Multibyte reads of FIFO data can be performed with no limit on the number of bytes read. If additional bytes are read after the FIFO is empty, the data in the additional bytes are read as 0x00.

As each sample set is acquired, it is written into the FIFO in the following order:

- X-axis
- Y-axis
- Z-axis
- Temperature (optional)

This pattern repeats until the FIFO is full, at which point the behavior depends on the FIFO mode (see the FIFO Modes section). If the FIFO has insufficient space for four data entries (or three entries if temperature is not being stored), then an incomplete sample set can be stored.

FIFO data is output on a per datum basis. As each data item is read, the same amount of space is freed up in the stack. Again, this can lead to incomplete sample sets being present in the FIFO.

For additional system level FIFO applications, refer to the AN-1025 Application Note, Utilization of the First In, First Out (FIFO) Buffer in Analog Devices, Inc. Digital Accelerometers .

## INTERRUPTS

Several of the built-in functions of the ADXL362 can trigger interrupts to alert the host processor of certain status conditions. This section describes the functionality of these interrupts.

## Interrupt Pins

Interrupts can be mapped to either (or both) of two designated output pins, INT1 and INT2, by setting the appropriate bits in the

Table 21. Interrupt Pin Digital Output

|                                   |                  | Limit 1        | Limit 1        |      |
|-----------------------------------|------------------|----------------|----------------|------|
| Parameter                         | Test Conditions  | Min            | Max            | Unit |
| Digital Output                    |                  |                |                |      |
| Low Level Output Voltage (V OL )  | I OL = 500 µA    |                | 0.2 × V DD I/O | V    |
| High Level Output Voltage (V OH ) | I OH = -300 µA   | 0.8 × V DD I/O |                | V    |
| Low Level Output Current (I OL )  | V OL = V OL, max | 500            |                | µA   |
| High Level Output Current (I OH ) | V OH = V OH, min |                | -300           | µA   |

INTMAP1 and INTMAP2 registers, respectively. All functions can be used simultaneously. If multiple interrupts are mapped to one pin, the OR combination of the interrupts determines the status of the pin.

If no functions are mapped to an interrupt pin, that pin is automatically configured to a high impedance (high-Z) state. The pins are also placed in the high-Z state upon a reset.

When a certain status condition is detected, the pin that condition is mapped to is activated. The configuration of the pin is active high by default so that when it is activated, the pin goes high. However, this configuration can be switched to active low by setting the INT\_LOW bit in the appropriate INTMAPx register.

The INT pins can be connected to the interrupt input of a host processor where interrupts are responded to with an interrupt routine. Because multiple functions can be mapped to the same pin, the STATUS register can determine which condition caused the interrupt to trigger.

Clear interrupts in one of several ways, as follows:

- Reading the STATUS register (Address 0x0B) clears activity and inactivity interrupts.
- Reading from the data registers. Address 0x08 to Address 0x0A or Address 0x0E to Address 0x15 clears the data ready interrupt.
- Reading enough data from the FIFO buffer so that interrupt conditions are no longer met clears the FIFO ready, FIFO watermark, and FIFO overrun interrupts.

Both interrupt pins are push-pull low impedance pins with an output impedance of about 500 Ω (typical) and digital output specifications, as shown in Table 21. Both pins have bus keepers that hold them to a valid logic state when they are in a high impedance mode.

To prevent interrupts from being falsely triggered during configuration, disable interrupts while their settings, such as thresholds, timings, or other values, are configured.

## APPLICATIONS INFORMATION

## Alternate Functions of Interrupt Pins

The INT1 and INT2 pins can be configured for use as input pins instead of for signaling interrupts. INT1 is used as an external clock input when the EXT\_CLK bit (Bit 6) in the POWER\_CTL register (Address 0x2D) is set. INT2 is used as the trigger input for synchronized sampling when the EXT\_SAMPLE bit (Bit 3) in the FILTER\_CTL register (Address 0x2C) is set. One or both of these alternate functions can be used concurrently; however, if an interrupt pin is used for its alternate function, it cannot simultaneously be used for its primary function, to signal interrupts.

External clocking and data synchronization are described in the Applications Information section.

## Activity and Inactivity Interrupts

The ACT bit (Bit 4) and INACT bit (Bit 5) in the STATUS register are set when activity and inactivity are detected, respectively. Detection procedures and criteria are described in the Motion Detection section.

## Data Ready Interrupt

The DATA\_READY bit (Bit 0) is set when new valid data is available, and it is cleared when no new data is available.

The DATA\_READY bit is not set while any of the data registers, Address 0x08 to Address 0x0A and Address 0x0E to Address 0x15, are being read. If DATA\_READY = 0 prior to a register read and new data becomes available during the register read, DA-TA\_READY remains at 0 until the read is complete and, only then, is set to 1.

If DATA\_READY = 1 prior to a register read, it is cleared at the start of the register read.

If DATA\_READY = 1 prior to a register read and new data becomes available during the register read, DATA\_READY is cleared to 0 at the start of the register read and remains at 0 throughout the read. When the read is complete, DATA\_READY is set to 1.

## Using FIFO Interrupts

## FIFO Watermark

The FIFO\_WATERMARK bit (Bit 2) is set when the number of samples stored in the FIFO is equal to or exceeds the number specified in the FIFO\_SAMPLES register (Address 0x29) together with the AH bit in the FIFO\_CONTROL register (Bit 3, Address 0x28). The FIFO\_WATERMARK bit is cleared automatically when enough samples are read from the FIFO, such that the number of samples remaining is lower than that specified.

If the number of FIFO samples is set to 0, the FIFO watermark interrupt is set. To avoid unexpectedly triggering this interrupt, the default value of the FIFO\_SAMPLES register is 0x80.

## FIFO Read

The FIFO\_READY bit (Bit 1) is set when there is at least one valid sample available in the FIFO output buffer. This bit is cleared when no valid data is available in the FIFO.

## Overrun

The FIFO\_OVERRUN bit (Bit 3) is set when the FIFO has overrun or overflowed, such that new data replaces unread data. This can indicate a full FIFO that has not yet been emptied or a clocking error caused by a slow SPI transaction. If the FIFO is configured to oldest saved mode, an overrun event indicates that there is insufficient space available for a new sample.

The FIFO\_OVERRUN bit is cleared automatically when the contents of the FIFO are read. Likewise, when the FIFO is disabled, the FIFO\_OVERRUN bit is cleared.

## USING SYNCHRONIZED DATA SAMPLING

For applications that require a precisely timed acceleration measurement, the ADXL362 features an option to synchronize acceleration sampling to an external trigger. The EXT\_SAMPLE bit (Bit 3) in the FILTER\_CTL Register (Address 0x2C) enables this feature. When the EXT\_SAMPLE bit is set to 1, the INT2 pin is automatically reconfigured for use as the sync trigger input.

When external triggering is enabled, it is up to the system designer to ensure that the sampling frequency meets system requirements. Sampling too infrequently causes aliasing. Noise can be lowered by oversampling; however, sampling at too high a frequency may not allow enough time for the accelerometer to process the acceleration data and convert it to valid digital output.

When Nyquist criteria are met, signal integrity is maintained. An internal antialiasing filter is available in the ADXL362 and can assist the system designer in maintaining signal integrity. To prevent aliasing, set the filter bandwidth to a frequency no greater than ½ the sampling rate. For example, when sampling at 100 Hz, set the filter pole to no higher than 50 Hz. The filter pole is set via the ODR bits in the FILTER\_CTL register (Address 0x2C). The filter bandwidth is set to ½ the ODR and is set via these bits. Even though the ODR is ignored (as the data rate is set by the external trigger), the filter is still applied at the specified bandwidth.

Because of internal timing requirements, the trigger signal applied to pin INT2 must meet the following criteria:

- The trigger signal is active high.
- The pulse width of the trigger signal must be at least 25 µs.
- The trigger must be deasserted for at least 25 µs before it is reasserted.
- The maximum sampling frequency that is supported is 625 Hz (typical).
- The minimum sampling frequency is set only by system requirements. Samples need not be polled at any minimum rate; howev-

## APPLICATIONS INFORMATION

er, if samples are polled at a rate lower than the bandwidth set by the antialiasing filter, then aliasing can occur.

## USING AN EXTERNAL CLOCK

The ADXL362 has a built-in clock that, by default, is used for clocked internal operations. If desired, an external clock can be provided and used.

To use an external clock, the EXT\_CLK bit (Bit 6) in the POW-ER\_CTL register (Address 0x2D) must be set. Setting this bit reconfigures the INT1 pin to an input pin on which the clock can be provided. The external clock must operate at or below 51.2 kHz. Further information is provided in the External Clock section.

## USING SELF TEST

The self test function, described in the Self Test section, is enabled via the ST bit in the SELF\_TEST register, Address 0x2E. The required procedure for using the self test functionality is as follows:

1. Configure the accelerometer to ±8 g range, 100 Hz ODR, and clear the HALF\_BW bit (Bit 4 of the FILTER\_CTL register). Use any noise mode (normal mode, low noise mode, or ultralow noise mode).
2. Read acceleration data for the x-, y-, and z-axes.
3. Assert self test by setting the ST bit in the SELF\_TEST register, Address 0x2E.
4. Wait 4/ODR for the output to settle to its new value.
5. Read acceleration data for the x-, y-, and z-axes.
6. Compare to the values from Step 2, and convert the difference from LSB to m g by multiplying by the sensitivity. If the observed difference falls within the self test output change specification listed in Table 22, then the device passes self test and is deemed operational.
7. Deassert self test by clearing the ST bit in the SELF\_TEST register, Address 0x2E.

It is also recommended to average 4 to 16 samples to get the acceleration for self test on and self test off to alleviate the influence from noise.

The self test output change specification shown in Table 1 is only given for V S = 2.0 V and the test conditions listed in the Specifications section. Self test response in g is roughly proportional to the square of the supply voltage. At a higher supply voltage, the self test response can exceed 1 g . The configuration in Step 1 standardizes the self test for any applications that use conditions other than those stated in Table 1. Using an ±8 g range ensures the accelerometer output does not clip during self test. The limits in Table 22 are applicable for all supply voltages and cover a wider set of configurations, and hence the limits are wider than those in Table 1.

Self test response also varies with different user settings such as ODR and bandwidth. For ODR &lt; 100 Hz, or ODR = 100Hz and BW

= ¼ ODR, the self test output change shows a bimodal behavior. Thus, using these settings is not recommended.

Table 22. Self Test Limits for Different Supply Voltages (V s ) From 1.6 V to 3.5 V

| Axis   |   Minimum |   Maximum | Unit   |
|--------|-----------|-----------|--------|
| X      |       0.2 |       2.8 | g      |
| Y      |      -2.8 |      -0.2 | g      |
| Z      |       0.2 |       2.8 | g      |

## MECHANICAL CONSIDERATIONS FOR MOUNTING

Mount the ADXL362 on the printed circuit board (PCB) in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL362 at an unsupported PCB location, as shown in Figure 49, can result in large, apparent measurement errors due to undampened PCB vibration. Locating the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is above the mechanical sensor resonant frequency of the accelerometer and, therefore, effectively invisible to the accelerometer. Multiple mounting points, close to the sensor, and/or a thicker PCB also help to reduce the effect of system resonance on the performance of the sensor.

Figure 49. Incorrectly Placed Accelerometers

<!-- image -->

## OPERATION AT VOLTAGES OTHER THAN 2.0 V

The ADXL362 is tested and specified at a supply voltage of V S = 2.0 V; however, it can be powered with a V S as high as 3.3 V nominal (3.5 V maximum) or as low as 1.8 V nominal (1.6 V minimum). Some performance parameters change as the supply voltage changes, including the supply current (see Figure 30), noise (see Table 7 and Table 8), offset, sensitivity, and self test output change (see Table 22).

Figure 50 shows the potential effect on 0 g offset at varying supply voltage. Data for this figure was calibrated to show 0 m g offset at 2.0 V.

## APPLICATIONS INFORMATION

Figure 50. 0 g Offset vs. Supply Voltage

<!-- image -->

## AXES OF ACCELERATION SENSITIVITY

Figure 51. Axes of Acceleration Sensitivity (Corresponding Output Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Figure 52. Output Response vs. Orientation to Gravity

<!-- image -->

## APPLICATIONS INFORMATION

## LAYOUT AND DESIGN RECOMMENDATIONS

Figure 53 shows the recommended PCB land pattern.

Figure 53. Recommended PCB Land Pattern (Dimensions Shown in Millimeters)

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description        | Packing Quantity   | Package Option   |
|-----------------|---------------------|----------------------------|--------------------|------------------|
| ADXL362BCCZ-R2  | -40°C to +85°C      | 16-Lead LGA (3mm x 3.25mm) | Reel, 250          | CC-16-4          |
| ADXL362BCCZ-RL  | -40°C to +85°C      | 16-Lead LGA (3mm x 3.25mm) | Reel, 5000         | CC-16-4          |
| ADXL362BCCZ-RL7 | -40°C to +85°C      | 16-Lead LGA (3mm x 3.25mm) | Reel, 1500         | CC-16-4          |

## EVALUATION BOARDS

| Model 1           | Description                           |
|-------------------|---------------------------------------|
| EVAL-ADXL362Z     | Breakout Board                        |
| EVAL-ADXL362Z-DB  | Datalogger and Development Board      |
| EVAL-ADXL362Z-MLP | Low Power Real-Time Evaluation System |
| EVAL-ADXL362Z-S   | Satellite Board for Evaluation System |

<!-- image -->

Figure 54. 16-Terminal Land Grid Array [LGA] (CC-16-4) Dimensions Shown in Millimeters

<!-- image -->

Updated: May 15, 2023