<!-- lastmod 2022-08-03 -->
## General Description

The MAX1292 evaluation kit (EV kit) is assembled with a MAX1292 and the basic components necessary to evaluate this 12-bit analog-to-digital converter (ADC). Connectors for power supplies, analog inputs, and digital signals simplify connections to the device. A 40-pin header allows the user to connect a logic analyzer using a ribbon cable or conventional minihooks. BNC connectors with 50 Ω terminations provide easy connection between function generators and the analog inputs.

The board layout is designed to yield 12-bit accuracy with low noise when sampling at the maximum rate of 400ksps.

The MAX1292 EV kit can also be used to evaluate the MAX1293. Request a free sample of the MAX1293BCEG when ordering the MAX1292 EV kit.

## Component List

| DESIGNATION                                  |   QTY | DESCRIPTION                                     |
|----------------------------------------------|-------|-------------------------------------------------|
| C1, C3, C8-C12                               |     7 | 0.1µF ceramic capacitors                        |
| C2, C4, C5                                   |     3 | 4.7µF, 10V tantalum capacitors AVX TAJB475M010R |
| C6, C7                                       |     2 | 0.01µF ceramic capacitors                       |
| CH0-CH3, COM, CS , CLK, WR , RD , INT , HBEN |    11 | BNC connectors                                  |
| J1                                           |     1 | 40-pin header                                   |
| JU1, JU2                                     |     2 | 2-pin jumpers                                   |
| R1                                           |     1 | 47k Ω , 9-resistor, 10-pin SIP                  |
| R2, R4-R12                                   |    10 | 51 Ω ±5% resistor                               |
| U1                                           |     1 | MAX1292BCEG (24-pin QSOP)                       |
| None                                         |     2 | Shunts                                          |
| None                                         |     1 | MAX1292 PC board                                |
| None                                         |     1 | MAX1290/MAX1292 data sheet                      |

<!-- image -->

## Features

- ♦ 12-Bit Analog-to-Digital Conversion
- ♦ Four Input Channels
- ♦ Byte-Wide Digital Interface
- ♦ Internal Track/Hold
- ♦ 400kHz Sampling Rate
- ♦ Internal 2.5V Reference
- ♦ Internal Clock
- ♦ Low-Power Standby Mode
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1292EVKIT | 0°C to +70°C | 24 QSOP      |

## Quick Start

The MAX1292 EV kit comes fully tested and assembled. The following equipment is required:

- A +5V linear power supply. Switching supplies induces excess noise on the power input.
- A low-distortion function generator
- A logic analyzer

A logic analyzer or other digital system is needed to provide the clock and control signals and to capture the MAX1292 conversion results. Connect the logic analyzer using a 40-pin ribbon cable, or a combination of BNC cables, ribbon cable, and miniclips. Refer to the MAX1292 data sheet for detailed information on timing requirements.

The analog input signals must be delivered by a lowdistortion source to achieve full 12-bit accuracy. All analog channels connect to BNC connectors terminated with 51 Ω resistors. For low-noise performance, maintain separate analog and digital supplies and grounds to the board. The grounds are connected in a star configuration centered on the ground plane of the board. Refer to the MAX1292 data sheet for a detailed discussion of signal grounds.

Many of the digital and analog signals on the evaluation kit have 51 Ω termination resistors matching typical generator impedance. These should be removed if highimpedance sources are used.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX1292 Evaluation Kit

## Connections and Setup

Connect all supplies and signal lines before turning on any supply or signal source.

- 1) Connect the +5V power supply to the VDD and VLOGIC pads. Connect the ground side to the AGND and DGND pads. For best low-noise performance, connect separate supplies to VDD/AGND and VLOGIC/DGND.
- 2) Make sure there is no shunt installed on JU1 (Table 1). This enables the internal 2.5V reference.
- 3) Connect the analog source (function generators or user  signals)  to  the  analog  input  channels (CH0-CH3). Install a shunt on JU2 to connect the COM pin to GND.
- 4) Connect a logic analyzer, word generator, or other source for the digital data lines D0-D7. These signals are available on the 40-pin header (Table 2).
- 5) Connect the digital control signals for CS , RD , WR , and HBEN. These signals are available on the 40-pin header or on the BNC connectors.
- 6) Connect the clock signal (0.1MHz to 7.6MHz) to the CLK BNC connector or leave the pin open to use the internal clock.
- 7) Turn on the VDD and VLOGIC supplies. Enable the digital signal source.
- 8) Turn on the analog sources. The system is ready for use.
- 9) Use the logic analyzer for data analysis.

## Detailed Description

## Analog Input Signals

The analog inputs are configured for using a function generator. The inputs have 51 Ω loads and 0.1µF capacitors to match the generator's impedance. It might be necessary to remove these if the board is connected to the user's system. The system must provide low impedance and any necessary anti-aliasing filtering.

## Grounding

The MAX1292 evaluation board uses two ground planes to reduce noise. All digital signals connect to the digital ground plane (DGND), and the noise-sensitive analog signals connect to the separate analog ground plane (AGND). The two grounds connect at only one point near the ground pin (pin 20) of the MAX1292. The ground connection (RGND) for the optional external reference supply is connected directly to the same point. This 'star' ground configuration is common in low-noise analog systems.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Jumper Functions

| JUMPER   | STATE   | FUNCTION                             |
|----------|---------|--------------------------------------|
| JU1      | Open    | REFADJ pin open or driven externally |
| JU1      | Shorted | REFADJ pin shorted to V DD *         |
| JU2      | Open    | COM pin open or driven externally    |
| JU2      | Shorted | COM pin shorted to AGND              |

* The MAX1292's 2.5V reference must be disabled before an external reference voltage is connected. Installing a shunt across JU1 connects the REFADJ pin to VDD and disables the on-board reference.

Table 2. 40-Pin Header (J1) Signals

| PIN NUMBER                                                                | SIGNAL   |
|---------------------------------------------------------------------------|----------|
| 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39 | GND      |
| 2                                                                         | D0/D8    |
| 4                                                                         | D1/D9    |
| 6                                                                         | D2/D10   |
| 8                                                                         | D3/D11   |
| 10                                                                        | D4       |
| 12                                                                        | D5       |
| 14                                                                        | D6       |
| 16                                                                        | D7       |
| 18                                                                        | HBEN     |
| 20                                                                        | INT      |
| 22                                                                        | RD       |
| 24                                                                        | WR       |
| 26                                                                        | CLK      |
| 28                                                                        | CS       |
| 30, 32, 34, 36, 38, 40                                                    | N.C.     |

<!-- image -->

## MAX1292 Evaluation Kit

Figure 1. MAX1292 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX1292 Evaluation Kit

Figure 2. MAX1292 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1292 EV Kit PC Board Layout-Interior Layer 1

<!-- image -->

4

Figure 3. MAX1292 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1292 EV Kit PC Board Layout-Interior Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX1292 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

© 1999 Maxim Integrated Products

5

## MAX1292 Evaluation Kit