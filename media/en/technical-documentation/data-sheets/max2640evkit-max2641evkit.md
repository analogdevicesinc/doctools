<!-- lastmod 2023-06-06 -->
<!-- image -->

## General Description

The MAX2640/MAX2641 evaluation kits (EV kits) simplify  the  evaluation  of  the  MAX2640/MAX2641 low-noise amplifiers (LNAs). They enable testing of the device's RF performance and require no additional support circuitry. The signal inputs and outputs use SMA connectors to facilitate the connection of RF test equipment.

The MAX2640 EV kits are assembled with the MAX2640 and incorporate input and output matching components optimized  for  an  RF  frequency  of  900MHz.  The MAX2641 EV kits are assembled with the MAX2641 and incorporate input and output matching components optimized for an RF frequency of 1900MHz. All matching components may be changed to match RF frequencies from 400MHz to 1500MHz for the MAX2640 and from 1400MHz to 2500MHz for the MAX2641. Consult Tables 1 through 4 in the MAX2640/MAX2641 data sheet for devices S-parameters and noise parameters for  the  design  of  matching  networks  at  other frequencies.

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          |
|--------------------|--------------|--------------|
| Coilcraft          | 847-639-6400 | 847-639-1469 |
| Murata Electronics | 800-831-9172 | 814-238-0490 |

| DESIGNATION    | DESIGNATION    | QTY   |                                                       |
|----------------|----------------|-------|-------------------------------------------------------|
| MAX2640 EV Kit | MAX2641 EV Kit | QTY   | DESCRIPTION                                           |
| C1, C4         | C1, C4         | 2     | 470pF 5% ceramic caps (0805) Murata GRM40COG471J50V   |
| C2             | -              | 1     | 3pF ±0.1pF ceramic cap (0805) Murata GRM40COG3R0B50V  |
| -              | C2             | 1     | 100pF 5% ceramic cap (0805) Murata GRM40COG101J50V    |
| C3             | C3             | 1     | 10µF ceramic cap (1206) AVX TAJA106K010R              |
| Z M1           | -              | 1     | 2pF ±0.1pF ceramic cap (0805) Murata GRM40COG2R0B50V  |
| -              | Z M1 , Z M2    | 2     | 1pF ±0.1pF ceramic caps (0603) Murata GRM39COG1R0B50V |
| Z M2           | -              |       | Not installed                                         |

Features

- ' Easy Evaluation of MAX2640/MAX2641
- ' +2.7V to +5.5V Single-Supply Operation
- ' RF Input and Output Matched to 50 Ω at 900MHz (MAX2640)
- ' RF Input and Output Matched to 50 Ω at 1900MHz (MAX2641)
- ' All Critical Peripheral Components Included

## Ordering Information

| PART          | TEMP. RANGE    | IC PACKAGE   | SOT TOP MARK   |
|---------------|----------------|--------------|----------------|
| MAX2640 EVKIT | -40°C to +85°C | SOT23-6      | AAAV           |
| MAX2641 EVKIT | -40°C to +85°C | SOT23-6      | AAAW           |

## Component List

| DESIGNATION    | DESIGNATION    | QTY   |                                                        |
|----------------|----------------|-------|--------------------------------------------------------|
| MAX2640 EV Kit | MAX2641 EV Kit | QTY   | DESCRIPTION                                            |
| Z1             | -              | 1     | 9.85nH 5% air-core inductor Coilcraft 1606-9-5         |
| -              | Z1             | 1     | 2.55nH 5% air-core inductor Coilcraft 0906-3-5         |
| RFIN, RFOUT    | RFIN, RFOUT    | 2     | SMA connectors (PC edge mount) EF Johnson 142-0701-801 |
| U1             | -              | 1     | MAX2640EUT-T (topmark: AAAV), 6-pin SOT23-6            |
| -              | U1             | 1     | MAX2641EUT-T (topmark: AAAW), 6-pin SOT23-6            |
| None           | -              | 1     | MAX2640 EV kit PC board                                |
| -              | None           | 1     | MAX2641 EV kit PC board                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX2640/MAX2641 Evaluation Kits

## Quick Start

The MAX2640/MAX2641 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify operation of the MAX2640/MAX2641. It is intended as a guide only, and some substitutions are possible.

- One RF signal generator capable of delivering at l east  0dBm  of  output  power  up  to  2.5GHz (HP8648C, or equivalent)
- An RF spectrum analyzer that covers the operating frequency range of the MAX2640/MAX2641 as well as a few harmonics (HP8561E, for example)
- A power supply capable of up to 100mA at +2.7V to +5.5V
- An optional ammeter for measuring the supply current
- Two 50 Ω SMA cables
- (Optional) A noise figure meter (HP8970B, for example)
- (Optional) Network analyzer (HP8753D, for example) to measure return loss and gain

## Connections and Setup

## Checking Power Gain

This section provides a step-by-step guide to operating the EV kits and their function.

- 1) Connect a DC supply set to +3V (through an ammeter, if desired) to the VCC and GND terminals on the EV kit.
- 2) Set the generator for an output frequency of 900MHz for the MAX2640 and 1900MHz for the MAX2641 at a power level of -34dBm. Connect one RF signal generator to the RFIN SMA connector.
- 3) Connect a spectrum analyzer to the RFOUT SMA connector on the EV kit. Set it to a center frequency of  900MHz for the MAX2640 and 1900MHz for the MAX2641, a total span of 200MHz, and a reference level of -10dBm.
- 4) Turn on the DC supply. The supply current should read approximately 3.5mA for either the MAX2640 or MAX2641 (if using an ammeter).
- 5) Activate the RF generator's output. A signal on the spectrum analyzer's display should indicate a typi-
6. cal gain of 15.1dB for the MAX2640 and 14.4dB for the MAX2641 after accounting for cable and board losses. Table EV1 lists board losses at specific frequencies.
- 6) (Optional) Another method for determining gain is using a network analyzer. This has the advantage of displaying gain versus a swept frequency band, in addition to displaying input and output return loss. Refer to the network analyzer manufacturer's user manual for setup details.

## Checking Noise Figure

Noise figure measurements on low-noise devices such as the MAX2640/MAX2641 are extremely sensitive to board and lab setup losses and parasitics. There are many techniques and precautions for measuring a noise figure below 1dB. Detailed explanation of these items goes beyond the scope of this document. For more information on how to perform this level of noise figure measurement, refer to the noise figure meter operating manual as well as the Hewlett Packard application  note  #  57-2  'Noise  Figure  Measurement Accuracy.'

## Layout Considerations

A good PC board layout is an essential part of an RF circuit  design.  The EV kit PC board can serve as a guide for laying out a board using the MAX2640/ MAX2641. Generally, each VCC node on the PC board should have its own decoupling capacitor. This minimizes supply coupling from one section of the IC to another. A star topology for the supply layout, in which each VCC node on the circuit has a separate connection  to  a  central  VCC node, can further minimize coupling between sections of the circuit board.

## Modifying the EV kit

The MAX2640 EV kit is factory-configured for operation at  900MHz and is easily configured to operate from 400MHz to 1500MHz. Use device parameters listed in Tables 1 and 3 of the MAX2640/MAX2641 data sheet to determine the proper input and output matching components at other frequencies. To evaluate the MAX2641 at frequencies other than the factory configured 1900MHz, use device parameters listed in Tables 2 and 4 of the MAX2640/MAX2641 data sheet to determine the proper input and output matching components. Table 1 lists recommended matching component values for the MAX2641 at 1575MHz and 2450MHz.

The MAX2640/MAX2641 are designed for AC-coupled operation. When determining matching components for other frequencies, ensure that a DC-blocking capacitor is part of the matching network.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2640/MAX2641 Evaluation Kits

Table 1.  MAX2640/MAX2641 EV Kit Board and Component Losses and Matching Component Values

| FREQUENCY (MHz)   | FREQUENCY (MHz)   | C1 VALUE (pF)   | C2 VALUE (pF)   | C5    | Z1* VALUE (nH)   | Z MI VALUE (pF)   | Z M1 POSITION   | Z M2 VALUE   | Z M2 POSITION   | INPUT LOSS (dB)   | OUTPUT LOSS (dB)   |
|-------------------|-------------------|-----------------|-----------------|-------|------------------|-------------------|-----------------|--------------|-----------------|-------------------|--------------------|
| MAX2640           | MAX2641           | C1 VALUE (pF)   | C2 VALUE (pF)   | C5    | Z1* VALUE (nH)   | Z MI VALUE (pF)   | Z M1 POSITION   | Z M2 VALUE   | Z M2 POSITION   | INPUT LOSS (dB)   | OUTPUT LOSS (dB)   |
| 900               | -                 | 470             | 3               | Open  | 9.85             | 2                 | 22              | -            | -               | 0.25              | 0.15               |
| -                 | 1575              | 100             | 100             | Open  | 5.6              | 1                 | 9.5             | 6.8nH †      | 11.5            | 0.37              | 0.30               |
| -                 | 1900              | 470             | 100             | Open  | 2.55             | 1                 | 9.5             | 1pF          | 25.5            | 0.41              | 0.30               |
| -                 | 2450              | 470             | 100             | 100pF | 1.65             | 1                 | 4               | 1pF          | 12              | 0.56              | 0.50               |

<!-- image -->

Figure 1.  MAX2640 EV Kit Schematic

<!-- image -->

Figure 2.  MAX2641 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX2640/MAX2641 Evaluation Kits

<!-- image -->

Figure 3.  MAX2640 EV Kit Component Placement GuideComponent Side

Figure 5.  MAX2640 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 7.  MAX2640/MAX2641 EV Kit PC Board LayoutGround Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Figure 4.  MAX2641 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 6.  MAX2641 EV Kit PC Board Layout-Component Side

<!-- image -->