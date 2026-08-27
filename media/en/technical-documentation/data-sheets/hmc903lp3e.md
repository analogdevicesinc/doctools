<!-- lastmod 2020-03-17 -->
<!-- image -->

## Data Sheet

## FEATURES

Low noise figure: 1.7 dB typical at 6 GHz to 16 GHz High gain: 18.5 dB typical at 6 GHz to 16 GHz Output power for 1 dB compression (P1dB): 14.5 dBm typical at 6 GHz to 16 GHz Single-supply voltage: 3.5 V at 80 mA typical Output third-order intercept (IP3): 25 dBm typical 50 Ω matched input/output Self biased with optional bias control for I DQ reduction 16-lead, 3 mm × 3 mm, LFCSP package

## APPLICATIONS

Point to point radios Point to multipoint radios Military and space Test instrumentation

## GENERAL DESCRIPTION

The HMC903LP3E is a self biased, gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic (pHEMT), low noise amplifier (LNA) with an option bias control for I DQ reduction. It is housed in a 16-lead, 3 mm × 3 mm, LFCSP package. The HMC903LP3E amplifier operates from 6 GHz to 17 GHz, providing 18.5 dB of small signal gain and 1.7 dB noise figure in the 6 GHz to 16 GHz band, and an output IP3 of 25 dBm full band 6 GHz to 17 GHz, while requiring only 80 mA from a 3.5 V supply.

## GaAs, pHEMT, MMIC, Low Noise Amplifier, 6 GHz to 17 GHz

[HMC903LP3E](http://www.analog.com/HMC903LP3E?doc=HMC903LP3E.pdf)

<!-- image -->

The P1dB output power of 14.5 dBm enables the LNA to function as a local oscillator (LO) driver for balanced, I/Q or image reject mixers. The HMC903LP3E also features an input and an output that are dc blocked and internally matched to 50 Ω, making it ideal for high capacity microwave radios and video satellite (VSAT) applications.

## HMC903LP3E

## TABLE OF CONTENTS

Features .............................................................................................. 1

Applications  ....................................................................................... 1

Functional Block Diagram .............................................................. 1

General Description ......................................................................... 1

Revision History ............................................................................... 2

Specifications  ..................................................................................... 3

6 GHz to 16 GHz Frequency Range  ........................................... 3

16 GHz to 17 GHz Frequency Range  ......................................... 3

Absolute Maximum Ratings  ............................................................ 4

Thermal Resistance ...................................................................... 4

ESD Caution  .................................................................................. 4

## REVISION HISTORY

2/2020-Rev. H to Rev. I

Change to Channel Temperature Parameter, Table 3 .................. 4

2/2018-Rev. G to Rev. H

Changes to Table 3  ............................................................................ 4

Moved Figure 19 ............................................................................... 8

Changes to Ordering Guide .......................................................... 13

7/2017-Rev. F to Rev. G

Changed HMC903 to HMC903LP3E ......................... Throughout

Changes to Figure 1  .......................................................................... 1

Changes to RF Input Parameter, Table 3 ....................................... 4

| Pin Configuration and Function Descriptions..............................5                                                                                                                                                                                         |                                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| Interface Schematics .....................................................................5                                                                                                                                                                        |                                                 |
| Typical Performance Characteristics                                                                                                                                                                                                                                | ..............................................6 |
| Theory of Operation .........................................................................9                                                                                                                                                                     |                                                 |
| Applications Information..............................................................                                                                                                                                                                             | 10                                              |
| Recommended Bias Sequence During Power Up..................                                                                                                                                                                                                        | 10                                              |
| Recommended Bias Sequence During Power Down............                                                                                                                                                                                                            | 10                                              |
| Evaluation PCB...........................................................................                                                                                                                                                                          | 11                                              |
| Typical Application Circuits .....................................................                                                                                                                                                                                 | 12                                              |
| Outline Dimensions.......................................................................                                                                                                                                                                          | 13                                              |
| Ordering Guide ..........................................................................                                                                                                                                                                          | 13                                              |
| This Hittite Microwave product data sheet has been reformatted to the styles and standards of Analog Devices, Inc.                                                                                                                                                 |                                                 |
| Updated Format..................................................................Universal Changes to Features Section, Figure 1, and General Description Section.................................................................................................1 |                                                 |
| Add Thermal Resistance Section and Table 5; Renumbered Sequentially ........................................................................................4                                                                                                      |                                                 |
| Changes to Figure 2 and Table 5......................................................5                                                                                                                                                                             |                                                 |
| Added Theory of Operation Section ..............................................9                                                                                                                                                                                  |                                                 |
| Added Applications Information Section ...................................                                                                                                                                                                                         | 10                                              |
| Updated Outline Dimensions.......................................................                                                                                                                                                                                  | 13                                              |
| Added Ordering Guide..................................................................                                                                                                                                                                             | 13                                              |

## SPECIFICATIONS

TA = 25°C, V DD1 = V DD2 = 3.5 V , I DQ = 80 mA (V GG1 = V GG2 = open for normal, self biased operation), unless otherwise noted.

## 6 GHz TO 16 GHz FREQUENCY RANGE

Table 1.

| Parameter                         |   Min |   Typ |   Max | Unit   |
|-----------------------------------|-------|-------|-------|--------|
| GAIN                              |  16.5 |  18.5 |       | dB     |
| Gain Variation over Temperature   |       | 0.012 |       | dB/°C  |
| NOISE FIGURE 1                    |       |   1.7 |   2.2 | dB     |
| RETURN LOSS                       |       |       |       |        |
| Input                             |       |    12 |       | dB     |
| Output                            |       |    12 |       | dB     |
| OUTPUT POWER                      |       |       |       |        |
| For 1 dB Compression (P1dB) 1     |    13 |  14.5 |       | dBm    |
| Saturated (P SAT ) 1              |       |  16.5 |       | dBm    |
| OUTPUTTHIRD-ORDER INTERCEPT (IP3) |    22 |    25 |       | dBm    |
| SUPPLY CURRENT (I DQ )            |       |    80 |   110 | mA     |

1 Board loss removed from gain, power, and noise figure measurements.

## 16 GHz TO 17 GHz FREQUENCY RANGE

Table 2.

| Parameter                         |   Min |   Typ |   Max | Unit   |
|-----------------------------------|-------|-------|-------|--------|
| GAIN                              |    15 |    18 |       | dB     |
| Gain Variation over Temperature   |       | 0.012 |       | dB/°C  |
| NOISE FIGURE 1                    |       |   2.2 |   2.5 | dB     |
| RETURN LOSS                       |       |       |       |        |
| Input                             |       |    11 |       | dB     |
| Output                            |       |    14 |       | dB     |
| OUTPUT POWER                      |       |       |       |        |
| For 1 dB Compression (P1dB) 1     |    12 |    13 |       | dBm    |
| Saturated (P SAT ) 1              |       |  16.5 |       | dBm    |
| OUTPUTTHIRD-ORDER INTERCEPT (IP3) |    22 |    25 |       | dBm    |
| SUPPLY CURRENT (I DQ )            |       |    80 |   110 | mA     |

1 Board loss removed from gain, power, and noise figure measurements.

## ABSOLUTE MAXIMUM RATINGS

## Table 3.

| Parameter                                                                      | Rating               |
|--------------------------------------------------------------------------------|----------------------|
| Drain Bias Voltage                                                             | 4.5V                 |
| RF Input Power                                                                 | 20dBm                |
| Gate Bias Voltage                                                              |                      |
| V GG1                                                                          | -2V to +0.2V         |
| V GG2                                                                          | -2V to +0.2V         |
| Continuous Power Dissipation, P DISS (T A = 85°C, Derate 6.9 mW/°C Above 85°C) | 0.45W                |
| Channel Temperature                                                            | 175°C                |
| Maximum Peak Reflow Temperature                                                | 260°C                |
| Storage Temperature                                                            | -65°C to +85°C       |
| Operating Temperature                                                          | -40°C to +85°C       |
| ESD Sensitivity (Human Body Model)                                             | Class 0, Passed 150V |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

## Table 4. Thermal Resistance

| PackageType 1   |   θ JC | Unit   |
|-----------------|--------|--------|
| HCP-16-1        |  144.8 | °C/W   |

1 Thermal impedance simulated values are based on JEDEC 2s2p thermal test board. See JEDEC JESD51.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. NIC = NOT INTERNALLY CONNECTED.

2. EXPOSED PAD. THE PACKAGE BOTTOM HAS

AN EXPOSED METAL GROUND PADDLE

THAT MUST CONNECT TO RF/DC GROUND.

Figure 2. Pin Configuration

Table 5. Pin Function Descriptions

| Pin No.                   | Mnemonic     | Description                                                                                                                                                                                                                                                        |
|---------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 5, 8, 9, 12, 13, 16 | NIC          | Not Internally Connected. However, all data shown was measured with these pins connected to RF/dc ground externally.                                                                                                                                               |
| 2, 11                     | GND          | Ground. Connect these pins to RF/dc ground. See Figure 3 for the interface schematic.                                                                                                                                                                              |
| 3                         | RFIN         | RF Input. This pin is ac-coupled and matched to 50 Ω. See Figure 4 for the interface schematic.                                                                                                                                                                    |
| 6, 7                      | V GG1 ,V GG2 | Optional Gate Controls for the Amplifier. If left open, the amplifier runs self biased at the standard current. Applying a negative voltage reduces the drain current. External capacitors are required (see Figure 24). See Figure 5 for the interface schematic. |
| 10                        | RFOUT        | RF Output. This pin is ac-coupled and matched to 50 Ω. See Figure 6 for the interface schematic.                                                                                                                                                                   |
| 14, 15                    | V DD1 ,V DD2 | Power Supply Voltages for the Amplifier. See assembly for the required external components (see Figure 23 and Figure 24). See Figure 7 for the interface schematic.                                                                                                |
|                           | EPAD         | Exposed Pad. The package bottom has an exposed metal ground paddle that must connect to RF/dc ground.                                                                                                                                                              |

## INTERFACE SCHEMATICS

<!-- image -->

14479-004

Figure 4. RFIN Interface Schematic

<!-- image -->

Figure 5. V GG1 and V GG2 Interface Schematic

<!-- image -->

GND

14479-002

<!-- image -->

14479-007

Figure 7. V DD1 and V DD2 Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. Broadband Gain and Return Loss (Board Loss Removed from Gain, Power, and Noise Figure Measurements) vs. Frequency

<!-- image -->

Figure 9. Input Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 10. Noise Figure vs. Frequency for Various Temperatures (Board Loss Removed from Gain, Power, and Noise Figure Measurements)

<!-- image -->

Figure 11. Gain vs. Frequency for Various Temperatures (Board Loss Removed from Gain, Power, and Noise Figure Measurements)

Figure 12. Output Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 13. Output Third-Order Intercept (IP3) vs. Frequency for Various Temperatures

<!-- image -->

<!-- image -->

Figure 14. Output Power for 1 dB Compression (P1dB) vs. Frequency for Various Temperatures (Board Loss Removed from Gain, Power, and Noise Figure Measurements)

<!-- image -->

Figure 15. Reverse Isolation vs. Frequency for Various Temperatures

<!-- image -->

Figure 16. Gain, Output Power for 1 dB Compression (P1dB), and Noise Figure vs. Supply Voltage (V DD ) at 12 GHz (Board Loss Removed from Gain, Power, and Noise Figure Measurements)

Figure 17. Saturated Output Power (P SAT ) vs. Frequency for Various Temperatures (Board Loss Removed from Gain, Power, and Noise Figure Measurements)

<!-- image -->

Figure 18. Output Power (P OUT ), Gain, and Power Added Efficiency (PAE) vs. Input Power (Board Loss Removed from Gain, Power, and Noise Figure Measurements)

<!-- image -->

Figure 19. Supply Current (I DD ) vs. Input Power (Board Loss Removed from Gain Measurement and Data Taken at V DD1 = V DD2 = 3 V)

<!-- image -->

Figure 20. Gain, Output Third-Order Intercept (IP3), and Supply Current (I DD ) vs. VGG1 , V GG2 Gate Voltage

<!-- image -->

## THEORY OF OPERATION

The HMC903LP3E is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic (pHEMT), low noise amplifier. The HMC903LP3E amplifier uses two gain stages in series, and the basic schematic of the amplifier is shown in Figure 21, which forms a low noise amplifier operating from 6 GHz to 17 GHz with excellent noise figure performance.

Figure 21. Basic Schematic of the Amplifier

<!-- image -->

The HMC903LP3E has single-ended input and output ports whose impedances are nominally equal to 50 Ω over the 6 GHz to 17 GHz frequency range. Consequently, it can directly insert into a 50 Ω system with no required impedance matching circuitry, which also means that multiple HMC903LP3E amplifiers can be cascaded back to back without the need for external matching circuitry.

The input and output impedances are sufficiently stable vs. variations in temperature and supply voltage that no impedance matching compensation is required.

Note that it is critical to supply very low inductance ground connections to the GND pins and to the package base exposed pad to ensure stable operation. To achieve optimal performance from the HMC903LP3E and to prevent damage to the device, do not exceed the absolute maximum ratings.

## APPLICATIONS INFORMATION

Figure 22 shows the basic connections for operating the HMC903LP3E. Both the RFIN and RFOUT ports have on-chip dc block capacitors that eliminate the need for external ac coupling capacitors.

The HMC903LP3E has VGG1 and V GG2 optional gate bias pins. When these pins are left open, the amplifier runs in self biased operation with a typical I DQ = 80 mA, when V DD1 /VDD2 = 3.5 V . When using the V GG1 and V GG2 gate bias pins, follow the recommended bias sequencing so that the amplifier is not damaged.

## RECOMMENDED BIAS SEQUENCE DURING POWER UP

The recommended bias sequence to power up the HMC903LP3E is as follows:

1. Connect to GND.
2. Set V GG1 and V GG2 to -2 V .
3. Set V DD1 and V DD2 to 3.5 V .
4. Increase V GG1 and V GG2 to achieve a typical I DQ = 80 mA.
5. Apply the RF signal.

## RECOMMENDED BIAS SEQUENCE DURING POWER DOWN

The recommended bias sequence to power down the HMC903LP3E is as follows:

1. Turn off the RF signal.
2. Decrease V GG1 and V GG2 to -2 V to achieve a typical I DQ = 0 mA.
3. Decrease V DD1 and V DD2 to 0 V .
4. Increase V GG1 and V GG2 to 0 V .

Unless otherwise noted, all measurements and data shown were taken using the typical application circuit (see Figure 23), with the evaluation board (see Figure 22) and biased per the conditions in this section. The V DD1 and V DD2 pins are connected together; similarly, the V GG1 and V GG2 pins are also connected together. The bias conditions shown in this section are the operating points recommended to optimize the overall performance. Operation using other bias conditions may provide performance that differs from what is shown in this data sheet.

Decreasing the V DD1 and V DD2 levels has negligible effect on the gain and noise figure performance; however, they reduce the P1dB. This behavior is shown in Figure 8 to Figure 20. For applications where the P1dB requirement is not stringent, the HMC903LP3E can be down biased to reduce power consumption.

## EVALUATION PCB

The circuit board used in this application must use RF circuit design techniques. Signal lines must have 50 Ω impedance, and the package ground leads and exposed paddle must be connected directly to the ground plane similar to that shown in Figure 22.

Use a sufficient number of via holes to connect the top and bottom ground planes. Mount the evaluation PCB to an appropriate heat sink. The evaluation PCB shown is available from Analog Devices, Inc., upon request.

Figure 22. Evaluation PCB (128395-1)

<!-- image -->

## Table 6. List of Materials for the Evaluation PCB

| Component        | Description                                                                |
|------------------|----------------------------------------------------------------------------|
| J1, J2           | SMA connectors                                                             |
| J3, J4, J6 to J8 | DC pins                                                                    |
| C1, C4, C7, C10  | 100 pF capacitors, 0402 package                                            |
| C2, C5, C8, C11  | 0.01 µF capacitors, 0402 package                                           |
| C3, C6, C9, C12  | 4.7 µF tantalum capacitors                                                 |
| U1               | HMC903LP3E amplifier                                                       |
| PCB              | 128395-1 evaluation PCB; circuit board material: Rogers 4350 or Arlon 25FR |

## TYPICAL APPLICATION CIRCUITS

Figure 23. Standard (Self Biased) Operation Typical Application Circuit

<!-- image -->

Figure 24. Gate Control, Reduced Current Operation Typical Application Circuit

<!-- image -->

## OUTLINE DIMENSIONS

PKG-004863

<!-- image -->

COMPLIANT WITH JEDEC STANDARDS MO-220-VEED-4.

Figure 25. 16-Lead Lead Frame Chip Scale Package [LFCSP] 3 mm × 3 mm Body and 0.85 mm Package Height (HCP-16-1)

Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1                 | Temperature Range             | Lead Finish                 | Package Description         | Package Option    |
|-------------------------|-------------------------------|-----------------------------|-----------------------------|-------------------|
| HMC903LP3E HMC903LP3ETR | -40°C to +85°C -40°C to +85°C | 100% Matte Sn 100% Matte Sn | 16-Lead LFCSP 16-Lead LFCSP | HCP-16-1 HCP-16-1 |
| 129798-HMC903LP3E       |                               |                             | Evaluation Board            |                   |

<!-- image -->

02-19-2020-B