<!-- lastmod 2022-03-04 -->
<!-- image -->

Enhanced Product

## FEATURES

- 12°/hr bias stability
- Z-axis (yaw rate) response
- 0.01°/√sec angle random walk
- High vibration rejection over wide frequency
- Measurement range extendable to a maximum of ±450°/sec
- 10,000 g powered shock survivability
- Ratiometric to referenced supply
- 6 V single-supply operation
- Self-test on digital command
- Ultrasmall and light (&lt;0.15 cc, &lt;0.5 gram)
- Temperature sensor output
- Complete rate gyroscope on a single chip
- RoHS compliant

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications
- Extended industrial temperature range (-55°C to +105°C)
- Controlled manufacturing baseline
- 1 assembly/test site
- 1 fabrication site
- Enhanced product change notification
- Qualification data available on request

## APPLICATIONS

- Industrial applications
- Severe mechanical environments
- Platform stabilization

## FUNCTIONAL BLOCK DIAGRAM

Rev. B

## [ADXRS646-EP](http://www.analog.com/ADXRS646)

## High Stability, Low Noise Vibration Rejecting Yaw Rate Gyroscope

## GENERAL DESCRIPTION

The ADXRS646-EP is a high performance angular rate sensor (gyroscope) that offers excellent vibration immunity. Bias stability is a widely recognized figure of merit for high performance gyroscopes, but in real-world applications, vibration sensitivity is often a more significant performance limitation and should be considered in gyroscope selection. The ADXRS646-EP offers superior vibration immunity and acceleration rejection as well as a low bias drift of 12°/hr (typical), enabling it to offer rate sensing in harsh environments where shock and vibration are present.

The ADXRS646-EP is manufactured using the Analog Devices, Inc., patented high volume BiMOS surface-micromachining process. An advanced, differential, quad sensor design provides the improved acceleration and vibration rejection. The output signal, RATEOUT, is a voltage proportional to angular rate about the axis normal to the top surface of the package. The measurement range is a minimum of ±250°/sec. The output is ratiometric with respect to a provided reference supply. Other external capacitors are required for operation.

A temperature output is provided for compensation techniques. Two digital self-test inputs electromechanically excite the sensor to test proper operation of both the sensor and the signal conditioning circuits.

The ADXRS646-EP is available in a 7 mm × 7 mm × 3 mm CBGA chip scale package. Additional application and technical information can be found in the ADXRS646 data sheet.

001

Figure 1.

<!-- image -->

| Data Sheet ADXRS646-EP                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Data Sheet ADXRS646-EP                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TABLE OF CONTENTS                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | TABLE OF CONTENTS                                                                                                                                                                                                                                                                                                                                                                          |
| Features................................................................ 1 Enhanced Product Features..................................1 Applications........................................................... 1 General Description...............................................1 Functional Block Diagram......................................1 Specifications........................................................ 3 Absolute Maximum Ratings...................................5 | Rate Sensitive Axis............................................ 5 ESD Caution.......................................................5 Pin Configuration and Function Descriptions........ 6 Typical Performance Characteristics.....................7 Outline Dimensions............................................. 10 Ordering Guide.................................................10 |

## SPECIFICATIONS

All minimum and maximum specifications are guaranteed. Typical specifications are not guaranteed.

TA = 25°C, V S = AV CC = V DD = 6 V, V RATIO = AV CC , angular rate = 0°/sec, bandwidth = 80 Hz (C OUT = 0.01 µF), I OUT = 100 µA, ±1 g , unless otherwise noted.

Table 1.

| Parameter                  | Test Conditions/Comments                         | Min   | Typ    |   Max | Unit       |
|----------------------------|--------------------------------------------------|-------|--------|-------|------------|
| SENSITIVITY 1              | Clockwise rotation is positive output            |       |        |       |            |
| Measurement Range 2        | Full-scale range over specifications range       | ±250  | ±300   |       | °/sec      |
| Initial                    |                                                  | 8.5   | 9      |   9.5 | mV/°/sec   |
| Temperature Drift 3        |                                                  |       | ±3     |       | %          |
| Nonlinearity               | Best fit straight line                           |       | 0.01   |       | % of FS    |
| NULL 1                     |                                                  |       |        |       |            |
| Null                       | -40°C to +105°C                                  | 2.7   | 3.0    |   3.3 | V          |
| Temperature Drift 3        |                                                  |       | ±3     |       | °/sec      |
| Linear Acceleration Effect | Any axis                                         |       | 0.015  |       | °/sec/ g   |
| Vibration Rectification    | 25 g rms, 50 Hz to 5 kHz                         |       | 0.0001 |       | °/sec/ g 2 |
| NOISE PERFORMANCE          |                                                  |       |        |       |            |
| Rate Noise Density         | T A ≤ 25°C                                       |       | 0.01   |       | °/sec/√Hz  |
| Rate Noise Density         | T A ≤ 105°C                                      |       | 0.015  |       | °/sec/√Hz  |
| Resolution Floor           | T A = 25°C, 1 minute to 1 hour in-run            |       | 12     |       | °/hr       |
| FREQUENCY RESPONSE         |                                                  |       |        |       |            |
| Bandwidth 4                | ±3 dB user adjustable up to specification        |       | 1000   |       | Hz         |
| Sensor Resonant Frequency  |                                                  | 15.5  | 17.5   |    20 | kHz        |
| SELF-TEST 1                |                                                  |       |        |       |            |
| ST1 RATEOUT Response       | ST1 pin from Logic 0 to Logic 1                  |       | -50    |       | °/sec      |
| ST2 RATEOUT Response       | ST2 pin from Logic 0 to Logic 1                  |       | 50     |       | °/sec      |
| ST1 to ST2 Mismatch 5      |                                                  | -5    | ±0.5   |    +5 | %          |
| Logic 1 Input Voltage      | ST1 pin or ST2 pin                               | 4     |        |       | V          |
| Logic 0 Input Voltage      |                                                  |       |        |     2 | V          |
| Input Impedance            | ST1 pin or ST2 pin to common                     | 40    | 50     |   100 | kΩ         |
| TEMPERATURE SENSOR 1       |                                                  |       |        |       |            |
| V OUT at 25°C              | Load = 10 MΩ                                     | 2.8   | 2.9    |   3.0 | V          |
| Scale Factor 6             | 25°C, V RATIO = 6 V                              |       | 10     |       | mV/°C      |
| Load to V S                |                                                  |       | 25     |       | kΩ         |
| Load to Common             |                                                  |       | 25     |       | kΩ         |
| TURN-ON TIME 6             | Power on to ±0.5°/sec of final with CP5 = 100 nF |       |        |    50 | ms         |
| OUTPUT DRIVE CAPABILITY    |                                                  |       |        |       |            |
| Current Drive              | For rated specifications                         |       |        |   200 | µA         |
| Capacitive Load Drive      |                                                  |       |        |  1000 | pF         |
| POWER SUPPLY               |                                                  |       |        |       |            |
| Operating Voltage (V S )   |                                                  | 5.75  | 6.00   |  6.25 | V          |
| Quiescent Supply Current   |                                                  |       | 4      |       | mA         |
| TEMPERATURE RANGE          |                                                  |       |        |       |            |
| Specified Performance      |                                                  | -55   |        |  +105 | °C         |

1 Parameter is linearly ratiometric with V RATIO .

2 Measurement range is the maximum range possible, including output swing range, initial offset, sensitivity, offset drift, and sensitivity drift at 5 V supplies.

3 From +25°C to -40°C or +25°C to +105°C.

4 Adjusted by external capacitor, C OUT . Reducing bandwidth below 0.01 Hz does not result in further noise improvement.

5 Self-test mismatch is described as (ST2 + ST1)/((ST2 - ST1)/2).

## SPECIFICATIONS

Table 1.

| Parameter   | Test Conditions/Comments   | Min   | Typ   | Max   | Unit   |
|-------------|----------------------------|-------|-------|-------|--------|

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                         | Rating                          |
|---------------------------------------------------|---------------------------------|
| Acceleration (Any Axis, 0.5 ms)                   | Acceleration (Any Axis, 0.5 ms) |
| Unpowered                                         | 10,000 g                        |
| Powered                                           | 10,000 g                        |
| V DD , AV CC                                      | -0.3 V to +6.6 V                |
| V RATIO                                           | AV CC                           |
| ST1, ST2                                          | AV CC                           |
| Output Short-Circuit Duration (Any Pin to Common) | Indefinite                      |
| Operating Temperature Range                       | -65°C to +125°C                 |
| Storage Temperature Range                         | -65°C to +150°C                 |

Stresses at or above those listed under the Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Drops onto hard surfaces can cause shocks of greater than 10,000 g and can exceed the absolute maximum rating of the device. Care should be exercised in handling to avoid damage.

## RATE SENSITIVE AXIS

This is a Z-axis rate-sensing device (also called a yaw rate-sensing device). It produces a positive going output voltage for clockwise rotation about the axis normal to the package top, that is, clockwise when looking down at the package lid.

Figure 2. RATEOUT Signal Increases with Clockwise Rotation

<!-- image -->

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 3. Pin Function Descriptions

| Pin No.   | Mnemonic   | Description                              |
|-----------|------------|------------------------------------------|
| 6D, 7D    | CP5        | HV Filter Capacitor, 100 nF (±5%).       |
| 6A, 7B    | CP4        | Charge Pump Capacitor, 22 nF (±5%).      |
| 6C, 7C    | CP3        | Charge Pump Capacitor, 22 nF (±5%).      |
| 5A, 5B    | CP1        | Charge Pump Capacitor, 22 nF (±5%).      |
| 4A, 4B    | CP2        | Charge Pump Capacitor, 22 nF (±5%).      |
| 3A, 3B    | AV CC      | Positive Analog Supply.                  |
| 1B, 2A    | RATEOUT    | Rate Signal Output.                      |
| 1C, 2C    | SUMJ       | Output Amp Summing Junction.             |
| 1D, 2D    | DNC        | Do Not Connect to this Pin.              |
| 1E, 2E    | V RATIO    | Reference Supply for Ratiometric Output. |
| 1F, 2G    | AGND       | Analog Supply Return.                    |
| 3F, 3G    | TEMP       | Temperature Voltage Output.              |
| 4F, 4G    | ST2        | Self-Test for Sensor 2.                  |
| 5F, 5G    | ST1        | Self-Test for Sensor 1.                  |
| 6G, 7F    | PGND       | Charge Pump Supply Return.               |
| 6E, 7E    | V DD       | Positive Charge Pump Supply.             |

## TYPICAL PERFORMANCE CHARACTERISTICS

N &gt; 1000 for all typical performance plots, unless otherwise noted.

NULL (V)

Figure 6. Null Output over Temperature, 16 Parts in Sockets (V RATIO = 6 V)

<!-- image -->

Figure 9. Typical Root Allan Deviation at 25°C vs. Averaging Time

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

900

Figure 10. ST1 Output Change at 25°C (V RATIO = 5 V)

<!-- image -->

104

Figure 11. ST1 Output Change vs. Temperature, 16 Parts in Sockets

Figure 12. Self-Test Mismatch at 25°C (V RATIO = 5 V)

<!-- image -->

PERCENT OF POPULATION (%)

25

20

15

10

5

0

350

30

30

410

40

50

4.0

4:0

5.0

5.0

50

5.0

5:0

6.0

60

ST2∆ (mV)

L07

Figure 13. ST2 Output Change at 25°C (V RATIO = 5 V)

<!-- image -->

180

Figure 14. ST2 Output Change vs. Temperature, 16 Parts in Sockets

101

Figure 15. ADXRS646-EP Frequency Response with a 2.2 kHz Output Filter

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

600

Figure 16. V TEMP Output at 25°C (V RATIO = 5 V)

<!-- image -->

102

Figure 17. V TEMP Output vs. Temperature

<!-- image -->

013

Figure 18. Current Consumption at 25°C (V RATIO = 5 V)

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                           | Packing Quantity   | Package Option   |
|--------------------|---------------------|-----------------------------------------------|--------------------|------------------|
| ADXRS646TBGZ-EP    | -55°C to +105°C     | 32-Ball Ceramic BGA (6.85mm x 6.85mm x 3.8mm) | Tray, 20           | BG-32-3          |
| ADXRS646TBGZ-EP-RL | -55°C to +105°C     | 32-Ball Ceramic BGA (6.85mm x 6.85mm x 3.8mm) | Reel, 500          | BG-32-3          |

<!-- image -->

<!-- image -->

07-11-2012-B

Figure 19. 32-Lead Ceramic Ball Grid Array [CBGA] (BG-32-3) Dimensions shown in millimeters

Updated: February 23, 2022