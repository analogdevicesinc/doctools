<!-- lastmod 2024-02-16 -->
<!-- image -->

## Typical Applications

The HMC565LC5 is ideal for use as a LNA or driver amplifier for:

- Point-to-Point Radios
- Point-to-Multi-Point Radios &amp; VSAT
- Test Equipment and Sensors
- Military &amp; Space

## Functional Diagram

## GaAs SMT PHEMT LOW NOISE AMPLIFIER, 6 - 20 GHz

## Features

Noise Figure: 2.5 dB

Gain: 21 dB

OIP3: 20 dBm

Single Supply: +3V @ 53 mA

50 Ohm Matched Input/Output

RoHS Compliant 5 x 5 mm Package

## General Description

<!-- image -->

The  HMC565LC5  is  a  high  dynamic  range  GaAs pHEMT  MMIC  Low  Noise  Amplifier  housed  in  a leadless  RoHS  compliant  5x5mm  SMT  package. Operating    from  6  to  20  GHz,  the  HMC565LC5 features  21  dB  of  small  signal  gain,  2.5  dB  noise figure  and  IP3  of  +20  dBm  across  the  operating band.  This  self-biased  LNA  is  ideal  for  microwave radios due to its single +3V supply operation, and DC blocked RF I/O's.

## Electrical Specifications, T A = +25° C, Vdd 1, 2, 3 = +3V

| Parameter                                | Min.   | Typ.   | Max.   | Min.   | Typ.    | Max.   | Units   |
|------------------------------------------|--------|--------|--------|--------|---------|--------|---------|
| Frequency Range                          |        | 6 - 12 |        |        | 12 - 20 |        | GHz     |
| Gain                                     | 19     | 21     |        | 16     | 18.5    |        | dB      |
| Gain Variation Over Temperature          |        | 0.025  | 0.035  |        | 0.025   | 0.035  | dB/ °C  |
| Noise Figure                             |        | 2.5    | 2.8    |        | 2.5     | 3      | dB      |
| Input Return Loss                        |        | 15     |        |        | 12      |        | dB      |
| Output Return Loss                       |        | 13     |        |        | 15      |        | dB      |
| Output Power for 1 dB Compression (P1dB) | 8      | 10     |        | 9      | 11      |        | dBm     |
| Saturated Output Power (Psat)            |        | 11     |        |        | 13      |        | dBm     |
| Output Third Order Intercept (IP3)       |        | 20     |        |        | 21      |        | dBm     |
| Total Supply Current (Idd)(Vdd = +3V)    |        | 53     | 75     |        | 53      | 75     | mA      |

v04.0118

<!-- image -->

Broadband Gain &amp; Return Loss

<!-- image -->

Input Return Loss vs. Temperature

<!-- image -->

<!-- image -->

## HMC565LC5

v04.0118

## GaAs SMT PHEMT LOW NOISE AMPLIFIER, 6 - 20 GHz

<!-- image -->

Gain vs. Temperature

<!-- image -->

<!-- image -->

<!-- image -->

P1dB vs. Temperature

<!-- image -->

Reverse Isolation vs. Temperature

<!-- image -->

## HMC565LC5

v04.0118

## GaAs SMT PHEMT LOW NOISE AMPLIFIER, 6 - 20 GHz

Psat vs. Temperature

<!-- image -->

Power Compression @ 12 GHz

<!-- image -->

Gain, Noise Figure &amp; Power vs. Supply Voltage @ 12 GHz

<!-- image -->

<!-- image -->

## Absolute Maximum Ratings

| Drain Bias Voltage (Vdd1, Vdd2, Vdd3)                      | +3.5 Vdc                  |
|------------------------------------------------------------|---------------------------|
| RF Input Power (RFIN)(Vdd = +3.0 Vdc)                      | 10 dBm                    |
| Channel Temperature                                        | 175 °C                    |
| Continuous Pdiss (T= 85 °C) (derate 8.5 mW/°C above 85 °C) | 0.753W                    |
| Thermal Resistance (channel to ground paddle)              | 119.5 °C/W                |
| Storage Temperature                                        | -65 to +150 °C            |
| Operating Temperature                                      | -40 to +85 °C 32-Terminal |
| ESD Sensitivity (HBM)                                      | Class 1A Dimensions       |

## Outline Drawing

PKG-004843

## ORDERING GUIDE

| Part Number    | Package Material   | Lead Finish      | MSL Rating [1]   | Package Marking [2]   |
|----------------|--------------------|------------------|------------------|-----------------------|
| HMC565LC5      | Alumina, White     | Gold over Nickle | MSL3             | H565 XXXX             |
| HMC565LC5TR    | Alumina, White     | Gold over Nickle | MSL3             | H565 XXXX             |
| HMC565LC5TR-R5 | Alumina, White     | Gold over Nickle | MSL3             | H565 XXXX             |

<!-- image -->

## HMC565LC5

v04.0118

## GaAs SMT PHEMT LOW NOISE AMPLIFIER, 6 - 20 GHz

## Typical Supply Current vs. Vdd

|   Vdd (V) |   Idd (mA) |
|-----------|------------|
|       2.5 |         51 |
|       3   |         53 |
|       3.5 |         56 |

32-Terminal Ceramic Leadless Chip Carrier [LCC]

(E-32-1)

Dimensions shown in millimeters.

<!-- image -->

<!-- image -->

32-Terminal Ceramic Leadless Chip Carrier [LCC]

(E-32-1) Dimensions shown in millimeters.

<!-- image -->

## Pin Descriptions

| Pin Number                            | Function   | Description                                                                                           | Interface Schematic   |
|---------------------------------------|------------|-------------------------------------------------------------------------------------------------------|-----------------------|
| 1, 2, 6 - 19, 23 - 25, 27, 29, 31, 32 | N/C        | This pin may be connected to RF/DC ground. Performance will not be affected.                          |                       |
| 3, 5, 20, 22                          | GND        | These pins and package bottom must be connected to RF/DC ground.                                      |                       |
| 4                                     | RFIN       | This pin is AC coupled and matched to 50 Ohms.                                                        |                       |
| 21                                    | RFOUT      | This pin is AC coupled and matched to 50 Ohms.                                                        |                       |
| 30, 28, 26                            | Vdd1, 2, 3 | Power Supply Voltage for the amplifier. External bypass capacitors of 100 pF and 2.2 µF are required. |                       |

## Application Circuit

| Component   | Value   |
|-------------|---------|
| C1, C2, C3  | 100 pF  |
| C4, C5, C6  | 2.2 µF  |

<!-- image -->

## HMC565LC5

v04.0118

## GaAs SMT PHEMT LOW NOISE AMPLIFIER, 6 - 20 GHz

<!-- image -->

## Evaluation PCB

<!-- image -->

## List of Materials for Evaluation PCB 110431  [1]

| Item    | Description                 |
|---------|-----------------------------|
| J1 - J2 | PCB Mount K Connector       |
| J3      | 2 mm DC Header              |
| C1 - C3 | 100 pF Capacitor, 0402 Pkg. |
| C4 - C6 | 2.2 µF Capacitor, Tantalum  |
| U1      | HMC565LC5 Amplifier         |
| PCB [2] | 109001 Evaluation PCB       |

[2] Circuit Board Material: Rogers 4350

The circuit board used in the application should use RF circuit  design  techniques.  Signal  lines  should have 50 Ohm impedance while the package ground leads  and  exposed  paddle  should  be  connected directly to the ground plane similar to that shown. A sufficient number of via holes should be used to connect  the  top  and  bottom  ground  planes.  The evaluation board should be mounted to an appropriate heat sink. The evaluation circuit board shown is available from Analog Devices upon request.

## HMC565LC5

v04.0118

## GaAs SMT PHEMT LOW NOISE AMPLIFIER, 6 - 20 GHz