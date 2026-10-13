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

## HMC362S8G / 362S8GE

SMT GaAs HBT MMIC DIVIDE-BY-4, DC - 12 GHz

## Features

Ultra Low SSB Phase Noise: -149 dBc/Hz

Wide Bandwidth

Output Power: -6 dBm

Single DC Supply: +5V

S8G SMT Package

## General Description

The  HMC362S8G  &amp;  HMC362S8GE  are  low  noise Divide-by-4  Static  Dividers  with  InGaP  GaAs  HBT technology in 8 lead surface mount plastic packages. This  device  operates  from  DC  (with  a  square  wave input)  to  12  GHz  input  frequency  with  a  single  +5V DC supply.  The low additive SSB phase noise of -149 dBc/Hz at 100 kHz offset helps the user maintain good system noise performance.

## Electrical Specifications, T A = +25° C, 50 Ohm System, Vcc = 5V

| Parameter                        | Conditions                  |   Min. | Typ.   |   Max. | Units   |
|----------------------------------|-----------------------------|--------|--------|--------|---------|
| Maximum Input Frequency          |                             |     12 | 13     |        | GHz     |
| Minimum Input Frequency          | Sine Wave Input. [1]        |        | 0.2    |    0.5 | GHz     |
| Input Power Range                | Fin = 1 to 8 GHz            |    -15 | >-20   |    +10 | dBm     |
|                                  | Fin = 8 to 10 GHz           |    -10 | >-15   |     +3 | dBm     |
|                                  | Fin = 10 to 12 GHz          |     -5 | >-8    |      0 | dBm     |
| Ouput Power                      | Fin = 11 GHz                |     -9 | -6     |        | dBm     |
| Reverse Leakage                  | Both RF Outputs Terminated  |        | 60     |        | dB      |
| SSB Phase Noise (100 kHz offset) | Pin = 0dBm, Fin = 6 GHz     |        | -149   |        | dBc/Hz  |
| Output Transition Time           | Pin = 0 dBm, Fout = 882 MHz |        | 100    |        | ps      |
| Supply Current (Icc)             |                             |        | 68     |        | mA      |

v06.1026

<!-- image -->

v06.1026

<!-- image -->

Input Sensitivity Window, T= 25 °C

<!-- image -->

Output Power vs. Temperature

<!-- image -->

Output Harmonic Content, Pin= 0 dBm, T= 25 °C

<!-- image -->

SMT GaAs HBT MMIC DIVIDE-BY-4, DC - 12 GHz

Input Sensitivity Window vs. Temperature

<!-- image -->

SSB Phase Noise Performance, Pin= 0 dBm, T= 25 °C

<!-- image -->

Reverse Leakage, Pin= 0 dBm, T= 25 °C

<!-- image -->

<!-- image -->

## Outline Drawing

SMT GaAs HBT MMIC

DIVIDE-BY-4, DC - 12 GHz

## Absolute Maximum Ratings

| RF Input (Vcc = +5V)   | +13 dBm                |
|------------------------|------------------------|
| Vcc                    | +5.5V                  |
| VLogic                 | Vcc -1.6V to Vcc -1.2V |
| Storage Temperature    | -65 to +150 °C         |
| Operating Temperature  | -40 to +85 °C          |

<!-- image -->

ELECTROSTATIC SENSITIVE DEVICE OBSERVE HANDLING PRECAUTIONS

## Typical Supply Current vs. Vcc

v06.1026

<!-- image -->

Output Voltage Waveform, Pin= 0 dBm, Fout= 882 MHz, T= 25 °C

<!-- image -->

8-Lead Standard Small Outline Package, with Exposed Pad [SOIC\_N\_EP]

Narrow Body, Low Stand-off

(RD-8-3)

| Vcc (V)          |   Icc (mA) |
|------------------|------------|
| 4.75             |         61 |
| 5.0              |         68 |
| 5.25 [SOIC_N_EP] |         74 |

Note: Divider will operate over full voltage range shown above Dimensions shown in millimeters.

<!-- image -->

## Package Information

| Part Number             | Package Body Material                              | Lead Finish   | MSL Rating   | Package Marking [3]   |
|-------------------------|----------------------------------------------------|---------------|--------------|-----------------------|
| HMC362S8G OBSOLETE PART | Low Stress Injection Molded Plastic                | Sn/Pb Solder  | MSL3 [1]     | HMC362 XXXX           |
| HMC362S8GE              | RoHS-compliant Low Stress Injection Molded Plastic | 100% matte Sn | MSL3 [2]     | HMC362 XXXX           |

<!-- image -->

<!-- image -->

## Pin Description

| Pin Number   | Function   | Description                                                                                             | Interface Schematic   |
|--------------|------------|---------------------------------------------------------------------------------------------------------|-----------------------|
| 1            | OUT        | Divided output 180° out of phase with pin 3.                                                            |                       |
| 2, 6         | N/C        | No connection. These pins must not be grounded.                                                         |                       |
| 3            | OUT        | Divided Output.                                                                                         |                       |
| 4            | VCC        | Supply voltage 5V ± 0.25V.                                                                              |                       |
| 5            | IN         | RF Input must be DC blocked.                                                                            |                       |
| 7            | IN         | RF Input 180° out of phase with pin 5 for differential operation. A/C ground for single ended operation |                       |
| 8            | GND        | Ground Backside of package has exposed metal ground slug which must be connected to ground.             |                       |

v06.1026

## HMC362S8G / 362S8GE

SMT GaAs HBT MMIC

DIVIDE-BY-4, DC - 12 GHz

<!-- image -->

<!-- image -->

## Evaluation PCB

v06.1026

J4 J5

<!-- image -->

## List of Materials for Evaluation PCB 104631  [1]

| Item    | Description                        |
|---------|------------------------------------|
| J1 - J3 | PCB Mount SMA RF Connector         |
| C1 - C4 | 100 pF Capacitor, 0402 Pkg.        |
| C5      | 1000 pF Capacitor, 0603 Pkg.       |
| C6      | 10 µF Tantalum Capacitor           |
| U1      | HMC362S8G / HMC362S8GE Divide-by-4 |
| PCB [2] | 104627 Eval Board                  |

[1] Reference this number when ordering complete evaluation PCB

[2] Circuit Board Material: Rogers 4350

The circuit board used in the application should use RF circuit  design  techniques.  Signal  lines  should have 50 Ohm impedance while the package ground leads  and  backside  ground  slug  should  be  connected directly to the ground plane similar to that shown. A sufficient number of via holes should be used to connect the top and bottom ground planes. The  evaluation  circuit  board  shown  is  available from Hittite upon request. This evaluation board is designed for single ended input testing. J2 and J3 provide differential output signals.

SMT GaAs HBT MMIC DIVIDE-BY-4, DC - 12 GHz Application Circuit v06.1026

<!-- image -->

<!-- image -->

<!-- image -->

SMT GaAs HBT MMIC DIVIDE-BY-4, DC - 12 GHz