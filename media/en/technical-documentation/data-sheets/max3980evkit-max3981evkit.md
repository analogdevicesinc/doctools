<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX3980/MAX3981 evaluation kits (EV kits) simplify evaluation of the MAX3980/MAX3981 quad equalizer. The EV kits enable testing of all the device functions. SMA connectors with 50 Ω controlled-impedance connections to the MAX3980/MAX3981 are provided for all input and output ports to facilitate connection to highspeed test equipment.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Murata     | 415-964-6321 | 415-964-8165 |
| TOKO       | 800-PIK-TOKO | 847-699-7864 |

Note: Please indicate that you are using the MAX3980/MAX3981 when contacting these component suppliers.

| DESIGNATION          |   QTY | DESCRIPTION                                                  |
|----------------------|-------|--------------------------------------------------------------|
| C1                   |     1 | 33µF tantalum capacitor AVX TAJC336K010                      |
| C2, C5-C24, C27, C28 |    23 | 0.1µF ± 10% ceramic capacitors (0603) Murata GRM39X5R104K010 |
| L1                   |     1 | 4.7nH inductor TOKO LL1608-FH4N7K                            |
| J1-J16               |    16 | SMA connectors (edge-mount, tab) EFJohnson 142-0701-851      |
| JP1, JP2             |     2 | 2-pin headers (0.1in centers) Digi-Key S1012-36-ND           |
| R5                   |     1 | 10k Ω ± 1% resistor (0603)                                   |
| U1                   |     1 | MAX3980UGH (MAX3980EV kit) MAX3981UGH (MAX3981EV kit)        |

## Features

- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Fully Assembled and Tested
- ♦ Single +3.3V Operation

## Ordering Information

| PART          | TEMP RANGE       | IC PACKAGE   |
|---------------|------------------|--------------|
| MAX3980 EVKIT | 0 ° C to +85 ° C | 44 QFN       |
| MAX3981 EVKIT | 0 ° C to +85 ° C | 44 QFN       |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                 |
|---------------|-------|---------------------------------------------|
| VCC, GND      |     2 | Test points Digi-Key 5000-ND                |
| None          |     2 | Shunts Digi-Key S9000-ND                    |
| None          |     1 | MAX3980/MAX3981 EV kit circuit board, rev D |
| None          |     1 | MAX3980/MAX3981 EV kit data sheet           |
| None          |     1 | MAX3980 data sheet (MAX3980 EV kit)         |
| None          |     1 | MAX3981 data sheet (MAX3981 EV kit)         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX3980/MAX3981 Evaluation Kits

## Quick Start

- 1) Connect a +3.3V power supply to JH1 (VCC). Connect the power-supply ground to JH2 (GND).
- 2) Connect a differential signal between 200mVp-p and 800mVp-p to the inputs IN1+ and IN1- using 50 Ω cables.
- 3) Terminate unused inputs with 50 Ω terminations.
- 4) If  not  already  done,  remove shunt from JP2. This ensures the part is enabled and is not in the standby mode.
- 5) Connect signals OUT1+ and OUT1- to an oscilloscope with 50 Ω input terminations.
- 6) The input signal should be a short pattern, such as 2 7  - 1 PRBS or K28.5, at 3.125Gbps.
- 7) The enable (EN) signal is available at JP2. It is pulled high with a 10k Ω resistor on the EV board so no other pullup is necessary. To disable the equalizer, connect shunt (B) as shown in Figure 1. Otherwise, remove the shunt.
- 8) The SDET pin, as shown in Figure 1, indicates the presence of a signal. When a shunt (A) is connected to  JP1,  the  equalizer  will  automatically  be  enabled when a signal is detected. Otherwise, remove the shunt.
- 9) MAX3980 Evaluation: After  the  board  has  been checked out initially, evaluation can begin with an FR4 PC board. It is advisable to start with a board length of 20in and then progress to longer lengths. The user needs to adapt SMA connectors to the PC board.
- 10) MAX3981 Evaluation: After  the  board  has  been checked out initially, evaluation can begin with a twin-axial or shielded twisted-pair cable. It is advisable to start with a cable length of 5ft and then progress to longer lengths. The user needs to adapt SMA connectors to the cable.

Figure 1. Control Functions

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3980/MAX3981 Evaluation Kits

<!-- image -->

Figure 2. MAX3980/MAX3981 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3980/MAX3981 Evaluation Kits

Figure 3. MAX3980/MAX3981 EV Kit Component Placement Guide-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3980/MAX3981 Evaluation Kits

<!-- image -->

Figure 4. MAX3980/MAX3981 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3980/MAX3981 Evaluation Kits

Figure 5. MAX3980/MAX3981 EV Kit PC Board Layout-Ground Plane

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3980/MAX3981 Evaluation Kits

<!-- image -->

Figure 6. MAX3980/MAX3981 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3980/MAX3981 Evaluation Kits

Figure 7. MAX3980/MAX3981 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600