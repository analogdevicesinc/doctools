<!-- lastmod 2021-12-21 -->
<!-- image -->

## Typical applications

The HMC519LC4 is ideal for:

- Point-to-Point Radios
- Point-to-Multi-Point Radios &amp; VSAT
- Test Equipment &amp; Sensors
- Military &amp; Space

## Functional Diagram

## HMC519LC4

v05.1221

## Gaas PHEMT MMIC LOW NOIsE aMPLIFIER, 18 - 31 GHz

## Features

Noise Figure: 3.5 dB

Gain: 14 dB

Output IP3: +23 dBm

Single Supply: +3V @ 75 mA

50 Ohm Matched Input/Output

24 Lead Ceramic 4x4mm SMT Package: 16mm 2

## General Description

<!-- image -->

The  HMC519LC4  is  a  high  dynamic  range  GaAs pHEMT MMIC Low Noise Amplifier (LNA) housed in a leadless 4 x 4 mm ceramic surface mount package. The  amplifier  operates  between  18  and  31  GHz, providing  14  dB  of  small  signal  gain,  3.5  dB  noise figure and output IP3 of +23 dBm, while requiring only 75  mA  from  a  +3V  single  supply.  The  P1dB  output power of +11 dBm, enables the LNA to function as a LO driver for balanced, I/Q or image reject mixers. The HMC519LC4 also features I/Os that are DC blocked and internally matched to 50 Ohms, making it ideal for microwave radio and VSAT applications.

## Electrical specifications, T a = +25° C, Vdd 1, 2, 3 = +3V

| Parameter                                |   Min. | Typ.    |   Max. |   Min. | Typ.    |   Max. | Units   |
|------------------------------------------|--------|---------|--------|--------|---------|--------|---------|
| Frequency Range                          |        | 18 - 28 |        |        | 28 - 31 |        | GHz     |
| Gain                                     |   11.4 | 14.4    |        |   10.2 | 13.2    |        | dB      |
| Gain Variation Over Temperature          |        | 0.016   |  0.026 |        | 0.016   |  0.026 | dB/ °C  |
| Noise Figure                             |        | 3.5     |    5.5 |        | 3       |      5 | dB      |
| Input Return Loss                        |        | 15      |        |        | 17      |        | dB      |
| Output Return Loss                       |        | 20      |        |        | 22      |        | dB      |
| Output Power for 1 dB Compression (P1dB) |      8 | 11      |        |    9.2 | 12.2    |        | dBm     |
| Saturated Output Power (Psat)            |        | 14      |        |        | 15.4    |        | dBm     |
| Output Third Order Intercept (IP3)       |        | 23      |        |        | 24      |        | dBm     |
| Supply Current (Idd)                     |        | 75      |     95 |        | 75      |     95 | mA      |

<!-- image -->

## Broadband Gain &amp; Return Loss

<!-- image -->

Input Return Loss vs. Temperature

<!-- image -->

Noise Figure vs. Temperature

<!-- image -->

## HMC519LC4

v05.1221

## Gaas PHEMT MMIC LOW NOIsE aMPLIFIER, 18 - 31 GHz

Gain vs. Temperature

<!-- image -->

Output Return Loss vs. Temperature

<!-- image -->

Output IP3 vs. Temperature

<!-- image -->

<!-- image -->

P1dB vs. Temperature

<!-- image -->

## Reverse Isolation vs. Temperature

<!-- image -->

<!-- image -->

## HMC519LC4

v05.1221

## Gaas PHEMT MMIC LOW NOIsE aMPLIFIER, 18 - 31 GHz

Psat vs. Temperature

<!-- image -->

Power Compression @ 24 GHz

<!-- image -->

additive Phase Noise Vs Offset Frequency, RF Frequency = 26.5 GHz, RF Input Power = 5 dBm (Psat)

<!-- image -->

<!-- image -->

## absolute Maximum Ratings

## HMC519LC4

v05.1221

## Gaas PHEMT MMIC LOW NOIsE aMPLIFIER, 18 - 31 GHz

## Typical supply Current vs. Vdd

| Drain Bias Voltage (Vdd1, Vdd2, Vdd3)                     | +3.5 Vdc      |
|-----------------------------------------------------------|---------------|
| RF Input Power (RFIN)(Vdd = +3.0 Vdc)                     | +20 dBm       |
| Channel Temperature                                       | 175 °C        |
| Continuous Pdiss (T= 85 °C) (derate 13 mW/°C above 85 °C) | 1.2W          |
| Thermal Resistance (channel to package bottom)            | 76.9 °C/W     |
| Storage Temperature                                       | -65 to 150 °C |
| Operating Temperature                                     | -40 to 85 °C  |
| ESD Sensitivity (HBM)                                     | Class 1B      |

|   Vdd (V) |   Idd (mA) |
|-----------|------------|
|       2.5 |         72 |
|       3.0 |         75 |
|       3.5 |         78 |

Note: Amplifier will operate over full voltage ranges shown above.

<!-- image -->

24-Terminal Ceramic Leadless Chip Carrier [LCC]

(E-24-1)

Dimensions shown in millimeters.

## Outline Drawing

PKG-004840

## Package Information

| Part Number   | Package Body Material   | Lead Finish      | MSL Rating   | Package Marking [2]   |
|---------------|-------------------------|------------------|--------------|-----------------------|
| HMC519LC4     | Alumina, White          | Gold over Nickel | MSL3 [1]     | H519 XXXX             |

<!-- image -->

24-Terminal Ceramic Leadless Chip Carrier [LCC] (E-24-1) Dimensions shown in millimeters.

<!-- image -->

02-27-2017-B

<!-- image -->

## Pad Descriptions

| Pad Number                | Function         | Description                                                                                       | Interface Schematic   |
|---------------------------|------------------|---------------------------------------------------------------------------------------------------|-----------------------|
| 1, 5 - 14, 18, 20, 22, 24 | N/C              | Not Connected                                                                                     |                       |
| 2, 4, 15, 17              | GND              | Package bottom has exposed metal paddle that must be connected to RF/DC ground.                   |                       |
| 3                         | RFIN             | This pad is AC coupled and matched to 50 Ohms                                                     |                       |
| 16                        | RFOUT            | This pad is AC coupled and matched to 50 Ohms                                                     |                       |
| 19, 21, 23                | Vdd3, Vdd2, Vdd1 | Power Supply Voltage for the amplifier. See application circuit for required external components. |                       |

## application Circuit

<!-- image -->

## HMC519LC4

v05.1221

## Gaas PHEMT MMIC LOW NOIsE aMPLIFIER, 18 - 31 GHz

<!-- image -->

## Evaluation PCB

<!-- image -->

## List of Material for Evaluation PCB 119667  [1]

| Item       | Description                  |
|------------|------------------------------|
| J1, J2     | 2.92mm PCB mount K-Connector |
| J3 - J6    | DC Pin                       |
| C1, C2, C3 | 100pF Capacitor, 0402 Pkg.   |
| C4, C5, C6 | 1000pF Capacitor, 0603 Pkg.  |
| C7, C8, C9 | 4.7 µF Capacitor, Tantalum   |
| U1         | HMC519LC4 Amplifier          |
| PCB [2]    | 11995 Evaluation PCB         |

- [1] Reference this number when ordering complete evaluation PCB

[2] Circuit Board Material: Rogers 4350.

## HMC519LC4

v05.1221

## Gaas PHEMT MMIC LOW NOIsE aMPLIFIER, 18 - 31 GHz

The circuit board used in this application should use RF  circuit  design  techniques.  Signal  lines  should have 50 Ohm impedance while the package ground leads  and  exposed  paddle  should  be  connected directly to the ground plane similar to that shown. A sufficient number of via holes should be used to connect  the  top  and  bottom  ground  planes.  The evaluation board should be mounted to an appropriate heat sink. The evaluation circuit board shown is available from Analog Devices, upon request.