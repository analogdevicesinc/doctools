<!-- lastmod 2019-04-17 -->
<!-- image -->

Data Sheet

## FEATURES

Low noise floor: -153 dBc/Hz at 100 kHz offset Programmable frequency divider (N) N = 1, 2, 4, or 8 Wide bandwidth: 0.1 GHz to 24 GHz Low current consumption: 81 mA in the N = 8 divide state HBM ESD sensitivity, Class 2 classification FICDM ESD sensitivity, Class C3 classification 16-lead, 3 mm × 3 mm LFCSP package: 9 mm 2

## APPLICATIONS

Satellite communication systems Point to point and point to multipoint radios Military applications Test equipment

## GENERAL DESCRIPTION

The HMC862A is a low noise, programmable frequency divider in a 3 mm × 3 mm, leadless, surface-mount package. The frequency divider, N, can be programmed to divide from 1, 2, 4, or 8 in the 0.1 GHz to 24 GHz input frequency range.

## 0.1 GHz to 24 GHz, Low Noise,

## Programmable Divider

[HMC862A](https://www.analog.com/HMC862A?doc=HMC862A.pdf)

## FUNCTIONAL BLOCK DIAGRAM HMC862A

<!-- image -->

The low phase noise, wide frequency range, and flexible division ratio make this device ideal for high performance and wideband communication systems.

<!-- image -->

## [HMC862A](https://www.analog.com/HMC862A?doc=HMC862A.pdf)

## TABLE OF CONTENTS

| Features ..............................................................................................   |   1 |
|-----------------------------------------------------------------------------------------------------------|-----|
| Applications.......................................................................................       |   1 |
| Functional Block Diagram ..............................................................                   |   1 |
| General Description.........................................................................              |   1 |
| Revision History ...............................................................................          |   2 |
| Specifications.....................................................................................       |   3 |
| RF Specifications ..........................................................................              |   3 |
| DCSpecifications .........................................................................                |   4 |
| Absolute Maximum Ratings............................................................                      |   5 |
| Thermal Resistance ......................................................................                 |   5 |
| ESD Caution..................................................................................             |   5 |
| Pin Configuration and Function Descriptions.............................                                  |   6 |
| Typical Performance Characteristics .............................................                         |   7 |
| Divide by 1.....................................................................................          |   7 |
| REVISION HISTORY                                                                                          |     |
| 4/2019-Rev. 0 to Rev.A                                                                                    |     |
| Added Thermal Resistance Section and Table 4 ..........................                                   |   5 |
| Changes to Theory of Operation Section....................................                                |  12 |
| Changes to Ordering Guide..........................................................                       |  15 |

10/2017-Revision 0: Initial Version

| Divide by 2 .....................................................................................8   |
|------------------------------------------------------------------------------------------------------|
| Divide by 4 .....................................................................................9   |
| Divide by 8 .................................................................................. 10    |
| Current Consumption (I CC ) ...................................................... 11                |
| Theory of Operation ...................................................................... 12        |
| Input Interface ............................................................................ 12      |
| Output Interface ......................................................................... 12        |
| Applications Information.............................................................. 13            |
| Evaluation Printed Circuit Board (PCB) ................................ 13                           |
| Evaluation Board Overview...................................................... 14                   |
| Outline Dimensions....................................................................... 15         |
| Ordering Guide .......................................................................... 15         |

## SPECIFICATIONS

## RF SPECIFICATIONS

VCC = 5 V , TA = -40°C to +85°C, unless otherwise noted.

Table 1.

| Parameter                                                    | Test Conditions/Comments                          |   Min |   Typ |   Max | Unit   |
|--------------------------------------------------------------|---------------------------------------------------|-------|-------|-------|--------|
| RF INPUT CHARACTERISTICS                                     |                                                   |       |       |       |        |
| RF Input Frequency                                           |                                                   |       |       |       |        |
| Maximum                                                      | Sine wave or square wave input                    |       |       |       |        |
| N=1                                                          |                                                   |    18 |       |       | GHz    |
| N=2, 4, 8                                                    |                                                   |    24 |       |       | GHz    |
| Minimum                                                      | Square wave input 1                               |       |       |   0.1 | GHz    |
| RF InputPowerRange                                           |                                                   |       |       |       |        |
| N=1, 2                                                       | 0.1 GHz< f IN < 18 GHz, sine or square wave input |   -15 |       |   +10 | dBm    |
| N=2                                                          | 18 GHz < f IN < 24 GHz, sine or square wave input |    -5 |       |   +10 | dBm    |
| N=4, 8                                                       | 0.1GHz<f IN <20GHz,sine or square waveinput 1     |   -15 |       |   +10 | dBm    |
|                                                              | 20 GHz < f IN < 24 GHz, sine or square wave input |    -5 |       |   +10 | dBm    |
| Reverse Leakage                                              |                                                   |       |       |       |        |
| N=1                                                          | f IN = 6 GHz, input power (P IN )=0dBm            |       |   -10 |       | dBm    |
| N=2                                                          | f IN = 6 GHz, P IN =0dBm                          |       |   -55 |       | dBm    |
| N=4, 8                                                       | f IN = 6 GHz, P IN =0dBm                          |       |   -70 |       | dBm    |
| RF OUTPUT CHARACTERISTICS,N=1                                |                                                   |       |       |       |        |
| Output Power, Single-Ended                                   | 0.1 GHz < f IN < 10 GHz                           |    -1 |    +3 |    +5 | dBm    |
|                                                              | 10 GHz < f IN < 15 GHz                            |    -5 |    -2 |    +3 | dBm    |
|                                                              | 15 GHz < f IN < 18 GHz                            |   -11 |    -6 |     0 | dBm    |
| Single-Sideband (SSB) Residual Phase Noise at 100 kHz Offset | f IN = 12 GHz, P IN =5dBm                         |       |  -155 |       | dBc/Hz |
| Second Harmonic                                              | f IN = 6 GHz, P IN =0dBm                          |       |   -27 |       | dBm    |
| Third Harmonic                                               | f IN = 6 GHz, P IN =0dBm                          |       |    -6 |       | dBm    |
| RF OUTPUT CHARACTERISTICS,N=2                                |                                                   |       |       |       |        |
| Output Power, Single-Ended                                   | 0.1 GHz < f IN < 18 GHz                           |     0 |     3 |     5 | dBm    |
|                                                              | 18 GHz < f IN < 24 GHz                            |    -3 |     0 |    +3 | dBm    |
| SSB Residual Phase Noise at 100 kHz Offset                   | f IN = 12 GHz, P IN =5dBm                         |       |  -153 |       | dBc/Hz |
| Second Harmonic (Feedthrough)                                | f IN = 6 GHz, P IN =0dBm                          |       |   -28 |       | dBm    |
| Third Harmonic                                               | f IN = 6 GHz, P IN =0dBm                          |       |    -7 |       | dBm    |
| RF OUTPUT CHARACTERISTICS,N=4                                |                                                   |       |       |       |        |
| Output Power, Single-Ended                                   | 0.1 GHz < f IN < 18 GHz                           |     0 |     2 |     4 | dBm    |
|                                                              | 18 GHz < f IN < 24 GHz                            |    -1 |    +3 |    +6 | dBm    |
| SSB Residual Phase Noise at 100 kHz Offset                   | f IN = 12 GHz, P IN =5dBm                         |       |  -154 |       | dBc/Hz |
| Second Harmonic                                              | f IN = 6 GHz, P IN =0dBm                          |       |   -35 |       | dBm    |
| Third Harmonic                                               | f IN = 6 GHz, P IN =0dBm                          |       |    -6 |       | dBm    |
| RF OUTPUT CHARACTERISTICS,N=8                                |                                                   |       |       |       |        |
| Output Power, Single-Ended                                   | 0.1 GHz < f IN < 24 GHz                           |     0 |     2 |     4 | dBm    |
| SSB Residual Phase Noise at 100 kHz Offset                   | f IN = 12 GHz, P IN =5dBm                         |       |  -155 |       | dBc/Hz |
| Second Harmonic                                              | f IN = 6 GHz, P IN =0dBm                          |       |   -45 |       | dBm    |
| Third Harmonic                                               | f IN = 6 GHz, P IN =0dBm                          |       |    -7 |       | dBm    |

1  A square wave input is recommended to be below 650 MHz for best phase noise performance. If a sine wave input below 650 MHz is used, it is recommended that the drive level be &gt;5 dBm for best operation, including phase noise. Refer to the Typical Performance Characteristics section.

<!-- image -->

<!-- image -->

## DC SPECIFICATIONS

VCC = 5 V , TA = -40°C to +85°C, unless otherwise noted.

## Table 2.

| Parameter                    | Test Conditions/Comments   |   Min |   Typ |   Max | Unit   |
|------------------------------|----------------------------|-------|-------|-------|--------|
| POWER SUPPLIES               |                            |       |       |       |        |
| V CC                         | Analog supply              |  4.75 |     5 |  5.25 | V      |
| CURRENT CONSUMPTION, I CC    |                            |       |       |       |        |
| N=1                          |                            |    55 |    61 |    71 | mA     |
| N=2                          |                            |    64 |    73 |    84 | mA     |
| N=4                          |                            |    68 |    78 |    90 | mA     |
| N=8                          |                            |    71 |    81 |    94 | mA     |
| DIGITAL INPUT S (S0, S1, S2) |                            |       |       |       |        |
| Logic Voltage                |                            |       |       |       |        |
| Low                          |                            |     0 |       |   0.4 | V      |
| High                         |                            |     3 |       |     5 | V      |

## ABSOLUTE MAXIMUM RATINGS

## Table 3.

| Parameter                                                                     | Rating              |
|-------------------------------------------------------------------------------|---------------------|
| RF Input Power (IN, IN)                                                       | 13dBm               |
| Supply Voltage (V CC )                                                        | 5.5V                |
| Logic Inputs (S0, S1, S2)                                                     | -0.5Vto(0.5V+V CC ) |
| Storage Temperature Range                                                     | -65°C to +125°C     |
| Reflow Temperature                                                            | 260°C               |
| Operating Temperature Range (T A )                                            | -40°C to +85°C      |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM), JS-001-2012 | Class 2             |
| Field Induced Charged Device Model (FICDM), JS-002                            | Class C3            |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

Thermal impedance simulated values are based on the use of the EV1HMC862ALP3 evaluation board with the exposed pad soldered to GND. VCC = 5 V and Divider Ratio (N) = 8.

## Table 4.

| PackageType   |   Thermal Impedance (θ JB ) | Unit   |
|---------------|-----------------------------|--------|
| HCP-16-1      |                          34 | °C/W   |

## ESD CAUTION

<!-- image -->

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.                | Mnemonic   | Description                                                                                                                                                               |
|------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 8, 9, 12, 14, 15 | GND        | Ground.The backside of the package hasanexposedmetal ground slug that must beconnected to RF/dc ground.                                                                   |
| 2                      | IN         | RF Input. This pin must be dc blocked.                                                                                                                                    |
| 3                      | IN         | RF Input, 180° Out of Phase with Pin 2 for Differential Operation. This pin must be ac grounded for single-ended operation. DC block this pin for differential operation. |
| 5, 6, 7                | S0, S1, S2 | CMOS Compatible Division Ratio Control Bits. See Table 6.                                                                                                                 |
| 10                     | OUT        | Divider Output, 180° Out of Phase with Pin 11.ThisRF output mustbedcblocked. See Figure 31for proper termination.                                                         |
| 11                     | OUT        | Divided Output. This RF output must be dc blocked. See Figure 31 for proper termination.                                                                                  |
| 13, 16                 | V CC       | Supply Voltage Pins, 5 V. Connect bothV CC pins to a 5V supply. These pins are internally connected.                                                                      |
|                        | EPAD       | Exposed Pad. Exposed pad must be connected to RF/dc ground.                                                                                                               |

## TYPICAL PERFORMANCE CHARACTERISTICS

## DIVIDE BY 1

<!-- image -->

Figure 3. Output Power vs. Sine Wave Input Frequency for Various Temperatures, PIN = 0 dBm

<!-- image -->

Figure 4. Allowable Range of Input Power vs. Sine Wave Input Frequency for Various Temperatures

<!-- image -->

Figure 5. SSB Phase Noise vs. Offset Frequency for Various Input Frequencies, PIN = 0 dBm, TA = 25°C

<!-- image -->

<!-- image -->

Figure 6. Output Power vs. Sine Wave Input Frequency for Various VCC Voltages, PIN = 0 dBm

Figure 7. Output Harmonics, PIN = 0 dBm, TA = 25°C

<!-- image -->

Figure 8. SSB Phase Noise vs. Offset Frequency for Various Input Power (PIN) Levels, fIN = 12 GHz Sine Wave, TA = 25°C

<!-- image -->

## DIVIDE BY 2

<!-- image -->

Figure 9. Output Power vs. Sine Wave Input Frequency for Various Temperatures, PIN = 0 dBm

<!-- image -->

Figure 10. Allowable Range of Input Power vs. Sine Wave Input Frequency for Various Temperatures

<!-- image -->

Figure 11. SSB Phase Noise vs. Offset Frequency for Various Input Frequencies, PIN = 0 dBm, TA = 25°C

<!-- image -->

Figure 12. Output Power vs. Sine Wave Input Frequency for Various VCC Voltages, PIN = 0 dBm

Figure 13. Output Harmonics, PIN = 0 dBm, TA = 25°C

<!-- image -->

Figure 14. SSB Phase Noise vs. Offset Frequency for Various Input Power (PIN) Levels, fIN = 12 GHz Sine Wave, TA = 25°C

<!-- image -->

## DIVIDE BY 4

<!-- image -->

Figure 15. Output Power vs. Sine Wave Input Frequency for Various Temperatures, PIN = 0 dBm

<!-- image -->

Figure 16. Allowable Range of Input Power vs. Sine Wave Input Frequency for Various Temperatures

<!-- image -->

Figure 17. SSB Phase Noise vs. Offset Frequency for Various Input Frequencies, PIN = 0 dBm, TA = 25°C

<!-- image -->

<!-- image -->

Figure 18. Output Power vs. Sine Wave Input Frequency for Various VCC Voltages, PIN = 0 dBm

Figure 19. Output Harmonics, PIN = 0 dBm, TA = 25°C

<!-- image -->

Figure 20. SSB Phase Noise vs. Offset Frequency for Various Input Power (PIN) Levels, fIN = 12 GHz Sine Wave, TA = 25°C

<!-- image -->

<!-- image -->

## DIVIDE BY 8

<!-- image -->

Figure 21. Output Power vs. Sine Wave Input Frequency for Various Temperatures, PIN = 0 dBm

<!-- image -->

Figure 22. Allowable Range of Input Power vs. Sine Wave Input Frequency for Various Temperatures

<!-- image -->

Figure 23. SSB Phase Noise vs. Offset Frequency for Various Input Frequencies, PIN = 0 dBm, TA = 25°C

<!-- image -->

Figure 24. Output Power vs. Sine Wave Input Frequency for Various Vcc Voltages, PIN = 0 dBm

Figure 25. Output Harmonics, PIN = 0 dBm, TA = 25°C

<!-- image -->

Figure 26. SSB Phase Noise vs. Offset Frequency for Various Input Power (PIN) Levels, fIN = 12 GHz Sine Wave, TA = 25°C

<!-- image -->

## CURRENT CONSUMPTION (ICC)

<!-- image -->

Figure 27. Input Power vs. Sine Wave Input Frequency

<!-- image -->

## THEORY OF OPERATION

The HMC862A is a wideband, configurable RF divider with minimal additive phase noise.

The divide ratio, N, can be programmed to N = 1, 2, 4, or 8 by setting the digital input pins-S0, S1, and S2-to the logic high (1) or logic low (0) states indicated in Table 6.

## Table 6. Programming Truth Table for Frequency Division Ratios 1

|   S0 |   S1 |   S2 |   Divide Ratio (N) |
|------|------|------|--------------------|
|    0 |    0 |    0 |                  1 |
|    1 |    0 |    0 |                  2 |
|    1 |    1 |    0 |                  4 |
|    1 |    1 |    1 |                  8 |

The HMC862A does not support any other combination of the S0, S1, and S2 programming states other than those listed in Table 6. Using other programming states causes the HMC862A to generate an unstable output.

Enable the HMC862A by applying a voltage (VCC) to the supply pins, VCC. These pins are internally connected.

Note that the VCC voltage must be applied before the logic level signals (S0, S1, and S2) can be driven to a logic high to prevent the ESD diodes from turning on.

The HMC862A toggles on the rising edge of the IN input for all divide ratios where N = 1, 2, 4, or 8.

## INPUT INTERFACE

The HMC862A can be driven by differential or single-ended input signals, and can provide differential or single-ended output signals.

Figure 28 shows the input interface schematic for the IN and IN pins.

Figure 28. Input Interface Schematic

<!-- image -->

For differential input signals, ac couple the IN and IN pins as shown in Figure 29. Off-chip termination is not required because the IN and IN pins have internal 50 Ω termination resistors.

For single-ended input signals, ac couple the IN input. AC ground the IN pin as close to the IN pin as possible.

Figure 29. Recommended Input Configuration for Single-Ended Operation (Left) and Differential Operation (Right)

<!-- image -->

## OUTPUT INTERFACE

Figure 30 shows the output interface schematic for the OUT and OUT pins.

Figure 30. Output Interface Schematic

<!-- image -->

To provide a differential output or two single-ended outputs, ac couple the OUT and OUT pins. Off-chip termination is not required because the OUT and OUT pins have internal 50 Ω termination resistors.

If only one output pin is used, connect the unused output pin to ground through a capacitor and a 50 Ω termination

Figure 31. Recommended Output Configuration for Single-Ended Operation (Left) and Differential Operation (Right)

<!-- image -->

## APPLICATIONS INFORMATION

## EVALUATION PRINTED CIRCUIT BOARD (PCB)

<!-- image -->

Figure 33. Evaluation PCB Schematic

<!-- image -->

## EVALUATION BOARD OVERVIEW

Use the EV1HMC862ALP3 evaluation board to evaluate the HMC862A.

The HMC862A is enabled by applying 5 V between J6 (VCC) and J7 (GND). Note that J6 only provides power to Pin 13 on the HMC862A; however, because Pin 13 and Pin 16 are internally connected, both VCC pins receive power.

The divide ratio, N, is selected by inserting pin jumpers on Component J5, as shown in Table 7. When installed, a jumper pulls the digital input pin to ground and sets a logic low. When removed, the R1, R2, and R3 pull-up resistors pull the digital input to VCC and set a logic high.

Table 7. Jumper Configuration for EV1HMC862ALP3

|   Divide Ratio (N) | S0 Jumper   | S1 Jumper   | S2 Jumper   |
|--------------------|-------------|-------------|-------------|
|                  1 | Installed   | Installed   | Installed   |
|                  2 | Open        | Installed   | Installed   |
|                  4 | Open        | Open        | Installed   |
|                  8 | Open        | Open        | Open        |

By default, the evaluation board is set up to accept a singleended input and provide a differential output. A differential input can be used by removing Component C5; a single-ended output can be generated by terminating J4 with a 50 Ω termination.

It is recommended that the circuit board used in the application use RF circuit design techniques with a 50 Ω impedance on the signal lines and with the package ground leads and backside ground pad connected directly to the ground plane. Use a sufficient number of via holes to connect the top and bottom ground planes. The evaluation circuit board shown is available from Analog Devices, Inc., upon request.

## Table 8. List of Materials for EV1HMC862ALP3

| Item     | Description                                                    |
|----------|----------------------------------------------------------------|
| J1 to J4 | PCB-mount K connector                                          |
| J5       | DC connector header,Molex2mm                                   |
| C1 to C5 | ATC550L104KTT, 100 nF, 16 V, broadband capacitor, 0402 package |
| C6       | 1000 pF capacitor, 0603 package                                |
| C7       | 2.2 μF capacitor, tantalum, 3216 package                       |
| R1 to R3 | 10 kΩ resistor, 0402 package                                   |
| J6, J7   | Mill-Max 0.040 inch diameter PCpin, 3101-2-00-21-00- 00-08-0   |
| U1       | HMC862A, programmable divider                                  |
| Heatsink | Custom heatsink, alumimum                                      |
| PCB      | 600-01663-00-1 evaluation board                                |

## OUTLINE DIMENSIONS

<!-- image -->

Dimensions shown in millimeters

| Model 1       | TemperatureRange   | PackageDescription                            | LeadFinish   | MSL Rating 2   | PackageOption   |
|---------------|--------------------|-----------------------------------------------|--------------|----------------|-----------------|
| HMC862ALP3E   | -40°C to +85°C     | 16-Lead Lead Frame Chip Scale Package [LFCSP] | 100%MatteSn  | MSL3           | HCP-16-1        |
| HMC862ALP3ETR | -40°C to +85°C     | 16-Lead Lead Frame Chip Scale Package [LFCSP] | 100%MatteSn  | MSL3           | HCP-16-1        |
| EV1HMC862ALP3 |                    | Evaluation Board                              |              |                |                 |

## ORDERING GUIDE

1  The HMC862ALP3E and HMC862ALP3ETR are RoHS compliant.

2  The maximum peak reflow temperature is 260°C. See the Absolute Maximum Ratings section for more information.

<!-- image -->

03-15-2017-B

<!-- image -->