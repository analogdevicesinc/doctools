<!-- lastmod 2022-08-02 -->
## General Description

The MAX2374 evaluation kit (EV kit) simplifies the evaluation of the MAX2374 low-noise amplifier (LNA). It enables testing of the device's RF performance and requires no additional support circuitry. The signal input and output ports use SMA connectors to facilitate the connection of RF test equipment.

The MAX2374 EV kit is assembled with the MAX2374 and incorporates input and output matching components optimized for an RF frequency of 880MHz. All matching components may be changed to match RF frequencies from 750MHz to 1000MHz. Refer to Table 1 in  the  MAX2374 data sheet for the device's S-parameters to design matching networks at other frequencies.

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          |
|--------------------|--------------|--------------|
| EFJohnson          | 402-474-4800 | 402-474-4858 |
| Kamaya             | 219-489-1533 | 219-489-2261 |
| Murata Electronics | 800-831-9172 | 814-238-0490 |

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1            |     1 | 2pF ± 0.25pF, 25V min ceramic capacitor (0402) Murata GRM36COG020C050A    |
| C2, C7        |       | Not installed                                                             |
| C3, C8, C9    |     3 | 0.01 µ F ± 10%, 10V min ceramic capacitors (0402) Murata GRM36X7R103K016A |
| C4            |     1 | 5pF ± 0.25pF, 25V min ceramic capacitor (0402) Murata GRM36COG050C050A    |
| C5            |     1 | 100pF ± 5%, 25V min ceramic capacitor (0402) Murata GRM36COG101J050A      |
| C6            |     1 | 0.01 µ F ± 10%, 25V min ceramic capacitor (0805) Murata GRM40X7R103K050A  |
| J1, J2        |     2 | SMA connectors (edge mount) EFJohnson 142-0701-801                        |
| J3, J4        |     2 | Test points                                                               |

<!-- image -->

## Features

- ♦ Easy Evaluation of MAX2374
- ♦ +2.7V to +5.5V Single-Supply Operation
- ♦ RF Input and Output Matched to 50 Ω at 880MHz
- ♦ All Critical Peripheral Components Included
- ♦ Jumpers for Easy Configuration of Gain and Linearity

## Ordering Information

| PART         | TEMP. RANGE        | IC PACKAGE   | UCSP TOP MARK   |
|--------------|--------------------|--------------|-----------------|
| MAX2374EVKIT | -40 ° C to +85 ° C | 6 UCSP       | AAB 1GB         |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                          |
|---------------|-------|--------------------------------------|
| JU1           |     1 | 2x2 header with one shunt            |
| JU2           |     1 | 2x4 header with one shunt            |
| L1            |     1 | 8.2nH inductor Murata LQW1608A8N2D00 |
| L2            |     1 | 6.8nH inductor LQW1608A6N8C00        |
| R1            |     1 | 10k Ω ± 1% resistor (0402)           |
| R2            |     1 | 20k Ω ± 1% resistor (0402)           |
| R3            |     1 | 43.2k Ω ± 1% resistor (0402)         |
| R4            |     1 | 10 Ω ± 1% resistor (0402)            |
| U1            |     1 | MAX2374EBT                           |
| None          |     1 | MAX2374 circuit board, Rev B         |
| None          |     1 | MAX2374 data sheet                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX2374 Evaluation Kit

## Quick Start

The MAX2374 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists the recommended test equipment to verify operation of the MAX2374. It is intended as a guide only, and some substitutions are possible:

- One RF signal generator capable of delivering at least 0dBm of output power up to 1.0GHz (HP 8648C or equivalent)
- An RF spectrum analyzer that covers the MAX2374's operating frequency range as well as a few harmonics (HP 8561E, for example)
- A power supply capable of delivering +2.7V to +5.5V
- Two 50 Ω SMA cables
- (Optional) An ammeter for measuring the supply current
- (Optional) A noise figure meter (HP 8970B, for example)
- (Optional) A network analyzer (HP 8753D, for example) to measure return loss and gain

## Connections and Setup

## Checking Power Gain

This section provides a step-by-step guide to operating the EV kit and exercising its function:

- 1) Connect a DC supply set to +2.75V (through an ammeter, if desired) to the EV kit's VCC and GND terminals.
- 2) Set the generator for an output frequency of 880MHz at a power level of -30dBm. Connect the signal generator to the RF IN SMA connector.
- 3) Connect a spectrum analyzer to the EV kit's RF OUT SMA connector. Set it to a center frequency of 880MHz, a total span of 30MHz, and a reference level of -10dBm.
- 4) Verify that JU1 is set to HI and JU2 is set to R2. Jumper JU2 alters the linearity of the MAX2374. Connect JU2 to R1 to increase linearity and supply current. Connect to R3 to decrease linearity and supply current. JU2 also places the MAX2374 in shutdown mode. Connect JU2 to GND or leave open to enable shutdown.
- 5) Turn on the DC supply. The supply current should read approximately 8.5mA (if using an ammeter).
- 6) Activate the RF generator's output. A signal on the spectrum analyzer's display should indicate a typical
7. power of -15dB after accounting for cable and board losses.
- 7) Move JU1 to GND (LO) to reduce the gain to about 1dB. The spectrum analyzer should indicate a typical power of -29dBm after accounting for cable and board losses.
- 8) (Optional) Another method for determining gain is by using a network analyzer. This has the advantage of displaying gain vs. frequency, in addition to displaying input and output return loss. Refer to the network analyzer manufacturer's user manual for setup details.

## Checking Noise Figure

Noise figure measurements on low-noise devices such as the MAX2374 are extremely sensitive to lab setup and board losses and parasitics. There are many techniques and precautions for measuring a low noise-figure device. Detailed explanation of these items goes beyond the scope of this document. For more information on how to perform this level of noise figure measurement, refer to the noise figure meter operating manual as well as to Hewlett Packard application note #57-2, Noise Figure Measurement Accuracy .

## Layout Considerations

Design the layout for the IC as compact as possible to minimize the parasitics. The chip-scale IC package uses a bump pitch of 0.5mm (19.7mil) and a bump diameter of 0.3mm (~13mil). Therefore, lay out the solder pad spacing on 0.5mm (19.7mil) centers, and use a pad size of 0.25mm (~10mil) and a solder mask opening of 0.33mm (~13mil). Round or square pads are permissible. Connect multiple vias from the ground plane as close as possible to the ground pins.

Install  capacitors as close as possible to the IC supply voltage pin and supply end of the series inductor. Place the ground end of these capacitors near the IC GND pins to  provide a low-impedance return path for the signal current.

## Modifying the EV Kit

The MAX2374 EV kit is factory-configured for operation at 880MHz and is easily configured to operate from 750MHz to 1000MHz. Use the device's parameters listed in  Table 1 of the MAX2374 data sheet to determine the proper input and output matching components at other frequencies.

The MAX2374 is designed for AC-coupled operation. When determining matching components for other frequencies, ensure that a DC-blocking capacitor is part of the matching network.

Figure 1 shows the MAX2374 EV kit schematic.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2374 Evaluation Kit

<!-- image -->

Figure 1. MAX2374 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2374 Evaluation Kit

<!-- image -->

Figure 2. MAX2374 EV Kit Component Placement GuideComponent Side

Figure 4. MAX2374 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 6. MAX2374 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Figure 3. MAX2374 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX2374 EV Kit PC Board Layout-Ground Plane

<!-- image -->