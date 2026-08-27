<!-- lastmod 2019-06-26 -->
<!-- image -->

## Enhanced Product

## FEATURES

P1dB output power: 29 dBm typical Gain: 13 dB typical OIP3: 44 dBm typical 50 Ω matched input/output

32-lead, 5 mm × 5 mm LFCSP package: 25 mm 2

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard) Extended industrial temperature range (-55°C to +105°C) Controlled manufacturing baseline 1 assembly/test site 1 fabrication site Product change notification Qualification data available on request

## APPLICATIONS

Telecom infrastructure Microwave radio Very small aperture terminal (VSAT) Military and space Test instrumentation Fiber optics

## GENERAL DESCRIPTION

The HMC637ASCPZ-EP is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT), distributed power amplifier that operates between 0.1 GHz and 6 GHz. The amplifier provides 13 dB of gain, 44 dBm output third-order intercept (OIP3), and 29 dBm of output power at 1 dB gain compression (P1dB) while requiring 400 mA from a 12.0 V supply. Gain flatness is ±0.75 dB from 0.1 GHz to 6 GHz, making the HMC637ASCPZ-EP ideal for electronic warfare (EW), electronic counter-measure (ECM), radar and test

## GaAs, pHEMT, MMIC,

## 1 W Power Amplifier, 0.1 GHz to 6 GHz

[HMC637ASCPZ-EP](https://www.analog.com/HMC637ALP5?doc=HMC637ASCPZ-EP.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

equipment applications. The HMC637ASCPZ-EP amplifier radio frequency (RF) inputs/outputs (I/Os) are internally matched to 50 Ω, and the 5 mm × 5 mm lead frame chip scale package (LFCSP) is compatible with high volume surface-mount technology (SMT) assembly equipment.

Additional application and technical information can be found in the HMC637ALP5E data sheet.

## [HMC637ASCPZ-EP](https://www.analog.com/HMC637ALP5?doc=HMC637ASCPZ-EP.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................ 1                    |
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Electrical Specifications............................................................... 3                  |
| Absolute Maximum Ratings............................................................ 4                      |

## REVISION HISTORY

6/2019-Revision 0: Initial Version

## Enhanced Product

| Thermal Resistance.......................................................................4      |
|-------------------------------------------------------------------------------------------------|
| Power Derating Curves.................................................................4         |
| ESD Caution...................................................................................4 |
| Pin Configuration and Function Descriptions..............................5                      |
| Interface Schematics .....................................................................6     |
| Typical Performance Characteristics ..............................................7             |
| Outline Dimensions..........................................................................9   |
| Ordering Guide .............................................................................9   |

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

TA = 25°C, VDD = 12 V, VGG2 = 5 V, supply current (IDD) = 400 mA (adjust VGG1 between -2 V to 0 V to achieve IDD = 400 mA typical), 50 Ω system, unless otherwise noted.

Table 1.

| Parameter                       | Symbol   | Test Conditions/Comments                             |   Min | Typ   |   Max | Unit   |
|---------------------------------|----------|------------------------------------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE                 |          |                                                      |   0.1 |       |     6 | GHz    |
| GAIN                            |          |                                                      |    12 | 13    |       | dB     |
| Gain Flatness                   |          |                                                      |       | ±0.75 |       | dB     |
| Gain Variation Over Temperature |          |                                                      |       | 0.015 |       | dB/°C  |
| RETURN LOSS                     |          |                                                      |       |       |       |        |
| Input                           |          |                                                      |       | 12    |       | dB     |
| Output                          |          |                                                      |       | 15    |       | dB     |
| OUTPUT                          |          |                                                      |       |       |       |        |
| OutputPower for 1dBCompression  | P1dB     |                                                      |    27 | 29    |       | dBm    |
| Saturated Output Power          | P SAT    |                                                      |       | 31    |       | dBm    |
| Output Third-Order Intercept    | OIP3     | Output power (P OUT ) per tone = 10 dBm, 1MHzspacing |       | 44    |       | dBm    |
| NOISE FIGURE                    |          |                                                      |       | 12    |       | dB     |
|                                 |          | 2.0 GHz to 6.0 GHz                                   |       | 5     |       | dB     |
| SUPPLY CURRENT                  | I DD     |                                                      |   320 | 400   |   480 | mA     |
| Drain Bias Voltage 1            | V DD     | I DD =400mA                                          |       | 11.5  |       | V      |
|                                 |          |                                                      |       | 12.0  |       | V      |
|                                 |          |                                                      |       | 12.5  |       | V      |

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                                        | Rating                |
|------------------------------------------------------------------|-----------------------|
| V DD                                                             | 14V DC                |
| V GG1                                                            | -3V DC to 0V DC       |
| V GG2                                                            | 4V DC to 7V DC        |
| RF Input Power (RFIN),V DD = 12V DC                              | 25dBm                 |
| Channel Temperature                                              | 175°C                 |
| Continuous Power Dissipation, P DISS                             | See Figure 2          |
| Case Temperature (T CASE ) = 85°C                                | 8.6W                  |
| T CASE = 105°C                                                   | 6.7W                  |
| Maximum Peak Reflow Temperature                                  | 260°C (MSL3 1 Rating) |
| Storage Temperature Range                                        | -65°C to +150°C       |
| Operating Temperature Range                                      | -55°C to +105°C       |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM) | Class 1B              |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JC 1 | Unit   |
|---------------|----------|--------|
| CP-32-29      |     10.5 | °C/W   |

- 1  Thermal impedance simulated values are based on a JEDEC 1S0P thermal test board. See JEDEC JESD-51.

## POWER DERATING CURVES

Figure 2 shows the maximum power dissipation vs. case temperature.

Figure 2. Maximum Power Dissipation vs. Case Temperature

<!-- image -->

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. NIC = NO INTERNAL CONNECTION. THESE PINS MAY BE CONNECTED TO RF GROUND. PERFORMANCE IS NOT AFFECTED.

2. EXPOSED PAD. THE EXPOSED PAD MUST BE CONNECTED TO RF AND DC GROUND.

Figure 3. Pin Configuration

| Pin No.                                       | Mnemonic   | Description 1                                                                                                                                                                                                                                                                                           |
|-----------------------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 6 to 11, 14, 17 to 20, 23 to 28, 31, 32 | NIC        | No Internal Connection. These pins may be connected to RF ground. Performance is not affected.                                                                                                                                                                                                          |
| 2                                             | V GG2      | Gate Bias Voltage Control 2 for Amplifier.Apply 5V toV GG2 for nominal operation. Attach a bypass capacitor per the application circuit shown the Application Information section of the HMC637ALP5E data sheet.                                                                                        |
| 4, 12, 22                                     | GND        | Ground. Connect Pin 4, Pin 12, and Pin 22 to RF and dc ground.                                                                                                                                                                                                                                          |
| 5                                             | RFIN       | RF Input. This pad is dc-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                   |
| 13                                            | V GG1      | Gate Bias Voltage Control 1 for Amplifier. Attach a bypass capacitor per the application circuit shown in theApplication Information section of the HMC637ALP5E data sheet. Follow the power-up and power-down sequences outlined in the Application Information section of the HMC637ALP5E data sheet. |
| 15                                            | ACG4       | Low Frequency Termination 4. Attach a bypass capacitor per the application circuit shown in the Application Information section of the HMC637ALP5E data sheet.                                                                                                                                          |
| 16                                            | ACG3       | Low Frequency Termination 3. Attach a bypass capacitor per the application circuit shown in the Application Information section of the HMC637ALP5E data sheet.                                                                                                                                          |
| 21                                            | RFOUT/V DD | RF Output/Drain Bias Voltage for Amplifier. Connect the dc bias (V DD ) network to provide I DD . See the application circuit shown in the Application Information section of the HMC637ALP5E data sheet.                                                                                               |
| 29                                            | ACG2       | Low Frequency Termination 2. Attach a bypass capacitor per the application circuit shown in the Application Information section of the HMC637ALP5E data sheet.                                                                                                                                          |
| 30                                            | ACG1       | Low Frequency Termination 1. Attach a bypass capacitor per the application circuit shown in the Application Information section of the HMC637ALP5E data sheet.                                                                                                                                          |
|                                               | EPAD       | Exposed Pad. The exposed pad must be connected to RF and dc ground.                                                                                                                                                                                                                                     |

## Table 4. Pin Function Descriptions

1 See the Interface Schematics section for pin interfaces.

20371-003

## [HMC637ASCPZ-EP](https://www.analog.com/HMC637ALP5?doc=HMC637ASCPZ-EP.pdf)

## INTERFACE SCHEMATICS

<!-- image -->

Figure 4. VGG2 Interface Schematic

<!-- image -->

Figure 5. ACG1, ACG2, and RFOUT/VDD Interface Schematic

<!-- image -->

Figure 6. RFIN Interface Schematic

<!-- image -->

Figure 7. RFIN, ACG4, and ACG3 Interface Schematic

Figure 8. VGG1 Interface Schematic

<!-- image -->

Figure 9. GND Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Input Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 11. Reverse Isolation vs. Frequency at Various Temperatures

<!-- image -->

Figure 12. Gain vs. Frequency at Various Temperatures

<!-- image -->

Figure 13. Output Return Loss vs. Frequency at Various Temperatures

Figure 14. Noise Figure vs. Frequency at Various Temperatures

<!-- image -->

Figure 15. P1dB vs. Frequency at Various Temperatures

<!-- image -->

## [HMC637ASCPZ-EP](https://www.analog.com/HMC637ALP5?doc=HMC637ASCPZ-EP.pdf)

Figure 16. Output IP3 vs. Frequency at Various Temperatures

<!-- image -->

Figure 17. PSAT vs. Frequency at Various Temperatures

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

0.203 REF

COMPLIANT TOJEDEC STANDARDS MO-220-WHHD-4

Figure 18. 32-Lead Lead Frame Chip Scale Package [LFCSP] 5 mm × 5 mm and 0.75 mm Package Height (CP-32-29) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1           | Temperature Range   | MSLRating 2   | Package Description                           | Package Option   |
|-------------------|---------------------|---------------|-----------------------------------------------|------------------|
| HMC637ASCPZ-EP-PT | -55°C to +105°C     | MSL3          | 32-Lead Lead Frame Chip Scale Package [LFCSP] | CP-32-29         |
| HMC637ASCPZ-EP-R7 | -55°C to +105°C     | MSL3          | 32-Lead Lead Frame Chip Scale Package [LFCSP] | CP-32-29         |

<!-- image -->

PKG-005168

09-12-2018-A