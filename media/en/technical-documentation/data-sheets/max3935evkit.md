<!-- lastmod 2022-08-02 -->
## General Description

The MAX3935 evaluation kit (EV kit) is an assembled demonstration board that enables electrical evaluation of the 10.7Gbps EAM driver. The output of the evaluation  board is  interfaced to an SMA connector, which can be connected to a 50 Ω terminated oscilloscope.

| DESIGNATION                               |   QTY | DESCRIPTION                                                 |
|-------------------------------------------|-------|-------------------------------------------------------------|
| C2, C5, C7, C19-C22                       |     7 | 1000pF10%ceramiccapacitors (0201) Murata GRM33X5R102K016A   |
| C3, C8, C12, C13, C14, C17, C18, C25, C26 |     9 | 0.01µF10% ceramic capacitors (0402) Murata GRM36X5R103K016A |
| C4, C9                                    |     2 | 10µF ±10% tantalum capacitors AVX TAJC106K016               |
| C15                                       |     1 | 100pF 5%ceramic capacitor (0402) Murata GRM36COG101J050A    |
| C16                                       |     1 | Not installed                                               |
| R1, R15, R16, R21, R22                    |     5 | 4.99k Ω ±1% resistors (0402)                                |
| R13                                       |     1 | 2k Ω potentiometer Digi-Key 3296W-202-ND                    |
| R14                                       |     1 | Not installed                                               |
| R17, R23                                  |     2 | 15k Ω ±1% resistors (0402)                                  |
| R18, R24                                  |     2 | 200k Ω potentiometers Digi-Key 3296W-204-ND                 |
| R19, R25                                  |     2 | Not installed                                               |
| R20, R26                                  |     2 | 100 Ω ±1% resistors (0402)                                  |
| R27, R29                                  |     2 | 49.9 Ω ±1% resistors (0402)                                 |
| L1, L3                                    |     2 | 220nH inductors Coilcraft 0805CS-221XKBC                    |

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                                                                                                                                          |
|---------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| L4                  |     1 | EMI ferrite bead Murata BLM11HA601SG                                                                                                                                                 |
| U1                  |     1 | MAX3935EGJ 32-pin QFN Note: U1 has an exposed paddle which requires it to be solder attached to the circuit board to insure proper functionality of part.                            |
| U2, U3              |     2 | MAX480ESA 8-pin SO                                                                                                                                                                   |
| U4                  |     1 | MAX6190AESA 8-pin SO                                                                                                                                                                 |
| JU1, JU2            |     2 | 1 × 2 pin headers (0.1in centers) Digi-Key S1012-36-ND                                                                                                                               |
| J1-J4, J9           |     5 | SMA edge-mount connectors (tab contact) EFJohnson 142-0701-851 Note: Insure that there is a continuous connection from the ground plane to the body of the connector when soldering. |
| J5, J6, J7,TP2-TP12 |    14 | Test points, Digi-Key 5000K-ND                                                                                                                                                       |
| JU1, JU2            |     2 | Shunts, Digi-Key S9000-ND                                                                                                                                                            |
| None                |       | MAX3935 Rev B evaluation circuit board                                                                                                                                               |
| None                |       | MAX3935 EV kit data sheet                                                                                                                                                            |
| None                |       | MAX3935 data sheet                                                                                                                                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ Fully Matched for Best Return Loss

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3935EVKIT | -40°C to +85°C | 32 QFN-EP*   |

*Exposed pad

## MAX3935 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| EFJohnson  | 402-474-4800 | 402-474-4858 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3935 when contacting these component suppliers.

## Quick Start

- 1) If  the  data is to be latched, place shunt on JU2 to enable clock input. Otherwise, leave JU2 open.
- 2) Install shunt JU1 to enable the outputs.
- 3) Adjust R18 to the full counter-clockwise position.
- 4) Adjust R24 to the full counter-clockwise position.
- 5) Adjust R13 to the approximate center of the adjustment range.
- 6) Apply a differential input signal (max amplitude ≤ 800mV per side) to J1 and J2 (DATA+ and DATA-).
- 7) If the latch is enabled, apply a differential clock signal (max amplitude ≤ 800mV per side) to J3 and J4 (CLK+ and CLK-). For optimum performance, see the interconnect recommendations.
- 8) Attach a high-speed oscilloscope with 50 Ω inputs to  J9.  ( Note: Attenuation may be required as voltage levels may exceed 4V.) See the interconnect recommendations below.
- 9) Set VTT to 0V. Power up the board with VEE at -5.2V.
- 10) Adjust R18 clockwise until the desired EAM modulation voltage is achieved.
- 11) Adjust R24 clockwise for the desired DC bias. Be careful not to exceed the compliance range of the modulation source as given by:

VMOD (Pin 20) ≥ VEE + 1.55V

## Recommendations for Interconnect Between the MAX3935 EV Kit and an Oscilloscope

- 1) Use a high-bandwidth sampling oscilloscope such as the Tektronix CSA8000 mainframe with an 80E01 50GHz sampling head. The 80E03 and 80E04 20GHz sampling heads are not recommended.
- 2) A high-quality SMA attenuator (14dB or 20dB) is required to reduce the signal level for compatibility with  the  sampling head. The attenuator should be connected directly to the output SMA connector on the EV kit to minimize transmission line reflections.
- 3) The  total  path  length  from  the  EV  kit  to  the oscillscope must be minimized. If possible, connect the female connector of the attenuator to the female input of the oscilloscope with an SMA adapter. If cables must be used, a 0.141in semi-rigid 50 Ω coaxial cable with high-quality SMA connectors is recommended (example: Tektronix 015-1015-00).

## Adjustment and Control Descriptions (see Quick Start first)

| COMPONENT   | NAME              | FUNCTION                                                                                                                         |
|-------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------|
| JU2         | RETIMING ENABLE   | Enables/disables data retiming. Shunt to enable data retiming. Remove shunt for direct data transmission.                        |
| JU1         | MODULATION ENABLE | Enables/disables the modulation outputs. Shunt for normal operation. Remove shunt to disable switching of the modulation output. |
| R13         | PWC ADJUST        | Adjusts the EAM pulse width.                                                                                                     |
| R18         | MOD ADJUST        | Adjusts the EAM modulation current.                                                                                              |
| R24         | BIAS ADJUST       | Adjusts the EAM bias current.                                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3935 Evaluation Kit

Figure 1. MAX3935 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3935 Evaluation Kit

Figure 2. MAX3935 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3935 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3935 Evaluation Kit

Figure 4. MAX3935 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5. MAX3935 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3935 Evaluation Kit

Figure 6. MAX3935 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->