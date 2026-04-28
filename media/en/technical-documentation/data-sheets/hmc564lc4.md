<!-- lastmod 2024-05-07 -->
<!-- image -->

<!-- image -->

## Typical Applications

The HMC564LC4 is ideal for use as a LNA or driver amplifier for:

- Point-to-Point Radios
- Point-to-Multi-Point Radios &amp; VSAT
- Test Equipment and Sensors
- Military &amp; Space

## Functional Diagram

## HMC564LC4

v09.0524

## GaAs SMT pHEMT LOW NOISE AMPLIFIER, 6 - 14GHz

## Features

Noise Figure:  1.8 dB

Gain: 17 dB

OIP3: 25 dBm

Single Supply: +3V @ 51 mA

50 Ohm Matched Input/Output

RoHS Compliant 4 x 4 mm Package

## General Description

<!-- image -->

The  HMC564LC4  is  a  high  dynamic  range  GaAs pHEMT  MMIC  Low  Noise  Amplifier  housed  in  a leadless  RoHS  compliant  4x4  mm  SMT  package. Operating  from 6 to 14 GHz, the HMC564LC4 features extremely  flat  small  signal  gain  of  17  dB  as  well  as 1.8 dB noise figure and +25 dBm output IP3 across the operating band. This self-biased LNA is ideal for microwave radios due to its consistent output power, single +3V supply operation, and DC blocked RF I/O's.

## Electrical Specifications, T A = +25° C, Vdd 1, 2 = +3V

| Parameter                                | Min.   | Typ.   | Max.   | Units   |
|------------------------------------------|--------|--------|--------|---------|
| Frequency Range                          | 6 - 14 | 6 - 14 | 6 - 14 | GHz     |
| Gain                                     | 14     | 17     |        | dB      |
| Gain Variation Over Temperature          |        | 0.02   | 0.03   | dB/ °C  |
| Noise Figure                             |        | 1.8    | 2.2    | dB      |
| Input Return Loss                        |        | 15     |        | dB      |
| Output Return Loss                       |        | 14     |        | dB      |
| Output Power for 1 dB Compression (P1dB) | 10     | 13     |        | dBm     |
| Saturated Output Power (Psat)            |        | 14.5   |        | dBm     |
| Output Third Order Intercept (IP3)       |        | 25     |        | dBm     |
| Supply Current (Idd)(Vdd = +3V)          |        | 51     | 75     | mA      |

<!-- image -->

<!-- image -->

Broadband Gain &amp; Return Loss

<!-- image -->

Input Return Loss vs. Temperature

<!-- image -->

Noise Figure vs. Temperature

<!-- image -->

## HMC564LC4

v09.0524

## GaAs SMT pHEMT LOW NOISE AMPLIFIER, 6 - 14 GHz

Gain vs. Temperature

<!-- image -->

Output Return Loss vs. Temperature

<!-- image -->

Output IP3 vs. Temperature

<!-- image -->

<!-- image -->

<!-- image -->

P1dB vs. Temperature

<!-- image -->

Reverse Isolation vs. Temperature

<!-- image -->

Gain, Power &amp; Noise Figure vs. Supply Voltage @ 8 GHz

<!-- image -->

## HMC564LC4

v09.0524

## GaAs SMT pHEMT LOW NOISE AMPLIFIER, 6 - 14 GHz

<!-- image -->

Psat vs. Temperature

<!-- image -->

Additive Phase Noise Vs Offset Frequency, RF Frequency = 11 GHz, RF Input Power = 2.5 dBm (Psat)

<!-- image -->

<!-- image -->

<!-- image -->

Notes:

v09.0524

GaAs SMT pHEMT LOW NOISE AMPLIFIER, 6 - 14 GHz

Additive Phase Noise Vs Offset Frequency, RF Frequency = 11 GHz, RF Input Power = -4 dBm (P1dB)

<!-- image -->

<!-- image -->

<!-- image -->

## Absolute Maximum Ratings

## HMC564LC4

v09.0524

## GaAs SMT pHEMT LOW NOISE AMPLIFIER, 6 - 14 GHz

## Typical Supply Current vs. Vdd

| Drain Bias Voltage (Vdd1, Vdd2)                             | +3.5 Vdc             |
|-------------------------------------------------------------|----------------------|
| RF Input Power (RFIN) (Vdd = +3.0 Vdc)                      | +20 dBm              |
| Channel Temperature                                         | 175 °C               |
| Continuous Pdiss (T= 85 °C) (derate 12.9 mW/°C above 85 °C) | 1.16W                |
| Thermal Resistance (channel to ground paddle)               | 77 .5 °C/W           |
| Storage Temperature                                         | -65 to +150 °C       |
| Operating Temperature                                       | -40 to +85 °C        |
| ESD Sensitivity (HBM)                                       | Class 1A 24-Terminal |

|   Vdd (V) |   Idd (mA) |
|-----------|------------|
|       2.5 |         49 |
|       3   |         51 |
|       3.5 |         53 |

Note: Amplifier will operate over full voltage ranges shown above.

<!-- image -->

24-Terminal Ceramic Leadless Chip Carrier [LCC]

(E-24-1)

Dimensions shown in millimeters.

<!-- image -->

## Outline Drawing

<!-- image -->

24-Terminal Ceramic Leadless Chip Carrier [LCC]

(E-24-1)

Dimensions shown in millimeters.

PKG-004840

## Package Information

| Part Number    | Package Body Material   | Lead Finish      | MSL Rating   | Package Marking [2]   |
|----------------|-------------------------|------------------|--------------|-----------------------|
| HMC564LC4      | Alumina, White          | Gold over Nickel | MSL3 [1]     | H564 XXXX             |
| HMC564LC4TR    | Alumina, White          | Gold over Nickel | MSL3 [1]     | H564 XXXX             |
| HMC564LC4TR-R5 | Alumina, White          | Gold over Nickel | MSL3 [1]     | H564 XXXX             |

02-27-2017-B

<!-- image -->

<!-- image -->

## Pin Descriptions

| Pin Number                   | Function   | Description                                                                                            | Interface Schematic   |
|------------------------------|------------|--------------------------------------------------------------------------------------------------------|-----------------------|
| 1, 5 -14, 18, 20, 21, 22, 24 | N/C        | No connection required.These pins may be connected to RF/ DC ground without affecting performance.     |                       |
| 2, 4, 15, 17                 | GND        | These pins and package bottom must be connected to RF/DC ground.                                       |                       |
| 3                            | RFIN       | This pin is AC coupled and matched to 50 Ohms.                                                         |                       |
| 16                           | RFOUT      | This pin is AC coupled and matched to 50 Ohms.                                                         |                       |
| 19, 23                       | Vdd1, Vdd2 | Power Supply Voltage for the amplifier. External bypass capacitors of 100 pF, and 2.2 µF are required. |                       |

## Application Circuit

| Component   | Value   |
|-------------|---------|
| C1, C2      | 100 pF  |
| C3, C4      | 2.2 µF  |

<!-- image -->

## HMC564LC4

v09.0524

## GaAs SMT pHEMT LOW NOISE AMPLIFIER, 6 - 14 GHz

<!-- image -->

<!-- image -->

## Evaluation PCB

<!-- image -->

## List of Material for Evaluation PCB 116156-HMC564LC4  [1]

| Item    | Description                  |
|---------|------------------------------|
| J1, J2  | PCB Mount K Connectorbvv     |
| J3 - J7 | DC Pin                       |
| C1 - C2 | 100 pF capacitor, 0402 Pkg.. |
| C3 - C4 | 2.2µF Capacitor, Tantalum    |
| U1      | HMC564LC4 Amplifier          |
| PCB [2] | 108535 Evaluation PCB        |

[1] Reference this number when ordering complete evaluation PCB [2] Circuit Board Material: Rogers 4350.

The circuit board used in this application should use RF circuit  design  techniques.  Signal  lines  should have 50 Ohm impedance while the package ground leads  and  exposed  paddle  should  be  connected directly to the ground plane similar to that shown. A sufficient number of via holes should be used to connect  the  top  and  bottom  ground  planes.  The evaluation board should be mounted to an appropriate heat sink. The evaluation circuit board shown is available from Analog Devices upon request.

## HMC564LC4

v09.0524

## GaAs SMT pHEMT LOW NOISE AMPLIFIER, 6 - 14 GHz