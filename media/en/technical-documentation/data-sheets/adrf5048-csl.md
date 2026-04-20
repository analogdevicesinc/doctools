<!-- lastmod 2026-01-08 -->
<!-- image -->

## Commercial Space Product

## Silicon SP4T Switch, Nonreflective, 100MHz to 45GHz

## FEATURES

## FUNCTIONAL BLOCK DIAGRAM

- Ultrawideband frequency range: 100MHz to 45GHz
- Nonreflective 50Ω design
- Low insertion loss
- 1.4dB at 18GHz typical
- 2.4dB at 40GHz typical
- 4.0dB at 45GHz typical
- High isolation
- 41dB at 18GHz typical
- 35dB at 40GHz typical
- 35dB at 45GHz typical
- High input linearity
- P0.1dB: &gt;30dBm typical
- IP3: 52dBm typical
- High power handling
- 30dBm through path
- 18dBm terminated path
- No low frequency spurious
- ESD ratings
- HBM
- ±1000V for RFx pins
- ±2000V for supply and digital control pins
- CDM: ±500V for all pins
- On and off time (50% V CTRL to 90% of final RF OUT ): 20ns
- RF settling time (50% V CTRL to 0.1dB of final RF OUT ): 60ns
- 3mm × 3mm, 24-terminal LGA package

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation monitors
- Total ionizing dose (TID) benchmark characterization
- Single event latch-up (SEL) benchmark characterization
- Radiation lot acceptance Test (RLAT) for production TID assurance
- Outgassing characterization

## APPLICATIONS

- Industrial scanners
- Test instrumentation
- Cellular infrastructure mmWave 5G
- Military radios, radars, and electronic counter measures (ECMs)
- Microwave radios and very small aperture terminals (VSATs)

Rev. 0

Figure 1. Functional Block Diagram

<!-- image -->

<!-- image -->

## GENERAL DESCRIPTION

The ADRF5048-CSL is a nonreflective SP4T switch manufactured in the silicon on insulator (SOI) process.

This device operates from 100MHz to 45GHz with an insertion loss lower than 4.0dB and isolation higher than 35dB. The ADRF5048CSL has an RF input power handling capability of 30dBm through path, 18dBm terminated path, and 30dBm hot switching at the RF common port.

The ADRF5048-CSL requires a dual-supply voltage of +3.3V and -3.3V. The device employs complimentary metal-oxide semiconductor (CMOS)-/low-voltage transistor to transistor logic (LVTTL) logic-compatible controls.

The ADRF5048-CSL has enable and logic select controls to feature all off state and mirror port selection, respectively.

The ADRF5048-CSL comes in a 24-terminal, 3mm × 3mm, RoHS compliant, land grid array (LGA) package and can operate from -40°C to +105°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADRF5048 data sheet.

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Commercial Space Features.................................1                |     |
| Applications...........................................................    | 1   |
| Functional Block Diagram......................................1            |     |
| General Description...............................................1        |     |
| Specifications........................................................     | 3   |
| Radiation Test and Limit Specifications..............4                     |     |
| Absolute Maximum Ratings...................................5               |     |
| Thermal Resistance...........................................              | 5   |
| Power Derating Curves......................................5               |     |

## REVISION HISTORY

10/2025-Revision 0: Initial Version

Outgas Testing................................................... 5

Radiation Features............................................. 6

Electrostatic Discharge (ESD) Ratings...............6

ESD Caution.......................................................6

Pin Configuration and Function Descriptions........ 7

Interface Schematics..........................................8

Typical Performance Characteristics..................... 9

Outline Dimensions............................................. 10

Ordering Guide.................................................10

## SPECIFICATIONS

VDD = 3.3V, VSS = -3.3V, V1 = 0V or 3.3V, V2 = 0V or 3.3V, T A = 25°C, and it is a 50Ω system, unless otherwise noted. V CTRL is the voltages of the digital control inputs, V1 and V2.

Table 1. Specifications

| Parameter                                  | Test Conditions/Comments                                                            | Min Typ   | Max   | Unit   |
|--------------------------------------------|-------------------------------------------------------------------------------------|-----------|-------|--------|
| FREQUENCY RANGE                            |                                                                                     | 0.1       | 45    | GHz    |
| INSERTION LOSS                             |                                                                                     |           |       |        |
| Between RFC and RF1 to RF4 (On)            | 100MHz to 18GHz                                                                     | 1.4       |       | dB     |
|                                            | 18GHz to 26GHz                                                                      | 1.7       |       | dB     |
|                                            | 26GHz to 35GHz                                                                      | 2.1       |       | dB     |
|                                            | 35GHz to 40GHz                                                                      | 2.4       |       | dB     |
|                                            | 40GHz to 45GHz                                                                      | 4.0       |       | dB     |
| ISOLATION                                  |                                                                                     |           |       |        |
| Between RFC and RF1 to RF4 (Off)           | 100MHz to 18GHz                                                                     | 41        |       | dB     |
|                                            | 18GHz to 26GHz                                                                      | 40        |       | dB     |
|                                            | 26GHz to 35GHz                                                                      | 36        |       | dB     |
|                                            | 35GHz to 40GHz                                                                      | 35        |       | dB     |
|                                            | 40GHz to 45GHz                                                                      | 35        |       | dB     |
| RETURN LOSS                                |                                                                                     |           |       |        |
| RFC and RF1 to RF4 (On)                    | 100MHz to 18GHz                                                                     | 22        |       | dB     |
|                                            | 18GHz to 26GHz                                                                      | 17        |       | dB     |
|                                            | 26GHz to 35GHz                                                                      | 16        |       | dB     |
|                                            | 35GHz to 40GHz                                                                      | 22        |       | dB     |
|                                            | 40GHz to 45GHz                                                                      | 9         |       | dB     |
| RF1 to RF4 (Off)                           | 100MHz to 18GHz                                                                     | 22        |       | dB     |
|                                            | 18GHz to 26GHz                                                                      | 19        |       | dB     |
|                                            | 26GHz to 35GHz                                                                      | 16        |       | dB     |
|                                            | 35GHz to 40GHz                                                                      | 16        |       | dB     |
|                                            | 40GHz to 45GHz                                                                      | 16        |       | dB     |
| SWITCHING                                  |                                                                                     |           |       |        |
| Rise Time and Fall Time (t RISE , t FALL ) | 90% to 10% of RF output (RF OUT )                                                   | 4         |       | ns     |
| On Time and Off Time (t ON , t OFF )       | 50% V CTRL to 10% to 90% of RF OUT                                                  | 20        |       | ns     |
| Settling Time                              |                                                                                     |           |       |        |
| 0.1dB                                      | 50% V CTRL to 0.1dB of final RF OUT                                                 | 60        |       | ns     |
| INPUT LINEARITY 1                          |                                                                                     |           |       |        |
| 0.1dB Power Compression (P0.1dB)           | f = 0.3GHz to 40GHz                                                                 | >30       |       | dBm    |
| Third-Order Intercept (IP3)                | Two-tone input power = 14dBm continuous wave per tone, f = 1GHz to 40GHz, Δf = 1MHz | 52        |       | dBm    |
| SUPPLY CURRENT                             | VDD and VSS pins                                                                    |           |       |        |
| Positive Supply Current (I DD )            |                                                                                     | 150       |       | μA     |
| Negative Supply Current (I SS )            |                                                                                     | 520       |       | μA     |
| DIGITAL CONTROL INPUTS                     |                                                                                     |           |       |        |
| Voltage                                    |                                                                                     |           |       |        |
| Low (V INL )                               |                                                                                     | 0         | 0.8   | V      |
| High (V INH )                              |                                                                                     | 1.2       | 3.45  | V      |
| Current                                    |                                                                                     |           |       |        |
| Low (I INL )                               |                                                                                     | <1        |       | μA     |
| High (I INH )                              | V1 and V2                                                                           | <1        |       | μA     |
|                                            | EN and LS                                                                           | 33        |       | μA     |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                | Test Conditions/Comments                                | Min   | Typ   | Max   | Unit   |
|------------------------------------------|---------------------------------------------------------|-------|-------|-------|--------|
| RECOMMENDED OPERATING CONDITIONS         |                                                         |       |       |       |        |
| Supply Voltage                           |                                                         |       |       |       |        |
| Positive (VDD)                           |                                                         | 3.15  |       | 3.45  | V      |
| Negative (VSS)                           |                                                         | -3.45 |       | -3.15 | V      |
| Digital Control Inputs Voltages (V1, V2) |                                                         | 0     |       | VDD   | V      |
| RF Input Power 2, 3                      | f = 0.3GHz to 40GHz, T CASE = 85°C, life time           |       |       |       |        |
| Through Path                             | RF signal is applied to RFC or through connected RFx    |       |       | 30    | dBm    |
| Terminated Path                          | RF signal is applied to terminated RFx                  |       |       | 18    | dBm    |
| Hot Switching                            | RF signal is present at RFC while switching between RFx |       |       | 30    | dBm    |
| Case Temperature (T CASE )               |                                                         | -40   |       | +105  | °C     |

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at VDD = 3.3V, VSS = -3.3V, and T A = 25°C, unless otherwise noted. TID testing to 100krads, and no SEL occurs at ≤58MeV-cm 2 /mg linear energy transfer (LET).

Table 2. Radiation Test and Limit Specifications

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   |
|-----------------------------------|----------|-------|-------|-------|--------|
| INSERTION LOSS                    |          |       |       |       |        |
| RF1 and RF4                       |          |       |       |       |        |
| Input Frequency (f IN ) = 0.65GHz |          |       | 1.1   |       | dB     |
| f IN = 15GHz                      |          |       | 1.5   |       | dB     |
| f IN = 33GHz                      |          |       | 2.1   |       | dB     |
| RF2 and RF3                       |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 1.1   |       | dB     |
| f IN = 15GHz                      |          |       | 1.5   |       | dB     |
| f IN = 33GHz                      |          |       | 2.2   |       | dB     |
| ISOLATION                         |          |       |       |       |        |
| RF1 and RF4                       |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 74    |       | dB     |
| f IN = 15GHz                      |          |       | 50    |       | dB     |
| f IN = 33GHz                      |          |       | 42    |       | dB     |
| RF2 and RF3                       |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 73    |       | dB     |
| f IN = 15GHz                      |          |       | 45    |       | dB     |
| f IN = 33GHz                      |          |       | 42    |       | dB     |
| DC CURRENTS                       |          |       |       |       |        |
| Positive Supply Current           | I DD     |       | 235   | 280   | μA     |
| Negative Supply Current           | I SS     |       | 650   | 700   | μA     |

## ABSOLUTE MAXIMUM RATINGS

Table 3. Absolute Maximum Ratings

| Parameter                                                        | Rating              |
|------------------------------------------------------------------|---------------------|
| Supply Voltage                                                   |                     |
| VDD                                                              | -0.3V to +3.6V      |
| VSS                                                              | -3.6V to +0.3V      |
| Digital Control Inputs Voltage                                   | -0.3V to VDD + 0.3V |
| RF Input Power (Frequency 1 = 0.3GHz to 40GHz, T CASE = 85°C 2 ) |                     |
| Through Path                                                     | 30.5dBm             |
| Terminated Path                                                  | 18.5dBm             |
| Hot Switching                                                    | 30.5dBm             |
| Temperature                                                      |                     |
| Junction                                                         | 135°C               |
| Storage                                                          | -65°C to +150°C     |
| Reflow                                                           | 260°C               |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Only one absolute maximum rating can be applied at any one time.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the junction to case bottom (channel to package bottom) thermal resistance.

Table 4. Thermal Resistance

| Package Type    | θ JC 1   | Unit   |
|-----------------|----------|--------|
| CC-24-14        |          |        |
| Through Path    | 100      | °C/W   |
| Terminated Path | 800      | °C/W   |

## POWER DERATING CURVES

Figure 2. Power Derating vs. Frequency, Low Frequency Detail, T CASE = 85°C

<!-- image -->

Figure 3. Power Derating vs. Frequency, High Frequency Detail, T CASE = 85°C

<!-- image -->

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based on specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

Table 5. Outgas Testing

| Specification (Tested per ASTM E595-15)   | Value   | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Lost                           | 0.13    | %      |
| Collected Volatile Condensable Material   | <0.01   | %      |
| Water Vapor Recovered                     | 0.08    | %      |

## ABSOLUTE MAXIMUM RATINGS

## RADIATION FEATURES

Table 6. Radiation Features

| Specifications                            | Value   | Unit         |
|-------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = | 100     | krads (Si)   |
| 50rads to 300rads (Si)/sec) 1             |         |              |
| No SEL Occurs at Effective LET 2          | ≤58     | MeV-cm 2 /mg |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for the ADRF5048-CSL

Table 7. ADRF5048-CSL, 24-Terminal LGA

| ESD Model   | Withstand Threshold (V)                   | Class   |
|-------------|-------------------------------------------|---------|
| HBM         | ±1000 for RFx Pins                        | 1C      |
|             | ±2000 for Supply and Digital Control Pins | 2       |
| CDM         | ±500 for All Pins                         | C2A     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 4. Pin Configuration

| Pin No.                                   | Mnemonic   | Description                                                                                                                                                                                                                                         |
|-------------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                         | EN         | Enable Input. See the truth table in the ADRF5048 data sheet and Figure 7 for the control interface schematic.                                                                                                                                      |
| 2                                         | V1         | Control Input 1. See the truth table in the ADRF5048 data sheet and Figure 6 for the control interface schematic.                                                                                                                                   |
| 3, 5, 9, 11 to 13, 15 to 17, 19 to 21, 23 | GND        | Ground.                                                                                                                                                                                                                                             |
| 4                                         | RFC        | RF Common Port. The RFC pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See the truth table in the ADRF5048 data sheet and Figure 5 for the interface schematic.  |
| 6                                         | VSS        | Negative Supply Voltage.                                                                                                                                                                                                                            |
| 7                                         | LS         | Logic Select. See the truth table in the ADRF5048 data sheet and Figure 7 for the control interface schematic.                                                                                                                                      |
| 8                                         | VDD        | Positive Supply Voltage.                                                                                                                                                                                                                            |
| 10                                        | RF4        | RF Throw Port 4. The RF4 pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See the truth table in the ADRF5048 data sheet and Figure 5 for the interface schematic. |
| 14                                        | RF3        | RF Throw Port 3. The RF3 pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See the truth table in the ADRF5048 data sheet and Figure 5 for the interface schematic. |
| 18                                        | RF2        | RF Throw Port 2. The RF2 pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See the truth table in the ADRF5048 data sheet and Figure 5 for the interface schematic. |
| 22                                        | RF1        | RF Throw Port 1. The RF1 pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See the truth table in the ADRF5048 data sheet and Figure 5 for the interface schematic. |
| 24                                        | V2 EPAD    | Control Input 2. See the truth table in the ADRF5048 data sheet and Figure 6 for the control interface schematic. Exposed Pad. The exposed pad must be connected to the RF and DC ground of the PCB.                                                |

## Table 8. Pin Function Descriptions

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## INTERFACE SCHEMATICS

<!-- image -->

Figure 5. RFx Interface Schematic

Figure 6. V1 and V2 Control Interface Schematic

<!-- image -->

Figure 7. LS and EN Control Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADRF5048 data sheet for a full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                 |
|--------------------------|----------------|-------------------------------------|
| CC-24-14                 | LGA            | 24-Terminal Land Grid Array Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                   | Packing Quantity   | Package Option   |
|--------------------|---------------------|---------------------------------------|--------------------|------------------|
| ADRF5048BCCZ-CSL   | -40°C to +105°C     | 24-Terminal LGA (3mm × 3mm with EPAD) | Tape, 500          | CC-24-14         |
| ADRF5048BCCZ-CSLR7 | -40°C to +105°C     | 24-Terminal LGA (3mm × 3mm with EPAD) | Reel, 500          | CC-24-14         |

<!-- image -->