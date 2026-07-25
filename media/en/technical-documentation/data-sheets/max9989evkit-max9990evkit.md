<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX9989/MAX9990 Evaluation Kits

## General Description

The MAX9989/MAX9990 evaluation kits (EV kits) simplify the evaluation of the MAX9989/MAX9990 LO buffers. They are fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included for the input and both outputs to allow quick and easy evaluation on the test bench.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a circuit schematic, a bill of materials (BOM), and artwork for each layer of the PC boards.

Contact MaximDirect sales at 888-629-4642 to check on pricing and availability for these kits.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| Murata     | 770-436-1300 | www.murata.com            |

## Component List (MAX9989)

| DESIGNATION                 |   QTY | DESCRIPTION                                                                  |
|-----------------------------|-------|------------------------------------------------------------------------------|
| C1, C2, C4, C6, C8, C9, C10 |     7 | 47pF ±5%, 50V C0G-type ceramic capacitors (0603) Murata GRM1885C1H470J       |
| C3, C7, C11                 |     3 | 0.1µF ±10%, 16V X7R-type ceramic capacitors (0603) Murata GRM188R71C104K     |
| C5                          |     1 | 5pF ±0.25pF, 50V C0G-type ceramic capacitor (0603) Murata GRM1885C1H5R0C     |
| J1, J2, J3                  |     3 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| R1                          |     1 | 100 Ω ±5% resistor (0603)                                                    |
| R2-R5                       |     4 | Not installed                                                                |
| TP1                         |     1 | Large test point for 0.062in PC board (red) Mouser 151-107 or equivalent     |
| TP2                         |     1 | Large test point for 0.062in PC board (black) Mouser 151-103 or equivalent   |
| U1                          |     1 | MAX9989ETP-T                                                                 |

## Features

- ♦ Fully Assembled and Tested EV Kits
- ♦ +14dBm to +20dBm Adjustable Output Power
- ♦ ±1dB Output Power Variation
- ♦ Isolated PLL Output (+3dBm)
- ♦ Low Output Noise: -170dBc/Hz at +17dBm
- ♦ 40dB Reverse Isolation
- ♦ Better than 35dB Main Driver Output to PLL Amp Output Isolation
- ♦ 110mA Supply Current at +17dBm
- ♦ ESD Protection

## Ordering Information

| PART TEMP RANGE   | IC PACKAGE              | FREQUENCY RANGE (MHz)   |
|-------------------|-------------------------|-------------------------|
| -40°C to +85°C    | Thin QFN-EP* 700 to     | MAX9989EVKIT 20 1100    |
| -40°C to +85°C    | 20 Thin QFN-EP* 1500 to | MAX9990EVKIT 2200       |

## Component List (MAX9990)

| DESIGNATION                     |   QTY | DESCRIPTION                                                                  |
|---------------------------------|-------|------------------------------------------------------------------------------|
| C1, C2, C4, C5, C6, C8, C9, C10 |     8 | 22pF ±5%, 50V C0G-type ceramic capacitors (0603) Murata GRM1885C1H220J       |
| C3, C7, C11                     |     3 | 0.1µF ±10%, 16V X7R-type ceramic capacitors (0603) Murata GRM188R71C104K     |
| J1, J2, J3                      |     3 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| R1                              |     1 | 100 Ω ±5% resistor (0603)                                                    |
| R2-R5                           |     4 | Not installed                                                                |
| TP1                             |     1 | Large test point for 0.062in PC board (red) Mouser 151-107 or equivalent     |
| TP2                             |     1 | Large test point for 0.062in PC board (black) Mouser 151-103 or equivalent   |
| U1                              |     1 | MAX9990ETP-T                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9989/MAX9990 Evaluation Kits

## Quick Start

The MAX9987/MAX9988 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

Table 1 lists the equipment required to verify the operation of the MAX9989/MAX9990 EV kits. It is intended as a guide only, and some substitutions are possible.

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kits. As a general precaution to prevent damaging the outputs by driving high-VSWR loads, do not turn on DC power or the RF signal generator until all connections are made:

- 1) Calibrate the power meter at 900MHz for the MAX9989, or at 1800MHz for the MAX9990. Be sure to  use  a  power sensor rated to at least 20dBm. Measure the loss of the 20dB attenuator (pad) that is connected to OUTLO; account for this loss as an offset in the power meter.
- 2) Connect a 20dB pad to the LO driver output (OUTLO). The 20dB pad maintains a reasonable load VSWR for the output drivers and protects the RF equipment from accidental overload.
- 3) Connect a 50 Ω termination to OUTPLL.
- 4) For the MAX9989, set the RF signal generator for 900MHz  CW  (i.e.,  unmodulated)  at  +10dBm (accounts for 3dB loss of input pad); for the MAX9990, set the generator for 1800MHz at +12dBm. Connect the generator to the EV kit input through a 3dB pad. Disable the RF output until all connections are made.
- 5) Connect the power sensor to OUTLO's 20dB pad.
- 6) Set the DC supply to +5.0V (set the current limit to around 250mA, if possible). Disable the output voltage and connect the supply to the EV kit through the ammeter.
- 7) Enable the supply.
- 8) Enable the RF signal generator's output.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Testing the Buffer

- 1) From the procedure above, the power meter should be reading a power of about +17dBm. Keep in mind that  because of a 2nd harmonic component in the output, these measured results are slightly higher than the true on-frequency RF power.
- 2) Ensure that the supply current is not more than 122mA at VCC = 5.25V and PIN = +10dBm.
- 3) Leaving the 20dB power pad connected to OUTLO, move the power detector to OUTPLL (removing the 50 Ω termination) and verify an output level of about +3dBm. Be sure to turn off the 20dB offset.
- 4) After  testing,  disable  the  RF  generator,  disconnect the supply, then disconnect the RF cables.

## Layout Considerations

A properly designed PC board is an essential part of any RF/microwave circuit. Keep RF signal lines as short as possible to reduce losses, radiation, and inductance. For best performance, route the ground pin traces directly to the exposed paddle underneath the package. This paddle should be connected to the ground plane of the board by using multiple vias under the  device to provide the best RF/thermal conduction path. Solder the exposed paddle, on the bottom of the device package, to a PC board exposed pad.

## Table 1. List of Required Equipment

| EQUIPMENT          |   QTY | DESCRIPTION                    |
|--------------------|-------|--------------------------------|
| HP E3631A          |     1 | DC power supply                |
| Fluke 75 series II |     1 | Digital multimeter             |
| HP/Agilent 8648B   |     1 | RF signal generator            |
| HP 437B            |     1 | RF power meter                 |
| HP 8482A           |     1 | High-power sensor (power head) |
| 20dB pad           |     1 | 20dB (1W) attenuator           |
| 3dB pad            |     1 | 3dB attenuator                 |
| 50 Ω termination   |     1 | 50 Ω (1W) termination          |

<!-- image -->

## MAX9989/MAX9990 Evaluation Kits

<!-- image -->

Figure 1. Test Setup Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9989/MAX9990 Evaluation Kits

Figure 2. MAX9989/MAX9990 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9989/MAX9990 Evaluation Kits

<!-- image -->

Figure 3a. MAX9989 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

Figure 4. MAX9989/MAX9990 EV Kit PC Board Layout-Top Soldermask

<!-- image -->

Figure 3b. MAX9990 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

Figure 5. MAX9989/MAX9990 EV Kit PC Board Layout-Top Layer Metal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9989/MAX9990 Evaluation Kits

<!-- image -->

Figure 6. MAX9989/MAX9990 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

Figure 8. MAX9989/MAX9990 EV Kit PC Board Layout-Bottom Layer Metal

Figure 7. MAX9989/MAX9990 EV Kit PC Board Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 9. MAX9989/MAX9990 EV Kit PC Board Layout-Bottom Soldermask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9989/MAX9990 Evaluation Kit

Figure 10. MAX9989/MAX9990 EV Kit PC Board LayoutBottom Silkscreen

<!-- image -->

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7