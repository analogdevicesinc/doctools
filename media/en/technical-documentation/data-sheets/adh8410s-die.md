<!-- lastmod 2022-02-17 -->
<!-- image -->

## Scope

This specification documents the detail requirements for space qualified die per MIL-PRF-38534 class K except as modified herein.

The manufacturing flow described in the SPACE DIE BROCHURE is to be considered a part of this specification.

This datasheet specifically details the space grade version of this product. A more detailed operational description and a complete datasheet for commercial product grades can be found at http://www.analog.com/HMC8410-DIE

- The complete part number(s) of this specification follows:

Specific Part Number

## Description

ADH8410-000C

0.01 GHz to 10 GHz, GaAs, pHEMT, MMIC, Low Noise Amplifier Die

## Die Information

## 0.01 GHz to 10 GHz, Low Noise Amplifier Die

ADH8410S

| Die Size            | Die Thickness   | BondPadandBackside Metallization   |
|---------------------|-----------------|------------------------------------|
| 24 mils x 37.2 mils | 4mils           | Au                                 |

<!-- image -->

- 1 RFIN/VGG1 (DC-coupled and matched to 50 Ohms) - See Figure 1 in Section 9.0 for interface schematic
- 2, 3 GND (Ground pads on top of die can optionally be connected to RF/DC GND)
- 4 RFOUT/VDD (DC-coupled and matched to 50 Ohms) - See Figure 2 in Section 9.0 for interface schematic

Die Bottom (Must be connected to RF/DC GND)

## ADH8410S

## Absolute Maximum Ratings

Drain Bias Voltage (VDD)  .........................................................................................   +7 V dc

Radio Frequency (RF) Input Power (RFIN)  ............................................................   +20 dBm

Continuous Power Dissipation TA = 85  C (Derate 7.95 mW/  C above +85 

C) .......   0.715 W

Channel Temperature   ..............................................................................................   175

 C

Storage Temperature Range   ...................................................................................   -65

 C to +150  C

ESD Sensitivity (HBM)  ............................................................................................   Class 1B passed 500 V

Thermal Resistance (Junction to die bottom)  .........................................................   125.85  C/W

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

## Die e Qualification

In accordance with class-K version of MIL-PRF-38534, Appendix C, Table C-II, except as modified herein.

- (a)  Pre-screen test post assembly required prior to die qualification, to remove all assembly related rejects.
- (b)  Mechanical Shock or Constant Acceleration not performed.
- (c)  Interim and post burn-in electrical tests will include static tests screened at +25C only.

| TableI-DieElectrical Characteristics   | TableI-DieElectrical Characteristics   | TableI-DieElectrical Characteristics      | TableI-DieElectrical Characteristics   | TableI-DieElectrical Characteristics   | TableI-DieElectrical Characteristics   |
|----------------------------------------|----------------------------------------|-------------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------|
|                                        |                                        |                                           | Limits                                 | Limits                                 |                                        |
| Parameter                              | Symbol                                 | Conditions1/2/ Unless otherwise specified | Min                                    | Max                                    | un                                     |
| QuiescentSupply Current                |                                        | No RF in                                  |                                        | 70                                     | mA                                     |
| Gain                                   | S21                                    | 0.3GHz&3GHz                               | 17.5                                   |                                        | dB                                     |
| Gain                                   | S21                                    | 5GHz&8GHz                                 | 15.5                                   |                                        | dB                                     |
| Gain                                   | S21                                    | 10GHz                                     | 13                                     |                                        | dB                                     |
| Noise Figure                           | NF                                     | 0.3GHz                                    |                                        | 2.5                                    | dB dB                                  |
| Noise Figure                           | NF                                     | 3GHz                                      |                                        | 1.6                                    | dB dB                                  |
| Noise Figure                           | NF                                     | 5GHz&8GHz                                 |                                        | 1.9                                    | dB dB                                  |
| Noise Figure                           | NF                                     | 10GHz                                     |                                        | 2.2                                    | dB dB                                  |

## ADH8410S

| Table Il - Electrical Characteristics for Qualification Samples   | Table Il - Electrical Characteristics for Qualification Samples   | Table Il - Electrical Characteristics for Qualification Samples   | Table Il - Electrical Characteristics for Qualification Samples   | Table Il - Electrical Characteristics for Qualification Samples   | Table Il - Electrical Characteristics for Qualification Samples   | Table Il - Electrical Characteristics for Qualification Samples   | Table Il - Electrical Characteristics for Qualification Samples   |
|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|
|                                                                   |                                                                   |                                                                   |                                                                   | Limits                                                            | Limits                                                            |                                                                   |                                                                   |
| Parameter                                                         | Symbol                                                            | Conditions1/2/ Unless otherwise specified                         | Sub-Group                                                         | Min                                                               | Max                                                               | Unit                                                              |                                                                   |
| Quiescent Supply Current                                          | IDo                                                               | No RF in                                                          | 1,2,3                                                             |                                                                   | 70                                                                | mA                                                                |                                                                   |
|                                                                   | S21                                                               | 0.3GHz& 3GHz                                                      |                                                                   | 17.5 17.5                                                         |                                                                   | dB                                                                |                                                                   |
| Gain                                                              | S21                                                               | 5GHz&8GHz                                                         | 4, 5,6                                                            | 15.5 15.5                                                         |                                                                   | dB                                                                |                                                                   |
| Gain                                                              | S21                                                               | 10GHz                                                             |                                                                   | 13 13                                                             |                                                                   | dB                                                                |                                                                   |
| Noise Figure Noise Figure                                         | NF                                                                | 0.3GHz                                                            |                                                                   |                                                                   | 2.5                                                               | dB                                                                |                                                                   |
| Noise Figure Noise Figure                                         | NF                                                                | 3GHz                                                              | 4, 5,6 4,5,6                                                      |                                                                   | 1.6                                                               | dB                                                                |                                                                   |
| Noise Figure Noise Figure                                         | NF                                                                | 5GHz                                                              |                                                                   |                                                                   | 1.9                                                               | dB                                                                |                                                                   |
| Noise Figure Noise Figure                                         | NF                                                                | 8GHz                                                              | 4,6 4,6                                                           |                                                                   | 1.9                                                               | dB                                                                |                                                                   |
| Noise Figure Noise Figure                                         | NF                                                                | 8GHz                                                              | 5 5                                                               |                                                                   | 2.4                                                               | dB                                                                |                                                                   |
| Noise Figure Noise Figure                                         | NF                                                                | 10GHz                                                             | 4,6 4,6                                                           |                                                                   | 2.2                                                               | dB                                                                |                                                                   |
| Noise Figure Noise Figure                                         | NF                                                                | 10GHz                                                             | 5 5                                                               |                                                                   | 2.7                                                               | dB                                                                |                                                                   |

Table II Notes:

1/ TA nom = +25ºC, TA max = +85ºC, TA min = -40ºC and VDD = 5 V nom.

- 2/ Adjust VGG1 to achieve IDQ = 65 mA typical at TA = -40ºC, +25ºC and +85ºC. Each qualification device shall use the individual VGG1 voltage established at pre burn-in throughout all +25ºC qualification testing.

| Table Ill - Burn-in and operating life test delta parameters 1/ 2/ 3/ 4/   | Table Ill - Burn-in and operating life test delta parameters 1/ 2/ 3/ 4/   | Table Ill - Burn-in and operating life test delta parameters 1/ 2/ 3/ 4/   | Table Ill - Burn-in and operating life test delta parameters 1/ 2/ 3/ 4/   |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Parameter                                                                  | Symbol                                                                     | Delta                                                                      | Units                                                                      |
| QuiescentSupplyCurrent                                                     | IDQ                                                                        | ±10                                                                        | %                                                                          |
| Gain                                                                       | S21                                                                        | ± 1.0                                                                      | dB                                                                         |

Table III Notes:

- 1/ 240 hour burn in and 1000 hour life test end point electrical parameters.
- 2/ Deltas are performed at TA = +25°C only.

3/ Product is tested in accordance with conditions in Table II.

4/ Table II limits will not be exceeded.

## ADH8410S

<!-- image -->

|   PAD | DESCRIPTION   | PAD SIZE                  |
|-------|---------------|---------------------------|
|     1 | RFIN/VGG1     | .0032[.081] X .0060[.152] |
|     2 | GND           | .0031[.079] X .0037[.094] |
|     3 | GND           | .0031[.079] × .0037[.094] |
|     4 | RFOUT/VDD     | .0032[.081] X .0060[.152] |

## NOTES:

- ALL DIMENSIONS ARE IN INCHES [MM] 1.
2. DIE THICKNESS IS .0O4"
3. BOND PAD METALIZATION:GOLD
4. BACKSIDE METALIZATION:GOLD
5. BACKSIDE METAL IS GROUND
6. OVERALL DIE SIZE ±.002"
7. UNLABELED PADS ARE N/A

Figure 1 and Figure 2 show the equivalent die interface schematics. Figure 3 shows the application circuit that uses optional external bias Tees. Follow MMIC Amplifier Biasing Procedure for proper power up and power down sequence. Power supply decoupling capacitors on both VGG1 and VDD as close to the device as possible are required for optimal performance.

Figure 4 shows the assembly diagram. Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring the radio frequency to and from the chip, implementing 50 Ω transmission lines using a microstrip or coplanar waveguide on 0.127 mm (5 mil) thick alumina, thin film substrates is recommended (see Figure 5). When using 0.254 mm (10 mil) thick alumina, it is recommended that the die be raised to ensure that the die and substrate surfaces are coplanar. Raise the die 0.150 mm (6 mil) to ensure that the surface of the die is coplanar with the surface of the substrate. To accomplish this, attach the 0.102 mm (4 mil) thick die to a 0.150 mm (6 mil) thick, molybdenum (Mo) heat spreader (moly tab), which can then be attached to the ground plane (see Figure 6).

<!-- image -->

Figure 1. RFIN/VGG1 Interface Schematic

<!-- image -->

Figure 2. RFOUT/VDD Interface Schematic

Figure 3. Application Circuit

<!-- image -->

Figure 4. Assembly Diagram

<!-- image -->

## ADH8410S

Figure 5. Die without Moly Tab

<!-- image -->

<!-- image -->

## Die Packaging Information

Note:

Figure 6. Die with Moly Tab

| 1/   |
|------|

1/ For alternate packaging information, contact Analog Devices Inc.

| Rev   | Description of Change                          | Date              |
|-------|------------------------------------------------|-------------------|
| A     | Productionrelease.                             | 24-September-2019 |
| B     | Add exceptionnotetoSection5and remove Section7 | 25-October-2019   |

<!-- image -->