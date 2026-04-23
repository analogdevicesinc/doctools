<!-- lastmod 2025-08-20 -->
<!-- image -->

## Commercial Space Product

## 10W Average, Silicon SPDT, Reflective Switch, 1GHz to 20GHz

## FEATURES

- Wideband frequency range: 1GHz to 20GHz
- Low insertion loss: 0.8dB typical to 20GHz
- High Isolation: 52dB typical to 20GHz
- High input linearity
- P0.1dB: 44dBm
- IP3: &gt;70dBm
- IP2: &gt;120dBm
- High power handling at T CASE = 85°C
- Insertion loss path
- Average: 40dBm
- Pulsed (&gt;100ns pulse width, 15% duty cycle): 43dBm
- Peak (≤100ns peak duration, 5% duty cycle): 44dBm
- Hot switching: 37dBm
- 0.1dB RF settling time with P IN ≤ 37dBm: 750ns
- No low frequency spurious
- Positive control interface: CMOS-/LVTTL-compatible
- 20-terminal, 3.0mm × 3.0mm LGA package

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation monitors
- TID
- No SEL occurs at effective LET: ≤58MeV-cm 2 /mg
- Outgassing characterization

## APPLICATIONS

- Military radios, radars, and electronic counter measures
- Satcom
- Test and instrumentation
- GaN and PIN diode replacement

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADRF5144-CSL is a reflective, single pole double-throw (SPDT) switch manufactured in the silicon process.

The ADRF5144-CSL operates from 1GHz to 20GHz with typical insertion loss of 0.8dB and typical isolation of 52dB. The device has a RF input power handling capability of 40dBm average power and 44dBm peak power for the insertion loss path.

The ADRF5144-CSL draws a low current of 130μA on the positive supply of +3.3V and 510μA on negative supply of -3.3V. The device employs complementary metal-oxide semiconductor (CMOS)-/ low-voltage transistor to transistor logic (LVTTL)-compatible controls. The ADRF5144-CSL requires no additional driver circuitry, which makes it an ideal alternative to gallium nitride (GaN) and P type intrinsic (PIN) diode-based switches.

The ADRF5144-CSL can also operate with a single positive supply voltage (V DD ) applied while the negative supply voltage (V SS ) is tied to ground. In this operating condition, the small signal performance is maintained while the switching characteristics, linearity, and power handling performance are derated, see Table 2.

The ADRF5144-CSL comes in a 20-terminal, 3.0mm × 3.0mm, RoHS-compliant, land grid array (LGA) package and can operate from -40°C to +85°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADRF5144 data sheet.

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

7/2025-Revision 0: Initial Version

| Power Derating Curves......................................6                                              |    |
|-----------------------------------------------------------------------------------------------------------|----|
| Outgas Testing...................................................                                         | 7  |
| Radiation Features.............................................7                                          |    |
| Electrostatic Discharge (ESD) Ratings...............7                                                     |    |
| ESD Caution.......................................................7                                       |    |
| Pin Configuration and Function Descriptions........ Schematics..........................................8 | 8  |
| Interface                                                                                                 |    |
| Typical Performance Characteristics.....................9                                                 |    |
| Outline Dimensions.............................................                                           | 10 |
| Ordering Guide.................................................10                                         |    |

## SPECIFICATIONS

VDD  = 3.3V, V SS = -3.3V, V CTRL = 0V or V DD , T CASE = 25°C, 50Ω system, unless otherwise noted.

Table 1. Electrical Specifications

| Parameter                       | Symbol          | Test Conditions/Comments                                               | Min     | Typ   | Max    | Unit   |
|---------------------------------|-----------------|------------------------------------------------------------------------|---------|-------|--------|--------|
| FREQUENCY RANGE                 | f               |                                                                        | 1000    |       | 20,000 | MHz    |
| INSERTION LOSS                  |                 |                                                                        |         |       |        |        |
| Between RFC and RF1/RF2 (On)    |                 | 9kHz to 1GHz                                                           |         | 0.45  |        | dB     |
|                                 |                 | 1GHz to 12GHz                                                          |         | 0.65  |        | dB     |
|                                 |                 | 12GHz to 20GHz                                                         |         | 0.8   |        | dB     |
|                                 |                 | 20GHz to 26GHz                                                         |         | 1.1   |        | dB     |
| RETURN LOSS                     |                 |                                                                        |         |       |        |        |
| RFC and RF1/RF2 (On)            |                 | 9kHz to 1GHz                                                           |         | 30    |        | dB     |
|                                 |                 | 1GHz to 12GHz                                                          |         | 25    |        | dB     |
|                                 |                 | 12GHz to 20GHz                                                         |         | 20    |        | dB     |
|                                 |                 | 20GHz to 26GHz                                                         |         | 15    |        | dB     |
| ISOLATION                       |                 |                                                                        |         |       |        |        |
| Between RFC and RF1/RF2 (Off)   |                 | 9kHz to 20GHz                                                          |         | 52    |        | dB     |
|                                 |                 | 20GHz to 26GHz                                                         |         | 47    |        | dB     |
| Between RF1 and RF2             |                 | 9kHz to 20GHz                                                          |         | 48    |        | dB     |
|                                 |                 | 20GHz to 26GHz                                                         |         | 43    |        | dB     |
| SWITCHING CHARACTERISTICS       |                 |                                                                        |         |       |        |        |
| Rise and Fall Time              | t RISE , t FALL | 10% to 90% of RF output                                                |         | 135   |        | ns     |
| On and Off Time                 | t ON , t OFF    | 50% V CTRL to 90% of RF output                                         |         | 500   |        | ns     |
| RF Settling Time                |                 |                                                                        |         |       |        |        |
| 0.5dB RF Settling Time          |                 | 50% V CTRL to 0.5dB of final RF output, RF input power (P IN ) ≤ 37dBm |         | 550   |        | ns     |
| 0.1dB RF Settling Time          |                 | 50% V CTRL to 0.1dB of final RF output, P IN ≤ 37dBm                   |         | 750   |        | ns     |
| INPUT LINEARITY                 |                 | f = 1GHz to 18GHz                                                      |         |       |        |        |
| 0.1dB Power Compression         | P0.1dB          |                                                                        |         | 44    |        | dBm    |
| Input Third-Order Intercept     | IIP3            | Two tone input power = 30dBm each tone, Δf = 1MHz                      |         | >70   |        | dBm    |
| Input Second-Order Intercept    | IIP2            | Two tone input power = 30dBm each tone, Δf = 1MHz                      |         | >120  |        | dBm    |
| SUPPLY CURRENT                  |                 | VDD and VSS pins                                                       |         |       |        |        |
| Positive Supply Current         | I DD            |                                                                        |         | 130   |        | µA     |
| Negative Supply Current         | I SS            |                                                                        |         | 510   |        | µA     |
| DIGITAL CONTROL INPUTS          |                 | CTRL pin                                                               |         |       |        |        |
| Voltage                         |                 |                                                                        |         |       |        |        |
| Low                             | V INL           |                                                                        | 0       |       | 0.8    | V      |
| High                            | V INH           |                                                                        | 1.2     |       | 3.3    | V      |
| Current                         |                 |                                                                        |         |       |        |        |
| Low and High                    | I INL , I INH   |                                                                        |         | <0.1  |        | µA     |
| RECOMMENDED OPERATING CONDITONS |                 |                                                                        |         |       |        |        |
| Positive Supply Voltage         | V DD            |                                                                        | 3.15    |       | 3.45   | V      |
| Negative Supply Voltage         | V SS            |                                                                        | -3.45   |       | -3.15  | V      |
| Digital Control Input Voltage   | V CTRL          |                                                                        | 0       |       | V DD   | V      |
| RF Input Power Wait Time 1      | t WAIT          | P IN ≤ 37dBm                                                           | 0       |       |        | µs     |
|                                 |                 | 37dBm < P IN ≤ 41dBm                                                   | 1.0     |       |        | µs     |
|                                 |                 | 41dBm < P IN ≤ 42dBm 42dBm < P IN ≤ 43dBm                              | 1.2 1.5 |       |        | µs µs  |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

| Parameter           | Symbol   | Test Conditions/Comments                                              | Min   | Typ   | Max   | Unit   |
|---------------------|----------|-----------------------------------------------------------------------|-------|-------|-------|--------|
| RF Input Power 2    | P IN     | f = 1GHz to 18GHz, T CASE = 85°C signal applied to the RFC or through |       |       |       |        |
| Insertion Loss Path |          | RF connected RF1/RF2                                                  |       |       |       |        |
| Average             |          |                                                                       |       |       | 40    | dBm    |
| Pulsed 3            |          | >100ns pulse width, 15% duty cycle                                    |       |       | 43    | dBm    |
| Peak                |          | ≤100ns peak duration, 5% duty cycle                                   |       |       | 44    | dBm    |
| Hot Switching       |          | RF signal applied to the RFC                                          |       |       | 37    | dBm    |
| Case Temperature    | T CASE   |                                                                       | -40   |       | +85   | °C     |

## SINGLE-SUPPLY OPERATION

VDD  = 3.3V, V SS = 0V, V CTRL = 0V or V DD , and T CASE = 25°C, with a 50Ω system, unless otherwise noted.

Table 2. Single-Supply Operational Specifications

| Parameter                       | Symbol          | Test Conditions/Comments                                  | Min   | Typ   | Max    | Unit   |
|---------------------------------|-----------------|-----------------------------------------------------------|-------|-------|--------|--------|
| FREQUENCY RANGE                 | f               |                                                           | 1000  |       | 20,000 | MHz    |
| SWITCHING CHARACTERISTICS       |                 |                                                           |       |       |        |        |
| Rise and Fall Time              | t RISE , t FALL | 10% to 90% of RF output                                   |       | 0.66  |        | µs     |
| On and Off Time                 | t ON , t OFF    | 50% V CTRL to 90% of RF output                            |       | 1.5   |        | µs     |
| 0.1dB RF Settling Time          |                 | 50% V CTRL to 0.1dB of final RF output, P IN ≤ 24dBm      |       | 1.8   |        | µs     |
| INPUT LINEARITY                 |                 | f = 1GHz to 18GHz                                         |       |       |        |        |
| 0.1dB Power Compression         | P0.1dB          |                                                           |       | 29    |        | dBm    |
| Input Third-Order Intercept     | IIP3            | Two tone input power = 20dBm each tone, Δf = 1MHz         |       | 58    |        | dBm    |
| Input Second-Order Intercept    | IIP2            | Two tone input power = 20dBm each tone, Δf = 1MHz         |       | 109   |        | dBm    |
| RECOMMENDED OPERATING CONDITONS |                 |                                                           |       |       |        |        |
| RF Input Power Wait Time 1      | t WAIT          | P IN ≤ 24dBm                                              |       | 0     |        | µs     |
|                                 |                 | 24dBm < P IN ≤ 29.5dBm                                    |       | 2.2   |        | µs     |
| RF Input Power 2                | P IN            | f = 1GHz to 18GHz, T CASE = 85°C                          |       |       |        |        |
| Insertion Loss Path             |                 | RF signal applied to the RFC or through connected RF1/RF2 |       |       |        |        |
| Average                         |                 |                                                           |       |       | 30     | dBm    |
| Pulsed 3                        |                 | >100ns pulse width, 15% duty cycle                        |       |       | 30     | dBm    |
| Peak                            |                 | ≤100ns peak duration, 5% duty cycle                       |       |       | 30     | dBm    |
| Hot Switching                   |                 | RF signal applied to the RFC                              |       |       | 24     | dBm    |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 3.3V, V SS = 3.3V, and T A = 25°C, unless otherwise noted. Total ionizing dose (TID) testing characterized to 100krads, and no single event latch-up (SEL) occurs at ≤58MeV-cm 2 /mg linear energy transfer (LET).

Table 3. Radiation Test and Limit Specifications

| Parameter               | Symbol   | Min   | Typ   | Max   | Unit   |
|-------------------------|----------|-------|-------|-------|--------|
| INSERTION LOSS          |          |       |       |       |        |
| f IN = 0.65GHz          |          |       | 0.6   |       | dB     |
| f IN = 10GHz            |          |       | 0.8   |       | dB     |
| f IN = 19GHz            |          |       | 1.0   |       | dB     |
| RF2                     |          |       |       |       |        |
| f IN = 0.65GHz          |          |       | 0.6   |       | dB     |
| f IN = 10GHz            |          |       | 0.8   |       | dB     |
| f IN = 19GHz            |          |       | 1.0   |       | dB     |
| ISOLATION RF1           |          |       |       |       |        |
| f IN = 0.65GHz          |          |       | 79    |       | dB     |
| f IN = 10GHz            |          |       | 57    |       | dB     |
| f IN = 19GHz            |          |       | 51    |       | dB     |
| RF2                     |          |       |       |       |        |
| f IN = 0.65GHz          |          |       | 77    |       | dB     |
| f IN = 10GHz            |          |       | 55    |       | dB     |
| f IN = 19GHz            |          |       | 49    |       | dB     |
| DC CURRENTS             |          |       |       |       |        |
| Positive Supply Current | I DD     |       | 150   | 180   | μA     |
| Negative Supply Current | I SS     |       | 560   | 620   | μA     |

## ABSOLUTE MAXIMUM RATINGS

For recommended operating conditions, see Table 1 and Table 2.

Table 4. Absolute Maximum Ratings

| Parameter                                                                                                      | Rating               |
|----------------------------------------------------------------------------------------------------------------|----------------------|
| Supply Voltage                                                                                                 |                      |
| Positive                                                                                                       | -0.3V to +3.6V       |
| Negative                                                                                                       | -3.6V to +0.3V       |
| Digital Control Input Voltage                                                                                  |                      |
| Voltage                                                                                                        | -0.3V to V DD + 0.3V |
| Current                                                                                                        | 3mA                  |
| RF Input Power, Dual Supply 1 (V DD = 3.3V, V SS = -3.3V, f = 1GHz to 18GHz, T CASE = 85°C)                    |                      |
| Insertion Loss Path                                                                                            |                      |
| Average                                                                                                        | 40.5dBm              |
| Pulsed                                                                                                         | 43.5dBm              |
| Peak                                                                                                           | 44.5dBm              |
| Hot Switching                                                                                                  | 37.5dBm              |
| RF Input Power, Single Supply 1 (V DD = 3.3V, V SS = 0V, f = 1GHz to 18GHz, T CASE = 85°C) Insertion Loss Path |                      |
| Average                                                                                                        | 30.5dBm              |
| Pulsed                                                                                                         | 30.5dBm              |
| Peak                                                                                                           | 30.5dBm              |
| Hot Switching                                                                                                  | 24.5dBm              |
| RF Power Under Unbiased Condition (V DD , V SS = 0V)                                                           |                      |
| Input at RFC                                                                                                   | 30dBm                |
| Input at RFx                                                                                                   | 24dBm                |
| Temperature                                                                                                    |                      |
| Junction (T J )                                                                                                | 135°C                |
| Storage                                                                                                        | -65°C to +150°C      |
| Reflow                                                                                                         | 260°C                |

1 For power derating over frequency, see Figure 2 and Figure 3.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Only one absolute maximum rating can be applied at a time.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the junction to the case bottom (channel to package bottom) thermal resistance.

## Table 5. Thermal Resistance

| Package Type   |   θ JC 1 | Unit   |
|----------------|----------|--------|
| CC-20-13       |       25 | °C/W   |

1 θ JC was determined by simulation under the following conditions: the heat transfer is due solely to the thermal conduction from the channel through the ground pad to the PCB, and the ground pad is held constant at the operating temperature of 85°C.

## POWER DERATING CURVES

Figure 2. Power Derating vs. Frequency, Low Frequency Detail, T CASE = 85°C

<!-- image -->

Figure 3. Power Derating vs. Frequency, High Frequency Detail, T CASE = 85°C

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based on specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 6. Outgas Testing

| Specification (Tested per ASTM E595-15)   | Value   | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Lost                           | 0.11    | %      |
| Collected Volatile Condensable Material   | <0.01   | %      |
| Water Vapor Recovered                     | 0.07    | %      |

## RADIATION FEATURES

## Table 7. Radiation Features

| Specifications                                       | Value   | Unit         |
|------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate =            | 100     | krads (Si)   |
| 50rads to 300rads (Si)/sec) 1 No SEL Occurs at LET 2 | ≤58     | MeV-cm 2 /mg |

- 2 Limits are characterized at initial qualification and after any design or process changes that may affect the SEL characteristics, but are not production lot tested unless specified by the customer through the purchase order or contract. For more information on single event effect (SEE) test results, contact Analog Devices Support for further data beyond published report on the Analog Devices website.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADRF5144-CSL

Table 8. ADRF5144-CSL, 20-Terminal LGA

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±2000 for all pins        | 2       |
| CDM         | ±1250 for all pins        | C3      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 4. Pin Configuration (Top View)

| Pin No.                                | Mnemonic   | Description                                                                                                                                                                                          |
|----------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 4 to 8, 10, 11, 15, 16, 18 to 20 | GND        | Ground. The GND pins must be connected to the RF and DC ground of the PCB.                                                                                                                           |
| 3                                      | RFC        | RF Common Port. The RFC pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See Figure 5 for the interface schematic.  |
| 9                                      | RF2        | RF Throw Port 2. The RF2 pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See Figure 5 for the interface schematic. |
| 12                                     | CTRL       | Control Input. For the truth table in the ADRF5144 data sheet. See Figure 7 for the interface schematic.                                                                                             |
| 13                                     | VDD        | Positive Supply Voltage. See Figure 6 for the interface schematic.                                                                                                                                   |
| 14                                     | VSS        | Negative Supply Voltage. See Figure 8 for the interface schematic.                                                                                                                                   |
| 17                                     | RF1        | RF Throw Port 1. The RF1 pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See Figure 5 for the interface schematic. |
|                                        | EPAD       | Exposed Pad. The exposed pad must be connected to the RF and DC ground of the PCB.                                                                                                                   |

## Table 9. Pin Function Descriptions

## INTERFACE SCHEMATICS

<!-- image -->

Figure 5. RF Pins (RFC, RF1, and RF2) Interface Schematic

<!-- image -->

Figure 6. VDD Pin Interface Schematic

Figure 7. Digital Pin (CTRL) Interface Schematic

<!-- image -->

Figure 8. VSS Pin Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADRF5144 data sheet for a full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                 |
|--------------------------|----------------|-------------------------------------|
| CC-20-13                 | LGA            | 20-Terminal Land Grid Array Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description               | Package Quantity   | Package Option   |
|--------------------|---------------------|-----------------------------------|--------------------|------------------|
| ADRF5144BCCZ-CSL   | -40°C to +85°C      | 20-Terminal Land Grid Array [LGA] | Tape, 500          | CC-20-13         |
| ADRF5144BCCZ-CSLR7 | -40°C to +85°C      | 20-Terminal Land Grid Array [LGA] | Reel, 500          | CC-20-13         |

<!-- image -->