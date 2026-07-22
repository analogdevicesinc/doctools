<!-- lastmod 2022-08-02 -->
## General Description

The MAX2659 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2659 GPS/GNSS low-noise amplifier (LNA). The MAX2659 high-gain, LNA is designed for GPS, Galileo, and GLONASS applications. The EV kit enables testing of the device's performance and requires no additional support circuitry. The MAX2659 EV kit is fully assembled with the MAX2659 IC on-board and incorporates input matching components to optimize performance. The EV kit's signal inputs and outputs use SMA connectors to facilitate the connection of RF test equipment.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 470pF ±10% ceramic capacitor (0402) Murata GRM155R71H471K              |
| C2, C4        |     2 | 39pF ±5% capacitors (0402) Murata GRM1555C1H390J                       |
| C3, C5        |     2 | 0.033µF ±10% ceramic capacitors (0402) Murata GRM155R71A333K           |
| C6            |     1 | 10µF ±10% tantalum capacitor (C case) AVX TAJC106K016                  |
| C7            |     1 | 0.01µF ±10% ceramic capacitor (0402) Murata GRM155R71C103K             |
| JU1           |     1 | 1 x 3-pin header, 3in inline header, 100-mil centers Sullins PEC36SAAN |

<!-- image -->

## Features

- ♦ Easy Evaluation of the MAX2659 IC
- ♦ 1.6V to 3.3V Single-Supply Operation
- ♦ RF Input and Output Matched to 50 Ω
- ♦ Jumper Included for Shutdown Setting
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE     | IC PACKAGE   |
|---------------|----------------|--------------|
| MAX2659EVKIT+ | -40°C to +85°C | 6 µDFN       |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| JU2, JU3      |     2 | PC mini-red test points Keystone 5000                         |
| L1            |     1 | 6.8nH ±5% inductor (0402) Murata LQW15AN6N8H00                |
| P1, P2        |     2 | SMA edge-mount connectors, round contact Johnson 142-0701-801 |
| P3            |     0 | Not installed                                                 |
| R1, R2        |     2 | 0 Ω ±5% resistors (0402)                                      |
| R4            |     1 | 10k Ω ±5% resistor (0402)                                     |
| U1            |     1 | MAX2659ELT+ GPS LNA (6-pin µDFN, 1.5mm x 1mm x 0.75mm)        |
| -             |     1 | PCB: MAX2659 Evaluation Kit+                                  |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE         |
|-----------------------|--------------|-----------------|
| AVX Corp.             | 843-946-0238 | www.avxcorp.com |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com  |

Note: Indicate that you are using the MAX2659 when contacting these component suppliers.

1

## MAX2659 Evaluation Kit

## Quick Start

## Required Equipment

- An RF signal generator capable of delivering RF power as high as 0dBm at the 1575.42MHz operating frequency, such as the HPE4433B or equivalent
- An RF spectrum analyzer that covers the MAX2659 operating frequency range, as well as a few harmonics, such as the FSEB20 or equivalent
- One DC power supply capable of up to 50mA at 1.6V to 3.3V
- Power meter capable of measuring up to 0dBm
- One ammeter to measure the supply current (optional)
- A noise figure meter (optional)
- A network analyzer for measuring gain and return loss (optional)

## Connections and Setup

The MAX2659 EV kit is fully assembled and tested. Follow the steps below for a step-by-step guide to operating the EV kit and testing the device functions. Connect pin 1 to pin 2 of JP1 to enable the device. Caution: Do not turn on the DC power or RF signal generators until all connections are completed.

- 1) Connect a DC supply set to +2.85V to the VCC and GND terminals (through an ammeter, if desired) on the EV kit. Do not turn on the supply.
- 2) Connect the RF signal generator to the RFIN SMA connector. Do not turn on the generator's output. Set the output of the RF signal generator to 1575.42MHz and power level to -40dBm.
- 3) Connect a spectrum analyzer to the RFOUT SMA connector. Set the center frequency to 1575.42MHz, reference level to 0dBm, and span to 1MHz.
- 4) Turn on the DC power supply. The supply current should read approximately 4.1mA.
- 5) Enable the RF generator's output. The spectrum analyzer displays a tone at 1575.42MHz at approximately -20dBm.

## Layout Issues

A good printed-circuit board (PCB) is an essential part of  RF  circuit  design.  The  EV  kit  PCB  can  serve  as  a guide for laying out a board using the MAX2659. Use controlled impedance lines on all high-frequency inputs and outputs. Bypass VCC with decoupling capacitors located close to the device. For long VCC lines, it may be necessary to add decoupling capacitors. Locate these additional capacitors farther away from the device package. This minimizes supply coupling. Proper grounding of the GND pins is essential. Connect the GND pins to the ground plane either directly, or through vias, or both.

Figure 1. MAX2659 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2659 Evaluation Kit

<!-- image -->

Figure 2. MAX2659 EV Kit Component Replacement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2659 Evaluation Kit

<!-- image -->

Figure 3. MAX2659 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 5. MAX2659 EV Kit PCB Layout-Component Side

Figure 4. MAX2659 EV Kit PCB Layout-Layer 3

<!-- image -->

Figure 6. MAX2659 EV Kit PCB Layout-Secondary Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4