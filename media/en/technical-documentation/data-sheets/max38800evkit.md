<!-- lastmod 2022-08-02 -->
## MAX38800 Evaluation Kit

## General Description

The MAX38800 evaluation kit (EV kit) serves as a reference platform  for  evaluating  the  MAX38800  voltage  regulator IC. This single-chip, integrated switching regulator provides  an  extremely  compact,  highly  efficient,  fast, accurate  and  reliable  power  delivery  solution  for  lowoutput  voltage  applications.  The  MAX38800  has  different programmability  options  to  enable  a  wide  range  of configurations.

The EV kit consists of a fully-assembled and tested Printed Circuit  Board  (PCB)  implementation  of  the  MAX38800. Jumpers,  test  points,  and  input/output  connectors  are included for flexibility and ease-of-use. Refer to the data sheet for ordering information and more details.

## Applications

- Servers/µServers
- I/O and Chipset Supplies
- GPU Core Supply
- DDR Memory-VDDQ and VTT
- Point-of-Load (PoL) Applications

Ordering Information appears at end of data sheet.

Quick PWM is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX38800

## Features

- High-Efficiency Solution
-  Up to 96% Peak
- Up to 95.5% Full-Load
- Up to 94% Light-Load Efficiency at 1A with DCM Enabled
- Inductor valley current limit is Configured to 7.5A (R\_SEL = R1 = 2.67kΩ)
- Programmable Switching Frequency from 400kHz to 900kHz
- Programmable Positive and Negative OCP Limit
- Programmable Reference Voltage with External Input Option
- Fast Transient Response with Quick PWM™ Architecture
- Differential Remote Sense with Open-Circuit Detection
- Percentage-Based Output Power Good and OVP
- Open-Drain Status Indicator (STAT) Pin
- Input Undervoltage and Overvoltage Lockout
- Adaptive Dead Time Control
- Integrated Boost Switch
- 19-Bump WLCSP (2.2mm x 2.8mm) Footprint
- Operation Using Ceramic Input and Output Capacitors

<!-- image -->

## Quick Start

## Required Equipment

- MAX38800 EV kit
- 12V, 10A DC power supply
- Load capable of sinking 7.5A
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
- 3) Connect a voltmeter to the VOUT and GND banana jacks (J8, J11, J13, and J14 can be used as well).
- 4) Turn on the power supply.
- 5) Verify that the voltmeter reads 3.3V.

## Detailed Description of Hardware

The  MAX38800  provides  compact,  high-efficiency  power delivery  for  precision  outputs  that  demand  fast  transient response.  The  19-ball  (2.2mm  x  2.8mm)  CSP  package minimizes the PCB area. The EV kit is preset for 3.3V output and can provide up to 7.5A from a 6.5V to 14V input supply.

## Bias Supply

The  MAX38800 EV kit has an on-board LDO (U2) that can provide the required 1.8V VCC bias voltage to both the regulator and pullup voltage for the Output Enable (OE) input. This allows testing the part using a single external power supply.

To enable the on-board LDO install the shunt on jumper J4. T o effectively use the LDO to supply the VCC bias voltage to the regulator also install the shunt on jumper J12.

In order to properly measure the efficiency of the regulator, the  LDO  should  not  be  active.  The  shunts  on  J4  and J12 need to be removed to disable the LDO. An external 1.8V,  0.1A  current-limited  power  supply  needs  to  be connected between J12-2 and ground. The same signal should be connected to J10 (1-2) to pull up the OE pin.

## Regulator enable

To enable the regulator, OE pin needs to be pulled high. If the on-board 1.8V LDO is active (the shunt on jumper J4 is in place), the output voltage can be used for the purpose. Installing a shunt on J15 (4-6) pulls the OE signal high to 1.8V through a 20kΩ resistor. To shut down the regulator a shunt needs to be installed on J10. This forces the OE pin low.

## Status Pin

The MAX38800 has an open collector status (STAT) output to report fault or output undervoltage event. Install a shunt on J15 (3-5) to pull up this pin to V CC through  a  20kΩ resistor. Since STAT pin is 3.3V tolerant, a shunt on J15 (1-3) can be installed to pull up this pin through a 20kΩ resistor to the 3.3V provided by the on board regulator U3 (install a shunt on J5 (3-4) to enable the LDO).

## Scenario Selection

Several parameters of the MAX38800 can be programmed to allow optimization for specific applications. By selecting the appropriate value of resistor R\_SEL (R1) and capacitor C\_SEL (C4), the optimum set of parameters (scenario) can be programmed.

While R\_SEL selects the proper scenario, C\_SEL determines the nominal F SW . The MAX38800 features a configuration table to provide a wide range of options. Table 1 shows the scenario table for MAX38800.

## Evaluates: MAX38800

## MAX38800 Evaluation Kit

## Setting the Output Voltage

The  output  voltage  of  MAX38800  depends  both  on  the reference voltage (V REF ) and the resistor divider ratio.

## Equation 1

<!-- formula-not-decoded -->

The  reference  voltage  is  selected  through  R SEL   (see Table  1 )  and  can  be  either  internal  or  external  (refer  to the data sheet for more details). In order to optimize the common mode rejection of the error amplifier, choose the voltage  divider  resistors  so  that  their  parallel  resistance RPAR is as close as possible to 2kΩ.

## Equation 2

where,

R 6 = Top divider resistor

R 9 = Bottom divider resistor

RPAR = Desired parallel resistance of R6 and R9

VOUT = Output voltage

V REF = Reference voltage

## Table 1. MAX38800 Configuration Table

| R_SEL (kΩ)   | V REF (V)   | SOFT- START TIME (T SS ) (ms)   | VALLEY OCP INCEPTION (A)   | OPERATION MODES   | REPORTING (CURRENT/ TEMP)   | RSENSE (GAIN) (MΩ)   | FSW (kHz) C_SEL   | FSW (kHz) C_SEL   | FSW (kHz) C_SEL   | T STAT (µs)   |
|--------------|-------------|---------------------------------|----------------------------|-------------------|-----------------------------|----------------------|-------------------|-------------------|-------------------|---------------|
| R_SEL (kΩ)   | V REF (V)   | SOFT- START TIME (T SS ) (ms)   | VALLEY OCP INCEPTION (A)   | OPERATION MODES   | REPORTING (CURRENT/ TEMP)   | RSENSE (GAIN) (MΩ)   | 0pF               | 200 pF            | 820 pF            | T STAT (µs)   |
| 1.78         | 0.95        | 6                               | 6                          | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 2.67         | 0.95        | 6                               | 7.5                        | CCM/DCM           | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 4.02         | 0.95        | 3                               | 6                          | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 6.04         | 0.95        | 3                               | 7.5                        | CCM/DCM           | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 9.09         | Ext.        | 3                               | 6                          | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 13.3         | Ext.        | 1.5                             | 6                          | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 20.0         | 0.6         | 6                               | 9                          | CCM/DCM           | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 30.9         | 0.6         | 6                               | 9                          | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 46.4         | 0.6         | 6                               | 6                          |                   | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 71.5         | 0.6         | 6                               | 6                          | CCM/DCM           | Temp                        | 2.1                  | 700               | 800               | 900               | 2000          |
| 107          | 0.6         | 6                               | 6                          | CCM/DCM           | Current                     | 1.05                 | 700               | 800               | 900               | 2000          |
| 162          | Ext.        | 1.5                             | 7.5                        | CCM               | Temp                        | 2.1                  | 400               | 500               | 600               | 128           |

│

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Evaluates: MAX38800

## Operation with External VREF

When using an external reference adopt the configuration shown  in Figure  1 .  Once  OE  is  asserted,  the  regulator briefly  discharges  the  SENSE-  node  and  releases  it  as regulation begins. In this case, the soft-start ramp is determined by the external low-pass filter time constant. The external filter time constant needs to be lower than T SS /3 in order to avoid premature assertion of STAT pin while the output voltage is still ramping.

The  external  reference  voltage  can  be  applied  prior  to enabling the regulator, or ramped up right after enable is asserted.  In  both  cases,  the  low-pass  filtered  reference voltage  at  SENSE-  pin  must  reach  its  final  value  within TSS.

Typical values for the filter components are:

- RF = 2.2kΩ
- CF = 0.22μF

## MAX38800 Evaluation Kit

## Input Voltage Monitoring

VDD1 and GND1 sense points as well as J3 can be used to monitor the input supply.

## Output Voltage Monitoring

J11 and J13 monitor the output voltage. These test points should  not  be  used  for  loading.  Use  scopejack  J14  to monitor the output voltage ripple on an oscilloscope.

## Efficiency Measurement

The following steps describe how to measure the regulator efficiency.

- 1) Connect a 12V power supply to the VDD1 and GND1 banana jacks. To avoid the input voltage to drop at high load due to power losses on connection cables connect the sense lines of the power supply to VDD1 and GND1 headers.
- 2) Connect an external 1.8V, 0.1A current limited power supply between J12-2 and ground.
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

## Evaluates: MAX38800

## Equation 3

<!-- formula-not-decoded -->

│

## MAX38800 Evaluation Kit

## MAX38800 EV Kit Bill of Materials

<!-- image -->

| DESCRIPTION CAPACITOR; SMT; 7343; TANTALUM; 150uF; 16V; 20%; TPS; -55degC to +125degC   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; CAPACITOR; SMT (0402); CERAMIC CHIP; 820PF; 25V; TOL=10%; MODEL=ECJ SERIES; TG=-55 DEGC TO +125   | DEGC; TC=X7R CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +125   | DEGC; TC=X7R CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=20%; MODEL=M SERIES; TG=-55 DEGC TO +125 DEGC;   | TC=X7R CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125   | DEGC; TC=X7R CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R   | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TG=-55 DEGC TO +105 DEGC; TC=X6S   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.015UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R   | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R;   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC   | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R   | DIODE; ZNR; THROUGH HOLE-AXIAL LEAD (DO-41); VZ=15V; IZ=0.122A   | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN   | EVK KIT PARTS; MAXIM PAD; NO WIRE TO BE SOLDERED ON THE MAXIMPAD   | PEC02SAAN CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS   |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------------------------------------|
| VALUE 150UF                                                                             | 0.1UF                                                                                                                                                                                         | 820PF                                                                                                       | 10UF                                                                                                             | 1UF                                                                                                       | 0.47UF 4.7UF                                                                                              | 22UF                                                                                         | 0.01UF                                                                                         | 0.015UF                                                                                        | 1UF                                                                                         | 0.047UF                                                                                | 4700PF                                                                                       | 15V                                                              | 108-0740-001                                               | PEC01SAAN                                                  | MAXIMPAD                                                           |                                                                       |
| MFG AVX                                                                                 | VENKEL LTD./SAMSUNG ELECTRONICS/MURATA/TD K/YAGEO PHICOMP/TAIYO YUDEN                                                                                                                         | PANASONIC                                                                                                   | TDK                                                                                                              | TAIYO YUDEN                                                                                               | MURATA TAIYO YUDEN; TDK                                                                                   | TDK/MURATA                                                                                   | KEMET; MURATA; TDK                                                                             | VENKEL LTD./MURATA                                                                             | VENKEL LTD./TDK/MURATA                                                                      | TDK/MURATA                                                                             | TAIYO YUDEN                                                                                  | MICRO COMMERCIAL COMPONENTS                                      | EMERSON NETWORK POWER                                      | SULLINS ELECTRONICS CORP                                   | N/A                                                                | SULLINS                                                               |
| MFGPART# TPSE157M016R0100 C0402X7R160-104KNE;                                           | CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV                                                                                                          | ECJ-0EB1E821K                                                                                               | C3216X7R1C106M160AC                                                                                              | EMK107B7105MA                                                                                             | 1 GRM188R71E474KA12 JMK105BBJ475MV-F; C1005X5R0J475M050BC                                                 | C2012X6S0J226M125AB;GR M21BC80J                                                              | C0402C103K3RAC; GRM155R71E103KA01D; C1005X7R1E103K                                             | C0402X7R250- 153KNE;GRM155R71E153K A61                                                         | C0402X5R6R3-105KNP; C1005X5R0J105K; GRM155R60J105KE19; JMK105BJ105KV                        | C1005X7R1E473K; GRM155R71E473K                                                         | 1 TMK105BJ472KV-F                                                                            | 2EZ15D5                                                          | 108-0740-001                                               | PEC01SAAN                                                  | MAXIMPAD                                                           | PEC02SAAN                                                             |
| 2                                                                                       | 1                                                                                                                                                                                             | 1                                                                                                           | 4                                                                                                                | 3                                                                                                         | 2                                                                                                         | 12                                                                                           | 1                                                                                              | 2                                                                                              | 1                                                                                           | 1                                                                                      |                                                                                              | 1                                                                | 6                                                          | 5                                                          | 6                                                                  | 7                                                                     |
| ITEM REF_DES DNP QTY 1 C1, C2 -                                                         | 2 C3 -                                                                                                                                                                                        | 3 C4 -                                                                                                      | 4 C5, C6, C10, C11 -                                                                                             | 5 C7, C21, C54 -                                                                                          | 6 C8 - 7 C9, C55 -                                                                                        | 8 C13-C15, C17- C19, C22, C26, C27, C41, C46, C50 -                                          | 9 C24 -                                                                                        | 10 C25, C56 -                                                                                  | 11 C36 -                                                                                    | 12 C37 -                                                                               | 13 C39 -                                                                                     | 14 D1 -                                                          | 15 GND1, TP1- TP3, VDD1, VOUT -                            | 16 GND1_HEADE R, GND2, J9, VDD1_HEADE R, VX1 - GND1_MAXIM  | 17 GND_MAXIMP AD, J2, J6, VDD1_MAXIMP AD, VOUT_MAXIM PAD -         | 18 J1, J4, J10-J13, J16 -                                             |

Evaluates: MAX38800

## MAX38800 EV Kit Bill of Materials (continued)

| COMMENTS     |                             |                                                                                     |                                                                                                                                 |                          |                                                      |                                                                |                                                                                                                                                                        |                             |                                                                 |                                                                                                                  |                                                                |                                                                                                                                                                             |                                                                                                                                                                                                                                                                                               |                                                     | -                                    | (Alternate part for C4)                                                                                                                                                                 | (Alternate part for L1)                                                                          |                   |                                                                     |                  |
|--------------|-----------------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|--------------------------|------------------------------------------------------|----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-------------------|---------------------------------------------------------------------|------------------|
| DESCRIPTION  | EVKIT PART-SCOPE_PROBE_JACK | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS CONNECTOR; FEMALE; THROUGH HOLE; BLUE TERMINAL BLOCK; STRAIGHT; 2PINS | 16.2A                    | 0.47UH INDUCTOR; SMT; LIQUALLOY; 0.47UH; TOL=+/-20%; | 2.67K RESISTOR; 0402; 2.67K OHM; 1%; 100PPM; 0.10W; THICK FILM | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.063W; THICK FILM 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM RESISTOR; 0402; 20K OHM; 5%; 200PPM; 0.10W; THICK FILM | 20K                         | 6.81K RESISTOR; 0402; 6.81K OHM; 1%; 100PPM; 0.063W; METAL FILM | RESISTOR; 0402; 2.74K; 1%; 100PPM; 0.0625W; THICK FILM 1K RESISTOR; 0402; 1K OHM; 5%; 100PPM; 0.063W; METAL FILM | 2.8K RESISTOR; 0402; 2.8K OHM; 0.1%; 25PPM; 0.063W; METAL FILM | 200 RESISTOR; 0402; 200 OHM; 1%; 100PPM; 0.080W; THICK FILM TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR COPPER PLATED TIN OVERALL | S+ EVKIT PART-IC; VREG; INTEGRATED; STEP-DOWN SWITCHING REGULATOR; CSP19 IC; VREG; MICROPOWER 250-mA LOW-NOISE ULTRALOW-DROPOUT REGULATOR DESIGNED FOR USE WITH VERY LOW-ESR OUTPUT CAPACITOR; SOT23-5 IC; VREG; MICROPOWER 250-mA LOW-NOISE ULTRALOW-DROPOUT REGULATOR DESIGNED FOR USE WITH | VERY LOW-ESR OUTPUT CAPACITOR; SOT23-5 PCB:MAX38800 | 3.3/NOPB PCB                         | OPEN PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR OPEN PACKAGE OUTLINE 7343 HEIGHT 4.3MM ELECTROLYTIC CAPACITOR OPEN PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR PACKAGE OUTLINE 0402 RESISTOR | 820PF CAPACITOR; SMT (0402); CERAMIC CHIP; 820PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R |                   | INC 0.47UH INDUCTOR; SMT; WIREWOUND CHIP; 0.47UH; TOL=+/-20%; 11.5A |                  |
| VALUE        | SCOPE_PRO BE_JACK           | PEC03DAAN                                                                           | PEC04SAAN                                                                                                                       | ED120/2DS                |                                                      |                                                                | 10K                                                                                                                                                                    |                             |                                                                 | 2.74K                                                                                                            |                                                                | STC02SYAN                                                                                                                                                                   | LP2992AIM5- 1.8/NOPB                                                                                                                                                                                                                                                                          | LP2992AIM5-                                         |                                      | OPEN                                                                                                                                                                                    |                                                                                                  |                   |                                                                     |                  |
| MFG          | MAXIM                       | SULLINS ELECTRONICS CORP.                                                           | SULLINS ELECTRONICS CORP.                                                                                                       | ON-SHORE TECHNOLOGY INC. | ALPS                                                 | PANASONIC                                                      | TE CONNECTIVITY YAGEO PHYCOMP/VENKEL                                                                                                                                   | LTD. PANASONIC              | VISHAY DALE                                                     | VISHAY DALE                                                                                                      | VISHAY DALE PANASONIC                                          | INTERNATIONAL MANUFACTURING SERVICE SULLINS ELECTRONICS CORP.                                                                                                               | TEXAS INSTRUMENTS                                                                                                                                                                                                                                                                             | TEXAS INSTRUMENTS MAXIM                             | N/A N/A N/A N/A                      |                                                                                                                                                                                         | KEMET/MURATA                                                                                     | WURTH ELECTRONICS |                                                                     | PROCURE          |
| MFGPART#     | 2 SCOPE_PROBE_JACK          | 2 PEC03DAAN                                                                         | 1 PEC04SAAN                                                                                                                     | 1 ED120/2DS              | 1 GLMCR4703A                                         | ERJ-2RKF2671X                                                  | CRG0402F10K RC0402JR-070RL; CR0402-                                                                                                                                    | 5 16W-000RJT 2 ERJ-2GEJ203X | 1 CRCW04026K81FK                                                | CRCW04022K74FK                                                                                                   | CRCW04021K00JK ERA-2AEB2801X                                   | RCC-0402PW200RF STC02SYAN                                                                                                                                                   |                                                                                                                                                                                                                                                                                               | LP2992AIM5-3.3/NOPB MAX38800                        | 0 N/A                                | N/A N/A N/A                                                                                                                                                                             | C0402C821K5RAC; GRM155R71H821KA01                                                                | 0 744373460047    | 88                                                                  | ; DNP--> DO NOT  |
| QTY          |                             |                                                                                     | -                                                                                                                               | -                        | -                                                    | - 1                                                            | - 2 -                                                                                                                                                                  | -                           | -                                                               | - 1                                                                                                              | - 1 - 1                                                        | 1 - 5                                                                                                                                                                       | - 1 LP2992AIM5-1.8/NOPB                                                                                                                                                                                                                                                                       | 1                                                   | 1                                    | 0 0 0                                                                                                                                                                                   | 0                                                                                                |                   |                                                                     | INSTALL(PACKOUT) |
| DNI/ DNP     | -                           | -                                                                                   | 21 J7                                                                                                                           | 22 J8                    | 23 L1                                                | 24 R1                                                          | R4, R7, R11,                                                                                                                                                           | 26 R15, R16                 | 28 R6                                                           |                                                                                                                  | 30 R10 31 R12                                                  | R14 -                                                                                                                                                                       | 35 U2                                                                                                                                                                                                                                                                                         | U3 - PCB -                                          | C20, C34, C52,                       | DNP DNP C57 DNP DNP                                                                                                                                                                     |                                                                                                  | DNP               | DNP                                                                 | NOT              |
| ITEM REF_DES | 19 J3, J14                  | 20 J5, J15                                                                          |                                                                                                                                 |                          |                                                      |                                                                | 25 R2, R3                                                                                                                                                              | 27 R5, R8                   |                                                                 | 29 R9                                                                                                            |                                                                | 32 33 SU1-SU5                                                                                                                                                               |                                                                                                                                                                                                                                                                                               | 36                                                  | 37 C12, C16, C30, C33, C40, C42-C45, | 38 C47-C49, C53 C29                                                                                                                                                                     | 39 C28, 40 C38, C51, 41 R13, R17                                                                 | 42 C4             | 43 L1 TOTA                                                          | NOTE: DNI--> DO  |

Evaluates: MAX38800

## MAX38800 EV Kit Schematic

<!-- image -->

## MAX38800 EV Kit PCB Layout Diagrams

MAX38800 EV Kit-Top Silkscreen

<!-- image -->

│

## MAX38800 EV Kit PCB Layout Diagrams (continued)

MAX38800 EV Kit-Top View

<!-- image -->

## MAX38800 EV Kit PCB Layout Diagrams (continued)

MAX38800 EV Kit-Second Layer

<!-- image -->

│

## MAX38800 EV Kit PCB Layout Diagrams (continued)

MAX38800 EV Kit-Third Layer

<!-- image -->

│

## MAX38800 EV Kit PCB Layout Diagrams (continued)

MAX38800 EV Kit-Bottom View

<!-- image -->

│

## MAX38800 EV Kit PCB Layout Diagrams (continued)

MAX38800 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX38800EVKIT# | EV Kit |

#Denotes an RoHS-compliant device

Evaluates: MAX38800

│

## MAX38800 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 8/17            | Initial release           | -               |
|                 1 | 5/18            | Updated Bill of Materials |                 |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX38800