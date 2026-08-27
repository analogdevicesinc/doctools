<!-- lastmod 2020-06-03 -->
<!-- image -->

## Data Sheet

## FEATURES

High output accuracy: 5.0 V, ±0.1% maximum Excellent temperature stability: 3 ppm/°C typical Low noise: 10 µV p-p typical High supply voltage range: 7.0 V to 36.0 V maximum Low supply current: 1 mA maximum High load driving capability: 10 mA maximum Temperature output function Output trim functionality Meets typical A Grade SOIC ADR02 performance

## GENERAL DESCRIPTION

The ADR02 is a precision band gap voltage reference featuring high accuracy, high stability, and low power consumption. With an external buffer and a simple resistor network, the TEMP terminal can be used for temperature sensing and approximation. A TRIM terminal is provided on the device for fine adjustment of the output voltage.

The ADR02 die is specified for 25°C only; however, it is functional over the -40°C to +125°C temperature range. Performance meets the A Grade SOIC in operation and application. Additional application and technical information can be found in the ADR02 data sheet.

## 5.0 V Precision Voltage Reference

## [ADR02ACHIPS](http://www.analog.com/ADR02?doc=ADR02ACHIPS.pdf)

## ADR02 CHIP DIMENSIONS

<!-- image -->

Figure 1.

## Table 1. Die Physical Characteristics

| Parameter             | Value                 |
|-----------------------|-----------------------|
| Die Size Maximum      | 31.3 mils × 33.3 mils |
| Back Grind Thickness  | 19 mils               |
| Bond Pad Opening Size | 92µm×92µm             |
| Top Metal Composition | AlCu (0.5%)           |
| Passivation           | OxyNitride            |
| Polyimide             | None                  |
| Die Marker            | 1716Y                 |
| Substrate Bias        | GND                   |

## ADR02ACHIPS

## TABLE OF CONTENTS

| Features ..............................................................................................   |   1 |
|-----------------------------------------------------------------------------------------------------------|-----|
| General Description.........................................................................              |   1 |
| ADR02 Chip Dimensions................................................................                     |   1 |
| Revision History ...............................................................................          |   2 |
| Specifications.....................................................................................       |   3 |

## REVISION HISTORY

5/14-Revision 0: Initial Version Data Sheet

| Absolute Maximum Ratings ............................................................4          |
|-------------------------------------------------------------------------------------------------|
| ESD Caution...................................................................................4 |
| Outline Dimensions..........................................................................5   |
| Die Pad Descriptions ....................................................................5      |
| Ordering Guide .............................................................................5   |

## SPECIFICATIONS

VIN = 7.0 V to 36.0 V , ILOAD = 0 mA, and 25°C, unless otherwise noted.

Due to variations in assembly methods and normal yield loss, yield after packaging is not guaranteed for standard product dice.

## Table 2.

| Parameter                      | Symbol             | Test Conditions/Comments       | Min Typ     |   Max | Unit         |
|--------------------------------|--------------------|--------------------------------|-------------|-------|--------------|
| OUTPUTVOLTAGE                  | V O T CVO V OERR   |                                | 4.995 5.000 | 5.005 | V            |
| Temperature Coefficient        |                    | -40°C <T A < +125°C            | 3           |       | ppm/°C       |
| Initial Accuracy               |                    |                                |             |    +5 | mV           |
| REGULATION Line Regulation     | ∆V O /∆V IN        | V IN = 7V to 36V               | -5 7        |    30 | ppm/V ppm/mA |
| Load Regulation DROPOUTVOLTAGE | ∆V O /∆I LOAD V DO | V IN = 15 V, I LOAD =0mAto10mA | 40 2        |    70 | V            |
| VOLTAGE NOISE                  |                    |                                |             |       |              |
| 0.1 Hz to 10.0 Hz              | e N p-p            |                                | 10          |       | µV p-p       |
| 1 kHz                          | e N                |                                | 230         |       | nV/√Hz       |
| CURRENT                        |                    |                                |             |       |              |
| Short-Circuit Current          | I SC               |                                | 30          |       | mA           |
| Quiescent Current              | I IN               |                                | 0.65        |     1 | mA           |
| TURN-IN SETTLING TIME          | t R                |                                | 4           |       | µs           |
| LONG-TERM STABILITY            | ∆V O               | 1000 hours                     | 50          |       | ppm          |
| OUTPUTVOLTAGE HYSTERESIS       | ∆V O_HYS           |                                | 75          |       | ppm          |
| RIPPLE REJECTION RATIO         | RRR                | f IN = 10 kHz                  | -75         |       | dB           |
| TEMPERATURE SENSOR             |                    |                                |             |       |              |
| Voltage Output atTEMP Pin      | V TEMP             |                                | 550         |       | mV           |
| Temperature Sensitivity        | TCV TEMP           |                                | 1.96        |       | mV/°C        |

## ABSOLUTE MAXIMUM RATINGS

Table 3.

| Parameter                           | Rating     |
|-------------------------------------|------------|
| Supply Voltage                      | 36V        |
| Output Short-Circuit Duration toGND | Indefinite |
| Operating Temperature               | 25°C       |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## OUTLINE DIMENSIONS

## DIE PAD DESCRIPTIONS

Die center is the reference location at 0.0 µm × 0.0 µm. Pad coordinates are to the center of each pad. Die edges may contain cosmetic damage from the die separation process. This cosmetic damage is not considered a reliability issue.

Table 4. Pad Mnemonics, Function Descriptions, Coordinates

| Pad Number   | Mnemonic      | Description                 | Pad Coordinates (µm)   |
|--------------|---------------|-----------------------------|------------------------|
| 1            | NC            | No Connect                  | Not applicable         |
| 2            | V IN          | Input Supply Voltage        | -195 × +306            |
| 3            | TEMP          | Temperature Adjustment      | -180 × -306            |
| 4            | GND           | Ground                      | -40 × -306             |
| 5            | TRIM          | Trim                        | +281 × -272            |
| 6A           | V OUT (SENSE) | Connect Output to Both Pads | +281 × +166            |
| 6B           | V OUT (FORCE) | Connect Output to Both Pads | +217 × +306            |

## Table 5. Assembly Recommendations

| Assembly Component   | Recommendation              |
|----------------------|-----------------------------|
| Die Attach           | Expoxy adhesive             |
| Bonding Method       | Gold ball or Aluminum wedge |
| Bonding Sequence     | GNDfirst                    |

## ORDERING GUIDE

| Model       | FunctionalTemperature Range   | Package Description/Quantity   | Package Option   |
|-------------|-------------------------------|--------------------------------|------------------|
| ADR02ACHIPS | -40°C to +125°C               | Waffle Pack/400                | DIE              |

## ADR02ACHIPS

## NOTES

Data Sheet

## Data Sheet

## NOTES

## ADR02ACHIPS

NOTES

<!-- image -->

Data Sheet