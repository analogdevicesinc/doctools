<!-- lastmod 2021-04-20 -->
<!-- image -->

<!-- image -->

## Typical Applications

Prescaler for DC to X Band PLL Applications:

- Satellite Communication Systems
- Fiber Optic
- Point-to-Point and Point-to-Multi-Point Radios
- VSAT

## Functional Diagram

<!-- image -->

## HMC363S8G / 363S8GE

SMT GaAs HBT MMIC DIVIDE-BY-8, DC - 12 GHz

## Features

Ultra Low SSB Phase Noise: -153 dBc/Hz

Wide Bandwidth

Output Power: -6 dBm

Single DC Supply: +5V

S8G SMT Package

## General Description

The  HMC363S8G  &amp;  HMC363S8GE  are  low  noise Divide-by-8  Static  Dividers  with  InGaP  GaAs  HBT technology  in  8  lead  surface  mount  plastic  packages.  This  device  operates  from  DC  (with  a  square wave input) to 12 GHz input frequency with a single +5V DC supply.  The low additive SSB phase noise of -153 dBc/Hz at 100 kHz offset helps the user maintain good system noise performance.

## Electrical Specifications, T A = +25° C, 50 Ohm System, Vcc= 5V

| Parameter                        | Conditions                  |   Min. | Typ.   |   Max. | Units   |
|----------------------------------|-----------------------------|--------|--------|--------|---------|
| Maximum Input Frequency          |                             |     12 | 13     |        | GHz     |
| Minimum Input Frequency          | Sine Wave Input. [1]        |        | 0.2    |    0.5 | GHz     |
| Input Power Range                | Fin = 1 to 7 GHz            |    -15 | >-20   |    +10 | dBm     |
|                                  | Fin = 7 to 11 GHz           |    -10 | >-15   |     +2 | dBm     |
|                                  | Fin = 11 to 12 GHz          |     -5 | >-8    |      0 | dBm     |
| Output Power                     | Fin = 12 GHz                |     -9 | -6     |        | dBm     |
| Reverse Leakage                  | Both RF Outputs Terminated  |        | 65     |        | dB      |
| SSB Phase Noise (100 kHz offset) | Pin = 0 dBm, Fin = 6 GHz    |        | -153   |        | dBc/Hz  |
| Output Transition Time           | Pin = 0 dBm, Fout = 882 MHz |        | 100    |        | ps      |
| Supply Current (Icc)             |                             |        | 70     |        | mA      |

v08.1026

<!-- image -->

v08.1026

<!-- image -->

Input Sensitivity Window, T= 25 °C

<!-- image -->

Output Power vs. Temperature

<!-- image -->

Output Harmonic Content, Pin= 0 dBm, T= 25 °C

<!-- image -->

## HMC363S8G / 363S8GE

SMT GaAs HBT MMIC DIVIDE-BY-8, DC - 12 GHz v08.1026

Input Sensitivity Window vs. Temperature

<!-- image -->

SSB Phase Noise Performance, Pin= 0 dBm, T= 25 °C

<!-- image -->

Reverse Leakage, Pin= 0 dBm, T= 25 °C

<!-- image -->

<!-- image -->

<!-- image -->

## HMC363S8G / 363S8GE

SMT GaAs HBT MMIC DIVIDE-BY-8, DC - 12 GHz

Output Voltage Waveform, Pin= 0 dBm, Fout= 882 MHz, T= 25 °C

<!-- image -->

## Absolute Maximum Ratings

| RF Input (Vcc = +5V)                                     | +13 dBm        |
|----------------------------------------------------------|----------------|
| Vcc                                                      | +5.5V          |
| Channel Temperature                                      | 135 °C         |
| Continuous Pdiss (T=85°C) (derate 13.7 mW/°C above 85°C) | 680 mW         |
| Thermal Resistance (channel to ground paddle)            | 73.2 C/W       |
| Storage Temperature                                      | -65 to +150 °C |
| Operating Temperature                                    | -40 to +85 °C  |

## Typical Supply Current vs. Vcc

|   Vcc (V) |   Icc (mA) |
|-----------|------------|
|      4.75 |         64 |
|       5.0 |         70 |
|      5.25 |         75 |

Note: Divider will operate over full voltage range shown above

<!-- image -->

ELECTROSTATIC SENSITIVE DEVICE OBSERVE HANDLING PRECAUTIONS

<!-- image -->

<!-- image -->

## Outline Drawing

## HMC363S8G / 363S8GE

SMT GaAs HBT MMIC DIVIDE-BY-8, DC - 12 GHz

8-Lead Standard Small Outline Package, with Exposed Pad [SOIC\_N\_EP]

Narrow Body, Low Stand-off

(RD-8-3)

Dimensions shown in millimeters.

<!-- image -->

## Package Information

| Part Number               | Package Body Material                              | Lead Finish   | MSL Rating   | Package Marking [3]   |
|---------------------------|----------------------------------------------------|---------------|--------------|-----------------------|
| HMC363S8G OBSOLETE PART   | Low Stress Injection Molded Plastic                | Sn/Pb Solder  | MSL3 [1]     | HMC363 XXXX           |
| HMC363S8GTR OBSOLETE PART | Low Stress Injection Molded Plastic                | Sn/Pb Solder  | MSL3 [1]     | HMC363 XXXX           |
| HMC363S8GE                | RoHS-compliant Low Stress Injection Molded Plastic | 100% matte Sn | MSL3 [2]     | HMC363 XXXX           |
| HMC363S8GETR              | RoHS-compliant Low Stress Injection Molded Plastic | 100% matte Sn | MSL3 [2]     | HMC363 XXXX           |
| 104631- HMC363S8G         | Eval Board                                         |               |              |                       |

Dimensions shown in millimeters.

v08.1026

03-31-2021-A

<!-- image -->

<!-- image -->

## Pin Description

| Pin Number   | Function   | Description                                                                                             | Interface Schematic   |
|--------------|------------|---------------------------------------------------------------------------------------------------------|-----------------------|
| 1            | NOUT       | Divided output 180° out of phase with pin 3.                                                            |                       |
| 2, 6         | N/C        | No connection. These pins must not be grounded.                                                         |                       |
| 3            | OUT        | Divided Output.                                                                                         |                       |
| 4            | VCC        | Supply voltage 5V ± 0.25V.                                                                              |                       |
| 5            | IN         | RF Input must be DC blocked.                                                                            |                       |
| 7            | NIN        | RF Input 180° out of phase with pin 5 for differential operation. A/C ground for single ended operation |                       |
| 8, paddle    | GND        | Backside of package has exposed metal ground slug which must be connected to ground.                    |                       |

## Application Circuit

<!-- image -->

v08.1026

## HMC363S8G / 363S8GE

SMT GaAs HBT MMIC DIVIDE-BY-8, DC - 12 GHz

<!-- image -->

<!-- image -->

## Evaluation PCB

v08.1026

## HMC363S8G / 363S8GE

SMT GaAs HBT MMIC DIVIDE-BY-8, DC - 12 GHz

J4 J5

<!-- image -->

## List of Materials for Evaluation PCB 104631  [1]

| Item    | Description                        |
|---------|------------------------------------|
| J1 - J3 | PCB Mount SMA RF Connector         |
| C1 - C4 | 100 pF Capacitor, 0402 Pkg.        |
| C5      | 1000 pF Capacitor, 0603 Pkg.       |
| C6      | 10 µF Tantalum Capacitor           |
| U1      | HMC363S8G / HMC363S8GE Divide-by-8 |
| PCB [2] | 104627 Eval Board                  |

[2] Circuit Board Material: Rogers 4350

The circuit board used in the application should use RF circuit  design  techniques.  Signal  lines  should have 50 Ohm impedance while the package ground leads  and  backside  ground  slug  should  be  connected directly to the ground plane similar to that shown. A sufficient number of via holes should be used to connect the top and bottom ground planes. The  evaluation  circuit  board  shown  is  available from Analog Devices upon request. This evaluation board is designed for single ended input testing. J2 and J3 provide differential output signals.