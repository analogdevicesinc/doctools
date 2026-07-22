<!-- lastmod 2022-09-21 -->
<!-- image -->

## FEATURES

- Ultralow power: as low as 57 µA in measurement mode and 0.1 µA in standby mode at V S = 3.3 V (typical)
- Power consumption scales automatically with bandwidth
- User-selectable resolution
- Fixed 10-bit resolution
- Full resolution, where resolution increases with g range, up to 13-bit resolution at ±12 g (maintaining 2.9 mg/LSB scale factor in all g ranges )
- Embedded FIFO technology minimizes host processor load
- Built-in motion detection functions for activity/inactivity monitoring
- Supply and I/O voltage range: 2.0 V to 3.6 V
- SPI (3- and 4-wire) and I 2 C digital interfaces
- Flexible interrupt modes mappable to either interrupt pin
- Measurement ranges selectable via serial command
- Bandwidth selectable via serial command
- Wide temperature range (-40 to +105°C)
- 10,000 g shock survival
- Pb free/RoHS compliant
- Small and thin: 5 mm × 5 mm × 1.45 mm LFCSP package
- Qualified for automotive applications

## APPLICATIONS

- Car alarm
- Hill start aid (HSA)
- Electronic parking brake
- Data recorder (black box)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. ADXL312 Simplified Block Diagram

<!-- image -->

1 Protected by U.S. Patent 8,156,264B2.

<!-- image -->

Rev. C

<!-- image -->

## 3-Axis, ±1.5 g/±3 g/±6/ g/±12 g Digital Accelerometer

## GENERAL DESCRIPTION

The ADXL312 1  is a small, thin, low power, 3-axis accelerometer with high resolution (13-bit) measurement up to ±12 g . Digital output data is formatted as 16-bit twos complement and is accessible through either a serial port interface (SPI) (3- or 4-wire) or I 2 C digital interface.

The ADXL312 is well suited for car alarm or black box applications. It measures the static acceleration of gravity in tilt-sensing applications, as well as dynamic acceleration resulting from motion or shock. Its high resolution (2.9 m g /LSB) enables resolution of inclination changes of as little as 0.25°. A built-in FIFO facilitates using oversampling techniques to improve resolution to as little as 0.05° of inclination.

Several special sensing functions are provided. Activity and inactivity sensing detects the presence or absence of motion and whether the acceleration on any axis exceeds a user-set level. These functions can be mapped to interrupt output pins. An integrated 32 level FIFO can be used to store data to minimize host processor intervention.

Low power modes enable intelligent motion-based power management with threshold sensing and active acceleration measurement at extremely low power dissipation.

The ADXL312 is supplied in a small, thin 5 mm × 5 mm × 1.45 mm, 32-lead, LFCSP package.

## TABLE OF CONTENTS

| Features................................................................ Applications...........................................................                                                                                                                                      | 1                                                                                                                                                                                                                                                                                     | FIFO.................................................................17                                                                                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                                                                                                                                                                                                                                                                     | Self-Test...........................................................                                                                                                                                                                                                                  | 18                                                                                                                                                                                                                                                                                    |
| General Description...............................................1                                                                                                                                                                                                                   | Register Map.......................................................                                                                                                                                                                                                                   | 19                                                                                                                                                                                                                                                                                    |
| Functional Block Diagram......................................1                                                                                                                                                                                                                       | Register Definitions..........................................19                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                       |
| Specifications........................................................ 3                                                                                                                                                                                                              | Applications Information......................................                                                                                                                                                                                                                        | 24                                                                                                                                                                                                                                                                                    |
| Absolute Maximum Ratings...................................5                                                                                                                                                                                                                          | Power Supply Decoupling................................24                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                       |
| Thermal Resistance........................................... 5                                                                                                                                                                                                                       | Mechanical Considerations for Mounting.........24                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                       |
| Solder Profile......................................................5                                                                                                                                                                                                                 | Asynchronous Data Readings..........................24                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                       |
| ESD Caution.......................................................5                                                                                                                                                                                                                   | Threshold.........................................................                                                                                                                                                                                                                    | 24                                                                                                                                                                                                                                                                                    |
| Pin Configuration and Function Descriptions........ 6                                                                                                                                                                                                                                 | Link Mode.........................................................24                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                       |
| Typical Performance Characteristics.....................7                                                                                                                                                                                                                             | Sleep Mode vs. Low Power Mode....................24                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                       |
| Theory of Operation.............................................10                                                                                                                                                                                                                    | Using Self-Test.................................................25                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                       |
| Power Sequencing...........................................10                                                                                                                                                                                                                         | Data Formatting of Upper Data Rates..............25                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                       |
| Power Savings................................................. 10                                                                                                                                                                                                                     | Noise Performance...........................................26                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                       |
| Serial Communications........................................12                                                                                                                                                                                                                       | Axes of Acceleration Sensitivity.......................                                                                                                                                                                                                                               | 27                                                                                                                                                                                                                                                                                    |
| Serial Port I/O Default states............................12                                                                                                                                                                                                                          | Outline Dimensions.............................................                                                                                                                                                                                                                       | 28                                                                                                                                                                                                                                                                                    |
| SPI....................................................................12                                                                                                                                                                                                             | Ordering Guide.................................................28                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                       |
| I 2 C.................................................................... 14                                                                                                                                                                                                          | Evaluation Boards............................................28                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                       |
| Interrupts..........................................................16                                                                                                                                                                                                                | Automotive Products........................................29                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                       |
| REVISION HISTORY                                                                                                                                                                                                                                                                      | REVISION HISTORY                                                                                                                                                                                                                                                                      | REVISION HISTORY                                                                                                                                                                                                                                                                      |
| 9/2022-Rev. B to Rev. C                                                                                                                                                                                                                                                               | 9/2022-Rev. B to Rev. C                                                                                                                                                                                                                                                               | 9/2022-Rev. B to Rev. C                                                                                                                                                                                                                                                               |
| Moved Solder Profile Section, Figure 2, and Table 4.......................................................................................5                                                                                                                                           | Moved Solder Profile Section, Figure 2, and Table 4.......................................................................................5                                                                                                                                           | Moved Solder Profile Section, Figure 2, and Table 4.......................................................................................5                                                                                                                                           |
| Changes to Figure 25, Figure 26, and Figure 27...........................................................................................14 Added Asynchronous Data Readings Section...............................................................................................24 | Changes to Figure 25, Figure 26, and Figure 27...........................................................................................14 Added Asynchronous Data Readings Section...............................................................................................24 | Changes to Figure 25, Figure 26, and Figure 27...........................................................................................14 Added Asynchronous Data Readings Section...............................................................................................24 |

## SPECIFICATIONS

TA = -40°C to +105°C, V S = V DD I/O = 3.3 V, acceleration = 0 g , unless otherwise noted.

Table 1. Specifications

| Parameter 1                           | Test Conditions/Comments                         |   Min | Typ            | Max   | Unit     |
|---------------------------------------|--------------------------------------------------|-------|----------------|-------|----------|
| SENSOR INPUT                          | Each axis                                        |       |                |       |          |
| Measurement Range                     | User selectable                                  |       | ±1.5, 3, 6, 12 |       | g        |
| Nonlinearity                          | Percentage of full scale                         |       | ±0.5           |       | %        |
| Inter-Axis Alignment Error            |                                                  |       | ±0.1           |       | Degrees  |
| Cross-Axis Sensitivity 2              |                                                  |       | ±1             |       | %        |
| OUTPUT RESOLUTION                     | Each axis                                        |       |                |       |          |
| All g Ranges                          | Default resolution                               |       | 10             |       | Bits     |
| ±1.5 g Range                          | Full resolution enabled                          |       | 10             |       | Bits     |
| ±3 g Range                            | Full resolution enabled                          |       | 11             |       | Bits     |
| ±6 g Range                            | Full resolution enabled                          |       | 12             |       | Bits     |
| ±12 g Range                           | Full resolution enabled                          |       | 13             |       | Bits     |
| SENSITIVITY                           | Each axis                                        |       |                |       |          |
| Scale Factor at X OUT , Y OUT , Z OUT | ±1.5 g , 10-bit or full resolution               |   2.6 | 2.9            | 3.2   | m g/ LSB |
| Scale Factor at X OUT , Y OUT , Z OUT | ±3 g , 10-bit resolution                         |   5.2 | 5.8            | 6.4   | m g /LSB |
| Scale Factor at X OUT , Y OUT , Z OUT | ±6 g, 10-bit resolution                          |  10.4 | 11.6           | 12.8  | m g /LSB |
| Scale Factor at X OUT , Y OUT , Z OUT | ±12 g , 10-bit resolution                        |  20.9 | 23.2           | 25.5  | m g /LSB |
| Sensitivity at X OUT , Y OUT , Z OUT  | ±1.5 g , 10-bit or full resolution               |   312 | 345            | 385   | LSB/ g   |
| Sensitivity at X OUT , Y OUT , Z OUT  | ±3 g , 10-bit resolution                         |   156 | 172            | 192   | LSB/ g   |
| Sensitivity at X OUT , Y OUT , Z OUT  | ±6 g , 10-bit resolution                         |    78 | 86             | 96    | LSB/ g   |
| Sensitivity at X OUT , Y OUT , Z OUT  | ±12 g , 10-bit resolution                        |    39 | 43             | 48    | LSB/ g   |
| Sensitivity Change Due to Temperature |                                                  |       | ±0.01          |       | %/°C     |
| 0 g BIAS LEVEL                        | Each axis                                        |       |                |       |          |
| Initial 0 g Output                    | T = 25°C, X OUT , Y OUT                          |  -150 |                | +150  | m g      |
| Initial 0 g Output                    | T = 25°C, Z OUT                                  |  -250 |                | +250  | m g      |
| 0 g Output over Temperature           | -40°C < T < 105°C, X OUT , Y OUT , Z OUT         |  -250 |                | +250  | m g      |
| 0 g Offset Tempco                     | X OUT , Y OUT                                    |       | ±0.8           |       | m g /°C  |
| 0 g Offset Tempco                     | Z OUT                                            |       | ±1.5           |       | m g /°C  |
| NOISE PERFORMANCE                     |                                                  |       |                |       |          |
| Noise Density (X-, Y-axes)            |                                                  |   200 | 340            | 440   | µ g /√Hz |
| Noise Density (Z-axis)                |                                                  |   200 | 470            | 595   | µ g /√Hz |
| OUTPUT DATA RATE/BANDWIDTH            | User selectable                                  |       |                |       |          |
| Measurement Rate 3                    |                                                  |  6.25 |                | 3200  | Hz       |
| SELF-TEST 4                           | Data rate ≥ 100 Hz, 2.0 ≤ V S ≤ 3.6              |       |                |       |          |
| Output Change in X-Axis               |                                                  |  0.20 |                | 2.10  | g        |
| Output Change in Y-Axis               |                                                  | -2.10 |                | -0.20 | g        |
| Output Change in Z-Axis               |                                                  |  0.30 |                | 3.40  | g        |
| Operating Voltage Range (V S )        |                                                  |   2.0 |                | 3.6   | V        |
| Interface Voltage Range (V DD I/O )   |                                                  |   1.7 |                | V S   | V        |
| Supply Current                        | Data rate > 100 Hz                               |   100 | 170            | 300   | µA       |
|                                       | Data rate < 10 Hz                                |    30 | 55             | 110   | µA       |
| Standby Mode Leakage Current          | T = 25°C Over entire operating temperature range |       | 0.1            | 2 17  | µA µA    |
| Turn-On (Wake-Up) Time 5              |                                                  |       | 1.4            |       | ms       |
| TEMPERATURE                           |                                                  |       |                |       |          |

## SPECIFICATIONS

## Table 1. Specifications

| Parameter 1                 | Test Conditions/Comments   |   Min | Typ   |   Max | Unit   |
|-----------------------------|----------------------------|-------|-------|-------|--------|
| Operating Temperature Range |                            |   -40 |       |  +105 | °C     |

- 4 Self-test change is defined as the output ( g ) when the SELF\_TEST bit = 1 (in the DATA\_FORMAT register) minus the output ( g ) when the SELF\_TEST bit = 0 (in the DATA\_FORMAT register). Due to device filtering, the output reaches its final value after 4 × τ when enabling or disabling self-test, where τ = 1/(data rate).
- 5 Turn-on and wake-up times are determined by the user-defined bandwidth. At a 100 Hz data rate, the turn-on and wake-up times are each approximately 11.1 ms. For other data rates, the turn-on and wake-up times are each approximately τ + 1.1 in milliseconds, where τ = 1/(data rate).

## ABSOLUTE MAXIMUM RATINGS

| Table 2.                                          |                                                        |
|---------------------------------------------------|--------------------------------------------------------|
| Parameter                                         | Rating                                                 |
| Acceleration                                      |                                                        |
| Any Axis, Unpowered                               | 10,000 g                                               |
| Any Axis, Powered                                 | 10,000 g                                               |
| V S                                               | -0.3 V to 3.9 V                                        |
| V DD I/O                                          | -0.3 V to 3.9 V                                        |
| All Other Pins                                    | -0.3 V to V DD I/O + 0.3 V or 3.9 V, whichever is less |
| Output Short-Circuit Duration (Any Pin to Ground) | Indefinite                                             |
| Temperature Range                                 |                                                        |
| Powered                                           | -40°C to +125°C                                        |
| Storage                                           | -40°C to +125°C                                        |

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

|                                     | Condition          | Condition          |
|-------------------------------------|--------------------|--------------------|
| Profile Feature 1, 2                | Sn63/Pb37          | Pb-Free            |
| Average Ramp Rate (T L to T P )     | 3°C/second maximum | 3°C/second maximum |
| Preheat Minimum Temperature (T SMIN | 100°C              | 150°C              |

Table 4. Recommended Soldering Profile

|                                                                                 | Condition               | Condition               |
|---------------------------------------------------------------------------------|-------------------------|-------------------------|
| Profile Feature 1, 2                                                            | Sn63/Pb37               | Pb-Free                 |
| Maximum Temperature (T SMAX ) Time (T SMIN to T SMAX ) (t S )                   | 150°C 60 to 120 seconds | 200°C 60 to 180 seconds |
| T SMAX to T L Ramp-Up Rate                                                      | 3°C/second              | 3°C/second              |
| Time Maintained Above Liquidous (T L ) Liquidous Temperature (T L ) Time (t L ) | 183°C 60 to 150 seconds | 217°C 60 to 150 seconds |
| Peak Temperature (T P )                                                         | 240°C + 0°C/ -5°C       | 260°C + 0°C/ -5°C       |
| Time Within 5°C of Actual Peak Temperature (t P )                               | 10 to 30 seconds        | 20 to 40 seconds        |
| Ramp-Down Rate                                                                  | 6°C/second maximum      | 6°C/second maximum      |
| Time 25°C to Peak Temperature                                                   | 6 minutes maximum       | 8 minutes maximum       |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration (Top View)

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.   | Mnemonic        | Description                                                                        |
|-----------|-----------------|------------------------------------------------------------------------------------|
| 1         | GND GND         | This pin must be connected to ground.                                              |
| 2         | Reserved        | Reserved. This pin must be connected to V S or left open.                          |
| 3         |                 | This pin must be connected to ground.                                              |
| 4         | GND             | This pin must be connected to ground.                                              |
| 5         | V S             | Supply Voltage.                                                                    |
| 6         | CS              | Chip Select.                                                                       |
| 7         | Reserved        | Reserved. This pin must be left open.                                              |
| 8 to19    | NC              | No Connect. Do not connect to this pin.                                            |
| 20        | INT1            | Interrupt 1 Output.                                                                |
| 21        | INT2            | Interrupt 2 Output.                                                                |
| 22        | Reserved        | Reserved. This pin must be connected to GND.                                       |
| 23        | SDO/ALT ADDRESS | Serial Data Out, Alternate I 2 C Address Select.                                   |
| 24        | SDA/SDI/SDIO    | Serial Data (I 2 C), Serial Data In (SPI 4-Wire), Serial Data In/Out (SPI 3-Wire). |
| 25        | NC              | No Connect. Do not connect to this pin.                                            |
| 26        | SCL/SCLK        | Serial Communications Clock.                                                       |
| 27 to 30  | NC              | No Connect. Do not connect to this pin.                                            |
| 31        | V DD I/O        | Digital Interface Supply Voltage.                                                  |
| 32        | NC              | No Connect.                                                                        |
|           | EP              | The exposed pad must be soldered to the ground plane.                              |

## TYPICAL PERFORMANCE CHARACTERISTICS

N &gt; 1000, unless otherwise noted.

<!-- image -->

Figure 6. Z-Axis Zero-g Bias, 25°C, V S = V DD I/O = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. X-Axis Sensitivity, V S = V DD I/O = 3.3 V, 25°C

<!-- image -->

Figure 11. Y-Axis Sensitivity, V S = V DD I/O = 3.3 V, 25°C

<!-- image -->

Figure 12. Z-Axis Sensitivity, V S = V DD I/O = 3.3 V, 25°C

<!-- image -->

Figure 13. X-Axis Sensitivity Temperature Coefficient, V S = V DD I/O = 3.3 V

Figure 14. Y-Axis Sensitivity Temperature Coefficient, V S = V DD I/O = 3.3 V

<!-- image -->

Figure 15. Z-Axis Sensitivity Temperature Coefficient, V S = V DD I/O = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. X-Axis Self-Test Delta, V S = V DD I/O = 3.3 V, 25°C

<!-- image -->

Figure 17. Y-Axis Self-Test Delta, V S = V DD I/O = 3.3 V, 25°C

<!-- image -->

Figure 18. Z-Axis Self-Test Delta, V S = V DD I/O = 3.3 V, 25°C

<!-- image -->

Figure 19. Standby Mode Current Consumption, V S = V DD I/O = 3.3 V, 25°C

Figure 20. Current Consumption, Measurement Mode, Data Rate = 100 Hz, V S = V DD I/O = 3.3 V, 25°C

<!-- image -->

Figure 21. Supply Current vs. Supply Voltage, V S at 25°C

<!-- image -->

## THEORY OF OPERATION

The ADXL312 is a complete 3-axis acceleration measurement system with a selectable measurement range of ±1.5 g, ± 3 g, ± 6 g, or ±12 g . It measures both dynamic acceleration resulting from motion or shock and static acceleration, such as gravity, which allows it to be used as a tilt sensor.

The sensor is a polysilicon surface-micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against acceleration forces.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the beam and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase-sensitive demodulation is used to determine the magnitude and polarity of the acceleration.

## POWER SEQUENCING

Power can be applied to V S or V DD I/O in any sequence without damaging the ADXL312. All possible power-on modes are summarized in Table 6. The interface voltage level is set with the interface supply voltage, V DD I/O , which must be present to ensure that the ADXL312 does not create a conflict on the communication bus. For single-supply operation, V DD I/O can be the same as the main supply, V S . In a dual-supply application, however, V DD I/O can differ from V S to accommodate the desired interface voltage, as long as VS  is greater than or equal to V DD I/O .

After V S is applied, the device enters standby mode, where power consumption is minimized and the device waits for V DD I/O to be applied and for the command to enter measurement mode to be received. (This command can be initiated by setting the measure bit in the POWER\_CTL register (Address 0x2D).) In addition, any register can be written to or read from to configure the part while the device is in standby mode. It is recommended to configure the device in standby mode and then to enable measurement mode. Clearing the measure bit returns the device to the standby mode.

Table 6. Power Sequencing

| Condition              | V S   | V DD I/O   | Description                                                                                                                                                                                                  |
|------------------------|-------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Power Off              | Off   | Off        | The device is completely off, but there is a potential for a communication bus conflict.                                                                                                                     |
| Bus Disabled           | On    | Off        | The device is on in standby mode, but communication is unavailable and creates a conflict on the communication bus. The duration of this state must be minimized during power-up to prevent a conflict.      |
| Bus Enabled            | Off   | On         | No functions are available, but the device will not create a conflict on the communication bus.                                                                                                              |
| Standby or Measurement | On    | On         | The device is in standby mode, awaiting a command to enter measurement mode, and all sensor functions are off. After the device is instructed to enter measurement mode, all sensor functions are available. |

## POWER SAVINGS

## Power Modes

The ADXL312 automatically modulates its power consumption in proportion to its output data rate, as outlined in Table 7. If additional power savings is desired, a lower power mode is available. In this mode, the internal sampling rate is reduced, allowing for power savings in the 12.5 Hz to 400 Hz data rate range at the expense of slightly greater noise. To enter low power mode, set the LOW\_POWER bit (Bit 4) in the BW\_RATE register (Address 0x2C). The current consumption in low power mode is shown in Table 8 for cases where there is an advantage to using low power mode. Use of low power mode for a data rate not shown in Table 8 does not provide any advantage over the same data rate in normal power mode. Therefore, it is recommended that only data rates shown in Table 8 be used in low power mode. The current consumption values shown in Table 7 and Table 8 are for a V S of 3.3 V.

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

## Table 8. Current Draw vs. Data Rate, Low Power Mode (T A = 25°C, V S = V DD I/O = 3.3 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                     400 |              200 |        1100 |         115 |
|                     200 |              100 |        1011 |          82 |
|                     100 |               50 |        1010 |          65 |
|                      50 |               25 |        1001 |          57 |
|                      25 |             12.5 |        1000 |          50 |
|                    12.5 |             6.25 |        0111 |          43 |

## Autosleep Mode

Additional power savings can be had by having the ADXL312 automatically switch to sleep mode during periods of inactivity. To enable this feature, set the THRESH\_INACT register (Address 0x25) to an acceleration threshold value. Levels of acceleration below this threshold are regarded as no activity levels. Set TIME\_INACT (Address 0x26) to an appropriate inactivity time period. Then set the AUTO\_SLEEP bit and the link bit in the POWER\_CTL register (Address 0x2D). If the device does not detect a level of acceleration in excess of THRES\_INACT for TIME\_INACT seconds, then

## THEORY OF OPERATION

the device is transitioned to sleep mode automatically. Current consumption at the sub-8 Hz data rates used in this mode is typically 30 µA for a V S of 3.3 V.

## Standby Mode

For even lower power operation, standby mode can be used. In standby mode, current consumption is reduced to 0.1µA (typical). In this mode, no measurements are made. Standby mode is entered by clearing the measure bit (Bit 3) in the POWER\_CTL register (Address 0x2D). Placing the device into standby mode preserves the contents of the FIFO.

## SERIAL COMMUNICATIONS

The ADXL312 can communicate via I 2 C and SPI digital communications interfaces. In both cases, the ADXL312 operates as a slave. If I 2 C is the desired interface for the application, tie the CS pin directly to V DD I/O as shown in Figure 28. If SPI is the desired interface for the application, drive the pin with an external controller, as demonstrated in Figure 22 and Figure 23.

Because the I 2 C interface is enabled any time the pin is brought up to V DD I/O , there is a potential for bus conflicts to occur when the ADXL312 is implemented into a SPI network. Refer to the Preventing Bus Traffic Errors section for information on how to avoid such conditions. In both SPI and I 2 C modes of operation, ignore data transmitted from the ADXL312 to the master device during writes to the ADXL312.

Note that throughout this section, multifunction pins, such as SDA/SDI/SDIO, are referred to either by the entire pin name or by a single function of the pin, for example, SDA, when only that function is relevant.

## SERIAL PORT I/O DEFAULT STATES

Ensure that all serial port I/Os are in a defined state and that no pin is allowed to float when not in use. This is applicable to all serial port I/Os, regardless of SPI or I 2 C operation.

For I 2 C applications, always tie the pin high to V DD I/O . Connect the SCL and SDA pins to an external controller, with pull-up resistors implemented according to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor. The ALT ADDRESS pin must be tied to either V DD I/O or ground, thereby selecting the desired I 2 C address for the ADXL312.

If SPI is the intended communications interface, drive the pin with an external controller, as shown in Figure 22 and Figure 23. When communications with the ADXL312 are suspended ( = V DD I/O ), ensure that the SCLK, SDI/SDIO, and SDO pins are not floating.

For either SPI or I 2 C operation, not taking these precautions may result in an inability to communicate with the device or excessive current consumption.

## SPI

For the SPI, either 3- or 4-wire configuration is possible, as shown in the connection diagrams in Figure 22 and Figure 23. Clearing the SPI bit in the DATA\_FORMAT register (Address 0x31) selects 4-wire mode, whereas setting the SPI bit selects 3 -wire mode. The maximum SPI clock speed is 5 MHz with 100 pF maximum loading, and the timing scheme follows clock polarity (CPOL) = 1 and clock phase (CPHA) = 1. If power is applied to the ADXL312 before the clock polarity and phase of the host processor are configured, bring the pin high before changing the clock polarity and phase.

When using 3-wire SPI, pull the SDO pin up to V DD I/O or down to ground via a 10 kΩ resistor, as shown in Figure 22.

is the serial port enable line and is controlled by the SPI master. This line must go low at the start of a transmission and high at the end of a transmission, as shown in Figure 25. SCLK is the serial port clock and is supplied by the SPI master. SDI and SDO are the serial data input and output, respectively.

Figure 22. 3-Wire SPI Connection Diagram

<!-- image -->

Figure 23. 4-Wire SPI Connection Diagram

<!-- image -->

To read or write multiple bytes in a single transmission, the multiple-byte bit, located after the R/ bit in the first byte transfer (MB in Figure 25 to Figure 27), must be set. After the register addressing and the first byte of data, each subsequent set of clock pulses (eight clock pulses) causes the ADXL312 to point to the next register for a read or write. This shifting continues until the clock pulses cease and is deasserted. To perform reads or writes on different nonsequential registers, must be deasserted between transmissions, and the new register must be addressed separately.

The timing diagram for 3-wire SPI reads or writes is shown in Figure 27. The 4-wire equivalents for SPI writes and reads are shown in Figure 25 and Figure 26, respectively. For correct operation of the device, the logic thresholds and timing parameters in Table 9 and Table 10 must be met at all times.

Use of the 3200 Hz and 1600 Hz output data rates is only recommended with SPI communication rates greater than or equal to 2 MHz. The 800 Hz output data rate is recommended only for communication speeds greater than or equal to 400 kHz, and the remaining data rates scale proportionally. For example, the minimum recommended communication speed for a 200 Hz output data rate is 100 kHz. Operation at an output data rate below the recommended minimum may result in undesirable effects on the acceleration data, including missing samples or additional noise.

## SERIAL COMMUNICATIONS

## Preventing Bus Traffic Errors

The ADXL312 pin initiates SPI transactions and enables I 2 C mode. When the ADXL312 is used on a SPI bus with multiple devices, its pin is held high while the master communicates with the other devices. There may be conditions where a SPI command transmitted to another device looks like a valid I 2 C command. In this case, the ADXL312 interprets this as an attempt to communicate in I 2 C mode and may interfere with other bus traffic. Unless bus traffic can be adequately controlled to ensure such a condition never occurs, it is recommended to add a logic gate in front of the SDI pin, as shown in Figure 24.

This OR gate holds the SDA line high when is high to prevent bus traffic at the ADXL312 from appearing as an I 2 C start command.

Table 9. SPI Digital Input/Output

|                                   |                          | Limit 1        | Limit 1        |      |
|-----------------------------------|--------------------------|----------------|----------------|------|
| Parameter                         | Test Conditions          | Min            | Max            | Unit |
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
| Pin Capacitance                   | f IN = 1 MHz, V IN = 2.5 |                | 8              | pF   |

1 Limits based on characterization results, not production tested.

## Table 10. SPI Timing (T A = 25°C, V S = V DD I/O = 3.3 V)

| Parameter   | Limit 1, 2   | Limit 1, 2   | Unit   | Description 3                                                                  |
|-------------|--------------|--------------|--------|--------------------------------------------------------------------------------|
| Parameter   | Min          | Max          | Unit   | Description 3                                                                  |
| f SCLK      |              | 5            | MHz    | SPI clock frequency.                                                           |
| t SCLK      | 200          |              | ns     | 1/(SPI clock frequency) mark-space ratio for the SCLK input is 40/60 to 60/40. |
| t DELAY     | 5            |              | ns     | falling edge to SCLK falling edge .                                            |
| t QUIET     | 5            |              | ns     | SCLK rising edge to rising edge.                                               |
| t DIS       |              | 10           | ns     | rising edge to SDO disabled.                                                   |
| t CS,DIS    | 150          |              | ns     | deassertion between SPI communications.                                        |
| t S         | 0.3 × t SCLK |              | ns     | SCLK low pulse width (space).                                                  |
| t M         | 0.3 × t SCLK |              | ns     | SCLK high pulse width (mark).                                                  |
| t SETUP     | 5            |              | ns     | SDI valid before SCLK rising edge.                                             |
| t HOLD      | 5            |              | ns     | SDI valid after SCLK rising edge.                                              |
| t SDO       |              | 40           | ns     | SCLK falling edge to SDO/SDIO output transition.                               |
| t R 4       |              | 20           | ns     | SDO/SDIO output high to output low transition.                                 |
| t F 4       |              | 20           | ns     | SDO/SDIO output low to output high transition.                                 |

1 Limits based on characterization results, characterized with f SCLK = 5 MHz and bus load capacitance of 100 pF; not production tested.

2 The timing values are measured corresponding to the input thresholds (V IL and V IH ) given in Table 9.

Figure 24. Recommended SPI Connection Diagram when Using Multiple SPI Devices on a Single Bus

<!-- image -->

## SERIAL COMMUNICATIONS

- 3 The , SCLK, SDI, and SDO pins are not internally pulled up or down; they must be driven for proper operation.
- 4 Output rise and fall times measured with capacitive load of 150 pF.

<!-- image -->

Figure 25. SPI 4-Wire Write

<!-- image -->

Figure 26. SPI 4-Wire Read

Figure 27. SPI 3-Wire Read/Write

<!-- image -->

Figure 28. I 2 C Connection Diagram (Address 0x53)

<!-- image -->

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed V DD I/O by more than 0.3 V. External pull-up resistors, R P , are necessary for

## I 2 C

With tied high to V DD I/O , the ADXL312 is in I 2 C mode, requiring a simple 2-wire connection as shown in Figure 28. The ADXL312 conforms to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor. It supports standard (100 kHz) and fast (400 kHz) data transfer modes if the bus parameters given in Table 11 and Table 12 are met. Single- or multiple-byte reads/writes are supported, as shown in Figure 29. With the ALT ADDRESS pin high, the 7-bit I 2 C address for the device is 0x1D, followed by the R/ bit. This translates to 0x3A for a write and 0x3B for a read. An alternate I 2 C address of 0x53 (followed by the R/ bit) can be chosen by grounding the ALT ADDRESS pin (Pin 7). This translates to 0xA6 for a write and 0xA7 for a read.

## SERIAL COMMUNICATIONS

proper I 2 C operation. Refer to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, when selecting pull-up resistor values to ensure proper operation.

Table 11. I 2 C Digital Input/Output

|                                  |                                | Limit 1        | Limit 1        |      |
|----------------------------------|--------------------------------|----------------|----------------|------|
| Parameter                        | Test Conditions                | Min            | Max            | Unit |
| Digital Input                    |                                |                |                |      |
| Low Level Input Voltage (V IL )  |                                |                | 0.3 × V DD I/O | V    |
| High Level Input Voltage (V IH ) |                                | 0.7 × V DD I/O |                | V    |
| Low Level Input Current (I IL )  | V IN = V DD I/O                |                | 0.1            | µA   |
| High Level Input Current (I IH ) | V IN = 0 V                     | -0.1           |                | µA   |
| Digital Output                   |                                |                |                |      |
| Low Level Output Voltage (V OL ) | V DD I/O < 2 V, I OL = 3 mA mA |                | 0.2 × V DD I/O | V    |
| )                                | V DD I/O ≥ 2 V, I OL = 3       |                | 400            | mV   |
| Low Level Output Current (I OL   | V OL = V OL, max               | 3              |                | mA   |
| Pin Capacitance                  | f IN = 1 MHz, V IN = 2.5 V     |                | 8              | pF   |

1 Limits based on characterization results; not production tested.

Figure 29. I 2 C Device Addressing

Table 12. I 2 C Timing (T A = 25°C, V S = V DD I/O = 3.3 V)

| Parameter      | Limit                               | Limit               | Unit                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|----------------|-------------------------------------|---------------------|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parameter      | Min                                 | Max                 | Unit                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| f SCL t 1      | 2.5 0.6 1.3 0.6 100 0 0.6 0.6 1.3 0 | 400 0.9 300 250 300 | kHz µs µs µs µs ns µs µs µs µs ns ns ns | SCL clock frequency SCL cycle time t HIGH , SCL high time t LOW , SCL low time t HD, STA , start/repeated start condition hold time t SU, DAT , data setup time t HD, DAT , data hold time t SU, STA , setup time for repeated start t SU, STO , stop condition setup time t BUF , bus-free time between a stop condition and a start condition t R , rise time of both SCL and SDA when receiving t R , rise time of both SCL and SDA when receiving or transmitting |
| t 2            |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 3            |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 4            |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 5            |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 6 3, 4, 5, 6 |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 7            |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 8            |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 9            |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 10           |                                     |                     |                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| t 11           |                                     |                     |                                         | t F , fall time of SDA when receiving                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                |                                     |                     | ns                                      | t F , fall time of both SCL and SDA when transmitting                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                | 20 + 0.1 C b 7                      |                     | ns                                      | t F , fall time of both SCL and SDA when transmitting or receiving                                                                                                                                                                                                                                                                                                                                                                                                    |
| C b            |                                     | 400                 | pF                                      | Capacitive load for each bus line                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## SERIAL COMMUNICATIONS

- 1 Limits based on characterization results, with f SCL = 400 kHz and a 3 mA sink current; not production tested.
- 2 All values referred to the V IH and the V IL levels given in Table 11.
- 3 t 6 is the data hold time that is measured from the falling edge of SCL. It applies to data in transmission and acknowledge.
- 4 A transmitting device must internally provide an output hold time of at least 300 ns for the SDA signal (with respect to V IH(min) of the SCL signal) to bridge the undefined region of the falling edge of SCL.
- 5 The maximum t 6 value must be met only if the device does not stretch the low period (t 3 ) of the SCL signal.
- 6 The maximum value for t 6 is a function of the clock low time (t 3 ), the clock rise time (t 10 ), and the minimum data setup time (t 5(min) ). This value is calculated as t 6(max) = t 3 -t 10 - t 5(min) .
- 7 Cb  is the total capacitance of one bus line in picofarads.

Figure 30. I 2 C Timing Diagram

<!-- image -->

## DATA\_READY

The DATA\_READY bit is set when new data is available and is cleared when no new data is available.

## Activity

The activity bit is set when acceleration greater than the value stored in the THRESH\_ACT register (Address 0x24) is experienced.

## Inactivity

The inactivity bit is set when acceleration of less than the value stored in the THRESH\_INACT register (Address 0x25) is experienced for more time than is specified in the TIME\_INACT register (Address 0x26). The maximum value for TIME\_INACT is 255 sec.

## Watermark

The watermark bit is set when the number of samples in FIFO equals the value stored in the samples bits (Register FIFO\_CTL, Address 0x38). The watermark bit is cleared automatically when FIFO is read, and the content returns to a value below the value stored in the samples bits.

## Overrun

The overrun bit is set when new data replaces unread data. The precise operation of the overrun function depends on the FIFO mode. In bypass mode, the overrun bit is set when new data replaces unread data in the DATAX, DATAY, and DATAZ registers (Address 0x32 to Address 0x37). In all other modes, the overrun bit is set when FIFO is filled. The overrun bit is automatically cleared when the contents of FIFO are read.

## INTERRUPTS

The ADXL312 provides two output pins for driving interrupts: INT1 and INT2. Both interrupt pins are push-pull, low impedance pins with output specifications shown in Table 13. The default configuration of the interrupt pins is active high. This can be changed to active low by setting the INT\_INVERT bit in the DATA\_FORMAT (Address 0x31) register. All functions can be used simultaneously, with the only limiting feature being that some functions may need to share interrupt pins.

Interrupts are enabled by setting the appropriate bit in the INT\_EN-ABLE register (Address 0x2E) and are mapped to either the INT1 or INT2 pin based on the contents of the INT\_MAP register (Address 0x2F). When initially configuring the interrupt pins, it is recommended that the functions and interrupt mapping be done before enabling the interrupts. When changing the configuration of an interrupt, it is recommended that the interrupt be disabled first, by clearing the bit corresponding to that function in the INT\_ENABLE register, and then the function be reconfigured before enabling the interrupt again. Configuration of the functions while the interrupts are disabled helps to prevent the accidental generation of an interrupt before desired.

The interrupt functions are latched and cleared by either reading the data registers (Address 0x32 to Address 0x37) until the interrupt condition is no longer valid for the data-related interrupts or by reading the INT\_SOURCE register (Address 0x30) for the remaining interrupts. This section describes the interrupts that can be set in the INT\_ENABLE register and monitored in the INT\_SOURCE register.

## SERIAL COMMUNICATIONS

Table 13. Interrupt Pin Digital Output

|                                   |                            | Limit 1        | Limit 1        |      |
|-----------------------------------|----------------------------|----------------|----------------|------|
| Parameter                         | Test Conditions            | Min            | Max            | Unit |
| Digital Output                    |                            |                |                |      |
| Low Level Output Voltage (V OL )  | I OL = 300 µA              |                | 0.2 × V DD I/O | V    |
| High Level Output Voltage (V OH ) | I OH = -150 µA             | 0.8 × V DD I/O |                | V    |
| Low Level Output Current (I OL )  | V OL = V OL, max           | 300            |                | µA   |
| High Level Output Current (I OH ) | V OH = V OH, min           |                | -150           | µA   |
| Pin Capacitance                   | f IN = 1 MHz, V IN = 2.5 V |                | 8              | pF   |
| Rise/Fall Time                    |                            |                |                |      |
| Rise Time (t R ) 2                | C LOAD = 150 pF            |                | 210            | ns   |
| Fall Time (t F ) 3                | C LOAD = 150 pF            |                | 150            | ns   |

- 1 Limits based on characterization results, not production tested.
- 2 Rise time is measured as the transition time from V OL, max to V OH, min of the interrupt pin.
- 3 Fall time is measured as the transition time from V OH, min to V OL, max of the interrupt pin.

## FIFO

The ADXL312 contains technology for an embedded memory management system with 32-level FIFO that can be used to minimize host processor burden. This buffer has four modes: bypass, FIFO, stream, and trigger (see Table 35). Each mode is selected by the settings of the FIFO\_MODE bits in the FIFO\_CTL register (Address 0x38).

## Bypass Mode

In bypass mode, FIFO is not operational and, therefore, remains empty.

## FIFO Mode

In FIFO mode, data from measurements of the x-, y-, and z-axes are stored in FIFO. When the number of samples in FIFO equals the level specified in the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set. FIFO continues accumulating samples until it is full (32 samples from measurements of the x-, y-, and z-axes) and then stops collecting data. After FIFO stops collecting data, the device continues to operate; therefore, features such as activity detection can be used after FIFO is full. The watermark interrupt continues to occur until the number of samples in FIFO is less than the value stored in the samples bits of the FIFO\_CTL register.

## Stream Mode

In stream mode, data from measurements of the x-, y-, and z-axes are stored in FIFO. When the number of samples in FIFO equals the level specified in the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set. FIFO continues accumulating samples and holds the latest 32 samples from measurements of the x-, y-, and z-axes, discarding older data as new data arrives. The watermark interrupt continues occurring until the number of samples in FIFO is less than the value stored in the samples bits of the FIFO\_CTL register.

## Trigger Mode

In trigger mode, FIFO accumulates samples, holding the latest 32 samples from measurements of the x-, y-, and z-axes. After a trigger event occurs and an interrupt is sent to the INT1 or INT2 pin (determined by the trigger bit in the FIFO\_CTL register), FIFO keeps the last n samples (where n is the value specified by the samples bits in the FIFO\_CTL register) and then operates in FIFO mode, collecting new samples only when FIFO is not full. A delay of at least 5 μs must be present between the trigger event occurring and the start of reading data from the FIFO to allow the FIFO to discard and retain the necessary samples. Additional trigger events cannot be recognized until the trigger mode is reset. To reset the trigger mode, set the device to bypass mode and then set the device back to trigger mode. Note that the FIFO data must be read first because placing the device into bypass mode clears FIFO.

## Retrieving Data from FIFO

The FIFO data is read through the DATAX, DATAY, and DATAZ registers (Address 0x32 to Address 0x37). When the FIFO is in FIFO, stream, or trigger mode, reads to the DATAX, DATAY, and DATAZ registers read data stored in the FIFO. Each time data is read from the FIFO, the oldest x-, y-, and z-axes data is placed into the DATAX, DATAY and DATAZ registers.

If a single-byte read operation is performed, the remaining bytes of data for the current FIFO sample are lost. Therefore, all axes of interest must be read in a burst (or multiple-byte) read operation. To ensure that the FIFO has completely popped (that is, that new data has completely moved into the DATAX, DATAY, and DATAZ registers), there must be at least 5 μs between the end of reading the data registers and the start of a new read of the FIFO or a read of the FIFO\_STATUS register (Address 0x39). The end of reading

## SERIAL COMMUNICATIONS

a data register is signified by the transition from Register 0x37 to Register 0x38 or by the pin going high.

For SPI operation at 1.6 MHz or less, the register addressing portion of the transmission is a sufficient delay to ensure that the FIFO has completely popped. For SPI operation greater than 1.6 MHz, it is necessary to deassert the pin to ensure a total delay of 5 μs; otherwise, the delay will not be sufficient. The total delay necessary for 5 MHz operation is at most 3.4 μs. This is not a concern when using I 2 C mode because the communication rate is low enough to ensure a sufficient delay between FIFO reads.

## SELF-TEST

The ADXL312 incorporates a self-test feature that effectively tests its mechanical and electronic systems simultaneously. When the self-test function is enabled (via the SELF\_TEST bit in the DA-TA\_FORMAT register, Address 0x31), an electrostatic force is exerted on the mechanical sensor. This electrostatic force moves the mechanical sensing element in the same manner as acceleration, and it is additive to the acceleration experienced by the device. This added electrostatic force results in an output change in the x-, y-, and z-axes. Because the electrostatic force is proportional to V S 2 , the output change varies with V S . This effect is shown in Figure 31. The scale factors shown in Table 14 can be used to adjust the expected self-test output limits for different supply voltages, V S . The self-test feature of the ADXL312 also exhibits a bimodal behavior. However, the limits shown in Table 1 and Table 15 to Table 18 are valid for both potential self-test values due to bimodality. Use of the self-test feature at data rates less than 100 Hz or at 1600 Hz may yield values outside these limits. Therefore, the part must be in normal power operation (LOW\_POWER bit = 0 in BW\_RATE register, Address 0x2C) and be placed into a data rate of 100 Hz through 800 Hz or 3200 Hz for the self-test function to operate correctly.

Figure 31. Self-Test Output Change Limits vs. Supply Voltage

<!-- image -->

Table 14. Self-Test Output Scale Factors for Different Supply Voltages, V S

| Supply Voltage, V S   |   X-, Y-Axes |   Z-Axis |
|-----------------------|--------------|----------|
| 2.00 V                |         0.64 |      0.8 |

Table 14. Self-Test Output Scale Factors for Different Supply Voltages, V S

| Supply Voltage, V S   |   X-, Y-Axes |   Z-Axis |
|-----------------------|--------------|----------|
| 2.50 V                |         1.00 |     1.00 |
| 3.00 V                |         1.77 |     1.47 |
| 3.30 V                |         2.11 |     1.69 |

Table 15. Self-Test Output in LSB for ±1.5 g, 10-Bit or Full Resolution (T A = 25°C, V S = V DD I/O = 2.5 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    65 |   725 | LSB    |
| Y      |  -725 |   -65 | LSB    |
| Z      |   100 |  1175 | LSB    |

Table 16. Self-Test Output in LSB for ±3 g, 10-Bit Resolution (T A = 25°C, V S = VDD I/O = 2.5 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    32 |   362 | LSB    |
| Y      |  -362 |   -32 | LSB    |
| Z      |    50 |   588 | LSB    |

Table 17. Self-Test Output in LSB for ±6 g, 10-Bit Resolution (T A = 25°C, V S = VDD I/O = 2.5 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    16 |   181 | LSB    |
| Y      |  -181 |   -16 | LSB    |
| Z      |    25 |   294 | LSB    |

Table 18. Self-Test Output in LSB for ±12 g, 10-Bit Resolution (T A = 25°C, V S = VDD I/O = 2.5 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |     8 |    90 | LSB    |
| Y      |   -90 |    -8 | LSB    |
| Z      |    12 |   147 | LSB    |

## REGISTER MAP

Table 19. Register Map

| Address      | Address   |               |      |             |                                                            |
|--------------|-----------|---------------|------|-------------|------------------------------------------------------------|
| Hex          | Dec       | Name          | Type | Reset Value | Description                                                |
| 0x00         | 0         | DEVID         | R    | 11100101    | Device ID.                                                 |
| 0x01 to 0x1D | 1 to 29   | Reserved      |      |             | Reserved. Do not access.                                   |
| 0x1E         | 30        | OFSX          | R/W  | 00000000    | X-axis offset.                                             |
| 0x1F         | 31        | OFSY          | R/W  | 00000000    | Y-axis offset.                                             |
| 0x20         | 32        | OFSZ          | R/W  | 00000000    | Z-axis offset.                                             |
| 0x21         | 33        | Reserved      |      |             | Reserved. Do not access.                                   |
| 0x22         | 34        | Reserved      |      |             | Reserved. Do not access.                                   |
| 0x23         | 35        | Reserved      |      |             | Reserved. Do not access.                                   |
| 0x24         | 36        | THRESH_ACT    | R/W  | 00000000    | Activity threshold.                                        |
| 0x25         | 37        | THRESH_INACT  | R/W  | 00000000    | Inactivity threshold.                                      |
| 0x26         | 38        | TIME_INACT    | R/W  | 00000000    | Inactivity time.                                           |
| 0x27         | 39        | ACT_INACT_CTL | R/W  | 00000000    | Axis enable control for activity and inactivity detection. |
| 0x28         | 40        | Reserved      |      |             | Reserved. Do not access.                                   |
| 0x29         | 41        | Reserved      |      |             | Reserved. Do not access.                                   |
| 0x2A         | 42        | Reserved      |      |             | Reserved. Do not access.                                   |
| 0x2B         | 43        | Reserved      |      |             | Reserved. Do not access.                                   |
| 0x2C         | 44        | BW_RATE       | R/W  | 00001010    | Data rate and power mode control.                          |
| 0x2D         | 45        | POWER_CTL     | R/W  | 00000000    | Power-saving features control.                             |
| 0x2E         | 46        | INT_ENABLE    | R/W  | 00000000    | Interrupt enable control.                                  |
| 0x2F         | 47        | INT_MAP       | R/W  | 00000000    | Interrupt mapping control.                                 |
| 0x30         | 48        | INT_SOURCE    | R    | 00000010    | Source of interrupts.                                      |
| 0x31         | 49        | DATA_FORMAT   | R/W  | 00000000    | Data format control.                                       |
| 0x32         | 50        | DATAX0        | R    | 00000000    | X-Axis Data 0.                                             |
| 0x33         | 51        | DATAX1        | R    | 00000000    | X-Axis Data 1.                                             |
| 0x34         | 52        | DATAY0        | R    | 00000000    | Y-Axis Data 0.                                             |
| 0x35         | 53        | DATAY1        | R    | 00000000    | Y-Axis Data 1.                                             |
| 0x36         | 54        | DATAZ0        | R    | 00000000    | Z-Axis Data 0.                                             |
| 0x37         | 55        | DATAZ1        | R    | 00000000    | Z-Axis Data 1.                                             |
| 0x38         | 56        | FIFO_CTL      | R/W  | 00000000    | FIFO control.                                              |
| 0x39         | 57        | FIFO_STATUS   | R    | 00000000    | FIFO status.                                               |

## REGISTER DEFINITIONS

## Register 0x00-DEVID (Read Only)

| Table 20. Register 0x00 D7 D6   |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |
|---------------------------------|------|------|------|------|------|------|
| 1 1                             |    1 |    0 |    0 |    1 |    0 |    1 |

The DEVID register holds a fixed device ID code of 0xE5.

## Register 0x1E, Register 0x1F, Register 0x20OFSX, OFSY, OFSZ (Read/Write)

The OFSX, OFSY, and OFSZ registers are each eight bits and offer user-set offset adjustments in twos complement format with a scale factor of 11.6 m g /LSB (that is, 0x7F = +1.5 g ). The value stored in the offset registers is automatically added to the acceleration data, and the resulting value is stored in the output data registers.

## Register 0x24-THRESH\_ACT (Read/Write)

The THRESH\_ACT register is eight bits and holds the threshold value for detecting activity. The data format is unsigned; therefore, the magnitude of the activity event is compared with the value in the THRESH\_ACT register. The scale factor is 46.4 m g /LSB. A value of 0 may result in undesirable behavior if the activity interrupt is enabled.

## Register 0x25-THRESH\_INACT (Read/Write)

The THRESH\_INACT register is eight bits and holds the threshold value for detecting inactivity. The data format is unsigned; therefore, the magnitude of the inactivity event is compared with the value in the THRESH\_INACT register. The scale factor is 46.4 m g /LSB. A value of 0 may result in undesirable behavior if the inactivity interrupt is enabled.

## REGISTER MAP

## Register 0x26-TIME\_INACT (Read/Write)

The TIME\_INACT register is eight bits and contains an unsigned time value representing the amount of time that acceleration must be less than the value in the THRESH\_INACT register for inactivity to be declared. The scale factor is 1 sec/LSB. Unlike the other interrupt functions, which use unfiltered data (see the Threshold section), the inactivity function uses filtered output data. At least one output sample must be generated for the inactivity interrupt to be triggered. This results in the function appearing unresponsive if the TIME\_INACT register is set to a value less than the time constant of the output data rate. A value of 0 results in an interrupt when the output data is less than the value in the THRESH\_INACT register.

## Register 0x27-ACT\_INACT\_CTL (Read/Write)

Table 21. Register 0x27-Bits[D7:D4]

| D7                                  | D6                                  | D5                                  | D4                                  |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| ACT ac/dc                           | ACT_X enable                        | ACT_Y enable                        | ACT_Z enable                        |
| Table 22. Register 0x27-Bits[D3:D0] | Table 22. Register 0x27-Bits[D3:D0] | Table 22. Register 0x27-Bits[D3:D0] | Table 22. Register 0x27-Bits[D3:D0] |
| D3                                  | D2                                  | D1                                  | D0                                  |
| INACT ac/dc                         | INACT_X enable                      | INACT_Y enable                      | INACT_Z enable                      |

## ACT AC/DC and INACT AC/DC Bits

A setting of 0 selects dc-coupled operation, and a setting of 1 enables ac-coupled operation.

In dc-coupled operation, the current acceleration magnitude is compared directly with THRESH\_ACT and THRESH\_INACT to determine whether activity or inactivity is detected.

In ac-coupled operation for activity detection, the acceleration value at the start of activity detection is taken as a reference value. New samples of acceleration are then compared to this reference value and, if the magnitude of the difference exceeds the THRESH\_ACT value, the device triggers an activity interrupt.

Similarly, in ac-coupled operation for inactivity detection, a reference value is used for comparison and is updated whenever the device exceeds the inactivity threshold. After the reference value is selected, the device compares the magnitude of the difference between the reference value and the current acceleration with THRESH\_INACT. If the difference is less than the value in THRESH\_INACT for the time in TIME\_INACT, the device is considered inactive and the inactivity interrupt is triggered.

## ACT\_x Enable Bits and INACT\_x Enable Bits

A setting of 1 enables x-, y-, or z-axis participation in detecting activity or inactivity. A setting of 0 excludes the selected axis from participation. If all axes are excluded, the function is disabled. For activity detection, all participating axes are logically OR'ed, causing the activity function to trigger when any of the participating axes exceeds the threshold. For inactivity detection, all participating axes are logically AND'ed, causing the inactivity function to trigger only if all participating axes are below the threshold for the specified period of time.

## Register 0x2C-BW\_RATE (Read/Write)

Table 23. Register 0x2C

|   D7 |   D6 |   D5 | D4        | D3   | D2   | D1   |
|------|------|------|-----------|------|------|------|
|    0 |    0 |    0 | LOW_POWER |      | Rate |      |

## LOW\_POWER Bit

A setting of 0 in the LOW\_POWER bit selects normal operation, and a setting of 1 selects reduced power operation, which has somewhat higher noise (see the Power Modes section for details).

## Rate Bits

These bits select the device bandwidth and output data rate (see Table 7 and Table 8 for details). The default value is 0x0A, which translates to a 100 Hz output data rate. An output data rate must be selected that is appropriate for the communication protocol and frequency selected. Selecting too high of an output data rate with a low communication speed results in samples being discarded.

## Register 0x2D-POWER\_CTL (Read/Write)

Table 24. Register 0x2D

|   D7 |   D6 | D5   | D4         | D3      | D2    | D1 D0   |
|------|------|------|------------|---------|-------|---------|
|    0 |    0 | Link | AUTO_SLEEP | Measure | Sleep | Wake-up |

## Link Bit

A setting of 1 in the link bit with both the activity and inactivity functions enabled delays the start of the activity function until inactivity is detected. After activity is detected, inactivity detection begins, preventing the detection of activity. This bit serially links the activity and inactivity functions.

When this bit is set to 0, the inactivity and activity functions are concurrent. Additional information can be found in the Link Mode section.

When clearing the link bit, it is recommended that the device be placed into standby mode and then set back to measurement mode with a subsequent write. This recommendation is advised to ensure that the device is properly biased if sleep mode is manually disabled. Otherwise, the first few samples of data after the link bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## AUTO\_SLEEP Bit

If the link bit is set, a setting of 1 in the AUTO\_SLEEP bit sets the ADXL312 to switch to sleep mode when inactivity is detected (that is, when acceleration has been less than the THRESH\_INACT value for at least the time indicated by TIME\_INACT). A setting of 0

## REGISTER MAP

disables automatic switching to sleep mode. See the description of the sleep bit in the Sleep Bit section for more information.

When clearing the AUTO\_SLEEP bit, it is recommended that the device be placed into standby mode and then set back to measurement mode with a subsequent write. This recommendation is advised to ensure that the device is properly biased if sleep mode is manually disabled. Otherwise, the first few samples of data after the AUTO\_SLEEP bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Measure Bit

A setting of 0 in the measure bit places the device into standby mode, and a setting of 1 places the device into measurement mode. The ADXL312 powers up in standby mode with minimum power consumption.

## Sleep Bit

A setting of 0 in the sleep bit puts the device into the normal mode of operation, and a setting of 1 places the device into sleep mode. Sleep mode suppresses DATA\_READY (see Register 0x2E, Register 0x2F, and Register 0x30), stops transmission of data to FIFO, and switches the sampling rate to one specified by the wake-up bits. In sleep mode, only the activity function can be used.

When clearing the sleep bit, it is recommended that the device be placed into standby mode and then set back to measurement mode with a subsequent write. This recommendation is advised to ensure that the device is properly biased if sleep mode is manually disabled. Otherwise, the first few samples of data after the sleep bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Wake-Up Bits

These bits control the frequency of readings in sleep mode as described in Table 25.

Table 25. Frequency of Readings in Sleep Mode

|    | Setting   |                |
|----|-----------|----------------|
| D1 | D0        | Frequency (Hz) |
| 0  | 0         | 8              |
| 0  | 1         | 4              |
| 1  | 0         | 2              |
| 1  | 1         | 1              |

## Register 0x2E-INT\_ENABLE (Read/Write)

| Table 26. Register 0x2E-Bits[D7:D4]   | Table 26. Register 0x2E-Bits[D7:D4]   | Table 26. Register 0x2E-Bits[D7:D4]   | Table 26. Register 0x2E-Bits[D7:D4]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| DATA_READY                            | N/A                                   | N/A                                   | Activity                              |
| Table 27. Register 0x2E-Bits[D3:D0]   | Table 27. Register 0x2E-Bits[D3:D0]   | Table 27. Register 0x2E-Bits[D3:D0]   | Table 27. Register 0x2E-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| Inactivity                            | N/A                                   | Watermark                             | Overrun                               |

Setting bits in this register to a value of 1 enables their respective functions to generate interrupts, whereas a value of 0 prevents the functions from generating interrupts. The DATA\_READY, watermark, and overrun bits enable only the interrupt output; the functions are always enabled. It is recommended that interrupts be configured before enabling their outputs.

## Register 0x2F-INT\_MAP (Read/Write)

| Table 28. Register 0x2F-Bits[D7:D4]   | Table 28. Register 0x2F-Bits[D7:D4]   | Table 28. Register 0x2F-Bits[D7:D4]   | Table 28. Register 0x2F-Bits[D7:D4]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| DATA_READY                            | N/A                                   | N/A                                   | Activity                              |
| Table 29. Register 0x2F-Bits[D3:D0]   | Table 29. Register 0x2F-Bits[D3:D0]   | Table 29. Register 0x2F-Bits[D3:D0]   | Table 29. Register 0x2F-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| Inactivity                            | N/A                                   | Watermark                             | Overrun                               |

Any bits set to 0 in this register send their respective interrupts to the INT1 pin, whereas bits set to 1 send their respective interrupts to the INT2 pin. All selected interrupts for a given pin are OR'ed.

## Register 0x30-INT\_SOURCE (Read Only)

| Table 30. Register 0x30-Bits[D7:D4]   | Table 30. Register 0x30-Bits[D7:D4]   | Table 30. Register 0x30-Bits[D7:D4]   | Table 30. Register 0x30-Bits[D7:D4]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| DATA_READY                            | N/A                                   | N/A                                   | Activity                              |
| Table 31. Register 0x30-Bits[D3:D0]   | Table 31. Register 0x30-Bits[D3:D0]   | Table 31. Register 0x30-Bits[D3:D0]   | Table 31. Register 0x30-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| Inactivity                            | N/A                                   | Watermark                             | Overrun                               |

Bits set to 1 in this register indicate that their respective functions have triggered an event, whereas a value of 0 indicates that the corresponding event has not occurred. The DATA\_READY, watermark, and overrun bits are always set if the corresponding events occur, regardless of the INT\_ENABLE register settings, and are cleared by reading data from the DATAX, DATAY, and DATAZ registers. The DATA\_READY and watermark bits may require multiple reads, as indicated in the FIFO mode descriptions in the FIFO section. Other bits, and the corresponding interrupts, are cleared by reading the INT\_SOURCE register.

## Register 0x31-DATA\_FORMAT (Read/Write)

| Table 32. Register 0x31   | Table 32. Register 0x31   | Table 32. Register 0x31   | Table 32. Register 0x31   | Table 32. Register 0x31   | Table 32. Register 0x31   | Table 32. Register 0x31   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D0                        |
| SELF_TEST                 | SPI                       | INT_INVERT                | 0                         | FULL_RES                  | Justify                   | Range                     |

The DATA\_FORMAT register controls the presentation of data to Register 0x32 through Register 0x37. All data, except that for the ±12 g range, must be clipped to avoid rollover.

## SELF\_TEST Bit

A setting of 1 in the SELF\_TEST bit applies a self-test force to the sensor, causing a shift in the output data. A value of 0 disables the self-test force.

## REGISTER MAP

## SPI Bit

A value of 1 in the SPI bit sets the device to 3-wire SPI mode, and a value of 0 sets the device to 4-wire SPI mode.

## INT\_INVERT Bit

A value of 0 in the INT\_INVERT bit sets the interrupts to active high, and a value of 1 sets the interrupts to active low.

## FULL\_RES Bit

When this bit is set to a value of 1, the device is in full resolution mode, where the output resolution increases with the g range set by the range bits to maintain a 2.9 m g /LSB scale factor. When the FULL\_RES bit is set to 0, the device is in 10-bit mode, and the range bits determine the maximum g range and scale factor.

## Justify Bit

A setting of 1 in the justify bit selects left (MSB) justified mode, and a setting of 0 selects right justified mode with sign extension.

## Range Bits

These bits set the g range as described in Table 33.

## Table 33. g Range Setting

|    |   Setting D0 | g Range   |
|----|--------------|-----------|
|  0 |            0 | ±1.5 g    |
|  0 |            1 | ±3 g      |
|  1 |            0 | ±6 g      |
|  1 |            1 | ±12 g     |

## Register 0x32 to Register 0x37-DATAX0, DATAX1, DATAY0, DATAY1, DATAZ0, DATAZ1 (Read Only)

These six bytes (Register 0x32 to Register 0x37) are eight bits each and hold the output data for each axis. Register 0x32 and Register 0x33 hold the output data for the x-axis, Register 0x34 and Register 0x35 hold the output data for the y-axis, and Register 0x36 and Register 0x37 hold the output data for the z-axis.

The output data is twos complement, with DATAx0 as the least significant byte and DATAx1 as the most significant byte, where x represent X, Y, or Z. The DATA\_FORMAT register (Address 0x31) controls the format of the data. It is recommended that a multiplebyte read of all registers be performed to prevent a change in data between reads of sequential registers.

## Register 0x38-FIFO\_CTL (Read/Write)

## Table 34. Register 0x38

| D7 D6     | D5      | D4   | D3   | D2      | D1   | D0   |
|-----------|---------|------|------|---------|------|------|
| FIFO_MODE | Trigger |      |      | Samples |      |      |

## FIFO\_MODE Bits

These bits set the FIFO mode, as described in Table 35.

| Table 35. FIFO Modes   | Table 35. FIFO Modes   | Table 35. FIFO Modes   | Table 35. FIFO Modes                                                                                                                                                                          |
|------------------------|------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Setting                | Setting                | Setting                |                                                                                                                                                                                               |
| D7                     | D6                     | Mode                   | Function                                                                                                                                                                                      |
| 0                      | 0                      | Bypass                 | FIFO is bypassed.                                                                                                                                                                             |
| 0                      | 1                      | FIFO                   | FIFO collects up to 32 values and then stops collecting data, collecting new data only when FIFO is not full.                                                                                 |
| 1                      | 0                      | Stream                 | FIFO holds the last 32 data values. When FIFO is full, the oldest data is overwritten with newer data.                                                                                        |
| 1                      | 1                      | Trigger                | When triggered by the trigger bit, FIFO holds the last data samples before the trigger event and then continues to collect data until full. New data is collected only when FIFO is not full. |

## Trigger Bit

A value of 0 in the trigger bit links the trigger event of trigger mode to INT1, and a value of 1 in the trigger bit links the trigger event to INT2.

## Samples Bits

The function of the samples bits depends on the FIFO mode selected (see Table 36). Entering a value of 0 in the samples bits immediately sets the watermark status bit in the INT\_SOURCE register, regardless of which FIFO mode is selected. Undesirable operation may occur if a value of 0 is used for the samples bits when trigger mode is used.

## Table 36. Samples Bits Functions

| FIFO Mode   | Samples Bits Function                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| Bypass      | None.                                                                                   |
| FIFO        | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Stream      | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Trigger     | Specifies how many FIFO samples are retained in the FIFO buffer before a trigger event. |

## Register 0x39-FIFO\_STATUS (Read Only)

| Table 37. Register 0x39   | Table 37. Register 0x39   | Table 37. Register 0x39   | Table 37. Register 0x39   | Table 37. Register 0x39   | Table 37. Register 0x39   | Table 37. Register 0x39   | Table 37. Register 0x39   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| FIFO_TRIG                 | 0                         |                           |                           |                           | Entries                   |                           |                           |

## FIFO\_TRIG Bit

A 1 in the FIFO\_TRIG bit corresponds to a trigger event occurring, and a 0 means that a FIFO trigger event has not occurred.

## REGISTER MAP

## Entries Bits

These bits report how many data values are stored in FIFO. Access to collect the data from FIFO is provided through the DATAX, DATAY, and DATAZ registers. FIFO reads must be done in burst or multiple-byte mode because each FIFO level is cleared after any read (single- or multiple-byte) of FIFO. FIFO stores a maximum of 32 entries, which equates to a maximum of 33 entries available at any given time because an additional entry is available at the output filter of the device.

## APPLICATIONS INFORMATION

## POWER SUPPLY DECOUPLING

A 1 μF tantalum capacitor (C S ) at V S and a 0.1 μF ceramic capacitor (C I/O ) at V DD I/O placed close to the ADXL312 supply pins is recommended to adequately decouple the accelerometer from noise on the power supply. If additional decoupling is necessary, a resistor or ferrite bead, no larger than 100 Ω, in series with V S may be helpful. Additionally, increasing the bypass capacitance on VS  to a 10 μF tantalum capacitor in parallel with a 0.1 μF ceramic capacitor may also improve noise.

Care must be taken to ensure that the connection from the ADXL312 ground to the power supply ground has low impedance because noise transmitted through ground has an effect similar to noise transmitted through V S . It is recommended that V S and V DD I/O be separate supplies to minimize digital clocking noise on the V S supply. If this is not possible, additional filtering of the supplies as previously mentioned may be necessary.

Figure 32. Application Diagram

<!-- image -->

## MECHANICAL CONSIDERATIONS FOR MOUNTING

The ADXL312 must be mounted on the PCB in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL312 at an unsupported PCB location, as shown in Figure 33, may result in large, apparent measurement errors due to undampened PCB vibration. Locating the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is above the accelerometer's mechanical sensor resonant frequency and, therefore, effectively invisible to the accelerometer. Multiple mounting points, close to the sensor, and/or a thicker PCB also help to reduce the effect of system resonance on the performance of the sensor.

Figure 33. Incorrectly Placed Accelerometers

<!-- image -->

## ASYNCHRONOUS DATA READINGS

Asynchronous readings of acceleration data can lead to accessing the acceleration data registers (Address 0x32 to Address 0x37) while they are being updated. To avoid this, it is recommended to either enable the FIFO stream mode (see Table 35), or to synchronize the SPI/I 2 C transaction to the DATA\_READY interrupt functionality, so that the host processor samples immediately after the DATA\_READY interrupt goes high.

## THRESHOLD

The lower output data rates are achieved by decimating a common sampling frequency inside the device. The activity detection function is performed using undecimated data. Because the bandwidth of the output data varies with the data rate and is lower than the bandwidth of the undecimated data, the high frequency and high g data that are used to determine activity may not be present if the output of the accelerometer is examined. This may result in functions triggering when acceleration data does not appear to meet the conditions set by the user for the corresponding function.

## LINK MODE

The function of the link bit is to reduce the number of activity interrupts that the processor must service by setting the device to look for activity only after inactivity. For proper operation of this feature, the processor must still respond to the activity and inactivity interrupts by reading the INT\_SOURCE register (Address 0x30) and, therefore, clearing the interrupts. If an activity interrupt is not cleared, the device cannot go into autosleep mode.

## SLEEP MODE VS. LOW POWER MODE

In applications where a low data rate and low power consumption are desired (at the expense of noise performance), it is recommended that low power mode be used. The use of low power mode preserves the functionality of the DATA\_READY interrupt and the FIFO for postprocessing of the acceleration data. Sleep mode, while offering a low data rate and power consumption, is not intended for data acquisition.

However, when sleep mode is used in conjunction with the autosleep mode and the link mode, the part can automatically switch to a low power, low sampling rate mode when inactivity is detected. To prevent the generation of redundant inactivity interrupts, the inactivity interrupt is automatically disabled and activity is enabled. When the ADXL312 is in sleep mode, the host processor can also be placed into sleep mode or low power mode to save significant system power. Once activity is detected, the accelerometer automatically switches back to the original data rate of the application and provides an activity interrupt that can be used to wake up the host processor. Similar to when inactivity occurs, detection of activity events is disabled and inactivity is enabled.

## APPLICATIONS INFORMATION

## USING SELF-TEST

The self-test change is defined as the difference between the acceleration output of an axis with self-test enabled and the acceleration output of the same axis with self-test disabled (see Endnote 4 of Table 1). This definition assumes that the sensor does not move between these two measurements because, if the sensor moves, a non-self-test related shift corrupts the test.

Proper configuration of the ADXL312 is also necessary for an accurate self-test measurement. The part must be set with a data rate greater than or equal to 100 Hz. This is done by ensuring that a value greater than or equal to 0x0A is written into the rate bits (Bit D3 through Bit D0) in the BW\_RATE register (Address 0x2C). The part also must be placed into normal power operation by ensuring the LOW\_POWER bit in the BW\_RATE register is cleared (LOW\_POWER bit = 0) for accurate self-test measurements. It is recommended that the part be set to full-resolution, 12 g mode to ensure that there is sufficient dynamic range for the entire self-test shift. This is done by setting Bit D3 of the DATA\_FORMAT register (Address 0x31) and writing a value of 0x03 to the range bits (Bit D1 and Bit D0) of the DATA\_FORMAT register (Address 0x31). This results in a high dynamic range for measurement and a 2.9 m g /LSB scale factor.

After the part is configured for accurate self-test measurement, several samples of x-, y-, and z-axis acceleration data must be retrieved from the sensor and averaged together. The number of samples averaged is a choice of the system designer, but a recommended starting point is 0.1 sec worth of data, which corresponds to 10 samples at 100 Hz data rate. The averaged values must be stored and labeled appropriately as the self-test disabled data, that is, X ST\_OFF , Y ST\_OFF , and Z ST\_OFF .

Next, self-test must be enabled by setting Bit D7 of the DATA\_FOR-MAT register (Address 0x31). The output needs some time (about four samples) to settle after enabling self-test. After allowing the output to settle, several samples of the x-, y-, and z-axis acceleration data must be taken again and averaged.

It is recommended that the same number of samples be taken for this average as was previously taken. These averaged values must again be stored and labeled appropriately as the value with self-test enabled, that is, X ST\_ON , Y ST\_ON , and Z ST\_ON . Self-test can then be disabled by clearing Bit D7 of the DATA\_FORMAT register (Address 0x31).

With the stored values for self-test enabled and disabled, the self-test change is as follows:

XST = X ST\_ON - X ST\_OFF YST = Y ST\_ON - Y ST\_OFF

<!-- formula-not-decoded -->

Because the measured output for each axis is expressed in LSBs, XST , Y ST , and Z ST are also expressed in LSBs. These values can be converted to g 's of acceleration by multiplying each value by the 2.9 mg/LSB scale factor, if configured for full-resolution mode. Additionally, Table 15 through Table 18 correspond to the self-test range converted to LSBs and can be compared with the measured self-test change when operating at a V S of 3.3 V. For other voltages, the minimum and maximum self-test output values must be adjusted based on (multiplied by) the scale factors shown in Table 14. If the part was placed into ±1.5 g , 10-bit or full-resolution mode, the values listed in Table 15 must be used. Although the fixed 10-bit mode or a range other than 12 g can be used, a different set of values, as indicated in Table 16 through Table 18, must be used. Using a range below 6 g may result in insufficient dynamic range and must be considered when selecting the range of operation for measuring self-test.

If the self-test change is within the valid range, the test is considered successful. Generally, a part is considered to pass if the minimum magnitude of change is achieved. However, a part that changes by more than the maximum magnitude is not necessarily a failure.

## DATA FORMATTING OF UPPER DATA RATES

Formatting of output data at the 3200 Hz and 1600 Hz output data rates changes depending on the mode of operation (full-resolution or fixed 10-bit) and the selected output range.

When in full-resolution or ±1.5 g , 10-bit operation, the LSB of the output data-word is always 0. When data is right justified, this corresponds to Bit D0 of the DATAx0 register, as shown in Figure 34. When data is left justified and the part is operating in ±1.5 g , 10-bit mode, the LSB of the output data-word is Bit D6 of the DATAx0 register. In full-resolution operation when data is left justified, the location of the LSB changes according to the selected output range.

For a range of ±1.5 g , the LSB is Bit D6 of the DATAx0 register; for ±3 g , Bit D5 of the DATAx0 register; for ±6 g , Bit D4 of the DATAx0 register; and for ±12 g , Bit D3 of the DATAx0 register. This is shown in Figure 35.

The use of 3200 Hz and 1600 Hz output data rates for fixed 10-bit operation in the ±3 g , ±6 g , and ±12 g output ranges provides an LSB that is valid and that changes according to the applied acceleration. Therefore, in these modes of operation, Bit D0 is not always 0 when output data is right justified, and Bit D6 is not always 0 when output data is left justified. Operation at any data rate of 800 Hz or lower also provides a valid LSB in all ranges and modes that changes according to the applied acceleration.

## APPLICATIONS INFORMATION

Figure 34. Data Formatting of Full-Resolution and ±1.5 g, 10-Bit Modes of Operation When Output Data Is Right Justified

<!-- image -->

Figure 35. Data Formatting of Full-Resolution and ±1.5 g, 10-Bit Modes of Operation When Output Data Is Left Justified

<!-- image -->

## NOISE PERFORMANCE

The specification of noise shown in Table 1 corresponds to the best case noise of the ADXL312 in normal power operation (LOW\_POWER bit = 0 in BW\_RATE register, Address 0x2C). For normal power operation at data rates below 100 Hz, the noise of the ADXL312 is equivalent to the noise at 100 Hz ODR in LSBs. For data rates greater than 100 Hz, the noise increases roughly by a factor of √2 per doubling of the data rate. For example, at 400 Hz ODR, the noise on the x- and y-axes is typically less than 2.0 LSB rms and the noise on the z-axis is typically less than 3.0 LSB rms.

For low power operation (LOW\_POWER bit = 1 in BW\_RATE register, Address 0x2C) the noise of the ADXL312 is constant for all valid data rates shown in Table 8. This value is typically less than 2.4 LSB rms for the x- and y-axes and typically less than 3.5 LSB rms for the z-axis.

shows the typical Allan deviation for the ADXL312. The 1/f corner of the device, as shown in this figure, is very low, allowing absolute resolution of approximately 100 µg (assuming there is sufficient integration time). The figure also shows that the noise density is 340 µg/√Hz for the x- and y-axes and 470 µg/√Hz for the z-axis.

<!-- image -->

Figure 36. Root Allan Deviation

Figure 37. Normalized Noise vs. Supply Voltage, V S

<!-- image -->

## APPLICATIONS INFORMATION

## AXES OF ACCELERATION SENSITIVITY

Figure 38. Axes of Acceleration Sensitivity (Corresponding Output Voltage Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Figure 39. Output Response vs. Orientation to Gravity

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1, 2      | Temperature Range   | Package Description                      | Packing Quantity   | Package Option   |
|-----------------|---------------------|------------------------------------------|--------------------|------------------|
| ADXL312ACPZ     | -40°C to +105°C     | 32-Lead LFCSP (5mm x 5mm x 1.55mm w/ EP) |                    | CP-32-17         |
| ADXL312ACPZ-RL  | -40°C to +105°C     | 32-Lead LFCSP (5mm x 5mm x 1.55mm w/ EP) | Reel, 4000         | CP-32-17         |
| ADXL312WACPZ    | -40°C to +105°C     | 32-Lead LFCSP (5mm x 5mm x 1.55mm w/ EP) |                    | CP-32-17         |
| ADXL312WACPZ-RL | -40°C to +105°C     | 32-Lead LFCSP (5mm x 5mm x 1.55mm w/ EP) | Reel, 4000         | CP-32-17         |

## EVALUATION BOARDS

| Model 1       | Description      |
|---------------|------------------|
| EVAL-ADXL312Z | Evaluation Board |

Figure 40. 32-Lead Lead Frame Chip Scale Package [LFCSP] 5 mm × 5 mm Body and 1.45 mm Package Height (CP-32-17) Dimensions shown in millimeters

<!-- image -->

Figure 41. Sample Solder Pad Layout (Land Pattern)

<!-- image -->

Updated: September 15, 2022

## OUTLINE DIMENSIONS

## AUTOMOTIVE PRODUCTS

The ADXL312W models are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the commercial models; therefore, designers should review the Specifications section of this data sheet carefully. Only the automotive grade products shown are available for use in automotive applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->