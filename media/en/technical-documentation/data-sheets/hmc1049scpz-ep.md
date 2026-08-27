<!-- lastmod 2019-02-05 -->
<!-- image -->

## Enhanced Product

## FEATURES

Low noise figure: 2 dB

P1dB output power: 15 dBm PSAT output power: 17 dBm High gain: 14 dB Output IP3: 23 dBm Supply voltage: VDD = 7 V at 70 mA 50 Ω matched I/O

32-lead, 5 mm × 5 mm LFCSP package: 25 mm 2

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard)

Extended industrial temperature range: -55°C to +105°C Controlled manufacturing baseline 1 assembly/test site 1 fabrication site Product change notification Qualification data available on request

## APPLICATIONS

Radars

Military communications Very small aperture terminals (VSATs) and satellite communications (SATCOM) Unmanned systems

## GENERAL DESCRIPTION

The HMC1049SCPZ-EP is a Gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), low noise amplifier (LNA) that operates between 0.3 GHz and 20 GHz. This LNA provides 14 dB of small signal gain, 2 dB noise figure, and an IP3 output of 23 dBm, yet requires only 70 mA from a 7 V supply. The P1dB output power of 15 dBm enables the LNA to function as a local oscillator (LO) driver for balanced, inphase/quadrature (I/Q), or image rejection mixers. VDD can

## GaAs, pHEMT, MMIC, Low Noise Amplifier, 0.3 GHz to 20 GHz

[HMC1049SCPZ-EP](http://www.analog.com/HMC1049LP5E?doc=HMC1049SCPZ-EP.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

also be applied to Pin 21, although Pin 21 requires a bias tee with VDD = 4 V. The HMC1049SCPZ-EP amplifier input/outputs (I/Os) are internally matched to 50 Ω, and the device is supplied in a compact, leadless 5 mm × 5 mm LFCSP package.

Additional application and technical information can be found in the HMC1049LP5E data sheet.

## [HMC1049SCPZ-EP](http://www.analog.com/HMC1049LP5E?doc=HMC1049SCPZ-EP.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................ 1                    |
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| 0.3 GHz to 1 GHz Frequency Range.......................................... 3                                |
| 1 GHz to 14 GHz Frequency Range........................................... 3                                |
| 14 GHz to 20 GHz Frequency Range......................................... 4                                 |
| Absolute Maximum Ratings ....................................................... 5                          |

## REVISION HISTORY

1/2019-Revision 0: Initial Version

## Enhanced Product

| Thermal Resistance.......................................................................5      |
|-------------------------------------------------------------------------------------------------|
| Power Derating Curves.................................................................5         |
| ESD Caution...................................................................................5 |
| Pin Configuration and Function Descriptions..............................6                      |
| Interface Schematics .....................................................................7     |
| Typical Performance Characteristics ..............................................8             |
| Packaging and Ordering Information ......................................... 10                 |
| Outline Dimensions................................................................... 10        |
| Ordering Guide .......................................................................... 10    |

## SPECIFICATIONS 0.3 GHZ TO 1 GHZ FREQUENCY RANGE

TA = 25°C, VDD = 7 V, IDD = 70 mA, 50 Ω system.

## Table 1.

| Parameter 1                              |   Min |   Typ |   Max | Unit   |
|------------------------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE                          |   0.3 |       |     1 | GHz    |
| GAIN                                     |  13.5 |    16 |       | dB     |
| Gain Variation over Temperature          |       | 0.006 |       | dB/°C  |
| NOISE FIGURE                             |       |   2.5 |   3.5 | dB     |
| RETURN LOSS                              |       |       |       |        |
| Input                                    |       |    15 |       | dB     |
| Output                                   |       |     8 |       | dB     |
| OUTPUT                                   |       |       |       |        |
| Output Power for 1 dB Compression (P1dB) |       |    16 |       | dBm    |
| Saturated (P SAT )                       |       |    18 |       | dBm    |
| Output Third-Order Intercept (IP3) 2     |       |    25 |       | dBm    |
| TOTAL SUPPLY CURRENT                     |       |    70 |       | mA     |

1 Adjust VGG between -2 V and 0 V to achieve IDD = 70 mA typical.

2  Measurement taken at output power (POUT) per tone = 8 dBm.

## 1 GHZ TO 14 GHZ FREQUENCY RANGE

TA = 25°C, VDD = 7 V, IDD = 70 mA, 50 Ω system.

## Table 2.

| Parameter 1                              |   Typ |   Max | Unit   |
|------------------------------------------|-------|-------|--------|
| FREQUENCY RANGE                          |       |    14 | GHz    |
| GAIN                                     |    14 |       | dB     |
| Gain Variation over Temperature          | 0.019 |       | dB/°C  |
| NOISE FIGURE                             |     2 |     3 | dB     |
| RETURN LOSS                              |       |       |        |
| Input                                    |    13 |       | dB     |
| Output                                   |    15 |       | dB     |
| OUTPUT                                   |       |       |        |
| Output Power for 1 dB Compression (P1dB) |    15 |       | dBm    |
| Saturated (P SAT )                       |    17 |       | dBm    |
| Output Third-Order Intercept (IP3) 2     |    23 |       | dBm    |
| TOTAL SUPPLY CURRENT                     |    70 |       | mA     |

1 Adjust VGG between -2 V and 0 V to achieve IDD = 70 mA typical.

2  Measurement taken at POUT per tone = 8 dBm.

## 14 GHZ TO 20 GHZ FREQUENCY RANGE

TA = 25°C, VDD = 7 V, IDD = 70 mA, 50 Ω system.

## Table 3.

| Parameter 1                              |   Typ |   Max | Unit   |
|------------------------------------------|-------|-------|--------|
| FREQUENCY RANGE                          |       |    20 | GHz    |
| GAIN                                     |    12 |       | dB     |
| Gain Variation over Temperature          | 0.017 |       | dB/°C  |
| NOISE FIGURE                             |   3.0 |   4.5 | dB     |
| RETURN LOSS                              |       |       |        |
| Input                                    |    14 |       | dB     |
| Output                                   |    13 |       | dB     |
| OUTPUT                                   |       |       |        |
| Output Power for 1 dB Compression (P1dB) |    13 |       | dBm    |
| Saturated (P SAT )                       |    15 |       | dBm    |
| Output Third-Order Intercept (IP3) 2     |    18 |       | dBm    |
| TOTAL SUPPLY CURRENT                     |    70 |       | mA     |

## Table 4. Typical Supply Current vs. VDD

| Parameter              | Test Conditions/Comments   | Min   |   Typ | Max   | Unit   |
|------------------------|----------------------------|-------|-------|-------|--------|
| Supply Current, I DD 1 | V DD =5V                   |       |    70 |       | mA     |
|                        | V DD =6V                   |       |    70 |       | mA     |
|                        | V DD =7V                   |       |    70 |       | mA     |

## ABSOLUTE MAXIMUM RATINGS

## Table 5.

| Parameter                               | Rating          |
|-----------------------------------------|-----------------|
| Drain Bias Voltage (V DD )              | 10V             |
| Drain Bias Voltage (RFOUT/V DD )        | 7V              |
| RF Input Power                          | 18dBm           |
| Gate Bias Voltage (V GG )               | -2V to +0.2V    |
| Junction Temperature (T J )             | 175°C           |
| Continuous Power Dissipation, P DISS 1  |                 |
| T CASE =85°C                            | 3.34W           |
| T CASE =105°C                           | 2.60W           |
| Peak Reflow Temperature                 | 260°C           |
| Temperature                             |                 |
| Storage Temperature                     | -65°C to +150°C |
| Operating Temperature                   | -55°C to +105°C |
| ESD Sensitivity, Human Body Model (HBM) | Class 1A        |

1  For maximum power dissipation vs. case temperature, see Figure 2.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θJC is the junction to case thermal resistance.

## Table 6. Thermal Resistance

| PackageType   |   θ JA 1 |   θ JC 2 | Unit   |
|---------------|----------|----------|--------|
| CP-32-29      |     61.1 |      8.9 | °C/W   |

1  Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board. See JEDEC JESD51.

2  Thermal impedance simulated values are based on a JEDEC 1S0P thermal test board. See JEDEC JESD51.

## POWER DERATING CURVES

Figure 2 shows the maximum power dissipation vs. case temperature.

Figure 2. Maximum Power Dissipation vs. Case Temperature

<!-- image -->

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration Diagram

<!-- image -->

Table 7. Pin Function Descriptions

| Pin No.                                     | Mnemonic   | Description 1                                                                                                                                                                                                                    |
|---------------------------------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 6to 12, 14, 17 to 20, 23to 29, 31, 32 | NIC        | Not Internally Connected. These pins are not connected internally. However, all data was measured with these pins connected to RF and dc ground externally (see the Typical Performance Characteristics section for data plots). |
| 2                                           | V DD       | Power Supply Voltage for the Amplifier. External bypass capacitors (100 pF and 0.01 μF) are required.                                                                                                                            |
| 4, 22                                       | GND        | Ground. Connect Pin 4 and Pin 22 to RF and dc ground.                                                                                                                                                                            |
| 5                                           | RFIN       | RF Input. This pin is dc-coupled and matched to 50 Ω.                                                                                                                                                                            |
| 13                                          | V GG       | Gate Control for Amplifier. Adjust the voltage to achieve I DD = 70 mA. External bypass capacitors of 100 pF, 0.01 μF, and 4.7μF are required.                                                                                   |
| 15, 16                                      | ACG2, ACG3 | LowFrequencyTermination. External bypass capacitors of 100 pF are required.                                                                                                                                                      |
| 21                                          | RFOUT/V DD | RF Output/Alternate Power Supply Voltage for the Amplifier. An external bias tee is required when used as alternativeV DD . This pin is dc-coupled and matched to 50 Ω.                                                          |
| 30                                          | ACG1 EP    | Low Frequency Termination. An external bypass capacitor of 100 pF is required. Exposed Pad. The exposed ground paddle must be connected to RF and dc ground.                                                                     |

1 See the Interface Schematics section for pin interfaces.

## INTERFACE SCHEMATICS

Figure 6. RFIN Interface

<!-- image -->

<!-- image -->

<!-- image -->

Figure 7. VGG Interface

<!-- image -->

## [HMC1049SCPZ-EP](http://www.analog.com/HMC1049LP5E?doc=HMC1049SCPZ-EP.pdf)

<!-- image -->

Figure 8. ACG2 and ACG3 Interface

<!-- image -->

17190-011

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Data taken with VDD applied to Pin 2, VDD = 7 V.

<!-- image -->

Figure 11. Gain vs. Frequency at Various Temperatures

<!-- image -->

Figure 12. Input Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 13. Output Return Loss vs. Frequency, at Various Temperatures

<!-- image -->

Figure 14. Noise Figure vs. Frequency at Various Temperatures

Figure 15. Noise Figure vs. Frequency at Various Temperatures, Low Frequency

<!-- image -->

Figure 16. Output IP3 vs. Frequency at Various Temperatures

<!-- image -->

## Enhanced Product

Figure 17. P1dB vs. Frequency at Various Temperatures

<!-- image -->

Figure 18. PSAT vs. Frequency at Various Temperatures

<!-- image -->

## [HMC1049SCPZ-EP](http://www.analog.com/HMC1049LP5E?doc=HMC1049SCPZ-EP.pdf)

Figure 19. Reverse Isolation vs. Frequency at Various Temperatures

<!-- image -->

## PACKAGING AND ORDERING INFORMATION OUTLINE DIMENSIONS

<!-- image -->

0.203 REF

COMPLIANT TOJEDEC STANDARDS MO-220-WHHD-4

Figure 20. 32-Lead Lead Frame Chip Scale Package [LFCSP] 5 mm × 5 mm and 0.75 mm Package Height

(CP-32-29)

Dimensions shown in millimeters

| Model 1           | Temperature Range   | Lead Finish                     | Package Description                        | Package Option   |
|-------------------|---------------------|---------------------------------|--------------------------------------------|------------------|
| HMC1049SCPZ-EP-R7 | -55°C to +105°C     | N ickel/palladium/gold (NiPdAu) | 32-Lead LeadFrameChipScale Package [LFCSP] | CP-32-29         |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

PKG-005168

<!-- image -->

10-27-2016-A