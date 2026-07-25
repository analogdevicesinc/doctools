<!-- lastmod 2022-08-04 -->
## MAX20034 Evaluation Kit

## General Description

The MAX20034 evaluation kit (EV kit) is a fully assembled and tested application circuit that simplifies the evaluation of  the  MAX20034  high-efficiency  400kHz/2.2MHz,  36V, dual buck controller IC.

This  EV  kit  operates  from  3.5V  to  42V  supply  and  provides  two  synchronous  step-down  outputs  by  switching at  400kHz/2.2MHz,  with  each  one  180°  out  of  phase from the other. The frequency and output voltages can be adjusted  using  external  resistors.  SYNC  input  programmability  enables  three  frequency  modes  for  optimized performance: forced fixed-frequency operation, skip mode with ultra-low quiescent current, and synchronized external clock frequency.

## Benefits and Features

- Dual High-Voltage Step-Down Controllers to Minimize Board-Area Occupancy
- Meets Stringent OEM Module Power Consumption and Performance Specifications
- 17µA Quiescent Current in Skip Mode
- ±1.5% Output-Voltage Accuracy: 5.0V/3.3V, Fixed or Adjustable by External Resistor-Divider
- EMI Reduction Features and Adjustable FixedFrequency Operation to Reduce Signal Interference
- Optimized Application Layout and Components for Quick Design Implementation
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20034

## Quick Start

## Required Equipment

- MAX20034 EV kit
- Adjustable DC power supply (PS1)
- Two digital multimeters (DMM1 and DMM2)
- Two electronic loads (EL1 and EL2)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Preset the power supply to 14V. Turn off the power supply.
- 3) Preset  the  electronic  loads  to  2.5A.  Turn  off  the electronic loads.
- 4) Connect the positive lead of the power supply to the VBATTF PCB pad on the EV kit; connect the negative lead to the neighboring PGND PCB pad.
- 5) Connect the positive terminal of electronic load EL1 to the VOUT1 PCB pad; connect the negative lead to the PGND1 pad.
- 6) Connect the positive terminal of electronic load EL2 to the VOUT2 PCB pad; connect the negative lead to the PGND2 PCB pad.
- 7) Turn on the power supply.
- 8) Verify  that  voltage  across  the  VOUT1  and  PGND1 PCB pads is 5V, and 3.3V between the VOUT2 and PGND2 PCB pads.
- 9) Turn on the electronic loads.
- 10) Verify that voltage across the VOUT1 and PGND PCB pads is 5V ±1.5%.
- 11) Verify  that  voltage  across  the  VOUT2  and  PGND2 PCB pads is 3.3V ±1.5%.
- 12) Turn off the electronic loads.
- 13) Turn off the power supply.

<!-- image -->

Table 1. Default Jumper Settings

| JUMPER     | DEFAULT SHUNT POSITION   | FUNCTION                                     |
|------------|--------------------------|----------------------------------------------|
| JU1_EN1    | Pins 2-3                 | Enable for VOUT1                             |
| JU2_EN2    | Pins 2-3                 | Enable for VOUT2                             |
| JU3_FSYNC  | Pins 2-3                 | Mode selection between skip enabled and FPWM |
| JU4_PGOOD1 | Installed                | Connect PGOOD1 to BIAS by pullup resistor    |
| JU5_PGOOD2 | Installed                | Connect PGOOD2 to BIAS by pullup resistor    |
| JU6_EXTVCC | Pins 1-2                 | Connect EXTVCC to VOUT1, VOUT2, orAGND       |

Note: For 3-pin connectors, pin 1 is denoted by a silkscreen triangle.

## Detailed Description

The MAX20034 IC offers two high-voltage synchronous step-down controllers that operate at 180° out-of-phase. This device can be powered up by an input voltage supply from 3.5V to 42V and can operate in drop-out condition by running at 99% duty-cycle. It is intended for applications with  mid-  to  high-power  requirements  that  operate  at  a wide input voltage range such as during automotive coldcrank or engine stop-start conditions.

The  IC  features  a  power-OK  monitor,  overvoltage  lockout, and an undervoltage lockout. Its protection features include cycle-by-cycle current limit and thermal shutdown. It is specified for operation over the -40°C to +125°C automotive temperature range.

## Switching Frequency and External Synchronization

The IC can operate in two modes: forced-PWM (FPWM) or skip. Skip mode has better efficiency for light-load conditions, while FPWM has fixed switching frequency across all load conditions to prevent unwanted EMI interference. When SYNC is pulled  low,  the  device  operates  in  skip mode for light loads and in PWM mode for heavy loads. When SYNC is pulled high, the device is forced to operate in PWM across all load conditions.

SYNC pin can also be used to synchronize with an external clock frequency. In this case, MAX20034 operates at external clock frequency across all load conditions.

Evaluates: MAX20034

## Buck Output Monitoring (PGOOD1, PGOOD2)

The EV kit  provides  power-good  output  test  points  (TP\_ PGOOD1 and TP\_PGOOD2) to monitor the status of the buck  outputs  (VOUT1  and  VOUT2).  The  PGOOD1  and PGOOD2 are set to high impedance when the respective output voltages are in regulation. When the output voltages individually drop below 92% of its nominal regulated voltage, the corresponding PGOOD output is pulled to ground.

## Setting the Output Voltage in Buck Converters

Each of the outputs has its own feedback pins (FB1 and FB2), which can be used to externally adjust the output voltages between 1 to 10V.

For V OUT1 , remove R1 and install a 0Ω resistor on R29. Use the following equation to calculate the required value of the resistors for R2 and R3:

<!-- formula-not-decoded -->

where V FB1 = 1V (typ) and recommended R6 = 50kΩ.

For VOUT2, remove R27 and install a 0Ω resistor on R31. Use the following equation to calculate the required value of the resistors for R25 and R26:

<!-- formula-not-decoded -->

where V FB2 = 1V (typ) and recommended R6 = 50kΩ.

│

## MAX20034 Evaluation Kit

## Evaluate 400kHz or 2.2MHz Operation

Order MAX20034HFEVKIT# to evaluate 2.2MHz operation. Order  MAX20034EVKIT#  to  evaluate  400kHz  operation. Table 2 lists different component selections for 2.2MHz and 400kHz switching frequency (the other components remain the same).

## Table 2. Component Selections

| COMPONENT   | f SW = 2.2MHz   | f SW = 400kHz   |
|-------------|-----------------|-----------------|
| C10/C28     | 820pF           | 1500pF          |
| C12/C26     | 2pF             | 2pF             |
| L1/L3       | 2.2µH           | 4.7µH           |
| R9/R20      | 51.1kΩ          | 24.9kΩ          |
| R19         | 12kΩ            | 73.2kΩ          |

## Ordering Information

| PART             | TYPE   | f SW   |
|------------------|--------|--------|
| MAX20034EVKIT#   | EV Kit | 400kHz |
| MAX20034HFEVKIT# | EV Kit | 2.2MHz |

#Denotes RoHS compliant.

│

## MAX20034 Evaluation Kit

## MAX20034 EV Kit Bill of Materials

| PART                                            |   QTY | DESCRIPTION                                                                                                                                                 | MFG PART #                                |
|-------------------------------------------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| C1, C2, C30, C32                                |     4 | CAPACITOR; SMT (1210); CERAMIC; 47UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                      | MURATA, GRM32ER71A476KE15                 |
| C3, C5, C29, C31, C37-C40                       |     8 | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                   | TDK, C1005C0G1H101G050                    |
| C4, C33                                         |     2 | CAPACITOR; SMT (1210); CERAMIC; 47UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                      | MURATA, GRM32ER71A476KE15                 |
| C6, C7, C20, C35, C36                           |     5 | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF ; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                           | TDK, CGA5L3X7R1H475K160AB                 |
| C8, C13, C23, C34                               |     4 | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                  | TDK, CGA2B3X7R1H104K; C1005X7R1H104K050BB |
| C10, C28                                        |     2 | CAPACITOR; SMT (0402); CERAMIC CHIP; 820PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                   | MURATA, GRM1555C1H821GA01                 |
| C11, C16                                        |     2 | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                            | TDK, CGA6P3X7R1H475K                      |
| C12, C26                                        |     2 | CAPACITOR; SMT (0402); CERAMIC CHIP; 2PF; 50V; TOL=0.1PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                  | TDK, C1005C0G1H020B050                    |
| C17                                             |     1 | CAPACITOR; SMT (CASE_D); ALUMINUM-ELECTROLYTIC; 47UF; 50V; TOL=20%; TG=-55 DEGC TO +105 DEGC; AUTO                                                          | PANASONIC, EEE-FT1H470AP                  |
| C18                                             |     1 | CAPACITOR; SMT (1206); CERAMIC CHIP; 6.8UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                  | TDK, C1206C685K4RAC; C3216X7R1C685K160AC  |
| C21                                             |     1 | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                  | MURATA, GRM188R71A225KE15; CL10B225KP8NNN |
| D2, D3                                          |     2 | DIODE; SCH; SCHOTTKY DIODE; SMT (SOD-323); PIV=30V; IF=0.2A                                                                                                 | ON SEMICONDUCTOR, BAT54H                  |
| JU1_EN1, JU2_EN2, JU3_FSYNC                     |     3 | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                            | SAMTEC, TSW-103-07-T-S                    |
| JU4_PGOOD1, JU5_PGOOD2                          |     2 | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                                                     | SAMTEC, TSW-102-07-T-S                    |
| JU6_EXTVCC                                      |     1 | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                           | SAMTEC, TSW-104-07-L-S                    |
| L1, L3                                          |     2 | EVKIT PART-INDUCTOR; SMT; SHIELDED; 2.2UH; TOL=+/-20%; 12A; NOTE: ALTERNATE FOOTPRINT IS CAPABLE TO HOST IHLP- 4040DZ-01; IHLP-2525CZ-L7 AND XAL50XX SERIES | VISHAY DALE, IHLP4040DZER2R2M01           |
| L2                                              |     1 | INDUCTOR; SMT (1206); FERRITE-BEAD; 1000; TOL=+/-25%; 1A                                                                                                    | FAIR-RITE, 2512061027Y1                   |
| PGND, PGND1, PGND2, VBATT, VBATTF, VOUT1, VOUT2 |     7 | EVK KIT PARTS; MAXIM PAD; NO WIRE TO BE SOLDERED ON THE MAXIMPAD                                                                                            | MAXIMPAD                                  |
| Q1, Q2, Q3, Q4                                  |     4 | TRAN; POWER MOSFET; SINGLE N-CHANNEL; NCH; SO-8FL; PD- (55W); I-(87A); V-(40V)                                                                              | ON SEMICONDUCTOR, NVMFS5C456NLT1G         |
| R1, R6, R12, R13, R22, R27                      |     6 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                                                                         | VISHAY DALE, CRCW04020000Z0EDHP           |
| R2, R3, R7, R25, R26, R29, R31, R34             |     8 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                                                                         | VISHAY DALE, CRCW04020000Z0EDHP           |
| R4, R24, R28, R30                               |     4 | RESISTOR; 0402; 20 OHM; 1%; 0.063W, THICK FILM                                                                                                              | VISHAY DALE, CRCW040220R0FK               |
| R5, R23                                         |     2 | RESISTOR; 1206; 0.015 OHM; 1%; 100PPM; 0.5W; THICK FILM                                                                                                     | LRC-LRF1206LF-01-R015F                    |
| R9, R14, R15, R20                               |     4 | RESISTOR; 0402; 51.1K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                   | VISHAY DALE, CRCW040251K1FK               |
| R10, R11, R17, R18                              |     4 | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                         | VISHAY DALE, CRCW06030000Z0               |
| R16                                             |     1 | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                       | VISHAY DALE, CRCW0402100KFK               |
| R19                                             |     1 | RESISTOR; 0402; 12.1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                      | VISHAY DALE, CRCW040212K1FK               |
| TP_FSYNC, TP_PGOOD1, TP_PGOOD2                  |     3 | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; NOT FOR COLD TEST                                                                                        | KEYSTONE, 5010                            |
| U1                                              |     1 | EVKIT PART-IC; AUTOMOTIVE START-STOP POWER SUPPLY; QFN28-EP; PACKAGE CODE: T2855Y-5C MAX20034ATIR/VY+                                                       | MAX20034                                  |
| -                                               |     1 | PCB: MAX20034EVKIT                                                                                                                                          | MAX20034                                  |

│

Evaluates: MAX20034

## MAX20034 EV Kit Schematic

<!-- image -->

Evaluates: MAX20034

## MAX20034 EV Kit PCB Layouts

MAX20034 EV Kit PCB Layout-Top

<!-- image -->

MAX20034 EV Kit PCB Layout-Internal2

<!-- image -->

MAX20034 EV Kit PCB Layout-Bottom

<!-- image -->

MAX20034 EV Kit PCB Layout-Internal3

<!-- image -->

│

## MAX20034 EV Kit PCB Layouts (continued)

MAX20034 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX20034 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves the riJht to chanJe the circuitry and speci¿cations without notice at any time.

<!-- image -->

│

Evaluates: MAX20034