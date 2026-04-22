<!-- lastmod 2024-03-21 -->
<!-- image -->

## Evaluates: MAX38656A

## General Description

The MAX38656AEVK#WLP evaluation kit (EV kit) evaluates the MAX38656A  IC  in a WLP  package. MAX38656A is a tiny 1.8V to 5.5V Input, 420nA IQ, 1.5A nanoPower Buck Converter with 100% Duty-Cycle Operation. The EV kit operates from an input range of 1.8V to 5.5V and provides resistor-configurable output voltages from 0.7V to 3.3V. The EV kit delivers up to 1.5A of current. The  EV  kit  comes  with  the  MAX38656AANT+  installed. Refer to the MAX38656 datasheet for full MAX38656A IC features, benefits, and parameters.

## Features and Benefits

- Evaluates the MAX38656A IC in a (1.58mm x 0.89mm, 0.4mm Pitch) 6-Pin WLP Package
- 1.8V to 5.5V Input Voltage Range
- 0.7V to 3.3V Configurable Output Voltage
- Up to 1.5A Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38656AEVK#WLP EV Kit Files

| FILE                        | DESCRIPTION              |
|-----------------------------|--------------------------|
| MAX38656A WLP EV BOM        | EV Kit Bill of Materials |
| MAX38656A WLP EV PCB Layout | EV Kit Layout            |
| MAX38656A WLP EV Schematic  | EV Kit Schematic         |

## MAX38656AEVK#WLP Evaluation Kit

## Quick Start

## Required Equipment

- MAX38656AEVK#WLP EV kit
- 5.5V, 3A DC power supply
- Load capable of sinking 1.5A current
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation.

1. Verify  that  jumpers  JU1  and  JU2  are  in  their  default positions, as shown in Table 1 and Table 2.
2.  Set the input power supply voltage to 5V. Disable the power supply.
3.  Connect the positive terminal of the input power supply to the IN terminal post and the negative terminal of the input power supply to the nearest GND terminal post.
4.  Connect the positive terminal of the 1.5A load to the OUT terminal post and the negative terminal of the load to the nearest GND terminal post.
5.  Connect the DVM between the OUT and nearest GND terminal posts.
6.  Turn on the power supply.
7.  Enable the load.
8. Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 1.8V.

Ordering Information appears at end of data sheet.

## MAX38656AEVK#WLP EV Kit Board Photo

<!-- image -->

319-100950; Rev 0; 11/22

## Evaluates: MAX38656A

## Detailed Description of Hardware

The MAX38656AEVK#WLP evaluation kit evaluates the MAX38656A IC in a WLP package. MAX38656A is a tiny 1.8V to 5.5V Input, 420nA IQ, 1.5A nanoPower Buck Converter with 100% Duty-Cycle Operation. The EV kit operates over an input range of 1.8V to 5.5V and provides resistor-configurable output voltages from 0.7V to 3.3V. The EV kit delivers up to 1.5A of current depending on the input voltage to the output voltage ratio. The EV kit comes with the MAX38656AANT+ installed.

## EN

The MAX38656AEVK#WLP EV kit provides a jumper JU1 to enable or disable the MAX38656A. See Table 1 for jumper JU1 settings.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION                                                              |
|------------------|--------------------------------------------------------------------------|
| 1-2*             | MAX38656A EV Kit Output always enabled                                   |
| 1-3              | MAX38656A EV Kit controlled by external (TTL) source connected to EXT_EN |
| 1-4              | MAX38656A EV Kit Output is always disabled                               |

## RSEL Setting

## Table 2. RSEL (JU2)

| SHUNT POSITION   | DESCRIPTION   |
|------------------|---------------|
| 1-2              | OUT = 1.0V    |
| 1-3              | OUT = 1.5V    |
| 1-4*             | OUT = 1.8V    |
| 1-5              | OUT = 3.3V    |
| OPEN             | OUT = 2.5V    |

## Component Suppliers

| SUPPLIER          | WEBSITE                              |
|-------------------|--------------------------------------|
| Panasonic         | https://na.industrial.panasonic.com/ |
| Taiyo Yuden       | www.ty-top.com                       |
| TDK               | www.tdk-electronics.tdk.com/         |
| Wurth Electronics | www.we-online.com                    |

Note: Indicate that you are using the MAX38656A when contacting these component suppliers.

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38656AEVK#WLP | EV Kit |

#Denotes RoHS-compliant.

## MAX38656AEVK#WLP

## Evaluation Kit

Evaluates: MAX38656A

## MAX38656A EV Kit Bill of Materials

|   ITEM | REF_DES   |   QTY | MFG PART #                                                                     | MANUFACTURER                                               | VALUE         | DESCRIPTION                                              |
|--------|-----------|-------|--------------------------------------------------------------------------------|------------------------------------------------------------|---------------|----------------------------------------------------------|
|      1 | C1        |     1 | GRM31CR71A226KE15; GCM31CR71A226KE01; GMC31X7R226K10NT                         | MURATA; MURATA; CAL-CHIP ELECTRONIC INC.                   | 22UF          | CAP; SMT (1206); 22UF; 10%; 10V; X7R; CERAMIC            |
|      2 | C2        |     1 | GRM32ER71A476KE15; 1210ZC476KAT2A                                              | MURATA; AVX                                                | 47UF          | CAP; SMT (1210); 47UF; 10%; 10V; X7R; CERAMIC            |
|      3 | C5        |     1 | 25SVPF100M                                                                     | PANASONIC                                                  | 100UF         | CAP; SMT (CASE_E7); 100UF; 20%; 25V; ALUMINUM-ORGANIC    |
|      4 | J1-J4     |     4 | 108-0740-001                                                                   | EMERSON NETWORK POWER                                      | 108-0740-001  | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN |
|      5 | JU1       |     1 | PEC04SAAN                                                                      | SULLINS ELECTRONICS CORP.                                  | PEC04SAAN     | CONNECTOR; MALE; THROUGH HOLE;                           |
|      6 | JU2       |     1 | PBC05SAAN                                                                      | SULLINS ELECTRONICS CORP.                                  | PBC05SAAN     | CONNECTOR; MALE; THROUGH HOLE;                           |
|      7 | L1        |     1 | DFE252012F-1R5M                                                                | MURATA                                                     | 1.5UH         | INDUCTOR; SMT (1008); SHIELDED; 1.5UH; 20%; 2.7A         |
|      8 | R2        |     1 | CRCW0603191KFK                                                                 | VISHAY DALE                                                | 191K          | RES; SMT (0603); 191K; 1%; +/-100PPM/DEGK; 0.1000W       |
|      9 | R3        |     1 | ERJ-3EKF6343                                                                   | PANASONIC                                                  | 634K          | RES; SMT (0603); 634K; 1%; +/-100PPM/DEGC; 0.1000W       |
|     10 | R4        |     1 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-002ELF; CRCW060320K0FK; RMCF0603FT20K0 | ROHM; PANASONIC; BOURNS; VISHAY; STACKPOLE ELECTRONICS INC | 20K           | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W        |
|     11 | R5        |     1 | CRCW060356K2FK; ERJ-3EKF5622                                                   | VISHAY; PANASONIC                                          | 56.2K         | RES; SMT (0603); 56.2K; 1%; +/-100PPM/DEGC; 0.1000W      |
|     12 | R7        |     1 | ERJ-2GE0R00                                                                    | PANASONIC                                                  | 0             | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W              |
|     13 | SU1, SU2  |     2 | S1100-B; SX1100-B; STC02SYAN                                                   | KYCON; KYCON; SULLINS ELECTRONICS CORP.                    | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN;            |
|     14 | TP5       |     1 | 5002                                                                           | KEYSTONE                                                   | N/A           | TEST POINT; PIN DIA=0.1IN;                               |
|     15 | TP6, TP7  |     2 | 5001                                                                           | KEYSTONE                                                   | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD     |
|     16 | TP8, TP9  |     2 | 131-4353-00                                                                    | TEKTRONICS                                                 | 131-4353-00   | CONNECTOR; WIREMOUNT;                                    |
|     17 | U1        |     1 | MAX38656AANT+                                                                  | ADI                                                        | MAX38656AANT+ | EVKIT PART - IC; WLP6; PACKAGE CODE: N60R1+1;            |
|     18 | PCB       |     1 | MAX38656AWLP                                                                   | ADI                                                        | PCB           | PCB:MAX38656AWLP                                         |
|     19 | C3        |     1 | N/A                                                                            | N/A                                                        | OPEN          | CAPACITOR; SMT (1210); OPEN; DNP                         |
|     20 | R1        |     1 | N/A                                                                            | N/A                                                        | OPEN          | RESISTOR; 0402; OPEN; DNP                                |

## MAX38656AEVK#WLP

## Evaluation Kit

Evaluates: MAX38656A

## MAX38656AEVK#WLP EV Kit Schematic Diagram

<!-- image -->

## MAX38656AEVK#WLP

## Evaluation Kit

## Evaluates: MAX38656A

## MAX38656AEVK#WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX38656A EV Kit PCB Layout -Silk Top

<!-- image -->

MAX38656A EV Kit PCB Layout -Top View

MAX38656A EV Kit PCB Layout -Bottom View

<!-- image -->

MAX38656A EV Kit PCB Layout -Silk Bottom

<!-- image -->

## MAX38656AEVK#WLP

## Evaluation Kit

## Evaluates: MAX38656A

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 09/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX38656AEVK#WLP

## Evaluation Kit