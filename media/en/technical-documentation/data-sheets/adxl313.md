<!-- lastmod 2022-09-14 -->
<!-- image -->

## FEATURES

- Ultralow power (scales automatically with data rate)
- As low as 30 µA in measurement mode (V S = 3.3 V)
- As low as 0.1 µA in standby mode (V S = 3.3 V)
- Low noise performance
- 150 μ g /√Hz typical for X- and Y-axes
- 250 μ g /√Hz typical for the Z-axis
- Embedded, patent pending FIFO technology minimizes host processor load
- User-selectable resolution
- Fixed 10-bit resolution for any g range
- Fixed 1024 LSB/ g sensitivity for any g range
- Resolution scales from 10-bit at ±0.5 g to 13-bit at ±4 g
- Built-in motion detection functions for activity/inactivity monitoring
- Supply and I/O voltage range: 2.0 V to 3.6 V
- SPI (3-wire and 4-wire) and I 2 C digital interfaces
- Flexible interrupt modes mappable to two interrupt pins
- Measurement range selectable via serial command
- Bandwidth selectable via serial command
- Wide temperature range (-40°C to +105°C)
- 10,000 g shock survival
- Pb free/RoHS compliant
- Small and thin: 5 mm × 5 mm × 1.45 mm LFCSP package
- Qualified for automotive applications

## APPLICATIONS

- Car alarms
- Hill start aid (HSA) systems
- Electronic parking brakes
- Data recorders (black boxes)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## 3-Axis, ±0.5 g/±1 g/±2 g/±4 g Digital Accelerometer

## GENERAL DESCRIPTION

The ADXL313 is a small, thin, low power, 3-axis accelerometer with high resolution (13-bit) measurement up to ±4 g . Digital output data is formatted as 16-bit twos complement and is accessible through either a serial port interface (SPI) (3-wire or 4-wire) or I 2 C digital interface.

The ADXL313 is well suited for car alarm or black box applications. It measures the static acceleration of gravity in tilt-sensing applications, as well as dynamic acceleration resulting from motion or shock. Its high resolution (1024 LSB/ g ) and low noise (150 μ g /√Hz) enable resolution of inclination changes of as little as 0.1°. A built-in FIFO facilitates using oversampling techniques to improve resolution to as little as 0.025° of inclination.

Several built-in sensing functions are provided. Activity and inactivity sensing detects the presence or absence of motion and whether the acceleration on any axis exceeds a user-set level. These functions can be mapped to interrupt output pins. An integrated 32-level FIFO can be used to store data to minimize host processor intervention, resulting in reduced system power consumption.

Low power modes enable intelligent motion-based power management with threshold sensing and active acceleration measurement at extremely low power dissipation.

The ADXL313 is supplied in a small, thin 5 mm × 5 mm × 1.45 mm, 32-lead LFCSP package and is pin compatible with the ADXL312 accelerometer device.

## TABLE OF CONTENTS

| Features................................................................                                                                                       | 1                                                                                                                                                              | FIFO....................................................................                                                                                       | 18                      |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| Applications...........................................................                                                                                        | 1                                                                                                                                                              | Bypass Mode....................................................18                                                                                              |                         |
| General Description...............................................1                                                                                            |                                                                                                                                                                | FIFO Mode.......................................................18                                                                                             |                         |
| Functional Block Diagram......................................1                                                                                                |                                                                                                                                                                | Stream Mode....................................................18                                                                                              |                         |
| Specifications........................................................                                                                                         | 3                                                                                                                                                              | Trigger Mode....................................................18                                                                                             |                         |
| Absolute Maximum Ratings...................................5                                                                                                   |                                                                                                                                                                | Retrieving Data from FIFO...............................18                                                                                                     |                         |
| Thermal Resistance...........................................                                                                                                  | 5                                                                                                                                                              | Self Test...............................................................19                                                                                     |                         |
| Solder Profile......................................................5                                                                                          |                                                                                                                                                                | Register Map.......................................................                                                                                            | 20                      |
| ESD Caution.......................................................5                                                                                            |                                                                                                                                                                | Register Definitions..........................................21                                                                                               |                         |
| Pin Configuration and Function Descriptions........                                                                                                            | 6                                                                                                                                                              | Applications Information......................................                                                                                                 | 26                      |
| Typical Performance Characteristics.....................7                                                                                                      |                                                                                                                                                                | Power Supply Decoupling................................26                                                                                                      |                         |
| Theory of Operation...............................................9                                                                                            |                                                                                                                                                                | Mechanical Considerations for Mounting.........26                                                                                                              |                         |
| Power Sequencing.............................................9                                                                                                 |                                                                                                                                                                | Asynchronous Data Readings..........................26                                                                                                         |                         |
| Power Savings.................................................                                                                                                 | 10                                                                                                                                                             | Threshold.........................................................                                                                                             | 26                      |
| Serial Communications........................................11                                                                                                |                                                                                                                                                                | Link Mode.........................................................26                                                                                           |                         |
| Serial Port I/O Default States...........................                                                                                                      | 11                                                                                                                                                             | Sleep Mode vs. Low Power Mode....................26                                                                                                            |                         |
| SPI....................................................................11                                                                                      |                                                                                                                                                                | Using Self Test.................................................                                                                                               | 27                      |
| I 2 C....................................................................                                                                                      | 13                                                                                                                                                             | 3200 Hz and 1600 Hz ODR Data Formatting...27                                                                                                                   |                         |
| Interrupts.............................................................                                                                                        | 16                                                                                                                                                             | Axes of Acceleration Sensitivity.......................                                                                                                        | 28                      |
| DATA_READY..................................................17                                                                                                 |                                                                                                                                                                | Outline Dimensions.............................................                                                                                                | 29                      |
| Activity..............................................................17                                                                                       |                                                                                                                                                                | Ordering Guide.................................................29                                                                                              |                         |
| Inactivity...........................................................                                                                                          | 17                                                                                                                                                             | Evaluation Boards............................................29                                                                                                |                         |
| Watermark........................................................17                                                                                            |                                                                                                                                                                | Automotive Products........................................29                                                                                                  |                         |
| Overrun............................................................                                                                                            | 17                                                                                                                                                             |                                                                                                                                                                |                         |
| REVISION HISTORY                                                                                                                                               | REVISION HISTORY                                                                                                                                               |                                                                                                                                                                |                         |
| 9/2022-Rev. C to Rev. D                                                                                                                                        | 9/2022-Rev. C to Rev. D                                                                                                                                        | 9/2022-Rev. C to Rev. D                                                                                                                                        | 9/2022-Rev. C to Rev. D |
| Moved Figure 2 and Table 4............................................................................................................................         | Moved Figure 2 and Table 4............................................................................................................................         | Moved Figure 2 and Table 4............................................................................................................................         | 5                       |
| Added Serial Port I/O Default States Section.................................................................................................11                | Added Serial Port I/O Default States Section.................................................................................................11                | Added Serial Port I/O Default States Section.................................................................................................11                |                         |
| Change to Figure 17......................................................................................................................................      | Change to Figure 17......................................................................................................................................      | Change to Figure 17......................................................................................................................................      | 11                      |
| Changes to Figure 18, Figure 19, and Figure 20...........................................................................................13                    | Changes to Figure 18, Figure 19, and Figure 20...........................................................................................13                    | Changes to Figure 18, Figure 19, and Figure 20...........................................................................................13                    |                         |
| Moved Table 13..............................................................................................................................................16 | Moved Table 13..............................................................................................................................................16 | Moved Table 13..............................................................................................................................................16 |                         |
| Added Asynchronous Data Readings Section...............................................................................................26                      | Added Asynchronous Data Readings Section...............................................................................................26                      | Added Asynchronous Data Readings Section...............................................................................................26                      |                         |

## SPECIFICATIONS

TA = -40°C to +105°C, V S = V DD I/O = 3.3 V, acceleration = 0 g , unless otherwise noted.

Table 1.

| Parameter 1                           | Test Conditions/Comments                                                   |   Min | Typ              | Max   | Unit        |
|---------------------------------------|----------------------------------------------------------------------------|-------|------------------|-------|-------------|
| SENSOR INPUT                          | Each axis                                                                  |       |                  |       |             |
| Measurement Range                     | User selectable                                                            |       | ±0.5, ±1, ±2, ±4 |       | g           |
| Nonlinearity                          | Percentage of full scale                                                   |       | ±0.5             |       | %           |
| Micro-Nonlinearity                    | Measured over any 50 m g interval                                          |       | ±2               |       | %           |
| Interaxis Alignment Error             |                                                                            |       | ±0.1             |       | Degrees     |
| Cross-Axis Sensitivity 2              |                                                                            |       | ±1               |       | %           |
| OUTPUT RESOLUTION                     | Each axis                                                                  |       |                  |       |             |
| All g Ranges                          | Default resolution                                                         |       | 10               |       | Bits        |
| ±0.5 g Range                          | Full resolution enabled                                                    |       | 10               |       | Bits        |
| ±1 g Range                            | Full resolution enabled                                                    |       | 11               |       | Bits        |
| ±2 g Range                            | Full resolution enabled                                                    |       | 12               |       | Bits        |
| ±4 g Range                            | Full resolution enabled                                                    |       | 13               |       | Bits        |
| SENSITIVITY                           | Each axis                                                                  |       |                  |       |             |
| Sensitivity at X OUT , Y OUT , Z OUT  | Any g-range, full resolution mode                                          |       | 1024             |       | LSB/ g      |
|                                       | ±0.5 g , 10-bit or full resolution                                         |   921 | 1024             | 1126  | LSB/ g      |
|                                       | ±1 g , 10-bit resolution                                                   |   460 | 512              | 563   | LSB/ g      |
|                                       | ±2 g , 10-bit resolution                                                   |   230 | 256              | 282   | LSB/ g      |
|                                       | ±4 g , 10-bit resolution                                                   |   115 | 128              | 141   | LSB/ g      |
| Sensitivity Change Due to Temperature |                                                                            |       | ±0.01            |       | %/°C        |
| 0 g BIAS LEVEL                        | Each axis                                                                  |       |                  |       |             |
| Initial 0 g Output                    | T = 25°C, X OUT , Y OUT                                                    |       | ±50              |       | m g         |
|                                       | T = 25°C, Z OUT                                                            |       | ±75              |       | m g         |
| 0 g Output Drift over Temperature     | -40°C < T < +105°C, X OUT , Y OUT, referenced to initial 0 g output        |  -125 |                  | +125  | m g         |
| 0 g Offset Tempco                     | -40°C < T < +105°C, Z OUT , referenced to initial 0 g output X OUT , Y OUT |  -200 | ±0.5             | +200  | m g m g /°C |
|                                       | Z OUT                                                                      |       | ±0.75            |       | m g /°C     |
| NOISE PERFORMANCE                     |                                                                            |       |                  |       |             |
| Noise Density                         | X-, Y-axes                                                                 |       | 150              |       | µ g /√Hz    |
|                                       | Z-axis                                                                     |       | 250              |       | µ g /√Hz    |
| RMS Noise                             | X-, Y-axes, 100 Hz output data rate (ODR)                                  |       | 1.5              |       | m g rms     |
|                                       | Z-axis, 100 Hz ODR                                                         |       | 2.5              |       | m g rms     |
| OUTPUT DATA RATE/BANDWIDTH            | User selectable                                                            |       |                  |       |             |
| Measurement Rate 3                    |                                                                            |  6.25 |                  | 3200  | Hz          |
| SELF TEST 4                           | Data rate ≥ 100 Hz, 2.0 V ≤ V S ≤ 3.6 V                                    |       |                  |       |             |
| Output Change in X-Axis               |                                                                            |  0.20 |                  | 2.36  | g           |
| Output Change in Y-Axis               |                                                                            | -2.36 |                  | -0.20 | g           |
| Output Change in Z-Axis               |                                                                            |  0.30 |                  | 3.70  | g           |
| POWER SUPPLY                          |                                                                            |       |                  |       |             |
| Operating Voltage Range (V S )        |                                                                            |   2.0 |                  | 3.6   | V           |
| Interface Voltage Range (V DD I/O )   |                                                                            |   1.7 |                  | V S   | V           |
| Supply Current                        | Data rate > 100 Hz                                                         |   100 | 170              | 300   | µA          |
|                                       | Data rate < 10 Hz                                                          |    30 | 55               | 110   | µA          |

## SPECIFICATIONS

Table 1.

| Parameter 1                  | Test Conditions/Comments                |   Min |   Typ |   Max | Unit   |
|------------------------------|-----------------------------------------|-------|-------|-------|--------|
| Standby Mode Leakage Current | T = 25°C                                |       |   0.1 |     2 | µA     |
|                              | Over entire operating temperature range |       |       |    10 | μA     |
| Turn-On (Wake-Up) Time 5     |                                         |       |   1.4 |       | ms     |
| TEMPERATURE                  |                                         |       |       |       |        |
| Operating Temperature Range  |                                         |   -40 |       |  +105 | °C     |

- 5 Turn-on and wake-up times are determined by the user-defined bandwidth. At a 100 Hz data rate, the turn-on and wake-up times are each approximately 11.1 ms. For other data rates, the turn-on and wake-up times are each approximately τ + 1.1 in milliseconds, where τ = 1/(data rate).

## ABSOLUTE MAXIMUM RATINGS

| Table 2.                      |                                                        |
|-------------------------------|--------------------------------------------------------|
| Parameter                     | Rating                                                 |
| Acceleration                  |                                                        |
| Any Axis, Unpowered           | 10,000 g                                               |
| Any Axis, Powered             | 10,000 g                                               |
| V S                           | -0.3 V to +3.9 V                                       |
| V DD I/O                      | -0.3 V to +3.9 V                                       |
| All Other Pins                | -0.3 V to V DD I/O + 0.3 V or 3.9 V, whichever is less |
| Output Short-Circuit Duration | Indefinite                                             |
| Temperature Range             |                                                        |
| Powered                       | -40°C to +125°C                                        |
| Storage                       | -40°C to +125°C                                        |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

θ JA is specified for the worst-case conditions, that is, a device soldered in a circuit board for surface-mount packages.

Table 3. Thermal Resistance

| Package Type          |   θ JA |   θ JC | Unit   |
|-----------------------|--------|--------|--------|
| 32-Lead LFCSP Package |  27.27 |     30 | °C/W   |

## SOLDER PROFILE

Figure 2. Recommended Soldering Profile

<!-- image -->

Table 4. Recommended Soldering Profile

|                                                     | Condition         | Condition         |
|-----------------------------------------------------|-------------------|-------------------|
| Profile Feature 1, 2                                | Sn63/Pb37         | Pb-Free           |
| Average Ramp Rate (T L to T P )                     | 3°C/sec maxi- mum | 3°C/sec maxi- mum |
| Preheat                                             |                   |                   |
| Minimum Temperature (T SMIN )                       | 100°C             | 150°C             |
| Maximum Temperature (T SMAX )                       | 150°C             | 200°C             |
| Time (T SMIN to T SMAX ) (t S )                     | 60 sec to 120 sec | 60 sec to 120 sec |
| T SMAX to T L                                       |                   |                   |
| Ramp-Up Rate                                        | 3°C/sec           | 3°C/sec           |
| Time Maintained Above Liquidous (t L )              |                   |                   |
| Liquidous Temperature (T L )                        | 183°C             | 217°C             |
| Time (t L )                                         | 60 sec to 150 sec | 60 sec to 150 sec |
| Peak Temperature (T P )                             | 240°C + 0°C/ -5°C | 260°C + 0°C/ -5°C |
| Time Within 5°C of Actual Peak Tempera- ture (t P ) | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                      | 6°C/sec maxi- mum | 6°C/sec maxi- mum |
| Time 25°C to Peak Temperature                       | 6 min maximum     | 8 min maximum     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.   | Mnemonic        | Description                                                                               |
|-----------|-----------------|-------------------------------------------------------------------------------------------|
| 1         | GND             | This pin must be connected to ground.                                                     |
| 2         | RESERVED        | Reserved. This pin must be connected to V S or left open.                                 |
| 3         | GND             | This pin must be connected to ground.                                                     |
| 4         | GND             | This pin must be connected to ground.                                                     |
| 5         | V S             | Supply Voltage.                                                                           |
| 6         | CS              | Chip Select.                                                                              |
| 7         | RESERVED        | Reserved. This pin must be left open.                                                     |
| 8 to 19   | NC              | No Connect. Do not connect to this pin.                                                   |
| 20        | INT1            | Interrupt 1 Output.                                                                       |
| 21        | INT2            | Interrupt 2 Output.                                                                       |
| 22        | RESERVED        | Reserved. This pin must be connected to GND or left open.                                 |
| 23        | SDO/ALT ADDRESS | Serial Data Output/Alternate I 2 C Address Select.                                        |
| 24        | SDA/SDI/SDIO    | Serial Data (I 2 C)/Serial Data Input (SPI 4-Wire)/Serial Data Input/Output (SPI 3-Wire). |
| 25        | NC              | No Connect. Do not connect to this pin.                                                   |
| 26        | SCL/SCLK        | I 2 C Serial Communications Clock/SPI Serial Communications Clock.                        |
| 27 to 30  | NC              | No Connect. Do not connect to this pin.                                                   |
| 31        | V DD I/O        | Digital Interface Supply Voltage.                                                         |
| 32        | NC              | No Connect. Do not connect to this pin.                                                   |
|           | EP              | Exposed Pad. The exposed pad must be soldered to the ground plane.                        |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. X-Axis Acceleration vs. Temperature, Three Lots (N = 80)

<!-- image -->

Figure 5. Y-Axis Acceleration vs. Temperature, Three Lots (N = 80)

<!-- image -->

Figure 6. Z-Axis Acceleration vs. Temperature, Three Lots (N = 80)

<!-- image -->

Figure 7. X-Axis Nonlinearity, ±2 g Input Range

Figure 8. Y-Axis Nonlinearity, ±2 g Input Range

<!-- image -->

Figure 9. Z-Axis Nonlinearity, ±2 g Input Range

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. X-Axis Microlinearity, 50 mg Step Size

<!-- image -->

Figure 11. Y-Axis Microlinearity, 50 mg Step Size

<!-- image -->

Figure 12. Z-Axis Microlinearity, 50 mg Step Size

<!-- image -->

Figure 13. Standby Mode Current Consumption, V S = V DD I/O = 3.3 V, 25°C

Figure 14. Current Consumption, Measurement Mode, Data Rate = 100 Hz, V S = V DD I/O = 3.3 V, 25°C

<!-- image -->

Figure 15. Supply Current vs. Supply Voltage, V S at 25°C

<!-- image -->

## THEORY OF OPERATION

The ADXL313 is a complete 3-axis acceleration measurement system with a selectable measurement range of ±0.5 g , ±1 g , ±2 g , or ±4 g . It measures both dynamic acceleration resulting from motion or shock and static acceleration, such as gravity, which allows it to be used as a tilt sensor.

The sensor is a polysilicon surface-micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against acceleration forces.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the beam and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase-sensitive demodulation is used to determine the magnitude and polarity of the acceleration.

## POWER SEQUENCING

Power can be applied to V S or V DD I/O in any sequence without damaging the ADXL313. All possible power-on modes are summar- ized in Table 6. The interface voltage level is set with the interface supply voltage, V DD I/O , which must be present to ensure that the ADXL313 does not create a conflict on the communication bus. For single-supply operation, V DD I/O can be the same as the main supply, V S . In a dual-supply application, however, V DD I/O can differ from V S to accommodate the desired interface voltage, as long as VS  is greater than or equal to V DD I/O .

Table 6. Power Sequencing

| Condition                | V S   | V DD I/O   | Description                                                                                                                                                                                                  |
|--------------------------|-------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Power Off                | Off   | Off        | The device is completely off, but there is a potential for a communication bus conflict.                                                                                                                     |
| Bus Disabled             | On    | Off        | The device is on in standby mode, but communication is unavailable, and the device creates a conflict on the communication bus. Minimize the duration of this state during power-up to prevent a conflict.   |
| Bus Enabled              | Off   | On         | No functions are available, but the device does not create a conflict on the communication bus.                                                                                                              |
| Standby or Measure- ment | On    | On         | The device is in standby mode, awaiting a command to enter measurement mode, and all sensor functions are off. After the device is instructed to enter measurement mode, all sensor functions are available. |

After V S is applied, the device enters standby mode, where power consumption is minimized and the device waits for V DD I/O to be applied and for the command to enter measurement mode to be received. (This command can be initiated by setting the measure bit in the POWER\_CTL register (Address 0x2D).) In addition, any register can be written to or read from to configure the part while the device is in standby mode. It is recommended that the device be configured in standby mode before measurement mode is enabled. Clearing the measure bit returns the device to the standby mode.

## THEORY OF OPERATION

## POWER SAVINGS

## Power Modes

The ADXL313 automatically modulates its power consumption in proportion to its output data rate, as outlined in Table 7. If additional power savings are desired, a lower power mode is available. In this mode, the internal sampling rate is reduced, allowing for power savings in the 12.5 Hz to 400 Hz data rate range at the expense of slightly greater noise. To enter low power mode, set the LOW\_POWER bit (Bit 4) in the BW\_RATE register (Address 0x2C). The current consumption in low power mode is shown in Table 8 for cases where there is an advantage to using low power mode. Use of low power mode for a data rate not shown in Table 8 does not provide any advantage over the same data rate in normal power mode. Therefore, it is recommended that only data rates shown in Table 8 be used in low power mode. The current consumption values shown in Table 7 and Table 8 are for a V S of 3.3 V.

Table 7. Current Consumption vs. Data Rate (T A = 25°C, V S = V DD I/O = 3.3 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                    3200 |             1600 |        1111 |         170 |
|                    1600 |              800 |        1110 |         115 |
|                     800 |              400 |        1101 |         170 |
|                     400 |              200 |        1100 |         170 |
|                     200 |              100 |        1011 |         170 |
|                     100 |               50 |        1010 |         170 |
|                      50 |               25 |        1001 |         115 |
|                      25 |             12.5 |        1000 |          82 |
|                    12.5 |             6.25 |        0111 |          65 |
|                    6.25 |            3.125 |        0110 |          57 |

Table 8. Current Consumption vs. Data Rate, Low Power Mode (T A = 25°C, V S = V DD I/O = 3.3 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                     400 |              200 |        1100 |         115 |
|                     200 |              100 |        1011 |          82 |
|                     100 |               50 |        1010 |          65 |
|                      50 |               25 |        1001 |          57 |
|                      25 |             12.5 |        1000 |          50 |
|                    12.5 |             6.25 |        0111 |          43 |

## Autosleep Mode

Additional power savings can be obtained by having the ADXL313 automatically switch to sleep mode during periods of inactivity. To enable this feature, set the THRESH\_INACT register (Address 0x25) to an acceleration threshold value. Levels of acceleration below this threshold are regarded as no activity. Set TIME\_INACT (Address 0x26) to an appropriate inactivity time period. Then set the AUTO\_SLEEP bit and the link bit in the POWER\_CTL register

(Address 0x2D). If the device does not detect a level of acceleration in excess of THRESH\_INACT for TIME\_INACT seconds, the device is transitioned to sleep mode automatically. Current consumption at less than 10 Hz data rates used in this mode is typically 55 µA for a VS  of 3.3 V.

## Standby Mode

For even lower power operation, standby mode can be used. In standby mode, current consumption is reduced to 0.1 µA (typical). In this mode, no measurements are made. Standby mode is entered by clearing the measure bit (Bit 3) in the POWER\_CTL register (Address 0x2D). Placing the device into standby mode preserves the contents of the FIFO.

## SERIAL COMMUNICATIONS

I 2 C and SPI digital communications are available. In both cases, the ADXL313 operates as a slave. I 2 C mode is enabled if the CS pin is tied high to V DD I/O . The CS pin must always be tied high to V DD I/O or be driven by an external controller because there is no default mode if the CS pin is left unconnected. Therefore, not taking these precautions may result in an inability to communicate with the part. In SPI mode, the CS pin is controlled by the bus master. In both SPI and I 2 C modes of operation, ignore data transmitted from the ADXL313 to the master device during writes to the ADXL313.

## SERIAL PORT I/O DEFAULT STATES

Ensure that all serial port I/Os are in a defined state and that no pin is allowed to float when not in use. This is applicable to all serial port I/Os, regardless of SPI or I 2 C operation.

For I 2 C applications, always tie the CS pin high to V DD I/O . Connect the SCL and SDA pins to an external controller, with pull-up resistors implemented according to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor. The ALT ADDRESS pin must be tied to either VDD I/O or ground, thereby selecting the desired I 2 C address for the ADXL313.

If the SPI is the intended communications interface, drive the pin with an external controller, as shown in Figure 16 and Figure 17. When communications with the ADXL313 are suspended (CS = VDD I/O ), ensure that the SCLK, SDI/SDIO, and SDO pins are not floating.

For either SPI or I 2 C operation, not taking these precautions may result in an inability to communicate with the device or excessive current consumption.

## SPI

For SPI communication, either 3- or 4-wire configuration is possible, as shown in the connection diagrams in Figure 16 and Figure 17. Clearing the SPI bit in the DATA\_FORMAT register (Address 0x31) selects 4-wire mode, whereas setting the SPI bit selects 3-wire mode. The maximum SPI clock speed is 5 MHz with 100 pF maximum loading, and the timing scheme follows clock polarity (CPOL) = 1 and clock phase (CPHA) = 1. If power is applied to the ADXL313 before the clock polarity and phase of the host processor are configured, the CS pin must be brought high before changing the clock polarity and phase. When using the 3-wire SPI configuration, it is recommended that the SDO pin be either pulled up to V DD I/O or pulled down to GND via a 10 kΩ resistor.

Figure 16. 3-Wire SPI Connection Diagram

<!-- image -->

Figure 17. 4-Wire SPI Connection Diagram

<!-- image -->

CS is the serial port enable line and is controlled by the SPI master. This line must go low at the start of a transmission and high at the end of a transmission, as shown in Figure 18 to Figure 20. SCLK is the serial port clock and is supplied by the SPI master. SCLK idles high during a period of no transmission. SDI and SDO are the serial data input and output, respectively. Data is updated on the falling edge of SCLK and sampled on the rising edge of SCLK.

To read or write multiple bytes in a single transmission, the multiple-byte bit, located after the R/W bit in the first byte transfer (MB in Figure 18 to Figure 20), must be set. After the register addressing and the first byte of data, each subsequent set of clock pulses (eight clock pulses) causes the ADXL313 to point to the next register for a read or write. This shifting continues until the clock pulses cease and CS is deasserted. To perform reads or writes on different, nonsequential registers, CS must be deasserted between transmissions, and the new register must be addressed separately.

The timing diagram for 3-wire SPI reads or writes is shown in Figure 18. The 4-wire equivalents for SPI reads and writes are shown in Figure 19 and Figure 20, respectively. For correct operation of the part, the logic thresholds and timing parameters in Table 9 and Table 10 must be met at all times.

Use of the 3200 Hz and 1600 Hz output data rates is recommended only with SPI communication rates greater than or equal to 2 MHz. The 800 Hz output data rate is recommended only for communication speeds greater than or equal to 400 kHz, and the remaining data rates scale proportionally. For example, the minimum recommended communication speed for a 200 Hz output data rate is 100 kHz. Operation at an output data rate below the recommended minimum may result in undesirable effects on the acceleration data, including missing samples or additional noise.

## SERIAL COMMUNICATIONS

## Table 9. SPI Digital Input/Output

|                                   |                            | Limit 1        | Limit 1        |      |
|-----------------------------------|----------------------------|----------------|----------------|------|
| Parameter                         | Test Conditions/Comments   | Min            | Max            | Unit |
| Digital Input                     |                            |                |                |      |
| Low Level Input Voltage (V IL )   |                            |                | 0.3 × V DD I/O | V    |
| High Level Input Voltage (V IH )  |                            | 0.7 × V DD I/O |                | V    |
| Low Level Input Current (I IL )   | V IN = V DD I/O            |                | 0.1            | µA   |
| High Level Input Current (I IH )  | V IN = 0 V                 | -0.1           |                | µA   |
| Digital Output                    |                            |                |                |      |
| Low Level Output Voltage (V OL )  | I OL = 10 mA               |                | 0.2 × V DD I/O | V    |
| High Level Output Voltage (V OH ) | I OH = -4 mA               | 0.8 × V DD I/O |                | V    |
| Low Level Output Current (I OL )  | V OL = V OL, max           | 10             |                | mA   |
| High Level Output Current (I OH ) | V OH = V OH, min           |                | -4             | mA   |
| Pin Capacitance                   | f IN = 1 MHz, V IN = 2.5 V |                | 8              | pF   |

Table 10. SPI Timing (T A = 25°C, V S = V DD I/O = 3.3 V)

| Parameter 1   | Limit 2, 3   | Limit 2, 3   | Unit   |                                                                                |
|---------------|--------------|--------------|--------|--------------------------------------------------------------------------------|
| Parameter 1   | Min 1        | Max          | Unit   | Description 1                                                                  |
| f SCLK        |              | 5            | MHz    | SPI clock frequency.                                                           |
| t SCLK        | 200          |              | ns     | 1/(SPI clock frequency) mark-space ratio for the SCLK input is 40/60 to 60/40. |
| t DELAY       | 5            |              | ns     | CS falling edge to SCLK falling edge.                                          |
| t QUIET       | 5            |              | ns     | SCLK rising edge to CS rising edge.                                            |
| t DIS         |              | 10           | ns     | CS rising edge to SDO disabled.                                                |
| t CS,DIS      | 150          |              | ns     | CS deassertion between SPI communications.                                     |
| t S           | 0.3 × t SCLK |              | ns     | SCLK low pulse width (space).                                                  |
| t M           | 0.3 × t SCLK |              | ns     | SCLK high pulse width (mark).                                                  |
| t SETUP       | 5            |              | ns     | SDI valid before SCLK rising edge.                                             |
| t HOLD        | 5            |              | ns     | SDI valid after SCLK rising edge.                                              |
| t SDO         |              | 40           | ns     | SCLK falling edge to SDO/SDIO output transition.                               |
| t R 4         |              | 20           | ns     | SDO/SDIO output high to output low transition.                                 |
| t F 4         |              | 20           | ns     | SDO/SDIO output low to output high transition.                                 |

## SERIAL COMMUNICATIONS

<!-- image -->

Figure 18. SPI 3-Wire Read/Write

<!-- image -->

Figure 19. SPI 4-Wire Read

Figure 20. SPI 4-Wire Write

<!-- image -->

Figure 21. I 2 C Connection Diagram (Address 0x53)

<!-- image -->

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed V DD I/O by more than 0.3 V. External pull-up resistors, R P , are necessary for proper I 2 C operation. To ensure proper operation, refer to the

## I 2 C

With CS tied high to V DD I/O , the ADXL313 is in I 2 C mode, requiring a simple 2-wire connection, as shown in Figure 21. The ADXL313 conforms to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor. It supports standard (100 kHz) and fast (400 kHz) data transfer modes if the bus parameters given in Table 11 and Table 12 are met. Single- or multiple-byte reads/writes are supported, as shown in Figure 22. With the ALT ADDRESS pin high, the 7-bit I 2 C address for the device is 0x1D, followed by the R/W bit. This translates to 0x3A for a write and 0x3B for a read. An alternate I 2 C address of 0x53 (followed by the R/W bit) can be chosen by grounding the ALT ADDRESS pin (Pin 23). This translates to 0xA6 for a write and 0xA7 for a read.

## SERIAL COMMUNICATIONS

UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, when selecting pull-up resistor values.

Table 11. I 2 C Digital Input/Output

|                                  |                                | Limit 1        | Limit 1        |      |
|----------------------------------|--------------------------------|----------------|----------------|------|
| Parameter                        | Test Conditions/Comments       | Min            | Max            | Unit |
| Digital Input                    |                                |                |                |      |
| Low Level Input Voltage (V IL )  |                                |                | 0.3 × V DD I/O | V    |
| High Level Input Voltage (V IH ) |                                | 0.7 × V DD I/O |                | V    |
| Low Level Input Current (I IL )  | V IN = V DD I/O                |                | 0.1            | µA   |
| High Level Input Current (I IH ) | V IN = 0 V                     | -0.1           |                | µA   |
| Digital Output                   |                                |                |                |      |
| Low Level Output Voltage (V OL ) | V DD I/O < 2 V, I OL = 3 mA mA |                | 0.2 × V DD I/O | V    |
|                                  | V DD I/O ≥ 2 V, I OL = 3       |                | 400            | mV   |
| Low Level Output Current (I OL ) | V OL = V OL, max               | 3              |                | mA   |
| Pin Capacitance                  | f IN = 1 MHz, V IN = 2.5 V     |                | 8              | pF   |

1 Limits based on characterization results; not production tested.

Figure 22. I 2 C Device Addressing

Table 12. I 2 C Timing (T A = 25°C, V S = V DD I/O = 3.3 V)

|                | Limit 1, 2   | Limit 1, 2   |      |                                          |
|----------------|--------------|--------------|------|------------------------------------------|
| Parameter      | Min          | Max          | Unit | Description                              |
| f SCL          |              | 400          | kHz  | SCL clock frequency                      |
| t 1            | 2.5          |              | µs   | SCL cycle time                           |
| t 2            | 0.6          |              | µs   | SCL high time                            |
| t 3            | 1.3          |              | µs   | SCL low time                             |
| t 4            | 0.6          |              | µs   | Start/repeated start condition hold time |
| t 5            | 100          |              | ns   | Data setup time                          |
| t 6 3, 4, 5, 6 | 0            | 0.9          | µs   | Data hold time                           |
| t 7            | 0.6          |              | µs   | Setup time for repeated start            |
| t 8            | 0.6          |              | µs   | Stop condition setup time                |

## SERIAL COMMUNICATIONS

## Table 12. I 2 C Timing (T A = 25°C, V S = V DD I/O = 3.3 V)

| Parameter   | Limit 1, 2     | Limit 1, 2   |      |                                                              |
|-------------|----------------|--------------|------|--------------------------------------------------------------|
| Parameter   | Min            | Max          | Unit | Description                                                  |
| t 9         | 1.3            |              | µs   | Bus-free time between a stop condition and a start condition |
| t 10        |                | 300          | ns   | Rise time of both SCL and SDA when receiving                 |
|             | 0              |              | ns   | Rise time of both SCL and SDA when receiving or transmitting |
| t 11        |                | 250          | ns   | Fall time of SDA when receiving                              |
|             |                | 300          | ns   | Fall time of both SCL and SDA when transmitting              |
|             | 20 + 0.1 C b 7 |              | ns   | Fall time of both SCL and SDA when transmitting or receiving |
| C b         |                | 400          | pF   | Capacitive load for each bus line                            |

- 1 Limits based on characterization results, with f SCL = 400 kHz and a 3 mA sink current; not production tested.
- 2 All values referred to the V IH and the V IL levels given in Table 11.
- 3 t 6 is the data hold time that is measured from the falling edge of SCL. It applies to data in transmission and acknowledge.
- 4 A transmitting device must internally provide an output hold time of at least 300 ns for the SDA signal (with respect to V IH, min of the SCL signal) to bridge the undefined region of the falling edge of SCL.
- 5 The maximum t 6 value must be met only if the device does not stretch the low period (t 3 ) of the SCL signal.
- 6 The maximum value for t 6 is a function of the clock low time (t 3 ), the clock rise time (t 10 ), and the minimum data setup time (t 5(min) ). This value is calculated as t 6(max) = t 3 -t 10 - t 5(min) .
- 7 Cb  is the total capacitance of one bus line in picofarads.

<!-- image -->

Figure 23. I 2 C Timing Diagram

<!-- image -->

## INTERRUPTS

The ADXL313 provides two output pins for driving interrupts: INT1 and INT2. Both interrupt pins are push-pull, low impedance pins with output specifications shown in Table 13. The default configuration of the interrupt pins is active high. This can be changed to active low by setting the INT\_INVERT bit in the DATA\_FORMAT register (Address 0x31). All functions can be used simultaneously, with the only limiting feature being that some functions may need to share interrupt pins.

Interrupts are enabled by setting the appropriate bit in the INT\_EN-ABLE register (Address 0x2E) and are mapped to either the INT1 or INT2 pin based on the contents of the INT\_MAP register (Address 0x2F). When initially configuring the interrupt pins, it is recommended that the functions and interrupt mapping be completed before enabling the interrupts. When changing the configuration of an interrupt, it is recommended that the interrupt be disabled first, by clearing the bit corresponding to that function in the INT\_ENABLE register, and then the function be reconfigured before enabling the interrupt again. Configuration of the functions while the interrupts are disabled helps to prevent the accidental generation of an interrupt.

Table 13. Interrupt Pin Digital Output

|                                   |                            | Limit 1        | Limit 1        |      |
|-----------------------------------|----------------------------|----------------|----------------|------|
| Parameter                         | Test Conditions/Comments   | Min            | Max            | Unit |
| Digital Output                    |                            |                |                |      |
| Low Level Output Voltage (V OL )  | I OL = 300 µA              |                | 0.2 × V DD I/O | V    |
| High Level Output Voltage (V OH ) | I OH = -150 µA             | 0.8 × V DD I/O |                | V    |
| Low Level Output Current (I OL )  | V OL = V OL, max           | 300            |                | µA   |
| High Level Output Current (I OH ) | V OH = V OH, min           |                | -150           | µA   |
| Pin Capacitance                   | f IN = 1 MHz, V IN = 2.5 V |                | 8              | pF   |
| Rise/Fall Time                    |                            |                |                |      |
| Rise Time (t R ) 2                | C LOAD = 150 pF            |                | 210            | ns   |
| Fall Time (t F ) 3                | C LOAD = 150 pF            |                | 150            | ns   |

<!-- image -->

The interrupt functions are latched and cleared either by reading the data registers (Address 0x32 to Address 0x37) until the interrupt condition is no longer valid for the data-related interrupts or by reading the INT\_SOURCE register (Address 0x30) for the remaining interrupts. The following sections describe the interrupts that can be set in the INT\_ENABLE register and monitored in the INT\_SOURCE register.

## INTERRUPTS

## DATA\_READY

The DATA\_READY bit is set when new data is available and is cleared when no new data is available.

## ACTIVITY

The activity bit is set when acceleration greater than the value stored in the THRESH\_ACT register (Address 0x24) is sensed.

## INACTIVITY

The inactivity bit is set when acceleration of less than the value stored in the THRESH\_INACT register (Address 0x25) is sensed for more time than is specified in the TIME\_INACT register (Address 0x26). The maximum value for TIME\_INACT is 255 sec.

## WATERMARK

The watermark bit is set when the number of samples in the FIFO equals the value stored in the samples bits in the FIFO\_CTL

register (Address 0x38). The watermark bit is cleared automatically when the FIFO is read, and the content returns to a value below the value stored in the samples bits.

## OVERRUN

The overrun bit is set when new data replaces unread data. The precise operation of the overrun function depends on the FIFO mode. In bypass mode, the overrun bit is set when new data replaces unread data in the DATA\_Xx, DATA\_Yx, and DATA\_Zx registers (Address 0x32 to Address 0x37). In all other modes, the overrun bit is set when the FIFO is filled. The overrun bit is automatically cleared when the contents of FIFO are read.

## FIFO

The ADXL313 contains patent pending technology for an embedded memory management system with a 32-level FIFO that can be used to minimize host processor burden. This buffer has four modes: bypass, FIFO, stream, and trigger (see Table 42). Each mode is selected by the settings of the FIFO\_MODE bits in the FIFO\_CTL register (Address 0x38).

## BYPASS MODE

In bypass mode, the FIFO is not operational and, therefore, remains empty.

## FIFO MODE

In FIFO mode, data from measurements of the x-, y-, and z-axes are stored in the FIFO. When the number of samples in the FIFO equals the level specified in the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set. The FIFO continues accumulating samples until it is full (32 samples from measurements of the x-, y-, and z-axes) and then stops collecting data. After the FIFO stops collecting data, the device continues to operate; therefore, features such as activity detection can be used after the FIFO is full. The watermark interrupt continues to occur until the number of samples in the FIFO is less than the value stored in the samples bits of the FIFO\_CTL register.

## STREAM MODE

In stream mode, data from measurements of the x-, y-, and z-axes is stored in FIFO. When the number of samples in the FIFO equals the level specified in the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set. FIFO continues accumulating samples and holds the latest 32 samples from measurements of the x-, y-, and z-axes, discarding older data as new data arrives. The watermark interrupt continues occurring until the number of samples in FIFO is less than the value stored in the samples bits of the FIFO\_CTL register.

## TRIGGER MODE

In trigger mode, the FIFO accumulates samples, holding the latest 32 samples from measurements of the x-, y-, and z-axes. After a trigger event occurs and an interrupt is sent to the INT1 or INT2 pin (determined by the trigger bit in the FIFO\_CTL register), FIFO keeps the last n samples (where n is the value specified by the samples bits in the FIFO\_CTL register) and then operates in FIFO mode, collecting new samples only when the FIFO is not full. A delay of at least 5 μs must be present between the trigger event occurring and the start of reading data from the FIFO to allow the FIFO to discard and retain the necessary samples. Additional trigger events cannot be recognized until the trigger mode is reset. To reset the trigger mode, set the device to bypass mode and then set the device back to trigger mode. Note that the FIFO data must be read first because placing the device into bypass mode clears FIFO.

## RETRIEVING DATA FROM FIFO

The FIFO data is read through the DATA\_Xx, DATA\_Yx, and DA-TA\_Zx registers (Address 0x32 to Address 0x37). When the FIFO is in FIFO, stream, or trigger mode, reads to the DATA\_Xx, DATA\_xY, and DATA\_Zx registers read data stored in the FIFO. Each time data is read from the FIFO, the oldest x-, y-, and z-axes data is placed into the DATA\_Xx, DATA\_Yx, and DATA\_Zx registers.

If a single-byte read operation is performed, the remaining bytes of data for the current FIFO sample are lost. Therefore, all axes of interest must be read in a burst (or multiple-byte) read operation. To ensure that the FIFO has completely popped (that is, that new data has completely moved into the DATA\_Xx, DATA\_Yx, and DATA\_Zx registers), there must be at least 5 μs between the end of reading the data registers and the start of a new read of the FIFO or a read of the FIFO\_STATUS register (Address 0x39). The end of reading a data register is signified by the transition from Register 0x37 to Register 0x38 or by the CS pin going high.

For SPI operation at 1.6 MHz or less, the register addressing portion of the transmission is a sufficient delay to ensure that the FIFO has completely popped. For SPI operation greater than 1.6 MHz, it is necessary to deassert the CS pin to ensure a total delay of 5 μs; otherwise, the delay is not sufficient. The total delay necessary for 5 MHz operation is at most 3.4 μs. This is not a concern when using I 2 C mode because the communication rate is low enough to ensure a sufficient delay between FIFO reads.

## SELF TEST

The ADXL313 incorporates a self test feature that effectively tests its mechanical and electronic systems simultaneously. When the self test function is enabled (via the SELF\_TEST bit in the DA-TA\_FORMAT register, Address 0x31), an electrostatic force is exerted on the mechanical sensor. This electrostatic force moves the mechanical sensing element in the same manner as acceleration, and it is additive to the acceleration experienced by the device. This added electrostatic force results in an output change in the x-, y-, and z-axes. Because the electrostatic force is proportional to V S 2 , the output change varies with V S . The self test feature of the ADXL313 also exhibits a bimodal behavior. However, the limits shown in Table 1 and Table 14 are valid for all potential self test values across the entire allowable voltage range. Use of the self test feature at data rates of less than 100 Hz or at 1600 Hz may yield values outside these limits. Therefore, the part must be in normal power operation (LOW\_POWER bit = 0 in the BW\_RATE register, Address 0x2C) and be placed into a data rate of 100 Hz through 800 Hz or 3200 Hz for the self test function to operate correctly.

Table 14. Self Test Output (T A = 25°C, 2.0 V ≤ V S ≤ 3.6 V)

| Axis   |   Min ( g ) |   Max ( g ) |
|--------|-------------|-------------|
| X      |        0.20 |        2.36 |
| Y      |       -2.36 |       +0.20 |
| Z      |        0.30 |        3.70 |

## REGISTER MAP

Table 15. Register Map

| Reg.         | Name          | Type                  | D7                    | D6                    | D5                    | D4                    | D3                    | D2                    | D1                    | D0                    | Reset Value   |
|--------------|---------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|---------------|
| 0x00         | DEVID_0       | R DEVID_0[7:0]        | R DEVID_0[7:0]        | R DEVID_0[7:0]        | R DEVID_0[7:0]        | R DEVID_0[7:0]        | R DEVID_0[7:0]        | R DEVID_0[7:0]        | R DEVID_0[7:0]        | R DEVID_0[7:0]        | 0xAD          |
| 0x01         | DEVID_1       | R DEVID_1[7:0]        | R DEVID_1[7:0]        | R DEVID_1[7:0]        | R DEVID_1[7:0]        | R DEVID_1[7:0]        | R DEVID_1[7:0]        | R DEVID_1[7:0]        | R DEVID_1[7:0]        | R DEVID_1[7:0]        | 0x1D          |
| 0x02         | PARTID        | R PARTID[7:0]         | R PARTID[7:0]         | R PARTID[7:0]         | R PARTID[7:0]         | R PARTID[7:0]         | R PARTID[7:0]         | R PARTID[7:0]         | R PARTID[7:0]         | R PARTID[7:0]         | 0xCB          |
| 0x03         | REVID         | R REVID[7:0]          | R REVID[7:0]          | R REVID[7:0]          | R REVID[7:0]          | R REVID[7:0]          | R REVID[7:0]          | R REVID[7:0]          | R REVID[7:0]          | R REVID[7:0]          | 0x00          |
| 0x04         | XID           | R XID[7:0]            | R XID[7:0]            | R XID[7:0]            | R XID[7:0]            | R XID[7:0]            | R XID[7:0]            | R XID[7:0]            | R XID[7:0]            | R XID[7:0]            | 0x00          |
| 0x05 to 0x17 | Reserved      | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         |               |
| 0x18         | SOFT_RESET    | R/W SOFT_RESET[7:0]   | R/W SOFT_RESET[7:0]   | R/W SOFT_RESET[7:0]   | R/W SOFT_RESET[7:0]   | R/W SOFT_RESET[7:0]   | R/W SOFT_RESET[7:0]   | R/W SOFT_RESET[7:0]   | R/W SOFT_RESET[7:0]   | R/W SOFT_RESET[7:0]   | 0x00          |
| 0x19 to 0x1D | Reserved      | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         |               |
| 0x1E         | OFSX          | R/W OFSX[7:0]         | R/W OFSX[7:0]         | R/W OFSX[7:0]         | R/W OFSX[7:0]         | R/W OFSX[7:0]         | R/W OFSX[7:0]         | R/W OFSX[7:0]         | R/W OFSX[7:0]         | R/W OFSX[7:0]         | 0x00          |
| 0x1F         | OFSY          | R/W OFSY[7:0]         | R/W OFSY[7:0]         | R/W OFSY[7:0]         | R/W OFSY[7:0]         | R/W OFSY[7:0]         | R/W OFSY[7:0]         | R/W OFSY[7:0]         | R/W OFSY[7:0]         | R/W OFSY[7:0]         | 0x00          |
| 0x20         | OFSZ          | R/W OFSZ[7:0]         | R/W OFSZ[7:0]         | R/W OFSZ[7:0]         | R/W OFSZ[7:0]         | R/W OFSZ[7:0]         | R/W OFSZ[7:0]         | R/W OFSZ[7:0]         | R/W OFSZ[7:0]         | R/W OFSZ[7:0]         | 0x00          |
| 0x21 to 0x23 | Reserved      | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         |               |
| 0x24         | THRESH_ACT    | R/W THRESH_ACT[7:0]   | R/W THRESH_ACT[7:0]   | R/W THRESH_ACT[7:0]   | R/W THRESH_ACT[7:0]   | R/W THRESH_ACT[7:0]   | R/W THRESH_ACT[7:0]   | R/W THRESH_ACT[7:0]   | R/W THRESH_ACT[7:0]   | R/W THRESH_ACT[7:0]   | 0x00          |
| 0x25         | THRESH_INACT  | R/W THRESH_INACT[7:0] | R/W THRESH_INACT[7:0] | R/W THRESH_INACT[7:0] | R/W THRESH_INACT[7:0] | R/W THRESH_INACT[7:0] | R/W THRESH_INACT[7:0] | R/W THRESH_INACT[7:0] | R/W THRESH_INACT[7:0] | R/W THRESH_INACT[7:0] | 0x00          |
| 0x26         | TIME_INACT    | R/W TIME_INACT[7:0]   | R/W TIME_INACT[7:0]   | R/W TIME_INACT[7:0]   | R/W TIME_INACT[7:0]   | R/W TIME_INACT[7:0]   | R/W TIME_INACT[7:0]   | R/W TIME_INACT[7:0]   | R/W TIME_INACT[7:0]   | R/W TIME_INACT[7:0]   | 0x00          |
| 0x27         | ACT_INACT_CTL | R/W                   | ACT_AC/DC             | ACT_X                 | ACT_Y                 | ACT_Z                 | INACT_AC/ DC          | INACT_X               | INACT_Y               | INACT_Z               | 0x00          |
| 0x28 to 0x2B | Reserved      | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         | RSVD Reserved         |               |
| 0x2C         | BW_RATE       | R/W                   | 0                     | 0                     | 0                     | LOW_POWER Rate[3:0]   | LOW_POWER Rate[3:0]   | LOW_POWER Rate[3:0]   | LOW_POWER Rate[3:0]   | LOW_POWER Rate[3:0]   | 0x0A          |
| 0x2D         | POWER_CTL     | R/W                   | 0                     | I2C_ DISABLE          | Link                  | AUTO_SLEEP            | Measure               | Sleep                 | Wake-up[1:0]          | Wake-up[1:0]          | 0x00          |
| 0x2E         | INT_ENABLE    | R/W                   | DATA_ READY           | 0                     | 0                     | Activity              | Inactivity            | 0                     | Watermark             | Overrun               | 0x00          |
| 0x2F         | INT_MAP       | R/W                   | DATA_ READY           | 0                     | 0                     | Activity              | Inactivity            | 0                     | Watermark             | Overrun               | 0x00          |
| 0x30         | INT_SOURCE    | RW                    | DATA_ READY           | 0                     | 0                     | Activity              | Inactivity            | 0                     | Watermark             | Overrun               | 0x02          |
| 0x31         | DATA_FORMAT   | R/W                   | SELF_TEST             | SPI                   | INT_ INVERT           | 0                     | FULL_RES              | Justify               | Range[1:0]            | Range[1:0]            | 0x00          |
| 0x32         | DATA_X0       | R DATA_X0[7:0]        | R DATA_X0[7:0]        | R DATA_X0[7:0]        | R DATA_X0[7:0]        | R DATA_X0[7:0]        | R DATA_X0[7:0]        | R DATA_X0[7:0]        | R DATA_X0[7:0]        | R DATA_X0[7:0]        | 0x00          |
| 0x33         | DATA_X1       | R DATA_X1[7:0]        | R DATA_X1[7:0]        | R DATA_X1[7:0]        | R DATA_X1[7:0]        | R DATA_X1[7:0]        | R DATA_X1[7:0]        | R DATA_X1[7:0]        | R DATA_X1[7:0]        | R DATA_X1[7:0]        | 0x00          |
| 0x34         | DATA_Y0       | R DATA_Y0[7:0]        | R DATA_Y0[7:0]        | R DATA_Y0[7:0]        | R DATA_Y0[7:0]        | R DATA_Y0[7:0]        | R DATA_Y0[7:0]        | R DATA_Y0[7:0]        | R DATA_Y0[7:0]        | R DATA_Y0[7:0]        | 0x00          |
| 0x35         | DATA_Y1       | R DATA_Y1[7:0]        | R DATA_Y1[7:0]        | R DATA_Y1[7:0]        | R DATA_Y1[7:0]        | R DATA_Y1[7:0]        | R DATA_Y1[7:0]        | R DATA_Y1[7:0]        | R DATA_Y1[7:0]        | R DATA_Y1[7:0]        | 0x00          |
| 0x36         | DATA_Z0       | R DATA_Z0[7:0]        | R DATA_Z0[7:0]        | R DATA_Z0[7:0]        | R DATA_Z0[7:0]        | R DATA_Z0[7:0]        | R DATA_Z0[7:0]        | R DATA_Z0[7:0]        | R DATA_Z0[7:0]        | R DATA_Z0[7:0]        | 0x00          |
| 0x37         | DATA_Z1       | R DATA_Z1[7:0]        | R DATA_Z1[7:0]        | R DATA_Z1[7:0]        | R DATA_Z1[7:0]        | R DATA_Z1[7:0]        | R DATA_Z1[7:0]        | R DATA_Z1[7:0]        | R DATA_Z1[7:0]        | R DATA_Z1[7:0]        | 0x00          |
| 0x38         | FIFO_CTL      | R/W FIFO_MODE[1:0]    | R/W FIFO_MODE[1:0]    | R/W FIFO_MODE[1:0]    | Trigger Samples[4:0]  | Trigger Samples[4:0]  | Trigger Samples[4:0]  | Trigger Samples[4:0]  | Trigger Samples[4:0]  | Trigger Samples[4:0]  | 0x00          |
| 0x39         | FIFO_STATUS   | R FIFO_TRIG 0 Entries | R FIFO_TRIG 0 Entries | R FIFO_TRIG 0 Entries | R FIFO_TRIG 0 Entries | R FIFO_TRIG 0 Entries | R FIFO_TRIG 0 Entries | R FIFO_TRIG 0 Entries | R FIFO_TRIG 0 Entries | R FIFO_TRIG 0 Entries | 0x00          |

## REGISTER MAP

## REGISTER DEFINITIONS

## Register 0x00-DEVID\_0 (Read Only)

| Table 16. Register 0x00   | Table 16. Register 0x00   | Table 16. Register 0x00   | Table 16. Register 0x00   | Table 16. Register 0x00   | Table 16. Register 0x00   | Table 16. Register 0x00   | Table 16. Register 0x00   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| 1                         | 0                         | 1                         | 0                         | 1                         | 1                         | 0                         | 1                         |

The DEVID\_0 register holds a fixed device ID identifying Analog Devices, Inc., as the device manufacturer. The default value of this register is 0xAD.

## Register 0x01-DEVID\_1 (Read Only)

| Table 17. Register 0x01   | Table 17. Register 0x01   | Table 17. Register 0x01   | Table 17. Register 0x01   | Table 17. Register 0x01   | Table 17. Register 0x01   | Table 17. Register 0x01   | Table 17. Register 0x01   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| 0                         | 0                         | 0                         | 1                         | 1                         | 1                         | 0                         | 1                         |

The DEVID\_1 register holds a fixed device ID that further enhances traceability of the ADXL313. The default value of this register is 0x1D.

## Register 0x02-PARTID (Read Only)

| Table 18. Register 0x02   | Table 18. Register 0x02   | Table 18. Register 0x02   | Table 18. Register 0x02   | Table 18. Register 0x02   | Table 18. Register 0x02   | Table 18. Register 0x02   | Table 18. Register 0x02   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| 1                         | 1                         | 0                         | 0                         | 1                         | 0                         | 1                         | 1                         |

The PARTID register identifies the device as an ADXL313. The default hexadecimal value stored in this register, 0xCB, is meant to be interpreted as an octal value that corresponds to 313. If the user does not read back 0xCB from this register, assume that the device under test is not an ADXL313 device.

## Register 0x03-REVID (Read Only)

| Table 19. Register 0x03   | Table 19. Register 0x03   | Table 19. Register 0x03   | Table 19. Register 0x03   | Table 19. Register 0x03   | Table 19. Register 0x03   | Table 19. Register 0x03   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D2                        | D1                        | D0                        |
| REVID[7:0]                | REVID[7:0]                | REVID[7:0]                | REVID[7:0]                | REVID[7:0]                | REVID[7:0]                | REVID[7:0]                |

The number contained in the REVID register represents the silicon revision of the ADXL313. This number is incremented for any major silicon revision.

## Register 0x04-XID (Read Only)

| Table 20. Register 0x04   | Table 20. Register 0x04   | Table 20. Register 0x04   | Table 20. Register 0x04   | Table 20. Register 0x04   | Table 20. Register 0x04   | Table 20. Register 0x04   | Table 20. Register 0x04   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
|                           |                           |                           |                           | XID[7:0]                  |                           |                           |                           |

The XID register stores a semiunique serial number that is generated from the device trim and calibration process.

## Register 0x18-SOFT\_RESET (Read/Write)

| Table 21. Register 0x18   | Table 21. Register 0x18   | Table 21. Register 0x18   | Table 21. Register 0x18   | Table 21. Register 0x18   | Table 21. Register 0x18   | Table 21. Register 0x18   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4 D3                     | D2                        | D1                        | D0                        |
|                           |                           |                           | SOFT_RESET[7:0]           |                           |                           |                           |

Writing a value of 0x52 to Register 0x18 triggers the soft reset function of the ADXL313. The soft reset returns the ADXL313 to the beginning of its power-on initialization routine, clearing the configuration settings that were written to the memory map, which allows easy reconfiguration of the ADXL313 device.

## Register 0x1E-OFSX (Read/Write), Register 0x1F-OFSY (Read/Write), Register 0x20OFSZ (Read/Write)

Table 22. Register 0x1E, Register 0x1F, and Register 0x20

| D7   | D6   | D5   | D3        | D2   | D1   | D0   |
|------|------|------|-----------|------|------|------|
|      |      |      | OFSX[7:0] |      |      |      |
|      |      |      | OFSY[7:0] |      |      |      |
|      |      |      | OFSZ[7:0] |      |      |      |

The OFSX, OFSY, and OFSZ registers are each eight bits and offer user set offset adjustments in twos complement format, with a scale factor of 3.9 m g /LSB (that is, 0x7F = 0.5 g ). The value stored in the offset registers is automatically added to the acceleration data, and the resulting value is stored in the output data registers.

## Register 0x24-THRESH\_ACT (Read/Write)

| Table 23. Register 0x24   | Table 23. Register 0x24   | Table 23. Register 0x24   | Table 23. Register 0x24   | Table 23. Register 0x24   | Table 23. Register 0x24   | Table 23. Register 0x24   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D2                        | D1                        | D0                        |
|                           | THRESH_ACT[7:0]           | THRESH_ACT[7:0]           | THRESH_ACT[7:0]           | THRESH_ACT[7:0]           |                           |                           |

The THRESH\_ACT register is eight bits and holds the threshold value for detecting activity. The data format is unsigned; therefore, the magnitude of the activity event is compared with the value in the THRESH\_ACT register. The scale factor is 15.625 m g /LSB. A value of 0 may result in undesirable behavior if the activity interrupt is enabled.

## Register 0x25-THRESH\_INACT (Read/Write)

| Table 24. Register 0x25   | Table 24. Register 0x25   | Table 24. Register 0x25   | Table 24. Register 0x25   | Table 24. Register 0x25   | Table 24. Register 0x25   | Table 24. Register 0x25   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D2                        | D1                        | D0                        |
| THRESH_INACT[7:0]         | THRESH_INACT[7:0]         | THRESH_INACT[7:0]         | THRESH_INACT[7:0]         | THRESH_INACT[7:0]         | THRESH_INACT[7:0]         | THRESH_INACT[7:0]         |

The THRESH\_INACT register is eight bits and holds the threshold value for detecting inactivity. The data format is unsigned; therefore, the magnitude of the inactivity event is compared with the value in the THRESH\_INACT register. The scale factor is 15.625 m g /LSB. A value of 0 may result in undesirable behavior if the inactivity interrupt is enabled.

## REGISTER MAP

## Register 0x26-TIME\_INACT (Read/Write)

| Table 25. Register 0x26   | Table 25. Register 0x26   | Table 25. Register 0x26   | Table 25. Register 0x26   | Table 25. Register 0x26   | Table 25. Register 0x26   | Table 25. Register 0x26   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4 D3                     | D2                        | D1                        | D0                        |
|                           |                           |                           | TIME_INACT[7:0]           |                           |                           |                           |

The TIME\_INACT register is eight bits and contains an unsigned time value. Acceleration must be less than the value in the THRESH\_INACT register for the amount of time represented by TIME\_INACT for inactivity to be declared. The scale factor is 1 sec/ LSB. Unlike the other interrupt functions, which use unfiltered data (see the Threshold section), the inactivity function uses filtered output data. At least one output sample must be generated for the inactivity interrupt to be triggered. This results in the function appearing unresponsive if the TIME\_INACT register is set to a value less than the time constant of the output data rate. A value of 0 results in an interrupt when the output data is less than the value in the THRESH\_INACT register.

## Register 0x27-ACT\_INACT\_CTL (Read/Write)

| D7                                  | D6                                  | D5                                  | D4                                  |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| ACT_AC/DC                           | ACT_X                               | ACT_Y                               | ACT_Z                               |
| Table 27. Register 0x27-Bits[D3:D0] | Table 27. Register 0x27-Bits[D3:D0] | Table 27. Register 0x27-Bits[D3:D0] | Table 27. Register 0x27-Bits[D3:D0] |
| D3                                  | D2                                  | D1                                  | D0                                  |
| INACT_AC/DC                         | INACT_X                             | INACT_Y                             | INACT_Z                             |

## ACT\_AC/DC and INACT\_AC/DC Bits

A setting of 0 selects dc-coupled operation, and a setting of 1 enables ac-coupled operation. In dc-coupled operation, the current acceleration magnitude is compared directly with THRESH\_ACT and THRESH\_INACT to determine whether activity or inactivity is detected.

In ac-coupled operation for activity detection, the acceleration value at the start of activity detection is taken as a reference value. New samples of acceleration are then compared to this reference value and, if the magnitude of the difference exceeds the THRESH\_ACT value, the device triggers an activity interrupt.

Similarly, in ac-coupled operation for inactivity detection, a reference value is used for comparison and is updated whenever the device exceeds the inactivity threshold. After the reference value is selected, the device compares the magnitude of the difference between the reference value and the current acceleration with THRESH\_INACT. If the difference is less than the value in THRESH\_INACT for the time in TIME\_INACT, the device is considered inactive and the inactivity interrupt is triggered.

## ACT\_x and INACT\_x Bits

A setting of 1 enables x-, y-, or z-axis participation in detecting activity or inactivity. A setting of 0 excludes the selected axis from participation. If all axes are excluded, the function is disabled. For activity detection, all participating axes are logically OR'ed, causing the activity function to trigger when any of the participating axes exceeds the threshold. For inactivity detection, all participating axes are logically AND'ed, causing the inactivity function to trigger only if all participating axes are below the threshold for the specified period of time.

## Register 0x2C-BW\_RATE (Read/Write)

Table 28. Register 0x2C

|   D7 |   D6 |   D5 | D4        | D3   | D2   | D1   | D0   |
|------|------|------|-----------|------|------|------|------|
|    0 |    0 |    0 | LOW_POWER |      | Rate |      |      |

## LOW\_POWER Bit

A setting of 0 in the LOW\_POWER bit selects normal operation, and a setting of 1 selects reduced power operation, which has somewhat higher noise (see the Power Modes section for details).

## Rate Bits

These bits select the device bandwidth and output data rate (see Table 7 and Table 8 for details). The default value is 0x0A, which translates to a 100 Hz output data rate. Select an output data rate that is appropriate for the communication protocol and frequency selected. Selecting too high of an output data rate with a low communication speed results in samples being discarded.

## Register 0x2D-POWER\_CTL (Read/Write)

| Table 29. Register 0x2D-Bits[D7:D4]   | Table 29. Register 0x2D-Bits[D7:D4]   | Table 29. Register 0x2D-Bits[D7:D4]   | Table 29. Register 0x2D-Bits[D7:D4]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| 0                                     | I2C_DISABLE                           | Link                                  | AUTO_SLEEP                            |
| Table 30. Register 0x2D-Bits[D3:D0]   | Table 30. Register 0x2D-Bits[D3:D0]   | Table 30. Register 0x2D-Bits[D3:D0]   | Table 30. Register 0x2D-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| Measure                               | Sleep                                 | Wake-up                               |                                       |

## I2C\_Disable Bit

The ADXL313 is capable of communicating via SPI or I 2 C transmission protocols. Typically, these protocols do not overlap; however, situations may arise where SPI transactions can imitate an I 2 C start command. This causes the ADXL313 to respond unexpectedly, causing a communications issue with other devices on the network. To ensure that the ADXL313 does not interpret SPI commands as an I 2 C start condition, assert the I2C\_Disable bit.

## Link Bit

A setting of 1 in the link bit with both the activity and inactivity functions enabled delays the start of the activity function until inactivity is detected. After activity is detected, inactivity detection begins, preventing the detection of activity. This bit serially links the activity and inactivity functions. When this bit is set to 0, the inactivity

## REGISTER MAP

and activity functions are concurrent. Additional information can be found in the Link Mode section.

When clearing the link bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the link bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## AUTO\_SLEEP Bit

If the link bit is set, a setting of 1 in the AUTO\_SLEEP bit sets the ADXL313 to switch to sleep mode when inactivity is detected (that is, when acceleration is below the THRESH\_INACT value for at least the time indicated by TIME\_INACT). A setting of 0 disables automatic switching to sleep mode. See the description of the sleep bit in the Sleep Bit section for more information.

When clearing the AUTO\_SLEEP bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the AUTO\_SLEEP bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Measure Bit

A setting of 0 in the measure bit places the part into standby mode, and a setting of 1 places the part into measurement mode. The ADXL313 powers up in standby mode with minimum power consumption.

## Sleep Bit

A setting of 0 in the sleep bit puts the part into the normal mode of operation, and a setting of 1 places the part into sleep mode. Sleep mode suppresses DATA\_READY (see Register 0x2E, Register 0x2F, and Register 0x30), stops transmission of data to the FIFO, and switches the sampling rate to one specified by the wake-up bits. In sleep mode, only the activity function can be used.

When clearing the sleep bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the sleep bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Wake-Up Bits

These bits control the frequency of readings in sleep mode as described in Table 31.

Table 31. Frequency of Readings in Sleep Mode

| Setting   | Setting   |                |
|-----------|-----------|----------------|
| D1        | D0        | Frequency (Hz) |
| 0         | 0         | 8              |
| 0         | 1         | 4              |
| 1         | 0         | 2              |
| 1         | 1         | 1              |

## Register 0x2E-INT\_ENABLE (Read/Write)

| Table 32. Register 0x2E-Bits[D7:D4]   | Table 32. Register 0x2E-Bits[D7:D4]   | Table 32. Register 0x2E-Bits[D7:D4]   | Table 32. Register 0x2E-Bits[D7:D4]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| DATA_READY                            | 0                                     | 0                                     | Activity                              |
| Table 33. Register 0x2E-Bits[D3:D0]   | Table 33. Register 0x2E-Bits[D3:D0]   | Table 33. Register 0x2E-Bits[D3:D0]   | Table 33. Register 0x2E-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| Inactivity                            | 0                                     | Watermark                             | Overrun                               |

Setting bits in this register to a value of 1 enables their respective functions to generate interrupts, whereas a value of 0 prevents the functions from generating interrupts. The DATA\_READY, watermark, and overrun bits enable only the interrupt output; the functions are always enabled. It is recommended that interrupts be configured before enabling their outputs.

## Register 0x2F-INT\_MAP (Read/Write)

| Table 34. Register 0x2F-Bits[D7:D4]   | Table 34. Register 0x2F-Bits[D7:D4]   | Table 34. Register 0x2F-Bits[D7:D4]   | Table 34. Register 0x2F-Bits[D7:D4]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| DATA_READY                            | 0                                     | 0                                     | Activity                              |
| Table 35. Register 0x2F-Bits[D3:D0]   | Table 35. Register 0x2F-Bits[D3:D0]   | Table 35. Register 0x2F-Bits[D3:D0]   | Table 35. Register 0x2F-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| Inactivity                            | 0                                     | Watermark                             | Overrun                               |

Any bits set to 0 in this register send their respective interrupts to the INT1 pin, whereas bits set to 1 send their respective interrupts to the INT2 pin. All selected interrupts for a given pin are OR'ed.

## Register 0x30-INT\_SOURCE (Read Only)

| Table 36. Register 0x30-Bits[D7:D4]   | Table 36. Register 0x30-Bits[D7:D4]   | Table 36. Register 0x30-Bits[D7:D4]   | Table 36. Register 0x30-Bits[D7:D4]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| DATA_READY                            | 0                                     | 0                                     | Activity                              |
| Table 37. Register 0x30-Bits[D3:D0]   | Table 37. Register 0x30-Bits[D3:D0]   | Table 37. Register 0x30-Bits[D3:D0]   | Table 37. Register 0x30-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| Inactivity                            | 0                                     | Watermark                             | Overrun                               |

Bits set to 1 in this register indicate that their respective functions have triggered an event, whereas a value of 0 indicates that the corresponding event has not occurred. The DATA\_READY, watermark, and overrun bits are always set if the corresponding events occur, regardless of the INT\_ENABLE register settings, and

## REGISTER MAP

are cleared by reading data from the DATA\_Xx, DATA\_Yx, and DATA\_Zx registers. The DATA\_READY and watermark bits may require multiple reads, as indicated in the FIFO mode descriptions in the FIFO section. Other bits, and the corresponding interrupts, are cleared by reading the INT\_SOURCE register.

## Register 0x31-DATA\_FORMAT (Read/Write)

Table 38. Register 0x31

| D7        | D6   | D5         |   D4 | D3       | D2      | D1   | D0    |
|-----------|------|------------|------|----------|---------|------|-------|
| SELF_TEST | SPI  | INT_INVERT |    0 | FULL_RES | Justify |      | Range |

The DATA\_FORMAT register controls the presentation of data to Register 0x32 through Register 0x37. All data, except that for the ±4 g range, must be clipped to avoid rollover.

## SELF\_TEST Bit

A setting of 1 in the SELF\_TEST bit applies a self test force to the sensor, causing a shift in the output data. A value of 0 disables the self test force.

## SPI Bit

A value of 1 in the SPI bit sets the device to 3-wire SPI mode, and a value of 0 sets the device to 4-wire SPI mode.

## INT\_INVERT Bit

A value of 0 in the INT\_INVERT bit sets the interrupts to active high, and a value of 1 sets the interrupts to active low.

## FULL\_RES Bit

When this bit is set to a value of 1, the device is in full resolution mode, where the output resolution increases with the g range set by the range bits to maintain 1024 LSB/ g sensitivity. When the FULL\_RES bit is set to 0, the device is in 10-bit mode, and the range bits determine the maximum g range and scale factor.

## Justify Bit

A setting of 1 in the justify bit selects left (MSB) justified mode, and a setting of 0 selects right justified (LSB) mode with sign extension.

## Range Bits

These bits set the g range as described in Table 39.

| Setting   | Setting   | Range Setting Range (g)   |
|-----------|-----------|---------------------------|
| D1        | D0        | Range Setting Range (g)   |
| 0         | 0         | ±0.5                      |
| 0         | 1         | ±1                        |
| 1         | 0         | ±2                        |
| 1         | 1         | ±4                        |

Register 0x32 and Register 0x33-DATA\_X0, DATA\_X1 (Read Only), Register 0x34 and Register 0x35-DATA\_Y0, DATA\_Y1 (Read Only), Register 0x36 and Register 0x37-DATA\_Z0, DATA\_Z1 (Read Only)

Table 40. Register 0x32 and Register 0x33

| D3           |
|--------------|
| DATA_X0[7:0] |
| DATA_X1[7:0] |
| DATA_Y0[7:0] |
| DATA_Y1[7:0] |
| DATA_Z0[7:0] |
| DATA_Z1[7:0] |

These six bytes (Register 0x32 to Register 0x37) are eight bits each and hold the output data for each axis. Register 0x32 and Register 0x33 hold the output data for the x-axis, Register 0x34 and Register 0x35 hold the output data for the y-axis, and Register 0x36 and Register 0x37 hold the output data for the z-axis.

The output data is twos complement, with DATA\_x0 as the least significant byte and DATA\_x1 as the most significant byte, where x represents X, Y, or Z. The DATA\_FORMAT register (Address 0x31) controls the format of the data. It is recommended that a multiple-byte read of all registers be performed to prevent a change in data between reads of sequential registers.

## Register 0x38-FIFO\_CTL (Read/Write)

Table 41. Register 0x38

| D7 D6     | D5      | D2      | D1   | D0   |
|-----------|---------|---------|------|------|
| FIFO_MODE | Trigger | Samples |      |      |

## FIFO\_MODE Bits

These bits set the FIFO mode, as described in Table 42.

Table 42. FIFO Modes

| Setting   | Setting   |         |                                                                                                                                                                                                 |
|-----------|-----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D7        | D6        | Mode    | Function                                                                                                                                                                                        |
| 0         | 0         | Bypass  | FIFO is bypassed.                                                                                                                                                                               |
| 0         | 1         | FIFO    | FIFO collects up to 32 values and then stops collect- ing data, collecting new data only when FIFO is not full.                                                                                 |
| 1         | 0         | Stream  | FIFO holds the last 32 data values. When FIFO is full, the oldest data is overwritten with newer data.                                                                                          |
| 1         | 1         | Trigger | When triggered by the trigger bit, FIFO holds the last data samples before the trigger event and then contin- ues to collect data until full. New data is collected only when FIFO is not full. |

## REGISTER MAP

## Trigger Bit

A value of 0 in the trigger bit links the trigger event to INT1, and a value of 1 links the trigger event to INT2.

## Samples Bits

The function of these bits depends on the FIFO mode selected (see Table 43). Entering a value of 0 in the samples bits immediately sets the watermark status bit in the INT\_SOURCE register, regardless of which FIFO mode is selected. Undesirable operation may occur if a value of 0 is used for the samples bits when trigger mode is used.

Table 43. Samples Bits Functions

| FIFO Mode   | Samples Bits Function                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| Bypass      | None.                                                                                   |
| FIFO        | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Stream      | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Trigger     | Specifies how many FIFO samples are retained in the FIFO buffer before a trigger event. |

## Register 0x39-FIFO\_STATUS (Read Only)

## Table 44. Register 0x39

| D7        |   D6 | D5   | D3   | D2      | D1   | D0   |
|-----------|------|------|------|---------|------|------|
| FIFO_TRIG |    0 |      |      | Entries |      |      |

## FIFO\_TRIG Bit

A 1 in the FIFO\_TRIG bit corresponds to a trigger event occurring, and a 0 means that a FIFO trigger event has not occurred.

## Entries Bits

These bits report how many data values are stored in the FIFO. Access to collect the data from the FIFO is provided through the DATA\_Xx, DATA\_Yx, and DATA\_Zx registers. FIFO reads must be done in burst or multiple-byte mode because each FIFO level is cleared after any read (single- or multiple-byte) of the FIFO. The FIFO stores a maximum of 32 entries, which equates to a maximum of 33 entries available at any given time because an additional entry is available at the output filter of the device.

## APPLICATIONS INFORMATION

## POWER SUPPLY DECOUPLING

A 1 μF tantalum capacitor (C S ) at V S and a 0.1 μF ceramic capacitor (C I/O ) at V DD I/O placed close to the ADXL313 supply pins is recommended to adequately decouple the accelerometer from noise on the power supply. If additional decoupling is necessary, a resistor or ferrite bead, no larger than 100 Ω, in series with V S may be helpful. Additionally, increasing the bypass capacitance on VS  to a 10 μF tantalum capacitor in parallel with a 0.1 μF ceramic capacitor may also improve noise.

Take care to ensure that the connection from the ADXL313 ground to the power supply ground has low impedance because noise transmitted through ground has an effect similar to noise transmitted through V S . It is recommended that V S and V DD I/O be separate supplies to minimize digital clocking noise on the V S supply. If this is not possible, additional filtering of the supplies as previously mentioned may be necessary.

Figure 24. Application Diagram

<!-- image -->

## MECHANICAL CONSIDERATIONS FOR MOUNTING

Mount the ADXL313 on the PCB in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL313 at an unsupported PCB location, as shown in Figure 25, may result in large, apparent measurement errors due to undamped PCB vibration. Placing the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is above the accelerometer's mechanical sensor resonant frequency and, therefore, effectively invisible to the accelerometer. Multiple mounting points close to the sensor and/or a thicker PCB also help to reduce the effect of system resonance on the performance of the sensor.

Figure 25. Incorrectly Placed Accelerometers

<!-- image -->

## ASYNCHRONOUS DATA READINGS

Asynchronous readings of acceleration data can lead to accessing the acceleration data registers (Address 0x32 to Address 0x37) while they are being updated. To avoid this, it is recommended to either enable stream mode (see Table 42), or to synchronize the SPI/I 2 C transaction to the DATA\_READY interrupt functionality, so that the host processor samples immediately after the DA-TA\_READY interrupt goes high.

## THRESHOLD

The lower output data rates are achieved by decimating a common sampling frequency inside the device. The activity detection function is performed using undecimated data. Because the bandwidth of the output data varies with the data rate and is lower than the bandwidth of the undecimated data, the high frequency and high g data that are used to determine activity may not be present if the output of the accelerometer is examined. This may result in functions triggering when acceleration data does not appear to meet the conditions set by the user for the corresponding function.

## LINK MODE

The function of the link bit in the POWER\_CTL register (Address 0x2D) is to reduce the number of activity interrupts that the processor must service by setting the device to look for activity only after inactivity. For proper operation of this feature, the processor must still respond to the activity and inactivity interrupts by reading the INT\_SOURCE register (Address 0x30) and, therefore, clearing the interrupts. If an activity interrupt is not cleared, the part cannot go into autosleep mode.

## SLEEP MODE VS. LOW POWER MODE

In applications where a low data rate and low power consumption are desired (at the expense of noise performance), it is recommended that low power mode be used. The use of low power mode preserves the functionality of the DATA\_READY interrupt and the FIFO for postprocessing of the acceleration data. Sleep mode, while offering a low data rate and low power consumption, is not intended for data acquisition.

However, when sleep mode is used in conjunction with the autosleep mode and the link mode, the part can automatically switch to a low power, low sampling rate mode when inactivity is detected. To prevent the generation of redundant inactivity interrupts, the inactivity interrupt is automatically disabled and activity is enabled. When the ADXL313 is in sleep mode, the host processor can also be placed into sleep mode or low power mode to save significant system power. When activity is detected, the accelerometer automatically switches back to the original data rate of the application and provides an activity interrupt that can be used to wake up the host processor. Similar to when inactivity occurs, detection of activity events is disabled and inactivity is enabled.

## APPLICATIONS INFORMATION

## USING SELF TEST

The self test change is defined as the difference between the acceleration output of an axis with self test enabled and the acceleration output of the same axis with self test disabled (see Endnote 4 of Table 1). This definition assumes that the sensor does not move between these two measurements because, if the sensor moves, a nonself test related shift corrupts the test.

Proper configuration of the ADXL313 is also necessary for an accurate self test measurement. Set the part with a data rate greater than or equal to 100 Hz. This is done by ensuring that a value greater than or equal to 0x0A is written into the rate bits (Bit D3 through Bit D0) in the BW\_RATE register (Address 0x2C). The part must also be placed into normal power operation by ensuring that the LOW\_POWER bit in the BW\_RATE register is cleared (LOW\_POWER bit = 0) for accurate self test measurements. It is recommended that the part be set to full resolution, ±4 g mode to ensure that there is sufficient dynamic range for the entire self test shift. This is done by setting Bit D3 of the DATA\_FORMAT register (Address 0x31) and writing a value of 0x03 to the range bits (Bit D1 and Bit D0) of the DATA\_FORMAT register. This results in a high dynamic range for measurement and 1024 LSB/ g sensitivity.

After the part is configured for accurate self test measurement, several samples of x-, y-, and z-axis acceleration data should be retrieved from the sensor and averaged together. The number of samples averaged is a choice of the system designer, but a recommended starting point is 0.1 sec worth of data, which corresponds to 10 samples at 100 Hz data rate. Store and label the averaged values appropriately as the self test disabled data, that is, X ST\_OFF , YST\_OFF , and Z ST\_OFF .

Next, enable self test by setting Bit D7 of the DATA\_FORMAT register (Address 0x31). The output needs some time (about four samples) to settle after enabling self test. After allowing the output to settle, take several samples of the x-, y-, and z-axis acceleration data, and average them. It is recommended that the same number of samples be taken for this average as was previously taken. Store and label these averaged values appropriately as the value with self test enabled, that is, X ST\_ON , Y ST\_ON , and Z ST\_ON . Self test can then be disabled by clearing Bit D7 of the DATA\_ FORMAT register (Address 0x31).

With the stored values for self test enabled and disabled, the self test change is as follows:

<!-- formula-not-decoded -->

Because the measured output for each axis is expressed in LSBs, XST , Y ST , and Z ST are also expressed in LSBs. These values can be converted to acceleration ( g ) by multiplying each value by the sensitivity, 1024 LSB/ g, when configured for full resolution mode. When operating in 10-bit mode, the self test delta in LSBs varies according to the selected g range, even though the self test force, in g , remains unchanged. Using a range below ±4 g may result in insufficient dynamic range and should be considered when selecting the range of operation for measuring self test.

If the self test change is within the valid range, the test is considered successful. Generally, a part is considered to pass if the minimum magnitude of change is achieved. However, a part that changes by more than the maximum magnitude is not necessarily a failure.

## 3200 HZ AND 1600 HZ ODR DATA FORMATTING

The following section applies for 3200 Hz and 1600 Hz output data rates only. This section can be ignored for all other data rates.

For 3200 Hz and 1600 Hz output data rates, when the ADXL313 is configured for either a ±0.5 g output range or the full resolution mode is enabled, the LSB of the output data-word is always 0. If the acceleration data-word is right justified, this corresponds to Bit D0 of the DATA\_x0 register, as shown in Figure 26 and Table 45.

When data is left justified and the part is operating in ±0.5 g mode, the LSB of the output data-word is Bit D6 of the DATAx0 register. In full resolution operation, the location of the LSB changes according to the selected output range. Table 45 and Figure 27 demonstrate how the position of the LSB changes when full resolution mode is enabled.

Table 45. Conditions for Which the LSB Is Set to 0 (3200 Hz and 1600 Hz Output Data Rates Only)

|   Justify (0x31[2]) | FULL_RES (0x31[3])   | Range ( g )   | LSB Bit Position   |
|---------------------|----------------------|---------------|--------------------|
|                   0 | 0 or 1               | ±0.5          | D0                 |
|                   0 | 1                    | ±1            | D0                 |
|                   0 | 1                    | ±2            | D0                 |
|                   0 | 1                    | ±4            | D0                 |
|                   1 | 0 or 1               | ±0.5          | D6                 |
|                   1 | 1                    | ±1            | D5                 |
|                   1 | 1                    | ±2            | D4                 |
|                   1 | 1                    | ±4            | D3                 |

The use of 3200 Hz and 1600 Hz output data rates for fixed 10-bit operation in the ±1 g , ±2 g , and ±4 g output ranges provides an LSB that is valid and that changes according to the applied acceleration. Therefore, in these modes of operation, Bit D0 is not always 0 when output data is right justified, and Bit D6 is not always 0 when output data is left justified.

## APPLICATIONS INFORMATION

Figure 27. Left Justified Data Formatting: 3200 Hz and 1600 Hz Output Data Rate

<!-- image -->

## AXES OF ACCELERATION SENSITIVITY

Figure 28. Axes of Acceleration Sensitivity (Corresponding Output Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Figure 29. Output Response vs. Orientation to Gravity

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description                      | Packing Quantity   | Package Option   |
|------------------|---------------------|------------------------------------------|--------------------|------------------|
| ADXL313WACPZ-RL  | -40°C to +105°C     | 32-Lead LFCSP (5mm x 5mm x 1.55mm w/ EP) | Reel, 4000         | CP-32-17         |
| ADXL313WACPZ-RL7 | -40°C to +105°C     | 32-Lead LFCSP (5mm x 5mm x 1.55mm w/ EP) | Reel, 1000         | CP-32-17         |

## EVALUATION BOARDS

| Model 1        | Description      |
|----------------|------------------|
| EVAL-ADXL313-Z | Evaluation Board |

## AUTOMOTIVE PRODUCTS

The ADXL313W models are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the commercial models; therefore, designers should review the Specifications section of this data sheet carefully. Only the automotive grade products shown are available for use in automotive

Figure 30. 32-Lead Lead Frame Chip Scale Package [LFCSP] 5 mm × 5 mm Body, Thick Quad (CP-32-17) Dimensions shown in millimeters

<!-- image -->

Figure 31. Sample Solder Pad Layout (Land Pattern)

<!-- image -->

Updated: September 04, 2022

## OUTLINE DIMENSIONS

applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->