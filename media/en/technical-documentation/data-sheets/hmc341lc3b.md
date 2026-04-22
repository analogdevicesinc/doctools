<!-- lastmod 2023-01-31 -->
<!-- image -->

<!-- image -->

## Typical Applications

The HMC341LC3B is ideal for:

- Point-to-Point Radios
- Point-to-Multi-Point Radios &amp; VSAT
- Test Equipment &amp; Sensors
- Military End-Use

## Functional Diagram

<!-- image -->

## SMT GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 21 - 29 GHz

## Features

2.5 dB Noise Figure

13 dB Gain

- +3V @ 35 mA Supply

50 Ohm  Matched Input/Output

RoHS Compliant 3x3 mm SMT Package

## General Description

The  HMC341LC3B  is  a  GaAs  pHEMT  MMIC  Low Noise  Amplifier  housed  in  a  leadless  RoHS  compliant  SMT  package.  Operating  from  21  to  29  GHz, the  amplifier  provides  13  dB  of  gain  and  a  noise figure  of  2.5  dB  from  a  single  +3V  supply.  The  RF I/Os  are  DC  blocked  and  matched  to  50  Ohms requiring no external components. The HMC341LC3B eliminates  the  need  for  wire  bonding,  allowing  the use of surface mount manufacturing techniques.

## Electrical Specifications, T A = +25° C, Vdd = +3V, Idd = 35 mA

| Parameter                                | Min.   | Typ.    | Max.   | Min.   | Typ.    | Max.   | Min.   | Typ.    | Max.   | Units   |
|------------------------------------------|--------|---------|--------|--------|---------|--------|--------|---------|--------|---------|
| Frequency Range                          |        | 21 - 24 |        |        | 24 - 26 |        |        | 26 - 29 |        | GHz     |
| Gain                                     | 10.5   | 13.5    |        | 10     | 13      |        | 9      | 12      |        | dB      |
| Gain Variation Over Temperature          |        | 0.016   | 0.025  |        | 0.016   | 0.025  |        | 0.016   | 0.025  | dB/ °C  |
| Noise Figure                             |        | 3.25    | 5      |        | 3       | 3.5    |        | 2.5     | 3      | dB      |
| Input Return Loss                        |        | 10      |        |        | 11      |        |        | 9       |        | dB      |
| Output Return Loss                       |        | 14      |        |        | 10      |        |        | 9       |        | dB      |
| Output Power for 1 dB Compression (P1dB) |        | 8       |        |        | 8.5     |        |        | 8.5     |        | dBm     |
| Saturated Output Power (Psat)            |        | 11      |        |        | 11.5    |        |        | 11.5    |        | dBm     |
| Output Third Order Intercept (IP3)       |        | 19      |        |        | 19      |        |        | 19      |        | dBm     |
| Supply Current (Idd) (Vdd = +3V)         |        | 35      |        |        | 35      |        |        | 35      |        | mA      |

v04.0223

<!-- image -->

<!-- image -->

Broadband Gain &amp; Return Loss

<!-- image -->

Input Return Loss vs. Temperature

<!-- image -->

Noise Figure vs. Temperature

<!-- image -->

## HMC341LC3B

v04.0223

## SMT GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 21 - 29 GHz

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

Power Compression @ 25 GHz

<!-- image -->

## HMC341LC3B

v04.0223

## SMT GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 21 - 29 GHz

Psat vs. Temperature

<!-- image -->

Reverse Isolation vs. Temperature

<!-- image -->

Gain, Power &amp; Noise Figure vs. Supply Voltage @ 25 GHz

<!-- image -->

<!-- image -->

<!-- image -->

## Absolute Maximum Ratings

| Drain Bias Voltage (Vdd)                                    | +5.5 Vdc               |
|-------------------------------------------------------------|------------------------|
| RF Input Power (RFIN)(Vdd = +3.0 Vdc)                       | +5 dBm                 |
| Channel Temperature                                         | 175 °C                 |
| Continuous Pdiss (T= 85 °C) (derate 5.43 mW/°C above 85 °C) | 0.489W                 |
| Thermal Resistance (channel to ground paddle)               | 184 °C/W               |
| Storage Temperature                                         | -65 to +150 °C         |
| Operating Temperature                                       | -40 to +85 °C          |
| ESD Sensitivity (HBM)                                       | Class 1A (Passed 250V) |

## Outline Drawing

PKG-004837

## Package Information

| Part Number   | Package Body Material   | Lead Finish      | MSL Rating   | Package Marking [2]   |
|---------------|-------------------------|------------------|--------------|-----------------------|
| HMC341LC3B    | Alumina, White          | Gold over Nickel | MSL3 [1]     | H341 XXXX             |

<!-- image -->

## HMC341LC3B

v04.0223

## SMT GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 21 - 29 GHz

## Typical Supply Current vs. Vdd

|   Vdd (Vdc) |   Idd (mA) |
|-------------|------------|
|         2.7 |         34 |
|         3   |         35 |
|         4   |         38 |
|         5   |         41 |

Note: Amplifier will operate over full voltage ranges shown above.

<!-- image -->

<!-- image -->

12-Terminal Leadless Chip Carrier (LCC) (E-12-4)

Dimensions shown in millimeters

03-02-2017-A

<!-- image -->

<!-- image -->

## Pin Descriptions

## HMC341LC3B

v04.0223

## SMT GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 21 - 29 GHz

<!-- image -->

| Pin Number   | Function   | Description                                                                                                    | Interface Schematic   |
|--------------|------------|----------------------------------------------------------------------------------------------------------------|-----------------------|
| 1            | Vdd        | Power Supply Voltage for the amplifier. External bypass capacitors of 100 pF, 1000pF, and 2.2 µF are required. |                       |
| 2, 3, 7-9    | N/C        | No connection required. These pins may be connected to RF/DC ground without affecting performance.             |                       |
| 4, 6, 10, 12 | GND        | Package bottom has an exposed metal paddle that must also be connected to RF/DC ground.                        |                       |
| 5            | RFIN       | This pin is AC coupled and matched to 50 Ohms from 21 - 29 GHz.                                                |                       |
| 11           | RFOUT      | This pin is AC coupled and matched to 50 Ohms from 21 - 29 GHz.                                                |                       |

## Application Circuit

| Component   | Value    |
|-------------|----------|
| C1          | 100 pF   |
| C2          | 1,000 pF |
| C3          | 2.2 µF   |

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluation PCB

<!-- image -->

## List of Materials for Evaluation PCB 112646  [1]

| Item    | Description                    |
|---------|--------------------------------|
| J1, J2  | SRI K-connector                |
| J3, J4  | DC Pin                         |
| C1      | 100 pF capacitor, 0402 Pkg..   |
| C2      | 1,000 pF Capacitor, 0603 Pkg.. |
| C3      | 2.2µF Capacitor, Tantalum      |
| U1      | HMC341LC3B Amplifier           |
| PCB [2] | 112647 Evaluation PCB          |

The circuit board used in this application should use RF circuit  design  techniques.  Signal  lines  should have 50 Ohm impedance while the package ground leads  and  exposed  paddle  should  be  connected directly to the ground plane similar to that shown. A sufficient number of via holes should be used to connect  the  top  and  bottom  ground  planes.  The evaluation board should be mounted to an appropriate heat sink. The evaluation circuit board shown is available from Analog Devices, upon request.

## HMC341LC3B

v04.0223

## SMT GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 21 - 29 GHz