<!-- lastmod 2022-08-02 -->
## MAX22288 Evaluation Kit

## General Description

The MAX22288 evaluation kit (EV kit) provides a proven design to evaluate the MAX22288, a Home Bus System (HBS) compatible transceiver.

The EV kit includes an evaluation board that features full functionalities of  the  MAX22288.  The  MAX22288  is typically used in HBS applications where external power supplies are sourced.

## Features

- Easy Evaluation of the MAX22288
- Design for 57.6kbps Bus-Powered Application
- Allow for 9.6kbps to 200kbps Operation with Selective External Components
- Robust  Design  with  ±1kV  Line-to-GND  and  Line-toLine Surge Protection
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## MAX22288 EV Kit Block Diagram

<!-- image -->

<!-- image -->

Evaluates: MAX22288

## MAX22288 EV Kit Photo

<!-- image -->

## Quick Start

## Recommended Equipment

- The MAX22288EVKIT#
- The MAX22088EVKIT# (optional)
- Two 24V, 200mA DC power supplies
- Data generator or function generator
- Digital oscilloscope
- A pair of twisted wires (22 or 24 AWG), 20cm or longer (optional)

## Procedures

The EV kit is fully assembled and tested. Follow the steps to verify and start operation of the kit.

1.  Verify that all jumpers are in their default positions as shown in Table 1 .
2.  Set the first 24V DC power supply to 5V and connect the supply terminal to the VCC test point (TP2). Connect the ground terminal to the GND test point.
3.  Set the second 24V DC power supply to 18V and connect the supply terminal to XFMR\_IN test point (TP1). Connect the ground terminal to GND test point.
4.  Turn on both power supplies.
5.  Verify that the green LEDs DS1 and DS2 are both turned on.
6.  Set the signal/function generator output to a 25kHz 0V-5V square wave with 50% duty cycle.
7.  Connect the signal/function generator output to DIN test point (TP12).
8.  Connect the oscilloscope probes to the H+ test point (TP7), H- test point (TP8), DIN test point (TP12), and DOUT test point (TP13).
9.  Turn on the signal/function generator.
10.  Verify that all signals are as shown in Figure 1 .

## Table 1. MAX22288 EV Kit Shunt Positions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                          |
|----------|------------------|------------------------------------------------------|
| J1       | Open             | Disable the MAX22288 (U1) transmitter output.        |
| J1       | 1-2*             | Enable the MAX22288 (U1) transmitter output.         |
| J2       | Open*            | Enable the MAX22288 (U1) internal high-pass filter.  |
| J2       | 1-2              | Disable the MAX22288 (U1) internal high-pass filter. |
| J3       | Open*            | Enable the MAX22288 (U1) internal watchdog timer.    |
| J3       | 1-2              | Disable the MAX22288 (U1) internal watchdog timer.   |
| J4       | Open             | Disconnect the transformer from the H+ line.         |
| J4       | 1-2*             | Connect the transformer to the H+ line.              |
| J5       | Open             | Disconnect the transformer from the H- line.         |
| J5       | 1-2*             | Connect the transformer to the H- line.              |
| J9       | Open*            | Measure AIO and BIO signals.                         |
| J9       | 1-2              | Short AIO to BIO. NEVER PLACE A SHUNT at J9.         |

## Procedures to set up a complete Home Bus System (HBS) application (optional)

11.  Turn both power supplies off and disconnect the signal/function generator.
12.  Connect the MAX22288 EV kit to the MAX22088 EV kit remote circuit using a twisted pair.
- a. Connect the H+ of J6 (pin 1) on MAX22288 EV kit to H2+ of J9 (pin1) on the MAX22088 EV kit.
- b. Connect the H- of J6 (pin 2) on MAX22288 EV kit to H2- of J9 (pin2) on the MAX22088 EV kit.

13.  Verify that all jumpers on the MAX22088 EV kit are in their default positions. Refer to the MAX22088 EV kit data sheet for more information.
14.  Turn on both power supplies.
15.  On the MAX22088 EV kit, verify that the VCC2 test point (TP21) is at 5V (typ) and the VOUT2 test point (TP19) is at 5V (typ).
16.  On the MAX22088 EV kit, verify that the green LEDs DS3 and DS4 are both turned on.
17.  On the MAX22088 EV kit, connect the signal/function generator output to ISO\_IN test point (TP1).
18.  Move the oscilloscope probe at the DIN test point (TP12) on the MAX22288 EV kit to the ISO\_IN test point (TP1) on the MAX22088 EV kit.
19.  Turn on the signal/function generator.
20.  Verify that all signals are as shown in Figure 1 .

Figure 1. MAX22288 EV Kit Waveforms at 50kbps

<!-- image -->

## Detailed Description of Hardware

The MAX22288 EV kit consists of the MAX22288 evaluation circuit for HBS applications where external power supplies are sourced. Power is sourced from this circuit to the remote/device circuit when the on-board AC-blocking inductor (T1) is connected to the H+ and H- lines. To build a complete Home Bus network, obtain a MAX22088 EV kit and connect both EV kits  together  following  the  steps  in  the Quick Start section.  Refer  to  the  MAX22088  EV  kit data  sheet for  more information.

## Home Bus System

The MAX22288 can be used in the Home Bus System (HBS), where data and power are carried on a single pair of wires. The MAX22288 EV kit is optimized for 57.6kbps operation. External component modifications are required to operate the EV kit at a lower data rate. See Table 2 for recommended values.

Table 2. Recommended Component Values for Different Data Rate

| COMPONENT   | FUNCTION                                 | DATA RATE (kbps)   | DATA RATE (kbps)   | DATA RATE (kbps)   |
|-------------|------------------------------------------|--------------------|--------------------|--------------------|
| COMPONENT   | FUNCTION                                 | 9.6                | 57.6*              | 200                |
| C4, C6      | AIO, BIO coupling capacitors             | 22μF               | 2.2μF              | 2.2μF              |
| R8          | Master-side static termination resistor  | Open               | 1kΩ                | 1kΩ                |
| R8          | Remote-side static termination resistor  | 240Ω               | 1kΩ                | 1kΩ                |
| R10         | Master-side dynamic termination resistor | 82Ω                | 82Ω                | 82Ω                |
| R10         | Remote-side dynamic termination resistor | 82Ω                | 82Ω                | 82Ω                |

*Default Data Rate.

## Power Supply

Connect an external voltage to the XFMR\_IN test point (TP1) to supply power to the Home Bus lines. Power is sourced from the master circuit in a Home Bus network. The power for downstream Home Bus devices is supplied to the H+ line through the on-board AC-blocking inductor. The MAX22288 EV kit also requires an external voltage at VCC. Connect a 5V (typ) supply to the VCC test point (TP2).

## RST Input

The MAX22288 uses the RST pin to enable or disable the transmitter and set the initial state of the transmitter output. Set RST high to disable the transmitter on the MAX22288, or set RST low to enable the transmitter. The receiver on the MAX22288 is always enabled. Leave J1 open to set the MAX22288 to receive mode only. Place a shunt on J1 to enable the transmitter.

## High-Pass Filter

The MAX22288 features an integrated high-pass filter to filter out lower frequency voltage fluctuations received on the H+ and H- lines. Place a shunt on J2 to disable the high-pass filter; leave J2 open to enable the internal filter.

## Watchdog Timer

The MAX22288 features an internal watchdog timer to avoid a long zero blocking the bus. Place a shunt on J3 to disable the watchdog timer; leave J3 open to enable the timer.

## Transceiver Termination

The MAX22288 EV kit includes an on-board 82Ω dynamic termination resistor between BIO and TERM, and a 1kΩ static termination resistor between AIO and BIO.

## Grounds in HBS Application

In a typical Home Bus application, the remote device ground is isolated from the master ground. Shorting the master and remote device grounds creates a ground loop and can cause signal integrity issues during normal operation. When connecting the MAX22288 EV kit to the MAX22088 EV kit, ensure that the two grounds are never connected. Do not probe test points on both circuits at the same time to avoid shorting the grounds through the oscilloscope probes. Use the isolation interface on the MAX22088 EV kit to verify signals on both circuits simultaneously, if needed.

## IEC 61000-4-4 Surge Immunity Compliance

The MAX22288 EV kit is designed and tested to withstand ±1kV surge transients, both line-to-ground and line-to-line, in compliance with IEC standard 61000-4-4. The MAX22288 Home Bus pins AIO, BIO, and TERM are protected from surge transients with external components. TVS diode D3 discharges surge transients between H+ and H- lines. TVS diodes D4 and D5 provide protection from surge transients between H+/H- lines and ground. TVS diodes D1 and D2, and currentlimiting resistors R13 and R14 further protect AIO, BIO, and TERM pins. See the MAX22288 EV kit schematic and refer to the Surge Protection section in the Application Information section in the MAX22288 data sheet for more information.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22288EVKIT# | EV KIT |

Evaluates: MAX22288

## MAX22288 EV Kit Bill of Materials

|   ITEM | REF_DES          | DNP   |   QTY | MFG PART #                                                                                 | MANUFACTURER                              | VALUE              | DESCRIPTION                                                                                              |
|--------|------------------|-------|-------|--------------------------------------------------------------------------------------------|-------------------------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
|      1 | C1               | -     |     1 | C0603C105K4RAC; C1608X7R1C105K080A C; EMK107B7105KA; CGA3E1X7R1C105K08 0AC; 0603YC105KAT2A | KEMET; MURATA; TDK; TAIYO YUDEN; TDK; AVX | 1UF                | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                                             |
|      2 | C2               | -     |     1 | GRM188Z71A106KA73                                                                          | MURATA                                    | 10UF               | CAP; SMT (0603); 10UF; 10%; 10V; X7R; CERAMIC                                                            |
|      3 | C3               | -     |     1 | TAP106K050SCS                                                                              | AVX                                       | 10UF               | CAP; THROUGH HOLE-RADIAL LEAD; 10UF; 10%; 50V; TANTALUM                                                  |
|      4 | C4, C6           | -     |     2 | C2012X7R1H225K125A C                                                                       | TDK                                       | 2.2UF              | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                                           |
|      5 | D1, D2           | -     |     2 | P6SMB6.8A                                                                                  | LITTLEFUSE                                | 5.8V               | DIODE; TVS; SMB (DO-214AA); VRM=5.8V; IPP=58.1A                                                          |
|      6 | D3-D5            | -     |     3 | SMAJ28CA                                                                                   | ST MICROELECTRONI CS                      | 28V                | DIODE; TVS; SMA (DO-214AC); VRM=28V; IPP=8.8A                                                            |
|      7 | DS1, DS2         | -     |     2 | LTST-C193KGKT-5A                                                                           | LITE-ON ELECTRONICS INC.                  | LTST- C193KG KT-5A | DIODE; LED; STANDARD; YELLOW- GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC               |
|      8 | J1-J5, J9        | -     |     6 | TSW-102-23-G-S                                                                             | SAMTEC                                    | TSW- 102-23- G-S   | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +125 DEGC                              |
|      9 | J6               | -     |     1 | 282837-2                                                                                   | TE CONNECTIVITY                           | 282837- 2          | CONNECTOR; FEMALE; THROUGH HOLE; PC TERMINAL BLOCK; RIGHT ANGLE; 2PINS;                                  |
|     10 | R1, R16          | -     |     2 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                              | VISHAY DALE; PANASONIC; YAGEO             | 10K                | RES; SMT (0603); 10K; 1%; +/- 100PPM/DEGC; 0.1000W                                                       |
|     11 | R2, R9           | -     |     2 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL         | VISHAY DALE; YAGEO; YAGEO; PANASONIC      | 100K               | RES; SMT (0603); 100K; 1%; +/- 100PPM/DEGC; 0.1000W                                                      |
|     12 | R3               | -     |     1 | CRCW06032K70FK; ERJ-3EKF2701                                                               | VISHAY DALE; PANASONIC                    | 2.7K               | RES; SMT (0603); 2.7K; 1%; +/- 100PPM/DEGC; 0.1000W                                                      |
|     13 | R4               | -     |     1 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK                            | ROHM; PANASONIC; BOURNS; VISHAY DALE      | 20K                | RES; SMT (0603); 20K; 1%; +/- 100PPM/DEGC; 0.1000W                                                       |
|     14 | R5               | -     |     1 | CRCW060327K0FK                                                                             | VISHAY DALE                               | 27K                | RES; SMT (0603); 27K; 1%; +/- 100PPM/DEGC; 0.1000W                                                       |
|     15 | R6               | -     |     1 | CRCW060362K0FK                                                                             | VISHAY DALE                               | 62K                | RES; SMT (0603); 62K; 1%; +/- 100PPM/DEGK; 0.1000W                                                       |
|     16 | R7               | -     |     1 | CRCW06034K30FK                                                                             | VISHAY DALE                               | 4.3K               | RES; SMT (0603); 4.3K; 1%; +/- 100PPM/DEGK; 0.1000W                                                      |
|     17 | R8               | -     |     1 | CRCW08051K00FK; ERJ-6ENF1001; MCR10EZHF1001; RC0805FR-071KL                                | VISHAY DALE; PANASONIC; ROHM; YAGEO       | 1K                 | RES; SMT (0805); 1K; 1%; +/- 100PPM/DEGC; 0.1250W                                                        |
|     18 | R10              | -     |     1 | CRCW080582R0FK                                                                             | VISHAY DALE                               | 82                 | RES; SMT (0805); 82; 1%; +/- 100PPM/DEGC; 0.1250W                                                        |
|     19 | R12              | -     |     1 | TNPW0805100KBE; ERA-6YEB104V                                                               | VISHAY DALE; PANASONIC                    | 100K               | RES; SMT (0805); 100K; 0.10%; +/- 25PPM/DEGK; 0.1250W                                                    |
|     20 | R13, R14         | -     |     2 | ERJ-3RQF4R7                                                                                | PANASONIC                                 | 4.7                | RES; SMT (0603); 4.7; 1%; +/- 100PPM/DEGC; 0.1000W                                                       |
|     21 | R15              | -     |     1 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                            | VISHAY; PANASONIC; BOURNS                 | 1K                 | RES; SMT (0603); 1K; 1%; +/- 100PPM/DEGC; 0.1000W                                                        |
|     22 | SPACER1- SPACER4 | -     |     4 | 9032                                                                                       | KEYSTONE                                  | 9032               | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                |
|     23 | SU1, SU3, SU4    | -     |     3 | S1100-B; SX1100-B; STC02SYAN                                                               | KYCON; KYCON; SULLINS ELECTRONICS CORP.   | SX1100- B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED |

## MAX22288 Evaluation Kit

## Evaluates: MAX22288

|   24 | T1                 | -   |   1 | 7.5E+08                                                                            | WURTH ELECTRONICS INC                | 7.5E+08       | EVKIT PART - TRANSFORMER; 750318652; TURN RATIO=1:1; 12 PINS; TH                                                                                                    |
|------|--------------------|-----|-----|------------------------------------------------------------------------------------|--------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   25 | TP1, TP2           | -   |   2 | 5010                                                                               | KEYSTONE                             | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                               |
|   26 | TP3-TP6, TP17      | -   |   5 | 5011                                                                               | KEYSTONE                             | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                             |
|   27 | TP7-TP9, TP12-TP16 | -   |   8 | 5014                                                                               | KEYSTONE                             | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                            |
|   28 | U1                 | -   |   1 | MAX22288ATG+                                                                       | MAXIM                                | MAX222 88ATG+ | EVKIT PART - IC; HOME BUS SYSTEM (HBS) COMPATIBLE TRANSCEIVER; PACKAGE OUTLINE DRAWING: 21- 0139; LAND PATTERN DRAWING: 90- 0022; PACKAGE CODE: T2444+4C; TQFN24-EP |
|   29 | PCB                | -   |   1 | MAX22288                                                                           | MAXIM                                | PCB           | PCB:MAX22288                                                                                                                                                        |
|   30 | C5, C7             | DNP |   0 | ECE-A1HN220U                                                                       | PANASONIC                            | 22UF          | CAP; THROUGH HOLE-RADIAL LEAD; 22UF; 20%; 50V; ALUMINUM- ELECTROLYTIC                                                                                               |
|   31 | R11                | DNP |   0 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO; PANASONIC | 100K          | RES; SMT (0603); 100K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                                                 |

## MAX22288 EV Kit Schematic

<!-- image -->

## MAX22288 EV Kit PCB Layout

MAX22288 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX22288 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX22288 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX22288 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 8/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.