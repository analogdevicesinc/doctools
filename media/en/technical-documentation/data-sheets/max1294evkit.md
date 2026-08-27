<!-- lastmod 2022-08-03 -->
## General Description

The MAX1294 evaluation kit (EV kit) is assembled with a MAX1294 and the basic components necessary to evaluate the 12-bit analog-to-digital converter (ADC). Connectors for power supplies, analog inputs, and digital signals simplify connections to the device. A 40-pin header allows the user to connect a logic analyzer using a ribbon cable or the conventional miniclips. BNC connectors with 50 Ω termination provide easy connection between function generators and the analog inputs.

The board layout is designed to yield 12-bit accuracy with low noise when sampling at the maximum rate of 420ksps.

The MAX1294 EV kit may also be used to evaluate the MAX1295. Request a free sample of the MAX1295BCEI when ordering the MAX1294 EV kit.

## Component List

| DESIGNATION                            |   QTY | DESCRIPTION                                     |
|----------------------------------------|-------|-------------------------------------------------|
| C1, C3                                 |     2 | 4.7µF, 10V tantalum capacitors AVX TAJB475M010R |
| C2, C6-C12                             |     8 | 0.1µF ceramic capacitors                        |
| C4, C5                                 |     2 | 0.01µF ceramic capacitors                       |
| INT , RD , WR , CLK, CS , COM, CH0-CH5 |    12 | BNC connectors                                  |
| J1                                     |     1 | 40-pin header                                   |
| JU1, JU2                               |     2 | 2-pin headers                                   |
| R1, R2                                 |     2 | 47k Ω , 9-resistor, 10-pin SIPs                 |
| R4-R14                                 |    11 | 51 Ω ±5% resistors                              |
| U1                                     |     1 | MAX1294BCEI                                     |
| None                                   |     2 | Shunts                                          |
| None                                   |     1 | MAX1294 printed circuit board                   |
| None                                   |     1 | MAX1294 data sheet                              |

<!-- image -->

## Features

- ♦ 12-Bit Analog-to-Digital Conversion
- ♦ Six Input Channels
- ♦ 12-Bit-Wide Digital Interface
- ♦ Internal Track and Hold
- ♦ 420kHz Sampling Rate
- ♦ Internal 2.5V Reference
- ♦ Internal Clock
- ♦ Low-Power Standby Mode
- ♦ Fully Assembled Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1294EVKIT | 0°C to +70°C  | 28 QSOP      |

## Quick Start

The MAX1294 EV kit comes fully assembled and tested. The following equipment is required:

- A +5V linear power supply (switching supplies will induce excess noise on the power input)
- A low-distortion function generator
- A logic analyzer

A logic analyzer or other digital system is needed to provide the clock and control signals and to capture the conversion results of the MAX1294. Connect the logic analyzer using a 40-pin ribbon cable or a combination of BNC cables, ribbon cable, and miniclips. Refer to the MAX1294 data sheet for detailed information on timing requirements.

The analog input signals must be delivered by a lowdistortion source to achieve full 12-bit accuracy. All analog channels connect to BNC connectors terminated with 51 Ω resistors. For best low-noise performance, maintain separate analog and digital supplies and grounds to the board. The grounds are connected in a star configuration centered on the ground plane of the board. Refer to the MAX1294/MAX1296 data sheet for a detailed discussion of signal grounds.

Many of the digital and analog signals on the evaluation kit have 51 Ω termination resistors matching typical generator  impedance. These should be removed if highimpedance sources are used.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX1294 Evaluation Kit

## Connections and Setup

Connect all supplies and signal lines before turning on any supply or signal source:

- 1) Connect a +5V power supply to the VDD pad. Connect the ground to the AGND pad. The DGND provides additional access to the digital ground plane.
- 2) Make sure there is no shunt installed on JU1 (Table 1). This enables the internal 2.5V reference.
- 3) Connect the analog source (function generators or user signals) to the analog input channels (CH0CH5). Install a shunt on JU2 to connect the COM pin to GND.
- 4) Connect a logic analyzer, word generator, or other source for the digital data lines D0-D11. These signals are available on the 40-pin header (Table 2).
- 5) Connect the digital control signals for CS , RD ,  and WR . These signals are available on the 40-pin header or on BNC connectors.
- 6) Connect the clock signal (0.1MHz to 7.6MHz) to the CLK BNC connector or leave the pin open to use the internal clock.
- 7) Turn on the VDD supply, then enable the digital signal source.
- 8) Turn on the analog sources, and the system is ready for use.
- 9) Use the logic analyzer for data analysis.

## Detailed Description

## Analog Input Signals

The analog inputs are configured for using a function generator. The inputs have 51 Ω loads and 0.1µF capacitors to match the generator's impedance. It may be necessary to remove these if the board is connected to  the  user's  system.  The system must provide low impedance and any necessary anti-aliasing filtering.

## Grounding

The MAX1294 evaluation board uses two separate ground planes to reduce noise. All digital signals connect to the digital ground plane (DGND), and the noise-sensitive analog signals connect to the separate analog ground plane (AGND). The two grounds connect at only one point near the ground pin (pin 23) of the MAX1294. The ground connection (RGND) for the optional external reference supply is connected directly to the same point. This 'star' ground configuration is common in low-noise analog systems.

## Table 1. Jumper Functions

| SHUNT LOCATION   | SHDN PIN   | MAX1294 OUTPUT                       |
|------------------|------------|--------------------------------------|
| JU1              | Open       | REFADJ pin open or driven externally |
| JU1              | Shorted    | REFADJ pin shorted to VDD*           |
| JU2              | Open       | COM pin open or driven exter- nally  |
| JU2              | Shorted    | COM pin shorted to AGND              |

Table 2. 40-Pin Header (J1) Signals

| PIN                                                                       | SIGNAL   |
|---------------------------------------------------------------------------|----------|
| 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39 | GND      |
| 2                                                                         | D0       |
| 4                                                                         | D1       |
| 6                                                                         | D2       |
| 8                                                                         | D3       |
| 10                                                                        | D4       |
| 12                                                                        | D5       |
| 14                                                                        | D6       |
| 16                                                                        | D7       |
| 18                                                                        | D8       |
| 20                                                                        | D9       |
| 22                                                                        | D10      |
| 24                                                                        | D11      |
| 26                                                                        | INT      |
| 28                                                                        | RD       |
| 30                                                                        | WR       |
| 32                                                                        | CLK      |
| 34                                                                        | CS       |
| 36, 38, 40                                                                | N.C.     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1294 Evaluation Kit

Figure 1. MAX1294 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX1294 Evaluation Kit

Figure 2. MAX1294 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1294 Evaluation Kit

<!-- image -->

Figure 3. MAX1294 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1294 Evaluation Kit

Figure 4. MAX1294 EV Kit PC Board Layout-Interior Layer 1

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1294 Evaluation Kit

<!-- image -->

Figure 5. MAX1294 EV Kit PC Board Layout-Interior Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1294 Evaluation Kit

Figure 6. MAX1294 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600