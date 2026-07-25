<!-- lastmod 2022-08-03 -->
## MAX25520 Evaluation Kit

## General Description

The MAX25520 evaluation kit (EV kit) is a fully assembled  and  tested  surface-mount  PCB  used  to  evaluate the  MAX25520  automotive  2-Channel  TFT-LCD  Power Supply. The output rails, AVDD and NAVDD, can be programmed  independently  or  programmed  to  track  each other  by  using  a  specific  configuration.  Independent enable pins allow complete flexibility in powering up and down the outputs. The outputs are protected against overcurrent and undervoltage.

The device incorporates a fully integrated current-mode boost converter and a current-mode inverter with exter -nal rectifier. The EV kit operates at one of two switching frequencies,  420kHz  or  2.1MHz.  Operation  at  2.1MHz makes possible very compact dual-output power supplies.

The EV kit demonstrates the device's features of adjustable output voltage and fault protection.

## Features

- 2.65V to 5.5V Input Range (4.5V to 5.5V for MAX25520ATEC)
- Default Output Voltages in Tracking Mode
- 6.8V Output at 200mA (Boost Converter)
- -6.8V Output at -200mA (Inverting Regulator)
- Optional Adjustable Output Voltages
- Synchronous Boost Provides Positive Output at Up to 10.5V/200mA (+12V/200mA for MAX25520ATEC)
- Inverter Output Provides Up to -10.5V/-200mA (-12V/-200mA for MAX25520ATEC)
- Components Fit the 2.1MHz Frequency (To use 420kHz frequency, hardware changes are required)
- Spread-Spectrum
- UV Diagnostics on All Outputs and Fault Detection
- Complete Sequencing Flexibility
- -40°C to +125°C Operating Temperature Range

Evaluates: MAX25520

## Quick Start

## Required Equipment

- MAX25520 EV kit
- 2.65V to 5.5V, 3A power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Verify that shunts are installed across pins 1-2 on jumpers J1-J6.
- 2) Connect the positive terminal of the power supply to the TFT\_POWER\_IN pad and the negative terminal to the GND1 PCB pad.
- 3) Set the power supply TFT\_POWER\_IN at 5V.
- 4) Turn on the power supply.
- 5) Verify that the green LED (DS1) is on.
- 6) Verify that the red LED (DS2) is off (no faults condition).
- 7) Verify that the boost converter (AVDD PCB pad) is 6.8V.
- 8) Verify that the inverting converter (NAVDD PCB pad) is -6.8V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX25520 Evaluation Kit

## Detailed Description of Hardware

## Jumper Setting

In  the  following  tables,  several  jumper  settings  illustrate features of the MAX25520 EV kit.

## ENN\_SEL (J1)

It  is  possible  to  selectively  enable/disable  the  negative output NAVDD (see Table 1).

## ENP\_SEL (J2)

It  is  possible  to  selectively  enable/disable  the  positive output AVDD (see Table 2).

## Power LED Enable (J3)

A green LED (DS1) is used to indicate that the EV kit is powered on.

## Table 1. Jumper Functions (J1)

| SHUNT POSITION   | ENN_SEL           |
|------------------|-------------------|
| 1-2*             | Connected to DVDD |
| 2-3              | Connected to GND  |
| Open             | Disconnected      |

## Table 2. Jumper Functions (J2)

| SHUNT POSITION   | ENP_SEL           |
|------------------|-------------------|
| 1-2*             | Connected to DVDD |
| 2-3              | Connected to GND  |
| Open             | Disconnected      |

## Table 3. Jumper Functions (J3)

| SHUNT POSITION   | PWR_LED_EN   |
|------------------|--------------|
| 1-2*             | Connected    |
| Open             | Disconnected |

Evaluates: MAX25520

The  LED  can  be  disconnected  from  the  power  supply, allowing  precise  current-consumption  evaluation  (see Table 3).

## DVDD\_SEL (J4)

DVDD can be connected to VIN or it is possible to connect an external DVDD (see Table 4).

## GLOBAL\_EN (J5)

It  is  possible  to  connect  together  ENN  and  ENP,  only  if one of ENN\_SEL or ENP\_SEL is Open or if both are in their default condition 1-2 (see Table 5).

## Fault LED Enable (J6)

A red LED (DS2) is used to indicate a fault condition. The LED can be disconnected from the power supply, allowing precise current-consumption evaluation (see Table 6).

## Table 4. Jumper Functions (J4)

| SHUNT POSITION   | DVDD_SEL                   |
|------------------|----------------------------|
| 1-2*             | DVDD connected to VIN      |
| 2-3              | DVDD connected to EXT_DVDD |
| Open             | Disconnected               |

## Table 5. Jumper Functions (J5)

| SHUNT POSITION   | GLOBAL_EN    |
|------------------|--------------|
| 1-2*             | Connected    |
| Open             | Disconnected |

## Table 6. Jumper Functions (J6)

| SHUNT POSITION   | LED_EN       |
|------------------|--------------|
| 1-2*             | Connected    |
| Open             | Disconnected |

## MAX25520 Evaluation Kit

## Changing Output Voltages

The MAX25520 includes a current-mode boost converter with  an  output  switch  that  generates  up  to  +10.5V  and deliver  up  to  200mA.  The  boost  converter's  regulation voltage  (AVDD)  is  set  by  the  resistor  divider  connected between  AVDD,  FBP,  and  GND  pin.  Alternatively,  the default AVDD output voltage (+6.8V) can be chosen by connecting FBP to V18.

The inverting buck-boost converter is of the current-mode type and can generate down to -10.5V output voltage and deliver up to -200mA. It is internally compensated.

The  negative  source-driver  supply  voltage  (NAVDD)  is either  tightly  regulated  to  -AVDD  within  ±34mV  (when FBN is connected to IN) or its output voltage is set by the resistors connected between V18, FBN, and NAVDD.

## Tracking Mode (Default)

When the MAX25520 EV kit is set to work in the default tracking  mode, AVDD  default  value  is  6.8V  and  NAVDD default value is -6.8V. To set this configuration see Table 7.

## Table 7. Tracking Mode (Default)

| COMPONENT   | INSTALL/ DO NOT INSTALL (DNI)   | NOTE                                      |
|-------------|---------------------------------|-------------------------------------------|
| R4          | Install                         | 0Ω resistor installed between FBP and V18 |
| R10         | Install                         | 0Ω resistor installed between FBN and VIN |
| R6          | DNI                             | AVDD feedback                             |
| R5          | DNI                             | AVDD feedback                             |
| R16         | DNI                             | AVDD feedback                             |
| R8          | DNI                             | NAVDD feedback                            |
| R11         | DNI                             | NAVDD feedback                            |
| R17         | DNI                             | NAVDD feedback                            |

## Table 8. Tracking Mode with External Feedback

| COMPONENT   | INSTALL/ DO NOT INSTALL (DNI)   | NOTE                                      |
|-------------|---------------------------------|-------------------------------------------|
| R4          | DNI                             | 0Ω resistor installed between FBP and V18 |
| R10         | Install                         | 0Ω resistor installed between FBN and VIN |
| R6          | Install                         | AVDD feedback                             |
| R5          | Install                         | AVDD feedback                             |
| R16         | Install                         | AVDD feedback                             |
| R8          | DNI                             | NAVDD feedback                            |
| R11         | DNI                             | NAVDD feedback                            |
| R17         | DNI                             | NAVDD feedback                            |

Evaluates: MAX25520

## Tracking Mode with External Feedback

The output voltage of the boost converter can be adjusted using  an  external  resistive  voltage-divider.  AVDD  must be  set  to  a  value  from  6V  to  12V  for  MAX25520ATEC, NAVDD is automatically at the same value but negative.

Calculate the resistor values using the following equation:

<!-- formula-not-decoded -->

where V AVDD   is  the  desired  output  voltage.  To  set  this configuration see Table 8.

## Independent Output Voltage Mode with External Feedback

The  output  voltage  of  the  boost  converter  and  the  output voltage of the inverting buck-boost converter can be adjusted  independently  using  external  resistive  voltagedividers. AVDD must be set to a value from 6V to 12V for MAX25520ATEC, NAVDD must be set to a value (also different from AVDD) from -6V to -12V for MAX25520ATEC.

## MAX25520 Evaluation Kit

Calculate  the  resistor  values  using  the  following  equations:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where V AVDD  and V NAVDD  are the desired output voltages. To set this configuration see Table 9.

Table 9. Independent Output Voltage Mode with External Feedback

| COMPONENT   | INSTALL/ DO NOT INSTALL (DNI)   | NOTE                                      |
|-------------|---------------------------------|-------------------------------------------|
| R4          | DNI                             | 0Ω resistor installed between FBP and V18 |
| R10         | DNI                             | 0Ω resistor installed between FBN and VIN |
| R6          | Install                         | AVDD feedback                             |
| R5          | Install                         | AVDD feedback                             |
| R16         | Install                         | AVDD feedback                             |
| R8          | Install                         | NAVDD feedback                            |
| R11         | Install                         | NAVDD feedback                            |
| R17         | Install                         | NAVDD feedback                            |

## Table 10. EV Kit Hardware Changes for Operation at Frequency Switch (FSW) 420kHz

| COMPONENT   | FSW 2.1MHz   | FSW 420 k Hz   |
|-------------|--------------|----------------|
| L2          | 2.2µH        | 10µH           |
| C19         | DNI          | 10µF           |
| L3          | 2.2µH        | 10µH           |
| C26         | DNI          | 10µF           |

Evaluates: MAX25520

## Evaluation Kit Changes for Operation at FSW 420kHz

It  is  possible  to  set  a  switching  frequency  of  420kHz by choosing a different MAX25520 part number (MAX25520ATEA/V+). The standard EV kit components suit  the  2.1MHz  frequency.  To  use  420kHz,  hardware changes are required (see Table 10).

## Evaluation Kit Changes for Extended Voltage Range

Alternatively, it is possible to evaluate the extended voltage range device by replacing U1 with the MAX25220ATEC. The hardware changes in Table 11 are required.

Table 11. Tracking Mode with 12V External Feedback

| COMPONENT   | INSTALL/ DO NOT INSTALL (DNI)   | NOTE                                      |
|-------------|---------------------------------|-------------------------------------------|
| R4          | DNI                             | 0Ω resistor installed between FBP and V18 |
| R10         | Install                         | 0Ω resistor installed between FBN and VIN |
| R6          | 10K                             | AVDD feedback                             |
| R5          | 68K                             | AVDD feedback                             |
| R16         | 56K                             | AVDD feedback                             |
| R8          | DNI                             | NAVDD feedback                            |
| R11         | DNI                             | NAVDD feedback                            |
| R17         | DNI                             | NAVDD feedback                            |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25520EVKIT# | EV Kit |

# Denotes RoHS compliance.

## MAX25520 EV Kit Bill of Materials

| DESIGNATION        | DNI/DNP   |   QTY | MFGPART #                         | MANUFACTURER            | DESCRIPTION                                                                                                      |
|--------------------|-----------|-------|-----------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------------|
| C1-C3, C6, C22     | -         |     5 | CL10B106MQ8NRN                    | SAMSUNG ELECTRONICS     | 10UF; 20%; 6.3V; X7R; CERAMIC CAPACITOR (0603)                                                                   |
| C4, C5             | -         |     2 | EMK316BB7226ML                    | TAIYO YUDEN             | 22UF; 20%; 16V; X7R; CERAMIC CAPACITOR (1206)                                                                    |
| C7, C10, C20, C24  | -         |     4 | GRM188R72A104KA35; GRM188R72A104K | MURATA                  | 0.1UF; 10%; 100V; X7R; CERAMIC CAPACITOR (0603)                                                                  |
| C11, C13, C23      | -         |     3 | C0603C104K8RAC                    | KEMET                   | 0.1UF; 10%; 10V; X7R; CERAMIC CAPACITOR (0603)                                                                   |
| C12                | -         |     1 | GRM188C71E225KE11                 | MURATA                  | 2.2UF; 10%; 25V; X7S; CERAMIC CAPACITOR (0603)                                                                   |
| C14, C18           | -         |     2 | GRM188R71E105KA12                 | MURATA                  | 1UF; 10%; 25V; X7R; CERAMIC CAPACITOR (0603)                                                                     |
| C16, C25           | -         |     2 | GCJ32ER71E106KA18                 | MURATA                  | 10UF; 10%; 25V; X7R; CERAMIC CAPACITOR (1210)                                                                    |
| D1                 | -         |     1 | NRVTS245ESFT1G                    | ON SEMICONDUCTOR        | DIODE; SCH; SMT (SOD-123FL); PIV=45V; IF=2.0A                                                                    |
| DS1                | -         |     1 | LTST-C170GKT                      | LITE-ON ELECTRONICS INC | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                      |
| DS2                | -         |     1 | LTST-C170EKT                      | LITE-ON ELECTRONICS INC | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                        |
| J1, J2, J4         | -         |     3 | PEC03SAAN                         | SULLINS                 | CONNECTOR; MALE; THROUGH HOLE; 3PINS                                                                             |
| J3, J5, J6         | -         |     3 | PEC02SAAN                         | SULLINS                 | CONNECTOR; MALE; THROUGH HOLE; 2PINS                                                                             |
| L1                 | -         |     1 | ETQ-P3M1R0YFN                     | PANASONIC               | 1UH; 20%; 10.7A; COMPOSITE INDUCTOR                                                                              |
| L2, L3             | -         |     2 | 74437324022                       | WURTH ELECTRONICS INC   | 2.2UH; 20%; 3.25A; SHIELDED INDUCTOR                                                                             |
| MH1-MH4            | -         |     4 | 9032                              | KEYSTONE                | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                        |
| Q1                 | -         |     1 | BSS84                             | FAIRCHILD SEMICONDUCTOR | ENHANCEMENT MODE FIELD EFFECT TRANSISTOR, P-CHANNEL, SOT-23, PD=0.36W, ID=-0.13A, VDSS=-50V, -55degC TO +150degC |
| R1, R14, R18, R19  | -         |     4 | CR0603-FX-1001ELF                 | BOURNS                  | 1K; 1%; +/-100PPM/DEGC; 0.1000W; RESISTOR (0603)                                                                 |
| R2, R3             | -         |     2 | CRCW0603100KJN                    | VISHAY                  | 100K; 5%; +/-200PPM/DEGC; 0.1000W; RESISTOR (0603)                                                               |
| R4, R10            | -         |     2 | RC1608J000CS                      | SAMSUNG ELECTRONICS     | 0; 5%; JUMPER; 0.1000W; RESISTOR (0603)                                                                          |
| R15                | -         |     1 | CRCW060310K0FK                    | VISHAY DALE             | 10K; 1%; +/-100PPM/DEGC; 0.1000W; RESISTOR (0603)                                                                |
| U1                 | -         |     1 | MAX25520ATEB/V+                   | MAXIM                   | IC AUTOMOTIVE 2-CHANNEL TFT-LCD POWER SUPPLY                                                                     |
| C8, C9, C15, C17   | DNP       |     0 | 0603YC101KAT2A                    | AVX                     | 100PF; 10%; 16V; X7R; CERAMIC CAPACITOR(0603)                                                                    |
| C19, C21, C26, C27 | DNP       |     0 | GCJ32ER71E106KA18                 | MURATA                  | 10UF; 10%; 25V; X7R; CERAMIC CAPACITOR (1210)                                                                    |
| R5                 | DNP       |     0 | ERJ-3EKF6492                      | PANASONIC               | 64.9K; 1%; +/-100PPM/DEGC; 0.1000W; RESISTOR (0603)                                                              |
| R6, R8             | DNP       |     0 | CRCW060310K0FK                    | VISHAY DALE             | 10K; 1%; +/-100PPM/DEGC; 0.1000W; RESISTOR (0603)                                                                |
| R7, R9, R12, R13   | DNP       |     0 | ERJ-P03F10R0V                     | PANASONIC               | 10; 1%; +/-200PPM/DEGC; 0.2000W; RESISTOR (0603)                                                                 |
| R11                | DNP       |     0 | CRCW060337K4FK                    | VISHAY DALE             | 37.4K; 1%; +/-100PPM/DEGK; 0.1000W; RESISTOR (0603)                                                              |
| R16, R17           | DNP       |     0 | RC1608J000CS                      | SAMSUNG ELECTRONICS     | 0; 5%; JUMPER; 0.1000W; RESISTOR (0603)                                                                          |
| TOTAL              |           |    46 |                                   |                         |                                                                                                                  |

Evaluates: MAX25520

## MAX25520 EV Kit Schematic

<!-- image -->

## MAX25520 EV Kit PCB Layout Diagrams

MAX25520 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX25520 EV Kit PCB Layout-Top View

<!-- image -->

MAX25520 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX25520 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

## MAX25520 EV PCB Layout Diagrams (continued)

MAX25520 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX25520 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX25520 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/21            | Initial release                                                                                                                                                                                            | -               |
|                 1 | 2/21            | Updated Features secton, Tracking Mode with External Feedback section, and Independent Output Voltage Mode with External Feedback section, Added Evaluation Kit Changes for Extended Voltage Range section | 1, 3, 4         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX25520