<!-- lastmod 2026-07-15 -->
<!-- image -->

## Commercial Space Product

## 0.5dB LSB, 6-Bit, Silicon Digital Attenuator, 100MHz to 40GHz

## FEATURES

- Ultrawideband frequency range: 100MHz to 40GHz
- Attenuation range: 0.5dB steps to 31.5dB
- Low insertion loss with impedance match
- 2.1dB up to 18GHz
- 2.9dB up to 26GHz
- 4.8dB up to 40GHz
- Attenuation accuracy with impedance match
- ±(0.10 + 1.0% of attenuation state) up to 18GHz
- ±(0.15 + 0.8% of attenuation state) up to 26GHz
- ±(0.35 + 2.5% of attenuation state) up to 40GHz
- Typical step error with impedance match
- ±0.18dB up to 18GHz
- ±0.23dB up to 26GHz
- ±0.51dB up to 40GHz
- High input linearity
- P0.1dB insertion loss state: 30dBm
- P0.1dB other attenuation states: 27dBm
- IP3: 50dBm typical
- High RF input power handling: 27dBm average, 30dBm peak
- Tight distribution in relative phase
- No low frequency spurious signals
- SPI and parallel mode control, CMOS/LVTTL compatible
- RF amplitude settling time (0.1dB of final RF output): 250ns
- 24-terminal, 4 mm × 4 mm LGA package

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation monitors
- TID
- SEL benchmark characterization
- Radiation lot acceptance test (RLAT) for production TID assurance
- Outgassing characterization

## APPLICATIONS

- Industrial scanners
- Test and instrumentation
- Cellular infrastructure: 5G millimeter wave
- Military radios, radars, electronic counter measures (ECMs)
- Microwave radios and very small aperture terminals (VSATs)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADRF5730-CSL is a 6-bit digital attenuator with a 31.5dB attenuation control range in 0.5dB steps manufactured in a silicon on insulator (SOI) process.

This device operates from 100MHz to 40GHz with better than 4.8dB of insertion loss and excellent attenuation accuracy. The ADRF5730-CSL has a RF input power handling capability of 27dBm average and 30dBm peak for all states.

The ADRF5730-CSL requires a dual-supply voltage of +3.3V and -3.3V. The device features serial peripheral interface (SPI), parallel mode control, and complementary metal-oxide semiconductor (CMOS)-/low voltage transistor to transistor logic (LVTTL)-compatible controls.

The ADRF5730-CSL comes in a 24-terminal, 4mm × 4mm, RoHScompliant, land grid array (LGA) package and operates from -40°C to +105°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADRF5730 data sheet.

| Data Sheet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | ADRF5730-CSL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TABLE OF CONTENTS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Features................................................................ 1 Commercial Space Features.................................1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 Electrical Specifications......................................3 Radiation Test and Limit Specifications..............6 Absolute Maximum Ratings...................................7 Thermal Resistance........................................... 7 | Power Derating Curves......................................7 Outgas Testing................................................... 8 Radiation Features.............................................8 Electrostatic Discharge (ESD) Ratings...............8 ESD Caution.......................................................8 Pin Configuration and Function Descriptions........ 9 Interface Schematics........................................10 Typical Performance Characteristics................... 11 Outline Dimensions............................................. 12 Ordering Guide.................................................12 |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 7/2026-Rev. 0 to Rev. A Changes to Ordering Guide...........................................................................................................................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

VDD  = 3.3V, V SS = -3.3V, digital voltages = 0V or V DD , case temperature (T CASE ) = 25°C, and 50Ω system, unless otherwise noted.

Table 1. Electrical Specifications

| Parameter               | Test Conditions/Comments                       |   Min | Typ                     |    Max | Unit   |
|-------------------------|------------------------------------------------|-------|-------------------------|--------|--------|
| FREQUENCY RANGE         |                                                |   100 |                         | 40,000 | MHz    |
| INSERTION LOSS          |                                                |       |                         |        |        |
| With Impedance Match    |                                                |       |                         |        |        |
|                         | 100MHz to 10GHz                                |       | 1.6                     |        | dB     |
|                         | 10GHz to 18GHz                                 |       | 2.1                     |        | dB     |
|                         | 18GHz to 26GHz                                 |       | 2.9                     |        | dB     |
|                         | 26GHz to 35GHz                                 |       | 3.8                     |        | dB     |
|                         | 35GHz to 40GHz                                 |       | 4.8                     |        | dB     |
| Without Impedance Match |                                                |       |                         |        |        |
|                         | 100MHz to 10GHz                                |       | 1.6                     |        | dB     |
|                         | 10GHz to 18GHz                                 |       | 2.1                     |        | dB     |
|                         | 18GHz to 26GHz                                 |       | 2.7                     |        | dB     |
|                         | 26GHz to 35GHz                                 |       | 3.7                     |        | dB     |
|                         | 35GHz to 40GHz                                 |       | 5.2                     |        | dB     |
| RETURN LOSS             | ATTIN and ATTOUT, all attenuation states       |       |                         |        |        |
|                         | 100MHz to 10GHz                                |       | 20                      |        | dB     |
|                         | 10GHz to 18GHz                                 |       | 19                      |        | dB     |
|                         | 18GHz to 26GHz                                 |       | 13                      |        | dB     |
|                         | 26GHz to 35GHz                                 |       | 11                      |        | dB     |
|                         | 35GHz to 40GHz                                 |       | 11                      |        | dB     |
| Without Impedance Match |                                                |       |                         |        |        |
|                         | 100MHz to 10GHz                                |       | 19                      |        | dB     |
|                         | 10GHz to 18GHz                                 |       | 18                      |        | dB     |
|                         | 18GHz to 26GHz                                 |       | 16                      |        | dB     |
|                         | 26GHz to 35GHz                                 |       | 13                      |        | dB     |
|                         | 35GHz to 40GHz                                 |       | 9                       |        | dB     |
| ATTENUATION             |                                                |       |                         |        |        |
| Range                   | Between minimum and maximum attenuation states |       | 31.5                    |        | dB     |
| Step Size               | Between any successive attenuation states      |       | 0.5                     |        | dB     |
| Accuracy                | Referenced to insertion loss                   |       |                         |        |        |
|                         | 100MHz to 10GHz                                |       | ±(0.10 + 0.6% of state) |        | dB     |
|                         | 10GHz to 18GHz                                 |       | ±(0.10 + 1.0% of state) |        | dB     |
|                         | 18GHz to 26GHz                                 |       | ±(0.15 + 0.8% of state) |        | dB     |
|                         | 26GHz to 35GHz                                 |       | ±(0.20 + 2.0% of state) |        | dB     |
|                         | 35GHz to 40GHz                                 |       | ±(0.35 + 2.5% of state) |        | dB     |
| Without Impedance Match |                                                |       |                         |        |        |
|                         | 100MHz to 10GHz                                |       | ±(0.10 + 0.5% of state) |        | dB     |
|                         | 10GHz to 18GHz                                 |       | ±(0.10 + 1.0% of state) |        | dB     |
|                         | 18GHz to 26GHz                                 |       | ±(0.15 + 0.8% of state) |        | dB     |
|                         | 26GHz to 35GHz                                 |       | ±(0.25 + 1.8% of state) |        | dB     |
|                         | 35GHz to 40GHz                                 |       | ±(0.40 + 5.0% of state) |        | dB     |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

| Parameter                                                                 | Test Conditions/Comments                                                 | Min Typ   |   Max | Unit    |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------|-----------|-------|---------|
| Step Error                                                                | Between any successive state                                             |           |       |         |
| With Impedance Match                                                      |                                                                          |           |       |         |
|                                                                           | 100MHz to 10GHz                                                          | ±0.11     |       | dB      |
|                                                                           | 10GHz to 18GHz                                                           | ±0.18     |       | dB      |
|                                                                           | 18GHz to 26GHz                                                           | ±0.23     |       | dB      |
|                                                                           | 26GHz to 35GHz                                                           | ±0.3      |       | dB      |
|                                                                           | 35GHz to 40GHz                                                           | ±0.51     |       | dB      |
| Without Impedance Match                                                   |                                                                          |           |       |         |
|                                                                           | 100MHz to 10GHz                                                          | ±0.11     |       | dB      |
|                                                                           | 10GHz to 18GHz                                                           | ±0.19     |       | dB      |
|                                                                           | 18GHz to 26GHz                                                           | ±0.23     |       | dB      |
|                                                                           | 26GHz to 35GHz                                                           | ±0.26     |       | dB      |
|                                                                           | 35GHz to 40GHz                                                           | ±0.65     |       | dB      |
| RELATIVE PHASE                                                            | Referenced to insertion loss                                             |           |       |         |
|                                                                           | 10GHz                                                                    | 15        |       | Degrees |
|                                                                           | 18GHz                                                                    | 30        |       | Degrees |
|                                                                           | 26GHz                                                                    | 50        |       | Degrees |
|                                                                           | 35GHz                                                                    | 75        |       | Degrees |
|                                                                           | 40GHz                                                                    | 100       |       | Degrees |
| Without Impedance Match                                                   |                                                                          |           |       |         |
|                                                                           | 10GHz                                                                    | 15        |       | Degrees |
|                                                                           | 18GHz                                                                    | 30        |       | Degrees |
|                                                                           | 26GHz                                                                    | 50        |       | Degrees |
|                                                                           | 35GHz                                                                    | 75        |       |         |
|                                                                           |                                                                          |           |       | Degrees |
|                                                                           | 40GHz                                                                    | 110       |       | Degrees |
| SWITCHING CHARACTERISTICS                                                 | All attenuation states at input power = 10dBm                            |           |       |         |
| Rise and Fall Time (t RISE and t FALL ) On and Off Time (t ON and t OFF ) | 10% to 90% of RF output 50% triggered control (CTL) to 90% of RF output  | 35 125    |       | ns ns   |
| RF Amplitude Settling Time                                                |                                                                          |           |       |         |
| 0.1dB                                                                     | 50% triggered CTL to 0.1dB of final RF output                            | 250       |       | ns      |
| 0.05dB                                                                    | 50% triggered CTL to 0.05dB of final RF output                           | 350       |       | ns      |
| Overshoot                                                                 |                                                                          | 1         |       | dB      |
| Undershoot                                                                |                                                                          | -2.5      |       | dB      |
| RF Phase Settling Time                                                    | f = 5GHz                                                                 |           |       |         |
| 5°                                                                        | 50% triggered CTL to 5° of final RF output                               | 160       |       | ns      |
| 1°                                                                        | 50% triggered CTL to 1° of final RF output                               | 180       |       | ns      |
| INPUT LINEARITY 1                                                         | 100MHz to 30GHz                                                          |           |       |         |
| 0.1dB Power Compression (P0.1dB) Insertion Loss State                     |                                                                          | 30        |       | dBm     |
| Other Attenuation States                                                  |                                                                          | 27        |       | dBm     |
| Third-Order Intercept (IP3)                                               | Two-tone input power = 14dBm per tone, Δf = 1MHz, all attenuation states | 50        |       | dBm     |
| DIGITAL CONTROL INPUTS                                                    | LE, PS, D0, D1, D2, D3/SEROUT, 2 D4/SERIN, and D5/CLK pins               |           |       |         |
| Voltage                                                                   |                                                                          |           |       |         |
| Low (V INL )                                                              |                                                                          | 0         |   0.8 | V       |
| High (V INH )                                                             |                                                                          | 1.2       |   3.3 | V       |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

| Parameter                        | Test Conditions/Comments                                     |   Min | Typ        | Max   | Unit   |
|----------------------------------|--------------------------------------------------------------|-------|------------|-------|--------|
| Current                          |                                                              |       |            |       |        |
| Low (I INL )                     |                                                              |       | <1         |       | µA     |
| High (I INH )                    | D0, D1, and D2                                               |       | 33         |       | µA     |
|                                  | LE, PS, D3/SEROUT 2 , D4/SERIN, and D5/CLK pins              |       | <1         |       | µA     |
| DIGITAL CONTROL OUTPUT           | D3/SEROUT pin 2                                              |       |            |       |        |
| Low (V OUTL )                    |                                                              |       | 0 ± 0.3    |       | V      |
| High (V OUTH )                   |                                                              |       | V DD ± 0.3 |       | V      |
| Current (I OUTL , I OUTH )       |                                                              |       |            | 0.5   | mA     |
| SUPPLY CURRENT                   | VDD and VSS pins                                             |       |            |       |        |
| Positive Supply Current          |                                                              |       | 117        |       | µA     |
| Negative Supply Current          |                                                              |       | -117       |       | µA     |
| RECOMMENDED OPERATING CONDITIONS |                                                              |       |            |       |        |
| Supply Voltage                   |                                                              |       |            |       |        |
| Positive (V DD )                 |                                                              |  3.15 |            | 3.45  | V      |
| Negative (V SS )                 |                                                              | -3.45 |            | -3.15 | V      |
| Digital Control Voltage          |                                                              |     0 |            | V DD  | V      |
| RF Power 3                       | f = 100MHz to 30GHz, T CASE = 85°C, 4 all attenuation states |       |            |       |        |
| Input at ATTIN                   | Steady state average                                         |       |            | 27    | dBm    |
|                                  | Steady state peak                                            |       |            | 30    | dBm    |
|                                  | Hot switching average                                        |       |            | 24    | dBm    |
|                                  | Hot switching peak                                           |       |            | 27    | dBm    |
| Input at ATTOUT                  | Steady state average                                         |       |            | 18    | dBm    |
|                                  | Steady state peak                                            |       |            | 21    | dBm    |
|                                  | Hot switching average                                        |       |            | 15    | dBm    |
|                                  | Hot switching peak                                           |       |            | 18    | dBm    |
| Case Temperature (T CASE )       |                                                              |   -40 |            | +105  | °C     |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 3.3V, V SS = -3.3V, and T A = 25°C, unless otherwise noted. Total ionizing dose (TID) testing to 100krads, and single event latch-up (SEL) occurs at ≤68MeV-cm 2 /mg linear energy transfer (LET).

Table 2. Radiation Test and Limit Specifications

| Parameter                         | Symbol   | Min   | Typ   |   Max | Unit   |
|-----------------------------------|----------|-------|-------|-------|--------|
| INSERTION LOSS                    |          |       |       |       |        |
| ATTIN and ATTOUT                  |          |       |       |       |        |
| Input Frequency (f IN ) = 0.65GHz |          |       | 1.1   |       | dB     |
| f IN = 8GHz                       |          |       | 1.6   |       | dB     |
| f IN = 16GHz                      |          |       | 2.0   |       | dB     |
| f IN = 32GHz                      |          |       | 3.3   |       | dB     |
| STEP ERROR                        |          |       |       |       |        |
| ATTIN and ATTOUT                  |          |       |       |       |        |
| f IN = 0.65GHz                    |          |       | ±0.1  |       | dB     |
| f IN = 8GHz                       |          |       | ±0.2  |       | dB     |
| f IN = 16GHz                      |          |       | ±0.3  |       | dB     |
| f IN = 32GHz                      |          |       | ±0.4  |       | dB     |
| DC CURRENTS                       |          |       |       |       |        |
| Positive Supply Current           | I DD     |       | 270   |   350 | μA     |
| Negative Supply Current           | I SS     |       | -160  |  -200 | μA     |

## ABSOLUTE MAXIMUM RATINGS

## Table 3. Absolute Maximum Ratings

| Parameter                                            | Rating               |
|------------------------------------------------------|----------------------|
| Positive Supply Voltage                              | -0.3V to +3.6V       |
| Negative Supply Voltage                              | -3.6V to +0.3V       |
| Digital Control Inputs                               |                      |
| Voltage                                              | -0.3V to V DD + 0.3V |
| Current                                              | 3mA                  |
| RF Power 1 (f = 100MHz to 30GHz, T CASE = 85°C 2 )   |                      |
| Steady                                               |                      |
| State Average                                        | 28dBm                |
| Steady State Peak                                    | 31dBm                |
| Hot Switching Average                                | 25dBm                |
| Hot Switching Peak                                   | 28dBm                |
| Input at ATTOUT                                      |                      |
| Steady State Average                                 | 19dBm                |
| Steady State Peak                                    | 22dBm                |
| Hot Switching Average                                | 16dBm                |
| Hot Switching Peak                                   | 19dBm                |
| RF Power Under Unbiased Condition (V DD , V SS = 0V) |                      |
| Input at ATTIN                                       | 21dBm                |
| Input at ATTOUT                                      | 15dBm                |
| Temperature                                          |                      |
| Junction (T J )                                      | 135°C                |
| Storage                                              | -65°C to +150°C      |
| Reflow                                               | 260°C                |
| Continuous Power Dissipation (P DISS )               | 0.5W                 |

1 For power derating over frequency, see Figure 2 and Figure 3. Applicable for all ATTIN and ATTOUT power specifications.

2 For 105°C operation, the power handling degrades from the T CASE = 85°C specifications by 3dB.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the junction to case bottom (channel to package bottom) thermal resistance.

## Table 4. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| CC-24-5        |    100 | °C/W   |

## POWER DERATING CURVES

Figure 2. Power Derating vs. Frequency, Low Frequency Detail, T CASE = 85°C

<!-- image -->

Figure 3. Power Derating vs. Frequency, High Frequency Detail, T CASE = 85°C

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based on specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 5. Outgas Testing

| Specification (Tested per ASTM E595 -15)   | Value   | Unit   |
|--------------------------------------------|---------|--------|
| Total Mass Lost                            | 0.11    | %      |
| Collected Volatile Condensable Material    | <0.01   | %      |
| Water Vapor Recovered                      | 0.06    | %      |

## RADIATION FEATURES

## Table 6. Radiation Features

| Specifications                                                 | Value   | Unit         |
|----------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate =                      | 100     | krads (Si)   |
| 50rads to 300rads (Si)/sec) 1 No SEL Occurs at Effective LET 2 | ≤68     | MeV-cm 2 /mg |

- 2 Limits are characterized at initial qualification and after any design or process changes that may affect the SEL characteristics, but are not production lot tested unless specified by the customer through the purchase order or contract. For more information on single event effect (SEE) test results, contact Analog Devices Support for further data beyond published report on the Analog Devices website.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charge device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADRF5730-CSL

Table 7. ADRF5730-CSL, 24-Terminal LGA

| ESD Model               |   Withstand Threshold (V) | Class   |
|-------------------------|---------------------------|---------|
| HBM                     |                           |         |
| ATTIN and ATTOUT Pins   |                       500 | 1B      |
| Supply and Control Pins |                      2000 | 2       |
| CDM                     |                       500 | C2A     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 4. Pin Configuration

| Pin No.                 | Mnemonic     | Description                                                                                                                                                                                                                           |
|-------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                       | LE           | Latch Enable Input.                                                                                                                                                                                                                   |
| 2                       | PS           | Parallel or Serial Control Interface Selection Input.                                                                                                                                                                                 |
| 3, 4, 6 to 13, 15, 16 5 | GND ATTIN    | Ground. The GND pins must be connected to the RF and DC ground of the PCB. Attenuator Input. The ATTIN pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is necessary when RF line potential is equal to 0V DC. |
| 14                      | ATTOUT       | Attenuator Output. The ATTOUT pin is DC-coupled to 0V and AC matched to 50Ω. No DC blocking capacitor is necessary when the RF line potential is equal to 0V DC.                                                                      |
| 17                      |              | Negative Supply Input.                                                                                                                                                                                                                |
|                         | VSS          |                                                                                                                                                                                                                                       |
| 18 19                   | VDD D0       | Positive Supply Input. Parallel Control Input for 0.5dB Attenuator                                                                                                                                                                    |
|                         |              | Bit. Bit.                                                                                                                                                                                                                             |
| 20                      | D1           | Parallel Control Input for 1dB Attenuator                                                                                                                                                                                             |
| 21 22                   | D2 D3/SEROUT | Parallel Control Input for 2dB Attenuator Bit. Parallel Control Input for 4dB Attenuator Bit (D3).                                                                                                                                    |
|                         |              | Serial Data Output (SEROUT). Parallel Control Input for 8dB Attenuator Bit (D4).                                                                                                                                                      |
| 23                      | D4/SERIN     | Serial Data Input (SERIN).                                                                                                                                                                                                            |
| 24                      | D5/CLK EPAD  | Parallel Control Input for 16dB Attenuator Bit (D5). Serial Clock Input (CLK). Exposed Pad. The exposed pad must be connected to the RF and DC ground of the PCB.                                                                     |

## Table 8. Pin Function Descriptions

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## INTERFACE SCHEMATICS

<!-- image -->

Figure 5. Digital Input Interface (LE, PS, D3/SEROUT, D4/SERIN, and D5/CLK)

Figure 6. ATTIN and ATTOUT Interface

<!-- image -->

Figure 7. Digital Input Interface (D0, D1, and D2)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADRF5730 data sheet for a full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description         |
|--------------------------|----------------|-----------------------------|
| CC-24-5                  | LGA            | 24-Terminal Land Grid Array |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description               | Package Option   |
|--------------------|---------------------|-----------------------------------|------------------|
| ADRF5730BCCZ-CSL   | -40°C to +105°C     | 24-Terminal Land Grid Array [LGA] | CC-24-5          |
| ADRF5730BCCZ-CSLR7 | -40°C to +105°C     | 24-Terminal Land Grid Array [LGA] | CC-24-5          |

## Legal Terms and Conditions

Analog Devices, Inc. ('ADI') believes the information in this data sheet is accurate and reliable as of its date of publication and provides it 'as is' without any representation or warranty of any kind. ADI reserves the right to make changes, corrections, modifications, enhancements, improvements, and other updates to the information described in this data sheet, with use of the product subject to ADI's Terms and Conditions of Sale, available on Analog.com. ANALOG DEVICES word mark and logo, AD, and ADI are registered trademarks and trademarks owned by ADI. This data sheet, trademarks, and its content are owned by ADI and may not be reproduced, distributed, or used except with ADI's prior written authorization. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ADI BE LIABLE FOR ANY DAMAGES WHATSOEVER, WHETHER DIRECT OR INDIRECT, ARISING OUT OF OR IN CONNECTION WITH THE USE OF, INABILITY TO USE, OR RELIANCE UPON THIS DATA SHEET OR THE INFORMATION CONTAINED HEREIN.