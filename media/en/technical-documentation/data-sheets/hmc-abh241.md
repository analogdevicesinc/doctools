<!-- lastmod 2023-08-07 -->
<!-- image -->

<!-- image -->

## Typical applications

This HmC-aBH241 is ideal for:

-  short Haul / High Capacity Links
-  wireless Lan Bridges
-  military &amp; space

## Functional Diagram

## Gaas HEMT MMIC MEDIUM POWER amplifier, 50 - 66 GHz

## Features

output iP3: +25 dBm

P1dB: +17 dBm

Gain: 24 dB

supply Voltage: +5V

50 ohm matched input/output

Die size: 3.2 x 1.42 x 0.1 mm

## General Description

<!-- image -->

The HmC-aBH241 is a four stage Gaas HemT mmiC medium  Power  amplifier  which  operates  between 50  and  66  GHz.  The  HmC-aBH241  provides  24  dB of  gain,  and  an  output  power  of  +17  dBm  at  1dB compression from a +5V supply voltage. all bond pads and  the  die  backside  are  Ti/au  metallized  and  the amplifier  device  is  fully  passivated  for  reliable  operation. The  HmC-aBH241  Gaas  HemT  mmiC  medium Power  amplifier  is  compatible  with  conventional  die attach  methods, as well as thermocompression and thermosonic wire bonding, making it ideal for mCm and hybrid microcircuit applications.  all data shown herein is measured with the chip in a 50 ohm environment and contacted with rf probes.

## Electrical specifications, T a = +25° C, Vdd1= Vdd2= Vdd3= 5V, Idd1 + Idd2 + Idd3= 220ma [2]

| Parameter                                | min.   | Typ.    | max.   | Units   |
|------------------------------------------|--------|---------|--------|---------|
| frequency range                          |        | 50 - 66 |        | GHz     |
| Gain                                     | 19     | 24      |        | dB      |
| input return Loss                        |        | 15      |        | dB      |
| output return Loss                       |        | 15      |        | dB      |
| output Power for 1 dB Compression (P1dB) |        | 17      |        | dBm     |
| output Third order intercept (iP3)       |        | 25      |        | dBm     |
| saturated output Power (Psat)            |        | 19      |        | dBm     |
| supply Current (idd1 + idd2 + idd3)      |        | 220     |        | ma      |

[2] adjust Vgg1 = Vgg2 = Vgg3 between -1V to +0.3V (typ -0.3V) to achieve idd total  = 220ma v04.0823

<!-- image -->

<!-- image -->

Linear Gain vs. Frequency

<!-- image -->

Input Return Loss vs. Frequency

<!-- image -->

v04.0823

## Gaas HEMT MMIC MEDIUM POWER amplifier, 50 - 66 GHz

Fixtured Output Power vs. Frequency

<!-- image -->

Output Return Loss vs. Frequency

<!-- image -->

<!-- image -->

v04.0823

<!-- image -->

## absolute Maximum Ratings

| normal 5.0 V supply to GnD    | +5.5 Vdc          |
|-------------------------------|-------------------|
| Gate Bias Voltage             | -1 to +0.3 Vdc    |
| rf input Power (Vdd = +5.0 V) | 2 dBm             |
| storage Temperature           | -65 °C to + 150°C |
| max Peak reflow Temperature   | +180 °C           |

## Reliability Information

| maximum Junction Temperature                | +180 °C          |
|---------------------------------------------|------------------|
| normal Junction Temperature (T = +85 °C)    | +140.6 °C        |
| Thermal resistance (Junction to Die Bottom) | +50.6 °C/w       |
| operating Temperature                       | -55 °C to + 85°C |

## Outline Drawing

<!-- image -->

## noTes:

1.  aLL Dimensions are in inCHes [mm].
2.  TYPiCaL BonD PaD is .004' sQUare.
3.  BaCKsiDe meTaLLiZaTion:  GoLD.
4.  BaCKsiDe meTaL is GroUnD.
5.  BonD PaD meTaLLiZaTion:  GoLD.
6.  ConneCTion noT reQUireD for UnLaBeLeD BonD PaDs.
7.  oVeraLL Die siZe ±.002'
8.  Die THiCKness = 0.004'

## Die Packaging Information [1]

| standard        | alternate   |
|-----------------|-------------|
| GP-2 (Gel Pack) | [2]         |

[1] Refer to the 'Packaging Information' section for die packaging dimensions.

[2] For alternate packaging information contact Hittite Microwave Corporation.

## Gaas HEMT MMIC MEDIUM POWER amplifier, 50 - 66 GHz

<!-- image -->

<!-- image -->

<!-- image -->

## Pad Descriptions

| Pad number          | function         | Description                                                                                                                                   | interface schematic   |
|---------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| 1                   | rfin             | This pad is aC coupled and matched to 50 ohms.                                                                                                |                       |
| 2, 4, 6, 10, 12, 14 | Vgg1, Vgg2 Vgg3  | Gate control for amplifier. Please follow 'mmiC amplifier Biasing Procedure' application note. see assembly for required external components. |                       |
| 3, 5, 7, 9, 11, 13  | Vdd1, Vdd2, Vdd3 | Power supply Voltage for the amplifier. see assembly for required external components.                                                        |                       |
| 8                   | rfoUT            | This pad is aC coupled and matched to 50 ohms.                                                                                                |                       |
| Die Bottom          | GnD              | Die bottom must be connected to rf/DC ground.                                                                                                 |                       |

v04.0823

## Gaas HEMT MMIC MEDIUM POWER amplifier, 50 - 66 GHz

<!-- image -->

<!-- image -->

## assembly Diagram

<!-- image -->

note 1:  Bypass caps should be 100 pf (approximately) ceramic (single-layer) placed no farther than 30 mils from the amplifier.

note 2:  Best performance obtained from use of &lt;10 mil (long) by 3 by 0.5 mil ribbons on input and output.

v04.0823

## Gaas HEMT MMIC MEDIUM POWER amplifier, 50 - 66 GHz

<!-- image -->

<!-- image -->

## Gaas HEMT MMIC MEDIUM POWER amplifier, 50 - 66 GHz

## Mounting &amp; Bonding Techniques for Millimeterwave Gaas MMICs

The die should be attached directly to the ground plane eutectically or with conductive epoxy (see HmC general Handling, mounting, Bonding note).

50 ohm microstrip transmission lines on 0.127mm (5 mil) thick alumina thin film substrates are recommended for bringing rf to and from the chip (figure 1).  if 0.254mm (10 mil) thick alumina thin film substrates must be used,  the die should be raised 0.150mm (6 mils) so that the surface of the die is coplanar with the surface of the substrate.  one way to accomplish this is to attach the 0.102mm (4 mil) thick die to a 0.150mm (6 mil) thick molybdenum heat spreader (moly-tab) which is then attached to the ground plane (figure 2).

microstrip substrates should be placed as close to the die as possible in order to minimize bond wire length.  Typical die-to-substrate spacing is 0.076mm to 0.152 mm (3 to 6 mils).

## Handling Precautions

Follow these precautions to avoid permanent damage.

Storage: all bare die are placed in either waffle or Gel based esD protective containers, and then sealed in an esD protective bag for shipment. once the sealed esD protective bag has been opened, all die should be stored in a dry nitrogen environment.

Cleanliness: Handle the chips in a clean environment. Do noT attempt to clean the chip using liquid cleaning systems.

Static  Sensitivity: follow  esD  precautions  to  protect  against  esD strikes.

Transients: suppress instrument and bias supply transients while bias is applied. Use shielded signal and bias cables to minimize inductive pickup.

<!-- image -->

<!-- image -->

General Handling: Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip may have fragile air bridges and should not be touched with vacuum collet, tweezers, or fingers.

## Mounting

The chip is back-metallized and can be die mounted with ausn eutectic preforms or with electrically conductive epoxy. The mounting surface should be clean and flat.

eutectic Die attach:  a 80/20 gold tin preform is recommended with a work surface temperature of 255 °C and a tool temperature of 265 °C.  when hot 90/10 nitrogen/hydrogen gas is applied, tool tip temperature should be 290 °C. Do noT expose the chip to a temperature greater than 320 °C for more than 20 seconds.  no more than 3 seconds of scrubbing should be required for attachment.

epoxy Die attach:  apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip once it is placed into position.  Cure epoxy per the manufacturer's schedule.

## Wire Bonding

rf bonds made with 0.003' x 0.0005' ribbon are recommended.  These bonds should be thermosonically bonded with a force of 40-60 grams.  DC bonds of 0.001' (0.025 mm) diameter, thermosonically bonded, are recommended. Ball bonds should be made with a force of 40-50 grams and wedge bonds at 18-22 grams.  all bonds should be made with a nominal stage temperature of 150 °C.  a minimum amount of ultrasonic energy should be applied to achieve reliable bonds.  all bonds should be as short as possible, less than 12 mils (0.31 mm).

v04.0823