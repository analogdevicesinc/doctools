<!-- lastmod 2019-11-25 -->
<!-- image -->

## Enhanced Product

## FEATURES

Gain: 14 dB typical

Operational frequency range: 0.01 GHz to 10 GHz Input/output internally matched to 50 Ω High input linearity

1 dB compression (P1dB): 20 dBm typical Output third-order intercept (OIP3): 33 dBm typical Supply voltage: 5 V typical 2 mm × 2 mm, 6-lead lead frame chip scale package

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard) Extended industrial temperature range: -55°C to +105°C Controlled manufacturing baseline One assembly/test site 1 fabrication site Enhanced product change notification Qualification data available on request

## APPLICATIONS

Cellular, 3G, LTE, WiMAX, and 4G LO driver applications Microwave radio Test and measurement equipment

Ultra wideband (UWB) communications

## GENERAL DESCRIPTION

The HMC788A-EP is a 0.01 GHz to 10 GHz, gain block, monolithic microwave integrated circuit (MMIC) amplifier using gallium arsenide (GaAs) and pseudomorphic high electron mobility transistor (pHEMT) technology.

This 2 mm × 2 mm LFCSP amplifier can be used as either a cascadable 50 Ω gain stage, or to drive the local oscillator (LO) port of many of the single and double balanced mixers from Analog Devices, Inc. with up to 20 dBm output power.

## 0.01 GHz to 10 GHz, MMIC, GaAs, pHEMT RF Gain Block

[HMC788A-EP](https://www.analog.com/HMC788A?doc=HMC788A-EP.pdf)

## FUNCTIONAL BLOCK DIAGRAM

16213-001

Figure 1.

<!-- image -->

The HMC788A-EP offers 14 dB of gain and an OIP3 of 33 dBm while requiring only 76 mA from a 5 V supply.

The Darlington feedback pair exhibits reduced sensitivity to normal process variations and yields excellent gain stability over temperature while requiring a minimal number of external bias components.

Additional application and technical information can be found in the HMC788A data sheet.

## [HMC788A-EP](https://www.analog.com/HMC788A?doc=HMC788A-EP.pdf)

| TABLE OF CONTENTS                                                                                              |
|----------------------------------------------------------------------------------------------------------------|
| Features .............................................................................................. 1      |
| Enhanced Product Features ............................................................ 1                       |
| Applications....................................................................................... 1          |
| Functional Block Diagram .............................................................. 1                      |
| General Description......................................................................... 1                 |
| Revision History ............................................................................... 2             |
| Specifications..................................................................................... 3          |
| Electrical Specifications............................................................... 3                     |
| Absolute Maximum Ratings............................................................ 4                         |
| REVISION HISTORY                                                                                               |
| Changes to Ordering Guide............................................................ 8                        |
| 10/2018-Rev. 0 to Rev.A Changes to Table 2 and Figure 2..................................................... 4 |

10/2017-Revision 0: Initial Version

## Enhanced Product

| Thermal Resistance.......................................................................4      |
|-------------------------------------------------------------------------------------------------|
| Power Derating Curves.................................................................4         |
| ESD Caution...................................................................................4 |
| Pin Configuration and Function Descriptions..............................5                      |
| Interface Schematics .....................................................................5     |
| Typical Performance Characteristics ..............................................6             |
| Outline Dimensions..........................................................................8   |
| Ordering Guide .............................................................................8   |

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

Collector bias voltage (VCC) = 5 V , case temperature (TCASE) = 25°C, 6.35 µH external inductor between VCC and radio frequency output (RFOUT), 50 Ω system, unless otherwise noted.

## Table 1.

| Parameter                            | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments   |
|--------------------------------------|----------|-------|-------|-------|--------|----------------------------|
| OVERALL FUNCTION                     |          |       |       |       |        |                            |
| Frequency Range                      |          |  0.01 |       |    10 | GHz    |                            |
| Gain                                 |          |    12 |    14 |       | dB     | 0.01 GHz to 6.0 GHz        |
|                                      |          |     9 |    12 |       | dB     | 6.0 GHz to 10.0 GHz        |
| Gain Variation Over Temperature      |          |       | 0.004 |       | dB/°C  | 0.01 GHz to 6.0 GHz        |
|                                      |          |       | 0.007 |       | dB/°C  | 6.0 GHz to 10.0 GHz        |
| Reverse Isolation                    |          |       |    23 |       | dB     | 0.01 GHz to 6.0 GHz        |
|                                      |          |       |    20 |       | dB     | 6.0 GHz to 10 GHz          |
| RADIO FREQUENCY (RF) INPUT INTERFACE |          |       |       |       |        |                            |
| Input Return Loss                    |          |       |    16 |       | dB     | 0.01 GHz to 6.0 GHz        |
|                                      |          |       |     9 |       | dB     | 6.0 GHz to 10.0 GHz        |
| RF OUTPUT INTERFACE                  |          |       |       |       |        |                            |
| Output Power for 1 dB Compression    | P1dB     |    18 |    20 |       | dBm    | 0.01 GHz to 6.0 GHz        |
|                                      |          |    15 |    18 |       | dBm    | 6.0 GHz to 10.0 GHz        |
| Output Return Loss                   |          |       |     9 |       | dB     | 0.01 GHz to 6.0 GHz        |
|                                      |          |       |    12 |       | dB     | 6.0 GHz to 10.0 GHz        |
| DISTORTIONAND NOISE                  |          |       |       |       |        |                            |
| Output Third-Order Intercept         | OIP3     |       |    33 |       | dBm    | 0.01 GHz to 6.0 GHz        |
|                                      |          |       |    30 |       | dBm    | 6.0 GHz to 10.0 GHz        |
| Noise Figure                         | NF       |       |     6 |       | dB     | 0.01 GHz to 6.0 GHz        |
|                                      |          |       |     7 |       | dB     | 6.0 GHz to 10.0 GHz        |
| POWER INTERFACE                      |          |       |       |       |        |                            |
| Supply Voltage                       |          |   4.5 |     5 |   5.5 | V      |                            |
| Supply Current                       | I CC     |    60 |    65 |       | mA     | V CC = 4.5V                |
|                                      |          |       |    76 |       | mA     | V CC = 5V                  |
|                                      |          |       |    87 |    90 | mA     | V CC = 5.5V                |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                         | Rating          |
|-------------------------------------------------------------------|-----------------|
| V CC                                                              | 7V              |
| RF IN (V CC = 5V)                                                 | 20dBm           |
| Continuous Power Dissipation, P DISS 1                            |                 |
| T CASE =85°C                                                      | 0.76W           |
| T CASE =105°C                                                     | 0.59W           |
| Junction (T J ) Temperature                                       | 175°C           |
| Operating (T OPR ) Temperature Range                              | -55°C to +105°C |
| Storage Temperature Range                                         | -65°C to +150°C |
| Electrostatic Discharge (ESD) Sensitivity, Human Body Model (HBM) | Class 1A        |

- 1  For maximum power dissipation vs. case temperature, see Figure 2.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JC | Unit   |
|---------------|--------|--------|
| CP-6-10 1     |  118.0 | °C/W   |

- 1  Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with nine thermal vias. See JEDEC JESD51.

## POWER DERATING CURVES

Figure 2 shows the maximum power dissipation vs. case temperature.

Figure 2. Maximum Power Dissipation vs. Case Temperature

<!-- image -->

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 3. Pin Configuration

| Pin No.   | Mnemonic   | Description                                                                                                                                              |
|-----------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 6   | NIC        | Not Internally Connected. The pins are not connected internally; however, all data shown herein was measured with these pins connected toGND externally. |
| 2         | RF IN      | RF Input. This pin is dc-coupled and ac matched to 50 Ω. An external dc blocking capacitor is required on this pin.                                      |
| 3         | GND        | Ground. This pin must be connected to ground.                                                                                                            |
| 5         | RF OUT     | RF Output. This pin is ac matched to 50Ωand supplies dc bias for the output stage.                                                                       |
|           | EPAD       | Exposed Pad. The exposed pad must be connected toGND for proper operation.                                                                               |

## Table 4. Pin Function Descriptions

## INTERFACE SCHEMATICS

Figure 4. RFIN, RFOUT Interface Schematic

<!-- image -->

Figure 5. GND Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 6. Input Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 7. Reverse Isolation vs. Frequency at Various Temperatures

<!-- image -->

Figure 8. Gain vs. Frequency at Various Temperatures

<!-- image -->

Figure 9. Output Return Loss vs. Frequency at Various Temperatures

Figure 10. Output IP3 vs. Frequency at Various Temperatures; 5 dBm per Tone Output Power

<!-- image -->

Figure 11. P1dB vs. Frequency at Various Temperatures

<!-- image -->

## Enhanced Product

Figure 12. Noise Figure vs. Frequency at Various Temperatures

<!-- image -->

Figure 13. Saturation Power (PSAT) vs. Frequency at Various Temperatures

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

08-17-2018-C

Figure 14. 6-Lead Lead Frame Chip Scale Package [LFCSP] 2 mm × 2 mm Body and 0.85 mm Package Height (CP-6-10)

Dimensions shown in millimeters

| Model 1           | TemperatureRange   | Moisture Sensitivity Level(MSL) Rating 2   | PackageDescription                         | Package Option   | Marking Code   |
|-------------------|--------------------|--------------------------------------------|--------------------------------------------|------------------|----------------|
| HMC788ACPSZ-EP-PT | -55°C to+105°C     | MSL3                                       | 6-Lead LeadFrameChip Scale Package [LFCSP] | CP-6-10          | Y6V            |
| HMC788ACPSZ-EP-R7 | -55°C to+105°C     | MSL3                                       | 6-Lead LeadFrameChip Scale Package [LFCSP] | CP-6-10          | Y6V            |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

2  See the Absolute Maximum Ratings section.

<!-- image -->