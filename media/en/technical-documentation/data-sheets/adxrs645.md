<!-- lastmod 2022-02-10 -->
<!-- image -->

## FEATURES

- Innovative ceramic vertical mount package can be oriented for pitch or roll rate response
- Wide temperature range: -40°C to +175°C
- Long life: guaranteed 1000 hours at T A = 175°C
- High vibration rejection over wide frequency
- 10,000 g powered shock survivability
- Ratiometric to referenced supply
- 5 V single-supply operation
- Self-test on digital command
- Temperature sensor output

## APPLICATIONS

- Down hole measurements for geological exploration
- Extreme high temperature industrial applications
- Severe mechanical environments

## High Temperature, Vibration Rejecting ±2000°/sec Gyroscope

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The ADXRS645 is a high performance angular rate sensor with excellent vibration immunity for use in high temperature environments. The ADXRS645 is manufactured using the Analog Devices, Inc., patented high volume BiMOS surface-micromachining process with years of proven field reliability. An advanced, differential, quad sensor design provides superior acceleration and vibration rejection.

The output signal, RATEOUT, is a voltage proportional to the angular rate about the axis normal to the package lid. The measurement range is a minimum of ±2000°/sec, and may be extended to ±5000°/sec with the addition of a single external resistor. The output is ratiometric with respect to a provided reference supply. Other external capacitors are required for operation.

A temperature output is provided for compensation techniques. Two digital self-test inputs electromechanically excite the sensor to test proper operation of both the sensor and the signal conditioning circuits. The ADXRS645 is available in an 8 mm × 9 mm × 3 mm, 15-lead brazed lead tri in-line package.

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 Absolute Maximum Ratings...................................5 Recommended Soldering Profile........................5 Rate Sensitive Axis............................................ 5 ESD Caution.......................................................5 Pin Configuration and Function Descriptions........ 6   | Theory of Operation.............................................10 Setting Bandwidth............................................ 10 Temperature Output and Calibration................10 Supply Ratiometricity........................................10 Range Extension..............................................10 Self-Test Function.............................................10 Continuous Self-Test........................................10 Outline Dimensions..............................................11 Ordering Guide.................................................11   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Evaluation Boards............................................ 11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Typical Performance Characteristics.....................7                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2/2022-Rev. B to Rev. C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Added Recommended Soldering Profile Change to Setting Bandwidth Section...........................................................................................................                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Section.............................................................................................5 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

<!-- image -->

## SPECIFICATIONS

All minimum and maximum specifications are guaranteed. Typical specifications are not guaranteed. T A = 25°C, V S = AV CC = V DD = 5 V, V RATIO = AV CC , angular rate = 0°/sec, bandwidth = 80 Hz (C OUT = 0.01 µF), and I OUT = 100 µA, unless otherwise noted.

Table 1.

| Parameter                  | Test Conditions/Comments                       |   Min | Typ    |   Max | Unit       |
|----------------------------|------------------------------------------------|-------|--------|-------|------------|
| SENSITIVITY 1              | Clockwise rotation is positive output          |       |        |       |            |
| Measurement Range 2, 3     |                                                |       | ±2000  |       | °/sec      |
| Initial                    | T A = 25°C                                     |       | 1      |       | mV/°/sec   |
| Temperature Drift          | Uncompensated, -40°C to +150°C 4               |       | ±5     |       | %          |
|                            | Uncompensated, 150°C to 175°C                  |       | -35    |       | %          |
| Nonlinearity               | Best fit straight line                         |       | 0.1    |       | %of FS     |
| NULL 1                     |                                                |       |        |       |            |
| Initial                    | T A = 25°C                                     |   2.4 | 2.5    |   2.6 | V          |
| Temperature Drift          | Uncompensated, -40°C to +150°C 4               |       | ±50    |       | °/sec      |
|                            | Uncompensated, 150°C to 175°C                  |       | ±150   |       | °/sec      |
| Linear Acceleration Effect | Any axis                                       |       | 0.1    |       | °/sec/ g   |
| Vibration Rectification    | 25 g rms, 50 Hz to 5 kHz                       |       | 0.0006 |       | °/sec/ g 2 |
| NOISE PERFORMANCE          |                                                |       |        |       |            |
| Rate Noise Density         | T A ≤ 25°C                                     |       | 0.25   |       | °/sec/√Hz  |
| Resolution Floor           | T A = 25°C, 1 minute to 1 hour in-run          |       | 100    |       | °/hr       |
|                            | T A = 150°C, 1 minute to 1 hour in-run         |       | 150    |       | °/hr       |
| FREQUENCY RESPONSE         |                                                |       |        |       |            |
| Bandwidth (±3 dB) 5        | No external filter                             |       | 2000   |       | Hz         |
| Sensor Resonant Frequency  |                                                |  15.5 | 17.5   |    20 | kHz        |
| SELF-TEST 1                |                                                |       |        |       |            |
| ST1 RATEOUT Response       | ST1 pin from Logic 0 to Logic 1                |       | -1300  |       | °/sec      |
| ST2 RATEOUT Response       | ST2 pin from Logic 0 to Logic 1                |       | 1300   |       | °/sec      |
| ST1 to ST2 Mismatch 6      |                                                |       | ±2     |       | %          |
| Logic 1 Input Voltage      |                                                |   3.3 |        |       | V          |
| Logic 0 Input Voltage      |                                                |       |        |   1.7 | V          |
| Input Impedance            | To common                                      |    40 | 50     |   100 | kΩ         |
| TEMPERATURE SENSOR 1       |                                                |       |        |       |            |
| V TEMP at 25°C             | Load = 10 MΩ                                   |   2.3 | 2.4    |   2.5 | V          |
| Scale Factor 7             | 25°C, V RATIO = 5 V                            |       | 9      |       | mV/°C      |
| TURN-ON TIME 8             | Power on to ±2°/sec of final with CP5 = 100 nF |       | 50     |       | ms         |
| OUTPUT DRIVE CAPABILITY    |                                                |       |        |       |            |
| Current Drive              | For rated specifications                       |       |        |   200 | µA         |
| Capacitive Load Drive      |                                                |       |        |  1000 | pF         |
| POWER SUPPLY               |                                                |       |        |       |            |
| Operating Voltage (V S )   |                                                |  4.75 | 5.00   |  5.25 | V          |
| Quiescent Supply Current   |                                                |       | 3.5    |       | mA         |
| TEMPERATURE RANGE          |                                                |       |        |       |            |
| Specified Performance      |                                                |   -40 |        |  +175 | °C         |
| LIFESPAN                   |                                                |       |        |       |            |
| Usable Life Expectancy     | T A = 175°C                                    |  1000 |        |       | Hours      |

1 Parameter is linearly ratiometric with V RATIO .

2 Measurement range is the maximum range possible, including output swing range, initial offset, sensitivity, offset drift, and sensitivity drift at 5 V supplies.

3 Measurement range can be extended to as much as ±5000°/s by adding a single 120 kΩ resistor between the RATEOUT and SUMJ pins.

4 Maximum deviation from +25°C to -40°C or +25°C to +150°C, see the Typical Performance Characteristics section for typical behavior over temperature.

## SPECIFICATIONS

Table 1.

| Parameter   | Test Conditions/Comments   | Min   | Typ   | Max   | Unit   |
|-------------|----------------------------|-------|-------|-------|--------|

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                 | Rating           |
|-------------------------------------------|------------------|
| Acceleration (Any Axis, 0.5 ms)           |                  |
| Unpowered                                 | 10,000 g         |
| Powered                                   | 10,000 g         |
| V DD , AV CC                              | -0.3 V to +6.6 V |
| V RATIO                                   | AV CC            |
| ST1, ST2                                  | AV CC            |
| Output Short-Circuit Duration (Any Pin to | Indefinite       |
| Common)                                   |                  |
| Operating Temperature Range               | -55°C to +175°C  |
| Storage Temperature Range                 | -65°C to +185°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Drops onto hard surfaces can cause shocks of greater than 10,000 g and can exceed the absolute maximum rating of the device. Exercise care in handling to avoid damage.

## RECOMMENDED SOLDERING PROFILE

Wave soldering is the recommended process for the ADXRS645. The process is aligned with standard practices defined in IPC-7530A. This process includes proper controls for flux spraying, preheating, wave soldering, and cooling operations.

## RATE SENSITIVE AXIS

The ADXRS645 produces a positive output voltage for clockwise rotation about the axis normal to the package lid, that is, clockwise when looking at the package lid.

Figure 2. RATEOUT Signal Increases with Clockwise Rotation

<!-- image -->

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration (Top View)

<!-- image -->

Table 3. Pin Function Descriptions

| Pin Number   | Mnemonic   | Description                             |
|--------------|------------|-----------------------------------------|
| A1           | CP3        | Charge pump capacitor, 22 nF            |
| A2           | CP5        | HV filter capacitor, 100 nF             |
| A3           | ST1        | Positive self-test                      |
| B1           | CP4        | Charge pump capacitor, 22 nF            |
| B2           | V DD       | Positive charge pump supply             |
| B3           | ST2        | Negative self-test                      |
| C1           | CP1        | Charge pump capacitor, 22 nF            |
| C2           | PGND       | Charge pump supply return               |
| C3           | TEMP       | Temperature voltage output              |
| D1           | CP2        | Charge pump capacitor, 22 nF            |
| D2           | RATEOUT    | Rate signal output                      |
| E1           | AV CC      | Positive analog supply                  |
| E2           | SUMJ       | Output amplifier summing junction       |
| F1           | AGND       | Analog supply return                    |
| F2           | V RATIO    | Reference supply for ratiometric output |

Figure 4. Pin Configuration (3D View)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 5. Null Output at 25°C

<!-- image -->

Figure 6. Sensitivity at 25°C

<!-- image -->

Figure 7. ST1 Output Change at 25°C (V RATIO = 5 V)

<!-- image -->

Figure 8. Null Output Over Temperature

Figure 9. Sensitivity Over Temperature

<!-- image -->

Figure 10. ST1 Output Over Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 11. ST2 Output Change at 25°C (V RATIO = 5 V)

<!-- image -->

Figure 12. Self-Test Mismatch at 25°C (V RATIO = 5 V)

<!-- image -->

Figure 13. V TEMP Output at 25°C

<!-- image -->

Figure 14. ST2 Output Over Temperature

Figure 15. Allan Variance at 25°C vs. Averaging Time

<!-- image -->

Figure 16. V TEMP Output Over Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 17. Current Consumption at 25°C (V RATIO = 5 V)

<!-- image -->

Figure 18. Typical Noise Spectral Density (C OUT = 0.01 µF)

Figure 19. Typical Rate and Phase Response vs. Frequency (C OUT = 470 pF with a Series RC Low-Pass Filter of 3.3 kΩ and 22 nF)

<!-- image -->

Figure 20. Typical Output Nonlinearity

<!-- image -->

## THEORY OF OPERATION

The ADXRS645 operates on the principle of a resonator gyroscope. Two polysilicon sensing structures each contain a dither frame that is electrostatically driven to resonance, producing the necessary velocity element to produce a Coriolis force during angular rate. At two of the outer extremes of each frame, orthogonal to the dither motion, are movable fingers that are placed between fixed pickoff fingers to form a capacitive pickoff structure that senses Coriolis motion. The resulting signal is fed to a series of gain and demodulation stages that produce the electrical rate signal output. The dual sensor design rejects external g-forces and vibration. Fabricating the sensor with the signal conditioning electronics preserves signal integrity in noisy environments.

The electrostatic resonator requires 15 V for operation. Because only 5 V is typically available in most applications, a charge pump is included on chip. If an external 17 V to 22 V supply is available, the two capacitors on CP1 to CP4 can be omitted, and this supply can be connected to CP5 (Pin A2) through a 1 kΩ series resistor. Do not ground CP5 when power is applied to the ADXRS645. No damage occurs, but under certain conditions, the charge pump may fail to start up after the ground is removed without first removing power from the ADXRS645.

## SETTING BANDWIDTH

The external capacitor, C OUT , is used in combination with the onchip resistor, R OUT , to create a low-pass filter to limit the bandwidth of the ADXRS645 rate response. The -3 dB frequency set by R OUT and C OUT is

<!-- formula-not-decoded -->

This frequency can be well controlled because R OUT has been trimmed during manufacturing to be 180 kΩ ± 1%. Any external resistor applied between the RATEOUT pin (D2) and SUMJ pin (E2) results in R OUT = (180 kΩ × R EXT )/(180 kΩ + R EXT ).

In general, an additional filter (in either hardware or software) is added to attenuate high frequency noise arising from demodulation spikes at the 18 kHz resonant frequency of the gyroscope. An RC output filter consisting of a 3.3 kΩ series resistor and 22 nF shunt capacitor (2.2 kHz pole) is recommended.

## TEMPERATURE OUTPUT AND CALIBRATION

It is common practice to temperature calibrate gyroscopes to improve their overall accuracy. The ADXRS645 has a temperature proportional voltage output that provides input to such a calibration method. The temperature sensor structure is shown in Figure 21.

The voltage at TEMP (Pin C3) is nominally 2.4 V at 25°C, and VRATIO = 5 V. The temperature coefficient is ~9 mV/°C at 25°C. Although the TEMP output is highly repeatable, it has only modest absolute accuracy.

<!-- image -->

Figure 21. Temperature Sensor Structure

## SUPPLY RATIOMETRICITY

The RATEOUT, ST1, ST2, and TEMP signals of the ADXRS645 are ratiometric to the V RATIO voltage, that is, the null voltage, rate sensitivity, and temperature outputs are proportional to V RATIO . Therefore, it is most easily used with a supply ratiometric analog-to-digital converter (ADC), which results in self cancellation of errors due to minor supply variations. There is some small, usually negligible, error due to nonratiometric behavior. Note that, to guarantee full rate range, V RATIO must not be greater than AV CC .

## RANGE EXTENSION

The ADXRS645 scale factor can be reduced to extend the measurement range to as much as ±5000°/sec by adding a single 120 kΩ resistor between the RATEOUT and SUMJ pins. If an external resistor is added between the RATEOUT and SUMJ pins, proportionally increase COUT to maintain correct bandwidth (that is, if adding a 180 kΩ resistor, double C OUT ).

## SELF-TEST FUNCTION

The ADXRS645 includes a self-test feature that actuates each of the sensing structures and associated electronics in the same manner, as if subjected to angular rate. It is activated by standard logic high levels applied to ST1 (Pin A3), ST2 (Pin B3), or both. ST1 causes the voltage at RATEOUT to change about -1.3 V, and ST2 causes an opposite change of +1.3 V. The self-test response follows the viscosity temperature dependence of the package atmosphere, approximately 0.25%/°C.

Activating both ST1 and ST2 simultaneously is not damaging. ST1 and ST2 are fairly closely matched (±1%), but actuating both simultaneously may result in a small apparent null bias shift proportional to the degree of self-test mismatch.

ST1 and ST2 are activated by applying a voltage equal to V RATIO to the ST1 pin and the ST2 pin. The voltage applied to ST1 and ST2 must never be greater than AV CC .

## CONTINUOUS SELF-TEST

The on-chip integration of the ADXRS645 gives it higher reliability than is obtainable with any other high volume manufacturing method. In addition, it is manufactured under a mature BiMOS process that has field proven reliability. As an additional failure detection measure, power-on self-test can be performed. However, some applications may warrant continuous self-test while sensing rate.

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1      | Temperature Range   | Package Description               | Packing Quantity   | Package Option   |
|--------------|---------------------|-----------------------------------|--------------------|------------------|
| ADXRS645HDYZ | -40°C to +175°C     | 15-Lead Ceramic DIP Vertical Form | Tray, 96           | DY-15-1          |

## EVALUATION BOARDS

| Model 1        | Description      |
|----------------|------------------|
| EVAL-ADXRS645Z | Evaluation Board |

<!-- image -->

Figure 22. 15-Lead Brazed Lead Tri In-line Package [BL\_TIP] (DY-15-1) Dimensions shown in millimeters

<!-- image -->

Updated: January 18, 2022