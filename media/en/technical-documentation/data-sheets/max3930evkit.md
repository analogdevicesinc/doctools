<!-- lastmod 2022-08-02 -->
## General Description

The MAX3930 evaluation kit (EV kit) is an assembled demonstration board that provides electrical evaluation of the MAX3930 10.7Gbps laser driver. The output of the evaluation board is interfaced to an SMA connector that can be connected to a 50 Ω terminated oscilloscope.

| DESIGNATION                  |   QTY | DESCRIPTION                                                                                                              |
|------------------------------|-------|--------------------------------------------------------------------------------------------------------------------------|
| C1, C2, C3, C6, C7, C17, C18 |     7 | 1000pF ± 10% ceramic capacitors (0201) Murata GRM33X3R102K016A                                                           |
| C4, C5                       |     2 | 0.01 µ F ± 10% ceramic capacitors (0201) Panasonic EJC-ZEBOJ103K                                                         |
| C8, C10, C12, C13, C14       |     5 | 0.01 µ F 10% ceramic capacitors (0402) Murata GRM36X7R103K016A                                                           |
| C9, C11                      |     2 | 10 µ F ± 10% tantalum capacitors AVX TAJB106K010                                                                         |
| C15                          |     1 | 100pF ± 10% ceramic capacitor (0201) Murata GRM33X7R101K010A                                                             |
| C16                          |     0 | Not installed                                                                                                            |
| R1                           |     1 | 2k Ω variable resistor Bourns 3296W-202 or Digi-Key 3296W-202-ND                                                         |
| R2, R3, R9, R10              |     4 | 4.99k Ω ± 1% resistors (0402)                                                                                            |
| R4, R11                      |     2 | 15k Ω ± 1% resistors (0402)                                                                                              |
| R5, R12                      |     2 | 200k Ω variable resistors Bourns 3296W-204 or Digi-Key 3296W-204-ND                                                      |
| R6                           |     1 | 15 Ω ± 1% resistor (0402)                                                                                                |
| R7, R8                       |     2 | 66.5 Ω ± 1% resistors (0402) Note: R7 and R8 will be installed with resistive material facing down on the circuit board. |
| R13, R14                     |     2 | 49.9 Ω ± 1% resistors (0402)                                                                                             |
| R15, R16                     |     0 | Not installed                                                                                                            |

- ♦ Fully Assembled and Tested
- ♦ Fully Matched for Best Return Loss

## Ordering Information

| PART         | TEMP. RANGE        | IC PACKAGE    |
|--------------|--------------------|---------------|
| MAX3930EVKIT | -40 ° C to +85 ° C | Chip On Board |

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                            |
|---------------------------|-------|--------------------------------------------------------|
| R17, R18                  |     2 | 100 Ω ± 1% resistors (0402)                            |
| L1, L2                    |     2 | 220nH inductors Coilcraft 0805CS-221XKBC               |
| U1                        |     1 | MAX3930E/D (die) 81X46                                 |
| U2, U3                    |     2 | MAX480ESA 8-pin SOs                                    |
| U4                        |     1 | MAX6190AESA 8-pin SO                                   |
| J3-J7                     |     5 | SMA connectors (edge-mount)                            |
| TP1, TP3-TP12, J1, J2, J8 |    14 | Test points Digi-Key 5000K-ND                          |
| JU1, JU2                  |     2 | 1 × 2 pin headers (0.1in centers) Digi-Key S1012-36-ND |
| JU1, JU2                  |     2 | Shunts Digi-Key S9000-ND                               |
| None                      |     1 | MAX3930 Rev C EV kit circuit board                     |
| None                      |     1 | MAX3930 EV kit data sheet                              |
| None                      |     1 | MAX3930 data sheet                                     |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| EFJohnson  | 402-474-4800 | 402-474-4858 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3930 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

1

## MAX3930 Evaluation Kit

## Quick Start

- 1) If  the data is to be latched, place shunt on JU1 to enable clock input; otherwise, leave JU1 open.
- 2) Install shunt JU2 to enable the outputs.
- 3) Adjust R5 and R12 to their full counter-clockwise positions.
- 4) Adjust R1 to the approximate center of the adjustment range.
- 5) Apply a differential input signal (max amplitude ≤ 800mV per side, common-mode voltage = 0) to J3 and J4 (DATA+ and DATA-).
- 6) If the latch is enabled, apply a differential clock signal (max amplitude ≤ 800mV per side, commonmode voltage = 0) to J5 and J6 (CLK+ and CLK-).

## Adjustment and Control Descriptions (see Quick Start first)

| COMPONENT   | NAME               | FUNCTION                                                                                                           |
|-------------|--------------------|--------------------------------------------------------------------------------------------------------------------|
| JU1         | RETIMING ENABLE    | Enables/disables data retiming. Shunt to enable data retiming. Remove shunt for direct data transmission.          |
| JU2         | MODULATION ENABLE  | Enables/disables the modulation outputs. Shunt for normal operation. Remove shunt to switch modulation output off. |
| R1          | PULSE-WIDTH ADJUST | Pulse-Width Control. Adjusts the pulse width.                                                                      |
| R5          | MOD ADJUST         | Adjusts the laser modulation current.                                                                              |
| R12         | BIAS ADJUST        | Adjusts the laser bias current.                                                                                    |

## Recommendations for Interconnect Between the MAX3930 EV Kit and an Oscilloscope

- 1) Use a high-bandwidth sampling oscilloscope such as the Tektronix CSA8000 mainframe with an 80E01 50GHz sampling head. The 80E03 and 80E04 20GHz sampling heads are not recommended.
- 2) A high-quality SMA attenuator (14dB or 20dB) is required to reduce the signal level for compatibility with  the  sampling head. The attenuator should be
3. connected directly to the output SMA connector on the EV kit to minimize transmission-line reflections.
- 3) The total path length from the EV kit to the oscilloscope must to be minimized. If possible, connect the female connector of the attenuator to the female input of the oscilloscope with an SMA adapter. If cables must be used, a 0.141in semi-rigid 50 Ω coaxial cable with high-quality SMA connectors is recommended (example: Tektronix 015-1015-00).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 7) Attach a high-speed oscilloscope with 50 Ω inputs to J7. For optimum performance, see the interconnect recommendations below.
- 8) Power up the board with a -5V supply and a -2V supply.
- 9) Adjust R5 clockwise until the desired laser modulation current is achieved.
- 10) Adjust R1 For 50% eye crossing:

<!-- formula-not-decoded -->

## MAX3930 Evaluation Kit

<!-- image -->

Figure 1. MAX3930 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3930 Evaluation Kit

Figure 2. MAX3930 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3930 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3930 Evaluation Kit

<!-- image -->

Figure 4. MAX3930 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5. MAX3930 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3930 Evaluation Kit

Figure 6. MAX3930 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6