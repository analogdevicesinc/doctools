<!-- lastmod 2022-08-02 -->
## General Description

The MAX3890 evaluation kit (EV kit) is an assembled surface-mount demonstration board that provides easy evaluation of the MAX3890 2.5Gbps 16:1 serializer with clock synthesis and low-voltage differential signal (LVDS) inputs.

## Component List

| DESIGNATION                    |   QTY | DESCRIPTION                                      |
|--------------------------------|-------|--------------------------------------------------|
| C1-C6, C10, C11, C13, C14, C15 |    11 | 0.1µF ±10%, 25V min ceramic capacitors           |
| C7                             |     1 | 0.33µF ±10%, 16V min, X7R type ceramic capacitor |
| C8, C9, R1, R2, R23, JU6-JU9   |     0 | Not installed                                    |
| C12                            |     1 | 33µF capacitor Sprague 593D336X9020D             |
| J1-J6                          |     6 | SMA connectors (edge mount)                      |
| J7-J22, J24-J43                |    36 | SMB connectors (PC mount)                        |
| J44, J45                       |     2 | SMA connectors (PC mount)                        |
| J46, J47                       |     2 | Test points                                      |
| JU1-JU5                        |     5 | 2-pin headers                                    |
| L1-L4                          |     4 | 56nH inductors Coilcraft 0805CS-560XKBC          |
| R3                             |     1 | 10k Ω ±5% resistor                               |
| R4, R8, R12, R16               |     4 | 27 Ω ±5% resistors                               |
| R5, R9, R13, R17               |     4 | 24 Ω ±5% resistors                               |
| R6, R10, R14, R18              |     4 | 220 Ω ±5% resistors                              |
| R7, R11, R15, R19              |     4 | 130 Ω ±5% resistors                              |
| R20, R21                       |     2 | 4.99k Ω ±1% resistors                            |
| R22                            |     1 | 20k Ω ±5% resistor                               |
| U1                             |     1 | MAX3890 (64-pin TQFP-EP)                         |
| None                           |     1 | MAX3890 PC board                                 |
| None                           |     1 | MAX3890 data sheet                               |
| None                           |     3 | Shunts for JU1-JU3                               |

<!-- image -->

## Features

- ♦ +3.3V Single Supply
- ♦ Selectable Reference Clock Frequencies (155.52MHz, 77.76MHz, 51.84MHz, 38.88MHz)
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3890EVKIT | -40°C to +85°C | 64 TQFP-EP*  |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Sprague    | 207-324-4140 | 603-224-1430 |

Note: Please indicate that you are using the MAX3890 when contacting these suppliers.

## Detailed Description

The MAX3890 EV kit simplifies evaluation of the MAX3890. The EV kit operates from a +3.3V single supply  and includes all the external components necessary to interface with LVDS inputs and 3.3V positivereferenced emitter-coupled logic (PECL) outputs.

The LVDS inputs (PDI\_+, PDI\_-, PCLKI+, PCLKI-, RCLK+, RCLK-)** are internally terminated with 100 Ω differential  input  resistance and therefore do not require external termination. Ensure that LVDS devices driving these inputs are not redundantly terminated. The LVDS outputs (PCLKO+, PCLKO-) require a differential termination with a 100 Ω resistor between complementary outputs. Do not terminate these outputs to ground.

## Layout Considerations

The PECL outputs have voltage attenuation (0.46) and impedance matching networks on the EV board that allow 50 Ω terminations to ground for oscilloscope interfacing. All signal inputs and outputs use coupled 50 Ω transmission lines. All input signal lines are of equal length to minimize propagation-delay skew. Likewise, all output signal lines are of equal length.

** Note: PCLKO±, PCLKI±, RCLK±, and SCLK± are labeled as PCKO±, PCKI±, RCK±, and SCK± on PC board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3890 Evaluation Kit

Figure 1.  MAX3890 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumpers

JU1 should be shorted for normal operation and removed to enable SLBO+ and SLBO- for system loopback testing. The MAX3890 EV kit allows the use of multiple reference clock frequencies with the appropriate setting on JU3, JU4, or JU5. See Table 1 for these jumper settings.

## Exposed Pad Package

The exposed pad (EP) 64-pin TQFP incorporates features that provide a very low thermal resistance path for heat removal from the IC-either to a PC board or to an external heatsink. The MAX3890's EP must be soldered directly to a ground plane with good thermal conductance.

## MAX3890 Evaluation Kit

## Table 1. CLKSET Jumper Functions

|   f RCLK (MHz) | JU3                | JU4                       | JU5                 |
|----------------|--------------------|---------------------------|---------------------|
|         155.52 | Shorted (to V CC ) | Open                      | Open                |
|          77.76 | Open               | Open                      | Open                |
|          51.84 | Open               | Shorted (20k Ω to ground) | Open                |
|          38.88 | Open               | Open                      | Shorted (to ground) |

<!-- image -->

Figure 2.  MAX3890 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3890 Evaluation Kit

Figure 3.  MAX3890 EV Kit PC Board Layout-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3890 Evaluation Kit

<!-- image -->

Figure 4.  MAX3890 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3890 Evaluation Kit

Figure 5.  MAX3890 EV Kit PC Board Layout-Power Plane

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3890 Evaluation Kit

Figure 6.  MAX3890 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7