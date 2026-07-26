<!-- lastmod 2019-04-12 -->
<!-- image -->

Data Sheet

## FEATURES

3-axis sensing

Small, low profile package 3 mm × 3 mm × 1.45 mm LFCSP Low power: 300 µA (typical) Single-supply operation: 1.8 V to 3.6 V 10,000 g shock survival Excellent temperature stability Bandwidth adjustment with a single capacitor per axis

RoHS/WEEE and lead-free compliant

## APPLICATIONS

Concussion and head trauma detection High force event detection

## Small, Low Power, 3-Axis ±200 g Accelerometer

[ADXL377](https://www.analog.com/ADXL377?doc=ADXL377.PDF)

## GENERAL DESCRIPTION

The ADXL377 is a small, thin, low power, complete 3-axis accelerometer with signal conditioned voltage outputs. The ADXL377 measures acceleration resulting from motion, shock, or vibration with a typical full-scale range of ±200 g .

The user selects the bandwidth of the accelerometer using the CX, CY, and CZ capacitors at the XOUT, YOUT, and ZOUT pins. Bandwidths can be selected to suit the application, with a range of 0.5 Hz to 1300 Hz for the x-axis and y-axis and a range of 0.5 Hz to 1000 Hz for the z-axis.

The ADXL377 is available in a small, low profile, 3 mm × 3 mm × 1.45 mm, 16-lead lead frame chip scale package (LFCSP\_LQ).

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## [ADXL377](https://www.analog.com/ADXL377?doc=ADXL377.PDF)

| TABLE OF CONTENTS                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Features .............................................................................................. 1                                               |
| Applications....................................................................................... 1                                                   |
| General Description......................................................................... 1                                                          |
| Functional Block Diagram .............................................................. 1                                                               |
| Revision History ............................................................................... 2                                                      |
| Specifications..................................................................................... 3                                                   |
| Absolute Maximum Ratings............................................................ 4                                                                  |
| ESD Caution.................................................................................. 4                                                         |
| Pin Configuration and Function Descriptions............................. 5                                                                              |
| Typical Performance Characteristics ............................................. 6                                                                     |
| Theory of Operation ........................................................................ 8                                                          |
| Mechanical Sensor........................................................................ 8                                                             |
| REVISION HISTORY 4/2019-Rev. Ato Rev. B                                                                                                                 |
| Changes to Table 2 ............................................................................. 4                                                      |
| 9/2018-Rev. 0 to Rev.A                                                                                                                                  |
| Changes to Operating Temperature Range Parameter, Table 2....... 4 Updated Outline Dimensions....................................................... 12 |
| Changes to Ordering Guide.......................................................... 12                                                                  |

Performance ...................................................................................8

Applications Information .................................................................9

Power Supply Decoupling ............................................................9

Setting the Bandwidth Using CX, CY, and CZ  .............................9

Self-Test ..........................................................................................9

Selecting Filter Characteristics: Noise/Bandwidth Trade-Off  .......  9

Axes of Acceleration Sensitivity ............................................... 10

Layout and Design Recommendations ................................... 11

Outline Dimensions ....................................................................... 12

Ordering Guide .......................................................................... 12

9/2012-Revision 0: Initial Version

## SPECIFICATIONS

TA = 25°C, VS = 3 V, CX = CY = CZ = 0.1 µF, acceleration = 0 g , unless otherwise noted. All minimum and maximum specifications are guaranteed. Typical specifications are not guaranteed.

Table 1.

| Parameter                               | Test Conditions/Comments   |   Min | Typ      |   Max | Unit     |
|-----------------------------------------|----------------------------|-------|----------|-------|----------|
| SENSOR INPUT                            | Each axis                  |       |          |       |          |
| Measurement Range                       |                            |       | ±200     |       | g        |
| Nonlinearity                            | %of full scale up to 180 g |       | ±0.5     |       | %        |
| Cross-Axis Sensitivity 1                |                            |       | ±1.4     |       | %        |
| SENSITIVITY, RATIOMETRIC 2              | Each axis                  |       |          |       |          |
| Sensitivity at X OUT ,Y OUT , and Z OUT | V S = 3V                   |   5.8 | 6.5      |   7.2 | mV/ g    |
| Sensitivity Change Due to Temperature   | V S = 3V                   |       | ±0.02    |       | %/°C     |
| ZERO g BIAS LEVEL, RATIOMETRIC          |                            |       |          |       |          |
| Zero g Voltage                          | V S = 3V, T A = 25°C       |   1.4 | 1.5      |   1.6 | V        |
| Zero g Offset vs. Temperature           |                            |       |          |       |          |
| X-Axis andY-Axis                        |                            |       | ±12      |       | m g /°C  |
| Z-Axis                                  |                            |       | ±30      |       | m g /°C  |
| NOISE PERFORMANCE                       |                            |       |          |       |          |
| Noise Density                           |                            |       |          |       |          |
| X OUT andY OUT                          |                            |       | 2.7      |       | m g /√Hz |
| Z OUT                                   |                            |       | 4.3      |       | m g /√Hz |
| FREQUENCY RESPONSE 4                    |                            |       |          |       |          |
| Bandwidth 5                             | No external filter         |       |          |       |          |
| X OUT andY OUT                          |                            |       | 1300     |       | Hz       |
| Z OUT                                   |                            |       | 1000     |       | Hz       |
| R FILT Tolerance                        |                            |       | 32 ± 15% |       | kΩ       |
| Sensor Resonant Frequency               |                            |       | 16.5     |       | kHz      |
| SELF-TEST 6                             |                            |       |          |       |          |
| Logic Input Low                         |                            |       | 0.6      |       | V        |
| Logic Input High                        |                            |       | 2.4      |       | V        |
| ST Actuation Current                    |                            |       | 60       |       | µA       |
| Output Change                           | Self-test, 0 to 1          |       |          |       |          |
| At X OUT                                |                            |       | -6.5     |       | mV       |
| AtY OUT                                 |                            |       | 6.5      |       | mV       |
| At Z OUT                                |                            |       | 11.5     |       | mV       |
| OUTPUT AMPLIFIER                        | No load                    |       |          |       |          |
| Output Swing Low                        |                            |       | 0.1      |       | V        |
| Output Swing High                       |                            |       | 2.8      |       | V        |
| POWER SUPPLY                            |                            |       |          |       |          |
| Operating Voltage Range 7               |                            |   1.8 | 3.0      |   3.6 | V        |
| Supply Current                          | V S = 3V                   |       | 300      |       | µA       |
| Turn-On Time 8                          | No external filter         |       | 1        |       | ms       |
| OPERATINGTEMPERATURE RANGE              |                            |   -40 |          |   +85 | °C       |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                         | Rating                         |
|---------------------------------------------------|--------------------------------|
| Acceleration (Any Axis) Unpowered                 | 10,000 g                       |
| Powered                                           | 10,000 g                       |
| V S                                               | -0.3V to +3.6V                 |
| All Other Pins                                    | (GND - 0.3 V) to (V S + 0.3 V) |
| Output Short-Circuit Duration (Any Pin to Ground) | Indefinite                     |
| Operating Temperature Range                       | -40°C to +85°C                 |
| Storage Temperature Range                         | -65°C to +150°C                |
| Temperature Range (Powered)                       | -50°C to +125°C                |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pin No.   | Mnemonic   | Description                                                                                                |
|-----------|------------|------------------------------------------------------------------------------------------------------------|
| 1, 3      | RES        | Reserved. This pin must be connected to GNDor left open.                                                   |
| 2         | ST         | Self-Test.                                                                                                 |
| 4         | Y OUT      | Y Channel Output.                                                                                          |
| 5         | X OUT      | X Channel Output.                                                                                          |
| 6, 7      | GND        | Must be connected to ground.                                                                               |
| 8 to 13   | NC         | No Connect. Not internally connected.                                                                      |
| 14, 15    | V S        | Supply Voltage. 3.0V typical.                                                                              |
| 16        | Z OUT      | Z Channel Output.                                                                                          |
|           | EPAD       | Exposed Pad. The exposed pad is not internally connected, but should be soldered for mechanical integrity. |

Table 3. Pin Function Descriptions

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

N &gt; 250 for all typical performance figures, unless otherwise noted. N is the number of parts tested and used to produce the histograms.

<!-- image -->

Figure 3. X-Axis Zero g Output Voltage at 25°C, VS = 3 V

<!-- image -->

Figure 4. Y-Axis Zero g Output Voltage at 25°C, VS = 3 V

<!-- image -->

Figure 5. Z-Axis One g Output Voltage at 25°C, VS = 3 V

Figure 6. X-Axis Zero g Offset vs. Temperature, VS = 3 V (14 Parts Soldered to PCB)

<!-- image -->

Figure 7. Y-Axis Zero g Offset vs. Temperature, VS = 3 V (14 Parts Soldered to PCB)

<!-- image -->

10765-008

Figure 8. Z-Axis Zero g Offset vs. Temperature, VS = 3 V (14 Parts Soldered to PCB)

<!-- image -->

<!-- image -->

10765-010

Figure 10. Y-Axis Sensitivity at 25°C, VS = 3 V

<!-- image -->

10765-011

<!-- image -->

Figure 11. Z-Axis Sensitivity at 25°C, VS = 3 V

<!-- image -->

10765-012

Figure 12. Typical Output Linearity over the Dynamic Range

<!-- image -->

10765-013

Figure 13. Typical Frequency Response

<!-- image -->

## THEORY OF OPERATION

The ADXL377 is a complete 3-axis acceleration measurement system with a typical measurement range of ±200 g . The ADXL377 contains a polysilicon, surface-micromachined sensor and signal conditioning circuitry to implement an open-loop acceleration measurement architecture. The output signals are analog voltages that are proportional to acceleration. The accelerometer can measure the static acceleration of gravity in tilt-sensing applications, as well as dynamic acceleration resulting from motion, shock, or vibration.

The sensor is a polysilicon, surface-micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide resistance against acceleration forces. Deflection of the structure is measured using a differential capacitor that consists of independent fixed plates and plates attached to the moving mass. The fixed plates are driven by 180° out-of-phase square waves. Acceleration deflects the moving mass and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase-sensitive demodulation techniques are then used to determine the magnitude and direction of the acceleration.

The demodulator output is amplified and brought off chip through a 32 kΩ resistor. The user then sets the signal bandwidth of the device by adding a capacitor. This filtering improves measurement resolution and helps prevent aliasing.

## MECHANICAL SENSOR

The ADXL377 uses a single structure for sensing the acceleration in the x-axis, y-axis, and z-axis. As a result, the three sense directions are highly orthogonal with little cross-axis sensitivity. Mechanical misalignment of the sensor die to the package or misalignment of the package to the PCB is the chief source of cross-axis sensitivity. Mechanical misalignment can be calibrated at the system level.

## PERFORMANCE

Rather than using additional temperature compensation circuitry, the ADXL377 uses innovative design techniques to ensure high performance. As a result, there is neither quantization error nor nonmonotonic behavior, and temperature hysteresis is very low.

## APPLICATIONS INFORMATION

## POWER SUPPLY DECOUPLING

For most applications, a single 0.1 µF capacitor, CDC, placed close to the ADXL377 supply pins adequately decouples the accelerometer from noise on the power supply. However, in applications where noise is present at the 50 kHz internal clock frequency (or any harmonic thereof), additional care in power supply bypassing is required because this noise can cause errors in acceleration measurement.

If additional decoupling is needed, a 100 Ω (or smaller) resistor or ferrite bead can be inserted in the supply line. In addition, a larger bulk bypass capacitor (1 µF or greater) can be added in parallel to CDC. Ensure that the connection from the ADXL377 ground to the power supply ground is low impedance because noise transmitted through ground has a similar effect as noise transmitted through VS.

## SETTING THE BANDWIDTH USING CX, CY, AND CZ

The ADXL377 has provisions for band-limiting the XOUT, YOUT, and ZOUT pins. A capacitor must be added at each of these pins to implement low-pass filtering for antialiasing and noise reduction. The equation for the -3 dB bandwidth is

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

The tolerance of the internal resistor (RFILT) typically varies by as much as ±15% of its nominal value (32 kΩ), and the bandwidth varies accordingly. A minimum capacitance of 1000 pF for CX, CY, and CZ is recommended in all cases.

Table 4. Filter Capacitor Selection for CX, CY, and CZ

|   Bandwidth (Hz) |   Capacitor (µF) |
|------------------|------------------|
|               50 |             0.10 |
|              100 |             0.05 |
|              200 |            0.025 |
|              500 |             0.01 |
|             1000 |            0.005 |

## SELF-TEST

The ST pin controls the self-test feature. When this pin is set to VS, an electrostatic force is exerted on the accelerometer beam. The resulting movement of the beam allows the user to test whether the accelerometer is functional. The typical change in output is -1.08 g (corresponding to -6.5 mV) for the x-axis, +1.08 g (or +6.5 mV) for the y-axis, and +1.83 g (or +11.5 mV) for the z-axis. The ST pin can be left open circuit or connected to ground (GND) in normal use.

Never expose the ST pin to voltages greater than VS + 0.3 V . If the system design is such that this condition cannot be guaranteed (for example, if multiple supply voltages are present), it is recommended that a clamping diode with low forward voltage be connected between ST and VS.

## SELECTING FILTER CHARACTERISTICS: NOISE/BANDWIDTH TRADE-OFF

The selected accelerometer bandwidth ultimately determines the measurement resolution (smallest detectable acceleration). Filtering can be used to lower the noise floor, thereby improving the resolution of the accelerometer. Resolution is dependent on the analog filter bandwidth at XOUT, YOUT, and ZOUT.

The output of the ADXL377 has a typical bandwidth of 1000 Hz. The user must filter the signal at this point to limit aliasing errors. The analog bandwidth must be no more than half the analog-todigital sampling frequency to minimize aliasing. The analog bandwidth can be decreased further to reduce noise and improve resolution.

The ADXL377 noise has the characteristics of white Gaussian noise, which contributes equally at all frequencies and is described in terms of µ g /√Hz (that is, the noise is proportional to the square root of the accelerometer bandwidth). Limit the bandwidth to the lowest frequency required by the application to maximize the resolution and dynamic range of the accelerometer.

With the single-pole roll-off characteristic, the typical noise of the ADXL377 is determined by

<!-- formula-not-decoded -->

It is often useful to know the peak value of the noise. Peak-topeak noise can only be estimated by statistical methods. Table 5 can be used to estimate the probability of exceeding various peak values, given the rms value.

Table 5. Estimation of Peak-to-Peak Noise

| Peak-to-PeakValue   |   Percentage ofTimeThat Noise Exceeds Nominal Peak-to-PeakValue (%) |
|---------------------|---------------------------------------------------------------------|
| 2 × rms             |                                                                  32 |
| 4 × rms             |                                                                 4.6 |
| 6 × rms             |                                                                0.27 |
| 8 × rms             |                                                               0.006 |

<!-- image -->

## AXES OF ACCELERATION SENSITIVITY

Figure 14 shows the axes of sensitivity for the accelerometer. Figure 15 shows the output response when the accelerometer is oriented parallel to each of these axes.

Figure 14. Axes of Acceleration Sensitivity (Corresponding Output Voltage Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

10765-015

Figure 15. Output Response vs. Orientation to Gravity

<!-- image -->

## LAYOUT AND DESIGN RECOMMENDATIONS

Figure 16 shows the recommended soldering profile; Table 6 describes the profile features. Figure 17 shows the recommended PCB layout or solder land drawing.

<!-- image -->

10765-016

Figure 16. Recommended Soldering Profile

## Table 6. Recommended Soldering Profile

| Profile Feature                                   | Sn63/Pb37         | Pb-Free           |
|---------------------------------------------------|-------------------|-------------------|
| Average Ramp Rate (T L to T P )                   | 3°C/sec max       | 3°C/sec max       |
| Preheat                                           |                   |                   |
| MinimumTemperature (T SMIN )                      | 100°C             | 150°C             |
| MaximumTemperature (T SMAX )                      | 150°C             | 200°C             |
| Time, T SMIN to T SMAX (t S )                     | 60 sec to 120 sec | 60 sec to 180 sec |
| Ramp-Up Rate (T SMAX to T L )                     | 3°C/sec max       | 3°C/sec max       |
| Time Maintained Above Liquidous (t L )            | 60 sec to 150 sec | 60 sec to 150 sec |
| Liquidous Temperature (T L )                      | 183°C             | 217°C             |
| Peak Temperature (T P )                           | 240°C + 0°C/-5°C  | 260°C + 0°C/-5°C  |
| Time Within 5°C of Actual Peak Temperature (t P ) | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate (T P to T L )                      | 6°C/sec max       | 6°C/sec max       |
| Time 25°C to Peak Temperature (t 25°C )           | 6 minutes max     | 8 minutes max     |

10765-017

<!-- image -->

Figure 17. Recommended PCB Layout

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

08-28-2018-A

Figure 18. 16-Lead Lead Frame Chip Scale Package [LFCSP] 3 mm × 3 mm Body and 1.45 mm Package Height (CP-16-28)

Dimensions shown in millimeters

| Model 1         | Measurement Range   | Specified Voltage   | Temperature Range   | Package Description   | Package Option   | Marking Code   |
|-----------------|---------------------|---------------------|---------------------|-----------------------|------------------|----------------|
| ADXL377BCPZ-RL  | ±200 g              | 3V                  | -40°C to +85°C      | 16-Lead LFCSP         | CP-16-28         | Y4P            |
| ADXL377BCPZ-RL7 | ±200 g              | 3V                  | -40°C to +85°C      | 16-Lead LFCSP         | CP-16-28         | Y4P            |
| EVAL-ADXL377Z   |                     |                     |                     | Evaluation Board      |                  |                |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

<!-- image -->

DETAIL A