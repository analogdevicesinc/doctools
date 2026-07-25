<!-- lastmod 2022-02-08 -->
<!-- image -->

## Typical Applications

The HMC341 is ideal for:

- Millimeterwave Point-to-Point Radios
- LMDS
- VSAT &amp; SATCOM

## Functional Diagram

## HMC341

v02.0222

## GaAs MMIC LOW NOISE AMPLIFIER, 24 - 30 GHz

## Features

Excellent Noise Figure: 2.5 dB

Gain: 13 dB

Single Supply: +3V @ 30 mA

Small Size: 1.42 x 1.06 x 0.1 mm

## General Description

<!-- image -->

The  HMC341  chip  is  a  GaAs  MMIC    Low  Noise Amplifier  (LNA)  which  covers  the  frequency  range of  24  to  30  GHz.  The  chip  can  easily  be  integrated into  Multi-Chip  Modules  (MCMs)  due  to  its  small (1.51  mm 2 )  size.  The  chip  utilizes  a  GaAs  PHEMT process offering 13 dB gain from a single bias supply of  +  3V  @  30  mA  with  a  noise  figure  of  2.5  dB.  All data is with the chip in a 50 ohm test fixture connected via 0.025 mm (1 mil) diameter wire bonds of minimal length 0.31 mm (&lt;12 mils).

## Electrical Specifications, T A = +25° C, Vdd = +3V

| Parameter                               | Parameter                               |   Min. | Typ.    | Max.    | Units   |
|-----------------------------------------|-----------------------------------------|--------|---------|---------|---------|
| Frequency Range                         | Frequency Range                         |        | 24 - 30 |         | GHz     |
| Gain                                    | Gain                                    |     10 | 13      | 16      | dB      |
| Gain Variation Over Temperature         | Gain Variation Over Temperature         |        | 0.03    | 0.04    | dB/°C   |
| Noise Figure                            | 26 - 30 GHz 24 - 26 GHz                 |        | 2.5 2.9 | 3.5 3.9 | dB dB   |
| Input Return Loss                       | Input Return Loss                       |      9 | 13      |         | dB      |
| Output Return Loss                      | Output Return Loss                      |      9 | 13      |         | dB      |
| Reverse Isolation                       | Reverse Isolation                       |     25 | 30      |         | dB      |
| Output Power for 1dB Compression (P1dB) | Output Power for 1dB Compression (P1dB) |      2 | 6       |         | dBm     |
| Saturated Output Power (Psat)           | Saturated Output Power (Psat)           |      6 | 10      |         | dBm     |
| Output Third Order Intercept (IP3)      | Output Third Order Intercept (IP3)      |     12 | 16      |         | dBm     |
| Supply Current (Idd)                    | Supply Current (Idd)                    |        | 30      | 40      | mA      |

<!-- image -->

Gain vs. Temperature @ Vdd = +3V

<!-- image -->

Return Loss @ Vdd = +3V

<!-- image -->

Noise Figure vs. Temperature @ Vdd = +3V

<!-- image -->

## HMC341

v02.0222

## GaAs MMIC LOW NOISE AMPLIFIER, 24 - 30 GHz

Gain vs. Temperature @ Vdd = +5V

<!-- image -->

Return Loss @ Vdd = +5V

<!-- image -->

Noise Figure vs. Temperature @ Vdd = +5V

<!-- image -->

<!-- image -->

Gain &amp; Noise Figure vs. Supply Voltage @ 28 GHz

<!-- image -->

Output P1dB @ Vdd = +3V

<!-- image -->

Output IP3 @ Vdd = +3V

<!-- image -->

Isolation

<!-- image -->

Output P1dB @ Vdd = +5V

<!-- image -->

Output IP3 @ Vdd = +5V

<!-- image -->

## HMC341

v02.0222

## GaAs MMIC LOW NOISE AMPLIFIER, 24 - 30 GHz

<!-- image -->

## Absolute Maximum Ratings

| Drain Bias Voltage (Vdd)                                     | +5.5 Vdc               |
|--------------------------------------------------------------|------------------------|
| RF Input Power (RFIN)(Vdd = +3.0 Vdc)                        | +3 dBm                 |
| Channel Temperature                                          | 175 °C                 |
| Continuous Pdiss (T = 85 °C) (derate 3.44 mW/°C above 85 °C) | 0.310W                 |
| Thermal Resistance (channel to die bottom)                   | 290 °C/W               |
| Storage Temperature                                          | -65 to +150 °C         |
| Operating Temperature                                        | -55 to +85 °C          |
| ESD Sensitivity (HBM)                                        | Class 1A (Passed 250V) |

<!-- image -->

ELECTROSTATIC SENSITIVE DEVICE OBSERVE HANDLING PRECAUTIONS

## Outline Drawing

<!-- image -->

## Die Packaging Information [1]

| Standard        | Alternate   |
|-----------------|-------------|
| GP-2 (Gel Pack) | [2]         |

[1] Refer to the 'Packaging Information' section for die packaging dimensions.

[2] For alternate packaging information contact Analog Devices, Inc.

## NOTES:

1.  ALL DIMENSIONS ARE IN INCHES [MM]

2.  DIE THICKNESS IS .004'

3.  TYPICAL BOND IS .004' SQUARE

4.  BACKSIDE METALLIZATION:  GOLD

5.  BOND PAD METALLIZATION:  GOLD

6.  BACKSIDE METAL IS GROUND.

7.  CONNECTION NOT REQUIRED FOR UNLABELED BOND PADS.

## HMC341

v02.0222

## GaAs MMIC LOW NOISE AMPLIFIER, 24 - 30 GHz

<!-- image -->

## Pad Descriptions

|   Pad Number | Function   | Description                                                                                                                                                                                                                                         | Interface Schematic   |
|--------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
|            1 | RFIN       | This pad is AC coupled and matched to 50 Ohms.                                                                                                                                                                                                      |                       |
|            2 | RFOUT      | This pad is AC coupled and matched to 50 Ohms.                                                                                                                                                                                                      |                       |
|            3 | Vdd        | Power Supply for the 2-stage amplifier. An external RF bypass capaci- tor of 100 - 300 pF is required. The bond length to the capacitor should be as short as possible. The ground side of the capacitor should be connected to the housing ground. |                       |

## Assembly Diagrams

<!-- image -->

## HMC341

v02.0222

## GaAs MMIC LOW NOISE AMPLIFIER, 24 - 30 GHz

<!-- image -->

## HMC341

v02.0222

## GaAs MMIC LOW NOISE AMPLIFIER, 24 - 30 GHz

## Mounting &amp; Bonding Techniques for Millimeterwave GaAs MMICs

The die should be attached directly to the ground plane eutectically or with conductive epoxy ( see HMC general Handling, Mounting, Bonding Note ).

50 Ohm Microstrip transmission lines on 0.127mm (5 mil) thick alumina thin film substrates are recommended for bringing RF to and from the chip (Figure 1).  If 0.254mm (10 mil) thick alumina thin film substrates must be used,  the die should be raised 0.150mm (6 mils) so that the surface of the die is coplanar with the surface of the substrate.  One way to accomplish this is to attach the 0.102mm (4 mil) thick die to a 0.150mm (6 mil) thick molybdenum  heat  spreader  (moly-tab)  which  is  then  attached  to  the ground plane (Figure 2).

Microstrip  substrates  should  brought  as  close  to  the  die  as  possible  in order to minimize bond wire length.  Typical die-to-substrate spacing is 0.076mm to 0.152 mm (3 to 6 mils).

An RF bypass capacitor should be used on the Vdd input.  A 100 pF single layer capacitor (mounted eutectically or by conductive epoxy) placed no further than 0.762mm (30 Mils) from the chip is recommended.

## Handling Precautions

Follow these precautions to avoid permanent damage.

Storage: All  bare  die  are  placed  in  either  Waffle  or  Gel  based  ESD protective  containers,  and  then  sealed  in  an  ESD  protective  bag  for shipment. Once the sealed ESD protective bag has been opened, all die should be stored in a dry nitrogen environment.

Cleanliness: Handle the chips in a clean environment. DO NOT attempt to clean the chip using liquid cleaning systems.

Static  Sensitivity: Follow  ESD  precautions  to  protect  against  ESD strikes.

<!-- image -->

<!-- image -->

Transients: Suppress instrument and bias supply transients while bias is applied. Use shielded signal and bias cables to minimize inductive pick-up.

General Handling: Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip has fragile air bridges and should not be touched with vacuum collet, tweezers, or fingers.

## Mounting

The chip is back-metallized and can be die mounted with AuSn eutectic preforms or with electrically conductive epoxy. The mounting surface should be clean and flat.

Eutectic Die Attach: A 80/20 gold tin preform is recommended with a work surface temperature of 255 °C and a tool temperature of 265 °C.  When hot 90/10 nitrogen/hydrogen gas is applied, tool tip temperature should be 290 °C. DO NOT expose the chip to a temperature greater than 320 °C for more than 20 seconds.  No more than 3 seconds of scrubbing should be required for attachment.

Epoxy Die Attach: Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip once it is placed into position. Cure epoxy per the manufacturer's schedule.

## Wire Bonding

Ball or wedge bond with 0.025 mm (1 mil) diameter pure gold wire.  Thermosonic wirebonding with a nominal stage temperature of 150 °C and a ball bonding force of 40 to 50 grams or wedge bonding force of 18 to 22 grams is recommended.  Use the minimum level of ultrasonic energy to achieve reliable wirebonds. Wirebonds should be started on the chip and terminated on the package or substrate.  All bonds should be as short as possible &lt;0.31 mm (12 mils).