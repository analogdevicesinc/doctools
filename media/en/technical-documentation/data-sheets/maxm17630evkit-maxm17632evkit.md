<!-- lastmod 2022-08-04 -->
## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## General Description

The  MAXM17630/MAXM17631/MAXM17632  evaluation kits  (EV  kits)  provide  a  proven  design  to  evaluate  the performance  of  MAXM17630/MAXM17631/MAXM17632 modules.  Each  of  these  modules  operates  over  a  wide input range from 4.5V to 36V and delivers up to 1A output current. The modules are configured to demonstrate optimum performance and component sizes in this EV kit.

The MAXM17630 module delivers up to 1A with a fixed 3.3V  output.  The  module  is  configured  to  operate  at  a 900kHz  switching  frequency,  over  a  4.5V  to  36V  input range.

The MAXM17631 module delivers up to 1A with a fixed 5V output. The module is configured to operate at a 1250kHz switching frequency, over a 7V to 36V input range.

The  MAXM17632  adjustable  module  delivers  up  to  1A and is configured for 12V output. The module is config -ured to operate at a 2150kHz switching frequency over a 20V to 36V input range.

The  EV  kit  feature  provisions  for  selecting  modes  of operation (PWM/PFM/DCM), synchronization to an exter -nal clock source, enable/disable, and UVLO settings. The MAXM17630/MAXM17631/MAXM17632  module  family data sheet provides a complete description of the parts and  should  be  read  in  conjunction  with  this  data  sheet prior to operating the EV kits.

## Evaluates: MAXM17630/MAXM17631/ MAXM17632 Modules in Application

## Features

- Wide 4.5V to 36V Input Range
- MAXM17630 Offers High 86.47% Efficiency (V IN  = 24V, V OUT  = 3.3V, I OUT  = 1A)
- MAXM17631 Offers High 90.46% Efficiency (V IN  = 24V, V OUT  = 5V, I OUT  = 1A)
- MAXM17632 Offers High 93.12% Efficiency (V IN  = 24V, V OUT  = 12V, I OUT  = 1A)
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Selectable PWM, PFM, and DCM Modes of Operation
- Provision to synchronize the Modules to an External Clock Source
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested
- RESET Outputs, with Pullup Resistor to Respective V CC
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## Quick Start

## Required Equipment

- One 0V to 36V DC, 1A Power Supply
- Digital Multimeters (DMM)
- Load resistors for capable of sinking 1A, at 3.3V, 5V, and 12V

## Equipment Setup and Procedure

The  EV  kits  are  fully  assembled  and  tested.  Follow  the steps below to verify and test individual modules operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set  the  input  power  supply  at  a  voltage  between 4.5V  and  36V  for  MAXM17630,  between  7V  and 36V for MAXM17631, or between 20V and 36V for MAXM17632. Disable the power supply.
- 2) Connect the positive terminal and negative terminal of the power supply to the VIN\_EMI pad and its adjacent PGND pad of the module under evaluation.
- 3) Connect a maximum of 1A resistive load across V OUT pad and its adjacent PGND pad of the corresponding module.
- 4) Verify  that  the  shunts  are  not  installed  on  jumpers (JU101, JU201, JU301) (see Table 1 for details).
- 5) Select  the  shunt  position  on  respective  jumpers (JU102,  JU202,  JU302)  according  to  the  required mode of operation (see Table 2 for details).
- 6) Connect a digital multimeter (in voltage measurement mode) across the V OUT  and respective PGND pads.
- 7) Turn on the input power supply.
- 8) Verify  that  the  digital  multimeter  displays  expected terminal voltage with respect to PGND.

## Detailed Description

The  MAXM17630/MAXM17631/MAXM17632  EV  kits  are designed to demonstrate the salient features of MAXM17630/ MAXM17631/MAXM17632  power  modules.  The  EV  kits consist  of  typical  application  circuits  of  three  different modules.  Each  of  these  circuits  are  electrically  isolated from each other and hosted on the same PCB. Each of the  modules  can  be  evaluated  by  powering  them  from their respective input pins. Individual module settings can be adjusted to evaluate their performance under different operating conditions.

## Evaluates: MAXM17630/MAXM17631/ MAXM17632 Modules in Application

## Setting Switching Frequency

When selecting  the  switching  frequency,  consider  input voltage  range,  desired  output  voltage,  t ON(MIN)   and t OFF(MIN)  of the modules. Resistors (R103, R203, R303) on  the  EV  kit  program  the  desired  switching  frequencies  of  the  modules.  To  optimize  performance  and component size, 900kHz switching frequency is chosen for  MAXM17630,  1250kHz  is  chosen  for  MAXM17631, and 2150kHz is chosen for MAXM17632 modules. Use Table 1 and refer to the Switching Frequency section of the  MAXM17630/MAXM17631/MAXM17632  data  sheet to  choose  different  values  of  resistors  for  programming the required switching frequency.

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The MAXM17630/MAXM17631/MAXM17632 EV kits offer adjustable  input  undervoltage  lockout  levels  for  the modules. In the EV kits, for normal operation, leave the jumpers (JU101, JU201, and JU301) open. When jumper JU101  is  left  open,  MAXM17630  is  enabled  when  the input voltage rises above 4.4V. When jumpers JU201 and JU301 are left open, the MAXM17631 and MAXM17632 modules are enabled when the corresponding input voltages rise above 6.8V and 19.5V respectively. To disable the modules, install shunts across pins 2-3 on jumpers (JU101,  JU201,  and  JU301).  See  Table  1  for  jumper (JU101, JU201, and JU301) settings.

A potential divider formed by the resistors R UPPER  (R101, R201, and R301) and R LOWER  (R102, R202, and R302) sets  the  input  voltage  (V INU )  at  which  the  module  is enabled.

Choose RUPPER (R101, R201, and R301) to be 3.3MΩ and then calculate R LOWER  (R102, R202, and R302) as follows:

<!-- formula-not-decoded -->

Where RLOWER (R102, R202, and R302) is in MΩ.

For  MAXM17630  to  turn  ON  at  4.4V  input,  R102  is calculated to be 1.27MΩ.

For  MAXM17631  to  turn  ON  at  6.8V  input,  R202  is calculated to be 715kΩ.

For  MAXM17632  to  turn  ON  at  19.5V  input,  R302  is calculated to be 215kΩ.

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## MODE Selection and External Clock Synchronization

The  MAXM17630/MAXM17631/MAXM17632  modules support PWM, PFM, and DCM modes of operation. In the EV kits,  leave  the  jumpers  (JU102,  JU202,  and  JU302) OPEN for  operating  the  parts  in  PFM  mode  at  a  lightload. Install shunts across position (1-2) to configure the modules to operate in DCM mode. Install shunts across position  (2-3)  to  configure  the  modules  to  operate  in PWM mode. See Table 2 for jumpers (JU102, JU202, and JU302) settings.

The  internal  oscillators  of  the  devices  can  be  synchronized  to  an  external  clock  signal  on  the  MODE/SYNC pin.  The  external  synchronization  clock  frequency  must be between 1.1 x f SW and 1.4 x f SW, where f SW  is the frequency programmed by the resistors (R103, R203, and R303)  connected  to  the  RT  pin.  The  minimum  external clock  high-pulse  width  should  be  more  than  50ns  and minimum external low-pulse width should be more than 160ns. The jumpers (JU102, JU202, and JU302) must be left unconnected before applying the external clock at the MODE/SYNC pins.

## Adjusting Output Voltage

The  MAXM17632  supports  a  0.9V  to  12V  adjustable output  voltage  range.  The  MAXM17632  evaluation  kit output  voltage  is  preset  to  12V.  Output  voltage  can  be programmed  using  the  values  given  in Table  2 of  the MAXM17630/MAXM17631/MAXM17632 data sheet .  For

## Table 1. (EN/UVLO) Enable/Disable Configuration (JU101, JU201 and JU301)

| SHUNT POSITION   | EN/UVLO PIN                                                                                                     | OUTPUT                                               |
|------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Not installed*   | Connected to the center nodes of the respective resistor-dividers (R101 and R102; R201 and R202; R301 and R302) | Programmed to startup at desired input-voltage level |
| 1-2              | Connected to V IN                                                                                               | Enabled if V IN is greater than V IN(MIN)            |
| 2-3              | Connected to GND                                                                                                | Disabled                                             |

* Default position.

## Evaluates: MAXM17630/MAXM17631/ MAXM17632 Modules in Application

12V output, R305 is chosen as 634kΩ, and R306 is cho -sen as 51kΩ.

## Input Capacitor Selection

The  input  capacitors  (C102,  C202,  and  C302)  serve  to reduce current peaks drawn from the input power supply and reduce switching frequency ripple at the input. The input  capacitance  must  be  greater  than  or  equal  to  the value given in Table 2 of the MAXM17630/MAXM17631/ MAXM17632 data sheet .  Input  capacitors  (C102,  C202, and C302) are chosen to be 4.7µF/50V.

## Output Capacitor Selection

X7R ceramic output capacitors are preferred due to their stability  over  temperature  in  industrial  applications.  The required output capacitors (C107, C207, and C307) are selected from Table 2 of the MAXM17630/MAXM17631/ MAXM17632 data  sheet for  3.3V  and  5V  outputs  as 22µF/25V and for 12V output as 10µF/50V.

## Linear Regulator (VCC and EXTVCC)

Powering  V CC   from  EXTVCC  increases  the  efficiency of  the  module  at  higher  input  voltages.  If  the  applied EXTVCC voltage is greater than 4.7V (typ), internal V CC is  powered  from  EXTVCC.  If  EXTVCC  is  lower  than 4.7V  (typ),  internal  V CC   is  powered  from  V IN .  Connect EXTVCC to output when OUT is programmed to 5V only. In  the  MAXM17631  EV  kit,  EXTVCC  is  connected  to VOUT2 using resistor R205(0Ω). When EXTVCC is not used, leave R205 OPEN and install 0Ω in R206.

Table 2. MODE/SYNC Operation (JU102, JU202, JU302)

| SHUNT POSITION   | MODE/SYNC PIN     | MODE                  |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3              | Connected to GND  | PWM mode of operation |

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter. The  EMI  filter attenuates high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

Use  of  EMI  filter  components  as  shown  in  the  EV  kit schematic  results  in  lower  conducted  emissions  below CISPR22 Class B limits. The MAXM17630/MAXM17631/ MAXM17632 EV kit PCB layouts are also designed to limit radiated  emissions  from  switching  nodes  of  the  power converter, resulting in radiated emissions below CISPR22 Class B limits. Further, capacitors placed near the input of the board help in attenuating high frequency noise.

## Evaluates: MAXM17630/MAXM17631/ MAXM17632 Modules in Application

## Hot Plug-In and Long input cables

The MAXM17630/MAXM17631/MAXM17632 EV kit PCBs provide optional electrolytic capacitors (C101, C201, and C301 to 10µF/50V) to dampen input voltage peaks and oscillations  that  can  arise  during  hot-plug-in  and/or  due to  long  input  cables.  These  capacitors  limit  the  peak voltage at the input of the power modules, when the EV kits  is  powered  directly  from  a  precharged  capacitive source or an industrial backplane PCB. Long input cables between input power source and the EV kits circuit can cause  input-voltage  oscillations  due  to  the  inductance of the cables. The equivalent series resistance (ESR) of the electrolytic capacitor helps damp out the oscillations caused by long input cables.

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report (continued)

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report (continued)

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report (continued)

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report (continued)

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report (continued)

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report (continued)

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report (continued)

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

<!-- image -->

MAXM17630CONDUCTEDEMISSIONSPLOT VouT =3.3V,fsw= 900kHz,FULL LOAD,PWM MODE

<!-- image -->

<!-- image -->

MAXM17631CONDUCTEDEMISSIONSPLOT VouT =5V,fsw=1250kHz,FULLLOAD,PWMMODE

<!-- image -->

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## MAXM17630/MAXM17631/MAXM17632 EV Kits Performance Report (continued)

(V IN  = 24V, T A  = 25°C, unless otherwise noted.)

MAXM17632CONDUCTEDEMISSIONSPLOT VouT=12V,fsw =2150kHz,FULL LOAD,PWM MODE

TUV Rheinland Final\_ScanV

<!-- image -->

<!-- image -->

Frequency (Hz)

RE 30MHz-1GHz\_0-360Deg\_90Deg step\_1-4mtr Height\_Quick Scan\_Config 6.TIL

08:12:41 PM, Wednesday, April 17, 2019

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| Taiyo Yuden     | www.yuden.co.jp   |
| Vishay          | www.vishay.com    |
| Panasonic Corp. | www.panasonic.com |

Note: Indicate that you are using the MAXM17630/ MAXM17631/MAXM17632 modules when contacting these component suppliers.

TUV Rheinland Final\_ScanV

<!-- image -->

Frequency (Hz)

RE 30MHz-1GHz\_0-360Deg\_90Deg step\_1-4mtr Height\_Quick Scan\_Config 5.TIL

TUV Rheinland Final\_ScanV

<!-- image -->

RE 30MHz-1GHz\_0-360deg\_90 dge step\_1-4 mtr height\_Quick Scan\_MAXM17639\_Test2.TIL

01:14:23 PM, Tuesday, March 19, 2019

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17630EVKIT# | EV Kit |
| MAXM17631EVKIT# | EV Kit |
| MAXM17632EVKIT# | EV Kit |

# Denotes RoHS compliance.

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## Evaluates: MAXM17630/MAXM17631/ MAXM17632 Modules in Application

## MAXM17630/MAXM17631/MAXM17632 EV Kits Bill of Materials

|   ITEM |   QTY | DESIGNATOR                         | DESCRIPTION                                              | MANUFACTURER PART NUMBER   |
|--------|-------|------------------------------------|----------------------------------------------------------|----------------------------|
|      1 |     3 | C101, C201, C301                   | 10µF±20%,50V, Aluminimum-Electrolytic Capacitor          | PANASONIC EEE-FK1H100P     |
|      2 |     3 | C102, C202, C302                   | 4.7µF±10%, 50V, X7R ceramic capacitor (1206)             | MURATA GRM31CR71H475KA12   |
|      3 |     3 | C103, C203, C303                   | 0.1µF±10%, 50V, X7R ceramic capacitor (0603)             | MURATA GCJ188R71H104KA12   |
|      4 |     3 | C104, C204, C304                   | 2.2µF±10%, 6.3V, X7R ceramic capacitor (0603)            | TDK CGA3E1X7R0J225K080AC   |
|      5 |     3 | C105, C205, C305                   | 0.1µF±10%, 50V, X7R ceramic capacitor (0402)             | MURATA GRM155R71H104KE14   |
|      6 |     3 | C106, C206, C306                   | 5600pF±10%, 25V, X7R ceramic capacitor (0402)            | MURATA GRM155R71E562KA01   |
|      7 |     2 | C107, C207                         | 22µF±10%, 25V, X7R ceramic capacitor (1210)              | MURATA GRM32ER71E226KE15   |
|      8 |     3 | C108, C208, C308                   | 0.1µF±10%, 25V, X7R ceramic capacitor (0603)             | MURATA GRM188R71E104KA01   |
|      9 |     3 | C109, C209, C309                   | 220pF±10%,100V, X7R ceramic capacitor (0402)             | MURATA GRM155R72A221KA01   |
|     10 |     3 | C110, C210, C310                   | 0.1µF±10%, 100V, X7R ceramic capacitor (0603)            | MURATA GRM188R72A104KA35   |
|     11 |     1 | C307                               | 10µF±10%, 50V, X7R ceramic capacitor (1210)              | MURATA GRM32ER71H106KA12   |
|     15 |     3 | R101, R201, R301                   | 3.3MΩ ±1% resistor (0402)                                | VISHAY DALE CRCW04023M30FK |
|     16 |     1 | R102                               | 1.27MΩ ±1% resistor (0402)                               | VISHAY DALE CRCW04021M27FK |
|     17 |     1 | R103                               | 21kΩ ±1% resistor (0402)                                 | PANASONIC ERJ-2RKF2102     |
|     18 |     3 | R104, R204, R304                   | 100kΩ ±1% resistor (0402)                                | VISHAY CRCW0402100KFK      |
|     19 |     1 | R202                               | 715kΩ ±1% resistor (0402)                                | PANASONIC ERJ-2RKF7153     |
|     20 |     1 | R203                               | 15kΩ ±1% resistor (0402)                                 | VISHAY DALE CRCW040215K0FK |
|     21 |     1 | R205                               | 0Ω±0% resistor (0402)                                    | PANASONIC ERJ-2GE0R00      |
|     22 |     1 | R302                               | 215kΩ ±1% resistor (0402)                                | VISHAY DALE CRCW0402215KFK |
|     23 |     1 | R303                               | 8.2kΩ ±1% resistor (0402)                                | VISHAY DALE CRCW04028K20FK |
|     24 |     1 | R305                               | 634kΩ ±1% resistor (0402)                                | VISHAY DALE CRCW0402634KFK |
|     25 |     1 | R306                               | 51kΩ ±1% resistor (0402)                                 | PANASONIC ERJ-2RKF5102     |
|     27 |     1 | U101                               | MAXM17630, 16-pin uSLIC™ Step down Power Module          | MAXIM MAXM17630AME+        |
|     28 |     1 | U201                               | MAXM17631, 16-pin uSLIC™ Step down Power Module          | MAXIM MAXM17631AME+        |
|     29 |     1 | U301                               | MAXM17632, 16-pin uSLIC™ Step down Power Module          | MAXIM MAXM17632AME+        |
|     31 |     6 | C111, C112, C211, C212, C311, C312 | OPTIONAL : 0.22µF±10%, 50V, X7R ceramic capacitor (1206) | KEMET C1206C224J5RAC       |
|     32 |     3 | L101, L201, L301                   | OPTIONAL : 10µH Ferrite Wirewound Inductor(1008)         | MURATA LQH2HPZ100MJR       |
|     33 |     1 | R206                               | Package Outline 0402 resistor                            | OPEN                       |

## MAXM17630/MAXM17631/MAXM17632 EV Kits Schematic Diagrams

## MAXM17630 EV Kit Schematic diagram

<!-- image -->

## MAXM17630/MAXM17631/MAXM17632 EV Kits Schematic Diagrams (continued)

## MAXM17631 EV Kit Schematic diagram

<!-- image -->

## MAXM17630/MAXM17631/MAXM17632 EV Kits Schematic Diagrams (continued)

## MAXM17632 EV Kit Schematic diagram

<!-- image -->

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## MAXM1730/MAXM17631/MAXM17632 EV Kits PCB Layout Diagrams

MAXM17630/MAXM17631/MAXM17632 EV Kits-Top Silkscreen

<!-- image -->

MAXM17630/MAXM17631/MAXM17632 EV Kits-Top Layer

<!-- image -->

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## MAXM1730/MAXM17631/MAXM17632 EV Kits PCB Layout Diagrams (continued)

MAXM17630/MAXM17631/MAXM17632 EV Kits-Layer 2

<!-- image -->

MAXM17630/MAXM17631/MAXM17632 EV Kits-Layer 3

<!-- image -->

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## MAXM1730/MAXM17631/MAXM17632 EV Kits PCB Layout Diagrams (continued)

MAXM17630/MAXM17631/MAXM17632 EV Kits-Bottom Layer

<!-- image -->

MAXM17630/MAXM17631/MAXM17632 EV Kits-Bottom Silkscreen

<!-- image -->

## MAXM17630/MAXM17631/ MAXM17632 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAXM17630/MAXM17631/ MAXM17632 Modules in Application