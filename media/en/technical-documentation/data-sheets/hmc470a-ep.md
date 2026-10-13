<!-- lastmod 2022-04-11 -->
<!-- image -->

## Enhanced Product

## FEATURES

Attenuation

Range: 31 dB

Step size: 1 dB

Insertion loss: 1.7 dB typical at 2.3 GHz to 3.0 GHz

Excellent attenuation accuracy: ±0.3 dB

High Input linearity

0.1 dB compression (P0.1dB): 27 dBm typical at VDD = 5 V

Third-order intercept (IP3): 50 dBm typical High power handling: 27 dBm Low phase shift: 27° at 1.5 GHz to 3.0 GHz Single-supply operation: 3 V to 5 V CMOS-/TTL-compatible parallel control 16-lead, 3 mm × 3 mm LFCSP

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications

(AQEC standard) Military temperature range: -55°C to +125°C Controlled manufacturing baseline One assembly/test site One fabrication site Enhanced product change notification Qualification data available on request

## APPLICATIONS

Cellular infrastructure Microwave radios and very small aperture terminals (VSATs) Test equipment and sensors IF and RF designs

## GENERAL DESCRIPTION

The HMC470A-EP is a 5-bit digital step attenuator (DSA) with a 31 dB attenuation control range in 1 dB steps.

The HMC470A-EP offers excellent attenuation accuracy and high input linearity over the specified frequency range from 0.1 GHz to 3.0 GHz. However, this DSA features ACGx pins for external ac grounding capacitors to extend the operation below 100 MHz.

## 0.1 GHz to 3.0 GHz,1 dB LSB,

## 5-Bit, GaAs Digital Step Attenuator

[HMC470A-EP](http://www.analog.com/HMC470A?doc=HMC470A-EP.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The HMC470A-EP operates with a single positive supply voltage from 3 V to 5 V and providesCMOS-/TTL-compatible parallel control interface by incorporating an on-chip driver. The HMC470A-EP comes in a RoHS compliant, compact, 3 mm × 3 mm LFCSP.

Additional application and technical information can be found in the HMC470A data sheet.

## [HMC470A-EP](http://www.analog.com/HMC470A?doc=HMC470A-EP.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................ 1                    |
| Applications ....................................................................................... 1      |
| Functional Block Diagram .............................................................. 1                   |
| General Description ......................................................................... 1             |
| Revision History ............................................................................... 2          |
| Specifications ..................................................................................... 3      |
| Absolute Maximum Ratings ............................................................ 4                     |
| Thermal Resistance ...................................................................... 4                 |

## REVISION HISTORY

10/2017-Revision 0: Initial Version

## Enhanced Product

| ESD Caution...................................................................................4   |
|---------------------------------------------------------------------------------------------------|
| Pin Configuration and Function Descriptions ..............................5                       |
| Interface Schematics .....................................................................6       |
| Typical Performance Characteristics ..............................................7               |
| Input Power Compression and Insertion Loss ..........................7                            |
| Outline Dimensions ..........................................................................8    |
| Ordering Guide .............................................................................8     |

## SPECIFICATIONS

VDD = 3 V to 5 V , V1 to V5 control pins voltage (VCTL) = 0 V or VDD, TCASE = 25°C, 50 Ω system, unless otherwise noted.

## Table 1.

| Parameter                 | Symbol          | Test Conditions/Comments                                           | Min                              | Typ   | Max                              | Unit    |
|---------------------------|-----------------|--------------------------------------------------------------------|----------------------------------|-------|----------------------------------|---------|
| FREQUENCY RANGE           |                 |                                                                    | 0.1                              |       | 3.0                              | GHz     |
| INSERTION LOSS            |                 | 0.1 GHz to 1.5 GHz                                                 |                                  | 1.3   | 1.6                              | dB      |
|                           |                 | 1.5 GHz to 2.3 GHz                                                 |                                  | 1.5   | 1.8                              | dB      |
|                           |                 | 2.3 GHz to 3.0 GHz                                                 |                                  | 1.7   | 2.0                              | dB      |
| ATTENUATION               |                 |                                                                    |                                  |       |                                  |         |
| Control Range             |                 | Between minimum and maximum attenuation states, 0.1 GHz to 3.0 GHz |                                  | 31    |                                  | dB      |
| Step Size                 |                 | Between any successive attenuation states, 0.1 GHz to 3.0 GHz      |                                  | 1     |                                  | dB      |
| Step Error                |                 | Between any successive attenuation states, 0.1 GHz to 33 GHz       |                                  | <±0.2 |                                  | dB      |
| State Error               |                 | Referenced to insertion loss state                                 |                                  |       |                                  |         |
|                           |                 | All attenuation states, 0.1 GHz to 2.3 GHz                         | -(0.3 + 2% of attenuation state) |       | +(0.3 + 2% of attenuation state) | dB      |
|                           |                 | 1 dB to 15 dB attenuation states, 2.3 GHz to 3.0 GHz               | -(0.3 + 3% of attenuation state) |       | +(0.3 + 3% of attenuation state) | dB      |
|                           |                 | 16 dB to 31 dB attenuation states, 2.3 GHz to 3.0 GHz              | -(0.3 + 6% of attenuation state) |       | +(0.3 + 6% of attenuation state) | dB      |
| RETURN LOSS               |                 | RF1 and RF2 pins, all attenuation states, 0.1 GHz to 3.0 GHz       |                                  | 14    |                                  | dB      |
| RELATIVE PHASE            |                 | Between minimum and maximum attenuation states 0.1 GHz to 1.5 GHz  |                                  |       |                                  |         |
|                           |                 |                                                                    |                                  | 12    |                                  | Degrees |
|                           |                 | 1.5 GHz to 3.0 GHz                                                 |                                  | 27    |                                  | Degrees |
| SWITCHING CHARACTERISTICS |                 | Between all attenuation states                                     |                                  |       |                                  |         |
| Rise and Fall Time        | t RISE , t FALL | 10% to 90% of RF output                                            |                                  | 50    |                                  | ns      |
| On and Off Time           | t ON , t OFF    | 50% V CTL to 90% of RF output                                      |                                  | 70    |                                  | ns      |
| INPUT LINEARITY 1         |                 | All attenuation states,                                            |                                  |       |                                  |         |
| 0.1 dB Compression        | P0.1dB          | V DD = 3 V                                                         |                                  | 25    |                                  | dBm     |
|                           |                 | V DD = 5 V                                                         |                                  | 27    |                                  | dBm     |
| Third-Order Intercept     | IP3             | 10 dBm per tone, 1 MHz spacing                                     |                                  | 50    |                                  | dBm     |
| SUPPLY CURRENT            | I DD            |                                                                    |                                  | 1.7   |                                  | mA      |
| DIGITAL CONTROL INPUTS    |                 | V1 to V5 pins                                                      |                                  |       |                                  |         |
| Voltage                   |                 |                                                                    |                                  |       |                                  |         |
| Low                       | V INL           |                                                                    | 0                                |       | 0.8                              | V       |
| High                      | V INH           |                                                                    | 2.0                              |       | V DD                             | V       |
| Current                   |                 |                                                                    |                                  |       |                                  |         |
| Low                       | I INL           |                                                                    |                                  | 1     |                                  | µA      |
| High                      | I INH           |                                                                    |                                  | 40    |                                  | µA      |

1 Input linearity performance degrades at frequencies less than 250 MHz; see Figure 7 and Figure 9.

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                                                 | Rating            |
|-------------------------------------------------------------------------------------------|-------------------|
| Supply Voltage                                                                            | 7 V               |
| Digital Control Input Voltage                                                             | -1 V to V DD +1 V |
| RF Input Power 1 (All Attenuation States, f = 250 MHz to 3 GHz, T CASE = 85°C) V DD = 3 V | 25 dBm            |
| V DD = 5 V                                                                                | 27 dBm            |
| Continuous Power Dissipation, P DISS 2 T CASE = 85°C                                      | 0.5 W             |
| T CASE = 125°C                                                                            | 0.19 W            |
| Temperature Junction, T J                                                                 | 150°C             |
| Storage Range                                                                             | -65°C to +150°C   |
| Reflow 3 (Moisture Sensitivity Level 3 (MSL3) Rating)                                     | 260°C             |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM)                          | 250 V (Class 1A)  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Only one absolute maximum rating can be applied at any one time.

Figure 2. Power Derating at Frequencies Less Than 250 MHz

<!-- image -->

Figure 3. Maximum Power Dissipation vs. Case Temperature

<!-- image -->

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJA is the junction to ambient air thermal resistance, and θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| Package Type   |   θ JA | θ JC   | Unit   |
|----------------|--------|--------|--------|
| CP-16-51 1     |    297 | 130 2  | °C/W   |

- 1  Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with five thermal vias. See JEDEC JESD-51.
- 2  The device is set to maximum attenuation state.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## Table 4. Pin Function Descriptions

| Pin No.   | Mnemonic     | Description                                                                                                                                                                                                                                                                 |
|-----------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | VDD          | Power Supply. See Figure 6 for the interface schematic.                                                                                                                                                                                                                     |
| 2         | RF1          | RF Input or Output of the Attenuator. The RF1 pin is dc-coupled to VDD and ac matched to 50 Ω. An external dc blocking capacitor is required. Select the capacitor value for the lowest frequency of operation. See Figure 5 for the interface schematic.                   |
| 3, 10     | NIC          | Not Internally Connected. These pins are not internally connected; however, all data shown herein was measured when these pins were connected to the RF/dc ground of the evaluation board.                                                                                  |
| 4 to 9    | ACG1 to ACG6 | AC Grounding Capacitor Pins. Leave these pins not connected when operating above 700 MHz. For frequencies less than 700 MHz, connect capacitors larger than 100 pF as close to the ACGx pins as possible. Select the capacitor value for the lowest frequency of operation. |
| 11        | RF2          | RF Input or Output of the Attenuator. The RF2 pin is dc-coupled to VDD and ac matched to 50 Ω. An external dc blocking capacitor is required. Select the capacitor value for the lowest frequency of operation. See Figure 5 for the interface schematic.                   |
| 12 to 16  | V1 to V5     | Parallel Control Voltage Inputs. These pins select the required attenuation (see Table 5). See Figure 6 for the interface schematic.                                                                                                                                        |
|           | EPAD         | Exposed Pad. The exposed pad must be connected to ground for proper operation.                                                                                                                                                                                              |

## Table 5. P4 to P0 Truth Table

| Digital Control Input 1   | Digital Control Input 1   | Digital Control Input 1   | Digital Control Input 1   | Digital Control Input 1   |                        |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|------------------------|
| V1                        | V2                        | V3                        | V4                        | V5                        | Attenuation State (dB) |
| High                      | High                      | High                      | High                      | High                      | 0 (reference)          |
| High                      | High                      | High                      | High                      | Low                       | 1                      |
| High                      | High                      | High                      | Low                       | High                      | 2                      |
| High                      | High                      | Low                       | High                      | High                      | 4                      |
| High                      | Low                       | High                      | High                      | High                      | 8                      |
| Low                       | High                      | High                      | High                      | High                      | 16                     |
| Low                       | Low                       | Low                       | Low                       | Low                       | 31                     |

1 Any combination of the control voltage input states shown in Table 5 provides an attenuation equal to the sum of the bits selected.

## NOTES

1. NIC = THESE PINS ARE NOT INTERNALLY CONNECTED; HOWEVER, ALL DATA SHOWN HEREIN WAS MEASURED WHEN THESE PINS CONNECTED TO RF/DC GROUND OF EVALUATION BOARD.
2. EXPOSED PAD. THE EXPOSED PAD MUST BE CONNECTED TO GROUND FOR PROPER OPERATION.

Figure 4. Pin Configuration

16364-004

## [HMC470A-EP](http://www.analog.com/HMC470A?doc=HMC470A-EP.pdf)

## INTERFACE SCHEMATICS

Figure 5. RF1, RF2 Interface Schematic

<!-- image -->

Figure 6. Digital Control Input Interface

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

See the HMC470A data sheet for a full set of the Typical Performance Characteristics plots.

## INPUT POWER COMPRESSION AND INSERTION LOSS

<!-- image -->

Figure 7. Input P0.1dB vs. Frequency at Minimum Attenuation State for Various Temperatures, VDD = 5 V

Figure 8. Insertion Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 9. Input P0.1dB vs. Frequency at Minimum Attenuation State for Various Temperatures, VDD = 3 V

<!-- image -->

## OUTLINE DIMENSIONS

PKG-005376

<!-- image -->

02-23-2017-A

COMPLIANT TO JEDEC STANDARDS MO-220-VEED-4

Figure 10. 16-Lead Lead Frame Chip Scale Package [LFCSP] 3 mm × 3 mm Body and 0.85 mm Package Height (CP-16-51)

Dimensions shown in millimeters

| Model 1            | Temperature Range   | MSL Rating 2   | Package Description                           | Package Option   | Branding   |
|--------------------|---------------------|----------------|-----------------------------------------------|------------------|------------|
| HMC470ATCPZ-EP-PT  | -55°C to +125°C     | MSL3           | 16-Lead Lead Frame Chip Scale Package [LFCSP] | CP-16-51         | Y6U        |
| HMC470ATCPZ-EP-RL7 | -55°C to +125°C     | MSL3           | 16-Lead Lead Frame Chip Scale Package [LFCSP] | CP-16-51         | Y6U        |

## ORDERING GUIDE

1  The HMC470ATCPZ-EP-PT and the HMC470ATCPZ-EP-RL7 models are RoHS Compliant.

2  See the Absolute Maximum Ratings section.

<!-- image -->

DETAIL A