<!-- lastmod 2022-10-04 -->
<!-- image -->

## Data Sheet

## FEATURES

Nonreflective 50 Ω design Low insertion loss 1.5 dB typical to 6 GHz 2.5 dB typical to 12 GHz High isolation 50 dB typical to 6 GHz 45 dB typical to 12 GHz High input linearity P0.1dB: 28 dBm typical at VCTRL = -5 V P1dB: 30 dBm typical at VCTRL = -5 V IP3: 48 dBm High power handling 30 dBm insertion loss path 27 dBm hot switching Negative control voltage: -7 V to -3 V ESD rating: 250 V (Class 1A) HBM No low frequency spurious

24-lead, 4 mm × 4 mm LFCSP

## APPLICATIONS

Test instrumentation

Microwave radios and very small aperture terminals (VSATs) Military radios, radars, and electronic counter measures (ECMs) Telecommunication infrastructure

## GENERAL DESCRIPTION

The HMC232A is a nonreflective, SPDT, RF switch manufactured in the gallium arsenide (GaAs) process.

The HMC232A operates from 100 MHz to 12 GHz with better than 1.5 dB insertion loss and 50 dB of isolation at 6 GHz and better than 2.5 dB insertion loss and 45 dB of isolation at 12 GHz. The HMC232A has a nonreflective design, and the RF ports are internally terminated to 50 Ω.

## GaAs, SPDT Switch, Nonreflective, 100 MHz to 12 GHz

[HMC232A](https://www.analog.com/HMC232A?doc=HMC232Apdf)

<!-- image -->

The HMC232A switch operates using complementary negative control voltage logic lines of -7 V to -3 V and requires no bias supply.

The HMC232A comes in a 24-lead, 4 mm × 4 mm LFCSP and operates from -40°C to +85°C.

## [HMC232A](https://www.analog.com/HMC232A?doc=HMC232Apdf)

| TABLE OF CONTENTS Features .............................................................................................. 1                            | Typical Performance Characterics ..................................................6                                                                                                              |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1                                                  | Insertion Loss, Return Loss, and Isolation ................................6                                                                                                                      |
| Functional Block Diagram .............................................................. 1                                                              | Input Compression and Input Third-Order Intercept .............7                                                                                                                                  |
| General Description......................................................................... 1                                                         | Theory of Operation .........................................................................9                                                                                                    |
| Revision History ............................................................................... 2                                                     | RF Input and Output ....................................................................9                                                                                                         |
| Specifications..................................................................................... 3                                                  | Power Supply..................................................................................9                                                                                                   |
| Electrical Specifications............................................................... 3                                                             | Applications Information.............................................................. 10                                                                                                         |
| Absolute Maximum Ratings............................................................ 4                                                                 | Layout Considerations............................................................... 10                                                                                                           |
| Thermal Resistance...................................................................... 4                                                             | Board Layout............................................................................... 10                                                                                                    |
| Power Derating Curve ................................................................. 4                                                               | RF and Digital Controls ............................................................ 10                                                                                                           |
| Electrostatic Discharge (ESD) Ratings ...................................... 4                                                                         | Outline Dimensions....................................................................... 12                                                                                                      |
| ESD Caution.................................................................................. 4                                                        | Ordering Guide .......................................................................... 12                                                                                                      |
| Pin Configuration and Function Descriptions............................. 5                                                                             |                                                                                                                                                                                                   |
| Interface Schematics..................................................................... 5                                                            |                                                                                                                                                                                                   |
| REVISION HISTORY                                                                                                                                       |                                                                                                                                                                                                   |
| 10/2022-Rev. 01.0818 to Rev. B                                                                                                                         | Changes to Figure 7, Figure 8, and Figure 10................................6                                                                                                                     |
| This Hittite Microwave Products data sheet has been                                                                                                    | Added Figure 9 ..................................................................................6 Changes to Figure 11.........................................................................7 |
| reformatted to meet the styles and standards of Analog Devices, Inc.                                                                                   | Added Figure 12 to Figure 16 ..........................................................7                                                                                                          |
|                                                                                                                                                        | Added Figure 17 to Figure 18 ..........................................................8                                                                                                          |
| Changed -5 Vto -3 Vto -7 Vto -3 V.....................Throughout Changes to Features Section, Figure 1, and General Description                        | Added Theory of Operation Section, RF Input and Output                                                                                                                                            |
| Section................................................................................................ 1                                              | Section, and Power Supply Section.................................................9 Changes to Table 6.............................................................................9              |
| Changes to Electrical Specifications Section and Table 1 ........... 3                                                                                 | Added Applications Information Section, Layout                                                                                                                                                    |
| Changes to Table 2............................................................................ 4 Added Thermal Resistance Section, Table 3; Renumbered | Considerations Section, Board Layout Section, Figure 19, and RF and Digital Controls Section...................................................                                                   |
| Sequentially, Power Derating Curve Section, Figure 2;                                                                                                  | 10 Added Figure 22 ............................................................................. 11                                                                                               |
| Renumbered Sequentially, Electrostatic Discharge (ESD)                                                                                                 |                                                                                                                                                                                                   |
| Ratings Section, and Table 4 ...........................................................                                                               | Updated Outline Dimensions....................................................... 12                                                                                                              |
| 4 Added Figure 3, Interface Schematics Section, and Figure 5 ..... 5                                                                                   | Changes to Ordering Guide.......................................................... 12                                                                                                            |
| 5                                                                                                                                                      |                                                                                                                                                                                                   |
| Changes to Table 4 and Figure 6.....................................................                                                                   |                                                                                                                                                                                                   |

## SPECIFICATIONS ELECTRICAL SPECIFICATIONS

Digital control input voltage (VCTRL) = 0 V or -7 V to -3 V , and TC = 25°C in a 50 Ω system, unless otherwise noted.

## Table 1.

| Parameter                                              | Symbol          | Test Conditions/Comments                                                        |   Min |   Typ |    Max | Unit   |
|--------------------------------------------------------|-----------------|---------------------------------------------------------------------------------|-------|-------|--------|--------|
| FREQUENCY RANGE                                        |                 |                                                                                 |   100 |       | 12,000 | MHz    |
| INSERTION LOSS                                         |                 |                                                                                 |       |       |        |        |
| BetweenRFCandRF1orRFCandRF2(On)                        |                 | 100 MHz to 3 GHz                                                                |       |   1.4 |    1.7 | dB     |
|                                                        |                 | 100 MHz to 6 GHz                                                                |       |   1.5 |    1.8 | dB     |
|                                                        |                 | 100 MHz to 9 GHz                                                                |       |   2.0 |    2.3 | dB     |
|                                                        |                 | 100 MHz to 12 GHz                                                               |       |   2.5 |    3.1 | dB     |
| RETURN LOSS                                            |                 |                                                                                 |       |       |        |        |
| BetweenRFCandRF1orRFCandRF2(On)                        |                 | 100 MHz to 6 GHz                                                                |       |    18 |        | dB     |
|                                                        |                 | 100 MHz to 9 GHz                                                                |       |    14 |        | dB     |
|                                                        |                 | 100 MHz to 12 GHz                                                               |       |    12 |        | dB     |
| RF1 or RF2 (Off)                                       |                 | 100 MHz to 12 GHz                                                               |       |    14 |        | dB     |
| ISOLATION                                              |                 |                                                                                 |       |       |        |        |
| BetweenRFCandRF1orRCFandRF2(Off)                       |                 | 100 MHz to 3 GHz                                                                |    52 |    57 |        | dB     |
|                                                        |                 | 100 MHz to 6 GHz                                                                |    45 |    50 |        | dB     |
|                                                        |                 | 100 MHz to 9 GHz                                                                |    42 |    47 |        | dB     |
|                                                        |                 | 100 MHz to 12 GHz                                                               |    40 |    45 |        | dB     |
| SWITCHING CHARACTERISTICS                              |                 |                                                                                 |       |       |        |        |
| Rise Time and Fall Time                                | t RISE , t FALL | 10% to 90% of RF output                                                         |       |     6 |        | ns     |
| OnTime and OffTime                                     | t ON , t OFF    | 50% of triggeredV CTRL to 90% of RF output                                      |       |    25 |        | ns     |
| INPUT LINEARITY 1                                      |                 | 500 MHz to 12 GHz                                                               |       |       |        |        |
| Input Compression                                      |                 |                                                                                 |       |       |        |        |
| 0.1 dB                                                 | P0.1dB          | V CTRL = -3V                                                                    |       |    22 |        | dBm    |
|                                                        |                 | V CTRL = -5V                                                                    |       |    28 |        | dBm    |
| 1 dB                                                   | P1dB            | V CTRL = -3V                                                                    |       |    26 |        | dBm    |
|                                                        |                 | V CTRL = -5V                                                                    |       |    30 |        | dBm    |
| Intermodulation Distortion Input Third-Order Intercept | IIP3            | V CTRL = -3V to -7V, two tone input power = 10 dBmeach tone, Δfrequency = 1 MHz |       |    48 |        | dBm    |
| DIGITAL CONTROL INPUTS                                 |                 | A and B pins                                                                    |       |       |        |        |
| Voltage                                                |                 |                                                                                 |       |       |        |        |
| Low                                                    | V INL           |                                                                                 |  -0.2 |       |      0 | V      |
| High                                                   | V INH           |                                                                                 |    -7 |       |     -3 | V      |
| Current                                                |                 |                                                                                 |       |       |        |        |
| Low                                                    | I INL           |                                                                                 |       |   0.2 |        | µA     |
| High                                                   | I INH           |                                                                                 |       |    20 |        | µA     |
| RECOMMENDED OPERATING CONDITIONS                       |                 |                                                                                 |       |       |        |        |
| RF Input Power                                         | P IN            | V CTRL = -5 V, frequency = 500 MHz to 12 GHz, T C = 85°C                        |       |       |        |        |
| Insertion Loss Path                                    |                 | RF signal is applied to RFC or through connected RF1 or RF2                     |       |    30 |        | dBm    |
| Terminated Path                                        |                 | RF signal is applied to the terminated RF1 or RF2                               |       |       |     23 | dBm    |
| Hot Switching                                          |                 | RF signal is present at RFC while switching                                     |       |       |     27 | dBm    |
| T C                                                    |                 |                                                                                 |   -40 |       |    +85 | °C     |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                                 | Rating          |
|-------------------------------------------------------------------------------------------|-----------------|
| V CTRL                                                                                    | -7.5V to +1V    |
| RF Input Power 1 (V CTRL = -5 V, frequency= 500MHzto12GHzatT C =85°C) Insertion Loss Path | 30.9 dBm        |
| Terminated Path                                                                           | 23.7 dBm        |
| Hot Switching                                                                             | 27.5 dBm        |
| Temperature                                                                               |                 |
| Junction, T J                                                                             | 150°C           |
| Storage Range                                                                             | -65°C to +150°C |
| Reflow                                                                                    | 260°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal resistance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case bottom (channel to package bottom) thermal resistance.

Table 3. Thermal Resistance

| PackageType     |   θ JC 1 | Unit   |
|-----------------|----------|--------|
| CP-24-16        |          |        |
| Through Path    |     88.5 | °C/W   |
| Terminated Path |      277 | °C/W   |

## POWER DERATING CURVE

Figure 2. Power Derating vs. Frequency over VCTRL, Low Frequency Detail, TC = 85°C

<!-- image -->

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for HMC232A

## Table 4. HMC232A, 24-Lead LFCSP

| ESD Model   |   WithstandThreshold (V) | Class   |
|-------------|--------------------------|---------|
| HBM         |                      250 | 1A      |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.                            | Mnemonic   | Description                                                                                                                                                |
|------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 6, 7, 11 to 14, 17 to 20, 24 | NIC        | Not Internally Connected. However, all data shown herein was measured with the NIC pins connected to RF or DC ground externally.                           |
| 3, 5, 8, 10, 21, 23                | GND        | Ground. The GNDpins must be connected to the RF and dc ground of the PCB. See Figure 4 for the interface schematic.                                        |
| 4                                  | RFC        | RF CommonPort.The RFC pin is dc-coupled and matched to 50 Ω. A dc blocking capacitor is required on the RFC pin. See Figure 5 for the interface schematic. |
| 9                                  | RF1        | RF Port 1.The RF1 pin is dc-coupled and matched to 50 Ω. A dc blocking capacitor is required on the RF1 pin. See Figure 5 for the interface schematic.     |
| 15                                 | B          | Logic Control Input B. See Figure 6 for the control input interface schematic. See Table 6 for the truth table.                                            |
| 16                                 | A          | Logic Control Input A. See Figure 6 for the control input interface schematic. See Table 6 for the truth table.                                            |
| 22                                 | RF2        | RF Port 2.The RF2 pin is dc-coupled and matched to 50 Ω. A dc blocking capacitor is required on the RF2 pin. See Figure 5 for the interface schematic.     |
|                                    | EPAD       | ExposedPad.TheexposedpadmustbeconnectedtotheRFanddcgroundofthePCB.                                                                                         |

## INTERFACE SCHEMATICS

Figure 4. GND Interface Schematic

<!-- image -->

Figure 5. RFC, RF1, and RF2 Interface Schematic

<!-- image -->

## NOTES

1. NIC = NOT INTERNALLY CONNECTED. HOWEVER, ALL DATA SHOWN HEREIN WAS MEASURED WITH THE NIC PINS CONNECTED TO RF OR DC GROUND EXTERNALLY.
2. EXPOSED PAD. THE EXPOSED PAD MUST BE CONNECTED TO RF AND DC GROUND OF THE PCB.

Figure 3. Pin Configuration (Top View)

25187-003

<!-- image -->

Figure 6. A and B Interface Schematic

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERICS

## INSERTION LOSS, RETURN LOSS, AND ISOLATION

VCTRL = 0 V or -7 V to -3 V , and TC = 25°C in a 50 Ω system, unless otherwise noted.

<!-- image -->

Figure 7. Insertion Loss vs. Frequency over Temperature

<!-- image -->

Figure 8. Return Loss vs. Frequency

Figure 9. Insertion Loss Between RFC and RFx vs. Frequency

<!-- image -->

Figure 10. Isolation Between RFC and RFx vs. Frequency

<!-- image -->

## INPUT COMPRESSION AND INPUT THIRD-ORDER INTERCEPT

VCTRL = 0 V or -7 V to -3 V , and TC = 25°C in a 50 Ω system, unless otherwise noted.

<!-- image -->

Figure 11. P1dB and P0.1dB Input Compression vs. Frequency, VCTRL = -5 V

<!-- image -->

Figure 12. P1dB and P0.1dB Input Compression vs. Frequency, VCTRL = -3 V

<!-- image -->

Figure 13. P1dB Input Compression Point vs. Frequency over Temperature, VCTRL = -5 V

<!-- image -->

Figure 14. P1dB and P0.1dB Input Compression vs. Frequency (Low Frequency Detail), VCTRL = -5 V

<!-- image -->

Figure 15. P1dB and P0.1dB Input Compression vs. Frequency (Low Frequency Detail), VCTRL = -3 V

<!-- image -->

Figure 16. P1dB Input Compression Point vs. Frequency over Temperature VCTRL = -3 V

<!-- image -->

<!-- image -->

Figure 17. Input IP3 vs. Frequency over VCTRL

<!-- image -->

Figure 18. Input IP3 vs. Frequency over VCTRL (Low Frequency Detail)

<!-- image -->

## THEORY OF OPERATION

The HMC232A operates using complementary negative control voltage logic lines and requires no bias supply. The two logic control input pins (A and B) control the state of the RF paths, determining which RFx port is in the insertion loss state and which path is in the isolation state (see Table 6).

## RF INPUT AND OUTPUT

All of the RFx ports (RFC, RF1, and RF2) are dc-coupled to 0 V , and no dc blocking capacitors are required at the RFx ports when the RF potential is equal to 0 V .

The RFx ports are internally matched to 50 Ω. Therefore, external matching networks are not required.

The HMC232A is bidirectional, therefore, an RF input signal (RFIN) can be applied to the RFC port or to the RF1 port or the RF2 port.

Table 6. Control Voltage Truth Table

| Digital Control Inputs   | Digital Control Inputs   | RF Paths            | RF Paths            |
|--------------------------|--------------------------|---------------------|---------------------|
| A                        | B                        | RF1 to RFC          | RF2 to RFC          |
| High                     | Low                      | Insertion loss (on) | Isolation (off)     |
| Low                      | High                     | Isolation (off)     | Insertion loss (on) |
| Low                      | Low                      | Undefined           | Undefined           |
| High                     | High                     | Undefined           | Undefined           |

<!-- image -->

The insertion loss path conducts the RF signal between the selected RF throw port and the RF common port. The isolation path provides high loss between the insertion loss path and the unselected RF throw port, which is nonreflective, by using an internal 50 Ω termination resistor.

## POWER SUPPLY

The HMC232A requires negative voltage applied to the logic control input pins (A and B). Bypassing capacitors are recommended on the supply lines to filter high frequency noise.

The ideal power-up sequence follows:

1. Connect to GND.
2. Power up the digital control inputs. The relative order of the digital control inputs is not important.
3. Apply an RF input signal to RFC, RF1, or RF2.

The ideal power-down sequence is the reverse order of the power-up sequence.

<!-- image -->

## APPLICATIONS INFORMATION

## LAYOUT CONSIDERATIONS

All measurements in this data sheet are measured on the EV1HMC232ALP4 evaluation board. The design of this evaluation board can serve as a layout recommendation for applications.

## BOARD LAYOUT

The HMC232A is a 4-layer board. The outer copper (Cu) layers are 0.7 mil plated and are separated by dielectric materials. Figure 19 shows the HMC232A board stack up.

<!-- image -->

25187-020

Figure 19. HMC232A Stack Up

All RF and dc traces are routed on the top copper layer, and the inner and bottom layers are ground planes that provide a solid ground for the RF transmission lines. The top dielectric material (H) is 10 mil Rogers RO4350, which allows optimal RF performance. The middle and bottom dielectric layers provide mechanical strength. The overall board thickness is ~62 mil, which allows Subminiature Version A (SMA) connectors to be connected at the board edges.

## RF AND DIGITAL CONTROLS

The RF transmission lines are designed using a coplanar waveguide (CPWG) model with a width of 16 mil and a ground spacing (G) of 13 mil and have a characteristic impedance of 50 Ω. For optimal RF and thermal grounding, as many plated through vias as possible are arranged around the transmission lines and under the exposed pad of the package.

Figure 20 shows the top view of the populated EV1HMC232ALP4, which is available from Analog Devices upon request (see the Ordering Guide).

Figure 20. Populated EV1HMC232ALP4-Top View

<!-- image -->

The RF input and output ports (RFC, RF1, and RF2) are connected through 50 Ω transmission lines to the SMA launchers. On the traces of the logic control input pins (A and B), a 100 pF bypass capacitor was used to filter high frequency noise. Figure 21 shows the suggested driver circuit.

Figure 22 and Table 7 show the typical application circuit and bill of materials for the HMC232A, respectively.

Figure 21. Suggested Driver Circuit (VZ Is the Voltage of the Zener Diode, and IZT Is the Current of the Zener Diode.)

<!-- image -->

Figure 22. Typical Application Circuit

<!-- image -->

## Table 7. Evaluation Board Bill of Materials

| Component   | Description                                                                |
|-------------|----------------------------------------------------------------------------|
| J1 to J3    | SMA connectors                                                             |
| J4 to J6    | DC pins                                                                    |
| C1, C2      | 100 pF capacitors, 0603 package                                            |
| U1          | GaAs, SPDT switch, nonreflective, 100 MHz to 12 GHz, HMC232A               |
| PCB         | Evaluation PCB, Analog Devices, 107602, circuit board material Rogers 4350 |

<!-- image -->

<!-- image -->

## OUTLINE DIMENSIONS

PKG-004926/004942

<!-- image -->

Figure 23. 24-Lead Lead Frame Chip Scale Package [LFCSP] 4 mm × 4 mm Body and 0.85 mm Package Height (CP-24-16) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description                           | Package Option   |
|---------------|---------------------|-----------------------------------------------|------------------|
| HMC232ALP4E   | -40°C to +85°C      | 24-Lead Lead Frame Chip Scale Package [LFCSP] | CP-24-16         |
| HMC232ALP4ETR | -40°C to +85°C      | 24-Lead Lead Frame Chip Scale Package [LFCSP] | CP-24-16         |
| EV1HMC232ALP4 |                     | Evaluation Board                              |                  |

<!-- image -->

09-10-2018-C