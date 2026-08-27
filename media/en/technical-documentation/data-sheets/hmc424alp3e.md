<!-- lastmod 2020-10-13 -->
<!-- image -->

## Data Sheet

## FEATURES

Attenuation range: 0.5 dB (LSB) steps to 31.5 dB ±0.5 dB typical step error Low insertion loss: 2.8 dB at 4 GHz High linearity at VEE = -3 V Input P0.1dB: 22 dBm typical Input IP3: 45 dBm typical High RF input power handling: 25 dBm maximum Low relative phase: 30° typical at 6.0 GHz Single-supply operation: -3 V to -5 V

16-lead, 3 mm × 3 mm LFCSP package

## APPLICATIONS

Cellular infrastructure Microwave radios and very small aperture terminals (VSATs) Test equipment and sensors Intermediate frequency (IF) and RF designs Military and space

## GENERAL DESCRIPTION

The HMC424ALP3E is a broadband, 6-bit, gallium arsenide (GaAs), digital attenuator in low cost, leadless surface-mount package with a 31.5 dB attenuation control range in 0.5 dB steps.

The HMC424ALP3E offers excellent attenuation accuracy of ±(0.2 dB + 4% of attenuation state) and high input linearity with a typical insertion loss of less than 4 dB over the specified frequency range from 0.1 GHz to 13.0 GHz. The attenuator bit values are 0.5 dB (LSB), 1 dB, 2 dB, 4 dB, 8 dB, and 16 dB for a total attenuation of 31.5 dB with a ±0.5 dB typical step error.

## 0.1 GHz to 13.0 GHz, 0.5 dB LSB, 6-Bit, GaAs Digital Attenuator

[HMC424ALP3E](https://www.analog.com/hmc424alp3e?doc=hmc424alp3e.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The device allows a user to program the attenuation state via six parallel control inputs toggled between 0 V and VEE.

The HMC424ALP3E operates with a single negative supply voltage from -3 V to -5 V , and requires an external level shifter to interface with a CMOS/transistor to transistor logic (TTL) interface.

The HMC424ALP3E comes in a RoHS compliant, compact, 3 mm × 3 mm, 16-lead lead frame chip scale package (LFCSP).

## [HMC424ALP3E](https://www.analog.com/hmc424alp3e?doc=hmc424alp3e.pdf)

| TABLE OF CONTENTS Features .............................................................................................. 1                                                            | Insertion Loss, Return Loss, State Error, Step Error, and                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1                                                                                  | Relative Phase ................................................................................6                                            |
| Functional Block Diagram .............................................................. 1                                                                                              | Input Power Compression and Third-Order Intercept............8                                                                              |
| General Description......................................................................... 1                                                                                         | Theory of Operation ...................................................................... 10                                               |
| Revision History ............................................................................... 2                                                                                     | Power Supply............................................................................... 10                                              |
| Specifications..................................................................................... 3                                                                                  | RF Input and Output ................................................................. 10                                                    |
| Absolute Maximum Ratings............................................................ 4                                                                                                 | Applications Information.............................................................. 11                                                   |
| Thermal Resistance...................................................................... 4                                                                                             | Evaluation Board........................................................................ 11                                                 |
| ESD Caution.................................................................................. 4                                                                                        | Outline Dimensions....................................................................... 13                                                |
| Pin Configuration and Function Descriptions............................. 5                                                                                                             | Ordering Guide .......................................................................... 13                                                |
| Interface Schematics..................................................................... 5                                                                                            |                                                                                                                                             |
| Typical Performance Characteristics ............................................. 6                                                                                                    |                                                                                                                                             |
| REVISION HISTORY                                                                                                                                                                       |                                                                                                                                             |
| 9 /2020-Rev. 00.1113 to Rev.A                                                                                                                                                          | Added Figure 13 and Figure 14 .......................................................7                                                      |
| This Hittite Microwave Products data sheet has been reformatted to                                                                                                                     | Changes to Figure 15 and Figure 16 ...............................................7 Added Input Power Compression and Third-Order Intercept |
| meet the styles and standards of Analog Devices, Inc.                                                                                                                                  | Section.................................................................................................8                                   |
| Changed N/C to NIC....................................................Throughout                                                                                                       | Added Figure 17 to Figure 22 ..........................................................8                                                    |
| Changes to Title, Features Section, Applications Section, and                                                                                                                          | Added Figure 23 to Figure 28 ..........................................................9                                                    |
| General Description Section........................................................... 1                                                                                               | Added Theory of Operation Section, Power Supply Section, and                                                                                |
| Changes to Table 1............................................................................ 3                                                                                       | RF Input and Output Section........................................................ 10                                                      |
| Deleted Bias Voltage &Current Table and Control Voltage                                                                                                                                | Changes to Figure 29 and Table 5 ................................................ 10                                                        |
| Table; Renumbered Sequentially .................................................... 3 Changes to Table 2............................................................................ 4 | Added Applications Information Section ................................... 11                                                               |
| Added Figure 2, Thermal Resistance Section, and Table 3;                                                                                                                               | Changed Evaluation PCBSection to Evaluation Board Section ... 11                                                                            |
|                                                                                                                                                                                        | Changes to Evaluation Board Section.......................................... 11                                                            |
| Renumbered Sequentially................................................................ 4                                                                                              | Added Figure 31 ............................................................................. 12                                            |
| Added Figure 3 and Figure 4........................................................... 5                                                                                               | Changes to Table 6.......................................................................... 12                                             |
| Deleted GNDInterface Schematic and N/CInterface Schematic... 5                                                                                                                         | Updated Outline Dimensions....................................................... 13                                                        |
| Changes to Table 4 and Figure 5..................................................... 5                                                                                                 | Changes to Ordering Guide.......................................................... 13                                                      |
| Added Insertion Loss, Return Loss, State Error, Step Error, and                                                                                                                        |                                                                                                                                             |
| Changes to Figure 7 to Figure 12.................................................... 6                                                                                                 |                                                                                                                                             |

## SPECIFICATIONS

Supply voltage (VEE) = -3 V to -5 V , control input voltage (VCTL) = 0 V or VEE, TCASE = 25°C, 50 Ω system, unless otherwise noted.

Table 1.

| Parameter                                    | Symbol          | Test Conditions/Comments                                          | Min                             | Typ   | Max                             | Unit    |
|----------------------------------------------|-----------------|-------------------------------------------------------------------|---------------------------------|-------|---------------------------------|---------|
| FREQUENCY RANGE                              |                 |                                                                   | 0.1                             |       | 13.0                            | GHz     |
| INSERTION LOSS                               | IL              | 0.1 GHz to 4.0 GHz                                                |                                 | 2.8   | 3.3                             | dB      |
|                                              |                 | 4.0 GHz to 8.0 GHz                                                |                                 | 3.3   | 3.8                             |         |
|                                              |                 | 8.0 GHz to 13.0 GHz                                               |                                 | 3.9   | 4.4                             | dB      |
| ATTENUATION                                  |                 | 0.1 GHz to 13.0 GHz                                               |                                 |       |                                 |         |
| Range                                        |                 | Between minimum and maximum attenuation states                    |                                 | 31.5  |                                 | dB      |
| Step Size                                    |                 | Between any successive attenuation states                         |                                 | 0.5   |                                 | dB      |
| Step Error                                   |                 | Between any successive attenuation states                         |                                 | ±0.5  |                                 | dB      |
| State Error                                  |                 | All attenuation states, referenced to insertion loss state        |                                 |       |                                 |         |
|                                              |                 | 0.1 GHz to 8.0 GHz                                                | -(0.2 + 4%of attenuation state) |       | +(0.2 + 4%of attenuation state) | dB      |
|                                              |                 | 8.0 GHz to 13.0 GHz                                               | -(0.3 + 5%of attenuation state) |       | +(0.3 + 5%of attenuation state) | dB      |
| RETURNLOSS (RFINandRFOUT)                    |                 | All attenuation states, 0.1 GHz to 13.0 GHz                       |                                 | 13    |                                 | dB      |
| RELATIVE PHASE                               |                 | Between minimum and maximum attenuation states 0.1 GHz to 6.0 GHz |                                 |       |                                 |         |
|                                              |                 |                                                                   |                                 | 30    |                                 | Degrees |
|                                              |                 | 6.0 GHz to 13.0 GHz                                               |                                 | 70    |                                 | Degrees |
| SWITCHING CHARACTERISTICS Rise and Fall Time | t RISE , t FALL | Between all attenuation states 10% to 90% of RF output            |                                 | 30    |                                 | ns      |
| On and Off Time                              | t ON , t OFF    | 50%V CTL to 90% of RF output                                      |                                 | 50    |                                 | ns      |
| INPUT LINEARITY 1                            |                 | All attenuation states, 500 MHz to 6.0 GHz                        |                                 |       |                                 |         |
| 0.1 dB Compression                           | P0.1dB          | V EE = -3V                                                        |                                 | 22    |                                 | dBm     |
|                                              |                 | V EE = -5V                                                        |                                 | 23    |                                 | dBm     |
| Third-Order Intercept                        | IP3             | V EE = -3V to -5V,10dBmper tone,1 MHz spacing                     |                                 | 45    |                                 | dBm     |
| SUPPLY CURRENT                               | I DD            | V EE = -3V to -5V                                                 |                                 | 2     | 5                               | mA      |
| DIGITAL CONTROL INPUTS                       |                 | V1 toV6                                                           |                                 |       |                                 |         |
| Voltage                                      |                 |                                                                   |                                 |       |                                 |         |
| Low                                          | V INL           | V EE = -3V                                                        | -1.0                            |       | 0                               | V       |
|                                              |                 | V EE = -5V                                                        | -3.0                            |       | 0                               | V       |
| High                                         | V INH           | V EE = -3V                                                        | -3.0                            |       | -2.2                            | V       |
|                                              |                 | V EE = -5V                                                        | -5.0                            |       | -4.2                            | V       |
| Current                                      |                 | V EE = -3V to -5V                                                 |                                 |       |                                 |         |
| Low                                          | I INL           |                                                                   |                                 | 35    |                                 | µA      |
| High                                         | I INH           |                                                                   |                                 | 1     |                                 | µA      |

1  Input linearity performance degrades at frequencies less than 250 MHz; see Figure 17 to Figure 28.

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                                            | Rating          |
|------------------------------------------------------------------------------------------------------|-----------------|
| Supply Voltage, V EE                                                                                 | -7V             |
| Digital Control Input Voltage                                                                        | V EE - 0.5V     |
| RF Input Power 1 (All Attenuation States, f = 800 MHz to 13.0 GHz, T CASE = 85°C, V EE = -3V to -5V) | 25dBm           |
| Continuous Power Dissipation, P DISS (T CASE = 85°C)                                                 | 0.56W           |
| Temperature                                                                                          |                 |
| Junction, T J                                                                                        | 150°C           |
| Storage                                                                                              | -65°C to +150°C |
| Reflow 2 ((Moisture Sensitivity Level 3 (MSL3) Rating)                                               | 260°C           |
| ESD Sensitivity                                                                                      |                 |
| Human Body Model (HBM)                                                                               | 250V (Class 1A) |

- 1 For power derating at frequencies less than 800 MHz, see Figure 2.

2  See the Ordering Guide for more information.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Only one absolute maximum rating can be applied at any one time.

Figure 2. Power Derating at Frequencies Less than 0.8 GHz

<!-- image -->

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JC | Unit   |
|---------------|--------|--------|
| CP-16-50 1    |    330 | °C/W   |

- 1  Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with nine thermal vias. See JEDEC JESD51.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

HMC424ALP3E

<!-- image -->

Table 4. Pin Function Descriptions

| Pin No.      | Mnemonic   | Description                                                                                                                                                     |
|--------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 10, 12 | GND        | Ground. These pins must be connected to ground.                                                                                                                 |
| 2            | RFIN       | Attenuator RF Input. This pin is dc-coupled and ac matched to 50 Ω. An external dc blocking capacitor is required if the RF line potential is not equal to 0 V. |
| 4 to 9       | V1 toV6    | Parallel Control Voltage Inputs. These pins select the required attenuation (see Table 5). There is an internal pull-down resistor on these pins toV EE .       |
| 11           | RFOUT      | Attenuator RF Output. This pin is dc-coupled and ac matched to 50 Ω. An external dc blocking capacitor is required if the RF line potential is not equal to 0V. |
| 13, 14, 16   | NIC        | Not Internally Connected. NIC can be connected to ground.                                                                                                       |
| 15           | VEE        | Power Supply.                                                                                                                                                   |
|              | EPAD       | Exposed Pad. The EPAD must be connected to ground.                                                                                                              |

## INTERFACE SCHEMATICS

Figure 4. RFIN, RFOUT Interface Schematic

<!-- image -->

Figure 5. V1 to V6 Pin Interface Schematic

<!-- image -->

## NOTES

1. NIC = NOT INTERNALLY CONNECTED. NIC CAN BE CONNECTED TO GROUND.
2. EXPOSED PAD. THE EPAD MUST BE CONNECTED TO GROUND.

Figure 3. Pin Configuration

23094-003

Figure 6. VEE Pin Interface

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## INSERTION LOSS, RETURN LOSS, STATE ERROR, STEP ERROR, AND RELATIVE PHASE

<!-- image -->

Figure 7. Insertion Loss vs. Frequency over Temperature

<!-- image -->

Figure 8. Input Return Loss vs. Frequency over Major Attenuation States

<!-- image -->

Figure 9. State Error vs. Attenuation over Frequency

Figure 10. Normalized Attenuation vs. Frequency over Major Attenuation States

<!-- image -->

Figure 11. Output Return Loss vs. Frequency over Major Attenuation States

<!-- image -->

23094-013

Figure 12. State Error vs. Frequency over Major Attenuation States

<!-- image -->

Figure 13. Step Error vs. Attenuation over Frequency

<!-- image -->

23094-015

<!-- image -->

Figure 14. Relative Phase vs. Attenuation over Frequency

Figure 15. Step Error vs. Frequency over Major Attenuation States

<!-- image -->

Figure 16. Relative Phase vs. Frequency over Major Attenuation States

<!-- image -->

## INPUT POWER COMPRESSION AND THIRD-ORDER INTERCEPT

<!-- image -->

Figure 17. Input P0.1dB vs. Frequency at Minimum Attenuation State over Temperature, VEE = -5 V

<!-- image -->

Figure 18. Input P0.1dB vs. Frequency at Minimum Attenuation State over Temperature, VEE = -5 V (Low Frequency Detail)

<!-- image -->

Figure 19. Input P0.1dB vs. Frequency over Major Attenuation States, VEE = -5 V

<!-- image -->

Figure 20. Input P0.1dB vs. Frequency at Minimum Attenuation State over Temperature, VEE = -3 V

Figure 21. Input P0.1dB vs. Frequency at Minimum Attenuation State over Temperature, VEE = -3 V (Low Frequency Detail)

<!-- image -->

Figure 22. Input P0.1dB vs. Frequency over Major Attenuation States, VEE = -3 V

<!-- image -->

<!-- image -->

Figure 23. Input IP3 vs. Frequency at Minimum Attenuation State over Temperature, VEE = -5 V

<!-- image -->

Figure 24. Input IP3 vs. Frequency at Minimum Attenuation State over Temperature, VEE = -5 V (Low Frequency Detail)

<!-- image -->

Figure 25. Input IP3 vs. Frequency over Major Attenuation States, VEE = -5 V

<!-- image -->

Figure 26. Input IP3 vs. Frequency at Minimum Attenuation State over Temperature, VEE = -3 V

Figure 27. Input IP3 vs. Frequency at Minimum Attenuation State over Temperature, VEE = -3 V (Low Frequency Detail)

<!-- image -->

Figure 28. Input IP3 vs. Frequency over Major Attenuation States, VEE = -3 V

<!-- image -->

## THEORY OF OPERATION

The HMC424ALP3E incorporates a 6-bit attenuator die that offers an attenuation range of 31.5 dB in 0.5 dB steps. The attenuation state is changed by the parallel control voltage inputs (V1 to V6) directly (see Table 5).

The HMC424ALP3E allows the user to program the attenuation state via six parallel control inputs toggled between 0 V and VEE. When interfacing with a TTL/CMOS interface, an external level shifter is required. For example, a simple driver using standard logic ICs provides fast switching while using minimum dc current. The series resistance is recommended to suppress unwanted RF signals at the input of the V1 to V6 control lines.

## POWER SUPPLY

The HMC424ALP3E requires a single dc voltage applied to the VEE pin. The ideal power-up sequence is as follows:

1. Connect the ground reference.
2. Apply a supply voltage to the VEE pin.
3. Power up the digital control inputs. The relative order of the digital control inputs is not important.
4. Apply an RF input signal to RFIN.

The power-down sequence is the reverse of the power-up sequence.

Table 5. V1 to V6 Truth Table

| Control Voltage Input 1   | Control Voltage Input 1   | Control Voltage Input 1   | Control Voltage Input 1   | Control Voltage Input 1   | Control Voltage Input 1   |                                  |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|----------------------------------|
| V1 (16 dB)                | V2 (8 dB)                 | V3 (4 dB)                 | V4 (2 dB)                 | V5 (1 dB)                 | V6 (0.5 dB)               | Attenuation State, RFIN to RFOUT |
| Low                       | Low                       | Low                       | Low                       | Low                       | Low                       | Reference insertion loss         |
| Low                       | Low                       | Low                       | Low                       | Low                       | High                      | 0.5 dB                           |
| Low                       | Low                       | Low                       | Low                       | High                      | Low                       | 1 dB                             |
| Low                       | Low                       | Low                       | High                      | Low                       | Low                       | 2 dB                             |
| Low                       | Low                       | High                      | Low                       | Low                       | Low                       | 4 dB                             |
| Low                       | High                      | Low                       | Low                       | Low                       | Low                       | 8 dB                             |
| High                      | Low                       | Low                       | Low                       | Low                       | Low                       | 16 dB                            |
| High                      | High                      | High                      | High                      | High                      | High                      | 31.5 dB                          |

## RF INPUT AND OUTPUT

The attenuator in the HMC424ALP3E is bidirectional. The RFIN and RFOUT pins are interchangeable as the RF input and output ports. The attenuator is internally matched to 50 Ω at both the input and the output. Therefore, no external matching components are required.

The RF input and output pins of the HMC424ALP3E are internally dc biased to 0 V . Therefore, they require external dc blocking capacitors if the RF line potential is not equal to 0 V . Select the value of these dc blocking capacitors based on the minimum operating frequency. Use larger value capacitors to extend the operation to lower frequencies.

Figure 29. Suggested Driver Circuit

<!-- image -->

## APPLICATIONS INFORMATION EVALUATION BOARD

The HMC424ALP3E uses a 4-layer evaluation board. The copper thickness is 0.5 oz (0.7 mil) on each layer. The top dielectric material is 10 mil Rogers RO4350 for optimal high frequency performance, whereas the middle and bottom dielectric materials are FR4 type materials to achieve an overall board thickness of 62 mil. RF traces are routed on the top copper layer, and the bottom layer is a grounded plane that provides a solid ground for the RF transmission lines. The RF transmission lines are designed using a coplanar waveguide (CPWG) model with a width of 16 mil and ground spacing of 13 mil to have a characteristic impedance of 50 Ω. For enhanced RF and thermal grounding, as many plated through vias as possible are arranged around transmission lines and under the exposed pad of the package.

Figure 30 shows the top view of the populated HMC424ALP3E evaluation board, available from Analog Devices, Inc., upon request (see the Ordering Guide section).

The evaluation board is grounded from the dc pin, J3, and the dc supply must be connected to Pin 8 (GND) of J3. A 0.1 nF decoupling capacitor is placed on the supply trace to filter high frequency noise. The device can be supplied with either VEE = -3 V or VEE = -5 V . The control pins, V1 to V6, are also on the J3 connector, and they require 0 V or VEE for programming. Series 100 Ω are placed between each control pin and the connector to suppress the unwanted RF signals.

The RF input and output ports (RFIN and RFOUT) are connected through 50 Ω transmission lines to the Subminiature Version A (SMA) connectors, J1 and J2, respectively. A thru calibration line is used to estimate the loss of the PCB over the environmental conditions being evaluated. A matching structure at the connector interface helps with matching of the connector.

Figure 31 and Table 6 show the evaluation board schematic and bill of materials, respectively.

23094-033

Figure 30. Populated Evaluation Board-Top View

<!-- image -->

Figure 31. Evaluation Board Schematic

<!-- image -->

Table 6. Evaluation Board Bill of Materials

| Reference Designator   | Description                    |
|------------------------|--------------------------------|
| J1, J2                 | PCB mount SMAconnector         |
| J3                     | 8-pin dc connector             |
| C1                     | 0.1 µF capacitor, 0603 package |
| R1 to R6               | 100 Ωresistors, 0603 package   |
| U1                     | HMC424ALP3E digital attenuator |
| PCB 1                  | EV1HMC424ALP3 evaluation PCB   |

## OUTLINE DIMENSIONS

PKG-004831

<!-- image -->

08-30-2018-A

Figure 32. 16-Lead Lead Frame Chip Scale Package [LFCSP] 3 mm × 3 mm Body and 0.85 mm Package Height (CP-16-50)

Dimensions shown in millimeters

| Model 1       | Temperature Range   | MSLRating 2   | Package Description                           | Package Option   | Marking Code 3   |
|---------------|---------------------|---------------|-----------------------------------------------|------------------|------------------|
| HMC424ALP3E   | -40°C to +85°C      | MSL3          | 16-Lead Lead Frame Chip Scale Package [LFCSP] | CP-16-50         | H424A XXXX       |
| HMC424ALP3ETR | -40°C to +85°C      | MSL3          | 16-Lead Lead Frame Chip Scale Package [LFCSP] | CP-16-50         | H424A XXXX       |
| EV1HMC424ALP3 |                     |               | Evaluation Board                              |                  |                  |

## ORDERING GUIDE

1  The HMC424ALP3E, HMC424ALP3ETR, and EV1HMC424ALP3 are RoHS compliant.

2  See the Absolute Maximum Ratings section.

3 XXXX is the 4-digit lot number.

<!-- image -->