<!-- lastmod 2019-05-28 -->
<!-- image -->

Data Sheet

## FEATURES

minimum measurement range

3-axis sensing with ±16 g Small, low profile package

12-lead, 4 mm × 4 mm × 1.45 mm LFCSP Low quiescent supply current: 350 µA typical Single-supply operation: 1.8 V to 3.6 V 10,000 g shock survival Excellent temperature stability Bandwidth (BW) adjustment with a single capacitor per axis RoHS/WEEE lead-free compliant -40°C to +105°C operating temperature range Qualified for automotive applications

## APPLICATIONS

Cost sensitive, low power, motion and tilt sensing applications

Mobile devices Gaming systems Disk drive protection Image stabilization Active noise control (ANC)

Sports and health devices

## Small, Low Power,

## 3-Axis, ±16 g Accelerometer

[ADXL316](https://www.analog.com/ADXL316?doc=ADXL316.pdf)

## GENERAL DESCRIPTION

The ADXL316 is a small, thin, low power, complete 3-axis accelerometer with signal conditioned voltage outputs. The product measures acceleration with a minimum measurement range of ±16 g . It can measure the static acceleration of gravity in tilt sensing applications, as well as dynamic acceleration resulting from motion, shock, or vibration.

The user selects the bandwidth of the accelerometer using the CX, CY, and CZ capacitors at the XOUT, YOUT, and ZOUT pins. Bandwidths can be selected to suit the application, with a range of 0.5 Hz to 1600 Hz for the x and y axes, and a range of 0.5 Hz to 550 Hz for the z axis.

The ADXL316 is available in a small, low profile, 4 mm × 4 mm × 1.45 mm, 12-lead, plastic lead frame chip scale package (LFCSP).

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## [ADXL316](https://www.analog.com/ADXL316?doc=ADXL316.pdf)

| TABLE OF CONTENTS                                                                                                                                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Features .............................................................................................. 1                                                                                           |
| Applications....................................................................................... 1                                                                                               |
| General Description......................................................................... 1                                                                                                      |
| Functional Block Diagram .............................................................. 1                                                                                                           |
| Revision History ............................................................................... 2                                                                                                  |
| Specifications..................................................................................... 3                                                                                               |
| Absolute Maximum Ratings............................................................ 4                                                                                                              |
| ESD Caution.................................................................................. 4                                                                                                     |
| Pin Configuration and Function Descriptions............................. 5                                                                                                                          |
| Typical Performance Characteristics ............................................. 6                                                                                                                 |
| Theory of Operation ......................................................................10                                                                                                        |
| Mechanical Sensor......................................................................10                                                                                                           |
| Performance................................................................................10                                                                                                       |
| REVISION HISTORY                                                                                                                                                                                    |
| 5/2019-Rev. B to Rev.C Changes to Table 2............................................................................ 4                                                                             |
| 4/2019-Rev. Ato Rev. B Changes to Table 1............................................................................ 3 Changes to Figure 18, Figure 19, and Figure 20........................... 8 |

Applications Information .............................................................. 11

Power Supply Decoupling ......................................................... 11

Setting the Bandwidth Using CX, CY, and CZ  .......................... 11

Self Test ........................................................................................ 11

Design Trade-Offs for Selecting Filter Characteristics: the

Noise/BW Trade-Off  .................................................................. 11

Use with Operating Voltages other than 3 V  .............................. 12

Axes of Acceleration Sensitivity ............................................... 12

Layout and Design Recommendations  ........................................ 13

Outline Dimensions ....................................................................... 14

Ordering Guide .......................................................................... 14

Automotive Products ................................................................. 14

8/2016-Rev. 0 to Rev. A

Changes to General Description Section .......................................  1

10/2015-Revision 0: Initial Version

## SPECIFICATIONS

TA = 25°C, VS = 3 V , CX = CY = CZ = 0.1 µF, acceleration = 0 g , unless otherwise noted. All minimum and maximum specifications are guaranteed. Typical specifications are not guaranteed.

Table 1.

| Parameter                               | Test Conditions/Comments   | Min   | Typ   |   Max | Unit         |
|-----------------------------------------|----------------------------|-------|-------|-------|--------------|
| SENSOR INPUT                            | Each axis                  |       |       |       |              |
| Measurement Range 1                     |                            | ±16   | ±19   |       | g            |
| Nonlinearity                            | %of measurement range      |       | ±0.2  |       | %            |
| Package Alignment Error                 |                            |       | ±1    |       | Degrees      |
| Interaxis Alignment Error               |                            |       | ±0.1  |       | Degrees      |
| Cross Axis Sensitivity                  |                            |       | ±2    |       | %            |
| SENSITIVITY (RATIOMETRIC) 2             | Each axis                  |       |       |       |              |
| Sensitivity at X OUT ,Y OUT , and Z OUT | V S = 3V                   | 50    | 57    |    64 | mV/ g        |
| Sensitivity Change due to Temperature   | S = 3V                     |       | ±0.5  |       | mV/ g        |
| ZERO g BIAS LEVEL (RATIOMETRIC)         | V Each axis                |       |       |       |              |
| 0 g Voltage at X OUT ,Y OUT , and Z OUT | V S = 3 V, 25°C            | 1.2   | 1.5   |   1.8 | V            |
| Initial 0 g Output Deviation from Ideal | V S = 3 V, 25°C            |       | ±100  |       | mV           |
| 0 g Offset vs. Temperature              |                            |       | ±1    |       | m g /°C      |
| NOISE PERFORMANCE                       |                            |       |       |       |              |
| Output Noise                            | <4 kHz,V S = 3V            |       | 1     |       | mV           |
| Noise Density                           |                            |       |       |       |              |
| X OUT andY OUT                          |                            |       | 210   |       | µ g /√Hz rms |
| Z OUT                                   |                            |       | 450   |       | µ g /√Hz rms |
| FREQUENCY RESPONSE 4                    |                            |       |       |       |              |
| X OUT andY OUT Bandwidth 5              | No external filter         |       | 1600  |       | Hz           |
| Z OUT Bandwidth 5                       | No external filter         |       | 550   |       | Hz           |
| R FILT Tolerance                        |                            | 27    | 32    |    37 | kΩ           |
| Sensor Resonant Frequency               |                            |       | 4.2   |       | kHz          |
| SELF TEST (ST) 6                        |                            |       |       |       |              |
| Logic Input Low                         |                            |       |       |   0.3 | V            |
| Logic Input High                        |                            | 2.7   |       |       | V            |
| ST Input Resistance to Ground           |                            | 30    | 50    |       | kΩ           |
| Output Change                           | ST = 0 to ST = 1           |       |       |       |              |
| At X OUT                                |                            | -65   | -50   |   -35 | mV           |
| AtY OUT                                 |                            | 35    | 50    |    65 | mV           |
| At Z OUT                                |                            | 70    | 90    |   110 | mV           |
| OUTPUT AMPLIFIER                        |                            |       |       |       |              |
| Output Swing                            |                            |       |       |       |              |
| Low                                     | No load                    |       | 0.1   |       | V            |
| High                                    | No load                    |       | 2.8   |       | V            |
| POWER SUPPLY                            |                            |       |       |       |              |
| Operating Voltage Range                 |                            | 1.8   |       |   3.6 | V            |
| Quiescent Supply Current                |                            |       | 350   |       | µA           |
| Turn-On Time 7                          |                            |       | 10    |       | ms           |
| OPERATINGTEMPERATURE RANGE              |                            | -40   |       |  +105 | °C           |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                  | Rating                   |
|--------------------------------------------|--------------------------|
| Acceleration                               |                          |
| Shock Survival,AnyAxis,andUnpowered        | 10,000 g                 |
| Shock Survival, AnyAxis, and Powered       | 10,000 g                 |
| V S                                        | -0.3V to +4.5V           |
| All Other Pins                             | (COM-0.3V)to (V S +0.3V) |
| Output Short-Circuit Duration(AnyPintoCOM) | Indefinite               |
| Temperature Range (Powered)                | -55°C to +125°C          |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 3. Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                |
|-----------|------------|--------------------------------------------------------------------------------------------|
|         1 | DNC        | Do Not Connect.                                                                            |
|         2 | ST         | Self Test.                                                                                 |
|         3 | COM        | Ground.                                                                                    |
|         4 | DNC        | Do Not Connect.                                                                            |
|         5 | DNC        | Do Not Connect.                                                                            |
|         6 | Z OUT      | Z Channel Output.                                                                          |
|         7 | DNC        | Do Not Connect.                                                                            |
|         8 | Y OUT      | Y Channel Output.                                                                          |
|         9 | X OUT      | X Channel Output.                                                                          |
|        10 | DNC        | Do Not Connect.                                                                            |
|        11 | DNC        | Do Not Connect.                                                                            |
|        12 | V S        | Supply Voltage (1.8V to 3.6 V).                                                            |
|           | EP         | Exposed Pad. The exposed pad is not internally connected. Solder for mechanical integrity. |

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

N (number of devices tested) &gt; 1000 for all typical performance plots, unless otherwise noted.

<!-- image -->

Figure 3. X-Axis Zero g Bias at 25°C, VS = 3 V

<!-- image -->

Figure 4. Y-Axis Zero g Bias at 25°C, VS = 3 V

<!-- image -->

Figure 5. Z-Axis Zero g Bias at 25°C, VS = 3 V

<!-- image -->

Figure 6. X-Axis Self Test Response at 25°C, VS = 3 V

Figure 7. Y-Axis Self Test Response at 25°C, VS = 3 V

<!-- image -->

Figure 8. Z-Axis Self Test Response at 25°C, VS = 3 V

<!-- image -->

<!-- image -->

Figure 9. X-Axis Zero g Bias Temperature Coefficient, VS = 3 V

<!-- image -->

Figure 10. Y-Axis Zero g Bias Temperature Coefficient, VS = 3 V

<!-- image -->

Figure 11. Z-Axis Zero g Bias Temperature Coefficient, VS = 3 V

<!-- image -->

<!-- image -->

Figure 12. X-Axis Zero g Bias vs. Temperature

Figure 13. Y-Axis Zero g Bias vs. Temperature

<!-- image -->

Figure 14. Z-Axis Zero g Bias vs. Temperature

<!-- image -->

<!-- image -->

Figure 15. X-Axis Sensitivity at 25°C, VS = 3 V

<!-- image -->

Figure 16. Y-Axis Sensitivity at 25°C, VS = 3 V

<!-- image -->

Figure 17. Z-Axis Sensitivity at 25°C, VS = 3 V

<!-- image -->

Figure 18. X-Axis Sensitivity vs. Temperature, VS = 3 V

Figure 19. Y-Axis Sensitivity vs. Temperature, VS = 3 V

<!-- image -->

Figure 20. Z-Axis Sensitivity vs. Temperature, VS = 3 V

<!-- image -->

Figure 21. Typical Current Consumption vs. Supply Voltage

<!-- image -->

## THEORY OF OPERATION

The ADXL316 is a complete 3-axis acceleration measurement system. The ADXL316 has a measurement range of ±16 g minimum. It contains a polysilicon surface micromachined sensor and signal conditioning circuitry to implement an openloop acceleration measurement architecture. The output signals are analog voltages that are proportional to acceleration. The accelerometer can measure the static acceleration of gravity in tilt sensing applications as well as dynamic acceleration resulting from motion, shock, or vibration.

The sensor is a polysilicon surface micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against acceleration forces. Deflection of the structure is measured using a differential capacitor that consists of independent fixed plates and plates attached to the moving mass. The fixed plates are driven by 180° out-of-phase square waves. Acceleration deflects the moving mass and unbalances the differential capacitor, resulting in a sensor output with an amplitude proportional to acceleration. Phase-sensitive demodulation techniques determine the magnitude and direction of the acceleration.

A 32 kΩ resistor can amplify and bring the demodulator output off-chip. The user then sets the signal bandwidth of the device by adding a capacitor. This filtering improves measurement resolution and helps prevent aliasing.

## MECHANICAL SENSOR

The ADXL316 uses a single structure for sensing the X-, Y-, and Z-axes. As a result, the three axes sense directions are highly orthogonal with minimal cross axis sensitivity. Mechanical misalignment of the sensor die to the package is the chief source of cross axis sensitivity. Mechanical misalignment can be calibrated out at the system level.

## PERFORMANCE

Rather than using additional temperature compensation circuitry, innovative design techniques ensure high performance is built in to the ADXL316. As a result, there is neither quantization error nor nonmonotonic behavior, and temperature hysteresis is very low.

## APPLICATIONS INFORMATION

## POWER SUPPLY DECOUPLING

For most applications, a single 0.1 µF capacitor, CDC, placed close to the ADXL316 supply pins adequately decouples the accelerometer from noise on the power supply. However, in applications where noise is present at the 50 kHz internal clock frequency (or any harmonic thereof), additional care in power supply bypassing is required because this noise can cause errors in acceleration measurement. If additional decoupling is needed, a 100 Ω (or smaller) resistor or a ferrite bead can be inserted in the supply line. Additionally, a larger bulk bypass capacitor (1 µF or greater) can be added in parallel to CDC. Ensure that the connection from the ADXL316 ground to the power supply ground is low impedance, because noise transmitted through ground has a similar effect as noise transmitted through VS.

## SETTING THE BANDWIDTH USING CX, CY, AND CZ

The ADXL316 has provisions for band-limiting the XOUT, YOUT, and ZOUT pins. Capacitors must be added at these pins to implement low-pass filtering for antialiasing and noise reduction. The equation for the -3 dB bandwidth is

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

The tolerance of the internal resistor (RFILT) can vary by as much as ±15% of its nominal value (32 kΩ), and the bandwidth varies accordingly. A minimum capacitance of 0.0047 µF for CX, CY, and CZ is recommended in all cases.

Table 4. Filter Capacitor Selection, CX, CY, and CZ

|   Bandwidth (Hz) |   Capacitor (µF) |
|------------------|------------------|
|                1 |              4.7 |
|               10 |             0.47 |
|               50 |             0.10 |
|              100 |             0.05 |
|              200 |            0.027 |
|              500 |             0.01 |

## SELF TEST

The ST pin controls the self test feature. When this pin is connected to VS, an electrostatic force is exerted on the accelerometer beam. The resulting movement of the beam allows the user to test if the accelerometer is functional. The typical change in output is -0.88 g (corresponding to -50 mV) on the x-axis, 0.88 g (or +50 mV) on the y-axis, and 1.58 g (or +90 mV) on the z-axis. The ST pin may be left open circuit or connected to the common pin (COM) in normal use.

Never expose the ST pin to voltages greater than VS + 0.3 V . If this cannot be guaranteed due to the system design (for instance, if there are multiple supply voltages), a low VF clamping diode between ST and VS is recommended.

## DESIGN TRADE-OFFS FOR SELECTING FILTER CHARACTERISTICS: THE NOISE/BW TRADE-OFF

The selected accelerometer bandwidth ultimately determines the measurement resolution (the smallest detectable acceleration). Filtering can lower the noise floor to improve the resolution of the accelerometer. Resolution is dependent on the analog filter bandwidth at XOUT, YOUT, and ZOUT.

The output of the ADXL316 has a typical bandwidth of greater than 500 Hz. The user must filter the signal at this point to limit aliasing errors. The analog bandwidth must be no more than half the analog-to-digital sampling frequency to minimize aliasing. The analog bandwidth can decrease further to reduce noise and improve resolution.

The ADXL316 has white Gaussian noise, which contributes equally at all frequencies and is described in terms of µ g /√Hz (the noise is proportional to the square root of the accelerometer bandwidth). Limit bandwidth to the lowest frequency needed by the application to maximize the resolution and dynamic range of the accelerometer.

With the single-pole roll-off characteristic, the typical rms noise of the ADXL316 is determined by

<!-- formula-not-decoded -->

Often, the peak value of the noise is desired. Statistical methods can only estimate peak-to-peak noise. Table 5 is useful for estimating the probabilities of exceeding various peak values, given the rms value.

Table 5. Estimation of Peak-to-Peak Noise

| Peak-to-PeakValue   |   %ofTimethat Noise Exceeds Nominal Peak-to-PeakValue |
|---------------------|-------------------------------------------------------|
| 2 × rms             |                                                    32 |
| 4 × rms             |                                                   4.6 |
| 6 × rms             |                                                  0.27 |
| 8 × rms             |                                                 0.006 |

## USE WITH OPERATING VOLTAGES OTHER THAN 3 V

The ADXL316 is tested and specified at VS = 3 V; however, it can be powered with VS as low as 1.8 V or as high as 3.6 V . Note that some performance parameters change as the supply voltage is varied.

The ADXL316 outputs are ratiometric, so the output sensitivity (or scale factor) is proportional to the supply voltage. At VS = 3.6 V , the output sensitivity is typically 78 mV/ g . At VS = 2 V , the output sensitivity is typically 42 mV/ g .

The zero g bias output is also ratiometric, so the zero g output is nominally equal to VS/2 at all supply voltages.

The output noise is not ratiometric but is absolute in volts; therefore, the noise density decreases as the supply voltage increases. This decrease is because the scale factor (mV/ g ) increases while the noise voltage remains constant. At VS = 3.6 V , the x-axis and y-axis noise density is typically 150 µ g /√Hz, while at VS = 2 V , the x-axis and y-axis noise density is typically 280 µ g /√Hz.

Self test response in g is roughly proportional to the square of the supply voltage. However, when ratiometricity of sensitivity is factored in with supply voltage, the self test response in volts is roughly proportional to the cube of the supply voltage. For example, at VS = 3.6 V , the self test response for the ADXL316 is approximately -86 mV for the x-axis, +86 mV for the y-axis, and +162 mV for the z-axis. At VS = 2 V , the self test response is approximately -14 mV for the x-axis, +14 mV for the y-axis, and +28 mV for the z-axis.

The supply current decreases as the supply voltage decreases. Typical current consumption at VS = 3.6 V is 400 µA, and typical current consumption at VS = 2 V is 300 µA.

## AXES OF ACCELERATION SENSITIVITY

Figure 22 shows the axes of acceleration (AX, AY, and AZ) sensitivity, corresponding output voltage increases when accelerated along the sensitive axis.

Figure 22. Axes of Acceleration (AX, AY, and AZ) Sensitivity

<!-- image -->

Figure 23. Output Response vs. Orientation to Gravity

<!-- image -->

## LAYOUT AND DESIGN RECOMMENDATIONS

The recommended soldering profile is shown in Figure 24, followed by a description of the recommended soldering profile features in Table 6.

<!-- image -->

Figure 24. Recommended Soldering Profile

| Profile Feature                                   | Sn63/Pb37         | Pb-Free           |
|---------------------------------------------------|-------------------|-------------------|
| Average Ramp Rate (T L to T P )                   | 3°C/sec maximum   | 3°C/sec maximum   |
| Preheat                                           |                   |                   |
| MinimumTemperature (T SMIN )                      | 100°C             | 150°C             |
| MaximumTemperature (T SMAX )                      | 150°C             | 200°C             |
| Time (T SMIN to T SMAX ), t S                     | 60 sec to 120 sec | 60 sec to 180 sec |
| T SMAX to T L                                     |                   |                   |
| Ramp-Up Rate                                      | 3°C/sec maximum   | 3°C/sec maximum   |
| Time Maintained Above Liquidous (T L )            |                   |                   |
| Liquidous Temperature (T L )                      | 183°C             | 217°C             |
| Time (t L )                                       | 60 sec to 150 sec | 60 sec to 150 sec |
| Peak Temperature (T P )                           | 240°C + 0°C/-5°C  | 260°C + 0°C/-5°C  |
| Time within 5°C of Actual Peak Temperature (t P ) | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                    | 6°C/sec maximum   | 6°C/sec maximum   |
| Time 25°C (t 25°C ) to Peak Temperature           | 6 minutes maximum | 8 minutes maximum |

Table 6. Recommended Soldering Profile

<!-- image -->

## OUTLINE DIMENSIONS

Figure 25. 12-Lead Lead Frame Chip Scale Package [LFCSP\_SS] 4 mm × 4 mm Body and 1.45 mm Package Height, With Side Solderable Leads (CS-12-3) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1          | Measurement Range( g )   |   Specified Voltage (V) | Temperature Range   | Package Description                              | Package Option   |
|------------------|--------------------------|-------------------------|---------------------|--------------------------------------------------|------------------|
| ADXL316WBCSZ     | ±16                      |                       3 | -40°C to +105°C     | 12-Lead Lead Frame Chip Scale Package [LFCSP_SS] | CS-12-3          |
| ADXL316WBCSZ-RL  | ±16                      |                       3 | -40°C to +105°C     | 12-Lead Lead Frame Chip Scale Package [LFCSP_SS] | CS-12-3          |
| ADXL316WBCSZ-RL7 | ±16                      |                       3 | -40°C to +105°C     | 12-Lead Lead Frame Chip Scale Package [LFCSP_SS] | CS-12-3          |

## AUTOMOTIVE PRODUCTS

The ADXL316W models are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the commercial models; therefore, designers should review the Specifications section of this data sheet carefully. Only the automotive grade products shown are available for use in automotive applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

<!-- image -->