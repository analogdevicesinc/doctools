<!-- lastmod 2022-08-05 -->
## General Description

The REF01/REF02 are industry-standard precision voltage references. The stable 10V output of the REF01 can be adjusted over a ±6% range with minimal effect on temperature stability. The 5V output REF02 can also be adjusted over a ±6% range. The 10V REF01 has a single-supply operation over an input voltage range of 13V to 33V, while the 5V REF02 has a single-supply operation over an input voltage range of 7V to 33V. Both devices offer a low-current drain of 1mA. The REF02 also provides a TEMP pin whose output voltage varies linearly with temperature, making this device suitable for a wide variety of temperature-sensing and control applications. For new designs, refer to the MAX6035 or MAX6143 data sheets.

<!-- image -->

## Features

- ♦ Pretrimmed to +5V, +10V

- ♦ Excellent Temperature Stability: 3ppm/°C (typ)

- ♦ Low Noise: 10µVP-P (REF02)

- ♦ Short-Circuit Protected

- ♦ Linear Temperature Transducer Output (REF02)

## Ordering Information

| PART       | TEMP RANGE     |   MAX TEMPCO (ppm/°C) | INITIAL ERROR (mV)   | PIN-PACKAGE   | PKG CODE   |
|------------|----------------|-----------------------|----------------------|---------------|------------|
| REF01 EP   | 0°C to +70°C   |                   8.5 | ±30                  | 8 Plastic DIP | P8-2       |
| REF01EP+   | 0°C to +70°C   |                   8.5 | ±30                  | 8 Plastic DIP | P8-2       |
| REF01HP    | 0°C to +70°C   |                    25 | ±50                  | 8 Plastic DIP | P8-2       |
| REF01HP+   | 0°C to +70°C   |                    25 | ±50                  | 8 Plastic DIP | P8-2       |
| REF01HSA   | 0°C to +70°C   |                    25 | ±50                  | 8 SO          | S8-2       |
| REF01HSA+  | 0°C to +70°C   |                    25 | ±50                  | 8 SO          | S8-2       |
| REF01CP    | 0°C to +70°C   |                    65 | ±100                 | 8 Plastic DIP | P8-2       |
| REF01CP+   | 0°C to +70°C   |                    65 | ±100                 | 8 Plastic DIP | P8-2       |
| REF01CSA   | 0°C to +70°C   |                    65 | ±100                 | 8 SO          | S8-2       |
| REF01CSA+  | 0°C to +70°C   |                    65 | ±100                 | 8 SO          | S8-2       |
| REF01CESA  | -40°C to +85°C |                    65 | ±100                 | 8 SO          | S8-2       |
| REF01CESA+ | -40°C to +85°C |                    65 | ±100                 | 8 SO          | S8-2       |

Ordering Information continued at end of data sheet.

## Applications

Analog-to-Digitial Converters

Digitial-to-Analog Converters

Digital Voltmeters

Voltage Regulators

Threshold Detectors

## Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## REF01/REF02

## ABSOLUTE MAXIMUM RATINGS-REF01

| Input Voltage                                                                            |
|------------------------------------------------------------------------------------------|
| REF01, E, H.........................................................................40V  |
| REF01C...............................................................................30V |
| Continuous Power Dissipation                                                             |
| Plastic Dip (P) (derate at 5.6mW/°C above +36°C) .....500mW                              |
| Small Outline (S) (derate at 5.0mW/°C above +55°C)..300mW                                |

## +5V, +10V Precision Voltage References

| Output Short-Circuit Duration (to ground or V IN )                                                                  | .......................................................Indefinite   |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| Storage Temperature                                                                                                 | Range.............................-65°C to +150°C                   |
| Operating Temperature Range REF01E, REF01H, REF01C (except REF01CESA)...........................................0°C | to +70°C                                                            |
| REF01CESA......................................................-40°C                                                | to +85°C                                                            |
| Lead Temperature (soldering, 60s)                                                                                   | .................................+300°C                             |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS-REF01E/REF01H

(VIN = +15V, TA = +25°C , unless otherwise noted.)

| PARAMETER                | SYMBOL   | CONDITIONS                            | REF01E   | REF01E   | REF01E   | REF01H   | REF01H   | REF01H   | UNITS   |
|--------------------------|----------|---------------------------------------|----------|----------|----------|----------|----------|----------|---------|
| PARAMETER                | SYMBOL   | CONDITIONS                            | MIN      | TYP      | MAX      | MIN      | TYP      | MAX      | UNITS   |
| Output Voltage           | V O      | I L = 0                               | 9.97     | 10.00    | 10.03    | 9.95     | 10.00    | 10.05    | V       |
| Output Adjustment Range  | ∆ Vtrim  | R P = 10k Ω                           | ±3.0     | ±6.0     |          | ±3.0     | ±6.0     |          | %       |
| Output Voltage Noise     | enP-P    | 0.1Hz to 10Hz (Note 1)                |          | 20       | 30       |          | 20       | 30       | µV P-P  |
| Line Regulation          |          | V IN = 13V to 33V (Note 2)            |          | 0.006    | 0.010    |          | 0.006    | 0.010    | %/V     |
| Load Regulation          |          | I L = 0 to 10mA (Note 2)              |          | 0.005    | 0.008    |          | 0.006    | 0.010    | %/mA    |
| Turn-On Settling Time    | t ON     | To ±0.1% of final value               |          | 400      |          |          | 400      |          | µs      |
| Quiescent Supply Current | I SY     | No load                               |          | 1.0      | 1.4      |          | 1.0      | 1.4      | mA      |
| Load Current             | I L      | To specified output voltage tolerance | 10       | 21       |          | 10       | 21       |          | mA      |
| Sink Current             | I S      | To specified output voltage tolerance | 0.3      | 0.5      |          | 0.3      | 0.5      |          | mA      |
| Short-Circuit Current    | I SC     | V O = 0V                              |          | 30       |          |          | 30       |          | mA      |

## ELECTRICAL CHARACTERISTICS-REF01E/REF01H

(VIN = +15V, 0°C ≤ TA ≤ +70°C for REF01E and REF01H , I L = 0mA, unless otherwise noted.)

| PARAMETER                                                   | SYMBOL   | CONDITIONS                 | REF01E   | REF01E   | REF01E   | REF01H   | REF01H   | REF01H   | UNITS   |
|-------------------------------------------------------------|----------|----------------------------|----------|----------|----------|----------|----------|----------|---------|
|                                                             |          |                            | MIN      | TYP      | MAX      | MIN      | TYP      | MAX      |         |
| Output Voltage Change with Temperature                      | ∆ V OT   | 0°C ≤ T A ≤ +70°C (Note 3) |          | 0.02     | 0.06     |          | 0.07     | 0.17     | %       |
| Output Voltage Temperature Coefficient                      | TCV O    | (Note 4)                   |          | 3        | 8.5      |          | 10.0     | 25.0     | ppm/°C  |
| Change in VO Temperature Coefficient with Output Adjustment |          | RP = 10k Ω                 |          | 0.7      |          |          | 0.7      |          | ppm/%   |
| Line Regulation (VIN = 13V to 33V)                          |          | 0°C ≤ T A ≤ +70°C (Note 2) |          | 0.007    | 0.012    |          | 0.007    | 0.012    | %/V     |
| Load Regulation (IL = 0 to 8mA)                             |          | 0°C ≤ T A ≤ +70°C (Note 2) |          | 0.006    | 0.010    |          | 0.007    | 0.012    | %/mA    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ELECTRICAL CHARACTERISTICS-REF01C

(VIN = +15V, TA = +25°C , I L = 0mA, unless otherwise noted.)

| PARAMETER                | SYMBOL   | CONDITIONS                            | REF01C   | REF01C   | REF01C   | UNITS   |
|--------------------------|----------|---------------------------------------|----------|----------|----------|---------|
|                          |          |                                       | MIN      | TYP      | MAX      |         |
| Output Voltage           | V O      | I L = 0mA                             | 9.90     | 10.00    | 10.10    | V       |
| Output Adjustment Range  | ∆ V trim | R P = 10k Ω                           | ±2.7     | ±6.0     |          | %       |
| Output Voltage Noise     | e nP-P   | 0.1Hz to 10Hz (Note 1)                |          | 25       | 35       | µVP-P   |
| Line Regulation          |          | V IN = 13V to 30V (Note 2)            |          | 0.009    | 0.015    | %/V     |
| Load Regulation (Note 2) |          | IL = 0 to 8mA                         |          | 0.006    | 0.015    | %/mA    |
|                          |          | IL = 0 to 4mA                         |          | 0.006    | 0.015    | %/mA    |
| Turn-On Settling Time    | tON      | To ±0.1% of final value               |          | 400      |          | µs      |
| Quiescent Supply Current | ISY      | No load                               |          | 1.0      | 1.6      | mA      |
| Load Current             | IL       | To specified output voltage tolerance | 8        | 21       |          | mA      |
| Sink Current             | IS       | To specified output voltage tolerance | 0.2      | 0.5      |          | mA      |
| Short-Circuit Current    | ISC      | VO = 0V                               |          | 30       |          | mA      |

## ELECTRICAL CHARACTERISTICS-REF01C

(VIN = +15V, TA = TMIN to TMAX , unless otherwise noted.)

| PARAMETER                                                   | SYMBOL   | CONDITIONS                | REF01C   | REF01C   | REF01C   | UNITS   |
|-------------------------------------------------------------|----------|---------------------------|----------|----------|----------|---------|
|                                                             |          |                           | MIN      | TYP      | MAX      |         |
| Output Voltage Change with Temperature                      | ∆ VOT    | (Note 3)                  |          | 0.14     | 0.45     | %       |
| Output Voltage Temperature Coefficient                      | TCVO     | (Note 4)                  |          | 20       | 65       | ppm/°C  |
| Change in VO Temperature Coefficient with Output Adjustment |          | RP = 10k Ω                |          | 0.7      |          | ppm/%   |
| Line Regulation                                             |          | VIN = 13V to 30V (Note 2) |          | 0.011    | 0.018    | %/V     |
| Load Regulation                                             |          | IL = 0 to 5mA (Note 2)    |          | 0.008    | 0.018    | %/mA    |

Note 1: Guaranteed by design.

Note 2: Line and load regulation specifications include the effect of self heating. 100% production tested at TA = +25°C and guaranteed by design for TA = TMIN to TMAX, as specified.

Note 3: ∆ VOT is defined as the absolute difference between the maximum output voltage and the minimum output voltage over the specified temperature range expressed as a percentage of 10V. Guaranteed by design.

<!-- formula-not-decoded -->

Note 4: TCVO is defined as ∆ VOT divided by the temperature range. Guaranteed by design.

## Output Adjustment

The REF01 trim terminal can be used to adjust the voltage over a 10V ±600mV range. This feature allows the system designer to trim system errors by setting the reference to a voltage other than 10V, including 10.240V for binary applications (see the Typical Operating Circuit ).

<!-- image -->

Adjustment of the output does not significantly affect the temperature performance of the device. The temperature coefficient change is approximately 0.7ppm/°C for 100mV of output adjustment.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V, +10V Precision Voltage References

## REF01/REF02

## +5V, +10V Precision Voltage References

## ABSOLUTE MAXIMUM RATINGS-REF02

| Input Voltage                                                                            |
|------------------------------------------------------------------------------------------|
| REF02, E, H.........................................................................40V  |
| REF02C...............................................................................30V |
| Continuous Power Dissipation                                                             |
| Plastic Dip (P) (derate at 5.6mW/°C above +36°C) .....500mW                              |
| Small Outline (S) (derate at 5.0mW/°C above +55°C)..300mW                                |
| Storage Temperature Range.............................-65°C to +150°C                    |

| Operating Temperature Range REF02E, REF02H.................................................0°C to +70°C   |
|-----------------------------------------------------------------------------------------------------------|
| REF02C (except REF02CESA) ............................0°C to +70°C                                        |
| REF02CESA......................................................-40°C to +85°C                             |
| Output Short-Circuit Duration                                                                             |
| (to ground or V IN ) .......................................................Indefinite                    |
| Lead Temperature (soldering, 60s) .................................+300°C                                 |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS-REF02E/REF02H

(VIN = +15V, TA = +25°C , unless otherwise noted.)

| PARAMETER                  | SYMBOL   | CONDITIONS                            | REF02E   | REF02E   | REF02E   | REF02H   | REF02H   | REF02H   | UNITS   |
|----------------------------|----------|---------------------------------------|----------|----------|----------|----------|----------|----------|---------|
| PARAMETER                  | SYMBOL   | CONDITIONS                            | MIN      | TYP      | MAX      | MIN      | TYP      | MAX      | UNITS   |
| Output Voltage             | VO       | IL = 0                                | 4.985    | 5.000    | 5.015    | 4.975    | 5.000    | 5.025    | V       |
| Output Adjustment Range    | ∆ Vtrim  | RP = 10k Ω                            | ±3       | ±6       |          | ±3       | ±6       |          | %       |
| Output Voltage Noise       | enP-P    | 0.1Hz to 10Hz (Note 5)                |          | 10       | 15       |          | 10       | 15       | µVP-P   |
| Line Regulation            |          | VIN = 8V to 33V (Note 6)              |          | 0.006    | 0.010    |          | 0.006    | 0.010    | %/V     |
| Load Regulation            |          | IL = 0 to 10mA (Note 6)               |          | 0.005    | 0.010    |          | 0.006    | 0.010    | %/mA    |
| Turn-On Settling Time      | tON      | To ±0.1% of final value               |          | 230      |          |          | 230      |          | µs      |
| Quiescent Supply Current   | ISY      | No load                               |          | 1.0      | 1.4      |          | 1.0      | 1.4      | mA      |
| Load Current               | IL       | To specified output voltage tolerance | 10       | 21       |          | 10       | 21       |          | mA      |
| Sink Current               | IS       | To specified output voltage tolerance | 0.3      | 0.5      |          | 0.3      | 0.5      |          | mA      |
| Short-Circuit Current      | ISC      | VO = 0V                               |          | 30       |          |          | 30       |          | mA      |
| Temperature Voltage Output | VT       | (Note 7)                              |          | 630      |          |          | 630      |          | mV      |

## ELECTRICAL CHARACTERISTICS-REF02E/REF02H

(VIN = +15V, 0°C ≤ TA ≤ +70°C for REF02E and REF02H , I L = 0mA, unless otherwise noted.)

| PARAMETER                                                   | SYMBOL   | CONDITIONS                | REF02E   | REF02E   | REF02E   | REF02H   | REF02H   | REF02H   | UNITS   |
|-------------------------------------------------------------|----------|---------------------------|----------|----------|----------|----------|----------|----------|---------|
|                                                             |          |                           | MIN      | TYP      | MAX      | MIN      | TYP      | MAX      |         |
| Output Voltage Change with Temperature                      | ∆ VOT    | 0°C ≤ TA ≤ +70°C (Note 8) |          | 0.02     | 0.06     |          | 0.07     | 0.17     | %       |
| Output Voltage Temperature Coefficient                      | TCVO     | (Note 9)                  |          | 3        | 8.5      |          | 10       | 25       | ppm/°C  |
| Change in VO Temperature Coefficient with Output Adjustment |          | RP = 10k Ω                |          | 0.7      |          |          | 0.7      |          | ppm/%   |
| Line Regulation (VIN = 8V to 33V)                           |          | 0°C ≤ TA ≤ +70°C (Note 6) |          | 0.007    | 0.012    |          | 0.007    | 0.012    | %/V     |
| Load Regulation (IL = 0 to 8mA)                             |          | 0°C ≤ TA ≤ +70°C (Note 6) |          | 0.006    | 0.010    |          | 0.007    | 0.012    | %/mA    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## +5V, +10V Precision Voltage References

## ELECTRICAL CHARACTERISTICS-REF02E/REF02H (continued)

(VIN = +15V, 0°C ≤ TA ≤ +70°C for REF02E and REF02H , I L = 0mA, unless otherwise noted.)

| PARAMETER                                          |        |            | REF02E   | REF02E   | REF02E   | REF02H   | REF02H   | REF02H   | UNITS   |
|----------------------------------------------------|--------|------------|----------|----------|----------|----------|----------|----------|---------|
|                                                    | SYMBOL | CONDITIONS | MIN      | TYP      | MAX      | MIN      | TYP      | MAX      | UNITS   |
| Temperature Voltage Output Temperature Coefficient | TCVT   | (Note 7)   |          | 2.1      |          | 2.1      |          |          | mV/°C   |

## ELECTRICAL CHARACTERISTICS-REF02C

(VIN = +15V, TA = +25°C , unless otherwise noted.)

| PARAMETER                  | SYMBOL   | CONDITIONS                            | REF02C   | REF02C   | REF02C   | UNITS   |
|----------------------------|----------|---------------------------------------|----------|----------|----------|---------|
|                            |          |                                       | MIN      | TYP      | MAX      | UNITS   |
| Output Voltage             | VO       | IL = 0mA                              | 4.950    | 5.000    | 5.050    | V       |
| Output Adjustment Range    | ∆ Vtrim  | RP = 10k Ω                            | ±2.7     | ±6.0     |          | %       |
| Output Voltage Noise       | enP-P    | 0.1Hz to 10Hz (Note 5)                |          | 12       | 18       | µVP-P   |
| Line Regulation            |          | VIN = 8V to 30V (Note 6)              |          | 0.009    | 0.015    | %/V     |
| Load Regulation (Note 6)   |          | IL = 0 to 8mA                         |          | 0.006    | 0.015    | %/mA    |
|                            |          | IL = 0 to 4mA                         |          |          |          | %/mA    |
| Turn-On Settling Time      | tON      | To ±0.1% of final value               |          | 230      |          | µs      |
| Quiescent Supply Current   | ISY      | No load                               |          | 1.0      | 1.6      | mA      |
| Load Current               | IL       | To specified output voltage tolerance | 8        | 21       |          | mA      |
| Sink Current               | IS       | To specified output voltage tolerance | 0.2      | 0.5      |          | mA      |
| Short-Circuit Current      | ISC      | VO = 0V                               |          | 30       |          | mA      |
| Temperature Voltage Output | VT       | (Note 7)                              |          | 630      |          | mV      |

## ELECTRICAL CHARACTERISTICS-REF02C

(VIN = +15V, TA = TMIN to TMAX , I L = 0mA, unless otherwise noted.)

| PARAMETER                                                   | SYMBOL   | CONDITIONS               | REF02C   | REF02C   | REF02C   | UNITS   |
|-------------------------------------------------------------|----------|--------------------------|----------|----------|----------|---------|
|                                                             |          |                          | MIN      | TYP      | MAX      | UNITS   |
| Output Voltage Change with Temperature                      | ∆ VOT    | (Note 8)                 |          | 0.14     | 0.45     | %       |
| Output Voltage Temperature Coefficient                      | TCVO     | (Note 9)                 |          | 20       | 65       | ppm/°C  |
| Change in VO Temperature Coefficient with Output Adjustment |          | RP = 10k Ω               |          | 0.7      |          | ppm/%   |
| Line Regulation                                             |          | VIN = 8V to 30V (Note 6) |          | 0.011    | 0.018    | %/V     |
| Load Regulation                                             |          | IL = 0 to 5mA (Note 6)   |          | 0.008    | 0.018    | %/mA    |
| Temperature Voltage Output Temperature Coefficient          | TCVT     | (Note 7)                 |          | 2.1      |          | mV/°C   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## +5V, +10V Precision Voltage References

## ELECTRICAL CHARACTERISTICS-REF02 (continued)

(VIN = +15V, TA = TMIN to TMAX , I L = 0mA, unless otherwise noted.)

- Note 5: Guaranteed by design.
- Note 6: Line and load regulation specifications include the effect of self heating. 100% production tested at TA = +25°C and guaranteed by design for TA = TMIN to TMAX, as specified.
- Note 7: Limit current in or out of pin 3 to 50nA and capacitance on pin 3 to 30pF.
- Note 8: ∆ VOT is defined as the absolute difference between the maximum output voltage and the minimum output voltage over the specified temperature range expressed as a percentage of 5V. Guaranteed by design.

<!-- formula-not-decoded -->

Note 9: TCVO is defined as ∆ VOT divided by the temperature range. Guaranteed by design.

## Output Adjustment

The REF02 trim terminal can be used to adjust the output voltage over a 5V ±300mV range. This feature allows the system designer to trim system errors by setting  the  reference  to  a  voltage  other  than  5V  (refer  to the Typical Operating Circuit ).

Adjustment of the output does not significantly affect the  temperature performance of the device. Typically, the temperature coefficient change is 0.7ppm/°C for 100mV of output adjustment.

## Temperature Voltage Output

The REF02 provides a temperature-dependent output voltage on the TEMP pin. This voltage is proportional to the absolute temperature, and has a scale factor of approximately 2.1mV/°C (Figure 1).

Output Voltage = 2.1(T + 273)mV

where T = Temperature in °C.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. REF02 Temperature/Voltage Output vs. Temperature

<!-- image -->

## +5V, +10V Precision Voltage References

Typical Operating Characteristics

<!-- image -->

## +5V, +10V Precision Voltage References

Figure 2. Precision Calibration Standard

<!-- image -->

Figure 4. Current Source

<!-- image -->

8

## Typical Applications

Figure 3. ±10V Reference

<!-- image -->

Figure 5. Precision Temperature Transducer with Remote Sensor

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Revision History

Pages changed at Rev 7: 1, 9

## Package Information

For the latest package outline information, go to www.maxim-ic.com/packages .

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 9

## +5V, +10V Precision Voltage References

## Pin Configurations

<!-- image -->

## Ordering Information (continued)

| PART       | TEMP RANGE     |   MAX TEMPCO (ppm/°C) | INITIAL ERROR (mV)   | PIN-PACKAGE   | PKG CODE   |
|------------|----------------|-----------------------|----------------------|---------------|------------|
| REF02 EP   | 0°C to +70°C   |                   8.5 | ±15                  | 8 Plastic DIP | P8-2       |
| REF02EP+   | 0°C to +70°C   |                   8.5 | ±15                  | 8 Plastic DIP | P8-2       |
| REF02HP    | 0°C to +70°C   |                    25 | ±25                  | 8 Plastic DIP | P8-2       |
| REF02HP+   | 0°C to +70°C   |                    25 | ±25                  | 8 Plastic DIP | P8-2       |
| REF02HSA   | 0°C to +70°C   |                    25 | ±25                  | 8 SO          | S8-2       |
| REF02HSA+  | 0°C to +70°C   |                    25 | ±25                  | 8 SO          | S8-2       |
| REF02CP    | 0°C to +70°C   |                    65 | ±50                  | 8 Plastic DIP | P8-2       |
| REF02CP+   | 0°C to +70°C   |                    65 | ±50                  | 8 Plastic DIP | P8-2       |
| REF02CSA   | 0°C to +70°C   |                    65 | ±50                  | 8 SO          | S8-2       |
| REF02CSA+  | 0°C to +70°C   |                    65 | ±50                  | 8 SO          | S8-2       |
| REF02CESA  | -40°C to +85°C |                    65 | ±50                  | 8 SO          | S8-2       |
| REF02CESA+ | -40°C to +85°C |                    65 | ±50                  | 8 SO          | S8-2       |