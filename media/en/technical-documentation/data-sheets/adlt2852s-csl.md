<!-- lastmod 2024-12-06 -->
<!-- image -->

## Commercial Space Product

## FEATURES

- 3.3 V supply voltage
- 20 Mbps maximum data rate
- No damage or latch-up up to ±15 kV HBM
- Guaranteed fail-safe receiver operation over the entire commonmode range
- Current-limited drivers and thermal shutdown
- Power-up and power-down glitch free driver outputs
- Low operating current: 370 µA typical in receive mode
- Compatible with TIA/EIA-485-A specifications
- Available in 14-lead SOIC\_N package

## COMMERCIAL SPACE FEATURES

- Supports aerospace applications
- Wafer diffusion lot traceability
- Radiation lot acceptance testing: TID
- Radiation benchmark
- Total Ionizing Dose (TID)
- Single Event Effects (SEE)

## APPLICATIONS

- Low Earth orbit (LEO) space payloads
- Low power RS485/RS422 transceiver
- Level translator
- Backplane transceiver

## GENERAL DESCRIPTION

The ADLT2852S-CSL is a low power, 20 Mbps RS485/RS422 transceiver operating on a 3.3 V supply. The receiver has a fail-safe feature that guarantees a high output state under conditions of floating or shorted inputs.

The driver maintains a high output impedance over the entire common-mode range when disabled or when the supply is removed. Excessive power dissipation caused by bus contention or a fault is prevented by current limiting all outputs and by thermal shutdown.

## 3.3 V, 20 Mbps RS485/RS422 Transceiver

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

Enhanced electrostatic discharge (ESD) protection allows this device to withstand up to ±15 kV human body model (HBM) on the transceiver interface pins without latch-up or damage.

The ADLT2852S-CSL is specified over the -55°C to +125°C temperature range. Additional application and technical information can be found in the Commercial Space Products Program brochure and the LTC2852 data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1 Commercial Space Features.................................1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 Electrical Characteristics....................................3   | Radiation Features.............................................6 Outgas Testing................................................... Electrostatic Discharge (ESD) Ratings...............6 ESD Caution.......................................................6 Pin Configuration and Function Descriptions........ 7 Truth Table......................................................... 7 Typical Performance Characteristics.....................8 Test Circuits.........................................................10   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Switching Characteristics...................................4                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Radiation Test and Limit Specifications..............4                                                                                                                                                                                                                                                                                                                                                                                                                                          | Outline Dimensions............................................. 12                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Absolute Maximum Ratings...................................6                                                                                                                                                                                                                                                                                                                                                                                                                                    | Ordering Guide.................................................12                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Changes to Commercial Space Features                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Section...........................................................................................1                                                                                                                                                                                                                                                                                                                                                                                                                            |

## 5/2022-Revision 0: Initial Version

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS

VCC  = 3.3 V. All currents into the device pins are positive, and all currents out of the device pins are negative. All voltages are referenced to device ground, unless otherwise specified. Specifications represent performance at -55°C ≤ T A ≤ +125°C, unless otherwise specified.

Table 1. Electrical Characteristics

| Parameter                                                                                    | Symbol             | Test Conditions/Comments                                                                                                                          | Min   | Typ   | Max      | Unit   |
|----------------------------------------------------------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|----------|--------|
| DRIVER                                                                                       |                    |                                                                                                                                                   |       |       |          |        |
| Differential Driver Output Voltage                                                           | &#124;V OD &#124;  | Resistance (R) = ∞, V CC = 3 V (see Figure 12) R                                                                                                  |       |       | V CC     | V      |
|                                                                                              |                    | = 27 Ω, V CC = 3 V (see Figure 12)                                                                                                                | 1.5   |       | V CC     | V      |
| Difference in Magnitude of Driver Differential Output                                        | Δ&#124;V OD &#124; | R = 50 Ω, V CC = 3.13 V (see Figure 12) R = 27 Ω or 50 Ω (see Figure 12)                                                                          | 2     |       | V CC 0.2 | V V    |
| Voltage for Complementary Output States Common Mode Output Voltage                           | V OC               | R = 27 Ω or 50 Ω (see Figure 12)                                                                                                                  |       |       | 3        | V      |
| Difference in Magnitude of Driver Common Mode Output Voltage for Complementary Output States | Δ&#124;V OC &#124; | R = 27 Ω or 50 Ω (see Figure 12)                                                                                                                  |       |       | 0.2      | V      |
| Three-State (High Impedance) Output Current on Y and Z                                       | I OZD              | DE = 0 V, (Y or Z) = -7 V, 12 V                                                                                                                   |       |       | ±50      | µA     |
| Maximum Driver Short-Circuit Current                                                         | I OSD              | -7 V ≤ (Y or Z) ≤ +12 V (see Figure 13), applicable only at T A = 25°C                                                                            | ±180  |       | ±250     | mA     |
|                                                                                              |                    |                                                                                                                                                   | -250  |       | +300     | mA     |
| RECEIVER                                                                                     |                    |                                                                                                                                                   |       |       |          |        |
| Input Current (A, B)                                                                         | I IN               | DE = TE = 0 V, V CC = 0 V or 3.3 V, input voltage (V IN ) = 12 V (see Figure 14) DE = TE = 0 V, V CC = 0 V or 3.3 V, V IN = -7 V, (see Figure 14) | -145  |       | 250      | µA µA  |
| Input Resistance                                                                             | R IN               | RE = V CC or 0 V, DE = TE = 0 V, V IN = -7 V, -3 V, 3 V, 7 V, 12 V (see Figure 14)                                                                | 48    | 125   |          | kΩ     |
| Differential Input Threshold Voltage                                                         | V TH               | -7 V ≤ B ≤ +12 V                                                                                                                                  |       |       | ±0.2     | V      |
| Input Hysteresis                                                                             | ΔV TH              | B = 0 V, applicable only at T A = 25°C                                                                                                            |       | 25    |          | mV     |
| Output High Voltage                                                                          | V OH               | Receive output current (I(RO)) = -4 mA, A and B = 200 mV, V CC = 3 V                                                                              | 2.4   |       |          | V      |
| Output Low Voltage                                                                           | V OL               | I(RO) = 4 mA, A and B = -200 mV, V CC = 3 V                                                                                                       |       |       | 0.4      | V      |
| Three-State (High Impedance) Output Current on RO                                            | I OZR              | RE = V CC , 0 V ≤ RO ≤ V CC                                                                                                                       |       |       | ±1       | µA     |
| Short-Circuit Current                                                                        | I OSR              | 0 V ≤ RO ≤ V CC                                                                                                                                   |       |       | ±85      | mA     |
| LOGIC                                                                                        |                    |                                                                                                                                                   |       |       |          |        |
| Input High Voltage                                                                           | V IH               | V CC = 3.6 V                                                                                                                                      | 2     |       |          | V      |
| Input Low Voltage                                                                            | V IL               | V CC = 3 V                                                                                                                                        |       |       | 0.8      | V      |
| Input Current                                                                                | I INL              |                                                                                                                                                   |       | 0     | ±10      | µA     |
| SUPPLIES                                                                                     |                    |                                                                                                                                                   |       |       |          |        |
| Current in Shutdown Mode                                                                     | I CCS              | DE = 0 V, RE = V CC                                                                                                                               |       | 0     | 15       | µA     |
| Current in Receive Mode                                                                      | I CCR              | DE = 0 V, RE = 0 V                                                                                                                                |       | 370   | 900      | µA     |
| Current in Transmit Mode                                                                     | I CCT              | No load, DE = V CC , RE = V CC                                                                                                                    |       | 450   | 1000     | µA     |
| Current with Both Driver and Receiver Enabled                                                | I CCTR             | No load, DE = V CC , RE = 0 V                                                                                                                     |       | 450   | 1000     | µA     |

## SPECIFICATIONS

## SWITCHING CHARACTERISTICS

VCC  = 3.3 V. All currents into the device pins are positive, and all currents out of the device pins are negative. All voltages are referenced to device ground, unless otherwise specified. Specifications represent performance at -55°C ≤ T A ≤ +125°C, unless otherwise specified.

Table 2. Switching Characteristics

| Parameter                                                | Symbol                        | Test Conditions/Comments                                                                                                                                                      | Min   | Typ Max   | Unit   |
|----------------------------------------------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------|--------|
| DRIVER                                                   |                               |                                                                                                                                                                               |       |           |        |
| Maximum Data Rate 1                                      | f MAX                         |                                                                                                                                                                               | 20    |           | Mbps   |
| Input to Output                                          | t PLHD , t PHLD               | Differential resistance (R DIFF ) = 54 Ω, load capacitance (C L ) = 100 pF (see Figure 15)                                                                                    | 10    | 50        | ns     |
| Input to Output Difference, &#124;t PLHD - t PHLD &#124; | Δt PD                         | R DIFF = 54 Ω, C L = 100 pF (see Figure 15)                                                                                                                                   | 1     | 6         | ns     |
| Output Y to Output Z                                     | t SKEWD                       | R DIFF = 54 Ω, C L = 100 pF (see Figure 15)                                                                                                                                   | 1     | ±6        | ns     |
| Rise or Fall Time                                        | t RD , t FD                   | R DIFF = 54 Ω, C L = 100 pF (see Figure 15)                                                                                                                                   | 4     | 12.5      | ns     |
| Enable or Disable Time                                   | t ZLD , t ZHD , t LZD , t HZD | Load resistance (R L ) = 500 Ω, C L = 50 pF, RE = 0 V (see Figure 16)                                                                                                         |       | 70        | ns     |
| Enable from Shutdown                                     | t ZHSD , t ZLSD               | R L = 500 Ω, C L = 50 pF, RE = V CC (see Figure 16)                                                                                                                           |       | 8         | µs     |
| Time to Shutdown                                         | t SHDN                        | R L = 500 Ω, C L = 50 pF, (DE is low, RE = V CC ) or (DE = 0 V, RE is high) (see Figure 16)                                                                                   |       | 100       | ns     |
| RECEIVER                                                 |                               |                                                                                                                                                                               |       |           |        |
| Input to Output                                          | t PLHR , t PHLR               | C L = 15 pF, common-mode voltage (V CM ) = 1.5 V, absolute value of A and B voltage (&#124;V AB &#124;) = 1.5 V, rise time (t R ) and fall time (t F ) < 4 ns (see Figure 17) | 50    | 70        | ns     |
| Differential Receiver Skew, &#124;t PLHR - t PHLR &#124; | t SKEWR                       | C L = 15 pF (see Figure 17)                                                                                                                                                   | 1     | 6         | ns     |
| Output Rise or Fall Time                                 | t RR , t FR                   | C L = 15 pF (see Figure 17)                                                                                                                                                   | 3     | 12.5      | ns     |
| Enable and Disable                                       | t ZLR , t ZHR , t LZR , t HZR | R L = 1 kΩ, C L = 15 pF, DE = V CC (see Figure 18)                                                                                                                            |       | 50        | ns     |
| Enable from Shutdown                                     | t ZHSR , t ZLSR               | R L = 1 kΩ, C L = 15 pF, DE = 0 V (see Figure 18)                                                                                                                             |       | 8         | µs     |

## RADIATION TEST AND LIMIT SPECIFICATIONS

Total ionizing dose (TID) testing characterized to 30 krads (20 krads + 50% overstress) with biased annealing at 100°C for 168 hours.

Table 3. Electrical Characteristics

| Parameter                                                                                      | Symbol             | Test Conditions/Comments                                                           | Min   | Typ Max   | Unit   |
|------------------------------------------------------------------------------------------------|--------------------|------------------------------------------------------------------------------------|-------|-----------|--------|
| DRIVER                                                                                         |                    |                                                                                    |       |           |        |
| Difference in Magnitude of Driver Differential Output Voltage for Complementary Output States  | Δ&#124;V OD &#124; | R = 27 Ω or 50 Ω (see Figure 12)                                                   |       | 0.2       | V      |
| Common-Mode Output Voltage                                                                     | V OC               | R = 27 Ω or 50 Ω (see Figure 12)                                                   |       | 3         | V      |
| Difference in Magnitude of Driver Common-Mode Out- put Voltage for Complementary Output States | Δ&#124;V OC &#124; | R = 27 Ω or 50 Ω (see Figure 12)                                                   |       | 0.2       | V      |
| Three-State (High Impedance) Output Current on Y and Z                                         | I OZD              | DE = 0 V, (Y or Z) = -7 V, 12 V                                                    | -10   | +200      | µA     |
| Maximum Driver Short-Circuit Current                                                           | I OSD              | -7 V ≤ (Y or Z) ≤ +12 V (see Figure 13)                                            | -260  | +300      | mA     |
| RECEIVER                                                                                       |                    |                                                                                    |       |           |        |
| Input Current (A, B)                                                                           | I IN               | DE = TE = 0 V, V CC = 0 V or 3.3 V, V IN = 12 V (see Figure 14)                    |       | 135       | µA     |
|                                                                                                |                    | DE = TE = 0 V, V CC = 0 V or 3.3 V, V IN = -7 V, (see Figure 14)                   | -105  |           | µA     |
| Input Resistance                                                                               | R IN               | RE = V CC or 0 V, DE = TE = 0 V, V IN = -7 V, -3 V, 3 V, 7 V, 12 V (see Figure 14) | 94    |           | kΩ     |
| Differential Input Threshold Voltage                                                           | V TH               | -7 V ≤ B ≤ +12 V                                                                   | -220  | +220      | mV     |

## SPECIFICATIONS

Table 3. Electrical Characteristics (Continued)

| Parameter                                         | Symbol   | Test Conditions/Comments                    | Min   | Max   | Unit   |
|---------------------------------------------------|----------|---------------------------------------------|-------|-------|--------|
| Input Hysteresis                                  | ΔV TH    | B = 0 V                                     | 20    | 40    | mV     |
| Output High Voltage                               | V OH     | I(RO) = -4 mA, A and B = 200 mV, V CC = 3 V | 2.4   |       | V      |
| Output Low Voltage                                | V OL     | I(RO) = 4 mA, A and B = -200 mV, V CC = 3 V |       | 0.4   | V      |
| Three-State (High Impedance) Output Current on RO | I OZR    | RE = V CC , 0 V ≤ RO ≤ V CC                 | -1    | +1    | µA     |
| Short-Circuit Current                             | I OSR    | 0 V ≤ RO ≤ V CC                             | -85   | +85   | mA     |
| LOGIC                                             |          |                                             |       |       |        |
| Input High Voltage                                | V IH     | V CC = 3.6 V                                | 2     |       | V      |
| Input Low Voltage                                 | V IL     | V CC = 3 V                                  |       | 0.8   | V      |
| Input Current                                     | I INL    |                                             | -10   | +10   | µA     |
| SUPPLIES                                          |          |                                             |       |       |        |
| Current in Shutdown Mode                          | I CCS    | DE = 0 V, RE = V CC                         |       | 65    | µA     |
| Current in Receive Mode                           | I CCR    | DE = 0 V, RE = 0 V                          |       | 850   | µA     |
| Current in Transmit Mode                          | I CCT    | No load, DE = V CC , RE = V CC              |       | 1100  | µA     |
| Current with Both Driver and Receiver Enabled     | I CCTR   | No load, DE = V CC , RE = 0 V               |       | 1200  | µA     |

## Table 4. Switching Characteristics

| Parameter                                                | Symbol                        | Test Conditions/Comments                                                                    | Min   | Typ   | Max   | Unit   |
|----------------------------------------------------------|-------------------------------|---------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| DRIVER                                                   |                               |                                                                                             |       |       |       |        |
| Input to Output                                          | t PLHD , t PHLD               | R DIFF = 54 Ω, C L = 100 pF (see Figure 15)                                                 |       |       | 55    | ns     |
| Input to Output Difference, &#124;t PLHD - t PHLD &#124; | Δt PD                         | R DIFF = 54 Ω, C L = 100 pF (see Figure 15)                                                 |       |       | 9     | ns     |
| Output Y to Output Z                                     | t SKEWD                       | R DIFF = 54 Ω, C L = 100 pF (see Figure 15)                                                 |       |       | 6     | ns     |
| Rise or Fall Time                                        | t RD , t FD                   | R DIFF = 54 Ω, C L = 100 pF (see Figure 15)                                                 |       |       | 13    | ns     |
| Enable or Disable Time                                   | t ZLD , t ZHD , t LZD , t HZD | R L = 500 Ω, C L = 50 pF, RE = 0 V (see Figure 16)                                          |       |       | 50    | ns     |
| Enable from Shutdown                                     | t ZHSD , t ZLSD               | R L = 500 Ω, C L = 50 pF, RE = V CC (see Figure 16)                                         |       |       | 6     | µs     |
| Time to Shutdown                                         | t SHDN                        | R L = 500 Ω, C L = 50 pF, (DE is low, RE = V CC ) or (DE = 0 V, RE is high) (see Figure 16) |       |       | 100   | ns     |
| RECEIVER                                                 |                               |                                                                                             |       |       |       |        |
| Receiver Input to Output                                 | t PLHR , t PHLR               | C L = 15 pF, V CM = 1.5 V, &#124;V AB &#124; = 1.5 V, t R and t F < 4 ns (see Figure 17)    |       |       | 80    | ns     |
| Differential Receiver Skew, &#124;t PLHR - t PHLR &#124; | t SKEWR                       | C L = 15 pF (see Figure 17)                                                                 |       |       | 9     | ns     |
| Output Rise or Fall Time                                 | t RR , t FR                   | C L = 15 pF (see Figure 17)                                                                 |       |       | 9.5   | ns     |
| Enable and Disable                                       | t ZLR , t ZHR , t LZR , t HZR | R L = 1 kΩ, C L = 15 pF, DE = V CC (see Figure 18)                                          |       |       | 50    | ns     |
| Enable from Shutdown                                     | t ZHSR , t ZLSR               | R L = 1 kΩ, C L = 15 pF, DE = 0 V (see Figure 18)                                           |       |       | 6     | µs     |

## ABSOLUTE MAXIMUM RATINGS

## Table 5. Absolute Maximum Ratings

| Parameter                                 | Rating                   |
|-------------------------------------------|--------------------------|
| Supply Voltage (V CC )                    | -0.3 V to +7 V           |
| Logic Input Voltages (RE, DE, and DI)     | -0.3 V to +7 V           |
| Interface Input and Output A, B, Y, and Z | (V CC - 15 V) to +15 V   |
| RO Voltage                                | -0.3 V to (V CC + 0.3 V) |
| Operating Temperature Range 1             | -55°C to +125°C          |
| Storage Temperature Range                 | -65°C to +150°C          |

1 This IC includes overtemperature protection that is intended to protect the device during momentary overload conditions. Overtemperature protection activates at a junction temperature exceeding 150°C. Continuous operation above the specified maximum operating junction temperature may result in device degradation or failure.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the junction to case thermal resistance.

θ JA is the natural convection junction to ambient thermal resistance.

## Table 6. Thermal Resistance

| Package Type   |   θ JC |   θ JA | Unit   |
|----------------|--------|--------|--------|
| 05-08-1610     |     37 |     88 | °C/W   |

## RADIATION FEATURES

## Table 7. Radiation Features

| Specification                                                                     |   Value | Unit         |
|-----------------------------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = 50 rad(Si)/sec to 300 rad(Si)/sec) 1    |    20   | Krad (Si)    |
| No Single Event Latch-Up (SEL) Occurs at Effective Linear Energy Transfer (LET) 2 |    57.5 | MeV-cm 2 /mg |

- 1 Guaranteed by device and process characterization. Email space@analog.com for data available up to 30 Krad (Si)
- 2 Limits are characterized at the initial qualification and after any design or process changes that may affect the SEL characteristics but are not production lot tested, unless specified by the customer through the purchase order or contract. For more information on SEE test results, email space@analog.com for further data beyond the published report on ADLT2852S product page.

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 8. Outgas Testing

| Specification (Tested per ASTM E595-15)   | Value   | Unit   |
|-------------------------------------------|---------|--------|
| TML                                       | 0.07    | %      |
| CVCM                                      | <0.01   | %      |
| Water Vapor Recovered                     | 0.03    | %      |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADLT2852S-CSL

Table 9. ADLT2852S-CSL, 14-Lead SOIC\_N

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±15,000                   | 3B      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 10. Pin Function Descriptions

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                                                                                       |
|-----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 8, 13  | NIC        | Not internal connection. Do not connect to this pin.                                                                                                                                                                                                              |
| 2         | RO         | Receiver Output. If the receiver output is enabled (RE low) and A > B by 200 mV, RO is high. If A < B by 200 mV, RO is low. If the receiver inputs are open, shorted, or terminated without a valid signal, RO is high.                                           |
| 3         | RE         | Receiver Enable. A low input enables the receiver. A high input forces the receiver output into a high impedance state.                                                                                                                                           |
| 4         | DE         | Driver Enable. A high input on DE enables the driver. A low input forces the driver outputs into a high impedance state. If RE is high with DE low, the device enters a low power shutdown state.                                                                 |
| 5         | DI         | Driver Input. If the driver outputs are enabled (DE high), a low input on DI forces the driver positive output low and negative output high. A high input on DI, with the driver outputs enabled, forces the driver positive output high and negative output low. |
| 6, 7      | GND        | Ground.                                                                                                                                                                                                                                                           |
| 9         | Y          | Noninverting Driver Output. High impedance when the driver is disabled or unpowered.                                                                                                                                                                              |
| 10        | Z          | Inverting Driver Output. High impedance when the driver is disabled or unpowered.                                                                                                                                                                                 |
| 11        | B          | Inverting Receiver Input. Impedance is >96 kΩ when in receive mode or unpowered.                                                                                                                                                                                  |
| 12        | A          | Noninverting Receiver Input. Impedance is >96 kΩ when in receive mode or unpowered.                                                                                                                                                                               |
| 14        | V CC       | Positive Supply. 3 V ≤ V CC ≤ 3.6 V. Bypass with 0.1 μF ceramic capacitor.                                                                                                                                                                                        |

## TRUTH TABLE

Table 11. Truth Table

|    | Logic Inputs   |            |      |        |        |
|----|----------------|------------|------|--------|--------|
| DE | RE             | Mode       | A, B | Y, Z   | RO     |
| 0  | 0              | Receive    | R IN | Hi-Z   | Driven |
| 0  | 1              | Shutdown   | R IN | Hi-Z   | Hi-Z   |
| 1  | 0              | Transceive | R IN | Driven | Driven |
| 1  | 1              | Transmit   | R IN | Driven | Hi-Z   |

## TYPICAL PERFORMANCE CHARACTERISTICS

TA = 25°C. V CC = 3.3 V, unless otherwise noted.

<!-- image -->

Figure 3. Receiver Skew vs. Temperature

<!-- image -->

Figure 4. Driver Skew vs. Temperature

<!-- image -->

Figure 5. Driver Propagation Delay vs. Temperature

<!-- image -->

Figure 6. Driver Output Short-Circuit Current vs. Temperature (V OUT Is Output Voltage)

Figure 7. Driver Output Low and High Voltage vs. Output Current

<!-- image -->

Figure 8. Driver Differential Output Voltage vs. Temperature

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 9. Receiver Output Voltage vs. Output Current (Source and Sink)

Figure 10. Receiver Propagation Delay vs. Temperature

<!-- image -->

Figure 11. Supply Current vs. Data Rate

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 12. Driver DC Characteristics

<!-- image -->

Figure 13. Driver Output Short-Circuit Current

Figure 14. Receiver Input Current and Input Resistance

<!-- image -->

Figure 15. Driver Timing Measurement

<!-- image -->

## TEST CIRCUITS

<!-- image -->

Figure 16. Driver Enable and Disable Timing Measurements

<!-- image -->

Figure 17. Receiver Propagation Delay Measurements

<!-- image -->

Figure 18. Receiver Enable and Disable Timing Measurements

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Figure 19. 14-Lead Standard Small Outline Package [SOIC\_N]

Narrow Body

(05-08-1610)

Dimensions shown in inches and (millimeters)

## ORDERING GUIDE

| Model           | Temperature Range   | Package Description     | Packing Quantity   | Package Option   |
|-----------------|---------------------|-------------------------|--------------------|------------------|
| ADLT2852MPS-CSL | -55°C to +125°C     | 14-Lead SOIC_N, 150 Mil | Tube, 55           | 05-08-1610       |

<!-- image -->

Updated: May 06, 2022