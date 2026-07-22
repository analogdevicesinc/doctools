<!-- lastmod 2022-08-02 -->
## MAX38803 Evaluation Kit

## General Description

The  MAX38803  evaluation  kit  (EV  kit)  serves  as  a reference platform for evaluating the MAX38803 voltage regulator IC. This single-chip, integrated switching regulator provides an extremely compact, highly efficient, fast,  accurate,  and  reliable  power  delivery  solution  for low-output  voltage  applications.  The  MAX38803  has different programmability options to enable a wide range of configurations.

The EV kit consists of a fully-assembled and tested Printed Circuit  Board  (PCB)  implementation  of  the  MAX38803. Jumpers,  test  points,  and  input/output  connectors  are included for flexibility and ease-of-use. Refer to the data sheet for ordering information and more details.

## Applications

- Servers/µServers
- I/O and Chipset Supplies
- GPU Core Supply
- DDR Memory-VDDQ and VTT
- Point-of-Load (PoL) Applications

Ordering Information appears at end of data sheet.

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX38803

## Features

- High-Efficiency Solution
-  Up to 97% Peak
- Up to 87% at Full Load
- Up to 96% Light Load Efficiency at 1A with DCM Enabled
- Inductor Valley Current Limit is Configured to 16A (R\_SEL = R1 = 6.04kΩ)
- Programmable Switching Frequency from 400kHz to 900kHz
- Programmable Positive and Negative OCP Limit
- Programmable Reference Voltage with External Input Option
- Fast Transient Response with Quick-PWM™ Architecture
- Differential Remote Sense with Open-Circuit Detection
- Percentage-Based Output Power Good and OVP
- Open-Drain Status Indicator (STAT) Pin
- Input Undervoltage and Overvoltage Lockout
- Adaptive Dead Time Control
- Integrated Boost Switch
- 27-Bump WLCSP (2.2mm x 3.8mm) Footprint
- Operation Using Ceramic Input and Output Capacitors

<!-- image -->

## Quick Start

## Required Equipment

- MAX38803 EV kit
- 12V, 10A DC power supply
- Load capable of sinking 16A
- Digital voltmeter
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Connect a 12V power supply to the VDD1 and GND1 banana jacks.
- 2) Make sure the shunt is installed on:
- a)  J16 (1-2) to close the sense line.
- b)  J4 (1-2) to power up the on-board LDO which regulates 1.8V.
- c)  J12 (1-2) to provide the 1.8V bias supply to the regulator from the on-board LDO.
- d)  J15 (3-5) to pull up the STAT pin.
- e)  J15 (4-6) to pull up the OE pin.
- f) J15 (2-4) to pull down/disable the OE pin.
- 3) Connect a voltmeter to the VOUT and GND banana jacks (J8, J11, J13, and J14 can be used as well).
- 4) Turn on the power supply.
- 5) Verify that the voltmeter reads 2.5V.

## Detailed Description of Hardware

The  MAX38803  provides  compact,  high-efficiency  power delivery  for  precision  outputs  that  demand  fast  transient response. The 27-bump (2.2mm x 3.8mm) WLCSP package minimizes  the  printed  circuit  board  area.  The  EV  kit  is preset for 2.5V output and can provide up to 16A from a 6.5V to 14V input supply.

## Bias Supply

The MAX38803 EV kit has an on-board LDO (U2) that can provide the required 1.8V VCC bias voltage to the regulator

## Evaluates: MAX38803

as well as the pull up voltage for the Output Enable (OE) input. This allows testing the part using a single external power supply.

To enable the on-board LDO install the shunt on jumper J4. T o effectively use the LDO to supply the VCC bias voltage to the regulator also install the shunt on jumper J12.

In  order  to  properly  measure  the  efficiency  of  the  regulator, the  LDO  should  not  be  active.  To  disable  the  LDO, both the shunts on J4 and J12 need to be removed. An external 1.8V, 0.1A current limited power supply needs to be connected between J12-2 and ground. The same signal should be connected to J10 (1-2) to pull up the OE pin.

## Regulator Enable

To  enable  the  regulator,  the  OE  pin  needs  to  be  pulled high.  If  the  on-board  1.8V  LDO  is  active  (the  shunt  on jumper J4 is in place), the output voltage can be used for the purpose. Installing a shunt on J15 (4-6) pulls the OE signal high to 1.8V through a 20kΩ resistor. To shut down the regulator, a shunt needs to be installed on J10. This forces the OE pin low.

## Status Pin

The MAX38803 has an open collector status (STAT) output to report fault or output undervoltage and output overvoltage event. Install a shunt on J15 (3-5) to pull up this pin to V CC through a 20kΩ resistor. Since STAT pin is 1.8V tolerant, a shunt on J15 (1-3) can be installed to pull up this pin through a 20kΩ resistor to the 1.8V provided by the on-board regulator U2.

## Scenario Selection

Several parameters of the MAX38803 can be programmed to allow optimization for specific applications. By selecting the appropriate value of resistor R\_SEL (R1) and capacitor C\_SEL (C4), the optimum set of parameters (scenario) can be programmed.

While R\_SEL selects the proper scenario, C\_SEL determines the nominal F SW . Table 1 shows the configuration table for MAX38803.

│

## MAX38803 Evaluation Kit

## Setting the Output Voltage

The  output  voltage  of  the  MAX38803  depends  both  on the reference voltage (V REF ) and the resistor divider ratio.

## Equation 1

<!-- formula-not-decoded -->

The  reference  voltage  is  selected  through  RSEL  (see Table  1 )  and  can  be  either  internal  or  external  (refer  to the data sheet for more details). In order to optimize the common mode rejection of the error amplifier, choose the voltage  divider  resistors  so  that  their  parallel  resistance RPAR is as close as possible to 2kΩ.

## Equation 2

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where,

R6 = Top divider resistor

R9 = Bottom divider resistor

## Table 1. MAX38803 Configuration Table

| R_SEL (kΩ)   | V REF (V)   | SOFT- START TIME (T SS ) (ms)   | VALLEY OCP INCEPTION (A)   | OPERATION MODES   | REPORTING (CURRENT/ TEMP)   | RSENSE (GAIN) (mΩ)   | F SW (kHz) C_SEL   | F SW (kHz) C_SEL   | F SW (kHz) C_SEL   | T STAT (µs)   |
|--------------|-------------|---------------------------------|----------------------------|-------------------|-----------------------------|----------------------|--------------------|--------------------|--------------------|---------------|
| R_SEL (kΩ)   | V REF (V)   | SOFT- START TIME (T SS ) (ms)   | VALLEY OCP INCEPTION (A)   | OPERATION MODES   | REPORTING (CURRENT/ TEMP)   | RSENSE (GAIN) (mΩ)   | 0pF                | 200pF              | 820pF              | T STAT (µs)   |
| 1.78         | 0.95        | 1.5                             | 16                         | CCM               | Current                     | 5.4                  | 700                | 800                | 900                | 2000          |
| 2.67         | 0.95        | 1.5                             | 16                         | CCM/DCM           | Current                     | 5.4                  | 700                | 800                | 900                | 2000          |
| 4.02         | 0.95        |                                 | 16                         | CCM               | Current                     | 5.4                  | 700                | 800                | 900                | 2000          |
| 6.04         | 0.95        |                                 | 16                         | CCM/DCM           | Current                     | 5.4                  | 700                | 800                | 900                | 2000          |
| 9.09         | Ext.        |                                 | 16                         | CCM               | Current                     |                      | 700                | 800                | 900                | 2000          |
| 13.3         | Ext.        |                                 | 16                         | CCM/DCM           | Current                     |                      | 700                | 800                | 900                | 2000          |
| 20.0         | 0.6         | 3                               | 24                         | CCM/DCM           | Current                     | 2.8                  | 700                | 800                | 900                | 2000          |
| 30.9         | 0.6         |                                 | 24                         | CCM               | Current                     | 2.8                  | 700                | 800                | 900                | 2000          |
| 46.4         | 0.6         |                                 | 16                         | CCM               | Current                     | 5.4                  | 700                | 800                | 900                | 2000          |
| 71.5         | 0.6         |                                 | 16                         | CCM/DCM           | Temp                        | 5.4                  | 700                | 800                | 900                | 2000          |
| 107          | Ext.        |                                 | 20                         | CCM               | Temp                        | 1.4                  | 400                | 500                | 600                | 2000          |
| 162          | Ext.        | 1.5                             | 20                         | CCM               | Temp                        | 1.4                  | 400                | 500                | 600                | 128           |

│

<!-- formula-not-decoded -->

Evaluates: MAX38803

RPAR = Desired parallel resistance of R6 and R9

VOUT = Output voltage

VREF = Reference voltage

## Operation with External VREF

When using an external reference adopt the configuration shown  in Figure  1 .  Once  OE  is  asserted,  the  regulator briefly  discharges  the  SENSE-  node  and  releases  it  as regulation  begins.  In  this  case,  the  soft-start  ramp  is determined by the external low-pass filter time constant. The external filter time constant needs to be lower than TSS/3 in order to avoid premature assertion of STAT pin while the output voltage is still ramping.

The  external  reference  voltage  can  be  applied  prior  to enabling  the  regulator,  or  ramped  up  right  after  enable  is asserted. In both cases, the low-pass filtered reference voltage at SENSE- pin must reach its final value within T SS .

Typical values for the filter components are:

- RF = 2.2kΩ
- CF = 0.22μF

## MAX38803 Evaluation Kit

## Input Voltage Monitoring

VDD1 and GND1 sense points as well as J3 can be used to monitor the input supply.

## Output Voltage Monitoring

J11 and J13 monitor the output voltage. These test points should  not  be  used  for  loading.  Use  scopejack  J14  to monitor the output voltage ripple on an oscilloscope.

## Efficiency Measurement

The following steps describe how to measure the regulator efficiency.

- 1) Connect a 12V power supply to the VDD1 and GND1 banana jacks. To avoid the input voltage to drop at high load due to power losses on connection cables connect the sense lines of the power supply to VDD1 and GND1 headers.
- 2) Connect an external 1.8V, 0.1A current limited power supply between J12-2 and ground
- 3) Connect the same power supply to J10-1 to enable the regulator.
- 4) Connect a load to the VOUT and GND banana jacks for better results. J8 can also be used for low currents.
- 5) Make sure the shunt is installed on J16 (1-2) to close the sense line.
- 6) Remove all the other jumpers.
- 7) Connect a voltmeter to J11 or J13.
- 8) Turn on the power supply.
- 9) Measure V IN , I IN , V OUT , I OUT , V BIAS , and I BIAS .
- 10)  Calculate the efficiency as:

Figure 1. Electrical Connections to Use the External Voltage Reference Feature

<!-- image -->

Evaluates: MAX38803

## Equation 3

<!-- formula-not-decoded -->

│

## MAX38803 Evaluation Kit

## MAX38803 EV Kit Bill of Materials

Evaluates: MAX38803

| STATUS       | ACTIVE                                     | ACTIVE                                                                                                                                                                     | EVKIT-NOT FOR TEST                             | EVKIT-NOT FOR TEST                            | EVKIT-NOT FOR TEST                           | EVKIT-NOT FOR TEST                              | ACTIVE                                                                | EVKIT-NOT FOR TEST                             | EVKIT-NOT FOR TEST                                 | ACTIVE                                           | NOT RECOMMENDED                                                                                         |
|--------------|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|-----------------------------------------------|----------------------------------------------|-------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------|----------------------------------------------------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| DESCRIPTION  | CAP; SMT (7343); 150µF; 20%; 16V; TANTALUM | CAP; SMT (0402); 0.1µF; 10%; 16V; X7R; CERAMIC                                                                                                                             | CAP; SMT (0402); 820PF; 10%; 25V; X7R; CERAMIC | CAP; SMT (1206); 10µF; 20%; 16V; X7R; CERAMIC | CAP; SMT (0603); 1µF; 20%; 16V; X7R; CERAMIC | CAP; SMT (0603); 0.47µF; 10%; 25V; X7R; CERAMIC | CAP; SMT (0402); 10µF; 20%; 10V; X5R; CERAMIC                         | CAP; SMT (0805); 22µF; 20%; 6.3V; X6S; CERAMIC | CAP; SMT (0805); 47µF; 20%; 6.3V; X5R; CERAMIC     | CAP; SMT (0402); 0.015µF; 10%; 16V; X7R; CERAMIC | CAP; SMT (0402); 0.01µF; 10%; 25V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-00u01-B60 |
| VALUE        | 150µF                                      | 0.1µF                                                                                                                                                                      | 820PF                                          | 10µF                                          | 1µF                                          | 0.47µF                                          | 10µF                                                                  | 22µF                                           | 47µF                                               | 0.015µF                                          | 0.01µF                                                                                                  |
| MANUFACTURER | AVX                                        | TDK; AMERICAN TECHNICAL CERAMICS; AVK; VENKEL LTD.; SAMSUNG ELECTRONICS; MURATA; TDK; YAGEO PHICOMP; TAIYO YUDEN; SAMSUNG ELECTRONICS                                      | PANASONIC                                      | TDK                                           | TAIYO YUDEN                                  | MURATA; MURATA                                  | MURATA; MURATA; AVX; SAMSUNG                                          | TDK; MURATA                                    | SAMSUNG ELECTRONICS; TDK; TAIYO YUDEN              | KEMET;MURATA                                     | KEMET;MURATA;TDK                                                                                        |
| MFG PART #   | TPSE157M016R0100                           | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | ECJ-0EB1E821K                                  | C3216X7R1C106M160AC                           | EMK107B7105MA                                | GRM188R71E474KA12; GCM188R71E474KA64            | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC | C2012X6S0J226M125AB; GRM21BC80J                | CL21A476MQYNNN; C2012X5R0J476M125AC; JMK212BJ476MG | C0402C153K4RAC; GRM155R71C153KA01                | C0402C103K3RAC; GRM155R71E103KA01; C1005X7R1E103K050BB                                                  |
| MAXINV       | 20-0150U-00                                | 20-000U1-L1A                                                                                                                                                               | 20-0820P-12                                    | 20-0010U-A36                                  | 20-0001U-A54                                 | 20-00U47-P6                                     | 20-0010U-BA12                                                         | 20-0022U-K7A                                   | 20-0047U-K7D                                       | 20-0U015-B19                                     | 20-00U01-12                                                                                             |
| REF DES      | C1, C2                                     | C3                                                                                                                                                                         | C4                                             | C5, C6, C10, C11                              | C7                                           | C8                                              | C9, C21                                                               | C13-C15, C17, C18                              | C22, C41, C46, C50                                 | C23                                              | C24                                                                                                     |
| QTY          | 2                                          | 1                                                                                                                                                                          | 1                                              | 4                                             | 1                                            | 1                                               | 2                                                                     | 5                                              | 4                                                  | 1                                                | 1                                                                                                       |
| ITEM         | 1                                          | 2                                                                                                                                                                          | 3                                              | 4                                             | 5                                            | 6                                               | 7                                                                     | 8                                              | 9                                                  | 10                                               | 11                                                                                                      |

│

## MAX38803 Evaluation Kit

## MAX38803 EV Kit Bill of Materials (continued)

| STATUS       | NOT RECOMMENDED                                                                                      | EVKIT-NOT FOR TEST                              | EVKIT-NOT FOR TEST                                                                                                              | NOT RECOMMENDED         | EVKIT-NOT FOR TEST                                                 | EVKIT-NOT FOR TEST                                       | EVKIT-NOT FOR TEST                                       | ACTIVE                                                    | EVKIT-CUSTOM                | EVKIT-NOT FOR TEST                                                    | ACTIVE                                                                             | NOT RECOMMENDED                                  | EVKIT-NOT FOR TEST                               | EVKIT-NOT FOR TEST                             |
|--------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|-------------------------|--------------------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|-----------------------------------------------------------|-----------------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------|--------------------------------------------------|------------------------------------------------|
| DESCRIPTION  | CAP; SMT (0402); 1UF; 10%; 6.3V; X5R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-0001u-B8 | CAP; SMT (0402); 6800PF; 10%; 25V; X5R; CERAMIC | CAP; SMT (0402); 0.015µF; 10%; 50V; X7R; CERAMIC CAP; SMT (0402); 2200PF; 10%; 25V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW | DESIGN. USE 20-2200p-04 | DIODE; ZNR; THROUGH HOLE-AXIAL LEAD (DO-41); VZ = 15V; IZ = 0.122A | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS | EVKIT PART-SCOPE_PROBE_JACK | CONNECTOR; FEMALE; THROUGH HOLE; BLUE TERMINAL BLOCK; STRAIGHT; 2PINS | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65°C TO +125°C | INDUCTOR; SMT; SHIELDED; 0.68µH; TOL = ±20%; 16A | RES; SMT (0402); 6.04K; 1%; ±100PPM/° C; 0.1000W | RES; SMT (0402); 10K; 1%; ±100PPM/° C; 0.0630W |
| VALUE        | 1µF                                                                                                  | 6800PF                                          | 0.015µF                                                                                                                         | 2200PF                  | 15V                                                                | 108-0740-001                                             | PEC01SAAN                                                | PEC02SAAN                                                 | SCOPE_PROBE_JACK            | ED120/2DS                                                             | PEC03DAAN                                                                          | 0.68UH                                           | 6.04K                                            | 10K                                            |
| MANUFACTURER | VENKEL LTD; TDK; MURATA; TAIYO YUDEN; TAIYO YUDEN                                                    | TAIYO YUDEN                                     | MURATA                                                                                                                          | KEMET                   | MICRO COMMERCIAL COMPONENTS                                        | EMERSON NETWORKPOWER                                     | SULLINS ELECTRONICS CORP                                 | SULLINS                                                   | MAXIM                       | ON-SHORE TECHNOLOGY INC.                                              | SULLINS ELECTRONICS CORP.                                                          | WURTH ELECTRONICS INC                            | PANASONIC                                        | TE CONNECTIVITY                                |
| MFG PART #   | C0402X5R6R3-105KNP; C1005X5R0J105K050BB; GRM155R60J105KE19; JMK105BJ105KV-F; JMK105BJ105KVHF         | TMK105BJ682KVH                                  | GRM155R71H153KA12                                                                                                               | C0402C222K3RAC          | 2EZ15D5                                                            | 108-0740-001                                             | PEC01SAAN                                                | PEC02SAAN                                                 | SCOPE_PROBE_JACK            | ED120/2DS                                                             | PEC03DAAN                                                                          | 744373680068                                     | ERJ-2RKF6041                                     | CRG0402F10K                                    |
| MAXINV       | 20-0001U-19                                                                                          | 20-6800P-BA43                                   | 20-0U015-04C                                                                                                                    | 20-2200P-12             | 30-2EZ15D5-00                                                      | 01-10807400011P-80                                       | 01-PEC01SAAN1P-21                                        | 01-PEC02SAAN2P-21                                         | 00-SAMPLE-01                | 01-ED1202DS2P-25                                                      | 01-PEC03DAAN6P-21                                                                  | 50-00U68-0QO                                     | 80-06K04-18A                                     | 80-0010K-23D                                   |
| REF DES      | C36                                                                                                  | C37                                             | C38                                                                                                                             | C39                     | D1                                                                 | GND1, TP1-TP3, VDD1, VOUT                                | GND1_HEADER, GND2, J9, VDD1_HEADER, VX1                  | J1, J4, J10-J13, J16                                      | J3, J14                     | J8                                                                    | J15                                                                                | L1                                               | R1                                               | R2                                             |
| QTY          | 1                                                                                                    | 1                                               | 1                                                                                                                               | 1                       | 1                                                                  | 6                                                        | 5                                                        | 7                                                         | 2                           | 1                                                                     | 1                                                                                  | 1                                                | 1                                                | 1                                              |
| ITEM         | 12                                                                                                   | 13                                              | 14                                                                                                                              | 15                      | 16                                                                 | 17                                                       | 18                                                       | 19                                                        | 20                          | 21                                                                    | 22                                                                                 | 23                                               | 24                                               | 25                                             |

## MAX38803 Evaluation Kit

## MAX38803 EV Kit Bill of Materials (continued)

| STATUS       | ACTIVE                                          | EVKIT-NOT FOR TEST                      | EVKIT-NOT FOR TEST                             | ACTIVE                                           | EVKIT-NOT FOR TEST                               | EVKIT-NOT FOR TEST                            | ACTIVE                                           | EVKIT-NOT FOR TEST                              | EVKIT-NOT FOR TEST                             | EVKIT-NOT FOR TEST                                                                                             | EVKIT-CUSTOM                                                            | EVKIT-NOT FOR TEST                                            |       |
|--------------|-------------------------------------------------|-----------------------------------------|------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-----------------------------------------------|--------------------------------------------------|-------------------------------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|---------------------------------------------------------------|-------|
| DESCRIPTION  | RES; SMT (0402); 2.1K; 1%; ±100PPM/° C; 0.0630W | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W | RES; SMT (0402); 20K; 5%; ±200PPM/° C; 0.1000W | RES; SMT (0402); 4.32K; 1%; ±100PPM/° C; 0.0630W | RES; SMT (0402); 2.61K; 1%; ±100PPM/° C; 0.1000W | RES; SMT (0402); 1K; 5%; ±100PPM/° K; 0.0630W | RES; SMT (0402); 9.09K; 1%; ±100PPM/° C; 0.0630W | RES; SMT (0402); 118K; 1%; ±100PPM/° C; 0.1000W | RES; SMT (0402); 59K; 1%; ±100PPM/° K; 0.0630W | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED | EVKIT PART - IC; VREG; INTEGRATED; STEP-DOWN SWITCHING REGULATOR; CSP27 | IC; REG; ULTRA-LOW QUIESCENT CURRENT; LINEAR REGULATOR; TSOT6 |       |
| VALUE        | 2.1K                                            | 0                                       | 20K                                            | 4.32K                                            | 2.61K                                            | 1K                                            | 9.09K                                            | 118K                                            | 59K                                            | SX1100-B                                                                                                       | MAX38803HCJ+                                                            | MAX17651AZT+                                                  |       |
| MANUFACTURER | VISHAY DALE                                     | YAGEO PHYCOMP; VENKEL LTD.              | PANASONIC                                      | VISHAY DALE                                      | PANASONIC                                        | VISHAY DALE                                   | VENKEL LTD.; VISHAY DALE PANASONIC               | PANASONIC                                       | VENKEL LTD.; VISHAY DALE                       | KYCON; KYCON; SULLINS ELECTRONICS CORP.                                                                        | MAXIM                                                                   | MAXIM                                                         |       |
| MFG PART #   | CRCW04022K10FK                                  | RC0402JR-070RL; CR0402-16W-000RJT       | ERJ-2GEJ203                                    | CRCW04024K32FK                                   | ERJ-2RKF2611                                     | CRCW04021K00JK                                | CR0402-16W-9091FT; CRCW04029K09FK                | ERJ-2RKF1183                                    | CR0402-16W-5902FT; CRCW040259K0FK              | S1100-B;SX1100-B; STC02SYAN                                                                                    | MAX38803HCJ+                                                            | MAX17651AZT+                                                  |       |
| MAXINV       | 80-002K1-23                                     | 80-0000R-26B                            | 80-0020K-Q6                                    | 80-04K32-23                                      | 80-02K61-AA23                                    | 80-0001K-48                                   | 80-09K09-23                                      | 80-0118K-18A                                    | 80-0059K-23                                    | 02-JMPFS1100B-00                                                                                               | NA                                                                      | 10-MAX17651AZT-Z                                              |       |
| REF DES      | R3, R13                                         | R4, R7, R11, R15, R16                   | R5, R8                                         | R6                                               | R9                                               | R10                                           | R12                                              | R18                                             | R19                                            | SU1-SU5                                                                                                        | U1                                                                      | U2                                                            |       |
| QTY          | 2                                               | 5                                       | 2                                              | 1                                                | 1                                                | 1                                             | 1                                                | 1                                               | 1                                              | 5                                                                                                              | 1                                                                       | 1                                                             | 75    |
| ITEM         | 26                                              | 27                                      | 28                                             | 29                                               | 30                                               | 31                                            | 32                                               | 33                                              | 34                                             | 35                                                                                                             | 36                                                                      | 37                                                            | TOTAL |

Evaluates: MAX38803

<!-- image -->

| STATUS                                         |            |
|------------------------------------------------|------------|
| DESCRIPTION                                    |            |
| VALUE and will                                 |            |
| MANUFACTURER purchased parts but not assembled |            |
| PACKOUT (These are                             | MFG PART # |
| MAXINV                                         |            |
| REF DES                                        |            |
| ITEM QTY                                       | TOTAL 0    |

│

## MAX38803 EV Kit Schematic

<!-- image -->

Evaluates: MAX38803

## MAX38803 EV Kit PCB Layout Diagrams

MAX38803 EV Kit-Top Silkscreen

<!-- image -->

MAX38803 EV Kit-Internal 2

<!-- image -->

MAX38803 EV Kit-Top

<!-- image -->

MAX38803 EV Kit-Internal 3

<!-- image -->

│

## MAX38803 EV Kit PCB Layout Diagrams (continued)

MAX38803 EV Kit-Bottom

<!-- image -->

MAX38803 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX38803EVKIT# | EV Kit |

#Denotes an RoHS-compliant device

Evaluates: MAX38803

## MAX38803 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/17            | Initial release                                                                                                                         | -               |
|                 1 | 5/18            | Updated Bill of Materials                                                                                                               | 5-7             |
|                 2 | 10/20           | Updated Procedure , Status Pin , MAX38803 EV Kit Bill of Materials , MAX38803 EV Kit Schematic , and MAX38803 EV Kit PCB Layout Diagams | 2, 5-10         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX38803