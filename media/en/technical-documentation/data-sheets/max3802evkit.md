<!-- lastmod 2022-08-02 -->
## General Description

The MAX3802 evaluation kit (EV kit) is an assembled demonstration board that provides easy evaluation of the MAX3802 quad adaptive equalizer with cable drivers.  SMA connectors with 50 Ω controlled-impedance transmission lines to the MAX3802 are provided for all input and output ports.

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                             |
|---------------------------|-------|-----------------------------------------|
| C1, C3                    |     2 | 33µF ± 10% tantalum capacitors (Case-B) |
| C2, C4                    |     2 | 1µF ± 10% ceramic capacitors (0805)     |
| C7-C66                    |    60 | 0.1µF ± 10% ceramic capacitors (0402)   |
| J1, J2, J35, J36, TP1-TP8 |    12 | Test points                             |
| J3-J34                    |    32 | SMA connectors (edge mount)             |
| L1, L2                    |     2 | 56nH inductors (0805)                   |
| R1-R4                     |     4 | 100k Ω ± 1% resistors (0402)            |
| R5, R8, R10, R12          |     4 | Open                                    |
| R6, R7, R9, R11           |     4 | 0 Ω resistors (0402)                    |
| R13-R16                   |     4 | 20k Ω potentiometers                    |
| U1                        |     1 | MAX3802UGK 68-pin QFN                   |
| None                      |     1 | MAX3802 EV board                        |
| None                      |     1 | MAX3802 data sheet                      |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Venkel     | 800-950-8365 | 512-794-0087 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Fully Assembled and Tested
- ♦ Single +3.3V Power-Supply Operation
- ♦ SMA Connectors for Inputs and Outputs
- ♦ Includes Potentiometer for Adjusting Driver Output Amplitude

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX3802EVKIT | 0°C to +85°C | 68 QFN-EP    |

* EP = exposed pad

## Quick Start

Connect power-supply ground to the GND pin (J35). Apply +3.3V to the VCC1 pin (J1). Due to a small voltage drop across the inductor, the true voltage on the part (measured across C1) is slightly lower than +3.3V. Adjust the power supply until the voltage across C1 measures +3.3V. Note: This step applies power to channels 1 and 2 only. To supply power to channels 3 and 4, ground and a +3.3V supply must be connected to J35 (GND) and J1 (VCC2).

## Cable Driver

- 1) Connect a differential input signal (600mVP-P differential  input  amplitude)  to  one  of  the  cable  driver inputs at SMA edge connectors J9 (DIN1-) and J10 (DIN1+).
- 2) Connect a 50 Ω oscilloscope to SMA output connectors J7 (DOUT-) and J8 (DOUT+) to observe the output of the cable driver.

## MAX3802 Evaluation Kit

- 3) Adjust R13, the RMOD1 potentiometer, for 20k Ω resistance by turning the potentiometer clockwise until a faint click is heard.
- 4) Potentiometer R13 (RMOD1) can be adjusted between 10k Ω and 20k Ω to change the cable driver output amplitude.

Note: Measuring the resistance on the potentiometer is difficult  because of internal resistances and ESD diodes on the IC. The potentiometer can be removed and discrete resistors placed on the R5, R8, R10, and R12 positions, so that the exact resistance of RMOD can be known. Refer to Cable Driver Output vs. RMOD in the Typical Operating Characteristics of the MAX3802 data sheet for RMOD values.

## Adaptive Cable Equalizer

- 1) Connect a differential input signal (600mVP-P differential input amplitude) to a cable. Connect the other end of the cable to one of the cable equalizers' inputs at SMA edge connectors J3 (EIN1-) and J4 (EIN1+).
- 2) Connect a 50 Ω oscilloscope to SMA output connectors J5 (EOUT1-) and J6 (EOUT1+) to view the output of the cable equalizer.
- 3) The cable integrity monitor (CIM1) high-impedance output can be monitored at TP1.
- 4) The loss-of-signal ( LOS1 )  TTL output can be monitored at TP5.

Note: The MAX3802 equalizer design requires that the data stream be scrambled or coded to provide a rich frequency spectrum for the adaptation algorithm. In the absence of an input signal (nonstandard application), amplified noise can appear at the output due to the large gain of the device.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

## Connecting CML Outputs to 50 Ω Oscilloscopes

CML outputs have a common-mode voltage near VCC, which is incompatible with oscilloscopes terminated in 50 Ω to  ground. To avoid interfering with the commonmode voltage, all MAX3802 CML outputs are ACcoupled on board with 0.1µF capacitors. The CML outputs should not be connected directly through 50 Ω to ground.

## Exposed-Pad Package

The EP of the 68-pin QFN package provides a very low thermal resistance path for heat removal from the IC. The pad is also electrical ground on the MAX3802 and must be soldered to the circuit board for proper thermal and electrical performance. Refer to Maxim Application Note HFAN-08.1, Thermal Considerations for  QFN and Other Exposed Pad Packages, available at  www.maxim-ic.com for additional application information.

<!-- image -->

## MAX3802 Evaluation Kit

<!-- image -->

Figure 1. MAX3802 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3802 Evaluation Kit

Figure 2. MAX3802 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3802 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3802 Evaluation Kit

<!-- image -->

Figure 4. MAX3802 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3802 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3802 Evaluation Kit

Figure 6. MAX3802 EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 7. MAX3802 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

6