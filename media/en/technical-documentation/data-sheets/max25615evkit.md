<!-- lastmod 2022-08-03 -->
## MAX2561 Evaluation Kit

## General Description

The  MAX25615  evaluation  kit  (EV  kit)  demonstrates inverting,  noninverting,  and  differential  operating  modes for  the  MAX25615 MOSFET driver. The EV kit includes one MOSFET driver, a MOSFET, and component pads for optional loads. The EV kit is fully assembled and tested.

## Benefits and Features

- +4V to +16V Single Power-Supply Range
- 7A Peak Sink Current
- 3A Peak Source Current
- Inverting and Noninverting Inputs
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX25615 EV Kit
- Variable 20V Power Supply
- Oscilloscope
- Function Generator

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Preset the power supply to 12V. Turn off the power supply.
- 2) Preset the function generator to go from 0V to 3V at 100kHz with a 50% duty cycle. Turn off the function generator.
- 3) Connect the positive lead of the power supply to the red VINP banana jack (J4). Connect the negative lead of the power supply to the black GND banana jack (J5).
- 4) Connect the function generator output using a BNC cable to LD3.
- 5) Connect a scope probe to IN+ by using J1 and a scope probe to OUT by using J3.
- 6) Turn on the power supply.
- 7) Verify that the voltage across VINP and GND is 12V.
- 8) Turn on the function generator.
- 9) Verify on the scope that IN+ is a 0 to 3V signal at 100kHz with a 50% duty cycle and that OUT is a 0V to 12V signal at 100kHz with a 50% duty cycle with a slight phase delay with regards to IN+.
- 10)  Turn off the function generator.
- 11) Turn off the power supply.

## Detailed Description of Hardware

## Input Configuration

The  MAX25615  EV  kit  can  use  inverting,  noninverting, and  differential  inputs.  Table  1  summarizes  the  stuffing options for each configuration. R1 and R2 are present to terminate the input lines. Parallel capacitors C5 and C12 are normally open, but can be stuffed to filter the inputs.

<!-- image -->

Evaluates: MAX2561

## Load Configurations

The  MAX25615  drives  a  standard  pinout  N-channel MOSFET. The MOSFET's drain current can be directed to a resistive or LED load, which are common applications for the driver. R7 and C14 are normally open, but can be stuffed to simplify evaluation of the MAX25615 at specific load resistance and capacitance.

## Table 1. Input Configuration Options

| COMPONENT          | INVERTING INPUT   | NONINVERTING INPUT   | DIFFERENTIAL INPUT   |
|--------------------|-------------------|----------------------|----------------------|
| Function Generator | LD4               | LD3                  | LD3 and LD4          |
| R1                 | Open              | 50Ω                  | 50Ω                  |
| R2                 | 50Ω               | 0Ω                   | 50Ω                  |
| R3                 | 0Ω                | Open                 | Open                 |
| C5                 | Open              | Optional             | Optional             |
| C12                | Optional          | Open                 | Open                 |
| Q1                 | NFET              | NFET                 | NFET                 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25615EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX25615

## Rise and Fall Time Control

The  MAX25615  EV  kit  has  additional  components  that allow adjustment of the output rise and fall times. R5 and R6 are  normally  0Ω,  but  can  be  asymmetrically  stuffed with low value resistors to adjust the rise and fall times at Q1's gate.

## MAX25615 EV Kit Bill of Materials

| PART           |   QTY | DESCRIPTION                                   |
|----------------|-------|-----------------------------------------------|
| C1, C2, C3, C4 |     4 | 47µ F 10V tantalum c apacitor s               |
| C6, C8         |     2 | 0.1 µ F 25V X7R ceramic c apacitor s (0402)   |
| C9             |     1 | 1µ F 10V X5R ceramic c apacitor (0402)        |
| C10, C13       |     2 | 4.7µ F 25V X5R ceramic c apacitor s (0603)    |
| C11            |     1 | 0.01 µ F 50V X7R ceramic c apacitor (0402)    |
| C14            |     1 | 0.001 µ F 100V X7R ceramic c apacitor (0603)  |
| C16, C18       |     2 | 22µF 400V aluminum ca pacitor s               |
| C5, C12        |     2 | Optional filter c apacitors                   |
| L1             |     1 | 1A ferrite bead (0603)                        |
| LD3, LD4       |     2 | BNC female connectors                         |
| Q1             |     1 | N-channel MOSFET                              |
| R1             |     1 | 49.9 Ω 0.1% resistor (2512)                   |
| R2             |     1 | 0.001 Ω 1% resistor (2512)                    |
| R4             |     1 | 49.9 Ω 0.1% resistor (2512)                   |
| R5, R6         |     2 | 0 Ω 0% resistors (0201)                       |
| R7             |     1 | Optional load resistor ( 1206 )               |
| TAL1           |     1 | Pin r eceptacle                               |
| U1             |     1 | 7A sink, 3A source, 12ns, SOT23 MOSFET driver |
| ---            |     1 | PCB: MAX25615 EV kit                          |

Evaluates: MAX25615

## MAX25615 EV Kit Schematic

<!-- image -->

│

## MAX25615 EV Kit PCB Layouts

MAX25615 EV Kit Component Placement Guide-Top

<!-- image -->

MAX25615 EV Kit PCB Layout-Solder Side Top

<!-- image -->

MAX25615 EV Kit Component Placement Guide-Bottom

<!-- image -->

MAX25615 EV Kit PCB Layout-Solder Side Bottom

<!-- image -->

│

## MAX25615 EV Kit PCB Layouts (continued)

MAX25615 EV Kit PCB Layout-Internal 2

<!-- image -->

MAX25615 EV Kit PCB Layout-Internal 3

<!-- image -->

│

## MAX25615 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

<!-- image -->

Evaluates: MAX25615

│