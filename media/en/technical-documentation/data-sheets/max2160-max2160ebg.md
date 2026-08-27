<!-- lastmod 2022-08-04 -->
<!-- image -->

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

## General Description

The MAX2160/EBG tuner ICs are designed for use in Japanese mobile digital TV (ISDB-T single-segment) applications. The devices directly convert UHF band signals to a low-IF using a broadband I/Q downconverter.  The operating frequency range extends from 470MHz to 770MHz.

The MAX2160/EBG support both I/Q low-IF interfaces as well as single low-IF interfaces, making the devices universal tuners for various digital demodulator IC implementations.

The MAX2160/EBG include an LNA, RF variable-gain amplifiers, I and Q downconverting mixers, low-IF variablegain amplifiers, and bandpass filters providing in excess of 42dB of image rejection. The parts are capable of operating with either high-side or low-side local oscillator (LO) injection. The MAX2160/EBG's variable-gain amplifiers provide in excess of 100dB of gain-control range.

The MAX2160/EBG also include fully monolithic VCOs and tank circuits, as well as a complete frequency synthesizer. The devices include a XTAL oscillator as well as a separate TCXO input buffer. The devices operate with XTAL/TCXO oscillators from 13MHz to 26MHz allowing the shared use of a VC-TCXO in cellular handset  applications.  Additionally,  a  divider  is  provided  for the  XTAL/TCXO oscillator allowing for simple and lowcost interfacing to various channel decoders.

The MAX2160/EBG are specified for operation from -40°C to +85°C and available in a 40-pin (6mm x 6mm) thin QFN lead-free plastic package with exposed paddle (EP), and in a 3.175mm x 3.175mm lead-free waferlevel package (WLP).

## Applications

## Features

- ♦ Low Noise Figure: &lt; 4dB Typical
- ♦ High Dynamic Range: -98dBm to 0dBm
- ♦ High-Side or Low-Side LO Injection
- ♦ Integrated VCO and Tank Circuits
- ♦ Low LO Phase Noise: Typical -88dBc/Hz at 10kHz
- ♦ Integrated Frequency Synthesizer
- ♦ Integrated Bandpass Filters
- ♦ 52dB Typical Image Rejection
- ♦ Single +2.7V to +3.3V Supply Voltage
- ♦ Three Low-Power Modes
- ♦ Two-Wire, I 2 C-Compatible Serial Control Interface
- ♦ Very Small Lead-Free WLP Package

## Pin Configurations/ Functional Diagrams

Pin Configurations/Functional Diagrams continued at end of data sheet.

<!-- image -->

Cell Phone Mobile TVs Personal Digital Assistants (PDAs)

Pocket TVs

## Ordering Information

| PART        | TEMP RANGE     | PIN-PACKAGE     |
|-------------|----------------|-----------------|
| MAX2160ETL  | -40°C to +85°C | 40 Thin QFN-EP* |
| MAX2160ETL+ | -40°C to +85°C | 40 Thin QFN-EP* |
| MAX2160EBG+ | -40°C to +85°C | WLP             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## ABSOLUTE MAXIMUM RATINGS

| All VCC_ Pins to GND............................................-0.3V to +3.6V            |
|-------------------------------------------------------------------------------------------|
| All Other Pins to GND.................................-0.3V to (V CC + 0.3V)              |
| RFIN, Maximum RF Input Power ....................................+10dBm                   |
| ESD Rating...........................................................................±1kV |
| Short-Circuit Duration IOUT, QOUT, CPOUT, XTALOUT, PWRDET, SDA,                           |
| TEST, LTC, VCOBYP ...........................................................10s          |

<!-- image -->

CAUTION! ESD SENSITIVE DEVICE

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## DC ELECTRICAL CHARACTERISTICS

(MAX2160 EV kit, VCC = +2.7V to +3.3V, VGC1 = VGC2 = 0.3V (maximum gain), no RF input signals at RFIN, baseband I/Os are open circuited and VCO is active with fLO = 767.714MHz, registers set according to the recommended default register conditions of Tables 2-11, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VCC = +2.85V, TA = +25°C, unless otherwise noted.) (Note 1)

| PARAMETER                             | CONDITIONS                                |            | MIN        | TYP        | MAX        | UNITS   |
|---------------------------------------|-------------------------------------------|------------|------------|------------|------------|---------|
| SUPPLY                                |                                           |            |            |            |            |         |
| Supply Voltage                        |                                           |            | 2.7        | 2.85       | 3.3        | V       |
| Supply Current (See Tables 15 and 16) | Receive mode, SHDN = V CC , BBL[1:0] = 00 |            | 44         |            | 53.5       | mA      |
| Supply Current (See Tables 15 and 16) | Standby mode, bit STBY = 1                |            | 2          |            | 4          | mA      |
| Supply Current (See Tables 15 and 16) | Power-down mode, bit PWDN = 1, EPD = 0    |            | 5          |            | 40         | µA      |
| Supply Current (See Tables 15 and 16) | Shutdown mode, SHDN = GND                 |            | 0          |            | 10         | µA      |
| ANALOG GAIN-CONTROL INPUTS (GC1, GC2) | ANALOG GAIN-CONTROL INPUTS (GC1, GC2)     |            |            |            |            |         |
| Input Voltage Range                   | Maximum gain = 0.3V                       |            | 0.3        |            | 2.7        | V       |
| Input Bias Current                    |                                           |            | -15        |            | +15        | µA      |
| VCO TUNING VOLTAGE INPUT (VTUNE)      | VCO TUNING VOLTAGE INPUT (VTUNE)          |            |            |            |            |         |
| Input Voltage Range                   |                                           |            | 0.4        |            | 2.3        | V       |
| VTUNE ADC                             |                                           |            |            |            |            |         |
| Resolution                            |                                           |            |            | 3          |            | bits    |
| Input Voltage Range                   |                                           |            | 0.3        |            | 2.4        | V       |
| Reference Ladder Trip Point           | ADC read bits                             | 110 to 111 | V CC - 0.4 | V CC - 0.4 | V CC - 0.4 | V       |
| Reference Ladder Trip Point           | ADC read bits                             | 101 to 110 | 1.9        |            |            | V       |
| Reference Ladder Trip Point           | ADC read bits                             | 100 to 101 | 1.7        |            |            | V       |
| Reference Ladder Trip Point           | ADC read bits                             | 011 to 100 |            | 1.3        |            | V       |
| Reference Ladder Trip Point           | ADC read bits                             | 010 to 011 | 0.9        |            |            | V       |
| Reference Ladder Trip Point           | ADC read bits                             | 001 to 010 | 0.6        |            |            | V       |
| Reference Ladder Trip Point           | ADC read bits                             | 000 to 001 | 0.4        |            |            | V       |
| LOCK TIME CONSTANT OUTPUT (LTC)       | LOCK TIME CONSTANT OUTPUT (LTC)           |            |            |            |            |         |
| Source Current                        | Bit LTC = 0                               |            | 1          |            |            | µA      |
| Source Current                        | Bit LTC = 1                               |            | 2          |            |            | µA      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Continuous Power Dissipation (T A = +70°C)                                       |
|----------------------------------------------------------------------------------|
| 40-Pin Thin QFN (derate 35.7mW/°C above +70°C)....2857mW                         |
| WLP (derate 10.8mW/°C above +70°C).........................704mW                 |
| Operating Temperature Range ...........................-40°C to +85°C            |
| Junction Temperature......................................................+150°C |
| Storage Temperature Range.............................-65°C to +150°C            |
| Lead Temperature (soldering, 10s) .................................+300°C        |

## ISDB-T Single-Segment Low-IF Tuners

## DC ELECTRICAL CHARACTERISTICS (continued)

(MAX2160 EV kit, VCC = +2.7V to +3.3V, VGC1 = VGC2 = 0.3V (maximum gain), no RF input signals at RFIN, baseband I/Os are open circuited and VCO is active with fLO = 767.714MHz, registers set according to the recommended default register conditions of Tables 2-11, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VCC = +2.85V, TA = +25°C, unless otherwise noted.) (Note 1)

| PARAMETER                       | CONDITIONS                      | MIN                             | TYP MAX                         | UNITS                           |                                 |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| SHUTDOWN CONTROL ( SHDN )       | SHUTDOWN CONTROL ( SHDN )       | SHUTDOWN CONTROL ( SHDN )       | SHUTDOWN CONTROL ( SHDN )       | SHUTDOWN CONTROL ( SHDN )       | SHUTDOWN CONTROL ( SHDN )       |
| Input-Logic-Level High          |                                 | 0.7 x V CC                      |                                 | V                               |                                 |
| Input-Logic-Level Low           |                                 |                                 | 0.3 x V CC                      | V                               |                                 |
| 2-WIRE SERIAL INPUTS (SCL, SDA) | 2-WIRE SERIAL INPUTS (SCL, SDA) | 2-WIRE SERIAL INPUTS (SCL, SDA) | 2-WIRE SERIAL INPUTS (SCL, SDA) | 2-WIRE SERIAL INPUTS (SCL, SDA) | 2-WIRE SERIAL INPUTS (SCL, SDA) |
| Clock Frequency                 |                                 |                                 | 400                             | kHz                             |                                 |
| Input-Logic-Level High          |                                 | 0.7 x V CC                      |                                 | V                               |                                 |
| Input-Logic-Level Low           |                                 |                                 | 0.3 x V CC                      | V                               |                                 |
| Input Leakage Current           | Digital inputs = GND or V CC    | ±0.1                            | ±1                              | µA                              |                                 |
| 2-WIRE SERIAL OUTPUT (SDA)      | 2-WIRE SERIAL OUTPUT (SDA)      | 2-WIRE SERIAL OUTPUT (SDA)      | 2-WIRE SERIAL OUTPUT (SDA)      | 2-WIRE SERIAL OUTPUT (SDA)      | 2-WIRE SERIAL OUTPUT (SDA)      |
| Output-Logic-Level Low          |                                 | 0.2                             |                                 | V                               |                                 |

## AC ELECTRICAL CHARACTERISTICS

(MAX2160 EV kit, VCC = +2.7V to +3.3V, fRF = 767.143MHz, fLO = 767.714MHz, fBB = 571kHz, fXTAL = 16MHz, VGC1 = VGC2 = 0.3V (maximum gain), registers set according to the recommended default register conditions of Tables 2-11, RF input signals as specified,  baseband output load as specified, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VCC = +2.85V, TA = +25°C, unless otherwise noted.) (Note 1)

| PARAMETER                    | CONDITIONS                                 |   MIN | TYP   |   MAX | UNITS   |
|------------------------------|--------------------------------------------|-------|-------|-------|---------|
| MAIN SIGNAL PATH PERFORMANCE | MAIN SIGNAL PATH PERFORMANCE               |       |       |       |         |
| Input Frequency Range        |                                            |   470 |       |   770 | MHz     |
| Minimum Input Signal         | 13-segment input                           |       | -98   |       | dBm     |
| Maximum Voltage Gain         | CW tone, V GC1 = V GC2 = 0.3V, bit MOD = 1 |   102 |       |       | dB      |
| Minimum Voltage Gain         | CW tone, V GC1 = V GC2 = 2.7V, bit MOD = 0 |       |       |     4 | dB      |
| RF Gain-Control Range        | 0.3V < V GC1 < 2.7V                        |    38 | 43    |       | dB      |
| Baseband Gain-Control Range  | 0.3V < V GC2 < 2.7V                        |    57 | 67    |       | dB      |
| In-Band Input IP3            | (Note 2)                                   |       | +4    |       | dBm     |
| Out-of-Band Input IP3        | (Note 3)                                   |       | +16.7 |       | dBm     |
| Input IP2                    | (Note 4)                                   |       | +16   |       | dBm     |
| Input P 1dB                  | CW tone, V GC1 = V GC2 = 2.7V, bit MOD = 0 |       | 0     |       | dBm     |
| Noise Figure                 | V GC1 = V GC2 = 0.3V, T A = +25°C (Note 5) |       | 3.8   |     5 | dB      |
| Image Rejection              |                                            |    42 | 52    |       | dB      |
| Minimum RF Input Return Loss | f RF = 620MHz, 50 Ω system                 |       | 14    |       | dB      |
| LO Leakage at RFIN           |                                            |       | -100  |       | dBm     |
| IF POWER DETECTOR            | IF POWER DETECTOR                          |       |       |       |         |
| Resolution                   |                                            |       | 3     |       | bits    |
| Minimum RF Attack Point      | Power at RFIN                              |       | -62   |       | dBm     |
| Maximum RF Attack Point      | Power at RFIN                              |       | -48   |       | dBm     |
| Detector Bandwidth           | 3dB RF bandwidth                           |       | ±35   |       | MHz     |
| Output Compliance Range      |                                            |   0.3 |       |   2.7 | V       |
| Response Time                | C14 = 10nF                                 |       | 0.1   |       | ms      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## AC ELECTRICAL CHARACTERISTICS (continued)

(MAX2160 EV kit, VCC = +2.7V to +3.3V, fRF = 767.143MHz, fLO = 767.714MHz, fBB = 571kHz, fXTAL = 16MHz, VGC1 = VGC2 = 0.3V (maximum gain), registers set according to the recommended default register conditions of Tables 2-11, RF input signals as specified,  baseband output load as specified, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VCC = +2.85V, TA = +25°C, unless otherwise noted.) (Note 1)

| PARAMETER                                | CONDITIONS                                   | MIN   | TYP   | MAX   | UNITS   |
|------------------------------------------|----------------------------------------------|-------|-------|-------|---------|
| LOW-IF BANDPASS FILTERS                  | LOW-IF BANDPASS FILTERS                      |       |       |       |         |
| Center Frequency                         |                                              |       | 571   |       | kHz     |
| Frequency Response (Note 5)              | ±380kHz offset from center frequency         | -6    |       | -1.5  | dB      |
| Frequency Response (Note 5)              | 1.3MHz                                       |       | -36   |       | dB      |
| Group Delay Variation                    | Up to 1dB bandwidth                          |       | ±100  |       | ns      |
| BASEBAND OUTPUT CHARACTERISTICS          | BASEBAND OUTPUT CHARACTERISTICS              |       |       |       |         |
| Nominal Output-Voltage Swing             | R LOAD = 10k Ω &#124;&#124; 10pF             |       | 0.5   |       | V P-P   |
| I/Q Amplitude Imbalance                  | (Note 6)                                     |       |       | ±1.5  | dB      |
| I/Q Quadrature Phase Imbalance           |                                              |       |       | ±2    | deg     |
| Output Gain Step                         | Bit MOD transition from 0 to 1               |       | +7    |       | dB      |
| I/Q Output Impedance                     | Real Z O                                     |       | 30    |       | Ω       |
| FREQUENCY SYNTHESIZER                    | FREQUENCY SYNTHESIZER                        |       |       |       |         |
| RF-Divider Frequency Range               |                                              | 470   |       | 770   | MHz     |
| RF-Divider Range (N)                     |                                              | 829   |       | 5374  |         |
| Reference-Divider Frequency Range        |                                              | 13    |       | 26    | MHz     |
| Reference-Divider Range (R)              |                                              | 22    |       | 182   |         |
| Phase-Detector Comparison Frequency      |                                              | 1/7   |       | 4/7   | MHz     |
| PLL-Referred Phase Noise Floor           | T A = +25°C, f COMP = 285.714kHz             |       | -155  |       | dBc/Hz  |
| Comparison Frequency Spurious Products   | Bit EPB = 1                                  |       | -52   |       | dBc     |
| Charge-Pump Output Current (Note 5)      | Bits CP[1:0] = 00                            | 1.25  | 1.5   | 1.75  | mA      |
| Charge-Pump Output Current (Note 5)      | Bits CP[1:0] = 01                            | 1.65  | 2.0   | 2.35  | mA      |
| Charge-Pump Output Current (Note 5)      | Bits CP[1:0] = 10                            | 2.10  | 2.5   | 2.90  | mA      |
| Charge-Pump Output Current (Note 5)      | Bits CP[1:0] = 11                            | 2.50  | 3     | 3.50  | mA      |
| Charge-Pump Compliance Range             | ±10% variation from current at VTUNE = 1.35V | 0.4   |       | 2.2   | V       |
| Charge-Pump Source/Sink Current Matching | VTUNE = 1.35V                                | -10   |       | +10   | %       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## AC ELECTRICAL CHARACTERISTICS (continued)

(MAX2160 EV kit, VCC = +2.7V to +3.3V, fRF = 767.143MHz, fLO = 767.714MHz, fBB = 571kHz, fXTAL = 16MHz, VGC1 = VGC2 = 0.3V (maximum gain), registers set according to the recommended default register conditions of Tables 2-11, RF input signals as specified,  baseband output load as specified, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VCC = +2.85V, TA = +25°C, unless otherwise noted.) (Note 1)

| PARAMETER                                       | CONDITIONS                                      |                                                 | MIN                                             | TYP                                             | MAX                                             | UNITS                                           |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| VOLTAGE-CONTROLLED OSCILLATOR AND LO GENERATION | VOLTAGE-CONTROLLED OSCILLATOR AND LO GENERATION | VOLTAGE-CONTROLLED OSCILLATOR AND LO GENERATION | VOLTAGE-CONTROLLED OSCILLATOR AND LO GENERATION | VOLTAGE-CONTROLLED OSCILLATOR AND LO GENERATION | VOLTAGE-CONTROLLED OSCILLATOR AND LO GENERATION | VOLTAGE-CONTROLLED OSCILLATOR AND LO GENERATION |
| Guaranteed VCO Frequency Range                  | T A = -40°C to +85°C                            |                                                 | 1880                                            |                                                 | 3080                                            | MHz                                             |
| Guaranteed LO Frequency Range                   | T A = -40°C to +85°C                            |                                                 | 470                                             |                                                 | 770                                             | MHz                                             |
| Tuning Voltage Range                            |                                                 |                                                 | 0.4                                             |                                                 | 2.3                                             | V                                               |
| LO Phase Noise                                  | 0.4V < VTUNE < 2.3V, = -40°C to +85°C           | f OFFSET = 1kHz                                 | -80                                             | -80                                             | -80                                             | dBc/Hz                                          |
| LO Phase Noise                                  | 0.4V < VTUNE < 2.3V, = -40°C to +85°C           | f OFFSET = 10kHz                                | -87.5                                           | -87.5                                           | -87.5                                           | dBc/Hz                                          |
| LO Phase Noise                                  | T A                                             | f OFFSET = 100kHz                               | -107                                            | -107                                            | -107                                            | dBc/Hz                                          |
| LO Phase Noise                                  | 0.4V < VTUNE < 2.3V, = -40°C to +85°C           | f OFFSET = 1MHz                                 | -128                                            | -128                                            | -128                                            | dBc/Hz                                          |
| XTAL OSCILLATOR INPUT (TCXO AND XTAL)           | XTAL OSCILLATOR INPUT (TCXO AND XTAL)           | XTAL OSCILLATOR INPUT (TCXO AND XTAL)           | XTAL OSCILLATOR INPUT (TCXO AND XTAL)           | XTAL OSCILLATOR INPUT (TCXO AND XTAL)           | XTAL OSCILLATOR INPUT (TCXO AND XTAL)           | XTAL OSCILLATOR INPUT (TCXO AND XTAL)           |
| XTAL Oscillator Frequency Range                 | Parallel resonance mode crystal                 |                                                 | 13                                              |                                                 | 26                                              | MHz                                             |
| XTAL Minimum Negative Resistance                | 16MHz < f XTAL < 18MHz (Note 5)                 |                                                 | 885                                             | 885                                             | 885                                             | Ω                                               |
| XTAL Nominal Input Capacitance                  |                                                 |                                                 | 13.3                                            | 13.3                                            | 13.3                                            | pF                                              |
| TCXO Input Level                                | AC-coupled sine-wave input                      |                                                 | 0.4                                             |                                                 | 1.5                                             | V P-P                                           |
| TCXO Minimum Input Impedance                    |                                                 |                                                 | 10                                              | 10                                              | 10                                              | k Ω                                             |
| REFERENCE OSCILLATOR BUFFER OUTPUT (XTALOUT)    | REFERENCE OSCILLATOR BUFFER OUTPUT (XTALOUT)    | REFERENCE OSCILLATOR BUFFER OUTPUT (XTALOUT)    | REFERENCE OSCILLATOR BUFFER OUTPUT (XTALOUT)    | REFERENCE OSCILLATOR BUFFER OUTPUT (XTALOUT)    | REFERENCE OSCILLATOR BUFFER OUTPUT (XTALOUT)    | REFERENCE OSCILLATOR BUFFER OUTPUT (XTALOUT)    |
| Output Frequency Range                          |                                                 |                                                 | 1                                               |                                                 | 26                                              | MHz                                             |
| Output-Buffer Divider Range                     |                                                 |                                                 | 1                                               |                                                 | 26                                              |                                                 |
| Output-Voltage Swing                            |                                                 |                                                 | 0.7                                             | 0.7                                             | 0.7                                             | V P-P                                           |
| Output Load                                     |                                                 |                                                 | 200 &#124;&#124; 4                              | 200 &#124;&#124; 4                              | 200 &#124;&#124; 4                              | k Ω &#124;&#124; pF                             |
| Output Duty Cycle                               |                                                 |                                                 | 50                                              | 50                                              | 50                                              | %                                               |
| Output Impedance                                |                                                 |                                                 | 160                                             | 160                                             | 160                                             | Ω                                               |

- Note 2: In-band IIP3 is measured with two tones at fLO - 100kHz and fLO - 200kHz at a power level of -23dBm/tone. GC1 is set for maximum attenuation (VGC1 = 2.7V) and GC2 is adjusted to achieve 250mVP-P/tone at the I/Q outputs for an input desired level of -23dBm.
- Note 3: Out-of-band IIP3 is measured with two tones at fRF + 6MHz and fRF + 12MHz at a power level of -15dBm/tone. GC1 is set for maximum attenuation (VGC1 = 2.7V) and GC2 is adjusted to achieve 0.5VP-P at the I/Q outputs for an input desired level of -50dBm. fRF is set to 767MHz + 1/7MHz = 767.143MHz.
- Note 4: GC1 is set for maximum attenuation (VGC1 = 2.7V). GC2 is adjusted to give the nominal I/Q output voltage level (0.5VP-P) for a -50dBm desired tone at fRF = 550MHz. Two tones, 220MHz and 770MHz at -15dBm/tone, are then injected and the 571kHz IM2 levels are measured (with a 550.571MHz LO) at the I/Q outputs and IP2 is then calculated.
- Note 5: Guaranteed by design and characterization.
- Note 6: Guaranteed and tested at TA = +25°C and +85°C only.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Typical Operating Characteristics

(MAX2160 EV kit, TQFN package, VCC = +2.85V, default register settings, VGC1 = VCG2 = 0.3V, VIOUT = VQOUT = 0.5VP-P, f LO = 767.714MHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

## Typical Operating Characteristics (continued)

(MAX2160 EV kit, TQFN package, VCC = +2.85V, default register settings, VGC1 = VCG2 = 0.3V, VIOUT = VQOUT = 0.5VP-P, f LO = 767.714MHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

PHASE NOISE AT 10kHz OFFSET vs. CHANNEL FREQUENCY

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Typical Operating Characteristics (continued)

(MAX2160 EV kit, TQFN package, VCC = +2.85V, default register settings, VGC1 = VCG2 = 0.3V, VIOUT = VQOUT = 0.5VP-P, f LO = 767.714MHz, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

## Pin Description

| PIN                           | BUMP NO.                   | NAME    | DESCRIPTION                                                                                                                                                                                                                              |
|-------------------------------|----------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TQFN                          | WLP                        |         |                                                                                                                                                                                                                                          |
| 1, 11, 15, 21, 24, 28, 30, 31 | 29, 33, 34, 35, 36, 45, 46 | N.C.    | No Connection. Connect to the PC board ground plane.                                                                                                                                                                                     |
| 2                             | 2                          | TCXO    | High-Impedance Buffer for External TCXO. When ENTCXO is pulled high, this input is enabled for use with an external TCXO and the internal crystal oscillator is disabled. Requires a DC-blocking capacitor.                              |
| 3                             | 11                         | XTAL    | Crystal-Oscillator Interface. When ENTCXO is pulled low, this input is enabled for use with an external parallel resonance mode crystal. See the Typical Operating Circuit .                                                             |
| 4                             | -                          | GNDXTAL | Crystal-Oscillator Circuit Ground. Connect to the PC board ground plane.                                                                                                                                                                 |
| 5                             | 12                         | VCCXTAL | DC Power Supply for Crystal-Oscillator Circuits. Connect to a +2.85V low-noise supply. Bypass to GND with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections. |
| 6                             | 4                          | XTALOUT | Crystal Oscillator Buffer Output. A DC-blocking capacitor must be used when driving external circuitry.                                                                                                                                  |
| 7                             | 5                          | VCCDIG  | DC Power Supply for Digital Logic Circuits. Connect to a +2.85V low-noise supply. Bypass to GND with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections.      |
| 8                             | 14                         | SDA     | 2-Wire Serial Data Interface. Requires a pullup resistor to V CC .                                                                                                                                                                       |
| 9                             | 7                          | SCL     | 2-Wire Serial Clock Interface. Requires a pullup resistor to V CC .                                                                                                                                                                      |
| 10                            | 19                         | LTC     | PLL Lock Time Constant. LTC sources current to an external charging capacitor to set the time constant for the VCO autoselect (VAS) function. See the Loop Time Constant Pin section in the Applications Information .                   |
| 12                            | 9                          | VCCBIAS | DC Power Supply for Bias Circuits. Connect to a +2.85V low-noise supply. Bypass to GND with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections.               |
| 13                            | 17                         | RFIN    | Wideband 50 Ω RF Input. Connect to an RF source through a DC-blocking capacitor.                                                                                                                                                         |
| 14                            | 22                         | SHDN    | Device Shutdown. Logic-low turns off the entire device including the 2-wire compatible bus. SHDN overrides all software shutdown modes.                                                                                                  |
| 16                            | 24                         | VCCLNA  | DC Power Supply for LNA. Connect to a +2.85V low-noise supply. Bypass to GND with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections.                         |
| 17                            | 25                         | GC1     | RF Gain-Control Input. High-impedance analog input, with a 0.3V to 2.7V operating range. V GC1 = 0.3V corresponds to the maximum gain setting.                                                                                           |
| 18                            | 28                         | VCCMX   | DC Power Supply for RF Mixer Circuits. Connect to a +2.85V low-noise supply. Bypass to GND with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections.           |
| 19                            | 38                         | PWRDET  | Power-Detector Output. See the IF Power Detector section in the Applications Information .                                                                                                                                               |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Pin Description (continued)

| PIN   | BUMP NO.                        | NAME    | DESCRIPTION                                                                                                                                                                                                                           |
|-------|---------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TQFN  | WLP                             |         |                                                                                                                                                                                                                                       |
| 20    | 39                              | VCCFLT  | DC Power Supply for Baseband Filter Circuits. Connect to a +2.85V low-noise supply. Bypass to GND with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections. |
| 22    | 37                              | ENTCXO  | XTAL/TCXO Select. Logic-high enables the TCXO input and disables the XTAL input. Logic-low disables the TCXO input and enables the XTAL input. This pin is internally pulled up to V CC .                                             |
| 23    | 47                              | GC2     | Baseband Gain-Control Input. High-impedance analog input, with a 0.3V to 2.7V operating range. V GC2 = 0.3V corresponds to the maximum gain setting.                                                                                  |
| 25    | 44                              | IOUT    | In-Phase Low-IF Output. Requires a DC-blocking capacitor.                                                                                                                                                                             |
| 26    | -                               | GNDBB   | Ground for Baseband Circuits. Connect to the PC board ground plane.                                                                                                                                                                   |
| 27    | 43                              | QOUT    | Quadrature Low-IF Output. Requires a DC-blocking capacitor.                                                                                                                                                                           |
| 29    | 41                              | VCCBB   | DC Power Supply for Baseband Circuits. Connect to a +2.85V low-noise supply. Bypass to GND with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections.        |
| 32    | 30                              | VCOBYP  | Internal VCO Bias Bypass. Bypass directly to GNDVCO with a 470nF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections. See the Layout Considerations section.        |
| 33    | 26                              | VCCVCO  | DC Power Supply for VCO Circuits. Connect to a +2.85V low-noise supply. Bypass directly to GNDVCO with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections. |
| 34    | 23                              | GNDVCO  | VCO Circuit Ground. Connect to the PC board ground plane. See the Layout Considerations section.                                                                                                                                      |
| 35    | 32                              | VTUNE   | High-Impedance VCO Tune Input. Connect the PLL loop filter output directly to this pin with the shortest connection as possible.                                                                                                      |
| 36    | 20                              | GNDTUNE | Ground for VTUNE. Connect to the PC board ground plane. See the Layout Considerations section.                                                                                                                                        |
| 37    | 18                              | TEST    | Test Output. Used as a test output for various internal blocks. See Table 2.                                                                                                                                                          |
| 38    | 16                              | CPOUT   | Charge-Pump Output. Connect this output to the PLL loop filter input with the shortest connection possible.                                                                                                                           |
| 39    | 10                              | VCCCP   | DC Power Supply for Charge-Pump Circuits. Connect to a +2.85V low-noise supply. Bypass to GND with a 100pF capacitor connected as close to the pin as possible. Do not share capacitor ground vias with other ground connections.     |
| 40    | 1                               | GNDCP   | Charge-Pump Circuit Ground. Connect to the PC board ground plane. See the Layout Considerations section.                                                                                                                              |
| EP    | -                               | GND     | Exposed Paddle (TQFN Only). Solder evenly to the board's ground plane for proper operation.                                                                                                                                           |
| -     | 3, 6, 8, 13, 15, 27, 31, 40, 42 | GND     | Ground. Connect to the PC board ground plane.                                                                                                                                                                                         |
| -     | 21                              | GNDLNA  | Ground for LNA. Connect to ground with trace.                                                                                                                                                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

## Detailed Description

All registers must be written after power-up and no earlier than 100µs after power-up.

## Register Descriptions

The MAX2160/EBG include eight programmable registers and two read-only registers. The eight programma-

Table 1. Register Configuration

|                 | REGISTER      |             |                  | MSB       | MSB       | MSB       | MSB       | MSB       | MSB       | MSB       | LSB       |
|-----------------|---------------|-------------|------------------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
| REGISTER NUMBER | NAME          | READ/ WRITE | REGISTER ADDRESS | DATA BYTE | DATA BYTE | DATA BYTE | DATA BYTE | DATA BYTE | DATA BYTE | DATA BYTE | DATA BYTE |
|                 |               |             |                  | D7        | D6        | D5        | D4        | D3        | D2        | D1        | D0        |
| 1               | TEST          | WRITE       | 0x00             | TUN2      | TUN1      | TUN0      | FLTS      | MXSD      | D2        | D1        | D0        |
| 2               | PLL           | WRITE       | 0x01             | CP1       | CP0       | CPS       | EPB       | RPD       | NPD       | TON       | VAS       |
| 3               | VCO           | WRITE       | 0x02             | VCO1      | VCO0      | VSB2      | VSB1      | VSB0      | ADL       | ADE       | LTC       |
| 4               | CONTROL       | WRITE       | 0x03             | MOD       | BBL1      | BBL0      | HSLS      | PD2       | PD1       | PD0       | EPD       |
| 5               | XTAL DIVIDE   | WRITE       | 0x04             | XD4       | XD3       | XD2       | XD1       | XD0       | PWDN      | STBY      | QOFF      |
| 6               | R-DIVIDER     | WRITE       | 0x05             | R7        | R6        | R5        | R4        | R3        | R2        | R1        | R0        |
| 7               | N-DIVIDER MSB | WRITE       | 0x06             | N12       | N11       | N10       | N9        | N8        | N7        | N6        | N5        |
| 8               | N-DIVIDER LSB | WRITE       | 0x07             | N4        | N3        | N2        | N1        | N0        | X         | X         | X         |
| 9               | STATUS BYTE-1 | READ        | -                | X         | X         | X         | CP1       | CP0       | PWR       | VASA      | VASE      |
| 10              | STATUS BYTE-2 | READ        | -                | VCO1      | VCO0      | VSB2      | VSB1      | VSB0      | ADC2      | ADC1      | ADC0      |

## Table 2. Test Register

| BIT NAME   | BIT LOCATION (0 = LSB)   |   RECOMMENDED DEFAULT | FUNCTION                                                                                                                                                                                                                                                                                                                                                                               |
|------------|--------------------------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TUN[2:0]   | 7, 6, 5                  |                   000 | Set the baseband bandpass filter center frequency. This filter's center frequency is trimmed at the factory, but may be manually adjusted by clearing the FLTS bit and programming the TUN[2:0] bits as follows: 000 = 0.75 x f O 001 = 0.80 x f O 010 = 0.86 x f O 011 = 0.92 x f O 100 = f O (nominal center frequency of 571kHz) 101 = 1.08 x f O 110 = 1.19 x f O 111 = 1.32 x f O |
| FLTS       | 4                        |                     1 | Selects which registers set the baseband bandpass filter center frequency. 1 = selects internal factory-set register 0 = selects manual trim register TUN[2:0]                                                                                                                                                                                                                         |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

ble  registers  include  a  test  register,  a  PLL  register,  a VCO register, a control register, a XTAL divide register, an R-divider register, and two N-divider registers. The read-only registers include two status registers.

## ISDB-T Single-Segment Low-IF Tuners

## Table 2. Test Register (continued)

| BIT NAME   | BIT LOCATION (0 = LSB)   |   RECOMMENDED DEFAULT | FUNCTION                                                                                                                                                                                                                                                                                                                                           |
|------------|--------------------------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MXSD       | 3                        |                     0 | Used for factory trimming of the baseband filters. 1 = disables the quadrature mixers for filter tuning 0 = enables the quadrature mixers                                                                                                                                                                                                          |
| D[2:0]     | 2, 1, 0                  |                   000 | Control diagnostic features as follows: 000 = normal operation 001 = force charge-pump source current 010 = force charge-pump sink current 011 = force charge-pump high-impedance state 100 = power-detector RMS voltage at PWRDET 101 = N-divider output at TEST pin 110 = R-divider output at TEST pin 111 = local oscillator output at TEST pin |

## Table 3. PLL Register

| BIT NAME   | BIT LOCATION (0 = LSB)   |   RECOMMENDED DEFAULT | FUNCTION                                                                                                                                                                                                                                                         |
|------------|--------------------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CP[1:0]    | 7, 6                     |                    11 | Set the charge-pump current. 00 = ±1.5mA 01 = ±2mA 10 = ±2.5mA 11 = ±3mA                                                                                                                                                                                         |
| CPS        | 5                        |                     1 | Sets the charge-pump current selection mode between automatic and manual. 0 = charge-pump current is set manually through the CP[1:0] bits 1 = charge-pump current is automatically selected based on ADC read values in both VAS and manual VCO selection modes |
| EPB        | 4                        |                     1 | Controls the charge-pump prebias function. 0 = disables the charge-pump prebias function 1 = enables the charge-pump prebias function                                                                                                                            |
| RPD        | 3                        |                     0 | Sets the prebias on-time control from reference divider. 0 = 280ns 1 = 650ns                                                                                                                                                                                     |
| NPD        | 2                        |                     0 | Sets the prebias on-time control from VCO/LO divider. 0 = 500ns 1 = 1000ns                                                                                                                                                                                       |
| TON        | 1                        |                     0 | Sets the charge-pump on-time control. 0 = 2.5ns 1 = 5ns                                                                                                                                                                                                          |
| VAS        | 0                        |                     1 | Controls the VCO autoselect (VAS) function. 0 = disables the VCO autoselect function and allows manual VCO selection through the VCO[1:0] and VSB[2:0] bits 1 = enables the on-chip VCO autoselect state machine                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

## Table 4. VCO Register

| BIT NAME   | BIT LOCATION (0 = LSB)   |   RECOMMENDED DEFAULT | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                   |
|------------|--------------------------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VCO[1:0]   | 7, 6                     |                    11 | Control which VCO is activated when using manual VCO programming mode. This will also serve as the starting point for the VCO autoselect mode. 00 = select VCO 0 01 = select VCO 1 10 = select VCO 2 11 = select VCO 3                                                                                                                                                                                                     |
| VSB[2:0]   | 5, 4, 3                  |                   011 | Select a particular sub-band for each of the on-chip VCOs. Together with the VCO[2:0] bits a manual selection of a VCO and a sub-band can be made. This will also serve as the starting point for the VCO autoselect mode. 000 = select sub-band 0 001 = select sub-band 1 010 = select sub-band 2 011 = select sub-band 3 100 = select sub-band 4 101 = select sub-band 5 110 = select sub-band 6 111 = select sub-band 7 |
| ADL        | 2                        |                     0 | Enables or disables the VCO tuning voltage ADC latch when the VCO autoselect mode (VAS) is disabled. 0 = disables the ADC latch 1 = latches the ADC value                                                                                                                                                                                                                                                                  |
| ADE        | 1                        |                     0 | Enables or disables VCO tuning voltage ADC read when the VCO autoselect mode (VAS) is disabled. 0 = disables ADC read 1 = enables ADC read                                                                                                                                                                                                                                                                                 |
| LTC        | 0                        |                     0 | Sets the source current for the VAS time constant. 0 = 1µA 1 = 2µA                                                                                                                                                                                                                                                                                                                                                         |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Table 5. Control Register

| BIT NAME   | BIT LOCATION (0 = LSB)   |   RECOMMENDED DEFAULT | FUNCTION                                                                                                                                                                        |
|------------|--------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MOD        | 7                        |                     0 | Sets the modulation mode and the baseband gain step. 0 = selects QAM mode and disables the 7dB gain step 1 = selects QPSK mode and adds 7dB of gain in the baseband stages      |
| BBL[1:0]   | 6, 5                     |                    10 | Set the bias current for the baseband circuits to provide for fine linearity adjustments. 00 = lower linearity 01 = nominal linearity 10 = medium linearity 11 = high linearity |
| HSLS       | 4                        |                     1 | Selects between high-side and low-side LO injection. 0 = low-side injection 1 = high-side injection                                                                             |
| PD[2:0]    | 3, 2, 1                  |                   011 | Set the AGC attack point (at RFIN). 000 = -62dBm 001 = -60dBm 010 = -58dBm 011 = -56dBm 100 = -54dBm 101 = -52dBm 110 = -50dBm 111 = -48dBm                                     |
| EPD        | 0                        |                     0 | Enables or disables the power-detector circuit. 0 = disables the power-detector circuit for low-current mode 1 = enables the power-detector circuit                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

## Table 6. XTAL Divide

| BIT NAME   | BIT LOCATION (0 = LSB)   |   RECOMMENDED DEFAULT | FUNCTION                                                                                                                                                                                                                                                   |
|------------|--------------------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| XD[4:0]    | 7-3                      |                 00001 | Set the crystal divider ratio for XTALOUT. 00000 = XTALOUT buffer disabled (off) 00001 = divide-by-1 00010 = divide-by-2 00011 = divide-by-3 00100 = divide-by-4 00101 through 11110 = all divide values from 3 (00101) to 30 (11110) 11111 = divide-by-31 |
| PWDN       | 2                        |                     0 | Software power-down control. 0 = normal operation 1 = shuts down the entire chip but leaves the 2-wire bus active and maintains the current register states                                                                                                |
| STBY       | 1                        |                     0 | Software standby control. 0 = normal operation 1 = disables the signal path and frequency synthesizer leaving only the 2-wire bus, crystal oscillator, XTALOUT buffer, and XTALOUT buffer divider active                                                   |
| QOFF       | 0                        |                     0 | Enables and disables the Q-channel output. 0 = Q channel enabled 1 = Q channel disabled                                                                                                                                                                    |

## Table 7. R-Divider Register

| BIT NAME   | BIT LOCATION (0 = LSB)   | RECOMMENDED DEFAULT   | FUNCTION                                                                                                             |
|------------|--------------------------|-----------------------|----------------------------------------------------------------------------------------------------------------------|
| R[7:0]     | 7-0                      | 0x38                  | Set the PLL reference-divider (R) number. Default R-divider value is 56 decimal. R can range from 22 to 182 decimal. |

## Table 8. N-Divider MSB Register

| BIT NAME   | BIT LOCATION (0 = LSB)   | RECOMMENDED DEFAULT   | FUNCTION                                                                                                                                              |
|------------|--------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| N[12:5]    | 7-0                      | 0x53                  | Set the most significant bits of the PLL integer-divider number (N). Default integer-divider value is N = 2687 decimal. N can range from 829 to 5374. |

## Table 9. N-Divider LSB Register

| BIT NAME   | BIT LOCATION (0 = LSB)   | RECOMMENDED DEFAULT   | FUNCTION                                                                                                                                               |
|------------|--------------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| N[4:0]     | 7-3                      | 11111                 | Set the least significant bits of the PLL integer-divider number (N). Default integer-divider value is N = 2687 decimal. N can range from 829 to 5374. |
| X          | 2, 1, 0                  | X                     | Unused.                                                                                                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Table 10. Status Byte-1 Register

| BIT NAME   | BIT LOCATION (0 = LSB)   | FUNCTION                                                                                                                                                                                   |
|------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X          | 7, 6, 5                  | Unused.                                                                                                                                                                                    |
| CP[1:0]    | 4, 3                     | Reflect the charge-pump current setting. See Table 3 for CP[1:0] definition.                                                                                                               |
| PWR        | 2                        | Logic-high indicates power has been cycled, but the device has the default programming. A STOP condition while in read mode resets this bit.                                               |
| VASA       | 1                        | Indicates whether VCO automatic selection was successful. 0 = indicates the autoselect function is disabled or unsuccessful VCO selection 1 = indicates successful VCO automatic selection |
| VASE       | 0                        | Status indicator for the autoselect function. 0 = indicates the autoselect function is active 1 = indicates the autoselect process is inactive                                             |

## Table 11. Status Byte-2 Register

| BIT NAME   | BIT LOCATION (0 = LSB)   | FUNCTION                                                                                                                                                                                                 |
|------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VCO[1:0]   | 7, 6                     | Indicate which VCO has been selected by either the autoselect state machine or by manual selection when the VAS state machine is disabled. See Table 4 for VCO[1:0] definition.                          |
| VSB[2:0]   | 5, 4, 3                  | Indicate which sub-band of a particular VCO has been selected by either the autoselect state machine or by manual selection when the VAS state machine is disabled. See Table 4 for VSB[2:0] definition. |
| ADC[2:0]   | 2, 1, 0                  | Indicate the 3-bit ADC conversion of the VCO tuning voltage (VTUNE).                                                                                                                                     |

## 2-Wire Serial Interface

The MAX2160/EBG uses a 2-wire I 2 C-compatible serial interface consisting of a serial-data line (SDA) and a serial-clock line (SCL). SDA and SCL facilitate bidirectional  communication between the MAX2160/EBG and the master at clock frequencies up to 400kHz. The master initiates a data transfer on the bus and generates the SCL signal to permit data transfer. The MAX2160/EBG behave as a slave device that transfers and receives data to and from the master. SDA and SCL must be pulled high with external pullup resistors (1k Ω or greater) for proper bus operation.

One bit is transferred during each SCL clock cycle. A minimum of nine clock cycles is required to transfer a byte in or out of the MAX2160/EBG (8 bits and an ACK/NACK). The data on SDA must remain stable during the high period of the SCL clock pulse. Changes in SDA while SCL is high and stable are considered con- trol signals (see the START and STOP Conditions section). Both SDA and SCL remain high when the bus is not busy.

## START and STOP Conditions

The master initiates a transmission with a START condition (S), which is a high-to-low transition on SDA while SCL is high. The master terminates a transmission with a STOP condition (P), which is a low-to-high transition on SDA while SCL is high.

## Acknowledge and Not-Acknowledge Conditions

Data transfers are framed with an acknowledge bit (ACK) or a not-acknowledge bit (NACK). Both the master  and  the  MAX2160/EBG (slave) generate acknowledge bits. To generate an acknowledge, the receiving device must pull SDA low before the rising edge of the acknowledge-related clock pulse (ninth pulse) and keep it low during the high period of the clock pulse.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

To generate a not-acknowledge condition, the receiver allows SDA to be pulled high before the rising edge of the acknowledge-related clock pulse, and leaves SDA high  during  the  high  period  of  the  clock  pulse. Monitoring the acknowledge bits allows for detection of unsuccessful data transfers. An unsuccessful data transfer happens if a receiving device is busy or if a system fault has occurred. In the event of an unsuccessful data transfer, the bus master must reattempt communication at a later time.

## Slave Address

The MAX2160/EBG have a 7-bit slave address that must be sent to the device following a START condition to initiate communication. The slave address is internally programmed to 1100000. The eighth bit (R/ W ) following the 7-bit address determines whether a read or write operation will occur.

The MAX2160/EBG continuously await a START condition  followed  by  its  slave  address.  When the device recognizes its slave address, it acknowledges by pulling the SDA line low for one clock period; it is ready to  accept or send data depending on the R/ W bit (Figure 1).

## Write Cycle

When  addressed  with  a  write  command,  the MAX2160/EBG allow the master to write to a single register or to multiple successive registers.

A write cycle begins with the bus master issuing a START condition followed by the seven slave address bits and a write bit (R/ W = 0). The MAX2160/EBG issue an ACK if the slave address byte is successfully received. The bus master must then send to the slave the address of the first register it wishes to write to (see Table 1 for register addresses). If the slave acknowledges the address, the master can then write one byte to the register at the specified address. Data is written beginning with the most significant bit. The MAX2160/EBG again issue an ACK if the data is successfully written to the register. The master can continue to write data to the successive internal registers  with  the  MAX2160/EBG acknowledging each successful transfer, or it can terminate transmission by issuing a STOP condition. The write cycle will not terminate until the master issues a STOP condition.

Figure 2 illustrates an example in which registers 0 through 2 are written with 0x0E, 0xD8, and 0xE1, respectively.

<!-- image -->

Figure 1. MAX2160 Slave Address Byte

<!-- image -->

Figure 2. Example: Write Registers 0 through 2 with 0x0E, 0xD8, and 0xE1, Respectively

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

Figure 3. Example: Receive Data from Read Registers

| START   |   WRITE DEVICE ADDRESS |   R/W | ACK   | READ FROM STATUS BYTE-1 REGISTER   | ACK   | READ FROM STATUS BYTE-2 REGISTER   | ACK/ NACK   | STOP   |
|---------|------------------------|-------|-------|------------------------------------|-------|------------------------------------|-------------|--------|
| START   |                1100000 |     1 |       |                                    |       |                                    |             |        |

## Read Cycle

There are only two registers on the MAX2160/EBG that are  available  to  be  read  by  the  master.  When addressed with a read command, the MAX2160/EBG send back the contents of both read registers (STATUS BYTE-1 and STATUS BYTE-2).

A read cycle begins with the bus master issuing a START condition followed by the seven slave address bits and a read bit (R/ W = 1). If the slave address byte is  successfully  received, the MAX2160/EBG issue an ACK. The master then reads the contents of the STATUS BYTE-1 register, beginning with the most significant bit, and acknowledges if the byte is received successfully. Next, the master reads the contents of the STATUS BYTE-2 register. At this point the master can issue an ACK or NACK and then a STOP condition to terminate the read cycle.

Figure 3 illustrates an example in which the read registers are read by the master.

## Applications Information

## RF Input (RFIN)

The MAX2160/EBG are internally matched to 50 Ω and requires a DC-blocking capacitor (see the Typical Operating Circuit ).

## RF Gain Control (GC1)

The MAX2160/EBG feature a variable-gain low-noise amplifier that provides 43dB of RF gain-control range. The voltage control (VGC1) range is 0.3V (minimum attenuation) to 2.7V (maximum attenuation).

## IF Power Detector

The MAX2160/EBG include a true RMS power detector at  the  mixer output. The power-detector circuit is enabled or disabled with the EPD bit in the control register.  The  attack  point  can  be  set  through  the  PD[2:0]

bits in the control register (see Table 5 for a summary of attack point settings).

The PWRDET pin output can be configured to provide either  a  voltage  output  (directly  from  the  RMS  powerdetector stage) or current output (default) through the diagnostic bits D[2:0] in the test register.

## Closed-Loop RF Power Control

The default mode of the IF power detector is current output mode. Closed-loop RF power control is formed by connecting the PWRDET pin directly to the GC1 pin. A shunt capacitor to ground is added to set the closedloop response time (see the Typical Operating Circuit ). The recommended capacitor value of 10nF provides a response time of 0.1ms.

Closed-loop RF power control can also be formed using the baseband processor and the power detector in voltage output mode. In this configuration, the processor senses the power detector's output voltage and uses this information to drive the GC1 pin directly. Voltage output mode is enabled by setting the D[2:0] bits in the test register to 100. In voltage mode, the PWRDET pin outputs a scaled DC voltage proportional to the RF input power. For the RF input range of -62dBm to -48dBm, the DC output voltage ranges from 84mV to 420mV.

## High-Side and Low-Side LO Injection

The MAX2160/EBG allow selection between high-side and low-side LO injection through the HSLS bit in the control register. High-side injection is the default setting (HSLS = 1).

## Q-Channel Shutdown

The Q channel low-IF output of the MAX2160/EBG can be turned off with the QOFF bit in the XTAL divide register for use with single low-IF input demodulators (use I channel only). Turning off the Q channel reduces the supply current by approximately 3mA.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

## IF Filter Tuning

The center frequency of the baseband bandpass filter is  tuned  to  571kHz during production at the factory. However, the factory-set trim may be bypassed and the filter's  center  frequency  can  be  adjusted  through  the FLTS and TUN[2:0] bits in the test register. Setting the FLTS bit sets the filter's center frequency to the factoryset tuning, clearing the FLTS bit allows the filter's center frequency to be adjusted with the TUN[2:0] bits (see Table 2).

## Fixed IF Gain Step

To maintain the best possible sensitivity for both QPSK and QAM signals, the MAX2160/EBG include a control bit  (MOD) to increase the gain of the baseband stage by approximately 7dB. This gain step is intended to be used when receiving QPSK signals. Set the MOD bit to one in QPSK receive mode, set the MOD bit to zero in QAM receive mode.

## VCO Autoselect (VAS)

The MAX2160/EBG include four VCOs with each VCO having eight sub-bands. The local oscillator frequency can be manually selected by programming the VCO[1:0] and VSB[2:0] bits in the VCO register. The selected VCO and sub-band is reported in the STATUS BYTE-2 register (see Table 11).

Alternatively, the MAX2160/EBG can be set to automatically  choose a VCO and VCO sub-band. Automatic VCO selection is enabled by setting the VAS bit in the PLL register, and is initiated once the N-divider LSB register  word is loaded. In the event that only the Rdivider register or N-divider MSB register word is changed, the N-divider LSB word must also be loaded (last)  to  initiate  the  VCO  autoselect  function.  The  VCO and VCO sub-band that are programmed in the VCO[1:0] and VSB[2:0] bits serve as the starting point for the automatic VCO selection process.

Table 12. Charge-Pump Current Selection

|   VAS |   CPS | VASA   | CHARGE-PUMP VALUES (CP[1:0])      |
|-------|-------|--------|-----------------------------------|
|     0 |     0 | X      | Values programmed with 2-wire bus |
|     0 |     1 | X      | Values selected by ADC read       |
|     1 |     0 | X      | Values programmed with 2-wire bus |
|     1 |     1 | 0      | Values programmed with 2-wire bus |
|     1 |     1 | 1      | Values selected by ADC read       |

<!-- image -->

During the selection process, the VASE bit in the STATUS BYTE-2 register is cleared to indicate the automatic selection function is active. Upon successful completion, bits VASE and VASA are set and the VCO and sub-band selected are reported in the STATUS BYTE-2 register (see Table 11). If the search is unsuccessful, VASA is cleared and VASE is set. This indicates that searching has ended but no good VCO has been found, and occurs when trying to tune to a frequency outside the VCO's specified frequency range.

## Charge-Pump Select (CPS)

The MAX2160/EBG also allow for manual selection of the charge-pump current (CPS = 0) or automatic selection based on the final VTUNE ADC read value (CPS = 1). When in manual mode, the charge-pump current is programmed by bits CP[1:0] with the 2-wire bus. When in automatic selection mode, the CP[1:0] bits are automatically set according to the ADC table (see Tables 12 and 13). The selected charge-pump current (manually or automatically) is reported in the STATUS BYTE-1 register.

## 3-Bit ADC

The MAX2160/EBG have an internal 3-bit ADC connected to the VCO tune pin (VTUNE). This ADC can be used for checking the lock status of the VCOs.

Table 13 summarizes the ADC trip points, associated charge-pump settings (when CPS = 1), and the VCO lock indication. The VCO autoselect routine will only select a VCO in the 'VAS locked' range. This allows room for a VCO to drift over temperature and remain in a valid 'locked' range.

The ADC must first be enabled by setting the ADE bit in the VCO register. The ADC reading is latched by a subsequent programming of the ADC latch bit (ADL = 1). The ADC value is reported in the STATUS BYTE-2 register (see Table 11).

Table 13. ADC Trip Points, Associated Charge-Pump Settings, and Lock Status

| VTUNE (V T )              |   ADC[2:0] |   CP[1:0] | LOCK STATUS   |
|---------------------------|------------|-----------|---------------|
| V T < 0.41V               |        000 |        00 | Out of Lock   |
| 0.41V < V T < 0.6V        |        001 |        00 | Locked        |
| 0.6V < V T < 0.9V         |        010 |        00 | VAS Locked    |
| 0.9V < V T < 1.3V         |        011 |        01 | VAS Locked    |
| 1.3V < V T < 1.7V         |        100 |        10 | VAS Locked    |
| 1.7V < V T < 1.9V         |        101 |        11 | VAS Locked    |
| 1.9V < V T < V CC - 0.41V |        011 |        11 | Locked        |
| V CC - 0.41V < V T        |        111 |        11 | Out of Lock   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Loop Time Constant Pin (LTC)

The LTC function sets the wait time for an ADC read when in VCO autoselect mode. The time constant is set by charging an external capacitor connected to the LTC pin with a constant current source. The value of the current source can be programmed to 1µA or 2µA with the LTC bit in the VCO register (see Table 4).

The LTC time constant is determined by the following equation:

<!-- formula-not-decoded -->

where:

CLTC = capacitor connected from the LTC pin to ground.

<!-- formula-not-decoded -->

Setting  CLTC equal to 1000pF gives a time constant of  1.7ms  with  ILTC set  to  1µA  and  0.85ms  with  ILTC set to 2µA.

## ENTCXO

The MAX2160/EBG have both an integrated crystal oscillator  and  a  separate TCXO buffer amplfier. The ENTCXO pin controls which reference source is used (see Table 14).

## XTALOUT Divider

A reference buffer/divider is provided for driving external devices. The divider can be set for any division ratio from 1 to 31 by programming the XD[4:0] bits in the XTAL divide register (see Table 6). The buffer can be disabled by setting XD[4:0] to all zeros.

Table 14. Reference Source Selection

| ENTCXO   | FUNCTION                                                   |
|----------|------------------------------------------------------------|
| V CC     | The TCXO input is enabled for use with an external TCXO    |
| GND      | The XTAL input is enabled for use with an external crystal |

Table 15. Power-Down Modes

|            | POWER-DOWN CONTROL   | POWER-DOWN CONTROL   | POWER-DOWN CONTROL   | CIRCUIT STATES   | CIRCUIT STATES   | CIRCUIT STATES   |                                                            |
|------------|----------------------|----------------------|----------------------|------------------|------------------|------------------|------------------------------------------------------------|
| MODE       | SHDN PIN             | PWDN BIT             | STBY BIT             | SIGNAL PATH      | 2-WIRE INTERFACE | XTAL             | DESCRIPTION                                                |
| Normal     | V CC                 | 0                    | 0                    | ON               | ON               | ON               | All circuits active                                        |
| Shutdown   | GND                  | X                    | X                    | OFF              | OFF              | OFF              | All circuits disabled                                      |
| Power-Down | V CC                 | 1                    | 0                    | OFF              | ON               | OFF              | 2-wire interface is active                                 |
| Standby    | V CC                 | 0                    | 1                    | OFF              | ON               | ON               | 2-wire interface, XTAL, and XTAL buffer/divider are active |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Shutdown and Standby Modes

The MAX2160/EBG feature hardware- and softwarecontrolled shutdown mode as well as a software-controlled standby mode. Driving the SHDN pin low with bit EPD = 0 places the device in hardware shutdown mode. In this mode, the entire device including the 2wire-compatible interface is turned off and the supply current drops to less than 10µA. The hardware shutdown pin overrides the software shutdown and standby modes.

Setting the PWDN bit in the XTAL divide register enables power-down mode. In this mode, all circuitry except for the 2-wire-compatible bus is disabled, allowing for programming of the MAX2160/EBGs' registers while in shutdown. Setting the STBY bit in the XTAL divide register puts the device into standby mode, during which only the 2-wire-compatible bus, the crystal oscillator, the XTAL buffer, and the XTAL buffer-divider are active.

In  all  cases,  register  settings  loaded  prior  to  entering shutdown are saved upon transition back to active mode. Default register values are loaded only when VCC is applied from a no-VCC state. The various powerdown modes are summarized in Table 15. Supply current fluctuations for nondefault register settings are shown in Table 16.

## Diagnostic Modes and Test Pin

The MAX2160/EBG have several diagnostic modes that are controlled by the D[2:0] bits in the test register (see Table 2). The local oscillator can be directed to the TEST pin for LO measurements by setting the D[2:0] bits to all ones. In this mode, the supply current will increase by approximately 10mA. The TEST pin requires a 10k Ω pullup resistor to VCC for proper operation.

## ISDB-T Single-Segment Low-IF Tuners

Table 16. Typical Supply Current Fluctuations for Nondefault Register Settings

| MODE       | BIT CHANGE                                | TYPICAL I CC   | TYPICAL ∆ I CC FROM NOMINAL   |
|------------|-------------------------------------------|----------------|-------------------------------|
| Receive    | Default register settings                 | 46.5mA         | -                             |
| Receive    | QOFF = 1 (Q channel off)                  | -              | -3.3mA                        |
| Receive    | BBL[1:0] = 00 (lower linearity)           | -              | -2mA                          |
| Receive    | BBL[1:0] = 01 (nominal linearity)         | -              | -1mA                          |
| Receive    | BBL[1:0] = 11 (high linearity)            | -              | +1mA                          |
| Receive    | MOD = 1 (7dB baseband gain step enabled)  | -              | +0.3mA                        |
| Receive    | EPD = 1 (power detector enabled)          | -              | +1mA                          |
| Receive    | EPB = 0 (charge-pump prebias disabled)    | -              | +5.1mA                        |
| Receive    | XD[4:0] = 00000 (XTALOUT buffer disabled) | -              | -40µA                         |
| Shutdown   | SHDN = GND                                | 1µA            | -                             |
| Standby    | STBY = 1                                  | 2.2mA          | -                             |
| Power-Down | PWDN = 1                                  | 13.5µA         | -                             |

## Layout Considerations

The EV kit serves as a guide for PC board layout. Keep RF signal lines as short as possible to minimize losses and radiation. Use controlled impedance on all highfrequency traces. For proper operation of the TQFN package, the exposed paddle must be soldered evenly to  the  board's ground plane. Use abundant vias beneath the exposed paddle for maximum heat dissipation.  Use abundant ground vias between RF traces to minimize undesired coupling. Bypass each VCC pin to  ground with a 100pF capacitor placed as close to the pin as possible.

In  addition,  the  ground  returns  for  the  VCO,  VTUNE, and charge pump require special layout consideration.

The VCOBYP capacitor (C37) and the VCCVCO bypass capacitor (C19) ground returns must be routed back to the GNDVCO pin and then connected to the overall ground plane at that point (GNDVCO). All loop filter component grounds (C27-C30) and the VCCCP bypass capacitor (C17) ground must all be routed together back to the GNDCP pin. GNDTUNE must also be routed back to the GNDCP pin along with all other grounds from the PLL loop filter. The GNDCP pin must then be connected to the overall ground plane. Figure 4 shows a schematic drawing of the required layout connections. Refer to the MAX2160 evaluation kit for a recommended board layout.

<!-- image -->

Figure 4. Ground Return Layout Connections for the VCO, Charge Pump, and VTUNE

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Pin Configurations/Functional Diagrams (continued)

TOP VIEW

<!-- image -->

WLP

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## ISDB-T Single-Segment Low-IF Tuners

## Typical Operating Circuit

<!-- image -->

## Chip Information

TRANSISTOR COUNT: 23,510

PROCESS: BiCMOS

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Package Information

For the latest package outline information and land patterns, go to www.maxim-ic.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 40 Thin QFN-EP | T4066-2        | 21-0141        |
| WLP            | B08133+1       | 21-0173        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ISDB-T Single-Segment Low-IF Tuners

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                           | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------|-----------------|
|                 4 | 12/06           | -                                                                                                     | 1, 2, 3, 24, 25 |
|                 5 | 10/09           | Corrected Charge-Pump Output Current limits for bits CP[1:0] = 01 in Electrical Characteristics table | 4               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.