<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3800 evaluation kits (EV kits) simplify evaluation of the MAX3800 adaptive equalizer and cable driver. The EV kits enable testing of all the device's functions. SMA connectors with 50 Ω controlled-impedance transmission lines to the MAX3800 are provided for all input and output ports.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                                                               |
|-------------------------|-------|---------------------------------------------------------------------------------------------------------------------------|
| C1-C10, C13-C18, C21-25 |    21 | 0.1µF ±10% ceramic capacitors (0603) Murata GRM39X7R104K016A                                                              |
| C11, C12                |     2 | 10µF ±10% tantalum capacitors C case AVX TAJC106K010                                                                      |
| J1-J8                   |     8 | SMA edge-mount connectors EFJohnson 142-0701-801 or Digi-Key J502-ND Note: Cut center pin to approximately 1/16in length. |
| J9, J10, J11            |     3 | Test points Digi-Key 5000K-ND                                                                                             |
| JU1                     |     1 | 2-pin header, 0.1in centers Digi-Key S1012-36-ND                                                                          |
| JU1                     |     1 | Shunt Digi-Key S9000-ND                                                                                                   |
| R1, R2, R3              |     3 | 100k Ω ±5% resistors (0603)                                                                                               |
| R4                      |     1 | 20k Ω variable resistor Bourns, Digi-Key 3296W-203-ND                                                                     |
| TP1-TP7                 |     7 | Test points Digi-Key 5000K-ND                                                                                             |
| U1*                     |     1 | MAX3800UHJ (32-pin TQFP-EP)                                                                                               |
| U1*                     |     1 | MAX3800UGJ (32-pin QFN)                                                                                                   |
| None                    |     1 | MAX3800 evaluation kit, rev B circuit board                                                                               |
| None                    |     1 | MAX3800 data sheet                                                                                                        |
| None                    |     1 | MAX3800EVkitdatasheet                                                                                                     |

## Features

- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Fully Assembled and Tested
- ♦ Includes Potentiometer for Adjusting Driver Output Amplitude

## Ordering Information

| PART           | TEMP RANGE   | IC PACKAGE   |
|----------------|--------------|--------------|
| MAX3800EVKIT   | 0°C to +85°C | 32 TQFP-EP   |
| MAX3800UGJ-KIT | 0°C to +85°C | 32 QFN       |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| EFJohnson  | 402-474-4800 | 402-474-4858 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3800 when contacting these component suppliers.

## Quick Start

- 1) Connect a +3.3V power supply to J9 (VCCE) and J11 (VCCD). Connect the power-supply ground to J10. ( Note: Placing a shunt on JU1 connects VCCE and VCCD.)

## Cable Driver

- 2) Connect a differential input signal (700mV differential  voltage  amplitude)  to  the  cable  driver  input  at SMA edge connectors J5 and J6.
- 3) Connect a 50 Ω oscilloscope to SMA output connectors  J7  and  J8  to  observe  the  output  of  the  cable driver.
- 4) Potentiometer R4 (RMOD) can be adjusted to change the cable driver output amplitude.

## Adaptive Cable Equalizer

- 5) Connect a differential input signal (700mV differential voltage amplitude) to a cable. Connect the other end of the cable to the cable equalizer inputs at SMA edge connectors J1 and J2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX3800 Evaluation Kits

Figure 1. MAX3800 Schematic

<!-- image -->

- 6) Connect a 50 Ω oscilloscope to SMA edge connectors  J3  and  J4  to  observe  the  output  of  the  cable equalizer.
- 7) The cable integrity monitor (CIM) outputs can be monitored at TP1 (CIM-) and TP2 (CIM+).

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 8) The loss-of-signal ( LOS ) output can be monitored at TP3.

<!-- image -->

## MAX3800 Evaluation Kits

<!-- image -->

<!-- image -->

Figure 2. MAX3800 EV Kit Component Placement Guide

<!-- image -->

Figure 4. MAX3800 EV Kit PC Board Layout-Ground Plane

Figure 3. MAX3800 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3800 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3800 Evaluation Kits

<!-- image -->

Figure 6. MAX3800 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 8. MAX3800UGJ EV Kit PC Board Layout-Component Side

Figure 7. MAX3800UGJ EV Kit-Component Placement Guide

<!-- image -->

Figure 9. MAX3800UGJ EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 10. MAX3800UGJ EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 11. MAX3800UGJ EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.