<!-- lastmod 2022-08-04 -->
## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## General Description

The  MAXM17633/MAXM17634/MAXM17635  evaluation kits  (EV  kits)  provide  proven  designs  to  evaluate  the performance  of  MAXM17633/MAXM17634/MAXM17635 modules.  Each  of  these  modules  operates  over  a  wide input range from 4.5V to 36V and delivers up to 2A output current. The modules are configured to demonstrate opti -mum performance and component sizes in these EV kits.

The MAXM17633 module delivers up to 2A, with a fixed 3.3V  output.  The  module  is  configured  to  operate  at 800kHz  switching  frequency,  over  a  4.5V  to  36V  input range.

The MAXM17634 module delivers up to 2A, with a fixed 5V output. The module is configured to operate at 1MHz switching frequency, over a 7V to 36V input range.

The MAXM17635 adjustable module is configured for a 12V output, delivering up to 2A. The module is configured to operate at a 1.8MHz switching frequency, over an 18V to 36V input range.

The  EV  kits  feature  an  adjustable  input  undervoltage lockout,  adjustable  soft-start,  open-drain RESET signal,  external  frequency  synchronization,  and  selectable mode of operation (PWM/PFM/DCM). The MAXM17633/ MAXM17634/MAXM17635  module  family  data  sheet provides a complete description of the part that should be read in conjunction with this data sheet prior to operating the EV kits.

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

## Features

- ● Wide 4.5V to 36V Input Range
- ● MAXM17633 Offers High 85.7% Efficiency (V IN  = 24V, V OUT  = 3.3V, I OUT  = 1.5A)
- ● MAXM17634 Offers High 90.6% Efficiency (V IN  = 24V, V OUT  = 5V, I OUT  = 1.4A)
- ● MAXM17635 Offers High 92.5% Efficiency (V IN  = 24V, V OUT  = 12V, I OUT  = 1.8A)
- ● Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- ● Selectable PWM, PFM, and DCM Modes of Operation
- ● Programmed 1ms Soft-Start Time
- ● Provision to Synchronize the Modules to the External-Clock Source
- ● RESET Outputs, with Pullup Resistor to the Respective V CC
- ● Low-Profile, Surface-Mount Components
- ● Proven PCB Layout
- ● Fully Assembled and Tested
- ● Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## Quick Start

## Required Equipment

- ● One 0V to 36V DC, 2A power supply
- ● Digital multimeters (DMM)
- ● Load resistors capable of sinking up to 2A at 3.3V, 5V, and 12V

## Equipment Setup and Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify and test individual module operation:

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Disable  the  power  supply  and  set  the  input  power  supply  at  a  voltage  between  4.5V  and  36V (for  MAXM17633),  or  between  7V  and  36V  (for MAXM17634), or between 18V and 36V (for MAXM17635).
- 2) Connect the positive terminal and negative terminal of the power supply to the VIN pad and its adjacent PGND pad of the module under evaluation.
- 3) Connect a 2A (max) resistive load across the VOUT pad and its nearest PGND pad of the corresponding module.
- 4) Verify  that  the  shunts  are  not  installed  on  jumpers (JU101, JU201, JU301). See Table 1 for details.
- 5) Select  the  shunt  position  on  respective  jumpers (JU102,  JU202,  JU302)  according  to  the  required mode of operation. See Table 2 for details.
- 6) Verify that the shunt is at the default position on jumper JU203. See Table 3 for details.
- 7) Connect  digital  multimeter  (in  voltage  measurement mode) across the VOUT and its respective PGND pad.
- 8) Turn on the input power supply.
- 9) Verify that the digital multimeter displays the expected terminal voltage with respect to PGND.

## Detailed Description

The MAXM17633/MAXM17634/MAXM17635 EV kits are  designed  to  demonstrate  the  salient  features  of  the MAXM17633/MAXM17634/MAXM17635  power  modules. The EV kit consists of typical application circuits of three different  modules.  Each  of  these  circuits  are  electrically isolated from each other and hosted on the same PCB. Each of  the  modules  can  be  evaluated  by  powering  them  from their  respective  input  pins.  Individual  module  settings  can

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

be  adjusted  to  evaluate  their  performance  under  different operating conditions.

## Setting Switching Frequency

Selection of switching frequency must consider input voltage range, desired output voltage, t ON(MIN)  and t OFF(MIN) of  the  modules.  Resistors  (R103,  R203,  R303)  on  the EV  kits  program  the  desired  switching  frequencies  of the  modules.  To  optimize  performance  and  component size  in  these  EV  kits,  800kHz  switching  frequency  is chosen for MAXM17633, 1MHz is chosen for MAXM17634, and 1.8MHz is chosen for MAXM17635. Use Table 1 and the Switching  Frequency section  of  the  MAXM17633/ MAXM17634/MAXM17635 data sheet to choose different values of resistors for programming the required switching frequency.

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The MAXM17633/MAXM17634/MAXM17635 EV kits offer an adjustable input undervoltage lockout level feature for the modules. In the EV kits, for normal operation, leave the jumpers (JU101, JU201, JU301) open. When jumper JU101 is left open, the MAXM17633 is enabled when the input voltage rises above 4.05V. When jumper JU201 is left  open,  the  MAXM17634  is  enabled  when  the  input voltage  rises  above  6.3V.  When  jumper  JU301  is  left open, the MAXM17635 is enabled when the input voltage rises above 16.2V. To disable the modules, install shunts across pins 2-3 on jumpers (JU101, JU201, JU301). See Table 1 for jumpers (JU101, JU201, JU301) settings.

A  potential  divider  formed  by  the  resistors  R U   (R101, R201, R301) and R B  (R102, R202, R302) sets the input voltage (V INU ) at which the module is enabled.

Choose R U (R101, R201, R301) to be 3.32MΩ and then calculate R102, R202, and R302 as follows:

<!-- formula-not-decoded -->

For  the  MAXM17633  to  turn  on  at  the  4.05V  input, the  resistor  (R102)  is  calculated  to  be  1.422MΩ  and  a 1.43MΩ resistor is used in the EV kit.

For  the  MAXM17634  to  turn  on  at  the  6.3V  input,  the resistor (R202) is calculated to be 793.3kΩ and a 787kΩ resistor is used in the EV kit.

For  the  MAXM17635 to  turn  on  at  the  16.2V  input,  the resistor (R302) is calculated to be 269.2kΩ and a 267kΩ resistor is used in the EV kit.

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## MODE Selection and External Clock Synchronization

The  MAXM17633/MAXM17634/MAXM17635  modules support  PWM,  PFM,  and  DCM  modes  of  operation.  In the  EV  kits,  leave  the  jumpers  (JU102,  JU202,  JU302) open  for  operating  the  modules  in  PFM  mode  at  light load. Install  shunts across the 2-3 position to configure the modules in PWM mode. Install shunts across the 1-2 position to configure the modules in DCM mode at light loads.  See  Table  2  for  jumper  (JU102,  JU202,  JU302) settings.

The internal oscillators of the modules can be synchronized to an external clock signal on the MODE/SYNC pin, when powered up in PWM or DCM mode. The external synchro -nization clock frequency must be between 1.1 x f SW and 1.4 x f SW, where f SW  is the frequency programmed by the resistors (R103, R203, R303) connected to the RT pin. The minimum on-time pulse width of the external clock should be more than 50ns and minimum off-time pulse width of the external clock should be more than 160ns.

## Adjusting Output Voltage

The MAXM17635 supports a 0.9V to 12V adjustable output voltage. The MAXM17635 EV kit output voltage is preset to 12V. Output voltage can be programmed using the feedback resistive  divider  (R305  and  R306)  from  V OUT and GND. For programming the output to a different voltage, use the values shown in Table 1 of the MAXM17633/ MAXM17634/MAXM17635 data sheet or calculate based on the guidelines given in the data sheet.

For a 12V output, the R305 resistor is chosen as 453kΩ and R306 is chosen as 36.5kΩ

## Output Capacitor Selection

X7R  ceramic  output  capacitors  are  preferred  due  to their  stability  over  temperature in industrial applications. The required output capacitors (C114, C214, C314) are selected from Table 1 of  the  MAXM17633/MAXM17634/ MAXM17635  data  sheet  as  47µF/10V,  22µF/25V  and 10µF/50V, respectively.

## Input Capacitor Selection

The  input  capacitors  (C102,  C202,  C302)  serve  to reduce current peaks drawn from the input power supply and reduce switching frequency ripple at the input. The input  capacitance  must  be  greater  than  or  equal  to  the value  shown  in Table  1 of  MAXM17633/MAXM17634/ MAXM17635 data sheet. Input capacitors (C102, C202, C302) are chosen to be 4.7µF/50V.

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

## Soft-Start Capacitor Selection

The  EV  kits  offer  an  adjustable  soft-start  function  to  limit inrush current during startup. The soft-start time is adjusted by changing the values of soft-start capacitors (C106, C206, C306). In these EV kits, the default soft-start time is set to 1ms, which is achieved by using a 5600pF soft-start capacitor (C106, C206, C306). For programming a different soft-start times,  refer  to  the  MAXM17633/MAXM17634/MAXM17635 data sheet to calculate the soft-start capacitor value.

## Linear Regulator (VCC and EXTVCC)

Powering  V CC   from  EXTVCC  increases  the  efficiency of  the  module  at  higher  input  voltages.  If  the  applied EXTVCC voltage is greater than 4.7V (typ), internal V CC is powered from EXTVCC. If EXTVCC is lower than 4.7V (typ), internal V CC  is powered from VIN. Connect EXTVCC to  OUT  when  output  is  programmed  to  5V  only.  In  the MAXM17634 EV kit, install a shunt across 1-2 on jumper JU203 to  connect  EXTVCC  to  OUT.  When  EXTVCC  is not used, install a shunt across 2-3 on jumper JU203 to connect  EXTVCC  to  SGND.  See  Table  3  for  jumper JU203 settings.

## Hot Plug-In and Long Input cables

The MAXM17633/MAXM17634/MAXM17635 EV kit PCBs provide optional electrolytic capacitors (C101, C201, C301, 10µF/50V) to dampen input voltage peaks and oscillations that  can  arise  during  hot-plug-in  and/or  due  to  long  input cables. These capacitors limit the peak voltage at the input of the power modules when the EV kit is powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables, between input power source and the EV kit circuit can cause input-voltage oscillations due to the inductance of the cables. The equivalent series resistance  (ESR)  of  the  electrolytic  capacitor  helps  damp out the oscillations caused by long input cables.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter. The  EMI  filter attenuates high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

Use  of  EMI  filter  components  as  shown  in  the  EV  kits schematic  results  in  lower  conducted  emissions,  below CISPR22 Class B limits. The MAXM17633/MAXM17634/ MAXM17635  EV  kit  PCB  layouts  are  also  designed  to limit  radiated  emissions  from  switching  nodes  of  the power  converter,  resulting  in  radiated  emissions  below CISPR22 Class B limits. Further, capacitors placed near the input of the board help in attenuating high-frequency noise.

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## Table 1. EN/UVLO Jumper Description (JU101, JU201 and JU301)

| SHUNT POSITION   | EN/UVLO PIN                                                                                                     | OUTPUT                                               |
|------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Not installed*   | Connected to the center nodes of the respective resistor-dividers (R101 and R102, R201 and R202, R301 and R302) | Programmed to startup at desired input-voltage level |
| 1-2              | Connected to VIN                                                                                                | Enabled when input-voltage is above 1.215V           |
| 2-3              | Connected to GND                                                                                                | Disabled                                             |

## Table 2. MODE/SYNC Jumper Description (JU102, JU202, JU302)

| SHUNT POSITION   | MODE/ SYNC PIN    | MODE                  |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3              | Connected to GND  | PWM mode of operation |

## Table 3. EXTVCC Jumper Description (JU203)

| SHUNT POSITION   | MODE/SYNC PIN     | MODE                                                 |
|------------------|-------------------|------------------------------------------------------|
| 1-2*             | Connected to VOUT | Internal LDO is driven from the output of the module |
| 2-3              | Connected to GND  | Internal LDO is driven from the input of the module  |

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## EV Kits Performance Report

(V IN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## EV Kits Performance Report (continued)

(V IN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## EV Kits Performance Report (continued)

(V IN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## EV Kits Performance Report (continued)

(V IN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## EV Kits Performance Report (continued)

(V IN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## EV Kits Performance Report (continued)

(V IN  = 24V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

<!-- image -->

<!-- image -->

MAXM17633 CONDUCTEDEMISSIONS PLOT VOUT = 3.3V, f SW = 800kHz, FULL LOAD, PWM MODE

<!-- image -->

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## EV Kits Performance Report (continued)

(V IN  = 24V, T A  = +25°C, unless otherwise noted.)

MAXM17634 CONDUCTEDEMISSIONS PLOT VOUT = 5V, f SW = 1MHz, FULL LOAD, PWM MODE

<!-- image -->

MAXM17635 CONDUCTEDEMISSIONS PLOT VOUT = 12V, fSW = 1.8MHz, FULL LOAD, PWM MODE

<!-- image -->

TUV Rheinland

<!-- image -->

RE 30MHz-1GHz\_0-360Deg\_90Deg step\_1-4mtr Height\_Quick Scan\_Config 4.TIL

07:22:55 PM, Wednesday, April 17, 2019

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Vishay          | www.vishay.com    |
| Panasonic Corp. | www.panasonic.com |
| Bourns Inc.     | www.bourns.com    |
| TDK Corp.       | www.tdk.com       |

Note: Indicate that you are using the MAXM17633/ MAXM17634/MAXM17635 modules when contacting these component suppliers.

Final\_ScanV

TUV Rheinland

<!-- image -->

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application

TUV Rheinland

<!-- image -->

RE 30MHz-1GHz\_0-360Deg\_90Deg step\_1-4mtr Height\_Quick Scan\_Config 5.TIL

07:48:07 PM, Wednesday, April 17, 2019

Final\_ScanV

RE 30MHz-1GHz\_0-360deg\_90 dge step\_1-4 mtr height\_Quick Scan\_MAXM17635\_Test4.TIL

02:15:48 PM, Tuesday, March 19, 2019

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17633EVKIT# | EV Kit |
| MAXM17634EVKIT# | EV Kit |
| MAXM17635EVKIT# | EV Kit |

# Denotes RoHS compliance.

Final\_ScanV

## MAXM17633/MAXM17634/MAXM17635 EV Kit Bill of Materials

uSLIC is a trademark of Maxim Integrated Products, Inc.

|   ITEM QTY | DESIGNATOR                                                                | DESCRIPTION                                              | MANUFACTURER PART NO.      |
|------------|---------------------------------------------------------------------------|----------------------------------------------------------|----------------------------|
|          1 | 3 C101, C201, C301                                                        | 10µF±20%, 50V, Aluminimum-Electrolytic Capacitor         | Panasonic EEE-TG1H100P     |
|          2 | 3 C102, C202, C302                                                        | 4.7µF±10%, 50V, X7R ceramic capacitor (1206)             | Murata GRM31CR71H475KA12   |
|          3 | 6 C103, C108, C203, C208, C303, C308                                      | 0.1µF±10%, 100V, X7R ceramic capacitor (0603)            | Murata GRM188R72A104KA35   |
|          4 | 12 C104, C107, C112, C116, C204, C207, C212, C216, C304, C307, C312, C316 | 220pF±10%, 100V, X7R ceramic capacitor (0402)            | Murata GRM155R72A221KA01   |
|          5 | 3 C105, C205, C305                                                        | 2.2µF±10%, 6.3V, X7R ceramic capacitor (0603)            | Murata GRM188R70J225KE15   |
|          6 | 3 C106, C206, C306                                                        | 5600pF±10%, 25V, X7R ceramic capacitor (0402)            | Murata GRM155R71E562KA01   |
|          7 | 3 C111, C211, C311                                                        | 0.1µF±10%, 50V, X7R ceramic capacitor (0402)             | Murata GRM155R71H104KE14   |
|          8 | 6 C113, C115, C213, C215, C313, C315                                      | 0.1µF±10%, 25V, X7R ceramic capacitor (0402)             | Murata GRM155R71E104KE14   |
|          9 | 1 C114                                                                    | 47µF±10%, 10V, X7R ceramic capacitor (1210)              | Murata GRM32ER71A476KE15   |
|         10 | 1 C214                                                                    | 22µF±10%, 25V, X7R ceramic capacitor (1210)              | Murata GRM32ER71E226KE15   |
|         11 | 1 C314                                                                    | 10µF±10%, 50V, X7R ceramic capacitor (1210)              | Murata GRM32ER71H106KA12   |
|         12 | 3 R101, R201, R301                                                        | 3.32MΩ ±1% resistor (0402)                               | Vishay Dale CRCW04023M32FK |
|         13 | 1 R102                                                                    | 1.43MΩ ±1% resistor (0402)                               | Vishay Dale CRCW04021M43FK |
|         14 | 1 R103                                                                    | 24.3kΩ ±1% resistor (0402)                               | Vishay Dale CRCW040224K3FK |
|         15 | 4 R104, R204, R303, R304                                                  | 10kΩ ±1% resistor (0402)                                 | Vishay Dale CRCW040210K0FK |
|         16 | 1 R202                                                                    | 787kΩ ±1% resistor (0402)                                | Vishay Dale CRCW0402787KFK |
|         17 | 1 R203                                                                    | 19.1kΩ ±1% resistor (0402)                               | Vishay Dale CRCW040219K1FK |
|         18 | 1 R302                                                                    | 267kΩ ±1% resistor (0402)                                | Vishay Dale CRCW0402267KFK |
|         19 | 1 R305                                                                    | 453kΩ ±1% resistor (0402)                                | Vishay Dale CRCW0402453KFK |
|         20 | 1 R306                                                                    | 36.5kΩ ±1% resistor (0402)                               | Vishay Dale CRCW040236K5FK |
|         21 | 1 U101                                                                    | MAXM17633, 24-pin uSLIC™ Step down Power Module          | Maxim MAXM17633AMG+        |
|         22 | 1 U201                                                                    | MAXM17634, 24-pin uSLIC™ Step down Power Module          | Maxim MAXM17634AMG+        |
|         23 | 1 U301                                                                    | MAXM17635, 24-pin uSLIC™ Step down Power Module          | Maxim MAXM17635AMG+        |
|         24 | 2 C109, C209                                                              | OPTIONAL: 0.22µF±10%, 100V, X7R ceramic capacitor (1206) | TDK C3216X7R2A224K115AA    |
|         25 | 1 C309                                                                    | OPTIONAL: 0.1µF±10%, 100V, X7R ceramic capacitor (1206)  | Murata GRM319R72A104KA01   |
|         26 | 2 L101, L201                                                              | OPTIONAL: 22µH Ferrite Wirewound Inductor                | Bourns SRN4018-220M        |
|         27 | 1 L301                                                                    | OPTIONAL: 10µH Ferrite Wirewound Inductor                | Bourns SRN4018-100M        |
|         28 | 3 C110, C210, C310                                                        | Package Outline 1206 capacitor                           | OPEN                       |
|         29 | 2 R105, R205                                                              | Package Outline 0402 resistor                            | OPEN                       |

## MAXM17633/MAXM17634/MAXM17635 EV Kit Schematics

## MAXM17633 EV Kits Schematic

<!-- image -->

## MAXM17633/MAXM17634/MAXM17635 EV Kit Schematics (continued)

## MAXM17634 EV Kit Schematic

<!-- image -->

## MAXM17633/MAXM17634/MAXM17635 EV Kit Schematics (continued)

## MAXM17635 EV Kit Schematic

<!-- image -->

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## MAXM17633/MAXM17634/MAXM17635 EV Kit PCB Layout Diagrams

<!-- image -->

MAXM17633/MAXM17634/MAXM17635 EV Kits-Top Silkscreen

MAXM17633/MAXM17634/MAXM17635 EV Kits-Top Layer

<!-- image -->

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## MAXM17633/MAXM17634/MAXM17635 EV Kit PCB Layout Diagrams (continued)

MAXM17633/MAXM17634/MAXM17635 EV Kits-Layer 2

<!-- image -->

MAXM17633/MAXM17634/MAXM17635 EV Kits-Layer 3

<!-- image -->

## MAXM17633/MAXM17634/MAXM17635 EV Kit PCB Layout Diagrams (continued)

MAXM17633/MAXM17634/MAXM17635 EV Kits-Bottom Layer

<!-- image -->

MAXM17633/MAXM17634/MAXM17635 EV Kits-Bottom Silkscreen

<!-- image -->

## MAXM17633/MAXM17634/ MAXM17635 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAXM17633/MAXM17634/ MAXM17635 Modules in Application