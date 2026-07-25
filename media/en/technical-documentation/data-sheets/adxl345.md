<!-- lastmod 2022-06-02 -->
<!-- image -->

## FEATURES

- Ultralow power: as low as 23 µA in measurement mode and 0.1 µA in standby mode at V S = 2.5 V (typical)
- Power consumption scales automatically with bandwidth
- User-selectable resolution
- Fixed 10-bit resolution
- Full resolution, where resolution increases with g range, up to 13-bit resolution at ±16 g (maintaining 4 m g /LSB scale factor in all g ranges )
- Embedded memory management system with FIFO technology minimizes host processor load
- Single tap/double tap detection
- Activity/inactivity monitoring
- Free-fall detection
- Supply voltage range: 2.0 V to 3.6 V
- I/O voltage range: 1.7 V to V S
- SPI (3- and 4-wire) and I 2 C digital interfaces
- Flexible interrupt modes mappable to either interrupt pin
- Measurement ranges selectable via serial command
- Bandwidth selectable via serial command
- Wide temperature range (-40°C to +85°C)
- 10,000 g shock survival
- Pb free/RoHS compliant
- Small and thin: 3 mm × 5 mm × 1 mm LGA package

## APPLICATIONS

- Handsets
- Medical instrumentation

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## 3-Axis, ±2 g /±4 g /±8 g /±16 g Digital Accelerometer

- Gaming and pointing devices
- Industrial instrumentation
- Personal navigation devices
- Hard disk drive (HDD) protection

## GENERAL DESCRIPTION

The ADXL345 is a small, thin, ultralow power, 3-axis accelerometer with high resolution (13-bit) measurement at up to ±16 g . Digital output data is formatted as 16-bit twos complement and is accessible through either a SPI (3- or 4-wire) or I 2 C digital interface.

The ADXL345 is well suited for mobile device applications. It measures the static acceleration of gravity in tilt-sensing applications, as well as dynamic acceleration resulting from motion or shock. Its high resolution (3.9 m g /LSB) enables measurement of inclination changes less than 1.0°.

Several special sensing functions are provided. Activity and inactivity sensing detect the presence or lack of motion by comparing the acceleration on any axis with user-set thresholds. Tap sensing detects single and double taps in any direction. Free-fall sensing detects if the device is falling. These functions can be mapped individually to either of two interrupt output pins. An integrated memory management system with a 32-level first in, first out (FIFO) buffer can be used to store data to minimize host processor activity and lower overall system power consumption.

Low power modes enable intelligent motion-based power management with threshold sensing and active acceleration measurement at extremely low power dissipation.

The ADXL345 is supplied in a small, thin, 3 mm × 5 mm × 1 mm, 14-lead, plastic package.

## TABLE OF CONTENTS

| Features................................................................                                                                                       | 1                                                                                                                                                              | Bypass Mode....................................................21                                                                                              |    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Applications...........................................................                                                                                        | 1                                                                                                                                                              | FIFO Mode.......................................................21                                                                                             |    |
| General Description...............................................1                                                                                            |                                                                                                                                                                | Stream Mode....................................................21                                                                                              |    |
| Functional Block Diagram......................................1                                                                                                |                                                                                                                                                                | Trigger Mode....................................................21                                                                                             |    |
| Specifications........................................................                                                                                         | 3                                                                                                                                                              | Retrieving Data from FIFO...............................21                                                                                                     |    |
| Absolute Maximum Ratings...................................5                                                                                                   |                                                                                                                                                                | Self-Test...............................................................22                                                                                     |    |
| Thermal Resistance...........................................                                                                                                  | 5                                                                                                                                                              | Register Map.......................................................                                                                                            | 23 |
| Recommended Soldering Profile........................5                                                                                                         |                                                                                                                                                                | Register Definitions..........................................24                                                                                               |    |
| ESD Caution.......................................................5                                                                                            |                                                                                                                                                                | Applications Information......................................                                                                                                 | 29 |
| Pin Configuration and Function Descriptions........                                                                                                            | 6                                                                                                                                                              | Power Supply Decoupling................................29                                                                                                      |    |
| Typical Performance Characteristics.....................7                                                                                                      |                                                                                                                                                                | Mechanical Considerations for Mounting.........29                                                                                                              |    |
| Theory of Operation.............................................12                                                                                             |                                                                                                                                                                | Tap Detection...................................................                                                                                               | 29 |
| Power Sequencing...........................................12                                                                                                  |                                                                                                                                                                | Threshold.........................................................                                                                                             | 30 |
| Power Savings.................................................                                                                                                 | 13                                                                                                                                                             | Link Mode.........................................................30                                                                                           |    |
| Serial Communications........................................14                                                                                                |                                                                                                                                                                | Sleep Mode vs. Low Power Mode....................30                                                                                                            |    |
| SPI....................................................................14                                                                                      |                                                                                                                                                                | Offset Calibration..............................................30                                                                                             |    |
| I 2 C....................................................................                                                                                      | 17                                                                                                                                                             | Using Self-Test.................................................31                                                                                             |    |
| Interrupts.............................................................                                                                                        | 19                                                                                                                                                             | Asynchronous Data Readings..........................32                                                                                                         |    |
| DATA_READY..................................................20                                                                                                 |                                                                                                                                                                | Data Formatting of Upper Data Rates..............32                                                                                                            |    |
| SINGLE_TAP...................................................                                                                                                  | 20                                                                                                                                                             | Noise Performance...........................................33                                                                                                 |    |
| DOUBLE_TAP..................................................20                                                                                                 |                                                                                                                                                                | Operation at Voltages Other Than 2.5 V..........34                                                                                                             |    |
| Activity..............................................................20                                                                                       |                                                                                                                                                                | Offset Performance at Lowest Data Rates.......34                                                                                                               |    |
| Inactivity...........................................................                                                                                          | 20                                                                                                                                                             | Axes of Acceleration Sensitivity.......................                                                                                                        | 35 |
| FREE_FALL.....................................................                                                                                                 | 20                                                                                                                                                             | Layout and Design Recommendations............                                                                                                                  | 35 |
| Watermark........................................................20                                                                                            |                                                                                                                                                                | Outline Dimensions.............................................                                                                                                | 36 |
| Overrun............................................................                                                                                            | 20                                                                                                                                                             | Ordering Guide.................................................36                                                                                              |    |
| FIFO....................................................................                                                                                       | 21                                                                                                                                                             | Evaluation Boards............................................36                                                                                                |    |
| REVISION HISTORY                                                                                                                                               |                                                                                                                                                                |                                                                                                                                                                |    |
| 5/2022-Rev. F to Rev. G                                                                                                                                        |                                                                                                                                                                |                                                                                                                                                                |    |
| Deleted Package Information Section..............................................................................................................5             | Deleted Package Information Section..............................................................................................................5             | Deleted Package Information Section..............................................................................................................5             |    |
| Added Recommended Soldering Profile Section.............................................................................................5                      | Added Recommended Soldering Profile Section.............................................................................................5                      | Added Recommended Soldering Profile Section.............................................................................................5                      |    |
| Moved Figure 2 and Table 4............................................................................................................................         | Moved Figure 2 and Table 4............................................................................................................................         | Moved Figure 2 and Table 4............................................................................................................................         |  5 |
| Moved Table 13..............................................................................................................................................19 | Moved Table 13..............................................................................................................................................19 | Moved Table 13..............................................................................................................................................19 |    |
| Change to Using Self-Test Section................................................................................................................31            | Change to Using Self-Test Section................................................................................................................31            | Change to Using Self-Test Section................................................................................................................31            |    |
| Added Asynchronous Data Readings Section...............................................................................................32                      | Added Asynchronous Data Readings Section...............................................................................................32                      | Added Asynchronous Data Readings Section...............................................................................................32                      |    |

## SPECIFICATIONS

TA = 25°C, V S = 2.5 V, V DD I/O = 1.8 V, acceleration = 0 g , C S = 10 µF tantalum, C I/O = 0.1 µF, output data rate (ODR) = 800 Hz, unless otherwise noted. All minimum and maximum specifications are guaranteed. Typical specifications are not guaranteed.

Table 1.

| Parameter                                                     | Test Conditions                                                          |   Min | Typ 1           |   Max | Unit     |
|---------------------------------------------------------------|--------------------------------------------------------------------------|-------|-----------------|-------|----------|
| SENSOR INPUT                                                  | Each axis                                                                |       |                 |       |          |
| Measurement Range                                             | User selectable                                                          |       | ±2, ±4, ±8, ±16 |       | g        |
| Nonlinearity                                                  | Percentage of full scale                                                 |       | ±0.5            |       | %        |
| Inter-Axis Alignment Error                                    |                                                                          |       | ±0.1            |       | Degrees  |
| Cross-Axis Sensitivity 2                                      |                                                                          |       | ±1              |       | %        |
| OUTPUT RESOLUTION                                             | Each axis                                                                |       |                 |       |          |
| All g Ranges                                                  | 10-bit resolution                                                        |       | 10              |       | Bits     |
| ±2 g Range                                                    | Full resolution                                                          |       | 10              |       | Bits     |
| ±4 g Range                                                    | Full resolution                                                          |       | 11              |       | Bits     |
| ±8 g Range                                                    | Full resolution                                                          |       | 12              |       | Bits     |
| ±16 g Range                                                   | Full resolution                                                          |       | 13              |       | Bits     |
| SENSITIVITY                                                   | Each axis                                                                |       |                 |       |          |
| Sensitivity at X OUT , Y OUT , Z OUT                          | All g -ranges, full resolution                                           |   230 | 256             |   282 | LSB/ g   |
|                                                               | ±2 g , 10-bit resolution                                                 |   230 | 256             |   282 | LSB/ g   |
|                                                               | ±4 g , 10-bit resolution                                                 |   115 | 128             |   141 | LSB/ g   |
|                                                               | ±8 g, 10-bit resolution                                                  |    57 | 64              |    71 | LSB/ g   |
|                                                               | ±16 g, 10-bit resolution                                                 |    29 | 32              |    35 | LSB/ g   |
| Sensitivity Deviation from Ideal                              | All g -ranges                                                            |       | ±1.0            |       | %        |
| Scale Factor at X OUT , Y OUT , Z OUT                         | All g -ranges, full resolution                                           |   3.5 | 3.9             |   4.3 | m g/ LSB |
|                                                               | ±2 g , 10-bit resolution                                                 |   3.5 | 3.9             |   4.3 | m g/ LSB |
|                                                               | ±4 g, 10-bit resolution                                                  |   7.1 | 7.8             |   8.7 | m g/ LSB |
|                                                               | ±8 g, 10-bit resolution                                                  |  14.1 | 15.6            |  17.5 | m g/ LSB |
|                                                               | ±16 g, 10-bit resolution                                                 |  28.6 | 31.2            |  34.5 | m g/ LSB |
| Sensitivity Change Due to Temperature                         |                                                                          |       | ±0.01           |       | %/°C     |
| 0 g OFFSET                                                    | Each axis                                                                |       |                 |       |          |
| 0 g Output for X OUT , Y OUT                                  |                                                                          |  -150 | 0               |  +150 | m g      |
| 0 g Output for Z OUT                                          |                                                                          |  -250 | 0               |  +250 | m g      |
| 0 g Output Deviation from Ideal, X OUT , Y OUT                |                                                                          |       | ±35             |       | m g      |
| 0 g Output Deviation from Ideal, Z OUT                        |                                                                          |       | ±40             |       | m g      |
| 0 g Offset vs. Temperature for X-, Y-Axes                     |                                                                          |       | ±0.4            |       | m g /°C  |
| 0 g Offset vs. Temperature for Z-Axis                         |                                                                          |       | ±1.2            |       | m g /°C  |
| NOISE                                                         |                                                                          |       |                 |       |          |
| X-, Y-Axes                                                    |                                                                          |       | 0.75            |       | LSB rms  |
|                                                               | all g -ranges, full resolution                                           |       | 1.1             |       | LSB rms  |
| Z-Axis                                                        | ODR = 100 Hz for ±2 g , 10-bit resolution all g -ranges, full resolution |       |                 |       |          |
| OUTPUT DATA RATE AND BANDWIDTH Output Data Rate (ODR) 3, 4, 5 | User selectable                                                          |   0.1 |                 |  3200 | Hz       |
| SELF-TEST 6                                                   |                                                                          |       |                 |       |          |
| Output Change in X-Axis                                       |                                                                          |  0.20 |                 |  2.10 | g        |

## SPECIFICATIONS

Table 1.

| Parameter                           | Test Conditions   |   Min |   Typ 1 | Max   | Unit   |
|-------------------------------------|-------------------|-------|---------|-------|--------|
| Output Change in Y-Axis             |                   | -2.10 |         | -0.20 | g      |
| Output Change in Z-Axis             |                   |  0.30 |         | 3.40  | g      |
| POWER SUPPLY                        |                   |       |         |       |        |
| Operating Voltage Range (V S )      |                   |   2.0 |     2.5 | 3.6   | V      |
| Interface Voltage Range (V DD I/O ) |                   |   1.7 |     1.8 | V S   | V      |
| Supply Current                      | ODR ≥ 100 Hz      |       |     140 |       | µA     |
|                                     | ODR < 10 Hz       |       |      30 |       | µA     |
| Standby Mode Leakage Current        |                   |       |     0.1 |       | µA     |
| Turn-On and Wake-Up Time 7          | ODR = 3200 Hz     |       |     1.4 |       | ms     |
| TEMPERATURE                         |                   |       |         |       |        |
| Operating Temperature Range         |                   |   -40 |         | +85   | °C     |
| WEIGHT                              |                   |       |         |       |        |
| Device Weight                       |                   |       |      30 |       | m g    |

- 1 The typical specifications shown are for at least 68% of the population of parts and are based on the worst case of mean ±1 σ, except for 0 g output and sensitivity, which represents the target value. For 0 g offset and sensitivity, the deviation from the ideal describes the worst case of mean ±1 σ.
- 2 Cross-axis sensitivity is defined as coupling between any two axes.
- 3 Bandwidth is the -3 dB frequency and is half the output data rate, bandwidth = ODR/2.
- 4 The output format for the 3200 Hz and 1600 Hz ODRs is different than the output format for the remaining ODRs. This difference is described in the Data Formatting of Upper Data Rates section.
- 5 Output data rates below 6.25 Hz exhibit additional offset shift with increased temperature, depending on selected output data rate. Refer to the Offset Performance at Lowest Data Rates section for details.
- 6 Self-test change is defined as the output ( g ) when the SELF\_TEST bit = 1 (in the DATA\_FORMAT register, Address 0x31) minus the output ( g ) when the SELF\_TEST bit = 0. Due to device filtering, the output reaches its final value after 4 × τ when enabling or disabling self-test, where τ = 1/(data rate). The part must be in normal power operation (LOW\_POWER bit = 0 in the BW\_RATE register, Address 0x2C) for self-test to operate correctly.
- 7 Turn-on and wake-up times are determined by the user-defined bandwidth. At a 100 Hz data rate, the turn-on and wake-up times are each approximately 11.1 ms. For other data rates, the turn-on and wake-up times are each approximately τ + 1.1 in milliseconds, where τ = 1/(data rate).

## ABSOLUTE MAXIMUM RATINGS

| Parameter                                         | Rating                                                 |
|---------------------------------------------------|--------------------------------------------------------|
| Acceleration                                      | Acceleration                                           |
| Any Axis, Unpowered                               | 10,000 g                                               |
| Any Axis, Powered                                 | 10,000 g                                               |
| V S                                               | -0.3 V to +3.9 V                                       |
| V DD I/O                                          | -0.3 V to +3.9 V                                       |
| Digital Pins                                      | -0.3 V to V DD I/O + 0.3 V or 3.9 V, whichever is less |
| All Other Pins                                    | -0.3 V to +3.9 V                                       |
| Output Short-Circuit Duration (Any Pin to Ground) | Indefinite                                             |
| Temperature Range                                 | Temperature Range                                      |
| Powered                                           | -40°C to +105°C                                        |
| Storage                                           | -40°C to +105°C                                        |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Table 3. Package Characteristics

| Package Type    | θ JA    | θ JC   | Device Weight   |
|-----------------|---------|--------|-----------------|
| 14-Terminal LGA | 150°C/W | 85°C/W | 30 mg           |

## RECOMMENDED SOLDERING PROFILE

Figure 2 and Table 4 provide details about the recommended soldering profile.

Figure 2. Recommended Soldering Profile

<!-- image -->

Table 4. Recommended Soldering Profile 1, 2

|                                                                             | Condition         | Condition         |
|-----------------------------------------------------------------------------|-------------------|-------------------|
| Profile Feature                                                             | Sn63/Pb37         | Pb-Free           |
| Average Ramp Rate from Liquid Temperature (T L ) to Peak Temperature (T P ) | 3°C/sec max- imum | 3°C/sec maxi- mum |
| Preheat                                                                     |                   |                   |
| Minimum Temperature (T SMIN )                                               | 100°C             | 150°C             |
| Maximum Temperature (T SMAX )                                               | 150°C             | 200°C             |
| Time from T SMIN to T SMAX (t S )                                           | 60 sec to 120 sec | 60 sec to 180 sec |
| T SMAX to T L Ramp-Up Rate                                                  | 3°C/sec max- imum | 3°C/sec maxi- mum |
| Liquid Temperature (T L )                                                   | 183°C             | 217°C             |
| Time Maintained Above T L (t L )                                            | 60 sec to 150 sec | 60 sec to 150 sec |
| Peak Temperature (T P )                                                     | 240 + 0/-5°C      | 260 + 0/-5°C      |
| Time of Actual T P - 5°C (t P )                                             | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                                              | 6°C/sec max- imum | 6°C/sec maxi- mum |
| Time 25°C to Peak Temperature                                               | 6 minutes maximum | 8 minutes maximum |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration (Top View)

<!-- image -->

Table 5. Pin Function Descriptions

|   Pin No. | Mnemonic        | Description                                                                                   |
|-----------|-----------------|-----------------------------------------------------------------------------------------------|
|         1 | V DD I/O        | Digital Interface Supply Voltage.                                                             |
|         2 | GND             | This pin must be connected to ground.                                                         |
|         3 | RESERVED        | Reserved. This pin must be connected to V S or left open.                                     |
|         4 | GND             | This pin must be connected to ground.                                                         |
|         5 | GND             | This pin must be connected to ground.                                                         |
|         6 | V S             | Supply Voltage.                                                                               |
|         7 | CS              | Chip Select.                                                                                  |
|         8 | INT1            | Interrupt 1 Output.                                                                           |
|         9 | INT2            | Interrupt 2 Output.                                                                           |
|        10 | NC              | Not Internally Connected.                                                                     |
|        11 | RESERVED        | Reserved. This pin must be connected to ground or left open.                                  |
|        12 | SDO/ALT ADDRESS | Serial Data Output (SPI 4-Wire)/Alternate I 2 C Address Select (I 2 C).                       |
|        13 | SDA/SDI/SDIO    | Serial Data (I 2 C)/Serial Data Input (SPI 4-Wire)/Serial Data Input and Output (SPI 3-Wire). |
|        14 | SCL/SCLK        | Serial Communications Clock. SCL is the clock for I 2 C, and SCLK is the clock for SPI.       |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. X-Axis Zero g Offset at 25°C, V S = 2.5 V

<!-- image -->

Figure 5. Y-Axis Zero g Offset at 25°C, V S = 2.5 V

<!-- image -->

Figure 6. Z-Axis Zero g Offset at 25°C, V S = 2.5 V

<!-- image -->

Figure 7. X-Axis Zero g Offset at 25°C, V S = 3.3 V

Figure 8. Y-Axis Zero g Offset at 25°C, V S = 3.3 V

<!-- image -->

Figure 9. Z-Axis Zero g Offset at 25°C, V S = 3.3 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. X-Axis Zero g Offset Temperature Coefficient, V S = 2.5 V

<!-- image -->

Figure 11. Y-Axis Zero g Offset Temperature Coefficient, V S = 2.5 V

<!-- image -->

Figure 12. Z-Axis Zero g Offset Temperature Coefficient, V S = 2.5 V

<!-- image -->

Figure 13. X-Axis Zero g Offset vs. Temperature-45 Parts Soldered to PCB, VS  = 2.5 V

Figure 14. Y-Axis Zero g Offset vs. Temperature-45 Parts Soldered to PCB, VS  = 2.5 V

<!-- image -->

Figure 15. Z-Axis One g Offset vs. Temperature-45 Parts Soldered to PCB, VS  = 2.5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. X-Axis Sensitivity at 25°C, V S = 2.5 V, Full Resolution

<!-- image -->

Figure 17. Y-Axis Sensitivity at 25°C, V S = 2.5 V, Full Resolution

<!-- image -->

Figure 18. Z-Axis Sensitivity at 25°C, V S = 2.5 V, Full Resolution

<!-- image -->

Figure 19. X-Axis Sensitivity Temperature Coefficient, V S = 2.5 V

Figure 20. Y-Axis Sensitivity Temperature Coefficient, V S = 2.5 V

<!-- image -->

Figure 21. Z-Axis Sensitivity Temperature Coefficient, V S = 2.5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 22. X-Axis Sensitivity vs. Temperature-Eight Parts Soldered to PCB, VS  = 2.5 V, Full Resolution

<!-- image -->

Figure 23. Y-Axis Sensitivity vs. Temperature-Eight Parts Soldered to PCB, VS  = 2.5 V, Full Resolution

<!-- image -->

Figure 24. Z-Axis Sensitivity vs. Temperature-Eight Parts Soldered to PCB, VS  = 2.5 V, Full Resolution

<!-- image -->

Figure 25. X-Axis Sensitivity vs. Temperature-Eight Parts Soldered to PCB, VS  = 3.3 V, Full Resolution

Figure 26. Y-Axis Sensitivity vs. Temperature-Eight Parts Soldered to PCB, VS  = 3.3 V, Full Resolution

<!-- image -->

Figure 27. Z-Axis Sensitivity vs. Temperature-Eight Parts Soldered to PCB, VS  = 3.3 V, Full Resolution

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 28. X-Axis Self-Test Response at 25°C, V S = 2.5 V

<!-- image -->

Figure 29. Y-Axis Self-Test Response at 25°C, V S = 2.5 V

<!-- image -->

Figure 30. Z-Axis Self-Test Response at 25°C, V S = 2.5 V

<!-- image -->

Figure 31. Current Consumption at 25°C, 100 Hz Output Data Rate, V S = 2.5 V

Figure 32. Current Consumption vs. Output Data Rate at 25°C-10 Parts, V S = 2.5 V

<!-- image -->

Figure 33. Supply Current vs. Supply Voltage, V S at 25°C

<!-- image -->

## THEORY OF OPERATION

The ADXL345 is a complete 3-axis acceleration measurement system with a selectable measurement range of ±2 g, ± 4 g, ± 8 g , or ±16 g . It measures both dynamic acceleration resulting from motion or shock and static acceleration, such as gravity, that allows the device to be used as a tilt sensor.

The sensor is a polysilicon surface-micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against forces due to applied acceleration.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the proof mass and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase-sensitive demodulation is used to determine the magnitude and polarity of the acceleration.

## POWER SEQUENCING

Power can be applied to V S or V DD I/O in any sequence without damaging the ADXL345. All possible power-on modes are summar-

## Table 6. Power Sequencing

| Condition              | V S   | V DD I/O   | Description                                                                                                                                                                                                               |
|------------------------|-------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Power Off              | Off   | Off        | The device is completely off, but there is a potential for a communication bus conflict.                                                                                                                                  |
| Bus Disabled           | On    | Off        | The device is on in standby mode, but communication is unavailable and creates a conflict on the communication bus. The duration of this state should be minimized during power-up to prevent a conflict.                 |
| Bus Enabled            | Off   | On         | No functions are available, but the device does not create a conflict on the communication bus.                                                                                                                           |
| Standby or Measurement | On    | On         | At power-up, the device is in standby mode, awaiting a command to enter measurement mode, and all sensor functions are off. After the device is instructed to enter measurement mode, all sensor functions are available. |

ized in Table 6. The interface voltage level is set with the interface supply voltage, V DD I/O , which must be present to ensure that the ADXL345 does not create a conflict on the communication bus. For single-supply operation, V DD I/O can be the same as the main supply, V S . In a dual-supply application, however, V DD I/O can differ from V S to accommodate the desired interface voltage, as long as V S is greater than or equal to V DD I/O . When power cycling is required, V S and V DD I/O must be completely discharged (to GND) before powering the device back on.

After V S is applied, the device enters standby mode, where power consumption is minimized and the device waits for V DD I/O to be applied and for the command to enter measurement mode to be received. (This command can be initiated by setting the measure bit (Bit D3) in the POWER\_CTL register (Address 0x2D).) In addition, while the device is in standby mode, any register can be written to or read from to configure the part. It is recommended to configure the device in standby mode and then to enable measurement mode. Clearing the measure bit returns the device to the standby mode.

## THEORY OF OPERATION

## POWER SAVINGS

## Power Modes

The ADXL345 automatically modulates its power consumption in proportion to its output data rate, as outlined in Table 7. If additional power savings is desired, a lower power mode is available. In this mode, the internal sampling rate is reduced, allowing for power savings in the 12.5 Hz to 400 Hz data rate range at the expense of slightly greater noise. To enter low power mode, set the LOW\_POWER bit (Bit 4) in the BW\_RATE register (Address 0x2C). Table 8 shows the current consumption in low power mode for cases where there is an advantage to using low power mode. Use of low power mode for a data rate not shown in Table 8 does not provide any advantage over the same data rate in normal power mode. Therefore, it is recommended that only data rates shown in Table 8 be used in low power mode. The current consumption values shown in Table 7 and Table 8 are for a V S of 2.5 V.

Table 7. Typical Current Consumption vs. Data Rate (T A = 25°C, V S = 2.5 V, VDD I/O = 1.8 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                    3200 |             1600 |        1111 |         140 |
|                    1600 |              800 |        1110 |          90 |
|                     800 |              400 |        1101 |         140 |
|                     400 |              200 |        1100 |         140 |
|                     200 |              100 |        1011 |         140 |
|                     100 |               50 |        1010 |         140 |
|                      50 |               25 |        1001 |          90 |
|                      25 |             12.5 |        1000 |          60 |
|                    12.5 |             6.25 |        0111 |          50 |
|                    6.25 |             3.13 |        0110 |          45 |
|                    3.13 |             1.56 |        0101 |          40 |
|                    1.56 |             0.78 |        0100 |          34 |
|                    0.78 |             0.39 |        0011 |          23 |
|                    0.39 |             0.20 |        0010 |          23 |
|                    0.20 |             0.10 |        0001 |          23 |
|                    0.10 |             0.05 |        0000 |          23 |

Table 8. Typical Current Consumption vs. Data Rate, Low Power Mode (T A = 25°C, V S = 2.5 V, V DD I/O = 1.8 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                     400 |              200 |        1100 |          90 |
|                     200 |              100 |        1011 |          60 |
|                     100 |               50 |        1010 |          50 |
|                      50 |               25 |        1001 |          45 |
|                      25 |             12.5 |        1000 |          40 |
|                    12.5 |             6.25 |        0111 |          34 |

## Auto Sleep Mode

Additional power can be saved if the ADXL345 automatically switches to sleep mode during periods of inactivity. To enable this feature, set the THRESH\_INACT register (Address 0x25) and the TIME\_INACT register (Address 0x26) each to a value that signifies inactivity (the appropriate value depends on the application), and then set the AUTO\_SLEEP bit (Bit D4) and the link bit (Bit D5) in the POWER\_CTL register (Address 0x2D). Current consumption at the sub-12.5 Hz data rates that are used in this mode is typically 23 µA for a V S of 2.5 V.

## Standby Mode

For even lower power operation, standby mode can be used. In standby mode, current consumption is reduced to 0.1 µA (typical). In this mode, no measurements are made. Enter standby mode by clearing the measure bit (Bit D3) in the POWER\_CTL register (Address 0x2D). Placing the device into standby mode preserves the contents of FIFO.

## SERIAL COMMUNICATIONS

I 2 C and SPI digital communications are available. In both cases, the ADXL345 operates as a slave. I 2 C mode is enabled if the CS pin is tied high to V DD I/O . The CS pin should always be tied high to V DD I/O or be driven by an external controller because there is no default mode if the CS pin is left unconnected. Therefore, not taking these precautions may result in an inability to communicate with the part. In SPI mode, the CS pin is controlled by the bus master. In both SPI and I 2 C modes of operation, data transmitted from the ADXL345 to the master device should be ignored during writes to the ADXL345.

## SPI

For SPI, either 3- or 4-wire configuration is possible, as shown in the connection diagrams in Figure 34 and Figure 35. Clearing the SPI bit (Bit D6) in the DATA\_FORMAT register (Address 0x31) selects 4-wire mode, whereas setting the SPI bit selects 3-wire mode. The maximum SPI clock speed is 5 MHz with 100 pF maximum loading, and the timing scheme follows clock polarity (CPOL) = 1 and clock phase (CPHA) = 1. If power is applied to the ADXL345 before the clock polarity and phase of the host processor are configured, the CS pin should be brought high before changing the clock polarity and phase. When using 3-wire SPI, it is recommended that the SDO pin be either pulled up to V DD I/O or pulled down to GND via a 10 kΩ resistor.

Figure 35. 4-Wire SPI Connection Diagram

<!-- image -->

CS is the serial port enable line and is controlled by the SPI master. This line must go low at the start of a transmission and high at the end of a transmission, as shown in Figure 37. SCLK is the serial port clock and is supplied by the SPI master. SCLK should idle high during a period of no transmission. SDI and SDO are the serial data input and output, respectively. Data is updated on the falling edge of SCLK and should be sampled on the rising edge of SCLK.

To read or write multiple bytes in a single transmission, the multiple-byte bit, located after the R/W bit in the first byte transfer

(MB in Figure 37 to Figure 39), must be set. After the register addressing and the first byte of data, each subsequent set of clock pulses (eight clock pulses) causes the ADXL345 to point to the next register for a read or write. This shifting continues until the clock pulses cease and CS is deasserted. To perform reads or writes on different, nonsequential registers, CS must be deasserted between transmissions and the new register must be addressed separately.

The timing diagram for 3-wire SPI reads or writes is shown in Figure 39. The 4-wire equivalents for SPI writes and reads are shown in Figure 37 and Figure 38, respectively. For correct operation of the part, the logic thresholds and timing parameters in Table 9 and Table 10 must be met at all times.

Use of the 3200 Hz and 1600 Hz output data rates is only recommended with SPI communication rates greater than or equal to 2 MHz. The 800 Hz output data rate is recommended only for communication speeds greater than or equal to 400 kHz, and the remaining data rates scale proportionally. For example, the minimum recommended communication speed for a 200 Hz output data rate is 100 kHz. Operation at an output data rate above the recommended maximum may result in undesirable effects on the acceleration data, including missing samples or additional noise.

## Preventing Bus Traffic Errors

The ADXL345 CS pin is used both for initiating SPI transactions, and for enabling I 2 C mode. When the ADXL345 is used on a SPI bus with multiple devices, its CS pin is held high while the master communicates with the other devices. There may be conditions where a SPI command transmitted to another device looks like a valid I 2 C command. In this case, the ADXL345 would interpret this as an attempt to communicate in I 2 C mode, and could interfere with other bus traffic. Unless bus traffic can be adequately controlled to assure such a condition never occurs, it is recommended to add a logic gate in front of the SDI pin as shown in Figure 36. This OR gate will hold the SDA line high when CS is high to prevent SPI bus traffic at the ADXL345 from appearing as an I 2 C start command.

Figure 36. Recommended SPI Connection Diagram when Using Multiple SPI Devices on a Single Bus

<!-- image -->

## SERIAL COMMUNICATIONS

Figure 39. SPI 3-Wire Read/Write

<!-- image -->

Table 9. SPI Digital Input/Output

|                                   |                            | Limit 1        | Limit 1        |      |
|-----------------------------------|----------------------------|----------------|----------------|------|
| Parameter                         | Test Conditions            | Min            | Max            | Unit |
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

## SERIAL COMMUNICATIONS

Table 10. SPI Timing (T A = 25°C, V S = 2.5 V, V DD I/O = 1.8 V) 1

|           | Limit 2, 3   | Limit 2, 3   |      |                                                                               |
|-----------|--------------|--------------|------|-------------------------------------------------------------------------------|
| Parameter | Min          | Max          | Unit | Description                                                                   |
| f SCLK    |              | 5            | MHz  | SPI clock frequency                                                           |
| t SCLK    | 200          |              | ns   | 1/(SPI clock frequency) mark-space ratio for the SCLK input is 40/60 to 60/40 |
| t DELAY   | 5            |              | ns   | CS falling edge to SCLK falling edge                                          |
| t QUIET   | 5            |              | ns   | SCLK rising edge to CS rising edge                                            |
| t DIS     |              | 10           | ns   | CS rising edge to SDO disabled                                                |
| t CS,DIS  | 150          |              | ns   | CS deassertion between SPI communications                                     |
| t S       | 0.3 × t SCLK |              | ns   | SCLK low pulse width (space)                                                  |
| t M       | 0.3 × t SCLK |              | ns   | SCLK high pulse width (mark)                                                  |
| t SETUP   | 5            |              | ns   | SDI valid before SCLK rising edge                                             |
| t HOLD    | 5            |              | ns   | SDI valid after SCLK rising edge                                              |
| t SDO     |              | 40           | ns   | SCLK falling edge to SDO/SDIO output transition                               |
| t R 4     |              | 20           | ns   | SDO/SDIO output high to output low transition                                 |
| t F 4     |              | 20           | ns   | SDO/SDIO output low to output high transition                                 |

## SERIAL COMMUNICATIONS

## I 2 C

With CS tied high to V DD I/O , the ADXL345 is in I 2 C mode, requiring a simple 2-wire connection, as shown in Figure 40. The ADXL345 conforms to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductors. It supports standard (100 kHz) and fast (400 kHz) data transfer modes if the bus parameters given in Table 11 and Table 12 are met. Single- or multiple-byte reads/writes are supported, as shown in Figure 41. With the ALT ADDRESS pin high, the 7-bit I 2 C address for the device is 0x1D, followed by the R/W bit. This translates to 0x3A for a write and 0x3B for a read. An alternate I 2 C address of 0x53 (followed by the R/W bit) can be chosen by grounding the SDO/ALT ADDRESS pin (Pin 12). This translates to 0xA6 for a write and 0xA7 for a read.

There are no internal pull-up or pull-down resistors for any unused pins; therefore, there is no known state or default state for the CS or ALT ADDRESS pin if left floating or unconnected. It is required that the CS pin be connected to V DD I/O and that the ALT ADDRESS pin be connected to either V DD I/O or GND when using I 2 C.

Due to communication speed limitations, the maximum output data rate when using 400 kHz I 2 C is 800 Hz and scales linearly with a

## Table 11. I 2 C Digital Input/Output

|                                  |                             | Limit 1        | Limit 1        |      |
|----------------------------------|-----------------------------|----------------|----------------|------|
| Parameter                        | Test Conditions             | Min            | Max            | Unit |
| Digital Input                    |                             |                |                |      |
| Low Level Input Voltage (V IL )  |                             |                | 0.3 × V DD I/O | V    |
| High Level Input Voltage (V IH ) |                             | 0.7 × V DD I/O |                | V    |
| Low Level Input Current (I IL )  | V IN = V DD I/O             |                | 0.1            | µA   |
| High Level Input Current (I IH ) | V IN = 0 V                  | -0.1           |                | µA   |
| Digital Output                   |                             |                |                |      |
| Low Level Output Voltage (V OL ) | V DD I/O < 2 V, I OL = 3 mA |                | 0.2 × V DD I/O | V    |
|                                  | V DD I/O ≥ 2 V, I OL = 3 mA |                | 400            | mV   |
| Low Level Output Current (I OL ) | V OL = V OL, max            | 3              |                | mA   |
| Pin Capacitance                  | f IN = 1 MHz, V IN = 2.5 V  |                | 8              | pF   |

1 Limits based on characterization results; not production tested.

change in the I 2 C communication speed. For example, using I 2 C at 100 kHz would limit the maximum ODR to 200 Hz. Operation at an output data rate above the recommended maximum may result in undesirable effect on the acceleration data, including missing samples or additional noise.

Figure 40. I 2 C Connection Diagram (Address 0x53)

<!-- image -->

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed V DD I/O by more than 0.3 V. External pull-up resistors, R P , are necessary for proper I 2 C operation. Refer to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, when selecting pull-up resistor values to ensure proper operation.

## SERIAL COMMUNICATIONS

## Table 12. I 2 C Timing (T A = 25°C, V S = 2.5 V, V DD I/O = 1.8 V)

| Parameter      |     |     | Unit   | Description                                                          |
|----------------|-----|-----|--------|----------------------------------------------------------------------|
| Parameter      | Min | Max | Unit   | Description                                                          |
| f SCL          |     | 400 | kHz    | SCL clock frequency                                                  |
| t 1            | 2.5 |     | µs     | SCL cycle time                                                       |
| t 2            | 0.6 |     | µs     | t HIGH , SCL high time                                               |
| t 3            | 1.3 |     | µs     | t LOW , SCL low time                                                 |
| t 4            | 0.6 |     | µs     | t HD, STA , start/repeated start condition hold time                 |
| t 5            | 100 |     | ns     | t SU, DAT , data setup time                                          |
| t 6 3, 4, 5, 6 | 0   | 0.9 | µs     | t HD, DAT , data hold time                                           |
| t 7            | 0.6 |     | µs     | t SU, STA , setup time for repeated start                            |
| t 8            | 0.6 |     | µs     | t SU, STO , stop condition setup time                                |
| t 9            | 1.3 |     | µs     | t BUF , bus-free time between a stop condition and a start condition |
| t 10           |     | 300 | ns     | t R , rise time of both SCL and SDA when receiving                   |
|                | 0   |     | ns     | t R , rise time of both SCL and SDA when receiving or transmitting   |
| t 11           |     | 300 | ns     | t F , fall time of SDA when receiving                                |
|                |     | 250 | ns     | t F , fall time of both SCL and SDA when transmitting                |
| C b            |     | 400 | pF     | Capacitive load for each bus line                                    |

- 2 All values referred to the V IH and the V IL levels given in Table 11.
- 3 t 6 is the data hold time that is measured from the falling edge of SCL. It applies to data in transmission and acknowledge.
- 4 A transmitting device must internally provide an output hold time of at least 300 ns for the SDA signal (with respect to V IH(min) of the SCL signal) to bridge the undefined region of the falling edge of SCL.
- 5 The maximum t 6 value must be met only if the device does not stretch the low period (t 3 ) of the SCL signal.
- 6 The maximum value for t 6 is a function of the clock low time (t 3 ), the clock rise time (t 10 ), and the minimum data setup time (t 5(min) ). This value is calculated as t 6(max) = t 3 -t 10 - t 5(min) .

Figure 42. I 2 C Timing Diagram

<!-- image -->

## INTERRUPTS

The ADXL345 provides two output pins for driving interrupts: INT1 and INT2. Both interrupt pins are push-pull, low impedance pins with output specifications shown in Table 13. The default configuration of the interrupt pins is active high. This can be changed to active low by setting the INT\_INVERT bit in the DATA\_FORMAT (Address 0x31) register. All functions can be used simultaneously, with the only limiting feature being that some functions may need to share interrupt pins.

Interrupts are enabled by setting the appropriate bit in the INT\_EN-ABLE register (Address 0x2E) and are mapped to either the INT1 pin or the INT2 pin based on the contents of the INT\_MAP register (Address 0x2F). When initially configuring the interrupt pins, it is recommended that the functions and interrupt mapping be done before enabling the interrupts. When changing the configuration of an

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

1 Limits based on characterization results, not production tested.

2 Rise time is measured as the transition time from V OL, max to V OH, min of the interrupt pin.

3 Fall time is measured as the transition time from V OH, min to V OL, max of the interrupt pin.

interrupt, it is recommended that the interrupt be disabled first, by clearing the bit corresponding to that function in the INT\_ENABLE register, and then the function be reconfigured before enabling the interrupt again. Configuration of the functions while the interrupts are disabled helps to prevent the accidental generation of an interrupt before desired.

The interrupt functions are latched and cleared by either reading the data registers (Address 0x32 to Address 0x37) until the interrupt condition is no longer valid for the data-related interrupts or by reading the INT\_SOURCE register (Address 0x30) for the remaining interrupts. This section describes the interrupts that can be set in the INT\_ENABLE register and monitored in the INT\_SOURCE register.

## INTERRUPTS

## DATA\_READY

The DATA\_READY bit is set when new data is available and is cleared when no new data is available.

## SINGLE\_TAP

The SINGLE\_TAP bit is set when a single acceleration event that is greater than the value in the THRESH\_TAP register (Address 0x1D) occurs for less time than is specified in the DUR register (Address 0x21).

## DOUBLE\_TAP

The DOUBLE\_TAP bit is set when two acceleration events that are greater than the value in the THRESH\_TAP register (Address 0x1D) occur for less time than is specified in the DUR register (Address 0x21), with the second tap starting after the time specified by the latent register (Address 0x22) but within the time specified in the window register (Address 0x23). See the Tap Detection section for more details.

## ACTIVITY

The activity bit is set when acceleration greater than the value stored in the THRESH\_ACT register (Address 0x24) is experienced on any participating axis, set by the ACT\_INACT\_CTL register (Address 0x27).

## INACTIVITY

The inactivity bit is set when acceleration of less than the value stored in the THRESH\_INACT register (Address 0x25) is ex- perienced for more time than is specified in the TIME\_INACT register (Address 0x26) on all participating axes, as set by the ACT\_INACT\_CTL register (Address 0x27). The maximum value for TIME\_INACT is 255 sec.

## FREE\_FALL

The FREE\_FALL bit is set when acceleration of less than the value stored in the THRESH\_FF register (Address 0x28) is experienced for more time than is specified in the TIME\_FF register (Address 0x29) on all axes (logical AND). The FREE\_FALL interrupt differs from the inactivity interrupt as follows: all axes always participate and are logically AND'ed, the timer period is much smaller (1.28 sec maximum), and the mode of operation is always dc-coupled.

## WATERMARK

The watermark bit is set when the number of samples in FIFO equals the value stored in the samples bits (Register FIFO\_CTL, Address 0x38). The watermark bit is cleared automatically when FIFO is read, and the content returns to a value below the value stored in the samples bits.

## OVERRUN

The overrun bit is set when new data replaces unread data. The precise operation of the overrun function depends on the FIFO mode. In bypass mode, the overrun bit is set when new data replaces unread data in the DATAX, DATAY, and DATAZ registers (Address 0x32 to Address 0x37). In all other modes, the overrun bit is set when FIFO is filled. The overrun bit is automatically cleared when the contents of FIFO are read.

## FIFO

The ADXL345 contains technology for an embedded memory management system with 32-level FIFO that can be used to minimize host processor burden. This buffer has four modes: bypass, FIFO, stream, and trigger (see Table 37). Each mode is selected by the settings of the FIFO\_MODE bits (Bits[D7:D6]) in the FIFO\_CTL register (Address 0x38).

## BYPASS MODE

In bypass mode, FIFO is not operational and, therefore, remains empty.

## FIFO MODE

In FIFO mode, data from measurements of the x-, y-, and z-axes are stored in FIFO. When the number of samples in FIFO equals the level specified in the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set. FIFO continues accumulating samples until it is full (32 samples from measurements of the x-, y-, and z-axes) and then stops collecting data. After FIFO stops collecting data, the device continues to operate; therefore, features such as tap detection can be used after FIFO is full. The watermark interrupt continues to occur until the number of samples in FIFO is less than the value stored in the samples bits of the FIFO\_CTL register.

## STREAM MODE

In stream mode, data from measurements of the x-, y-, and z-axes are stored in FIFO. When the number of samples in FIFO equals the level specified in the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set. FIFO continues accumulating samples and holds the latest 32 samples from measurements of the x-, y-, and z-axes, discarding older data as new data arrives. The watermark interrupt continues occurring until the number of samples in FIFO is less than the value stored in the samples bits of the FIFO\_CTL register.

## TRIGGER MODE

In trigger mode, FIFO accumulates samples, holding the latest 32 samples from measurements of the x-, y-, and z-axes. After a trigger event occurs and an interrupt is sent to the INT1 or INT2 pin (determined by the trigger bit in the FIFO\_CTL register), FIFO keeps the last n samples (where n is the value specified by the samples bits in the FIFO\_CTL register) and then operates in FIFO mode, collecting new samples only when FIFO is not full. A delay of at least 5 µs should be present between the trigger event occurring and the start of reading data from the FIFO to allow the FIFO to discard and retain the necessary samples. Additional trigger events cannot be recognized until the trigger mode is reset. To reset the trigger mode, set the device to bypass mode and then set the device back to trigger mode. Note that the FIFO data should be read first because placing the device into bypass mode clears FIFO.

## RETRIEVING DATA FROM FIFO

The FIFO data is read through the DATAX, DATAY, and DATAZ registers (Address 0x32 to Address 0x37). When the FIFO is in FIFO, stream, or trigger mode, reads to the DATAX, DATAY, and DATAZ registers read data stored in the FIFO. Each time data is read from the FIFO, the oldest x-, y-, and z-axes data are placed into the DATAX, DATAY, and DATAZ registers.

If a single-byte read operation is performed, the remaining bytes of data for the current FIFO sample are lost. Therefore, all axes of interest should be read in a burst (or multiple-byte) read operation. To ensure that the FIFO has completely popped (that is, that new data has completely moved into the DATAX, DATAY, and DATAZ registers), there must be at least 5 µs between the end of reading the data registers and the start of a new read of the FIFO or a read of the FIFO\_STATUS register (Address 0x39). The end of reading a data register is signified by the transition from Register 0x37 to Register 0x38 or by the CS pin going high.

For SPI operation at 1.6 MHz or less, the register addressing portion of the transmission is a sufficient delay to ensure that the FIFO has completely popped. For SPI operation greater than 1.6 MHz, it is necessary to deassert the CS pin to ensure a total delay of 5 µs; otherwise, the delay is not sufficient. The total delay necessary for 5 MHz operation is at most 3.4 µs. This is not a concern when using I 2 C mode because the communication rate is low enough to ensure a sufficient delay between FIFO reads.

## SELF-TEST

The ADXL345 incorporates a self-test feature that effectively tests its mechanical and electronic systems simultaneously. When the self-test function is enabled (via the SELF\_TEST bit in the DA-TA\_FORMAT register, Address 0x31), an electrostatic force is exerted on the mechanical sensor. This electrostatic force moves the mechanical sensing element in the same manner as acceleration, and it is additive to the acceleration experienced by the device. This added electrostatic force results in an output change in the x-, y-, and z-axes. Because the electrostatic force is proportional to V S 2 , the output change varies with V S . This effect is shown in Figure 43. The scale factors shown in Table 14 can be used to adjust the expected self-test output limits for different supply voltages, V S . The self-test feature of the ADXL345 also exhibits a bimodal behavior. However, the limits shown in Table 1 and Table 15 to Table 18 are valid for both potential self-test values due to bimodality. Use of the self-test feature at data rates less than 100 Hz or at 1600 Hz may yield values outside these limits. Therefore, the part must be in normal power operation (LOW\_POWER bit = 0 in BW\_RATE register, Address 0x2C) and be placed into a data rate of 100 Hz through 800 Hz or 3200 Hz for the self-test function to operate correctly.

Figure 43. Self-Test Output Change Limits vs. Supply Voltage

<!-- image -->

Table 14. Self-Test Output Scale Factors for Different Supply Voltages, V S

|   Supply Voltage, V S (V) |   X-Axis, Y-Axis |   Z-Axis |
|---------------------------|------------------|----------|
|                      2.00 |             0.64 |      0.8 |
|                      2.50 |             1.00 |     1.00 |
|                      3.30 |             1.77 |     1.47 |
|                      3.60 |             2.11 |     1.69 |

Table 15. Self-Test Output in LSB for ±2 g, 10-Bit or Full Resolution (T A = 25°C, V S = 2.5 V, V DD I/O = 1.8 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    50 |   540 | LSB    |
| Y      |  -540 |   -50 | LSB    |
| Z      |    75 |   875 | LSB    |

Table 16. Self-Test Output in LSB for ±4 g, 10-Bit Resolution (T A = 25°C, V S = 2.5 V, V DD I/O = 1.8 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    25 |   270 | LSB    |
| Y      |  -270 |   -25 | LSB    |
| Z      |    38 |   438 | LSB    |

Table 17. Self-Test Output in LSB for ±8 g, 10-Bit Resolution (T A = 25°C, V S = 2.5 V, V DD I/O = 1.8 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    12 |   135 | LSB    |
| Y      |  -135 |   -12 | LSB    |
| Z      |    19 |   219 | LSB    |

Table 18. Self-Test Output in LSB for ±16 g, 10-Bit Resolution (T A = 25°C, V S = 2.5 V, V DD I/O = 1.8 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |     6 |    67 | LSB    |
| Y      |   -67 |    -6 | LSB    |
| Z      |    10 |   110 | LSB    |

## REGISTER MAP

## Table 19.

| Address      | Address   |                |      |             |                                                           |
|--------------|-----------|----------------|------|-------------|-----------------------------------------------------------|
| Hex          | Dec       | Name           | Type | Reset Value | Description                                               |
| 0x00         | 0         | DEVID          | R    | 11100101    | Device ID                                                 |
| 0x01 to 0x1C | 1 to 28   | Reserved       |      |             | Reserved; do not access                                   |
| 0x1D         | 29        | THRESH_TAP     | R/W  | 00000000    | Tap threshold                                             |
| 0x1E         | 30        | OFSX           | R/W  | 00000000    | X-axis offset                                             |
| 0x1F         | 31        | OFSY           | R/W  | 00000000    | Y-axis offset                                             |
| 0x20         | 32        | OFSZ           | R/W  | 00000000    | Z-axis offset                                             |
| 0x21         | 33        | DUR            | R/W  | 00000000    | Tap duration                                              |
| 0x22         | 34        | Latent         | R/W  | 00000000    | Tap latency                                               |
| 0x23         | 35        | Window         | R/W  | 00000000    | Tap window                                                |
| 0x24         | 36        | THRESH_ACT     | R/W  | 00000000    | Activity threshold                                        |
| 0x25         | 37        | THRESH_INACT   | R/W  | 00000000    | Inactivity threshold                                      |
| 0x26         | 38        | TIME_INACT     | R/W  | 00000000    | Inactivity time                                           |
| 0x27         | 39        | ACT_INACT_CTL  | R/W  | 00000000    | Axis enable control for activity and inactivity detection |
| 0x28         | 40        | THRESH_FF      | R/W  | 00000000    | Free-fall threshold                                       |
| 0x29         | 41        | TIME_FF        | R/W  | 00000000    | Free-fall time                                            |
| 0x2A         | 42        | TAP_AXES       | R/W  | 00000000    | Axis control for single tap/double tap                    |
| 0x2B         | 43        | ACT_TAP_STATUS | R    | 00000000    | Source of single tap/double tap                           |
| 0x2C         | 44        | BW_RATE        | R/W  | 00001010    | Data rate and power mode control                          |
| 0x2D         | 45        | POWER_CTL      | R/W  | 00000000    | Power-saving features control                             |
| 0x2E         | 46        | INT_ENABLE     | R/W  | 00000000    | Interrupt enable control                                  |
| 0x2F         | 47        | INT_MAP        | R/W  | 00000000    | Interrupt mapping control                                 |
| 0x30         | 48        | INT_SOURCE     | R    | 00000010    | Source of interrupts                                      |
| 0x31         | 49        | DATA_FORMAT    | R/W  | 00000000    | Data format control                                       |
| 0x32         | 50        | DATAX0         | R    | 00000000    | X-Axis Data 0                                             |
| 0x33         | 51        | DATAX1         | R    | 00000000    | X-Axis Data 1                                             |
| 0x34         | 52        | DATAY0         | R    | 00000000    | Y-Axis Data 0                                             |
| 0x35         | 53        | DATAY1         | R    | 00000000    | Y-Axis Data 1                                             |
| 0x36         | 54        | DATAZ0         | R    | 00000000    | Z-Axis Data 0                                             |
| 0x37         | 55        | DATAZ1         | R    | 00000000    | Z-Axis Data 1                                             |
| 0x38         | 56        | FIFO_CTL       | R/W  | 00000000    | FIFO control                                              |
| 0x39         | 57        | FIFO_STATUS    | R    | 00000000    | FIFO status                                               |

## REGISTER MAP

## REGISTER DEFINITIONS

## Register 0x00-DEVID (Read Only)

| Table 20. Register 0x00   | Table 20. Register 0x00   | Table 20. Register 0x00   | Table 20. Register 0x00   | Table 20. Register 0x00   | Table 20. Register 0x00   | Table 20. Register 0x00   | Table 20. Register 0x00   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| 1                         | 1                         | 1                         | 0                         | 0                         | 1                         | 0                         | 1                         |

The DEVID register holds a fixed device ID code of 0xE5 (345 octal).

## Register 0x1D-THRESH\_TAP (Read/Write)

The THRESH\_TAP register is eight bits and holds the threshold value for tap interrupts. The data format is unsigned, therefore, the magnitude of the tap event is compared with the value in THRESH\_TAP for normal tap detection. The scale factor is 62.5 m g /LSB (that is, 0xFF = 16 g ). A value of 0 may result in undesirable behavior if single tap/double tap interrupts are enabled.

## Register 0x1E, Register 0x1F, Register 0x20OFSX, OFSY, OFSZ (Read/Write)

The OFSX, OFSY, and OFSZ registers are each eight bits and offer user-set offset adjustments in twos complement format with a scale factor of 15.6 m g /LSB (that is, 0x7F = 2 g ). The value stored in the offset registers is automatically added to the acceleration data, and the resulting value is stored in the output data registers. For additional information regarding offset calibration and the use of the offset registers, refer to the Offset Calibration section.

## Register 0x21-DUR (Read/Write)

The DUR register is eight bits and contains an unsigned time value representing the maximum time that an event must be above the THRESH\_TAP threshold to qualify as a tap event. The scale factor is 625 µs/LSB. A value of 0 disables the single tap/ double tap functions.

## Register 0x22-Latent (Read/Write)

The latent register is eight bits and contains an unsigned time value representing the wait time from the detection of a tap event to the start of the time window (defined by the window register) during which a possible second tap event can be detected. The scale factor is 1.25 ms/LSB. A value of 0 disables the double tap function.

## Register 0x23-Window (Read/Write)

The window register is eight bits and contains an unsigned time value representing the amount of time after the expiration of the latency time (determined by the latent register) during which a second valid tap can begin. The scale factor is 1.25 ms/LSB. A value of 0 disables the double tap function.

## Register 0x24-THRESH\_ACT (Read/Write)

The THRESH\_ACT register is eight bits and holds the threshold value for detecting activity. The data format is unsigned, so the magnitude of the activity event is compared with the value in the THRESH\_ACT register. The scale factor is 62.5 m g /LSB. A value of 0 may result in undesirable behavior if the activity interrupt is enabled.

## Register 0x25-THRESH\_INACT (Read/Write)

The THRESH\_INACT register is eight bits and holds the threshold value for detecting inactivity. The data format is unsigned, so the magnitude of the inactivity event is compared with the value in the THRESH\_INACT register. The scale factor is 62.5 m g /LSB. A value of 0 may result in undesirable behavior if the inactivity interrupt is enabled.

## Register 0x26-TIME\_INACT (Read/Write)

The TIME\_INACT register is eight bits and contains an unsigned time value representing the amount of time that acceleration must be less than the value in the THRESH\_INACT register for inactivity to be declared. The scale factor is 1 sec/LSB. Unlike the other interrupt functions, which use unfiltered data (see the Threshold section), the inactivity function uses filtered output data. At least one output sample must be generated for the inactivity interrupt to be triggered. This results in the function appearing unresponsive if the TIME\_INACT register is set to a value less than the time constant of the output data rate. A value of 0 results in an interrupt when the output data is less than the value in the THRESH\_INACT register.

## Register 0x27-ACT\_INACT\_CTL (Read/Write)

| Table 21. Register 0x27-Bits[D7:D4]   | Table 21. Register 0x27-Bits[D7:D4]   | Table 21. Register 0x27-Bits[D7:D4]   | Table 21. Register 0x27-Bits[D7:D4]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| ACT ac/dc                             | ACT_X enable                          | ACT_Y enable                          | ACT_Z enable                          |
| Table 22. Register 0x27-Bits[D3:D0]   | Table 22. Register 0x27-Bits[D3:D0]   | Table 22. Register 0x27-Bits[D3:D0]   | Table 22. Register 0x27-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| INACT ac/dc                           | INACT_X enable                        | INACT_Y enable                        | INACT_Z enable                        |

## ACT AC/DC and INACT AC/DC Bits

A setting of 0 selects dc-coupled operation, and a setting of 1 enables ac-coupled operation. In dc-coupled operation, the current acceleration magnitude is compared directly with THRESH\_ACT and THRESH\_INACT to determine whether activity or inactivity is detected.

In ac-coupled operation for activity detection, the acceleration value at the start of activity detection is taken as a reference value. New samples of acceleration are then compared to this reference value,

## REGISTER MAP

and if the magnitude of the difference exceeds the THRESH\_ACT value, the device triggers an activity interrupt.

Similarly, in ac-coupled operation for inactivity detection, a reference value is used for comparison and is updated whenever the device exceeds the inactivity threshold. After the reference value is selected, the device compares the magnitude of the difference between the reference value and the current acceleration with THRESH\_INACT. If the difference is less than the value in THRESH\_INACT for the time in TIME\_INACT, the device is considered inactive and the inactivity interrupt is triggered.

## ACT\_x Enable Bits and INACT\_x Enable Bits

A setting of 1 enables x-, y-, or z-axis participation in detecting activity or inactivity. A setting of 0 excludes the selected axis from participation. If all axes are excluded, the function is disabled. For activity detection, all participating axes are logically OR'ed, causing the activity function to trigger when any of the participating axes exceeds the threshold. For inactivity detection, all participating axes are logically AND'ed, causing the inactivity function to trigger only if all participating axes are below the threshold for the specified time.

## Register 0x28-THRESH\_FF (Read/Write)

The THRESH\_FF register is eight bits and holds the threshold value, in unsigned format, for free-fall detection. The acceleration on all axes is compared with the value in THRESH\_FF to determine if a free-fall event occurred. The scale factor is 62.5 m g /LSB. Note that a value of 0 m g may result in undesirable behavior if the free-fall interrupt is enabled. Values between 300 m g and 600 m g (0x05 to 0x09) are recommended.

## Register 0x29-TIME\_FF (Read/Write)

The TIME\_FF register is eight bits and stores an unsigned time value representing the minimum time that the value of all axes must be less than THRESH\_FF to generate a free-fall interrupt. The scale factor is 5 ms/LSB. A value of 0 may result in undesirable behavior if the free-fall interrupt is enabled. Values between 100 ms and 350 ms (0x14 to 0x46) are recommended.

## Register 0x2A-TAP\_AXES (Read/Write)

|   Table 23. D7 |   D6 |   D5 |   D4 | D3       | D2           | D1           | D0           |
|----------------|------|------|------|----------|--------------|--------------|--------------|
|              0 |    0 |    0 |    0 | Suppress | TAP_X enable | TAP_Y enable | TAP_Z enable |

## Suppress Bit

Setting the suppress bit suppresses double tap detection if acceleration greater than the value in THRESH\_TAP is present between taps. See the Tap Detection section for more details.

## TAP\_x Enable Bits

A setting of 1 in the TAP\_X enable, TAP\_Y enable, or TAP\_Z enable bit enables x-, y-, or z-axis participation in tap detection. A setting of 0 excludes the selected axis from participation in tap detection.

## Register 0x2B-ACT\_TAP\_STATUS (Read Only)

Table 24. Register 0x2B

|   D7 | D6           | D5           | D4           | D3     | D2           | D1           | D0           |
|------|--------------|--------------|--------------|--------|--------------|--------------|--------------|
|    0 | ACT_X source | ACT_Y source | ACT_Z source | Asleep | TAP_X source | TAP_Y source | TAP_Z source |

## ACT\_x Source and TAP\_x Source Bits

These bits indicate the first axis involved in a tap or activity event. A setting of 1 corresponds to involvement in the event, and a setting of 0 corresponds to no involvement. When new data is available, these bits are not cleared but are overwritten by the new data. The ACT\_TAP\_STATUS register should be read before clearing the interrupt. Disabling an axis from participation clears the corresponding source bit when the next activity or single tap/double tap event occurs.

## Asleep Bit

A setting of 1 in the asleep bit indicates that the part is asleep, and a setting of 0 indicates that the part is not asleep. This bit toggles only if the device is configured for auto sleep. See the AUTO\_SLEEP Bit section for more information on autosleep mode.

## Register 0x2C-BW\_RATE (Read/Write)

| Table 25. Register 0x2C   | Table 25. Register 0x2C   | Table 25. Register 0x2C   | Table 25. Register 0x2C   | Table 25. Register 0x2C   | Table 25. Register 0x2C   | Table 25. Register 0x2C   | Table 25. Register 0x2C   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| 0                         | 0                         | 0                         | LOW_POWER                 |                           |                           | Rate                      |                           |

## LOW\_POWER Bit

A setting of 0 in the LOW\_POWER bit selects normal operation, and a setting of 1 selects reduced power operation, which has somewhat higher noise (see the Power Modes section for details).

## Rate Bits

These bits select the device bandwidth and output data rate (see Table 7 and Table 8 for details). The default value is 0x0A, which translates to a 100 Hz output data rate. An output data rate should be selected that is appropriate for the communication protocol and frequency selected. Selecting too high of an output data rate with a low communication speed results in samples being discarded.

## REGISTER MAP

## Register 0x2D-POWER\_CTL (Read/Write)

Table 26. Register 0x2D

|   D7 |   D6 | D5   | D4         | D3      | D2    | D1 D0   |
|------|------|------|------------|---------|-------|---------|
|    0 |    0 | Link | AUTO_SLEEP | Measure | Sleep | Wakeup  |

## Link Bit

A setting of 1 in the link bit with both the activity and inactivity functions enabled delays the start of the activity function until inactivity is detected. After activity is detected, inactivity detection begins, preventing the detection of activity. This bit serially links the activity and inactivity functions. When this bit is set to 0, the inactivity and activity functions are concurrent. Additional information can be found in the Link Mode section.

When clearing the link bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the link bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## AUTO\_SLEEP Bit

If the link bit is set, a setting of 1 in the AUTO\_SLEEP bit enables the auto-sleep functionality. In this mode, the ADXL345 auto-matically switches to sleep mode if the inactivity function is enabled and inactivity is detected (that is, when acceleration is below the THRESH\_INACT value for at least the time indicated by TIME\_IN-ACT). If activity is also enabled, the ADXL345 automatically wakes up from sleep after detecting activity and returns to operation at the output data rate set in the BW\_RATE register. A setting of 0 in the AUTO\_SLEEP bit disables automatic switching to sleep mode. See the Sleep Bit section for more information on sleep mode.

If the link bit is not set, the AUTO\_SLEEP feature is disabled and setting the AUTO\_SLEEP bit does not have an impact on device operation. Refer to the Link Bit section or the Link Mode section for more information on utilization of the link feature.

When clearing the AUTO\_SLEEP bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the AUTO\_SLEEP bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Measure Bit

A setting of 0 in the measure bit places the part into standby mode, and a setting of 1 places the part into measurement mode. The ADXL345 powers up in standby mode with minimum power consumption.

## Sleep Bit

A setting of 0 in the sleep bit puts the part into the normal mode of operation, and a setting of 1 places the part into sleep mode. Sleep mode suppresses DATA\_READY, stops transmission of data to FIFO, and switches the sampling rate to one specified by the wakeup bits. In sleep mode, only the activity function can be used. When the DATA\_READY interrupt is suppressed, the output data registers (Register 0x32 to Register 0x37) are still updated at the sampling rate set by the wakeup bits (D1:D0).

When clearing the sleep bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the sleep bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Wakeup Bits

These bits control the frequency of readings in sleep mode as described in Table 27.

Table 27. Frequency of Readings in Sleep Mode

| Setting   | Setting   |                |
|-----------|-----------|----------------|
| D1        | D0        | Frequency (Hz) |
| 0         | 0         | 8              |
| 0         | 1         | 4              |
| 1         | 0         | 2              |
| 1         | 1         | 1              |

## Register 0x2E-INT\_ENABLE (Read/Write)

| Table 28. Register 0x2E-Bits[D7:D0]   | Table 28. Register 0x2E-Bits[D7:D0]   | Table 28. Register 0x2E-Bits[D7:D0]   | Table 28. Register 0x2E-Bits[D7:D0]   |
|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| D7                                    | D6                                    | D5                                    | D4                                    |
| DATA_READY                            | SINGLE_TAP                            | DOUBLE_TAP                            | Activity                              |
| Table 29. Register 0x2E-Bits[D3:D0]   | Table 29. Register 0x2E-Bits[D3:D0]   | Table 29. Register 0x2E-Bits[D3:D0]   | Table 29. Register 0x2E-Bits[D3:D0]   |
| D3                                    | D2                                    | D1                                    | D0                                    |
| Inactivity                            | FREE_FALL                             | Watermark                             | Overrun                               |

Setting bits in this register to a value of 1 enables their respective functions to generate interrupts, whereas a value of 0 prevents the functions from generating interrupts. The DATA\_READY, watermark, and overrun bits enable only the interrupt output; the functions are always enabled. It is recommended that interrupts be configured before enabling their outputs.

## Register 0x2F-INT\_MAP (R/W)

Table 30. Register 0x2F-Bits[D7:D4]

| D7         | D6         | D5         | D4       |
|------------|------------|------------|----------|
| DATA_READY | SINGLE_TAP | DOUBLE_TAP | Activity |

## REGISTER MAP

Table 31. Register 0x2F-Bits[D3:D0]

| D3         | D2        | D1        | D0      |
|------------|-----------|-----------|---------|
| Inactivity | FREE_FALL | Watermark | Overrun |

Any bits set to 0 in this register send their respective interrupts to the INT1 pin, whereas bits set to 1 send their respective interrupts to the INT2 pin. All selected interrupts for a given pin are OR'ed.

## Register 0x30-INT\_SOURCE (Read Only)

Table 32. Register 0x30-Bits[D7:D4]

| D7         | D6         | D5         | D4       |
|------------|------------|------------|----------|
| DATA_READY | SINGLE_TAP | DOUBLE_TAP | Activity |

Table 33. Register 0x30-Bits[D3:D0]

| D3         | D2        | D1        | D0      |
|------------|-----------|-----------|---------|
| Inactivity | FREE_FALL | Watermark | Overrun |

Bits set to 1 in this register indicate that their respective functions have triggered an event, whereas a value of 0 indicates that the corresponding event has not occurred. The DATA\_READY, watermark, and overrun bits are always set if the corresponding events occur, regardless of the INT\_ENABLE register settings, and are cleared by reading data from the DATAX, DATAY, and DATAZ registers. The DATA\_READY and watermark bits may require multiple reads, as indicated in the FIFO mode descriptions in the FIFO section. Other bits, and the corresponding interrupts, are cleared by reading the INT\_SOURCE register.

## Register 0x31-DATA\_FORMAT (Read/Write)

| Table 34. Register 0x31   | Table 34. Register 0x31   | Table 34. Register 0x31   | Table 34. Register 0x31   | Table 34. Register 0x31   | Table 34. Register 0x31   | Table 34. Register 0x31   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D0                        |
| SELF_TEST                 | SPI                       | INT_INVERT                | 0                         | FULL_RES                  | Justify                   | Range                     |

The DATA\_FORMAT register controls the presentation of data to Register 0x32 through Register 0x37. All data, except that for the ±16 g range, must be clipped to avoid rollover.

## SELF\_TEST Bit

A setting of 1 in the SELF\_TEST bit applies a self-test force to the sensor, causing a shift in the output data. A value of 0 disables the self-test force.

## SPI Bit

A value of 1 in the SPI bit sets the device to 3-wire SPI mode, and a value of 0 sets the device to 4-wire SPI mode.

## INT\_INVERT Bit

A value of 0 in the INT\_INVERT bit sets the interrupts to active high, and a value of 1 sets the interrupts to active low.

## FULL\_RES Bit

When this bit is set to a value of 1, the device is in full resolution mode, where the output resolution increases with the g range set by the range bits to maintain a 4 m g /LSB scale factor. When the FULL\_RES bit is set to 0, the device is in 10-bit mode, and the range bits determine the maximum g range and scale factor.

## Justify Bit

A setting of 1 in the justify bit selects left-justified (MSB) mode, and a setting of 0 selects right-justified mode with sign extension.

## Range Bits

These bits set the g range as described in Table 35.

|   Table 35. g Range Setting | Table 35. g Range Setting   | Table 35. g Range Setting   |
|-----------------------------|-----------------------------|-----------------------------|
|                             | Setting                     | g Range                     |
|                           0 | 0                           | ±2 g                        |
|                           0 | 1                           | ±4 g                        |
|                           1 | 0                           | ±8 g                        |
|                           1 | 1                           | ±16 g                       |

## Register 0x32 to Register 0x37-DATAX0, DATAX1, DATAY0, DATAY1, DATAZ0, DATAZ1 (Read Only)

These six bytes (Register 0x32 to Register 0x37) are eight bits each and hold the output data for each axis. Register 0x32 and Register 0x33 hold the output data for the x-axis, Register 0x34 and Register 0x35 hold the output data for the y-axis, and Register 0x36 and Register 0x37 hold the output data for the z-axis. The output data is twos complement, with DATAx0 as the least significant byte and DATAx1 as the most significant byte, where x represent X, Y, or Z. The DATA\_FORMAT register (Address 0x31) controls the format of the data. It is recommended that a multiple-byte read of all registers be performed to prevent a change in data between reads of sequential registers.

## Register 0x38-FIFO\_CTL (Read/Write)

| Table 36. Register 0x38   | Table 36. Register 0x38   | Table 36. Register 0x38   | Table 36. Register 0x38   | Table 36. Register 0x38   | Table 36. Register 0x38   | Table 36. Register 0x38   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D2                        | D1                        | D0                        |
| FIFO_MODE                 | Trigger                   |                           |                           | Samples                   |                           |                           |

## REGISTER MAP

## FIFO\_MODE Bits

These bits set the FIFO mode, as described in Table 37.

## Table 37. FIFO Modes

| Setting   | Setting   |         |                                                                                                                                                                                                 |
|-----------|-----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D7        | D6        | Mode    | Function                                                                                                                                                                                        |
| 0         | 0         | Bypass  | FIFO is bypassed.                                                                                                                                                                               |
| 0         | 1         | FIFO    | FIFO collects up to 32 values and then stops collect- ing data, collecting new data only when FIFO is not full.                                                                                 |
| 1         | 0         | Stream  | FIFO holds the last 32 data values. When FIFO is full, the oldest data is overwritten with newer data.                                                                                          |
| 1         | 1         | Trigger | When triggered by the trigger bit, FIFO holds the last data samples before the trigger event and then contin- ues to collect data until full. New data is collected only when FIFO is not full. |

## Trigger Bit

A value of 0 in the trigger bit links the trigger event of trigger mode to INT1, and a value of 1 links the trigger event to INT2.

## Samples Bits

The function of these bits depends on the FIFO mode selected (see Table 38). Entering a value of 0 in the samples bits immediately sets the watermark status bit in the INT\_SOURCE register, regardless of which FIFO mode is selected. Undesirable operation may occur if a value of 0 is used for the samples bits when trigger mode is used.

Table 38. Samples Bits Functions

| FIFO Mode   | Samples Bits Function                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| Bypass      | None.                                                                                   |
| FIFO        | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Stream      | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Trigger     | Specifies how many FIFO samples are retained in the FIFO buffer before a trigger event. |

## Register 0x39-FIFO\_STATUS (Read Only)

| Table 39. Register 0x39   | Table 39. Register 0x39   | Table 39. Register 0x39   | Table 39. Register 0x39   | Table 39. Register 0x39   | Table 39. Register 0x39   | Table 39. Register 0x39   | Table 39. Register 0x39   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| FIFO_TRIG                 | 0                         |                           |                           |                           | Entries                   |                           |                           |

## FIFO\_TRIG Bit

A 1 in the FIFO\_TRIG bit corresponds to a trigger event occurring, and a 0 means that a FIFO trigger event has not occurred.

## Entries Bits

These bits report how many data values are stored in FIFO. Access to collect the data from FIFO is provided through the DATAX, DATAY, and DATAZ registers. FIFO reads must be done in burst or multiple-byte mode because each FIFO level is cleared after any read (single- or multiple-byte) of FIFO. FIFO stores a maximum of 32 entries, which equates to a maximum of 33 entries available at any given time because an additional entry is available at the output filter of the device.

## APPLICATIONS INFORMATION

## POWER SUPPLY DECOUPLING

A 1 µF tantalum capacitor (C S ) at V S and a 0.1 µF ceramic capacitor (C I/O ) at V DD I/O placed close to the ADXL345 supply pins is recommended to adequately decouple the accelerometer from noise on the power supply. If additional decoupling is necessary, a resistor or ferrite bead, no larger than 100 Ω, in series with V S may be helpful. Additionally, increasing the bypass capacitance on VS  to a 10 µF tantalum capacitor in parallel with a 0.1 µF ceramic capacitor may also improve noise.

Care should be taken to ensure that the connection from the ADXL345 ground to the power supply ground has low impedance because noise transmitted through ground has an effect similar to noise transmitted through V S . It is recommended that V S and V DD I/O be separate supplies to minimize digital clocking noise on the V S supply. If this is not possible, additional filtering of the supplies, as previously mentioned, may be necessary.

Figure 44. Application Diagram

<!-- image -->

## MECHANICAL CONSIDERATIONS FOR MOUNTING

The ADXL345 should be mounted on the PCB in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL345 at an unsupported PCB location, as shown in Figure 45, may result in large, apparent measurement errors due to undampened PCB vibration. Locating the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is above the accelerometer's mechanical sensor resonant frequency and, therefore, effectively invisible to the accelerometer. Multiple mounting points, close to the sensor, and/or a thicker PCB also help to reduce the effect of system resonance on the performance of the sensor.

Figure 45. Incorrectly Placed Accelerometers

<!-- image -->

## TAP DETECTION

The tap interrupt function is capable of detecting either single or double taps. The following parameters are shown in Figure 46 for a valid single and valid double tap event:

- The tap detection threshold is defined by the THRESH\_TAP register (Address 0x1D).
- The maximum tap duration time is defined by the DUR register (Address 0x21).
- The tap latency time is defined by the latent register (Address 0x22) and is the waiting period from the end of the first tap until the start of the time window, when a second tap can be detected, which is determined by the value in the window register (Address 0x23).
- The interval after the latency time (set by the latent register) is defined by the window register. Although a second tap must begin after the latency time has expired, it need not finish before the end of the time defined by the window register.

Figure 46. Tap Interrupt Function with Valid Single and Double Taps

<!-- image -->

If only the single tap function is in use, the single tap interrupt is triggered when the acceleration goes below the threshold, as long as DUR has not been exceeded. If both single and double tap functions are in use, the single tap interrupt is triggered when the double tap event has been either validated or invalidated.

Several events can occur to invalidate the second tap of a double tap event. First, if the suppress bit in the TAP\_AXES register (Address 0x2A) is set, any acceleration spike above the threshold during the latency time (set by the latent register) invalidates the double tap detection, as shown in Figure 47.

Figure 47. Double Tap Event Invalid Due to High g Event When the Suppress Bit Is Set

<!-- image -->

A double tap event can also be invalidated if acceleration above the threshold is detected at the start of the time window for the second tap (set by the window register). This results in an invalid double tap at the start of this window, as shown in Figure 48. Additionally, a double tap event can be invalidated if an acceleration exceeds the time limit for taps (set by the DUR register), resulting in an invalid

## APPLICATIONS INFORMATION

double tap at the end of the DUR time limit for the second tap event, also shown in Figure 48.

Figure 48. Tap Interrupt Function with Invalid Double Taps

<!-- image -->

Single taps, double taps, or both can be detected by setting the respective bits in the INT\_ENABLE register (Address 0x2E). Control over participation of each of the three axes in single tap/ double tap detection is exerted by setting the appropriate bits in the TAP\_AXES register (Address 0x2A). For the double tap function to operate, both the latent and window registers must be set to a nonzero value.

Every mechanical system has somewhat different single tap/ double tap responses based on the mechanical characteristics of the system. Therefore, some experimentation with values for the DUR, latent, window, and THRESH\_TAP registers is required. In general, a good starting point is to set the DUR register to a value greater than 0x10 (10 ms), the latent register to a value greater than 0x10 (20 ms), the window register to a value greater than 0x40 (80 ms), and the THRESH\_TAP register to a value greater than 0x30 (3 g ). Setting a very low value in the latent, window, or THRESH\_TAP register may result in an unpredictable response due to the accelerometer picking up echoes of the tap inputs.

After a tap interrupt has been received, the first axis to exceed the THRESH\_TAP level is reported in the ACT\_TAP\_STATUS register (Address 0x2B). This register is never cleared but is overwritten with new data.

## THRESHOLD

The lower output data rates are achieved by decimating a common sampling frequency inside the device. The activity, free-fall, and single tap/double tap detection functions without improved tap enabled are performed using undecimated data. Because the bandwidth of the output data varies with the data rate and is lower than the bandwidth of the undecimated data, the high frequency and high g data that is used to determine activity, free-fall, and single tap/double tap events may not be present if the output of the accelerometer is examined. This may result in functions triggering when acceleration data does not appear to meet the conditions set by the user for the corresponding function.

## LINK MODE

The function of the link bit is to reduce the number of activity interrupts that the processor must service by setting the device to look for activity only after inactivity. For proper operation of this feature, the processor must still respond to the activity and inactivity interrupts by reading the INT\_SOURCE register (Address 0x30) and, therefore, clearing the interrupts. If an activity interrupt is not cleared, the part cannot go into autosleep mode. The asleep bit in the ACT\_TAP\_STATUS register (Address 0x2B) indicates if the part is asleep.

## SLEEP MODE VS. LOW POWER MODE

In applications where a low data rate and low power consumption is desired (at the expense of noise performance), it is recommended that low power mode be used. The use of low power mode preserves the functionality of the DATA\_READY interrupt and the FIFO for postprocessing of the acceleration data. Sleep mode, while offering a low data rate and power consumption, is not intended for data acquisition.

However, when sleep mode is used in conjunction with the AU-TO\_SLEEP mode and the link mode, the part can automatically switch to a low power, low sampling rate mode when inactivity is detected. To prevent the generation of redundant inactivity interrupts, the inactivity interrupt is automatically disabled and activity is enabled. When the ADXL345 is in sleep mode, the host processor can also be placed into sleep mode or low power mode to save significant system power. When activity is detected, the accelerometer automatically switches back to the original data rate of the application and provides an activity interrupt that can be used to wake up the host processor. Similar to when inactivity occurs, detection of activity events is disabled and inactivity is enabled.

## OFFSET CALIBRATION

Accelerometers are mechanical structures containing elements that are free to move. These moving parts can be very sensitive to mechanical stresses, much more so than solid-state electronics. The 0 g bias or offset is an important accelerometer metric because it defines the baseline for measuring acceleration. Additional stresses can be applied during assembly of a system containing an accelerometer. These stresses can come from, but are not limited to, component soldering, board stress during mounting, and application of any compounds on or over the component. If calibration is deemed necessary, it is recommended that calibration be performed after system assembly to compensate for these effects.

A simple method of calibration is to measure the offset while assuming that the sensitivity of the ADXL345 is as specified in Table 1. The offset can then be automatically accounted for by

## APPLICATIONS INFORMATION

using the built-in offset registers. This results in the data acquired from the DATA registers already compensating for any offset.

In a no-turn or single-point calibration scheme, the part is oriented such that one axis, typically the z-axis, is in the 1 g field of gravity and the remaining axes, typically the x- and y-axis, are in a 0 g field. The output is then measured by taking the average of a series of samples. The number of samples averaged is a choice of the system designer, but a recommended starting point is 0.1 sec worth of data for data rates of 100 Hz or greater. This corresponds to 10 samples at the 100 Hz data rate. For data rates less than 100 Hz, it is recommended that at least 10 samples be averaged together. These values are stored as X 0 g , Y 0 g , and Z +1 g for the 0 g measurements on the x- and y-axis and the 1 g measurement on the z-axis, respectively.

The values measured for X 0 g and Y 0 g correspond to the x- and y-axis offset, and compensation is done by subtracting those values from the output of the accelerometer to obtain the actual acceleration:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Because the z-axis measurement was done in a +1 g field, a noturn or single-point calibration scheme assumes an ideal sensitivity, SZ  for the z-axis. This is subtracted from Z +1 g to attain the z-axis offset, which is then subtracted from future measured values to obtain the actual value:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

The ADXL345 can automatically compensate the output for offset by using the offset registers (Register 0x1E, Register 0x1F, and Register 0x20). These registers contain an 8-bit, twos complement value that is automatically added to all measured acceleration values, and the result is then placed into the DATA registers. Because the value placed in an offset register is additive, a negative value is placed into the register to eliminate a positive offset and vice versa for a negative offset. The register has a scale factor of 15.6 m g /LSB and is independent of the selected g -range.

As an example, assume that the ADXL345 is placed into full-resolution mode with a sensitivity of typically 256 LSB/ g . The part is oriented such that the z-axis is in the field of gravity and x-, y-, and z-axis outputs are measured as +10 LSB, -13 LSB, and +9 LSB, respectively. Using the previous equations, X 0 g is +10 LSB, Y 0 g is -13 LSB, and Z 0 g is +9 LSB. Each LSB of output in full-resolution is 3.9 m g or one-quarter of an LSB of the offset register. Because the offset register is additive, the 0 g values are negated and rounded to the nearest LSB of the offset register:

$$XOFFSET = -Round(10/4) = -3 LSB YOFFSET = -Round(-13/4) = 3 LSB ZOFFSET = -Round(9/4) = -2 LSB$$

These values are programmed into the OFSX, OFSY, and OFXZ registers, respectively, as 0xFD, 0x03 and 0xFE. As with all registers in the ADXL345, the offset registers do not retain the value written into them when power is removed from the part. Power-cycling the ADXL345 returns the offset registers to their default value of 0x00.

Because the no-turn or single-point calibration method assumes an ideal sensitivity in the z-axis, any error in the sensitivity results in offset error. For instance, if the actual sensitivity was 250 LSB/ g in the previous example, the offset would be 15 LSB, not 9 LSB. To help minimize this error, an additional measurement point can be used with the z-axis in a 0 g field and the 0 g measurement can be used in the Z ACTUAL equation.

## USING SELF-TEST

The self-test change is defined as the difference between the acceleration output of an axis with self-test enabled and the acceleration output of the same axis with self-test disabled (see Endnote 6 of Table 1). This definition assumes that the sensor does not move between these two measurements, because if the sensor moves, a non-self-test related shift corrupts the test.

Proper configuration of the ADXL345 is also necessary for an accurate self-test measurement. The part should be set with a data rate of 100 Hz through 800 Hz, or 3200 Hz. This is done by ensuring that a value of 0x0A through 0x0D, or 0x0F is written into the rate bits (Bit D3 through Bit D0) in the BW\_RATE register (Address 0x2C). The part also must be placed into normal power operation by ensuring the LOW\_POWER bit in the BW\_RATE register is cleared (LOW\_POWER bit = 0) for accurate self-test measurements. It is recommended that the part be set to full-resolution, 16 g mode to ensure that there is sufficient dynamic range for the entire self-test shift. This is done by setting Bit D3 of the DATA\_FORMAT register (Address 0x31) and writing a value of 0x03 to the range bits (Bit D1 and Bit D0) of the DATA\_FORMAT register (Address 0x31). This results in a high dynamic range for measurement and a 3.9 m g /LSB scale factor.

After the part is configured for accurate self-test measurement, several samples of x-, y-, and z-axis acceleration data should be retrieved from the sensor and averaged together. The number of samples averaged is a choice of the system designer, but a recommended starting point is 0.1 sec worth of data for data rates of 100 Hz or greater. This corresponds to 10 samples at the 100 Hz data rate. For data rates less than 100 Hz, it is recommended that at least 10 samples be averaged together. The averaged values should be stored and labeled appropriately as the self-test disabled data, that is, X ST\_OFF , Y ST\_OFF , and Z ST\_OFF .

Next, self-test should be enabled by setting Bit D7 (SELF\_TEST) of the DATA\_FORMAT register (Address 0x31). The output needs some time (about four samples) to settle after enabling self-test. After allowing the output to settle, several samples of the x-, y-, and z-axis acceleration data should be taken again and averaged. It is recommended that the same number of samples be taken for this

## APPLICATIONS INFORMATION

average as was previously taken. These averaged values should again be stored and labeled appropriately as the value with self-test enabled, that is, X ST\_ON , Y ST\_ON , and Z ST\_ON . Self-test can then be disabled by clearing Bit D7 (SELF\_TEST) of the DATA\_FORMAT register (Address 0x31).

With the stored values for self-test enabled and disabled, the self-test change is as follows:

<!-- formula-not-decoded -->

Because the measured output for each axis is expressed in LSBs, XST , Y ST , and Z ST are also expressed in LSBs. These values can be converted to g 's of acceleration by multiplying each value by the 3.9 m g /LSB scale factor, if configured for full-resolution mode. Additionally, Table 15 through Table 18 correspond to the self-test range converted to LSBs and can be compared with the measured self-test change when operating at a V S of 2.5 V. For other voltages, the minimum and maximum self-test output values should be adjusted based on (multiplied by) the scale factors shown in Table 14. If the part was placed into ±2 g , 10-bit or full-resolution mode, the values listed in Table 15 should be used. Although the fixed 10-bit mode or a range other than 16 g can be used, a different set of values, as indicated in Table 16 through Table 18, would need to be used. Using a range below 8 g may result in insufficient dynamic range and should be considered when selecting the range of operation for measuring self-test.

If the self-test change is within the valid range, the test is considered successful. Generally, a part is considered to pass if the minimum magnitude of change is achieved. However, a part that changes by more than the maximum magnitude is not necessarily a failure.

Another effective method for using the self-test to verify accelerometer functionality is to toggle the self test at a certain rate and then perform an FFT on the output. The FFT should have a correspond- ing tone at the frequency the self-test was toggled. Using an FFT like this removes the dependency of the test on supply voltage and on self-test magnitude, which can vary within a rather wide range.

## ASYNCHRONOUS DATA READINGS

Asynchronous readings of acceleration data can lead to accessing the acceleration data registers while they are being updated. To avoid this, it is recommended to either enable stream mode (see Table 37) or to synchronize the SPI/I 2 C transaction to the DATA\_READY interrupt functionality, so that the host processor samples immediately after the DATA\_READY interrupt goes high.

## DATA FORMATTING OF UPPER DATA RATES

Formatting of output data at the 3200 Hz and 1600 Hz output data rates changes depending on the mode of operation (full-resolution or fixed 10-bit) and the selected output range.

When using the 3200 Hz or 1600 Hz output data rates in full-resolution or ±2 g , 10-bit operation, the LSB of the output data-word is always 0. When data is right justified, this corresponds to Bit D0 of the DATAx0 register, as shown in Figure 49. When data is left justified and the part is operating in ±2 g , 10-bit mode, the LSB of the output data-word is Bit D6 of the DATAx0 register. In full-resolution operation when data is left justified, the location of the LSB changes according to the selected output range.

For a range of ±2 g , the LSB is Bit D6 of the DATAx0 register; for ±4 g , Bit D5 of the DATAx0 register; for ±8 g , Bit D4 of the DATAx0 register; and for ±16 g , Bit D3 of the DATAx0 register. This is shown in Figure 50.

The use of 3200 Hz and 1600 Hz output data rates for fixed 10 -bit operation in the ±4 g , ±8 g , and ±16 g output ranges provides an LSB that is valid and that changes according to the applied acceleration. Therefore, in these modes of operation, Bit D0 is not always 0 when output data is right justified and Bit D6 is not always 0 when output data is left justified. Operation at any data rate of 800 Hz or lower also provides a valid LSB in all ranges and modes that changes according to the applied acceleration.

Figure 49. Data Formatting of Full-Resolution and ±2 g, 10-Bit Modes of Operation When Output Data Is Right Justified

<!-- image -->

## APPLICATIONS INFORMATION

Figure 50. Data Formatting of Full-Resolution and ±2 g, 10-Bit Modes of Operation When Output Data Is Left Justified

<!-- image -->

## NOISE PERFORMANCE

The specification of noise shown in Table 1 corresponds to the typical noise performance of the ADXL345 in normal power operation with an output data rate of 100 Hz (LOW\_POWER bit (D4) = 0, rate bits (D3:D0) = 0xA in the BW\_RATE register, Address 0x2C). For normal power operation at data rates below 100 Hz, the noise of the ADXL345 is equivalent to the noise at 100 Hz ODR in LSBs. For data rates greater than 100 Hz, the noise increases roughly by a factor of √2 per doubling of the data rate. For example, at 400 Hz ODR, the noise on the x- and y-axes is typically less than 1.5 LSB rms, and the noise on the z-axis is typically less than 2.2 LSB rms.

For low power operation (LOW\_POWER bit (D4) = 1 in the BW\_RATE register, Address 0x2C), the noise of the ADXL345 is constant for all valid data rates shown in Table 8. This value is typically less than 1.8 LSB rms for the x- and y-axes and typically less than 2.6 LSB rms for the z-axis.

The trend of noise performance for both normal power and low power modes of operation of the ADXL345 is shown in Figure 51.

Figure 52 shows the typical Allan deviation for the ADXL345. The 1/f corner of the device, as shown in this figure, is very low, allowing absolute resolution of approximately 100 µg (assuming that there is sufficient integration time). Figure 52 also shows that the noise density is 290 µg/√Hz for the x-axis and y-axis and 430 µg/√Hz for the z-axis.

Figure 53 shows the typical noise performance trend of the ADXL345 over supply voltage. The performance is normalized to the tested and specified supply voltage, V S = 2.5 V. In general, noise decreases as supply voltage is increased. It should be noted, as shown in Figure 51, that the noise on the z-axis is typically higher than on the x-axis and y-axis; therefore, while they change roughly the same in percentage over supply voltage, the magnitude of change on the z-axis is greater than the magnitude of change on the x-axis and y-axis.

<!-- image -->

Figure 51. Noise vs. Output Data Rate for Normal and Low Power Modes, Full-Resolution (256 LSB/g)

Figure 52. Root Allan Deviation

<!-- image -->

Figure 53. Normalized Noise vs. Supply Voltage, V S

<!-- image -->

## APPLICATIONS INFORMATION

## OPERATION AT VOLTAGES OTHER THAN 2.5 V

The ADXL345 is tested and specified at a supply voltage of VS  = 2.5 V; however, it can be powered with V S as high as 3.6 V or as low as 2.0 V. Some performance parameters change as the supply voltage changes: offset, sensitivity, noise, self-test, and supply current.

Due to slight changes in the electrostatic forces as supply voltage is varied, the offset and sensitivity change slightly. When operating at a supply voltage of V S = 3.3 V, the x- and y-axis offset is typically 25 m g higher than at Vs = 2.5 V operation. The z-axis is typically 20 m g lower when operating at a supply voltage of 3.3 V than when operating at V S = 2.5 V. Sensitivity on the x- and y-axes typically shifts from a nominal 256 LSB/ g (full-resolution or ±2 g , 10-bit operation) at V S = 2.5 V operation to 265 LSB/ g when operating with a supply voltage of 3.3 V. The z-axis sensitivity is unaffected by a change in supply voltage and is the same at V S = 3.3 V operation as it is at V S = 2.5 V operation. Simple linear interpolation can be used to determine typical shifts in offset and sensitivity at other supply voltages.

Changes in noise performance, self-test response, and supply current are discussed elsewhere throughout the data sheet. For noise performance, the Noise Performance section should be reviewed. The Using Self-Test section discusses both the operation of self-test over voltage, a square relationship with supply voltage, as well as the conversion of the self-test response in g 's to LSBs. Finally, Figure 33 shows the impact of supply voltage on typical current consumption at a 100 Hz output data rate, with all other output data rates following the same trend.

## OFFSET PERFORMANCE AT LOWEST DATA RATES

The ADXL345 offers a large number of output data rates and bandwidths, designed for a large range of applications. However, at the lowest data rates, described as those data rates below 6.25 Hz, the offset performance over temperature can vary significantly from the remaining data rates. Figure 54, Figure 55, and Figure 56 show the typical offset performance of the ADXL345 over temperature for the data rates of 6.25 Hz and lower. All plots are normalized to the offset at 100 Hz output data rate; therefore, a nonzero value corresponds to additional offset shift due to temperature for that data rate.

When using the lowest data rates, it is recommended that the operating temperature range of the device be limited to provide minimal offset shift across the operating temperature range. Due to variability between parts, it is also recommended that calibration over temperature be performed if any data rates below 6.25 Hz are in use.

<!-- image -->

Figure 54. Typical X-Axis Output vs. Temperature at Lower Data Rates, Normalized to 100 Hz Output Data Rate, V S = 2.5 V

Figure 55. Typical Y-Axis Output vs. Temperature at Lower Data Rates, Normalized to 100 Hz Output Data Rate, V S = 2.5 V

<!-- image -->

Figure 56. Typical Z-Axis Output vs. Temperature at Lower Data Rates, Normalized to 100 Hz Output Data Rate, V S = 2.5 V

<!-- image -->

## APPLICATIONS INFORMATION

## AXES OF ACCELERATION SENSITIVITY

Figure 57. Axes of Acceleration Sensitivity (Corresponding Output Voltage Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Figure 58. Output Response vs. Orientation to Gravity

<!-- image -->

## LAYOUT AND DESIGN RECOMMENDATIONS

Figure 59 shows the recommended printed wiring board land pattern.

Figure 59. Recommended Printed Wiring Board Land Pattern (Dimensions shown in millimeters)

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description     | Packing Quantity   | Package Option   |
|-----------------|---------------------|-------------------------|--------------------|------------------|
| ADXL345BCCZ     | -40°C to +85°C      | 14-Lead LGA (5mm x 3mm) | Tray               | CC-14-1          |
| ADXL345BCCZ-RL  | -40°C to +85°C      | 14-Lead LGA (5mm x 3mm) | Reel, 5000         | CC-14-1          |
| ADXL345BCCZ-RL7 | -40°C to +85°C      | 14-Lead LGA (5mm x 3mm) | Reel, 1500         | CC-14-1          |

## EVALUATION BOARDS

| Model 1         | Description                                                                  |
|-----------------|------------------------------------------------------------------------------|
| EVAL-ADXL345Z   | Evaluation Board                                                             |
| EVAL-ADXL345-DB | Evaluation Board                                                             |
| EVAL-ADXL345-M  | Analog Devices Inertial Sensor Evaluation System, Includes ADXL345 Satellite |
| EVAL-ADXL345-S  | ADXL345 Satellite, Standalone                                                |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->

Figure 60. 14-Terminal Land Grid Array [LGA] (CC-14-1) Dimensions shown in millimeters

<!-- image -->

Updated: May 10, 2022