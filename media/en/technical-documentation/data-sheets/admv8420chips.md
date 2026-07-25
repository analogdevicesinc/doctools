<!-- lastmod 2022-01-24 -->
<!-- image -->

## FEATURES

- Amplitude settling time: 200 ns
- Wideband rejection: ≥30 dB
- Single chip implementation
- 7-pad, 2.550 mm × 1.370 mm × 0.1016 mm, RoHS-compliant CHIP (see the Outline Dimensions section)

## APPLICATIONS

- Airport scanners
- Test and measurement equipment
- Military radar and electronic warfare systems
- Very small aperture terminal (VSAT) communications

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## [ADMV8420CHIPS](http://www.analog.com/ADMV8420)

## 10 GHz to 22.8 GHz, Tunable Band-Pass Filter

## GENERAL DESCRIPTION

The ADMV8420 is a monolithic microwave IC (MMIC), tunable band-pass filter (BPF) that features a user -selectable pass band frequency. The 3 dB filter bandwidth is approximately 20%, and the 20 dB filter bandwidth is approximately 40%. Additionally, the center frequency (f CENTER ) varies between 10.5 GHz to 21 GHz by applying a center frequency control voltage (V FCTL ) between 0 V to 15 V. The usable pass band 3 dB corner frequency (f 3dB ) spans from 10 GHz to 22.8 GHz. This tunable filter is a smaller alternative to switched filter banks and cavity tuned filters. The ADMV8420 has minimal microphonics due to the monolithic design and provides a dynamically adjustable solution in advanced communications applications.

## TABLE OF CONTENTS

| Features................................................................                                  |   1 |
|-----------------------------------------------------------------------------------------------------------|-----|
| Applications...........................................................                                   |   1 |
| General Description...............................................1                                       |     |
| Functional Block Diagram......................................1                                           |     |
| Specifications........................................................                                    |   3 |
| Absolute Maximum Ratings...................................4                                              |     |
| Electrostatic Discharge (ESD) Ratings...............4                                                     |     |
| ESD Caution.......................................................4                                       |     |
| Pin Configuration and Function Descriptions........ Schematics..........................................5 |   5 |
| Interface                                                                                                 |     |
| Typical Performance Characteristics.....................6                                                 |     |

## REVISION HISTORY

1/2022-Revision 0: Initial Version

| Theory of Operation...............................................9   |    |
|-----------------------------------------------------------------------|----|
| Applications Information......................................        | 10 |
| Filter Architecture.............................................10    |    |
| Typical Application Circuit................................           | 10 |
| Mounting And Bonding Techniques..................11                   |    |
| Handling Precautions.......................................           | 11 |
| Mounting...........................................................11 |    |
| Wire Bonding....................................................11    |    |
| Outline Dimensions.............................................       | 12 |
| Ordering Guide.................................................12     |    |

## SPECIFICATIONS

TA = 25°C and V FCTL is swept from 0 V to 15 V.

Table 1.

| Parameter                                                         | Min Typ         | Max   | Unit   | Test Conditions/Comments                                                          |
|-------------------------------------------------------------------|-----------------|-------|--------|-----------------------------------------------------------------------------------|
| FREQUENCY RANGE                                                   |                 |       |        |                                                                                   |
| f CENTER                                                          | 10.5            | 21    | GHz    |                                                                                   |
| f 3dB                                                             | 10              | 22.8  | GHz    |                                                                                   |
| 3 dB BANDWIDTH                                                    | 20              | 20    | %      |                                                                                   |
| REJECTION                                                         |                 |       |        |                                                                                   |
| Low-Side                                                          | 0.72 × f CENTER |       | GHz    | ≥30 dB                                                                            |
| High-Side                                                         | 1.24 × f CENTER |       | GHz    | ≥30 dB                                                                            |
| INSERTION LOSS                                                    | 5               |       | dB     |                                                                                   |
| RETURN LOSS                                                       | 11              |       | dB     |                                                                                   |
| DYNAMIC PERFORMANCE                                               |                 |       |        |                                                                                   |
| Input Power (P IN ) at 5° Shift in Insertion Phase (V FCTL = 0 V) | 10              |       | dBm    |                                                                                   |
| Input Third-Order Intercept (IP3)                                 | 26              |       | dBm    | P IN = 5 dBm, 1 MHz tone separation                                               |
| Group Delay Flatness                                              | 0.1             |       | ns     |                                                                                   |
| Phase Sensitivity                                                 | 1.3             |       | Rad/V  | At V FCTL = 7 V                                                                   |
| Amplitude Settling                                                | 200             |       | ns     | Time to settle to minimum insertion loss, within ≤0.5 dB of static insertion loss |
| Drift Rate                                                        |                 |       |        | At V FCTL = 7 V                                                                   |
| Frequency                                                         | -9              |       | ppm/°C |                                                                                   |
| Amplitude                                                         | -0.01           |       | dB/°C  |                                                                                   |
| RESIDUAL PHASE NOISE                                              |                 |       | dBc/Hz |                                                                                   |
| 1 MHz Offset                                                      | -165            |       |        |                                                                                   |
| TUNING                                                            |                 |       |        |                                                                                   |
| V FCTL                                                            | 0               | 15    | V      |                                                                                   |
| Center Frequency Control Current (I FCTL )                        |                 | ±1    | mA     |                                                                                   |

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                                          | Rating          |
|--------------------------------------------------------------------|-----------------|
| Tuning                                                             | Tuning          |
| V FCTL                                                             | -0.5 V to +15 V |
| I FCTL                                                             | ±1 mA           |
| RF Input Power                                                     | 27 dBm          |
| Temperature                                                        | Temperature     |
| Operating Range                                                    | -40°C to +85°C  |
| Storage Range                                                      | -65°C to +150°C |
| Junction for 1 Million Mean Time to Failure (MTTF)                 | 150°C           |
| Nominal Junction (Temperature at GND Pad = 85°C and P IN = 27 dBm) | 108°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001-2010.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADMV8420CHIPS

Table 3. ADMV8420CHIPS, 7-Pad CHIP

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                      1000 | 1C      |
| FICDM       |                      1250 | C3      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 4. Pad Function Descriptions

| Pad No.    | Mnemonic   | Description                                                                                                                                                                                                                            |
|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 4, 6 | GND        | Ground. The GND pads can be connected to the RF and dc ground. See Figure 3 for the GND interface schematic.                                                                                                                           |
| 2          | RFIN       | RF Input. The RFIN pad is dc-coupled and matched to 50 Ω. Do not apply an external voltage to the RFIN pad. See Figure 4 for the RFIN interface schematic.                                                                             |
| 5          | RFOUT      | RF Output. The RFOUT pad is dc-coupled and matched to 50 Ω. Do not apply an external voltage to the RFOUT pad. See Figure 6 for the RFOUT interface schematic.                                                                         |
| 7          | V FCTL     | Center Frequency Control Voltage. The V FCTL pad controls the f CENTER of the device. See Figure 5 for the V FCTL interface schematic. Die Bottom. Connect the die bottom to RF and dc ground. The die backside metallization is gold. |

## INTERFACE SCHEMATICS

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 7. Broadband Insertion Loss vs. RF Frequency at Various Voltages

<!-- image -->

Figure 8. Loss (Input Return Loss, Output Return Loss, and Insertion Loss) vs. RF Frequency at V FCTL = 0 V

<!-- image -->

Figure 9. f CENTER vs. V FCTL at Various Temperatures

<!-- image -->

Figure 10. Insertion Loss vs. RF Frequency at Various Voltages and Temperatures

Figure 11. Loss (Input Return Loss, Output Return Loss, and Insertion Loss) vs. RF Frequency at V FCTL = 15 V

<!-- image -->

Figure 12. Insertion Loss vs. V FCTL at f CENTER and for Various Temperatures

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 13. 3 dB Bandwidth vs. V FCTL at Various Temperatures

<!-- image -->

Figure 14. Low-Side Rejection Ratio (f L30dB /f CENTER ) vs. V FCTL at Various Temperatures

<!-- image -->

Figure 15. Return Loss at f CENTER vs. V FCTL at Various Temperatures

<!-- image -->

Figure 16. Group Delay vs. RF Frequency at Various Voltages

Figure 17. High-Side Rejection Ratio (f H30dB /f CENTER ) vs. V FCTL at Various Temperatures

<!-- image -->

Figure 18. Residual Phase Noise vs. Offset Frequency at Various V FCTL Voltages

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 19. Tuning Sensitivity vs. V FCTL at Various Temperatures

<!-- image -->

Figure 20. Phase Sensitivity vs. V FCTL at Various Temperatures

Figure 21. Input IP3 vs. V FCTL at Various Temperatures

<!-- image -->

Figure 22. Phase Shift vs. Input Power at Various Voltages

<!-- image -->

## THEORY OF OPERATION

The ADMV8420 is a MMIC, BPF that features a user-selectable pass band frequency. Varying the applied analog tuning voltage between 0 V and 15 V at V FCTL varies the f CENTER between 10.5 GHz and 21 GHz.

## APPLICATIONS INFORMATION

## FILTER ARCHITECTURE

The filter architecture of the ADMV8420 is considered a symmetrical design. Therefore, the RFIN and RFOUT pads can be used interchangeably. The same pass band response can be achieved regardless of which pad is used as the input or which pad is used as the output.

## TYPICAL APPLICATION CIRCUIT

Figure 23 shows the typical application circuit for the ADMV8420. The RFIN and RFOUT pads are dc-coupled, and the external voltage must not be applied. It is recommended to install 100 pF capacitors (C1 and C2) in series with the RFIN and RFOUT pads to prevent any prestage or poststage interaction with the filter.

On the V FCTL pad, the C3 decoupling capacitor is shown with 100 pF as the typical value. However, the selection of the C3 capacitor is determined based on the system design criteria for phase noise and tuning speed. That is, there is a baseband noise characteristic for a particular control voltage, which can translate into additive phase noise within the filter. Minimizing baseband noise on the control voltage can be done by capacitive means at the expense of the voltage rise time, which impacts the tuning speed of the filter. Carefully consider the control voltage baseband noise and rise time performance to ensure that system performance metrics are met.

Figure 23. Typical Application Circuit

<!-- image -->

## APPLICATIONS INFORMATION

## MOUNTING AND BONDING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring RF to and from the chip, 50 Ω microstrip transmission lines on 0.127 mm (0.005˝) thick alumina thin film substrates are recommended (see Figure 24).

Figure 24. Bonding RF Pads to 5 mil Substrate

<!-- image -->

If using 0.254 mm (0.010˝) thick alumina thin film substrates, raise the die 0.150 mm (0.006˝) so that the surface of the die is coplanar with the surface of the substrate. A way to accomplish this is to attach the 0.102 mm (0.004˝) thick die to a 0.150 mm (0.006˝) thick molybdenum heat spreader (moly tab), which is then attached to the ground plane (see Figure 25). To minimize bond wire length, place microstrip substrates as close to the die as possible. Typical die to substrate spacing is 0.076 mm (0.003˝).

Figure 25. Bonding RF Pads to 10 mil Substrate

<!-- image -->

## HANDLING PRECAUTIONS

To avoid permanent damage to the device, follow the precautions detailed in the Storage section, Cleanliness section, Static Sensitivity section, Transients section, and General Handling section.

## Storage

All bare dice are placed in either waffle- or gel-based ESD protective containers and then sealed in an ESD protective bag for shipment. After opening the sealed ESD protective bag, store all dice in a dry nitrogen environment.

## Cleanliness

Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.

## Static Sensitivity

Follow ESD precautions to protect against ESD strikes.

## Transients

Suppress instrument and bias supply transients while bias is applied. Use shielded signal and bias cables to minimize inductive pickup.

## General Handling

Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip has fragile air bridges. Do not touch the chip with a vacuum collet, tweezers, or fingers.

## MOUNTING

The chip is back metallized and can be die mounted with gold (Au)/tin (Sn) eutectic preforms or with electrically conductive epoxy. The mounting surface must be clean and flat.

## Eutectic Die Attach

An 80/20 gold and tin preform is recommended with a work surface temperature of 255°C and a tool temperature of 265°C. When hot 90/10 nitrogen(N)/hydrogen (H) gas is applied, the tool tip temperature must be 290°C. Do not expose the chip to a temperature greater than 320°C for more than 20 seconds. No more than 3 sec of scrubbing is required for attachment.

## Epoxy Die Attach

Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip when the chip is placed into position. Cure epoxy per the schedule of the manufacturer.

## WIRE BONDING

Ball or wedge bond with 0.025 mm (0.00098˝) diameter pure gold wire is recommended. Thermosonic wire bonding with a nominal stage temperature of 150°C and a ball bonding force of 40 grams to 50 grams, or a wedge bonding force of 18 grams to 22 grams, is recommended. Use the minimum level of ultrasonic energy to achieve reliable wire bonds. Wire bonds must begin on the chip and terminate on the package or substrate. All bonds must be as short as possible &lt;0.31 mm (0.01220˝).

## OUTLINE DIMENSIONS

Figure 26. 7-Pad Bare Die [CHIP] (C-7-14) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description   | Package Option   |
|------------------|---------------------|-----------------------|------------------|
| ADMV8420CHIPS    | -40°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-14           |
| ADMV8420CHIPS-SX | -40°C to +85°C      | 7-Pad Bare Die [CHIP] | C-7-14           |

<!-- image -->