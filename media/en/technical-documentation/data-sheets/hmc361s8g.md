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

## HMC361S8G/361S8GE

SMT GaAs HBT MMIC DIVIDE-BY-2, DC - 10 GHz

## Features

Ultra Low SSB Phase Noise: -148 dBc/Hz

Wide Bandwidth

Output Power: 3 dBm

Single DC Supply: +5V

S8G SMT Package

## General Description

The  HMC361S8G  &amp;  HMC361S8GE  are  low  noise Divide-by-2  Static  Dividers  with  InGaP  GaAs  HBT technology in 8 lead surface mount plastic packages. This  device  operates  from  DC  (with  a  square  wave input)  to  10  GHz  input  frequency  with  a  single  +5V DC supply.  The low additive SSB phase noise of -148 dBc/Hz at 100 kHz offset helps the user maintain good system noise performance.

## Electrical Specifications, T A = +25° C, 50 Ohm System, Vcc= 5V

| Parameter                        | Conditions                  |   Min. |   Typ. |   Max. | Units   |
|----------------------------------|-----------------------------|--------|--------|--------|---------|
| Maximum Input Frequency          |                             |     10 |     11 |        | GHz     |
| Minimum Input Frequency          | Sine Wave Input. [1]        |        |    0.2 |    0.5 | GHz     |
| Input Power Range                | Fin = 1 to 8 GHz            |    -15 |        |    +10 | dBm     |
|                                  | Fin = 8 to 10 GHz           |    -10 |        |     +2 | dBm     |
| Output Power                     | Fin = 6 GHz                 |      0 |      3 |        | dBm     |
|                                  | Fin = 10 GHz                |     -6 |        |        | dBm     |
| Reverse Leakage                  | Both RF Outputs Terminated  |        |     45 |        | dB      |
| SSB Phase Noise (100 kHz offset) | Pin = 0 dBm, Fin = 6 GHz    |        |   -148 |        | dBc/Hz  |
| Output Transition Time           | Pin = 0 dBm, Fout = 882 MHz |        |    100 |        | ps      |
| Supply Current (Icc)             |                             |        |     83 |        | mA      |

v09.0421

<!-- image -->

v09.0421

<!-- image -->

Input Sensitivity Window, T= 25 °C

<!-- image -->

INPUT FREQUENCY (GHz)

Output Power vs. Temperature

<!-- image -->

Output Harmonic Content, Pin= 0 dBm, T= 25 °C

<!-- image -->

SMT GaAs HBT MMIC DIVIDE-BY-2, DC - 10 GHz v09.0421

Input Sensitivity Window vs. Temperature

<!-- image -->

SSB Phase Noise Performance, Pin= 0 dBm, T= 25 °C

<!-- image -->

Reverse Leakage, Pin= 0 dBm, T= 25 °C

<!-- image -->

<!-- image -->

<!-- image -->

Output Voltage Waveform, Pin= 0 dBm, Fout= 882 MHz, T= 25 °C

<!-- image -->

<!-- image -->

## Outline Drawing

## HMC361S8G/361S8GE

SMT GaAs HBT MMIC

DIVIDE-BY-2, DC - 10 GHz

## Absolute Maximum Ratings

| RF Input (Vcc = +5V)                                         | +13 dBm                |
|--------------------------------------------------------------|------------------------|
| Vcc                                                          | +5.5V                  |
| VLogic                                                       | Vcc -1.6V to Vcc -1.2V |
| Junction Temperature (T J )                                  | 135 °C                 |
| Continuous Pdiss (T = 85 °C) (derate 15.9 mW/°C above 85 °C) | 0.79W                  |
| Thermal Resistance (R TH ) (junction to ground paddle)       | 63 °C/W                |
| Storage Temperature                                          | -65 to +150 °C         |
| Operating Temperature                                        | -40 to +85 °C          |

## Typical Supply Current vs. Vcc

ELECTROSTATIC SENSITIVE DEVICE OBSERVE HANDLING PRECAUTIONS

8-Lead Standard Small Outline Package, with Exposed Pad [SOIC\_N\_EP]

Narrow Body, Low Stand-off

| Vcc (V)              |   Icc (mA) |
|----------------------|------------|
| 4.75                 |         74 |
| 5.0                  |         83 |
| 5.25 Pad [SOIC_N_EP] |         89 |

(RD-8-3)

Note: Divider will operate over full voltage range shown above

Dimensions shown in millimeters.

<!-- image -->

PKG-006220

<!-- image -->

BOTTOM VIEW

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MS-012-BA

8-Lead Standard Small Outline Package, with Exposed Pad [SOIC\_N\_EP] Narrow Body, Low Stand-off (RD-8-3)

Dimensions shown in millimeters.

03-31-2021-A

<!-- image -->

<!-- image -->

## Package Information

| Part Number       | Package Body Material                              | Lead Finish   | MSL Rating   | Package Marking [3]   |
|-------------------|----------------------------------------------------|---------------|--------------|-----------------------|
| HMC361S8G         | Low Stress Injection Molded Plastic                | Sn/Pb Solder  | MSL1 [1]     | H361 XXXX             |
| HMC361S8GE        | RoHS-compliant Low Stress Injection Molded Plastic | 100% matte Sn | MSL1 [2]     | H361 XXXX             |
| HMC361S8GETR      | RoHS-compliant Low Stress Injection Molded Plastic | 100% matte Sn | MSL1 [2]     | H361 XXXX             |
| HMC361S8GTR       | Low Stress Injection Molded Plastic                | Sn/Pb Solder  | MSL1 [1]     | H361 XXXX             |
| 104631- HMC361S8G | Eval Board                                         |               |              |                       |

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

v09.0421

## HMC361S8G/361S8GE

SMT GaAs HBT MMIC

DIVIDE-BY-2, DC - 10 GHz

<!-- image -->

<!-- image -->

## Evaluation PCB

<!-- image -->

## List of Materials for Evaluation PCB 104631  [1]

| Item    | Description                        |
|---------|------------------------------------|
| J1 - J3 | PCB Mount SMA RF Connector         |
| C1 - C4 | 100 pF Capacitor, 0402 Pkg.        |
| C5      | 1000 pF Capacitor, 0603 Pkg.       |
| C6      | 10 µF Tantalum Capacitor           |
| U1      | HMC361S8G / HMC361S8GE Divide-by-2 |
| PCB [2] | 104627 Eval Board                  |

[2] Circuit Board Material: Rogers 4350

The circuit board used in the application should use RF circuit  design  techniques.  Signal  lines  should have 50 Ohm impedance while the package ground leads  and  backside  ground  slug  should  be  connected directly to the ground plane similar to that shown. A sufficient number of via holes should be used to connect the top and bottom ground planes. The  evaluation  circuit  board  shown  is  available from Analog Devices upon request. This evaluation board is designed for single ended input testing. J2 and J3 provide differential output signals.

v09.0421

## HMC361S8G/361S8GE

SMT GaAs HBT MMIC

DIVIDE-BY-2, DC - 10 GHz Application Circuit v09.0421

<!-- image -->

<!-- image -->

<!-- image -->

SMT GaAs HBT MMIC DIVIDE-BY-2, DC - 10 GHz