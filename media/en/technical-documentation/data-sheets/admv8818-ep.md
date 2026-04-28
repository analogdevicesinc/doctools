<!-- lastmod 2025-07-25 -->
<!-- image -->

## 2 GHz to 18 GHz, Digitally Tunable, High-Pass and Low-Pass Filter

## GENERAL DESCRIPTION

The ADMV8818-EP is a fully monolithic microwave integrated circuit (MMIC) that features a digitally selectable frequency of operation. The device features four independently controlled high-pass filters (HPFs) and four independently controlled low-pass filters (LPFs) that span the 2 GHz to 18 GHz frequency range.

The flexible architecture of the ADMV8818-EP allows the 3 dB cutoff frequency (f 3dB ) of the high-pass and low-pass filters to be controlled independently to generate up to 4 GHz of bandwidth. The digital logic control on each filter is 4 bits wide (16 states) and controls the on-chip reactive elements to adjust the f 3dB . The typical insertion loss is 9 dB, and the wideband rejection is 35 dB, which is ideally suited for minimizing system harmonics.

This tunable filter can be used as a smaller alternative to large switched filter banks and cavity tuned filters, and this device provides a dynamically adjustable solution in advanced communications applications.

## FEATURES

- Digitally tunable, multioctave, high-pass and low-pass tuning
- Independent 3 dB frequency control for up to 4 GHz of bandwidth
- Optimal wideband rejection: 35 dB
- Single chip replacement for discrete filter banks
- Compact 9 mm × 9 mm, 56-terminal LGA package

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications (AQEC standard)
- Military temperature range of -55°C to +105°C
- Controlled manufacturing baseline
- One assembly and test site
- One fabrication site
- Production change notification
- Qualification data available on request

## APPLICATIONS

- Test and measurement equipment
- Military radar, electronic warfare, and electronic countermeasures
- Satellite communications and space
- Industrial and medical equipment

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................ 1 Enhanced Product Features..................................1                                                                                                                                                                                                                                                        | SPI Configuration.............................................15                                                                                                                                                                                                                                                                                                                               |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                                                                                                                                                                                                                                | RF Connections................................................15                                                                                                                                                                                                                                                                                                                               |
| Applications........................................................... 1                                                                                                                                                                                                                                                                                                                      | Mode Selection.................................................15                                                                                                                                                                                                                                                                                                                              |
| General Description...............................................1                                                                                                                                                                                                                                                                                                                            | SPI Write Mode................................................ 16                                                                                                                                                                                                                                                                                                                              |
| Functional Block Diagram......................................1                                                                                                                                                                                                                                                                                                                                | Switch Positions...............................................16                                                                                                                                                                                                                                                                                                                              |
| Specifications........................................................ 3                                                                                                                                                                                                                                                                                                                       | Switch Set........................................................ 16                                                                                                                                                                                                                                                                                                                          |
| Timing Specifications......................................... 5                                                                                                                                                                                                                                                                                                                               | Filter Settings................................................... 16                                                                                                                                                                                                                                                                                                                          |
| Absolute Maximum Ratings...................................7                                                                                                                                                                                                                                                                                                                                   | Write Group Priority..........................................16                                                                                                                                                                                                                                                                                                                               |
| Electrostatic Discharge (ESD) Ratings...............7                                                                                                                                                                                                                                                                                                                                          | Frequency Terminology....................................16                                                                                                                                                                                                                                                                                                                                    |
| ESD Caution.......................................................7                                                                                                                                                                                                                                                                                                                            | SPI Fast Latch Mode........................................16                                                                                                                                                                                                                                                                                                                                  |
| Pin Configuration and Function Descriptions........ 8                                                                                                                                                                                                                                                                                                                                          | Chip Reset........................................................17                                                                                                                                                                                                                                                                                                                           |
| Typical Performance Characteristics.....................9                                                                                                                                                                                                                                                                                                                                      | Applications Information...................................... 18                                                                                                                                                                                                                                                                                                                              |
| 4 GHz Constant Bandwidth Data....................... 9                                                                                                                                                                                                                                                                                                                                         | PCB Design Guidelines....................................18                                                                                                                                                                                                                                                                                                                                    |
| Board Loss and Bypass Configuration Data.....11                                                                                                                                                                                                                                                                                                                                                | Programming Flow Chart.....................................19                                                                                                                                                                                                                                                                                                                                  |
| HPF and LPF Configuration.............................12                                                                                                                                                                                                                                                                                                                                       | Register Summary...............................................20                                                                                                                                                                                                                                                                                                                              |
| Theory of Operation.............................................14                                                                                                                                                                                                                                                                                                                             | Register Details................................................... 29                                                                                                                                                                                                                                                                                                                         |
| Chip Architecture..............................................14                                                                                                                                                                                                                                                                                                                              | Outline Dimensions............................................. 37                                                                                                                                                                                                                                                                                                                             |
| Tunable High-Pass Filters................................14                                                                                                                                                                                                                                                                                                                                    | Ordering Guide.................................................37                                                                                                                                                                                                                                                                                                                              |
| Tunable Low-Pass Filters.................................15                                                                                                                                                                                                                                                                                                                                    | Evaluation Boards............................................37                                                                                                                                                                                                                                                                                                                                |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                |
| 7/2025-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                                                                                        | 7/2025-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                                                                                        |
| Changed Master to Controller and Slave to Target (Throughout)....................................................................1 Changes to At 1 MHz Offset Parameter and Logic Input and Output (RST, CS, SCLK, SDI, SDO, SFL) Parameter, Table 1.........................................................................................................................................3 | Changed Master to Controller and Slave to Target (Throughout)....................................................................1 Changes to At 1 MHz Offset Parameter and Logic Input and Output (RST, CS, SCLK, SDI, SDO, SFL) Parameter, Table 1.........................................................................................................................................3 |
| Change to Table 3............................................................................................................................................7                                                                                                                                                                                                                                 | Change to Table 3............................................................................................................................................7                                                                                                                                                                                                                                 |
| Changes to Table 5..........................................................................................................................................8 Changes to Table 7........................................................................................................................................29                                                                     | Changes to Table 5..........................................................................................................................................8 Changes to Table 7........................................................................................................................................29                                                                     |

## SPECIFICATIONS

TA = 25°C, unless otherwise noted.

Table 1.

| Parameter              | Min   | Typ      | Max   | Unit   | Test Conditions/Comments                            |
|------------------------|-------|----------|-------|--------|-----------------------------------------------------|
| FREQUENCY RANGE (f 3dB |       |          |       |        | 3 dB cutoff                                         |
| Bypass Configuration   | 2     |          | 18    | GHz    |                                                     |
| HPF 1                  |       |          |       |        |                                                     |
| State 0                |       | 1.75     |       | GHz    |                                                     |
| State 15               |       | 3.55     |       | GHz    |                                                     |
| HPF 2                  |       |          |       |        |                                                     |
| State 0                |       | 3.40     |       | GHz    |                                                     |
| State 15               |       | 7.25     |       | GHz    |                                                     |
| HPF 3                  |       |          |       |        |                                                     |
| State 0                |       | 6.60     |       | GHz    |                                                     |
| State 15               |       | 12.00    |       | GHz    |                                                     |
| HPF 4                  |       |          |       |        |                                                     |
| State 0                |       | 12.50    |       | GHz    |                                                     |
| State 15               |       | 19.90    |       | GHz    |                                                     |
| LPF 1                  |       |          |       |        |                                                     |
| State 0                |       | 2.05     |       | GHz    |                                                     |
| State 15               |       | 3.85     |       | GHz    |                                                     |
| LPF 2                  |       |          |       |        |                                                     |
| State 0                |       | 3.35     |       | GHz    |                                                     |
| State 15               |       | 7.25     |       | GHz    |                                                     |
| LPF 3                  |       |          |       |        |                                                     |
| State 0                |       | 7.00     |       | GHz    |                                                     |
| State 15               |       | 13.00    |       | GHz    |                                                     |
| LPF 4                  |       |          |       |        |                                                     |
| State 0                |       | 12.55    |       | GHz    |                                                     |
| State 15               |       | 18.85    |       | GHz    |                                                     |
| INSERTION LOSS         |       |          |       |        |                                                     |
| Bypass Configuration   |       |          |       |        |                                                     |
| 2 GHz                  |       | -3.2     |       | dB     |                                                     |
| 10 GHz                 |       | -4.4     |       | dB     |                                                     |
| 18 GHz                 |       | -6.0     |       | dB     |                                                     |
| 2 GHz to 6 GHz         |       | -7.3     |       | dB     | HPF 1 State 2 and LPF 2 State 11                    |
| 6 GHz to 10 GHz        |       | -8.6     |       | dB     | HPF 2 State 11 and LPF 3 State 8                    |
| 10 GHz to 14 GHz       |       | -11.8    |       | dB     | HPF 3 State 10 and LPF 4 State 5                    |
| 14 GHz to 18 GHz       |       | -14.6    |       | dB     | HPF 4 State 5 and LPF 4 State 13                    |
| BANDWIDTH (3 dB)       |       |          |       |        | Smaller bandwidth possible with more insertion loss |
| 2 GHz to 10 GHz        |       | 0.5 to 4 |       | GHz    |                                                     |
| 10 GHz to 18 GHz       |       | 1 to 4   |       | GHz    |                                                     |
| RESOLUTION             |       |          |       |        | 4 bits per filter (LPF and HPF)                     |
| HPF 1                  |       | 0.12     |       | GHz    |                                                     |
| HPF 2                  |       | 0.26     |       | GHz    |                                                     |
| HPF 3                  |       | 0.36     |       | GHz    |                                                     |
| HPF 4                  |       | 0.49     |       | GHz    |                                                     |
| LPF 1                  |       | 0.12     |       | GHz    |                                                     |
| LPF 2                  |       | 0.26     |       | GHz    |                                                     |
| LPF 3                  |       | 0.40     |       | GHz    |                                                     |
| LPF 4                  |       | 0.42     |       | GHz    |                                                     |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                   | Min   | Typ    | Max   | Unit   | Test Conditions/Comments                 |
|---------------------------------------------|-------|--------|-------|--------|------------------------------------------|
| WIDEBAND REJECTION FREQUENCY OFFSET         |       |        |       |        | Measured at 35 dB rejection              |
| HPF 1                                       |       |        |       |        |                                          |
| State 0                                     |       | -0.65  |       | ΔGHz   |                                          |
| State 15                                    |       | -1.25  |       | ΔGHz   |                                          |
| HPF 2                                       |       |        |       |        |                                          |
| State 0                                     |       | -0.85  |       | ΔGHz   |                                          |
| State 15                                    |       | -2.00  |       | ΔGHz   |                                          |
| HPF 3                                       |       |        |       |        |                                          |
| State 0                                     |       | -1.15  |       | ΔGHz   |                                          |
| State 15                                    |       | -1.90  |       | ΔGHz   |                                          |
| HPF 4                                       |       |        |       |        |                                          |
| State 0                                     |       | -2.35  |       | ΔGHz   |                                          |
| State 15                                    |       | -3.10  |       | ΔGHz   |                                          |
| LPF 1                                       |       |        |       |        |                                          |
| State 0                                     |       | 0.70   |       | ΔGHz   |                                          |
| State 15                                    |       | 1.00   |       | ΔGHz   |                                          |
| LPF 2                                       |       |        |       |        |                                          |
| State 0                                     |       | 0.90   |       | ΔGHz   |                                          |
| State 15                                    |       | 1.60   |       | ΔGHz   |                                          |
| LPF 3                                       |       |        |       |        |                                          |
| State 0                                     |       | 2.30   |       | ΔGHz   |                                          |
| State 15                                    |       | 3.10   |       | ΔGHz   |                                          |
| LPF 4                                       |       |        |       |        |                                          |
| State 0                                     |       | 2.50   |       | ΔGHz   |                                          |
| State 15                                    |       | 3.95   |       | ΔGHz   |                                          |
| RE-ENTRY FREQUENCY                          |       | 32     |       | GHz    | ≤35 dB                                   |
| RETURN LOSS                                 |       | 10     |       | dB     |                                          |
| DYNAMIC PERFORMANCE                         |       |        |       |        |                                          |
| Input Power for 0.1 dB Compression (P0.1dB) |       | 18     |       | dBm    |                                          |
| Input Third-Order Intercept (IP3)           |       | 45     |       | dBm    | Input power (P IN ) 1 = 5 dBm per tone   |
| Group Delay Flatness                        |       | <0.8   |       | ns     |                                          |
| Amplitude Settling Time                     |       | 1      |       | µs     | To within ≤1 dB of static insertion loss |
| Phase Settling Time                         |       | 2      |       | µs     | To within ≤2° of static insertion phase  |
| Drift Rate                                  |       |        |       |        |                                          |
| Amplitude                                   |       | -0.018 |       | dB/°C  | At 8 GHz                                 |
| Frequency                                   |       | -100   |       | ppm/°C | 6 GHz to 10 GHz constant bandwidth state |
| RESIDUAL PHASE NOISE                        |       |        |       |        |                                          |
| At 1 MHz Offset                             |       | -165   |       | dBc/Hz |                                          |
| SUPPLY VOLTAGE                              |       |        |       |        |                                          |
| VSS1                                        | -2.6  | -2.5   | -2.4  | V      |                                          |
| VDD1                                        | 2.4   | 2.5    | 2.6   | V      |                                          |
| VDD2                                        | 3.2   | 3.3    | 3.4   | V      |                                          |
| SUPPLY CURRENT (STATIC)                     |       |        |       |        |                                          |
| VSS1                                        | -50   |        |       | µA     |                                          |
| VDD1                                        |       |        | 200   | µA     |                                          |
| VDD2                                        |       |        | 50    | µA     |                                          |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                             | Min   | Typ       | Max   | Unit   | Test Conditions/Comments                                                                                                              |
|-------------------------------------------------------|-------|-----------|-------|--------|---------------------------------------------------------------------------------------------------------------------------------------|
| SUPPLY CURRENT (DYNAMIC) VDD2                         |       | f SCLK /2 |       | mA     | Where f SCLK is the SCLK toggle frequency in MHz, for example, continuous SPI writing at 10 MHz yields 5 mA of dynamic supply current |
| LOGIC INPUT AND OUTPUT (RST, CS, SCLK, SDI, SDO, SFL) |       |           |       |        |                                                                                                                                       |
| Logic Low                                             | -0.3  | 0         | +0.8  | V      |                                                                                                                                       |
| Logic High                                            | 1.2   | 3.3       | 3.6   | V      |                                                                                                                                       |

## TIMING SPECIFICATIONS

## Table 2.

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

## SPECIFICATIONS

## Timing Diagram

Figure 2. Timing Diagram

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 3. Parameter                                               | Rating                 |
|------------------------------------------------------------------|------------------------|
| SUPPLY                                                           |                        |
| VDD1                                                             | -0.3 V to +2.8 V       |
| VDD2                                                             | -0.3 V to +3.6 V       |
| VSS1                                                             | -2.75 V to +0.3 V      |
| Digital Control Inputs                                           |                        |
| Voltage                                                          | -0.3 V to VDD2 + 0.3 V |
| Current                                                          | 2 mA                   |
| RF Input Power 1                                                 | 20 dBm                 |
| Temperature                                                      |                        |
| Operating Range                                                  | -55°C to +105°C        |
| Storage Range                                                    | -65°C to +150°C        |
| Junction to Maintain 1,000,000 Hours Mean Time to Failure (MTTF) | 135°C                  |
| Nominal Junction (T PADDLE = 85°C)                               | 90°C                   |
| Moisture Sensitivity Level (MSL) Rating                          | MSL3                   |

- 1 Maximum RF input power valid for frequencies above 1 GHz. For incident signals below this frequency, contact Analog Devices, Inc., to discuss the use case scenario.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001-2010.

Field induced charged device model (FICDM) per JEDEC JESD22C101E and ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADMV8818-EP

## Table 4. ADMV8818-EP, 56-Terminal LGA

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | 2000                      | 2       |
| FICDM       | 500 1                     | III     |
|             | 750 2                     | C2b     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.                                                                       | Mnemonic   | Description                                                                                                                                                                                                                                              |
|-------------------------------------------------------------------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 to 6, 8 to 13, 15, 17, 19, 21, 23, 25 to 30, 32 to 35, 37, 38, 40, 42 to 56 | GND        | Ground. Connect the GND pins to the RF and dc ground.                                                                                                                                                                                                    |
| 7                                                                             | RFIN       | RF Input Pin. RFIN is dc-coupled and matched to 50 Ω. Do not apply an external voltage to RFIN.                                                                                                                                                          |
| 14                                                                            | RST        | Chip Reset. 3.3 V logic. Active low. The RST pin is internally pulled high with a 260 kΩ resistor.                                                                                                                                                       |
| 16                                                                            | SCLK       | Serial Peripheral Interface (SPI) Clock. 3.3 V logic. The SCLK pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                      |
| 18                                                                            | CS         | SPI Chip Select. 3.3 V logic. Active low. The CS pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                    |
| 20                                                                            | SDO        | SPI Data Output. 3.3 V logic. The SDO pin is internally pulled low with a 260 kΩ resistor. When SDO is active, impedance is greater than 350 Ω. When it is not active, impedance is less than 350 Ω.                                                     |
| 22                                                                            | SDI        | SPI Data Input. 3.3 V logic. The SDI pin is internally pulled low with a 260 kΩ resistor.                                                                                                                                                                |
| 24                                                                            | SFL        | SPI Fast Latch Enable. 3.3 V logic. Set SFL high to enable fast latching of filter states on each rising edge of CS. While SFL is in this mode, the SCLK, SDO, and SDI pins are not active. The SFL pin is internally pulled low with a 260 kΩ resistor. |
| 31                                                                            | VDD1       | 2.5 V Power Supply Pin. Place 0.1 µF and 100 pF decoupling capacitors close to VDD1.                                                                                                                                                                     |
| 36                                                                            | RFOUT      | RF Output Pin. RFOUT is dc-coupled and matched to 50 Ω. Do not apply an external voltage to RFOUT.                                                                                                                                                       |
| 39                                                                            | VDD2       | 3.3 V Power Supply Pin. Place 0.1 µF and 100 pF decoupling capacitors close to VDD2.                                                                                                                                                                     |
| 41                                                                            | VSS1       | -2.5 V Power Supply Pin. Place 0.1 µF and 100 pF decoupling capacitors close to VSS1.                                                                                                                                                                    |
|                                                                               | EPAD       | Exposed Pad. The exposed pad must be connected to the RF and dc ground.                                                                                                                                                                                  |

## TYPICAL PERFORMANCE CHARACTERISTICS

## 4 GHZ CONSTANT BANDWIDTH DATA

<!-- image -->

Figure 4. Insertion Loss vs. RF Frequency at 4 GHz Constant Bandwidth

<!-- image -->

Figure 5. Input and Output Return Loss and Insertion Loss vs. RF Frequency, HPF 1 and LPF 2 Band at 4 GHz Constant Bandwidth

<!-- image -->

Figure 6. Input and Output Return Loss and Insertion Loss vs. RF Frequency, HPF 2 and LPF 3 Band at 4 GHz Constant Bandwidth

<!-- image -->

Figure 7. Insertion Loss vs. RF Frequency at 4 GHz Constant Bandwidth and Various Temperatures

Figure 8. Input and Output Return Loss and Insertion Loss vs. RF Frequency, HPF 3 and LPF 4 Band at 4 GHz Constant Bandwidth

<!-- image -->

Figure 9. Input and Output Return Loss and Insertion Loss vs. RF Frequency, HPF 4 and LPF 4 Band at 4 GHz Constant Bandwidth

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Insertion Loss and Group Delay vs. RF Frequency, HPF 1 and LPF 2 at 4 GHz Constant Bandwidth

<!-- image -->

Figure 11. Insertion Loss and Group Delay vs. RF Frequency, HPF 2 and LPF 3 at 4 GHz Constant Bandwidth

<!-- image -->

Figure 12. Input IP3 vs. RF Frequency, 4 GHz, 3 dB Bandwidth Configuration at Various Temperatures

<!-- image -->

Figure 13. Insertion Loss and Group Delay vs. RF Frequency, HPF 3 and LPF 4 at 4 GHz Constant Bandwidth

Figure 14. Insertion Loss and Group Delay vs. RF Frequency, HPF 4 and LPF 4 at 4 GHz Constant Bandwidth

<!-- image -->

Figure 15. Residual Phase Noise vs. Offset Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## BOARD LOSS AND BYPASS CONFIGURATION DATA

<!-- image -->

Figure 16. Insertion Loss vs. RF Frequency for Board Loss and Bypass Configuration

Figure 17. Input and Output Return Loss vs. RF Frequency in Bypass Configuration

<!-- image -->

Figure 18. Input IP3 vs. RF Frequency for Various Temperatures, Bypass Configuration

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## HPF AND LPF CONFIGURATION

<!-- image -->

Figure 19. 3 dB Cutoff Frequency vs. HPF State, HPF Configuration

<!-- image -->

Figure 20. Insertion Loss vs. RF Frequency, HPF 1 Configuration Swept HPF State

<!-- image -->

Figure 21. Insertion Loss vs. RF Frequency, HPF 2 Configuration Swept HPF State

<!-- image -->

Figure 22. 3 dB Cutoff Frequency vs. LPF State, LPF Configuration

Figure 23. Insertion Loss vs. RF Frequency, LPF 1 Configuration Swept LPF State

<!-- image -->

Figure 24. Insertion Loss vs. RF Frequency, LPF 2 Configuration Swept LPF State

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 25. Insertion Loss vs. RF Frequency, HPF 3 Configuration Swept HPF State

<!-- image -->

Figure 26. Insertion Loss vs. RF Frequency, HPF 4 Configuration Swept HPF State

<!-- image -->

Figure 27. Insertion Loss vs. RF Frequency, Center Frequency (f CENTER ) = 10 GHz in Various 3 dB Bandwidth for HPF 3 and LPF 3 Configuration

Figure 28. Insertion Loss vs. RF Frequency, LPF 3 Configuration Swept LPF State

<!-- image -->

Figure 29. Insertion Loss vs. RF Frequency, LPF 4 Configuration Swept LPF State

<!-- image -->

## THEORY OF OPERATION

## CHIP ARCHITECTURE

The ADMV8818-EP is a highly flexible filter that can achieve tunable band-pass, high-pass, low-pass, all pass, or all reject responses from 2 GHz to 18 GHz. Due to the flexible architecture of the ADMV8818-EP with four SP5T switches coupled with digitally tunable high-pass and low-pass filter arrays, the device provides full coverage over the frequency band without any dead zones. Figure 1 is a conceptual block diagram of the ADMV8818-EP.

The ADMV8818-EP consists of two sections, the input and the output section. The input section has four high-pass filters and an optional bypass configuration that is selectable by the two SP5T RFIN switches. Similarly, the output section has four low-pass filters and an optional bypass configuration that is selectable by the two SP5T RFOUT switches. Because the input and output sections are independent from one another, the chip can be configured for any combination of high-pass filter, low-pass filter, or bypass configuration.

The two SP5T RFIN switches are controlled simultaneously with a 3-bit digital control. Likewise, the two SP5T RFOUT switches are controlled simultaneously with a 3-bit digital control. This control scheme creates a total of 25 possible combinations of switch settings, achieving many possible filter responses.

Figure 30 shows an example of the signal path when the two SP5T RFIN and two SP5T RFOUT switches are configured for the HPF 1 and LPF 1, respectively. Using this switch setting, a band-pass or a no pass response can be created in the 2 GHz to 3.8 GHz frequency range, depending on the filter settings for the HPF 1 and LPF 1.

Figure 30. ADMV8818-EP Configured for HPF 1 and LPF 1

<!-- image -->

Similarly, any of the filters can be bypassed, creating a low-pass or a high-pass response, as shown in Figure 31, where the HPF is bypassed and LPF 3 filter is selected. This configuration enables a tunable LPF response in the 8 GHz to 12 GHz frequency range.

Figure 31. ADMV8818-EP Configured for LPF 3

<!-- image -->

Moreover, any of the high-pass filters can be coupled with any of the low-pass filters, achieving virtually no dead zones in the 2 GHz to 18 GHz frequency range and a wide band-pass response. Figure 32 shows the conceptual block diagram of ADMV8818-EP when HPF 3 and LPF 2 are selected.

Figure 32. ADMV8818-EP Configured for HPF 3 and LPF 2

<!-- image -->

## TUNABLE HIGH-PASS FILTERS

Figure 33 shows a simplified schematic of the HPF 1, which is a Chebyshev type filter. The f 3dB can be adjusted by varying Capacitor C1 to Capacitor C4. These tunable capacitors are constructed with 4-bit digital capacitor arrays, providing 16 distinct values. The step size of these tunable capacitors is adjusted so that each digital binary code increment creates approximately the same increment in the f 3dB .

Figure 33. HPF 1 Simplified Schematic

<!-- image -->

## THEORY OF OPERATION

The HPF 2, HPF 3, and HPF 4 filters share the same architecture as the HPF 1 filter. However, the filter order is increased with respect to the frequency to achieve a similar rejection response for all filters.

## TUNABLE LOW-PASS FILTERS

Figure 34 shows a simplified schematic of the LPF 1, which is a Chebyshev type filter. The f 3dB can be adjusted by varying Capacitor C1 to Capacitor C4. These tunable capacitors are constructed with 4-bit digital capacitor arrays, providing 16 distinct values. The step size of these tunable capacitors is adjusted so that each digital binary code increment creates approximately the same increment in the f 3dB .

<!-- image -->

The LPF 2, LPF 3, and LPF 4 filters share the same architecture as the LPF 1 filter. However, the filter order is increased with respect to the frequency to achieve a similar rejection response for all filters.

## SPI CONFIGURATION

The SPI of the ADMV8818-EP allows configuration of the device for specific functions or operations via the 5-pin SPI port. This interface provides users with added flexibility and customization. The SPI consists of five control lines: SFL, SCLK, SDI, SDO, and CS. For normal SPI operations, keep the SFL pin low.

The SPI protocol consists of an R/W bit followed by 15 register address bits and 8 data bits. The address field and data field are organized MSB first and end with the LSB.

Set the MSB to 0 for a write operation and set the MSB to 1 for a read operation. The write cycle must be sampled on the rising edge of SCLK. The 24 bits of the serial write address and data are shifted in on the SDI control line, MSB to LSB. The ADMV8818-EP input logic level for the write cycle supports a 3.3 V interface.

For a read cycle, the R/W bit and the 15 register address bits shift in on the rising edge of SCLK on the SDI control line. Then, 8 bits of serial read data shift out on the SDO control line, MSB first, on the falling edge of SCLK. The output logic level for a read cycle is 3.3 V. The output drivers of the SDO are enabled after the last rising edge of SCLK of the instruction cycle and remain active until the end of the read cycle. In a read operation, when CS is deasserted, SDO returns to high impedance until the next read transaction. CS is active low and must be deasserted at the end of the write or read sequence.

An active low input on CS starts and gates a communication cycle. The CS pin allows more than one device to be used on the same serial communications lines. The SDO pin goes to a high impedance state when the CS input is high. During the communication cycle, the chip select must stay low. The SPI communications protocol follows the Analog Devices SPI standard. For more information, see the ADI-SPI Serial Control Interface Standard (Rev 1.0).

## RF CONNECTIONS

The RFIN and RFOUT pins of the ADMV8818-EP are dc-coupled to on-chip RF switches. If a dc voltage is present on the RFIN and RFOUT pins from other components within the system, it is recommended to place dc blocking capacitors in series with these pins. The dc blocking capacitors must be selected based on the operating frequency of the filter. Generally, a value greater than 100 pF is sufficient to minimize insertion loss at the lower frequencies of operation. At higher frequencies of operation, it may be necessary to consider the parasitic elements of the selected capacitor. Figure 35 shows a general model of a capacitor with the parasitic elements. The parasitic series inductance (L ESL ) is typically of most concern given that its impedance can become dominant at frequencies above 10 GHz. The other parasitic elements, including the leakage resistance (R L ), the dielectric absorption resistance (R DA ), the dielectric absorption capacitance (C DA ), and electrical series resistance (R ESR ) are less critical elements for consideration but are shown here for completeness.

Figure 35. General Model of a Capacitor

<!-- image -->

## MODE SELECTION

The ADMV8818-EP has two modes of operation: SPI write and SPI fast latch. SPI write mode is the normal operating mode, whereas SPI fast latch mode is used to sequence through the on-chip lookup table (LUT) using the internal state machine. To select SPI write mode, set the SFL pin low. For operation in SPI fast latch mode, program the on-chip lookup table and fast latch parameters with the SFL pin low, and then bring the SFL pin high to enter this mode. Figure 36 shows a simplified representation of the SPI with the register map and internal state machine.

Figure 36. Simplified SPI Diagram

<!-- image -->

## THEORY OF OPERATION

## SPI WRITE MODE

SPI write mode has five write groupings, WR0 through WR4 in Register 0x020 through Register 0x029. The groupings can be thought of as a small lookup table for SPI write mode. Each grouping consists of the following:

- RFIN switch position
- RFIN switch set
- RFOUT switch position
- RFOUT switch set
- HPF state
- LPF state

See the Register Details section for an example of the write grouping of WR0 (Register 0x020 and Register 0x021).

## SWITCH POSITIONS

The RFIN switch position dictates where the HPF state bits are assigned, and the RFOUT switch position dictates where the LPF state bits are assigned. For example, in the WR0\_SW write group (Register 0x020), when SW\_IN\_WR0 is set for Band 1 and SW\_OUT\_WR0 is set for Band 2, HPF\_WR0 and LPF\_WR0 (Register 0x021) are applied to HPF 1 and LPF 2, respectively.

## SWITCH SET

The RFIN switch set bit is used to determine if the RFIN switch position is moved to that setting. Similarly, the RFOUT switch set bit is used to determine if the RFOUT switch position is moved to that setting. This functionality is useful for configuring a filter to a known state and leaving the switch position unchanged (switch set bits low). For most applications, the switch set bits are high.

## FILTER SETTINGS

Each high-pass filter and low-pass filter contains 16 states (4 bits). A value of zero corresponds to setting the f 3dB of the filter to its lowest possible frequency. Conversely, a value of 15 corresponds to setting the f 3dB of the filter to its highest possible frequency.

## WRITE GROUP PRIORITY

In SPI write mode, because there are five write groupings, it is possible that multiple RFIN switch set bits or RFOUT switch set bits are high. The behavior of the switches depends on the type of SPI transaction, either streaming or single instruction.

In general, there are two types of SPI streaming transactions, Endian register ascending order and descending order. The ADMV8818-EP supports the ascending order only. To enable SPI streaming with Endian register ascending order, program Register 0x000 to 0x3C.

For SPI streaming transactions (recommended), the priority order for the RFIN switch set bits and the RFOUT switch set bits is WR0 to WR4.

The SPI streaming transaction for Register 0x020 to Register 0x029 then points to Address 0x020 and streams out 10 bytes of data. The SPI streaming transaction is 96 bits in total (R/W bit + 15 address bits + 80 data bits).

An example of the priority order for an SPI streaming transaction follows: if the switch set bits are high for both WR1 and WR2, the resulting switch positions are the positions programmed in WR1.

For SPI single instruction transactions, the most recently programmed RFIN switch set and RFOUT switch set takes effect to move the switch positions. To use SPI single instruction transactions, the switch register must be written first followed by the filter setting register. For example, to use write grouping WR0, Register 0x020 is written first using a 24-bit transaction (R/W bit + 15 address bits + 8 data bits, followed by writing Register 0x021 also using a 24-bit transaction.

## FREQUENCY TERMINOLOGY

Because the ADMV8818-EP is designed to operate over a wide frequency range, there is frequency dependent insertion loss that results in a negative slope vs. frequency. Additionally, depending upon the selected filter and the state, there may also be ripple within the pass band. Given these characteristics, a proper definition is necessary to establish a reference frequency (f REF ) from which the f 3dB for each filter can be computed.

Analog Devices has found that a consistent methodology for determining the f REF and f 3dB is to rely on the group delay performance of a filter. The following is the methodology used for determining the ADMV8818-EP specifications:

1. Find the peak group delay (GD PEAK ) and peak group delay frequency (f PEAK ) as the filter insertion loss (S21) begins to roll off.
2. For a low-pass filter, divide f PEAK by 2 to find the average frequency (f AVG ). For a high-pass filter, multiply f PEAK by 2. Once f AVG is calculated, determine the group delay at this frequency. Generally, the group delay is flat and approximately equal to the average at this particular frequency (f AVG ).
3. Take the mathematical mean of the group delay from Step 1 and Step 2 to find the reference group delay (GD REF ), and then find the corresponding f REF and reference insertion loss (IL REF ) for this group delay.
4. Subtract 3 dB from the IL REF to find the 3 dB insertion loss (IL 3dB ), and then find the corresponding f 3dB .

## SPI FAST LATCH MODE

The ADMV8818-EP has a 128 state lookup table and an internal state machine that is useful for quickly changing filter states in SPI fast latch mode. When the SFL pin is high, SPI fast latch mode is enabled, and the internal state machine sequences on each rising edge of the CS pin.

## THEORY OF OPERATION

The lookup table has 128 groupings, LUT0 through LUT127, in Register 0x100 through Register 0x1FF. Each grouping consists of the same type of parameters as those of SPI write mode.

The functionality of the switch positions and filter state bits for SPI fast latch mode is similar to those of SPI write mode. That is, the filter state bits are assigned based on the switch position bits. However, the switch set parameters do not contain any priority. If the RFIN switch set bits and RFOUT switch set bits are enabled for a particular LUT, the switch positions change.

The functionality of the internal state machine is such that on each rising edge of the CS pin, the internal state machine sequences a pointer based on the programmed direction. The internal state machine has the following parameters:

- FAST\_LATCH\_POINTER (Register 0x010)
- FAST\_LATCH\_LOAD (Register 0x010)
- FAST\_LATCH\_STOP (Register 0x011)
- FAST\_LATCH\_START (Register 0x012)
- FAST\_LATCH\_DIRECTION (Register 0x013)
- FAST\_LATCH\_STATE (Register 0x014)

The FAST\_LATCH\_STATE is the next LUT grouping that is selected on the next rising edge of the CS pin. The FAST\_LATCH\_ STATE is considered the internal pointer location.

The internal pointer location can be changed by using the FAST\_ LATCH\_LOAD and FAST\_LATCH\_POINTER bits. When the FAST\_LATCH\_LOAD bit is set high, the FAST\_LATCH\_ POINTER value is loaded into the internal pointer. The FAST\_ LATCH\_LOAD bit is self resetting after the load operation completes.

When the FAST\_LATCH\_DIRECTION bit is set to zero, the sequencing direction is incremental. When the FAST\_LATCH\_ DIRECTION bit is set to one, the sequencing direction is decremental.

The FAST\_LATCH\_START and FAST\_LATCH\_STOP bits are used to set the start and stop location, respectively. For incremental di- rection, the internal state machine sequences from the start location to the stop location and then rolls over to the start location. For the decremental direction, the sequence is from the stop location to the start location and then rolls over to the stop location.

The FAST\_LATCH\_STATE value can fall outside of the start and stop locations, which occurs if the start and stop locations are updated and the internal pointer is left unchanged from its prior value. If this situation occurs, additional LUT groupings are selected before the FAST\_LATCH\_STATE value eventually falls within the start and stop locations. For example, if the FAST\_ LATCH\_STATE value is 12, the direction is incremental, the start location is 15, and the stop location is 31, the LUT groupings selected on the next six rising edges of the CS pin are the LUT grouping numbers, 12, 13, 14, 15, 16, and 17.

## CHIP RESET

There are two methods that can be used to reset the ADMV8818EP registers to their default power-on state, a hard reset and a soft reset. The hard reset utilizes the RST pin, and the soft reset utilizes Register 0x000.

To perform a hard reset, momentarily bring the RST pin low and then high. See Figure 2 for the minimum required duration time for the RST pin to be low.

To perform a soft reset, program Register 0x000 to a value of 0x81. This action sets the SOFTRESET and SOFTRESET\_ bits high to initiate the reset. The SOFTRESET and SOFTRESET\_ bits are self resetting once the reset operation is complete.

Regardless of the reset method used, it is recommended to perform the following after the chip resets:

- Program Register 0x000 to 0x3C to enable the SDO pin and allow SPI streaming with Endian ascending order.
- Read back all registers on the chip.

## APPLICATIONS INFORMATION

## PCB DESIGN GUIDELINES

The PCB used to implement the ADMV8818-EP must use a high quality dielectric material between the top metallization layer and internal ground layer, such as the Rogers 4003 or the Rogers 4350. All other dielectric layers of the PCB can be standard material, such as the Isola 370HR. The characteristic impedance of the transmission lines to the RFIN and RFOUT pins of the ADMV8818-EP must be carefully controlled to 50 Ω to ensure optimal RF performance. Connect the GND pins and exposed pads of the ADMV8818-EP directly to the ground plane of the PCB. Use a sufficient number of via holes to connect the top and bottom ground planes of the PCB.

## PROGRAMMING FLOW CHART

Figure 37. Programming Flow Chart

<!-- image -->

## REGISTER SUMMARY

## Table 6. ADMV8818-EP Register Summary

| Reg   | Name                  | Bits   | Bit 7                                    | Bit 6                                    | Bit 5                                    | Bit 4                                    | Bit 3                           | Bit 2                           | Bit 1                           | Bit 0                           | Reset   | R/W   |
|-------|-----------------------|--------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------|-------|
| 0x000 | ADI_SPI_CONFI G_A     | [7:0]  | SOFTRESET _                              | LSB_FIRST _                              | ENDIAN_                                  | SDOACTIVE _                              | SDOACTIV E                      | ENDIAN                          | LSB_FIRS T                      | SOFTRESE T                      | 0x00    | R/W   |
| 0x001 | ADI_SPI_CONFI G_B     | [7:0]  | SINGLE_INS TRUCTION                      | CSB_STALL                                | CONTROL LER_TARG ET_RB                   | RESERVED                                 | RESERVED                        | RESERVED                        | RESERVED                        | CONTROLL ER_TARGE T_TRANSF ER   | 0x00    | R/W   |
| 0x003 | CHIPTYPE              | [7:0]  | CHIPTYPE                                 | CHIPTYPE                                 | CHIPTYPE                                 | CHIPTYPE                                 | CHIPTYPE                        | CHIPTYPE                        | CHIPTYPE                        | CHIPTYPE                        | 0x01    | R     |
| 0x004 | PRODUCT_ID_L          | [7:0]  | PRODUCT_ID_L                             | PRODUCT_ID_L                             | PRODUCT_ID_L                             | PRODUCT_ID_L                             | PRODUCT_ID_L                    | PRODUCT_ID_L                    | PRODUCT_ID_L                    | PRODUCT_ID_L                    | 0x18    | R     |
| 0x005 | PRODUCT_ID_H          | [7:0]  | PRODUCT_ID_H                             | PRODUCT_ID_H                             | PRODUCT_ID_H                             | PRODUCT_ID_H                             | PRODUCT_ID_H                    | PRODUCT_ID_H                    | PRODUCT_ID_H                    | PRODUCT_ID_H                    | 0x88    | R     |
| 0x010 | FAST_LATCH_P OINTER   | [7:0]  | FAST_LATCH _LOAD                         | FAST_LATCH_POINTER                       | FAST_LATCH_POINTER                       | FAST_LATCH_POINTER                       | FAST_LATCH_POINTER              | FAST_LATCH_POINTER              | FAST_LATCH_POINTER              | FAST_LATCH_POINTER              | 0x00    | R/W   |
| 0x011 | FAST_LATCH_ST OP      | [7:0]  | RESERVED                                 | FAST_LATCH_STOP                          | FAST_LATCH_STOP                          | FAST_LATCH_STOP                          | FAST_LATCH_STOP                 | FAST_LATCH_STOP                 | FAST_LATCH_STOP                 | FAST_LATCH_STOP                 | 0x7F    | R/W   |
| 0x012 | FAST_LATCH_ST ART     |        | RESERVED                                 | [7:0] FAST_LATCH_START                   | [7:0] FAST_LATCH_START                   | [7:0] FAST_LATCH_START                   | [7:0] FAST_LATCH_START          | [7:0] FAST_LATCH_START          | [7:0] FAST_LATCH_START          | [7:0] FAST_LATCH_START          | 0x00    | R/W   |
| 0x013 | FAST_LATCH_DI RECTION | [7:0]  | RESERVED FAST_LATC H_DIRECTI ON          | RESERVED FAST_LATC H_DIRECTI ON          | RESERVED FAST_LATC H_DIRECTI ON          | RESERVED FAST_LATC H_DIRECTI ON          | RESERVED FAST_LATC H_DIRECTI ON | RESERVED FAST_LATC H_DIRECTI ON | RESERVED FAST_LATC H_DIRECTI ON | RESERVED FAST_LATC H_DIRECTI ON | 0x00    | R/W   |
| 0x014 | FAST_LATCH_ST ATE     | [7:0]  | RESERVED FAST_LATCH_STATE                | RESERVED FAST_LATCH_STATE                | RESERVED FAST_LATCH_STATE                | RESERVED FAST_LATCH_STATE                | RESERVED FAST_LATCH_STATE       | RESERVED FAST_LATCH_STATE       | RESERVED FAST_LATCH_STATE       | RESERVED FAST_LATCH_STATE       | 0x00    | R     |
| 0x020 | WR0_SW                | [7:0]  | SW_IN_SET_ WR0                           | SW_OUT_S ET_WR0                          |                                          | SW_IN_WR0                                |                                 | SW_OUT_WR0                      | SW_OUT_WR0                      | SW_OUT_WR0                      | 0x00    | R/W   |
| 0x021 | WR0_FILTER            | [7:0]  | HPF_WR0                                  | HPF_WR0                                  | HPF_WR0                                  | HPF_WR0                                  |                                 |                                 |                                 |                                 | 0x00    | R/W   |
| 0x022 | WR1_SW                | [7:0]  | SW_IN_SET_ WR1                           | SW_OUT_S ET_WR1                          |                                          | SW_IN_WR1                                |                                 | LPF_WR0 SW_OUT_WR1              | LPF_WR0 SW_OUT_WR1              | LPF_WR0 SW_OUT_WR1              | 0x00    | R/W   |
| 0x023 | WR1_FILTER            | [7:0]  | HPF_WR1                                  | HPF_WR1                                  | HPF_WR1                                  | HPF_WR1                                  |                                 |                                 |                                 |                                 | 0x00    | R/W   |
| 0x024 | WR2_SW                | [7:0]  | SW_IN_SET_ WR2                           | SW_OUT_S ET_WR2                          |                                          | SW_IN_WR2                                |                                 | LPF_WR1 SW_OUT_WR2              | LPF_WR1 SW_OUT_WR2              | LPF_WR1 SW_OUT_WR2              | 0x00    | R/W   |
| 0x025 | WR2_FILTER            | [7:0]  | HPF_WR2                                  | HPF_WR2                                  | HPF_WR2                                  | HPF_WR2                                  |                                 | LPF_WR2                         | LPF_WR2                         | LPF_WR2                         | 0x00    | R/W   |
| 0x026 | WR3_SW                | [7:0]  | SW_IN_SET_ WR3 SW_OUT_S ET_WR3 SW_IN_WR3 | SW_IN_SET_ WR3 SW_OUT_S ET_WR3 SW_IN_WR3 | SW_IN_SET_ WR3 SW_OUT_S ET_WR3 SW_IN_WR3 | SW_IN_SET_ WR3 SW_OUT_S ET_WR3 SW_IN_WR3 |                                 | SW_OUT_WR3                      | SW_OUT_WR3                      | SW_OUT_WR3                      | 0x00    | R/W   |
| 0x027 | WR3_FILTER            | [7:0]  | HPF_WR3                                  | HPF_WR3                                  | HPF_WR3                                  | HPF_WR3                                  |                                 | LPF_WR3                         | LPF_WR3                         | LPF_WR3                         | 0x00    | R/W   |
| 0x028 | WR4_SW                | [7:0]  | SW_IN_SET_ WR4 SW_OUT_S ET_WR4 SW_IN_WR4 | SW_IN_SET_ WR4 SW_OUT_S ET_WR4 SW_IN_WR4 | SW_IN_SET_ WR4 SW_OUT_S ET_WR4 SW_IN_WR4 | SW_IN_SET_ WR4 SW_OUT_S ET_WR4 SW_IN_WR4 |                                 | SW_OUT_WR4                      | SW_OUT_WR4                      | SW_OUT_WR4                      | 0x00    | R/W   |
| 0x029 | WR4_FILTER            | [7:0]  | HPF_WR4                                  | HPF_WR4                                  | HPF_WR4                                  | HPF_WR4                                  |                                 | LPF_WR4                         | LPF_WR4                         | LPF_WR4                         | 0x00    | R/W   |
| 0x100 | LUT0_SW               | [7:0]  | SW_IN_SET_ 0                             | SW_OUT_S ET_0                            |                                          | SW_IN_0                                  |                                 | SW_OUT_0                        | SW_OUT_0                        | SW_OUT_0                        | 0x00    | R/W   |
| 0x101 | LUT0_FILTER           | [7:0]  | HPF_0                                    | HPF_0                                    | HPF_0                                    | HPF_0                                    |                                 | LPF_0                           | LPF_0                           | LPF_0                           | 0x00    | R/W   |
| 0x102 | LUT1_SW               | [7:0]  | SW_IN_SET_ 1                             | SW_OUT_S ET_1                            |                                          | SW_IN_1                                  |                                 | SW_OUT_1                        | SW_OUT_1                        | SW_OUT_1                        | 0x00    | R/W   |
| 0x103 | LUT1_FILTER           | [7:0]  | HPF_1                                    | HPF_1                                    | HPF_1                                    | HPF_1                                    |                                 | LPF_1                           | LPF_1                           | LPF_1                           | 0x00    | R/W   |
| 0x104 | LUT2_SW               | [7:0]  | SW_IN_SET_ SW_OUT_S SW_IN_2              | SW_IN_SET_ SW_OUT_S SW_IN_2              | SW_IN_SET_ SW_OUT_S SW_IN_2              | SW_IN_SET_ SW_OUT_S SW_IN_2              |                                 | SW_OUT_2                        | SW_OUT_2                        | SW_OUT_2                        | 0x00    | R/W   |
| 0x105 | LUT2_FILTER           | [7:0]  | HPF_2                                    | HPF_2                                    | HPF_2                                    | HPF_2                                    |                                 | LPF_2                           | LPF_2                           | LPF_2                           | 0x00    | R/W   |
| 0x106 | LUT3_SW               | [7:0]  | SW_IN_SET_ SW_OUT_S SW_IN_3              | SW_IN_SET_ SW_OUT_S SW_IN_3              | SW_IN_SET_ SW_OUT_S SW_IN_3              | SW_IN_SET_ SW_OUT_S SW_IN_3              |                                 | SW_OUT_3                        | SW_OUT_3                        | SW_OUT_3                        | 0x00    | R/W   |
| 0x107 |                       |        | 3 ET_3                                   | 3 ET_3                                   | 3 ET_3                                   | 3 ET_3                                   |                                 |                                 |                                 |                                 |         |       |
|       | LUT3_FILTER           | [7:0]  | HPF_3                                    | HPF_3                                    | HPF_3                                    | HPF_3                                    |                                 | LPF_3                           | LPF_3                           | LPF_3                           | 0x00    | R/W   |
| 0x108 | LUT4_SW               | [7:0]  | SW_IN_SET_ 4 SW_OUT_S ET_4 SW_IN_4       | SW_IN_SET_ 4 SW_OUT_S ET_4 SW_IN_4       | SW_IN_SET_ 4 SW_OUT_S ET_4 SW_IN_4       | SW_IN_SET_ 4 SW_OUT_S ET_4 SW_IN_4       |                                 | SW_OUT_4 LPF_4                  | SW_OUT_4 LPF_4                  | SW_OUT_4 LPF_4                  | 0x00    | R/W   |

## REGISTER SUMMARY

Table 6. ADMV8818-EP Register Summary (Continued)

| Reg   | Name         | Bits        | Bit 7         | Bit 6          | Bit 4    | Bit 3   | Bit 2 Bit 1      | Bit 0    | Reset   | R/W   |
|-------|--------------|-------------|---------------|----------------|----------|---------|------------------|----------|---------|-------|
| 0x10A | LUT5_SW      | [7:0]       | SW_IN_SET_ 5  | SW_OUT_S ET_5  | SW_IN_5  |         | SW_OUT_5         | SW_OUT_5 | 0x00    | R/W   |
| 0x10B | LUT5_FILTER  | [7:0]       |               | HPF_5          |          |         | LPF_5            |          | 0x00    | R/W   |
| 0x10C | LUT6_SW      | [7:0]       | SW_IN_SET_ 6  | SW_OUT_S ET_6  | SW_IN_6  |         | SW_OUT_6         |          | 0x00    | R/W   |
| 0x10D | LUT6_FILTER  | [7:0]       |               | HPF_6          |          |         | LPF_6            |          | 0x00    | R/W   |
| 0x10E | LUT7_SW      | [7:0]       | SW_IN_SET_ 7  | SW_OUT_S ET_7  | SW_IN_7  |         | SW_OUT_7         |          | 0x00    | R/W   |
| 0x10F | LUT7_FILTER  | [7:0]       |               | HPF_7          |          |         | LPF_7            |          | 0x00    | R/W   |
| 0x110 | LUT8_SW      | [7:0]       | SW_IN_SET_ 8  | SW_OUT_S ET_8  | SW_IN_8  |         | SW_OUT_8         |          | 0x00    | R/W   |
| 0x111 | LUT8_FILTER  | [7:0]       |               | HPF_8          |          |         | LPF_8            |          | 0x00    | R/W   |
| 0x112 | LUT9_SW      | [7:0]       | SW_IN_SET_ 9  | SW_OUT_S ET_9  | SW_IN_9  |         | SW_OUT_9         |          | 0x00    | R/W   |
| 0x113 | LUT9_FILTER  | [7:0]       |               | HPF_9          |          |         | LPF_9            |          | 0x00    | R/W   |
| 0x114 | LUT10_SW     | [7:0]       | SW_IN_SET_ 10 | SW_OUT_S ET_10 | SW_IN_10 |         | SW_OUT_10        |          | 0x00    | R/W   |
| 0x115 | LUT10_FILTER | [7:0]       |               | HPF_10         |          |         | LPF_10           |          | 0x00    | R/W   |
| 0x116 | LUT11_SW     | [7:0]       | SW_IN_SET_ 11 | SW_OUT_S ET_11 | SW_IN_11 |         | SW_OUT_11        |          | 0x00    | R/W   |
| 0x117 | LUT11_FILTER | [7:0]       |               | HPF_11         |          |         | LPF_11           |          | 0x00    | R/W   |
| 0x118 | LUT12_SW     | [7:0]       | SW_IN_SET_ 12 | SW_OUT_S ET_12 | SW_IN_12 |         | SW_OUT_12        |          | 0x00    | R/W   |
| 0x119 | LUT12_FILTER | [7:0]       |               | HPF_12         |          |         | LPF_12           |          | 0x00    | R/W   |
| 0x11A | LUT13_SW     | [7:0]       | SW_IN_SET_ 13 | SW_OUT_S ET_13 | SW_IN_13 |         | SW_OUT_13        |          | 0x00    | R/W   |
| 0x11B | LUT13_FILTER | [7:0]       |               | HPF_13         |          |         | LPF_13           |          | 0x00    | R/W   |
| 0x11C | LUT14_SW     | [7:0]       | SW_IN_SET_ 14 | SW_OUT_S ET_14 | SW_IN_14 |         | SW_OUT_14        |          | 0x00    | R/W   |
| 0x11D | LUT14_FILTER | [7:0]       |               | HPF_14         |          |         | LPF_14           |          | 0x00    | R/W   |
| 0x11E | LUT15_SW     | [7:0]       | SW_IN_SET_ 15 | SW_OUT_S ET_15 | SW_IN_15 |         | SW_OUT_15        |          | 0x00    | R/W   |
| 0x11F | LUT15_FILTER | [7:0]       |               | HPF_15         |          |         | LPF_15           |          | 0x00    | R/W   |
| 0x120 | LUT16_SW     | [7:0]       | SW_IN_SET_ 16 | SW_OUT_S ET_16 | SW_IN_16 |         | SW_OUT_16        |          | 0x00    | R/W   |
| 0x121 | LUT16_FILTER | [7:0]       |               | HPF_16         |          |         | LPF_16           |          | 0x00    | R/W   |
| 0x122 | LUT17_SW     | [7:0]       | SW_IN_SET_ 17 | SW_OUT_S ET_17 | SW_IN_17 |         | SW_OUT_17        |          | 0x00    | R/W   |
| 0x123 | LUT17_FILTER | [7:0]       |               | HPF_17         | SW_IN_18 |         | LPF_17 SW_OUT_18 |          | 0x00    | R/W   |
| 0x124 | LUT18_SW     | [7:0]       | SW_IN_SET_ 18 | SW_OUT_S ET_18 |          |         | LPF_18           |          | 0x00    | R/W   |
| 0x125 | LUT18_FILTER | [7:0] [7:0] |               | HPF_18         |          |         |                  |          | 0x00    | R/W   |
| 0x126 | LUT19_SW     |             | SW_IN_SET_ 19 | SW_OUT_S ET_19 | SW_IN_19 |         | SW_OUT_19        |          | 0x00    | R/W   |
| 0x127 | LUT19_FILTER | [7:0]       |               | HPF_19         |          |         | LPF_19           |          | 0x00    | R/W   |
| 0x128 | LUT20_SW     | [7:0]       | SW_IN_SET_ 20 | SW_OUT_S ET_20 | SW_IN_20 |         | SW_OUT_20        |          | 0x00    | R/W   |
| 0x129 | LUT20_FILTER | [7:0]       |               | HPF_20         |          |         | LPF_20           |          | 0x00    | R/W   |
| 0x12A | LUT21_SW     | [7:0]       | SW_IN_SET_ 21 | SW_OUT_S ET_21 | SW_IN_21 |         | SW_OUT_21        |          | 0x00    | R/W   |

## REGISTER SUMMARY

Table 6. ADMV8818-EP Register Summary (Continued)

| Reg         | Name                  | Bits   | Bit 7         | Bit 6          | Bit 5   | Bit 4    | Bit 3   | Bit 2 Bit 1      | Bit 0     | Reset     | R/W     |
|-------------|-----------------------|--------|---------------|----------------|---------|----------|---------|------------------|-----------|-----------|---------|
| 0x12B       | LUT21_FILTER          | [7:0]  | HPF_21        | HPF_21         | HPF_21  | HPF_21   | LPF_21  | LPF_21           | LPF_21    | 0x00      | R/W     |
| 0x12C       | LUT22_SW              | [7:0]  | SW_IN_SET_ 22 | SW_OUT_S ET_22 |         | SW_IN_22 |         | SW_OUT_22        | SW_OUT_22 | 0x00      | R/W     |
| 0x12D       | LUT22_FILTER          | [7:0]  |               |                | HPF_22  |          |         | LPF_22           |           | 0x00      | R/W     |
| 0x12E       | LUT23_SW              | [7:0]  | SW_IN_SET_ 23 | SW_OUT_S ET_23 |         | SW_IN_23 |         | SW_OUT_23        |           | 0x00      | R/W     |
| 0x12F       | LUT23_FILTER          | [7:0]  |               | HPF_23         |         |          |         | LPF_23           |           | 0x00      | R/W     |
| 0x130       | LUT24_SW              | [7:0]  | SW_IN_SET_ 24 | SW_OUT_S ET_24 |         | SW_IN_24 |         | SW_OUT_24        |           | 0x00      | R/W     |
| 0x131       | LUT24_FILTER          | [7:0]  |               | HPF_24         |         |          |         | LPF_24           |           | 0x00      | R/W     |
| 0x132       | LUT25_SW              | [7:0]  | SW_IN_SET_ 25 | SW_OUT_S ET_25 |         | SW_IN_25 |         | SW_OUT_25        |           | 0x00      | R/W     |
| 0x133       | LUT25_FILTER          | [7:0]  |               |                | HPF_25  |          |         | LPF_25           |           | 0x00      | R/W     |
| 0x134       | LUT26_SW              | [7:0]  | SW_IN_SET_ 26 | SW_OUT_S ET_26 |         | SW_IN_26 |         | SW_OUT_26        |           | 0x00      | R/W     |
| 0x135       | LUT26_FILTER          | [7:0]  |               | HPF_26         |         |          |         | LPF_26           |           | 0x00      | R/W     |
| 0x136       | LUT27_SW              | [7:0]  | SW_IN_SET_ 27 | SW_OUT_S ET_27 |         | SW_IN_27 |         | SW_OUT_27        |           | 0x00      | R/W     |
| 0x137       | LUT27_FILTER          | [7:0]  |               | HPF_27         |         |          |         | LPF_27           |           | 0x00      | R/W     |
| 0x138       | LUT28_SW              | [7:0]  | SW_IN_SET_ 28 | SW_OUT_S ET_28 |         | SW_IN_28 |         | SW_OUT_28        |           | 0x00 0x00 | R/W R/W |
| 0x139 0x13A | LUT28_FILTER LUT29_SW | [7:0]  |               | HPF_28         |         |          |         | LPF_28           |           | 0x00      | R/W     |
|             |                       | [7:0]  | SW_IN_SET_ 29 | SW_OUT_S ET_29 |         | SW_IN_29 |         | SW_OUT_29        |           |           |         |
| 0x13B       | LUT29_FILTER          | [7:0]  |               | HPF_29         |         |          |         | LPF_29           |           | 0x00      | R/W     |
| 0x13C       | LUT30_SW              | [7:0]  | SW_IN_SET_ 30 | SW_OUT_S ET_30 |         | SW_IN_30 |         | SW_OUT_30        |           | 0x00      | R/W     |
| 0x13D       | LUT30_FILTER          | [7:0]  |               | HPF_30         |         |          |         | LPF_30           |           | 0x00      | R/W     |
| 0x13E       | LUT31_SW              | [7:0]  | SW_IN_SET_ 31 | SW_OUT_S ET_31 |         | SW_IN_31 |         | SW_OUT_31 LPF_31 |           | 0x00      | R/W     |
| 0x13F       | LUT31_FILTER          | [7:0]  |               | HPF_31         |         |          |         | SW_OUT_32        |           | 0x00      | R/W     |
| 0x140       | LUT32_SW              | [7:0]  | SW_IN_SET_ 32 | SW_OUT_S ET_32 |         | SW_IN_32 |         |                  |           | 0x00      | R/W     |
| 0x141       | LUT32_FILTER          | [7:0]  |               | HPF_32         |         |          |         | LPF_32           |           | 0x00      | R/W     |
| 0x142       | LUT33_SW              | [7:0]  | SW_IN_SET_ 33 | SW_OUT_S ET_33 |         | SW_IN_33 |         | SW_OUT_33        |           | 0x00      | R/W     |
| 0x143       | LUT33_FILTER          | [7:0]  |               | HPF_33         |         |          |         | LPF_33           |           | 0x00      | R/W     |
| 0x144       | LUT34_SW              | [7:0]  | SW_IN_SET_ 34 | SW_OUT_S ET_34 |         | SW_IN_34 |         | SW_OUT_34        |           | 0x00      | R/W     |
| 0x145       | LUT34_FILTER          | [7:0]  |               |                | HPF_34  |          |         | LPF_34           |           | 0x00      | R/W     |
| 0x146       | LUT35_SW              | [7:0]  | SW_IN_SET_ 35 | SW_OUT_S ET_35 |         | SW_IN_35 |         | SW_OUT_35        |           | 0x00      | R/W     |
| 0x147       | LUT35_FILTER          | [7:0]  |               | HPF_35         |         |          |         | LPF_35           |           | 0x00      | R/W     |
| 0x148       | LUT36_SW              | [7:0]  | SW_IN_SET_ 36 | SW_OUT_S ET_36 |         | SW_IN_36 |         | SW_OUT_36        |           | 0x00      | R/W     |
| 0x149       | LUT36_FILTER          | [7:0]  |               | HPF_36         |         |          |         | LPF_36           |           | 0x00      | R/W     |
| 0x14A       | LUT37_SW              | [7:0]  | SW_IN_SET_ 37 | SW_OUT_S ET_37 |         | SW_IN_37 |         | SW_OUT_37        |           | 0x00      | R/W     |
| 0x14B       | LUT37_FILTER          | [7:0]  |               | HPF_37         |         |          |         | LPF_37           |           | 0x00      | R/W     |

## REGISTER SUMMARY

Table 6. ADMV8818-EP Register Summary (Continued)

| Reg   | Name         | Bits   | Bit 7         | Bit 6          | Bit 4    | Bit 3   | Bit 2     | Bit       | Reset     | R/W   |     |
|-------|--------------|--------|---------------|----------------|----------|---------|-----------|-----------|-----------|-------|-----|
| 0x14C | LUT38_SW     | [7:0]  | SW_IN_SET_ 38 | SW_OUT_S ET_38 | SW_IN_38 |         | SW_OUT_38 | SW_OUT_38 | SW_OUT_38 | 0x00  | R/W |
| 0x14D | LUT38_FILTER | [7:0]  |               | HPF_38         |          |         | LPF_38    | LPF_38    | LPF_38    | 0x00  | R/W |
| 0x14E | LUT39_SW     | [7:0]  | SW_IN_SET_ 39 | SW_OUT_S ET_39 | SW_IN_39 |         | SW_OUT_39 | SW_OUT_39 | SW_OUT_39 | 0x00  | R/W |
| 0x14F | LUT39_FILTER | [7:0]  |               | HPF_39         |          |         | LPF_39    | LPF_39    | LPF_39    | 0x00  | R/W |
| 0x150 | LUT40_SW     | [7:0]  | SW_IN_SET_ 40 | SW_OUT_S ET_40 | SW_IN_40 |         | SW_OUT_40 | SW_OUT_40 | SW_OUT_40 | 0x00  | R/W |
| 0x151 | LUT40_FILTER | [7:0]  |               | HPF_40         |          |         | LPF_40    | LPF_40    | LPF_40    | 0x00  | R/W |
| 0x152 | LUT41_SW     | [7:0]  | SW_IN_SET_ 41 | SW_OUT_S ET_41 | SW_IN_41 |         | SW_OUT_41 | SW_OUT_41 | SW_OUT_41 | 0x00  | R/W |
| 0x153 | LUT41_FILTER | [7:0]  |               | HPF_41         |          |         | LPF_41    | LPF_41    | LPF_41    | 0x00  | R/W |
| 0x154 | LUT42_SW     | [7:0]  | SW_IN_SET_ 42 | SW_OUT_S ET_42 | SW_IN_42 |         | SW_OUT_42 | SW_OUT_42 | SW_OUT_42 | 0x00  | R/W |
| 0x155 | LUT42_FILTER | [7:0]  |               | HPF_42         |          |         | LPF_42    | LPF_42    | LPF_42    | 0x00  | R/W |
| 0x156 | LUT43_SW     | [7:0]  | SW_IN_SET_ 43 | SW_OUT_S ET_43 | SW_IN_43 |         | SW_OUT_43 | SW_OUT_43 | SW_OUT_43 | 0x00  | R/W |
| 0x157 | LUT43_FILTER | [7:0]  |               | HPF_43         |          |         | LPF_43    | LPF_43    | LPF_43    | 0x00  | R/W |
| 0x158 | LUT44_SW     | [7:0]  | SW_IN_SET_ 44 | SW_OUT_S ET_44 | SW_IN_44 |         | SW_OUT_44 | SW_OUT_44 | SW_OUT_44 | 0x00  | R/W |
| 0x159 | LUT44_FILTER | [7:0]  |               | HPF_44         |          |         | LPF_44    | LPF_44    | LPF_44    | 0x00  | R/W |
| 0x15A | LUT45_SW     | [7:0]  | SW_IN_SET_ 45 | SW_OUT_S ET_45 | SW_IN_45 |         | SW_OUT_45 | SW_OUT_45 | SW_OUT_45 | 0x00  | R/W |
| 0x15B | LUT45_FILTER | [7:0]  |               | HPF_45         |          |         | LPF_45    | LPF_45    | LPF_45    | 0x00  | R/W |
| 0x15C | LUT46_SW     | [7:0]  | SW_IN_SET_ 46 | SW_OUT_S ET_46 | SW_IN_46 |         | SW_OUT_46 | SW_OUT_46 | SW_OUT_46 | 0x00  | R/W |
| 0x15D | LUT46_FILTER | [7:0]  |               | HPF_46         |          |         | LPF_46    | LPF_46    | LPF_46    | 0x00  | R/W |
| 0x15E | LUT47_SW     | [7:0]  | SW_IN_SET_ 47 | SW_OUT_S ET_47 | SW_IN_47 |         | SW_OUT_47 | SW_OUT_47 | SW_OUT_47 | 0x00  | R/W |
| 0x15F | LUT47_FILTER | [7:0]  |               | HPF_47         |          |         | LPF_47    | LPF_47    | LPF_47    | 0x00  | R/W |
| 0x160 | LUT48_SW     | [7:0]  | SW_IN_SET_ 48 | SW_OUT_S ET_48 | SW_IN_48 |         | SW_OUT_48 | SW_OUT_48 | SW_OUT_48 | 0x00  | R/W |
| 0x161 | LUT48_FILTER | [7:0]  |               | HPF_48         |          |         | LPF_48    | LPF_48    | LPF_48    | 0x00  | R/W |
| 0x162 | LUT49_SW     | [7:0]  | SW_IN_SET_ 49 | SW_OUT_S ET_49 | SW_IN_49 |         | SW_OUT_49 | SW_OUT_49 | SW_OUT_49 | 0x00  | R/W |
| 0x163 | LUT49_FILTER | [7:0]  |               | HPF_49         |          |         | LPF_49    | LPF_49    | LPF_49    | 0x00  | R/W |
| 0x164 | LUT50_SW     | [7:0]  | SW_IN_SET_ 50 | SW_OUT_S ET_50 | SW_IN_50 |         | SW_OUT_50 | SW_OUT_50 | SW_OUT_50 | 0x00  | R/W |
| 0x165 | LUT50_FILTER | [7:0]  |               | HPF_50         |          |         | LPF_50    | LPF_50    | LPF_50    | 0x00  | R/W |
| 0x166 | LUT51_SW     | [7:0]  | SW_IN_SET_ 51 | SW_OUT_S ET_51 | SW_IN_51 |         | SW_OUT_51 | SW_OUT_51 | SW_OUT_51 | 0x00  | R/W |
| 0x167 | LUT51_FILTER | [7:0]  |               | HPF_51         |          |         | LPF_51    | LPF_51    | LPF_51    | 0x00  | R/W |
| 0x168 | LUT52_SW     | [7:0]  | SW_IN_SET_ 52 | SW_OUT_S ET_52 | SW_IN_52 |         | SW_OUT_52 | SW_OUT_52 | SW_OUT_52 | 0x00  | R/W |
| 0x169 | LUT52_FILTER | [7:0]  |               | HPF_52         |          |         | LPF_52    | LPF_52    | LPF_52    | 0x00  | R/W |
| 0x16A | LUT53_SW     | [7:0]  | SW_IN_SET_ 53 | SW_OUT_S ET_53 | SW_IN_53 |         | SW_OUT_53 | SW_OUT_53 | SW_OUT_53 | 0x00  | R/W |
| 0x16B | LUT53_FILTER | [7:0]  |               | HPF_53         |          |         | LPF_53    | LPF_53    | LPF_53    | 0x00  | R/W |
| 0x16C | LUT54_SW     | [7:0]  | SW_IN_SET_ 54 | SW_OUT_S ET_54 | SW_IN_54 |         | SW_OUT_54 | SW_OUT_54 | SW_OUT_54 | 0x00  | R/W |

## REGISTER SUMMARY

Table 6. ADMV8818-EP Register Summary (Continued)

| Reg         | Name                  | Bits        | Bit 7         | Bit 6          | Bit 5   | Bit 4    | Bit 3   | Bit 2 Bit 1      | Bit 0     | Reset     | R/W     |
|-------------|-----------------------|-------------|---------------|----------------|---------|----------|---------|------------------|-----------|-----------|---------|
| 0x16D       | LUT54_FILTER          | [7:0]       | HPF_54        | HPF_54         | HPF_54  | HPF_54   | LPF_54  | LPF_54           | LPF_54    | 0x00      | R/W     |
| 0x16E       | LUT55_SW              | [7:0]       | SW_IN_SET_ 55 | SW_OUT_S ET_55 |         | SW_IN_55 |         | SW_OUT_55        | SW_OUT_55 | 0x00      | R/W     |
| 0x16F       | LUT55_FILTER          | [7:0]       |               |                | HPF_55  |          |         | LPF_55           |           | 0x00      | R/W     |
| 0x170       | LUT56_SW              | [7:0]       | SW_IN_SET_ 56 | SW_OUT_S ET_56 |         | SW_IN_56 |         | SW_OUT_56        |           | 0x00      | R/W     |
| 0x171       | LUT56_FILTER          | [7:0]       |               | HPF_56         |         |          |         | LPF_56           |           | 0x00      | R/W     |
| 0x172       | LUT57_SW              | [7:0]       | SW_IN_SET_ 57 | SW_OUT_S ET_57 |         | SW_IN_57 |         | SW_OUT_57        |           | 0x00      | R/W     |
| 0x173       | LUT57_FILTER          | [7:0]       |               | HPF_57         |         |          |         | LPF_57           |           | 0x00      | R/W     |
| 0x174       | LUT58_SW              | [7:0]       | SW_IN_SET_ 58 | SW_OUT_S ET_58 |         | SW_IN_58 |         | SW_OUT_58        |           | 0x00      | R/W     |
| 0x175       | LUT58_FILTER          | [7:0]       |               |                | HPF_58  |          |         | LPF_58           |           | 0x00      | R/W     |
| 0x176       | LUT59_SW              | [7:0]       | SW_IN_SET_ 59 | SW_OUT_S ET_59 |         | SW_IN_59 |         | SW_OUT_59        |           | 0x00      | R/W     |
| 0x177       | LUT59_FILTER          | [7:0]       |               | HPF_59         |         |          |         | LPF_59           |           | 0x00      | R/W     |
| 0x178       | LUT60_SW              | [7:0]       | SW_IN_SET_ 60 | SW_OUT_S ET_60 |         | SW_IN_60 |         | SW_OUT_60        |           | 0x00      | R/W     |
| 0x179       | LUT60_FILTER          | [7:0]       |               | HPF_60         |         |          |         | LPF_60           |           | 0x00      | R/W     |
| 0x17A 0x17B | LUT61_SW LUT61_FILTER | [7:0]       | SW_IN_SET_ 61 | SW_OUT_S ET_61 |         | SW_IN_61 |         | LPF_61           | SW_OUT_61 | 0x00 0x00 | R/W R/W |
| 0x17C       | LUT62_SW              | [7:0] [7:0] |               | HPF_61         |         | SW_IN_62 |         | SW_OUT_62        |           | 0x00      | R/W     |
|             | LUT62_FILTER          |             | SW_IN_SET_ 62 | SW_OUT_S ET_62 |         |          |         | LPF_62           |           | 0x00      | R/W     |
| 0x17D       |                       | [7:0]       |               | HPF_62         |         |          |         |                  |           |           |         |
| 0x17E       | LUT63_SW              | [7:0]       | SW_IN_SET_ 63 | SW_OUT_S ET_63 |         | SW_IN_63 |         | SW_OUT_63        |           | 0x00 0x00 | R/W     |
| 0x17F       | LUT63_FILTER          | [7:0]       |               | HPF_63         |         |          |         | LPF_63           |           |           | R/W     |
| 0x180       | LUT64_SW              | [7:0] [7:0] | SW_IN_SET_ 64 | SW_OUT_S ET_64 | HPF_64  | SW_IN_64 |         | SW_OUT_64 LPF_64 |           | 0x00 0x00 | R/W R/W |
| 0x181 0x182 | LUT64_FILTER LUT65_SW | [7:0]       | SW_IN_SET_ 65 | SW_OUT_S ET_65 |         | SW_IN_65 |         | SW_OUT_65        |           | 0x00      | R/W     |
| 0x183       | LUT65_FILTER          | [7:0]       |               | HPF_65         |         |          |         | LPF_65           |           | 0x00      | R/W     |
| 0x184       | LUT66_SW              | [7:0]       | SW_IN_SET_ 66 | SW_OUT_S ET_66 |         | SW_IN_66 |         | SW_OUT_66        |           | 0x00      | R/W     |
| 0x185       | LUT66_FILTER          | [7:0]       |               | HPF_66         |         |          |         | LPF_66           |           | 0x00      | R/W     |
| 0x186       | LUT67_SW              | [7:0]       | SW_IN_SET_ 67 | SW_OUT_S ET_67 |         | SW_IN_67 |         | SW_OUT_67        |           | 0x00      | R/W     |
| 0x187       | LUT67_FILTER          | [7:0]       |               | HPF_67         |         |          |         | LPF_67           |           | 0x00      | R/W     |
|             | LUT68_SW              | [7:0]       | SW_IN_SET_ 68 | SW_OUT_S ET_68 |         | SW_IN_68 |         | SW_OUT_68        |           | 0x00      | R/W     |
| 0x188       |                       |             |               | HPF_68         |         |          |         |                  |           |           | R/W     |
| 0x189       | LUT68_FILTER LUT69_SW | [7:0] [7:0] | SW_IN_SET_ 69 | SW_OUT_S ET_69 |         | SW_IN_69 |         | LPF_68           |           | 0x00 0x00 | R/W     |
| 0x18A       |                       |             |               |                |         |          |         | SW_OUT_69        |           |           |         |
| 0x18B       | LUT69_FILTER          | [7:0]       |               | HPF_69         |         |          |         | LPF_69           |           | 0x00      | R/W     |
| 0x18C       | LUT70_SW              | [7:0]       | SW_IN_SET_ 70 | SW_OUT_S ET_70 |         | SW_IN_70 |         | SW_OUT_70        |           | 0x00      | R/W     |
| 0x18D       | LUT70_FILTER          | [7:0]       |               | HPF_70         |         |          |         | LPF_70           |           | 0x00      | R/W     |

## REGISTER SUMMARY

Table 6. ADMV8818-EP Register Summary (Continued)

| Reg   | Name         | Bits   | Bit 7         | Bit 6          | Bit 5   | Bit 4    | Bit 3   | Bit 2     | Bit       | Reset   | R/W   |
|-------|--------------|--------|---------------|----------------|---------|----------|---------|-----------|-----------|---------|-------|
| 0x18E | LUT71_SW     | [7:0]  | SW_IN_SET_ 71 | SW_OUT_S ET_71 |         | SW_IN_71 |         | SW_OUT_71 | SW_OUT_71 | 0x00    | R/W   |
| 0x18F | LUT71_FILTER | [7:0]  |               | HPF_71         |         |          |         | LPF_71    | LPF_71    | 0x00    | R/W   |
| 0x190 | LUT72_SW     | [7:0]  | SW_IN_SET_ 72 | SW_OUT_S ET_72 |         | SW_IN_72 |         | SW_OUT_72 | SW_OUT_72 | 0x00    | R/W   |
| 0x191 | LUT72_FILTER | [7:0]  |               |                | HPF_72  |          |         | LPF_72    | LPF_72    | 0x00    | R/W   |
| 0x192 | LUT73_SW     | [7:0]  | SW_IN_SET_ 73 | SW_OUT_S ET_73 |         | SW_IN_73 |         | SW_OUT_73 | SW_OUT_73 | 0x00    | R/W   |
| 0x193 | LUT73_FILTER | [7:0]  |               |                | HPF_73  |          |         | LPF_73    | LPF_73    | 0x00    | R/W   |
| 0x194 | LUT74_SW     | [7:0]  | SW_IN_SET_ 74 | SW_OUT_S ET_74 |         | SW_IN_74 |         | SW_OUT_74 | SW_OUT_74 | 0x00    | R/W   |
| 0x195 | LUT74_FILTER | [7:0]  |               |                | HPF_74  |          |         | LPF_74    | LPF_74    | 0x00    | R/W   |
| 0x196 | LUT75_SW     | [7:0]  | SW_IN_SET_ 75 | SW_OUT_S ET_75 |         | SW_IN_75 |         | SW_OUT_75 | SW_OUT_75 | 0x00    | R/W   |
| 0x197 | LUT75_FILTER | [7:0]  |               |                | HPF_75  |          |         | LPF_75    | LPF_75    | 0x00    | R/W   |
| 0x198 | LUT76_SW     | [7:0]  | SW_IN_SET_ 76 | SW_OUT_S ET_76 |         | SW_IN_76 |         | SW_OUT_76 | SW_OUT_76 | 0x00    | R/W   |
| 0x199 | LUT76_FILTER | [7:0]  |               | HPF_76         |         |          |         | LPF_76    | LPF_76    | 0x00    | R/W   |
| 0x19A | LUT77_SW     | [7:0]  | SW_IN_SET_ 77 | SW_OUT_S ET_77 |         | SW_IN_77 |         | SW_OUT_77 | SW_OUT_77 | 0x00    | R/W   |
| 0x19B | LUT77_FILTER | [7:0]  |               |                | HPF_77  |          |         | LPF_77    | LPF_77    | 0x00    | R/W   |
| 0x19C | LUT78_SW     | [7:0]  | SW_IN_SET_ 78 | SW_OUT_S ET_78 |         | SW_IN_78 |         | SW_OUT_78 | SW_OUT_78 | 0x00    | R/W   |
| 0x19D | LUT78_FILTER | [7:0]  |               |                | HPF_78  |          |         | LPF_78    | LPF_78    | 0x00    | R/W   |
| 0x19E | LUT79_SW     | [7:0]  | SW_IN_SET_ 79 | SW_OUT_S ET_79 |         | SW_IN_79 |         | SW_OUT_79 | SW_OUT_79 | 0x00    | R/W   |
| 0x19F | LUT79_FILTER | [7:0]  |               | HPF_79         |         |          |         | LPF_79    | LPF_79    | 0x00    | R/W   |
| 0x1A0 | LUT80_SW     | [7:0]  | SW_IN_SET_ 80 | SW_OUT_S ET_80 |         | SW_IN_80 |         | SW_OUT_80 | SW_OUT_80 | 0x00    | R/W   |
| 0x1A1 | LUT80_FILTER | [7:0]  |               |                | HPF_80  |          |         | LPF_80    | LPF_80    | 0x00    | R/W   |
| 0x1A2 | LUT81_SW     | [7:0]  | SW_IN_SET_ 81 | SW_OUT_S ET_81 |         | SW_IN_81 |         | SW_OUT_81 | SW_OUT_81 | 0x00    | R/W   |
| 0x1A3 | LUT81_FILTER | [7:0]  |               |                | HPF_81  |          |         | LPF_81    | LPF_81    | 0x00    | R/W   |
| 0x1A4 | LUT82_SW     | [7:0]  | SW_IN_SET_ 82 | SW_OUT_S ET_82 |         | SW_IN_82 |         | SW_OUT_82 | SW_OUT_82 | 0x00    | R/W   |
| 0x1A5 | LUT82_FILTER | [7:0]  |               | HPF_82         |         |          |         | LPF_82    | LPF_82    | 0x00    | R/W   |
| 0x1A6 | LUT83_SW     | [7:0]  | SW_IN_SET_ 83 | SW_OUT_S ET_83 |         | SW_IN_83 |         | SW_OUT_83 | SW_OUT_83 | 0x00    | R/W   |
| 0x1A7 | LUT83_FILTER | [7:0]  |               |                | HPF_83  |          |         |           |           | 0x00    | R/W   |
| 0x1A8 | LUT84_SW     | [7:0]  | SW_IN_SET_ 84 | SW_OUT_S ET_84 |         | SW_IN_84 |         | SW_OUT_84 | SW_OUT_84 | 0x00    | R/W   |
| 0x1A9 | LUT84_FILTER | [7:0]  |               | HPF_84         |         |          |         | LPF_84    | LPF_84    | 0x00    | R/W   |
| 0x1AA | LUT85_SW     | [7:0]  | SW_IN_SET_ 85 | SW_OUT_S ET_85 |         | SW_IN_85 |         | SW_OUT_85 | SW_OUT_85 | 0x00    | R/W   |
| 0x1AB | LUT85_FILTER | [7:0]  |               |                | HPF_85  |          |         | LPF_85    | LPF_85    | 0x00    | R/W   |
| 0x1AC | LUT86_SW     | [7:0]  | SW_IN_SET_ 86 | SW_OUT_S ET_86 |         | SW_IN_86 |         | SW_OUT_86 | SW_OUT_86 | 0x00    | R/W   |
| 0x1AD | LUT86_FILTER | [7:0]  |               | HPF_86         |         |          |         | LPF_86    | LPF_86    | 0x00    | R/W   |
| 0x1AE | LUT87_SW     | [7:0]  | SW_IN_SET_ 87 | SW_OUT_S ET_87 |         | SW_IN_87 |         | SW_OUT_87 | SW_OUT_87 | 0x00    | R/W   |

## REGISTER SUMMARY

Table 6. ADMV8818-EP Register Summary (Continued)

| Reg   | Name          | Bits   | Bit 7          | Bit 6           | Bit 4     | Bit 3   | Bit 2      | 1          | Reset   | R/W   |
|-------|---------------|--------|----------------|-----------------|-----------|---------|------------|------------|---------|-------|
| 0x1AF | LUT87_FILTER  | [7:0]  | HPF_87         | HPF_87          | HPF_87    | LPF_87  | LPF_87     | LPF_87     | 0x00    | R/W   |
| 0x1B0 | LUT88_SW      | [7:0]  | SW_IN_SET_ 88  | SW_OUT_S ET_88  | SW_IN_88  |         | SW_OUT_88  | SW_OUT_88  | 0x00    | R/W   |
| 0x1B1 | LUT88_FILTER  | [7:0]  |                | HPF_88          |           |         | LPF_88     | LPF_88     | 0x00    | R/W   |
| 0x1B2 | LUT89_SW      | [7:0]  | SW_IN_SET_ 89  | SW_OUT_S ET_89  | SW_IN_89  |         | SW_OUT_89  | SW_OUT_89  | 0x00    | R/W   |
| 0x1B3 | LUT89_FILTER  | [7:0]  |                | HPF_89          |           |         | LPF_89     | LPF_89     | 0x00    | R/W   |
| 0x1B4 | LUT90_SW      | [7:0]  | SW_IN_SET_ 90  | SW_OUT_S ET_90  | SW_IN_90  |         | SW_OUT_90  | SW_OUT_90  | 0x00    | R/W   |
| 0x1B5 | LUT90_FILTER  | [7:0]  |                | HPF_90          |           |         | LPF_90     | LPF_90     | 0x00    | R/W   |
| 0x1B6 | LUT91_SW      | [7:0]  | SW_IN_SET_ 91  | SW_OUT_S ET_91  | SW_IN_91  |         | SW_OUT_91  | SW_OUT_91  | 0x00    | R/W   |
| 0x1B7 | LUT91_FILTER  | [7:0]  |                | HPF_91          |           |         | LPF_91     | LPF_91     | 0x00    | R/W   |
| 0x1B8 | LUT92_SW      | [7:0]  | SW_IN_SET_ 92  | SW_OUT_S ET_92  | SW_IN_92  |         | SW_OUT_92  | SW_OUT_92  | 0x00    | R/W   |
| 0x1B9 | LUT92_FILTER  | [7:0]  |                | HPF_92          |           |         | LPF_92     | LPF_92     | 0x00    | R/W   |
| 0x1BA | LUT93_SW      | [7:0]  | SW_IN_SET_ 93  | SW_OUT_S ET_93  | SW_IN_93  |         | SW_OUT_93  | SW_OUT_93  | 0x00    | R/W   |
| 0x1BB | LUT93_FILTER  | [7:0]  |                | HPF_93          |           |         | LPF_93     | LPF_93     | 0x00    | R/W   |
| 0x1BC | LUT94_SW      | [7:0]  | SW_IN_SET_ 94  | SW_OUT_S ET_94  | SW_IN_94  |         | SW_OUT_94  | SW_OUT_94  | 0x00    | R/W   |
| 0x1BD | LUT94_FILTER  | [7:0]  |                | HPF_94          |           |         | LPF_94     | LPF_94     | 0x00    | R/W   |
| 0x1BE | LUT95_SW      | [7:0]  | SW_IN_SET_ 95  | SW_OUT_S ET_95  | SW_IN_95  |         | SW_OUT_95  | SW_OUT_95  | 0x00    | R/W   |
| 0x1BF | LUT95_FILTER  | [7:0]  |                | HPF_95          |           |         | LPF_95     | LPF_95     | 0x00    | R/W   |
| 0x1C0 | LUT96_SW      | [7:0]  | SW_IN_SET_ 96  | SW_OUT_S ET_96  | SW_IN_96  |         | SW_OUT_96  | SW_OUT_96  | 0x00    | R/W   |
| 0x1C1 | LUT96_FILTER  | [7:0]  |                | HPF_96          |           |         | LPF_96     | LPF_96     | 0x00    | R/W   |
| 0x1C2 | LUT97_SW      | [7:0]  | SW_IN_SET_ 97  | SW_OUT_S ET_97  | SW_IN_97  |         |            | SW_OUT_97  | 0x00    | R/W   |
| 0x1C3 | LUT97_FILTER  | [7:0]  |                | HPF_97          |           |         | LPF_97     | LPF_97     | 0x00    | R/W   |
| 0x1C4 | LUT98_SW      | [7:0]  | SW_IN_SET_ 98  | SW_OUT_S ET_98  | SW_IN_98  |         | SW_OUT_98  | SW_OUT_98  | 0x00    | R/W   |
| 0x1C5 | LUT98_FILTER  | [7:0]  |                | HPF_98          |           |         | LPF_98     | LPF_98     | 0x00    | R/W   |
| 0x1C6 | LUT99_SW      | [7:0]  | SW_IN_SET_ 99  | SW_OUT_S ET_99  | SW_IN_99  |         | SW_OUT_99  | SW_OUT_99  | 0x00    | R/W   |
| 0x1C7 | LUT99_FILTER  | [7:0]  |                | HPF_99          |           |         | LPF_99     | LPF_99     | 0x00    | R/W   |
| 0x1C8 | LUT100_SW     | [7:0]  | SW_IN_SET_ 100 | SW_OUT_S ET_100 | SW_IN_100 |         | SW_OUT_100 | SW_OUT_100 | 0x00    | R/W   |
| 0x1C9 | LUT100_FILTER | [7:0]  |                | HPF_100         |           |         | LPF_100    | LPF_100    | 0x00    | R/W   |
| 0x1CA | LUT101_SW     | [7:0]  | SW_IN_SET_ 101 | SW_OUT_S ET_101 | SW_IN_101 |         | SW_OUT_101 | SW_OUT_101 | 0x00    | R/W   |
| 0x1CB | LUT101_FILTER | [7:0]  |                | HPF_101         |           |         | LPF_101    | LPF_101    | 0x00    | R/W   |
| 0x1CC | LUT102_SW     | [7:0]  | SW_IN_SET_ 102 | SW_OUT_S ET_102 | SW_IN_102 |         | SW_OUT_102 | SW_OUT_102 | 0x00    | R/W   |
| 0x1CD | LUT102_FILTER | [7:0]  |                | HPF_102         |           |         | LPF_102    | LPF_102    | 0x00    | R/W   |
| 0x1CE | LUT103_SW     | [7:0]  | SW_IN_SET_ 103 | SW_OUT_S ET_103 | SW_IN_103 |         | SW_OUT_103 | SW_OUT_103 | 0x00    | R/W   |
| 0x1CF | LUT103_FILTER | [7:0]  |                | HPF_103         |           |         | LPF_103    | LPF_103    | 0x00    | R/W   |

## REGISTER SUMMARY

Table 6. ADMV8818-EP Register Summary (Continued)

| Reg   | Name          | Bits   | Bit 7          | Bit 6           | Bit 5   | Bit 4     | Bit 1 Bit 0   | Reset   | R/W   |
|-------|---------------|--------|----------------|-----------------|---------|-----------|---------------|---------|-------|
| 0x1D0 | LUT104_SW     | [7:0]  | SW_IN_SET_ 104 | SW_OUT_S ET_104 |         | SW_IN_104 | SW_OUT_104    | 0x00    | R/W   |
| 0x1D1 | LUT104_FILTER | [7:0]  |                | HPF_104         |         |           | LPF_104       | 0x00    | R/W   |
| 0x1D2 | LUT105_SW     | [7:0]  | SW_IN_SET_ 105 | SW_OUT_S ET_105 |         | SW_IN_105 | SW_OUT_105    | 0x00    | R/W   |
| 0x1D3 | LUT105_FILTER | [7:0]  |                | HPF_105         |         |           | LPF_105       | 0x00    | R/W   |
| 0x1D4 | LUT106_SW     | [7:0]  | SW_IN_SET_ 106 | SW_OUT_S ET_106 |         | SW_IN_106 | SW_OUT_106    | 0x00    | R/W   |
| 0x1D5 | LUT106_FILTER | [7:0]  |                | HPF_106         |         |           | LPF_106       | 0x00    | R/W   |
| 0x1D6 | LUT107_SW     | [7:0]  | SW_IN_SET_ 107 | SW_OUT_S ET_107 |         | SW_IN_107 | SW_OUT_107    | 0x00    | R/W   |
| 0x1D7 | LUT107_FILTER | [7:0]  |                | HPF_107         |         |           | LPF_107       | 0x00    | R/W   |
| 0x1D8 | LUT108_SW     | [7:0]  | SW_IN_SET_ 108 | SW_OUT_S ET_108 |         | SW_IN_108 | SW_OUT_108    | 0x00    | R/W   |
| 0x1D9 | LUT108_FILTER | [7:0]  |                | HPF_108         |         |           | LPF_108       | 0x00    | R/W   |
| 0x1DA | LUT109_SW     | [7:0]  | SW_IN_SET_ 109 | SW_OUT_S ET_109 |         | SW_IN_109 | SW_OUT_109    | 0x00    | R/W   |
| 0x1DB | LUT109_FILTER | [7:0]  |                | HPF_109         |         |           | LPF_109       | 0x00    | R/W   |
| 0x1DC | LUT110_SW     | [7:0]  | SW_IN_SET_ 110 | SW_OUT_S ET_110 |         | SW_IN_110 | SW_OUT_110    | 0x00    | R/W   |
| 0x1DD | LUT110_FILTER | [7:0]  |                | HPF_110         |         |           | LPF_110       | 0x00    | R/W   |
| 0x1DE | LUT111_SW     | [7:0]  | SW_IN_SET_ 111 | SW_OUT_S ET_111 |         | SW_IN_111 | SW_OUT_111    | 0x00    | R/W   |
| 0x1DF | LUT111_FILTER | [7:0]  |                | HPF_111         |         |           | LPF_111       | 0x00    | R/W   |
| 0x1E0 | LUT112_SW     | [7:0]  | SW_IN_SET_ 112 | SW_OUT_S ET_112 |         | SW_IN_112 | SW_OUT_112    | 0x00    | R/W   |
| 0x1E1 | LUT112_FILTER | [7:0]  |                | HPF_112         |         |           | LPF_112       | 0x00    | R/W   |
| 0x1E2 | LUT113_SW     | [7:0]  | SW_IN_SET_ 113 | SW_OUT_S ET_113 |         | SW_IN_113 | SW_OUT_113    | 0x00    | R/W   |
| 0x1E3 | LUT113_FILTER | [7:0]  |                | HPF_113         |         |           | LPF_113       | 0x00    | R/W   |
| 0x1E4 | LUT114_SW     | [7:0]  | SW_IN_SET_ 114 | SW_OUT_S ET_114 |         | SW_IN_114 | SW_OUT_114    | 0x00    | R/W   |
| 0x1E5 | LUT114_FILTER | [7:0]  |                | HPF_114         |         |           | LPF_114       | 0x00    | R/W   |
| 0x1E6 | LUT115_SW     | [7:0]  | SW_IN_SET_ 115 | SW_OUT_S ET_115 |         | SW_IN_115 | SW_OUT_115    | 0x00    | R/W   |
| 0x1E7 | LUT115_FILTER | [7:0]  |                | HPF_115         |         |           | LPF_115       | 0x00    | R/W   |
| 0x1E8 | LUT116_SW     | [7:0]  | SW_IN_SET_ 116 | SW_OUT_S ET_116 |         | SW_IN_116 | SW_OUT_116    | 0x00    | R/W   |
| 0x1E9 | LUT116_FILTER | [7:0]  |                | HPF_116         |         |           | LPF_116       | 0x00    | R/W   |
| 0x1EA | LUT117_SW     | [7:0]  | SW_IN_SET_ 117 | SW_OUT_S ET_117 |         | SW_IN_117 | SW_OUT_117    | 0x00    | R/W   |
| 0x1EB | LUT117_FILTER | [7:0]  |                | HPF_117         |         |           | LPF_117       | 0x00    | R/W   |
| 0x1EC | LUT118_SW     | [7:0]  | SW_IN_SET_ 118 | SW_OUT_S ET_118 |         | SW_IN_118 | SW_OUT_118    | 0x00    | R/W   |
| 0x1ED | LUT118_FILTER | [7:0]  |                | HPF_118         |         |           | LPF_118       | 0x00    | R/W   |
| 0x1EE | LUT119_SW     | [7:0]  | SW_IN_SET_ 119 | SW_OUT_S ET_119 |         | SW_IN_119 | SW_OUT_119    | 0x00    | R/W   |
| 0x1EF | LUT119_FILTER | [7:0]  |                | HPF_119         |         |           | LPF_119       | 0x00    | R/W   |
| 0x1F0 | LUT120_SW     | [7:0]  | SW_IN_SET_ 120 | SW_OUT_S ET_120 |         | SW_IN_120 | SW_OUT_120    | 0x00    | R/W   |

## REGISTER SUMMARY

## Table 6. ADMV8818-EP Register Summary (Continued)

| Reg   | Name          | Bits   | Bit 7          | Bit 6           | Bit 4     | Bit 3      | Bit 2      | Bit 1      | Reset   | R/W   |
|-------|---------------|--------|----------------|-----------------|-----------|------------|------------|------------|---------|-------|
| 0x1F1 | LUT120_FILTER | [7:0]  | HPF_120        | HPF_120         | HPF_120   | LPF_120    | LPF_120    | LPF_120    | 0x00    | R/W   |
| 0x1F2 | LUT121_SW     | [7:0]  | SW_IN_SET_ 121 | SW_OUT_S ET_121 | SW_IN_121 | SW_OUT_121 | SW_OUT_121 | SW_OUT_121 | 0x00    | R/W   |
| 0x1F3 | LUT121_FILTER | [7:0]  | HPF_121        | HPF_121         | HPF_121   | LPF_121    | LPF_121    | LPF_121    | 0x00    | R/W   |
| 0x1F4 | LUT122_SW     | [7:0]  | SW_IN_SET_ 122 | SW_OUT_S ET_122 | SW_IN_122 | SW_OUT_122 | SW_OUT_122 | SW_OUT_122 | 0x00    | R/W   |
| 0x1F5 | LUT122_FILTER | [7:0]  | HPF_122        | HPF_122         | HPF_122   | LPF_122    | LPF_122    | LPF_122    | 0x00    | R/W   |
| 0x1F6 | LUT123_SW     | [7:0]  | SW_IN_SET_ 123 | SW_OUT_S ET_123 | SW_IN_123 | SW_OUT_123 | SW_OUT_123 | SW_OUT_123 | 0x00    | R/W   |
| 0x1F7 | LUT123_FILTER | [7:0]  | HPF_123        | HPF_123         | HPF_123   | LPF_123    | LPF_123    | LPF_123    | 0x00    | R/W   |
| 0x1F8 | LUT124_SW     | [7:0]  | SW_IN_SET_ 124 | SW_OUT_S ET_124 | SW_IN_124 | SW_OUT_124 | SW_OUT_124 | SW_OUT_124 | 0x00    | R/W   |
| 0x1F9 | LUT124_FILTER | [7:0]  | HPF_124        | HPF_124         | HPF_124   | LPF_124    | LPF_124    | LPF_124    | 0x00    | R/W   |
| 0x1FA | LUT125_SW     | [7:0]  | SW_IN_SET_ 125 | SW_OUT_S ET_125 | SW_IN_125 | SW_OUT_125 | SW_OUT_125 | SW_OUT_125 | 0x00    | R/W   |
| 0x1FB | LUT125_FILTER | [7:0]  | HPF_125        | HPF_125         | HPF_125   | LPF_125    | LPF_125    | LPF_125    | 0x00    | R/W   |
| 0x1FC | LUT126_SW     | [7:0]  | SW_IN_SET_ 126 | SW_OUT_S ET_126 | SW_IN_126 | SW_OUT_126 | SW_OUT_126 | SW_OUT_126 | 0x00    | R/W   |
| 0x1FD | LUT126_FILTER | [7:0]  | HPF_126        | HPF_126         | HPF_126   | LPF_126    | LPF_126    | LPF_126    | 0x00    | R/W   |
| 0x1FE | LUT127_SW     | [7:0]  | SW_IN_SET_ 127 | SW_OUT_S ET_127 | SW_IN_127 | SW_OUT_127 | SW_OUT_127 | SW_OUT_127 | 0x00    | R/W   |
| 0x1FF | LUT127_FILTER | [7:0]  | HPF_127        | HPF_127         | HPF_127   | LPF_127    | LPF_127    | LPF_127    | 0x00    | R/W   |

## REGISTER DETAILS

Note that the LUT1\_SW to LUT127\_FILTER bit fields functionality (Register 0x102 to Register 0x1FF) is identical to LUT0\_SW and LUT0\_FILTER bit fields functionality (Register 0x100 and Register 0x101). See Table 6 for the register address information.

Address: 0x000, Reset: 0x00, Name: ADI\_SPI\_CONFIG\_A

<!-- image -->

Table 7. Bit Descriptions for ADI\_SPI\_CONFIG\_A

|   Bits | Bit Name   | Description                                           | Reset   | Access   |
|--------|------------|-------------------------------------------------------|---------|----------|
|      7 | SOFTRESET_ | Soft Reset. 0: reset asserted. 1: reset not asserted. | 0x0     | R/W      |
|      6 | LSB_FIRST_ | LSB First. 0: MSB first. 1: LSB first.                | 0x0     | R/W      |
|      5 | ENDIAN_    | Endian. 0: Little Endian. 1: Big Endian.              | 0x0     | R/W      |
|      4 | SDOACTIVE_ | SDO Active. 0: SDO inactive. 1: SDO active.           | 0x0     | R/W      |
|      3 | SDOACTIVE  | SDO Active. 0: SDO inactive. 1: SDO active.           | 0x0     | R/W      |
|      2 | ENDIAN     | Endian. 0: Little Endian. 1: Big Endian.              | 0x0     | R/W      |
|      1 | LSB_FIRST  | LSB First. 0: MSB first. 1: LSB first.                | 0x0     | R/W      |
|      0 | SOFTRESET  | Soft Reset. 0: Reset asserted. 1: Reset not asserted. | 0x0     | R/W      |

Address: 0x001, Reset: 0x00, Name: ADI\_SPI\_CONFIG\_B

<!-- image -->

Table 8. Bit Descriptions for ADI\_SPI\_CONFIG\_B

|   Bits | Bit Name           | Description         | Reset   | Access   |
|--------|--------------------|---------------------|---------|----------|
|      7 | SINGLE_INSTRUCTION | Single Instruction. | 0x0     | R/W      |

## REGISTER DETAILS

## Table 8. Bit Descriptions for ADI\_SPI\_CONFIG\_B (Continued)

| Bits   | Bit Name                   | Description                              | Reset   | Access   |
|--------|----------------------------|------------------------------------------|---------|----------|
|        |                            | 1: disable streaming (regardless of CS). |         |          |
| 6      | CSB_STALL                  | CS Stall.                                | 0x0     | R/W      |
| 5      | CONTROLLER_TARGET_RB       | Controller Target Readback.              | 0x0     | R/W      |
| [4:1]  | RESERVED                   | Reserved.                                | 0x0     | R        |
| 0      | CONTROLLER_TARGET_TRANSFER | Controller Target Transfer.              | 0x0     | R/W      |

Address: 0x003, Reset: 0x01, Name: CHIPTYPE

Table 9. Bit Descriptions for CHIPTYPE

| Bits   | Bit Name   | Description           | Reset   | Access   |
|--------|------------|-----------------------|---------|----------|
| [7:0]  | CHIPTYPE   | Chip Type, Read Only. | 0x1     | R        |

Address: 0x004, Reset: 0x18, Name: PRODUCT\_ID\_L

## Table 10. Bit Descriptions for PRODUCT\_ID\_L

<!-- image -->

| Bits   | Bit Name     | Description                 | Reset   | Access   |
|--------|--------------|-----------------------------|---------|----------|
| [7:0]  | PRODUCT_ID_L | Product_ID_L, Lower 8 Bits. | 0x18    | R        |

Address: 0x005, Reset: 0x88, Name: PRODUCT\_ID\_H

<!-- image -->

Table 11. Bit Descriptions for PRODUCT\_ID\_H

| Bits   | Bit Name     | Description                  | Reset   | Access   |
|--------|--------------|------------------------------|---------|----------|
| [7:0]  | PRODUCT_ID_H | Product_ID_H, Higher 8 Bits. | 0x88    | R        |

Address: 0x010, Reset: 0x00, Name: FAST\_LATCH\_POINTER

<!-- image -->

Table 12. Bit Descriptions for FAST\_LATCH\_POINTER

| Bits   | Bit Name           | Description                                                                                                                                   | Reset   | Access   |
|--------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | FAST_LATCH_LOAD    | Fast Latch Load. Loads the pointer location into the internal state machine for fast latch mode. The FAST_LATCH_LOAD bit self resets to zero. | 0x0     | R/W      |
| [6:0]  | FAST_LATCH_POINTER | Fast Latch Pointer. Determines the pointer location within the fast latch lookup table.                                                       | 0x0     | R/W      |

Address: 0x011, Reset: 0x7F, Name: FAST\_LATCH\_STOP

<!-- image -->

## REGISTER DETAILS

Table 13. Bit Descriptions for FAST\_LATCH\_STOP

| Bits   | Bit Name        | Description                                                                    | Reset   | Access   |
|--------|-----------------|--------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED        | Reserved.                                                                      | 0x0     | R        |
| [6:0]  | FAST_LATCH_STOP | Fast Latch Stop Index. Sets the stop index within the fast latch lookup table. | 0x7F    | R/W      |

Address: 0x012, Reset: 0x00, Name: FAST\_LATCH\_START

<!-- image -->

Table 14. Bit Descriptions for FAST\_LATCH\_START

| Bits   | Bit Name         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Reset   | Access   |
|--------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | RESERVED         | Reserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 0x0     | R        |
| [6:0]  | FAST_LATCH_START | Fast Latch Start Index. Sets the start index within the fast latch lookup table. Note that, when exiting and then re-entering fast latch mode (SFL pin), the internal state machine resumes where it left off and not at the start index. If a new start index is programmed, it may be necessary to sequence through a number of states from the point at which the state machine left off. This action is necessary for a positive incremental direction. For a negative decremental direction, this action is necessary for the stop index. | 0x0     | R/W      |

Address: 0x013, Reset: 0x00, Name: FAST\_LATCH\_DIRECTION

<!-- image -->

Table 15. Bit Descriptions for FAST\_LATCH\_DIRECTION

| Bits   | Bit Name             | Description                                                                                                                  | Reset   | Access   |
|--------|----------------------|------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| [7:1]  | RESERVED             | Reserved.                                                                                                                    | 0x0     | R        |
| 0      | FAST_LATCH_DIRECTION | Fast Latch Direction. Determines which direction to sequence within the fast latch lookup table. 0: increment. 1: decrement. | 0x0     | R/W      |

Address: 0x014, Reset: 0x00, Name: FAST\_LATCH\_STATE

<!-- image -->

Table 16. Bit Descriptions for FAST\_LATCH\_STATE

| Bits   | Bit Name         | Description                                                      | Reset   | Access   |
|--------|------------------|------------------------------------------------------------------|---------|----------|
| 7      | RESERVED         | Reserved.                                                        | 0x0     | R        |
| [6:0]  | FAST_LATCH_STATE | Fast Latch State. Reads back the internal state machine pointer. | 0x0     | R        |

Address: 0x020, Reset: 0x00, Name: WR0\_SW

<!-- image -->

## REGISTER DETAILS

<!-- image -->

Table 17. Bit Descriptions for WR0\_SW

| Bits   | Bit Name       | Description                                                                                                                                                                                                                     | Reset   | Access   |
|--------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SW_IN_SET_WR0  | Write Group 0: RF Input Switch Set. Sets the switch position to be as defined in Bits[5:3].                                                                                                                                     | 0x0     | R/W      |
| 6      | SW_OUT_SET_WR0 | Write Group 0: RF Output Switch Set. Sets the switch position to be as defined in Bits[2:0].                                                                                                                                    | 0x0     | R/W      |
| [5:3]  | SW_IN_WR0      | Write Group 0: RF Input Switch Position. Defines the RF input switch position, as well as which filter band is adjusted by the corresponding HPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4.   | 0x0     | R/W      |
| [2:0]  | SW_OUT_WR0     | Write Group 0: RF Output Switch Position. Defines the RF output switch position, as well as which filter band is adjusted by the corresponding LPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4. | 0x0     | R/W      |

Address: 0x021, Reset: 0x00, Name: WR0\_FILTER

Table 18. Bit Descriptions for WR0\_FILTER

| Bits   | Bit Name   | Description                                                                                  | Reset   | Access   |
|--------|------------|----------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | HPF_WR0    | Write Group 0: HPF State. The selected band is determined by the WR0_SW register, Bits[5:3]. | 0x0     | R/W      |
| [3:0]  | LPF_WR0    | Write Group 0: LPF State. The selected band is determined by the WR0_SW register, Bits[2:0]. | 0x0     | R/W      |

Address: 0x022, Reset: 0x00, Name: WR1\_SW

Table 19. Bit Descriptions for WR1\_SW

| Bits   | Bit Name       | Description                                                                                                                                                                            | Reset   | Access   |
|--------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SW_IN_SET_WR1  | Write Group 1: RF Input Switch Set. Sets the switch position to be as defined in Bits[5:3].                                                                                            | 0x0     | R/W      |
| 6      | SW_OUT_SET_WR1 | Write Group 1: RF Output Switch Set. Sets the switch position to be as defined in Bits[2:0].                                                                                           | 0x0     | R/W      |
| [5:3]  | SW_IN_WR1      | Write Group 1: RF Input Switch Position. Defines the RF input switch position, as well as which filter band is adjusted by the corresponding HPF state bits. 000: Bypass. 001: Band 1. | 0x0     | R/W      |

<!-- image -->

<!-- image -->

## REGISTER DETAILS

## Table 19. Bit Descriptions for WR1\_SW (Continued)

| Bits   | Bit Name   | Description                                                                                                                                                                                                                     | Reset   | Access   |
|--------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |            | 010: Band 2. 011: Band 3. 100: Band 4.                                                                                                                                                                                          |         |          |
| [2:0]  | SW_OUT_WR1 | Write Group 1: RF Output Switch Position. Defines the RF output switch position, as well as which filter band is adjusted by the corresponding LPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4. | 0x0     | R/W      |

Address: 0x023, Reset: 0x00, Name: WR1\_FILTER

Table 20. Bit Descriptions for WR1\_FILTER

| Bits   | Bit Name   | Description                                                                                  | Reset   | Access   |
|--------|------------|----------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | HPF_WR1    | Write Group 1: HPF State. The selected band is determined by the WR1_SW register, Bits[5:3]. | 0x0     | R/W      |
| [3:0]  | LPF_WR1    | Write Group 1: LPF State. The selected band is determined by the WR1_SW register, Bits[2:0]. | 0x0     | R/W      |

Address: 0x024, Reset: 0x00, Name: WR2\_SW

Table 21. Bit Descriptions for WR2\_SW

| Bits   | Bit Name       | Description                                                                                                                                                                                                                     | Reset   | Access   |
|--------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SW_IN_SET_WR2  | Write Group 2: RF Input Switch Set. Sets the switch position to be as defined in Bits[5:3].                                                                                                                                     | 0x0     | R/W      |
| 6      | SW_OUT_SET_WR2 | Write Group 2: RF Output Switch Set. Sets the switch position to be as defined in Bits[2:0].                                                                                                                                    | 0x0     | R/W      |
| [5:3]  | SW_IN_WR2      | Write Group 2: RF Input Switch Position. Defines the RF input switch position, as well as which filter band is adjusted by the corresponding HPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4.   | 0x0     | R/W      |
| [2:0]  | SW_OUT_WR2     | Write Group 2: RF Output Switch Position. Defines the RF output switch position, as well as which filter band is adjusted by the corresponding LPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4. | 0x0     | R/W      |

Address: 0x025, Reset: 0x00, Name: WR2\_FILTER

<!-- image -->

<!-- image -->

## REGISTER DETAILS

Table 22. Bit Descriptions for WR2\_FILTER

| Bits   | Bit Name   | Description                                                                                  | Reset   | Access   |
|--------|------------|----------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | HPF_WR2    | Write Group 2: HPF State. The selected band is determined by the WR2_SW register, Bits[5:3]. | 0x0     | R/W      |
| [3:0]  | LPF_WR2    | Write Group 2: LPF State. The selected band is determined by the WR2_SW register, Bits[2:0]. | 0x0     | R/W      |

Address: 0x026, Reset: 0x00, Name: WR3\_SW

Table 23. Bit Descriptions for WR3\_SW

| Bits   | Bit Name       | Description                                                                                                                                                                                                                     | Reset   | Access   |
|--------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SW_IN_SET_WR3  | Write Group 3: RF Input Switch Set. Sets the switch position to be as defined in Bits[5:3].                                                                                                                                     | 0x0     | R/W      |
| 6      | SW_OUT_SET_WR3 | Write Group 3: RF Output Switch Set. Sets the switch position to be as defined in Bits[2:0].                                                                                                                                    | 0x0     | R/W      |
| [5:3]  | SW_IN_WR3      | Write Group 3: RF Input Switch Position. Defines the RF input switch position, as well as which filter band is adjusted by the corresponding HPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4.   | 0x0     | R/W      |
| [2:0]  | SW_OUT_WR3     | Write Group 3: RF Output Switch Position. Defines the RF output switch position, as well as which filter band is adjusted by the corresponding LPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4. | 0x0     | R/W      |

Address: 0x027, Reset: 0x00, Name: WR3\_FILTER

<!-- image -->

Table 24. Bit Descriptions for WR3\_FILTER

| Bits   | Bit Name   | Description                                                                                  | Reset   | Access   |
|--------|------------|----------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | HPF_WR3    | Write Group 3: HPF State. The selected band is determined by the WR3_SW register, Bits[5:3]. | 0x0     | R/W      |
| [3:0]  | LPF_WR3    | Write Group 3: LPF State. The selected band is determined by the WR3_SW register, Bits[2:0]. | 0x0     | R/W      |

Address: 0x028, Reset: 0x00, Name: WR4\_SW

<!-- image -->

<!-- image -->

## REGISTER DETAILS

<!-- image -->

Table 25. Bit Descriptions for WR4\_SW

| Bits   | Bit Name       | Description                                                                                                                                                                                                                     | Reset   | Access   |
|--------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SW_IN_SET_WR4  | Write Group 4: RF Input Switch Set. Sets the switch position to be as defined in Bits[5:3].                                                                                                                                     | 0x0     | R/W      |
| 6      | SW_OUT_SET_WR4 | Write Group 4: RF Output Switch Set. Sets the switch position to be as defined in Bits[2:0].                                                                                                                                    | 0x0     | R/W      |
| [5:3]  | SW_IN_WR4      | Write Group 4: RF Input Switch Position. Defines the RF input switch position, as well as which filter band is adjusted by the corresponding HPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4.   | 0x0     | R/W      |
| [2:0]  | SW_OUT_WR4     | Write Group 4: RF Output Switch Position. Defines the RF output switch position, as well as which filter band is adjusted by the corresponding LPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4. | 0x0     | R/W      |

Address: 0x029, Reset: 0x00, Name: WR4\_FILTER

Table 26. Bit Descriptions for WR4\_FILTER

| Bits   | Bit Name   | Description                                                                                  | Reset   | Access   |
|--------|------------|----------------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | HPF_WR4    | Write Group 4: HPF State. The selected band is determined by the WR4_SW register, Bits[5:3]. | 0x0     | R/W      |
| [3:0]  | LPF_WR4    | Write Group 4: LPF State. The selected band is determined by the WR4_SW register, Bits[2:0]. | 0x0     | R/W      |

Address: 0x100, Reset: 0x00, Name: LUT0\_SW

<!-- image -->

<!-- image -->

Table 27. Bit Descriptions for LUT0\_SW

| Bits   | Bit Name     | Description                                                                                                                                                                      | Reset   | Access   |
|--------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| 7      | SW_IN_SET_0  | LUT 000: RF Input Switch Set. Sets the switch position to be as defined in Bits[5:3].                                                                                            | 0x0     | R/W      |
| 6      | SW_OUT_SET_0 | LUT 000: RF Output Switch Set. Sets the switch position to be as defined in Bits[2:0].                                                                                           | 0x0     | R/W      |
| [5:3]  | SW_IN_0      | LUT 000: RF Input Switch Position. Defines the RF input switch position, as well as which filter band is adjusted by the corresponding HPF state bits. 000: bypass. 001: Band 1. | 0x0     | R/W      |

## REGISTER DETAILS

## Table 27. Bit Descriptions for LUT0\_SW (Continued)

| Bits   | Bit Name   | Description                                                                                                                                                                                                               | Reset   | Access   |
|--------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
|        |            | 010: Band 2. 011: Band 3. 100: Band 4.                                                                                                                                                                                    |         |          |
| [2:0]  | SW_OUT_0   | LUT 000: RF Output Switch Position. Defines the RF output switch position, as well as which filter band is adjusted by the corresponding LPF state bits. 000: bypass. 001: Band 1. 010: Band 2. 011: Band 3. 100: Band 4. | 0x0     | R/W      |

Address: 0x101, Reset: 0x00, Name: LUT0\_FILTER

## Table 28. Bit Descriptions for LUT0\_FILTER

| Bits   | Bit Name   | Description                                                                             | Reset   | Access   |
|--------|------------|-----------------------------------------------------------------------------------------|---------|----------|
| [7:4]  | HPF_0      | LUT 000: HPF State. The selected band is determined by the LUT0_SW register, Bits[5:3]. | 0x0     | R/W      |
| [3:0]  | LPF_0      | LUT 000: LPF State. The selected band is determined by the LUT0_SW register, Bits[2:0]. | 0x0     | R/W      |

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

0

P

Figure 38. 56-Terminal Land Grid Array [LGA] 9 mm × 9 mm Body and 0.97 mm Package Height (CC-56-3) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                                 | Packing Quantity   | Package Option   |
|--------------------|---------------------|-----------------------------------------------------|--------------------|------------------|
| ADMV8818SCCZ-EP    | -55°C to +105°C     | 56-Terminal Land Grid Array [LGA]                   | Tray, 260          | CC-56-3          |
| ADMV8818SCCZ-EP-R2 | -55°C to +105°C     | 56-Terminal Land Grid Array [LGA], 2' Tape and Reel | Reel, 250          | CC-56-3          |
| ADMV8818SCCZ-EP-P7 | -55°C to +105°C     | 56-Terminal Land Grid Array [LGA]                   | Tape, 750          | CC-56-3          |

## EVALUATION BOARDS

| Model 1        | Description      |
|----------------|------------------|
| ADMV8818-EVALZ | Evaluation Board |

<!-- image -->