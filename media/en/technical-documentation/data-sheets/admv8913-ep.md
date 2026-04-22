<!-- lastmod 2024-11-04 -->
<!-- image -->

## FEATURES

- Digitally tunable, lower and upper 3 dB cutoff frequencies
- Optimal wideband rejection: 35 dB
- Single chip replacement for discrete filter banks
- Compact 6.00 mm × 3.00 mm × 0.89 mm LGA package

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications (AQEC standard)
- Military temperature range (such as -55°C to +105°C)
- Controlled manufacturing baseline
- One assembly/test site
- One fabrication site
- Enhanced product change notification
- Qualification data available on request

## APPLICATIONS

- Test and measurement equipment
- Military radar and electronic warfare and electronic countermeasures
- Satellite communications
- Industrial and medical equipment

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## X Band, Digitally Tunable, High-Pass Filter and Low-Pass Filter

## GENERAL DESCRIPTION

The ADMV8913-EP is a fully monolithic microwave integrated circuit (MMIC) that features a digitally selectable operating frequency. The device has an integrated high-pass filter (HPF) and an integrated low-pass filter (LPF) that allows a pass-band response within the X band frequency range.

The flexible architecture of the ADMV8913-EP allows for the 3 dB cutoff frequency (f 3dB ) of the high-pass and the low-pass filter to be controlled independently. The digital logic control on each filter is 4 bits wide (16 states) and controls the on-chip reactive elements to adjust the f 3dB . The typical insertion loss is 5.3 dB, and the wideband rejection is 35 dB, which is ideally suitable for minimizing system harmonics.

This tunable filter can be used as a smaller alternative to large switched filter banks and cavity tuned filters, and the ADMV8913EP provides a dynamically adjustable solution in advanced communications applications.

## TABLE OF CONTENTS

| Features................................................................                                                                                       | 1                                                                                                                                                              | SPI Configuration...............................................9                                                                                              |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features..................................1                                                                                                   | Mode                                                                                                                                                           | Selection...................................................9                                                                                                  |
| Applications........................................................... 1                                                                                      | Parallel Mode...................................................                                                                                               | 10                                                                                                                                                             |
| General Description...............................................1                                                                                            | SPI Write Mode................................................                                                                                                 | 10                                                                                                                                                             |
| Functional Block Diagram......................................1                                                                                                | Filter Settings...................................................                                                                                             | 10                                                                                                                                                             |
| Specifications........................................................ 3                                                                                       | SPI Fast Latch                                                                                                                                                 | Mode........................................10                                                                                                                 |
| Timing Specifications......................................... 4                                                                                               | SPI Streaming..................................................10                                                                                              |                                                                                                                                                                |
| Absolute Maximum Ratings...................................5                                                                                                   | Chip Reset........................................................11                                                                                           |                                                                                                                                                                |
| Electrostatic Discharge (ESD) Ratings...............5                                                                                                          | Applications Information......................................                                                                                                 | 12                                                                                                                                                             |
| ESD Caution.......................................................5                                                                                            | Printed Circuit Board (PCB) Design                                                                                                                             |                                                                                                                                                                |
| Pin Configuration and Function Descriptions........ 6 Typical Performance                                                                                      | Characteristics.....................7 Programming Flow                                                                                                         | Guidelines...................................................... 12 Chart.....................................13                                               |
| Theory of Operation...............................................9                                                                                            | Register Summary...............................................14                                                                                              |                                                                                                                                                                |
| Chip Architecture................................................9                                                                                             | Register                                                                                                                                                       | Details................................................... 18                                                                                                  |
| Tunable High-Pass Filter....................................9                                                                                                  | Outline Dimensions.............................................                                                                                                | 22                                                                                                                                                             |
| Tunable Low-Pass Filter.....................................9                                                                                                  | Ordering Guide.................................................22                                                                                              |                                                                                                                                                                |
| RF Connections..................................................9                                                                                              | Evaluation Boards............................................22                                                                                                |                                                                                                                                                                |
| REVISION HISTORY                                                                                                                                               |                                                                                                                                                                |                                                                                                                                                                |
| 7/2024-Rev. 0 to Rev. A                                                                                                                                        | 7/2024-Rev. 0 to Rev. A                                                                                                                                        | 7/2024-Rev. 0 to Rev. A                                                                                                                                        |
| Changed Master to Controller and Slave to Target (Throughout)....................................................................1                             | Changed Master to Controller and Slave to Target (Throughout)....................................................................1                             | Changed Master to Controller and Slave to Target (Throughout)....................................................................1                             |
| Changes to General Description Section.........................................................................................................1               | Changes to General Description Section.........................................................................................................1               | Changes to General Description Section.........................................................................................................1               |
| Change to Table 3............................................................................................................................................5 | Change to Table 3............................................................................................................................................5 | Change to Table 3............................................................................................................................................5 |
| Changes to Figure 7........................................................................................................................................ 7  | Changes to Figure 7........................................................................................................................................ 7  | Changes to Figure 7........................................................................................................................................ 7  |
| Changes to Ordering Guide...........................................................................................................................22         | Changes to Ordering Guide...........................................................................................................................22         | Changes to Ordering Guide...........................................................................................................................22         |

5/2021-Revision 0: Initial Version

## SPECIFICATIONS

TA = 25°C, unless otherwise noted.

Table 1.

| Parameter                                   | Min   | Typ         | Max   | Unit   | Test Conditions/Comments                                                                                                                                                                    |
|---------------------------------------------|-------|-------------|-------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FREQUENCY RANGE                             | 6.6   |             | 11.9  | GHz    | HPF State 0 and LPF State 15.                                                                                                                                                               |
| BANDWIDTH (3 dB)                            |       | 1 to 5      |       | GHz    | A smaller bandwidth is possible with additional insertion loss.                                                                                                                             |
| INSERTION LOSS                              |       | 5.3         |       | dB     |                                                                                                                                                                                             |
| RETURN LOSS                                 |       | 16.5        |       | dB     |                                                                                                                                                                                             |
| REJECTION FREQUENCY OFFSET                  |       |             |       |        | Measured at 35 dB rejection.                                                                                                                                                                |
| HPF                                         |       |             |       |        |                                                                                                                                                                                             |
| State 0                                     |       | -1.09       |       | ΔGHz   |                                                                                                                                                                                             |
| State 15                                    |       | -1.76       |       | ΔGHz   |                                                                                                                                                                                             |
| LPF                                         |       |             |       |        |                                                                                                                                                                                             |
| State 0                                     |       | 2           |       | ΔGHz   |                                                                                                                                                                                             |
| State 15                                    |       | 3.18        |       | ΔGHz   |                                                                                                                                                                                             |
| RE-ENTRY FREQUENCY                          |       | 40          |       | GHz    | ≤30 dB.                                                                                                                                                                                     |
| CUTOFF FREQUENCY (f 3dB )                   |       |             |       |        | 3 dB cutoff.                                                                                                                                                                                |
| HPF                                         |       |             |       |        |                                                                                                                                                                                             |
| State 0                                     |       | 6.4         |       | GHz    | LPF State 15.                                                                                                                                                                               |
| State 15                                    |       | 11.4        |       | GHz    | LPF State 15.                                                                                                                                                                               |
| LPF                                         |       |             |       |        |                                                                                                                                                                                             |
| State 0                                     |       | 7.2         |       | GHz    | HPF State 0.                                                                                                                                                                                |
| State 15                                    |       | 12.3        |       | GHz    | HPF State 0.                                                                                                                                                                                |
| RESOLUTION                                  |       |             |       |        | 4 bits per filter.                                                                                                                                                                          |
| HPF                                         |       | 0.33        |       | GHz    |                                                                                                                                                                                             |
| LPF                                         |       | 0.35        |       | GHz    |                                                                                                                                                                                             |
| DYNAMIC PERFORMANCE                         |       |             |       |        |                                                                                                                                                                                             |
| Input Power for 0.1 dB Compression (P0.1dB) |       | 21          |       | dBm    |                                                                                                                                                                                             |
| Input Third-Order Intercept (IP3)           |       | 44          |       | dBm    | Input power (P IN ) = 5 dBm per tone.                                                                                                                                                       |
| Group Delay Flatness                        |       | 0.4         |       | ns     | HPF State 0 and LPF State 15.                                                                                                                                                               |
| Amplitude Settling Time                     |       | 1           |       | µs     | To within ≤1 dB of static insertion loss.                                                                                                                                                   |
| Phase Settling Time                         |       | 1           |       | µs     | To within ≤1° of static phase.                                                                                                                                                              |
| Temperature Variation                       |       |             |       |        | HPF State 5 and LPF State 14.                                                                                                                                                               |
| Amplitude                                   |       | -0.013      |       | dB/°C  | At 10 GHz.                                                                                                                                                                                  |
| Center Frequency                            |       | -70         |       | ppm/°C | 8 GHz to 12 GHz.                                                                                                                                                                            |
| RESIDUAL PHASE NOISE                        |       |             |       |        |                                                                                                                                                                                             |
| At 1 MHz Offset                             |       | -170        |       | dBc/Hz |                                                                                                                                                                                             |
| SUPPLY VOLTAGE                              |       |             |       |        |                                                                                                                                                                                             |
| VSS1                                        | -2.6  | -2.5        | -2.4  | V      |                                                                                                                                                                                             |
| VDD1                                        | 2.4   | 2.5         | 2.6   | V      | By default, the VDD1 voltage is generated by the on-chip low dropout (LDO) regulator. Do not apply an external voltage to                                                                   |
| VDD2                                        | 3.2   | 3.3         | 3.4   | V      |                                                                                                                                                                                             |
| SUPPLY CURRENT (STATIC)                     |       |             |       |        |                                                                                                                                                                                             |
| VSS1                                        |       | -2          |       | µA     |                                                                                                                                                                                             |
| VDD2                                        |       | 125         |       | µA     | LDO regulator enabled. The VDD1 supply current is included within the VDD2 supply current.                                                                                                  |
| SUPPLY CURRENT (DYNAMIC)                    |       |             |       |        |                                                                                                                                                                                             |
| VDD2                                        |       | f SCLK /3.6 |       | mA     | LDO regulator enabled. f SCLK is the SCLK toggle frequency in MHz. For example, the continuous serial peripheral interface (SPI) writing at 10 MHz yields 2.8 mA of dynamic supply current. |

## SPECIFICATIONS

## Table 1. (Continued)

| Parameter                                                | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|----------------------------------------------------------|-------|-------|-------|--------|----------------------------|
| LOGIC (RST, CS, SCLK, SDI, SDO, SFL, HPF_Bx, and LPF_Bx) |       |       |       |        |                            |
| Logic Low                                                | -0.3  | 0     | +0.8  | V      |                            |
| Logic High                                               | 1.2   | 3.3   | 3.6   | V      |                            |

## TIMING SPECIFICATIONS

Table 2.

| Parameter   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                            |
|-------------|-------|-------|-------|--------|-------------------------------------------------------------------------------------|
| t 1         | 10    |       |       | ns     | RST low time to perform reset                                                       |
|             | 10    |       |       | ns     | SCLK cycle time (write)                                                             |
| t 2         | 20    |       |       | ns     | SCLK cycle time (read)                                                              |
| t 3         | 2.5   |       |       | ns     | SCLK high time                                                                      |
| t 4         | 2.5   |       |       | ns     | SCLK low time                                                                       |
| t 5         | 5     |       |       | ns     | CS falling edge to SCLK rising edge setup time                                      |
| t 6         | 2     |       |       | ns     | SCLK rising edge to CS hold time                                                    |
| t 7         | 5     |       |       | ns     | Minimum CS high time for latching in data (for multiple SPI transactions)           |
| t 8         | 5     |       |       | ns     | CS rising edge to next SCLK rising edge ignore                                      |
| t 9         | 5     |       |       | ns     | SDI data setup time                                                                 |
| t 10        | 2     |       |       | ns     | SDI data hold time                                                                  |
| t 11        | 10    |       |       | ns     | SFL falling edge (exiting SFL mode) to CS falling edge time (start SPI transaction) |
| t 12        | 10    |       |       | ns     | CS rising edge (end SPI transaction) to SFL rising edge time (entering SFL mode)    |
| t 13        | 10    |       |       | ns     | SFL rising edge to CS falling edge time                                             |
| t 14        | 10    |       |       | ns     | CS cycle time (SFL mode)                                                            |
| t 15        | 2.5   |       |       | ns     | CS high time (SFL mode)                                                             |
| t 16        | 2.5   |       |       | ns     | CS low time (SFL mode)                                                              |
| t 17        |       | 6     |       | ns     | SCLK falling edge to SDO valid (load capacitance (C L ) = 10 pF)                    |
| t 18        |       | 5     |       | ns     | SDO rise and fall time (C L = 10 pF)                                                |
| t 19        |       | 4     |       | ns     | CS rising edge to SDO tristate (C L = 10 pF)                                        |

## Timing Diagram

Figure 2. Timing Diagram

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 3.

| Parameter                                                        | Rating                 |
|------------------------------------------------------------------|------------------------|
| Supply                                                           | Supply                 |
| VDD1                                                             | -0.3 V to +2.8 V       |
| VDD2                                                             | -0.3 V to +3.6 V       |
| VSS1                                                             | -2.75 V to +0.3 V      |
| Digital Control Inputs                                           | Digital Control Inputs |
| Voltage                                                          | -0.3 V to VDD2 + 0.3 V |
| Current                                                          | 2 mA                   |
| RF Input Power 1                                                 | 24 dBm                 |
| Temperature                                                      | Temperature            |
| Operating Range                                                  | -55°C to +105°C        |
| Storage Range                                                    | -65°C to +150°C        |
| Junction to Maintain 1 Million Hours Mean Time to Failure (MTTF) | 135°C                  |
| Nominal Junction (T PADDDLE = 85°C)                              | 90°C                   |
| Moisture Sensitivity Level (MSL) Rating                          | MSL3                   |

- 1 Maximum RF input power valid for frequencies higher than 1 GHz. For incident signals less than this frequency, contact Analog Devices, Inc., to discuss the use case scenario.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/ JEDEC JS-002.

## ESD Ratings for ADMV8913-EP

Table 4. ADMV8913-EP, 30-Terminal LGA

| ESD Model   | Withstand Threshold (V)   | ESD Test Specification                    | Class   |
|-------------|---------------------------|-------------------------------------------|---------|
| HBM         | 2500                      | ANSI/ESDA/JEDEC JS-001-2010               | 2       |
| FICDM       | 750 750                   | JEDEC JESD22-C101E ANSI/ESDA/JEDEC JS-002 | III C2b |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.                        | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                             |
|--------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 4, 5, 13, 16, 17, 19, 20 | GND        | Ground. Connect the GND pins to the RF and dc ground.                                                                                                                                                                                                                                                                                   |
| 3                              | RF1        | RF Pin 1. RF1 is dc-coupled and matched to 50 Ω. Do not apply an external voltage to RF1.                                                                                                                                                                                                                                               |
| 6                              | RST        | Chip Reset. 3.3 V logic. Active low. The RST pin is internally pulled high with a 260 kΩ resistor.                                                                                                                                                                                                                                      |
| 7                              | SCLK       | SPI Clock. 3.3 V logic. The SCLK pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                   |
| 8                              | CS         | SPI Chip Select. 3.3 V logic. Active low. The CS pin is internally pulled low with a 260 kΩ resistor. In parallel mode, the CS pin can be toggled high to latch in logic data synchronously or held high for asynchronous logic update.                                                                                                 |
| 9                              | SDI        | SPI Data Input. 3.3 V logic. The SDI pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                               |
| 10                             | SDO        | SPI Data Output. 3.3 V logic. The SDO pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                              |
| 11                             | SFL        | SPI Fast Latch Enable. 3.3 V logic. Set SFL high to enable fast latching of filter states on each rising edge of CS. While SFL is in this mode, the SCLK, SDO, and SDI pins are not active. The SFL pin is internally pulled low with a 260 kΩ resistor.                                                                                |
| 12                             | VDD1       | 2.5 V Power Supply Pin. Place 47 µF, 0.1 µF, and 100 pF decoupling capacitors close to VDD1. By default, the 2.5 V voltage is generated by an on-chip LDO regulator. To provide voltage to VDD1 ground the LDO_EN pin to disable the on-chip LDO regulator. Do not apply an external voltage to VDD1 when the LDO regulator is enabled. |
| 14                             | VDD2       | 3.3 V Power Supply Pin. Place 0.1 µF and 100 pF decoupling capacitors close to VDD2.                                                                                                                                                                                                                                                    |
| 15                             | VSS1       | -2.5 V Power Supply Pin. Place 0.1 µF and 100 pF decoupling capacitors close to VSS1.                                                                                                                                                                                                                                                   |
| 18                             | RF2        | RF Pin 2. RF2 is dc-coupled and matched to 50 Ω. Do not apply an external voltage to RF2.                                                                                                                                                                                                                                               |
| 21                             | LDO_EN     | LDO Regulator Enable Input. 3.3 V logic. The LDO_EN pin is internally pulled high with a 260 kΩ resistor. Ground LDO_EN to disable the on-chip LDO regulator. Leave LDO_EN floating for logic high to enable the on-chip LDO regulator (recommended configuration).                                                                     |
| 22                             | LPF_B0     | LPF Bit 0. 3.3 V logic. The LPF_B0 pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                 |
| 23                             | LPF_B1     | LPF Bit 1. 3.3 V logic. The LPF_B1 pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                 |
| 24                             | LPF_B2     | LPF Bit 2. 3.3 V logic. The LPF_B2 pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                 |
| 25                             | LPF_B3     | LPF Bit 3. 3.3 V logic. The LPF_B3 pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                 |
| 26                             | HPF_B0     | HPF Bit 0. 3.3 V logic. The HPF_B0 pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                 |
| 27                             | HPF_B1     | HPF Bit 1. 3.3 V logic. The HPF_B1 pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                 |
| 28                             | HPF_B2     | HPF Bit 2. 3.3 V logic. The HPF_B2 pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                 |
| 29                             | HPF_B3     | HPF Bit 3. 3.3 V logic. The HPF_B3 pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                                                                                                 |
| 30                             | PS         | Parallel/Serial Select Input. 3.3 V logic. The PS pin is internally pulled high with a 260 kΩ resistor. A logic low level selects the parallel logic interface. A logic high level selects the SPI.                                                                                                                                     |
|                                | EPAD       | Exposed Pad. The exposed pad must be connected to the RF and dc ground.                                                                                                                                                                                                                                                                 |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. Insertion Loss vs. RF Frequency for HPF State = 0 and LPF State = Swept

<!-- image -->

Figure 5. 3 dB Cutoff Frequency vs. LPF State with HPF State = 0 for Various Temperatures

<!-- image -->

Figure 6. Insertion Loss vs. LPF State with HPF State = 0 for Various Temperatures

<!-- image -->

Figure 7. Insertion Loss vs. RF Frequency for LPF State = 15 and HPF State = Swept

Figure 8. 3 dB Cutoff Frequency vs. HPF State with LPF State = 15 for Various Temperatures

<!-- image -->

Figure 9. Insertion Loss vs. HPF State with LPF State = 15 for Various Temperatures

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Insertion Loss and Return Loss (Input and Output) vs. RF Frequency, Maximum Bandwidth, HPF State = 0, and LPF State = 15

<!-- image -->

Figure 11. Insertion Loss and Group Delay vs. RF Frequency, Maximum Bandwidth, HPF State = 0, and LPF State = 15

<!-- image -->

Figure 12. Input IP3 vs. RF Frequency for Various Temperatures, HPF State = 0, and LPF State = 15

<!-- image -->

Figure 13. Insertion Loss vs. RF Frequency, Maximum Bandwidth, HPF State = 0, and LPF State = 15 for Various Temperatures

Figure 14. Residual Phase Noise vs. Offset Frequency, HPF State = 0 and LPF State = 15

<!-- image -->

Figure 15. Input P0.1dB vs. RF Frequency, HPF State = 0 and LPF State = 15

<!-- image -->

## THEORY OF OPERATION

## CHIP ARCHITECTURE

The ADMV8913-EP is a combination tunable HPF and tunable LPF that can achieve pass-band responses in the X band frequency range. Figure 1 is a conceptual block diagram of the ADMV8913EP.

## TUNABLE HIGH-PASS FILTER

Figure 16 shows a simplified schematic of the HPF, which is a Chebyshev type filter. The f 3dB can be adjusted by varying Capacitor C1 to Capacitor C4. These tunable capacitors are constructed with 4-bit digital capacitor arrays, providing 16 distinct values. The step size of these tunable capacitors is adjusted so that each digital binary code increment creates approximately the same increment in the f 3dB . Note that the RFC shown in Figure 16 is the internal connection of the HPF and LPF.

Figure 16. HPF Simplified Schematic

<!-- image -->

## TUNABLE LOW-PASS FILTER

Figure 17 shows a simplified schematic of the LPF, which is a Chebyshev type filter. The f 3dB can be adjusted by varying Capacitor C1 to Capacitor C4. These tunable capacitors are constructed with 4-bit digital capacitor arrays, providing 16 distinct values. The step size of these tunable capacitors is adjusted so that each digital binary code increment creates approximately the same increment in the f 3dB . Note that the RFC shown in Figure 17 is the internal connection of the HPF and LPF.

Figure 17. LPF Simplified Schematic

<!-- image -->

## RF CONNECTIONS

The RF1 and RF2 pins of the ADMV8913-EP are dc-coupled to on-chip ESD protection diodes. If a dc voltage is present on the RF1 and RF2 pins from other components within the system, it is recommended to place dc blocking capacitors in series with these pins. The dc blocking capacitors must be selected based on the operating frequency of the filter. Generally, a value greater than 100 pF is sufficient to minimize insertion loss at the lower operating frequencies. At higher operating frequencies, it may be necessary to consider the parasitic elements of the selected capacitor. Figure 18 shows a general model of a capacitor with the parasitic elements. The parasitic series inductance (L ESL ) is typically of most concern given that its impedance can become dominant at frequencies higher than 10 GHz. The other parasitic elements, including the leakage resistance (R L ), the dielectric absorption resistance (R DA ), the dielectric absorption capacitance (C DA ), and electrical series resistance (R ESR ), are less critical elements for consideration but are shown here for completeness.

Figure 18. General Model of a Capacitor

<!-- image -->

## SPI CONFIGURATION

The SPI of the ADMV8913-EP allows configuration of the device for specific functions or operations via the 5-pin SPI port. This interface provides users with added flexibility and customization. The SPI consists of five control lines: SFL, SCLK, SDI, SDO, and CS. For normal SPI operations, keep the SFL pin low.

The SPI protocol consists of an R/W bit followed by 15 register address bits and 8 data bits. The address field and data field are organized MSB first and end with the LSB.

Set the MSB to 0 for a write operation, and set the MSB to 1 for a read operation. The write cycle must be sampled on the rising edge of SCLK. The 24 bits of the serial write address and data are shifted in on the SDI control line, MSB to LSB. The ADMV8913-EP input logic level for the write cycle supports a 3.3 V interface.

For a read cycle, the R/W bit and the 15 register address bits shift in on the rising edge of SCLK on the SDI control line. Then, 8 bits of serial read data shift out on the SDO control line, MSB first, on the falling edge of SCLK. The output logic level for a read cycle is 3.3 V. The output drivers of the SDO are enabled after the last rising edge of SCLK of the instruction cycle and remain active until the end of the read cycle. In a read operation, when CS is deasserted, SDO returns to high impedance until the next read transaction. CS is active low and must be deasserted at the end of the write or read sequence.

An active low input on CS starts and gates a communication cycle. The CS pin allows more than one device to be used on the same serial communications lines. The SDO pin goes to a high impedance state when the CS input is high. During the communication cycle, the chip select must stay low. The SPI communications protocol follows the Analog Devices SPI standard. For more information, see the ADI-SPI Serial Control Interface Standard (Rev 1.0).

## MODE SELECTION

The ADMV8913-EP has three modes of operation: parallel, SPI write, and SPI fast latch. Parallel mode is used to bypass the SPI to allow the filters to be programmed directly using the HPF\_B3 to HPF\_B0 and LPF\_B3 to LPF\_B0 logic inputs. To select parallel

## THEORY OF OPERATION

mode, set the PS pin low. Otherwise, set the PS pin high to enable the SPI for use with SPI write or SPI fast latch mode.

SPI write mode is the normal operating mode, whereas SPI fast latch mode is used to sequence through the on-chip lookup table (LUT) using the internal state machine. To select SPI write mode, set the PS pin high and the SFL pin low. For operation in SPI fast latch mode, program the on-chip LUT and fast latch parameters with the PS pin high and the SFL pin low, and then bring the SFL pin high to enter this mode. Figure 19 shows a simplified representation of the parallel logic and SPI with the register map and internal state machine.

Figure 19. Simplified Interface and Logic Diagram

<!-- image -->

## PARALLEL MODE

Parallel mode uses the HPF\_B3 to HPF\_B0 and LPF\_B3 to LPF\_B0 logic inputs to set the state of the HPF and the LPF. While in parallel mode, there are two types of logic operations, synchronous and asynchronous. For synchronous operation, the state on the HPF\_B3 to HPF\_B0 and LPF\_B3 to LPF\_B0 logic inputs is only latched to the HPF and LPF on the rising edge of the CS pin. For asynchronous operation, the CS pin is held high and then any change to the HPF\_B3 to HPF\_B0 and LPF\_B3 to LPF\_B0 logic inputs asynchronously propagates to the HPF and LPF.

## SPI WRITE MODE

SPI write mode uses Register 0x020 (WR) to set the state of the HPF and the LPF that correspond to the HPF\_WR and LPF\_WR bit fields, respectively. See the Register Details section for a visual representation of Register 0x020 and its corresponding bit fields.

## FILTER SETTINGS

The HPF and LPF each contain 16 states (4 bits). A value of zero corresponds to setting the f 3dB of the filter to its lowest possible frequency. Conversely, a value of 15 corresponds to setting the f 3dB of the filter to its highest possible frequency.

## SPI FAST LATCH MODE

The ADMV8913-EP has a 128 state LUT and an internal state machine that is useful for quickly changing filter states in SPI fast latch mode. When the SFL pin is high, SPI fast latch mode enables, and the internal state machine sequences on each rising edge of the CS pin.

The LUT has 128 indices, LUT0 through LUT127 (Register 0x100 through Register 0x17F). Each index consists of the same type of parameters as those of SPI write mode.

The functionality of the internal state machine is such that on each rising edge of the CS pin, the internal state machine sequences a pointer based on the programmed direction. The internal state machine has the following parameters:

- FAST\_LATCH\_STOP (Register 0x011)
- FAST\_LATCH\_START (Register 0x012)
- FAST\_LATCH\_DIRECTION (Register 0x013)
- FAST\_LATCH\_STATE (Register 0x014)

The FAST\_LATCH\_STATE is the next LUT indices that is selected on the next rising edge of the CS pin. The FAST\_LATCH\_STATE is considered the internal pointer location.

When the FAST\_LATCH\_DIRECTION bit is set to zero, the sequencing direction is incremental. When the FAST\_LATCH\_DIREC-TION bit is set to one, the sequencing direction is decremental.

The FAST\_LATCH\_START and FAST\_LATCH\_STOP bits set the start and stop location, respectively. For incremental direction, the internal state machine sequences from the start location to the stop location and then rolls over to the start location. For the decremental direction, the sequence is from the stop location to the start location and then rolls over to the stop location.

The FAST\_LATCH\_STATE internal pointer is set to the values stored in FAST\_LATCH\_START for the incremental direction. For the decremental direction, the internal pointer is to the values stored in FAST\_LATCH\_STOP. For this transaction to occur, one rising edge of the CS pin is necessary. By nature, this occurs during a SPI transaction in SPI write mode. However, when exiting SPI fast latch mode (SFL pin brought low), toggle the CS pin low then high or perform a SPI transaction so that the FAST\_LATCH\_STATE refreshes to either the start or stop location accordingly.

## SPI STREAMING

In general, there are two types of SPI streaming transactions, Endian register ascending order and Endian register descending order. The ADMV8913-EP supports only the ascending order. To enable SPI streaming with Endian register ascending order, program Register 0x00 to a value of 0x3C.

For SPI streaming to the LUT, Register 0x100 to Register 0x17F (recommended), the transaction points to Register 0x100 and streams out 128 bytes of data. The transaction is 1040 bits in total (R/W bit + 15 bits address + 1024 bits data).

## THEORY OF OPERATION

## CHIP RESET

There are two methods that can reset the ADMV8913-EP registers to their default power-on state, a hard reset and a soft reset. The hard reset utilizes the RST pin, and the soft reset utilizes Register 0x000.

To perform a hard reset, momentarily bring the RST pin low and then high. See Figure 2 for the minimum required duration time for the RST pin to be low.

To perform a soft reset, program Register 0x000 to a value of 0x81. This action sets the SOFTRESET and SOFTRESET\_ bits high to initiate the reset. The SOFTRESET and SOFTRESET\_ bits are self resetting once the reset operation completes.

Regardless of the reset method used, it is recommended to perform the following after the chip resets:

- Program Register 0x000 to 0x3C to enable the SDO pin and allow SPI streaming with Endian ascending order.
- Read back all registers on the chip.

## APPLICATIONS INFORMATION

## PRINTED CIRCUIT BOARD (PCB) DESIGN GUIDELINES

The PCB used to implement the ADMV8913-EP must use a high quality dielectric material between the top metallization layer and internal ground layer, such as the Rogers 4003 or the Rogers 4350. All other dielectric layers of the PCB can be standard material, such as the Isola 370HR. The characteristic impedance of the transmission lines to the RF1 and RF2 pins of the ADMV8913-EP must be carefully controlled to 50 Ω to ensure optimal RF performance. Connect the GND pins and exposed pad of the ADMV8913-EP directly to the ground plane of the PCB. Use a sufficient number of via holes to connect the top and bottom ground planes of the PCB.

## PROGRAMMING FLOW CHART

Figure 20. Programming Flowchart

<!-- image -->

## REGISTER SUMMARY

Table 6. Register Summary

| Reg         | Name                  | Bits        | Bit 7                          | Bit 6                          | Bit 5                          | Bit 4                          | Bit 3                          | Bit 2                          | Bit 1                          | Bit 0                          | Reset   | R/W     |
|-------------|-----------------------|-------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|---------|---------|
| 0x000       | ADI_SPI_ CONFIG_A     | [7:0]       | SOFTRESET_                     | LSB_FIRST _                    | ENDIAN_                        | SDOACTIVE_                     | SDOACTIVE                      | ENDIAN                         | LSB_FIRST                      | SOFTRESET                      | 0x00    | R/W     |
| 0x001       | ADI_SPI_ CONFIG_B     | [7:0]       | SINGLE_ INSTRUCTION            | CSB_STALL                      | CONTROLLER _TARGET_RB          |                                | RESERVED                       | RESERVED                       |                                | CONTROLLER _TARGET_ TRANSFER   | 0x00    | R/W     |
| 0x003       | CHIPTYPE              | [7:0]       | CHIPTYPE                       | CHIPTYPE                       | CHIPTYPE                       | CHIPTYPE                       | CHIPTYPE                       | CHIPTYPE                       | CHIPTYPE                       | CHIPTYPE                       | 0x01    | R       |
| 0x004       | PRODUCT_ID _L         | [7:0]       | PRODUCT_ID_L                   | PRODUCT_ID_L                   | PRODUCT_ID_L                   | PRODUCT_ID_L                   | PRODUCT_ID_L                   | PRODUCT_ID_L                   | PRODUCT_ID_L                   | PRODUCT_ID_L                   | 0x13    | R       |
| 0x005       | PRODUCT_ID _H         | [7:0]       | PRODUCT_ID_H                   | PRODUCT_ID_H                   | PRODUCT_ID_H                   | PRODUCT_ID_H                   | PRODUCT_ID_H                   | PRODUCT_ID_H                   | PRODUCT_ID_H                   | PRODUCT_ID_H                   | 0x89    | R       |
| 0x011       | FAST_LATCH _STOP      | [7:0]       | RESERVED FAST_LATCH_STOP       | RESERVED FAST_LATCH_STOP       | RESERVED FAST_LATCH_STOP       | RESERVED FAST_LATCH_STOP       | RESERVED FAST_LATCH_STOP       | RESERVED FAST_LATCH_STOP       | RESERVED FAST_LATCH_STOP       | RESERVED FAST_LATCH_STOP       | 0x7F    | R/W     |
| 0x012       | FAST_LATCH _START     | [7:0]       | RESERVED FAST_LATCH_START      | RESERVED FAST_LATCH_START      | RESERVED FAST_LATCH_START      | RESERVED FAST_LATCH_START      | RESERVED FAST_LATCH_START      | RESERVED FAST_LATCH_START      | RESERVED FAST_LATCH_START      | RESERVED FAST_LATCH_START      | 0x00    | R/W     |
| 0x013       | FAST_LATCH _DIRECTION | [7:0]       | RESERVED FAST_LATCH_ DIRECTION | RESERVED FAST_LATCH_ DIRECTION | RESERVED FAST_LATCH_ DIRECTION | RESERVED FAST_LATCH_ DIRECTION | RESERVED FAST_LATCH_ DIRECTION | RESERVED FAST_LATCH_ DIRECTION | RESERVED FAST_LATCH_ DIRECTION | RESERVED FAST_LATCH_ DIRECTION | 0x00    | R/W     |
| 0x014       | FAST_LATCH _STATE     | [7:0]       | RESERVED FAST_LATCH_STATE      | RESERVED FAST_LATCH_STATE      | RESERVED FAST_LATCH_STATE      | RESERVED FAST_LATCH_STATE      | RESERVED FAST_LATCH_STATE      | RESERVED FAST_LATCH_STATE      | RESERVED FAST_LATCH_STATE      | RESERVED FAST_LATCH_STATE      | 0x00    | R       |
| 0x020       |                       | [7:0]       | HPF_WR                         | HPF_WR                         | HPF_WR                         | HPF_WR                         | HPF_WR                         | HPF_WR                         | HPF_WR                         | HPF_WR                         | 0x00    | R/W     |
| 0x100       | WR                    | [7:0]       |                                |                                |                                |                                |                                | LPF_WR                         | LPF_WR                         | LPF_WR                         | 0x00    | R/W     |
| 0x101       | LUT0 LUT1             | [7:0]       | HPF_0                          | HPF_0                          | HPF_1                          | HPF_0                          | HPF_0                          | LPF_0                          | LPF_0                          | LPF_0                          | 0x00    | R/W     |
| 0x102       | LUT2                  | [7:0]       | HPF_2                          | HPF_2                          | HPF_2                          | HPF_2                          | HPF_2                          | LPF_1 LPF_2                    | LPF_1 LPF_2                    | LPF_1 LPF_2                    | 0x00    | R/W     |
| 0x103       | LUT3                  | [7:0]       |                                |                                |                                |                                |                                |                                |                                |                                | 0x00    | R/W     |
| 0x104       | LUT4                  | [7:0]       | HPF_3 HPF_4                    | HPF_3 HPF_4                    | HPF_3 HPF_4                    | HPF_3 HPF_4                    | HPF_3 HPF_4                    | LPF_3 LPF_4                    | LPF_3 LPF_4                    | LPF_3 LPF_4                    | 0x00    | R/W     |
|             | LUT5                  | [7:0]       |                                |                                |                                |                                |                                | LPF_5                          | LPF_5                          | LPF_5                          | 0x00    | R/W     |
| 0x105 0x106 | LUT6                  | [7:0]       | HPF_5 HPF_6                    | HPF_5 HPF_6                    | HPF_5 HPF_6                    | HPF_5 HPF_6                    | HPF_5 HPF_6                    |                                | LPF_6                          |                                | 0x00    | R/W     |
| 0x107       | LUT7                  | [7:0]       | HPF_7                          | HPF_7                          | HPF_7                          | HPF_7                          | HPF_7                          |                                |                                |                                | 0x00    | R/W     |
| 0x108       | LUT8                  | [7:0]       | HPF_8                          | HPF_8                          | HPF_8                          | HPF_8                          | HPF_8                          | LPF_7                          | LPF_7                          | LPF_7                          | 0x00    | R/W     |
| 0x109       | LUT9                  | [7:0]       | HPF_9                          | HPF_9                          | HPF_9                          | HPF_9                          | HPF_9                          | LPF_8                          | LPF_8                          | LPF_8                          | 0x00    | R/W     |
|             |                       |             | HPF_10                         | HPF_10                         | HPF_10                         | HPF_10                         | HPF_10                         | LPF_10                         | LPF_10                         | LPF_10                         | 0x00    | R/W     |
| 0x10A 0x10B | LUT10 LUT11           | [7:0] [7:0] |                                |                                | HPF_11                         |                                |                                | LPF_9                          | LPF_9                          | LPF_9                          | 0x00    | R/W     |
| 0x10C       | LUT12                 | [7:0]       | HPF_12                         | HPF_12                         | HPF_12                         | HPF_12                         | HPF_12                         | LPF_11 LPF_12                  | LPF_11 LPF_12                  | LPF_11 LPF_12                  | 0x00    | R/W     |
| 0x10D       | LUT13                 | [7:0]       | HPF_13                         | HPF_13                         | HPF_13                         | HPF_13                         | HPF_13                         | LPF_13                         | LPF_13                         | LPF_13                         | 0x00    | R/W     |
| 0x10E       | LUT14                 | [7:0]       | HPF_14                         | HPF_14                         | HPF_14                         | HPF_14                         | HPF_14                         | LPF_14                         | LPF_14                         | LPF_14                         | 0x00    | R/W     |
| 0x10F       | LUT15                 | [7:0]       | HPF_15                         | HPF_15                         | HPF_15                         | HPF_15                         | HPF_15                         | LPF_15                         | LPF_15                         | LPF_15                         | 0x00    | R/W     |
| 0x110       | LUT16                 | [7:0]       | HPF_16                         | HPF_16                         | HPF_16                         | HPF_16                         | HPF_16                         | LPF_16                         | LPF_16                         | LPF_16                         | 0x00    | R/W     |
| 0x111       | LUT17                 | [7:0]       | HPF_17                         | HPF_17                         | HPF_17                         | HPF_17                         | HPF_17                         | LPF_17                         | LPF_17                         | LPF_17                         | 0x00    | R/W     |
| 0x112       | LUT18                 | [7:0]       | HPF_18                         | HPF_18                         | HPF_18                         | HPF_18                         | HPF_18                         | LPF_18                         | LPF_18                         | LPF_18                         | 0x00    | R/W     |
| 0x113       | LUT19                 | [7:0]       | HPF_19                         | HPF_19                         | HPF_19                         | HPF_19                         | HPF_19                         | LPF_19                         | LPF_19                         | LPF_19                         | 0x00    | R/W     |
| 0x114       | LUT20                 | [7:0]       | HPF_20                         | HPF_20                         | HPF_20                         | HPF_20                         | HPF_20                         | LPF_20                         | LPF_20                         | LPF_20                         | 0x00    | R/W     |
| 0x115       | LUT21                 | [7:0]       | HPF_21                         | HPF_21                         | HPF_21                         | HPF_21                         | HPF_21                         | LPF_21                         | LPF_21                         | LPF_21                         | 0x00    | R/W     |
| 0x116       | LUT22                 | [7:0]       | HPF_22                         | HPF_22                         | HPF_22                         | HPF_22                         | HPF_22                         | LPF_22                         | LPF_22                         | LPF_22                         | 0x00    | R/W     |
| 0x117       | LUT23                 | [7:0]       | HPF_23                         | HPF_23                         | HPF_23                         | HPF_23                         | HPF_23                         | LPF_23                         | LPF_23                         | LPF_23                         | 0x00    | R/W     |
| 0x118       | LUT24                 | [7:0]       | HPF_24                         | HPF_24                         | HPF_24                         | HPF_24                         | HPF_24                         | LPF_24                         | LPF_24                         | LPF_24                         | 0x00    | R/W     |
| 0x119       | LUT25                 | [7:0]       | HPF_25                         | HPF_25                         | HPF_25                         | HPF_25                         | HPF_25                         | LPF_25                         | LPF_25                         | LPF_25                         | 0x00    | R/W     |
| 0x11A       | LUT26                 | [7:0]       | HPF_26                         | HPF_26                         | HPF_26                         | HPF_26                         | HPF_26                         | LPF_26                         | LPF_26                         | LPF_26                         | 0x00    | R/W     |
| 0x11B       | LUT27                 | [7:0]       | HPF_27                         | HPF_27                         | HPF_27                         | HPF_27                         | HPF_27                         |                                | LPF_27                         |                                | 0x00    | R/W R/W |
| 0x11C       | LUT28                 | [7:0]       | HPF_28                         | HPF_28                         | HPF_28                         | HPF_28                         | HPF_28                         | LPF_28                         | LPF_28                         | LPF_28                         | 0x00    |         |

## REGISTER SUMMARY

Table 6. Register Summary (Continued)

| Reg   | Name   | Bits        | Bit 7   | Bit 5   | Bit   | Bit 3   | Bit 2 Bit 1   | Bit 0   | Reset     | R/W     |
|-------|--------|-------------|---------|---------|-------|---------|---------------|---------|-----------|---------|
| 0x11D | LUT29  | [7:0]       |         | HPF_29  |       |         | LPF_29        |         | 0x00      | R/W     |
| 0x11E | LUT30  | [7:0]       |         | HPF_30  |       |         | LPF_30        |         | 0x00      | R/W     |
| 0x11F | LUT31  | [7:0]       |         | HPF_31  |       |         | LPF_31        |         | 0x00      | R/W     |
| 0x120 | LUT32  | [7:0]       |         | HPF_32  |       |         | LPF_32        |         | 0x00      | R/W     |
| 0x121 | LUT33  | [7:0]       |         | HPF_33  |       |         | LPF_33        |         | 0x00      | R/W     |
| 0x122 | LUT34  | [7:0]       |         | HPF_34  |       |         | LPF_34        |         | 0x00      | R/W     |
| 0x123 | LUT35  | [7:0]       |         | HPF_35  |       |         | LPF_35        |         | 0x00      | R/W     |
| 0x124 | LUT36  | [7:0]       |         | HPF_36  |       |         | LPF_36        |         | 0x00      | R/W     |
| 0x125 | LUT37  | [7:0]       |         | HPF_37  |       |         | LPF_37        |         | 0x00      | R/W     |
| 0x126 | LUT38  | [7:0]       |         | HPF_38  |       |         | LPF_38        |         | 0x00      | R/W     |
| 0x127 | LUT39  | [7:0]       |         | HPF_39  |       |         | LPF_39        |         | 0x00      | R/W     |
| 0x128 | LUT40  | [7:0]       |         | HPF_40  |       |         | LPF_40        |         | 0x00      | R/W     |
| 0x129 | LUT41  | [7:0]       |         | HPF_41  |       |         | LPF_41        |         | 0x00      | R/W     |
| 0x12A | LUT42  | [7:0]       |         | HPF_42  |       |         | LPF_42        |         | 0x00      | R/W     |
| 0x12B | LUT43  | [7:0]       |         | HPF_43  |       |         | LPF_43        |         | 0x00      | R/W     |
| 0x12C | LUT44  | [7:0]       |         | HPF_44  |       |         | LPF_44        |         | 0x00      | R/W     |
| 0x12D | LUT45  | [7:0]       |         | HPF_45  |       |         | LPF_45        |         | 0x00      | R/W     |
| 0x12E | LUT46  | [7:0]       |         | HPF_46  |       |         | LPF_46        |         | 0x00      | R/W     |
| 0x12F | LUT47  | [7:0]       |         | HPF_47  |       |         | LPF_47        |         | 0x00      | R/W     |
| 0x130 | LUT48  | [7:0]       |         | HPF_48  |       |         | LPF_48        |         | 0x00      | R/W     |
| 0x131 | LUT49  | [7:0]       |         | HPF_49  |       |         | LPF_49        |         | 0x00      | R/W     |
| 0x132 | LUT50  | [7:0]       |         | HPF_50  |       |         | LPF_50        |         | 0x00      | R/W     |
| 0x133 | LUT51  | [7:0]       |         | HPF_51  |       |         | LPF_51        |         | 0x00      | R/W     |
| 0x134 | LUT52  | [7:0]       |         | HPF_52  |       |         | LPF_52        |         | 0x00      | R/W     |
| 0x135 | LUT53  | [7:0]       |         | HPF_53  |       |         | LPF_53        |         | 0x00      | R/W     |
| 0x136 | LUT54  | [7:0]       |         | HPF_54  |       |         | LPF_54        |         | 0x00      | R/W     |
| 0x137 | LUT55  | [7:0]       |         | HPF_55  |       |         | LPF_55        |         | 0x00      | R/W     |
| 0x138 | LUT56  | [7:0]       |         | HPF_56  |       |         | LPF_56        |         | 0x00      | R/W     |
| 0x139 | LUT57  | [7:0]       |         | HPF_57  |       |         | LPF_57        |         | 0x00      | R/W     |
| 0x13A | LUT58  | [7:0]       |         | HPF_58  |       |         | LPF_58        |         | 0x00      | R/W     |
| 0x13B | LUT59  | [7:0]       |         | HPF_59  |       |         | LPF_59        |         | 0x00      | R/W     |
| 0x13C | LUT60  | [7:0]       |         | HPF_60  |       |         | LPF_60        |         | 0x00      | R/W     |
| 0x13D | LUT61  | [7:0]       |         | HPF_61  |       |         | LPF_61        |         | 0x00      | R/W     |
| 0x13E | LUT62  | [7:0]       |         | HPF_62  |       |         | LPF_62        |         | 0x00      | R/W     |
| 0x13F | LUT63  | [7:0]       |         | HPF_63  |       |         | LPF_63        |         | 0x00      | R/W     |
| 0x140 | LUT064 | [7:0]       |         | HPF_64  |       |         | LPF_64        |         | 0x00      | R/W     |
| 0x141 | LUT065 | [7:0]       |         | HPF_65  |       |         | LPF_65        |         | 0x00      | R/W     |
| 0x142 | LUT066 | [7:0]       |         | HPF_66  |       |         | LPF_66        |         | 0x00      | R/W     |
| 0x143 | LUT067 | [7:0]       |         | HPF_67  |       |         | LPF_67        |         | 0x00      | R/W     |
| 0x144 | LUT068 | [7:0]       |         | HPF_68  |       |         | LPF_68        |         | 0x00      | R/W     |
| 0x145 | LUT069 | [7:0]       |         | HPF_69  |       |         | LPF_69        |         | 0x00      | R/W     |
| 0x146 | LUT070 | [7:0]       |         | HPF_70  |       |         | LPF_70        |         | 0x00      | R/W     |
| 0x147 | LUT071 | [7:0]       |         | HPF_71  |       |         | LPF_71        |         | 0x00      | R/W     |
| 0x148 | LUT072 | [7:0]       |         | HPF_72  |       |         | LPF_72        |         | 0x00      | R/W R/W |
| 0x149 | LUT073 | [7:0]       |         | HPF_73  |       |         | LPF_73 LPF_74 |         | 0x00 0x00 | R/W     |
| 0x14A | LUT074 | [7:0] [7:0] |         | HPF_74  |       |         | LPF_75        |         |           |         |
| 0x14B | LUT075 |             |         | HPF_75  |       |         |               |         | 0x00      | R/W     |

## REGISTER SUMMARY

Table 6. Register Summary (Continued)

| Reg   | Name   | Bits   | Bit 7   | Bit 5           | Bit   | Bit 3   | Bit 2 Bit 1     | Reset     | R/W     |
|-------|--------|--------|---------|-----------------|-------|---------|-----------------|-----------|---------|
| 0x14C | LUT076 | [7:0]  |         | HPF_76          |       |         | LPF_76          | 0x00      | R/W     |
| 0x14D | LUT077 | [7:0]  |         | HPF_77          |       |         | LPF_77          | 0x00      | R/W     |
| 0x14E | LUT078 | [7:0]  |         | HPF_78          |       |         | LPF_78          | 0x00      | R/W     |
| 0x14F | LUT079 | [7:0]  |         | HPF_79          |       |         | LPF_79          | 0x00      | R/W     |
| 0x150 | LUT080 | [7:0]  |         | HPF_80          |       |         | LPF_80          | 0x00      | R/W     |
| 0x151 | LUT081 | [7:0]  |         | HPF_81          |       |         | LPF_81          | 0x00      | R/W     |
| 0x152 | LUT082 | [7:0]  |         | HPF_82          |       |         | LPF_82          | 0x00      | R/W     |
| 0x153 | LUT083 | [7:0]  |         | HPF_83          |       |         | LPF_83          | 0x00      | R/W     |
| 0x154 | LUT084 | [7:0]  |         | HPF_84          |       |         | LPF_84          | 0x00      | R/W     |
| 0x155 | LUT085 | [7:0]  |         | HPF_85          |       |         | LPF_85          | 0x00      | R/W     |
| 0x156 | LUT086 | [7:0]  |         | HPF_86          |       |         | LPF_86          | 0x00      | R/W     |
| 0x157 | LUT087 | [7:0]  |         | HPF_87          |       |         | LPF_87          | 0x00      | R/W     |
| 0x158 | LUT088 | [7:0]  |         | HPF_88          |       |         | LPF_88          | 0x00      | R/W     |
| 0x159 | LUT089 | [7:0]  |         | HPF_89          |       |         | LPF_89          | 0x00      | R/W     |
| 0x15A | LUT090 | [7:0]  |         | HPF_90          |       |         | LPF_90          | 0x00      | R/W     |
| 0x15B | LUT091 | [7:0]  |         | HPF_91          |       |         | LPF_91          | 0x00      | R/W     |
| 0x15C | LUT092 | [7:0]  |         | HPF_92          |       |         | LPF_92          | 0x00      | R/W     |
| 0x15D | LUT093 | [7:0]  |         | HPF_93          |       |         | LPF_93          | 0x00      | R/W     |
| 0x15E | LUT094 | [7:0]  |         | HPF_94          |       |         | LPF_94          | 0x00      | R/W     |
| 0x15F | LUT095 | [7:0]  |         | HPF_95          |       |         | LPF_95          | 0x00      | R/W     |
| 0x160 | LUT096 | [7:0]  |         | HPF_96          |       |         | LPF_96          | 0x00      | R/W     |
| 0x161 | LUT097 | [7:0]  |         | HPF_97          |       |         | LPF_97          | 0x00      | R/W     |
| 0x162 | LUT098 | [7:0]  |         | HPF_98          |       |         | LPF_98          | 0x00      | R/W     |
| 0x163 | LUT099 | [7:0]  |         | HPF_99          |       |         | LPF_99          | 0x00      | R/W     |
| 0x164 | LUT100 | [7:0]  |         | HPF_100         |       |         | LPF_100         | 0x00      | R/W     |
| 0x165 | LUT101 | [7:0]  |         | HPF_101         |       |         | LPF_101         | 0x00      | R/W     |
| 0x166 | LUT102 | [7:0]  |         | HPF_102         |       |         | LPF_102         | 0x00      | R/W     |
| 0x167 | LUT103 | [7:0]  |         | HPF_103         |       |         | LPF_103         | 0x00      | R/W     |
| 0x168 | LUT104 | [7:0]  |         | HPF_104         |       |         | LPF_104         | 0x00      | R/W     |
| 0x169 | LUT105 | [7:0]  |         | HPF_105         |       |         | LPF_105         | 0x00      | R/W     |
| 0x16A | LUT106 | [7:0]  |         | HPF_106         |       |         | LPF_106         | 0x00      | R/W     |
| 0x16B | LUT107 | [7:0]  |         | HPF_107         |       |         | LPF_107         | 0x00      | R/W     |
| 0x16C | LUT108 | [7:0]  |         | HPF_108         |       |         | LPF_108         | 0x00      | R/W     |
| 0x16D | LUT109 | [7:0]  |         | HPF_109         |       |         | LPF_109         | 0x00      | R/W     |
| 0x16E | LUT110 | [7:0]  |         | HPF_110         |       |         | LPF_110         | 0x00      | R/W     |
| 0x16F | LUT111 | [7:0]  |         | HPF_111         |       |         | LPF_111         | 0x00      | R/W     |
| 0x170 | LUT112 | [7:0]  |         | HPF_112         |       |         | LPF_112         | 0x00      | R/W     |
| 0x171 | LUT113 | [7:0]  |         | HPF_113         |       |         | LPF_113         | 0x00      | R/W     |
| 0x172 | LUT114 | [7:0]  |         | HPF_114         |       |         | LPF_114         | 0x00      | R/W     |
| 0x173 | LUT115 | [7:0]  |         | HPF_115         |       |         | LPF_115         | 0x00      | R/W     |
| 0x174 | LUT116 | [7:0]  |         | HPF_116         |       |         | LPF_116         | 0x00      | R/W     |
| 0x175 | LUT117 | [7:0]  |         | HPF_117         |       |         | LPF_117         | 0x00      | R/W     |
| 0x176 | LUT118 | [7:0]  |         | HPF_118         |       |         | LPF_118         | 0x00      | R/W     |
| 0x177 | LUT119 | [7:0]  |         | HPF_119 HPF_120 |       |         | LPF_119 LPF_120 | 0x00 0x00 | R/W R/W |
| 0x178 | LUT120 | [7:0]  |         | HPF_121         |       |         | LPF_121         | 0x00      | R/W     |
| 0x179 | LUT121 | [7:0]  |         |                 |       |         | LPF_122         | 0x00      | R/W     |
| 0x17A | LUT122 | [7:0]  |         | HPF_122         |       |         |                 |           |         |

## REGISTER SUMMARY

Table 6. Register Summary (Continued)

| Reg   | Name   | Bits   | Bit 7   | Bit 6   | Bit 5   | Bit 4   | Bit 3   | Bit 2   | Bit 1   | Bit 0   | Reset   | R/W   |
|-------|--------|--------|---------|---------|---------|---------|---------|---------|---------|---------|---------|-------|
| 0x17B | LUT123 | [7:0]  |         |         | HPF_123 |         |         |         | LPF_123 |         | 0x00    | R/W   |
| 0x17C | LUT124 | [7:0]  |         |         | HPF_124 |         |         |         | LPF_124 |         | 0x00    | R/W   |
| 0x17D | LUT125 | [7:0]  |         |         | HPF_125 |         |         |         | LPF_125 |         | 0x00    | R/W   |
| 0x17E | LUT126 | [7:0]  |         |         | HPF_126 |         |         |         | LPF_126 |         | 0x00    | R/W   |
| 0x17F | LUT127 | [7:0]  |         |         | HPF_127 |         |         |         | LPF_127 |         | 0x00    | R/W   |

## REGISTER DETAILS

## Register: 0x000, Reset: 0x00, Name: ADI\_SPI\_CONFIG\_A

<!-- image -->

Table 7. Bit Descriptions for ADI\_SPI\_CONFIG\_A

|   Bits | Bit Name   | Description                                        | Reset   | Access   |
|--------|------------|----------------------------------------------------|---------|----------|
|      7 | SOFTRESET_ | Soft Reset 0: reset asserted 1: reset not asserted | 0x0     | R/W      |
|      6 | LSB_FIRST_ | LSB First 0: LSB first 1: MSB first                | 0x0     | R/W      |
|      5 | ENDIAN_    | Endian 0: little Endian 1: big Endian              | 0x0     | R/W      |
|      4 | SDOACTIVE_ | SDO Active 0: SDO inactive 1: SDO active           | 0x0     | R/W      |
|      3 | SDOACTIVE  | SDO Active 0: SDO inactive 1: SDO active           | 0x0     | R/W      |
|      2 | ENDIAN     | Endian 0: little Endian 1: big Endian              | 0x0     | R/W      |
|      1 | LSB_FIRST  | LSB First 0: LSB first 1: MSB first                | 0x0     | R/W      |
|      0 | SOFTRESET  | Soft Reset 0: reset asserted 1: reset not asserted | 0x0     | R/W      |

Register: 0x001, Reset: 0x00, Name: ADI\_SPI\_CONFIG\_B

<!-- image -->

Table 8. Bit Descriptions for ADI\_SPI\_CONFIG\_B

|   Bits | Bit Name           | Description                            | Reset   | Access   |
|--------|--------------------|----------------------------------------|---------|----------|
|      7 | SINGLE_INSTRUCTION | Single Instruction 0: enable streaming | 0x0     | R/W      |

## REGISTER DETAILS

Table 8. Bit Descriptions for ADI\_SPI\_CONFIG\_B (Continued)

| Bits   | Bit Name                   | Description                           | Reset   | Access   |
|--------|----------------------------|---------------------------------------|---------|----------|
|        |                            | 1: disable streaming regardless of CS |         |          |
| 6      | CSB_STALL                  | CS Stall                              | 0x0     | R/W      |
| 5      | CONTROLLER_TARGET_RB       | Controller Target Readback            | 0x0     | R/W      |
| [4:1]  | RESERVED                   | Reserved                              | 0x0     | R        |
| 0      | CONTROLLER_TARGET_TRANSFER | Controller Target Transfer            | 0x0     | R/W      |

Register: 0x003, Reset: 0x01, Name: CHIPTYPE

Table 12. Bit Descriptions for FAST\_LATCH\_STOP

| Bits   | Bit Name        | Description                                                           | Reset   | Access   |
|--------|-----------------|-----------------------------------------------------------------------|---------|----------|
| 7      | RESERVED        | Reserved.                                                             | 0x0     | R        |
| [6:0]  | FAST_LATCH_STOP | Fast Latch Stop Index. Sets the stop index within the fast latch LUT. | 0x7F    | R/W      |

Register: 0x012, Reset: 0x00, Name: FAST\_LATCH\_START

<!-- image -->

Table 9. Bit Descriptions for CHIPTYPE

| Bits   | Bit Name   | Description          | Reset   | Access   |
|--------|------------|----------------------|---------|----------|
| [7:0]  | CHIPTYPE   | Chip Type, Read Only | 0x1     | R        |

Register: 0x004, Reset: 0x13, Name: PRODUCT\_ID\_L

<!-- image -->

Table 10. Bit Descriptions for PRODUCT\_ID\_L

| Bits   | Bit Name     | Description                | Reset   | Access   |
|--------|--------------|----------------------------|---------|----------|
| [7:0]  | PRODUCT_ID_L | Product_ID_L, Lower 8 Bits | 0x13    | R        |

Register: 0x005, Reset: 0x89, Name: PRODUCT\_ID\_H

<!-- image -->

Table 11. Bit Descriptions for PRODUCT\_ID\_H

| Bits   | Bit Name     | Description                 | Reset   | Access   |
|--------|--------------|-----------------------------|---------|----------|
| [7:0]  | PRODUCT_ID_H | Product_ID_H, Higher 8 Bits | 0x89    | R        |

Register: 0x011, Reset: 0x7F, Name: FAST\_LATCH\_STOP

<!-- image -->

## REGISTER DETAILS

<!-- image -->

Table 13. Bit Descriptions for FAST\_LATCH\_START

| Bits   | Bit Name         | Description                                                             | Reset   | Access   |
|--------|------------------|-------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED         | Reserved.                                                               | 0x0     | R        |
| [6:0]  | FAST_LATCH_START | Fast Latch Start Index. Sets the start index within the fast latch LUT. | 0x0     | R/W      |

Register: 0x013, Reset: 0x00, Name: FAST\_LATCH\_DIRECTION

<!-- image -->

Table 14. Bit Descriptions for FAST\_LATCH\_DIRECTION

| Bits   | Bit Name             | Description                                                                                                         | Reset   | Access   |
|--------|----------------------|---------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:1]  | RESERVED             | Reserved.                                                                                                           | 0x0     | R        |
| 0      | FAST_LATCH_DIRECTION | Fast Latch Direction. Determines which direction to sequence within the fast latch LUT. 0: increment. 1: decrement. | 0x0     | R/W      |

Register: 0x014, Reset: 0x00, Name: FAST\_LATCH\_STATE

<!-- image -->

Table 15. Bit Descriptions for FAST\_LATCH\_STATE

| Bits   | Bit Name         | Description                                                      | Reset   | Access   |
|--------|------------------|------------------------------------------------------------------|---------|----------|
| 7      | RESERVED         | Reserved.                                                        | 0x0     | R        |
| [6:0]  | FAST_LATCH_STATE | Fast Latch State. Reads back the internal state machine pointer. | 0x0     | R        |

Register: 0x020, Reset: 0x00, Name: WR

<!-- image -->

Table 16. Bit Descriptions for WR

| Bits   | Bit Name   | Description          | Reset   | Access   |
|--------|------------|----------------------|---------|----------|
| [7:4]  | HPF_WR     | SPI Write: HPF State | 0x0     | R/W      |
| [3:0]  | LPF_WR     | SPI Write: LPF State | 0x0     | R/W      |

## Register: 0x100, Reset: 0x00, Name: LUT0

Note that the LUT1 to LUT127 bit field functionality (Register 0x101 to Register 0x17F) is identical to LUT0 bit field functionality (Register 0x100). See the Register Summary section and Table 6 for the register address information.

<!-- image -->

## REGISTER DETAILS

## Table 17. Bit Descriptions for LUT0

| Bits   | Bit Name   | Description        | Reset   | Access   |
|--------|------------|--------------------|---------|----------|
| [7:4]  | HPF_0      | LUT 000: HPF State | 0x0     | R/W      |
| [3:0]  | LPF_0      | LUT 000: LPF State | 0x0     | R/W      |

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                 |
|----------------------------|----------------|-------------------------------------|
| CC-30-4                    | LGA            | 30-Terminal Land Grid Array Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                       | Package Option   | Package Quantity   |
|--------------------|---------------------|-------------------------------------------|------------------|--------------------|
| ADMV8913SCCZ-EP    | -55°C to +105°C     | 30-Terminal Land Grid Array Package [LGA] | CC-30-4          | Cut Tape           |
| ADMV8913SCCZ-EP-R2 | -55°C to +105°C     | 30-Terminal Land Grid Array Package [LGA] | CC-30-4          | 250, Reel          |

## EVALUATION BOARDS

| Model 1        | Description    |
|----------------|----------------|
| ADMV8913-EVALZ | Evaluation PCB |

<!-- image -->