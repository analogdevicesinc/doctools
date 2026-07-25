<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX2642/MAX2643 evaluation kits (EV kits) simplify evaluation of the MAX2642 and MAX2643 low-noise amplifiers (LNAs). These kits enable testing of the devices' performance and require no additional support circuitry. The signal input and output use SMA connectors to facilitate connection of RF test equipment.

The MAX2642/MAX2643 EV kits are fully assembled with the MAX2642 or MAX2643 on board, and incorporate input matching components optimized for 900MHz operation.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1            |     1 | 470pF ± 5% ceramic cap (0603) Murata GRM39X7R471K050 or Taiyo Yuden UMK107 B471KZ  |
| C2            |     1 | 3.3pF ± 5% ceramic cap (0603) Murata GRM39COG3R3B050                               |
| C3            |     0 | Not installed                                                                      |
| C4, C5        |     2 | 100pF ± 5% ceramic caps (0603) Murata GRM39COG101J050 or Taiyo Yuden UMK107CH101JZ |
| C6            |     1 | 47pF ± 5% ceramic cap (0603) Murata GRM39COG470J050 or Taiyo Yuden UMK107CH470JZ   |
| C7            |     1 | 4.7 µ F ceramic capacitor (0805)                                                   |
| L1            |     1 | 8.7nH inductor (0603) Coilcraft 0603CS-8N7XJBC                                     |
| R1            |     1 | 511 Ω ± 1% resistor (0603)                                                         |
| R2            |     1 | 33k Ω± 5%resistor (0603) (MAX2642) 10k Ω± 5%resistor (0603) (MAX2643)              |
| R3            |     0 | Not installed                                                                      |
| R4            |     1 | 0 Ω resistor                                                                       |
| VCC, GND      |     2 | 2-pin headers                                                                      |
| JU1           |     0 | Not installed                                                                      |
| JU2           |     1 | 3-pin header                                                                       |
| RFIN, RFOUT   |     2 | Edge-mount SMA connectors                                                          |
| U1            |     1 | Maxim MAX2642EXT-T or MAX2643EXT-T IC (6-pin SC70)                                 |

## Features

- ♦ Easy Evaluation of MAX2642/MAX2643
- ♦ +2.7V to +5.5V Single-Supply Operation
- ♦ RF Input and Output Matched to 50 Ω at 900MHz
- ♦ Jumper Included for Gain/Shutdown Setting
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP. RANGE        | IC PACKAGE   | TOP MARK   |
|---------------|--------------------|--------------|------------|
| MAX2642 EVKIT | -40 ° C to +85 ° C | SC70-6       | AAC        |
| MAX2643 EVKIT | -40 ° C to +85 ° C | SC70-6       | AAD        |

## Component Suppliers

| SUPPLIERS          | PHONE        | FAX          | WEB                |
|--------------------|--------------|--------------|--------------------|
| Coilcraft          | 847-639-6400 | 847-639-1469 | www.coilcraft. com |
| Murata Electronics | 800-831-9172 | 814-238-0490 | www.murata. com    |
| Taiyo Yuden        | 800-348-2496 | 408-434-0375 | www. t-yuden.com   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX2642/MAX2643 Evaluation Kits

## Quick Start

The MAX2642/MAX2643 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

- An RF signal generator capable of delivering -10dBm of output power and a frequency range covering the MAX2642/MAX2643 (800MHz to 1000MHz, for example)
- An RF spectrum analyzer that covers the operating frequency range
- A DC power supply capable of supplying +2.7V to +5.5V
- Two 50 Ω coaxial cables with SMA connectors
- An ammeter to measure supply current (optional)
- A noise figure meter (optional)
- A network analyzer for measuring gain and return loss (optional)

## Connections and Setup

## Checking Power Gain

- 1) Connect a DC supply (preset to +3.0V) to the VCC and GND terminals (through an ammeter, if desired) on the EV kit.
- 2) Set the RF generator for an output frequency of 900MHz at a power level of -30dBm. Connect the RF generator's output to the RFIN SMA connector.
- 3) Connect the coaxial cable from the RFOUT SMA connector to the spectrum analyzer.
- 4) Turn on the DC supply. The supply current should read approximately 5mA (if using an ammeter).
- 5) Activate the RF generator's output. A signal on the spectrum analyzer's display should indicate a typical gain of +17dB after accounting for cable and board losses.
- 6) Optional: For the MAX2642, set the jumper JU2 to the VCC position. The power gain should now be +3.5dB.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 7) Optional: Another method of determining gain is by using a network analyzer. This has the advantage of displaying gain vs. a swept frequency band, in addition to displaying input and output return loss. Refer to the user manual of the network analyzer for setup details.

## Checking Noise Figure

Noise figure measurements on low-noise devices such as the MAX2642/MAX2643 are extremely sensitive to board and lab setup losses and parasitics. There are many techniques and precautions for measuring low noise figure. A detailed explanation of these items would exceed the scope of this document. Take into account PC board and external components loss when performing noise-figure measurements. The typical input losses on these EV kits is 0.25dB. For more information on how to perform this level of noise-figure measurement, refer to the noise-figure meter operating manual and to Hewlett Packard's application note #57-2, Noise Figure Measurement Accuracy.

## Layout Considerations

Good PC board layout is an essential part of an RF circuit's design. The EV kit PC board can serve as a guide for  laying  out  a  board  using  the  MAX2642/MAX2643. Generally, the VCC node on the PC board should have a decoupling capacitor located close to the device, and additional capacitors may be needed for long VCC lines. This minimizes supply coupling. Proper grounding of the GND pins is essential. Connect the GND pins to the ground plane either directly, through vias, or both.

<!-- image -->

## MAX2642/MAX2643 Evaluation Kits

<!-- image -->

Figure 1. MAX2642/MAX2643 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2642/MAX2643 Evaluation Kits

<!-- image -->

Figure 2. MAX2642/MAX2643 EV Kits Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX2642/MAX2643 EV Kits PC Board LayoutGround Plane Layers 2 and 3

Figure 3. MAX2642/MAX2643 EV Kits PC Board LayoutComponent Side

<!-- image -->

Figure 5. MAX2642/MAX2643 EV Kits PC Board LayoutSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4