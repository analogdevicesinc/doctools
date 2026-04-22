<!-- lastmod 2025-11-21 -->
<!-- image -->

## FEATURES

- n Output Current: 0.9A
- n 500μA Quiescent Current
- n Adjustable Output from 1.2V to 19.5V
- n No Protection Diodes Needed
- n &lt; 1μA Quiescent Current in Shutdown
- n Total Ionizing Dose (TID) Tolerance, per TM1019.8,
- n MIL-STD-883 up to:
- n 200kRad (Si), per Condition A, at 50Rads(Si)/sec
- n 100kRad (Si), per Condition D, at 10mRads(Si)/sec
- n ELDRS Pass 100kRad(Si)
- n MIL-PRF-38535 Class V Compliant

All registered trademarks and trademarks are the property of their respective owners.

## DICE PINOUT

<!-- image -->

71mils × 66mils, Backside metal: Alloyed gold (K) layer Backside potential: GND

## RH1965MK DICE/DWF

## 0.9A, Low Noise, Low Dropout Linear Regulator

## DESCRIPTION

The RH1965MK is a 0.9A low noise, low dropout linear regulator  with  a  PNP  pass  transistor ,  requiring  only  a single supply for operation. Operating quiescent current is 500μA, reducing to less than 1μA in shutdown. Output voltage ranges from 1.2V to 19.5V. A small 10μF capacitor on the output with an ESR of less than 1Ω is adequate to ensure stability. Applications with large output load transients require a larger output capacitor value to minimize output voltage change. Input circuitry ensures output safe operating area with current limiting and thermal shutdown protection. The rated dropout of an RH1965-based part is dependent on the internal bond wire length/resistance. Analog dice element evaluations are based on parts rated for 0.9A output current that are assembled in 4-Lead TO-3 can packages.

## PAD FUNCTION

## DIE CROSS REFERENCE

1. OUT
2. IN
3. SHDN
4. ADJ
5. GND

| LTC ® Finished Part Number   | Order Part Number           |
|------------------------------|-----------------------------|
| RH1965MK RH1965MK            | RH1965MK DICE RH1965MK DWF* |

Please refer to Analog standard product data sheet for other applicable product information.

*DWF = DICE in wafer form.

## ABSOLUTE MAXIMUM RATINGS

| (Note 1)                                                                         |                                                               |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| IN Pin Voltage                                                                   | .........................................................±22V |
| OUT Pin Voltage......................................................±22V        |                                                               |
| Input to Output Differential Voltage (Note                                       | 2)...........±22V                                             |
| ADJ Pin Voltage                                                                  | ........................................................±9V   |
| SHDN Pin Voltage                                                                 | ...................................................±22V       |
| Output Short-Circuit Duration                                                    | .......................... Indefinite                         |
| Operating Junction Temperature Range (Notes 3, 5, 13)........................... | -55°C to 125°C                                                |
| Storage Temperature Range...................                                     | -65°C to 150°C                                                |

## T A  = 25°C (Notes 3, 14, 15, 16) TABLE 1: DICE/DWF ELECTRICAL TEST LIMITS

| PARAMETER                                               | CONDITIONS                                   | MIN   | MAX       | UNITS    |
|---------------------------------------------------------|----------------------------------------------|-------|-----------|----------|
| ADJ Pin Voltage (Notes 4, 5)                            | V IN = 2.1V , I LOAD = 1mA                   | 1.182 | 1.218     | V        |
| Line Regulation                                         | ∆V IN = 2.1V to 20V , I LOAD = 1mA (Note 4)  |       | 5         | mV       |
| Load Regulation                                         | V IN = 2.3V , ∆I LOAD = 1mA to 50mA (Note 4) |       | 7         | mV       |
| Dropout Voltage V IN = V OUT(NOMINAL) (Notes 6, 7, 12)  | I LOAD = 1mA I LOAD = 50mA                   |       | 0.08 0.16 | V V      |
| GND Pin Current V IN = V OUT(NOMINAL) + 1V (Notes 6, 8) | I LOAD = 0mA I LOAD = 1mA I LOAD = 100mA     |       | 0.7 1 4.5 | mA mA mA |
| ADJ Pin Bias Current (Notes 4, 9)                       |                                              |       | 4.5       |          |
| Shutdown Threshold                                      | V OUT = Off to On V OUT = On to Off          | 0.43  | 1.2       | V V      |
| SHDN Pin Current (Note 10)                              | V SHDN = 0V V SHDN = 20V                     |       | 1 10      |          |
| Quiescent Current in Shutdown                           | V IN = 6V , V SHDN = 0V                      |       | 1         |          |
| Input Reverse-Leakage Current                           | V IN = -20V , V OUT = 0V                     |       | 1         | mA       |
| Reverse-Output Current (Note 11)                        | V OUT = 1.2V , V IN = 0V (Note 4)            |       | 400       |          |

## TABLE 2: ELECTRICAL CHARACTERISTICS (Preirradiation) (Notes 3, 15, 16)

| PARAMETER                                               | CONDITIONS                                                                        | T A = MIN   | 25°C MAX             | SUB- GROUP   | -55°C < T A < MIN   | 125°C MAX         | SUB- GROUP               | UNITS          |
|---------------------------------------------------------|-----------------------------------------------------------------------------------|-------------|----------------------|--------------|---------------------|-------------------|--------------------------|----------------|
| Minimum Input Voltage (Notes 4, 12)                     | I LOAD = 0.9A                                                                     |             | 2.3                  | 1            |                     | 2.3               | 2, 3                     | V              |
| ADJ Pin Voltage (Notes 4, 5)                            | V IN = 2.1V , I LOAD = 1mA                                                        | 1.182       | 1.218                | 1            | 1.164               | 1.236             | 2, 3                     | V              |
| Line Regulation                                         | ∆V IN = 2.1V to 20V , I LOAD = 1mA (Note 4)                                       |             | 6                    | 1            |                     | 8                 | 2, 3                     | mV             |
| Load Regulation                                         | V IN = 2.3V , ∆I LOAD = 1mA to 0.9A (Note 4)                                      |             | 8                    | 1            |                     | 16                | 2, 3                     | mV             |
| Dropout Voltage V IN = V OUT(NOMINAL) (Notes 6, 7, 12)  | I LOAD = 1mA I LOAD = 100mA I LOAD = 500mA I LOAD = 0.9A                          |             | 80 185 300 435       | 1 1 1 1      |                     | 140 295 430 600   | 2, 3 2, 3 2, 3 2, 3      | mV mV mV mV    |
| GND Pin Current V IN = V OUT(NOMINAL) + 1V (Notes 6, 8) | I LOAD = 0mA I LOAD = 1mA I LOAD = 100mA I LOAD = 500mA I LOAD = 0.9A             |             | 0.85 1.1 4.6 16.5 30 | 1 1 1 1 1    |                     | 1.1 1.5 5.5 20 38 | 2, 3 2, 3 2, 3 2, 3 2, 3 | mA mA mA mA mA |
| Output Voltage Noise                                    | V OUT = 2.5V , C OUT = 10µF , I LOAD = 0.9A, BW = 10Hz to 100kHz                  | TYP         | = 40                 | 1            |                     |                   |                          | RMS            |
| ADJ Pin Bias Current (Notes 4, 9)                       |                                                                                   |             | 4.5                  | 1            |                     | 4.5               |                          |                |
| Shutdown Threshold                                      | V OUT = Off to On V OUT = On to Off                                               | 0.37        | 1.5                  | 1            | 0.2                 | 2                 | 2, 3                     | V V            |
| SHDN Pin Current (Note 10)                              | V SHDN = 0V V SHDN = 20V                                                          |             | 1 10                 | 1            |                     |                   |                          | µA             |
| Quiescent Current in Shutdown                           | V IN = 6V , V SHDN = 0V                                                           |             | 1                    | 1            |                     |                   |                          |                |
| Ripple Rejection                                        | V IN - V OUT = 1.5V (AVG), V RIPPLE = 0.5V P-P , f RIPPLE = 120Hz, I LOAD = 0.75A | 57          |                      | 1            |                     |                   |                          | dB             |
| Current Limit (Note 6)                                  | V IN = V OUT(NOMINAL) + 1V , ∆V OUT = -0.1V                                       | 1.0         |                      | 1            | 1.0                 |                   | 2, 3                     | A              |
| Input Reverse-Leakage Current                           | V IN = -20V , V OUT = 0V                                                          |             | 1                    | 1            |                     |                   |                          | mA             |
| Reverse-Output Current (Note 11)                        | V OUT = 1.2V , V IN = 0V (Note 4)                                                 |             | 400                  | 1            |                     |                   |                          |                |

<!-- image -->

## TABLE 3: ELECTRICAL CHARACTERISTICS (Postirradiation) T A  = 25°C (Notes 3, 15, 16, 17)

| PARAMETER                                               | CONDITIONS                                                             | 10kRads (Si) MIN MAX   | 20kRads (Si) MIN MAX   | 50kRads (Si) MIN MAX   | 100kRads (Si) MIN MAX   | 200kRads (Si) MIN MAX   | UNITS          |
|---------------------------------------------------------|------------------------------------------------------------------------|------------------------|------------------------|------------------------|-------------------------|-------------------------|----------------|
| Minimum Input Voltage (Notes 4, 12)                     | I LOAD = 0.9A                                                          | 2.3                    | 2.3                    | 2.3                    | 2.3                     | 2.3                     | V              |
| ADJ Pin Voltage (Notes 4, 5)                            | V IN = 2.1V , I LOAD = 1mA                                             | 1.176 1.224            | 1.176 1.224            | 1.176 1.224            | 1.176 1.224             | 1.176 1.224             | V              |
| Line Regulation (Note 4)                                | ∆V IN = 2.1V to 20V , I LOAD = 1mA                                     | 6                      | 6                      | 6                      | 6                       | 6                       | mV             |
| Load Regulation                                         | V IN = 2.3V , ∆I LOAD = 1mA to 0.9A (Note 4)                           | 8                      | 8                      | 9                      | 10                      | 12                      | mV             |
| Dropout Voltage (Notes 6, 7, 12)                        | I LOAD = 1mA I LOAD = 100mA I LOAD = 500mA I LOAD = 0.9A               | 80 185 300 435         | 80 185 300 440         | 80 186 305 450         | 80 188 310 455          | 80 190 320 465          | mV mV mV mV    |
| GND Pin Current V IN = V OUT(NOMINAL) + 1V (Notes 6, 8) | I LOAD = 0mA I LOAD = 1mA I LOAD = 100mA I LOAD = 500mA I LOAD = 0.9A  | 0.85 1.1 4.8 17 31     | 0.85 1.1 4.9 18 32     | 0.85 1.1 5.2 19 34     | 0.85 1.1 6 21 38        | 0.85 1.1 7 25 45        | mA mA mA mA mA |
| Output Voltage Noise                                    | V OUT = 2.5V , C OUT = 10µF , I LOAD = 0.9A, BW = 10Hz to 100kHz       |                        |                        |                        |                         |                         | RMS            |
| ADJ Pin Bias Current (Notes 4, 9)                       |                                                                        | 4.5                    | 4.5                    | 4.5                    | 4.5                     |                         |                |
| Shutdown Threshold                                      | V OUT = Off to On V OUT = On to Off                                    | 0.37 1.5               | 0.37 1.5               | 0.37 1.5               | 0.37 1.5                | 0.37 1.5                | V V            |
| SHDN Pin Current (Note 10)                              | V SHDN = 0V V SHDN = 20V                                               | 1 10                   | 1 10                   | 1 10                   | 1 10                    | 1 10                    |                |
| Quiescent Current in Shutdown                           | V IN = 6V , V SHDN = 0V                                                | 1                      | 1                      | 1                      | 1                       |                         |                |
| Ripple Rejection                                        | V IN = 2.7V + 0.5V P-P , V OUT = 1.2V f RIPPLE = 120Hz, I LOAD = 0.75A | 56                     | 55                     | 54                     | 52                      |                         | dB             |
| Current Limit                                           | V IN = V OUT(NOMINAL) + 1V , ∆V OUT = -0.1V                            | 1.0                    | 1.0 1.0                |                        | 1.0                     |                         | A              |
| Input Reverse-Leakage Current                           | V IN = -20V , V OUT = 0V                                               | 1                      | 1                      | 1                      | 1                       | 1                       | mA             |
| Reverse-Output Current (Note 11)                        | V OUT = 1.2V , V IN = 0V (Note 4)                                      | 400                    | 400                    | 400                    | 400                     |                         |                |

Note 1: Stresses beyond those listed under Absolute Maximum Ratings may cause permanent damage to the device. Exposure to any Absolute Maximum Rating condition for extended periods may affect device reliability and lifetime.

Note 2: Absolute maximum input to output differential voltage is not achievable with all combinations of rated IN pin and OUT pin voltages. With the IN pin at 22V , the OUT pin may not be pulled below 0V . The total measured voltage from IN to OUT must not exceed ±22V .

Note 3: The RH1965MK DICE is tested and specified under pulse load conditions such that T J ≅ T A .

Note 4: The RH1965MK DICE is tested and specified for these conditions with the ADJ pin connected to the output.

Note 5: Maximum junction temperature limits operating conditions. The regulated output voltage specification does not apply for all possible combinations of input voltage and output current. Limit the output current range if operating at the maximum input voltage. Limit the input-to-output voltage differential if operating at the maximum output current.

Note 6: To satisfy minimum input voltage requirements, the RH1965MK DICE is tested and specified for these conditions with an external resistor divider (bottom 4.02k, top 4.32k) for an output voltage of 2.5V . The external resistor divider adds 300μA of output DC load current. This external current is not factored into GND pin current.

Note 7: Dropout voltage is the minimum input-to-output voltage differential needed to maintain regulation at a specified output current. In dropout, the output voltage equals: (V IN  - V DROPOUT ).

## ELECTRICAL CHARACTERISTICS

Device is characterized at the TID levels below. Device is production tested at 100kRad(si).

Note 8: GND pin current is tested with V IN  = V OUT(NOMINAL)  + 1V and a current source load. GND pin current increases slightly in dropout.

Note 9: ADJ pin bias current flows into the ADJ pin.

Note 10: SHDN pin current flows into the SHDN pin.

Note 11: Reverse-output current is tested with the IN pin grounded and the OUT pin forced to 1.2V . This current flows into the OUT pin and out of the GND pin.

Note 12: The minimum input voltage specification limits the dropout voltage under some output voltage/load conditions.

Note 13: This IC includes overtemperature protection that is intended to protect the device during momentary overload conditions. Junction temperature exceeds the maximum junction temperature when overtemperature protection is active. Continuous operation above the specified maximum operating junction temperature may impair device reliability.

Note 14: Dice are probe tested at 25°C to the limits shown in Table 1. Except for high current tests, dice are tested under low current conditions which assure full load current specifications when assembled.

Note 15: Dice that are not qualified by Analog Devices with a can sample are guaranteed to meet specifications of Table 1 only. Dice qualified by Analog Devices with a can sample meet specifications in all tables.

Note 16: Please refer to the L T1965 standard product data sheet for Typical Performance Characteristics, Pin Functions, Applications Information, and Typical Applications.

Note 17: Device is characterized at 10Krad, 20Krad, 50Krad, 100Krad, and 200Krad and is production tested at 100Krad only.

## T A  = 25°C TABLE 4. POST BURN-IN ENDPOINTS AND DELTA LIMIT REQUIREMENTS

|                                   |                            | ENDPOINT LIMITS   | ENDPOINT LIMITS   | DELTA LIMITS   | DELTA LIMITS   |       |
|-----------------------------------|----------------------------|-------------------|-------------------|----------------|----------------|-------|
| PARAMETER                         | CONDITIONS                 | MIN               | MAX               | MIN            | MAX            | UNITS |
| ADJ Pin Voltage (Notes 4, 5)      | V IN = 2.1V , I LOAD = 1mA | 1.182             | 1.218             | -0.010         | 0.010          | V     |
| ADJ Pin Bias Current (Notes 4, 9) |                            |                   | 4.5               | -0.4           | 0.4            |       |

## TOTAL DOSE BIAS CIRCUIT

<!-- image -->

4

O

U

T

3

2

<!-- image -->

## BURN-IN CIRCUIT

4

3

O

U

T

2

## TYPICAL PERFORMANCE CHARACTERISTICS T A  = 25°C

<!-- image -->

T

O

V

T

O

<!-- image -->

<!-- image -->

AGE (V)

T

ADJ PIN VOL

RH1965MK G04

V

<!-- image -->

<!-- image -->

T

T

O

<!-- image -->

O

U

T

O

<!-- image -->

T

T

O

V

O

U

T

RH1965MK G06

T

O

2

4

8

RH1965MK G03

## TYPICAL PERFORMANCE CHARACTERISTICS T A  = 25°C

V

<!-- image -->

<!-- image -->

T

O

T

O

## REVISION HISTORY (Revision history begins at Rev G)

| REV   | DATE   | DESCRIPTION                                                                                        | PAGE NUMBER   |
|-------|--------|----------------------------------------------------------------------------------------------------|---------------|
| G     | 07/23  | Updated art title in the Electrical Characteristics section and updated the document to ADI format | 1-8           |
| H     | 11/25  | Changes to Table 1:DICE/DWF Electrical Test Limits                                                 | 2             |
|       |        | Changes to Table 2: Electrical Characteristics                                                     | 3             |
|       |        | Table 3: Electrical Characteristics                                                                | 4-5           |
|       |        | Deleted Table 5: Electrical Test Requirements                                                      | 5             |

<!-- image -->

For more information www.analog.com

V

O

U

T

V

V

O

U

T

V

T

O

<!-- image -->