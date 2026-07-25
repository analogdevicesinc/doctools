<!-- lastmod 2022-08-02 -->
## MAX77839 Evaluation Kit

## General Description

The MAX77839 evaluation kit (EV kit) provides a proven design  to  evaluate  MAX77839,  a  2.5A  buck-boost  converter.  The  IC  is  capable  of  1.8V  to  5.5V  input  and  is output  voltage  adjustable  between  2.3V  to  5.3V  (with SEL pin). The factory default output voltage of this EV kit is set at 3.3V. Output voltage can be adjusted by changing the SEL resistor value (R3). GPIO pin is available to support Force PWM or POK functionality. The EV kit is compatible with any version of the MAX77839 FC2QFN IC (MAX77827AEFQ+ is the default).

## Evaluates: MAX77839 (FC2QFN)

## Features

- Sense points for high-accuracy measurements
- Accessible test points for EN, POK, and OUTS
- Output Voltage adjustable with SEL
- FPWM and Skip mode configurable (A and C options) (Skip mode default)
- POK status configurable (B and D options)
- Active Discharge functionality

Ordering Information appears at end of data sheet.

Figure 1. MAX77839 Evaluation Board

<!-- image -->

<!-- image -->

## MAX77839 Evaluation Kit

## EV Kit Specifications and Default Configurations

- IC Part Number: MAX77839AEFQ+T
- Switching Current Limit = 4.4A
- Active discharge engaged when EN = 0

UVLO Rising = 1.8V, UVLO Falling = 1.73V (MAX77839AEWC+)

## Quick Start

## Required Equipment

- MAX77839 EV kit
- Adjustable DC power supply
- A 1.8V DC power supply (optional)
- Digital multimeters

## Table 1. EV Kit Default Specifications

Figure 2. EV Kit Connection Block Diagram

| SPECIFICATION          | TEST CONDITIONS                                |   MIN |   TYP |   MAX | UNIT   |
|------------------------|------------------------------------------------|-------|-------|-------|--------|
| Input Voltage          |                                                |   1.8 |       |   5.5 | V      |
| Output Voltage         | Configurable by SEL resistor R3 (see Table 2). |   2.3 |       |   5.3 | V      |
| Default Output Voltage |                                                |       |   3.3 |       | V      |
| Output Current         |                                                |     0 |       |   2.5 | A      |
| Switching Frequency    |                                                |       |   2.2 |       | MHz    |
| Current Limit          | A and B options                                |       |   4.4 |       | A      |
| Peak Efficiency        | 3.3V IN , 3.3V OUT , 500mA load                |       |       |  96.0 | %      |

<!-- image -->

Figure 3. EV Kit Simplified Block Diagram

<!-- image -->

│

## Evaluates: MAX77839 (FC2QFN)

## Setup Overview

A typical bench setup for MAX77839 FC2QFN EV kit is shown in Figure 2, and a simplified EV kit block diagram is shown in Figure 3.

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation. Use twisted wires of appropriate gauge (20AWG) that are as short as possible to connect the load and power sources.

- 1) Ensure that the EV kit has the correct jumper settings, as shown in Table 1.
- 2) Connect a DVM to the VINS and PGNDS1 sense pins to measure input voltage.
- 3) Connect a DVM to the OUTS and PGNDS2 sense pins to measure output voltage.
- 4) Apply a power supply set to 0V (100mA current limit) across the VIN and PGND1 terminals of the EV kit. Turn the supply on and increase the voltage to 3.8V.
- 5) Confirm the DVM connected to OUTS and PGNDS\_ OUT reads the default output voltage of the EV kit (3.3V).

Evaluates: MAX77839 (FC2QFN)

Table 2. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | FUNCTION                                                                 |
|----------|--------------------|------------------|--------------------------------------------------------------------------|
| J1       | EN                 | 1-2*             | Connects EN to HI (MAX77839 is enabled by default)                       |
| J2       | GPIO               | 1-2              | POK Selection (Options B and D)                                          |
| J2       | GPIO               | 2-3*             | FPWM Selection (Options A and C)                                         |
| J3       | FPWM               | 1-2              | Enables FPWM function                                                    |
| J3       | FPWM               | 2-3*             | Enables SKIP mode function                                               |
| J4       | SEL                | 1-2*             | Configures output voltage with potentiometer R3. (0Ω = 3.3V OUT Default) |
| J5       | LOGIC SUPPLY       | 1-2*             | Connects HI to VIN                                                       |
| J5       | LOGIC SUPPLY       | 2-3              | Connects HI to External Supply (EXT)                                     |

## Detailed Description of Hardware

The  MAX77839  EV  kit  demonstrates  the  MAX77839 buck-boost. It regulates output from input voltage ranges from  1.8V  to  5.5V.  Programmable  output  range  is  from 2.3V  to  5.3V  with  100mV  steps.  EV  kit  is  suited  with  a general  DC  input.  Table  2  lists  jumpers  and  associated functions that are available on the EV kit.

The MAX77839 includes a SEL pin to configure the output voltage on startup. Resistors with a tolerance of 1% (or better) should be chosen for R3, with nominal values specified in Table 3.

## High Temperature Testing

The  MAX77839  is  rated  for  operation  under  ambient temperatures up to 125°C. Note that not all components on the EV kit are rated for temperatures that high. Some ceramic  capacitors  experience  extra  leakage  when  put under  temperatures  higher  than  they  are  rated  for,  and supply  current  readings  for  the  IC  might  be  larger  than expected. Double check the components on the EV kit if testing at 125°C ambient temperatures.

List of caps not rated for 125°C:

- C2 (output capacitor)
- C4 (VIN bulk capacitor)

Consider replacing these components if IC operation at 125°C ambient temperature is an important use case.

## Table 3. MAX77839 RSEL Selection Table

|   VOUT (V) | RSEL (kΩ)   |
|------------|-------------|
|        3.3 | Short (0Ω)  |
|        2.3 | 4.99        |
|        2.4 | 5.90        |
|        2.5 | 7.15        |
|        2.6 | 8.45        |
|        2.7 | 10.0        |
|        2.8 | 11.8        |
|        2.9 | 14.0        |
|        3.0 | 16.9        |
|        3.1 | 20.0        |
|        3.2 | 23.7        |
|        3.4 | 28.0        |
|        3.5 | 34.0        |
|        3.6 | 40.2        |
|        3.7 | 47.5        |
|        3.8 | 56.2        |
|        3.9 | 66.5        |
|        4.0 | 80.6        |
|        4.1 | 95.3        |
|        4.2 | 113         |
|        4.3 | 133         |
|        4.4 | 162         |
|        4.5 | 191         |
|        4.6 | 226         |
|        4.7 | 267         |
|        4.8 | 324         |
|        4.9 | 383         |
|        5.0 | 452         |
|        5.1 | 536         |
|        5.2 | 634         |
|        5.3 | 768         |
|       2.85 | 909 or Open |

│

## Test Points and Critical Node Measurement (VOUT and LX)

The  EV  kit  comes  with  sockets  presoldered  onto  the board for measuring the critical nodes VOUT, LX1, and LX2. Use these probe sockets to eliminate as much noise as possible when measuring the critical nodes. To ensure best results, use a very short ground wire from the ground sleeve of the scope probe to the GND side of the probe socket, and use the bare tip of the probe directly to the signal  side  of  the  probe  socket.  Following  these  guidelines  gives  the  most  accurate  results  when  measuring parameters  like  output  voltage  ripple,  switching  waveforms, and load transient response.

## PCB Layout Guideline

Careful  circuit  board  layout  is  critical  to  achieve  low switching  power  losses  and  clean,  stable  operation. Refer  to https://www.maximintegrated.com/products/ MAX77839 for  the  PCB Layout Guideline section of the MAX77839 data sheet.

## Ordering Information

| PART            | U1 IC         | DEFAULT OUTPUT VOLTAGE   | UVLO FALLING   | UVLO RISING   |
|-----------------|---------------|--------------------------|----------------|---------------|
| MAX77839QEVKIT# | MAX77839AEFQ+ | 3.3V                     | 1.73V          | 1.8V          |

# Denotes RoHS compliant

## Evaluates: MAX77839 (FC2QFN)

Figure 4. EV Kit Probing Critical Nodes

<!-- image -->

│

## MAX77839 Evaluation Kit

## MAX77839 EV Kit Bill of Materials

| PART                                                                                                         | QTY                                                                                                          | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | DESCRIPTION                                                                                                        |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| C1                                                                                                           | 1                                                                                                            | GRM188D71A106MA7 3                                                                                           | MURATA                                                                                                       | 10 μF ±20%, 10V X7T CERAMIC CAPACITOR (0603)                                                                       |
| C2                                                                                                           | 1                                                                                                            | GRM188R60J476ME1 5                                                                                           | MURATA                                                                                                       | 47 μF ±20%, 6.3V X5R CERAMIC CAPACITOR (0603)                                                                      |
| C3                                                                                                           | 1                                                                                                            | GRM155R70J105MA1 2                                                                                           | MURATA                                                                                                       | 1 μF ±20%, 6.3V X7R CERAMIC CAPACITOR (0402)                                                                       |
| J1-J3, J5                                                                                                    | 2                                                                                                            | PBC03SAAN                                                                                                    | SULLINS ELECTRONICS CORP.                                                                                    | STRAIGHT CONNECTOR, 3 PINS                                                                                         |
| J4                                                                                                           | 1                                                                                                            | PBC02SAAN                                                                                                    | SULLINS ELECTRONICS CORP.                                                                                    | STRAIGHT CONNECTOR, 2 PINS                                                                                         |
| L1                                                                                                           | 1                                                                                                            | XAL4020-102ME                                                                                                | COILCRAFT                                                                                                    | 1 μ H ±20%, ISAT=9.6A, DCR=13.25m Ω                                                                                |
| R2                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0 Ω , RESISTOR (0402)                                                                                              |
| U1                                                                                                           | 1                                                                                                            | MAX77839AE FQ +                                                                                              | MAXIM                                                                                                        | BUCK-BOOST (11 FC2QFN ), MAX77839AE FQ +                                                                           |
| Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77839 evaluation circuit and solution silkscreen.       |
| L2                                                                                                           | 1                                                                                                            | CIGT252010EH1R0M                                                                                             | SAMSUNG ELECTRONICS                                                                                          | INDUCTOR; SMT (1008); MAGNETICALLY SHIELDED; 1UH; TOL=+/-20%; 4.3A                                                 |
| LX1, LX2, OUT2                                                                                               | 3                                                                                                            | SS-102-TT-2                                                                                                  | SAMTEC                                                                                                       | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                               |
| OUT1, PGND1, PGND2, VIN                                                                                      | 4                                                                                                            | 9020 BUSS                                                                                                    | WEICO WIRE                                                                                                   | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                           |
| OUTS, VINS                                                                                                   | 2                                                                                                            | 5000                                                                                                         | KEYSTONE                                                                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| PGNDS1, PGNDS2                                                                                               | 2                                                                                                            | 5001                                                                                                         | KEYSTONE                                                                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| PCB                                                                                                          | 1                                                                                                            | MAX77839 FC2QFN                                                                                              | MAXIM                                                                                                        | PCB:MAX77839 FC2QFN                                                                                                |
| R3                                                                                                           | 1                                                                                                            | 3296Y-1- 105LF                                                                                               | BOURNS                                                                                                       | RES; THROUGH HOLE-RADIAL LEAD; 1M; 10%; +/-100PPM/DEGC; 0.5W                                                       |
| R5                                                                                                           | 0                                                                                                            | CRCW040215K0FK                                                                                               | VISHAY DALE                                                                                                  | RESISTOR; 0402; 15K; 1%; 100PPM; 0.0625W; THICK FILM                                                               |

│

Evaluates: MAX77839 (FC2QFN)

## MAX77839 EV Kit Schematic

<!-- image -->

## MAX77839 EV Kit PCB Layout Diagrams

MAX77839 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77839 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77839 EV Kit PCB Layout-Layer 2

<!-- image -->

│

Evaluates: MAX77839 (FC2QFN)

## MAX77839 EV Kit PCB Layout Diagrams (continued)

MAX77839 EV Kit PCB Layout-Layer 3

<!-- image -->

MAX77839 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX77839 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX77839 (FC2QFN)