<!-- lastmod 2019-10-04 -->
<!-- image -->

Data Sheet

## FEATURES

Low conversion loss: 9 dB No dc bias and no external matching required Ideal for upconversion and downconversion Wideband IF range: DC to 4 GHz Ultrasmall package: 8-Lead MINI\_SO\_EP

## APPLICATIONS

Very small aperture terminals (VSAT) and mobile satellite communication terminals Microwave and military radio Wireless backhaul equipment Automotive, dedicated short range communications (DSRC) and intelligent vehicle highway systems (IVHS) Military radar, electronic warfare (EW), and electronic counter measure (ECM) subsystems

## GENERAL DESCRIPTION

The HMC220B is an ultraminiature, double-balanced mixer in an 8-lead mini small outline package with exposed pad (MINI\_SO\_EP). This fundamental, monolithic microwave integrated circuit (MMIC) mixer is constructed of gallium arsenide (GaAs) Schottky diodes and planar transformer baluns on the chip.

## 5 GHz to 12 GHz

## GaAs, MMIC, Fundamental Mixer

[HMC220B](https://www.analog.com/HMC220B?doc=HMC220B.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The device can be used as an upconverter, downconverter, biphase demodulator, or phase comparator from 5 GHz to 12 GHz. The HMC220B provides excellent local oscillator (LO) to radio frequency (RF) and LO to intermediate frequency (IF) isolation due to optimized balun structures and operates as low as 7 dBm. The RoHS compliant HMC220B eliminates the need for wire bonding and is compatible with high volume surfacemount manufacturing techniques.

<!-- image -->

## [HMC220B](https://www.analog.com/HMC220B?doc=HMC220B.pdf)

| TABLE OF CONTENTS                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Features .............................................................................................. 1                                                                                                                    |
| Applications....................................................................................... 1                                                                                                                        |
| Functional Block Diagram .............................................................. 1                                                                                                                                    |
| General Description......................................................................... 1                                                                                                                               |
| Revision History ............................................................................... 2                                                                                                                           |
| Specifications..................................................................................... 3                                                                                                                        |
| Absolute Maximum Ratings............................................................ 4                                                                                                                                       |
| Thermal Resistance ...................................................................... 4                                                                                                                                  |
| ESD Caution.................................................................................. 4                                                                                                                              |
| Pin Configuration and Function Descriptions............................. 5                                                                                                                                                   |
| Interface Schematics..................................................................... 5                                                                                                                                  |
| Typical Performance Characteristics ............................................. 6                                                                                                                                          |
| REVISION HISTORY                                                                                                                                                                                                             |
| Changes to Table 1............................................................................ 3                                                                                                                             |
| Change to Table 2 and Table 3 ........................................................ 4                                                                                                                                     |
| Updated Outline Dimensions....................................................... 18                                                                                                                                         |
| Changes to Ordering Guide.......................................................... 18                                                                                                                                       |
| 8/2018-Rev. Ato Rev. B                                                                                                                                                                                                       |
| Changes to Continuous Power Dissipation, P DISS Parameter and Maximum Junction Temperature Parameter, Table 2 and Table 3................................................................................................. 4 |

| Downconverter Performance ......................................................6           |    |
|---------------------------------------------------------------------------------------------|----|
| Upconverter Performance.........................................................            | 10 |
| Isolation and Return Loss .........................................................         | 11 |
| IF Bandwidth .............................................................................. | 13 |
| Spurious Performance ...............................................................        | 15 |
| Theory of Operation ......................................................................  | 16 |
| Applications Information..............................................................      | 17 |
| Evaluation PCB Information ....................................................             | 17 |
| Typical Applications Circuit .....................................................          | 17 |
| Outline Dimensions.......................................................................   | 18 |
| Ordering Guide ..........................................................................   | 18 |
| 10/2017-Rev. 0 to Rev.A                                                                     |    |
| Changes to LO to RF Parameter, Table 1........................................3             |    |
| Changes to Figure 35 and Figure 38.............................................             | 11 |
| Changes to Ordering Guide..........................................................         | 18 |
| 7/2017-Revision 0: Initial Version                                                          |    |

## SPECIFICATIONS

TA = 25°C, IF = 100 MHz, LO drive level = 10 dBm. All measurements performed as a downconverter with the lower sideband selected, unless otherwise noted.

## Table 1.

| Parameter                          | Symbol   | Min   |   Typ |   Max | Unit   |
|------------------------------------|----------|-------|-------|-------|--------|
| FREQUENCY RANGE                    |          |       |       |       |        |
| Radio Frequency                    | RF       | 5     |       |    12 | GHz    |
| Local Oscillator                   | LO       | 5     |       |    12 | GHz    |
| Intermediate Frequency             | IF       | DC    |       |     4 | GHz    |
| LO DRIVE LEVEL                     |          | 7     |    10 |       | dBm    |
| PERFORMANCE AT LO DRIVE = 10 dBm   |          |       |       |       |        |
| Conversion Loss                    |          |       |   9.5 |    12 | dB     |
| Single Sideband (SSB) Noise Figure | NF       |       |   9.5 |       | dB     |
| Input Third-Order Intercept        | IIP3     | 12    |    17 |       | dBm    |
| Input Second-Order Intercept       | IIP2     |       |    50 |       | dBm    |
| Input 1 dB Compression Point       | IP1dB    |       |   9.5 |       | dBm    |
| PERFORMANCE AT LO DRIVE = 13 dBm   |          |       |       |       |        |
| Conversion Loss                    |          |       |     9 |    13 | dB     |
| SSB Noise Figure                   | NF       |       |     9 |       | dB     |
| Input Third-Order Intercept        | IIP3     | 12    |  18.5 |       | dBm    |
| Input Second-Order Intercept       | IIP2     |       |    60 |       | dBm    |
| Input 1 dB Compression Point       | IP1dB    |       |    11 |       | dBm    |
| ISOLATION                          |          |       |       |       |        |
| RF to IF                           |          |       |    20 |       | dB     |
| LO to RF                           |          | 31    |    40 |       | dB     |
| LO to IF                           |          | 23    |    38 |       | dB     |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                  | Rating          |
|----------------------------------------------------------------------------|-----------------|
| RF Input Power                                                             | 25 dBm          |
| LO Input Power                                                             | 25 dBm          |
| IF Input Power                                                             | 25 dBm          |
| IF Source and Sink Current                                                 | 3mA             |
| Continuous Power Dissipation, P DISS (T A =85°C, Derate 5.5mW/°CAbove85°C) | 495mW           |
| Junction Temperature                                                       | 175°C           |
| Peak Reflow Temperature (Moisture Sensitivity Level (MSL1)) 1              | 260°C           |
| Operating Temperature Range                                                | -40°C to +85°C  |
| Storage Temperature Range                                                  | -65°C to +125°C |
| Electrostatic Discharge (ESD) Sensitivity                                  |                 |
| HumanBodyModel(HBM)                                                        | 2000V (Class 2) |
| Field Induced Charged DeviceModel(FICDM)                                   | 750V (Class C4) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

## Table 3. Thermal Resistance

| PackageType   |   θ JA |   θ JC | Unit   |
|---------------|--------|--------|--------|
| RH-8-1 1      |  104.7 |    180 | °C/W   |

1  Thermal impedance simulated values are based on JEDEC 2S2P test board with 3 mm × 3 mm thermal vias. See JEDEC JESD51-12 for additional information.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

1. NIC = NOT INTERNALLY CONNECTED. THIS PIN CAN BE LEFT FLOATING OR  IT CAN BE SOLDERED DOWN TO RF/DC GND. THE NIC PIN DOES NOT AFFECT THE PERFORMANCE OF THE HMC220B.

## NOTES

2. EXPOSED PAD. CONNECT THE EXPOSED PAD TO A LOW IMPEDANCE THERMAL AND ELECTRICAL GROUND PLANE.

15769-002

Figure 2. Pin Configuration

## Table 4. Pin Function Descriptions

| Pin No.    | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | LO         | Local Oscillator. This pin is ac-coupled and matched to 50 Ω. See Figure 4 for the LO interface schematic.                                                                                                                                                                                                                                                                                                         |
| 2, 3, 6, 7 | GND        | Ground. Connect the package bottom to RF/dc ground. See Figure 3 for the GNDinterface schematic.                                                                                                                                                                                                                                                                                                                   |
| 4          | NIC        | Not Internally Connected. This pin can be left floating or it can be soldered down to RF/dc GND.The NIC pin does not affect the performance of the HMC220B.                                                                                                                                                                                                                                                        |
| 5          | IF         | Intermediate Frequency. This pin is dc-coupled. For applications not requiring operations to dc, dc block this port externally using a series capacitor whose value is chosen to pass the necessary IF frequency range. For operation to dc, this pin must not source or sink 3 mAof current, or the device is nonfunctioning and possible device failure may result. See Figure 5 for the IF interface schematic. |
| 8          | RF EPAD    | Radio Frequency. This pin is ac-coupled internally and match to 50 Ω. See Figure 6 for the RF interface schematic. Exposed Pad. Connect the exposed pad to a low impedance thermal and electrical ground plane.                                                                                                                                                                                                    |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE

## Downconverter Performance at IF = 100 MHz, Lower Sideband

Data taken at LO = 10 dBm, TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperature

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 9. Input IP2 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Powers

Figure 11. Input IP3 vs. RF Frequency at Various LO Powers

<!-- image -->

Figure 12. Input IP2 vs. RF Frequency at Various LO Powers

<!-- image -->

Figure 13. Input P1dB vs. RF Frequency at Various Temperatures

<!-- image -->

15769-014

Figure 14. Noise Figure vs. RF Frequency at Various LO Powers

<!-- image -->

<!-- image -->

Figure 15. Input P1dB vs. RF Frequency at Various LO Powers

<!-- image -->

<!-- image -->

## Downconverter Performance at IF = 1000 MHz, Lower Sideband

Data taken at LO = 10 dBm, TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 16. Conversion Gain vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 17. Input IP3 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 18. Input IP2 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 19. Conversion Gain vs. RF Frequency at Various LO Powers

Figure 20. Input IP3 vs. RF Frequency at Various LO Powers

<!-- image -->

Figure 21. Input IP2 vs. RF Frequency at Various LO Powers

<!-- image -->

## Downconverter Performance at IF = 3000 MHz, Lower Sideband

Data taken at LO = 10 dBm, TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 22. Conversion Gain vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 23. Input IP3 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 24. Input IP2 vs. RF Frequency at Various Temperatures

<!-- image -->

<!-- image -->

Figure 25. Conversion Gain vs. RF Frequency at Various LO Powers

Figure 26. Input IP3 vs. RF Frequency at Various LO Powers

<!-- image -->

Figure 27. Input IP2 vs. RF Frequency at Various LO Powers

<!-- image -->

<!-- image -->

## UPCONVERTER PERFORMANCE

## Upconverter Performance at IF = 100 MHz, Upper Sideband

Data taken at LO = 10 dBm, TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 28. Conversion Gain vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 29. Input IP3 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 30. Input IP2 vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 31. Conversion Gain vs. RF Frequency at Various LO Powers

Figure 32. Input IP3 vs. RF Frequency at Various LO Powers

<!-- image -->

Figure 33. Input IP2 vs. RF Frequency at Various LO Powers

<!-- image -->

## ISOLATION AND RETURN LOSS

Data taken at IF = 100 MHz, LO = 10 dBm, TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 34. LO to IF Isolation vs. LO Frequency at Various Temperatures

<!-- image -->

Figure 35. LO to RF Isolation vs. LO Frequency at Various Temperatures

<!-- image -->

Figure 36. RF to IF Isolation vs. RF Frequency at Various Temperatures

<!-- image -->

Figure 37. LO to IF Isolation vs. LO Frequency at Various LO Powers

<!-- image -->

Figure 38. LO to RF Isolation vs. LO Frequency at Various LO Powers

<!-- image -->

Figure 39. RF to IF Isolation vs. RF Frequency at Various LO Powers

<!-- image -->

<!-- image -->

<!-- image -->

Figure 40. LO Return Loss vs. LO Frequency

Figure 41. RF Return Loss vs. RF Frequency

<!-- image -->

Figure 42. IF Return Loss vs. IF Frequency

<!-- image -->

## IF BANDWIDTH

## Downconverter Performance, Lower Sideband

Data taken at LO = 10 dBm, TA =25°C, unless otherwise noted.

<!-- image -->

Figure 43. Conversion Gain vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 44. Input IP3 vs. IF Frequency at Various Temperatures

Figure 45. Conversion Gain vs. IF Frequency at Various LO Drives

<!-- image -->

<!-- image -->

Figure 46. Input IP3 vs. IF Frequency at Various LO Drives

<!-- image -->

<!-- image -->

## Downconverter Performance, Upper Sideband

Data taken at LO = 10 dBm, TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 47. Conversion Gain vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 48. Input IP3 vs. IF Frequency at Various Temperatures

Figure 49. Conversion Gain vs. IF Frequency at Various LO Drives

<!-- image -->

Figure 50. Input IP3 vs. IF Frequency at Various LO Drives

<!-- image -->

## SPURIOUS PERFORMANCE

Mixer spurious products are measured in decibels relative to carrier from the IF output power level, unless otherwise noted. Spur values are (M × RF) - (N × LO).

## Harmonics of LO

LO Power = 10 dBm. Values are in decibels relative to carrier (dBc) below the input LO level measured at the RF port.

|                    |   N LO Spur at RF Port(dBc) |   N LO Spur at RF Port(dBc) |   N LO Spur at RF Port(dBc) | N LO Spur at RF Port(dBc)   |
|--------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|
| LO Frequency (GHz) |                           1 |                           2 |                           3 | 4                           |
| 6                  |                          42 |                          42 |                          57 | 91                          |
| 7                  |                          36 |                          47 |                          52 | 51                          |
| 9                  |                          39 |                          44 |                          72 | 71                          |
| 10                 |                          43 |                          55 |                          52 | 76                          |
| 12                 |                          36 |                          65 |                          72 | 84                          |
| 13                 |                          33 |                          57 |                          60 | N/A 1                       |

## M × N Spurious Outputs, IF = 100 MHz

RF = 5000 MHz, LO = 5100 MHz, LO power = +10 dBm, RF power = -10 dBm.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×RF |  0 | N/A 1  |      7 |     25 |     31 |     52 |     56 |
| M×RF |  1 | 5      |      0 |     12 |     29 |     40 |     43 |
| M×RF |  2 | 57     |     63 |     60 |     62 |     64 |     71 |
| M×RF |  3 | 77     |     60 |     49 |     50 |     52 |     65 |
| M×RF |  4 | 83     |     85 |     88 |     89 |     88 |     84 |
| M×RF |  5 | 82     |     84 |     85 |     87 |     79 |     78 |

RF = 8500 MHz, LO = 8600 MHz, LO power = +10 dBm, RF power = -10 dBm.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×RF |  0 | N/A 1  |      2 |     28 |     29 |     54 |     46 |
| M×RF |  1 | 12     |      0 |     23 |     46 |     68 |     50 |
| M×RF |  2 | 80     |     49 |     57 |     46 |     83 |     82 |
| M×RF |  3 | 88     |     82 |     75 |     69 |     68 |     85 |
| M×RF |  4 | 82     |     87 |     88 |     89 |     96 |     86 |
| M×RF |  5 | 80     |     85 |     86 |     88 |     95 |     95 |

<!-- image -->

RF = 12000 MHz, LO = 12100 MHz, LO power = +10 dBm, RF power = -10 dBm.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×RF |  0 | N/A 1  |     20 |     35 |     39 |     56 |      0 |
| M×RF |  1 | 9      |      0 |     26 |     59 |     62 |     61 |
| M×RF |  2 | 85     |     63 |     69 |     80 |     86 |     75 |
| M×RF |  3 | 75     |     84 |     77 |     61 |     77 |     86 |
| M×RF |  4 | 62     |     76 |     87 |     89 |     94 |     89 |
| M×RF |  5 | 0      |     63 |     75 |     85 |     87 |     95 |

## M × N Spurious Outputs, IF = 1000 MHz

RF = 5000 MHz, LO = 6000 MHz, LO power = +10 dBm, RF power = -10 dBm.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×RF |  0 | N/A 1  |     -3 |    +18 |    +31 |    +53 |    +46 |
| M×RF |  1 | -6     |      0 |     +6 |     +5 |    +27 |    +40 |
| M×RF |  2 | +41    |    +35 |    +31 |    +31 |    +35 |    +41 |
| M×RF |  3 | +40    |    +27 |     +5 |     +6 |      0 |     -6 |
| M×RF |  4 | +46    |    +53 |    +31 |    +18 |     -3 |      0 |
| M×RF |  5 | +67    |    +63 |    +39 |    +18 |     -3 |     -6 |

RF = 8500 MHz, LO = 9500 MHz, LO power = +10 dBm, RF power = -10 dBm.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×RF |  0 | N/A 1  |     -3 |    +24 |    +28 |    +48 |    +49 |
| M×RF |  1 | +11    |      0 |    +21 |    +40 |    +62 |    +52 |
| M×RF |  2 | +88    |    +58 |    +60 |    +47 |    +64 |    +77 |
| M×RF |  3 | +87    |    +82 |    +84 |    +71 |    +72 |    +80 |
| M×RF |  4 | +84    |    +84 |    +90 |    +94 |    +95 |    +95 |
| M×RF |  5 | +81    |    +87 |    +87 |    +89 |    +87 |    +95 |

RF = 12000 MHz, LO = 13000 MHz, LO power = +10 dBm, RF power = -10 dBm.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |      5 |
| M×RF |  0 | N/A 1  |     14 |     42 |     29 |     55 |      0 |
| M×RF |  1 | 10     |      0 |     28 |     63 |     55 |     60 |
| M×RF |  2 | 84     |     64 |     83 |     61 |     81 |     77 |
| M×RF |  3 | 75     |     84 |     84 |     75 |     73 |     80 |
| M×RF |  4 | 64     |     71 |     82 |     85 |     93 |     87 |
| M×RF |  5 | 0      |     67 |     73 |     85 |     87 |     88 |

## THEORY OF OPERATION

The HMC220B is a general-purpose, double balanced mixer in an 8-lead MINI\_SO\_EP , RoHS compliant package that can be used as an upconverter or a downconverter from 5 GHz to 12 GHz.

When used as a downconverter, the HMC220B downconverts RF between 5 GHz to 12 GHz to IF between dc and 4 GHz. When used as an upconverter, the mixer upconverts IF between dc and 4 GHz to RF between 5 GHz and 12 GHz.

The mixer provides excellent LO to RF and LO to IF isolation due to optimized balun structures. The HMC220B requires no external components or matching circuitry. The RoHS compliant HMC220B eliminates the need for wire bonding and is compatible with high volume, surface-mount manufacturing techniques.

## APPLICATIONS INFORMATION EVALUATION PCB INFORMATION

The PCB used in this application must use RF circuit design techniques. Signal lines must have 50 Ω impedance, and the package ground lead and exposed pad must be connected directly to the ground planes. The evaluation PCB shown in Figure 52 is available from Analog Devices, Inc., upon request.

<!-- image -->

## TYPICAL APPLICATIONS CIRCUIT

Figure 51. Typical Applications Circuit

<!-- image -->

Figure 52. EV1HMC220BMS8G Evaluation PCB

<!-- image -->

Table 5. EV1HMC220BMS8G PCB Components

|   Item | Description                                   | Reference Designator   |   Quantity | Manufacturer                         | Part Number    |
|--------|-----------------------------------------------|------------------------|------------|--------------------------------------|----------------|
|      1 | PCB, EV1HMC220BMS8G                           |                        |          1 | Analog Devices                       | 101828-8       |
|      2 | 2.92 mmSubminiature Version A (SMA) connector | J1, J2                 |          2 | SRI Connector Gage                   | 21-146-1000-01 |
|      3 | SMA connector, end launch                     | J3                     |          1 | Cinch Connectivity Solutions Johnson | 142-0701-851   |
|      4 | Device under test (DUT)                       | U1                     |          1 | Analog Devices                       | HMC220BMS8GE   |

15769-052

## OUTLINE DIMENSIONS

PKG-003371

<!-- image -->

Dimensions shown in millimeters

| Model 1        | Temperature Range   | MSL Rating 2   | Package Description                                             | Package Option   |
|----------------|---------------------|----------------|-----------------------------------------------------------------|------------------|
| HMC220BMS8GE   | -40°C to +85°C      | MSL1           | 8-Lead Mini Small Outline Package with Exposed Pad [MINI_SO_EP] | RH-8-1           |
| HMC220BMS8GETR | -40°C to +85°C      | MSL1           | 8-Lead Mini Small Outline Package with Exposed Pad [MINI_SO_EP] | RH-8-1           |
| EV1HMC220BMS8G |                     |                | Evaluation PCB Assembly                                         |                  |

## ORDERING GUIDE

1  The HMC220BMS8GE and HMC220BMS8GETR are RoHS Compliant Parts.

2  See the Absolute Maximum Ratings section.

<!-- image -->

08-02-2019-B