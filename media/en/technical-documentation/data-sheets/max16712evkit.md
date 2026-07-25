<!-- lastmod 2022-08-02 -->
## MAX16712 Evaluation Kit

## General Description

The  MAX16712  evaluation  kit  (EV  kit)  is  a  reference platform  designed  for  the  evaluation  of  MAX16712,  a dual-output,  fully  integrated,  highly  efficient,  step-down DC-DC switching regulator IC. This EV kit can deliver up to 6A load per output. The two outputs can be connected as a single-output, dual-phase regulator that supports up to 12A load current. The EV kit comprises a fully assem -bled and tested PCB implementation of the MAX16712. Jumper pins, test points, and input/output connectors are included for flexibility and convenience in a wide range of applications.

## MAX16712 EV Kit Board

<!-- image -->

<!-- image -->

## Features

- 2.7V to 16V Input Voltage Range
- 0.5V to 5.8V Output Voltage Range
- High Efficiency and Power Density
- Low Component Count
- Dual-output or Single-output Dual-Phase Operation
- Optimized Performance
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX16712

## MAX16712 Evaluation Kit

## Quick Start

## Required Equipment

- MAX16712 EV kit
- 2.7V to 16V power supply
- 0A to 12A load
- Oscilloscope, probes, voltmeter
- MAX16712 EV kit data sheet
- MAX16712 product data sheet

## Procedure

The EV kit is fully assembled and tested. EV kit is preset with  MAX16712 dual-output  operation  with  1V  on  rail  1 and 1.2V on rail 2. Follow the steps below to verify board operation.

For dual output operation:

- 1) Connect a powered-off 2.7V to 16V input supply, then connect to J1 (positive terminal) and J2 (negative terminal). Although not required, connect supply sense leads to J3 for best accuracy .
- 2) Connect the load to edge connector J20 for rail 1 or J27 for rail 2 (positive on top, negative on bottom).
- 3) Screw connectors are available for VOUT1 and VOUT2.
- 4) Connect the VOUT scope probe/voltmeter to J22 for rail 1 or J23 for rail 2.
- 5) Filtered VOUT for best accuracy can be pick on J9 (See schematic).
- 6) Turn on power supply.
- 7) Position the SW1 or SW2 toggle switch to enable the IC.
- 8) Verify the two output are set to their nominal value (1V for VOUT1, 1.2V for VOUT2).

For dual phase operation (interleaved two phases buck, double the output current. 12A max output current)

- To enable the dual phase operation, remove R14 for rail 2 sense line and install 0Ω in R6 to pull SNSP2 to AVDD.
- When configured to dual-phase operation, only the control loop for rail 1 works, and the control loop for rail 2 is bypassed. EN1 and PGOOD1 are used in dual-phase operation mode to enable the device and

## Evaluates: MAX16712

indicate power-good status. EN2 and PGOOD2 can be disconnected.

- Install a 0Ω resistor for R44-R45-R46 to short the outputs of the two rails.
- Use the same inductor for LX1 and LX2 or replace with a two-phase couple inductor.
- Repeat the above steps described for the dual-out -put operation.

## Detailed Description of Hardware

## Operation

The  MAX16712  IC  is  a  monolithic,  dual-output,  highfrequency step-down switching regulator with internal bias LDO, optimized for applications requiring small size and high-efficiency. Detailed product and application informa -tion is provided in the MAX16712 IC data sheet.

## Output Enable (OE)

OE is used to enable/disable the output voltage. For dual output operation, rail 1 output voltage is enabled/disabled by  SW1.  Rail  2  output  voltage  is  enabled/disabled  by SW2. For dual-phase operation, EN1 is used, and EN2 can be disconnected.

## Output-Voltage Selection

The MAX16712 EV kit is set up to initially boot up to an output voltage of 1V of rail 1 and 1.2V of rail 2. The device has internal and fixed 0.5V reference voltage. To achieve output voltage, a voltage-divider is placed in the feedback path:

<!-- formula-not-decoded -->

where:

VOUT = Output voltage

VREF = 0.5V fixed reference voltage

RFB 1 = Top divider resistor

RFB 2 = Bottom divider resistor

## Soft-Start

When VDDH and EN are above their rising thresholds, soft-start begins and switching is enabled. The soft-start ramp time  is  3ms.  The  device  supports  smooth  startup with output pre-biased.

## PGM0 Resistor Value (Switching Frequency and Scenario Selection)

On the PGM0 pin, a resistor  is  present.  On  this  EV  kit board, R11 is 2.87kΩ. Set the value of this resistor prop -erly to set the switching frequency for the two regulators and the control loop gain.

For this EV kit, the switching frequency is set to 1000kHz for  both rails,  and control scenario A' is selected. Refer to the Switching Frequency and Scenario Selection table and  the  Pre-defined  Scenario  table  on  the  MAX16712 product data sheet for further details.

## PGM1 and PGM2 (OCP Protection)

The PGM1 and PGM2 pins are connected to J8 and J14. When  shorting  these  pins  at  AVDD,  AGND,  or  leaving them open, it is possible to select three different over cur -rent protection (OCP) thresholds according to the PGM1 POCP Selection for Output 1 table and the PGM2 POCP Selection for Output 2 table on the IC data sheet docu -ment. For PGM1, select OCP option for rail 1. For PGM2, select OCP option for rail 2.

## Status Monitoring

Whenever the part is actively regulating, and the output voltage is within the power-good window, the PGOOD pin

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16712EVKIT# | EV Kit |

is  high.  In  all  other  conditions,  including  enabled  but  in a fault state, the PGOOD pin is pulled low. Refer to the MAX16712 IC data sheet for more details.

## Input-Voltage Monitoring

The input supply can be monitored on J4 for VDDH and J5 for GND.

## Switching-Voltage Monitoring

The switching waveform can be monitored on J6 for LX1 and J7 for LX2.

## Output-Voltage Monitoring

J22 and J23 monitor the output voltage of rail 1 and rail 2, respectively. Do not use these test points for loading.

## Efficiency Testing

The J9 pin connector provides convenient access to input supply and output sense points filtered out for a low noise measurement.

Measure input and output currents with 0.1% lab shunts.

For  increased  accuracy,  perform  a  test  by  running  the same current through both shunts to measure and cali -brate shunt mismatch.

## MAX16712 Evaluation Kit

## MAX16712 EV Kit Bill of Materials

|   ITEM | REF_DES                                                        | DNI/DNP   |   QTY | MFG PART #                                                                   | MANUFACTURER                | VALUE            | DESCRIPTION                                                                                | COMMENTS   |
|--------|----------------------------------------------------------------|-----------|-------|------------------------------------------------------------------------------|-----------------------------|------------------|--------------------------------------------------------------------------------------------|------------|
|      1 | C1, C2                                                         |           |     2 | C1005X7S0J225K050BC; GRM155C70J225KE11                                       | TDK;MURATA                  | 2.2UF            | CAP; SMT (0402); 2.2UF; 10%; 6.3V; X7S; CERAMIC                                            |            |
|      2 | C3, C5                                                         |           |     2 | TPSD107K020R0085                                                             | AVX                         | 100UF            | CAP; SMT (7343); 100UF; 10%; 20V; TANTALUM                                                 |            |
|      3 | C4, C14, C17                                                   |           |     3 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | MURATA;TDK; TAIYO YUDEN;TDK | 0.1UF            | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                             |            |
|      4 | C6, C27-C29, C33                                               |           |     5 | GRM155C81E105KE11                                                            | MURATA                      | 1UF              | CAP; SMT (0402); 1UF; 10%; 25V; X6S; CERAMIC                                               |            |
|      5 | C7, C53                                                        |           |     2 | CL31X226KAHN3N; GRM31CC81E226KE11                                            | SAMSUNG;MURATA              | 22UF             | CAP; SMT (1206); 22UF; 10%; 25V; X6S; CERAMIC                                              |            |
|      6 | C8, C9                                                         |           |     2 | GRM31CR71E106KA12; CL31B106KAHNNN                                            | MURATA;SAMSUNG ELECTRONICS  | 10UF             | CAP; SMT (1206); 10UF; 10%; 25V; X7R; CERAMIC                                              |            |
|      7 | C10, C11                                                       |           |     2 | JMK105B7224KV                                                                | TAIYO YUDEN                 | 0.22UF           | CAP; SMT (0402); 0.22UF; 10%; 6.3V; X7R; CERAMIC                                           |            |
|      8 | C12, C13                                                       |           |     2 | C1608X7R1V105K080AC                                                          | TDK                         | 1UF              | CAP; SMT (0603); 1UF; 10%; 35V; X7R; CERAMIC                                               |            |
|      9 | C24, C25                                                       |           |     2 | C0402C103K3RAC; GRM155R71E103KA01; C1005X7R1E103K050BB                       | KEMET;MURATA;TDK            | 0.01UF           | CAP; SMT (0402); 0.01UF; 10%; 25V; X7R; CERAMIC;                                           |            |
|     10 | C26, C30                                                       |           |     2 | C0402C102K5GAC                                                               | KEMET                       | 1000PF           | CAP; SMT (0402); 1000PF; 10%; 50V; C0G; CERAMIC                                            |            |
|     11 | C37, C39, C42, C46, C48-C52, C56, C58, C60, C63, C65, C69, C70 |           |    16 | GRM188C80J226ME15                                                            | MURATA                      | 22UF             | CAP; SMT (0603); 22UF; 20%; 6.3V; X6S; CERAMIC                                             |            |
|     12 | C40, C54                                                       |           |     2 | T491X477K010AT                                                               | KEMET                       | 470UF            | CAP; SMT (7343); 470UF; 10%; 10V; TANTALUM                                                 |            |
|     13 | D1                                                             |           |     1 | 1N5250B                                                                      | FAIRCHILD SEMICONDUCTOR     | 20V              | DIODE, ZENER, DO-35, Pd=0.5W, Vz=20V@Iz=6.2mA                                              |            |
|     14 | DS1, DS2                                                       |           |     2 | LGL29K-G2J1-24-Z                                                             | OSRAM                       | LGL29K-G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                       |            |
|     15 | J1                                                             |           |     1 | 3750-2                                                                       | POMONA ELECTRONICS          | 3750-2           | CONNECTOR; FEMALE; SMT; COLOR RED; STANDARD BINDING POST; STRAIGHT; 1PIN                   |            |
|     16 | J2                                                             |           |     1 | 3750-0                                                                       | POMONA ELECTRONICS          | 3750-0           | CONNECTOR; FEMALE; SMT; COLOR BLACK; STANDARD BINDING POST; STRAIGHT; 1PIN                 |            |
|     17 | J3, J10-J13, J18, J22, J23, J26                                |           |     9 | TSW-101-22-L-D                                                               | SAMTEC                      | TSW-101-22-L-D   | CONNECTOR; MALE; THROUGH HOLE; .025IN SQ POST HEADER; STRAIGHT; 2PINS                      |            |
|     18 | J4-J7, J15, J17, J19, J21, J24, J25, J31                       |           |    11 | TSW-101-07-L-S                                                               | SAMTEC                      | TSW-101-07-L-S   | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; STRAIGHT; 1PIN                                  |            |
|     19 | J8, J14                                                        |           |     2 | TSW-103-07-L-D                                                               | SAMTEC                      | TSW-103-07-L-D   | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS             |            |
|     20 | J9                                                             |           |     1 | 10-89-7082                                                                   | MOLEX                       | 10-89-7082       | CONNECTOR, TH, MALE, SALES ASSY-HIGH TEMP DUAL ROW WAFER WITH BREAK-OFF OPTION, 8PINS, STR |            |
|     21 | J16, J37-J39                                                   |           |     4 | 7808                                                                         | KEYSTONE                    | 7808             | TERMINAL; BODY LENGTH=0.67IN; BODY WIDTH=0.47IN; HEIGHT=0.45IN; SCRW; BRASS                |            |
|     22 | J29, J30, J35, J36                                             |           |     4 | 29301                                                                        | GENERIC PART                | N/A              | MACHINE SCREW; SLOTTED; PAN; M2.5; 6MM; STEEL; ZINC PLATE                                  |            |
|     23 | J29, J30, J35, J36                                             |           |     4 | 24427                                                                        | GENERIC PART                | N/A              | STANDOFF; FEMALE-THREADED; HEX; M2.5; 20MM; ALUMINUM                                       |            |
|     24 | L1, L2                                                         |           |     2 | PA5003.471NLT                                                                | PULSE                       | 0.47UH           | INDUCTOR; SMT; COMPOSITE; 0.47UH; 20%; 18.4A                                               |            |

Evaluates: MAX16712

## MAX16712 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                | DNI/DNP   |   QTY | MFG PART #                                                                   | MANUFACTURER                          | VALUE    | DESCRIPTION                                                                                                                                  | COMMENTS   |
|--------|----------------------------------------|-----------|-------|------------------------------------------------------------------------------|---------------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 25     | Q1, Q2                                 | -         |     2 | BSS138                                                                       | ON SEMICONDUCTOR                      | BSS138   | TRAN; LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SOT-23; PD-(0.36W); I-(0.22A); V- (50V); -55 DEGC TO +150 DEGC              |            |
| 26     | R1                                     | -         |     1 | CRCW04024R70FK                                                               | VISHAY DALE                           |          | 4.7 RES; SMT (0402); 4.7; 1%; +/-100PPM/DEGC; 0.0630W                                                                                        |            |
| 27     | R2                                     | -         |     1 | CSR2512C0R001F                                                               | RIEDON INC.                           |          | 0.001 RES; SMT (2512); 0.001; 1%; +/-50PPM/DEGC; 3W                                                                                          |            |
| 28     | R11                                    | -         |     1 | CR0402-16W-2871F; CRCW04022K87                                               | VENKEL LTD.;VISHAY DALE               | 2.87K    | RES; SMT (0402); 2.87K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                          |            |
| 29     | R12, R13, R15                          | -         |     3 | CRCW04023K01FK                                                               | VISHAY DALE                           | 3.01K    | RES; SMT (0402); 3.01K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                          |            |
| 30     | R14                                    | -         |     1 | CRCW04024K22FK                                                               | VISHAY DALE                           | 4.22K    | RES; SMT (0402); 4.22K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                          |            |
| 31     | R19, R20                               | -         |     2 | CRCW040210R0FK; 9C04021A10R0FL                                               | VISHAY DALE;YAGEO                     |          | 10 RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.0630W                                                                                          |            |
| 32     | R21-R26, R32, R33                      | -         |     8 | ERJ-2RKF1001                                                                 | PANASONIC                             | 1K       | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                             |            |
| 33     | R27, R34                               | -         |     2 | ERJ-2RKF1002                                                                 | PANASONIC                             | 10K      | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                            |            |
| 34     | R35                                    | -         |     1 | ERJ-2GE0R00                                                                  | PANASONIC                             |          | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                |            |
| 35     | R36, R39                               | -         |     2 | CRCW040220K0FK                                                               | VISHAY DALE                           | 20K      | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                            |            |
| 36     | R37, R40                               | -         |     2 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL                               | VISHAY DALE;PANASONIC                 |          | 100 RES; SMT (0603); 100; 1%; +/-100PPM/DEGC; 0.1000W                                                                                        |            |
| 37     | R38, R41                               | -         |     2 | ERJ-3EKF2100                                                                 | PANASONIC                             |          | 210 RES; SMT (0603); 210; 1%; +/-100PPM/DEGK; 0.1000W                                                                                        |            |
| 38     | SU1, SU3-SU5                           | -         |     4 | S1100-B;SX1100-B; STC02SYAN                                                  | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                      |            |
| 39     | SW1, SW2                               | -         |     2 | GT21MCBE                                                                     | C&K COMPONENTS                        | GT21MCBE | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA; GT SERIES; SEALED ULTRAMINIATURE TOGGLE SWITCH; RCOIL= 0.05 OHM; RINSULATION=10G OHM; C&K COMPONENTS |            |
| 40     | U1                                     | -         |     1 | MAX16712                                                                     | MAXIM                                 | MAX16712 | EVKIT PART - IC; MAX16712; PACKAGE OUTLINE NUMBER: 21-100392; PACKAGE CODE: W282D3Z+1; WLP28                                                 |            |
| 41     | PCB                                    | -         |     1 | MAX16712                                                                     | MAXIM                                 | PCB      | PCB:MAX16712                                                                                                                                 |            |
| 42     | R44-R46                                | DNI       |     3 | CRCW25120000ZS                                                               | VISHAY DALE                           |          | 0 RES; SMT (2512); 0; 1%; JUMPER; 1W                                                                                                         |            |
| 43     | C36, C38, C41, C43, C55, C57, C59, C62 | DNP       |     0 | GRM21BR61A476ME15                                                            | MURATA                                | 47UF     | CAP; SMT (0805); 47UF; 20%; 10V; X5R; CERAMIC                                                                                                |            |
| 44     | C44, C45, C67, C68                     | DNP       |     0 | GRM188C80J226ME15                                                            | MURATA                                | 22UF     | CAP; SMT (0603); 22UF; 20%; 6.3V; X6S; CERAMIC                                                                                               |            |
| 45     | C47, C61                               | DNP       |     0 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | MURATA;TDK; TAIYO YUDEN;TDK           | 0.1UF    | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                               |            |
| 46     | R6                                     | DNP       |     0 | RC0402FR-070RL                                                               | YAGEO                                 |          | 0 RES; SMT (0402); 0; 1%; JUMPER; 0.0630W                                                                                                    |            |
| 47     | R54, R55                               | DNP       |     0 | ERJ-P06F1000                                                                 | PANASONIC                             |          | 100 RES; SMT (0805); 100; 1%; +/-100PPM/DEGC; 0.5000W                                                                                        |            |
| TOTAL  |                                        |           |   123 |                                                                              |                                       |          |                                                                                                                                              |            |

Evaluates: MAX16712

## MAX16712 EV Kit Schematic

MAX16712 EV Kit Schematic (1 of 3)

<!-- image -->

## MAX16712 EV Kit Schematic (continued)

<!-- image -->

MAX16712 EV Kit Schematic (2 of 3)

## MAX16712 EV Kit Schematic (continued)

<!-- image -->

MAX16712 EV Kit Schematic (3 of 3)

## MAX16712 Evaluation Kit

## MAX16712 EV Kit Layout

MAX16712 EV Kit PCB-Silk Top

<!-- image -->

MAX16712 EV Kit PCB-Top

<!-- image -->

## Evaluates: MAX16712

MAX16712 EV Kit PCB-Layer 2

<!-- image -->

MAX16712 EV Kit PCB-Layer 3

<!-- image -->

## MAX16712 EV Kit Layout (continued)

MAX16712 EV Kit PCB-Layer 4

<!-- image -->

MAX16712 EV Kit PCB-Layer 5

<!-- image -->

Evaluates: MAX16712

MAX16712 EV Kit PCB-Bottom

<!-- image -->

MAX16712 EV Kit PCB-Silk Bottom

<!-- image -->

## MAX16712 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX16712