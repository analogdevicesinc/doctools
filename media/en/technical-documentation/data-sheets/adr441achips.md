<!-- lastmod 2020-10-13 -->
<!-- image -->

Data Sheet

## FEATURES

Ultralow voltage noise (0.1 Hz to 10 Hz): 1.2 µV p-p Low temperature drift: 10 ppm/°C maximum Supply voltage operating range: 3 V to 18 V Output sourcing and sinking current capacity: +10 mA typical

Low dropout operation (supply voltage headroom): 500 mV and -5 mA typical, respectively Wide temperature range: -40°C to +125°C

## APPLICATIONS

Precision data acquisition systems High resolution data converters Battery-powered instrumentation Portable medical instruments Industrial process control systems Precision instruments Optical control circuits

## GENERAL DESCRIPTION

The ADR441ACHIPS 1  is an extra implanted junction FET (XFET®) voltage reference that features ultralow noise, high accuracy, and low temperature drift performance. Using Analog Devices, Inc., temperature drift curvature correction and XFET technology, voltage change vs. temperature nonlinearity in the ADR441ACHIPS is greatly minimized.

This XFET reference offers better noise performance (ultralow voltage noise of 1.2 µV p-p and voltage noise density at 1 kHz of 48 nV/√Hz) than buried Zener references and operates off a low supply voltage headroom (500 mV). This combination of

1  Protected by U.S. Patent Number 5,838,192.

## Ultralow Noise, LDO, XFET, Voltage Reference with Current Sink and Source

[ADR441ACHIPS](https://www.analog.com/ADR411?doc=ADR411ACHIPS.pdf)

## METAL MASK DIE IMAGE

Figure 1.

<!-- image -->

features makes the ADR441ACHIPS ideally suited for precision signal conversion applications in high end data acquisition systems, optical networks, and medical applications.

The ADR441ACHIPS has the capability to source up to +10 mA of output current and sink up to -5 mA of output current. The device also comes with a TRIM terminal to adjust the output voltage over a 0.5% range without compromising performance.

Additional application and technical information can be found in the ADR441 data sheet.

## [ADR441ACHIPS](https://www.analog.com/ADR411?doc=ADR411ACHIPS.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| Metal Mask Die Image..................................................................... 1                |
| General Description......................................................................... 1             |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |

## REVISION HISTORY

10/2020-Revision 0: Initial Version

| Absolute Maximum Ratings............................................................4           |
|-------------------------------------------------------------------------------------------------|
| ESD Caution ..................................................................................4 |
| Pin Configuration and Function Descriptions .............................5                      |
| Outline Dimensions..........................................................................6   |
| Ordering Guide .............................................................................6   |

## SPECIFICATIONS

VIN = 3 V to 18 V, TA = 25°C, input capacitance (CIN) = 0.1 µF, and output capacitance (COUT) = 0.1 µF, unless otherwise noted.

Table 1.

| Parameter                 | Symbol          | Test Conditions/Comments                          |   Min |   Typ | Max     | Unit   |
|---------------------------|-----------------|---------------------------------------------------|-------|-------|---------|--------|
| OUTPUT VOLTAGE            | V OUT           |                                                   | 2.497 | 2.500 | 2.503   | V      |
| INITIAL ACCURACY          | V OERR          |                                                   |       |       | ±3 0.12 | mV %   |
| TEMPERATURE DRIFT         | TCV OUT         |                                                   |       |     2 | 10      | ppm/°C |
| LINE REGULATION           | ΔV OUT /ΔV IN   |                                                   |       |    10 | 20      | ppm/V  |
| LOAD REGULATION Sourcing  | ΔV OUT /ΔI LOAD |                                                   |       |       |         |        |
|                           |                 | Load current (I LOAD ) = 0 mAto 10 mA, V IN = 4 V |   -50 |       | +50     | ppm/mA |
| Sinking                   |                 | I LOAD = 0 mAto -5 mA, V IN = 4 V                 |   -50 |       | +50     | ppm/mA |
| OUTPUT CURRENT CAPACITY   | I LOAD          |                                                   |       |       |         |        |
| Sourcing                  |                 |                                                   |       |    10 |         | mA     |
| Sinking                   |                 |                                                   |       |    -5 |         | mA     |
| QUIESCENT CURRENT         | I IN            | No load                                           |       |     3 | 3.75    | mA     |
| VOLTAGE NOISE             |                 |                                                   |       |       |         |        |
| 0.1 Hz to 10 Hz           | e N p-p         |                                                   |       |   1.2 |         | µV p-p |
| Density                   | e N             | 1 kHz                                             |       |    48 |         | nV/√Hz |
| TURN-ON SETTLING TIME     | t R             |                                                   |       |    10 |         | µs     |
| LONG-TERM STABILITY 1     | ΔV OUT          | 1000 hours                                        |       |    50 |         | ppm    |
| OUTPUT VOLTAGE HYSTERESIS | V OUT_HYS       |                                                   |       |    70 |         | ppm    |
| RIPPLE REJECTION RATIO    |                 | Input frequency (f IN ) = 1 kHz                   |       |   -80 |         | dB     |
| SHORT CIRCUITTOGND        | I SC            |                                                   |       |    27 |         | mA     |
| SUPPLY VOLTAGE            |                 |                                                   |       |       |         |        |
| Operating Range           | V IN            |                                                   |     3 |       | 18      | V      |
| Headroom                  | V IN - V OUT    |                                                   |   500 |       |         | mV     |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                           | Rating          |
|-------------------------------------|-----------------|
| Supply Voltage                      | 20 V            |
| Output Short-Circuit Duration toGND | Indefinite      |
| Temperature Range                   | -40°C to +125°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pad Configuration

| Pad No.   |   X-Axis (µm) |   Y-Axis (µm) | Mnemonic   | Description                                                                |
|-----------|---------------|---------------|------------|----------------------------------------------------------------------------|
| 1         |          -731 |          +905 | DNC        | Do Not Connect. Do not connect anything to the DNC pads.                   |
| 2         |          -731 |          +489 | V IN       | Input Voltage Connection.                                                  |
| 4A        |          -731 |          -798 | GND        | Ground. Connect to other GNDpad.                                           |
| 4B        |          -396 |          -926 | GND        | Ground. Connect to other GNDpad.                                           |
| 5         |          +491 |          -926 | TRIM       | Output Voltage Trim. Use the TRIM pad to finely adjust the output voltage. |
| 6A        |          +731 |          -825 | V OUT      | Output Voltage. Connect to other V OUT pads.                               |
| 6B        |          +731 |          -657 | V OUT      | Output Voltage. Connect to other V OUT pads.                               |
| 6C        |          +731 |          -489 | V OUT      | Output Voltage. Connect to other V OUT pads.                               |
| 8         |          +731 |          +905 | DNC        | Do Not Connect. Do not connect anything to the DNC pads.                   |

Table 3. Pad Function Descriptions

<!-- image -->

## OUTLINE DIMENSIONS

Figure 3. 9-Pad Bare Die [CHIP] (C-9-3) Dimensions shown in millimeters

<!-- image -->

## Table 4. Die Specifications

| Parameter            | Value                             | Unit           |
|----------------------|-----------------------------------|----------------|
| Chip Size            | 1620 × 2010                       | µm             |
| Scribe Line Width    | 75                                | µm             |
| Die Size             | 1695 × 2085                       | µm             |
| Thickness            | 12 ± 1                            | mils           |
| Bond Pads (Minimum)  | 92 × 92                           | µm             |
| Bond Pad Composition | Aluminum copper (AlCu), 0.5       | %              |
| Passivation          | Doped-oxide/silicon nitride (SiN) | Not applicable |
| Polyimide            | 5                                 | µm             |
| Die Marker           | 1713                              | Not applicable |
| Backside             | Not applicable (left floating)    | Not applicable |

## Table 5. Assembly Recommendations

| Assembly Component   | Recommendation                          |
|----------------------|-----------------------------------------|
| Die Attach           | LOCTITE® ABLESTIK 84-1LMISR4 conductive |
| Bonding Method       | Forward bond                            |
| Bonding Sequence     | Lead to bond first = 1                  |

## ORDERING GUIDE

| Model 1      | Temperature Range   | Package Description   | Package Option   |
|--------------|---------------------|-----------------------|------------------|
| ADR441ACHIPS | -40°C to +125°C     | 9-Pad Bare Die [CHIP] | C-9-3            |

<!-- image -->

09-21-2020-A