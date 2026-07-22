<!-- lastmod 2022-08-02 -->
## MAX38801 Evaluation Kit

## General Description

The MAX38801 evaluation kit (EV kit) serves as a reference platform for evaluating the MAX38801 voltage regulator IC. This single-chip, integrated switching regulator provides an extremely  compact,  highly  efficient,  fast,  accurate,  and reliable  power  delivery  solution  for  low-output  voltage applications. The MAX38801 has different programmability options to enable a wide range of configurations.

The EV kit consists of a fully-assembled and tested Printed Circuit  Board  (PCB)  implementation  of  the  MAX38801. Jumpers,  test  points  and  input/output  connectors  are included for flexibility and ease-of-use. Refer to the data sheet for ordering information and more details.

## Applications

- Servers/µServers
- I/O and Chipset Supplies
- GPU Core Supply
- DDR Memory-VDDQ and VTT
- Point-of-Load (PoL) Applications

Ordering Information appears at end of data sheet.

Quick PWM is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX38801

## Features

- High-Efficiency Solution
-  Up to 96% Peak
- Up to 92% Full-Load
- Up to 94% Light-Load Efficiency at 1A with DCM Enabled
- Inductor Valley Current Limit is Configured to 12A (R\_SEL = R1 = 46.4kΩ)
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

- MAX38801 EV kit
- 12V, 10A DC power supply
- Load capable of sinking 12A
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
- 5) Verify that the voltmeter reads 1.05V.

## Detailed Description of Hardware

The  MAX38801  provides  compact  high-efficiency  power delivery  for  precision  outputs  that  demand  fast  transient response. The 19-ball (2.2mm x 2.8mm) CSP package minimizes the PCB area. The EV kit is preset for 1.05V output and can provide up to 12A from a 6.5V to 14V input supply.

## Bias Supply

The MAX38801 EV kit has an on-board LDO (U2) that can provide the required 1.8V VCC bias voltage to the regulator as well as the pull up voltage for the Output Enable (OE) input. This allows testing the part using a single external power supply.

To enable the on-board LDO install the shunt on jumper J4. T o effectively use the LDO to supply the VCC bias voltage to the regulator also install the shunt on jumper J12.

In  order  to  properly  measure  the  efficiency  of  the regulator,  the  LDO  should  not  be  active.  To  disable  it, both the shunts on J4 and J12 need to be removed. An external 1.8V, 0.1A current limited power supply needs to be

## Evaluates: MAX38801

connected between J12-2 and ground. The same signal should be connected to J10 (1-2) to pull up the OE pin.

## Regulator enable

To enable the regulator, OE pin needs to be pulled high. If the on-board 1.8V LDO is active (the shunt on jumper J4 is in place), the output voltage can be used for the purpose. Installing a shunt on J15 (4-6) pulls the OE signal high to 1.8V through a 20kΩ resistor. To shut down the regulator a shunt needs to be installed on J10. This forces the OE pin low.

## Status Pin

The MAX38801 has an open collector status (STAT) output to report fault or output under voltage event. Install a shunt on J15 (3-5) to pull up this pin to V CC through a 20kΩ resistor. Since STAT pin is 3.3V tolerant, a shunt on J15 (1-3) can be installed to pull up this pin through a 20kΩ resistor to the 3.3V provided by the on board regulator U3 (install a shunt on J5 (3-4) to enable the LDO).

## Scenario Selection

Several parameters of the MAX38801 can be programmed to allow optimization for specific applications. By selecting the appropriate value of resistor R\_SEL (R1) and capacitor C\_SEL (C4), the optimum set of parameters (scenario) can be programmed.

While R\_SEL selects the proper scenario, C\_SEL determines the nominal F SW . The MAX38801 features a configuration table to provide a wide range of options. Table 1 shows the scenario table for MAX38801.

│

## Setting the Output Voltage

The  output  voltage  of  MAX38801  depends  both  on  the reference voltage (V REF ) and the resistor divider ratio.

## Equation 1

<!-- formula-not-decoded -->

The  reference  voltage  is  selected  through  RSEL  (see Table 1 ) and can be either internal or external (refer to the data sheet for more details). In order to optimize the common mode rejection of the error amplifier, choose the voltage  divider  resistors  so  that  their  parallel  resistance RPAR is as close as possible to 2kΩ.

## Equation 2

where,

R 6 = Top divider resistor

R 9 = Bottom divider resistor

RPAR = Desired parallel resistance of R6 and R9

VOUT = Output voltage

V REF = Reference voltage

## Table 1. MAX38801 Configuration Table

| R_SEL (kΩ)   | V REF (V)   | SOFT- START TIME (T SS ) (ms)   | VALLEY OCP INCEPTION (A)   | OPERATION MODES   | REPORTING (CURRENT/ TEMP)   | RSENSE (GAIN) (MΩ)   | FSW (kHz) C_SEL   | FSW (kHz) C_SEL   | FSW (kHz) C_SEL   | T STAT (µs)   |
|--------------|-------------|---------------------------------|----------------------------|-------------------|-----------------------------|----------------------|-------------------|-------------------|-------------------|---------------|
| R_SEL (kΩ)   | V REF (V)   | SOFT- START TIME (T SS ) (ms)   | VALLEY OCP INCEPTION (A)   | OPERATION MODES   | REPORTING (CURRENT/ TEMP)   | RSENSE (GAIN) (MΩ)   | 0pF               | 200 pF            | 820 pF            | T STAT (µs)   |
| 1.78         | 0.95        | 6                               | 12                         | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 2.67         | 0.95        | 6                               | 15                         | CCM/DCM           | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 4.02         | 0.95        | 3                               | 12                         | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 6.04         | 0.95        | 3                               | 15                         | CCM/DCM           | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 9.09         | Ext.        | 3                               | 12                         | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 13.3         | Ext.        | 1.5                             | 12                         | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 20.0         | 0.6         | 6                               | 18                         | CCM/DCM           | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 30.9         | 0.6         | 6                               | 18                         | CCM               | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 46.4         | 0.6         | 6                               | 12                         |                   | Current                     | 2.1                  | 700               | 800               | 900               | 2000          |
| 71.5         | 0.6         | 6                               | 12                         | CCM/DCM           | Temp                        | 2.1                  | 700               | 800               | 900               | 2000          |
| 107          | 0.6         | 6                               | 12                         | CCM/DCM           | Current                     | 1.05                 | 700               | 800               | 900               | 2000          |
| 162          | Ext.        | 1.5                             | 15                         | CCM               | Temp                        | 2.1                  | 400               | 500               | 600               | 128           |

│

<!-- formula-not-decoded -->

Evaluates: MAX38801

## Operation with External VREF

When using an external reference adopt the configuration shown  in  Figure  1.  Once  OE  is  asserted,  the  regulator briefly  discharges  the  SENSE-  node  and  releases  it  as regulation  begins.  In  this  case,  the  soft-start  ramp  is determined by the external low-pass filter time constant. The external filter time constant needs to be lower than TSS/3 in order to avoid premature assertion of STAT pin while the output voltage is still ramping.

The  external  reference  voltage  can  be  applied  prior  to enabling  the  regulator,  or  ramped  up  right  after  enable is  asserted.  In  both  cases,  the  low-pass  filtered  reference voltage at SENSE- pin must reach its final value within T SS .

Typical values for the filter components are:

- RF = 2.2kΩ
- CF = 0.22μF

## MAX38801 Evaluation Kit

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
- 5) Make sure the shunt is installed on J16 (1-2) to close the sense line
- 6) Remove all the other jumpers.
- 7) Connect a voltmeter to J11 or J13.
- 8) Turn on the power supply.
- 9) Measure V IN , I IN , V OUT , I OUT , V BIAS , and I BIAS .
- 10) Calculate the efficiency as:

Figure 1. Electrical Connections to Use the External Voltage Reference Feature.

<!-- image -->

Evaluates: MAX38801

## Equation 3

<!-- formula-not-decoded -->

│

## MAX38801 Evaluation Kit

## MAX38801 EV Kit Bill of Materials

| COMMENTS     |                                                                       |                                                                                                            |                                                                                                              |                                                                                                           |                                                                                                          |                                                                                                               |                                                                                            |                                                                       |                                                                                                                 |                                                                                              |                                                                                              |                                                                                           |                                                                                                             |                                                                                              |                                                                                                             |                                                                |                                                          |                                                          |                                                                   |
|--------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|-------------------------------------------------------------------|
| DESCRIPTION  | CAPACITOR; SMT; 7343; TANTALUM; 150uF; 16V; 20%; TPS; -55°C to +125°C | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                | CAPACITOR; SMT (0402); CERAMIC CHIP; 820PF; 25V; TOL=10%; MODEL=ECJ SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=20%; MODEL=M SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TG=-55 DEGC | TO +125 DEGC; TC=X5R CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TG=-55 DEGC TO +105 DEGC; TC=X6S | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.015UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R; | CAPACITOR; SMT (0402); CERAMIC CHIP; 6800PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.015UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | DIODE; ZNR; THROUGH HOLE-AXIAL LEAD (DO-41); VZ=15V; IZ=0.122A | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN | EVK KIT PARTS; MAXIM PAD; NO WIRE TO BE SOLDERED ON THE MAXIMPAD  |
| VALUE        | 150UF                                                                 | 0.1UF                                                                                                      | 820PF                                                                                                        | 10UF                                                                                                      | 1UF                                                                                                      | 0.47UF                                                                                                        | 4.7UF                                                                                      | 22UF                                                                  | 22UF                                                                                                            | 0.01UF                                                                                       | 0.015UF                                                                                      | 1UF                                                                                       | 6800PF                                                                                                      | 0.015UF                                                                                      | 2200PF                                                                                                      | 15V                                                            | 108-0740- 001                                            | PEC01S AAN                                               | MAXIMP AD                                                         |
| MFG          | AVX                                                                   | VENKEL LTD.;SAMSUNG ELECTRONICS;MURATA;TDK;YAGEO PHICOMP;TAIYO YUDEN                                       | PANASONIC                                                                                                    | TDK                                                                                                       | TAIYO YUDEN                                                                                              | MURATA                                                                                                        | TAIYO YUDEN;TDK                                                                            | KEMET;MURATA;TAIYO YUDEN;SAMSUNG ELECTRO-MECHANICS                    | TDK;MURATA                                                                                                      | KEMET;MURATA;TDK                                                                             | VENKEL LTD.;MURATA                                                                           | VENKEL LTD;TDK;MURATA;TAIYO YUDEN                                                         | TDK                                                                                                         | KEMET;MURATA                                                                                 | TDK                                                                                                         | MICRO COMMERCIAL COMPONENTS                                    | EMERSON NETWORK POWER                                    | SULLINS ELECTRONICS CORP                                 | N/A                                                               |
| QTY MFGPART# | 2 TPSE157M016R0100                                                    | 1 C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV | 1 ECJ-0EB1E821K                                                                                              | 4 C3216X7R1C106M160AC                                                                                     | 3 EMK107B7105MA                                                                                          | 1 GRM188R71E474KA12                                                                                           | 2 JMK105BBJ475MV; C1005X5R0J475M050BC                                                      | 7 C0805C226M9PAC; GRM21BR60J226ME39; JMK212BJ226MG; CL21A226MQCLQN    | 8 C2012X6S0J226M125AB;GRM21BC80J                                                                                | 1 C0402C103K3RAC; GRM155R71E103KA01; C1005X7R1E103K                                          | 2 C0402X7R250-153KNE;GRM155R71E153KA61                                                       | 1 C0402X5R6R3-105KNP; C1005X5R0J105K; GRM155R60J105KE19; JMK105BJ105KV                    | 1 C1005X7R1H682K                                                                                            | 1 C0402C153K4RAC; GRM155R71C153KA01                                                          | 1 C1005X7R1H222K050BA                                                                                       | 1 2EZ15D5                                                      | 6 108-0740-001                                           | 5 PEC01SAAN                                              | 6 MAXIMPAD                                                        |
| DNI/D NP     | -                                                                     | -                                                                                                          | -                                                                                                            | -                                                                                                         | -                                                                                                        | -                                                                                                             | -                                                                                          | -                                                                     | -                                                                                                               | -                                                                                            | -                                                                                            | -                                                                                         | -                                                                                                           | -                                                                                            | -                                                                                                           | -                                                              | -                                                        | -                                                        | -                                                                 |
|              | C1, C2                                                                | C3                                                                                                         | C4                                                                                                           | C5, C6, C10, C11                                                                                          | C7, C21, C54                                                                                             | C8                                                                                                            | C9, C55                                                                                    | C12, C15, C16, C20, C34, C42, C44                                     | C13, C14, C17-C19, C41, C46, C50                                                                                | C24                                                                                          | C25, C56                                                                                     | C36                                                                                       | C37                                                                                                         | C38                                                                                          | C39                                                                                                         | D1                                                             | GND1, TP1-TP3, VDD1, VOUT                                | GND1_HEADER, GND2, J9, VDD1_HEADER, VX1                  | GND1_MAXIMPAD, GND_MAXIMPAD, J2, J6, VDD1_MAXIMPAD, VOUT_MAXIMPAD |
| ITEM REF_DES | 1                                                                     | 2                                                                                                          | 3                                                                                                            | 4                                                                                                         | 5                                                                                                        | 6                                                                                                             | 7                                                                                          | 8                                                                     | 9                                                                                                               | 10                                                                                           | 11                                                                                           | 12                                                                                        | 13                                                                                                          | 14                                                                                           | 15                                                                                                          | 16                                                             | 17                                                       | 18                                                       | 19                                                                |

Evaluates: MAX38801

## MAX38801 EV Kit Bill of Materials (continued)

| COMMENTS          |                                                           |                             |                                                                                          |                                                                            |                                                      |                                        |                                                           |                                                         |                                                         |                                                        |                                                                                                                 |                                                        |                                                                                                                                                                                 |                                                                                                                 |                                                                                                                               |                                                                                                                               | -                       |                                                          |                                                           |
|-------------------|-----------------------------------------------------------|-----------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|------------------------------------------------------|----------------------------------------|-----------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|--------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------|----------------------------------------------------------|-----------------------------------------------------------|
| VALUE DESCRIPTION | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS | EVKIT PART-SCOPE_PROBE_JACK | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS BLOCK; STRAIGHT; | CONNECTOR; FEMALE; THROUGH HOLE; BLUE TERMINAL 2PINS | INDUCTOR; SMT; CHOKE; TOL=+/-20%; 24A; | RESISTOR; 0402; 46.4K OHM; 1%; 100PPM; 0.063W; THICK FILM | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.063W; THICK FILM | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM | RESISTOR; 0402; 20K OHM; 5%; 200PPM; 0.10W; THICK FILM | RESISTOR; 0402; 2.1K; 1%; 100PPM; 0.0625W; THICK FILM RESISTOR; 0402; 2.8K OHM; 0.1%; 25PPM; 0.063W; METAL FILM | RESISTOR; 0402; 1K OHM; 5%; 100PPM; 0.063W; METAL FILM | RESISTOR; 0402; 200 OHM; 1%; 100PPM; 0.080W; THICK FILM TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL | EVKIT PART-IC; VREG; INTEGRATED; STEP-DOWN SWITCHING REGULATOR WITH SELECTABLE APPLICATION CONFIGURATION; CSP19 | IC; VREG; MICROPOWER 250-mA LOW-NOISE ULTRALOW-DROPOUT REGULATOR DESIGNED FOR USE WITH VERY LOW-ESR OUTPUT CAPACITOR; SOT23-5 | IC; VREG; MICROPOWER 250-mA LOW-NOISE ULTRALOW-DROPOUT REGULATOR DESIGNED FOR USE WITH VERY LOW-ESR OUTPUT CAPACITOR; SOT23-5 | PCB PCB:MAX38801        | PACKAGE OUTLINE 7343 HEIGHT 4.3MM ELECTROLYTIC CAPACITOR | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR                  |
|                   | PEC02S AAN                                                | SCOPE_ PROBE_ JACK          | PEC03D AAN                                                                               | PEC04S AAN                                                                 | ED120/2 DS                                           | 0.20UH                                 | 46.4K                                                     | 10K                                                     |                                                         | 20K                                                    | 2.1K 2.8K                                                                                                       | 1K                                                     | 200 STC02S                                                                                                                                                                      | YAN                                                                                                             | MAX3880 1HCS+                                                                                                                 | LP2992AI M5- 1.8/NOP B                                                                                                        | LP2992AI M5- 3.3/NOP B  | OPEN                                                     | OPEN                                                      |
| MFG               | SULLINS                                                   | MAXIM                       | SULLINS ELECTRONICS CORP.                                                                | SULLINS ELECTRONICS CORP.                                                  | ON-SHORE TECHNOLOGY INC.                             | SUSUMU CO LTD                          | VENKEL LTD.;VISHAY DALE                                   | TE CONNECTIVITY                                         | YAGEO PHYCOMP;VENKEL LTD.                               | PANASONIC                                              | VISHAY DALE PANASONIC                                                                                           | VISHAY DALE                                            | INTERNATIONAL MANUFACTURING SERVICE                                                                                                                                             | SULLINS ELECTRONICS CORP. MAXIM                                                                                 | TEXAS                                                                                                                         | INSTRUMENTS                                                                                                                   | TEXAS INSTRUMENTS MAXIM | N/A                                                      | N/A                                                       |
| MFGPART#          | PEC02SAAN                                                 | 2 SCOPE_PROBE_JACK          | 2 PEC03DAAN                                                                              | 1 PEC04SAAN                                                                | 1 ED120/2DS                                          | 1 PCMC063T-R20MN                       | 1 CR0402-16W-4642FT; CRCW040246K4FK                       | 2 CRG0402F10K                                           | 5 RC0402JR-070RL; CR0402-16W-000RJT                     | 3 ERJ-2GEJ203X                                         | CRCW04022K10FK 1 ERA-2AEB2801X                                                                                  | 1 CRCW04021K00JK                                       | 1 RCC-0402PW200RF                                                                                                                                                               | 5 STC02SYAN                                                                                                     | LP2992AIM5-1.8/NOPB                                                                                                           | LP2992AIM5-3.3/NOPB                                                                                                           | 1 MAX38801              | N/A                                                      | N/A                                                       |
| QTY               | 7                                                         |                             |                                                                                          |                                                                            |                                                      |                                        |                                                           |                                                         |                                                         |                                                        | 2                                                                                                               |                                                        |                                                                                                                                                                                 | 1 MAX38801HCS+                                                                                                  |                                                                                                                               | 1                                                                                                                             | 1                       | 0                                                        | 0                                                         |
| DNI/D NP          | -                                                         | -                           | -                                                                                        | -                                                                          | -                                                    | -                                      | -                                                         | -                                                       | -                                                       | -                                                      | - -                                                                                                             | -                                                      | - -                                                                                                                                                                             | -                                                                                                               |                                                                                                                               | -                                                                                                                             | - -                     | DNP                                                      | DNP                                                       |
| REF_DES           | J1, J4, J10-J13, J16                                      | J3, J14                     | J5, J15                                                                                  | J7                                                                         | J8                                                   | L1                                     | R1                                                        | R2, R3                                                  | R16                                                     | R5, R8, R12                                            | R6, R13 R9                                                                                                      | R10                                                    | SU1-SU5                                                                                                                                                                         | U1                                                                                                              |                                                                                                                               | U2                                                                                                                            | U3 PCB                  | C28, C29                                                 | C30, C33, C40, C43, C45, C47-C49, C52, C53, C22, C26, C27 |
| ITEM              | 20                                                        | 21                          | 22                                                                                       | 23                                                                         | 24                                                   | 25                                     | 26                                                        | 27                                                      | 28                                                      | 29                                                     | 30 31                                                                                                           | 32                                                     | 33 R14                                                                                                                                                                          | 34 35                                                                                                           | 36                                                                                                                            | 37                                                                                                                            | 38                      | 39                                                       | 40                                                        |

Evaluates: MAX38801

## MAX38801 EV Kit Bill of Materials (continued)

<!-- image -->

Evaluates: MAX38801

## MAX38801 EV Kit Schematic

<!-- image -->

Evaluates: MAX38801

## MAX38801 EV Kit PCB Layout Diagrams

MAX38801 EV Kit-Top Silkscreen

<!-- image -->

## MAX38801 EV Kit PCB Layout Diagrams (continued)

MAX38801 EV Kit-Top View

<!-- image -->

Evaluates: MAX38801

│

## MAX38801 EV Kit PCB Layout Diagrams (continued)

MAX38801 EV Kit-Second Layer

<!-- image -->

│

## MAX38801 EV Kit PCB Layout Diagrams (continued)

MAX38801 EV Kit-Third Layer

<!-- image -->

│

## MAX38801 EV Kit PCB Layout Diagrams (continued)

MAX38801 EV Kit-Bottom View

<!-- image -->

│

## MAX38801 EV Kit PCB Layout Diagrams (continued)

MAX38801 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX38801EVKIT# | EV Kit |

#Denotes an RoHS-compliant device

Evaluates: MAX38801

## MAX38801 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 8/17            | Initial release           | -               |
|                 1 | 5/18            | Updated Bill of Materials | 5-7             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX38801