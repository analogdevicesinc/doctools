<!-- lastmod 2022-12-13 -->
<!-- image -->

## Silicon SPDT Switch, Reflective, 100 MHz to 44 GHz

## FEATURES

## FUNCTIONAL BLOCK DIAGRAM

- Ultrawideband frequency range: 100 MHz to 44 GHz
- Reflective design
- Low insertion loss with impedance match
- 1.0 dB typical to 18 GHz
- 1.4 dB typical to 40 GHz
- 1.7 dB typical to 44 GHz
- Low insertion loss without impedance match
- 0.9 dB typical to 18 GHz
- 1.7 dB typical to 40 GHz
- 2.1 dB typical to 44 GHz
- High input linearity
- P1dB: 27.5 dBm typical
- IP3: 50 dBm typical
- High RF input power handling
- Through path: 27 dBm
- Hot switching: 27 dBm
- No low frequency spurious
- RF settling time (50% V CTRL to 0.1 dB of final RF output): 17 ns
- 12-terminal, 2.25 mm × 2.25 mm LGA package

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications (AQEC standard)
- Military temperature range (-55°C to +105°C)
- Controlled manufacturing baseline
- 1 assembly/test site
- 1 fabrication site
- Product change notification
- Qualification data available on request

## APPLICATIONS

- Industrial scanners
- Test and instrumentation
- Cellular infrastructure: 5G mmWave
- Military radios, radars, electronic counter measures (ECMs)
- Microwave radios and very small aperture terminals (VSATs)

<!-- image -->

## GENERAL DESCRIPTION

The ADRF5024-EP is a reflective, SPDT switch manufactured in the silicon process.

This switch operates from 100 MHz to 44 GHz with &gt;1.7 dB of insertion loss and &gt;35 dB of isolation. The ADRF5024-EP has an RF input power handling capability of 27 dBm for both the through path and hot switching.

The ADRF5024-EP draws a low current of 14 µA on the positive supply of +3.3 V and 120 µA on negative supply of -3.3 V. The device employs complementary metal-oxide semiconductor (CMOS)-/low voltage transistor to transistor logic (LVTTL)-compatible controls.

The ADRF5024-EP RF ports are designed to match a characteristic impedance of 50 Ω. For ultrawideband products, impedance matching on the RF transmission lines can further optimize high frequency insertion loss and return loss characteristics. Refer to the Electrical Specifications section, the Typical Performance Characteristics section, and the ADRF5024 data sheet for more details.

The ADRF5024-EP comes in a 2.25 mm × 2.25 mm, 12-terminal, RoHS-compliant, land grid array (LGA) package and can operate between -55°C to +105°C.

Additional application and technical information can be found in the ADRF5024 data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1 Enhanced Product Features..................................1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3   | Electrostatic Discharge (ESD) Ratings...............5 ESD Ratings for ADRF5024-EP.........................5 ESD Caution.......................................................5 Pin Configuration and Function Descriptions........ 6 Interface Schematics..........................................6 Typical Performance Characteristics.....................7   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Electrical Specifications......................................3                                                                                                                                                                                                                                                                                                                                                                 | Insertion Loss and Return Loss..........................7                                                                                                                                                                                                                                                                                                         |
| Absolute Maximum Ratings...................................5                                                                                                                                                                                                                                                                                                                                                                     | Outline Dimensions............................................... 8                                                                                                                                                                                                                                                                                               |
| Thermal Resistance........................................... 5                                                                                                                                                                                                                                                                                                                                                                  | Ordering Guide...................................................8                                                                                                                                                                                                                                                                                                |
| Power Derating Curve........................................5                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                   |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                   |
| 11/2022-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                   |
| Changes to RF Input Power Parameter, Table Changes to RF Input Power Parameter, Table 2.............................................................................................                                                                                                                                                                                                                                             | 1............................................................................................. 3 5                                                                                                                                                                                                                                                                |

## 10/2020-Revision 0: Initial Version

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

VDD = 3.3 V, VSS = -3.3 V, digital control voltage (V CTRL ) = 0 V or VDD, and T CASE = 25°C for a 50 Ω system, unless otherwise noted.

Table 1.

| Parameter                                 | Symbol          | Test Conditions/Comments                                     | Min   | Typ   | Max    | Unit   |
|-------------------------------------------|-----------------|--------------------------------------------------------------|-------|-------|--------|--------|
| FREQUENCY RANGE                           | f               |                                                              | 100   |       | 44,000 | MHz    |
| INSERTION LOSS                            |                 |                                                              |       |       |        |        |
| Between RFC and RF1/RF2 (On)              |                 |                                                              |       |       |        |        |
| With Impedance Match                      |                 | See Figure 6 100 MHz to 18 GHz                               |       | 1.0   |        | dB     |
|                                           |                 | 18 GHz to 26 GHz                                             |       | 1.4   |        | dB     |
|                                           |                 | 26 GHz to 35 GHz                                             |       | 1.4   |        | dB     |
|                                           |                 | 35 GHz to 40 GHz                                             |       | 1.4   |        | dB     |
|                                           |                 | 40 GHz to 44 GHz                                             |       | 1.7   |        | dB     |
| Without Impedance Match                   |                 | See Figure 7                                                 |       |       |        |        |
|                                           |                 | 100 MHz to 18 GHz                                            |       | 0.9   |        | dB     |
|                                           |                 | 18 GHz to 26 GHz                                             |       | 1.1   |        | dB     |
|                                           |                 | 26 GHz to 35 GHz                                             |       | 1.5   |        | dB     |
|                                           |                 | 35 GHz to 40 GHz                                             |       | 1.7   |        | dB     |
|                                           |                 | 40 GHz to 44 GHz                                             |       | 2.1   |        | dB     |
| RETURN LOSS                               |                 |                                                              |       |       |        |        |
| RFC and RF1/RF2 (On) With Impedance Match |                 | See the ADRF5024 data sheet for the figure 100 MHz to 18 GHz |       | 17    |        | dB     |
|                                           |                 | 18 GHz to 26 GHz                                             |       | 13    |        | dB     |
|                                           |                 | 26 GHz to 35 GHz                                             |       | 13    |        | dB     |
|                                           |                 | 35 GHz to 40 GHz                                             |       | 18    |        | dB     |
|                                           |                 | 40 GHz to 44 GHz                                             |       | 12    |        | dB     |
| Without Impedance Match                   |                 | See the ADRF5024 data sheet for the figure                   |       |       |        |        |
|                                           |                 | 100 MHz to 18 GHz                                            |       | 21    |        | dB     |
|                                           |                 | 18 GHz to 26 GHz                                             |       | 17    |        | dB     |
|                                           |                 | 26 GHz to 35 GHz                                             |       | 13    |        | dB     |
|                                           |                 | 35 GHz to 40 GHz                                             |       | 12    |        | dB     |
|                                           |                 | 40 GHz to 44 GHz                                             |       | 10    |        | dB     |
| ISOLATION                                 |                 |                                                              |       |       |        |        |
| Between RFC and RF1/RF2                   |                 | 100 MHz to 18 GHz                                            |       | 42    |        | dB     |
|                                           |                 | 18 GHz to 26 GHz                                             |       | 41    |        | dB     |
|                                           |                 | 26 GHz to 35 GHz                                             |       | 38    |        | dB     |
|                                           |                 | 35 GHz to 40 GHz                                             |       | 36    |        | dB     |
|                                           |                 | 40 GHz to 44 GHz                                             |       | 35    |        | dB     |
| Between RF1 and RF2                       |                 | 100 MHz to 18 GHz                                            |       | 47    |        | dB     |
|                                           |                 | 18 GHz to 26 GHz                                             |       | 45    |        | dB     |
|                                           |                 | 26 GHz to 35 GHz                                             |       | 44    |        | dB     |
|                                           |                 | 35 GHz to 40 GHz                                             |       | 42    |        | dB     |
|                                           |                 | 40 GHz to 44 GHz                                             |       | 38    |        | dB     |
| SWITCHING CHARACTERISTICS                 |                 |                                                              |       |       |        |        |
| Rise and Fall Time                        | t RISE , t FALL | 10% to 90% of RF output                                      |       | 2     |        | ns     |
| On and Off Time                           | t ON , t OFF    | 50% V CTRL to 90% of RF output                               |       | 10    |        | ns     |
| RF Settling Time                          |                 |                                                              |       |       |        |        |
| 0.1 dB                                    |                 | 50% V CTRL to 0.1 dB of final RF output                      |       | 17    |        | ns     |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                       | Symbol        | Test Conditions/Comments                            | Min   | Typ   | Max   | Unit   |
|---------------------------------|---------------|-----------------------------------------------------|-------|-------|-------|--------|
| 0.05 dB                         |               | 50% V CTRL to 0.05 dB of final RF output            |       | 22    |       | ns     |
| INPUT LINEARITY 1               |               | 200 MHz to 40 GHz                                   |       |       |       |        |
| 1 dB Power Compression          | P1dB          |                                                     |       | 27.5  |       | dBm    |
| Third-Order Intercept           | IP3           | Two tone input power = 12 dBm each tone, Δf = 1 MHz |       | 50    |       | dBm    |
| SUPPLY CURRENT                  |               | VDD and VSS pins                                    |       |       |       |        |
| Positive Supply Current         | I DD          |                                                     |       | 14    |       | µA     |
| Negative Supply Current         | I SS          |                                                     |       | 120   |       | µA     |
| DIGITAL CONTROL INPUTS          |               | CTRL pin                                            |       |       |       |        |
| Voltage                         |               |                                                     |       |       |       |        |
| Low                             | V INL         |                                                     | 0     |       | 0.8   | V      |
| High                            | V INH         |                                                     | 1.2   |       | 3.3   | V      |
| Current                         |               |                                                     |       |       |       |        |
| Low and High                    | I INL , I INH |                                                     |       | <1    |       | µA     |
| RECOMMENDED OPERATING CONDITONS |               |                                                     |       |       |       |        |
| Supply Voltage                  |               |                                                     |       |       |       |        |
| Positive                        | V DD          |                                                     | 3.15  |       | 3.45  | V      |
| Negative                        | V SS          |                                                     | -3.45 |       | -3.15 | V      |
| Digital Control Voltage         | V CTRL        |                                                     | 0     |       | V DD  | V      |
| RF Input Power 2                | P IN          | Frequency = 200 MHz to 40 GHz, T CASE = 85°C 3      |       |       |       |        |
| Input at RFC                    |               |                                                     |       |       |       |        |
| Through Path                    |               | RF signal is applied to RFC                         |       |       | 27    | dBm    |
| Hot Switching                   |               | RF signal is present at RFC while                   |       |       | 27    | dBm    |
|                                 |               | switching between RF1 and RF2                       |       |       |       |        |
| Input at RFx                    |               |                                                     |       |       |       |        |
| Through Path                    |               | RF signal is applied through connected RFx          |       | 26    |       | dBm    |
| Hot Switching                   |               | RF signal is present at RFx while                   |       |       | 26    | dBm    |
|                                 |               | switching between RF1 and RF2                       |       |       |       |        |
| Case Temperature                | T CASE        |                                                     | -55   |       | +105  | °C     |

## ABSOLUTE MAXIMUM RATINGS

For the recommended operating conditions, see Table 1.

## Table 2.

| Parameter                                                  | Rating                |
|------------------------------------------------------------|-----------------------|
| Positive Supply Voltage                                    | -0.3 V to +3.6 V      |
| Negative Supply Voltage                                    | -3.6 V to +0.3 V      |
| Digital Control Input Voltage                              |                       |
| Voltage                                                    | -0.3 V to VDD + 0.3 V |
| Current                                                    | 3 mA                  |
| RF Input Power 1 (f = 200 MHz to 40 GHz, T CASE = 85°C 2 ) |                       |
| Input at RFC                                               |                       |
| Through Path                                               | 27.5 dBm              |
| Hot Switching                                              | 27.5 dBm              |
| Input at RFx                                               |                       |
| Through Path                                               | 26.5 dBm              |
| Hot Switching                                              | 26.5 dBm              |
| RF Input Power Under Unbiased Condition 1 (VDD, VSS = 0 V) | 21 dBm                |
| Temperature                                                |                       |
| Junction, T J                                              | 135°C                 |
| Storage Range                                              | -65°C to +150°C       |
| Reflow                                                     | 260°C                 |

- 1 For power derating vs. frequency, see the ADRF5024 data sheet. This power derating is applicable for the insertion loss path and the hot switching power specifications.
- 2 For 105°C operation, the power handling degrades from the TC = 85°C specification by 3 dB.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Only one absolute maximum rating can be applied at any one time.

## THERMAL RESISTANCE

Thermal performance is directly linked to the printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the junction to case bottom (channel to package bottom) thermal resistance.

Table 3. Thermal Resistance

| Package Type          |   θ JC | Unit   |
|-----------------------|--------|--------|
| CC-12-3, Through Path |    352 | °C/W   |

## POWER DERATING CURVE

Figure 2. Maximum Power Dissipation vs. Case Temperature

<!-- image -->

For more information on power derating curves, see the ADRF5024 data sheet.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD RATINGS FOR ADRF5024-EP

## Table 4. ADRF5024-EP, 12-Terminal LGA

| ESD Model              | Withstand Threshold (V)   | Class   |
|------------------------|---------------------------|---------|
| HBM                    |                           |         |
| RFC, RF1, and RF2 Pins | 500                       | 1B      |
| Digital Pins           | 2000                      | 1B      |
| CDM                    | 1250                      | IV      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration (Top View)

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.            | Mnemonic   | Description                                                                                                                                                                                         |
|--------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 4, 6, 10, 12 | GND        | Ground. The GND pins must be connected to the RF and dc ground of the PCB.                                                                                                                          |
| 2                  | RFC        | RF Common Port. RFC is dc-coupled to 0 V and ac matched to 50 Ω. When the RF line potential is equal to 0 V dc, a dc blocking capacitor is not necessary. See Figure 4 for the interface schematic. |
| 5                  | RF1        | RF Port 1. RF1 is dc-coupled to 0 V and ac matched to 50 Ω. When the RF line potential is equal to 0 V dc, a dc blocking capacitor is not necessary. See Figure 4 for the interface schematic.      |
| 7                  | VDD        | Positive Supply Voltage. See Figure 5 for the interface schematic.                                                                                                                                  |
| 8                  | CTRL       | Control Input Voltage. See Figure 5 for the interface schematic.                                                                                                                                    |
| 9                  | VSS        | Negative Supply Voltage.                                                                                                                                                                            |
| 11                 | RF2        | RF Port 2. RF2 is dc-coupled to 0 V and ac matched to 50 Ω. When the RF line potential is equal to 0 V dc, a dc blocking capacitor is not necessary. See Figure 4 for the interface schematic.      |
|                    | EPAD       | Exposed Pad. The exposed pad must be connected to the RF and dc ground of the PCB.                                                                                                                  |

## INTERFACE SCHEMATICS

Figure 4. RFx Pins Interface Schematic

<!-- image -->

Figure 5. CTRL Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## INSERTION LOSS AND RETURN LOSS

VDD = 3.3 V, VSS = -3.3 V, V CTRL = 0 V or VDD, and T CASE = 25°C for a 50 Ω system, unless otherwise noted.

Insertion loss and return loss are measured on the probe matrix board using ground-signal-ground (GSG) probes close to the RFx pins. See the ADRF5024 data sheet for details on the evaluation and probe matrix boards.

Figure 6. Insertion Loss vs. Frequency with Impedance Match

<!-- image -->

Figure 7. Insertion Loss vs. Frequency Without Impedance Match

<!-- image -->

## OUTLINE DIMENSIONS

4

3

0

5

0

0

-

K

G

P

<!-- image -->

0

Figure 8. 12-Terminal Land Grid Array [LGA] 2.25 mm × 2.25 mm Body and 0.75 mm Package Height (CC-12-3) Dimensions shown in millimeters

## ORDERING GUIDE

## Table 6.

| Model 1           | Temperature Range   | Package Description               | Package Option   | Marking Code   |
|-------------------|---------------------|-----------------------------------|------------------|----------------|
| ADRF5024SCCZ-EP   | -55°C to +105°C     | 12-Terminal Land Grid Array [LGA] | CC-12-3          | S4             |
| ADRF5024SCCZ-EPR7 | -55°C to +105°C     | 12-Terminal Land Grid Array [LGA] | CC-12-3          | S4             |

<!-- image -->