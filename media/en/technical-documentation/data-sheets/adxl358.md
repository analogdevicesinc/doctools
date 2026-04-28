<!-- lastmod 2023-06-07 -->
<!-- image -->

## FEATURES

- 0 g offset vs. temperature (all axes): ±0.2 m g /°C typical
- Ultralow noise spectral density (all axes): 80 µ g /√Hz
- Low power, V SUPPLY (LDO regulator enabled)
- In measurement mode: 150 µA
- In standby mode: 21 µA
- User adjustable analog output bandwidth
- Integrated temperature sensor
- Voltage range options
- VSUPPLY with internal regulators: 2.25 V to 3.6 V
- V1P8ANA , V 1P8DIG with internal LDO regulator bypassed: 1.8 V typical ± 10%
- Operating temperature range: -40°C to +125°C
- 14-terminal, 4 mm × 4 mm × 1.04 mm, LGA package

## APPLICATIONS

- Inertial measurement units (IMUs)/attitude and heading reference systems (AHRSs)
- Platform stabilization systems
- Structural health monitoring
- Seismic imaging
- Tilt sensing
- Robotics
- Condition monitoring

## GENERAL DESCRIPTION

The analog output ADXL358 1 is a low noise density, low 0 g offset drift, low power, 3-axis accelerometer with selectable measurement ranges. The ADXL358B supports the ±10 g and ±20 g ranges, and the ADXL358C supports the ±10 g and ±40 g ranges.

The ADXL358 offers industry leading noise, minimal offset drift over temperature, and long-term stability, enabling precision applications with minimal calibration.

The low noise of the ADXL358 over higher frequencies is ideal for condition-based monitoring and other vibration sensing applications.

1 Protected by U.S. Patents 8,472,270; 9,041,462; 8,665,627; 8,917,099; 6,892,576; 9,297,825; and 7,956,621.

Rev. 0

## Low Noise, Low Drift, Low Power, 3-Axis MEMS Accelerometer

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    | 1   |
| General Description...............................................1        |     |
| Functional Block Diagram......................................1            |     |
| Specifications........................................................     | 3   |
| Absolute Maximum Ratings...................................5               |     |
| Thermal Resistance...........................................              | 5   |
| ESD Caution.......................................................5        |     |
| Pin Configuration and Function Descriptions........                        | 6   |
| Typical Performance Characteristics.....................7                  |     |
| Theory of Operation.............................................11         |     |
| Applications Information......................................             | 12  |
| Axes of Acceleration Sensitivity.......................                    | 12  |
| Power Sequencing...........................................12              |     |

## REVISION HISTORY

5/2023-Revision 0: Initial Version

| Power Supply Description................................13                |    |
|---------------------------------------------------------------------------|----|
| V SUPPLY ............................................................     | 13 |
| V 1P8ANA .............................................................13  |    |
| V 1P8DIG .............................................................    | 13 |
| V DDIO ................................................................13 |    |
| Overrange Protection.......................................13             |    |
| Self Test............................................................13   |    |
| Filter.................................................................   | 13 |
| Recommended Soldering Profile.........................14                  |    |
| PCB Footprint Pattern.........................................            | 15 |
| Outline Dimensions.............................................           | 16 |
| Ordering Guide.................................................16         |    |
| Evaluation Boards............................................16           |    |

## SPECIFICATIONS

TA = 25°C, V SUPPLY = 3.3 V, x-axis acceleration and y-axis acceleration = 0 g , z-axis acceleration = 1 g , and full-scale range = ±10 g , unless otherwise noted.

Table 1. Specifications

| Parameter                                                 | Test Conditions/Comments                                             | Min      | Typ               | Max   | Unit              |
|-----------------------------------------------------------|----------------------------------------------------------------------|----------|-------------------|-------|-------------------|
| SENSOR INPUT                                              | Each axis                                                            |          |                   |       |                   |
| Output Full-Scale Range (FSR)                             | ADXL358B supports two ranges ADXL358C supports two ranges            |          | ±10, ±20 ±10, ±40 |       | g g               |
| Nonlinearity                                              | ±10 g                                                                |          | 0.1               |       | %FSR              |
|                                                           | ±40 g                                                                |          | 1.3               |       | %FSR %            |
| Cross Axis Sensitivity                                    |                                                                      |          | 1                 |       |                   |
| SENSITIVITY                                               | Ratiometric to V 1P8ANA                                              |          |                   |       |                   |
| Sensitivity at X OUT , Y OUT , and Z OUT                  | ±10 g                                                                |          | 80                |       | mV/ g             |
|                                                           | ±20 g                                                                |          | 40                |       | mV/ g             |
|                                                           | ±40 g                                                                |          | 20                |       | mV/ g             |
| Sensitivity Change due to Temperature                     | T A = -40°C to +125°C                                                |          | ±0.02             |       | %/°C              |
| 0 g OFFSET                                                | Each axis, ±10 g                                                     |          |                   |       |                   |
| 0 g Output for X OUT , Y OUT , and Z OUT                  | Referred to V 1P8ANA /2                                              |          | ±125              |       | m g               |
| 0 g Offset vs. Temperature (X-Axis, Y-Axis, and Z-Axis) 1 | T A = -40°C to +125°C                                                |          | ±0.2              |       | m g /°C           |
| Vibration Rectification Error (VRE) 2                     | Offset due to 7.5 g RMS vibration, ±10 g range, in a 1 g orientation |          | <0.1              |       | g                 |
| NOISE                                                     |                                                                      |          |                   |       |                   |
| Spectral Density 3                                        |                                                                      |          |                   |       |                   |
| X-Axis, Y-Axis, and Z-Axis                                | ±10 g                                                                |          | 80                |       | µ g /√Hz µ g /√Hz |
| BANDWIDTH                                                 | ±40 g -3 dB, overall transfer function 4                             |          | 110 2.4           |       | kHz               |
| SELF TEST                                                 |                                                                      |          |                   |       |                   |
| Output Change                                             |                                                                      |          |                   |       |                   |
| X-Axis                                                    | ±10 g range 5                                                        | 0.05     | 0.2               | 0.40  | g                 |
| Y-Axis                                                    |                                                                      | 0.05     | 0.28              | 0.40  | g                 |
| Z-Axis                                                    |                                                                      | 1.0      | 1.7               | 2.20  | g                 |
| POWER SUPPLY                                              |                                                                      |          |                   |       |                   |
| Voltage Range                                             |                                                                      |          |                   |       |                   |
| V SUPPLY 6                                                |                                                                      | 2.25     | 2.5               | 3.6   | V                 |
| V DDIO                                                    |                                                                      | V 1P8DIG | 2.5               | 3.6   | V                 |
| V 1P8ANA , V 1P8DIG                                       | Internal low dropout (LDO) regulator bypassed, V = 0 V               | 1.62     | 1.8               | 1.98  | V                 |
| Current                                                   | SUPPLY                                                               |          |                   |       |                   |
| Measurement Mode                                          |                                                                      |          |                   |       |                   |
| V SUPPLY                                                  | LDO regulator enabled                                                |          | 150               |       | µA                |
| V 1P8ANA                                                  | LDO regulator disabled                                               |          | 138               |       | µA                |
| V 1P8DIG                                                  | LDO regulator disabled                                               |          | 10.5              |       | µA                |
| Standby Mode                                              |                                                                      |          |                   |       |                   |
| V SUPPLY                                                  | LDO regulator enabled                                                |          | 21                |       | µA                |
| V 1P8ANA                                                  | LDO regulator disabled                                               |          | 7                 |       | µA                |
| V 1P8DIG                                                  | LDO regulator disabled                                               |          | 9                 |       | µA                |
| Turn On Time 7                                            | 10 g range                                                           |          | <10               |       | ms                |
|                                                           | Power off to standby                                                 |          | <10               |       | ms                |

## SPECIFICATIONS

## Table 1. Specifications (Continued)

| Parameter                                       | Test Conditions/Comments                      | Min   | Typ     | Max             | Unit     |
|-------------------------------------------------|-----------------------------------------------|-------|---------|-----------------|----------|
| OUTPUT AMPLIFIER Swing Output Series Resistance | X OUT , Y OUT , Z OUT , and TEMP pins No load | 0.03  | 32      | V 1P8ANA - 0.03 | V kΩ     |
| TEMPERATURE SENSOR Output at 25°C Scale Factor  |                                               |       | 967 3.0 |                 | mV mV/°C |
| TEMPERATURE Operating Temperature Range         |                                               | -40   |         | +125            |          |
|                                                 |                                               |       |         |                 | °C       |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2. Absolute Maximum Ratings

| Parameter                                                   | Rating                                        |
|-------------------------------------------------------------|-----------------------------------------------|
| Acceleration (Any Axis, Half Sine Wave, 0.1 ms Pulse Width) |                                               |
| Unpowered                                                   | 10,000 g                                      |
| Powered                                                     | 10,000 g                                      |
| Vibration                                                   | Per MIL-STD-883 Method 2007, Test Condition C |
| V SUPPLY and V DDIO                                         | 5.4 V                                         |
| V 1P8ANA and V 1P8DIG Configured as Inputs                  | 1.98 V                                        |
| Digital Inputs (RANGE, ST1, ST2, and STBY)                  | -0.3 V to V DDIO + 0.3 V                      |
| Analog Outputs (X OUT , Y OUT , Z OUT , and TEMP)           | -0.3 V to V 1P8ANA + 0.3 V                    |
| Temperature Range                                           |                                               |
| Operating                                                   | -40°C to +125°C                               |
| Storage                                                     | -55°C to +150°C                               |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure, and ψ JB is the junction to board thermal resistance.

Table 3. Thermal Resistance

| Package Type 1   |   θ JA |   ψ JB | Unit   |
|------------------|--------|--------|--------|
| CC-14-2          |   79.1 |  41.76 | °C/W   |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 4. Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                                                                                                                                      |
|-----------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | RANGE      | Range Selection Pin. Set the RANGE pin to ground to select the ±10 g range or set the RANGE pin to V DDIO to select the ±20 g or ±40 g range. The RANGE pin is model dependent (see the Ordering Guide section). |
|         2 | ST1        | Self Test Pin 1. The ST1 pin enables self test mode. The ST1 pin must be forced low when not in self test mode.                                                                                                  |
|         3 | ST2        | Self Test Pin 2. The ST2 pin activates electromechanical self test actuation. The ST2 pin must be forced low when not in self test mode.                                                                         |
|         4 | TEMP       | Temperature Sensor Output.                                                                                                                                                                                       |
|         5 | V DDIO     | Digital Interface Supply Voltage.                                                                                                                                                                                |
|         6 | V SSIO     | Digital Ground.                                                                                                                                                                                                  |
|         7 | STBY       | Standby or Measurement Mode Selection Pin. Set the STBY pin to ground to enter standby mode, or set the STBY pin to V DDIO to enter measurement mode.                                                            |
|         8 | V 1P8DIG   | Digital Supply. The V 1P8DIG pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to the V 1P8DIG pin externally.                                                              |
|         9 | V SS       | Analog Ground.                                                                                                                                                                                                   |
|        10 | V 1P8ANA   | Analog Supply. The V 1P8ANA pin requires a decoupling capacitor. If V SUPPLY connects to V SS , supply the voltage to the V 1P8ANA pin externally.                                                               |
|        11 | V SUPPLY   | Supply Voltage. When V SUPPLY equals 2.25 V to 3.6 V, V SUPPLY enables the internal LDO regulator to generate V 1P8DIG and V 1P8ANA . For V SUPPLY = V SS , V 1P8DIG and V 1P8ANA are externally supplied.       |
|        12 | X OUT      | X-Axis Output.                                                                                                                                                                                                   |
|        13 | Y OUT      | Y-Axis Output.                                                                                                                                                                                                   |
|        14 | Z OUT      | Z-Axis Output.                                                                                                                                                                                                   |

## TYPICAL PERFORMANCE CHARACTERISTICS

All figures include data for multiple devices and multiple lots, and the figures were taken in the ±10 g range and T A = 25°C, unless otherwise noted.

<!-- image -->

Figure 3. Frequency Response for X-Axis

<!-- image -->

Figure 4. Frequency Response for Y-Axis

<!-- image -->

Figure 5. Frequency Response for Z-Axis

<!-- image -->

Figure 6. Zero g Offset Normalized Relative to 25°C vs. Temperature, X-Axis

Figure 7. Zero g Offset Normalized Relative to 25°C vs. Temperature, Y-Axis

<!-- image -->

Figure 8. Zero g Offset Normalized Relative to 25°C vs. Temperature, Z-Axis

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 9. Sensitivity Normalized Relative to 25°C vs. Temperature, X-Axis

<!-- image -->

Figure 10. Sensitivity Normalized Relative to 25°C vs. Temperature, Y-Axis

<!-- image -->

Figure 11. Sensitivity Normalized Relative to 25°C vs. Temperature, Z-Axis

<!-- image -->

Figure 12. Zero g Offset Histogram at 25°C, X-Axis

Figure 13. Zero g Offset Histogram at 25°C, Y-Axis

<!-- image -->

Figure 14. Zero g Offset Histogram at 25°C, Z-Axis

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 15. Sensitivity Histogram at 25°C, X-Axis

<!-- image -->

Figure 16. Sensitivity Histogram at 25°C, Y-Axis

<!-- image -->

Figure 17. Sensitivity Histogram at 25°C, Z-Axis

<!-- image -->

Figure 18. VRE, X-Axis Offset from +1 g, ±10 g Range, X-Axis Orientation = +1 g

Figure 19. VRE, Y-Axis Offset from +1 g, ±10 g Range, Y-Axis Orientation = +1 g

<!-- image -->

Figure 20. VRE, Z-Axis Offset from +1 g, ±10 g Range, Z-Axis Orientation = +1 g

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 21. VRE, X-Axis Offset from -1 g, ±40 g Range, X-Axis Orientation = -1 g

<!-- image -->

Figure 22. VRE, Y-Axis Offset from -1 g, ±40 g Range, Y-Axis Orientation = -1 g

<!-- image -->

Figure 23. VRE, Z-Axis Offset from -1 g, ±40 g Range, Z-Axis Orientation = -1 g

Figure 24. Temperature Sensor Output and Linear Offset vs. Temperature

<!-- image -->

Figure 25. Total Supply Current at 25°C, 3.3 V

<!-- image -->

## THEORY OF OPERATION

The ADXL358 is a complete 3-axis, ultralow noise, and ultrastable offset microelectromechanical systems (MEMS) accelerometer with outputs ratiometric to the analog 1.8 V supply, V 1P8ANA . The ADXL358B is pin selectable for ±10 g or ±20 g full scale, and the ADXL358C is pin selectable for ±10 g or ±40 g full scale.

The micromachined, sensing elements are fully differential, comprising the lateral x-axis and y-axis sensors and the vertical, teeter totter z-axis sensors. The x-axis and y-axis sensors and the z-axis sensors go through separate signal paths that minimize offset drift and noise. The signal path is fully differential, except for a differential to single-ended conversion at the analog outputs of the ADXL358.

The analog accelerometer outputs of the ADXL358 are ratiometric to V 1P8ANA . Therefore, digitize these outputs carefully. The temperature sensor output is not ratiometric. The X OUT , Y OUT , and Z OUT analog outputs are filtered internally with an antialiasing filter. These analog outputs also have an internal 32 kΩ series resistor that can be used with an external capacitor to set the bandwidth of the output.

## APPLICATIONS INFORMATION

Figure 26 shows the ADXL358 application circuit. The analog outputs (X OUT , Y OUT , and Z OUT ) are ratiometric to the 1.8 V analog voltage from the V 1P8ANA pin. V 1P8ANA can be powered with an on-chip LDO regulator that is powered from V SUPPLY . V 1P8ANA can also be supplied externally by forcing V SUPPLY to V SS , which disables the LDO regulator. Due to the ratiometric response, the analog output requires referencing to the V 1P8ANA supply when digitizing to achieve the inherent noise and offset performance of the ADXL358. The 0 g bias output is nominally equal to V 1P8ANA /2. The recommended option is to use the ADXL358 with a ratiometric analog-to-digital converter (ADC), for example, the Analog Devices, Inc., AD7682, and V 1P8ANA providing the voltage reference. This configuration results in self cancellation of errors due to minor supply variations.

Figure 26. ADXL358 Application Circuit

<!-- image -->

The ADXL358 outputs two forms of filtering: internal antialiasing filtering with a cutoff frequency of approximately 1.5 kHz, and external filtering. The external filter uses a fixed, on-chip, 32 kΩ resistance in series with each output in conjunction with the external capacitors to implement the low-pass filter antialiasing and noise reduction prior to the external ADC. The antialias filter cutoff frequency must be significantly higher than the desired signal bandwidth. If the antialias filter corner is too low, ratiometricity can degrade where the signal attenuation is different from the reference attenuation.

## AXES OF ACCELERATION SENSITIVITY

Figure 27 shows the axes of acceleration sensitivity. Note that the output voltage increases when accelerated along the sensitive axis.

Figure 27. Axes of Acceleration Sensitivity

<!-- image -->

## POWER SEQUENCING

There are two methods for applying power to the device. Typically, internal LDO regulators generate the 1.8 V power for the analog and digital supplies, V 1P8ANA and V 1P8DIG , respectively. Optionally, the internal LDO regulators can be disabled, and V 1P8ANA and V1P8DIG can be driven by external 1.8 V supplies.

When using the internal LDO regulators, connect V SUPPLY to a voltage source between 2.25 V and 3.6 V. In this case, the recommended power sequence is to apply power to V DDIO , followed by applying power to V SUPPLY approximately 10 µs after. If necessary, VSUPPLY and V DDIO can be powered from the same voltage source so that both are powered at the same time. However, V SUPPLY cannot be powered before V DDIO .

To disable the internal LDO regulators, tie V SUPPLY to ground and use external 1.8 V supplies to power V 1P8ANA and V 1P8DIG . V 1P8ANA and V 1P8DIG must have the same voltage level. The maximum acceptable tolerance between the external V 1P8ANA and V 1P8DIG voltage levels is 50 mV. When bypassing the LDO regulators, the recommended power sequence is to apply power to V DDIO , followed by applying power to V 1P8DIG approximately 10 µs after, and then applying power to V 1P8ANA approximately 10 µs after. If necessary, V1P8DIG and V DDIO can be powered from the same external 1.8 V supply, which can also be tied to V 1P8ANA with proper isolation so that all are powered at the same time. In this instance, proper decoupling and low frequency isolation are important to maintain the noise performance of the sensor.

## APPLICATIONS INFORMATION

## POWER SUPPLY DESCRIPTION

The ADXL358 has four different power supply domains: V SUPPLY , V1P8ANA , V 1P8DIG , and V DDIO . The internal analog and digital circuitry operates at 1.8 V nominal.

## VSUPPLY

VSUPPLY is 2.25 V to 3.6 V, which is the input range to the two LDO regulators that generate the nominal 1.8 V outputs for V 1P8ANA and V1P8DIG . Connect V SUPPLY to V SS to disable the LDO regulators, which allows driving V 1P8ANA and V 1P8DIG from an external source.

## V1P8ANA

All sensor and analog signal processing circuitry operates in this domain. Offset and sensitivity of the analog output ADXL358 are ratiometric to this supply voltage. When using external ADCs, use V1P8ANA as the reference voltage. V 1P8ANA can be an input or an output as defined by the state of the V SUPPLY voltage.

## V1P8DIG

V1P8DIG is the supply voltage for the internal logic circuitry. A separate LDO regulator decouples the digital supply noise from the analog signal path. V 1P8ANA can be an input or an output as defined by the state of the V SUPPLY voltage. If driven externally, V 1P8DIG must be the same voltage as the V 1P8ANA voltage.

## VDDIO

The V DDIO value determines the logic high levels for the self test pins, ST1 and ST2, as well as the STBY pin.

The LDO regulators are operational when V SUPPLY is between 2.25 V and 3.6 V. V 1P8ANA and V 1P8DIG are the regulator outputs in this mode. Alternatively, when tying V SUPPLY to V SS , V 1P8ANA and V1P8DIG are supply voltage inputs with a 1.62 V to 1.98 V range.

## OVERRANGE PROTECTION

To avoid electrostatic capture of the proof mass when the accelerometer is subject to input acceleration beyond its full-scale range, all sensor drive clocks turn off for 0.5 ms. In the ±10 g range setting, the overrange protection activates for input signals beyond approximately ±40 g (±25%), and for the ±20 g and ±40 g range settings, the threshold corresponds to about ±80 g (±25%). When overrange protection occurs, the X OUT , Y OUT , and Z OUT pins on the ADXL358 begin to drive to midscale.

## SELF TEST

The ADXL358 incorporates a self test feature that effectively tests the mechanical and electronic system. Enabling self test stimulates the sensor electrostatically to produce an output corresponding to the test signal applied as well as the mechanical force exerted. Only the z-axis response is specified to validate device functionality.

In the ADXL358, drive the ST1 pin to V DDIO to invoke self test mode. Then, by driving the ST2 pin to V DDIO , the ADXL358 applies an electrostatic force to the mechanical sensor and induces a change in output in response to the force. The self test delta (or response) is the difference in output voltage in the z -axis when ST2 is high vs. ST2 is low, while ST1 is asserted. After the self test measurement is complete, bring both pins low to resume normal operation.

## FILTER

The ADXL358 uses an analog, low-pass, antialiasing filter to reduce out of band noise and to limit bandwidth.

The analog, low-pass antialiasing filter in the ADXL358 provides a fixed -3 dB bandwidth of approximately 1.5 kHz, the frequency at which the voltage output response is attenuated by approximately 30%. The shape of the filter response in the frequency domain is that of a sinc filter. While the analog antialiasing filter attenuates the output response around and over its cutoff frequency, the MEMS sensor has a resonance at 5.5 kHz and mechanically amplifies the output response at around 2 kHz and over. These competing trends are apparent in the overall transfer function of the ADXL358, as shown in Figure 3 to Figure 5. Therefore, the overall -3 dB bandwidth of the ADXL358 is 2.4 kHz, and the overall bandwidth with ±4 dB flatness is about 4.4 kHz.

The ADXL358 x-axis, y-axis, and z-axis analog outputs include an amplifier followed by a series 32 kΩ resistor and output to the X OUT , the Y OUT , and the Z OUT pins, respectively.

## RECOMMENDED SOLDERING PROFILE

Figure 28 and Table 5 provide details about the recommended soldering profile.

Figure 28. Recommended Soldering Profile

<!-- image -->

Table 5. Recommended Soldering Profile

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
| Peak Temperature (T P )                                                     | +240°C + 0°C/-5°C | +260°C + 0°C/-5°C |
| Time of Actual T P - 5°C (t P )                                             | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                                              | 6°C/sec maximum   | 6°C/sec maximum   |
| Time from 25°C to Peak Temperature (t 25°C TO PEAK )                        | 6 minutes maximum | 8 minutes maximum |

## PCB FOOTPRINT PATTERN

Figure 29 shows the PCB footprint pattern and dimensions in millimeters.

Figure 29. PCB Footprint Pattern and Dimensions in Millimeters

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description               | Packing Quantity   | Package Option   |
|-----------------|---------------------|-----------------------------------|--------------------|------------------|
| ADXL358BCCZ     | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] | Tray, 490          | CC-14-2          |
| ADXL358BCCZ-RL  | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] | Reel, 4000         | CC-14-2          |
| ADXL358BCCZ-RL7 | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] | Reel, 1000         | CC-14-2          |
| ADXL358CCCZ     | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] | Tray, 490          | CC-14-2          |
| ADXL358CCCZ-RL  | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] | Reel, 4000         | CC-14-2          |
| ADXL358CCCZ-RL7 | -40°C to +125°C     | 14-Terminal Land Grid Array [LGA] | Reel, 1000         | CC-14-2          |

## EVALUATION BOARDS

## Table 6. Evaluation Boards

| Model 1        | Description               |
|----------------|---------------------------|
| EVAL-ADXL358BZ | ADXL358B Evaluation Board |
| EVAL-ADXL358CZ | ADXL358C Evaluation Board |
| EVAL-ADXL358Z  | Evaluation Board          |

<!-- image -->

Figure 30. 14-Terminal Land Grid Array [LGA] (CC-14-2) Dimensions shown in millimeters

<!-- image -->

Updated: May 23, 2023