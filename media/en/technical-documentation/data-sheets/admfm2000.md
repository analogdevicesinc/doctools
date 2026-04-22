<!-- lastmod 2024-03-29 -->
<!-- image -->

## Dual-Channel, 0.5 GHz to 32 GHz, Microwave Downconverter

## FEATURES

- Dual-channel, 0.5 GHz to 32 GHz receiver
- Integrated LNA
- Integrated downconversion mixer
- Integrated switch for mixer bypass
- Integrated IF LPF: 8 GHz bandwidth
- Integrated DSA
- DSA range: 31 dB with 1 dB step
- Single common LO input
- 50 Ω matched input and output
- 20.00 mm × 14.00 mm, 179-ball CSP\_BGA

## APPLICATIONS

- Phased array radar receivers
- Satellite communications (satcom) receivers
- Electronic warfare
- Electronic test and measurement equipment
- Automatic test equipment

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADMFM2000 is a dual-channel microwave downconverter, with input RF and local oscillator (LO) frequency ranges covering 5 GHz to 32 GHz, with an output intermediate frequency (IF) frequency range from 0.5 GHz to 8 GHz. The downconverting mixer can also be bypassed allowing direct access to the 0.5 to 8 GHz IF path. A common LO input signal is split to feed two separate buffer amplifiers to drive the mixer in each channel. Each down conversion path consists of a low noise amplifier (LNA), a mixer, an IF filter, a digital step attenuator (DSA), and an IF amplifier.

Fabricated using a combination of surface mount and bare die components, the ADMFM2000 provides precise gain adjustment capabilities with low distortion performance. The ADMFM2000 comes in a compact, shielded 20.00 mm × 14.00 mm, 179-ball chip scale package ball grid array (CSP\_BGA) and operates over a temperature range of -40°C to +85°C.

## TABLE OF CONTENTS

| Features................................................................                         | 1                                      |
|--------------------------------------------------------------------------------------------------|----------------------------------------|
| Applications...........................................................                          | 1                                      |
| General Description...............................................1                              |                                        |
| Functional Block Diagram                                                                         | .....................................1 |
| Specifications........................................................                           | 3                                      |
| Absolute Maximum Ratings...................................6                                     |                                        |
| Thermal Resistance...........................................                                    | 6                                      |
| Electrostatic Discharge (ESD) Ratings...............6                                            |                                        |
| ESD Caution.......................................................6                              |                                        |
| Pin Configuration and Function Descriptions........                                              | 7                                      |
| Typical Performance Characteristics.....................9                                        |                                        |
| LNA (RF_IN_x to LNA_OUT_x).........................                                              | 9                                      |
| Mixer (MIXER_IN_x to IF_OUT_x)...................12                                              |                                        |
| Direct IF (RF_BYPASS_IN_x to IF_OUT_x)....                                                       | 16                                     |
| LNA-Mixer Cascaded (RF_IN_x to IF_OUT_x)......................................................19 |                                        |
| Spurious Performance......................................20                                     |                                        |

## REVISION HISTORY

3/2024-Revision 0: Initial Version

| Theory of Operation.............................................21        |    |
|---------------------------------------------------------------------------|----|
| LNA..................................................................     | 21 |
| Mixer.................................................................21  |    |
| LO.....................................................................21 |    |
| Switch...............................................................21   |    |
| LPF...................................................................22  |    |
| DSA..................................................................22   |    |
| IF Amplifier.......................................................23     |    |
| Applications Information......................................            | 24 |
| Basic Connections............................................24           |    |
| LNA Mixer Cascaded Performance..................26                        |    |
| Layout Recommendations................................27                  |    |
| Vent Hole..........................................................27     |    |
| Power Management Recommendations..........27                              |    |
| Outline Dimensions.............................................           | 28 |
| Ordering Guide.................................................28         |    |
| Evaluation Boards............................................28           |    |

## SPECIFICATIONS

VDD\_LNA\_1 = VDD\_LNA\_2 = VDD\_IF\_1 = VDD\_IF\_2 = VDD\_LO\_DRIVER\_1 = VDD\_LO\_DRIVER\_2 = 5 V, VSS\_DSAS = -5 V, VGG\_RFAMP\_1 = VGG\_RFAMP\_2 = VGG\_LOAMP\_1 = VGG\_LOAMP\_2 = open, LO\_IN power (P LO\_IN ) = 6 dBm (referenced at the customer evaluation board LO\_IN RF connector), and T A = 25°C, unless otherwise noted.

Table 1. Specifications

| Parameter                           | Test Conditions/Comments                                                                                                                                                 | Min   | Typ   | Max   | Unit   |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| OPERATING CONDITIONS                |                                                                                                                                                                          |       |       |       |        |
| Frequency Range                     |                                                                                                                                                                          | 0.5   |       | 32    | GHz    |
| LNA Input                           |                                                                                                                                                                          | 5     |       | 32    | GHz    |
| Mixer Input                         |                                                                                                                                                                          | 5     |       | 32    | GHz    |
| Direct IF Input                     |                                                                                                                                                                          | 0.5   |       | 8     | GHz    |
| LNA Output                          |                                                                                                                                                                          | 5     |       | 32    | GHz    |
| IF Output                           |                                                                                                                                                                          | 0.5   |       | 8     | GHz    |
| LO Input                            |                                                                                                                                                                          | 7     |       | 30    | GHz    |
| LNA                                 | Input: RF_IN_1 and RF_IN_2 and output: LNA_OUT_1 and LNA_OUT_2                                                                                                           |       |       |       |        |
| Gain                                | 18 GHz                                                                                                                                                                   |       | 12    |       | dB     |
| Gain Flatness                       | Over any 4 GHz of bandwidth                                                                                                                                              |       | 1     |       | dB p-p |
| Gain Variation over Temperature     | -40°C to +85°C                                                                                                                                                           |       | 1.2   |       | dB     |
| Noise Figure                        | 18 GHz                                                                                                                                                                   |       | 3.5   |       | dB     |
| Input 1 dB Compression Point (P1dB) | 18 GHz                                                                                                                                                                   |       | 2     |       | dBm    |
| Second Harmonic (HD2)               | RF_IN_x frequency (f RF_IN_x ) = 9 GHz, and LNA_OUT_x power (P ) = -6 dBm                                                                                                |       | -37   |       | dBc    |
| Third Harmonic (HD3)                | f RF_IN_x = 9 GHz, and P LNA_OUT_x = -6 dBm                                                                                                                              |       | -69   |       | dBc    |
| Input Third-Order Intercept (IP3)   | 18 GHz, 1 MHz tone spacing and an output power (P OUT ) = -6 dBm per tone                                                                                                |       | 12    |       | dBm    |
| Input Second-Order Intercept (IP2)  | 9 GHz, 11 MHz tone spacing, P OUT = -6 dBm per tone                                                                                                                      |       | 25    |       | dBm    |
| Channel to Channel Isolation        | P LNA_OUT_1 to P LNA_OUT_2 , 18 GHz, P RF_IN_1 = -20 dBm, and RF_IN_2: 50 Ω termination                                                                                  |       | -55   |       | dB     |
| MIXER                               | Input: MIXER_IN_1 and MIXER_IN_2, LO: LO_IN = 6 dBm, SW1_CTRL_A = -5 V, SW1_CTRL_B = 0 V, SW2_CTRL_A = 0 V, SW2_CTRL_B = -5 V, and output: IF_OUT_1 and IF_OUT_2 = 3 GHz |       |       |       |        |
| Gain                                | 18 GHz                                                                                                                                                                   |       | -6.3  |       | dB     |
| Gain Flatness                       | Over any 4 GHz of bandwidth                                                                                                                                              |       | 2     |       | dB p-p |
| Gain Variation over Temperature     | -40°C to +85°C                                                                                                                                                           |       | 2     |       | dB     |
| DSA Range                           |                                                                                                                                                                          | 0     |       | 31    | dB     |
| DSA Step Size                       |                                                                                                                                                                          |       | 1     |       | dB     |
| Noise Figure                        | Single sideband, 18 GHz                                                                                                                                                  |       | 23.5  |       | dB     |
| Input P1dB                          | 18 GHz                                                                                                                                                                   |       | 16.5  |       | dBm    |
| Input IP3                           | MIXER_IN_x Frequency 1 (f1 MIXER_IN_x ) = 18 GHz, 1 MHz tone spacing, P OUT = -15 dBm per tone                                                                           |       | 23.5  |       | dBm    |
| Input IP2                           | f1 MIXER_IN_x = 18 GHz, 11 MHz tone spacing, P OUT = -15 dBm per tone                                                                                                    |       | 39.7  |       | dBm    |
| Mixer Isolation                     |                                                                                                                                                                          |       |       |       |        |
| RF to IF                            | (MIXER_IN_x power (P MIXER_IN_x ) at 18 GHz) - (IF_OUT_x power (P IF_OUT_x ) at 18 GHz), P MIXER_IN_x = -10 dBm                                                          |       | 57    |       | dB     |
| LO to RF                            | (P LO_IN at 18 GHz) - (P MIXER_IN_x at 18 GHz), P LO_IN = 8 dBm                                                                                                          |       | 32    |       | dB     |
| LO to IF                            | (P LO_IN at 18 GHz) - (P IF_OUT_x at 18 GHz), P LO_IN = 8 dBm                                                                                                            |       | 77    |       | dB     |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                       | Test Conditions/Comments                                                                                                                                                                                                        | Min   | Typ   | Max   | Unit   |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| Channel to Channel Isolation    | MIXER_IN_2: 50 Ω termination, MIXER_IN_1 power (P MIXER_IN_1 ) = -10 dBm at MIXER_IN_1 frequency (f MIXER_IN_1 ) = 18 GHz, IF_OUT_1 frequency (f IF_OUT_1 ) = 3.0 GHz (IF_OUT_1 power (P IF_OUT_1 ) at 3 GHz) - (IF_OUT_2 power |       |       |       |        |
| IF to IF                        | (P IF_OUT_2 ) at 3 GHz)                                                                                                                                                                                                         |       | -80   |       | dB     |
| DIRECT IF MODE                  | Input: RF_BYPASS_IN_1 and RF_BYPASS_IN_2, output: IF_OUT_1 and IF_OUT_2, SW1_CTRL_A = 0 V, SW1_CTRL_B = -5 V, SW2_CTRL_A = -5 V, and SW2_CTRL_B = 0 V                                                                           |       |       |       |        |
| Gain                            | 3.0 GHz                                                                                                                                                                                                                         |       | 5.0   |       | dB     |
| Gain Flatness                   | 3 GHz ± 1.0 GHz                                                                                                                                                                                                                 |       | 1.2   |       | dB p-p |
| Gain Variation over Temperature | -40°C to +85°C                                                                                                                                                                                                                  |       | 0.6   |       | dB     |
| DSA Range                       |                                                                                                                                                                                                                                 | 0     |       | 31    | dB     |
| DSA Step Size                   |                                                                                                                                                                                                                                 |       | 1     |       | dB     |
| Noise Figure                    | 3.0 GHz                                                                                                                                                                                                                         |       | 12.1  |       | dB     |
| Input P1dB                      | 3.0 GHz                                                                                                                                                                                                                         |       | 14.5  |       | dBm    |
| HD2                             | 3.0 GHz, P IF_OUT_x - P(2 × f IF_OUT_x ), and P OUT = 5 dBm                                                                                                                                                                     |       | -50   |       | dBc    |
| HD3                             | 3.0 GHz, P IF_OUT_x - P(3 × f IF_OUT_x ), P OUT = 5 dBm                                                                                                                                                                         |       | -77   |       | dBc    |
| Input IP3                       | 3.0 GHz, 1 MHz tone spacing, and P OUT = 5 dBm per tone                                                                                                                                                                         |       | 27    |       | dBm    |
| Input IP2                       | 3.0 GHz, 11 MHz tone spacing, and P OUT = 5 dBm per tone                                                                                                                                                                        |       | 32.4  |       | dBm    |
| Channel to Channel Isolation    | P IF_OUT_1 to P IF_OUT_2 , 3.0 GHz, RF_BYPASS_IN_1 power (P RF_BYPASS_IN_1 ) = -20 dBm, and RF_BYPASS_IN_2: 50 Ω termination                                                                                                    |       | -67   |       | dB     |
| DSA SPECIFICATIONS              |                                                                                                                                                                                                                                 |       |       |       |        |
| Range                           |                                                                                                                                                                                                                                 | 0     |       | 31    | dB     |
| Step Size                       | Between any successive attenuation states, 0.5 GHz to 8 GHz                                                                                                                                                                     |       | 1     |       | dB     |
| Step Error                      | Between any successive attenuation states, 0.5 GHz to 8 GHz                                                                                                                                                                     |       | ±0.5  |       | dB     |
| Settling Time                   | Minimum attenuation to maximum attenuation, t FALL (90% to 10% RF)                                                                                                                                                              |       | 38    |       | ns     |
|                                 | Maximum attenuation to minimum attenuation, t RISE (10% to 90% RF)                                                                                                                                                              |       | 42    |       | ns     |
|                                 | t ON (50% control to 90% RF)                                                                                                                                                                                                    |       | 60    |       | ns     |
|                                 | t ON and t OFF (50% control to 10% RF)                                                                                                                                                                                          |       | 60    |       | ns     |
| LNA MIXER CASCADED              | Input: RF_IN_1 and RF_IN_2, output: IF_OUT_1 and IF_OUT_2, 5.5 dB attenuation between LNA_OUT_x and MIXER_IN_x, SW1_CTRL_A = -5 V, SW1_CTRL_B = 0 V, SW2_CTRL_A = 0 V, and SW2_CTRL_B = -5 V                                    |       |       |       |        |
| Gain                            | f RF_IN_x = 18 GHz and f IF_OUT_x = 3.0 GHz                                                                                                                                                                                     |       | 0.5   |       | dB     |
| DSA Range                       |                                                                                                                                                                                                                                 | 0     |       | 31    | dB     |
| DSA Step Size                   |                                                                                                                                                                                                                                 |       | 1     |       | dB     |
| Noise Figure                    | Single sideband                                                                                                                                                                                                                 |       | 16.7  |       | dB     |
| Input P1dB                      |                                                                                                                                                                                                                                 |       | 10.6  |       | dBm    |
| Input IP3                       | 18 GHz, 1 MHz tone spacing, and P OUT = -15 dBm per tone                                                                                                                                                                        |       | 10.2  |       | dBm    |
| Input IP2                       | 9 GHz, 11 MHz tone spacing, and P OUT = -15 dBm per tone                                                                                                                                                                        |       | 24.3  |       | dBm    |
| Channel to Channel Isolation    | P IF_OUT_1 to P IF_OUT_2 , 18 GHz, P RF_IN_1 = -20 dBm, and RF_IN_2: 50 Ω termination                                                                                                                                           |       | 60    |       | dB     |
| LO CHARACTERISTICS              |                                                                                                                                                                                                                                 |       |       |       |        |
| LO Drive Level 1                |                                                                                                                                                                                                                                 | 4     | 6     | 8     | dBm    |
| LOGIC INPUTS                    |                                                                                                                                                                                                                                 |       |       |       |        |
| SWx_CTRL_x                      | SW1_CTRL_A, SW1_CTRL_B, SW2_CTRL_A, and SW2_CTRL_B                                                                                                                                                                              |       |       |       |        |
| Input Low Voltage (V IL )       |                                                                                                                                                                                                                                 | -0.2  |       | 0     | V      |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                    | Test Conditions/Comments                                                                     | Min Typ   | Max   | Unit   |
|----------------------------------------------|----------------------------------------------------------------------------------------------|-----------|-------|--------|
| Input High Voltage (V IH )                   |                                                                                              | -5        | -3    | V      |
| DSAx_Vx                                      | DSA1_V0, DSA1_V1, DSA1_V2, DSA1_V3, DSA1_V4, DSA2_V0, DSA2_V1, DSA2_V2, DSA2_V3, and DSA2_V4 |           |       |        |
| V IL                                         |                                                                                              | 0         | 0.8   | V      |
| V IH                                         |                                                                                              | 2         | 5     | V      |
| POWER SUPPLIES                               |                                                                                              |           |       |        |
| VDD_LNA_1 and VDD_LNA_2                      |                                                                                              | 5         |       | V      |
| VDD_IF_1 and VDD_IF_2                        |                                                                                              | 5         |       | V      |
| VDD_LO_DRIVER_1 and VDD_LO_DRIVER_2          |                                                                                              | 5         |       | V      |
| VSS_DSAS                                     |                                                                                              | -5        |       | V      |
| VDD_LNA_x Current (I VDD_LNA_x )             |                                                                                              | 66        |       | mA     |
| VDD_IF_x Current (I VDD_IF_x )               |                                                                                              | 72        |       | mA     |
| VDD_LO_DRIVER_x Current (I VDD_LO_DRIVER_x ) |                                                                                              | 68        |       | mA     |
| VSS_DSAS Current (I VSS_DSAS )               |                                                                                              | 12        |       | mA     |
| Total Power Consumption                      |                                                                                              | 2.18      |       | W      |

## ABSOLUTE MAXIMUM RATINGS

## Table 2. Absolute Maximum Ratings

| Parameter                                                                                                                                              | Rating            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| Maximum Supply Voltage VDD_LNA_1 and VDD_LNA_2 VDD_IF_1 and VDD_IF_2 VDD_LO_DRIVER_1, VDD_LO_DRIVER_2 VSS_DSAS Maximum Input Power RF_IN_1 and RF_IN_2 | 8 V 7 V 10 V -7 V |
| MIXER_IN_1and                                                                                                                                          | 23 dBm            |
| MIXER_IN_2 RF_BYPASS_IN_1 and RF_BYPASS_IN_2                                                                                                           | 21 dBm            |
| Switch Control Inputs SW1_CTRL_A, SW1_CTRL_B, and SW2_CTRL_B                                                                                           | 26 dBm            |
| LO_IN                                                                                                                                                  | 24 dBm            |
| SW2_CTRL_A,                                                                                                                                            | -7.5 V to +0.5    |
| DSA Control Inputs DSA1_V0, DSA1_V1, DSA1_V2, DSA1_V3, DSA1_V4,DSA2_V0, DSA2_V1, DSA2_V2, DSA2_V3, and DSA2_V4 Temperature                             | V                 |
|                                                                                                                                                        | 7.5 V             |
| Operating Range                                                                                                                                        | -40°C to +85°C    |
| Storage Range                                                                                                                                          | -40°C to +150°C   |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

The Layout Recommendations section details and shows a design that utilizes multiple ground vias to maximize heat dissipation from the device package.

θ JC is the junction-to-case thermal resistance.

## Table 3. Thermal Resistance

| Package Type 1   |   θ JC 2 | Unit   |
|------------------|----------|--------|
| BV-179-1         |       70 | °C/W   |

- 1 Based on simulations with JEDEC standard JESD-51.

2 The θ JC thermal resistance was determined by simulation of the heat transfer from the hottest localized circuit in the package through the ground paddle of the PCB, with the PCB ground paddle held constant at 85°C. The associated power consumption of this circuit is 0.35 W.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in and ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADMFM2000

Table 4. ADMFM2000, 179-Ball BGA\_CAV

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±250                      | 1A      |
| CDM         |                           |         |
| RF Pins     | ±175                      | C0B     |
| NonRF Pins  | ±500                      | C2A     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. BGA Ball Array Configuration (Top View)

<!-- image -->

Figure 3. 179-Ball Pin Configuration (Top View)

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.               | Mnemonic        | Type   | Description                                         |
|-----------------------|-----------------|--------|-----------------------------------------------------|
| RF Inputs and Outputs |                 |        |                                                     |
| D2                    | RF_IN_1         | Input  | Channel 1, RF Input, AC-Coupled, Matched to 50 Ω.   |
| L2                    | RF_IN_2         | Input  | Channel 2, RF Input, AC-Coupled, Matched to 50 Ω.   |
| H2                    | LO_IN           | Input  | LO Input, AC-Coupled, Matched to 50 Ω.              |
| B6                    | LNA_OUT_1       | Output | Channel 1, LNA Output, AC-Coupled, Matched to 50 Ω. |
| M6                    | LNA_OUT_2       | Output | Channel 2, LNA Output, AC-Coupled, Matched to 50 Ω  |
| B10                   | MIXER_IN_1      | Input  | Channel 1, Input to Mixer.                          |
| M10                   | MIXER_IN_2      | Input  | Channel 2, Input to Mixer.                          |
| B12                   | RF_BYPASS_IN_1  | Input  | Channel 1, IF Input, AC-Coupled, Matched to 50 Ω.   |
| M12                   | RF_BYPASS_IN _2 | Input  | Channel 2, IF Input, AC-Coupled, Matched to 50 Ω.   |
| F18                   | IF_OUT_1        | Output | Channel 1, IF Output, AC-Coupled, Matched to 50 Ω.  |
| L18                   | IF_OUT_2        | Output | Channel 2, IF Output, AC-Coupled, Matched to 50 Ω.  |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 5. Pin Function Descriptions (Continued)

| Pin No.                                                                                                                                                                                                                                                                                                                                 | Mnemonic        | Type         | Description                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|--------------|------------------------------------------------------------------------------------------------------------------------------|
| Power Supplies                                                                                                                                                                                                                                                                                                                          |                 |              |                                                                                                                              |
| B2                                                                                                                                                                                                                                                                                                                                      | VGG_RFAMP_1     | Input        | Optional Gain Control Voltage for Channel 1 LNA. This pin is internally self-biased and must normally be left open.          |
| B4                                                                                                                                                                                                                                                                                                                                      | VDD_LNA_1       | Input        | Analog 5.0 V Input for the Channel 1 LNA.                                                                                    |
| B18                                                                                                                                                                                                                                                                                                                                     | VSS_DSAS        | Input        | Analog -5.0 V for DSAs.                                                                                                      |
| D18                                                                                                                                                                                                                                                                                                                                     | VDD_IF_1        | Input        | Analog 5.0 V Input for the Channel 1 IF Amplifier and Channel 1 DSA.                                                         |
| E4                                                                                                                                                                                                                                                                                                                                      | VDD_LO_DRIVER_1 | Input        | Analog 5.0 V Input for the Channel 1 LO Driver.                                                                              |
| F4                                                                                                                                                                                                                                                                                                                                      | VGG_LOAMP_1     | Input        | Optional Gain Control Voltage for Channel 1 LO amplifier. This pin is internally self-biased and must normally be left open. |
| G4                                                                                                                                                                                                                                                                                                                                      | VGG_LOAMP_2     | Input        | Optional Gain Control Voltage for Channel 2 LO Amplifier. This pin is internally self-biased and must normally be left open. |
| J18                                                                                                                                                                                                                                                                                                                                     | VDD_IF_2        | Input        | Analog 5.0 V Input for the Channel 2 IF amplifier and Channel 2 DSA.                                                         |
| K4                                                                                                                                                                                                                                                                                                                                      | VGG_RFAMP_2     | Input        | Optional Gain Control Voltage for the Channel 2 LNA. This pin is internally self-biased and must normally be left open.      |
| K7                                                                                                                                                                                                                                                                                                                                      | VDD_LO_DRIVER_2 | Input        | Analog 5.0 V Input for the Channel 2 LO Driver.                                                                              |
| M4                                                                                                                                                                                                                                                                                                                                      | VDD_LNA_2       | Input        | Analog 5.0 V Input for the Channel 2 LNA.                                                                                    |
| A5, A7, A9, A11, A13, B3, B5, B7 to B9, B11, B13, B14, B17, C1 to C13, C17, C18, D3 to D13, D16, D17, E1 to E3, E16 to E19, F2, F3, F6 to F14, F16, F17, G1 to G3, G6 to G14, G16 to G19, H3, H4, H6 to H14, H16 to H18, J1 to J4, J16, J17, K1 to K3, K5, K6, K8 to K13, K15 to K19, L3 to L13, L17, M1 to M3, M5, M7 to M9, M11, M13, | GND             | Input/Output | Ground.                                                                                                                      |
| Control Signals                                                                                                                                                                                                                                                                                                                         |                 |              |                                                                                                                              |
| B15                                                                                                                                                                                                                                                                                                                                     | SW1_CTRL_A      | Input        | Channel 1 Switch Control Input A. The SW1_CTRL_A pin must always be kept at a valid logic level (refer to Table 1).          |
| B16                                                                                                                                                                                                                                                                                                                                     | SW1_CTRL_B      | Input        | Channel 1 Switch Control Input B. The SW1_CTRL_B pin must always be kept at a valid logic level (refer to Table 1).          |
| K14                                                                                                                                                                                                                                                                                                                                     | SW2_CTRL_B      | Input        | Channel 2 Switch Control Input B. The SW2_CTRL_A pin must always be kept at a valid logic level (refer to Table 1).          |
| L14                                                                                                                                                                                                                                                                                                                                     | SW2_CTRL_A      | Input        | Channel 2 Switch Control Input A. The SW2_CTRL_B pin must always be kept at a valid logic level (refer to Table 1).          |
| Channel 1 DSA Control Inputs                                                                                                                                                                                                                                                                                                            |                 |              |                                                                                                                              |
| D15                                                                                                                                                                                                                                                                                                                                     | DSA1_V0         | Input        | Channel 1 DSA Parallel Control Voltage Inputs for the Required Attenuation.                                                  |
| D14                                                                                                                                                                                                                                                                                                                                     | DSA1_V1         | Input        | There is no internal pull-up or pull-down resistor on these pins. Therefore, the V V                                         |
| C14                                                                                                                                                                                                                                                                                                                                     | DSA1_V2         | Input        | DSA1_Vx pins must always be kept at a valid logic level (5 V V INH or 0 INL )                                                |
| C15                                                                                                                                                                                                                                                                                                                                     | DSA1_V3         | Input        | and not be left floating.                                                                                                    |
| C16                                                                                                                                                                                                                                                                                                                                     | DSA1_V4         | Input        |                                                                                                                              |
| Channel 2 DSA Control Inputs                                                                                                                                                                                                                                                                                                            |                 |              |                                                                                                                              |
| M14                                                                                                                                                                                                                                                                                                                                     | DSA2_V0         | Input        | Channel 2 DSA Parallel Control Voltage Inputs for the Required Attenuation.                                                  |
| M15                                                                                                                                                                                                                                                                                                                                     | DSA2_V1         | Input        | There is no internal pull-up or pull-down resistor on these pins. Therefore, the                                             |
| M16                                                                                                                                                                                                                                                                                                                                     | DSA2_V2         | Input        | DSA2_Vx pins must always be kept at a valid logic level (refer to Table 1) and                                               |
| L15                                                                                                                                                                                                                                                                                                                                     | DSA2_V3         | Input        | not be left floating.                                                                                                        |
| L16                                                                                                                                                                                                                                                                                                                                     | DSA2_V4         | Input        |                                                                                                                              |

## TYPICAL PERFORMANCE CHARACTERISTICS

## LNA (RF\_IN\_ x TO LNA\_OUT\_ x )

TA = 25°C, VDD\_LNA\_1 = VDD\_LNA\_2 = 5 V, VGG\_RFAMP\_1 = VGG\_RFAMP\_2 = open, RF power (P RF ) = -20 dBm at RF\_IN\_1 and RF\_IN\_2.

<!-- image -->

Figure 4. Gain vs. Frequency for Various Temperatures

<!-- image -->

Figure 5. Gain vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 6. Input Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 7. Input Return Loss vs. Frequency for Various Supply Voltages

Figure 8. Output Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 9. Output Return Loss vs. Frequency for Various Supply Voltages

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Noise Figure vs. Frequency for Various Temperatures

<!-- image -->

Figure 11. Noise Figure vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 12. Input P1dB vs. Frequency for Various Temperatures

<!-- image -->

Figure 13. Input P1dB vs. Frequency for Various Supply Voltages

Figure 14. Input IP3 vs. Frequency for Various Temperatures, P OUT per Tone = -6 dBm at 1 MHz Tone Spacing

<!-- image -->

Figure 15. Input IP3 vs. Frequency for Various Supply Voltages, P OUT per Tone = -6 dBm at 1 MHz Tone Spacing

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. Input IP2 vs. Frequency for Various Temperatures, P OUT per Tone = -6 dBm at 11 MHz Tone Spacing

<!-- image -->

Figure 17. Input IP2 vs. Frequency for Various Supply Voltages, P OUT per Tone = -6 dBm at 11 MHz Tone Spacing

<!-- image -->

Figure 18. HD2 vs. Frequency, P LNA\_OUT\_x = -6 dBm

Figure 19. HD3 vs. Frequency, and P LNA\_OUT\_x = -6 dBm

<!-- image -->

Figure 20. P LNA\_OUT\_1 to P LNA\_OUT\_2 Channel to Channel Isolation vs. Frequency, P RF\_IN\_1 = -20 dBm and RF\_IN\_2 = 50 Ω Termination

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## MIXER (MIXER\_IN\_ x TO IF\_OUT\_ x )

TA = 25°C, VDD\_IF\_1 = VDD\_IF\_2 = VDD\_LO\_DRIVER\_1 = VDD\_LO\_DRIVER\_2 = 5 V, VSS\_DSAS = -5 V, VGG\_LO\_AMP\_1 = VGG\_LO\_AMP\_2 = open, P MIXER\_IN\_x = -20 dBm at MIXER\_IN\_1 and MIXER\_IN\_2, f IF = 3.0 GHz at IF\_OUT\_1 and IF\_OUT\_2, and P LO\_IN = 6 dBm referenced at the characterization and customer evaluation board LO\_IN RF connector.

<!-- image -->

Figure 21. Gain, Noise Figure, Input IP2, and Input IP3 vs. Frequency at an IF Frequency = 3.0 GHz

<!-- image -->

Figure 22. Gain vs. Frequency for Various Temperatures and IF Frequencies

Figure 23. Gain vs. Frequency for Various Supply Voltages and IF Frequencies

<!-- image -->

Figure 24. Gain vs. Frequency for Various LO Drive Power Level and Frequencies

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 25. Input Return Loss vs. Frequency for Various Temperatures and IF Frequencies

<!-- image -->

Figure 26. Input Return Loss vs. Frequency for Various Supply Voltages and IF Frequencies

<!-- image -->

Figure 27. Output Return Loss vs. IF Frequency for Various Temperatures for a Fixed RF Input (18 GHz)

<!-- image -->

Figure 28. Output Return Loss vs. IF Frequency for Various Supply Voltages and a Fixed RF Input (18 GHz)

Figure 29. Noise Figure vs. Frequency for Various Temperatures at an IF Frequency = 3.0 GHz

<!-- image -->

Figure 30. Noise Figure vs. Frequency for Various Supply Voltages at an IF Frequency = 3.0 GHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 31. Noise Figure vs. Frequency for Various LO Drive Power Levels

<!-- image -->

Figure 32. Input P1dB vs. Frequency at IF Frequency = 3.0 GHz

<!-- image -->

Figure 33. Input IP3 vs. Frequency for Various Temperatures at an IF Frequency = 3.0 GHz, P OUT per Tone = -15 dBm at 1 MHz Tone Spacing

<!-- image -->

Figure 34. Input IP3 vs. Frequency for Various Supply Voltages at an IF Frequency = 3.0 GHz, P OUT per Tone = -15 dBm at 1 MHz Tone Spacing

Figure 35. Input IP3 vs. Frequency for Various LO Drive Power Levels

<!-- image -->

Figure 36. Input IP2 vs. Frequency for Various Temperatures at an IF Frequency = 3.0 GHz, P OUT per Tone = -15 dBm at 11 MHz Tone Spacing

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 37. Input IP2 vs. Frequency for Various Voltages at an IF Frequency = 3.0 GHz, P OUT per Tone = -15 dBm at 11 MHz Tone Spacing

<!-- image -->

Figure 38. IF Channel to Channel Isolation vs. Frequency, (P IF\_OUT\_1 at 3 GHz) - (P IF\_OUT\_2 at 3 GHz), MIXER\_IN\_2: 50 Ω termination, P MIXER\_IN\_1 = -10 dBm, f IF\_OUT\_1 = 3.0 GHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DIRECT IF (RF\_BYPASS\_IN\_ x TO IF\_OUT\_ x )

TA = 25°C, VDD\_IF\_1 = VDD\_IF\_2 = 5 V, VSS\_DSAS = -5 V, P RF\_BYPASS\_IN\_1 = -20 dBm, and RF\_BYPASS\_IN\_2 power (P RF\_BYPASS\_IN\_2 ) = -20 dBm.

<!-- image -->

Figure 39. Gain vs. Frequency for Various Temperatures

<!-- image -->

Figure 40. Gain vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 41. Gain vs. Frequency for Various DSA Settings

<!-- image -->

Figure 42. Input Return Loss vs. Frequency for Various Temperatures

Figure 43. Input Return Loss vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 44. Output Return Loss vs. Frequency for Various Temperatures

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 45. Output Return Loss vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 46. Noise Figure vs. Frequency for Various Temperatures

<!-- image -->

Figure 47. Noise Figure vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 48. Input P1dB vs. Frequency for Various Temperatures

Figure 49. Input P1dB vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 50. Input IP3 vs. Frequency for Various Temperatures, P OUT per Tone = 5 dBm at 1 MHz Tone Spacing

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 51. Input IP3 vs. Frequency for Various Supply Voltages, P OUT per Tone = 5 dBm at 1 MHz Tone Spacing

<!-- image -->

Figure 52. Input IP2 vs. Frequency for Various Temperatures, P OUT per Tone = 5 dBm at 11 MHz Tone Spacing

<!-- image -->

Figure 53. Input IP2 vs. Frequency for Various Supply Voltages, P OUT per Tone = 5 dBm at 11 MHz Tone Spacing

<!-- image -->

Figure 54. HD2 vs. Frequency, P OUT = 5 dBm

Figure 55. HD3 vs. Frequency, P OUT = 5 dBm

<!-- image -->

Figure 56. IF Channel to Channel Isolation vs. Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## LNA-MIXER CASCADED (RF\_IN\_ x TO IF\_OUT\_ x )

TA = 25°C, VDD\_IF\_1 = VDD\_IF\_2 = 5 V, VSS\_DSAS = -5 V, P RF\_IN\_x = -20 dBm, 5.5 dB attenuation between LNA\_OUT\_x and MIXER\_IN, SW1\_CTRL\_A = -5 V, SW1\_CTRL\_B = 0 V, SW2\_CTRL\_A = 0 V, and SW2\_CTRL\_B = -5 V.

Figure 57. Gain, Noise Figure, and Input IP3 vs. Frequency at an IF Frequency = 3.0 GHz, P OUT per Tone = -15 dBm

<!-- image -->

Figure 58. Gain, Noise Figure, Input P1dB, Input IP2, and Input IP3 vs. Attenuation between LNA\_OUT\_x and MIXER\_IN\_x at an RF Frequency = 18 GHz and IF Frequency = 3.0 GHz, P OUT per Tone = -15 dBm

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## SPURIOUS PERFORMANCE

Mixer spurious products are measured in dB from the IF output power level. Spurious values are (N × LO) - (M × RF). N/A means not applicable.

## M × N Spurious Outputs, IF = 1 GHz

RF input frequency = 10 GHz, RF input power at mixer input = -20 dBm, LO frequency = 11 GHz, and the LO input power = 6 dBm.

M × N spurs other than the RF input and LO input signal at the IF output are more than 51 dB down from the main IF output at 1 GHz. Over 8 GHz, spurs are rejected significantly by the low-pass filter (LPF) on the signal path.

Table 6. M x N Spurious at Mixer Mode 1

|        |    | N × LO   |   N × LO |   N × LO |   N × LO |   N × LO | N × LO   |
|--------|----|----------|----------|----------|----------|----------|----------|
|        |    | 0        |      1   |      2   |      3   |      4   | 5        |
| M × RF | 0  | N/A      |    -10.1 |     57.4 |     69.2 |     70.5 | N/A      |
| M × RF | 1  | +3.8     |      0   |     51.2 |     87   |     83.8 | +94.4    |
| M × RF | 2  | +87.6    |     61.6 |     56.7 |    100.2 |    108.6 | +104.7   |
| M × RF | 3  | +108.9   |    111.6 |     95.6 |    109   |    114   | +110.5   |
| M × RF | 4  | +105.5   |    108.6 |    112.6 |    117.9 |    100.9 | +114.0   |
| M × RF | 5  | +102.5   |    103.9 |    112.2 |    112.2 |    107.5 | +114.7   |

## THEORY OF OPERATION

The ADMFM2000 is a dual-channel, microwave downconverter. Each downconversion path consists of an LNA, mixer, filter, DSA, IF amplifier, and a single LO input that drives both mixers.

Figure 59. ADMFM2000 Simplified Block Diagram

<!-- image -->

## LNA

The ADMFM2000 has a wideband LNA in each channel that operates between 5 GHz and 32 GHz. The LNAs are self-biased with a required single 5 V supply. Inputs and outputs are internally matched to 50 Ω and have internal DC blocking capacitors.

Each LNA also has gain control capability using the VGG\_RFAMP\_1 and VGG\_RFAMP\_2 pins corresponding to each channel. These pins are internally self-biased and must normally be left open.

## MIXER

The ADMFM2000 has a double-balanced mixer in each channel. These mixers down convert the RF from 5 GHz and 32 GHz to

Table 7. Switch Control Truth Table for SW1\_CTRL\_A, SW1\_CTRL\_B, SW2\_CTRL\_A, and SW2\_CLRL\_B

| Digital Control Inputs 1   | Digital Control Inputs 1   | RF Paths         | RF Paths         |
|----------------------------|----------------------------|------------------|------------------|
| SWx_CTRL_A                 | SWx_CTRL_B                 | Channel 1 Status | Channel 2 Status |
| High                       | Low                        | Direct IF mode   | Mixer mode       |
| Low                        | High                       | Mixer mode       | Direct IF mode   |

a corresponding IF of 0.5 GHz and 8 GHz. These mixers are passive devices and require no external biasing components or RF matching circuitry. The mixers in the ADMFM2000 operate well with a LO drive level of 6 dBm at the LO input pin.

## LO

A common LO input operates from 7 GHz to 30 GHz and is split to feed separate buffer amplifiers for each channel. These amplifiers drive separate mixers in each channel. The buffer amplifiers also have gain control using the VGG\_LOAMP\_1 and the VGG\_LOAMP\_2 pins, one for each channel. The VGG\_LOAMP\_x pins are internally self-biased and must normally be left open. The typical LO drive level at the LO input pin is 6 dBm.

## SWITCH

The ADMFM2000 has a broadband SPDT RF switch in each channel that can be used to bypass the mixer. The SPDTs require negative control voltages at the control pins (SW\_CHx\_CTRL\_A and SW\_CHx\_CTRL\_B, x = 1 or 2). Depending on the logic level applied to those control pins, the IF path is either connected to the mixer or to the RF\_BYPASS\_IN pin (see Figure 59 and Table 7). The required logic level for operating mode on Channel 2 is opposite to the required logic level on Channel 1.

## THEORY OF OPERATION

## LPF

A LPF with a bandwidth of 8 GHz after the switch rejects harmonics and other spurs generated from the mixer or induced on the RF\_BYPASS\_IN\_1 and RF\_BYPASS\_IN\_2 input pins when in direct IF mode of operation.

## DSA

The DSA after the LPF provides a 31 dB of gain control range with 1 dB step size. The DSA attenuation is set by the logic levels on the DSAx\_V0 to DSAx\_V4 pins (see Figure 3 and Table 8). All pins at high sets the minimum attenuation level and all pins at low sets the maximum attenuation. Note that the DSA requires a negative supply of -5 V on the VSS\_DSAS pin, and that the logic controls on these pins are positive (0 V and 5 V).

Table 8. DSA Attenuation Truth Table for DSA1\_V0, DSA1\_V1, DSA1\_V2, DSA1\_V3, and DSA1\_V4 and DSA2\_V0, DSA2\_V1, DSA2\_V2, DSA2\_V3, and DSA2\_V4

| Digital Control Input 1   | Digital Control Input 1   | Digital Control Input 1   | Digital Control Input 1   | Digital Control Input 1   |                        |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|------------------------|
| DSAx_V4                   | DSAx_V3                   | DSAx_V2                   | DSAx_V1                   | DSAx_V0                   | Attenuation State (dB) |
| High                      | High                      | High                      | High                      | High                      | 0 (reference)          |
| High                      | High                      | High                      | High                      | Low                       | 1                      |
| High                      | High                      | High                      | Low                       | High                      | 2                      |
| High                      | High                      | High                      | Low                       | Low                       | 3                      |
| High                      | High                      | Low                       | High                      | High                      | 4                      |
| High                      | High                      | Low                       | High                      | Low                       | 5                      |
| High                      | High                      | Low                       | Low                       | High                      | 6                      |
| High                      | High                      | Low                       | Low                       | Low                       | 7                      |
| High                      | Low                       | High                      | High                      | High                      | 8                      |
| High                      | Low                       | High                      | High                      | Low                       | 9                      |
| High                      | Low                       | High                      | Low                       | High                      | 10                     |
| High                      | Low                       | High                      | Low                       | Low                       | 11                     |
| High                      | Low                       | Low                       | High                      | High                      | 12                     |
| High                      | Low                       | Low                       | High                      | Low                       | 13                     |
| High                      | Low                       | Low                       | Low                       | High                      | 14                     |
| High                      | Low                       | High                      | Low                       | Low                       | 15                     |
| Low                       | High                      | High                      | High                      | High                      | 16                     |
| Low                       | High                      | High                      | High                      | Low                       | 17                     |
| Low                       | High                      | High                      | Low                       | High                      | 18                     |
| Low                       | High                      | High                      | Low                       | Low                       | 19                     |
| Low                       | High                      | Low                       | High                      | High                      | 20                     |
| Low                       | High                      | Low                       | High                      | Low                       | 21                     |
| Low                       | High                      | Low                       | Low                       | High                      | 22                     |
| Low                       | High                      | Low                       | Low                       | Low                       | 23                     |
| Low                       | Low                       | High                      | High                      | High                      | 24                     |
| Low                       | Low                       | High                      | High                      | Low                       | 25                     |
| Low                       | Low                       | High                      | Low                       | High                      | 26                     |
| Low                       | Low                       | High                      | Low                       | Low                       | 27                     |
| Low                       | Low                       | Low                       | High                      | High                      | 28                     |
| Low                       | Low                       | Low                       | High                      | Low                       | 29                     |
| Low                       | Low                       | Low                       | Low                       | High                      | 30                     |
| Low                       | Low                       | Low                       | Low                       | Low                       | 31                     |

1 Refer to the logic input in Table 1 for the logic level high and low detailed in Table 8.

## THEORY OF OPERATION

## IF AMPLIFIER

A IF amplifier follows the DSA. The amplifier requires a 5 V supply voltage and it features an outputs that is internally matched to 50 Ω.

## APPLICATIONS INFORMATION

## BASIC CONNECTIONS

The basic connections for operating the ADMFM2000 are shown in Figure 61. Table 9 details how to connect each pin. Figure 61 represents the circuit that was used to characterize the ADMFM2000. Note that the specified LO power used during characterization is referenced to the power level at the RF connector and not the power at the LO\_IN pin. Figure 60 shows a plot of the insertion loss between the RF connector and the LO\_IN pin.

Table 9. Connection Descriptions

| Functional Blocks                                 | Pin No.                  | Mnemonic                                        | Description                                                                                                                                                                                                                                                                 | Basic Connection                                                                                    |
|---------------------------------------------------|--------------------------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| 5 V Supply Voltage for LNA, DSA, and IF Amplifier | B4, D18, E4, J18, K7, M4 | VDD_LNA_1, VDD_IF_1, VDD_LO_DRIVER_1, VDD_IF_2, | Analog 5.0 V supply voltage for Channel 1 LNA, analog 5.0 V supply voltage for Channel 1 IF amplifier and Channel 1 DSA, analog 5.0 V supply voltage for Channel 1 LO driver, analog 5.0 V supply voltage for Channel 2 IF amplifier and Channel 1 DSA, analog 5.0 V supply | Decouple thes pins using 10 pF and 0.1 μF capacitors to ground. Locate the decoupling capacitors as |

<!-- image -->

Figure 60. Insertion Loss vs. Frequency of LO Trace on the ADMFM2000 Characterization Board

Figure 61. Basic Connections

<!-- image -->

## APPLICATIONS INFORMATION

Table 9. Connection Descriptions (Continued)

| Functional Blocks           | Pin No.                                                                                                                                                                                                                                                                                                                                                                    | Mnemonic                                           | Description                                                                                                                                     | Basic Connection                                                                                                                 |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
|                             |                                                                                                                                                                                                                                                                                                                                                                            | VDD_LO_DRIVER_2, VDD_LNA_2                         | voltage for Channel 2 LO driver, analog 5.0 V supply voltage for Channel 2 LNA.                                                                 | close as possible to the pins.                                                                                                   |
| -5 V Supply Voltage for DSA | B18                                                                                                                                                                                                                                                                                                                                                                        | VSS_DSAS                                           | Analog -5.0 V supply voltage for DSAs.                                                                                                          | Decouple this pin using 10 pF and 0.1 μF capacitors to ground. Locate the decoupling capacitors as close as possible to the pin. |
| LNA Inputs                  | D2, L2                                                                                                                                                                                                                                                                                                                                                                     | RF_IN_1, RF_IN_2                                   | Single-ended RF inputs for Channel 1 and Channel 2.                                                                                             | Connect these pins to an RF input source with a typical input power of -20 dBm.                                                  |
| LNA Outputs                 | B6, M6                                                                                                                                                                                                                                                                                                                                                                     | LNA_OUT_1, LNA_OUT_2                               | Single-ended RF outputs for Channel 1 and Channel 2.                                                                                            | Connect these pins to signal analyzer.                                                                                           |
| Mixer Inputs                | B10, M10                                                                                                                                                                                                                                                                                                                                                                   | MIXER_IN_1, MIXER_IN_2                             | Single-ended mixer inputs for Channel 1 and Channel 2.                                                                                          | Connect these pins to an RF input source with a typical input power of -10 dBm.                                                  |
| LO Input                    | H2                                                                                                                                                                                                                                                                                                                                                                         | LO_IN                                              | Single-ended LO input for Channel 1 and Channel 2.                                                                                              | Connect this pin to RF input source, typical input power 6 dBm.                                                                  |
| IF Inputs                   | B12, M12                                                                                                                                                                                                                                                                                                                                                                   | RF_BYPASS_IN_1, RF_BYPASS_IN_2                     | Single-ended IF inputs for Channel 1 and Channel 2.                                                                                             | Connect these pins to an IF input source with a typical input power of -20 dBm.                                                  |
| IF Outputs                  | F18, L18                                                                                                                                                                                                                                                                                                                                                                   | IF_OUT_1, IF_OUT_2                                 | Single-ended IF outputs for Channel 1 and Channel 2.                                                                                            | Connect these pins to signal analyzer.                                                                                           |
| Amplifier Gain Control      | B2, K4, F4, G4                                                                                                                                                                                                                                                                                                                                                             | VGG_RFAMP_1, VGG_RFAMP_2, VGG_LOAMP_1, VGG_LOAMP_2 | Optional gain control voltage, these pins are internally self-biased and must normally be left open.                                            | Set these pins to left open.                                                                                                     |
| Switch Control              | B15, B16, L14, K14                                                                                                                                                                                                                                                                                                                                                         | SW1_CTRL_A, SW1_CTRL_B, SW2_CTRL_A, SW2_CTRL_B     | Channel 1 Switch Control Input A, and Channel 1 Switch Control Input B, Channel 2 Switch Control Input A, and Channel 2 Switch Control Input B. | These pins must always be kept at a valid logic level (Refer to Table 1).                                                        |
| DSA Attenuation             | D15, D14, C14, C15, C16, M14, M15, M16, L15, L16                                                                                                                                                                                                                                                                                                                           | DSA1_Vx 1 , DSA2_Vx 1                              | Channel 1 DSA attenuation control voltage, and Channel 2 DSA attenuation control voltage.                                                       | These pins must always be kept at a valid logic level (Refer to Table 1) and not be left floating.                               |
| Ground                      | A5, A7, A9, A11, A13, B3, B5, B7, B8, B9, B11, B13, B14, B17, C1 to C13, C17, C18, D3 to D13, D16, D17, E1 to E3, E16 to E19, F2, F3, F6 to F14, F16, F17, G1 to G3, G6 to G14, G16 to G19, H3, H4, H6 to H14, H16 to H18, J1 to J4, J16, J17, K1 to K3, K5, K6, K8 to K13, K15 to K19, L3 to L13, L17, M1 to M3, M5, M7 to M9, M11, M13, M17 to M19, N5, N7, N9, N11, N13 | GND                                                | Ground.                                                                                                                                         | Connect these balls to the ground of the PCB.                                                                                    |

## APPLICATIONS INFORMATION

## LNA MIXER CASCADED PERFORMANCE

The ADMFM2000 provides significant application flexibility. Access is provided to the LNA output, the mixer input, and the mixer bypass input for each channel, which allows configurable filtering and/or attenuation between the LNA and mixer.

Table 10 details the cascaded overall performance with different levels of attenuation between the LNA and the mixer. This attenua- tion is typically a consequence of the insertion loss of a band-pass filter between the LNA and mixer. The consistent iInput P1dB and input IP3 vs. attenuation means that the LNA is the dominant factor in the channel performance.

The isolation between the two IF channels is better than -60 dB up to 30 GHz RF input.

Table 10. Cascaded Performance vs. Attenuation Between LNA Output and Mixer Input at 18 GHz RF Input, 3 GHz IF Output

|   Attenuation Between LNA Output (LNA_OUT_x 1 ) and Mixer Input (MIXER_IN_x 1 ) |   Gain (dB) |   Input P1dB (dBm) |   Input IP2 (dBm) 2 |   Input IP3 (dBm) |   Noise Figure (dB) |
|---------------------------------------------------------------------------------|-------------|--------------------|---------------------|-------------------|---------------------|
|                                                                             5.5 |        0.52 |              -0.43 |                29.9 |              10.2 |                16.7 |
|                                                                             7.3 |       -1.2  |              -0.67 |                31.9 |              10.5 |                18.6 |
|                                                                             9.4 |       -4    |              -0.74 |                34.3 |              10.7 |                20.4 |
|                                                                            11.4 |       -5.8  |              -0.96 |                36   |              10.9 |                22.8 |

## APPLICATIONS INFORMATION

## LAYOUT RECOMMENDATIONS

Solder the ground balls on the underside of the ADMFM2000 to a low thermal and electrical impedance connection. Utilize multiple ground vias throughout the ground plane on the ADMFM2000EVALZ to maximize heat dissipation from the device package. Referring to the layout shown in Figure 62, the green dots with PCB traces attached are the inputs and outputs of the ADMFM2000. The gray dots are the ground vias, and the gray dots that are encircled in red are vias either to the power plane or vias for digital control. For more information on the ADMFM2000-EVALZ, visit www.analog.com/EVAL-ADMF2000.

Ensure that the decoupling capacitors are located as close as possible to the supply voltage balls.

890

Figure 62. Evaluation Board Layout for the ADMFM2000-EVALZ, Top View (Through the ADMFM2000)

<!-- image -->

## VENT HOLE

The ADMFM2000 package contains a vent hole on the top of the metal lid. Keep this vent hole open during the ADMFM2000-EVALZ reflow process and cover it with Kapton tape during board wash. After board washing, remove the Kapton tape. When the fully assembled PCB is either in storage or operation, the vent hole must be left open and a gas-permeable tape is recommended for protecting the ADMFM2000 from moisture and water. If a heatsink is added on the top of the package, the hole must not be blocked so that air can circulate.

## POWER MANAGEMENT RECOMMENDATIONS

The ADMFM2000 has three voltage supplies, two +5 V supplies and a -5 V supply, and each supply has different maximum current requirements. To supply both voltages to several ADMFM2000 devices, follow the power management recommendations detailed within this section and shown in Figure 63. A 12 V supply is assumed available in the application, and this supply is used as the input voltage for two LT8627SP (+5 V) devices and one LTM8074 (-5 V) device.

Figure 63. Power Management

<!-- image -->

For the two 5 V supplies, the voltage steps down from 12 V to 5 V with the LT8627SP. For the -5 V supply, the voltage steps down from +12 V to -5 V with the LTM8074. The LT8627SP output can drive the two 5 V supplies of up to 32 ADMFM2000 devices. The maximum expected 5 V current on one LT8627SP for the LO driver supplies is 267 mA per ADMFM2000 device, totaling 8.54 A for the 32 LO driver inputs. The maximum expected 5 V current on the second LT8627SP for the LNA supplies is 289 mA per ADMFM2000 device, totaling 9.25 A for the 32 LO driver inputs.

For the -5 V supply, the voltage steps down from 12 V to -5 V using the LTM8074. The maximum expected -5 V current is 16 mA per ADMFM2000 device, totaling 512 mA for the 32 ADMFM2000 devices.

## OUTLINE DIMENSIONS

Figure 64. 179-Ball Premolded Cavity Ball Grid Array [BGA\_CAV]

<!-- image -->

(BV-179-1) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description   | Package Option   |
|---------------|---------------------|-----------------------|------------------|
| ADMFM2000ABVZ | -40°C to +85°C      | 179-Ball BGA_CAV      | BV-179-1         |

## EVALUATION BOARDS

Table 11. Evaluation Boards

| Model 1         | Description      |
|-----------------|------------------|
| ADMFM2000-EVALZ | Evaluation Board |

<!-- image -->

Updated: October 10, 2023