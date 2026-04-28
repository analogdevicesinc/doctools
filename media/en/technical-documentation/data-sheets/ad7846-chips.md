<!-- lastmod 2024-01-20 -->
<!-- image -->

## FEATURES

- 16-bit monotonicity over temperature
- Microprocessor compatible with read-back capability
- Unipolar or bipolar output
- Multiplying capability
- Low power dissipation: 100 mW typical

## APPLICATIONS

- Instrumentation
- Automatic test equipment
- Industrial automation
- Energy grid systems
- Aerospace

## GENERAL DESCRIPTION

The AD7846-CHIPS is a 16-bit digital-to-analog converter (DAC) constructed with the Analog Devices, Inc., LC 2 MOS process. The device has V REF+ and V REFreference inputs and an on-chip output amplifier that can be configured to give a unipolar output range (0 V to +5 V or 0 V to +10 V) or bipolar output ranges (±5 V or ±10 V).

The DAC uses a segmented architecture. The four MSBs in the DAC latch select one of the segments in a 16-resistor string. Both taps of the segment are buffered by amplifiers and fed to a 12-bit DAC, which provides a further 12 bits of resolution. This architecture ensures 16-bit monotonicity. Excellent integral linearity results from tight matching between the input offset voltages of the two buffer amplifiers.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## AD7846-CHIPS

## LC2MOS 16-Bit Voltage Output DAC

In addition to the excellent accuracy specifications, the AD7846CHIPS also offers a comprehensive microprocessor interface. There are 16 data input and output pins, plus control lines (CS, R/W, LDAC, and CLR). R/W and CS allow writing to and reading from the input and output latch, and this read-back function is useful in ATE applications. LDAC allows simultaneous updating of DACs in a multiDAC system, and the CLR line resets the contents of the DAC latch to 00 … 000 or 10 … 000 depending on the state of R/W, which means that the DAC output can be reset to 0 V in both unipolar and bipolar configurations.

Additional application and technical information can be found in the AD7846 data sheet.

## PRODUCT HIGHLIGHTS

1. 16-Bit Monotonicity. The guaranteed 16-bit monotonicity over temperature makes the AD7846-CHIPS ideal for closed-loop applications.
2. Readback. The ability to read back the DAC register contents minimizes software routines when the AD7846-CHIPS is used in automatic test equipment systems.
3. Power Dissipation. A power dissipation of 100 mW makes the AD7846-CHIPS a low power, high accuracy DAC.

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 General Description...............................................1 Product Highlights................................................. 1 Functional Block Diagram......................................1 Specifications........................................................ 3   | Absolute Maximum Ratings...................................7 ESD Caution.......................................................7 Pin Configuration and Function Descriptions........ 8 Outline Dimensions............................................. 10 Die Specifications and Assembly Recommendations......................................... 10   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AC Performance Characteristics........................5                                                                                                                                                                                                                                                                                                                                                                                   | Ordering Guide.................................................11                                                                                                                                                                                                                                                                                       |
| Timing Characteristics........................................5                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                         |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                          | REVISION HISTORY                                                                                                                                                                                                                                                                                                                                        |
| 1/2024-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                                   | 1/2024-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                 |
| Updated Outline Dimensions.........................................................................................................................10                                                                                                                                                                                                                                                                                     | Updated Outline Dimensions.........................................................................................................................10                                                                                                                                                                                                   |
| Changes to Table 7........................................................................................................................................10                                                                                                                                                                                                                                                                              | Changes to Table 7........................................................................................................................................10                                                                                                                                                                                            |

11/2023-Revision 0: Initial Version

## SPECIFICATIONS

VDD  = +14.25 V to +15.75 V, V SS = -14.25 V to -15.75 V, and V CC = +4.75 V to +5.25 V. V OUT loaded with 2 kΩ, 1000 pF to 0 V, V REF+ = +5 V, and R IN connected to 0 V. All specifications T MIN to T MAX , unless otherwise noted.

Table 1. Specifications

| Parameter 1                            | Min      | Typ   | Max      | Unit       | Test Conditions/Comments              |
|----------------------------------------|----------|-------|----------|------------|---------------------------------------|
| RESOLUTION                             |          | 16    |          | Bits       |                                       |
| UNIPOLAR OUTPUT                        |          |       |          |            | V REF- = 0 V, V OUT = 0 V to +10 V    |
| Relative Accuracy at 25°C              |          | ±12   |          | LSB        | 1 LSB = 153 µV                        |
| T MIN to T MAX                         |          |       | ±16      | LSB        |                                       |
| Differential Nonlinearity Error        |          |       | ±1       | LSB        | All grades guaranteed monotonic       |
| Gain Error at 25°C                     |          | ±12   |          | LSB        | V OUT load = 10 MΩ                    |
| T MIN to T MAX                         |          |       | ±16      | LSB        |                                       |
| Offset Error at 25°C                   |          | ±12   |          | LSB        |                                       |
| T MIN to T MAX                         |          |       | ±16      | LSB        |                                       |
| Gain Temperature Coefficient 2         |          | ±1    |          | ppm FSR/°C |                                       |
| Offset Temperature Coefficient 2       |          | ±1    |          | ppm FSR/°C |                                       |
| BIPOLAR OUTPUT                         |          |       |          |            | V REF- = -5 V, V OUT = -10 V to +10 V |
| Relative Accuracy at 25°C              |          | ±6    |          | LSB        | 1 LSB = 305 µV                        |
| T MIN to T MAX                         |          |       | ±8       | LSB        |                                       |
| Differential Nonlinearity Error        |          |       | ±1       | LSB        | All grades guaranteed monotonic       |
| Gain Error at 25°C                     |          | ±6    |          | LSB        | V OUT load = 10 MΩ                    |
| T MIN to T MAX                         |          |       | ±16      | LSB        |                                       |
| Offset Error at 25°C                   |          | ±6    |          | LSB        | V OUT load = 10 MΩ                    |
| T MIN to T MAX                         |          |       | ±16      | LSB        |                                       |
| Bipolar Zero Error at 25°C             |          | ±6    |          | LSB        |                                       |
| T MIN to T MAX                         |          |       | ±12      | LSB        |                                       |
| Gain Temperature Coefficient 2         |          | ±1    |          | ppm FSR/°C |                                       |
| Offset Temperature Coefficient 2       |          | ±1    |          | ppm FSR/°C |                                       |
| Bipolar Zero Temperature Coefficient 2 |          | ±1    |          | ppm FSR/°C |                                       |
| REFERENCE INPUT                        |          |       |          |            |                                       |
| Input Resistance                       | 20       |       |          | kΩ         | Resistance from V REF+ to V REF-      |
|                                        |          |       | 40       | kΩ         | Typically 30 kΩ                       |
| V REF+ Range                           | V SS + 6 |       | V DD - 6 | V          |                                       |
| V REF- Range                           | V SS + 6 |       | V DD - 6 | V          |                                       |
| OUTPUT CHARACTERISTICS                 |          |       |          |            |                                       |
| Output Voltage Swing                   | V SS + 4 |       | V DD - 3 | V          |                                       |
| Resistive Load                         | 2        |       |          | kΩ         | To 0 V                                |
| Capacitive Load                        |          |       | 1000     | pF         | To 0 V                                |
| Output Resistance                      |          | 0.3   |          | Ω          |                                       |
| Short Circuit Current                  |          | ±25   |          | mA         | To 0 V or any power supply            |
| DIGITAL INPUTS                         |          |       |          |            |                                       |
| Input High Voltage (V IH )             | 2.4      |       |          | V          |                                       |
| Input Low Voltage (V IL )              |          |       | 0.8      | V          |                                       |
| Input Current (I IN )                  |          |       | ±10      | µA         |                                       |
| Input Capacitance (C IN ) 2            |          |       | 10       | pF         |                                       |
| DIGITAL OUTPUTS                        |          |       |          |            |                                       |
| Output Low Voltage (V OL )             |          |       | 0.4      | V          | Sink current (I SINK ) = 1.6 mA       |
| Output High Voltage (V OH )            | 4.0      |       |          | V          | Source current (I SOURCE ) = 400 µA   |
| Floating State Leakage Current         |          |       | ±10      | µA         | DB0 to DB15 = 0 V to V CC             |
| Floating State Output Capacitance 2    |          |       | 10       | pF         |                                       |

## SPECIFICATIONS

## Table 1. Specifications (Continued)

| Parameter 1                | Min   | Typ   | Max    | Unit   | Test Conditions/Comments   |
|----------------------------|-------|-------|--------|--------|----------------------------|
| POWER REQUIREMENTS 3       |       |       |        |        |                            |
| V DD                       | +11.4 |       | +15.75 | V      |                            |
| V SS                       | -11.4 |       | -15.75 | V      |                            |
| V CC                       | +4.75 |       | +5.25  | V      |                            |
| V DD Current (I DD )       |       |       | 5      | mA     | V OUT unloaded             |
| V SS Current (I SS )       |       |       | 5      | mA     | V OUT unloaded             |
| V CC Current (I CC )       |       |       | 1      | mA     |                            |
| Power Supply Sensitivity 4 |       |       | 1.5    | LSB/V  |                            |
| Power Dissipation          |       | 100   |        | mW     | V OUT unloaded             |

## SPECIFICATIONS

## AC PERFORMANCE CHARACTERISTICS

These characteristics are included for design guidance and are not subject to test. V REF+ = +5 V, V DD = +14.25 V to +15.75 V, V SS = -14.25 V to -15.75 V, V CC = +4.75 V to +5.25 V, and R IN connected to 0 V, unless otherwise noted. The minimum, typical, and maximum values are the limits at T MIN to T MAX .

Table 2. AC Performance Characteristics

| Parameter                                      | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                                                                 |
|------------------------------------------------|-------|-------|-------|--------|--------------------------------------------------------------------------------------------------------------------------|
| Output Settling Time 1                         |       |       | 6 9   | μs μs  | To 0.006% FSR, V OUT loaded, V REF- = 0 V, typically 3.5 μs To 0.003% FSR, V OUT loaded, V REF- = -5 V, typically 6.5 μs |
| Slew Rate Digital-to-Analog Glitch             |       | 7     |       | V/μs   |                                                                                                                          |
| Impulse                                        |       |       |       |        |                                                                                                                          |
|                                                |       | 70    |       | nV-sec | DAC alternately loaded with 10 …0000 and 01 …1111, V OUT unloaded                                                        |
| AC Feedthrough                                 |       | 0.5   |       | mV p-p | V REF- = 0 V, V REF+ = 1 V RMS, 10 kHz sine wave, DAC loaded with all 0s                                                 |
| Digital Feedthrough                            |       | 10    |       | nV-sec | DAC alternately loaded with all 1s and all 0s, CS high                                                                   |
| Output Noise Voltage Density, 1 kHz to 100 kHz |       | 50    |       | nV/√Hz | Measured at V OUT , DAC loaded with 0111011 …11, V REF+ = V REF- = 0 V                                                   |

## TIMING CHARACTERISTICS

VDD  = +14.25 V to +15.75 V, V SS = -14.25 V to -15.75 V, and V CC = +4.75 V to +5.25 V, unless otherwise noted. The minimum, typical, and maximum value limits are T MIN to T MAX .

Table 3. Timing Specifications

| Parameter 1   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments     |
|---------------|-------|-------|-------|--------|------------------------------|
| t 1           | 0     |       |       | ns     | R/W to CS setup time         |
| t 2           | 60    |       |       | ns     | CS pulse width (write cycle) |
| t 3           | 0     |       |       | ns     | R/W to CS hold time          |
| t 4           | 60    |       |       | ns     | Data setup time              |
| t 5           | 0     |       |       | ns     | Data hold time               |
| t 6 2         |       |       | 120   | ns     | Data access time             |
| t 7 3         | 10    |       |       | ns     | Bus relinquish time          |
|               |       |       | 60    | ns     |                              |
| t 8           | 0     |       |       | ns     | CLR setup time               |
| t 9           | 70    |       |       | ns     | CLR pulse width              |
| t 10          | 0     |       |       | ns     | CLR hold time                |
| t 11          | 70    |       |       | ns     | LDAC pulse width             |
| t 12          | 130   |       |       | ns     | CS pulse width (read cycle)  |

## SPECIFICATIONS

## Timing Diagrams

<!-- image -->

Figure 2. Timing Diagram

<!-- image -->

Figure 3. Load Circuit for Access Time (t 6 )-High Z to V OH

<!-- image -->

Figure 4. Load Circuits for Bus Relinquish Time (t 6 )-High Z to V OL

Figure 5. Load Circuit for Access Time (t 7 )-High Z to V OH

<!-- image -->

Figure 6. Load Circuits for Bus Relinquish Time (t 7 )-High Z to V OL

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

## Table 4. Absolute Maximum Ratings

| Parameter                      | Rating                                                    |
|--------------------------------|-----------------------------------------------------------|
| V DD to DGND                   | -0.4 V to +17 V                                           |
| V CC to DGND                   | -0.4 V, V DD + 0.4 V, or +7 V (whichever is lower)        |
| V SS to DGND                   | +0.4 V to -17 V                                           |
| V REF+ to DGND                 | V DD + 0.4 V, V SS - 0.4 V                                |
| V REF- to DGND                 | V DD + 0.4 V, V SS - 0.4 V                                |
| V OUT to DGND 1                | V DD + 0.4 V, V SS - 0.4 V, or ±10 V (whichever is lower) |
| R IN to DGND                   | V DD + 0.4 V, V SS - 0.4 V                                |
| Digital Input Voltage to DGND  | -0.4 V to V CC + 0.4 V                                    |
| Digital Output Voltage to DGND | -0.4 V to V CC + 0.4 V                                    |
| Power Dissipation              |                                                           |
| To 75°C                        | 1000mW                                                    |
| Derates Above 75°C             | 10 mW/°C                                                  |
| Temperature                    |                                                           |
| Operating Range                | -40°C to +105°C                                           |
| Storage Range                  | -65°C to +150°C                                           |

1 VOUT can be shorted to DGND, V DD , V SS , or V CC provided that the power dissipation of the die is not exceeded.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 7. Pad Configuration

<!-- image -->

Table 5. Pad Function Descriptions

| Pad No.   | Mnemonic   | Pad Type   | X-Axis      | Y-Axis      | Description                                                                                               |
|-----------|------------|------------|-------------|-------------|-----------------------------------------------------------------------------------------------------------|
| 1         | DB2        | Single     | +158        | +1759       | Data Input and Output.                                                                                    |
| 2         | DB1        | Single     | -240        | +1759       | Data Input and Output.                                                                                    |
| 3         | DB0        | Single     | -735        | +1825       | Data Input and Output, LSB.                                                                               |
| 4A 4B     | V DD       | Double     | -1335 -1515 | +1812 +1812 | Positive Supply for the Analog Circuitry, 15 V Nominal.                                                   |
| 5         | V OUT      | Single     | -1675       | +1631       | DAC Output.                                                                                               |
| 6         | R IN       | Single     | -1675       | +901        | Input to Summing Resistor of the DAC Output Amplifier. R IN is used to select the output voltage ranges.  |
| 7A 7B     | V REF+     | Double     | -1617 -1617 | +312 +132   | VREF+ Input. The DAC is specified for VREF+ = 5 V.                                                        |
| 8A 8B     | V REF-     | Double     | -1617 -1617 | -56 -236    | VREF- Input. For unipolar operation, connect VREF- to 0 V, and for bipolar operation, connect it to -5 V. |
| 9         | V SS       | Single     | -1676       | -738        | Negative Supply for the Analog Circuitry, -15 V Nominal.                                                  |
| 10        | DB15       | Single     | -1662       | -1223       | Data Input and Output, MSB.                                                                               |
| 11        | DB14       | Single     | -1662       | -1624       | Data Input and Output.                                                                                    |
| 12        | DB13       | Single     | -1223       | -1756       | Data Input and Output.                                                                                    |
| 13        | DB12       | Single     | -821        | -1756       | Data Input and Output.                                                                                    |
| 14        | DB11       | Single     | -124        | -1756       | Data Input and Output.                                                                                    |
| 15        | DB10       | Single     | +270        | -1756       | Data Input and Output.                                                                                    |
| 16        | DB9        | Single     | +744        | -1758       | Data Input and Output.                                                                                    |
| 17        | DB8        | Single     | +1118       | -1758       | Data Input and Output.                                                                                    |
| 18        | DB7        | Single     | +1541       | -1767       | Data Input and Output.                                                                                    |
| 19        | DB6        | Single     | +1660       | -1347       | Data Input and Output.                                                                                    |
| 20        | DGND       | Single     | +1613       | -883        | Ground for the Digital Circuitry.                                                                         |
| 21        | V CC       | Single     | +1645       | -333        | Positive Supply for the Digital Circuitry, 5 V Nominal.                                                   |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 5. Pad Function Descriptions (Continued)

| Pad No.   | Mnemonic   | Pad Type   |   X-Axis |   Y-Axis | Description                                                                                     |
|-----------|------------|------------|----------|----------|-------------------------------------------------------------------------------------------------|
| 22        | R/W        | Single     |   1674   |    283   | R/W Input. This pin can be used to load data to the DAC or to read back the DAC latch contents. |
| 23        | CS         | Single     |   1676   |    643   | Chip Select Input. This pin selects the device.                                                 |
| 24        | CLR        | Single     |   1676   |   1329   | Clear Input. The DAC can be cleared to 000…000 or 100…000.                                      |
| 25        | LDAC       | Single     |   1654   |   1720   | Asynchronous Load Input to the DAC.                                                             |
| 26        | DB5        | Single     |   1256   |   1747   | Data Input and Output.                                                                          |
| 27        | DB4        | Single     |    907   |   1747   | Data Input and Output.                                                                          |
| 28        | DB3        | Single     |    573   |   1747   | Data Input and Output.                                                                          |
| N/A       | NC         | Single     |    675   |   1409   | Probe pad. Do not connect to this pad.                                                          |
| N/A       | NC         | Single     |   -725   |   -908   | Probe pad. Do not connect to this pad.                                                          |
| N/A       | NC         | Single     |  -1048.5 |   1809.4 | Probe pad. Do not connect to this pad.                                                          |
| N/A       | NC         | Single     |  -1174.5 |   1809.4 | Probe pad. Do not connect to this pad.                                                          |
| N/A       | NC         | Single     |  -1669   |   -464.9 | Probe pad. Do not connect to this pad.                                                          |
| N/A       | NC         | Single     |   -515   |  -1803.9 | Probe pad. Do not connect to this pad.                                                          |
| N/A       | NC         | Single     |   1675   |    846.5 | Probe pad. Do not connect to this pad.                                                          |
| N/A       | NC         | Single     |   1675.4 |   1021   | Probe pad. Do not connect to this pad.                                                          |

## Table 6. Output Voltage Ranges

| Output Range (V)   |   V REF+ (V) | V REF- (V)   | R IN (V)   |
|--------------------|--------------|--------------|------------|
| 0 to +5            |           +5 | 0            | V OUT      |
| 0 to +10           |           +5 | 0            | 0          |
| +5 to -5           |           +5 | -5 V         | V OUT      |
| +5 to -5           |           +5 | 0            | +5         |
| +10 to -10         |           +5 | -5           | 0          |

## OUTLINE DIMENSIONS

Figure 8. 28-Pad Bare Die [CHIP]

<!-- image -->

(C-28-3) Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

Table 7. Die Specifications

| Parameter              | Value                                          | Unit         |
|------------------------|------------------------------------------------|--------------|
| Die Size               | 3820 × 4070                                    | μm (maximum) |
| Thickness              | 300                                            | μm (typical) |
| Bond Pad               | 92 × 92                                        | μm (typical) |
| Minimum Bond Pad Pitch | 180                                            | μm           |
| Bond Pad Composition   | Aluminum (Al)/1.0 Silicon (Si)/0.5 Copper (Cu) | %            |

Table 8. Assembly Recommendations

| Assembly Component   | Recommendation                |
|----------------------|-------------------------------|
| Die Attach           | Epoxy dispense                |
| Bonding Method       | Thermosonic gold ball bonding |
| Bonding Sequence     | Bond Pad 20 (DGND) first      |

12-12-2023-A

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1      | Temperature Range   | Package Description   | Package Option   |
|--------------|---------------------|-----------------------|------------------|
| AD7846-CHIPS | -40°C to +105°C     | CHIPS OR DIE          | C-28-3           |

<!-- image -->

Updated: January 18, 2024