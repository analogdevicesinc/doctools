<!-- lastmod 2020-04-01 -->
<!-- image -->

<!-- image -->

## 0.1 GHz to 13.0 GHz, 0.5 dB LSB, 6-Bit GaAs Digital Attenuator

## FEATURES

- Attenuation range: 0.5 dB (LSB) steps to 31.5 dB
- ±0.5 dB typical step error
- Low insertion loss: 2.8 dB typical at 4.0 GHz
- High linearity at V EE = -5 V
- Input P0.1dB: 25 dBm typical
- Input IP3: 45 dBm typical
- High RF input power handling: 25 dBm maximum
- Low relative phase: 30° at 6.0 GHz
- Single-supply operation: -3 V to -5 V
- Die size: 1.390 mm × 0.770 mm × 0.102 mm

## APPLICATIONS

- Cellular infrastructure
- Microwave radios and very small aperture terminals (VSATs)
- Test equipment and sensors
- Intermediate frequency (IF) and RF designs
- Military and space

## GENERAL DESCRIPTION

The HMC424ACHIPS is a broadband, 6-bit, gallium arsenide (GaAs), digital attenuator monolithic microwave integrated circuit (MMIC) chip with a 31.5 dB attenuation control range in 0.5 dB steps.

The HMC424ACHIPS offers excellent attenuation accuracy of ±(0.2 dB + 3% of attenuation state) and high input linearity over the specified frequency range from 0.1 GHz to 13.0 GHz with a typical insertion loss of ≤4.2 dB. The attenuator bit values are 0.5 dB (LSB), 1 dB, 2 dB, 4 dB, 8 dB, and 16 dB for a total attenuation of 31.5 dB with a ±0.5 dB of typical step error.

The device allows a user to program the attenuation state via six parallel control inputs toggled between 0 V and V EE .

The HMC424ACHIPS operates with a single negative supply voltage from -3 V to -5 V, and requires an external driver to interface with a CMOS/transistor to transistor logic (TTL) interface.

The HMC424ACHIPS comes in a RoHS compliant, 9-pad bare die.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 Absolute Maximum Ratings...................................4 Thermal Resistance........................................... 4 ESD Caution.......................................................4 Pin Configuration and Function Descriptions........ 5 Interface Schematics..........................................5 Typical Performance Characteristics.....................6   | Input Power Compression and Third-Order Intercept........................................................... 8 Theory of Operation...............................................9 Power Supply.....................................................9 RF Input and Output...........................................9 Applications Information...................................... 10 Mounting and Bonding Techniques..................10 Assembly Diagram...........................................10 Outline   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 5/2026-Rev. B to Rev.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Insertion Loss, Return Loss, State Error, Step Error, and Relative REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Phase........................6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Dimensions..............................................11 Ordering                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Guide.................................................11                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Guide........................................................................................................................... 11                                                                                                                                                                                                                                                                                                                                                                                 |

## SPECIFICATIONS

Supply voltage (V EE ) = -3 V to -5 V, control input voltage (V CTL ) = 0 V or V EE , T CASE = 25°C, 50 Ω system, unless otherwise noted.

Table 1.

| Parameter                          | Symbol                       | Test Conditions/Comments                                   | Min                              | Typ   | Max                              | Unit    |
|------------------------------------|------------------------------|------------------------------------------------------------|----------------------------------|-------|----------------------------------|---------|
| FREQUENCY RANGE                    |                              |                                                            | 0.1                              |       | 13.0                             | GHz     |
| INSERTION LOSS                     | IL                           | 0.1 GHz to 4.0 GHz                                         |                                  | 2.8   | 3.3                              | dB      |
|                                    |                              | 4.0 GHz to 8.0 GHz                                         |                                  | 3.4   | 4.0                              | dB      |
|                                    |                              | 8.0 GHz to 13.0 GHz                                        |                                  | 4.2   | 4.6                              | dB      |
| ATTENUATION                        |                              | 0.1 GHz to 13.0 GHz                                        |                                  |       |                                  |         |
| Range                              |                              | Between minimum and maximum attenuation states             |                                  | 31.5  |                                  | dB      |
| Step Size                          |                              | Between any successive attenuation states                  |                                  | 0.5   |                                  | dB      |
| Step Error                         |                              | Between any successive attenuation states                  |                                  | ±0.5  |                                  | dB      |
| State Error                        |                              | All attenuation states, referenced to insertion loss state |                                  |       |                                  |         |
|                                    |                              | 0.1 GHz to 8.0 GHz                                         | -(0.2 + 3% of attenuation state) |       | +(0.2 + 3% of attenuation state) | dB      |
|                                    |                              | 8.0 GHz to 13.0 GHz                                        | -(0.2 + 4% of attenuation state) |       | +(0.2 + 4% of attenuation state) | dB      |
| RETURN LOSS (RF1 AND RF2)          |                              | All attenuation states, 0.1 GHz to 13.0                    |                                  | 12    |                                  | dB      |
| RELATIVE PHASE                     |                              | Between minimum and maximum attenuation states             |                                  |       |                                  |         |
|                                    |                              | 0.1 GHz to 6.0 GHz                                         |                                  | 30    |                                  | Degrees |
| SWITCHING CHARACTERISTICS          |                              | 6.0 GHz to 13.0 GHz Between all attenuation states         |                                  | 70    |                                  | Degrees |
| Rise and Fall Time On and Off Time | t RISE , t FALL t ON , t OFF | 10% to 90% of RF output 50% V CTL to 90% of RF output      |                                  | 30 50 |                                  | ns ns   |
| INPUT LINEARITY 1                  |                              | All attenuation states, 500 MHz to 6.0                     |                                  |       |                                  |         |
| 0.1 dB Compression                 | P0.1dB                       | V EE = -3 V                                                |                                  | 23    |                                  | dBm     |
|                                    |                              | V EE = -5 V                                                |                                  | 25    |                                  | dBm     |
| Third-Order Intercept              | IP3                          | V EE = -5 V, 10 dBm per tone, 1 MHz spacing                |                                  | 45    |                                  | dBm     |
|                                    |                              | V EE = -3 V, 10 dBm per tone, 1 MHz spacing                |                                  | 35    |                                  | dBm     |
| SUPPLY CURRENT                     | I DD                         | V EE = -3 V to -5 V                                        |                                  | 2     | 5                                | mA      |
| DIGITAL CONTROL INPUTS             |                              | V1 to V6                                                   |                                  |       |                                  |         |
| Voltage                            |                              |                                                            |                                  |       |                                  |         |
| Low                                | V INL                        | V EE = -3 V                                                | -1.0                             |       | 0                                | V       |
|                                    |                              | V EE = -5 V                                                | -3.0                             |       | 0                                | V       |
| High                               | V INH                        | V EE = -3 V                                                | -3.0                             |       | -2.2                             | V       |
|                                    |                              | V EE = -5 V                                                | -5.0                             |       | -4.2                             | V       |
| Current                            |                              | V EE = -3 V to -5 V                                        |                                  |       |                                  |         |
| Low                                | I INL                        |                                                            |                                  | 35    |                                  | µA      |
| High                               | I INH                        |                                                            |                                  | 1     |                                  | µA      |

## ABSOLUTE MAXIMUM RATINGS

| Table 2.                                                                                           |                  |
|----------------------------------------------------------------------------------------------------|------------------|
| Parameter                                                                                          | Rating           |
| Supply Voltage, V EE                                                                               | -7 V             |
| Digital Control Input Voltage                                                                      | V EE - 0.5 V     |
| RF Input Power 1 (All Attenuation States, f = 0.8 to 13.0 GHz, T CASE = 85°C, V EE = -3 V to -5 V) | 25 dBm           |
| Continuous Power Dissipation, P DISS (T CASE = 85°C)                                               | 0.56W            |
| Temperature Junction, T J                                                                          | 150°C            |
| Storage                                                                                            | -65°C to +150°C  |
| ESD Sensitivity, Human Body Model (HBM)                                                            | 250 V (Class 1A) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Only one absolute maximum rating can be applied at any one time.

Figure 2. Power Derating at Frequencies Less than 0.8 GHz

<!-- image -->

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the junction to case thermal resistance.

Table 3. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-9-2 1        |    330 | °C/W   |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 4. Pin Function Descriptions

| Pad No.   | Mnemonic   | Description                                                                                                                                                      |
|-----------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | RF1        | Attenuator RF Input. This pin is dc-coupled and ac matched to 50 Ω. An external dc blocking capacitor is required if the RF line potential is not equal to 0 V.  |
| 2         | VEE        | Power Supply.                                                                                                                                                    |
| 3         | RF2        | Attenuator RF Output. This pin is dc-coupled and ac matched to 50 Ω. An external dc blocking capacitor is required if the RF line potential is not equal to 0 V. |
| 4 to 9    | V1 to V6   | Parallel Control Voltage Inputs. These pins select the required attenuation (see Table 5). There is an internal pull-down resistor on these pins to V EE .       |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 4. RF1 and RF2 Interface Schematic

Figure 5. V1 to V6 Interface Schematic

<!-- image -->

Figure 6. VEE Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## INSERTION LOSS, RETURN LOSS, STATE ERROR, STEP ERROR, AND RELATIVE PHASE

<!-- image -->

Figure 7. Insertion Loss vs. Frequency over Temperature

<!-- image -->

Figure 8. Input Return Loss vs. Frequency over Major Attenuation States

<!-- image -->

Figure 9. State Error vs. Attenuation State over Frequency

<!-- image -->

Figure 10. Normalized Attenuation vs. Frequency over Major Attenuation States

Figure 11. Output Return Loss vs. Frequency over Major Attenuation States

<!-- image -->

Figure 12. State Error vs. Frequency over Major Attenuation States

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 13. Step Error vs. Attenuation State over Frequency

<!-- image -->

Figure 14. Relative Phase vs. Attenuation State over Frequency

Figure 15. Step Error vs. Frequency over Major Attenuation States

<!-- image -->

Figure 16. Relative Phase vs. Frequency over Major Attenuation States

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## INPUT POWER COMPRESSION AND THIRD-ORDER INTERCEPT

<!-- image -->

Figure 17. Input P0.1dB vs. Frequency at Minimum Attenuation State over VEE = -5 V and V EE = -3 V

<!-- image -->

Figure 18. Input P0.1dB vs. Frequency over Major Attenuation States, V EE = -5 V

<!-- image -->

Figure 19. Input P0.1dB vs. Frequency over Major Attenuation States, V EE = -3 V

<!-- image -->

Figure 20. Input IP3 vs. Frequency at Minimum Attenuation State over V EE = -5 V and V EE = -3 V

Figure 21. Input IP3 vs. Frequency over Major Attenuation States, V EE = -5 V

<!-- image -->

Figure 22. Input IP3 vs. Frequency over Major Attenuation States, V EE = -3 V

<!-- image -->

## THEORY OF OPERATION

The HMC424ACHIPS incorporates a 6-bit attenuator die that offers an attenuation range of 31.5 dB in 0.5 dB steps. The attenuation state is changed by the parallel control voltage inputs (V1 to V6) directly (see Table 5).

The HMC424ACHIPS allows the user to program the attenuation state via six parallel control inputs toggled between 0 V and V EE . When interfacing with a TTL/CMOS interface, an external level shifter is required. An example simple driver using standard logic ICs provides fast switching while using minimum dc current. The series resistance is recommended to suppress unwanted RF signals at the input of the V1 to V6 control lines.

## POWER SUPPLY

The HMC424ACHIPS requires a single dc voltage applied to the VEE pin. The ideal power-up sequence is as follows:

1. Connect the ground reference.
2. Apply a supply voltage to the VEE pin.
3. Power up the digital control inputs. The relative order of the digital control inputs is not important.
4. Apply an RF input signal to RF1.

The power-down sequence is the reverse of the power-up sequence.

Table 5. V1 to V6 Truth Table

| Control Voltage Input 1   | Control Voltage Input 1   | Control Voltage Input 1   | Control Voltage Input 1   | Control Voltage Input 1   | Control Voltage Input 1   |                               |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|-------------------------------|
| V1 (16 dB)                | V2 (8 dB)                 | V3 (4 dB)                 | V4 (2 dB)                 | V5 (1 dB)                 | V6 (0.5 dB)               | Attenuation State, RF1 to RF2 |
| Low                       | Low                       | Low                       | Low                       | Low                       | Low                       | Reference insertion loss      |
| Low                       | Low                       | Low                       | Low                       | Low                       | High                      | 0.5 dB                        |
| Low                       | Low                       | Low                       | Low                       | High                      | Low                       | 1 dB                          |
| Low                       | Low                       | Low                       | High                      | Low                       | Low                       | 2 dB                          |
| Low                       | Low                       | High                      | Low                       | Low                       | Low                       | 4 dB                          |
| Low                       | High                      | Low                       | Low                       | Low                       | Low                       | 8 dB                          |
| High                      | Low                       | Low                       | Low                       | Low                       | Low                       | 16 dB                         |
| High                      | High                      | High                      | High                      | High                      | High                      | 31.5 dB                       |

## RF INPUT AND OUTPUT

The attenuator in the HMC424ACHIPS is bidirectional. The RF1 and RF2 pins are interchangeable as the RF input and output ports. The attenuator is internally matched to 50 Ω at both the input and the output. Therefore, no external matching components are required.

The RF input and output pins of the HMC424ACHIPS are internally dc biased to 0 V. Therefore, they require external dc blocking capacitors if the RF line potential is not equal to 0 V. Select the value of these dc blocking capacitors based on the minimum operating frequency. Use larger value capacitors to extend the operation to lower frequencies.

Figure 23. Suggested Driver Circuit

<!-- image -->

## APPLICATIONS INFORMATION

## MOUNTING AND BONDING TECHNIQUES

The HMC424ACHIPS is back metallized and must be attached directly to the ground plane with gold tin (AuSn) eutectic preforms or with electrically conductive epoxy.

The die thickness is 0.102 mm (4 mil). The 50 Ω microstrip transmission lines on 0.127 mm (5 mil) thick alumina thin film substrates are recommended for bringing RF to and from the HMC424ACHIPS (see Figure 24).

Figure 24. Bonding RF Pads to 5 mil Substrate

<!-- image -->

When using 0.254 mm (10 mil) thick alumina thin film substrates, the HMC424ACHIPS must be raised 0.150 mm (6 mil) so that the surface of the HMC424ACHIPS is coplanar with the surface of the substrate. One way to accomplish this is by attaching the 0.102 mm (4 mil) thick die to a 0.150 mm (6 mil) thick molybdenum heat spreader (moly tab), which is then attached to the ground plane (see Figure 25).

Figure 25. Bonding RF Pads to 10 mil Substrate

<!-- image -->

Microstrip substrates are placed as close to the HMC424ACHIPS as possible to minimize bond length. Typical die to substrate spacing is 0.076 mm (3 mil).

RF bonds made with 3 mil × 5 mil ribbon are recommended. DC bonds made with 1 mil diameter wire are recommended. All bonds must be as short as possible.

## ASSEMBLY DIAGRAM

An assembly diagram of the HMC424ACHIPS is shown in Figure 26.

Figure 26. Assembly Diagram

<!-- image -->

## OUTLINE DIMENSIONS

Figure 27. 9-Pad Bare Die [CHIP] (C-9-2) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1    | Temperature Range   | Package Description   | Packing Quantity              | Package Option   |
|------------|---------------------|-----------------------|-------------------------------|------------------|
| HMC424A    | -40°C to +85°C      | 9-Pad Bare Die [CHIP] | Waffle Pack, 50               | C-9-2            |
| HMC424A-GP | -40°C to +85°C      | 9-Pad Bare Die [CHIP] | Gel Pack, 50                  | C-9-2            |
| HMC424A-SX | -40°C to +85°C      | 9-Pad Bare Die [CHIP] | Waffle Pack (Sample Order), 2 | C-9-2            |

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.