<!-- lastmod 2022-08-02 -->
<!-- image -->

<!-- image -->

## 500Msps, 8-Bit ADC with Track/Hold

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX101A ECL-compatible, 500Msps, 8-bit analogto-digital  converter  (ADC) allows accurate digitizing of analog signals from DC to 250MHz (Nyquist frequency). Dual monolithic converters, driven by the track/hold (T/H), operate on opposite clock edges (time interleaved). Designed with Maxim's proprietary advanced bipolar processes, the MAX101A contains a high-performance T/H amplifier and two quantizers in an 84-pin ceramic flat pack.

The innovative design of the internal T/H ensures an exceptionally wide 1.2GHz input bandwidth and aperture delay uncertainty of less than 2ps, resulting in a high 7.0 effective bits at the Nyquist frequency. Special comparator output design and decoding circuitry reduce out-of-sequence code errors. The probability of erroneous codes due to metastable states is reduced to less than 1 error per 10 15 clock cycles. And, unlike other ADCs that can have errors resulting in false full-scale or zero-scale outputs, the MAX101A keeps the error magnitude to less than 1LSB.

The analog input is designed for either differential or single-ended use with a ±250mV range. Sense pins for the reference input allow full-scale calibration of the input range or facilitate ratiometric use.

Phase adjustment is available to adjust the relative sampling of the converter halves for optimizing converter  performance. Input clock phasing is also available for  interleaving  several  MAX101As for higher effective sampling rates.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ 500Msps Conversion Rate
- ♦ 7.0 Effective Bits Typical at 250MHz
- ♦ 1.2GHz Analog Input Bandwidth
- ♦ Less than ±1/2LSB INL
- ♦ 50 Ω Differential or Single-Ended Inputs
- ♦ ±250mV Input Signal Range
- ♦ Ratiometric Reference Inputs
- ♦ Dual Latched Output Data Paths
- ♦ Low Error Rate, Less than 10 -15 Metastable States
- ♦ 84-Pin Ceramic Flat Pack

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

High-Speed Digital Instrumentation

High-Speed Signal Processing

Medical Systems

Radar/Signal Processing

High-Energy Physics

Communications

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE   | PIN-PACKAGE                          |
|-------------|---------------|--------------------------------------|
| MAX101ACFR* | 0°C to +70°C  | 84 Ceramic Flat Pack (with heatsink) |

*Contact factory for 84-pin ceramic flat pack without heatsink.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Functional Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## 500Msps, 8-Bit ADC with Track/Hold

## ABSOLUTE MAXIMUM RATINGS

| Supply Voltages (Note 1)                                                                    |
|---------------------------------------------------------------------------------------------|
| V CC ...........................................................................0V to +7V   |
| V EE .............................................................................-7V to 0V |
| V CC - V EE .........................................................................+12V   |
| Analog Input Voltage .............................................................±2V       |
| Reference Voltage (VA RT , VB RT )...........................-0.3V to +1.5V                 |
| Reference Voltage (VA RB , VB RB ) ..........................-1.5V to +0.3V                 |
| Clock Input Voltage (V IH , V IL ).....................................-2.3V to 0V          |

| DIV10 Input Voltage (V IH , V IL ).......................................V EE to 0V   |
|---------------------------------------------------------------------------------------|
| Output Current, (I OUT(max) )                                                         |
| 100°C < T J <120°C.........................................................12mA       |
| Operating Temperature Range...............................0°C to +70°C                |
| Operating Junction Temperature (Note 2)............0°C to +120°C                      |
| Storage Temperature Range.............................-65°C to +150°C                 |
| Lead Temperature (soldering, 10sec) .............................+250°C               |

Note 1: The digital control inputs are diode protected. However, limited protection is provided on other pins. Permanent damage may occur on unconnected units under high-energy electrostatic fields. Keep unused units in supplied conductive carrier or shunt the terminals together.

Note 2: Typical thermal resistance, junction-to-case R θ JC = 5°C/W and thermal resistance, junction to ambient (MAX101ACFR) R θ JA =12°C/W, if 200 lineal ft/min airflow is provided. See Package Information.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VEE = -5.2V, VCC = +5V, RL = 100 Ω to -2V, VART, VBRT = 0.95V, VARB, VBRB = -0.95V, TA = +25°C, unless otherwise noted. TMIN to TMAX = 0°C to +70°C.)  (Note 3)

| PARAMETER                      | SYMBOL                 | CONDITIONS                                                     | CONDITIONS                                                     | MIN                    | TYP                    | MAX                    | UNITS                  |
|--------------------------------|------------------------|----------------------------------------------------------------|----------------------------------------------------------------|------------------------|------------------------|------------------------|------------------------|
| ACCURACY                       |                        |                                                                |                                                                |                        |                        |                        |                        |
| Resolution                     |                        |                                                                |                                                                | 8                      |                        |                        | Bits                   |
| Integral Nonlinearity (Note 4) | INL                    | AData, BData                                                   | T A = +25°C                                                    |                        |                        | ±0.50                  | LSB                    |
| Integral Nonlinearity (Note 4) | INL                    | AData, BData                                                   | T A = T MIN to T MAX                                           |                        |                        | ±0.75                  | LSB                    |
| Differential Nonlinearity      | DNL                    | AData, BData, no missing codes                                 | T A = +25°C                                                    |                        |                        | ±0.75                  | LSB                    |
| Differential Nonlinearity      | DNL                    | AData, BData, no missing codes                                 | T A = T MIN to T MAX                                           |                        |                        | ±0.85                  | LSB                    |
| DYNAMIC SPECIFICATIONS         | DYNAMIC SPECIFICATIONS | DYNAMIC SPECIFICATIONS                                         | DYNAMIC SPECIFICATIONS                                         | DYNAMIC SPECIFICATIONS | DYNAMIC SPECIFICATIONS | DYNAMIC SPECIFICATIONS | DYNAMIC SPECIFICATIONS |
| Effective Bits                 | ENOB                   | f CLK = 500MHz, V IN = 95% full scale (Note 5)                 | f AIN = 10MHz                                                  |                        | 7.6                    |                        | Bits                   |
| Effective Bits                 | ENOB                   | f CLK = 500MHz, V IN = 95% full scale (Note 5)                 | f AIN = 125MHz                                                 |                        | 7.1                    |                        | Bits                   |
| Effective Bits                 | ENOB                   | f CLK = 500MHz, V IN = 95% full scale (Note 5)                 | f AIN = 250MHz                                                 | 6.7                    | 7.0                    |                        | Bits                   |
| Signal-to-Noise Ratio          | SNR                    | f AIN = 125MHz, f CLK = 500MHz, V IN = 95% full scale (Note 6) | f AIN = 125MHz, f CLK = 500MHz, V IN = 95% full scale (Note 6) |                        | 44.5                   |                        | dB                     |
| Maximum Conversion Rate        | f CLK                  | (Note 7)                                                       | (Note 7)                                                       | 500                    |                        |                        | Msps                   |
| Analog Input Bandwidth         | BW3dB                  |                                                                |                                                                |                        | 1.2                    |                        | GHz                    |
| Aperture Width                 | t AW                   | Figure 4                                                       | Figure 4                                                       |                        | 270                    |                        | ps                     |
| Aperture Delay                 | t AD                   | Figure 4                                                       | Figure 4                                                       |                        | 1                      |                        | ns                     |
| Aperture Jitter                | t AJ                   | Figure 4                                                       | Figure 4                                                       |                        | 2                      |                        | ps                     |
| ANALOG INPUT                   | ANALOG INPUT           | ANALOG INPUT                                                   | ANALOG INPUT                                                   | ANALOG INPUT           | ANALOG INPUT           | ANALOG INPUT           | ANALOG INPUT           |
| Input Voltage Range            | V IN                   | AIN+ to AIN-, Table 2, T A = T MIN to T MAX                    | Full scale                                                     | 205                    |                        | 290                    | mV                     |
| Input Voltage Range            | V IN                   | AIN+ to AIN-, Table 2, T A = T MIN to T MAX                    | Zero scale                                                     | -290                   |                        | -205                   | mV                     |
| Input Offset Voltage           | V IO                   | AIN+, AIN-, T A = T MIN to T MAX                               | AIN+, AIN-, T A = T MIN to T MAX                               | -23                    |                        | 23                     | mV                     |
| Least Significant Bit Size     | LSB                    | T A = T MIN to T MAX                                           | T A = T MIN to T MAX                                           | 1.65                   |                        | 2.35                   | mV                     |
| Input Resistance               | R I                    | AIN+, AIN-, to GND                                             | AIN+, AIN-, to GND                                             | 49                     |                        | 51                     | Ω                      |
| Input Resistance               |                        | Temperature Coefficient                                        | Temperature Coefficient                                        | 0.008                  | 0.008                  | 0.008                  | Ω /°C                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 500Msps, 8-Bit ADC with Track/Hold

## ELECTRICAL CHARACTERISTICS (continued)

(VEE = -5.2V, VCC = +5V, RL = 100 Ω to -2V, VART, VBRT = 0.95V, VARB, VBRB = -0.95V, TA = +25°C, unless otherwise noted. TMIN to TMAX = 0°C to +70°C.) (Note 3)

| PARAMETER                                           | SYMBOL                 | CONDITIONS                                              | CONDITIONS                                              | MIN                | TYP                | MAX                | UNITS              |
|-----------------------------------------------------|------------------------|---------------------------------------------------------|---------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| REFERENCE INPUT                                     |                        |                                                         |                                                         |                    |                    |                    |                    |
| Reference String Resistance                         | R REF                  | VA RT to VA RB                                          | VA RT to VA RB                                          | 100                |                    | 190                | Ω                  |
| Reference String Resistance Temperature Coefficient |                        |                                                         |                                                         |                    | 0.02               |                    | Ω /°C              |
| LOGIC INPUTS                                        |                        |                                                         |                                                         |                    |                    |                    |                    |
| Digital Input Low Voltage                           | V IL                   | CLK, CLK , T A = T MIN to T MAX                         | CLK, CLK , T A = T MIN to T MAX                         |                    |                    | -1.50              | V                  |
| Digital Input High Voltage                          | V IH                   | CLK, CLK , T A = T MIN to T MAX                         | CLK, CLK , T A = T MIN to T MAX                         | -1.1               |                    |                    | V                  |
| Digital Input High Current                          | I IH                   | DIV10 = 0V, T A = T MIN to T MAX                        | DIV10 = 0V, T A = T MIN to T MAX                        | 1.1                |                    | 3.1                | mA                 |
| Input Bias Current                                  | I B                    | PH ADJ = 0V, T A = T MIN to T MAX                       | PH ADJ = 0V, T A = T MIN to T MAX                       | -40                |                    | 40                 | µA                 |
| Clock Input Bias Current                            | I CLK                  | CLK, CLK = -0.8V (no termination), T A = T MIN to T MAX | CLK, CLK = -0.8V (no termination), T A = T MIN to T MAX | -50                |                    | 50                 | µA                 |
| LOGIC OUTPUTS (Note 8)                              | LOGIC OUTPUTS (Note 8) | LOGIC OUTPUTS (Note 8)                                  |                                                         |                    |                    |                    |                    |
| Digital Output Low Voltage                          | V OL                   | AData, BData                                            | T A = +25°C                                             | -1.95              |                    | -1.60              | V                  |
| Digital Output Low Voltage                          | V OL                   | AData, BData                                            | T A = T MIN to T MAX                                    | -1.95              |                    | -1.50              | V                  |
| Digital Output Low Voltage                          | V OL                   | DCLK, DCLK                                              | T A = +25°C                                             | -1.3               |                    | -1.00              | V                  |
| Digital Output Low Voltage                          | V OL                   | DCLK, DCLK                                              | T A = T MIN to T MAX                                    | -1.4               |                    | -0.9               | V                  |
| Digital Output High Voltage                         | V OH                   | AData, BData, DCLK, DCLK                                | T A = +25°C                                             | -1.02              |                    | -0.70              | V                  |
| Digital Output High Voltage                         | V OH                   | AData, BData, DCLK, DCLK                                | T A = T MIN to T MAX                                    | -1.10              |                    | -0.60              | V                  |
| Digital Output Voltage                              | V OH - V OL            | DCLK, DCLK , T A = T MIN to T MAX                       | DCLK, DCLK , T A = T MIN to T MAX                       | 275                |                    | 445                | mV                 |
| POWER REQUIREMENTS                                  | POWER REQUIREMENTS     | POWER REQUIREMENTS                                      | POWER REQUIREMENTS                                      | POWER REQUIREMENTS | POWER REQUIREMENTS | POWER REQUIREMENTS | POWER REQUIREMENTS |
| Positive Supply Current                             | I VCC                  | V CC = 5.0V                                             | T A = +25°C                                             | 415                |                    | 855                | mA                 |
| Positive Supply Current                             | I VCC                  | V CC = 5.0V                                             | T A = T MIN to T MAX                                    |                    |                    | 910                | mA                 |
| Negative Supply Current                             | I VEE                  | V EE = -5.2V                                            | T A = +25°C                                             | -895               |                    | -500               | mA                 |
| Negative Supply Current                             | I VEE                  | V EE = -5.2V                                            | T A = T MIN to T MAX                                    | -935               |                    |                    | mA                 |
| Common-Mode Rejection Ratio                         | CMRR                   | V INCM = ±0.5V                                          | T A = T MIN to T MAX                                    | 35                 |                    |                    | dB                 |
| Power-Supply Rejection Ratio                        | PSRR                   | V CC (nom) = ±0.25V T A = T MIN to T MAX                | V CC (nom) = ±0.25V V EE (nom) = ±0.25V                 | 40 40              |                    |                    | dB                 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 500Msps, 8-Bit ADC with Track/Hold

## TIMING CHARACTERISTICS

(VEE = -5.2V, VCC = +5V, RL = 100 Ω to -2V, VART, VBRT = 0.95V, VARB, VBRB = -0.95V, TA = +25°C, unless otherwise noted.)

| PARAMETER                         | SYMBOL   | CONDITIONS                                                                   | CONDITIONS                                                                   |   MIN |   TYP |   MAX | UNITS        |
|-----------------------------------|----------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|-------|-------|-------|--------------|
| Clock Pulse Width Low             | t PWL    | CLK, CLK                                                                     | CLK, CLK                                                                     |   0.9 |       |   2.5 | ns           |
| Clock Pulse Width High            | t PWH    | CLK, CLK                                                                     | CLK, CLK                                                                     |   0.9 |       |   2.5 | ns           |
| CLK to DCLK Propagation Delay     | t PD1    | DIV10 = 0, Figures 1 and 2                                                   | DIV10 = 0, Figures 1 and 2                                                   |   1.2 |   2.3 |   3.4 | ns           |
| DCLK to A/BData Propagation Delay | t PD2    | DIV10 = 0, Figures 1 and 2                                                   | DIV10 = 0, Figures 1 and 2                                                   |   0.7 |   1.3 |   1.8 | ns           |
| Rise Time                         | t R      | 20% to 80%                                                                   | DCLK                                                                         |       |   300 |       | ps           |
| Rise Time                         | t R      | 20% to 80%                                                                   | DATA                                                                         |       |   500 |       | ps           |
| Fall Time                         | t F      | 20% to 80%                                                                   | DCLK                                                                         |       |   300 |       | ps           |
| Fall Time                         | t F      | 20% to 80%                                                                   | DATA                                                                         |       |   800 |       | ps           |
| Pipeline Delay (Latency)          | t NPD    | Divide-by-1 mode See Figures 2, 3 Divide-by-1 mode, Figures 2 and 3, Table 1 | Divide-by-1 mode See Figures 2, 3 Divide-by-1 mode, Figures 2 and 3, Table 1 |    15 |       |    15 | Clock Cycles |

Note 3: All devices are 100% production tested at +25°C and are guaranteed by design for TA = TMIN to TMAX as specified.

Note 4: Deviation from best-fit straight line. See Integral Nonlinearity section.

Note 5: See the Signal-to-Noise Ratio and Effective Bits section in the Definitions of Specifications .

Note 6: SNR calculated from effective bits performance using the following equation:  SNR(dB) = 1.76 + 6.02 x effective bits.

Note 7: Clock pulse width minimum requirements tPWL and tPWH must be observed to achieve stated performance.

Note 8: Outputs terminated through 100 Ω to -2.0V.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(VEE = -5.2V, VCC = +5V, RL = 100 Ω to -2V, VART, VBRT = 0.95V, VARB, VBRB = -0.95V, TA = +25°C, unless otherwise noted.)

MAX101 TOC1

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 500Msps, 8-Bit ADC with Track/Hold

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(VEE = -5.2V, VCC = +5V, RL = 100 Ω to -2V, VART, VBRT = 0.95V, VARB, VBRB = -0.95V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 500Msps, 8-Bit ADC with Track/Hold

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(VEE = -5.2V, VCC = +5V, RL = 100 Ω to -2V, VART, VBRT = 0.95V, VARB, VBRB = -0.95V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 500Msps, 8-Bit ADC with Track/Hold

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN                                                                                              | NAME   | FUNCTION                                                                                                                                                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                                                                                | PAD    | Internal connection, leave open.                                                                                                                                                                                                                                                                     |
| 2, 62                                                                                            | CLK    | Complementary Differential Clock Inputs. Can be driven from standard 10KH ECL with the following considerations: Internally, pins 2, 62 and 3, 61 are the ends of a 50 Ω transmission line. Either end can be driven with the other end terminated with 50 Ω to -2V. See Typical Operating Circuit . |
| 3, 61                                                                                            | CLK    | Complementary Differential Clock Inputs. Can be driven from standard 10KH ECL with the following considerations: Internally, pins 2, 62 and 3, 61 are the ends of a 50 Ω transmission line. Either end can be driven with the other end terminated with 50 Ω to -2V. See Typical Operating Circuit . |
| 4, 7, 15, 18, 24, 27, 30, 34, 37, 40, 46, 49, 57, 60, 64, 67, 68, 70, 71, 74, 77, 78, 79, 82, 84 | GND    | Power-Supply Ground                                                                                                                                                                                                                                                                                  |
| 5, 59                                                                                            | TRK1   | Phasing inputs (normally left open). See Applications Information section.                                                                                                                                                                                                                           |
| 6, 58                                                                                            | TRK1   | Phasing inputs (normally left open). See Applications Information section.                                                                                                                                                                                                                           |
| 8, 21, 43, 56, 81                                                                                | V CC   | Positive Power Supply, +5V ±5% nominal                                                                                                                                                                                                                                                               |
| 9                                                                                                | VB RB  | 'B' side negative reference voltage input (Note 9)                                                                                                                                                                                                                                                   |
| 10                                                                                               | VB RBS | 'B' side negative reference voltage sense (Note 9)                                                                                                                                                                                                                                                   |
| 11                                                                                               | TP4    | Internal connection, leave pin open.                                                                                                                                                                                                                                                                 |
| 12                                                                                               | TP3    | Internal connection, leave pin open.                                                                                                                                                                                                                                                                 |
| 13                                                                                               | VB RTS | 'B' side positive reference voltage sense (Note 9)                                                                                                                                                                                                                                                   |
| 14                                                                                               | VB RT  | 'B' side positive reference voltage input (Note 9)                                                                                                                                                                                                                                                   |
| 16, 48, 63                                                                                       | N.C.   | No Connect-no internal connection to these pins.                                                                                                                                                                                                                                                     |
| 29                                                                                               | SUB    | Circuit Substrate contact. This pin must be connected to V EE .                                                                                                                                                                                                                                      |
| 31                                                                                               | DCLK   | Complementary Differential Clock Outputs. Used to synchronize following circuitry: Outputs A0-A7 are valid after DCLK's rising edge. B0-B7 output data are valid after DCLK's falling edge (see Figure 1                                                                                             |
| 33                                                                                               | DCLK   | for output timing information).                                                                                                                                                                                                                                                                      |
| 32, 69, 80                                                                                       | V EE   | Negative Power Supply, -5.2V ±5% nominal                                                                                                                                                                                                                                                             |
| 35                                                                                               | DIV10  | Divide by 10 mode. Leave open for normal operation. Selects test mode when grounded.                                                                                                                                                                                                                 |
| 36, 38, 39, 41, 42, 44, 45, 47                                                                   | A7-A0  | AData and BData Outputs. A0 and B0 are the LSBs, and A7 and B7 are the MSBs. AData and BData outputs conform to ECL logic swings and drive 100 Ω transmission lines. Terminate with 100 Ω to -2V (120 Ω for Tj > +100°C). See Figures 1-3.                                                           |
| 28, 26, 25, 23, 22, 20, 19, 17                                                                   | B7-B0  | AData and BData Outputs. A0 and B0 are the LSBs, and A7 and B7 are the MSBs. AData and BData outputs conform to ECL logic swings and drive 100 Ω transmission lines. Terminate with 100 Ω to -2V (120 Ω for Tj > +100°C). See Figures 1-3.                                                           |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 500Msps, 8-Bit ADC with Track/Hold

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description (continued)

| PIN    | NAME   | FUNCTION                                                                                                                                                                                                 |
|--------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 50     | VA RT  | 'A' side positive reference voltage input (Note 9)                                                                                                                                                       |
| 51     | VA RTS | 'A' side positive reference voltage sense (Note 9)                                                                                                                                                       |
| 52     | TP1    | Internal connection, leave pin open.                                                                                                                                                                     |
| 53     | TP2    | Internal connection, leave pin open.                                                                                                                                                                     |
| 54     | VA RBS | 'A' side negative reference voltage sense (Note 9)                                                                                                                                                       |
| 55     | VA RB  | 'A' side negative reference voltage input (Note 9)                                                                                                                                                       |
| 65     | TP5    | Internal connection, leave pin open.                                                                                                                                                                     |
| 66     | TP6    | Internal connection, leave pin open.                                                                                                                                                                     |
| 72, 73 | AIN+   | Analog Inputs, internally terminated with 50 Ω to ground. Full-scale linear input range is approximately ±250mV. Drive AIN+ and AIN- differentially for best high-frequency performance.                 |
| 75, 76 | AIN-   | Analog Inputs, internally terminated with 50 Ω to ground. Full-scale linear input range is approximately ±250mV. Drive AIN+ and AIN- differentially for best high-frequency performance.                 |
| 83     | PH ADJ | Phase adjustment for T/H. Normally connected to ground. A phase adjustment of approximately ±18ps can be made by varying this pin's bias point to optimize interleaving between sides A and B (Note 10). |

Note 9: VART, VARB, VBRT, and VBRB should be adjusted separately from a well bypassed reference circuit to ensure proper amplitude and offset matching. The sense connections to each of these terminals allows precision setting of the reference voltage. The reference ladder is similar for both converter halves (check electrical section for values). Any noise on these terminals will severely reduce overall performance.

Note 10: Good results are obtained by connecting the PHADJ input to ground. Improve performance by applying a voltage between ±1.25V to this input. The time that the 'A' T/H bridge samples relative to the time that the 'B' T/H bridge samples can be varied through a ±18ps range.

Figure 1.  Output Timing, Normal Mode (DIV10 = OPEN)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 500Msps, 8-Bit ADC with Track/Hold

Figure 2.  Output Timing, Clock to Data, Normal Mode (DIV10 = OPEN)

<!-- image -->

Figure 3.  Output Timing, Test Mode (DIV10 = GND)

<!-- image -->

## 500Msps, 8-Bit ADC with Track/Hold

## \_\_\_\_\_\_Definitions of Specifications

## Signal-to Noise Ratio and Effective Bits

Signal-to-noise ratio (SNR) is the ratio between the RMS amplitude of the fundamental input frequency to the RMS amplitude of all other analog-to-digital (A/D) output signals. The theoretical minimum A/D noise is caused by quantization error and is a direct result of the ADC's resolution:  SNR = (6.02N + 1.76)dB, where N is the number of effective bits of resolution. Therefore, a perfect 8-bit ADC can do no better than 50dB. The FFT plots in the Typical Operating Characteristics show the output level in various spectral bands.

Effective  bits  is  calculated  from  a  digital  record  taken from the ADC under test. The quantization error of the ideal  converter  equals the total  error  of  the  device.  In addition to ideal quantization error, other sources of error  include  all  DC  and  AC  nonlinearities,  clock  and aperture jitter, missing output codes, and noise. Noise on references and supplies also degrades effective bits performance.

The ADC's input is sine-wave filtered with an anti-aliasing filter  to  remove  any  harmonic  content.  The  digital record taken from this signal is compared against a mathematically generated sine wave. DC offsets, phase, and amplitudes of the mathematical model are adjusted until a best-fit  sine  wave  is  found.  After  subtracting this sine wave from the digital record, the residual error remains. The RMS value of the error is applied in  the  following  equation  to  yield  the  ADC's  effective bits.

<!-- formula-not-decoded -->

where N is the resolution of the converter. In this case, N = 8.

The worst-case error for any device will be at the converter's maximum clock rate with the analog input near the Nyquist rate (one-half the input clock rate).

## Aperture Width and Jitter

Aperture width is the time the T/H circuit takes to disconnect the hold capacitor from the input circuit (i.e., to turn  off  the  sampling  bridge  and  put  the  T/H  in  hold mode). Aperture jitter is the sample-to-sample variation in aperture delay (Figure 4).

## Error Rates

Errors resulting from metastable states may occur when the analog input voltage, at the time the sample is taken, falls close to the decision point for any one of the input comparators. The resulting output code for many typical converters can be incorrect, including false full- or zero-scale output. The MAX101A's unique design reduces the magnitude of this type of error to 1LSB, and reduces the probability of the error occurring to less than one in every 10 15 clock cycles. If the MAX101A were operated at 500MHz, 24 hours a day, this would translate to less than one metastable state error every 46 days.

Figure 4.  T/H Aperture Timing

<!-- image -->

## Integral Nonlinearity

Integral nonlinearity is the deviation of the transfer function from a reference line measured in fractions of 1LSB using a 'best straight line' determined by a least square curve fit.

## Differential Nonlinearity

Differential nonlinearity (DNL) is the difference between the measured LSB step and an ideal LSB step size between adjacent code transitions. DNL is expressed in LSBs and is calculated using the following equation:

<!-- formula-not-decoded -->

where VMEAS - 1 is the measured value of the previous code.

A DNL specification of less than 1LSB guarantees no missing codes and a monotonic transfer function.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 500Msps, 8-Bit ADC with Track/Hold

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Converter Operation

The parallel or 'flash' architecture used by the MAX101A provides the fastest multibit conversion of all common integrated ADC designs. The basic element of a flash, as with all other ADC architectures, is the comparator, which has a positive input, a negative input, and an output. If the voltage at the positive input is higher than the negative  input  (connected to a reference), the output will be high. If the positive input voltage is lower than the reference, the output will be low. A typical n-bit flash consists of 2 n - 1 comparators with negative inputs evenly spaced at 1LSB increments from the bottom to the top of the reference ladder. For n = 8, there are 255 comparators.

For any input voltage, all the comparators with negative inputs connected to the reference ladder below the input voltage will have outputs of 1 and all comparators with  negative inputs above the input voltage will have outputs of 0. Decode logic is provided to convert this information into a parallel n-bit digital word (the output) corresponding to the number of LSBs (minus 1) that the input voltage is above the bottom of the ladder.

The comparators contain latch circuitry and are clocked. This allows the comparators to function as described previously when, for example, clock is low. When clock goes high (samples) the comparator will latch and hold its state until the clock goes low again.

The MAX101A uses a monolithic, dual-interleaved parallel  quantizer chip with two separate 8-bit converters. These converters deliver results to the A and B output latches on alternate negative edges of the input clock.

## Track/Hold

As with all ADCs, if the input waveform is changing rapidly during the conversion, the effective bits and SNR will decrease. The MAX101A has an internal track/hold (T/H) that increases attainable effective-bits performance and allows more accurate capture of analog data at high conversion rates.

The internal T/H circuit provides two important circuit functions for the MAX101A:

- 1) Its  nominal  voltage  gain  of  4  reduces  the  input  driving signal to ±250mV differential (assuming a ±0.95V reference).
- 2) It  provides  a  differential  50 Ω input  that  allows  easy interface to the MAX101A.

<!-- image -->

## Table 1.  Output Mode Control

| DIV10   |   DCLK* (MHz) | MODE               | DESCRIPTION                                                                                                                                           |
|---------|---------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| OPEN    |           250 | Normal Divide by 2 | AData and BData valid on oppo- site DCLK edges (AData on rise, BData on fall).                                                                        |
| GND     |            50 | Test Divide by 10  | AData and BData valid on oppo- site DCLK edges (AData on rise, BData on fall). Data sampled at input CLK rate but 4 out of every 5 samples discarded. |

* Input clocks (CLK, CLK ) = 500MHz for all above combinations.  In all modes, the output clock DCLK will be a 50% duty-cycle signal.

## Data Flow

The MAX101A's internal T/H amplifier samples the analog input voltage for the ADC to convert. The T/H is split into  two sections that operate on alternate negative clock edges. The input clock, CLK, is conditioned by the T/H and fed to the A/D section. The output clock, DCLK, used for output data timing, will be divided by 2 or  10  from  the  input  clock  (Table  1).  This  results  in  an output data rate of 250Mbps on each output port in normal mode and 50Mbps in test mode. The differential inputs, AIN+ and AIN-, are tracked continuously between data samples. When a negative strobe edge is sensed, one-half of the T/H goes into hold mode (Figure 4). When the strobe is low, the just-acquired sample is presented to the ADC's input comparators. Internal processing of the sampled data takes an additional 15 clock cycles before it is available at the outputs, AData and BData. See Figures 1-3 for timing.

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Analog Input Ranges

Although the normal operating range is ±250mV, the MAX101A can be operated with up to ±500mV on each input with respect to ground. This extended input level includes the analog signal and any DC common-mode voltage.

To obtain full-scale digital  output  with  differential input drive, a nominal +250mV must be applied between AIN+ and AIN-. That is, AIN+ = +125mV and AIN- = -125mV (with no DC offset). Mid-scale digital output code occurs when there is no voltage difference across the analog inputs. Zero-scale digital output code, with differential -250mV drive, occurs when AIN+ = -125mV and AIN- = +125mV. Table 2 shows how the output of the converter stays at all ones (full scale) when over-ranged or all zeros (zero scale) when underranged.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 500Msps, 8-Bit ADC with Track/Hold

## Table 2.  Input Voltage Range

| INPUT        |   AIN+ (mV) |   AIN- (mV) | OUTPUT CODE     | MSB to LSB   |
|--------------|-------------|-------------|-----------------|--------------|
| Differential |        +125 |        -125 | 1 1 1 1 1 1 1 1 | full scale   |
| Differential |           0 |           0 | 1 0 0 0 0 0 0 0 | mid scale    |
| Differential |        -125 |        +125 | 0 0 0 0 0 0 0 0 | zero scale   |
| Single Ended |        +250 |           0 | 1 1 1 1 1 1 1 1 | full scale   |
| Single Ended |           0 |           0 | 1 0 0 0 0 0 0 0 | mid scale    |
| Single Ended |        -250 |           0 | 0 0 0 0 0 0 0 0 | zero scale   |

* An offset VIO, as specified in the DC electrical parameters, will be present at the input.  Compensate for this offset by adjusting the reference voltage.  Offsets may be different between side A and side B.

For single-ended operation:

- 1) Apply a DC offset to one of the analog inputs, or leave one input open. (Both AIN+ and AIN- are terminated internally with 50 Ω to analog ground.)
- 2) Drive the other input with a ±250mV + offset to obtain either full- or zero-scale digital output. If a DC common-mode offset is used, the total voltage swing allowed is ±500mV (analog signal plus offset with respect to ground).

## Reference

The ADC's reference resistor is a Kelvin-sensed, resistor  string  that  sets  the  ADC's  LSB  size  and  dynamic operating range. Normally, the top and bottom of this string are driven with an external buffer amplifier. It will need to supply approximately 19mA due to the 100 Ω minimum resistor string impedance. A ±0.95V reference voltage is normally applied to inputs VART, VBRT, VARB, and VBRB. The reference inputs VARTS, VARBS, VBRTS, and VBRBS allow Kelvin sensing of the applied voltages to increase precision.

An RC network at the ADC's reference terminals is needed for best performance. This network consists of a 33 Ω resistor connected in series with the buffer output that drives the reference. A 0.47µF capacitor must be connected near the resistor at the buffer's output (see Typical Operating Circuit ).  This  resistor  and capacitor combination should be located within 0.5 inches of the MAX101A package. Any noise on these pins will directly affect the code uncertainty and degrade the ADC's effective-bits performance.

Figure 5.  Reference Ladder

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 500Msps, 8-Bit ADC with Track/Hold

## CLK and DCLK

All  input  and  output  clock  signals  are  differential.  The input clocks, CLK and CLK , are the primary timing signals for the MAX101A. CLK (pins 2, 62) and CLK (pins 3, 61) are fed to the internal circuitry through an internal 50 Ω transmission line. One set of CLK, CLK inputs should be driven and the other pair terminated by 50 Ω to  -2V.  Either  set  of  inputs  can  be  used  as  the  driven inputs (input lines are balanced) for easy circuit connection. A minimum pulse width (tPWL) is required for CLK and CLK (Figures 1-3).

For best performance and consistent results, use a lowphase-jitter clock source for CLK and CLK . Phase jitter larger than 2ps from the input clock source reduces the converter's effective bits performance and causes i nconsistent  results.  The  clock  supplied  to  the MAX101A is internally divided by two, reshaped, and buffered. This divided clock becomes the internal signal used as strobes for the converters.

DCLK and DCLK are output clock signals derived from the input clocks and are used for external timing of the AData and BData outputs. (AData is valid after the rising edge of DCLK, and BData is valid after the falling edge.)  They are fixed at one-half the rate of the input clocks in normal mode (Table 1). The MAX101A is characterized to work with 500MHz maximum input clock frequencies. See Typical Operating Circuit .

## Output Mode Control (DIV10)

When DIV10 is grounded, it enables the test mode, where the input incoming clock is divided by ten. This reduces the output data and clock rates by a factor of 5,  allowing  the  output  clock  duty  cycle  to  remain  at 50%. The clock to output phasing remains the same and four out of every five sampled input values are discarded.

When left open, this input (DIV10) is pulled low by internal  circuitry  and  the  converter  functions  in  its  normal mode.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Layout, Grounding, and Power Supplies

A +5V ±5% supply as well as a -5.2V ±5% supply is needed for proper operation. Bypass the VEE and VCC supply pins to GND with high-quality 0.1µF and 0.001µF ceramic capacitors located as close to the package as possible. Connect all ground pins to a ground plane to optimize noise immunity and device accuracy. Turn on the fan before connecting the power supplies. See Package Information for the required airflow.

## Phase Adjust

This control pin affects the point in time that one-half of the converter samples the input signal relative to the other half. PHADJ is normally connected to ground (0V), but can be adjusted over a ±1.25V range that typically provides a ±18ps adjustment between the 'A' side T/H bridge strobe and the 'B' side T/H bridge strobe.

## Interleaving (Input Clock Phasing)

To interleave two MAX101As it is necessary to know on which positive edge of the input clock data will change. At power-up, the clock edge from which AData and BData are synchronized is undetermined. The converter can work from a specific input clock edge, as described in the following paragraph.

TRK1 and TRK1 are differential inputs that are used in addition to the normal input clock (CLK) to set data phasing. A signal at one-half the input clock rate with the proper setup and hold times (setup and hold typically 300ps) is applied to these inputs. Choose AData by applying a logic '1' to TRK1 ('0' to TRK1 )  before CLK's negative transition. Choose BData by applying a logic  '0'  to  TRK1  before  CLK's  negative  edge  ('1'  to TRK1 ).  Voltages at the TRK1 input between ±50mV are interpreted as logic '1' and voltages between -350mV and -500mV are interpreted as logic '0'.

## 500Msps, 8-Bit ADC with Track/Hold

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 500Msps, 8-Bit ADC with Track/Hold

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 500Msps, 8-Bit ADC with Track/Hold

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

<!-- image -->

<!-- image -->

| DIM   | MILLIMETERS   | MILLIMETERS   | INCHES   | INCHES   |
|-------|---------------|---------------|----------|----------|
|       | MIN           | MAX           | MIN      | MAX      |
| A     | 17.272        | 18.288        | 0.680    | 0.720    |
| A1    | 1.041         | 1.270         | 0.041    | 0.050    |
| A2    | 3.048         | 3.302         | 0.120    | 0.130    |
| b     | 0.406         | 0.508         | 0.016    | 0.020    |
| C     | 0.228         | 0.279         | 0.009    | 0.011    |
| D     | 29.184        | 29.794        | 1.149    | 1.173    |
| D1    | 44.196        | 44.704        | 1.740    | 1.760    |
| D2    | 25.298        | 25.502        | 0.996    | 1.004    |
| D3    | 28.448        | 28.829        | 1.120    | 1.135    |
| e     | 1.270         | BSC           | 0.050    | BSC      |
| E     | 29.184        | 29.794        | 1.149    | 1.173    |
| E1    | 44.196        | 44.704        | 1.740    | 1.760    |
| E2    | 25.298        | 25.502        | 0.996    | 1.004    |
| E3    | 28.194        | 28.702        | 1.110    | 1.130    |
| S     | 1.930         | 2.184         | 0.076    | 0.086    |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

<!-- image -->