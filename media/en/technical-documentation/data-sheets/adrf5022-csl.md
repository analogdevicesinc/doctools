<!-- lastmod 2026-01-08 -->
<!-- image -->

## Commercial Space Product

## Silicon SPDT Switch, Nonreflective, 100MHz to 45GHz

## FEATURES

- Ultra-wideband frequency range: 100MHz to 45GHz
- Nonreflective design
- Low insertion loss
- 1.2dB typical to 18GHz
- 1.9dB typical to 40GHz
- 2.3dB typical to 45GHz
- High Isolation: 43dB typical to 45GHz
- High input linearity
- P0.1dB: 31dBm
- IP3: 55dBm
- High power handling at T CASE = 85°C
- 30dBm through path
- 24dBm terminated path
- 30dBm hot switching (RFC port)
- RF settling time (0.1dB final RF output): 30ns
- No low-frequency spurious signals
- All off-state control
- Positive control interface: CMOS-/LVTTL-compatible
- 20-terminal, 3.0mm × 3.0mm LGA package

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation monitors
- Total ionizing dose (TID) benchmark characterization
- Single event latch-up (SEL) benchmark characterization
- Radiation lot acceptance test (RLAT) for production TID assurance
- Outgassing characterization

## APPLICATIONS

- Test and instrumentation
- Cellular infrastructure: 5G millimeter wave
- Military radios, radars, and electronic countermeasures (ECMs)
- Microwave radios and very small aperture terminals (VSATs)
- Industrial scanners

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADRF5022-CSL is a nonreflective, single-pole double-throw (SPDT) switch manufactured in the silicon process.

The ADRF5022-CSL operates from 100MHz to 45GHz with a typical insertion loss of 2.3dB and isolation of 43dB. The device has an RF input-power handling capability of 30dBm for the through path, 24dBm for the terminated path, and 30dBm for the hot switching at the RF common port.

The ADRF5022-CSL requires a positive supply of +3.3V and a negative supply of -3.3V. The device employs complementary metal-oxide semiconductor (CMOS)-/low-voltage transistor to transistor logic (LVTTL)-compatible controls.

The ADRF5022-CSL can also operate with a single positive supply voltage (V DD ) applied while the negative supply voltage (V SS ) is connected to ground. In this operating condition, the small signal performance is maintained while the switching characteristics, linearity, and power handling performance is derated. For more details, see Table 2.

The ADRF5022-CSL comes in a 20-terminal, 3.0mm × 3.0mm, RoHS-compliant, land grid array (LGA) package and can operate from -40°C to +105°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADRF5022 data sheet.

## TABLE OF CONTENTS

Features................................................................ 1

Commercial Space Features................................. 1

Applications .......................................................... 1

Functional Block Diagram......................................1

General Description...............................................1

Specifications........................................................ 3

Single-Supply Operation.................................... 4

Radiation Test and Limit Specifications..............5

Absolute Maximum Ratings...................................6

Thermal Resistance .......................................... 6

## REVISION HISTORY

10/2025-Revision 0: Initial Version

| Power Derating Curves......................................6                                              |    |
|-----------------------------------------------------------------------------------------------------------|----|
| Outgas Testing...................................................                                         | 6  |
| Radiation Features.............................................7                                          |    |
| Electrostatic Discharge (ESD) Ratings...............7                                                     |    |
| ESD Caution.......................................................7                                       |    |
| Pin Configuration and Function Descriptions........ Schematics..........................................8 | 8  |
| Interface                                                                                                 |    |
| Typical Performance Characteristics.....................9                                                 |    |
| Outline Dimensions.............................................                                           | 10 |
| Ordering Guide.................................................10                                         |    |

## SPECIFICATIONS

VDD  = 3.3V, V SS = -3.3V, CTRL voltage (V CTRL )/EN voltage (V EN ) = 0V or V DD , and T CASE = 25°C, 50Ω system, unless otherwise noted.

Table 1. Electrical Specifications

| Parameter                         | Symbol          | Test Conditions/Comments                          | Min   | Typ   | Max    | Unit   |
|-----------------------------------|-----------------|---------------------------------------------------|-------|-------|--------|--------|
| FREQUENCY RANGE                   | f               |                                                   | 100   |       | 45,000 | MHz    |
| INSERTION LOSS                    |                 |                                                   |       |       |        |        |
| Between RFC and RF1 and RF2 (On)  |                 | 100MHz to 18GHz                                   |       | 1.2   |        | dB     |
|                                   |                 | 18GHz to 26GHz                                    |       | 1.4   |        | dB     |
|                                   |                 | 26GHz to 35GHz                                    |       | 1.6   |        | dB     |
|                                   |                 | 35GHz to 40GHz                                    |       | 1.9   |        | dB     |
|                                   |                 | 40GHz to 45GHz                                    |       | 2.3   |        | dB     |
| RETURN LOSS                       |                 |                                                   |       |       |        |        |
| RFC and RF1 and RF2 (On)          |                 | 100MHz to 18GHz                                   |       | 20    |        | dB     |
|                                   |                 | 18GHz to 26GHz                                    |       | 20    |        | dB     |
|                                   |                 | 26GHz to 35GHz                                    |       | 20    |        | dB     |
|                                   |                 | 35GHz to 40GHz                                    |       | 20    |        | dB     |
|                                   |                 | 40GHz to 45GHz                                    |       | 20    |        | dB     |
| RF1 and RF2 (Off)                 |                 | 100MHz to 18GHz                                   |       | 19    |        | dB     |
|                                   |                 | 18GHz to 26GHz                                    |       | 19    |        | dB     |
|                                   |                 | 26GHz to 35GHz                                    |       | 17    |        | dB     |
|                                   |                 | 35GHz to 40GHz                                    |       | 14    |        | dB     |
|                                   |                 | 40GHz to 45GHz                                    |       | 13    |        | dB     |
| ISOLATION                         |                 |                                                   |       |       |        |        |
| Between RFC and RF1 and RF2 (Off) |                 | 100MHz to 18GHz                                   |       | 55    |        | dB     |
|                                   |                 | 18GHz to 26GHz                                    |       | 55    |        | dB     |
|                                   |                 | 26GHz to 35GHz                                    |       | 55    |        | dB     |
|                                   |                 | 35GHz to 40GHz                                    |       | 50    |        | dB     |
|                                   |                 | 40GHz to 45GHz                                    |       | 47    |        | dB     |
| Between RF1 and RF2               |                 | 100MHz to 18GHz                                   |       | 60    |        | dB     |
|                                   |                 | 18GHz to 26GHz                                    |       | 58    |        | dB     |
|                                   |                 | 26GHz to 35GHz                                    |       | 50    |        | dB     |
|                                   |                 | 35GHz to 40GHz                                    |       | 47    |        | dB     |
|                                   |                 | 40GHz to 45GHz                                    |       | 43    |        | dB     |
| SWITCHING CHARACTERISTICS         |                 |                                                   |       |       |        |        |
| Rise Time and Fall Time           | t RISE , t FALL | 10% to 90% of RF output (RF OUT )                 |       | 3     |        | ns     |
| On Time and Off Time              | t ON , t OFF    | 50% V CTRL to 90% of RF OUT                       |       | 20    |        | ns     |
| 0.1dB RF Settling Time            |                 | 50% V CTRL to 0.1dB of final RF OUT               |       | 30    |        | ns     |
| INPUT LINEARITY 1                 |                 | f = 100MHz to 40GHz                               |       |       |        |        |
| 0.1dB Power Compression           | P0.1dB          |                                                   |       | 31    |        | dBm    |
| Input Third-Order Intercept       | IIP3            | Two-tone input power = 14dBm each tone, Δf = 1MHz |       | 55    |        | dBm    |
| SUPPLY CURRENT                    |                 | V DD and V SS pins                                |       |       |        |        |
| Positive Supply Current           | I DD            |                                                   |       | 140   |        | µA     |
| Negative Supply Current           | I SS            |                                                   |       | 510   |        | µA     |
| DIGITAL CONTROL INPUTS            |                 |                                                   |       |       |        |        |
| Voltage                           |                 |                                                   |       |       |        |        |
| Low                               | V INL           |                                                   | 0     |       | 0.8    | V      |
| High                              | V INH           |                                                   | 1.2   |       | 3.3    | V      |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

| Parameter                       | Symbol   | Test Conditions/Comments                                            | Min   | Typ   | Max   | Unit   |
|---------------------------------|----------|---------------------------------------------------------------------|-------|-------|-------|--------|
| Current                         |          |                                                                     |       |       |       |        |
| Low                             | I INL    |                                                                     |       | <1    |       | µA     |
| High                            | I INH    | CTRL                                                                |       | <1    |       | µA     |
|                                 |          | EN                                                                  |       | 33    |       | µA     |
| RECOMMENDED OPERATING CONDITONS |          |                                                                     |       |       |       |        |
| Positive Supply Voltage         | V DD     |                                                                     | 3.15  |       | 3.45  | V      |
| Negative Supply Voltage         | V SS     |                                                                     | -3.45 |       | -3.15 | V      |
| Digital Control Input Voltage   | V CTRL   |                                                                     | 0     |       | V DD  | V      |
| RF Input Power 2, 3             | P IN     | f = 250MHz to 40GHz, T CASE = 85°C                                  |       |       |       |        |
| Through Path                    |          | RF signal is applied to the RFC or through connected RF1 and RF2    |       |       | 30    | dBm    |
| Terminated Path                 |          | RF signal is applied to terminated RF1 and RF2                      |       |       | 24    | dBm    |
| Hot Switching                   |          | RF signal is applied to the RFC while switching between RF1 and RF2 |       |       | 30    | dBm    |
| Case Temperature                | T CASE   |                                                                     | -40   |       | +105  | °C     |

## SINGLE-SUPPLY OPERATION

VDD  = 3.3V, V SS = 0V, V CTRL /V EN = 0V or V DD , T CASE = 25°C, 50Ω system, unless otherwise noted.

Table 2. Single-Supply Operation Specifications

| Parameter                       | Symbol            | Test Conditions/Comments                                            | Min   | Typ   | Max    | Unit   |
|---------------------------------|-------------------|---------------------------------------------------------------------|-------|-------|--------|--------|
| FREQUENCY RANGE                 | f                 |                                                                     | 100   |       | 45,000 | MHz    |
| SWITCHING CHARACTERISTICS       |                   |                                                                     |       |       |        |        |
| Rise Time and Fall Time         | t RISE , t FALL t | 10% to 90% of RF OUT                                                |       | 22    |        | ns     |
| On Time and Off Time            | ON , t OFF        | 50% V CTRL to 90% of RF OUT                                         |       | 65    |        | ns     |
| 0.1dB RF Settling Time          |                   | 50% V CTRL to 0.1dB of final RF OUT                                 |       | 90    |        | ns     |
| INPUT LINEARITY                 |                   | f = 250MHz to 40GHz                                                 |       |       |        |        |
| 0.1dB Power Compression         | P0.1dB            |                                                                     |       | 17    |        | dBm    |
| Input Third-Order Intercept     | IIP3              | Two-tone input power = 0dBm each tone, Δf = 1MHz                    |       | 44    |        | dBm    |
| RECOMMENDED OPERATING CONDITONS |                   |                                                                     |       |       |        |        |
| RF Input Power 1, 2             | P IN              | f = 250MHz to 40GHz, T CASE = 85°C                                  |       |       |        |        |
| Through Path                    |                   | RF signal is applied to the RFC or through connected RF1 and RF2    |       |       | 17     | dBm    |
| Terminated Path                 |                   | RF signal is applied to terminated RF1 and RF2                      |       |       | 12     | dBm    |
| Hot Switching                   |                   | RF signal is applied to the RFC while switching between RF1 and RF2 |       |       | 17     | dBm    |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 3.3V, V SS = -3.3V, and T A = 25°C, unless otherwise noted. TID testing to 100krads, and no SEL occurs at ≤58MeV-cm 2 /mg linear energy transfer (LET).

Table 3. Radiation Test and Limit Specifications

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   |
|-----------------------------------|----------|-------|-------|-------|--------|
| INSERTION LOSS                    |          |       |       |       |        |
| RF1                               |          |       |       |       |        |
| Input Frequency (f IN ) = 0.65GHz |          |       | 0.9   |       | dB     |
| f IN = 16GHz                      |          |       | 1.2   |       | dB     |
| f IN = 33GHz                      |          |       | 1.6   |       | dB     |
| RF2                               |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 0.9   |       | dB     |
| f IN = 16GHz                      |          |       | 1.2   |       | dB     |
| f IN = 33GHz                      |          |       | 1.6   |       | dB     |
| ISOLATION                         |          |       |       |       |        |
| RF1                               |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 73    |       | dB     |
| f IN = 16GHz                      |          |       | 52    |       | dB     |
| f IN = 33GHz                      |          |       | 50    |       | dB     |
| RF2                               |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 75    |       | dB     |
| f IN = 16GHz                      |          |       | 53    |       | dB     |
| f IN = 33GHz                      |          |       | 50    |       | dB     |
| DC CURRENTS                       |          |       |       |       |        |
| Positive Supply Current           | I DD     |       | 155   | 170   | μA     |
| Negative Supply Current           | I SS     |       | 510   | 560   | μA     |

## ABSOLUTE MAXIMUM RATINGS

For recommended operating conditions, see Table 1 and Table 2.

Table 4. Absolute Maximum Ratings

| Parameter                                                                                     | Rating               |
|-----------------------------------------------------------------------------------------------|----------------------|
| Supply Voltage                                                                                |                      |
| Positive                                                                                      | -0.3V to +3.6V       |
| Negative                                                                                      | -3.6V to +0.3V       |
| Digital Control Input Voltage                                                                 |                      |
| Voltage                                                                                       | -0.3V to V DD + 0.3V |
| Current                                                                                       | 3mA                  |
| RF Input Power, Dual Supply 1 (V DD = 3.3V, V SS = -3.3V, f = 250MHz to 40GHz, T CASE = 85°C) |                      |
| Through Path                                                                                  | 31dBm                |
| Terminated Path                                                                               | 25dBm                |
| Hot Switching (RFC Port)                                                                      | 31dBm                |
| RF Input Power, Single Supply 1 (V DD = 3.3V, V SS = 0V, f = 250MHz to 40GHz, T CASE = 85°C)  |                      |
| Through Path                                                                                  | 18dBm                |
| Terminated Path                                                                               | 13dBm                |
| Hot Switching (RFC Port)                                                                      | 18dBm                |
| RF Power Under Unbiased Condition (V DD , V SS = 0V)                                          | 18dBm                |
| Temperature                                                                                   |                      |
| Junction (T J )                                                                               | 135°C                |
| Storage                                                                                       | -65°C to +150°C      |
| Reflow                                                                                        | 260°C                |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to the printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the junction-to-case bottom (channel-to-package bottom) thermal resistance.

Table 5. Thermal Resistance

| Package Type    | θ JC 1   | Unit   |
|-----------------|----------|--------|
| CC-20-19        |          |        |
| Through Path    | 120      | °C/W   |
| Terminated Path | 200      | °C/W   |

## POWER DERATING CURVES

Figure 2. Power Derating vs. Frequency, Low-Frequency Detail, T CASE = 85°C

<!-- image -->

Figure 3. Power Derating vs. Frequency, High-Frequency Detail, T CASE = 85°C

<!-- image -->

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based on specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

Table 6. Outgas Testing

| Specification (Tested per ASTM E595-15)   |   Value | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Lost                           |    0.16 | %      |
| Collected Volatile Condensable Material   |    0.01 | %      |
| Water Vapor Recovered                     |    0.09 | %      |

## ABSOLUTE MAXIMUM RATINGS

## RADIATION FEATURES

Table 7. Radiation Features

| Specifications                            | Value   | Unit         |
|-------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = | 100     | krads (Si)   |
| 50rads to 300rads (Si)/sec) 1             |         |              |
| No SEL Occurs at Effective LET 2          | ≤58     | MeV-cm 2 /mg |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADRF5022-CSL

Table 8. ADRF5022-CSL, 20-Terminal LGA

| ESD Model   | Withstand Threshold (V)           | Class   |
|-------------|-----------------------------------|---------|
| HBM         | ±1250 for RFx pins                | 1C      |
|             | ±2000 for supply and control pins | 2       |
| CDM         | ±500 for all pins                 | C2      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 4. Pin Configuration (Top View)

<!-- image -->

Table 9. Pin Function Descriptions

| Pin Number                              | Mnemonic   | Description                                                                                                                                                                                           |
|-----------------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 4 to 7, 9, 10, 13, 16, 17, 19, 20 | GND        | Ground. The GND pins must be connected to the RF and DC ground of the PCB.                                                                                                                            |
| 3                                       | RFC        | RF Common Port. The RFC pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. For the interface schematic, see Figure 5.  |
| 8                                       | RF1        | RF Throw Port 1. The RF1 pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. for the interface schematic, see Figure 5. |
| 11                                      | V DD       | Positive Supply Voltage. For the interface schematic, see Figure 6.                                                                                                                                   |
| 12                                      | CTRL       | Control Input Voltage. For the interface schematic, see Figure 8.                                                                                                                                     |
| 14                                      | EN         | Enable Input Voltage. For the interface schematic, see Figure 9.                                                                                                                                      |
| 15                                      | V SS       | Negative Supply Voltage. For the interface schematic, see Figure 7.                                                                                                                                   |
| 18                                      | RF2        | RF Throw Port 2. The RF2 pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. For the interface schematic, see Figure 5. |
|                                         | EPAD       | Exposed Pad. The exposed pad must be connected to the RF and DC ground of the PCB.                                                                                                                    |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 5. RFx Pins (RFC, RF1, RF2) Interface Schematic

<!-- image -->

Figure 6. V DD Pin Interface Schematic

<!-- image -->

Figure 7. V SS Pin Interface Schematic

Figure 8. CTRL Pin Interface Schematic

<!-- image -->

Figure 9. EN Pin Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADRF5022 data sheet for a full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                 |
|--------------------------|----------------|-------------------------------------|
| CC-20-19                 | LGA            | 20-Terminal Land Grid Array Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description               | Packing Quantity   | Package Option   |
|--------------------|---------------------|-----------------------------------|--------------------|------------------|
| ADRF5022BCCZ-CSL   | -40°C to +105°C     | 20-Terminal Land Grid Array [LGA] | Tape, 500          | CC-20-19         |
| ADRF5022BCCZ-CSLR7 | -40°C to +105°C     | 20-Terminal Land Grid Array [LGA] | Reel, 500          | CC-20-19         |

<!-- image -->