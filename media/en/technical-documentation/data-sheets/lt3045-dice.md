<!-- lastmod 2024-12-13 -->
<!-- image -->

## FEATURES

- n Ultralow RMS Noise: 0.8µV RMS  (10Hz to 100kHz)
- n Ultralow Spot Noise: 2nV/√ Hz at 10kHz
- n Ultrahigh PSRR: 76dB at 1MHz
- n Output Current: 500mA
- n Wide Input Voltage Range: 1.8V to 20V
- n Single Capacitor Improves Noise and PSRR
- n 100µA SET Pin Current: ±1% Initial Accuracy
- n Single Resistor Programs Output Voltage
- n High Bandwidth: 1MHz
- n Programmable Current Limit
- n Low Dropout Voltage: 260mV
- n Output Voltage Range: 0V to 15V
- n Programmable Power Good
- n Fast Start-Up Capability
- n Precision Enable/UVLO
- n Parallelable for Lower Noise and Higher Current
- n Internal Current Limit with Foldback
- n Minimum Output Capacitor: 10µF Ceramic
- n Reverse-Battery and Reverse-Current Protection

## 20V, 500mA, Ultralow Noise, Ultrahigh PSRR Linear Regulator

## DESCRIPTION

The LT ® 3045 is a high performance low dropout linear regulator  featuring  ADI's  ultralow  noise  and  ultrahigh PSRR  architecture for powering noise sensitive applications. Designed as a precision current reference followed by a high performance voltage buffer , the LT3045 can be easily paralleled to further reduce noise, increase output current and spread heat on the PCB.

The device supplies 500mA at a typical 260mV dropout voltage. Operating quiescent current is nominally 2.2mA and  drops  to  &lt;&lt;1µA  in  shutdown.  The  LT3045's  wide output voltage range (0V to 15V) while maintaining unitygain operation provides virtually constant output noise, PSRR, bandwidth and load regulation, independent of the programmed output voltage. Additionally, the regulator features programmable current limit, fast start-up capability and programmable power good to indicate output voltage regulation.

The LT3045 is stable with a minimum 10µF ceramic output capacitor .  Built-in  protection  includes  reverse-battery  protection, reverse-current protection, internal current limit with foldback and thermal limit with hysteresis.

All registered trademarks and trademarks are the property of their respective owners.

## PAD LAYOUT/LABELS

<!-- image -->

## DIE PAD DESCRIPTIONS

Die center is the reference location 0.0µm x 0.0µm. Pad coordinates are to the center of each pad. Die edges may contain cosmetic damage from the die separation process. These are not considered a reliability issue.

Table 2. Pad Name/Function Description/Pad Coordinates

| PAD LABEL   | DESCRIPTION                              |   X-Pos (µm) |   Y-Pos (µm) |
|-------------|------------------------------------------|--------------|--------------|
| -           | Center of Die                            |          0   |          0   |
| ILIM        | Current Limit Programming Pin            |       -607.5 |       -369   |
| PG          | Power Good                               |       -637.5 |       -206.5 |
| EN/UV       | Enable/UVLO                              |       -660   |        -86   |
| IN1         | Regulator Power Supply Pin               |        -86.5 |        807   |
| IN2         | Regulator Power Supply Pin               |        -86.5 |        679   |
| IN3         | Regulator Power Supply Pin               |       -604.5 |        282   |
| OUT2        | Output                                   |        135   |       1008   |
| OUT1        | Output                                   |        135   |        478   |
| OUTS        | Output Sense                             |        637.5 |        -82.5 |
| GND         | Ground                                   |        667   |       -287   |
| GND         | Ground                                   |        674.5 |       -423.5 |
| SET         | SET . Inverting Input of Error Amplifier |        637.5 |       -548.5 |
| PGFB        | Power Good Feedback                      |        637.5 |       -673.5 |

## DIE CROSS REFERENCE

| FINISHED PART NUMBER   | ORDER DICE PART NUMBER   |
|------------------------|--------------------------|
| LT3045                 | LT3045 DICE              |
| LT3045                 | LT3045 DWF               |

Table 1. Die Physical Characteristics

| PARAMETER             | VALUE           | UNITS   |
|-----------------------|-----------------|---------|
| Die Dimensions        | 2311.4 x 1574.8 | µm      |
| Die Thickness         | 8               | mils    |
| Bond Pad Opening Size | 80 x 80         | µm      |
| Top Metal Composition | AlSiCu          |         |
| Backside Metal        | Gold            |         |
| Backside Potential    | Ground          |         |

## ELECTRICAL CHARACTERISTICS Specifications are at T A  = 25°C.

| PARAMETER                                                                | CONDITIONS                                                                                                                                                                                                                                                                                                                                                                                                                                  | TYP                 | MAX   | UNITS                           |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|-------|---------------------------------|
| Input Voltage Range                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                             |                     | 20    | V                               |
| Minimum IN Pin Voltage (Note 2)                                          | I LOAD = 500mA, V IN UVLO Rising V IN UVLO Hysteresis                                                                                                                                                                                                                                                                                                                                                                                       | 1.78 75             | 2     | V mV                            |
| Output Voltage Range                                                     | V IN > V OUT                                                                                                                                                                                                                                                                                                                                                                                                                                |                     | 15    | V                               |
| SET Pin Current (I SET )                                                 | V IN = 2V, I LOAD = 1mA, V OUT = 1.3V 2V < V IN < 20V, 0V < V OUT < 15V, 1mA < I LOAD < 500mA (Note 3)                                                                                                                                                                                                                                                                                                                                      | 100 100             | 101   | µA µA                           |
| Fast Start-Up Set Pin Current                                            | V PGFB = 289mV, V IN = 2.8V, V SET = 1.3V                                                                                                                                                                                                                                                                                                                                                                                                   | 2                   |       | mA                              |
| Output Offset Voltage V OS (V OUT - V SET ) (Note 4)                     | V IN = 10V, I LOAD = 1mA, V OUT = 1.3V                                                                                                                                                                                                                                                                                                                                                                                                      |                     | 1     | mV                              |
| Load Regulation: ∆I SET                                                  | I LOAD = 1mA to 500mA, V IN = 2V, V OUT = 1.3V                                                                                                                                                                                                                                                                                                                                                                                              | 3                   |       | nA                              |
| Load Regulation: ∆V OS                                                   | I LOAD = 1mA to 500mA, V IN = 2V, V OUT = 1.3V (Note 4)                                                                                                                                                                                                                                                                                                                                                                                     | 0.1                 |       | mV                              |
| Dropout Voltage                                                          | I LOAD = 1mA, 50mA                                                                                                                                                                                                                                                                                                                                                                                                                          | 220                 |       | mV                              |
| Dropout Voltage                                                          | I LOAD = 300mA (Note 5)                                                                                                                                                                                                                                                                                                                                                                                                                     | 220                 |       | mV                              |
|                                                                          | I LOAD = 500mA (Note 5)                                                                                                                                                                                                                                                                                                                                                                                                                     | 260                 |       | mV                              |
| GND Pin Current V IN = V OUT(NOMINAL) (Note 6)                           | I LOAD = 10µA I LOAD = 1mA I LOAD = 50mA I LOAD = 100mA I LOAD = 500mA                                                                                                                                                                                                                                                                                                                                                                      | 2.2 2.4 3.5 4.3 15  | 4 5.5 | mA mA mA mA mA                  |
| Output Noise Spectral Density (Notes 4, 8)                               | I LOAD = 500mA, Frequency = 10Hz, C OUT = 10µF, C SET = 0.47µF, V OUT = 3.3V I LOAD = 500mA, Frequency = 10Hz, C OUT = 10µF, C SET = 4.7µF, 1.3V ≤ V OUT ≤ 15V I LOAD = 500mA, Frequency = 10kHz, C OUT = 10µF, C SET = 0.47µF, 1.3V ≤ V OUT ≤ 15V I LOAD = 500mA, Frequency = 10kHz, C OUT = 10µF, C SET = 0.47µF, 0V ≤ V OUT < 1.3V                                                                                                       | 500 70 2 5          |       | nV/√ Hz nV/√ Hz nV/√ Hz nV/√ Hz |
| Output RMS Noise (Notes 4, 8)                                            | I LOAD = 500mA, BW = 10Hz to 100kHz, C OUT = 10µF, C SET = 0.47µF, V OUT = 3.3V I LOAD = 500mA, BW = 10Hz to 100kHz, C OUT = 10µF, C SET = 4.7µF, 1.3V ≤ V OUT ≤ 15V I LOAD = 500mA, BW = 10Hz to 100kHz, C OUT = 10µF, C SET = 4.7µF, 0V ≤ V OUT < 1.3V                                                                                                                                                                                    | 2.5 0.8 1.8         |       | µV RMS µV RMS µV RMS            |
| Ripple Rejection 1.3V ≤ V OUT ≤ 15V V IN - V OUT = 2V (Avg) (Notes 4, 8) | V RIPPLE = 500mV P-P , f RIPPLE = 120Hz, I LOAD = 500mA, C OUT = 10µF, C SET = 4.7µF V RIPPLE = 150mV P-P , f RIPPLE = 10kHz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF V RIPPLE = 150mV P-P , f RIPPLE = 100kHz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF V RIPPLE = 150mV P-P , f RIPPLE = 1MHz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF V RIPPLE = 80mV P-P , f RIPPLE = 10MHz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF | 117 90 77 76 53     |       | dB dB dB dB dB                  |
| Ripple Rejection 0V ≤ V OUT < 1.3V V IN - V OUT = 2V (Avg) (Notes 4, 8)  | V RIPPLE = 500mV P-P , f RIPPLE = 120Hz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF V RIPPLE = 50mV P-P , f RIPPLE = 10kHz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF V RIPPLE = 50mV P-P , f RIPPLE = 100kHz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF V RIPPLE = 50mV P-P , f RIPPLE = 1MHz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF V RIPPLE = 50mV P-P , f RIPPLE = 10MHz, I LOAD = 500mA, C OUT = 10µF, C SET = 0.47µF   | 104 85 72 64 54     |       | dB dB dB dB dB                  |
| EN/UV Pin Threshold                                                      | EN/UV Trip Point Rising (Turn-On), V IN = 2V                                                                                                                                                                                                                                                                                                                                                                                                | 1.24                | 1.32  | V                               |
| EN/UV Pin Hysteresis                                                     | EN/UV Trip Point Hysteresis, V IN = 2V                                                                                                                                                                                                                                                                                                                                                                                                      | 130                 |       | mV                              |
| EN/UV Pin Current                                                        | V EN/UV = 1.24V, V IN = 20V                                                                                                                                                                                                                                                                                                                                                                                                                 | 0.03                |       | µA                              |
| Quiescent Current in                                                     | V IN = 6V                                                                                                                                                                                                                                                                                                                                                                                                                                   | 0.3                 |       | µA                              |
| Shutdown (V EN/UV = 0V) Internal Current Limit                           |                                                                                                                                                                                                                                                                                                                                                                                                                                             | 710                 |       | mA                              |
| (Note 12) Programmable Current Limit                                     | V IN = 2V, V OUT = 0V V IN = 12V, V OUT = 0V V IN = 20V, V OUT = 0V Programming Scale Factor: 2V < V IN < 20V (Note 11) V IN = 2V, V OUT = 0V, R ILIM = 300Ω V IN = 2V, V OUT = 0V, R ILIM = 1.5kΩ                                                                                                                                                                                                                                          | 700 330 150 500 100 |       | mA mA mA • kΩ mA mA             |

<!-- image -->

## ELECTRICAL CHARACTERISTICS specifications are at T A  = 25°C.

| PARAMETER                       | CONDITIONS                                                                                                                                                                                                                                                                  | MIN   | TYP       | MAX   | UNITS    |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------|-------|----------|
| PGFB Trip Point                 | PGFB Trip Point Rising                                                                                                                                                                                                                                                      |       | 300       |       | mV       |
| PGFB Hysteresis                 | PGFB Trip Point Hysteresis                                                                                                                                                                                                                                                  |       | 7         |       | mV       |
| PGFB Pin Current                | V IN = 2V, V PGFB = 300mV                                                                                                                                                                                                                                                   |       | 25        |       | nA       |
| PG Output Low Voltage           | I PG = 100µA                                                                                                                                                                                                                                                                |       | 30        |       | mV       |
| Reverse Output Current          | V IN = 0, V OUT = 5V, SET = Open                                                                                                                                                                                                                                            |       | 14        |       | µA       |
| Minimum Load Required (Note 13) | V OUT < 1V                                                                                                                                                                                                                                                                  | 10    |           |       | µA       |
| Thermal Shutdown                | T J Rising Hysteresis                                                                                                                                                                                                                                                       |       | 165 8     |       | °C °C    |
| Start-Up Time                   | V OUT(NOM) = 5V, I LOAD = 500mA, C SET = 0.47µF, V IN = 6V, V PGFB = 6V V OUT(NOM) = 5V, I LOAD = 500mA, C SET = 4.7µF, V IN = 6V, V PGFB = 6V V OUT(NOM) = 5V, I LOAD = 500mA, C SET = 4.7µF, V IN = 6V, R PG1 = 50kΩ, R PG2 = 700kΩ (with Fast Start-Up to 90% of V OUT ) |       | 55 550 10 |       | ms ms ms |

Note 1: Stresses beyond those listed under Absolute Maximum Ratings may cause permanent damage to the device. Exposure to any Absolute Maximum Rating condition for extended periods may affect device reliability and lifetime.

Note 2: The EN/UV pin threshold must be met to ensure device operation.

Note 3: Maximum junction temperature limits operating conditions. The regulated output voltage specification does not apply for all possible combinations of input voltage and output current, especially due to the internal current limit foldback which starts to decrease current limit at VIN  - V OUT  &gt; 12V. If operating at maximum output current, limit the input voltage range. If operating at the maximum input voltage, limit the output current range.

Note 4: OUTS ties directly to OUT .

Note 5: Dropout voltage is the minimum input-to-output differential voltage needed to maintain regulation at a specified output current. The dropout voltage is measured when output is 1% out of regulation. This definition results in a higher dropout voltage compared to hard dropout which is measured when V IN  = V OUT(NOMINAL) . For lower output voltages, below 1.5V, dropout voltage is limited by the minimum input voltage specification. Please consult the Typical Performance Characteristics for curves of dropout voltage as a function of output load current and temperature measured in a typical application circuit.

Note 6: GND pin current is tested with V IN  = V OUT(NOMINAL)  and a current source load. Therefore, the device is tested while operating in dropout. This is the worst-case GND pin current. GND pin current decreases at higher input voltages. Note that GND pin current does not include SET pin or ILIM pin current but Quiescent current does include them.

Note 7: SET and OUTS pins are clamped using diodes and two 25Ω series resistors. For less than 5ms transients, this clamp circuitry can carry more than the rated current. Refer to Applications Information for more information.

Note 8: Adding a capacitor across the SET pin resistor decreases output voltage noise. Adding this capacitor bypasses the SET pin resistor's thermal noise as well as the reference current's noise. The output noise then equals the error amplifier noise. Use of a SET pin bypass capacitor also increases start-up time.

Note 9: The LT3045 is tested and specified under pulsed load conditions such that T J  ≈ T A . The LT3045E is 100% tested at 25°C. High junction temperatures degrade operating lifetimes. Operating lifetime is derated at junction temperatures greater than 125°C.

Note 10: Parasitic diodes exist internally between the ILIM, PG, PGFB, SET , OUTS, and OUT pins and the GND pin. Do not drive these pins more than 0.3V below the GND pin during a fault condition. These pins must remain at a voltage more positive than GND during normal operation.

Note 11: The current limit programming scale factor is specified while the internal backup current limit is not active. Note that the internal current limit has foldback protection for V IN - V OUT  differentials greater than 12V.

Note 12: The internal back-up current limit circuitry incorporates foldback protection that decreases current limit for V IN  - V OUT  &gt; 12V. Some level of output current is provided at all V IN - V OUT differential voltages. Consult the Typical Performance Characteristics graph for current limit vs V IN  - V OUT .

Note 13: For output voltages less than 1V, the LT3045 requires a 10µA minimum load current for stability.

Note 14: Maximum OUT-to-OUTS differential is guaranteed by design.

## ABSOLUTE MAXIMUM RATINGS

| (Note 1)                                                                     |                                                                          |
|------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| IN Pin Voltage .........................................................±22V | OUTS Pin Voltage (Note 10)...........................-0.3V, 16V          |
| EN/UV Pin Voltage ..................................................±22V     | OUTS Pin Current (Note 7) ................................. ±20mA        |
| IN-to-EN/UV Differential..........................................±22V       | OUT Pin Voltage (Note 10).............................-0.3V, 16V         |
| PG Pin Voltage (Note 10) ...............................-0.3V, 22V           | OUT-to-OUTS Differential (Note 14)....................... ±1.2V          |
| ILIM Pin Voltage (Note 10)...............................-0.3V, 1V           | IN-to-OUT Differential .............................................±22V |
| PGFB Pin Voltage (Note 10) ...........................-0.3V, 22V             | IN-to-OUTS Differential...........................................±22V   |
| SET Pin Voltage (Note 10)..............................-0.3V, 16V            | Output Short-Circuit Duration.......................... Indefinite       |
| SET Pin Current (Note 7) .................................... ±20mA          | Operating Junction Temperature Range (Note 9)                            |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device. Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

<!-- image -->

For more information www.analog.com