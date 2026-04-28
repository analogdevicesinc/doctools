<!-- lastmod 2023-03-14 -->
<!-- image -->

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAX16425/MAX16425A

## General Description

The  MAX16425  evaluation  kit  (EV  kit)  serves  as  a reference  platform  for  evaluating  the  MAX16425  voltage  regulator  IC  and  the  MAX16425A  EV  kit  evaluates the  MAX16425A  IC.  The  MAX16425/MAX16425A  is  a single-chip, integrated switching regulator that provides a compact,  highly  efficient,  fast,  accurate,  and  reliable power  delivery  solution  for  low-output  voltage  applications.  The  two  devices  have  different  programmability options to enable a wide range of configurations.

The EV kit consists of a fully assembled and tested Printed Circuit  Board  (PCB)  implementation  of  the  MAX16425/ MAX16425A, Jumper pins, test points, and input/output connectors are included for flexibility and ease-of-use in a wide range of applications. Refer to the MAX16425 IC data sheet for more details.

Ordering Information appears at end of data sheet.

## MAX16425 EV Kit Board Photo

<!-- image -->

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

©

## MAX16425/MAX16425A Evaluation Kit

## Benefits and Features

- 4.5V to 16V Input Voltage Range
- 0.6V to 3.3V Output Voltage Range
- 25A Maximum Load
- High-Efficiency Solution
- Up to 97% Peak
- Up to 87% Full Load
- Up to 96% Light-Load Efficiency at 1A with DCM Enabled
- Flexible Design allows Early PCB Definition
- Footprint Compatible with VT2491 (15A) and Related Scalable Products
- Programmable Switching Frequency up to 1MHz
- Programmable Soft-Start and STAT Delay Timings
- Programmable Reference Voltage with External Input Option
- Programmable Positive and Negative OCP Limit
- Advanced Architecture, Protection, and Reporting Guarantees Reliable Designs
- Analog Current or Temperature Reporting
- Differential Remote Sense with Open-Circuit Detection
- Fast Transient Response with Quick-PWM™ Architecture
- Percentage-Based Output Power Good and OVP
- Open-Drain Status Indicator (STAT) Pin
- Input Undervoltage and Overvoltage Lockout
- Adaptive Dead-Time Control
- Saves Board Space
- Integrated Boost Switch
- 27-Bump WLCSP (2.2mm x 3.8mm) Footprint
- Operation Using Ceramic Input and Output Capacitors

319-100813; Rev 0; 8/21

## MAX16425/MAX16425A Evaluation Kit

## Quick Start

## Required Equipment

- MAX16425EVKIT#/MAX16425AEVKIT# EV kit
- 4.5V to 16V power supply
- Load capable of sinking 25A
- Oscilloscope, probes, and voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Connect a 12V power supply to the banana jacks. Use red for positive and black for ground.
- 2) Make sure the shunt is installed on:
- a) J16 (1-2) to close the sense line.
- b) J4  (1-2)  to  power  up  the  on-board  LDO  which regulates 1.8V.
- c) J12 (1-2) to provide the 1.8V bias supply to the regulator from the on-board LDO.
- d) J15 (3-5) to pull up the STAT pin.
- e) J15 (4-6) to pull up the OE pin.
- 3) Connect a voltmeter to J8 (J11, J13, and J14 can be used as well)
- 4) Turn on the power supply.
- 5) Verify that the voltmeter reads 1V.

## Detailed Description of Hardware

The  MAX16425/MAX16425A provides  a  compact,  highefficiency power  delivery  for precision outputs that demand fast transient response. The 27-bump (2.2mm x 3.8mm) CSP package minimizes the printed circuit board area. The EV kit is preset to a 1V output and can provide up to 25A from a 4.5V to 16V input supply.

## Bias Supply

The  MAX16425/MAX16425A  EV  Kit  has  an  on-board LDO (U2) which can provide the required 1.8V V CC bias voltage to the regulator as well as the pull-up voltage for the Output Enable (OE) input. This allows testing the part using a single external power supply.

To enable the on-board LDO to install the shunt on jumper J4. To effectively use the LDO to supply the V CC bias voltage to the regulator also install the shunt on jumper J12.

## Evaluates: MAX16425/MAX16425A

To measure the efficiency of the regulator accurately, the LDO should not be active. To disable it, both the shunts on  J4  and  J12  need  to  be  removed. An  external  1.8V, 0.1A current limited power supply needs to be connected between J12-2 and the ground. The same signal should be connected to J10 (1-2) to pull up the OE pin.

## Regulator Enable

To  enable  the  regulator,  the  OE  pin  needs  to  be  pulled HIGH. If the on-board 1.8V LDO is active (the shunt on jumper J4 is in place) its output voltage can be used for the purpose. Installing a shunt on J15 (4-6) pulls the OE signal  HIGH  to  1.8V  through  a  20kΩ  resistor.  To  shut down the regulator a shunt needs to be installed on J10. This forces the OE pin LOW.

## Status Pin

The MAX16425/MAX16425A has an open collector status (STAT) output to report faults or output undervoltage events.  Install  a  shunt  on  J15  (3-  5)  to  pull  up  this  pin to V CC through a 20kΩ resistor. Since STAT pin is 3.3V tolerant, a shunt on J15 (2-3) can be installed to pull up this pin through a 20kΩ resistor to the 3.3V provided by the on-board regulator U3 (install a shunt on J5 (3-4) to enable the LDO).

## Scenario Selection

Several  parameters  of  the  MAX16425/MAX16425A  can be  programmed  to  allow  optimization  for  specific  applications.  By  selecting  the  appropriate  value  of  resistor R\_SEL (R1) and capacitor C\_SEL (C4), the optimum set of parameters (configuration) can be programmed. While R\_SEL selects  the  proper  scenario,  C\_SEL  determines the  nominal  f SW . Table  1a  and Table  1b  show  the  configuration tables for the MAX16425 and the MAX16425A, respectively.

A  combination  of  R\_SEL  and  C\_SEL  selects  the  fSW setting. There are six options available (from #1 to #6), indicating  six  different  nominal  switching  frequencies, from lowest to highest. Since the actual value of f SW  also depends on V OUT , See Figure 1 to select the proper f SW setting for a specific application. By default, these EV kits are configured to have a switching frequency of 780kHz (f SW  #6 at V OUT  = 1V).

The configuration tables for these two devices vary with respect to configurations for V REF , valley OCP inception current, operation modes, current/temperature, reporting, and R SENSE  gain.

## MAX16425/MAX16425A Evaluation Kit

## Table 1a. MAX16425 Configuration Table

| R_SEL (kΩ)   | V REF (V)   | SOFT- START TIME (t )   | VALLEY OCP INCEPTION (A)   | OPERATION MODES   | REPORTING (CURRENT / TEMP)   | R SENSE (GAIN) (mΩ)   | f SW SETTING C_SEL   | f SW SETTING C_SEL   | f SW SETTING C_SEL   | t STAT (µs)   |
|--------------|-------------|-------------------------|----------------------------|-------------------|------------------------------|-----------------------|----------------------|----------------------|----------------------|---------------|
| R_SEL (kΩ)   | V REF (V)   | ss (ms)                 |                            |                   |                              |                       | 0pF                  | 200pF                | 820pF                |               |
| 1.78         | 0.95        | 6                       | 16                         | CCM               | Current                      | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 2.67         | 0.95        | 6                       | 16                         | CCM/DCM           | Current                      | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 4.02         | 0.95        | 3                       | 16                         | CCM               | Current                      | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 6.04         | 0.95        | 3                       | 16                         | CCM/DCM           | Current                      | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 9.09         | Ext.        | 3                       | 16                         | CCM               | Current                      | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 13.3         | Ext.        | 1.5                     | 16                         | CCM               | Current                      | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 20           | 0.6         | 6                       | 24                         | CCM/DCM           | Current                      | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 30.9         | 0.6         | 6                       | 24                         | CCM               | Current                      | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 46.4         | 0.6         | 6                       | 16                         | CCM/DCM           | Temp                         | 2.8                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 71.5         | 0.6         | 6                       | 16                         | CCM/DCM           |                              | 1.4                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 107          | 0.6         | 6                       | 16                         | CCM/DCM           | Current                      | 1.4                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 162          | Ext.        | 1.5                     | 20                         | CCM               | Temp                         | 1.4                   | f sw #1              | f sw #2              | f sw #3              | 128           |

## Table 1b. MAX16425A Configuration Table

| R_SEL (kΩ)   | V REF (V)   | SOFT- START TIME (t )   | VALLEY OCP INCEPTION   | OPERATION MODES   | REPORTING (CURRENT/   | R SENSE (GAIN) (mΩ)   | f SW SETTING C_SEL   | f SW SETTING C_SEL   | f SW SETTING C_SEL   | t STAT (µs)   |
|--------------|-------------|-------------------------|------------------------|-------------------|-----------------------|-----------------------|----------------------|----------------------|----------------------|---------------|
| R_SEL (kΩ)   | V REF (V)   | ss (ms)                 | (A)                    |                   | TEMP)                 |                       | 0pF                  | 200pF                | 820pF                |               |
| 1.78         | 0.95        | 1.5                     | 16                     | CCM               | Current               | 2.8                   | f sw #4              |                      |                      | 2000          |
| 2.67         | 0.95        | 1.5                     | 16                     | CCM/DCM           | Current               | 2.8                   | f sw #4              |                      |                      | 2000          |
| 4.02         | 0.95        |                         |                        | CCM               | Current               | 2.8                   | f sw #4              |                      |                      | 2000          |
| 6.04         | 0.95        |                         |                        | CCM/DCM           | Current               | 2.8                   | f sw #4              |                      |                      | 2000          |
| 9.09         | Ext.        |                         |                        | CCM               | Current               | 5.4                   | f sw #4              |                      |                      | 2000          |
| 13.3         | Ext.        |                         |                        |                   | Current               | 5.4                   | f sw #4              | f sw #5              | f sw #6              | 2000          |
| 20           | 0.6         | 3                       | 24                     | CCM/DCM           | Current               | 2.8                   | f sw #4              |                      |                      | 2000          |
| 30.9         | 0.6         | 3                       | 24                     | CCM               | Current               | 2.8                   | f sw #4              |                      |                      | 2000          |
| 46.4         | 0.6         | 3                       | 16                     |                   | Current               | 5.4                   | f sw #4              |                      |                      | 2000          |
| 71.5         | 0.6         | 3                       | 16                     | CCM/DCM           | Temp                  | 5.4                   | f sw #4              |                      |                      | 2000          |
| 107          | Ext.        | 3                       | 20                     | CCM               | Temp                  | 1.4                   | f sw #4              |                      |                      | 2000          |
| 162          | Ext.        | 1.5                     | 20                     | CCM               | Temp                  | 1.4                   | f sw #1              | f sw #2              | f sw #3              | 128           |

Evaluates: MAX16425/MAX16425A

## MAX16425/MAX16425A Evaluation Kit

Figure 1. Nominal Switching Frequency vs. V OUT  and f SW  Setting

<!-- image -->

## Setting the Output Voltage

The output voltage of the MAX16425/MAX16425A is set by selecting a reference voltage and using an appropriate resistive voltage-divider, as shown in Equation 1.

## Equation 1:

<!-- formula-not-decoded -->

The reference voltage is selected using R\_SEL (see Table 1a)  and  can  be  either  internal  or  external  (Refer  to  the MAX16425 IC datasheet for more details). To improve the DC output-voltage accuracy, use the highest V REF value available  and  suitable  for  the  application.  For  instance, use V REF = 0.6V for 0.6V ≤ V OUT &lt; 0.95V and V REF  = 0.95V for 0.95V ≤ V OUT &lt; 5.5V.

To  optimize  the  common-mode  rejection  of  the  error amplifier,  choose  the  resistive  voltage-dividers  so  that their  parallel  resistance  is  as  close  as  possible  to  2kΩ (Equation 2).

## Equation 2:

<!-- formula-not-decoded -->

where:

RFB1  = Top divider resistor

RFB2  = Bottom divider resistor

RPAR = Desired parallel resistance of R FB1  and R FB2

VOUT  = Output voltage

VREF = Reference voltage

<!-- formula-not-decoded -->

## MAX16425/MAX16425A Evaluation Kit

## Operation with External VREF

When using an external reference, adopt the configuration  as  shown in Figure 2. The MAX16425/MAX16425A employ  a  specialized  soft-start  sequence.  Once  OE  is asserted,  the  regulator  briefly  discharges  the  SENSEnode and releases it as regulation begins. The resulting soft-start ramp timing is determined by the external lowpass filter time constant. The external filter time constant needs to be lower than t SS /3 to avoid premature assertion of STAT pin while the output voltage is still ramping.

The external reference voltage should be limited between 0.8V  and  1.1V  and  can  be  applied  before  enabling  the regulator  or  ramped  up  right  after  enable  is  asserted. In both cases, the low-pass filtered reference voltage at SENSE- pin must reach its final value within t SS .

Typical values for the filter components are:

- RF = 2.2kΩ
- CF  = 0.22µF

## Evaluates: MAX16425/MAX16425A

When  changing  the  external  reference  voltage  during normal  operation  (after  the  part  has  powered  up,  and reached  regulation  level),  the  regulator  must  be  able to  follow  the  reference-voltage  change  fast  enough  to avoid  OVP  and  PWRGD  faults.  Please  make  sure  that reference-voltage  change  timing  from  the  initial  to  the final value does not exceed 1/(2 x BW), where BW is the bandwidth of the regulator in Hertz (Hz).

## Status Monitoring

The  regulator  status  (STAT)  signal  provides  an  opendrain  output  (4V  ABS  MAX)  that  indicates  whether  the MAX16425/MAX16425A is functioning properly. J9 can be used to monitor the STAT signal.

Whenever the part is actively regulating, and the output voltage  is  within  the  Power  Good  (PWRGD)  window, the  STAT  pin  is  HIGH.  In  all  other  conditions,  including enabled but in a fault state, the STAT pin is pulled LOW. Refer  to  the  MAX16425/MAX16425A  IC  data  sheet  for more details.

Figure 2. Electrical Connections to Use the External Voltage Reference Feature

<!-- image -->

## MAX16425/MAX16425A Evaluation Kit

## Input Voltage Monitoring

V DD1 and GND1 sense points as well as J3 can be used to monitor the input supply.

## Output Voltage Monitoring

J11 and J13 monitor the output voltage. These test points should  not  be  used  for  loading.  Use  scopejack  J14  to monitor the output voltage ripple on an oscilloscope.

## Efficiency Measurement

The following steps describe how to measure the regulator efficiency:

- 1) Connect  a  12V  power  supply  to  the  banana  jacks. Use red for positive and black for ground. To avoid the input voltage to drop at high load due to power losses on connection cables connect the sense lines of the power supply to V DD1 and GND1 headers.
- 2) Connect an external 1.8V, 0.1A current limited power supply between J12-2 and ground.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16425EVKIT#  | EV Kit |
| MAX16425AEVKIT# | EV Kit |

# Denotes RoHS compliance

## Evaluates: MAX16425/MAX16425A

- 3) Connect the same power supply to J10-1 to enable the regulator.
- 4) Connect a load to the edge strip for better results. J8 can also be used for low currents.
- 5) Make sure the shunt is installed on J16 (1-2) to close the sense line.
- 6) Remove all the other jumpers.
- 7) Connect a voltmeter to J11 or J13.
- 8) Turn on the power supply.
- 9) Measure V IN , I IN , V OUT , I OUT , V BIAS  and I BIAS .
- 10)  Calculate the efficiency using Equation 3.

## Equation 3:

<!-- formula-not-decoded -->

## MAX16425/MAX16425A Evaluation Kit

## MAX16425/MAX16425A EV Kit Bill of Materials

|   ITEM | REF_ DES               | DNI/ DNP   |   QTY | MFG PART #                                                                            | MANUFACTURER                                      | VALUE          | DESCRIPTION                                                             |
|--------|------------------------|------------|-------|---------------------------------------------------------------------------------------|---------------------------------------------------|----------------|-------------------------------------------------------------------------|
|      1 | C1, C2                 | -          |     2 | TPSD107K020R0085                                                                      | AVX                                               | 100UF          | CAP; SMT (7343); 100UF; 10%; 20V; TANTALUM                              |
|      2 | C3                     | -          |     1 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB          | MURATA;TDK; TAIYO YUDEN; TDK                      | 0.1UF          | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                          |
|      3 | C4                     | -          |     1 | C0402C821K5RAC; GRM155R71H821KA01                                                     | KEMET;MURATA                                      | 820PF          | CAP; SMT (0402); 820PF; 10%; 50V; X7R; CERAMIC                          |
|      4 | C5, C6, C10, C11       | -          |     4 | GRM31CR71E106KA12; CL31B106KAHNNN; C3216X7R1E106K160AB                                | MURATA; SAMSUNG; TDK                              | 10UF           | CAP; SMT (1206); 10UF; 10%; 25V; X7R; CERAMIC                           |
|      5 | C7, C21, C54           | -          |     3 | TMK107B7105KA; 06033C105KAT2A; C1608X7R1E105K080AE                                    | MURATA; TAIYO YUDEN; AVX;TAIYO YUDEN              | 1UF            | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                            |
|      6 | C8                     | -          |     1 | GRM188R71E474KA12                                                                     | MURATA                                            | 0.47UF         | CAP; SMT (0603); 0.47UF; 10%; 25V; X7R; CERAMIC                         |
|      7 | C9, C55                | -          |     2 | GRM155R60J475ME87; GRM153R60J475ME15; GRM155R60J475ME47                               | MURATA; MURATA; MURATA                            | 4.7UF          | CAP; SMT (0402); 4.7UF; 20%; 6.3V; X5R; CERAMIC                         |
|      8 | C12-C20, C22, C26, C33 | -          |    12 | CL21A476MQYNNN; C2012X5R0J476M125AC; JMK212BJ476MG                                    | SAMSUNG ELECTRONICS; TDK; TAIYO YUDEN             | 47UF           | CAP; SMT (0805); 47UF; 20%; 6.3V; X5R; CERAMIC                          |
|      9 | C24                    | -          |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET;MURATA; TDK;SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01UF         | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                         |
|     10 | C36                    | -          |     1 | C0402C105K8PAC; CC0402KRX5R6BB105                                                     | KEMET; YAGEO                                      | 1UF            | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                            |
|     11 | C37                    | -          |     1 | TMK105BJ682KVH                                                                        | TAIYO YUDEN                                       | 6800PF         | CAP; SMT (0402); 6800PF; 10%; 25V; X5R; CERAMIC                         |
|     12 | C38                    | -          |     1 | C0402C153K4RAC; GRM155R71C153KA01                                                     | KEMET; MURATA                                     | 0.015UF        | CAP; SMT (0402); 0.015UF; 10%; 16V; X7R; CERAMIC                        |
|     13 | C39                    | -          |     1 | CGA2B2X7R1H222K050BA; GCM155R71H222KA37                                               | TDK; MURATA                                       | 2200PF         | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                         |
|     14 | D1                     | -          |     1 | MBRS540T3G                                                                            | ON SEMICONDUCTOR                                  | MBRS540T3      | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMC; PIV=40V; IF=5A |
|     15 | GND1, GND2, J9, VDD1,  | -          |     5 | TSW-101-07-L-S                                                                        | SAMTEC                                            | TSW-101-07-L-S | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; STRAIGHT; 1PIN               |

Evaluates: MAX16425/MAX16425A

## MAX16425/MAX16425A Evaluation Kit

Evaluates: MAX16425/MAX16425A

## MAX16425/MAX16425A EV Kit Bill of Materials (continued)

|   ITEM | REF_ DES              | DNI/ DNP   |   QTY | MFG PART #     | MANUFACTURER             | VALUE          | DESCRIPTION                                                                    |
|--------|-----------------------|------------|-------|----------------|--------------------------|----------------|--------------------------------------------------------------------------------|
|     16 | J1, J4, J10-J13, J16  | -          |     7 | TSW-101-07-L-D | SAMTEC                   | TSW-101-07-L-D | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; DOUBLE ROW; STRAIGHT; 2PINS         |
|     17 | J3, J14               | -          |     2 | 129-0701-202   | JOHNSON COMPONENTS       | 129-0701-202   | CONNECTOR; FEMALE; THROUGH HOLE; SHIELDED TEST VERTICAL JACK ; STRAIGHT; 3PINS |
|     18 | J5, J15               | -          |     2 | TSW-103-07-L-D | SAMTEC                   | TSW-103-07-L-D | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS |
|     19 | J7                    | -          |     1 | TSW-104-07-L-S | SAMTEC                   | TSW-104-07-L-S | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS         |
|     20 | J8                    | -          |     1 | ED120/2DS      | ON-SHORE TECHNOLOGY INC. | ED120/2DS      | CONNECTOR; FEMALE; THROUGH HOLE; BLUE TERMINAL BLOCK; STRAIGHT; 2PINS          |
|     21 | J17                   | -          |     1 | 3750-2         | POMONA ELECTRONICS       | 3750-2         | CONNECTOR; FEMALE; SMT; COLOR RED; STANDARD BINDING POST; STRAIGHT; 1PIN       |
|     22 | J18                   | -          |     1 | 3750-0         | POMONA ELECTRONICS       | 3750-0         | CONNECTOR; FEMALE; SMT; COLOR BLACK; STANDARD BINDING POST; STRAIGHT; 1PIN     |
|     23 | L1                    | -          |     1 | FP1007R3-R17-R | COOPER BUSSMANN          | 170NH          | INDUCTOR; SMT; FERRITE CORE; 170NH; TOL=+/-10%; 61A                            |
|     24 | R1                    | -          |     1 | CRCW040230K9FK | VISHAY DALE              | 30.9K          | RES; SMT (0402); 30.9K; 1%; +/-100PPM/DEGC; 0.0630W                            |
|     25 | R2, R3                | -          |     2 | ERJ-2RKF1002   | PANASONIC                | 10K            | RES; SMT (0402); 10K; 1%; +/- 100PPM/DEGC; 0.1000W                             |
|     26 | R4, R7, R11, R15, R16 | -          |     5 | ERJ-2GE0R00    | PANASONIC                | 0              | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                    |
|     27 | R5, R8                | -          |     2 | ERJ-2GEJ203    | PANASONIC                | 20K            | RES; SMT (0402); 20K; 5%; +/- 200PPM/DEGC; 0.1000W                             |
|     28 | R6, R13               | -          |     2 | CRCW04022K10FK | VISHAY DALE              | 2.1K           | RES; SMT (0402); 2.1K; 1%; +/- 100PPM/DEGC; 0.0630W                            |
|     29 | R9                    | -          |     1 | ERJ-2RKF2801   | PANASONIC                | 2.8K           | RES; SMT (0402); 2.8K; 1%; +/-100PPM/DEGC; 0.1000W                             |

## MAX16425/MAX16425A Evaluation Kit

Evaluates: MAX16425/MAX16425A

## MAX16425/MAX16425A EV Kit Bill of Materials (continued)

| ITEM   | REF_ DES                         | DNI/ DNP   |   QTY | MFG PART #                                            | MANUFACTURER                            | VALUE                       | DESCRIPTION                                                                                             |
|--------|----------------------------------|------------|-------|-------------------------------------------------------|-----------------------------------------|-----------------------------|---------------------------------------------------------------------------------------------------------|
| 30     | R10                              | -          |     1 | ERJ-2GEJ102                                           | PANASONIC                               | 1K                          | RES; SMT (0402); 1K; 5%; +/-200PPM/DEGC; 0.1000W                                                        |
| 31     | R12                              | -          |     1 | CRCW040220K0FK                                        | VISHAY DALE                             | 20K                         | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W                                                       |
| 32     | R14                              | -          |     1 | ERJ-2RKF2000                                          | PANASONIC                               | 200                         | RES; SMT (0402); 200; 1%; +/-100PPM/DEGC; 0.1000W                                                       |
| 33     | SU1-SU5                          | -          |     5 | S1100-B;SX1100-B; STC02SYAN                           | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B                    | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED |
| 34     | U1                               | -          |     1 | MAX16425GCJ+/ MAX16425AGCJ+                           | ANALOG DEVICES                          | MAX16425GCJ+/ MAX16425AGCJ+ | IC; VREG; INTEGRATED; STEP-DOWN SWITCHING REGULATOR; WLCSP27                                            |
| 35     | U2                               | -          |     1 | MIC5235-1.8YM5                                        | MICROCHIP                               | MIC5235-1.8YM5              | IC; VREG; ULTRA-LOW QUIESCENT CURRENT; 150MA MICROCAP LDO REGULATOR; SOT23-5                            |
| 36     | U3                               | -          |     1 | MIC5235-3.3YM5                                        | MICROCHIP                               | MIC5235-3.3YM5              | IC; VREG; ULTRA-LOW QUIESCENT CURRENT; 150MA MICROCAP LDO REGULATOR; SOT23-5                            |
| 37     | PCB                              | -          |     1 | MAX16425/MAX16425A                                    | ANALOG DEVICES                          | PCB                         | PCB:MAX16425/ PCB:MAX16425A                                                                             |
| 38     | C27, C30, C34, C40-C50, C52, C53 | DNP        |     0 | CL21A476MQYNNN; C2012X5R0J476M125AC; JMK212BJ476MG    | SAMSUNG ELECTRONICS; TDK; TAIYO YUDEN   | 47UF                        | CAP; SMT (0805); 47UF; 20%; 6.3V; X5R; CERAMIC                                                          |
| 39     | C28, C29                         | DNP        |     0 | T494D227M010AT                                        | KEMET                                   | 220UF                       | CAP; SMT (7343); 220UF; 20%; 10V; TANTALUM ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                  |
| 40     | C51                              | DNP        |     0 | C0402C105K8PAC; CC0402KRX5R6BB105                     | KEMET; YAGEO                            | 1UF                         | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                            |
| 41     | C57                              | DNP        |     0 | C0402X5R100-224KNP; GRM155R61A224KE19; 0402ZD224KAT2A | MURATA; VENKEL;AVX                      | 0.22UF                      | CAP; SMT (0402); 0.22UF; 10%; 10V; X5R; CERAMIC                                                         |
| 42     | R17                              | DNP        |     0 | ERJ-2RKF1001                                          | PANASONIC                               | 1K                          | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                        |
| TOTAL  | TOTAL                            | TOTAL      |    78 |                                                       |                                         |                             |                                                                                                         |

## MAX16425/MAX16425A EV Kit Schematic Diagram

<!-- image -->

## MAX16425/MAX16425A Evaluation Kit

## MAX16425/MAX16425A PCB Layout Diagrams

<!-- image -->

MAX16425/MAX16425A Component Placement Guide-Top Silkscreen

MAX16425/MAX16425A PCB Layout-Top View

<!-- image -->

MAX16425/MAX16425A PCB Layout-Layer 2

<!-- image -->

## MAX16425/MAX16425A Evaluation Kit

## MAX16425/MAX16425A PCB Layout Diagrams (continued)

<!-- image -->

MAX16425/MAX16425A PCB Layout-Layer 3

MAX16425/MAX16425A PCB Layout-Bottom View

<!-- image -->

MAX16425/MAX16425A PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX16425/MAX16425A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 8/21            | Release for Market Intro | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX16425/MAX16425A