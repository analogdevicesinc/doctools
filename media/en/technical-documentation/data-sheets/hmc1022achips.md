<!-- lastmod 2019-03-27 -->
<!-- image -->

Data Sheet

## FEATURES

P1dB: 25 dBm (typical) at dc to 30 GHz frequency range PSAT: 26 dBm (typical) at dc to 30 GHz frequency range Gain: 11.5 dB (typical) Output IP3: 33 dBm (typical) at dc to 30 GHz frequency range Supply voltage: 10 V at 150 mA 50 Ω matched I/O Die size: 2.89 mm × 1.48 mm × 0.1 mm

## APPLICATIONS

Military and space Test instrumentation

## GENERAL DESCRIPTION

The HMC1022ACHIPS is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), distributed power amplifier that operates from dc to 48 GHz. The amplifier provides 11.5 dB of small signal gain, 0.25 W (25 dBm) output power at 1 dB gain compression (P1dB), and a typical output third-order intercept (IP3) of 33 dBm, while requiring 150 mA from a 10 V supply on the VDD pin. Gain flatness is excellent from dc to 48 GHz at ±0.5 dB typical, making the

## GaAs, pHEMT, MMIC, 0.25 W Power

## Amplifier, DC to 48 GHz

[HMC1022ACHIPS](https://www.analog.com/hmc1022achips?doc=hmc1022achips.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

HMC1022ACHIPS ideal for military, space, and test equipment applications. The HMC1022ACHIPS also features inputs/outputs (I/Os) that are internally matched to 50 Ω, facilitating integration into multichip modules (MCMs). All data is taken with the chip connected via 0.075 mm × 0.025 mm (3 mil × 1 mil) ribbon bonds with a minimal length of 0.31 mm (12 mils).

## [HMC1022ACHIPS](https://www.analog.com/hmc1022achips?doc=hmc1022achips.pdf)

## TABLE OF CONTENTS

| Features ..............................................................................................   |
|-----------------------------------------------------------------------------------------------------------|
| Applications.......................................................................................       |
| Functional Block Diagram ..............................................................                   |
| General Description.........................................................................              |
| Revision History ...............................................................................          |
| Electrical Specifications ...................................................................             |
| DC to 30 GHz Frequency Range................................................                              |
| 30 GHz to 40 GHz Frequency Range.........................................                                 |
| 40 GHz to 48 GHz Frequency Range.........................................                                 |
| Absolute Maximum Ratings............................................................                      |
| Thermal Resistance ......................................................................                 |

ESD Caution  .................................................................................. 5

## REVISION HISTORY

1/2019-Revision 0: Initial Version

| Pin Configuration and Function Descriptions..............................6                                                                                |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Interface Schematics .....................................................................6                                                               |
| Typical Performance Characteristics ..............................................7                                                                       |
| Theory of Operation ...................................................................... 13                                                             |
| Applications Information.............................................................. 14                                                                 |
| Biasing Procedures..................................................................... 14                                                                |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs......................................................................................... 15 |
| Outline Dimensions....................................................................... 17                                                              |
| Ordering Guide .......................................................................... 17                                                              |

## ELECTRICAL SPECIFICATIONS

## DC TO 30 GHz FREQUENCY RANGE

TA = 25°C, supply voltage (VDD) = 10 V , gate bias voltage (VGG2) = 4.0 V , and quiescent drain supply current (IDQ) = 150 mA for nominal operation, unless otherwise noted.

## Table 1.

| Parameter                                             | Symbol         | Min   | Typ             |   Max | Unit        | Test Conditions/Comments                                                       |
|-------------------------------------------------------|----------------|-------|-----------------|-------|-------------|--------------------------------------------------------------------------------|
| FREQUENCY RANGE                                       |                | DC    |                 |    30 | GHz         |                                                                                |
| GAIN Gain Flatness                                    |                |       | 11.5 ±0.5 0.015 |       | dB dB       |                                                                                |
| NOISE FIGURE                                          |                |       |                 |       | dB          |                                                                                |
| Gain Variation over Temperature                       |                |       |                 |       | dB/°C       |                                                                                |
|                                                       |                |       |                 |   4.5 |             |                                                                                |
| RETURN LOSS Input                                     |                |       | 16              |       | dB dB       |                                                                                |
| OUTPUT Output Power for 1 dB Compression Output Power | P1dB P SAT IP3 | 23    | 25 26           |       | dBm dBm dBm |                                                                                |
| Saturated Output Third-Order Intercept                |                |       | 33              |       |             | Measurement taken at output power (P OUT ) per                                 |
| Current                                               | I DQ           | 125   | 150             |       | mA          | Adjust the gate bias voltage (V GG1 ) between -2V up to 0V to achieve the I DQ |
| Voltage                                               | V DD           | 9     | 10              |       | V           |                                                                                |

## 30 GHz TO 40 GHz FREQUENCY RANGE

TA = 25°C, VDD = 10 V, VGG2 = 4.0 V, and IDQ = 150 mA for nominal operation, unless otherwise noted.

## Table 2.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                          |
|-----------------------------------|----------|-------|-------|-------|--------|---------------------------------------------------|
| FREQUENCY RANGE                   |          |    30 |       |    40 | GHz    |                                                   |
| GAIN                              |          |       | 11.5  |       | dB     |                                                   |
| Gain Flatness                     |          |       | ±0.5  |       | dB     |                                                   |
| Gain Variation over Temperature   |          |       | 0.019 |       | dB/°C  |                                                   |
| NOISE FIGURE                      |          |       |       |   5.5 | dB     |                                                   |
| RETURN LOSS                       |          |       |       |       |        |                                                   |
| Input                             |          |       | 22    |       | dB     |                                                   |
| Output                            |          |       | 12    |       | dB     |                                                   |
| OUTPUT                            |          |       |       |       |        |                                                   |
| Output Power for 1 dB Compression | P1dB     |    19 | 21    |       | dBm    |                                                   |
| Saturated Output Power            | P SAT    |       | 24.5  |       | dBm    |                                                   |
| Output Third-Order Intercept      | IP3      |       | 29    |       | dBm    | Measurement taken at P OUT per tone = 16dBm       |
| SUPPLY                            |          |       |       |       |        |                                                   |
| Current                           | I DQ     |   125 | 150   |       | mA     | Adjust theV GG1 between -2Vupto0VtoachievetheI DQ |
| Voltage                           | V DD     |     9 | 10    |       | V      |                                                   |

## [HMC1022ACHIPS](https://www.analog.com/hmc1022achips?doc=hmc1022achips.pdf)

## 40 GHz TO 48 GHz FREQUENCY RANGE

TA = 25°C, VDD = 10 V, VGG2 = 4.0 V, and IDQ = 150 mA for nominal operation, unless otherwise noted.

## Table 3.

| Parameter                       | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                            |
|---------------------------------|----------|-------|-------|-------|--------|-----------------------------------------------------|
| FREQUENCY RANGE                 |          |    40 |       |    48 | GHz    |                                                     |
| GAIN                            |          |       | 11.5  |       | dB     |                                                     |
| Gain Flatness                   |          |       | ±0.5  |       | dB     |                                                     |
| Gain Variation Over Temperature |          |       | 0.036 |       | dB/°C  |                                                     |
| NOISE FIGURE                    |          |       |       |     7 | dB     |                                                     |
| RETURN LOSS                     |          |       |       |       |        |                                                     |
| Input                           |          |       | 17    |       | dB     |                                                     |
| Output                          |          |       | 15    |       | dB     |                                                     |
| OUTPUT                          |          |       |       |       |        |                                                     |
| Output Power for 1dBCompression | P1dB     |    15 | 17    |       | dBm    |                                                     |
| Saturated Output Power          | P SAT    |       | 21    |       | dBm    |                                                     |
| Output Third-Order Intercept    | IP3      |       | 25    |       | dBm    | Measurement taken at P OUT per tone = 16dBm         |
| SUPPLY                          |          |       |       |       |        |                                                     |
| Current                         | I DQ     |   125 | 150   |       | mA     | Adjust theV GG1 between -2Vupto0Vtoachieve the I DQ |
| Voltage                         | V DD     |     9 | 10    |       | V      |                                                     |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                                                                   | Rating                  |
|-----------------------------------------------------------------------------|-------------------------|
| V DD                                                                        | 11.0V                   |
| Gate Bias                                                                   |                         |
| V GG1                                                                       | -3.0V to 0V             |
| V GG2                                                                       | 2.5V to (V DD -5.5V)    |
| Radio Frequency Input Power (RFIN)                                          | 22dBm                   |
| Continuous Power Dissipation (P DISS ), T = 85°C (Derate29.9mW/°CAbove85°C) | 2.69W                   |
| Storage Temperature Range                                                   | -65°C to +150°C         |
| Operating Temperature Range                                                 | -55°C to +85°C          |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM)            | Class 1A (passed 250 V) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to printed circuit board (PCB) thermal design is required.

θJC is the channel to case thermal resistance, channel to bottom of die.

## Table 5. Thermal Resistance

| PackageType   |   θ JC | Unit   |
|---------------|--------|--------|
| C-8-19        |   33.5 | °C/W   |

## Table 6. Reliability Information

| Parameter                                                                |   Temperature(°C) |
|--------------------------------------------------------------------------|-------------------|
| Junction Temperature to Maintain 1,000,000 Hour MeanTimetoFailure (MTTF) |               175 |
| Nominal Junction Temperature (T = 85°C, V DD = 10V, I DQ = 150 mA)       |            135.25 |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 7. Pad Function Descriptions

| Pad No.    | Mnemonic                      | Description                                                                                                                                                                                                                      |
|------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RFIN                          | RF Input Power. This pad is dc-coupled and matched to 50 Ω. Blocking capacitor is required. See Figure 3 for the interface schematic.                                                                                            |
| 2          | V GG2                         | Gate Control 2 for the Amplifier. Attach a bypass capacitor as showninthetypical application circuit (see Figure 47). For nominal operation, it is recommended to apply 4.0V toV GG2 . See Figure 4 for the interface schematic. |
| 3, 4, 6, 7 | A CG1 , A CG2 , A CG3 , A CG4 | Low Frequency Termination. Attach a bypass capacitor as shown in the typical application circuit (see Figure 47). See Figure 5 and Figure 6 for the interface schematics.                                                        |
| 5          | RFOUT/V DD                    | RF Signal Output. Connect theV DD network to provide drain supply current (I DD ). See Figure 47 for the typical application circuit. See Figure 5 for the interface schematic.                                                  |
| 8          | V GG1                         | Gate Control 1 for the Amplifier. Attach a bypass capacitor as shown in the typical application circuit (see Figure 47). Follow the MMIC Amplifier Biasing Procedure application note. See Figure 7 for the interface schematic. |
| Die Bottom | GND                           | Ground. Die bottom must be connected to RF and dc ground. See Figure 8 for the interface schematic.                                                                                                                              |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 5. ACG1 and RFOUT/VDD Interface Schematic

<!-- image -->

Figure 6. ACG2, ACG3, and ACG4 Interface Schematic

<!-- image -->

Figure 7. VGG1 Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 9. Gain and Return Loss vs. Frequency

<!-- image -->

Figure 10. Gain vs. Frequency for Various VDD, for VDD = 10 V, VGG2 = 4.0 V and IDD = 150 mA, and for VDD = 9 V, VGG2 = 3.0 V and IDD = 150 mA

Figure 11. Input Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 12. Gain vs. Frequency for Various Temperatures

<!-- image -->

17133-013

Figure 13. Gain vs. Frequency for Various IDD

<!-- image -->

Figure 14. Input Return Loss vs. Frequency for Various VDD, for VDD = 10 V, VGG2 = 4.0 V and IDD = 150 mA, and for VDD = 9 V, VGG2 = 3.0 V and IDD = 150 mA

<!-- image -->

## [HMC1022ACHIPS](https://www.analog.com/hmc1022achips?doc=hmc1022achips.pdf)

Figure 15. Input Return Loss vs. Frequency for Various IDD

<!-- image -->

17133-016

Figure 16. Output Return Loss vs. Frequency for Various VDD

<!-- image -->

17133-017

<!-- image -->

Figure 17. Reverse Isolation vs. Frequency for Various Temperatures

<!-- image -->

Figure 18. Output Return Loss vs. Frequency for Various Temperatures

Figure 19. Output Return Loss vs. Frequency for Various IDD

<!-- image -->

Figure 20. Noise Figure vs. Frequency for Various Temperatures

<!-- image -->

<!-- image -->

Figure 21. P1dB vs. Frequency for Various Temperatures

<!-- image -->

Figure 22. P1dB vs. Frequency for Various IDD

<!-- image -->

Figure 23. PSAT vs. Frequency for Various VDD, for VDD = 10 V, VGG2 = 4.0 V and IDD = 150 mA, and for VDD = 9 V, VGG2 = 3.0 V and IDD = 150 mA

Figure 24. P1dB vs. Frequency for Various VDD, for VDD = 10 V, VGG2 = 4.0 V and IDD = 150 mA, and for VDD = 9 V, VGG2 = 3.0 V and IDD = 150 mA

<!-- image -->

Figure 25. PSAT vs. Frequency for Various Temperatures

<!-- image -->

17133-026

Figure 26. PSAT vs. Frequency for Various IDD

<!-- image -->

## [HMC1022ACHIPS](https://www.analog.com/hmc1022achips?doc=hmc1022achips.pdf)

<!-- image -->

Figure 27. Power Added Efficiency (PAE) vs. Frequency for Various Temperatures, PAE Measured at PSAT

<!-- image -->

Figure 28. PAE vs. Frequency for Various IDD

<!-- image -->

Figure 29. PAE vs. Frequency for Various VDD, PAE Measured at PSAT, for VDD = 10 V, VGG2 = 4.0 V and IDD = 150 mA, and for VDD = 9 V, VGG2 = 3.0 V and IDD = 150 mA

<!-- image -->

Figure 30. POUT, Gain, PAE, and IDD vs. Input Power, Frequency = 24 GHz

Figure 31. POUT, Gain, PAE, and IDD vs. Input Power, Frequency = 12 GHz

<!-- image -->

Figure 32. POUT, Gain, PAE, and IDD vs. Input Power, Frequency = 36 GHz

<!-- image -->

<!-- image -->

Figure 33. Power Dissipation vs. Input Power, TA = 85°C

<!-- image -->

Figure 34. Output IP3 vs. Frequency for Various VDD, POUT per Tone = 16 dBm, for VDD = 10 V, VGG2 = 4.0 V and IDD = 150 mA, and for VDD = 9 V, VGG2 = 3.0 V and IDD = 150 mA

<!-- image -->

Figure 35. Output Third-Order Intermodulation (IM3) vs. POUT per Tone for Various Frequencies, VDD = 10.0 V

<!-- image -->

Figure 36. Output IP3 vs. Frequency for Various Temperatures

Figure 37. Output IP3 vs. Frequency for Various IDD, POUT per Tone = 16 dBm

<!-- image -->

Figure 38. Output IM3 vs. POUT per Tone for Various Frequencies, VDD = 9.0 V

<!-- image -->

## [HMC1022ACHIPS](https://www.analog.com/hmc1022achips?doc=hmc1022achips.pdf)

<!-- image -->

Figure 39. Quiescent Drain Supply Current vs. Gate Bias Voltage

<!-- image -->

Figure 40. Second Harmonic vs. Frequency over Temperatures

<!-- image -->

Figure 41. Second Harmonic vs. Frequency over Output Power

<!-- image -->

Figure 42. Supply Current vs. Input Power over Frequencies

Figure 43. Second Harmonic vs. Input Power over VDD

<!-- image -->

Figure 44. Output Second-Order Intercept (IP2) vs. Frequency, POUT = 16 dBm

<!-- image -->

## THEORY OF OPERATION

The HMC1022ACHIPS is a GaAs, pHEMT, MMIC, cascaded, distributed power amplifier. The cascaded distributed architecture uses a fundamental cell consisting of a stack of two field effect transistors (FETs) connected from source to drain. The basic schematic for a fundamental cell is shown in Figure 45. The fundamental cell is duplicated several times, with transmission lines connecting the drains of the top devices and the gates of the bottom devices, respectively. Additional circuit design techniques around each cell optimize the overall response. The major benefit of this architecture is that acceptable gain is maintained across a bandwidth that is far greater than what is typically provided by a single instance of the fundamental cell.

Figure 45. Fundamental Cell Schematic

<!-- image -->

To obtain the best performance from the HMC1022ACHIPS and to avoid damaging the device, follow the recommended biasing sequences described in the Biasing Procedures section.

## APPLICATIONS INFORMATION

<!-- image -->

Figure 46. Assembly Diagram

<!-- image -->

## NOTES

1. SUPPLY VOLTAGE (V DD ) MUST BE APPLIED THROUGH A BROADBAND BIAS TEE WITH LOW SERIES RESISTANCE AND IS CAPABLE OF PROVIDING 500mA. 17133-047
2. OPTIONAL CAPACITORS TO BE USED IF DEVICE IS TO BE OPERATED BELOW 200MHz.

Figure 47. Typical Application Circuit

The recommended biasing sequence during power-up is as follows:

1. Connect to ground.
2. Set VGG1 to -2 V to pinch off the drain current.
3. Set VDD to 10 V (the drain current is pinched off).
4. Set VGG2 to 4 V (the drain current is pinched off).
5. Adjust VGG1 in a positive direction until an IDQ of 150 mA is obtained.
6. Apply the RF signal.

## BIASING PROCEDURES

Capacitive bypassing is required for both VGG1 and VGG2, as shown in Figure 47. The capacitors to ground required for the ACG1 through ACG4 pads act as low frequency terminations. This bypassing scheme helps flatten the overall frequency response by diminishing the gain at low frequencies.

## Data Sheet

The recommended biasing sequence during power-down is as follows:

1. Turn off the RF signal.
2. Set VGG1 to -2 V to pinch off the drain current.
3. Set VGG2 to 0 V .
4. Set VDD to 0 V .
5. Set VGG1 to 0 V .

All measurements for the HMC1022ACHIPS are taken using the typical application circuit (see Figure 47) configured as shown in Figure 46. The bias conditions shown in the Electrical Specifications section are the operating points recommended to optimize the overall performance. Unless otherwise noted, the data shown is taken using the recommended bias conditions. Operation of the HMC1022ACHIPS at different bias conditions may provide performance that differs from what is shown in the Typical Performance Characteristics section.

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GaAs MMICs

Attach the die directly to the ground plane eutectically or with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Microstrip, 50 Ω, transmission lines on 0.127 mm (0.005') thick alumina thin film substrates are recommended for bringing the radio frequency to and from the chip (see Figure 48). When using 0.254 mm (0.010') thick alumina thin film substrates, raise the die 0.150 mm (0.005') to ensure that the surface of the die is coplanar with the surface of the substrate. One way to accomplish this is to attach the 0.102 mm (0.004') thick die to a 0.150 mm (0.005') thick molybdenum (Mo) heat spreader (moly tab), which is then attached to the ground plane (see Figure 49).

Figure 48. Die Without the Moly Tab

<!-- image -->

## [HMC1022ACHIPS](https://www.analog.com/hmc1022achips?doc=hmc1022achips.pdf)

Figure 49. Die With the Moly Tab

<!-- image -->

Place the microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (0.003' to 0.006').

## Handling Precautions

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

-  Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. Once the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
-  Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
-  Follow ESD precautions to protect against ESD strikes.
-  While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pick up.
-  Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip may have fragile air bridges and must not be touched with vacuum collet, tweezers, or fingers.

## Mounting

The chip is back metallized and can be die mounted with gold (Au)/tin (Sn) eutectic preforms or with electrically conductive epoxy. Ensure that the mounting surface is clean and flat.

When attaching eutectic die, an 80 Au/20 Sn preform is recommended with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90 nitrogen (N)/ 10 hydrogen (H) gas is applied, ensure that the tool tip temperature is 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 seconds. For attachment, no more than three seconds of scrubbing is required.

When attaching epoxy die, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip once it is placed into position. Cure epoxy per the schedule of the manufacturer.

## [HMC1022ACHIPS](https://www.analog.com/hmc1022achips?doc=hmc1022achips.pdf)

## Wire Bonding

RF bonds made with two 1 mil wires are recommended. Ensure that these bonds are thermosonically bonded with a force of 40 grams to 60 grams. DC bonds of a 0.001' (0.025 mm) diameter, thermosonically bonded, are recommended. Make ball bonds with a force of 40 grams to 50 grams and wedge bonds with a force of 18 grams to 22 grams. Make all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Make all bonds as short as possible, less than 12 mils (0.31 mm).

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 50. 8-Pad Bare Die [CHIP] (C-8-19) Dimensions shown in millimeters

| Model 1       | Temperature Range   | Package Description   | Package Option   |
|---------------|---------------------|-----------------------|------------------|
| HMC1022ACHIPS | -55°C to +85°C      | 8-Pad Bare Die [CHIP] | C-8-19           |
| HMC1022A-SX   | -55°C to +85°C      | 8-Pad Bare Die [CHIP] | C-8-19           |

## ORDERING GUIDE

1  The HMC1022ACHIPS model is RoHS compliant.

<!-- image -->

12-07-2018-A