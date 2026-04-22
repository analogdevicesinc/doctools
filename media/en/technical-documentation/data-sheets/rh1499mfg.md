<!-- lastmod 2025-07-23 -->
<!-- image -->

## DESCRIPTION

## 10MHz, 6V/µs, Quad Rail-to-Rail Input and Output Precision C-Load Op Amp

## ABSOLUTE MAXIMUM RATINGS

The  RH1499M  is  a  quad,  rail-to-rail  input  and  output precision C-Load™ op amp with a typical 10MHz gainbandwidth product and 6V/µs slew rate.

The RH1499 is designed to maximize input dynamic range by delivering precision performance over the full supply voltage. Using a patented technique, the input stages of the RH1499 are trimmed, one at the negative supply and the other at the positive supply. The resulting guaranteed common mode rejection is much better than other railto-rail input op amps. When used as a unity-gain buffer in  front  of  single  supply  12-bit  A-to-D  converters,  the RH1499 is guaranteed to add less than 1LSB of error even in single 5V supply systems.

With 110dB of supply rejection, the RH1499 maintains its performance over a supply range of 4.5V to 36V . The inputs can be driven beyond the supplies without damage or phase reversal of the output. These op amps remain stable while driving capacitive loads up to 10,000pF .

The wafer lots are processed to Analog Devices' in-house Class S flow to yield circuits usable in stringent military and space applications.

All registered trademarks and trademarks are the property of their respective owners.

## BURN-IN CIRCUIT

<!-- image -->

<!-- image -->

## (Note 1)

| Total Supply Voltage (V + to V - ) .................................36V    |
|----------------------------------------------------------------------------|
| Input Current........................................................±10mA |
| Output Short-Circuit Duration (Note 2) .........Continuous                 |
| Operating Temperature Range................ -55°C to 125°C                 |
| Specified Temperature Range ................ -55°C to 125°C                |
| Junction Temperature ..........................................150°C       |
| Storage Temperature Range................... -65°C to 150°C                |
| Lead Temperature (Soldering, 10 sec) ..................300°C               |

## PACKAGE INFORMATION

<!-- image -->

## TABLE 1: ELECTRICAL CHARACTERISTICS

(Preirradiation) V S  = ±15V , V CM = V OUT  = 0V , unless otherwise noted.

| SYMBOL   | PARAMETER                                                | CONDITIONS                                                     | NOTES   | MIN      | T A = 25°C TYP   | MAX        | SUB- GROUP   | -55°C MIN   | ≤ T A ≤ TYP   | 125°C MAX   | SUB- GROUP   | UNITS       |
|----------|----------------------------------------------------------|----------------------------------------------------------------|---------|----------|------------------|------------|--------------|-------------|---------------|-------------|--------------|-------------|
| V OS     | Input Offset Voltage                                     | V CM = V + , V - V CM = 14.5V , -14.5V                         |         |          | 200              | 800        | 1            |             | 350           | 1100        | 2, 3         | µV µV       |
|          | Input Offset Voltage Match (Channel-to-Channel) (Note 3) | V CM = V + to V - V CM = 14.5V to -14.5V                       | 3       |          | 250              | 1400       |              |             | 450           | 1800        |              | µV µV       |
| I B      | Input Bias Current                                       | V CM = V + V CM = 14.5V V CM = V - V CM = -14.5V               |         | 0 -715   | 250 -250         | 715 0      | 1            | -1200       | 500 -500      | 1200 0      | 2, 3         | nA nA nA nA |
|          | Input Bias Current Match (Channel-to-Channel) (Note 3)   | V CM = V + , V - V CM = 14.5V , -14.5V                         | 3       | 0        | 12               | 200        |              |             | 50            | 400         |              | nA nA       |
| I OS     | Input Offset Current                                     | V CM = V + , V - V CM = 14.5V , -14.5V                         |         |          | 6                | 70         | 1            |             | 40            | 300         | 2, 3         | nA nA       |
|          | Input Voltage Range                                      |                                                                |         | -15      |                  | 15         |              | -14.5       |               | 14.5        |              | V           |
|          | Input Noise Voltage                                      | 0.1Hz to 10Hz                                                  |         |          | 400              |            |              |             |               |             |              | nV P-P      |
| e n      | Input Noise Voltage Density                              | f = 1kHz                                                       |         |          | 12               |            |              |             |               |             |              | nV/√ Hz     |
| i n      | Input Noise Current Density                              | f = 1kHz                                                       |         |          | 0.3              |            |              |             |               |             |              | pA/√ Hz     |
| A VOL    | Large-Signal Voltage Gain                                | V O = -14.5V to 14.5V , R L = 10k V O = -10V to 10V , R L = 2k |         | 1000 500 | 5200 2300        |            | 4            | 60 25       | 400 100       |             | 5, 6         | V/mV V/mV   |
| CMRR     | Common Mode Rejection Ratio                              | V CM = V + to V - V CM = 14.5V to -14.5V                       |         | 90       | 102              |            | 1            | 86          | 102           |             | 2, 3         | dB dB       |
|          | CMRR Match (Channel-to-Channel) (Note 3)                 | V CM = V + to V - V CM = 14.5V to -14.5V                       | 3       | 84       | 103              |            |              | 80          | 100           |             |              | dB dB       |
| PSRR     | Power Supply Rejection Ratio                             | V S = ±2V to ±16V                                              |         | 90       | 110              |            | 1            | 88          | 100           |             | 2, 3         | dB          |
|          | PSRR Match (Channel-to-Channel) (Note 3)                 | V S = ±2V to ±16V                                              | 3       | 83       | 110              |            |              | 82          | 100           |             |              | dB          |
| V OL     | Output Voltage Swing (Low) (Note 4)                      | No Load I SINK = 1mA I SINK = 10mA I SINK = 5mA                | 4       |          | 18 50 230        | 30 100 500 | 4            |             | 25 70 180     | 75 150 500  | 5, 6         | mV mV mV mV |
| V OH     | Output Voltage Swing (High) (Note 4)                     | No Load I SOURCE = 1mA I SOURCE = 10mA I SOURCE = 5mA          | 4       |          | 2.5 75 420       | 10 150 800 | 4            |             | 5 100 300     | 25 250 800  | 5, 6         | mV mV mV mV |
| I SC     | Short-Circuit Current                                    |                                                                |         | ±15      | ±30              |            | 1            | ±7.5        | ±12           |             | 2, 3         | mA          |
| I S      | Supply Current per Amp                                   |                                                                |         |          | 1.8              | 2.5        | 1            |             | 2.2           | 3           | 2, 3         | mA          |
| GBW      | Gain-Bandwidth Product                                   | f = 100kHz                                                     |         | 6.8      | 10.5             |            |              | 5.8         | 8.5           |             |              | MHz         |
| SR       | Slew Rate                                                | A V = -1, R L = 10k, V O = ±10V , Measure at V O = ±5V         |         | 3.5      | 6                |            | 4            | 2.2         | 4             |             | 5, 6         | V/µs        |

## TABLE 1A: ELECTRICAL CHARACTERISTICS

(Postirradiation) V S  = ±15V , V CM = 0V , T A  = 25°C, unless otherwise noted. (Note 5)

| SYMBOL   | PARAMETER                       | CONDITIONS                                             | NOTES   | 10Krad (Si) MIN MAX   | 20Krad MIN   | (Si) MAX   | 50Krad (Si) MIN   | 100Krad (Si) MAX MIN MAX   | 200Krad (Si) MIN MAX   | UNITS    |
|----------|---------------------------------|--------------------------------------------------------|---------|-----------------------|--------------|------------|-------------------|----------------------------|------------------------|----------|
| V OS     | Input Offset Voltage            | V CM = V + , V -                                       |         | 950                   | 950          |            | 950               | 950                        | 950                    | µV       |
| I B      | Input Bias Current              | V CM = V + , V -                                       |         | 765                   | 815          |            | 865               | 915                        | 965                    | nA       |
| I OS     | Input Offset Current            | V CM = V + , V -                                       |         | 100                   |              | 100        | 100               | 100                        | 100                    | nA       |
|          | Input Voltage Range             |                                                        |         | V - V                 | V -          | V +        | V - V +           | V - V +                    | V - V +                | V        |
| A VOL    | Large-Signal Voltage Gain       | V O = -14.5V to 14.5V , R L = 10k                      |         | 500                   | 500          |            | 500               | 500                        | 500                    | V/mV     |
|          |                                 | V O = -10V to 10V , R L = 2k                           |         | 250                   | 250          |            | 250               | 250                        | 250                    | V/mV     |
| CMRR     | Common Mode Rejection Ratio     | V CM = V + to V -                                      |         | 86                    | 86           |            | 86                | 86                         | 86                     | dB       |
|          | CMRR Match (Channel-to-Channel) | V CM = V + to V -                                      | 3       | 83                    | 83           |            | 83                | 83                         | 83                     | dB       |
| PSRR     | Power Supply Rejection Ratio    | V S = ±2V to ±16V                                      |         | 90                    | 90           |            | 90                | 90                         | 90                     | dB       |
|          | PSRR Match (Channel-to-Channel) | V S = ±2V to ±16V                                      | 3       | 83                    | 83           |            | 83                | 83                         | 83                     | dB       |
| V OUT    | Output Voltage Swing Low        | No Load I SINK = 1mA I SINK = 10mA                     | 4       | 60 100 500            |              | 60 100 500 | 60 100 500        | 60 100 500                 | 60 100 500             | mV mV mV |
|          | Output Voltage Swing High       | No Load I SOURCE = 1mA I SOURCE = 10mA                 | 4       | 20 150 800            |              | 20 150 800 | 20 150 800        | 20 150 800                 | 20 150 800             | mV mV mV |
| I SC     | Short-Circuit Current           |                                                        |         | ±10                   | ±10          |            | ±10               | ±10                        | ±10                    | mA       |
| I S      | Supply Current                  |                                                        |         | 2.5                   |              | 2.5        | 2.5               | 2.5                        | 2.5                    | mA       |
| GBW      | Gain-Bandwidth Product          | f = 100kHz                                             |         | 4.5                   | 4.5          |            | 4.5               | 4.5                        | 4.5                    | MHz      |
| SR       | Slew Rate                       | A V = -1, R L = 10k, V O = ±10V , Measure at V O = ±5V |         | 3                     | 3            |            | 3                 | 3                          | 3                      | V/µs     |

## TABLE 2: ELECTRICAL CHARACTERISTICS

(Preirradiation) V S  = 5V; V CM  = V OUT  = half supply, unless otherwise noted.

| SYMBOL   |                                                          |                                                           |       | T A = 25°C   | T A = 25°C   | T A = 25°C   | SUB-   | -55°C ≤ T A ≤ 125°C   | -55°C ≤ T A ≤ 125°C   | -55°C ≤ T A ≤ 125°C   | SUB-   |             |
|----------|----------------------------------------------------------|-----------------------------------------------------------|-------|--------------|--------------|--------------|--------|-----------------------|-----------------------|-----------------------|--------|-------------|
|          | PARAMETER                                                | CONDITIONS                                                | NOTES | MIN          | TYP          | MAX          | GROUP  | MIN                   | TYP                   | MAX                   | GROUP  | UNITS       |
| V OS     | Input Offset Voltage                                     | V CM = V + , V - V CM = V + - 0.5V , V - + 0.5V           |       |              | 150          | 800          | 1      |                       | 300                   | 1100                  | 2, 3   | µV µV       |
|          | Input Offset Voltage Match (Channel-to-Channel) (Note 3) | V CM = V + to V - V CM = V + - 0.5V , V - + 0.5V          | 3     |              | 200          | 1400         |        |                       | 350                   | 1800                  |        | µV µV       |
| I B      | Input Bias Current                                       | V CM = V + V CM = V + - 0.5V V CM = V - V CM = V - + 0.5V |       | 0 -650       | 250 -250     | 650 0        | 1      | 0 -1100               | 450 -450              | 1100 0                | 2, 3   | nA nA nA nA |
|          | Input Bias Current Match (Channel-to-Channel) (Note 3)   | V CM = V + , V - V CM = V + - 0.5V , V - + 0.5V           | 3     | 0            | 10           | 180          |        | 0                     | 30                    | 400                   |        | nA nA       |

Rev. I

<!-- image -->

## TABLE 2: ELECTRICAL CHARACTERISTICS

(Preirradiation) V S  = 5V; V CM  = V OUT  = half supply, unless otherwise noted.

| SYMBOL   | PARAMETER                                | CONDITIONS                                                         | NOTES   | T A = 25°C   | T A = 25°C   | T A = 25°C   | SUB-   | -55°C ≤ T A ≤ 125°C   | -55°C ≤ T A ≤ 125°C   | -55°C ≤ T A ≤ 125°C   | SUB- GROUP   | UNITS    |
|----------|------------------------------------------|--------------------------------------------------------------------|---------|--------------|--------------|--------------|--------|-----------------------|-----------------------|-----------------------|--------------|----------|
| SYMBOL   | PARAMETER                                | CONDITIONS                                                         | NOTES   | MIN          | TYP          | MAX          | GROUP  | MIN                   | TYP                   | MAX                   | SUB- GROUP   | UNITS    |
| I OS     | Input Offset Current                     | V CM = V + , V - V CM = V + - 0.5V , V - + 0.5V                    |         |              | 5            | 65           | 1      |                       | 15                    | 300                   | 2, 3         | nA nA    |
|          | Input Voltage Range                      |                                                                    |         | V -          |              | V +          |        | V - +0.5V             |                       | V + -0.5V             |              | V        |
|          | Input Noise Voltage                      | 0.1Hz to 10Hz                                                      |         |              | 400          |              |        |                       |                       |                       |              | nV P-P   |
| e n      | Input Noise Voltage Density              | f = 1kHz                                                           |         |              | 12           |              |        |                       |                       |                       |              | nV/√ Hz  |
| i n      | Input Noise Current Density              | f = 1kHz                                                           |         |              | 0.3          |              |        |                       |                       |                       |              | pA/√ Hz  |
| C IN     | Input Capacitance                        |                                                                    |         |              | 5            |              |        |                       |                       |                       |              | pF       |
| A VOL    | Large-Signal Voltage Gain                | V S = 5V , V O = 75mV to 4.8V R L = 10k                            | ,       | 600          | 3800         |              | 4      | 60                    | 210                   |                       | 5, 6         | V/mV     |
| CMRR     | Common Mode Rejection Ratio              | V S = 5V , V CM = V + to V - V S = 5V , V CM = 0.5V to 4.5V        |         | 76           | 90           |              |        | 68                    | 85                    |                       |              | dB dB    |
|          | CMRR Match (Channel-to-Channel) (Note 3) | V S = 5V , V CM = V + to V - V S = 5V , V CM = 0.5V to 4.5V        | 3       | 75           | 91           |              |        | 66                    |                       |                       |              | dB dB    |
| PSRR     | Power Supply Rejection Ratio             | V S = 4.5V to 12V , V CM = V O = 0.5V                              |         | 88           | 105          |              | 1      | 86                    | 104                   |                       | 2, 3         | dB       |
|          | PSRR Match (Channel-to-Channel) (Note 3) | V S = 4.5V to 12V , V CM = V O = 0.5V                              | 3       | 82           | 120          |              |        | 80                    | 118                   |                       |              | dB       |
| V OL     | Output Voltage Swing (Low) (Note 4)      | No Load I SINK = 1mA I SINK = 2.5mA                                | 4       |              | 14 50 90     | 30 100 200   | 4      |                       | 25 65 110             | 75 150 220            | 5, 6         | mV mV mV |
| V OH     | Output Voltage Swing (High) (Note 4)     | No Load I SOURCE = 1mA I SOURCE = 2.5mA                            | 4       |              | 2.5 70 140   | 10 150 250   | 4      |                       | 5 100 180             | 25 250 300            | 5, 6         | mV mV mV |
| I SC     | Short-Circuit Current                    | V S = 5V                                                           |         | ±12.5        | 24           |              | 1      | ±5                    | ±10                   |                       | 2, 3         | mA       |
| I S      | Supply Current per Amp                   |                                                                    |         |              | 1.7          | 2.2          | 1      |                       | 2                     | 2.7                   | 2, 3         | mA       |
| GBW      | Gain-Bandwidth Product                   | V S = 5V , f = 100kHz                                              |         | 6.8          | 10.5         |              |        | 5.8                   | 8.5                   |                       |              | MHz      |
| SR       | Slew Rate                                | V S = ±2.5V , A V = -1, R L = 10k,V O = ±2V , Measure at V O = ±1V |         | 2.6          | 4.5          |              | 4      | 2                     | 3.6                   |                       | 5, 6         | V/µs     |

## TABLE 2A: ELECTRICAL CHARACTERISTICS

(Postirradiation) V S  = 5V; V CM  = half supply, T A  = 25°C, unless otherwise noted. (Note 5)

| SYMBOL   | PARAMETER                   | CONDITIONS                         | NOTES   | 10Krad (Si) MIN   | MAX   | 20Krad (Si) MIN   | MAX   | 50Krad (Si) MIN MAX   | 50Krad (Si) MIN MAX   | 100Krad (Si) MIN   | MAX   | 200Krad (Si) MIN MAX   | 200Krad (Si) MIN MAX   | UNITS   |
|----------|-----------------------------|------------------------------------|---------|-------------------|-------|-------------------|-------|-----------------------|-----------------------|--------------------|-------|------------------------|------------------------|---------|
| V OS     | Input Offset Voltage        | V CM = V + , V -                   |         |                   | 950   |                   | 950   |                       | 950                   |                    | 950   |                        | 950                    | µV      |
| I B      | Input Bias Current          | V CM = V + , V -                   |         |                   | 700   |                   | 750   |                       | 800                   |                    | 850   |                        | 900                    | nA      |
| I OS     | Input Offset Current        | V CM = V + , V -                   |         |                   | 65    |                   | 65    |                       | 65                    |                    | 65    |                        | 65                     | nA      |
|          | Input Voltage Range         |                                    |         | V -               | V +   | V -               | V +   | V -                   | V +                   | V -                | V +   | V -                    | V +                    | V       |
| A VOL    | Large-Signal Voltage Gain   | V O = 75mV to V + - 0.2V R L = 10k |         | 300               |       | 300               |       | 300                   |                       | 300                |       | 300                    |                        | V/mV    |
| CMRR     | Common Mode Rejection Ratio | V CM = V + to V -                  |         | 70                |       | 70                |       | 70                    |                       | 70                 |       | 70                     |                        | dB      |

Rev. I

## TABLE 2A: ELECTRICAL CHARACTERISTICS

(Postirradiation) V S  = 5V; V CM  = half supply, T A  = 25°C, unless otherwise noted.

| SYMBOL   | PARAMETER                       | CONDITIONS                                                          | NOTES   | 10Krad (Si) MIN   | 20Krad (Si) MIN MAX   | 50Krad (Si) MIN MAX   | 100Krad (Si) MIN MAX   | 200Krad (Si) MIN MAX   | UNITS    |
|----------|---------------------------------|---------------------------------------------------------------------|---------|-------------------|-----------------------|-----------------------|------------------------|------------------------|----------|
|          | CMRR Match (Channel-to-Channel) | V CM = V + to V -                                                   | 3       | 70                | 70                    | 70                    | 70                     | 70                     | dB       |
| PSRR     | Power Supply Rejection Ratio    | V S = 4.5V to 12V , V CM = V O = 0.5V                               |         | 88                | 88                    | 88                    | 88                     | 88                     | dB       |
|          | PSRR Match (Channel-to-Channel) | V S = 4.5V to 12V , V CM = V O = 0.5V                               | 3       | 82                | 82                    | 82                    | 82                     | 82                     | dB       |
| V OUT    | Output Voltage Swing Low        | No Load I SINK = 1mA I SINK = 2.5mA                                 | 4       |                   |                       | 60 100 200            | 60 100 200             | 60 100 200             | mV mV mV |
|          | Output Voltage Swing High       | No Load I SOURCE = 1mA I SOURCE = 2.5mA                             | 4       |                   |                       | 20 150 250            | 20 150 250             | 20 150 250             | mV mV mV |
| I SC     | Short-Circuit Current           |                                                                     |         | ±8                | ±8                    | ±8                    | ±8                     | ±8                     | mA       |
| I S      | Supply Current                  |                                                                     |         |                   |                       | 2.2                   | 2.2                    | 2.2                    | mA       |
| SR       | Slew Rate                       | V S = ±2.5V , A V = -1, R L = 10k, V O = ±2V , Measure at V O = ±1V |         | 2                 | 2                     | 2                     | 2                      | 2                      | V/µs     |

Note 1: Stresses beyond those listed under Absolute Maximum Ratings may cause permanent damage to the device. Exposure to any Absolute Maximum Rating condition for extended periods may affect device reliability and lifetime.

Note 3: Matching parameters are the difference between amplifiers A and D and between B and C.

Note 4: Output voltage swings are measured between the output and power supply rails.

Note 2: A heat sink may be required to keep the junction temperature below this absolute maximum rating when the output is shorted indefinitely.

Note 5: Device is characterized at 10Krad, 20Krad, 50Krad, 100Krad and 200Krad and is production tested at 100Krad only.

## TABLE 2: ELECTRICAL TEST REQUIREMENTS

| MIL-PRF-38535 TEST REQUIREMENTS         | SUBGROUP          |
|-----------------------------------------|-------------------|
| Final Electrical Test Requirements      | 1*, 2, 3, 4, 5, 6 |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6  |
| Group C End Point Electrical Parameters | 1, 2, 3           |
| Group D End Point Electrical Parameters | 1, 2, 3           |
| Group E End Point Electrical Parameters | 1                 |

## TOTAL DOSE BIAS CIRCUIT

## PDA Test Notes

The PDA is specified as 5% based on failures from group A, subgroup 1, tests after cooldown as the final electrical test in accordance with method 5004 of MIL-STD-883. The verified failures of group A, subgroup 1, after burn-in divided by the total number of devices submitted for burn-in in that lot shall be used to determine the percent for the lot.

Analog Devices, Inc., reserves the right to test to tighter limits than those given.

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Supply Current per Amp

<!-- image -->

Input Bias Current

<!-- image -->

<!-- image -->

Input Offset Voltage

<!-- image -->

Common Mode Rejection Ratio

<!-- image -->

RH1499 G08

RH1499 G07

<!-- image -->

Input Offset Current

<!-- image -->

Power Supply Rejection Ratio

<!-- image -->

Rev. I

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

<!-- image -->

RH1499 G10

Open-Loop Voltage Gain vs Temperature

<!-- image -->

RH1499 G13

<!-- image -->

RH1499 G15

RH1499 G11

Input Bias Current vs Common Mode Voltage

<!-- image -->

Input Bias Current vs Temperature

<!-- image -->

RH1499 G14

<!-- image -->

RH1499 G12

## PACKAGE OUTLINE DRAWINGS

<!-- image -->

W Package 14-Lead Flatpak Glass Sealed (Hermetic) (Reference LTC DWG # 05-08-1140 Rev A) Dimensions shown in inches and (millimeters)

## REVISION HISTORY (Revision history begins at Rev B)

| REV   | DATE   | DESCRIPTION                                                                                                             | PAGE NUMBER   |
|-------|--------|-------------------------------------------------------------------------------------------------------------------------|---------------|
| G     | 06/15  | Corrected typo in Table 2A A VOL condition (R L not R1).                                                                | 4             |
| H     | 08/24  | Changes to Table 2: Electrical Test Requirements                                                                        | 5             |
| I     | 07/25  | Changes to Table 1A: Electrical Characteristics and Table 2A: Electrical Characteristics Added Package Outline Drawings | 3, 4 8        |

<!-- image -->

For more information www.analog.com