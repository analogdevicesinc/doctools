<!-- lastmod 2020-12-23 -->
<!-- image -->

## FEATURES

Qualified for automotive applications

Supply range

2.8 V to 15 V

Supply current: 15 µA maximum

Low noise: 8 µV (0.1 Hz to 10 Hz)

High output current: 5 mA

Temperature range: -40°C to +125°C

Pin compatible with REF02/REF19x

## APPLICATIONS

Automotive Li-Ion Battery Measurement Analog-to-digital and digital-to-analog converter reference

## GENERAL DESCRIPTION

The ADR291 is a low noise, micropower precision voltage reference that uses an XFET® reference circuit. The XFET architecture offers significant performance improvements over traditional band gap and buried Zener-based references. Improvements include one quarter of the voltage noise output of band gap references operating at the same current, very low and ultralinear temperature drift, low thermal hysteresis, and excellent longterm stability.

The ADR291 is a series voltage reference providing a stable and accurate output voltage from supplies as low as 2.8 V . The output voltage is 2.5 V .

Quiescent current is only 12 µA, making these devices ideal for battery-powered instrumentation. Output accuracy is ±8.3 mV maximum. Temperature coefficient is 15 ppm/°C maximum.

## Low Noise Micropower 2.5 V Precision Voltage Reference

## ADR291W

Figure 1. 8-Lead SOIC\_N (R-8)

<!-- image -->

Line regulation and load regulation are typically 30 ppm/V and 30 ppm/mA, maintaining the overall high performance of the reference. For a device with 5.0 V output, refer to the ADR293 data sheet.

The ADR291 is specified over the automotive temperature range of -40°C to +125°C. The device is available in the 8-lead SOIC package.

## Table 1. ADR291 Product Details

| Part No.   |   Output Voltage (V) |   Accuracy (±%) |   Temperature Coefficient (ppm/°C)Max |
|------------|----------------------|-----------------|---------------------------------------|
| ADR291     |                2.500 |           0.332 |                                    15 |

## ADR291W

## TABLE OF CONTENTS

| Features ..............................................................................................   |   1 |
|-----------------------------------------------------------------------------------------------------------|-----|
| Applications.......................................................................................       |   1 |
| Connection Diagram .......................................................................                |   1 |
| General Description.........................................................................              |   1 |
| Specifications.....................................................................................       |   3 |
| Electrical Specifications...............................................................                  |   3 |
| Absolute Maximum Ratings............................................................                      |   4 |

## REVISION HISTORY

3/10-Revision 0: Initial Version

| ESD Caution...................................................................................4     |
|-----------------------------------------------------------------------------------------------------|
| Pin Configuration and Function Descriptions..............................5                          |
| Terminology.......................................................................................6 |
| Outline Dimensions..........................................................................7       |
| Ordering Guide .............................................................................7       |

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

VS = 3.0 V to 15 V , TA = 25°C, unless otherwise noted.

## Table 2.

| Parameter                  | Symbol          | Conditions                           |    Min |   Typ |    Max | Unit   |
|----------------------------|-----------------|--------------------------------------|--------|-------|--------|--------|
| F GRADE                    |                 |                                      |        |       |        |        |
| Output Voltage             | V OUT           | I OUT = 0 mA, -40°C ≤T A ≤ +125°C    | 2.4917 | 2.500 | 2.5083 | V      |
| Output Voltage Variation 1 |                 |                                      | -0.332 |       | +0.332 | %      |
| LINE REGULATION            |                 |                                      |        |       |        |        |
| F Grade                    | ∆V OUT /∆V IN   | I OUT =0mA                           |        |    30 |    100 | ppm/V  |
| LOAD REGULATION            |                 |                                      |        |       |        |        |
| F Grade                    | ∆V OUT /∆I LOAD | V S = 5.0 V, I OUT =0mAto5mA         |        |    30 |    100 | ppm/mA |
| LONG-TERM STABILITY        | ∆V OUT          | After 1000 hours of operation @125°C |        |    50 |        | ppm    |
| NOISE VOLTAGE              | e N             | 0.1 Hz to 10 Hz                      |        |     8 |        | µV p-p |
| WIDEBAND NOISE DENSITY     | e N             | At 1 kHz                             |        |   480 |        | nV/√Hz |

VS = 3.0 V to 15 V , TA = -25°C to +85°C, unless otherwise noted.

## Table 3.

| Parameter                       | Symbol          | Conditions                   | Min   |   Typ |   Max | Unit   |
|---------------------------------|-----------------|------------------------------|-------|-------|-------|--------|
| TEMPERATURE COEFFICIENT F Grade |                 |                              |       |     5 |    15 | ppm/°C |
| LINE REGULATION F Grade         | ∆V OUT /∆V IN   | I OUT =0mA                   |       |    35 |   125 | ppm/V  |
| LOAD REGULATION F Grade         | ∆V OUT /∆I LOAD | V S = 5.0 V, I OUT =0mAto5mA |       |    20 |   125 | ppm/mA |

VS = 3.0 V to 15 V , TA = -40°C to +125°C, unless otherwise noted.

## Table 4.

| Parameter                       | Symbol          | Conditions                     | Min   | Typ   | Max   | Unit   |
|---------------------------------|-----------------|--------------------------------|-------|-------|-------|--------|
| TEMPERATURE COEFFICIENT F Grade |                 |                                |       | 5     | 20    | ppm/°C |
| LINE REGULATION F Grade         | ∆V OUT /∆V IN   | I OUT =0mA                     |       | 40    | 200   | ppm/V  |
| LOAD REGULATION F Grade         | ∆V OUT /∆I LOAD | V S = 5.0 V, I OUT =0mAto5mA   |       | 20    | 200   | ppm/mA |
| SUPPLY CURRENT                  | I S             | T A = 25°C -40°C ≤T A ≤ +125°C |       | 9 12  | 12 15 | µA µA  |
| OUTPUTVOLTAGE HYSTERESIS        | V OUT-HYS       | 8-lead SOIC                    |       | 50    |       | ppm    |

## ABSOLUTE MAXIMUM RATINGS

Remove power before inserting or removing units from their sockets.

## Table 5.

| Parameter                              | Rating          |
|----------------------------------------|-----------------|
| Supply Voltage                         | 18V             |
| Output Short-Circuit Duration toGND    | Indefinite      |
| Storage Temperature Range R Package    | -65°C to +150°C |
| Operating Temperature Range ADR291WFRZ | -40°C to +125°C |
| Junction Temperature Range R Package   | -65°C to +125°C |
| Lead Temperature (Soldering, 60 sec)   | 300°C           |

Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device. This is a stress rating only; functional operation of the device at these or any other conditions above those indicated in the operational section of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Table 6. Package Type

| PackageType       |   θ JA 1 |   θ JC | Unit   |
|-------------------|----------|--------|--------|
| 8-Lead SOIC_N (R) |      158 |     43 | °C/W   |

1 θJA is specified for worst-case conditions. For example, θJA is specified for a device in socket testing. In practice, θJA is specified for a device soldered in the circuit board.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

## Table 7. Pin Function Descriptions

| Pin No.       | Mnemonic   | Description    |
|---------------|------------|----------------|
| 1, 3, 5, 7, 8 | NC         | No Connect     |
| 2             | V IN       | Input Voltage  |
| 4             | GND        | Ground         |
| 6             | V OUT      | Output Voltage |

## TERMINOLOGY

## Line Regulation

Line regulation refers to the change in output voltage due to a specified change in input voltage. It includes the effects of selfheating. Line regulation is expressed as percent per volt, parts per million per volt, or microvolts per volt change in input voltage.

## Load Regulation

The change in output voltage is due to a specified change in load current and includes the effects of self-heating. Load regulation is expressed in microvolts per milliampere, parts per million per milliampere, or ohms of dc output resistance.

## Long-Term Stability

Long-term stability refers to the typical shift of output voltage at 25°C on a sample of parts subjected to a test of 1000 hours at 125°C.

<!-- formula-not-decoded -->

## where:

VOUT ( t 0 ) = VOUT at 25°C at Time 0.

VOUT ( t 1 ) = VOUT at 25°C after 1000 hours of operation at 125°C.

## Temperature Coefficient

Temperature coefficient is the change of output voltage over the operating temperature change, normalized by the output voltage at 25°C, expressed in ppm/°C. The equation follows:

<!-- formula-not-decoded -->

## where:

VOUT (25°C) = VOUT at 25°C.

VOUT ( T1 ) = VOUT at Temperature 1.

VOUT ( T2 ) = VOUT at Temperature 2.

## NC = No Connect

There are internal connections at NC pins that are reserved for manufacturing purposes. Users should not connect anything at the NC pins.

## Thermally Induced Output Voltage Hysteresis

Thermally induced output voltage hysteresis is defined as the change of output voltage after the device is cycled through temperatures from +25°C to -40°C, then to +85°C, and back to +25°C. This is a typical value from a sample of parts put through such a cycle.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## where:

VOUT (25°C) = VOUT at 25°C. = VOUT at 25°C after temperature cycle from +25°C to

VOUT-TC -40°C, then to +85°C, and back to +25°C.

## OUTLINE DIMENSIONS

<!-- image -->

Dimensions shown in millimeters and (inches)

| Model 1       |   Output Voltage |   Initial Accuracy (±%) |   Temperature CoefficientMax (ppm/°C) | Temperature Range   | Package Description   | Package Option   |   Ordering Quantity |
|---------------|------------------|-------------------------|---------------------------------------|---------------------|-----------------------|------------------|---------------------|
| ADR291WFRZ-RL |             2.50 |                    0.12 |                                    15 | -40°C to +125°C     | 8-Lead SOIC_N         | R-8              |               2,500 |
| ADR291WFRZ-R7 |             2.50 |                    0.12 |                                    15 | -40°C to +125°C     | 8-Lead SOIC_N         | R-8              |               1,000 |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

ADR291W

NOTES

<!-- image -->