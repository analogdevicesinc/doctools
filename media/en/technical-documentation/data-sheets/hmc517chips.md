<!-- lastmod 2023-02-02 -->
<!-- image -->

## Typical Applications

The HMC517 is ideal for use as a LNA or Driver ampli- fier for:

- Point-to-Point Radios

- Point-to-Multi-Point Radios &amp; VSAT

- Test Equipment and Sensors

- Military &amp; Space

## Functional Diagram

## HMC517

v04.0223

## GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 17 - 26 GHz

## Features

Noise Figure:  2.2 dB

Gain: 19 dB

OIP3: +24 dBm

Single Supply: +3V @ 65 mA

50 Ohm Matched Input/Output

Die Size: 2.14 x 1.32 x 0.1 mm

## General Description

<!-- image -->

The  HMC517  chip  is  a  high  dynamic  range  GaAs pHEMT  MMIC  Low  Noise  Amplifier  (LNA)  which covers  the  17  to  26  GHz  frequency  range.  The HMC517 provides 19 dB of small signal gain, 2.2 dB of  noise  figure  and  has  an  output  IP3  greater  than +24 dBm. The chip can easily be integrated into hybrid or MCM assemblies due to its small size. All data is  tested with the chip in a 50 Ohm test fixture connected via 0.075mm (3 mil) ribbon bonds of minimal length 0.31 mm (12 mil). Two 0.025 mm (1 mil) diameter bondwires may also be used to make the RFIN and RFOUT connections.

## Electrical Specifications, T A = +25° C, Vdd 1, 2, 3 = +3V

| Parameter                                | Min.   | Typ.    | Max.   | Min.   | Typ.    | Max.   | Units   |
|------------------------------------------|--------|---------|--------|--------|---------|--------|---------|
| Frequency Range                          |        | 17 - 22 |        |        | 22 - 26 |        | GHz     |
| Gain                                     | 16     | 19      |        | 15     | 18      |        | dB      |
| Gain Variation Over Temperature          |        | 0.015   | 0.025  |        | 0.015   | 0.025  | dB/ °C  |
| Noise Figure                             |        | 2.2     | 2.7    |        | 2.4     | 2.9    | dB      |
| Input Return Loss                        |        | 17      |        |        | 15      |        | dB      |
| Output Return Loss                       |        | 10      |        |        | 10      |        | dB      |
| Output Power for 1 dB Compression (P1dB) | 8      | 11      |        | 9.5    | 12.5    |        | dBm     |
| Saturated Output Power (Psat)            |        | 15      |        |        | 15      |        | dBm     |
| Output Third Order Intercept (IP3)       |        | 23      |        |        | 24      |        | dBm     |
| Supply Current (Idd)(Vdd = +3V)          |        | 65      | 88     |        | 65      | 88     | mA      |

<!-- image -->

Broadband Gain &amp; Return Loss

<!-- image -->

Input Return Loss vs. Temperature

<!-- image -->

Noise Figure vs. Temperature

<!-- image -->

## HMC517

v04.0223

## GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 17 - 26 GHz

<!-- image -->

Gain vs. Temperature

<!-- image -->

Output IP3 vs. Temperature

<!-- image -->

<!-- image -->

P1dB vs. Temperature

<!-- image -->

Reverse Isolation vs. Temperature

<!-- image -->

<!-- image -->

## GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 17 - 26 GHz

Psat vs. Temperature

<!-- image -->

Power Compression @ 21 GHz

<!-- image -->

Gain, Noise Figure &amp; Power vs. Supply Voltage @ 21 GHz

<!-- image -->

<!-- image -->

## Absolute Maximum Ratings

| Drain Bias Voltage (Vdd1, Vdd2, Vdd3)                     | +5.5 Vdc       |
|-----------------------------------------------------------|----------------|
| RF Input Power (RFIN)(Vdd = +3.0 Vdc)                     | +19 dBm        |
| Channel Temperature                                       | 175 °C         |
| Continuous Pdiss (T= 85 °C) (derate 18 mW/°C above 85 °C) | 1.65W          |
| Thermal Resistance (channel to die bottom)                | 54.6 °C/W      |
| Storage Temperature                                       | -65 to +150 °C |
| Operating Temperature                                     | -55 to +85 °C  |
| ESD Sensitivity (HBM)                                     | Class 1A       |

## Outline Drawing

<!-- image -->

## Die Packaging Information [1]

| Standard        | Alternate   |
|-----------------|-------------|
| GP-2 (Gel Pack) | [2]         |

[1] Refer to the 'Packaging Information' section for die packaging dimensions.

[2] For alternate packaging information contact Analog Devices, Inc.

NOTES:

1.  ALL DIMENSIONS ARE IN INCHES [MM]

2.  DIE THICKNESS IS .004'

3.  TYPICAL BOND IS .004' SQUARE

4.  BACKSIDE METALLIZATION:  GOLD

5.  BOND PAD METALLIZATION:  GOLD

6.  BACKSIDE METAL IS GROUND.

7.  CONNECTION NOT REQUIRED FOR  UNLABELED BOND PADS.

## HMC517

v04.0223

## GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 17 - 26 GHz

## Typical Supply Current vs. Vdd

|   Vdd (Vdc) |   Idd (mA) |
|-------------|------------|
|         2.5 |         61 |
|         3   |         65 |
|         3.5 |         69 |

Note: Amplifier will operate over full voltage ranges shown above.

<!-- image -->

<!-- image -->

## Pad Descriptions

| Pad Number   | Function         | Description                                                                                           | Interface Schematic   |
|--------------|------------------|-------------------------------------------------------------------------------------------------------|-----------------------|
| 1            | RFIN             | This pad is AC coupled and matched to 50 Ohms.                                                        |                       |
| 2, 3, 4      | Vdd1, 2, 3       | Power Supply Voltage for the amplifier. External bypass capacitors of 100 pF and 0.1 µF are required. |                       |
| 5            | RFOUT            | This pad is AC coupled and matched to 50 Ohms.                                                        |                       |
| 6, 7, 8      | Vgg3, Vgg2, Vgg1 | These pads must be connected to RF/DC ground for proper operation.                                    |                       |
| Die Bottom   | GND              | Die Bottom must be connected to RF/DC ground.                                                         |                       |

## Assembly Diagram

<!-- image -->

Note: Vgg1, Vgg2 and Vgg3 must be connected to RF/DC ground.

<!-- image -->

## GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 17 - 26 GHz

<!-- image -->

## HMC517

v04.0223

## GaAs PHEMT MMIC LOW NOISE AMPLIFIER, 17 - 26 GHz

## Mounting &amp; Bonding Techniques for Millimeterwave GaAs MMICs

The die should be attached directly to the ground plane eutectically or with conductive epoxy (see HMC general Handling, Mounting, Bonding Note).

50 Ohm Microstrip transmission lines on 0.127mm (5 mil) thick alumina thin film substrates are recommended for bringing RF to and from the chip (Figure 1).  If 0.254mm (10 mil) thick alumina thin film substrates must be used,  the die should be raised 0.150mm (6 mils) so that the surface of the die is coplanar with the surface of the substrate.  One way to accomplish this is to attach the 0.102mm (4 mil) thick die to a 0.150mm (6 mil) thick molybdenum  heat  spreader  (moly-tab)  which  is  then  attached  to  the ground plane (Figure 2).

Microstrip substrates should brought as close to the die as possible in order to minimize bond wire length.  Typical die-to-substrate spacing is 0.076mm to  0.152  mm  (3  to  6  mils).    Gold  ribbon  of  0.075  mm  (3  mils)  width  and  minimum &lt; 0.31 mm (&lt;12 mils) is recommended.

## Handling Precautions

Follow these precautions to avoid permanent damage.

Storage: All  bare  die  are  placed  in  either  Waffle  or  Gel  based  ESD protective  containers,  and  then  sealed  in  an  ESD  protective  bag  for shipment. Once the sealed ESD protective bag has been opened, all die should be stored in a dry nitrogen environment.

Cleanliness: Handle the chips in a clean environment. DO NOT attempt to clean the chip using liquid cleaning systems.

Static Sensitivity: Follow ESD precautions to protect against ESD strikes.

Transients: Suppress instrument and bias supply transients while bias is  applied.    Use  shielded  signal  and  bias  cables  to  minimize  inductive pick-up.

General Handling: Handle the chip along the edges with a vacuum collet

<!-- image -->

<!-- image -->

or with a sharp pair of bent tweezers. The surface of the chip has fragile air bridges and should not be touched with vacuum collet, tweezers, or fingers.

## Mounting

The chip is back-metallized and can be die mounted with AuSn eutectic preforms or with electrically conductive epoxy. The mounting surface should be clean and flat.

Eutectic Die Attach: A 80/20 gold tin preform is recommended with a work surface temperature of 255 °C and a tool temperature of 265 °C.  When hot 90/10 nitrogen/hydrogen gas is applied, tool tip temperature should be 290 °C. DO NOT expose the chip to a temperature greater than 320 °C for more than 20 seconds.  No more than 3 seconds of scrubbing should be required for attachment.

Epoxy Die Attach: Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip once it is placed into position. Cure epoxy per the manufacturer's schedule.

## Wire Bonding

RF bonds made with 0.003' x 0.0005' ribbon are recommended.  These bonds should be thermosonically bonded with a force of 40-60 grams.  DC bonds of 0.001' (0.025 mm) diameter, thermosonically bonded, are recommended. Ball bonds should be made with a force of 40-50 grams and wedge bonds at 18-22 grams.  All bonds should be made with a nominal stage temperature of 150 °C.  A minimum amount of ultrasonic energy should be applied to achieve reliable bonds.  All bonds should be as short as possible, less than 12 mils (0.31 mm).