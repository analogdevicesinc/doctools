<!-- lastmod 2022-01-25 -->
<!-- image -->

Known Good Die

## FEATURES

- 16-bit resolution with no missing codes
- 8-channel multiplexer with choice of inputs
- Unipolar single-ended
- Differential (GND sense)
- Pseudobipolar
- Throughput: 250 kSPS
- INL: -2.5 LSB minimum, ±0.4 LSB typical, +2.5 LSB maximum
- Dynamic range: 93.8 dB
- SINAD: 91 dB typical at 20 kHz, V REF = 5 V
- THD: -100 dB at 20 kHz
- Analog input range: 0 V to V REF with V REF up to VDD
- Multiple reference types
- Internal selectable 2.5 V or 4.096 V
- External buffered (up to 4.096 V)
- External (up to VDD)
- Internal temperature sensor (TEMP)
- Channel sequencer, selectable 1-pole filter, busy indicator
- No pipeline delay, SAR architecture
- Single-supply 2.3 V to 5.5 V operation with 1.8 V to 5.5 V logic interface
- Serial interface compatible with SPI, MICROWIRE, QSPI, and DSP
- Power dissipation
- 3.5 mW typical at 2.5 V, 200 kSPS
- 12.5 mW typical at 5 V, 250 kSPS
- Standby current: 50 nA
- Low cost grade available
- Known Good Die (KGD): these die are fully guaranteed to data sheet specifications

## APPLICATIONS

- Multichannel system monitoring
- Battery-powered equipment
- Medical instruments: ECG/EKG
- Mobile communications: GPS
- Power line monitoring
- Data acquisition
- Seismic data acquisition systems
- Instrumentation
- Process control

Rev. E

[DOCUMENT FEEDBACK](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=AD7689-KGD.pdf&product=AD7689-KGD&rev=E)

## [AD7689-KGD](http://www.analog.com/AD7689-KGD)

## 16-Bit, 8-Channel, 250 kSPS PulSAR ADC

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Composite View

<!-- image -->

## GENERAL DESCRIPTION

The AD7689-KGD is an 8-channel, 16-bit, charge redistribution successive approximation register (SAR) analog-to-digital converter (ADC) that operates from a single power supply, VDD.

The AD7689-KGD contains all components for use in a multi-channel, low power data acquisition system, including a true 16-bit SAR ADC with no missing codes; an 8-channel low crosstalk multiplexer that is useful for configuring the inputs as single-ended (with or without ground sense), differential, or bipolar; an internal low drift reference (selectable 2.5 V or 4.096 V) and buffer; a temperature sensor; a selectable one-pole filter; and a sequencer that is useful when channels are continuously scanned in order.

The AD7689-KGD uses a simple SPI interface for writing to the configuration register and receiving conversion results. The SPI interface uses a separate supply, VIO, which is set to the host logic level. Power dissipation scales with throughput.

The AD7689-KGD is specified from -40°C to +125°C.

Additional application and technical information can be found in the AD7689 data sheet.

| Data Sheet AD7689-KGD                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Data Sheet AD7689-KGD                                                                                                                                                                                                                                                                                                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TABLE OF CONTENTS                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | TABLE OF CONTENTS                                                                                                                                                                                                                                                                                                                                          |
| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 Timing Specifications......................................... 5 Absolute Maximum Ratings...................................8 | ESD Caution.......................................................8 Pin Configuration and Function Descriptions........ 9 Outline Dimensions............................................. 10 Die Specifications and Assembly Recommendations......................................... 10 Ordering Guide.................................................10 |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | REVISION HISTORY                                                                                                                                                                                                                                                                                                                                           |

## SPECIFICATIONS

VDD = 2.3 V to 5.5 V, VIO = 1.8 V to VDD, REF voltage (V REF ) = VDD, all specifications T MIN to T MAX , unless otherwise noted.

Table 1.

| Parameter                                    | Test Conditions/Comments                                                                                        | Min            | Typ      | Max            | Unit      |
|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------|----------------|----------|----------------|-----------|
| RESOLUTION                                   |                                                                                                                 | 16             |          |                | Bits      |
| ANALOG INPUT                                 |                                                                                                                 |                |          |                |           |
| Voltage Range                                | Unipolar mode                                                                                                   | 0              |          | +V REF         | V         |
|                                              | Bipolar mode                                                                                                    | -V REF /2      |          | +V REF /2      |           |
| Absolute Input Voltage                       | Positive input, unipolar and bipolar modes                                                                      | -0.1           |          | V REF + 0.1    | V         |
|                                              | Negative or COM input, unipolar mode                                                                            | -0.1           |          | +0.1           | V         |
|                                              | Negative or COM input, bipolar mode                                                                             | V REF /2 - 0.1 | V REF /2 | V REF /2 + 0.1 | V         |
| Analog Input Common-Mode Rejection           | Input frequency (f IN ) = 250 kHz                                                                               |                | 68       |                | dB        |
| Ratio (CMRR)                                 |                                                                                                                 |                |          |                |           |
| Conversion Rate                              |                                                                                                                 |                |          |                |           |
| Full Bandwidth 1                             | VDD = 4.5 V to 5.5 V                                                                                            | 0              |          | 250            | kSPS      |
|                                              | VDD = 2.3 V to 4.5 V                                                                                            | 0              |          | 200            | kSPS      |
| ¼ Bandwidth 1                                | VDD = 4.5 V to 5.5 V                                                                                            | 0              |          | 62.5           | kSPS      |
|                                              | VDD = 2.3 V to 4.5 V                                                                                            | 0              |          | 50             | kSPS      |
| Transient Response                           | Full-scale step, full bandwidth                                                                                 |                |          | 1.8            | µs        |
|                                              | Full-scale step, ¼ bandwidth                                                                                    |                |          | 14.5           | µs        |
| ACCURACY                                     |                                                                                                                 |                |          |                |           |
| No Missing Codes                             |                                                                                                                 | 16             |          |                | Bits      |
| Integral Linearity Error                     | T A ≤ 85°C                                                                                                      | -2.5           | ±0.4     | +2.5           | LSB 2     |
|                                              | T A > 85°C                                                                                                      | -3.0           | ±0.4     | +3.0           | LSB 2     |
| Differential Linearity Error                 |                                                                                                                 | -1             | ±0.25    | +2             | LSB 2     |
| Transition Noise                             | REF = VDD = 5 V                                                                                                 |                | 0.5      |                | LSB 2     |
| Gain Error                                   |                                                                                                                 | -24            | ±1       | +24            | LSB 2     |
| Gain Error Match                             |                                                                                                                 | -6             | ±0.5     | +6             | LSB 2     |
| Gain Error Temperature Drift                 |                                                                                                                 |                | ±1       |                | ppm/°C    |
| Offset Error                                 | VDD = 4.5 V to 5.5 V, T A ≤ 85°C                                                                                | -8             | ±1       | +8             | LSB 2     |
|                                              | VDD = 4.5 V to 5.5 V, T A > 85°C                                                                                | -11            |          | +11            | LSB 2     |
|                                              | VDD = 2.3 V to 4.5 V                                                                                            |                | ±5       |                | LSB 2     |
| Offset Error Temperature Drift               |                                                                                                                 |                | ±1       |                |           |
| Sensitivity                                  |                                                                                                                 |                |          |                | ppm/°C    |
| Power Supply                                 | VDD = 5 V ± 5%                                                                                                  |                | ±1.5     |                | LSB 2     |
| AC ACCURACY 3                                |                                                                                                                 |                |          |                |           |
| Dynamic Range                                |                                                                                                                 |                | 93.8     |                | dB 4      |
| Signal-to-Noise Ratio (SNR)                  | f V                                                                                                             |                |          |                |           |
|                                              | IN = 20 kHz, V REF = 5                                                                                          | 88.5           | 91       |                | dB 4      |
|                                              | f IN = 20 kHz, V REF = 4.096 V, internal REF, T A ≤ 85°C                                                        | 87             | 90.5     |                | dB 4      |
|                                              | f IN = 20 kHz, V REF = 4.096 V, internal REF, T A > 85°C                                                        | 86             |          |                | dB 4      |
|                                              | f IN = 20 kHz, V REF = 2.5 V, internal REF                                                                      | 83.5           | 86       |                | dB 4      |
| Signal-to-Noise-and-Distortion Ratio (SINAD) |                                                                                                                 |                |          |                | dB 4      |
|                                              | f IN = 20 kHz, V REF = 5 V, T A ≤ 85°C                                                                          | 88.5           | 91       |                | dB 4      |
|                                              | f IN = 20 kHz, V REF = 5 V, T A > 85°C f IN = 20 kHz, V REF = 5 V, -60 dB input                                 | 87.5           | 33.5     |                | dB 4      |
|                                              | f IN = 20 kHz, V REF = 4.096 V internal REF, T A ≤ 85°C f IN = 20 kHz, V REF = 4.096 V internal REF, T A > 85°C | 87.5 85.5      | 90       |                | dB 4 dB 4 |
|                                              | f IN = 20 kHz, V REF = 2.5 V internal REF                                                                       | 84.5           | 86       |                | dB 4      |

## SPECIFICATIONS

| Table 1.                                  | Test Conditions/Comments              |   Typ | Max   | Unit   |
|-------------------------------------------|---------------------------------------|-------|-------|--------|
| Parameter Total Harmonic Distortion (THD) | f IN = 20 kHz                         |  -100 |       | dB 4   |
| Spurious-Free Dynamic Range (SFDR)        | f IN = 20 kHz                         |   110 |       | dB 4   |
| Channel to Channel Crosstalk              | f IN = 100 kHz on adjacent channel(s) |  -125 |       | dB 4   |
| SAMPLING DYNAMICS                         |                                       |       |       |        |
| -3 dB Input Bandwidth                     | Full bandwidth                        |   1.7 |       | MHz    |
|                                           | ¼ bandwidth                           | 0.425 |       | MHz    |
| Aperture Delay                            | VDD = 5 V                             |   2.5 |       | ns     |

1 The bandwidth is set in the configuration register.

2 LSB means least significant bit. With the 5 V input range, one LSB is 76.3 µV.

3 With VDD = 5 V, unless otherwise noted.

4 All specifications expressed in decibels are referred to a full-scale input FSR and tested with an input signal at 0.5 dB below full scale, unless otherwise specified.

VDD = 2.3 V to 5.5 V, VIO = 1.8 V to VDD, V REF = VDD, all specifications T MIN to T MAX , unless otherwise noted.

Table 2.

| Parameter               | Test Conditions/Comments               | Min       | Typ   | Max        | Unit   |
|-------------------------|----------------------------------------|-----------|-------|------------|--------|
| INTERNAL REFERENCE      |                                        |           |       |            |        |
| REF Output Voltage      | 2.5 V at 25°C                          | 2.490     | 2.500 | 2.510      | V      |
|                         | 4.096 V at 25°C                        | 4.086     | 4.096 | 4.106      | V      |
| REFIN Output Voltage 1  | 2.5 V at 25°C                          |           | 1.2   |            | V      |
|                         | 4.096 V at 25°C                        |           | 2.3   |            | V      |
| REF Output Current      |                                        |           | ±300  |            | µA     |
| Temperature Drift       |                                        |           | ±10   |            | ppm/°C |
| Line Regulation         | VDD = 5 V ± 5%                         |           | ±15   |            | ppm/V  |
| Long-Term Drift         | 1000 hours                             |           | 50    |            | ppm    |
| Turn-On Settling Time   | Reference capacitance (C REF ) = 10 µF |           | 5     |            | ms     |
| EXTERNAL REFERENCE      |                                        |           |       |            |        |
| Voltage Range           | REF input                              | 0.5       |       | VDD + 0.3  | V      |
|                         | REFIN input (buffered)                 | 0.5       |       | VDD - 0.5  | V      |
| Current Drain 2         | 250 kSPS, REF = 5 V                    |           | 50    |            | µA     |
| TEMPERATURE SENSOR      |                                        |           |       |            |        |
| Output Voltage 3        | 25°C                                   |           | 283   |            | mV     |
| Temperature Sensitivity |                                        |           | 1     |            | mV/°C  |
| DIGITAL INPUTS          |                                        |           |       |            |        |
| Logic Levels            |                                        |           |       |            |        |
| Input Voltage           |                                        |           |       |            |        |
| Low, V IL               |                                        | -0.3      |       | +0.3 × VIO | V      |
| High, V IH              |                                        | 0.7 × VIO |       | VIO + 0.3  | V      |
| Input Current           |                                        |           |       |            |        |
| Low, I IL               |                                        | -1        |       | +1         | µA     |
| High, I IH              |                                        | -1        |       | +1         | µA     |
| DIGITAL OUTPUTS         |                                        |           |       |            |        |
| Data Format 4           |                                        |           |       |            |        |
| Pipeline Delay 5        |                                        |           |       |            |        |
| Output Voltage          |                                        |           |       |            |        |
| Low, V OL               | Sink current (I SINK ) = 500 µA        |           |       | 0.4        | V      |
| High, V OH              | Source current (I SOURCE ) = -500 µA   | VIO - 0.3 |       |            | V      |

## SPECIFICATIONS

## Table 2.

| Parameter             | Test Conditions/Comments                                           |   Min |   Typ | Max       | Unit   |
|-----------------------|--------------------------------------------------------------------|-------|-------|-----------|--------|
| POWER SUPPLIES        |                                                                    |       |       |           |        |
| VDD 6                 | Specified performance                                              |   2.3 |       | 5.5       | V      |
| VIO                   | Specified performance                                              |   1.8 |       | VDD + 0.3 | V      |
| Standby Current 7, 8  | VDD and VIO = 5 V at 25°C                                          |       |    50 |           | nA     |
| Power Dissipation     | VDD = 2.5 V, 100 SPS throughput                                    |       |   1.7 |           | µW     |
|                       | VDD = 2.5 V, 200 kSPS throughput                                   |       |   3.5 |           | mW     |
|                       | VDD = 5 V, 250 kSPS throughput, T A ≤ 85°C                         |       |  12.5 | 18        | mW     |
|                       | VDD = 5 V, 250 kSPS throughput, T A > 85°C                         |       |       | 19        | mW     |
|                       | VDD = 5 V, 250 kSPS throughput with internal reference, T A ≤ 85°C |       |  15.5 | 21        | mW     |
|                       | VDD = 5 V, 250 kSPS throughput with internal reference, T A > 85°C |       |       | 22        | mW     |
| Energy per Conversion | VDD = 5 V                                                          |       |    60 |           | nJ     |
| TEMPERATURE RANGE     |                                                                    |       |       |           |        |
| Specified Performance | T MIN to T MAX                                                     |   -40 |       | +125      | °C     |

## TIMING SPECIFICATIONS

VDD = 4.5 V to 5.5 V, VIO = 1.8 V to VDD, all specifications T MIN to T MAX , unless otherwise noted.

Table 3.

| Parameter 1                        | Symbol   | Min        | Typ   |   Max | Unit   |
|------------------------------------|----------|------------|-------|-------|--------|
| CONVERSION TIME                    | t CONV   |            |       |   2.6 | µs     |
| CNV Rising Edge to Data Available  |          |            |       |       |        |
| ACQUISITION TIME                   | t ACQ    | 1.8        |       |       | µs     |
| TIME BETWEEN CONVERSIONS           | t CYC    | 4.0        |       |       | µs     |
| DATA WRITE/READ DURING CONVERSION  | t DATA   |            |       |   1.2 | µs     |
| SCK                                |          |            |       |       |        |
| Period                             | t SCK    | t DSDO + 2 |       |       | ns     |
| Low Time                           | t SCKL   | 11         |       |       | ns     |
| High Time                          | t SCKH   | 11         |       |       | ns     |
| Falling Edge to Data Remains Valid | t HSDO   | 4          |       |       | ns     |
| Falling Edge to Data Valid Delay   | t DSDO   |            |       |       |        |
| VIO Above 2.7 V                    |          |            |       |    18 | ns     |
| VIO Above 2.3 V                    |          |            |       |    23 | ns     |
| VIO Above 1.8 V                    |          |            |       |    28 | ns     |
| CNV                                |          |            |       |       |        |
| Pulse Width                        | t CNVH   | 10         |       |       | ns     |
| Low to SDO D15 MSB Valid           | t EN     |            |       |       |        |
| VIO Above 2.7 V                    |          |            |       |    18 | ns     |
| VIO Above 2.3 V                    |          |            |       |    22 | ns     |
| VIO Above 1.8 V                    |          |            |       |    25 | ns     |

## SPECIFICATIONS

| Table 3. Parameter 1                                                       | Symbol        |   Min | Typ   |   Max | Unit   |
|----------------------------------------------------------------------------|---------------|-------|-------|-------|--------|
| High or Last SCK Falling Edge to SDO High Impedance Low to SCK Rising Edge | t DIS t CLSCK |    10 |       |    32 | ns     |
| DIN                                                                        | t SDIN        |       |       |       | ns     |
| Valid Setup Time from SCK Rising Edge                                      |               |     5 |       |       | ns     |
| Valid Hold Time from SCK Rising Edge                                       | t HDIN        |     5 |       |       | ns     |

VDD = 2.3 V to 4.5 V, VIO = 1.8 V to VDD, all specifications T MIN to T MAX , unless otherwise noted.

Table 4.

| Parameter 1                                         | Symbol   | Min        | Typ   |   Max | Unit   |
|-----------------------------------------------------|----------|------------|-------|-------|--------|
| CONVERSION TIME                                     | t CONV   |            |       |       |        |
| CNV Rising Edge to Data Available                   |          |            |       |   3.6 | µs     |
| ACQUISITION TIME                                    | t ACQ    | 1.8        |       |       | µs     |
| TIME BETWEEN CONVERSIONS                            | t CYC    | 5          |       |       | µs     |
| DATA WRITE/READ DURING CONVERSION                   | t DATA   |            |       |   1.2 | µs     |
| SCK                                                 |          |            |       |       |        |
| Period                                              | t SCK    | t DSDO + 2 |       |       | ns     |
| Low Time                                            | t SCKL   | 12         |       |       | ns     |
| High Time                                           | t SCKH   | 12         |       |       | ns     |
| Falling Edge to Data Remains Valid                  | t HSDO   | 5          |       |       | ns     |
| Falling Edge to Data Valid Delay                    | t DSDO   |            |       |       |        |
| VIO Above 3 V                                       |          |            |       |    30 | ns     |
| VIO Above 2.7 V                                     |          |            |       |    36 | ns     |
| VIO Above 2.3 V                                     |          |            |       |    44 | ns     |
| VIO Above 1.8 V                                     |          |            |       |    54 | ns     |
| CNV                                                 |          |            |       |       |        |
| Pulse Width                                         | t CNVH   | 10         |       |       | ns     |
| Low to SDO D15 MSB Valid                            | t EN     |            |       |       |        |
| VIO Above 3 V                                       |          |            |       |    27 | ns     |
| VIO Above 2.7 V                                     |          |            |       |    33 | ns     |
| VIO Above 2.3 V                                     |          |            |       |    41 | ns     |
| VIO Above 1.8 V                                     |          |            |       |    51 | ns     |
| High or Last SCK Falling Edge to SDO High Impedance | t DIS    |            |       |    50 | ns     |
| Low to SCK Rising Edge                              | t CLSCK  | 10         |       |       | ns     |
| DIN                                                 |          |            |       |       |        |
| Valid Setup Time from SCK Rising Edge               | t SDIN   | 5          |       |       | ns     |
| Valid Hold Time from SCK Rising Edge                | t HDIN   | 5          |       |       | ns     |

Figure 2. Load Circuit for Digital Interface Timing

<!-- image -->

## SPECIFICATIONS

Figure 3. Voltage Levels for Timing

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                        | Rating                                     |
|---------------------------------|--------------------------------------------|
| Analog Inputs IN0 to IN7, COM   | GND - 0.3 V to VDD + 0.3 V or VDD ± 130 mA |
| REF, REFIN                      | GND - 0.3 V to VDD + 0.3 V                 |
| Supply Voltages VDD, VIO to GND | -0.3 V to +7 V                             |
| VIO to VDD                      | -0.3 V to VDD + 0.3 V                      |
| DIN, CNV, SCK to GND            | -0.3 V to VIO + 0.3 V                      |
| SDO to GND                      | -0.3 V to VIO + 0.3 V                      |
| Storage Temperature Range       | -65°C to +150°C                            |
| Junction Temperature            | 150°C                                      |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 4. Pad Configuration

<!-- image -->

Table 6. Pad Function Descriptions

|   Pad No. | Mnemonic   |   X-Axis (µm) |   Y-Axis (µm) | Pad Type 1   | Description                                                                                                                                            |
|-----------|------------|---------------|---------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | VDD        |          +650 |         +1079 | AI           | Power Supply. Nominally 2.5 V to 5.5 V.                                                                                                                |
|         2 | REF        |          +475 |         +1078 | AI           | Reference Input/Output.                                                                                                                                |
|         3 | REFIN      |          -473 |         +1078 | AI           | Internal Reference Output/Reference Buffer Input.                                                                                                      |
|         4 | GND        |          -659 |         +1079 | P            | Power Supply Ground.                                                                                                                                   |
|         5 | GND        |          -838 |         +1079 | P            | Power Supply Ground.                                                                                                                                   |
|         6 | IN4        |         -1085 |          +892 | AI           | Analog Input Channel 4.                                                                                                                                |
|         7 | IN5        |         -1085 |          +653 | AI           | Analog Input Channel 5.                                                                                                                                |
|         8 | IN6        |         -1085 |          -528 | AI           | Analog Input Channel 6.                                                                                                                                |
|         9 | IN7        |         -1085 |          -769 | AI           | Analog Input Channel 7.                                                                                                                                |
|        10 | COM        |         -1085 |         -1015 | P            | Common Channel Input. All input channels, IN[7:0], can be referenced to a common- mode point of 0 V or V REF /2 V.                                     |
|        11 | CNV        |          -519 |         -1087 | DI           | Conversion Input. On the rising edge, CNV initiates the conversion. During conversion, if CNV is held low, the busy indictor is enabled.               |
|        12 | DIN        |           -71 |         -1087 | DI           | Data Input. Use this input for writing to the 14-bit configuration register. The configuration register can be written to during and after conversion. |
|        13 | SCK        |          +231 |         -1087 | DI           | Serial Data Clock Input. This input is used to clock out the data on SDO and clock in data on.                                                         |
|        14 | SDO        |          +667 |         -1087 | DO           | Serial Data Output.                                                                                                                                    |
|        15 | VIO        |         +1079 |         -1056 | P            | Input/Output Interface Digital Power. Nominally at the same supply as the host interface (1.8 V, 2.5 V, 3 V, or 5 V).                                  |
|        16 | IN0        |         +1085 |          -769 | AI           | Analog Input Channel 0.                                                                                                                                |
|        17 | IN1        |         +1085 |          -528 | AI           | Analog Input Channel 1.                                                                                                                                |
|        18 | IN2        |         +1085 |          +653 | AI           | Analog Input Channel 2.                                                                                                                                |
|        19 | IN3        |         +1085 |          +894 | AI           | Analog Input Channel 3.                                                                                                                                |
|        20 | VDD        |          +997 |         +1079 | P            | Power Supply. Nominally 2.5 V to 5.5 V.                                                                                                                |

## OUTLINE DIMENSIONS

Figure 5. 20-Pad Bare Die [CHIP] (C-20-2) Dimensions shown in millimeters

<!-- image -->

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 7. Die Specifications

| Parameter                | Value                        | Unit           |
|--------------------------|------------------------------|----------------|
| Scribe Line Width        | 80 × 80                      | µm             |
| Die Size (Maximum Size)  | 2430 × 2430                  | µm             |
| Thickness                | 250                          | µm             |
| Bond Pads (Minimum Size) | 80 × 80                      | µm             |
| Bond Pad Composition     | 0.5 AlCu                     | %              |
| Backside                 | Standard assembly die attach | Not applicable |
| Passivation              | Oxynitride                   | Not applicable |
| Polyimide                | Yes                          | Not applicable |
| Polyimide Thickness      | 5                            | µm             |
| Chip Size                | 2350 × 2350                  | µm             |

## Table 8. Assembly Recommendations

| Assembly Component   | Recommendation                |
|----------------------|-------------------------------|
| Die Attach           | Epoxy adhesive                |
| Bonding Method       | Gold ball 1 or aluminum wedge |
| Bonding Sequence     | Bond pin five first           |

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description   | Packing Quantity   | Package Option   |
|---------------|---------------------|-----------------------|--------------------|------------------|
| AD7689-KGD-PT | -40°C to +125°C     | CHIPS OR DIE          | Reel, 1500         | C-20-2           |

<!-- image -->

Updated: January 13, 2022