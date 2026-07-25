<!-- lastmod 2022-07-20 -->
<!-- image -->

## FEATURES

- Complete rate gyroscope on a single chip
- Z-axis (yaw rate) response
- 20°/hour bias stability
- 0.02°/√second angle random walk
- High vibration rejection over a wide frequency
- 10,000 g powered shock survivability
- Ratiometric to referenced supply
- 5 V single supply operation
- -40°C to +105°C operation
- Self-test on digital command
- Ultrasmall and light (&lt;0.15 cc, &lt;0.5 gram)
- Temperature sensor output
- RoHS compliant

## APPLICATIONS

- Industrial applications
- Inertial measurement units
- Severe mechanical environments
- Platform stabilization

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1.

<!-- image -->

## Vibration Rejecting ±250°/s Yaw Rate Gyroscope

## GENERAL DESCRIPTION

The ADXRS642 is a complete angular rate sensor (gyroscope) that uses the Analog Devices, Inc., surface-micromachining process to make a functionally complete and low cost angular rate sensor integrated with all of the required electronics on one chip. The manufacturing technique for this device is a patented high volume BiMOS process with years of proven field reliability.

The ADXRS642 is an industrial grade gyroscope that is 100% pin, package, temperature, and function compatible with the ADXRS622 and ADXRS652, while offering enhanced vibration rejection

The output signal, RATEOUT (1B, 2A), is a voltage proportional to angular rate about the axis normal to the top surface of the package. The measurement range is a minimum of ±250°/s. The output is ratiometric with respect to a provided reference supply. Other external capacitors are required for operation.

A temperature output is provided for compensation techniques. Two digital self-test inputs electromechanically excite the sensor to test proper operation of both the sensor and the signal conditioning circuits. The ADXRS642 is available in a 7 mm × 7 mm × 3 mm BGA chip-scale package.

## TABLE OF CONTENTS

| Features................................................................   |   1 |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    |   1 |
| General Description...............................................1        |     |
| Functional Block Diagram......................................1            |     |
| Specifications........................................................     |   3 |
| Absolute Maximum Ratings...................................5               |     |
| Rate Sensitive Axis............................................            |   5 |
| ESD Caution.......................................................5        |     |
| Pin Configuration and Function Descriptions........                        |   6 |
| Typical Performance Characteristics.....................7                  |     |
| Theory of Operation...............................................9        |     |

## REVISION HISTORY

## 7/2022-Rev. A to Rev. B

Change to Null, Temperature Drift Parameter, Table 1.................................................................................... 3

<!-- image -->

Setting Bandwidth.............................................. 9

Temperature Output and Calibration.................. 9

Supply Ratiometricity..........................................9

Modifying the Measurement Range ................ 10

Null Adjustment................................................ 10

Self-Test Function.............................................10

Continuous Self-Test........................................ 10

Mechanical Performance..................................10

Outline Dimensions..............................................11

Ordering Guide................................................. 11

Evaluation Boards............................................ 11

## SPECIFICATIONS

All minimum and maximum specifications are guaranteed. Typical specifications are not guaranteed. T A = 25°C, V S = AV CC = V DD = 5 V, V RATIO = AV CC , angular rate = 0°/sec, bandwidth = 80 Hz (C OUT = 0.01 µF), I OUT = 100 µA, ±1 g , unless otherwise noted.

Table 1.

| Parameter                    | Conditions                                       | Min   | Typ    |   Max | Unit      |
|------------------------------|--------------------------------------------------|-------|--------|-------|-----------|
| SENSITIVITY 1                | Clockwise rotation is positive output            |       |        |       |           |
| Measurement Range 2          | Full-scale range over specifications range       | ±250  | ±300   |       | °/sec     |
| Initial and Over Temperature | -40°C to +105°C                                  |       | 7.0    |       | mV/°/sec  |
| Temperature Drift 3          |                                                  |       | ±2     |       | %         |
| Nonlinearity                 | Best fit straight line                           |       | 0.01   |       | %of FS    |
| NULL 1                       |                                                  |       |        |       |           |
| Null                         | -40°C to +105°C                                  |       | 2.5    |       | V         |
| Calibrated Null 4            | -40°C to +105°C                                  |       | ±0.1   |       | °/sec     |
| Temperature Drift            | -40°C to +105°C                                  |       | ±10    |       | °/sec     |
| Linear Acceleration Effect   | Any axis                                         |       | 0.03   |       | °/sec/ g  |
| Vibration Rectification      | 25 g rms, 50 Hz to 5 kHz                         |       | 0.0002 |       | °/s/ g 2  |
| NOISE PERFORMANCE            |                                                  |       |        |       |           |
| Rate Noise Density           | T A ≤ 25°C                                       |       | 0.02   |       | °/sec/√Hz |
| Resolution Floor             | T A = 25°C 1 minute to 1 hour in-run             |       | 20     |       | °/hr      |
| FREQUENCY RESPONSE           |                                                  |       |        |       |           |
| Bandwidth 5                  | ±3 dB user adjustable up to specification        |       | 2000   |       | Hz        |
| Sensor Resonant Frequency    |                                                  | 15    | 17     |    19 | kHz       |
| SELF-TEST 1                  |                                                  |       |        |       |           |
| ST1 RATEOUT Response         | ST1 pin from Logic 0 to Logic 1                  |       | -45    |       | °/sec     |
| ST2 RATEOUT Response         | ST2 pin from Logic 0 to Logic 1                  |       | 45     |       | °/sec     |
| ST1 to ST2 Mismatch 6        |                                                  | -5    | ±2     |    +5 | %         |
| Logic 1 Input Voltage        |                                                  | 3.3   |        |       | V         |
| Logic 0 Input Voltage        |                                                  |       |        |   1.7 | V         |
| Input Impedance              | To common                                        | 40    | 50     |   100 | kΩ        |
| TEMPERATURE SENSOR 1         |                                                  |       |        |       |           |
| V OUT at 25°C                | Load = 10 MΩ                                     | 2.35  | 2.5    |  2.65 | V         |
| Scale Factor 7               | 25°C, V RATIO = 5 V                              |       | 9      |       | mV/°C     |
| Load to V S                  |                                                  |       | 25     |       | kΩ        |
| Load to Common               |                                                  |       | 25     |       | kΩ        |
| TURN-ON TIME 4               | Power on to ±0.5°/sec of final with CP5 = 100 nF |       |        |    50 | ms        |
| OUTPUT DRIVE CAPABILITY      |                                                  |       |        |       |           |
| Current Drive                | For rated specifications                         |       |        |   200 | µA        |
| Capacitive Load Drive        |                                                  |       |        |  1000 | pF        |
| POWER SUPPLY                 |                                                  |       |        |       |           |
| Operating Voltage (V S )     |                                                  | 4.75  | 5.00   |  5.25 | V         |
| Quiescent Supply Current     |                                                  |       | 3.5    |   4.5 | mA        |
| TEMPERATURE RANGE            |                                                  |       |        |       |           |
| Specified Performance        |                                                  | -40   |        |  +105 | °C        |

1 Parameter is linearly ratiometric with V RATIO .

2 Measurement range is the maximum range possible, including output swing range, initial offset, sensitivity, offset drift, and sensitivity drift at 5 V supplies.

3 From +25°C to -40°C or +25°C to +105°C.

## SPECIFICATIONS

Table 1.

| Parameter   | Conditions   | Min   | Typ   | Max   | Unit   |
|-------------|--------------|-------|-------|-------|--------|

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                       | Rating           |
|---------------------------------|------------------|
| Acceleration (Any Axis, 0.5 ms) |                  |
| Unpowered                       | 10,000 g         |
| Powered                         | 10,000 g         |
| V DD , AV CC                    | -0.3 V to +6.0 V |
| V RATIO                         | AV CC            |
| ST1, ST2                        | AV CC            |
|                                 | Indefinite       |
| Output Short-Circuit Duration   |                  |
| (Any Pin to Common)             |                  |
| Operating Temperature Range     | -55°C to +125°C  |
| Storage Temperature Range       | -65°C to +150°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Drops onto hard surfaces can cause shocks of greater than 10,000 g and can exceed the absolute maximum rating of the device. Care should be exercised in handling to avoid damage.

## RATE SENSITIVE AXIS

This is a z-axis rate-sensing device (also called a yaw rate-sensing device). It produces a positive going output voltage for clockwise rotation about the axis normal to the package top, that is, clockwise when looking down at the package lid.

Figure 2. RATEOUT Signal Increases with Clockwise Rotation

<!-- image -->

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 3. Pin Function Descriptions

| Pin No.   | Mnemonic   | Description                                  |
|-----------|------------|----------------------------------------------|
| 6D, 7D    | CP5        | HV Filter Capacitor, 100 nF.                 |
| 6A, 7B    | CP4        | Charge Pump Capacitor, 22 nF.                |
| 6C, 7C    | CP3        | Charge Pump Capacitor, 22 nF.                |
| 5A, 5B    | CP1        | Charge Pump Capacitor, 22 nF.                |
| 4A, 4B    | CP2        | Charge Pump Capacitor, 22 nF.                |
| 3A, 3B    | AV CC      | Positive Analog Supply.                      |
| 1B, 2A    | RATEOUT    | Rate Signal Output.                          |
| 1C, 2C    | SUMJ       | Output Amp Summing Junction.                 |
| 1D, 2D    | NC         | No Connection. Do not connect to these pins. |
| 1E, 2E    | V RATIO    | Reference Supply for Ratiometric Output.     |
| 1F, 2G    | AGND       | Analog Supply Return.                        |
| 3F, 3G    | TEMP       | Temperature Voltage Output.                  |
| 4F, 4G    | ST2        | Self-Test for Sensor 2.                      |
| 5F, 5G    | ST1        | Self-Test for Sensor 1.                      |
| 6G, 7F    | PGND       | Charge Pump Supply Return.                   |
| 6E, 7E    | V DD       | Positive Charge Pump Supply.                 |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 6. ST2 Output Change at 25°C (V RATIO = 5 V)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Typical Root Allan Deviation at 25°C vs. Averaging Time

Figure 11. Current Consumption at 25°C (V RATIO = 5 V)

<!-- image -->

Figure 12. V TEMP Output over Temperature, 256 Parts (V RATIO = 5 V)

<!-- image -->

## THEORY OF OPERATION

The ADXRS642 operates on the principle of a resonator gyro. Figure 13 shows a simplified version of one of four polysilicon sensing structures. Each sensing structure contains a dither frame that is electrostatically driven to resonance. This produces the necessary velocity element to produce a Coriolis force when experiencing angular rate. The ADXRS642 is designed to sense a z-axis (yaw) angular rate.

When the sensing structure is exposed to angular rate, the resulting Coriolis force couples into an outer sense frame, which contains movable fingers that are placed between fixed pickoff fingers. This forms a capacitive pickoff structure that senses Coriolis motion. The resulting signal is fed to a series of gain and demodulation stages that produce the electrical rate signal output. The quad sensor design rejects linear and angular acceleration, including external g -forces and vibration. This is achieved by mechanically coupling the four sensing structures such that external g -forces appear as common-mode signals that can be removed by the fully differential architecture implemented in the ADXRS642.

Figure 13. Simplified Gyro Sensing Structure-One Corner

<!-- image -->

The electrostatic resonator requires 18 V to 20 V for operation. Because only 5 V are typically available in most applications, a charge pump is included on chip. If an external 18 V to 20 V supply is available, the two capacitors on CP1 to CP4 can be omitted, and this supply can be connected to CP5 (Pin 6D, Pin 7D). CP5 should not be grounded when power is applied to the ADXRS642. No damage occurs, but under certain conditions, the charge pump may fail to start up after the ground is removed without first removing power from the ADXRS642.

## SETTING BANDWIDTH

The external capacitor, C OUT , is used in combination with the onchip resistor, R OUT , to create a low-pass filter to limit the bandwidth of the ADXRS642 rate response. The -3 dB frequency set by R OUT and C OUT is f OUT = 1/ 2 × π × R OUT ×C OUT (1)

In general, an additional filter (in either hardware or software) is added to attenuate high frequency noise arising from demodulation spikes at the 18 kHz resonant frequency of the gyro. An R/C output filter consisting of a 3.3k series resistor and 22 nF shunt capacitor (2.2 kHz pole) is recommended. Figure 13 shows the effect of adding this filter to the output of an ADXRS642 set to a 2000 Hz bandwidth.

and can be well controlled because R OUT has been trimmed during manufacturing to be 180 kΩ ± 1%. Any external resistor applied between the RATEOUT pin (1B, 2A) and SUMJ pin (1C, 2C) results in R OUT = 180 kΩ × R EXT / 180 kΩ + R EXT (2)

## TEMPERATURE OUTPUT AND CALIBRATION

It is common practice to temperature-calibrate gyros to improve their overall accuracy. The ADXRS642 has a temperature proportional voltage output that provides input to such a calibration method. The temperature sensor structure is shown in Figure 14. The temperature output is characteristically nonlinear, and any load resistance connected to the TEMP output results in decreasing the TEMP output and its temperature coefficient. Therefore, buffering the output is recommended.

The voltage at TEMP (3F, 3G) is nominally 2.5 V at 25°C, and VRATIO = 5 V. The temperature coefficient is ~9 mV/°C at 25°C. Although the TEMP output is highly repeatable, it has only modest absolute accuracy.

Figure 14. Temperature Sensor Structure

<!-- image -->

## SUPPLY RATIOMETRICITY

The ADXRS642 RATEOUT, ST1, ST2, and TEMP signals are ratiometric to the V RATIO voltage; for example, the null voltage, rate sensitivity and temperature outputs are proportional to V RATIO . Therefore, it is most easily used with a supply-ratiometric ADC, which results in self-cancellation of errors due to minor supply variations. There is some small, usually negligible, error due to nonratiometric behavior. Note that to guarantee full rate range, VRATIO should not be greater than AV CC .

## THEORY OF OPERATION

## MODIFYING THE MEASUREMENT RANGE

The ADXRS642 scale factor can be reduced to extend the measurement range to as much as ±450°/sec by adding a single 225 kΩ resistor between the RATEOUT and SUMJ. If an external resistor is added between RATEOUT and SUMJ, C OUT must be proportionally reduced to maintain the correct bandwidth.

## NULL ADJUSTMENT

The nominal 2.5 V null is for a symmetrical swing range at RATEOUT (1B, 2A). However, a nonsymmetric output swing may be suitable in some applications. Null adjustment is possible by injecting a suitable current to SUMJ (1C, 2C). Note that supply disturbances may reflect some null instability. Digital supply noise should be avoided, particularly in this case.

## SELF-TEST FUNCTION

The ADXRS642 includes a self-test feature that actuates each of the sensing structures and associated electronics in the same manner, as if subjected to angular rate. It is activated by standard logic high levels applied to Input ST1 (5F, 5G), Input ST2 (4F, 4G), or both. ST1 causes the voltage at RATEOUT to change about -0.3 V, and ST2 causes an opposite change of +0.3 V. The self-test response follows the viscosity temperature dependence of the package atmosphere, approximately 0.25%/°C. Activating both ST1 and ST2 simultaneously is not damaging. ST1 and ST2 are fairly closely matched (±2%), but actuating both simultaneously may result in a small apparent null bias shift proportional to the degree of self-test mismatch.

ST1 and ST2 are activated by applying a voltage equal to V RATIO to the ST1 pin and the ST2 pin. The voltage applied to ST1 and ST2 must never be greater than AV CC .

## CONTINUOUS SELF-TEST

The on-chip integration of the ADXRS642 gives it higher reliability than is obtainable with any other high volume manufacturing method. Also, it is manufactured under a mature BiMOS process that has field-proven reliability. As an additional failure detection measure, power-on self-test can be performed. However, some applications may warrant continuous self-test while sensing rate. Details outlining continuous self-test techniques are also available in the AN-768 Application Note.

## MECHANICAL PERFORMANCE

The ADXRS642 excellent vibration rejection is demonstrated in Figure 15 and Figure 16. Figure 15 shows the ADXRS642 output response with and without 15 g rms 50 Hz to 5 kHz of random vibration. The bandwidth of the gyro was limited to 1600 Hz. Performance is similar regardless of the direction of the input vibration.

Figure 15. ADXRS642 Output Response with and Without Random Vibration (15 g rms, 50 Hz to 5 kHz)

<!-- image -->

Figure 16 demonstrates the ADXRS642 dc noise response to 5g sine vibration over the 20 Hz to 5 kHz range. As can be seen, there are no sensitive frequencies present, and vibration rectification is vanishingly small. As in the previous example, the gyro bandwidth was set to 1600 Hz.

Figure 16. ADXRS642 Sine Vibration Noise Response (5 g, 20 Hz to 5 kHz)

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description                           | Packing Quantity   | Package Option   |
|-----------------|---------------------|-----------------------------------------------|--------------------|------------------|
| ADXRS642BBGZ    | -40°C to +105°C     | 32-Ball Ceramic BGA (6.85mm x 6.85mm x 3.8mm) |                    | BG-32-3          |
| ADXRS642BBGZ-RL | -40°C to +105°C     | 32-Ball Ceramic BGA (6.85mm x 6.85mm x 3.8mm) | Reel, 500          | BG-32-3          |

## EVALUATION BOARDS

| Model 1        | Description      |
|----------------|------------------|
| EVAL-ADXRS642Z | Evaluation Board |

<!-- image -->

Figure 17. 32-Lead Ceramic Ball Grid Array [CBGA] (BG-32-3) Dimensions shown in millimeters

<!-- image -->

Updated: July 04, 2022