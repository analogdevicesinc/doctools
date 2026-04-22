<!-- lastmod 2025-11-19 -->
<!-- image -->

## Commercial Space Product

## Nonreflective, Silicon SP4T Switch, 100MHz to 20GHz

## FEATURES

## FUNCTIONAL BLOCK DIAGRAM

- Ultrawideband frequency range: 100MHz to 20GHz
- Nonreflective 50Ω design
- Low insertion loss
- 0.9dB typical to 6GHz
- 1.00dB typical to 12GHz
- 1.20dB typical to 20GHz
- High isolation between RFx and RFx
- 54dB typical to 6GHz
- 50dB typical to 12GHz
- 47dB typical to 20GHz
- High input linearity
- P0.1dB: 34dBm typical
- IP3: 55dBm typical
- High RF power handling
- Through path: 33dBm up to 20GHz
- Terminated path: 18dBm up to 20GHz
- Switching on and off time: 55ns
- 0.1dB settling time (50% V CTRL to 0.1dB final RF OUT ): 80ns
- All off state control
- Logic select control
- Single-supply operation with derated power handling
- No low frequency spurs
- 24-terminal, 3mm × 3mm, land grid array (LGA) package

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation monitors
- Total ionizing dose (TID)
- Single event latch-up (SEL) benchmark characterization
- Radiation lot acceptance test (RLAT) for production TID assurance
- Outgassing characterization

## APPLICATIONS

- Test instrumentation
- Military radios, radars, and electronic counter measures (ECMs)
- Microwave radios and very small aperture terminals (VSATs)

Rev. 0

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADRF5050-CSL is a nonreflective SP4T switch manufactured in a silicon on insulator (SOI) process. The ADRF5050-CSL operates from 100MHz to 20GHz with insertion loss less than 1.20dB and isolation higher than 47dB. The device has RF input power handling capability of 33dBm for through paths.

The ADRF5050-CSL operates with a dual-supply voltage +3.3V and -3.3V. The device can also operate with a single positive supply voltage (V DD ) applied while the negative supply voltage (V SS ) is tied to ground. The single-supply operation condition requires lower operating power while the excellent small signal performance is maintained (see Table 2).

The ADRF5050-CSL employs complimentary metal-oxide semiconductor (CMOS)- and low voltage transistor to transistor logic (LVTTL)-compatible controls. The device has enable and logic select controls to feature all off state and port mirroring, respectively.

The ADRF5050-CSL comes in a 24-terminal, 3mm × 3mm, RoHS compliant, land grid array (LGA) package and can operate from -40°C to +105°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADRF5050 data sheet.

## TABLE OF CONTENTS

Features................................................................ 1

Commercial Space Features................................. 1

Applications........................................................... 1

Functional Block Diagram......................................1

General Description...............................................1

Specifications........................................................ 3

Single-Supply Operation Specifications............. 4

Radiation Test and Limit Specifications..............5

Absolute Maximum Ratings...................................6

Thermal Resistance........................................... 6

## REVISION HISTORY

10/2025-Revision 0: Initial Version

| Power Derating Curve........................................6                                             |    |
|-----------------------------------------------------------------------------------------------------------|----|
| Outgas Testing...................................................                                         | 6  |
| Radiation Features.............................................7                                          |    |
| Electrostatic Discharge (ESD) Ratings...............7                                                     |    |
| ESD Caution.......................................................7                                       |    |
| Pin Configuration and Function Descriptions........ Schematics..........................................9 | 8  |
| Interface                                                                                                 |    |
| Typical Performance Characteristics...................10                                                  |    |
| Outline Dimensions..............................................11                                        |    |
| Ordering Guide.................................................11                                         |    |

## SPECIFICATIONS

VDD  = 3.3V, V SS = -3.3V, Control Input 1 voltage (V 1 ) and Control Input 2 voltage (V 2 ) = 0V or V DD , T CASE = 25°C, and a 50Ω system, unless otherwise noted. RFx refers to RF1 to RF4. V CTRL is the voltages of the digital control inputs, V 1 and V 2 .

Table 1. Specifications

| Parameter                | Symbol          | Test Conditions/Comments                                               | Min   | Typ   | Max    | Unit   |
|--------------------------|-----------------|------------------------------------------------------------------------|-------|-------|--------|--------|
| FREQUENCY RANGE          | f               |                                                                        | 100   |       | 20,000 | MHz    |
| INSERTION LOSS           |                 |                                                                        |       |       |        |        |
| Between RFC and RFx (On) |                 | 100MHz to 6GHz                                                         |       | 0.9   |        | dB     |
|                          |                 | 6GHz to 12GHz                                                          |       | 1.00  |        | dB     |
|                          |                 | 12GHz to 20GHz                                                         |       | 1.20  |        | dB     |
| ISOLATION                |                 |                                                                        |       |       |        |        |
| Between RFC and RFx      |                 | 100MHz to 6GHz                                                         |       | 56    |        | dB     |
|                          |                 | 6GHz to 12GHz                                                          |       | 54    |        | dB     |
|                          |                 | 12GHz to 20GHz                                                         |       | 47    |        | dB     |
| Between RFx and RFx      |                 | 100MHz to 6GHz                                                         |       | 54    |        | dB     |
|                          |                 | 6GHz to 12GHz                                                          |       | 50    |        | dB     |
|                          |                 | 12GHz to 20GHz                                                         |       | 47    |        | dB     |
| RETURN LOSS              |                 |                                                                        |       |       |        |        |
| RFC (On)                 |                 | 100MHz to 6GHz                                                         |       | 26    |        | dB     |
|                          |                 | 6GHz to 12GHz                                                          |       | 22    |        | dB     |
|                          |                 | 12GHz to 20GHz                                                         |       | 22    |        | dB     |
| RFx (On)                 |                 | 100MHz to 6GHz                                                         |       | 24    |        | dB     |
|                          |                 | 6GHz to 12GHz                                                          |       | 19    |        | dB     |
|                          |                 | 12GHz to 20GHz                                                         |       | 18    |        | dB     |
| RFx (Off)                |                 | 100MHz to 6GHz                                                         |       | 20    |        | dB     |
|                          |                 | 6GHz to 12GHz                                                          |       | 15    |        | dB     |
|                          |                 | 12GHz to 20GHz                                                         |       | 12    |        | dB     |
| SWITCHING                |                 |                                                                        |       |       |        |        |
| Rise and Fall Time       | t RISE , t FALL | 10% to 90% of RF output (RF OUT )                                      |       | 12    |        | ns     |
| On and Off Time          | t ON , t OFF    | 50% V CTRL to 90% of RF OUT                                            |       | 55    |        | ns     |
| 0.1dB Settling Time      |                 | 50% V CTRL to 0.1dB of final RF OUT                                    |       | 80    |        | ns     |
| INPUT LINEARITY 1        |                 |                                                                        |       |       |        |        |
| 0.1dB Power Compression  | P0.1dB          | f = 100MHz to 20GHz                                                    |       | 34    |        | dBm    |
| Third-Order Intercept    | IP3             | Two-tone input power = 15dBm each tone, f = 100MHz to 20GHz, Δf = 1MHz |       | 55    |        | dBm    |
| Second-Order Intercept   | IP2             | Two-tone input power = 1 dBm each tone, f = 8GHz, Δf = 1MHz            |       | 110   |        | dBm    |
| VIDEO FEEDTHROUGH 2      |                 |                                                                        |       | 30    |        | mV p-p |
| SUPPLY CURRENT           |                 | VDD and VSS pins                                                       |       |       |        |        |
| Positive Supply Current  | I DD            |                                                                        |       | 155   |        | µA     |
| Negative Supply Current  | I SS            |                                                                        |       | 530   |        | µA     |
| DIGITAL CONTROL INPUTS   |                 | V1, V2, EN, and LS pins                                                |       |       |        |        |
| Voltage                  |                 |                                                                        |       |       |        |        |
| Low                      | V INL           |                                                                        | 0     |       | 0.8    | V      |
| High                     | V INH           |                                                                        | 1.2   |       | 3.3    | V      |
| Current                  |                 |                                                                        |       |       |        |        |
| Low                      | I INL           |                                                                        |       | <1    |        | µA     |
| High                     | I INH           | V1 and V2 pins                                                         |       | 3     |        | µA     |
|                          |                 | LS and EN pins                                                         |       | 40    |        | µA     |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                       | Symbol   | Test Conditions/Comments           | Min   | Typ   | Max   | Unit   |
|---------------------------------|----------|------------------------------------|-------|-------|-------|--------|
| RECOMMENDED OPERATING CONDITONS |          |                                    |       |       |       |        |
| Supply Voltage                  |          |                                    |       |       |       |        |
| Positive                        | V DD     |                                    | 3.15  |       | 3.45  | V      |
| Negative                        | V SS     |                                    | -3.45 |       | -3.15 | V      |
| Digital Control Voltage         | V CTRL   |                                    | 0     |       | V DD  | V      |
| RF Power Handling 3             |          | f = 100MHz to 20GHz, T CASE = 85°C |       |       |       |        |
| Through Path                    |          |                                    |       |       | 33    | dBm    |
| Terminated Path                 |          |                                    |       |       | 18    | dBm    |
| Hot Switching                   |          |                                    |       |       | 30    | dBm    |
| Case Temperature                | T CASE   |                                    | -40   |       | +105  | °C     |

## SINGLE-SUPPLY OPERATION SPECIFICATIONS

VDD  = 3.3V, V SS = 0V, V 1 and V 2 = 0V or V DD , T CASE = 25°C, and 50Ω system, unless otherwise noted.

The small signal and bias characteristics are maintained for the single-supply operation.

## Table 2. Single-Supply Operation Specifications

| Parameter                        | Symbol          | Test Conditions/Comments                                               | Min   | Typ   | Max    | Unit   |
|----------------------------------|-----------------|------------------------------------------------------------------------|-------|-------|--------|--------|
| FREQUENCY RANGE                  |                 |                                                                        | 100   |       | 20,000 | MHz    |
| SWITCHING                        |                 |                                                                        |       |       |        |        |
| Rise and Fall Time               | t RISE , t FALL | 10% to 90% of RF OUT                                                   |       | 85    |        | ns     |
| On and Off Time                  | t ON , t OFF    | 50% V CTRL to 90% of RF OUT                                            |       | 175   |        | ns     |
| 0.1dB Settling Time              |                 | 50% V CTRL to 0.1dB of final RF OUT                                    |       | 200   |        | ns     |
| INPUT LINEARITY                  |                 |                                                                        |       |       |        |        |
| 0.1dB Power Compression          | P0.1dB          | f = 100MHz to 20GHz                                                    |       | 17    |        | dBm    |
| Third-Order Intercept            | IP3             | Two-tone input power = 15dBm each tone, f = 100MHz to 20GHz, Δf = 1MHz |       | 42    |        | dBm    |
| Second-Order Intercept           | IP2             | Two-tone input power = 15dBm each tone, f = 8GHz, Δf = 1MHz            |       | 86    |        | dBm    |
| RECOMMENDED OPERATING CONDITIONS |                 |                                                                        |       |       |        |        |
| RF Power Handling 1, 2           |                 | f = 100MHz to 20GHz, T CASE = 85°C                                     |       |       |        |        |
| Through Path                     |                 |                                                                        |       |       | 22     | dBm    |
| Terminated Path                  |                 |                                                                        |       |       | 12     | dBm    |
| Hot Switching                    |                 |                                                                        |       |       | 19     | dBm    |
| Case Temperature                 | T CASE          |                                                                        | -40   |       | +105   | °C     |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 3.3V, V SS = -3.3V, and T A = 25°C, unless otherwise noted. TID testing to 100krads, and SEL occurs at ≤58MeV-cm 2 /mg linear energy transfer (LET).

Table 3. Radiation Test and Limit Specifications

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   |
|-----------------------------------|----------|-------|-------|-------|--------|
| INSERTION LOSS                    |          |       |       |       |        |
| RF1 and RF4                       |          |       |       |       |        |
| Input Frequency (f IN ) = 0.65GHz |          |       | 0.7   |       | dB     |
| f IN = 10GHz                      |          |       | 1.1   |       | dB     |
| f IN = 19GHz                      |          |       | 1.3   |       | dB     |
| RF2 and RF3                       |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 0.7   |       | dB     |
| f IN = 10GHz                      |          |       | 1.1   |       | dB     |
| f IN = 19GHz                      |          |       | 1.2   |       | dB     |
| ISOLATION                         |          |       |       |       |        |
| RF1 and RF4                       |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 70    |       | dB     |
| f IN = 10GHz                      |          |       | 53    |       | dB     |
| f IN = 19GHz                      |          |       | 48    |       | dB     |
| RF2 and RF3                       |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | 71    |       | dB     |
| f IN = 10GHz                      |          |       | 51    |       | dB     |
| f IN = 19GHz                      |          |       | 48    |       | dB     |
| DC CURRENTS                       |          |       |       |       |        |
| Positive Supply Current           | I DD     |       | 230   | 260   | μA     |
| Negative Supply Current           | I SS     |       | 630   | 670   | μA     |

## ABSOLUTE MAXIMUM RATINGS

For recommended operating conditions, see Table 1 and Table 2.

Table 4. Absolute Maximum Ratings

| Parameter                                                                              | Rating               |
|----------------------------------------------------------------------------------------|----------------------|
| Supply Voltage                                                                         |                      |
| V DD                                                                                   | -0.3V to +3.6V       |
| V SS                                                                                   | -3.6V to +0.3V       |
| Digital Control Inputs 1                                                               |                      |
| Voltage                                                                                | -0.3V to V DD + 0.3V |
| Current                                                                                | 3mA                  |
| RF Input Power 2                                                                       |                      |
| Dual Supply (V DD = 3.3V, V SS = -3.3V, frequency = 100MHz to 20GHz, T CASE = 85°C 3 ) |                      |
| Through Path                                                                           | 33.5dBm              |
| Terminated Path                                                                        | 18.5dBm              |
| Hot Switching (RFC)                                                                    | 30.5dBm              |
| Single Supply (V DD = 3.3V, V SS = 0V, frequency = 100MHz to 20GHz, T CASE = 85°C)     |                      |
| Through Path                                                                           | 22.5dBm              |
| Terminated Path                                                                        | 12.5dBm              |
| Hot Switching (RFC)                                                                    | 19.5dBm              |
| Unbiased (V DD = 0V, V SS = 0V)                                                        | 18dBm                |
| Temperature                                                                            |                      |
| Junction, T J                                                                          | 135°C                |
| Storage Range                                                                          | -65°C to +150°C      |
| Reflow                                                                                 | 260°C                |

1 Overvoltages at the digital control inputs are clamped by internal diodes. Current must be limited to the maximum rating given.

2 For power derating over frequency, see Figure 2.

3 For 105°C operation, the power handling degrades from the T CASE = 85°C specification by 3dB.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the junction to case bottom (channel to package bottom) thermal resistance.

## Table 5. Thermal Resistance

| Package Type    | θ JC 1   | Unit   |
|-----------------|----------|--------|
| CC-24-16        |          |        |
| Through Path    | 110      | °C/W   |
| Terminated Path | 200      | °C/W   |

- 1 θ JC was determined by simulation under the following conditions: the heat transfer is due solely to thermal conduction from the channel through the round pad to the PCB, and the ground pad is held constant at the operating temperature of 85°C.

## POWER DERATING CURVE

Figure 2. Power Derating vs. Frequency, Low Frequency Detail, T CASE = 85°C

<!-- image -->

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based on specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

Table 6. Outgas Testing

| Specification (Tested per ASTM E595-15)   | Value   | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Lost                           | 0.11    | %      |
| Collected Volatile Condensable Material   | <0.01   | %      |
| Water Vapor Recovered                     | 0.06    | %      |

## ABSOLUTE MAXIMUM RATINGS

## RADIATION FEATURES

Table 7. Radiation Features

| Specifications                            | Value   | Unit         |
|-------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = | 100     | krads (Si)   |
| 50rads to 300rads (Si)/sec) 1             |         |              |
| No SEL Occurs at Effective LET 2          | ≤58     | MeV-cm 2 /mg |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADRF5050-CSL

Table 8. ADRF5050-CSL, 24-Terminal LGA

| ESD Model               | Withstand Threshold (V)   | Class   |
|-------------------------|---------------------------|---------|
| HBM                     |                           |         |
| RFx and RFC Pins        | 1000                      | 1C      |
| Supply and Control Pins | 2000                      | 2       |
| CDM                     | 500                       | C2A     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration (Top View)

<!-- image -->

Table 9. Pin Function Descriptions

| Pin No.                                   | Mnemonic   | Description                                                                                                                                                                       |
|-------------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                         | EN         | Enable Input. See the truth table in the ADRF5050 data sheet and Figure 6 for the interface schematic.                                                                            |
| 2                                         | V1         | Control Input 1. See the truth table in the ADRF5050 data sheet and Figure 5 for the interface schematic.                                                                         |
| 3, 5, 9, 11 to 13, 15 to 17, 19 to 21, 23 | GND        | Ground. The GND pins must be connected to the RF and DC ground of the PCB.                                                                                                        |
| 4                                         | RFC        | RF Common Port. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See Figure 4 for the interface schematic.                                      |
| 6                                         | VSS        | Negative Supply Voltage. See Figure 8 for the interface schematic.                                                                                                                |
| 7                                         | LS         | Logic Select Input. See the truth table in the ADRF5050 data sheet and Figure 6 for the interface schematic.                                                                      |
| 8                                         | VDD        | Positive Supply Voltage. See Figure 7 for the interface schematic.                                                                                                                |
| 10                                        | RF4        | RF Throw Port 4. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See Figure 4 for the interface schematic.                                     |
| 14                                        | RF3        | RF Throw Port 3. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See Figure 4 for the interface schematic.                                     |
| 18                                        | RF2        | RF Throw Port 2. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See Figure 4 for the interface schematic.                                     |
| 22                                        | RF1        | RF Throw Port 1. No DC blocking capacitor is required when the RF line potential is equal to 0V DC. See Figure 4 for the interface schematic.                                     |
| 24                                        | V2 EPAD    | Control Input 2. See the truth table in the ADRF5050 data sheet and Figure 5 for the interface schematic. Exposed Pad. The exposed pad must be connected to the RF and DC ground. |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## INTERFACE SCHEMATICS

<!-- image -->

Figure 4. RFC and RF1 to RF4 Pin Interface Schematic

<!-- image -->

Figure 5. V1 and V2 Pin Interface Schematic

<!-- image -->

Figure 6. EN and LS Pin Interface Schematic

Figure 7. VDD Pin Interface Schematic

<!-- image -->

Figure 8. VSS Pin Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADRF5050 data sheet for a full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                 |
|--------------------------|----------------|-------------------------------------|
| CC-24-16                 | LGA            | 24-Terminal Land Grid Array Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description               | Packing Quantity   | Package Option   |
|--------------------|---------------------|-----------------------------------|--------------------|------------------|
| ADRF5050BCCZ-CSL   | -40°C to +105°C     | 24-Terminal Land Grid Array [LGA] | Tape, 500          | CC-24-16         |
| ADRF5050BCCZ-CSLR7 | -40°C to +105°C     | 24-Terminal Land Grid Array [LGA] | Reel, 500          | CC-24-16         |

<!-- image -->