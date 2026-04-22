<!-- lastmod 2024-10-07 -->
<!-- image -->

## FEATURES

- 6.0 V to 15 V supply range
- Supply current: 15 μA maximum
- Low noise: 15 μV p-p typical (0.1 Hz to 10 Hz)
- High output current: 5 mA
- Pin-compatible with the REF02/REF19x

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications (AQEC standard)
- Military temperature range (-55°C to +125°C)
- Controlled manufacturing baseline
- 1 assembly/test site
- 1 fabrication site
- Product change notification
- Qualification data available on request

## APPLICATIONS

- Portable instrumentation
- Precision reference for 5 V systems
- ADC and DAC reference
- Solar-powered applications

## GENERAL DESCRIPTION

The ADR293-EP is a low noise, micropower precision voltage reference that utilizes an XFET ®  (eXtra implanted junction FET) reference circuit. The XFET architecture offers significant performance improvements over traditional band gap and buried Zener-based references. Improvements include one quarter the voltage noise output of band gap references operating at the same current, very low and ultralinear temperature drift, low thermal hysteresis, and excellent long-term stability.

The ADR293-EP is a series voltage reference providing stable and accurate output voltage from a 6.0 V supply. Quiescent current is only 15 μA maximum, making this device ideal for battery pow-

## Low Noise, Micropower 5.0 V Precision Voltage Reference

## PIN CONFIGURATION

Figure 1. 8-Lead TSSOP (RU-8)

<!-- image -->

ered instrumentation. The temperature coefficient is 30 ppm/°C maximum over the military temperature range, and the initial error is only 0.2% at 25°C. Line regulation and load regulation are typically 70 ppm/V and 30 ppm/mA, respectively, maintaining the reference's overall high performance.

The ADR293-EP is specified over the military temperature range of -55°C to +125°C. This device is available in an 8-lead TSSOP package.

Additional applications information is available in the ADR293 data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1                                                                | Thermal Resistance........................................... 4                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| Enhanced Product Features..................................1                                                                              | ESD Caution.......................................................4                               |
| Applications........................................................... 1                                                                 | Typical Performance Characteristics.....................5                                         |
| Pin Configuration...................................................1                                                                     | Outline Dimensions............................................... 8                               |
| General Description...............................................1                                                                       | Ordering Guide...................................................8                                |
| Specifications........................................................ 3 Electrical Specifications......................................3 | Output Voltage, Initial Accuracy, and                                                             |
| Absolute Maximum Ratings...................................4                                                                              | Temperature Coefficient Options......................8                                            |
| REVISION HISTORY                                                                                                                          |                                                                                                   |
| 10/2024-Rev. A to Rev. B                                                                                                                  |                                                                                                   |
| Changes to T Grade, Line Regulation Parameter, Table                                                                                      | 1..............................................................................3                  |
| Changes to Supply Current Parameter, Table                                                                                                | 3.............................................................................................. 3 |

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

VS  = 6.0 V, T A = 25°C, unless otherwise noted.

Table 1.

| Parameter                | Symbol          | Conditions                           | Typ   | Max      | Unit   |
|--------------------------|-----------------|--------------------------------------|-------|----------|--------|
| OUTPUT VOLTAGE T Grade   | V OUT           | I OUT = 0 mA                         | 5.000 | 5.010    | V      |
| INITIAL ACCURACY T Grade |                 | I OUT = 0 mA                         |       | +10 0.20 | mV %   |
| LINE REGULATION T Grade  | ΔV OUT /ΔV IN   | 6.0 V to 15 V, I OUT = 0 mA          | 40    | 150      | ppm/V  |
| LOAD REGULATION T Grade  | ΔV OUT /ΔI LOAD | V S = 6.0 V, I OUT = 0 mA to 5 mA    | 40    | 150      | ppm/mA |
| LONG-TERM STABILITY      | ΔV OUT          | After 1000 hours of operation @125°C | 50    |          | ppm    |
| VOLTAGE NOISE            | e N p-p         | f = 0.1 Hz to 10 Hz                  | 15    |          | μV p-p |
| VOLTAGE NOISE DENSITY    | e N             | f = 1 kHz                            | 640   |          | nV/√Hz |

VS  = 6.0 V, T A = -25°C to +85°C, unless otherwise noted.

Table 2.

| Parameter               | Symbol          | Conditions                        | Min   | Typ   | Max   | Unit   |
|-------------------------|-----------------|-----------------------------------|-------|-------|-------|--------|
| TEMPERATURE COEFFICIENT | TCV OUT         | I OUT = 0 mA                      |       |       |       |        |
| T Grade                 |                 |                                   |       | 10    | 25    | ppm/°C |
| LINE REGULATION         | ΔV OUT /ΔV IN   | 6.0 V to 15 V, I OUT = 0 mA       |       |       |       |        |
| T Grade                 |                 |                                   |       | 50    | 200   | ppm/V  |
| LOAD REGULATION         | ΔV OUT /ΔI LOAD | V S = 6.0 V, I OUT = 0 mA to 5 mA |       |       |       |        |
| T Grade                 |                 |                                   |       | 30    | 200   | ppm/mA |

VS  = 6.0 V, T A = -55°C to +125°C, unless otherwise noted.

Table 3.

| Parameter               | Symbol          | Conditions                  | Min   | Typ   | Max   | Unit   |
|-------------------------|-----------------|-----------------------------|-------|-------|-------|--------|
| TEMPERATURE COEFFICIENT | TCV OUT         | I OUT = 0 mA                |       |       |       |        |
| T Grade                 |                 |                             |       | 10    | 30    | ppm/°C |
| LINE REGULATION         |                 |                             |       |       |       |        |
|                         | ΔV OUT /ΔV IN   | 6.0 V to 15 V, I OUT = 0 mA |       |       |       |        |
| T Grade                 |                 |                             |       | 70    | 250   | ppm/V  |
| LOAD REGULATION         | ΔV OUT /ΔI LOAD | V S = 6.0 V, 0 mA to 5 mA   |       |       |       |        |
| T Grade                 |                 |                             |       | 30    | 300   | ppm/mA |
| SUPPLY                  |                 |                             |       |       |       |        |
| CURRENT                 | I S             | @25°C                       |       | 11    | 15    | μA     |
|                         |                 | @125°C                      |       | 15    | 20    | μA     |
| THERMAL HYSTERESIS      | V OUT-HYS       |                             |       |       |       |        |
| T Grade                 |                 |                             |       | 157   |       | ppm    |

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                             | Rating          |
|--------------------------------------|-----------------|
| Supply Voltage                       | 18 V            |
| Output Short-Circuit Duration to GND | Indefinite      |
| Storage Temperature Range            | -65°C to +150°C |
| Operating Temperature Range          | -55°C to +125°C |
| Junction Temperature Range           | -65°C to +150°C |
| Lead Temperature (Soldering, 60 sec) | 300°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

θ JA is specified for worst-case conditions; that is, θ JA is specified for the device in socket testing. In practice, θ JA is specified for the device soldered in a circuit board.

## Table 5. Thermal Resistance

| Package Type        |   θ JA |   θ JC | Unit   |
|---------------------|--------|--------|--------|
| 8-Lead TSSOP (RU-8) |    240 |     43 | °C/W   |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## TYPICAL PERFORMANCE CHARACTERISTICS

TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 2. V OUT vs. Temperature

<!-- image -->

Figure 3. Supply Current vs. Temperature

<!-- image -->

Figure 4. Line Regulation vs. Temperature

<!-- image -->

Figure 5. Load Regulation vs. Temperature

Figure 6. ΔV OUT from Nominal vs. Load Current

<!-- image -->

Figure 7. Voltage Noise Density vs. Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. Ripple Rejection vs. Frequency

<!-- image -->

<!-- image -->

<!-- image -->

Figure 11. Turn-On Time

Figure 12. Turn-Off Time

<!-- image -->

Figure 13. Load Transient Response

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. Load Transient Response

Figure 15. Load Transient Response

<!-- image -->

Figure 16. Typical Hysteresis for the ADR29x Product

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                      |
|----------------------------|----------------|------------------------------------------|
| RU-8                       | TSSOP          | 8-Lead Thin Shrink Small Outline Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description   | Package Option   | Ordering Quantity   |
|------------------|---------------------|-----------------------|------------------|---------------------|
| ADR293TRU-EP     | -55°C to +125°C     | 8-Lead TSSOP          | RU-8             | 96                  |
| ADR293TRU-EP-R7  | -55°C to +125°C     | 8-Lead TSSOP          | RU-8             | 1,000               |
| ADR293TRUZ-EP    | -55°C to +125°C     | 8-Lead TSSOP          | RU-8             | 96                  |
| ADR293TRUZ-EP-R7 | -55°C to +125°C     | 8-Lead TSSOP          | RU-8             | 1,000               |

## OUTPUT VOLTAGE, INITIAL ACCURACY, AND TEMPERATURE COEFFICIENT OPTIONS

| Model 1          |   Output Voltage (V) |   Initial Accuracy (%) |   Temperature Coefficient (ppm/°C max) |
|------------------|----------------------|------------------------|----------------------------------------|
| ADR293TRU-EP     |                    5 |                    0.2 |                                     30 |
| ADR293TRU-EP-R7  |                    5 |                    0.2 |                                     30 |
| ADR293TRUZ-EP    |                    5 |                    0.2 |                                     30 |
| ADR293TRUZ-EP-R7 |                    5 |                    0.2 |                                     30 |

<!-- image -->