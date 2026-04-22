<!-- lastmod 2025-04-02 -->
<!-- image -->

## Commercial Space Product

## FEATURES

- RF 2 × 2 transceiver with integrated 12-bit DACs and ADCs
- Transmit band: 46.875 MHz to 6.0 GHz
- Receive band: 70 MHz to 6.0 GHz
- Dual receivers: 6 differential inputs
- Superior receiver sensitivity with a NF of 2 dB at 800 MHz LO
- Receive gain control
- Real-time monitor and control signals for manual gain
- Independent AGC
- Dual transmitters: 4 differential outputs
- Highly linear broadband transmitter
- Transmit EVM: -40 dB (typical) at 800 MHz
- Transmit noise: -157 dBm/Hz (typical)
- Transmit monitor: 66 dB dynamic range (typical) with 1 dB accuracy
- Integrated fractional-N synthesizers
- 2.4 Hz typical LO frequency step size
- Multichip synchronization
- CMOS/LVDS digital interface

## COMMERCIAL SPACE FEATURES

- Supports aerospace applications
- Certificate of Conformance
- Wafer diffusion lot traceability
- Qualification based on flows per NASA PEM-INST-001 and SAE AS6294
- Burn-in, life test, and deltas analysis
- Radiation lot acceptance test (RLAT)
- Total ionizing dose (TID)
- Radiation benchmark
- Single event latchup (SEL)
- Outgassing characterization

## APPLICATIONS

- Low and medium Earth orbit (LEO/MEO) satellites
- Geosynchronous Earth orbit (GEO) satellites
- Avionics
- Point to point communication systems

Rev. B

## AD9361S-CSH

## RF Agile Transceiver

## GENERAL DESCRIPTION

The AD9361S-CSH is a high performance, highly integrated, RF agile transceiver designed for use in 3G and 4G applications. Its programmability and wideband capability make it ideal for a broad range of transceiver applications. The device combines an RF front end with a flexible mixed-signal baseband section and integrated frequency synthesizers, simplifying design-in by providing a configurable digital interface to a processor. The AD9361S-CSH receiver LO operates from 70 MHz to 6.0 GHz and the transmitter LO operates from 46.875 MHz to 6.0 GHz range, covering most licensed and unlicensed bands. Channel bandwidths from less than 200 kHz to 56 MHz are supported.

The two independent direct conversion receivers have state-of-theart noise figure and linearity. Each receive subsystem includes independent automatic gain control (AGC), dc offset correction, quadrature correction, and digital filtering, thereby eliminating the need for these functions in the digital baseband. The AD9361SCSH also has flexible manual gain modes that can be externally controlled.

Two high dynamic range analog-to-digital converters (ADCs) per channel digitize the received inphase (I) and quadrature (Q) signals and pass them through configurable decimation filters and 128-tap finite impulse response (FIR) filters to produce a 12-bit output signal at the appropriate sample rate.

The transmitters use a direct conversion architecture that achieves high modulation accuracy with ultralow noise. This transmitter design produces a best-in-class transmit error vector magnitude (EVM) of ≤-40 dB, allowing significant system margin for the external power amplifier (PA) selection. The on-board transmit power monitor can be used as a power detector, enabling highly accurate transmit power measurements.

The fully integrated phase-locked loops (PLLs) provide low power fractional-N frequency synthesis for all receive and transmit channels. Channel isolation, demanded by frequency division duplex (FDD) systems, is integrated into the design. All voltage controlled oscillator (VCO) and loop filter components are integrated.

The AD9361S-CSH is packaged in a 10 mm × 10 mm, 144-ball chip scale package ball grid array (CSP\_BGA).

Additional application and technical information can be found in the Commercial Space Products Program brochure and the AD9361 data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1                                                                                                                                                                                       | Radiation Test and Limit Specifications............16                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Commercial Space Features.................................1                                                                                                                                                                                                      | Absolute Maximum Ratings.................................17                                                                                                                                                                                                      |
| Applications........................................................... 1                                                                                                                                                                                        | Thermal Resistance......................................... 17                                                                                                                                                                                                   |
| General Description...............................................1                                                                                                                                                                                              | Outgas Testing................................................. 17                                                                                                                                                                                               |
| Functional Block Diagram......................................3                                                                                                                                                                                                  | Radiation Features...........................................17                                                                                                                                                                                                  |
| Specifications........................................................ 4                                                                                                                                                                                         | ESD Caution.....................................................17                                                                                                                                                                                               |
| Current Consumption-VDD_INTERFACE......10                                                                                                                                                                                                                        | Pin Configuration and Function Descriptions...... 18                                                                                                                                                                                                             |
| Current Consumption-VDDD1P3_DIG and                                                                                                                                                                                                                              | Typical Performance Characteristics...................22                                                                                                                                                                                                         |
| VDDA1P3_x (Combination of All 1.3 V                                                                                                                                                                                                                              | Outline Dimensions............................................. 23                                                                                                                                                                                               |
| Supplies).........................................................11                                                                                                                                                                                             | Ordering Guide.................................................23                                                                                                                                                                                                |
| Burn-In Delta Limits Specifications...................15                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                  |
| REVISION HISTORY                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                  |
| 3/2025-Rev. A to Rev. B                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                  |
| Changes to Features Section.......................................................................................................................... 1                                                                                                          | Changes to Features Section.......................................................................................................................... 1                                                                                                          |
| Changes to Frequency Range Parameter and Signal Level Parameter, Table 1............................................ 4                                                                                                                                           | Changes to Frequency Range Parameter and Signal Level Parameter, Table 1............................................ 4                                                                                                                                           |
| Changed Life Test and Burn-In Delta Limits Specifications Section to Burn-In Delta Limits Specifications Section..................................................................................................................................15             | Changed Life Test and Burn-In Delta Limits Specifications Section to Burn-In Delta Limits Specifications Section..................................................................................................................................15             |
| Changes to Burn-In Delta Limits Specifications Section................................................................................15 Added Radiation Features Section and Table 16; Renumbered Sequentially...............................................17 | Changes to Burn-In Delta Limits Specifications Section................................................................................15 Added Radiation Features Section and Table 16; Renumbered Sequentially...............................................17 |
| Changes to Typical Performance Characteristics Section.............................................................................22                                                                                                                            | Changes to Typical Performance Characteristics Section.............................................................................22                                                                                                                            |
| Deleted 800 MHz Frequency Band Section and Figure 3 to Figure 31; Renumbered Sequentially..............22                                                                                                                                                        | Deleted 800 MHz Frequency Band Section and Figure 3 to Figure 31; Renumbered Sequentially..............22                                                                                                                                                        |
| Deleted 2.4 GHz Frequency Band Section and Figure 32 to Figure 52.........................................................22                                                                                                                                     | Deleted 2.4 GHz Frequency Band Section and Figure 32 to Figure 52.........................................................22                                                                                                                                     |
| Deleted 5.5 GHz Frequency Band Section and Figure 53 to Figure 66.........................................................22                                                                                                                                     | Deleted 5.5 GHz Frequency Band Section and Figure 53 to Figure 66.........................................................22                                                                                                                                     |
| 8/2023-Rev. 0 to Rev. A                                                                                                                                                                                                                                          | 8/2023-Rev. 0 to Rev. A                                                                                                                                                                                                                                          |
| Changes to Commercial Space Features Section...........................................................................................1                                                                                                                         | Changes to Commercial Space Features Section...........................................................................................1                                                                                                                         |
| Changes to Applications Section.....................................................................................................................1                                                                                                            | Changes to Applications Section.....................................................................................................................1                                                                                                            |
| Change to Table 13........................................................................................................................................17                                                                                                     | Change to Table 13........................................................................................................................................17                                                                                                     |

7/2022-Revision 0: Initial Version

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## SPECIFICATIONS

Electrical characteristics at VDD\_GPO = 3.3 V, VDD\_INTERFACE = 1.8 V, VDDD1P3\_DIG = 1.3 V, and all other VDDA1P3\_x pins = 1.3 V, TA = 25°C, unless otherwise noted. TX is transmit, and RX is receive. VDDA1P3\_x refers to VDDA1P3\_TX\_LO, VDDA1P3\_TX\_VCO\_LDO, VDDA1P3\_RX\_RF, VDDA1P3\_RX\_TX, VDDA1P3\_RX\_LO, VDDA1P3\_TX\_LO\_BUFFER, VDDA1P3\_RX\_VCO\_LDO, VDDA1P3\_RX\_SYNTH, VDDA1P3\_TX\_SYNTH, and VDDA1P3\_BB.

Table 1.

| Parameter 1                                                    | Symbol   | Min   | Typ   | Max   | Unit    | Test Conditions/ Comments                                |
|----------------------------------------------------------------|----------|-------|-------|-------|---------|----------------------------------------------------------|
| RECEIVERS, GENERAL                                             |          |       |       |       |         |                                                          |
| Center Frequency                                               |          | 70    |       | 6000  | MHz     |                                                          |
| Gain                                                           |          |       |       |       |         |                                                          |
| Minimum                                                        |          |       | 0     |       | dB      |                                                          |
| Maximum                                                        |          |       | 74.5  |       | dB      | At 800 MHz                                               |
|                                                                |          |       | 73.0  |       | dB      | At 2300 MHz (RX1A_x, RX2A_x)                             |
|                                                                |          |       | 72.0  |       | dB      | At 2300 MHz (RX1B_x, RX1C_x, RX2B_x, RX2C_x) At 5500 MHz |
|                                                                |          |       | 65.5  |       | dB      | (RX1A_x, RX2A_x)                                         |
| Gain Step                                                      | RSSI     |       | 1     |       | dB      |                                                          |
| Range                                                          |          |       |       |       |         |                                                          |
|                                                                |          |       | 100   |       | dB      |                                                          |
| Accuracy                                                       |          |       | ±2    |       | dB      |                                                          |
| RECEIVERS, 800 MHz                                             |          |       |       |       |         |                                                          |
| Noise Figure                                                   | NF       |       | 2     |       | dB      | Maximum RX gain                                          |
| Third-Order Input Intermodulation Intercept                    | IIP3     |       | -18   |       | dBm     | Maximum RX gain                                          |
| Point                                                          |          |       |       |       |         |                                                          |
| Second-Order Input Intermodulation Intercept                   | IIP2     |       | 40    |       | dBm     | Maximum RX gain                                          |
| Point                                                          |          |       |       |       |         |                                                          |
| Local Oscillator (LO) Leakage                                  |          |       | -122  |       | dBm     | At RX front-end input                                    |
| Quadrature                                                     |          |       |       |       |         |                                                          |
| Gain Error                                                     |          |       | 0.2   |       | %       |                                                          |
| Phase Error                                                    |          |       | 0.2   |       | Degrees |                                                          |
| Modulation Accuracy (EVM)                                      |          |       | -42   |       | dB      | 19.2 MHz reference clock                                 |
| Input Return Loss                                              | S 11     |       | -10   |       | dB      |                                                          |
| Receiver Channel 1 (RX1) to Receiver Channel 2 (RX2) Isolation |          |       |       |       |         |                                                          |
| RX1A_x to RX2A_x, RX1C_x to RX2C_x                             |          |       | 70    |       | dB      |                                                          |
| RX1B_x to RX2B_x                                               |          |       | 55    |       | dB      |                                                          |
| RX2 to RX1 Isolation                                           |          |       |       |       |         |                                                          |
| RX2A_x to RX1A_x, RX2C_x to RX1C_x                             |          |       | 70    |       | dB      |                                                          |
| RX2B_x to RX1B_x                                               |          |       | 55    |       | dB      |                                                          |
| RECEIVERS, 2.4 GHz                                             |          |       |       |       |         |                                                          |
| Noise Figure                                                   | NF       |       | 3     |       | dB      | Maximum RX gain                                          |
| Third-Order Input Intermodulation Intercept Point              | IIP3     |       | -14   |       | dBm     | Maximum RX gain                                          |
| Second-Order Input Intermodulation Intercept Point             | IIP2     |       | 45    |       | dBm     | Maximum RX gain                                          |
| LO Leakage                                                     |          |       | -110  |       | dBm     | At receiver front-end input                              |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter 1                                        | Symbol   | Min    | Typ   | Max   | Unit    | Test Conditions/ Comments                                      |
|----------------------------------------------------|----------|--------|-------|-------|---------|----------------------------------------------------------------|
| Quadrature                                         |          |        |       |       |         |                                                                |
| Gain Error                                         |          |        | 0.2   |       | %       |                                                                |
| Phase Error                                        |          |        | 0.2   |       | Degrees |                                                                |
| Modulation Accuracy (EVM)                          |          |        | -42   |       | dB      | 40 MHz reference clock                                         |
| Input Return Loss                                  | S 11     |        | -10   |       | dB      |                                                                |
| RX1 to RX2 Isolation                               |          |        |       |       |         |                                                                |
| RX1A_x to RX2A_x, RX1C_x to RX2C_x                 |          |        | 65    |       | dB      |                                                                |
| RX1B_x to RX2B_x                                   |          |        | 50    |       | dB      |                                                                |
| RX2 to RX1 Isolation                               |          |        |       |       |         |                                                                |
| RX2A_x to RX1A_x, RX2C_x to RX1C_x                 |          |        | 65    |       | dB      |                                                                |
| RX2B_x to RX1B_x                                   |          |        | 50    |       | dB      |                                                                |
| RECEIVERS, 5.5 GHz                                 |          |        |       |       |         |                                                                |
| Noise Figure                                       | NF       |        | 3.8   |       | dB      | Maximum RX gain                                                |
| Third-Order Input Intermodulation Intercept        | IIP3     |        | -17   |       | dBm     | Maximum RX gain                                                |
| Point                                              |          |        |       |       |         |                                                                |
| Second-Order Input Intermodulation Intercept       | IIP2     |        | 42    |       | dBm     | Maximum RX gain                                                |
| Point                                              |          |        |       |       |         |                                                                |
| LO Leakage                                         |          |        | -95   |       | dBm     | At RX front-end input                                          |
| Quadrature                                         |          |        |       |       |         |                                                                |
| Gain Error                                         |          |        | 0.2   |       | %       |                                                                |
| Phase Error                                        |          |        | 0.2   |       | Degrees |                                                                |
| Modulation Accuracy (EVM)                          |          |        | -37   |       | dB      | 40 MHz reference clock (doubled internally for RF synthesizer) |
| Input Return Loss                                  | S 11     |        | -10   |       | dB      |                                                                |
| RX1A to RX2A Isolation                             |          |        | 52    |       | dB      |                                                                |
| RX2A to RX1A Isolation                             |          |        | 52    |       | dB      |                                                                |
| TRANSMITTERS-GENERAL                               |          |        |       |       |         |                                                                |
| Center Frequency                                   |          | 46.875 |       | 6000  | MHz     |                                                                |
| Power Control Range                                |          |        | 90    |       | dB      |                                                                |
| Power Control Resolution                           |          |        | 0.25  |       | dB      |                                                                |
| TRANSMITTERS, 800 MHz                              |          |        |       |       |         |                                                                |
| Output Return Loss                                 | S 22     |        | -10   |       | dB      |                                                                |
| Maximum Output Power                               |          |        | 8     |       | dBm     | 1 MHz tone into 50 Ω load                                      |
| Modulation Accuracy (EVM)                          |          |        | -40   |       | dB      | 19.2 MHz reference clock                                       |
| Third-Order Output Intermodulation Intercept Point | OIP3     |        | 23    |       | dBm     |                                                                |
| Carrier Leakage                                    |          |        | -50   |       | dBc     | 0 dB attenuation 40 dB attenuation                             |
|                                                    |          |        | -32   |       | dBc     |                                                                |
| Noise Floor                                        |          |        | -157  |       | dBm/Hz  | 90 MHz offset                                                  |
| Isolation                                          |          |        |       |       |         |                                                                |
| Transmit Channel 1 (TX1) to Transmit (TX2)         |          |        | 50    |       | dB      |                                                                |
| Channel 2 TX2 to TX1                               |          |        | 50    |       | dB      |                                                                |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter 1                                              | Symbol   | Min   | Typ     | Max   | Unit           | Test Conditions/ Comments                                                         |
|----------------------------------------------------------|----------|-------|---------|-------|----------------|-----------------------------------------------------------------------------------|
| TRANSMITTERS, 2.4 GHz                                    |          |       |         |       |                |                                                                                   |
| Output Return Loss                                       | S 22     |       | -10     |       | dB             |                                                                                   |
| Maximum Output Power                                     |          |       | 7.5     |       | dBm            | 1 MHz tone into 50 Ω load                                                         |
| Modulation Accuracy (EVM)                                |          |       | -40     |       | dB             | 40 MHz reference clock                                                            |
| Third - Order Output Intermodulation Intercept Point     | OIP3     |       | 19      |       | dBm            |                                                                                   |
| Carrier Leakage                                          |          |       | -50 -32 |       | dBc dBc dBm/Hz | 0 dB attenuation 40 dB attenuation                                                |
| Noise Floor                                              |          |       | -156    |       |                | 90 MHz offset                                                                     |
| Isolation TX1 to TX2                                     |          |       | 50      |       | dB             |                                                                                   |
| TX2 to TX1                                               |          |       | 50      |       | dB             |                                                                                   |
| TRANSMITTERS, 5.5 GHz                                    |          |       |         |       |                |                                                                                   |
| Output Return Loss                                       | S 22     |       | -10     |       | dB             |                                                                                   |
| Maximum Output Power                                     |          |       | 6.5     |       | dBm            | 7 MHz tone into 50 Ω load                                                         |
| Modulation Accuracy (EVM)                                |          |       | -36     |       | dB             | 40 MHz reference clock (doubled internally for RF synthesizer)                    |
| Third-Order Output Intermodulation Intercept Point       | OIP3     |       | 17      |       | dBm            |                                                                                   |
| Carrier Leakage                                          |          |       | -50 -30 |       | dBc dBc        | 0 dB attenuation 40 dB attenuation                                                |
| Noise Floor                                              |          |       | -151.5  |       | dBm/Hz         | 90 MHz offset                                                                     |
| Isolation                                                |          |       | 50      |       | dB             |                                                                                   |
| TX1 to TX2                                               |          |       |         |       |                |                                                                                   |
| TX MONITOR INPUTS (TX_MON1, TX_MON2) Maximum Input Level |          |       | 4       |       | dBm            |                                                                                   |
| Accuracy                                                 |          |       | 1       |       |                |                                                                                   |
|                                                          |          |       |         |       | dB             |                                                                                   |
| LO SYNTHESIZER                                           |          |       |         |       |                |                                                                                   |
| LO Frequency Step                                        |          |       | 2.4     |       | Hz             | 2.4 GHz, 40 MHz reference clock                                                   |
| Integrated Phase Noise 800 MHz                           |          |       | 0.13    |       | ° rms          | 100 Hz to 100 MHz, 30.72 MHz reference                                            |
| 2.4 GHz                                                  |          |       |         |       | ° rms          | synthesizer) 100 Hz to 100 40 MHz reference                                       |
|                                                          |          |       | 0.37    |       |                | MHz, clock                                                                        |
| 5.5 GHz                                                  |          |       | 0.59    |       | ° rms          | 100 Hz to 100 MHz, 40 MHz reference clock (doubled internally for RF synthesizer) |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter 1                                                                | Symbol   | Min                 | Typ               | Max                 | Unit   | Test Conditions/ Comments                                                                           |
|----------------------------------------------------------------------------|----------|---------------------|-------------------|---------------------|--------|-----------------------------------------------------------------------------------------------------|
| REFERENCE CLOCK                                                            |          |                     |                   |                     |        | The reference clock is either the input to the XTALP/XTALN pins or a line directly to the XTALN pin |
| Input                                                                      |          |                     |                   |                     |        |                                                                                                     |
| Frequency Range                                                            |          | 19                  |                   | 50                  | MHz    | Crystal input                                                                                       |
|                                                                            |          | 20                  |                   | 80                  | MHz    | External oscillator                                                                                 |
| Signal Level                                                               |          | 0.8                 |                   | 1.3                 | V p-p  | AC-coupled external oscillator. Larger swings close to max level give best performance.             |
| AUXILIARY CONVERTERS                                                       |          |                     |                   |                     |        |                                                                                                     |
| ADC                                                                        |          |                     |                   |                     |        |                                                                                                     |
| Resolution                                                                 |          |                     | 12                |                     | Bits   |                                                                                                     |
| Input Voltage                                                              |          |                     |                   |                     |        |                                                                                                     |
| Minimum                                                                    |          |                     | 0.05              |                     | V      |                                                                                                     |
| Maximum                                                                    |          |                     | VDDA1P3_BB - 0.05 |                     | V      |                                                                                                     |
| DAC                                                                        |          |                     |                   |                     |        |                                                                                                     |
| Resolution                                                                 |          |                     | 10                |                     | Bits   |                                                                                                     |
| Output Voltage                                                             |          |                     |                   |                     |        |                                                                                                     |
| Minimum                                                                    |          |                     | 0.5               |                     | V      |                                                                                                     |
| Maximum                                                                    |          |                     | VDD_GPO - 0.3     |                     | V      |                                                                                                     |
| Output Current                                                             |          |                     | 10                |                     | mA     |                                                                                                     |
| DIGITAL SPECIFICATIONS (CMOS)                                              |          |                     |                   |                     |        |                                                                                                     |
| Logic Inputs                                                               |          |                     |                   |                     |        |                                                                                                     |
| Input Voltage                                                              |          |                     |                   |                     |        |                                                                                                     |
| High                                                                       |          | VDD_INTERFACE × 0.8 |                   | VDD_INTERFACE       | V      |                                                                                                     |
| Low                                                                        |          | 0                   |                   | VDD_INTERFACE × 0.2 | V      |                                                                                                     |
| Input Current                                                              |          |                     |                   |                     |        |                                                                                                     |
| High                                                                       |          | -10                 |                   | +10                 | μA     |                                                                                                     |
| Low                                                                        |          | -10                 |                   | +10                 | μA     |                                                                                                     |
| Logic Outputs                                                              |          |                     |                   |                     |        |                                                                                                     |
| Output Voltage                                                             |          |                     |                   |                     |        |                                                                                                     |
| High                                                                       |          | VDD_INTERFACE × 0.8 |                   |                     | V      |                                                                                                     |
| Low                                                                        |          |                     |                   | VDD_INTERFACE × 0.2 | V      |                                                                                                     |
| DIGITAL SPECIFICATIONS (LOW VOLTAGE DIFFERENTIAL SIGNALING (LVDS)          |          |                     |                   |                     |        |                                                                                                     |
| Logic Inputs                                                               |          |                     |                   |                     |        |                                                                                                     |
| Input Voltage Range                                                        |          | 825                 |                   | 1575                | mV     | Each differential input in the pair                                                                 |
| Input Differential Voltage Threshold Receiver Differential Input Impedance |          | -100                |                   | +100                | mV Ω   |                                                                                                     |
| Logic Outputs                                                              |          |                     | 100               |                     |        |                                                                                                     |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter 1                                       | Symbol    | Min           | Typ   | Max           | Unit   | Test Conditions/ Comments                                  |
|---------------------------------------------------|-----------|---------------|-------|---------------|--------|------------------------------------------------------------|
| Output Voltage                                    |           |               |       |               |        |                                                            |
| High                                              |           |               |       | 1375          | mV     |                                                            |
| Low                                               |           | 1025          |       |               | mV     |                                                            |
| Output Differential Voltage                       |           | 150           |       |               | mV     | Programmable in 75 mV steps                                |
| Output Offset Voltage                             |           |               | 1200  |               | mV     |                                                            |
| GENERAL-PURPOSE OUTPUTS                           |           |               |       |               |        |                                                            |
| Output Voltage                                    |           |               |       |               |        |                                                            |
| High                                              |           | VDD_GPO × 0.8 |       |               | V      |                                                            |
| Low                                               |           |               |       | VDD_GPO × 0.2 | V      |                                                            |
| Output Current                                    |           |               | 10    |               | mA     |                                                            |
| SERIAL PERIPHERAL INTERFACE (SPI) TIMING          |           |               |       |               |        | VDD_INTERFACE = 1.8 V                                      |
| SPI_CLK                                           |           |               |       |               |        |                                                            |
| Period                                            |           |               |       |               |        |                                                            |
|                                                   | t CP      | 20            |       |               | ns     |                                                            |
| Pulse Width                                       | t MP      | 9             |       |               | ns     |                                                            |
| SPI_ENB Setup to First SPI_CLK Rising Edge        | t SC      | 1             |       |               | ns     |                                                            |
| Last SPI_CLK Falling Edge to SPI_ENB Hold         | t HC      | 0             |       |               | ns     |                                                            |
| SPI_DI                                            |           |               |       |               |        |                                                            |
| Data Input Setup to SPI_CLK                       | t S       | 2             |       |               | ns     |                                                            |
| Data Input Hold to SPI_CLK                        | t H       | 1             |       |               | ns     |                                                            |
| SPI_CLK Rising Edge to Output Data Delay          |           |               |       |               |        |                                                            |
| 4-Wire Mode                                       | t CO      | 3             |       | 8             | ns     |                                                            |
| 3-Wire Mode                                       | t CO      | 3             |       | 8             | ns     |                                                            |
| Bus Turnaround Time, Read                         | t HZM     | t H           |       | t CO (max)    | ns     | After baseband processor (BBP) drives the last address bit |
| Bus Turnaround Time, Read                         | t HZS     | 0             |       | t CO (max)    | ns     | After the AD9361S- CSH drives the last data bit            |
| DIGITAL DATA TIMING (CMOS), VDD_INTERFACE = 1.8 V |           |               |       |               |        |                                                            |
| DATA_CLK_x Clock Period                           | t CP      | 16.276        |       |               | ns     | 61.44 MHz                                                  |
| DATA_CLK_x and FB_CLK_x Pulse Width               | t MP      | 45% of t CP   |       | 55% of t CP   | ns     |                                                            |
| TX Data                                           |           |               |       |               |        | TX_FRAME_x, P0_Dx, and P1_Dx                               |
| Setup to FB_CLK_x                                 | t STX     | 1             |       |               | ns     |                                                            |
| Hold to FB_CLK_x                                  | t HTX     | 0             |       |               | ns     |                                                            |
| DATA_CLK_x to Data Bus Output Delay               | t DDRX    | 0             |       | 1.5           | ns     |                                                            |
| DATA_CLK_x to RX_FRAME_x Delay                    | t DDDV    | 0             |       | 1.0           | ns     |                                                            |
| Pulse Width                                       |           |               |       |               |        |                                                            |
| ENABLE                                            | t ENPW    | t CP          |       |               | ns     |                                                            |
| TXNRX                                             | t TXNRXPW | t CP          |       |               | ns     | FDD independent enable state machine (ESM) mode            |
| TXNRX Setup to ENABLE                             | t TXNRXSU | 0             |       |               | ns     | Time division duplex (TDD) ESM mode                        |
| Bus Turnaround Time                               |           |               |       |               |        |                                                            |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter 1                         | Symbol    | Min         | Typ   | Max         | Unit   | Test Conditions/ Comments    |
|-------------------------------------|-----------|-------------|-------|-------------|--------|------------------------------|
| Before RX                           | t RPRE    | 2 × t CP    |       |             | ns     | TDD mode                     |
| After RX                            | t RPST    | 2 × t CP    |       |             | ns     | TDD mode                     |
| Capacitive Load                     |           |             | 3     |             | pF     |                              |
| Capacitive Input                    |           |             | 3     |             | pF     |                              |
| DIGITAL DATA TIMING (CMOS),         |           |             |       |             |        |                              |
| VDD_INTERFACE = 2.5 V               |           |             |       |             |        |                              |
| DATA_CLK_x Clock Period             | t CP      | 16.276      |       |             | ns     | 61.44 MHz                    |
| DATA_CLK_x and FB_CLK_x Pulse Width | t MP      | 45% of t CP |       | 55% of t CP | ns     |                              |
| TX Data                             |           |             |       |             |        | TX_FRAME_x, P0_Dx, and P1_Dx |
| Setup to FB_CLK_x                   | t STX     | 1           |       |             | ns     |                              |
| Hold to FB_CLK_x                    | t HTX     | 0           |       |             | ns     |                              |
| DATA_CLK_x to Data Bus Output Delay | t DDRX    | 0           |       | 1.2         | ns     |                              |
| DATA_CLK_x to RX_FRAME_x Delay      | t DDDV    | 0           |       | 1.0         | ns     |                              |
| Pulse Width                         |           |             |       |             |        |                              |
| ENABLE                              | t ENPW    | t CP        |       |             | ns     |                              |
| TXNRX                               | t TXNRXPW | t CP        |       |             | ns     | FDD independent ESM mode     |
| TXNRX Setup to ENABLE               | t TXNRXSU | 0           |       |             | ns     | TDD ESM mode                 |
| Bus Turnaround Time                 |           |             |       |             |        |                              |
| Before RX                           | t RPRE    | 2 × t CP    |       |             | ns     | TDD mode                     |
| After RX                            | t RPST    | 2 × t CP    |       |             | ns     | TDD mode                     |
| Capacitive Load                     |           |             | 3     |             | pF     |                              |
| Capacitive Input                    |           |             | 3     |             | pF     |                              |
| DIGITAL DATA TIMING (LVDS)          |           |             |       |             |        |                              |
| DATA_CLK_x Clock Period             | t CP      | 4.069       |       |             | ns     | 245.76 MHz                   |
| DATA_CLK_x and FB_CLK_x Pulse Width | t MP      | 45% of t CP |       | 55% of t CP | ns     |                              |
| TX Data                             |           |             |       |             |        | TX_FRAME_x and TX_Dx_x       |
| Setup to FB_CLK_x                   | t STX     | 1           |       |             | ns     |                              |
| Hold to FB_CLK_x                    | t HTX     | 0           |       |             | ns     |                              |
| DATA_CLK_x to Data Bus Output Delay | t DDRX    | 0.25        |       | 1.25        | ns     |                              |
| DATA_CLK_x to RX_FRAME_x Delay      | t DDDV    | 0.25        |       | 1.25        | ns     |                              |
| Pulse Width                         |           |             |       |             |        |                              |
| ENABLE                              | t ENPW    | t CP        |       |             | ns     |                              |
| TXNRX                               | t TXNRXPW | t CP        |       |             | ns     | FDD independent ESM mode     |
| TXNRX Setup to ENABLE               | t TXNRXSU | 0           |       |             | ns     | TDD ESM mode                 |
| Bus Turnaround Time                 |           |             |       |             |        |                              |
| Before RX                           | t RPRE    | 2 × t CP    |       |             | ns     |                              |
| After RX                            | t RPST    | 2 × t CP    |       |             | ns     |                              |
| Capacitive Load                     |           |             | 3     |             | pF     |                              |
| Capacitive Input                    |           |             | 3     |             | pF     |                              |
| SUPPLY CHARACTERISTICS              |           |             |       |             |        |                              |
| 1.3 V Main Supply Voltage           |           | 1.267       | 1.3   | 1.33        | V      |                              |
| VDD_INTERFACE Supply                |           |             |       |             |        |                              |
| Nominal Settings CMOS               |           | 1.14        |       | 2.625       | V      |                              |

## SPECIFICATIONS

## Table 1. (Continued)

| Parameter 1             | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/ Comments                      |
|-------------------------|----------|-------|-------|-------|--------|------------------------------------------------|
| LVDS                    |          | 1.71  |       | 2.625 | V      |                                                |
| VDD_INTERFACE Tolerance |          | -5    |       | +5    | %      | Tolerance is applicable to any voltage setting |
| VDD_GPO Supply Nominal  |          | 1.3   |       | 3.3   | V      | When unused, must be set to 1.3 V              |
| Setting                 |          |       |       |       |        |                                                |
| VDD_GPO Tolerance       |          | -5    |       | +5    | %      | Tolerance is applicable to any voltage setting |
| Current Consumption     |          |       |       |       |        |                                                |
| VDDA1P3_x, Sleep Mode   |          |       | 180   |       | μA     | Sum of all input currents                      |
| VDD_GPO                 |          |       | 50    |       | μA     | No load                                        |

## CURRENT CONSUMPTION-VDD\_INTERFACE

TX is transmit, and RX is receive.

## Table 2. VDD\_INTERFACE = 1.2 V

| Parameter                                              | Min   | Typ   | Max   | Unit   | Test Conditions/Comments       |
|--------------------------------------------------------|-------|-------|-------|--------|--------------------------------|
| SLEEP MODE                                             |       | 45    |       | µA     | Power applied, device disabled |
| ONE RX CHANNEL, ONE TX CHANNEL, DOUBLE DATA RATE (DDR) |       |       |       |        |                                |
| Long-Term Evolution (LTE 10 MHz)                       |       |       |       |        |                                |
| Single Port                                            |       | 2.9   |       | mA     | 30.72 MHz data clock, CMOS     |
| Dual Port                                              |       | 2.7   |       | mA     | 15.36 MHz data clock, CMOS     |
| LTE 20 MHz                                             |       |       |       |        |                                |
| Dual Port                                              |       | 5.2   |       | mA     | 30.72 MHz data clock, CMOS     |
| TWO RX CHANNELS, TWO TX CHANNELS, DDR LTE 3 MHz        |       |       |       |        |                                |
| Dual Port                                              |       | 1.3   |       | mA     | 7.68 MHz data clock, CMOS      |
| LTE 10 MHz                                             |       |       |       |        |                                |
| Single Port                                            |       | 4.6   |       | mA     | 61.44 MHz data clock, CMOS     |
| Dual Port                                              |       | 5.0   |       | mA     | 30.72 MHz data clock, CMOS     |
| LTE 20 MHz                                             |       |       |       |        |                                |
| Dual Port                                              |       | 8.2   |       | mA     | 61.44 MHz data clock, CMOS     |
| Global System for Mobile Communications (GSM)          |       |       |       |        |                                |
| Dual Port                                              |       | 0.2   |       | mA     | 1.08 MHz data clock, CMOS      |

## Table 3. VDD\_INTERFACE = 1.8 V

| Parameter                           | Typ   | Max   | Unit   | Test Conditions/Comments       |
|-------------------------------------|-------|-------|--------|--------------------------------|
| SLEEP MODE                          | 84    |       | μA     | Power applied, device disabled |
| ONE RX CHANNEL, ONE TX CHANNEL, DDR |       |       |        |                                |
| Single Port                         | 4.5   |       | mA     | 30.72 MHz data clock, CMOS     |
| Dual Port                           | 4.1   |       | mA     | 15.36 MHz data clock, CMOS     |

## SPECIFICATIONS

## Table 3. VDD\_INTERFACE = 1.8 V (Continued)

| Parameter                             | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|---------------------------------------|-------|-------|-------|--------|----------------------------|
| LTE 20 MHz                            |       |       |       |        |                            |
| Dual Port                             |       | 8.0   |       | mA     | 30.72 MHz data clock, CMOS |
| TWO RX CHANNELS, TWO TX CHANNELS, DDR |       |       |       |        |                            |
| LTE 3 MHz                             |       |       |       |        |                            |
| Dual Port                             |       | 2.0   |       | mA     | 7.68 MHz data clock, CMOS  |
| LTE 10 MHz                            |       |       |       |        |                            |
| Single Port                           |       | 8.0   |       | mA     | 61.44 MHz data clock, CMOS |
| Dual Port                             |       | 7.5   |       | mA     | 30.72 MHz data clock, CMOS |
| LTE 20 MHz                            |       |       |       |        |                            |
| Dual Port                             |       | 14.0  |       | mA     | 61.44 MHz data clock, CMOS |
| GSM                                   |       |       |       |        |                            |
| Dual Port                             |       | 0.3   |       | mA     | 1.08 MHz data clock, CMOS  |

## Table 4. VDD\_INTERFACE = 2.5 V

| Parameter                                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments       |
|-------------------------------------------------|-------|-------|-------|--------|--------------------------------|
| SLEEP MODE                                      |       | 150   |       | µA     | Power applied, device disabled |
| ONE RX CHANNEL, ONE TX CHANNEL, DDR             |       |       |       |        |                                |
| LTE 10 MHz                                      |       |       |       |        |                                |
| Single Port                                     |       | 6.5   |       | mA     | 30.72 MHz data clock, CMOS     |
| Dual Port                                       |       | 6.0   |       | mA     | 15.36 MHz data clock, CMOS     |
| LTE 20 MHz                                      |       |       |       |        |                                |
| Dual Port                                       |       | 11.5  |       | mA     | 30.72 MHz data clock, CMOS     |
| TWO RX CHANNELS, TWO TX CHANNELS, DDR LTE 3 MHz |       |       |       |        |                                |
| Dual Port                                       |       | 3.0   |       | mA     | 7.68 MHz data clock, CMOS      |
| LTE 10 MHz                                      |       |       |       |        |                                |
| Single Port                                     |       | 11.5  |       | mA     | 61.44 MHz data clock, CMOS     |
| Dual Port                                       |       | 10.0  |       | mA     | 30.72 MHz data clock, CMOS     |
| LTE 20 MHz                                      |       |       |       |        |                                |
| Dual Port                                       |       | 20.0  |       | mA     | 61.44 MHz data clock, CMOS     |
| GSM                                             |       |       |       |        |                                |
| Dual Port                                       |       | 0.5   |       | mA     | 1.08 MHz data clock, CMOS      |

## CURRENT CONSUMPTION-VDDD1P3\_DIG AND VDDA1P3\_X (COMBINATION OF ALL 1.3 V SUPPLIES)

TX is transmit, and RX is receive.

Table 5. 800 MHz, TDD Mode

| Parameter        | Min Typ   | Max   | Unit Test Conditions/Comments   |
|------------------|-----------|-------|---------------------------------|
| ONE RX CHANNEL   |           |       |                                 |
| 5 MHz Bandwidth  | 180       | mA    | Continuous RX                   |
| 10 MHz Bandwidth | 210       | mA    | Continuous RX                   |
| 20 MHz Bandwidth | 260       | mA    | Continuous RX                   |
| TWO RX CHANNELS  |           |       |                                 |
| 5 MHz Bandwidth  | 265       | mA    | Continuous RX                   |
| 10 MHz Bandwidth | 315       | mA    | Continuous RX                   |
| 20 MHz Bandwidth | 405       | mA    | Continuous RX                   |

## SPECIFICATIONS

Table 5. 800 MHz, TDD Mode (Continued)

| Parameter        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|------------------|-------|-------|-------|--------|----------------------------|
| ONE TX CHANNEL   |       |       |       |        |                            |
| 5 MHz Bandwidth  |       |       |       |        |                            |
| 7 dBm            |       | 340   |       | mA     | Continuous TX              |
| -27 dBm          |       | 190   |       | mA     | Continuous TX              |
| 10 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 360   |       | mA     | Continuous TX              |
| -27 dBm          |       | 220   |       | mA     | Continuous TX              |
| 20 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 400   |       | mA     | Continuous TX              |
| -27 dBm          |       | 250   |       | mA     | Continuous TX              |
| TWO TX CHANNELS  |       |       |       |        |                            |
| 5 MHz Bandwidth  |       |       |       |        |                            |
| 7 dBm            |       | 550   |       | mA     | Continuous TX              |
| -27 dBm          |       | 260   |       | mA     | Continuous TX              |
| 10 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 600   |       | mA     | Continuous TX              |
| -27 dBm          |       | 310   |       | mA     | Continuous TX              |
| 20 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 660   |       | mA     | Continuous TX              |
| -27 dBm          |       | 370   |       | mA     | Continuous TX              |

## Table 6. TDD Mode, 2.4 GHz

| Parameter        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|------------------|-------|-------|-------|--------|----------------------------|
| ONE RX CHANNEL   |       |       |       |        |                            |
| 5 MHz Bandwidth  |       | 175   |       | mA     | Continuous receive         |
| 10 MHz Bandwidth |       | 200   |       | mA     | Continuous RX              |
| 20 MHz Bandwidth |       | 240   |       | mA     | Continuous RX              |
| TWO RX CHANNELS  |       |       |       |        |                            |
| 5 MHz Bandwidth  |       | 260   |       | mA     | Continuous RX              |
| 10 MHz Bandwidth |       | 305   |       | mA     | Continuous RX              |
| 20 MHz Bandwidth |       | 390   |       | mA     | Continuous RX              |
| ONE TX CHANNEL   |       |       |       |        |                            |
| 5 MHz Bandwidth  |       |       |       |        |                            |
| 7 dBm            |       | 350   |       | mA     | Continuous TX              |
| -27 dBm          |       | 160   |       | mA     | Continuous TX              |
| 10 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 380   |       | mA     | Continuous TX              |
| -27 dBm          |       | 220   |       | mA     | Continuous TX              |
| 20 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 410   |       | mA     | Continuous TX              |
| -27 dBm          |       | 260   |       | mA     | Continuous TX              |
| TWO TX CHANNELS  |       |       |       |        |                            |
| 5 MHz Bandwidth  |       |       |       |        |                            |
| 7 dBm            |       | 580   |       | mA     | Continuous TX              |
| -27 dBm          |       | 280   |       | mA     | Continuous TX              |
| 10 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 635   |       | mA     | Continuous TX              |
| -27 dBm          |       | 330   |       | mA     | Continuous TX              |

## SPECIFICATIONS

Table 6. TDD Mode, 2.4 GHz (Continued)

| Parameter        | Min Typ   | Max   | Unit   | Test Conditions/Comments   |
|------------------|-----------|-------|--------|----------------------------|
| 20 MHz Bandwidth |           |       |        |                            |
| 7 dBm            | 690       |       | mA     | Continuous TX              |
| -27 dBm          | 390       |       | mA     | Continuous TX              |

## Table 7. TDD Mode, 5.5 GHz

| Parameter        | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|------------------|-------|-------|-------|--------|----------------------------|
| ONE RX CHANNEL   |       |       |       |        |                            |
| 5 MHz Bandwidth  |       | 175   |       | mA     | Continuous RX              |
| 40 MHz Bandwidth |       | 275   |       | mA     | Continuous RX              |
| TWO RX CHANNELS  |       |       |       |        |                            |
| 5 MHz Bandwidth  |       | 270   |       | mA     | Continuous RX              |
| 40 MHz Bandwidth |       | 445   |       | mA     | Continuous RX              |
| ONE TX CHANNEL   |       |       |       |        |                            |
| 5 MHz Bandwidth  |       |       |       |        |                            |
| 7 dBm            |       | 400   |       | mA     | Continuous TX              |
| -27 dBm          |       | 240   |       | mA     | Continuous TX              |
| 40 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 490   |       | mA     | Continuous TX              |
| -27 dBm          |       | 385   |       | mA     | Continuous TX              |
| TWO TX CHANNELS  |       |       |       |        |                            |
| 5 MHz Bandwidth  |       |       |       |        |                            |
| 7 dBm            |       | 650   |       | mA     | Continuous TX              |
| -27 dBm          |       | 335   |       | mA     | Continuous TX              |
| 40 MHz Bandwidth |       |       |       |        |                            |
| 7 dBm            |       | 820   |       | mA     | Continuous TX              |
| -27 dBm          |       | 500   |       | mA     | Continuous TX              |

## Table 8. FDD Mode, 800 MHz

| Parameter                       | Min   | Typ   | Max   | Unit   |
|---------------------------------|-------|-------|-------|--------|
| ONE RX CHANNEL, ONE TX CHANNEL  |       |       |       |        |
| 5 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                           |       | 490   |       | mA     |
| -27 dBm                         |       | 345   |       | mA     |
| 10 MHz Bandwidth                |       |       |       |        |
| 7 dBm                           |       | 540   |       | mA     |
| -27 dBm                         |       | 395   |       | mA     |
| 20 MHz Bandwidth                |       |       |       |        |
| 7 dBm                           |       | 615   |       | mA     |
| -27 dBm                         |       | 470   |       | mA     |
| TWO RX CHANNELS, ONE TX CHANNEL |       |       |       |        |
| 5 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                           |       | 555   |       | mA     |
| -27 dBm                         |       | 410   |       | mA     |
| 10 MHz Bandwidth                |       |       |       |        |
| 7 dBm                           |       | 625   |       | mA     |
| -27 dBm                         |       | 480   |       | mA     |
| 20 MHz Bandwidth                |       |       |       |        |
| 7 dBm                           |       | 740   |       | mA     |

## SPECIFICATIONS

Table 8. FDD Mode, 800 MHz (Continued)

| Parameter                        | Min   | Typ   | Max   | Unit   |
|----------------------------------|-------|-------|-------|--------|
| -27 dBm                          |       | 600   |       | mA     |
| ONE RX CHANNEL, TWO TX CHANNELS  |       |       |       |        |
| 5 MHz Bandwidth                  |       |       |       |        |
| 7 dBm                            |       | 685   |       | mA     |
| -27 dBm                          |       | 395   |       | mA     |
| 10 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                            |       | 755   |       | mA     |
| -27 dBm                          |       | 465   |       | mA     |
| 20 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                            |       | 850   |       | mA     |
| -27 dBm                          |       | 570   |       | mA     |
| TWO RX CHANNELS, TWO TX CHANNELS |       |       |       |        |
| 5 MHz Bandwidth                  |       |       |       |        |
| 7 dBm                            |       | 790   |       | mA     |
| -27 dBm                          |       | 495   |       | mA     |
| 10 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                            |       | 885   |       | mA     |
| -27 dBm                          |       | 590   |       | mA     |
| 20 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                            |       | 1020  |       | mA     |
| -27 dBm                          |       | 730   |       | mA     |

## Table 9. FDD Mode, 2.4 GHz

| Parameter                       | Min   | Typ   | Max   | Unit   |
|---------------------------------|-------|-------|-------|--------|
| ONE RX CHANNEL, ONE TX CHANNEL  |       |       |       |        |
| 5 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                           |       | 500   |       | mA     |
| -27 dBm                         |       | 350   |       | mA     |
| 10 MHz Bandwidth                |       |       |       |        |
| 7 dBm                           |       | 540   |       | mA     |
| -27 dBm                         |       | 390   |       | mA     |
| 20 MHz Bandwidth                |       |       |       |        |
| 7 dBm                           |       | 620   |       | mA     |
| -27 dBm                         |       | 475   |       | mA     |
| TWO RX CHANNELS, ONE TX CHANNEL |       |       |       |        |
| 5 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                           |       | 590   |       | mA     |
| -27 dBm                         |       | 435   |       | mA     |
| 10 MHz Bandwidth                |       |       |       |        |
| 7 dBm                           |       | 660   |       |        |
| -27 dBm                         |       | 510   |       | mA     |
| 20 MHz Bandwidth                |       |       |       |        |
| 7 dBm                           |       | 770   |       | mA     |
| -27 dBm                         |       | 620   |       | mA     |
| ONE RX CHANNEL, TWO TX CHANNELS |       |       |       | mA     |
| 5 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                           |       | 730   |       | mA     |
| -27 dBm                         |       | 425   |       | mA     |

## SPECIFICATIONS

## Table 9. FDD Mode, 2.4 GHz (Continued)

| Parameter                        | Min   | Typ   | Max   | Unit   |
|----------------------------------|-------|-------|-------|--------|
| 10 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                            |       | 800   |       | mA     |
| -27dBm                           |       | 500   |       | mA     |
| 20 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                            |       | 900   |       | mA     |
| -27 dBm                          |       | 600   |       | mA     |
| TWO RX CHANNELS, TWO TX CHANNELS |       |       |       | mA     |
| 5 MHz Bandwidth                  |       |       |       |        |
| 7 dBm                            |       | 820   |       |        |
| -27 dBm                          |       | 515   |       | mA     |
| 10 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                            |       | 900   |       | mA     |
| -27 dBm                          |       | 595   |       | mA     |
| 20 MHz Bandwidth                 |       |       |       |        |
| 7 dBm                            |       | 1050  |       | mA     |
| -27 dBm                          |       | 740   |       | mA     |

## Table 10. FDD Mode, 5.5 GHz

| Parameter                        | Min   | Typ   | Max   | Unit   |
|----------------------------------|-------|-------|-------|--------|
| ONE RX CHANNEL, ONE TX CHANNEL   |       |       |       |        |
| 5 MHz Bandwidth                  |       |       |       |        |
| 7 dBm                            |       | 550   |       | mA     |
| -27 dBm                          |       | 385   |       | mA     |
| TWO RX CHANNELS, ONE TX CHANNEL  |       |       |       |        |
| 5 MHz Bandwidth                  |       |       |       |        |
| 7 dBm                            |       | 645   |       | mA     |
| -27 dBm                          |       | 480   |       | mA     |
| ONE RX CHANNELS, TWO TX CHANNELS |       |       |       |        |
| 5 MHz Bandwidth                  |       |       |       |        |
| 7 dBm                            |       | 805   |       | mA     |
| -27 dBm                          |       | 480   |       | mA     |
| TWO RX CHANNELS, TWO TX CHANNELS |       |       |       |        |
| 5 MHz Bandwidth                  |       |       |       |        |
| 7 dBm                            |       | 895   |       | mA     |
| -27 dBm                          |       | 575   |       | mA     |

## BURN-IN DELTA LIMITS SPECIFICATIONS

Electrical characteristics at VDD\_GPO = 3.3 V, VDD\_INTERFACE = 1.8 V, VDDD1P3\_DIG = 1.3 V, and all other VDDA1P3\_x pins = 1.3 V. Deltas are performed at T A = 25°C.

## Table 11.

| Parameter                | Min   | Typ   | Max   | Unit   |
|--------------------------|-------|-------|-------|--------|
| SUPPLY CHARACTERISTICS   |       |       |       |        |
| Total Sleep Mode Current | -3    |       | +3    | mA     |
| DIGITAL INPUT CURRENTS   |       |       |       |        |
| Low                      | -60   |       | +60   | nA     |
| High                     | -60   |       | +60   | nA     |
| TRANSMITTERS, 2.3 GHz    |       |       |       |        |

## SPECIFICATIONS

Table 11. (Continued)

| Parameter                |   Min | Typ   |   Max | Unit   |
|--------------------------|-------|-------|-------|--------|
| Fundamental Output Power |  -1.5 |       |   1.5 | dBm    |

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at VDD\_GPO = 3.3 V, VDD\_INTERFACE = 1.8 V, VDDD1P3\_DIG = 1.3 V, and all other VDDA1P3\_x pins = 1.3 V, T A = 25°C, unless otherwise noted. Total ionizing dose (TID) testing characterized to 150 krads (100 krads + 50% overstress) with biased annealing at 100°C for 168 hours. Once characterized, TID testing is performed to 100 krads only.

Table 12.

| Parameter                          | Test Conditions/Comments                        | Min   | Typ   | Max   | Unit   |
|------------------------------------|-------------------------------------------------|-------|-------|-------|--------|
| SUPPLY CHARACTERISTICS             |                                                 |       |       |       |        |
| Total Sleep Mode Current           |                                                 |       | 2     | 14    | mA     |
| Total Active Mode Current          |                                                 |       | 120   | 150   | mA     |
| DIGITAL INPUT CURRENTS             |                                                 |       |       |       |        |
| Low                                |                                                 | -0.1  |       | +0.1  | µA     |
| High                               |                                                 | -0.1  |       | +0.1  | µA     |
| XTALN INPUT CURRENT                | Reference clock input directly to the XTALN pin |       |       |       |        |
| Low                                |                                                 | -0.1  |       | +0.1  | µA     |
| High                               |                                                 | -200  |       | +200  | µA     |
| RECEIVERS, 2.3 GHz                 |                                                 |       |       |       |        |
| LO Leakage                         | At receiver front-end input                     |       | -110  | -75   | dBm    |
| RX1 to RX2 Isolation               |                                                 |       |       |       |        |
| RX1A_x to RX2A_x, RX1C_x to RX2C_x |                                                 | 28    | 65    |       | dB     |
| RX1B_x to RX2B_x                   |                                                 | 28    | 50    |       | dB     |
| RX2 to RX1 Isolation               |                                                 |       |       |       |        |
| RX2A_x to RX1A_x, RX2C_x to RX1C_x |                                                 | 28    | 65    |       | dB     |
| RX2B_x to RX1B_x                   |                                                 | 28    | 50    |       | dB     |
| TRANSMITTERS, 2.3 GHz              |                                                 |       |       |       |        |
| Carrier Leakage                    | 0 dB attenuation                                |       | -50   | -42   | dBc    |
|                                    | 41.75 dB attenuation                            |       | -34   | -25   | dBc    |
| Fundamental Output Power           | 0 dB attenuation                                | 3.0   | 5.0   |       | dBm    |

## ABSOLUTE MAXIMUM RATINGS

| Table 13.                                                                                                                                                                                                                                                                    |                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| VDDD1P3_DIG, VDDA1P3_x 1 to VSSx VDD_INTERFACE to VSSx VDD_GPO to VSSx Logic Inputs and Outputs to VSSx Input Current to Any Pin Except Supplies RF Inputs (Peak Power) TX Monitor Input Power (Peak Power) Package Power Dissipation Maximum Junction Temperature (T JMAX ) | -0.3 V to +1.4 V -0.3 V to +3.0 V -0.3 V to +3.9 V -0.3 V to VDD_INTERFACE + 0.3 V ±10 mA 2.5 dBm 9 dBm (T JMAX - T A )/θ JA 110°C |
| Peak Reflow                                                                                                                                                                                                                                                                  | 240°C                                                                                                                              |
| Operating Temperature Range                                                                                                                                                                                                                                                  | -40°C to +85°C                                                                                                                     |
| Storage Temperature Range                                                                                                                                                                                                                                                    | -65°C to +150°C                                                                                                                    |

- 1 VDDA1P3\_x refers to VDDA1P3\_TX\_LO, VDDA1P3\_TX\_VCO\_LDO, VDDA1P3\_RX\_RF, VDDA1P3\_RX\_TX, VDDA1P3\_RX\_LO, VDDA1P3\_TX\_LO\_BUFFER, VDDA1P3\_RX\_VCO\_LDO, VDDA1P3\_RX\_SYNTH, VDDA1P3\_TX\_SYNTH, and VDDA1P3\_BB.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure.

θ JCT is the junction to case top thermal resistance.

## Table 14. Thermal Resistance

| Package Type   |   Airflow Velocity (m/sec) |   θ JA 1, 2 | θ JCT 1, 3   | Unit   |
|----------------|----------------------------|-------------|--------------|--------|
| BC-144-7       |                        0   |        32.3 | 9.6          | °C/W   |
|                |                        1   |        29.6 |              | °C/W   |
|                |                        2.5 |        27.8 |              | °C/W   |

- 2 Per JEDEC JESD51-2 (still air) or JEDEC JESD51-6 (moving air).
- 3 Per MIL-STD 883, Method 1012.1.

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 15. Outgas Testing

| Specification (Tested per ASTM E595-15)   | Value   | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Loss                           | 0.18    | %      |
| Collected Volatile Condensable Material   | <0.01   | %      |
| Water Vapor Recovered                     | 0.05    | %      |

## RADIATION FEATURES

## Table 16. Radiation Features

| Specifications                                                             | Value   | Unit         |
|----------------------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = 50 rad(Si)/s to 300 rad(Si)/s) 1 | 100     | krad(Si)     |
| No SEL Occurs at Effective Linear Energy Transfer (LET) 2                  | ≤80     | MeV-cm 2 /mg |

- 1 Guaranteed by device and process characterization. Contact Analog Devices, Inc., for data available up to 100 krads.
- 2 Limits are characterized at initial qualification and after any design or process changes that may affect the SEL characteristics, but are not production lot tested unless specified by the customer through the purchase order or contract. For more information on single event effect (SEE) test results, contact Analog Devices for further data beyond published report on the Analog Devices website.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Table 17. Pin Function Descriptions

| Pin No.                                                                               | Type 1   | Mnemonic                                                             | Description                                                                                                                                                                                                        |
|---------------------------------------------------------------------------------------|----------|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A1, A2                                                                                | I        | RX2A_N, RX2A_P                                                       | Receive Channel 2 Differential Input A. Each pin can be used as a single-ended input or combined to make a differential pair. Tie unused pins to ground.                                                           |
| A3, M3                                                                                | DNC      | DNC                                                                  | Do Not Connect. Do not connect to these pins.                                                                                                                                                                      |
| A4, A6, B1, B2, B12, C2, C7 to C12, F3, H2, H3, H6, J2, K2, L2, L3, L7 to L12, M4, M6 | I        | VSSA                                                                 | Analog Ground. Tie these pins directly to the VSSD digital ground on the PCB (one ground plane).                                                                                                                   |
| A5                                                                                    | I        | TX_MON2                                                              | Transmit Channel 2 Power Monitor Input. If this pin is unused, tie it to ground.                                                                                                                                   |
| A7, A8                                                                                | O        | TX2A_N, TX2A_P                                                       | Transmit Channel 2 Differential Output A. Tie unused pins to 1.3 V.                                                                                                                                                |
| A9, A10                                                                               | O        | TX2B_N, TX2B_P                                                       | Transmit Channel 2 Differential Output B. Tie unused pins to 1.3 V.                                                                                                                                                |
| A11                                                                                   | I        | VDDA1P1_TX_VCO                                                       | Transmit VCO Supply Input. Connect to B11.                                                                                                                                                                         |
| A12                                                                                   | I        | TX_EXT_LO_IN                                                         | External Transmit LO Input. If this pin is unused, tie it to ground.                                                                                                                                               |
| B3                                                                                    | O        | AUXDAC1                                                              | Auxiliary DAC 1 Output.                                                                                                                                                                                            |
| B4 to B7                                                                              | O        | GPO_3 to GPO_0                                                       | 3.3 V Capable General-Purpose Outputs.                                                                                                                                                                             |
| B8                                                                                    | I        | VDD_GPO                                                              | 2.5 V to 3.3 V Supply for the AUXDACx and General-Purpose Output Pins. When the VDD_GPO supply is not used, this supply must be set to 1.3 V.                                                                      |
| B9                                                                                    | I        | VDDA1P3_TX_LO                                                        | Transmit LO 1.3 V Supply Input. Connect to B10.                                                                                                                                                                    |
| B10                                                                                   | I        | VDDA1P3_TX_VCO_LDO                                                   | Transmit VCO LDO 1.3 V Supply Input. Connect to B9.                                                                                                                                                                |
| B11                                                                                   | O        | TX_VCO_LDO_OUT                                                       | Transmit VCO LDO Output. Connect to A11 and a 1 µF bypass capacitor in series with a 1 Ω resistor to ground.                                                                                                       |
| C1, D1                                                                                | I        | RX2C_P, RX2C_N                                                       | Receive Channel 2 Differential Input C. Each pin can be used as a single-ended input or combined to make a differential pair. These inputs experience degraded performance above 3 GHz. Tie unused pins to ground. |
| C3                                                                                    | O        | AUXDAC2                                                              | Auxiliary DAC 2 Output.                                                                                                                                                                                            |
| C4                                                                                    | I        | TEST/ENABLE                                                          | Test Input. Ground this pin for normal operation.                                                                                                                                                                  |
| C5, C6, D6, D5                                                                        | I        | CTRL_IN0 to CTRL_IN3                                                 | Control Inputs. Use these pins for manual RX gain and TX attenuation control.                                                                                                                                      |
| D2                                                                                    | I        | VDDA1P3_RX_RF                                                        | Receiver 1.3 V Supply Input. Connect to D3.                                                                                                                                                                        |
| D3                                                                                    | I        | VDDA1P3_RX_TX                                                        | 1.3 V Supply Input. Connect to D2.                                                                                                                                                                                 |
| D4, E4 to E6, F4 to F6, G4                                                            | O        | CTRL_OUT0, CTRL_OUT1 to CTRL_OUT3, CTRL_OUT6 to CTRL_OUT4, CTRL_OUT7 | Control Outputs. These pins are multipurpose outputs that have programmable functionality.                                                                                                                         |
| D7                                                                                    | I/O      | P0_D9/TX_D4_P                                                        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D9, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0.                                     |

Figure 2. Pin Configuration, Top View

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 17. Pin Function Descriptions (Continued)

| Pin No.                             | Type 1   | Mnemonic             | Description                                                                                                                                                                                                                                                                                                                                                                                                    |
|-------------------------------------|----------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D8                                  | I/O      | P0_D7/TX_D3_P        | Alternatively, as TX_D4_P, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination. Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D7, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D3_P, this pin can function as part of the LVDS 6-bit TX differential |
| D9                                  | I/O      | P0_D5/TX_D2_P        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D5, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D2_P, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination.                                                                                            |
| D10                                 | I/O      | P0_D3/TX_D1_P        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D3, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D1_P, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination.                                                                                            |
| D11                                 | I/O      | P0_D1/TX_D0_P        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D1, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D0_P, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination.                                                                                            |
| D12, F7, F9, F11, G12, H7, H10, K12 | I        | VSSD                 | Digital Ground. Tie these pins directly to the VSSA analog ground on the PCB (one ground plane).                                                                                                                                                                                                                                                                                                               |
| E1, F1                              | I        | RX2B_P, RX2B_N       | Receive Channel 2 Differential Input B. Each pin can be used as a single-ended input or combined to make a differential pair. These inputs experience degraded performance above 3 GHz. Tie unused pins to ground.                                                                                                                                                                                             |
| E2                                  | I        | VDDA1P3_RX_LO        | Receive LO 1.3 V Supply Input. Connect to F2.                                                                                                                                                                                                                                                                                                                                                                  |
| E3                                  | I        | VDDA1P3_TX_LO_BUFFER | Transmit LO Buffer. 1.3 V Supply Input.                                                                                                                                                                                                                                                                                                                                                                        |
| E7                                  | I/O      | P0_D11/TX_D5_P       | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D11, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D5_P, this pin can function as part of the LVDS 6 - bit TX differential input bus with internal LVDS termination.                                                                                         |
| E8                                  | I/O      | P0_D8/TX_D4_N        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D8, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D4_N, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination.                                                                                            |
| E9                                  | I/O      | P0_D6/TX_D3_N        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D6, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D3_N, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination.                                                                                            |
| E10                                 | I/O      | P0_D4/TX_D2_N        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D4, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D2_N, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination.                                                                                            |
| E11                                 | I/O      | P0_D2/TX_D1_N        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D2, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D1_N, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination.                                                                                            |
| E12                                 | I/O      | P0_D0/TX_D0_N        | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D0, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D0_N, this pin can function as part of the LVDS 6-bit TX differential input bus with internal LVDS termination.                                                                                            |
| F2                                  | I        | VDDA1P3_RX_VCO_LDO   | Receive VCO LDO 1.3 V Supply Input. Connect to E2.                                                                                                                                                                                                                                                                                                                                                             |
| F8                                  | I/O      | P0_D10/TX_D5_N       | Digital Data Port P0/Transmit Differential Input Bus. This is a dual function pin. As P0_D10, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 0. Alternatively, as TX_D5_N, this pin can function as part of the LVDS 6 - bit TX differential input bus with internal LVDS termination.                                                                                         |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 17. Pin Function Descriptions (Continued)

| Pin No.   | Type 1   | Mnemonic               | Description                                                                                                                                                                                                                                                                                                             |
|-----------|----------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| F10, G10  | I        | FB_CLK_P, FB_CLK_N     | Feedback Clock. These pins receive the FB_CLK_x signal that clocks in TX data. In CMOS mode, use FB_CLK_P as the input and tie FB_CLK_N to ground.                                                                                                                                                                      |
| F12       | I        | VDDD1P3_DIG            | 1.3 V Digital Supply Input.                                                                                                                                                                                                                                                                                             |
| G1        | I        | RX_EXT_LO_IN           | External Receive LO Input. If this pin is unused, tie it to ground.                                                                                                                                                                                                                                                     |
| G2        | O        | RX_VCO_LDO_OUT         | Receive VCO LDO Output. Connect this pin directly to G3 and a 1 µF bypass capacitor in series with a 1 Ω resistor to ground.                                                                                                                                                                                            |
| G3        | I        | VDDA1P1_RX_VCO         | Receive VCO Supply Input. Connect this pin directly to G2 only.                                                                                                                                                                                                                                                         |
| G5        | I        | EN_AGC                 | Manual Control Input for AGC.                                                                                                                                                                                                                                                                                           |
| G6        | I        | ENABLE                 | Control Input. This pin moves the device through various operational states.                                                                                                                                                                                                                                            |
| G7, G8    | O        | RX_FRAME_N, RX_FRAME_P | Receive Digital Data Framing Output Signal. These pins transmit the RX_FRAME_x signal that indicates whether the RX output data is valid. In CMOS mode, use RX_FRAME_P as the output and leave RX_FRAME_N unconnected.                                                                                                  |
| G9, H9    | I        | TX_FRAME_P, TX_FRAME_N | Transmit Digital Data Framing Input Signal. These pins receive the TX_FRAME_x signal that indicates when TX data is valid. In CMOS mode, use TX_FRAME_P as the input and tie TX_FRAME_N to ground.                                                                                                                      |
| G11, H11  | O        | DATA_CLK_P, DATA_CLK_N | Receive Data Clock Output. These pins transmit the DATA_CLK_x signal that is used by the BBP to clock RX data. In CMOS mode, use DATA_CLK_P as the output and leave DATA_CLK_N unconnected.                                                                                                                             |
| H1, J1    | I        | RX1B_P, RX1B_N         | Receive Channel 1 Differential Input B. Alternatively, each pin can be used as a single-ended input. These inputs experience degraded performance above 3 GHz. Tie unused pins to ground.                                                                                                                               |
| H4        | I        | TXNRX                  | Enable State Machine Control Signal. This pin controls the data port bus direction. A logic low selects the RX direction, and a logic high selects the TX direction.                                                                                                                                                    |
| H5        | I        | SYNC_IN                | Input to Synchronize Digital Clocks Between Multiple AD9361S-CSH Devices. If this pin is unused, tie it to ground.                                                                                                                                                                                                      |
| H8        | I/O      | P1_D11/RX_D5_P         | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D11, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D5_P, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination.   |
| H12       | I        | VDD_INTERFACE          | 1.2 V to 2.5 V Supply for Digital I/O Pins (1.8 V to 2.5 V in LVDS Mode).                                                                                                                                                                                                                                               |
| J3        | I        | VDDA1P3_RX_SYNTH       | 1.3 V Supply Input.                                                                                                                                                                                                                                                                                                     |
| J4        | I        | SPI_DI                 | SPI Serial Data Input.                                                                                                                                                                                                                                                                                                  |
| J5        | I        | SPI_CLK                | SPI Clock Input.                                                                                                                                                                                                                                                                                                        |
| J6        | O        | CLK_OUT                | Output Clock. This pin can be configured to output either a buffered version of the external input clock, the digitally controlled crystal oscillator (DCXO), or a divided down version of the internal ADC clock.                                                                                                      |
| J7        | I/O      | P1_D10/RX_D5_N         | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D10, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D5_N, this pin can function as part of the LVDS 6 - bit RX differential output bus with internal LVDS termination. |
| J8        | I/O      | P1_D9/RX_D4_P          | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D9, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D4_P, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination.    |
| J9        | I/O      | P1_D7/RX_D3_P          | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D7, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D3_P, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination.    |
| J10       | I/O      | P1_D5/RX_D2_P          | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D5, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D2_P, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination.    |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 17. Pin Function Descriptions (Continued)

| Pin No.   | Type 1   | Mnemonic         | Description                                                                                                                                                                                                                                                                                                          |
|-----------|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J11       | I/O      | P1_D3/RX_D1_P    | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D3, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D1_P, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination. |
| J12       | I/O      | P1_D1/RX_D0_P    | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D1, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D0_P, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination. |
| K1, L1    | I        | RX1C_P, RX1C_N   | Receive Channel 1 Differential Input C. Alternatively, each pin can be used as a single-ended input. These inputs experience degraded performance above 3 GHz. Tie unused pins to ground.                                                                                                                            |
| K3        | I        | VDDA1P3_TX_SYNTH | 1.3 V Supply Input.                                                                                                                                                                                                                                                                                                  |
| K4        | I        | VDDA1P3_BB       | 1.3 V Supply Input.                                                                                                                                                                                                                                                                                                  |
| K5        | I        | RESETB           | Asynchronous Reset. Logic low resets the device.                                                                                                                                                                                                                                                                     |
| K6        | I        | SPI_ENB          | SPI Enable Input. Set this pin to logic low to enable the SPI bus.                                                                                                                                                                                                                                                   |
| K7        | I/O      | P1_D8/RX_D4_N    | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D8, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D4_N, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination. |
| K8        | I/O      | P1_D6/RX_D3_N    | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D6, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D3_N, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination. |
| K9        | I/O      | P1_D4/RX_D2_N    | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D4, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D2_N, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination. |
| K10       | I/O      | P1_D2/RX_D1_N    | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D2, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D1_N, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination. |
| K11       | I/O      | P1_D0/RX_D0_N    | Digital Data Port P1/Receive Differential Output Bus. This is a dual function pin. As P1_D0, it functions as part of the 12-bit bidirectional parallel CMOS level Data Port 1. Alternatively, as RX_D0_N, this pin can function as part of the LVDS 6-bit RX differential output bus with internal LVDS termination. |
| L4        | I        | RBIAS            | Bias Input Reference. Connect this pin through a 14.3 kΩ (1% tolerance) resistor to ground.                                                                                                                                                                                                                          |
| L5        | I        | AUXADC           | Auxiliary ADC Input. If this pin is unused, tie it to ground.                                                                                                                                                                                                                                                        |
| L6        | O        | SPI_DO           | SPI Serial Data Output in 4-Wire Mode, or High-Z in 3-Wire Mode.                                                                                                                                                                                                                                                     |
| M1, M2    | I        | RX1A_P, RX1A_N   | Receive Channel 1 Differential Input A. Alternatively, each pin can be used as a single-ended input. Tie unused pins to ground.                                                                                                                                                                                      |
| M5        | I        | TX_MON1          | Transmit Channel 1 Power Monitor Input. When this pin is unused, tie it to ground.                                                                                                                                                                                                                                   |
| M7, M8    | O        | TX1A_P, TX1A_N   | Transmit Channel 1 Differential Output A. Tie unused pins to 1.3 V.                                                                                                                                                                                                                                                  |
| M9, M10   | O        | TX1B_P, TX1B_N   | Transmit Channel 1 Differential Output B. Tie unused pins to 1.3                                                                                                                                                                                                                                                     |
| M11, M12  | I        | XTALP, XTALN     | V. Reference Frequency Crystal Connections. When a crystal is used, connect it between these two pins. When an external clock source is used, connect it to XTALN and leave XTALP unconnected.                                                                                                                       |

1 I is input, O is output, I/O is input/output, and DNC is do not connect.

## TYPICAL PERFORMANCE CHARACTERISTICS

See the AD9361 data sheet for a full set of Typical Performance Characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                         |
|----------------------------|----------------|---------------------------------------------|
| BC-144-7                   | CSP_BGA        | 144-Ball Chip Scale Package Ball Grid Array |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description                    | Packing Quantity   | Package Option   |
|---------------|---------------------|----------------------------------------|--------------------|------------------|
| AD9361BBC-CSH | -40°C to +85°C      | 144-Ball CSP_BGA (10mm x 10mm x 1.7mm) | Tray, 184          | BC-144-7         |

<!-- image -->

Rev. B | 23 of 23

Updated: March 11, 2023