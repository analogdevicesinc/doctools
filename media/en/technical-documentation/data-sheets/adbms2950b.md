<!-- lastmod 2024-09-12 -->
<!-- image -->

Data Sheet

## FEATURES

Battery pack current measurement

Buffered analog inputs

Continuous operation option

Lossless measurement for coulomb counting

1 ms update rate

±0.1% maximum gain error

±1 µV maximum offset

Redundant implementation

Battery pack voltage measurement

Buffered analog inputs

Synchronous with current measurement

Differential and single-ended mode

Redundant implementation

10 additional voltage measurement channels

Buffered analog inputs

On-demand operation

Differential and single-ended mode

Redundant implementation

Overcurrent detection

Triple redundancy with majority voting

PWM output options

Built-in isoSPI™ interface

2 Mbps isolated serial communications

Capacitor or transformer coupled

Daisy-chaining option

4-wire SPI option

General-purpose digital IO

Six general-purpose outputs (GPOs)

Dual threshold read-back of GPOs

Four GPIOs configurable as an I 2 C or SPI controller 48-Lead side-solderable QFN package

## APPLICATIONS

Backup battery systems Grid energy storage

## Battery Pack Monitor

## ADBMS2950B

## GENERAL DESCRIPTION

The ADBMS2950B is a battery pack monitor for current or voltage sense applications. It measures the current flowing in and out of a battery pack by sensing the voltage drop over a shunt resistor with a very low offset.

The ADBMS2950B also detects overcurrent conditions using fast overcurrent analog-to-digital converters (ADCs) with digital threshold comparators and communicate their results through dedicated overcurrent alert lines with minimum delay.

It features a total of 12 internally buffered high impedance inputs for measuring voltages from external sensors or resistordividers, enabling measurement of pack voltages, temperatures, HV-Link voltages, chassis isolation, and the supervision of the state of contactors and fuses.

Six digital outputs (GPOs) supporting open-drain or push-pull can be used to control high voltage transistors to disconnect external resistor-dividers. Four digital general-purpose inputs/outputs (GPIOs) also allow operation as an I 2 C or SPI controller interface to address an external electronically erasable programmable read -only memory (EEPROM) or other serial peripherals.

The built-in serial interface of the ADBMS2950B can be configured for SPI or isolated isoSPI communication to the host. An additional isoSPI port allows to connect a daisy-chain of the ADBMS2950B devices, which is optionally extended with the ADBMS6830B cell monitor.

Table 1. ADBMS2950B Features Overview

| Feature               |   ADBMS2950B |
|-----------------------|--------------|
| isoSPI Ports          |            2 |
| SPI                   |            1 |
| Current Channels      |            2 |
| Overcurrent Channels  |            3 |
| Pack Voltage Channels |            2 |
| HV Voltage Channels   |           10 |
| GPOs                  |            6 |
| GPIOs                 |            4 |

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## Data Sheet

## TABLE OF CONTENTS

| Features...............................................................................................1   |
|------------------------------------------------------------------------------------------------------------|
| Applications .......................................................................................1      |
| General Description..........................................................................1             |
| Functional Block Diagram...............................................................2                   |
| Revision History................................................................................3          |
| Specifications .....................................................................................4      |
| ElectricalADC Characteristics ...................................................4                         |
| Voltage Reference Specifications.................................................7                         |
| Other Electrical Specifications....................................................8                       |
| SPI Specifications ........................................................................10              |
| isoSPI Specifications...................................................................11                 |
| Absolute Maximum Ratings ..........................................................13                      |
| Thermal Resistance.....................................................................13                  |
| ESD Caution ................................................................................13             |
| Pin Configuration and Function Descriptions ...........................14                                  |
| Typical Performance Characteristics............................................16                          |
| Theory of Operation.......................................................................19               |
| Serial Interface Overview...........................................................19                     |
| Network Layer of (iso)SPI Protocol..........................................22                             |
| Core State Description................................................................29                   |

## REVISION HISTORY

Revision 0 | 8/2024

Initial Version

## ADBMS2950B

| isoSPI States .................................................................................30    |
|------------------------------------------------------------------------------------------------------|
| Power Consumption...................................................................30               |
| ADC Measurements ...................................................................31               |
| Overcurrent Management .........................................................44                   |
| Configuration and Status...........................................................49                |
| General-purpose IO Pins...........................................................58                 |
| ADBMS6830B Compatible Commands..................................65                                   |
| Applications .....................................................................................67 |
| Typical Application.....................................................................67           |
| ProvidingDC Power...................................................................68               |
| Protection Features .....................................................................69          |
| Current Sense Inputs..................................................................70             |
| Voltage Sense Inputs...................................................................81            |
| High-Voltage Resistive Dividers ...............................................82                    |
| Digital Filtering ...........................................................................84      |
| Continuous Sampling and Coulomb Counting......................92                                     |
| Footprint Recommendation......................................................95                     |
| Outline Dimensions........................................................................96         |
| Ordering Guide ...............................................................................97     |

## SPECIFICATIONS

## ELECTRICAL ADC CHARACTERISTICS

Operating junction temperature (TJ) = -40°C to +125°C, VDD = 12V , VREG = 5.0V , ISOMD pin is connected low, unless otherwise noted.

## Table 2. I1ADC and I2ADC Current ADCs

| Parameter                       | Min   | Typ         | Max   | Unit   | Test Conditions/Comments                                                                                          |
|---------------------------------|-------|-------------|-------|--------|-------------------------------------------------------------------------------------------------------------------|
| OPERATING CONDITIONS            |       |             |       |        |                                                                                                                   |
| Differential Input Range        |       |             | ±130  | mV     |                                                                                                                   |
| Input-Pin Voltage Range         |       |             | ±130  | mV     | For each IxA, IxB, and SxA pin, referred to the SGND                                                              |
| CHARACTERISTICS                 |       |             |       |        |                                                                                                                   |
| Update Rate                     | 0.9   | 1           | 1.1   | kS/s   |                                                                                                                   |
| Input Sampling Frequency        | 3.7   | 4.1         | 4.5   | MHz    |                                                                                                                   |
| ADC Resolution                  |       |             |       |        |                                                                                                                   |
| I1ADC                           |       | 1           |       | μV     |                                                                                                                   |
| I2ADC                           |       | -1          |       | μV     | Negative input polarity                                                                                           |
| PERFORMANCE                     |       |             |       |        |                                                                                                                   |
| Offset Voltage                  |       |             | ±1    | µV     |                                                                                                                   |
| Gain Error                      |       | ±0.05       | ±0.1  | %      | Including solder shift and long-term drift                                                                        |
| Gain Mismatch                   |       | ±0.015      | ±0.03 | %      | I1ADC gain vs. I2ADC gain                                                                                         |
| Non-Linearity (INL)             |       | ±0.06       |       | %      |                                                                                                                   |
| Total Measurement Error (TME) 1 |       |             | ±0.2  | %      | Absolute input voltage > 5 mV, ACCN = 32                                                                          |
| Conversion Noise                |       |             |       |        |                                                                                                                   |
| 1 ms Conversion Time            |       | 1.6         |       | µV RMS | Ix registers                                                                                                      |
| 8 ms Conversion Time            |       | 0.6         |       | µV RMS | IxACC registers for ACCN = 8                                                                                      |
| 1 ms × ACCN Conversion Time     |       | 1.6 ÷ √ACCN |       | µV RMS | IxACC registers depending on ACCN                                                                                 |
| Input Current                   | -3.5  | 0           | +3.5  | nA     | All OCxADCs and IxADCs active. Pin voltage within specified IxADC input-pin voltage range                         |
| Input Current Mismatch          |       | 0.5         |       | nA     | V IxA = V IxB = V SxA , max of &#124;I IxA - I IxB &#124;, &#124;I IxA - I SxA &#124;, &#124;I IxB - I SxA &#124; |
| DIAGNOSTICS                     |       |             |       |        |                                                                                                                   |
| Open-Wire Test Current          | 0.4   | 0.5         | 0.6   | µA     |                                                                                                                   |
| Input Series Resistance         | 3.2   | 3.8         | 4.4   | kΩ     |                                                                                                                   |
| Input Series R Mismatch         |       |             | ±1    | %      |                                                                                                                   |
| Divided VREF1 (VDIV)            |       | 118         |       | mV     | DIAGSEL = 5                                                                                                       |
| Divided VREF2                   |       | -125        |       | mV     | DIAGSEL = 6                                                                                                       |

## Table 3. VB1ADC and VB2ADC Battery Voltage ADCs

| Parameter                   | Min   | Typ           | Max   | Unit   | Test Conditions/Comments                       |
|-----------------------------|-------|---------------|-------|--------|------------------------------------------------|
| OPERATING CONDITIONS        |       |               |       |        |                                                |
| Differential Input Range    | -2.6  |               | +2.6  | V      |                                                |
| Input-Pin Voltage Range     | -0.1  |               | +2.5  | V      | For each VBATx pin, referred to the SGND       |
| CHARACTERISTICS             |       |               |       |        |                                                |
| Update Rate                 | 0.9   | 1             | 1.1   | kS/s   | VBxADC converts in lockstep with IxADC         |
| Input Sampling Frequency    | 3.7   | 4.1           | 4.5   | MHz    |                                                |
| Resolution                  |       |               |       |        |                                                |
| VB1ADC                      |       | 100           |       | µV     |                                                |
| VB2ADC                      |       | -85           |       | µV     | Negative input polarity                        |
| PERFORMANCE                 |       |               |       |        |                                                |
| Offset Voltage              |       | 0             | ±0.2  | mV     |                                                |
| Gain Error                  |       |               | ±0.1  | %      | Including solder shift and long-term drift     |
| Gain Mismatch               |       | ±0.015        | ±0.05 | %      | VB1ADC gain vs.VB2ADC gain                     |
| Non-Linearity (INL)         |       |               | ±8    | LSBs   |                                                |
| TME 1                       |       |               | ±0.2  | %      | Effective ADC input voltage > ±1.0V            |
| Conversion Noise            |       |               |       |        |                                                |
| 1 ms Conversion Time        |       | 0.064         |       | mV RMS | VBx registers                                  |
| 8 ms Conversion Time        |       | 0.023         |       | mV RMS | VBxACC registers for ACCN = 8                  |
| 1 ms × ACCN Conversion Time |       | 0.064 ÷ √ACCN |       | mV RMS | VBxACC registers depending on ACCN             |
| Input Current               |       |               |       |        | ADC active                                     |
| 0V ≤ VBATx ≤ 2.5V           | -10   | ±1            | +10   | nA     | Current into pin, voltage referred to the SGND |

Rev. 0 | Page 4 of 97

| Parameter               | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|-------------------------|-------|-------|-------|--------|----------------------------|
| -0.1V ≤ VBATx ≤ 0V      | -50   | ±1    | +50   | nA     |                            |
| DIAGNOSTICS             |       |       |       |        |                            |
| Open-Wire Test Current  | 8     | 10    | 12    | µA     |                            |
| Input Series Resistance | 1.84  | 2.3   | 2.76  | kΩ     |                            |
| Divided VREF1 (VDIV)    |       | 118   |       | mV     | DIAGSEL = 5                |
| Divided VREF2           |       | 2.375 |       | V      | DIAGSEL = 6                |

## Table 4. OC1ADC to OC3ADC Overcurrent ADCs

| Parameter                         | Min   | Typ        | Max   | Unit    | Test Conditions/Comments                                                                  |
|-----------------------------------|-------|------------|-------|---------|-------------------------------------------------------------------------------------------|
| OPERATING CONDITIONS              |       |            |       |         |                                                                                           |
| Differential Input Range          |       |            |       |         | Voltage range over which TME is guaranteed                                                |
| OCxGC = 0                         | -300  |            | +300  | mV      |                                                                                           |
| OCxGC = 1                         | -140  |            | +140  | mV      |                                                                                           |
| Input-Pin Voltage Range           | -315  |            | +315  | mV      | For each IxA and IxB pin, referred to the SGND                                            |
| CHARACTERISTICS                   |       |            |       |         |                                                                                           |
| Conversion Time (t OCxADC )       | 56    | 62.3       | 69    | µs      | OCxR register update rate                                                                 |
| Input Sampling Frequency          | 3.7   | 4.1        | 4.5   | MHz     |                                                                                           |
| Resolution                        |       |            |       |         |                                                                                           |
| OCxGC = 0                         |       | 5          |       | mV      |                                                                                           |
| OCxGC = 1                         |       | 2.5        |       | mV      |                                                                                           |
| Propagation Delay to OCA, OCB     |       |            | 6.2   | µs      | OCDGT = 0b00, time between OCxR register update and OC output response                    |
| OCBvs. OCA Phase Shift 1          |       | 3 ÷ f OSC1 |       |         |                                                                                           |
| PERFORMANCE                       |       |            |       |         |                                                                                           |
| Offset Voltage                    |       | 0          | ±2    | mV      |                                                                                           |
| Gain Error                        |       | ±0.1       | ±0.7  | %       |                                                                                           |
| TME 2                             |       |            |       |         |                                                                                           |
| OCxGC = 0                         |       | 0          | ±7    | mV      |                                                                                           |
| OCxGC = 1                         |       | 0          | ±4.2  | mV      |                                                                                           |
| Conversion Noise                  |       | ±0.5       |       | mV PEAK |                                                                                           |
| Deglitcher-Window Time Inaccuracy |       |            | ±10   | %       | Guaranteed by design, not subject to test                                                 |
| Input Current                     | -100  |            | +100  | nA      | All OCxADC and IxADCs active. Pin voltage within specified OCxADC input-pin voltage range |
| DIAGNOSTICS                       |       |            |       |         |                                                                                           |
| V TEST,OC,LO Result               |       |            |       |         | OCTSEL = 0b10                                                                             |
| OCxGC = 0                         | 27    |            | 29    | LSBs    |                                                                                           |
| OCxGC = 1                         | 54    |            | 58    | LSBs    |                                                                                           |
| V TEST,OC,HI result               | 57    |            | 59    | LSBs    | OCxGC = 0, OCTSEL = 0b11                                                                  |

Table 5. V1ADC and V2ADC General Purpose Voltage ADCs

| Parameter                | Min   | Typ    | Max   | Unit   | Test Conditions/Comments                   |
|--------------------------|-------|--------|-------|--------|--------------------------------------------|
| OPERATING CONDITIONS     |       |        |       |        |                                            |
| Differential Input Range | -2.6  |        | +2.6  | V      |                                            |
| Input-Pin Voltage Range  | -0.1  |        | +2.5  | V      | For each Vx pin, referred to the SGND      |
| CHARACTERISTICS          |       |        |       |        |                                            |
| Conversion Time          | 239   | 265    | 292   | µs     | Single conversion, no SOAK time            |
| Input Sampling Frequency | 3.7   | 4.1    | 4.5   | MHz    |                                            |
| Resolution               |       |        |       |        |                                            |
| V1ADC                    |       | 100    |       | µV     |                                            |
| V2ADC                    |       | -85    |       | µV     | Negative input polarity                    |
| PERFORMANCE              |       |        |       |        |                                            |
| Offset Voltage           |       |        | ±0.2  | mV     |                                            |
| Gain Error               |       |        | ±0.1  | %      | Including solder shift and long-term drift |
| Gain Mismatch            |       | ±0.015 | ±0.05 | %      | V1ADC gain vs. V2ADC gain                  |
| Non-Linearity (INL)      |       |        | ±8    | LSBs   |                                            |
| TME 1                    |       |        | ±0.2  | %      | Effective ADC input voltage > ±1.0V        |
| Conversion Noise         |       | 0.128  |       | mV RMS |                                            |
| Input Current            |       |        |       |        | ADC active                                 |

## ADBMS2950B

| Parameter               | Min    | Typ    | Max    | Unit   | Test Conditions/Comments                                                  |
|-------------------------|--------|--------|--------|--------|---------------------------------------------------------------------------|
| 0V ≤ Vx ≤ 2.5V          | -15    | ±1     | +15    | nA     | Pin voltage referred to the SGND, current into pin. All Vx pins except V4 |
| 0V ≤ Vx ≤ 2.5V          | -80    | ±1     | +80    | nA     | Pin V4 only                                                               |
| -0.1V ≤ Vx ≤ 0V         | -400   | ±1     | +400   | nA     |                                                                           |
| DIAGNOSTICS             |        |        |        |        |                                                                           |
| Open-Wire Test Current  | 8      | 10     | 12     | µA     |                                                                           |
| Input Series Resistance | 1.84   | 2.3    | 2.76   | kΩ     |                                                                           |
| VREF2                   |        |        |        |        | For more details, see the VBxADC and VxADC Transfer Function section      |
| V1ADC                   | 12455  | 12500  | 12545  | LSBs   |                                                                           |
| V2ADC                   | -14759 | -14706 | -14653 | LSBs   |                                                                           |

1 The TME specifications include the ADC's offset, nonlinearity, drift over temperature (gain error), reflow soldering, lifetime, and thermal hysteresis.

## Table 6. AUX ADC

| Parameter                | Min   | Typ   | Max      | Unit   | Test Conditions/Comments                 |
|--------------------------|-------|-------|----------|--------|------------------------------------------|
| CHARACTERISTICS          |       |       |          |        |                                          |
| Conversion Time          | 1.9   | 2.12  | 2.33     | ms     | All 8-channels converted                 |
| Input Sampling Frequency | 3.7   | 4.1   | 4.5      | MHz    |                                          |
| Resolution               |       |       |          |        |                                          |
| VDIV                     |       | 100   |          | µV     |                                          |
| EPAD                     |       | 100   |          | µV     |                                          |
| VREF1P25                 |       | 100   |          | µV     |                                          |
| VDIG                     |       | 240   |          | µV     |                                          |
| VDD                      |       | 1     |          | mV     |                                          |
| TMP1                     |       | 16.18 |          | mK     |                                          |
| VREG                     |       | 240   |          | µV     |                                          |
| TMP2                     |       | 48.7  |          | mK     |                                          |
| PERFORMANCE              |       |       |          |        |                                          |
| TME 1 VDIV               |       |       | ±5.0     | mV     |                                          |
| EPAD                     | -3    |       | +1       | mV     |                                          |
| VREF1P25                 |       |       | ±0.1     | %      |                                          |
| VDIG                     |       |       | ±0.5     | %      |                                          |
| VDD                      |       |       | ±0.5     | %      |                                          |
| TMP1                     |       |       | ±5       | °C     | Ambient Temperature (T A ) = 25°C        |
| TMP1                     |       |       | ±8 (±5σ) | °C     | -40°C to 125°C, not tested in production |
| VREG                     |       |       | ±0.5     | %      |                                          |
| TMP2                     |       | ±7    |          | °C     | -40°C to 125°C, not tested in production |

## VOLTAGE REFERENCE SPECIFICATIONS

Operating junction temperature (TJ) = -40°C to +125°C, VDD = 12V , VREG = 5.0V , ISOMD pin is connected low, unless otherwise noted.

## Table 7. VREF1, VREF2, and VREF1P25 Specifications

| Parameter                         | Min   | Typ    | Max   | Unit     | Test Conditions/Comments   |
|-----------------------------------|-------|--------|-------|----------|----------------------------|
| VREF1P25                          |       |        |       |          |                            |
| Nominal Voltage                   | 1.2   | 1.25   | 1.3   | V        | VREF1P25 Pin, load±3mA     |
| Temperature Coefficient           |       | 10     |       | ppm/°C   | VREF1P25 Pin, no load      |
| Thermal Hysteresis                |       | 100    |       | ppm      | VREF1P25 Pin, no load      |
| Long-Term Drift                   |       | 60     |       | ppm/√khr | VREF1P25 Pin, no load      |
| Load Regulation                   |       |        |       |          |                            |
| -1mA<I LOAD <1mA                  | -5    |        | +5    | mV       |                            |
| -3mA<I LOAD <3mA                  | -15   |        | +15   | mV       |                            |
| VREF1                             |       |        |       |          |                            |
| Nominal Voltage 1                 | 3.05  | 3.2    | 3.3   | V        | VREF1 Pin, no load         |
| Temperature Coefficient           |       | 3      |       | ppm/°C   | VREF1 Pin, no load         |
| Thermal Hysteresis                |       | 20     |       | ppm      | VREF1 Pin, no load         |
| Long-Term Drift                   |       | 20     |       | ppm/√khr | VREF1 Pin, no load         |
| VREF2                             |       |        |       |          |                            |
| Nominal Voltage 2                 | 2.975 | 3      | 3.03  | V        | VREF2 Pin, no load         |
| Temperature Coefficient           |       | 10     |       | ppm/°C   | VREF2 Pin, no load         |
| Long-Term Drift 3                 |       |        | ±0.2  | %        | VREF2 Pin, no load         |
| Temperature and Long-Term Drift 4 |       |        | ±0.3  | %        |                            |
| VDIV                              |       |        |       |          |                            |
| VREF1 : VDIV Ratio                |       | 27 : 1 |       |          |                            |

1  The VREF1 voltage is very stable across operating conditions, but its nominal value may vary between different ICs. The VREF1 nominal voltage specification shows the guaranteed minimum and maximum values over different ICs. The variation in VREF1 nominal voltage does not affect the LSB size of the ADCs that use VREF1 as their reference. For a single IC, all further variation of VREF1 (such as due to drift over temperature, reflow soldering, lifetime, and thermal hysteresis) is included in the TME and gain error specifications of the ADCs. The VREF1 specifications are for informational purposes only and do not need to be considered in the system design process.

2  The VREF2 voltage is stable across operating conditions, but its nominal value may vary between different ICs. The VREF2 nominal voltage specification shows the guaranteed minimum and maximum values over different ICs. The OCxADCs use VREF2 as their reference, but the nominal voltage variation of VREF2 does not affect the OCxADC LSB size. For a single IC, all further variation of VREF2 (such as due to drift over temperature, reflow soldering, lifetime, and thermal hysteresis) is included in the TME and gain error specifications of the OCxADCs.

3 The VREF2 long-term drift includes variation of VREF2 due to, for example, reflow soldering, lifetime, and thermal hysteresis.

4 This specification covers all variation in VREF2 over temperature and lifetime.

## OTHER ELECTRICAL SPECIFICATIONS

Operating junction temperature (TJ) = -40°C to +125°C, VDD = 12V , VREG = 5.0V , ISOMD pin is connected low, unless otherwise noted.

## Table 8. General Timing Specifications

| Parameter                            | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                                                                                                  |
|--------------------------------------|-------|-------|-------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| OSCILLATOR FREQUENCIES               |       |       |       |        |                                                                                                                                                           |
| OSC1 Frequency f OSC1                | 1.87  | 2.07  | 2.27  | MHz    |                                                                                                                                                           |
| OSC2 Frequency f OSC2                |       | 8.28  |       | kHz    |                                                                                                                                                           |
| OSC3 Frequency f OSC3                |       | 100   |       | kHz    |                                                                                                                                                           |
| STARTUP TIMINGS                      |       |       |       |        |                                                                                                                                                           |
| Regulator Startup (t WAKE )          |       | 200   | 500   | µs     | V REG generated from DRIVE pin, time after V DD exceeds VDRUV threshold                                                                                   |
| Reference Startup (t REFUP )         |       | 3.5   | 4.5   | ms     | Time required to transition into REFUP after power-up or SRST                                                                                             |
| IxADC Startup (t IxADC_STARTUP )     | 8.1   | 9     | 9.9   | ms     | Time required for the first IxADC result to be available after receiving an ADIx command within the REFUP state for the first time after power-up or SRST |
| IxADC Initialization (t IxADC_INIT ) | 115   | 127   | 140   | ms     | Time required for the IxADCs to initialize after t IxADC_STARTUP expiry                                                                                   |

## Table 9. General-Purpose Outputs

| Parameter                     | Min        | Typ   | Max        | Unit   | Test Conditions/Comments                                              |
|-------------------------------|------------|-------|------------|--------|-----------------------------------------------------------------------|
| Low-Level Output Voltage      |            |       | 0.4        | V      | I GPOX =1mA                                                           |
| High-Level Output Voltage     | V DD - 0.5 |       |            | V      | I GPOX =-1mA                                                          |
| Low-Level Readback Threshold  | 0.6        |       | 1.3        | V      |                                                                       |
| High-Level Readback Threshold | V DD - 1.3 |       | V DD - 0.6 | V      | I GPOX =-1mA                                                          |
| GPO6 Output Frequency         | 186        | 207   | 228        | kHz    | GPO6C = 0b10                                                          |
| GPO6 Output Duty Cycle        | 49         | 50    | 51         | %      | GPO6C = 0b10, push-pull output enabled, external capacitance ≤ 200 pF |
| Rise Time                     |            | 1     |            | µs     | C L = 200 pF                                                          |
| Fall Time                     |            | 1     |            | µs     | C L = 200 pF                                                          |
| Leakage Current               | -10        | 2.5   | +10        | μA     | Both low-side and high-side drivers disabled                          |

## Table 10. General-Purpose Input/Open Drain Outputs

| Parameter                | Min   | Typ   |   Max | Unit   | Test Conditions/Comments                     |
|--------------------------|-------|-------|-------|--------|----------------------------------------------|
| Low-Level Output Voltage |       |       |   0.3 | V      | I GPIOX =4mA                                 |
| Input Threshold          | 0.8   |       |   2.3 | V      |                                              |
| Leakage Current          |       |       |   1   | μA     | Pin voltage = 5V, pin not asserted logic low |

## Table 11. OC Outputs

| Parameter                        | Min         | Typ   | Max   | Unit   | Test Conditions/Comments                                                          |
|----------------------------------|-------------|-------|-------|--------|-----------------------------------------------------------------------------------|
| Low-Level Output Voltage         |             |       | 0.4   | V      | I OCX =10mA                                                                       |
| High-Level Output Voltage        | V REG - 0.4 |       |       | V      | I OCX =-10mA                                                                      |
| Readback-Input Threshold Voltage | 1.2         |       | 3     | V      |                                                                                   |
| PWMOutput Frequency              | 14.4        | 16    | 17.9  | kHz    | PWM1orPWM2 mode selected                                                          |
| PWMDuty-Cycle Absolute Error     | -1          |       | +1    | %      | PWM1orPWM2 mode selected, push-pull output enabled, external capacitance ≤ 200 pF |
| Leakage Current                  | -10         |       | +10   | μA     | Both low-side and high-side drivers disabled                                      |

## Table 12. General DC Specifications

| Parameter               | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                  |
|-------------------------|-------|-------|-------|--------|-------------------------------------------|
| SUPPLY VOLTAGE          |       |       |       |        |                                           |
| V DD Supply Voltage     |       |       |       |        |                                           |
| V DD Range 1            | 4.5   |       | 5.5   | V      | DRIVE output low                          |
| V DD Range 2            | 11    |       | 20    | V      | DRIVE output enabled                      |
| V REG Supply Voltage    | 4.5   | 5     | 5.5   | V      |                                           |
| DRIVE PIN               |       |       |       |        |                                           |
| Output Voltage          | 5.5   | 5.7   | 5.9   | V      | T A = 25°C, I LOAD = 2 mA, V DD ≥ 11V     |
| Output Current          | -0.2  |       | +5    | mA     | ∆VDRIVE < ±100mV                          |
| Temperature Coefficient |       | -1.6  |       | mV/°C  |                                           |
| SUPPLY CURRENT          |       |       |       |        |                                           |
| V DD Supply Current     |       |       |       |        | ExcludingGPO sourcing current             |
| 4.5 ≤ V DD ≤ 5.5V       |       |       | 0.06  | mA     |                                           |
| V DD ≥ 11V              |       |       | 0.1   | mA     | Also excluding DRIVE output current       |
| V REG Supply Current    |       |       |       |        | ExcludingOC and VREF1P25 sourcing current |
| REFUP (OCEN = 0)        |       |       | 3.9   | mA     |                                           |
| REFUP (OCEN = 1)        |       |       | 4.3   | mA     | REFUP + OC ADCs active                    |
| MEASURE                 |       | 16.3  | 19.5  | mA     | REFUP + all ADCs active                   |

## Data Sheet

## ADBMS2950B

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|---------------------------------|-------|-------|-------|--------|----------------------------|
| V REG Supply Current for isoSPI |       |       |       |        |                            |
| ISOMD = 0, READY                | 2.6   | 3.2   | 3.9   | mA     |                            |
| ISOMD = 0, ACTIVE 1             | 7     | 8.5   | 11.5  | mA     | t CLK = 0.5 μs             |
| ISOMD = 1, READY                |       | 3.7   |       | mA     |                            |
| ISOMD = 1, ACTIVE WRITE 1       | 7.5   | 9     | 12    | mA     | t CLK = 0.5 μs             |
| ISOMD = 1, ACTIVE READ 1        | 12.5  | 14    | 18    | mA     | t CLK = 0.5 μs             |
| Thermal Shutdown Temperature    |       | 150   |       | °C     |                            |

## Table 13. Supply Monitors

| Parameter                 | Min   | Typ   | Max   | Unit   | Test Conditions/Comments               |
|---------------------------|-------|-------|-------|--------|----------------------------------------|
| V REG Power-on Reset 1    | 2.8   |       | 4.1   | V      |                                        |
| V REG MONITOR THRESHOLDS  |       |       |       |        | When leaving the V REG operating range |
| Undervoltage (UV)         | 4.325 |       | 4.425 | V      |                                        |
| Overvoltage (OV)          | 5.575 |       | 5.675 | V      |                                        |
| V DIG MONITOR THRESHOLDS  |       |       |       |        | When leaving the V DIG operating range |
| Undervoltage (UV)         | 2.725 |       | 2.825 | V      |                                        |
| Overvoltage (OV)          | 3.475 |       | 3.575 | V      |                                        |
| V DD UNDERVOLTAGE MONITOR |       |       |       |        |                                        |
| VDDUV                     | 3.925 |       | 4.475 |        |                                        |
| VDRUV                     |       | 8     |       | V      |                                        |

## SPI SPECIFICATIONS

Operating junction temperature (TJ) = -40°C to +125°C, VDD = 12V , VREG = 5.0V . ISOMD pin is connected low, unless otherwise noted.

## Table 14. SPI Interface Specifications

| Parameter                                                                                                                      | Min            | Max    | Unit              | Test Conditions/Comments                                  |
|--------------------------------------------------------------------------------------------------------------------------------|----------------|--------|-------------------|-----------------------------------------------------------|
| DIGITAL OUTPUT VOLTAGE Low (V OL,SDO )                                                                                         |                | 0.3    | V                 | PinSDO PinSDO sinking4mA                                  |
| DIGITAL INPUT VOLTAGE High (V IH ) Low (V IL )                                                                                 | 2.3            | 1.2    | V V               | Pins CSB, SCK, SDI, and ISOMD                             |
| DIGITAL INPUT CURRENT Pins SDI, ISOMD Pins CSB, SCK Pins CSB, SCK                                                              |                | 1 10 1 | µA µA µA          | Pin voltage = 5V, ISOMD = 0 Pin voltage = 3.5V, ISOMD = 0 |
| SDI Setup Time before SCK Rising Edge (t 1 ) SDI Hold Time after SCK Rising Edge (t 2 ) SCK Low (t 3 ) SCK High (t 4 )         | 25 100 100 100 |        | ns ns ns ns µs ns | t CLK = t 3 + t 4 ≥ 0.5 µs                                |
| CSB Rising Edge to CSB Falling Edge (t 5 ) CSB Rising Edge to SDO Rising (t 11 ) 2 SCK Rising Edge to CSB Rising Edge (t 6 ) 1 | 2              | 200    | µs µs             | t CLK = t 3 + t 4 ≥ 0.5 µs                                |
| CSB Falling Edge to SCK Rising Edge (t 7 )                                                                                     | 0.5            |        |                   |                                                           |
| 1 2                                                                                                                            |                |        |                   |                                                           |
|                                                                                                                                | 0.5            |        |                   |                                                           |
|                                                                                                                                |                | 60     | ns                |                                                           |
| SCK Falling Edge to SDO Valid (t 8 )                                                                                           |                |        |                   |                                                           |

Figure 2. Timing Diagram of 4-Wire SPI

<!-- image -->

## ISOSPI SPECIFICATIONS

Operating junction temperature (TJ) = -40°C to +125°C, VDD = 12V , VREG = 5.0V .

## Table 15. isoSPI DC Specifications

| Parameter                        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                   |
|----------------------------------|-------|-------|-------|--------|------------------------------------------------------------|
| Common-Mode Voltage (V CM )      | 3.2   | 3.2   | 3.2   | V      | T A = 25°C, IP/IM not driving                              |
| PIN RESISTANCE (R IN )           |       |       |       |        |                                                            |
| IPA, IMA                         | 35    |       |       | kΩ     | ISOMD = 1, READY state                                     |
| IPB, IMB                         | 100   |       |       | kΩ     | READY state                                                |
| Transmitter Pulse Amplitude (V A | 1     | 1.25  | 1.6   | V      | V A = &#124;V IP - V IM &#124;, termination resistance=50Ω |
| Transmitter Drive Current        |       | 25    |       | mA     | V CM set by the driver                                     |
| Receiver Threshold Setting       | 240   | 300   | 360   | mV     |                                                            |

| Parameter                          | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|------------------------------------|-------|-------|-------|--------|----------------------------|
| CHIP SELECT                        |       |       |       |        |                            |
| Half-Pulse Width (t ½PW(CS) )      | 120   | 150   | 180   | ns     | Transmitter                |
| Signal Filter (t FILT(CS) )        | 70    | 90    | 110   | ns     | Receiver                   |
| Pulse Inversion Delay (t INV(CS) ) | 120   | 155   | 190   | ns     | Transmitter                |
| Valid Pulse Window (t WNDW(CS) )   | 220   | 270   | 330   | ns     | Receiver                   |
| DATA                               |       |       |       |        |                            |
| Half-Pulse Width (t ½PW(D) )       | 40    | 50    | 60    | ns     | Transmitter                |
| Signal Filter (t FILT(D) )         | 10    | 25    | 35    | ns     | Receiver                   |
| Pulse Inversion Delay (t INV(D) )  | 40    | 55    | 65    | ns     | Transmitter                |
| Valid Pulse Window (t WNDW(D) )    | 70    | 90    | 110   | ns     | Receiver                   |

Figure 3. isoSPI Pulse Timings

<!-- image -->

## ADBMS2950B

## Table 17. isoSPI Timing Specifications

## Data Sheet

| Parameter                                          | Min   | Typ   |    Max | Unit   | Test Conditions/Comments                            |
|----------------------------------------------------|-------|-------|--------|--------|-----------------------------------------------------|
| SCK Rising Edge to Short ±1 Transmit (t 9 )        | 230   | 265   | 300    | ns     | = (t DSY(D) + t ½PW(D) ) - (t DSY(CS) + t ½PW(CS) ) |
| CSB Transition to Long ±1 Transmit (t 10 )         |       |       | 100    | ns     | = (t DSY(D) + t ½PW(D) ) - (t DSY(CS) + t ½PW(CS) ) |
| Data Return Delay (t RTN )                         | 150   | 185   | 220    | ns     | = (t DSY(D) + t ½PW(D) ) - (t DSY(CS) + t ½PW(CS) ) |
| Chip-Select Daisy-Chain Delay (t DSY(CS) )         | 100   | 160   | 200    | ns     | = (t DSY(D) + t ½PW(D) ) - (t DSY(CS) + t ½PW(CS) ) |
| Data Daisy-Chain Delay (t DSY(D) )                 | 280   | 330   | 380    | ns     | = (t DSY(D) + t ½PW(D) ) - (t DSY(CS) + t ½PW(CS) ) |
| Data Daisy-Chain Lag (vs. Chip-Select) (t LAG )    | 0     | 70    | 100    | ns     |                                                     |
| Chip-Select High-to-Low Pulse Governor (t 5(GOV) ) | 0.54  | 0.67  |   0.85 | µs     |                                                     |
| Data to Chip-Select Pulse Governor (t 6(GOV) )     | 0.69  | 0.86  |   1.1  | µs     |                                                     |
| isoSPI Port Reversal Blocking Window (t BLOCK )    | 2     |       |  10    | µs     |                                                     |

Figure 4. isoSPI Read Command Timing

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Voltages relative to GND, unless otherwise noted.

## Table 18.

| Parameter                                     | Rating                  |
|-----------------------------------------------|-------------------------|
| Supply Pins                                   |                         |
| V DD                                          | (V REG - 0.3V) to 21V   |
| V REG                                         | 6V                      |
| DRIVE                                         | -0.3V to +7V            |
| SGND                                          | -0.1V to +0.1V          |
| RGND                                          | -0.1V to +0.1V          |
| Current Inputs                                |                         |
| S1A, I1A, I1B                                 | -4V to +4V              |
| S2A, I2A, I2B                                 | -4V to +4V              |
| I3A, I3B                                      | -4V to +4V              |
| IxA to IxB                                    | -4V to +4V              |
| Voltage Inputs                                |                         |
| V1 to V10                                     | -0.3V to +6V            |
| VBAT1, VBAT2                                  | -0.3V to +6V            |
| Digital Input/Output Pins                     |                         |
| GPIO1 to GPIO4                                | -0.3V to +6V            |
| GPO1 to GPO6                                  | -0.3V to (V DD + 0.3V)  |
| OCA, OCB                                      | -0.3V to (V REG + 0.3V) |
| IPA 1 , IMA 1 , IPB, IMB                      | -15V to +15V            |
| SCK 1 , CSB 1                                 | -0.3V to +6V            |
| All Other Pins                                | -0.3V to +6V            |
| Current In/Out of Pins 2                      |                         |
| VREF1P25                                      | -5mAto+5mA              |
| V REG                                         | -5mAto+54mA             |
| GPO1 to GPO6                                  | -2mAto+2mA              |
| OCA, OCB                                      | -12mAto+12mA            |
| GPIO1 to GPIO4                                | -10mAto+10mA            |
| SDO                                           | -10mAto+10mA            |
| IPA, IMA, IPB, IMB                            | -40mAto+40mA            |
| V1 to V10, VBAT1, VBAT2                       | -10mAto+4mA             |
| Sumof Currents into Pins                      |                         |
| V1 to V10, VBAT1, VBAT2, VREF1P25, OCA, OCB 3 | +4mA                    |
| Temperature                                   |                         |
| Operating Junction Temperature Range (T J )   | -40°C to +125°C         |
| Junction Temperature (T JMAX )                | 150°C                   |
| Storage Temperature Range                     | -65°C to +150°C         |
| Lead Temperature (Soldering, 10 sec)          | 300°C                   |
| ESD Classifications                           |                         |
| Human Body Model (HBM)                        | Level 2                 |
| Charged Device Model (CDM)                    | Level C2                |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required. θJA is the natural convection junction-toambient thermal resistance measured in a one cubic foot sealed enclosure. θJC is the junction-to-case thermal resistance.

## Table 19. Thermal Resistance

| Package Type   |   θ JA |   θ JC | Unit   |
|----------------|--------|--------|--------|
| CS-48          |     28 |      3 | K/W    |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

- 1.NC=NOCONNECT
- 2.EXPOSEDPAD.CONNECTEXPOSEDPADTOGND.

Figure 5.ADBMS2950B Pin Configuration

Table 20. Pin Function Descriptions

|   Pin No. | Mnemonic   | Type   | Description                                                                                                                                                                                                                                                                  |
|-----------|------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        40 | VDD        | S      | GPO and DRIVE Power-Supply Voltage Input. Bypass this pin to PCB ground plane with a 0.1 μF (or greater) capacitor. Connect to VREG for 5V only supply option.                                                                                                               |
|        42 | VREG       | S      | Main Power-Supply Input. Bypass this pin to PCB ground plane with a 1 μF (or greater) capacitor. Connect to VDD for 5V only supply option.                                                                                                                                   |
|        41 | DRIVE      | O      | Control Pin for VREG Supply. Connect the base of an NPN transistor to this pin. Connect the collector to VDD and the emitter to VREG. Leave floating if unused. For recommended external circuitry, see the Providing DC Power section.                                      |
|        44 | GND        | S      | Power-Supply Ground. Connect to PCB ground plane.                                                                                                                                                                                                                            |
|        46 | SGND       | I      | Kelvin Sense Signal Ground Pin. It must be connected to the PCB ground plane. Ensure separation of signal ground paths from power ground paths by placement of components and optional slots in the ground plane.                                                            |
|        47 | RGND       | REF    | Kelvin Sense Reference Ground Pin. Ground connection to the internal references must be connected to the PCB ground plane. Ensure separation of reference and signal ground paths from power ground paths by placement of components and optional slots in the ground plane. |

## Data Sheet

## ADBMS2950B

| Pin No.                | Mnemonic                           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|------------------------|------------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 45, 43                 | VREF1, VREF2                       | REF    | Primary (V REF1 = 3.2V typ) and Secondary (V REF2 = 3.0V typ) Reference Voltage Outputs. Bypass each pin with a 1 μF (or greater) capacitor to the PCB ground plane. Avoid common power ground paths between this capacitor's ground connection and the SGND and RGND pin connections by placement of components and optional slots in the ground plane. No DC loads are allowed on those pins.                                                                                                                                                                                                                                      |
| 15                     | VREF1P25                           | REF    | Buffered Reference Voltage Output of 1.25V for driving 10 kΩ Thermistors and Resistor-Dividers. Bypass with a 1 μF capacitor to the PCB ground plane. Avoid commonpower ground paths between this capacitor's ground connection and the SGND pin connection by placement of components and optional slots in the ground plane.                                                                                                                                                                                                                                                                                                       |
| 5, 9                   | S1A, S2A                           | I      | For more details, see the Current Sense Inputs section. Connect to PCB ground plane if current sense functionality is unused.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3, 4, 7, 8             | I1A, I1B, I2A, I2B                 | I      | Current and Overcurrent Sense Channel 1/2 Differential Signal Inputs (A: positive, B: negative). For more details, see the Current Sense Inputs section. Connect to the PCB ground plane if current sense functionality is unused.                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1, 11                  | I3A, I3B                           | I      | Overcurrent Sense Channel 3 Differential Signal Inputs (A: positive, B: negative). For more details, see the Current Sense Inputs section. Connect to the PCB ground plane if current sense functionality is unused.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 48, 2, 10, 18, 6, 16   | V1, V2, V3, V4, V5, V6             | I      | Voltage Sense Inputs. Pins are internally buffered before being applied to V1ADC and V2ADC to ensure high input impedance and low leakage. Leave floating or connected to the PCB ground plane (preferred) if unused.                                                                                                                                                                                                                                                                                                                                                                                                                |
| 12, 14                 | VBAT1, VBAT2                       | I      | Battery Voltage Sense Inputs. VBAT1 and VBAT2 are internally buffered before being applied to VB1ADC and VB2ADC to ensure high input impedance and low leakage. The VBxADC's inputs are configurable between either both differentially VBAT1 to VBAT2 or individual single ended VBAT1 vs. SGND through VB1ADC and VBAT2 vs. SGND through VB2ADC. Leave floating or connected to the PCB ground plane (preferred) if unused.                                                                                                                                                                                                        |
| 17, 13                 | V7, V8                             | I      | Voltage Sense Inputs. Pins are internally buffered before being applied to V1ADC to ensure high input impedance and low leakage. Input pins V7, V9 and V8, V10 each can form one redundant input pin-pair. Leave floating or connected to the PCB ground plane (preferred) if unused.                                                                                                                                                                                                                                                                                                                                                |
| 19, 20                 | V9, V10                            | I      | Voltage Sense Inputs. Pins are internally buffered before being applied to V2ADC to ensure high input impedance and low leakage. Input pins V7, V9 and V8, V10 each can form one redundant input pin-pair. Leave floating or connected to the PCB ground plane (preferred) if unused.                                                                                                                                                                                                                                                                                                                                                |
| 28, 29, 30, 31         | GPIO1, GPIO2, GPIO3, GPIO4         | IO     | General-Purpose Inputs and Outputs (GPIOs). Pins can be used as digital inputs or digital outputs (open drain). Pins are high impedance during power down and by default after power up/reset. GPIO3 (SDA) and GPIO4 (SCL) can be used as an I 2 C controller port. GPIO1 (SDIM), GPIO2 (CSBM), GPIO3 (SDOM), and GPIO4 (SCKM) can be used as an SPI controller port. Shared data-in/-out (SDIOM) through GPIO3 only (3-wire SPI, see bit SPI3W in CFGA) is also possible, allowing GPIO1 to be used for other functions, for example, as a fault Output. Leave floating or connected to the PCB ground plane (preferred) if unused. |
| 32, 33, 34, 35, 37, 39 | GPO1, GPO2, GPO3, GPO4, GPO5, GPO6 | IO     | General-Purpose Outputs (GPOs). It can be configured individually for open-drain and push-pull mode. In push-pull mode, the pin can be switched to GND or VDD. It can be used as an input when configured in open-drain mode with output disabled. Dual threshold confirms whether the pin is at high or at low level. Pins are high impedance during power down, and as default after power up/reset. GPO6 can be configured to a push-pull clock output with frequency 0.1 × OSC1. Leave the pins floating if unused.                                                                                                              |
| 36, 38                 | OCA, OCB                           | IO     | Overcurrent Alert Push-Pull or Open Drain Outputs A/B with Programmable Polarity and PWMorStatic Operation Mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 25                     | ISOMD                              | I      | State of the pins can be readback (OCAP, OCBP). In push-pull the pins can switch to VREG. Leave floating if unused. isoSPI Mode Enable Input. Serial interface mode digital input. Connecting ISOMD to logic high level (VREG) configures pins SDO, SCK/IPA, CSB/IMA, and SDI for 2-wire isolated SPI (isoSPI) mode. Connecting ISOMD to logic low level (GND) configures the pins for 4-wire SPI mode.                                                                                                                                                                                                                              |
| 21                     | SDO                                | O      | 4-Wire SPI Serial-Data Open-Drain Output (SDO) when ISOMD is Connected Low (GND). Pull-up resistor must be connected externally (see V OL,SDO specificationonSDO pin, which limits the minimum pull-up resistance). Connect to the PCB ground plane when 2-wire isolated SPI mode is configured through ISOMD connected high.                                                                                                                                                                                                                                                                                                        |
| 24                     | SDI                                | I      | 4-Wire SPI Serial-Data Input (SDI) when ISOMD is Connected Low (GND). Connect to the PCB ground plane when 2-wire isolated SPI mode is configured through ISOMD connected high.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 26                     | SCK/IPA                            | IO     | 4-Wire SPI Serial-Clock Input (SCK) or Differential Positive Input/Output Port A (IPA). The function of this pin depends on the connection of ISOMD. When ISOMD is connected low, the SCK function is active. When ISOMD is connected high, the                                                                                                                                                                                                                                                                                                                                                                                      |
| 27                     | CSB/IMA                            | IO     | 4-Wire SPI Active Low Chip-Select input (CSB) or Differential Negative Input/Output Port A(IMA). The function of this pin depends on the connection of ISOMD. WhenISOMD is connected low, the CSB function is active. When ISOMD is connected high, the IMA function is active.                                                                                                                                                                                                                                                                                                                                                      |
| 22, 23                 | IPB, IMB                           | IO     | Differential (I P B: P lus, I M B: M inus) Input/Output Pins of the Isolated 2-wire SPI Port B. When ISOMD is connected to logic low level (GND), the Port B operates in the controller mode only, and communication can only be initiated on the A-port and never on the B-port. Termination resistor must be connected externally, or the pins can be connected to the PCB ground plane if unused.                                                                                                                                                                                                                                 |
| 49                     | EPAD                               | N/A    | Exposed Pad. Connect exposed pad to GND. The exposed pad is internally connected to GND. It must be connected to the PCB ground plane through several vias. For more details, see the Current Sense Layout Recommendation and Footprint Recommendation sections.                                                                                                                                                                                                                                                                                                                                                                     |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 6. IADC Gain Error vs.Temperature

<!-- image -->

Figure 7. IADC Offset vs. Temperature

<!-- image -->

Figure 8. IxADC TME vs. Input Voltage

<!-- image -->

Figure 9. VBADC Gain Error vs. Temperature

Figure 10. VBADC Offset vs. Temperature

<!-- image -->

Figure 11. VBADC TME vs. Input Voltage

<!-- image -->

## Data Sheet

<!-- image -->

012

Figure 12. VADC Gain Error vs. Temperature

<!-- image -->

Figure 13. VADC Offset vs. Temperature

<!-- image -->

014

Figure 14. VADC TME vs. Input Voltage

## ADBMS2950B

015

<!-- image -->

Figure 15. VREF1P25 vs. Temperature

Figure 16. VREF2 vs. Temperature

<!-- image -->

Figure 17. TMP1 Error vs. Temperature

<!-- image -->

## ADBMS2950B

Figure 18. TMP2 Error vs. Temperature

<!-- image -->

## THEORY OF OPERATION

## SERIAL INTERFACE OVERVIEW

There are two types of serial ports on the ADBMS2950B: a 2wire isolated interface (isoSPI), and a standard, 4-wire SPI. The state of the ISOMD pin determines whether the pins SDO, SDI, SCK/IPA, and CSB/IMA form a 2-wire or 4-wire serial port.

Both the 2-wire and 4-wire serial ports can communicate at 2 Mbps. The ADBMS2950B can be used in a daisy-chain configuration where the second isoSPI interface uses Pins IPB and IMB. When Port A is configured as a 4-wire interface, Port A is always the peripheral port, and Port B is the controller port. Communication is always initiated on Port A of the first device in the daisy-chain configuration. The final device in the daisy-chain does not use Port B. For recommendation on the unused isoSPI port, see the pin descriptions. When Port A is configured as a 2-wire isoSPI interface, communication can be initiated at any port allowing any port to become a peripheral or a controller port.

## 4-Wire SPI Physical Layer

## External Connections

Connecting ISOMD low configures serial Port A for 4-wire SPI. The SDO pin is an open-drain output that requires a pull-up resistor connected to the appropriate supply voltage.

## Timing

The 4-wire serial port is configured to operate in an SPI system using either CPHA = 0 and CPOL = 0, or in an SPI system using CPHA = 1 and CPOL = 1. Consequently, data on SDI must be stable during the rising edge of SCK. The timing is shown in Figure 2.

The maximum data rate is 2 Mbps. However, the device is tested at a higher data rate during production to guarantee operation at the maximum specified data rate.

## 2-Wire isoSPI Physical Layer

The 2-wire interface provides a means to interconnect the ADBMS2950B and ADBMS6830B devices using a simple twisted pair cabling. Standard SPI signals are encoded in differential isoSPI pulses as shown in Figure 3 and Figure 4. The interface is designed for low-packet error rates when the cabling is subjected to high RF fields. Isolation is achieved through an external transformer or capacitors.

When using pure capacitive isolation for the isoSPI between the HV and LV network, it must be considered that voltage transients across the isolation barrier may cause absolute

## ADBMS2950B

maximum voltage or current violation of the IC pins. Such transients also may disturb the current-sense input pins leading to false (over) current signals. It is recommended to use a transformer on the isoSPI link between the HV battery and LV chassis ground or between multiple reconfigurable (parallel or series) HV batteries to minimize the capacitance and thus AC currents between the various subnets. A combination of a transformer at one end and capacitors at the other end of the link is also supported. For more details on noise impacting the (over) current measurement, see the Applications and Current Sense Inputs sections.

## External Connections

The ADBMS2950B has two serial ports: Port A and Port B. Port B is always configured as a 2-wire interface. Port A is either a 2wire or 4-wire interface, which depends on the connection of the ISOMD pin.

When Port A is configured as a 4-wire interface, then it is always the peripheral port, and Port B is the controller port. Communication is always initiated on Port A of the first device in this daisy-chain configuration. If the final device in the daisychain does not use Port B, it must be terminated or shorted to the PCB ground plane. Alternatively, the Port B of the last device can be connected back to a second isoSPI port at the BMS controller side to implement a communication ring architecture. This allows a redundant communication path to all devices in the daisy-chain besides the first that is configured to a 4-wire interface.

When Port A is configured as a 2-wire interface, communication can be initiated on either Port A or Port B. If communication is initiated on Port A, the IC configures Port A as a peripheral and Port B as a controller. Similarly, if communication is initiated on Port B, the IC configures Port B as a peripheral and Port A as a controller. For more details, see the Reversible isoSPI section.

## Reversible isoSPI

Figure 22 shows a daisy-chained configuration of the ADBMS devices using reversible isoSPI. Two ADBMS6821 or a single ADBMS6822 is connected to either side of the daisy-chain. Both ADBMS6821s are configured as controllers and connected to two separate SPI ports of the BMS controller allowing simultaneous communication to split daisy-chains (COMMBK). Alternatively, the ADBMS682x can share the same SPI to connect to the BMS controller. The BMS controller then uses two different CS signals to talk to one of the two channels at a time. The reversible isoSPI provides a redundant communication path in the event of a single point failure in the 2-wire interface. During normal operation, the COMMBKfeature allows to split the isoSPI ring to double the

## ADBMS2950B

communication data throughput by simultaneous split-chain transactions.

## Configurable isoSPI Break

Individual ADBMS2950B devices in a daisy-chain can be configured to halt any transmission of data on the controller isoSPI port. Perform this action by writing the COMMBK bit to 1 in CFGA. Asserting the COMMBK bit does not prevent the IC from receiving and responding to commands from either Port A or Port B. Therefore, this setup is useful in a reversible isoSPI daisy-chain to increase the effective communication bandwidth by splitting the chain in two. This is done by asserting the COMMBK bits in the two center devices in the daisy-chain. Then, the host can simultaneously issue commands to both ends of the daisy-chain as if communicating to two separate daisy-chains.

If a communication fault occurs while some devices are configured for communication break, the host can successively attempt to clear COMMBK in all the devices in the chain, and in both the forward and reverse directions. This allows the host access to all possible devices for identifying the location of the communication fault.

It is also recommended to set the COMMBK bit in case the Port B is not used to lower the VREG supply current consumption.

## isoSPI Pulse Detail

Two ADBMS devices can communicate by transmitting and receiving differential pulses back and forth through an isolation barrier. The transmitter can output three voltage levels: +VA, 0V, and -VA. A positive output results from IP sourcing current and IM sinking current across the load resistor. A negative voltage is developed by IP sinking and IM sourcing. When both outputs are off, the load resistance forces the differential output to 0V.

To eliminate the DC signal component and enhance reliability, isoSPI pulses are defined as symmetric pulse pairs. A +1 pulse is transmitted as a positive pulse followed by a negative pulse. A -1 pulse is transmitted as a negative pulse followed by a positive pulse. The duration of each pulse is defined as t½PW because

Table 23. Port A (Peripheral) isoSPI Port Function

each is half of the required symmetric pair (the total isoSPI pulse duration is 2 × t½PW).

Table 21. isoSPI Pulse Types

| Pulse Type   | First Level (t ½PW )   | Second Level (t ½PW )   | Ending Level   |
|--------------|------------------------|-------------------------|----------------|
| Long +1      | +VA (150 ns)           | -VA (150 ns)            | 0V             |
| Long -1      | -VA (150 ns)           | +VA (150 ns)            | 0V             |
| Short +1     | +VA (50 ns)            | -VA (50 ns)             | 0V             |
| Short -1     | -VA (50 ns)            | +VA (50 ns)             | 0V             |

A BMS controller does not have to generate isoSPI pulses to use this 2-wire interface. The first ADBMS device in the system can communicate to the BMS controller using the 4-wire SPI on its Port A, then daisy-chain to other devices using the 2-wire isoSPI on its Port B. Alternatively, the ADBMS6821 or ADBMS6822 can be used to translate the SPI signals into isoSPI pulses.

When the ADBMS device is operating with Port A configured as an SPI controller, the SPI detects one of four communication events: CSB falling, CSB rising, SCK rising with SDI = 0, and SCK rising with SDI = 1. Each event is converted into one of four pulse types for transmission to another daisy-chained ADBMS device. Long pulses are used to transmit CSB changes, and short pulses transmit data.

Table 22. Port B (Controller) isoSPI Port Function

| Communication Event (Port ASPI)   | Transmitted Pulse (Port B isoSPI)   |
|-----------------------------------|-------------------------------------|
| CS Rising                         | Long +1                             |
| CS Falling                        | Long -1                             |
| SCK Rising Edge, SDI = 1          | Short +1                            |
| SCK Rising Edge, SDI = 0          | Short -1                            |

On the other side of the isolation barrier (that is, at the other end of the cable), the second ADBMS device has Port A configured to isoSPI. It receives each transmitted pulse and reconstructs the SPI signals internally, as shown in Table 23. In addition, during a read command, this port can transmit return data pulses.

The peripheral isoSPI port never transmits long (CSB) pulses. A peripheral isoSPI port transmits short -1 pulse, or short +1 pulse when reading back a data bit. If the controller port receives a null response rather than a short +1 pulse or a short -1 pulse, the controller port recognizes the null response as Logic 1 bit.

| Received Pulse (Peripheral isoSPI Port)   | Internal SPI Port Action   | Return Pulse                         |
|-------------------------------------------|----------------------------|--------------------------------------|
| Long +1                                   | Drive CSB high             | None.                                |
| Long -1                                   | Drive CSB low              | None.                                |
| Short +1                                  | Set SDI = 1                | Short -1 pulse if reading 0 bit.     |
|                                           | Pulse SCK                  | Short +1 pulse if reading 1 bit.     |
|                                           |                            | No return pulse if not in read mode. |
| Short -1                                  | Set SDI = 0                | Short -1 pulse if reading 0 bit.     |
|                                           | Pulse SCK                  | Short +1 pulse if reading a 1 bit.   |
|                                           |                            | No return pulse if not in read mode. |

## Data Sheet

## Timing

Figure 4 shows the isoSPI timing diagram for a read command to daisy-chained ADBMS devices. The bottom device and the corresponding Port A is configured as an SPI port (CSB, SCK, SDI, and SDO). The isoSPI signals of three stacked devices are shown labeled with the port (Port A or Port B) and the device number. Note that ISO B1 and ISO A2 are the same signal but are shown on each end of the transmission cable that connects Device 1 and Device 2. Similarly, ISO B2 and ISO A3 are the same signal, but with the cable delay shown between Device 2 and Device 3.

Bit WN to Bit W0 refer to the 16-bit command code and the 16bit PEC of a read command. At the end of Bit W0, the three devices decode the read command and begin shifting out valid data on the next rising edge of clock SCK. Bit XN to Bit X0 refer to the data shifted out by Device 1. Bit YN to Bit Y0 refer to the

## ADBMS2950B

data shifted out by Device 2, and Bit ZN to Bit Z0 refer to the data shifted out by Device 3. All data is readback from the SDO port on Device 1 in a daisy-chained fashion.

## SPI and isoSPI Interface Topologies

Figure 19 to Figure 22 give an overview of all possible SPI and isoSPI interface configurations using ADBMS2950B and optionally the cell monitor ADBMS6830B. The ADBMS2950B is not supporting the low-power cell monitoring (LPCM) feature of the ADBMS6830B devices. Systems requiring these features must implement either a dedicated daisy-chain with ADBMS6830B devices only, or the mixed daisy-chain according to Figure 22, which allows LPCM operation through the lower ADBMS6822 channel, indicated by the INTR line and the LPCM/normal operation (norm. op) label on the related isoSPI link.

<!-- image -->

<!-- image -->

Figure 20. Digital Isolated 4-wire SPI with Non-Reversible Mixed Device isoSPI Daisy-Chain Interface Configuration

Figure 21. Non-Reversible Mixed Device isoSPI Daisy-Chain Interface Configuration

<!-- image -->

Figure 22. Reversible Mixed Device isoSPI Daisy-Chain Interface Configuration with LPCM Support

<!-- image -->

## NETWORK LAYER OF (ISO)SPI PROTOCOL

This chapter describes the communication protocol of the SPI (Port A) or isoSPI (Port A or Port B) peripheral interface.

## Communication Protocol

The protocol formats for commands are shown from Table 25 to Table 29. Table 24 shows the protocol keys to read the protocol diagrams.

| Name      | Description                                                                |
|-----------|----------------------------------------------------------------------------|
| CMD0      | Command Byte 0 (see Table 29).                                             |
| CMD1      | Command Byte 1 (see Table 29).                                             |
| PEC0      | Packet Error Code Byte 0 (see Table 30).                                   |
| PEC1      | Packet Error Code Byte 1 (see Table 30).                                   |
| DPEC0     | Data Packet Error Code Byte 0 (see Table 31 and Table 32).                 |
| DPEC1     | Data Packet Error Code Byte 1 (see Table 31 and Table 32).                 |
| ...       | Continuation of Protocol.                                                  |
| B0 to B3  | 1st four bytes of SPI transaction received by all devices in daisy- chain. |
| S<m>:B<n> | Byte n send to (WRITE) or read from (READ) device m.                       |
| N         | Total number of devices in daisy-chain.                                    |

## Table 25. WRITE Command. Data and DPEC Bytes are Sent from Serial Controller to Peripheral

| B0   | B1   | B2   | B3   | SN:B0       | ...   | SN:B5       | SN:B6   | SN:B7   | ...   | S1:B0       | ...   | S1:B5       | S1:B6   | S1:B7   |
|------|------|------|------|-------------|-------|-------------|---------|---------|-------|-------------|-------|-------------|---------|---------|
| CMD0 | CMD1 | PEC0 | PEC1 | Data Byte 0 | ...   | Data Byte 5 | DPEC0   | DPEC1   | ...   | Data Byte 0 | ...   | Data Byte 5 | DPEC0   | DPEC1   |

## Table 26. Read Command. Data and DPEC Bytes are Sent from Serial Peripheral to Controller

| B0   | B1   | B2   | B3   | S1:B0       | ...   | S1:B5       | S1:B6   | S1:B7   | ...   | SN:B0       | ...   | SN:B5       | SN:B6   | SN:B7   |
|------|------|------|------|-------------|-------|-------------|---------|---------|-------|-------------|-------|-------------|---------|---------|
| CMD0 | CMD1 | PEC0 | PEC1 | Data Byte 0 | ...   | Data Byte 5 | DPEC0   | DPEC1   | ...   | Data Byte 0 | ...   | Data Byte 5 | DPEC0   | DPEC1   |

## Table 27. Read-All Command

| B0   | B1   | B2   | B3   | S1:B0       | S1:B1       | ...   | S1:B19       | S1:B20   | S1:B21   |
|------|------|------|------|-------------|-------------|-------|--------------|----------|----------|
| CMD0 | CMD1 | PEC0 | PEC1 | Data Byte 0 | Data Byte 1 | ...   | Data Byte 19 | DPEC0    | DPEC1    |

| Table 28. Poll or 4-Byte-Only Commands. The Optional Poll Data is Sent from Peripheral to Controller   | Table 28. Poll or 4-Byte-Only Commands. The Optional Poll Data is Sent from Peripheral to Controller   | Table 28. Poll or 4-Byte-Only Commands. The Optional Poll Data is Sent from Peripheral to Controller   | Table 28. Poll or 4-Byte-Only Commands. The Optional Poll Data is Sent from Peripheral to Controller   | Table 28. Poll or 4-Byte-Only Commands. The Optional Poll Data is Sent from Peripheral to Controller   | Table 28. Poll or 4-Byte-Only Commands. The Optional Poll Data is Sent from Peripheral to Controller   |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| B0                                                                                                     | B1                                                                                                     | B2                                                                                                     | B3                                                                                                     |                                                                                                        | ...                                                                                                    |
| CMD0                                                                                                   | CMD1                                                                                                   | PEC0                                                                                                   | PEC1                                                                                                   | Optional Poll Data                                                                                     | ...                                                                                                    |

## Table 29. Command Format

| Name   | Bit 7   | Bit 6   | Bit 5   | Bit 4   | Bit 3   | Bit 2   | Bit 1   | Bit 0   |
|--------|---------|---------|---------|---------|---------|---------|---------|---------|
| CMD0   | 0       | 0       | 0       | 0       | 0       | CC[10]  | CC[9]   | CC[8]   |
| CMD1   | CC[7]   | CC[6]   | CC[5]   | CC[4]   | CC[3]   | CC[2]   | CC[1]   | CC[0]   |

For most read and write commands, the data is 6 register bytes plus 6 bits of command counter, which are part of the DPEC0 byte for a total of 54 data bits followed by the PEC10 bits. Without the command counter bits, this makes 48 register data bits, which is why those commands are indicated by the RD48 or WR48 command type throughout this data sheet.

The special Read All (RDALL...) commands RDALLI, RDALLA, RDALLV, RDALLR, RDALLX, and RDALLC return 20 bytes of register data plus command counter followed by the PEC10 bits as shown in Table 27.

The RDALL commands do not return any data received at the ADBMS2950B's isoSPI controller port, thus can be used to read data from a single device only, which can be a single IC

application as shown in Figure 19 or reading data from the first ADBMS2950B shown in Figure 20, Figure 21, or Figure 22.

The limit to one device or the first device in a daisy-chain is indicated in Table 27 by showing S1:... bytes only.

Table 32 shows the format for the DPEC containing command counter and PEC10 when reading data.

For write commands, register data is sent to ADBMS2950B, followed by the DPEC. For example, when writing CFGA register, the data is sent in the following order: CFGA0, …, CFGA5, DPEC0, and DPEC1. Table 31 shows the format for DPEC when writing data.

## Table 24. Protocol Keys

## Data Sheet

For read commands, register data is received from ADBMS2950B, followed by the DPEC. For example, when reading CFGA, the data is received in the following order: CFGA0, …, CFGA5, DPEC0, and DPEC1. Table 32 shows the format for the DPEC when reading data.

Read and write commands may be interrupted at any device boundary (multiple of 8 bytes, not counting the initial 4 CMD, PEC bytes) to read from or write to a leading device subset of the daisy-chain only. The command counter of the devices not being accessed does not increment.

## Command PEC

The command-packet error code (CPEC) is a 15-bit CRC value (PEC15) calculated for all 16 bits of a command, which uses the initial PEC value of 0b000000000010000 and the following characteristic polynomial:

<!-- formula-not-decoded -->

To calculate the 15-bit command PEC value, a simple procedure can be established, as follows:

1. Initialize the Command PEC to 0b000000000010000 (15-bit value).
2. For each bit DIN, set:

IN0 = DIN XOR PEC[14]

IN3 = IN0 XOR PEC[2]

IN4 = IN0 XOR PEC[3]

IN7 = IN0 XOR PEC[6]

Table 30. Command PEC Format

## ADBMS2950B

```
IN8 = IN0 XOR PEC[7] IN10 = IN0 XOR PEC[9] IN14 = IN0 XOR PEC[13] Update the 15-bit Command PEC as follows: PEC[14] = IN14 PEC[13] = PEC[12] PEC[12] = PEC[11] PEC[11] = PEC[10] PEC[10] = IN10 PEC[9] = PEC[8] PEC[8] = IN8 PEC[7] = IN7 PEC[6] = PEC[5] PEC[5] = PEC[4] PEC[4] = IN4 PEC[3] = IN3 PEC[2] = PEC[1] PEC[1] = PEC[0] PEC[0] = IN0
```

- 3.
4. Go back to step 2 until all 16 command bits are shifted.

The final PEC (16 bits) is the 15-bit value in the PEC register with a 0-bit appended to the LSB. The ADBMS2950B calculates the command PEC for any command received and compares it to the PEC following the command. The command is valid only if the PEC matches. Table 30 shows the format of the command PEC.

| Name   | Bit 7   | Bit 6   | Bit 5   | Bit 4   | Bit 3   | Bit 2   | Bit 1   | Bit 0   |
|--------|---------|---------|---------|---------|---------|---------|---------|---------|
| PEC0   | PEC[14] | PEC[13] | PEC[12] | PEC[11] | PEC[10] | PEC[9]  | PEC[8]  | PEC[7]  |
| PEC1   | PEC[6]  | PEC[5]  | PEC[4]  | PEC[3]  | PEC[2]  | PEC[1]  | PEC[0]  | 0       |

## Data PEC

The data-packet error code (DPEC) is a 10-bit CRC value calculated for data bits, which includes the command counter bits, during a read or write commands. This data includes register group bytes plus the six command counter bits (0b000000 for write commands). Data is regarded as valid only if the data PEC matches.

The initial data PEC value is 0b0000010000 and the following characteristic polynomial: x 10 + x 7 + x 3 + x 2 + x + 1.

To calculate the 10-bit data PEC value, a simple procedure can be established, as follows:

1. Initialize the data PEC to 0b0000010000 (10-bit value).
2. For each bit DIN, set: IN0 = DIN XOR PEC[9]
3. PEC[9] = PEC[8] PEC[8] = PEC[7] PEC[7] = IN7 PEC[6] = PEC[5] PEC[5] = PEC[4] PEC[4] = PEC[3] PEC[3] = IN3 PEC[2] = IN2 PEC[1] = IN1
4. Go back to step 2 until all the data, including six command counter bits (0b000000 for write commands) is shifted.

```
IN1 = IN0 XOR PEC[0] IN2 = IN0 XOR PEC[1] IN3 = IN0 XOR PEC[2] IN7 = IN0 XOR PEC[6] Update the 10-bit data PEC as follows: PEC[0] = IN0
```

Table 31. Write Data PEC Format

| Name   | Bit 7   | Bit 6   | Bit 5   | Bit 4   | Bit 3   | Bit 2   | Bit 1   | Bit 0   |
|--------|---------|---------|---------|---------|---------|---------|---------|---------|
| DPEC0  | 0       | 0       | 0       | 0       | 0       | 0       | PEC[9]  | PEC[8]  |
| DPEC1  | PEC[7]  | PEC[6]  | PEC[5]  | PEC[4]  | PEC[3]  | PEC[2]  | PEC[1]  | PEC[0]  |

## Table 32. Read Command Counter and Data PEC Format

| Name   | Bit 7   | Bit 6   | Bit 5   | Bit 4   | Bit 3   | Bit 2   | Bit 1   | Bit 0   |
|--------|---------|---------|---------|---------|---------|---------|---------|---------|
| DPEC0  | CCNT[5] | CCNT[4] | CCNT[3] | CCNT[2] | CCNT[1] | CCNT[0] | PEC[9]  | PEC[8]  |
| DPEC1  | PEC[7]  | PEC[6]  | PEC[5]  | PEC[4]  | PEC[3]  | PEC[2]  | PEC[1]  | PEC[0]  |

## Command Counter

A command counter, CCNT[5:0] as shown in Table 32, enhances system level software diagnostics and communication integrity. The command counter is initialized to 0 on power cycling, by the SRST or by the RSTCC command. The command counter increments if ADBMS2950B receives a command without data, which are the 4-byte commands like SNAP, UNSNAP, and ADI1, or if it receives a command with write data such as WRCFGA and CLRFLAG. For a command to be received, the command PEC and data PEC should match.

When the command counter increments past the maximum value of 63, it rolls over to a value of 1, not 0. The 0 value is reserved for specific reset cases listed previously. All read commands return the register data followed by the command counter and data PEC.

The host controller can keep track of the expected command counter while sending commands and compare it with the CCNT value received from the ADBMS2950B with every read command. It is the responsibility of the host controller to confirm that SPI frames are received in time as expected, to verify the data checksum, and to track the command counter.

## Polling Methods

## Single Device SPI Polling

In configurations that communicate in SPI mode, there are two methods of polling. The first method is to hold CSB low after an ADC conversion command is sent. After entering a conversion command, the SDO line is driven low when the device is busy performing conversions. SDO is pulled high when the device completes conversions. However, the SDO also returns to high when CSB goes high even if the device has not completed the conversion (see Figure 23). A problem with this method is that the controller is not free to do other serial communication while waiting for ADC conversions to complete.

The next method overcomes this limitation. The controller can send an ADC command, perform other tasks, and then send a Poll command to determine the status of the ADC conversions. After entering the Poll command, SDO goes low if the device is busy performing operations. SDO is pulled high at the end of operations. However, SDO also goes high when CSB goes high, even if the device has not completed the operation.

<!-- image -->

Figure 23. SDO Polling After an ADC Conversion Command (Single Device Configuration)

<!-- image -->

## Data Sheet

## Daisy-Chain Polling

In a daisy-chain configuration of N stacked devices, the same two polling methods can be used.

If the bottom device communicates in SPI mode, the SDO of the bottom device indicates the operation status of the entire stack. For example, SDO remains low until all the devices in the stack complete the operations.

In the first method of polling, after an ADC conversion command is sent, clock pulses are sent on SCK while keeping CSB low. The SDO status becomes valid only at the end of 2 × N clock pulses on SCK and is updated for each clock pulse that follows (see Figure 25).

In the second method, the PLADC command is sent followed by clock pulses on SCK while keeping CSB low. Similar to the

Figure 25. SDO Polling After an ADC Conversion Command (Daisy-Chain Configuration)

<!-- image -->

Figure 26. SDO Polling Using PLADC Command (Daisy-Chain Configuration)

<!-- image -->

chapters organized in functional groups. Additional ADBMS6830B compatible commands are listed in Table 87.

## Command Codes Overview

Table 33 lists all available commands of the ADBMS2950B.

Details for each command are described in the following

Table 33. Command Codes Overview

| Name   | Type   |   BIT 10 |   BIT 9 | BIT 8   | BIT 7   | BIT 6   |   BIT 5 | BIT 4   | BIT 3    | BIT 2    | BIT 1    | BIT 0    | Description                                              |
|--------|--------|----------|---------|---------|---------|---------|---------|---------|----------|----------|----------|----------|----------------------------------------------------------|
| SRST   | CMD    |        0 |       0 | 0       | 0       | 0       |       1 | 0       | 0        | 1        | 1        | 1        | Software reset, including CCNT reset (ADBMS6830B: SRST). |
| RSTCC  | CMD    |        0 |       0 | 0       | 0       | 0       |       1 | 0       | 1        | 1        | 1        | 0        | Reset Command Counter (ADBMS6830B: RSTCC).               |
| SNAP   | CMD    |        0 |       0 | 0       | 0       | 0       |       1 | 0       | 1        | 1        | 0        | 1        | Freeze result registers (ADBMS6830B: SNAP).              |
| UNSNAP | CMD    |        0 |       0 | 0       | 0       | 0       |       1 | 0       | 1        | 1        | 1        | 1        | Unfreeze result registers (ADBMS6830B: UNSNAP).          |
| ADI1   | CMD    |        0 |       1 | RD      | OPT[3]  | 1       |       1 | OPT[2]  | 0        | x        | OPT[1]   | OPT[0]   | Start I1ADC and VB1ADC (ADBMS6830B: ADCV).               |
| ADI2   | CMD    |        0 |       0 | 1       | OPT[3]  | 1       |       1 | OPT[2]  | 1        | 0        | OPT[1]   | OPT[0]   | Start I2ADC and VB2ADC (ADBMS6830B: ADSV).               |
| ADV    | CMD    |        1 |       0 | 0       | OW[1:0] | OW[1:0] |       1 | 1       | VCH[3:0] | VCH[3:0] | VCH[3:0] | VCH[3:0] | Start V1ADC and V2ADC.                                   |

## ADBMS2950B

first method, the SDO status is valid only after 2 × N clock cycles on SCKI and is updated after each clock cycle that follows (see Figure 26).

If the bottom device communicates in isoSPI mode, then isoSPI data pulses are sent to the device to update the operation status. On the serial controller side, where the ADBMS682x is used, this action is achieved by clocking the SCK pin. The operation status is valid only after the bottom ADBMS2950B device receives 2 × N isoSPI data pulses, and the status is updated for each isoSPI data return pulse that follows. The device returns a low data pulse if any of the devices in the stack is busy performing operations and returns a high data pulse if all the devices completed conversions.

## ADBMS2950B

## Data Sheet

| Name      | Type   |   BIT 10 |   BIT 9 |   BIT 8 |   BIT 7 | BIT 6   |   BIT 5 | BIT 4   | BIT 3   | BIT 2   | BIT 1   | BIT 0   | Description                                                               |
|-----------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------------------------------------------------------------------------|
| ADX       | CMD    |        1 |       0 |       1 |       0 | 0       |       1 | 1       | 0       | x       | x       | x       | Start AUX ADC.                                                            |
| CLRI      | CMD    |        1 |       1 |       1 |       0 | 0       |       0 | 1       | 0       | 0       | 0       | 1       | Clear IxADC and VBxADC results (ADBMS6830B: CLRCELL).                     |
| CLRA      | CMD    |        1 |       1 |       1 |       0 | 0       |       0 | 1 0     |         | 1       | 0       | 0       | Clear IxADC and VBxADC accumulators (ADBMS6830B: CLRFC).                  |
| CLRVX     | CMD    |        1 |       1 |       1 |       0 | 0       |       0 | 1       | 0       | 0       | 1       | 0       | Clears all VxADC and AUX ADC results (ADBMS6830B: CLRAUX).                |
| CLRO      | CMD    |        1 |       1 |       1 |       0 | 0       |       0 | 1       | 0       | 0       | 1       | 1       | Clears all OCxADC results.                                                |
| CLRFLAG   | WR48   |        1 |       1 |       1 |       0 | 0       |       0 | 1       | 0       | 1       | 1       | 1       | Write 1 to Clear Flag Register Latches (ADBMS6830B: CLRFLAG).             |
| RDFLAG    | RD48   |        0 |       0 |       0 |       0 | ERR     |       1 | 1       | 0       | 0       | 1       | 0       | Read FLAG register (ADBMS6830B: RDSTATC).                                 |
| RDSTAT    | RD48   |        0 |       0 |       0 |       0 | 0       |       1 | 1       | 0       | 1       | 0       | 0       | Read STAT register (ADBMS6830B: RDSTATE).                                 |
| RDI       | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 0       | 1       | 0       | 0       | Read I1ADC and I2ADC results (ADBMS6830B: RDCVA).                         |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 0       | 0       | 1       | 0       | ADBMS6830B compatible code RDFCA.                                         |
| RDVB      | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 0       | 1       | 1       | 0       | Read VB1ADC and VB2ADC results (ADBMS6830B: RDCVB). ADBMS6830B compatible |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 0       | 0       | 1       | 1       |                                                                           |
| RDIACC    | RD48   |        0 |       0 |       0 |       0 | 1       |       0 | 0       | 0       | 1       | 0       | 0       | Read I1ADC and I2ADC accumulators (ADBMS6830B: RDACA).                    |
| RDVBACC   | RD48   |        0 |       0 |       0 |       0 | 1       |       0 | 0       | 0       | 1       | 1       | 0       | Read VB1ADC and VB2ADC accumulators (ADBMS6830B: RDACB).                  |
| RDIVB1    | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 1       | 0       | 0       | 0       | Read I1ADC and VB1ADC results (ADBMS6830B: RDCVC).                        |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 0       | 1       | 0       | 0       | ADBMS6830B compatible code RDFCC.                                         |
| RDIVB1ACC | RD48   |        0 |       0 |       0 |       0 | 1       |       0 | 0       | 1       | 0       | 0       | 0       | Read I1ADC and VB1ADC accumulators (ADBMS6830B: RDACC).                   |
| RDV1A     | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 1       | 0       | 1       | 0       | Reads V1ADC results (ADBMS6830B: RDCVD).                                  |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 0       | 1       | 0       | 1       | ADBMS6830B compatible code RDFCD.                                         |
|           |        |        0 |       0 |       0 |       0 | 1       |       0 | 0       | 1       | 0       | 1       | 0       | ADBMS6830B compatible code RDACD.                                         |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 1       | 0       | 0       | 1       | ADBMS6830B compatible code RDAUXA.                                        |
| RDV1B     | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 1       | 0       | 0       | 1       | Reads V1ADC results                                                       |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 0       | 1       | 1       | 0       | (ADBMS6830B: RDCVE). ADBMS6830B compatible code RDFCE.                    |
|           |        |        0 |       0 |       0 |       0 | 1       |       0 | 0       | 1       | 0       | 0       | 1       | ADBMS6830B compatible code RDACE.                                         |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 1       | 0       | 1       | 0       | ADBMS6830B compatible code RDAUXB.                                        |
| RDV1C     | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 0       | 0       | 1       | 1       | Reads V1ADC results (ADBMS6830B: RDSVA).                                  |
| RDV1D     | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 1       | 0       | 1       | 1       | Reads V1ADC/V2ADC results (ADBMS6830B: RDAUXC).                           |
| RDV2A     | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 0       | 1       | 1       | 1       | Reads V2ADC results (ADBMS6830B: RDSVC).                                  |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 1       | 1       | 0       | 0       | ADBMS6830B compatible code RDRAXA.                                        |
| RDV2B     | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 1       | 1       | 0       | 1       | Reads V2ADC results (ADBMS6830B: RDSVD).                                  |
|           |        |        0 |       0 |       0 |       0 | 0       |       0 | 1       | 1       | 1       | 0       | 1       | ADBMS6830B compatible code RDRAXB.                                        |
| RDV2C     | RD48   |        0 |       0 |       0 |       0 | 0       |       0 | 0       | 0       | 1       | 0       | 1       | Reads V2ADC results (ADBMS6830B: RDSVB).                                  |

## Data Sheet

## ADBMS2950B

| Name          | Type   | BIT 10   | BIT 9   | BIT 8   | BIT 7   | BIT 6   | BIT 5   | BIT 4   | BIT 3   | BIT 2   | BIT 1   | BIT 0   | Description                                                                       |
|---------------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|-----------------------------------------------------------------------------------|
| RDV2D         | RD48   | 0        | 0       | 0       | 0       | 0       | 0       | 1       | 1       | 1       | 1       | 1       | Reads V1ADC/V2ADC results (ADBMS6830B: RDAUXD).                                   |
| RDV2E         | RD48   | 0        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 1       | Reads V2ADC results (ADBMS6830B: RDRAXD).                                         |
| RDXA          | RD48   | 0        | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 0       | Reads AUX ADC results (ADBMS6830B: RDSTATA).                                      |
| RDXB          | RD48   | 0        | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 0       | 1       | Reads AUX ADC results (ADBMS6830B: RDSTATB).                                      |
| RDXC          | RD48   | 0        | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 1       | 1       | Reads AUX ADC results (ADBMS6830B: RDSTATD).                                      |
| RDOC          | RD48   | 0 0      | 0 0     | 0 0     | 0 0     | 0 0     | 0 0     | 0 1     | 1 0     | 0 1     | 1 1     | 1 1     | Read OCxADC results (ADBMS6830B: RDCVF). ADBMS6830B compatible code RDFCF.        |
| RDSID         | RD48   | 0        | 0       | 0       | 0       | 0       | 1       | 0       | 1       | 1       | 0       | 0       | Read SID register (ADBMS6830B: RDSID).                                            |
| RDCFGA        | RD48   | 0        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 0       | Read CFGA register (ADBMS6830B: RDCFGA).                                          |
| RDCFGB        | RD48   | 0        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 1       | 0       | Read CFGB register (ADBMS6830B: RDCFGB).                                          |
| RDCOMM        | RD48   | 1        | 1       | 1       | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 0       | Read COMMregister (ADBMS6830B: RDCOMM).                                           |
| WRCFGA        | WR48   | 0        | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 0       | 1       | Write CFGA register (ADBMS6830B: WRCFGA).                                         |
| WRCFGB        | WR48   | 0        | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 1       | 0       | 0       | Write CFGB register (ADBMS6830B: WRCFGB).                                         |
| WRCOMM        | WR48   | 1        | 1       | 1       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | 1       | Write COMMregister (ADBMS6830B: WRCOMM).                                          |
| STCOMM        | CMD    | 1        | 1       | 1       | 0       | 0       | 1       | 0       | 0       | 0       | 1       | 1       | Send COMMregister (ADBMS6830B: STCOMM).                                           |
| PLADC         | CMD    | 1        | 1       | 1       | 0       | 0       | 0       | 1       | 1       | 0       | 0       | 0       | Poll IxADC, VBxADC, VxADC, and AUX ADC conversion completion (ADBMS6830B: PLADC). |
| PLI1          | CMD    | 1        | 1       | 1       | 0       | 0       | 0       | 1       | 1       | 1       | 0       | 0       | Poll I1ADC and VB1ADC conversion completion (ADBMS6830B: PLCADC).                 |
| PLI2          | CMD    | 1        | 1       | 1       | 0       | 0       | 0       | 1       | 1       | 1       | 0       | 1       | Poll I2ADC and VB2ADC conversion completion (ADBMS6830B: PLSADC).                 |
| PLV           | CMD    | 1        | 1       | 1       | 0       | 0       | 0       | 1       | 1       | 1       | 1       | 0       | Poll V1ADC and V2ADC conversion completion (ADBMS6830B: PLAUX1).                  |
| PLX           | CMD    | 1        | 1       | 1       | 0       | 0       | 0       | 1       | 1       | 1       | 1       | 1       | Poll AUX ADC conversion completion (ADBMS6830B: PLAUX2).                          |
| RDALLI RDALLA | RD160  | 0        | 0       | 0       | 0       | 0       | 0       | 0       | 1       | 1 1     | 0 0     | 0 0     | Read IxADC and VBxADC results. Read IxADC and VBxADC accumulators.                |
|               | RD160  | 0        | 0       | 0       | 0       | 1       | 0       | 0       | 1       |         |         |         | Reads all external input V1ADC results and V9, V10 results measured by V2ADC      |
| RDALLV        | RD160  | 0        | 0       | 0       | 0       | 0       | 1       | 1       | 0       | 1       | 0       | 1       | only.                                                                             |
| RDALLR        | RD160  | 0        | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 1       | Reads all external input V2ADC results and V7, V8 results measured by V1ADC only. |
| RDALLX        | RD160  | 0        | 0       | 0       | 0       | 1       | 0       | 1       | 0       | 0       | 0       | 1       | Reads all AUX ADC results.                                                        |
| RDALLC        | RD160  | 0        | 0       | 0       | 0       | 0       | 0       | 1       | 0       | 0       | 0       | 0       | Read All configuration, flag and status registers.                                |

## Timing Considerations

This section shows how to calculate the length of SPI transactions when operating with a single device (Figure 19 or any of the subsequent figures with one device only) or when operating in a daisy-chain of pack and link monitor devices

ADBMS2950B and optional cell monitor devices ADBMS6830B (see Figure 20, Figure 21, and Figure 22).

Table 34 describes the parameters used for the calculation and the resulting timings. For the single device scenario NP = 1, NQ = 0 resulting in N = 1 is assumed.

## ADBMS2950B

The daisy-chain scenario considers a reconfigurable 400V/800V battery supervised by two pack monitors ADBMS2950B (one for each 400V battery) and 10 cell monitors ADBMS6830B (10 × 16 = 160 cells total) connected in a reversible daisy-chain according to Figure 22. During normal operation, the reversible isoSPI ring is split through software (COMMBK) into two chains allowing simultaneous serial transactions, one chain with NP = 2, NQ = 5 and one with NP = 0, NQ = 5. The latter is not considered here, being a cell monitor only daisy-chain resulting in shorter serial transactions and thus consuming less time on the SPI controller. For the daisy-chain scenario, the first chain with NP = 2, NQ = 5 is assumed.

For the best communication efficiency, the pack monitors are placed at the beginning of the daisy-chain. This allows reading data from the pack monitors only (RP , Table 37) without the overhead of data returned by the cell monitors. To support LPCM on the cell monitors while shutting down the power to the ADBMS2950B devices, those are placed to one end of the isoSPI ring only, which allows the LPCM Heartbeat messages to propagate to the other end.

For simplicity, it is assumed the data received from the pack monitors is discarded when reading from the cell monitors. For improved efficiency, the BMS controller software can consider this data, which allows to reduce the number of read commands required for the pack monitors.

The timing parameter Tdb can be as low as 0 and depends on the implementation of the SPI controller driver and the operating system (OS) only. The timing parameter Ts must be at least 2 μs according to the Table 14 parameter t5, CSB Rising Edge to CSB Falling Edge, but it is typically greater and also depends on the SPI controller driver and OS.

Table 34. SPI Sequence Timing Parameters

| Name   | Value   | Description                                                       |
|--------|---------|-------------------------------------------------------------------|
| t      |         | Absolute SPI transaction time stamp.                              |
| CMD    |         | Command name.                                                     |
| Type   |         | Command type.                                                     |
| Bc     |         | Number of command (and PEC) bytes is always 4.                    |
| Bd     |         | Number of bytes depends on command type.                          |
| B      |         | Number of command bytes plus data bytes.                          |
| T      |         | Serial transaction time equals B × Tb + Ts.                       |
| NP     | 2       | Number of pack monitors within daisy-chain.                       |
| NQ     | 5       | Number of cell monitors within daisy-chain.                       |
| N      | 7       | Total number of devices in daisy-chain.                           |
| Tdb    | 0s      | Byte delay to account for BMS controller SWSPI controller delays. |
| Fspi   | 2 MHz   | SPI frequency, ADBMS devices support up to 2 MHz.                 |
| Tb     | 4 μs    | Transaction time per byte is equal to 8 ÷ Fspi + Tdb.             |
| Ts     | 2 μs    | BMS controller SWdependent delay between SPI transactions.        |

Parameter values not given in Table 34 depend on the use case scenario and are listed in Table 35, Table 36, Table 37, and Table 38.

Any serial transaction begins with 2 bytes command code followed by 2 bytes command PEC according to Table 25, Table 26, Table 27, and Table 28. The 4-byte command phase

(CMD0, CMD1, PEC0, PEC1) is received simultaneously by all devices besides latencies due to cable and device transceiver propagation delays specified as tDSY(D) in Table 17.

After the command phase, when reading or writing data, all devices in the daisy-chain form a logical shift register with 8 bytes per device. Reading or writing the whole daisy-chain requires a SPI transaction of 4 + N × 8 bytes. A subset of devices at the beginning of the daisy-chain can be accessed by cutting the transaction at a device boundary.

## Single Device

When operating with a single ADBMS2950B device one can benefit from the efficiency of the Read All RDALL (RALL) commands transmitting a total of 20 data bytes. 6 bytes register groups can also be accessed by Read RD48 (R) commands and are written by Write WR48 (W) commands. 4 bytes only Action (A) commands are used for example to trigger ADC conversions (for example, ADV).

Table 35. Single Device Command Types

| Type   |   Bc |   Bd |   B | Description                    |
|--------|------|------|-----|--------------------------------|
| A      |    4 |    0 |   4 | Action command, no data bytes. |
| RALL   |    4 |   20 |  24 | Read All (Bd = 20).            |
| R      |    4 |    8 |  12 | Read (Bd = 8).                 |
| W      |    4 |    8 |  12 | Write (Bd = 8).                |

Table 36 shows the timing of an example sequence, writing to CFGA to adjust the VSx bits, trigger VxADC (ADV) and AUX ADC (ADX) and read all conversion results (RDALLV, RDALLR, RDALLX). Note that the host controller must wait for all conversions to be completed before reading the results. Assuming such a sequence is scheduled at a fixed period T, where T &gt; Total-Conversion-Time, the order of read commands and write together with trigger commands can be swapped allowing to read previous results before triggering new conversions.

Table 36. Single Device Vx and Diagnostic Measure Sequence Example

| #     | CMD    | Type   |   B | T      | Description                                          |
|-------|--------|--------|-----|--------|------------------------------------------------------|
| 1     | WRCFGA | W      |  12 | 50 μs  | Write CFGA to set VSx.                               |
| 2     | ADV    | A      |   4 | 18 μs  | Trigger VxADCs (V1 to V10).                          |
| 3     | ADX    | A      |   4 | 18 μs  | Trigger AUX ADC (VREF1P25).                          |
| 4     | RDALLV | RALL   |  24 | 98 μs  | Read V1 to V8 by V1ADC and V9, V10 by V2ADC.         |
| 5     | RDALLR | RALL   |  24 | 98 μs  | Read V1 to V6, V9, V10 by V2ADC and V7, V8 by V1ADC. |
| 6     | RDALLX | RALL   |  24 | 98 μs  | Read all AUX ADC results.                            |
| Total |        |        |  92 | 380 μs |                                                      |

## Daisy-Chain

When operating with a daisy-chain of the ADBMS2950B (and optional subsequent ADBMS6830B) devices, the Read All

## Data Sheet

commands allow to read from the first device in the chain only. The Read (RD48) commands allow to access data from all devices in the chain. The following example assumes two ADBMS2950B (NP = 2) and five ADBMS6830B (NQ = 5) making a total of seven devices in the daisy-chain.

Table 37. Daisy Chain Command Types

| Type   |   Bc |   Bd |   B | Description                                                  |
|--------|------|------|-----|--------------------------------------------------------------|
| A      |    4 |    0 |   4 | Action command, no data bytes.                               |
| R1     |    4 |    8 |  12 | Read from 1st device in daisy-chain (Bd = 8).                |
| W1     |    4 |    8 |  12 | Write to 1st device in daisy-chain (Bd = 8).                 |
| RP     |    4 |   16 |  20 | Read from pack monitors (first in chain) only (Bd = NP × 8). |
| WP     |    4 |   16 |  20 | Write to pack monitors (first in chain) only (Bd = NP × 8).  |
| RALL   |    4 |   20 |  24 | Read All from 1st device in daisy-chain (Bd = 20).           |
| R      |    4 |   56 |  60 | Read from all devices in daisy-chain (Bd = N×8).             |
| W      |    4 |   56 |  60 | Write to all devices in daisy-chain (Bd = N × 8).            |

Table 38 shows the timing of an example sequence, triggering cell voltage and battery pack voltage and current conversions, read all cells from all cell monitors and read voltages and currents from all pack monitors.

Note that the ADI1 and ADCV are compatible commands. When sending ADCV to a daisy-chain, all cell monitor devices trigger cell conversion and all pack monitor devices trigger pack current and voltage conversion synchronously. In result, it is not required to send ADCV and ADI1 separately. Also, in typical applications, ADCV or ADI1 are issued with the CONT bit set only once after initialization, resulting in the related ADCs to operate continuously. The conversion result registers update periodically and can be read by the host controller any time. The SNAP, UNSNAP commands allow to read data coherently from the daisy-chain.

Table 38. Daisy-Chain Pack and Cell Monitor Sequence Example

|   # | CMD        | Type   |   B | T      | Description                                  |
|-----|------------|--------|-----|--------|----------------------------------------------|
|   1 | ADCV, ADI1 | A      |   4 | 18 μs  | Trigger cell voltage and current conversion. |
|   2 | ADV        | A      |   4 | 18 μs  | Trigger VxADCs.                              |
|   3 | RDACA      | R      |  60 | 242 μs | Read cells 1 to 3.                           |
|   4 | RDACB      | R      |  60 | 242 μs | Read cells 4 to 6.                           |
|   5 | RDACC      | R      |  60 | 242 μs | Read cells 7 to 9.                           |
|   6 | RDACD      | R      |  60 | 242 μs | Read cells 10 to 12.                         |
|   7 | RDACE      | R      |  60 | 242 μs | Read cells 13 to 15.                         |
|   8 | RDACF      | R      |  60 | 242 μs | Read cells 16.                               |
|   9 | RDV1A      | RP     |  20 | 82 μs  | Read V1ADC results V1A to V3A.               |
|  10 | RDV1B      | RP     |  20 | 82 μs  | Read V1ADC results V4A to V6A.               |
|  11 | RDV1C      | RP     |  20 | 82 μs  | Read V1ADC results V7A, V8A, VREF2A.         |
|  12 | RDIACC     | RP     |  20 | 82 μs  | Read battery pack current.                   |
|  13 | RDVBACC    | RP     |  20 | 82 μs  | Read battery pack voltage.                   |

| #     | CMD   | Type   |   B | T      | Description   |
|-------|-------|--------|-----|--------|---------------|
| Total |       |        | 468 | 1.9 ms |               |

## CORE STATE DESCRIPTION

Figure 27. Core State Diagram

<!-- image -->

## Power-Down State

The ADBMS2950B is in power-down state when its VDD and VREG supplies are not provided. In this state, the OCx, GPIO, and GPO output pins as well as the V1 to V10 and VBAT input pins are high impedance. External sources can charge the VREG pin through conductive paths of internal protection diodes as shown in the ESD protection diagram (see Figure 50). In turn, VREG can charge VDD through another internal protection diode. The total current that is injected into VREG in this manner should not exceed 4 mA. Once VREG has reached its power-on reset threshold (see Table 13), the IC transition to the STANDBY state (as shown in STANDBY State) after tWAKE, and subsequently transition to the REFUP state (as shown in REFUP State). Because of the internal protection diode, the VDD pin voltage minimum tracks the VREG pin voltage minus the diode forward voltage (~0.6V). The VDD pin must not be forced externally more than 0.3V below VREG (see Table 18).

## STANDBY State

In the STANDBY state, the internal oscillators and references are activated, and the host can communicate with the IC. When VDD is above 11V , the DRIVE pin is driven to ~5.7V . Once the references are guaranteed to meet their specified inaccuracy (after tREFUP), the IC automatically transitions to the REFUP State. To distinguish the STANDBY state from the REFUP State, the bit REFUP in CFGA register (see Table 69) can be read. ADC measurements cannot be initiated in the STANDBY state but only in the REFUP State. If the host sends an ADC command (ADI1, ADI2, ADV, and ADX), the IC acknowledges it through incrementing the command counter, but the ADCs are not triggered. Instead, the host should either wait for the maximum tREFUP or for the REFUP bit set to 1.

## ADBMS2950B

## REFUP State

In the REFUP state, the host can communicate to the IC through SPI or isoSPI. When VDD is above 11V , the DRIVE pin is driven to ~5.7V . The oscillators, references, and UV/OV supply monitors are operating in their specified range. The OCxADC are set into operation if OCEN of CFGA register (see Table 69) is 1. Any transition of OCEN from 0 to 1 also latches the overcurrent configuration settings into the respective internal registers that control the overcurrent detection. For details, see the Overcurrent Configuration Update section.

By successfully receiving any ADC command (ADI1, ADI2, ADV, and ADX), the IC enters the MEASURE State. Entering the MEASURE state after power-up starts the ADC initialization procedure (see Initialization Cycle section).

## MEASURE State

The ADBMS2950B enters the MEASURE state after receiving at least one ADI1, ADI2, ADV, or ADX command from within REFUP State, and remains in the MEASURE state until power is removed or the SRST command is sent.

In the MEASURE state, the host can communicate with the IC and the oscillators, references and UV/OV supply monitors are operating within their specified range. As in REFUP State, the OCxADC are set into operation if OCEN of CFGA register (see Table 69) is set to 1.

Several ADCs can be active in parallel and can be triggered repeatedly and/or operated continuously. Valid IxADC conversion results are available once the ADC initialization phase has completed, which is indicated by I1CAL and I2CAL of STAT register (see Table 75) being set to 1.

## ISOSPI STATES

The ADBMS2950B has two isoSPI ports for daisy-chain communication: Port A and Port B.

## READY State

The isoSPI interface is in the READY state whenever the core state machine is either in the STANDBY, REFUP, or MEASURE state, and there is no activity on the interface. In the READY state, the isoSPI port(s) are ready for communication. There is no need to wake up the isoSPI interface. Upon transmitting or receiving data, the isoSPI interface moves to the ACTIVE state.

## ACTIVE State

In the ACTIVE state, the ADBMS2950B is transmitting and/or receiving data using one or both isoSPI ports. The serial interface consumes maximum power in this state. The supply current increases with clock frequency and communication duty cycle as the density of isoSPI pulses increases and is higher

## Data Sheet

for read commands because of additional isoSPI return pulses that are not generated for write commands.

Figure 28. isoSPI Interface State Diagram

<!-- image -->

## POWER CONSUMPTION

The ADBMS2950B is powered by VDD and VREG. The VDD input supplies the DRIVE output and the GPO high side switches. All other circuitry is powered by VREG. The VDD pin current depends on the load on DRIVE and GPO. The VREG pin current depends on the core state, operation of the ADCs, isoSPI state and the load on the VREF1P25, OCA and OCB pins. It can be calculated as follows:

IREG = IREG(CORE,ADC) + IREG(isoSPI) + IREG(VREF1P25) + IREG(OCx)

## where:

IREG(CORE,ADC) is the core and ADC supply current, as specified for the REFUP (OCEN = 0), REFUP (OCEN = 1) and MEASURE state in Table 12.

IREG(VREF1P25) is the VREF1P25 pin sourcing current.

IREG(OCx) is the sum of the OCA and OCB pin sourcing currents.

The isoSPI supply current IREG(isoSPI) contributes significantly to the overall VREG current consumption and can be calculated as follows:

IREG(isoSPI) = DisoSPI × ( RWR × IREG(isoSPI,WR) + (1 - RWR) × IREG(isoSPI,RD)) + (1 - DisoSPI) × IREG(isoSPI,RDY)

## where:

DisoSPI is the isoSPI communication duty cycle.

RWR is the ratio of write commands vs. all commands. The ratio of read commands is (1 - RWR).

IREG(isoSPI,WR) is the isoSPI active write current (see Table 12, ISOMD = 1, ACTIVE WRITE).

IREG(isoSPI,RD) is the isoSPI active read current (see Table 12, ISOMD = 1, ACTIVE READ).

IREG(isoSPI,RDY) is the isoSPI ready current.

## Data Sheet

## ADC MEASUREMENTS

The ADBMS2950B provides various ADC measurement paths optimized for typical application requirements and are described in the following chapters. All ADC inputs are buffered. The Electrical Characteristics lists the available linear input ranges. The OCxADC is monotonic over the absolute maximum input voltage range of the IA, IB, and SA pins. The IxADC is monotonic over the OCxADC input range. The VxADC and VBxADC are also monotonic, including outside the linear range of their input buffers. Their output does not 'roll over' or otherwise represents signals of the opposite polarity.

There are various ways to check for the end of conversion (EOC) of the various ADCs. In the simplest case, the host waits for the maximum possible conversion time (typical time +10%) before reading the result registers.

Table 39. Overview of ADCs and Related Trigger Commands

| ADCs          | Inputs                                    | TriggerCommand    | Continuous   | Description                                 |
|---------------|-------------------------------------------|-------------------|--------------|---------------------------------------------|
| OCxADC        | I1A, I1B, I2A, I2B, I3A, I3B, VREF1-VREF2 | WRCFGA (OCEN = 1) | Yes          | Overcurrent ADCs.                           |
| I1ADC, VB1ADC | I1A, I1B, VBATx, SGND                     | ADI1              | Yes (OPT)    | Battery current and voltage ADCs channel 1. |
| I2ADC, VB2ADC | I2A, I2B, VBATx, SGND                     | ADI2              | Yes (OPT)    | Battery current and voltage ADCs channel 2. |
| V1ADC, V2ADC  | V1 to V10, VREF2, VREF1P25, SGND          | ADV               | No           | Voltage ADCs.                               |
| AUX ADC       | See Table 48                              | ADX               | No           | Auxiliary ADC.                              |

## Conversion Counters

For single-shot conversions, or in the case of the IxADCs, for the first conversion after enabling the continuous mode, the Poll commands (PLADC, PLI1, PLI2, PLV, and PLX) can be used to determine if a conversion has completed. For I1ADC/VB1ADC operating in continuous mode, the Conversion Counter I1CNT that increments with each 1 ms I1ADC/VB1ADC conversion allows to detect if new conversions are available. For diagnostic purposes also the I2ADC/VB2ADC operating in continuous mode provides the Conversion Counter I2CNT that increments with each 1 ms I2ADC/VB2ADC conversion. For the I1ADC/VB1ADC, the I1PHA counter that increments four times per I1ADC/VB1ADC conversion provides additional conversion phase information. I1CNT and I1PHA can be treated as on 13bit counter I1CNTPHA[12:0] that increments four times for every I1ADC/VB1ADC conversion.

## Initialization Cycle

Upon receiving the first ADI1, ADI2, ADV , or ADX command from within the REFUP state after power-up or SRST, the IC enters the MEASURE state, and the IxADC initialization process is started. The ADI1 or ADI2 commands must be sent with OPT = 0b0000. Diagnostic measurements on IxADC and VBxADC are not allowed during the IxADC initialization phase.

## Battery Current Measurement

The ADBMS2950B features two low-offset measurement paths to redundantly measure the voltage drop across a shunt resistor. Both measurement paths contain 18-bits ADCs (I1ADC and I2ADC) that allow the voltage developed over the shunt resistor to be resolved down to 1 µV . Measurements are triggered through the ADI1 and ADI2 commands with the typical operation of I1ADC running in continuous mode and I2ADC operating synchronously for redundancy or to execute various diagnostic measurements. Both ADCs provide a measurement result every 1 ms. If redundancy is required, the two ADCs run in a perfectly synchronized lockstep to allow for result comparison in the host controller. For the representation of the measurement results, see the Memory Map description in the respective registers.

If a new ADI1 or ADI2 command is received during conversions, the ongoing conversions of the concerned ADCs are stopped and new measurements are started, which allow the re-synchronization of the ADBMS2950B to ADI battery stack monitors. The corresponding result registers remain unchanged upon reception of a new ADI1 or ADI2 and updated with the new conversion results once the acquisition time (nominally after 1 ms or ACCN times 1 ms) has elapsed.

## ADBMS2950B

The conversion result registers can be cleared to the bitwise inverse (all bits flipped) of their reset values using the clear commands (CLRI, CLRA, CLRVX, and CLRO), which allows the host to check for stuck faults of the result registers after reset. The CLRA command that resets the accumulated result registers must not be issued during continuous IxADC, VBxADC operation as it might corrupt the ongoing or next accumulation cycle. The CLRI, CLRVX, and CLRO commands can be issued at any time.

Table 39 gives an overview of all ADCs and the related trigger commands. The ADCs grouped in rows always convert synchronously. Both IxADC, VBxADC channels convert synchronously when commanded with ADIx, RD=1. The OCxADC always operate continuously and the IxADC and VBxADC depend on the OPT parameter of the ADIx commands, as indicated in the Continuous column of Table 39. The VxADC and AUX ADC do not operate continuously but triggered on demand through ADV or ADX.

## ADBMS2950B

The IxCAL bits are low until the initialization process has completed, after 136 conversions. The total time required for initialization = tIxADC\_STARTUP + tIxADC\_INIT.

When initialization is started by an ADV or ADX command, no IxADC results are available, and IxCNT remains zero. For this reason, it is recommended to start the initialization through a continuous ADIx command and wait for 136 conversion cycles (when IxCNT reports 136 the first time) before reading the IxADC results for the first time.

From power-up or SRST, it takes tWAKE + tREFUP + tIxADC\_STARTUP + tIxADC\_INIT for the IxADCs to meet the accuracy specification. The VBxADC results are available during the initialization process. All other ADCs are unaffected by the initialization process.

## IxADC Open-Wire Current Sources

As shown in Figure 1, the ADBMS2950B features current sources at the inputs of both current measurement channels. Activating these current sources allows the detection of a broken connection to a shunt resistor. The Open-wire current sources are configured by the DIAGSEL configuration register and activated by issuing a diagnostic ADI1 or ADI2 measurement through the OPT command bits. The current sources have a value of about 0.5 μA. As the open-wire current sources are connected after a 3.8 kΩ ESD protection resistor, activating them changes the reading of the corresponding IxADC by about 1.9 mV, while it does not affect the reading of the other IxADC. It also does not affect any of the OCxADC readings.

Redundant I2ADC and VB2ADC diagnostic measurements (synchronous to I1ADC and VB1ADC for redundancy) must be terminated through one of the two ADI2 single-shot measurement (non-diagnostic) or any other ADI2 single-shot diagnostic (DIAGSEL) measurement command after DIAGSEL has been set to 0b000.

## Battery Voltage Measurements

The ADBMS2950B features two dedicated battery-stack voltage measurement paths that connect to one or two external resistordividers through the VBAT1 and VBAT2 pins. The voltage at these pins is first buffered to provide a high input resistance and then applied to two 16-bit ADCs. VB1ADC operates simultaneously and synchronously to I1ADC whenever an ADI1 command is issued. Diagnostic measurements selected through DIAGSEL and activated through OPT command bits are also performed on both ADCs simultaneously. The same is valid for VB2ADC, which operates simultaneously and synchronously to I2ADC. If ADI1 is issued with the RD command bit set, all four ADCs operate synchronously, irrespective of whether the OPT bits are set to single-shot or continuous mode.

## Data Sheet

Redundant I2ADC and VB2ADC diagnostic measurements (synchronous to I1ADC and VB1ADC for redundancy) must be terminated through one of the two ADI2 single-shot measurement (non-diagnostic) or any other ADI2 single-shot diagnostic (DIAGSEL) measurement command after DIAGSEL has been set to 0b000.

## VBxADC Open-Wire Current Sources

Similar to the IxADCs, the VBxADCs feature current sources connected to their inputs. The open-wire current source has a value of 10 μA and is preceded by a 2.3 kΩ ESD protection resistor, leading to a typical change in ADC output of about 23 mV.

## Continuous or Single-Shot Measurements

The IxADC and VBxADC can be configured to perform a single measurement or continuous measurements, which are controlled by the OPT command bits. In continuous mode, the result registers of the corresponding ADCs are updated at their conversion rate (nominally 1 ms for the Ix, VBx registers, and 1 ms times ACCN for the accumulated result registers IxACC, VBxACC) for non-diagnostic measurements.

For diagnostic measurements, the content of the accumulated IxADC result registers is not valid and must be ignored and only the 1 ms conversion results must be used. The accumulated VBxADC result registers can be used for diagnostic and non-diagnostic measurements. To end the continuous measurement mode of the respective ADCs, a single-shot ADI1 or ADI2 command must be sent. The addressed ADCs then perform the last single-shot measurement and stop.

## Conversion Results Accumulation

In the continuous diagnostic measurement mode, the VBxADC conversions are summed up to the accumulation results VBxACC. The current measurement accumulation results IxACC are not valid during diagnostic operation. In continuous non-diagnostic measurement mode, the IxADC and VBxADC results are summed up to the accumulation results IxACC and VBxACC.

The ACCI (and the resulting ACCN) register configures the number of IxADC and VBxADC conversions (ACCN) that are accumulated internally before being stored to the IxACC and VBxACC registers. The ACCI configuration becomes active only with the next ADI1 or ADI2 command. The internal accumulators are cleared to start a new cycle after the accumulation result registers have been updated. The update rate of those registers thus depends on ACCN, which can be set to be slower than the host controller update rate, allowing to read back-to-back conversion results.

The conversion counters I1CNT and I2CNT allow to identify new conversions and discard those that are already read.

## Data Sheet

Together with the back-to-back reading of the accumulated conversion results, the host still can read the Ix, VBx registers at any time to get fast measurement snapshots if required.

## ADBMS2950B

Figure 29 shows the Ix, VBx, IxACC, VBxACC, I1CNT, and the I1PHA register update timing. The update for the accumulated registers IxACC, VBxACC is shown as examples for ACCI settings 0 and 1 (resulting in ACCN 4 and 8). For more details, see the Continuous Sampling and Coulomb Counting section.

Figure 29. Relation of I1CNT, I2PHA, Ix, VBx, and Accumulated Result Registers IxACC, VBxACC Update for Two Settings of ACCN 4 and 8 (ACCI 0 and 1)

<!-- image -->

## Redundant IxADC and VBxADC Measurements

If the redundancy bit RD in an ADI1 command is set, the I1ADC and I2ADC, as well as the VB1ADC and VB2ADC, are triggered to provide redundant, synchronous measurements. After every conversion, the host controller can compare the results of I2ADC with I1ADC as well as the results of VB2ADC with VB1ADC.

If a single-shot ADI2 command is issued (see OPT command bits), the I2ADC and VB2ADC perform a single-shot conversion immediately and then stop.

If a continuous mode ADI2 command is issued while the I1ADC and VB1ADC are already in continuous mode, the

Table 40. I1ADC, VB1ADC, I2ADC, VB2ADC Command Codes

I2ADC and VB2ADC wait for the ongoing accumulation of the channel 1 ADCs conversions to finish (depends on ACCN) and start converting synchronously to the next accumulation cycle, which allows comparison of the result registers of both channels in the host controller.

If a continuous mode ADI2 command is issued while the I1ADC, VB1ADC, I2ADC, and VB2ADC are set to continuous redundant mode, the I2ADC and VB2ADC interrupt their current conversion and start converting again synchronously to the next accumulation cycle. This sequence delays the update of the I1CNT and I1PHA until the I1ADC and VB1ADC have finished their next two 1 ms conversion cycles. The updated I1CNT value is the previous I1CNT value incremented by two and the I1PHA value is zero.

| Name      | Type   |   BIT 10 |   BIT 9 | BIT 8   | BIT 7   |   BIT 6 |   BIT 5 | BIT 4   |   BIT 3 | BIT 2   | BIT 1   | BIT 0   | Description                                              |
|-----------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|----------------------------------------------------------|
| ADI1      | CMD    |        0 |       1 | RD      | OPT[3]  |       1 |       1 | OPT[2]  |       0 | x       | OPT[1]  | OPT[0]  | Start I1ADC and VB1ADC (ADBMS6830B: ADCV).               |
| ADI2      | CMD    |        0 |       0 | 1       | OPT[3]  |       1 |       1 | OPT[2]  |       1 | 0       | OPT[1]  | OPT[0]  | Start I2ADC and VB2ADC (ADBMS6830B: ADSV).               |
| CLRI      | CMD    |        1 |       1 | 1       | 0       |       0 |       0 | 1       |       0 | 0       | 0       | 1       | Clear IxADC and VBxADC results (ADBMS6830B: CLRCELL).    |
| CLRA      | CMD    |        1 |       1 | 1       | 0       |       0 |       0 | 1       |       0 | 1       | 0       | 0       | Clear IxADC and VBxADC accumulators (ADBMS6830B: CLRFC). |
| RDI       | RD48   |        0 |       0 | 0       | 0       |       0 |       0 | 0       |       0 | 1       | 0       | 0       | Read I1ADC and I2ADC results (ADBMS6830B: RDCVA).        |
|           |        |        0 |       0 | 0       | 0       |       0 |       0 | 1       |       0 | 0       | 1       | 0       | ADBMS6830B compatible code RDFCA.                        |
| RDVB      | RD48   |        0 |       0 | 0       | 0       |       0 |       0 | 0       |       0 | 1       | 1       | 0       | Read VB1ADC and VB2ADC results (ADBMS6830B: RDCVB).      |
|           |        |        0 |       0 | 0       | 0       |       0 |       0 | 1       |       0 | 0       | 1       | 1       | ADBMS6830B compatible code RDFCB.                        |
| RDIACC    | RD48   |        0 |       0 | 0       | 0       |       1 |       0 | 0       |       0 | 1       | 0       | 0       | Read I1ADC and I2ADC accumulators (ADBMS6830B: RDACA).   |
| RDVBACC   | RD48   |        0 |       0 | 0       | 0       |       1 |       0 | 0       |       0 | 1       | 1       | 0       | Read VB1ADC and VB2ADC accumulators (ADBMS6830B: RDACB). |
| RDIVB1    | RD48   |        0 |       0 | 0       | 0       |       0 |       0 | 0       |       1 | 0       | 0       | 0       | Read I1ADC and VB1ADC results (ADBMS6830B: RDCVC).       |
|           |        |        0 |       0 | 0       | 0       |       0 |       0 | 1       |       0 | 1       | 0       | 0       | ADBMS6830B compatible code RDFCC.                        |
| RDIVB1ACC | RD48   |        0 |       0 | 0       | 0       |       1 |       0 | 0       |       1 | 0       | 0       | 0       | Read I1ADC and VB1ADC accumulators (ADBMS6830B: RDACC).  |
| RDALLI    | RD160  |        0 |       0 | 0       | 0       |       0 |       0 | 0       |       1 | 1       | 0       | 0       | Read IxADC and VBxADC results.                           |
| RDALLA    | RD160  |        0 |       0 | 0       | 0       |       1 |       0 | 0       |       1 | 1       | 0       | 0       | Read IxADC and VBxADC accumulators.                      |

## ADBMS2950B

The x indicates the bits that can be either 0 or 1. Any combination is valid, and the ADBMS2950B responds the same way if the command PEC matches the command bytes.

RDALL commands are not available on the isoSPI daisy-chains, see the Communication Protocol section.

Table 41 shows the parameter bits available for ADI1 and ADI2 commands.

Table 41. ADI1 and ADI2 Parameter Bits

## Data Sheet

When the OPT parameter instructs to run the diagnostics, the specific diagnostic mode is selected by the DIAGSEL bit field in the CFGB configuration register (see Table 72).

Redundant I2ADC and VB2ADC diagnostic measurements (synchronous to I1ADC and VB1ADC for redundancy) must be terminated through one of the two ADI2 single-shot measurement (non-diagnostic) or any other ADI2 Single-shot diagnostic (DIAGSEL) measurement command after DIAGSEL has been set to 0b000.

| Name   | Type   | Value   | Description                                        | Behavior of ADBMS6830B                                |
|--------|--------|---------|----------------------------------------------------|-------------------------------------------------------|
| RD     | PAR    |         | Redundancy Enable.                                 |                                                       |
|        |        | 0       | Start I1ADC/VB1ADC only.                           | Start CADC only.                                      |
|        |        | 1       | Start I1ADC/VB1ADC and I2ADC/VB2ADC synchronously. | Start CADC and SADC synchronously.                    |
| OPT    | PAR    |         | Continuous/Diagnostic Measurement Options          |                                                       |
|        |        | 1010    | Continuous diagnostic (DIAGSEL) measurement.       | Continuous odd channel OWD, no PWMdischarge.          |
|        |        | 1001    | Continuous diagnostic (DIAGSEL) measurement.       | Continuous even channel OWD,noPWM discharge.          |
|        |        | 1011    | Continuous diagnostic (DIAGSEL) measurement.       | Continuous all channel OWD, no PWMdischarge.          |
|        |        | 1100    | Continuous measurement.                            | Invalid command (CONT = DCP = 1).                     |
|        |        | 1000    | Continuous measurement.                            | Continuous measurement, no PWMdischarge.              |
|        |        | 0010    | Invalid command.                                   | Single-shot odd channel OWD, no PWMdischarge.         |
|        |        | 0001    | Invalid command.                                   | Single-shot even channel OWD,noPWM discharge.         |
|        |        | 0011    | Invalid command.                                   | Single-shot all channel OWD, no PWMdischarge.         |
|        |        | 1110    | Single-shot diagnostic (DIAGSEL) measurement.      | Invalid command (CONT = DCP = 1).                     |
|        |        | 1101    | Single-shot diagnostic (DIAGSEL) measurement.      | Invalid command (CONT = DCP = 1).                     |
|        |        | 1111    | Single-shot diagnostic (DIAGSEL) measurement.      | Invalid command (CONT = DCP = 1).                     |
|        |        | 0110    | Single-shot diagnostic (DIAGSEL) measurement.      | Single-shot odd channel OWD, PWMdischarge permitted.  |
|        |        | 0101    | Single-shot diagnostic (DIAGSEL) measurement.      | Single-shot even channel OWD, PWMdischarge permitted. |
|        |        | 0111    | Single-shot diagnostic (DIAGSEL) measurement.      | Single-shot all channel OWD, PWMdischarge permitted.  |
|        |        | 0000    | Single-shot measurement.                           | Single-shot measurement, no PWMdischarge.             |
|        |        | 0100    | Single-shot measurement.                           | Single-shot measurement, PWMdischarge permitted.      |

The diagnostic (DIAGSEL) measurement options depend on the setting of DIAGSEL at the time the ADI1/ADI2 commands are received. For DIAGSEL = 0b000, the IxADC and VBxADC convert regular inputs. This means that diagnostics is not enabled (see Table 72).

In typical applications, the I1ADC and VB1ADC are recommended to be operating in an uninterrupted, continuous measurement mode activated by any of the continuous measurement options, with or without redundancy. While in this mode, redundant measurement through the I2ADC and VB2ADC can be activated at any time by sending any Continuous or Continuous diagnostic (DIAGSEL) measurement command. Both the ADCs then align to the next accumulation cycle (depends on ACCN, see ACCI in Table 70) of the I1ADC and VB1ADC to perform synchronous measurements without affecting the ongoing, continuous conversions of those channel 1 ADCs. This also allows synchronous diagnostic measurements, for example, performing open-wire checks on the battery pack current or voltage inputs.

Table 42 describes the behavior of the channel 2 ADCs on ADI2 commands according to Table 41, while the channel 1 ADCs are operating continuously. The column DIAGSEL shows the register value in Table 72 at the time the ADI2 command is sent. The columns Diagnostic, Continuous, and Redundant indicate if the following measurements are performed with diagnostic, continuously and redundant (synchronously) to I1ADC, VB1ADC.

When the ADBMS2950B is connected in a daisy-chain together with the ADBMS6830B, the option OPT = 0b1100 allows redundant measurements by IxADC and VBxADC for comparison of both channels without affecting the cell voltage measurements on the ADBMS6830B. Whenever the ADBMS6830B is performing the similar redundant measurement of the C and S inputs through OPT = 0b1000 (CONT = 1, DCP = 0, OWD = 0b00), the ADBMS2950B also performs redundant measurements. This allows execution of the redundant diagnostics at a low rate as required by the ADBMS6830B through OPT = 0b1000, and at a higher rate as typically required by the ADBMS2950B through interleaving additional commands with OPT = 0b1100.

Table 42. ADI2 Command Result while I1ADC in Continuous Operation

| ADI2Command            | DIAGSEL       | Diagnostic   | Continuous   | Redundant   | Description                                                                               |
|------------------------|---------------|--------------|--------------|-------------|-------------------------------------------------------------------------------------------|
| Continuous Diagnostic  | 0b000         | No           | Yes          | Yes         | Non-diagnostic, Align (sync) to next I1ADC, VB1ADC accumulation cycle (ACCN), Continuous. |
| Continuous Diagnostic  | unequal 0b000 | Yes          | Yes          | Yes         | Diagnostic, Align (sync) to next I1ADC, VB1ADC accumulation cycle (ACCN), Continuous.     |
| Continuous             | 0bxxx         | No           | Yes          | Yes         | Non-diagnostic, Align (sync) to next I1ADC, VB1ADC accumulation cycle (ACCN), Continuous. |
| Single-Shot Diagnostic | 0b000         | No           | No           | No          | Non-diagnostic, Immediate single shot, Asynchronous to I1ADC, VB1ADC.                     |
| Single-Shot Diagnostic | unequal 0b000 | Yes          | No           | No          | Diagnostic, Immediate single shot, Asynchronous to I1ADC, VB1ADC.                         |
| Single Shot            | 0bxxx         | No           | No           | No          | Non-diagnostic, Immediate single shot, Asynchronous to I1ADC, VB1ADC.                     |

Redundant I2ADC and VB2ADC diagnostic measurements (synchronous to I1ADC and VB1ADC for redundancy) must be terminated through one of the two ADI2 single-shot

## Table 43. I1ADC, VB1ADC, I2ADC, VB2ADC Result Registers

measurement (non-diagnostic) or any other ADI2 single-shot diagnostic (DIAG) measurement command after DIAGSEL has been set to 0b000.

| Name   | Type    | Reset    | CLRI     | Description                                                                                            |
|--------|---------|----------|----------|--------------------------------------------------------------------------------------------------------|
| I1     | RO, FRZ | 0x03FFFF | 0xFC0000 | Signed 24-bit I1ADC result register, V SHUNT = I1 × 1 µV = I1A - I1B.                                  |
| I2     | RO, FRZ | 0x03FFFF | 0xFC0000 | Signed 24-bit I2ADC result register, V SHUNT = -(I2 × 1 µV) = I2B - I2A; inverted gain compared to I1. |
| VB1    | RO, FRZ | 0x7FFF   | 0x8000   | Signed 16-bit VB1ADC result register, V BAT = VB1 × 100 µV.                                            |
| VB2    | RO, FRZ | 0x7FFF   | 0x8000   | Signed 16-bit VB2ADC result register, V BAT = -(VB2 × 85 µV); inverted gain compared to VB1.           |

Table 44 lists the accumulated measurement result registers. The current measurement accumulation results IxACC are not valid during diagnostic operation. Only in the continuous non- diagnostic measurement mode, the IxADC results are summed up to the accumulation results IxACC.

## Table 44. I1ADC, VB1ADC, I2ADC, VB2ADC Accumulation Registers

| Name   | Type    | Reset    | CLRA     | Description                                                                            |
|--------|---------|----------|----------|----------------------------------------------------------------------------------------|
| VB1ACC | RO, FRZ | 0x7FFFFF | 0x800000 | Signed 24-bit VB1ADC accumulation register, V BAT_AVERAGED = VB1ACC × 100 µV ÷ ACCN.   |
| VB2ACC | RO, FRZ | 0x7FFFFF | 0x800000 | Signed 24-bit VB2ADC accumulation register, V BAT_AVERAGED = VB2ACC × (-85 µV) ÷ ACCN. |
| I1ACC  | RO, FRZ | 0x7FFFFF | 0x800000 | Signed 24-bit I1ADC accumulation register, V SHUNT_AVERAGED = I1ACC × 1 µV ÷ ACCN.     |
| I2ACC  | RO, FRZ | 0x7FFFFF | 0x800000 | Signed 24-bit I2ADC accumulation register, V SHUNT_AVERAGED = I2ACC × (-1 µV) ÷ ACCN.  |

Registers and bits that are subject to the SNAP , UNSNAP protocol are marked with FRZ in the Type column of the

## Table 45. I1ADC, VB1ADC, I2ADC, VB2ADC Return Values

register and bit descriptions. See Snapshot Commands section on operation of the SNAP , UNSNAP commands.

| Command   | BYTE 5        | BYTE 4       | BYTE 3      | BYTE 2        | BYTE 1       | BYTE 0      |
|-----------|---------------|--------------|-------------|---------------|--------------|-------------|
| RDI       | I2[23:16]     | I2[15:8]     | I2[7:0]     | I1[23:16]     | I1[15:8]     | I1[7:0]     |
| RDVB      | VB2[15:8]     | VB2[7:0]     | VB1[15:8]   | VB1[7:0]      | 0xFF         | 0xFF        |
| RDIACC    | I2ACC[23:16]  | I2ACC[15:8]  | I2ACC[7:0]  | I1ACC[23:16]  | I1ACC[15:8]  | I1ACC[7:0]  |
| RDVBACC   | VB2ACC[23:16] | VB2ACC[15:8] | VB2ACC[7:0] | VB1ACC[23:16] | VB1ACC[15:8] | VB1ACC[7:0] |
| RDIVB1    | VB1[15:8]     | VB1[7:0]     | 0xFF        | I1[23:16]     | I1[15:8]     | I1[7:0]     |
| RDIVB1ACC | VB1ACC[23:16] | VB1ACC[15:8] | VB1ACC[7:0] | I1ACC[23:16]  | I1ACC[15:8]  | I1ACC[7:0]  |

## Table 46. RDALLI Return Values

|   BYTE | BIT 7     | BIT 6     | BIT 5     | BIT 4     | BIT 3     | BIT 2     | BIT 1     | BIT 0     |
|--------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
|      0 | I1[7:0]   | I1[7:0]   | I1[7:0]   | I1[7:0]   | I1[7:0]   | I1[7:0]   | I1[7:0]   | I1[7:0]   |
|      1 | I1[15:8]  | I1[15:8]  | I1[15:8]  | I1[15:8]  | I1[15:8]  | I1[15:8]  | I1[15:8]  | I1[15:8]  |
|      2 | I1[23:16] | I1[23:16] | I1[23:16] | I1[23:16] | I1[23:16] | I1[23:16] | I1[23:16] | I1[23:16] |
|      3 | I2[7:0]   | I2[7:0]   | I2[7:0]   | I2[7:0]   | I2[7:0]   | I2[7:0]   | I2[7:0]   | I2[7:0]   |
|      4 | I2[15:8]  | I2[15:8]  | I2[15:8]  | I2[15:8]  | I2[15:8]  | I2[15:8]  | I2[15:8]  | I2[15:8]  |
|      5 | I2[23:16] | I2[23:16] | I2[23:16] | I2[23:16] | I2[23:16] | I2[23:16] | I2[23:16] | I2[23:16] |
|      6 | VB1[7:0]  | VB1[7:0]  | VB1[7:0]  | VB1[7:0]  | VB1[7:0]  | VB1[7:0]  | VB1[7:0]  | VB1[7:0]  |
|      7 | VB1[15:8] | VB1[15:8] | VB1[15:8] | VB1[15:8] | VB1[15:8] | VB1[15:8] | VB1[15:8] | VB1[15:8] |

## ADBMS2950B

## Data Sheet

|   BYTE | BIT 7      | BIT 6      | BIT 5      | BIT 4       | BIT 3       | BIT 2       | BIT 1       | BIT 0       |
|--------|------------|------------|------------|-------------|-------------|-------------|-------------|-------------|
|      8 | VB2[7:0]   | VB2[7:0]   | VB2[7:0]   | VB2[7:0]    | VB2[7:0]    | VB2[7:0]    | VB2[7:0]    | VB2[7:0]    |
|      9 | VB2[15:8]  | VB2[15:8]  | VB2[15:8]  | VB2[15:8]   | VB2[15:8]   | VB2[15:8]   | VB2[15:8]   | VB2[15:8]   |
|     10 | OC1R       | OC1R       | OC1R       | OC1R        | OC1R        | OC1R        | OC1R        | OC1R        |
|     11 | OC2R       | OC2R       | OC2R       | OC2R        | OC2R        | OC2R        | OC2R        | OC2R        |
|     12 | OC3R       | OC3R       | OC3R       | OC3R        | OC3R        | OC3R        | OC3R        | OC3R        |
|     13 | GPO6H      | GPO5H      | GPO4H      | GPO3H       | GPO2H       | GPO1H       | GPO6L       | GPO5L       |
|     14 | RESERVED   | RESERVED   | VDRUV      | OCMM        | OC3L        | OCAGD       | OCAL        | OC1L        |
|     15 | RESERVED   | RESERVED   | VDDUV      | NOCLK       | REFFLT      | OCBGD       | OCBL        | OC2L        |
|     16 | I2CNT[2:0] | I2CNT[2:0] | I2CNT[2:0] | I1CNT[10:6] | I1CNT[10:6] | I1CNT[10:6] | I1CNT[10:6] | I1CNT[10:6] |
|     17 | I1CNT[5:0] | I1CNT[5:0] | I1CNT[5:0] | I1CNT[5:0]  | I1CNT[5:0]  | I1CNT[5:0]  | I1PHA[1:0]  | I1PHA[1:0]  |
|     18 | VREGOV     | VREGUV     | VDIGOV     | VDIGUV      | SED1        | MED1        | SED2        | MED2        |
|     19 | VDEL       | VDE        | 0          | SPIFLT      | RESET       | THSD 1      | TMODE       | OSCFLT      |

## Note:

## Table 47. RDALLA Return Values

1 The thermal shutdown indicator bit THSD is not cleared by the SRST command, but only after a power-on-reset or through the CLRFLAG command.

|   BYTE | BIT 7                  | BIT 6                  | BIT 5                  | BIT 4                  | BIT 3                  | BIT 2                  | BIT 1                  | BIT 0                  |
|--------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
|      0 | I1ACC[7:0]             | I1ACC[7:0]             | I1ACC[7:0]             | I1ACC[7:0]             | I1ACC[7:0]             | I1ACC[7:0]             | I1ACC[7:0]             | I1ACC[7:0]             |
|      1 | I1ACC[15:8]            | I1ACC[15:8]            | I1ACC[15:8]            | I1ACC[15:8]            | I1ACC[15:8]            | I1ACC[15:8]            | I1ACC[15:8]            | I1ACC[15:8]            |
|      2 | I1ACC[23:16]           | I1ACC[23:16]           | I1ACC[23:16]           | I1ACC[23:16]           | I1ACC[23:16]           | I1ACC[23:16]           | I1ACC[23:16]           | I1ACC[23:16]           |
|      3 | I2ACC[7:0]             | I2ACC[7:0]             | I2ACC[7:0]             | I2ACC[7:0]             | I2ACC[7:0]             | I2ACC[7:0]             | I2ACC[7:0]             | I2ACC[7:0]             |
|      4 | I2ACC[15:8]            | I2ACC[15:8]            | I2ACC[15:8]            | I2ACC[15:8]            | I2ACC[15:8]            | I2ACC[15:8]            | I2ACC[15:8]            | I2ACC[15:8]            |
|      5 | I2ACC[23:16]           | I2ACC[23:16]           | I2ACC[23:16]           | I2ACC[23:16]           | I2ACC[23:16]           | I2ACC[23:16]           | I2ACC[23:16]           | I2ACC[23:16]           |
|      6 | VB1ACC[7:0]            | VB1ACC[7:0]            | VB1ACC[7:0]            | VB1ACC[7:0]            | VB1ACC[7:0]            | VB1ACC[7:0]            | VB1ACC[7:0]            | VB1ACC[7:0]            |
|      7 | VB1ACC[15:8]           | VB1ACC[15:8]           | VB1ACC[15:8]           | VB1ACC[15:8]           | VB1ACC[15:8]           | VB1ACC[15:8]           | VB1ACC[15:8]           | VB1ACC[15:8]           |
|      8 | VB1ACC[23:16]          | VB1ACC[23:16]          | VB1ACC[23:16]          | VB1ACC[23:16]          | VB1ACC[23:16]          | VB1ACC[23:16]          | VB1ACC[23:16]          | VB1ACC[23:16]          |
|      9 | VB2ACC[7:0]            | VB2ACC[7:0]            | VB2ACC[7:0]            | VB2ACC[7:0]            | VB2ACC[7:0]            | VB2ACC[7:0]            | VB2ACC[7:0]            | VB2ACC[7:0]            |
|     10 | VB2ACC[15:8]           | VB2ACC[15:8]           | VB2ACC[15:8]           | VB2ACC[15:8]           | VB2ACC[15:8]           | VB2ACC[15:8]           | VB2ACC[15:8]           | VB2ACC[15:8]           |
|     11 | VB2ACC[23:16]          | VB2ACC[23:16]          | VB2ACC[23:16]          | VB2ACC[23:16]          | VB2ACC[23:16]          | VB2ACC[23:16]          | VB2ACC[23:16]          | VB2ACC[23:16]          |
|     12 | GPO6H                  | GPO5H                  | GPO4H                  | GPO3H                  | GPO2H                  | GPO1H                  | GPO6L                  | GPO5L                  |
|     13 | GPO4L                  | GPO3L                  | GPO2L                  | GPO1L                  | GPIO4L                 | GPIO3L                 | GPIO2L                 | GPIO1L                 |
|     14 | RESERVED               | RESERVED               | VDRUV                  | OCMM                   | OC3L                   | OCAGD                  | OCAL                   | OC1L                   |
|     15 | RESERVED               | RESERVED               | VDDUV                  | NOCLK                  | REFFLT                 | OCBGD                  | OCBL                   | OC2L                   |
|     16 | I2CNT[2:0] I1CNT[10:6] | I2CNT[2:0] I1CNT[10:6] | I2CNT[2:0] I1CNT[10:6] | I2CNT[2:0] I1CNT[10:6] | I2CNT[2:0] I1CNT[10:6] | I2CNT[2:0] I1CNT[10:6] | I2CNT[2:0] I1CNT[10:6] | I2CNT[2:0] I1CNT[10:6] |
|     17 | I1CNT[5:0]             | I1CNT[5:0]             | I1CNT[5:0]             | I1CNT[5:0]             | I1CNT[5:0]             | I1CNT[5:0]             | I1PHA[1:0]             | I1PHA[1:0]             |
|     18 | VREGOV                 | VREGUV                 | VDIGOV                 | VDIGUV                 | SED1                   | MED1                   | SED2                   | MED2                   |
|     19 | VDEL                   | VDE                    | 0                      | SPIFLT                 | RESET                  | THSD 1                 | TMODE                  | OSCFLT                 |

## Note:

1 The thermal shutdown indicator bit THSD is not cleared by the SRST command, but only after a power-on-reset or through the CLRFLAG command.

## Voltage and Auxiliary Measurements

## Voltage Measurements

The ADBMS2950B devices can measure 10 voltage inputs, preceding multiplexers, and buffers through V1ADC and V2ADC. Any pin can be measured either vs. SGND or VREF1P25. The inputs V1 and V2 can also be measured vs. V3 or V4. The inputs V1 to V6 are measured redundantly through V1ADC and V2ADC, whereas V7 and V8 are measured by V1ADC only. V9 and V10 are measured by V2ADC only. Both ADCs always operate synchronously commanded through ADV. This allows measurement of redundant sensors like NTCs connected to the input pin pairs V7, V9 or V8, V10

synchronously through the redundant VxADCs for minimum sensitivity to noise when comparing the results in the host controller.

Other application use cases for the inputs V1 to V10 include contactor diagnostic, link voltage measurement, or battery to chassis-ground isolation resistance measurement.

When the ADBMS2950B receives a new ADV command during an ongoing conversion, the VADCs are stopped and restarted. The corresponding result registers are not reset upon reception of a new ADV command but are updated at the end of each individual channel. For multi-measurements, this happens in the order of the channels in the table given above.

Settings of the configuration registers that affect the VxADC measurements (VSx, SOAK) are captured when receiving the ADV command. Any change to those configurations does not affect an ongoing conversion, but only the next conversion triggered through ADV.

## Data Sheet

Even though all the V1-V10, VBAT1, and VBAT2 pin voltages must not be lower than -0.1V vs. GND, the VxADCs and VBxADCs are bipolar and can measure lower negative differential signals. For example, V1 = 0.5V vs. VREF1P25 = 1.25V yields a -0.75V differential ADC measurement.

When biasing resistive dividers to VREF1P25, the specified range of VREF1P25 (see Voltage Reference Specifications) and the input pin voltage (see Table 3 and Table 5) must be considered for the guaranteed measurement range. For example, if VREF1P25 is at 1.30V , the voltage drop at the resistor must not exceed 1.2V to meet the maximum input pin voltage of 2.5V . The measurement transfer function becomes non-linear for bigger signals but remains monotonic (see VBxADC and VxADC Transfer Function section).

The VREF1P25 output pin is a potential source of commoncause faults for NTC temperature measurements. Where not all Vx inputs are used it is recommended to loop back the VREF1P25 externally to any spare Vx pin and perform out-ofrange checks periodically.

Table 49. V1ADC, V2ADC, AUX ADC Command Codes

## Auxiliary Measurements

The ADBMS2950B features an auxiliary ADC preceded by the auxiliary multiplexer to measure various signals including the power supply pins, the buffered 1.25V reference output VREF1P25, and the internal temperature sensors.

The multiplexer inputs are listed in Table 48; MUXP indicates the positive multiplexer input and MUXN indicates the negative multiplexer input.

The Auxiliary ADC is triggered by the ADX command, which measures all input channels in a round-robin fashion. It takes 2.1 ms to measure all the eight channels.

## Table 48. AUX ADC Measurement Sequence

|   Step | MUXP     | MUXN   | Time    | Description                            |
|--------|----------|--------|---------|----------------------------------------|
|      1 | VDIV     | GND    | 0.27 ms | Divided VREF1 reference voltage.       |
|      2 | EPAD     | GND    | 0.53 ms | Exposed pad.                           |
|      3 | VREF1P25 | RGND   | 0.80 ms | VREF1P25 reference pin voltage.        |
|      4 | VDIG     | GND    | 1.06 ms | Internal digital 3V supply.            |
|      5 | VDD      | GND    | 1.33 ms | VDD power supply pin.                  |
|      6 | TMP1     | RGND   | 1.59 ms | Primary internal temperature sensor.   |
|      7 | VREG     | GND    | 1.86 ms | VREG power supply pin.                 |
|      8 | TMP2     | GND    | 2.12 ms | Secondary internal temperature sensor. |

| Name   | Type   | BIT 10   | BIT 9   | BIT 8     | BIT 7     | BIT 6   | BIT 5 BIT 4     | BIT 3   | BIT 2    | BIT 1    | BIT 0    | Description                                                                                                                                     |
|--------|--------|----------|---------|-----------|-----------|---------|-----------------|---------|----------|----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| ADV    | CMD    | 1        | 0       | 0 OW[1:0] | 0 OW[1:0] | 1       | 1               |         | VCH[3:0] | VCH[3:0] | VCH[3:0] | Start V1ADC and V2ADC.                                                                                                                          |
| ADX    | CMD    | 1        | 0       | 1         | 0         | 0 1     | 1               | 0       | x        | x        | x        | Start AUX ADC.                                                                                                                                  |
| CLRVX  | CMD    | 1        | 1       | 1         | 0         | 0       | 0 1             | 0       | 0        | 1        | 0        | Clears all VxADC and AUX ADC results (ADBMS6830B: CLRAUX).                                                                                      |
| RDV1A  | RD48   | 0 0 0 0  | 0 0 0 0 | 0 0 0 0   | 0 0 0 0   | 0 0 1 0 | 0 0 0 1 0 0 0 1 | 1 0 1 1 | 0 1 0 0  | 1 0 1 0  | 0 1 0 1  | Reads V1ADC results (ADBMS6830B: RDCVD). ADBMS6830B compatible code RDFCD. ADBMS6830B compatible code RDACD. ADBMS6830B compatible code RDAUXA. |
| RDV1B  | RD48   | 0 0 0 0  | 0 0 0 0 | 0 0 0 0   | 0 0 0 0   | 0 0 1 0 | 0 0 0 1 0 0 0 1 | 1 0 1 1 | 0 1 0 0  | 0 1 0 1  | 1 0 1 0  | Reads V1ADC results (ADBMS6830B: RDCVE). ADBMS6830B compatible code RDFCE. ADBMS6830B compatible code RDACE. ADBMS6830B compatible code RDAUXB. |
| RDV1C  | RD48   | 0        | 0       | 0         | 0         | 0       | 0 0             | 0       | 0        | 1        | 1        | Reads V1ADC results (ADBMS6830B: RDSVA).                                                                                                        |
| RDV1D  | RD48   | 0        | 0       | 0         | 0         | 0 0     | 1               | 1       | 0        | 1        | 1        | Reads V1ADC/V2ADC results (ADBMS6830B: RDAUXC).                                                                                                 |
| RDV2A  | RD48   | 0 0      | 0 0     | 0 0       | 0 0       | 0 0     | 0 0 0 1         | 0 1     | 1 1      | 1 0      | 1 0      | Reads V2ADC results (ADBMS6830B: RDSVC). ADBMS6830B compatible code RDRAXA.                                                                     |
| RDV2B  | RD48   | 0 0      | 0 0     | 0 0       | 0 0       | 0 0     | 0 0 0 1         | 1 1     | 1 1      | 0 0      | 1 1      | Reads V2ADC results (ADBMS6830B: RDSVD). ADBMS6830B compatible code RDRAXB.                                                                     |
| RDV2C  | RD48   | 0        | 0       | 0         | 0         | 0       | 0 0             | 0       | 1        | 0        | 1        | Reads V2ADC results (ADBMS6830B: RDSVB).                                                                                                        |
| RDV2D  | RD48   | 0        | 0       | 0         | 0         | 0       | 0 1             | 1       | 1        | 1        | 1        | Reads V1ADC/V2ADC results (ADBMS6830B: RDAUXD).                                                                                                 |
| RDV2E  | RD48   | 0        | 0       | 0         | 0         | 0       | 1 0             | 0       | 1        | 0        | 1        | Reads V2ADC results (ADBMS6830B: RDRAXD).                                                                                                       |
| RDXA   | RD48   | 0        | 0       | 0         | 0         | 0       | 1 1             | 0       | 0        | 0        | 0        | Reads AUX ADC results (ADBMS6830B: RDSTATA).                                                                                                    |
| RDXB   | RD48   | 0        | 0       | 0         | 0         | 0       | 1 1             | 0       | 0        | 0        | 1        | Reads AUX ADC results (ADBMS6830B: RDSTATB).                                                                                                    |
| RDXC   | RD48   | 0        | 0       | 0         | 0         | 0       | 1 1             | 0       | 0        | 1        | 1        | Reads AUX ADC results (ADBMS6830B: RDSTATD).                                                                                                    |
| RDALLV | RD160  | 0        | 0       | 0         | 0         | 0       | 1 1             | 0       | 1        | 0        | 1        | Reads all external input V1ADC results and V9, V10 results measured by V2ADC only.                                                              |
| RDALLR | RD160  | 0        | 0       | 0         | 0         | 0       | 0 1             | 0       | 0        | 0        | 1        | Reads all external input V2ADC results and V7, V8 results measured by V1ADC only.                                                               |
| RDALLX | RD160  | 0        | 0       | 0         | 0         | 1       | 0 1             | 0       | 0        | 0        | 1        | Reads all AUX ADC results.                                                                                                                      |

## ADBMS2950B

## ADBMS2950B

The x indicates the bits that can be either 0 or 1. Any combination is valid, and the ADBMS2950B responds the same way if the command PEC matches the command bytes.

Table 50. ADV Parameter Bits

| Name   | Type   | Value   | Description                                                                                                        |
|--------|--------|---------|--------------------------------------------------------------------------------------------------------------------|
| OW     | PAR    |         | V1ADC and V2ADC open-wire test current injection enable.                                                           |
|        |        | 00      | V1ADC and V2ADC open-wire source off.                                                                              |
|        |        | 01      | Current injected into V1ADC MUXPfor measurements V1 to V8.                                                         |
|        |        |         | Current injected into V2ADC MUXPfor measurements V9 to V10.                                                        |
|        |        | 10      | Current injected into V1ADC MUXN(Pins selected by VS1 to VS8 configuration) for measurements V1 to V8.             |
|        |        | 11      | Current injected into V2ADC MUXN(Pins selected by VS9 to VS10 configuration) for measurements V9 to V10. Reserved. |
| VCH    | PAR    |         | V1ADC and V2ADC channel select.                                                                                    |
|        |        | ≤8      | Single Measurement, see Table 57.                                                                                  |
|        |        | ≥9      | Multi Measurement, see Table 58.                                                                                   |

Note that do not use open-wire test current injection on MUXP (OW=0b01) in combination with VCH=9. This injects current in an internal divided VREF2 reference path, which may cause a false trigger of the VDDUV flag.

Table 51. V1ADC, V2ADC, AUX ADC Result Registers

| Name     | Type   | Reset   | CLRVX   | Description                                                                                           |
|----------|--------|---------|---------|-------------------------------------------------------------------------------------------------------|
| V1A      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC V1 result register, voltage = V1A × 100 µV.                                       |
| V1B      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC V1 result register, voltage = V1B × -85 µV.                                       |
| V2A      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC V2 result register, voltage = V2A × 100 µV.                                       |
| V2B      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC V2 result register, voltage = V2B × -85 µV.                                       |
| V3A      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC V3 result register, voltage = V3A × 100 µV.                                       |
| V3B      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC V3 result register, voltage = V3B × -85 µV.                                       |
| V4A      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC V4 result register, voltage = V4A × 100 µV.                                       |
| V4B      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC V4 result register, voltage = V4B × -85 µV.                                       |
| V5A      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC V5 result register, voltage = V5A × 100 µV.                                       |
| V5B      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC V5 result register, voltage = V5B × -85 µV.                                       |
| V6A      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC V6 result register, voltage = V6A × 100 µV.                                       |
| V6B      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC V6 result register, voltage = V6B × -85 µV.                                       |
| V7A      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC V7 result register, voltage = V7A × 100 µV.                                       |
| V8A      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC V8 result register, voltage = V8A × 100 µV.                                       |
| V9B      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC V9 result register, voltage = V9B × -85 µV.                                       |
| V10B     | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC V10 result register, voltage = V10B × -85 µV.                                     |
| VREF2A   | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V1ADC VREF2 result register, voltage = VREF2A × (100 µV × 3 ÷ 1.25) = VREF2A × 240 µV.  |
| VREF2B   | RO     | 0x7FFF  | 0x8000  | Signed 16-bit V2ADC VREF2 result register, voltage = VREF2B × (-85 µV × 3 ÷ 1.25) = VREF2B × -204 µV. |
| VREF1P25 | RO     | 0x7FFF  | 0x8000  | Signed 16-bit AUX ADC VREF1P25 result register, voltage = VREF1P25 × 100 µV.                          |
| VDIV     | RO     | 0x7FFF  | 0x8000  | Signed 16-bit AUX ADC VDIV result register, voltage = VDIV × 100 µV.                                  |
| VREG     | RO     | 0x7FFF  | 0x8000  | Signed 16-bit AUX ADC VREG result register, voltage = VREG × 240 µV.                                  |
| VDD      | RO     | 0x7FFF  | 0x8000  | Signed 16-bit AUX ADC VDD result register, voltage = VDD × 1 mV.                                      |
| VDIG     | RO     | 0x7FFF  | 0x8000  | Signed 16-bit AUX ADC VDIG result register, voltage = VDIG × 240 µV.                                  |
| EPAD     | RO     | 0x7FFF  | 0x8000  | Signed 16-bit AUX ADC EPAD result register, voltage = EPAD × 100 µV.                                  |
| TMP1     | RO     | 0x7FFF  | 0x8000  | Signed 16-bit AUX ADC temperature 1 result register, temperature in °C = (TMP1 ÷ 61.8) - 250°C.       |
| TMP2     | RO     | 0x7FFF  | 0x8000  | Signed 16-bit AUX ADC temperature 2 result register, temperature in °C = (TMP2 ÷ 20.5) - 267°C.       |

Table 52. V1ADC, V2ADC, AUX ADC Return Values

| Command   | BYTE 5       | BYTE 4      | BYTE 3    | BYTE 2   | BYTE 1    | BYTE 0   |
|-----------|--------------|-------------|-----------|----------|-----------|----------|
| RDV1A     | V3A[15:8]    | V3A[7:0]    | V2A[15:8] | V2A[7:0] | V1A[15:8] | V1A[7:0] |
| RDV1B     | V6A[15:8]    | V6A[7:0]    | V5A[15:8] | V5A[7:0] | V4A[15:8] | V4A[7:0] |
| RDV1C     | VREF2A[15:8] | VREF2A[7:0] | V8A[15:8] | V8A[7:0] | V7A[15:8] | V7A[7:0] |
| RDV1D     | V9B[15:8]    | V9B[7:0]    | V8A[15:8] | V8A[7:0] | V7A[15:8] | V7A[7:0] |

Multichannel open-wire test current injection can be used on MUXN (OW=0b10) issued with any VCH setting or on MUXP (OW=0b01) with VCH=10 to VCH=15.

Single-channel open-wire diagnostic measurements can be issued with any OW and VCH setting.

RDALL commands are not available on the isoSPI daisy-chains. For more details, see the Communication Protocol section.

## Data Sheet

## ADBMS2950B

| Command   | BYTE 5       | BYTE 4      | BYTE 3       | BYTE 2      | BYTE 1         | BYTE 0        |
|-----------|--------------|-------------|--------------|-------------|----------------|---------------|
| RDV2A     | V3B[15:8]    | V3B[7:0]    | V2B[15:8]    | V2B[7:0]    | V1B[15:8]      | V1B[7:0]      |
| RDV2B     | V6B[15:8]    | V6B[7:0]    | V5B[15:8]    | V5B[7:0]    | V4B[15:8]      | V4B[7:0]      |
| RDV2C     | VREF2B[15:8] | VREF2B[7:0] | V10B[15:8]   | V10B[7:0]   | V9B[15:8]      | V9B[7:0]      |
| RDV2D     | VREF2B[15:8] | VREF2B[7:0] | VREF2A[15:8] | VREF2A[7:0] | V10B[15:8]     | V10B[7:0]     |
| RDV2E     | 0xFF         | 0xFF        | 0xFF         | 0xFF        | V10B[15:8]     | V10B[7:0]     |
| RDXA      | VREG[15:8]   | VREG[7:0]   | TMP1[15:8]   | TMP1[7:0]   | VREF1P25[15:8] | VREF1P25[7:0] |
| RDXB      | EPAD[15:8]   | EPAD[7:0]   | VDIG[15:8]   | VDIG[7:0]   | VDD[15:8]      | VDD[7:0]      |
| RDXC      | OSCCNT       | 0xFF        | TMP2[15:8]   | TMP2[7:0]   | VDIV[15:8]     | VDIV[7:0]     |

## Table 53. Clock Frequency Monitor Result Description

| Name   | Type   | Reset   | Value   | Description                                                                                                                                                                                         |
|--------|--------|---------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OSCCNT | RO     | 0x00    |         | Most recently counted OSC1 oscillator clocks within one OSC2 half period. In case of an OSCFLT event, the first invalid count is latched until OSCFLT gets cleared. Expected valid range, no fault. |
|        |        |         | 0x34 to |                                                                                                                                                                                                     |
|        |        |         | 0x47    |                                                                                                                                                                                                     |
|        |        |         | Others  | First latched counter value in the invalid range leading to OSCFLT flag assertion.                                                                                                                  |

## Table 54. RDALLV Return Values

| BYTE   | BIT 7      | BIT 6      | BIT 5      | BIT 4      | BIT 3      | BIT 2      | BIT 1      | BIT 0      |
|--------|------------|------------|------------|------------|------------|------------|------------|------------|
| 0      | V1A[7:0]   | V1A[7:0]   | V1A[7:0]   | V1A[7:0]   | V1A[7:0]   | V1A[7:0]   | V1A[7:0]   | V1A[7:0]   |
| 1      | V1A[15:8]  | V1A[15:8]  | V1A[15:8]  | V1A[15:8]  | V1A[15:8]  | V1A[15:8]  | V1A[15:8]  | V1A[15:8]  |
| 2      | V2A[7:0]   | V2A[7:0]   | V2A[7:0]   | V2A[7:0]   | V2A[7:0]   | V2A[7:0]   | V2A[7:0]   | V2A[7:0]   |
| 3      | V2A[15:8]  | V2A[15:8]  | V2A[15:8]  | V2A[15:8]  | V2A[15:8]  | V2A[15:8]  | V2A[15:8]  | V2A[15:8]  |
| 4      | V3A[7:0]   | V3A[7:0]   | V3A[7:0]   | V3A[7:0]   | V3A[7:0]   | V3A[7:0]   | V3A[7:0]   | V3A[7:0]   |
| 5      | V3A[15:8]  | V3A[15:8]  | V3A[15:8]  | V3A[15:8]  | V3A[15:8]  | V3A[15:8]  | V3A[15:8]  | V3A[15:8]  |
| 6      | V4A[7:0]   | V4A[7:0]   | V4A[7:0]   | V4A[7:0]   | V4A[7:0]   | V4A[7:0]   | V4A[7:0]   | V4A[7:0]   |
| 7      | V4A[15:8]  | V4A[15:8]  | V4A[15:8]  | V4A[15:8]  | V4A[15:8]  | V4A[15:8]  | V4A[15:8]  | V4A[15:8]  |
| 8      | V5A[7:0]   | V5A[7:0]   | V5A[7:0]   | V5A[7:0]   | V5A[7:0]   | V5A[7:0]   | V5A[7:0]   | V5A[7:0]   |
| 9      | V5A[15:8]  | V5A[15:8]  | V5A[15:8]  | V5A[15:8]  | V5A[15:8]  | V5A[15:8]  | V5A[15:8]  | V5A[15:8]  |
| 10     | V6A[7:0]   | V6A[7:0]   | V6A[7:0]   | V6A[7:0]   | V6A[7:0]   | V6A[7:0]   | V6A[7:0]   | V6A[7:0]   |
| 11     | V6A[15:8]  | V6A[15:8]  | V6A[15:8]  | V6A[15:8]  | V6A[15:8]  | V6A[15:8]  | V6A[15:8]  | V6A[15:8]  |
| 12     | V7A[7:0]   | V7A[7:0]   | V7A[7:0]   | V7A[7:0]   | V7A[7:0]   | V7A[7:0]   | V7A[7:0]   | V7A[7:0]   |
| 13     | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  |
| 14     | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   |
| 15     | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  |
| 16     | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   |
| 17     | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  |
| 18     | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  |
|        | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] |
| 19     |            |            |            |            |            |            |            |            |

## Table 55. RDALLR Return Values

|   BYTE | BIT 7     | BIT 6     | BIT 5     | BIT 4     | BIT 3     | BIT 2     | BIT 1     | BIT 0     |
|--------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
|      0 | V1B[7:0]  | V1B[7:0]  | V1B[7:0]  | V1B[7:0]  | V1B[7:0]  | V1B[7:0]  | V1B[7:0]  | V1B[7:0]  |
|      1 | V1B[15:8] | V1B[15:8] | V1B[15:8] | V1B[15:8] | V1B[15:8] | V1B[15:8] | V1B[15:8] | V1B[15:8] |
|      2 | V2B[7:0]  | V2B[7:0]  | V2B[7:0]  | V2B[7:0]  | V2B[7:0]  | V2B[7:0]  | V2B[7:0]  | V2B[7:0]  |
|      3 | V2B[15:8] | V2B[15:8] | V2B[15:8] | V2B[15:8] | V2B[15:8] | V2B[15:8] | V2B[15:8] | V2B[15:8] |
|      4 | V3B[7:0]  | V3B[7:0]  | V3B[7:0]  | V3B[7:0]  | V3B[7:0]  | V3B[7:0]  | V3B[7:0]  | V3B[7:0]  |
|      5 | V3B[15:8] | V3B[15:8] | V3B[15:8] | V3B[15:8] | V3B[15:8] | V3B[15:8] | V3B[15:8] | V3B[15:8] |
|      6 | V4B[7:0]  | V4B[7:0]  | V4B[7:0]  | V4B[7:0]  | V4B[7:0]  | V4B[7:0]  | V4B[7:0]  | V4B[7:0]  |
|      7 | V4B[15:8] | V4B[15:8] | V4B[15:8] | V4B[15:8] | V4B[15:8] | V4B[15:8] | V4B[15:8] | V4B[15:8] |
|      8 | V5B[7:0]  | V5B[7:0]  | V5B[7:0]  | V5B[7:0]  | V5B[7:0]  | V5B[7:0]  | V5B[7:0]  | V5B[7:0]  |
|      9 | V5B[15:8] | V5B[15:8] | V5B[15:8] | V5B[15:8] | V5B[15:8] | V5B[15:8] | V5B[15:8] | V5B[15:8] |
|     10 | V6B[7:0]  | V6B[7:0]  | V6B[7:0]  | V6B[7:0]  | V6B[7:0]  | V6B[7:0]  | V6B[7:0]  | V6B[7:0]  |
|     11 | V6B[15:8] | V6B[15:8] | V6B[15:8] | V6B[15:8] | V6B[15:8] | V6B[15:8] | V6B[15:8] | V6B[15:8] |
|     12 | V7A[7:0]  | V7A[7:0]  | V7A[7:0]  | V7A[7:0]  | V7A[7:0]  | V7A[7:0]  | V7A[7:0]  | V7A[7:0]  |

## ADBMS2950B

## Data Sheet

|   BYTE | BIT 7      | BIT 6      | BIT 5      | BIT 4      | BIT 3      | BIT 2      | BIT 1      | BIT 0      |
|--------|------------|------------|------------|------------|------------|------------|------------|------------|
|     13 | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  | V7A[15:8]  |
|     14 | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   | V8A[7:0]   |
|     15 | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  | V8A[15:8]  |
|     16 | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   | V9B[7:0]   |
|     17 | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  | V9B[15:8]  |
|     18 | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  | V10B[7:0]  |
|     19 | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] | V10B[15:8] |

Table 56. RDALLX Return Values

|   BYTE | BIT 7          | BIT 6          | BIT 5          | BIT 4          | BIT 3          | BIT 2          | BIT 1          | BIT 0          |
|--------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|
|      0 | VREF2A[7:0]    | VREF2A[7:0]    | VREF2A[7:0]    | VREF2A[7:0]    | VREF2A[7:0]    | VREF2A[7:0]    | VREF2A[7:0]    | VREF2A[7:0]    |
|      1 | VREF2A[15:8]   | VREF2A[15:8]   | VREF2A[15:8]   | VREF2A[15:8]   | VREF2A[15:8]   | VREF2A[15:8]   | VREF2A[15:8]   | VREF2A[15:8]   |
|      2 | VREF2B[7:0]    | VREF2B[7:0]    | VREF2B[7:0]    | VREF2B[7:0]    | VREF2B[7:0]    | VREF2B[7:0]    | VREF2B[7:0]    | VREF2B[7:0]    |
|      3 | VREF2B[15:8]   | VREF2B[15:8]   | VREF2B[15:8]   | VREF2B[15:8]   | VREF2B[15:8]   | VREF2B[15:8]   | VREF2B[15:8]   | VREF2B[15:8]   |
|      4 | VREF1P25[7:0]  | VREF1P25[7:0]  | VREF1P25[7:0]  | VREF1P25[7:0]  | VREF1P25[7:0]  | VREF1P25[7:0]  | VREF1P25[7:0]  | VREF1P25[7:0]  |
|      5 | VREF1P25[15:8] | VREF1P25[15:8] | VREF1P25[15:8] | VREF1P25[15:8] | VREF1P25[15:8] | VREF1P25[15:8] | VREF1P25[15:8] | VREF1P25[15:8] |
|      6 | TMP1[7:0]      | TMP1[7:0]      | TMP1[7:0]      | TMP1[7:0]      | TMP1[7:0]      | TMP1[7:0]      | TMP1[7:0]      | TMP1[7:0]      |
|      7 | TMP1[15:8]     | TMP1[15:8]     | TMP1[15:8]     | TMP1[15:8]     | TMP1[15:8]     | TMP1[15:8]     | TMP1[15:8]     | TMP1[15:8]     |
|      8 | VREG[7:0]      | VREG[7:0]      | VREG[7:0]      | VREG[7:0]      | VREG[7:0]      | VREG[7:0]      | VREG[7:0]      | VREG[7:0]      |
|      9 | VREG[15:8]     | VREG[15:8]     | VREG[15:8]     | VREG[15:8]     | VREG[15:8]     | VREG[15:8]     | VREG[15:8]     | VREG[15:8]     |
|     10 | VDD[7:0]       | VDD[7:0]       | VDD[7:0]       | VDD[7:0]       | VDD[7:0]       | VDD[7:0]       | VDD[7:0]       | VDD[7:0]       |
|     11 | VDD[15:8]      | VDD[15:8]      | VDD[15:8]      | VDD[15:8]      | VDD[15:8]      | VDD[15:8]      | VDD[15:8]      | VDD[15:8]      |
|     12 | VDIG[7:0]      | VDIG[7:0]      | VDIG[7:0]      | VDIG[7:0]      | VDIG[7:0]      | VDIG[7:0]      | VDIG[7:0]      | VDIG[7:0]      |
|     13 | VDIG[15:8]     | VDIG[15:8]     | VDIG[15:8]     | VDIG[15:8]     | VDIG[15:8]     | VDIG[15:8]     | VDIG[15:8]     | VDIG[15:8]     |
|     14 | EPAD[7:0]      | EPAD[7:0]      | EPAD[7:0]      | EPAD[7:0]      | EPAD[7:0]      | EPAD[7:0]      | EPAD[7:0]      | EPAD[7:0]      |
|     15 | EPAD[15:8]     | EPAD[15:8]     | EPAD[15:8]     | EPAD[15:8]     | EPAD[15:8]     | EPAD[15:8]     | EPAD[15:8]     | EPAD[15:8]     |
|     16 | VDIV[7:0]      | VDIV[7:0]      | VDIV[7:0]      | VDIV[7:0]      | VDIV[7:0]      | VDIV[7:0]      | VDIV[7:0]      | VDIV[7:0]      |
|     17 | VDIV[15:8]     | VDIV[15:8]     | VDIV[15:8]     | VDIV[15:8]     | VDIV[15:8]     | VDIV[15:8]     | VDIV[15:8]     | VDIV[15:8]     |
|     18 | TMP2[7:0]      | TMP2[7:0]      | TMP2[7:0]      | TMP2[7:0]      | TMP2[7:0]      | TMP2[7:0]      | TMP2[7:0]      | TMP2[7:0]      |
|     19 | TMP2[15:8]     | TMP2[15:8]     | TMP2[15:8]     | TMP2[15:8]     | TMP2[15:8]     | TMP2[15:8]     | TMP2[15:8]     | TMP2[15:8]     |

After receiving an ADV command, the ADBMS2950B can either perform a single channel measurement, or sequentially cycle through several measurement inputs depending on the VCH parameter. The multiplexer inputs are listed in Table 57 and Table 58, where MUXP indicates the positive multiplexer input and MUXN indicates the negative multiplexer input.

While V1 to V6 can be measured redundantly by both voltage ADCs, V7-V10 can only be measured by either V1ADC (V7, V8) or V2ADC (V9, V10). This enables truly redundant

Table 57. V1ADC and V2ADC Single-Channel Options

measurements if V7, V9 or V8, V10 are utilized as pairs, where the comparison can be done in the host controller.

The ADBMS2950B allows all of its V1 to V10 voltage inputs, each to be measured against either SGND or VREF1P25. Furthermore, V1 and V2 can also be measured against either V3 or V4 to allow differential measurements between two input pins. The reference potential that is applied per input pin is selected by corresponding VSx bits (VS1[1:0], VS2[1:0], VS3 to VS10) in the CFGA Configuration Register (see Table 70).

|   VCH | V1ADCMUXP   | V2ADCMUXP   | V1ADCMUXN   | V2ADC MUXN   | V1ADC Results   | V2ADC Results   | Time    |
|-------|-------------|-------------|-------------|--------------|-----------------|-----------------|---------|
|     0 | V1          | V1          | By VS1      | By VS1       | V1A             | V1B             | 0.27 ms |
|     1 | V2          | V2          | By VS2      | By VS2       | V2A             | V2B             | 0.27 ms |
|     2 | V3          | V3          | By VS3      | By VS3       | V3A             | V3B             | 0.27 ms |
|     3 | V4          | V4          | By VS4      | By VS4       | V4A             | V4B             | 0.27 ms |
|     4 | V5          | V5          | By VS5      | By VS5       | V5A             | V5B             | 0.27 ms |
|     5 | V6          | V6          | By VS6      | By VS6       | V6A             | V6B             | 0.27 ms |
|     6 | V7          | V9          | By VS7      | By VS9       | V7A             | V9B             | 0.27 ms |
|     7 | V8          | V10         | By VS8      | By VS10      | V8A             | V10B            | 0.27 ms |
|     8 | VREF2       | VREF2       | SGND        | SGND         | VREF2A          | VREF2B          | 0.27 ms |

The time of a single channel measurement consists of the multiplexer setting and a conversion time which is 0.265 ms.

Additionally, to enable external signals to settle before the measurement is taken, the ADBMS2950B features a programmable SOAK time. It can be specified in the CFGA

## Data Sheet

register (see Table 70). If the respective bit field is not equal to zero, the first measurement is delayed by tSOAK after the ADV command. If open-wire detection is enabled by setting the OW bits, the current sources are switched on immediately after the

Table 58. V1ADC and V2ADC Multichannel Options

## ADBMS2950B

multiplexer is set to the selected input and stay enabled for the SOAK and the ADC conversion time. If the VCH parameter is set to any value greater than eight, the VxADCs measure multiple channels, one after the other.

|   VCH | Sequence         |   n | Time    |
|-------|------------------|-----|---------|
|     9 | VCH0-VCH8        |   9 | 2.39 ms |
|    10 | VCH1, VCH3, VCH5 |   3 | 0.80 ms |
|    11 | VCH0-VCH5        |   6 | 1.59 ms |
|    12 | VCH0-VCH3        |   4 | 1.06 ms |
|    13 | VCH0, VCH2, VCH4 |   3 | 0.80 ms |
|    14 | VCH4-VCH7        |   4 | 1.06 ms |
|    15 | VCH5-VCH7        |   3 | 0.80 ms |

The SOAK time is applied to every individual measurement. Consequently, multichannel conversions take n times as long as single conversions, where n is the number of specified channels. The following formula can be used to calculate the total end of conversion (EOC) depending on the number of channels (n) and tSOAK (see SOAK configuration in Table 70):

tEOC = n × (549 ÷ OSC1 + tSOAK)

With the biggest SOAK time configured, the typical overall measurement time is 9 × (0.265 ms + 150 ms) = 1.35 seconds.

## VxADC Open-Wire Current Sources

As shown in the block diagram, the ADBMS2950B features 10 μA pull-up current sources at the inputs of the voltage measurement paths. Activating these current sources allows the detection of a broken input connection or multiplexer. The open-wire current sources are controlled by the OW bits. For more details, see Table 50.

As the open-wire current sources are connected after internal resistors of 2.3 kΩ, which activate them changes the respective ADC reading by about 23 mV, either in the positive (OW = 01) or negative (OW = 10) direction.

The open-wire current sources of the V2ADC are only active when that ADC is measuring V9 or V10. As a result, when measuring V1 to V6, the V2ADC results are not affected by the internal voltage drop of 23 mV , while they are affected for the measurements of V9 and V10. In addition to internal voltage drop, all measurements on Vx pins are altered by the voltage drop of the pull-up current across the external source impedance of the respective pin to GND. The SOAK time configuration allows adapting to the settling time of the external RC filters by activating the current for the configured time duration before the ADC conversion, the current source is active during the conversion itself and during the SOAK time leading up to it.

The open-wire current sources of V1ADC and V2ADC are not active when measuring VREF2.

## VBxADC and VxADC Transfer Function

The transfer functions of the V1ADC and VB1ADC are different from those of the V2ADC and VB2ADC. This has an impact on the digital output codes that can be reached.

All VxADCs and VBxADCs calculate the ratio of their input signal to VREF1. These ratios cannot exceed the -1 to +1 ranges.

The V1ADC and VB1ADC have an LSB size of +100 µV. At the nominal VREF1 voltage of 3.2V , the highest digital output code that can be reached is 3.2V ÷ 100 µV = 32000, which is lower than the highest code that can be represented in the register (+32767).

A similar situation exists for negative inputs. Depending on the value of VREF1, these ADCs have a range of digital output codes that cannot be reached. The V2ADC and VB2ADCs have an LSB size of -85 µV . The largest positive input voltage that can be digitally represented is -32768 × -85 µV = 2.785V , which is lower than the guaranteed minimum value of VREF1. Therefore, these ADCs do not have any unreachable codes. Figure 30 and Figure 31 visualize those details in the ADC transfer functions. V1ADC is equivalent to VB1ADC, and V2ADC is equivalent to VB2ADC.

Having a set of unreachable codes can be helpful to distinguish ADC conversion results from the register's CLEAR or RESET values. At the same time, external decision-making based on programmable thresholds (for example, Open-wire Detection), must take the available V1ADC and VB1ADC code range into account.

## ADBMS2950B

Figure 30. VxADC and VBxADC Transfer Function

<!-- image -->

Figure 31. VxADC and VBxADC Transfer Function Detail

<!-- image -->

## Table 59. PLI1, PLI2, PLV, PLX Command Codes

| Name   | Type   |   BIT 10 |   BIT 9 |   BIT 8 |   BIT 7 |   BIT 6 |   BIT 5 |   BIT 4 |   BIT 3 |   BIT 2 |   BIT 1 |   BIT 0 | Description                                                                   |
|--------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|-------------------------------------------------------------------------------|
| PLI1   | CMD    |        1 |       1 |       1 |       0 |       0 |       0 |       1 |       1 |       1 |       0 |       0 | Poll I1ADC and VB1ADC conversion completion (ADBMS6830B: PLCADC).             |
| PLI2   | CMD    |        1 |       1 |       1 |       0 |       0 |       0 |       1 |       1 |       1 |       0 |       1 | Poll I2ADC and VB2ADC conversion completion (ADBMS6830B: PLSADC).             |
| PLV    | CMD    |        1 |       1 |       1 |       0 |       0 |       0 |       1 |       1 |       1 |       1 |       0 | Poll V1ADC and V2ADC conversion completion (ADBMS6830B: PLAUX1).              |
| PLX    | CMD    |        1 |       1 |       1 |       0 |       0 |       0 |       1 |       1 |       1 |       1 |       1 | Poll AUX ADC conversion completion (ADBMS6830B: PLAUX2).                      |
| PLADC  | CMD    |        1 |       1 |       1 |       0 |       0 |       0 |       1 |       1 |       0 |       0 |       0 | Poll IxADC, VBxADC, VxADC, AUX ADC conversion completion (ADBMS6830B: PLADC). |

## ADC Total Measurement Error

The IxADCs each have a resolution of 18 bits, but their precision is limited by random noise. At their 1 ms conversion time, the random noise follows a normal distribution with a standard deviation of 1.6 µVRMS. The precision can be improved by accumulating (averaging) multiple conversions. For every doubling of the number of conversions that are accumulated, the precision improves by a factor √2.

Figure 32 shows the precision for a zero-input signal. The graph shows both the standard deviations as well as ±3.5σ

limits, which correspond to a 99.98% confidence interval. As the number of accumulated conversions is increased, the precision improves and settles towards the accuracy. The accuracy of the IxADCs is determined by their offset, gain error, and nonlinearity. At zero-input, only the offset is relevant. The precision shown in Figure 32 equals the TME for such an input signal.

The accumulation or averaging can be performed externally or by using the programmable on-chip accumulators. The resolution of the IxACC registers is a function of ACCN. The resolution of the 1 ms data in the I1 and I2 registers is fixed to

## Poll Commands

The simplest method to determine ADC completion is for the host controller to start an ADC conversion and wait for the specified conversion time to pass before reading the results. The ADBMS2950B also allows the use of polling for conversion completion of ADCs triggered for single-shot measurements. For the ADCs in continuous mode, the successful polling of the end of conversion (EOC) is not possible. Any ADC trigger command (ADI1, ADI2, ADV, and ADX) supports polling by extending the serial transaction to read the poll data. Four polling commands allow polling of groups of ADCs after they have been triggered:

- PLI1 for I1ADC/VB1ADC
- PLI2 for I2ADC/VB2ADC
- PLV for V1ADC/V2ADC
- PLX for AUX ADC

Additionally, the global Poll command PLADC allows to poll for completion of all ADCs in case none of them operate in continuous mode.

## Data Sheet

18-bit. However, because the peak-to-peak noise is significantly larger than 1 LSB, an accumulation based on multiple Ix conversions, nevertheless, yield an effective resolution that is higher than 18-bit (dithering). The random noise of I1ADC is uncorrelated to that of I2ADC. The random noise is also uncorrelated between consecutive 1 ms IxADC conversions.

Figure 32. IxADC Precision Depending on Number of Averaged Conversions at Zero-Input

<!-- image -->

Figure 33. IxADC Noise Distribution of the 1 ms Conversion Results

<!-- image -->

For larger input signals, the accuracy is also determined by the gain error, and the noise becomes a relatively smaller error term. Figure 34 shows the expected IxADC output for a 10 mV input signal, ±0.1% gain error limits, and the ADC output including noise.

While averaging still improves the peak-to-peak reading somewhat, the TME is dominated by the ±0.1% gain error term. Averaging with up to 32 conversions can be done through the on-chip accumulators configured by the ACCI setting. Averaging of more conversions must be done in the host.

## ADBMS2950B

Figure 34. IxADC Precision Depending on Number of Averaged Conversions at 10 mV Input Signal

<!-- image -->

In general, the IxADC TME can be decomposed in a precision and an accuracy term. Using the electrical specifications, the TME can be calculated as a function of the input signal with the following equation:

TME = offset + signal × (gain error + nonlinearity) + noise.

The noise can be improved by averaging, while the accuracy is determined by the ADC specifications. Figure 35 shows TME vs. input signal for four accumulation settings: ACCN = 1, ACCN = 8, ACCN = 32, and an average of 64, which must be computed in the host controller, as the on-chip accumulator can only be set to a maximum of ACCN = 32. This requires the host to calculate the average over two consecutive IxACC results. This calculation again uses a 3.5σ peak noise estimate, which means that 99.98% of all conversion have a lower noise value than the curves shown in Figure 35. As the total measurement time decreases or increases, the curve approaches the limits set by the offset plus noise or gain plus nonlinearity error specifications.

Figure 35. IxADC TME vs. Input Voltage

<!-- image -->

## ADBMS2950B

The gain error of the IxADC is slightly dependent on the IxADC input signal, which leads to a small amount of systematic nonlinearity. The TME calculation in Figure 35 is based on the worst-case gain error values of ±0.1% and a typical nonlinearity of ±0.06%. The calculated TME is below the specified maximum TME of 0.2% for signals above 5 mV , at ACCN = 32.

The VBxADCs run in lockstep with IxADC, and so their accumulators average the same number of samples as for the IxADC channels. Figure 36 shows the VBxADC TME as a function of the input signal.

Compared to the IxADCs, the impact of noise is relatively small. At larger inputs, the VBxADC may exhibit some nonlinearity, which is shown in Figure 36 as an increase in offset.

Figure 36. VBxADC TME vs. Input Voltage

<!-- image -->

## OVERCURRENT MANAGEMENT

The ADBMS2950B provides functions for overcurrent management. Three overcurrent ADCs (OC1ADC to OC3ADC) are provided for triple redundancy. Individual overcurrent comparator thresholds (OC1TH to OC3TH) and a common deglitch filter setting (OCDGT) are programmable. The output of the threshold comparators OC1 to OC3 are fed into deglitch filters, then into latches OC1L to OC3L, and then into redundant majority voters controlling the output pins OCA and OCB.

Overcurrent events are signaled through the OCA and OCB pins either in the PWM mode or in a static style, as selected by OCMODE. Independent of the mode, the polarity (OCAX, OCBX) and the output type can be configured to be either open-drain or push-pull (OCOD). To accommodate both single and dual shunt applications, a gain of 1× or 2× can be selected per overcurrent channel (OC1GC to OC3GC).

Individual overcurrent conversion results are provided at the conversion rate of 16 kHz through registers OC1R to OC3R. For the 3rd ADC (OC3ADC), the minimum and maximum conversion results are tracked within registers OC3MAX and OC3MIN.

## OCx Output Pin Behavior

During power-down and after power-up or SRST, the OCA and OCB pins are in a high impedance state. This allows defining of the logic level of the OCx pin through pull-up or pull-down resistors as required for the application. Caution must be taken when pulling-up the OCx pins to a voltage rail that is powered independent of the VREG power rail, as the internal clamping diodes feed the IC supply current from the OCx pins to the VREG pin. In this scenario, an external Schottky diode from such a power rail to the VREG rail must be placed.

Once the ADBMS2950B is powered-up, the host controller can configure the mode and polarity of the OCx pins as required through the configuration registers OCAX, OCBX, OCMODE, and OCOD.

The OCx pins enable their output drivers conservatively to prevent false positives. They are in a high impedance state when OCEN = 0, regardless of the OCMODE or OCOD settings. Whenever OCEN transitions from 0 to 1 after OCMODE has been set to a non-zero value, the OC pins initially remain in a high impedance state and only activate their output drivers after an interval of 10 OCxADC conversion cycles (OCDP = 0). This ensures that the OCx output is always aligned with the deglitchers, configured through OCDGT, that are reset at the OCEN transition. The bit OCDP, when set, reduces the interval to 3 OCxADC conversion cycles. For the static or any of the PWM modes, the OCDP allows faster reconfiguration as it is required for Overcurrent Configuration Update, or manual assertion of the OCx outputs as it is required for the Crash Signal Management.

The CLRFLAG command asserting any of the bits OC1L, OC2L, OC3L re-trigger the interval during which OCA and OCB are high impedance. Similarly, the CLRFLAG command asserting bits OCAL and/or OCBL re-trigger the interval for OCA and/or OCB during which the respective pin has high impedance. In both the cases, the deglitchers reset as well.

Whenever OCEN transitions from 0 to 1 when OCMODE is 0, the OC pins remain high impedance. The static mode (OCMODE = 0b11) and any combination of OCAX, OCBX allows performing connectivity tests of the OCA, OCB pins and the connected circuitry.

The actual state of the OCA and OCB pins can be readback directly through the read-only bits OCAP and OCBP in the STAT registers. However, in either PWM1 or PWM2 mode, the state of the pins changes too frequently so that the useful function of these bits is limited to the static mode and to diagnostics. Therefore, the additional OCAGD and OCBGD bits in the FLAG register are used to indicate if the state of the respective pins differs from the intention of output control, irrespective of whether the OC outputs are configured in static or in any PWM mode.

## Data Sheet

In both the PWM modes, the OCA and OCB pins output a non-latched version of the majority decision. When the overcurrent condition disappears at the input of the device, it also disappears again at the output, after a latency depending on the OCDGT setting. However, when configured in static mode, the OCA and OCB pins output the state of the OCAL and OCBL latches. One needs to manually clear the latched OCAL and OCBL bits with the CLRFLAG command to de-assert the static outputs.

## Static Overcurrent Output Mode

In the static overcurrent output mode, the OCA and OCB pins are either static de-asserted, in case of no overcurrent, or static

## ADBMS2950B

asserted and latched in case of an overcurrent event that passed the deglitch filter.

## PWM Overcurrent Output Modes

The two PWM overcurrent output modes, with the coding as shown in Figure 37, can be selected through OCMODE. The frequency of the PWM is equal to the conversion rate of the OCxADC which is 16 kHz. All the ADCs operate from the same global clock with tolerance of 10%. Therefore, the ADC conversion rates and the PWM frequency have the same tolerance. The duty cycle is clock accurate and only varies with the signal slew rate and threshold on the receiver side. The duty cycle steps (12.5% for PWM1 and 25% for PWM2) give enough headroom for such variations.

<!-- image -->

## PWM1 Overcurrent Output Mode

The PWM1 mode is optimized for the direct communication of overcurrent events to pyrofuse ignition hardware. The latter is assumed to be designed in such a way that it triggers the pyrofuse ignition only if two or more PWM output periods have a 75% duty cycle. The OCA and OCB pins output a 75% duty cycle when the majority voters assert overcurrent while neither a fault nor a diagnostic cycle is pending in the device.

Figure 37. PWM1 and PWM2 Coding

The given duty cycles are for the non-inverted output selected by OCAX = 0, OCBX = 0. When these bits are set to 1 instead, the duty cycle of the respective outputs are essentially inverted, leading to (100% - non-inverted duty cycle) 75% is changed to 25% and 0% is changed to 100%.

When there is no overcurrent, the OCA and OCB pins output a 25% duty cycle. While diagnostics are ongoing or faults are pending, the OCA and OCB pins output a 0% duty cycle. This can trigger an external timeout detector.

To prevent unintended ignition because of a fault that causes the OSC1 clock to stop during the active time of the duty cycle, the active state of the duty cycle is gated by the output signal from the no-clock detection.

The external circuit can further deglitch events for more conservative ignition because the overcurrent events are not latched inside the IC.

## Table 60. PWM1 Overcurrent Output Mode Duty-Cycle Coding for OCAX = 0, OCBX = 0

| Duty Cycle     | Description                                                                                                        |
|----------------|--------------------------------------------------------------------------------------------------------------------|
| 0%- High-Z     | OCx pins in high impedance state after reset and whenever OCEN = 0.                                                |
| 0%- Active-low | OCx pins actively driven low. Detection of any SPF which is a DFI for OC1-2-3 or when executing diagnostic for OC. |
| 25%            | OC threshold is not violated by more than one OCxADC (no overcurrent).                                             |
| 75%            | OC threshold is violated by more than one OCxADC.                                                                  |

## ADBMS2950B

## PWM2 Overcurrent Output Mode

The PWM2 mode is optimized for communicating the overcurrent condition to an external microcontroller, which features a timer or Capture-Compare Unit (CAPCOM). It provides more detailed information than the PWM1 Mode. The microcontroller is informed whether one, two, or all the three OCxADCs report an overcurrent event. The microcontroller is also made aware of whether any of the overcurrent channels reports an overcurrent while diagnostics are performed or while faults are pending.

A duty cycle of 50% indicates a healthy device and no overcurrent. Greater duty cycles indicate the overcurrent detection. Lower duty cycles indicate pending faults or ongoing diagnostics. Table 61 shows all duty-cycle encodings. The microcontroller can further deglitch events for more conservative ignition because the overcurrent events are not latched inside the IC.

When an overcurrent event, a fault or a diagnostic case is detected, the ongoing PWM period completes, and the new duty cycle is applied from the next period onwards.

Table 61. PWM2 Overcurrent Output Mode Duty-Cycle Coding for OCAX = 0, OCBX = 0

| Duty Cycle   | Description                                                                              |
|--------------|------------------------------------------------------------------------------------------|
| 0%- High-Z   | OCx pins in high impedance state after reset and whenever OCEN = 0.                      |
| 12.5%        | Detection of any SPF, which is a DFI for OC1-2-3 and not executing diagnostic (for OC).  |
| 25%          | Executing diagnostic (for OC).                                                           |
| 37.5%        | Detection of any SPF, which is a DFI for OC1-2-3 and when executing diagnostic (for OC). |
| 50%          | No fault, no diagnostic, no overcurrent.                                                 |
| 62.5%        | 1 OCxADC threshold violation is occurring.                                               |
| 75%          | 2 OCxADC threshold violations are occurring.                                             |
| 87.5%        | 3 OCxADC threshold violations are occurring.                                             |

## NON-OFFENDINGCASE

Figure 39. Example of Non-Offending Overcurrent Threshold Case

<!-- image -->

Figure 39 shows an example of a non-offending condition. The input signal has a baseline of 100 mV with two 0 mV low pulses that last 6.5% of the conversion window each. Effectively, the average signal becomes 0.87 × 100 mV + 0.13 × 0 mV resulting in 87 mV, which is below the programmed threshold of 90 mV indicated by the OCxTH line in the figure. The external RC filter further averages out signal peaks before they are sensed by the input pins, helping to deglitch noise or short spikes at the inputs.

## Controlling the Overcurrent Detection

To prevent an unintended activation of the OCA and OCB pins, the overcurrent configuration bits OC1TH to OC3TH, OCDGT, OCMODE, OCAX, OCBX, OCDP, OCOD, and OC1GC to OC3GC are latched with the rising edge of OCEN (transition of the bit from 0 to 1). Once the OCEN bit is set, the

## Overcurrent Threshold Considerations

The overcurrent ADCs (OCxADC) convert the average input signal over the conversion window length, which is about 62 µs. This equals the integral of the input signal waveform over the conversion window. As a result, short pulses higher than the threshold setting can result in an offending or a non-offending threshold comparison, which depends on the area of the waveform.

Figure 38. Example of Offending Overcurrent Threshold Case

<!-- image -->

Figure 38 shows an example of an offending condition. The input signal has a baseline of 90 mV with a pulse of 200 mVpp that lasts 10% of the conversion window. Effectively, the average signal becomes 0.9 × 90 mV + 0.1 × 200 mV resulting in 101 mV, which is above the programmed threshold of 100 mV shown by the OCxTH line in Figure 38.

## Data Sheet

overcurrent detection is activated and changes to the respective bit fields in the CFGB register do not affect the overcurrent engine. New configurations in CFGB are activated only with the next 0-to-1 transition on the OCEN bit.

When deactivating the overcurrent functionality through changing OCEN from 1 to 0, the overcurrent engine does not disable immediately. Instead, the deactivation only takes effect once the ongoing OCxADC conversions finish and the dependent registers (OCxR) and flags (OC1 to OC3L, OCAL, and OCBL) are updated. This leads to a minimum wait time requirement between the WRCFGA clearing the OCEN and any subsequent command that reads (RDFLAG), freezes (SNAP) or clears (CLRFLAG) the overcurrent alert flags or reactivates the overcurrent engine (WRCFGA with OCEN = 1).

The required wait time between WRCFGA with OCEN = 0 and WRCFGA with OCEN = 1 or CLRFLAG can be expressed as follows:

tOCEN,DLY1 &gt; max(tOCxADC) - t5 - (32 + N × 64) × tCLK

Where max(tOCxADC) is the maximum OCxADC conversion time, t5 is the minimum CS idle time, N is the number of devices written in the daisy-chain, and tCLK is the clock period of the (iso)SPI interface. If positive, the host must wait this time. If negative, no wait time is required as the length of the second WRCFGA or the CLRFLAG command ensures already a minimum time after OCEN clears.

The required wait time between WRCFGA with OCEN = 0 and RDFLAG or SNAP can be expressed as follows:

tOCEN,DLY2 &gt; max(tOCxADC) - t5 - 16 × tCLK

The wait time tOCEN,DLY2 is easily respected by proper command sequencing that avoids RDFLAG or SNAP directly after the WRCFGA.

The wait time tOCEN,DLY1 is typically required in the sequences for the Overcurrent Configuration Update and the Crash Signal Management.

## Overcurrent Configuration Update

The overcurrent detection is activated while the OCEN bit is set. To dynamically update the configuration from this state, at least three write commands are required:

1. Send WRCFGB command with new configuration.
2. Send WRCFGA command with OCEN = 0.
3. Wait for tOCEN,DLY1 (no wait if tOCEN,DLY1 ≤ 0).
4. Send WRCFGA command with OCEN = 1.

## Note:

- While it is recommended to minimize the time in which the overcurrent detection is inactive, the OCEN must be disabled for at least one OCxADC conversion time (tOCxADC), which is ensured by the wait time t OCEN,DLY1.

## ADBMS2950B

- It is recommended to set the bit OCDP in step 1 for the reduced interval of 3 OCxADC conversion cycles during which the OCx pins have high impedance.
- The deglitchers are reset at step 4. In case an overcurrent condition is present already before the reconfiguration but not yet long enough to ignite the pyrofuse, this leads to an increased latency equal to one deglitching time window.

The successful update of the new settings can be verified by issuing a RDFLAG command after the three-write-sequence, validate the command counter (CC) incremented by 3.

## Crash Signal Management

In case of a vehicle crash, it is typically required to do an emergency disconnect of the HV battery from the vehicle's HV network through firing the pyrofuse(s).

The BMS controller can command the ADBMS2950B devices to activate the OCA and OCB outputs by setting the thresholds of all three overcurrent ADCs to zero, or by inverting the OCA and OCB outputs through OCAX, OCBX, and setting the thresholds of all three overcurrent ADCs to the maximum. The deglitch setting OCDGT must be set to the minimum value and the OCDP must be activated for minimum latency (reduced interval) between the rising edge of OCEN and the assertion of the OCA, OCB output pins.

As described in the section Overcurrent Configuration Update, three write commands are required to trigger the ignition from the overcurrent function active state (OCEN = 1):

1. Send WRCFGB command to modify the OCxTH, OCAX, OCBX, OCDGT, and OCDP bits as required.
2. Send WRCFGA command to clear OCEN bit. This disables the overcurrent function and OCA, OCB pin output drivers shortly.
3. Wait for tOCEN,DLY1 (no wait if tOCEN,DLY1 ≤ 0).
4. Send WRCFGA command to set the OCEN bit again.

When the ADSBM2950 derivative is configured in isoSPI mode and the isoSPI is implemented in a redundant ring topology, the device responds to commands irrespective of whether they are received through isoSPI Port A or Port B. This allows the BMS controller to send the above sequence redundantly to Port A and Port B, thereby reducing he potential risk of command loss. Successful OCx assertion can be confirmed through reading back the OCAL and OCBL latch bits.

Most applications can also measure the voltage at the pyrofuse output directly to verify the successful ignition.

Note that whenever OCEN is cleared, the OCx pins have a high impedance state, which allows the pin state to be defined through external pull-up or pull-down resistors. Figure 40 shows the expected timing of the OCx assertion for the PWM1 mode with OCAX = 0, OCBX = 0, COD = 0, OCDGT = 0, OCDP = 1.

## ADBMS2950B

## Data Sheet

Figure 40. PWM1 OCx Assertion with Setting OCDGT = 0, OCDP = 1

<!-- image -->

Figure 40 shows the typical timings of the sequence WRCFGB, WRCFGA, and WRCFGA with two ICs in a daisy-chain showing the OCA, OCB outputs of both ICs.

Even at maximum (iso)SPI clock rate, the time tOCEN,DLY1 is negative in this scenario and thus the wait time between the two WRCFGA commands is not required.

To show the effect of the outputs being high impedance when OCEN is cleared, the IC1 pull-down resistors have been connected to the OCx pins and the IC2 has been populated with pull-up resistors.

The duration of the write sequence (tWR) depends on controller timings such as (iso)SPI clock rate and the number of ICs in a daisy-chain. The last WRCFGA generating the rising edge of OCEN starts the interval (tSI = 0.2 ms; nominally 3 to 4 OCxADC conversion cycles) after which the first asserted

## Table 62. OCxADC Command Codes

| Name   | Type   |   BIT 10 |   BIT 9 |   BIT 8 |   BIT 7 |   BIT 6 |   BIT 5 |   BIT 4 |   BIT 3 |   BIT 2 |   BIT 1 |   BIT 0 | Description                              |
|--------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|------------------------------------------|
| CLRO   | CMD    |        1 |       1 |       1 |       0 |       0 |       0 |       1 |       0 |       0 |       1 |       1 | Clears all OCxADC results.               |
| RDOC   | RD48   |        0 |       0 |       0 |       0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 | Read OCxADC results (ADBMS6830B: RDCVF). |
|        |        |        0 |       0 |       0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       1 | ADBMS6830B compatible code RDFCF.        |

## Table 63. Overcurrent Return Values

| Command   | BYTE 5   | BYTE 4   | BYTE 3   | BYTE 2   | BYTE 1   | BYTE 0   |
|-----------|----------|----------|----------|----------|----------|----------|
| RDOC      | OC3MIN   | OC3MAX   | RESERVED | OC3R     | OC2R     | OC1R     |

The CLRO command clears the OCxADC results OC1R to OC3R. The register values after clearing are shown in Table 64 from OC1R to OC3R, column CLRO. The bit OCAGD/CLRM

Table 64. Overcurrent Result Registers

of the CLRFLAG command clears the overcurrent min/max registers OC3MIN and OC3MAX. The register values after clearing are shown in Table 65 from OC3MAX to OC3MIN, column CLRM.

| Name   | Type    | Reset   | CLRO   | Description                                                          |
|--------|---------|---------|--------|----------------------------------------------------------------------|
| OC1R   | RO, FRZ | 0x7F    | 0x80   | Sign-extended 8-bit OC1ADC result register, voltage = OC1R × OC1LSB. |
| OC2R   | RO, FRZ | 0x7F    | 0x80   | Sign-extended 8-bit OC2ADC result register, voltage = OC2R × OC2LSB. |
| OC3R   | RO, FRZ | 0x7F    | 0x80   | Sign-extended 8-bit OC3ADC result register, voltage = OC3R × OC3LSB. |

Table 65. Overcurrent Min/Max Registers

| Name   | Type    | Reset   | CLRM   | Description                                                               |
|--------|---------|---------|--------|---------------------------------------------------------------------------|
| OC3MAX | RO, FRZ | 0x7F    | 0x80   | Sign-extended 8-bit OC3ADC conversion maximum, voltage =OC3MAX× OC3LSB.   |
| OC3MIN | RO, FRZ | 0x80    | 0x7F   | Sign-extended 8-bit OC3ADC conversion minimum, voltage = OC3MIN × OC3LSB. |

(75%) PWM period (tOC = 0.063 ms) starts. Assuming the external pyrofuse ignition circuitry implementing an off-chip deglitching only triggers after two consecutively asserted PWM periods, the total triggering time becomes:

tTOTAL = tWR + tSI + 2 × tOC

The timing plot also shows some more read commands like RDFLAG, RDSTAT that might be issued after the assertion. The RDFLAG must especially be issued to validate the OC1L to OC3L latches being set and the OCAGD, OCBGD bits not being set. Note that depending on when the RDFLAG is sent, it might not yet show the OCxL latches being set.

In the shown example, the RDFLAG is sent before the OCx outputs assert to the 75% PWM signal. In the example, another RDFLAG issued after the RDSTAT report the OCxL latches being set.

## Data Sheet

Registers and bits that are subject to the snap, unsnap protocol are marked with FRZ in the Type column of the register and bit descriptions. For more details on the operation of the snap, unsnap commands, see the Snapshot Commands section.

## CONFIGURATION AND STATUS

Configuration, status and flag register read, and write and clear commands are listed in Table 66.

Table 66. Configuration and Status Command Codes

| Name    | Type   |   BIT 10 |   BIT 9 |   BIT 8 |   BIT 7 | BIT 6   |   BIT 5 |   BIT 4 |   BIT 3 |   BIT 2 |   BIT 1 |   BIT 0 | Description                                                   |
|---------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------------------------------------------------------------|
| WRCFGA  | WR48   |        0 |       0 |       0 |       0 | 0       |       0 |       0 |       0 |       0 |       0 |       1 | Write CFGA register (ADBMS6830B: WRCFGA).                     |
| RDCFGA  | RD48   |        0 |       0 |       0 |       0 | 0       |       0 |       0 |       0 |       0 |       1 |       0 | Read CFGA register (ADBMS6830B: RDCFGA).                      |
| WRCFGB  | WR48   |        0 |       0 |       0 |       0 | 0       |       1 |       0 |       0 |       1 |       0 |       0 | Write CFGB register (ADBMS6830B: WRCFGB).                     |
| RDCFGB  | RD48   |        0 |       0 |       0 |       0 | 0       |       1 |       0 |       0 |       1 |       1 |       0 | Read CFGB register (ADBMS6830B: RDCFGB).                      |
| RDFLAG  | RD48   |        0 |       0 |       0 |       0 | ERR     |       1 |       1 |       0 |       0 |       1 |       0 | Read FLAG register (ADBMS6830B: RDSTATC).                     |
| CLRFLAG | WR48   |        1 |       1 |       1 |       0 | 0       |       0 |       1 |       0 |       1 |       1 |       1 | Write 1 to Clear Flag register Latches (ADBMS6830B: CLRFLAG). |
| RDSTAT  | RD48   |        0 |       0 |       0 |       0 | 0       |       1 |       1 |       0 |       1 |       0 |       0 | Read STAT register (ADBMS6830B: RDSTATE).                     |
| RDALLC  | RD160  |        0 |       0 |       0 |       0 | 0       |       0 |       1 |       0 |       0 |       0 |       0 | Read All configuration, flag and status registers.            |
| RDSID   | RD48   |        0 |       0 |       0 |       0 | 0       |       1 |       0 |       1 |       1 |       0 |       0 | Read SID register (ADBMS6830B: RDSID).                        |

RDALL commands are not available on the isoSPI daisy-chains.

For more details, see the Communication Protocol section.

Table 67. RDFLAG Parameter Bits

| Name   | Type   | Value   | Description                                        |
|--------|--------|---------|----------------------------------------------------|
| ERR    | PAR    |         | SPIFLT Diagnostic Enable.                          |
|        |        | 0       | RDFLAG readout without artificial error injection. |
|        |        | 1       | RDFLAG readout with error injection.               |

Table 68 lists special control command codes used to reset the IC (SRST), reset the command counter (RSTCC) and to control the freeze mechanism that allows coherent data reading from

Table 68. Other Control Command Codes

single ICs and multiple ICs in a daisy-chain (for more details, see the Snapshot Commands section).

| Name   | Type   |   BIT 10 |   BIT 9 |   BIT 8 |   BIT 7 |   BIT 6 |   BIT 5 |   BIT 4 |   BIT 3 |   BIT 2 |   BIT 1 |   BIT 0 | Description                                              |
|--------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|----------------------------------------------------------|
| SRST   | CMD    |        0 |       0 |       0 |       0 |       0 |       1 |       0 |       0 |       1 |       1 |       1 | Software reset, including CCNT reset (ADBMS6830B: SRST). |
| RSTCC  | CMD    |        0 |       0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       1 |       0 | Reset command counter (ADBMS6830B: RSTCC).               |
| SNAP   | CMD    |        0 |       0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       0 |       1 | Freeze result registers (ADBMS6830B: SNAP).              |
| UNSNAP | CMD    |        0 |       0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       1 |       1 | Unfreeze result registers (ADBMS6830B: UNSNAP).          |

The ADBMS2950B features two 48-bit registers for static configuration. They are written by the WRCFGA and WRCFGB commands and read by the RDCFGA and RDCFGB

Table 69. CFGA Register Map

commands, respectively. The configuration registers CFGA and CFGB are implemented redundantly. Bit failure triggers SPIFLT when SPI reads the registers back. Writes to these register groups increment the command counter.

|   BYTE | BIT 7   | BIT 6      | BIT 5      | BIT 4   | BIT 3       | BIT 2       | BIT 1       | BIT 0       |
|--------|---------|------------|------------|---------|-------------|-------------|-------------|-------------|
|      0 | OCEN    | VS5        | VS4        | VS3     | VS2[1:0]    | VS2[1:0]    | VS1[1:0]    | VS1[1:0]    |
|      1 | INJTM   | INJECC     | 0          | INJTS   | INJMON[1:0] | INJMON[1:0] | INJOSC[1:0] | INJOSC[1:0] |
|      2 | SOAK    | SOAK       | SOAK       | VS10    | VS9         | VS8         | VS7         | VS6         |
|      3 | 0       | GPO6C[1:0] | GPO6C[1:0] | GPO5C   | GPO4C       | GPO3C       | GPO2C       | GPO1C       |
|      4 | SPI3W   | GPIO1FE    | GPO6OD     | GPO5OD  | GPO4OD      | GPO3OD      | GPO2OD      | GPO1OD      |

## ADBMS2950B

Fault and status information are read from the FLAG register through RDFLAG. The CLRFLAG command is used to reset individual bits in the FLAG register. Such as any write command, the CLRFLAG command requires the system to send six data bytes followed by the PEC per device. Any bit of the data that is set (1) clears the related flag. The bits that are cleared (0) do not affect the related flags.

|   BYTE | BIT 7   | BIT 6   | BIT 5   | BIT 4   | BIT 3   | BIT 2     | BIT 1     | BIT 0     |
|--------|---------|---------|---------|---------|---------|-----------|-----------|-----------|
|      5 | VB2MUX  | VB1MUX  | SNAPST  | REFUP   | COMMBK  | ACCI[2:0] | ACCI[2:0] | ACCI[2:0] |

## Table 70. CFGA Bit Description

| Name   | Type   | Reset   | Value                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|--------|--------|---------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OCEN   | RW     | 0       | 0 1                               | OCxADC Enable. OC1ADC, OC2ADC, OC3ADC disabled. OC1ADC, OC2ADC, OC3ADC enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| VB1MUX | RW     | 0       | 0                                 | VB1MUX Input Multiplexer Select. The VB1ADC latches the value of this bit upon receiving an ADI1 command. Achange to this bit must be followed by a new ADI1 command for the ADC behavior to update. VB1ADC measures VBAT1 vs. SGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| VB2MUX | RW     | 0       | 1 0                               | VB1ADC measures VBAT1 vs. VBAT2. VB2MUX Input Multiplexer Select. The VB2ADC latches the value of this bit upon receiving an ADI1 RD = 1 or ADI2 command. A change to this bit must be followed by a new command for the ADC behavior to update. VB2ADC measures VBAT2 vs. SGND.                                                                                                                                                                                                                                                                                                                                                                                                             |
| ACCI   | RW     | 001     | 1 000 001 010 011 100 101 110 111 | VB2ADC measures VBAT2 vs. VBAT1. Double polarity inversion due to negative LSB of VB2ADC. IxACC and VBxACC (I1ACC, I2ACC, VB1ACC, and VB2ACC) register accumulation control. The IxACC, VBxACC registers are updated every ACCN conversions of IxADC, VBxADC with the sum of ACCN samples; ACCN = 4 × (ACCI + 1). New configuration becomes active with the next ADI1 or ADI2 command. IxACC, VBxACC accumulate 4 samples. IxACC, VBxACC accumulate 8 samples. IxACC, VBxACC accumulate 12 samples. IxACC, VBxACC accumulate 16 samples. IxACC, VBxACC accumulate 20 samples. IxACC, VBxACC accumulate 24 samples. IxACC, VBxACC accumulate 28 samples. IxACC, VBxACC accumulate 32 samples. |
| VS2    | RW     | 00      | 01 10 11 00 01 10                 | V1ADC and V2ADC measure V1 vs. VREF1P25. V1ADC and V2ADC measure V1 vs. V3. V1ADC and V2ADC measure V1 vs. V4. Reference voltage for V2 measurement. V1ADC and V2ADC measure V2 vs. SGND. V1ADC and V2ADC measure V2 vs. VREF1P25. V1ADC and V2ADC measure V2 vs. V3.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| VS3    | RW     | 0       | 0                                 | Reference voltage for V3 measurement. V1ADC and V2ADC measure V3 vs. SGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| VS4    | RW     | 0       | 0 1                               | Reference voltage for V4 measurement. V1ADC and V2ADC measure V4 vs. SGND. V1ADC and V2ADC measure V4 vs. VREF1P25.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| VS5    | RW     | 0       | 0 1                               | Reference voltage for V5 measurement. V1ADC and V2ADC measure V5 vs. SGND. V1ADC and V2ADC measure V5 vs. VREF1P25.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| VS6    | RW     | 0       | 0 1                               | Reference voltage for V6 measurement. V1ADC and V2ADC measure V6 vs. SGND. V1ADC and V2ADC measure V6 vs. VREF1P25.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| VS7    | RW     | 0       | 0 1                               | Reference voltage for V7 measurement. V1ADC measures V7 vs. SGND. V1ADC measures V7 vs. VREF1P25.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| VS8    | RW     | 0       | 0 1                               | Reference voltage for V8 measurement. V1ADC measures V8 vs. SGND. V1ADC measures V8 vs. VREF1P25.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| VS9    | RW     | 0       | 0 1                               | Reference voltage for V9 measurement. V2ADC measures V9 vs. SGND. V2ADC measures V9 vs. VREF1P25.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| VS10   | RW     | 0       |                                   | Reference voltage for V10 measurement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|        |        |         | 0 1                               | V2ADC measures V10 vs. SGND. V2ADC measures V10 vs. VREF1P25.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| SOAK   | RW     | 000     | 000                               | Delays response of V1ADC and V2ADC to ADV command and further multi-measurements. Soak time disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Data Sheet

## ADBMS2950B

| Name    | Type   | Reset   | Value    | Description                                                                                                                                                                                                                                       |
|---------|--------|---------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GPO1OD  | RW     | 1       | 0 1      | GPO1 Open-Drain Mode Enable. GPO1 pushed to VDD (GPO1C = 1) or pulled to GND (GPO1C = 0). GPO1 high-impedance (GPO1C = 1) or pulled to GND (GPO1C = 0).                                                                                           |
| GPO2OD  | RW     | 1       | 0        | GPO2 Open-Drain Mode Enable. GPO2 pushed to VDD (GPO2C = 1) or pulled to GND (GPO2C = 0).                                                                                                                                                         |
| GPO3OD  | RW     | 1       | 0 1      | GPO3 Open-Drain Mode Enable. GPO3 pushed to VDD (GPO3C = 1) or pulled to GND (GPO3C = 0). GPO3 high-impedance (GPO3C = 1) or pulled to GND (GPO3C = 0).                                                                                           |
| GPO4OD  | RW     | 1       | 0 1      | GPO4 Open-Drain Mode Enable. GPO4 pushed to VDD (GPO4C = 1) or pulled to GND (GPO4C = 0). GPO4 high-impedance (GPO4C = 1) or pulled to GND (GPO4C = 0).                                                                                           |
| GPO5OD  | RW     | 1       | 0 1      | GPO5 Open-Drain Mode Enable. GPO5 pushed to VDD (GPO5C = 1) or pulled to GND (GPO5C = 0). GPO5 high-impedance (GPO5C = 1) or pulled to GND (GPO5C = 0).                                                                                           |
| GPO6OD  | RW     | 1       | 0 1      | GPO6 Open-Drain Mode Enable. GPO6 pushed to VDD (GPO6C = 0b01) or pulled to GND (GPO6C = 0b00). GPO6 high-impedance (GPO6C = 0b01) or pulled to GND(GPO6C = 0b00).                                                                                |
| GPO1C   | RW     | 1       | 0 1      | GPO1 Output State Control. GPO1 pulled low to GND. GPO1 pushed to VDD (GPO1OD = 0) or put to high-impedance state (GPO1OD = 1).                                                                                                                   |
| GPO2C   | RW     | 1       | 0 1      | GPO2 Output State Control. GPO2 pulled low to GND. GPO2 pushed to VDD (GPO2OD = 0) or put to high-impedance state (GPO2OD = 1).                                                                                                                   |
| GPO3C   | RW     | 1       | 0 1      | GPO3 Output State Control. GPO3 pulled low to GND. GPO3 pushed to VDD (GPO3OD = 0) or put to high-impedance state (GPO3OD = 1).                                                                                                                   |
| GPO4C   | RW     | 1       | 0        | GPO4 Output State Control. GPO4 pulled low to GND.                                                                                                                                                                                                |
| GPO5C   | RW     | 1       | 0 1      | GPO5 Output State Control. GPO5 pulled low to GND. GPO5 pushed to VDD (GPO5OD = 0) or put to high-impedance state (GPO5OD = 1).                                                                                                                   |
| GPO6C   | RW     | 01      | 00 01 10 | GPO6 Output State Control. GPO6 pulled low to GND. GPO6 pushed to VDD (GPO6OD = 0) or put to high-impedance state (GPO6OD = 1). GPO6 outputs 200 kHz (push-pull for GPO6OD = 0 and open-drain for GPO6OD = 1); readback disabled. Reserved.       |
| GPIO1FE | RW     | 0       | 11 0 1   | GPIO1 Fault Output Enable. GPIO1 controlled by GPIO1C or COMMregister in case SPI controller usage. GPIO1 outputs fault status.                                                                                                                   |
| SPI3W   | RW     | 0       | 0 1      | SPI Controller Mode Select. 4-wire: SDIM andSDOMon separate pins. 3-wire: SDIM andSDOMon the same pin.                                                                                                                                            |
| COMMBK  | RW     | 0       | 0 1      | isoSPI Communication Break. Communication propagates from the peripheral to the controller port (from Port A to Port B and vice versa depending on where communication is initiated). No transmission from the peripheral to the controller port. |
| REFUP   | RO     | 0       | 0 1      | Indicates Powered Voltage References. VREF1 and VREF2 are not (yet) powered. VREF1 and VREF2 are powered.                                                                                                                                         |
| SNAPST  | RO     | 0       | 0 1      | SNAP Status Indicator. SNAP inactive. Result registers progress to SPI. SNAP active. Result registers frozen until next UNSNAP command.                                                                                                           |
| INJTS   | RW     | 0 1     | 0 1      | Thermal Shutdown Diagnostic Enable. Normal operation. Forces THSD flag, see note 1 .                                                                                                                                                              |
| INJTM   | RW     | 0       | 0        | Test mode Indicator Diagnostic Enable. Normal operation.                                                                                                                                                                                          |

## ADBMS2950B

| Name   | Type   | Reset   | Value   | Description                                                                           |
|--------|--------|---------|---------|---------------------------------------------------------------------------------------|
|        |        |         | 1       | ForcesTMODE flag.                                                                     |
| INJECC | RW     | 0       |         | ECC Diagnostic Enable.                                                                |
|        |        |         | 0       | Normal operation.                                                                     |
|        |        |         | 1       | Inject bit error and trigger ECC logic to set SED1, SED2, MED1, and MED2.             |
| INJOSC | RW     | 00      |         | Clock Monitor Diagnostic Enable.                                                      |
|        |        |         | 00      | Regular clock applied to clock monitor. No-clock detector in regular mode.            |
|        |        |         | 01      | Faster clock applied to clock monitor. No-clock detector in regular mode.             |
|        |        |         | 10      | Slower clock applied to clock monitor. No-clock detector checks for clock stuck high. |
|        |        |         | 11      | Regular clock applied to clock monitor. No-clock detector checks for clock stuck low. |
| INJMON | RW     | 00      |         | Supply Monitor and Deglitcher Diagnostic Enable.                                      |
|        |        |         | 00      | Supply monitors operate normally. Deglitcher operates normally.                       |
|        |        |         | 01      | Supply monitors operate normally. Deglitcher mismatched forced to set OCMMflag.       |
|        |        |         | 10      | Force undervoltage to trigger VDDUV, VREGUV, and VDIGUV checks.                       |
|        |        |         | 11      | Force overvoltage to trigger VREGOV, VDIGOV, VDE, and VDEL checks.                    |

## Note:

1 The host controller must keep log when setting the INJTS bit for requesting the THSD bit to be asserted. After successfully reading THSD, the INJTS bit must be cleared through

## Table 71. CFGB Register Map

WRCFGA and the THSD bit must be cleared through CLRFLAG. If a SRST is issued before clearing THSD, the FLAG register reports RESET and THSD bits being set, same as if there is a thermal shutdown. Setting INJTS requests the THSD to be asserted, but by itself does not trigger an internal reset.

|   BYTE | BIT 7   | BIT 6      | BIT 5       | BIT 4       | BIT 3      | BIT 2        | BIT 1        | BIT 0        |
|--------|---------|------------|-------------|-------------|------------|--------------|--------------|--------------|
|      0 | 0       | OC1TH[6:0] | OC1TH[6:0]  | OC1TH[6:0]  | OC1TH[6:0] | OC1TH[6:0]   | OC1TH[6:0]   | OC1TH[6:0]   |
|      1 | 0       | OC2TH[6:0] | OC2TH[6:0]  | OC2TH[6:0]  | OC2TH[6:0] | OC2TH[6:0]   | OC2TH[6:0]   | OC2TH[6:0]   |
|      2 | 0       | OC3TH[6:0] | OC3TH[6:0]  | OC3TH[6:0]  | OC3TH[6:0] | OC3TH[6:0]   | OC3TH[6:0]   | OC3TH[6:0]   |
|      3 | 0       | 0          | 0           | 0           | OCDP       | 0            | OCDGT[1:0]   | OCDGT[1:0]   |
|      4 | OCBX    | OCAX       | OCMODE[1:0] | OCMODE[1:0] | OC3GC      | OC2GC        | OC1GC        | OCOD         |
|      5 | GPIO4C  | GPIO3C     | GPIO2C      | GPIO1C      | GPIO2EOC   | DIAGSEL[2:0] | DIAGSEL[2:0] | DIAGSEL[2:0] |

Note: Any bits listed with 0 must be written with 0 during write commands.

## Table 72. CFGB Bit Description

| Name   | Type   |   Reset | Value                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
|--------|--------|---------|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OC1GC  | RW     |       0 | 0 1                                                 | OC1ADC Analog Input Gain Control. OC1ADC Gain = 1 (OC1LSB = 5 mV).                                                                                                                                                                                                                                                                                                                                                                    |
| OC2GC  | RW     |       0 | 0 1                                                 | OC2ADC Analog Input Gain Control. OC2ADC Gain = 1 (OC2LSB = 5 mV). OC2ADC Gain = 2 (OC2LSB = 2.5 mV).                                                                                                                                                                                                                                                                                                                                 |
| OC3GC  | RW     |       0 | 0 1                                                 | OC3ADC Analog Input Gain Control. OC3ADC Gain = 1 (OC3LSB = 5 mV). OC3ADC Gain = 2 (OC3LSB = 2.5                                                                                                                                                                                                                                                                                                                                      |
| OC1TH  | RW     | 0000000 | 0000000 0000001 0000010 0000011 ... 0111111 1xxxxxx | mV). OC1ADC Overcurrent Threshold. Magnitude of signed 7-bit result depends on gain setting. OC1 output asserted irrespective of measured value. OC1 output asserted when &#124;OC1R&#124; ≥ 1. OC1 output asserted when &#124;OC1R&#124; ≥ 2. OC1 output asserted when &#124;OC1R&#124; ≥ 3. ... OC1 output asserted when &#124;OC1R&#124; ≥ 63. OC1 output is deasserted. CLRO command clears the OC1R result register to 10000000. |
| OC2TH  | RW     | 0000000 | 0000000 0000001 0000010 0000011 ... 0111111 1xxxxxx | OC2ADC Overcurrent Threshold. Magnitude of signed 7-bit result depends on gain setting. OC2 output asserted irrespective of measured value. OC2 output asserted when &#124;OC2R&#124; ≥ 1. OC2 output asserted when &#124;OC2R&#124; ≥ 2. OC2 output asserted when &#124;OC2R&#124; ≥ 3. ... OC2 output asserted when &#124;OC2R&#124; ≥ 63. OC2 output is deasserted. CLRO command clears the OC2R result register to 10000000.      |
| OC3TH  | RW     | 0000000 |                                                     | OC3ADC Overcurrent Threshold. Magnitude of signed 7-bit result depends on gain setting.                                                                                                                                                                                                                                                                                                                                               |

## Data Sheet

## ADBMS2950B

| Name          | Type   |   Reset | Value                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------|--------|---------|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OCDGT         | RW     |      00 | 00 01 10 11             | OC1ADC, OC2ADC, OC3ADC Overcurrent Deglitch Time Threshold. 1oo1. Deglitching disabled. OC event progresses directly to the output. No extra latency. 2oo3.OC event progresses when two out of three subsequent samples are above threshold. 4oo8.OC event progresses when four out of eight subsequent samples are above threshold. 7oo8.OC event progresses when seven out of eight subsequent samples are above threshold.                                                                                                                                                                                                                                                             |
| OCMODE        | RW     |      00 | 00 01 10 11             | OCAand OCBOutput Mode Control. OCAand OCBoutputs are disabled and in high-impedance state. OCAand OCBoutputs are enabled in PWM1mode. OCAand OCBoutputs are enabled in PWM2mode. OCAand OCBoutputs are enabled in static mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| OCAX          | RW     |       0 | 0 1                     | OCAOutput XOR Inverter. OCAOutput is not inverted. Active high. PWMperiod starts with high pulse. OCAOutput is inverted. Active low. PWMperiod starts with low pulse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| OCBX          | RW     |       0 | 0 1                     | OCBOutput XOR Inverter. OCBOutput is not inverted. Active high. PWMperiod starts with high pulse. OCBOutput is inverted. Active low. PWMperiod starts with low pulse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| OCOD          | RW     |       1 | 0 1                     | OCAand OCBOutput Open drain Enable. OCODis ignored when OCMODEis set to 0b00. OCAand OCBoperate in push-pull mode and are pushed to VREG for logic level 1 or pulled to GNDfor logic level 0. OCAand OCBoperate in open-drain mode and are high-impedance for logic level 1 or pulled to GNDfor logic level 0. External pull-up resistor required in this mode.                                                                                                                                                                                                                                                                                                                           |
| OCDP          | RW     |       0 | 0 1                     | OCAand OCBOutput Pin reduced safety interval from OCEN rising edge to OCAand OCBoutput drivers activation. Normal safety interval of 10 OCxADC conversion cycles. Reduced safety interval of 3 OCxADC conversion cycles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DIAGSEL       | RW     |     000 | 000 001 010 011 100 101 | IxADC and VBxADC Diagnostic Select for ADI1 and ADI2 diagnostic measurement commands. No current injection. IxADC convert regular inputs (IxA vs. IxB). VBxADC convert regular inputs (VBATx pins depending on VBxMUX setting). Current injected into IxA, VBATx pins. IxADC convert regular inputs. VBxADC convert regular inputs. Current injected into IxB, SGND pins. IxADC convert regular inputs. VBxADC convert regular inputs. Current injected into SxA pins. IxADC convert SxA vs. IxA. VBxADC convert regular inputs. No current injection. IxADC convert SxA vs. IxA. VBxADC convert SGND vs. SGND (offset measurement). No current injection. IxADC and VBxADC convert VDIV. |
| GPIO1C        | RW     |       1 | 0                       | GPIO1 Output Control. GPIO1 pulls down to GND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|               | RW     |       1 | 0                       | GPIO2 Output Control. GPIO2 pulls down to GND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| GPIO2C GPIO3C | RW     |       1 | 1 0                     | GPIO2 output driver disabled, unless overruled by COMMregister. GPIO3 Output Control. GPIO3 pulls down to GND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| GPIO4C        | RW     |       1 |                         | GPIO4 Output Control. GPIO4 pulls down to GND. GPIO4 output driver disabled, unless overruled by COMMregister.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| GPIO2EOC      | RW     |       0 | 0 1                     | GPIO2 Toggle on OC1ADC End of Conversion Enable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

| Name   | Type   | Reset   |   Value | Description                                   |
|--------|--------|---------|---------|-----------------------------------------------|
|        |        |         |       0 | GPIO2 controlled by GPIO2C or COMMregister.   |
|        |        |         |       1 | GPIO2 toggles on end of conversion of OC1ADC. |

The VDIV measurement follows the nominal value of VREF1 (which varies between different ICs) according to the specified VREF1 to VDIV ratio listed in the Table 7.

Table 73. FLAG Register Map

The FLAG register stores fault and status information and is read by the RDFLAG command. The CLRFLAG command is used to reset individual bits in the FLAG register. The data sent with the CLRFLAG command defines the flag bits to be cleared (1) and the bits that are not altered (0).

|   BYTE | BIT 7        | BIT 6        | BIT 5        | BIT 4         | BIT 3         | BIT 2         | BIT 1         | BIT 0         |
|--------|--------------|--------------|--------------|---------------|---------------|---------------|---------------|---------------|
|      0 | RESERVED     | RESERVED     | VDRUV        | OCMM 2        | OC3L          | OCAGD/CLRM 2  | OCAL          | OC1L          |
|      1 | RESERVED     | RESERVED     | VDDUV 2      | NOCLK 2       | REFFLT 2      | OCBGD 2       | OCBL          | OC2L          |
|      2 | I2CNT[2:0] 1 | I2CNT[2:0] 1 | I2CNT[2:0] 1 | I1CNT[10:6] 1 | I1CNT[10:6] 1 | I1CNT[10:6] 1 | I1CNT[10:6] 1 | I1CNT[10:6] 1 |
|      3 | I1CNT[5:0] 1 | I1CNT[5:0] 1 | I1CNT[5:0] 1 | I1CNT[5:0] 1  | I1CNT[5:0] 1  | I1CNT[5:0] 1  | I1PHA[1:0] 1  | I1PHA[1:0] 1  |
|      4 | VREGOV 2     | VREGUV 2     | VDIGOV 2     | VDIGUV 2      | SED1          | MED1 2        | SED2          | MED2 2        |
|      5 | VDEL         | VDE 2        | 0            | SPIFLT        | RESET 3       | THSD 3, 4     | TMODE 2       | OSCFLT 2      |

## Notes:

1 Bits are read-only and are not controlled by the CLRFLAG command.

2 Bits contribute to FAULT output on OCA, OCB and, if GPIO1FE is set, also on GPIO1. If any of those bits is set, the output pins are set to the fault state.

- 3 Related events cause OCA, OCB, GPIOx, and GPOx to enter the high-impedance mode.

Table 74. FLAG Bit Description

| Name       | Type      | Reset   | Value   | Description                                                                                                       |
|------------|-----------|---------|---------|-------------------------------------------------------------------------------------------------------------------|
| OC1L       | RW1C, FRZ | 1       |         | OC1ADC Overcurrent Latch.                                                                                         |
|            |           |         | 0       | No OC1 threshold event passed deglitching.                                                                        |
|            |           |         | 1       | OC1 threshold event detected and passed deglitching.                                                              |
| OC2L       | RW1C, FRZ | 1       |         | OC2ADC Overcurrent Latch.                                                                                         |
|            |           |         | 0       | No OC2 threshold event passed deglitching.                                                                        |
|            |           |         | 1       | OC2 threshold event detected and passed deglitching.                                                              |
| OC3L       | RW1C, FRZ | 1       |         | OC3ADC Overcurrent Latch.                                                                                         |
|            |           |         | 0       | No OC3 threshold event passed deglitching.                                                                        |
|            |           |         | 1       | OC3 threshold event detected and passed deglitching.                                                              |
| REFFLT     | RW1C,     | 1       |         | OC Fault Latch.                                                                                                   |
|            |           |         | 0       | No OC Fault.                                                                                                      |
|            |           |         | 1       | OC Fault.                                                                                                         |
| OCAL       | RW1C, FRZ | 1       |         | Majority Voter A Overcurrent Latch.                                                                               |
|            |           |         | 0       | No OC event passed majority Voter A.                                                                              |
| OCBL       | RW1C, FRZ | 1       |         | Majority Voter B Overcurrent Latch.                                                                               |
|            |           |         | 0       | No OC event passed majority Voter B.                                                                              |
|            |           |         | 1       | OC event detected that passed majority Voter B.                                                                   |
| OCAGD/CLRM | RW1C, FRZ | 1       |         | OCA Gate/Drain Mismatch Latch. Clear OC3 Min/Max.                                                                 |
|            |           |         | 0       | OCAoutput reads back as expected.                                                                                 |
|            |           |         | 1       | Detected unexpected readback from OCA output while OCEN = Clear operation also clears OC3MIN and OC3MAXregisters. |
| OCBGD      | RW1C, FRZ | 1       |         | OCB Gate/Drain Mismatch Latch.                                                                                    |
|            |           |         | 0       | OCBoutput reads back as expected.                                                                                 |

For best independence, the overcurrent-related bits are not perfectly synchronized with each other and are subject to slightly different propagation delays. Not all bits in the FLAG register indicate faults. Fault bits are sticky. They need to be cleared with the CLRFLAG command after the pending fault condition has been removed.

## Data Sheet

## ADBMS2950B

| Name   | Type    | Reset   | Value   | Description                                                                                                                                                                                          |
|--------|---------|---------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OCMM   | RW1C    | 1       | 1 0     | Detected unexpected readback from OCB output while OCEN = 1. OC Configuration Mismatch Latch. No internal mismatch detected. Mismatch in redundant shadow copies of OCEN, OCTSEL, or OCDGT detected. |
| I1PHA  | RO, FRZ | 00      | 1       | 2-bit I1ADC/VB1ADC Phase Counter with four increments per sample. Resets with ADI1 commands. Rolls over.                                                                                             |
| I1CNT  | RO, FRZ | 0x000   |         | 11-bit I1ADC/VB1ADC Conversion Counter, when in continuous mode. Resets with ADI1 commands. Rolls over. I1CNT and I1PHA can be treated as a single counter I1CNTPHA[12:0] = [I1CNT, I1PHA].          |
| I2CNT  | RO, FRZ | 000     |         | 3-bit I2ADC/VB2ADC Conversion Counter, when in continuous mode. Resets with ADI1 while RD = 1 and ADI2 commands. Rolls over.                                                                         |
| SED1   | RW1C    | 1       | 0 1     | NVM1 1-bit ECC Latch. No error detected in NVM1 and shadow registers. Single bit error detected and autocorrected inNVM1 shadow registers.                                                           |
| SED2   | RW1C    | 1       | 0 1     | NVM2 1-bit ECC Latch. No error detected in NVM2 and shadow registers. Single bit error detected and autocorrected inNVM2 shadow registers.                                                           |
| MED1   | RW1C    | 1       | 0 1     | NVM1 multi-bit ECC Latch. No uncorrectable error detected in NVM1 and shadow registers. Uncorrectable multi-bit error detected in NVM1 or shadow registers.                                          |
| MED2   | RW1C    | 1       | 0 1     | NVM2 multi-bit ECC Latch. No uncorrectable error detected in NVM2 and shadow registers. Uncorrectable multi-bit error detected in NVM2 or shadow registers.                                          |
| VREGUV | RW1C    | 1       | 0 1     | VREG Undervoltage Latch. No undervoltage detected on VREG supply. Undervoltage event on VREG supply detected.                                                                                        |
| VREGOV | RW1C    | 1       | 0 1     | VREG Overvoltage Latch. No overvoltage detected on internal VREG supply. Overvoltage event on internal VREG supply detected.                                                                         |
| VDDUV  | RW1C    | 1       | 0       | VDD Undervoltage Latch. No undervoltage detected on VDD supply.                                                                                                                                      |
| VDRUV  | RW1C    | 1       | 0 1     | Drive Undervoltage Latch (VDD supply for DRIVE output). No DRIVE undervoltage detected on VDD supply. DRIVE undervoltage event on VDD supply detected.                                               |
| VDIGUV | RW1C    | 1       | 0 1     | VDIG Undervoltage Latch. No undervoltage detected on internal VDIG supply. Undervoltage event on internal VDIG supply detected.                                                                      |
| VDIGOV | RW1C    | 1       | 0 1     | VDIG Overvoltage Latch. No overvoltage detected on internal VDIG supply. Overvoltage event on internal VDIG supply detected.                                                                         |
| VDE    | RW1C    | 1       | 0 1     | Voltage Domain Event Latch. No mismatch on internal supply domains detected. Mismatch on internal VREG or GNDdomains detected.                                                                       |
| VDEL   | RW1C    | 1       | 0 1     | Voltage Domain Diagnostic Latch. See INJMON bit field. Not all domain comparators report mismatch. All VREG and GNDdomain comparators report mismatch.                                               |
| OSCFLT | RW1C    | 1       | 0 1     | Oscillator Frequency Fault Latch. No OSC1 vs. OSC2 frequency comparison fault detected. OSC1 vs. OSC2 frequency comparison fault detected.                                                           |
| NOCLK  | RW1C    | 1       | 0 1     | No Clock Fault Latch. No OSC1 stuck event detected. OSC1 stuck event detected.                                                                                                                       |
| SPIFLT | RW1C    | 1       | 0       | SPI Read Fault Latch. No SPI SDO mismatch detected.                                                                                                                                                  |
| TMODE  | RW1C    | 1       | 0 1     | Test mode Indicator Latch. No activation of factory test mode detected. Activation of factory test mode detected.                                                                                    |
| RESET  | RW1C    | 1       | 0       | Reset Indicator Latch. No reset event detected since last clear.                                                                                                                                     |
| THSD   | RW1C    | 0 1     | 0 1     | Thermal Shutdown Indicator Latch. No thermal shutdown detected. Thermal shutdown detected, not cleared by SRST, see note 1 .                                                                         |

## ADBMS2950B

Note:

1 The thermal shutdown indicator bit THSD is not cleared by the SRST command, but only after a power-on-reset or through the CLRFLAG command.

Registers and bits that are subject to the SNAP , UNSNAP protocol are marked with FRZ in the Type column of the register and bit descriptions. For more details on the operation of the snap, unsnap commands, see the Snapshot Commands section.

## Table 75. STAT Register Map

## Data Sheet

Both the non-volatile memories: NVM1 and NVM2 are protected through ECC bits. Faults are reported into the SED1, MED1, SED2, and MED2 bits. After power-up or reset, the non-volatile memories are read and stored into volatile registers that are implemented redundantly.

The STAT register contains status bits of read-only type. It can be read with the RDSTAT command.

|   BYTE | BIT 7      | BIT 6      | BIT 5      | BIT 4      | BIT 3    | BIT 2    | BIT 1    | BIT 0    |
|--------|------------|------------|------------|------------|----------|----------|----------|----------|
|      0 | 000000     | 000000     | 000000     | 000000     | 000000   | 000000   | OCBP     | OCAP     |
|      1 | I2CAL      | I1CAL      | 0000       | 0000       | 0000     | 0000     | DER[1:0] | DER[1:0] |
|      2 | 00000000   | 00000000   | 00000000   | 00000000   | 00000000 | 00000000 | 00000000 | 00000000 |
|      3 | GPO6H      | GPO5H      | GPO4H      | GPO3H      | GPO2H    | GPO1H    | GPO6L    | GPO5L    |
|      4 | GPO4L      | GPO3L      | GPO2L      | GPO1L      | GPIO4L   | GPIO3L   | GPIO2L   | GPIO1L   |
|      5 | REVID[3:0] | REVID[3:0] | REVID[3:0] | REVID[3:0] | 0000     | 0000     | 0000     | 0000     |

The RDSID command is used to read the SID register.

## Table 76. SID Register Map

|   BYTE | BIT 7      | BIT 6                 | BIT 5                 | BIT 4                 | BIT 3                 | BIT 2                 | BIT 1                 | BIT 0      |
|--------|------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------------------|------------|
|      0 | SID[7:0]   | SID[7:0]              | SID[7:0]              | SID[7:0]              | SID[7:0]              | SID[7:0]              | SID[7:0]              | SID[7:0]   |
|      1 | SID[15:8]  | SID[15:8]             | SID[15:8]             | SID[15:8]             | SID[15:8]             | SID[15:8]             | SID[15:8]             | SID[15:8]  |
|      2 | SID[23:16] | SID[23:16]            | SID[23:16]            | SID[23:16]            | SID[23:16]            | SID[23:16]            | SID[23:16]            | SID[23:16] |
|      3 | SID[31:24] | SID[31:24]            | SID[31:24]            | SID[31:24]            | SID[31:24]            | SID[31:24]            | SID[31:24]            | SID[31:24] |
|      4 | SID[39:32] | SID[39:32]            | SID[39:32]            | SID[39:32]            | SID[39:32]            | SID[39:32]            | SID[39:32]            | SID[39:32] |
|      5 | SID[47]    | DEVID[5:0]/SID[46:41] | DEVID[5:0]/SID[46:41] | DEVID[5:0]/SID[46:41] | DEVID[5:0]/SID[46:41] | DEVID[5:0]/SID[46:41] | DEVID[5:0]/SID[46:41] | SID[40]    |

Table 77. SID and STAT Bit Description

| Name   | Type   | Reset             | Value     | Description                                                                           |
|--------|--------|-------------------|-----------|---------------------------------------------------------------------------------------|
| SID    | RO     | As per part       |           | 48-bit Unique Serial Identifier. The DEVID uses 6 bits of the SID.                    |
| DEVID  | RO     | As per derivative | 00 0110   | Device Derivative Identifier is part of the serial identifier SDI[46:41]. ADBMS2950B. |
| REVID  | RO     | As per revision   |           | Device Revision Identifier.                                                           |
| DER    | RO     | As per derivative |           | Derivative Code.                                                                      |
|        |        |                   | 0001      | Rev B.                                                                                |
|        |        |                   | 0010 0011 | Rev C. Rev D.                                                                         |
|        |        |                   |           | Rev                                                                                   |
|        |        |                   | 0100      | E.                                                                                    |
| OCAP   | RO     |                   |           |                                                                                       |
|        |        |                   | 01        | Invalid.                                                                              |
|        |        |                   | 10        | Invalid.                                                                              |
|        |        |                   |           | Invalid.                                                                              |
|        |        |                   | 11        |                                                                                       |
|        |        | x                 |           | OCAPin State, whenOCMODE=11or for Diagnostics.                                        |
|        |        |                   | 0         | OCApin reads back as low.                                                             |
|        |        |                   | 1         | OCApin reads back as high.                                                            |
|        |        |                   |           | OCBPin State,                                                                         |
| OCBP   | RO     | x                 |           | whenOCMODE=11or for Diagnostics.                                                      |
|        |        |                   | 0         | OCBpin reads back as low.                                                             |
|        |        |                   | 1         | OCBpin reads back as                                                                  |
|        |        |                   |           | high.                                                                                 |
|        |        | 0                 |           |                                                                                       |
|        |        |                   | 1         | I1ADC has completed                                                                   |
| I1CAL  | RO     |                   |           | I1ADC Initialization Status.                                                          |
|        |        |                   | 0         | I1ADC has not yet completed initialization.                                           |
|        |        |                   |           | initialization.                                                                       |
| I2CAL  | RO     | 0                 |           | I2ADC Initialization Status.                                                          |
|        |        |                   | 1         |                                                                                       |
|        |        |                   |           | I2ADC has completed initialization.                                                   |
| GPIO1L | RO     | 1                 |           | GPIO1 Read Back.                                                                      |

Rev. 0 | Page 56 of 97

## Data Sheet

## ADBMS2950B

| Name   | Type   |   Reset | Value   | Description                                                                                                                        |
|--------|--------|---------|---------|------------------------------------------------------------------------------------------------------------------------------------|
| GPIO2L | RO     |       1 | 0 1     | GPIO2 Read Back. GPIO2 reads back as low. GPIO2 reads back as high, when pulled up externally.                                     |
| GPIO3L | RO     |       1 | 0 1     | GPIO3 Read Back. GPIO3 reads back as low. GPIO3 reads back as high, when pulled up externally.                                     |
| GPIO4L | RO     |       1 | 0 1     | GPIO4 Read Back. GPIO4 reads back as low. GPIO4 reads back as high, when pulled up externally./td>                                 |
| GPO1L  | RO     |       1 | 0 1     | GPO1 Low-Level Read Back. GPO1 reads back below low-level threshold vs. GND. GPO1 reads back above low-level threshold vs. GND.    |
| GPO1H  | RO     |       1 | 0 1     | GPO1 High-Level Read Back. GPO1 reads back below high-level threshold vs. VDD. GPO1 reads back above high-level threshold vs. VDD. |
| GPO2L  | RO     |       1 | 0 1     | GPO2 Low-Level Read Back. GPO2 reads back below low-level threshold vs. GND. GPO2 reads back above low-level threshold vs. GND.    |
| GPO2H  | RO     |       1 | 0 1     | GPO2 High-Level Read Back. GPO2 reads back below high-level threshold vs. VDD. GPO2 reads back above high-level threshold vs. VDD. |
| GPO3L  | RO     |       1 | 0 1     | GPO1 Low-Level Read Back. GPO1 reads back below low-level threshold vs. GND. GPO1 reads back above low-level threshold vs. GND.    |
| GPO3H  | RO     |       1 | 0 1     | GPO3 High-Level Read Back. GPO3 reads back below high-level threshold vs. VDD. GPO3 reads back above high-level threshold vs. VDD. |
| GPO4L  | RO     |       1 | 0 1     | GPO4 Low-Level Read Back. GPO4 reads back below low-level threshold vs. GND. GPO4 reads back above low-level threshold vs. GND.    |
| GPO4H  | RO     |       1 | 0 1     | GPO4 High-Level Read Back. GPO4 reads back below high-level threshold vs. VDD. GPO4 reads back above high-level threshold vs. VDD. |
| GPO5L  | RO     |       1 | 0 1     | GPO5 Low-Level Read Back. GPO5 reads back below low-level threshold vs. GND. GPO5 reads back above low-level threshold vs. GND.    |
| GPO5H  | RO     |       1 | 0 1     | GPO5 High-Level Read Back. GPO5 reads back below high-level threshold vs. VDD. GPO5 reads back above high-level threshold vs. VDD. |
| GPO6L  | RO     |       1 | 0 1     | GPO6 Low-Level Read Back. GPO6 reads back below low-level threshold vs. GND. GPO6 reads back above low-level threshold vs. GND.    |
| GPO6H  | RO     |       1 | 0 1     | GPO6 High-Level Read Back. GPO6 reads back below high-level threshold vs. VDD. GPO6 reads back above high-level threshold vs. VDD. |

The RDALLC command is an alias for the CFGA, CFGB, FLAG, and STAT registers. It returns all the configuration bits, flag bits, and most status bits by one single read command.

Table 78. RDALLC Return Values

RDALL commands are not available on the isoSPI daisy-chains. For more details, see the Communication Protocol section.

|   BYTE | BIT 7   | BIT 6   | BIT 5    | BIT 4    | BIT 3   | BIT 2   | BIT 1   | BIT 0   |
|--------|---------|---------|----------|----------|---------|---------|---------|---------|
|      0 | OCEN    | VS5     | VS4      | VS3      | VS2     | VS2     | VS1     | VS1     |
|      1 | INJTM   | INJECC  | 0        | INJTS    | INJMON  | INJMON  | INJOSC  | INJOSC  |
|      2 | SOAK    | SOAK    | SOAK     | VS10     | VS9     | VS8     | VS7     | VS6     |
|      3 | 0       | GPO6C   | GPO6C    | GPO5C    | GPO4C   | GPO3C   | GPO2C   | GPO1C   |
|      4 | SPI3W   | GPIO1FE | GPO6OD   | GPO5OD   | GPO4OD  | GPO3OD  | GPO2OD  | GPO1OD  |
|      5 | VB2MUX  | VB1MUX  | RESERVED | RESERVED | COMMBK  | ACCI    | ACCI    | ACCI    |
|      6 | 0       | OC1TH   | OC1TH    | OC1TH    | OC1TH   | OC1TH   | OC1TH   | OC1TH   |
|      7 | 0       | OC2TH   | OC2TH    | OC2TH    | OC2TH   | OC2TH   | OC2TH   | OC2TH   |
|      8 | 0       | OC3TH   | OC3TH    | OC3TH    | OC3TH   | OC3TH   | OC3TH   | OC3TH   |

## ADBMS2950B

## Data Sheet

|   BYTE | BIT 7    | BIT 6    | BIT 5    | BIT 4     | BIT 3     | BIT 2     | BIT 1      | BIT 0      |
|--------|----------|----------|----------|-----------|-----------|-----------|------------|------------|
|      9 | OCTSEL   | OCTSEL   | 0        | 0         | OCDP      | 0         | OCDGT      | OCDGT      |
|     10 | OCBX     | OCAX     | OCMODE   | OCMODE    | OC3GC     | OC2GC     | OC1GC      | OCOD       |
|     11 | GPIO4C   | GPIO3C   | GPIO2C   | GPIO1C    | GPIO2EOC  | DIAGSEL   | DIAGSEL    | DIAGSEL    |
|     12 | GPO6H    | GPO5H    | GPO4H    | GPO3H     | GPO2H     | GPO1H     | GPO6L      | GPO5L      |
|     13 | GPO4L    | GPO3L    | GPO2L    | GPO1L     | GPIO4L    | GPIO3L    | GPIO2L     | GPIO1L     |
|     14 | RESERVED | RESERVED | VDRUV    | OCMM      | OC3L      | OCAGD     | OCAL       | OC1L       |
|     15 | RESERVED | RESERVED | VDDUV    | NOCLK     | REFFLT    | OCBGD     | OCBL       | OC2L       |
|     16 | I2CNT2:0 | I2CNT2:0 | I2CNT2:0 | I1CNT10:6 | I1CNT10:6 | I1CNT10:6 | I1CNT10:6  | I1CNT10:6  |
|     17 | I1CNT5:0 | I1CNT5:0 | I1CNT5:0 | I1CNT5:0  | I1CNT5:0  | I1CNT5:0  | I1PHA[1:0] | I1PHA[1:0] |
|     18 | VREGOV   | VREGUV   | VDIGOV   | VDIGUV    | SED1      | MED1      | SED2       | MED2       |
|     19 | VDEL     | VDE      | 0        | SPIFLT    | RESET     | THSD 1    | TMODE      | OSCFLT     |

## Note:

1 The thermal shutdown indicator bit THSD is not cleared by the SRST command, but only after a power-on-reset or through the CLRFLAG command.

## Soft Reset Command

The Soft Reset command (SRST) quickly resets all state machines and memory registers and initializes all the devices in the daisy-chain. The Soft Reset command only needs enough time to propagate up the stack to the next device, after which the device initializes. After tWAKE, all the ADBMS2950B devices enter the STANDBY state and are ready to receive new commands. From the STANDBY state, they automatically transition to the REFUP state (for more details, see the Core State Description section).

The host controller must keep log when setting the INJTS bit for requesting the THSD bit to be asserted. After successfully reading THSD, the INJTS bit must be cleared via WRCFGA and the THSD bit must be cleared through CLRFLAG. If a SRST is issued before clearing THSD, the FLAG register reports RESET and THSD bits being set, same as if there is a thermal shutdown. Setting INJTS requests the THSD to be asserted, but by itself does not trigger an internal reset.

## Serial ID

Each ADBMS2950B is programmed at the factory with a unique 48-bit serial identification code (SID) as a part of the internal non-volatile memory NVM1. After power-up or reset, the non-volatile memories are read, and the SID is stored into a volatile register that can be read through the RDSID command. Because of the non-redundant implementation, faults in the SID register cannot be detected.

## Snapshot Commands

To enable reading of coherent data from one ADBMS2950B or several devices in a daisy-chain, the snap command allows freezing of the continuously updated result registers. After sending the snap command, the host can read them at convenience before releasing the freeze by an unsnap command.

During the freeze, the ADCs continue to measure. Conversions are accumulated internally to provide IxACC, VBxACC results together with the latest Ix, VBx results once the unsnap command is sent. Sending an additional snap command while the result registers are already frozen does not take a new snapshot. To trigger a new register update while registers are frozen, the host must send a sequence of two commands: unsnap and snap. The CFGA register SNAPST bit indicates the freeze status.

Upon reception of a snap or unsnap command, the command counter is incremented. Registers and bits that are subject to the snap protocol are marked with FRZ in the Type column of the register and bit descriptions (for example, see the I1, I2, VB1, VB2, I1CNT, I2CNT, and I1PHA registers).

## GENERAL-PURPOSE IO PINS

The ADBMS2950B features six GPO pins to fulfill the following functions:

- General-purpose static output signals.
- Control of external high-voltage switches, for example, MOSFETs, to reduce leakage in high-voltage resistive dividers when measurement is not needed or to control the isolation measurement sequences as shown in the Typical Application section.
- Control of start-up self-test sequences of external circuitry.
- Additional chip-selects where more than one SPI peripheral must be controlled through the COMM interface.

The GPOs provide the following features:

- Set the output state (GPO1C to GPO6C).
- Configurable open-drain mode or push-pull mode, up to VDD voltage (GPO1OD to GPO6OD).
- Dual-threshold readback (GPO1H to GPO6H and GPO1L to GPO6L).

## Data Sheet

- When set to open-drain mode through GPOxOD = 1 and to high-impedance state through GPOxC = 1, the GPOs become inputs effectively.
- GPO6 can be configured to output 200 kHz, 50% duty-cycle square wave signal (GPO6C).

The ADBMS2950B features four GPIO pins to fulfill the following functions:

- General-purpose static input/output signals.
- Connectivity to local SPI or I2C peripheral (see COMM Interface).
- Fault Output.

The GPIOs provide the following features:

- Open-drain output control up to VREG voltage (GPIO1C to GPIO4C).
- Single-threshold readback (GPIO1L to GPIO4L).
- GPIO1 can output the fault status of the device (GPIO1FE).
- GPIO2 can signal the end-of-conversion of the OC1ADC (GPIO2EOC).

An external SPI or I 2 C peripheral can be connected to the GPIO/GPO pins. Often, this is an EEPROM to store calibration

Figure 41. GPO Model

<!-- image -->

## Table 79. Relation of GPOxOD, GPOxC Configuration to GPOx Mode and State

## Notes:

1. The GPO6L and GPO6H bits are not defined, where GPO6 has been configured in clock output mode.
2. The GPOxL and GPOxH read-only bits are redundantly read by SPI1 and SPI2 and can trigger a false SPIFLT event if GPO is exposed to dynamic signals or to extreme time constants.
3. When a GPOx pin is configured in open-drain mode and externally pulled up to a voltage lower than VDD, the GPOxH readback bit should not be used.

|   GPOxOD |   GPOxC | GPOxMode   | GPOxState         |
|----------|---------|------------|-------------------|
|        0 |       0 | Push-Pull  | Pull low to GND.  |
|        0 |       1 | Push-Pull  | Push high to VDD. |
|        1 |       0 | Open-Drain | Pull low to GND.  |
|        1 |       1 | Open-Drain | High impedance.   |

The status of the six GPOs is available in the STAT register and can be readback with the RDSTAT command. There are two read-only bits for each GPO, reporting two different threshold levels:

## ADBMS2950B

data, for example, the shunt resistance value of the ratios of external resistive dividers. Access to external serial peripheral devices is provided through the COMM commands controlled by the host.

The following serial controller interface connections are supported:

- I 2 C peripheral devices.
- 3-wire SPI peripheral devices.
- 4-wire SPI peripheral devices.

Additional chip-select lines for SPI communication can be provided through the GPOs.

## GPO Operation

The six GPOs are controlled through the configuration A register CFGA. It provides the open-drain mode enable bits (GPO1OD to GPO6OD) and output state control bits (GPO1C to GPO6C) for each individual GPOx pin. Additionally, for the GPO6, a clock output mode can be activated through its 2-bit GPO6C configuration bit field. After reset, all GPOs default to the high-impedance mode.

## ADBMS2950B

- GPOxL informs whether the voltage difference between the GPO and the GND pin is sufficiently small to represent logic Low.
- By contrast, GPOxH informs whether the voltage difference between the VDD and the GPO pin is sufficiently small to represent logic High.

Figure 42. GPO Readback Voltage Thresholds

<!-- image -->

## GPIO Operation

Figure 43. GPIO Model

<!-- image -->

If the respective GPO is not operated in the gray zone by extreme external resistive or capacitive load, the GPOxL and GPOxH readback comparators return the same value.

## Data Sheet

The four open-drain output mode GPIOs are controlled through the CFGB register. They can be pulled up to the VREG voltage by external pull-up resistors. After reset, all GPIOs default to a high-impedance state.

One of the GPIOs, GPIO1, can be configured as a fault output by the GPIO1FE bit. The fault events that contribute to the FAULT pin are the same as signaled through the overcurrent output pins. Where enabled as a fault output, the pin drives low when no fault is pending and goes to a high-impedance state if a fault is pending. A pull-up resistor is expected externally. By default, this function is not enabled, and GPIO1 behaves as the other GPIO pins. The GPIO1FE fault behavior is active high such that the occurrence of a reset is also signaled as a faulty state.

The GPIO2 also provides an alternative functionality. It is enabled by the GPIO2EOC bit. If set, the GPIO2 no longer outputs the state of the GPIO2C bit, but instead provides an output pulse every time the OC1ADC completes a conversion.

All four GPIOs can also be purposed for the COMM functionality. Even in COMM mode, the GPIOs are open-drain outputs. Therefore, an external pull-up resistor is required on these ports. The COMM function is enabled by the dedicated COMM commands. However, for the correct COMM functionality, the GPIOxC bits of the involved GPIOs must be set to 1 in the CFGB register to ensure that the pins are not overruled to a low state. At any time, the GPIOxC bits can be used to overrule the COMM function and to force a GPIO low.

The actual state of the GPIOs is available in the STAT register. The GPIOs and GPOs can be read by the same RDSTAT command to get coherent data. The readback is also functional when the GPIOs are operated in COMM mode, or when the GPIO1FE and GPIO2EOC bit are set. However, the signals may be dynamic and are not further synchronized nor gated.

The GPIO readback features only one threshold level. If the bits in the STAT register read zero, the GPIO is confirmed to be low. There is no function to confirm the voltage level, when the ADBMS2950B does not pull the signal low. Where needed, the signal can be externally looped back to any of the V1-V10 inputs.

Table 82. COMM Command Codes

| Name   | Type   |   BIT 10 |   BIT 9 |   BIT 8 |   BIT 7 |   BIT 6 |   BIT 5 |   BIT 4 |   BIT 3 |   BIT 2 |   BIT 1 |   BIT 0 | Description                              |
|--------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|------------------------------------------|
| WRCOMM | WR48   |        1 |       1 |       1 |       0 |       0 |       1 |       0 |       0 |       0 |       0 |       1 | Write COMMregister (ADBMS6830B: WRCOMM). |
| RDCOMM | RD48   |        1 |       1 |       1 |       0 |       0 |       1 |       0 |       0 |       0 |       1 |       0 | Read COMMregister (ADBMS6830B: RDCOMM).  |
| STCOMM | CMD    |        1 |       1 |       1 |       0 |       0 |       1 |       0 |       0 |       0 |       1 |       1 | Send COMMregister (ADBMS6830B: STCOMM).  |

## Table 83. COMM Register Map

|   BYTE | BIT 7      | BIT 6      | BIT 5      | BIT 4      | BIT 3      | BIT 2      | BIT 1      | BIT 0      |
|--------|------------|------------|------------|------------|------------|------------|------------|------------|
|      0 | ICOM0[3:0] | ICOM0[3:0] | ICOM0[3:0] | ICOM0[3:0] | FCOM0[3:0] | FCOM0[3:0] | FCOM0[3:0] | FCOM0[3:0] |
|      1 | D0[7:0]    | D0[7:0]    | D0[7:0]    | D0[7:0]    | D0[7:0]    | D0[7:0]    | D0[7:0]    | D0[7:0]    |
|      2 | ICOM1[3:0] | ICOM1[3:0] | ICOM1[3:0] | ICOM1[3:0] | FCOM1[3:0] | FCOM1[3:0] | FCOM1[3:0] | FCOM1[3:0] |

## I 2 C/SPI Controller

The input/output ports GPIO1 to GPIO4 can be used as an I 2 C or a SPI controller port to communicate with an I 2 C or SPI peripheral.

The SPI3W bit in the CFGA register specifies whether a 3-wire or 4-wire SPI protocol is used. The SPI mode of the SPI controller on the ADBMS2950B is not configurable but fixed to Mode 3 (CPHA = 1 and CPOL = 1), which makes it compatible to the peripheral designed for this mode and for Mode 0 (CPHA = 0 and CPOL = 0). Both modes sample the data on the rising clock edge and differ only in the Idle clock state.

Table 80 shows the assignment of the GPIOs to the serial controller pins. GPIOs not used by the serial controller are free to be used for other purposes. For the SPI controller, up to six additional CS lines can be implemented using the GPO1 to GPO6 pins (GPOx shown in Table 80) by keeping the default CS of the SPI controller de-asserted (high) while activating one of the GPOx through a write to CFGA.

## Table 80. Serial Controller Pin Assignment

| Pin   | SPI (SPI3W = 0)   | SPI (SPI3W = 1)   | I 2 C   |
|-------|-------------------|-------------------|---------|
| GPIO1 | SDIM              |                   |         |
| GPIO2 | CSBM              | CSBM              |         |
| GPIO3 | SDOM              | SDIOM             | SDA     |
| GPIO4 | SCKM              | SCKM              | SCL     |
| GPOx  | CSBMx             | CSBMx             |         |

## Table 81. Serial Controller Signal Description

| Signal      | Description                         |
|-------------|-------------------------------------|
| CSBM, CSBMx | SPI Controller Chip Select Output.  |
| SDIM        | SPI Controller Data Input.          |
| SDIOM       | SPI Controller Data Input/Output.   |
| SDOM        | SPI Controller Data Output.         |
| SCKM        | SPI Controller Clock Output.        |
| SDA         | I 2 C Controller Data Input/Output. |
| SCL         | I 2 C Controller Clock Output.      |

The 6-byte COMM register stores all the data and control bits required for the I 2 C or SPI communication. It contains up to three data bytes to be transmitted to or received from the peripheral device. It also contains three control bytes that specify whether the bytes are transferred in I 2 C or in SPI mode and the control action to be taken prior (ICOM bit fields) and after (FCOM bit fields) the transaction of the individual bytes.

## ADBMS2950B

## ADBMS2950B

## Data Sheet

|   BYTE | BIT 7      | BIT 6      | BIT 5      | BIT 4      | BIT 3      | BIT 2      | BIT 1      | BIT 0      |
|--------|------------|------------|------------|------------|------------|------------|------------|------------|
|      3 | D1[7:0]    | D1[7:0]    | D1[7:0]    | D1[7:0]    | D1[7:0]    | D1[7:0]    | D1[7:0]    | D1[7:0]    |
|      4 | ICOM2[3:0] | ICOM2[3:0] | ICOM2[3:0] | ICOM2[3:0] | FCOM2[3:0] | FCOM2[3:0] | FCOM2[3:0] | FCOM2[3:0] |
|      5 | D2[7:0]    | D2[7:0]    | D2[7:0]    | D2[7:0]    | D2[7:0]    | D2[7:0]    | D2[7:0]    | D2[7:0]    |

## Table 84. COMM Bit Descriptions

| Name        | Type   | Reset   | Value                    | Write Operation                                                                                                                                                                                                                                               | Read Operation                                                                                                                                                                                                  |
|-------------|--------|---------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D0, 1, 2    | RW     | 0x00    |                          | Transmit Data Byte 0, 1, 2.                                                                                                                                                                                                                                   | Receive Data Byte 0, 1, 2.                                                                                                                                                                                      |
| ICOM0, 1, 2 | RW     | 0000    | 0000 0001 0110 0111      | Control action prior transaction of byte D0, D1, D2. I 2 C: BLANK. I 2 C: STOP. I 2 C: START. I 2 C: No transmit.                                                                                                                                             | Result of control action. I 2 C: SDA is held low between bytes. I 2 C: Controller generated a STOP. I 2 C: Controller generated a START. I 2 C: SDA is held high between bytes.                                 |
| FCOM0, 1, 2 | RW     | 0000    | 0000 0001 0111 1000 1001 | Control action after transaction byte D0, D1, D2. I 2 C: Controller ACK on 9th clock. SPI: Holds CSBM low after byte transmission. I 2 C: Controller NACK on 9th clock. SPI: Holds CSBM low after byte transmission. I 2 C: Controller NACK followed by STOP. | Result of control action. I 2 C: Controller generated an ACK. I 2 C: Peripheral generated an ACK, Controller a STOP. I 2 C: Peripheral generated an ACK. I 2 C: Peripheral generated a NACK, Controller a STOP. |

The COMM register can be written by the WRCOMM command and can be read by the RDCOMM command. The STCOMM command initiates the transfer. The transfer is clocked by the SCK clock that the ADBMS2950B receives from its (iso)SPI host. When sending an STCOMM command, the remote SPI host must extend the same SPI frame by 24 SCK clock cycles (3 bytes) per data byte without releasing CSB high. Thus, the host must send STCOMM (4 bytes) followed by 3 bytes to send 1 byte to the serial peripheral. Similar STCOMM is followed by 6 bytes to transmit 2 bytes and 9 bytes to transmit 3 bytes. The number of bytes after STCOMM is independent of the length of a daisy-chain, and the data is do not care.

When more than three bytes are to be transferred, multiple WRCOMM, RDCOMM, and STCOMM commands can be bundled to transfer groups of up to 3 bytes at a time. An I 2 C message is initiated by a START condition and terminated by a STOP. All intermediate bytes keep the ICOM field in BLANK state. ACK or NACK can be issued as appropriate. In SPI mode, a falling edge on CSBM needs to be ensured at the start of a contiguous message, and the CSBM is held low for the duration of the message and released high after the last byte.

Assuming that CSB is kept active (Logical Low), and that SCK is pulsed high (toggle LH and HL) 24 times for each Dn[7:0] (that is, 72 cycles per WRCOMM and RDCOMM previously set packet, before CSB can be set to inactive, Logical 1), and assuming that the timing specification onto the clock phases of SCK are respected, the timing specifications for the SPI and I 2 C controller interfaces are as shown in Figure 44 and Figure 45.

## I 2 C/SPI Controller Timing

The timing of the I 2 C or SPI controller is set by the timing of the communication at the primary SPI interface of the

## Table 85. SPI Controller Timing

## ADBMS2950B

Figure 44. STCOMM Timing Diagram for an SPI Controller

→→—tcLk√

↓→4T1

→

(SCK)

CSBM HIGH ≥ LOW

CSBMLOW

CSBM(GPIO2)

SCKM(GPI04)

SDIOM(GPI03)

CSBMLOW

CSBMLOW≥HIGH

CSBM(GPI02)

SCKM (GPI04)

SDIOM(GPI03)

CSBMHIGH/NOTRANSIT

CSBM (GPI02)

SCKM(GPI04)

SDIOM(GPI03)

→→—tcLk -

→7

→→t

(SCK)

nunununununununununununununununununununL

START

NACK+STOP

SCL (GPIO4)

SDA (GPIO3)

BLANK

NACK

SCL (GPI04)

SDA (GPI03)

START

ACK

SCL(GPIO4)

SDA (GPI03)

STOP

SCL (GPI04)

SDA (GPI03)

NO TRANSMIT

SCL (GPIO4)

SDA (GPI03)

Figure 45. STCOMM Timing Diagram for an I 2 C Controller

<!-- image -->

ADBMS2950B. Table 85 shows the SPI controller timing specifications. Table 86 shows the I 2 C controller timing relationship to the primary SPI clock.

| SPI Controller Parameter              | Timing Relationship to Primary SPI   | Timing Specifications at t CLK = 0.5 µs   |
|---------------------------------------|--------------------------------------|-------------------------------------------|
| SDIOM, SDOMValid to SCKM Rising Setup | t 3                                  | Min 100 ns                                |
| SDIO Valid from SCKM Rising Hold      | t CLK + t 1 4                        | Min 0.53 µs                               |
| SCKM Low                              | t CLK                                | Min 0.5 µs                                |
| SCKM High                             | t CLK                                | Min 0.5 µs                                |
| SCKM Period (SCKM Low + SCKM High)    | 2 × t CLK                            | Min 1 µs                                  |
| CSBM Pulse Width                      | 3 × t CLK                            | Min 1.5 µs                                |
| SCKM Rising to CSBM Rising            | 5 × t CLK + t 1 4                    | Min 2.53 µs                               |
| CSBM Falling to SCKM Falling          | t 3                                  | Min 100 ns                                |

## ADBMS2950B

| SPI Controller Parameter         | Timing Relationship to Primary SPI   | Timing Specifications at t CLK = 0.5 µs   |
|----------------------------------|--------------------------------------|-------------------------------------------|
| CSBM Falling to SCKM Rising      | t CLK + t 3                          | Min 0.6 µs                                |
| SCKM Falling to SDIOM,SDOM Valid | Controller requires < t CLK          | Controller requires < t CLK               |

## Table 86. I 2 C Controller Timing

| I 2 C Controller Parameter   | Timing Relationship to Primary SPI   | Timing Specification at t CLK = 0.5 µs   |
|------------------------------|--------------------------------------|------------------------------------------|
| SCL Clock Frequency          | 1 ÷ (2 × t CLK )                     | Max 1 MHz                                |
| t HD;STA                     | t 3                                  | Min 100 ns                               |
| t LOW                        | t CLK                                | Min 0.5 µs                               |
| t HIGH                       | t CLK                                | Min 0.5 µs                               |
| t SU;STA                     | t CLK + t 1 4                        | Min 0.53 µs                              |
| t HD;DAT                     | t 4                                  | Min 30 ns                                |
| t SU;DAT                     | t 3                                  | Min 100 ns                               |
| t SU;STO                     | t CLK + t 1 4                        | Min 0.53 µs                              |
| t BUF                        | 3 × t CLK                            | Min 1.5 µs                               |

## SPI Sequence Example

The following steps are required to write and read any number of bytes to an SPI peripheral connected to the ADBMS2950B:

1. Ensure that GPIOs/GPOs used for SPI transactions are not actively forced low through CFGA, CFGB register settings. For multiple chip-selects, if the default GPIO2 is not used, the alternative CS must be manually asserted through CFGA.
2. Write data and control action through WRCOMM.
3. Perform transmission through STCOMM: 4 bytes for command PEC and 3 bytes per byte to be transmitted, maximum 9 bytes, independent of the length of the daisy-chain as all ICs of the daisy-chain perform the transmission simultaneously (no daisy-chain shift register activated for this command). The data is do not care, for example, it can be set to all 0x00.
4. Get data received during transmission through RDCOMM if required (for example, not needed if data is written to the peripheral only).
5. Continue with step 2 for any additional bytes.

The following is an example for writing 5 bytes (0xA1, 0xB2, 0xC3, 0xD4, 0xE5) and reading back all bytes received during the transaction on the SDI input pin:

1. Write data and control action through WRCOMM. ICOM0 = 0x8 (CS low), FCOM0 = 0x0 (hold CS low) ICOM1 = 0x8 (CS low), FCOM1 = 0x0 (hold CS low) ICOM2 = 0x8 (CS low), FCOM2 = 0x0 (hold CS low) DATA0 = 0xA1, DATA1 = 0xB2, DATA2 = 0xC3
2. Perform transmission through STCOMM. STCOMM (4 bytes for command PEC) followed by 9 bytes.
3. Get data received during transmission through RDCOMM. DATA0 (SDI byte 0), DATA1 (SDI byte 1), DATA2 (SDI byte 2).
4. Write data and control action via WRCOMM for the last two remaining bytes. ICOM0 = 0x8 (CS low), FCOM0 = 0x0 (hold CS low) ICOM1 = 0x8 (CS low), FCOM1 = 0x9 (transmit CSBM high after byte transmission) ICOM2 = 0xF (no transit), FCOM2 = 0x9 DATA0 = 0xD4, DATA1 = 0xE5, DATA2 = 0xFF (3rd byte is do not care)
5. Perform transmission through STCOMM. STCOMM (4 bytes for CMD+PEC) followed by 6 bytes to transmit 2 bytes to the SPI peripheral only. It is also possible to send 9 bytes to keep the STCOMM common independent of number of bytes to be transmitted as the ICOM/FCOM registers define when to stop the transaction.
6. Get received data during transmission via RDCOMM. DATA0 (SDI byte 3), DATA1 (SDI byte 4)

If several SPI peripherals are connected, whenever the default CSBM is not used, the host must select the peripheral through WRCFGA asserting the desired GPOx (CS of the peripheral) before sending the COMM commands. ICOMx and FCOMx must be set to 0x9 (instead of 0x8 and 0x0) for any byte to be transmitted, and the SPI sequence is terminated with a final WRCFGA de-asserting the used GPOx.

## I 2 C Sequence Example

The following steps are required to write and read any number of bytes to an I 2 C peripheral connected to the ADBMS2950B:

## Data Sheet

1. Ensure that the GPIOs used for I 2 C transactions are not actively forced low through CFGB register setting, meaning GPIO3C and GPIO4C must be at their default value (1) to release the pins.
2. Write data and control action through WRCOMM.
3. Perform transmission through STCOMM: 4 bytes for CMD+PEC and 3 bytes per byte to be transmitted, maximum 9 bytes, independent of the length of the daisy-chain as all ICs of the daisy-chain perform the transmission simultaneously (no daisy-chain shift register activated for this command). The data is do not care, for example, it can be set to all 0x00.
4. Get data received during transmission via RDCOMM if required.
5. Continue with step 2 for any additional bytes.

The following example assumes an I 2 C EEPROM as 24LC02BHT-E/OT from Microchip connected to the I 2 C controller interface of the ADBMS2950B. It shows writing one byte to an address and reading it back.

First, write a byte (0x8E) to address 0xA0, and do the following steps:

1. Write data and control action through WRCOMM. ICOM0 = 0x6 (I 2 C START), FCOM0 = 0x8 (I 2 C: Controller NACK on 9th clock) ICOM1 = 0x0 (I 2 C BLANK), FCOM1 = 0x0 (I 2 C: Controller ACK on 9th clock) ICOM2 = 0x0 (I 2 C BLANK), FCOM2 = 0x9 (Controller NACK followed by STOP) DATA0 = 0xA0, DATA1 = 0x00, DATA2 = 0x8E
2. Perform transmission through STCOMM. STCOMM (4 bytes for CMD+PEC) followed by 9 bytes.

Next, perform a Read operation by first writing the memory read address to I 2 C peripheral write address:

1. Write data and control action through WRCOMM. ICOM0 = 0x6 (I 2 C START), FCOM0 = 0x8 (I 2 C: Controller NACK on 9th clock) ICOM1 = 0x0 (I 2 C BLANK), FCOM1 = 0x0 (I 2 C: Controller ACK on 9th clock) ICOM2 = 0x6 (I 2 C START), FCOM0 = 0x8 (I 2 C: Controller NACK on 9th clock) DATA0 = 0xA0, DATA1 = 0x00, DATA2 = 0xA1
2. Perform transmission through STCOMM. STCOMM (4 bytes for CMD+PEC) followed by 9 bytes.

And finally, read back the byte:

1. Write data and control action through WRCOMM for the last two remaining bytes.
2. ICOM0 = 0x0 (I 2 C BLANK), FCOM0 = 0x9 (Controller NACK followed by STOP)

## ADBMS2950B

ICOM1 = 0x7 (I 2 C No transmit), FCOM1 = 0x9 (Controller NACK followed by STOP) ICOM2 = 0x7 (I 2 C No transmit), FCOM2 = 0x9 (Controller NACK followed by STOP) DATA0 = 0xFF, DATA1 = 0x00, DATA2 = 0x00 (2nd and 3rd byte are do not care)

3. Perform transmission through STCOMM. STCOMM (4 bytes for CMD+PEC) followed by 9 bytes.
4. Get received data during transmission through RDCOMM. DATA0 (Contains 0x8E)

The specifics of the write and read address depends on the peripheral that is connected. The I 2 C clock rate depends on the frequency of the (iso)SPI clock. It might be necessary to slow down the (iso)SPI clock to not exceed the maximum supported frequency of the I 2 C peripheral.

## ADBMS6830B COMPATIBLE COMMANDS

The ADBMS2950B supports all read and write commands of the cell monitors ADBMS6830B to allow operation of daisychains consisting of both device types as shown in SPI and isoSPI Interface Topologies section.

The Command Code tables show in brackets the Command Code name of the identical ADBMS6830B code. For example, the RDI command is identical to the RDCVA command and has an alternative ADBMS6830B compatible code RDFCA to which the ADBMS2950B responds as it is an RDI command. Also, certain poll or 4-byte-only commands are shared between the ADBMS2950B and ADBMS6830B. For example, the ADI1 command is identical to the ADCV command and ADI2 is identical to ADCV.

Certain exceptions apply in the case of ADI1 and ADI2 as listed in the Table 41. Commands without the noted ADBMS6830B code are ignored by the cell monitors and the ADBMS6830B codes that are not listed here, for example, ADAX and ADAX2, are ignored by the ADBMS2950B. This allows certain actions to be triggered in one device type only.

Table 87 shows the additional compatible read and write ADBMS6830B command codes. These codes do not have an internal effect on the ADBMS2950B other than behaving as a read command returning do not care data with a valid DPEC or behaving as a write command with the data written being do not care and incrementing the command counter if the DPEC is valid for the do not care data.

## ADBMS2950B

Table 87. Additional ADBMS6830B Compatible Command Codes

## Data Sheet

| Name      | Type   |   BIT 10 |   BIT 9 |   BIT 8 |   BIT 7 |   BIT 6 |   BIT 5 |   BIT 4 |   BIT 3 |   BIT 2 |   BIT 1 |   BIT 0 |
|-----------|--------|----------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| WRPWMA    | WR48   |        0 |       0 |       0 |       0 |       0 |       1 |       0 |       0 |       0 |       0 |       0 |
| WRPWMB    | WR48   |        0 |       0 |       0 |       0 |       0 |       1 |       0 |       0 |       0 |       0 |       1 |
| RDPWMA    | RD48   |        0 |       0 |       0 |       0 |       0 |       1 |       0 |       0 |       0 |       1 |       0 |
| RDPWMB    | RD48   |        0 |       0 |       0 |       0 |       0 |       1 |       0 |       0 |       0 |       1 |       1 |
| CLOVUV    | WR48   |        1 |       1 |       1 |       0 |       0 |       0 |       1 |       0 |       1 |       0 |       1 |
| WRAO      | WR48   |        0 |       0 |       0 |       0 |       0 |       1 |       1 |       1 |       0 |       0 |       1 |
| RDAO      | RD48   |        0 |       0 |       0 |       0 |       0 |       1 |       1 |       1 |       0 |       1 |       0 |
| WRCMCFG   | WR48   |        0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       0 |       0 |       0 |
| RDCMCFG   | RD48   |        0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       0 |       0 |       1 |
| WRCMCELLT | WR48   |        0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       0 |       1 |       0 |
| RDCMCELLT | RD48   |        0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       0 |       1 |       1 |
| WRCMGPIOT | WR48   |        0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       1 |       0 |       0 |
| RDCMGPIOT | RD48   |        0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       1 |       0 |       1 |
| RDCMFLAG  | RD48   |        0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       1 |       1 |       1 |
| CLRCMFLAG | RD16   |        0 |       0 |       0 |       0 |       1 |       0 |       1 |       1 |       1 |       1 |       0 |
| RDACF     | RD48   |        0 |       0 |       0 |       0 |       1 |       0 |       0 |       1 |       0 |       1 |       1 |
| RDSVE     | RD48   |        0 |       0 |       0 |       0 |       0 |       0 |       0 |       1 |       1 |       1 |       0 |
| RDSVF     | RD48   |        0 |       0 |       0 |       0 |       0 |       0 |       0 |       1 |       1 |       1 |       1 |
| RDAUXE    | RD48   |        0 |       0 |       0 |       0 |       0 |       1 |       1 |       0 |       1 |       1 |       0 |
| RDRAXC    | RD48   |        0 |       0 |       0 |       0 |       0 |       0 |       1 |       1 |       1 |       1 |       0 |

## Data Sheet

## APPLICATIONS

In some cases, the application circuits shown in this section are simplified to show various concepts in a small space. Some components may be omitted. Analog Devices offers fullreference design circuits for the ADBMS2950B that are validated against common requirements for industrial systems. For full-reference designs and questions about specific use cases, contact a local Analog Devices sales office.

## TYPICAL APPLICATION

A typical application of the ADBMS2950B used in a battery junction box is shown in Figure 46. It features the measurement of battery pack voltage and current, high-voltage-system to chassis-GND isolation resistance, link and precharge voltage and shunt resistor temperature. The ADBMS2950B is put into an isoSPI communication daisy-chain together with the ADBMS6830B cell monitors according to Figure 20. GPOs are used to control external high-voltage N-channel MOSFETS to either reduce battery pack leakage when the system is shut down or to toggle the bias states of the isolation resistance measurement. An external I 2 C non-volatile memory is

## ADBMS2950B

connected to the GPIOs to store board calibration parameters such as the shunt resistance or resistive-divider values.

The circuit in Figure 46 uses the VBAT1 input to measure the overall battery pack voltage (BAT+ vs. BAT-). When the BMS controller closes the relay toward the chassis-GND, and GPO6 toggles the MOSFET, the VBAT2 input can trace the voltage response continuously and synchronously to the VBAT1 measurement, which enables isolation resistance measurement in noisy environments with minimum error.

When the relay and the MOSFET are open, VBAT2 provides a synchronous and continuous mean to measure the pack voltage redundantly. However, where redundant pack voltage monitoring is required permanently, also during isolation resistance measurement, and accuracy of the redundant measurement is key, VBAT2 might use a voltage divider symmetric to the VBAT1 resistor network. The chassis-GND measurement circuitry can then be connected to one of the V1 to V10 inputs. For good noise filtering, the BMS controller can still trigger VxADC measurements during isolation resistance measurement at a high rate and extract the synchronous VBxADC measurements in software to perform the isolation resistance calculations with minimum error.

Figure 46. Typical ADBMS2950B Application

<!-- image -->

## PROVIDING DC POWER

The primary supply pin for the ADBMS2950B is the 5V ± 0.5V VREG input pin, which mainly supplies all references, ADCs, the digital core, and the OC, GPIO circuitry. The VDD power input pin supplies the DRIVE regulator, and the GPO output stages.

<!-- image -->

<!-- image -->

## Data Sheet

VDD must be connected either to VREG for 5V only operation or to 11V to 20V supply to provide higher drive voltage on the GPOs. There is no functional, performance or accuracy difference between the supply options VDD = VREG = 5V and VDD ≥ 11V, VREG = 5V besides the driving capability of the GPOs being either 5V or &gt;11V and the DRIVE output voltage being available only when VDD ≥ 11V . There are several ways to supply the ADBMS2950B, as described in the following sections.

<!-- image -->

<!-- image -->

*INTERNALDIODESHOWNFORIMPLICATIONS ONTHEBOOSTORCHARGEPUMP

Figure 47. ADBMS2950B Power Supply Options

important to note as it forbids using a boost converter or charge pump that actively pulls-down the output when not enabled. The lower left drawing of Figure 47 shows this diode for clarity.

## 11V to 20V Supply and NPN Linear Regulator

For the 11V to 20V supply, an isolated flyback or push-pull regulator can be used. A discrete regulator with the addition of a few external components can be formed through DRIVE pin, as shown in Figure 46, Figure 47 upper left, and Figure 48.

The DRIVE pin provides a 5.7V output, capable of sourcing several mA.When buffered with NPN transistor, this configuration provides a stable 5V over temperature. Choose the NPN transistor to have a sufficient beta value over temperature (&gt;40) to provide the necessary supply current. The peak VREG current requirement of the ADBMS2950B approaches 30 mA when simultaneously communicating over the isoSPI and while making ADC conversions. The supply

## VDD, VREG Single 5V Supply

The VDD and VREG pins can both be supplied directly by an external 5V supply, for example, an isolated 5VIN to 5VOUT ADuM derivative from the Analog Devices isoPower series. This is the easiest power supply option, with the only limitation of the maximum GPO drive voltage being also limited to 5V . This is suitable for most applications that do not require to drive N-channel MOSFETS directly through the GPOs.

## VDD 11V to 20V Supply

In all other supply options, a 11V to 20V supply must be connected to the VDD power input. A 47 Ω, 100 nF RC decoupling network is recommended for filtering and to protect the IC from transients. shows the various options by either using a 11V to 20V supply which is regulated down to 5V for VREG or a 5V supply which is then boosted to 11V to 20V for VDD. In the latter case, the internal diode from VREG to VDD is

## Data Sheet

current further increases with IO current sourced by the pins GPO, OCA, OCB, and VREF1P25.

If the VREG pin is required to support any additional load, a transistor with a higher beta value may be required. The power dissipation of the NPN and the collector series resistor must be considered when selecting appropriate components. The NPN's collector can be powered from any voltage source that is a minimum of 6V above GND. In Figure 48, the voltage source that supplies VDD is used.

A 47 Ω, 100 nF RC-decoupling network is recommended for the collector power connection for filtering and protecting the NPN from transients. Filter the DRIVE pin by adding a 10 Ω, 10 nF RC to the base of the NPN. The emitter output is recommended to be filtered with a ferrite bead for best EMC and EMI performance. Alternatively, a 0 Ω resistor can be placed to allow the option to change to a ferrite. The VREG pin must be bypassed with a 1 μF reservoir capacitor. Avoid larger capacitance because this increases the wake-up time of the ADBMS2950B. Choose a transistor with adequate thermal dissipation.

Figure 48. VREG Power Source Using NPN Pass Transistor

<!-- image -->

## 11V to 20V Supply and 5V Step-Down Regulator

The NPN transistor linear regulator can be replaced by a buck regulator to improve efficiency and reduce power dissipation as shown in the upper right section of Figure 47. The DRIVE pin can be left unconnected in this scenario.

## 5V Supply and 11V to 20V Step-Up Regulator

The VREG pin can be supplied directly by an external 5V , supply for example, an isolated 5VIN to 5VOUT ADuM derivative from the Analog Devices isoPower series. The 11V to 20V supply for

## ADBMS2950B

VDD can be generated through an additional step-Up converter as shown in Figure 47 lower left. A low-power boost regulator or charge pump can be used. The DRIVE pin can be left unconnected in those scenarios.

## 5V Supply and 14V Charge Pump

Because of the very low VDD power requirements in the order of sub-milliampere over the full-operating temperature range (see Table 12) plus optional GPO sourcing current for external circuits, a simple charge-pump circuitry using an inverting Schmitt-Trigger supplied by 5V (VREG) can be used for this purpose. The supply current of the Schmitt-Trigger vs. the analog input signal generated by the RC circuitry must be considered. A suitable device, which does not respond with excessive supply current while the input signal is around the tripping points, is the 74HC2G14GW-Q100H from Nexperia. Figure 49 shows the recommended implementation with an oscillator frequency set to ~190 kHz.

Figure 49. Inverting Schmitt-Trigger Charge Pump Voltage Trippler from VREG = 5V to VDD ~14V

<!-- image -->

## Intermediate VDD Voltages

The VDD pin must be operated in either VDD = VREG or in 11V ≤ VDD ≤ 20V mode to achieve the specified performance. However, depending on the selected power supply topology and/or the presence of faults in the system, the VDD pin may see a voltage that is above VREG but below 11V for some time. As the VDD voltage drops below a level of about 8V , the VDRUV bit is asserted, and the DRIVE pin no longer provides its 5.7V output. This reduces the supply current drawn by the VDD pin. In cases where VREG is supplied through an external NPN, this also shuts down the IC. In cases where VREG is powered externally and does not leave its specified supply range, the IC operation including communication and measurement accuracy are not affected. The GPO high-level output voltage follows the VDD pin voltage throughout.

## PROTECTION FEATURES

The ADBMS2950B incorporates various ESD safeguards to ensure robust performance. An equivalent circuit showing the specific protection structures is shown in Figure 50. Zener-like protection structures are shown with their nominal clamp voltage, and the unmarked diodes exhibit standard PN junction behavior with an expected forward voltage between 0.4V and 0.8V.

## Overvoltage Protection

To meet the accuracy specifications, the current and voltage sense input signals must stay within the operating conditions listed in the electrical characteristics of the ADCs under differential and input-pin voltage range.

The absolute maximum ratings and the internal protection structures allow to design an application circuitry that can withstand various external stress conditions without the need for external protection devices such as clamping or Zener diodes. External diodes connected directly to the analog input pins can even be unfavorable as their leakage current together with the external source impedance may cause additional measurement errors.

The analog voltage inputs (Vx, VBATx), VREF1P25 and OCA, OCB can sink and source currents independent of whether the ADBMS2950B is powered or unpowered. Currents can be sourced by internal diode clamps from the GND pin and sunk by internal diode clamps to the VREG pin. Even if the IC is unpowered and the VREG pin is charged by clamping currents, it consumes at least the sum of currents into V1 to V10, VBAT1, VBAT2, VREF1P25, OCA, and OCB as specified in the Table 18 without the risk of violating the absolute maximum voltage rating of any of those pins.

Figure 50. Internal ESD Protection Structures

<!-- image -->

Sourcing currents, also independent of the power state of the ADBMS2950B, must be limited below the absolute maximum ratings of the pins and are not constrained by this sum of currents maximum rating, but the power dissipation in the internal diodes must be considered. As the currents into pins must be limited by the application circuitry below the sum of current maximum rating, it is also ensured that the power dissipation is well-limited in the sourcing current condition.

## CURRENT SENSE INPUTS

The current sense inputs I1 and I2 using the input pins I1A, I1B, I2A, and I2B are internally connected to I1ADC, I2ADC, OC1ADC, and OC2ADC. Identical external circuits must be connected to S1A, I1A, I1B, S2A, I2A, and I2B with the circuit input of S1A shorted to the circuit input of I1A and the circuit input of S2A shorted to the circuit input of I2A leading to a differential zero signal of I1A vs. S1A and I2A vs. S2A, see Figure 51.

One side of the current sense resistor must be connected to PCB GND to which also the RGND, SGND, and GND pins of the IC are connected. It is recommended to connect the A-side (IxA, SxA) of the shunt to GND and to BAT-.

## Data Sheet

The polarity of the IxADC measurement results is different for the two channels. With the recommended connection as described above, channel I1 battery current is negative when discharging (IxB &gt; IxA) and positive when charging (IxA &gt; IxB); channel I2 inverse. The host controller software can invert the measurement quantities as required.

The shunt resistor shorts all current sense inputs to GND, which simplifies the input protection. Additionally, the ADBMS2950B has internal ESD protection on all inputs as shown in the Protection Features section. To further increase protection, an external RC filter can be connected to the current sense inputs as shown in Figure 51. The additional filtering is not required for the IxADC inputs because of the preamplifier having a low-pass filter characteristic. Still, the buffers in front of the OCxADCs do not have this low-pass filter characteristic, which allows to capture short current peaks through those fast ADCs if required. On the other hand, the parasitic inductance of the shunt resistor can cause an additional voltage drop during fast current transients (di/dt), which could cause false overcurrent measurements and false overcurrent alerts when a short deglitch time configuration (OCDGT) is used. The external RC filter can compensate for this effect and also reject common mode signals.

## RC Filter Selection

If the RC filter at the input matches the RL of the shunt (R × C = L ÷ RSHUNT), the measured voltage follows the actual current in an optimum way. The inductance of typical 50 μΩ to 100 μΩ bus bar type shunts is on the order of 1 nH. The shunt manufacturer can be consulted for measurement data if required.

A simple recommendation is to set the time constant of the RC filter to the maximum value that is still acceptable for measuring the shortest current spikes to be detected by the overcurrent ADCs. Alternatively, the RC filter can be adjusted to yield the right response to a current step or ramp applied to the shunt. Similar to the compensation that is done for scope probes, but in typical cases the resulting time constants are significantly shorter than what is required for fast overcurrent detection within single-digit multiples of the OCxADC conversion time, thus the first approach fits in typical use cases.

The series resistors can be up to 220 Ω per input; larger values should be avoided as they could cause additional offset errors due to pin leakage currents. While low resistor and high capacitor values are preferred for measurement, resistor values in the range from 120 Ω to 150 Ω are recommended for robust diagnostics of the shunt connectivity.

The overcurrent detection deglitch time setting (OCDGT) allows additional digital filtering to avoid false positive events in the presence of current spikes. A good compromise for detecting fast current events and filtering high frequency signals is an RC setting of 120 Ω (Rp) and 220 nF (Cp) for all common mode input filters.

## ADBMS2950B

Because of the single SxA pins per channel, differential filter capacitors should not be added to the current and overcurrent sense input pins as they lead to imbalanced filtering between the Sx and Ix measurements and between the OC3ADC and the other channels. On the other hand, a mismatch between the common mode filters could cause a common mode to differential conversion during AC signals. With the time constant of the RC filter being very short, 26 µs for the recommended RC values, and the mismatch between filters being no more than 10%, the error is averaged out over the IxADC conversion time.

An error signal could become visible during the shorter OCxADC conversion time. Assuming a common mode step input signal and 10% RC mismatch, the false differential signal could reach 5% of the step as shown in following calculation. Using the exponential equation describing the voltage at the capacitor of the RC relative to the input signal:

<!-- formula-not-decoded -->

The relative output signal with different time constant after one OCxADC conversion time becomes:

- -10% RC error: RC = 23 µs: 1 - e (-62/23) = 93%
- +10% RC error: RC = 29 µs: 1 - e (-62/29) = 88%

The resulting differential signal is 5% of the step. After three OCxADC conversion times, the relative differential signal is decreased to only 1%.

Common-mode input signals can be avoided by design and by following the layout rules on the shunt's GND connection that eliminates most signal on the IxA inputs as they are on the GND side of the shunt. This ensures most of the differential sense signal is seen on the IxB pins only. It significantly reduces common mode to differential signal conversion of the values calculated above. Additionally, it avoids OCxADC false trigger events even with short deglitch time settings.

## Current Sense Layout Recommendation

Figure 51 shows the recommended current sense input RC filters. The placement and layout of the current sense input circuitry should be symmetric on all inputs as shown in the layout recommendation along the horizontal axis. This way, temperature gradients that are more appropriate to appear along the vertical axis do not cause differential thermocouple voltage in the sense lines. Instead, all connection points (pad to component, trace to via) are at the same temperature, and the resulting thermocouple voltage that may develop is canceled out. In that sense, it is also recommended to have any required vias within a differential pair to be close together to ensure good thermal coupling between them. For the same reason, any connection points on the PCB should be at same temperature, also the sense pads or pins of the shunt resistor should be at the same temperature to minimize thermocouple voltages that lead to offset errors. Symmetric heat dissipation of the shunt along

## ADBMS2950B

the horizontal axis (direction of the current flow according to the figures in this chapter) helps to achieve this goal.

The differential sense lines must be connected as short as possible to the sense resistor, in the example soldered to the bottom side of the PCB. The GND connection of the shunt must be done directly at the shunt's GND pad to the PCB GND plane. This ensures separation of the GND currents from the sense lines and avoids false differential signals. The low impedance of the GND connection ensures minimum GND shift in the presence of AC GND currents that appear as a common mode signal on the input, which could translate to a

## Data Sheet

differential signal. In typical applications, the high voltage resistive dividers cause DC GND currents. Whereas any voltage transients between the high voltage and the chassis-GND network causes AC currents across the shunt resistor's ground connection to charge the (parasitic) capacitance of all isolation components. A typical event causing such voltage transients is the closing of the first high voltage link contactor before the precharging starts. This event suddenly connects Y-capacitors and parasitic capacitors to the HV battery leading to recharging of all capacitors between chassis-GND and the HV network. Besides that, the power electronics of the inverter and other components cause chassis ground to HV network noise.

Figure 51. Current Sense Input Filtering Schematic

<!-- image -->

Figure 52. Surface Mounted Shunt

<!-- image -->

Figure 53. Surface Mounted Shunt Kelvin-Sense Connection

<!-- image -->

Figure 54. Surface Mounted Shunt Layout TOP Layer

<!-- image -->

Figure 55. Surface Mounted Shunt Layout IN1 Layer

<!-- image -->

## ADBMS2950B

Figure 56. Surface Mounted Shunt Layout IN2 Layer

<!-- image -->

Figure 57. Surface Mounted Shunt Layout BOT Layer

<!-- image -->

Figure 58. Surface Mounted Shunt Layout Solder Paste

<!-- image -->

shunt resistance. It can be detected through the OC3 measurements only above a minimum current level.

To avoid this, a minimum resistance between the shunt and the additional protection and filtering components can be ensured. In the failure case, the measured battery current is divided through the shunt resistance (RSHUNT) and the fault resistance (RFLT). The current through the fault part can be considered negligible if it is less than 0.01%, this yields a maximum tolerable fault resistance of:

RFLT ≥ RSHUNT ÷ 0.01%

Assuming a typical shunt resistance of 50 µΩ the RFLT must be above 0.5 Ω. Discrete external resistors (REXT) can be added right in front of the connector pins to ensure this minimum resistance. To make sure that the additional offset error due to this resistance together with the current sense pin leakage currents is below 0.1 µV , the maximum REXT is calculated worst case according:

<!-- formula-not-decoded -->

This assumes IxA and SxA both source 3 nA and IxB sinks 3 nA, or on an average the current through REXT is 1.5 times the worst-case leakage current. In reality, this is very unexpected to happen, but as the maximum resistance is well above the minimum requirement, it provides a comfortable choice of possible resistor values, for example, standard 3.3 or 4.7 Ω make a good choice with enough headroom to both limits.

## Wired Shunt Interface

In the case of wire-connected remote shunt applications, an additional external filter and protection components may be required, as shown in Figure 59 and Figure 60. Common-mode chokes with the following common mode capacitors, typical range 1 nF to 10 nF, adjusted for best filtering performance at required frequencies, are recommended to be placed. Optionally, TVS devices can be placed at the shunt connector pins for increased ESD protection. Small value differential capacitors can be placed between the current sense pin pairs for additional high frequency filtering. As short as possible, cables with twisted sense pairs must be used. The cable length should not exceed 30 cm in typical applications.

Those measures allow for additional filtering of noise injected into the wires. Whenever possible, it is recommended to solder the shunt resistor directly to the PCB with minimum signal trace length between shunt and IC as shown in the Current Sense Layout Recommendation section.

Failure modes of components placed in parallel to the shunt or from any shunt sense pin to GND must be considered. Faults that alter the shunt resistance may not be detectable at small currents. The integrated open-wire current sources do not detect shorts after the filter resistors (shown in Figure 59 left to the RC filters connect to the IC pins). The I1 vs. I2 comparison diagnostic does not detect a fault at the I3 inputs that alters the

## Data Sheet

## ADBMS2950B

Figure 59. Wired Shunt Interface Using Three Current-Sense Pairs and Two NTC/GND Pairs

<!-- image -->

Figure 60. Wired Shunt Interface Using Two Current-Sense Pairs and Two NTC/GND Pairs

<!-- image -->

## Current-Sense Channel Depopulation

The three-channel concept ensures two-channel redundancy for safe overcurrent signaling and pyrofuse ignition, and twochannel redundancy to avoid unintended overcurrent signaling and pyrofuse ignition. Where only one of those two safety functions is required, the third overcurrent channel can be disabled by its threshold value. While the OC3TH register is set to 0x00, the OC3 channel permanently signals an alarm. As soon as any of OC1 or OC2 report an overcurrent event, the majority voters trigger the ignition.

While the OC3TH register is set to a maximal value of 0x7F, the OC3 channel never signals an alarm. Then, majority voters do

## ADBMS2950B

not trigger until both the OC1 and OC2 channels report overcurrent events. Either way, the safety function of twochannel redundancy for safe pyrofuse ignition is not degraded. However, with only two channels, the active one must compromise, whether in the case of a single-point fault in the OCxADC channels, the ignition needs to be forced or prevented.

With the 3-channel concept, only the majority voters and all the following function blocks can cause unintended ignition because of single-point faults. If two channels are only used, and the OC3TH is set to 0, additionally, a single point fault preceding the majority voters can cause unintended ignition.

On the other hand, if the OC3TH is set to 0x7F, a single point fault preceding the majority voters can prevent ignition. In any case, the fault is reported to the serial controller through read commands or through the PWM overcurrent output mode coding.

Also, in case only two current sense pairs for the shunt interface are used, the OC3ADC inputs should still be connected as shown in Figure 60 with the recommended external filter components to have support for the OC3ADC measurements including the minimum and maximum tracking registers OC3MIN, OC3MAX. None of this functionality is affected if the overcurrent detection of the 3rd channel is always asserted or de-asserted through the OC3TH setting.

## Shunt Redundancy

In addition to Figure 51 showing a single shunt resistor connected to the redundant inputs of the ADBMS2950/52, the

## Data Sheet

following figures give ideas of dual-shunt implementations in which two separate sense elements are used. The shunt current measurement being a low-side measurement requires the shunt resistor to be grounded one side. To minimize the common mode signal on the current sense inputs, the ground connection is preferably done in the middle of the two sensing parts.

Figure 61. Preferred Dual-Shunt Ground Connection

<!-- image -->

Figure 62 shows a dual series sense element shunt resistor with separated pads on the PCB footprint that connects all three sense pairs and the GND separately. GND and NTCs are connected to the center tap. The center tap must be as small as possible to minimize its impedance (R and L), and in result, the common mode signal. The resistors seen at the (over-) current channels are:

- I1, OC1: Rsns1

- I2, OC2: Rsns2

- OC3: Rsns2

Ideally, if the mechanical design is symmetric, both sense elements have roughly the same nominal value. The temperature gradient across the shunt (across the Y-axis in Figure 62) must be minimized to reduce thermocouple voltages.

Figure 62. Dual Series Sense Resistor Shunt, All OCx with Same Gain

<!-- image -->

Figure 63 shows the same dual series sense element shunt resistor as Figure 62 but with the OC3 input connected across both sense resistors. The resistors seen at the (over-) current channels are:

- I1, OC1: Rsns1
- I2, OC2: Rsns2
- OC3: Rsns1 + Rsns2 + Zcenter

Assuming the two sense resistors are roughly the same (Rsns1 ~ Rsns2), the OC3 input has a factor two current gains compared to OC1 and OC2. To adjust for this, the OC1 and OC2 channels can be configured to gain = 2 through setting OC1GC and OC2GC.

Zcenter being the impedance (R + L) of the center copper element must be as small as possible not to affect the OC3 channel significantly. Channels I1 and I2 must not be connected across Rsns1 + Rsns2 as the copper element inside the sense path severely impact the accuracy of those high precision inputs.

<!-- image -->

Figure 63. Dual Series Sense Resistor Shunt, OC3 with Current Gain 2x

<!-- image -->

Figure 64 shows a shunt resistor with a center tap allowing to sense a subsection of the shunt. The cutout of the center tap can be adjusted for the channels I2 and OC2 to measure across half the total resistance. The resistors seen at the (over-) current channels are:

- I1, OC1: Rsns
- I2, OC2: ~0.5 × Rsns
- OC3: Rsns

Figure 64. Shunt Resistor with a Center Tap

<!-- image -->

SINC filter of the ADC and the typical external first-order RC Filter, a cut-off frequency of 1 kHz or smaller is recommended. Additional digital filtering is applied in the accumulated IxADC and VBxADC result registers, IxACC and VBxACC, which can be used for matched converted and filtered battery pack current and voltage measurements, which allows the calculation of the battery pack impedance.

## VOLTAGE SENSE INPUTS

The V1 to V10, VBAT1, and VBAT2 inputs are typically connected to high-impedance sources such as resistive highvoltage dividers and NTC temperature sensors. The buffered high-impedance inputs of the ADBMS2950B minimize errors due to the source impedance and decouple the ADCs sampling currents.

For the continuously converting VBAT inputs, the external analog filter must remove signal components at frequencies at least above half the sampling frequency (0.5 × 4.1 MHz ~2 MHz). However, due to limited damping of the first-order

The voltage inputs V1 to V10 are measured on-demand instead of continuously, and the update rate is defined by the host that triggers the conversions. For those inputs, a lower cut-off frequency of the external filter may be required, which depends on the frequency spectrum of the system noise and the accuracy requirements. Long external time constants extend the time it

## ADBMS2950B

takes to perform open-wire diagnostics, which is normally not required.

In typical applications with source impedances in the range of 5 kΩ to 10 kΩ, a filter capacitor of 100 nF is a good compromise and provides (together with the external resistor) adequate ESD protection in addition to the IC internal protection diodes. A series resistor can be placed between the source and the IC pin with the filter capacitor to improve the filtering and protection further. For NTC temperature sensors, this also reduces the dependency of the filter performance on the NTC temperature. The chapter Digital Filtering gives additional details on the transfer functions of the digital filters and the impact of the external analog RC filters.

## HIGH-VOLTAGE RESISTIVE DIVIDERS

Any high voltage to be measured by the ADBMS2950B must be divided down and optionally biased through VREF1P25 to move it into the IC's input-pin voltage range (see Table 3 and Table 5). Typically, the upper resistor consists of several resistors connected in series to minimize the voltage drop and power dissipation of individual resistors and to meet creepage and clearance requirements and to prevent further damage to the BMS if the resistors fail in short-circuit.

Figure 65 and Figure 66 show the examples of the measurement by the VxADC or the VBxADC through Vx or the VBATx inputs. In these figures, PTOT represents the total power that is dissipated in the resistors while I represents the current flowing through these resistors.

Even though the battery voltage measurements are typically positive, it is also possible to bias the resistive divider connected to VBATx to the VREF1P25 pin, which allows the measurements below GND through the VBxADC inputs as shown in Figure 69.

Figure 65. High-Ohmic Resistive Divider for Measuring 1000V Battery through V1. Can be Applied to Any Vx, VBATx Input

<!-- image -->

## Data Sheet

Figure 66. High-Ohmic Resistive Divider for Measuring ±1000V through V1 Using VREF1P25. Can be Applied to Any Vx, VBATx Input

<!-- image -->

The resistive divider imposes a gain factor on the measured signal:

<!-- formula-not-decoded -->

In case the divider is connected to GND, the high voltage is calculated from the single-ended ADC measurements VADC,SGND of the voltage at the low-side resistor Rlow vs. SGND in the following way:

<!-- formula-not-decoded -->

In case the divider is connected to VREF1P25, the high voltage is calculated from the differential ADC measurements VADC,VREF1P25 of the voltage at the low-side resistor Rlow vs. VREF1P25 in the following way:

<!-- formula-not-decoded -->

The VREF1P25 pin voltage can vary slightly, and must therefore be measured periodically by the AUX ADC, and close in time to the Vx measurements. If not all Vx pins are used, it is recommended to connect the VREF1P25 pin externally to one of the unused Vx pins, considering the order of the VxADC multichannel measurements. This allows measurement of the VREF1P25 voltage close in time to the differential Vx measurements vs. VREF1P25. In addition, it allows the diagnosis of faults on the VREF1P25 pin.

As any resistive divider is affected by static tolerances, it can be calibrated by applying a known input signal and calculating the resistive divider factor g from the ADC measurement. An optional external EEPROM can be used as a non-volatile storage for those calibration factors.

The typical application Figure 46 shows the LINK voltage (LINK+, LINK-) measured through two resistive dividers biased to VREF1P25. For most applications, only LINK- can be below BAT- when both contactors open, and the LINK side Cx capacitor remains charged for a while. The Cx capacitor is biased through the two dividers towards VREF1P25, initially yielding LINK- to ~-0.5 × VBAT and LINK+ to ~+0.5 × VBAT, while it is discharged through the resistive dividers. LINK+

## Data Sheet

stays above BAT- all the time, thus it is not required to bias the connected divider to VREF1P25, instead, it can also be connected to GND (BAT-) directly according to Figure 65.

For Figure 46, the differential LINK voltage (LINK+ vs. LINK-) is measured and calculated as following:

VLINK+ = VV2,VREF1P25 ÷ gLP + VREF1P25

VLINK- = VV4,VREF1P25 ÷ gLN + VREF1P25

<!-- formula-not-decoded -->

where gLP is the gain factor of the LINK+ divider and gLN the gain factor of the LINK- divider.

If both dividers have the same ratio, gLP = gLN = g the equation can be simplified:

<!-- formula-not-decoded -->

Which allows a single differential measurement of VV2,V4, V2 vs. V4 (VS2 set to 0b11) that yields the differential LINK voltage.

## Input Leakage Current

All voltage inputs of the ADBMS2950B are buffered but still exhibit some leakage current. The input leakage current ILEAK during measurements of any pin is listed under the Input Current entry in Table 3 and Table 5. The source impedance RSRC of the resistive divider multiplied by ILEAK defines the additional absolute voltage error at the ADC input. With a source impedance of 10 kΩ this error is in the range of 150 μV and translates with the inverse of the resistor-divider gain factor g to a measurement error on the high side. At an ADC input signal of 1.0V , it translates to a gain error of less than 0.02% and can usually be neglected.

The input leakage current ILEAK changes with input signals and over temperature but stays within the limits listed in Table 3 and Table 5. It can be calibrated only partially during a postproduction board test procedure. The worst-case error is calculated as follows.

Source impedance:

<!-- formula-not-decoded -->

Absolute measurement error at ADC input due to pin leakage current:

<!-- formula-not-decoded -->

Absolute measurement error at high-voltage input due to pin leakage current:

eabs,HV = eabs,ADC ÷ g

Note that the pin V4 has a higher maximum input-leakage current specification.

## VBATx Connection Options

Figure 67, Figure 68, Figure 69, and Figure 70 show all possible configuration options of the VBATx input connections.

## ADBMS2950B

<!-- image -->

Figure 67. VBATx Configuration for Unipolar Differential Measurement

Figure 68. VBATx Configuration for Unipolar Single-Ended Redundant Measurement

<!-- image -->

Figure 69. VBATx Configuration for Bipolar Differential Measurement

<!-- image -->

Figure 70 is shown for completeness on the VBATx connection options. It is possible from a functional perspective with the downside that single-ended measurements (here, VBATx vs. GND) at inputs connected to dividers that are biased to VREF1P25 suffer from measurement errors in noisy environments.

Any measurement error of VREF1P25 (for example, deviation in voltage between the time of the Vx and the VREF1P25

## ADBMS2950B

conversion) that can be introduced by system noise or AC loads on the VREF1P25 pin scale with the inverse ratio of the divider to a high-voltage measurement error.

Instead, when the voltage is measured differentially across the low-side resistor Rlow (Vx vs. VREF1P25 or VBAT1 vs. VBAT2, where VBAT2 is connected to VREF1P25, see Figure 69), the measurement error of VREF1P25 translates only 1:1 to highvoltage measurement error.

Figure 70. VBATx Configuration for Bipolar Single-Ended Redundant Measurement. Note Limitations in Noisy Environments

<!-- image -->

Table 88. Overview of Digital FIR filters of ADBMS2950B

| ADC            | Filter Output Rate   | Filter Function             | f c,dig   | f c,ana   | Continuous                   |
|----------------|----------------------|-----------------------------|-----------|-----------|------------------------------|
| OCxADC         | 16 kHz               | 1st order Sinc              | 7.2 kHz   | 4.5 kHz   | Yes                          |
| VxADC, AUX ADC | 3.8 kHz              | 1st order Sinc              | 1.7 kHz   | 0.11 kHz  | Single-shot through ADV, ADX |
| IxADC, VBxADC  | 1 kHz                | 1st order Sinc              | 0.44 kHz  | 0.44 kHz  | Yes                          |
| IxADC, VBxADC  | 250 Hz               | Sumof 4 samples (ACCI = 0)  | 111 Hz    | 111 Hz    | Yes                          |
| IxADC, VBxADC  | 125 Hz               | Sumof 8 samples (ACCI = 1)  | 55 Hz     | 55 Hz     | Yes                          |
| IxADC, VBxADC  | 83.3 Hz              | Sumof 12 samples (ACCI = 2) | 37 Hz     | 37 Hz     | Yes                          |
| IxADC, VBxADC  | 62.5 Hz              | Sumof 16 samples (ACCI = 3) | 28 Hz     | 28 Hz     | Yes                          |
| IxADC, VBxADC  | 50 Hz                | Sumof 20 samples (ACCI = 4) | 22 Hz     | 22 Hz     | Yes                          |
| IxADC, VBxADC  | 41.7 Hz              | Sumof 24 samples (ACCI = 5) | 18 Hz     | 18 Hz     | Yes                          |
| IxADC, VBxADC  | 35.7 Hz              | Sumof 28 samples (ACCI = 6) | 16 Hz     | 16 Hz     | Yes                          |
| IxADC, VBxADC  | 31.2 Hz              | Sumof 32 samples (ACCI = 7) | 14 Hz     | 14 Hz     | Yes                          |

Only the preamplifiers of the IxADC signal path have a lowpass characteristic, which is shown as PA in Figure 72 and Figure 73. Other buffers and preamplifiers have a flat filter response in the frequency range of interest and are not shown for this reason. The transfer functions are shown for all preceding filter blocks connected in series as they appear in the signal data path. RC is the external analog RC-Filter only, PA (pre-amplifier) is the PA in series with the external RC and 1 ms is the external RC in series with the PA in series with the ADC at an update rate of 1 kHz. In the legend text, the 3 dB corner frequency is shown inside brackets.

## OCxADC Filter Transfer Function

Figure 71 shows the transfer function of the OCxADC signal path with and without the typical external current sense RC filter at a continuous conversion rate of 16 kHz.

## DIGITAL FILTERING

Table 88 summarizes the options of digital filtering with the ADBMS2950B. All are finite impulse response filters (FIR). The &amp;minu;3 dB corner frequencies are given for the digital filter outputs without (fc,dig) and with (fc,ana) the preceding analog RC Filters, which are added with typical values to the filter response figures shown in this chapter. In most cases, both values are identical because of the digital filter being dominant.

In Table 88, the column Continuous shows whether the ADC can convert continuously providing back-to-back conversion results without measurement holes. The IxADCs and VBxADCs are recommended to operate in this mode, also see the chapter Continuous Sampling and Coulomb Counting. The VxADCs and AUX ADC convert on demand only. New conversions can be triggered after all requested channels are converted (see Table 58). Previous conversion results can be read while a new conversion is ongoing, which allows the implementation of high update rates if required.

## Data Sheet

Figure 71. OCxADC Filter Transfer Function

<!-- image -->

a continuous nominal update rate of 1 kHz and the accumulated results for all possible values of ACCN.

## IxADC Filter Transfer Functions

Figure 72 and Figure 73 show the transfer function of the typical external current sense RC filter, the following IxADC at

Figure 72. IxADC Filter Transfer Function for ACCN 4 to 16

<!-- image -->

Figure 73. IxADC Filter Transfer Function for ACCN 20 to 32

<!-- image -->

Figure 74, Figure 75, and Figure 76 show the transfer function of the IxADC without an external RC filter but with the lowpass characteristic of the PA only at a continuous nominal

update rate of 1 kHz and the accumulated results for all ACCI (and the resulting ACCN) settings.

Figure 74. IxADC 1 ms Filter Transfer Function Without External RC

<!-- image -->

## ADBMS2950B

Figure 75. IxADC Filter Transfer Function for ACCN 4 to 16 Without External RC

<!-- image -->

Figure 76. IxADC Filter Transfer Function for ACCN 20 to 32 Without External RC

<!-- image -->

## VBxADC Filter Transfer Function

Figure 77 and Figure 78 show the transfer function of the typical external voltage sense RC filter, the following VBxADC at a continuous nominal update rate of 1 kHz, and the accumulated results for all possible values of ACCN. Note that the shown resistance value of the RC filter is the equivalent source impedance, which is the parallel combination of the two resistor values of the high-voltage divider plus the value of an optional series resistance before the capacitor at the IC input pin.

## Data Sheet

## ADBMS2950B

Figure 77. VBxADC Filter Transfer Function for ACCN 4 to 16

<!-- image -->

## ADBMS2950B

## Data Sheet

Figure 78. VBxADC Filter Transfer Function for ACCN 20 to 32

<!-- image -->

plus the value of an optional series resistance before the capacitor at the IC input pin. For the VxADC, it is recommended to set the external RC filter to a significant lower corner frequency compared to the IxADC and VBxADC inputs because it does not operate continuously on a single analog input pin but is triggered on demand, and the host must round robin over all the required inputs. If required, the filtering of the VxADC can be adjusted to match the IxADC 1 ms (0.44 kHz) or ACCN4 (0.11 kHz) response as shown following.

## VxADC Filter Transfer Function

Figure 79 shows the transfer function of the VxADC signal path with and without typical external voltage sense RC filter at a conversion time of 0.27 ms. The given resistance value of the RC filters is the equivalent source impedance, which is the parallel combination of the two resistor values of the highvoltage divider or the NTC resistance and the reference resistor

## Data Sheet

## ADBMS2950B

Figure 79. VxADC Filter Transfer Function

<!-- image -->

If required, the host can synchronize a VxADC measurement to the IxADC and VBxADC through alignment of the ADV and ADIx commands as shown in Figure 80. As the I1ADC and VB1ADC are recommended to operate continuously to provide back-to-back conversion results for better filtering and precise coulomb counting, single-shot battery current, and voltage measurements must be performed with the second channel through ADI2. Alternatively, it is always possible to perform single-shot measurements on the VxADC only and read synchronous I1ADC and VxADC conversion results. The following sequence shows the reading of the 1 ms conversion result of the continuously operating I1ADC that is acquired closest to the time when the ADV command is sent.

At time t = 0:

- SNAP
- ADV
- RDI or RDIVB1 to get I1
- RDFLAG to get I1CNTPHA
- UNSNAP

At time t = 1 ms:

- SNAP
- RDI or RDIVB1 to get I1
- RDFLAG to get I1CNTPHA
- UNSNAP

Using the information from I1CNTPHA, the host controller can decide which I1ADC conversion is acquired closest to the VxADC measurement.

Figure 80. Command Timing Sequence to Synchronize I2ADC and VxADC Measurements

<!-- image -->

Figure 81 shows the transfer function of averaging multiple single-shot conversions over a longer time window. The example assumes that the host measures a channel once every 5 ms and calculates the average of 20 samples leading to the average of the last 100 ms. The multi-measurement of all channels can be done within 2.39 ms, see Table 58, so that it is

## ADBMS2950B

possible to calculate a moving average for all channels in the described fashion. Note that, at higher frequencies, the filter response is limited by the RC filter and the response of the VxADC due to its non-continuous operation.

Figure 81. VxADC with Average Filter Transfer Function

<!-- image -->

## CONTINUOUS SAMPLING AND COULOMB COUNTING

The precise current measurement ADCs of the ADBMS2950B can be used to perform coulomb counting, which is often used to calculate the state-of-charge of the battery. To measure the charge that is flowing into or out of the battery precisely, a user requires:

- Lossless and continuous sampling of the current sense input.
- Equal sample weighting and true average measurement.
- Precise time measurement to integrate the current measurements into charge.

The ADBMS2950B provides all functionalities to fulfill those requirements. The first order delta-sigma ADCs have an oversampling rate of 4.1 MHz, can run continuously on the current (and VBAT) channels, and weigh all samples equally providing the exact average of the input signal over the conversion window, which is either 1 ms (Ix registers) or ACCN × 1 ms (IxACC registers - also see ACCI configuration).

The host controller can decide to either read the Ix or the IxACC registers continuously depending on the current measurement period requirement.

In both cases, there is no loss of sampling time (no holes) on the inputs. The host controller can synchronize to the continuously updated conversion result registers by reading the conversion (phase) counter I1CNT, I1PHA.

The I1CNT register increments by one with every 1 ms conversion result. Assuming an ACCN setting of 8 (ACCI = 1), with the 8th of those 1 ms conversion results, the accumulated registers (IxACC) are updated with the sum of 8 conversions. Consequently, this happens every time the I1CNT value reports a multiple of 8.

The conversion phase counter I1PHA provides additional resolution by adding 4 sub-counts per I1CNT count. If the I1CNT, I1PHA counters are treated as a single counter (I1CNTPHA[12:0]), the 1 ms conversion results are updated every time the host reads 0, 4, 8, 12, …. and the 8 ms accumulated conversion results (assuming ACCI = 1) are updated every time the host reads 0, 32, 64, 96, … For any value in between, the conversion result register is not updated, giving the host enough time to read the results. The snap and unsnap commands ensure coherent reading of the I1CNTPHA and Ix (or IxACC) registers retrieved via separate read commands.

## Lossless Continuous Conversion Reading

This chapter shows a procedure to read every 8 ms accumulated conversion (IxACC update rate for ACCN = 8) without missing any result. Not to miss any conversion, the host must read at a period that is shorter than the shortest possible update rate of the IxACC registers, which occurs at the maximum specified IC oscillator frequency. The oscillator frequency of the ADBMS2950B is specified to be within ±10% over the fulloperating temperature range. Consequently, the host must read every 7.2 ms or faster (the IxACC registers are updated nominally every 8 ms for ACCN = 8).

Table 89 shows the timings of the I1CNT and number of IxACC conversions (CntACC) acquired, assuming a host reads every 7 ms. The values I1CNT and CntACC are shown for a device running at minimum (MIN), nominal (NOM), and

## Data Sheet

maximum (MAX) oscillator frequency. Every time CntACC increments by one, a new IxACC result appears, assuming the host implements the following read sequence:

- SNAP (to freeze all the result registers)
- RDFLAG (to get I1CNT, I1PHA)
- RDIACC (to get the accumulated conversion results)
- … (any other readings, for example, VBxACC results)
- UNSNAP (to un-freeze all result registers)

This sequence is equivalent to:

- UNSNAP (to un-freeze all result registers)
- SNAP (to freeze all the result registers)
- RDFLAG (to get I1CNT, I1PHA)
- RDIACC (to get the accumulated conversion results)
- … (any other readings without final unsnap)

The advantage of the second sequence is that there is an intrinsic check that all commands are executed correctly without relying on the following read command that checks the command counter increment after the final unsnap of the first sequence. The initial commands unsnap, snap used here ensure a new snapshot of the result registers is taken before executing the read commands. When implementing this approach, the unsnap, snap commands must precede any other sequences that read results marked with the FRZ identify in the register and bit description tables. This ensures coherent data reading, for details, see the Snapshot Commands section.

In both the sequences, the snapshot commands ensure that I1CNT, I1PHA, and conversion results are read coherently allowing the host to decide for every dataset if a new result is read (CntACC incremented by one in Table 89) or if the dataset is old and can be discarded. For example, Table 89 shows the column CntACC-MIN did not increment between #4 and #5 remaining at 3 conversions. Still, a hypothetical device running at the nominal oscillator frequency has already provided the 4th sample as shown in column CntACC-NOM.

Table 89 also shows the I1CNT rolling over to 0 after the maximum value, which is 2 11 - 1 = 2047. The host controller must take this into account when evaluating I1CNT. A simple

## ADBMS2950B

way is to check if I1CNT is bigger or equal than N × 8, where N initially starts at 1, is incremented by 1 every time the check is true (new conversion) and is reset to 0 every time the current read I1CNT value is smaller than the previous one.

After starting continuous measurement, set initial values:

```
INIT N = 1 I1CNT_OLD = 0 ENDINIT
```

In the measurement loop, evaluate the dataset read through the above-described sequence (ReadSequence) and do the following:

```
LOOP ReadSequence() IF I1CNT < I1CNT_OLD N = 0 ENDIF IF I1CNT ≥ N × 8 N = N + 1 // process new conversions read from IxACC (and VBxACC) ELSE // Old conversion was already read // nothing to do I1CNT_OLD = I1CNT ENDIF ENDLOOP
```

Note that this example assumes ACCN = 8 and must be adjusted for different settings of ACCI.

Table 89 assumes that the host activates the continuous current measurement (on I1ADC or I1ADC and I2ADC) through ADI1 command at the time t = 0s. The first reading happens directly afterwards and subsequently every 7 ms. # is the index of the read sequence.

Table 89. I1CNT and IxACC Update Timing for Minimum, Nominal and Maximum Oscillator Frequency Assuming ACCN = 8

| #   | t [s]   | I1CNT-MIN   | I1CNT-NOM   | I1CNT-MAX   | CntACC-MIN   | CntACC-NOM   | CntACC-MAX   |
|-----|---------|-------------|-------------|-------------|--------------|--------------|--------------|
| 0   | 0       | 0           | 0           | 0           | 0            | 0            | 0            |
| 1   | 0.007   | 5           | 6           | 7           | 0            | 0            | 0            |
| 2   | 0.014   | 12          | 13          | 14          | 1            | 1            | 1            |
| 3   | 0.021   | 18          | 20          | 22          | 2            | 2            | 2            |
| 4   | 0.028   | 24          | 27          | 30          | 3            | 3            | 3            |
| 5   | 0.035   | 31          | 34          | 37          | 3            | 4            | 4            |
| 6   | 0.042   | 37          | 41          | 45          | 4            | 5            | 5            |
| ... |         |             |             |             |              |              |              |
| 34  | 0.238   | 213         | 237         | 261         | 26           | 29           | 32           |
| 35  | 0.245   | 220         | 244         | 268         | 27           | 30           | 33           |
| 36  | 0.252   | 226         | 251         | 276         | 28           | 31           | 34           |
| 37  | 0.259   | 232         | 258         | 284         | 29           | 32           | 35           |
| 38  | 0.266   | 238         | 265         | 292         | 29           | 33           | 36           |
| ... |         |             |             |             |              |              |              |

## ADBMS2950B

## Data Sheet

| #   | t [s]   | I1CNT-MIN   | I1CNT-NOM   | I1CNT-MAX   | CntACC-MIN   | CntACC-NOM   | CntACC-MAX   |
|-----|---------|-------------|-------------|-------------|--------------|--------------|--------------|
| 264 | 1.848   | 1663        | 1847        | 2032        | 207          | 230          | 254          |
| 265 | 1.855   | 1669        | 1854        | 2040        | 208          | 231          | 255          |
| 266 | 1.862   | 1675        | 1861        | 0           | 209          | 232          | 256          |
| 267 | 1.869   | 1682        | 1868        | 7           | 210          | 233          | 256          |
| 268 | 1.876   | 1688        | 1875        | 15          | 211          | 234          | 257          |
| ... |         |             |             |             |              |              |              |
| 291 | 2.037   | 1833        | 2036        | 192         | 229          | 254          | 280          |
| 292 | 2.044   | 1839        | 2043        | 200         | 229          | 255          | 281          |
| 293 | 2.051   | 1845        | 2           | 208         | 230          | 256          | 282          |
| 294 | 2.058   | 1852        | 9           | 215         | 231          | 257          | 282          |
| 295 | 2.065   | 1858        | 16          | 223         | 232          | 258          | 283          |
| ... |         |             |             |             |              |              |              |
| 324 | 2.268   | 2041        | 219         | 446         | 255          | 283          | 311          |
| 325 | 2.275   | 2047        | 226         | 454         | 255          | 284          | 312          |
| 326 | 2.282   | 5           | 233         | 462         | 256          | 285          | 313          |
| 327 | 2.289   | 12          | 240         | 469         | 257          | 286          | 314          |
| 328 | 2.296   | 18          | 247         | 477         | 258          | 286          | 315          |

## Measuring the ADC Conversion Time

The oscillator of the ADBMS2950B has a part-to-part variation and changes over temperature. The specified limit is ±10%. To allow precise coulomb counting, the ADC conversion time can be measured using the I1CNTPHA readings and a reference timer in the host controller.

The conversion time must be measured at a rate that is still fast enough to track the oscillator drift over temperature but not too fast to have sufficient resolution and to avoid errors due to

## Table 90. Calculating tCONV from I1CNT

timing uncertainties. For example, variations in the time at which the reference timer is captured and when SPI transactions happen. Reasonable update periods are in the range of 100 ms to 1000 ms.

Taking the data from Table 89 and 252 ms as an example period, the conversion time is calculated as follows:

<!-- formula-not-decoded -->

The resulting conversion time is shown in Table 90 for hypothetical ICs running at minimum (tCONV,MAX), nominal (tCONV,NOM), and maximum (tCONV,MIN) oscillator frequency.

|   # |   t [s] |   I1CNT MIN |   I1CNT NOM |   I1CNT MAX |   t CONV,MAX [ms] |   t CONV,NOM [ms] |   t CONV,MIN [ms] |
|-----|---------|-------------|-------------|-------------|-------------------|-------------------|-------------------|
|  34 |   0.238 |         213 |         237 |         261 |              8.94 |              8.03 |              7.3  |
|  35 |   0.245 |         220 |         244 |         268 |              8.91 |              8.03 |              7.31 |
|  36 |   0.252 |         226 |         251 |         276 |              8.92 |              8.03 |              7.3  |
|  37 |   0.259 |         232 |         258 |         284 |              8.93 |              8.03 |              7.3  |
|  38 |   0.266 |         238 |         265 |         292 |              8.94 |              8.03 |              7.29 |

For maximum resolution and highest precision, it is recommended to take I1PHA into account and do the calculation by using the 13-bit I1CNTPHA counter:

<!-- formula-not-decoded -->

Because the conversion time measurement must be executed continuously, and the I1CNTPHA counter roll-over after ~2 seconds, the calculation must be done using the differences of I1CNTPHA readings between the beginning and the end of the measurement window. When a roll-over is detected (new I1CNTPHA reading smaller than previous reading), the host must correct the difference by adding 2 13 = 8192.

## Calculating Charge

Once continuous sample data is read, and the conversion time is measured, the charge (Q) per sample can be calculated as follows:

Q = tCONV × IxACC ÷ ACCN × IxADCLSB

Typically, the coulomb counting is done using integers. In this case, the ADC conversion word can be scaled with the deviation from the nominal ACCN × 1 ms conversion time. Similar scaling is also done to correct for the shunt's nominal resistance value (gcShuntNominal) and to correct the temperature dependent drift of the shunt (gcShuntTC).

Q = gcShuntNominal × gcShuntTC(TSHUNT) × tCONV × IxACC ÷ ACCN

The charge (Q) can now be accumulated to the coulomb counter (CC) as follows:

<!-- formula-not-decoded -->

The LSB size of this integer based coulomb counter is:

1 μV ÷ (ACCN × RSNS,NOM) × (ACCN × 1 ms) = 1 μV × 1 ms ÷ RSNS,NOM

## Data Sheet

## FOOTPRINT RECOMMENDATION

The recommended land pattern for the ADBMS2950B is shown in Figure 83. For optimum thermal connection of the IC to the PCB, it is recommended to add several vias into the exposed pad. To reduce solder voids and to avoid excessive creeping of the solder paste into the vias, the solder paste must be applied in a checkerboard style interleaved with the vias as shown in Figure 82.

Figure 82. ADBMS2950B Footprint, Distribution of Vias, and Solder Paste

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

## NOTE:

- 1.DRAWINGNOTTOSCALE
- 2.ALLDIMENSIONSAREINMILLIMETERS
- 3.DIMENSIONSOFEXPOSEDPADONBOTTOMOFPACKAGEDONOTINCLUDE
- 4.SHADEDAREAISONLYAREFERENCEFORPIN1LOCATIONONTHETOPANDBOTTOMOFPACKAGE

BOTTOMVIEW-EXPOSEDPAD

<!-- image -->

<!-- image -->

RECOMMENDEDSOLDERPADPITCHANDDIMENSIONS

APPLYSOLDERMASKTOAREASTHATARENOTSOLDERED

Figure 83. Outline Dimensions

## Data Sheet

## ORDERING GUIDE

## Table 91.

| Model             | Temperature Range   | Package Description    | Package Option   |
|-------------------|---------------------|------------------------|------------------|
| ADBMS2950BCCSZ    | -40°C to 125°C      | 48-Lead Plastic SS QFN | 05-08-7031       |
| ADBMS2950BCCSZ-RL | -40°C to 125°C      | 48-Lead Plastic SS QFN | 05-08-7031       |

<!-- image -->

<!-- image -->