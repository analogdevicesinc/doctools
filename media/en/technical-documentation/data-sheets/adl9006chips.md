<!-- lastmod 2021-01-29 -->
<!-- image -->

Data Sheet

## FEATURES

P1dB: 19 dBm typical at 2 GHz to 14 GHz at 2 GHz to 14 GHzGain: 15.5 dB typical at 14 GHz to 22 GHz Noise figure: 2.2 dB at 2 GHz to 14 GHz Output IP3: 24 dBm typical at 2 GHz to 14 GHz Power supply voltage: 5 V with a 55 mA total supply current 50 Ω matched input and output

## APPLICATIONS

Test instrumentation

Microwave radios and very small aperture terminals (VSATs) Military and space

## 2 GHz to 28 GHz, GaAs, pHEMT, MMIC, Low Noise Amplifier

[ADL9006CHIPS](https://www.analog.com/ADL9006?doc=ADL9006CHIPS.pdf)

## GENERAL DESCRIPTION

The ADL9006CHIPS is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), low noise amplifier that operates from 2 GHz to 28 GHz. The amplifier provides 15.5 dB of gain, 2.2 dB of noise figure, 24 dBm of output third-order intercept (IP3), 20 dBm of output saturated power (PSAT), and 19 dB of power output for 1 dB compression (P1dB) while requiring a 55 mA power supply current (IDD) from a 5 V total supply voltage. The ADL9006CHIPS is self biased with only a single positive supply needed to achieve an IDD of 55 mA.

The ADL9006CHIPS amplifier input and output are internally matched to 50 Ω facilitating integration into multichip modules (MCMs).

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## [ADL9006CHIPS](https://www.analog.com/ADL9006?doc=ADL9006CHIPS.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| General Description......................................................................... 1             |
| Functional Block Diagram.............................................................. 1                   |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |
| 2 GHz to 14 GHz.......................................................................... 3                |
| 14 GHz to 22 GHz........................................................................ 3                 |
| 22 GHz to 28 GHz........................................................................ 4                 |
| DCSpecifications ......................................................................... 4               |
| Absolute Maximum Ratings ........................................................... 5                     |
| Thermal Resistance...................................................................... 5                 |
| Electronic Discharge (ESD) Ratings.......................................... 5                             |
| ESD Caution.................................................................................. 5            |

## REVISION HISTORY

1/2021-Revision 0: Initial Version

| Pin Configuration and Function Descriptions .............................6                                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------------|
| Interface Schematics.....................................................................6                                                     |
| Typical Performance Characteristics .............................................7                                                             |
| Small Signal Response ..................................................................7                                                      |
| Large Signal Response ............................................................... 10                                                       |
| Theory of Operation...................................................................... 13                                                   |
| Applications Information ............................................................. 14                                                      |
| Typical Application Circuit...................................................... 14                                                           |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs.............................................................................. 14 |
| Assembly Diagram..................................................................... 15                                                       |
| Outline Dimensions....................................................................... 16                                                   |
| Ordering Guide .......................................................................... 16                                                   |

## SPECIFICATIONS

## 2 GHz TO 14 GHz

VDD = 5 V, IDD = 55 mA, VGG2 = open, and TA = 25°C, unless otherwise noted.

## Table 1.

| Parameter                       | Symbol   | Test Conditions/Comments                              |   Min |   Typ | Unit   |
|---------------------------------|----------|-------------------------------------------------------|-------|-------|--------|
| FREQUENCY RANGE                 |          |                                                       |     2 |       | GHz    |
| GAIN                            | S21      |                                                       |    13 |    15 | dB     |
| Gain Variation over Temperature |          |                                                       |       | 0.008 | dB/°C  |
| RETURN LOSS                     |          |                                                       |       |       |        |
| Input                           | S11      |                                                       |       |    15 | dB     |
| Output                          | S22      |                                                       |       |    18 | dB     |
| OUTPUT                          |          |                                                       |       |       |        |
| Power for 1 dB Compression      | P1dB     |                                                       |       |    19 | dBm    |
| Saturated Power                 | P SAT    |                                                       |    18 |    20 | dBm    |
| Third-Order Intercept           | IP3      | Measurement taken at output power(P OUT )pertone=0dBm |       |    24 | dBm    |
| Second-Order Intercept          | IP2      | Measurement taken at P OUT per tone=0dBm              |       |    24 | dBm    |
| NOISE FIGURE                    |          |                                                       |       |   2.2 | dB     |

## 14 GHz TO 22 GHz

VDD = 5 V, IDD = 55 mA, VGG2 = open, and TA = 25°C, unless otherwise noted.

## Table 2.

| Parameter                       | Symbol   | Test Conditions/Comments                 |   Min |   Typ |   Max | Unit   |
|---------------------------------|----------|------------------------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE                 |          |                                          |    14 |       |    22 | GHz    |
| GAIN                            | S21      |                                          |  13.5 |  15.5 |       | dB     |
| Gain Variation over Temperature |          |                                          |       | 0.013 |       | dB/°C  |
| RETURN LOSS                     |          |                                          |       |       |       |        |
| Input                           | S11      |                                          |       |    20 |       | dB     |
| Output                          | S22      |                                          |       |    25 |       | dB     |
| OUTPUT                          |          |                                          |       |       |       |        |
| Power for 1 dB Compression      | P1dB     |                                          |       |    17 |       | dBm    |
| Saturated Power                 | P SAT    |                                          |  15.5 |    18 |       | dBm    |
| Third-Order Intercept           | IP3      | Measurement taken at P OUT per tone=0dBm |       |    21 |       | dBm    |
| Second-Order Intercept          | IP2      | Measurement taken at P OUT per tone=0dBm |       |    30 |       | dBm    |
| NOISE FIGURE                    |          |                                          |       |   2.5 |       | dB     |

## [ADL9006CHIPS](https://www.analog.com/ADL9006?doc=ADL9006CHIPS.pdf)

## 22 GHz TO 28 GHz

VDD = 5 V, IDD = 55 mA, VGG2 = open, and TA = 25°C, unless otherwise noted.

## Table 3.

| Parameter                       | Symbol   | Test Conditions/Comments                 |   Min |   Typ |   Max | Unit   |
|---------------------------------|----------|------------------------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE                 |          |                                          |    22 |       |    28 | GHz    |
| GAIN                            | S21      |                                          |  12.5 |    15 |       | dB     |
| Gain Variation over Temperature |          |                                          |       | 0.018 |       | dB/°C  |
| RETURN LOSS                     |          |                                          |       |       |       |        |
| Input                           | S11      |                                          |       |    18 |       | dB     |
| Output                          | S22      |                                          |       |    20 |       | dB     |
| OUTPUT                          |          |                                          |       |       |       |        |
| Saturated Power                 | P SAT    |                                          |    15 |    17 |       | dBm    |
| Third-Order Intercept           | IP3      | Measurement taken at P OUT per tone=0dBm |       |  16.5 |       | dBm    |
| Second-Order Intercept          | IP2      | Measurement taken at P OUT per tone=0dBm |       |    36 |       | dBm    |
| NOISE FIGURE                    |          |                                          |       |     4 |       | dB     |

## DC SPECIFICATIONS

## Table 4.

| Parameter            | Symbol   | Test Conditions/Comments          |   Min |   Typ |   Max | Unit   |
|----------------------|----------|-----------------------------------|-------|-------|-------|--------|
| TOTAL SUPPLY CURRENT | I DD     | V DD = 5 V                        |       |    55 |       | mA     |
| POWER SUPPLY VOLTAGE | V DD     |                                   |     4 |     5 |     7 | V      |
| V GG 2               | V GG 2   | V GG 2 = open (nominal condition) |  -2.0 |       |  +2.6 | V      |

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                                                                                     |                  |
|----------------------------------------------------------------------------------------------|------------------|
| Drain Bias Voltage                                                                           | 8 V              |
| Gate Control (V GG 2)                                                                        | -2.6 V to +3.6 V |
| RFIN                                                                                         | 20dBm            |
| Continuous Power Dissipation (P DISS ) at T DIE BOTTOM = 85°C (Derate 22.1 mW/°C above 85°C) | 1.72W            |
| Temperature                                                                                  |                  |
| Storage Range                                                                                | -65°C to +150°C  |
| Operating Range (Die Bottom)                                                                 | -55°C to +85°C   |
| Channel to Maintain 1,000,000 Hour Meant Time to Failure (MTTF)                              | 175              |
| Nominal Channel (T A = 85°C, V DD = 5 V)                                                     | 97.43            |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to printed circuit board (PCB) thermal design is required.

θJC is the channel to case, thermal resistance, channel to bottom of the die using die attach epoxy.

## Table 6. Thermal Resistance

| Package   |   θ JC 1 | Unit   |
|-----------|----------|--------|
| C-10-8    |     45.2 | °C/W   |

1  θJC was determined by simulation under the following conditions: the heat transfer is due solely to the thermal conduction from the channel, to the die bottom, and the die bottom is held constant at the operating temperature of 85°C.

## ELECTRONIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESD A/JEDEC JS-001.

## ESD Ratings for ADL9006CHIPS

| Table 7. ADL9006CHIPS, 10-Pad Bare Die (CHIP)   | Table 7. ADL9006CHIPS, 10-Pad Bare Die (CHIP)   | Table 7. ADL9006CHIPS, 10-Pad Bare Die (CHIP)   |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ESD Model                                       | Withstand Threshold (V)                         | Class                                           |
| HBM                                             | 500                                             | 1B                                              |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. NC = NO CONNECT. SEE THE ASSEMBLY DIAGRAM, FIGURE 42, FOR PROPER BONDING.

Figure 2. Pad Configuration

Table 8. Pad Function Descriptions

| Pad No.       | Mnemonic   | Description                                                                                                                                                                                                                                                                                                             |
|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 6, 8, 9 | GND        | Ground. The GNDpads are connected to the die bottom using thru die vias. See the assembly diagram for proper bonding (see Figure 42). See Figure 5 for the interface schematic.                                                                                                                                         |
| 2             | RFIN       | RF Input. RFIN is ac-coupled and matched to 50Ω. See Figure 3 for the interface schematic.                                                                                                                                                                                                                              |
| 4             | V GG 2     | Gain Control. V GG 2 is dc-coupled and accomplishes gain control by reducing the internal voltage and by becoming more negative. Attach bypass capacitors to V GG 2 as shown in the assembly diagram (see Figure 42). Under normal operating conditions, V GG 2 is left open. See Figure 4 for the interface schematic. |
| 5             | V DD       | Power Supply Voltage for the Amplifier. Connect a dc bias to provide quiescient drain current (I DQ ). See Figure 6 for the interface schematic.                                                                                                                                                                        |
| 7             | RFOUT      | RF Output.RFOUTis ac-coupledandmatchedto50Ω.SeeFigure 7 for the interface schematic.                                                                                                                                                                                                                                    |
| 10            | NC         | NoConnect. See the assembly diagram, Figure 42, for proper bonding.                                                                                                                                                                                                                                                     |
| Die Bottom    | GND        | Die bottom must be connected to RF and dc ground. See Figure 5 for the interface schematic.                                                                                                                                                                                                                             |

## INTERFACE SCHEMATICS

<!-- image -->

20122-002

## TYPICAL PERFORMANCE CHARACTERISTICS

## SMALL SIGNAL RESPONSE

<!-- image -->

Figure 8. Gain and Return Loss vs. Frequency

<!-- image -->

Figure 9. Gain vs. Frequency at Various Supply Voltages

<!-- image -->

Figure 10. Gain vs. VGG2 for Various Frequencies

<!-- image -->

Figure 11. Gain vs. Frequency at Various Temperatures

Figure 12. Gain vs. Frequency at Various VGG2 Voltages

<!-- image -->

Figure 13. Reverse Isolation vs. Frequency at Various Temperatures

<!-- image -->

## [ADL9006CHIPS](https://www.analog.com/ADL9006?doc=ADL9006CHIPS.pdf)

<!-- image -->

Figure 14. Input Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 15. Input Return Loss vs. Frequency at Various Supply Voltages

<!-- image -->

Figure 16. Input Return Loss vs. Frequency at Various VGG2 Voltages

<!-- image -->

Figure 17. Output Return Loss vs. Frequency at Various Temperatures

Figure 18. Output Return Loss vs. Frequency at Various Supply Voltages

<!-- image -->

Figure 19. Output Return Loss vs. Frequency at Various VGG2 Voltages

<!-- image -->

Figure 20. Noise Figure vs. Frequency at Various Supply Voltages

<!-- image -->

Figure 21. Noise Figure vs. Frequency at Various Temperatures

<!-- image -->

## LARGE SIGNAL RESPONSE

<!-- image -->

Figure 22. PSAT vs. Frequency at Various Temperatures

<!-- image -->

Figure 23. PSAT vs. Frequency at Various Supply Voltages

<!-- image -->

Figure 24.  POUT, Gain, Power Added Efficiency (PAE), and IDQ vs. Input Power, 2 GHz, VDD = 5 V

<!-- image -->

Figure 25. PSAT vs Frequency at Various VGG2 Voltages

Figure 26. POUT vs. Frequency at Various Input Power Levels

<!-- image -->

Figure 27. POUT, Gain, PAE, and IDQ vs. Input Power, 10 GHz, VDD = 5 V

<!-- image -->

## Data Sheet

<!-- image -->

Figure 28. POUT, Gain, PAE, and IDQ vs. Input Power, 20 GHz, VDD = 5 V

Figure 29. Output IP3 vs. Frequency for Various Temperatures at POUT = 0 dBm per Tone

<!-- image -->

Figure 30. Output IP3 vs. Frequency at Various VGG2 Voltages

<!-- image -->

20122-028

## [ADL9006CHIPS](https://www.analog.com/ADL9006?doc=ADL9006CHIPS.pdf)

<!-- image -->

20122-031

Figure 31. POUT, Gain, PAE, and IDQ vs. Input Power, 26 GHz, VDD = 5 V

<!-- image -->

Figure 32. Output IP3 vs. Frequency at Various Supply Voltages at POUT = 0 dBm per Tone

Figure 33. Output IP3 vs. VGG2 for Various Frequencies

<!-- image -->

<!-- image -->

Figure 34. Output IP2 vs. Frequency at Various Supply Voltages at POUT = 0 dBm per Tone

<!-- image -->

Figure 35. IDD vs. VGG2 Voltages, VDD = 5 V

<!-- image -->

Figure 36. Power Dissipation vs. Input Power at Various Frequencies, TA = 85°C

Figure 37 . Output IP2 vs. Frequency for Various Temperatures at POUT = 0 dBm per Tone

<!-- image -->

Figure 38. IDQ vs. VDD for Various Temperatures

<!-- image -->

## THEORY OF OPERATION

The ADL9006CHIPS is a GaAs, pHEMT, MMIC, low noise amplifier. The basic architecture of the ADL9006CHIPS is that of a single-supply, biased, cascode distributed amplifier with an integrated RF choke for the drain. A simplified schematic of this architecture is shown in Figure 39.

Figure 39. Architecture and Simplified Schematic

<!-- image -->

Though the gate bias voltages of the upper field effect transistors (FETs) are set internally by a resistive voltage divider tapped off of VDD, the VGG2 pin is provided to allow the user an optional means of changing the gate bias of the upper FETs. Adjustment of the VGG2 pin voltage across the -2.0 V to +2.6 V range changes the gate bias of the upper FETs, thus affecting gain changes depending on the frequency.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

As shown in the typical application circuit, capacitive bypassing is required for VDD (see Figure 40). Gain control is possible through the application of a dc voltage to VGG2. If gain control is used, VGG2 must be bypassed by 100 pF, 0.01 µF, and 4.7 µF capacitors. If gain control is not used, VGG2 can be either left open or capacitively bypassed.

Figure 40. Typical Application Circuit

<!-- image -->

The recommended power-up bias sequence follows:

1. Set VDD to 5 V (this results in an IDQ near its specified typical value).
2. If the gain control function is used, apply a voltage within the -2.0 V to +2.6 V range to VGG2 until the desired gain is achieved.
3. Apply the RF input signal.

The recommended power-down bias sequence follows:

1. Turn off the RF input signal.
2. Remove the VGG2 voltage or set it to 0 V.
3. Set VDD to 0 V.

Unless otherwise noted, all measurements and data shown were taken using the typical application circuit (see Figure 40) biased per the conditions listed in the Specifications section. The bias conditions detailed in the Specifications section are the operating points recommended to optimize the overall performance. Operation using other bias conditions may provide performance that differs from what is shown in this data sheet. To obtain the best performance while not damaging the device, follow the recommended biasing sequence outlined in this section.

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GaAs MMICs

Attach the die directly to the ground plane with conductive epoxy. To bring the RF to and from the chip, use 50 Ω microstrip transmission lines on 0.127 mm (5 mil) thick alumina, thin film substrates (see Figure 41).

Figure 41. Routing RF Signals

<!-- image -->

To minimize bond wire length, place microstrip substrates as close to the die as possible. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil). All data is taken with the chip connected via two 0.025 mm (0.98 mil) wire bonds of minimal length, 0.31 mm (1.22 mil).

## Handling Precautions

To avoid permanent damage, adhere to the following precautions:

- All bare die ship in either waffle or gel-based ESD protective containers, sealed in an ESD protective bag. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Never use liquid cleaning systems to clean the chip.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. To minimize inductive pickup, use shielded signal and bias cables.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip may have fragile air bridges and must not be touched with vacuum collet, tweezers, or fingers.
- For mounting, the chip is back metallized and can be die mounted with electrically conductive epoxy. The mounting surface must be clean and flat.
- For the epoxy die attachment, the ABLETHERM 2600BT is recommended. Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after placing it into position. Cure the epoxy per the schedule provided by the manufacturer. For wire bonding, RF bonds made with 1 mil gold wire are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. DC bonds of 0.025 mm (1 mil) diameter, thermosonically bonded, are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds, and keep all bonds as short as possible, less than 0.305 mm (12 mil).

## ASSEMBLY DIAGRAM

Figure 42. Assembly Diagram

<!-- image -->

20122-042

## OUTLINE DIMENSIONS

Figure 43. 10-Pad Bare Die [CHIP] (C-10-8)

<!-- image -->

Dimensions shown in millimeter

| Model 1, 2   | Temperature Range   | Package Description    | Package Option   |
|--------------|---------------------|------------------------|------------------|
| ADL9006CHIPS | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-8           |
| ADL9006C-KIT | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-8           |

## ORDERING GUIDE

1  The ADL9006CHIPS and ADL9006C-KIT are RoHS compliant parts.

2  The ADL9006C-KIT is a sample order of two devices.

<!-- image -->

08-28-2020-B