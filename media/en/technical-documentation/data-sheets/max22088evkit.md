<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX22088

## General Description

The MAX22088 evaluation kit (EV kit) provides a proven design to evaluate the MAX22088 Home Bus transceiver.

The  EV  kit  includes  an  evaluation  board  with  two  circuits,  a  master  circuit,  and  a  remote/device  circuit,  that can  be  used  to  demonstrate  the  full  functionality  of  the MAX22088 Home Bus transceiver in a complete Home Bus application.

For  easy  evaluation,  on  the  remote/device  side,  the MAX15462 5V step-down DC-DC converter is included to power external system loads at 200mA (max). In addition, the MAX12931 digital isolator is used for convenient and correct measuring of digital Home Bus signals.

## Features

- Easy Evaluation of the MAX22088
- Two On-Board Configurations, Master Circuit and Remote/Device Circuit, for Complete Home Bus Evaluation
- Robust Design with ±1kV Line-to-Line and Line-toGND Surge Transient Immunity
- On-Board Isolated Digital Interface for Simple Testing and Monitoring
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## MAX22088 EV Kit Block Diagram

<!-- image -->

319-100512; Rev 2; 07/21

## MAX22088 Evaluation Kit

## MAX22088 EV Kit Board

<!-- image -->

## MAX22088 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX22088EVKIT#
- Two 24V, 200mA DC power supplies
- Digital multimeter
- Data generator, or function generator
- Digital oscilloscope
- A pair of twisted wires (22 or 24 AWG) 20cm or longer

## Procedure

The MAX22088 EV kit is fully assembled and tested.

## Table 1. MAX22088 EV Kit Shunt Positions

| JUMPER                            | SHUNT POSITION                    | DEVICE                            | DESCRIPTION                                                                  |
|-----------------------------------|-----------------------------------|-----------------------------------|------------------------------------------------------------------------------|
| CIRCUIT 1 (MASTER CIRCUIT)        | CIRCUIT 1 (MASTER CIRCUIT)        | CIRCUIT 1 (MASTER CIRCUIT)        | CIRCUIT 1 (MASTER CIRCUIT)                                                   |
| J1                                | Open                              | U2                                | Disable the MAX22088 (U2) transmitter output.                                |
| J1                                | 1-2*                              | U2                                | Enable the MAX22088 (U2) transmitter output.                                 |
| J6                                | Open*                             | U2                                | Enable the MAX22088 (U2) internal high-pass filter.                          |
| J1                                | 1-2                               | U2                                | Disable the MAX22088 (U2) internal high-pass filter.                         |
| J7                                | Open*                             | U2                                | Measure AIO and BIO signals.                                                 |
| J7                                | 1-2                               | U2                                | Short AIO to BIO. NEVER PLACEASHUNT at J7.                                   |
| J8                                | Open                              | -                                 | Disconnect the transformer from the H+ line.                                 |
| J8                                | 1-2*                              | -                                 | Connect the transformer to the H+ line.                                      |
| J9                                | Open                              | -                                 | Disconnect the transformer from the H- line.                                 |
| J9                                | 1-2*                              | -                                 | Connect the transformer to the H- line.                                      |
| CIRCUIT 2 (REMOTE/DEVICE CIRCUIT) | CIRCUIT 2 (REMOTE/DEVICE CIRCUIT) | CIRCUIT 2 (REMOTE/DEVICE CIRCUIT) | CIRCUIT 2 (REMOTE/DEVICE CIRCUIT)                                            |
| J12                               | Open                              | U4                                | Disable the MAX15462 (U2) DC-DC converter.                                   |
| J12                               | 1-2*                              | U4                                | Enable the MAX15462 (U2) DC-DC converter.                                    |
| J11                               | Open                              | U3                                | Disable the MAX22088 (U3) transmitter output.                                |
| J11                               | 1-2*                              | U3                                | Enable the MAX22088 (U3) transmitter output.                                 |
| J13                               | Open*                             | U3                                | Enable the MAX22088 (U3) internal high-pass filter.                          |
| J13                               | 1-2                               | U3                                | Disable the MAX22088 (U3) internal high-pass filter.                         |
| J14                               | Open*                             | U3                                | Measure AIO and BIO signals.                                                 |
| J14                               | 1-2                               | U3                                | Short AIO to BIO. NEVER PLACEASHUNT at J14.                                  |
| DIGITAL ISOLATOR                  | DIGITAL ISOLATOR                  | DIGITAL ISOLATOR                  | DIGITAL ISOLATOR                                                             |
| J2                                | Open                              | U1                                | Disconnect the MAX12931 (U1) power supply from VCC1 (master circuit).        |
| J2                                | 1-2*                              | U1                                | Connect the MAX12931 (U1) power supply to VCC1 (master circuit).             |
| J3                                | Open                              | U1                                | Disconnect the MAX12931 (U1) power supply from VCC2 (remote/device circuit). |
| J3                                | 1-2*                              | U1                                | Connect the MAX12931 (U1) power supply to VCC2 (remote/device circuit).      |
| J4                                | Open                              | U1                                | Disable the MAX12931 (U1) ISO_OUT output                                     |
| J4                                | 1-2*                              | U1                                | Enable the MAX12931 (U1) ISO_OUT output. DOUT2 is connected to ISO_OUT.      |
| J5                                | Open                              | U1                                | Disable the MAX12931 (U1) ISO_IN input.                                      |
| J5                                | 1-2*                              | U1                                | Enable the MAX12931 (U1) ISO_IN input. ISO_IN is connected to DIN2.          |

*Default Position.

Evaluates: MAX22088

Follow the steps below to verify board operation:

Note: Do not short the ground of master circuit (GND1) and remote/device circuit (GND2) of the board. See the Master  and  Remote/Device  Grounds section  for  more information. Ensure that the ground terminal of the power supply is not connected to earth ground.

- 1) Connect the H1+ of J10 (pin 1) to the H2+ of J15 (pin 1) with one of the twisted wires.
- 2) Connect the H1- of J10 (pin 2) to the H2- of J15 (pin 2) with the other of the twisted wires.
- 3) Verify that all jumpers are in their default positions as shown in Table 1 .

## MAX22088 Evaluation Kit

- 4) Set the first 24V DC power supply to 18V and con -nect it to the XFMR\_IN test point (TP3). Connect the ground terminal to the GND1 test point.
- 5) Set the second 24V DC power supply to 6V and connect it to the VRAW1 test point (TP4). Connect the ground terminal to the GND1 test point.
- 6) Connect the digital multimeter to the VCC1 test point (TP5). Connect the ground terminal to the GND1 test point.
- 7) Turn both DC power supplies on.
- 8) Verify that the digital multimeter reads 5V (typ) on VCC1 (TP4).
- 9) Move the digital multimeter to the VCC2 test point (TP21) and GND2 test point.
- 10)  Verify that the VCC2 voltage is 5V (typ).
- 11)  Move the digital multimeter to the VOUT2 test point (TP19).

Figure 1. MAX22088 EV Kit Waveforms at 50kbps

<!-- image -->

## Evaluates: MAX22088

- 12)  Verify that the voltage on VOUT2 is 5V (typ).
- 13)  Verify that green LEDs DS1 to DS4 are all turned on.
- 14)  Connect the oscilloscope probes to the ISO\_IN test point (TP1), the H1+ test point (TP16), the H1- test point (TP17), and the DOUT1 test point (TP14).
- 15)  Connect the ground terminals for all scope probes to the GND1 test points (TP6-TP10).
- 16)  Connect the function generator to the ISO\_IN test point (TP1). Connect the ground terminal to the GND1 test point.
- 17)  Set the function generator output to a 25kHz 0V-5V square wave with 50% duty cycle.
- 18)  Turn on the function generator.
- 19)  Verify that all signals are as shown in Figure 1 .

│

## Detailed Description of Hardware

The MAX22088 EV kit consists of two MAX22088 circuit configurations for both master and remote/device transceiver evaluation. Connect both circuits together to build a complete Home Bus network.

In  the  master  circuit,  the  MAX22088  is  configured  as  a Home Bus master. Power is sourced from this circuit to the remote/device circuit when the on-board AC-blocking inductor (T1) is connected to the H+ and H- lines.

In the remote/device circuit, the MAX22088 is configured as  a  Home  Bus  remote/device.  Power  is  received  from the master circuit through the H+ and H- lines.

The  MAX22088  EV  kit  also  includes  an  on-board  5V step-down DC-DC converter to power external loads up to 200mA(max) on the remote/device side. An on-board digital isolator (MAX12931) is included for easy monitoring and evaluation of digital signals.

## Home Bus System

The MAX22088 Home Bus transceiver complies with the Home Bus standard where data and power are passed on a single pair of wires. The MAX22088 EV kit is optimized for 57.6kbps operation. External component modifications are required to operate the EV kit at a lower data rate. Contact Maxim before operating the EV kit at data rates below 20kbps. See Table 2 for recommended values.

## Master Circuit

Power is sourced from the master circuit in a Home Bus network. The power for downstream Home Bus devices is supplied to the H+ line through the on-board AC-blocking inductor.  Connect  an  external  voltage  to  the  XFMR\_IN test point (TP3) to supply power to the Home Bus lines. The  MAX22088  EV  kit  master  circuit  also  requires  an external voltage at VRAW. Connect a minimum 5V supply to the VRAW1 test point (TP4). When the MAX22088

is  configured  as  a  master  transceiver,  it  receives  digital signals from the remote/device circuit through the H+ and H- lines at the J10 terminal block. Monitor the DOUT1 test point (TP14) to verify the received digital signals.

## Remote/Device Circuit

The  remote/device  circuit  in  a  Home  Bus  application receives  power  from  the  H+  and  H-  lines.  On  the MAX22088 EV kit, the remote transceiver (U3) is powered from the H+ and H- lines connected to the master circuit. A 5V regulated output is generated at the VCC2 test point (TP21). Signals connected to the digital input (DIN2) are transmitted over the H+ and H- lines to the master circuit when J10 is connected to J15.

## On-Board 5V DC-DC Regulator

The  MAX22088  EV  kit  remote/device  circuit  includes  a MAX15462  DC-DC  step-down  converter  to  generate  a regulated 5V output at VOUT2 (TP19) that can be used to power external loads up to 200mA (max). Place a shunt on J12 to enable the 5V output at VOUT2 (TP19).

## RST Input

The  MAX22088 uses the RST pin to enable  or  disable the transmitter and set the initial state of the transmitter output.  Set  RST  high  to  disable  the  transmitter  on  the MAX22088. Set RST low to enable the transmitter. The receiver on the MAX22088 is always enabled.

Leave J1 open to set the MAX22088 in the master circuit (U2) to receive mode only. Place a shunt on J1 to enable the transmitter.

Leave  J11  open  to  set  the  MAX22088  in  the  remote/ device circuit (U3) to receive mode only. Place a shunt on J11 to enable the transmitter.

When  the  master  and  remote/device  circuits  are  connected, set one MAX22088 device to receive mode and enable the transmitter of the other MAX22088.

Table 2. Recommended Component Values for Different Data Rate

| COMPONENT         |                                          | DATA RATE (kbps)   | DATA RATE (kbps)   | DATA RATE (kbps)   |
|-------------------|------------------------------------------|--------------------|--------------------|--------------------|
|                   | FUNCTION                                 | 9.6                | 57.6*              | 200                |
| C7, C10, C24, C26 | AIO, BIO coupling capacitors             | 22μF               | 2.2μF              | 2.2μF              |
| R9                | Master-side static termination resistor  | Open               | 1kΩ                | 1kΩ                |
| R10               | Master-Side dynamic termination resistor | 82Ω                | 82Ω                | 82Ω                |
| R26               | Remote-side static termination resistor  | 240Ω               | 1kΩ                | 1kΩ                |
| R28               | Remote-side dynamic termination resistor | 82Ω                | 82Ω                | 82Ω                |
| C15, C18          | Capacitor setting the Active Inductor    | 470nF              | 100nF              | 100nF              |

*Default Data Rate.

## High-Pass Filter

The MAX22088 features an integrated high-pass filter to filter out lower frequency voltage fluctuations received on the H+ and H- lines.

Place a shunt on J6 to disable the high-pass filter on the MAX22088 in the master circuit (U2). Leave J6 open to enable the internal filter.

Place a shunt on J13 to disable the high-pass filter on the MAX22088 in the remote/device circuit (U3). Leave J13 open to enable the internal filter.

## Transceiver Termination

The MAX22088 EV kit includes an on-board 82Ω dynamic termination resistor between BIO and TERM, and a 1kΩ static termination resistor between AIO and BIO, at both master and remote circuits.

## Master and Remote/Device Grounds

In  a  typical  Home  Bus  application,  the  remote  device ground is isolated from the master ground. Shorting the master  and  remote  device  grounds  creates  a  ground loop and can cause signal integrity issues during normal operation.

On the MAX22088 EV kit, ensure that GND1 and GND2 test points are never connected. Do not probe test points on  both  circuits  at  the  same  time  to  avoid  shorting  the grounds  through  the  oscilloscope  probes.  Use  the  onboard isolation interface to verify signals on both circuits simultaneously,  if  needed.  See  the Isolated  Input  and Output section for more information.

## Isolated Input and Output

The MAX22088 EV kit features an on-board digital isolator,  MAX12931,  for  easy  monitoring  and  evaluation  of digital  signals. The MAX12931 (U1) ensures the master ground  (GND1)  and  remote/device  ground  (GND2)  are not inadvertently connected during evaluation.

Place  shunts  on  the  J2-J5  jumpers  to  enable  the  onboard digital isolator.

Connect the digital input signal to the ISO\_IN test point (TP1). This signal is passed through the MAX12931 to the DIN input (DIN2) of the remote/device MAX22088 (U3). The signal at the ISO\_OUT test point (TP2) is the digital output (DOUT2) of the MAX22088 (U3) in remote/device circuit.  When  the  master  and  remote/device  circuits  are connected,  monitor  the  digital  output  (DOUT1)  of  the master  MAX22088  (U1)  to  verify  that  the  output  signal of the Home Bus system is the same as the digital input signals (ISO\_IN).

Ensure  that  all  scope  grounds  are  connected  to  GND1 during operation.

## IEC 61000-4-4 Surge Immunity Compliance

The MAX22088 EV kit is designed and tested to withstand  ±1kV  surge  transients,  both  line-to-ground  and line-to-line, in compliance with IEC standard 61000-4-4. The MAX22088 Home Bus pins HP, HN, AIO, BIO, and TERM are protected from surge transients with external components.  TVS  diodes  D3  and  D8  protect  HP  and HN pins from surge transients between H+ and H- lines. TVS diodes  D4  and  D5  provide  protection  from  surge transients between H+/H- lines and ground. TVS diodes D1, D2, D6, and D7, and current-limiting resistors R14, R15, R32, and R33 further protect AIO, BIO, and TERM pins. See the MAX22088 EV Kit Schematics and Surge Protection section  in Application  Information in the MAX22088 data sheet for more information.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22088EVKIT# | EV KIT |

# Denotes RoHS compliant.

## MAX22088 EV Kit Bill of Materials

|   ITEM | REF_DES           | DNI/DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                                   | VALUE            | DESCRIPTION                                                                               |
|--------|-------------------|-----------|-------|-----------------------------------------------------------------------------------------------|------------------------------------------------|------------------|-------------------------------------------------------------------------------------------|
|      1 | C1, C2            | -         |     2 | C0402C104J4RAC; GCM155R71C104JA55                                                             | KEMET; MURATA                                  | 0.1UF            | CAP; SMT (0402); 0.1UF; 5%; 16V; X7R; CERAMIC                                             |
|      2 | C3, C13, C16, C19 | -         |     4 | CC0805JKX7R9BB105                                                                             | YAGEO                                          | 1UF              | CAP; SMT (0805); 1UF; 5%; 50V; X7R; CERAMIC                                               |
|      3 | C4, C22           | -         |     2 | C0603C105K4RAC; C1608X7R1C105K080AC; EMK107B7105KA; CGA3E1X7R1C105K080AC; 0603YC105KAT2A      | KEMET; MURATA; TDK; TAIYO YUDEN; TDK;AVX       | 1UF              | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                              |
|      4 | C5, C23           | -         |     2 | C1608X5R1A106K080AC                                                                           | TDK                                            | 10UF             | CAP; SMT (0603); 10UF; 10%; 10V; X5R; CERAMIC                                             |
|      5 | C6                | -         |     1 | TAP106K050SCS                                                                                 | AVX                                            | 10UF             | CAP; THROUGH HOLE-RADIAL LEAD; 10UF; 10%; 50V; TANTALUM                                   |
|      6 | C7, C10, C24, C26 | -         |     4 | C2012X7R1H225K125AC                                                                           | TDK                                            | 2.2UF            | CAP; SMT (0805); 2.2UF; 10%; 50V; X7R; CERAMIC                                            |
|      7 | C8, C12           | -         |     2 | EEE-1EA101XP                                                                                  | PANASONIC                                      | 100UF            | CAP; SMT (CASE_D8); 100UF; 20%; 25V; ALUMINUM-ELECTROLYTIC                                |
|      8 | C15, C18          | -         |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA; MURATA; TDK;TDK; SAMSUNG               | 0.1UF            | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                            |
|      9 | C20               | -         |     1 | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                         | TAIYO YUDEN; TDK; SAMSUNG; MURATA              | 1UF              | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                              |
|     10 | C21               | -         |     1 | GRM21BR61A106KE19; ECJ-2FB1A106; CL21A106KPCLQNC; GRM219R61A106KE44                           | MURATA; PANASONIC; SAMSUNG ELECTRONICS; MURATA | 10UF             | CAP; SMT (0805); 10UF; 10%; 10V; X5R; CERAMIC                                             |
|     11 | D1, D2, D6, D7    | -         |     4 | P6SMB6.8A                                                                                     | LITTLEFUSE                                     | 5.8V             | DIODE; TVS; SMB (DO-214AA); VRM=5.8V; IPP=58.1A                                           |
|     12 | D3-D5             | -         |     3 | SMAJ28CA                                                                                      | BOURNS                                         | 28V              | DIODE; TVS; SMA (DO-214AC); VRM=28V; IPP=8.8A                                             |
|     13 | D8                | -         |     1 | SMBJ24A                                                                                       | LITTELFUSE                                     | 24V              | DIODE; TVS; SMB (DO-214AA); PIV=24V; IPP=15.5A                                            |
|     14 | DS1-DS4           | -         |     4 | LTST-C193KGKT-5A                                                                              | LITE-ON ELECTRONICS INC.                       | LTST-C193KGKT-5A | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC |
|     15 | J1-J9, J11-J14    | -         |    13 | TSW-102-23-G-S                                                                                | SAMTEC                                         | TSW-102-23-G-S   | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +125 DEGC               |

Evaluates: MAX22088

## MAX22088 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES               | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                         | VALUE    | DESCRIPTION                                                                                             |
|--------|-----------------------|-----------|-------|------------------------------------------------------------------------------------|--------------------------------------|----------|---------------------------------------------------------------------------------------------------------|
|     16 | J10, J15              | -         |     2 | 282837-2                                                                           | TE CONNECTIVITY                      | 282837-2 | CONNECTOR; FEMALE; THROUGH HOLE; PC TERMINAL BLOCK; RIGHT ANGLE; 2PINS;                                 |
|     17 | L1                    | -         |     1 | LPS4018-473MLB                                                                     | COILCRAFT                            | 47UH     | INDUCTOR; MAGNETICALLY SHIELDED FERRITE BOBBIN CORE; SMT; 47UH; TOL=+/-20%; 0.68A; -40 DEGC TO +85 DEGC |
|     18 | MH1-MH4               | -         |     4 | 9032                                                                               | KEYSTONE                             | 9032     | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                               |
|     19 | R1, R8, R16, R22, R27 | -         |     5 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO; PANASONIC | 100K     | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                      |
|     20 | R2, R12, R17          | -         |     3 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE; PANASONIC; YAGEO        | 10K      | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                       |
|     21 | R3, R18               | -         |     2 | CRCW06032K70FK; ERJ-3EKF2701                                                       | VISHAY DALE; PANASONIC               | 2.7K     | RES; SMT (0603); 2.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                      |
|     22 | R4, R20               | -         |     2 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK                    | ROHM; PANASONIC; BOURNS; VISHAY DALE | 20K      | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                       |
|     23 | R5, R19               | -         |     2 | CRCW060327K0FK                                                                     | VISHAY DALE                          | 27K      | RES; SMT (0603); 27K; 1%; +/-100PPM/DEGC; 0.1000W                                                       |
|     24 | R6, R24               | -         |     2 | CRCW060362K0FK                                                                     | VISHAY DALE                          | 62K      | RES; SMT (0603); 62K; 1%; +/-100PPM/DEGK; 0.1000W                                                       |
|     25 | R7, R23               | -         |     2 | CRCW06034K30FK                                                                     | VISHAY DALE                          | 4.3K     | RES; SMT (0603); 4.3K; 1%; +/-100PPM/DEGK; 0.1000W                                                      |
|     26 | R9, R26               | -         |     2 | CRCW08051K00FK; ERJ-6ENF1001; MCR10EZHF1001; RC0805FR-071KL                        | VISHAY DALE; PANASONIC; ROHM;YAGEO   | 1K       | RES; SMT (0805); 1K; 1%; +/-100PPM/DEGC; 0.1250W                                                        |
|     27 | R10, R28              | -         |     2 | RL1220S-820-F                                                                      | SUSUMU CO LTD.                       | 82       | RES; SMT (0805); 82; 1%; +/-200PPM/DEGK; 0.3300W                                                        |
|     28 | R11, R30, R31         | -         |     3 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                    | VISHAY; PANASONIC; BOURNS            | 1K       | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                        |
|     29 | R13                   | -         |     1 | TNPW0805100KBE; ERA-6YEB104V                                                       | VISHAY DALE; PANASONIC               | 100K     | RES; SMT (0805); 100K; 0.10%; +/-25PPM/DEGK; 0.1250W                                                    |
|     30 | R14, R15, R32, R33    | -         |     4 | ERJ-3RQF4R7                                                                        | PANASONIC                            | 4.7      | RES; SMT (0603); 4.7; 1%; +/-100PPM/DEGC; 0.1000W                                                       |
|     31 | R21                   | -         |     1 | RCW06033K30FK; RC0603FR-073K3L; RK73H1J3301F                                       | VISHAY; YAGEO; VISHAY                | 3.3K     | RES; SMT (0603); 3.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                      |
|     32 | R25                   | -         |     1 | RC0402JR-070RL; CR0402-16W-000RJT                                                  | YAGEO PHYCOMP; VENKEL LTD.           | 0        | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                 |
|     33 | R29                   | -         |     1 | CRCW0603180KFK                                                                     | VISHAY DALE                          | 180K     | RES; SMT (0603); 180K; 1%; +/-100PPM/DEGC; 0.1000W                                                      |

## MAX22088 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                        | DNI/DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                   | VALUE         | DESCRIPTION                                                                                                                               |
|--------|--------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------|--------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| 34     | R34                            | -         |     1 | ERJ-3RQF1R0; CRCW06031R00FK                                                                   | PANASONIC;VISHAY               | 1             | RES; SMT (0603); 1; 1%; +/-100PPM/DEGC; 0.1000W                                                                                           |
| 35     | T1                             | -         |     1 | 750318652                                                                                     | WURTH ELECTRONICS INC          | 750318652     | EVKIT PART - TRANSFORMER; 750318652; TURN RATIO=1:1; 12 PINS; TH                                                                          |
| 36     | TP1, TP2, TP11-TP18, TP27-TP34 | -         |    18 | 5014                                                                                          | KEYSTONE                       | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                  |
| 37     | TP3-TP5, TP19-TP21             | -         |     6 | 5010                                                                                          | KEYSTONE                       | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                     |
| 38     | TP6-TP10, TP22-TP26            | -         |    10 | 5011                                                                                          | KEYSTONE                       | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                   |
| 39     | U1                             | -         |     1 | MAX12931BASA+                                                                                 | MAXIM                          | MAX12931BASA+ | IC; DISO; TWO-CHANNEL; LOW-POWER; 3KVRMS AND 5KVRMS DIGITAL ISOLATORS; NSOIC8                                                             |
| 40     | U2, U3                         | -         |     2 | MAX22088GTG+                                                                                  | MAXIM                          | MAX22088GTG+  | EVKIT PART - IC; MAX22088GTG+; HOMEBUS TRANSCEIVER; PACKAGE CODE: T2444+4C; PACKAGE OUTLINE NUMBER: 21-0139; LAND PATTERN NUMBER: 90-0022 |
| 41     | U4                             | -         |     1 | MAX15462BATA+                                                                                 | MAXIM                          | MAX15462BATA+ | IC; VCON; 42V; 300MILLIAMPERE; ULTRA-SMALL; HIGH EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN8-EP                              |
| 42     | U5                             | -         |     1 | MB1S                                                                                          | ON SEMICONDUCTOR               | MB1S          | DIODE; RECT; SMT (SOIC-4); PIV=100V; IF=0.5A                                                                                              |
| 43     | PCB                            | -         |     1 | MAX22088                                                                                      | MAXIM                          | PCB           | PCB:MAX22088                                                                                                                              |
| 44     | C9, C11, C25, C27              | DNP       |     0 | ECE-A1HN220U                                                                                  | PANASONIC                      | 22UF          | CAP; THROUGH HOLE-RADIAL LEAD; 22UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                      |
| 45     | C14, C17                       | DNP       |     0 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA;MURATA; TDK;TDK;SAMSUNG | 0.1UF         | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                                            |
| TOTAL  | TOTAL                          |           |   128 |                                                                                               |                                |               |                                                                                                                                           |

Evaluates: MAX22088

## MAX22088 EV Kit Schematics

<!-- image -->

## MAX22088 EV Kit Schematics (continued)

<!-- image -->

## MAX22088 EV Kit PCB Layout

MAX22088 EV Kit-Top Silkscreen

<!-- image -->

Evaluates: MAX22088

MAX22088 EV Kit-Top Layer

<!-- image -->

│

## MAX22088 EV Kit PCB Layout (continued)

MAX22088 EV Kit-Internal Layer 2

<!-- image -->

MAX22088 EV Kit-Internal Layer 3

<!-- image -->

│

## MAX22088 EV Kit PCB Layout (continued)

MAX22088 EV Kit-Bottom Layer

<!-- image -->

MAX22088 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX22088 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/20            | Initial release                                                                                                                                                                                                                                           | -               |
|                 1 | 4/20            | Updated the General Description, Features, MAX22088 EV Kit Block Diagram, Detailed Description of Hardware, Home Bus System, Master Circuit, Remote/ Device Circuit, Master and Remot/Device Grounds, and Isolated Input and Output sections and Figure 1 | 1, 3-4          |
|                 2 | 7/21            | Updated EV Kit Board Photo, Quick Start , Table 1, Detailed Description of Hardware sections, EV Kit Bill of Materials , EV Kit Schematics , and EV Kit PCB Layout                                                                                        | 1-13            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX22088