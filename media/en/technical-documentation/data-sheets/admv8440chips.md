<!-- lastmod 2022-08-16 -->
<!-- image -->

## FEATURES

- Amplitude settling time: 200 ns
- Wideband rejection: ≥40 dB
- Single-chip implementation
- 8-pad, 2.55 mm × 1.18 mm × 0.15 mm, RoHS-compliant CHIP

## APPLICATIONS

- Airport scanners
- Test and measurement equipment
- Military radar and electronic warfare systems
- Very small aperture terminal (VSAT) communications

## GENERAL DESCRIPTION

The ADMV8440CHIPS is a monolithic microwave integrated circuit (MMIC), tunable band-pass filter that features a user -selectable pass-band frequency of operation. The center frequency (f CENTER ) typically varies between 19 GHz and 38 GHz by applying a center frequency control voltage (V FCTL ) between 0 V and 15 V. Additionally, the usable pass-band frequencies (f L3dB and f U3dB ) are specified from 20 GHz to 40 GHz.

## [ADMV8440CHIPS](http://www.analog.com//ADMV8440CHIPS.html)

## 20 GHz to 40 GHz, Tunable Band-Pass Filter

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

The wideband rejection at half of the f CENTER is typically 40 dB, which is ideally suitable for improving system level harmonic performance. This tunable filter is a smaller alternative to switched filter banks and cavity tuned filters. The ADMV8440CHIPS has minimal microphonics due to the monolithic design and provides a dynamically adjustable solution in advanced communications applications.

## TABLE OF CONTENTS

Features................................................................ 1

Applications........................................................... 1

Functional Block Diagram......................................1

General Description...............................................1

Specifications........................................................ 3

Absolute Maximum Ratings...................................4

Electrostatic Discharge (ESD) Ratings...............4

ESD Caution.......................................................4

Pin Configuration and Function Descriptions........ 5

Interface Schematics..........................................5

Typical Performance Characteristics..................... 6

## REVISION HISTORY

8/2022-Revision 0: Initial Version

| Theory of Operation...............................................9   |    |
|-----------------------------------------------------------------------|----|
| Applications Information......................................        | 10 |
| Filter Architecture.............................................10    |    |
| Typical Application Circuit................................           | 10 |
| Input and Output Matching Circuit....................10               |    |
| Mounting and Bonding Techniques..................12                   |    |
| Handling Precautions.......................................12         |    |
| Mounting...........................................................12 |    |
| Wire Bonding....................................................12    |    |
| Outline Dimensions.............................................       | 14 |
| Ordering Guide.................................................14     |    |

## SPECIFICATIONS

TA = 25°C and center frequency control voltage (V FCTL ) is swept from 0 V to 15 V, unless otherwise noted.

| Table 1. Parameter                                               |   Min | Typ    | Max   | Unit    | Test Conditions/Comments                   |
|------------------------------------------------------------------|-------|--------|-------|---------|--------------------------------------------|
| CENTER FREQUENCY (f CENTER )                                     |       | 19 38  |       | GHz GHz | V FCTL = 0 V V FCTL = 15 V                 |
| USABLE PASS-BAND FREQUENCY Lower Pass-Band Frequency (f L3dB ) ) |       |        |       |         |                                            |
|                                                                  |       |        | 20    | GHz     | V FCTL = 0 V                               |
| Upper Pass-Band Frequency (f U3dB                                |    40 |        |       | GHz     | V FCTL = 15 V                              |
| BANDWIDTH (3 dB)                                                 |       | 27     |       | %       | V FCTL = 7 V                               |
| LOSS                                                             |       |        |       |         |                                            |
| Insertion Loss                                                   |       | 7      |       | dB      |                                            |
| Return Loss                                                      |       | 10     |       | dB      |                                            |
| WIDEBAND REJECTION (≤60 GHz)                                     |       |        |       |         |                                            |
| Low Side at 0.5 × f CENTER                                       |    40 |        |       | dB      |                                            |
| High Side at 1.5 × f CENTER                                      |    40 |        |       | dB      |                                            |
| RE-ENTRY FREQUENCY                                               |       | >67    |       | GHz     | ≤30 dB                                     |
| DYNAMIC PERFORMANCE                                              |       |        |       |         |                                            |
| Input Power at 5° Shift in Insertion Phase                       |       | 17     |       | dBm     | V FCTL = 0 V                               |
| Input Third-Order Intercept (IP3)                                |       | 28     |       | dBm     | V FCTL = 7 V                               |
| Group Delay Flatness                                             |       | 0.05   |       | ns      | V FCTL = 7 V                               |
| Phase Sensitivity                                                |       | 1      |       | Rad/V   | V FCTL = 7 V                               |
| Amplitude Settling                                               |       | 200    |       | ns      | To within ≤0.5 dB of static insertion loss |
| Drift Rate                                                       |       |        |       |         |                                            |
| Amplitude                                                        |       | -0.012 |       | dB/°C   | V FCTL = 7 V                               |
| Frequency                                                        |       | -75    |       | ppm/°C  | V FCTL = 7 V                               |
| RESIDUAL PHASE NOISE                                             |       |        |       |         |                                            |
| 1 MHz Offset                                                     |       | -157   |       | dBc/Hz  | V FCTL = 7 V                               |
| TUNING VOLTAGE (V FCTL )                                         |     0 |        | 15    | V       |                                            |
| TUNING CURRENT (I FCTL )                                         |       |        | ±1    | mA      |                                            |

## ABSOLUTE MAXIMUM RATINGS

| Table 2. Parameter                                                 | Rating          |
|--------------------------------------------------------------------|-----------------|
| Tuning                                                             |                 |
| V FCTL                                                             | -0.5 V to +15 V |
| I FCTL                                                             | ±1 mA           |
| RF Input Power                                                     | 20 dBm          |
| Temperature                                                        |                 |
| Operating Range                                                    | -55°C to +85°C  |
| Storage Range                                                      | -65°C to +150°C |
| Junction to Maintain 1,000,000 Hours Mean Time to Failure (MTTF)   | 150°C           |
| Nominal Junction (T PADDLE 1 = 85°C, Input Power (P IN ) = 20 dBm) | 93°C            |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001-2011.

Field induced charged device model (FICDM) per JEDEC JESD22C101E and ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADMV8440CHIPS

Table 3. ADMV8440CHIPS, 8-Pad Bare Die

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                      2500 | 2       |
| FICDM       |                      1250 | C3      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pad No.    | Mnemonic   | Description                                                                                                                                                        |
|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 4, 6 | GND        | Ground. These pads can be connected to the RF and DC ground. The metallization of these pads is gold.                                                              |
| 2          | RF1        | RF1. This pad is dc-coupled and matched to 50 Ω. Do not apply an external voltage to this pad. The metallization of this pad is gold.                              |
| 5          | RF2        | RF2. This pad is dc-coupled and matched to 50 Ω. Do not apply an external voltage to this pad. The metallization of this pad is gold.                              |
| 7, 8       | V FCTL     | Center Frequency Control Voltage. These pads control the f CENTER of the device. Connection to only one pad is necessary. The metallization of these pads is gold. |
|            | Backside   | Die Backside. The die backside must be connected to RF and DC ground. The die backside metallization is gold.                                                      |

## Table 4. Pin Function Descriptions

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. RF1 Interface Schematic

Figure 5. RF2 Interface Schematic

<!-- image -->

Figure 6. V FCTL Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 7. Broadband Insertion Loss vs. RF Frequency at Various Voltages

<!-- image -->

Figure 8. Insertion Loss, Input and Output Return Loss vs. RF Frequency at VFCTL = 0 V

<!-- image -->

Figure 9. Center Frequency vs. V FCTL at Various Temperatures

<!-- image -->

Figure 10. Insertion Loss vs. RF Frequency at Various Voltages and Temperatures

Figure 11. Insertion Loss, Input and Output Return Loss vs. RF Frequency at VFCTL = 15 V

<!-- image -->

Figure 12. Insertion Loss vs. V FCTL at Various Temperatures

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 13. 1 dB and 3 dB Bandwidth vs. V FCTL at Various Temperatures

<!-- image -->

Figure 14. Input Return Loss at f CENTER vs. V FCTL at Various Temperatures

<!-- image -->

Figure 15. 40 dB Low-Side Rejection Ratio vs. V FCTL at Various Temperatures

<!-- image -->

Figure 16. Group Delay vs. RF Frequency at Various Voltages

Figure 17. Input Return Loss vs. V FCTL at Various Frequencies

<!-- image -->

Figure 18. 40 dB High-Side Rejection Ratio vs. V FCTL at Various Temperatures

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 19. Tuning Sensitivity vs. V FCTL at Various Temperatures

<!-- image -->

Figure 20. Phase Sensitivity vs. V FCTL at Various Temperatures

<!-- image -->

Figure 21. Phase Shift vs. Input Power at Various Voltages

<!-- image -->

Figure 22. Input IP3 vs. V FCTL at Various Temperatures

Figure 23. Input IP3 vs. V FCTL at Various Frequency Offsets

<!-- image -->

Figure 24. Frequency Shift vs. Input Power at Various Voltages

<!-- image -->

## THEORY OF OPERATION

The ADMV8440CHIPS is a MMIC band-pass filter that features a user-selectable pass-band frequency. Varying the applied analog tuning voltage between 0 V and 15 V at V FCTL varies the f CENTER between 19 GHz and 38 GHz.

## APPLICATIONS INFORMATION

## FILTER ARCHITECTURE

The filter architecture of the ADMV8440CHIPS is considered a symmetrical design. Therefore, the RF1 and RF2 pads can be used interchangeably. The same pass-band response can be achieved regardless of which pad is used as the input and which pad is used as the output.

## TYPICAL APPLICATION CIRCUIT

Figure 25 shows the typical application circuit for the ADMV8440CHIPS. The RF1 and RF2 pads are DC-coupled to ground and an external voltage must not be applied. Install 10 pF capacitors (C1 and C2) in series with the RF1 and RF2 pads to prevent any prestage or poststage interaction with the filter.

On the V FCTL pad, the C3 decoupling capacitor is shown with 100 pF as the typical value. However, the selection of the C3 capacitor is determined based on the system design criteria for phase noise and tuning speed. That is, there is a baseband noise characteristic for a particular control voltage, which can translate into additive phase noise within the filter. Baseband noise on the control voltage can be minimized by capacitive means at the expense of voltage rise time, which impacts the tuning speed of the filter. Carefully consider the control voltage baseband noise and rise time performance to ensure that system performance metrics are met.

Figure 25. Typical Application Circuit

<!-- image -->

## INPUT AND OUTPUT MATCHING CIRCUIT

To achieve good return loss, use a 60 fF shunt capacitance matching circuit at the input and output. Two possible matching circuits that can provide optimal performance include microstrip and ground signal ground (GSG), as follows:

- A matching circuit for a microstrip implementation can be achieved using a small amount of silver epoxy bonded onto the input and output RF transmission lines. Figure 28 shows an example of the microstrip implementation.
- A matching circuit for a GSG implementation can be achieved using a combination of ribbon bonds and metal trace on the input and output RF transmission lines. Figure 29 shows an example of GSG implementation.

For reference, Figure 30 and Figure 31 provide example dimensions for the microstrip launcher and the GSG launcher used in each implementation. When choosing an implementation, it is recommended to use similar dimensions.

Figure 26 and Figure 27 show the expected input and output return loss performance, respectively, for the two implementations.

Figure 26. Input Return Loss vs. RF Frequency at V FCTL = 0 V and 15 V, with Matching Circuit

<!-- image -->

Figure 27. Output Return Loss vs. RF Frequency at V FCTL = 0 V and 15 V, with Matching Circuit

<!-- image -->

## APPLICATIONS INFORMATION

<!-- image -->

Figure 28. Matching Circuit Using Microstrip

Figure 29. Matching Circuit Using GSG

<!-- image -->

<!-- image -->

Figure 30. Microstrip Launcher Detailed Dimensions

<!-- image -->

Figure 31. GSG Launcher Detailed Dimensions

## APPLICATIONS INFORMATION

## MOUNTING AND BONDING TECHNIQUES

Attach the die directly to the ground plane eutectically or with conductive epoxy. To bring RF to and from the chip, 50 Ω microstrip transmission lines on 0.127 mm (0.005˝) thick alumina thin film substrates are recommended (see Figure 32).

Figure 32. Bonding RF Pads to 5 mil Substrate

<!-- image -->

If using 0.254 mm (0.010˝) thick alumina thin film substrates, raise the die 0.102 mm (0.004˝) so that the surface of the die is coplanar with the surface of the substrate. A way to accomplish this is to attach the 0.150 mm (0.006˝) thick die to a 0.102 mm (0.004˝) thick molybdenum heat spreader (moly tab), which is then attached to the ground plane (see Figure 33). To minimize bond wire length, place microstrip substrates as close to the die as possible. Typical die to substrate spacing is 0.102 mm (0.004˝).

Figure 33. Bonding RF Pads to 10 mil Substrate

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

RF bonds made with gold ribbon having 3 mil (0.076 mm) thickness are recommended for the RF ports. Alternatively, double 1 mil (0.025 mm) wire bond can be applied. These bonds must be thermosonically bonded with a force of 40 g to 60 g. DC bonds of 1 mil (0.025 mm) diameter, thermosonically bonded, are recommended.

## APPLICATIONS INFORMATION

Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Keep all ribbon bonds as short as possible.

## OUTLINE DIMENSIONS

Figure 34. 8-Pad Bare Die [CHIP] (C-8-27) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description   | Package Option   |
|------------------|---------------------|-----------------------|------------------|
| ADMV8440CHIPS    | -55°C to +85°C      | 8-Pad Bare Die [CHIP] | C-8-27           |
| ADMV8440CHIPS-SX | -55°C to +85°C      | 8-Pad Bare Die [CHIP] | C-8-27           |

<!-- image -->

Updated: August 05, 2022